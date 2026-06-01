/* ============================================================================
   MAKRO · Week 12 — Macroprudential Policy · MMT · DSGE
   Bilingual (EN + ID). Registers itself on window.MAKRO_WEEKS.w12.
   Source: Prof. Iwan Azis lecture deck "Macroprudential Policy & Modern
   Monetary Policy (MMT)" (Spring 2026), 25 slides, with Azis I.J. (2025)
   "Monetary Whispers Across Regions" (Springer, pp.18, 77). Background theory:
   Bernanke–Gertler–Gilchrist (1999) financial accelerator, Kiyotaki–Moore (1997)
   collateral constraints, Smets–Wouters (2007) DSGE, Wray / Kelton / Lerner MMT,
   BIS work on procyclicality & the Taylor-rule gap.

   Diagram geometry used in the charts:
     • Micro→Macro nesting: micro firms inside the systemic-risk envelope.
     • Banks' balance-sheet bars: Assets = Liabilities + Equity identity.
     • CCyB: capital buffer rises with the credit-to-GDP gap (procyclical lean).
     • Procyclicality: actual policy rate vs the mean Taylor benchmark (BIS).
     • MMT AD–AS: money-financed AD shift is output-only under slack, price-only
       at full employment (vertical AS at Yf).
     • Financial accelerator: a net-worth shock amplifies the output IRF
       (impaired vs frictionless impulse responses).
   ============================================================================ */
