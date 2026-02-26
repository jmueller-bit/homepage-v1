import type { APIRoute } from 'astro';
import { contentfulClient, NEWS_CONTENT_TYPE } from '../../../lib/contentful';

export const GET: APIRoute = async () => {
  try {
    const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
    const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;
    
    // Teste Contentful Verbindung
    const entries = await contentfulClient.getEntries({
      content_type: NEWS_CONTENT_TYPE,
      limit: 1,
    });
    
    return new Response(JSON.stringify({
      success: true,
      spaceId: spaceId ? spaceId.substring(0, 10) + '...' : 'NOT SET',
      contentType: NEWS_CONTENT_TYPE,
      totalEntries: entries.total,
      firstEntry: entries.items.length > 0 ? {
        id: entries.items[0].sys.id,
        title: entries.items[0].fields.titel || entries.items[0].fields.title,
      } : null,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
      stack: error.stack,
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
