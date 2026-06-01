/* ============================================================================
   MAKRO · Week 14 — Course Summary / Synthesis
   Bilingual (EN + ID). Registers itself on window.MAKRO_WEEKS.w14.
   Source: Prof. Iwan Azis lecture deck "Summary" (Spring 2026), 28 slides
   (14 handout pages × 2). This is the integrative capstone that ties Weeks 8–13
   together into ONE "Workhorse (WH) Model" — graphical, verbal & mathematical,
   across short run, medium run and long run — and then layers the emerging
   issues (climate, crypto/CBDC, MMT, welfare/inequality/poverty/informality).

   Reference: Azis I.J. (2019) "Macroeconomics Post-GFC", Jurnal Ekonomi
   Indonesia Vol 8 No 1, pp.103–124. Robert Solow's "third rule" closes the deck.

   Diagram geometry used in the charts (all redrawn as EconChart specs):
     • 5-markets Venn: GM, MM, ER/Fin/Cap (EM/FM/CpM), LM around a central WH core.
     • SR/MR loop: g_Y → AD → π → u → back to g_Y (Okun + Phillips edges).
     • LR S–K loop: K → (I, Y) → I=S=sY → back to K; TFP (A) on the Y arm.
     • Mechanisms & Anomalies cascade: external F shock → SR / MR / LR transmission.
     • Crisis "story": measured-risk fundamentals → vulnerability → crisis.
     • Inflation–unemployment via the AD–AS GAP (interactive MGAP = M*·GAP).
     • Climate / CBDC proxy shifters (damage function, velocity adjustment).
     • Macro for the non-formal sector: 4-quadrant IS–LM + Phillips, F vs NF.
     • Poverty–inequality 4-quadrant: elasticity of PL & of Y^poor vs Y.
     • Money-creation balance sheets (Bank Credit First vs Bank Intermediation).
   ============================================================================ */
