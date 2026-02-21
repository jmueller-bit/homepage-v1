import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://astrid-lindgren-zentrum.at");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    title,
    description,
    href,
    ctaLabel = "Mehr erfahren",
    imagePlaceholder,
    variant = "default"
  } = Astro2.props;
  const cardClass = `card ${variant !== "default" ? `card-${variant}` : ""}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cardClass, "class")}> <div class="card-image-placeholder">${imagePlaceholder || "Bild"}</div> <div class="card-content"> <h3 class="card-title">${title}</h3> <p class="card-description">${description}</p> ${href && renderTemplate`<a${addAttribute(href, "href")} class="btn btn-outline">${ctaLabel}</a>`} </div> </div>`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Card.astro", void 0);

export { $$Card as $ };
