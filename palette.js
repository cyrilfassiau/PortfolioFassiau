
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector(".cmdk");
  if (!root) return;

  const panel = root.querySelector(".cmdk__panel");
  const input = root.querySelector(".cmdk__input");
  const list = root.querySelector(".cmdk__list");
  const empty = root.querySelector(".cmdk__empty");
  const trigger = document.querySelector(".cmdk-btn");
  if (!panel || !input || !list) return;

  let items = [];
  let results = [];
  let active = 0;
  let lastFocus = null;




  
  
  function buildIndex() {
    const out = [];

    
    document.querySelectorAll("main > section[id]").forEach(function (sec) {
      const h = sec.querySelector("h1, h2");
      if (!h) return;
      out.push({
        label: (h.getAttribute("aria-label") || h.textContent).replace(/\s+/g, " ").trim(),
        kind: "Section",
        href: "#" + sec.id,
      });
    });

    
    
    
    if (Array.isArray(window.__WORK__)) {
      window.__WORK__.forEach(function (p) {
        out.push({
          label: p.title,
          kind: "Project",
          meta: (p.tags || []).join(" · "),
          terms: [p.type].concat(p.tags || []).join(" "),
          href: p.href,
          external: true,
        });
      });
    } else {
      document.querySelectorAll(".row").forEach(function (row) {
        const t = row.querySelector(".row__title");
        if (!t) return;
        const link = row.querySelector("a[href]");
        const tags = [].slice.call(row.querySelectorAll(".tags li"))
          .map(function (x) { return x.textContent.trim(); });
        out.push({
          label: t.textContent.replace(/\s+/g, " ").trim(),
          kind: "Project",
          meta: tags.join(" · "),
          terms: tags.join(" "),
          href: link ? link.getAttribute("href") : null,
          external: link ? link.target === "_blank" : false,
        });
      });
    }

    
    const resume = document.querySelector('a[download]');
    if (resume) out.push({ label: "Download resume", kind: "Action", href: resume.getAttribute("href"), download: true });

    const gh = document.querySelector('.foot a[href*="github.com"]');
    if (gh) out.push({ label: "GitHub profile", kind: "Action", href: gh.getAttribute("href"), external: true });

    const mail = document.querySelector('a[href^="mailto:"]');
    if (mail) out.push({ label: "Send an email", kind: "Action", href: mail.getAttribute("href") });

    return out;
  }




  
  function fuzzy(q, text) {
    const t = text.toLowerCase();
    let qi = 0, score = 0, streak = 0;
    const pos = [];

    for (let ti = 0; ti < t.length && qi < q.length; ti++) {
      if (t[ti] !== q[qi]) { streak = 0; continue; }
      pos.push(ti);
      streak++;
      
      score += streak * 3;
      
      if (ti === 0 || /[\s\-_/·]/.test(t[ti - 1])) score += 12;
      qi++;
    }

    if (qi < q.length) return null;
    
    return { score: score - t.length * 0.15, pos: pos };
  }

  function search(raw) {
    const q = raw.trim().toLowerCase();
    if (!q) return items.map(function (it) { return { it: it, pos: [] }; });

    const hits = [];
    items.forEach(function (it) {
      const onLabel = fuzzy(q, it.label);
      if (onLabel) { hits.push({ it: it, pos: onLabel.pos, score: onLabel.score }); return; }
      
      if (it.terms) {
        const onTerms = fuzzy(q, it.terms);
        if (onTerms) hits.push({ it: it, pos: [], score: onTerms.score - 20 });
      }
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits;
  }




  function mark(label, pos) {
    if (!pos.length) return document.createTextNode(label);
    const frag = document.createDocumentFragment();
    let at = 0;
    pos.forEach(function (i) {
      if (i > at) frag.append(label.slice(at, i));
      const m = document.createElement("mark");
      m.textContent = label[i];
      frag.append(m);
      at = i + 1;
    });
    if (at < label.length) frag.append(label.slice(at));
    return frag;
  }

  function render() {
    list.textContent = "";

    if (!results.length) {
      if (empty) empty.hidden = false;
      input.setAttribute("aria-activedescendant", "");
      return;
    }
    if (empty) empty.hidden = true;

    results.forEach(function (r, i) {
      const li = document.createElement("li");
      li.className = "cmdk__item";
      li.id = "cmdk-opt-" + i;
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(i === active));

      const name = document.createElement("span");
      name.className = "cmdk__name";
      name.append(mark(r.it.label, r.pos));

      const kind = document.createElement("span");
      kind.className = "cmdk__kind";
      kind.textContent = r.it.meta ? r.it.kind + " · " + r.it.meta : r.it.kind;

      li.append(name, kind);
      li.addEventListener("click", function () { activate(i); });
      li.addEventListener("mousemove", function () { setActive(i); });
      list.append(li);
    });

    setActive(active);
  }

  function setActive(i) {
    if (!results.length) return;
    active = Math.max(0, Math.min(results.length - 1, i));
    [].slice.call(list.children).forEach(function (li, n) {
      li.setAttribute("aria-selected", String(n === active));
    });
    const el = list.children[active];
    if (el) {
      input.setAttribute("aria-activedescendant", el.id);
      el.scrollIntoView({ block: "nearest" });
    }
  }

  function activate(i) {
    const r = results[i];
    if (!r) return;
    const it = r.it;
    close();

    if (!it.href) return;

    if (it.external) {
      window.open(it.href, "_blank", "noopener");
      return;
    }
    if (it.download) {
      const a = document.createElement("a");
      a.href = it.href;
      a.download = it.href;
      document.body.append(a);
      a.click();
      a.remove();
      return;
    }
    if (it.href.charAt(0) === "#") {
      const target = document.querySelector(it.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", it.href);
        
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
      return;
    }
    window.location.href = it.href;
  }




  function open() {
    if (!root.hidden) return;
    lastFocus = document.activeElement;

    
    const drawer = document.querySelector(".nav.open");
    if (drawer) {
      const burger = document.querySelector(".burger");
      if (burger) burger.click();
    }

    items = buildIndex();
    root.hidden = false;
    document.body.classList.add("locked");
    input.value = "";
    results = search("");
    active = 0;
    render();
    input.focus();
    if (trigger) trigger.setAttribute("aria-expanded", "true");
  }

  function close() {
    if (root.hidden) return;
    root.hidden = true;
    document.body.classList.remove("locked");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }




  input.addEventListener("input", function () {
    results = search(input.value);
    active = 0;
    render();
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(results.length - 1); }
    else if (e.key === "Enter") { e.preventDefault(); activate(active); }
  });

  
  root.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab") return;
    
    e.preventDefault();
    input.focus();
  });

  root.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", close);
  });

  if (trigger) trigger.addEventListener("click", open);

  
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      root.hidden ? open() : close();
    }
  });
});
