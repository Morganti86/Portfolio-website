import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cx1MRHb0.mjs';
import { manifest } from './manifest_CBV7nXDb.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/allprojects.astro.mjs');
const _page2 = () => import('./pages/api/sendmail.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/allprojects.astro", _page1],
    ["src/pages/api/sendMail.ts", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "34da1356-f85c-4a63-a360-a0725943f46f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
