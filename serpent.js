
document.addEventListener("DOMContentLoaded", function () {
  
  const DARK = ["#a-propos", ".foot"];

  
  
  
  const STRIDE = 0.45;      
  const STRIDE_VAR = 0.76;  
  const AMP_MIN = 0.2;      
  const AMP_MAX = 0.46;     
  const HOLD = 0.12;        
  const SEED = 2026156110824;    
  const RAMP = 70;          

  
  
  
  const BLUE_A = 0.42;      
  const LIME_A = 0.78;      
  const DARK_PAD = 40;      

  const LEAD = 0.92;        
  const LEAD_IN = 0.62;     
  const SAMPLES = 420;      
  const STEPS = 48;         
  const TENSION = 1;        

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const layer = document.createElement("div");
  layer.className = "serpent";
  layer.setAttribute("aria-hidden", "true");

  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("focusable", "false");

  const defs = document.createElementNS(NS, "defs");
  const grad = document.createElementNS(NS, "linearGradient");
  grad.setAttribute("id", "serpent-ink");
  grad.setAttribute("gradientUnits", "userSpaceOnUse");
  defs.appendChild(grad);

  const path = document.createElementNS(NS, "path");
  path.setAttribute("class", "serpent__line");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#serpent-ink)");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");

  svg.appendChild(defs);
  svg.appendChild(path);
  layer.appendChild(svg);
  document.body.insertBefore(layer, document.body.firstChild);

  const keyframes = document.createElement("style");
  document.head.appendChild(keyframes);

  
  const cssDriven = window.CSS && CSS.supports("animation-timeline", "scroll()");

  let lut = [];   
  let total = 0;  
  let raf = 0;

  function token(name, fallback) {
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return v || fallback;
  }

  function pageBox(el) {
    const r = el.getBoundingClientRect();
    const sy = window.scrollY;
    return { top: r.top + sy, bottom: r.bottom + sy, height: r.height };
  }

  function docHeight() {
    const b = document.body;
    const h = document.documentElement;
    return Math.max(b.scrollHeight, b.offsetHeight, h.scrollHeight, h.offsetHeight);
  }

  
  
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), 1 | t);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  
  
  
  
  function anchors(W, H, vh, bands) {
    const next = rng(SEED);
    const base = Math.max(220, vh * STRIDE);

    
    const pts = [{ x: (0.5 + (next() - 0.5) * 0.5) * W, y: 0 }];
    let side = next() < 0.5 ? -1 : 1;
    let y = 0;

    while (y < H + base) {
      y += base * (1 - STRIDE_VAR / 2 + next() * STRIDE_VAR);

      
      const roll = AMP_MIN + next() * (AMP_MAX - AMP_MIN);
      const yy = y;
      const dark = bands.some(function (b) {
        return yy >= b[0] - DARK_PAD && yy <= b[1] + DARK_PAD;
      });

      
      
      pts.push({ x: (0.5 + side * (dark ? AMP_MAX : roll)) * W, y: y });

      
      if (next() > HOLD) side = -side;
    }
    return pts;
  }

  
  function toPath(p) {
    if (p.length < 2) return "";
    const n = function (v) { return v.toFixed(1); };
    let d = "M " + n(p[0].x) + " " + n(p[0].y);

    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i];
      const p1 = p[i];
      const p2 = p[i + 1];
      const p3 = p[i + 2] || p2;

      const c1x = p1.x + ((p2.x - p0.x) / 6) * TENSION;
      const c1y = p1.y + ((p2.y - p0.y) / 6) * TENSION;
      const c2x = p2.x - ((p3.x - p1.x) / 6) * TENSION;
      const c2y = p2.y - ((p3.y - p1.y) / 6) * TENSION;

      d += " C " + n(c1x) + " " + n(c1y) + ", " +
                   n(c2x) + " " + n(c2y) + ", " +
                   n(p2.x) + " " + n(p2.y);
    }
    return d;
  }

  
  
  function buildLut() {
    total = path.getTotalLength();
    lut = [];
    let maxY = -Infinity;

    for (let i = 0; i <= SAMPLES; i++) {
      const len = (total * i) / SAMPLES;
      const y = path.getPointAtLength(len).y;
      maxY = Math.max(maxY, y); 
      lut.push({ y: maxY, len: len });
    }
  }

  function lengthAtY(y) {
    if (!lut.length) return 0;
    if (y <= lut[0].y) return 0;
    if (y >= lut[lut.length - 1].y) return total;

    let lo = 0;
    let hi = lut.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (lut[mid].y <= y) lo = mid; else hi = mid;
    }

    const a = lut[lo];
    const b = lut[hi];
    const span = b.y - a.y;
    const t = span > 0 ? (y - a.y) / span : 0;
    return a.len + (b.len - a.len) * t;
  }

  
  
  
  function headY(scrollY, vh) {
    const t = Math.min(1, scrollY / Math.max(1, vh * LEAD_IN));
    const eased = t * t * (3 - 2 * t);
    return scrollY + vh * LEAD * eased;
  }

  function offsetAt(scrollY, vh) {
    return total - lengthAtY(headY(scrollY, vh));
  }

  
  function darkBands() {
    const out = [];
    DARK.forEach(function (sel) {
      const el = document.querySelector(sel);
      if (!el) return;
      const box = pageBox(el);
      out.push([box.top, box.bottom]);
    });
    return out;
  }

  
  
  
  function paintGradient(H, bands) {
    const blue = token("--blue", "#0022ff");
    const lime = token("--lime", "#d5ff81");

    const raw = [[0, blue, BLUE_A]];

    bands.forEach(function (box) {
      raw.push([box[0] - RAMP, blue, BLUE_A], [box[0] + RAMP, lime, LIME_A]);
      
      if (box[1] < H - RAMP) {
        raw.push([box[1] - RAMP, lime, LIME_A], [box[1] + RAMP, blue, BLUE_A]);
      }
    });

    const tail = raw[raw.length - 1];
    raw.push([H, tail[1], tail[2]]);

    let last = -1;
    grad.setAttribute("x1", "0");
    grad.setAttribute("y1", "0");
    grad.setAttribute("x2", "0");
    grad.setAttribute("y2", String(H));
    grad.textContent = "";

    raw.forEach(function (entry) {
      const at = Math.min(1, Math.max(0, entry[0] / H));
      if (at < last) return; 
      last = at;
      const stop = document.createElementNS(NS, "stop");
      stop.setAttribute("offset", (at * 100).toFixed(3) + "%");
      stop.setAttribute("stop-color", entry[1]);
      stop.setAttribute("stop-opacity", String(entry[2]));
      grad.appendChild(stop);
    });
  }

  
  
  function bakeKeyframes(H, vh) {
    const range = Math.max(1, H - vh);
    let body = "";

    for (let i = 0; i <= STEPS; i++) {
      
      
      const p = Math.pow(i / STEPS, 1.6);
      const off = Math.max(0, offsetAt(p * range, vh));
      body += "  " + (p * 100).toFixed(3) +
              "% { stroke-dashoffset: " + off.toFixed(1) + "; }\n";
    }

    keyframes.textContent = "@keyframes serpent-draw {\n" + body + "}\n";
  }

  function drawNow(vh) {
    path.style.strokeDashoffset = Math.max(0, offsetAt(window.scrollY, vh)).toFixed(1);
  }

  function build() {
    const W = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const H = docHeight();
    const vh = window.innerHeight;

    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    layer.style.height = H + "px";

    const weight = Math.max(10, Math.min(32, W * 0.021));
    path.setAttribute("stroke-width", weight.toFixed(1));

    const bands = darkBands();
    path.setAttribute("d", toPath(anchors(W, H, vh, bands)));
    buildLut();
    paintGradient(H, bands);

    path.style.strokeDasharray = total.toFixed(1);

    
    if (reduced.matches || H <= vh) {
      path.style.animation = "none";
      path.style.strokeDashoffset = "0";
      return;
    }

    if (cssDriven) {
      path.style.strokeDashoffset = "";
      bakeKeyframes(H, vh);
      path.style.animation = "serpent-draw linear both";
      path.style.animationTimeline = "scroll(root block)";
    } else {
      path.style.animation = "none";
      drawNow(vh);
    }
  }

  build();

  
  if (!cssDriven) {
    window.addEventListener("scroll", function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        if (!reduced.matches) drawNow(window.innerHeight);
      });
    }, { passive: true });
  }

  let settle;
  function rebuild() {
    clearTimeout(settle);
    settle = setTimeout(build, 180);
  }

  window.addEventListener("resize", rebuild);
  window.addEventListener("load", rebuild);
  reduced.addEventListener("change", rebuild);

  
  if ("ResizeObserver" in window) {
    let first = true;
    new ResizeObserver(function () {
      if (first) { first = false; return; }
      rebuild();
    }).observe(document.body);
  }
});
