import { c as createComponent, r as renderTemplate, b as addAttribute, e as renderHead, f as renderSlot, g as createAstro, m as maybeRenderHead, a as renderComponent } from './astro/server_CjRl9CB_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const $$Astro$6 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastify-js/1.12.0/toastify.min.css"><!-- https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/dist/toastify.min.css --><!-- https://cdnjs.cloudflare.com/ajax/libs/toastify-js/1.12.0/toastify.min.js --><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen mx-auto px-10 md:px-15"> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/layouts/Layout.astro", void 0);

const PROJECTS = [
  {
    title: "Fantacalcio",
    tagline: "Your Ultimate Fantasy Football Experience!",
    description: "Featuring Real-Time Auction Updates, Team Statistics, and Fan Chants to Enjoy with Friends",
    technologies: [
      "React",
      "Nextjs",
      "CSS",
      "PostgreSQL",
      "REST API",
      "Responsive Design"
    ],
    image: "/Fantacalcio.webp",
    urlSite: "https://fantacalcio-argentina.vercel.app/",
    urlCode: "https://github.com/Morganti86/fantacalcio-argentina"
  },
  {
    title: "League of Legends",
    tagline: "The Definitive Champions Resource!",
    description: "Discover Information and Guides for Every Champion in the Game!",
    technologies: ["React", "Nextjs", "CSS", "REST API", "Responsive Design"],
    image: "/LOL.webp",
    urlSite: "https://league-of-legends-mu.vercel.app/",
    urlCode: "https://github.com/Morganti86/LeagueOfLegends"
  },
  {
    title: "Memory Game",
    tagline: "Test Your Recall Skills Right Now!",
    description: "A Classic Memory Game",
    technologies: ["HTML", "CSS", "Javascript", "Responsive Design"],
    image: "/MemoryGame.webp",
    urlSite: "https://morganti86.github.io/MemoryGame/",
    urlCode: "https://github.com/Morganti86/MemoryGame"
  },
  {
    title: "D'andrea Logistics",
    tagline: "Efficient Logistics Solutions!",
    description: "Streamline Operations and Enhance Delivery Performance with Cutting-Edge Technology!",
    technologies: ["React", "Nextjs", "CSS", "Responsive Design"],
    image: "/logisticadandrea.webp",
    urlSite: "https://www.logisticadandrea.com.ar/"
  },
  {
    title: "Pok\xE9mon",
    tagline: "Explore, Learn, and Catch 'Em All!",
    description: "Pok\xE9mon Universe Unveiled",
    technologies: ["React", "Nextjs", "CSS", "REST API", "Responsive Design"],
    image: "/pokedex.webp",
    urlSite: "https://pokedex-beta-blue.vercel.app/",
    urlCode: "https://github.com/Morganti86/pokedex"
  },
  {
    title: "Connect4",
    tagline: "Engage in Brainy Battles with Friends!",
    description: "Connect4 Challenge",
    technologies: ["HTML", "CSS", "React", "Responsive Design"],
    image: "/Connect4.webp",
    urlSite: "https://morganti86.github.io/Connect4/",
    urlCode: "https://github.com/Morganti86/Connect4"
  },
  {
    title: "TIC-TAC-TOE",
    tagline: "Classic Fun, Play Anytime, Anywhere!",
    description: "Online Tic-Tac-Toe",
    technologies: ["HTML", "CSS", "React", "Responsive Design"],
    image: "/tic-tac-toe.webp",
    urlSite: "https://morganti86.github.io/tic-tac-toe/",
    urlCode: "https://github.com/Morganti86/tic-tac-toe"
  }
];
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Projects/ProjectsList.astro", void 0);

