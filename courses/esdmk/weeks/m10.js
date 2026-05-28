/* ============================================================================
   ESDMK · Week 10 — Investment in Human Capital & Training
   Bilingual (EN + ID). Registers itself on window.ESDMK_WEEKS.m10.
   Sources: Lecturer deck (Wisana 2024) + Becker, Mincer (1974), Spence (1973),
   Ehrenberg–Smith Ch.9. Maps to UAS Topic 1.

   Optimal-schooling diagram geometry (s on x-axis, %/return on y-axis):
     MRR1 (baseline)  : ρ(s) = 14 − 0.5s   ⇒ r=6% gives s*=16
     MRR2 (low ability): ρ(s) = 12 − 0.5s  ⇒ same r gives s*=12
     MCC1 r=6%        : horizontal
     MCC2 r=10% (high discount/opp.cost): horizontal higher
   ============================================================================ */
(function () {
  window.ESDMK_WEEKS = window.ESDMK_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16', GREEN = '#15803d';
  var GAIN = 'rgba(14,143,184,.16)';
  var LOSS = 'rgba(192,57,43,.16)';

  /* ---- Chart 1: Alternative earnings streams (HS vs Uni) -------------------- */
  var STREAMS_CHART = { panels: [{
    title: 'Earnings streams: HS (A) vs University (B) over a lifetime',
    w: 460, h: 320,
    x: { min: 18, max: 65, label: 'Age' },
    y: { min: -2, max: 10, label: 'Earnings (annualised)' },
    curves: [
      { id: 'zero', kind: 'hline', y: 0, color: '#999' },
      { kind: 'path', pts: [[18, 2.5], [25, 3.0], [35, 3.4], [45, 3.6], [55, 3.5], [65, 3.2]], smooth: true, color: TEAL, label: 'A: HS earnings' },
      { kind: 'path', pts: [[18, -1.2], [22, 0], [25, 4.5], [35, 6.8], [45, 8.2], [55, 8.4], [65, 7.6]], smooth: true, color: RED, label: 'B: University earnings' }
    ],
    notes: [
      { x: 20.5, y: -1.6, text: 'forgone earnings + tuition (18–22)', color: '#777', anchor: 'middle', size: 10 },
      { x: 45, y: 5.0, text: 'gross benefit B − A', color: GREEN, anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 2: Optimal schooling — MRR = MCC ------------------------------- */
  var OPT_CHART = { panels: [{
    title: 'Optimal schooling: s* where MRR(s) = r (MCC)',
    w: 460, h: 320,
    x: { min: 0, max: 20, label: 'Years of schooling s' },
    y: { min: 0, max: 16, label: 'Rate of return / discount rate (%)' },
    curves: [
      { id: 'MRR',  kind: 'line', p1: [0, 14], p2: [20, 4], color: RED,   label: 'MRR(s)' },
      { id: 'MCC1', kind: 'hline', y: 6,  color: TEAL,  label: 'MCC = 6% (r₁)' },
      { id: 'MCC2', kind: 'hline', y: 10, color: AMBER, label: 'MCC = 10% (r₂↑)' }
    ],
    points: [
      { on: ['MRR', 'MCC1'], guideX: 's* = 16', dot: true },
      { on: ['MRR', 'MCC2'], guideX: "s' = 8",  dot: true }
    ],
    notes: [
      { x: 14, y: 12.5, text: 'r↑ or opportunity cost↑ ⇒ MCC↑ ⇒ s* falls', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 3: General vs specific training ------------------------------- */
  var TRAIN_CHART = { panels: [
    { title: 'General training: worker pays (W₁ < MRP₀); reaps W₂ = MRP₂',
      w: 380, h: 280, x: { min: 0, max: 4, label: 'time' }, y: { min: 0, max: 10, label: 'Wage / MRP' },
      curves: [
        { id: 'MRP0', kind: 'hline', y: 5, color: '#999', label: 'MRP₀ = W₀ (no training)' },
        { kind: 'path', pts: [[0.2, 5], [1, 5], [1, 2.5], [2, 2.5], [2, 8], [3.8, 8]], color: RED, label: 'wage path' }
      ],
      notes: [
        { x: 1.5, y: 1.6, text: 'period 1: training cost', color: LOSS, anchor: 'middle', size: 10 },
        { x: 3.0, y: 9.0, text: 'period 2: W₂ = MRP₂ (general skill)', color: GAIN, anchor: 'middle', size: 10 }
      ] },
    { title: 'Specific training: firm shares cost & benefit',
      w: 380, h: 280, x: { min: 0, max: 4, label: 'time' }, y: { min: 0, max: 10, label: 'Wage / MRP' },
      curves: [
        { id: 'MRP0', kind: 'hline', y: 5, color: '#999', label: 'MRP₀ = W₀' },
        { kind: 'path', pts: [[0.2, 5], [1, 5], [1, 4], [2, 4], [2, 6.5], [3.8, 6.5]], color: TEAL, label: 'wage path' },
        { id: 'MRP1', kind: 'hline', y: 2.5, color: '#bbb', label: 'MRP₁ (training)' },
        { id: 'MRP2', kind: 'hline', y: 8.5, color: '#bbb', label: 'MRP₂ (after)' }
      ],
      notes: [
        { x: 1.5, y: 3.2, text: 'MRP₁ < W₁ < W₀: cost shared', color: '#777', anchor: 'middle', size: 9 },
        { x: 3.0, y: 7.5, text: 'W₀ < W₂ < MRP₂: benefit shared', color: '#777', anchor: 'middle', size: 9 }
      ] }
  ] };

  window.ESDMK_WEEKS.m10 = {
    id: 'm10',
    label: { en: 'Week 10', id: 'Pertemuan 10' },
    title: { en: 'Investment in Human Capital & Training', id: 'Investasi Modal Manusia & Pelatihan' },
    subtitle: {
      en: 'The schooling decision as a present-value problem, optimal years of schooling, the Mincer earnings function, the signalling debate, and who pays for general vs specific training.',
      id: 'Keputusan sekolah sebagai persoalan nilai sekarang, lama sekolah optimal, fungsi pendapatan Mincer, debat sinyal, dan siapa yang membayar pelatihan umum vs khusus.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Schooling as investment', id: 'Sekolah sebagai investasi' },
        num: '1',
        cards: [
          {
            title: { en: 'Costs and benefits', id: 'Biaya dan manfaat' },
            html: {
              en: `<p>Education is an <span class="key">investment</span>: the worker pays a cost up front and reaps higher earnings later. Three costs:</p>
<ul>
<li><span class="key">Direct cost</span> — tuition, books, transport.</li>
<li><span class="key">Opportunity cost</span> — the wage the worker <em>could have</em> earned during the years she is studying. This is usually the biggest cost.</li>
<li><span class="key">Psychic cost</span> — disutility from studying, family pressure to start earning, mismatch with abilities.</li>
</ul>
<p>And four benefits: higher expected earnings, lower expected unemployment, more pleasant jobs, plus non-monetary "consumption" benefits (status, autonomy).</p>
<div class="note">The lecturer's stylised facts about <span class="key">age-earnings profiles</span>: (i) higher education shifts the profile up; (ii) earnings rise fastest when young; (iii) profiles <em>fan out</em> with age (more education → steeper); (iv) male profiles are more concave than female. These are the empirical regularities the present-value framework has to reproduce.</div>`,
              id: `<p>Pendidikan adalah <span class="key">investasi</span>: pekerja membayar biaya di depan dan menuai pendapatan lebih tinggi nanti. Tiga biaya:</p>
<ul>
<li><span class="key">Biaya langsung</span> — kuliah, buku, transportasi.</li>
<li><span class="key">Biaya kesempatan (opportunity cost)</span> — upah yang <em>bisa</em> diperoleh pekerja selama tahun-tahun belajar. Biasanya biaya terbesar.</li>
<li><span class="key">Biaya psikis</span> — disutilitas belajar, tekanan keluarga untuk mulai bekerja, ketidakcocokan dengan kemampuan.</li>
</ul>
<p>Dan empat manfaat: pendapatan ekspektasi lebih tinggi, pengangguran ekspektasi lebih rendah, pekerjaan lebih menyenangkan, plus manfaat "konsumsi" non-moneter (status, otonomi).</p>
<div class="note">Fakta stilasi dosen tentang <span class="key">profil usia-pendapatan</span>: (i) pendidikan lebih tinggi menggeser profil ke atas; (ii) pendapatan naik tercepat saat muda; (iii) profil <em>menyebar</em> dengan usia (pendidikan lebih → lebih curam); (iv) profil laki-laki lebih cekung daripada perempuan. Inilah keteraturan empiris yang harus direproduksi kerangka nilai sekarang.</div>`
            },
            chart: STREAMS_CHART
          }
        ]
      },

      {
        heading: { en: 'The present-value (NPV) framework', id: 'Kerangka nilai sekarang (NPV)' },
        num: '2',
        cards: [
          {
            title: { en: 'NPV of high-school vs university', id: 'NPV SMA vs universitas' },
            html: {
              en: `<p>An 18-year-old facing the choice "work after high school" vs "go to university" compares the present value of each lifetime earnings stream at discount rate $r$:</p>
<div class="formula">$$\\text{ENPV}(\\text{HS}) = \\sum_{t=18}^{65} \\frac{w_t^{\\text{HS}}}{(1+r)^{t-18}},$$</div>
<div class="formula">$$\\text{ENPV}(\\text{Uni}) = \\sum_{t=22}^{65} \\frac{w_t^{\\text{Uni}}}{(1+r)^{t-18}} - \\sum_{t=18}^{21} \\frac{C_t + w_t^{\\text{HS}}}{(1+r)^{t-18}}.$$</div>
<p>The second equation deducts (i) tuition $C_t$ and (ii) the forgone HS earnings during the four study years. <span class="key">Decision rule</span>: choose university iff $\\text{ENPV}(\\text{Uni}) > \\text{ENPV}(\\text{HS})$.</p>
<p>Equivalently, define the <span class="key">internal rate of return (IRR)</span> $R$ as the discount rate that makes the two equal:</p>
<div class="formula">$$\\text{ENPV}(\\text{Uni}; R) - \\text{ENPV}(\\text{HS}; R) = 0.$$</div>
<p>Go to university whenever $R > r$ — the project's own return beats the market rate. This is exactly the NPV-vs-IRR equivalence familiar from corporate finance, applied to a human asset.</p>`,
              id: `<p>Seorang berusia 18 tahun yang memilih "bekerja setelah SMA" vs "lanjut kuliah" membandingkan nilai sekarang dari masing-masing arus pendapatan seumur hidup pada tingkat diskon $r$:</p>
<div class="formula">$$\\text{ENPV}(\\text{HS}) = \\sum_{t=18}^{65} \\frac{w_t^{\\text{HS}}}{(1+r)^{t-18}},$$</div>
<div class="formula">$$\\text{ENPV}(\\text{Uni}) = \\sum_{t=22}^{65} \\frac{w_t^{\\text{Uni}}}{(1+r)^{t-18}} - \\sum_{t=18}^{21} \\frac{C_t + w_t^{\\text{HS}}}{(1+r)^{t-18}}.$$</div>
<p>Persamaan kedua mengurangi (i) uang kuliah $C_t$ dan (ii) pendapatan SMA yang hilang selama empat tahun studi. <span class="key">Aturan keputusan</span>: pilih universitas iff $\\text{ENPV}(\\text{Uni}) > \\text{ENPV}(\\text{HS})$.</p>
<p>Setara, definisikan <span class="key">tingkat pengembalian internal (IRR)</span> $R$ sebagai tingkat diskon yang menyamakan keduanya:</p>
<div class="formula">$$\\text{ENPV}(\\text{Uni}; R) - \\text{ENPV}(\\text{HS}; R) = 0.$$</div>
<p>Lanjut kuliah kapan pun $R > r$ — return proyek itu sendiri mengalahkan tingkat pasar. Ini persis ekivalensi NPV-IRR yang dikenal dari keuangan korporat, diterapkan pada aset manusia.</p>`
            }
          },
          {
            title: { en: 'Worked example: Stella (Tutorial Week 10)', id: 'Contoh terurai: Stella (Tutorial Minggu 10)' },
            html: {
              en: `<p>Stella lives three periods. <em>No schooling</em>: she earns 5,000 / 6,000 / 7,000. <em>With schooling</em>: she pays 2,000 in period 1 (borrowed; earns 0 that period) and earns 10,000 in period 2 and 12,000 in period 3. Market rate $r = 10\\%$.</p>
<div class="formula">$\\text{NPV}_{\\text{no}} = 5000 + \\dfrac{6000}{1.10} + \\dfrac{7000}{1.21} = 5000 + 5454.55 + 5785.12 = \\mathbf{16{,}239.67}$</div>
<div class="formula">$\\text{NPV}_{\\text{yes}} = -2000 + \\dfrac{10000}{1.10} + \\dfrac{12000}{1.21} = -2000 + 9090.91 + 9917.36 = \\mathbf{17{,}008.27}$</div>
<p>Net gain from schooling = $17{,}008.27 - 16{,}239.67 = +768.60$. Since this is positive, Stella <span class="key">should pursue schooling</span> at the market rate.</p>
<p><span class="key">IRR $R$</span> solves $-7000 + \\dfrac{4000}{1+R} + \\dfrac{5000}{(1+R)^2} = 0$ (using the incremental cash flows: period 1: $-2000-5000 = -7000$; period 2: $10000-6000 = +4000$; period 3: $12000-7000 = +5000$).</p>
<div class="formula">Quadratic in $x = 1/(1+R)$: $\\;5000\\,x^2 + 4000\\,x - 7000 = 0$, &nbsp;$\\Rightarrow x = \\dfrac{-4000 + \\sqrt{16{,}000{,}000 + 140{,}000{,}000}}{10000} = \\dfrac{-4000 + 12{,}490}{10000} \\approx 0.8490.$</div>
<div class="formula">$\\Rightarrow 1+R = 1/0.8490 \\approx 1.1779,\\;\\; R \\approx \\mathbf{17.8\\%}.$</div>
<p>The IRR comfortably exceeds the 10% market rate, confirming the NPV decision. <em>(All three figures cross-check: positive NPV gap, $R > r$, and the same sign by both decision rules.)</em></p>`,
              id: `<p>Stella hidup tiga periode. <em>Tanpa sekolah</em>: pendapatan 5.000 / 6.000 / 7.000. <em>Dengan sekolah</em>: membayar 2.000 di periode 1 (pinjam; pendapatan 0 periode itu) dan menerima 10.000 di periode 2 dan 12.000 di periode 3. Tingkat pasar $r = 10\\%$.</p>
<div class="formula">$\\text{NPV}_{\\text{tdk}} = 5000 + \\dfrac{6000}{1{,}10} + \\dfrac{7000}{1{,}21} = 5000 + 5454{,}55 + 5785{,}12 = \\mathbf{16.239{,}67}$</div>
<div class="formula">$\\text{NPV}_{\\text{ya}} = -2000 + \\dfrac{10000}{1{,}10} + \\dfrac{12000}{1{,}21} = -2000 + 9090{,}91 + 9917{,}36 = \\mathbf{17.008{,}27}$</div>
<p>Selisih = $17.008{,}27 - 16.239{,}67 = +768{,}60$. Karena positif, Stella <span class="key">sebaiknya bersekolah</span> pada tingkat pasar.</p>
<p><span class="key">IRR $R$</span> selesaikan $-7000 + \\dfrac{4000}{1+R} + \\dfrac{5000}{(1+R)^2} = 0$ (arus inkremen: per-1: $-7000$; per-2: $+4000$; per-3: $+5000$).</p>
<div class="formula">Kuadratik di $x = 1/(1+R)$: $\\;5000\\,x^2 + 4000\\,x - 7000 = 0$, $x \\approx 0{,}8490$, sehingga $R \\approx \\mathbf{17{,}8\\%}.$</div>
<p>IRR jauh melebihi tingkat pasar 10%, mengonfirmasi keputusan NPV.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Optimal years of schooling: MRR = r', id: 'Lama sekolah optimal: MRR = r' },
        num: '3',
        cards: [
          {
            title: { en: 'The marginal-return rule', id: 'Aturan return marjinal' },
            html: {
              en: `<p>Generalise from two choices to a continuous decision: choose years of schooling $s$ to maximise lifetime wealth. The first-order condition equates the <span class="key">marginal rate of return (MRR)</span> on the last year of schooling to the <span class="key">marginal cost of capital (MCC)</span>:</p>
<div class="formula">$$\\text{MRR}(s^{*}) = \\frac{w'(s^{*})}{w(s^{*})} = r = \\text{MCC}.$$</div>
<p>MRR(s) slopes <em>down</em> in $s$: extra years yield smaller and smaller proportional wage gains (diminishing returns to schooling). MCC is horizontal at $r$ when the worker can borrow at the market rate. The optimum is where they cross — the <span class="key">"two-curves" graph</span> below.</p>`,
              id: `<p>Perumum dari dua pilihan ke keputusan kontinu: pilih lama sekolah $s$ untuk memaksimalkan kekayaan seumur hidup. Kondisi orde-pertama menyamakan <span class="key">tingkat pengembalian marjinal (MRR)</span> dari tahun sekolah terakhir dengan <span class="key">biaya marjinal modal (MCC)</span>:</p>
<div class="formula">$$\\text{MRR}(s^{*}) = \\frac{w'(s^{*})}{w(s^{*})} = r = \\text{MCC}.$$</div>
<p>MRR(s) miring <em>turun</em> di $s$: tahun ekstra menghasilkan tambahan upah proporsional yang makin kecil (diminishing returns). MCC horizontal pada $r$ ketika pekerja bisa pinjam pada tingkat pasar. Optimum di perpotongannya — <span class="key">grafik "dua kurva"</span> di bawah.</p>`
            },
            chart: OPT_CHART
          },
          {
            title: { en: 'How discount rate and opportunity cost shift s*', id: 'Bagaimana tingkat diskon dan opportunity cost menggeser s*' },
            html: {
              en: `<p>The UAS asks specifically: <em>"Graph on how higher discount and opportunity costs shift the optimal schooling years."</em> The mechanics:</p>
<ul>
<li><span class="key">Higher discount rate $r$ (more impatient, credit-constrained, present-orientated).</span> MCC shifts <em>up</em>; the new intersection moves <em>left</em>; $s^{*}$ <span class="key">falls</span>. Low-income Indonesian households face a high effective $r$ because they cannot borrow against future earnings (human capital is not collateralisable) — so they under-invest in schooling even when the social return is 8%+.</li>
<li><span class="key">Higher opportunity cost</span> (gig-economy earnings rise; Gojek/Grab/online sellers pay well immediately). The wage forgone <em>during</em> school is now higher, so the NPV cost of each year of schooling rises. This is equivalent to shifting MCC up (or MRR down — both work). $s^{*}$ <span class="key">falls</span>.</li>
<li><span class="key">Higher ability</span> shifts MRR <em>up</em> (every year of schooling yields a bigger wage gain) — $s^{*}$ rises. This is the "ability bias" that pushes the OLS Mincer return above the true causal return.</li>
</ul>
<div class="tip">Three things move s* down — high $r$, high opportunity cost, low ability. Three things move it up — subsidies that lower direct cost, government student loans that lower effective $r$, high ability. The Indonesian gap between "private return ≥ 8%" and "low-income youth still skip university" is reconciled by binding credit constraints raising effective $r$ for the poor.</div>`,
              id: `<p>UAS bertanya khusus: <em>"Grafik bagaimana tingkat diskon dan opportunity cost yang lebih tinggi menggeser lama sekolah optimal."</em> Mekaniknya:</p>
<ul>
<li><span class="key">Tingkat diskon $r$ lebih tinggi (lebih tidak sabar, terkendala kredit, berorientasi sekarang).</span> MCC bergeser <em>naik</em>; perpotongan baru bergerak <em>ke kiri</em>; $s^{*}$ <span class="key">turun</span>. Rumah tangga Indonesia berpendapatan rendah menghadapi $r$ efektif tinggi karena tak bisa pinjam terhadap pendapatan masa depan (modal manusia tak bisa diagunkan) — sehingga mereka under-invest pendidikan walau social return 8%+.</li>
<li><span class="key">Opportunity cost lebih tinggi</span> (pendapatan gig naik; Gojek/Grab/penjual online membayar langsung). Upah yang hilang <em>selama</em> sekolah kini lebih tinggi, sehingga biaya NPV tiap tahun sekolah naik. Setara dengan menggeser MCC naik (atau MRR turun — keduanya bekerja). $s^{*}$ <span class="key">turun</span>.</li>
<li><span class="key">Kemampuan lebih tinggi</span> menggeser MRR <em>naik</em> — $s^{*}$ naik. Inilah "ability bias" yang mendorong return OLS Mincer di atas return kausal sejati.</li>
</ul>
<div class="tip">Tiga yang menurunkan s* — $r$ tinggi, opportunity cost tinggi, kemampuan rendah. Tiga yang menaikkan — subsidi yang menurunkan biaya langsung, pinjaman mahasiswa pemerintah yang menurunkan $r$ efektif, kemampuan tinggi. Kesenjangan Indonesia antara "private return ≥ 8%" dan "anak muda berpendapatan rendah tetap melewati kuliah" didamaikan oleh kendala kredit yang menaikkan $r$ efektif bagi yang miskin.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The Mincer earnings function', id: 'Fungsi pendapatan Mincer' },
        num: '4',
        cards: [
          {
            title: { en: 'The workhorse regression', id: 'Regresi tulang punggung' },
            html: {
              en: `<p>Mincer (1974) showed that, under simple assumptions, lifetime earnings follow:</p>
<div class="formula">$$\\ln w = \\alpha_1 + \\alpha_2\\, \\text{YOS} + \\alpha_3\\, \\text{EXP} + \\alpha_4\\, \\text{EXP}^2 + \\varepsilon.$$</div>
<ul>
<li>$\\alpha_2$ — the <span class="key">private rate of return</span> to a year of schooling. For Indonesia BPS reports $\\alpha_2 > 0.08$ (≥8% per year).</li>
<li>$\\alpha_3 > 0$ — experience raises productivity (on-the-job training).</li>
<li>$\\alpha_4 < 0$ — the concave hump: human capital depreciates and training tapers off with age.</li>
</ul>
<p>Take logs because percentage changes are what compound: a one-year increase in schooling raises wages by approximately $\\alpha_2 \\times 100\\%$.</p>`,
              id: `<p>Mincer (1974) menunjukkan bahwa, di bawah asumsi sederhana, pendapatan seumur hidup mengikuti:</p>
<div class="formula">$$\\ln w = \\alpha_1 + \\alpha_2\\, \\text{YOS} + \\alpha_3\\, \\text{EXP} + \\alpha_4\\, \\text{EXP}^2 + \\varepsilon.$$</div>
<ul>
<li>$\\alpha_2$ — <span class="key">tingkat pengembalian privat</span> per tahun sekolah. Untuk Indonesia BPS melaporkan $\\alpha_2 > 0{,}08$ (≥8% per tahun).</li>
<li>$\\alpha_3 > 0$ — pengalaman menaikkan produktivitas (pelatihan dalam pekerjaan).</li>
<li>$\\alpha_4 < 0$ — kurva cekung: modal manusia menyusut dan pelatihan berkurang dengan usia.</li>
</ul>
<p>Memakai log karena perubahan persen yang compound: kenaikan satu tahun sekolah menaikkan upah sekitar $\\alpha_2 \\times 100\\%$.</p>`
            }
          },
          {
            title: { en: 'Biases in the estimated return', id: 'Bias dalam return estimasi' },
            html: {
              en: `<p>The OLS estimate of $\\alpha_2$ is biased in three ways:</p>
<ol>
<li><span class="key">Ability bias (upward).</span> Able people both go to school more <em>and</em> earn more anyway. OLS attributes some of the ability premium to schooling, overstating the causal return.</li>
<li><span class="key">Consumption-benefit bias (downward).</span> Schooling brings non-pecuniary benefits (better jobs, status). Counting only the wage premium understates the total return.</li>
<li><span class="key">Selectivity bias.</span> Workers self-select into jobs that suit them. A clumsy genius might earn more as a manual labourer (if she has a comparative advantage there), so the observed wage premium of school is conditional on the self-selected sample.</li>
</ol>
<p>The lecturer's <em>Ms. Stupid but skillful / Mr. Brainy but clumsy</em> 2×2 captures selectivity: workers sort to the job where their <em>productivity matches the skill requirement</em>, which makes "going to school always pays" too strong a policy conclusion. The instrumental-variables literature (compulsory-schooling laws, school-opening reforms) is the standard fix.</p>`,
              id: `<p>Perkiraan OLS $\\alpha_2$ bias dalam tiga cara:</p>
<ol>
<li><span class="key">Bias kemampuan (ke atas).</span> Orang berkemampuan tinggi bersekolah lebih banyak <em>dan</em> berpenghasilan lebih bagaimanapun. OLS mengaitkan sebagian premium kemampuan ke sekolah, melebihkan return kausal.</li>
<li><span class="key">Bias manfaat konsumsi (ke bawah).</span> Sekolah membawa manfaat non-moneter (pekerjaan lebih baik, status). Menghitung hanya premium upah meremehkan return total.</li>
<li><span class="key">Bias selektivitas.</span> Pekerja self-select ke pekerjaan yang cocok. Ms. Stupid but skillful mungkin lebih untung sebagai pekerja manual karena keunggulan komparatifnya di sana — premium upah teramati bersyarat pada sampel self-selected.</li>
</ol>
<p>2×2 dosen <em>Ms. Stupid but skillful / Mr. Brainy but clumsy</em> menangkap selektivitas: pekerja menyortir ke pekerjaan tempat <em>produktivitas mereka cocok dengan persyaratan keterampilan</em>, sehingga "selalu sekolah selalu untung" terlalu kuat sebagai kesimpulan kebijakan.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Signalling: do degrees raise productivity or just reveal it?', id: 'Sinyal: apakah gelar menaikkan produktivitas atau hanya mengungkapkan?' },
        num: '5',
        cards: [
          {
            title: { en: 'Spence (1973): the asymmetric-information case', id: 'Spence (1973): kasus informasi asimetri' },
            html: {
              en: `<p>Human-capital theory says schooling <em>raises</em> a worker's productivity. The <span class="key">signalling / screening</span> theory (Spence 1973) argues that schooling <em>reveals</em> a worker's existing type to employers who cannot directly observe it.</p>
<p>The trick is that schooling must be <span class="key">cheaper for high-ability workers</span> (they study faster, suffer less psychic cost). At the separating equilibrium high types pick at least $s^{*}$ years; low types pick less. Employers see the degree and infer the type:</p>
<div class="formula">$$\\text{Schooling for H-type} \\;\\Rightarrow\\; \\text{employer infers high productivity} \\;\\Rightarrow\\; \\text{pays higher wage.}$$</div>
<p>Crucially the diploma <em>itself</em> does not change productivity — the wage premium would survive even if the curriculum was useless.</p>
<div class="note">For the UAS Topic 1 critique — "Indonesian degrees are just signals" — note three things:
<ol><li>Pure signalling cannot explain returns to <em>each additional year</em> within a degree, only to completion (the "sheepskin effect"). Returns are positive year-by-year, suggesting some human-capital component.</li>
<li>The split is empirically <em>both</em>: schooling builds skills AND signals. The relative weights vary by major and country.</li>
<li>Policy implication: if signalling dominates, expanding university access has lower returns than the private numbers suggest, because part of the premium just shifts the signalling threshold.</li></ol></div>`,
              id: `<p>Teori modal manusia mengatakan sekolah <em>menaikkan</em> produktivitas pekerja. Teori <span class="key">sinyal/screening</span> (Spence 1973) berargumen sekolah <em>mengungkapkan</em> tipe pekerja kepada pengusaha yang tak bisa mengamati langsung.</p>
<p>Triknya sekolah harus <span class="key">lebih murah bagi pekerja berkemampuan tinggi</span> (mereka belajar lebih cepat, biaya psikis lebih rendah). Pada keseimbangan separating tipe-H pilih ≥ $s^{*}$ tahun; tipe-L lebih sedikit. Pengusaha melihat gelar dan menyimpulkan tipenya.</p>
<p>Gelar <em>itu sendiri</em> tidak mengubah produktivitas — premium upah bertahan walau kurikulum tak berguna.</p>
<div class="note">Untuk kritik UAS Topik 1 — "gelar Indonesia hanya sinyal" — perhatikan tiga hal:
<ol><li>Sinyal murni tak bisa menjelaskan return <em>tiap tahun tambahan</em>, hanya return penyelesaian (efek "sheepskin"). Return positif tahun demi tahun, mengindikasikan komponen modal manusia.</li>
<li>Empiris keduanya: sekolah membangun keterampilan DAN mensinyalkan. Bobot relatif bervariasi menurut jurusan dan negara.</li>
<li>Implikasi kebijakan: bila sinyal dominan, perluasan akses universitas berreturn lebih rendah daripada angka privat tunjukkan, karena sebagian premium hanya menggeser ambang sinyal.</li></ol></div>`
            }
          }
        ]
      },

      {
        heading: { en: 'On-the-job training: general vs specific', id: 'Pelatihan dalam pekerjaan: umum vs khusus' },
        num: '6',
        cards: [
          {
            title: { en: 'Who pays, who reaps', id: 'Siapa membayar, siapa menuai' },
            html: {
              en: `<p><span class="key">General training</span> raises productivity at <em>any</em> employer (e.g. learning Excel, English). <span class="key">Specific training</span> raises productivity only at the current employer (e.g. learning UI's internal budget rules).</p>
<p>Becker's rule: <em>whoever pays for training reaps the return on it</em>.</p>
<ul>
<li><span class="key">General training.</span> If the worker can quit costlessly after training, no employer will pay — the worker would walk away with the skill. So the <em>worker</em> pays during training (wage $W_1 = \\text{MRP}_1 < \\text{MRP}_0$, below the no-training baseline) and reaps the full benefit after ($W_2 = \\text{MRP}_2$).</li>
<li><span class="key">Specific training.</span> The skill is worthless elsewhere, so the worker has no leverage to capture all the benefit; the employer would lose if she quits. The Pareto solution is to <span class="key">share</span>: $\\text{MRP}_1 < W_1 < \\text{MRP}_0$ during training (firm and worker each absorb some cost) and $\\text{MRP}_0 < W_2 < \\text{MRP}_2$ after (firm and worker each get some benefit). Sharing makes both reluctant to break the match — it lowers turnover.</li>
</ul>
<p>Empirically wages during general training rarely fall to $\\text{MRP}_1$ — minimum-wage laws and incomplete worker mobility prevent it. So in practice firms partly subsidise general training too.</p>`,
              id: `<p><span class="key">Pelatihan umum</span> menaikkan produktivitas di <em>perusahaan mana pun</em> (mis. belajar Excel, Bahasa Inggris). <span class="key">Pelatihan khusus</span> hanya pada perusahaan saat ini (mis. aturan anggaran internal UI).</p>
<p>Aturan Becker: <em>siapa yang membayar pelatihan, dialah yang menuai returnnya</em>.</p>
<ul>
<li><span class="key">Umum.</span> Bila pekerja bisa berhenti tanpa biaya setelah pelatihan, tidak ada pengusaha yang mau membayar — pekerja kabur dengan keterampilannya. Jadi <em>pekerja</em> membayar selama pelatihan ($W_1 = \\text{MRP}_1 < \\text{MRP}_0$, di bawah baseline tanpa pelatihan) dan menuai semua manfaat setelahnya ($W_2 = \\text{MRP}_2$).</li>
<li><span class="key">Khusus.</span> Keterampilan tak berharga di tempat lain, jadi pekerja tak punya tuas memperoleh semua manfaat; pengusaha rugi bila ia berhenti. Solusi Pareto adalah <span class="key">berbagi</span>: $\\text{MRP}_1 < W_1 < \\text{MRP}_0$ selama pelatihan dan $\\text{MRP}_0 < W_2 < \\text{MRP}_2$ sesudahnya. Berbagi membuat kedua pihak enggan mematahkan kecocokan — menurunkan turnover.</li>
</ul>
<p>Empirisnya upah selama pelatihan umum jarang turun ke $\\text{MRP}_1$ — UMR dan mobilitas tak sempurna mencegahnya. Praktiknya perusahaan mensubsidi sebagian pelatihan umum juga.</p>`
            },
            chart: TRAIN_CHART
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Human-capital toolkit', id: 'Kit alat modal manusia' },
        num: 'F',
        cards: [
          {
            title: { en: 'NPV / IRR / Optimal s', id: 'NPV / IRR / s optimal' },
            html: {
              en: `<div class="formula">$\\text{ENPV}(\\text{path}) = \\displaystyle\\sum_{t=0}^{T} \\dfrac{w_t - C_t}{(1+r)^t}$</div>
<div class="formula">Schooling iff $\\;\\text{ENPV}(\\text{school}) > \\text{ENPV}(\\text{no-school})$</div>
<div class="formula">IRR: $\\;\\text{ENPV}(\\text{school}; R) - \\text{ENPV}(\\text{no-school}; R) = 0;\\;$ school iff $R > r$</div>
<div class="formula">Optimal years: $\\;\\dfrac{w'(s^{*})}{w(s^{*})} = r$ &nbsp;⇒&nbsp; MRR(s*) = MCC</div>
<div class="formula">$r \\uparrow$ or opportunity cost $\\uparrow$ ⇒ MCC$\\uparrow$ ⇒ $s^{*}\\downarrow$</div>`,
              id: `<div class="formula">$\\text{ENPV}(\\text{jalur}) = \\displaystyle\\sum_{t=0}^{T} \\dfrac{w_t - C_t}{(1+r)^t}$</div>
<div class="formula">Sekolah iff $\\;\\text{ENPV}(\\text{sekolah}) > \\text{ENPV}(\\text{tdk})$</div>
<div class="formula">IRR: $\\;\\text{ENPV}(\\text{sekolah}; R) - \\text{ENPV}(\\text{tdk}; R) = 0;\\;$ sekolah iff $R > r$</div>
<div class="formula">Lama optimal: $\\;\\dfrac{w'(s^{*})}{w(s^{*})} = r$ &nbsp;⇒&nbsp; MRR(s*) = MCC</div>
<div class="formula">$r \\uparrow$ atau opportunity cost $\\uparrow$ ⇒ MCC$\\uparrow$ ⇒ $s^{*}\\downarrow$</div>`
            }
          },
          {
            title: { en: 'Mincer earnings function', id: 'Fungsi pendapatan Mincer' },
            html: {
              en: `<div class="formula">$\\ln w = \\alpha_1 + \\alpha_2\\,\\text{YOS} + \\alpha_3\\,\\text{EXP} + \\alpha_4\\,\\text{EXP}^2 + \\varepsilon$</div>
<ul>
<li>$\\alpha_2$ — private return per year of schooling (Indonesia ≥ 8% per BPS).</li>
<li>$\\alpha_3 > 0$ — experience premium.</li>
<li>$\\alpha_4 < 0$ — concavity / depreciation.</li>
</ul>
<p>Biases: <em>ability bias</em> (↑), <em>consumption-benefit bias</em> (↓), <em>selectivity bias</em>.</p>`,
              id: `<div class="formula">$\\ln w = \\alpha_1 + \\alpha_2\\,\\text{YOS} + \\alpha_3\\,\\text{EXP} + \\alpha_4\\,\\text{EXP}^2 + \\varepsilon$</div>
<ul>
<li>$\\alpha_2$ — return privat per tahun sekolah (Indonesia ≥ 8% BPS).</li>
<li>$\\alpha_3 > 0$ — premium pengalaman.</li>
<li>$\\alpha_4 < 0$ — konkavitas / depresiasi.</li>
</ul>
<p>Bias: <em>kemampuan</em> (↑), <em>manfaat konsumsi</em> (↓), <em>selektivitas</em>.</p>`
            }
          },
          {
            title: { en: 'Training wage relations', id: 'Hubungan upah pelatihan' },
            html: {
              en: `<p><span class="key">General training.</span> During: $W_1 = \\text{MRP}_1 < W_0$. After: $W_2 = \\text{MRP}_2 > W_0$. Worker bears all cost, reaps all gain.</p>
<p><span class="key">Specific training.</span> During: $\\text{MRP}_1 < W_1 < W_0$ (cost shared). After: $W_0 < W_2 < \\text{MRP}_2$ (benefit shared).</p>`,
              id: `<p><span class="key">Pelatihan umum.</span> Selama: $W_1 = \\text{MRP}_1 < W_0$. Setelah: $W_2 = \\text{MRP}_2 > W_0$. Pekerja menanggung semua biaya, menuai semua manfaat.</p>
<p><span class="key">Pelatihan khusus.</span> Selama: $\\text{MRP}_1 < W_1 < W_0$ (biaya berbagi). Setelah: $W_0 < W_2 < \\text{MRP}_2$ (manfaat berbagi).</p>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'The three diagrams to memorise', id: 'Tiga diagram untuk dihafal' },
        num: 'G',
        cards: [
          {
            title: { en: '1. Earnings-stream comparison (A vs B)', id: '1. Perbandingan arus pendapatan (A vs B)' },
            html: {
              en: '<p>Two age-earnings paths. Stream A (HS) starts earning at 18, lower lifetime profile. Stream B (Uni) is negative during 18–22 (forgone earnings + tuition) then crosses over A and stays above. Shade the <em>forgone earnings</em> rectangle (cost) and the <em>gross benefit</em> area (B−A after 22).</p>',
              id: '<p>Dua jalur usia-pendapatan. Aliran A (SMA) mulai pada 18, profil seumur hidup lebih rendah. Aliran B (Universitas) negatif 18–22 (pendapatan hilang + uang kuliah) lalu menyalip A dan tetap di atas. Arsir kotak <em>pendapatan hilang</em> (biaya) dan area <em>manfaat kotor</em> (B−A setelah 22).</p>'
            },
            chart: STREAMS_CHART
          },
          {
            title: { en: '2. Optimal schooling: MRR–MCC (the UAS graph)', id: '2. Sekolah optimal: MRR–MCC (grafik UAS)' },
            html: {
              en: '<p>Downward-sloping MRR(s). Two horizontal MCC lines at $r_1$ and $r_2 > r_1$. Show $s^{*}$ at the intersection with $r_1$ and a smaller $s\'$ at the intersection with $r_2$. This is the diagram the exam asks for — label both shifts (higher discount rate, higher opportunity cost) as <em>upward shifts in MCC</em>.</p>',
              id: '<p>MRR(s) miring turun. Dua garis MCC horizontal pada $r_1$ dan $r_2 > r_1$. Tunjukkan $s^{*}$ pada perpotongan dengan $r_1$ dan $s\'$ lebih kecil pada $r_2$. Inilah diagram yang diminta ujian — beri label kedua pergeseran (tingkat diskon lebih tinggi, opportunity cost lebih tinggi) sebagai <em>pergeseran MCC ke atas</em>.</p>'
            },
            chart: OPT_CHART
          },
          {
            title: { en: '3. Training: general vs specific', id: '3. Pelatihan: umum vs khusus' },
            html: {
              en: '<p>Two-period time line. General: wage dips to $W_1 = \\text{MRP}_1$ then jumps to $W_2 = \\text{MRP}_2$ — worker pays and worker reaps. Specific: wage stays at $W_0$ during training (cost split) and rises only to a wage between $W_0$ and $\\text{MRP}_2$ — both sides share.</p>',
              id: '<p>Garis waktu dua periode. Umum: upah turun ke $W_1 = \\text{MRP}_1$ lalu melonjak ke $W_2 = \\text{MRP}_2$ — pekerja bayar dan pekerja tuai. Khusus: upah tetap di $W_0$ selama pelatihan (biaya berbagi) dan naik hanya ke upah antara $W_0$ dan $\\text{MRP}_2$ — kedua pihak berbagi.</p>'
            },
            chart: TRAIN_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'computation',
        q: { en: 'Stella from the tutorial: should she go to school at $r = 10\\%$? What is her IRR?',
             id: 'Stella dari tutorial: haruskah ia bersekolah pada $r = 10\\%$? Berapa IRR-nya?' },
        answer: [
          { en: 'Cash-flow comparison at $r=10\\%$: $\\text{NPV}_{\\text{no}}=16{,}239.67$ vs $\\text{NPV}_{\\text{yes}}=17{,}008.27$. Net gain $+768.60 > 0$ ⇒ <span class="key">yes, go to school</span>.',
            id: 'Perbandingan arus kas pada $r=10\\%$: $\\text{NPV}_{\\text{tdk}}=16.239{,}67$ vs $\\text{NPV}_{\\text{ya}}=17.008{,}27$. Selisih $+768{,}60 > 0$ ⇒ <span class="key">ya, bersekolah</span>.' },
          { en: 'Incremental cash flow: ($-7000$, $+4000$, $+5000$). IRR solves $-7000 + 4000/(1+R) + 5000/(1+R)^2 = 0$. Quadratic in $x=1/(1+R)$: $5000x^2 + 4000x - 7000 = 0$, so $x \\approx 0.8490$, giving $R \\approx 17.8\\%$. IRR > 10% confirms the NPV decision.',
            id: 'Arus kas inkremental: ($-7000$, $+4000$, $+5000$). IRR: $R \\approx 17{,}8\\%$. IRR > 10% mengonfirmasi keputusan NPV.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Why do some low-income Indonesian youth refuse university even when the private return is above 8%?',
             id: 'Mengapa sebagian pemuda Indonesia berpendapatan rendah menolak kuliah walau return privat di atas 8%?' },
        answer: [
          { en: 'Their effective discount rate $r$ is high because they cannot borrow against future earnings (human capital is non-collateralisable) — so MCC sits above MRR and $s^{*}$ falls.',
            id: 'Tingkat diskon efektif $r$ mereka tinggi karena tak bisa pinjam terhadap pendapatan masa depan — sehingga MCC di atas MRR dan $s^{*}$ turun.' },
          { en: 'The gig economy raises the opportunity cost of each year of schooling (immediate income from Gojek/Grab/online sales). This also lifts MCC, lowering $s^{*}$.',
            id: 'Ekonomi gig menaikkan opportunity cost tiap tahun sekolah (pendapatan langsung dari Gojek/Grab/online). Ini juga menaikkan MCC, menurunkan $s^{*}$.' },
          { en: 'Both forces together push optimal schooling below the level the social-return calculation predicts. The remedy is to lower the effective $r$ (KIP-Kuliah scholarships, subsidised student loans) or the direct cost (tuition reduction).',
            id: 'Kedua kekuatan bersama mendorong sekolah optimal di bawah tingkat yang social-return-nya prediksi. Obatnya: turunkan $r$ efektif (KIP-Kuliah, pinjaman mahasiswa) atau biaya langsung (kuliah subsidi).' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Tutorial Q3 (Week 10): if a worker is known to quit two years after a one-year training program, would either training program be pursued?',
             id: 'Tutorial Q3 (Minggu 10): bila pekerja diketahui berhenti dua tahun setelah pelatihan satu tahun, apakah salah satu program dijalankan?' },
        answer: [
          { en: 'General training: gain is 48,000 − 40,000 = 8,000 per year × 2 years = 16,000 over the post-training horizon. Training cost = (40,000 − 32,000) + 10,000 = 18,000. <span class="key">16,000 < 18,000</span> — not profitable, worker would not pay (and neither would the firm).',
            id: 'Pelatihan umum: gain 8.000 per tahun × 2 tahun = 16.000. Biaya = (40.000 − 32.000) + 10.000 = 18.000. <span class="key">16.000 < 18.000</span> — tidak menguntungkan, pekerja tidak akan membayar.' },
          { en: 'Specific training: same arithmetic on the firm side. Firm earns the post-training premium 48,000 − 40,000 = 8,000 per year × 2 years = 16,000 < 18,000 cost. <span class="key">Neither</span> training program is pursued — the horizon is too short to recover the cost. The take-away: tenure expectations matter.',
            id: 'Pelatihan khusus: aritmetika sama. <span class="key">Tidak satu pun</span> dijalankan — horizon terlalu pendek untuk pulih biaya. Pesannya: ekspektasi masa kerja penting.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'A critic says "Indonesian degrees are pure signals — they don\'t raise productivity." How would you defend or rebut this with the framework above?',
             id: 'Seorang kritikus berkata "gelar Indonesia hanya sinyal — tidak menaikkan produktivitas." Bagaimana membela atau menyangkalnya?' },
        answer: [
          { en: 'Defence (signalling-only): the wage premium would still exist because employers cannot directly observe productivity; degrees sort H from L types and earn a premium <em>without</em> changing skills. Sheepskin effects (jumps in wages at degree completion, beyond what each year of study justifies) lend some empirical support.',
            id: 'Bela (hanya sinyal): premium upah tetap ada karena pengusaha tak bisa mengamati produktivitas langsung; gelar memilah tipe H dari L dan mendapat premium <em>tanpa</em> mengubah keterampilan. Efek sheepskin (lonjakan upah di tingkat penyelesaian gelar) memberi dukungan empiris.' },
          { en: 'Rebuttal (HC-also): the Mincer return is positive <em>year by year</em>, not only at completion thresholds. Quasi-experiments using compulsory-schooling reforms find causal returns close to OLS — supporting a sizeable HC component. Empirically the truth is both: schooling builds skills <em>and</em> signals. Pure signalling cannot explain the year-by-year pattern.',
            id: 'Sanggah (HC juga): return Mincer positif <em>tahun per tahun</em>, bukan hanya pada ambang penyelesaian. Eksperimen-kuasi (reformasi wajib belajar) menemukan return kausal mendekati OLS — mendukung komponen HC besar. Empiris keduanya: sekolah membangun keterampilan <em>dan</em> mensinyalkan.' }
        ]
      }
    ]
  };
})();
