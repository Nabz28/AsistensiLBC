/* ============================================================================
   PE2 · Week 10 — graphs (Monetary & fiscal policy on AD, Mankiw Ch 35).
   FULLY ENGINE-RENDERED. Replaces u.graphs. Money market: r vs M (MS vertical,
   MD downward). AD–AS: P vs Y. Equilibria computed.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w10;
  if (!u) return;
  var RED = '#c0392b', TEAL = '#0e8fb8', GREY = '#444';

  // expansionary monetary: MS right → r↓ ; AD right → P↑,Y↑
  var MONETARY = { panels: [
    { title: '(1) Money market: r ↓', w: 320, h: 270, x: { min: 0, max: 10, label: 'M' }, y: { min: 0, max: 10, label: 'r' },
      curves: [
        { id: 'MD', kind: 'line', p1: [1, 8], p2: [9, 2], color: RED, label: 'MD' },
        { id: 'MS1', kind: 'vline', x: 4, color: TEAL, label: 'MS₁' },
        { id: 'MS2', kind: 'vline', x: 6, color: TEAL, label: 'MS₂', dash: true }
      ],
      points: [ { on: ['MD', 'MS1'], guideY: 'r₁', dot: true }, { on: ['MD', 'MS2'], guideY: 'r₂', dot: true } ],
      shifts: [ { from: 'MS1', to: 'MS2' } ] },
    { title: '(2) AD → right: P↑, Y↑', w: 320, h: 270, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
      curves: [
        { id: 'AD1', kind: 'line', p1: [1, 7.5], p2: [9, 1.5], color: RED, label: 'AD₁' },
        { id: 'AD2', kind: 'line', p1: [1, 9], p2: [9, 3], color: RED, label: 'AD₂', dash: true },
        { id: 'SRAS', kind: 'line', p1: [1, 1.5], p2: [9, 7.5], color: TEAL, label: 'SRAS' }
      ],
      points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true }, { on: ['AD2', 'SRAS'], label: 'B', dot: true } ],
      shifts: [ { from: 'AD1', to: 'AD2' } ] }
  ] };

  // crowding-out: G↑ shifts AD right by multiplier (AD2), higher r pulls it back (AD3)
  var CROWD = { panels: [{
    title: 'AD₁ → AD₂ (multiplier) → AD₃ (crowd-out)', w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'AD1', kind: 'line', p1: [1, 6.75], p2: [9, 0.75], color: RED, label: 'AD₁' },
      { id: 'AD2', kind: 'line', p1: [1, 9.75], p2: [9, 3.75], color: '#e8a13a', label: 'AD₂', dash: true },
      { id: 'AD3', kind: 'line', p1: [1, 8.25], p2: [9, 2.25], color: RED, label: 'AD₃' },
      { id: 'SRAS', kind: 'line', p1: [1, 1.5], p2: [9, 7.5], color: TEAL, label: 'SRAS' }
    ],
    points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true }, { on: ['AD3', 'SRAS'], label: 'C', dot: true } ],
    shifts: [ { from: 'AD1', to: 'AD2' }, { from: 'AD2', to: 'AD3' } ]
  }] };

  function card(te, ti, he, hi, spec, te2, ti2) {
    var c = { title: { en: te, id: ti }, html: { en: he, id: hi } };
    if (spec) c.chart = spec;
    if (te2) c.htmlAfter = { en: '<div class="tip">' + te2 + '</div>', id: '<div class="tip">' + ti2 + '</div>' };
    return c;
  }

  u.graphs = [{
    heading: { en: 'Exam graphs — policy & aggregate demand', id: 'Grafik ujian — kebijakan & permintaan agregat' },
    num: 'G',
    cards: [
      card('Expansionary monetary policy', 'Kebijakan moneter ekspansif',
        '<p><span class="key">Exam:</span> an open-market purchase raises the money supply ($MS$ <span class="key">right</span>) → the interest rate <span class="key">falls</span> → investment rises → $AD$ shifts <span class="key">right</span>.</p>',
        '<p><span class="key">Ujian:</span> pembelian pasar terbuka menaikkan jumlah uang beredar ($MS$ <span class="key">ke kanan</span>) → suku bunga <span class="key">turun</span> → investasi naik → $AD$ bergeser ke <span class="key">kanan</span>.</p>',
        MONETARY,
        'MS↑ ⇒ r↓ ⇒ I↑ ⇒ AD→right ⇒ P↑, Y↑. (Contractionary policy is the mirror image.) (UAS 2019, 2024, 2025.)',
        'MS↑ ⇒ r↓ ⇒ I↑ ⇒ AD→kanan ⇒ P↑, Y↑. (Kebijakan kontraktif adalah cerminannya.) (UAS 2019, 2024, 2025.)'),
      card('Fiscal policy: multiplier vs crowding-out', 'Kebijakan fiskal: multiplier vs crowding-out',
        '<p><span class="key">Exam:</span> a rise in $G$ shifts $AD$ right by the <span class="key">multiplier</span> ($AD_1\\!\\to\\!AD_2$). But higher money demand raises $r$, cutting investment — the <span class="key">crowding-out effect</span> pulls $AD$ partly back ($AD_2\\!\\to\\!AD_3$).</p>',
        '<p><span class="key">Ujian:</span> kenaikan $G$ menggeser $AD$ ke kanan sebesar <span class="key">multiplier</span> ($AD_1\\!\\to\\!AD_2$). Tetapi permintaan uang yang lebih tinggi menaikkan $r$, memangkas investasi — <span class="key">efek crowding-out</span> menarik $AD$ sebagian kembali ($AD_2\\!\\to\\!AD_3$).</p>',
        CROWD,
        'Net effect AD₁→AD₃ (smaller than the full multiplier). If the central bank ACCOMMODATES (MS right, r unchanged) there is NO crowding-out; if MS is fixed, r rises and crowding-out is partial. (UAS 2022, 2024, 2025.)',
        'Efek neto AD₁→AD₃ (lebih kecil dari multiplier penuh). Jika bank sentral MENGAKOMODASI (MS ke kanan, r tetap) TIDAK ada crowding-out; jika MS tetap, r naik dan crowding-out parsial. (UAS 2022, 2024, 2025.)'),
      card('The multipliers', 'Para pengganda',
        '<p>The <span class="key">spending multiplier</span> turns an initial change in spending into a larger change in $AD$:</p><div class="formula">$$\\text{spending multiplier}=\\frac{1}{1-MPC},\\qquad \\text{tax multiplier}=\\frac{-MPC}{1-MPC}$$</div><p>e.g. with $MPC=0.75$: spending multiplier $=\\tfrac{1}{1-0.75}=4$, tax multiplier $=\\tfrac{-0.75}{0.25}=-3$.</p>',
        '<p><span class="key">Pengganda pengeluaran</span> mengubah perubahan awal pengeluaran menjadi perubahan $AD$ yang lebih besar:</p><div class="formula">$$\\text{pengganda pengeluaran}=\\frac{1}{1-MPC},\\qquad \\text{pengganda pajak}=\\frac{-MPC}{1-MPC}$$</div><p>mis. dengan $MPC=0{,}75$: pengganda pengeluaran $=\\tfrac{1}{1-0{,}75}=4$, pengganda pajak $=\\tfrac{-0{,}75}{0{,}25}=-3$.</p>',
        null,
        'Crowding-out makes the realised multiplier smaller than 1/(1−MPC). The tax multiplier is smaller in magnitude than the spending multiplier (part of a tax cut is saved). (UAS 2019, 2023, 2024, 2025.)',
        'Crowding-out membuat multiplier riil lebih kecil dari 1/(1−MPC). Pengganda pajak lebih kecil besarannya daripada pengganda pengeluaran (sebagian potongan pajak ditabung). (UAS 2019, 2023, 2024, 2025.)')
    ]
  }];
})();
