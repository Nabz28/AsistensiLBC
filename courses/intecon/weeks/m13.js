/* ============================================================================
   EKINTER — Meeting 13 · International Macro 3
   The real-exchange-rate (RER) approach to the long-run exchange rate;
   exchange-rate OVERSHOOTING (Dornbusch, sticky prices); the policy
   TRILEMMA / impossible trinity; and the J-CURVE + Marshall-Lerner condition.
   Source: KOM long-run model + lecturer's deck (krisna.or.id/intecon/meeting13).
   Bilingual (EN + ID). Registers itself on window.EKINTER_WEEKS.m13;
   assembled by ../course.js. Prose leaves are { en, id }; math/numbers shared.
   ============================================================================ */
window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};
window.EKINTER_WEEKS.m13 = {
  id: 'm13',
  label: { en: 'Meeting 13', id: 'Pertemuan 13' },
  title: {
    en: 'International Macro 3 — RER, Overshooting & the Trilemma',
    id: 'Makro Internasional 3 — Nilai Tukar Riil, Overshooting & Trilema'
  },
  subtitle: {
    en: 'The real-exchange-rate approach to the long-run rate, Dornbusch overshooting, the impossible trinity, and the J-curve.',
    id: 'Pendekatan nilai tukar riil untuk jangka panjang, overshooting Dornbusch, trinitas mustahil, dan kurva-J.'
  },

  /* ===================================================================== */
  /* NOTES                                                                  */
  /* ===================================================================== */
  notes: [
    {
      heading: { en: 'The real-exchange-rate approach', id: 'Pendekatan nilai tukar riil' },
      num: '1',
      cards: [
        {
          title: { en: 'From PPP to the real exchange rate', id: 'Dari PPP ke nilai tukar riil' },
          html: {
            en: `<p>Absolute PPP says the long-run nominal rate just equalises price levels, $E = P/P^{*}$. But PPP fails empirically because countries consume <span class="key">different baskets</span> and many goods are <span class="key">non-traded</span>. The fix is the <span class="key">real-exchange-rate (RER) approach</span>, which lets relative prices move.</p>
<p>The <span class="key">real exchange rate</span> $q$ is the price of a foreign basket in terms of domestic baskets:</p>
<div class="formula">$$ q \\;=\\; \\frac{E\\,P^{*}}{P} $$</div>
<ul>
<li><em>E</em> = nominal rate (home currency per unit of foreign), <em>P</em> = home price level, $P^{*}$ = foreign price level.</li>
<li>$q\\uparrow$ = a <span class="key">real depreciation</span> (home goods cheaper relative to foreign) → home becomes more competitive.</li>
<li>$q\\downarrow$ = a <span class="key">real appreciation</span> (home goods dearer) → home loses competitiveness.</li>
</ul>
<p>Rearranging gives the long-run nominal rate as the value <em>consistent with</em> the equilibrium real rate $\\bar q$:</p>
<div class="formula">$$ E \\;=\\; q \\,\\frac{P}{P^{*}} \\quad\\Longrightarrow\\quad E_{LR} = \\bar q \\,\\frac{P}{P^{*}} $$</div>
<div class="tip">📝 PPP is the special case $q=1$. The RER approach is "PPP + a slow-moving real rate", so it explains persistent over/under-valuation that pure PPP cannot.</div>`,
            id: `<p>PPP absolut mengatakan nilai tukar nominal jangka panjang hanya menyamakan tingkat harga, $E = P/P^{*}$. Namun PPP gagal secara empiris karena tiap negara mengonsumsi <span class="key">keranjang berbeda</span> dan banyak barang yang <span class="key">tidak diperdagangkan (non-traded)</span>. Perbaikannya adalah <span class="key">pendekatan nilai tukar riil (RER)</span>, yang membiarkan harga relatif bergerak.</p>
<p><span class="key">Nilai tukar riil</span> $q$ adalah harga keranjang luar negeri dalam satuan keranjang domestik:</p>
<div class="formula">$$ q \\;=\\; \\frac{E\\,P^{*}}{P} $$</div>
<ul>
<li><em>E</em> = nilai tukar nominal (mata uang domestik per unit asing), <em>P</em> = tingkat harga domestik, $P^{*}$ = tingkat harga luar negeri.</li>
<li>$q\\uparrow$ = <span class="key">depresiasi riil</span> (barang domestik lebih murah relatif terhadap luar negeri) → daya saing domestik naik.</li>
<li>$q\\downarrow$ = <span class="key">apresiasi riil</span> (barang domestik lebih mahal) → daya saing domestik turun.</li>
</ul>
<p>Disusun ulang, nilai tukar nominal jangka panjang adalah nilai yang <em>konsisten dengan</em> nilai tukar riil keseimbangan $\\bar q$:</p>
<div class="formula">$$ E \\;=\\; q \\,\\frac{P}{P^{*}} \\quad\\Longrightarrow\\quad E_{LR} = \\bar q \\,\\frac{P}{P^{*}} $$</div>
<div class="tip">📝 PPP adalah kasus khusus $q=1$. Pendekatan RER adalah "PPP + nilai tukar riil yang bergerak lambat", sehingga mampu menjelaskan over/under-valuation persisten yang tak bisa dijelaskan PPP murni.</div>`
          }
        },
        {
          title: { en: 'What moves the long-run real rate?', id: 'Apa yang menggerakkan nilai tukar riil jangka panjang?' },
          html: {
            en: `<p>In the long run $\\bar q$ is set by <span class="key">real</span> forces, not money:</p>
<ul>
<li><span class="key">Relative demand</span> for home output ↑ (e.g. a shift in world tastes toward home goods) → home goods bid up → <span class="key">real appreciation</span> ($\\bar q\\downarrow$).</li>
<li><span class="key">Relative supply / productivity</span> in home traded goods ↑ → cheaper home output → <span class="key">real depreciation</span> ($\\bar q\\uparrow$) in the simple case. (The <span class="key">Balassa–Samuelson</span> twist works the other way through non-traded prices.)</li>
</ul>
<p>Crucially, a purely <span class="key">monetary</span> change (a one-off rise in the money supply) is <span class="key">neutral</span> in the long run: it raises <em>P</em> proportionally and leaves $\\bar q$ unchanged. Money only moves the <em>nominal</em> rate via $E_{LR}=\\bar q\\,P/P^{*}$ — and that sets up the next idea, overshooting.</p>
<div class="note">⚠️ Long-run neutrality: $\\bar q$ depends on <em>real</em> demand/supply; $E_{LR}$ moves with money only through the price levels $P$ and $P^{*}$.</div>`,
            id: `<p>Dalam jangka panjang $\\bar q$ ditentukan oleh kekuatan <span class="key">riil</span>, bukan uang:</p>
<ul>
<li><span class="key">Permintaan relatif</span> atas output domestik ↑ (mis. selera dunia bergeser ke barang domestik) → harga barang domestik naik → <span class="key">apresiasi riil</span> ($\\bar q\\downarrow$).</li>
<li><span class="key">Penawaran relatif / produktivitas</span> barang dagangan domestik ↑ → output domestik lebih murah → <span class="key">depresiasi riil</span> ($\\bar q\\uparrow$) dalam kasus sederhana. (Efek <span class="key">Balassa–Samuelson</span> bekerja sebaliknya lewat harga barang non-traded.)</li>
</ul>
<p>Yang penting, perubahan murni <span class="key">moneter</span> (kenaikan sekali jumlah uang) bersifat <span class="key">netral</span> dalam jangka panjang: ia menaikkan <em>P</em> secara proporsional dan membiarkan $\\bar q$ tetap. Uang hanya menggerakkan nilai tukar <em>nominal</em> lewat $E_{LR}=\\bar q\\,P/P^{*}$ — dan inilah pengantar gagasan berikutnya, overshooting.</p>
<div class="note">⚠️ Netralitas jangka panjang: $\\bar q$ bergantung pada permintaan/penawaran <em>riil</em>; $E_{LR}$ bergerak karena uang hanya melalui tingkat harga $P$ dan $P^{*}$.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Exchange-rate overshooting (Dornbusch)', id: 'Overshooting nilai tukar (Dornbusch)' },
      num: '2',
      cards: [
        {
          title: { en: 'Why sticky prices make E jump too far', id: 'Mengapa harga kaku membuat E melonjak terlalu jauh' },
          html: {
            en: `<p><span class="key">Overshooting</span> is Dornbusch's result that, after a permanent monetary expansion, the nominal rate <em>E</em> <span class="key">jumps above</span> its new long-run level on impact, then <span class="key">decays back down</span> to it over time. The engine is a <span class="key">speed mismatch</span>:</p>
<ul>
<li><span class="key">Asset markets (FX, money) clear instantly</span> — <em>E</em> and the interest rate <em>R</em> can move in a second.</li>
<li><span class="key">Goods prices are sticky</span> — <em>P</em> is fixed on impact and adjusts only slowly.</li>
</ul>
<p>Trace a permanent rise in the money supply $M^{s}$:</p>
<div class="formula">$$ M^{s}\\uparrow \\;\\Rightarrow\\; \\frac{M^{s}}{P}\\uparrow \\;(P\\ \\text{sticky}) \\;\\Rightarrow\\; R\\downarrow \\;\\Rightarrow\\; \\text{by UIP, }E\\uparrow\\uparrow $$</div>
<ol>
<li>Because <em>P</em> can't move yet, real balances $M^{s}/P$ rise, so the home interest rate <em>R</em> must <span class="key">fall</span> to clear the money market.</li>
<li>The long run is known: money is neutral, so <em>P</em> and the nominal rate $E_{LR}$ will end up <span class="key">proportionally higher</span> (a depreciation).</li>
<li>By <span class="key">uncovered interest parity (UIP)</span> a lower home <em>R</em> must be matched by an <span class="key">expected future appreciation</span> of the home currency. The only way to expect a future <em>appreciation</em> while still ending higher in the long run is for <em>E</em> to <span class="key">overshoot</span> — jump <em>above</em> $E_{LR}$ now, then drift back down.</li>
<li>As <em>P</em> slowly rises, $M^{s}/P$ falls back, <em>R</em> returns to normal, and <em>E</em> <span class="key">depreciates back down</span> to its (higher) long-run value $E_{LR}$.</li>
</ol>
<div class="tip">📝 Overshooting needs BOTH ingredients: (i) sticky prices and (ii) UIP. It is why floating exchange rates are far more <span class="key">volatile</span> than the underlying money supplies — markets price in the long run instantly while goods lag.</div>`,
            id: `<p><span class="key">Overshooting</span> adalah hasil Dornbusch bahwa, setelah ekspansi moneter permanen, nilai tukar nominal <em>E</em> <span class="key">melonjak di atas</span> level jangka panjang barunya saat itu juga, lalu <span class="key">turun kembali</span> ke level tersebut seiring waktu. Mesinnya adalah <span class="key">ketidaksesuaian kecepatan</span>:</p>
<ul>
<li><span class="key">Pasar aset (valas, uang) menyeimbang seketika</span> — <em>E</em> dan suku bunga <em>R</em> bisa bergerak dalam sedetik.</li>
<li><span class="key">Harga barang kaku (sticky)</span> — <em>P</em> tetap saat itu dan menyesuaikan hanya perlahan.</li>
</ul>
<p>Telusuri kenaikan permanen jumlah uang $M^{s}$:</p>
<div class="formula">$$ M^{s}\\uparrow \\;\\Rightarrow\\; \\frac{M^{s}}{P}\\uparrow \\;(P\\ \\text{kaku}) \\;\\Rightarrow\\; R\\downarrow \\;\\Rightarrow\\; \\text{lewat UIP, }E\\uparrow\\uparrow $$</div>
<ol>
<li>Karena <em>P</em> belum bisa bergerak, saldo riil $M^{s}/P$ naik, sehingga suku bunga domestik <em>R</em> harus <span class="key">turun</span> untuk menyeimbangkan pasar uang.</li>
<li>Jangka panjangnya diketahui: uang netral, jadi <em>P</em> dan nilai tukar nominal $E_{LR}$ akan berakhir <span class="key">lebih tinggi secara proporsional</span> (depresiasi).</li>
<li>Lewat <span class="key">paritas suku bunga tak tertutup (UIP)</span>, <em>R</em> domestik yang lebih rendah harus diimbangi <span class="key">ekspektasi apresiasi</span> mata uang domestik ke depan. Satu-satunya cara mengharapkan <em>apresiasi</em> mendatang sambil tetap berakhir lebih tinggi dalam jangka panjang adalah <em>E</em> harus <span class="key">overshoot</span> — melonjak <em>di atas</em> $E_{LR}$ sekarang, lalu turun kembali.</li>
<li>Saat <em>P</em> perlahan naik, $M^{s}/P$ turun kembali, <em>R</em> kembali normal, dan <em>E</em> <span class="key">terdepresiasi turun</span> ke nilai jangka panjangnya (yang lebih tinggi) $E_{LR}$.</li>
</ol>
<div class="tip">📝 Overshooting butuh KEDUA bahan: (i) harga kaku dan (ii) UIP. Inilah sebabnya nilai tukar mengambang jauh lebih <span class="key">bergejolak</span> daripada jumlah uang yang mendasarinya — pasar memperhitungkan jangka panjang seketika sementara barang tertinggal.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The policy trilemma (impossible trinity)', id: 'Trilema kebijakan (trinitas mustahil)' },
      num: '3',
      cards: [
        {
          title: { en: 'Pick any two of the three', id: 'Pilih dua dari tiga' },
          html: {
            en: `<p>The <span class="key">policy trilemma</span> (Mundell–Fleming) says an open economy cannot have all three of the following at once. It can pick <span class="key">only two</span>:</p>
<ul>
<li><span class="key">1. Fixed exchange rate</span> — a pegged or stable <em>E</em>.</li>
<li><span class="key">2. Free capital mobility</span> — money flows in and out without controls.</li>
<li><span class="key">3. Independent monetary policy</span> — the central bank sets <em>R</em> for domestic goals.</li>
</ul>
<p><strong>Why?</strong> With free capital flows, <span class="key">UIP</span> forces the home rate toward the foreign rate plus expected depreciation. If <em>E</em> is also fixed, expected depreciation is zero, so $R = R^{*}$ — the bank has <span class="key">no room</span> to set its own rate. The three feasible corners:</p>
<table class="table">
<tr><th>Choice (give up)</th><th>You keep</th><th>Example</th></tr>
<tr><td>Give up independent money</td><td>Fixed ER + open capital</td><td>Currency board (Hong Kong), gold standard</td></tr>
<tr><td>Give up the fixed rate</td><td>Open capital + own money</td><td>Floating + inflation targeting (US, Indonesia today)</td></tr>
<tr><td>Give up capital mobility</td><td>Fixed ER + own money</td><td>Capital controls (China for years, Bretton Woods)</td></tr>
</table>
<div class="tip">📝 Exam phrasing: "A country wants a stable currency AND control of its interest rate — what must it give up?" → <span class="key">free capital mobility</span> (impose capital controls).</div>`,
            id: `<p><span class="key">Trilema kebijakan</span> (Mundell–Fleming) menyatakan ekonomi terbuka tidak bisa memiliki ketiga hal berikut sekaligus. Ia hanya bisa memilih <span class="key">dua saja</span>:</p>
<ul>
<li><span class="key">1. Nilai tukar tetap</span> — <em>E</em> yang dipatok atau stabil.</li>
<li><span class="key">2. Mobilitas modal bebas</span> — dana mengalir masuk-keluar tanpa kendali.</li>
<li><span class="key">3. Kebijakan moneter independen</span> — bank sentral menetapkan <em>R</em> untuk tujuan domestik.</li>
</ul>
<p><strong>Mengapa?</strong> Dengan aliran modal bebas, <span class="key">UIP</span> memaksa suku bunga domestik menuju suku bunga asing plus ekspektasi depresiasi. Jika <em>E</em> juga tetap, ekspektasi depresiasi nol, sehingga $R = R^{*}$ — bank <span class="key">tak punya ruang</span> menetapkan suku bunganya sendiri. Tiga sudut yang layak:</p>
<table class="table">
<tr><th>Pilihan (lepaskan)</th><th>Yang dipertahankan</th><th>Contoh</th></tr>
<tr><td>Lepaskan moneter independen</td><td>NT tetap + modal bebas</td><td>Currency board (Hong Kong), standar emas</td></tr>
<tr><td>Lepaskan nilai tukar tetap</td><td>Modal bebas + moneter sendiri</td><td>Mengambang + inflation targeting (AS, Indonesia kini)</td></tr>
<tr><td>Lepaskan mobilitas modal</td><td>NT tetap + moneter sendiri</td><td>Kontrol modal (China bertahun-tahun, Bretton Woods)</td></tr>
</table>
<div class="tip">📝 Bunyi soal ujian: "Sebuah negara ingin mata uang stabil DAN mengendalikan suku bunganya — apa yang harus dilepas?" → <span class="key">mobilitas modal bebas</span> (terapkan kontrol modal).</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The J-curve & Marshall-Lerner', id: 'Kurva-J & Marshall-Lerner' },
      num: '4',
      cards: [
        {
          title: { en: 'Why a depreciation worsens NX before it helps', id: 'Mengapa depresiasi memperburuk NX sebelum membantu' },
          html: {
            en: `<p>A real depreciation should improve net exports <em>NX</em> — but only <span class="key">after a delay</span>. Net exports in value terms are:</p>
<div class="formula">$$ NX \\;=\\; \\underbrace{P_X\\,Q_X}_{\\text{export value}} \\;-\\; \\underbrace{E\\,P_M^{*}\\,Q_M}_{\\text{import value}} $$</div>
<p>Right after a depreciation, <span class="key">quantities are sticky</span> (contracts, supply chains, habits), so volumes $Q_X,\\ Q_M$ barely move. But each imported unit now costs <em>more</em> in home currency (the $E$ in the import bill jumps). So the <span class="key">value of imports rises first</span> and <em>NX</em> <span class="key">falls below zero</span>.</p>
<p>Over the following months, the relative-price signal works: exports get cheaper abroad so $Q_X$ rises, imports get dearer at home so $Q_M$ falls. Once these volume effects dominate, <em>NX</em> <span class="key">climbs back up and above its starting point</span> — tracing a "J".</p>
<div class="formula">$$ \\text{short run: value effect (price) dominates} \\;\\to\\; NX\\downarrow; \\qquad \\text{long run: volume effect dominates} \\;\\to\\; NX\\uparrow $$</div>
<div class="note">⚠️ The J-curve requires that the eventual improvement actually happens — that is the <span class="key">Marshall-Lerner condition</span>: the sum of the export and import demand elasticities must exceed 1 (next tab). If it fails, the depreciation never improves the balance.</div>`,
            id: `<p>Depresiasi riil seharusnya memperbaiki ekspor neto <em>NX</em> — tetapi hanya <span class="key">setelah jeda</span>. Ekspor neto dalam nilai adalah:</p>
<div class="formula">$$ NX \\;=\\; \\underbrace{P_X\\,Q_X}_{\\text{nilai ekspor}} \\;-\\; \\underbrace{E\\,P_M^{*}\\,Q_M}_{\\text{nilai impor}} $$</div>
<p>Tepat setelah depresiasi, <span class="key">kuantitas masih kaku</span> (kontrak, rantai pasok, kebiasaan), sehingga volume $Q_X,\\ Q_M$ nyaris tak berubah. Namun tiap unit impor kini berharga <em>lebih mahal</em> dalam mata uang domestik ($E$ pada tagihan impor melonjak). Maka <span class="key">nilai impor naik lebih dulu</span> dan <em>NX</em> <span class="key">jatuh di bawah nol</span>.</p>
<p>Dalam bulan-bulan berikutnya, sinyal harga relatif bekerja: ekspor lebih murah di luar negeri sehingga $Q_X$ naik, impor lebih mahal di dalam negeri sehingga $Q_M$ turun. Begitu efek volume ini mendominasi, <em>NX</em> <span class="key">naik kembali dan melampaui titik awalnya</span> — membentuk huruf "J".</p>
<div class="formula">$$ \\text{jangka pendek: efek nilai (harga) dominan} \\;\\to\\; NX\\downarrow; \\qquad \\text{jangka panjang: efek volume dominan} \\;\\to\\; NX\\uparrow $$</div>
<div class="note">⚠️ Kurva-J mensyaratkan perbaikan akhir benar-benar terjadi — itulah <span class="key">kondisi Marshall-Lerner</span>: jumlah elastisitas permintaan ekspor dan impor harus melebihi 1 (tab berikutnya). Jika gagal, depresiasi tak pernah memperbaiki neraca.</div>`
          }
        },
        {
          title: { en: 'The Marshall-Lerner condition', id: 'Kondisi Marshall-Lerner' },
          html: {
            en: `<p>The <span class="key">Marshall-Lerner condition</span> states that a real depreciation improves the trade balance (in the long run) only if demand is elastic enough:</p>
<div class="formula">$$ \\eta_X + \\eta_M \\;>\\; 1 $$</div>
<ul>
<li>$\\eta_X$ = price elasticity of foreign demand for our <span class="key">exports</span>.</li>
<li>$\\eta_M$ = price elasticity of home demand for <span class="key">imports</span>.</li>
</ul>
<p>If the sum exceeds 1, the volume response (more exports, fewer imports) outweighs the higher per-unit import bill, so <em>NX</em> ends up higher. If it is below 1, volumes barely respond and the depreciation can leave <em>NX</em> worse.</p>
<div class="tip">📝 Indonesia's elasticities historically satisfy Marshall-Lerner, but with only ~30–50% exchange-rate <span class="key">pass-through</span> and import-heavy supply chains, the J-curve dip is deep and the recovery is slow — exactly why the rupiah's depreciation in a crisis widens the deficit for several quarters before it narrows.</div>`,
            id: `<p><span class="key">Kondisi Marshall-Lerner</span> menyatakan bahwa depresiasi riil memperbaiki neraca dagang (jangka panjang) hanya jika permintaan cukup elastis:</p>
<div class="formula">$$ \\eta_X + \\eta_M \\;>\\; 1 $$</div>
<ul>
<li>$\\eta_X$ = elastisitas harga permintaan luar negeri atas <span class="key">ekspor</span> kita.</li>
<li>$\\eta_M$ = elastisitas harga permintaan domestik atas <span class="key">impor</span>.</li>
</ul>
<p>Jika jumlahnya melebihi 1, respons volume (ekspor naik, impor turun) mengalahkan tagihan impor per unit yang lebih mahal, sehingga <em>NX</em> berakhir lebih tinggi. Jika di bawah 1, volume nyaris tak merespons dan depresiasi bisa membuat <em>NX</em> memburuk.</p>
<div class="tip">📝 Elastisitas Indonesia secara historis memenuhi Marshall-Lerner, tetapi dengan <span class="key">pass-through</span> nilai tukar hanya ~30–50% dan rantai pasok padat impor, lekukan kurva-J dalam dan pemulihannya lambat — persis mengapa depresiasi rupiah saat krisis melebarkan defisit selama beberapa kuartal sebelum menyempit.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Putting it together — Indonesia', id: 'Merangkai semuanya — Indonesia' },
      num: '5',
      cards: [
        {
          title: { en: 'How the three ideas interlock in policy', id: 'Bagaimana ketiga gagasan saling terkait dalam kebijakan' },
          html: {
            en: `<p>The three blocks describe one chain of events when a country eases money or its currency falls:</p>
<ol>
<li><span class="key">RER approach</span> pins the long-run nominal rate: $E_{LR}=\\bar q\\,P/P^{*}$. A monetary shock raises <em>P</em> in the long run, so $E_{LR}$ depreciates — but the real rate $\\bar q$ is unchanged (neutrality).</li>
<li><span class="key">Overshooting</span> describes the path to that long run: with sticky prices, <em>E</em> jumps <em>past</em> $E_{LR}$ on impact, then glides back. This is the short-run volatility Bank Indonesia must manage.</li>
<li><span class="key">Trilemma</span> says BI cannot peg the rupiah AND keep open capital AND run an independent rate. Indonesia chose a <span class="key">managed float + open-ish capital + own monetary policy</span> — so it accepts exchange-rate movement (and overshooting) as the price of policy independence.</li>
<li><span class="key">J-curve</span> then warns that even a "helpful" rupiah depreciation worsens the trade balance for a few quarters before Marshall-Lerner volume effects turn it positive.</li>
</ol>
<div class="tip">📝 One-line exam map: <em>RER sets the destination → overshooting is the bumpy route → the trilemma explains why BI lets the rate move → the J-curve is the lag before the depreciation pays off.</em></div>`,
            id: `<p>Ketiga blok menggambarkan satu rangkaian kejadian saat sebuah negara melonggarkan uang atau mata uangnya jatuh:</p>
<ol>
<li><span class="key">Pendekatan RER</span> menambatkan nilai tukar nominal jangka panjang: $E_{LR}=\\bar q\\,P/P^{*}$. Guncangan moneter menaikkan <em>P</em> dalam jangka panjang, sehingga $E_{LR}$ terdepresiasi — tetapi nilai tukar riil $\\bar q$ tak berubah (netralitas).</li>
<li><span class="key">Overshooting</span> menggambarkan jalur menuju jangka panjang itu: dengan harga kaku, <em>E</em> melonjak <em>melewati</em> $E_{LR}$ saat itu, lalu meluncur kembali. Inilah gejolak jangka pendek yang harus dikelola Bank Indonesia.</li>
<li><span class="key">Trilema</span> menyatakan BI tak bisa mematok rupiah DAN menjaga modal terbuka DAN menjalankan suku bunga independen sekaligus. Indonesia memilih <span class="key">mengambang terkelola + modal relatif terbuka + kebijakan moneter sendiri</span> — sehingga menerima pergerakan nilai tukar (dan overshooting) sebagai harga independensi kebijakan.</li>
<li><span class="key">Kurva-J</span> lalu mengingatkan bahwa bahkan depresiasi rupiah yang "membantu" memperburuk neraca dagang selama beberapa kuartal sebelum efek volume Marshall-Lerner membaliknya menjadi positif.</li>
</ol>
<div class="tip">📝 Peta ujian satu baris: <em>RER menetapkan tujuan → overshooting adalah rute yang bergelombang → trilema menjelaskan mengapa BI membiarkan nilai tukar bergerak → kurva-J adalah jeda sebelum depresiasi berbuah.</em></div>`
          }
        }
      ]
    }
  ],

  /* ===================================================================== */
  /* FORMULAS                                                               */
  /* ===================================================================== */
  formulas: [
    {
      heading: { en: 'Core relationships', id: 'Hubungan inti' },
      num: 'F',
      cards: [
        {
          title: { en: 'Real exchange rate & the long-run nominal rate', id: 'Nilai tukar riil & nilai tukar nominal jangka panjang' },
          html: {
            en: `<div class="formula">$$ q = \\frac{E\\,P^{*}}{P}, \\qquad E_{LR} = \\bar q\\,\\frac{P}{P^{*}} $$</div>
<p><strong>Symbols:</strong> <em>q</em> = real exchange rate (foreign baskets per domestic basket); <em>E</em> = nominal rate (home per foreign); <em>P</em>, $P^{*}$ = home and foreign price levels; $\\bar q$ = equilibrium (long-run) real rate set by real demand/supply.</p>
<p><strong>Use it</strong> to separate <em>real</em> competitiveness ($q$) from the <em>nominal</em> rate. PPP is the special case $q=1$. A monetary shock moves $E_{LR}$ only through $P$; $\\bar q$ stays put.</p>`,
            id: `<div class="formula">$$ q = \\frac{E\\,P^{*}}{P}, \\qquad E_{LR} = \\bar q\\,\\frac{P}{P^{*}} $$</div>
<p><strong>Simbol:</strong> <em>q</em> = nilai tukar riil (keranjang asing per keranjang domestik); <em>E</em> = nilai tukar nominal (domestik per asing); <em>P</em>, $P^{*}$ = tingkat harga domestik dan asing; $\\bar q$ = nilai tukar riil keseimbangan (jangka panjang) yang ditetapkan permintaan/penawaran riil.</p>
<p><strong>Pakai</strong> untuk memisahkan daya saing <em>riil</em> ($q$) dari nilai tukar <em>nominal</em>. PPP adalah kasus khusus $q=1$. Guncangan moneter menggerakkan $E_{LR}$ hanya lewat $P$; $\\bar q$ tetap.</p>`
          }
        },
        {
          title: { en: 'UIP & the overshooting logic', id: 'UIP & logika overshooting' },
          html: {
            en: `<div class="formula">$$ R = R^{*} + \\frac{E^{e}_{t+1} - E_t}{E_t} $$</div>
<p><strong>Uncovered interest parity:</strong> the home return <em>R</em> equals the foreign return $R^{*}$ plus the expected depreciation of the home currency. After a monetary expansion, <em>P</em> is sticky so $R\\downarrow$; for UIP to hold with a lower <em>R</em>, the market must expect a future <span class="key">appreciation</span> ($E^{e}_{t+1}<E_t$). Since the long-run rate is <em>higher</em>, today's <em>E</em> must first <span class="key">overshoot above</span> $E_{LR}$, then fall back.</p>
<div class="tip">📝 Overshooting = sticky <em>P</em> + UIP. Remove either and <em>E</em> jumps straight to $E_{LR}$ with no overshoot.</div>`,
            id: `<div class="formula">$$ R = R^{*} + \\frac{E^{e}_{t+1} - E_t}{E_t} $$</div>
<p><strong>Paritas suku bunga tak tertutup:</strong> imbal hasil domestik <em>R</em> sama dengan imbal hasil asing $R^{*}$ plus ekspektasi depresiasi mata uang domestik. Setelah ekspansi moneter, <em>P</em> kaku sehingga $R\\downarrow$; agar UIP berlaku dengan <em>R</em> lebih rendah, pasar harus mengharapkan <span class="key">apresiasi</span> ke depan ($E^{e}_{t+1}<E_t$). Karena nilai jangka panjang <em>lebih tinggi</em>, <em>E</em> hari ini harus lebih dulu <span class="key">overshoot di atas</span> $E_{LR}$, lalu turun kembali.</p>
<div class="tip">📝 Overshooting = <em>P</em> kaku + UIP. Hilangkan salah satunya dan <em>E</em> langsung melompat ke $E_{LR}$ tanpa overshoot.</div>`
          }
        },
        {
          title: { en: 'Marshall-Lerner condition', id: 'Kondisi Marshall-Lerner' },
          html: {
            en: `<div class="formula">$$ \\eta_X + \\eta_M > 1 $$</div>
<p><strong>Symbols:</strong> $\\eta_X$ = price elasticity of export demand; $\\eta_M$ = price elasticity of import demand. When the sum exceeds one, a real depreciation improves <em>NX</em> in the long run (volume effect beats the value effect).</p>
<p><strong>Use it</strong> as the <span class="key">existence condition for the upward arm of the J-curve</span>. If $\\eta_X+\\eta_M \\le 1$, the J never turns up. Real-world dampeners: low <span class="key">pass-through</span> and imported intermediate inputs.</p>`,
            id: `<div class="formula">$$ \\eta_X + \\eta_M > 1 $$</div>
<p><strong>Simbol:</strong> $\\eta_X$ = elastisitas harga permintaan ekspor; $\\eta_M$ = elastisitas harga permintaan impor. Bila jumlahnya melebihi satu, depresiasi riil memperbaiki <em>NX</em> dalam jangka panjang (efek volume mengalahkan efek nilai).</p>
<p><strong>Pakai</strong> sebagai <span class="key">syarat keberadaan lengan naik kurva-J</span>. Jika $\\eta_X+\\eta_M \\le 1$, kurva-J tak pernah berbalik naik. Peredam dunia nyata: <span class="key">pass-through</span> rendah dan input antara impor.</p>`
          }
        }
      ]
    }
  ],

  /* ===================================================================== */
  /* GRAPHS  (EconChart engine — path/hline time-path diagrams)            */
  /* ===================================================================== */
  graphs: [
    {
      heading: { en: 'Three signature diagrams', id: 'Tiga diagram khas' },
      num: 'G',
      cards: [
        {
          title: { en: 'The J-curve: NX over time after a depreciation', id: 'Kurva-J: NX terhadap waktu setelah depresiasi' },
          html: {
            en: `<p><span class="key">Exam:</span> at $t_0$ the currency depreciates. Net exports first <span class="key">fall below zero</span> (import bill up, volumes sticky), reach a <span class="key">trough</span>, then rise back <span class="key">above zero</span> as the volume effect (Marshall-Lerner) takes over — a smooth "J".</p>`,
            id: `<p><span class="key">Ujian:</span> pada $t_0$ mata uang terdepresiasi. Ekspor neto mula-mula <span class="key">jatuh di bawah nol</span> (tagihan impor naik, volume kaku), mencapai <span class="key">titik terendah</span>, lalu naik kembali <span class="key">di atas nol</span> saat efek volume (Marshall-Lerner) mengambil alih — membentuk huruf "J" yang mulus.</p>`
          },
          chart: {
            w: 480, h: 320,
            x: { min: 0, max: 10, label: 't' },
            y: { min: -4, max: 4, label: 'NX' },
            curves: [
              { id: 'ZERO', kind: 'hline', y: 0, color: '#444', label: 'NX = 0' },
              { id: 'J', kind: 'path', color: '#c0392b', label: 'NX(t)', smooth: true,
                pts: [[1, 0.4], [2, 0.1], [3, -1.6], [4, -2.4], [5, -1.8], [6, -0.4], [7, 1.0], [8, 2.1], [9, 2.7]] }
            ],
            points: [
              { at: [2, 0.1], label: 't₀ depreciation', dot: true, labelDx: 6, labelDy: -8 },
              { at: [4, -2.4], label: 'trough', dot: true, labelDx: 6, labelDy: 16 }
            ],
            notes: [
              { x: 3.2, y: -3.4, text: 'value effect dominates → NX↓', color: '#c0392b', size: 10 },
              { x: 7.2, y: 3.4, text: 'volume effect dominates → NX↑', color: '#0e8fb8', size: 10 }
            ]
          },
          htmlAfter: {
            en: `<div class="tip">📝 The dip is the value effect (import bill rises with $E$); the recovery is the volume effect, and it only happens if Marshall-Lerner ($\\eta_X+\\eta_M>1$) holds. (UAS J-curve timing item.)</div>`,
            id: `<div class="tip">📝 Lekukan adalah efek nilai (tagihan impor naik bersama $E$); pemulihan adalah efek volume, dan hanya terjadi bila Marshall-Lerner ($\\eta_X+\\eta_M>1$) terpenuhi. (Item waktu kurva-J di UAS.)</div>`
          }
        },
        {
          title: { en: 'Overshooting: E jumps then decays to E_LR', id: 'Overshooting: E melonjak lalu turun ke E_LR' },
          html: {
            en: `<p><span class="key">Exam:</span> at $t_0$ a permanent monetary expansion makes <em>E</em> <span class="key">jump above</span> its new long-run level (sticky prices + UIP), to $E_{overshoot}$. As prices slowly rise, <em>E</em> <span class="key">decays down</span> to the higher long-run level $E_{LR}$.</p>`,
            id: `<p><span class="key">Ujian:</span> pada $t_0$ ekspansi moneter permanen membuat <em>E</em> <span class="key">melonjak di atas</span> level jangka panjang barunya (harga kaku + UIP), ke $E_{overshoot}$. Saat harga perlahan naik, <em>E</em> <span class="key">turun</span> ke level jangka panjang yang lebih tinggi $E_{LR}$.</p>`
          },
          chart: {
            w: 480, h: 320,
            x: { min: 0, max: 10, label: 't' },
            y: { min: 0, max: 10, label: 'E' },
            curves: [
              { id: 'ELR', kind: 'hline', y: 6, color: '#444', label: 'E_LR' },
              { id: 'E', kind: 'path', color: '#0e8fb8', label: 'E(t)', smooth: true,
                pts: [[1, 4], [2, 4], [2.05, 8.6], [3.5, 7.6], [5, 6.9], [6.5, 6.5], [8, 6.2], [9, 6.05]] }
            ],
            points: [
              { at: [2, 4], label: 'E₀', dot: true, labelDx: -22, labelDy: 4 },
              { at: [2.05, 8.6], label: 'E_overshoot', dot: true, labelDx: 6, labelDy: -6 }
            ],
            notes: [
              { x: 2.2, y: 9.6, text: 't₀: M↑ ⇒ R↓ ⇒ E jumps', color: '#0e8fb8', size: 10 },
              { x: 6.0, y: 7.4, text: 'P rises ⇒ E decays to E_LR', color: '#444', size: 10 }
            ]
          },
          htmlAfter: {
            en: `<div class="tip">📝 The overshoot ($E_{overshoot} > E_{LR}$) is the whole point: floating rates are more volatile than money supplies because asset prices jump while goods prices crawl.</div>`,
            id: `<div class="tip">📝 Lonjakan berlebih ($E_{overshoot} > E_{LR}$) adalah intinya: nilai tukar mengambang lebih bergejolak daripada jumlah uang karena harga aset melompat sementara harga barang merangkak.</div>`
          }
        },
        {
          title: { en: 'The trilemma triangle', id: 'Segitiga trilema' },
          html: {
            en: `<p><span class="key">Exam:</span> the three corners are <em>fixed exchange rate</em>, <em>free capital flow</em>, and <em>independent monetary policy</em>. A country can sit on only <span class="key">one side</span> of the triangle — i.e. pick the <span class="key">two</span> corners that side connects, and give up the third.</p>`,
            id: `<p><span class="key">Ujian:</span> tiga sudutnya adalah <em>nilai tukar tetap</em>, <em>aliran modal bebas</em>, dan <em>kebijakan moneter independen</em>. Sebuah negara hanya bisa berada di <span class="key">satu sisi</span> segitiga — yakni memilih <span class="key">dua</span> sudut yang dihubungkan sisi itu, dan melepaskan yang ketiga.</p>`
          },
          chart: {
            w: 480, h: 340,
            x: { min: 0, max: 10, label: '' },
            y: { min: 0, max: 10, label: '' },
            curves: [
              { id: 'TRI', kind: 'path', color: '#444', smooth: false,
                pts: [[5, 9], [1, 1.5], [9, 1.5], [5, 9]] }
            ],
            points: [
              { at: [5, 9], label: 'Fixed exchange rate', dot: true, labelDx: -45, labelDy: -8 },
              { at: [1, 1.5], label: 'Free capital flow', dot: true, labelDx: -4, labelDy: 18 },
              { at: [9, 1.5], label: 'Independent mon. policy', dot: true, labelDx: -120, labelDy: 18 }
            ],
            notes: [
              { x: 2.4, y: 5.6, text: 'currency board', color: '#0e8fb8', size: 10, anchor: 'middle' },
              { x: 5.0, y: 1.0, text: 'capital controls', color: '#c0392b', size: 10, anchor: 'middle' },
              { x: 7.6, y: 5.6, text: 'floating + IT', color: '#d98a16', size: 10, anchor: 'middle' },
              { x: 5.0, y: 4.6, text: 'pick TWO', color: '#444', size: 12, anchor: 'middle' }
            ]
          },
          htmlAfter: {
            en: `<div class="tip">📝 Each <span class="key">side</span> = a feasible regime: top-left side keeps fixed ER + free capital (currency board, gives up own money); bottom side keeps fixed ER + own money (capital controls, gives up free capital); top-right side keeps free capital + own money (floating, gives up the fixed rate). (UAS "which two can a country pick" scenario.)</div>`,
            id: `<div class="tip">📝 Tiap <span class="key">sisi</span> = rezim yang layak: sisi kiri-atas mempertahankan NT tetap + modal bebas (currency board, lepas moneter sendiri); sisi bawah mempertahankan NT tetap + moneter sendiri (kontrol modal, lepas modal bebas); sisi kanan-atas mempertahankan modal bebas + moneter sendiri (mengambang, lepas nilai tukar tetap). (Skenario UAS "negara bisa pilih dua yang mana".)</div>`
          }
        }
      ]
    }
  ],

  /* ===================================================================== */
  /* QUIZ                                                                   */
  /* ===================================================================== */
  quiz: [
    {
      type: 'concept',
      q: {
        en: 'Explain, step by step, why a permanent monetary expansion makes the nominal exchange rate overshoot its long-run level.',
        id: 'Jelaskan, langkah demi langkah, mengapa ekspansi moneter permanen membuat nilai tukar nominal overshoot melewati level jangka panjangnya.'
      },
      context: {
        en: 'Use sticky goods prices, the money market, and uncovered interest parity (UIP).',
        id: 'Gunakan harga barang yang kaku, pasar uang, dan paritas suku bunga tak tertutup (UIP).'
      },
      answer: [
        { en: 'Goods prices P are sticky on impact, so a rise in M raises real balances M/P; the money market clears only if the home interest rate R falls.',
          id: 'Harga barang P kaku saat itu, sehingga kenaikan M menaikkan saldo riil M/P; pasar uang seimbang hanya jika suku bunga domestik R turun.' },
        { en: 'In the long run money is neutral: P rises proportionally and the long-run nominal rate E_LR is permanently higher (a depreciation).',
          id: 'Dalam jangka panjang uang netral: P naik proporsional dan nilai tukar nominal jangka panjang E_LR permanen lebih tinggi (depresiasi).' },
        { en: 'By UIP, a lower R must be offset by an expected future appreciation of the home currency (E expected to fall going forward).',
          id: 'Lewat UIP, R yang lebih rendah harus diimbangi ekspektasi apresiasi mata uang domestik ke depan (E diperkirakan turun selanjutnya).' },
        { en: 'The only way to expect a future appreciation while still ending higher than the start is for E to jump ABOVE E_LR now, then decay down — that jump above is the overshoot.',
          id: 'Satu-satunya cara mengharapkan apresiasi mendatang sambil tetap berakhir lebih tinggi dari awal adalah E melonjak DI ATAS E_LR sekarang, lalu turun — lonjakan di atas itulah overshoot-nya.' }
      ],
      tip: { en: 'Overshooting needs both sticky prices AND UIP. Drop either and E jumps straight to E_LR.',
             id: 'Overshooting butuh harga kaku DAN UIP. Hilangkan salah satunya dan E langsung melompat ke E_LR.' }
    },
    {
      type: 'scenario',
      q: {
        en: 'A central bank wants to keep its exchange rate fixed AND keep full control over its domestic interest rate. Under the trilemma, which of the three goals must it give up, and how?',
        id: 'Sebuah bank sentral ingin menjaga nilai tukar tetap DAN mempertahankan kendali penuh atas suku bunga domestiknya. Di bawah trilema, mana dari ketiga tujuan yang harus dilepas, dan bagaimana?'
      },
      context: {
        en: 'The trilemma corners: (1) fixed exchange rate, (2) free capital mobility, (3) independent monetary policy — pick only two.',
        id: 'Sudut trilema: (1) nilai tukar tetap, (2) mobilitas modal bebas, (3) kebijakan moneter independen — pilih dua saja.'
      },
      answer: [
        { en: 'It is already choosing two corners: a fixed exchange rate and an independent monetary policy.',
          id: 'Bank itu sudah memilih dua sudut: nilai tukar tetap dan kebijakan moneter independen.' },
        { en: 'With free capital mobility, UIP forces R toward R* (since a fixed rate means zero expected depreciation), so it could NOT keep an independent rate while pegging.',
          id: 'Dengan mobilitas modal bebas, UIP memaksa R menuju R* (karena nilai tukar tetap berarti ekspektasi depresiasi nol), sehingga bank TAK bisa menjaga suku bunga independen sambil mematok.' },
        { en: 'Therefore it must give up free capital mobility — i.e. impose capital controls — so domestic and foreign rates can differ while the peg holds.',
          id: 'Karena itu bank harus melepas mobilitas modal bebas — yakni menerapkan kontrol modal — agar suku bunga domestik dan asing bisa berbeda sementara patokan dipertahankan.' },
        { en: 'Example: Bretton Woods and China for many years used capital controls to combine a fixed/managed rate with their own monetary policy.',
          id: 'Contoh: Bretton Woods dan China bertahun-tahun memakai kontrol modal untuk menggabungkan nilai tukar tetap/terkelola dengan kebijakan moneternya sendiri.' }
      ],
      tip: { en: 'Map the request to corners first, then the missing third corner is the answer. Fixed + own money ⇒ give up free capital.',
             id: 'Petakan permintaan ke sudut dulu, lalu sudut ketiga yang hilang adalah jawabannya. Tetap + moneter sendiri ⇒ lepas modal bebas.' }
    },
    {
      type: 'scenario',
      q: {
        en: 'The rupiah depreciates sharply. A reporter notes that Indonesia\'s trade deficit WIDENED in the first two quarters and asks if the depreciation "failed". Using the J-curve, what do you say?',
        id: 'Rupiah terdepresiasi tajam. Seorang wartawan mencatat defisit dagang Indonesia MELEBAR pada dua kuartal pertama dan bertanya apakah depresiasi itu "gagal". Dengan kurva-J, apa jawaban Anda?'
      },
      context: {
        en: 'Net exports in value terms: NX = P_X·Q_X − E·P*_M·Q_M, with quantities sticky in the short run.',
        id: 'Ekspor neto dalam nilai: NX = P_X·Q_X − E·P*_M·Q_M, dengan kuantitas kaku dalam jangka pendek.'
      },
      answer: [
        { en: 'Short run: export and import VOLUMES are sticky (contracts, supply chains), so they barely move right after the depreciation.',
          id: 'Jangka pendek: VOLUME ekspor dan impor kaku (kontrak, rantai pasok), sehingga nyaris tak bergerak tepat setelah depresiasi.' },
        { en: 'But the import bill E·P*_M·Q_M rises immediately because E is higher, so the VALUE of imports jumps and NX falls — the deficit widens. This is the downward arm of the J.',
          id: 'Namun tagihan impor E·P*_M·Q_M langsung naik karena E lebih tinggi, sehingga NILAI impor melonjak dan NX turun — defisit melebar. Ini lengan turun kurva-J.' },
        { en: 'Over the following quarters, cheaper exports raise Q_X and dearer imports lower Q_M; once the volume effect dominates, NX rises back above its start — the upward arm.',
          id: 'Pada kuartal-kuartal berikutnya, ekspor lebih murah menaikkan Q_X dan impor lebih mahal menurunkan Q_M; begitu efek volume dominan, NX naik kembali di atas awalnya — lengan naik.' },
        { en: 'So it did not fail — provided Marshall-Lerner (η_X + η_M > 1) holds, the widening is the expected first dip of the J, not a permanent worsening.',
          id: 'Jadi tidak gagal — asalkan Marshall-Lerner (η_X + η_M > 1) terpenuhi, pelebaran itu adalah lekukan pertama kurva-J yang diperkirakan, bukan pemburukan permanen.' }
      ],
      tip: { en: 'J-curve timing: value effect first (NX↓), volume effect later (NX↑). The recovery exists only if Marshall-Lerner holds.',
             id: 'Waktu kurva-J: efek nilai dulu (NX↓), efek volume kemudian (NX↑). Pemulihan ada hanya jika Marshall-Lerner terpenuhi.' }
    },
    {
      type: 'concept',
      q: {
        en: 'Distinguish the real exchange rate q from the nominal rate E, and explain why a one-off increase in the money supply changes E_LR but not q-bar.',
        id: 'Bedakan nilai tukar riil q dari nilai tukar nominal E, dan jelaskan mengapa kenaikan sekali jumlah uang mengubah E_LR tetapi tidak q-bar.'
      },
      answer: [
        { en: 'q = E·P*/P measures relative competitiveness (foreign baskets per domestic basket); E is just the money price of foreign currency.',
          id: 'q = E·P*/P mengukur daya saing relatif (keranjang asing per keranjang domestik); E hanyalah harga uang dari mata uang asing.' },
        { en: 'The long-run real rate q-bar is set by REAL forces — relative demand and relative supply/productivity for goods — not by the money stock.',
          id: 'Nilai tukar riil jangka panjang q-bar ditetapkan kekuatan RIIL — permintaan relatif dan penawaran/produktivitas relatif barang — bukan oleh stok uang.' },
        { en: 'Money is neutral in the long run: a one-off rise in M raises P proportionally, leaving M/P, output and q-bar unchanged.',
          id: 'Uang netral dalam jangka panjang: kenaikan sekali M menaikkan P secara proporsional, membiarkan M/P, output, dan q-bar tetap.' },
        { en: 'Through E_LR = q-bar·P/P*, the higher P raises the long-run NOMINAL rate E_LR (a depreciation) even though the REAL rate q-bar is unchanged.',
          id: 'Lewat E_LR = q-bar·P/P*, P yang lebih tinggi menaikkan nilai tukar NOMINAL jangka panjang E_LR (depresiasi) meski nilai tukar RIIL q-bar tidak berubah.' }
      ],
      tip: { en: 'Real rate = real forces; nominal long-run rate = real rate × price ratio. Money moves prices, hence E_LR, but not q-bar.',
             id: 'Nilai tukar riil = kekuatan riil; nilai tukar nominal jangka panjang = nilai riil × rasio harga. Uang menggerakkan harga, jadi E_LR, tetapi tidak q-bar.' }
    }
  ]
};
