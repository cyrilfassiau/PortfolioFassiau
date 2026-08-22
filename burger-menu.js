
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const overlay = document.querySelector(".scrim");
  const body = document.body;

  if (!burgerBtn || !nav || !overlay) return;

  const DESKTOP = window.matchMedia("(min-width: 901px)");
  const navLinks = nav.querySelectorAll("a");
  let lastFocused = null;

  
  function syncInert() {
    const hidden = !DESKTOP.matches && !nav.classList.contains("open");
    nav.toggleAttribute("inert", hidden);
    nav.setAttribute("aria-hidden", hidden ? "true" : "false");
  }

  function openMenu() {
    lastFocused = document.activeElement;
    burgerBtn.classList.add("open");
    nav.classList.add("open");
    overlay.hidden = false;
    
    requestAnimationFrame(() => overlay.classList.add("open"));
    body.classList.add("locked");
    burgerBtn.setAttribute("aria-expanded", "true");
    burgerBtn.setAttribute("aria-label", "Fermer le menu");
    syncInert();
    navLinks[0]?.focus();
  }

  function closeMenu({ restoreFocus = true } = {}) {
    burgerBtn.classList.remove("open");
    nav.classList.remove("open");
    overlay.classList.remove("open");
    body.classList.remove("locked");
    burgerBtn.setAttribute("aria-expanded", "false");
    burgerBtn.setAttribute("aria-label", "Ouvrir le menu");
    syncInert();

    if (restoreFocus && lastFocused instanceof HTMLElement) {
      lastFocused.focus();
    }
    lastFocused = null;
  }

  
  overlay.addEventListener("transitionend", function (e) {
    if (e.propertyName === "opacity" && !overlay.classList.contains("open")) {
      overlay.hidden = true;
    }
  });

  burgerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (nav.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", () => closeMenu());

  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) closeMenu({ restoreFocus: false });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (!nav.classList.contains("open")) return;

    if (e.key === "Escape") {
      closeMenu();
      return;
    }

    
    if (e.key === "Tab") {
      const focusable = [burgerBtn, ...navLinks];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  
  DESKTOP.addEventListener("change", function () {
    if (DESKTOP.matches && nav.classList.contains("open")) {
      closeMenu({ restoreFocus: false });
    }
    syncInert();
  });

  syncInert();
});

/**
 * The grid draws itself in — the build's one authored motion moment.
 *
 * The rules are painted by default; this opts each list into drawing only when
 * motion is welcome, so a failed script or a reduced-motion preference leaves a
 * complete page rather than an invisible one.
 */
document.addEventListener("DOMContentLoaded", function () {
  const lists = document.querySelectorAll(".rows");
  if (!lists.length) return;
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lists.forEach((list) => list.setAttribute("data-draw", ""));

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const row = entry.target;
        const siblings = [...row.parentElement.children];
        
        row.style.setProperty("--draw-delay", siblings.indexOf(row) * 90 + "ms");
        row.classList.add("drawn");
        obs.unobserve(row);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
  );

  document.querySelectorAll(".rows .row").forEach((row) => io.observe(row));
});
