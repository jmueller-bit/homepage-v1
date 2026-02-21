import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Schulstufen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Schulstufen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Schritt f\xFCr Schritt <span class='hero-title-accent'>gemeinsam</span>", "description": "Von der ersten Neugier bis zum berufsreifeorientierten Abschluss \u2013 wir begleiten Kinder durch alle Stufen ihrer Entwicklung.", "badge": "Primaria, Sekundaria & Kolleg", "imagePlaceholder": "STUFEN" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Schulstufen am ALZ", "description": "Wir begleiten Kinder durch alle Stufen ihrer Entwicklung." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-2"> <div style="padding: var(--space-6); background: var(--color-gray-100); border-radius: var(--radius-md);"> <h4>Primaria I</h4> <p>1. bis 4. Schulstufe. Hier wird die natürliche Neugier gepflegt und eigenständiges Lernen gefördert.</p> </div> <div style="padding: var(--space-6); background: var(--color-gray-100); border-radius: var(--radius-md);"> <h4>Primaria II</h4> <p>5. bis 6. Schulstufe. Vertiefung der Kulturtechniken und soziale Reifung in der Gruppe.</p> </div> <div style="padding: var(--space-6); background: var(--color-gray-100); border-radius: var(--radius-md);"> <h4>Sekundaria</h4> <p>7. bis 9. Schulstufe. Raum für Orientierung, Projekte und intensive Auseinandersetzung mit der Welt.</p> </div> <div style="padding: var(--space-6); background: var(--color-gray-100); border-radius: var(--radius-md);"> <h4>Kolleg</h4> <p>Ab der 10. Schulstufe. Professionelle Ausbildung für Elementarpädagogik am Bernarda-Campus.</p> </div> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/schulstufen.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/schulstufen.astro";
const $$url = "/schule/schulstufen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Schulstufen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
