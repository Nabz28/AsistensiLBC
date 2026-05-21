/* ============================================================================
   PE2 — Pengantar Ekonomi 2
   Intentionally EMPTY scaffold — material to be added later.
   Each week carries four sub-segments: notes · formulas · graphs · quiz.
     - notes / formulas / graphs : arrays of sections → cards
         section = { heading, num, cards: [ { title, html, chartId? } ] }
     - quiz : array of { type, q, context, answer:[...], tip }
   See ../_template/course.js for the full schema + helper classes.
   ============================================================================ */
window.COURSE = {
  meta: {
    slug: 'pe2',
    code: 'PE2',
    title: 'Pengantar Ekonomi 2',
    term: 'UI · FEB',
    accent: '#0e8fb8',
    accentSoft: '#e7f6fb'
  },

  overview: {
    blurb: '',          // add a course description later
    objectives: []      // add learning outcomes later
  },

  units: [
    { id: 'w1', label: 'Week 1', title: 'Week 1', subtitle: '', notes: [], formulas: [], graphs: [], quiz: [] },
    { id: 'w2', label: 'Week 2', title: 'Week 2', subtitle: '', notes: [], formulas: [], graphs: [], quiz: [] },
    { id: 'w3', label: 'Week 3', title: 'Week 3', subtitle: '', notes: [], formulas: [], graphs: [], quiz: [] },
    { id: 'w4', label: 'Week 4', title: 'Week 4', subtitle: '', notes: [], formulas: [], graphs: [], quiz: [] }
  ],

  glossary: []
};
