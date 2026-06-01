/* ============================================================================
   MAKRO · UAS review + final — model answers (bilingual)
   Built from the two UAS review decks the lecturer (TA IJA, Prof. Iwan Azis,
   UI · FEB) used to revise for the final, plus the Week 8–14 material.

   Source decks (read page by page):
     • "Review Makro / TA IJA" — Review UAS 1 (11 slides): the open-economy /
       capital-flow block. Z = C+I+G−IM/ε+EX national-income identity and the
       NX–ZZ diagram; Balance of Payments (current / financial / capital
       accounts); the inflow→appreciation→CA-deficit channel chain
       (Marshall–Lerner, J-curve); Uncovered Interest Parity (UIP) with a worked
       Indonesia-vs-US numerical (BI 6.25%, Fed 4.00%, spot 16,500 Rp/$ → Eᵉ ≈
       16,871; market view 17,200 ⇒ Rp depreciates today); the Mundell–Fleming
       2×2 (IS–LM + IP) "rate hike ⇒ Y↓ AND E↓" diagram; Mundell–Fleming under a
       FIXED exchange rate (monetary neutered, fiscal maximally effective); the
       Impossible Trinity / policy trilemma; and a regression / residuals
       appendix (a Taylor-rule-style OLS coefficient table + residual histogram).
     • Review UAS 2 (6 handwritten tutorial pages): the monetary block. Q1 — why
       the textbook money multiplier "doesn't work like the book says" for Bank
       Indonesia (money-multiplier vs endogenous-money / post-Keynesian view;
       mm = (1+c)/(rr+re+c); confidence-collapse case c↑, re↑ ⇒ mm↓ ⇒ M↓);
       Q2 — the standard Taylor rule i = r*+π+α(π−π*)+β(Y−Ȳ) with two scenarios
       (π high / positive output gap ⇒ hike; π below target ⇒ cut) and the
       augmented / financial-stability Taylor rule (LTV, countercyclical capital
       buffer, lean-against-the-wind); Q3 — the 4-quadrant AS–AD distributional
       diagram (heterogeneous-agent / HANK-style: a shock hits the poor harder
       because their price level P_poor and slope differ from the rich).

   ⚠ The reviews state the STRUCTURE of the final (essay, ~4 topics @ ~25%) and
   walk through worked problems, but they do NOT print the four final questions
   verbatim. The `final` object below therefore poses FOUR faithful, representative
   essay questions, each anchored explicitly in the review-deck content and the
   Week 8–14 lectures, with full worked model answers in the lecturer's
   analytical-essay recipe (intro+thesis → theory benchmark → alternative/nuance
   → empirics → conclusion+policy). No official answer key exists; answers are
   unofficial model answers. EconChart specs compute equilibria from the line
   equations, so shifts are correct by construction.
   ============================================================================ */
