import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Anmeldung = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Anmeldung & Kosten" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Ihr Kind am <span class='hero-title-accent'>ALZ</span>", "description": "Hier finden Sie alle Informationen zum Anmeldeprozess, den Terminen und den finanziellen Rahmenbedingungen.", "badge": "Anmeldung", "imagePlaceholder": "ANMELDUNG" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Anmeldeprozess" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>Der Einstieg beginnt meist mit einem Informationsabend und einer Hospitation.</p> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/anmeldung.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/anmeldung.astro";
const $$url = "/eltern/anmeldung";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Anmeldung,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
