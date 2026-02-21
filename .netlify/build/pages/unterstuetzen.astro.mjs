import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Unterst\xFCtzen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Gemeinsam das <span class='hero-title-accent'>Wachsen</span> f\xF6rdern", "description": "Als gemeinn\xFCtziger Verein sind wir auf Unterst\xFCtzung angewiesen, um unser p\xE4dagogisches Angebot stetig zu erweitern und Kindern den Zugang zu reformp\xE4dagogischer Bildung zu erm\xF6glichen.", "badge": "Helfen & Spenden", "imagePlaceholder": "UNTERST\xDCTZEN" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Wie Sie helfen k\xF6nnen", "variant": "alt" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-3"> <div style="padding: var(--space-6); background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);"> <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">🎁</div> <h4>Sachspenden</h4> <p>Wir freuen uns immer über gut erhaltene Lernmaterialien, Bücher für unsere Bibliothek oder Werkzeug für unseren Garten.</p> </div> <div style="padding: var(--space-6); background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);"> <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">💳</div> <h4>Geldspenden</h4> <p>Ihre Spende hilft uns, Stipendienplätze zu finanzieren und besondere Projekte wie unseren Natur-Erlebnisraum umzusetzen.</p> </div> <div style="padding: var(--space-6); background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);"> <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">🛠️</div> <h4>Zeitspenden</h4> <p>Fachwissen im Handwerk, in der IT oder bei der Organisation von Events ist bei uns immer hochwillkommen.</p> </div> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/unterstuetzen/index.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/unterstuetzen/index.astro";
const $$url = "/unterstuetzen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
