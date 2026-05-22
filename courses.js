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
    slug: 'pe2',
    code: 'PE2',
    title: 'Pengantar Ekonomi 2',
    subtitle: 'Open economy · AD–AS · monetary & fiscal policy · Phillips curve',
    faculty: 'UI · FEB',
    status: 'ready',
    accent: '#46c9ee',
    meta: [
      { label: 'Weeks', value: '5' },
      { label: 'Bilingual', value: 'EN·ID' }
    ]
  },
  {
    slug: 'intecon',
    code: 'EKINTER',
    title: 'Ekonomi Internasional',
    subtitle: 'Ricardian · Heckscher–Ohlin · trade policy · exchange rates',
    faculty: 'UI · FEB',
    status: 'soon',
    accent: '#f0a830',
    meta: [
      { label: 'Weeks', value: '13' },
      { label: 'Bilingual', value: 'EN·ID' }
    ]
  }
];
