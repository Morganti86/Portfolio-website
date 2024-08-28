/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, g as createAstro, a as renderComponent } from '../chunks/astro/server_CjRl9CB_.mjs';
import 'kleur/colors';
import 'clsx';
import { T as TECHSLIST, a as $$ProjectsItem, P as PROJECTS, b as $$Arrow, $ as $$Code, c as $$Layout } from '../chunks/Code_CTv-4NjU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const NAVBARLIST = [
    {
      label: "HOME",
      route: "#Home"
    },
    {
      label: "EXPERIENCE",
      route: "#Experience"
    },
    {
      label: "TECHS",
      route: "#Techs"
    },
    {
      label: "PROJECTS",
      route: "#Projects"
    },
    {
      label: "CONTACT",
      route: "#Contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-1/2 transform -translate-x-1/2 z-10 mt-16 md:mt-10"> <nav class="flex flex-row justify-center w-full px-5 py-3 md:py-2 rounded-full gap-8 opacity-80 bg-gray-600 text-2xl md:text-sm"> ${NAVBARLIST.map((nav) => renderTemplate`<a class="relative block hover:text-blue-400"${addAttribute(nav.route, "href")}> ${nav.label} </a>`)} </nav> </header>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Navbar/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mt-96 md:mt-56 mb-12" data-astro-cid-a42nmg7r> <div class="flex relative items-center min-h-60" data-astro-cid-a42nmg7r> <img class="size-[400px] md:size-[300px] absolute right-0 md:right-10 -top-36 md:-top-28 shadow rounded-full -z-10" src="/mariano.webp" alt="mariano-image" data-astro-cid-a42nmg7r> <div class="font-bold text-white hero" data-astro-cid-a42nmg7r> <h3 class="text-7xl md:text-5xl" data-astro-cid-a42nmg7r>Welcome!</h3> <h1 class="text-8xl md:text-[5.5rem] my-16 md:my-11" data-astro-cid-a42nmg7r>
My name is Mariano
</h1> <h2 class="text-7xl md:text-6xl mt-12" data-astro-cid-a42nmg7r>
I'm a <span class="text-blue-400" data-astro-cid-a42nmg7r>software</span> developer
</h2> </div> </div> <div class="my-16 text-4xl md:text-2xl font-thin leading-tightg " data-astro-cid-a42nmg7r> <p class="flex flex-row items-center gap-2 mb-4 md:mb-1" data-astro-cid-a42nmg7r>
Web <span class="text-blue-300" data-astro-cid-a42nmg7r>developer</span> based in Nijmegen
<img src="netherlands.svg" class="size-11 md:size-8" alt="netherlands-flag-image" data-astro-cid-a42nmg7r> </p> <p class="mb-4 md:mb-1" data-astro-cid-a42nmg7r>
Bachelor with <span class="text-blue-400" data-astro-cid-a42nmg7r>over 10 years of experience</span> enhancing systems
</p> <p class="mb-4 md:mb-1" data-astro-cid-a42nmg7r>
Expert in <span class="text-blue-300" data-astro-cid-a42nmg7r>problem-solving</span> and analytical
      thinking
</p><p class="mb-4 md:mb-1" data-astro-cid-a42nmg7r>
Proficient in <span class="text-blue-400" data-astro-cid-a42nmg7r>Agile</span>
methodologies and project management
</p>  </div>  </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Hero/Hero.astro", void 0);

const EXPERIENCE = [
  {
    company: "Santander Technology",
    link: "",
    tag: "Banking",
    place: "Buenos Aires, Argentina",
    position: "Scrum Master / Team Leader",
    from: "August 2019",
    end: "September 2022",
    achievements: [
      {
        achievement: "Led the merchant acquiring and credit card accounting systems, implementing Agile methodology for over 10 team members and stakeholders, resulting in a 20% reduction in project delivery time."
      },
      {
        achievement: "Optimised operational processes through the development of APIs and databases, reducing operational tasks by 60% and minimising errors."
      },
      {
        achievement: "Implemented automated dashboards and daily, weekly, and monthly reports, achieving a 30% reduction in administrative workload."
      },
      {
        achievement: "Managed the successful implementation of over 5 critical regulatory changes introduced by the central bank, ensuring regulatory compliance and operational efficiency."
      }
    ]
  },
  {
    company: "Fox Networks Group",
    link: "",
    tag: "Entertainment",
    place: "Buenos Aires, Argentina",
    position: "Project Leader",
    from: "January 2016",
    end: "August 2019",
    achievements: [
      {
        achievement: "Achieved over 50% reduction in daily manual work within financial operations."
      },
      {
        achievement: "Coordinated the development, implementation, and maintenance of the billing and collection system, introducing electronic invoicing to streamline processes and enhance accuracy by 100%."
      },
      {
        achievement: "Served as the primary contact for stakeholders, designing and implementing solutions that ensured high service standards and a consistent user experience for over 500 users across over 20 countries."
      }
    ]
  },
  {
    company: "Telecom [Accenture]",
    link: "",
    tag: "Telecommunications",
    place: "Buenos Aires, Argentina",
    position: "Senior System Analyst",
    from: "June 2008",
    end: "January 2016",
    achievements: [
      {
        achievement: "Led application support for the collection system, optimising Mainframe COBOL processes to achieve an 80% reduction in cancellations."
      },
      {
        achievement: "Resolved over 50 incidents and information requests monthly by conducting root cause analyses, executing tests, and generating detailed ad hoc reports using DB2/SQL and Excel."
      },
      {
        achievement: "Mentored over 5 junior developers, fostering their skill development and career growth within the team."
      }
    ]
  }
];
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Experience/ExperienceList.astro", void 0);

const $$Astro$3 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { company, link, tag, place, position, from, end, achievements } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="absolute size-5 md:size-3 bg-blue-400 rounded-full mt-4 md:mt-3 lg:mt-2.5 -start-2.5 md:-start-1.5 border border-white"></div> <div class="flex flex-col ml-1 gap-1"> <h2 class="text-5xl md:text-2xl lg:text-xl text-blue-400 font-semibold"> ${company} <span class="text-4xl md:text-xl lg:text-lg text-blue-300">[${tag}]</span> </h2> <p class="text-4xl md:text-lg lg:text-base font-normal leading-normal text-blue-300"> <time> ${from} - ${end} |
</time> <span> ${place} </span> </p> <h2 class="text-5xl md:text-2xl lg:text-xl font-bold text-blue-500"> ${position} </h2> </div> <div class="my-3 font-normal text-white"> <ul> ${achievements.map((achieve) => {
    return renderTemplate`<li class="mb-2 text-4xl md:text-lg lg:text-base leading-snug lg:max-w-3xl"> ${achieve.achievement} </li>`;
  })} </ul> </div> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Experience/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <ol class="relative border-s border-gray-200 dark:border-gray-700"> ${EXPERIENCE.map((exp) => {
    return renderTemplate`<li class="mb-6 ms-5"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...exp })} </li>`;
  })} </ol> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Experience/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$TechsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TechsItem;
  const { name, image, image2 } = Astro2.props;
  const path = `/techs/${image}`;
  const path2 = `/techs/${image2}`;
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-col justify-center items-center gap-2"> <img${addAttribute(path || path2, "src")} class="size-28 md:size-16 lg:size-14"${addAttribute(name, "alt")}> <h5 class="text-3xl md:text-lg opacity-85">${name}</h5> </div> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Techs/TechsItem.astro", void 0);

