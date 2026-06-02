/* ============================================================================
   CSPD — Cross-Section & Panel Data (UAS / final-exam half)
   Final-exam scope, week by week:
     w8  — Tobit model: censoring & why OLS fails
     w9  — Truncated regression
     w10 — Sample selection & the Heckman model
     w11 — Pooled cross-sections, changes over time & DiD
     w12 — Panel: Pooled OLS, Fixed Effects & First Differencing
     w13 — Random Effects, Hausman & Correlated Random Effects (bonus)
     w14 — Synthesis & exam strategy
   Built in the clean LBC engine. Per-week segments are Notes · Formulas ·
   Read Data · Quiz (Graphs is dropped for CSPD; a course-level "Read Data"
   lab collects every annotated Stata case). Each week registers on
   window.CSPD_WEEKS; this file assembles them in order.
   ============================================================================ */
(function () {
  'use strict';
  var W = window.CSPD_WEEKS || {};
  var order = ['w8', 'w9', 'w10', 'w11', 'w12', 'w13', 'w14'];

  window.COURSE = {
    meta: {
      slug: 'cspd',
      code: 'CSPD',
      title: 'Cross-Section & Panel Data',
      term: 'UI · FEB · UAS 2025/2026',
      accent: '#0e7c66',
      accentSoft: '#e9f6f1'
    },

    /* Per-week tabs: swap the default "Graphs" for a "Read Data" segment. */
    segments: [
      { key: 'notes',    str: 'notes',    kind: 'sections' },
      { key: 'formulas', str: 'formulas', kind: 'sections' },
      { key: 'readdata', str: 'readdata', kind: 'sections' },
      { key: 'quiz',     str: 'quiz',     kind: 'quiz' }
    ],

    overview: {
      blurb: String.raw`The UAS half of Cross-Section & Panel Data — the econometrics of limited, selected,
and longitudinal data. We move from "the outcome is bounded" (Tobit, truncated regression) to "the sample is
selected" (Heckman) to "we follow the same units over time" (pooled cross-sections, fixed effects, first
differencing, random effects and correlated random effects). Built directly from the lecture decks, the
Stata labs, and the official past-exam key — every estimator paired with how to read its output and the exact
sentence to write. No concept skipped; every assumption, mechanism, and trap made explicit so you can ace the
final.`,
      objectives: [
        'Diagnose censoring vs truncation, estimate a Tobit/truncated model, and interpret the three marginal effects (Week 8–9).',
        'Recognise sample selection, explain why OLS is biased and how the inverse Mills ratio fixes it, and run/read a Heckman model (Week 10).',
        'Use pooled cross-sections, time dummies and interactions to measure changes over time, and estimate a Difference-in-Differences (Week 11).',
        'Eliminate time-invariant heterogeneity with Fixed Effects, LSDV and First Differencing, and know when FE = FD (Week 12).',
        'Choose between Pooled OLS, RE, FE and CRE using the Breusch–Pagan, Hausman and Mundlak tests (Week 13).',
        'Read any Stata table and write the exam-correct interpretation, avoiding the classic traps (Weeks 8–14).'
      ]
    },

    units: order.map(function (k) { return W[k]; }).filter(Boolean),

    exams: (function () {
      var E = window.CSPD_EXAMS || {};
      return ['final'].map(function (y) { return E[y]; }).filter(Boolean);
    })(),

    glossary: (window.CSPD_GLOSSARY || []),

    readDataLab: window.CSPD_READLAB || null
  };
})();
