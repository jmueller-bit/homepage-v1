import { createClient } from 'contentful';

export const NEWS_CONTENT_TYPE = 'newsArtikel';
export const GALLERY_CONTENT_TYPE = 'galleryImage';
export const TEAM_CONTENT_TYPE = 'teamMitglied';

// Delivery Client (read-only, für öffentliche Website)
export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID || 'TODO',
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN || 'TODO',
});

// Management Client (für Admin-Panel - Create/Update/Delete)
export const getManagementClient = async () => {
  if (!import.meta.env.CONTENTFUL_MANAGEMENT_TOKEN) {
    return null;
  }
  const { createClient } = await import('contentful-management');
  return createClient({
    accessToken: import.meta.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });
};

// Types
export type NewsEntry = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content?: unknown;
  image?: {
    url: string;
    width?: number;
    height?: number;
  };
  category?: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  src: string;
  alt: string;
  category: string;
  order: number;
  description?: string;
  width?: number;
  height?: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  order?: number;
  photo?: {
    url: string;
    width?: number;
    height?: number;
  };
};

function mapNewsEntry(entry: any): NewsEntry | null {
  const fields = entry.fields as Record<string, any>;

  const title = fields.titel || fields.title;
  const slug = fields.slug;
  const excerpt = fields.vorschautext || fields.excerpt || '';
  const date = fields.datum || fields.publishDate || fields.date;
  const content = fields.inhalt || fields.content;
  const category = fields.kategorie || fields.category;
  const imageAsset = fields.titelbild || fields.coverImage;

  if (!title || !slug || !date) {
    return null;
  }

  const imageFile = imageAsset?.fields?.file;

  return {
    id: entry.sys.id,
    title,
    slug,
    excerpt,
    date,
    content,
    category,
    image: imageFile
      ? {
        url: imageFile.url?.startsWith('http') ? imageFile.url : `https:${imageFile.url}`,
        width: imageFile.details?.image?.width,
        height: imageFile.details?.image?.height,
      }
      : undefined,
  };
}

function mapGalleryImage(entry: any): GalleryImage | null {
  const fields = entry.fields as Record<string, any>;

  const title = fields.titel;
  const category = fields.kategorie || 'Allgemein';
  const order = fields.reihenfolge ?? 0;
  
  const bildArray = fields.bild;
  let imageAsset = null;
  
  if (Array.isArray(bildArray) && bildArray.length > 0) {
    imageAsset = bildArray[0];
  }

  const imageFile = imageAsset?.fields?.file;

  if (!title || !imageFile) {
    return null;
  }

  const imageUrl = imageFile.url?.startsWith('http') ? imageFile.url : `https:${imageFile.url}`;

  return {
    id: entry.sys.id,
    title,
    src: imageUrl,
    alt: title,
    category,
    order: typeof order === 'number' ? order : 0,
    width: imageFile.details?.image?.width,
    height: imageFile.details?.image?.height,
  };
}

function mapTeamMember(entry: any): TeamMember | null {
  const fields = entry.fields as Record<string, any>;

  const name = fields.name || fields.titel || fields.vorname || fields.fullName;
  const role = fields.funktion || fields.role || fields.rolle || fields.position;
  let bio = fields.bio || fields.beschreibung || fields.text;
  const order = fields.order ?? fields.reihenfolge;
  const photoAsset = fields.photo || fields.foto || fields.bild;

  if (!name || !role) return null;

  // Extract simple text if bio is a Rich Text object
  if (bio && typeof bio === 'object' && bio.nodeType === 'document') {
    try {
      bio = bio.content
        ?.map((c: any) => c.content?.map((cc: any) => cc.value || '').join(''))
        .join('\n');
    } catch (e) {
      bio = '';
    }
  }

  const photoFile = photoAsset?.fields?.file;

  return {
    id: entry.sys.id,
    name,
    role,
    bio: typeof bio === 'string' ? bio : undefined,
    order: typeof order === 'number' ? order : undefined,
    photo: photoFile
      ? {
        url: photoFile.url?.startsWith('http') ? photoFile.url : `https:${photoFile.url}`,
        width: photoFile.details?.image?.width,
        height: photoFile.details?.image?.height,
      }
      : undefined,
  };
}

export async function getNews(limit = 10): Promise<NewsEntry[]> {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  if (!spaceId || spaceId === 'TODO') {
    console.warn('⚠️ WARNING: CONTENTFUL_SPACE_ID not set!');
    return [];
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: NEWS_CONTENT_TYPE,
      order: ['-fields.datum'],
      limit,
    });

    return (entries.items.map(mapNewsEntry).filter(Boolean) as NewsEntry[]) || [];
  } catch (error: any) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsEntry | null> {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: NEWS_CONTENT_TYPE,
      'fields.slug': slug,
      limit: 1,
    });

    const mapped = mapNewsEntry(entries.items[0]);
    return mapped || null;
  } catch (error) {
    console.error('Error fetching news by slug:', error);
    return null;
  }
}

export async function getGalleryImages(limit = 50): Promise<GalleryImage[]> {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  if (!spaceId || spaceId === 'TODO') {
    return [];
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: GALLERY_CONTENT_TYPE,
      order: ['fields.reihenfolge'],
      limit,
      include: 1,
    });

    return (entries.items.map(mapGalleryImage).filter(Boolean) as GalleryImage[])
      .sort((a, b) => a.order - b.order);
  } catch (error: any) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  if (!spaceId || spaceId === 'TODO') {
    return [];
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: TEAM_CONTENT_TYPE,
      limit: 50,
    });

    const mapped = entries.items.map(mapTeamMember).filter(Boolean) as TeamMember[];
    return mapped.sort((a, b) => {
      const aOrder = a.order ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.order ?? Number.MAX_SAFE_INTEGER;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.name.localeCompare(b.name);
    });
  } catch (error: any) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

function normalizeNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  const members = await getTeamMembers();
  const normalizedSlug = slug.toLowerCase();
  return members.find(member => normalizeNameToSlug(member.name) === normalizedSlug) || null;
}
