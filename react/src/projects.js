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
      { label: "View site", href: "https://www.fassiaupolymerconsulting.com", primary: true },
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
      { label: "View site", href: "https://evasiatravel.netlify.app/", primary: true },
    ],
  },
  {
    id: "saas-landing",
    title: "SaaS landing page",
    type: "Website",
    desc:
      "Landing page for an invoicing SaaS aimed at freelancers and small businesses (fictional product).",
    tags: ["HTML", "CSS", "JS"],
    image: {
      src: "images/optimized/booki_website.jpg",
      width: 720,
      height: 558,
      alt: "Landing page for an invoicing SaaS, showing a screenshot of the application interface",
    },
    links: [
      { label: "View site", href: "https://saas-react-4y5s.vercel.app/", primary: true },
    ],
  },
  {
    id: "mini-crm",
    title: "Mini CRM",
    type: "Application",
    major: true,
    desc:
      "Frontend application built with React to reproduce the basics of a CRM system. This project focuses on state management, application logic, and modular component structure. It let me work on data organization, user interactions, and the design of a scalable interface.",
    spec: [
      { term: "Focus", detail: "React state management, CRUD logic, modular component structure" },
      { term: "Goal", detail: "design a clear, scalable product interface close to a real application" },
    ],
    tags: ["HTML", "CSS", "JS", "React"],
    image: {
      src: "images/optimized/CRM.png",
      width: 1200,
      height: 610,
      alt: "Mini CRM interface: dashboard listing clients with their statuses",
    },
    links: [
      { label: "Launch demo", href: "https://mini-crm-ten-beta.vercel.app/", primary: true },
      { label: "Source code", href: "https://github.com/cyrilfassiau/mini-crm" },
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    type: "Application",
    major: true,
    desc:
      "Frontend application that fetches and displays weather data from an external API. This project focuses on handling asynchronous requests, processing data, and dynamically updating the user interface.",
    spec: [
      { term: "Focus", detail: "external API integration, asynchronous data handling, dynamic interface updates" },
      { term: "Goal", detail: "strengthen my understanding of data flow and how an application connected to an external service works" },
    ],
    tags: ["HTML", "CSS", "JS"],
    image: {
      src: "images/optimized/weatherapp.jpg",
      width: 1200,
      height: 756,
      alt: "Weather App interface showing the current weather and forecast for a city",
    },
    links: [
      { label: "Launch demo", href: "https://cyrilfassiau.github.io/weatherapp/", primary: true },
      { label: "Source code", href: "https://github.com/cyrilfassiau/weatherapp" },
    ],
  },
];

export const TYPES = ["All", "Website", "Application"];

// Derived from the data so a new tag never needs registering by hand.
export const TECHS = ["All"].concat(
  [...new Set(PROJECTS.flatMap((p) => p.tags))].sort()
);

export const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "az", label: "A–Z" },
  { id: "za", label: "Z–A" },
];
