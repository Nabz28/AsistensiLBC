/* ============================================================================
   STATLAN — Statistika Lanjutan (DEMO course)
   Seeded with a small slice of real Week-1 content so the hub→course flow is
   demonstrable end-to-end. Remaining units are placeholders to fill later.
   See ../_template/course.js for the full schema + helper classes.
   ============================================================================ */
window.COURSE = {
  meta: {
    slug: 'statlan',
    code: 'STATLAN',
    title: 'Statistika Lanjutan',
    term: 'UI · FEB · UTS prep',
    accent: '#0e8fb8',
    accentSoft: '#e7f6fb'
  },

  overview: {
    blurb: 'Advanced statistics for the UTS: statistical inference, confidence ' +
      'intervals, hypothesis testing, variance inference, chi-square tests, the ' +
      'F-distribution and ANOVA — taught around when to use each tool and how it ' +
      'is graded on the exam.',
    stats: [
      { label: 'Units', value: '4' },
      { label: 'Glossary', value: '8' },
      { label: 'Practice', value: '3' }
    ],
    objectives: [
      'Choose the right test (Z vs t vs χ² vs F) from how a problem is worded.',
      'Build and interpret confidence intervals for means, proportions and variance.',
      'Run the six-step hypothesis test and state conclusions for full marks.',
      'Decompose variance and read an ANOVA table.'
    ]
  },

  units: [
    {
      id: 'w1',
      label: 'Week 1',
      title: 'Inference',
      subtitle: 'Point estimation · confidence intervals · Z & t tests · p-values',
      sections: [
        {
          heading: 'What is inference?',
          num: '1',
          cards: [
            {
              title: 'From sample to population',
              html:
                '<p><span class="key">Inference</span> uses a sample to draw conclusions about ' +
                'a population, because measuring the whole population is usually impossible.</p>' +
                '<div class="note">💡 Tasting one spoon of soup (sample) to judge the whole pot ' +
                '(population). Inference tells you how confident you can be.</div>' +
                '<table><tr><th>Tool</th><th>Purpose</th><th>Output</th></tr>' +
                '<tr><td><b>Confidence interval</b></td><td>Estimate a range for a parameter</td><td>A range (lower, upper)</td></tr>' +
                '<tr><td><b>Hypothesis test</b></td><td>Test a claim about the population</td><td>Reject / fail to reject</td></tr></table>'
            }
          ]
        },
        {
          heading: 'Standard deviation vs standard error',
          num: '2',
          cards: [
            {
              title: 'Do not confuse them',
              html:
                '<p>SD measures the spread of <b>individual values</b>; SE measures the spread of the ' +
                '<b>sample mean</b> across repeated samples.</p>' +
                '<div class="formula">$$ s = \\sqrt{\\tfrac{\\sum (X_i-\\bar X)^2}{n-1}} \\qquad ' +
                'SE(\\bar x) = \\frac{\\sigma}{\\sqrt{n}} $$</div>' +
                '<div class="tip">📝 As $n$ grows, SE shrinks (more precise estimate) but SD stays ' +
                'about the same — the population spread does not change.</div>'
            }
          ]
        },
        {
          heading: 'Confidence intervals',
          num: '3',
          cards: [
            {
              title: 'Z interval (σ known) vs t interval (σ unknown)',
              html:
                '<div class="formula">$$ \\bar x \\pm Z_{\\alpha/2}\\,\\frac{\\sigma}{\\sqrt n} ' +
                '\\qquad\\text{vs}\\qquad \\bar x \\pm t_{\\alpha/2,\\,n-1}\\,\\frac{s}{\\sqrt n} $$</div>' +
                '<p>Use <span class="key">Z</span> when the population $\\sigma$ is known; otherwise ' +
                'replace it with $s$ and use <span class="key">t</span> with $df = n-1$.</p>' +
                '<div class="note">95% confidence: $Z_{\\alpha/2}=1.96$. The t critical value is larger ' +
                'for the same confidence → a wider, more conservative interval.</div>'
            }
          ]
        }
      ]
    },
    { id: 'w2', label: 'Week 2', title: 'Variance Inference', subtitle: 'χ² distribution · variance CI · variance test · F-test', sections: [] },
    { id: 'w3', label: 'Week 3', title: 'Chi-Square Tests', subtitle: 'Goodness-of-fit · independence · contingency tables', sections: [] },
    { id: 'w4', label: 'Week 4', title: 'ANOVA', subtitle: 'SSB · SSW · the F-statistic · the ANOVA table', sections: [] }
  ],

  glossary: [
    { group: 'Estimation', term: 'Point estimator', def: 'A single value estimating a parameter (e.g. $\\bar x$ for $\\mu$).' },
    { group: 'Estimation', term: 'Standard error', def: 'Spread of a sample statistic across repeated samples: $\\sigma/\\sqrt n$.' },
    { group: 'Estimation', term: 'Margin of error', def: 'Critical value × standard error; the “±” width of a confidence interval.' },
    { group: 'Hypothesis testing', term: 'Null hypothesis $H_0$', def: 'The status-quo claim; always contains the equality.' },
    { group: 'Hypothesis testing', term: 'p-value', def: 'P(data this extreme | $H_0$ true). Small p → evidence against $H_0$.' },
    { group: 'Hypothesis testing', term: 'Significance level α', def: 'P(reject a true $H_0$) = Type I error rate, fixed before seeing data.' },
    { group: 'Distributions', term: 't-distribution', def: 'Like the normal but heavier-tailed; used when $\\sigma$ is estimated by $s$.' },
    { group: 'Distributions', term: 'Chi-square', def: 'Sum of squared standard normals; basis for variance inference. Right-skewed.' }
  ],

  quiz: [
    {
      type: 'concept',
      q: 'A problem gives you the population standard deviation and asks for a 95% CI for the mean. Which interval do you use, and what is the critical value?',
      answer: [
        'σ is known → use the <b>Z interval</b>: $\\bar x \\pm Z_{\\alpha/2}\\,\\sigma/\\sqrt n$.',
        'At 95% confidence, $Z_{\\alpha/2} = 1.96$.'
      ],
      tip: 'If σ were unknown you would switch to t with df = n − 1.'
    },
    {
      type: 'quant',
      q: 'n = 25, x̄ = 100, σ = 20. Build the 95% confidence interval.',
      context: 'Population σ is known.',
      answer: [
        '$SE = 20/\\sqrt{25} = 4$.',
        '$ME = 1.96 \\times 4 = 7.84$.',
        '$CI = (100 - 7.84,\\; 100 + 7.84) = (92.16,\\; 107.84)$.'
      ]
    },
    {
      type: 'concept',
      q: 'Why do we say “fail to reject H₀” instead of “accept H₀”?',
      answer: [
        'Not finding enough evidence against $H_0$ is not proof that $H_0$ is true.',
        'Like a court verdict: “not guilty” ≠ “proven innocent”.'
      ]
    }
  ]
};
