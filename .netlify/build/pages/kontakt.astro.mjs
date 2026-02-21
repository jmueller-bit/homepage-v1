import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV4ZJfzt.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHc2soHg.mjs';
import { $ as $$Section } from '../chunks/Section_DHT-DFBU.mjs';
export { renderers } from '../renderers.mjs';

const $$Kontakt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Kontakt" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Kontaktieren Sie uns", "description": "Wir freuen uns auf Ihre Nachricht oder Ihren Besuch." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-2"> <div class="contact-info"> <h3>Astrid Lindgren Zentrum</h3> <p><strong>Adresse:</strong><br>Mustergasse 123, 1230 Wien</p> <p><strong>Telefon:</strong><br><a href="tel:+43123456789">+43 1 234 567 89</a></p> <p><strong>E-Mail:</strong><br><a href="mailto:office@astrid-lindgren-zentrum.at">office@astrid-lindgren-zentrum.at</a></p> <div style="margin-top: var(--space-8); padding: var(--space-6); background: var(--color-primary-light); border-radius: var(--radius-md);"> <h4>Öffnungszeiten</h4> <p>Montag – Freitag: 08:00 – 16:00 Uhr</p> </div> </div> <div class="contact-form-placeholder" style="padding: var(--space-8); background: var(--color-gray-100); border-radius: var(--radius-md);"> <h3>Senden Sie uns eine Anfrage</h3> <p style="margin-bottom: var(--space-6);">Nutzen Sie unser Kontaktformular für allgemeine Anfragen oder zur Terminvereinbarung.</p> <form style="display: flex; flex-direction: column; gap: var(--space-4);"> <input type="text" placeholder="Ihr Name" style="padding: var(--space-3); border: 1px solid var(--color-gray-300);"> <input type="email" placeholder="Ihre E-Mail" style="padding: var(--space-3); border: 1px solid var(--color-gray-300);"> <textarea placeholder="Ihre Nachricht" rows="5" style="padding: var(--space-3); border: 1px solid var(--color-gray-300);"></textarea> <button type="submit" class="btn btn-primary" disabled>Nachricht senden (Demo)</button> </form> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Anfahrt", "variant": "alt" }, { "default": ($$result3) => renderTemplate` <div style="width: 100%; height: 400px; background: var(--color-gray-200); display: flex; align-items: center; justify-content: center; border-radius: var(--radius-lg);"> <p style="font-weight: bold; color: var(--color-gray-500);">Hier wäre eine interaktive Google Maps Karte</p> </div> ` })} ` })}`;
}, "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/kontakt.astro", void 0);

const $$file = "/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
