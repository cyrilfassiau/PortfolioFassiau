// Single source of truth for the work list.
// Add a project here and it appears in the grid, the filters, the counts,
// and the ⌘K command palette — no other file needs editing.

export const PROJECTS = [
  {
    id: "fassiau-polymer",
    title: "Fassiau Polymer Consulting",
    type: "Website",
    desc: "Showcase site for a thermoplastics consultant.",
    tags: ["HTML", "CSS"],
    image: {
      src: "images/optimized/fassiau_website.jpg",
      width: 720,
      height: 558,
      alt: "Homepage of the Fassiau Polymer Consulting site, presenting the consultant and his thermoplastics services",
    },
    links: [
      {
        label: "View site",
        href: "https://www.fassiaupolymerconsulting.com",
        primary: true,
      },
    ],
  },
  {
    id: "evasia",
    title: "Evasia",
    type: "Website",
    desc: "Site for the Bali travel agency Evasia.",
    tags: ["HTML", "CSS", "JS", "React"],
    image: {
      src: "images/optimized/evasia_website.jpg",
      width: 720,
      height: 558,
      alt: "Homepage of the Evasia site, a Bali travel agency, featuring a photo of terraced rice fields",
    },
    links: [
      {
        label: "View site",
        href: "https://evasiatravel.netlify.app/",
        primary: true,
      },
    ],
  },
  {
    id: "fassiau-dev",
    title: "Fassiau Dev website",
    type: "Website",
    desc: "My own website for my freelance activity as a web developer",
    tags: ["HTML", "CSS", "JS", "React"],
    image: {
      src: "images/fassiaudev.jpg",
      width: 720,
      height: 558,
      alt: "My own website for my freelance activity as a web developer",
    },
    links: [
      {
        label: "View site",
        href: "https://fassiau-dev.com/",
        primary: true,
      },
    ],
  },
  {
    id: "cyclingstats",
    title: "Cyclingstats",
    type: "Application",
    major: true,
    desc: "Cycling dashboard built around the 2026 Tour de France and my own rides, demonstrating API consumption, state management and a complex UI, with the use of React and Typescript. Contains multiple features like linked charts, a rider comparator, filters stored in the URL, GPX and FIT file import with a map, weather data,...",
    spec: [
      {
        term: "Focus",
        detail:
          "API consumption with caching, state management (server state, URL state, persisted UI state), linked charts and in-browser GPX/FIT parsing",
      },
      {
        term: "Goal",
        detail:
          "build a data-heavy, accessible and responsive dashboard that turns raw race data and my own ride files into something clear to explore",
      },
    ],
    tags: ["HTML", "CSS", "Typescript", "React", "TanStack Query"],
    image: {
      src: "images/cyclingstats_app.png",
      width: 1200,
      height: 610,
      alt: "Cyclingstats dashboard",
    },
    links: [
      {
        label: "Launch demo",
        href: "https://mytdfcyclingstats.fassiau-dev.com",
        primary: true,
      },
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    type: "Application",
    major: true,
    desc: "Frontend application that fetches and displays weather data from an external API. This project focuses on handling asynchronous requests, processing data, and dynamically updating the user interface.",
    spec: [
      {
        term: "Focus",
        detail:
          "external API integration, asynchronous data handling, dynamic interface updates",
      },
      {
        term: "Goal",
        detail:
          "strengthen my understanding of data flow and how an application connected to an external service works",
      },
    ],
    tags: ["HTML", "CSS", "JS", "React"],
    image: {
      src: "images/optimized/weatherapp.jpg",
      width: 1200,
      height: 756,
      alt: "Weather App interface showing the current weather and forecast for a city",
    },
    links: [
      {
        label: "Launch demo",
        href: "https://weather-app-fassiau.netlify.app/",
        primary: true,
      },
    ],
  },
];

export const TYPES = ["All", "Website", "Application"];

// Derived from the data so a new tag never needs registering by hand.
export const TECHS = ["All"].concat(
  [...new Set(PROJECTS.flatMap((p) => p.tags))].sort(),
);

export const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "az", label: "A–Z" },
  { id: "za", label: "Z–A" },
];
