# Admin-Panel für Lehrer

Ein einfaches Admin-Panel zum Verwalten von News und Galerie-Bildern über Contentful.

## Features

- **Einfaches Login** - Passwort-basierte Authentifizierung (Cookie-basiert, 8h gültig)
- **News verwalten** - Neue Artikel erstellen und löschen
- **Galerie** - Bilder verwalten (Löschen, Übersicht)
- **Mobile-First** - Optimiert für Smartphone und PC
- **Contentful Integration** - Direkte Verbindung zum CMS
- **Automatisches Deployment** - Nach Content-Änderungen wird Netlify neu deployed
- **Telegram Benachrichtigungen** - Optional: Neue News werden per Telegram gesendet

## Zugriff

Öffne `/admin` auf der Website.

Standard-Passwort: `alz2024` (kann über Umgebungsvariable `ADMIN_PASSWORD` geändert werden)

## Einrichtung

### 1. Contentful Account einrichten

1. Erstelle einen Account auf [Contentful](https://www.contentful.com/)
2. Erstelle einen neuen Space
3. Erstelle Content Models:
   - **newsArtikel**: titel (Text), slug (Text), vorschautext (Text), inhalt (Rich Text), datum (Date), kategorie (Text), titelbild (Media)
   - **galleryImage**: titel (Text), kategorie (Text), reihenfolge (Number), bild (Media, multiple)

### 2. API Keys erstellen

**Delivery API (nur Lesen):**
1. Settings → API keys
2. "Add API key"
3. Space ID und Content Delivery API Token kopieren

**Management API (Schreiben):**
1. Settings → API keys → Content management tokens
2. "Create personal access token"
3. Token kopieren

### 3. Umgebungsvariablen setzen

Erstelle eine `.env` Datei im Root-Verzeichnis:

```env
# Contentful
CONTENTFUL_SPACE_ID=dein_space_id
CONTENTFUL_ACCESS_TOKEN=dein_delivery_token
CONTENTFUL_MANAGEMENT_TOKEN=dein_management_token

# Admin
ADMIN_PASSWORD=dein_sicheres_passwort

# Optional: Telegram
TELEGRAM_BOT_TOKEN=dein_bot_token
TELEGRAM_CHAT_ID=deine_chat_id

# Optional: Netlify Deploy Hook
NETLIFY_DEPLOY_HOOK=dein_deploy_hook
```

### 4. Telegram Bot einrichten (optional)

1. Schreibe [@BotFather](https://t.me/botfather) auf Telegram
2. Erstelle neuen Bot: `/newbot`
3. Kopiere den Token
4. Schreibe dem Bot eine Nachricht
5. Hole die Chat-ID: `https://api.telegram.org/bot<DEIN_TOKEN>/getUpdates`

### 5. Netlify Deploy Hook (optional)

1. Gehe zu Netlify → Site settings → Build & deploy → Build hooks
2. "Add build hook"
3. Name: "Admin Panel Deploy"
4. Copy the hook URL

## Verwendung

### News erstellen

1. Auf `/admin` anmelden
2. "News verwalten" auswählen
3. "+ Neu" klicken
4. Formular ausfüllen:
   - **Titel** - Überschrift der News
   - **URL-Slug** - Wird automatisch generiert (z.B. "sommerfest-2024")
   - **Kategorie** - Optional
   - **Kurzbeschreibung** - Text für die Übersicht
   - **Inhalt** - Der vollständige Artikel
5. "Veröffentlichen" klicken

Die News wird automatisch:
- In Contentful gespeichert und publiziert
- Auf der Website angezeigt
- Per Telegram benachrichtigt (falls konfiguriert)
- Ein Netlify Deployment wird getriggert

### News löschen

1. In der News-Liste auf "Löschen" klicken
2. Bestätigen

### Bilder verwalten

**Hinweis:** Bilder müssen aktuell direkt in Contentful hochgeladen werden:

1. Auf `/admin` anmelden
2. "Galerie" auswählen
3. "+ Bild hinzufügen" klicken
4. Wird zu Contentful weitergeleitet
5. Neues galleryImage Entry erstellen
6. Bild hochladen und verknüpfen
7. Publizieren

**Bilder löschen:**
- Direkt in der Admin-Galerie auf "×" klicken

## Architektur

```
Astro Project
├── src/lib/
│   ├── contentful.ts       # Contentful Client & Types
│   ├── admin-auth.ts       # Auth Utils
│   ├── telegram.ts         # Telegram Notifications
│   └── deploy.ts           # Netlify Deploy
├── src/pages/api/admin/
│   ├── news.ts             # News API (GET/POST/DELETE)
│   └── gallery.ts          # Gallery API (GET/DELETE)
└── src/pages/admin/
    ├── index.astro         # Login Page
    ├── dashboard.astro     # Dashboard
    ├── news.astro          # News Management
    └── galerie.astro       # Gallery Management
```

## Sicherheit

- Management Token niemals im Client exposen
- API-Routen server-seitig (Astro API Routes)
- Passwort als Umgebungsvariable
- Cookie-basierte Auth mit 8h Ablauf
- SameSite=Strict Cookies

## Fehlerbehebung

### "Admin-Panel nicht konfiguriert"

Der `CONTENTFUL_MANAGEMENT_TOKEN` fehlt. Token erstellen und in `.env` eintragen.

### "Falsches Passwort"

- `ADMIN_PASSWORD` in `.env` prüfen
- Server neu starten

### Bilder werden nicht angezeigt

- Contentful Assets verarbeiten (kann 1-2 Minuten dauern)
- Bild in Contentful veröffentlichen
- Seite neu laden

### Login funktioniert nicht

- Cookie-Blocker deaktivieren
- Inkognito-Modus testen

## Anpassungen

### Passwort ändern

In `.env`:
```env
ADMIN_PASSWORD=neues_passwort_2024
```

### Telegram deaktivieren

Einfach `TELEGRAM_BOT_TOKEN` nicht setzen.

### Farben anpassen

Die Farben sind in den Astro-Admin-Seiten direkt im CSS definiert:
- Primärfarbe: `#8b9a46` (ALZ Grün)
- Hintergrund: `#f5f5f0` (Creme)