const $$Astro$5 = createAstro();
const TECHSLIST = [
  {
    name: "HTML",
    image: "html.svg"
  },
  {
    name: "CSS",
    image: "css.svg"
  },
  {
    name: "Javascript",
    image: "js.svg"
  },
  {
    name: "React",
    image: "react.svg"
  },
  {
    name: "Nextjs",
    image: "nextjs.svg",
    image2: "nextjs2.svg"
  },
  {
    name: "MySQL",
    image: "mysql.svg"
  },
  {
    name: "PostgreSQL",
    image: "postgresql.svg"
  },
  {
    name: "MongoDB",
    image: "mongodb.svg"
  },
  {
    name: "REST API",
    image: "rest-api.svg"
  },
  {
    name: "Responsive Design",
    image: "responsive-design.svg",
    image2: "responsive-design2.svg"
  },
  {
    name: "Tailwind CSS",
    image: "tailwind.svg"
  },
  {
    name: "Node.js",
    image: "nodejs.svg"
  },
  {
    name: "TypeScript",
    image: "typescript.svg"
  },
  {
    name: "Astro",
    image: "astro.svg"
  },
  {
    name: "Git",
    image: "git.svg"
  },
  {
    name: "Github",
    image: "github.svg"
  }
];
const $$TechsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TechsList;
  return renderTemplate``;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Techs/TechsList.astro", void 0);

const $$Astro$4 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Github;
  const color = Astro2.props.color || "white";
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"${addAttribute(color, "fill")} opacity="0."></path> </svg>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/icons/Github.astro", void 0);

const $$Astro$3 = createAstro();
const $$Live2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Live2;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/icons/Live2.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProjectsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectsItem;
  const { title, tagline, technologies, image, urlSite, urlCode } = Astro2.props;
  const Title = title.toLocaleUpperCase();
  const path = `/projects/${image}`;
  return renderTemplate`${maybeRenderHead()}<section class="group"> <div class="relative text-white bg-[#1a1a1a] border-1 rounded-xl p-3 bg-cover bg-center w-full"> <h1 class="mx-1 text-5xl md:text-3xl lg:text-2xl">${Title}</h1> <p class="text-pretty text-3xl md:text-lg lg:text-base text-gray-400 mx-1"> ${tagline} </p> <div class="absolute right-5 top-6 md:top-10 lg:top-8 flex flex-row gap-[1px] opacity-75 group-hover:opacity-100"> <a${addAttribute(urlSite, "href")} target="_blank" rel="noreferrer" class="size-16 md:size-9"> ${renderComponent($$result, "Live2", $$Live2, { "class": "size-16 md:size-8 scale-110", "alt": "external link logo - View site" })} </a> <a${addAttribute(urlCode, "href")} target="_blank" rel="noreferrer" class="size-16 md:size-8 rounded-full bg-blue-500"> ${renderComponent($$result, "Github", $$Github, { "class": "size-16 md:size-8", "alt": "github logo - View code on GitHub" })}</a> </div> <!-- <div
        class="absolute size-10 bg-black rounded-full top-0 right-2 text-base group-hover:bg-blue-600">
      </div> --> <div class="relative mx-1 mt-2 md:mt-1 mb-0"> <a${addAttribute(urlSite, "href")} target="_blank" rel="noreferrer"> <img class="border rounded-xl w-fit"${addAttribute(path, "src")} width="800px" height="500px"${addAttribute(`${title} img`, "alt")}> </a> <div class="absolute left-5 md:left-3 top-1/2 transform translate-y-1/2 h-0 w-14 md:w-8 flex flex-col justify-center items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 shadow-lg"> ${technologies.map((tech) => {
    const techItem = TECHSLIST.find((techs) => techs.name === tech);
    const pathImage1 = techItem ? `techs/${techItem.image}` : null;
    const pathImage2 = techItem ? `techs/${techItem.image2}` : null;
    return techItem ? renderTemplate`<img class="w-full filter" style="filter: drop-shadow(0 0 10px black);"${addAttribute(pathImage1 || pathImage2, "src")}${addAttribute(techItem.name, "alt")}${addAttribute(50, "width")}${addAttribute(50, "height")}>` : null;
  })} </div> </div> </div> </section>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/components/Projects/ProjectsItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#4A4A4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/icons/Arrow.astro", void 0);

const $$Astro = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/Abril/Desktop/MORGANTI/WEB/ASTRO/Portfolio-website/src/icons/Code.astro", void 0);

export { $$Code as $, PROJECTS as P, TECHSLIST as T, $$ProjectsItem as a, $$Arrow as b, $$Layout as c };
