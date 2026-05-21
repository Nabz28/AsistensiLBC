/* ============================================================================
   PE2 · Week 11 — graphs (Phillips curve, Mankiw Ch 36). FULLY ENGINE-RENDERED.
   Replaces u.graphs. Axes: π (inflation) vs u (unemployment). LRPC vertical at
   uₙ=5. SRPC: π=-0.6u+b. Equilibria computed → points exact.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w11;
  if (!u) return;
  var RED = '#c0392b', TEAL = '#0e8fb8', GREY = '#444';

  // expansionary policy: A(5,3) → B(2.5,4.5) up-left along SRPC₁ → C(5,5) on LRPC
  var EXPAND = { panels: [{
    title: 'A → B (SR) → C (LR)', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
    curves: [
      { id: 'SRPC1', kind: 'line', p1: [1, 5.4], p2: [9, 0.6], color: RED, label: 'SRPC₁' },
      { id: 'SRPC2', kind: 'line', p1: [1, 7.4], p2: [9, 2.6], color: RED, label: 'SRPC₂', dash: true },
      { id: 'LRPC', kind: 'vline', x: 5, color: GREY, label: 'LRPC' }
    ],
    points: [
      { on: ['SRPC1', 'LRPC'], label: 'A', dot: true, guideX: 'uₙ' },
      { onCurve: 'SRPC1', atX: 2.5, label: 'B', dot: true },
      { on: ['SRPC2', 'LRPC'], label: 'C', dot: true }
    ],
    shifts: [ { from: 'SRPC1', to: 'SRPC2' } ]
  }] };

  // adverse supply shock: SRPC shifts up/right → stagflation point B(6,4.4)
  var SHOCK = { panels: [{
    title: 'Supply shock: u↑ AND π↑', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
    curves: [
      { id: 'SRPC1', kind: 'line', p1: [1, 5.4], p2: [9, 0.6], color: RED, label: 'SRPC₁' },
      { id: 'SRPC2', kind: 'line', p1: [1, 7.4], p2: [9, 2.6], color: RED, label: 'SRPC₂', dash: true },
      { id: 'LRPC', kind: 'vline', x: 5, color: GREY, label: 'LRPC' }
    ],
    points: [ { on: ['SRPC1', 'LRPC'], label: 'A', dot: true, guideX: 'uₙ' }, { onCurve: 'SRPC2', atX: 6, label: 'B', dot: true } ],
    shifts: [ { from: 'SRPC1', to: 'SRPC2' } ]
  }] };

  // disinflation: A(5,3) → B(7,1.8) recession → C(5,1.2) lower SRPC
  var DISINFL = { panels: [{
    title: 'Disinflation A → B → C', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
    curves: [
      { id: 'SRPC1', kind: 'line', p1: [1, 5.4], p2: [9, 0.6], color: RED, label: 'SRPC₁' },
      { id: 'SRPC0', kind: 'line', p1: [0, 4.2], p2: [7, 0], color: RED, label: 'SRPC₀', dash: true },
      { id: 'LRPC', kind: 'vline', x: 5, color: GREY, label: 'LRPC' }
    ],
    points: [
      { on: ['SRPC1', 'LRPC'], label: 'A', dot: true, guideX: 'uₙ' },
      { onCurve: 'SRPC1', atX: 7, label: 'B', dot: true },
      { on: ['SRPC0', 'LRPC'], label: 'C', dot: true }
    ],
    shifts: [ { from: 'SRPC1', to: 'SRPC0' } ]
  }] };

  function card(te, ti, he, hi, spec, te2, ti2) {
    return { title: { en: te, id: ti }, html: { en: he, id: hi }, chart: spec,
      htmlAfter: { en: '<div class="tip">' + te2 + '</div>', id: '<div class="tip">' + ti2 + '</div>' } };
  }

  u.graphs = [{
    heading: { en: 'Exam graphs — the Phillips curve', id: 'Grafik ujian — kurva Phillips' },
    num: 'G',
    cards: [
      card('Expansionary policy & expectations', 'Kebijakan ekspansif & ekspektasi',
        '<p><span class="key">Exam:</span> expansionary policy ($AD$ right) moves the economy <span class="key">up-left along $SRPC_1$</span> in the short run. Then expected inflation rises, $SRPC$ shifts up, and the economy returns to $u_n$.</p>',
        '<p><span class="key">Ujian:</span> kebijakan ekspansif ($AD$ ke kanan) menggerakkan ekonomi <span class="key">naik-ke-kiri di sepanjang $SRPC_1$</span> dalam jangka pendek. Lalu ekspektasi inflasi naik, $SRPC$ bergeser ke atas, dan ekonomi kembali ke $u_n$.</p>',
        EXPAND,
        'A→B (SR): u↓, π↑ — a real trade-off. B→C (LR): expectations adjust, SRPC shifts up, back to uₙ at higher π. There is NO long-run trade-off (LRPC is vertical). (UAS 2019, 2022, 2024, 2025.)',
        'A→B (JPendek): u↓, π↑ — trade-off nyata. B→C (JPanjang): ekspektasi menyesuaikan, SRPC bergeser ke atas, kembali ke uₙ pada π lebih tinggi. TIDAK ada trade-off jangka panjang (LRPC vertikal). (UAS 2019, 2022, 2024, 2025.)'),
      card('Adverse supply shock', 'Guncangan penawaran negatif',
        '<p><span class="key">Exam:</span> an oil shock shifts the <span class="key">$SRPC$ up/right</span> (the AD–AS twin of an $SRAS$-left shift). Inflation and unemployment rise <span class="key">together</span>.</p>',
        '<p><span class="key">Ujian:</span> guncangan minyak menggeser <span class="key">$SRPC$ ke atas/kanan</span> (kembaran AD–AS dari pergeseran $SRAS$ ke kiri). Inflasi dan pengangguran naik <span class="key">bersama</span>.</p>',
        SHOCK,
        'A→B: u↑ AND π↑ — stagflation. The supply shock worsens the whole trade-off; the curve itself moves, not a slide along it. (UAS 2024, 2025.)',
        'A→B: u↑ DAN π↑ — stagflasi. Guncangan penawaran memperburuk seluruh trade-off; kurvanya yang bergerak, bukan pergeseran di sepanjangnya. (UAS 2024, 2025.)'),
      card('Disinflation & the sacrifice ratio', 'Disinflasi & rasio pengorbanan',
        '<p><span class="key">Exam:</span> to lower inflation the central bank tightens; the economy slides <span class="key">down-right along $SRPC_1$</span> (higher $u$) before expectations fall and $SRPC$ shifts down.</p>',
        '<p><span class="key">Ujian:</span> untuk menurunkan inflasi bank sentral mengetatkan; ekonomi bergeser <span class="key">turun-ke-kanan di sepanjang $SRPC_1$</span> ($u$ lebih tinggi) sebelum ekspektasi turun dan $SRPC$ bergeser ke bawah.</p>',
        DISINFL,
        'A→B (SR): π↓ bought with u↑ (recession) — the sacrifice ratio = % of a year\'s output lost per 1 pt of disinflation. B→C: credible policy / rational expectations make B smaller (cheaper disinflation). (UAS 2024, 2025.)',
        'A→B (JPendek): π↓ ditebus dengan u↑ (resesi) — rasio pengorbanan = % output setahun yang hilang per 1 poin disinflasi. B→C: kebijakan kredibel / ekspektasi rasional membuat B lebih kecil (disinflasi lebih murah). (UAS 2024, 2025.)')
    ]
  }];
})();
