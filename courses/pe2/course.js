/* ============================================================================
   PE2 — Pengantar Ekonomi 2  (macro half: weeks 7–11)
   Bilingual (EN + ID). Each week lives in its own file under weeks/ and
   registers itself on window.PE2_WEEKS; this file assembles them in order.
   Any text leaf may be a plain string (shared) or { en, id }.
   ============================================================================ */
(function () {
  var W = window.PE2_WEEKS || {};
  var order = ['w7', 'w8', 'w9', 'w10', 'w11'];

  window.COURSE = {
    meta: {
      slug: 'pe2',
      code: 'PE2',
      title: 'Pengantar Ekonomi 2',
      term: { en: 'UI · FEB · UAS prep', id: 'UI · FEB · persiapan UAS' },
      accent: '#0e8fb8',
      accentSoft: '#e7f6fb'
    },

    overview: {
      blurb: {
        en: 'The macro half of PE2 (weeks 7–11): open-economy macroeconomics, the ' +
            'aggregate demand–aggregate supply model, how monetary and fiscal policy ' +
            'shift aggregate demand, and the short-run trade-off between inflation and ' +
            'unemployment. Built around when to use each model and how it is graded on the UAS.',
        id: 'Paruh makro PE2 (minggu 7–11): makroekonomi perekonomian terbuka, model ' +
            'permintaan agregat–penawaran agregat, bagaimana kebijakan moneter dan fiskal ' +
            'menggeser permintaan agregat, serta trade-off jangka pendek antara inflasi dan ' +
            'pengangguran. Disusun berdasarkan kapan memakai tiap model dan bagaimana ia diuji di UAS.'
      },
      objectives: [
        { en: 'Read the open-economy identities (NX, NCO, S = I + NCO) and what shifts them.',
          id: 'Membaca identitas perekonomian terbuka (NX, NCO, S = I + NCO) dan apa yang menggesernya.' },
        { en: 'Use the AD–AS model to explain output, the price level, and short-run fluctuations.',
          id: 'Memakai model AD–AS untuk menjelaskan output, tingkat harga, dan fluktuasi jangka pendek.' },
        { en: 'Trace how monetary and fiscal policy shift aggregate demand.',
          id: 'Menelusuri bagaimana kebijakan moneter dan fiskal menggeser permintaan agregat.' },
        { en: 'Explain the short-run Phillips curve and why there is no long-run trade-off.',
          id: 'Menjelaskan kurva Phillips jangka pendek dan mengapa tidak ada trade-off jangka panjang.' }
      ]
    },

    units: order.map(function (k) { return W[k]; }).filter(Boolean),

    exams: (function () {
      var E = window.PE2_EXAMS || {};
      return ['2019', '2022', '2023', '2024', '2025'].map(function (y) { return E[y]; }).filter(Boolean);
    })(),

    glossary: (window.PE2_GLOSSARY || [])
  };
})();
