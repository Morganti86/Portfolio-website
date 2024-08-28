import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_CB4fbUDh.mjs';
import { d as decodeKey } from './chunks/astro/server_4QNtzGKE.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
    isIndex: rawRouteData.isIndex
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
    middleware(_, next) {
      return next();
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/allprojects.BH6y1Lg7.css"},{"type":"inline","content":".container[data-astro-cid-tl3qewsh]{display:flex;flex-direction:row;gap:4px;margin-top:5rem;margin-bottom:1.25rem}\n"}],"routeData":{"route":"/allprojects","isIndex":false,"type":"page","pattern":"^\\/allprojects\\/?$","segments":[[{"content":"allprojects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/allprojects.astro","pathname":"/allprojects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendmail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendMail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendMail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendMail.ts","pathname":"/api/sendMail","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"form\"),e=document.getElementById(\"messageResult\");t?t.addEventListener(\"submit\",async function(o){o.preventDefault();const s=new FormData(t);try{(await fetch(\"/api/sendMail\",{method:\"POST\",body:s})).ok?n(\"Message sent successfully!\",\"green-600\"):n(\"Failed to send message.\",\"red\")}catch(r){alert(\"An error occurred. Please try again later.\"),console.error(\"Error:\",r)}}):console.error('Form with id \"form\" not found in the document.');function n(o,s){e&&(e.textContent=o.toUpperCase(),e.style.color=s,setTimeout(()=>{e.textContent=\"\"},2e3),t.reset())}\n"}],"styles":[{"type":"external","src":"/_astro/allprojects.BH6y1Lg7.css"},{"type":"inline","content":"@font-face{font-family:Vujahday Script;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/vujahday-script-vietnamese-400-normal.CjuQz72N.woff2) format(\"woff2\"),url(/_astro/vujahday-script-vietnamese-400-normal.CwjghXVl.woff) format(\"woff\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Vujahday Script;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/vujahday-script-latin-ext-400-normal.DCKWCJwC.woff2) format(\"woff2\"),url(/_astro/vujahday-script-latin-ext-400-normal.CttNoB7i.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Vujahday Script;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/vujahday-script-latin-400-normal.Dx16XIJe.woff2) format(\"woff2\"),url(/_astro/vujahday-script-latin-400-normal.DfOFE4ps.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.hero[data-astro-cid-a42nmg7r]{font-family:Vujahday Script;margin-bottom:15px}.shadow[data-astro-cid-a42nmg7r]{filter:drop-shadow(0 0 10px rgb(227,214,214))}.container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:row;gap:4px;margin-top:5rem;margin-bottom:1.25rem;color:ivory}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/pages/allprojects.astro",{"propagation":"none","containsHead":true}],["C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/allprojects@_@astro":"pages/allprojects.astro.mjs","\u0000@astro-page:src/pages/api/sendMail@_@ts":"pages/api/sendmail.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_D-48C8Hj.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DCrtUjQY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/vujahday-script-vietnamese-400-normal.CjuQz72N.woff2","/_astro/vujahday-script-latin-ext-400-normal.DCKWCJwC.woff2","/_astro/vujahday-script-latin-400-normal.Dx16XIJe.woff2","/_astro/vujahday-script-latin-400-normal.DfOFE4ps.woff","/_astro/vujahday-script-vietnamese-400-normal.CwjghXVl.woff","/_astro/vujahday-script-latin-ext-400-normal.CttNoB7i.woff","/_astro/allprojects.BH6y1Lg7.css","/favicon.svg","/mariano.webp","/netherlands.svg","/netherlands2.svg","/projects/Connect4.webp","/projects/Fantacalcio.webp","/projects/logisticadandrea.webp","/projects/LOL.webp","/projects/MemoryGame.webp","/projects/pokedex.webp","/projects/tic-tac-toe.webp","/techs/astro.svg","/techs/css.svg","/techs/git.svg","/techs/github.svg","/techs/html.svg","/techs/js.svg","/techs/mongodb.svg","/techs/mysql.svg","/techs/nextjs.svg","/techs/nextjs2.svg","/techs/nodejs.svg","/techs/nodejs2.svg","/techs/postgresql.svg","/techs/react.svg","/techs/responsive-design.svg","/techs/responsive-design2.svg","/techs/rest-api.svg","/techs/rest-api3.svg","/techs/tailwind.svg","/techs/typescript.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"cjocRMRpmVlSZfL+Y5qhHxX7wydVdBjq6zCzn0wgDfs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
