import { google } from 'googleapis';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/"/g, '');

console.log('Testing connection with:');
console.log('Sheet ID:', SHEET_ID);
console.log('Email:', SERVICE_ACCOUNT_EMAIL);

async function test() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: SERVICE_ACCOUNT_EMAIL,
                private_key: PRIVATE_KEY,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        console.log('Fetching spreadsheet metadata...');
        const meta = await sheets.spreadsheets.get({
            spreadsheetId: SHEET_ID,
        });
        console.log('Success! Spreadsheet title:', meta.data.properties?.title);

        console.log('Fetching values from "Form Responses 1"...');
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: 'Form Responses 1!A1:R10',
        });
        console.log('Data found (rows):', res.data.values?.length || 0);
        if (res.data.values) {
            res.data.values.forEach((row, i) => {
                console.log(`Row ${i}:`, row);
            });
        }

    } catch (err) {
        console.error('ERROR:', err.message);
        if (err.response) {
            console.error('Details:', err.response.data);
        }
    }
}

test();
