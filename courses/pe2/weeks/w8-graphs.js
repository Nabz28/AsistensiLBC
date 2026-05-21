/* ============================================================================
   PE2 · Week 8 — graphs (Open-economy theory, Mankiw Ch 33)
   FULLY ENGINE-RENDERED via window.EconChart. Replaces u.graphs entirely so no
   hand-drawn diagram survives. Equilibria are COMPUTED from the line equations
   → directions are correct by construction. Bilingual prose; symbol axes.
   Demand line used throughout: r = -0.875·Q + 9.375 (p1=[1,8.5], p2=[9,1.5]).
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w8;
  if (!u) return;
  var RED = '#c0392b', TEAL = '#0e8fb8', AMBER = '#b7791f';
  var DEM = function (id, label) { return { id: id, kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: RED, label: label }; };

  // ---- building block: loanable-funds market (saving rises → r falls) -------
  var LF = { panels: [{
    title: '↑ saving ⇒ r ↓', w: 360, h: 270,
    x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
    curves: [ DEM('D', 'D = I+NCO'),
      { id: 'S1', kind: 'vline', x: 4, color: TEAL, label: 'S₁' },
      { id: 'S2', kind: 'vline', x: 6, color: TEAL, label: 'S₂', dash: true } ],
    points: [ { on: ['D', 'S1'], guideY: 'r₁', dot: true }, { on: ['D', 'S2'], guideY: 'r₂', dot: true } ],
    shifts: [ { from: 'S1', to: 'S2' } ]
  }] };

  // ---- building block: foreign-currency exchange market ---------------------
  var FX = { panels: [{
    title: 'NX ↑ ⇒ RER ↑', w: 360, h: 270,
    x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
    curves: [ { id: 'S', kind: 'vline', x: 5, color: TEAL, label: 'S = NCO' },
      { id: 'D1', kind: 'line', p1: [1, 7.5], p2: [8, 0.5], color: RED, label: 'D₁=NX' },
      { id: 'D2', kind: 'line', p1: [2.5, 9], p2: [9.5, 2], color: RED, label: 'D₂', dash: true } ],
    points: [ { on: ['D1', 'S'], guideY: 'RER₁', dot: true }, { on: ['D2', 'S'], guideY: 'RER₂', dot: true } ],
    shifts: [ { from: 'D1', to: 'D2' } ]
  }] };

  // ---- deficit 3-panel (S_LF left → r↑ → NCO↓ → S$ left → RER↑) -------------
  var DEFICIT = { panels: [
    { title: '(1) LF: r ↑', w: 300, h: 250, x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
      curves: [ DEM('D', 'D'), { id: 'S1', kind: 'vline', x: 6, color: TEAL, label: 'S₁' }, { id: 'S2', kind: 'vline', x: 4, color: TEAL, label: 'S₂', dash: true } ],
      points: [ { on: ['D', 'S1'], guideY: 'r₁', dot: true }, { on: ['D', 'S2'], guideY: 'r₂', dot: true } ], shifts: [ { from: 'S1', to: 'S2' } ] },
    { title: '(2) r → NCO', w: 300, h: 250, x: { min: 0, max: 10, label: 'NCO' }, y: { min: 0, max: 10, label: 'r' },
      curves: [ { id: 'NCO', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: AMBER, label: 'NCO(r)' } ],
      points: [ { onCurve: 'NCO', atY: 4.125, guideY: 'r₁', guideX: 'NCO₁', dot: true }, { onCurve: 'NCO', atY: 5.875, guideY: 'r₂', guideX: 'NCO₂', dot: true } ] },
    { title: '(3) RER ↑ (apprec.)', w: 300, h: 250, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
      curves: [ DEM('D', 'D=NX'), { id: 'S1', kind: 'vline', x: 6, color: TEAL, label: 'S₁=NCO₁' }, { id: 'S2', kind: 'vline', x: 4, color: TEAL, label: 'S₂=NCO₂', dash: true } ],
      points: [ { on: ['D', 'S1'], guideY: 'RER₁', dot: true }, { on: ['D', 'S2'], guideY: 'RER₂', dot: true } ], shifts: [ { from: 'S1', to: 'S2' } ] }
  ] };

  // ---- capital flight: NCO↑ → LF demand right (r↑); FX supply right (RER↓) --
  var FLIGHT = { panels: [
    { title: '(1) LF: D → right, r ↑', w: 340, h: 260, x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
      curves: [ { id: 'S', kind: 'vline', x: 5, color: TEAL, label: 'S' },
        { id: 'D1', kind: 'line', p1: [1, 7], p2: [8, 0.5], color: RED, label: 'D₁' },
        { id: 'D2', kind: 'line', p1: [2.5, 9], p2: [9.5, 2.5], color: RED, label: 'D₂', dash: true } ],
      points: [ { on: ['D1', 'S'], guideY: 'r₁', dot: true }, { on: ['D2', 'S'], guideY: 'r₂', dot: true } ], shifts: [ { from: 'D1', to: 'D2' } ] },
    { title: '(2) FX: S → right, RER ↓', w: 340, h: 260, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
      curves: [ DEM('D', 'D=NX'), { id: 'S1', kind: 'vline', x: 4, color: TEAL, label: 'S₁=NCO₁' }, { id: 'S2', kind: 'vline', x: 7, color: TEAL, label: 'S₂=NCO₂', dash: true } ],
      points: [ { on: ['D', 'S1'], guideY: 'RER₁', dot: true }, { on: ['D', 'S2'], guideY: 'RER₂', dot: true } ], shifts: [ { from: 'S1', to: 'S2' } ] }
  ] };

  // ---- tariff/quota: D$ right, S=NCO fixed → RER↑, NX unchanged -------------
  var TARIFF = { panels: [{
    title: 'RER ↑, NX unchanged', w: 380, h: 280, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
    curves: [ { id: 'S', kind: 'vline', x: 5, color: TEAL, label: 'S = NCO (fixed)' },
      { id: 'D1', kind: 'line', p1: [1, 7.5], p2: [8, 0.5], color: RED, label: 'D₁=NX' },
      { id: 'D2', kind: 'line', p1: [2.5, 9], p2: [9.5, 2], color: RED, label: 'D₂', dash: true } ],
    points: [ { on: ['D1', 'S'], guideY: 'RER₁', dot: true }, { on: ['D2', 'S'], guideY: 'RER₂', dot: true } ],
    shifts: [ { from: 'D1', to: 'D2' } ]
  }] };

  function card(t_en, t_id, h_en, h_id, spec, tip_en, tip_id) {
    return { title: { en: t_en, id: t_id }, html: { en: h_en, id: h_id }, chart: spec,
      htmlAfter: { en: '<div class="tip">' + tip_en + '</div>', id: '<div class="tip">' + tip_id + '</div>' } };
  }

  u.graphs = [{
    heading: { en: 'Exam graphs — the open-economy markets', id: 'Grafik ujian — pasar perekonomian terbuka' },
    num: 'G',
    cards: [
      card('Loanable-funds market', 'Pasar dana pinjaman',
        '<p><span class="key">Building block.</span> Saving supplies loanable funds; investment + NCO demand them. More saving shifts <span class="key">supply right</span> → $r$ falls.</p>',
        '<p><span class="key">Blok dasar.</span> Tabungan menyediakan dana pinjaman; investasi + NCO memintanya. Tabungan naik menggeser <span class="key">penawaran ke kanan</span> → $r$ turun.</p>',
        LF, 'S → right ⇒ r ↓. (Left ⇒ r ↑.)', 'S → kanan ⇒ r ↓. (Kiri ⇒ r ↑.)'),
      card('Foreign-currency exchange market', 'Pasar valuta asing',
        '<p><span class="key">Building block.</span> Supply of $\\$$ = $NCO$ (vertical). Demand for $\\$$ = $NX$. More demand for the home currency $\\Rightarrow$ <span class="key">RER appreciates</span>.</p>',
        '<p><span class="key">Blok dasar.</span> Penawaran $\\$$ = $NCO$ (vertikal). Permintaan $\\$$ = $NX$. Permintaan mata uang domestik naik $\\Rightarrow$ <span class="key">RER terapresiasi</span>.</p>',
        FX, 'D → right ⇒ RER ↑ (appreciate).', 'D → kanan ⇒ RER ↑ (apresiasi).'),
      card('Scenario — Budget deficit ("twin deficits")', 'Skenario — Defisit anggaran ("defisit kembar")',
        '<p><span class="key">Exam:</span> a large budget deficit lowers national saving, so $S_{LF}$ shifts <span class="key">left</span>. Trace $r$, $NCO$, $RER$, $NX$.</p>',
        '<p><span class="key">Ujian:</span> defisit anggaran besar menurunkan tabungan nasional, sehingga $S_{LF}$ bergeser ke <span class="key">kiri</span>. Telusuri $r$, $NCO$, $RER$, $NX$.</p>',
        DEFICIT, 'Deficit ⇒ r↑, NCO↓, RER appreciates, NX↓. (UAS 2019, 2024, 2025.)', 'Defisit ⇒ r↑, NCO↓, RER terapresiasi, NX↓. (UAS 2019, 2024, 2025.)'),
      card('Scenario — Capital flight', 'Skenario — Pelarian modal',
        '<p><span class="key">Exam:</span> political risk → residents want more foreign assets, so $NCO$ <span class="key">rises</span>. That shifts loanable-funds <span class="key">demand right</span> ($r$↑) and the FX <span class="key">supply right</span>.</p>',
        '<p><span class="key">Ujian:</span> risiko politik → penduduk ingin lebih banyak aset asing, sehingga $NCO$ <span class="key">naik</span>. Itu menggeser <span class="key">permintaan</span> dana pinjaman ke kanan ($r$↑) dan <span class="key">penawaran</span> FX ke kanan.</p>',
        FLIGHT, 'Capital flight ⇒ NCO↑, r↑, RER depreciates. The only shock here that depreciates. (UAS 2019, 2022, 2023, 2024.)', 'Pelarian modal ⇒ NCO↑, r↑, RER terdepresiasi. Satu-satunya guncangan di sini yang mendepresiasi. (UAS 2019, 2022, 2023, 2024.)'),
      card('Scenario — Import tariff / quota', 'Skenario — Tarif / kuota impor',
        '<p><span class="key">Exam:</span> a tariff cuts imports → demand for $\\$$ shifts <span class="key">right</span>. But $S=NCO$ is unchanged, so the quantity of $\\$$ does not move off the vertical line.</p>',
        '<p><span class="key">Ujian:</span> tarif memangkas impor → permintaan $\\$$ bergeser ke <span class="key">kanan</span>. Tetapi $S=NCO$ tidak berubah, jadi kuantitas $\\$$ tidak bergeser dari garis vertikal.</p>',
        TARIFF, 'Tariff ⇒ RER appreciates, but NX is UNCHANGED (S, I, NCO are unchanged). The tariff fails to fix the trade balance. (UAS 2024, 2025.)', 'Tarif ⇒ RER terapresiasi, tetapi NX TIDAK berubah (S, I, NCO tidak berubah). Tarif gagal memperbaiki neraca perdagangan. (UAS 2024, 2025.)')
    ]
  }];
})();