(function () {
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';

  /* ---- Chart 1: Micro vs Macroprudential — the systemic-risk envelope ------- */
  var SCOPE_CHART = { panels: [{
    title: 'Microprudential (each firm) sits inside the macroprudential (system-wide) envelope',
    w: 470, h: 300,
    x: { min: 0, max: 10, label: 'Institutions (interconnected)' },
    y: { min: 0, max: 10, label: 'Risk covered' },
    curves: [
      { id: 'micro', kind: 'hline', y: 3, color: TEAL, label: 'Micro: solvency of each bank' },
      { id: 'macro', kind: 'line', p1: [0, 5], p2: [10, 9], color: RED, label: 'Macro: systemic risk' }
    ],
    notes: [
      { x: 5, y: 1.6, text: 'partial equilibrium: each firm in isolation', color: '#777', anchor: 'middle', size: 10 },
      { x: 3.2, y: 8.4, text: 'general equilibrium: spillovers, fire-sales, contagion', color: RED, anchor: 'middle', size: 10 },
      { x: 8.2, y: 4.2, text: 'safe banks ≠ safe system (fallacy of composition)', color: '#777', anchor: 'middle', size: 9.5 }
    ]
  }] };

  /* ---- Chart 2: Banks' balance-sheet identity (bars) ------------------------ */
  var BS_CHART = { kind: 'bars',
    title: "Banks' balance sheet: Assets = Liabilities + Equity (net worth)",
    w: 460, h: 320, yMax: 120,
    bars: [
      { label: 'A', value: 100, color: TEAL,  caption: 'Cash · Core loans · Non-core securities' },
      { label: 'L', value: 88,  color: RED,   caption: 'Core deposits · Non-core borrowing' },
      { label: 'E', value: 12,  color: GREEN, caption: 'Equity = net worth' }
    ],
    gap: { from: 0, to: 1, label: 'E', color: GREEN }
  };

  /* ---- Chart 3: Countercyclical capital buffer vs credit gap ---------------- */
  var CCYB_CHART = { panels: [{
    title: 'Countercyclical Capital Buffer (CCyB): lean against the credit-to-GDP gap',
    w: 470, h: 320,
    x: { min: 0, max: 10, label: 'Credit-to-GDP gap (cycle)' },
    y: { min: 0, max: 4, label: 'CCyB add-on (% of RWA)' },
    curves: [
      { id: 'lo',  kind: 'hline', y: 0, color: '#999', label: 'gap small → 0%' },
      { id: 'ccyb', kind: 'line', p1: [2, 0], p2: [8, 2.5], color: RED, label: 'buffer builds in the boom' },
      { id: 'cap', kind: 'hline', y: 2.5, color: AMBER, label: 'cap 2.5% of RWA' }
    ],
    notes: [
      { x: 6.5, y: 0.6, text: 'release in the bust → cushions lending', color: GREEN, anchor: 'middle', size: 10 },
      { x: 3.0, y: 3.2, text: 'CAR = Capital / RWA × 100%', color: '#555', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 4: Procyclicality — policy rate vs Taylor benchmark ------------ */
  var PROCYCL_CHART = { panels: [{
    title: 'Procyclicality: actual policy rate deviates from the mean Taylor-rule benchmark (BIS)',
    w: 480, h: 320,
    x: { min: 0, max: 10, label: 'time (financial cycle)' },
    y: { min: 0, max: 10, label: 'interest rate (%)' },
    curves: [
      { id: 'taylor', kind: 'line', p1: [0, 3], p2: [10, 7], color: LINE, label: 'mean Taylor rate', dash: true },
      { id: 'policy', kind: 'path', pts: [[0,2.5],[2,2],[4,3.5],[6,2.5],[8,4],[10,3]], color: RED, label: 'actual policy rate', smooth: true }
    ],
    notes: [
      { x: 6.6, y: 6.2, text: '"too low for too long" → leverage builds', color: RED, anchor: 'middle', size: 9.5 },
      { x: 3, y: 1.1, text: 'gap = influence of factors other than inflation & output', color: '#777', anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 5: MMT — money-financed AD shift in an AD–AS diagram ----------- */
  var MMT_CHART = { panels: [{
    title: 'MMT / Monetary Finance: money-financed AD shift is output-only under slack, price-only at full employment',
    w: 490, h: 330,
    x: { min: 0, max: 10, label: 'Real output Y' },
    y: { min: 0, max: 10, label: 'Price level P' },
    curves: [
      { id: 'AS',  kind: 'path', pts: [[1,1],[4,1.3],[6,1.9],[7,3],[7.4,5],[7.5,7],[7.55,9]], color: LINE, label: 'AS (flat then vertical at Yf)', smooth: true },
      { id: 'AD1', kind: 'line', p1: [0, 6], p2: [7, 0], color: TEAL, label: 'AD', labelAt: 'start' },
      { id: 'AD2', kind: 'line', p1: [2, 8], p2: [10, 0.5], color: RED, label: "AD' (after money-financed spending)" },
      { id: 'Yf',  kind: 'vline', x: 7.5, color: AMBER, label: 'Yf (full employment)' }
    ],
    notes: [
      { x: 3, y: 2.6, text: 'slack: ΔAD raises Y, not P', color: GREEN, anchor: 'middle', size: 10 },
      { x: 8.6, y: 6.5, text: 'at Yf: ΔAD raises P (inflation)', color: RED, anchor: 'middle', size: 9.5 }
    ]
  }] };

  /* ---- Chart 6: DSGE financial accelerator — amplified IRF ------------------ */
  var DSGE_CHART = { panels: [{
    title: 'DSGE with financial frictions: a shock is amplified & prolonged when net worth is impaired',
    w: 490, h: 330,
    x: { min: 0, max: 10, label: 'quarters after the shock' },
    y: { min: -6, max: 1, label: 'output deviation (%)' },
    curves: [
      { id: 'zero', kind: 'hline', y: 0, color: '#999', label: 'steady state' },
      { id: 'fric', kind: 'path', pts: [[0,0],[1,-5],[2,-4.2],[3,-3.2],[5,-1.8],[7,-0.8],[10,-0.2]], color: RED, label: 'with financial frictions (accelerator)', smooth: true },
      { id: 'nofric', kind: 'path', pts: [[0,0],[1,-2.5],[2,-2],[3,-1.5],[5,-0.8],[7,-0.3],[10,-0.05]], color: TEAL, label: 'frictionless RBC/NK', smooth: true }
    ],
    notes: [
      { x: 5, y: -5.2, text: 'net-worth ↓ → external finance premium ↑ → investment ↓↓', color: RED, anchor: 'middle', size: 9 }
    ]
  }] };

  window.MAKRO_WEEKS.w12 = {
    id: 'w12',
    label: { en: 'Week 12', id: 'Pertemuan 12' },
    title: { en: 'Macroprudential Policy · MMT · DSGE', id: 'Kebijakan Makroprudensial · MMT · DSGE' },
    subtitle: {
      en: "Why micro-soundness is not enough, the central bank's widening mandate, Indonesia's macroprudential toolkit (CAR, LTV/FTV, CCyB, MIR, RPIM) and OJK's stability indicators — then Modern Monetary Theory, Monetary Finance, and DSGE models with financial frictions.",
      id: "Mengapa kesehatan mikro tidak cukup, mandat bank sentral yang meluas, perangkat makroprudensial Indonesia (CAR, LTV/FTV, CCyB, RIM, RPIM) dan indikator stabilitas OJK — lalu Modern Monetary Theory, Monetary Finance, dan model DSGE dengan friksi keuangan."
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'From micro- to macroprudential: systemic risk', id: 'Dari mikro- ke makroprudensial: risiko sistemik' },
        num: '1',
        cards: [
          {
            title: { en: 'Micro vs macroprudential', id: 'Mikro vs makroprudensial' },
            html: {
              en: `<p>Quoting Azis (2025, <em>Monetary Whispers Across Regions</em>, p.18): "Unlike microprudential measures, where the idiosyncratic features of individual financial institutions are the central target of evaluation to avoid bank runs and defaults at particular institutions, <span class="key">macroprudential</span> policies address <span class="key">interactions between individual institutions</span> and the financial system as a whole. The evaluation is <span class="key">cash-flow-based</span>, where bank liquidity is evaluated not as an innate feature of a particular class of assets; instead it is influenced by the <span class="key">balance sheet</span> of the institutions, the markets (for those assets), the financial system, and the economic condition as a whole."</p>
<p>The two lenses differ in what they treat as <em>given</em>. Microprudential supervision asks: is <em>this</em> bank solvent, with enough capital and liquidity to survive its own bad luck? Macroprudential supervision asks: is the <em>system</em> safe once we allow for the spillovers — fire-sales, common exposures, contagion — that arise when many banks act at once?</p>
<div class="note"><span class="key">Fallacy of composition.</span> A set of individually-safe banks is not a safe system. If every bank deleverages at the same time, asset prices collapse and the "prudent" individual response makes the system <em>less</em> safe. Microprudential reasoning is partial-equilibrium; macroprudential reasoning is general-equilibrium.</div>`,
              id: `<p>Mengutip Azis (2025, <em>Monetary Whispers Across Regions</em>, hlm.18): "Tidak seperti tindakan mikroprudensial, di mana ciri idiosinkratik tiap lembaga keuangan menjadi sasaran utama evaluasi untuk menghindari bank run dan gagal bayar pada institusi tertentu, kebijakan <span class="key">makroprudensial</span> menyasar <span class="key">interaksi antar institusi</span> dan sistem keuangan secara keseluruhan. Evaluasinya <span class="key">berbasis arus kas</span>, di mana likuiditas bank dinilai bukan sebagai ciri bawaan suatu kelas aset; melainkan dipengaruhi oleh <span class="key">neraca</span> institusi, pasar (untuk aset itu), sistem keuangan, dan kondisi ekonomi secara keseluruhan."</p>
<p>Kedua lensa berbeda dalam apa yang dianggap <em>given</em>. Pengawasan mikroprudensial bertanya: apakah bank <em>ini</em> solven, dengan modal dan likuiditas cukup untuk bertahan dari nasib buruknya sendiri? Pengawasan makroprudensial bertanya: apakah <em>sistem</em> aman setelah kita memperhitungkan limpahan — fire-sale, eksposur bersama, contagion — yang muncul ketika banyak bank bertindak serentak.</p>
<div class="note"><span class="key">Fallacy of composition.</span> Sekumpulan bank yang masing-masing sehat bukan berarti sistem yang sehat. Bila semua bank deleverage bersamaan, harga aset anjlok dan respons "hati-hati" individu justru membuat sistem <em>kurang</em> aman. Penalaran mikroprudensial bersifat partial-equilibrium; penalaran makroprudensial bersifat general-equilibrium.</div>`
            },
            chart: SCOPE_CHART
          },
          {
            title: { en: 'From regulation & supervision to macroprudential regulation', id: 'Dari regulasi & pengawasan ke regulasi makroprudensial' },
            html: {
              en: `<p>Azis (2025): "When debt becomes unsustainable, the system becomes vulnerable to financial instability and economic downturn… government, as both policymakers and regulators, should play a significant role… that such behaviors are prevented by regulating the operations of the financial market." The articulation about <span class="key">financial regulation and supervision</span> becomes the basis of a framework for what is later known as <span class="key">macroprudential regulation</span>.</p>
<p>The intellectual shift came after the <span class="key">2008 Global Financial Crisis</span>. Before 2008, the consensus was "keep inflation low, supervise each bank, and the system takes care of itself." The crisis showed that price stability and bank-by-bank soundness can coexist with a <em>build-up of systemic leverage</em> that then unwinds violently. Macroprudential policy is the missing third pillar between monetary policy and microprudential supervision.</p>
<div class="tip">Exam framing: macroprudential is <em>debt- and balance-sheet-based</em> and evaluated <em>cash-flow first</em> — trace how a shock moves through the balance sheets of households, firms, banks and the sovereign, not just through one bank's capital ratio.</div>`,
              id: `<p>Azis (2025): "Ketika utang menjadi tidak berkelanjutan, sistem menjadi rentan terhadap ketidakstabilan keuangan dan kemerosotan ekonomi… pemerintah, sebagai pembuat kebijakan sekaligus regulator, harus memainkan peran penting… agar perilaku semacam itu dicegah dengan mengatur operasi pasar keuangan." Artikulasi tentang <span class="key">regulasi dan pengawasan keuangan</span> menjadi dasar kerangka yang kemudian dikenal sebagai <span class="key">regulasi makroprudensial</span>.</p>
<p>Pergeseran pemikiran ini terjadi setelah <span class="key">Krisis Keuangan Global 2008</span>. Sebelum 2008, konsensusnya "jaga inflasi rendah, awasi tiap bank, dan sistem akan mengurus dirinya sendiri." Krisis menunjukkan bahwa stabilitas harga dan kesehatan bank-per-bank bisa berdampingan dengan <em>penumpukan leverage sistemik</em> yang lalu terurai dengan keras. Kebijakan makroprudensial adalah pilar ketiga yang hilang antara kebijakan moneter dan pengawasan mikroprudensial.</p>
<div class="tip">Kerangka ujian: makroprudensial berbasis <em>utang dan neraca</em> dan dievaluasi <em>dari arus kas dulu</em> — telusuri bagaimana guncangan bergerak melalui neraca rumah tangga, perusahaan, bank, dan negara, bukan hanya melalui rasio modal satu bank.</div>`
            }
          }
        ]
      },

      {
        heading: { en: "The central bank's widening mandate", id: 'Mandat bank sentral yang meluas' },
        num: '2',
        cards: [
          {
            title: { en: 'Price stability, employment, financial stability', id: 'Stabilitas harga, lapangan kerja, stabilitas keuangan' },
            html: {
              en: `<p>Azis (2025, p.77): "<span class="key">Price stability</span> is the most conventional goal… related to <span class="key">exchange-rate stability</span>, because high inflation can be triggered by currency instability." A high-inflation episode in an emerging market is very often an <em>imported</em> phenomenon: a depreciation raises the price of imports and feeds into the CPI, so an inflation mandate quietly contains an exchange-rate concern.</p>
<p>Modern mandates add two more goals:</p>
<ul>
<li><span class="key">Employment.</span> "High unemployment imposes significant economic instability and people's standard of living… social instability… a large portion of the population cannot contribute to the economy." So the central bank cares about the real side, not just the price level.</li>
<li><span class="key">Financial stability</span>, "amid an increased frequency of financial crisis… Instability in one market can spread to others and the economy, leading to a broader economic crisis." This forces a <em>broader 'macroprudential' policy framework</em>, not just a single interest rate, because instability is "more systemic risks."</li>
</ul>`,
              id: `<p>Azis (2025, hlm.77): "<span class="key">Stabilitas harga</span> adalah tujuan paling konvensional… terkait dengan <span class="key">stabilitas nilai tukar</span>, karena inflasi tinggi bisa dipicu oleh ketidakstabilan mata uang." Episode inflasi tinggi di pasar berkembang sangat sering bersifat <em>impor</em>: depresiasi menaikkan harga impor dan merembet ke IHK, sehingga mandat inflasi diam-diam memuat kepedulian nilai tukar.</p>
<p>Mandat modern menambahkan dua tujuan lagi:</p>
<ul>
<li><span class="key">Lapangan kerja.</span> "Pengangguran tinggi menimbulkan ketidakstabilan ekonomi yang besar dan menurunkan taraf hidup… ketidakstabilan sosial… sebagian besar populasi tak dapat berkontribusi pada ekonomi." Jadi bank sentral peduli sisi riil, bukan hanya tingkat harga.</li>
<li><span class="key">Stabilitas keuangan</span>, "di tengah meningkatnya frekuensi krisis keuangan… Ketidakstabilan di satu pasar bisa menyebar ke pasar lain dan ekonomi, memicu krisis ekonomi yang lebih luas." Ini menuntut <em>kerangka kebijakan 'makroprudensial' yang lebih luas</em>, bukan hanya satu suku bunga, karena ketidakstabilan adalah "risiko yang lebih sistemik".</li>
</ul>`
            }
          },
          {
            title: { en: 'Balancing acts, trade-offs, and communication', id: 'Keseimbangan, trade-off, dan komunikasi' },
            html: {
              en: `<p>"Achieving all these targets involves <span class="key">trade-offs</span>. Central banks can also use their ability to deliver information and policy statements to signal their intentions to the market. It is often the case that the trend of inflation is shaped by <span class="key">inflation expectations</span>. Effective <span class="key">communication</span> can help set such expectations." A central bank with one instrument (the policy rate) and several goals (inflation, employment, exchange rate, financial stability) is over-constrained. Two responses:</p>
<ol>
<li>Add <em>instruments</em> — this is exactly why macroprudential tools exist. The policy rate stays free to target inflation/output; LTV ratios, capital buffers and FX limits target financial-stability risks directly. This is Indonesia's "<span class="key">Policy Mix</span>".</li>
<li>Manage <span class="key">inflation expectations</span> through credible <span class="key">communication</span>. If the public believes the central bank will hit its target, the trade-off becomes cheaper to manage.</li>
</ol>
<div class="note">The Tinbergen rule sits behind this slide: to hit $n$ independent targets you need at least $n$ independent instruments. Macroprudential policy is the instrument that lets monetary policy stop trying to do two jobs at once.</div>`,
              id: `<p>"Mencapai semua target ini melibatkan <span class="key">trade-off</span>. Bank sentral juga dapat memakai kemampuan menyampaikan informasi dan pernyataan kebijakan untuk memberi sinyal niat ke pasar. Tren inflasi kerap dibentuk oleh <span class="key">ekspektasi inflasi</span>. <span class="key">Komunikasi</span> yang efektif dapat membantu membentuk ekspektasi tersebut." Bank sentral dengan satu instrumen (suku bunga kebijakan) dan beberapa tujuan (inflasi, lapangan kerja, nilai tukar, stabilitas keuangan) menjadi over-constrained. Dua respons:</p>
<ol>
<li>Tambah <em>instrumen</em> — inilah alasan keberadaan perangkat makroprudensial. Suku bunga kebijakan tetap bebas menargetkan inflasi/output; rasio LTV, buffer modal, dan batas valas menargetkan risiko stabilitas keuangan secara langsung. Inilah "<span class="key">Bauran Kebijakan</span>" Indonesia.</li>
<li>Kelola <span class="key">ekspektasi inflasi</span> lewat <span class="key">komunikasi</span> yang kredibel. Bila publik yakin bank sentral akan mencapai targetnya, trade-off jadi lebih murah dikelola.</li>
</ol>
<div class="note">Kaidah Tinbergen ada di balik slide ini: untuk mencapai $n$ target independen dibutuhkan minimal $n$ instrumen independen. Kebijakan makroprudensial adalah instrumen yang membuat kebijakan moneter berhenti mengerjakan dua tugas sekaligus.</div>`
            }
          }
        ]
      },

      {
        heading: { en: "Banks' balance sheet, procyclicality & the levy", id: 'Neraca bank, prosiklikalitas & levy' },
        num: '3',
        cards: [
          {
            title: { en: "Reading the bank balance sheet", id: 'Membaca neraca bank' },
            html: {
              en: `<p>Macroprudential evaluation is <span class="key">balance-sheet-based</span>. A bank's balance sheet obeys the identity</p>
<div class="formula">$$\\text{Assets} = \\text{Liabilities} + \\text{Equity (net worth)}.$$</div>
<p>On the deck:</p>
<table>
<thead><tr><th>Assets</th><th>Liabilities & Equity</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>Core: Deposits</td></tr>
<tr><td>Core: Loans</td><td>Other Deposits & Savings</td></tr>
<tr><td>Non-core: Securities <span class="key">(sovereign-bank nexus)</span></td><td>Non-core: Loans / borrowing, etc.</td></tr>
<tr><td></td><td>Equity (net worth)</td></tr>
</tbody>
</table>
<p>The <span class="key">core/non-core</span> split is the key macroprudential signal. <em>Core</em> funding (retail deposits) is sticky and stable; <em>non-core</em> funding (wholesale/foreign borrowing) is the part that surges in a boom and flees in a bust. A rising non-core share is a leading indicator of fragility. On the asset side, banks' holdings of government securities create the <span class="key">sovereign-bank nexus</span> (covered last week): trouble for the sovereign weakens banks, and vice versa.</p>`,
              id: `<p>Evaluasi makroprudensial berbasis <span class="key">neraca</span>. Neraca bank mematuhi identitas</p>
<div class="formula">$$\\text{Aset} = \\text{Kewajiban} + \\text{Ekuitas (kekayaan bersih)}.$$</div>
<p>Pada slide:</p>
<table>
<thead><tr><th>Aset</th><th>Kewajiban & Ekuitas</th></tr></thead>
<tbody>
<tr><td>Kas</td><td>Inti: Simpanan</td></tr>
<tr><td>Inti: Kredit</td><td>Simpanan & Tabungan lain</td></tr>
<tr><td>Non-inti: Surat berharga <span class="key">(sovereign-bank nexus)</span></td><td>Non-inti: Pinjaman, dll.</td></tr>
<tr><td></td><td>Ekuitas (kekayaan bersih)</td></tr>
</tbody>
</table>
<p>Pemisahan <span class="key">inti/non-inti</span> adalah sinyal makroprudensial kunci. Pendanaan <em>inti</em> (simpanan ritel) lengket dan stabil; pendanaan <em>non-inti</em> (wholesale/asing) adalah bagian yang melonjak saat boom dan kabur saat bust. Pangsa non-inti yang naik adalah indikator awal kerapuhan. Di sisi aset, kepemilikan surat berharga pemerintah menciptakan <span class="key">sovereign-bank nexus</span> (dibahas minggu lalu): masalah negara melemahkan bank, dan sebaliknya.</p>`
            },
            chart: BS_CHART
          },
          {
            title: { en: 'Procyclicality and the Taylor-rule gap', id: 'Prosiklikalitas dan gap Taylor' },
            html: {
              en: `<p><span class="key">Procyclicality</span> is the tendency of the financial system to amplify the business cycle: in good times credit and asset prices feed each other upward; in bad times they spiral down together. The deck shows the BIS evidence — a "deviation due to the systematic influence of factors <em>other than</em> the dynamics of inflation and output in policy-rate setting," for both <span class="key">Global</span> and <span class="key">Emerging Market</span> rates, comparing the actual <span class="key">policy rate</span> against the <span class="key">mean Taylor rate</span>.</p>
<p>When the policy rate sits persistently <em>below</em> the Taylor benchmark — "too low for too long" — cheap funding encourages leverage and risk-taking, building the very vulnerability that macroprudential policy must lean against. The point is not that the Taylor rule is right, but that the gap is a measurable symptom of procyclical policy.</p>`,
              id: `<p><span class="key">Prosiklikalitas</span> adalah kecenderungan sistem keuangan memperbesar siklus bisnis: di masa baik kredit dan harga aset saling mendorong ke atas; di masa buruk keduanya berputar turun bersama. Slide menunjukkan bukti BIS — "deviasi akibat pengaruh sistematis faktor <em>selain</em> dinamika inflasi dan output dalam penetapan suku bunga kebijakan," untuk suku bunga <span class="key">Global</span> dan <span class="key">Pasar Berkembang</span>, membandingkan <span class="key">suku bunga kebijakan</span> aktual dengan <span class="key">mean Taylor rate</span>.</p>
<p>Ketika suku bunga kebijakan terus berada <em>di bawah</em> patokan Taylor — "terlalu rendah terlalu lama" — pendanaan murah mendorong leverage dan pengambilan risiko, membangun kerapuhan yang justru harus dilawan kebijakan makroprudensial. Intinya bukan bahwa aturan Taylor benar, tetapi bahwa gap itu adalah gejala terukur dari kebijakan yang prosiklikal.</p>`
            },
            chart: PROCYCL_CHART
          },
          {
            title: { en: 'Crisis-resolution toolkit and the Korean levy', id: 'Perangkat resolusi krisis dan levy Korea' },
            html: {
              en: `<p>The deck lists the institutions and funds <span class="key">typically involved</span> in macroprudential crisis management:</p>
<ol>
<li><span class="key">Special Contribution (Responsibility Contribution)</span> for losses of public funds related to an FX crisis;</li>
<li><span class="key">Deposit Insurance System</span>;</li>
<li><span class="key">Financial Stability Fund</span> to stabilise the financial market;</li>
<li><span class="key">Bank Recapitalization Fund</span>;</li>
<li><span class="key">Restructuring Fund</span>.</li>
</ol>
<p><span class="key">Example — Korea.</span> To rein in the excessive leverage of financial institutions, Korea introduced a <span class="key">macroprudential levy in 2010</span> on banks' non-core (especially short-term foreign-currency) liabilities, explicitly "to reduce the risk of <span class="key">procyclicality</span> effects." The levy taxes exactly the volatile non-core funding that surges in booms — a price-based tool that makes runnable funding more expensive before the crisis, not after.</p>
<div class="tip">Tie it together: the levy attacks the <em>non-core</em> liabilities on the balance-sheet diagram, which are the procyclical funding shown in the Taylor-gap chart. One coherent story across three slides.</div>`,
              id: `<p>Slide mendaftar lembaga dan dana yang <span class="key">biasanya terlibat</span> dalam manajemen krisis makroprudensial:</p>
<ol>
<li><span class="key">Kontribusi Khusus (Responsibility Contribution)</span> untuk kerugian dana publik terkait krisis valas;</li>
<li><span class="key">Sistem Penjaminan Simpanan</span>;</li>
<li><span class="key">Dana Stabilitas Keuangan</span> untuk menstabilkan pasar keuangan;</li>
<li><span class="key">Dana Rekapitalisasi Bank</span>;</li>
<li><span class="key">Dana Restrukturisasi</span>.</li>
</ol>
<p><span class="key">Contoh — Korea.</span> Untuk menekan leverage berlebih lembaga keuangan, Korea memperkenalkan <span class="key">levy makroprudensial pada 2010</span> atas kewajiban non-inti bank (terutama valas jangka pendek), secara eksplisit "untuk mengurangi risiko efek <span class="key">prosiklikalitas</span>." Levy memajaki persis pendanaan non-inti volatil yang melonjak saat boom — alat berbasis harga yang membuat pendanaan mudah-kabur lebih mahal sebelum krisis, bukan sesudah.</p>
<div class="tip">Rangkai semuanya: levy menyerang kewajiban <em>non-inti</em> pada diagram neraca, yang merupakan pendanaan prosiklikal pada grafik Taylor-gap. Satu cerita koheren menembus tiga slide.</div>`
            }
          }
        ]
      },

      {
        heading: { en: "Indonesia's macroprudential toolkit", id: 'Perangkat makroprudensial Indonesia' },
        num: '4',
        cards: [
          {
            title: { en: 'Asia-Pacific: asset-based instruments dominate', id: 'Asia-Pasifik: instrumen berbasis aset dominan' },
            html: {
              en: `<p>The deck's Asia-Pacific panel shows that the <span class="key">number of macroprudential instruments increased sharply after the Great Financial Crisis</span>, and that in Asia-Pacific most of the tools available are <span class="key">asset-based</span> instruments (acting on what banks may lend against) rather than capital- or liquidity-based ones. The headline capital ratio is the <span class="key">CAR</span>:</p>
<div class="formula">$$\\text{CAR} = \\frac{\\text{Capital}}{\\text{Risk-Weighted Assets (RWA)}}\\times 100\\%.$$</div>
<p>Although CAR is primarily a <em>microprudential</em> regulator, it becomes a <em>macroprudential</em> regulator when used in a <span class="key">dynamic / systemic</span> way — e.g. raising required capital across the boom (the countercyclical buffer) so that the same ratio leans against the cycle.</p>`,
              id: `<p>Panel Asia-Pasifik pada slide menunjukkan bahwa <span class="key">jumlah instrumen makroprudensial meningkat tajam setelah Krisis Keuangan Besar</span>, dan bahwa di Asia-Pasifik mayoritas alat yang tersedia adalah instrumen <span class="key">berbasis aset</span> (mengatur terhadap apa bank boleh memberi kredit) ketimbang berbasis modal atau likuiditas. Rasio modal utamanya adalah <span class="key">CAR</span>:</p>
<div class="formula">$$\\text{CAR} = \\frac{\\text{Modal}}{\\text{Aset Tertimbang Menurut Risiko (ATMR)}}\\times 100\\%.$$</div>
<p>Walau CAR pada dasarnya regulator <em>mikroprudensial</em>, ia menjadi regulator <em>makroprudensial</em> bila dipakai secara <span class="key">dinamis / sistemik</span> — mis. menaikkan modal wajib sepanjang boom (buffer countercyclical) agar rasio yang sama melawan siklus.</p>`
            },
            chart: CCYB_CHART
          },
          {
            title: { en: 'Indonesia: the instrument list', id: 'Indonesia: daftar instrumen' },
            html: {
              en: `<p>Bank Indonesia and OJK deploy a full toolkit:</p>
<ul>
<li><span class="key">Capital Adequacy Ratio (CAR)</span> — $\\text{Capital}/\\text{RWA}\\times100\\%$, the baseline solvency regulator.</li>
<li><span class="key">Loan-to-Value (LTV)</span> & <span class="key">Financing-to-Value (FTV)</span> ratios — cap how much can be borrowed against property collateral to control excessive lending and speculative activity.</li>
<li><span class="key">Countercyclical Capital Buffer (CCyB)</span> — requires banks to hold <em>additional</em> capital during economic upswings to mitigate risks in downturns; built in the boom, released in the bust (0–2.5% of RWA).</li>
<li><span class="key">Capital Conservation Buffer (CCB)</span> — a standing top-up (≈2.5% of RWA) above the minimum CAR.</li>
<li><span class="key">Macroprudential Liquidity Buffer (PLM)</span> — banks hold a minimum of liquid securities they can repo with BI for liquidity.</li>
<li><span class="key">Macroprudential Intermediation Ratio (MIR / RIM)</span> — broadens the loan-to-deposit ratio to include securities, keeping intermediation in a healthy range (≈84–94%).</li>
<li><span class="key">Inclusive Financing Ratio (RPIM)</span> — directs lending to support financial inclusion (credit to underserved / MSME sectors).</li>
<li><span class="key">Foreign Exchange Position Limits</span> — manage <em>currency risk</em>; the deck notes BI limited forex purchases from <span class="key">USD 100,000 to USD 50,000</span> per person per month (later lowered to <span class="key">USD 25,000</span>).</li>
</ul>
<p>All of these are signals BI watches as part of its "<span class="key">Policy Mix</span>" — monetary, macroprudential, exchange-rate and payment-system tools working together.</p>`,
              id: `<p>Bank Indonesia dan OJK menggunakan perangkat lengkap:</p>
<ul>
<li><span class="key">Rasio Kecukupan Modal (CAR)</span> — $\\text{Modal}/\\text{ATMR}\\times100\\%$, regulator solvabilitas dasar.</li>
<li><span class="key">Rasio Loan-to-Value (LTV)</span> & <span class="key">Financing-to-Value (FTV)</span> — membatasi seberapa besar pinjaman terhadap agunan properti untuk mengendalikan kredit berlebih dan spekulasi.</li>
<li><span class="key">Countercyclical Capital Buffer (CCyB)</span> — mewajibkan bank menahan modal <em>tambahan</em> saat ekonomi menanjak untuk meredam risiko di masa surut; dibangun saat boom, dilepas saat bust (0–2,5% ATMR).</li>
<li><span class="key">Capital Conservation Buffer (CCB)</span> — tambahan tetap (≈2,5% ATMR) di atas CAR minimum.</li>
<li><span class="key">Penyangga Likuiditas Makroprudensial (PLM)</span> — bank menahan minimum surat berharga likuid yang dapat di-repo-kan ke BI untuk likuiditas.</li>
<li><span class="key">Rasio Intermediasi Makroprudensial (RIM / MIR)</span> — memperluas rasio kredit terhadap simpanan dengan memasukkan surat berharga, menjaga intermediasi di kisaran sehat (≈84–94%).</li>
<li><span class="key">Rasio Pembiayaan Inklusif Makroprudensial (RPIM)</span> — mengarahkan kredit untuk mendukung inklusi keuangan (sektor kurang terlayani / UMKM).</li>
<li><span class="key">Batas Posisi Devisa</span> — mengelola <em>risiko mata uang</em>; slide mencatat BI membatasi pembelian valas dari <span class="key">USD 100.000 menjadi USD 50.000</span> per orang per bulan (kemudian diturunkan ke <span class="key">USD 25.000</span>).</li>
</ul>
<p>Semua ini adalah sinyal yang dipantau BI sebagai bagian dari "<span class="key">Bauran Kebijakan</span>" — alat moneter, makroprudensial, nilai tukar, dan sistem pembayaran yang bekerja bersama.</p>`
            }
          },
          {
            title: { en: 'CAR against credit growth · Beyond Basel · regional reality', id: 'CAR vs pertumbuhan kredit · Beyond Basel · realitas regional' },
            html: {
              en: `<p><span class="key">Bank capital comes at a cost.</span> Higher required capital constrains balance-sheet capacity, suppressing lending to the real economy. Indonesia tipped past that pinch-point around <span class="key">31.79% of GDP (2024)</span> in credit, yet <span class="key">bank credit is dominated by consumption</span> rather than productive investment — so credit growth has not always fed growth. That is why buffers should be calibrated to <span class="key">asset/credit quality</span> (e.g. NPLs), not blunt across the board.</p>
<p><span class="key">Beyond Basel.</span> Indonesia layers extra requirements on top of the global Basel standards: CCyB, CCB, leverage ratio, and a <span class="key">D-SIB surcharge</span> for systemically important banks (≈1–2.5% extra). The deck's comparison of <em>minimum</em> vs <em>actual</em> CAR (early 2026) shows Indonesia maintains one of the highest actual CARs in Southeast Asia (≈25.99% as of Dec 2024; comparable Singapore ≈15–17%, Malaysia ≈18–19%), well above the 8% minimum — a deliberately conservative, "ambitious and bold" stance.</p>
<div class="note">Trade-off to remember: very high CAR buys resilience but can <em>over-restrict</em> lending. The macroprudential art is to lean against the cycle and bad-asset quality without strangling credit to productive sectors.</div>`,
              id: `<p><span class="key">Modal bank ada biayanya.</span> Modal wajib lebih tinggi membatasi kapasitas neraca, menekan penyaluran kredit ke ekonomi riil. Indonesia melewati titik jepit itu sekitar <span class="key">31,79% PDB (2024)</span> dalam kredit, namun <span class="key">kredit bank didominasi konsumsi</span> ketimbang investasi produktif — sehingga pertumbuhan kredit tak selalu mendorong pertumbuhan. Karena itu buffer mesti dikalibrasi ke <span class="key">kualitas aset/kredit</span> (mis. NPL), bukan seragam.</p>
<p><span class="key">Beyond Basel.</span> Indonesia menumpuk persyaratan ekstra di atas standar Basel global: CCyB, CCB, rasio leverage, dan <span class="key">D-SIB surcharge</span> untuk bank sistemik (≈1–2,5% ekstra). Perbandingan CAR <em>minimum</em> vs <em>aktual</em> (awal 2026) pada slide menunjukkan Indonesia mempertahankan salah satu CAR aktual tertinggi di Asia Tenggara (≈25,99% per Des 2024; Singapura ≈15–17%, Malaysia ≈18–19%), jauh di atas minimum 8% — sikap yang sengaja konservatif, "ambisius dan berani".</p>
<div class="note">Trade-off untuk diingat: CAR sangat tinggi membeli ketahanan tetapi bisa <em>terlalu membatasi</em> kredit. Seni makroprudensial adalah melawan siklus dan kualitas aset buruk tanpa mencekik kredit ke sektor produktif.</div>`
            }
          }
        ]
      },

      {
        heading: { en: "OJK's financial-stability indicators", id: 'Indikator stabilitas keuangan OJK' },
        num: '5',
        cards: [
          {
            title: { en: 'General indicators', id: 'Indikator umum' },
            html: {
              en: `<p>OJK monitors financial stability using indicators of <span class="key">capital adequacy, liquidity, asset quality and profitability</span> across banking and non-banking sectors:</p>
<ul>
<li><span class="key">Capital Adequacy Ratio (CAR)</span> — capacity to absorb losses against the regulatory minimum.</li>
<li><span class="key">Non-Performing Loans (NPL)</span> / Non-Performing Financing (NPF) — asset quality: the share of bad loans / defaults.</li>
<li><span class="key">Profitability</span> — Return on Assets (ROA) and Return on Equity (ROE).</li>
<li><span class="key">Liquidity / market-based</span> indicators — short-term funding pressure, spreads, prices.</li>
<li><span class="key">Macroeconomic factors</span> — inflation, exchange rate, GDP growth as fluctuation drivers.</li>
<li><span class="key">Restructuring & credit growth</span> — including the unwinding of COVID-19 credit-restructuring relief.</li>
</ul>
<div class="note">OJK reads the indicators <em>jointly</em> and stress-tests resilience against global commodity-price fluctuations, FX volatility and global policy changes — not one ratio at a time.</div>`,
              id: `<p>OJK memantau stabilitas keuangan dengan indikator <span class="key">kecukupan modal, likuiditas, kualitas aset, dan profitabilitas</span> di sektor perbankan dan non-perbankan:</p>
<ul>
<li><span class="key">Rasio Kecukupan Modal (CAR)</span> — kapasitas menyerap kerugian terhadap minimum regulasi.</li>
<li><span class="key">Kredit Bermasalah (NPL)</span> / Pembiayaan Bermasalah (NPF) — kualitas aset: pangsa kredit macet / gagal bayar.</li>
<li><span class="key">Profitabilitas</span> — Return on Assets (ROA) dan Return on Equity (ROE).</li>
<li><span class="key">Likuiditas / berbasis pasar</span> — tekanan pendanaan jangka pendek, spread, harga.</li>
<li><span class="key">Faktor makroekonomi</span> — inflasi, nilai tukar, pertumbuhan PDB sebagai pemicu fluktuasi.</li>
<li><span class="key">Restrukturisasi & pertumbuhan kredit</span> — termasuk berakhirnya keringanan restrukturisasi COVID-19.</li>
</ul>
<div class="note">OJK membaca indikator secara <em>bersama</em> dan stress-test ketahanan terhadap fluktuasi harga komoditas global, volatilitas valas, dan perubahan kebijakan global — bukan satu rasio per satu.</div>`
            }
          },
          {
            title: { en: 'Bank-specific stability metrics & thresholds', id: 'Metrik & ambang stabilitas khusus bank' },
            html: {
              en: `<p>OJK uses standardised quantitative thresholds to monitor the banking sector's resilience:</p>
<table>
<thead><tr><th>Metric</th><th>What it captures</th><th>Threshold</th></tr></thead>
<tbody>
<tr><td><span class="key">CAR</span> (risk-weighted)</td><td>capital vs RWA</td><td>often &gt; 8%</td></tr>
<tr><td><span class="key">LCR</span> (Liquidity Coverage Ratio)</td><td>30-day liquidity stress</td><td>&ge; 100%</td></tr>
<tr><td><span class="key">LA/NCD</span></td><td>liquidity vs runnable (non-core) funding</td><td>&gt; 50%</td></tr>
<tr><td><span class="key">LA/TPF</span> (third-party funds)</td><td>liquid assets vs deposits</td><td>&gt; 20%</td></tr>
<tr><td><span class="key">NPL</span></td><td>bad-loan share</td><td>&lt; 5%</td></tr>
<tr><td><span class="key">NOP</span> (Net Open Position)</td><td>FX exposure</td><td>&lt; 20%</td></tr>
<tr><td><span class="key">NOM/NIM</span></td><td>core spread (ROA-linked)</td><td>monitored</td></tr>
<tr><td><span class="key">LDR</span></td><td>credit expansion vs deposits</td><td>monitored range</td></tr>
</tbody>
</table>
<p>For <span class="key">non-banks</span> OJK adds: Risk-Based Capital (RBC) for insurers/pension funds (≈120%); a Gearing Ratio for finance companies (max ≈10×); Z-score equity for P2P lending; Cost-to-Income (CTI) & NPL for P2P; plus credit-to-GDP and corporate external-debt ratios watched with BI for systemic risk.</p>
<div class="tip">Memorise the headline cut-offs (CAR&gt;8%, LCR&ge;100%, NPL&lt;5%, NOP&lt;20%, LA/NCD&gt;50%). A favourite UAS prompt: given a bank's ratios, say which thresholds it breaches and what macroprudential concern each one flags.</div>`,
              id: `<p>OJK memakai ambang kuantitatif terstandar untuk memantau ketahanan sektor perbankan:</p>
<table>
<thead><tr><th>Metrik</th><th>Yang ditangkap</th><th>Ambang</th></tr></thead>
<tbody>
<tr><td><span class="key">CAR</span> (tertimbang risiko)</td><td>modal vs ATMR</td><td>kerap &gt; 8%</td></tr>
<tr><td><span class="key">LCR</span> (Liquidity Coverage Ratio)</td><td>stres likuiditas 30 hari</td><td>&ge; 100%</td></tr>
<tr><td><span class="key">LA/NCD</span></td><td>likuiditas vs dana mudah-kabur (non-inti)</td><td>&gt; 50%</td></tr>
<tr><td><span class="key">LA/TPF</span> (dana pihak ketiga)</td><td>aset likuid vs simpanan</td><td>&gt; 20%</td></tr>
<tr><td><span class="key">NPL</span></td><td>pangsa kredit macet</td><td>&lt; 5%</td></tr>
<tr><td><span class="key">NOP</span> (Net Open Position)</td><td>eksposur valas</td><td>&lt; 20%</td></tr>
<tr><td><span class="key">NOM/NIM</span></td><td>spread inti (terkait ROA)</td><td>dipantau</td></tr>
<tr><td><span class="key">LDR</span></td><td>ekspansi kredit vs simpanan</td><td>kisaran dipantau</td></tr>
</tbody>
</table>
<p>Untuk <span class="key">non-bank</span> OJK menambah: Risk-Based Capital (RBC) untuk asuransi/dana pensiun (≈120%); Gearing Ratio perusahaan pembiayaan (maks ≈10×); Z-score ekuitas untuk P2P; CTI & NPL untuk P2P; plus rasio kredit-terhadap-PDB dan utang luar negeri korporasi yang dipantau bersama BI untuk risiko sistemik.</p>
<div class="tip">Hafalkan ambang utamanya (CAR&gt;8%, LCR&ge;100%, NPL&lt;5%, NOP&lt;20%, LA/NCD&gt;50%). Soal UAS favorit: diberi rasio sebuah bank, sebutkan ambang mana yang dilanggar dan kepedulian makroprudensial apa yang ditandai masing-masing.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Monetary Finance (MF) & Modern Monetary Theory (MMT)', id: 'Monetary Finance (MF) & Modern Monetary Theory (MMT)' },
        num: '6',
        cards: [
          {
            title: { en: 'Monetary finance: "helicopter money"', id: 'Monetary finance: "uang helikopter"' },
            html: {
              en: `<p><span class="key">Monetary finance (MF)</span> = "helicopter dropping money from the sky" — the role of monetary policy in creating a <span class="key">permanent increase in the monetary base (RM)</span> that could stimulate AD even in a liquidity trap, when interest rates ≈ 0 and conventional rate cuts are stagnant or declining. The increase could be transferred to households via <span class="key">tax cuts</span> or other forms of government support, including the central bank <em>buying</em> government bonds — <span class="key">debt monetization</span>.</p>
<p>The idea is old: MF was popular since the Great Depression, until the 1970s when US inflation reached double digits and discredited it. <span class="key">Pre-conditions (political-institutional)</span>: it should be decided <em>exclusively and independently</em> by the central bank with the sole goal of ensuring economic stability — this is a <em>difficult standard</em> to achieve and may be a sufficient reason to ban MF altogether. Departures from CB independence can be very dangerous; history is full of examples where the use of MF under inappropriate circumstances had devastating effects on economies and livelihoods.</p>`,
              id: `<p><span class="key">Monetary finance (MF)</span> = "menjatuhkan uang dari langit dengan helikopter" — peran kebijakan moneter dalam menciptakan <span class="key">kenaikan permanen basis moneter (RM)</span> yang dapat menstimulus AD bahkan dalam jebakan likuiditas, saat suku bunga ≈ 0 dan pemangkasan suku bunga konvensional mandek atau menurun. Kenaikan itu dapat ditransfer ke rumah tangga lewat <span class="key">pemotongan pajak</span> atau bentuk dukungan pemerintah lain, termasuk bank sentral <em>membeli</em> obligasi pemerintah — <span class="key">monetisasi utang</span>.</p>
<p>Idenya lama: MF populer sejak Depresi Besar, hingga 1970-an ketika inflasi AS mencapai dua digit dan mendiskreditkannya. <span class="key">Prasyarat (politik-kelembagaan)</span>: harus diputuskan <em>secara eksklusif dan independen</em> oleh bank sentral dengan satu-satunya tujuan menjamin stabilitas ekonomi — standar yang <em>sulit dicapai</em> dan mungkin menjadi alasan cukup untuk melarang MF sama sekali. Penyimpangan dari independensi bank sentral bisa sangat berbahaya; sejarah penuh contoh penggunaan MF dalam keadaan tidak tepat yang berdampak menghancurkan ekonomi dan penghidupan.</p>`
            },
            chart: MMT_CHART
          },
          {
            title: { en: 'MMT: the deficit is not the constraint — inflation is', id: 'MMT: defisit bukan kendala — inflasi yang kendala' },
            html: {
              en: `<p><span class="key">Modern Monetary Theory</span>: a government can print money to pay for spending, so there is "no need to worry about the deficit." Mechanically: the central bank funds the government directly (<span class="key">debt monetization</span>); as long as there is <span class="key">no inflation</span> (idle capacity / a positive output gap), money creation is effectively "free"; and <span class="key">taxes are NOT for revenue</span> but (i) to create demand for the currency and (ii) to control inflation by draining excess demand.</p>
<p>The institutional logic: a government issuing its <em>own</em> fiat currency under a <span class="key">floating exchange rate</span> can never be forced to default on debt in that currency — it can always create the money to pay. So the binding constraint is not <em>financial</em> but <span class="key">real</span> (productive capacity), and hitting it shows up as <span class="key">inflation</span>, not insolvency. The signature policy is a <span class="key">Job Guarantee</span> (employer of last resort) that delivers full employment <em>and</em> a wage anchor.</p>
<div class="note"><span class="key">Functional finance</span> (Lerner): judge a fiscal action by its <em>effect on the economy</em> (full employment + stable prices), not by whether the budget balances. A deficit is "too big" only when it pushes spending past real capacity — see the AD–AS diagram: under slack ΔAD raises output; at $Y_f$ ΔAD raises only the price level.</div>`,
              id: `<p><span class="key">Modern Monetary Theory</span>: pemerintah bisa mencetak uang untuk membiayai belanja, sehingga "tak perlu khawatir defisit." Secara mekanis: bank sentral mendanai pemerintah langsung (<span class="key">monetisasi utang</span>); selama <span class="key">tidak ada inflasi</span> (kapasitas menganggur / output gap positif), penciptaan uang efektif "gratis"; dan <span class="key">pajak BUKAN untuk pendapatan</span> melainkan (i) menciptakan permintaan atas mata uang dan (ii) mengendalikan inflasi dengan menyerap permintaan berlebih.</p>
<p>Logika kelembagaannya: pemerintah yang menerbitkan mata uang fiat <em>sendiri</em> di bawah <span class="key">kurs mengambang</span> tak pernah bisa dipaksa gagal bayar atas utang dalam mata uang itu — ia selalu bisa mencetak uang untuk membayar. Maka kendala yang mengikat bukan <em>finansial</em> melainkan <span class="key">riil</span> (kapasitas produktif), dan mencapainya tampak sebagai <span class="key">inflasi</span>, bukan kebangkrutan. Kebijakan khasnya adalah <span class="key">Jaminan Kerja (Job Guarantee)</span> (employer of last resort) yang memberi lapangan kerja penuh <em>sekaligus</em> jangkar upah.</p>
<div class="note"><span class="key">Functional finance</span> (Lerner): nilai tindakan fiskal dari <em>efeknya pada ekonomi</em> (lapangan kerja penuh + harga stabil), bukan dari apakah anggaran seimbang. Defisit "terlalu besar" hanya bila mendorong belanja melewati kapasitas riil — lihat diagram AD–AS: saat ada slack ΔAD menaikkan output; pada $Y_f$ ΔAD hanya menaikkan tingkat harga.</div>`
            }
          },
          {
            title: { en: 'Critiques of MMT, and MMT vs MF', id: 'Kritik MMT, dan MMT vs MF' },
            html: {
              en: `<p>The deck's critiques of MMT:</p>
<ul>
<li><span class="key">Inflation risk</span> if the economy is near full capacity — the "no inflation" assumption fails exactly when stimulus is most tempting.</li>
<li><span class="key">Currency depreciation & capital flight</span>, especially in emerging markets with <span class="key">FX-denominated debt</span> — money-financed deficits can trigger depreciation and <em>imported</em> inflation long before domestic capacity is exhausted (the currency-instability → inflation channel from the CB-mandate slide).</li>
<li><span class="key">Political-economy risk</span>: it is hard to "switch off" the printing press once started.</li>
<li><span class="key">Loss of central-bank independence</span>.</li>
</ul>
<p><span class="key">MMT vs Monetary Finance.</span> MF is a <em>one-off emergency tool</em> (a liquidity-trap response); MMT is a <em>permanent framework / philosophy</em> of how a sovereign-currency economy works. The two share the mechanics (CB funding the government) but differ in scope and intent.</p>
<div class="tip">For Indonesia: the "no default" point is valid but incomplete. The binding constraints are inflation and the exchange rate, which is why Indonesia pairs fiscal policy with macroprudential and FX-position tools (the Policy Mix) rather than relying on monetary financing.</div>`,
              id: `<p>Kritik MMT pada slide:</p>
<ul>
<li><span class="key">Risiko inflasi</span> bila ekonomi mendekati kapasitas penuh — asumsi "tanpa inflasi" gagal justru saat stimulus paling menggoda.</li>
<li><span class="key">Depresiasi mata uang & capital flight</span>, terutama di pasar berkembang dengan <span class="key">utang valas</span> — defisit yang dibiayai uang dapat memicu depresiasi dan inflasi <em>impor</em> jauh sebelum kapasitas domestik habis (jalur ketidakstabilan mata uang → inflasi dari slide mandat bank sentral).</li>
<li><span class="key">Risiko ekonomi-politik</span>: sulit "mematikan" mesin cetak setelah dimulai.</li>
<li><span class="key">Hilangnya independensi bank sentral</span>.</li>
</ul>
<p><span class="key">MMT vs Monetary Finance.</span> MF adalah <em>alat darurat sekali pakai</em> (respons jebakan likuiditas); MMT adalah <em>kerangka / filosofi permanen</em> tentang cara kerja ekonomi berdaulat mata uang. Keduanya berbagi mekanika (bank sentral mendanai pemerintah) tetapi berbeda cakupan dan niat.</p>
<div class="tip">Untuk Indonesia: poin "tak gagal bayar" valid tetapi tak lengkap. Kendala yang mengikat adalah inflasi dan nilai tukar, itulah mengapa Indonesia memadukan kebijakan fiskal dengan alat makroprudensial dan posisi devisa (Bauran Kebijakan) ketimbang mengandalkan pembiayaan moneter.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'DSGE models (and financial frictions)', id: 'Model DSGE (dan friksi keuangan)' },
        num: '7',
        cards: [
          {
            title: { en: 'What a DSGE model is', id: 'Apa itu model DSGE' },
            html: {
              en: `<p>A <span class="key">DSGE</span> model — <em>Dynamic Stochastic General Equilibrium</em> — is the workhorse of modern central-bank analysis. Unpack the name:</p>
<ul>
<li><span class="key">Dynamic</span>: decisions over time (today vs the future) — consumption-saving, investment.</li>
<li><span class="key">Stochastic</span>: the economy is hit by random <em>shocks</em> (technology, monetary, demand, financial).</li>
<li><span class="key">General Equilibrium</span>: all markets (goods, labour, capital) clear together.</li>
</ul>
<p>It is built on <span class="key">microfoundations</span>: households maximise utility, firms maximise profit — rational, optimising agents. Core agents are <span class="key">households, firms, and the government / central bank</span>. The key equations are the <span class="key">Euler equation</span> (consumption smoothing), the <span class="key">Phillips curve</span> (inflation–output), and the <span class="key">Taylor rule</span> (monetary policy). It is solved for <span class="key">impulse-response functions</span> and used by central banks (BI, Fed, ECB) for forecasting and policy simulation.</p>
<div class="note"><span class="key">Criticisms:</span> the assumed rationality; the representative agent; and — decisively — pre-2008 versions lacked a financial sector and so <em>could not predict the GFC</em>.</div>`,
              id: `<p><span class="key">DSGE</span> — <em>Dynamic Stochastic General Equilibrium</em> — adalah model andalan analisis bank sentral modern. Uraikan namanya:</p>
<ul>
<li><span class="key">Dynamic</span>: keputusan lintas waktu (hari ini vs masa depan) — konsumsi-tabungan, investasi.</li>
<li><span class="key">Stochastic</span>: ekonomi diguncang <em>shock</em> acak (teknologi, moneter, permintaan, keuangan).</li>
<li><span class="key">General Equilibrium</span>: semua pasar (barang, tenaga kerja, modal) bersih serentak.</li>
</ul>
<p>Ia dibangun di atas <span class="key">microfoundations</span>: rumah tangga memaksimalkan utilitas, perusahaan memaksimalkan laba — agen rasional yang mengoptimasi. Agen intinya <span class="key">rumah tangga, perusahaan, dan pemerintah / bank sentral</span>. Persamaan kuncinya adalah <span class="key">persamaan Euler</span> (perataan konsumsi), <span class="key">kurva Phillips</span> (inflasi–output), dan <span class="key">aturan Taylor</span> (kebijakan moneter). Diselesaikan untuk <span class="key">impulse-response functions</span> dan dipakai bank sentral (BI, Fed, ECB) untuk peramalan dan simulasi kebijakan.</p>
<div class="note"><span class="key">Kritik:</span> asumsi rasionalitas; agen representatif; dan — yang menentukan — versi pra-2008 tak punya sektor keuangan sehingga <em>tak bisa memprediksi GFC</em>.</div>`
            }
          },
          {
            title: { en: 'DSGE with financial frictions (updated model)', id: 'DSGE dengan friksi keuangan (model diperbarui)' },
            html: {
              en: `<p>Pre-2008 DSGE treated finance as a <span class="key">"veil"</span> — one risk-free rate, no banks, no defaults — and so failed to anticipate the crisis. The <span class="key">updated model</span> on the deck adds an explicit <span class="key">financial sector</span>:</p>
<ul>
<li><span class="key">Financial accelerator</span> (Bernanke–Gertler–Gilchrist): the external finance premium <em>rises as borrower net worth falls</em>.</li>
<li><span class="key">Collateral constraints</span> (Kiyotaki–Moore): borrowing is limited by collateral value, so falling asset prices tighten credit.</li>
<li>A <span class="key">banking sector</span> with capital / leverage.</li>
</ul>
<p>The result: shocks are <span class="key">amplified and more persistent</span> — procyclicality is now <em>inside</em> the model. Formally the external finance premium is</p>
<div class="formula">$$\\text{borrowing rate} = r_f + s\\!\\left(\\tfrac{N_t}{Q_tK_t}\\right),\\qquad s'<0,$$</div>
<p>so a negative shock → asset prices and net worth $N_t$ fall → premium rises → investment & borrowing fall → output falls → net worth falls further (the amplification loop in the chart). Crucially, <span class="key">macroprudential policy can now be analysed inside the model</span>: capital buffers and LTV limits dampen the amplification by protecting net worth and capping leverage.</p>
<div class="tip">This links the three topics: <span class="key">Macroprudential ↔ DSGE-with-frictions ↔ (fiscal) MMT debate</span>. The common thread (slide 24) is that the <em>financial sector and balance sheets</em> matter for macro outcomes — the pre-2008 separation of "macro" and "finance" is over. The policy implication for Indonesia is a <span class="key">Policy Mix</span> (monetary + macroprudential + exchange-rate + fiscal), not one instrument.</div>`,
              id: `<p>DSGE pra-2008 memperlakukan keuangan sebagai <span class="key">"tabir"</span> — satu suku bunga bebas risiko, tanpa bank, tanpa gagal bayar — sehingga gagal mengantisipasi krisis. <span class="key">Model yang diperbarui</span> pada slide menambah <span class="key">sektor keuangan</span> eksplisit:</p>
<ul>
<li><span class="key">Financial accelerator</span> (Bernanke–Gertler–Gilchrist): external finance premium <em>naik saat kekayaan bersih peminjam turun</em>.</li>
<li><span class="key">Collateral constraints</span> (Kiyotaki–Moore): pinjaman dibatasi nilai agunan, sehingga harga aset turun mengetatkan kredit.</li>
<li><span class="key">Sektor perbankan</span> dengan modal / leverage.</li>
</ul>
<p>Hasilnya: shock <span class="key">diperbesar dan lebih persisten</span> — prosiklikalitas kini <em>di dalam</em> model. Secara formal external finance premium adalah</p>
<div class="formula">$$\\text{suku bunga pinjaman} = r_f + s\\!\\left(\\tfrac{N_t}{Q_tK_t}\\right),\\qquad s'<0,$$</div>
<p>sehingga shock negatif → harga aset dan kekayaan bersih $N_t$ turun → premium naik → investasi & pinjaman turun → output turun → kekayaan bersih turun lebih jauh (loop amplifikasi pada grafik). Penting: <span class="key">kebijakan makroprudensial kini bisa dianalisis di dalam model</span>: buffer modal dan batas LTV meredam amplifikasi dengan melindungi kekayaan bersih dan membatasi leverage.</p>
<div class="tip">Ini menautkan ketiga topik: <span class="key">Makroprudensial ↔ DSGE-dengan-friksi ↔ debat (fiskal) MMT</span>. Benang merahnya (slide 24) adalah bahwa <em>sektor keuangan dan neraca</em> penting bagi hasil makro — pemisahan "makro" dan "keuangan" pra-2008 sudah berakhir. Implikasi kebijakan untuk Indonesia adalah <span class="key">Bauran Kebijakan</span> (moneter + makroprudensial + nilai tukar + fiskal), bukan satu instrumen.</div>`
            },
            chart: DSGE_CHART
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Macroprudential ratios', id: 'Rasio makroprudensial' },
        num: 'F1',
        cards: [
          {
            title: { en: 'Capital, liquidity & exposure ratios', id: 'Rasio modal, likuiditas & eksposur' },
            html: {
              en: `<div class="formula">Capital Adequacy: $\\;\\text{CAR} = \\dfrac{\\text{Capital}}{\\text{RWA}}\\times 100\\% \\;(>8\\%)$</div>
<div class="formula">Loan-to-Value: $\\;\\text{LTV} = \\dfrac{\\text{Loan}}{\\text{Collateral value}}\\times100\\%$ &nbsp;(FTV = sharia analogue)</div>
<div class="formula">Balance-sheet identity: $\\;\\text{Assets} = \\text{Liabilities} + \\text{Equity}$</div>
<div class="formula">CCyB add-on: $\\;0\\% \\le \\text{CCyB} \\le 2.5\\%$ of RWA, rising with the credit-to-GDP gap</div>
<p>Liquidity: LCR $\\ge100\\%$; LA/NCD $>50\\%$; LA/TPF $>20\\%$. Asset quality: NPL $<5\\%$. FX exposure: NOP $<20\\%$. D-SIB surcharge ≈1–2.5% extra for systemic banks.</p>`,
              id: `<div class="formula">Kecukupan Modal: $\\;\\text{CAR} = \\dfrac{\\text{Modal}}{\\text{ATMR}}\\times 100\\% \\;(>8\\%)$</div>
<div class="formula">Loan-to-Value: $\\;\\text{LTV} = \\dfrac{\\text{Pinjaman}}{\\text{Nilai agunan}}\\times100\\%$ &nbsp;(FTV = padanan syariah)</div>
<div class="formula">Identitas neraca: $\\;\\text{Aset} = \\text{Kewajiban} + \\text{Ekuitas}$</div>
<div class="formula">Tambahan CCyB: $\\;0\\% \\le \\text{CCyB} \\le 2.5\\%$ ATMR, naik seiring gap kredit-terhadap-PDB</div>
<p>Likuiditas: LCR $\\ge100\\%$; LA/NCD $>50\\%$; LA/TPF $>20\\%$. Kualitas aset: NPL $<5\\%$. Eksposur valas: NOP $<20\\%$. D-SIB surcharge ≈1–2,5% ekstra untuk bank sistemik.</p>`
            }
          },
          {
            title: { en: 'Profitability & intermediation', id: 'Profitabilitas & intermediasi' },
            html: {
              en: `<div class="formula">$\\;\\text{ROA} = \\dfrac{\\text{Net income}}{\\text{Total assets}}, \\qquad \\text{ROE} = \\dfrac{\\text{Net income}}{\\text{Equity}}$</div>
<div class="formula">$\\;\\text{LDR} = \\dfrac{\\text{Loans}}{\\text{Deposits}}, \\qquad \\text{MIR (RIM)} = \\dfrac{\\text{Loans} + \\text{Securities held}}{\\text{Deposits} + \\text{Securities issued}}\\;(\\approx 84\\text{–}94\\%)$</div>
<p>RPIM (inclusive financing) sets a minimum share of credit to underserved/MSME sectors. NOM/NIM measures the core spread between lending and funding rates.</p>`,
              id: `<div class="formula">$\\;\\text{ROA} = \\dfrac{\\text{Laba bersih}}{\\text{Total aset}}, \\qquad \\text{ROE} = \\dfrac{\\text{Laba bersih}}{\\text{Ekuitas}}$</div>
<div class="formula">$\\;\\text{LDR} = \\dfrac{\\text{Kredit}}{\\text{Simpanan}}, \\qquad \\text{RIM (MIR)} = \\dfrac{\\text{Kredit} + \\text{Surat berharga dimiliki}}{\\text{Simpanan} + \\text{Surat berharga diterbitkan}}\\;(\\approx 84\\text{–}94\\%)$</div>
<p>RPIM (pembiayaan inklusif) menetapkan pangsa minimum kredit ke sektor kurang terlayani/UMKM. NOM/NIM mengukur spread inti antara suku bunga kredit dan pendanaan.</p>`
            }
          }
        ]
      },
      {
        heading: { en: 'MMT & DSGE relations', id: 'Relasi MMT & DSGE' },
        num: 'F2',
        cards: [
          {
            title: { en: 'MMT accounting & functional finance', id: 'Akuntansi MMT & functional finance' },
            html: {
              en: `<div class="formula">Sectoral balances: $\\;(S - I) + (T - G) + (M - X) = 0$</div>
<p>The private surplus $(S-I)$, the government surplus $(T-G)$ and the external surplus must net to zero. MMT reads this as: a government deficit $(G>T)$ <em>is</em> a private-sector surplus (net financial assets), absent an offsetting external deficit.</p>
<div class="formula">Functional-finance rule: choose $G,T$ so the economy is at full employment <em>and</em> stable prices — not so that $G=T$.</div>
<p>Monetary finance: a permanent rise in the base $\\Delta RM>0$ transferred via tax cuts / bond purchases (debt monetization), justified only in a liquidity trap.</p>`,
              id: `<div class="formula">Saldo sektoral: $\\;(S - I) + (T - G) + (M - X) = 0$</div>
<p>Surplus swasta $(S-I)$, surplus pemerintah $(T-G)$, dan surplus eksternal harus berjumlah nol. MMT membacanya: defisit pemerintah $(G>T)$ <em>adalah</em> surplus sektor swasta (aset finansial bersih), kecuali ada defisit eksternal yang mengimbangi.</p>
<div class="formula">Kaidah functional finance: pilih $G,T$ agar ekonomi pada lapangan kerja penuh <em>dan</em> harga stabil — bukan agar $G=T$.</div>
<p>Monetary finance: kenaikan permanen basis $\\Delta RM>0$ ditransfer lewat pemotongan pajak / pembelian obligasi (monetisasi utang), dibenarkan hanya dalam jebakan likuiditas.</p>`
            }
          },
          {
            title: { en: 'DSGE building blocks', id: 'Blok pembangun DSGE' },
            html: {
              en: `<div class="formula">Euler equation (consumption): $\\;\\frac{1}{C_t} = \\beta\\,\\mathbb{E}_t\\!\\left[\\frac{1+r_t}{C_{t+1}}\\right]$</div>
<div class="formula">New-Keynesian Phillips curve: $\\;\\pi_t = \\beta\\,\\mathbb{E}_t\\pi_{t+1} + \\kappa\\,\\tilde{y}_t$</div>
<div class="formula">Taylor rule: $\\;i_t = r^* + \\phi_\\pi\\pi_t + \\phi_y\\,\\tilde{y}_t$</div>
<div class="formula">External finance premium (accelerator): $\\;s_t = s\\!\\left(\\tfrac{N_t}{Q_tK_t}\\right),\\; s'<0$</div>
<div class="formula">Collateral constraint (Kiyotaki–Moore): $\\;B_t \\le \\theta\\,\\mathbb{E}_t\\!\\left[Q_{t+1}K_t\\right]$</div>
<p>$\\beta$ discount factor, $\\kappa$ slope of inflation in the output gap $\\tilde y$, $\\phi_\\pi,\\phi_y$ policy responses, $N_t$ net worth, $Q_tK_t$ asset value, $\\theta$ the loan-to-value cap on collateralised borrowing $B_t$.</p>`,
              id: `<div class="formula">Persamaan Euler (konsumsi): $\\;\\frac{1}{C_t} = \\beta\\,\\mathbb{E}_t\\!\\left[\\frac{1+r_t}{C_{t+1}}\\right]$</div>
<div class="formula">Kurva Phillips New-Keynesian: $\\;\\pi_t = \\beta\\,\\mathbb{E}_t\\pi_{t+1} + \\kappa\\,\\tilde{y}_t$</div>
<div class="formula">Aturan Taylor: $\\;i_t = r^* + \\phi_\\pi\\pi_t + \\phi_y\\,\\tilde{y}_t$</div>
<div class="formula">External finance premium (akselerator): $\\;s_t = s\\!\\left(\\tfrac{N_t}{Q_tK_t}\\right),\\; s'<0$</div>
<div class="formula">Kendala agunan (Kiyotaki–Moore): $\\;B_t \\le \\theta\\,\\mathbb{E}_t\\!\\left[Q_{t+1}K_t\\right]$</div>
<p>$\\beta$ faktor diskonto, $\\kappa$ kemiringan inflasi terhadap output gap $\\tilde y$, $\\phi_\\pi,\\phi_y$ respons kebijakan, $N_t$ kekayaan bersih, $Q_tK_t$ nilai aset, $\\theta$ batas loan-to-value atas pinjaman beragunan $B_t$.</p>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Diagrams to memorise', id: 'Diagram untuk dihafal' },
        num: 'G',
        cards: [
          {
            title: { en: '1. Micro inside the systemic envelope', id: '1. Mikro di dalam selubung sistemik' },
            html: {
              en: '<p>Microprudential covers each firm in isolation (partial equilibrium); macroprudential covers system-wide risk (general equilibrium). Use it to explain the fallacy of composition: safe banks ≠ safe system.</p>',
              id: '<p>Mikroprudensial meliputi tiap firma terisolasi (partial equilibrium); makroprudensial meliputi risiko sistem-luas (general equilibrium). Pakai untuk menjelaskan fallacy of composition: bank aman ≠ sistem aman.</p>'
            },
            chart: SCOPE_CHART
          },
          {
            title: { en: "2. Banks' balance-sheet identity", id: '2. Identitas neraca bank' },
            html: {
              en: '<p>Assets = Liabilities + Equity. The core/non-core split and the sovereign-bank nexus on the securities line are the macroprudential signals. Draw when asked how a shock propagates through the balance sheet.</p>',
              id: '<p>Aset = Kewajiban + Ekuitas. Pemisahan inti/non-inti dan sovereign-bank nexus pada baris surat berharga adalah sinyal makroprudensial. Gambar bila ditanya bagaimana shock merambat lewat neraca.</p>'
            },
            chart: BS_CHART
          },
          {
            title: { en: '3. CCyB vs the credit gap', id: '3. CCyB vs gap kredit' },
            html: {
              en: '<p>The countercyclical buffer rises with the credit-to-GDP gap (build in the boom, release in the bust), capped at 2.5% of RWA. Shows how a static CAR is made dynamic/macroprudential.</p>',
              id: '<p>Buffer countercyclical naik seiring gap kredit-terhadap-PDB (bangun saat boom, lepas saat bust), dibatasi 2,5% ATMR. Menunjukkan bagaimana CAR statis dijadikan dinamis/makroprudensial.</p>'
            },
            chart: CCYB_CHART
          },
          {
            title: { en: '4. Procyclicality / Taylor gap', id: '4. Prosiklikalitas / gap Taylor' },
            html: {
              en: '<p>Actual policy rate vs the mean Taylor benchmark (BIS), for Global and Emerging Market rates. A persistent below-benchmark gap = "too low for too long" = procyclical fuel for leverage. Motivates the Korean levy on non-core funding.</p>',
              id: '<p>Suku bunga kebijakan aktual vs patokan mean Taylor (BIS), untuk suku bunga Global dan Pasar Berkembang. Gap di bawah patokan yang persisten = "terlalu rendah terlalu lama" = bahan bakar prosiklikal untuk leverage. Memotivasi levy Korea atas pendanaan non-inti.</p>'
            },
            chart: PROCYCL_CHART
          },
          {
            title: { en: '5. MMT / MF — AD–AS with money-financed spending', id: '5. MMT / MF — AD–AS dengan belanja berbiaya uang' },
            html: {
              en: '<p>Money-financed spending shifts AD right. While an output gap exists (slack) the flat segment of AS means prices stay flat and only output rises; near full employment $Y_f$ the AS curve turns vertical, so further ΔAD is pure inflation. The constraint is real capacity, not the budget.</p>',
              id: '<p>Belanja berbiaya uang menggeser AD ke kanan. Selama ada output gap (slack), segmen datar AS membuat harga tetap dan hanya output naik; mendekati lapangan kerja penuh $Y_f$ kurva AS menjadi vertikal, sehingga ΔAD lanjutan murni inflasi. Kendalanya kapasitas riil, bukan anggaran.</p>'
            },
            chart: MMT_CHART
          },
          {
            title: { en: '6. DSGE financial accelerator', id: '6. Financial accelerator DSGE' },
            html: {
              en: '<p>Impulse responses of output to the same shock: the version with financial frictions (rising external-finance premium as net worth falls, plus Kiyotaki–Moore collateral constraints) is deeper and more persistent than the frictionless benchmark.</p>',
              id: '<p>Impulse response output terhadap shock yang sama: versi dengan friksi keuangan (premium pembiayaan eksternal naik saat kekayaan bersih turun, plus kendala agunan Kiyotaki–Moore) lebih dalam dan lebih persisten daripada patokan tanpa friksi.</p>'
            },
            chart: DSGE_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Explain the "fallacy of composition" that justifies macroprudential (as opposed to microprudential) policy.',
             id: 'Jelaskan "fallacy of composition" yang membenarkan kebijakan makroprudensial (bukan mikroprudensial).' },
        answer: [
          { en: 'Microprudential supervision ensures each bank is individually sound (enough capital/liquidity for its own risks) — a partial-equilibrium view that takes the rest of the system as given.',
            id: 'Pengawasan mikroprudensial memastikan tiap bank sehat secara individu (cukup modal/likuiditas untuk risikonya sendiri) — pandangan partial-equilibrium yang menganggap sisa sistem sebagai given.' },
          { en: 'But if every bank reacts to stress the same way (e.g. all deleverage and sell assets at once), asset prices collapse and the individually-prudent action makes the system as a whole less safe. The sum of safe banks is not a safe system.',
            id: 'Tetapi bila tiap bank merespons tekanan dengan cara sama (mis. semua deleverage dan menjual aset serentak), harga aset anjlok dan tindakan yang prudent secara individu membuat sistem secara keseluruhan kurang aman. Jumlah bank aman bukanlah sistem yang aman.' },
          { en: 'Macroprudential policy takes the general-equilibrium view: it targets system-wide externalities (fire-sales, common exposures, contagion, procyclicality) that no single bank internalises.',
            id: 'Kebijakan makroprudensial mengambil pandangan general-equilibrium: menargetkan eksternalitas sistem-luas (fire-sale, eksposur bersama, contagion, prosiklikalitas) yang tak diinternalisasi satu bank pun.' }
        ],
        tip: { en: 'Keyword pair for the exam: micro = partial equilibrium / each firm; macro = general equilibrium / the system.',
               id: 'Pasangan kata kunci ujian: mikro = partial equilibrium / tiap firma; makro = general equilibrium / sistem.' }
      },
      {
        type: 'quant',
        q: { en: 'A bank has capital of Rp 12 trn and risk-weighted assets of Rp 120 trn. Compute its CAR and say whether it meets the 8% minimum. If RWA grows 25% with capital unchanged, what is the new CAR?',
             id: 'Sebuah bank punya modal Rp 12 triliun dan ATMR Rp 120 triliun. Hitung CAR-nya dan nyatakan apakah memenuhi minimum 8%. Bila ATMR tumbuh 25% dengan modal tetap, berapa CAR baru?' },
        answer: [
          { en: 'CAR = Capital / RWA × 100% = 12 / 120 × 100% = 10%. Since 10% > 8%, the bank meets the minimum (with a 2pp buffer).',
            id: 'CAR = Modal / ATMR × 100% = 12 / 120 × 100% = 10%. Karena 10% > 8%, bank memenuhi minimum (dengan buffer 2pp).' },
          { en: 'New RWA = 120 × 1.25 = 150 trn. New CAR = 12 / 150 × 100% = 8%. The bank is now exactly at the floor.',
            id: 'ATMR baru = 120 × 1,25 = 150 triliun. CAR baru = 12 / 150 × 100% = 8%. Bank kini tepat di batas bawah.' },
          { en: 'Lesson: rapid credit growth (boom) mechanically erodes CAR — which is why the countercyclical buffer forces extra capital in exactly such upswings, turning a static ratio into a macroprudential lever.',
            id: 'Pelajaran: pertumbuhan kredit cepat (boom) secara mekanis mengikis CAR — itulah mengapa countercyclical buffer memaksa modal ekstra justru saat menanjak, mengubah rasio statis menjadi tuas makroprudensial.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'Korea introduced a macroprudential levy in 2010. What did it tax, and how does it reduce procyclicality? Tie it to the bank balance sheet.',
             id: 'Korea memperkenalkan levy makroprudensial pada 2010. Apa yang dipajaki, dan bagaimana ia mengurangi prosiklikalitas? Kaitkan dengan neraca bank.' },
        answer: [
          { en: 'The levy taxed banks’ non-core (especially short-term foreign-currency) liabilities — the wholesale/foreign funding on the liability side of the balance sheet, as opposed to sticky core retail deposits.',
            id: 'Levy memajaki kewajiban non-inti bank (terutama valas jangka pendek) — pendanaan wholesale/asing di sisi kewajiban neraca, berbeda dari simpanan inti ritel yang lengket.' },
          { en: 'Non-core funding is exactly the procyclical part: it surges in booms (cheap, abundant) and flees in busts, amplifying the cycle. Taxing it makes runnable funding more expensive in good times, discouraging the leverage build-up before a crisis rather than cleaning up after.',
            id: 'Pendanaan non-inti adalah persis bagian yang prosiklikal: melonjak saat boom (murah, melimpah) dan kabur saat bust, memperbesar siklus. Memajakinya membuat pendanaan mudah-kabur lebih mahal di masa baik, menahan penumpukan leverage sebelum krisis ketimbang membersihkan sesudahnya.' },
          { en: 'It targets the same vulnerability the Taylor-rule gap reveals (rates "too low for too long" feeding leverage) — a preventive, price-based macroprudential tool.',
            id: 'Ia menargetkan kerapuhan yang sama yang diungkap gap Taylor (suku bunga "terlalu rendah terlalu lama" memberi makan leverage) — alat makroprudensial preventif berbasis harga.' }
        ]
      },
      {
        type: 'scenario',
        q: { en: 'An MMT advocate argues "Indonesia can never run out of rupiah, so the budget deficit is not a real constraint." Evaluate this claim for an emerging market, and distinguish MMT from Monetary Finance.',
             id: 'Seorang pendukung MMT berargumen "Indonesia tak mungkin kehabisan rupiah, jadi defisit anggaran bukan kendala riil." Evaluasi klaim ini untuk pasar berkembang, dan bedakan MMT dari Monetary Finance.' },
        answer: [
          { en: 'The narrow MMT claim is technically correct for debt in the country’s own currency under a float: a currency-issuer can always create rupiah to service rupiah debt, so involuntary default is impossible. The true ceiling is real-resource capacity, signalled by inflation (the vertical AS at Yf).',
            id: 'Klaim sempit MMT secara teknis benar untuk utang dalam mata uang sendiri di bawah kurs mengambang: penerbit mata uang selalu bisa mencetak rupiah untuk membayar utang rupiah, sehingga gagal bayar paksa mustahil. Plafon sejatinya kapasitas sumber daya riil, ditandai inflasi (AS vertikal pada Yf).' },
          { en: 'But for an emerging market the external constraint bites first. Indonesia has foreign-currency debt and is import-dependent; money-financed deficits can trigger depreciation, capital flight and imported inflation well before domestic capacity is exhausted — exactly the currency-instability → inflation channel in the CB-mandate slide.',
            id: 'Namun bagi pasar berkembang kendala eksternal menggigit lebih dulu. Indonesia punya utang valas dan bergantung impor; defisit yang dibiayai uang dapat memicu depresiasi, capital flight, dan inflasi impor jauh sebelum kapasitas domestik habis — persis jalur ketidakstabilan mata uang → inflasi pada slide mandat bank sentral.' },
          { en: 'MMT vs MF: Monetary Finance is a one-off emergency tool (a liquidity-trap response); MMT is a permanent framework/philosophy. Conclusion: the "no-default" point is valid but incomplete — the binding constraints are inflation and the exchange rate, so Indonesia uses a Policy Mix (monetary + macroprudential + FX + fiscal) rather than monetary financing.',
            id: 'MMT vs MF: Monetary Finance alat darurat sekali pakai (respons jebakan likuiditas); MMT kerangka/filosofi permanen. Kesimpulan: poin "tak gagal bayar" valid tetapi tak lengkap — kendala yang mengikat adalah inflasi dan nilai tukar, sehingga Indonesia memakai Bauran Kebijakan (moneter + makroprudensial + valas + fiskal) ketimbang pembiayaan moneter.' }
        ],
        tip: { en: 'Strong essays state the valid core of MMT first, then qualify it with the open-economy / FX-debt caveat, and end with the policy-mix implication.',
               id: 'Esai kuat menyatakan inti MMT yang valid dulu, lalu mengkualifikasi dengan catatan ekonomi terbuka / utang valas, dan ditutup dengan implikasi bauran kebijakan.' }
      },
      {
        type: 'concept',
        q: { en: 'Why does a DSGE model with financial frictions (financial accelerator + collateral constraints) produce a deeper, more persistent recession than a frictionless DSGE after the same shock? Why did this matter in 2008?',
             id: 'Mengapa model DSGE dengan friksi keuangan (financial accelerator + kendala agunan) menghasilkan resesi yang lebih dalam dan persisten dibanding DSGE tanpa friksi setelah shock yang sama? Mengapa ini penting pada 2008?' },
        answer: [
          { en: 'In a frictionless DSGE everyone borrows/lends at one risk-free rate, so finance is a "veil" — a negative shock hits output once and decays. Pre-2008 DSGE had no financial sector and so could not anticipate the GFC.',
            id: 'Dalam DSGE tanpa friksi semua pinjam/meminjam pada satu suku bunga bebas risiko, sehingga keuangan hanya "tabir" — shock negatif memukul output sekali lalu mereda. DSGE pra-2008 tak punya sektor keuangan sehingga tak bisa mengantisipasi GFC.' },
          { en: 'With frictions, the external finance premium rises as borrower net worth falls (Bernanke–Gertler–Gilchrist) and borrowing is capped by collateral value (Kiyotaki–Moore). A shock lowers asset prices and net worth → premium up & collateral down → investment/borrowing fall → output falls → net worth falls further.',
            id: 'Dengan friksi, external finance premium naik saat kekayaan bersih turun (Bernanke–Gertler–Gilchrist) dan pinjaman dibatasi nilai agunan (Kiyotaki–Moore). Shock menurunkan harga aset dan kekayaan bersih → premium naik & agunan turun → investasi/pinjaman turun → output turun → kekayaan bersih turun lebih jauh.' },
          { en: 'This feedback loop is the financial accelerator: it amplifies and prolongs the downturn. It is the formal model of procyclicality and the reason macroprudential policy — which protects net worth and limits leverage (CCyB, LTV) — now sits inside the macro model.',
            id: 'Loop umpan-balik ini adalah financial accelerator: memperbesar dan memperpanjang kemerosotan. Inilah model formal prosiklikalitas dan alasan kebijakan makroprudensial — yang melindungi kekayaan bersih dan membatasi leverage (CCyB, LTV) — kini berada di dalam model makro.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'Indonesia maintains an actual CAR near 26% — far above the 8% Basel minimum. Using the deck, give one benefit and one cost of such a conservative stance, and the macroprudential principle that resolves the tension.',
             id: 'Indonesia mempertahankan CAR aktual sekitar 26% — jauh di atas minimum Basel 8%. Dengan slide, beri satu manfaat dan satu biaya sikap konservatif ini, dan prinsip makroprudensial yang menyelesaikan ketegangannya.' },
        answer: [
          { en: 'Benefit: a very high CAR gives strong loss-absorbing capacity and resilience, so Indonesian banks can withstand shocks (NPL spikes, FX volatility) without a public bailout — one of the highest actual CARs in Southeast Asia.',
            id: 'Manfaat: CAR sangat tinggi memberi kapasitas penyerap kerugian dan ketahanan kuat, sehingga bank Indonesia tahan terhadap shock (lonjakan NPL, volatilitas valas) tanpa dana talangan publik — salah satu CAR aktual tertinggi di Asia Tenggara.' },
          { en: 'Cost: bank capital comes at a cost — high required capital constrains balance-sheet capacity and suppresses lending to the real economy, and Indonesian credit is already consumption-dominated rather than feeding productive investment.',
            id: 'Biaya: modal bank ada biayanya — modal wajib tinggi membatasi kapasitas neraca dan menekan kredit ke ekonomi riil, dan kredit Indonesia sudah didominasi konsumsi alih-alih membiayai investasi produktif.' },
          { en: 'Resolution: calibrate buffers to the cycle and to asset/credit quality (CCyB built in booms and released in busts; D-SIB surcharges on systemic banks; weight by NPLs) so capital leans against systemic risk without strangling productive credit.',
            id: 'Penyelesaian: kalibrasi buffer ke siklus dan kualitas aset/kredit (CCyB dibangun saat boom dan dilepas saat bust; D-SIB surcharge untuk bank sistemik; bobot berdasar NPL) agar modal melawan risiko sistemik tanpa mencekik kredit produktif.' }
        ]
      }
    ]
  };
})();
