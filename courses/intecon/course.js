/* ============================================================================
   EKINTER — Ekonomi Internasional (International Economics, ECEU603200)
   UAS scope only: meetings 8–14 (trade policy + international finance).
   Bilingual (EN + ID). Each meeting lives in weeks/mN.js and registers itself
   on window.EKINTER_WEEKS; this file assembles them in order.
   Any text leaf may be a plain string (shared) or { en, id }.
   ============================================================================ */
(function () {
  var W = window.EKINTER_WEEKS || {};
  var order = ['m8', 'm9', 'm10', 'm11', 'm12', 'm13', 'm14'];

  window.COURSE = {
    meta: {
      slug: 'intecon',
      code: 'EKINTER',
      title: 'Ekonomi Internasional',
      term: { en: 'UI · FEB · UAS prep', id: 'UI · FEB · persiapan UAS' },
      accent: '#d98a16',
      accentSoft: '#fdf3e3'
    },

    overview: {
      blurb: {
        en: 'The UAS half of International Economics (meetings 8–14): trade policy — ' +
            'import tariffs, export subsidies, quotas/VERs and non-tariff measures — and ' +
            'international finance: the balance of payments, exchange-rate determination ' +
            '(UIP, CIP, PPP), the money market, the real-exchange-rate approach, the policy ' +
            'trilemma, the J-curve and global imbalances. Organised around the KOM/FT models ' +
            'and how they are graded on the UAS.',
        id: 'Paruh UAS Ekonomi Internasional (pertemuan 8–14): kebijakan perdagangan — ' +
            'tarif impor, subsidi ekspor, kuota/VER dan hambatan non-tarif — serta ' +
            'keuangan internasional: neraca pembayaran, penentuan nilai tukar (UIP, CIP, PPP), ' +
            'pasar uang, pendekatan nilai tukar riil, trilema kebijakan, kurva-J dan ' +
            'ketidakseimbangan global. Disusun berdasarkan model KOM/FT dan cara pengujiannya di UAS.'
      },
      objectives: [
        { en: 'Draw the tariff/quota welfare diagram and identify consumer loss, producer gain, revenue and deadweight loss.',
          id: 'Menggambar diagram kesejahteraan tarif/kuota dan mengenali kerugian konsumen, keuntungan produsen, penerimaan, dan kerugian bobot mati.' },
        { en: 'Read the balance of payments and the current/financial-account identities.',
          id: 'Membaca neraca pembayaran serta identitas transaksi berjalan/finansial.' },
        { en: 'Use UIP, CIP and PPP to determine the exchange rate and trace policy shocks.',
          id: 'Memakai UIP, CIP, dan PPP untuk menentukan nilai tukar dan menelusuri guncangan kebijakan.' },
        { en: 'Explain the money-market link to FX, the policy trilemma, the J-curve and overshooting.',
          id: 'Menjelaskan keterkaitan pasar uang dengan valas, trilema kebijakan, kurva-J, dan overshooting.' }
      ]
    },

    units: order.map(function (k) { return W[k]; }).filter(Boolean),

    exams: (function () {
      var E = window.EKINTER_EXAMS || {};
      return ['2023', '2024'].map(function (y) { return E[y]; }).filter(Boolean);
    })(),

    glossary: (window.EKINTER_GLOSSARY || [])
  };
})();
