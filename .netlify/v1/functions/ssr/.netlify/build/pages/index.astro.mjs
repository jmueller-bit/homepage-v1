import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
import { $ as $$Card } from '../chunks/Card_Dk5Vjn0B.mjs';
import 'clsx';
import { a as getNews } from '../chunks/google-sheets_Cj9gX9RI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrid-lindgren-zentrum.at");
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { icon, title, description, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="feature-card"> <div class="feature-icon">${icon}</div> <h3 class="feature-title">${title}</h3> <p class="feature-description">${description}</p> </a>`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/FeatureCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const newsItems = await getNews();
  const latestNews = newsItems.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Bildung mit <span class='hero-title-accent'>Herz</span> und <span class='hero-title-accent'>Verstand</span>", "description": "Das Astrid Lindgren Zentrum bietet eine reformp\xE4dagogische Bildung f\xFCr Kinder und Jugendliche von der Primaria bis zum Kolleg. Wir f\xF6rdern individuelles Lernen in einer achtsamen Gemeinschaft.", "badge": "\u2B50 Neue Website-Struktur", "primaryCta": { label: "Ist unsere Schule passend?", href: "/eltern/interessiert" }, "secondaryCta": { label: "Unsere Schulstufen", href: "/schule/schulstufen" } })} ${renderComponent($$result2, "Section", $$Section, { "title": "Bildung neu denken", "variant": "alt" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-3"> ${renderComponent($$result3, "Card", $$Card, { "title": "P\xE4dagogisches Konzept", "description": "Unsere Bildungsphilosophie basiert auf den Grunds\xE4tzen der Reformp\xE4dagogik: Individuelles Lernen, Projektarbeit und praxisnahe Bildung.", "href": "/schule/konzept", "variant": "primary", "imagePlaceholder": "KONZEPT" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Schulstufen", "description": "Von Primaria I bis zum Kolleg \u2013 wir begleiten Kinder und Jugendliche auf ihrem gesamten Bildungsweg.", "href": "/schule/schulstufen", "variant": "campus", "imagePlaceholder": "CAMPUS" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Tagesablauf", "description": "Vom Ankommen bis zum gemeinsamen Abschluss \u2013 wie wir den Schultag rhythmisch und bed\xFCrfnisorientiert gestalten.", "href": "/schule/tagesablauf", "variant": "purple", "imagePlaceholder": "TAGESABLAUF" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Warum das ALZ?", "description": "Mehr als nur eine Schule \u2013 ein Ort des gemeinsamen Wachsens und Lernens." }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-4"> ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "icon": "\u{1F4DA}", "title": "Unsere Schule", "description": "P\xE4dagogisches Konzept, Schulstufen & Tagesablauf entdecken.", "href": "/schule" })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "icon": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "title": "F\xFCr Eltern", "description": "Anmeldung, Services & alle wichtigen Informationen.", "href": "/eltern" })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "icon": "\u{1F3A8}", "title": "Schulleben", "description": "Aktuelles, Projekte, Galerie & Veranstaltungen.", "href": "/schulleben" })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "icon": "\u{1F4DE}", "title": "Kontakt", "description": "Kontaktformular, Anfahrt & Sprechzeiten.", "href": "/kontakt" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Aktuelles & News", "description": "Bleiben Sie auf dem Laufenden \xFCber Projekte und Neuigkeiten vom Campus.", "variant": "highlight", "id": "news" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-3"> ${latestNews.map((item) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "title": item.title, "description": item.excerpt, "href": `/schulleben/aktuelles`, "ctaLabel": "Beitrag lesen", "imagePlaceholder": item.category || "News", "variant": "default" })}`)} </div> <div class="text-center" style="margin-top: var(--space-10);"> <a href="/schulleben/aktuelles" class="btn btn-outline">Alle News anzeigen</a> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/index.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
