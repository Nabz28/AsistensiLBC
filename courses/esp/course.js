/* ============================================================================
   ESP — Ekonomi Sektor Publik / Public Sector Economics (UAS / endterm half)
   UI · FEB. Built from the Suahasil Nazara / Riatu Qibthiyyah lecture decks
   (Kuliah 8 APBN, 9 Pendapatan Negara, 10 Belanja Negara), Dean Bambang
   Brodjonegoro's fiscal-decentralization lecture, the endterm lecture notes,
   and Rosen & Gayer / Gruber chapters on health insurance and social security.

   Units (each = a nav tab with Notes · Formulas · Graphs · Quiz):
     u1 — Fiscal policy & the State Budget (APBN)
     u2 — State revenue & the economics of taxation
     u3 — State expenditure (Belanja Negara) & budget health
     u4 — The health-care market & insurance
     u5 — Social security & public pensions
     u6 — Fiscal decentralization & intergovernmental grants

   Graphs are rendered by FigLab (engine/figlab.js): each diagram is computed
   from its equations and is interactive — drag a slider and the equilibrium,
   tangency or kink moves to the exact solved point. The standalone Graph Lab
   (model/) collects every figure; it is also embedded as the Super Summary.
   ============================================================================ */
(function () {
  'use strict';
  var W = window.ESP_WEEKS || {};
  var order = ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'];

  // Mount a FigLab interactive figure wherever a graph card declares a chartId
  // equal to the figure id. The engine injects <canvas id="chart-<id>"> inside a
  // .chart-wrap; we replace that wrapper with the live widget (no engine change).
  var FIG_IDS = ['tax-dwl', 'laffer', 'ptax-land', 'ptax-struct', 'moral-hazard',
    'risk-utility', 'ss-pia', 'intertemporal', 'ss-crowdout', 'grant-open',
    'grant-closed', 'grant-cond', 'grant-uncond', 'debt-dynamics',
    'welfare-bc', 'inkind-cash'];
  var charts = {};
  FIG_IDS.forEach(function (id) {
    charts[id] = function (canvas) {
      var host = canvas && canvas.parentElement;
      if (host && window.FigLab) { host.classList.remove('chart-wrap'); window.FigLab.mount(host, id, {}); }
    };
  });

  window.COURSE = {
    meta: {
      slug: 'esp',
      code: 'ESP',
      title: { en: 'Public Sector Economics', id: 'Ekonomi Sektor Publik' },
      term: 'UI · FEB · UAS 2025/2026',
      accent: '#b3541e',
      accentSoft: '#fbeee4'
    },

    overview: {
      blurb: {
        en: 'The endterm half of Public Sector Economics — how the state raises money, spends it, and shares power with the regions, with the microeconomics of why markets fail in insurance, health and pensions. We move from the State Budget (APBN) and fiscal rules, to the economics of taxation (PPh, PPN, excise, tax expenditure), to state expenditure and budget-health diagnostics, then to the market failures that justify public health insurance and social security, and finally to fiscal decentralization and the design of intergovernmental grants. Built straight from the FEB UI lecture decks and the Rosen & Gayer / Gruber chapters — every diagram is redrawn as an interactive, equation-exact graph you can drag.',
        id: 'Paruh UAS Ekonomi Sektor Publik — bagaimana negara menghimpun dana, membelanjakannya, dan berbagi kewenangan dengan daerah, beserta mikroekonomi mengapa pasar gagal di asuransi, kesehatan, dan pensiun. Kita beranjak dari APBN dan aturan fiskal, ke ekonomi perpajakan (PPh, PPN, cukai, belanja perpajakan), ke belanja negara dan diagnostik kesehatan APBN, lalu ke kegagalan pasar yang membenarkan asuransi kesehatan publik dan jaminan sosial, dan akhirnya ke desentralisasi fiskal dan desain hibah antarpemerintah. Disusun langsung dari slide kuliah FEB UI dan bab Rosen & Gayer / Gruber — setiap diagram digambar ulang sebagai grafik interaktif yang persis-persamaan dan bisa digeser.'
      },
      cta: {
        title: { en: 'Open the interactive Graph Lab', id: 'Buka Lab Grafik interaktif' },
        desc: { en: 'Every diagram on one page — drag the sliders, switch scenarios.', id: 'Semua diagram dalam satu halaman — geser slider, ganti skenario.' },
        href: 'model/', newTab: true, icon: '◳'
      },
      objectives: [
        { en: 'Read the APBN I-account, explain the three fiscal functions, and apply the 3%-deficit / 60%-debt fiscal rule and the r−g debt-dynamics test (Unit 1).',
          id: 'Membaca I-account APBN, menjelaskan tiga fungsi fiskal, dan menerapkan aturan fiskal defisit 3% / utang 60% serta uji dinamika utang r−g (Unit 1).' },
        { en: 'Apply the five principles of taxation, compute tax incidence and deadweight loss, and read PPh/PPN/excise plus tax expenditure, tax ratio and buoyancy (Unit 2).',
          id: 'Menerapkan lima prinsip perpajakan, menghitung insidensi pajak dan DWL, serta membaca PPh/PPN/cukai plus belanja perpajakan, tax ratio dan buoyancy (Unit 2).' },
        { en: 'Classify state expenditure by function/type, identify mandatory spending, and run the budget-health diagnostics (primary balance, DSR, debt dynamics) (Unit 3).',
          id: 'Mengklasifikasikan belanja negara menurut fungsi/jenis, mengenali belanja wajib, dan menjalankan diagnostik kesehatan APBN (Unit 3).' },
        { en: 'Explain risk-smoothing, adverse selection and moral hazard, and show the deadweight loss of insurance and why government intervenes in health (Unit 4).',
          id: 'Menjelaskan pemulusan risiko, adverse selection dan moral hazard, serta menunjukkan DWL asuransi dan alasan intervensi pemerintah di kesehatan (Unit 4).' },
        { en: 'Compare PAYG and funded pensions, read the benefit (PIA) formula, and show how social security smooths consumption but can crowd out private saving (Unit 5).',
          id: 'Membandingkan pensiun PAYG dan funded, membaca rumus manfaat (PIA), dan menunjukkan bagaimana jaminan sosial memuluskan konsumsi tetapi dapat menggusur tabungan swasta (Unit 5).' },
        { en: 'Use the club/Tiebout models, analyse property-tax incidence, and distinguish matching, conditional and unconditional grants incl. the flypaper effect (Unit 6).',
          id: 'Menggunakan model klub/Tiebout, menganalisis insidensi PBB, dan membedakan hibah padanan, bersyarat dan tanpa syarat termasuk efek flypaper (Unit 6).' }
      ]
    },

    units: order.map(function (k) { return W[k]; }).filter(Boolean),

    exams: (function () {
      var E = window.ESP_EXAMS || {};
      return ['2024', '2023'].map(function (y) { return E[y]; }).filter(Boolean);
    })(),

    glossary: (window.ESP_GLOSSARY || []),

    superSummary: {
      label: { en: 'Graph Lab', id: 'Lab Grafik' },
      title: { en: 'Interactive Graph Lab', id: 'Lab Grafik Interaktif' },
      blurb: { en: 'Every ESP diagram as an interactive, equation-exact graph — drag a slider or pick a scenario and the equilibrium, tangency or kink moves to the precise solved point.',
               id: 'Setiap diagram ESP sebagai grafik interaktif yang persis-persamaan — geser slider atau pilih skenario, dan keseimbangan/singgung/kelok berpindah ke titik solusi yang tepat.' },
      src: 'model/?embed=1',
      fullHref: 'model/',
      fullLabel: { en: 'Open full-screen ↗', id: 'Buka layar penuh ↗' }
    },

    charts: charts
  };
})();
