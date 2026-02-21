import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Hero } from '../chunks/Hero_X48rODmS.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
import { g as getJobs } from '../chunks/google-sheets_Cj9gX9RI.mjs';
export { renderers } from '../renderers.mjs';

const $$Karriere = createComponent(async ($$result, $$props, $$slots) => {
  const jobs = await getJobs();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karriere" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Arbeiten im <span class='hero-title-accent'>Zentrum</span>", "description": "Werden Sie Teil unseres p\xE4dagogischen Teams und gestalten Sie die Zukunft der Reformp\xE4dagogik aktiv mit.", "badge": "Jobs & Karriere", "imagePlaceholder": "JOBS" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Offene Stellen", "description": "Wir suchen Menschen mit Leidenschaft f\xFCr P\xE4dagogik und Begeisterung f\xFCr neue Wege des Lernens.", "variant": "alt" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-2"> ${jobs.map((job) => renderTemplate`<div class="job-card" style="padding: var(--space-8); background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);"> <div style="font-size: var(--text-xs); color: var(--color-primary); font-weight: bold; text-transform: uppercase; margin-bottom: var(--space-2);">${job.type}</div> <h3 style="margin-bottom: var(--space-4);">${job.title}</h3> <p style="margin-bottom: var(--space-6);">${job.description}</p> <a href="/kontakt" class="btn btn-outline">Jetzt bewerben</a> </div>`)} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Warum ALZ?" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-2"> <div class="benefits"> <h3>Ihre Vorteile</h3> <ul class="benefit-list" style="margin-top: var(--space-4); list-style: none;"> <li>✨ Reformpädagogische Freiräume</li> <li>🤝 Kollegiales Miteinander</li> <li>📚 Fortbildungsmöglichkeiten</li> <li>⚖️ Work-Life-Balance</li> <li>🌳 Idyllische Lage am Campus</li> </ul> </div> <div class="apply-info"> <h3>Initiativbewerbung</h3> <p>Gerne können Sie uns auch eine Initiativbewerbung senden. Wir sind immer auf der Suche nach motivierten pädagogischen Fachkräften, die neue Wege des Lernens mit uns gestalten wollen.</p> <a href="mailto:karriere@astrid-lindgren-zentrum.at" class="btn btn-primary" style="margin-top: var(--space-4);">E-Mail senden</a> </div> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/karriere.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/karriere.astro";
const $$url = "/karriere";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Karriere,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
