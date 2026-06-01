/* ============================================================================
   MAKRO — Makroekonomi (open-economy / financial macro, UAS half)
   UAS scope, week by week:
     w8  — Capital flows, policy & the exchange rate
     w9  — Monetary policy & financial markets
     w10 — Labour-market mismatch & the model with financial frictions (FF)
     w11 — Exchange rate & balance-sheet effects
     w12 — Macroprudential policy · MMT · DSGE
     w13 — Climate · crypto · CBDC · welfare
     w14 — Course summary / synthesis
   Each week lives in weeks/<id>.js and registers on window.MAKRO_WEEKS; this
   file assembles them in order, then appends the cheatsheet builder.
   Bilingual (EN + ID). Any text leaf may be a plain string or { en, id }.
   ============================================================================ */
(function () {
  var W = window.MAKRO_WEEKS || {};
  var order = ['w8', 'w9', 'w10', 'w11', 'w12', 'w13', 'w14', 'cheatsheet'];

  window.COURSE = {
    meta: {
      slug: 'makro',
      code: 'MAKRO',
      title: 'Makroekonomi',
      term: { en: 'UI · FEB · UAS 2025/2026', id: 'UI · FEB · UAS 2025/2026' },
      accent: '#6d28d9',
      accentSoft: '#f2ecfb'
    },

    overview: {
      blurb: {
        en: 'The UAS half of intermediate open-economy & financial macroeconomics. We move from the textbook IS–LM–BP world into the machinery central banks and finance ministries actually use: capital-flow surges and the policy trilemma, the monetary-transmission mechanism through financial markets, labour-market mismatch and the New-Keynesian model with financial frictions, exchange-rate balance-sheet effects in emerging markets, macroprudential policy, MMT and DSGE as competing paradigms, and the frontier topics — climate macro, crypto, CBDC and welfare. Built directly from the Week 8–14 lecture decks plus the two UAS review sessions, with every diagram redrawn and every Indonesian case kept.',
        id: 'Paruh UAS makroekonomi menengah terbuka & keuangan. Kita beranjak dari dunia IS–LM–BP buku teks ke perangkat yang benar-benar dipakai bank sentral dan kementerian keuangan: lonjakan arus modal dan trilema kebijakan, mekanisme transmisi moneter lewat pasar keuangan, mismatch pasar kerja dan model New-Keynesian dengan friksi keuangan, efek neraca nilai tukar di negara berkembang, kebijakan makroprudensial, MMT dan DSGE sebagai paradigma yang bersaing, serta topik perbatasan — makro iklim, kripto, CBDC, dan kesejahteraan. Dibangun langsung dari slide kuliah Minggu 8–14 plus dua sesi review UAS, dengan setiap diagram digambar ulang dan setiap kasus Indonesia dipertahankan.'
      },
      objectives: [
        { en: 'Analyse capital-flow surges and sudden stops with the policy trilemma, and explain the monetary, fiscal and FX-intervention responses (Week 8).',
          id: 'Menganalisis lonjakan arus modal dan sudden stop dengan trilema kebijakan, serta menjelaskan respons moneter, fiskal, dan intervensi nilai tukar (Minggu 8).' },
        { en: 'Trace the monetary-transmission mechanism through financial markets — policy rate, yield curve, credit and asset-price channels (Week 9).',
          id: 'Menelusuri mekanisme transmisi moneter lewat pasar keuangan — suku bunga kebijakan, kurva imbal hasil, kanal kredit dan harga aset (Minggu 9).' },
        { en: 'Diagnose labour-market mismatch and solve the New-Keynesian model with financial frictions / a financial accelerator (Week 10).',
          id: 'Mendiagnosis mismatch pasar kerja dan menyelesaikan model New-Keynesian dengan friksi keuangan / akselerator finansial (Minggu 10).' },
        { en: 'Explain contractionary depreciations via exchange-rate balance-sheet effects and currency mismatch in emerging markets (Week 11).',
          id: 'Menjelaskan depresiasi kontraktif lewat efek neraca nilai tukar dan currency mismatch di negara berkembang (Minggu 11).' },
        { en: 'Compare macroprudential policy, MMT and DSGE as frameworks for stabilisation and financial-stability policy (Week 12).',
          id: 'Membandingkan kebijakan makroprudensial, MMT, dan DSGE sebagai kerangka stabilisasi dan stabilitas keuangan (Minggu 12).' },
        { en: 'Evaluate the macroeconomics of climate, crypto, CBDC and welfare, and integrate the whole course for the UAS (Weeks 13–14).',
          id: 'Mengevaluasi makroekonomi iklim, kripto, CBDC, dan kesejahteraan, serta mengintegrasikan seluruh kursus untuk UAS (Minggu 13–14).' }
      ]
    },

    units: order.map(function (k) { return W[k]; }).filter(Boolean),

    exams: (function () {
      var E = window.MAKRO_EXAMS || {};
      return ['review1', 'review2', 'final'].map(function (y) { return E[y]; }).filter(Boolean);
    })(),

    glossary: (window.MAKRO_GLOSSARY || []),

    superSummary: {
      label: { en: 'Super Summary', id: 'Super Summary' },
      title: { en: 'Super Summary — every graph, step by step',
               id: 'Super Summary — semua grafik, langkah demi langkah' },
      blurb: { en: 'The whole course as interactive graphs you can drag — short → medium → long run, Weeks 1–14. Click a scenario or move a slider and the diagram and step-by-step explanation update live.',
               id: 'Seluruh kursus sebagai grafik interaktif yang bisa digeser — jangka pendek → menengah → panjang, Minggu 1–14. Klik skenario atau geser slider, diagram dan penjelasan langkah-demi-langkah ikut berubah.' },
      src: 'model/?embed=1',
      fullHref: 'model/',
      fullLabel: { en: 'Open full-screen ↗', id: 'Buka layar penuh ↗' }
    }
  };
})();
