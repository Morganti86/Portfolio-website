/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_4QNtzGKE.mjs';
import 'kleur/colors';
import { $ as $$Code, P as PROJECTS, a as $$ProjectsItem, b as $$Arrow, c as $$Layout } from '../chunks/Code_MdDmuuc7.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Allprojects = createComponent(($$result, $$props, $$slots) => {
  const title = "Morganti86 - Software Developer Portfolio";
  const description = "Dive into a comprehensive collection of my projects!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-tl3qewsh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-tl3qewsh> <div class="container" data-astro-cid-tl3qewsh> ${renderComponent($$result2, "Code", $$Code, { "class": "size-16 md:size-10", "data-astro-cid-tl3qewsh": true })} <h2 id="Projects" class="text-7xl md:text-4xl italic" data-astro-cid-tl3qewsh>PROJECTS</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-5" data-astro-cid-tl3qewsh> ${PROJECTS.map((project) => renderTemplate`<div data-astro-cid-tl3qewsh> ${renderComponent($$result2, "ProjectsItem", $$ProjectsItem, { ...project, "data-astro-cid-tl3qewsh": true })} </div>`)} </div> <a href="/#Projects" class="w-fit flex flex-row gap-1 italic text-lg my-5 ml-auto hover:scale-105" data-astro-cid-tl3qewsh>${renderComponent($$result2, "Arrow", $$Arrow, { "class": "size-7 rotate-180", "data-astro-cid-tl3qewsh": true })}GO BACK
</a> </section> ` })} `;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/pages/allprojects.astro", void 0);

const $$file = "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/pages/allprojects.astro";
const $$url = "/allprojects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Allprojects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
