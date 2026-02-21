import { d as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Interessiert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Interessiert?" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Der erste <span class='hero-title-accent'>Schritt</span>", "description": "Sie interessieren sich f\xFCr einen Platz am ALZ? Hier finden Sie den Weg zu uns.", "badge": "Interesse & Aufnahme", "imagePlaceholder": "INTERESSIERT" })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/interessiert.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/interessiert.astro";
const $$url = "/eltern/interessiert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Interessiert,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
