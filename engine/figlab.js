/* ============================================================================
   LBC LEARNING — FigLab: math-exact, sliderable diagram engine (window.FigLab)
   ----------------------------------------------------------------------------
   Unlike a hand-drawn SVG, a FigLab figure is a PURE FUNCTION of its parameters:

       compute(params) -> { axes, items, facts, readout }

   `items` are geometric primitives expressed in DATA coordinates. The renderer
   maps them into one coordinate system and draws clean SVG. Because every line,
   intercept, intersection and tangent is COMPUTED in closed form (not placed by
   hand), the picture is correct by construction: move a slider and the equilibrium
   genuinely moves to the solved point. `facts` exposes the computed geometry so a
   numeric self-test (test/figlab.test.js) can assert it against analytic formulas.

   A figure registers itself:  FigLab.register(figSpec)  where figSpec =
     {
       id, title, note?,
       params: [ { key, label, min, max, step, value, fmt? } ],
       scenarios?: [ { label, set: { key:value, ... }, desc? } ],
       compute: function (p) { return {
           axes:  { x:{min,max,label,ticks?}, y:{min,max,label,ticks?} },
           items: [ ...primitives ],          // see PRIMITIVES below
           readout?: [ { label, value, color? } ],   // live numeric panel
           facts?: { ... }                    // for the self-test, not drawn
       }; }
     }

   PRIMITIVES (all coords are DATA-space):
     { t:'line',  p1:[x,y], p2:[x,y], color?, label?, dash?, width?, labelAt? }
     { t:'seg',   pts:[[x,y]...], color?, label?, dash?, width? }    // polyline
     { t:'curve', pts:[[x,y]...], color?, label?, width?, smooth? }  // sampled fn
     { t:'vline', x, color?, label?, dash? }
     { t:'hline', y, color?, label?, dash? }
     { t:'point', x, y, label?, dot?, guideX?, guideY?, color?, dx?, dy? }
     { t:'area',  pts:[[x,y]...], fill?, stroke?, label?, labelColor? }
     { t:'arrow', p1:[x,y], p2:[x,y], color?, curved? }
     { t:'text',  x, y, text, color?, anchor?, size?, weight? }

   Mount an interactive widget (sliders + scenario chips + live readout):
       FigLab.mount(containerEl, figId, { height? })
   Render a single static frame (no controls) to an SVG string:
       FigLab.svg(figId, paramOverrides)         // used by the self-test page
   ============================================================================ */
