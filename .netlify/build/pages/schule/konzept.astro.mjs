import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Konzept = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "P\xE4dagogisches Konzept" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Unser <span class='hero-title-accent'>Weg</span> zum Kind", "description": "Ein tiefgehender Einblick in unsere p\xE4dagogischen Leitlinien und die t\xE4gliche Umsetzung reformp\xE4dagogischer Ideale.", "badge": "Konzept & Vision", "imagePlaceholder": "KONZEPT" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Vorbereitete Umgebung" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>Wir schaffen Räume, die zum Entdecken einladen und die Selbstständigkeit der Kinder fördern. Jedes Material hat seinen Platz und seine pädagogische Bedeutung.</p> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/konzept.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/konzept.astro";
const $$url = "/schule/konzept";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Konzept,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
