/* ============================================================================
   LBC LEARNING — COURSE REGISTRY
   The hub (index.html) renders one card per entry below.
   Add a course:  copy courses/_template/ → courses/<slug>/, fill course.js,
                  then add an entry here with the same slug.
   status: 'ready'  → card links to courses/<slug>/
           'soon'   → card shows "Coming soon" and is not clickable
   ============================================================================ */
window.LBC_COURSES = [
  {
    slug: 'statlan',
    code: 'STATLAN',
    title: 'Statistika Lanjutan',
    subtitle: 'Inference · confidence intervals · χ² · F-test · ANOVA · regression',
    faculty: 'UI · FEB',
    status: 'ready',
    accent: '#46c9ee',
    meta: [
      { label: 'Units', value: '4' },
      { label: 'Glossary', value: '✓' },
      { label: 'Practice', value: '✓' }
    ]
  },
  {
    slug: 'cspd',
    code: 'CSPD',
    title: 'Cross Section & Panel Data',
    subtitle: 'OLS · MLE · logit/probit · ordered & count models · diagnostics',
    faculty: 'UI · FEB',
    status: 'soon',
    accent: '#6f9cf2',
    meta: [{ label: 'Units', value: '9' }]
  },
  {
    slug: 'esp',
    code: 'ESP',
    title: 'Public Sector Economics',
    subtitle: 'Welfare · Pareto efficiency · public goods · externalities · public choice',
    faculty: 'UI · FEB',
    status: 'soon',
    accent: '#f3c574',
    meta: [{ label: 'Units', value: '7' }]
  }
];
