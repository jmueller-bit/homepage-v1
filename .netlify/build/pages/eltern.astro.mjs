import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
import { $ as $$Card } from '../chunks/Card_Dk5Vjn0B.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "F\xFCr Eltern" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Partnerschaft f\xFCr die <span class='hero-title-accent'>Zukunft</span>", "description": "Die Zusammenarbeit mit den Eltern ist ein wesentlicher Bestandteil unserer Schulgemeinschaft. Hier finden Sie alle Informationen zur Anmeldung, zum Schulalltag und wie Sie sich einbringen k\xF6nnen.", "badge": "Eltern & Schule", "imagePlaceholder": "ELTERN" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Alles f\xFCr Familien", "description": "Von der ersten Information bis zum Schulalltag \u2013 wir begleiten Sie in jedem Schritt.", "variant": "alt" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-3"> ${renderComponent($$result3, "Card", $$Card, { "title": "Ist unsere Schule passend?", "description": "Finden Sie heraus, ob das ALZ das richtige f\xFCr Ihr Kind ist. Schnuppertage, FAQ und Aufnahmeprozess.", "variant": "primary", "imagePlaceholder": "INTERESSIERT", "href": "/eltern/interessiert" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Anmeldung & Kosten", "description": "Anmeldeformular, Kosten\xFCbersicht, Finanzierung, F\xF6rderungen und Geschwisterrabatt.", "variant": "campus", "imagePlaceholder": "ANMELDUNG", "href": "/eltern/anmeldung" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Eltern-Services", "description": "Elternportal, Schulkalender, Ferienplan, Stundenplan und Krankmeldung \u2013 alles an einem Ort.", "variant": "kolleg", "imagePlaceholder": "SERVICES", "href": "/eltern/services" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Elternmitwirkung" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-2"> <div class="content-block"> <h3>Gemeinsam gestalten</h3> <p>Als Elterninitiative leben wir vom Engagement der Familien. Ob im Garten, bei Festen oder in Arbeitsgruppen – jede Unterstützung zählt. Gemeinsam schaffen wir den Rahmen, in dem unsere Kinder wachsen können.</p> <a href="/ueber-uns" class="btn btn-primary">Mehr über den Verein</a> </div> <div class="content-block"> <h3>Schul-ABC & Kontakt</h3> <p>Wir setzen auf einen transparenten Austausch. Monatliche Elternbriefe, das Schul-ABC und digitale Plattformen halten Sie immer auf dem Laufenden.</p> </div> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/index.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/index.astro";
const $$url = "/eltern";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
