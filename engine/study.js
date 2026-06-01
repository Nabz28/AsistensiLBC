/* ============================================================================
   LBC LEARNING — Study Engine (v3.2, bilingual)
   Renders a self-contained course from a single `window.COURSE` object.
   Vanilla JS, no build step. Default landing view = Overview.

   Bilingual: any text leaf may be a plain string (shared across languages —
   good for formulas / numbers) OR an { en, id } object. A top-right toggle
   switches language; the choice is remembered in localStorage. Chrome strings
   (nav, buttons, segment names) are localised via the built-in STR dictionary.

   Each week (unit) has four sub-segments shown as an in-lesson tab bar:
       Notes · Formulas · Graphs · Quiz   (Catatan · Rumus · Grafik · Kuis)

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
  var exams = COURSE.exams || [];

  // ---- language ------------------------------------------------------------
  var LANG_KEY = 'lbc-lang';
  var LANGS = [{ code: 'en', label: 'EN' }, { code: 'id', label: 'ID' }];
  var lang = (function () {
    try { var s = localStorage.getItem(LANG_KEY); if (s === 'en' || s === 'id') return s; } catch (e) {}
    return 'en';
  })();
  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    syncChrome();
    route();
  }
  // pick the right string from a leaf: plain string (shared) or {en,id}
  function t(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      return v[lang] != null ? v[lang] : (v.en != null ? v.en : (v.id != null ? v.id : ''));
    }
    return v == null ? '' : v;
  }
  // chrome (UI) strings
  var STR = {
    en: { all: '‹ All courses', overview: 'Overview', glossary: 'Glossary', weeks: 'Weeks',
      terms: 'Terms', mark: 'Mark complete', done: '✓ Completed', objectives: 'What you will be able to do',
      notes: 'Notes', formulas: 'Formulas', graphs: 'Graphs', quiz: 'Quiz',
      reveal: 'Reveal answer', hide: 'Hide answer', worked: 'Worked answer', filter: 'Filter terms…',
      back: 'Back to overview', examPrep: 'Exam prep', noWeeks: 'No weeks yet',
      pastExams: 'Past Exams', mcq: 'Multiple choice', essay: 'Essay', no: 'No.',
      examsIntro: 'Past UAS papers, worked 1:1 — open a question, then reveal the answer.',
      empty: function (l) { return l + ' for this week will be added soon.'; },
      emptyT: function (l) { return 'No ' + l.toLowerCase() + ' yet'; } },
    id: { all: '‹ Semua mata kuliah', overview: 'Ringkasan', glossary: 'Glosarium', weeks: 'Minggu',
      terms: 'Istilah', mark: 'Tandai selesai', done: '✓ Selesai', objectives: 'Yang akan kamu kuasai',
      notes: 'Catatan', formulas: 'Rumus', graphs: 'Grafik', quiz: 'Kuis',
      reveal: 'Lihat jawaban', hide: 'Sembunyikan jawaban', worked: 'Pembahasan', filter: 'Cari istilah…',
      back: 'Kembali ke ringkasan', examPrep: 'Persiapan ujian', noWeeks: 'Belum ada minggu',
      pastExams: 'Soal UAS', mcq: 'Pilihan ganda', essay: 'Esai', no: 'No.',
      examsIntro: 'Soal UAS tahun-tahun lalu, dibahas 1:1 — buka soal, lalu tampilkan jawabannya.',
      empty: function (l) { return l + ' untuk minggu ini akan segera ditambahkan.'; },
      emptyT: function (l) { return 'Belum ada ' + l.toLowerCase(); } }
  };
  function S(k) { var d = STR[lang] || STR.en; return d[k] != null ? d[k] : STR.en[k]; }

  var SEGMENTS = [
    { key: 'notes',    str: 'notes',    kind: 'sections' },
    { key: 'formulas', str: 'formulas', kind: 'sections' },
    { key: 'graphs',   str: 'graphs',   kind: 'sections' },
    { key: 'quiz',     str: 'quiz',     kind: 'quiz' }
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
  function hasContent(u, segKey) { var v = u[segKey]; return !!(v && v.length); }
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
  document.documentElement.lang = lang;

  var bar = el('div', 'sbar');
  root.appendChild(bar);
  var nav = el('div', 'snav');
  root.appendChild(nav);
  var view = el('div'); view.id = 'view';
  root.appendChild(view);

  function syncChrome() {
    bar.innerHTML =
      '<a class="sbar-home" href="../../index.html">' + S('all') + '</a>' +
      '<div class="sbar-id">' +
        '<span class="sbar-code">' + (meta.code || 'COURSE') + '</span>' +
        '<span class="sbar-title">' + t(meta.title) + '</span>' +
      '</div>' +
      '<div class="sbar-spacer"></div>' +
      '<div class="sbar-prog"><span id="prog-label"></span>' +
        '<span class="track"><span class="fill" id="prog-fill"></span></span></div>' +
      '<div class="langtog" role="group" aria-label="Language">' +
        LANGS.map(function (L) {
          return '<button class="langbtn' + (L.code === lang ? ' active' : '') +
            '" data-lang="' + L.code + '">' + L.label + '</button>';
        }).join('') +
      '</div>';
    bar.querySelectorAll('.langbtn').forEach(function (b) {
      b.onclick = function () { setLang(b.getAttribute('data-lang')); };
    });
    renderProgress();
  }

  function buildNav(active) {
    var items = [{ key: 'overview', label: S('overview') }];
    units.forEach(function (u) {
      items.push({ key: 'unit/' + u.id, label: t(u.label) || t(u.title), doneId: u.id });
    });
    if (exams.length) items.push({ key: 'exams', label: S('pastExams') });
    if (glossary.length) items.push({ key: 'glossary', label: S('glossary') });
    if (COURSE.superSummary) items.push({ key: 'super', label: t(COURSE.superSummary.label) || 'Super Summary' });

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
          t(sec.heading) + '</div>';
      }
      (sec.cards || []).forEach(function (c) {
        h += '<div class="card"' + (c.chartId ? ' data-chart="' + c.chartId + '"' : '') + '>' +
          (c.title ? '<h4>' + t(c.title) + '</h4>' : '') +
          t(c.html) +
          (c.chart && window.EconChart ? window.EconChart(c.chart) : '') +
          (c.htmlAfter ? t(c.htmlAfter) : '') +
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
        '<div class="qz-text">' + t(q.q) + '</div>' +
        (q.context ? '<div class="qz-context">' + t(q.context) + '</div>' : '') +
      '</div>' +
      '<button class="qz-reveal" data-i="' + i + '">' + S('reveal') + '</button>' +
      '<div class="qz-answer" id="qa-' + i + '"><h5>' + S('worked') + '</h5>';
      (q.answer || []).forEach(function (step) { h += '<div class="qz-step">' + t(step) + '</div>'; });
      if (q.tip) h += '<div class="qz-tip">' + t(q.tip) + '</div>';
      h += '</div></div>';
    });
    return h;
  }

  function wireQuiz() {
    view.querySelectorAll('.qz-reveal').forEach(function (b) {
      b.onclick = function () {
        var ans = document.getElementById('qa-' + b.getAttribute('data-i'));
        var open = ans.classList.toggle('open');
        b.textContent = open ? S('hide') : S('reveal');
      };
    });
  }

  function wireCharts() {
    if (!COURSE.charts) return;
    view.querySelectorAll('[data-chart]').forEach(function (cardEl) {
      var key = cardEl.getAttribute('data-chart');
      var canvas = document.getElementById('chart-' + key);
      if (canvas && typeof COURSE.charts[key] === 'function') {
        try { COURSE.charts[key](canvas, lang); } catch (e) {}
      }
    });
  }

  // ---- views ---------------------------------------------------------------
  function viewOverview() {
    var ov = COURSE.overview || {};
    var h = '<div class="ov-hero">' +
      '<div class="eyebrow">' + (meta.term ? t(meta.term) : S('examPrep')) + '</div>' +
      '<h1 class="ov-title">' + t(meta.title) + '</h1>' +
      (t(ov.blurb) ? '<p class="ov-sub">' + t(ov.blurb) + '</p>' : '');
    var stats = ov.stats || defaultStats();
    if (stats.length) {
      h += '<div class="ov-stats">';
      stats.forEach(function (s) {
        h += '<div class="ov-stat"><b>' + t(s.value) + '</b><span>' + t(s.label) + '</span></div>';
      });
      h += '</div>';
    }
    h += '</div>';

    // optional call-to-action banner (e.g. link to an interactive model)
    if (ov.cta && ov.cta.href) {
      h += '<a class="ov-cta" href="' + ov.cta.href + '"' +
        (ov.cta.newTab ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<span class="ov-cta-ico">' + (ov.cta.icon || '◆') + '</span>' +
        '<span class="ov-cta-txt"><b>' + t(ov.cta.title) + '</b>' +
        (t(ov.cta.desc) ? '<span>' + t(ov.cta.desc) + '</span>' : '') + '</span>' +
        '<span class="ov-cta-arrow">→</span></a>';
    }

    if (ov.objectives && ov.objectives.length) {
      h += '<div class="ov-objectives"><h3>' + S('objectives') + '</h3><ul>';
      ov.objectives.forEach(function (o) { h += '<li>' + t(o) + '</li>'; });
      h += '</ul></div>';
    }

    h += '<div class="sec-label">' + S('weeks') + '</div>';
    if (units.length) {
      h += '<div class="unit-grid">';
      units.forEach(function (u, i) {
        h += '<a class="unit-card' + (isDone(u.id) ? ' done' : '') + '" href="#/unit/' + u.id + '">' +
          '<div class="uc-top"><span class="uc-num">' +
            (t(u.label) || ('Week ' + (i + 1))) + '</span>' +
            '<span class="uc-check">✓</span></div>' +
          '<div class="uc-title">' + t(u.title) + '</div>' +
          (t(u.subtitle) ? '<div class="uc-sub">' + t(u.subtitle) + '</div>' : '') +
        '</a>';
      });
      h += '</div>';
    } else {
      h += emptyHTML(S('noWeeks'), '');
    }
    view.innerHTML = h;
    renderMath(view);
  }

  function defaultStats() {
    var s = [{ label: S('weeks'), value: units.length }];
    if (glossary.length) s.push({ label: S('terms'), value: glossary.length });
    return s;
  }

  function viewUnit(id, seg) {
    var u = unitById(id);
    if (!u) { viewOverview(); return; }
    var idx = units.indexOf(u);
    var prev = units[idx - 1], next = units[idx + 1];
    var def = segDef(seg);

    var h = '<div class="lesson-head">' +
      '<div class="eyebrow">' + (t(u.label) || ('Week ' + (idx + 1))) + '</div>' +
      '<h1 class="lesson-title">' + t(u.title) + '</h1>' +
      (t(u.subtitle) ? '<div class="lesson-sub">' + t(u.subtitle) + '</div>' : '') +
    '</div>';

    h += '<div class="lesson-toolbar">' +
      '<button class="btn ' + (isDone(u.id) ? 'done' : 'primary') + '" id="mark-done">' +
        (isDone(u.id) ? S('done') : S('mark')) + '</button>' +
    '</div>';

    h += '<div class="subtabs">';
    SEGMENTS.forEach(function (s) {
      h += '<button class="subtab' + (s.key === def.key ? ' active' : '') +
        (hasContent(u, s.key) ? ' filled' : '') + '" data-seg="' + s.key + '">' +
        S(s.str) + '</button>';
    });
    h += '</div>';

    h += '<div class="seg-body">';
    if (def.kind === 'quiz') {
      h += hasContent(u, 'quiz') ? quizHTML(u.quiz) : emptyHTML(S('emptyT')(S('quiz')), S('empty')(S('quiz')));
    } else {
      h += hasContent(u, def.key)
        ? sectionsHTML(u[def.key])
        : emptyHTML(S('emptyT')(S(def.str)), S('empty')(S(def.str)));
    }
    h += '</div>';

    h += '<div class="lesson-foot">' +
      (prev ? '<a class="btn" href="#/unit/' + prev.id + '">‹ ' + (t(prev.label) || S('overview')) + '</a>' : '<span></span>') +
      (next ? '<a class="btn primary" href="#/unit/' + next.id + '">' + (t(next.label) || '') + ' ›</a>'
            : '<a class="btn" href="#/overview">' + S('back') + '</a>') +
    '</div>';

    view.innerHTML = h;
    renderMath(view);
    wireQuiz();
    wireCharts();

    var mark = document.getElementById('mark-done');
    if (mark) mark.onclick = function () {
      setDone(u.id, !isDone(u.id));
      mark.className = 'btn ' + (isDone(u.id) ? 'done' : 'primary');
      mark.textContent = isDone(u.id) ? S('done') : S('mark');
      buildNav('unit/' + u.id);
    };

    view.querySelectorAll('.subtab').forEach(function (b) {
      b.onclick = function () { location.hash = '#/unit/' + u.id + '/' + b.getAttribute('data-seg'); };
    });
  }

  function chartHTML(spec) { return spec && window.EconChart ? window.EconChart(spec) : ''; }

  function examQuestionHTML(q) {
    var h = '<div class="exam-qbody">';
    h += '<div class="exam-qtext">' + t(q.q) + '</div>';
    if (q.options) {
      var opts = q.options[lang] || q.options.en || [];
      if (opts.length) { h += '<ul class="exam-opts">'; opts.forEach(function (o) { h += '<li>' + o + '</li>'; }); h += '</ul>'; }
    }
    h += chartHTML(q.qChart);
    h += '<button class="exam-reveal qz-reveal">' + S('reveal') + '</button>';
    h += '<div class="exam-answer qz-answer"><h5>' + S('worked') + '</h5>';
    if (q.answer) h += '<div class="exam-ans">' + t(q.answer) + '</div>';
    if (q.working) h += t(q.working);
    h += chartHTML(q.aChart);
    h += '</div></div>';
    return h;
  }

  function viewExams() {
    var h = '<div class="eyebrow">' + S('pastExams') + '</div><h1 class="ov-title">' + S('pastExams') + '</h1>' +
      '<p class="ov-sub">' + S('examsIntro') + '</p>';
    exams.forEach(function (ex) {
      h += '<details class="exam-year"><summary>' + (t(ex.label) || ('UAS ' + ex.year)) + '</summary><div class="exam-year-body">';
      if (ex.note) h += '<div class="note">' + t(ex.note) + '</div>';
      (ex.sections || []).forEach(function (sec) {
        var secLabel = t(sec.label) || (sec.kind === 'mcq' ? S('mcq') : S('essay'));
        var qs = sec.questions || [];
        h += '<details class="exam-sec"><summary>' + secLabel + '<span class="exam-count">' + qs.length + '</span></summary><div class="exam-sec-body">';
        qs.forEach(function (q) {
          var stem = t(q.q).replace(/<[^>]+>/g, '').replace(/\$[^$]*\$/g, '').trim().slice(0, 64);
          h += '<details class="exam-q"><summary><b>' + S('no') + ' ' + q.n + '</b> <span class="exam-stem">' + stem + '…</span></summary>' +
            examQuestionHTML(q) + '</details>';
        });
        h += '</div></details>';
      });
      h += '</div></details>';
    });
    view.innerHTML = h;
    renderMath(view);
    view.querySelectorAll('.exam-reveal').forEach(function (b) {
      b.onclick = function () {
        var a = b.nextElementSibling;
        var open = a.classList.toggle('open');
        b.textContent = open ? S('hide') : S('reveal');
      };
    });
  }

  function viewGlossary() {
    var groups = {};
    glossary.forEach(function (term) {
      var g = t(term.group) || 'General';
      (groups[g] = groups[g] || []).push(term);
    });
    var h = '<div class="eyebrow">' + S('glossary') + '</div><h1 class="ov-title">' + S('glossary') + '</h1>' +
      '<input class="glo-search" id="glo-search" placeholder="' + S('filter') + '" autocomplete="off">' +
      '<div id="glo-groups">';
    Object.keys(groups).forEach(function (g) {
      h += '<div class="glo-group"><div class="glo-group-head">' + g +
        '<span class="count">' + groups[g].length + '</span></div><div class="glo-list">';
      groups[g].forEach(function (term) {
        var txt = (t(term.term) + ' ' + t(term.def)).toLowerCase().replace(/"/g, '');
        h += '<div class="glo-term" data-text="' + txt + '">' +
          '<span class="t">' + t(term.term) + '</span><span class="d">' + t(term.def) + '</span></div>';
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
    return '<div class="empty"><div class="em-ico">◔</div><p><b>' + title + '</b>' +
      (msg ? '<br>' + msg : '') + '</p></div>';
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
    } else if (hash.indexOf('exams') === 0 && exams.length) {
      active = 'exams'; viewExams();
    } else if (hash === 'glossary' && glossary.length) {
      active = 'glossary'; viewGlossary();
    } else if (hash === 'super' && COURSE.superSummary) {
      active = 'super'; viewSuper();
    } else {
      viewOverview();
    }
    buildNav(active);
    window.scrollTo(0, 0);
  }

  function viewSuper() {
    var ss = COURSE.superSummary || {};
    var h = '<div class="eyebrow">' + (t(ss.label) || 'Super Summary') + '</div>' +
      '<h1 class="ov-title">' + (t(ss.title) || t(ss.label) || 'Super Summary') + '</h1>' +
      (t(ss.blurb) ? '<p class="ov-sub">' + t(ss.blurb) + '</p>' : '') +
      '<div class="super-frame"><iframe src="' + ss.src + '" title="' + (t(ss.label) || 'Super Summary') +
      '" loading="lazy" allowfullscreen></iframe></div>' +
      (ss.fullHref ? '<a class="super-open" href="' + ss.fullHref + '" target="_blank" rel="noopener">' +
        (t(ss.fullLabel) || 'Open full-screen ↗') + '</a>' : '');
    view.innerHTML = h;
  }

  document.title = (meta.code ? meta.code + ' — ' : '') + t(meta.title);
  window.addEventListener('hashchange', route);
  syncChrome();
  buildNav('overview');
  route();

  // KaTeX auto-render is loaded with `defer`, so on a fresh page load it is not
  // ready when the first view renders. Re-render math once it has arrived.
  if (!window.renderMathInElement) {
    document.addEventListener('DOMContentLoaded', function () { renderMath(view); });
    window.addEventListener('load', function () { renderMath(view); });
  }
})();
