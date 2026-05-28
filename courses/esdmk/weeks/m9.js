/* ============================================================================
   ESDMK · Week 9 — Labour Market Discrimination
   Bilingual (EN + ID). Registers itself on window.ESDMK_WEEKS.m9.
   Sources: Lecturer deck "Session 9 – Labour Market Discrimination"
   + Borjas ch.9, Ehrenberg–Smith ch.12, Becker (1971), Arrow (1973), Phelps (1972).
   Maps to UAS Topic 3.

   Welfare/diagram geometry used in graphs:
     • Color-blind firm:  Wb=4, VMP_E: P=10-Q ⇒ E_B* = 6
     • Discriminatory firm d0=0.25: cost = 5  ⇒ E_B^0 = 5
     • Discriminatory firm d1=0.50: cost = 6  ⇒ E_B^1 = 4
     • White wage Ww=6 ⇒ E_W* = 4 (same firm hires fewer workers because Ww>Wb)
   ============================================================================ */
(function () {
  window.ESDMK_WEEKS = window.ESDMK_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16', GREEN = '#15803d';
  var LOSS = 'rgba(192,57,43,.16)';
  var GAIN = 'rgba(14,143,184,.16)';

  /* ---- Chart 1: VMP_E and the prejudiced-firm decision ---------------------- */
  var VMP_CHART = { panels: [{
    title: 'Becker employer discrimination — hire less of the disliked group',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Employment E' },
    y: { min: 0, max: 10, label: 'Wage / VMP_E' },
    curves: [
      { id: 'VMP', kind: 'line', p1: [0, 10], p2: [10, 0], color: RED, label: 'VMP_E = 10 − E' },
      { id: 'Wb',  kind: 'hline', y: 4, color: TEAL, label: 'W_F = 4 (true wage)' },
      { id: 'Wd0', kind: 'hline', y: 5, color: AMBER, label: 'W_F(1+d₀) = 5' },
      { id: 'Wd1', kind: 'hline', y: 6, color: LINE,  label: 'W_F(1+d₁) = 6' }
    ],
    points: [
      { on: ['VMP', 'Wb'],  guideX: 'E_F* = 6', dot: true },
      { on: ['VMP', 'Wd0'], guideX: 'E⁰ = 5',   dot: true },
      { on: ['VMP', 'Wd1'], guideX: 'E¹ = 4',   dot: true }
    ],
    notes: [
      { x: 7.5, y: 2.0, text: 'd↑ ⇒ employment of target group ↓', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 2: market equilibrium black-white wage ratio ------------------- */
  var EQ_CHART = { panels: [{
    title: 'Market equilibrium: W_F/W_M < 1 even with equal skill',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Employment of group F' },
    y: { min: 0, max: 1.6, label: 'W_F / W_M' },
    curves: [
      { id: 'S',  kind: 'vline', x: 6, color: LINE, label: 'S (inelastic)' },
      { id: 'D',  kind: 'line', p1: [0, 1.4], p2: [10, 0.2], color: RED,  label: 'D (with prejudice)' },
      { id: 'Dp', kind: 'line', p1: [0, 1.7], p2: [10, 0.5], color: GREEN, label: "D' (less prejudice)", dash: true },
      { id: 'one', kind: 'hline', y: 1.0, color: '#999', label: 'parity' }
    ],
    points: [
      { on: ['D',  'S'], guideY: '(W_F/W_M)*',  dot: true },
      { on: ['Dp', 'S'], guideY: "(W_F/W_M)'", dot: true }
    ],
    notes: [
      { x: 2.5, y: 0.65, text: 'gap = unexplained portion of Oaxaca decomp.', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 3: Oaxaca decomposition (men vs women earnings line) ----------- */
  var OAXACA_CHART = { panels: [{
    title: 'Oaxaca: skill gap (sₘ−s_f) vs discrimination (intercept + slope)',
    w: 460, h: 320,
    x: { min: 0, max: 16, label: 'Years of schooling s' },
    y: { min: 0, max: 12, label: 'ln w' },
    curves: [
      { id: 'M', kind: 'line', p1: [0, 4], p2: [16, 11], color: TEAL, label: 'wM = αM + βM·s' },
      { id: 'F', kind: 'line', p1: [0, 3], p2: [16, 8],  color: RED,  label: 'wF = αF + βF·s' },
      { id: 'sF', kind: 'vline', x: 8, color: '#999', label: 's_F' },
      { id: 'sM', kind: 'vline', x: 12, color: '#999', label: 's_M' }
    ],
    points: [
      { on: ['F', 'sF'], guideY: 'w_F', dot: true },
      { on: ['M', 'sF'], guideY: 'w*_F (if paid as man)', dot: true },
      { on: ['M', 'sM'], guideY: 'w_M', dot: true }
    ],
    notes: [
      { x: 5,  y: 9.5, text: 'discrimination = w*_F − w_F', color: GREEN, anchor: 'middle', size: 10 },
      { x: 13.5, y: 4.5, text: 'skill diff = β_M·(s_M − s_F)', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  window.ESDMK_WEEKS.m9 = {
    id: 'm9',
    label: { en: 'Week 9', id: 'Pertemuan 9' },
    title: { en: 'Labour Market Discrimination', id: 'Diskriminasi di Pasar Kerja' },
    subtitle: {
      en: 'Becker\'s taste-based theory (employer, employee, customer), statistical discrimination, the Oaxaca decomposition of the wage gap — and why Indonesian gender gaps persist.',
      id: 'Teori berbasis selera Becker (pengusaha, pekerja, konsumen), diskriminasi statistik, dekomposisi Oaxaca atas kesenjangan upah — dan mengapa kesenjangan gender Indonesia bertahan.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'What "discrimination" means in labour economics', id: 'Apa arti "diskriminasi" di ekonomi tenaga kerja' },
        num: '1',
        cards: [
          {
            title: { en: 'Arrow\'s definition', id: 'Definisi Arrow' },
            html: {
              en: `<p>Arrow (1971): <span class="key">labour-market discrimination</span> is the valuation in the market of personal characteristics of the worker that are <em>unrelated to productivity</em> — skin colour, race, gender, origin, religion, age, sexual orientation, beauty, accent.</p>
<p>Two workers with identical productivity earning different wages, or being placed in different jobs, because of one of these characteristics is the working definition the rest of the chapter operates on. The framework below explains <em>why</em> this happens and <em>how</em> we measure it.</p>
<div class="note">Beware the headline number: median full-time earnings show a 20%+ gap in the US (white males vs white females or black males), but most of that raw gap reflects differences in <span class="key">human capital</span> (schooling, on-the-job experience, school quality) that arise <em>before</em> entering the labour market. Pure labour-market discrimination is what remains after we control for those.</div>`,
              id: `<p>Arrow (1971): <span class="key">diskriminasi pasar kerja</span> adalah penilaian di pasar atas karakteristik pribadi pekerja yang <em>tidak terkait dengan produktivitas</em> — warna kulit, ras, gender, asal, agama, usia, orientasi seksual, penampilan, aksen.</p>
<p>Dua pekerja dengan produktivitas identik tetapi menerima upah berbeda, atau ditempatkan pada pekerjaan berbeda, karena salah satu karakteristik ini — itulah definisi kerja bab ini. Kerangka di bawah menjelaskan <em>mengapa</em> itu terjadi dan <em>bagaimana</em> kita mengukurnya.</p>
<div class="note">Awas dengan angka utama: median pendapatan AS menunjukkan kesenjangan 20%+ (pria kulit putih vs perempuan kulit putih atau pria kulit hitam), tetapi sebagian besar mencerminkan perbedaan <span class="key">modal manusia</span> (sekolah, pengalaman kerja, kualitas sekolah) yang muncul <em>sebelum</em> masuk pasar kerja. Diskriminasi murni adalah sisa setelah kita mengendalikan faktor-faktor itu.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Becker (1957/1971): the taste-based model', id: 'Becker (1957/1971): model berbasis selera' },
        num: '2',
        cards: [
          {
            title: { en: 'The discrimination coefficient d', id: 'Koefisien diskriminasi d' },
            html: {
              en: `<p>Becker's idea: prejudice is a <em>taste</em>. An employer who dislikes hiring group <span class="key">F</span> (say women) acts as if their labour costs more than it does. Letting $w_F$ be the actual wage and $d \\ge 0$ the <span class="key">discrimination coefficient</span>, the employer's utility-adjusted wage is</p>
<div class="formula">$$w_F^{\\text{eff}} = w_F\\,(1+d).$$</div>
<p>The wedge $d$ is a percentage mark-up that captures the employer's disutility from hiring an F worker. A bigger $d$ = stronger prejudice. The <span class="key">flip side</span> is <span class="key">nepotism</span>: an employer who favours her own group pays as if their wage were $w_M(1-n)$ with $n>0$.</p>
<div class="tip">Three flavours of taste-based discrimination — by <span class="key">employer</span>, by <span class="key">employee</span> (co-workers dislike F so the wage they perceive is $w_M(1-d)$), and by <span class="key">customer</span> (consumers won't buy at full price from F, so price = $p(1+d)$). Only one of the three (<em>employer</em>) produces a wage gap among equally productive workers in equilibrium; the other two produce <span class="key">segregation</span> or <span class="key">price-cuts</span>, not wage gaps.</div>`,
              id: `<p>Ide Becker: prasangka adalah <em>selera</em>. Pengusaha yang tidak suka merekrut kelompok <span class="key">F</span> (misal perempuan) bertindak seolah-olah tenaga kerjanya lebih mahal. Misalkan $w_F$ adalah upah aktual dan $d \\ge 0$ <span class="key">koefisien diskriminasi</span>, upah yang disesuaikan utilitas pengusaha adalah</p>
<div class="formula">$$w_F^{\\text{eff}} = w_F\\,(1+d).$$</div>
<p>Baji $d$ adalah persen mark-up yang menangkap disutilitas pengusaha dari merekrut pekerja F. $d$ lebih besar = prasangka lebih kuat. <span class="key">Sisi lain</span> adalah <span class="key">nepotisme</span>: pengusaha yang menyukai kelompoknya sendiri membayar seolah upah mereka $w_M(1-n)$ dengan $n>0$.</p>
<div class="tip">Tiga jenis diskriminasi berbasis selera — oleh <span class="key">pengusaha</span>, oleh <span class="key">rekan kerja</span> (rekan tidak suka F sehingga upah yang dirasakan $w_M(1-d)$), dan oleh <span class="key">konsumen</span> (konsumen tidak mau beli pada harga penuh dari F, sehingga harga = $p(1+d)$). Hanya satu dari tiga (<em>pengusaha</em>) yang menghasilkan kesenjangan upah antar pekerja yang sama produktifnya di keseimbangan; dua lainnya menghasilkan <span class="key">segregasi</span> atau <span class="key">potongan harga</span>, bukan kesenjangan upah.</div>`
            }
          },
          {
            title: { en: 'Employer hiring rule', id: 'Aturan rekrutmen pengusaha' },
            html: {
              en: `<p>Two groups M and F are perfect substitutes in production with $q = f(E_M + E_F)$. A non-discriminatory firm hires whichever group is cheaper up to the point $w = \\text{VMP}_E$. A discriminator with $d>0$ against F compares the <em>utility-adjusted</em> cost:</p>
<ul>
<li>Hire only F if $w_F(1+d) < w_M$ &nbsp;— prejudice is too small to overcome the wage gap.</li>
<li>Hire only M if $w_F(1+d) > w_M$ &nbsp;— prejudice "buys" segregation at the cost of a wage premium.</li>
</ul>
<p>Either way the firm is <span class="key">segregated</span>. The hiring rule along the firm's VMP curve becomes $w_F(1+d) = \\text{VMP}_E$, so F-employment is</p>
<div class="formula">$$E_F^{*} = \\text{VMP}^{-1}\\!\\big(w_F\\,(1+d)\\big),$$</div>
<p>which is <em>smaller</em> than the color-blind level. The chart below makes this explicit.</p>`,
              id: `<p>Dua kelompok M dan F adalah substitusi sempurna dalam produksi dengan $q = f(E_M + E_F)$. Perusahaan non-diskriminatif merekrut yang lebih murah sampai $w = \\text{VMP}_E$. Perusahaan diskriminatif dengan $d>0$ terhadap F membandingkan biaya <em>yang disesuaikan utilitas</em>:</p>
<ul>
<li>Merekrut F saja jika $w_F(1+d) < w_M$ — prasangka terlalu kecil untuk mengatasi kesenjangan upah.</li>
<li>Merekrut M saja jika $w_F(1+d) > w_M$ — prasangka "membeli" segregasi dengan biaya premium upah.</li>
</ul>
<p>Bagaimanapun perusahaan menjadi <span class="key">tersegregasi</span>. Aturan rekrutmen di sepanjang kurva VMP menjadi $w_F(1+d) = \\text{VMP}_E$, sehingga lapangan kerja F adalah</p>
<div class="formula">$$E_F^{*} = \\text{VMP}^{-1}\\!\\big(w_F\\,(1+d)\\big),$$</div>
<p>yang lebih <em>kecil</em> dibanding tingkat tanpa-buta-warna. Grafik di bawah memperjelasnya.</p>`
            },
            chart: VMP_CHART
          },
          {
            title: { en: 'Discrimination does not pay (profit channel)', id: 'Diskriminasi tidak menguntungkan (jalur laba)' },
            html: {
              en: `<p>The non-discriminating firm hires the cheaper group up to $w = \\text{VMP}_E$ and earns the maximum profit $\\pi_{\\max}$. Any firm with $d>0$ either hires the more expensive group (and so hires fewer workers, missing the VMP rectangle) or pays the same wage but produces less per worker — either way $\\pi$ falls as $d$ rises.</p>
<p>The profit curve declines from $\\pi_{\\max}$ at $d=0$ down to $\\pi_W$ at $d=d_W$ (the threshold where the firm switches to hiring only M at $w_M$). For $d \\ge d_W$ the firm is "all-M" and its profit is flat at $\\pi_W$.</p>
<div class="tip">Becker's striking prediction: <span class="key">competition should erode taste-based discrimination over time</span>. Non-discriminators have lower costs, expand, drive out discriminators. If discrimination <em>persists</em> (as in Indonesia for decades) we need a different mechanism — statistical discrimination, market frictions, network hiring, or culturally enforced segregation.</div>`,
              id: `<p>Perusahaan non-diskriminatif merekrut kelompok yang lebih murah sampai $w = \\text{VMP}_E$ dan memperoleh laba maksimum $\\pi_{\\max}$. Setiap perusahaan dengan $d>0$ entah merekrut kelompok yang lebih mahal (dan merekrut lebih sedikit, kehilangan persegi VMP) atau membayar upah yang sama tapi memproduksi lebih sedikit per pekerja — bagaimanapun $\\pi$ turun saat $d$ naik.</p>
<p>Kurva laba turun dari $\\pi_{\\max}$ pada $d=0$ hingga $\\pi_W$ pada $d=d_W$ (ambang ketika perusahaan beralih merekrut hanya M pada $w_M$). Untuk $d \\ge d_W$ perusahaan "semua-M" dan labanya tetap $\\pi_W$.</p>
<div class="tip">Prediksi mengejutkan Becker: <span class="key">persaingan seharusnya mengikis diskriminasi berbasis selera dari waktu ke waktu</span>. Non-diskriminator berbiaya rendah, berkembang, mengusir yang diskriminatif. Bila diskriminasi <em>bertahan</em> (seperti di Indonesia selama puluhan tahun) kita perlu mekanisme lain — diskriminasi statistik, friksi pasar, rekrutmen via jaringan, atau segregasi yang ditegakkan budaya.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Equilibrium wage gap & employee / customer cases', id: 'Kesenjangan upah equilibrium & kasus rekan / konsumen' },
        num: '3',
        cards: [
          {
            title: { en: 'Market equilibrium of the wage ratio', id: 'Keseimbangan pasar atas rasio upah' },
            html: {
              en: `<p>Aggregate the firm decisions. Plot the F/M wage <em>ratio</em> against F-employment. The supply of F is perfectly inelastic at $N$ (population given). The demand curve is downward-sloping: as $w_F/w_M$ falls, more firms cross their $d$ threshold and start hiring F, so quantity demanded rises.</p>
<p>The equilibrium ratio sits <span class="key">below 1</span>: equally skilled F workers earn less because they are crowded into the small set of firms willing to hire them. A shift to less prejudice (curve $D'$) raises the equilibrium ratio toward parity. If enough firms abandon prejudice, the gap closes.</p>`,
              id: `<p>Agregasi keputusan perusahaan. Plot <em>rasio</em> upah F/M terhadap lapangan kerja F. Penawaran F inelastis sempurna pada $N$ (populasi tetap). Kurva permintaan miring ke bawah: saat $w_F/w_M$ turun, lebih banyak perusahaan melewati ambang $d$ mereka dan mulai merekrut F, sehingga jumlah yang diminta naik.</p>
<p>Rasio keseimbangan berada <span class="key">di bawah 1</span>: pekerja F dengan keterampilan setara mendapat upah lebih rendah karena dipadatkan ke sedikit perusahaan yang bersedia merekrut mereka. Pergeseran ke prasangka yang lebih kecil (kurva $D'$) menaikkan rasio menuju paritas. Bila cukup banyak perusahaan meninggalkan prasangka, kesenjangan menutup.</div>`
            },
            chart: EQ_CHART
          },
          {
            title: { en: 'Employee & customer discrimination', id: 'Diskriminasi rekan & konsumen' },
            html: {
              en: `<p><span class="key">Employee discrimination.</span> M workers dislike working alongside F. Their effective wage is $w_M(1-d)$ so they demand a premium to be in mixed teams. Color-blind firms <em>segregate</em> teams (all-M crews and all-F crews) and pay the same market wage to both — no equilibrium wage gap, just sorting. Firms are equally profitable.</p>
<p><span class="key">Customer discrimination.</span> Customers dislike buying from F sellers; the utility-adjusted price is $p(1+d)$. The firm can avoid the loss by hiding F workers from public view (back-office roles) — no wage gap. If hiding is impossible (sales, service), the firm must <em>cut the price</em> $p$ when an F worker fronts the deal, which lowers F's marginal revenue product and so lowers $w_F$. This is the only one of the three that produces a real wage gap without segregation, and it explains gender wage gaps in customer-facing service jobs.</p>`,
              id: `<p><span class="key">Diskriminasi rekan.</span> Pekerja M tidak suka bekerja berdampingan dengan F. Upah efektif mereka $w_M(1-d)$ sehingga menuntut premium untuk berada di tim campur. Perusahaan tanpa prasangka <em>mensegregasi</em> tim (kru semua-M dan semua-F) dan membayar upah pasar yang sama — tidak ada kesenjangan upah keseimbangan, hanya penyortiran. Perusahaan sama menguntungkan.</p>
<p><span class="key">Diskriminasi konsumen.</span> Konsumen tidak suka membeli dari penjual F; harga yang disesuaikan utilitas $p(1+d)$. Perusahaan bisa menghindari rugi dengan menyembunyikan pekerja F dari pandangan publik (peran back-office) — tidak ada kesenjangan upah. Bila penyembunyian mustahil (penjualan, layanan), perusahaan harus <em>memotong harga</em> $p$ ketika pekerja F yang menghadapi konsumen, yang menurunkan produk marjinal pendapatan F dan dengan demikian menurunkan $w_F$. Ini satu-satunya dari ketiganya yang menghasilkan kesenjangan upah nyata tanpa segregasi, dan menjelaskan kesenjangan upah gender di pekerjaan layanan customer-facing.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Statistical discrimination (Arrow / Phelps)', id: 'Diskriminasi statistik (Arrow / Phelps)' },
        num: '4',
        cards: [
          {
            title: { en: 'Why imperfect information generates a group penalty', id: 'Mengapa informasi tidak sempurna menghasilkan hukuman kelompok' },
            html: {
              en: `<p>Becker assumes employers know each worker's productivity but <em>dislike</em> hiring some. Statistical discrimination flips the assumption: employers have <em>no taste</em> for prejudice but cannot perfectly observe individual productivity. They use the <span class="key">group average</span> as a proxy:</p>
<div class="formula">$$\\hat{y}_i = (1-\\alpha)\\,\\bar{y}_g + \\alpha\\,T_i,$$</div>
<p>where $T_i$ is the noisy individual signal (CV, test score), $\\bar{y}_g$ is the group mean and $\\alpha \\in (0,1)$ is how reliable the individual signal is for that group. If group F is (statistically) less productive on average, every individual F worker is offered the lower expected wage <em>even if she is high-productivity</em>.</p>
<div class="note">Two channels generate a wage gap:
<ol><li><span class="key">Different group means.</span> If $\\bar{y}_F < \\bar{y}_M$, F workers face a parallel shift down in the wage–score line.</li>
<li><span class="key">Different signal precision.</span> If the test is a noisier predictor for F (smaller $\\alpha$), high-scoring F workers gain less from their score than high-scoring M workers — the slope is flatter, and high-scoring Fs are <em>underpaid</em> while low-scoring Fs are <em>overpaid</em> relative to their M counterparts.</li></ol>
This is exactly the two panels of Borjas Figure 9-6 in the lecturer deck.</div>`,
              id: `<p>Becker mengasumsikan pengusaha tahu produktivitas tiap pekerja tetapi <em>tidak suka</em> merekrut sebagian. Diskriminasi statistik membalik asumsinya: pengusaha <em>tanpa selera</em> prasangka tetapi tidak bisa mengamati produktivitas individu dengan sempurna. Mereka memakai <span class="key">rata-rata kelompok</span> sebagai proksi:</p>
<div class="formula">$$\\hat{y}_i = (1-\\alpha)\\,\\bar{y}_g + \\alpha\\,T_i,$$</div>
<p>di mana $T_i$ adalah sinyal individu yang bising (CV, skor tes), $\\bar{y}_g$ rata-rata kelompok dan $\\alpha \\in (0,1)$ tingkat keandalan sinyal individu untuk kelompok itu. Bila kelompok F (secara statistik) kurang produktif rata-rata, setiap pekerja F individu ditawari upah ekspektasi lebih rendah <em>bahkan jika dia produktif tinggi</em>.</p>
<div class="note">Dua jalur menghasilkan kesenjangan upah:
<ol><li><span class="key">Rata-rata kelompok berbeda.</span> Bila $\\bar{y}_F < \\bar{y}_M$, pekerja F menghadapi pergeseran paralel ke bawah pada garis upah–skor.</li>
<li><span class="key">Presisi sinyal berbeda.</span> Bila tes prediktor yang lebih bising untuk F ($\\alpha$ lebih kecil), pekerja F yang skor tinggi mendapat lebih sedikit dari skornya daripada M skor tinggi — kemiringannya lebih landai, dan F skor tinggi <em>dibayar terlalu rendah</em> sementara F skor rendah <em>dibayar terlalu tinggi</em> relatif terhadap rekan M-nya.</li></ol>
Inilah persis dua panel Borjas Gambar 9-6 di slide dosen.</div>`
            }
          },
          {
            title: { en: 'Statistical discrimination is self-reinforcing', id: 'Diskriminasi statistik memperkuat diri' },
            html: {
              en: `<p>Suppose employers (rationally or not) believe F workers will quit when they marry / have children, so they invest less firm-specific training in them. Anticipating fewer promotions, F workers invest less in their own human capital and accept lower-attachment jobs — confirming the original belief. The equilibrium is a <span class="key">self-fulfilling low-investment trap</span>: even if average F productivity <em>could</em> be equal, the system locks in a gap.</p>
<p>Key differences from Becker:
<ul><li>Competition does <em>not</em> erode statistical discrimination, because non-discriminators have no cost advantage — the group-average rule is the rational Bayesian update.</li>
<li>The cure is more <span class="key">information</span> (better signals, certifications, work history visibility) and breaking the self-fulfilling cycle (parental leave, anti-discrimination law that forces employers to evaluate individuals).</li></ul></p>`,
              id: `<p>Misalkan pengusaha (rasional atau tidak) percaya pekerja F akan berhenti saat menikah / punya anak, sehingga mereka kurang berinvestasi dalam pelatihan khusus-perusahaan untuk mereka. Mengantisipasi promosi yang lebih sedikit, pekerja F berinvestasi lebih sedikit dalam modal manusia mereka sendiri dan menerima pekerjaan rendah-keterikatan — mengonfirmasi keyakinan awal. Keseimbangannya adalah <span class="key">perangkap investasi rendah yang memenuhi-diri</span>: bahkan jika rata-rata produktivitas F <em>bisa</em> setara, sistem mengunci kesenjangan.</p>
<p>Perbedaan kunci dari Becker:
<ul><li>Persaingan <em>tidak</em> mengikis diskriminasi statistik, karena non-diskriminator tidak punya keunggulan biaya — aturan rata-rata kelompok adalah pembaruan Bayesian yang rasional.</li>
<li>Obatnya adalah lebih banyak <span class="key">informasi</span> (sinyal lebih baik, sertifikasi, riwayat kerja yang terlihat) dan memutus siklus self-fulfilling (cuti orangtua, hukum anti-diskriminasi yang memaksa pengusaha mengevaluasi individu).</li></ul></p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Measuring the gap: the Oaxaca decomposition', id: 'Mengukur kesenjangan: dekomposisi Oaxaca' },
        num: '5',
        cards: [
          {
            title: { en: 'Splitting the raw gap into "skills" vs "discrimination"', id: 'Memecah kesenjangan mentah menjadi "skill" vs "diskriminasi"' },
            html: {
              en: `<p>Raw gap $\\Delta\\bar{w} = \\bar{w}_M - \\bar{w}_F$. Run two Mincer regressions:</p>
<div class="formula">$$\\ln w_M = \\alpha_M + \\beta_M s_M, \\qquad \\ln w_F = \\alpha_F + \\beta_F s_F.$$</div>
<p>Plug in mean schoolings $\\bar{s}_M, \\bar{s}_F$ and apply the Oaxaca (1973) trick — add and subtract $\\beta_M \\bar{s}_F$:</p>
<div class="formula">$$\\Delta\\bar{w} = \\underbrace{(\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\,\\bar{s}_F}_{\\text{discrimination (unexplained)}} \\;+\\; \\underbrace{\\beta_M\\,(\\bar{s}_M - \\bar{s}_F)}_{\\text{skill differences (explained)}}.$$</div>
<ul>
<li>The <span class="key">explained</span> part is what we would expect from differences in observable human capital (schooling, experience).</li>
<li>The <span class="key">unexplained</span> part — different intercepts, different returns to the same year of school — is the usual proxy for discrimination. It is what survives after controlling for everything we can measure.</li>
</ul>
<div class="tip">A measurement tip from the lecturer's handwritten notes: equivalently, $\\Delta\\bar{w} = (\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\,\\bar{s}_F + \\beta_M(\\bar{s}_M - \\bar{s}_F)$. The choice of weighting ($\\bar{s}_F$ vs $\\bar{s}_M$ vs pooled) matters and is the standard refinement debate.</div>`,
              id: `<p>Kesenjangan mentah $\\Delta\\bar{w} = \\bar{w}_M - \\bar{w}_F$. Jalankan dua regresi Mincer:</p>
<div class="formula">$$\\ln w_M = \\alpha_M + \\beta_M s_M, \\qquad \\ln w_F = \\alpha_F + \\beta_F s_F.$$</div>
<p>Masukkan rata-rata sekolah $\\bar{s}_M, \\bar{s}_F$ dan terapkan trik Oaxaca (1973) — tambah dan kurangi $\\beta_M \\bar{s}_F$:</p>
<div class="formula">$$\\Delta\\bar{w} = \\underbrace{(\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\,\\bar{s}_F}_{\\text{diskriminasi (tak terjelaskan)}} \\;+\\; \\underbrace{\\beta_M\\,(\\bar{s}_M - \\bar{s}_F)}_{\\text{perbedaan skill (terjelaskan)}}.$$</div>
<ul>
<li>Bagian <span class="key">terjelaskan</span> yang kita harapkan dari perbedaan modal manusia teramati (sekolah, pengalaman).</li>
<li>Bagian <span class="key">tak terjelaskan</span> — intercept berbeda, return tahun sekolah yang sama berbeda — proksi standar untuk diskriminasi. Sisa setelah mengendalikan semua yang bisa kita ukur.</li>
</ul>
<div class="tip">Catatan pengukuran: ekuivalennya $\\Delta\\bar{w} = (\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\,\\bar{s}_F + \\beta_M(\\bar{s}_M - \\bar{s}_F)$. Pilihan pembobotan ($\\bar{s}_F$ vs $\\bar{s}_M$ vs pooled) penting dan menjadi debat penyempurnaan standar.</div>`
            },
            chart: OAXACA_CHART
          }
        ]
      },

      {
        heading: { en: 'Indonesia: gender gaps in formal & informal sectors', id: 'Indonesia: kesenjangan gender di sektor formal & informal' },
        num: '6',
        cards: [
          {
            title: { en: 'Cameron, Contreras-Suarez & Rowell (2015) — what the decomposition says', id: 'Cameron, Contreras-Suarez & Rowell (2015) — apa kata dekomposisi' },
            html: {
              en: `<p>Cameron et al. estimate a gender wage gap of <span class="key">34.4%</span> in the formal sector and <span class="key">50.2%</span> in the informal sector. The Oaxaca decomposition is striking:</p>
<table>
<thead><tr><th>Sector</th><th>Total gap</th><th>Explained by characteristics</th><th>Unexplained (discrimination)</th></tr></thead>
<tbody>
<tr><td>Formal</td><td>34.4%</td><td>38%</td><td><span class="key">62%</span></td></tr>
<tr><td>Informal</td><td>50.2%</td><td>25%</td><td><span class="key">75%</span></td></tr>
</tbody>
</table>
<p>In the informal sector — where hiring is least formalised and competition is most intense — <em>three-quarters</em> of the gap is unexplained by human capital. This is the opposite of what Becker would predict in a competitive market. Likely mechanisms: statistical discrimination, customer discrimination (informal trade is customer-facing), entry barriers via networks, and household-level constraints that force women into low-paying informal work.</p>
<p>Within the explained portion, the biggest contributor is <span class="key">industry segregation</span> (≈19%) and, in the formal sector, <span class="key">experience</span> (36% — career interruptions for childbearing). Education actually <em>narrows</em> the formal gap (-30%) because formal-sector women are slightly more educated than men.</p>`,
              id: `<p>Cameron dkk. memperkirakan kesenjangan upah gender <span class="key">34,4%</span> di sektor formal dan <span class="key">50,2%</span> di sektor informal. Dekomposisi Oaxaca-nya mencolok:</p>
<table>
<thead><tr><th>Sektor</th><th>Total kesenjangan</th><th>Terjelaskan karakteristik</th><th>Tak terjelaskan (diskriminasi)</th></tr></thead>
<tbody>
<tr><td>Formal</td><td>34,4%</td><td>38%</td><td><span class="key">62%</span></td></tr>
<tr><td>Informal</td><td>50,2%</td><td>25%</td><td><span class="key">75%</span></td></tr>
</tbody>
</table>
<p>Di sektor informal — di mana rekrutmen paling tidak terformalkan dan persaingan paling ketat — <em>tiga perempat</em> kesenjangan tidak dijelaskan modal manusia. Ini kebalikan dari yang diprediksi Becker untuk pasar kompetitif. Mekanisme mungkin: diskriminasi statistik, diskriminasi konsumen (perdagangan informal customer-facing), hambatan masuk via jaringan, dan kendala tingkat rumah tangga yang memaksa perempuan ke pekerjaan informal berbayar rendah.</p>
<p>Dalam bagian terjelaskan, kontributor terbesar adalah <span class="key">segregasi industri</span> (≈19%) dan, di sektor formal, <span class="key">pengalaman</span> (36% — gangguan karier karena melahirkan). Pendidikan justru <em>mempersempit</em> kesenjangan formal (-30%) karena perempuan sektor formal sedikit lebih berpendidikan.</p>`
            }
          },
          {
            title: { en: 'Segregation patterns (Sakernas 1996 → 2016)', id: 'Pola segregasi (Sakernas 1996 → 2016)' },
            html: {
              en: `<p>Twenty years of data show segregation barely moved: women remain under-represented in <span class="key">construction, mining, transport</span> and over-represented in <span class="key">unpaid family work</span>, <span class="key">trade and community services</span>. By status, men are mostly <em>employees or self-employed</em> while women are disproportionately <em>unpaid family workers</em>.</p>
<p>Read this through the four theories together:</p>
<ul>
<li><span class="key">Becker employer</span>: prejudice against women in male-coded industries (construction) raises their effective wage and excludes them.</li>
<li><span class="key">Statistical</span>: belief that women will exit the labour force for childcare → low investment in firm-specific skills → assignment to easy-to-exit jobs (informal, unpaid).</li>
<li><span class="key">Customer</span>: clients in construction and transport are male and refuse female workers; firms cut female pay or hide them.</li>
<li><span class="key">Pre-market</span>: gendered education choices and household division of labour set the input mix before anyone enters the labour force.</li>
</ul>
<div class="tip">For the UAS essay: the headline 50% gap in the informal sector is the empirical fact; the Oaxaca decomposition is the bridge from data to theory; Becker + statistical discrimination are the two pillars to <em>evaluate</em> the fact. Always close with a policy or normative implication.</div>`,
              id: `<p>Dua puluh tahun data menunjukkan segregasi nyaris tak bergerak: perempuan tetap under-represented di <span class="key">konstruksi, pertambangan, transportasi</span> dan over-represented di <span class="key">pekerja keluarga tak dibayar</span>, <span class="key">perdagangan dan jasa kemasyarakatan</span>. Berdasarkan status, laki-laki kebanyakan <em>karyawan atau wiraswasta</em> sementara perempuan tidak proporsional sebagai <em>pekerja keluarga tak dibayar</em>.</p>
<p>Baca ini dengan empat teori bersama-sama:</p>
<ul>
<li><span class="key">Pengusaha Becker</span>: prasangka terhadap perempuan di industri ber-kode-laki (konstruksi) menaikkan upah efektif mereka dan mengeluarkan mereka.</li>
<li><span class="key">Statistik</span>: keyakinan bahwa perempuan akan keluar dari angkatan kerja untuk pengasuhan → investasi rendah pada keterampilan khusus-perusahaan → penugasan ke pekerjaan mudah-keluar (informal, tak dibayar).</li>
<li><span class="key">Konsumen</span>: klien di konstruksi dan transportasi adalah laki-laki dan menolak pekerja perempuan; perusahaan memotong upah perempuan atau menyembunyikan mereka.</li>
<li><span class="key">Pra-pasar</span>: pilihan pendidikan bergender dan pembagian kerja rumah tangga menentukan bauran input sebelum ada yang masuk ke angkatan kerja.</li>
</ul>
<div class="tip">Untuk esai UAS: kesenjangan utama 50% di sektor informal adalah fakta empiris; dekomposisi Oaxaca jembatan dari data ke teori; Becker + diskriminasi statistik dua pilar untuk <em>mengevaluasi</em> fakta. Tutup selalu dengan implikasi kebijakan atau normatif.</div>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Discrimination toolkit', id: 'Kit alat diskriminasi' },
        num: 'F',
        cards: [
          {
            title: { en: 'Becker coefficients', id: 'Koefisien Becker' },
            html: {
              en: `<div class="formula">Employer disutility: $\\;w_F^{\\text{eff}} = w_F(1+d), \\quad d \\ge 0$</div>
<div class="formula">Nepotism (favoured group): $\\;w_g^{\\text{eff}} = w_g(1-n), \\quad n \\ge 0$</div>
<div class="formula">Employee discrimination: $\\;w_M^{\\text{eff}} = w_M(1-d)$ — co-worker disutility</div>
<div class="formula">Customer discrimination: $\\;p^{\\text{eff}} = p(1+d)$</div>
<p>Hiring rule for an employer with $d$ against F: hire only F if $w_F(1+d) < w_M$, only M if $w_F(1+d) > w_M$. Indifferent at equality.</p>`,
              id: `<div class="formula">Disutilitas pengusaha: $\\;w_F^{\\text{eff}} = w_F(1+d), \\quad d \\ge 0$</div>
<div class="formula">Nepotisme (kelompok yang difavoritkan): $\\;w_g^{\\text{eff}} = w_g(1-n), \\quad n \\ge 0$</div>
<div class="formula">Diskriminasi rekan: $\\;w_M^{\\text{eff}} = w_M(1-d)$ — disutilitas rekan kerja</div>
<div class="formula">Diskriminasi konsumen: $\\;p^{\\text{eff}} = p(1+d)$</div>
<p>Aturan rekrutmen untuk pengusaha dengan $d$ terhadap F: rekrut F saja jika $w_F(1+d) < w_M$, M saja jika $w_F(1+d) > w_M$. Indiferen pada kesetaraan.</p>`
            }
          },
          {
            title: { en: 'Mincer & Oaxaca', id: 'Mincer & Oaxaca' },
            html: {
              en: `<div class="formula">Mincer earnings: $\\;\\ln w = \\alpha + \\beta\\, s + \\gamma_1\\, \\text{EXP} + \\gamma_2\\, \\text{EXP}^2 + \\varepsilon$</div>
<div class="formula">Raw gap: $\\;\\Delta\\bar{w} = \\bar{w}_M - \\bar{w}_F$</div>
<div class="formula">Oaxaca decomposition (men's coefficients): $$\\Delta\\bar{w} = \\underbrace{(\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\,\\bar{s}_F}_{\\text{unexplained / discrimination}} + \\underbrace{\\beta_M\\,(\\bar{s}_M - \\bar{s}_F)}_{\\text{explained / skill gap}}$$</div>`,
              id: `<div class="formula">Pendapatan Mincer: $\\;\\ln w = \\alpha + \\beta\\, s + \\gamma_1\\, \\text{EXP} + \\gamma_2\\, \\text{EXP}^2 + \\varepsilon$</div>
<div class="formula">Kesenjangan mentah: $\\;\\Delta\\bar{w} = \\bar{w}_M - \\bar{w}_F$</div>
<div class="formula">Dekomposisi Oaxaca (koefisien laki-laki): $$\\Delta\\bar{w} = \\underbrace{(\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\,\\bar{s}_F}_{\\text{tak terjelaskan / diskriminasi}} + \\underbrace{\\beta_M\\,(\\bar{s}_M - \\bar{s}_F)}_{\\text{terjelaskan / skill}}$$</div>`
            }
          },
          {
            title: { en: 'Statistical discrimination', id: 'Diskriminasi statistik' },
            html: {
              en: `<div class="formula">Predicted productivity: $\\;\\hat{y}_i = (1-\\alpha)\\,\\bar{y}_g + \\alpha\\,T_i$</div>
<ul>
<li>$\\bar{y}_g$ — perceived group-average productivity</li>
<li>$T_i$ — individual signal (test, CV)</li>
<li>$\\alpha$ — precision of individual signal for that group</li>
</ul>
<p>Two routes to a gap: (i) $\\bar{y}_F < \\bar{y}_M$ (parallel shift); (ii) $\\alpha_F < \\alpha_M$ (flatter slope).</p>`,
              id: `<div class="formula">Produktivitas prediksi: $\\;\\hat{y}_i = (1-\\alpha)\\,\\bar{y}_g + \\alpha\\,T_i$</div>
<ul>
<li>$\\bar{y}_g$ — produktivitas rata-rata kelompok yang dipersepsi</li>
<li>$T_i$ — sinyal individu (tes, CV)</li>
<li>$\\alpha$ — presisi sinyal individu untuk kelompok itu</li>
</ul>
<p>Dua jalur menuju kesenjangan: (i) $\\bar{y}_F < \\bar{y}_M$ (pergeseran paralel); (ii) $\\alpha_F < \\alpha_M$ (kemiringan lebih landai).</p>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Three diagrams to memorise', id: 'Tiga diagram untuk dihafal' },
        num: 'G',
        cards: [
          {
            title: { en: '1. VMP + prejudiced hiring', id: '1. VMP + perekrutan berprasangka' },
            html: {
              en: '<p>Downward-sloping VMP. Three horizontal wage lines at $w_F$, $w_F(1+d_0)$, $w_F(1+d_1)$. Higher $d$ → fewer F workers hired. Draw this if asked "how does prejudice affect employment of the targeted group?"</p>',
              id: '<p>VMP miring ke bawah. Tiga garis upah horizontal di $w_F$, $w_F(1+d_0)$, $w_F(1+d_1)$. $d$ lebih tinggi → lebih sedikit pekerja F direkrut. Gambar ini bila ditanya "bagaimana prasangka memengaruhi lapangan kerja kelompok sasaran?"</p>'
            },
            chart: VMP_CHART
          },
          {
            title: { en: '2. Market wage-ratio equilibrium', id: '2. Keseimbangan rasio upah pasar' },
            html: {
              en: '<p>Inelastic supply of F at $N$. Demand for F is rising in $w_M/w_F$ (or falling in $w_F/w_M$). Equilibrium $w_F/w_M < 1$ is the wage gap. Shift demand right to show less prejudice closing the gap.</p>',
              id: '<p>Penawaran F inelastis pada $N$. Permintaan F naik di $w_M/w_F$ (atau turun di $w_F/w_M$). Keseimbangan $w_F/w_M < 1$ adalah kesenjangan upah. Geser permintaan ke kanan untuk menunjukkan prasangka lebih kecil menutup kesenjangan.</p>'
            },
            chart: EQ_CHART
          },
          {
            title: { en: '3. Oaxaca decomposition diagram', id: '3. Diagram dekomposisi Oaxaca' },
            html: {
              en: '<p>Two earnings lines (M and F) in $(s, \\ln w)$ space. Mean-school points $\\bar{s}_F$ and $\\bar{s}_M$. The vertical distance at $\\bar{s}_F$ between the two lines is the <em>discrimination</em> component; the horizontal jump along the M line from $\\bar{s}_F$ to $\\bar{s}_M$ is the <em>skill</em> component.</p>',
              id: '<p>Dua garis pendapatan (M dan F) di ruang $(s, \\ln w)$. Titik rata-rata sekolah $\\bar{s}_F$ dan $\\bar{s}_M$. Jarak vertikal pada $\\bar{s}_F$ antara dua garis adalah komponen <em>diskriminasi</em>; lompatan horizontal di sepanjang garis M dari $\\bar{s}_F$ ke $\\bar{s}_M$ adalah komponen <em>skill</em>.</p>'
            },
            chart: OAXACA_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'A discriminatory employer faces $w_F=4$ with discrimination coefficient $d=0.5$, and $w_M=5$. Whom does she hire?',
             id: 'Seorang pengusaha diskriminatif menghadapi $w_F=4$ dengan koefisien $d=0,5$, dan $w_M=5$. Siapa yang direkrut?' },
        answer: [
          { en: 'Compare the utility-adjusted F wage to the M wage: $w_F(1+d) = 4 \\times 1.5 = 6 > 5 = w_M$.',
            id: 'Bandingkan upah F yang disesuaikan utilitas dengan upah M: $w_F(1+d) = 4 \\times 1{,}5 = 6 > 5 = w_M$.' },
          { en: 'Becker rule: hire only M. The 50% prejudice mark-up beats the 25% wage discount, so M is "effectively cheaper" to a prejudiced employer.',
            id: 'Aturan Becker: rekrut M saja. Mark-up prasangka 50% mengalahkan diskon upah 25%, sehingga M "secara efektif lebih murah" bagi pengusaha berprasangka.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Why does pure employee discrimination produce segregation but no equilibrium wage gap?',
             id: 'Mengapa diskriminasi rekan murni menghasilkan segregasi tetapi tidak ada kesenjangan upah keseimbangan?' },
        answer: [
          { en: 'Color-blind firms hire workers of either group at the going wage. If M workers dislike working with F, the firm forms all-M and all-F crews and pays each at their market wage. Both groups pay the same wage in equilibrium.',
            id: 'Perusahaan tanpa prasangka merekrut pekerja kelompok mana pun pada upah pasar. Bila pekerja M tidak suka bekerja dengan F, perusahaan membentuk kru semua-M dan semua-F dan membayar tiap kelompok pada upah pasar masing-masing. Kedua kelompok dibayar upah sama di keseimbangan.' },
          { en: 'No firm has a cost advantage and no group is paid less for the same productivity. The outcome is sorting (segregation) without a wage gap — unless integration is forced, in which case M workers demand a premium.',
            id: 'Tidak ada perusahaan yang memiliki keunggulan biaya dan tidak ada kelompok yang dibayar lebih rendah untuk produktivitas yang sama. Hasilnya penyortiran (segregasi) tanpa kesenjangan upah — kecuali integrasi dipaksakan, di mana pekerja M menuntut premium.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'In Cameron et al. (2015), the informal-sector gender gap is 50% with 75% unexplained. Why is this hard to reconcile with Becker?',
             id: 'Dalam Cameron dkk. (2015), kesenjangan gender informal 50% dengan 75% tak terjelaskan. Mengapa ini sulit didamaikan dengan Becker?' },
        answer: [
          { en: 'Becker predicts that in a competitive market discriminatory firms are out-competed by non-discriminatory ones; over time the gap closes. The informal sector has very low entry barriers, so competition is intense.',
            id: 'Becker memprediksi bahwa di pasar kompetitif perusahaan diskriminatif dikalahkan non-diskriminatif; seiring waktu kesenjangan menutup. Sektor informal hambatan masuk sangat rendah, sehingga persaingan ketat.' },
          { en: 'A 75% unexplained gap that persists is consistent with: (i) statistical discrimination (customers, not employers, hold the bias and firms rationally price-discriminate); (ii) customer discrimination in customer-facing informal trade; (iii) network-based hiring that locks women out; (iv) household constraints (childcare, mobility) that pin women into low-paying segments.',
            id: 'Kesenjangan tak terjelaskan 75% yang bertahan konsisten dengan: (i) diskriminasi statistik (konsumen, bukan pengusaha, yang berprasangka dan perusahaan rasional mendiskriminasi harga); (ii) diskriminasi konsumen di perdagangan informal customer-facing; (iii) perekrutan berbasis jaringan yang mengunci perempuan; (iv) kendala rumah tangga (pengasuhan, mobilitas) yang menahan perempuan di segmen berbayar rendah.' }
        ]
      },
      {
        type: 'tutorial',
        q: { en: 'Tutorial Q4 (Week 9): A restaurant hires only women as servers and only men as cooks/dishwashers. Which discrimination is this most likely to reflect?',
             id: 'Tutorial Q4 (Minggu 9): Restoran hanya merekrut perempuan sebagai pelayan dan laki-laki sebagai juru masak/pencuci piring. Diskriminasi mana yang paling mungkin tercermin?' },
        answer: [
          { en: '<span class="key">Customer discrimination</span>. The pattern is by <em>visible job</em>, not by pay or hiring counts — women face the diners, men stay in the back. This is exactly the customer-facing/hidden split that customer discrimination predicts: when the customer must see the worker (server), gender preferences of the customer drive the firm\'s decision; when the worker is hidden (kitchen), the firm hires whoever is cheapest.',
            id: '<span class="key">Diskriminasi konsumen</span>. Pola berdasar <em>pekerjaan yang terlihat</em>, bukan upah atau jumlah rekrutmen — perempuan menghadapi pengunjung, laki-laki tetap di belakang. Inilah pembagian customer-facing/tersembunyi yang diprediksi diskriminasi konsumen: bila pelanggan harus melihat pekerja (pelayan), preferensi gender pelanggan mengarahkan keputusan perusahaan; bila pekerja tersembunyi (dapur), perusahaan merekrut yang termurah.' },
          { en: 'Not employer (firm would prefer just one cheaper group everywhere). Not employee (would predict same-gender teams, but the team is mixed). Statistical only if the firm believed only women had the "soft skills" for serving and only men the physical skills for cooking — possible but secondary.',
            id: 'Bukan pengusaha (perusahaan akan menyukai satu kelompok murah di mana saja). Bukan rekan (akan memprediksi tim gender-sama, tetapi tim campur). Statistik hanya bila perusahaan yakin hanya perempuan punya "soft skill" untuk melayani dan hanya laki-laki keterampilan fisik untuk memasak — mungkin tetapi sekunder.' }
        ]
      }
    ]
  };
})();
