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
    subtitle: 'Trade policy · balance of payments · exchange rates · UIP/CIP/PPP',
    faculty: 'UI · FEB',
    status: 'ready',
    accent: '#f0a830',
    meta: [
      { label: 'Weeks', value: '7' },
      { label: 'Bilingual', value: 'EN·ID' }
    ]
  },
  {
    slug: 'esdmk',
    code: 'ESDMK',
    title: 'Ekonomi Sumber Daya Manusia & Ketenagakerjaan',
    subtitle: 'Human capital · compensating wages · discrimination · migration',
    faculty: 'UI · FEB',
    status: 'ready',
    accent: '#1f6fb8',
    meta: [
      { label: 'Topics', value: '4' },
      { label: 'Bilingual', value: 'EN·ID' }
    ]
  },
  {
    slug: 'makro',
    code: 'MAKRO',
    title: 'Makroekonomi',
    subtitle: 'Open economy · capital flows · monetary transmission · financial frictions · macroprudential · MMT/DSGE · climate/crypto/CBDC',
    faculty: 'UI · FEB',
    status: 'ready',
    accent: '#6d28d9',
    meta: [
      { label: 'Weeks', value: '7' },
      { label: 'Bilingual', value: 'EN·ID' }
    ]
  }
];