const $$Techs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-row flex-wrap gap-6 md:gap-3"> ${TECHSLIST.map((skill) => renderTemplate`${renderComponent($$result, "TechsItem", $$TechsItem, { ...skill })}`)} </div> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Techs/Techs.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const topProjects = PROJECTS.slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<section> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${topProjects.map((project) => renderTemplate`<div> ${renderComponent($$result, "ProjectsItem", $$ProjectsItem, { ...project })} </div>`)} </div> <a href="/allprojects" class="w-fit flex flex-row gap-1 italic text-3xl md:text-lg my-5 ml-auto hover:scale-105">VIEW MORE${renderComponent($$result, "Arrow", $$Arrow, { "class": "size-10 md:size-7" })} </a> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Projects/Projects.astro", void 0);

const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="form" class="relative my-10 w-[600px] h-[500px] md:h-96 flex flex-col justify-between"> <label class="text-3xl md:text-lg mt-5"> <input name="name" type="text" placeholder="name" value="" required class="w-[600px] p-1 bg-transparent border-b-2 outline-none placeholder:uppercase focus:border-blue-500"> </label> <label class="text-3xl md:text-lg"> <input name="email" type="email" placeholder="email" value="" required class="w-[600px] p-1 bg-transparent border-b-2 outline-none placeholder:uppercase focus:border-blue-500"> </label> <label class="text-3xl md:text-lg mt-5"> <textarea name="message" required placeholder="message" value="" class="w-[600px] h-40 p-1 resize-none bg-transparent border-2 rounded-lg outline-none placeholder:uppercase focus:border-blue-500"></textarea> </label> <button type="submit" class="w-fit mx-auto px-4 py-1 md:py-2 bg-[#3368BF] rounded-3xl text-3xl md:text-lg">SEND MESSAGE
</button> <span id="messageResult" class="w-fit flex absolute -right-80 bottom-32 md:bottom-20 text-xl z-10"></span> </form> `;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Contact/Form.astro", void 0);

const $$Astro$1 = createAstro();
const $$Gmail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gmail;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a67fa" stroke="none"> <path d="M270 4471 c-83 -26 -162 -85 -208 -159 -65 -102 -62 -25 -62 -1442
l0 -1287 23 -21 c31 -29 77 -29 105 1 l22 23 0 1112 0 1111 225 -167 225 -166
0 -1348 0 -1348 -97 0 c-200 0 -273 29 -325 129 -27 52 -28 57 -28 221 0 149
-2 170 -19 191 -26 32 -86 32 -112 0 -17 -21 -19 -42 -19 -191 0 -140 3 -178
20 -231 36 -114 112 -194 229 -241 l56 -23 2255 0 2255 0 56 23 c117 47 193
127 229 241 20 62 20 90 20 1198 l0 1134 -25 24 c-31 32 -69 32 -100 0 l-25
-24 0 -1134 0 -1135 -28 -53 c-52 -100 -125 -129 -324 -129 l-98 0 0 1348 0
1347 225 167 225 167 0 -155 c0 -85 4 -164 10 -174 23 -43 116 -40 134 5 3 9
6 164 6 345 0 300 -2 333 -20 391 -36 114 -115 197 -226 239 -54 20 -66 20
-2317 19 -1244 0 -2273 -4 -2287 -8z m193 -155 c18 -8 138 -93 267 -190 253
-189 270 -197 315 -151 29 28 32 65 8 93 -10 11 -92 75 -182 141 l-164 121
1853 0 c1019 0 1851 -2 1849 -3 -2 -2 -419 -313 -927 -690 l-922 -687 -608
453 c-334 249 -622 463 -641 476 -40 29 -83 31 -111 6 -23 -21 -27 -72 -7 -97
16 -21 1313 -987 1344 -1001 16 -7 30 -7 47 1 20 9 684 501 1731 1282 165 123
316 232 335 243 27 14 51 18 107 15 91 -4 143 -37 185 -117 37 -71 37 -129 0
-202 -26 -53 -55 -75 -1151 -890 -689 -513 -1138 -841 -1161 -848 -47 -14 -93
-14 -139 0 -22 6 -490 348 -1161 847 -1096 816 -1126 839 -1152 891 -44 86
-35 166 27 247 50 66 176 95 258 60z m1117 -1572 c426 -317 800 -588 830 -603
47 -22 68 -26 150 -26 81 0 103 4 150 26 30 14 339 237 685 495 347 259 702
523 790 588 88 66 166 123 173 129 9 7 12 -250 12 -1282 l0 -1291 -1810 0
-1810 0 0 1291 0 1290 28 -19 c15 -11 376 -280 802 -598z"></path> </g> </svg>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/icons/Gmail.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative"> ${renderComponent($$result, "Form", $$Form, {})} <a href="mailto:mmorganti86@gmail.com" target="_blank" rel="noreferrer"> ${renderComponent($$result, "Gmail", $$Gmail, { "class": "absolute top-10 right-0 size-64 rotate-[25deg] opacity-95", "alt": "send me an email" })} </a> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Contact/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Morganti86 - Software Developer Portfolio";
  const description = "Responsive portfolio website showcasing experience, projects and skills. Made with Astro, Tailwind CSS, and TypeScript. Optimized for a seamless user experience.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="Home" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} <div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Code", $$Code, { "class": "size-16 md:size-10", "data-astro-cid-j7pv25f6": true })}<h2 id="Experience" class="text-7xl md:text-4xl italic" data-astro-cid-j7pv25f6>
EXPERIENCE
</h2> </div> ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} <div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Code", $$Code, { "class": "size-16 md:size-10", "data-astro-cid-j7pv25f6": true })} <h2 id="Techs" class="text-7xl md:text-4xl italic" data-astro-cid-j7pv25f6>TECH STACK</h2> </div> ${renderComponent($$result2, "Techs", $$Techs, { "data-astro-cid-j7pv25f6": true })} <div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Code", $$Code, { "class": "size-16 md:size-10", "data-astro-cid-j7pv25f6": true })} <h2 id="Projects" class="text-7xl md:text-4xl italic" data-astro-cid-j7pv25f6>PROJECTS</h2> </div> ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} <div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Code", $$Code, { "class": "size-16 md:size-10", "data-astro-cid-j7pv25f6": true })} <h2 id="Contact" class="text-7xl md:text-4xl italic" data-astro-cid-j7pv25f6>CONTACT</h2> </div> <h3 class="text-4xl md:text-3xl mb-10 text-blue-400" data-astro-cid-j7pv25f6>
DON'T BE SHY! HIT ME UP!
</h3> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </section> ` })} `;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
