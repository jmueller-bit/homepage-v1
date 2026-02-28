import { createClient } from 'contentful';

export const NEWS_CONTENT_TYPE = 'newsArtikel';
export const GALLERY_CONTENT_TYPE = 'galleryImage';
export const TEAM_CONTENT_TYPE = 'teamMitglied';
export const JOB_CONTENT_TYPE = 'stellen';
export const SCHULE_ALLGEMEIN_CONTENT_TYPE = 'schuleAllgemein';
export const SCHULE_EVENT_CONTENT_TYPE = 'schuleEvent';

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
  author?: string;
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
  images?: GalleryImage[]; // Ein Eintrag kann mehrere Bilder haben
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: unknown; // RichText
  h1?: string;
  order?: number;
  photo?: {
    url: string;
    width?: number;
    height?: number;
  };
};

export type Job = {
  id: string;
  title: string;
  descriptionShort: string;
  descriptionLong?: unknown;
  media?: {
    url: string;
    title?: string;
  }[];
  order?: number;
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
  const author = fields.autor || fields.author;

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
    author: typeof author === 'string' ? author : undefined,
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
  
  if (!title || !Array.isArray(bildArray) || bildArray.length === 0) {
    return null;
  }

  // First image is the main image
  const mainImageAsset = bildArray[0];
  const mainImageFile = mainImageAsset?.fields?.file;
  
  if (!mainImageFile) {
    return null;
  }

  const mainImageUrl = mainImageFile.url?.startsWith('http') ? mainImageFile.url : `https:${mainImageFile.url}`;

  // If there are multiple images, create an images array
  const images: GalleryImage[] = [];
  if (bildArray.length > 1) {
    for (let i = 1; i < bildArray.length; i++) {
      const asset = bildArray[i];
      const file = asset?.fields?.file;
      if (file) {
        const url = file.url?.startsWith('http') ? file.url : `https:${file.url}`;
        images.push({
          id: `${entry.sys.id}-${i}`,
          title: `${title} (${i + 1}/${bildArray.length})`,
          src: url,
          alt: title,
          category,
          order: (typeof order === 'number' ? order : 0) + i * 0.1,
          width: file.details?.image?.width,
          height: file.details?.image?.height,
        });
      }
    }
  }

  return {
    id: entry.sys.id,
    title,
    src: mainImageUrl,
    alt: title,
    category,
    order: typeof order === 'number' ? order : 0,
    width: mainImageFile.details?.image?.width,
    height: mainImageFile.details?.image?.height,
    images: images.length > 0 ? images : undefined,
  };
}

function mapTeamMember(entry: any): TeamMember | null {
  const fields = entry.fields as Record<string, any>;

  const name = fields.name;
  const role = fields.funktion;
  const bio = fields.beschreibung;
  const h1 = fields.h1;
  const order = fields.reihenfolge;
  const photoAsset = fields.foto;

  if (!name || !role) return null;

  const photoFile = photoAsset?.fields?.file;

  return {
    id: entry.sys.id,
    name,
    role,
    bio,
    h1,
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

function mapJob(entry: any): Job | null {
  const fields = entry.fields as Record<string, any>;

  const title = fields.position || fields.titel || fields.title;
  const descriptionShort = fields.beschreibungKurz || fields.descriptionShort || '';
  const descriptionLong = fields.beschreibungLang || fields.descriptionLong;
  const order = fields.reihenfolge ?? fields.order;
  const mediaAssets = fields.medien || fields.media;

  if (!title) return null;

  const media = Array.isArray(mediaAssets) 
    ? mediaAssets.map((asset: any) => ({
        url: asset?.fields?.file?.url?.startsWith('http') 
          ? asset.fields.file.url 
          : `https:${asset?.fields?.file?.url}`,
        title: asset?.fields?.title,
      })).filter((m: any) => m.url)
    : undefined;

  return {
    id: entry.sys.id,
    title,
    descriptionShort: typeof descriptionShort === 'string' ? descriptionShort : '',
    descriptionLong,
    media,
    order: typeof order === 'number' ? order : undefined,
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

export async function getJobs(): Promise<Job[]> {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  if (!spaceId || spaceId === 'TODO') {
    return [];
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: JOB_CONTENT_TYPE,
      limit: 50,
    });

    const mapped = entries.items.map(mapJob).filter(Boolean) as Job[];
    return mapped.sort((a, b) => {
      const aOrder = a.order ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.order ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });
  } catch (error: any) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

// Hilfsfunktion, die alle Bilder (inkl. zusätzliche) flach zurückgibt
export async function getAllGalleryImages(limit = 100): Promise<GalleryImage[]> {
  const entries = await getGalleryImages(limit);
  const allImages: GalleryImage[] = [];
  
  for (const entry of entries) {
    allImages.push(entry);
    if (entry.images) {
      allImages.push(...entry.images);
    }
  }
  
  return allImages.sort((a, b) => a.order - b.order);
}

// Typ für Schule-Allgemein und Schule-Events (verwenden gleiche Struktur wie Gallery)
export type SchuleImage = GalleryImage;

export async function getSchuleAllgemeinImages(limit = 50): Promise<SchuleImage[]> {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  if (!spaceId || spaceId === 'TODO') {
    return [];
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: SCHULE_ALLGEMEIN_CONTENT_TYPE,
      order: ['fields.reihenfolge'],
      limit,
      include: 1,
    });

    return (entries.items.map(mapGalleryImage).filter(Boolean) as GalleryImage[])
      .sort((a, b) => a.order - b.order);
  } catch (error: any) {
    console.error('Error fetching schule allgemein images:', error);
    return [];
  }
}

export async function getSchuleEventImages(limit = 50): Promise<SchuleImage[]> {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  if (!spaceId || spaceId === 'TODO') {
    return [];
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: SCHULE_EVENT_CONTENT_TYPE,
      order: ['fields.reihenfolge'],
      limit,
      include: 1,
    });

    return (entries.items.map(mapGalleryImage).filter(Boolean) as GalleryImage[])
      .sort((a, b) => a.order - b.order);
  } catch (error: any) {
    console.error('Error fetching schule event images:', error);
    return [];
  }
}
