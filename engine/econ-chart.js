/* ============================================================================
   LBC LEARNING — EconChart (v1)
   Declarative economics-diagram engine. A chart is DATA, not hand-drawn SVG.
   You declare curves as math; the engine computes intersections (equilibria),
   maps everything into one coordinate system, and renders clean, consistent
   SVG with axes, dashed guides + axis ticks, shift arrows and labels. Correct
   by construction — if a supply curve shifts left, the new equilibrium price is
   genuinely higher because the engine solved the line equations.

   USAGE:  window.EconChart(spec) -> SVG/HTML string.

   SINGLE PANEL spec:
   {
     w, h, pad:{l,r,t,b},
     x:{min,max,label}, y:{min,max,label},
     curves:[
       { id:'D',  kind:'line', p1:[x,y], p2:[x,y], color, label, labelAt:'end'|'start' },
       { id:'S1', kind:'vline', x:6, color, label, dash:true },
       { id:'L',  kind:'hline', y:4, color, label }
     ],
     points:[
       // equilibrium = intersection of two curves:
       { on:['D','S1'], label:'E₁', dot:true, guideY:'r₁', guideX:'Q₁' },
       // or a point on one curve at a given x or y:
       { onCurve:'NCO', atY:4.1, guideX:'NCO₁' }
     ],
     shifts:[ { from:'S1', to:'S2' } ],
     notes:[ { x, y, text, color, anchor, size } ]
   }

   MULTI-PANEL:  { panels:[ {title, ...panelSpec}, ... ] }
   BARS PANEL:   { kind:'bars', x/y..., bars:[{label,value,color}], gap:{from,to,label,color} }
   ============================================================================ */
