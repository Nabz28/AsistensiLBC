/* ============================================================================
   MAKRO · Week 10 — Role of Expectations: Labour Market & the Supply-Side Model
   Bilingual (EN + ID). Registers itself on window.MAKRO_WEEKS.w10.
   Source: Prof. Iwan Azis, Spring 2026 — "Week 10: Role of Expectation —
   Labor Market & Supply-Side Model" (35 slides). Three blocks:
     A. Expectations, Credibility & Unemployment (expectations-augmented PC,
        evolving Phillips curve, stablecoin expectations, market vs macro mood).
     B. Labour Market Mismatch & Productivity (Indonesian LFS data, mismatch
        types, the Beveridge curve + matching function, EM mismatch, Indonesia's
        structural mismatch & dismal productivity trend, Beveridge cases:
        Europe, US, Korea, Indonesia).
     C. Supply-Demand Model with Financial Frictions (why a demand-only model is
        incomplete, supply-side production function, Okun's law, the SDM-FF
        macro-econometric model, baseline fit).
   Maps to the MAKRO UAS half (Week 10).

   Chart geometry used below (chosen so the economics is correct by construction):
     • Beveridge curve: downward-sloping convex V-U locus; outward shift = worse
       matching (mismatch); movements along = cyclical.
     • Phillips curve: short-run downward PC that shifts up as expected inflation
       rises; long-run vertical at the natural rate u*.
     • Okun's law: negative line, Δu against output growth g, x-intercept at the
       ~2% "keep-unemployment-constant" growth rate.
     • Production function PF(L): concave, output rising in labour with the GAP =
       PF-potential minus AD-generated output.
   ============================================================================ */
