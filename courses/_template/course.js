/* ============================================================================
   LBC LEARNING — COURSE TEMPLATE
   ----------------------------------------------------------------------------
   Copy this folder to learning/courses/<your-slug>/, edit the data below, then
   add a matching entry to learning/courses.js so the hub shows a card for it.

   The engine (../../engine/study.js) reads this single `window.COURSE` object
   and renders four views: Overview (landing) · each Unit · Glossary · Practice.
   You only fill data — no rendering code lives here.

   HTML is allowed inside card `html`, glossary `def`, and quiz fields. Handy
   classes the stylesheet already styles:
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
    term: 'UTS / UAS · Year',         // small eyebrow label
    accent: '#2f5fd0',                // course accent colour (any CSS colour)
    accentSoft: '#eef3ff'             // soft tint of the accent (backgrounds)
  },

  /* ---- overview (landing view) ------------------------------------------ */
  overview: {
    blurb: 'One-paragraph description of what this course covers and who it is for.',
    stats: [                           // optional; omit to auto-generate counts
      { label: 'Units', value: '0' },
      { label: 'Weeks', value: '0' }
    ],
    objectives: [
      'First thing a student can do after finishing.',
      'Second learning outcome.',
      'Third learning outcome.'
    ]
  },

  /* ---- units (each becomes a nav tab + a lesson page) -------------------- */
  units: [
    {
      id: 'unit1',                     // stable id (used in URLs + progress)
      label: 'Unit 1',                 // short label on the card/nav
      title: 'First Topic',
      subtitle: 'One line on what this unit covers',
      sections: [
        {
          heading: 'Big picture',
          num: '1',
          cards: [
            {
              title: 'A concept',
              html:
                '<p>Explain the idea in plain language. Use ' +
                '<span class="key">key terms</span> for emphasis.</p>' +
                '<div class="formula">$$ \\bar{x} \\pm Z_{\\alpha/2}\\cdot\\frac{\\sigma}{\\sqrt{n}} $$</div>' +
                '<div class="note">💡 Something students always forget.</div>' +
                '<div class="tip">📝 How this shows up on the exam.</div>'
            }
          ]
        }
      ]
      // To draw a chart in a card, set card.chartId:'foo' and add
      //   charts: { foo: function (canvas) { new Chart(canvas, {...}); } }
      // below (and uncomment the Chart.js <script> in index.html).
    },

    {
      id: 'unit2',
      label: 'Unit 2',
      title: 'Second Topic (placeholder)',
      subtitle: 'Coming soon',
      sections: []                     // empty unit → shows a friendly placeholder
    }
  ],

  /* ---- glossary (searchable) -------------------------------------------- */
  glossary: [
    { group: 'Core', term: 'Example term', def: 'Short, exam-ready definition.' }
  ],

  /* ---- practice questions ------------------------------------------------ */
  quiz: [
    {
      type: 'concept',                 // concept | scenario | quant
      q: 'A self-check question?',
      context: 'Optional extra context shown in italics.',
      answer: [
        'Step 1 of the worked answer.',
        'Step 2 of the worked answer.'
      ],
      tip: 'Optional one-line takeaway.'
    }
  ]

  /* ---- optional charts ---------------------------------------------------
  , charts: {
      foo: function (canvas) {
        new Chart(canvas, { type:'line', data:{ labels:[], datasets:[] } });
      }
    }
  ------------------------------------------------------------------------- */
};
