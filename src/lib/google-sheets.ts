/**
 * Google Sheets CMS Integration
 * Fetches content from Google Sheets for the ALZ Website
 */

import { google } from 'googleapis';

// Configuration
const SHEET_ID = import.meta.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = import.meta.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

console.log(`[CMS] Initializing fetching from Sheet: ${SHEET_ID}`);

// Initialize Sheets client
function getSheetsClient() {
  if (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    console.warn('Google Sheets credentials not configured. Using mock data.');
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
}

// Types
export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  image?: string;
  category?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
}

export interface JobPosting {
  id: string;
  title: string;
  type: string; // Vollzeit, Teilzeit, etc.
  availableFrom: string;
  description: string;
}

/**
 * Fetch news items from Google Sheets
 * Mapping based on user's Form Response structure:
 * A: Timestamp (0), B: Email (1), C: Title (2), D: Category (3), E: Excerpt (4), F: Content (5), 
 * G: Date (6), H: Tags (7), I: Image (8), ... O: Slug (14), ... R: Status (17)
 */
export async function getNews(): Promise<NewsItem[]> {
  const sheets = getSheetsClient();
  if (!sheets) return getMockNews();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Form Responses 1!A2:R', // Exact name from logs
    });

    const rows = response.data.values || [];

    return rows
      .filter(row => {
        const status = row[17] || '';
        const category = (row[3] || '').trim();
        return status === 'Published' && ['Blog', 'Newsletter', 'Presse'].includes(category);
      })
      .map(row => ({
        id: row[0] || '',
        title: row[2] || '',
        slug: row[14] || row[0],
        excerpt: row[4] || '',
        content: row[5] || '',
        date: row[6] || '',
        image: row[8] || '',
        category: row[3] || '',
      }));
  } catch (error) {
    console.error('Error fetching news from Google Sheets:', error);
    return getMockNews();
  }
}

/**
 * Fetch events from Google Sheets
 */
export async function getEvents(): Promise<Event[]> {
  const sheets = getSheetsClient();
  if (!sheets) return getMockEvents();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Form Responses 1!A2:R',
    });

    const rows = response.data.values || [];

    return rows
      .filter(row => row[17] === 'Published' && row[3] === 'Event')
      .map(row => ({
        id: row[0] || '',
        title: row[2] || '',
        date: row[6] || '',
        time: '', // Customise if needed
        location: 'Campus',
        description: row[4] || '',
      }));
  } catch (error) {
    console.error('Error fetching events from Google Sheets:', error);
    return getMockEvents();
  }
}

/**
 * Fetch job postings from Google Sheets
 */
export async function getJobs(): Promise<JobPosting[]> {
  const sheets = getSheetsClient();
  if (!sheets) return getMockJobs();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Form Responses 1!A2:R',
    });

    const rows = response.data.values || [];

    return rows
      .filter(row => row[17] === 'Published' && row[3] === 'Jobangebot')
      .map(row => ({
        id: row[0] || '',
        title: row[2] || '',
        type: 'Vollzeit', // Customise if needed
        availableFrom: row[6] || '',
        description: row[4] || '',
      }));
  } catch (error) {
    console.error('Error fetching jobs from Google Sheets:', error);
    return getMockJobs();
  }
}

// Mock data for development
function getMockNews(): NewsItem[] {
  return [
    {
      id: '1',
      title: 'Neues Schuljahr beginnt',
      slug: 'neues-schuljahr-beginnt',
      excerpt: 'Wir starten mit vielen neuen Projekten und freuen uns auf ein spannendes Schuljahr.',
      date: '2025-09-01',
      category: 'Aktuelles',
    },
    {
      id: '2',
      title: 'Sommerfest 2025',
      slug: 'sommerfest-2025',
      excerpt: 'Ein Rückblick auf unser wunderschönes Sommerfest mit vielen Bildern.',
      date: '2025-07-15',
      category: 'Veranstaltungen',
    },
  ];
}

function getMockEvents(): Event[] {
  return [
    {
      id: '1',
      title: 'Elternsprechtag',
      date: '2025-11-20',
      time: '14:00 - 18:00',
      location: 'Schulgebäude',
      description: 'Individuelle Gespräche mit den Pädagog:innen.',
    },
  ];
}

function getMockJobs(): JobPosting[] {
  return [
    {
      id: '1',
      title: 'Pädagog:in Primaria',
      type: 'Vollzeit',
      availableFrom: 'Ab sofort',
      description: 'Wir suchen engagierte Pädagog:innen für unsere Primaria.',
    },
    {
      id: '2',
      title: 'Praktikum & Hospitanz',
      type: 'Ganzjährig',
      availableFrom: 'Flexibel',
      description: 'Sammeln Sie Erfahrung in der reformpädagogischen Arbeit.',
    },
  ];
}