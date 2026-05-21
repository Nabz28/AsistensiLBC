/* ============================================================================
   LBC LEARNING — COURSE TEMPLATE
   ----------------------------------------------------------------------------
   Copy this folder to courses/<your-slug>/, edit the data below, then add a
   matching entry to courses.js so the hub shows a card for it.

   The engine (../../engine/study.js) reads this single `window.COURSE` object
   and renders: Overview (landing) · each Week · Glossary.

   Each WEEK has four sub-segments shown as a tab bar inside the week:
       notes · formulas · graphs · quiz
     - notes / formulas / graphs are arrays of SECTIONS:
           { heading, num, cards: [ { title, html, chartId? } ] }
       (heading is optional — omit it for a flat list of cards.)
     - quiz is an array of QUESTIONS:
           { type, q, context, answer: [ ...steps ], tip }
     Any sub-segment left as [] shows a tidy "coming soon" placeholder.

   HTML is allowed in card `html`, glossary `def`, and quiz fields. Styled
   helper classes:
       <span class="key">term</span>      highlight
       <div class="formula">…</div>        monospace formula block
       <div class="note">…</div>           amber "remember this" callout
       <div class="tip">…</div>            green "exam tip" callout
       <table>…</table>                    auto-styled
   Math: wrap in $…$ (inline) or $$…$$ (block); KaTeX renders it automatically.
   ============================================================================ */
window.COURSE = {

  /* ---- identity ---------------------------------------------------------- */
  meta: {
    slug: 'template',                 // must match the folder name + registry
    code: 'COURSE',                   // short tag shown in the top bar
    title: 'Course Title',
    term: 'UI · FEB',                 // small eyebrow label
    accent: '#2f5fd0',                // course accent colour (any CSS colour)
    accentSoft: '#eef3ff'             // soft tint of the accent (backgrounds)
  },

  /* ---- overview (landing view) ------------------------------------------ */
  overview: {
    blurb: 'One-paragraph description of what this course covers and who it is for.',
    objectives: [
      'First thing a student can do after finishing.',
      'Second learning outcome.'
    ]
    // stats: [ { label:'Weeks', value:'4' } ]   // optional; auto-counts otherwise
  },

  /* ---- weeks (each becomes a nav tab + a page with 4 sub-segments) ------- */
  units: [
    {
      id: 'w1',                        // stable id (used in URLs + progress)
      label: 'Week 1',                 // short label on the card/nav
      title: 'First Topic',
      subtitle: 'One line on what this week covers',

      // ---- NOTES: prose lessons --------------------------------------------
      notes: [
        {
          heading: 'Big picture',
          num: '1',
          cards: [
            {
              title: 'A concept',
              html:
                '<p>Explain the idea in plain language with ' +
                '<span class="key">key terms</span>.</p>' +
                '<div class="note">💡 Something students always forget.</div>' +
                '<div class="tip">📝 How this shows up on the exam.</div>'
            }
          ]
        }
      ],

      // ---- FORMULAS: equation-focused cards --------------------------------
      formulas: [
        {
          cards: [
            {
              title: 'Key formula',
              html: '<div class="formula">$$ \\bar{x} \\pm Z_{\\alpha/2}\\cdot' +
                    '\\frac{\\sigma}{\\sqrt{n}} $$</div>' +
                    '<p>What each symbol means and when to use it.</p>'
            }
          ]
        }
      ],

      // ---- GRAPHS: charts via a per-canvas hook (see `charts` below) -------
      graphs: [
        {
          cards: [
            { title: 'A chart', html: '<p>Describe what the chart shows.</p>', chartId: 'demo' }
          ]
        }
      ],

      // ---- QUIZ: practice questions ----------------------------------------
      quiz: [
        {
          type: 'concept',             // concept | scenario | quant
          q: 'A self-check question?',
          context: 'Optional extra context shown in italics.',
          answer: [ 'Step 1 of the worked answer.', 'Step 2 of the worked answer.' ],
          tip: 'Optional one-line takeaway.'
        }
      ]
    },

    {
      id: 'w2',
      label: 'Week 2',
      title: 'Second Topic (placeholder)',
      subtitle: '',
      notes: [], formulas: [], graphs: [], quiz: []   // empty → "coming soon"
    }
  ],

  /* ---- glossary (searchable, course-level) ------------------------------ */
  glossary: [
    { group: 'Core', term: 'Example term', def: 'Short, exam-ready definition.' }
  ]

  /* ---- optional charts: keyed by the chartId used in a graphs card -------
     (uncomment the Chart.js <script> in index.html to use these)
  , charts: {
      demo: function (canvas) {
        new Chart(canvas, { type: 'line', data: { labels: [], datasets: [] } });
      }
    }
  ------------------------------------------------------------------------- */
};