(function () {
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';

  /* ---- Chart 1: The 5 markets of the Workhorse Model ------------------------ */
  /* Rendered as a 2×2 + centre map of the five markets and their core relation. */
  var MARKETS_CHART = { panels: [{
    title: 'Workhorse Model — 5 interacting markets around one core',
    w: 480, h: 340,
    x: { min: 0, max: 10, label: 'breadth of the system' },
    y: { min: 0, max: 10, label: 'level (real ↔ financial)' },
    curves: [
      { id: 'gm', kind: 'path', pts: [[2.5, 8.6], [2.5, 8.6]], color: TEAL, label: 'GM' },
      { id: 'mm', kind: 'path', pts: [[7.5, 8.6], [7.5, 8.6]], color: AMBER, label: 'MM' },
      { id: 'em', kind: 'path', pts: [[2.5, 1.6], [2.5, 1.6]], color: BLUE, label: 'ER/Fin/Cap' },
      { id: 'lm', kind: 'path', pts: [[7.5, 1.6], [7.5, 1.6]], color: GREEN, label: 'LM' }
    ],
    points: [ { at: [5, 5], dot: true, label: 'WH core' } ],
    notes: [
      { x: 2.5, y: 7.6, text: 'Goods: Y=C+I+G+NX', color: TEAL, anchor: 'middle', size: 9.5 },
      { x: 7.5, y: 7.6, text: 'Money: M/P=Y·L(i)', color: AMBER, anchor: 'middle', size: 9.5 },
      { x: 2.5, y: 2.6, text: 'UIP: i=i*+(Eᵉ−E)/E+ρ', color: BLUE, anchor: 'middle', size: 9 },
      { x: 7.5, y: 2.6, text: 'Labour: P=(1+μ)Pᵉ·F(1−Y/L,z)', color: GREEN, anchor: 'middle', size: 8.5 },
      { x: 5, y: 4.0, text: 'disequilibrium → equilibrium: sr · mr · lr', color: '#777', anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 2: Short-Run & Medium-Run loop -------------------------------- */
  /* g_Y → (Aggregate Demand) → π and u, then Okun + Phillips close the loop.   */
  var SRMR_CHART = { panels: [{
    title: 'Short run & medium run: g_Y ↔ AD, Okun & Phillips close the loop',
    w: 480, h: 320,
    x: { min: 0, max: 10, label: '' },
    y: { min: 0, max: 10, label: '' },
    curves: [
      { id: 'ad', kind: 'path', pts: [[1.6, 7.2], [5, 8.6]], color: RED, label: 'Aggregate Demand', smooth: false },
      { id: 'okun', kind: 'path', pts: [[5, 8.6], [8.4, 7.2]], color: AMBER, label: "Okun's law", smooth: false },
      { id: 'phil', kind: 'path', pts: [[2.6, 2.4], [7.4, 2.4]], color: BLUE, label: 'Phillips relation', smooth: false }
    ],
    points: [
      { at: [5, 8.8], dot: true, label: 'g_Y (Growth of Output)' },
      { at: [1.4, 2.2], dot: true, label: 'π (Inflation)' },
      { at: [8.6, 2.2], dot: true, label: 'u (Unemployment)' }
    ],
    notes: [
      { x: 5, y: 6.0, text: '(Ȳ−Y)/Ȳ = c(u−ū)', color: AMBER, anchor: 'middle', size: 10 },
      { x: 5, y: 1.3, text: 'πₜ − πₜ₋₁ = −α(uₜ − uₙ)', color: BLUE, anchor: 'middle', size: 10 },
      { x: 2.0, y: 5.4, text: 'demand pulls output up', color: '#777', anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 3: Long-Run Saving (S) & Capital Stock (K) loop ---------------- */
  var LRSK_CHART = { panels: [{
    title: 'Long run: K → (I, Y), with I = S = sY and Y = A·F(K,N)',
    w: 480, h: 320,
    x: { min: 0, max: 10, label: '' },
    y: { min: 0, max: 10, label: '' },
    curves: [
      { id: 'ki', kind: 'path', pts: [[5, 8.6], [2.0, 4.0]], color: TEAL, label: 'Kₜ−(1−δ)Kₜ₋₁=I', smooth: false },
      { id: 'ky', kind: 'path', pts: [[5, 8.6], [8.0, 4.0]], color: GREEN, label: 'Y=A·F(K,N)', smooth: false },
      { id: 'is', kind: 'path', pts: [[2.0, 3.2], [8.0, 3.2]], color: AMBER, label: 'I = S = sY', smooth: false }
    ],
    points: [
      { at: [5, 8.8], dot: true, label: 'K (Capital Stock)' },
      { at: [1.8, 3.0], dot: true, label: 'I' },
      { at: [8.2, 3.0], dot: true, label: 'Y' }
    ],
    notes: [
      { x: 6.9, y: 6.7, text: 'TFP = A', color: RED, anchor: 'middle', size: 10 },
      { x: 5, y: 1.6, text: 'SR comparative-static → MR trend → LR technology', color: '#777', anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 4: Mechanisms & Anomalies cascade ------------------------------ */
  /* External F shock propagates: SR (M↑→i↓→Y↑→u↓) ; MR (P↑→M/P↓→r↓→i↑→C,I)    */
  /* ; LR (Y↓→S&ΔA). Macroprudential caps the long-run loop.                    */
  var CASCADE_CHART = { panels: [{
    title: 'Mechanisms & Anomalies: an external shock through SR → MR → LR',
    w: 500, h: 340,
    x: { min: 0, max: 10, label: 'transmission steps' },
    y: { min: 0, max: 10, label: 'horizon (SR top → LR bottom)' },
    curves: [
      { id: 'sr', kind: 'path', pts: [[0.6, 9.0], [9.4, 9.0]], color: RED, label: 'Short-run', smooth: false },
      { id: 'mr', kind: 'path', pts: [[3.0, 5.2], [9.4, 5.2]], color: AMBER, label: 'Medium Run', smooth: false },
      { id: 'lr', kind: 'path', pts: [[0.6, 1.4], [9.4, 1.4]], color: GREEN, label: 'Long-run', smooth: false }
    ],
    notes: [
      { x: 0.7, y: 9.6, text: 'F (external)', color: RED, anchor: 'start', size: 9.5 },
      { x: 5.0, y: 9.6, text: 'M↑ → M/P↑ → i↓ → Y↑ → u↓', color: '#444', anchor: 'middle', size: 9 },
      { x: 1.8, y: 8.1, text: 'contagion · β–S effect · expectation amplification', color: '#777', anchor: 'start', size: 8.5 },
      { x: 7.3, y: 8.1, text: 'fin frictions · liquidity trap · Δrisk premium', color: '#777', anchor: 'start', size: 8.5 },
      { x: 5.6, y: 5.8, text: 'P↑ → M/P↓ → r↓ → i↑ → C↓, I↓ (Pstock, Pbond)', color: '#444', anchor: 'middle', size: 8.5 },
      { x: 2.4, y: 2.0, text: 'Y↓ → S & ΔA ; Ex, Im → NX & CA', color: '#444', anchor: 'start', size: 8.5 },
      { x: 8.4, y: 2.0, text: 'Macroprudential', color: BLUE, anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 5: Crisis "story" — when macro equilibrium fails --------------- */
  var CRISIS_CHART = { panels: [{
    kind: 'bars',
    title: 'When the equilibrium "story" fails: measured risks → vulnerability → crisis',
    w: 480, h: 300,
    yMax: 10,
    bars: [
      { label: 'Fundamentals', value: 4, color: TEAL, caption: 'credit boom, RER↑' },
      { label: 'Balance sheet', value: 6, color: AMBER, caption: 'currency mismatch' },
      { label: 'Liquidity trap', value: 8, color: RED, caption: 'hidden risk' },
      { label: 'Crisis', value: 9.5, color: RED, caption: 'outcome' }
    ],
    gap: { from: 3, to: 0, label: 'vulnerability', color: RED }
  }] };

  /* ---- Chart 6: Inflation–unemployment via the AD–AS GAP -------------------- */
  var GAP_CHART = { panels: [{
    title: 'π & u via the GAP between AD and AS (interactive: MGAP = M*·GAP)',
    w: 470, h: 320,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Price level P' },
    curves: [
      { id: 'AD',  kind: 'line', p1: [1, 9], p2: [9, 1], color: TEAL,  label: 'AD' },
      { id: 'AS',  kind: 'line', p1: [1, 1.5], p2: [9, 8.5], color: RED, label: 'AS' },
      { id: 'YS',  kind: 'vline', x: 7, color: LINE, label: 'YS (potential)', dash: true }
    ],
    points: [
      { on: ['AD', 'AS'], guideX: 'Y*', guideY: 'P*', dot: true, label: 'E' },
      { on: ['AD', 'YS'], dot: true, label: 'Y vs YS' }
    ],
    notes: [
      { x: 5.4, y: 2.2, text: 'GAP = Y − YS drives ΔP and u', color: '#777', anchor: 'middle', size: 9.5 }
    ]
  }] };

  /* ---- Chart 7: Climate as a productivity / cost shifter -------------------- */
  var CLIMATE_CHART = { panels: [{
    title: 'Climate as a supply-side shock: damage function D(T) shifts AS up',
    w: 470, h: 320,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Price level P' },
    curves: [
      { id: 'AD',  kind: 'line', p1: [1, 9], p2: [9, 1], color: TEAL, label: 'AD' },
      { id: 'AS0', kind: 'line', p1: [1, 1.5], p2: [9, 7.5], color: LINE, label: 'AS₀' },
      { id: 'AS1', kind: 'line', p1: [1, 3.0], p2: [9, 9.0], color: RED, label: 'AS₁ (after D(T))', dash: true }
    ],
    points: [
      { on: ['AD', 'AS0'], guideX: 'Y₀', guideY: 'P₀', dot: true },
      { on: ['AD', 'AS1'], guideX: 'Y₁', guideY: 'P₁', dot: true }
    ],
    shifts: [ { from: 'AS0', to: 'AS1' } ],
    notes: [
      { x: 3.0, y: 8.4, text: 'Y=A·f(K,L,D)·(1−D(T)); damage ⇒ Y↓, P↑', color: '#777', anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 8: Poverty–inequality 4-quadrant ------------------------------- */
  /* PL elasticity (NW) and Y^poor elasticity (SE) with α<β worsening poverty.   */
  var POVERTY_CHART = { panels: [{
    title: 'Macro policy & poverty: elasticity of PL and of Y^poor (α<β worsens poverty)',
    w: 500, h: 340,
    x: { min: 0, max: 10, label: 'Y (output) / income of the poor' },
    y: { min: 0, max: 10, label: 'Δπ (inflation) / poverty line PL' },
    curves: [
      { id: 'adas', kind: 'line', p1: [4.5, 8.8], p2: [9, 7.0], color: LINE, label: 'AS–PC (flat AS)' },
      { id: 'ad',   kind: 'line', p1: [4.5, 8.8], p2: [9, 5.4], color: TEAL, label: 'AD', dash: true },
      { id: 'worse', kind: 'path', pts: [[4.5, 4.8], [5.6, 2.6], [8.6, 1.6]], color: RED, label: 'worse distribution', smooth: true },
      { id: 'better', kind: 'path', pts: [[4.5, 3.4], [5.8, 1.9], [8.6, 1.3]], color: GREEN, label: 'better distribution', smooth: true }
    ],
    notes: [
      { x: 2.4, y: 7.6, text: 'Elasticity of PL w.r.t P (α)', color: '#777', anchor: 'middle', size: 9 },
      { x: 6.6, y: 4.4, text: 'Elasticity of Y^poor w.r.t Y (β)', color: '#777', anchor: 'middle', size: 9 },
      { x: 2.4, y: 5.6, text: 'α < β ⇒ poverty worsens', color: RED, anchor: 'middle', size: 9.5 }
    ]
  }] };

  /* ---- Chart 9: Money creation — Bank Credit First vs Intermediation -------- */
  var MONEY_CHART = { panels: [{
    kind: 'bars',
    title: 'Bank Credit First: a new loan creates a new deposit (broad money M2↑)',
    w: 470, h: 300,
    yMax: 10,
    bars: [
      { label: 'M0', value: 2.5, color: LINE, caption: 'base money' },
      { label: 'M1', value: 5, color: TEAL, caption: 'M0 + demand dep.' },
      { label: 'M2', value: 9, color: GREEN, caption: 'M1 + savings/time' }
    ],
    gap: { from: 2, to: 1, label: 'credit → deposit', color: GREEN }
  }] };

  /* ---- Chart 10: Non-formal sector — 4-quadrant IS–LM + Phillips ------------ */
  var NONFORMAL_CHART = { panels: [
    {
      title: '↓G: medium-term equil A₁B₃ ; IS shifts left (formal vs non-formal)',
      w: 360, h: 300,
      x: { min: 0, max: 10, label: 'Y' },
      y: { min: 0, max: 10, label: 'r' },
      curves: [
        { id: 'IS0', kind: 'line', p1: [1, 8.5], p2: [8, 2.0], color: GREEN, label: 'ISᴺᶠ' },
        { id: 'IS1', kind: 'line', p1: [0.5, 6.5], p2: [6.5, 1.0], color: TEAL, label: 'ISᶠ', dash: true },
        { id: 'LM',  kind: 'line', p1: [1, 2.0], p2: [9, 7.5], color: AMBER, label: 'LM' }
      ],
      points: [
        { on: ['IS0', 'LM'], guideX: 'A₁', dot: true, label: 'A₁' },
        { on: ['IS1', 'LM'], guideX: 'B₃', dot: true, label: 'B₃' }
      ],
      shifts: [ { from: 'IS0', to: 'IS1' } ]
    },
    {
      title: '↑Tᴴ: formal output falls faster than non-formal (mismatch persists)',
      w: 360, h: 300,
      x: { min: 0, max: 10, label: 'Y' },
      y: { min: 0, max: 10, label: 'r' },
      curves: [
        { id: 'IS0', kind: 'line', p1: [1.5, 8.5], p2: [8.5, 2.0], color: GREEN, label: 'ISᴺᶠ' },
        { id: 'IS1', kind: 'line', p1: [0.8, 6.8], p2: [7.0, 1.2], color: TEAL, label: 'ISᶠ', dash: true },
        { id: 'LM',  kind: 'line', p1: [1, 1.8], p2: [9, 7.0], color: AMBER, label: 'LM' }
      ],
      points: [
        { on: ['IS0', 'LM'], guideX: 'A₁', dot: true, label: 'A₁' },
        { on: ['IS1', 'LM'], guideX: 'B₁', dot: true, label: 'B₁' }
      ],
      shifts: [ { from: 'IS0', to: 'IS1' } ]
    }
  ] };

  window.MAKRO_WEEKS.w14 = {
    id: 'w14',
    label: { en: 'Week 14', id: 'Pertemuan 14' },
    title: { en: 'Course Summary — The Workhorse Model & Emerging Issues',
             id: 'Ringkasan Kuliah — Model Workhorse & Isu-Isu Mutakhir' },
    subtitle: {
      en: 'One unifying "Workhorse" model — graphical, verbal & mathematical, across short, medium & long run — that ties together the five markets (goods, money, ER/financial/capital, labour), Okun & Phillips, the S–K growth loop, financial frictions & crises, and the frontier issues: climate, crypto/CBDC, MMT, money creation, welfare, inequality, poverty and the informal sector. The integrative map for the UAS.',
      id: 'Satu model "Workhorse" pemersatu — secara grafis, verbal & matematis, lintas jangka pendek, menengah & panjang — yang merangkai lima pasar (barang, uang, nilai tukar/keuangan/modal, tenaga kerja), Okun & Phillips, lingkar pertumbuhan S–K, friksi keuangan & krisis, serta isu perbatasan: iklim, kripto/CBDC, MMT, penciptaan uang, kesejahteraan, ketimpangan, kemiskinan dan sektor informal. Peta integratif untuk UAS.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'From the Syllabus — the three-pronged approach', id: 'Dari Silabus — pendekatan tiga tahap' },
        num: '1',
        cards: [
          {
            title: { en: 'Why one "system" of the macro model', id: 'Mengapa satu "sistem" model makro' },
            html: {
              en: `<p>Prof. Azis frames the whole course around a single goal: students must understand the key <span class="key">components / topics of macro workhorse concepts</span> (the ones contained in any standard macro textbook) <em>and how they interact</em>. The mechanism of those interactions is captured in <span class="key">one system of a macroeconomic model</span>, with special weight on the cases relevant to <span class="key">Indonesia</span>.</p>
<p>The pedagogy is a deliberate <span class="key">three-pronged approach</span>:</p>
<ol>
<li><b>Phase 1 — a relatively simple model.</b> Introduce the core macro concepts first, before combining them. Build intuition with the bare workhorse blocks.</li>
<li><b>Phase 2 — one integrated model.</b> Combine the basic mathematical relations of the blocks into a single connected system, so a shock in one market can be traced through all the others.</li>
<li><b>Phase 3 — emerging issues.</b> With the model in hand, analyse the live macro problems and policies (slowing growth, higher inflation, record debt, persistent uncertainty) and extend the model to <em>new and emerging</em> issues — digital technology, poverty & inequality, MMT, climate change.</li>
</ol>
<div class="tip">This slide is the skeleton of the whole UAS. Whenever a question feels open-ended, ask: which <em>phase</em> is being tested? Phase 1 = define a block; Phase 2 = trace interactions through the integrated model; Phase 3 = bolt an emerging issue (climate / CBDC / informality) onto the workhorse and re-derive.</div>`,
              id: `<p>Prof. Azis membingkai seluruh kuliah pada satu tujuan: mahasiswa harus memahami <span class="key">komponen / topik konsep makro workhorse</span> (yang ada di setiap buku teks makro standar) <em>dan bagaimana mereka berinteraksi</em>. Mekanisme interaksi itu ditangkap dalam <span class="key">satu sistem model makroekonomi</span>, dengan penekanan khusus pada kasus yang relevan bagi <span class="key">Indonesia</span>.</p>
<p>Pedagoginya adalah <span class="key">pendekatan tiga tahap</span> yang disengaja:</p>
<ol>
<li><b>Tahap 1 — model yang relatif sederhana.</b> Perkenalkan konsep makro inti dulu, sebelum digabung. Bangun intuisi dengan blok-blok workhorse polos.</li>
<li><b>Tahap 2 — satu model terintegrasi.</b> Gabungkan relasi matematis dasar antar-blok menjadi satu sistem terhubung, sehingga guncangan di satu pasar bisa ditelusuri ke semua pasar lain.</li>
<li><b>Tahap 3 — isu mutakhir.</b> Dengan model di tangan, analisis masalah & kebijakan makro nyata (pertumbuhan melambat, inflasi naik, utang rekor, ketidakpastian persisten) dan perluas model ke isu <em>baru & mutakhir</em> — teknologi digital, kemiskinan & ketimpangan, MMT, perubahan iklim.</li>
</ol>
<div class="tip">Slide ini adalah kerangka seluruh UAS. Setiap kali soal terasa terbuka, tanyakan: <em>tahap</em> mana yang diuji? Tahap 1 = definisikan blok; Tahap 2 = telusuri interaksi lewat model terintegrasi; Tahap 3 = pasang isu mutakhir (iklim / CBDC / informalitas) ke workhorse lalu turunkan ulang.</div>`
            }
          },
          {
            title: { en: 'Macroeconomics & Model — the one-page map', id: 'Makroekonomi & Model — peta satu halaman' },
            html: {
              en: `<p>The deck's organising diagram puts <span class="key">"Macroeconomics & Model"</span> at the centre and surrounds it with everything the course covered:</p>
<ul>
<li><b>The working of 5 markets</b> — from disequilibrium to equilibrium across <span class="key">sr · mr · lr</span> (short, medium, long run).</li>
<li><b>Expectations, inconsistency, credibility, uncertainty</b> — why the rational-expectations benchmark is not enough.</li>
<li><b>Mechanisms, anomalies & adjustments</b> — how shocks propagate and where the model breaks.</li>
<li><b>Macro-finance</b> — financial frictions, capital flows, crisis & macroprudential policy (Weeks 8–12).</li>
<li><b>Emerging issues</b> — climate change, crypto & CBDC (Week 13).</li>
<li><b>Macro & people's welfare</b> — inequality, poverty & informality.</li>
<li>and a closing <span class="key">"Cautionary Notes & Future of Macroeconomics?"</span></li>
</ul>
<div class="note">Read the map as concentric: the <em>core</em> is the textbook workhorse; the <em>first ring</em> is interactions across time horizons; the <em>outer ring</em> is the post-GFC frontier (Azis 2019, "Macroeconomics Post-GFC", <em>Jurnal Ekonomi Indonesia</em> 8(1):103–124).</div>`,
              id: `<p>Diagram pengatur slide menaruh <span class="key">"Makroekonomi & Model"</span> di tengah dan mengelilinginya dengan semua yang dibahas kuliah:</p>
<ul>
<li><b>Kerja 5 pasar</b> — dari disekuilibrium ke ekuilibrium lintas <span class="key">sr · mr · lr</span> (jangka pendek, menengah, panjang).</li>
<li><b>Ekspektasi, inkonsistensi, kredibilitas, ketidakpastian</b> — mengapa tolok ukur ekspektasi rasional tidak cukup.</li>
<li><b>Mekanisme, anomali & penyesuaian</b> — bagaimana guncangan menyebar dan di mana model patah.</li>
<li><b>Makro-keuangan</b> — friksi keuangan, arus modal, krisis & kebijakan makroprudensial (Minggu 8–12).</li>
<li><b>Isu mutakhir</b> — perubahan iklim, kripto & CBDC (Minggu 13).</li>
<li><b>Makro & kesejahteraan rakyat</b> — ketimpangan, kemiskinan & informalitas.</li>
<li>dan penutup <span class="key">"Catatan Peringatan & Masa Depan Makroekonomi?"</span></li>
</ul>
<div class="note">Baca peta secara konsentris: <em>inti</em> adalah workhorse buku teks; <em>cincin pertama</em> adalah interaksi lintas horizon waktu; <em>cincin luar</em> adalah perbatasan pasca-GFC (Azis 2019, "Macroeconomics Post-GFC", <em>Jurnal Ekonomi Indonesia</em> 8(1):103–124).</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The Workhorse Model: 5 markets, one system', id: 'Model Workhorse: 5 pasar, satu sistem' },
        num: '2',
        cards: [
          {
            title: { en: 'Graphical · verbal · mathematical, across SR/MR/LR', id: 'Grafis · verbal · matematis, lintas SR/MR/LR' },
            html: {
              en: `<p>The unifying "WH" (Workhorse) model is presented three ways simultaneously — <span class="key">graphically</span> (the AD–AS, IS–LM, Phillips, S–K diagrams), <span class="key">verbally</span> (the chain-of-causation stories), and <span class="key">mathematically</span> (the block equations) — and it is run across the three horizons. The <span class="key">short run</span> takes prices and the capital stock as fixed; the <span class="key">medium run</span> lets prices and expectations adjust toward the natural rate; the <span class="key">long run</span> lets capital and technology grow.</p>
<p>Macroeconomics here is "<em>the working of 5 markets: from disequilibrium to equilibrium</em>". A shock first throws a market out of balance; the adjustment mechanisms then move the system back, but at different speeds in each horizon — and sometimes they fail (anomalies).</p>`,
              id: `<p>Model "WH" (Workhorse) pemersatu disajikan tiga cara sekaligus — secara <span class="key">grafis</span> (diagram AD–AS, IS–LM, Phillips, S–K), <span class="key">verbal</span> (cerita rantai sebab-akibat), dan <span class="key">matematis</span> (persamaan blok) — dan dijalankan lintas tiga horizon. <span class="key">Jangka pendek</span> menganggap harga dan stok modal tetap; <span class="key">jangka menengah</span> membiarkan harga dan ekspektasi menyesuaikan menuju tingkat alamiah; <span class="key">jangka panjang</span> membiarkan modal dan teknologi tumbuh.</p>
<p>Makroekonomi di sini adalah "<em>kerja 5 pasar: dari disekuilibrium menuju ekuilibrium</em>". Guncangan mula-mula melempar satu pasar keluar keseimbangan; mekanisme penyesuaian lalu mengembalikan sistem, tetapi dengan kecepatan berbeda di tiap horizon — dan kadang gagal (anomali).</p>`
            },
            chart: MARKETS_CHART
          },
          {
            title: { en: 'The four core market equations', id: 'Empat persamaan pasar inti' },
            html: {
              en: `<p>Each market is one equation in the system:</p>
<div class="formula">Goods (GM): $\\;Y = C[(W,(Y-T)] + I(Y,r) + G + EX(Y^*,RER) - RER\\cdot IM(Y,RER)$</div>
<div class="formula">Money (MM): $\\;M/P = Y\\cdot L(i)$</div>
<div class="formula">ER / Fin / Cap (EM·FM·CpM): $\\;i_t = i_t^f + (E^e_{t+1}-E_t)/E_t + \\rho,\\quad P^b = V/(1+i),\\quad P^s = D^e/(1+r)$</div>
<div class="formula">Labour (LM): $\\;P = (1+\\mu)\\,P^e\\cdot F\\!\\left(1-\\frac{Y}{L},\\,z\\right)$</div>
<ul>
<li><b>GM</b> is the open-economy goods-market identity $Y=C+I+G+NX$, with consumption depending on wealth $W$ and disposable income, investment on output and the real rate, and net exports on the real exchange rate $RER$.</li>
<li><b>MM</b> is real money demand: $M/P$ equals income $Y$ scaled by the liquidity-preference function $L(i)$, falling in the nominal rate $i$.</li>
<li><b>EM/FM/CpM</b> is <span class="key">uncovered interest parity (UIP)</span> plus bond and stock pricing: the domestic rate equals the foreign rate $i^f$ plus expected depreciation plus a risk premium $\\rho$; a bond is the present value of its coupon $V$, a share the present value of expected dividends $D^e$.</li>
<li><b>LM</b> is the price-setting / wage-setting block: the price level is a mark-up $(1+\\mu)$ over expected prices $P^e$ times the wage-setting function $F$, which depends on unemployment $1-Y/L$ and a catch-all bargaining variable $z$.</li>
</ul>
<div class="tip">Memorise these four lines as a unit — they ARE the workhorse. Every diagram you draw in the UAS is a projection of one or two of them; every "trace the shock" question is a walk around this system.</div>`,
              id: `<p>Tiap pasar adalah satu persamaan dalam sistem:</p>
<div class="formula">Barang (GM): $\\;Y = C[(W,(Y-T)] + I(Y,r) + G + EX(Y^*,RER) - RER\\cdot IM(Y,RER)$</div>
<div class="formula">Uang (MM): $\\;M/P = Y\\cdot L(i)$</div>
<div class="formula">NT / Keuangan / Modal (EM·FM·CpM): $\\;i_t = i_t^f + (E^e_{t+1}-E_t)/E_t + \\rho,\\quad P^b = V/(1+i),\\quad P^s = D^e/(1+r)$</div>
<div class="formula">Tenaga kerja (LM): $\\;P = (1+\\mu)\\,P^e\\cdot F\\!\\left(1-\\frac{Y}{L},\\,z\\right)$</div>
<ul>
<li><b>GM</b> adalah identitas pasar barang ekonomi terbuka $Y=C+I+G+NX$, dengan konsumsi bergantung pada kekayaan $W$ dan pendapatan disposabel, investasi pada output dan suku bunga riil, dan ekspor neto pada nilai tukar riil $RER$.</li>
<li><b>MM</b> adalah permintaan uang riil: $M/P$ sama dengan pendapatan $Y$ dikali fungsi preferensi likuiditas $L(i)$, turun terhadap suku bunga nominal $i$.</li>
<li><b>EM/FM/CpM</b> adalah <span class="key">paritas suku bunga tak tertutup (UIP)</span> plus penentuan harga obligasi & saham: suku bunga domestik sama dengan suku bunga asing $i^f$ plus depresiasi ekspektasi plus premi risiko $\\rho$; obligasi adalah nilai sekarang kuponnya $V$, saham nilai sekarang dividen ekspektasi $D^e$.</li>
<li><b>LM</b> adalah blok penetapan harga / upah: tingkat harga adalah mark-up $(1+\\mu)$ atas harga ekspektasi $P^e$ dikali fungsi penetapan upah $F$, yang bergantung pada pengangguran $1-Y/L$ dan variabel tawar-menawar $z$.</li>
</ul>
<div class="tip">Hafalkan empat baris ini sebagai satu kesatuan — inilah workhorse. Setiap diagram yang kamu gambar di UAS adalah proyeksi satu atau dua di antaranya; setiap soal "telusuri guncangan" adalah jalan-jalan mengelilingi sistem ini.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Short run & medium run: Okun & Phillips', id: 'Jangka pendek & menengah: Okun & Phillips' },
        num: '3',
        cards: [
          {
            title: { en: 'The g_Y ↔ AD loop, and the two closing relations', id: 'Lingkar g_Y ↔ AD, dan dua relasi penutup' },
            html: {
              en: `<p>In the short/medium run the deck draws a triangle linking <span class="key">Growth of Output</span> ($g_Y$), <span class="key">Inflation</span> ($\\pi$) and <span class="key">Unemployment</span> ($u$). The arrows are the workhorse relations:</p>
<ul>
<li><b>Aggregate Demand</b> drives output growth: stronger demand raises $g_Y$.</li>
<li><b>Okun's law</b> links output to unemployment: $\\dfrac{\\bar Y - Y}{\\bar Y} = c\\,(u - \\bar u)$ — a one-point rise in unemployment above the natural rate $\\bar u$ opens an output gap of $c$ percent.</li>
<li><b>The Phillips relation</b> links unemployment to inflation: $\\pi_t - \\pi_{t-1} = -\\alpha\\,(u_t - u_n)$ — unemployment below the natural rate $u_n$ accelerates inflation.</li>
</ul>
<p>Put together: a demand expansion → higher $g_Y$ → lower $u$ (Okun) → rising $\\pi$ (Phillips). In the <span class="key">medium run</span> the economy returns to $\\bar u = u_n$ and potential output; only the price level and inflation are permanently changed. This is the engine behind every "what happens after a monetary/fiscal shock?" answer.</p>`,
              id: `<p>Di jangka pendek/menengah slide menggambar segitiga yang menghubungkan <span class="key">Pertumbuhan Output</span> ($g_Y$), <span class="key">Inflasi</span> ($\\pi$) dan <span class="key">Pengangguran</span> ($u$). Panahnya adalah relasi workhorse:</p>
<ul>
<li><b>Permintaan Agregat</b> mendorong pertumbuhan output: permintaan lebih kuat menaikkan $g_Y$.</li>
<li><b>Hukum Okun</b> menghubungkan output dengan pengangguran: $\\dfrac{\\bar Y - Y}{\\bar Y} = c\\,(u - \\bar u)$ — kenaikan satu poin pengangguran di atas tingkat alamiah $\\bar u$ membuka kesenjangan output sebesar $c$ persen.</li>
<li><b>Relasi Phillips</b> menghubungkan pengangguran dengan inflasi: $\\pi_t - \\pi_{t-1} = -\\alpha\\,(u_t - u_n)$ — pengangguran di bawah tingkat alamiah $u_n$ mempercepat inflasi.</li>
</ul>
<p>Digabung: ekspansi permintaan → $g_Y$ naik → $u$ turun (Okun) → $\\pi$ naik (Phillips). Di <span class="key">jangka menengah</span> ekonomi kembali ke $\\bar u = u_n$ dan output potensial; hanya tingkat harga dan inflasi yang berubah permanen. Inilah mesin di balik setiap jawaban "apa yang terjadi setelah guncangan moneter/fiskal?".</p>`
            },
            chart: SRMR_CHART
          }
        ]
      },

      {
        heading: { en: 'Long run: saving, capital & technology', id: 'Jangka panjang: tabungan, modal & teknologi' },
        num: '4',
        cards: [
          {
            title: { en: 'The S–K loop and the role of TFP', id: 'Lingkar S–K dan peran TFP' },
            html: {
              en: `<p>The long-run block is a loop between <span class="key">capital stock $K$</span>, <span class="key">investment $I$</span> and <span class="key">output $Y$</span>:</p>
<div class="formula">Capital accumulation: $\\;K_t - (1-\\delta)K_{t-1} = I$</div>
<div class="formula">Saving = investment: $\\;I = S = sY$</div>
<div class="formula">Production: $\\;Y = A\\cdot F(K,N)$</div>
<p>Output is produced with capital $K$ and labour $N$ scaled by <span class="key">total factor productivity (TFP) $A$</span>. A constant saving rate $s$ turns output into investment, investment (net of depreciation $\\delta$) into next period's capital, and capital back into output. The deck labels the three horizons on this same diagram:</p>
<ul>
<li><span class="key">Short run</span>: comparative-static — capital is fixed, you read off the impact of a shock.</li>
<li><span class="key">Medium run</span>: trend implications — capital and prices adjust toward steady state.</li>
<li><span class="key">Long run</span>: technology ($s$, and especially growth of $A$). At this horizon "<em>short-run fluctuation looks very small</em>" — what matters for living standards is the trend in $A$ and $s$, not the business cycle.</li>
</ul>
<div class="note">This is the bridge from the business-cycle half of the course to growth. Solow's punchline: in the long run, sustained growth in income per worker comes only from <span class="key">technological progress (TFP)</span> — not from piling up capital, which runs into diminishing returns.</div>`,
              id: `<p>Blok jangka panjang adalah lingkar antara <span class="key">stok modal $K$</span>, <span class="key">investasi $I$</span> dan <span class="key">output $Y$</span>:</p>
<div class="formula">Akumulasi modal: $\\;K_t - (1-\\delta)K_{t-1} = I$</div>
<div class="formula">Tabungan = investasi: $\\;I = S = sY$</div>
<div class="formula">Produksi: $\\;Y = A\\cdot F(K,N)$</div>
<p>Output diproduksi dengan modal $K$ dan tenaga kerja $N$ dikali <span class="key">produktivitas faktor total (TFP) $A$</span>. Tingkat tabungan konstan $s$ mengubah output menjadi investasi, investasi (neto dari depresiasi $\\delta$) menjadi modal periode berikutnya, dan modal kembali menjadi output. Slide melabeli tiga horizon pada diagram yang sama:</p>
<ul>
<li><span class="key">Jangka pendek</span>: statis-komparatif — modal tetap, kamu membaca dampak guncangan.</li>
<li><span class="key">Jangka menengah</span>: implikasi tren — modal dan harga menyesuaikan menuju steady state.</li>
<li><span class="key">Jangka panjang</span>: teknologi ($s$, dan terutama pertumbuhan $A$). Pada horizon ini "<em>fluktuasi jangka pendek tampak sangat kecil</em>" — yang penting bagi taraf hidup adalah tren $A$ dan $s$, bukan siklus bisnis.</li>
</ul>
<div class="note">Inilah jembatan dari paruh siklus-bisnis kuliah ke pertumbuhan. Inti Solow: dalam jangka panjang, pertumbuhan berkelanjutan pendapatan per pekerja hanya datang dari <span class="key">kemajuan teknologi (TFP)</span> — bukan dari menumpuk modal, yang menghadapi diminishing returns.</div>`
            },
            chart: LRSK_CHART
          }
        ]
      },

      {
        heading: { en: 'Expectations, credibility & uncertainty', id: 'Ekspektasi, kredibilitas & ketidakpastian' },
        num: '5',
        cards: [
          {
            title: { en: 'Why expectations make the IS curve steeper', id: 'Mengapa ekspektasi membuat kurva IS lebih curam' },
            html: {
              en: `<p>Expectations are not just an add-on; their formation is a <span class="key">psychological and sociological</span> process — a social process, not a tidy mathematical one. Start from private demand $D_p$:</p>
<div class="formula">$Y = C(Y-T) + I(Y,r) + G + NX = D_p(Y,T,r) + G + NX$</div>
<p>Now make every argument forward-looking, with a superscript $e$ for the future expected value:</p>
<div class="formula">$Y = D_p(Y,\\,T,\\,r,\\,Y^e,\\,T^e,\\,r^e) + G + NX$</div>
<p><b>Implication:</b> the IS curve is <span class="key">steeper</span> than it would be without expectation factors → a <span class="key">smaller effect of $\\Delta i$</span>. When firms and households look ahead, a one-off change in today's rate moves spending less, because what really drives investment and consumption is the <em>expected path</em> of income and rates, not just today's level. This is the deck's key warning: ignore expectations and you will overstate the power of monetary policy.</p>`,
              id: `<p>Ekspektasi bukan sekadar tambahan; pembentukannya adalah proses <span class="key">psikologis dan sosiologis</span> — proses sosial, bukan proses matematis yang rapi. Mulai dari permintaan swasta $D_p$:</p>
<div class="formula">$Y = C(Y-T) + I(Y,r) + G + NX = D_p(Y,T,r) + G + NX$</div>
<p>Sekarang jadikan setiap argumen berorientasi-masa-depan, dengan superskrip $e$ untuk nilai ekspektasi masa depan:</p>
<div class="formula">$Y = D_p(Y,\\,T,\\,r,\\,Y^e,\\,T^e,\\,r^e) + G + NX$</div>
<p><b>Implikasi:</b> kurva IS menjadi <span class="key">lebih curam</span> dibanding tanpa faktor ekspektasi → <span class="key">efek $\\Delta i$ lebih kecil</span>. Ketika perusahaan dan rumah tangga memandang ke depan, perubahan suku bunga hari ini yang sekali-jadi menggerakkan belanja lebih sedikit, karena yang sungguh mendorong investasi dan konsumsi adalah <em>jalur ekspektasi</em> pendapatan dan suku bunga, bukan sekadar tingkat hari ini. Inilah peringatan kunci slide: abaikan ekspektasi maka kamu akan melebih-lebihkan kekuatan kebijakan moneter.</p>`
            }
          },
          {
            title: { en: 'Expectations in consumption & investment', id: 'Ekspektasi dalam konsumsi & investasi' },
            html: {
              en: `<p>The deck unpacks where expectations enter the two big spending blocks.</p>
<p><b>Consumption.</b> $C_t$ depends on expected income $Y_t$ (itself net of taxes $Y_t-T$) and on expected future income $Y^e$ via the present value of $r, r^e$. Permanent-income / life-cycle logic: households smooth consumption against the <em>discounted expected</em> stream, splitting wealth into a human-capital part (HOU) and a financial part ($W_{NH}$, FIN).</p>
<p><b>Investment.</b> $I_t$ responds to expected profit $\\Pi^e$, which in turn depends on current sales / output ($S_t$ or $Y_t$), the capital stock $K_t$, depreciation $\\delta$, and the present value discounted at $r, r^e$. Investment is therefore the most forward-looking, most expectations-sensitive component — small changes in confidence about $\\Pi^e$ swing $I$ sharply.</p>
<div class="tip">Exam cue: if a question says "the central bank cuts the rate but investment barely moves", the workhorse answer is <em>expectations</em> — credibility of the cut, the expected future path of rates, and expected profits $\\Pi^e$ all matter more than today's $i$.</div>`,
              id: `<p>Slide membongkar di mana ekspektasi masuk ke dua blok belanja besar.</p>
<p><b>Konsumsi.</b> $C_t$ bergantung pada pendapatan ekspektasi $Y_t$ (neto pajak $Y_t-T$) dan pada pendapatan masa depan ekspektasi $Y^e$ lewat nilai sekarang $r, r^e$. Logika pendapatan-permanen / siklus-hidup: rumah tangga memuluskan konsumsi terhadap aliran <em>ekspektasi terdiskonto</em>, membagi kekayaan menjadi bagian modal-manusia (HOU) dan bagian keuangan ($W_{NH}$, FIN).</p>
<p><b>Investasi.</b> $I_t$ merespons laba ekspektasi $\\Pi^e$, yang bergantung pada penjualan / output saat ini ($S_t$ atau $Y_t$), stok modal $K_t$, depresiasi $\\delta$, dan nilai sekarang yang didiskon pada $r, r^e$. Investasi karena itu komponen paling berorientasi-depan dan paling sensitif-ekspektasi — perubahan kecil keyakinan atas $\\Pi^e$ mengayun $I$ tajam.</p>
<div class="tip">Petunjuk ujian: bila soal berkata "bank sentral memotong suku bunga tetapi investasi nyaris tak bergerak", jawaban workhorse-nya adalah <em>ekspektasi</em> — kredibilitas pemotongan, jalur ekspektasi suku bunga masa depan, dan laba ekspektasi $\\Pi^e$ semuanya lebih penting daripada $i$ hari ini.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Mechanisms, anomalies & adjustments', id: 'Mekanisme, anomali & penyesuaian' },
        num: '6',
        cards: [
          {
            title: { en: 'Tracing an external shock through SR, MR & LR', id: 'Menelusuri guncangan eksternal lewat SR, MR & LR' },
            html: {
              en: `<p>The deck's master "Mechanisms & Anomalies" cascade shows how an <span class="key">external (F) shock</span> propagates through the whole workhorse, with anomalies flagged at each stage:</p>
<ul>
<li><b>Short run.</b> $M\\uparrow \\Rightarrow M/P\\uparrow \\Rightarrow i\\downarrow \\Rightarrow Y\\uparrow \\Rightarrow u\\downarrow$. But the chain can break: <span class="key">financial frictions</span>, a <span class="key">liquidity trap</span> (the $\\times$ on $i\\downarrow$), <span class="key">contagion</span>, the <span class="key">balance-sheet effect</span>, <span class="key">expectation amplification</span> and a rising <span class="key">Δ risk premium</span> all blunt or reverse it.</li>
<li><b>Medium run.</b> As output rises, $P\\uparrow \\Rightarrow M/P\\downarrow \\Rightarrow r\\downarrow$ then $i\\uparrow$, hitting $C$ and $I$ through asset prices ($P^{stock}, P^{bond}$). The economy unwinds the short-run boom.</li>
<li><b>Long run.</b> $Y\\downarrow \\Rightarrow$ feeds back into saving and the change in technology ($S\\,\\&\\,\\Delta A$); the external block ($Ex, Im \\to NX\\,\\&\\,CA$) closes the loop. <span class="key">Macroprudential policy</span> sits across the long-run channel to lean against the build-up.</li>
</ul>
<div class="note">This single diagram is the integrated model "in motion". For any UAS shock, walk it: name the impulse, follow the SR arrows, flag the anomaly that could derail them, then trace the MR correction and the LR resting point.</div>`,
              id: `<p>Kaskade utama "Mekanisme & Anomali" menunjukkan bagaimana <span class="key">guncangan eksternal (F)</span> menyebar lewat seluruh workhorse, dengan anomali ditandai di tiap tahap:</p>
<ul>
<li><b>Jangka pendek.</b> $M\\uparrow \\Rightarrow M/P\\uparrow \\Rightarrow i\\downarrow \\Rightarrow Y\\uparrow \\Rightarrow u\\downarrow$. Tetapi rantai bisa putus: <span class="key">friksi keuangan</span>, <span class="key">jebakan likuiditas</span> (tanda $\\times$ pada $i\\downarrow$), <span class="key">contagion</span>, <span class="key">efek neraca</span>, <span class="key">amplifikasi ekspektasi</span> dan kenaikan <span class="key">Δ premi risiko</span> semuanya menumpulkan atau membalikkannya.</li>
<li><b>Jangka menengah.</b> Saat output naik, $P\\uparrow \\Rightarrow M/P\\downarrow \\Rightarrow r\\downarrow$ lalu $i\\uparrow$, memukul $C$ dan $I$ lewat harga aset ($P^{stock}, P^{bond}$). Ekonomi mengurai boom jangka pendek.</li>
<li><b>Jangka panjang.</b> $Y\\downarrow \\Rightarrow$ mengumpan ke tabungan dan perubahan teknologi ($S\\,\\&\\,\\Delta A$); blok eksternal ($Ex, Im \\to NX\\,\\&\\,CA$) menutup lingkar. <span class="key">Kebijakan makroprudensial</span> melintasi kanal jangka panjang untuk melawan penumpukan.</li>
</ul>
<div class="note">Satu diagram ini adalah model terintegrasi "dalam gerak". Untuk guncangan UAS apa pun, jalani: sebut impulsnya, ikuti panah SR, tandai anomali yang bisa menggagalkannya, lalu telusuri koreksi MR dan titik istirahat LR.</div>`
            },
            chart: CASCADE_CHART
          },
          {
            title: { en: 'When the equilibrium "story" fails: crisis', id: 'Ketika "cerita" ekuilibrium gagal: krisis' },
            html: {
              en: `<p>Sometimes the smooth return-to-equilibrium story collapses into a <span class="key">crisis</span>. The deck lays out three columns — <span class="key">indicators / "measured risks"</span>, <span class="key">market reaction</span>, and <span class="key">outcome</span>:</p>
<ul>
<li><b>Macro fundamentals (measured risk):</b> credit boom, an appreciated real exchange rate (RER), low foreign reserves.</li>
<li><b>Balance-sheet effect:</b> currency / maturity mismatch on private and bank balance sheets (the Week 11 channel).</li>
<li><b>Liquidity trap:</b> the point where conventional easing stops working.</li>
</ul>
<p>These accumulate into <span class="key">vulnerability</span> — and the financial frictions / amplification mechanism turns rising vulnerability into a <span class="key">Δ risk premium</span> spike, tipping the system into crisis. The standard models track the "measured risks" but <span class="key">overlook the "hidden risks"</span>; the policy answer is <span class="key">macroprudential policy</span> that leans against the build-up before the measured numbers look bad.</p>
<div class="tip">Link to Weeks 8, 11 & 12: capital-flow surge → RER appreciation & credit boom (fundamentals) → currency mismatch (balance sheet) → sudden stop → contractionary depreciation. The crisis bar chart is that whole arc compressed into one picture.</div>`,
              id: `<p>Kadang cerita kembali-ke-ekuilibrium yang mulus runtuh menjadi <span class="key">krisis</span>. Slide menjabarkan tiga kolom — <span class="key">indikator / "risiko terukur"</span>, <span class="key">reaksi pasar</span>, dan <span class="key">hasil</span>:</p>
<ul>
<li><b>Fundamental makro (risiko terukur):</b> boom kredit, nilai tukar riil (RER) yang terapresiasi, cadangan devisa rendah.</li>
<li><b>Efek neraca:</b> mismatch mata uang / jatuh tempo pada neraca swasta dan bank (kanal Minggu 11).</li>
<li><b>Jebakan likuiditas:</b> titik ketika pelonggaran konvensional berhenti bekerja.</li>
</ul>
<p>Semua ini menumpuk menjadi <span class="key">kerentanan</span> — dan mekanisme friksi keuangan / amplifikasi mengubah kerentanan yang naik menjadi lonjakan <span class="key">Δ premi risiko</span>, menjungkalkan sistem ke krisis. Model standar melacak "risiko terukur" tetapi <span class="key">mengabaikan "risiko tersembunyi"</span>; jawaban kebijakannya adalah <span class="key">kebijakan makroprudensial</span> yang melawan penumpukan sebelum angka terukur terlihat buruk.</p>
<div class="tip">Kaitan ke Minggu 8, 11 & 12: lonjakan arus modal → apresiasi RER & boom kredit (fundamental) → mismatch mata uang (neraca) → sudden stop → depresiasi kontraktif. Grafik batang krisis adalah seluruh busur itu dipadatkan menjadi satu gambar.</div>`
            },
            chart: CRISIS_CHART
          },
          {
            title: { en: 'Macro ↔ financial frictions (FF)', id: 'Makro ↔ friksi keuangan (FF)' },
            html: {
              en: `<p>Why integrate finance into the macro model at all? Two reasons from the deck:</p>
<ol>
<li>The flows of <span class="key">bank credit are highly pro-cyclical</span> (credit growth drops sharply in recessions and similarly for debt growth).</li>
<li>During a crisis an alternative financing channel through the <span class="key">capital market</span> (e.g. bonds) may be affected, impacting the whole economy.</li>
</ol>
<p><span class="key">Financial frictions (FF)</span> are financial constraints that prevent borrowers from funding their desirable investments from external resources, typically negatively related to internal resources / cash flows, irrespective of the interest rate (this disrupts the workhorse model). Adding FF means:</p>
<ul>
<li>applied to both asset and liability (balance-sheet) of firms / institutions;</li>
<li>standard models then show the importance of the <span class="key">financial sector for business-cycle fluctuations</span>.</li>
</ul>
<p>The two-way link: <span class="key">macro shocks</span> and <span class="key">finance shocks</span> reinforce each other — the <span class="key">financial accelerator</span> (Week 12). The business cycle and the financial cycle feed on one another.</p>`,
              id: `<p>Mengapa mengintegrasikan keuangan ke dalam model makro? Dua alasan dari slide:</p>
<ol>
<li>Aliran <span class="key">kredit bank sangat pro-siklikal</span> (pertumbuhan kredit turun tajam saat resesi, demikian pula pertumbuhan utang).</li>
<li>Saat krisis, kanal pembiayaan alternatif lewat <span class="key">pasar modal</span> (mis. obligasi) bisa terpengaruh, berdampak ke seluruh ekonomi.</li>
</ol>
<p><span class="key">Friksi keuangan (FF)</span> adalah kendala keuangan yang mencegah peminjam mendanai investasi yang diinginkan dari sumber eksternal, biasanya berhubungan negatif dengan sumber internal / arus kas, terlepas dari suku bunga (ini mengganggu model workhorse). Menambahkan FF berarti:</p>
<ul>
<li>diterapkan pada sisi aset maupun liabilitas (neraca) perusahaan / lembaga;</li>
<li>model standar kemudian menunjukkan pentingnya <span class="key">sektor keuangan bagi fluktuasi siklus bisnis</span>.</li>
</ul>
<p>Tautan dua arah: <span class="key">guncangan makro</span> dan <span class="key">guncangan keuangan</span> saling memperkuat — <span class="key">akselerator finansial</span> (Minggu 12). Siklus bisnis dan siklus keuangan saling memberi makan.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Inflation & unemployment via the AD–AS gap', id: 'Inflasi & pengangguran lewat kesenjangan AD–AS' },
        num: '7',
        cards: [
          {
            title: { en: 'The GAP that links π, u and the workhorse', id: 'Kesenjangan yang menautkan π, u dan workhorse' },
            html: {
              en: `<p>The deck makes the $\\pi$–$u$ association concrete through the <span class="key">GAP between AD and AS</span>. Read it as a chain:</p>
<div class="formula">$u \\to N \\to (Y \\text{ versus } YS) \\to (AD \\text{ versus } AS) \\to \\Delta P$</div>
<p>Unemployment $u$ maps to employment $N$, employment to actual output $Y$ relative to potential $YS$; the gap between $Y$ and $YS$ is the gap between AD and AS, which determines the change in prices $\\Delta P$. Closing the system are the workhorse identities:</p>
<div class="formula">Demand side: $\\;Output = C + G + I + NX$</div>
<div class="formula">Supply side: $\\;Output = A\\cdot f(K,N)$, productivity driven by technology, human capital & climate change</div>
<p>Use an <span class="key">interactive model</span> with money supply $M$: $MGAP = M^*\\cdot GAP$, and inflation $\\pi = f(M, u, MGAP)$. The gap is not exogenous — it is itself influenced by money, expectations and the supply side.</p>`,
              id: `<p>Slide mengkonkretkan asosiasi $\\pi$–$u$ lewat <span class="key">kesenjangan antara AD dan AS</span>. Bacalah sebagai rantai:</p>
<div class="formula">$u \\to N \\to (Y \\text{ versus } YS) \\to (AD \\text{ versus } AS) \\to \\Delta P$</div>
<p>Pengangguran $u$ memetakan ke lapangan kerja $N$, lapangan kerja ke output aktual $Y$ relatif terhadap potensial $YS$; kesenjangan antara $Y$ dan $YS$ adalah kesenjangan antara AD dan AS, yang menentukan perubahan harga $\\Delta P$. Penutup sistem adalah identitas workhorse:</p>
<div class="formula">Sisi permintaan: $\\;Output = C + G + I + NX$</div>
<div class="formula">Sisi penawaran: $\\;Output = A\\cdot f(K,N)$, produktivitas didorong teknologi, modal manusia & perubahan iklim</div>
<p>Gunakan <span class="key">model interaktif</span> dengan jumlah uang $M$: $MGAP = M^*\\cdot GAP$, dan inflasi $\\pi = f(M, u, MGAP)$. Kesenjangan bukan eksogen — ia sendiri dipengaruhi uang, ekspektasi dan sisi penawaran.</p>`
            },
            chart: GAP_CHART
          }
        ]
      },

      {
        heading: { en: 'Emerging issue I — climate change in the model', id: 'Isu mutakhir I — perubahan iklim dalam model' },
        num: '8',
        cards: [
          {
            title: { en: 'Climate as an exogenous productivity / cost shifter', id: 'Iklim sebagai penggeser produktivitas / biaya eksogen' },
            html: {
              en: `<p>The <span class="key">proxy approach</span>: treat climate as an <span class="key">exogenous productivity / cost shifter</span> — a damage function plus a supply-side shock bolted onto the workhorse.</p>
<p><b>Production / investment block.</b> Add a Climate Damage Variable to the production / investment block:</p>
<div class="formula">$Y = f(K, L, A) \\;\\Rightarrow\\; Y = f(K, L, A, (1 - D(T)))$</div>
<p>where $D(T)$ is a damage function of temperature anomaly $T$ (e.g. Nordhaus-style $D = aT^2$). In practice, proxy $T$ with observable indices like the NOAA Global Temperature Anomaly or El Niño index.</p>
<p><b>Consumption channel.</b> Add a carbon price + policy dummy to the consumption function:</p>
<div class="formula">$C = a + \\beta_1 Y_d + \\beta_2\\,CO2^{carbon} + \\beta_3\\,policy^{dummy} + \\varepsilon$</div>
<p>This feeds into total investment $I = I + I^{green}$.</p>
<div class="note">Data proxies you can use: carbon price (EU ETS, or a shadow price); catastrophic event loss data (Munich Re, Swiss Re indices); energy price index as climate-stress proxy; physical-risk scores (central-bank stress-test scenarios — ECB, BoE publish these).</div>`,
              id: `<p><span class="key">Pendekatan proksi</span>: perlakukan iklim sebagai <span class="key">penggeser produktivitas / biaya eksogen</span> — fungsi kerusakan plus guncangan sisi penawaran yang dipasang ke workhorse.</p>
<p><b>Blok produksi / investasi.</b> Tambahkan Variabel Kerusakan Iklim ke blok produksi / investasi:</p>
<div class="formula">$Y = f(K, L, A) \\;\\Rightarrow\\; Y = f(K, L, A, (1 - D(T)))$</div>
<p>di mana $D(T)$ adalah fungsi kerusakan dari anomali suhu $T$ (mis. gaya Nordhaus $D = aT^2$). Dalam praktik, proksikan $T$ dengan indeks teramati seperti Anomali Suhu Global NOAA atau indeks El Niño.</p>
<p><b>Kanal konsumsi.</b> Tambahkan harga karbon + dummy kebijakan ke fungsi konsumsi:</p>
<div class="formula">$C = a + \\beta_1 Y_d + \\beta_2\\,CO2^{carbon} + \\beta_3\\,policy^{dummy} + \\varepsilon$</div>
<p>Ini mengumpan ke total investasi $I = I + I^{green}$.</p>
<div class="note">Proksi data yang bisa dipakai: harga karbon (EU ETS, atau harga bayangan); data kerugian peristiwa katastrofik (indeks Munich Re, Swiss Re); indeks harga energi sebagai proksi tekanan iklim; skor risiko fisik (skenario stress-test bank sentral — ECB, BoE menerbitkannya).</div>`
            },
            chart: CLIMATE_CHART
          }
        ]
      },

      {
        heading: { en: 'Emerging issue II — crypto & CBDC in the model', id: 'Isu mutakhir II — kripto & CBDC dalam model' },
        num: '9',
        cards: [
          {
            title: { en: 'Velocity adjustment & monetary-transmission modification', id: 'Penyesuaian velositas & modifikasi transmisi moneter' },
            html: {
              en: `<p>Crypto & CBDC primarily affect the <span class="key">money demand equation, the monetary multiplier, and consumption / saving behaviour</span>. The <span class="key">proxy approach</span> is a velocity adjustment + monetary-transmission modification.</p>
<p><b>Money demand.</b> Modify $Md$ to include a crypto term:</p>
<div class="formula">$Md = f(Y, i) \\;\\Rightarrow\\; Md = f\\big(Y, i, \\phi\\cdot CBDC^{share} + \\kappa\\cdot crypto^{vol}\\big)$</div>
<p>where $\\phi\\cdot CBDC^{share}$ is the fraction of transactions in CBDC (reduces precautionary cash demand), $\\kappa\\cdot crypto^{vol}$ is crypto volatility (the portfolio-substitution effect, B).</p>
<p><b>Monetary multiplier / financial block.</b> CBDCs can cause <span class="key">bank disintermediation</span> — deposits migrate to the central bank:</p>
<div class="formula">$Bank^{deposits} = a - \\beta\\cdot CBDC^{adoption\\_rate} + \\gamma\\cdot Y_d + \\varepsilon$</div>
<p>then link reduced deposits to reduced bank lending → investment.</p>
<p><b>Consumption extension.</b> CBDC programmability (e.g. expiry dates, conditionality) alters MPC:</p>
<div class="formula">$C = a + \\beta_1 Y_d + \\beta_2\\,CBDC^{transfers} + \\beta_3\\,CBDC^{programmable} + \\varepsilon$</div>
<div class="tip">Information proxies: monetary penetration (M-Pesa data); stablecoin transaction volume (on-chain data) as digital-currency demand proxy; card vs cash payment ratios as a transitional benchmark; IMF CBDC tracker data for cross-country panel work.</div>`,
              id: `<p>Kripto & CBDC terutama memengaruhi <span class="key">persamaan permintaan uang, pengganda moneter, dan perilaku konsumsi / tabungan</span>. <span class="key">Pendekatan proksi</span>-nya adalah penyesuaian velositas + modifikasi transmisi moneter.</p>
<p><b>Permintaan uang.</b> Modifikasi $Md$ untuk memasukkan suku kripto:</p>
<div class="formula">$Md = f(Y, i) \\;\\Rightarrow\\; Md = f\\big(Y, i, \\phi\\cdot CBDC^{share} + \\kappa\\cdot crypto^{vol}\\big)$</div>
<p>di mana $\\phi\\cdot CBDC^{share}$ adalah fraksi transaksi dalam CBDC (mengurangi permintaan kas berjaga-jaga), $\\kappa\\cdot crypto^{vol}$ volatilitas kripto (efek substitusi portofolio, B).</p>
<p><b>Pengganda moneter / blok keuangan.</b> CBDC bisa menyebabkan <span class="key">disintermediasi bank</span> — deposito bermigrasi ke bank sentral:</p>
<div class="formula">$Bank^{deposits} = a - \\beta\\cdot CBDC^{adoption\\_rate} + \\gamma\\cdot Y_d + \\varepsilon$</div>
<p>lalu hubungkan deposito turun ke pinjaman bank turun → investasi.</p>
<p><b>Ekstensi konsumsi.</b> Programabilitas CBDC (mis. tanggal kedaluwarsa, kondisionalitas) mengubah MPC:</p>
<div class="formula">$C = a + \\beta_1 Y_d + \\beta_2\\,CBDC^{transfers} + \\beta_3\\,CBDC^{programmable} + \\varepsilon$</div>
<div class="tip">Proksi informasi: penetrasi moneter (data M-Pesa); volume transaksi stablecoin (data on-chain) sebagai proksi permintaan mata uang digital; rasio pembayaran kartu vs tunai sebagai tolok ukur transisi; data IMF CBDC tracker untuk kerja panel lintas-negara.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Emerging issue III — money creation (BCF vs intermediation)', id: 'Isu mutakhir III — penciptaan uang (BCF vs intermediasi)' },
        num: '10',
        cards: [
          {
            title: { en: 'Bank Credit First: loans create deposits', id: 'Bank Credit First: pinjaman menciptakan deposito' },
            html: {
              en: `<p>The deck contrasts two views of how banks work, and argues the second is the realistic one.</p>
<ol>
<li><b>Misconception 1 — "bank intermediation".</b> Banks can only lend out pre-existing money (bank deposits): deposits are simply a record of how much the bank itself owes its customers, so they are a <em>liability</em> of the bank, not an asset that could be lent out.</li>
<li><b>Misconception 2 — reserves.</b> Banks can lend out their reserves (held in the Central Bank). In practice reserves can only be lent <em>between</em> banks (interbank loans); consumers do not have access to reserve accounts at the Central Bank.</li>
<li><b>Money creation — "Bank Credit First" (BCF).</b> Commercial banks create money, in the form of bank deposits, <span class="key">by making new loans</span>. When a bank makes a loan it does not typically do so by giving the consumer cash; it <span class="key">credits the consumer's bank account with a deposit the size of the loan</span>. At that moment, <span class="key">new money is created</span>. The deposit increases the assets of the consumer. New broad money (<span class="key">M2</span>) has been created.</li>
</ol>
<p>Both sides of the commercial banking balance sheet increase as new money and loans are created — the opposite causation to "bank intermediation".</p>`,
              id: `<p>Slide membandingkan dua pandangan cara kerja bank, dan berargumen yang kedua-lah yang realistis.</p>
<ol>
<li><b>Miskonsepsi 1 — "intermediasi bank".</b> Bank hanya bisa meminjamkan uang yang sudah ada (deposito bank): deposito hanyalah catatan berapa utang bank kepada nasabahnya, sehingga ia <em>liabilitas</em> bank, bukan aset yang bisa dipinjamkan.</li>
<li><b>Miskonsepsi 2 — cadangan.</b> Bank bisa meminjamkan cadangannya (yang disimpan di Bank Sentral). Dalam praktik cadangan hanya bisa dipinjamkan <em>antar</em> bank (pinjaman antarbank); konsumen tidak punya akses ke rekening cadangan di Bank Sentral.</li>
<li><b>Penciptaan uang — "Bank Credit First" (BCF).</b> Bank komersial menciptakan uang, dalam bentuk deposito bank, <span class="key">dengan membuat pinjaman baru</span>. Saat bank memberi pinjaman ia biasanya tidak memberi konsumen tunai; ia <span class="key">mengkredit rekening konsumen dengan deposito sebesar pinjaman</span>. Pada saat itu, <span class="key">uang baru tercipta</span>. Deposito menambah aset konsumen. Uang luas baru (<span class="key">M2</span>) telah tercipta.</li>
</ol>
<p>Kedua sisi neraca perbankan komersial naik saat uang baru dan pinjaman tercipta — kausalitas yang berlawanan dengan "intermediasi bank".</p>`
            },
            chart: MONEY_CHART
          },
          {
            title: { en: 'Money destruction, monetary aggregates & the Indonesian test', id: 'Penghancuran uang, agregat moneter & uji Indonesia' },
            html: {
              en: `<p><b>Money destruction.</b> In reverse, when a consumer repays a loan (e.g. pays the credit card bill from a supermarket purchase out of their bank account), the credit card balance and the deposit are both reduced — money is destroyed. Banks holding government bonds that are repaid, or selling existing assets to consumers (or QE in reverse), can also destroy money.</p>
<p><b>Monetary aggregates.</b> $M0$ = monetary base (physical currency + bank reserves); $M1 = M0 +$ demand deposits; $M2 = M1 +$ savings, time deposits and mutual funds. <span class="key">M2 is the most reliable money-supply measure for predicting output growth and broader economic activity.</span></p>
<p><b>Role of monetary policy.</b> Central banks influence the price of loans (the interest rate) and the amount households / companies want to borrow; this limits broad-money creation but does not directly control it.</p>
<div class="note"><b>Indonesian case: "Bank Intermediation" or "Bank Credit First"?</b> Quarterly CREDIT and DEPOSIT levels co-move (correlation ≈ 0.99), but the long-run correlation drops to ≈ 0.38 — they move together over the long run but have meaningfully different short-run dynamics. The bottom line: <span class="key">deposits drive credit, not the other way around</span>. The DEPOSIT → CREDIT relationship is strongly significant ($\\chi^2 = 29.3$, $p < 0.001$) and explains about 14% of the forecast-error variance in credit growth — supporting the classic <span class="key">financial-intermediation story</span>. The reverse link (CREDIT → DEPOSIT) is statistically significant at 5% but weaker in magnitude, and its contribution to forecast variance is unreliable.</div>`,
              id: `<p><b>Penghancuran uang.</b> Sebaliknya, saat konsumen melunasi pinjaman (mis. membayar tagihan kartu kredit dari belanja supermarket lewat rekeningnya), saldo kartu kredit dan deposito sama-sama berkurang — uang dihancurkan. Bank yang memegang obligasi pemerintah yang dilunasi, atau menjual aset ke konsumen (atau QE terbalik), juga bisa menghancurkan uang.</p>
<p><b>Agregat moneter.</b> $M0$ = basis moneter (uang kartal fisik + cadangan bank); $M1 = M0 +$ giro; $M2 = M1 +$ tabungan, deposito berjangka dan reksa dana. <span class="key">M2 adalah ukuran jumlah uang paling andal untuk memprediksi pertumbuhan output dan aktivitas ekonomi yang lebih luas.</span></p>
<p><b>Peran kebijakan moneter.</b> Bank sentral memengaruhi harga pinjaman (suku bunga) dan jumlah yang ingin dipinjam rumah tangga / perusahaan; ini membatasi penciptaan uang luas tetapi tidak mengendalikannya langsung.</p>
<div class="note"><b>Kasus Indonesia: "Intermediasi Bank" atau "Bank Credit First"?</b> Level KREDIT dan DEPOSITO kuartalan bergerak bersama (korelasi ≈ 0,99), tetapi korelasi jangka panjang turun ke ≈ 0,38 — bergerak bersama jangka panjang tetapi dinamika jangka pendeknya berbeda bermakna. Intinya: <span class="key">deposito mendorong kredit, bukan sebaliknya</span>. Hubungan DEPOSITO → KREDIT sangat signifikan ($\\chi^2 = 29{,}3$, $p < 0{,}001$) dan menjelaskan sekitar 14% varians galat-ramalan pertumbuhan kredit — mendukung <span class="key">cerita intermediasi keuangan</span> klasik. Tautan balik (KREDIT → DEPOSITO) signifikan pada 5% tetapi lebih lemah, dan kontribusinya pada varians ramalan tidak andal.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Emerging issue IV — welfare, poverty & inequality', id: 'Isu mutakhir IV — kesejahteraan, kemiskinan & ketimpangan' },
        num: '11',
        cards: [
          {
            title: { en: 'Macro policy & poverty: toward a new theory', id: 'Kebijakan makro & kemiskinan: menuju teori baru' },
            html: {
              en: `<p>The deck builds a <span class="key">four-quadrant</span> diagram to ask how macro policy reaches the poor. Notation: $Y$ = output, $\\Delta\\pi$ = change in inflation, $PL$ = poverty line, $Y^{poor}$ = income of the poor.</p>
<ul>
<li><b>NE quadrant — the macro shock.</b> A monetary or fiscal shock, given existing financial-system conditions (openness, ER, current account), moves AD against a near-<span class="key">flat AS</span> (the AS–PC, Phillips-style relation), generating $\\Delta\\pi$.</li>
<li><b>NW quadrant — elasticity of the poverty line $PL$ w.r.t $P$ ($\\alpha$).</b> Price rigidity at the bottom and compensating policies set how strongly the poverty line tracks inflation.</li>
<li><b>SE quadrant — elasticity of $Y^{poor}$ w.r.t $Y$ ($\\beta$).</b> Two curves: a "better income distribution" (green) where the poor capture growth, and a "worse income distribution" (red) where they do not.</li>
</ul>
<p>The key inequality: <span class="key">if $\\alpha < \\beta$, poverty tends to worsen</span> — the poverty line rises with prices faster than the poor's income rises with growth, so the same macro expansion <em>increases</em> measured poverty. Distribution, not just the growth rate, decides the welfare outcome.</p>
<div class="tip">UAS framing: this is the "new theory" the title teases — macro policy must be judged not only by $g_Y$ and $\\pi$ but by the joint $(\\alpha, \\beta)$ pass-through to the poor. Always pair a growth claim with a distribution claim.</div>`,
              id: `<p>Slide membangun diagram <span class="key">empat kuadran</span> untuk bertanya bagaimana kebijakan makro menjangkau kaum miskin. Notasi: $Y$ = output, $\\Delta\\pi$ = perubahan inflasi, $PL$ = garis kemiskinan, $Y^{poor}$ = pendapatan kaum miskin.</p>
<ul>
<li><b>Kuadran TL — guncangan makro.</b> Guncangan moneter atau fiskal, mengingat kondisi sistem keuangan yang ada (keterbukaan, NT, transaksi berjalan), menggerakkan AD terhadap <span class="key">AS yang nyaris datar</span> (relasi AS–PC, gaya Phillips), menghasilkan $\\Delta\\pi$.</li>
<li><b>Kuadran KiA — elastisitas garis kemiskinan $PL$ terhadap $P$ ($\\alpha$).</b> Kekakuan harga di lapisan bawah dan kebijakan kompensasi menentukan seberapa kuat garis kemiskinan mengikuti inflasi.</li>
<li><b>Kuadran KaB — elastisitas $Y^{poor}$ terhadap $Y$ ($\\beta$).</b> Dua kurva: "distribusi pendapatan lebih baik" (hijau) di mana kaum miskin menangkap pertumbuhan, dan "distribusi lebih buruk" (merah) di mana tidak.</li>
</ul>
<p>Ketidaksamaan kunci: <span class="key">bila $\\alpha < \\beta$, kemiskinan cenderung memburuk</span> — garis kemiskinan naik mengikuti harga lebih cepat daripada pendapatan kaum miskin naik mengikuti pertumbuhan, sehingga ekspansi makro yang sama justru <em>menaikkan</em> kemiskinan terukur. Distribusi, bukan sekadar laju pertumbuhan, yang menentukan hasil kesejahteraan.</p>
<div class="tip">Bingkai UAS: inilah "teori baru" yang dijanjikan judul — kebijakan makro harus dinilai bukan hanya oleh $g_Y$ dan $\\pi$ tetapi oleh pass-through gabungan $(\\alpha, \\beta)$ ke kaum miskin. Selalu pasangkan klaim pertumbuhan dengan klaim distribusi.</div>`
            },
            chart: POVERTY_CHART
          },
          {
            title: { en: 'Macroeconomics for the non-formal sector', id: 'Makroekonomi untuk sektor non-formal' },
            html: {
              en: `<p>Indonesia's labour force is dominated by the <span class="key">informal (non-formal, NF) sector</span>, so the deck splits the IS–LM + Phillips machinery into a <span class="key">formal (F)</span> and a <span class="key">non-formal (NF)</span> block and runs two policy experiments.</p>
<ul>
<li><b>Reduce government spending ($\\downarrow G$).</b> The IS curve shifts left; the medium-term equilibrium moves to a point combining formal and non-formal output (labelled $A_1B_3$). Because $u$ rises, $r$ falls, the LM eases, and $Y^f < Y^{nf}$ — formal output contracts more, so workers are pushed <em>back into the non-formal sector</em>.</li>
<li><b>Increase the household tax ($\\uparrow T^H$).</b> The IS shifts left again ($A_1B_1$); the formal Phillips curve $PC^F$ and non-formal $PC^{NF}$ respond differently — labour leaves the NF sector and the market is out of equilibrium, pushing back to the starting point.</li>
</ul>
<p>The lesson: a textbook contraction that "works" in a fully-formal economy can simply <span class="key">re-shuffle people between formal and informal work</span> in Indonesia, leaving total employment little changed but welfare and productivity worse. The non-formal sector is the shock absorber the standard workhorse ignores.</p>`,
              id: `<p>Angkatan kerja Indonesia didominasi <span class="key">sektor informal (non-formal, NF)</span>, sehingga slide memecah perangkat IS–LM + Phillips menjadi blok <span class="key">formal (F)</span> dan <span class="key">non-formal (NF)</span> dan menjalankan dua eksperimen kebijakan.</p>
<ul>
<li><b>Kurangi belanja pemerintah ($\\downarrow G$).</b> Kurva IS bergeser kiri; ekuilibrium jangka menengah pindah ke titik gabungan output formal dan non-formal (dilabeli $A_1B_3$). Karena $u$ naik, $r$ turun, LM melonggar, dan $Y^f < Y^{nf}$ — output formal menyusut lebih banyak, sehingga pekerja didorong <em>kembali ke sektor non-formal</em>.</li>
<li><b>Naikkan pajak rumah tangga ($\\uparrow T^H$).</b> IS bergeser kiri lagi ($A_1B_1$); kurva Phillips formal $PC^F$ dan non-formal $PC^{NF}$ merespons berbeda — tenaga kerja keluar dari sektor NF dan pasar keluar ekuilibrium, mendorong kembali ke titik awal.</li>
</ul>
<p>Pelajarannya: kontraksi buku teks yang "berhasil" di ekonomi yang sepenuhnya formal bisa sekadar <span class="key">menggeser orang antara kerja formal dan informal</span> di Indonesia, membuat total lapangan kerja nyaris tak berubah tetapi kesejahteraan dan produktivitas memburuk. Sektor non-formal adalah peredam guncangan yang diabaikan workhorse standar.</p>`
            },
            chart: NONFORMAL_CHART
          }
        ]
      },

      {
        heading: { en: 'Cautionary notes & the future of macroeconomics', id: 'Catatan peringatan & masa depan makroekonomi' },
        num: '12',
        cards: [
          {
            title: { en: 'Limitations of macro policy — Solow\'s three rules', id: 'Keterbatasan kebijakan makro — tiga aturan Solow' },
            html: {
              en: `<p>The deck closes humbly. <span class="key">Non-economic factors</span> — culture, ethnicity, psychology, politics — usually <em>swamp</em> the influence of policy. Hence three rules of policy-making:</p>
<ol>
<li><b>First rule:</b> don't promulgate a policy that will destroy social bonds. On the contrary, make policies that can <em>strengthen</em> relationships (e.g. mind the impact on inequality).</li>
<li><b>Second rule:</b> try to establish a basic level of economic and physical security (e.g. poverty reduction); only then can society build a culture of achievement.</li>
<li><b>Third rule (R. Solow):</b> "<em>…… if you don't know what you're doing, for heaven's sake do it gently.</em>"</li>
</ol>
<div class="note"><b>Rethinking macroeconomics.</b> Growing disenchantment with the profession after the GFC is pushing it to better reflect individual and societal values — more soul-searching, more integration with the other social sciences, and more weight on welfare and distribution. Alfred Marshall: the "master-economist must possess a rare combination of gifts… He must be mathematician, historian, statesman, philosopher." See Azis (2019), "Macroeconomics Post-GFC", <em>Jurnal Ekonomi Indonesia</em> 8(1):103–124.</div>`,
              id: `<p>Slide menutup dengan rendah hati. <span class="key">Faktor non-ekonomi</span> — budaya, etnis, psikologi, politik — biasanya <em>menenggelamkan</em> pengaruh kebijakan. Maka tiga aturan pembuatan kebijakan:</p>
<ol>
<li><b>Aturan pertama:</b> jangan terbitkan kebijakan yang menghancurkan ikatan sosial. Sebaliknya, buat kebijakan yang bisa <em>memperkuat</em> hubungan (mis. perhatikan dampak pada ketimpangan).</li>
<li><b>Aturan kedua:</b> usahakan tegakkan tingkat dasar keamanan ekonomi dan fisik (mis. pengurangan kemiskinan); baru setelah itu masyarakat bisa membangun budaya pencapaian.</li>
<li><b>Aturan ketiga (R. Solow):</b> "<em>…… kalau kamu tidak tahu apa yang kamu lakukan, demi Tuhan lakukan dengan lembut.</em>"</li>
</ol>
<div class="note"><b>Memikirkan ulang makroekonomi.</b> Kekecewaan yang tumbuh terhadap profesi setelah GFC mendorongnya untuk lebih mencerminkan nilai individu dan sosial — lebih banyak introspeksi, integrasi dengan ilmu sosial lain, dan bobot lebih pada kesejahteraan dan distribusi. Alfred Marshall: "ekonom-master harus punya kombinasi langka bakat… Ia harus matematikawan, sejarawan, negarawan, filsuf." Lihat Azis (2019), "Macroeconomics Post-GFC", <em>Jurnal Ekonomi Indonesia</em> 8(1):103–124.</div>`
            }
          },
          {
            title: { en: 'General notes on the final exam', id: 'Catatan umum ujian akhir' },
            html: {
              en: `<p>The professor's own guidance for the UAS:</p>
<ul>
<li>What matters most are the <span class="key">interactions among markets</span> and the mechanisms of those interactions — <em>not</em> the working of each market itself (goods–money–exchange rate–labour–financial).</li>
<li>The "final" model is the one shown in this summary, where markets are linked to: (1) Technology; (2) Climate Change; (3) Income distribution & poverty; and (4) Informal vs formal sector.</li>
<li>Use real examples from Indonesia's current macro development to test theories and the anomalies / counterfactual scenarios learned in class.</li>
<li>Answer <span class="key">briefly and to-the-point</span>; unnecessary descriptions and explanations can <em>cause a score deduction</em>.</li>
</ul>
<p><b>Five exam themes (graphs & math equations; Indonesian episodes):</b></p>
<ol>
<li>Emergence of the <span class="key">twin deficit</span>, and mechanisms of the workhorse model given a particular shock.</li>
<li>Role of the central bank and commercial banks in <span class="key">money creation</span> and its impacts on growth and the labour market (quantity & quality, cyclical & structural).</li>
<li>Macroeconomic impact of different <span class="key">exchange-rate regimes</span> and alternative policies to manage ER movements (including in a crisis).</li>
<li>Implications of macro policies on welfare: (a) climate-change effect, (b) income inequality & poverty, (c) formal–informal distribution.</li>
<li>Incorporating <span class="key">cryptocurrency and CBDC</span> into the macro model.</li>
</ol>
<div class="tip">The very last slide ("Final Exam Problems… To be explained in class") confirms the actual numerical problems are delivered live — so master the <em>mechanisms</em> and the <em>diagrams</em>, because the exam rewards tracing a shock cleanly and concisely, with the right graph and the right equation.</div>`,
              id: `<p>Panduan UAS dari profesor sendiri:</p>
<ul>
<li>Yang paling penting adalah <span class="key">interaksi antar-pasar</span> dan mekanisme interaksi itu — <em>bukan</em> kerja tiap pasar itu sendiri (barang–uang–nilai tukar–tenaga kerja–keuangan).</li>
<li>Model "final" adalah yang ditunjukkan ringkasan ini, di mana pasar dikaitkan ke: (1) Teknologi; (2) Perubahan Iklim; (3) Distribusi pendapatan & kemiskinan; dan (4) Sektor informal vs formal.</li>
<li>Gunakan contoh nyata dari perkembangan makro Indonesia terkini untuk menguji teori dan anomali / skenario counterfactual yang dipelajari di kelas.</li>
<li>Jawab <span class="key">singkat dan langsung pada pokok</span>; deskripsi dan penjelasan yang tak perlu bisa <em>mengakibatkan pengurangan nilai</em>.</li>
</ul>
<p><b>Lima tema ujian (grafik & persamaan matematis; episode Indonesia):</b></p>
<ol>
<li>Munculnya <span class="key">defisit kembar (twin deficit)</span>, dan mekanisme model workhorse terhadap guncangan tertentu.</li>
<li>Peran bank sentral dan bank komersial dalam <span class="key">penciptaan uang</span> serta dampaknya pada pertumbuhan dan pasar kerja (kuantitas & kualitas, siklikal & struktural).</li>
<li>Dampak makroekonomi <span class="key">rezim nilai tukar</span> berbeda dan kebijakan alternatif untuk mengelola pergerakan NT (termasuk saat krisis).</li>
<li>Implikasi kebijakan makro pada kesejahteraan: (a) efek perubahan iklim, (b) ketimpangan pendapatan & kemiskinan, (c) distribusi formal–informal.</li>
<li>Memasukkan <span class="key">mata uang kripto dan CBDC</span> ke dalam model makro.</li>
</ol>
<div class="tip">Slide terakhir ("Final Exam Problems… To be explained in class") menegaskan soal numerik aktual diberikan langsung — jadi kuasai <em>mekanisme</em> dan <em>diagram</em>, karena ujian menghargai penelusuran guncangan yang bersih dan ringkas, dengan grafik yang tepat dan persamaan yang tepat.</div>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'The workhorse system — every core equation', id: 'Sistem workhorse — setiap persamaan inti' },
        num: 'F',
        cards: [
          {
            title: { en: 'The five-market block', id: 'Blok lima pasar' },
            html: {
              en: `<div class="formula">Goods (GM): $\\;Y = C(W, Y-T) + I(Y,r) + G + EX(Y^*,RER) - RER\\cdot IM(Y,RER)$</div>
<div class="formula">Money (MM): $\\;M/P = Y\\cdot L(i)$</div>
<div class="formula">UIP (ER market): $\\;i_t = i_t^f + \\dfrac{E^e_{t+1}-E_t}{E_t} + \\rho$</div>
<div class="formula">Bond pricing (Fin market): $\\;P^b = \\dfrac{V}{1+i}$</div>
<div class="formula">Stock pricing (Cap market): $\\;P^s = \\dfrac{D^e}{1+r}$</div>
<div class="formula">Labour / price-setting (LM): $\\;P = (1+\\mu)\\,P^e\\cdot F\\!\\left(1-\\tfrac{Y}{L},\\,z\\right)$</div>
<p>$\\mu$ = mark-up, $P^e$ = expected price, $z$ = bargaining factors, $\\rho$ = risk premium, $V$ = coupon, $D^e$ = expected dividend.</p>`,
              id: `<div class="formula">Barang (GM): $\\;Y = C(W, Y-T) + I(Y,r) + G + EX(Y^*,RER) - RER\\cdot IM(Y,RER)$</div>
<div class="formula">Uang (MM): $\\;M/P = Y\\cdot L(i)$</div>
<div class="formula">UIP (pasar NT): $\\;i_t = i_t^f + \\dfrac{E^e_{t+1}-E_t}{E_t} + \\rho$</div>
<div class="formula">Harga obligasi (pasar keuangan): $\\;P^b = \\dfrac{V}{1+i}$</div>
<div class="formula">Harga saham (pasar modal): $\\;P^s = \\dfrac{D^e}{1+r}$</div>
<div class="formula">Tenaga kerja / penetapan harga (LM): $\\;P = (1+\\mu)\\,P^e\\cdot F\\!\\left(1-\\tfrac{Y}{L},\\,z\\right)$</div>
<p>$\\mu$ = mark-up, $P^e$ = harga ekspektasi, $z$ = faktor tawar-menawar, $\\rho$ = premi risiko, $V$ = kupon, $D^e$ = dividen ekspektasi.</p>`
            }
          },
          {
            title: { en: 'SR/MR: Okun & Phillips; LR: S–K growth', id: 'SR/MR: Okun & Phillips; LR: pertumbuhan S–K' },
            html: {
              en: `<div class="formula">Okun's law: $\\;\\dfrac{\\bar Y - Y}{\\bar Y} = c\\,(u - \\bar u)$</div>
<div class="formula">Phillips relation: $\\;\\pi_t - \\pi_{t-1} = -\\alpha\\,(u_t - u_n)$</div>
<div class="formula">Capital accumulation: $\\;K_t - (1-\\delta)K_{t-1} = I$</div>
<div class="formula">Saving = investment: $\\;I = S = sY$</div>
<div class="formula">Production with TFP: $\\;Y = A\\cdot F(K,N)$</div>
<p>SR: prices & $K$ fixed. MR: $u \\to u_n$, $Y \\to \\bar Y$. LR: growth driven by $s$ and especially $A$ (TFP).</p>`,
              id: `<div class="formula">Hukum Okun: $\\;\\dfrac{\\bar Y - Y}{\\bar Y} = c\\,(u - \\bar u)$</div>
<div class="formula">Relasi Phillips: $\\;\\pi_t - \\pi_{t-1} = -\\alpha\\,(u_t - u_n)$</div>
<div class="formula">Akumulasi modal: $\\;K_t - (1-\\delta)K_{t-1} = I$</div>
<div class="formula">Tabungan = investasi: $\\;I = S = sY$</div>
<div class="formula">Produksi dengan TFP: $\\;Y = A\\cdot F(K,N)$</div>
<p>SR: harga & $K$ tetap. MR: $u \\to u_n$, $Y \\to \\bar Y$. LR: pertumbuhan didorong $s$ dan terutama $A$ (TFP).</p>`
            }
          },
          {
            title: { en: 'Expectations & the AD–AS gap', id: 'Ekspektasi & kesenjangan AD–AS' },
            html: {
              en: `<div class="formula">Private demand, forward-looking: $\\;Y = D_p(Y, T, r, Y^e, T^e, r^e) + G + NX$</div>
<div class="formula">Inflation–unemployment chain: $\\;u \\to N \\to (Y \\text{ vs } YS) \\to (AD \\text{ vs } AS) \\to \\Delta P$</div>
<div class="formula">Interactive money model: $\\;MGAP = M^*\\cdot GAP, \\quad \\pi = f(M, u, MGAP)$</div>
<p>Expectations make the IS curve <em>steeper</em> ⇒ a smaller effect of $\\Delta i$.</p>`,
              id: `<div class="formula">Permintaan swasta, berorientasi-depan: $\\;Y = D_p(Y, T, r, Y^e, T^e, r^e) + G + NX$</div>
<div class="formula">Rantai inflasi–pengangguran: $\\;u \\to N \\to (Y \\text{ vs } YS) \\to (AD \\text{ vs } AS) \\to \\Delta P$</div>
<div class="formula">Model uang interaktif: $\\;MGAP = M^*\\cdot GAP, \\quad \\pi = f(M, u, MGAP)$</div>
<p>Ekspektasi membuat kurva IS <em>lebih curam</em> ⇒ efek $\\Delta i$ lebih kecil.</p>`
            }
          },
          {
            title: { en: 'Emerging-issue extensions (climate, CBDC, poverty)', id: 'Ekstensi isu mutakhir (iklim, CBDC, kemiskinan)' },
            html: {
              en: `<div class="formula">Climate damage in production: $\\;Y = f(K, L, A,\\,(1-D(T))), \\quad D(T)=aT^2$</div>
<div class="formula">Climate in consumption: $\\;C = a + \\beta_1 Y_d + \\beta_2\\,CO2^{carbon} + \\beta_3\\,policy^{dummy} + \\varepsilon$</div>
<div class="formula">Money demand with crypto/CBDC: $\\;Md = f\\big(Y, i,\\; \\phi\\,CBDC^{share} + \\kappa\\,crypto^{vol}\\big)$</div>
<div class="formula">CBDC disintermediation: $\\;Bank^{dep} = a - \\beta\\,CBDC^{adopt} + \\gamma Y_d + \\varepsilon$</div>
<div class="formula">Poverty condition: $\\;\\alpha < \\beta \\;\\Rightarrow\\; \\text{poverty worsens}$ ($\\alpha=$ elasticity of PL w.r.t P; $\\beta=$ elasticity of $Y^{poor}$ w.r.t Y)</div>`,
              id: `<div class="formula">Kerusakan iklim di produksi: $\\;Y = f(K, L, A,\\,(1-D(T))), \\quad D(T)=aT^2$</div>
<div class="formula">Iklim di konsumsi: $\\;C = a + \\beta_1 Y_d + \\beta_2\\,CO2^{carbon} + \\beta_3\\,policy^{dummy} + \\varepsilon$</div>
<div class="formula">Permintaan uang dengan kripto/CBDC: $\\;Md = f\\big(Y, i,\\; \\phi\\,CBDC^{share} + \\kappa\\,crypto^{vol}\\big)$</div>
<div class="formula">Disintermediasi CBDC: $\\;Bank^{dep} = a - \\beta\\,CBDC^{adopt} + \\gamma Y_d + \\varepsilon$</div>
<div class="formula">Kondisi kemiskinan: $\\;\\alpha < \\beta \\;\\Rightarrow\\; \\text{kemiskinan memburuk}$ ($\\alpha=$ elastisitas PL terhadap P; $\\beta=$ elastisitas $Y^{poor}$ terhadap Y)</div>`
            }
          },
          {
            title: { en: 'Money creation & monetary aggregates', id: 'Penciptaan uang & agregat moneter' },
            html: {
              en: `<div class="formula">$M0 = $ currency + bank reserves (base money)</div>
<div class="formula">$M1 = M0 + $ demand deposits</div>
<div class="formula">$M2 = M1 + $ savings + time deposits + mutual funds &nbsp;(best predictor of output growth)</div>
<p><b>Bank Credit First:</b> a new loan simultaneously creates a new deposit ⇒ both sides of the bank balance sheet rise ⇒ broad money $M2\\uparrow$. Loan repayment destroys money.</p>`,
              id: `<div class="formula">$M0 = $ uang kartal + cadangan bank (basis moneter)</div>
<div class="formula">$M1 = M0 + $ giro</div>
<div class="formula">$M2 = M1 + $ tabungan + deposito berjangka + reksa dana &nbsp;(prediktor terbaik pertumbuhan output)</div>
<p><b>Bank Credit First:</b> pinjaman baru sekaligus menciptakan deposito baru ⇒ kedua sisi neraca bank naik ⇒ uang luas $M2\\uparrow$. Pelunasan pinjaman menghancurkan uang.</p>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'The diagrams that synthesise the course', id: 'Diagram yang mensintesis kuliah' },
        num: 'G',
        cards: [
          {
            title: { en: '1. The 5-markets workhorse map', id: '1. Peta workhorse 5 pasar' },
            html: {
              en: '<p>Five markets — goods, money, ER/financial/capital, labour — arranged around one Workhorse core, each carrying its defining equation. Draw this to answer "what IS the macro model?" or to set up any "trace a shock through the system" question.</p>',
              id: '<p>Lima pasar — barang, uang, NT/keuangan/modal, tenaga kerja — tersusun mengelilingi satu inti Workhorse, masing-masing membawa persamaan definisinya. Gambar ini untuk menjawab "apa ITU model makro?" atau menyiapkan soal "telusuri guncangan lewat sistem".</p>'
            },
            chart: MARKETS_CHART
          },
          {
            title: { en: '2. SR/MR loop: Okun & Phillips', id: '2. Lingkar SR/MR: Okun & Phillips' },
            html: {
              en: '<p>The $g_Y$–$\\pi$–$u$ triangle: Aggregate Demand raises growth, Okun maps output to unemployment, Phillips maps unemployment to inflation. Use it for the short-/medium-run consequences of any demand or supply shock.</p>',
              id: '<p>Segitiga $g_Y$–$\\pi$–$u$: Permintaan Agregat menaikkan pertumbuhan, Okun memetakan output ke pengangguran, Phillips memetakan pengangguran ke inflasi. Pakai untuk konsekuensi jangka pendek/menengah guncangan permintaan atau penawaran.</p>'
            },
            chart: SRMR_CHART
          },
          {
            title: { en: '3. LR loop: saving, capital & TFP', id: '3. Lingkar LR: tabungan, modal & TFP' },
            html: {
              en: '<p>$K \\to (I, Y)$ with $I=S=sY$ and $Y=A\\cdot F(K,N)$. The three horizons live on one diagram: SR comparative-static, MR trend, LR technology. Draw it when the question is about growth, saving, or why business-cycle fluctuations "look small" in the long run.</p>',
              id: '<p>$K \\to (I, Y)$ dengan $I=S=sY$ dan $Y=A\\cdot F(K,N)$. Tiga horizon hidup dalam satu diagram: SR statis-komparatif, MR tren, LR teknologi. Gambar saat soal tentang pertumbuhan, tabungan, atau mengapa fluktuasi siklus bisnis "tampak kecil" jangka panjang.</p>'
            },
            chart: LRSK_CHART
          },
          {
            title: { en: '4. Mechanisms & anomalies cascade', id: '4. Kaskade mekanisme & anomali' },
            html: {
              en: '<p>An external shock walked through SR ($M\\uparrow\\to i\\downarrow\\to Y\\uparrow\\to u\\downarrow$), MR ($P\\uparrow\\to r\\downarrow\\to i\\uparrow\\to C,I$) and LR ($Y\\downarrow\\to S\\,\\&\\,\\Delta A$), with the anomalies (frictions, liquidity trap, contagion, risk-premium spike) flagged and macroprudential policy across the long-run channel.</p>',
              id: '<p>Guncangan eksternal dijalani lewat SR ($M\\uparrow\\to i\\downarrow\\to Y\\uparrow\\to u\\downarrow$), MR ($P\\uparrow\\to r\\downarrow\\to i\\uparrow\\to C,I$) dan LR ($Y\\downarrow\\to S\\,\\&\\,\\Delta A$), dengan anomali (friksi, jebakan likuiditas, contagion, lonjakan premi risiko) ditandai dan kebijakan makroprudensial melintasi kanal jangka panjang.</p>'
            },
            chart: CASCADE_CHART
          },
          {
            title: { en: '5. Crisis: measured risk → vulnerability', id: '5. Krisis: risiko terukur → kerentanan' },
            html: {
              en: '<p>Fundamentals (credit boom, RER↑) + balance-sheet effect + liquidity trap accumulate into vulnerability and, via the risk-premium amplifier, into crisis. The "hidden risks" the standard model overlooks are exactly what macroprudential policy targets.</p>',
              id: '<p>Fundamental (boom kredit, RER↑) + efek neraca + jebakan likuiditas menumpuk menjadi kerentanan dan, lewat amplifier premi risiko, menjadi krisis. "Risiko tersembunyi" yang diabaikan model standar persis yang dibidik kebijakan makroprudensial.</p>'
            },
            chart: CRISIS_CHART
          },
          {
            title: { en: '6. Inflation–unemployment via AD–AS gap', id: '6. Inflasi–pengangguran lewat kesenjangan AD–AS' },
            html: {
              en: '<p>$Y$ relative to potential $YS$ is the AD–AS gap that drives $\\Delta P$ and $u$. Add the interactive money model $MGAP=M^*\\cdot GAP$. Draw it to connect the demand side ($C+G+I+NX$) and supply side ($A\\cdot f(K,N)$).</p>',
              id: '<p>$Y$ relatif terhadap potensial $YS$ adalah kesenjangan AD–AS yang mendorong $\\Delta P$ dan $u$. Tambah model uang interaktif $MGAP=M^*\\cdot GAP$. Gambar untuk menghubungkan sisi permintaan ($C+G+I+NX$) dan penawaran ($A\\cdot f(K,N)$).</p>'
            },
            chart: GAP_CHART
          },
          {
            title: { en: '7. Climate as a supply-side shock', id: '7. Iklim sebagai guncangan sisi penawaran' },
            html: {
              en: '<p>A damage function $D(T)$ shifts AS up/left: output falls and prices rise. The proxy approach treats climate as an exogenous productivity / cost shifter. Use it for the climate-effect-on-welfare exam theme.</p>',
              id: '<p>Fungsi kerusakan $D(T)$ menggeser AS ke atas/kiri: output turun dan harga naik. Pendekatan proksi memperlakukan iklim sebagai penggeser produktivitas / biaya eksogen. Pakai untuk tema ujian efek iklim pada kesejahteraan.</p>'
            },
            chart: CLIMATE_CHART
          },
          {
            title: { en: '8. Poverty–inequality four-quadrant', id: '8. Empat kuadran kemiskinan–ketimpangan' },
            html: {
              en: '<p>NW: elasticity of the poverty line $PL$ w.r.t $P$ ($\\alpha$). NE: AD vs a flat AS gives $\\Delta\\pi$. SE: elasticity of $Y^{poor}$ w.r.t $Y$ ($\\beta$), with better vs worse distribution curves. The rule $\\alpha<\\beta$ ⇒ poverty worsens.</p>',
              id: '<p>KiA: elastisitas garis kemiskinan $PL$ terhadap $P$ ($\\alpha$). TL: AD vs AS datar memberi $\\Delta\\pi$. KaB: elastisitas $Y^{poor}$ terhadap $Y$ ($\\beta$), dengan kurva distribusi lebih baik vs lebih buruk. Aturan $\\alpha<\\beta$ ⇒ kemiskinan memburuk.</p>'
            },
            chart: POVERTY_CHART
          },
          {
            title: { en: '9. Non-formal sector IS–LM (F vs NF)', id: '9. IS–LM sektor non-formal (F vs NF)' },
            html: {
              en: '<p>Two policy experiments — $\\downarrow G$ and $\\uparrow T^H$ — shift IS left; formal output contracts more than non-formal, so labour is reshuffled into the informal sector rather than lost. Indonesia\'s informal sector is the shock absorber the standard model ignores.</p>',
              id: '<p>Dua eksperimen kebijakan — $\\downarrow G$ dan $\\uparrow T^H$ — menggeser IS ke kiri; output formal menyusut lebih banyak daripada non-formal, sehingga tenaga kerja digeser ke sektor informal bukan hilang. Sektor informal Indonesia adalah peredam guncangan yang diabaikan model standar.</p>'
            },
            chart: NONFORMAL_CHART
          },
          {
            title: { en: '10. Money creation (Bank Credit First)', id: '10. Penciptaan uang (Bank Credit First)' },
            html: {
              en: '<p>A new loan creates a new deposit; both sides of the bank balance sheet expand and broad money $M2$ rises. The monetary aggregates $M0 \\subset M1 \\subset M2$ are the ladder; $M2$ best predicts output growth.</p>',
              id: '<p>Pinjaman baru menciptakan deposito baru; kedua sisi neraca bank meluas dan uang luas $M2$ naik. Agregat moneter $M0 \\subset M1 \\subset M2$ adalah tangganya; $M2$ paling baik memprediksi pertumbuhan output.</p>'
            },
            chart: MONEY_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Name the five markets of the workhorse model and the one equation that defines each.',
             id: 'Sebutkan lima pasar model workhorse dan satu persamaan yang mendefinisikan masing-masing.' },
        answer: [
          { en: '<b>Goods (GM):</b> $Y=C+I+G+NX$ (open-economy goods-market equilibrium). <b>Money (MM):</b> $M/P=Y\\cdot L(i)$ (real money demand). <b>ER/Fin/Cap market:</b> UIP $i=i^f+(E^e-E)/E+\\rho$, with bond $P^b=V/(1+i)$ and stock $P^s=D^e/(1+r)$. <b>Labour (LM):</b> $P=(1+\\mu)P^e\\cdot F(1-Y/L,z)$ (price/wage-setting).',
            id: '<b>Barang (GM):</b> $Y=C+I+G+NX$ (ekuilibrium pasar barang ekonomi terbuka). <b>Uang (MM):</b> $M/P=Y\\cdot L(i)$ (permintaan uang riil). <b>Pasar NT/Keuangan/Modal:</b> UIP $i=i^f+(E^e-E)/E+\\rho$, dengan obligasi $P^b=V/(1+i)$ dan saham $P^s=D^e/(1+r)$. <b>Tenaga kerja (LM):</b> $P=(1+\\mu)P^e\\cdot F(1-Y/L,z)$ (penetapan harga/upah).' },
          { en: 'The point of the synthesis: these are not five separate models — they are one system. A shock in any market propagates to the others, which is exactly what the exam tests ("interactions among markets matter more than each market itself").',
            id: 'Inti sintesis: ini bukan lima model terpisah — ini satu sistem. Guncangan di pasar mana pun menyebar ke yang lain, persis yang diuji ("interaksi antar-pasar lebih penting daripada tiap pasar itu sendiri").' }
        ],
        tip: { en: 'Memorise the four/six equations as a unit; every UAS diagram is a projection of one or two of them.',
               id: 'Hafalkan empat/enam persamaan sebagai satu kesatuan; setiap diagram UAS adalah proyeksi satu atau dua di antaranya.' }
      },
      {
        type: 'scenario',
        q: { en: 'A monetary expansion ($M\\uparrow$) hits a small open economy with currency mismatch. Trace it through the workhorse across SR, MR and LR, and flag where an anomaly could derail it.',
             id: 'Ekspansi moneter ($M\\uparrow$) menghantam ekonomi terbuka kecil dengan currency mismatch. Telusuri lewat workhorse lintas SR, MR & LR, dan tandai di mana anomali bisa menggagalkannya.' },
        answer: [
          { en: '<b>Short run:</b> $M\\uparrow \\to M/P\\uparrow \\to i\\downarrow \\to Y\\uparrow \\to u\\downarrow$ (Okun). The lower rate also depreciates $E$ via UIP, normally boosting NX.',
            id: '<b>Jangka pendek:</b> $M\\uparrow \\to M/P\\uparrow \\to i\\downarrow \\to Y\\uparrow \\to u\\downarrow$ (Okun). Suku bunga lebih rendah juga mendepresiasi $E$ lewat UIP, normalnya mendorong NX.' },
          { en: '<b>Anomaly (Week 11 balance-sheet effect):</b> with foreign-currency debt, depreciation raises the local-currency value of liabilities, cuts net worth, and via financial frictions / the risk-premium spike the expansion can be <em>contractionary</em> — the SR chain ($i\\downarrow\\to Y\\uparrow$) breaks. A liquidity trap would similarly kill the $i\\downarrow$ step.',
            id: '<b>Anomali (efek neraca Minggu 11):</b> dengan utang valas, depresiasi menaikkan nilai liabilitas dalam mata uang lokal, memangkas kekayaan bersih, dan lewat friksi keuangan / lonjakan premi risiko ekspansi bisa <em>kontraktif</em> — rantai SR ($i\\downarrow\\to Y\\uparrow$) patah. Jebakan likuiditas serupa mematikan langkah $i\\downarrow$.' },
          { en: '<b>Medium run:</b> if it does expand, $P\\uparrow \\to M/P\\downarrow \\to r\\uparrow$, $C$ and $I$ retreat, $u\\to u_n$, $Y\\to\\bar Y$; only the price level is permanently higher. <b>Long run:</b> nominal money has no effect on $Y=A\\cdot F(K,N)$ — neutrality. Macroprudential policy is the lean-against-the-build-up tool.',
            id: '<b>Jangka menengah:</b> bila benar berekspansi, $P\\uparrow \\to M/P\\downarrow \\to r\\uparrow$, $C$ dan $I$ surut, $u\\to u_n$, $Y\\to\\bar Y$; hanya tingkat harga yang permanen lebih tinggi. <b>Jangka panjang:</b> uang nominal tak berpengaruh pada $Y=A\\cdot F(K,N)$ — netralitas. Kebijakan makroprudensial adalah alat melawan penumpukan.' }
        ]
      },
      {
        type: 'quant',
        q: { en: 'Okun & Phillips: with $c=2$, $\\alpha=0.5$, $u_n=\\bar u=5\\%$, unemployment falls to $u=3\\%$. By how much does the output gap open and how does inflation move this period?',
             id: 'Okun & Phillips: dengan $c=2$, $\\alpha=0,5$, $u_n=\\bar u=5\\%$, pengangguran turun ke $u=3\\%$. Seberapa besar kesenjangan output terbuka dan bagaimana inflasi bergerak periode ini?' },
        answer: [
          { en: 'Okun: $(\\bar Y - Y)/\\bar Y = c(u-\\bar u) = 2\\times(0.03-0.05) = -0.04$. The gap is $-4\\%$, i.e. actual output is $4\\%$ <em>above</em> potential (a positive output gap / boom).',
            id: 'Okun: $(\\bar Y - Y)/\\bar Y = c(u-\\bar u) = 2\\times(0,03-0,05) = -0,04$. Kesenjangan $-4\\%$, yaitu output aktual $4\\%$ <em>di atas</em> potensial (kesenjangan output positif / boom).' },
          { en: 'Phillips: $\\pi_t - \\pi_{t-1} = -\\alpha(u_t-u_n) = -0.5\\times(0.03-0.05) = +0.01$. Inflation accelerates by 1 percentage point this period because unemployment is below the natural rate.',
            id: 'Phillips: $\\pi_t - \\pi_{t-1} = -\\alpha(u_t-u_n) = -0,5\\times(0,03-0,05) = +0,01$. Inflasi berakselerasi 1 poin persen periode ini karena pengangguran di bawah tingkat alamiah.' },
          { en: 'Intuition: pushing $u$ below $u_n$ buys an output boom now but accelerating inflation — the classic medium-run trade-off the workhorse encodes. Sustained, it spirals; the economy must eventually return to $u_n$.',
            id: 'Intuisi: menekan $u$ di bawah $u_n$ membeli boom output sekarang tetapi inflasi berakselerasi — trade-off jangka menengah klasik yang dikodekan workhorse. Berkelanjutan, ia berputar; ekonomi akhirnya harus kembali ke $u_n$.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'Indonesia cuts government spending ($\\downarrow G$). Using the formal vs non-formal workhorse, why might headline employment barely change while welfare falls?',
             id: 'Indonesia memangkas belanja pemerintah ($\\downarrow G$). Memakai workhorse formal vs non-formal, mengapa lapangan kerja utama nyaris tak berubah sementara kesejahteraan turun?' },
        answer: [
          { en: '$\\downarrow G$ shifts IS left; formal output $Y^f$ contracts and the formal Phillips curve worsens. But displaced formal workers do not simply become unemployed — they flow into the <span class="key">non-formal (informal) sector</span>, which acts as a shock absorber.',
            id: '$\\downarrow G$ menggeser IS ke kiri; output formal $Y^f$ menyusut dan kurva Phillips formal memburuk. Tetapi pekerja formal yang tergeser tidak sekadar menganggur — mereka mengalir ke <span class="key">sektor non-formal (informal)</span>, yang berperan sebagai peredam guncangan.' },
          { en: 'So total employment looks stable (medium-term equilibrium $A_1B_3$), but the jobs are lower-productivity, lower-pay, less-secure informal jobs. Measured unemployment understates the welfare loss; the standard fully-formal workhorse misses it entirely.',
            id: 'Jadi total lapangan kerja tampak stabil (ekuilibrium jangka menengah $A_1B_3$), tetapi pekerjaannya berproduktivitas lebih rendah, berbayar lebih rendah, kurang aman. Pengangguran terukur meremehkan kerugian kesejahteraan; workhorse standar yang sepenuhnya formal melewatkannya sama sekali.' },
          { en: 'Policy implication (Solow\'s rules): a contraction that "works" on paper can erode social welfare and bonds — so judge it by the formal–informal distribution, not just the output and unemployment numbers.',
            id: 'Implikasi kebijakan (aturan Solow): kontraksi yang "berhasil" di atas kertas bisa mengikis kesejahteraan dan ikatan sosial — jadi nilai dari distribusi formal–informal, bukan sekadar angka output dan pengangguran.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'How would you incorporate climate change and a CBDC rollout into the workhorse model? Give the modified equations.',
             id: 'Bagaimana kamu memasukkan perubahan iklim dan peluncuran CBDC ke model workhorse? Berikan persamaan yang dimodifikasi.' },
        answer: [
          { en: '<b>Climate (supply side):</b> add a damage function to production, $Y=f(K,L,A,(1-D(T)))$ with $D(T)=aT^2$ (Nordhaus), proxying $T$ by the NOAA temperature anomaly or El Niño index. Add a carbon-price / policy-dummy term to consumption: $C=a+\\beta_1 Y_d+\\beta_2 CO2^{carbon}+\\beta_3 policy^{dummy}+\\varepsilon$. Effect: AS shifts up/left ⇒ $Y\\downarrow$, $P\\uparrow$.',
            id: '<b>Iklim (sisi penawaran):</b> tambahkan fungsi kerusakan ke produksi, $Y=f(K,L,A,(1-D(T)))$ dengan $D(T)=aT^2$ (Nordhaus), proksikan $T$ dengan anomali suhu NOAA atau indeks El Niño. Tambah suku harga karbon / dummy kebijakan ke konsumsi: $C=a+\\beta_1 Y_d+\\beta_2 CO2^{carbon}+\\beta_3 policy^{dummy}+\\varepsilon$. Efek: AS bergeser atas/kiri ⇒ $Y\\downarrow$, $P\\uparrow$.' },
          { en: '<b>CBDC (money side):</b> modify money demand $Md=f(Y,i,\\phi\\,CBDC^{share}+\\kappa\\,crypto^{vol})$ — a velocity adjustment. Model bank disintermediation $Bank^{dep}=a-\\beta\\,CBDC^{adopt}+\\gamma Y_d+\\varepsilon$, then link lower deposits to lower lending and investment. Programmability changes MPC via $C=a+\\beta_1 Y_d+\\beta_2 CBDC^{transfers}+\\beta_3 CBDC^{programmable}+\\varepsilon$.',
            id: '<b>CBDC (sisi uang):</b> modifikasi permintaan uang $Md=f(Y,i,\\phi\\,CBDC^{share}+\\kappa\\,crypto^{vol})$ — penyesuaian velositas. Modelkan disintermediasi bank $Bank^{dep}=a-\\beta\\,CBDC^{adopt}+\\gamma Y_d+\\varepsilon$, lalu hubungkan deposito lebih rendah ke pinjaman dan investasi lebih rendah. Programabilitas mengubah MPC lewat $C=a+\\beta_1 Y_d+\\beta_2 CBDC^{transfers}+\\beta_3 CBDC^{programmable}+\\varepsilon$.' },
          { en: 'Both follow the same recipe — the "proxy approach": keep the workhorse intact and bolt the emerging issue on as an extra shifter / regressor, then re-derive the comparative statics. That is precisely what exam theme 1 (climate) and theme 5 (crypto/CBDC) ask for.',
            id: 'Keduanya mengikuti resep yang sama — "pendekatan proksi": pertahankan workhorse utuh dan pasang isu mutakhir sebagai penggeser / regresor tambahan, lalu turunkan ulang statika komparatif. Itulah persis yang diminta tema ujian 1 (iklim) dan tema 5 (kripto/CBDC).' }
        ]
      },
      {
        type: 'tutorial',
        q: { en: 'Does a new bank loan in Indonesia create new money? Reconcile "Bank Credit First" with the Indonesian data finding that "deposits drive credit".',
             id: 'Apakah pinjaman bank baru di Indonesia menciptakan uang baru? Damaikan "Bank Credit First" dengan temuan data Indonesia bahwa "deposito mendorong kredit".' },
        answer: [
          { en: '<b>Mechanically, yes (BCF).</b> When a commercial bank makes a loan it credits the borrower\'s account with a new deposit equal to the loan; both sides of the bank\'s balance sheet expand and broad money $M2$ rises. Banks do not lend out pre-existing deposits or reserves to households — that is the "bank intermediation" misconception.',
            id: '<b>Secara mekanis, ya (BCF).</b> Saat bank komersial memberi pinjaman ia mengkredit rekening peminjam dengan deposito baru sebesar pinjaman; kedua sisi neraca bank meluas dan uang luas $M2$ naik. Bank tidak meminjamkan deposito atau cadangan yang sudah ada ke rumah tangga — itu miskonsepsi "intermediasi bank".' },
          { en: '<b>Empirically for Indonesia, the dominant direction is the reverse.</b> Quarterly CREDIT and DEPOSIT co-move strongly (corr ≈ 0.99) but long-run corr ≈ 0.38. Granger/variance evidence: DEPOSIT→CREDIT is strongly significant ($\\chi^2=29.3$, $p<0.001$, ~14% of credit-growth forecast variance), while CREDIT→DEPOSIT is significant only at 5% and weaker. So the data support the classic intermediation story.',
            id: '<b>Secara empiris untuk Indonesia, arah dominan justru sebaliknya.</b> KREDIT dan DEPOSITO kuartalan bergerak bersama kuat (korr ≈ 0,99) tetapi korr jangka panjang ≈ 0,38. Bukti Granger/varians: DEPOSITO→KREDIT sangat signifikan ($\\chi^2=29,3$, $p<0,001$, ~14% varians ramalan pertumbuhan kredit), sedangkan KREDIT→DEPOSITO hanya signifikan pada 5% dan lebih lemah. Jadi data mendukung cerita intermediasi klasik.' },
          { en: '<b>Reconciliation:</b> BCF is the correct accounting of a single loan at the moment of creation; the macro <em>regularity</em> in Indonesia is that aggregate credit growth is constrained by and follows deposit funding — institutional structure, regulation and a deposit-funded banking system dominate the short-run dynamics. Both can be true: money is created loan-by-loan, yet system-wide credit is paced by deposits.',
            id: '<b>Pendamaian:</b> BCF adalah pembukuan yang benar atas satu pinjaman pada saat penciptaan; <em>keteraturan</em> makro di Indonesia adalah bahwa pertumbuhan kredit agregat dibatasi oleh dan mengikuti pendanaan deposito — struktur kelembagaan, regulasi dan sistem perbankan berbasis-deposito mendominasi dinamika jangka pendek. Keduanya bisa benar: uang tercipta pinjaman-demi-pinjaman, namun kredit sistem dipacu deposito.' }
        ],
        tip: { en: 'Exam theme 2 is exactly this: the role of central & commercial banks in money creation and its impact on growth and the labour market.',
               id: 'Tema ujian 2 persis ini: peran bank sentral & komersial dalam penciptaan uang dan dampaknya pada pertumbuhan dan pasar kerja.' }
      }
    ]
  };
})();
