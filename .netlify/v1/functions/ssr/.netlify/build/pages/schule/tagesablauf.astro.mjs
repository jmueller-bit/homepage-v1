import { d as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tagesablauf = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tagesablauf" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Ein Tag am <span class='hero-title-accent'>ALZ</span>", "description": "Vom Ankommen bis zum gemeinsamen Abschluss \u2013 wie wir den Schultag gestalten.", "badge": "Schulalltag", "imagePlaceholder": "TAGESABLAUF" })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/tagesablauf.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/tagesablauf.astro";
const $$url = "/schule/tagesablauf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tagesablauf,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
