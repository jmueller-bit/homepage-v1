import { d as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Eltern-Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Unterst\xFCtzung f\xFCr <span class='hero-title-accent'>Familien</span>", "description": "Ressourcen, Formulare und hilfreiche Links f\xFCr unseren Schulalltag.", "badge": "Services", "imagePlaceholder": "SERVICES" })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/services.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/services.astro";
const $$url = "/eltern/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
