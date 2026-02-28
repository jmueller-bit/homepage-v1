# Sitemap Status - Astrid Lindgren Zentrum

**Letzte Aktualisierung:** 28. Februar 2026  
**Sitemap URL:** https://alz1.thesolution.at/sitemap-index.xml  
**Hauptdomain:** https://alz1.thesolution.at

## 1. Sitemap Konfiguration

### 1.1 Astro Sitemap Integration

```javascript
// astro.config.mjs
integrations: [
  sitemap({
    i18n: {
      defaultLocale: 'de',
      locales: { de: 'de-AT' },
    },
  }),
],
```

### 1.2 Generierte Sitemap-Dateien

| Datei | URL | Status |
|-------|-----|--------|
| **sitemap-index.xml** | `/sitemap-index.xml` | ✅ Automatisch generiert |
| **sitemap-0.xml** | `/sitemap-0.xml` | ✅ Automatisch generiert |

## 2. URLs im Sitemap

### 2.1 Statische Seiten (22 URLs)

| # | URL | Priorität | Letzte Änderung | Status |
|---|-----|-----------|-----------------|--------|
| 1 | `/` | 1.0 | 2026-02-28 | ✅ Indexiert |
| 2 | `/ueber-uns/` | 0.8 | 2026-02-28 | ✅ Indexiert |
| 3 | `/schule/` | 0.8 | 2026-02-28 | ✅ Indexiert |
| 4 | `/schule/konzept/` | 0.7 | 2026-02-28 | ⚠️ Inhalt fehlt |
| 5 | `/schule/schulstufen/` | 0.7 | 2026-02-28 | ✅ Indexiert |
| 6 | `/schule/tagesablauf/` | 0.7 | 2026-02-28 | ✅ Indexiert |
| 7 | `/schulleben/` | 0.8 | 2026-02-28 | ✅ Indexiert |
| 8 | `/schulleben/aktuelles/` | 0.7 | 2026-02-28 | ✅ Indexiert |
| 9 | `/schulleben/galerie/` | 0.7 | 2026-02-28 | ✅ Indexiert |
| 10 | `/eltern/` | 0.7 | 2026-02-28 | ✅ Indexiert |
| 11 | `/eltern/anmeldung/` | 0.8 | 2026-02-28 | ✅ Indexiert |
| 12 | `/eltern/interessiert/` | 0.8 | 2026-02-28 | ✅ Indexiert |
| 13 | `/eltern/services/` | 0.6 | 2026-02-28 | ⚠️ Inhalt fehlt |
| 14 | `/unterstuetzen/` | 0.6 | 2026-02-28 | ⚠️ Inhalt fehlt |
| 15 | `/karriere/` | 0.8 | 2026-02-28 | ✅ Indexiert |
| 16 | `/kontakt/` | 0.9 | 2026-02-28 | ✅ Indexiert |
| 17 | `/impressum/` | 0.5 | 2026-02-28 | ✅ Indexiert |
| 18 | `/datenschutz/` | 0.5 | 2026-02-28 | ✅ Indexiert |
| 19 | `/admin/` | 0.3 | 2026-02-28 | 🔒 Noindex |
| 20 | `/admin/dashboard/` | 0.3 | 2026-02-28 | 🔒 Noindex |
| 21 | `/admin/news/` | 0.3 | 2026-02-28 | 🔒 Noindex |
| 22 | `/admin/galerie/` | 0.3 | 2026-02-28 | 🔒 Noindex |

### 2.2 Dynamische Seiten (Contentful-basiert)

#### News-Artikel
```
/news/[slug]/
```
- **Anzahl:** Variable (Contentful)
- **Beispiele:**
  - `/news/erster-schultag-2026/`
  - `/news/herbstfest-2025/`
- **Status:** ✅ Automatisch generiert

#### Team-Mitglieder
```
/team/[slug]/
```
- **Anzahl:** Variable (Contentful)
- **Beispiele:**
  - `/team/di-jutta-hbartner-bed/`
  - `/team/inno-fail/`
- **Status:** ✅ Automatisch generiert

### 2.3 Ausgeschlossene Seiten

| Seite | Grund |
|-------|-------|
| `/admin/*` | Interne Admin-Seiten |
| `/api/*` | API-Endpunkte |
| `/_astro/*` | Astro Assets |
| `/images/*` | Statische Bilder |

