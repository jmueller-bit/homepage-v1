import { d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, k as renderScript, c as createAstro, l as renderHead, i as renderComponent, j as renderSlot } from './astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Unsere Schule",
      href: "/schule",
      children: [
        { label: "P\xE4dagogisches Konzept", href: "/schule/konzept" },
        { label: "Schulstufen", href: "/schule/schulstufen" },
        { label: "Tagesablauf", href: "/schule/tagesablauf" }
      ]
    },
    {
      label: "F\xFCr Eltern",
      href: "/eltern",
      highlight: true,
      children: [
        { label: "Interessiert?", href: "/eltern/interessiert" },
        { label: "Anmeldung & Kosten", href: "/eltern/anmeldung" },
        { label: "Eltern-Services", href: "/eltern/services" },
        { label: "Elternmitwirkung", href: "/eltern" },
        { label: "Schul-ABC", href: "/eltern" }
      ]
    },
    {
      label: "Schulleben",
      href: "/schulleben",
      children: [
        { label: "Aktuelles & News", href: "/schulleben/aktuelles" },
        { label: "Projekte", href: "/schulleben" },
        { label: "Galerie", href: "/schulleben/galerie" },
        { label: "Veranstaltungen", href: "/schulleben" }
      ]
    },
    {
      label: "\xDCber Uns",
      href: "/ueber-uns",
      children: [
        { label: "Unsere Vision", href: "/ueber-uns" },
        { label: "Unser Team", href: "/ueber-uns" },
        { label: "Qualit\xE4t", href: "/ueber-uns" }
      ]
    },
    {
      label: "Unterst\xFCtzen",
      href: "/unterstuetzen"
    },
    {
      label: "Karriere",
      href: "/karriere",
      highlight: true
    },
    {
      label: "Kontakt",
      href: "/kontakt"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" id="header"> <div class="container header-inner"> <a href="/" class="logo"> <div class="logo-icon">ALZ</div> <span>Astrid Lindgren Zentrum</span> </a> <nav class="nav-main"> ${navItems.map((item) => item.children ? renderTemplate`<div class="nav-item"> <a${addAttribute(item.href, "href")} class="nav-link"> ${item.label} ${item.highlight && renderTemplate`<span style="margin-left: 4px;">⭐</span>`} </a> <div class="nav-dropdown"> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")}>${child.label}</a>`)} </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="nav-link"> ${item.label} ${item.highlight && renderTemplate`<span style="margin-left: 4px;">⭐</span>`} </a>`)} </nav> <button class="menu-toggle" aria-label="Menü öffnen" id="menu-toggle"> <span></span> <span></span> <span></span> </button> </div> </header> ${renderScript($$result, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = {
    schule: [
      { label: "P\xE4dagogisches Konzept", href: "/schule/konzept" },
      { label: "Schulstufen", href: "/schule/schulstufen" },
      { label: "Tagesablauf", href: "/schule/tagesablauf" }
    ],
    eltern: [
      { label: "Interessiert?", href: "/eltern/interessiert" },
      { label: "Anmeldung", href: "/eltern/anmeldung" },
      { label: "Elternportal", href: "/eltern/services" }
    ],
    kontakt: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="container"> <div class="footer-grid"> <div class="footer-brand"> <div class="footer-logo"> <div class="logo-icon">ALZ</div> <span>Astrid Lindgren Zentrum</span> </div> <p class="footer-description">
Reformpädagogische Bildung für Kinder und Jugendliche von der Primaria bis zum Kolleg.
</p> </div> <div class="footer-column"> <h4 class="footer-title">Unsere Schule</h4> <ul class="footer-links"> ${footerLinks.schule.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> <div class="footer-column"> <h4 class="footer-title">Für Eltern</h4> <ul class="footer-links"> ${footerLinks.eltern.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> <div class="footer-column"> <h4 class="footer-title">Kontakt & Rechtliches</h4> <ul class="footer-links"> ${footerLinks.kontakt.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> </div> <div class="footer-bottom"> <p class="footer-copyright">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Astrid Lindgren Zentrum. Alle Rechte vorbehalten.
</p> <div class="footer-legal"> <a href="/impressum">Impressum</a> <a href="/datenschutz">Datenschutz</a> </div> </div> </div> </footer>`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://astrid-lindgren-zentrum.at");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Das Astrid Lindgren Zentrum bietet eine reformp\xE4dagogische Bildung f\xFCr Kinder und Jugendliche von der Primaria bis zum Kolleg."
  } = Astro2.props;
  return renderTemplate`<html lang="de"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><title>${title} | Astrid Lindgren Zentrum</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/jurgen/dev/arz/Homepage/alz-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
