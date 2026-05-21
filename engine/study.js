/* ============================================================================
   LBC LEARNING — Study Engine (v3.1)
   Renders a self-contained course from a single `window.COURSE` object.
   Vanilla JS, no build step. Default landing view = Overview.

   Each week (unit) has four sub-segments rendered as an in-lesson tab bar:
       Notes · Formulas · Graphs · Quiz
   Notes/Formulas/Graphs are section→card arrays (prose, math, tables, charts).
   Quiz is an array of practice questions with reveal-able worked answers.

   A course page only needs:
     <link rel="stylesheet" href="../../engine/study.css">
     <div id="study"></div>
     <script src="course.js"></script>      // defines window.COURSE
     <script src="../../engine/study.js"></script>

   Hash routing (deep links + back/forward):
     #/overview   #/unit/<id>   #/unit/<id>/<segment>   #/glossary
   ============================================================================ */
(function () {
  'use strict';

  var COURSE = window.COURSE;
  var root = document.getElementById('study');
  if (!COURSE || !root) {
    if (root) root.innerHTML = '<div class="empty"><div class="em-ico">!</div>' +
      '<p>No course data found. Define <code>window.COURSE</code> in course.js.</p></div>';
    return;
  }

  var meta = COURSE.meta || {};
  var units = COURSE.units || [];
  var glossary = COURSE.glossary || [];

  // The four sub-segments every week carries. `kind` picks the renderer.
  var SEGMENTS = [
    { key: 'notes',    label: 'Notes',    kind: 'sections' },
    { key: 'formulas', label: 'Formulas', kind: 'sections' },
    { key: 'graphs',   label: 'Graphs',   kind: 'sections' },
    { key: 'quiz',     label: 'Quiz',     kind: 'quiz' }
  ];
  function segDef(key) {
    for (var i = 0; i < SEGMENTS.length; i++) if (SEGMENTS[i].key === key) return SEGMENTS[i];
    return SEGMENTS[0];
  }

  // ---- progress (localStorage per course) ---------------------------------
  var STORE_KEY = 'lbc-learn:' + (meta.slug || 'course') + ':done';
  function loadDone() {
    try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY) || '[]')); }
    catch (e) { return new Set(); }
  }
  function saveDone(set) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(set))); } catch (e) {}
  }
  var done = loadDone();
  function isDone(id) { return done.has(id); }
  function setDone(id, val) {
    if (val) done.add(id); else done.delete(id);
    saveDone(done); renderProgress();
  }

  // ---- helpers -------------------------------------------------------------
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function unitById(id) {
    for (var i = 0; i < units.length; i++) if (units[i].id === id) return units[i];
    return null;
  }
  function hasContent(u, segKey) {
    var v = u[segKey];
    return !!(v && v.length);
  }
  function renderMath(scope) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(scope || document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }
  }

  // ---- chrome (top bar + nav) ---------------------------------------------
  if (meta.accent) document.documentElement.style.setProperty('--accent', meta.accent);
  if (meta.accentSoft) document.documentElement.style.setProperty('--accent-soft', meta.accentSoft);

  var bar = el('div', 'sbar');
  bar.innerHTML =
    '<a class="sbar-home" href="../../index.html">‹ All courses</a>' +
    '<div class="sbar-id">' +
      '<span class="sbar-code">' + (meta.code || 'COURSE') + '</span>' +
      '<span class="sbar-title">' + (meta.title || 'Untitled course') + '</span>' +
    '</div>' +
    '<div class="sbar-spacer"></div>' +
    '<div class="sbar-prog"><span id="prog-label">0%</span>' +
      '<span class="track"><span class="fill" id="prog-fill"></span></span></div>';
  root.appendChild(bar);

  var nav = el('div', 'snav');
  root.appendChild(nav);

  var view = el('div'); view.id = 'view';
  root.appendChild(view);

  function buildNav(active) {
    var items = [{ key: 'overview', label: 'Overview' }];
    units.forEach(function (u) {
      items.push({ key: 'unit/' + u.id, label: u.label || u.title, doneId: u.id });
    });
    if (glossary.length) items.push({ key: 'glossary', label: 'Glossary' });

    nav.innerHTML = '';
    items.forEach(function (it) {
      var b = el('button', 'snav-btn' + (it.key === active ? ' active' : ''));
      b.innerHTML = it.label + (it.doneId && isDone(it.doneId) ? '<span class="dot"></span>' : '');
      b.onclick = function () { location.hash = '#/' + it.key; };
      nav.appendChild(b);
    });
  }

  function renderProgress() {
    if (!units.length) return;
    var n = units.reduce(function (acc, u) { return acc + (isDone(u.id) ? 1 : 0); }, 0);
    var pct = Math.round((n / units.length) * 100);
    var fill = document.getElementById('prog-fill');
    var label = document.getElementById('prog-label');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = pct + '% · ' + n + '/' + units.length;
  }

  // ---- shared content renderers -------------------------------------------
  function sectionsHTML(arr) {
    var h = '';
    (arr || []).forEach(function (sec, si) {
      if (sec.heading) {
        h += '<div class="sec-head"><span class="sec-num">' + (sec.num || (si + 1)) + '</span>' +
          sec.heading + '</div>';
      }
      (sec.cards || []).forEach(function (c) {
        h += '<div class="card"' + (c.chartId ? ' data-chart="' + c.chartId + '"' : '') + '>' +
          (c.title ? '<h4>' + c.title + '</h4>' : '') +
          (c.html || '') +
          (c.chartId ? '<div class="chart-wrap"><canvas id="chart-' + c.chartId + '"></canvas></div>' : '') +
        '</div>';
      });
    });
    return h;
  }

  function quizHTML(arr) {
    var h = '';
    (arr || []).forEach(function (q, i) {
      var type = q.type || 'concept';
      h += '<div class="qz-card"><div class="qz-q">' +
        '<span class="qz-badge ' + type + '">' + type + '</span>' +
        '<div class="qz-text">' + (q.q || '') + '</div>' +
        (q.context ? '<div class="qz-context">' + q.context + '</div>' : '') +
      '</div>' +
      '<button class="qz-reveal" data-i="' + i + '">Reveal answer</button>' +
      '<div class="qz-answer" id="qa-' + i + '"><h5>Worked answer</h5>';
      (q.answer || []).forEach(function (step) { h += '<div class="qz-step">' + step + '</div>'; });
      if (q.tip) h += '<div class="qz-tip">' + q.tip + '</div>';
      h += '</div></div>';
    });
    return h;
  }

  function wireQuiz() {
    view.querySelectorAll('.qz-reveal').forEach(function (b) {
      b.onclick = function () {
        var ans = document.getElementById('qa-' + b.getAttribute('data-i'));
        var open = ans.classList.toggle('open');
        b.textContent = open ? 'Hide answer' : 'Reveal answer';
      };
    });
  }

  function wireCharts() {
    if (!COURSE.charts) return;
    view.querySelectorAll('[data-chart]').forEach(function (cardEl) {
      var key = cardEl.getAttribute('data-chart');
      var canvas = document.getElementById('chart-' + key);
      if (canvas && typeof COURSE.charts[key] === 'function') {
        try { COURSE.charts[key](canvas); } catch (e) {}
      }
    });
  }

  // ---- views ---------------------------------------------------------------
  function viewOverview() {
    var ov = COURSE.overview || {};
    var h = '<div class="ov-hero">' +
      '<div class="eyebrow">' + (meta.term || 'Exam prep') + '</div>' +
      '<h1 class="ov-title">' + (meta.title || '') + '</h1>' +
      (ov.blurb ? '<p class="ov-sub">' + ov.blurb + '</p>' : '');
    var stats = ov.stats || defaultStats();
    if (stats.length) {
      h += '<div class="ov-stats">';
      stats.forEach(function (s) {
        h += '<div class="ov-stat"><b>' + s.value + '</b><span>' + s.label + '</span></div>';
      });
      h += '</div>';
    }
    h += '</div>';

    if (ov.objectives && ov.objectives.length) {
      h += '<div class="ov-objectives"><h3>What you will be able to do</h3><ul>';
      ov.objectives.forEach(function (o) { h += '<li>' + o + '</li>'; });
      h += '</ul></div>';
    }

    h += '<div class="sec-label">Weeks</div>';
    if (units.length) {
      h += '<div class="unit-grid">';
      units.forEach(function (u, i) {
        h += '<a class="unit-card' + (isDone(u.id) ? ' done' : '') + '" href="#/unit/' + u.id + '">' +
          '<div class="uc-top"><span class="uc-num">' +
            (u.label || ('Week ' + (i + 1))) + '</span>' +
            '<span class="uc-check">✓</span></div>' +
          '<div class="uc-title">' + (u.title || '') + '</div>' +
          (u.subtitle ? '<div class="uc-sub">' + u.subtitle + '</div>' : '') +
        '</a>';
      });
      h += '</div>';
    } else {
      h += emptyHTML('No weeks yet', 'Add entries to COURSE.units in course.js.');
    }
    view.innerHTML = h;
    renderMath(view);
  }

  function defaultStats() {
    var s = [{ label: 'Weeks', value: units.length }];
    if (glossary.length) s.push({ label: 'Terms', value: glossary.length });
    return s;
  }

  function viewUnit(id, seg) {
    var u = unitById(id);
    if (!u) { viewOverview(); return; }
    var idx = units.indexOf(u);
    var prev = units[idx - 1], next = units[idx + 1];
    var def = segDef(seg);

    var h = '<div class="lesson-head">' +
      '<div class="eyebrow">' + (u.label || ('Week ' + (idx + 1))) + '</div>' +
      '<h1 class="lesson-title">' + (u.title || '') + '</h1>' +
      (u.subtitle ? '<div class="lesson-sub">' + u.subtitle + '</div>' : '') +
    '</div>';

    h += '<div class="lesson-toolbar">' +
      '<button class="btn ' + (isDone(u.id) ? 'done' : 'primary') + '" id="mark-done">' +
        (isDone(u.id) ? '✓ Completed' : 'Mark complete') + '</button>' +
    '</div>';

    // sub-segment tab bar
    h += '<div class="subtabs">';
    SEGMENTS.forEach(function (s) {
      h += '<button class="subtab' + (s.key === def.key ? ' active' : '') +
        (hasContent(u, s.key) ? ' filled' : '') + '" data-seg="' + s.key + '">' +
        s.label + '</button>';
    });
    h += '</div>';

    // active sub-segment content
    h += '<div class="seg-body">';
    if (def.kind === 'quiz') {
      h += hasContent(u, 'quiz')
        ? quizHTML(u.quiz)
        : emptyHTML('No quiz yet', 'Practice questions for this week will be added soon.');
    } else {
      h += hasContent(u, def.key)
        ? sectionsHTML(u[def.key])
        : emptyHTML('No ' + def.label.toLowerCase() + ' yet',
            def.label + ' for this week will be added soon.');
    }
    h += '</div>';

    h += '<div class="lesson-foot">' +
      (prev ? '<a class="btn" href="#/unit/' + prev.id + '">‹ ' + (prev.label || 'Previous') + '</a>' : '<span></span>') +
      (next ? '<a class="btn primary" href="#/unit/' + next.id + '">' + (next.label || 'Next') + ' ›</a>'
            : '<a class="btn" href="#/overview">Back to overview</a>') +
    '</div>';

    view.innerHTML = h;
    renderMath(view);
    wireQuiz();
    wireCharts();

    var mark = document.getElementById('mark-done');
    if (mark) mark.onclick = function () {
      setDone(u.id, !isDone(u.id));
      mark.className = 'btn ' + (isDone(u.id) ? 'done' : 'primary');
      mark.textContent = isDone(u.id) ? '✓ Completed' : 'Mark complete';
      buildNav('unit/' + u.id);
    };

    view.querySelectorAll('.subtab').forEach(function (b) {
      b.onclick = function () { location.hash = '#/unit/' + u.id + '/' + b.getAttribute('data-seg'); };
    });
  }

  function viewGlossary() {
    var groups = {};
    glossary.forEach(function (t) {
      var g = t.group || 'General';
      (groups[g] = groups[g] || []).push(t);
    });
    var h = '<div class="eyebrow">Reference</div><h1 class="ov-title">Exam glossary</h1>' +
      '<input class="glo-search" id="glo-search" placeholder="Filter terms…" autocomplete="off">' +
      '<div id="glo-groups">';
    Object.keys(groups).forEach(function (g) {
      h += '<div class="glo-group"><div class="glo-group-head">' + g +
        '<span class="count">' + groups[g].length + '</span></div><div class="glo-list">';
      groups[g].forEach(function (t) {
        h += '<div class="glo-term" data-text="' + (t.term + ' ' + t.def).toLowerCase().replace(/"/g, '') +
          '"><span class="t">' + t.term + '</span><span class="d">' + t.def + '</span></div>';
      });
      h += '</div></div>';
    });
    h += '</div>';
    view.innerHTML = h;
    renderMath(view);

    var search = document.getElementById('glo-search');
    search.oninput = function () {
      var q = search.value.toLowerCase().trim();
      view.querySelectorAll('.glo-term').forEach(function (row) {
        row.style.display = (!q || row.getAttribute('data-text').indexOf(q) !== -1) ? '' : 'none';
      });
    };
  }

  function emptyHTML(title, msg) {
    return '<div class="empty"><div class="em-ico">◔</div><p><b>' + title + '</b><br>' + msg + '</p></div>';
  }

  // ---- router --------------------------------------------------------------
  function route() {
    var hash = (location.hash || '').replace(/^#\/?/, '');
    var active = 'overview';
    if (hash.indexOf('unit/') === 0) {
      var rest = hash.slice('unit/'.length).split('/');
      var id = rest[0], seg = rest[1] || 'notes';
      active = 'unit/' + id;
      viewUnit(id, seg);
    } else if (hash === 'glossary' && glossary.length) {
      active = 'glossary'; viewGlossary();
    } else {
      viewOverview();
    }
    buildNav(active);
    window.scrollTo(0, 0);
  }

  document.title = (meta.code ? meta.code + ' — ' : '') + (meta.title || 'LBC Learning');
  window.addEventListener('hashchange', route);
  buildNav('overview');
  renderProgress();
  route();

  // KaTeX auto-render is loaded with `defer`, so on a fresh page load it is not
  // ready when the first view renders. Re-render math once it has arrived.
  if (!window.renderMathInElement) {
    document.addEventListener('DOMContentLoaded', function () { renderMath(view); });
    window.addEventListener('load', function () { renderMath(view); });
  }
})();
