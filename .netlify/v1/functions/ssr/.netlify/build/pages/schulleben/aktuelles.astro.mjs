import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Section } from '../../chunks/Section_DHT-DFBU.mjs';
import { $ as $$Card } from '../../chunks/Card_Dk5Vjn0B.mjs';
import { a as getNews } from '../../chunks/google-sheets_Cj9gX9RI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Aktuelles = createComponent(async ($$result, $$props, $$slots) => {
  const newsItems = await getNews();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Aktuelles & News" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Neues vom Campus", "description": "Berichte und Ank\xFCndigungen aus unserem Schulalltag." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-3"> ${newsItems.map((item) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "title": item.title, "description": item.excerpt, "href": "/schulleben/aktuelles", "ctaLabel": "Weiterlesen", "imagePlaceholder": item.category })}`)} </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/aktuelles.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/aktuelles.astro";
const $$url = "/schulleben/aktuelles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aktuelles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
