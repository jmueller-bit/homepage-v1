import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
import { $ as $$Card } from '../chunks/Card_Dk5Vjn0B.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Unsere Schule" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Lernen mit <span class='hero-title-accent'>Herz & Verstand</span>", "description": "Unsere Schule ist ein Ort, an dem Kinder in ihrem eigenen Tempo wachsen k\xF6nnen. Basierend auf reformp\xE4dagogischen Grunds\xE4tzen bieten wir eine Umgebung, die Selbstst\xE4ndigkeit und Gemeinschaft f\xF6rdert.", "badge": "P\xE4dagogik im Fokus", "imagePlaceholder": "SCHULE" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Unser p\xE4dagogisches Konzept", "description": "Wir vereinen bew\xE4hrte Ans\xE4tze der Reformp\xE4dagogik zu einem ganzheitlichen Bildungskonzept.", "variant": "alt" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-2"> ${renderComponent($$result3, "Card", $$Card, { "title": "Montessori-P\xE4dagogik", "description": "'Hilf mir, es selbst zu tun' \u2013 dieser Leitsatz pr\xE4gt unseren Alltag und die vorbereitete Umgebung.", "variant": "default", "imagePlaceholder": "MONTESSORI" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Freinet-Ansatz", "description": "Die Kommunikation, die freie Arbeit und das Lernen an der Realit\xE4t stehen im Mittelpunkt.", "variant": "default", "imagePlaceholder": "FREINET" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Bildungsstufen am ALZ" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-3"> ${renderComponent($$result3, "Card", $$Card, { "title": "Primaria I & II", "description": "Die Basis f\xFCr lebenslanges Lernen. In jahrgangsgemischten Gruppen (1.-6. Schulstufe) wird das Fundament f\xFCr soziale und fachliche Kompetenzen gelegt.", "variant": "campus", "imagePlaceholder": "PRIMARIA", "href": "/schule/schulstufen" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Sekundaria", "description": "Vorbereitung auf das Leben. Wir begleiten Jugendliche (7.-9. Schulstufe) in ihrer Orientierungsphase und f\xF6rdern eigenverantwortliches Handeln.", "variant": "purple", "imagePlaceholder": "SEKUNDARIA", "href": "/schule/schulstufen" })} ${renderComponent($$result3, "Card", $$Card, { "title": "Kolleg", "description": "Professionelle Ausbildung f\xFCr Elementarp\xE4dagogik mit Schwerpunkt Reformp\xE4dagogik. Die Expertenschmiede f\xFCr zuk\xFCnftige P\xE4dagog:innen.", "variant": "kolleg", "imagePlaceholder": "KOLLEG", "href": "/schule/schulstufen" })} </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/index.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/index.astro";
const $$url = "/schule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
