import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DXahzgEm.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/datenschutz.astro.mjs');
const _page2 = () => import('./pages/eltern/anmeldung.astro.mjs');
const _page3 = () => import('./pages/eltern/interessiert.astro.mjs');
const _page4 = () => import('./pages/eltern/services.astro.mjs');
const _page5 = () => import('./pages/eltern.astro.mjs');
const _page6 = () => import('./pages/impressum.astro.mjs');
const _page7 = () => import('./pages/karriere.astro.mjs');
const _page8 = () => import('./pages/kontakt.astro.mjs');
const _page9 = () => import('./pages/schule/konzept.astro.mjs');
const _page10 = () => import('./pages/schule/schulstufen.astro.mjs');
const _page11 = () => import('./pages/schule/tagesablauf.astro.mjs');
const _page12 = () => import('./pages/schule.astro.mjs');
const _page13 = () => import('./pages/schulleben/aktuelles.astro.mjs');
const _page14 = () => import('./pages/schulleben/galerie.astro.mjs');
const _page15 = () => import('./pages/schulleben.astro.mjs');
const _page16 = () => import('./pages/ueber-uns.astro.mjs');
const _page17 = () => import('./pages/unterstuetzen.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/datenschutz.astro", _page1],
    ["src/pages/eltern/anmeldung.astro", _page2],
    ["src/pages/eltern/interessiert.astro", _page3],
    ["src/pages/eltern/services.astro", _page4],
    ["src/pages/eltern/index.astro", _page5],
    ["src/pages/impressum.astro", _page6],
    ["src/pages/karriere.astro", _page7],
    ["src/pages/kontakt.astro", _page8],
    ["src/pages/schule/konzept.astro", _page9],
    ["src/pages/schule/schulstufen.astro", _page10],
    ["src/pages/schule/tagesablauf.astro", _page11],
    ["src/pages/schule/index.astro", _page12],
    ["src/pages/schulleben/aktuelles.astro", _page13],
    ["src/pages/schulleben/galerie.astro", _page14],
    ["src/pages/schulleben/index.astro", _page15],
    ["src/pages/ueber-uns/index.astro", _page16],
    ["src/pages/unterstuetzen/index.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a5873a70-3e7f-40cf-8c0a-a4eee035b9ca"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
