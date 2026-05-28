/* ============================================================================
   ESDMK — Ekonomi Sumber Daya Manusia & Ketenagakerjaan
   UAS scope: Topic 1 (Schooling), Topic 2 (CWD), Topic 3 (Discrimination),
   Topic 4 (Migration). Each topic lives in its own week file under weeks/mN.js
   and registers itself on window.ESDMK_WEEKS; this file assembles them in
   logical order — m10 (schooling/Topic 1), m11 (CWD/Topic 2), m9 (discrim/
   Topic 3), m12 (demo-transition, background), m14 (migration/Topic 4) —
   followed by the cheatsheet builder unit.
   Bilingual (EN + ID). Any text leaf may be plain string or { en, id }.
   ============================================================================ */
(function () {
  var W = window.ESDMK_WEEKS || {};
  var order = ['m10', 'm11', 'm9', 'm12', 'm14', 'cheatsheet'];

  window.COURSE = {
    meta: {
      slug: 'esdmk',
      code: 'ESDMK',
      title: 'Ekonomi Sumber Daya Manusia & Ketenagakerjaan',
      term: { en: 'UI · FEB · IUP · UAS 2025/2026', id: 'UI · FEB · KKI · UAS 2025/2026' },
      accent: '#1f6fb8',
      accentSoft: '#e6f0f9'
    },

    overview: {
      blurb: {
        en: 'Human Resources & Labor Economics, the UAS half: human-capital investment (Mincer + NPV), compensating wage differentials for gig drivers, taste-based and statistical discrimination behind Indonesia\'s 50% informal-sector gender gap, and migration as a present-value decision under abuse risk. Built around the four PPTs (Wisana Week 10, "Session 9", Pardede Week 12, Pardede Week 14), the lecturer\'s "how to answer an analytical essay" recipe, and a cheatsheet builder for the open-note A4 you may bring.',
        id: 'Ekonomi Sumber Daya Manusia & Ketenagakerjaan, paruh UAS: investasi modal manusia (Mincer + NPV), kesenjangan upah kompensatif pengemudi gig, diskriminasi berbasis selera dan statistik di balik kesenjangan gender 50% sektor informal Indonesia, dan migrasi sebagai keputusan nilai sekarang di bawah risiko abuse. Dibangun berdasarkan empat PPT (Wisana Minggu 10, "Sesi 9", Pardede Minggu 12, Pardede Minggu 14), resep "how to answer an analytical essay" dosen, dan pembangun cheatsheet untuk A4 open-note yang boleh Anda bawa.'
      },
      objectives: [
        { en: 'Frame the schooling decision as an NPV / IRR problem; draw the MRR–MCC graph and explain how higher r or higher opportunity cost shifts s* (UAS Topic 1).',
          id: 'Bingkai keputusan sekolah sebagai persoalan NPV / IRR; gambar grafik MRR–MCC dan jelaskan bagaimana r atau opportunity cost lebih tinggi menggeser s* (UAS Topik 1).' },
        { en: 'Use the CWD / hedonic framework to explain why equal nominal wages are not equal total compensation; apply to gig drivers and worker-reclassification policy (UAS Topic 2).',
          id: 'Pakai kerangka CWD / hedonik untuk menjelaskan mengapa upah nominal sama bukan kompensasi total sama; terapkan ke pengemudi gig dan kebijakan reklasifikasi (UAS Topik 2).' },
        { en: 'Apply Becker employer discrimination and statistical discrimination to evaluate Indonesia\'s 50% informal gender wage gap and segregation patterns (UAS Topic 3).',
          id: 'Terapkan diskriminasi pengusaha Becker dan diskriminasi statistik untuk mengevaluasi kesenjangan upah gender informal 50% Indonesia dan pola segregasi (UAS Topik 3).' },
        { en: 'Combine Lewis macro and Sjaastad PV (with abuse as psychic cost) to explain continued PMI flows; analyse heterogeneity by age, gender, education, marital status (UAS Topic 4).',
          id: 'Gabungkan makro Lewis dan PV Sjaastad (abuse sebagai biaya psikis) untuk menjelaskan arus PMI berlanjut; analisis heterogenitas usia, gender, pendidikan, status nikah (UAS Topik 4).' }
      ]
    },

    units: order.map(function (k) { return W[k]; }).filter(Boolean),

    exams: (function () {
      var E = window.ESDMK_EXAMS || {};
      return ['2026'].map(function (y) { return E[y]; }).filter(Boolean);
    })(),

    glossary: (window.ESDMK_GLOSSARY || [])
  };
})();