(function () {
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';
  var SHIFT = 'rgba(192,57,43,.14)';
  var GAINF = 'rgba(21,128,61,.14)';

  /* ---- Chart 1: Expectations-augmented Phillips curve ----------------------- */
  var PHILLIPS_CHART = { panels: [{
    title: 'Expectations-augmented Phillips curve: SR trade-off, LR vertical at u*',
    w: 470, h: 330,
    x: { min: 0, max: 10, label: 'Unemployment rate u (%)' },
    y: { min: 0, max: 10, label: 'Inflation π (%)' },
    curves: [
      { id: 'SP0', kind: 'line', p1: [1, 8], p2: [9, 1.5], color: TEAL, label: 'SRPC (πᵉ = 2%)' },
      { id: 'SP1', kind: 'line', p1: [1, 10], p2: [9, 3.5], color: RED, label: "SRPC' (πᵉ = 4%)", dash: true },
      { id: 'LRPC', kind: 'vline', x: 5, color: LINE, label: 'LRPC at u*' }
    ],
    points: [
      { on: ['SP0', 'LRPC'], dot: true, guideY: 'π = πᵉ = 2', label: 'A' },
      { on: ['SP1', 'LRPC'], dot: true, guideY: 'π = πᵉ = 4', label: 'B' }
    ],
    shifts: [{ from: 'SP0', to: 'SP1' }],
    notes: [
      { x: 7.7, y: 8.7, text: 'πᵉ↑ ⇒ whole PC shifts up', color: '#777', anchor: 'middle', size: 10 },
      { x: 5.15, y: 0.6, text: 'natural rate u*', color: LINE, anchor: 'start', size: 10 }
    ]
  }] };

  /* ---- Chart 2: The Beveridge curve (vacancies vs unemployment) ------------- */
  var BEVERIDGE_CHART = { panels: [{
    title: 'Beveridge curve: vacancy rate v vs unemployment rate u',
    w: 470, h: 330,
    x: { min: 0, max: 12, label: 'Unemployment rate u (%)' },
    y: { min: 0, max: 8, label: 'Vacancy / job-openings rate v (%)' },
    curves: [
      { id: 'BC0', kind: 'path', pts: [[1.5, 7], [2.2, 5], [3.2, 3.4], [5, 2.3], [8, 1.6], [11, 1.2]], color: TEAL, smooth: true, label: 'BC (given matching)' },
      { id: 'BC1', kind: 'path', pts: [[3, 7], [4, 5], [5.2, 3.5], [7, 2.5], [10, 1.9], [11.5, 1.6]], color: RED, smooth: true, dash: true, label: "BC' (more mismatch)" }
    ],
    points: [
      { at: [3.2, 3.4], dot: true, label: 'tight (low u, high v)' },
      { at: [8, 1.6], dot: true, label: 'slack (high u, low v)' }
    ],
    notes: [
      { x: 8.8, y: 6.2, text: 'outward shift = worse matching', color: RED, anchor: 'middle', size: 10 },
      { x: 4.5, y: 6.6, text: 'along curve = cyclical', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 3: Okun's law (Δu vs output growth) ---------------------------- */
  var OKUN_CHART = { panels: [{
    title: "Okun's law: change in unemployment vs output growth",
    w: 470, h: 320,
    x: { min: 0, max: 6, label: 'Output growth g (%)' },
    y: { min: -2, max: 2, label: 'Δ unemployment (pp)' },
    curves: [
      { id: 'OK', kind: 'line', p1: [0, 1], p2: [6, -2], color: RED, label: 'Δu = a − b·g' },
      { id: 'zero', kind: 'hline', y: 0, color: '#bbb' }
    ],
    points: [
      { on: ['OK', 'zero'], dot: true, guideX: 'g₀ ≈ 2%' }
    ],
    notes: [
      { x: 4.6, y: 0.9, text: 'high growth ⇒ u falls', color: '#777', anchor: 'middle', size: 10 },
      { x: 1.5, y: -1.5, text: 'need g₀ to hold u steady', color: LINE, anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 4: Supply-side production function & the GAP ------------------- */
  var PF_CHART = { panels: [{
    title: 'Production function PF(L) and the output GAP = potential − AD output',
    w: 470, h: 330,
    x: { min: 0, max: 10, label: 'Labour / capacity input L' },
    y: { min: 0, max: 10, label: 'Output Y' },
    curves: [
      { id: 'PF', kind: 'path', pts: [[0, 0], [2, 3], [4, 5.2], [6, 6.8], [8, 7.9], [10, 8.6]], color: TEAL, smooth: true, label: 'PF (potential, supply side)' },
      { id: 'POT', kind: 'hline', y: 7.9, color: GREEN, label: 'Y* potential' },
      { id: 'AD', kind: 'hline', y: 6.0, color: RED, label: 'Y from AD (demand)' },
      { id: 'Lstar', kind: 'vline', x: 8, color: '#bbb' }
    ],
    areas: [
      { pts: [[0, 6.0], [0, 7.9], [8, 7.9], [8, 6.0]], fill: GAINF, label: 'GAP' }
    ],
    notes: [
      { x: 5, y: 9.3, text: 'GAP = PF-output − AD-output', color: GREEN, anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 5: Indonesia's Beveridge curve (qualitative, BPS Sakernas) ----- */
  var BEVERIDGE_ID_CHART = { panels: [{
    title: "Indonesia's Beveridge curve — outward/structural shift (qualitative)",
    w: 470, h: 320,
    x: { min: 0, max: 10, label: 'Unemployment rate u (%)' },
    y: { min: 0, max: 8, label: 'Implied vacancy intensity v' },
    curves: [
      { id: 'IDold', kind: 'path', pts: [[3, 6.4], [4, 4.6], [5.2, 3.2], [6.5, 2.4], [8, 1.9]], color: '#9aa', smooth: true, label: 'pre-shift' },
      { id: 'IDnew', kind: 'path', pts: [[4.2, 6.6], [5.4, 4.8], [6.6, 3.4], [7.8, 2.6], [9, 2.1]], color: RED, smooth: true, label: 'shifted out' }
    ],
    points: [
      { at: [5.2, 3.2], dot: true, label: 'curve moved out & right' }
    ],
    notes: [
      { x: 6.5, y: 6.4, text: 'structural, not just cyclical', color: RED, anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 6: SDM-FF schematic — financial frictions wedge ---------------- */
  var FF_CHART = { panels: [{
    title: 'Financial frictions: a wedge between supply (S) and demand (D)',
    w: 470, h: 330,
    x: { min: 0, max: 10, label: 'Quantity (credit / capital flows)' },
    y: { min: 0, max: 10, label: 'Cost of funds / rate' },
    curves: [
      { id: 'S', kind: 'line', p1: [1, 2], p2: [9, 9], color: TEAL, label: 'Supply of funds' },
      { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 2], color: RED, label: 'Demand (investment)' },
      { id: 'Sff', kind: 'line', p1: [1, 4], p2: [9, 11], color: LINE, label: 'S + FF premium', dash: true }
    ],
    points: [
      { on: ['S', 'D'], dot: true, guideX: 'Q*', guideY: 'r*', label: 'no-friction' },
      { on: ['Sff', 'D'], dot: true, guideX: 'Q_FF', guideY: 'r_FF', label: 'with FF' }
    ],
    shifts: [{ from: 'S', to: 'Sff' }],
    notes: [
      { x: 6.5, y: 8.6, text: 'FF premium ⇒ less Q, higher r', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  window.MAKRO_WEEKS.w10 = {
    id: 'w10',
    label: { en: 'Week 10', id: 'Minggu 10' },
    title: {
      en: 'Role of Expectations: Labour Market & the Supply-Side Model',
      id: 'Peran Ekspektasi: Pasar Kerja & Model Sisi Penawaran'
    },
    subtitle: {
      en: 'Expectations, credibility & unemployment (the expectations-augmented and evolving Phillips curve); labour-market mismatch, the Beveridge curve and the matching function; Indonesia\'s structural mismatch and dismal productivity; and the Supply–Demand model with Financial Frictions (SDM-FF).',
      id: 'Ekspektasi, kredibilitas & pengangguran (kurva Phillips yang diperkaya ekspektasi dan yang berevolusi); mismatch pasar kerja, kurva Beveridge dan fungsi matching; mismatch struktural dan produktivitas Indonesia yang lesu; serta model Penawaran–Permintaan dengan Friksi Keuangan (SDM-FF).'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Expectations, credibility & unemployment', id: 'Ekspektasi, kredibilitas & pengangguran' },
        num: '1',
        cards: [
          {
            title: { en: 'Monetary policy and inflation expectations', id: 'Kebijakan moneter dan ekspektasi inflasi' },
            html: {
              en: `<p>The central organising idea of the week: <span class="key">expectations</span> are not a side-show — they sit at the heart of how the labour market and inflation behave. The <span class="key">expectations-augmented Phillips curve</span> says that if policymakers lack <span class="key">credibility</span>, inflation expectations may rise, which locks in higher unemployment for any given disinflation effort.</p>
<div class="formula">$$\\pi_t = \\pi_t^{e} - \\beta\\,(u_t - u^{*}) + \\varepsilon_t$$</div>
<p>Read it like this: actual inflation equals <em>expected</em> inflation minus a term in the unemployment gap. Two consequences follow. (1) In the <span class="key">long run</span> the curve is <span class="key">vertical</span> at the natural rate $u^{*}$ — there is no permanent inflation-for-jobs trade-off. (2) The position of the short-run curve is pinned by $\\pi^{e}$: if the public expects high inflation, the bank must accept either higher inflation or, to disinflate, a deeper recession (higher $u$).</p>
<div class="note">Credibility is the cheap way to disinflate. A credible bank moves $\\pi^{e}$ down directly, so it can lower inflation with a <em>smaller</em> rise in unemployment (a lower sacrifice ratio). An incredible bank pays for every point of disinflation with lost jobs.</div>`,
              id: `<p>Gagasan utama minggu ini: <span class="key">ekspektasi</span> bukan pelengkap — ia inti dari perilaku pasar kerja dan inflasi. <span class="key">Kurva Phillips yang diperkaya ekspektasi</span> menyatakan bahwa bila pembuat kebijakan kekurangan <span class="key">kredibilitas</span>, ekspektasi inflasi bisa naik, yang mengunci pengangguran lebih tinggi untuk setiap upaya disinflasi tertentu.</p>
<div class="formula">$$\\pi_t = \\pi_t^{e} - \\beta\\,(u_t - u^{*}) + \\varepsilon_t$$</div>
<p>Bacanya: inflasi aktual = inflasi <em>ekspektasi</em> dikurangi suku dalam kesenjangan pengangguran. Dua akibatnya. (1) Dalam <span class="key">jangka panjang</span> kurva <span class="key">vertikal</span> pada tingkat alamiah $u^{*}$ — tidak ada trade-off inflasi-vs-lapangan kerja permanen. (2) Posisi kurva jangka pendek ditentukan $\\pi^{e}$: bila publik mengharapkan inflasi tinggi, bank sentral harus menerima inflasi lebih tinggi atau, untuk disinflasi, resesi lebih dalam ($u$ naik).</p>
<div class="note">Kredibilitas adalah cara murah berdisinflasi. Bank yang kredibel menurunkan $\\pi^{e}$ langsung, sehingga bisa menurunkan inflasi dengan kenaikan pengangguran lebih <em>kecil</em> (sacrifice ratio lebih rendah). Bank yang tak dipercaya membayar tiap poin disinflasi dengan kehilangan pekerjaan.</div>`
            },
            chart: PHILLIPS_CHART
          },
          {
            title: { en: 'Expectations & time inconsistency, again', id: 'Ekspektasi & inkonsistensi waktu, lagi' },
            html: {
              en: `<p>Because policymakers want to keep desired outcomes <em>without</em> causing the inflation that the public would <span class="key">recall</span>, we hit <span class="key">time inconsistency</span> once more: a plan that is optimal today (promise low inflation to anchor $\\pi^{e}$, then surprise with stimulus tomorrow) is not optimal to follow through, so rational agents anticipate the surprise and the promise loses bite.</p>
<p><span class="key">GFC (2008–2010)</span> is the lecturer's worked illustration: long-term stimulus measures meant to support job creation and revising — but then rising inflation caused policymakers to abruptly shift to austerity. The result: economic agents who had started retraining for new industries found themselves without government support, and firms that had expected stable hiring conditions faced uncertainty.</p>
<div class="tip">The deeper lesson the slide pulls out: <em>many central banks committed to low inflation but later pursued expansionary monetary policy to boost growth & employment</em> — so the pressure shifts from the government onto wage-setting adjustment. Watch for the exam framing: "credibility ↔ expectations ↔ unemployment" is a triangle, not a line.</div>`,
              id: `<p>Karena pembuat kebijakan ingin mempertahankan hasil yang diinginkan <em>tanpa</em> menimbulkan inflasi yang akan <span class="key">diingat</span> publik, kita kembali pada <span class="key">inkonsistensi waktu</span>: rencana yang optimal hari ini (janji inflasi rendah untuk menjangkar $\\pi^{e}$, lalu mengejutkan dengan stimulus besok) tidak optimal untuk dijalankan, sehingga agen rasional mengantisipasi kejutan itu dan janji kehilangan dampaknya.</p>
<p><span class="key">GFC (2008–2010)</span> adalah ilustrasi dosen: langkah stimulus jangka panjang untuk mendukung penciptaan lapangan kerja dan revisi — tetapi inflasi yang meningkat membuat kebijakan tiba-tiba beralih ke austerity. Akibatnya: agen ekonomi yang telah mulai pelatihan ulang untuk industri baru tertinggal tanpa dukungan pemerintah, dan perusahaan yang mengharapkan kondisi perekrutan stabil menghadapi ketidakpastian.</p>
<div class="tip">Pelajaran lebih dalam dari slide: <em>banyak bank sentral berkomitmen pada inflasi rendah tetapi kemudian menempuh kebijakan moneter ekspansif untuk mendorong pertumbuhan & lapangan kerja</em> — sehingga tekanan bergeser dari pemerintah ke penyesuaian penetapan upah. Awas framing ujian: "kredibilitas ↔ ekspektasi ↔ pengangguran" adalah segitiga, bukan garis.</div>`
            }
          },
          {
            title: { en: 'Phillips curve & expectations: an evolving curve', id: 'Kurva Phillips & ekspektasi: kurva yang berevolusi' },
            html: {
              en: `<p>The Phillips curve is not a fixed law — it <span class="key">evolves</span> as expectations form. The lecturer traces the intellectual cycle:</p>
<ul>
<li><span class="key">1960s:</span> the Phillips curve was popular; a stable inflation–unemployment trade-off (the original "menu") — and the trade-off was an illusion (Friedman and Edmund Phelps).</li>
<li><span class="key">1970s:</span> the relation between inflation and the unemployment rate broke down because wage-setters changed the way they formed their expectations. This shows up as the behaviour of the Phillips curve — points come from a cluster in the behaviour of inflation: i.e., becoming more persistent ("recall" of inflation rate used a charge in inflation rate ↔ unemployment rate.</li>
<li><span class="key">1990s onward:</span> once central banks (CBs) became credible, inflation expectations re-anchored. With <span class="key">expected inflation</span> stable, the relation between inflation and unemployment re-emerges — but it now depends very much on the <em>behaviour of inflation expectations</em>.</li>
</ul>
<div class="note">Key point: the Phillips curve is a relation <em>between expectations</em>, expected inflation, and unemployment. What this implies for the relation between inflation and unemployment is that <span class="key">it does not depend very much on the behaviour of inflation</span> itself once expectations are anchored — it depends on whether people form expectations. The three scatter panels in the deck (1961–1969 stable, 1970–1995 scrambled, 1970–1995 re-shaped) make this concrete.</div>`,
              id: `<p>Kurva Phillips bukan hukum tetap — ia <span class="key">berevolusi</span> seiring terbentuknya ekspektasi. Dosen menelusuri siklus intelektualnya:</p>
<ul>
<li><span class="key">1960-an:</span> kurva Phillips populer; trade-off inflasi–pengangguran yang stabil (the original "menu") — dan trade-off itu ilusi (Friedman dan Edmund Phelps).</li>
<li><span class="key">1970-an:</span> hubungan antara inflasi dan tingkat pengangguran runtuh karena penetap upah mengubah cara mereka membentuk ekspektasi. Ini tampak pada perilaku kurva Phillips — titik-titik berasal dari kluster dalam perilaku inflasi: makin persisten ("recall" inflasi).</li>
<li><span class="key">1990-an dan seterusnya:</span> setelah bank sentral menjadi kredibel, ekspektasi inflasi terjangkar ulang. Dengan <span class="key">inflasi ekspektasi</span> stabil, hubungan inflasi–pengangguran muncul kembali — tetapi kini sangat bergantung pada <em>perilaku ekspektasi inflasi</em>.</li>
</ul>
<div class="note">Inti: kurva Phillips adalah hubungan <em>antar-ekspektasi</em>, inflasi ekspektasi, dan pengangguran. Implikasinya: hubungan inflasi–pengangguran <span class="key">tidak terlalu bergantung pada perilaku inflasi</span> itu sendiri begitu ekspektasi terjangkar — bergantung pada apakah orang membentuk ekspektasi. Tiga panel scatter di slide (1961–1969 stabil, 1970–1995 acak, 1970–1995 terbentuk ulang) menjelaskan ini.</div>`
            }
          },
          {
            title: { en: 'What expectations for stablecoins?', id: 'Ekspektasi apa untuk stablecoin?' },
            html: {
              en: `<p>An applied digression that the lecturer uses to show expectations also drive new asset classes. <span class="key">Growth of stablecoins</span> (crypto assets pegged to fiat currencies such as USD) is spurred by Trump's enthusiastic embrace of digital assets (Congress passed the <span class="key">Genius Act</span>); now 98% of the $31.5bn global stablecoin market is US dollar-denominated.</p>
<ul>
<li><span class="key">Benefits:</span> can boost competition, lower costs in payments, provide benefits for cross-border payments, including speed and lower costs, but all with high risks. It is also a way to guard against high inflation, evade restrictions on international payments and counter the risk of local-currency depreciation or BOP crisis (Egypt, Pakistan, Bangladesh).</li>
<li><span class="key">Risks:</span> growing use of stablecoins in EM could accelerate the dollarisation of EM, undermine the control of money flows and open the door to criminal activity (threat to monetary sovereignty). It raises serious risks for financial integrity and can facilitate regulatory circumvention, making it easier to evade capital controls and tax evasion.</li>
<li><span class="key">Countries could defend themselves</span> against stablecoin dollarisation by improving macroeconomic frameworks; e.g., Brazil changed its legislation to include stablecoin providers in rules requiring banks to carry out anti-money laundering checks on payments, now have a $100,000 limit on many foreign transfers.</li>
</ul>`,
              id: `<p>Selingan terapan yang dosen pakai untuk menunjukkan ekspektasi juga menggerakkan kelas aset baru. <span class="key">Pertumbuhan stablecoin</span> (aset kripto yang dipatok ke mata uang fiat seperti USD) didorong oleh dukungan antusias Trump pada aset digital (Kongres meloloskan <span class="key">Genius Act</span>); kini 98% dari pasar stablecoin global senilai $31,5 miliar berdenominasi dolar AS.</p>
<ul>
<li><span class="key">Manfaat:</span> dapat meningkatkan persaingan, menurunkan biaya pembayaran, memberi manfaat untuk pembayaran lintas batas termasuk kecepatan dan biaya lebih rendah, tetapi semua dengan risiko tinggi. Juga cara melindungi diri dari inflasi tinggi, menghindari pembatasan pembayaran internasional, dan menangkal risiko depresiasi mata uang lokal atau krisis BOP (Mesir, Pakistan, Bangladesh).</li>
<li><span class="key">Risiko:</span> pemakaian stablecoin yang tumbuh di EM bisa mempercepat dolarisasi EM, melemahkan kendali arus uang, dan membuka pintu aktivitas kriminal (ancaman kedaulatan moneter). Ia menimbulkan risiko serius bagi integritas keuangan dan memfasilitasi penghindaran regulasi, mempermudah pengelakan kontrol modal dan penghindaran pajak.</li>
<li><span class="key">Negara bisa melindungi diri</span> dari dolarisasi stablecoin dengan memperbaiki kerangka makroekonomi; mis. Brasil mengubah aturannya untuk memasukkan penyedia stablecoin ke ketentuan yang mewajibkan bank melakukan cek anti-pencucian-uang atas pembayaran, kini ada batas $100.000 untuk banyak transfer asing.</li>
</ul>`
            }
          },
          {
            title: { en: 'Expectations between market & macro', id: 'Ekspektasi antara pasar & makro' },
            html: {
              en: `<p>A striking split: financial markets and macro fundamentals can hold <em>opposite</em> expectations at the same time.</p>
<ul>
<li><span class="key">Upbeat expectation (market):</span> market expectations during the April 2026 Iran war are surprisingly bullish — investors brushing aside geopolitical tensions in both US and EM, stocks reaching record highs, driven by strong earnings, AI demand, and hopes for limited conflict. While oil prices have experienced volatility, major oil spikes have not yet materialised, and earnings estimates for S&P 500 companies have actually increased to 20% for Q2 2026.</li>
<li><span class="key">Gloomy expectation (macro):</span> while some analysts view this as a justified "buy the dip" mentality based on hopes for a quick resolution or contained impact, others argue the market is being overly <em>complacent</em> and ignoring potential long-term risks like energy shocks, inflation, and recession. According to the IMF's April 2026 assessments, the global economic outlook is characterised as "gloomy" and "fragile", featuring low growth, high uncertainty, and significant risks of a downward spiral. It warns that the world is facing a turning point for the 3rd consecutive year, with structural shifts in the economic cycle.</li>
</ul>
<div class="note">The lecturer's frame: World Bank Global Economic Prospects reports a world economy facing a "wasted" decade of weak growth (2020s), with 2026 forecast 2.6%, the slowest growth since 2008. Persistent headwinds include high geopolitical tension, tight financial conditions, high debt in developing economies, and protectionist trade policies.</div>`,
              id: `<p>Perpecahan mencolok: pasar keuangan dan fundamental makro bisa memegang ekspektasi <em>berlawanan</em> pada saat yang sama.</p>
<ul>
<li><span class="key">Ekspektasi optimis (pasar):</span> ekspektasi pasar selama perang Iran April 2026 mengejutkan karena bullish — investor mengabaikan ketegangan geopolitik di AS dan EM, saham mencapai rekor tertinggi, didorong laba kuat, permintaan AI, dan harapan konflik terbatas. Meski harga minyak fluktuatif, lonjakan minyak besar belum terjadi, dan estimasi laba perusahaan S&P 500 justru naik ke 20% untuk Q2 2026.</li>
<li><span class="key">Ekspektasi suram (makro):</span> sebagian analis melihat ini sebagai mentalitas "beli saat turun" yang wajar berdasar harapan resolusi cepat; yang lain berargumen pasar terlalu <em>lengah</em> dan mengabaikan risiko jangka panjang seperti guncangan energi, inflasi, dan resesi. Menurut penilaian IMF April 2026, prospek ekonomi global "suram" dan "rapuh", dengan pertumbuhan rendah, ketidakpastian tinggi, dan risiko spiral menurun yang signifikan. Dunia menghadapi titik balik untuk tahun ke-3 berturut-turut.</li>
</ul>
<div class="note">Bingkai dosen: World Bank Global Economic Prospects melaporkan ekonomi dunia menghadapi dekade "terbuang" pertumbuhan lemah (2020-an), dengan ramalan 2026 sebesar 2,6%, pertumbuhan paling lambat sejak 2008. Hambatan persisten: ketegangan geopolitik tinggi, kondisi keuangan ketat, utang tinggi di negara berkembang, dan kebijakan dagang proteksionis.</div>`
            }
          },
          {
            title: { en: 'Stocks brush off the Iran war — bubbles & fundamentals', id: 'Saham mengabaikan perang Iran — gelembung & fundamental' },
            html: {
              en: `<p>The Bloomberg chart (S&P 500 vs MSCI All-Country World Index, 2025 → Apr 2026) is the lecturer's exhibit for the "upbeat market" point. The key annotation, in his own words: <em>"A large number of investors pay no attention to balance sheets, earnings forecasts, price-to-book ratios and the like and just keep chucking cash in. Flows have always trumped fundamentals → This is how we get bubbles: people get over-excited and ignore reality for a while."</em></p>
<p>The shaded band marks the brief drawdown around the Iran war scare, followed by a sharp V-recovery to new highs — exactly the pattern that the upbeat-market expectation produces and the gloomy-macro view warns is fragile. Tie it back to expectations: when expectations are driven by <span class="key">flows and momentum</span> rather than fundamentals, asset prices can decouple from the macro picture until the correction comes.</p>`,
              id: `<p>Grafik Bloomberg (S&P 500 vs MSCI All-Country World Index, 2025 → Apr 2026) adalah bukti dosen untuk poin "pasar optimis". Anotasi kuncinya, dalam kata-katanya: <em>"Banyak investor tidak memperhatikan neraca, ramalan laba, rasio price-to-book, dan sejenisnya, dan hanya terus menggelontorkan uang. Arus selalu mengalahkan fundamental → Begitulah gelembung terbentuk: orang terlalu bersemangat dan mengabaikan realitas untuk sementara."</em></p>
<p>Pita berbayang menandai penurunan singkat seputar kekhawatiran perang Iran, diikuti pemulihan-V tajam ke rekor baru — persis pola yang dihasilkan ekspektasi pasar optimis dan yang diperingatkan rapuh oleh pandangan makro suram. Kaitkan ke ekspektasi: bila ekspektasi digerakkan <span class="key">arus dan momentum</span> alih-alih fundamental, harga aset bisa terlepas dari gambaran makro sampai koreksi datang.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Labour-market mismatch & productivity', id: 'Mismatch pasar kerja & produktivitas' },
        num: '2',
        cards: [
          {
            title: { en: 'Indonesia\'s labour force & employment data (Sakernas)', id: 'Data angkatan kerja & ketenagakerjaan Indonesia (Sakernas)' },
            html: {
              en: `<p>Setting the scene with BPS Sakernas figures the lecturer puts up: the <span class="key">working-age population</span>, the <span class="key">labour force</span>, the <span class="key">labour-force participation rate (LFP / TPAK)</span>, and the <span class="key">open unemployment rate</span> move only slowly year to year (Aug 2023 → projected Aug 2024–25). Two footnotes carry the exam-relevant definitions:</p>
<div class="note"><span class="key">Unemployment.</span> If we simply rely on BPS's definition of an open (unemployment), from 2008 to fall from 7,465,599 to 7,463,507, or fall by 4,092 people. They are active job seekers who are not working and are currently looking for a job (e.g., in the process of setting up a new business, discouraged because feeling impossible to get a job).<br><span class="key">Employment.</span> Law No. 13 of 2003 states that normal working hours are: 8 hours/day for a 5-day workweek (totalling 40 hours/week); 7 hours/day for a 6-day workweek (totalling 40 hours/week). If &lt; 7 hours/day and &lt; 35 hours/week ⇒ they are part-time workers / underemployed.</div>
<p>The takeaway: headline unemployment looks low and stable, but that masks a quality-of-work problem — high <span class="key">underemployment</span> and informality — which the rest of the block unpacks.</p>`,
              id: `<p>Pembuka dengan angka BPS Sakernas yang ditampilkan dosen: <span class="key">penduduk usia kerja</span>, <span class="key">angkatan kerja</span>, <span class="key">tingkat partisipasi angkatan kerja (TPAK)</span>, dan <span class="key">tingkat pengangguran terbuka</span> bergerak lambat dari tahun ke tahun (Agu 2023 → proyeksi Agu 2024–25). Dua catatan kaki memuat definisi yang relevan untuk ujian:</p>
<div class="note"><span class="key">Pengangguran.</span> Bila mengandalkan definisi BPS atas pengangguran terbuka, dari 2008 turun dari 7.465.599 ke 7.463.507, atau turun 4.092 orang. Mereka pencari kerja aktif yang tidak bekerja dan sedang mencari pekerjaan (mis. dalam proses membuka usaha baru, atau putus asa karena merasa mustahil mendapat kerja).<br><span class="key">Pekerja.</span> UU No. 13 Tahun 2003 menyatakan jam kerja normal: 8 jam/hari untuk 5 hari kerja (total 40 jam/minggu); 7 jam/hari untuk 6 hari kerja (total 40 jam/minggu). Bila &lt; 7 jam/hari dan &lt; 35 jam/minggu ⇒ mereka pekerja paruh waktu / setengah menganggur.</div>
<p>Intinya: pengangguran utama tampak rendah dan stabil, tetapi itu menutupi masalah kualitas kerja — <span class="key">underemployment</span> dan informalitas tinggi — yang dibedah blok berikutnya.</p>`
            }
          },
          {
            title: { en: 'Youth, education & the quality trap', id: 'Pemuda, pendidikan & jebakan kualitas' },
            html: {
              en: `<p>The ILO/SOFITAX charts on youth (15–24) not in education, employment or training (NEET), the unemployment rate by education (2013–23), and the 2015–2023 youth unemployment series all point one way. The lecturer's synthesis (slide 12):</p>
<ul>
<li><span class="key">The quality trap beneath low unemployment:</span> Indonesia added 4.8 million new jobs in 2024, pushing unemployment below 5%, yet more than 80% of new jobs were in household enterprises — street vendors, home-based workers, and family-run shops. Most wages, adjusted for inflation, have not grown since 2018, and around 30% of Indonesia's workforce works under 35 hours per week (underemployment).</li>
<li><span class="key">Job quality & informality.</span> The decline in open unemployment rate does not reflect good performance in the labour market. The quality of jobs and informal employment are still major problems.</li>
<li><span class="key">Youth unemployment.</span> 16% of the 44 million Indonesians aged 15–24 are out of work (more than double of Thailand and Vietnam) — Indonesia ranks as the second-worst performer in Asia (17.3%), behind only India.</li>
<li><span class="key">Government policies remain fragmented and short-term</span>, while long-term solutions addressing vertical and horizontal mismatches are lacking. Without tackling both the skills gap and the meritocracy deficit, the Beveridge curve is unlikely to shift back toward the origin.</li>
</ul>`,
              id: `<p>Grafik ILO tentang pemuda (15–24) yang tidak dalam pendidikan, pekerjaan, atau pelatihan (NEET), tingkat pengangguran menurut pendidikan (2013–23), dan deret pengangguran pemuda 2015–2023 semuanya menunjuk satu arah. Sintesis dosen (slide 12):</p>
<ul>
<li><span class="key">Jebakan kualitas di balik pengangguran rendah:</span> Indonesia menambah 4,8 juta pekerjaan baru pada 2024, menekan pengangguran di bawah 5%, namun lebih dari 80% pekerjaan baru ada di usaha rumah tangga — pedagang kaki lima, pekerja rumahan, dan toko keluarga. Sebagian besar upah riil tidak tumbuh sejak 2018, dan sekitar 30% tenaga kerja Indonesia bekerja di bawah 35 jam/minggu (underemployment).</li>
<li><span class="key">Kualitas kerja & informalitas.</span> Penurunan tingkat pengangguran terbuka tidak mencerminkan kinerja baik pasar kerja. Kualitas pekerjaan dan pekerjaan informal masih masalah besar.</li>
<li><span class="key">Pengangguran pemuda.</span> 16% dari 44 juta penduduk Indonesia usia 15–24 menganggur (lebih dari dua kali Thailand dan Vietnam) — Indonesia peringkat kedua-terburuk di Asia (17,3%), hanya di atas India.</li>
<li><span class="key">Kebijakan pemerintah tetap terfragmentasi dan jangka pendek</span>, sementara solusi jangka panjang untuk mismatch vertikal dan horizontal masih kurang. Tanpa menangani sekaligus kesenjangan keterampilan dan defisit meritokrasi, kurva Beveridge sulit bergeser kembali ke titik asal.</li>
</ul>`
            }
          },
          {
            title: { en: 'What labour-market mismatch means', id: 'Apa arti mismatch pasar kerja' },
            html: {
              en: `<p><span class="key">Labour-market mismatch</span> refers to the disconnect between the <span class="key">skills</span> and <span class="key">locations</span> of workers and the <span class="key">needs</span> of employers. Macroeconomic theories on labour-market mismatch:</p>
<ul>
<li><span class="key">Keynesian Unemployment Theory:</span> labour-market mismatches can result from insufficient AD, leading to involuntary unemployment despite available jobs → Economic fluctuations continue to impact employment. For example, post-pandemic recovery saw increased hiring, but inflation and interest-rate hikes have led to slower job growth in some sectors.</li>
<li><span class="key">Structural Unemployment Theory:</span> long-term mismatches due to shifts in industries, technology, or geography. Workers struggle to transition to new sectors requiring different skills → Technological advancements and automation are reshaping industries. Jobs in manufacturing and retail are declining, while demand for tech-related skills is rising, creating mismatches between available workers and job openings.</li>
<li><span class="key">Search and Matching Theory:</span> this theory suggests that unemployment and job vacancies coexist because workers and firms <span class="key">take time</span> to find suitable matches → The rise of remote work and gig economy jobs has altered traditional job-matching dynamics. Employers and workers now rely more on digital platforms to find suitable matches, which can both improve efficiency and create new mismatches.</li>
</ul>`,
              id: `<p><span class="key">Mismatch pasar kerja</span> merujuk pada keterputusan antara <span class="key">keterampilan</span> dan <span class="key">lokasi</span> pekerja dengan <span class="key">kebutuhan</span> pemberi kerja. Teori makroekonomi tentang mismatch pasar kerja:</p>
<ul>
<li><span class="key">Teori Pengangguran Keynesian:</span> mismatch bisa berasal dari AD yang kurang, menghasilkan pengangguran involunter meski pekerjaan tersedia → Fluktuasi ekonomi terus memengaruhi lapangan kerja. Mis. pemulihan pascapandemi meningkatkan perekrutan, tetapi inflasi dan kenaikan suku bunga memperlambat pertumbuhan pekerjaan di sebagian sektor.</li>
<li><span class="key">Teori Pengangguran Struktural:</span> mismatch jangka panjang karena pergeseran industri, teknologi, atau geografi. Pekerja sulit pindah ke sektor baru yang menuntut keterampilan berbeda → Kemajuan teknologi dan otomasi membentuk ulang industri. Pekerjaan manufaktur dan ritel menurun, sementara permintaan keterampilan terkait-teknologi naik.</li>
<li><span class="key">Teori Pencarian & Pencocokan (Search & Matching):</span> teori ini menyatakan pengangguran dan lowongan berdampingan karena pekerja dan perusahaan <span class="key">butuh waktu</span> menemukan kecocokan → Maraknya kerja jarak jauh dan gig economy mengubah dinamika pencocokan. Pemberi kerja dan pekerja kini lebih mengandalkan platform digital, yang bisa meningkatkan efisiensi sekaligus menciptakan mismatch baru.</li>
</ul>`
            }
          },
          {
            title: { en: 'Mismatch & the macroeconomy — structural drivers & policy', id: 'Mismatch & makroekonomi — pendorong struktural & kebijakan' },
            html: {
              en: `<p><span class="key">Key structural drivers affected by macro context:</span></p>
<ul>
<li><span class="key">Skill Mismatch:</span> particularly significant for highly educated workers, with occupational mismatches accounting for up to one-third of the rise in unemployment during certain periods.</li>
<li><span class="key">Technological Change:</span> rapid digitalization and automation render the full implications of their actions, the potential effects on prices, output, employment, and inflation (e.g., demand-side policies like increased government spending might lead to higher inflation if it is not accompanied by corresponding increases in supply capacity).</li>
<li><span class="key">Demographic Trends:</span> an ageing workforce reduces labour supply in certain sectors, aggravating shortages and worsening mismatch in advanced economies.</li>
</ul>
<p><span class="key">Policy implications:</span> Structural vs Demand Management — while demand-side monetary policies can help during a recession, they are often less effective at structural mismatch caused by skill gaps; <span class="key">active labour-market policies (ALMPs)</span>: training and retraining programs are crucial to reduce mismatch during shifts in the economic structure.</p>
<p><span class="key">Macro conditions affect the intensity of labour reallocation:</span> recessions increase mismatch via high unemployment and structural shifts; expansions, despite potential skill shortages, tend to allow the labour market to re-sort workers more efficiently.</p>`,
              id: `<p><span class="key">Pendorong struktural utama yang dipengaruhi konteks makro:</span></p>
<ul>
<li><span class="key">Skill Mismatch:</span> sangat signifikan bagi pekerja berpendidikan tinggi, dengan mismatch okupasi menyumbang hingga sepertiga kenaikan pengangguran pada periode tertentu.</li>
<li><span class="key">Perubahan Teknologi:</span> digitalisasi dan otomasi cepat menghadirkan implikasi penuh atas tindakan, efek potensial pada harga, output, lapangan kerja, dan inflasi (mis. kebijakan sisi-permintaan seperti naiknya belanja pemerintah bisa menaikkan inflasi bila tak diiringi kenaikan kapasitas penawaran).</li>
<li><span class="key">Tren Demografi:</span> tenaga kerja yang menua menurunkan penawaran tenaga kerja di sektor tertentu, memperparah kelangkaan dan mismatch di ekonomi maju.</li>
</ul>
<p><span class="key">Implikasi kebijakan:</span> Struktural vs Manajemen Permintaan — kebijakan moneter sisi-permintaan membantu saat resesi, tetapi kurang efektif atas mismatch struktural akibat kesenjangan keterampilan; <span class="key">active labour-market policies (ALMP)</span>: program pelatihan dan pelatihan ulang krusial untuk mengurangi mismatch saat struktur ekonomi bergeser.</p>
<p><span class="key">Kondisi makro memengaruhi intensitas realokasi tenaga kerja:</span> resesi menaikkan mismatch lewat pengangguran tinggi dan pergeseran struktural; ekspansi, meski ada kelangkaan keterampilan, cenderung memungkinkan pasar kerja menata ulang pekerja lebih efisien.</p>`
            }
          },
          {
            title: { en: 'The Beveridge curve', id: 'Kurva Beveridge' },
            html: {
              en: `<p>The Beveridge curve (e.g. Blanchard and Diamond, 1989) has been used to study the prospect of soft landing. In the case of the US, <span class="key">Figure and Waller (2024)</span> concluded that for any general equilibrium model in which labour market is described by (1) the standard <span class="key">law of motion</span> for unemployment and (2) the usual matching function relationship, it is useful to start with accounting for the figures and intuition behind it. The flow of individuals in and out of employment:</p>
<div class="formula">$$E_t = E_{t-1} - s_t E_{t-1} + H_t$$</div>
<p>where $E_t$ is the number of employed workers in period $t$, and $H_t$ denotes the number of gross hires in period $t$, $s_t$ denotes the <span class="key">separation rate</span> in period $t$, i.e., the share of workers who are employed in period $t-1$ that lose jobs in period $t$. Therefore, $s_t E_{t-1}$ is the number of job separations in period $t$. The equation states that <span class="key">employment</span> (in number of persons) in period $t$ decreases with job separations and increases with gross hires in period $t$. Gross new hires depend on the number of job vacancies and the number of unemployed workers. The more jobs waiting for workers, the more hires; the more workers looking for jobs, the more hires as well.</p>`,
              id: `<p>Kurva Beveridge (mis. Blanchard dan Diamond, 1989) dipakai untuk menelaah prospek soft landing. Untuk kasus AS, <span class="key">Figura dan Waller (2024)</span> menyimpulkan bahwa untuk model keseimbangan umum mana pun yang pasar kerjanya dijelaskan oleh (1) <span class="key">hukum gerak</span> standar pengangguran dan (2) hubungan fungsi matching biasa, berguna memulai dari akuntansi angka dan intuisinya. Aliran individu masuk dan keluar dari pekerjaan:</p>
<div class="formula">$$E_t = E_{t-1} - s_t E_{t-1} + H_t$$</div>
<p>di mana $E_t$ jumlah pekerja yang bekerja pada periode $t$, $H_t$ jumlah perekrutan kotor (gross hires) pada periode $t$, $s_t$ <span class="key">tingkat pemisahan (separation rate)</span> pada periode $t$, yaitu pangsa pekerja yang bekerja pada $t-1$ yang kehilangan pekerjaan pada $t$. Maka $s_t E_{t-1}$ adalah jumlah pemisahan pekerjaan pada periode $t$. Persamaan ini menyatakan <span class="key">lapangan kerja</span> (jumlah orang) pada $t$ berkurang oleh pemisahan dan bertambah oleh perekrutan kotor pada $t$. Perekrutan baru bergantung pada jumlah lowongan dan jumlah penganggur. Makin banyak lowongan menunggu pekerja, makin banyak hires; makin banyak pekerja mencari kerja, makin banyak hires juga.</p>`
            },
            chart: BEVERIDGE_CHART
          },
          {
            title: { en: 'The matching function', id: 'Fungsi matching' },
            html: {
              en: `<p>Assume the existence of a matching function taking the following standard form:</p>
<div class="formula">$$H_t = \\mu_t\\, V_t^{\\alpha}\\, U_t^{1-\\alpha}$$</div>
<p>where $V_t$ and $U_t$ denote the number of job vacancies and unemployed workers in period $t$. The time-varying parameter $\\mu_t$ governs the efficiency of the matching process in period $t$. Higher efficiency translates into more new hires in period $t$. The parameter $\\alpha$ captures the relative importance of vacancies for creating hires. If $\\alpha$ is low, vacancies are less important at creating matches than unemployment vis-à-vis the adjustment of the labour force.</p>
<p>To make the law of motion easier to work with, rewrite the two equations by the size of the labour force in period $t$, and rewrite the two equations as follows:</p>
<div class="formula">$$e_t\\,(1+n_t) = (1-s_t)\\,e_{t-1} + h_t\\,(1+n_t)$$</div>
<div class="formula">$$h_t = \\mu_t\\, v_t^{\\alpha}\\, u_t^{1-\\alpha}$$</div>
<p>Lower-case variables express the corresponding upper-case variables in ratio to the labour force. For example, $e_t$ and $u_t$ represent the employment rate and unemployment rate (job-vacancy rate is $v_t$, respectively). Here $n_t$ is the growth rate of the labour force in period $t$. Note on all these variables: they are readily available except $\\mu_t$, the unobservable matching efficiency, and $h_t$, gross hires in ratio to the LF.</p>`,
              id: `<p>Asumsikan keberadaan fungsi matching berbentuk standar berikut:</p>
<div class="formula">$$H_t = \\mu_t\\, V_t^{\\alpha}\\, U_t^{1-\\alpha}$$</div>
<p>di mana $V_t$ dan $U_t$ menyatakan jumlah lowongan dan penganggur pada periode $t$. Parameter $\\mu_t$ yang berubah-waktu mengatur efisiensi proses matching pada $t$. Efisiensi lebih tinggi → lebih banyak hires baru. Parameter $\\alpha$ menangkap kepentingan relatif lowongan dalam menciptakan hires. Bila $\\alpha$ rendah, lowongan kurang penting dalam membuat match dibanding pengangguran terhadap penyesuaian angkatan kerja.</p>
<p>Agar hukum gerak lebih mudah dipakai, tulis ulang kedua persamaan relatif terhadap ukuran angkatan kerja pada $t$:</p>
<div class="formula">$$e_t\\,(1+n_t) = (1-s_t)\\,e_{t-1} + h_t\\,(1+n_t)$$</div>
<div class="formula">$$h_t = \\mu_t\\, v_t^{\\alpha}\\, u_t^{1-\\alpha}$$</div>
<p>Variabel huruf kecil menyatakan variabel huruf besar dalam rasio terhadap angkatan kerja. Mis. $e_t$ dan $u_t$ adalah tingkat kerja dan tingkat pengangguran (tingkat lowongan $v_t$). Di sini $n_t$ tingkat pertumbuhan angkatan kerja pada $t$. Catatan: semua variabel ini tersedia kecuali $\\mu_t$, efisiensi matching yang tak teramati, dan $h_t$, hires kotor dalam rasio terhadap angkatan kerja.</p>`
            }
          },
          {
            title: { en: 'Labour-market mismatch in EM (incl. Indonesia)', id: 'Mismatch pasar kerja di EM (termasuk Indonesia)' },
            html: {
              en: `<p>The scatterplot (share of graduates trained in emerging fields; skill mismatch supply vs demand) shows that countries in the southern/eastern European bloc combine strong demand for new skills with a small supply of graduates trained in emerging fields, placing them in the chart's upper-right quadrant; countries among the best positioned to compete in an AI-driven economy. The pink and white shading reflects the relative balance between supply and demand, benchmarked to the United States — this balance highlights different policy priorities.</p>
<p><span class="key">Emerging markets (EM)</span> mismatches often arise due to skill gaps, technological shifts, and economic transitions. A few examples:</p>
<ul>
<li><span class="key">Skill Mismatches:</span> manufacturing sectors may struggle to find workers with the necessary technical skills, while universities focus more on theoretical knowledge.</li>
<li><span class="key">Urban–Rural Divide:</span> rural workers migrate to cities but lack the skills required for urban jobs (insufficient vocational training programs).</li>
<li><span class="key">Technological Disruption:</span> automation and digitalization leave workers in traditional sectors unemployed while demand for tech-savvy employees rises.</li>
<li><span class="key">Indonesia:</span> faces mismatches particularly in skill gaps and urban–unemployment disparities → "well-matched" is dominant but most workers are "under-educated" and "over-educated", affecting productivity. Key indicators 2024/2025: open unemployment 4.85%, youth unemployment ~16%, informal employment 56%, mismatch (over-/under-educated) 46%.</li>
</ul>`,
              id: `<p>Scatterplot (pangsa lulusan terlatih di bidang baru; skill mismatch penawaran vs permintaan) menunjukkan negara-negara blok Eropa selatan/timur memadukan permintaan kuat akan keterampilan baru dengan pasokan kecil lulusan terlatih di bidang baru, menempatkan mereka di kuadran kanan-atas; termasuk negara yang paling siap bersaing dalam ekonomi berbasis AI. Bayangan merah-muda dan putih mencerminkan keseimbangan relatif penawaran-permintaan, dibandingkan dengan AS.</p>
<p><span class="key">Negara berkembang (EM)</span> sering mengalami mismatch karena kesenjangan keterampilan, pergeseran teknologi, dan transisi ekonomi. Beberapa contoh:</p>
<ul>
<li><span class="key">Skill Mismatch:</span> sektor manufaktur sulit menemukan pekerja berketerampilan teknis, sementara universitas lebih fokus pada pengetahuan teoretis.</li>
<li><span class="key">Kesenjangan Kota–Desa:</span> pekerja desa pindah ke kota tetapi kurang keterampilan untuk pekerjaan kota (program vokasi kurang).</li>
<li><span class="key">Disrupsi Teknologi:</span> otomasi dan digitalisasi membuat pekerja sektor tradisional menganggur sementara permintaan pekerja melek-teknologi naik.</li>
<li><span class="key">Indonesia:</span> menghadapi mismatch terutama pada kesenjangan keterampilan dan disparitas pengangguran kota → "well-matched" dominan tetapi sebagian besar pekerja "under-educated" dan "over-educated", memengaruhi produktivitas. Indikator kunci 2024/2025: pengangguran terbuka 4,85%, pengangguran pemuda ~16%, pekerjaan informal 56%, mismatch (over-/under-educated) 46%.</li>
</ul>`
            }
          },
          {
            title: { en: "Indonesia's structural mismatch & productivity", id: 'Mismatch struktural & produktivitas Indonesia' },
            html: {
              en: `<p><span class="key">The paradox and striking contradiction</span> in Indonesia's labour market: around 46% of companies are struggling to find suitable candidates despite a high unemployment rate, with 7.28 million unemployed as of February 2025. This simultaneous job vacancy and unemployment is the textbook definition of a structural mismatch — and it's the key reason Indonesia's Beveridge curve has shifted outward.</p>
<p><span class="key">Three types of mismatch driving the outward shift:</span></p>
<ul>
<li><span class="key">Vertical (qualification) mismatch</span> — the higher the required education level, the greater the disparity. Vacancies for BA holders make up only 16% of total jobs offered, while 19% are for postgraduates. Unemployment among bachelor's-degree or higher rose from 4.8% in August 2022 to 6.23%; graduates are overqualified for available informal work and underqualified for the few high-skill positions.</li>
<li><span class="key">Horizontal (field of study) mismatch</span> — ILO classification of mismatch includes over-educated & under-educated workers relative to job requirements, <span class="key">impacting productivity and efficiency</span>. Digital, green economy & technical skills are severely undersupplied while curricula remain slow to adapt.</li>
<li><span class="key">Geographic/spatial mismatch</span> — stark regional disparities compound the problem, with young people in remote and rural areas finding it especially difficult to access good jobs, particularly outside Jawa.</li>
</ul>`,
              id: `<p><span class="key">Paradoks dan kontradiksi mencolok</span> di pasar kerja Indonesia: sekitar 46% perusahaan kesulitan menemukan kandidat yang sesuai meski tingkat pengangguran tinggi, dengan 7,28 juta penganggur per Februari 2025. Koeksistensi lowongan dan pengangguran ini adalah definisi buku-teks mismatch struktural — dan inilah alasan utama kurva Beveridge Indonesia bergeser keluar.</p>
<p><span class="key">Tiga jenis mismatch yang mendorong pergeseran keluar:</span></p>
<ul>
<li><span class="key">Mismatch vertikal (kualifikasi)</span> — makin tinggi tingkat pendidikan yang diminta, makin besar disparitasnya. Lowongan untuk pemegang S1 hanya 16% dari total, sementara 19% untuk pascasarjana. Pengangguran lulusan S1+ naik dari 4,8% (Agu 2022) ke 6,23%; lulusan overqualified untuk kerja informal dan underqualified untuk sedikit posisi high-skill.</li>
<li><span class="key">Mismatch horizontal (bidang studi)</span> — klasifikasi ILO mencakup pekerja over-educated & under-educated relatif terhadap syarat kerja, <span class="key">memengaruhi produktivitas dan efisiensi</span>. Keterampilan digital, ekonomi hijau & teknis sangat kurang sementara kurikulum lambat menyesuaikan.</li>
<li><span class="key">Mismatch geografis/spasial</span> — disparitas regional yang tajam memperparah masalah; kaum muda di daerah terpencil dan pedesaan sangat sulit mengakses pekerjaan baik, terutama di luar Jawa.</li>
</ul>`
            },
            chart: BEVERIDGE_ID_CHART
          },
          {
            title: { en: "Indonesia's dismal labour-productivity trend", id: 'Tren produktivitas tenaga kerja Indonesia yang lesu' },
            html: {
              en: `<p>The trend line clearly points to a persistent decline in the last decade. Negative growth in 2020 and 2022 was due to COVID pandemic, but if hypothetically that shock did not occur, it is hard to imagine that the declining pattern would have been reversed.</p>
<p>Although most sectors still recorded positive growth in the first period (2010–2015), with the exception of the electricity (ELC) and construction (CON) sectors, there was a noticeable decrease in productivity growth during the period 2016–2019. During this time, the growth of subsectors significantly dropped in productivity (ELC, MAN, MAN and FIRE) experienced negative growth.</p>
<p>The downward trend deepened in the 2020–2023 period, with overall productivity growth (ALL) entering negative territory.</p>
<div class="tip">Source taken from Azis, Iwan J (2026), <em>Monetary Whispers Across Space</em>, Springer. The exam hook: tie the productivity slide back to the mismatch story — when workers are mis-allocated (vertical/horizontal/spatial), measured labour productivity stagnates even if employment grows. Low productivity is the macro footprint of micro mismatch.</div>`,
              id: `<p>Garis tren jelas menunjukkan penurunan persisten dalam dekade terakhir. Pertumbuhan negatif pada 2020 dan 2022 karena pandemi COVID, tetapi seandainya guncangan itu tidak terjadi, sulit membayangkan pola menurun ini akan berbalik.</p>
<p>Meski sebagian besar sektor masih mencatat pertumbuhan positif pada periode pertama (2010–2015), kecuali sektor listrik (ELC) dan konstruksi (CON), ada penurunan mencolok pertumbuhan produktivitas pada periode 2016–2019. Pada masa ini, pertumbuhan subsektor turun signifikan (ELC, MAN, dan FIRE) mengalami pertumbuhan negatif.</p>
<p>Tren menurun memperdalam pada periode 2020–2023, dengan pertumbuhan produktivitas keseluruhan (ALL) memasuki wilayah negatif.</p>
<div class="tip">Sumber dari Azis, Iwan J (2026), <em>Monetary Whispers Across Space</em>, Springer. Kait ujian: hubungkan slide produktivitas ke kisah mismatch — ketika pekerja salah-alokasi (vertikal/horizontal/spasial), produktivitas tenaga kerja terukur stagnan meski lapangan kerja tumbuh. Produktivitas rendah adalah jejak makro dari mismatch mikro.</div>`
            }
          },
          {
            title: { en: 'Beveridge curve cases: Europe, US, Korea, Indonesia', id: 'Kasus kurva Beveridge: Eropa, AS, Korea, Indonesia' },
            html: {
              en: `<p>Four country cases drive home how to <em>read</em> a Beveridge curve. The theory: a negative relationship between unemployment and job vacancies. The curve suggests that as the number of job openings increases, the unemployment rate tends to decrease, and vice versa. The matching mechanism is often equated to a <span class="key">search and matching</span> model, where unemployed workers and firms looking to hire are in a process of costly search and matching.</p>
<ul>
<li><span class="key">Europe (2008Q4–2024Q2, quarter average rates):</span> the curve loops — movements <em>along</em> the curve are cyclical (recessions raise $u$, lower $v$) while loops and <em>outward shifts</em> signal worsening matching efficiency.</li>
<li><span class="key">US (Dec 2000 → Feb 2025, JOLTS, seasonally adjusted):</span> the May 2020 dot (job-openings rate 4.0%, unemployment 13.2%) is the COVID outlier far to the right; post-2020 the curve sits higher and further out than the pre-2020 clusters — a textbook outward shift.</li>
<li><span class="key">Korea (2015Q1–2024Q4):</span> two distinct clouds — <span class="key">pre-COVID</span> (high vacancies, low $u$, upper-left) and <span class="key">since-COVID</span> (lower along the red fitted curve) — visibly shifting the locus.</li>
<li><span class="key">Indonesia:</span> because Indonesia does not publish a formal vacancy series (no JOLTS-equivalent), a precise Beveridge curve cannot be plotted from official data. Using unemployment data from BPS (Sakernas) combined with qualitative evidence on vacancy intensity, two readings hold: (i) at any given unemployment rate, more vacancies go unfilled than before — a signal of declining matching efficiency; (ii) the labour market has moved from primarily <em>cyclical</em> problems (solved by economic growth) to <em>structural</em> ones (requiring deeper interventions).</li>
</ul>`,
              id: `<p>Empat kasus negara menegaskan cara <em>membaca</em> kurva Beveridge. Teorinya: hubungan negatif antara pengangguran dan lowongan. Kurva menyatakan saat lowongan naik, pengangguran cenderung turun, dan sebaliknya. Mekanisme pencocokan disetarakan dengan model <span class="key">search and matching</span>, di mana penganggur dan perusahaan yang mencari pekerja berada dalam proses pencarian dan pencocokan yang berbiaya.</p>
<ul>
<li><span class="key">Eropa (2008Q4–2024Q2, rata-rata kuartalan):</span> kurva membentuk loop — gerakan <em>sepanjang</em> kurva bersifat siklikal (resesi menaikkan $u$, menurunkan $v$) sementara loop dan <em>pergeseran keluar</em> menandakan efisiensi matching memburuk.</li>
<li><span class="key">AS (Des 2000 → Feb 2025, JOLTS, disesuaikan musiman):</span> titik Mei 2020 (tingkat lowongan 4,0%, pengangguran 13,2%) adalah outlier COVID jauh ke kanan; pasca-2020 kurva berada lebih tinggi dan lebih keluar dari kluster pra-2020 — pergeseran keluar khas.</li>
<li><span class="key">Korea (2015Q1–2024Q4):</span> dua awan terpisah — <span class="key">pra-COVID</span> (lowongan tinggi, $u$ rendah, kiri-atas) dan <span class="key">sejak-COVID</span> (lebih rendah sepanjang kurva fit merah) — menggeser lokus secara kasat mata.</li>
<li><span class="key">Indonesia:</span> karena Indonesia tidak menerbitkan deret lowongan formal (tak ada padanan JOLTS), kurva Beveridge presisi tidak bisa diplot dari data resmi. Memadukan data pengangguran BPS (Sakernas) dengan bukti kualitatif intensitas lowongan, dua bacaan berlaku: (i) pada tiap tingkat pengangguran, lebih banyak lowongan tak terisi daripada sebelumnya — sinyal efisiensi matching menurun; (ii) pasar kerja bergeser dari masalah terutama <em>siklikal</em> (terselesaikan pertumbuhan) ke masalah <em>struktural</em> (perlu intervensi lebih dalam).</li>
</ul>`
            }
          },
          {
            title: { en: 'Basic science is not the culprit (and still needed)', id: 'Sains dasar bukan biang keladi (dan tetap dibutuhkan)' },
            html: {
              en: `<p>A reflective interlude in the deck, relevant to the human-capital/skills theme. <span class="key">No applied science without basic science.</span> To do applied science, we need to know how the natural system we are studying works. Here is where basic science fits. For example, in the biodiversity crisis, or in nature conservation, how can you act soundly if you do not understand why some regions are more diverse than others (or how can you help preserve a given ecosystem if you do not understand what biological interactions (or interactions between organisms and the abiotic environment) are more important for the stability of that ecosystem? Basic science helps you answer those questions. Intuition and best guesses are not the best way to help us resolve applied problems.</p>
<p><span class="key">Lack of basic science, humanities, and natural history</span> in the scientific formation of society will have huge negative impacts on what makes a free society, and what makes us human (regarding ethics and well-being) → "……you leave out everything that makes a pigeon a pigeon, a rat a rat, a man a man, above all, a healthy man healthy and a sick man sick" (Konrad Lorenz; Austrian zoologist, modern ethology & biological study of animal behaviour).</p>`,
              id: `<p>Selingan reflektif dalam slide, relevan dengan tema modal manusia/keterampilan. <span class="key">Tidak ada sains terapan tanpa sains dasar.</span> Untuk melakukan sains terapan, kita perlu tahu bagaimana sistem alam yang dipelajari bekerja. Di sinilah sains dasar berperan. Mis. dalam krisis biodiversitas atau konservasi alam, bagaimana bertindak tepat bila tak paham mengapa sebagian kawasan lebih beragam dari yang lain (atau bagaimana membantu melestarikan suatu ekosistem bila tak paham interaksi biologis mana yang lebih penting bagi stabilitasnya)? Sains dasar membantu menjawabnya. Intuisi dan tebakan terbaik bukan cara terbaik menyelesaikan masalah terapan.</p>
<p><span class="key">Kurangnya sains dasar, humaniora, dan sejarah alam</span> dalam pembentukan ilmiah masyarakat akan berdampak negatif besar pada apa yang membuat masyarakat bebas, dan apa yang membuat kita manusia (soal etika dan kesejahteraan) → "……kau hilangkan segala yang membuat merpati jadi merpati, tikus jadi tikus, manusia jadi manusia, terutama manusia sehat jadi sehat dan manusia sakit jadi sakit" (Konrad Lorenz; zoolog Austria, etologi modern & studi biologis perilaku hewan).</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Supply–Demand model with Financial Frictions (SDM-FF)', id: 'Model Penawaran–Permintaan dengan Friksi Keuangan (SDM-FF)' },
        num: '3',
        cards: [
          {
            title: { en: 'Why a demand-only model is incomplete', id: 'Mengapa model permintaan-saja tidak lengkap' },
            html: {
              en: `<p>The crux of the third block: <span class="key">a model that only focuses on one side (either supply or demand) provides an incomplete picture of the economy.</span> It misses the crucial interaction between what is produced and what is consumed, which ultimately determines prices, output, and employment.</p>
<p>More importantly, it can help policymakers understand the full implications of their actions, the potential effects on prices, output, employment, and inflation (e.g., demand-side policies like increased government spending might lead to higher inflation if it is not accompanied by corresponding increases in supply capacity).</p>
<ul>
<li><span class="key">Realistic scenario:</span> combining S & D allows us to determine how prices are set in the market, as well as how quantities produced and consumed are influenced by price changes. By incorporating both sides, the model can simulate more realistic scenarios, including how the economy reacts to changes in government <span class="key">policies</span>, technological advancements, or global events. It helps researchers (like you!) and policymakers understand the impact of shocks or a change in consumer confidence, on the entire economy.</li>
<li><span class="key">Forecasting:</span> S–D model considers both the capacity to produce and the willingness to spend, hence produce more accurate forecasts.</li>
</ul>`,
              id: `<p>Inti blok ketiga: <span class="key">model yang hanya fokus pada satu sisi (penawaran atau permintaan) memberi gambaran ekonomi yang tidak lengkap.</span> Ia melewatkan interaksi krusial antara apa yang diproduksi dan apa yang dikonsumsi, yang akhirnya menentukan harga, output, dan lapangan kerja.</p>
<p>Lebih penting, ia membantu pembuat kebijakan memahami implikasi penuh tindakannya, efek potensial pada harga, output, lapangan kerja, dan inflasi (mis. kebijakan sisi-permintaan seperti naiknya belanja pemerintah bisa menaikkan inflasi bila tak diiringi kenaikan kapasitas penawaran).</p>
<ul>
<li><span class="key">Skenario realistis:</span> memadukan S & D memungkinkan kita menentukan bagaimana harga terbentuk di pasar, serta bagaimana jumlah yang diproduksi dan dikonsumsi dipengaruhi perubahan harga. Dengan memasukkan kedua sisi, model bisa mensimulasikan skenario lebih realistis, termasuk reaksi ekonomi terhadap perubahan <span class="key">kebijakan</span> pemerintah, kemajuan teknologi, atau peristiwa global. Ia membantu peneliti dan pembuat kebijakan memahami dampak guncangan atau perubahan kepercayaan konsumen.</li>
<li><span class="key">Peramalan:</span> model S–D mempertimbangkan kapasitas memproduksi dan kesediaan membelanjakan, sehingga menghasilkan ramalan lebih akurat.</li>
</ul>`
            }
          },
          {
            title: { en: 'Incorporating the supply side: PF, PFI, GAP', id: 'Memasukkan sisi penawaran: PF, PFI, GAP' },
            html: {
              en: `<p>How the model brings in supply:</p>
<ul>
<li><span class="key">Production Function (PF):</span> the relation between the inputs (what we have) and the output ($Y$) = what we can produce using those inputs.</li>
<li><span class="key">Different types of PF:</span> depending on the assumptions about scale of input types → elasticity of substitution: zero, unity, constant (any number), and variable; common forms: Cobb–Douglas and CES (constant elasticity of substitution).</li>
<li><span class="key">GAP:</span> the difference between output generated from PF (potential) and output generated from Aggregate Demand (AD) side. It can suggest several important policy implications; e.g., infrastructure and human-capital improvements (supply-side policies) versus fiscal expansion and monetary easing (demand-side policies). To the extent GAP reflects the difference between supply and demand, it can also affect the price level or inflation.</li>
<li><span class="key">Long-term and Technology:</span> in the long-run context, macroeconomic models should incorporate the possibility of technological progress which also requires the analysis of savings and capital flows as both a source of investment and an opportunity to further/sustain growth (endogenous growth model).</li>
</ul>`,
              id: `<p>Cara model memasukkan sisi penawaran:</p>
<ul>
<li><span class="key">Fungsi Produksi (PF):</span> hubungan antara input (yang kita miliki) dan output ($Y$) = yang bisa kita produksi memakai input itu.</li>
<li><span class="key">Berbagai tipe PF:</span> bergantung asumsi tentang skala dan tipe input → elastisitas substitusi: nol, satu, konstan (sebarang angka), dan variabel; bentuk umum: Cobb–Douglas dan CES (constant elasticity of substitution).</li>
<li><span class="key">GAP:</span> selisih antara output dari PF (potensial) dan output dari sisi Permintaan Agregat (AD). Ini menyiratkan beberapa implikasi kebijakan penting; mis. perbaikan infrastruktur dan modal manusia (kebijakan sisi-penawaran) versus ekspansi fiskal dan pelonggaran moneter (kebijakan sisi-permintaan). Sejauh GAP mencerminkan selisih penawaran–permintaan, ia juga memengaruhi tingkat harga atau inflasi.</li>
<li><span class="key">Jangka Panjang & Teknologi:</span> dalam konteks jangka panjang, model makro harus memasukkan kemungkinan kemajuan teknologi yang juga menuntut analisis tabungan dan arus modal sebagai sumber investasi sekaligus peluang menopang pertumbuhan (model pertumbuhan endogen).</li>
</ul>`
            },
            chart: PF_CHART
          },
          {
            title: { en: "Okun's law: linking labour market & goods market", id: "Hukum Okun: menautkan pasar kerja & pasar barang" },
            html: {
              en: `<p><span class="key">Intuition:</span> if output growth is high, unemployment will decrease. <span class="key">Arthur Okun (Okun's law):</span> there is a strong relation between high output growth and lower unemployment; the slope of the line (US case) is $-0.3$, i.e., an increase in the growth rate of 1% decreases the unemployment rate by roughly $-0.3$%. The line crosses the horizontal axis at the point where quarterly output growth is roughly equal to $0.5$%, equivalently when annual output growth is equal to $2$%; in economic terms: it takes an annual growth rate of about $2$% to keep unemployment from rising.</p>
<div class="formula">$$\\Delta u_t = a - b\\,g_t, \\qquad b \\approx 0.3 \\;(\\text{US, quarterly}),\\; g_0 \\approx 2\\% \\;(\\text{annual})$$</div>
<p><span class="key">Implication:</span> the key to decreasing unemployment is a high enough rate of output growth → incorporate it in our model! Okun's law is the empirical bridge that lets the demand side (output growth) talk to the labour side (unemployment) inside the SDM-FF.</p>`,
              id: `<p><span class="key">Intuisi:</span> bila pertumbuhan output tinggi, pengangguran akan turun. <span class="key">Arthur Okun (Hukum Okun):</span> ada hubungan kuat antara pertumbuhan output tinggi dan pengangguran rendah; kemiringan garis (kasus AS) $-0,3$, yakni kenaikan laju pertumbuhan 1% menurunkan tingkat pengangguran sekitar $-0,3$%. Garis memotong sumbu horizontal di mana pertumbuhan output kuartalan kira-kira $0,5$%, setara pertumbuhan tahunan $2$%; secara ekonomi: perlu pertumbuhan tahunan sekitar $2$% agar pengangguran tidak naik.</p>
<div class="formula">$$\\Delta u_t = a - b\\,g_t, \\qquad b \\approx 0{,}3 \\;(\\text{AS, kuartalan}),\\; g_0 \\approx 2\\% \\;(\\text{tahunan})$$</div>
<p><span class="key">Implikasi:</span> kunci menurunkan pengangguran adalah laju pertumbuhan output yang cukup tinggi → masukkan ke model kita! Hukum Okun adalah jembatan empiris yang membuat sisi permintaan (pertumbuhan output) berbicara dengan sisi tenaga kerja (pengangguran) di dalam SDM-FF.</p>`
            },
            chart: OKUN_CHART
          },
          {
            title: { en: 'The SDM with Financial Frictions (FF)', id: 'SDM dengan Friksi Keuangan (FF)' },
            html: {
              en: `<p>The headline model of the week. <span class="key">Adding Financial Frictions (FF)</span> due to information asymmetries: FF often trigger increased capital outflows (negative net inflows) as investors flee risky or inefficient domestic markets, proxied by exchange rate and profit or dividend (captured by $E$ and $Y$ or GDP, respectively).</p>
<p>The schematic flow chart (slide 32) wires the pieces together: the goods block (output $Y$, the production function PF and capacity), the labour block (employment, unemployment via Okun), the price block ($P$, inflation INFLOW), and the <span class="key">financial block</span> (stock, bond, yield, wealth, exchange rate $E$, capital flows) — all feeding back through the FF wedge. Two estimation objects are flagged on the model listing:</p>
<ul>
<li><span class="key">Stochastic equations</span> (the "Chart Box" examples): behavioural relations estimated from data, e.g. an FF/risk term where higher bonds price (lower yield) and weak $E$ (a depreciation) discourage inflows & encourage outflows.</li>
<li><span class="key">Identities</span>: accounting relations that must hold by construction (e.g. national-income identities, stock-flow links), computed rather than estimated.</li>
</ul>
<div class="tip">Exam framing: a full macro-econometric model = <span class="key">behavioural (stochastic) equations</span> + <span class="key">identities</span>, closed by feedback loops. FF enters as a wedge that raises the cost of funds and curtails investment/inflows when balance sheets look risky — connecting financial markets to the real GAP. The accompanying SDM-FF wedge diagram is below.</div>`,
              id: `<p>Model utama minggu ini. <span class="key">Menambahkan Friksi Keuangan (FF)</span> akibat asimetri informasi: FF sering memicu kenaikan arus modal keluar (net inflow negatif) saat investor menjauhi pasar domestik yang berisiko atau tidak efisien, diproksi oleh nilai tukar dan laba atau dividen (ditangkap $E$ dan $Y$ atau PDB).</p>
<p>Diagram alur skematik (slide 32) merangkai bagian-bagiannya: blok barang (output $Y$, fungsi produksi PF dan kapasitas), blok tenaga kerja (lapangan kerja, pengangguran via Okun), blok harga ($P$, inflasi INFLOW), dan <span class="key">blok keuangan</span> (saham, obligasi, yield, kekayaan, nilai tukar $E$, arus modal) — semuanya berumpan-balik lewat baji FF. Dua objek estimasi ditandai pada daftar model:</p>
<ul>
<li><span class="key">Persamaan stokastik</span> (contoh "Chart Box"): relasi perilaku yang diestimasi dari data, mis. suku FF/risiko di mana harga obligasi lebih tinggi (yield lebih rendah) dan $E$ lemah (depresiasi) menghambat inflow & mendorong outflow.</li>
<li><span class="key">Identitas</span>: relasi akuntansi yang harus berlaku secara konstruksi (mis. identitas pendapatan nasional, kaitan stock-flow), dihitung bukan diestimasi.</li>
</ul>
<div class="tip">Bingkai ujian: model makro-ekonometrik lengkap = <span class="key">persamaan perilaku (stokastik)</span> + <span class="key">identitas</span>, ditutup lewat umpan-balik. FF masuk sebagai baji yang menaikkan biaya dana dan menekan investasi/inflow saat neraca tampak berisiko — menghubungkan pasar keuangan ke GAP riil. Diagram baji SDM-FF di bawah.</div>`
            },
            chart: FF_CHART
          },
          {
            title: { en: 'Baseline estimation: RMSE table & static fit', id: 'Estimasi baseline: tabel RMSE & static fit' },
            html: {
              en: `<p>How well does the SDM-FF track the data? Two diagnostics close the block.</p>
<ul>
<li><span class="key">Three-stage least-squares (3SLS) regression</span> (slide 33): a system estimator used because the equations are simultaneous (each variable's residuals are correlated across equations). The output reports, equation by equation (C, I, EXNO, IMO, M, P, E, gY/Yld, Stock, Bond, NETFLOW, N, levY/levS…), the <span class="key">RMSE</span> ("R-squared", and Pr&gt;t/significance). RMSE = root-mean-squared error: the lower it is, the better the equation fits in-sample. The point: a credible model must fit each behavioural relation reasonably, not just one.</li>
<li><span class="key">Static baseline fit</span> (slide 35): a grid of plots overlaying <span class="key">Actual</span> (blue) against the model's <span class="key">Static Fit</span> (red) for every endogenous variable — Y, C, I, EXNO, IMO, EX, M, E, P, u, Stock, Bond, Wealth, Yld, YGB, W, INFLOW, YS. A static fit feeds <em>actual</em> lagged values back in each period (as opposed to a dynamic simulation that feeds the model's own forecasts), so it isolates one-period predictive accuracy. Visually the red tracks the blue closely across goods, prices, labour and financial blocks — evidence the SDM-FF is well-specified.</li>
</ul>
<div class="note">Why this matters for the UAS: the lecturer is showing that the conceptual SDM-FF is not just a diagram — it is a <em>working, estimated</em> macro-econometric system. Be ready to explain (i) why both supply and demand are needed, (ii) how Okun's law and the production function close the real side, (iii) how financial frictions enter as a wedge, and (iv) how a model is validated (RMSE + static/dynamic fit).</div>`,
              id: `<p>Seberapa baik SDM-FF melacak data? Dua diagnostik menutup blok ini.</p>
<ul>
<li><span class="key">Regresi three-stage least-squares (3SLS)</span> (slide 33): estimator sistem yang dipakai karena persamaannya simultan (residual tiap variabel berkorelasi antarpersamaan). Output melaporkan, persamaan demi persamaan (C, I, EXNO, IMO, M, P, E, gY/Yld, Stock, Bond, NETFLOW, N, levY/levS…), nilai <span class="key">RMSE</span> ("R-squared", dan Pr&gt;t/signifikansi). RMSE = akar rata-rata kuadrat galat: makin kecil, makin baik kecocokan in-sample. Intinya: model kredibel harus mencocokkan tiap relasi perilaku secara wajar, bukan hanya satu.</li>
<li><span class="key">Static baseline fit</span> (slide 35): kisi plot yang menumpangkan <span class="key">Actual</span> (biru) terhadap <span class="key">Static Fit</span> model (merah) untuk setiap variabel endogen — Y, C, I, EXNO, IMO, EX, M, E, P, u, Stock, Bond, Wealth, Yld, YGB, W, INFLOW, YS. Static fit memasukkan kembali nilai lag <em>aktual</em> tiap periode (berbeda dari simulasi dinamis yang memakai ramalan model sendiri), sehingga mengisolasi akurasi prediksi satu-periode. Secara visual merah melacak biru dengan erat di seluruh blok barang, harga, tenaga kerja, dan keuangan — bukti SDM-FF terspesifikasi dengan baik.</li>
</ul>
<div class="note">Mengapa penting untuk UAS: dosen menunjukkan bahwa SDM-FF konseptual bukan sekadar diagram — ia sistem makro-ekonometrik yang <em>bekerja dan terestimasi</em>. Siapkan penjelasan (i) mengapa penawaran dan permintaan sama-sama dibutuhkan, (ii) bagaimana hukum Okun dan fungsi produksi menutup sisi riil, (iii) bagaimana friksi keuangan masuk sebagai baji, dan (iv) bagaimana model divalidasi (RMSE + static/dynamic fit).</div>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Expectations & the Phillips curve', id: 'Ekspektasi & kurva Phillips' },
        num: 'F1',
        cards: [
          {
            title: { en: 'Expectations-augmented Phillips curve', id: 'Kurva Phillips diperkaya ekspektasi' },
            html: {
              en: `<div class="formula">$$\\pi_t = \\pi_t^{e} - \\beta\\,(u_t - u^{*}) + \\varepsilon_t$$</div>
<ul>
<li>$\\pi_t$ — actual inflation; $\\pi_t^{e}$ — expected inflation (anchors the SR curve's height)</li>
<li>$u_t - u^{*}$ — unemployment gap; $u^{*}$ — natural / non-accelerating-inflation rate</li>
<li>$\\beta>0$ — slope of the short-run trade-off; $\\varepsilon_t$ — supply shock</li>
</ul>
<p>Long run: $u_t = u^{*}$ and the curve is vertical — no permanent trade-off. Credibility lowers $\\pi^{e}$, shifting the SR curve down and cutting the sacrifice ratio.</p>`,
              id: `<div class="formula">$$\\pi_t = \\pi_t^{e} - \\beta\\,(u_t - u^{*}) + \\varepsilon_t$$</div>
<ul>
<li>$\\pi_t$ — inflasi aktual; $\\pi_t^{e}$ — inflasi ekspektasi (menjangkar tinggi kurva SR)</li>
<li>$u_t - u^{*}$ — kesenjangan pengangguran; $u^{*}$ — tingkat alamiah / NAIRU</li>
<li>$\\beta>0$ — kemiringan trade-off jangka pendek; $\\varepsilon_t$ — guncangan penawaran</li>
</ul>
<p>Jangka panjang: $u_t = u^{*}$ dan kurva vertikal — tak ada trade-off permanen. Kredibilitas menurunkan $\\pi^{e}$, menggeser kurva SR turun dan menekan sacrifice ratio.</p>`
            }
          }
        ]
      },
      {
        heading: { en: 'Beveridge curve & matching', id: 'Kurva Beveridge & matching' },
        num: 'F2',
        cards: [
          {
            title: { en: 'Law of motion of employment', id: 'Hukum gerak lapangan kerja' },
            html: {
              en: `<div class="formula">$$E_t = E_{t-1} - s_t E_{t-1} + H_t$$</div>
<ul>
<li>$E_t$ — employed persons in period $t$; $H_t$ — gross hires in $t$</li>
<li>$s_t$ — separation rate; $s_t E_{t-1}$ — number of separations in $t$</li>
</ul>
<p>Employment falls with separations and rises with gross hires. Hires depend on both vacancies and the unemployed.</p>`,
              id: `<div class="formula">$$E_t = E_{t-1} - s_t E_{t-1} + H_t$$</div>
<ul>
<li>$E_t$ — pekerja yang bekerja pada $t$; $H_t$ — perekrutan kotor pada $t$</li>
<li>$s_t$ — tingkat pemisahan; $s_t E_{t-1}$ — jumlah pemisahan pada $t$</li>
</ul>
<p>Lapangan kerja turun oleh pemisahan dan naik oleh perekrutan kotor. Hires bergantung pada lowongan dan penganggur.</p>`
            }
          },
          {
            title: { en: 'Matching function (levels & ratios)', id: 'Fungsi matching (level & rasio)' },
            html: {
              en: `<div class="formula">$$H_t = \\mu_t\\, V_t^{\\alpha}\\, U_t^{1-\\alpha}$$</div>
<div class="formula">$$e_t(1+n_t) = (1-s_t)\\,e_{t-1} + h_t(1+n_t), \\qquad h_t = \\mu_t\\, v_t^{\\alpha}\\, u_t^{1-\\alpha}$$</div>
<ul>
<li>$V_t, U_t$ — vacancies and unemployed (levels); $v_t, u_t$ — same in ratio to the labour force</li>
<li>$\\mu_t$ — (unobservable) matching efficiency; $\\alpha$ — weight of vacancies in creating matches</li>
<li>$n_t$ — labour-force growth rate; $h_t$ — gross hires in ratio to the LF</li>
</ul>
<p>A fall in $\\mu_t$ (worse matching) shifts the Beveridge curve outward: more unemployment coexists with the same vacancies.</p>`,
              id: `<div class="formula">$$H_t = \\mu_t\\, V_t^{\\alpha}\\, U_t^{1-\\alpha}$$</div>
<div class="formula">$$e_t(1+n_t) = (1-s_t)\\,e_{t-1} + h_t(1+n_t), \\qquad h_t = \\mu_t\\, v_t^{\\alpha}\\, u_t^{1-\\alpha}$$</div>
<ul>
<li>$V_t, U_t$ — lowongan dan penganggur (level); $v_t, u_t$ — sama dalam rasio terhadap angkatan kerja</li>
<li>$\\mu_t$ — efisiensi matching (tak teramati); $\\alpha$ — bobot lowongan dalam menciptakan match</li>
<li>$n_t$ — laju pertumbuhan angkatan kerja; $h_t$ — hires kotor dalam rasio terhadap angkatan kerja</li>
</ul>
<p>Penurunan $\\mu_t$ (matching memburuk) menggeser kurva Beveridge keluar: pengangguran lebih tinggi berdampingan dengan lowongan yang sama.</p>`
            }
          }
        ]
      },
      {
        heading: { en: 'Okun, production & GAP', id: 'Okun, produksi & GAP' },
        num: 'F3',
        cards: [
          {
            title: { en: "Okun's law", id: 'Hukum Okun' },
            html: {
              en: `<div class="formula">$$\\Delta u_t = a - b\\,g_t$$</div>
<ul>
<li>$\\Delta u_t$ — change in unemployment; $g_t$ — output growth rate</li>
<li>US: $b \\approx 0.3$ (quarterly); break-even $g_0 \\approx 2\\%$ annual to hold $u$ constant</li>
</ul>
<p>The empirical link from the goods market (growth) to the labour market (unemployment), used to close the real side of the SDM-FF.</p>`,
              id: `<div class="formula">$$\\Delta u_t = a - b\\,g_t$$</div>
<ul>
<li>$\\Delta u_t$ — perubahan pengangguran; $g_t$ — laju pertumbuhan output</li>
<li>AS: $b \\approx 0{,}3$ (kuartalan); titik impas $g_0 \\approx 2\\%$ tahunan agar $u$ tetap</li>
</ul>
<p>Tautan empiris dari pasar barang (pertumbuhan) ke pasar kerja (pengangguran), dipakai menutup sisi riil SDM-FF.</p>`
            }
          },
          {
            title: { en: 'Production function & output GAP', id: 'Fungsi produksi & GAP output' },
            html: {
              en: `<div class="formula">Cobb–Douglas: $\\;Y = A\\,K^{\\theta} L^{1-\\theta}$</div>
<div class="formula">CES: $\\;Y = A\\left[\\delta K^{\\rho} + (1-\\delta) L^{\\rho}\\right]^{1/\\rho}, \\quad \\sigma = \\tfrac{1}{1-\\rho}$</div>
<div class="formula">Output GAP: $\\;\\text{GAP} = Y^{\\text{PF (potential)}} - Y^{\\text{AD (demand)}}$</div>
<ul>
<li>Elasticity of substitution $\\sigma$: zero, unity (Cobb–Douglas), constant (CES), or variable</li>
<li>$\\text{GAP}>0$ ⇒ demand falls short of capacity (room to grow without inflation); $\\text{GAP}<0$ ⇒ overheating</li>
</ul>`,
              id: `<div class="formula">Cobb–Douglas: $\\;Y = A\\,K^{\\theta} L^{1-\\theta}$</div>
<div class="formula">CES: $\\;Y = A\\left[\\delta K^{\\rho} + (1-\\delta) L^{\\rho}\\right]^{1/\\rho}, \\quad \\sigma = \\tfrac{1}{1-\\rho}$</div>
<div class="formula">GAP output: $\\;\\text{GAP} = Y^{\\text{PF (potensial)}} - Y^{\\text{AD (permintaan)}}$</div>
<ul>
<li>Elastisitas substitusi $\\sigma$: nol, satu (Cobb–Douglas), konstan (CES), atau variabel</li>
<li>$\\text{GAP}>0$ ⇒ permintaan di bawah kapasitas (ruang tumbuh tanpa inflasi); $\\text{GAP}<0$ ⇒ overheating</li>
</ul>`
            }
          },
          {
            title: { en: 'Financial frictions & model validation', id: 'Friksi keuangan & validasi model' },
            html: {
              en: `<div class="formula">FF wedge: $\\;r_{\\text{borrow}} = r^{*} + \\text{premium}(\\text{balance sheet}),\\;\\; \\text{premium} \\uparrow \\Rightarrow \\text{inflows}\\downarrow,\\,\\text{outflows}\\uparrow$</div>
<div class="formula">Net inflows proxied by $E$ (exchange rate) and $Y$/GDP (profit, dividend)</div>
<div class="formula">RMSE $= \\sqrt{\\tfrac{1}{T}\\sum_{t}(\\hat{y}_t - y_t)^2}$ — lower = better in-sample fit (per equation)</div>
<p>Full model = <span class="key">behavioural (stochastic) equations</span> + <span class="key">identities</span>; estimated by 3SLS (simultaneous system); validated by RMSE and static/dynamic baseline fit.</p>`,
              id: `<div class="formula">Baji FF: $\\;r_{\\text{pinjam}} = r^{*} + \\text{premi}(\\text{neraca}),\\;\\; \\text{premi} \\uparrow \\Rightarrow \\text{inflow}\\downarrow,\\,\\text{outflow}\\uparrow$</div>
<div class="formula">Net inflow diproksi oleh $E$ (nilai tukar) dan $Y$/PDB (laba, dividen)</div>
<div class="formula">RMSE $= \\sqrt{\\tfrac{1}{T}\\sum_{t}(\\hat{y}_t - y_t)^2}$ — makin kecil = makin baik fit in-sample (per persamaan)</div>
<p>Model penuh = <span class="key">persamaan perilaku (stokastik)</span> + <span class="key">identitas</span>; diestimasi 3SLS (sistem simultan); divalidasi RMSE dan static/dynamic baseline fit.</p>`
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
            title: { en: '1. Expectations-augmented Phillips curve', id: '1. Kurva Phillips diperkaya ekspektasi' },
            html: {
              en: '<p>Downward SR curves whose height is set by $\\pi^{e}$; a vertical LR curve at $u^{*}$. Raise $\\pi^{e}$ → the whole SR curve shifts up (A→B) with no change in $u^{*}$. Draw this for any question on credibility, the sacrifice ratio, or "why is there no long-run trade-off?"</p>',
              id: '<p>Kurva SR menurun yang tingginya ditentukan $\\pi^{e}$; kurva LR vertikal di $u^{*}$. Naikkan $\\pi^{e}$ → seluruh kurva SR bergeser naik (A→B) tanpa mengubah $u^{*}$. Gambar ini untuk soal kredibilitas, sacrifice ratio, atau "mengapa tak ada trade-off jangka panjang?"</p>'
            },
            chart: PHILLIPS_CHART
          },
          {
            title: { en: '2. The Beveridge curve', id: '2. Kurva Beveridge' },
            html: {
              en: '<p>Convex, downward $v$–$u$ locus. <em>Along</em> the curve = cyclical (recession: $u\\uparrow$, $v\\downarrow$). An <em>outward</em> shift = worse matching efficiency $\\mu$ (structural mismatch). This is the workhorse of the labour-market block; the US/Korea/Europe/Indonesia cases are all read off it.</p>',
              id: '<p>Lokus $v$–$u$ cembung dan menurun. <em>Sepanjang</em> kurva = siklikal (resesi: $u\\uparrow$, $v\\downarrow$). Pergeseran <em>keluar</em> = efisiensi matching $\\mu$ memburuk (mismatch struktural). Ini tulang punggung blok pasar kerja; kasus AS/Korea/Eropa/Indonesia dibaca darinya.</p>'
            },
            chart: BEVERIDGE_CHART
          },
          {
            title: { en: "3. Indonesia's Beveridge curve (qualitative)", id: '3. Kurva Beveridge Indonesia (kualitatif)' },
            html: {
              en: '<p>No JOLTS-equivalent vacancy series exists, so the curve is qualitative: BPS unemployment + survey evidence on unfilled vacancies. The reading is an outward/rightward shift — more vacancies go unfilled at any $u$, and the problem is structural, not merely cyclical.</p>',
              id: '<p>Tak ada deret lowongan padanan JOLTS, sehingga kurva bersifat kualitatif: pengangguran BPS + bukti survei lowongan tak terisi. Bacaannya pergeseran keluar/ke kanan — lebih banyak lowongan tak terisi pada tiap $u$, dan masalahnya struktural, bukan sekadar siklikal.</p>'
            },
            chart: BEVERIDGE_ID_CHART
          },
          {
            title: { en: "4. Okun's law", id: '4. Hukum Okun' },
            html: {
              en: '<p>Negative line in $(g, \\Delta u)$ space, slope $\\approx -0.3$ (US), crossing zero at $g_0\\approx 2\\%$ annual. Use it to argue that decreasing unemployment requires growth above the break-even rate, and to link the goods market to the labour market in the SDM-FF.</p>',
              id: '<p>Garis negatif di ruang $(g, \\Delta u)$, kemiringan $\\approx -0,3$ (AS), memotong nol di $g_0\\approx 2\\%$ tahunan. Pakai untuk berargumen bahwa menurunkan pengangguran perlu pertumbuhan di atas titik impas, dan menautkan pasar barang ke pasar kerja dalam SDM-FF.</p>'
            },
            chart: OKUN_CHART
          },
          {
            title: { en: '5. Production function & output GAP', id: '5. Fungsi produksi & GAP output' },
            html: {
              en: '<p>Concave PF(L) gives potential output; AD pins actual output below it. The shaded GAP = potential − AD-output is the supply–demand gap that drives policy choice (supply-side vs demand-side) and price/inflation pressure.</p>',
              id: '<p>PF(L) yang cekung memberi output potensial; AD menentukan output aktual di bawahnya. GAP berbayang = potensial − output-AD adalah kesenjangan penawaran–permintaan yang menggerakkan pilihan kebijakan (sisi-penawaran vs sisi-permintaan) dan tekanan harga/inflasi.</p>'
            },
            chart: PF_CHART
          },
          {
            title: { en: '6. SDM-FF wedge', id: '6. Baji SDM-FF' },
            html: {
              en: '<p>Funds supply (S) vs investment demand (D). Financial frictions add a premium → the effective supply (S+FF) sits above S, so equilibrium quantity falls ($Q^{*}\\to Q_{FF}$) and the cost of funds rises ($r^{*}\\to r_{FF}$). The wedge is exactly how FF curtails inflows/investment and feeds back to the real GAP.</p>',
              id: '<p>Penawaran dana (S) vs permintaan investasi (D). Friksi keuangan menambah premi → penawaran efektif (S+FF) di atas S, sehingga kuantitas keseimbangan turun ($Q^{*}\\to Q_{FF}$) dan biaya dana naik ($r^{*}\\to r_{FF}$). Baji ini persis cara FF menekan inflow/investasi dan berumpan-balik ke GAP riil.</p>'
            },
            chart: FF_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Why is the long-run Phillips curve vertical, and what does credibility do to the short-run curve?',
             id: 'Mengapa kurva Phillips jangka panjang vertikal, dan apa pengaruh kredibilitas pada kurva jangka pendek?' },
        answer: [
          { en: 'Start from $\\pi_t = \\pi_t^{e} - \\beta(u_t - u^{*})$. In the long run expectations are correct, $\\pi_t = \\pi_t^{e}$, so the gap term must be zero: $u_t = u^{*}$ regardless of inflation. The locus of long-run outcomes is therefore a vertical line at the natural rate — there is no permanent inflation-for-jobs trade-off.',
            id: 'Mulai dari $\\pi_t = \\pi_t^{e} - \\beta(u_t - u^{*})$. Jangka panjang ekspektasi benar, $\\pi_t = \\pi_t^{e}$, sehingga suku kesenjangan harus nol: $u_t = u^{*}$ berapa pun inflasinya. Lokus hasil jangka panjang adalah garis vertikal di tingkat alamiah — tak ada trade-off inflasi-vs-pekerjaan permanen.' },
          { en: 'Credibility lowers $\\pi^{e}$ directly, which shifts the whole short-run curve DOWN. A credible bank can therefore disinflate with a smaller rise in unemployment (lower sacrifice ratio). An incredible bank leaves $\\pi^{e}$ high and must engineer a deep recession to bring inflation down.',
            id: 'Kredibilitas menurunkan $\\pi^{e}$ langsung, yang menggeser seluruh kurva jangka pendek TURUN. Bank yang kredibel bisa disinflasi dengan kenaikan pengangguran lebih kecil (sacrifice ratio rendah). Bank yang tak dipercaya membiarkan $\\pi^{e}$ tinggi dan harus merekayasa resesi dalam untuk menurunkan inflasi.' }
        ],
        tip: { en: 'Always pair the algebra with the diagram: vertical LRPC at $u^{*}$, family of SR curves indexed by $\\pi^{e}$.',
               id: 'Selalu pasangkan aljabar dengan diagram: LRPC vertikal di $u^{*}$, keluarga kurva SR diindeks $\\pi^{e}$.' }
      },
      {
        type: 'scenario',
        q: { en: 'After a recession ends, an economy shows the same unemployment rate as five years earlier but far more unfilled vacancies. What has happened to its Beveridge curve and what kind of policy does it call for?',
             id: 'Setelah resesi berakhir, sebuah ekonomi menunjukkan tingkat pengangguran sama seperti lima tahun lalu tetapi jauh lebih banyak lowongan tak terisi. Apa yang terjadi pada kurva Beveridge-nya dan kebijakan jenis apa yang diperlukan?' },
        answer: [
          { en: 'At the same $u$ but higher $v$, the point lies up-and-to-the-right of the old curve: the Beveridge curve has shifted OUTWARD. From the matching function $H = \\mu V^{\\alpha} U^{1-\\alpha}$, an outward shift means matching efficiency $\\mu$ has fallen — the same pool of vacancies and unemployed produces fewer matches.',
            id: 'Pada $u$ sama tetapi $v$ lebih tinggi, titiknya berada ke kanan-atas kurva lama: kurva Beveridge bergeser KELUAR. Dari fungsi matching $H = \\mu V^{\\alpha} U^{1-\\alpha}$, pergeseran keluar berarti efisiensi matching $\\mu$ turun — kumpulan lowongan dan penganggur yang sama menghasilkan lebih sedikit match.' },
          { en: 'This is structural mismatch, not a cyclical (demand) shortfall. Demand-side stimulus (looser money, fiscal expansion) will not fix it because the unemployed cannot fill the vacancies (skills/location/field). The right tools are active labour-market policies: retraining, vocational education aligned to vacancies, relocation/mobility support, and better job-matching platforms.',
            id: 'Ini mismatch struktural, bukan kekurangan siklikal (permintaan). Stimulus sisi-permintaan (uang longgar, ekspansi fiskal) tidak menyelesaikannya karena penganggur tak bisa mengisi lowongan (keterampilan/lokasi/bidang). Alat yang tepat: kebijakan pasar kerja aktif: pelatihan ulang, vokasi yang selaras lowongan, dukungan relokasi/mobilitas, dan platform pencocokan kerja yang lebih baik.' }
        ],
        tip: { en: 'This is exactly Indonesia\'s diagnosis: ~46% of firms cannot find candidates while 7.28m are unemployed (Feb 2025).',
               id: 'Inilah diagnosis Indonesia: ~46% perusahaan tak menemukan kandidat sementara 7,28 juta menganggur (Feb 2025).' }
      },
      {
        type: 'quant',
        q: { en: 'A country grows at 4% per year. Using Okun\'s law with a US-style break-even growth of 2% and slope $b$ such that 1pp extra annual growth lowers $u$ by 0.5pp, by how much does unemployment change in a year?',
             id: 'Sebuah negara tumbuh 4% per tahun. Dengan hukum Okun, pertumbuhan impas gaya-AS 2% dan kemiringan $b$ sehingga 1pp pertumbuhan tahunan ekstra menurunkan $u$ sebesar 0,5pp, berapa perubahan pengangguran dalam setahun?' },
        answer: [
          { en: 'Okun in change form: $\\Delta u = -b\\,(g - g_0)$ where $g_0 = 2\\%$ is the break-even growth that holds $u$ constant, $g = 4\\%$, and $b = 0.5$ (per the stated annual sensitivity).',
            id: 'Okun bentuk perubahan: $\\Delta u = -b\\,(g - g_0)$ dengan $g_0 = 2\\%$ pertumbuhan impas yang menjaga $u$ tetap, $g = 4\\%$, dan $b = 0,5$ (sesuai sensitivitas tahunan yang dinyatakan).' },
          { en: 'Compute: $\\Delta u = -0.5 \\times (4 - 2) = -0.5 \\times 2 = -1.0$ percentage point. Unemployment falls by about 1pp over the year. Intuition: only growth ABOVE the ~2% break-even rate actually reduces unemployment; the first 2% just absorbs labour-force growth and productivity gains.',
            id: 'Hitung: $\\Delta u = -0,5 \\times (4 - 2) = -0,5 \\times 2 = -1,0$ poin persentase. Pengangguran turun sekitar 1pp dalam setahun. Intuisi: hanya pertumbuhan DI ATAS titik impas ~2% yang benar-benar menurunkan pengangguran; 2% pertama hanya menyerap pertumbuhan angkatan kerja dan peningkatan produktivitas.' }
        ],
        tip: { en: 'In the US quarterly form the slope is ~0.3 and break-even is ~0.5% per quarter (≈2% annual). Match the slope to the data frequency.',
               id: 'Dalam bentuk kuartalan AS kemiringan ~0,3 dan impas ~0,5% per kuartal (≈2% tahunan). Sesuaikan kemiringan dengan frekuensi data.' }
      },
      {
        type: 'application',
        q: { en: 'Indonesia added 4.8 million jobs in 2024 and pushed open unemployment below 5%, yet most economists call this a "quality trap". Explain, linking it to mismatch and productivity.',
             id: 'Indonesia menambah 4,8 juta pekerjaan pada 2024 dan menekan pengangguran terbuka di bawah 5%, namun sebagian besar ekonom menyebutnya "jebakan kualitas". Jelaskan, kaitkan dengan mismatch dan produktivitas.' },
        answer: [
          { en: 'The headline (low open unemployment) hides the composition: >80% of the new jobs were in household enterprises — street vendors, home-based and family-run work. Real wages have not grown since 2018 and ~30% of the workforce works under 35 hours/week (underemployment). So a falling unemployment rate does not signal a healthy labour market — it reflects absorption into low-quality, informal work.',
            id: 'Angka utama (pengangguran terbuka rendah) menyembunyikan komposisi: >80% pekerjaan baru di usaha rumah tangga — pedagang kaki lima, kerja rumahan dan keluarga. Upah riil tak tumbuh sejak 2018 dan ~30% tenaga kerja bekerja di bawah 35 jam/minggu (underemployment). Jadi pengangguran yang turun tak menandakan pasar kerja sehat — ia mencerminkan penyerapan ke kerja informal berkualitas rendah.' },
          { en: 'Connect to mismatch: vertical (graduates overqualified for informal work, underqualified for scarce high-skill jobs — BA+ unemployment rose 4.8%→6.23%), horizontal (digital/green/technical skills undersupplied), and spatial (remote/rural workers locked out). All three depress measured labour productivity — Indonesia\'s productivity-growth trend turned negative in 2020–2023. The policy fix is structural (ALMPs, curriculum reform, mobility), not just demand stimulus.',
            id: 'Kaitkan ke mismatch: vertikal (lulusan overqualified untuk kerja informal, underqualified untuk pekerjaan high-skill langka — pengangguran S1+ naik 4,8%→6,23%), horizontal (keterampilan digital/hijau/teknis kurang), dan spasial (pekerja terpencil/pedesaan terkunci). Ketiganya menekan produktivitas tenaga kerja terukur — tren pertumbuhan produktivitas Indonesia negatif pada 2020–2023. Solusinya struktural (ALMP, reformasi kurikulum, mobilitas), bukan sekadar stimulus permintaan.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Why does the lecturer insist a demand-only model is incomplete, and how do financial frictions (FF) enter the supply–demand model?',
             id: 'Mengapa dosen bersikeras model permintaan-saja tidak lengkap, dan bagaimana friksi keuangan (FF) masuk ke model penawaran–permintaan?' },
        answer: [
          { en: 'A one-sided model misses the interaction that actually sets prices, output and employment. Demand-only analysis cannot tell you whether stimulus raises real output or just inflation — that depends on supply capacity. Bringing in the supply side via the production function lets you compute the GAP = potential output (PF) − AD-generated output, which is what tells policymakers whether to use supply-side tools (infrastructure, human capital) or demand-side tools (fiscal/monetary), and how much inflation pressure to expect.',
            id: 'Model satu-sisi melewatkan interaksi yang sebenarnya menetapkan harga, output, dan lapangan kerja. Analisis permintaan-saja tak bisa memberi tahu apakah stimulus menaikkan output riil atau hanya inflasi — itu bergantung kapasitas penawaran. Memasukkan sisi penawaran lewat fungsi produksi memungkinkan menghitung GAP = output potensial (PF) − output dari AD, yang memberi tahu pembuat kebijakan memakai alat sisi-penawaran (infrastruktur, modal manusia) atau sisi-permintaan (fiskal/moneter), dan seberapa besar tekanan inflasi yang diharapkan.' },
          { en: 'FF enter as a wedge driven by information asymmetries: when balance sheets look risky, a risk premium is added to the cost of funds, so equilibrium quantity (credit/capital inflows) falls and the rate rises. The lecturer proxies net inflows by the exchange rate $E$ and profit/dividend ($Y$/GDP). The full SDM-FF is a macro-econometric system of behavioural (stochastic) equations plus identities, estimated by 3SLS and validated by RMSE and static-fit plots.',
            id: 'FF masuk sebagai baji yang didorong asimetri informasi: saat neraca tampak berisiko, premi risiko ditambahkan ke biaya dana, sehingga kuantitas keseimbangan (kredit/inflow modal) turun dan suku bunga naik. Dosen memproksi net inflow dengan nilai tukar $E$ dan laba/dividen ($Y$/PDB). SDM-FF penuh adalah sistem makro-ekonometrik persamaan perilaku (stokastik) plus identitas, diestimasi 3SLS dan divalidasi RMSE serta plot static-fit.' }
        ],
        tip: { en: 'Remember the two estimation objects: stochastic equations (estimated behaviour) vs identities (true by accounting).',
               id: 'Ingat dua objek estimasi: persamaan stokastik (perilaku diestimasi) vs identitas (benar secara akuntansi).' }
      },
      {
        type: 'scenario',
        q: { en: 'Equity markets hit record highs during the April 2026 Iran war even as the IMF calls the global outlook "gloomy and fragile". Reconcile the two using the expectations theme.',
             id: 'Pasar saham mencapai rekor tertinggi selama perang Iran April 2026 padahal IMF menyebut prospek global "suram dan rapuh". Damaikan keduanya memakai tema ekspektasi.' },
        answer: [
          { en: 'The two coexist because market expectations and macro expectations are formed differently. The market is upbeat: investors brush off geopolitics, betting on strong earnings, AI demand and a contained conflict; S&P 500 Q2 estimates were even revised up to 20%. Crucially, as the lecturer\'s Bloomberg annotation says, "flows have always trumped fundamentals" — many investors ignore balance sheets and just keep buying, which is how bubbles form.',
            id: 'Keduanya berdampingan karena ekspektasi pasar dan ekspektasi makro terbentuk berbeda. Pasar optimis: investor mengabaikan geopolitik, bertaruh pada laba kuat, permintaan AI, dan konflik terkendali; estimasi Q2 S&P 500 bahkan direvisi naik ke 20%. Yang krusial, seperti anotasi Bloomberg dosen, "arus selalu mengalahkan fundamental" — banyak investor mengabaikan neraca dan terus membeli, begitulah gelembung terbentuk.' },
          { en: 'The macro view is gloomy: the IMF and World Bank warn of a "wasted decade", 2026 growth ~2.6% (slowest since 2008), high debt, geopolitical risk and protectionism. The reconciliation: markets are pricing optimistic, momentum-driven expectations that may be complacent about energy shocks, inflation and recession. When expectations are flow-driven rather than fundamentals-driven, asset prices can decouple from the real economy until a correction forces them back — the same expectations logic that drives the Phillips curve drives asset bubbles.',
            id: 'Pandangan makro suram: IMF dan World Bank memperingatkan "dekade terbuang", pertumbuhan 2026 ~2,6% (terlambat sejak 2008), utang tinggi, risiko geopolitik dan proteksionisme. Pendamaiannya: pasar memberi harga ekspektasi optimis berbasis momentum yang mungkin lengah terhadap guncangan energi, inflasi, dan resesi. Saat ekspektasi digerakkan arus alih-alih fundamental, harga aset bisa terlepas dari ekonomi riil sampai koreksi memaksanya kembali — logika ekspektasi yang sama yang menggerakkan kurva Phillips menggerakkan gelembung aset.' }
        ]
      }
    ]
  };
})();
