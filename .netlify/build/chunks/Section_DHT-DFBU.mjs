import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, j as renderSlot } from './astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://astrid-lindgren-zentrum.at");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, label, title, description, variant = "default" } = Astro2.props;
  const sectionClass = `section ${variant !== "default" ? `section-${variant}` : ""}`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionClass, "class")}${addAttribute(id, "id")}> <div class="container"> <header class="section-header"> ${label && renderTemplate`<span class="section-label">${label}</span>`} <h2 class="section-title">${title}</h2> ${description && renderTemplate`<p class="section-description">${description}</p>`} </header> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Section.astro", void 0);

export { $$Section as $ };
