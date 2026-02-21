import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../renderers.mjs';

const $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Datenschutz" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Datenschutzerkl\xE4rung" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>Ihre Privatsphäre ist uns wichtig. Diese Seite enthält Informationen darüber, wie wir mit personenbezogenen Daten umgehen.</p> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/datenschutz.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/datenschutz.astro";
const $$url = "/datenschutz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
