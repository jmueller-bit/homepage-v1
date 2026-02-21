import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
import { $ as $$Card } from '../chunks/Card_Dk5Vjn0B.mjs';
import { a as getNews, b as getEvents } from '../chunks/google-sheets_Cj9gX9RI.mjs';
export { renderers } from '../renderers.mjs';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-AT", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const newsItems = await getNews();
  const events = await getEvents();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Schulleben" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Aktuelles & News", "description": "Einblicke in unseren Schulalltag, Berichte von Ausfl\xFCgen und wichtige Ank\xFCndigungen." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-3"> ${newsItems.map((item) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "title": item.title, "description": item.excerpt, "href": `/schulleben/aktuelles`, "ctaLabel": "Beitrag lesen", "imagePlaceholder": item.category || "News" })}`)} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Termine & Events", "description": "Verpassen Sie keine Veranstaltung am Campus.", "variant": "alt" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-2"> ${events.map((event) => renderTemplate`<div class="event-card" style="padding: var(--space-6); background: white; border: 1px solid var(--color-gray-200);"> <div class="event-date" style="color: var(--color-primary); font-weight: bold; margin-bottom: var(--space-2);"> ${formatDate(event.date)} ${event.time && `| ${event.time}`} </div> <h3 class="event-title">${event.title}</h3> <p class="event-location" style="font-size: var(--text-sm); color: var(--text-secondary);">📍 ${event.location || "Campus"}</p> <p class="event-description">${event.description}</p> </div>`)} </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/index.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/index.astro";
const $$url = "/schulleben";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
