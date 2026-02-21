import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Impressum" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Impressum" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>Angaben gemäß § 5 TMG / § 25 MedienG:</p> <p>Astrid Lindgren Zentrum<br>Mustergasse 123<br>1230 Wien</p> <p>ZVR-Zahl: 123456789</p> <p>E-Mail: office@astrid-lindgren-zentrum.at</p> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/impressum.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/impressum.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
