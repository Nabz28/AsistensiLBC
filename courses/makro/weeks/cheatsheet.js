/* ============================================================================
   MAKRO · Cheatsheet Builder — A4 two-sided
   Registers as a special unit on window.MAKRO_WEEKS.cheatsheet (assembled last
   in course.js order). Transcribe each block onto your sheet exactly as laid
   out. Mini-diagrams are reproduced small as memory aids — redraw them by hand
   with labelled axes, intersections and shifts (that is what graders score).
     Side A — Weeks 8–10 (open economy & Mundell–Fleming, monetary policy &
              financial markets, expectations / mismatch / SDM-FF).
     Side B — Weeks 11–14 (ER & balance-sheet effects, macroprudential/MMT/
              DSGE, climate/crypto/CBDC/welfare, and the synthesis WH model).
   ============================================================================ */
(function () {
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';

  /* ----- Mini-diagrams (tiny, to fit a half-A4) --------------------------- */
  var MINI_MF = { panels: [{
    title: 'Mundell–Fleming: IS–LM–BP',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'i' },
    curves: [
      { id: 'IS', kind: 'line', p1: [1,8], p2: [9,2], color: TEAL, label: 'IS' },
      { id: 'LM', kind: 'line', p1: [1,2], p2: [9,8], color: BLUE, label: 'LM' },
      { id: 'BP', kind: 'hline', y: 5, color: RED, label: 'BP (mobile)' }
    ],
    points: [ { on: ['IS','LM'], dot: true, guideX: 'Y*', guideY: 'i*' } ]
  }] };

  var MINI_TRILEMMA = { panels: [{
    title: 'Impossible trinity — pick 2 of 3',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: '' }, y: { min: 0, max: 10, label: '' },
    curves: [
      { kind: 'path', pts: [[5,9],[1,2],[9,2],[5,9]], color: VIOLET }
    ],
    notes: [
      { x: 5, y: 9.6, text: 'free capital flow', color: LINE, anchor: 'middle', size: 9 },
      { x: 0.6, y: 1.2, text: 'fixed ER', color: LINE, anchor: 'start', size: 9 },
      { x: 9.4, y: 1.2, text: 'monetary autonomy', color: LINE, anchor: 'end', size: 9 }
    ]
  }] };

  var MINI_TAYLOR = { panels: [{
    title: 'Taylor rule: i reacts to gaps',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'inflation gap' }, y: { min: 0, max: 10, label: 'policy rate i' },
    curves: [ { id: 'T', kind: 'line', p1: [0,2], p2: [10,9], color: BLUE, label: 'i = i* + φπ(π−π*) + φy·gap' } ],
    points: [ { onCurve: 'T', atX: 5, dot: true, guideY: 'i' } ]
  }] };

  var MINI_PHILLIPS = { panels: [{
    title: 'Expectations-augmented PC',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
    curves: [
      { id: 'SR', kind: 'line', p1: [1,8], p2: [9,2], color: RED, label: 'SRPC(πᵉ)' },
      { id: 'LR', kind: 'vline', x: 5, color: LINE, label: 'LRPC (uₙ)' }
    ],
    points: [ { on: ['SR','LR'], dot: true } ]
  }] };

  var MINI_BEVERIDGE = { panels: [{
    title: 'Beveridge curve (V vs u)',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'V' },
    curves: [
      { kind: 'path', pts: [[1,9],[2,5],[4,3],[6,2],[9,1.3]], smooth: true, color: TEAL, label: 'BC' },
      { kind: 'path', pts: [[2.5,9],[4,5.5],[6,3.6],[8,2.6],[9.5,2.2]], smooth: true, color: RED, label: "BC' (mismatch↑)", dash: true }
    ]
  }] };

  var MINI_BACKBEND = { panels: [{
    title: 'Backward-bending AD (BS effect)',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'real ER (E·P*/P)' },
    curves: [
      { kind: 'path', pts: [[2,1],[5,3],[6,5],[5,7],[3,9]], smooth: true, color: RED, label: 'AD' }
    ],
    notes: [
      { x: 7, y: 3, text: 'low E: NX channel (dy/dE>0)', color: '#777', anchor: 'middle', size: 8 },
      { x: 6.5, y: 8, text: 'high E: BS channel (dy/dE<0)', color: '#777', anchor: 'middle', size: 8 }
    ]
  }] };

  var MINI_MACPRU = { panels: [{
    title: 'Procyclical credit + buffer',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'time' }, y: { min: 0, max: 10, label: 'credit/GDP gap' },
    curves: [
      { kind: 'path', pts: [[0,5],[2,7],[4,9],[6,6],[8,3],[10,5]], smooth: true, color: RED, label: 'cycle' },
      { id: 'eq', kind: 'hline', y: 5, color: '#999', label: 'trend' }
    ]
  }] };

  var MINI_DAMAGE = { panels: [{
    title: 'Climate D(T): AS shifts up',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'AD', kind: 'line', p1: [1,9], p2: [9,1], color: BLUE, label: 'AD' },
      { id: 'AS0', kind: 'line', p1: [1,1], p2: [9,9], color: TEAL, label: 'AS₀' },
      { id: 'AS1', kind: 'line', p1: [2.6,1], p2: [9,11], color: RED, label: 'AS₁', dash: true }
    ],
    points: [ { on: ['AD','AS0'], dot: true }, { on: ['AD','AS1'], dot: true } ]
  }] };

  var MINI_WELFARE = { panels: [{
    title: 'Poverty: α<β worsens',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'P → / Y →' }, y: { min: 0, max: 10, label: 'PL / Yᵖ' },
    curves: [
      { id: 'PL', kind: 'line', p1: [0,1], p2: [10,8.5], color: RED, label: 'PL(P): α' },
      { id: 'YP', kind: 'line', p1: [0,1], p2: [10,5.5], color: GREEN, label: 'Yᵖ(Y): β' }
    ]
  }] };

  var MINI_WH = { panels: [{
    title: 'SR/MR loop: Okun + Phillips',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π  /  gY' },
    curves: [
      { id: 'PH', kind: 'line', p1: [1,8], p2: [9,2], color: RED, label: 'Phillips' },
      { id: 'OK', kind: 'line', p1: [1,2], p2: [9,8], color: BLUE, label: 'Okun (gY)' }
    ],
    points: [ { on: ['PH','OK'], dot: true } ]
  }] };

  window.MAKRO_WEEKS.cheatsheet = {
    id: 'cheatsheet',
    label: { en: 'Cheatsheet', id: 'Cheatsheet' },
    title: { en: 'A4 Two-Sided Cheatsheet Builder', id: 'Pembangun Cheatsheet A4 Dua Sisi' },
    subtitle: {
      en: 'One compact, exam-ready transcription of the whole UAS half. Copy Side A (Weeks 8–10) and Side B (Weeks 11–14). Every formula, decision rule and mini-diagram is exam-relevant — redraw the graphs by hand with labelled axes, intersections and shifts.',
      id: 'Transkripsi padat siap-ujian seluruh paruh UAS. Salin Sisi A (Minggu 8–10) dan Sisi B (Minggu 11–14). Tiap rumus, aturan keputusan, dan mini-diagram relevan ujian — gambar ulang grafiknya dengan tangan beserta sumbu, perpotongan, dan pergeseran berlabel.'
    },

    notes: [
      /* ------------------------- SIDE A ------------------------- */
      {
        heading: { en: 'SIDE A · Week 8 — Open economy & Mundell–Fleming', id: 'SISI A · Minggu 8 — Ekonomi terbuka & Mundell–Fleming' },
        num: 'A',
        cards: [
          {
            title: { en: 'A1 · BOP, UIP & the policy table', id: 'A1 · BOP, UIP & tabel kebijakan' },
            html: {
              en: `<div class="formula"><strong>BOP.</strong> $CA + KA \\approx 0$ (+ Δreserves). CA deficit ⇒ needs net inflows.</div>
<div class="formula"><strong>UIP.</strong> $i = i^{*} + \\dfrac{E^{e}-E}{E} \\,(+\\,\\rho)$</div>
<div class="formula"><strong>BP curve:</strong> flatter as capital is more mobile; horizontal under perfect mobility.</div>
<p><strong>Mundell–Fleming policy effectiveness:</strong></p>
<table>
<thead><tr><th></th><th>Floating</th><th>Fixed</th></tr></thead>
<tbody>
<tr><td>Monetary ↑</td><td><span class="key">effective</span></td><td>ineffective</td></tr>
<tr><td>Fiscal ↑</td><td>ineffective</td><td><span class="key">very effective</span></td></tr>
</tbody>
</table>
<p>Intuition: under floating the ER moves to undo/boost policy; under a fixed ER the central bank loses the money supply to the peg.</p>`,
              id: `<div class="formula"><strong>BOP.</strong> $CA + KA \\approx 0$ (+ Δcadangan). Defisit CA ⇒ butuh aliran masuk neto.</div>
<div class="formula"><strong>UIP.</strong> $i = i^{*} + \\dfrac{E^{e}-E}{E} \\,(+\\,\\rho)$</div>
<div class="formula"><strong>Kurva BP:</strong> makin landai saat modal makin mobile; horizontal pada mobilitas sempurna.</div>
<table>
<thead><tr><th></th><th>Mengambang</th><th>Tetap</th></tr></thead>
<tbody>
<tr><td>Moneter ↑</td><td><span class="key">efektif</span></td><td>tdk efektif</td></tr>
<tr><td>Fiskal ↑</td><td>tdk efektif</td><td><span class="key">sangat efektif</span></td></tr>
</tbody>
</table>
<p>Intuisi: di rezim mengambang NT bergerak meniadakan/menguatkan kebijakan; di rezim tetap bank sentral kehilangan jumlah uang demi peg.</p>`
            },
            chart: MINI_MF
          },
          {
            title: { en: 'A2 · Trilemma, regimes & 1997–98', id: 'A2 · Trilema, rezim & 1997–98' },
            html: {
              en: `<p><strong>Impossible trinity:</strong> choose 2 of {free capital flow, fixed ER, monetary autonomy}.</p>
<p><strong>Regime spectrum:</strong> hard peg → soft peg (band/crawl) → managed float → free float.</p>
<p><strong>FDI vs hot money:</strong> FDI sticky/long; portfolio "hot money" reverses fast ⇒ sudden stops.</p>
<p><strong>1997–98 Asian crisis:</strong> pegged rupiah + large short-term USD debt + open capital account ⇒ speculative attack, peg broke, rupiah collapsed. Trilemma made explicit. Remedy mix: let ER float, capital-flow / macroprudential measures.</p>`,
              id: `<p><strong>Trinitas mustahil:</strong> pilih 2 dari {arus modal bebas, NT tetap, otonomi moneter}.</p>
<p><strong>Spektrum rezim:</strong> hard peg → soft peg (band/crawl) → managed float → free float.</p>
<p><strong>FDI vs hot money:</strong> FDI lengket/panjang; "hot money" portofolio berbalik cepat ⇒ sudden stop.</p>
<p><strong>Krisis Asia 1997–98:</strong> rupiah dipatok + utang USD jangka pendek besar + akun modal terbuka ⇒ serangan spekulatif, peg jebol, rupiah ambruk. Trilema nyata. Ramuan obat: biarkan NT mengambang, langkah arus modal / makroprudensial.</p>`
            },
            chart: MINI_TRILEMMA
          },
          {
            title: { en: 'A3 · Week 9 — Money creation & monetary policy', id: 'A3 · Minggu 9 — Penciptaan uang & kebijakan moneter' },
            html: {
              en: `<div class="formula"><strong>Multiplier.</strong> $M1 = mm\\cdot RM,\\quad mm = \\dfrac{1}{c + rr(1-c)}$</div>
<div class="formula"><strong>Fisher.</strong> $r = i - \\pi^{e}$ — deflation ⇒ real rate ↑ (1929–33).</div>
<div class="formula"><strong>Taylor (open).</strong> $i = i^{*} + \\phi_\\pi(\\pi-\\pi^{*}) + \\phi_y\\,\\text{gap} + \\phi_e\\,\\Delta\\text{NEER}$</div>
<p><strong>3 CB balance-sheet ops (+100):</strong> OMO (buy bonds), lending to banks, FX intervention.</p>
<p><strong>Sterilised intervention:</strong> inject base money, sell securities ⇒ M2↑ while M0 flat (BI–MoF burden sharing, COVID).</p>
<p><strong>Time inconsistency:</strong> discretion ⇒ inflation bias; credibility/IT (BI target 2.5%±1%) cures it.</p>`,
              id: `<div class="formula"><strong>Pengganda.</strong> $M1 = mm\\cdot RM,\\quad mm = \\dfrac{1}{c + rr(1-c)}$</div>
<div class="formula"><strong>Fisher.</strong> $r = i - \\pi^{e}$ — deflasi ⇒ suku bunga riil ↑ (1929–33).</div>
<div class="formula"><strong>Taylor (terbuka).</strong> $i = i^{*} + \\phi_\\pi(\\pi-\\pi^{*}) + \\phi_y\\,\\text{gap} + \\phi_e\\,\\Delta\\text{NEER}$</div>
<p><strong>3 operasi neraca BS (+100):</strong> OMO (beli obligasi), pinjaman ke bank, intervensi valas.</p>
<p><strong>Intervensi tersterilisasi:</strong> suntik uang primer, jual surat berharga ⇒ M2↑ sementara M0 datar (burden-sharing BI–Kemenkeu, COVID).</p>
<p><strong>Inkonsistensi waktu:</strong> diskresi ⇒ bias inflasi; kredibilitas/IT (target BI 2,5%±1%) menyembuhkannya.</p>`
            },
            chart: MINI_TAYLOR
          },
          {
            title: { en: 'A4 · Week 10 — Expectations, mismatch & SDM-FF', id: 'A4 · Minggu 10 — Ekspektasi, mismatch & SDM-FF' },
            html: {
              en: `<div class="formula"><strong>Phillips (exp-augmented).</strong> $\\pi_t = \\pi^{e} - \\alpha(u_t - u_n)$; vertical LRPC at $u_n$.</div>
<div class="formula"><strong>Okun.</strong> $(\\bar Y - Y)/\\bar Y = c\\,(u - \\bar u)$</div>
<div class="formula"><strong>Matching.</strong> $H = \\mu\\,V^{\\alpha} U^{1-\\alpha}$ (μ = matching efficiency)</div>
<p><strong>Beveridge curve:</strong> V vs u, downward; outward shift = worse matching / higher mismatch.</p>
<p><strong>Mismatch types:</strong> vertical (over/under-qualified), horizontal (wrong field), spatial.</p>
<p><strong>Indonesia:</strong> informal ≈56%, youth unemployment ~16%, BA+ unemployment rising (~6%); dismal productivity trend.</p>
<p><strong>SDM-FF:</strong> demand-only model incomplete ⇒ add supply (PF, GAP) + financial-friction wedge; stochastic eqns + identities, 3SLS, validated by RMSE.</p>`,
              id: `<div class="formula"><strong>Phillips (augmentasi-ekspektasi).</strong> $\\pi_t = \\pi^{e} - \\alpha(u_t - u_n)$; LRPC vertikal di $u_n$.</div>
<div class="formula"><strong>Okun.</strong> $(\\bar Y - Y)/\\bar Y = c\\,(u - \\bar u)$</div>
<div class="formula"><strong>Matching.</strong> $H = \\mu\\,V^{\\alpha} U^{1-\\alpha}$ (μ = efisiensi matching)</div>
<p><strong>Kurva Beveridge:</strong> V vs u, menurun; geser ke luar = matching memburuk / mismatch naik.</p>
<p><strong>Jenis mismatch:</strong> vertikal (over/under-kualifikasi), horizontal (salah bidang), spasial.</p>
<p><strong>Indonesia:</strong> informal ≈56%, pengangguran muda ~16%, pengangguran S1+ naik (~6%); tren produktivitas suram.</p>
<p><strong>SDM-FF:</strong> model murni-permintaan tak lengkap ⇒ tambah penawaran (PF, GAP) + baji friksi keuangan; persamaan stokastik + identitas, 3SLS, divalidasi RMSE.</p>`
            },
            chart: MINI_PHILLIPS
          },
          {
            title: { en: 'A5 · Two memory diagrams', id: 'A5 · Dua diagram ingatan' },
            html: {
              en: '<p>Left: the <span class="key">Beveridge curve</span> — vacancies V against unemployment u, shifting out when mismatch worsens. Pair it mentally with the matching function and Okun’s law for the Week-10 labour block.</p>',
              id: '<p>Kiri: <span class="key">kurva Beveridge</span> — lowongan V terhadap pengangguran u, bergeser keluar saat mismatch memburuk. Pasangkan dengan fungsi matching dan hukum Okun untuk blok tenaga kerja Minggu 10.</p>'
            },
            chart: MINI_BEVERIDGE
          }
        ]
      },

      /* ------------------------- SIDE B ------------------------- */
      {
        heading: { en: 'SIDE B · Weeks 11–14 — ER/BS, macpropru/MMT/DSGE, climate & synthesis', id: 'SISI B · Minggu 11–14 — NT/BS, makropru/MMT/DSGE, iklim & sintesis' },
        num: 'B',
        cards: [
          {
            title: { en: 'B1 · Week 11 — ER regimes & balance-sheet effects', id: 'B1 · Minggu 11 — Rezim NT & efek neraca' },
            html: {
              en: `<div class="formula"><strong>Real ER.</strong> $RER = \\dfrac{E\\cdot P^{*}}{P}$; effective = trade-weighted (NEER/REER).</div>
<p><strong>Regimes:</strong> de jure (declared) vs de facto (actual); "fear of floating".</p>
<p><strong>Fixed vs flexible:</strong> peg → credibility/low volatility but loses monetary autonomy & risks attack; float → autonomy & shock absorber but volatility.</p>
<p><strong>Balance-sheet effect:</strong> with FX debt, depreciation ↑ value of liabilities ⇒ net worth↓ ⇒ I↓.</p>
<div class="formula"><strong>Double mismatch:</strong> borrow short + in FX, earn long + in local currency.</div>
<p><strong>Contractionary depreciation:</strong> when the BS channel beats the NX channel ⇒ backward-bending AD; a weaker rupiah can lower Y (EM crises).</p>`,
              id: `<div class="formula"><strong>NT riil.</strong> $RER = \\dfrac{E\\cdot P^{*}}{P}$; efektif = tertimbang perdagangan (NEER/REER).</div>
<p><strong>Rezim:</strong> de jure (dideklarasikan) vs de facto (aktual); "fear of floating".</p>
<p><strong>Tetap vs fleksibel:</strong> peg → kredibilitas/volatilitas rendah tapi kehilangan otonomi moneter & rawan serangan; mengambang → otonomi & peredam guncangan tapi volatil.</p>
<p><strong>Efek neraca:</strong> dengan utang valas, depresiasi ↑ nilai kewajiban ⇒ kekayaan bersih↓ ⇒ I↓.</p>
<div class="formula"><strong>Double mismatch:</strong> pinjam pendek + valas, hasilkan panjang + mata uang lokal.</div>
<p><strong>Depresiasi kontraktif:</strong> saat kanal BS mengalahkan kanal NX ⇒ AD membengkok; rupiah lebih lemah bisa menurunkan Y (krisis negara berkembang).</p>`
            },
            chart: MINI_BACKBEND
          },
          {
            title: { en: 'B2 · Week 12 — Macroprudential, MMT, DSGE', id: 'B2 · Minggu 12 — Makroprudensial, MMT, DSGE' },
            html: {
              en: `<p><strong>Macroprudential:</strong> system-wide, leans against procyclical credit/asset booms. Tools: countercyclical capital buffer, LTV/DTI caps, reserve requirements. Targets the credit cycle, not one bank.</p>
<p><strong>MMT:</strong> a currency-issuing government is inflation-constrained, not revenue-constrained; taxes/bonds manage demand & drain reserves, not "fund" spending (functional finance). Critique: inflation & FX limits, especially for EMs.</p>
<p><strong>DSGE:</strong> micro-founded, optimising agents, rational expectations, nominal rigidities + shocks. Core: <span class="key">Euler equation</span> (consumption smoothing), NK Phillips curve, Taylor rule. Motivated by the <span class="key">Lucas critique</span>; criticised post-GFC for weak finance.</p>`,
              id: `<p><strong>Makroprudensial:</strong> sistem-luas, melawan boom kredit/aset prosiklis. Alat: buffer modal countercyclical, batas LTV/DTI, giro wajib. Menyasar siklus kredit, bukan satu bank.</p>
<p><strong>MMT:</strong> pemerintah penerbit mata uang dibatasi inflasi, bukan penerimaan; pajak/obligasi mengelola permintaan & menyerap cadangan, bukan "mendanai" belanja (functional finance). Kritik: batas inflasi & valas, terutama negara berkembang.</p>
<p><strong>DSGE:</strong> berfondasi mikro, agen pengoptimal, ekspektasi rasional, kekakuan nominal + guncangan. Inti: <span class="key">persamaan Euler</span> (pemerataan konsumsi), kurva Phillips NK, aturan Taylor. Dimotivasi <span class="key">kritik Lucas</span>; dikritik pasca-GFC karena lemah keuangan.</p>`
            },
            chart: MINI_MACPRU
          },
          {
            title: { en: 'B3 · Week 13 — Climate, crypto/CBDC', id: 'B3 · Minggu 13 — Iklim, kripto/CBDC' },
            html: {
              en: `<div class="formula"><strong>Climate as productivity drag.</strong> $Y = f(K,L,A(1-D(T))),\\; D = \\alpha T^{2}$ ⇒ AS shifts left/up.</div>
<div class="formula"><strong>Solow residual.</strong> $g_Y - \\alpha g_K - (1-\\alpha)g_N = (1-\\alpha)g_A$</div>
<p><strong>Azis–Salim (2005) CGE to 2050:</strong> Baseline 6.00 / BAU 5.32 / SC1 4.99 / <span class="key">SC2 6.20</span> — sustainability (SC2) gives the highest growth + lowest inflation.</p>
<p><strong>Carbon pricing / ETS:</strong> cap-and-trade; coverage rising (~7→13→23%); EU ETS the compliance benchmark.</p>
<p><strong>Crypto vs CBDC:</strong> crypto = decentralised, no issuer; CBDC = CB liability. Two-tier preserves intermediation; retail risks <span class="key">disintermediation</span>; synthetic CBDC = privately issued, reserve-backed. Money: loans create deposits (M2); $M^d=f(Y,i,\\phi\\,\\text{CBDCshare}+\\kappa\\,\\text{cryptovol})$.</p>`,
              id: `<div class="formula"><strong>Iklim sbg hambatan produktivitas.</strong> $Y = f(K,L,A(1-D(T))),\\; D = \\alpha T^{2}$ ⇒ AS geser kiri/atas.</div>
<div class="formula"><strong>Residu Solow.</strong> $g_Y - \\alpha g_K - (1-\\alpha)g_N = (1-\\alpha)g_A$</div>
<p><strong>CGE Azis–Salim (2005) hingga 2050:</strong> Baseline 6,00 / BAU 5,32 / SC1 4,99 / <span class="key">SC2 6,20</span> — keberlanjutan (SC2) beri pertumbuhan tertinggi + inflasi terendah.</p>
<p><strong>Harga karbon / ETS:</strong> cap-and-trade; cakupan naik (~7→13→23%); EU ETS tolok ukur kepatuhan.</p>
<p><strong>Kripto vs CBDC:</strong> kripto = terdesentralisasi, tanpa penerbit; CBDC = kewajiban BS. Dua-tingkat menjaga intermediasi; ritel berisiko <span class="key">disintermediasi</span>; CBDC sintetis = diterbitkan privat, dijamin cadangan. Uang: pinjaman menciptakan deposito (M2); $M^d=f(Y,i,\\phi\\,\\text{CBDCshare}+\\kappa\\,\\text{cryptovol})$.</p>`
            },
            chart: MINI_DAMAGE
          },
          {
            title: { en: 'B4 · Week 13 — Welfare, poverty & inequality', id: 'B4 · Minggu 13 — Kesejahteraan, kemiskinan & ketimpangan' },
            html: {
              en: `<div class="formula"><strong>Poverty rule.</strong> $\\alpha = \\varepsilon_{PL,P}, \\beta = \\varepsilon_{Y^{poor},Y};\\;\\; \\alpha<\\beta \\Rightarrow$ poverty WORSENS.</div>
<p><strong>Recovery & welfare:</strong> prefer a <span class="key">PC (supply-side) shock</span> to an AD shock — raises Y without the inflation that hits the poor; biggest gain when AD is flat.</p>
<p><strong>Formal vs non-formal IS–LM:</strong> ↓G or ↑Tᴴ shifts ISᶠ left ⇒ activity reshuffled into the informal sector (≈56–60% in Indonesia); contraction changes composition, not just level.</p>
<div class="formula"><strong>Piketty.</strong> $r>g \\Rightarrow$ wealth concentrates (centripetal beats centrifugal).</div>`,
              id: `<div class="formula"><strong>Aturan kemiskinan.</strong> $\\alpha = \\varepsilon_{PL,P}, \\beta = \\varepsilon_{Y^{poor},Y};\\;\\; \\alpha<\\beta \\Rightarrow$ kemiskinan MEMBURUK.</div>
<p><strong>Pemulihan & kesejahteraan:</strong> utamakan <span class="key">guncangan PC (sisi penawaran)</span> ketimbang AD — naikkan Y tanpa inflasi yang memukul miskin; gain terbesar saat AD datar.</p>
<p><strong>IS–LM formal vs non-formal:</strong> ↓G atau ↑Tᴴ menggeser ISᶠ kiri ⇒ aktivitas dialihkan ke sektor informal (≈56–60% di Indonesia); kontraksi mengubah komposisi, bukan hanya level.</p>
<div class="formula"><strong>Piketty.</strong> $r>g \\Rightarrow$ kekayaan memusat (sentripetal mengalahkan sentrifugal).</div>`
            },
            chart: MINI_WELFARE
          },
          {
            title: { en: 'B5 · Week 14 — The Workhorse synthesis', id: 'B5 · Minggu 14 — Sintesis Workhorse' },
            html: {
              en: `<p><strong>WH model = 5 markets:</strong> Goods (GM: $Y=C+I+G+EX-RER\\cdot IM$), Money (MM: $M/P=Y\\,L(i)$), ER/Financial/Capital (UIP, $P^{b}=V/(1+i)$), Labour (LM: $P=(1+\\mu)P^{e}F(1-Y/L,z)$).</p>
<div class="formula"><strong>SR/MR loop.</strong> growth ↔ AD; Okun $(\\bar Y-Y)/\\bar Y=c(u-\\bar u)$; Phillips $\\pi_t-\\pi_{t-1}=-\\alpha(u_t-u_n)$.</div>
<div class="formula"><strong>LR loop.</strong> $K_t-(1-\\delta)K_{t-1}=I,\\; I=S=sY,\\; Y=A\\,F(K,N)$ (TFP=A).</div>
<p><strong>Three-pronged:</strong> simple model → integrated model → emerging issues, applied to Indonesia.</p>
<p><strong>Exam mantra:</strong> the WH model is about <span class="key">interactions across markets</span>, not single curves; emphasise mechanisms & anomalies (financial frictions, contagion, β–S effect, liquidity trap, risk premium). Answer briefly — verbosity loses marks.</p>`,
              id: `<p><strong>Model WH = 5 pasar:</strong> Barang (GM: $Y=C+I+G+EX-RER\\cdot IM$), Uang (MM: $M/P=Y\\,L(i)$), NT/Finansial/Kapital (UIP, $P^{b}=V/(1+i)$), Tenaga Kerja (LM: $P=(1+\\mu)P^{e}F(1-Y/L,z)$).</p>
<div class="formula"><strong>Loop SR/MR.</strong> pertumbuhan ↔ AD; Okun $(\\bar Y-Y)/\\bar Y=c(u-\\bar u)$; Phillips $\\pi_t-\\pi_{t-1}=-\\alpha(u_t-u_n)$.</div>
<div class="formula"><strong>Loop LR.</strong> $K_t-(1-\\delta)K_{t-1}=I,\\; I=S=sY,\\; Y=A\\,F(K,N)$ (TFP=A).</div>
<p><strong>Tiga cabang:</strong> model sederhana → model terintegrasi → isu baru, diterapkan pada Indonesia.</p>
<p><strong>Mantra ujian:</strong> model WH soal <span class="key">interaksi antar-pasar</span>, bukan kurva tunggal; tekankan mekanisme & anomali (friksi keuangan, contagion, efek β–S, jebakan likuiditas, premi risiko). Jawab ringkas — bertele-tele mengurangi nilai.</p>`
            },
            chart: MINI_WH
          }
        ]
      }
    ]
  };
})();
