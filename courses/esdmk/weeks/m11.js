/* ============================================================================
   ESDMK · Week 11 — Compensating Wage Differentials / Hedonic Wage Theory
   Bilingual (EN + ID). Registers itself on window.ESDMK_WEEKS.m11.
   Sources: Borjas Ch.5, Ehrenberg–Smith Ch.8, Rosen (1974, 1986).
   Tutorial Week 9 Q1–Q3 worked here. Maps to UAS Topic 2.

   Diagram geometries:
     Hedonic locus: w(x) = 16 + 20·x², passing through (0,16) and (1,36)
       — matches tutorial Q1: U=√w−2x ⇒ utility 4 ⇒ √w = 4+2x ⇒ w = (4+2x)²
     Indifference curve U=4: w = (4+2x)² for two workers; risk-averse steeper.
   ============================================================================ */
(function () {
  window.ESDMK_WEEKS = window.ESDMK_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16', GREEN = '#15803d';
  var GAIN = 'rgba(14,143,184,.16)';

  /* ---- Chart 1: Hedonic wage locus + worker indifference -------------------- */
  // Locus: w(x) = (4+2x)² . At x=0, w=16; at x=1, w=36 (CWD = 20).
  var HEDONIC = { panels: [{
    title: 'Hedonic wage locus w(x): the price of risk',
    w: 460, h: 320,
    x: { min: 0, max: 1.0, label: 'Risk / disamenity x' },
    y: { min: 10, max: 45, label: 'Wage w' },
    curves: [
      { kind: 'path',
        pts: [[0,16],[0.1,17.64],[0.2,19.36],[0.3,21.16],[0.4,23.04],[0.5,25.00],[0.6,27.04],[0.7,29.16],[0.8,31.36],[0.9,33.64],[1.0,36.00]],
        smooth: true, color: RED, label: 'hedonic w(x) = (4+2x)²' },
      { kind: 'path',
        pts: [[0,16],[0.2,16.8],[0.4,17.8],[0.6,19.2],[0.8,21.0],[1.0,23.5]],
        smooth: true, color: TEAL, label: 'risk-tolerant IC' },
      { kind: 'path',
        pts: [[0,16],[0.2,21.0],[0.4,27.0],[0.6,33.5],[0.8,40.5],[1.0,48.0]],
        smooth: true, color: AMBER, label: 'risk-averse IC' }
    ],
    points: [
      { at: [0, 16], label: 'A: clean job', dot: true },
      { at: [1, 36], label: 'B: dirty job', dot: true }
    ],
    notes: [
      { x: 0.55, y: 13.0, text: 'CWD = w_B − w_A = 20', color: GREEN, anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 2: Bekasi (dislike) vs Tangerang (loves up to S*) -------------- */
  var SHAMPOO = { panels: [
    { title: 'Bekasi: workers dislike smell ⇒ choose x = 0',
      w: 380, h: 280, x: { min: 0, max: 1, label: 'Smell x' }, y: { min: 0, max: 10, label: 'Wage w' },
      curves: [
        { id: 'iso', kind: 'hline', y: 5, color: LINE, label: 'isocost w = W*' },
        { kind: 'path', pts: [[0,5],[0.25,5.5],[0.5,6.3],[0.75,7.5],[1.0,9.0]], smooth: true, color: RED, label: 'Bekasi IC (rises in x)' }
      ],
      points: [ { at: [0, 5], label: 'choice: x = 0', dot: true } ] },
    { title: 'Tangerang: workers like up to S*, then dislike',
      w: 380, h: 280, x: { min: 0, max: 1, label: 'Smell x  (S* at 0.5)' }, y: { min: 0, max: 10, label: 'Wage w' },
      curves: [
        { id: 'iso', kind: 'hline', y: 5, color: LINE, label: 'isocost w = W*' },
        { kind: 'path', pts: [[0,7],[0.25,5.8],[0.5,5.0],[0.75,5.8],[1.0,7.5]], smooth: true, color: TEAL, label: 'Tangerang IC (U-shape)' }
      ],
      points: [ { at: [0.5, 5], label: 'choice: x = S*', dot: true } ] }
  ] };

  window.ESDMK_WEEKS.m11 = {
    id: 'm11',
    label: { en: 'Week 11', id: 'Pertemuan 11' },
    title: { en: 'Compensating Wage Differentials', id: 'Kesenjangan Upah Kompensatif' },
    subtitle: {
      en: 'Why dangerous, unpleasant or insecure jobs pay more — Rosen\'s hedonic wage function, worker–firm matching, and what gig drivers tell us about total compensation when "wage" alone is misleading.',
      id: 'Mengapa pekerjaan berbahaya, tidak menyenangkan, atau tidak aman dibayar lebih — fungsi upah hedonik Rosen, pencocokan pekerja–perusahaan, dan apa yang dikatakan pengemudi gig tentang kompensasi total ketika "upah" saja menyesatkan.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Adam Smith\'s intuition', id: 'Intuisi Adam Smith' },
        num: '1',
        cards: [
          {
            title: { en: 'Wages compensate for everything else', id: 'Upah mengompensasi segala sesuatu yang lain' },
            html: {
              en: `<p>Adam Smith (1776) noticed that wages differ across jobs not just because of skill but because of their non-pecuniary characteristics — risk, unpleasantness, irregularity, social standing. He listed five sources of "compensating differences": (i) agreeableness of the work; (ii) cost and difficulty of learning the trade; (iii) constancy of employment; (iv) trust required; (v) probability of success.</p>
<p>The modern restatement: two workers with the same skills must receive the same <span class="key">total compensation</span> in utility terms. Total compensation $= $ wage $+$ value of fringe benefits $+$ disutility from disamenities (with a negative sign). Equilibrium equalises <em>total</em> compensation, not the wage in isolation.</p>
<div class="note">This is why "the gig wage equals the minimum wage" is not the same as "gig drivers are paid fairly". A fair comparison requires adding pensions, leave, health insurance and accident risk to both sides of the ledger.</div>`,
              id: `<p>Adam Smith (1776) memerhatikan bahwa upah berbeda antar pekerjaan bukan hanya karena keterampilan tetapi karena karakteristik non-moneternya — risiko, ketidaknyamanan, ketidakteraturan, status sosial. Ia mendaftar lima sumber "perbedaan kompensatif": (i) menyenangkan tidaknya pekerjaan; (ii) biaya dan kesulitan mempelajari profesi; (iii) konstansi kerja; (iv) kepercayaan yang dibutuhkan; (v) probabilitas sukses.</p>
<p>Penyataan modern: dua pekerja dengan keterampilan sama harus menerima <span class="key">kompensasi total</span> sama dalam utilitas. Kompensasi total $= $ upah $+$ nilai tunjangan $+$ disutilitas dari ketidaknyamanan (dengan tanda negatif). Keseimbangan menyamakan kompensasi <em>total</em>, bukan upah terisolasi.</p>
<div class="note">Inilah sebabnya "upah gig sama UMR" bukan berarti "pengemudi gig dibayar adil". Perbandingan adil menambahkan pensiun, cuti, asuransi kesehatan, dan risiko kecelakaan ke kedua sisi.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The two-job model', id: 'Model dua-pekerjaan' },
        num: '2',
        cards: [
          {
            title: { en: 'Utility, indifference curves, and the CWD', id: 'Utilitas, kurva indiferen, dan CWD' },
            html: {
              en: `<p>Let $x$ be a measurable disamenity (accident probability, hours of night work, fraction of toxic air) and $w$ the wage. A worker has utility $U = U(w, x)$ with $U_w > 0$ and $U_x < 0$. The slope of an indifference curve in $(x, w)$ space is</p>
<div class="formula">$\\dfrac{dw}{dx}\\bigg|_{\\bar U} = -\\dfrac{U_x}{U_w} = \\text{MRS}_{xw} > 0,$</div>
<p>the <span class="key">marginal willingness to accept</span> a unit more risk. Steeper IC = more risk-averse worker (needs a bigger wage rise for one extra unit of $x$).</p>
<p>If only two jobs exist — clean ($x=0$) at wage $w_0$ and dirty ($x=1$) at wage $w_1$ — a worker switches to the dirty job iff $U(w_1, 1) \\ge U(w_0, 0)$. Indifference defines the <span class="key">compensating wage differential</span> (CWD):</p>
<div class="formula">$\\text{CWD} = w_1 - w_0,\\;\\;\\text{such that}\\;\\;U(w_0, 0) = U(w_0 + \\text{CWD},\\, 1).$</div>`,
              id: `<p>Misalkan $x$ ketidaknyamanan terukur (probabilitas kecelakaan, jam kerja malam, fraksi udara beracun) dan $w$ upah. Pekerja memiliki utilitas $U = U(w, x)$ dengan $U_w > 0$ dan $U_x < 0$. Kemiringan kurva indiferen di ruang $(x, w)$:</p>
<div class="formula">$\\dfrac{dw}{dx}\\bigg|_{\\bar U} = -\\dfrac{U_x}{U_w} = \\text{MRS}_{xw} > 0,$</div>
<p><span class="key">marginal willingness to accept</span> satu unit risiko lagi. IC lebih curam = pekerja lebih averse risiko.</p>
<p>Bila hanya dua pekerjaan ada — bersih ($x=0$) upah $w_0$ dan kotor ($x=1$) upah $w_1$ — pekerja beralih ke kotor iff $U(w_1, 1) \\ge U(w_0, 0)$. Indiferen mendefinisikan <span class="key">kesenjangan upah kompensatif (CWD)</span>:</p>
<div class="formula">$\\text{CWD} = w_1 - w_0,\\;\\;\\text{sehingga}\\;\\;U(w_0, 0) = U(w_0 + \\text{CWD},\\, 1).$</div>`
            }
          },
          {
            title: { en: 'Tutorial Q1: clean job pays 16, what does the dirty job pay?', id: 'Tutorial Q1: pekerjaan bersih bayar 16, berapa kotor?' },
            html: {
              en: `<p>All workers have identical preferences $U = \\sqrt{w} - 2x$. Clean job ($x = 0$) pays $w_0 = 16$, so utility on the clean job is</p>
<div class="formula">$U_0 = \\sqrt{16} - 2(0) = 4.$</div>
<p>For workers to be indifferent to the dirty job ($x = 1$):</p>
<div class="formula">$\\sqrt{w_1} - 2(1) = 4 \\;\\Rightarrow\\; \\sqrt{w_1} = 6 \\;\\Rightarrow\\; w_1 = \\mathbf{36}.$</div>
<div class="formula">$\\text{CWD} = w_1 - w_0 = 36 - 16 = \\mathbf{20}\\;\\;\\text{(thousand Rp)}.$</div>
<p>The dirty job must pay 36 — a 125% premium — to compensate for the disutility $2x$. Note that the CWD is <em>not</em> simply "$2x$ converted to wage"; the conversion is non-linear because utility is concave in $w$ ($\\sqrt{w}$).</p>
<div class="tip">Always check: at the equilibrium pair $(w_0, x_0)$ and $(w_1, x_1)$ the utilities are equal. This is the textbook trick — find $U$ at the known job, then invert at the unknown $x$.</div>`,
              id: `<p>Semua pekerja preferensinya identik $U = \\sqrt{w} - 2x$. Pekerjaan bersih ($x = 0$) bayar $w_0 = 16$, utilitasnya</p>
<div class="formula">$U_0 = \\sqrt{16} - 2(0) = 4.$</div>
<p>Agar pekerja indiferen ke pekerjaan kotor ($x = 1$):</p>
<div class="formula">$\\sqrt{w_1} - 2(1) = 4 \\;\\Rightarrow\\; \\sqrt{w_1} = 6 \\;\\Rightarrow\\; w_1 = \\mathbf{36}.$</div>
<div class="formula">$\\text{CWD} = w_1 - w_0 = 36 - 16 = \\mathbf{20}\\;\\;\\text{(ribu Rp)}.$</div>
<p>Pekerjaan kotor harus bayar 36 — premium 125% — untuk mengompensasi disutilitas $2x$. CWD <em>bukan</em> sekadar "$2x$ dikonversi ke upah"; konversinya non-linear karena utilitas cekung di $w$ ($\\sqrt{w}$).</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'The hedonic wage function (continuous case)', id: 'Fungsi upah hedonik (kasus kontinu)' },
        num: '3',
        cards: [
          {
            title: { en: 'Rosen (1974): the market-clearing locus', id: 'Rosen (1974): lokus pembersih pasar' },
            html: {
              en: `<p>With a continuum of jobs offering different $x$, the equilibrium <span class="key">hedonic wage function</span> $w = h(x)$ traces the market-clearing wage for every level of risk. Three properties:</p>
<ol>
<li>$h'(x) > 0$ — riskier jobs pay more.</li>
<li>The slope $h'(x)$ is the <span class="key">market price of risk</span> at level $x$.</li>
<li>$h$ is the upper envelope of firms' iso-profit offer curves and the lower envelope of workers' indifference curves. Each worker chooses the job where his IC is <em>tangent</em> to $h$.</li>
</ol>
<p>Workers with different attitudes to risk sort themselves: risk-tolerant workers move <em>up</em> the locus to higher $x$ (and higher $w$); risk-averse stay at low $x$. Heterogeneity in preferences is essential — without it, no one would do the risky job.</p>
<div class="formula">$w_i^{*} = h(x_i^{*})\\;\\text{where}\\; h'(x_i^{*}) = \\text{MRS}^i_{xw}(x_i^{*}, w_i^{*}).$</div>`,
              id: `<p>Dengan kontinum pekerjaan menawarkan $x$ berbeda, <span class="key">fungsi upah hedonik</span> keseimbangan $w = h(x)$ menelusuri upah pembersih pasar untuk tiap tingkat risiko. Tiga sifat:</p>
<ol>
<li>$h'(x) > 0$ — pekerjaan berisiko bayar lebih.</li>
<li>Kemiringan $h'(x)$ adalah <span class="key">harga pasar risiko</span> pada tingkat $x$.</li>
<li>$h$ envelope atas kurva penawaran iso-laba perusahaan dan envelope bawah IC pekerja. Tiap pekerja memilih pekerjaan tempat IC-nya <em>tangen</em> dengan $h$.</li>
</ol>
<p>Pekerja dengan sikap risiko berbeda menyortir diri: pekerja toleran risiko bergerak <em>naik</em> di lokus ke $x$ dan $w$ lebih tinggi; yang averse tetap di $x$ rendah. Heterogenitas preferensi esensial — tanpa itu tidak ada yang mau pekerjaan berisiko.</p>`
            },
            chart: HEDONIC
          }
        ]
      },

      {
        heading: { en: 'Tutorial Q3: when "good" disamenities exist', id: 'Tutorial Q3: ketika ketidaknyamanan "baik" ada' },
        num: '4',
        cards: [
          {
            title: { en: 'Bekasi vs Tangerang shampoo factories', id: 'Pabrik sampo Bekasi vs Tangerang' },
            html: {
              en: `<p>Suppose firms have <em>no cost</em> of choosing the smell level — the isocost is a horizontal line at the alternative wage $W^{*}$. (Firms are willing to pay $W^{*}$ at any $x$.) Workers maximise utility subject to $w = W^{*}$.</p>
<ul>
<li><span class="key">Bekasi</span> workers dislike smell at all levels: $U_x < 0$ everywhere, so the IC slopes <em>up</em> in $x$. They reach the highest IC by choosing $x = 0$. Bekasi factories have <em>no</em> shampoo smell.</li>
<li><span class="key">Tangerang</span> workers enjoy the smell up to $S^{*}$ and then dislike it: $U_x > 0$ for $x < S^{*}$, $U_x < 0$ for $x > S^{*}$. The IC is U-shaped, minimised at $x = S^{*}$. Tangerang factories have smell level $x = S^{*}$.</li>
</ul>
<p><span class="key">Wage differential?</span> No. Both groups earn the same $W^{*}$ — there is no CWD because the disamenity is costless to the firm. The two groups simply sort to firms that match their preferences. The lesson: a CWD exists only when the disamenity is <em>costly to remove</em> for the firm. When firms can give workers the conditions they want for free, the market just rearranges everyone.</p>`,
              id: `<p>Misalkan perusahaan tidak memiliki <em>biaya</em> memilih tingkat bau — isocost garis horizontal pada upah alternatif $W^{*}$. Pekerja memaksimalkan utilitas tunduk pada $w = W^{*}$.</p>
<ul>
<li>Pekerja <span class="key">Bekasi</span> tidak suka bau di semua tingkat: $U_x < 0$ di mana-mana, IC miring <em>naik</em> di $x$. Mencapai IC tertinggi memilih $x = 0$. Pabrik Bekasi <em>tanpa</em> bau sampo.</li>
<li>Pekerja <span class="key">Tangerang</span> suka bau hingga $S^{*}$ lalu tidak suka: $U_x > 0$ untuk $x < S^{*}$, $U_x < 0$ untuk $x > S^{*}$. IC berbentuk U, minimum pada $x = S^{*}$. Pabrik Tangerang tingkat bau $x = S^{*}$.</li>
</ul>
<p><span class="key">Kesenjangan upah?</span> Tidak. Kedua kelompok dapat $W^{*}$ sama — tidak ada CWD karena ketidaknyamanan tanpa biaya bagi perusahaan. Pelajaran: CWD ada hanya bila disamenity <em>mahal disingkirkan</em> perusahaan.</p>`
            },
            chart: SHAMPOO
          }
        ]
      },

      {
        heading: { en: 'Application: gig drivers and the missing CWD', id: 'Aplikasi: pengemudi gig dan CWD yang hilang' },
        num: '5',
        cards: [
          {
            title: { en: 'Same wage, different total compensation', id: 'Upah sama, kompensasi total berbeda' },
            html: {
              en: `<p>Indonesian platform drivers (Gojek, Grab, Maxim, ShopeeFood) earn nominal wages roughly equal to the minimum wage. But the disamenity bundle is large:</p>
<ul>
<li>No health benefits (BPJS Kesehatan only if self-enrolled).</li>
<li>No paid leave or sick pay.</li>
<li>No pension or BPJS Ketenagakerjaan contribution.</li>
<li>Higher accident risk and exposure to crime / weather.</li>
<li>No employment-protection floor — earnings volatile with demand.</li>
</ul>
<p>Theory predicts the platform wage <em>should</em> exceed the comparable formal wage by the <span class="key">CWD</span> equal to the present value of these missing components. Observed: it does not — gig wage ≈ minimum wage. So either</p>
<ol>
<li><span class="key">Workers were mismatched to formal jobs:</span> they had no formal option, so the comparison is between gig and informal subsistence work, not formal employment. Total compensation may still be higher than the relevant outside option.</li>
<li><span class="key">Platforms have monopsony power:</span> few platforms, network-locked drivers, no realistic exit. Workers cannot bid wages up to the CWD level.</li>
<li><span class="key">Workers under-weight low-probability disasters</span> (accident, illness, old age) and accept the gig wage even though they would be better off with benefits.</li>
<li><span class="key">Sorting on heterogeneous preferences:</span> drivers who self-select are those who most value flexibility, lowest opportunity cost, lowest perceived disutility from risk — the marginal worker is OK, even though the average formal worker would not be.</li>
</ol>`,
              id: `<p>Pengemudi platform Indonesia (Gojek, Grab, Maxim, ShopeeFood) berpenghasilan nominal kira-kira sama dengan UMR. Tapi bundel disamenity besar:</p>
<ul>
<li>Tanpa tunjangan kesehatan (BPJS Kesehatan hanya jika daftar sendiri).</li>
<li>Tanpa cuti berbayar atau sakit.</li>
<li>Tanpa pensiun atau iuran BPJS Ketenagakerjaan.</li>
<li>Risiko kecelakaan dan paparan kejahatan / cuaca lebih tinggi.</li>
<li>Tanpa lantai perlindungan kerja — pendapatan volatil.</li>
</ul>
<p>Teori memprediksi upah platform <em>seharusnya</em> melebihi upah formal yang setara sebesar <span class="key">CWD</span> = nilai sekarang komponen yang hilang. Empirisnya: tidak — gig ≈ UMR. Jadi entah</p>
<ol>
<li><span class="key">Pekerja salah cocok ke formal:</span> tidak ada opsi formal, perbandingan antara gig vs subsisten informal, bukan kerja formal. Kompensasi total mungkin tetap lebih tinggi dari opsi luar.</li>
<li><span class="key">Platform memiliki kekuatan monopsoni:</span> sedikit platform, pengemudi terkunci jaringan, tidak ada keluaran realistis. Pekerja tak bisa menaikkan upah ke tingkat CWD.</li>
<li><span class="key">Pekerja meremehkan bencana probabilitas rendah</span> (kecelakaan, sakit, tua) dan menerima upah gig walau lebih baik dengan tunjangan.</li>
<li><span class="key">Penyortiran preferensi heterogen:</span> yang self-select adalah yang paling menghargai fleksibilitas, opportunity cost terendah, disutilitas risiko terendah — pekerja marjinal OK walau rata-rata pekerja formal tidak.</li>
</ol>`
            }
          },
          {
            title: { en: 'Worker reclassification: who wins, who loses', id: 'Reklasifikasi pekerja: siapa untung, siapa rugi' },
            html: {
              en: `<p>The driver union demands reclassification as full employees. The CWD framework lets us read the welfare consequences cleanly.</p>
<ul>
<li><span class="key">Existing drivers</span> who would have stayed gig: gain pensions, health, leave; lose flexibility and possibly hours (firms substitute capital or hire fewer hours).</li>
<li><span class="key">Marginal drivers</span> with the highest taste for flexibility: priced out as the formal package raises labour costs above their reservation utility — they exit.</li>
<li><span class="key">Platforms</span>: profits fall by the value of the previously-uncompensated CWD; some adjust the model (per-hour caps, fewer regions served).</li>
<li><span class="key">Consumers</span>: prices rise as the pass-through occurs.</li>
</ul>
<p>The net welfare verdict depends on (a) how much of the gap was monopsony rent (then reclassification is a Pareto improvement net of platform losses) versus (b) how much was a true sorting equilibrium with heterogeneous preferences (then reclassification destroys some matches without raising welfare). Empirical evidence from California AB-5 and EU Platform Workers Directive points to a mixture: there <em>is</em> monopsony rent to extract, but employment also fell modestly. The Indonesian policy debate is exactly this trade-off.</p>
<div class="tip">UAS hint: the question asks "why similar wages do not equate to comparable total compensation". Answer with the CWD framework — total compensation = wage + benefits − disutility, and show why platforms break the standard prediction (heterogeneity, monopsony, mis-perception, no formal outside option).</div>`,
              id: `<p>Serikat pengemudi menuntut reklasifikasi sebagai karyawan penuh. Kerangka CWD memungkinkan kita membaca konsekuensi kesejahteraan secara jelas.</p>
<ul>
<li><span class="key">Pengemudi yang ada</span> yang akan tetap gig: dapat pensiun, kesehatan, cuti; kehilangan fleksibilitas dan mungkin jam (perusahaan substitusi modal atau merekrut jam lebih sedikit).</li>
<li><span class="key">Pengemudi marjinal</span> dengan selera fleksibilitas tertinggi: terdorong keluar saat paket formal menaikkan biaya tenaga kerja di atas reservation utility mereka — keluar.</li>
<li><span class="key">Platform</span>: laba turun sebesar nilai CWD yang sebelumnya tak dikompensasi.</li>
<li><span class="key">Konsumen</span>: harga naik karena pass-through.</li>
</ul>
<p>Vonis kesejahteraan neto bergantung (a) berapa banyak kesenjangan tadi sewa monopsoni (maka reklasifikasi adalah perbaikan Pareto neto kerugian platform) vs (b) keseimbangan penyortiran sejati dengan preferensi heterogen (maka reklasifikasi menghancurkan kecocokan tanpa menaikkan kesejahteraan). Bukti California AB-5 dan EU Platform Workers Directive menunjuk campuran.</p>
<div class="tip">Petunjuk UAS: jawab dengan kerangka CWD — kompensasi total = upah + tunjangan − disutilitas, dan tunjukkan mengapa platform mematahkan prediksi standar.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Tutorial Q2: a pension cut as a hidden wage cut', id: 'Tutorial Q2: pemotongan pensiun sebagai pemotongan upah tersembunyi' },
        num: '6',
        cards: [
          {
            title: { en: 'When the government cuts PNS pensions', id: 'Ketika pemerintah memotong pensiun PNS' },
            html: {
              en: `<p>The government's sudden announcement that promised PNS pensions will be cut is a <em>reduction in deferred compensation</em>. Through the CWD lens it is mathematically identical to a wage cut equal to the present value of the lost pension benefits.</p>
<p>Predicted future labour-market effects, in order of immediacy:</p>
<ol>
<li><span class="key">Total compensation falls.</span> Existing PNS find their package now utility-below their next-best alternative. Quit rates rise (especially for younger, more mobile officials who had counted on long careers).</li>
<li><span class="key">Compensating wage demand.</span> To attract replacements, the government must either raise nominal salaries (the CWD that the pension used to provide) or accept lower-quality applicants. Salary–pension trade-offs are the standard public-sector compensation tool.</li>
<li><span class="key">Worker self-selection changes.</span> Civil-service competition was historically tilted toward risk-averse, present-oriented workers because the pension was a low-risk deferred annuity. After the cut, applicants will skew toward those who value current income and tolerate retirement risk — a different talent pool.</li>
<li><span class="key">Worker training & tenure.</span> Pensions had vesting/cliff features that encouraged long tenure (a form of specific-training cost-sharing). Cutting them reduces firm-specific human capital accumulation and raises turnover.</li>
<li><span class="key">Credibility cost.</span> A retroactive cut signals that future government promises are unreliable. The CWD that future PNS demand for the same job rises — the government pays a "trust premium" forever.</li>
</ol>`,
              id: `<p>Pengumuman tiba-tiba pemerintah bahwa pensiun PNS dipotong adalah <em>pengurangan kompensasi tertunda</em>. Lewat lensa CWD identik secara matematis dengan pemotongan upah sebesar nilai sekarang manfaat pensiun yang hilang.</p>
<p>Efek pasar kerja masa depan yang diprediksi, dalam urutan kecepatan:</p>
<ol>
<li><span class="key">Kompensasi total turun.</span> PNS yang ada menemukan paket mereka kini utilitas-di-bawah alternatif terbaik berikutnya. Tingkat keluar naik (khususnya pejabat muda yang lebih mobil).</li>
<li><span class="key">Tuntutan upah kompensatif.</span> Untuk menarik pengganti, pemerintah harus menaikkan gaji nominal atau menerima pelamar berkualitas lebih rendah.</li>
<li><span class="key">Self-selection pekerja berubah.</span> Persaingan PNS dulu condong ke pekerja averse risiko, berorientasi sekarang karena pensiun anuitas tertunda risiko rendah. Setelah pemotongan, pelamar miring ke yang menghargai pendapatan sekarang dan toleran risiko pensiun — kumpulan talenta berbeda.</li>
<li><span class="key">Pelatihan & masa kerja.</span> Pensiun punya fitur vesting/cliff yang mendorong masa kerja panjang (bentuk berbagi-biaya pelatihan khusus). Pemotongan mengurangi akumulasi modal manusia khusus-perusahaan dan menaikkan turnover.</li>
<li><span class="key">Biaya kredibilitas.</span> Pemotongan retroaktif memberi sinyal bahwa janji pemerintah masa depan tidak andal. CWD yang dituntut PNS masa depan untuk pekerjaan yang sama naik — pemerintah membayar "premium kepercayaan" selamanya.</li>
</ol>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'CWD toolkit', id: 'Kit alat CWD' },
        num: 'F',
        cards: [
          {
            title: { en: 'Utility & indifference', id: 'Utilitas & indiferen' },
            html: {
              en: `<div class="formula">$U = U(w, x), \\; U_w > 0, \\; U_x < 0$</div>
<div class="formula">IC slope: $\\;\\dfrac{dw}{dx}\\bigg|_{\\bar U} = -\\dfrac{U_x}{U_w} = \\text{MRS}_{xw} > 0$</div>
<div class="formula">CWD: $\\;w_1 - w_0 \\;\\text{such that}\\; U(w_0, x_0) = U(w_1, x_1)$</div>
<div class="formula">Tutorial Q1 special case $U = \\sqrt{w} - 2x$: clean (16,0) ⇒ dirty (36,1), CWD = 20.</div>`,
              id: `<div class="formula">$U = U(w, x), \\; U_w > 0, \\; U_x < 0$</div>
<div class="formula">Kemiringan IC: $\\;\\dfrac{dw}{dx}\\bigg|_{\\bar U} = -\\dfrac{U_x}{U_w} = \\text{MRS}_{xw} > 0$</div>
<div class="formula">CWD: $\\;w_1 - w_0 \\;\\text{such that}\\; U(w_0, x_0) = U(w_1, x_1)$</div>
<div class="formula">Tutorial Q1 khusus $U = \\sqrt{w} - 2x$: bersih (16,0) ⇒ kotor (36,1), CWD = 20.</div>`
            }
          },
          {
            title: { en: 'Hedonic locus & sorting', id: 'Lokus hedonik & penyortiran' },
            html: {
              en: `<div class="formula">Hedonic wage: $\\;w = h(x), \\; h'(x) > 0$</div>
<div class="formula">Worker FOC: $\\;h'(x^{*}) = \\text{MRS}^i_{xw}(x^{*}, w^{*})$</div>
<div class="formula">Sorting: risk-averse → low $x$; risk-tolerant → high $x$; gap = CWD on locus.</div>
<div class="formula">Total compensation: $\\;\\text{TC} = w + \\text{PV(benefits)} - \\text{MWTP}(x)$</div>`,
              id: `<div class="formula">Upah hedonik: $\\;w = h(x), \\; h'(x) > 0$</div>
<div class="formula">FOC pekerja: $\\;h'(x^{*}) = \\text{MRS}^i_{xw}(x^{*}, w^{*})$</div>
<div class="formula">Penyortiran: averse risiko → $x$ rendah; toleran → $x$ tinggi; selisih = CWD di lokus.</div>
<div class="formula">Kompensasi total: $\\;\\text{TC} = w + \\text{PV(tunjangan)} - \\text{MWTP}(x)$</div>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Two diagrams', id: 'Dua diagram' },
        num: 'G',
        cards: [
          {
            title: { en: '1. Hedonic locus with two worker types', id: '1. Lokus hedonik dengan dua tipe pekerja' },
            html: {
              en: '<p>Convex hedonic curve $w = h(x)$. Plot a flat IC (risk-tolerant) tangent at high $x$ and a steep IC (risk-averse) tangent at low $x$. Each worker chooses the tangency. Vertical difference between the two tangencies on the locus = the equilibrium CWD.</p>',
              id: '<p>Kurva hedonik cembung $w = h(x)$. Plot IC datar (toleran) tangen di $x$ tinggi dan IC curam (averse) tangen di $x$ rendah. Tiap pekerja pilih tangen. Selisih vertikal pada lokus = CWD keseimbangan.</p>'
            },
            chart: HEDONIC
          },
          {
            title: { en: '2. Bekasi vs Tangerang (sorting without CWD)', id: '2. Bekasi vs Tangerang (penyortiran tanpa CWD)' },
            html: {
              en: '<p>Horizontal isocost line at $W^{*}$ (no cost to firm of choosing $x$). Bekasi IC slopes up; tangency at $x=0$. Tangerang IC is U-shaped; tangency at $x=S^{*}$. Same wage, different jobs — no CWD because the disamenity is costless.</p>',
              id: '<p>Garis isocost horizontal pada $W^{*}$ (tanpa biaya bagi perusahaan memilih $x$). IC Bekasi miring naik; tangen di $x=0$. IC Tangerang U-shape; tangen di $x=S^{*}$. Upah sama, pekerjaan berbeda — tanpa CWD karena disamenity tanpa biaya.</p>'
            },
            chart: SHAMPOO
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'computation',
        q: { en: 'A worker has $U = \\ln w - 3x$. Clean job ($x=0$) pays 24. What does the dirty job ($x=1$) pay? What is the CWD?',
             id: 'Pekerja $U = \\ln w - 3x$. Bersih ($x=0$) bayar 24. Kotor ($x=1$) bayar berapa? Berapa CWD?' },
        answer: [
          { en: 'Clean utility: $U_0 = \\ln 24 - 3(0) = \\ln 24 \\approx 3.178$.',
            id: 'Utilitas bersih: $U_0 = \\ln 24 \\approx 3{,}178$.' },
          { en: 'Indifference at dirty: $\\ln w_1 - 3 = \\ln 24 \\Rightarrow \\ln w_1 = \\ln 24 + 3 \\Rightarrow w_1 = 24 e^{3} \\approx 482.1$.',
            id: 'Indiferen kotor: $\\ln w_1 = \\ln 24 + 3 \\Rightarrow w_1 = 24 e^{3} \\approx 482{,}1$.' },
          { en: 'CWD $\\approx 482.1 - 24 \\approx 458.1$. Compared to $U = \\sqrt{w}-2x$ in Q1 (CWD = 20), this worker is far more risk-averse — log utility falls much faster in $w$.',
            id: 'CWD $\\approx 458{,}1$. Dibanding $U = \\sqrt{w}-2x$ di Q1 (CWD = 20), pekerja ini jauh lebih averse risiko — utilitas log turun jauh lebih cepat di $w$.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Gig drivers earn approximately the minimum wage but lack benefits. Does the CWD framework imply gig pay is "fair"?',
             id: 'Pengemudi gig berpenghasilan sekitar UMR tapi tanpa tunjangan. Apakah kerangka CWD mengimplikasikan upah gig "adil"?' },
        answer: [
          { en: 'No. The theory predicts the gig wage <em>should</em> exceed the formal wage by the present value of missing benefits and the value of higher risk. Empirical equality of nominal wages means total compensation is <em>below</em> the formal benchmark.',
            id: 'Tidak. Teori memprediksi upah gig <em>seharusnya</em> melebihi formal sebesar nilai sekarang tunjangan yang hilang plus nilai risiko lebih tinggi. Kesetaraan nominal berarti kompensasi total <em>di bawah</em> patokan formal.' },
          { en: 'Why does the market clear anyway? Four candidates: (i) no formal outside option for these workers; (ii) platform monopsony; (iii) systematic under-perception of low-probability disasters; (iv) selection — gig attracts workers with low disutility from risk and high taste for flexibility, so the marginal driver is happy even though the average formal worker would not be.',
            id: 'Mengapa pasar tetap bersih? Empat kandidat: (i) tidak ada opsi formal; (ii) monopsoni platform; (iii) bawaan-perspesi salah; (iv) seleksi — gig menarik pekerja disutilitas risiko rendah dan suka fleksibilitas.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Tutorial Q2: future labour-market effects of cutting PNS pensions?',
             id: 'Tutorial Q2: efek pasar kerja masa depan memotong pensiun PNS?' },
        answer: [
          { en: 'Equivalent to a wage cut equal to PV(lost pension): quit rates rise, especially among young/mobile PNS; government must raise salaries to fill positions or accept lower-quality applicants.',
            id: 'Setara dengan pemotongan upah sebesar PV(pensiun hilang): tingkat keluar naik; pemerintah harus menaikkan gaji atau menerima pelamar lebih rendah.' },
          { en: 'Self-selection of applicants changes: less risk-averse, more present-oriented. Long-tenure incentive disappears, raising turnover and reducing firm-specific human capital. Credibility loss adds a permanent "trust premium" to future government compensation.',
            id: 'Self-selection berubah: kurang averse risiko, lebih sekarang-oriented. Insentif masa kerja panjang hilang, turnover naik, modal manusia khusus-perusahaan turun. Hilangnya kredibilitas menambah "premium kepercayaan" permanen.' }
        ]
      }
    ]
  };
})();