(function () {
  'use strict';

  var REG = {};
  var uid = 0;

  // bilingual leaf resolver (same convention as study.js / econ-chart.js)
  function curLang() {
    try { var s = localStorage.getItem('lbc-lang'); if (s === 'en' || s === 'id') return s; } catch (e) {}
    try { var d = document.documentElement.lang; if (d === 'en' || d === 'id') return d; } catch (e2) {}
    return 'en';
  }
  function txt(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      var l = curLang(); return v[l] != null ? v[l] : (v.en != null ? v.en : (v.id != null ? v.id : ''));
    }
    return v == null ? '' : String(v);
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function n2(v) { return Math.round(v * 100) / 100; }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  // default colours (course-agnostic, readable on white)
  var C = {
    demand: '#d1495b', supply: '#0e7c66', line: '#5b6470', accent: '#0e7c66',
    alt: '#e0892e', alt2: '#3f6fb5', muted: '#9aa3ad', ink: '#1d2530', area: 'rgba(14,124,102,.13)',
    area2: 'rgba(208,73,91,.13)', dwl: 'rgba(224,137,46,.20)'
  };

  // ---- numeric helpers exposed to figure authors --------------------------
  // sample a function y=f(x) on [x0,x1] into n points (for smooth curves)
  function sample(f, x0, x1, n) {
    n = n || 64; var pts = [];
    for (var i = 0; i <= n; i++) { var x = x0 + (x1 - x0) * i / n; pts.push([x, f(x)]); }
    return pts;
  }
  // intersection of two lines given as point+slope (returns [x,y])
  function lineMeet(m1, b1, m2, b2) { var x = (b2 - b1) / (m1 - m2); return [x, m1 * x + b1]; }

  // ---- the renderer: items (data coords) -> SVG ---------------------------
  function renderSVG(scene, W, H) {
    W = W || 440; H = H || 340;
    var ax = scene.axes || {};
    var X = ax.x || { min: 0, max: 10 }, Y = ax.y || { min: 0, max: 10 };
    var pad = { l: 52, r: 26, t: 20, b: 42 };
    var id = 'fl' + (++uid);
    var plotW = W - pad.l - pad.r, plotH = H - pad.t - pad.b;
    var sx = function (v) { return pad.l + (v - X.min) / (X.max - X.min) * plotW; };
    var sy = function (v) { return pad.t + (1 - (v - Y.min) / (Y.max - Y.min)) * plotH; };
    var ox = sx(X.min), oy = sy(Y.min), topY = sy(Y.max), rightX = sx(X.max);

    var defs = '<defs>' +
      '<marker id="' + id + '-ax" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#555"/></marker>' +
      '<marker id="' + id + '-sh" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker>' +
      '</defs>';
    var bg = '', grid = '', mid = '', fg = '';

    // axes + arrowheads
    bg += '<line x1="' + ox + '" y1="' + oy + '" x2="' + ox + '" y2="' + (topY - 2) +
      '" stroke="#566" stroke-width="1.3" marker-end="url(#' + id + '-ax)"/>';
    bg += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (rightX + 2) + '" y2="' + oy +
      '" stroke="#566" stroke-width="1.3" marker-end="url(#' + id + '-ax)"/>';
    if (Y.label) bg += '<text x="' + (ox + 4) + '" y="' + (topY - 8) + '" font-size="12" fill="#333" font-style="italic">' + esc(txt(Y.label)) + '</text>';
    if (X.label) bg += '<text x="' + (rightX + 2) + '" y="' + (oy + 28) + '" font-size="11" fill="#667" text-anchor="end">' + esc(txt(X.label)) + '</text>';

    // optional numeric ticks
    (X.ticks || []).forEach(function (tk) {
      var x = sx(tk.v != null ? tk.v : tk);
      bg += '<line x1="' + x + '" y1="' + oy + '" x2="' + x + '" y2="' + (oy + 4) + '" stroke="#889" stroke-width="1"/>';
      bg += '<text x="' + x + '" y="' + (oy + 15) + '" font-size="9.5" fill="#889" text-anchor="middle">' + esc(tk.label != null ? tk.label : tk) + '</text>';
    });
    (Y.ticks || []).forEach(function (tk) {
      var y = sy(tk.v != null ? tk.v : tk);
      bg += '<line x1="' + ox + '" y1="' + y + '" x2="' + (ox - 4) + '" y2="' + y + '" stroke="#889" stroke-width="1"/>';
      bg += '<text x="' + (ox - 7) + '" y="' + (y + 3) + '" font-size="9.5" fill="#889" text-anchor="end">' + esc(tk.label != null ? tk.label : tk) + '</text>';
    });

    function polyD(pts, smooth) {
      var P = pts.map(function (q) { return [sx(q[0]), sy(q[1])]; });
      if (!smooth || P.length < 3) return P.map(function (q, i) { return (i ? 'L' : 'M') + n2(q[0]) + ',' + n2(q[1]); }).join(' ');
      var d = 'M' + n2(P[0][0]) + ',' + n2(P[0][1]);
      for (var i = 0; i < P.length - 1; i++) {
        var p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
        var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
        var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ' C' + n2(c1x) + ',' + n2(c1y) + ' ' + n2(c2x) + ',' + n2(c2y) + ' ' + n2(p2[0]) + ',' + n2(p2[1]);
      }
      return d;
    }

    (scene.items || []).forEach(function (it) {
      var col = it.color || C.line, dash = it.dash ? ' stroke-dasharray="6 4"' : '', w = it.width || 2.2;
      if (it.t === 'area') {
        var d = it.pts.map(function (q, i) { return (i ? 'L' : 'M') + n2(sx(q[0])) + ',' + n2(sy(q[1])); }).join(' ') + ' Z';
        grid += '<path d="' + d + '" fill="' + (it.fill || C.area) + '" stroke="' + (it.stroke || 'none') + '"' + (it.stroke ? ' stroke-width="1"' : '') + '/>';
        if (it.label) {
          var cx = 0, cy = 0; it.pts.forEach(function (q) { cx += q[0]; cy += q[1]; });
          cx /= it.pts.length; cy /= it.pts.length;
          grid += '<text x="' + n2(sx(cx)) + '" y="' + n2(sy(cy) + 4) + '" font-size="10.5" font-weight="700" fill="' + (it.labelColor || '#5a4a2a') + '" text-anchor="middle">' + esc(txt(it.label)) + '</text>';
        }
      } else if (it.t === 'curve' || it.t === 'seg') {
        mid += '<path d="' + polyD(it.pts, it.t === 'curve' && it.smooth !== false) + '" fill="none" stroke="' + col + '" stroke-width="' + w + '"' + dash + ' stroke-linecap="round" stroke-linejoin="round"/>';
        if (it.label) {
          var lp = it.pts[it.pts.length - 1];
          mid += '<text x="' + n2(sx(lp[0]) + 6) + '" y="' + n2(sy(lp[1]) + 4) + '" font-size="11.5" fill="' + col + '" font-weight="700">' + esc(txt(it.label)) + '</text>';
        }
      } else if (it.t === 'line' || it.t === 'vline' || it.t === 'hline') {
        var x1, y1, x2, y2;
        if (it.t === 'vline') { x1 = x2 = sx(it.x); y1 = oy; y2 = topY; }
        else if (it.t === 'hline') { y1 = y2 = sy(it.y); x1 = ox; x2 = rightX; }
        else { x1 = sx(it.p1[0]); y1 = sy(it.p1[1]); x2 = sx(it.p2[0]); y2 = sy(it.p2[1]); }
        mid += '<line x1="' + n2(x1) + '" y1="' + n2(y1) + '" x2="' + n2(x2) + '" y2="' + n2(y2) + '" stroke="' + col + '" stroke-width="' + w + '"' + dash + ' stroke-linecap="round"/>';
        if (it.label) {
          var lx, ly, anc;
          if (it.t === 'vline') { lx = x1; ly = topY + 1; anc = 'middle'; }
          else if (it.t === 'hline') { lx = rightX - 2; ly = y1 - 5; anc = 'end'; }
          else if (it.labelAt === 'start') { lx = x1 - 5; ly = y1 - 4; anc = 'end'; }
          else { lx = x2 + 6; ly = y2 + 4; anc = 'start'; }
          mid += '<text x="' + n2(lx) + '" y="' + n2(ly) + '" font-size="11.5" fill="' + col + '" font-weight="700" text-anchor="' + anc + '">' + esc(txt(it.label)) + '</text>';
        }
      } else if (it.t === 'arrow') {
        var ax1 = sx(it.p1[0]), ay1 = sy(it.p1[1]), ax2 = sx(it.p2[0]), ay2 = sy(it.p2[1]);
        if (it.curved) {
          var cyc = Math.min(ay1, ay2) - 16;
          fg += '<path d="M' + n2(ax1) + ',' + n2(ay1) + ' Q' + n2((ax1 + ax2) / 2) + ',' + n2(cyc) + ' ' + n2(ax2) + ',' + n2(ay2) + '" fill="none" stroke="' + (it.color || '#444') + '" stroke-width="1.4" marker-end="url(#' + id + '-sh)"/>';
        } else {
          fg += '<line x1="' + n2(ax1) + '" y1="' + n2(ay1) + '" x2="' + n2(ax2) + '" y2="' + n2(ay2) + '" stroke="' + (it.color || '#444') + '" stroke-width="1.4" marker-end="url(#' + id + '-sh)"/>';
        }
      } else if (it.t === 'point') {
        var px = sx(it.x), py = sy(it.y);
        if (it.guideY !== undefined) {
          grid += '<line x1="' + ox + '" y1="' + n2(py) + '" x2="' + n2(px) + '" y2="' + n2(py) + '" stroke="#c2c8cf" stroke-width="1" stroke-dasharray="3 3"/>';
          if (it.guideY) fg += '<text x="' + (ox - 6) + '" y="' + n2(py + 3.5) + '" font-size="10.5" fill="#333" text-anchor="end">' + esc(txt(it.guideY)) + '</text>';
        }
        if (it.guideX !== undefined) {
          grid += '<line x1="' + n2(px) + '" y1="' + oy + '" x2="' + n2(px) + '" y2="' + n2(py) + '" stroke="#c2c8cf" stroke-width="1" stroke-dasharray="3 3"/>';
          if (it.guideX) fg += '<text x="' + n2(px) + '" y="' + (oy + 14) + '" font-size="10.5" fill="#333" text-anchor="middle">' + esc(txt(it.guideX)) + '</text>';
        }
        if (it.dot !== false) fg += '<circle cx="' + n2(px) + '" cy="' + n2(py) + '" r="3.6" fill="' + (it.color || C.ink) + '" stroke="#fff" stroke-width="1"/>';
        if (it.label) {
          var ddx = it.dx != null ? it.dx : 8, ddy = it.dy != null ? it.dy : -8;
          fg += '<text x="' + n2(px + ddx) + '" y="' + n2(py + ddy) + '" font-size="11.5" fill="' + (it.color || C.ink) + '" font-weight="700">' + esc(txt(it.label)) + '</text>';
        }
      } else if (it.t === 'text') {
        fg += '<text x="' + n2(sx(it.x)) + '" y="' + n2(sy(it.y)) + '" font-size="' + (it.size || 10.5) + '" fill="' + (it.color || '#667') + '" text-anchor="' + (it.anchor || 'start') + '"' + (it.weight ? ' font-weight="' + it.weight + '"' : '') + '>' + esc(txt(it.text)) + '</text>';
      }
    });

    var mL = 6, mR = 64, mT = 8, mB = 8;
    return '<svg viewBox="' + (-mL) + ' ' + (-mT) + ' ' + (W + mL + mR) + ' ' + (H + mT + mB) +
      '" width="100%" style="max-width:' + (W + mL + mR) + 'px;height:auto;overflow:visible" ' +
      'xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif">' +
      defs + bg + grid + mid + fg + '</svg>';
  }

  // ---- public: register / compute / static svg ----------------------------
  function register(spec) { REG[spec.id] = spec; return spec; }
  function paramDefaults(spec) {
    var p = {}; (spec.params || []).forEach(function (q) { p[q.key] = q.value; }); return p;
  }
  function computeFig(figId, overrides) {
    var spec = REG[figId]; if (!spec) return null;
    var p = paramDefaults(spec);
    if (overrides) for (var k in overrides) if (overrides.hasOwnProperty(k)) p[k] = overrides[k];
    return { spec: spec, params: p, scene: spec.compute(p) };
  }
  function svg(figId, overrides, W, H) {
    var r = computeFig(figId, overrides); if (!r) return '';
    return renderSVG(r.scene, W, H);
  }

  // ---- public: interactive mount ------------------------------------------
  function mount(container, figId, opts) {
    opts = opts || {};
    var spec = REG[figId];
    if (!container) return;
    if (!spec) { container.innerHTML = '<div class="fl-missing">figure “' + esc(figId) + '” not found</div>'; return; }
    var state = paramDefaults(spec);

    var wrap = document.createElement('div');
    wrap.className = 'figlab';
    container.innerHTML = '';
    container.appendChild(wrap);

    var stage = document.createElement('div'); stage.className = 'fl-stage';
    var side = document.createElement('div'); side.className = 'fl-side';
    wrap.appendChild(stage); wrap.appendChild(side);

    // scenario chips
    var chips = null;
    if (spec.scenarios && spec.scenarios.length) {
      chips = document.createElement('div'); chips.className = 'fl-chips';
      spec.scenarios.forEach(function (sc, i) {
        var b = document.createElement('button');
        b.className = 'fl-chip'; b.textContent = txt(sc.label);
        b.title = sc.desc ? txt(sc.desc) : '';
        b.onclick = function () {
          for (var k in sc.set) if (sc.set.hasOwnProperty(k)) state[k] = sc.set[k];
          syncSliders(); draw();
          chips.querySelectorAll('.fl-chip').forEach(function (x) { x.classList.remove('on'); });
          b.classList.add('on');
          setScenarioExpl(sc);
        };
        chips.appendChild(b);
      });
      side.appendChild(chips);
    }

    // sliders
    var sliders = {};
    (spec.params || []).forEach(function (q) {
      var row = document.createElement('div'); row.className = 'fl-slider';
      var lab = document.createElement('label');
      lab.innerHTML = '<span>' + esc(txt(q.label)) + '</span><b class="fl-val"></b>';
      var inp = document.createElement('input');
      inp.type = 'range'; inp.min = q.min; inp.max = q.max; inp.step = q.step; inp.value = state[q.key];
      var valEl = lab.querySelector('.fl-val');
      function show() { valEl.textContent = q.fmt ? q.fmt(state[q.key]) : state[q.key]; }
      inp.oninput = function () {
        state[q.key] = parseFloat(inp.value); show(); draw();
        if (chips) chips.querySelectorAll('.fl-chip').forEach(function (x) { x.classList.remove('on'); });
        resetExpl();
      };
      sliders[q.key] = { inp: inp, show: show };
      row.appendChild(lab); row.appendChild(inp); side.appendChild(row);
      show();
    });

    var readoutEl = document.createElement('div'); readoutEl.className = 'fl-readout';
    side.appendChild(readoutEl);

    // Explanation box: shows the figure's default note, OR the active scenario's
    // "why" when a scenario chip is selected (reverts when a slider is moved).
    var explEl = null;
    if (spec.note || (spec.scenarios && spec.scenarios.some(function (s) { return s.why; }))) {
      explEl = document.createElement('div'); explEl.className = 'fl-note';
      side.appendChild(explEl);
    }
    function resetExpl() {
      if (!explEl) return;
      explEl.classList.remove('fl-why');
      explEl.innerHTML = spec.note ? txt(spec.note) : '';
    }
    function setScenarioExpl(sc) {
      if (!explEl) return;
      var w = sc.why ? txt(sc.why) : (sc.desc ? txt(sc.desc) : '');
      explEl.classList.add('fl-why');
      explEl.innerHTML = w
        ? '<b class="fl-why-h">' + esc(txt(sc.label)) + '</b>' + w
        : (spec.note ? txt(spec.note) : '');
    }
    resetExpl();

    function syncSliders() {
      (spec.params || []).forEach(function (q) {
        var s = sliders[q.key]; if (s) { s.inp.value = state[q.key]; s.show(); }
      });
    }
    function draw() {
      var scene = spec.compute(state);
      stage.innerHTML = (spec.title ? '<div class="fl-title">' + esc(txt(spec.title)) + '</div>' : '') +
        renderSVG(scene, opts.width, opts.height);
      var ro = scene.readout || [];
      readoutEl.innerHTML = ro.map(function (r) {
        return '<div class="fl-ro"><span>' + esc(txt(r.label)) + '</span><b' +
          (r.color ? ' style="color:' + r.color + '"' : '') + '>' + esc(r.value) + '</b></div>';
      }).join('');
    }
    draw();
  }

  window.FigLab = {
    register: register, mount: mount, svg: svg, compute: computeFig,
    _reg: REG, sample: sample, lineMeet: lineMeet, colors: C, clamp: clamp
  };
})();
