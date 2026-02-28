# Homepage Struktur - Astrid Lindgren Zentrum

**Letzte Aktualisierung:** 28. Februar 2026  
**Framework:** Astro.js  
**Deployment:** Vercel  
**CMS:** Contentful

## 1. Seitenstruktur

### 1.1 Öffentliche Seiten

| Seite | Pfad | Contentful Integration | Status |
|-------|------|------------------------|--------|
| **Startseite** | `/` | ✅ Hero Content | ✅ Live |
| **Über Uns** | `/ueber-uns/` | ✅ Team-Mitglieder | ✅ Live |
| **Schule** | `/schule/` | ❌ Statisch | ✅ Live |
| **Schulstufen** | `/schule/schulstufen/` | ❌ Statisch | ✅ Live |
| **Konzept** | `/schule/konzept/` | ❌ Statisch | ⚠️ Inhalt fehlt |
| **Tagesablauf** | `/schule/tagesablauf/` | ❌ Statisch | ✅ Live |
| **Schulleben** | `/schulleben/` | ✅ News, Galerie | ✅ Live |
| **Aktuelles** | `/schulleben/aktuelles/` | ✅ News-Artikel | ✅ Live |
| **Galerie** | `/schulleben/galerie/` | ✅ Bilder | ✅ Live |
| **Eltern** | `/eltern/` | ❌ Statisch | ✅ Live |
| **Anmeldung** | `/eltern/anmeldung/` | ❌ Statisch | ✅ Live |
| **Interessiert** | `/eltern/interessiert/` | ❌ Statisch | ✅ Live |
| **Services** | `/eltern/services/` | ❌ Statisch | ⚠️ Inhalt fehlt |
| **Unterstützen** | `/unterstuetzen/` | ❌ Statisch | ⚠️ Inhalt fehlt |
| **Karriere** | `/karriere/` | ✅ Stellen (stellen) | ✅ Live |
| **Kontakt** | `/kontakt/` | ❌ Statisch | ✅ Live |
| **Impressum** | `/impressum/` | ❌ Statisch | ✅ Live |
| **Datenschutz** | `/datenschutz/` | ❌ Statisch | ✅ Live |

### 1.2 Dynamische Seiten

| Seite | Pfad | Contentful Integration | Status |
|-------|------|------------------------|--------|
| **Team Detail** | `/team/[slug]/` | ✅ Team-Mitglieder | ✅ Live |
| **News Detail** | `/news/[slug]/` | ✅ News-Artikel | ✅ Live |

### 1.3 Admin-Bereich

| Seite | Pfad | Contentful Integration | Status |
|-------|------|------------------------|--------|
| **Login** | `/admin/` | ❌ Lokale Authentifizierung | ✅ Funktioniert |
| **Dashboard** | `/admin/dashboard/` | ✅ Contentful API | ✅ Funktioniert |
| **News Admin** | `/admin/news/` | ✅ Contentful Management | ✅ Funktioniert |
| **Galerie Admin** | `/admin/galerie/` | ✅ Contentful Management | ✅ Funktioniert |

## 2. Contentful Content-Typen

### 2.1 Aktive Content-Typen

| Content-Typ | Beschreibung | Felder | Verwendung |
|-------------|--------------|--------|------------|
| **newsArtikel** | News-Artikel | titel, slug, vorschautext, datum, inhalt, titelbild, kategorie, autor | News-Seiten |
| **galleryImage** | Galerie-Bilder | titel, bild (Asset), kategorie, reihenfolge | Galerie |
| **teamMitglied** | Team-Mitglieder | name, funktion, beschreibung (RichText), foto, reihenfolge, h1 | Team-Seiten |
| **stellen** | Job-Angebote | position, beschreibungKurz, beschreibungLang (RichText), medien, reihenfolge | Karriere-Seite |

### 2.2 Geplante Content-Typen

| Content-Typ | Beschreibung | Status |
|-------------|--------------|--------|
| **schuleAllgemein** | Alltagsbilder Schulalltag | ✅ Implementiert |
| **schuleEvent** | Eventbilder | ✅ Implementiert |

## 3. Komponenten-Struktur

```
src/
├── components/
│   ├── Button.astro
│   ├── Card.astro
│   ├── Hero.astro
│   ├── Navbar.astro
│   ├── Section.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── contentful.ts       # Contentful Client & API-Funktionen
│   └── utils.ts
└── pages/
    ├── index.astro
    ├── admin/              # Admin-Bereich
    ├── eltern/             # Eltern-Seiten
    ├── news/               # News-Detailseiten
    ├── schule/             # Schul-Seiten
    ├── schulleben/         # Schulleben-Seiten
    ├── team/               # Team-Detailseiten
    └── unterstuetzen/      # Unterstützer-Seiten
```

## 4. Features

### 4.1 Implementierte Features

- ✅ Contentful CMS Integration
- ✅ Responsive Design
- ✅ Sitemap Generierung
- ✅ SEO-optimiert
- ✅ Admin-Panel für Content-Management
- ✅ Bildergalerie mit Lightbox
- ✅ Filterbare Galerie (nach Kategorien)
- ✅ Team-Detailseiten mit RichText
- ✅ News-System
- ✅ Karriere/Stellen-Anzeige

### 4.2 Geplante Features

- 🔲 Mehrsprachigkeit (DE/EN)
- 🔲 Erweiterte Galerie-Funktionen
- 🔲 Newsletter-Anmeldung
- 🔲 Online-Anmeldeformular
- 🔲 Kalender-Integration

## 5. Umgebungsvariablen

```bash
# Contentful
CONTENTFUL_SPACE_ID=4wwsd5b3f66i
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_TOKEN=...
CONTENTFUL_MANAGEMENT_TOKEN=...

# Kontaktformular
RESEND_API_KEY=...
CONTACT_EMAIL=info@astrid-lindgren-zentrum.at

# Admin
ADMIN_PASSWORD=alz0815

# Deployment
VERCEL_DEPLOY_HOOK_URL=...
```

## 6. Bekannte Issues

| Issue | Beschreibung | Priorität |
|-------|--------------|-----------|
| Team-Bio | RichText Rendering manchmal fehlerhaft | 🟡 Mittel |
| Galerie Filter | "Sport" Kategorie Quelle unklar | 🟢 Niedrig |
| Konzept Seite | Inhalt fehlt | 🟡 Mittel |
| Services Seite | Inhalt fehlt | 🟡 Mittel |

## 7. Deployment Status

- **Live URL:** https://alz1.thesolution.at
- **Vercel Project:** jurgens-projects-0d1e7c0f/homepage-v1
- **GitHub Repo:** jmueller-bit/homepage-v1
- **Contentful Space:** 4wwsd5b3f66i

## 8. Design System

### 8.1 Farben

```css
--color-primary:        #3b82f6    /* Blau - Hauptfarbe */
--color-primary-hover:  #2563eb    /* Blau - Hover */
--color-secondary:      #4a90a4    /* Türkis */
--color-accent:         #6b8e23    /* Grün */
--color-gray-50:        #f9fafb
--color-gray-100:       #f3f4f6
--color-gray-200:       #e5e7eb
--color-gray-600:       #4b5563
--color-gray-700:       #374151
--color-gray-800:       #1f2937
--color-gray-900:       #111827
```

### 8.2 Typography

- **Headings:** System UI, sans-serif
- **Body:** System UI, sans-serif
- **Base Size:** 16px
- **Line Height:** 1.6

### 8.3 Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
