document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-menu");
  const nav = document.querySelector(".main-nav");
  const overlay = document.querySelector(".menu-overlay");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("site-header");
  const body = document.body;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ── menu ─────────────────────────────────────────────── */

  function openMenu() {
    burgerBtn.classList.add("active");
    nav.classList.add("active");
    overlay.hidden = false;
    // laisse le navigateur peindre l'état initial avant la transition
    requestAnimationFrame(() => overlay.classList.add("active"));
    body.classList.add("menu-open");
    burgerBtn.setAttribute("aria-expanded", "true");
    burgerBtn.setAttribute("aria-label", "Fermer le menu");
  }

  function closeMenu() {
    burgerBtn.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
    burgerBtn.setAttribute("aria-expanded", "false");
    burgerBtn.setAttribute("aria-label", "Ouvrir le menu");
    window.setTimeout(() => {
      if (!nav.classList.contains("active")) overlay.hidden = true;
    }, 300);
  }

  burgerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (nav.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      closeMenu();
      burgerBtn.focus();
    }
  });

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 1024 && nav.classList.contains("active")) {
        closeMenu();
      }
    }, 250);
  });

  /* ── smooth scroll ancré, décalé du header fixe ───────── */

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      e.preventDefault();
      if (nav.classList.contains("active")) closeMenu();

      const offset = header.offsetHeight + 16;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: reduceMotion ? "auto" : "smooth",
      });

      if (history.replaceState) history.replaceState(null, "", href);
    });
  });

  /* même comportement pour le CTA du hero */
  const exploreBtn = document.querySelector(".explore");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
      const target = document.getElementById("projectss");
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY -
          (header.offsetHeight + 16),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  }

  /* ── header : bordure au scroll ───────────────────────── */

  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;";
  document.body.prepend(sentinel);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-stuck", !entry.isIntersecting),
      { threshold: 0 },
    ).observe(sentinel);
  }

  /* ── lien de nav actif selon la section visible ───────── */

  if ("IntersectionObserver" in window) {
    const linkFor = new Map();
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) linkFor.set(href.slice(1), link);
    });

    const watched = [...document.querySelectorAll("main > section[id]")].filter(
      (s) => linkFor.has(s.id),
    );

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((l) => l.classList.remove("is-active"));
          const active = linkFor.get(entry.target.id);
          if (active) active.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    watched.forEach((s) => spy.observe(s));
  }

  /* ── apparition au scroll ─────────────────────────────── */

  const revealables = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach((el) => el.classList.add("is-in"));
  } else {
    const reveal = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    revealables.forEach((el) => reveal.observe(el));
  }
});
