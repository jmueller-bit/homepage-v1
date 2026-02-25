import type { APIRoute } from 'astro';
import { contentfulClient, getManagementClient, NEWS_CONTENT_TYPE } from '../../../lib/contentful';
import { triggerDeploy } from '../../../lib/deploy';
import { sendTelegramNotification, formatNewsNotification } from '../../../lib/telegram';

export const GET: APIRoute = async () => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: NEWS_CONTENT_TYPE,
      order: ['-fields.datum'],
      limit: 50,
    });

    const news = entries.items.map((entry: any) => ({
      id: entry.sys.id,
      title: entry.fields.titel || entry.fields.title,
      slug: entry.fields.slug,
      excerpt: entry.fields.vorschautext || entry.fields.excerpt || '',
      date: entry.fields.datum || entry.fields.publishDate || entry.fields.date,
      category: entry.fields.kategorie || entry.fields.category,
      image: entry.fields.titelbild?.fields?.file?.url 
        ? { url: `https:${entry.fields.titelbild.fields.file.url}` }
        : null,
    }));

    return new Response(JSON.stringify(news), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Laden der News' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const managementClient = await getManagementClient();
    if (!managementClient) {
      return new Response(JSON.stringify({ 
        error: 'Admin-Panel nicht konfiguriert. CONTENTFUL_MANAGEMENT_TOKEN fehlt.' 
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    
    if (!body.title || !body.slug || !body.excerpt || !body.content) {
      return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const space = await managementClient.getSpace(import.meta.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment('master');

    // Prüfe ob slug bereits existiert
    const existing = await contentfulClient.getEntries({
      content_type: NEWS_CONTENT_TYPE,
      'fields.slug': body.slug,
      limit: 1,
    });

    if (existing.items.length > 0) {
      return new Response(JSON.stringify({ error: 'Dieser URL-Slug existiert bereits' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Erstelle Entry
    const entry = await environment.createEntry(NEWS_CONTENT_TYPE, {
      fields: {
        titel: { 'en-US': body.title },
        slug: { 'en-US': body.slug },
        vorschautext: { 'en-US': body.excerpt },
        inhalt: { 
          'en-US': {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'text',
                    value: body.content,
                    marks: [],
                    data: {}
                  }
                ]
              }
            ]
          }
        },
        datum: { 'en-US': new Date().toISOString() },
        ...(body.category && { kategorie: { 'en-US': body.category } }),
      }
    });

    // Publizieren
    await entry.publish();

    // Telegram Benachrichtigung
    await sendTelegramNotification(
      formatNewsNotification(body.title, body.slug, body.excerpt)
    );

    // Netlify Deployment triggern
    const deployResult = await triggerDeploy();

    return new Response(JSON.stringify({ 
      success: true, 
      id: entry.sys.id,
      message: 'News erfolgreich erstellt',
      deploy: deployResult.success ? 'Deployment gestartet' : 'Deployment übersprungen'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error creating news:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Fehler beim Erstellen der News' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const managementClient = await getManagementClient();
    if (!managementClient) {
      return new Response(JSON.stringify({ 
        error: 'Admin-Panel nicht konfiguriert' 
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { id } = await request.json();
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID fehlt' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const space = await managementClient.getSpace(import.meta.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment('master');
    
    const entry = await environment.getEntry(id);
    await entry.unpublish();
    await entry.delete();

    // Deploy
    await triggerDeploy();

    return new Response(JSON.stringify({ success: true, message: 'News gelöscht' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error deleting news:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
