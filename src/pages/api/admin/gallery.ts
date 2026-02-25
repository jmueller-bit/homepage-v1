import type { APIRoute } from 'astro';
import { contentfulClient, getManagementClient, GALLERY_CONTENT_TYPE } from '../../../lib/contentful';
import { triggerDeploy } from '../../../lib/deploy';

export const GET: APIRoute = async () => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: GALLERY_CONTENT_TYPE,
      order: ['fields.reihenfolge'],
      limit: 50,
      include: 1,
    });

    const images = entries.items.map((entry: any) => ({
      id: entry.sys.id,
      title: entry.fields.titel,
      category: entry.fields.kategorie || 'Allgemein',
      order: entry.fields.reihenfolge ?? 0,
      src: entry.fields.bild?.[0]?.fields?.file?.url 
        ? `https:${entry.fields.bild[0].fields.file.url}`
        : null,
      width: entry.fields.bild?.[0]?.fields?.file?.details?.image?.width,
      height: entry.fields.bild?.[0]?.fields?.file?.details?.image?.height,
    }));

    return new Response(JSON.stringify(images), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return new Response(JSON.stringify({ error: 'Fehler beim Laden der Galerie' }), {
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

    await triggerDeploy();

    return new Response(JSON.stringify({ success: true, message: 'Bild gelöscht' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error deleting gallery image:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
