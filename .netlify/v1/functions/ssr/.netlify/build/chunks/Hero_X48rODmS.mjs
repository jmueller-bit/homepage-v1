import { c as createAstro, d as createComponent, m as maybeRenderHead, r as renderTemplate, u as unescapeHTML, f as addAttribute } from './astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://astrid-lindgren-zentrum.at");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    description,
    badge,
    primaryCta,
    secondaryCta,
    imageSrc,
    imageAlt = "Hero Bild"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="container hero-inner" data-astro-cid-bbe6dxrz> <div class="hero-content" data-astro-cid-bbe6dxrz> ${badge && renderTemplate`<div class="hero-badge" data-astro-cid-bbe6dxrz>${badge}</div>`} <h1 class="hero-title" data-astro-cid-bbe6dxrz>${unescapeHTML(title)}</h1> <p class="hero-description" data-astro-cid-bbe6dxrz>${description}</p> <div class="hero-actions" data-astro-cid-bbe6dxrz> ${primaryCta && renderTemplate`<a${addAttribute(primaryCta.href, "href")} class="btn btn-primary btn-lg" data-astro-cid-bbe6dxrz>${primaryCta.label}</a>`} ${secondaryCta && renderTemplate`<a${addAttribute(secondaryCta.href, "href")} class="btn btn-outline btn-lg" data-astro-cid-bbe6dxrz>${secondaryCta.label}</a>`} </div> </div> <div class="hero-visual" data-astro-cid-bbe6dxrz> ${imageSrc ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="hero-image" data-astro-cid-bbe6dxrz>` : renderTemplate`<div class="hero-image-placeholder" data-astro-cid-bbe6dxrz>Hero Image</div>`} </div> </div> </section> `;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Hero.astro", void 0);

export { $$Hero as $ };