(function () {
  'use strict';
  var seq = 0;

  function num(v) { return Math.round(v * 100) / 100; }

  // Resolve a text leaf that may be a plain string OR a bilingual { en, id }
  // object (same convention as the study engine). Without this, an { en, id }
  // label/title/caption would render as "[object Object]".
  function curLang() {
    try {
      var s = (typeof localStorage !== 'undefined') && localStorage.getItem('lbc-lang');
      if (s === 'en' || s === 'id') return s;
    } catch (e) {}
    try {
      var d = (typeof document !== 'undefined') && document.documentElement && document.documentElement.lang;
      if (d === 'en' || d === 'id') return d;
    } catch (e2) {}
    return 'en';
  }
  function txt(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      var l = curLang();
      return v[l] != null ? v[l] : (v.en != null ? v.en : (v.id != null ? v.id : ''));
    }
    return v == null ? '' : String(v);
  }

  function curvePanel(p) {
    var W = p.w || 360, H = p.h || 300;
    var pad = p.pad || { l: 46, r: 32, t: 26, b: 42 };
    var X = p.x || { min: 0, max: 10 }, Y = p.y || { min: 0, max: 10 };
    var uid = 'ec' + (++seq);
    var plotW = W - pad.l - pad.r, plotH = H - pad.t - pad.b;
    var sx = function (v) { return pad.l + (v - X.min) / (X.max - X.min) * plotW; };
    var sy = function (v) { return pad.t + (1 - (v - Y.min) / (Y.max - Y.min)) * plotH; };

    var byId = {};
    (p.curves || []).forEach(function (c) {
      if (c.kind === 'vline') byId[c.id] = { vert: true, x: c.x };
      else if (c.kind === 'hline') byId[c.id] = { horiz: true, y: c.y };
      else if (c.kind === 'path') { /* path curves are illustrative; not used for intersections */ }
      else {
        var m = (c.p2[1] - c.p1[1]) / (c.p2[0] - c.p1[0]);
        byId[c.id] = { m: m, b: c.p1[1] - m * c.p1[0], p1: c.p1, p2: c.p2 };
      }
    });

    function intersect(a, b) {
      var A = byId[a], B = byId[b];
      if (!A || !B) return null;
      if (A.vert) return [A.x, B.vert ? null : (B.horiz ? B.y : B.m * A.x + B.b)];
      if (B.vert) return [B.x, A.horiz ? A.y : A.m * B.x + A.b];
      if (A.horiz) return [B.horiz ? null : (B.m ? (A.y - B.b) / B.m : null), A.y];
      if (B.horiz) return [A.m ? (B.y - A.b) / A.m : null, B.y];
      var xi = (B.b - A.b) / (A.m - B.m);
      return [xi, A.m * xi + A.b];
    }
    function onCurve(id, opt) {
      var c = byId[id]; if (!c) return null;
      if (opt.atY != null) return c.vert ? [c.x, opt.atY] : (c.horiz ? null : [(opt.atY - c.b) / c.m, opt.atY]);
      if (opt.atX != null) return c.horiz ? [opt.atX, c.y] : (c.vert ? null : [opt.atX, c.m * opt.atX + c.b]);
      return null;
    }

    var ox = sx(X.min), oy = sy(Y.min), topY = sy(Y.max), rightX = sx(X.max);
    var s = '<defs>' +
      '<marker id="' + uid + '-ax" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#555"/></marker>' +
      '<marker id="' + uid + '-sh" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker>' +
      '</defs>';

    // axes
    s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + ox + '" y2="' + (topY - 2) + '" stroke="#555" stroke-width="1.3" marker-end="url(#' + uid + '-ax)"/>';
    s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (rightX + 2) + '" y2="' + oy + '" stroke="#555" stroke-width="1.3" marker-end="url(#' + uid + '-ax)"/>';
    if (Y.label) s += '<text x="' + (ox + 4) + '" y="' + (topY - 9) + '" font-size="12" fill="#333" font-style="italic">' + txt(Y.label) + '</text>';
    if (X.label) s += '<text x="' + (rightX + 2) + '" y="' + (oy + 28) + '" font-size="11" fill="#666" text-anchor="end">' + txt(X.label) + '</text>';

    // filled regions (e.g. tariff welfare areas) — drawn behind curves/points
    (p.areas || []).forEach(function (a) {
      var d = a.pts.map(function (q, i) { return (i ? 'L' : 'M') + num(sx(q[0])) + ',' + num(sy(q[1])); }).join(' ') + ' Z';
      s += '<path d="' + d + '" fill="' + (a.fill || 'rgba(14,143,184,.13)') + '" stroke="' + (a.stroke || 'none') + '"' + (a.stroke ? ' stroke-width="1"' : '') + '/>';
      if (a.label) {
        var cx = 0, cy = 0; a.pts.forEach(function (q) { cx += q[0]; cy += q[1]; });
        cx /= a.pts.length; cy /= a.pts.length;
        s += '<text x="' + num(sx(cx)) + '" y="' + num(sy(cy) + 4) + '" font-size="11" font-weight="700" fill="' + (a.labelColor || '#333') + '" text-anchor="middle">' + txt(a.label) + '</text>';
      }
    });

    // guides + dots + labels computed from points
    var guides = '', dots = '', labels = '';
    (p.points || []).forEach(function (pt) {
      var P = pt.on ? intersect(pt.on[0], pt.on[1]) : (pt.at ? pt.at : onCurve(pt.onCurve, pt));
      if (!P || P[0] == null || P[1] == null) return;
      var px = sx(P[0]), py = sy(P[1]);
      if (pt.guideY !== undefined) {
        guides += '<line x1="' + ox + '" y1="' + py + '" x2="' + px + '" y2="' + py + '" stroke="#bbb" stroke-width="1" stroke-dasharray="3 3"/>';
        if (pt.guideY) labels += '<text x="' + (ox - 5) + '" y="' + (py + 4) + '" font-size="10.5" fill="#333" text-anchor="end">' + txt(pt.guideY) + '</text>';
      }
      if (pt.guideX !== undefined) {
        guides += '<line x1="' + px + '" y1="' + oy + '" x2="' + px + '" y2="' + py + '" stroke="#bbb" stroke-width="1" stroke-dasharray="3 3"/>';
        if (pt.guideX) labels += '<text x="' + px + '" y="' + (oy + 14) + '" font-size="10.5" fill="#333" text-anchor="middle">' + txt(pt.guideX) + '</text>';
      }
      if (pt.dot !== false) dots += '<circle cx="' + px + '" cy="' + py + '" r="3.4" fill="#111"/>';
      if (pt.label) {
        var dx = pt.labelDx != null ? pt.labelDx : 7, dy = pt.labelDy != null ? pt.labelDy : -7;
        labels += '<text x="' + (px + dx) + '" y="' + (py + dy) + '" font-size="11" fill="#111" font-weight="700">' + txt(pt.label) + '</text>';
      }
    });
    s += guides;

    // smooth polyline (Catmull-Rom → cubic Bézier) for paths
    function pathD(pts, smooth) {
      var P = pts.map(function (q) { return [sx(q[0]), sy(q[1])]; });
      if (!smooth || P.length < 3) return P.map(function (q, i) { return (i ? 'L' : 'M') + num(q[0]) + ',' + num(q[1]); }).join(' ');
      var d = 'M' + num(P[0][0]) + ',' + num(P[0][1]);
      for (var i = 0; i < P.length - 1; i++) {
        var p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
        var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
        var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ' C' + num(c1x) + ',' + num(c1y) + ' ' + num(c2x) + ',' + num(c2y) + ' ' + num(p2[0]) + ',' + num(p2[1]);
      }
      return d;
    }

    // curves
    (p.curves || []).forEach(function (c) {
      var col = c.color || '#0e8fb8', dash = c.dash ? ' stroke-dasharray="6 4"' : '';
      if (c.kind === 'path') {
        s += '<path d="' + pathD(c.pts, c.smooth) + '" fill="none" stroke="' + col + '" stroke-width="2.3"' + dash + ' stroke-linecap="round" stroke-linejoin="round"/>';
        if (c.label) {
          var lp = c.pts[c.pts.length - 1];
          s += '<text x="' + num(sx(lp[0]) + 5) + '" y="' + num(sy(lp[1]) + 4) + '" font-size="11" fill="' + col + '" font-weight="700">' + txt(c.label) + '</text>';
        }
        return;
      }
      var x1, y1, x2, y2;
      if (c.kind === 'vline') { x1 = x2 = sx(c.x); y1 = oy; y2 = topY; }
      else if (c.kind === 'hline') { y1 = y2 = sy(c.y); x1 = ox; x2 = rightX; }
      else { x1 = sx(c.p1[0]); y1 = sy(c.p1[1]); x2 = sx(c.p2[0]); y2 = sy(c.p2[1]); }
      s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col + '" stroke-width="2.3"' + dash + ' stroke-linecap="round"/>';
      if (c.label) {
        var lx, ly, anc;
        if (c.kind === 'vline') { lx = x1; ly = topY - 3; anc = 'middle'; }
        else if (c.kind === 'hline') { lx = rightX - 2; ly = y1 - 5; anc = 'end'; }
        else if (c.labelAt === 'start') { lx = x1 - 4; ly = y1 - 4; anc = 'end'; }
        else { lx = x2 + 5; ly = y2 + 4; anc = 'start'; }
        s += '<text x="' + lx + '" y="' + ly + '" font-size="11" fill="' + col + '" font-weight="700" text-anchor="' + anc + '">' + txt(c.label) + '</text>';
      }
    });

    // shift arrows
    function rep(id) {
      var c = byId[id];
      if (c.vert) return [c.x, (Y.min + Y.max) / 2];
      if (c.horiz) return [(X.min + X.max) / 2, c.y];
      var mx = (c.p1[0] + c.p2[0]) / 2; return [mx, c.m * mx + c.b];
    }
    (p.shifts || []).forEach(function (sh) {
      if (!byId[sh.from] || !byId[sh.to]) return;
      var a = rep(sh.from), b = rep(sh.to);
      var ax = sx(a[0]), ay = sy(a[1]), bx = sx(b[0]), by = sy(b[1]);
      var cy = Math.min(ay, by) - 16;
      s += '<path d="M' + num(ax) + ',' + num(ay) + ' Q' + num((ax + bx) / 2) + ',' + num(cy) + ' ' + num(bx) + ',' + num(by) + '" fill="none" stroke="#444" stroke-width="1.4" marker-end="url(#' + uid + '-sh)"/>';
    });

    s += dots + labels;
    (p.notes || []).forEach(function (n) {
      s += '<text x="' + sx(n.x) + '" y="' + sy(n.y) + '" font-size="' + (n.size || 10.5) + '" fill="' + (n.color || '#666') + '" text-anchor="' + (n.anchor || 'start') + '">' + txt(n.text) + '</text>';
    });

    // Pad the viewBox so end-of-curve labels, axis labels and notes that sit
    // just outside the plot rectangle are never clipped. mR gives room for the
    // right-hand curve labels (e.g. "bond"/"stock"); mT/mL/mB small safety.
    var mL = 4, mR = 78, mT = 10, mB = 6;
    return '<svg viewBox="' + (-mL) + ' ' + (-mT) + ' ' + (W + mL + mR) + ' ' + (H + mT + mB) +
      '" width="100%" style="max-width:' + (W + mL + mR) + 'px;height:auto;overflow:visible" ' +
      'xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif">' + s + '</svg>';
  }

  function barsPanel(p) {
    var W = p.w || 360, H = p.h || 300;
    var pad = p.pad || { l: 30, r: 60, t: 24, b: 40 };
    var bars = p.bars || [];
    var plotW = W - pad.l - pad.r, plotH = H - pad.t - pad.b;
    var base = pad.t + plotH;
    var vmax = p.yMax || (Math.max.apply(null, bars.map(function (b) { return b.value; })) * 1.18);
    var band = plotW / bars.length;
    var bw = p.barWidth || band * 0.5;
    var byTop = function (v) { return base - v / vmax * plotH; };
    var cx = function (i) { return pad.l + band * (i + 0.5); };

    var s = '<line x1="' + pad.l + '" y1="' + base + '" x2="' + (W - pad.r + 6) + '" y2="' + base + '" stroke="#999" stroke-width="1.2"/>';
    s += '<text x="' + (pad.l - 8) + '" y="' + (base + 14) + '" font-size="11" fill="#999">0</text>';
    bars.forEach(function (b, i) {
      var top = byTop(b.value), x = cx(i) - bw / 2;
      var col = b.color || '#0e8fb8';
      s += '<rect x="' + x + '" y="' + top + '" width="' + bw + '" height="' + (base - top) + '" rx="4" fill="' + col + '22" stroke="' + col + '" stroke-width="1.6"/>';
      s += '<text x="' + cx(i) + '" y="' + ((top + base) / 2) + '" font-size="13" font-weight="700" fill="' + col + '" text-anchor="middle">' + txt(b.label) + '</text>';
      if (b.caption) s += '<text x="' + cx(i) + '" y="' + (base + 16) + '" font-size="10.5" fill="#777" text-anchor="middle">' + txt(b.caption) + '</text>';
    });
    // gap bracket between two bar tops (e.g. NX = NCO = Y - (C+I+G))
    if (p.gap) {
      var hi = byTop(bars[p.gap.from].value), lo = byTop(bars[p.gap.to].value);
      var bx = W - pad.r + 14, col = p.gap.color || '#15803d';
      // dashed connector from the lower top across to the bracket
      s += '<line x1="' + (cx(p.gap.to) + bw / 2) + '" y1="' + lo + '" x2="' + bx + '" y2="' + lo + '" stroke="' + col + '" stroke-width="1" stroke-dasharray="3 3"/>';
      s += '<line x1="' + (cx(p.gap.from) + bw / 2) + '" y1="' + hi + '" x2="' + bx + '" y2="' + hi + '" stroke="' + col + '" stroke-width="1" stroke-dasharray="3 3"/>';
      s += '<path d="M' + bx + ',' + hi + ' L' + (bx + 6) + ',' + hi + ' L' + (bx + 6) + ',' + lo + ' L' + bx + ',' + lo + '" fill="none" stroke="' + col + '" stroke-width="1.6"/>';
      if (p.gap.label) s += '<text x="' + (bx + 11) + '" y="' + ((hi + lo) / 2 + 4) + '" font-size="12" font-weight="700" fill="' + col + '">' + txt(p.gap.label) + '</text>';
    }
    var bmL = 4, bmR = 20, bmT = 8, bmB = 6;
    return '<svg viewBox="' + (-bmL) + ' ' + (-bmT) + ' ' + (W + bmL + bmR) + ' ' + (H + bmT + bmB) +
      '" width="100%" style="max-width:' + (W + bmL + bmR) + 'px;height:auto;overflow:visible" ' +
      'xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif">' + s + '</svg>';
  }

  function panel(p) { return p.kind === 'bars' ? barsPanel(p) : curvePanel(p); }

  window.EconChart = function (spec) {
    if (!spec) return '';
    if (spec.panels) {
      return '<div class="econ-panels">' + spec.panels.map(function (p) {
        return '<figure class="econ-panel">' + panel(p) +
          (p.title ? '<figcaption class="econ-cap">' + txt(p.title) + '</figcaption>' : '') + '</figure>';
      }).join('') + '</div>';
    }
    return '<div class="econ-panels"><figure class="econ-panel">' + panel(spec) +
      (spec.title ? '<figcaption class="econ-cap">' + txt(spec.title) + '</figcaption>' : '') + '</figure></div>';
  };
})();