(function () {
  window.MAKRO_EXAMS = window.MAKRO_EXAMS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';

  /* =========================================================================
     CHART SPECS
     ========================================================================= */

  /* ---- R1: NX–ZZ goods-market diagram (trade deficit at Y_TB) ------------- */
  var NX_ZZ = { panels: [
    { title: '(a) Demand for domestic goods ZZ vs 45°',
      w: 360, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: 0, max: 10, label: 'Demand Z' },
      curves: [
        { id: '45',  kind: 'line', p1: [0, 0],   p2: [10, 10], color: '#999', label: '45° (Z=Y)' },
        { id: 'ZZ',  kind: 'line', p1: [0, 1.5], p2: [10, 9.5], color: TEAL,  label: 'ZZ' }
      ],
      points: [ { on: ['45', 'ZZ'], guideX: 'Y*', dot: true, label: 'A' } ],
      notes: [ { x: 7.0, y: 3.0, text: 'slope ZZ < 1 (imports leak)', color: '#777', anchor: 'middle', size: 9 } ] },
    { title: '(b) Net exports NX(Y, ε) — deficit at Y_TB',
      w: 360, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: -3, max: 3, label: 'Net exports NX' },
      curves: [
        { id: 'zero', kind: 'hline', y: 0, color: '#999' },
        { id: 'NX',   kind: 'line', p1: [0, 2.2], p2: [10, -2.4], color: RED, label: 'NX' },
        { id: 'YTB',  kind: 'vline', x: 6.7, color: AMBER, label: 'Y_TB' }
      ],
      points: [ { onCurve: 'NX', atX: 8.2, label: 'deficit', dot: true } ],
      notes: [ { x: 8.6, y: -2.4, text: 'trade deficit (Y > Y_TB)', color: RED, anchor: 'middle', size: 9 } ] }
  ] };

  /* ---- R1: capital-inflow channel chain (bars as a flow strip) ----------- */
  var INFLOW_CHAIN = {
    title: 'Capital inflow ⇒ appreciation ⇒ CA-deficit ⇒ depreciation pressure',
    w: 720, h: 150, kind: 'bars',
    bars: [
      { label: 'Inflows↑', value: 5, color: GREEN },
      { label: 'Rp appreciates', value: 5, color: TEAL },
      { label: 'X↓ M↑', value: 5, color: BLUE },
      { label: 'CA deficit↑', value: 5, color: LINE },
      { label: 'Deprec. pressure', value: 5, color: RED }
    ]
  };

  /* ---- R1: Mundell–Fleming 2×2, rate hike ⇒ Y↓ and E↓ -------------------- */
  var MF_HIKE = { panels: [
    { title: '(a) IS–LM: LM↑ ⇒ higher i, lower Y',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: 0, max: 10, label: 'Interest i' },
      curves: [
        { id: 'IS',  kind: 'line',  p1: [0, 9], p2: [10, 1], color: TEAL, label: 'IS' },
        { id: 'LM',  kind: 'hline', y: 4, color: LINE, label: 'LM' },
        { id: 'LM2', kind: 'hline', y: 6.5, color: RED, label: "LM' (i↑)", dash: true }
      ],
      points: [
        { on: ['IS', 'LM'],  guideX: 'Y₀', dot: true, label: 'A' },
        { on: ['IS', 'LM2'], guideX: 'Y₁', dot: true, label: "A'" }
      ],
      notes: [ { x: 3.0, y: 8.5, text: 'i↑ ⇒ I↓ ⇒ Y↓', color: RED, anchor: 'middle', size: 9 } ] },
    { title: '(b) IP curve: higher i ⇒ lower E (Rp appreciates)',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Exchange rate E (Rp/$)' }, y: { min: 0, max: 10, label: 'Interest i' },
      curves: [
        { id: 'IP', kind: 'line', p1: [0, 9.5], p2: [10, 0.5], color: VIOLET, label: 'IP (UIP locus)' }
      ],
      points: [
        { onCurve: 'IP', atY: 4,   guideX: 'E₀', dot: true, label: 'B' },
        { onCurve: 'IP', atY: 6.5, guideX: 'E₁', dot: true, label: "B'" }
      ],
      notes: [ { x: 6.5, y: 8.6, text: 'i↑ ⇒ move up IP ⇒ E↓', color: VIOLET, anchor: 'middle', size: 9 } ] }
  ] };

  /* ---- R1: Impossible Trinity triangle (as a path triangle) -------------- */
  var TRILEMMA = {
    title: 'The Impossible Trinity — pick any two',
    w: 460, h: 320, x: { min: 0, max: 10, label: '' }, y: { min: 0, max: 10, label: '' },
    curves: [
      { kind: 'path', pts: [[5, 9], [1, 1], [9, 1], [5, 9]], color: LINE, label: '' },
      { kind: 'line', p1: [5, 9], p2: [5, 1], color: '#bbb', dash: true }
    ],
    points: [
      { at: [5, 9], label: 'Free capital mobility', dot: true },
      { at: [1, 1], label: 'ER stability', dot: true },
      { at: [9, 1], label: 'Monetary independence', dot: true }
    ],
    notes: [
      { x: 2.4, y: 5.4, text: 'A: closed account + fixed ER', color: '#777', anchor: 'middle', size: 8 },
      { x: 7.6, y: 5.4, text: 'B: open + float (US/UK)', color: '#777', anchor: 'middle', size: 8 },
      { x: 5.0, y: 0.3, text: 'C: open + fixed (HK board / euro)', color: '#777', anchor: 'middle', size: 8 }
    ]
  };

  /* ---- R2: money multiplier collapse (bars: textbook vs stressed) -------- */
  var MM_COLLAPSE = {
    title: 'Money multiplier mm = (1+c)/(rr+re+c): confidence collapse shrinks it',
    w: 520, h: 220, kind: 'bars',
    bars: [
      { label: 'mm textbook (low c, re)', value: 4.5, color: TEAL },
      { label: 'mm stressed (c↑, re↑)',   value: 1.7, color: RED }
    ]
  };

  /* ---- R2: Taylor rule — policy rate vs inflation gap (two scenarios) ---- */
  var TAYLOR = {
    title: 'Standard Taylor rule  i = r*+π+α(π−π*)+β(Y−Ȳ)',
    w: 460, h: 280, x: { min: 0, max: 8, label: 'Inflation π (%)' }, y: { min: 0, max: 14, label: 'Policy rate i (%)' },
    curves: [
      { id: 'TR',  kind: 'line',  p1: [0, 2], p2: [8, 14], color: BLUE, label: 'Taylor prescription' },
      { id: 'pi*', kind: 'vline', x: 3, color: '#999', label: 'π* = 3%' }
    ],
    points: [
      { onCurve: 'TR', atX: 6, guideY: 'hike', dot: true, label: 'S1: π=6%, gap+ ⇒ hike' },
      { onCurve: 'TR', atX: 2, guideY: 'cut',  dot: true, label: 'S2: π=2% ⇒ cut' }
    ],
    notes: [ { x: 5.4, y: 4.0, text: 'react > 1-for-1 to π (Taylor principle: α>0)', color: '#777', anchor: 'middle', size: 9 } ]
  };

  /* ---- R2: 4-quadrant heterogeneous-agent AS–AD distributional diagram --- */
  var HANK_4Q = { panels: [
    { title: '(a) Rich household: AD–AS, small price-level move',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output / consumption' }, y: { min: 0, max: 10, label: 'Price level P_rich' },
      curves: [
        { id: 'AD',  kind: 'line', p1: [0, 9], p2: [10, 2], color: TEAL, label: 'AD' },
        { id: 'AD2', kind: 'line', p1: [0, 7], p2: [10, 0], color: '#9bc7d6', label: "AD' (shock)", dash: true },
        { id: 'AS',  kind: 'line', p1: [0, 1], p2: [10, 9], color: LINE, label: 'AS (steep)' }
      ],
      points: [
        { on: ['AD', 'AS'],  guideY: 'P₀', dot: true },
        { on: ['AD2', 'AS'], guideY: 'P₁', dot: true }
      ],
      notes: [ { x: 6.5, y: 8.5, text: 'small ΔP, modest ΔY', color: '#777', anchor: 'middle', size: 9 } ] },
    { title: '(b) Poor household: same shock, bigger welfare hit',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output / consumption' }, y: { min: 0, max: 10, label: 'Price level P_poor' },
      curves: [
        { id: 'AD',  kind: 'line', p1: [0, 9], p2: [10, 2], color: RED, label: 'AD' },
        { id: 'AD2', kind: 'line', p1: [0, 7], p2: [10, 0], color: '#e2a39a', label: "AD' (shock)", dash: true },
        { id: 'AS',  kind: 'line', p1: [0, 1], p2: [10, 5], color: LINE, label: 'AS (flat: hand-to-mouth)' }
      ],
      points: [
        { on: ['AD', 'AS'],  guideY: 'P₀', dot: true },
        { on: ['AD2', 'AS'], guideY: 'P₁', dot: true }
      ],
      notes: [ { x: 6.0, y: 8.5, text: 'flatter AS ⇒ larger ΔY, deeper hit', color: RED, anchor: 'middle', size: 9 } ] }
  ] };

  /* ---- Final Q1: UIP arbitrage (worked) ---------------------------------- */
  var Q1_UIP = {
    title: 'UIP: expected vs market depreciation ⇒ direction of capital flow',
    w: 520, h: 260, x: { min: 0, max: 5, label: 'Depreciation (%)' }, y: { min: 0, max: 6, label: '' },
    kind: 'bars',
    bars: [
      { label: 'UIP-required (i−i* = 2.25%)', value: 2.25, color: TEAL },
      { label: 'Market-expected (4.24%)',      value: 4.24, color: RED }
    ]
  };

  /* ---- Final Q2: MF flexible vs fixed ER --------------------------------- */
  var Q2_MF = { panels: [
    { title: '(a) Floating ER: monetary policy works (i↓ ⇒ Y↑, E↑)',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: 0, max: 10, label: 'Interest i' },
      curves: [
        { id: 'IS',  kind: 'line',  p1: [0, 9], p2: [10, 1], color: TEAL, label: 'IS' },
        { id: 'LM',  kind: 'hline', y: 6, color: LINE, label: 'LM (i=i*)' },
        { id: 'LM2', kind: 'hline', y: 4, color: GREEN, label: "LM' (M↑)", dash: true }
      ],
      points: [
        { on: ['IS', 'LM'],  guideX: 'Y₀', dot: true },
        { on: ['IS', 'LM2'], guideX: 'Y₁', dot: true }
      ],
      notes: [ { x: 3.0, y: 8.6, text: 'E↑ adds to NX ⇒ Y↑↑', color: GREEN, anchor: 'middle', size: 9 } ] },
    { title: '(b) Fixed ER: monetary neutered (M↑ reverses to defend peg)',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: 0, max: 10, label: 'Interest i' },
      curves: [
        { id: 'IS',  kind: 'line',  p1: [0, 9], p2: [10, 1], color: TEAL, label: 'IS' },
        { id: 'LM',  kind: 'hline', y: 6, color: LINE, label: 'LM = LM (back to i*)' }
      ],
      points: [ { on: ['IS', 'LM'], guideX: 'Y₀', dot: true, label: 'no Δ in Y' } ],
      notes: [ { x: 5.0, y: 3.0, text: 'M↑ ⇒ capital out ⇒ CB sells $ ⇒ M↓ back', color: RED, anchor: 'middle', size: 8 } ] }
  ] };

  /* ---- Final Q3: Taylor standard vs augmented ---------------------------- */
  var Q3_TAYLOR = TAYLOR;

  /* ---- Final Q4: contractionary depreciation (balance-sheet) ------------- */
  var Q4_BS = { panels: [
    { title: '(a) Textbook: depreciation is expansionary (NX↑ ⇒ AD↑)',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: 0, max: 10, label: 'Price level P' },
      curves: [
        { id: 'AS',  kind: 'line', p1: [0, 1], p2: [10, 9], color: LINE, label: 'AS' },
        { id: 'AD',  kind: 'line', p1: [0, 7], p2: [10, 1], color: TEAL, label: 'AD' },
        { id: 'AD2', kind: 'line', p1: [0, 9], p2: [10, 3], color: GREEN, label: "AD' (NX↑)", dash: true }
      ],
      points: [
        { on: ['AD', 'AS'],  guideX: 'Y₀', dot: true },
        { on: ['AD2', 'AS'], guideX: 'Y₁', dot: true }
      ],
      notes: [ { x: 7.0, y: 8.6, text: 'expenditure-switching ⇒ Y↑', color: GREEN, anchor: 'middle', size: 9 } ] },
    { title: '(b) EM with $-debt: balance-sheet effect ⇒ Y↓',
      w: 340, h: 250, x: { min: 0, max: 10, label: 'Output Y' }, y: { min: 0, max: 10, label: 'Price level P' },
      curves: [
        { id: 'AS',  kind: 'line', p1: [0, 1], p2: [10, 9], color: LINE, label: 'AS' },
        { id: 'AD',  kind: 'line', p1: [0, 7], p2: [10, 1], color: RED, label: 'AD' },
        { id: 'AD2', kind: 'line', p1: [0, 5], p2: [10, -1], color: '#e2a39a', label: "AD' (net worth↓, I↓)", dash: true }
      ],
      points: [
        { on: ['AD', 'AS'],  guideX: 'Y₀', dot: true },
        { on: ['AD2', 'AS'], guideX: 'Y₁', dot: true }
      ],
      notes: [ { x: 6.5, y: 8.6, text: 'debt in $ ⇒ liabilities↑ ⇒ I↓ dominates', color: RED, anchor: 'middle', size: 8 } ] }
  ] };


  /* =========================================================================
     REVIEW 1 — open-economy / capital-flow block (typed deck)
     ========================================================================= */
  window.MAKRO_EXAMS.review1 = {
    year: 'r1',
    label: { en: 'UAS Review — Session 1', id: 'Review UAS — Sesi 1' },
    note: {
      en: 'Session 1 (TA IJA) revises the open-economy half of Week 8: the national-income identity for an open economy, the Balance of Payments, the capital-inflow → appreciation → current-account channel, Uncovered Interest Parity (UIP) with a worked Indonesia-vs-US numerical, the Mundell–Fleming 2×2 diagram under floating and fixed exchange rates, and the policy trilemma. The deck closes with a Taylor-rule-style regression appendix (an OLS coefficient table and a residual histogram). Each item below carries a worked model answer.',
      id: 'Sesi 1 (TA IJA) mengulang paruh ekonomi terbuka Minggu 8: identitas pendapatan nasional ekonomi terbuka, Neraca Pembayaran, kanal arus modal masuk → apresiasi → transaksi berjalan, Uncovered Interest Parity (UIP) dengan contoh numerik Indonesia-vs-AS, diagram Mundell–Fleming 2×2 di bawah nilai tukar mengambang dan tetap, serta trilema kebijakan. Deck ditutup dengan lampiran regresi bergaya aturan Taylor (tabel koefisien OLS dan histogram residual). Tiap butir di bawah disertai jawaban model terurai.'
    },
    sections: [
      { kind: 'essay',
        label: { en: 'Topics & guidance — open-economy identities, BoP & channels', id: 'Topik & panduan — identitas ekonomi terbuka, NP & kanal' },
        questions: [
          { n: 1,
            q: { en: '<p><strong>The open-economy national-income identity and the NX–ZZ diagram.</strong> Write the goods-market identity for an open economy, define the real exchange rate, and show with the ZZ / net-exports diagram what it means for the economy to sit at an output level where the trade balance is in deficit.</p>',
                 id: '<p><strong>Identitas pendapatan nasional ekonomi terbuka dan diagram NX–ZZ.</strong> Tuliskan identitas pasar barang untuk ekonomi terbuka, definisikan nilai tukar riil, dan tunjukkan dengan diagram ZZ / ekspor neto apa artinya perekonomian berada pada tingkat output di mana neraca perdagangan defisit.</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slide "Equilibrium Output and Net Exports")</div>'
                + '<p><strong>Identity.</strong> Demand for domestic goods is</p>'
                + '<div class="formula">$Z = C + I + G - \\dfrac{IM}{\\varepsilon} + EX$</div>'
                + '<p>and in equilibrium output equals that demand:</p>'
                + '<div class="formula">$Y = C(Y-T) + I(Y,r) + G - \\dfrac{IM(Y,\\varepsilon)}{\\varepsilon} + EX(Y^{*},\\varepsilon).$</div>'
                + '<p>Imports are deflated by the real exchange rate and exports depend on foreign income $Y^{*}$ and on $\\varepsilon$. The <span class="key">real exchange rate</span> is</p>'
                + '<div class="formula">$\\varepsilon = \\dfrac{E\\cdot P^{*}}{P}$</div>'
                + '<p>where $E$ is the nominal rate (Rp/$), $P$ the domestic and $P^{*}$ the foreign price level. A rise in $\\varepsilon$ (real depreciation) makes home goods cheaper, so $EX\\uparrow$, $IM\\downarrow$ and net exports rise — the "+" sign the deck flags.</p>'
                + '<p><strong>Diagram.</strong> Plot demand $Z$ against output $Y$. The ZZ line has slope below the 45° line because part of every extra rupiah of income leaks into imports. Equilibrium output $Y^{*}$ is where $ZZ$ crosses the 45° line (point A). The net-export schedule $NX(Y,\\varepsilon)$ is downward-sloping in $Y$: higher income pulls in imports. Where $NX = 0$ defines the trade-balancing output $Y_{TB}$. <span class="key">If equilibrium output $Y^{*}$ lies to the right of $Y_{TB}$, the economy runs a trade deficit</span> — domestic demand is high enough that imports exceed exports. This is the case the deck draws (the shaded gap below the zero line).</p>',
              id: '<div class="note">(jawaban model — slide deck "Equilibrium Output and Net Exports")</div>'
                + '<p><strong>Identitas.</strong> Permintaan barang domestik:</p>'
                + '<div class="formula">$Z = C + I + G - \\dfrac{IM}{\\varepsilon} + EX$</div>'
                + '<p>dan dalam ekuilibrium output sama dengan permintaan tersebut:</p>'
                + '<div class="formula">$Y = C(Y-T) + I(Y,r) + G - \\dfrac{IM(Y,\\varepsilon)}{\\varepsilon} + EX(Y^{*},\\varepsilon).$</div>'
                + '<p>Impor dibagi nilai tukar riil; ekspor bergantung pada pendapatan asing $Y^{*}$ dan $\\varepsilon$. <span class="key">Nilai tukar riil</span>:</p>'
                + '<div class="formula">$\\varepsilon = \\dfrac{E\\cdot P^{*}}{P}$</div>'
                + '<p>$E$ nilai tukar nominal (Rp/$), $P$ harga domestik, $P^{*}$ harga asing. Kenaikan $\\varepsilon$ (depresiasi riil) membuat barang domestik lebih murah, sehingga $EX\\uparrow$, $IM\\downarrow$, ekspor neto naik — tanda "+" yang disorot deck.</p>'
                + '<p><strong>Diagram.</strong> Gambarkan permintaan $Z$ terhadap output $Y$. Garis ZZ berkemiringan di bawah garis 45° karena sebagian tambahan pendapatan bocor ke impor. Output ekuilibrium $Y^{*}$ di perpotongan $ZZ$ dengan 45° (titik A). Jadwal ekspor neto $NX(Y,\\varepsilon)$ menurun terhadap $Y$. Di mana $NX = 0$ menentukan output penyeimbang perdagangan $Y_{TB}$. <span class="key">Jika output ekuilibrium $Y^{*}$ berada di kanan $Y_{TB}$, perekonomian defisit perdagangan</span> — itulah kasus yang digambar deck.</p>',
            },
            aChart: NX_ZZ },

          { n: 2,
            q: { en: '<p><strong>Balance of Payments.</strong> Name the three accounts of the Balance of Payments and say what each records. Why must the overall balance (net errors and omissions aside) sum to zero?</p>',
                 id: '<p><strong>Neraca Pembayaran.</strong> Sebutkan tiga akun Neraca Pembayaran dan apa yang dicatat masing-masing. Mengapa keseluruhan neraca (selain net errors and omissions) harus berjumlah nol?</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slide "Balance of Payment")</div>'
                + '<p>The Balance of Payments records a country\'s trade (exports and imports) and its investment (FDI and portfolio) with the rest of the world. It has three accounts:</p>'
                + '<ul>'
                + '<li><span class="key">Current account</span> — flows of goods and services (the trade balance) plus primary income (income receipts/payments) and secondary income (transfers). A deficit here means the country spends more abroad than it earns.</li>'
                + '<li><span class="key">Financial account</span> — flows of <em>financial</em> assets (financial capital): net acquisition of foreign financial assets and net incurrence of liabilities, including official reserve assets, FDI and portfolio flows.</li>'
                + '<li><span class="key">Capital account</span> — flows of special categories of assets: typically non-market, non-produced or intangible assets such as debt forgiveness, copyrights and trademarks (small in practice).</li>'
                + '</ul>'
                + '<p>By construction the BoP is double-entry, so the three accounts sum to (approximately) zero: $\\text{CA} + \\text{KA} + \\text{FA} = 0$ up to net errors and omissions. A current-account deficit must be financed by a financial-account surplus (borrowing from / selling assets to abroad, or running down reserves). This is the accounting twin of the <span class="key">CA = S − I</span> identity used later in the deck.</p>',
              id: '<div class="note">(jawaban model — slide deck "Balance of Payment")</div>'
                + '<p>Neraca Pembayaran mencatat perdagangan (ekspor & impor) dan investasi (FDI & portofolio) sebuah negara dengan dunia luar. Tiga akun:</p>'
                + '<ul>'
                + '<li><span class="key">Transaksi berjalan (current account)</span> — arus barang & jasa (neraca perdagangan) plus pendapatan primer dan transfer sekunder. Defisit berarti negara membelanjakan lebih banyak ke luar daripada yang diperolehnya.</li>'
                + '<li><span class="key">Transaksi finansial (financial account)</span> — arus aset finansial (modal finansial): akuisisi neto aset finansial asing dan penambahan neto kewajiban, termasuk cadangan resmi, FDI, dan arus portofolio.</li>'
                + '<li><span class="key">Transaksi modal (capital account)</span> — arus kategori aset khusus: aset non-pasar, non-produksi, atau tak berwujud seperti pengampunan utang, hak cipta, dan merek dagang (kecil dalam praktik).</li>'
                + '</ul>'
                + '<p>Karena pembukuan berpasangan, ketiga akun berjumlah (kira-kira) nol: $\\text{CA} + \\text{KA} + \\text{FA} = 0$ hingga net errors and omissions. Defisit transaksi berjalan harus dibiayai surplus transaksi finansial (meminjam/menjual aset ke luar negeri, atau menguras cadangan). Ini kembaran akuntansi dari identitas <span class="key">CA = S − I</span>.</p>',
            } },

          { n: 3,
            q: { en: '<p><strong>The capital-inflow channel.</strong> Trace, step by step, how a surge of capital inflows works through the exchange rate to net exports and the current account, and explain the two warnings the deck attaches: the Marshall–Lerner condition and the J-curve.</p>',
                 id: '<p><strong>Kanal arus modal masuk.</strong> Telusuri langkah demi langkah bagaimana lonjakan arus modal masuk bekerja lewat nilai tukar ke ekspor neto dan transaksi berjalan, serta jelaskan dua peringatan deck: kondisi Marshall–Lerner dan kurva-J.</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slide "Effects on Exports, Imports & Current Account")</div>'
                + '<p>The chain the deck draws is: <strong>capital inflows ↑ → Rp appreciates → exports ↓, imports ↑ → current-account deficit widens → eventual depreciation pressure</strong>. The channel table summarises the signs:</p>'
                + '<table><tr><th>Channel</th><th>Inflows ↑</th><th>Exam hook</th></tr>'
                + '<tr><td>Exchange rate E</td><td>appreciate</td><td>sign of ΔE depends which curve shifts</td></tr>'
                + '<tr><td>Net exports NX</td><td>↓</td><td>volume vs value — watch Marshall–Lerner</td></tr>'
                + '<tr><td>Current account</td><td>deficit widens</td><td>CA = S − I still holds</td></tr>'
                + '<tr><td>Price level P</td><td>↑ via Mˢ if unsterilised</td><td>both directions can raise P</td></tr>'
                + '<tr><td>Reserves</td><td>↑ if CB defends (buys $)</td><td>reserves ≠ wealth (offsetting liability)</td></tr></table>'
                + '<p><span class="key">Marshall–Lerner</span>: a depreciation improves NX only if the sum of the export and import demand elasticities exceeds one ($|\\eta_X| + |\\eta_M| > 1$); otherwise the price (value) effect dominates the volume effect and NX can worsen. <span class="key">J-curve</span>: even when Marshall–Lerner holds, in the short run quantities are sticky (contracts, order lags), so a depreciation first <em>worsens</em> NX (imports cost more immediately) before volumes adjust and NX improves — tracing a "J" over time.</p>',
              id: '<div class="note">(jawaban model — slide deck "Effects on Exports, Imports & Current Account")</div>'
                + '<p>Rantai yang digambar deck: <strong>arus modal masuk ↑ → Rp apresiasi → ekspor ↓, impor ↑ → defisit transaksi berjalan melebar → tekanan depresiasi pada akhirnya</strong>. Tabel kanal merangkum tandanya:</p>'
                + '<table><tr><th>Kanal</th><th>Inflow ↑</th><th>Kait ujian</th></tr>'
                + '<tr><td>Nilai tukar E</td><td>apresiasi</td><td>tanda ΔE tergantung kurva mana yang bergeser</td></tr>'
                + '<tr><td>Ekspor neto NX</td><td>↓</td><td>volume vs nilai — perhatikan Marshall–Lerner</td></tr>'
                + '<tr><td>Transaksi berjalan</td><td>defisit melebar</td><td>CA = S − I tetap berlaku</td></tr>'
                + '<tr><td>Tingkat harga P</td><td>↑ via Mˢ bila tak disterilkan</td><td>kedua arah bisa menaikkan P</td></tr>'
                + '<tr><td>Cadangan devisa</td><td>↑ bila BS membela (beli $)</td><td>cadangan ≠ kekayaan (ada kewajiban penyeimbang)</td></tr></table>'
                + '<p><span class="key">Marshall–Lerner</span>: depresiasi memperbaiki NX hanya jika jumlah elastisitas permintaan ekspor dan impor melebihi satu ($|\\eta_X| + |\\eta_M| > 1$); jika tidak, efek harga (nilai) mengalahkan efek volume dan NX bisa memburuk. <span class="key">Kurva-J</span>: bahkan saat Marshall–Lerner terpenuhi, dalam jangka pendek kuantitas lengket (kontrak, jeda pesanan), sehingga depresiasi awalnya <em>memperburuk</em> NX sebelum volume menyesuaikan — membentuk huruf "J" sepanjang waktu.</p>',
            },
            aChart: INFLOW_CHAIN },

          { n: 4,
            q: { en: '<p><strong>UIP — worked numerical (Indonesia vs United States).</strong> Given the BI rate $i = 6.25\\%$, the Fed rate $i^{*} = 4.00\\%$ and spot $E_t = 16{,}500$ Rp/$: (a) what expected rate $E^{e}$ does UIP imply in one year? (b) If the market instead expects $E^{e} = 17{,}200$, is there an arbitrage opportunity, and which way does capital flow?</p>',
                 id: '<p><strong>UIP — soal numerik (Indonesia vs Amerika Serikat).</strong> Diberikan suku bunga BI $i = 6{,}25\\%$, suku bunga Fed $i^{*} = 4{,}00\\%$, dan spot $E_t = 16{.}500$ Rp/$: (a) berapa $E^{e}$ yang diimplikasikan UIP dalam satu tahun? (b) Jika pasar justru mengharapkan $E^{e} = 17{.}200$, apakah ada peluang arbitrase, dan ke arah mana modal mengalir?</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slides "UIP" and "UIP — Worked Numerical Problem")</div>'
                + '<p><strong>The parity condition.</strong> Uncovered interest parity says the domestic rate equals the foreign rate plus expected depreciation of the home currency:</p>'
                + '<div class="formula">$i_t = i_t^{*} + \\dfrac{E^{e}_{t+1} - E_t}{E_t}.$</div>'
                + '<p>(With the Rp/$ convention, $E^{e} > E$ means the rupiah is expected to depreciate, so $i$ must exceed $i^{*}$ to keep both bonds equally attractive. The risk-neutral version above becomes the "augmented UIP" $i = i^{*} + (E^{e}-E)/E + \\rho$ once a risk premium $\\rho$ is added.)</p>'
                + '<p><strong>(a) Back out the UIP-implied $E^{e}$.</strong> Required expected depreciation $= i - i^{*} = 6.25\\% - 4.00\\% = 2.25\\%$. Hence</p>'
                + '<div class="formula">$E^{e} = E_t(1 + 0.0225) = 16{,}500 \\times 1.0225 \\approx \\mathbf{16{,}871\\ \\text{Rp/\\$}}.$</div>'
                + '<p>For the rupiah and dollar bonds to yield the same expected return, the market should expect the rupiah to weaken to about 16,871.</p>'
                + '<p><strong>(b) Compare with the market view 17,200.</strong> The market\'s implied depreciation is $(17{,}200 - 16{,}500)/16{,}500 = 4.24\\%$, but UIP only requires 2.25%. The market expects <em>more</em> rupiah depreciation than the interest differential compensates for. So the expected return on a dollar deposit exceeds that on a rupiah deposit:</p>'
                + '<div class="tip">Arbitrage: capital flows OUT of rupiah into dollars, so the rupiah depreciates today (E rises now until the expected future depreciation falls back to 2.25%).</div>',
              id: '<div class="note">(jawaban model — slide deck "UIP" dan "UIP — Worked Numerical Problem")</div>'
                + '<p><strong>Kondisi paritas.</strong> Uncovered interest parity: suku bunga domestik = suku bunga asing + ekspektasi depresiasi mata uang domestik:</p>'
                + '<div class="formula">$i_t = i_t^{*} + \\dfrac{E^{e}_{t+1} - E_t}{E_t}.$</div>'
                + '<p>(Dengan konvensi Rp/$, $E^{e} > E$ berarti rupiah diperkirakan melemah, jadi $i$ harus melebihi $i^{*}$. Versi netral-risiko menjadi "augmented UIP" $i = i^{*} + (E^{e}-E)/E + \\rho$ setelah premi risiko $\\rho$ ditambahkan.)</p>'
                + '<p><strong>(a) Hitung $E^{e}$ menurut UIP.</strong> Depresiasi yang dibutuhkan $= i - i^{*} = 6{,}25\\% - 4{,}00\\% = 2{,}25\\%$. Maka</p>'
                + '<div class="formula">$E^{e} = E_t(1 + 0{,}0225) = 16{.}500 \\times 1{,}0225 \\approx \\mathbf{16{.}871\\ \\text{Rp/\\$}}.$</div>'
                + '<p>Agar imbal hasil obligasi rupiah dan dolar sama, pasar semestinya mengharapkan rupiah melemah ke sekitar 16.871.</p>'
                + '<p><strong>(b) Bandingkan dengan ekspektasi pasar 17.200.</strong> Depresiasi implisit pasar $(17{.}200 - 16{.}500)/16{.}500 = 4{,}24\\%$, padahal UIP hanya butuh 2,25%. Pasar mengharapkan rupiah melemah <em>lebih</em> dari yang dikompensasi diferensial bunga. Imbal hasil deposito dolar melebihi deposito rupiah:</p>'
                + '<div class="tip">Arbitrase: modal mengalir KELUAR dari rupiah ke dolar, sehingga rupiah terdepresiasi hari ini (E naik sekarang sampai ekspektasi depresiasi turun kembali ke 2,25%).</div>',
            },
            aChart: Q1_UIP },

          { n: 5,
            q: { en: '<p><strong>The Mundell–Fleming 2×2 diagram: an interest-rate hike.</strong> Using the IS–LM panel (left) and the interest-parity / IP panel (right), show why a policy rate hike is a "twin contraction" — it lowers output AND appreciates the currency.</p>',
                 id: '<p><strong>Diagram Mundell–Fleming 2×2: kenaikan suku bunga.</strong> Dengan panel IS–LM (kiri) dan panel paritas bunga / IP (kanan), tunjukkan mengapa kenaikan suku bunga kebijakan adalah "kontraksi ganda" — menurunkan output DAN mengapresiasi mata uang.</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slide "MF Diagram: Interest Rate Hike (2×2 Panels)")</div>'
                + '<p>Read the four panels as two linked diagrams. <strong>Top-left (A):</strong> initial output $Y_0$ at rate $i_0$ where IS meets LM. <strong>Top-right (B):</strong> the initial exchange rate $E_0$ read off the downward-sloping IP (UIP) curve at the same $i$, given $i^{*}$ and $E^{e}$.</p>'
                + '<p><strong>The hike.</strong> Tighter policy shifts LM <em>up</em> to LM\'. <strong>Bottom-left (A\'):</strong> the new IS–LM intersection is at a higher $i_1$ and a lower $Y_1$ — higher rates cut investment $I$ directly. <strong>Bottom-right (B\'):</strong> the higher $i_1$ moves the economy <em>up</em> the IP curve, so the exchange rate falls to $E_1$ — the currency appreciates (fewer Rp per $), because higher domestic returns pull in capital.</p>'
                + '<div class="tip">Twin contraction: $i\\uparrow$ reduces $Y$ directly (via $I$) AND indirectly (the appreciation $E\\downarrow$ reduces net exports $NX\\downarrow$). Both forces push output down — this is exactly why an aggressive hike is contractionary on two fronts in an open economy.</div>',
              id: '<div class="note">(jawaban model — slide deck "MF Diagram: Interest Rate Hike (2×2 Panels)")</div>'
                + '<p>Baca empat panel sebagai dua diagram yang terhubung. <strong>Kiri-atas (A):</strong> output awal $Y_0$ pada suku bunga $i_0$ di perpotongan IS dan LM. <strong>Kanan-atas (B):</strong> nilai tukar awal $E_0$ dibaca dari kurva IP (UIP) yang menurun pada $i$ yang sama, diberikan $i^{*}$ dan $E^{e}$.</p>'
                + '<p><strong>Kenaikan suku bunga.</strong> Pengetatan menggeser LM <em>naik</em> ke LM\'. <strong>Kiri-bawah (A\'):</strong> perpotongan IS–LM baru pada $i_1$ lebih tinggi dan $Y_1$ lebih rendah — bunga tinggi memangkas investasi $I$ secara langsung. <strong>Kanan-bawah (B\'):</strong> $i_1$ yang lebih tinggi menggerakkan perekonomian <em>naik</em> di kurva IP, sehingga nilai tukar turun ke $E_1$ — mata uang apresiasi (Rp lebih sedikit per $), karena imbal hasil domestik menarik modal.</p>'
                + '<div class="tip">Kontraksi ganda: $i\\uparrow$ menurunkan $Y$ langsung (via $I$) DAN tidak langsung (apresiasi $E\\downarrow$ menurunkan ekspor neto $NX\\downarrow$). Keduanya menekan output — inilah mengapa kenaikan agresif kontraktif di dua sisi dalam ekonomi terbuka.</div>',
            },
            aChart: MF_HIKE },

          { n: 6,
            q: { en: '<p><strong>Mundell–Fleming under a FIXED exchange rate.</strong> Contrast expansionary monetary policy and expansionary fiscal policy under a credible peg. Why is monetary policy neutered while fiscal policy is maximally effective?</p>',
                 id: '<p><strong>Mundell–Fleming di bawah nilai tukar TETAP.</strong> Bandingkan kebijakan moneter ekspansif dan fiskal ekspansif di bawah patokan kredibel. Mengapa moneter mandul sementara fiskal paling efektif?</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slide "Mundell–Fleming under FIXED ER")</div>'
                + '<p><strong>Expansionary monetary (i↓) under a peg.</strong> (1) The CB attempts to push $i$ below $i^{*}$. (2) Capital flows OUT → the Rp comes under depreciation pressure. (3) To defend the peg the CB sells $ reserves and buys Rp. (4) The money supply contracts → $i$ rises BACK to $i^{*}$. (5) No change in $Y$. <span class="key">Verdict: monetary policy has NO effect on output under a credible peg.</span></p>'
                + '<p><strong>Expansionary fiscal (G↑) under a peg.</strong> (1) $G\\uparrow$ → IS shifts right, $Y\\uparrow$, $i$ tends to rise. (2) Higher $i$ attracts capital → the Rp comes under appreciation pressure. (3) To defend the peg the CB buys $ reserves and sells Rp. (4) The money supply expands → $i$ falls BACK to $i^{*}$. (5) No crowding-out → the FULL fiscal multiplier acts on $Y$. <span class="key">Verdict: fiscal policy is maximally effective under a credible peg.</span></p>'
                + '<div class="tip">The peg subordinates the money supply to defence of the exchange rate, so the CB cannot independently set $i$. That endogenous money response is what kills monetary policy and what removes the crowding-out that would otherwise blunt fiscal policy.</div>',
              id: '<div class="note">(jawaban model — slide deck "Mundell–Fleming under FIXED ER")</div>'
                + '<p><strong>Moneter ekspansif (i↓) di bawah patokan.</strong> (1) BS mencoba menekan $i$ di bawah $i^{*}$. (2) Modal mengalir KELUAR → Rp tertekan depresiasi. (3) Untuk membela patokan, BS menjual cadangan $ dan membeli Rp. (4) Jumlah uang menyusut → $i$ naik KEMBALI ke $i^{*}$. (5) $Y$ tak berubah. <span class="key">Putusan: kebijakan moneter TIDAK berpengaruh pada output di bawah patokan kredibel.</span></p>'
                + '<p><strong>Fiskal ekspansif (G↑) di bawah patokan.</strong> (1) $G\\uparrow$ → IS bergeser kanan, $Y\\uparrow$, $i$ cenderung naik. (2) $i$ tinggi menarik modal → Rp tertekan apresiasi. (3) Untuk membela patokan, BS membeli cadangan $ dan menjual Rp. (4) Jumlah uang membesar → $i$ turun KEMBALI ke $i^{*}$. (5) Tanpa crowding-out → pengganda fiskal PENUH bekerja pada $Y$. <span class="key">Putusan: kebijakan fiskal paling efektif di bawah patokan kredibel.</span></p>'
                + '<div class="tip">Patokan menundukkan jumlah uang pada pembelaan nilai tukar, sehingga BS tak bisa menetapkan $i$ secara mandiri. Respons uang endogen itulah yang mematikan moneter dan menghapus crowding-out yang biasanya menumpulkan fiskal.</div>',
            } },

          { n: 7,
            q: { en: '<p><strong>The Impossible Trinity (policy trilemma).</strong> State the trilemma and the three corner solutions, with a real-world example of each. Where does Indonesia sit?</p>',
                 id: '<p><strong>Impossible Trinity (trilema kebijakan).</strong> Nyatakan trilema dan tiga solusi sudut, dengan contoh nyata masing-masing. Di mana posisi Indonesia?</p>' },
            answer: {
              en: '<div class="note">(model answer — deck slide "The Impossible Trinity (Policy Trilemma)")</div>'
                + '<p>A country can have at most <strong>two</strong> of: (i) free capital mobility, (ii) exchange-rate stability, (iii) monetary independence. It cannot have all three. The three corners:</p>'
                + '<ul>'
                + '<li><span class="key">A — give up capital mobility</span>, keep fixed ER + monetary autonomy. Example: pre-1990 China; Bretton Woods (1945–73).</li>'
                + '<li><span class="key">B — give up fixed ER</span>, keep free capital + monetary autonomy. Example: US, UK, Japan, most floaters today.</li>'
                + '<li><span class="key">C — give up monetary autonomy</span>, keep fixed ER + free capital. Example: Hong Kong (currency board); Eurozone members.</li>'
                + '</ul>'
                + '<p>Indonesia is closest to corner B with management: an open capital account and a managed-float rupiah, so Bank Indonesia keeps monetary independence (it sets the BI rate) but accepts exchange-rate movement and intervenes only to smooth volatility. The trilemma is why BI cannot simultaneously peg the rupiah, keep the account open, and run a fully independent rate.</p>',
              id: '<div class="note">(jawaban model — slide deck "The Impossible Trinity (Policy Trilemma)")</div>'
                + '<p>Sebuah negara paling banyak hanya bisa memiliki <strong>dua</strong> dari: (i) mobilitas modal bebas, (ii) stabilitas nilai tukar, (iii) kemandirian moneter. Tak bisa ketiganya. Tiga sudut:</p>'
                + '<ul>'
                + '<li><span class="key">A — korbankan mobilitas modal</span>, pertahankan ER tetap + otonomi moneter. Contoh: China pra-1990; Bretton Woods (1945–73).</li>'
                + '<li><span class="key">B — korbankan ER tetap</span>, pertahankan modal bebas + otonomi moneter. Contoh: AS, Inggris, Jepang, mayoritas penganut float hari ini.</li>'
                + '<li><span class="key">C — korbankan otonomi moneter</span>, pertahankan ER tetap + modal bebas. Contoh: Hong Kong (currency board); anggota Zona Euro.</li>'
                + '</ul>'
                + '<p>Indonesia paling dekat ke sudut B dengan pengelolaan: rekening modal terbuka dan rupiah mengambang terkendali, sehingga Bank Indonesia menjaga kemandirian moneter (menetapkan BI rate) tetapi menerima pergerakan nilai tukar dan hanya intervensi untuk meredam volatilitas. Trilema inilah sebabnya BI tak bisa sekaligus mematok rupiah, membuka rekening, dan menjalankan suku bunga sepenuhnya mandiri.</p>',
            },
            aChart: TRILEMMA },

          { n: 8,
            q: { en: '<p><strong>The regression appendix (Taylor-rule estimation).</strong> The deck closes with an OLS coefficient table and a histogram of residuals. How should you read such an exhibit, and what does a bimodal / non-normal residual distribution tell you about the fitted policy-rule model?</p>',
                 id: '<p><strong>Lampiran regresi (estimasi aturan Taylor).</strong> Deck ditutup dengan tabel koefisien OLS dan histogram residual. Bagaimana membaca tampilan semacam itu, dan apa arti distribusi residual yang bimodal / tidak normal bagi model aturan kebijakan yang dipasang?</p>' },
            answer: {
              en: '<div class="note">(model answer — deck closing slides: coefficient table + "Residuals: E" histogram)</div>'
                + '<p>An estimated policy-rule / exchange-rate regression reports, for each regressor (e.g. inflation gap, output gap, lagged rate, reserves, COVID dummy), a coefficient, standard error and t-statistic. Read it in three passes: (1) <span class="key">sign and size</span> — does each coefficient have the theory-predicted sign (e.g. a positive loading on the inflation gap, consistent with the Taylor principle)? (2) <span class="key">significance</span> — is $|t| > \\approx 2$, i.e. the coefficient distinguishable from zero? (3) <span class="key">fit and diagnostics</span> — $R^{2}$, and crucially the residuals.</p>'
                + '<p>The residual histogram is a specification check. OLS inference assumes residuals are roughly mean-zero and (for small-sample t-tests) normal. The deck\'s histogram of "Residuals: E" is clearly <span class="key">bimodal and not bell-shaped</span> — two clusters rather than one central peak. That is a red flag: it usually signals an <span class="key">omitted regime/structural break</span> (e.g. crisis vs normal periods, a pre/post-policy-change split, or an unmodelled COVID episode) so that the single linear rule is fitting two different relationships at once. The remedy is to add a regime dummy or interaction, split the sample, or move to a regime-switching / state-dependent rule — exactly the augmented direction Review 2 takes with the financial-stability Taylor rule.</p>',
              id: '<div class="note">(jawaban model — slide penutup deck: tabel koefisien + histogram "Residuals: E")</div>'
                + '<p>Regresi aturan kebijakan / nilai tukar yang diestimasi melaporkan, untuk tiap regresor (mis. selisih inflasi, output gap, suku bunga lag, cadangan, dummy COVID), koefisien, galat baku, dan t-statistik. Baca tiga tahap: (1) <span class="key">tanda dan besaran</span> — apakah tiap koefisien bertanda sesuai teori (mis. muatan positif pada selisih inflasi, konsisten dengan prinsip Taylor)? (2) <span class="key">signifikansi</span> — apakah $|t| > \\approx 2$? (3) <span class="key">kecocokan dan diagnostik</span> — $R^{2}$, dan yang krusial, residual.</p>'
                + '<p>Histogram residual adalah uji spesifikasi. Inferensi OLS mengasumsikan residual berrata-rata nol dan (untuk uji-t sampel kecil) normal. Histogram "Residuals: E" pada deck jelas <span class="key">bimodal dan tidak berbentuk lonceng</span> — dua kluster, bukan satu puncak tengah. Ini tanda bahaya: biasanya menandakan <span class="key">rezim/patahan struktural yang terabaikan</span> (mis. periode krisis vs normal, pemisahan pra/pasca perubahan kebijakan, atau episode COVID yang tak dimodelkan), sehingga satu aturan linear memasang dua hubungan sekaligus. Solusinya: tambahkan dummy rezim atau interaksi, pisahkan sampel, atau pindah ke aturan regime-switching / state-dependent — persis arah augmentasi yang diambil Review 2 dengan aturan Taylor stabilitas keuangan.</p>',
            } }
        ] }
    ]
  };


  /* =========================================================================
     REVIEW 2 — monetary block (handwritten tutorial answers)
     ========================================================================= */
  window.MAKRO_EXAMS.review2 = {
    year: 'r2',
    label: { en: 'UAS Review — Session 2', id: 'Review UAS — Sesi 2' },
    note: {
      en: 'Session 2 works three handwritten tutorial questions on the monetary block: (Q1) why the textbook money multiplier does not describe Bank Indonesia\'s monetary control — the money-multiplier vs endogenous-money (post-Keynesian) views, and what happens when confidence collapses; (Q2) the standard Taylor rule with two numerical scenarios, then its augmented financial-stability version; (Q3) a four-quadrant heterogeneous-agent (HANK-style) AS–AD diagram showing a shock\'s distributional bite on poor vs rich households. Each carries a worked model answer.',
      id: 'Sesi 2 mengerjakan tiga soal tutorial tulisan tangan pada blok moneter: (Q1) mengapa pengganda uang buku teks tidak menggambarkan kendali moneter Bank Indonesia — pandangan money-multiplier vs endogenous-money (post-Keynesian), dan apa yang terjadi saat kepercayaan runtuh; (Q2) aturan Taylor standar dengan dua skenario numerik, lalu versi augmentasi stabilitas keuangannya; (Q3) diagram AS–AD empat kuadran agen heterogen (gaya HANK) yang menunjukkan dampak distributif guncangan pada rumah tangga miskin vs kaya. Tiap soal disertai jawaban model terurai.'
    },
    sections: [
      { kind: 'essay',
        label: { en: 'Worked tutorial questions — money, Taylor rule & heterogeneity', id: 'Soal tutorial terurai — uang, aturan Taylor & heterogenitas' },
        questions: [
          { n: 1,
            q: { en: '<p><strong>Why the money multiplier "doesn\'t work like the textbook".</strong> Bank Indonesia officials and journalists often note that the simple money multiplier fails in practice. (a) Contrast the textbook money-multiplier model with the endogenous-money (post-Keynesian) view of how M1/M2 is determined. (b) Define the reserve / currency ratios and show, when confidence collapses (e.g. a COVID-style lockdown when businesses hoard cash and banks hoard reserves), what happens to the multiplier and the money supply.</p>',
                 id: '<p><strong>Mengapa pengganda uang "tidak bekerja seperti buku teks".</strong> Pejabat Bank Indonesia dan jurnalis kerap mencatat bahwa pengganda uang sederhana gagal dalam praktik. (a) Bandingkan model money-multiplier buku teks dengan pandangan endogenous-money (post-Keynesian) tentang penentuan M1/M2. (b) Definisikan rasio cadangan / mata uang dan tunjukkan, saat kepercayaan runtuh (mis. lockdown ala COVID ketika bisnis menimbun kas dan bank menimbun cadangan), apa yang terjadi pada pengganda dan jumlah uang.</p>' },
            answer: {
              en: '<div class="note">(model answer — Review 2 handwritten pages 1–2)</div>'
                + '<p><strong>(a) Two views.</strong></p>'
                + '<table><tr><th>Money-multiplier (textbook)</th><th>Endogenous money (post-Keynesian)</th></tr>'
                + '<tr><td>Central bank controls the monetary base MB; currency $C$ and reserves $R$ are fixed multiples, so $M = mm\\times MB$ — base drives money.</td><td>Banks create money when they make loans → deposits are created simultaneously; the central bank then passively supplies whatever reserves are demanded. Loans create deposits → deposits create reserves → reserves drive the base.</td></tr></table>'
                + '<p>Policy implication: if you simulate $M$ by expanding the base, money may not grow if banks won\'t lend and the public won\'t hold the extra deposits — which is exactly the post-2022 deleveraging Indonesia experienced.</p>'
                + '<p><strong>(b) The ratios and the multiplier.</strong> Let $rr$ = required reserve ratio, $re$ = excess reserve ratio, $c$ = currency-to-deposit ratio. Then</p>'
                + '<div class="formula">$M = mm \\times MB,\\qquad mm = \\dfrac{1 + c}{rr + re + c}.$</div>'
                + '<p><strong>When confidence collapses.</strong> Households withdraw deposits and hold cash → $c\\uparrow$. Risk-averse banks park excess funds at BI rather than extend loans → $re\\uparrow$ (the cost of bad loans looks higher than the opportunity cost of not lending). Both $c\\uparrow$ and $re\\uparrow$ push the denominator up faster than the numerator, so:</p>'
                + '<div class="formula">$c\\uparrow,\\ re\\uparrow \\;\\Rightarrow\\; mm\\downarrow \\;\\Rightarrow\\; M\\downarrow.$</div>'
                + '<div class="tip">This is why a central bank can flood the base with liquidity and still see broad money stagnate: the multiplier is endogenous and collapses precisely when the economy needs credit most. Hence BI relies on the BI rate, macroprudential tools and credit policy, not on a mechanical base→money multiplier.</div>',
              id: '<div class="note">(jawaban model — Review 2 halaman tulisan tangan 1–2)</div>'
                + '<p><strong>(a) Dua pandangan.</strong></p>'
                + '<table><tr><th>Money-multiplier (buku teks)</th><th>Endogenous money (post-Keynesian)</th></tr>'
                + '<tr><td>Bank sentral mengendalikan basis moneter MB; mata uang $C$ dan cadangan $R$ kelipatan tetap, jadi $M = mm\\times MB$ — basis menggerakkan uang.</td><td>Bank menciptakan uang saat memberi pinjaman → deposito tercipta bersamaan; bank sentral lalu memasok cadangan secara pasif. Pinjaman menciptakan deposito → deposito menciptakan cadangan → cadangan menggerakkan basis.</td></tr></table>'
                + '<p>Implikasi kebijakan: jika $M$ disimulasikan dengan memperbesar basis, uang mungkin tak tumbuh bila bank enggan menyalurkan kredit dan publik enggan memegang tambahan deposito — persis deleveraging pasca-2022 yang dialami Indonesia.</p>'
                + '<p><strong>(b) Rasio dan pengganda.</strong> Misalkan $rr$ = rasio cadangan wajib, $re$ = rasio cadangan berlebih, $c$ = rasio mata uang terhadap deposito. Maka</p>'
                + '<div class="formula">$M = mm \\times MB,\\qquad mm = \\dfrac{1 + c}{rr + re + c}.$</div>'
                + '<p><strong>Saat kepercayaan runtuh.</strong> RT menarik deposito dan memegang kas → $c\\uparrow$. Bank yang menghindari risiko memarkir dana berlebih di BI alih-alih menyalurkan kredit → $re\\uparrow$ (biaya kredit macet tampak lebih tinggi dari opportunity cost tak meminjamkan). Baik $c\\uparrow$ maupun $re\\uparrow$ menaikkan penyebut lebih cepat dari pembilang:</p>'
                + '<div class="formula">$c\\uparrow,\\ re\\uparrow \\;\\Rightarrow\\; mm\\downarrow \\;\\Rightarrow\\; M\\downarrow.$</div>'
                + '<div class="tip">Inilah sebabnya bank sentral bisa membanjiri basis dengan likuiditas tetapi uang luas tetap stagnan: pengganda bersifat endogen dan runtuh justru saat ekonomi paling butuh kredit. Karena itu BI bertumpu pada BI rate, instrumen makroprudensial, dan kebijakan kredit, bukan pengganda basis→uang yang mekanis.</div>',
            },
            aChart: MM_COLLAPSE },

          { n: 2,
            q: { en: '<p><strong>The Taylor rule — two numerical scenarios, then the augmented rule.</strong> Write the standard Taylor rule. For each scenario decide whether Bank Indonesia should hike or cut: (S1) inflation $\\pi = 6\\%$ with a positive output gap; (S2) inflation $\\pi = 2\\%$ (below target). Take $r^{*} = 2\\%$, $\\pi^{*} = 3\\%$, $\\alpha = 0.5$, $\\beta = 0.5$. Then state the augmented financial-stability Taylor rule and the tools it adds.</p>',
                 id: '<p><strong>Aturan Taylor — dua skenario numerik, lalu aturan augmentasi.</strong> Tuliskan aturan Taylor standar. Untuk tiap skenario, putuskan apakah Bank Indonesia harus menaikkan atau menurunkan suku bunga: (S1) inflasi $\\pi = 6\\%$ dengan output gap positif; (S2) inflasi $\\pi = 2\\%$ (di bawah target). Ambil $r^{*} = 2\\%$, $\\pi^{*} = 3\\%$, $\\alpha = 0{,}5$, $\\beta = 0{,}5$. Lalu nyatakan aturan Taylor stabilitas keuangan yang diaugmentasi dan alat yang ditambahkannya.</p>' },
            answer: {
              en: '<div class="note">(model answer — Review 2 handwritten pages 3–4)</div>'
                + '<p><strong>Standard rule.</strong></p>'
                + '<div class="formula">$i = r^{*} + \\pi + \\alpha(\\pi - \\pi^{*}) + \\beta(Y - \\bar{Y}).$</div>'
                + '<p>$r^{*}$ is the neutral real rate, $\\pi$ measured inflation, $(\\pi-\\pi^{*})$ the inflation gap, $(Y-\\bar Y)$ the output gap. The <span class="key">Taylor principle</span> needs $\\alpha > 0$ so the <em>nominal</em> rate rises more than one-for-one with inflation (the real rate tightens).</p>'
                + '<p><strong>Scenario 1: $\\pi = 6\\%$, output gap $= +2$.</strong></p>'
                + '<div class="formula">$i = 2 + 6 + 0.5(6 - 3) + 0.5(2) = 2 + 6 + 1.5 + 1 = 10.5\\%.$</div>'
                + '<p>The prescribed rate (10.5%) is well above the neutral nominal rate ($r^{*}+\\pi^{*}=5\\%$): <span class="key">the central bank should HIKE</span> to cool an overheating, above-target economy.</p>'
                + '<p><strong>Scenario 2: $\\pi = 2\\%$, output gap $= -1$ (say).</strong></p>'
                + '<div class="formula">$i = 2 + 2 + 0.5(2 - 3) + 0.5(-1) = 2 + 2 - 0.5 - 0.5 = 3\\%.$</div>'
                + '<p>The prescribed rate (3%) is below neutral (5%): inflation is below target and the gap is negative, so <span class="key">the central bank should CUT</span> to stimulate the economy.</p>'
                + '<p><strong>Augmented (financial-stability) Taylor rule.</strong> Add a financial term:</p>'
                + '<div class="formula">$i = r^{*} + \\pi + \\alpha(\\pi - \\pi^{*}) + \\beta(Y - \\bar{Y}) + \\gamma(F_t - F^{*}),$</div>'
                + '<p>where $(F_t - F^{*})$ is a financial-gap (credit growth, asset prices, leverage above trend), $\\gamma \\ge 0$. The augmented rule "leans against the wind": tighten in credit booms, ease in busts. Its companion macroprudential tools are the <span class="key">loan-to-value (LTV) cap</span> (limits mortgage borrowing relative to property value) and the <span class="key">countercyclical capital buffer (CCyB)</span> (banks must hold extra capital in booms, released in downturns — an automatic stabiliser).</p>',
              id: '<div class="note">(jawaban model — Review 2 halaman tulisan tangan 3–4)</div>'
                + '<p><strong>Aturan standar.</strong></p>'
                + '<div class="formula">$i = r^{*} + \\pi + \\alpha(\\pi - \\pi^{*}) + \\beta(Y - \\bar{Y}).$</div>'
                + '<p>$r^{*}$ suku bunga riil netral, $\\pi$ inflasi terukur, $(\\pi-\\pi^{*})$ selisih inflasi, $(Y-\\bar Y)$ output gap. <span class="key">Prinsip Taylor</span> butuh $\\alpha > 0$ agar suku bunga <em>nominal</em> naik lebih dari satu-banding-satu dengan inflasi (suku bunga riil mengetat).</p>'
                + '<p><strong>Skenario 1: $\\pi = 6\\%$, output gap $= +2$.</strong></p>'
                + '<div class="formula">$i = 2 + 6 + 0{,}5(6 - 3) + 0{,}5(2) = 2 + 6 + 1{,}5 + 1 = 10{,}5\\%.$</div>'
                + '<p>Suku bunga preskripsi (10,5%) jauh di atas netral nominal ($r^{*}+\\pi^{*}=5\\%$): <span class="key">bank sentral harus MENAIKKAN</span> untuk mendinginkan ekonomi yang memanas dan di atas target.</p>'
                + '<p><strong>Skenario 2: $\\pi = 2\\%$, output gap $= -1$.</strong></p>'
                + '<div class="formula">$i = 2 + 2 + 0{,}5(2 - 3) + 0{,}5(-1) = 2 + 2 - 0{,}5 - 0{,}5 = 3\\%.$</div>'
                + '<p>Suku bunga preskripsi (3%) di bawah netral (5%): inflasi di bawah target dan gap negatif, jadi <span class="key">bank sentral harus MENURUNKAN</span> untuk menstimulus ekonomi.</p>'
                + '<p><strong>Aturan Taylor augmentasi (stabilitas keuangan).</strong> Tambahkan term finansial:</p>'
                + '<div class="formula">$i = r^{*} + \\pi + \\alpha(\\pi - \\pi^{*}) + \\beta(Y - \\bar{Y}) + \\gamma(F_t - F^{*}),$</div>'
                + '<p>di mana $(F_t - F^{*})$ selisih finansial (pertumbuhan kredit, harga aset, leverage di atas tren), $\\gamma \\ge 0$. Aturan ini "lean against the wind": mengetat saat boom kredit, melonggar saat bust. Alat makroprudensial pendampingnya: <span class="key">batas loan-to-value (LTV)</span> (membatasi pinjaman KPR relatif terhadap nilai properti) dan <span class="key">countercyclical capital buffer (CCyB)</span> (bank menahan modal ekstra saat boom, dilepas saat resesi — penstabil otomatis).</p>',
            },
            aChart: TAYLOR },

          { n: 3,
            q: { en: '<p><strong>The four-quadrant heterogeneous-agent AS–AD diagram.</strong> Monetary policy is not merely a political question — it has deep distributional roots that our conventional (representative-agent) models miss. Using a four-quadrant Aggregate Demand / Aggregate Supply diagram for two household types (poor with a high marginal propensity to consume, rich with a low one), trace through all four quadrants and explain why the same macro shock hits the poor far harder. Why does the poor household\'s price level $P_{poor}$ and the slope of its schedule differ from the rich household\'s?</p>',
                 id: '<p><strong>Diagram AS–AD agen heterogen empat kuadran.</strong> Kebijakan moneter bukan sekadar persoalan politik — ia berakar distributif dalam yang dilewatkan model konvensional (agen representatif). Dengan diagram Permintaan Agregat / Penawaran Agregat empat kuadran untuk dua tipe rumah tangga (miskin dengan kecenderungan konsumsi marjinal tinggi, kaya dengan yang rendah), telusuri keempat kuadran dan jelaskan mengapa guncangan makro yang sama jauh lebih memukul si miskin. Mengapa tingkat harga $P_{miskin}$ dan kemiringan jadwalnya berbeda dari rumah tangga kaya?</p>' },
            answer: {
              en: '<div class="note">(model answer — Review 2 handwritten pages 5–6)</div>'
                + '<p><strong>Set-up.</strong> Heterogeneous-agent (HANK-style) macro splits the economy into household types that differ in their marginal propensity to consume (MPC) and in the basket they buy. The four-quadrant diagram chains together the AS–AD blocks for two types so you can read the distributional incidence of one shock in all four panels.</p>'
                + '<p><strong>Tracing the four steps.</strong> A contractionary shock shifts AD left in each quadrant (Step 1). For the <span class="key">rich</span> household, the supply schedule is steep (they smooth consumption out of wealth and can substitute), so the shock produces a modest fall in output/consumption and a small move in their price level $P_{rich}$ (Step 2). For the <span class="key">poor / hand-to-mouth</span> household, the schedule is flat (high MPC, little buffer, necessities-heavy basket), so the same leftward AD shift produces a much larger drop in consumption and a sharper welfare hit (Step 3). Step 4 reads off the gap: $Y_{poor}$ falls more and the effective price level the poor face is higher and more volatile — the relevant inflation for low-income households (food, energy, rent) is both higher and stickier than headline.</p>'
                + '<div class="tip">Punchline: aggregate (representative-agent) statistics hide the incidence. The same policy or shock is regressive when the poor have higher MPCs, flatter response schedules, and necessity-heavy baskets — which is the macro-of-welfare case for targeted fiscal transfers alongside monetary policy, and for tracking distribution-sensitive inflation, not just the average.</div>',
              id: '<div class="note">(jawaban model — Review 2 halaman tulisan tangan 5–6)</div>'
                + '<p><strong>Penyiapan.</strong> Makro agen heterogen (gaya HANK) membagi ekonomi menjadi tipe rumah tangga yang berbeda dalam kecenderungan konsumsi marjinal (MPC) dan keranjang belanjanya. Diagram empat kuadran merangkai blok AS–AD untuk dua tipe agar insidensi distributif satu guncangan terbaca di keempat panel.</p>'
                + '<p><strong>Menelusuri empat langkah.</strong> Guncangan kontraktif menggeser AD ke kiri di tiap kuadran (Langkah 1). Untuk rumah tangga <span class="key">kaya</span>, jadwal penawaran curam (mereka memuluskan konsumsi dari kekayaan dan bisa bersubstitusi), sehingga guncangan menghasilkan penurunan output/konsumsi yang moderat dan pergerakan kecil pada tingkat harga $P_{kaya}$ (Langkah 2). Untuk rumah tangga <span class="key">miskin / hand-to-mouth</span>, jadwalnya datar (MPC tinggi, sedikit penyangga, keranjang dominan kebutuhan pokok), sehingga geseran AD kiri yang sama menghasilkan penurunan konsumsi jauh lebih besar dan pukulan kesejahteraan lebih tajam (Langkah 3). Langkah 4 membaca selisihnya: $Y_{miskin}$ turun lebih dalam dan tingkat harga efektif yang dihadapi si miskin lebih tinggi dan bergejolak — inflasi relevan bagi RT berpendapatan rendah (pangan, energi, sewa) lebih tinggi dan lebih lengket daripada headline.</p>'
                + '<div class="tip">Inti: statistik agregat (agen representatif) menyembunyikan insidensi. Kebijakan atau guncangan yang sama bersifat regresif ketika si miskin ber-MPC lebih tinggi, jadwal respons lebih datar, dan keranjang dominan kebutuhan pokok — inilah argumen makro-kesejahteraan untuk transfer fiskal tertarget berdampingan dengan kebijakan moneter, dan untuk memantau inflasi yang peka distribusi, bukan sekadar rata-rata.</div>',
            },
            aChart: HANK_4Q } ]
      } ]
  };


  /* =========================================================================
     FINAL — UAS, 4 essay questions @ 25% each, full worked model answers
     ========================================================================= */
  window.MAKRO_EXAMS.final = {
    year: '2026',
    label: { en: 'UAS Final — 4 Questions (worked)', id: 'UAS Final — 4 Soal (pembahasan)' },
    note: {
      en: 'Final-term exam, Makroekonomi (open-economy / financial macro half), UI · FEB · Even Semester 2025/2026 · 4 essay topics @ 25% each, analytical-essay format. ⚠ The two review decks state the exam STRUCTURE and work through problems but do NOT print the four final questions verbatim, so the four topics below are faithful representative questions, each anchored explicitly in the review-deck content and the Week 8–14 lectures (UIP & capital flows; Mundell–Fleming & the trilemma; the monetary-transmission / Taylor rule; exchange-rate balance-sheet effects). No official answer key exists — the answers are unofficial model answers following the lecturer\'s analytical-essay recipe (intro+thesis → theory benchmark → alternative/nuance → empirics → conclusion+policy).',
      id: 'Ujian akhir Makroekonomi (paruh ekonomi terbuka / makro keuangan), UI · FEB · Semester Genap 2025/2026 · 4 topik esai @ 25%, format esai analitis. ⚠ Dua deck review menyatakan STRUKTUR ujian dan membahas soal tetapi TIDAK mencetak empat soal final secara verbatim, sehingga empat topik di bawah adalah soal representatif yang setia, masing-masing berlabuh eksplisit pada konten deck review dan kuliah Minggu 8–14 (UIP & arus modal; Mundell–Fleming & trilema; transmisi moneter / aturan Taylor; efek neraca nilai tukar). Tidak ada kunci jawaban resmi — jawaban di bawah adalah jawaban model tidak resmi mengikuti resep esai analitis dosen.'
    },
    sections: [
      { kind: 'essay',
        label: { en: 'Essay — 4 questions', id: 'Esai — 4 soal' },
        questions: [

          { n: 1,
            q: {
              en: '<p><strong>Q1 (25%) — Uncovered Interest Parity, capital flows and the rupiah.</strong></p>'
                + '<p><em>Context:</em> In 2025 Bank Indonesia held the BI rate at 6.25% while the US Federal Reserve held at 4.00%, with the rupiah near 16,500 Rp/$. Foreign investors must choose between rupiah and dollar bonds, and the market\'s view of the future rupiah moves capital in and out of Indonesia.</p>'
                + '<p><em>Task:</em> Write an analytical essay explaining the <strong>schooling of capital across borders through Uncovered Interest Parity (UIP)</strong>. State the parity condition and its risk-augmented version, work the numerical case (Eᵉ implied by UIP, and the arbitrage when the market expects 17,200), and explain what determines the actual direction the rupiah moves. Conclude with the policy lesson for Bank Indonesia.</p>',
              id: '<p><strong>Q1 (25%) — Uncovered Interest Parity, arus modal, dan rupiah.</strong></p>'
                + '<p><em>Konteks:</em> Pada 2025 Bank Indonesia menahan BI rate di 6,25% sementara Federal Reserve AS menahan di 4,00%, dengan rupiah sekitar 16.500 Rp/$. Investor asing memilih antara obligasi rupiah dan dolar, dan pandangan pasar atas rupiah masa depan menggerakkan modal masuk-keluar Indonesia.</p>'
                + '<p><em>Tugas:</em> Tulis esai analitis yang menjelaskan <strong>pergerakan modal lintas batas lewat Uncovered Interest Parity (UIP)</strong>. Nyatakan kondisi paritas dan versi yang diaugmentasi risiko, kerjakan kasus numerik (Eᵉ yang diimplikasikan UIP, dan arbitrase ketika pasar mengharapkan 17.200), dan jelaskan apa yang menentukan arah aktual pergerakan rupiah. Tutup dengan pelajaran kebijakan bagi Bank Indonesia.</p>'
            },
            answer: {
              en: '<div class="note">(no official key — model answer using Review 1 UIP slides + the BI/Fed 2025 numbers)</div>'
                + '<p><strong>Introduction.</strong> Cross-border capital allocation is, at heart, an arbitrage problem: an investor compares the certain interest on a rupiah bond with the expected total return on a dollar bond, where the latter includes the expected change in the exchange rate. Uncovered Interest Parity (UIP) is the no-arbitrage condition that ties the interest differential to expected currency depreciation. My thesis is that the rupiah\'s direction is governed not by the interest gap alone but by the gap between the UIP-required depreciation and the market\'s <em>expected</em> depreciation; when the market expects more weakening than the rate differential compensates for, capital leaves and the rupiah falls today.</p>'
                + '<p><strong>Theoretical benchmark — UIP.</strong> With the Rp/$ convention,</p>'
                + '<div class="formula">$i_t = i_t^{*} + \\dfrac{E^{e}_{t+1} - E_t}{E_t}.$</div>'
                + '<p>The domestic rate equals the foreign rate plus expected depreciation of the home currency. Holding a rupiah bond pays $i$; holding a dollar bond pays $i^{*}$ plus any appreciation of the dollar (depreciation of the rupiah). In equilibrium the two are equal, so a higher domestic rate must be exactly offset by expected depreciation — otherwise risk-neutral investors would pile into the higher-yielding asset.</p>'
                + '<p><strong>Alternative / nuance — the risk premium.</strong> Pure UIP assumes risk-neutral investors and is famously rejected in the data (the "forward premium puzzle"). The realistic version is augmented UIP:</p>'
                + '<div class="formula">$i = i^{*} + \\dfrac{E^{e} - E}{E} + \\rho,$</div>'
                + '<p>where $\\rho$ is a risk premium that emerging-market currencies must pay. For Indonesia $\\rho > 0$: investors demand extra yield for default, liquidity and convertibility risk, which is part of why the BI rate sits well above the Fed\'s.</p>'
                + '<p><strong>Empirics — the worked case.</strong> Required depreciation $= i - i^{*} = 6.25\\% - 4.00\\% = 2.25\\%$, so UIP implies</p>'
                + '<div class="formula">$E^{e} = 16{,}500 \\times 1.0225 \\approx 16{,}871\\ \\text{Rp/\\$}.$</div>'
                + '<p>If the market instead expects $E^{e} = 17{,}200$, the market-implied depreciation is $(17{,}200-16{,}500)/16{,}500 = 4.24\\%$ — far above the 2.25% the differential pays. The expected dollar return exceeds the rupiah return, so capital flows OUT of the rupiah and the rupiah depreciates today: $E$ jumps up now until the <em>remaining</em> expected depreciation is back to ~2.25%. This is the mechanism behind sudden rupiah sell-offs when sentiment shifts even with the rate gap unchanged.</p>'
                + '<div class="tip">Policy lesson for BI: because the exchange rate is forward-looking, defending the rupiah is about managing <em>expectations</em> and the risk premium, not just the rate gap. Credible inflation targeting, adequate reserves, and clear communication lower $\\rho$ and $E^{e}$; raising the BI rate only works if it shifts expectations, otherwise it merely confirms stress.</div>',
              id: '<div class="note">(tanpa kunci resmi — jawaban model memakai slide UIP Review 1 + angka BI/Fed 2025)</div>'
                + '<p><strong>Pendahuluan.</strong> Alokasi modal lintas batas pada dasarnya persoalan arbitrase: investor membandingkan bunga pasti obligasi rupiah dengan ekspektasi imbal hasil total obligasi dolar, yang mencakup perkiraan perubahan nilai tukar. Uncovered Interest Parity (UIP) adalah kondisi tanpa-arbitrase yang mengikat diferensial bunga dengan ekspektasi depresiasi. Tesis saya: arah rupiah ditentukan bukan oleh selisih bunga saja, melainkan oleh selisih antara depresiasi yang dibutuhkan UIP dan depresiasi yang <em>diharapkan</em> pasar; ketika pasar mengharapkan pelemahan lebih dari yang dikompensasi diferensial, modal keluar dan rupiah jatuh hari ini.</p>'
                + '<p><strong>Patokan teoritis — UIP.</strong> Dengan konvensi Rp/$,</p>'
                + '<div class="formula">$i_t = i_t^{*} + \\dfrac{E^{e}_{t+1} - E_t}{E_t}.$</div>'
                + '<p>Suku bunga domestik = suku bunga asing + ekspektasi depresiasi domestik. Memegang obligasi rupiah membayar $i$; obligasi dolar membayar $i^{*}$ plus apresiasi dolar. Dalam ekuilibrium keduanya sama, sehingga bunga domestik lebih tinggi harus persis diimbangi ekspektasi depresiasi.</p>'
                + '<p><strong>Alternatif / nuansa — premi risiko.</strong> UIP murni mengasumsikan investor netral-risiko dan ditolak data ("forward premium puzzle"). Versi realistis adalah augmented UIP:</p>'
                + '<div class="formula">$i = i^{*} + \\dfrac{E^{e} - E}{E} + \\rho,$</div>'
                + '<p>$\\rho$ premi risiko yang harus dibayar mata uang negara berkembang. Untuk Indonesia $\\rho > 0$: investor menuntut imbal hasil ekstra untuk risiko gagal bayar, likuiditas, dan konvertibilitas — sebagian alasan BI rate jauh di atas Fed.</p>'
                + '<p><strong>Empiris — kasus terurai.</strong> Depresiasi yang dibutuhkan $= i - i^{*} = 6{,}25\\% - 4{,}00\\% = 2{,}25\\%$, jadi UIP mengimplikasikan</p>'
                + '<div class="formula">$E^{e} = 16{.}500 \\times 1{,}0225 \\approx 16{.}871\\ \\text{Rp/\\$}.$</div>'
                + '<p>Jika pasar justru mengharapkan $E^{e} = 17{.}200$, depresiasi implisit pasar $(17{.}200-16{.}500)/16{.}500 = 4{,}24\\%$ — jauh di atas 2,25% yang dibayar diferensial. Imbal hasil dolar melebihi rupiah, jadi modal mengalir KELUAR dari rupiah dan rupiah terdepresiasi hari ini: $E$ melonjak sekarang sampai sisa ekspektasi depresiasi kembali ~2,25%. Inilah mekanisme aksi jual rupiah mendadak saat sentimen berubah meski selisih bunga tetap.</p>'
                + '<div class="tip">Pelajaran kebijakan BI: karena nilai tukar bersifat forward-looking, membela rupiah adalah soal mengelola <em>ekspektasi</em> dan premi risiko, bukan sekadar selisih bunga. Penargetan inflasi yang kredibel, cadangan memadai, dan komunikasi jelas menurunkan $\\rho$ dan $E^{e}$; menaikkan BI rate hanya berhasil bila menggeser ekspektasi.</div>',
            },
            aChart: Q1_UIP },

          { n: 2,
            q: {
              en: '<p><strong>Q2 (25%) — Mundell–Fleming, the exchange-rate regime and the policy trilemma.</strong></p>'
                + '<p><em>Context:</em> A finance minister proposes a large fiscal stimulus; the central-bank governor worries about its effect on output and the currency. Their advice depends entirely on the exchange-rate regime and on which two legs of the policy trilemma the country has chosen.</p>'
                + '<p><em>Task:</em> Write an analytical essay using the Mundell–Fleming model to compare the effectiveness of monetary and fiscal policy under a <strong>floating</strong> versus a <strong>fixed</strong> exchange rate. Embed the answer in the <strong>impossible trinity</strong>, with country examples, and state where Indonesia sits.</p>',
              id: '<p><strong>Q2 (25%) — Mundell–Fleming, rezim nilai tukar, dan trilema kebijakan.</strong></p>'
                + '<p><em>Konteks:</em> Seorang menteri keuangan mengusulkan stimulus fiskal besar; gubernur bank sentral khawatir efeknya pada output dan mata uang. Nasihat mereka bergantung sepenuhnya pada rezim nilai tukar dan dua kaki trilema mana yang dipilih negara.</p>'
                + '<p><em>Tugas:</em> Tulis esai analitis dengan model Mundell–Fleming untuk membandingkan efektivitas kebijakan moneter dan fiskal di bawah nilai tukar <strong>mengambang</strong> versus <strong>tetap</strong>. Tanamkan jawaban dalam <strong>impossible trinity</strong>, dengan contoh negara, dan nyatakan posisi Indonesia.</p>'
            },
            answer: {
              en: '<div class="note">(no official key — model answer using the Review 1 MF + fixed-ER + trilemma slides)</div>'
                + '<p><strong>Introduction.</strong> The Mundell–Fleming model is the workhorse for open-economy stabilisation, and its central lesson is that the <em>same</em> policy has opposite power depending on the exchange-rate regime. My thesis: under perfect capital mobility, a floating rate makes monetary policy powerful and fiscal policy weak, while a fixed rate exactly reverses this — and the impossible trinity explains why, because the regime choice is really a choice of which policy lever to surrender.</p>'
                + '<p><strong>Theoretical benchmark — floating ER.</strong> Under a float with open capital, the economy must satisfy UIP ($i = i^{*}$ up to expected depreciation). <em>Monetary expansion</em> ($M\\uparrow$) pushes $i$ down, capital flows out, the currency <em>depreciates</em>, $NX\\uparrow$, and output rises strongly — monetary policy is highly effective. <em>Fiscal expansion</em> ($G\\uparrow$) raises $i$, attracts capital, the currency <em>appreciates</em>, $NX\\downarrow$ crowds out the stimulus — fiscal policy is weak.</p>'
                + '<p><strong>Alternative regime — fixed ER.</strong> Under a credible peg the money supply becomes endogenous (it must defend the rate). <em>Monetary expansion</em> is neutered: the attempt to cut $i$ triggers capital outflow, the CB sells reserves and buys home currency, $M$ contracts back, and $i$ returns to $i^{*}$ — no effect on $Y$. <em>Fiscal expansion</em> is maximally effective: $G\\uparrow$ raises $i$, attracts capital, the CB buys reserves and the money supply expands to hold the peg, so there is no crowding-out and the full fiscal multiplier acts on $Y$.</p>'
                + '<p><strong>Embedding — the impossible trinity.</strong> A country can have at most two of {free capital mobility, exchange-rate stability, monetary independence}. The float (corner B: US, UK, Japan) keeps capital mobility and monetary independence, giving up ER stability — which is exactly why monetary policy works there. The hard peg / currency board (corner C: Hong Kong; Eurozone members) keeps capital mobility and ER stability, surrendering monetary independence — which is exactly why monetary policy is dead there and fiscal policy carries the load. Corner A (capital controls: pre-1990 China, Bretton Woods) buys both ER stability and monetary autonomy by closing the account.</p>'
                + '<p><strong>Conclusion and policy.</strong> The minister and governor should agree that the advice is regime-contingent: if Indonesia keeps its managed float and open account (close to corner B), monetary policy is the primary stabiliser and a large fiscal stimulus will be partly crowded out via appreciation; if it ever moved toward a peg, fiscal policy would become the only effective tool and monetary independence would be lost. Indonesia in practice sits near corner B — open capital account, managed-float rupiah, an independent BI rate — accepting exchange-rate movement (and using FX intervention and macroprudential tools only to smooth it) precisely so it can retain monetary independence.</p>',
              id: '<div class="note">(tanpa kunci resmi — jawaban model memakai slide MF + ER tetap + trilema Review 1)</div>'
                + '<p><strong>Pendahuluan.</strong> Model Mundell–Fleming adalah andalan stabilisasi ekonomi terbuka, dan pelajaran utamanya: kebijakan yang <em>sama</em> berkekuatan berlawanan tergantung rezim nilai tukar. Tesis saya: di bawah mobilitas modal sempurna, nilai tukar mengambang membuat moneter kuat dan fiskal lemah, sedangkan nilai tukar tetap persis membalikkannya — dan impossible trinity menjelaskan sebabnya, karena pilihan rezim sejatinya pilihan tuas kebijakan mana yang dilepas.</p>'
                + '<p><strong>Patokan teoritis — ER mengambang.</strong> Di bawah float dengan modal terbuka, ekonomi harus memenuhi UIP. <em>Ekspansi moneter</em> ($M\\uparrow$) menekan $i$ turun, modal keluar, mata uang <em>terdepresiasi</em>, $NX\\uparrow$, output naik kuat — moneter sangat efektif. <em>Ekspansi fiskal</em> ($G\\uparrow$) menaikkan $i$, menarik modal, mata uang <em>terapresiasi</em>, $NX\\downarrow$ meng-crowding-out stimulus — fiskal lemah.</p>'
                + '<p><strong>Rezim alternatif — ER tetap.</strong> Di bawah patokan kredibel jumlah uang menjadi endogen (harus membela nilai tukar). <em>Ekspansi moneter</em> mandul: upaya menurunkan $i$ memicu arus modal keluar, BS menjual cadangan dan membeli mata uang domestik, $M$ menyusut kembali, $i$ balik ke $i^{*}$ — tak ada efek pada $Y$. <em>Ekspansi fiskal</em> paling efektif: $G\\uparrow$ menaikkan $i$, menarik modal, BS membeli cadangan dan jumlah uang membesar untuk menahan patokan, sehingga tanpa crowding-out dan pengganda fiskal penuh bekerja pada $Y$.</p>'
                + '<p><strong>Penanaman — impossible trinity.</strong> Negara paling banyak memiliki dua dari {mobilitas modal bebas, stabilitas nilai tukar, kemandirian moneter}. Float (sudut B: AS, Inggris, Jepang) menjaga mobilitas modal dan kemandirian moneter, melepas stabilitas nilai tukar — itu sebabnya moneter bekerja. Patokan keras / currency board (sudut C: Hong Kong; anggota Zona Euro) menjaga mobilitas modal dan stabilitas nilai tukar, melepas kemandirian moneter — itu sebabnya moneter mati dan fiskal memikul beban. Sudut A (kontrol modal: China pra-1990, Bretton Woods) memperoleh stabilitas dan otonomi dengan menutup rekening.</p>'
                + '<p><strong>Kesimpulan dan kebijakan.</strong> Menteri dan gubernur semestinya sepakat nasihatnya bergantung rezim: jika Indonesia mempertahankan float terkendali dan rekening terbuka (dekat sudut B), moneter adalah penstabil utama dan stimulus fiskal besar sebagian akan ter-crowding-out lewat apresiasi; jika bergeser ke patokan, fiskal jadi satu-satunya alat efektif dan kemandirian moneter hilang. Dalam praktik Indonesia dekat sudut B — rekening modal terbuka, rupiah mengambang terkendali, BI rate mandiri — menerima pergerakan nilai tukar (dan memakai intervensi valas serta makroprudensial hanya untuk meredamnya) justru agar kemandirian moneter terjaga.</p>',
            },
            aChart: Q2_MF },

          { n: 3,
            q: {
              en: '<p><strong>Q3 (25%) — The Taylor rule, the money multiplier and the limits of monetary transmission.</strong></p>'
                + '<p><em>Context:</em> Critics claim Bank Indonesia "just follows a formula" and that "printing money causes inflation one-for-one". A journalist points out that during the COVID period BI expanded the monetary base sharply yet broad money and inflation barely moved.</p>'
                + '<p><em>Task:</em> Write an analytical essay that (i) states and applies the standard Taylor rule to decide whether to hike or cut, (ii) explains why the textbook money multiplier overstates monetary control using the endogenous-money view, and (iii) argues for an augmented, financial-stability-aware policy rule. Use Indonesian examples.</p>',
              id: '<p><strong>Q3 (25%) — Aturan Taylor, pengganda uang, dan batas transmisi moneter.</strong></p>'
                + '<p><em>Konteks:</em> Kritikus mengklaim Bank Indonesia "hanya mengikuti rumus" dan "mencetak uang menyebabkan inflasi satu-banding-satu". Seorang jurnalis menunjukkan bahwa selama periode COVID BI memperbesar basis moneter tajam namun uang luas dan inflasi nyaris tak bergerak.</p>'
                + '<p><em>Tugas:</em> Tulis esai analitis yang (i) menyatakan dan menerapkan aturan Taylor standar untuk memutuskan naik atau turun, (ii) menjelaskan mengapa pengganda uang buku teks melebih-lebihkan kendali moneter dengan pandangan endogenous-money, dan (iii) berargumen untuk aturan kebijakan augmentasi yang sadar stabilitas keuangan. Gunakan contoh Indonesia.</p>'
            },
            answer: {
              en: '<div class="note">(no official key — model answer using the Review 2 Taylor-rule + money-multiplier pages)</div>'
                + '<p><strong>Introduction.</strong> Both criticisms are half-truths. The Taylor rule is a useful benchmark, not a mechanical formula, and "printing money" does not raise inflation one-for-one because the link from the monetary base to broad money — the money multiplier — is endogenous and can collapse. My thesis: good monetary policy uses the Taylor rule as a guide while recognising that transmission depends on bank and household behaviour, which is why a financial-stability-augmented rule is the right framework for Bank Indonesia.</p>'
                + '<p><strong>Theoretical benchmark — the Taylor rule.</strong> The rule sets the policy rate as</p>'
                + '<div class="formula">$i = r^{*} + \\pi + \\alpha(\\pi - \\pi^{*}) + \\beta(Y - \\bar{Y}).$</div>'
                + '<p>With $r^{*}=2\\%$, $\\pi^{*}=3\\%$, $\\alpha=\\beta=0.5$: if $\\pi=6\\%$ with a $+2$ output gap, $i = 2+6+0.5(3)+0.5(2) = 10.5\\%$ — well above the neutral 5%, so BI should hike. If $\\pi=2\\%$ with a $-1$ gap, $i = 2+2+0.5(-1)+0.5(-1) = 3\\%$ — below neutral, so BI should cut. The Taylor principle ($\\alpha>0$) ensures the real rate tightens when inflation rises, anchoring expectations.</p>'
                + '<p><strong>Alternative / nuance — the endogenous money multiplier.</strong> The textbook claim "base → broad money" relies on $M = mm\\times MB$ with $mm = (1+c)/(rr+re+c)$. But $c$ (currency ratio) and $re$ (excess-reserve ratio) are behavioural, not fixed. When confidence collapses, households hoard cash ($c\\uparrow$) and banks hoard reserves rather than lend ($re\\uparrow$), so $mm\\downarrow$ and $M\\downarrow$ even as the base explodes. In the endogenous-money view loans create deposits and the CB supplies reserves passively, so the base does not mechanically drive money. This is why "printing money" did not produce one-for-one inflation during COVID — the multiplier fell.</p>'
                + '<p><strong>Empirics — Indonesia.</strong> During the COVID period BI expanded base money sharply (including burden-sharing with the Treasury), yet broad-money growth and inflation stayed subdued, and after 2022 the economy deleveraged — banks were cautious and credit demand weak. The mechanical multiplier predicts the opposite; the endogenous-money account fits. This is precisely the "money multiplier doesn\'t work like the textbook" point the review makes.</p>'
                + '<div class="tip">Conclusion and policy: BI should treat the Taylor rule as a transparent benchmark while adding a financial-stability term, $i = \\ldots + \\gamma(F_t - F^{*})$, and pairing it with macroprudential tools — LTV caps and the countercyclical capital buffer — to lean against credit booms and support credit in busts. The right object of policy is the BI rate and credit conditions, not a mechanical base→money rule.</div>',
              id: '<div class="note">(tanpa kunci resmi — jawaban model memakai halaman aturan Taylor + pengganda uang Review 2)</div>'
                + '<p><strong>Pendahuluan.</strong> Kedua kritik setengah benar. Aturan Taylor adalah patokan berguna, bukan rumus mekanis, dan "mencetak uang" tidak menaikkan inflasi satu-banding-satu karena kaitan dari basis moneter ke uang luas — pengganda uang — bersifat endogen dan bisa runtuh. Tesis saya: kebijakan moneter yang baik memakai aturan Taylor sebagai panduan sambil menyadari bahwa transmisi bergantung pada perilaku bank dan rumah tangga, sehingga aturan yang diaugmentasi stabilitas keuangan adalah kerangka tepat bagi Bank Indonesia.</p>'
                + '<p><strong>Patokan teoritis — aturan Taylor.</strong> Aturan menetapkan suku bunga kebijakan:</p>'
                + '<div class="formula">$i = r^{*} + \\pi + \\alpha(\\pi - \\pi^{*}) + \\beta(Y - \\bar{Y}).$</div>'
                + '<p>Dengan $r^{*}=2\\%$, $\\pi^{*}=3\\%$, $\\alpha=\\beta=0{,}5$: jika $\\pi=6\\%$ dengan output gap $+2$, $i = 2+6+0{,}5(3)+0{,}5(2) = 10{,}5\\%$ — jauh di atas netral 5%, jadi BI harus menaikkan. Jika $\\pi=2\\%$ dengan gap $-1$, $i = 2+2+0{,}5(-1)+0{,}5(-1) = 3\\%$ — di bawah netral, jadi BI harus menurunkan. Prinsip Taylor ($\\alpha>0$) memastikan suku bunga riil mengetat saat inflasi naik, menambatkan ekspektasi.</p>'
                + '<p><strong>Alternatif / nuansa — pengganda uang endogen.</strong> Klaim buku teks "basis → uang luas" bersandar pada $M = mm\\times MB$ dengan $mm = (1+c)/(rr+re+c)$. Tetapi $c$ (rasio mata uang) dan $re$ (rasio cadangan berlebih) bersifat perilaku, bukan tetap. Saat kepercayaan runtuh, RT menimbun kas ($c\\uparrow$) dan bank menimbun cadangan alih-alih menyalurkan kredit ($re\\uparrow$), sehingga $mm\\downarrow$ dan $M\\downarrow$ meski basis meledak. Dalam pandangan endogenous-money, pinjaman menciptakan deposito dan BS memasok cadangan secara pasif. Itu sebabnya "mencetak uang" tak menghasilkan inflasi satu-banding-satu saat COVID — penggandanya turun.</p>'
                + '<p><strong>Empiris — Indonesia.</strong> Selama COVID BI memperbesar basis tajam (termasuk burden-sharing dengan Kemenkeu), namun pertumbuhan uang luas dan inflasi tetap rendah, dan pasca-2022 ekonomi deleveraging — bank berhati-hati dan permintaan kredit lemah. Pengganda mekanis memprediksi sebaliknya; narasi endogenous-money cocok. Inilah persis poin "pengganda uang tidak bekerja seperti buku teks" pada review.</p>'
                + '<div class="tip">Kesimpulan dan kebijakan: BI sebaiknya memperlakukan aturan Taylor sebagai patokan transparan sambil menambahkan term stabilitas keuangan, $i = \\ldots + \\gamma(F_t - F^{*})$, dan memadukannya dengan alat makroprudensial — batas LTV dan countercyclical capital buffer — untuk lean against boom kredit dan menopang kredit saat bust. Objek kebijakan yang tepat adalah BI rate dan kondisi kredit, bukan aturan basis→uang yang mekanis.</div>',
            },
            aChart: Q3_TAYLOR },

          { n: 4,
            q: {
              en: '<p><strong>Q4 (25%) — Contractionary depreciation and the distributional bite of macro shocks.</strong></p>'
                + '<p><em>Context:</em> Textbook Mundell–Fleming says a depreciation is expansionary (it raises net exports). Yet in 1998 and in several emerging-market episodes a sharp rupiah depreciation coincided with a deep recession, and the pain fell hardest on poor, hand-to-mouth households.</p>'
                + '<p><em>Task:</em> Write an analytical essay explaining (i) the <strong>exchange-rate balance-sheet effect</strong> that can make a depreciation <em>contractionary</em> in an emerging market with foreign-currency debt, and (ii) using a heterogeneous-agent (HANK-style) framework, why the same shock is regressive — it hits the poor harder than the rich. Conclude with the policy implications.</p>',
              id: '<p><strong>Q4 (25%) — Depresiasi kontraktif dan dampak distributif guncangan makro.</strong></p>'
                + '<p><em>Konteks:</em> Mundell–Fleming buku teks mengatakan depresiasi bersifat ekspansif (menaikkan ekspor neto). Namun pada 1998 dan beberapa episode negara berkembang, depresiasi rupiah tajam berbarengan dengan resesi dalam, dan beban terberat jatuh pada rumah tangga miskin hand-to-mouth.</p>'
                + '<p><em>Tugas:</em> Tulis esai analitis yang menjelaskan (i) <strong>efek neraca nilai tukar</strong> yang dapat membuat depresiasi <em>kontraktif</em> di negara berkembang dengan utang valuta asing, dan (ii) dengan kerangka agen heterogen (gaya HANK), mengapa guncangan yang sama bersifat regresif — lebih memukul si miskin daripada si kaya. Tutup dengan implikasi kebijakan.</p>'
            },
            answer: {
              en: '<div class="note">(no official key — model answer using Week 11 balance-sheet effects + the Review 2 four-quadrant heterogeneity diagram)</div>'
                + '<p><strong>Introduction.</strong> The textbook expansionary depreciation rests on the expenditure-switching channel: a weaker currency makes exports cheaper and imports dearer, so $NX\\uparrow$ and aggregate demand rises. My thesis is that in an emerging market with large foreign-currency (dollar) debt this channel can be overwhelmed by a <em>balance-sheet</em> channel that makes depreciation contractionary, and that the resulting downturn is regressive because poor households absorb a disproportionate share of the loss.</p>'
                + '<p><strong>Theoretical benchmark — expenditure switching.</strong> In standard Mundell–Fleming, a depreciation ($E\\uparrow$, Rp/$) raises $\\varepsilon = EP^{*}/P$, improving competitiveness. Net exports rise (subject to Marshall–Lerner and the J-curve lag), shifting AD right, raising output. On this view BI should welcome a weaker rupiah in a downturn.</p>'
                + '<p><strong>Alternative — the balance-sheet effect.</strong> When firms and banks have borrowed in dollars but earn in rupiah, a depreciation raises the rupiah value of their liabilities while assets and revenues stay in rupiah. Net worth falls; with collateral-constrained finance (the financial-accelerator mechanism), lower net worth means less borrowing and investment, $I\\downarrow$. If this contraction in investment dominates the boost to net exports, AD shifts <em>left</em> and the depreciation is contractionary — output falls. This currency-mismatch / original-sin problem is the emerging-market twist on Week 11.</p>'
                + '<p><strong>Distributional layer — heterogeneous agents.</strong> Using the four-quadrant HANK-style diagram, the recession is not shared evenly. Rich households smooth consumption out of wealth and substitute across goods (steep schedule, small consumption drop). Poor, hand-to-mouth households have high MPC, thin buffers and necessity-heavy baskets (food, energy, transport), so the same leftward AD shift cuts their consumption far more, and the inflation they face — driven by imported food and fuel after a depreciation — is higher and stickier than headline. The shock is therefore regressive: $Y_{poor}$ and welfare fall more than $Y_{rich}$.</p>'
                + '<p><strong>Empirics.</strong> The 1997–98 Asian crisis is the canonical case: sharp rupiah depreciation, mass corporate insolvency from unhedged dollar debt, a collapse in investment and a deep recession — the opposite of the textbook expansion — with poverty rising sharply as food prices spiked. More recent EM "taper-tantrum" episodes show milder versions of the same balance-sheet and distributional pattern.</p>'
                + '<div class="tip">Conclusion and policy: a central bank cannot assume depreciation is expansionary when there is currency mismatch. The policy kit is structural and distributional: build FX reserves and use intervention to smooth disorderly moves; reduce currency mismatch through macroprudential limits on unhedged FX borrowing and local-currency bond-market development; and pair stabilisation with targeted fiscal transfers to protect poor households, because aggregate output statistics understate the welfare cost borne by the bottom of the distribution.</div>',
              id: '<div class="note">(tanpa kunci resmi — jawaban model memakai efek neraca Minggu 11 + diagram heterogenitas empat kuadran Review 2)</div>'
                + '<p><strong>Pendahuluan.</strong> Depresiasi ekspansif buku teks bersandar pada kanal expenditure-switching: mata uang lebih lemah membuat ekspor lebih murah dan impor lebih mahal, sehingga $NX\\uparrow$ dan permintaan agregat naik. Tesis saya: di negara berkembang dengan utang valuta asing (dolar) besar, kanal ini bisa dikalahkan kanal <em>neraca</em> yang membuat depresiasi kontraktif, dan resesi yang dihasilkan bersifat regresif karena rumah tangga miskin menyerap pangsa kerugian yang tak proporsional.</p>'
                + '<p><strong>Patokan teoritis — expenditure switching.</strong> Dalam Mundell–Fleming standar, depresiasi ($E\\uparrow$, Rp/$) menaikkan $\\varepsilon = EP^{*}/P$, memperbaiki daya saing. Ekspor neto naik (tunduk pada Marshall–Lerner dan jeda kurva-J), menggeser AD ke kanan, menaikkan output. Menurut pandangan ini BI semestinya menyambut rupiah lebih lemah saat resesi.</p>'
                + '<p><strong>Alternatif — efek neraca.</strong> Saat perusahaan dan bank meminjam dalam dolar tetapi berpenghasilan rupiah, depresiasi menaikkan nilai rupiah kewajiban mereka sementara aset dan pendapatan tetap rupiah. Kekayaan bersih turun; dengan pembiayaan terbatas-agunan (mekanisme akselerator finansial), kekayaan bersih lebih rendah berarti lebih sedikit pinjaman dan investasi, $I\\downarrow$. Jika kontraksi investasi ini mengalahkan dorongan ekspor neto, AD bergeser <em>kiri</em> dan depresiasi kontraktif — output turun. Masalah currency-mismatch / original-sin inilah belokan negara berkembang pada Minggu 11.</p>'
                + '<p><strong>Lapisan distributif — agen heterogen.</strong> Dengan diagram empat kuadran gaya HANK, resesi tak dibagi merata. RT kaya memuluskan konsumsi dari kekayaan dan bersubstitusi antar barang (jadwal curam, penurunan konsumsi kecil). RT miskin hand-to-mouth ber-MPC tinggi, penyangga tipis, keranjang dominan kebutuhan pokok (pangan, energi, transport), sehingga geseran AD kiri yang sama memangkas konsumsi mereka jauh lebih besar, dan inflasi yang mereka hadapi — didorong pangan dan BBM impor pasca-depresiasi — lebih tinggi dan lengket dari headline. Guncangan karena itu regresif: $Y_{miskin}$ dan kesejahteraan turun lebih dari $Y_{kaya}$.</p>'
                + '<p><strong>Empiris.</strong> Krisis Asia 1997–98 adalah kasus kanonik: depresiasi rupiah tajam, kebangkrutan korporasi massal akibat utang dolar tanpa lindung nilai, ambruknya investasi dan resesi dalam — kebalikan ekspansi buku teks — dengan kemiskinan melonjak saat harga pangan meroket. Episode "taper-tantrum" negara berkembang yang lebih baru menunjukkan versi lebih ringan dari pola neraca dan distributif yang sama.</p>'
                + '<div class="tip">Kesimpulan dan kebijakan: bank sentral tak bisa mengasumsikan depresiasi ekspansif saat ada currency mismatch. Perangkat kebijakannya struktural dan distributif: bangun cadangan valas dan pakai intervensi untuk meredam pergerakan kacau; kurangi currency mismatch lewat batas makroprudensial atas pinjaman valas tanpa lindung nilai dan pengembangan pasar obligasi mata uang lokal; dan padukan stabilisasi dengan transfer fiskal tertarget untuk melindungi RT miskin, karena statistik output agregat meremehkan biaya kesejahteraan yang dipikul lapisan terbawah.</div>',
            },
            aChart: Q4_BS } ]
      } ]
  };
})();
