import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  const hasAccessToken = !!import.meta.env.CONTENTFUL_ACCESS_TOKEN;
  
  return new Response(JSON.stringify({
    spaceIdSet: !!spaceId,
    spaceIdValue: spaceId ? spaceId.substring(0, 10) + '...' : 'NOT SET',
    accessTokenSet: hasAccessToken,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
