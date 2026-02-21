import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\xDCber Uns" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Unsere <span class='hero-title-accent'>Vision</span>", "description": "Geschichte, Werte und die Menschen hinter dem Astrid Lindgren Zentrum. Werden Sie Teil unserer Gemeinschaft.", "badge": "\xDCber Uns", "imagePlaceholder": "\xDCBER UNS" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Bildung mit Herz & Verstand", "variant": "alt" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-2"> <div class="info-block" id="vision"> <h3>Geschichte & Gründung</h3> <p>Das Astrid Lindgren Zentrum wurde mit der Vision gegründet, eine alternative Bildungsstätte zu schaffen, die Kinder als eigenständige Persönlichkeiten respektiert. Unsere Namensgeberin steht für Mut, Fantasie und den Glauben an die Stärke von Kindern – Werte, die wir jeden Tag leben.</p> <h3>Werte & Leitbild</h3> <ul class="value-list" style="margin-top: var(--space-4); margin-left: var(--space-4);"> <li>Respekt vor der Individualität jedes Kindes</li> <li>Förderung von Selbstständigkeit und Eigenverantwortung</li> <li>Gemeinschaft und gegenseitige Unterstützung</li> <li>Nachhaltigkeit und Naturverbundenheit</li> </ul> </div> <div class="team-preview" id="team"> <h3>Unser Team</h3> <p>Drei Säulen tragen unsere Schule: Unsere engagierten Pädagog:innen, die weitsichtige Geschäftsführung und unser fürsorgliches Team in Küche und Haushalt.</p> <div class="hero-actions" style="margin-top: var(--space-6);"> <a href="/kontakt" class="btn btn-outline">Team kennenlernen</a> </div> </div> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/ueber-uns/index.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/ueber-uns/index.astro";
const $$url = "/ueber-uns";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