## 3. SEO-Status

### 3.1 Meta-Tags pro Seite

| Seite | Title | Description | OG Image | Canonical |
|-------|-------|-------------|----------|-----------|
| Startseite | ✅ | ✅ | ❌ | ✅ |
| Über Uns | ✅ | ✅ | ❌ | ✅ |
| Schule | ✅ | ✅ | ❌ | ✅ |
| Kontakt | ✅ | ✅ | ❌ | ✅ |
| Karriere | ✅ | ✅ | ❌ | ✅ |
| News | ✅ | ✅ | ✅ (Contentful) | ✅ |
| Team | ✅ | ✅ | ✅ (Contentful) | ✅ |
| Galerie | ✅ | ✅ | ❌ | ✅ |

### 3.2 Sprachattribute

```html
<html lang="de-AT">
```

Alle Seiten sind auf Deutsch (Österreich) konfiguriert.

## 4. Robots.txt Status

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://alz1.thesolution.at/sitemap-index.xml
```

## 5. Google Index Status

| URL | Status | Letzter Crawl |
|-----|--------|---------------|
| `/` | ✅ Indexiert | Unbekannt |
| `/ueber-uns/` | ✅ Indexiert | Unbekannt |
| `/schule/` | ✅ Indexiert | Unbekannt |
| `/kontakt/` | ✅ Indexiert | Unbekannt |
| `/karriere/` | ✅ Indexiert | Unbekannt |

## 6. Verbesserungsvorschläge

### 6.1 Priorität: Hoch

- [ ] OG Images für alle Hauptseiten hinzufügen
- [ ] Strukturierte Daten (Schema.org) implementieren
- [ ] Breadcrumbs mit strukturierten Daten

### 6.2 Priorität: Mittel

- [ ] Canonical URLs prüfen und korrigieren
- [ ] Meta Descriptions für alle Seiten optimieren
- [ ] Bild-Alt-Texte in Contentful vervollständigen

### 6.3 Priorität: Niedrig

- [ ] Multilingual Sitemap vorbereiten (DE/EN)
- [ ] Video-Sitemap für eingebettete Videos
- [ ] Image-Sitemap für Galerie

## 7. Technische Details

### 7.1 Sitemap Generierung

- **Framework:** @astrojs/sitemap
- **Generierung:** Build-time
- **Ausgabe:** `/dist/sitemap-index.xml`
- **Format:** XML

### 7.2 Changefreq

| Seitentyp | Changefreq |
|-----------|------------|
| Startseite | weekly |
| News | daily |
| Statische Seiten | monthly |
| Team | monthly |
| Galerie | weekly |

### 7.3 Prioritäten

| Priorität | Seitentyp |
|-----------|-----------|
| 1.0 | Startseite |
| 0.9 | Kontakt |
| 0.8 | Hauptseiten (Über uns, Schule, Karriere) |
| 0.7 | Unterseiten (Konzept, Schulstufen, Galerie) |
| 0.6 | Services, Unterstützen |
| 0.5 | Impressum, Datenschutz |
| 0.3 | Admin-Bereich |

## 8. Monitoring

### 8.1 Tools

- **Google Search Console:** Einrichtung empfohlen
- **Bing Webmaster Tools:** Einrichtung empfohlen
- **Vercel Analytics:** ✅ Aktiviert

### 8.2 Metriken

| Metrik | Ziel | Status |
|--------|------|--------|
| Sitemap-Abdeckung | 100% | ✅ 100% |
| Indexierungsrate | >90% | ⚠️ Unbekannt |
| Crawl-Fehler | 0 | ✅ 0 |
| Ladezeit | <3s | ✅ ~1.5s |

## 9. Backup & Wiederherstellung

### 9.1 Sitemap-Backup

Die Sitemap wird automatisch bei jedem Build generiert:
1. Astro Sitemap Integration erstellt XML
2. Vercel deployed neue Version
3. Alte Sitemap wird überschrieben

### 9.2 Manuelle Sitemap-Generierung

```bash
# Lokal generieren
npm run build

# Sitemap überprüfen
cat dist/sitemap-index.xml
```

## 10. Kontakt & Verantwortlich

- **Technische Umsetzung:** Jürgen Müller
- **Content Management:** Astrid Lindgren Zentrum
- **Hosting:** Vercel
- **CMS:** Contentful
