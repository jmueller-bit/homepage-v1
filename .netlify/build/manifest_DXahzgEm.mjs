import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DV4ZJfzt.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jurgen/dev/arz/Homepage/alz-website/","cacheDir":"file:///Users/jurgen/dev/arz/Homepage/alz-website/node_modules/.astro/","outDir":"file:///Users/jurgen/dev/arz/Homepage/alz-website/dist/","srcDir":"file:///Users/jurgen/dev/arz/Homepage/alz-website/src/","publicDir":"file:///Users/jurgen/dev/arz/Homepage/alz-website/public/","buildClientDir":"file:///Users/jurgen/dev/arz/Homepage/alz-website/dist/","buildServerDir":"file:///Users/jurgen/dev/arz/Homepage/alz-website/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/datenschutz","isIndex":false,"type":"page","pattern":"^\\/datenschutz\\/?$","segments":[[{"content":"datenschutz","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/datenschutz.astro","pathname":"/datenschutz","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/eltern/anmeldung","isIndex":false,"type":"page","pattern":"^\\/eltern\\/anmeldung\\/?$","segments":[[{"content":"eltern","dynamic":false,"spread":false}],[{"content":"anmeldung","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eltern/anmeldung.astro","pathname":"/eltern/anmeldung","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/eltern/interessiert","isIndex":false,"type":"page","pattern":"^\\/eltern\\/interessiert\\/?$","segments":[[{"content":"eltern","dynamic":false,"spread":false}],[{"content":"interessiert","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eltern/interessiert.astro","pathname":"/eltern/interessiert","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/eltern/services","isIndex":false,"type":"page","pattern":"^\\/eltern\\/services\\/?$","segments":[[{"content":"eltern","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eltern/services.astro","pathname":"/eltern/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/eltern","isIndex":true,"type":"page","pattern":"^\\/eltern\\/?$","segments":[[{"content":"eltern","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eltern/index.astro","pathname":"/eltern","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/impressum","isIndex":false,"type":"page","pattern":"^\\/impressum\\/?$","segments":[[{"content":"impressum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/impressum.astro","pathname":"/impressum","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/karriere","isIndex":false,"type":"page","pattern":"^\\/karriere\\/?$","segments":[[{"content":"karriere","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/karriere.astro","pathname":"/karriere","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt\\/?$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schule/konzept","isIndex":false,"type":"page","pattern":"^\\/schule\\/konzept\\/?$","segments":[[{"content":"schule","dynamic":false,"spread":false}],[{"content":"konzept","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schule/konzept.astro","pathname":"/schule/konzept","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schule/schulstufen","isIndex":false,"type":"page","pattern":"^\\/schule\\/schulstufen\\/?$","segments":[[{"content":"schule","dynamic":false,"spread":false}],[{"content":"schulstufen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schule/schulstufen.astro","pathname":"/schule/schulstufen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schule/tagesablauf","isIndex":false,"type":"page","pattern":"^\\/schule\\/tagesablauf\\/?$","segments":[[{"content":"schule","dynamic":false,"spread":false}],[{"content":"tagesablauf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schule/tagesablauf.astro","pathname":"/schule/tagesablauf","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schule","isIndex":true,"type":"page","pattern":"^\\/schule\\/?$","segments":[[{"content":"schule","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schule/index.astro","pathname":"/schule","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schulleben/aktuelles","isIndex":false,"type":"page","pattern":"^\\/schulleben\\/aktuelles\\/?$","segments":[[{"content":"schulleben","dynamic":false,"spread":false}],[{"content":"aktuelles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schulleben/aktuelles.astro","pathname":"/schulleben/aktuelles","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schulleben/galerie","isIndex":false,"type":"page","pattern":"^\\/schulleben\\/galerie\\/?$","segments":[[{"content":"schulleben","dynamic":false,"spread":false}],[{"content":"galerie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schulleben/galerie.astro","pathname":"/schulleben/galerie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/schulleben","isIndex":true,"type":"page","pattern":"^\\/schulleben\\/?$","segments":[[{"content":"schulleben","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schulleben/index.astro","pathname":"/schulleben","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/ueber-uns","isIndex":true,"type":"page","pattern":"^\\/ueber-uns\\/?$","segments":[[{"content":"ueber-uns","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ueber-uns/index.astro","pathname":"/ueber-uns","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/unterstuetzen","isIndex":true,"type":"page","pattern":"^\\/unterstuetzen\\/?$","segments":[[{"content":"unterstuetzen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unterstuetzen/index.astro","pathname":"/unterstuetzen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-bbe6dxrz]{width:100%;max-width:500px;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius-lg)}\n"},{"type":"external","src":"/_astro/datenschutz.CD3bKn3l.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://astrid-lindgren-zentrum.at","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/datenschutz.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/anmeldung.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/index.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/interessiert.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/eltern/services.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/impressum.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/karriere.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/kontakt.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/index.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/konzept.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/schulstufen.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schule/tagesablauf.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/aktuelles.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/galerie.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/schulleben/index.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/ueber-uns/index.astro",{"propagation":"none","containsHead":true}],["/Users/jurgen/dev/arz/Homepage/alz-website/src/pages/unterstuetzen/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/datenschutz@_@astro":"pages/datenschutz.astro.mjs","\u0000@astro-page:src/pages/eltern/anmeldung@_@astro":"pages/eltern/anmeldung.astro.mjs","\u0000@astro-page:src/pages/eltern/interessiert@_@astro":"pages/eltern/interessiert.astro.mjs","\u0000@astro-page:src/pages/eltern/services@_@astro":"pages/eltern/services.astro.mjs","\u0000@astro-page:src/pages/eltern/index@_@astro":"pages/eltern.astro.mjs","\u0000@astro-page:src/pages/impressum@_@astro":"pages/impressum.astro.mjs","\u0000@astro-page:src/pages/karriere@_@astro":"pages/karriere.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-page:src/pages/schule/konzept@_@astro":"pages/schule/konzept.astro.mjs","\u0000@astro-page:src/pages/schule/schulstufen@_@astro":"pages/schule/schulstufen.astro.mjs","\u0000@astro-page:src/pages/schule/tagesablauf@_@astro":"pages/schule/tagesablauf.astro.mjs","\u0000@astro-page:src/pages/schule/index@_@astro":"pages/schule.astro.mjs","\u0000@astro-page:src/pages/schulleben/aktuelles@_@astro":"pages/schulleben/aktuelles.astro.mjs","\u0000@astro-page:src/pages/schulleben/galerie@_@astro":"pages/schulleben/galerie.astro.mjs","\u0000@astro-page:src/pages/schulleben/index@_@astro":"pages/schulleben.astro.mjs","\u0000@astro-page:src/pages/ueber-uns/index@_@astro":"pages/ueber-uns.astro.mjs","\u0000@astro-page:src/pages/unterstuetzen/index@_@astro":"pages/unterstuetzen.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DXahzgEm.mjs","/Users/jurgen/dev/arz/Homepage/alz-website/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/Users/jurgen/dev/arz/Homepage/alz-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.DkiUdQag.js","/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.ZISJL2Ea.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jurgen/dev/arz/Homepage/alz-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"header\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?e?.classList.add(\"scrolled\"):e?.classList.remove(\"scrolled\")});"],["/Users/jurgen/dev/arz/Homepage/alz-website/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"menu-toggle\");e?.addEventListener(\"click\",()=>{console.log(\"Mobile menu toggle\")});"]],"assets":["/_astro/datenschutz.CD3bKn3l.css","/favicon.ico","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"+5DZseER123ttzLsXGKJPlyR7GMp9bR/Sf28INbCnlI=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
