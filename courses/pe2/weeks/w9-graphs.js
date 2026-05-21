/* ============================================================================
   PE2 · Week 9 — graphs (AD–AS, Mankiw Ch 34). FULLY ENGINE-RENDERED.
   Replaces u.graphs. Axes: P (price level) vs Y (real GDP). LRAS vertical at
   Yₙ=5. AD: P=-0.75Y+b. SRAS: P=0.75Y+b. Equilibria computed → A,B,C exact.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w9;
  if (!u) return;
  var RED = '#c0392b', TEAL = '#0e8fb8', GREY = '#444';

  // adverse AD left-shift: A(5,5) → B(4,4.25) recession → C(5,3.5) self-correct
  var ADLEFT = { panels: [{
    title: 'A → B (SR) → C (LR)', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'AD1', kind: 'line', p1: [1, 8], p2: [9, 2], color: RED, label: 'AD₁' },
      { id: 'AD2', kind: 'line', p1: [1, 6.5], p2: [9, 0.5], color: RED, label: 'AD₂', dash: true },
      { id: 'SRAS1', kind: 'line', p1: [1, 2], p2: [9, 8], color: TEAL, label: 'SRAS₁' },
      { id: 'SRAS2', kind: 'line', p1: [1, 0.5], p2: [9, 6.5], color: TEAL, label: 'SRAS₂', dash: true },
      { id: 'LRAS', kind: 'vline', x: 5, color: GREY, label: 'LRAS' }
    ],
    points: [
      { on: ['AD1', 'SRAS1'], label: 'A', dot: true, guideX: 'Yₙ' },
      { on: ['AD2', 'SRAS1'], label: 'B', dot: true },
      { on: ['AD2', 'SRAS2'], label: 'C', dot: true }
    ],
    shifts: [ { from: 'AD1', to: 'AD2' }, { from: 'SRAS1', to: 'SRAS2' } ]
  }] };

  // adverse supply shock: A(5,5) → B(4,5.75) stagflation
  var SUPPLY = { panels: [{
    title: 'Supply shock → stagflation', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: RED, label: 'AD' },
      { id: 'SRAS1', kind: 'line', p1: [1, 2], p2: [9, 8], color: TEAL, label: 'SRAS₁' },
      { id: 'SRAS2', kind: 'line', p1: [1, 3.5], p2: [9, 9.5], color: TEAL, label: 'SRAS₂', dash: true },
      { id: 'LRAS', kind: 'vline', x: 5, color: GREY, label: 'LRAS' }
    ],
    points: [ { on: ['AD', 'SRAS1'], label: 'A', dot: true, guideX: 'Yₙ' }, { on: ['AD', 'SRAS2'], label: 'B', dot: true } ],
    shifts: [ { from: 'SRAS1', to: 'SRAS2' } ]
  }] };

  // both SRAS & LRAS left: lower natural output. A(5,5) → B(3.5,6.125)
  var BOTHLEFT = { panels: [{
    title: 'War / population ↓ : Yₙ falls', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: RED, label: 'AD' },
      { id: 'SRAS1', kind: 'line', p1: [1, 2], p2: [9, 8], color: TEAL, label: 'SRAS₁' },
      { id: 'SRAS2', kind: 'line', p1: [1, 4.25], p2: [8, 9.5], color: TEAL, label: 'SRAS₂', dash: true },
      { id: 'LRAS1', kind: 'vline', x: 5, color: GREY, label: 'LRAS₁' },
      { id: 'LRAS2', kind: 'vline', x: 3.5, color: GREY, label: 'LRAS₂', dash: true }
    ],
    points: [ { on: ['AD', 'SRAS1'], label: 'A', dot: true }, { on: ['AD', 'LRAS2'], label: 'B', dot: true } ],
    shifts: [ { from: 'SRAS1', to: 'SRAS2' }, { from: 'LRAS1', to: 'LRAS2' } ]
  }] };

  function card(te, ti, he, hi, spec, te2, ti2) {
    return { title: { en: te, id: ti }, html: { en: he, id: hi }, chart: spec,
      htmlAfter: { en: '<div class="tip">' + te2 + '</div>', id: '<div class="tip">' + ti2 + '</div>' } };
  }

  u.graphs = [{
    heading: { en: 'Exam graphs — AD–AS shocks', id: 'Grafik ujian — guncangan AD–AS' },
    num: 'G',
    cards: [
      card('Adverse demand shift (recession)', 'Pergeseran permintaan negatif (resesi)',
        '<p><span class="key">Exam:</span> a fall in spending (stock-market crash, pessimism, lower $NX$) shifts <span class="key">$AD$ left</span>. Read the short run, then the long-run self-correction.</p>',
        '<p><span class="key">Ujian:</span> penurunan pengeluaran (kejatuhan pasar saham, pesimisme, $NX$ turun) menggeser <span class="key">$AD$ ke kiri</span>. Baca jangka pendek, lalu koreksi-diri jangka panjang.</p>',
        ADLEFT,
        'A→B (SR): P↓, Y↓ (recession). B→C (LR): SRAS shifts right, output returns to Yₙ at a lower P. (A favorable shift is the mirror image: SR boom, then back to Yₙ at higher P.) (UAS every year.)',
        'A→B (JPendek): P↓, Y↓ (resesi). B→C (JPanjang): SRAS bergeser ke kanan, output kembali ke Yₙ pada P lebih rendah. (Guncangan positif adalah cermin: boom JPendek, lalu kembali ke Yₙ pada P lebih tinggi.) (UAS tiap tahun.)'),
      card('Adverse supply shock (stagflation)', 'Guncangan penawaran negatif (stagflasi)',
        '<p><span class="key">Exam:</span> an oil-price spike shifts <span class="key">$SRAS$ left</span>. Both bad things happen at once.</p>',
        '<p><span class="key">Ujian:</span> lonjakan harga minyak menggeser <span class="key">$SRAS$ ke kiri</span>. Dua hal buruk terjadi sekaligus.</p>',
        SUPPLY,
        'A→B: P↑ AND Y↓ — stagflation. If policy does nothing, SRAS slowly shifts back to A; if it accommodates (AD right), output recovers but P rises further. (UAS 2019, 2023, 2024, 2025.)',
        'A→B: P↑ DAN Y↓ — stagflasi. Jika kebijakan diam, SRAS perlahan kembali ke A; jika diakomodasi (AD ke kanan), output pulih tetapi P naik lebih jauh. (UAS 2019, 2023, 2024, 2025.)'),
      card('SRAS and LRAS both shift left', 'SRAS dan LRAS sama-sama bergeser kiri',
        '<p><span class="key">Exam:</span> a war or negative population growth destroys capacity — <span class="key">both $SRAS$ and $LRAS$ shift left</span>, so natural output $Y_n$ falls permanently.</p>',
        '<p><span class="key">Ujian:</span> perang atau pertumbuhan populasi negatif menghancurkan kapasitas — <span class="key">$SRAS$ dan $LRAS$ sama-sama bergeser ke kiri</span>, sehingga output alamiah $Y_n$ turun permanen.</p>',
        BOTHLEFT,
        'Distinct from a pure supply shock: here Yₙ itself falls (A→B), so Y↓ is permanent and P↑. Do not confuse with a temporary SRAS-only shock. (UAS 2023, 2024.)',
        'Berbeda dari guncangan penawaran murni: di sini Yₙ sendiri turun (A→B), jadi Y↓ permanen dan P↑. Jangan rancukan dengan guncangan SRAS sementara. (UAS 2023, 2024.)')
    ]
  }];
})();
