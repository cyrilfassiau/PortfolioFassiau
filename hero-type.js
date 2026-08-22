
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector(".hero__title");
  if (!h1) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) return;

  
  const W_MIN = 78, W_MAX = 112, W_BASE = 100;
  const AMPLITUDE = 26;      
  const SIGMA_X = 130;       
  const SIGMA_Y = 90;        
  const EPSILON = 0.35;      

  
  
  
  const label = [...h1.childNodes]
    .map((n) => (n.nodeType === Node.TEXT_NODE ? n.textContent : n.nodeName === "BR" ? " " : ""))
    .join("")
    .replace(/\s+/g, " ")
    .trim();

  
  const chars = [];
  [...h1.childNodes].forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const frag = document.createDocumentFragment();
    for (const ch of node.textContent) {
      if (!ch.trim()) { frag.appendChild(document.createTextNode(ch)); continue; }
      const span = document.createElement("span");
      span.className = "lt";
      span.textContent = ch;
      span.setAttribute("aria-hidden", "true");
      frag.appendChild(span);
      chars.push(span);
    }
    node.replaceWith(frag);
  });
  if (!chars.length) return;

  
  h1.setAttribute("aria-label", label);

  const current = new Float32Array(chars.length).fill(W_BASE);
  const target = new Float32Array(chars.length).fill(W_BASE);
  let centers = [];
  let raf = 0, settled = true;

  function measure() {
    centers = chars.map((c) => {
      const r = c.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
  }

  function setTargets(px, py) {
    if (!centers.length) measure();
    
    
    let sum = 0;
    const g = centers.map((c) => {
      const dx = (c.x - px) / SIGMA_X, dy = (c.y - py) / SIGMA_Y;
      const v = Math.exp(-(dx * dx + dy * dy) / 2);
      sum += v;
      return v;
    });
    const mean = sum / g.length;
    for (let i = 0; i < g.length; i++) {
      target[i] = Math.min(W_MAX, Math.max(W_MIN, W_BASE + AMPLITUDE * (g[i] - mean)));
    }
  }

  function rest() { target.fill(W_BASE); }

  function frame() {
    raf = 0;
    let moving = false;
    for (let i = 0; i < chars.length; i++) {
      const next = current[i] + (target[i] - current[i]) * 0.18;
      if (Math.abs(next - current[i]) > 0.01) moving = true;
      if (Math.abs(next - chars[i]._w) > EPSILON || chars[i]._w === undefined) {
        chars[i].style.fontVariationSettings = `"wdth" ${next.toFixed(1)}, "wght" 800`;
        chars[i]._w = next;
      }
      current[i] = next;
    }
    settled = !moving;
    if (!settled) raf = requestAnimationFrame(frame);
  }

  function kick() { if (!raf) raf = requestAnimationFrame(frame); settled = false; }

  const fine = window.matchMedia("(pointer: fine)");

  if (fine.matches) {
    window.addEventListener("pointermove", (e) => {
      const box = h1.getBoundingClientRect();
      
      if (e.clientY < box.top - 160 || e.clientY > box.bottom + 160) { rest(); kick(); return; }
      setTargets(e.clientX, e.clientY);
      kick();
    }, { passive: true });

    h1.addEventListener("pointerleave", () => { rest(); kick(); });
    window.addEventListener("blur", () => { rest(); kick(); });
  } else {
    
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        measure();
        const first = centers[0], last = centers[centers.length - 1];
        const start = performance.now(), DURATION = 1400;
        (function sweep(now) {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          setTargets(first.x + (last.x - first.x) * eased, first.y);
          kick();
          if (t < 1) requestAnimationFrame(sweep); else { rest(); kick(); }
        })(start);
      });
    }, { threshold: 0.4 });
    io.observe(h1);
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { measure(); rest(); kick(); }, 150);
  });

  
  reduced.addEventListener("change", (e) => {
    if (!e.matches) return;
    chars.forEach((c) => { c.style.fontVariationSettings = ""; });
  });

  measure();
});
