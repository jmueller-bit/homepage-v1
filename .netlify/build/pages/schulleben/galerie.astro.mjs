import { d as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Galerie = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Galerie" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Bilder aus dem <span class='hero-title-accent'>Schulleben</span>", "description": "Eindr\xFCcke von unseren Projekten, Festen und Ausfl\xFCgen.", "badge": "Impressionen", "imagePlaceholder": "GALERIE" })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/galerie.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/galerie.astro";
const $$url = "/schulleben/galerie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galerie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
