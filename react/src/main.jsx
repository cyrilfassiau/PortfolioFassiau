import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Work from "./Work.jsx";
import { PROJECTS } from "./projects.js";

const host = document.getElementById("work-root");

if (host) {
  
  
  window.__WORK__ = PROJECTS.map((p) => ({
    title: p.title,
    type: p.type,
    tags: p.tags,
    href: (p.links.find((l) => l.primary) || p.links[0] || {}).href || null,
  }));

  
  host.textContent = "";
  host.removeAttribute("data-fallback");

  createRoot(host).render(
    <StrictMode>
      <Work />
    </StrictMode>
  );
}
