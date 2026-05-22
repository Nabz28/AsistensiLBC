/* ============================================================================
   EKINTER · Meeting 12 — International Macro 2: Money, PPP & Fisher (KOM Ch 15-16)
   Bilingual (EN + ID). Registers itself on window.EKINTER_WEEKS.m12.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   Graphs are COMPUTED via window.EconChart — equilibria are solved, not drawn.
   Money-market colours: Ms/P vertical TEAL, L(R,Y) downward RED, axes R vs M/P.
   ============================================================================ */
window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};

(function () {
  var RED = '#c0392b', TEAL = '#0e8fb8', AMBER = '#b7791f', GREY = '#444';

  /* ---- GRAPH 1: money market — Ms/P vertical, L(R,Y) downward; Ms↑ ⇒ R↓ ---- */
  var MONEY_MKT = { panels: [{
    title: 'Mˢ ↑ ⇒ R ↓', w: 380, h: 290,
    x: { min: 0, max: 10, label: 'M/P' }, y: { min: 0, max: 10, label: 'R' },
    curves: [
      { id: 'L', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: RED, label: 'L(R, Y)' },
      { id: 'MS1', kind: 'vline', x: 4, color: TEAL, label: '(Mˢ/P)₁' },
      { id: 'MS2', kind: 'vline', x: 6, color: TEAL, label: '(Mˢ/P)₂', dash: true }
    ],
    points: [
      { on: ['L', 'MS1'], guideY: 'R₁', dot: true },
      { on: ['L', 'MS2'], guideY: 'R₂', dot: true }
    ],
    shifts: [{ from: 'MS1', to: 'MS2' }]
  }] };

  /* ---- GRAPH 2: monetary approach + relative PPP -------------------------- */
  var MONETARY = { panels: [
    { title: 'Money mkt: Mˢ ↑ ⇒ R ↓', w: 320, h: 250,
      x: { min: 0, max: 10, label: 'M/P' }, y: { min: 0, max: 10, label: 'R' },
      curves: [
        { id: 'L', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: RED, label: 'L(R, Y)' },
        { id: 'MS1', kind: 'vline', x: 4, color: TEAL, label: '(Mˢ/P)₁' },
        { id: 'MS2', kind: 'vline', x: 6.5, color: TEAL, label: '(Mˢ/P)₂', dash: true } ],
      points: [ { on: ['L', 'MS1'], guideY: 'R₁', dot: true }, { on: ['L', 'MS2'], guideY: 'R₂', dot: true } ],
      shifts: [{ from: 'MS1', to: 'MS2' }] },
    { title: 'Relative PPP: %ΔE tracks π − π*', w: 320, h: 250,
      x: { min: 0, max: 10, label: 'time →' }, y: { min: 0, max: 10, label: 'E (IDR per $)' },
      curves: [
        { id: 'EPPP', kind: 'path', pts: [[0, 2], [2, 2.9], [4, 3.8], [6, 4.7], [8, 5.6], [10, 6.5]], color: TEAL, label: 'E (PPP path)' },
        { id: 'P', kind: 'path', pts: [[0, 1.4], [2, 2.3], [4, 3.2], [6, 4.1], [8, 5.0], [10, 5.9]], color: AMBER, label: 'P/P* (price ratio)', dash: true } ],
      notes: [ { x: 5, y: 8.6, text: 'slope = π − π*  (≈ 2%/yr)', color: GREY, anchor: 'middle', size: 11 } ] }
  ] };

  window.EKINTER_WEEKS.m12 = {
    id: 'm12',
    label: { en: 'Meeting 12', id: 'Pertemuan 12' },
    title: {
      en: 'International Macro 2: Money, Prices & the Long-Run Exchange Rate',
      id: 'Makro Internasional 2: Uang, Harga & Nilai Tukar Jangka Panjang'
    },
    subtitle: {
      en: 'The money market sets the interest rate and the price level; PPP links prices to the exchange rate; together they give the monetary approach. The Fisher effect ties nominal rates to expected inflation.',
      id: 'Pasar uang menentukan tingkat bunga dan tingkat harga; PPP mengaitkan harga dengan nilai tukar; bersama keduanya membentuk pendekatan moneter. Efek Fisher mengikat suku bunga nominal pada inflasi yang diharapkan.'
    },

    /* =========================================================================
       NOTES
       ========================================================================= */
    notes: [
      {
        heading: { en: 'Money demand & money-market equilibrium', id: 'Permintaan uang & keseimbangan pasar uang' },
        num: '1',
        cards: [
          {
            title: { en: 'What people demand is REAL money', id: 'Yang diminta orang adalah uang RIIL' },
            html: {
              en: `<p>Households and firms hold money for transactions, but what they care about is its <span class="key">purchasing power</span> — <span class="key">real</span> money balances $M/P$, not the nominal pile $M$. Aggregate <span class="key">real money demand</span> is a function $L$ of two things:</p>
<div class="formula">$$M^d = P \\cdot L(R, Y)$$</div>
<ul>
<li><span class="key">Falls with the nominal interest rate $R$</span> — $R$ is the <em>opportunity cost</em> of holding cash instead of an interest-bearing bond. Higher $R$ ⇒ hold less money.</li>
<li><span class="key">Rises with real income $Y$</span> — more output means more transactions, so people need more money to grease them.</li>
</ul>
<div class="note">Read $L(R,Y)$ as "liquidity preference." The $P$ in front converts real demand $L$ into the nominal money people actually want to hold.</div>`,
              id: `<p>Rumah tangga dan perusahaan memegang uang untuk transaksi, tetapi yang mereka pedulikan adalah <span class="key">daya belinya</span> — saldo uang <span class="key">riil</span> $M/P$, bukan tumpukan nominal $M$. <span class="key">Permintaan uang riil</span> agregat adalah fungsi $L$ dari dua hal:</p>
<div class="formula">$$M^d = P \\cdot L(R, Y)$$</div>
<ul>
<li><span class="key">Turun terhadap suku bunga nominal $R$</span> — $R$ adalah <em>biaya peluang</em> memegang uang tunai alih-alih obligasi berbunga. $R$ lebih tinggi ⇒ pegang lebih sedikit uang.</li>
<li><span class="key">Naik terhadap pendapatan riil $Y$</span> — output lebih banyak berarti transaksi lebih banyak, jadi orang butuh lebih banyak uang untuk melancarkannya.</li>
</ul>
<div class="note">Baca $L(R,Y)$ sebagai "preferensi likuiditas." $P$ di depan mengubah permintaan riil $L$ menjadi uang nominal yang sungguh ingin dipegang orang.</div>`
            }
          },
          {
            title: { en: 'Equilibrium: the central bank sets Mˢ, the market sets R', id: 'Keseimbangan: bank sentral menetapkan Mˢ, pasar menetapkan R' },
            html: {
              en: `<p>The central bank fixes the nominal money supply $M^s$. In the short run the price level $P$ is given, so the <span class="key">real money supply $M^s/P$ is a vertical line</span> — it does not depend on $R$. Equilibrium is where real supply meets real demand:</p>
<div class="formula">$$\\frac{M^s}{P} = L(R, Y)$$</div>
<p>The downward-sloping $L(R,Y)$ curve crosses the vertical $M^s/P$ line at one point, pinning down the equilibrium interest rate $R$.</p>
<ul>
<li><span class="key">Money supply $\\uparrow$</span> ($M^s/P$ shifts right) ⇒ at the old $R$ there is excess money; people buy bonds, bond prices rise, ⇒ <span class="key">$R$ falls</span>.</li>
<li><span class="key">Income $\\uparrow$</span> ($L$ shifts right) ⇒ more money demanded ⇒ <span class="key">$R$ rises</span> (if $M^s$ unchanged).</li>
</ul>
<div class="tip">Short-run vs long-run: in the SHORT run, $P$ is sticky, so a money increase mainly lowers $R$. In the LONG run, $P$ adjusts and the same money increase raises $P$ proportionally — that long-run channel is the monetary approach in section 5.</div>`,
              id: `<p>Bank sentral menetapkan jumlah uang nominal $M^s$. Dalam jangka pendek tingkat harga $P$ tertentu, sehingga <span class="key">penawaran uang riil $M^s/P$ adalah garis vertikal</span> — tidak bergantung pada $R$. Keseimbangan terjadi di mana penawaran riil bertemu permintaan riil:</p>
<div class="formula">$$\\frac{M^s}{P} = L(R, Y)$$</div>
<p>Kurva $L(R,Y)$ yang melandai ke bawah memotong garis vertikal $M^s/P$ di satu titik, menetapkan suku bunga keseimbangan $R$.</p>
<ul>
<li><span class="key">Jumlah uang $\\uparrow$</span> ($M^s/P$ bergeser ke kanan) ⇒ pada $R$ lama ada kelebihan uang; orang membeli obligasi, harga obligasi naik, ⇒ <span class="key">$R$ turun</span>.</li>
<li><span class="key">Pendapatan $\\uparrow$</span> ($L$ bergeser ke kanan) ⇒ permintaan uang naik ⇒ <span class="key">$R$ naik</span> (jika $M^s$ tetap).</li>
</ul>
<div class="tip">Jangka pendek vs panjang: dalam jangka PENDEK, $P$ kaku, sehingga kenaikan uang terutama menurunkan $R$. Dalam jangka PANJANG, $P$ menyesuaikan dan kenaikan uang yang sama menaikkan $P$ secara proporsional — saluran jangka panjang itu adalah pendekatan moneter di bagian 5.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The quantity theory of money', id: 'Teori kuantitas uang' },
        num: '2',
        cards: [
          {
            title: { en: 'MV = PY and the long-run price level', id: 'MV = PY dan tingkat harga jangka panjang' },
            html: {
              en: `<p>The <span class="key">quantity equation</span> is an accounting identity linking money to nominal GDP:</p>
<div class="formula">$$M \\cdot V = P \\cdot Y$$</div>
<p>where $V$ is the <span class="key">velocity of money</span> (how many times a unit of currency changes hands per year), $P$ the price level, $Y$ real output. Rearranged for the price level:</p>
<div class="formula">$$P = \\frac{M \\cdot V}{Y}$$</div>
<p>The <span class="key">quantity theory</span> adds two long-run assumptions: $V$ is roughly constant and $Y$ is fixed by real factors. Then $P$ is <span class="key">proportional to $M$</span> — double the money supply and you double the price level.</p>
<div class="note">In growth-rate form: $\\;\\%\\Delta M + \\%\\Delta V = \\pi + \\%\\Delta Y$. With $V$ constant, the inflation rate is $\\;\\pi \\approx \\%\\Delta M - \\%\\Delta Y$ — sustained inflation is a monetary phenomenon.</div>`,
              id: `<p><span class="key">Persamaan kuantitas</span> adalah identitas akuntansi yang mengaitkan uang dengan PDB nominal:</p>
<div class="formula">$$M \\cdot V = P \\cdot Y$$</div>
<p>dengan $V$ adalah <span class="key">perputaran uang (velositas)</span> (berapa kali satu unit mata uang berpindah tangan per tahun), $P$ tingkat harga, $Y$ output riil. Disusun ulang untuk tingkat harga:</p>
<div class="formula">$$P = \\frac{M \\cdot V}{Y}$$</div>
<p><span class="key">Teori kuantitas</span> menambahkan dua asumsi jangka panjang: $V$ kira-kira konstan dan $Y$ ditentukan faktor riil. Maka $P$ <span class="key">proporsional terhadap $M$</span> — gandakan jumlah uang dan tingkat harga ikut berlipat dua.</p>
<div class="note">Dalam bentuk laju pertumbuhan: $\\;\\%\\Delta M + \\%\\Delta V = \\pi + \\%\\Delta Y$. Dengan $V$ konstan, laju inflasi adalah $\\;\\pi \\approx \\%\\Delta M - \\%\\Delta Y$ — inflasi yang berkelanjutan adalah fenomena moneter.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Law of one price & absolute PPP', id: 'Hukum satu harga & PPP absolut' },
        num: '3',
        cards: [
          {
            title: { en: 'The law of one price', id: 'Hukum satu harga' },
            html: {
              en: `<p>The <span class="key">law of one price (LoP)</span> says: in competitive markets with no transport costs or trade barriers, an <span class="key">identical good must sell for the same price everywhere</span> once prices are expressed in a common currency. For a single good $i$:</p>
<div class="formula">$$P_i = E \\cdot P_i^{*}$$</div>
<p>where $E$ is the nominal exchange rate (home currency per unit of foreign currency), $P_i$ the home price, $P_i^{*}$ the foreign price. If it failed, traders would buy where it is cheap and sell where it is dear — <span class="key">arbitrage</span> — until prices converged.</p>
<div class="note">"Barang yang sama harus dijual dengan harga sama di pasar berbeda." LoP is about <em>one</em> good; PPP applies the same idea to the whole basket.</div>`,
              id: `<p><span class="key">Hukum satu harga (LoP)</span> menyatakan: dalam pasar kompetitif tanpa biaya transportasi atau hambatan perdagangan, <span class="key">barang yang identik harus dijual dengan harga sama di mana pun</span> begitu harga dinyatakan dalam mata uang yang sama. Untuk satu barang $i$:</p>
<div class="formula">$$P_i = E \\cdot P_i^{*}$$</div>
<p>dengan $E$ nilai tukar nominal (mata uang domestik per unit mata uang asing), $P_i$ harga domestik, $P_i^{*}$ harga asing. Jika tidak berlaku, pedagang akan membeli di tempat murah dan menjual di tempat mahal — <span class="key">arbitrase</span> — sampai harga konvergen.</p>
<div class="note">"Barang yang sama harus dijual dengan harga sama di pasar berbeda." LoP berlaku untuk <em>satu</em> barang; PPP menerapkan ide yang sama pada seluruh keranjang barang.</div>`
            }
          },
          {
            title: { en: 'Absolute PPP: E = P / P*', id: 'PPP absolut: E = P / P*' },
            html: {
              en: `<p>Apply the law of one price to the whole consumption <span class="key">basket</span>, not just one good. <span class="key">Absolute purchasing power parity</span> says the exchange rate equals the ratio of the two countries' price levels:</p>
<div class="formula">$$E = \\frac{P}{P^{*}}$$</div>
<p>If a basket costs $P$ at home and $P^{*}$ abroad, the exchange rate must make those equal in a common currency. Equivalently, PPP says the <span class="key">real exchange rate is constant at 1</span>.</p>
<ul>
<li>Home price level $P \\uparrow$ ⇒ home currency <span class="key">depreciates</span> ($E \\uparrow$, more home currency per unit foreign).</li>
<li>Foreign price level $P^{*} \\uparrow$ ⇒ home currency <span class="key">appreciates</span> ($E \\downarrow$).</li>
</ul>
<div class="tip">Absolute PPP fails empirically: nontradable goods (haircuts, rent), trade barriers, and imperfect competition keep baskets from costing the same. It is a long-run benchmark, not a daily predictor.</div>`,
              id: `<p>Terapkan hukum satu harga pada seluruh <span class="key">keranjang</span> konsumsi, bukan hanya satu barang. <span class="key">Paritas daya beli absolut</span> menyatakan nilai tukar sama dengan rasio tingkat harga kedua negara:</p>
<div class="formula">$$E = \\frac{P}{P^{*}}$$</div>
<p>Jika satu keranjang berharga $P$ di domestik dan $P^{*}$ di luar negeri, nilai tukar harus menyamakannya dalam mata uang bersama. Setara dengan itu, PPP menyatakan <span class="key">nilai tukar riil konstan di 1</span>.</p>
<ul>
<li>Tingkat harga domestik $P \\uparrow$ ⇒ mata uang domestik <span class="key">terdepresiasi</span> ($E \\uparrow$, lebih banyak mata uang domestik per unit asing).</li>
<li>Tingkat harga asing $P^{*} \\uparrow$ ⇒ mata uang domestik <span class="key">terapresiasi</span> ($E \\downarrow$).</li>
</ul>
<div class="tip">PPP absolut gagal secara empiris: barang non-tradable (potong rambut, sewa), hambatan perdagangan, dan persaingan tidak sempurna membuat keranjang tak berharga sama. Ini patokan jangka panjang, bukan prediktor harian.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Relative PPP & deviations', id: 'PPP relatif & penyimpangan' },
        num: '4',
        cards: [
          {
            title: { en: 'Relative PPP: %ΔE = π − π*', id: 'PPP relatif: %ΔE = π − π*' },
            html: {
              en: `<p>Even when absolute PPP fails, a weaker version often holds over long horizons. <span class="key">Relative PPP</span> says the <span class="key">percentage change</span> in the exchange rate equals the <span class="key">inflation differential</span>:</p>
<div class="formula">$$\\%\\Delta E = \\pi - \\pi^{*}$$</div>
<p>where $\\pi$ is home inflation and $\\pi^{*}$ is foreign inflation. The currency of the <span class="key">higher-inflation country depreciates</span> by exactly the inflation gap.</p>
<div class="note"><strong>Indonesia example:</strong> if Indonesian inflation $\\pi = 4\\%$ and U.S. inflation $\\pi^{*} = 2\\%$, then $\\%\\Delta E = 4\\% - 2\\% = 2\\%$ — the rupiah depreciates against the dollar by about $2\\%$ per year.</div>`,
              id: `<p>Bahkan saat PPP absolut gagal, versi yang lebih lemah sering berlaku dalam jangka panjang. <span class="key">PPP relatif</span> menyatakan <span class="key">perubahan persentase</span> nilai tukar sama dengan <span class="key">selisih inflasi</span>:</p>
<div class="formula">$$\\%\\Delta E = \\pi - \\pi^{*}$$</div>
<p>dengan $\\pi$ inflasi domestik dan $\\pi^{*}$ inflasi asing. Mata uang negara dengan <span class="key">inflasi lebih tinggi terdepresiasi</span> persis sebesar selisih inflasi.</p>
<div class="note"><strong>Contoh Indonesia:</strong> jika inflasi Indonesia $\\pi = 4\\%$ dan inflasi AS $\\pi^{*} = 2\\%$, maka $\\%\\Delta E = 4\\% - 2\\% = 2\\%$ — rupiah terdepresiasi terhadap dolar sekitar $2\\%$ per tahun.</div>`
            }
          },
          {
            title: { en: 'Why PPP deviates: the real exchange rate', id: 'Mengapa PPP menyimpang: nilai tukar riil' },
            html: {
              en: `<p>Define the <span class="key">real exchange rate</span> $q$ — the relative price of foreign vs home baskets:</p>
<div class="formula">$$q = \\frac{E \\cdot P^{*}}{P}$$</div>
<p>If absolute PPP held exactly, $q = 1$ forever. In reality $q$ moves, because of:</p>
<ul>
<li><span class="key">Nontradables</span> — services and rent never get arbitraged across borders.</li>
<li><span class="key">Trade barriers & transport costs</span> — tariffs and shipping break the law of one price.</li>
<li><span class="key">Real shocks</span> — e.g. Indonesia's 2022 nickel boom caused a <em>real</em> rupiah appreciation that swamped monetary factors.</li>
<li><span class="key">Balassa–Samuelson</span> — richer countries have higher nontradable prices, so the Big Mac looks "50% undervalued" in Indonesia. That gap reflects genuine productivity differences, not disequilibrium.</li>
</ul>
<div class="tip">Decompose: $\\;\\%\\Delta q = \\%\\Delta E + \\pi^{*} - \\pi$. A real appreciation ($q\\downarrow$) means home goods got relatively more expensive abroad.</div>`,
              id: `<p>Definisikan <span class="key">nilai tukar riil</span> $q$ — harga relatif keranjang asing vs domestik:</p>
<div class="formula">$$q = \\frac{E \\cdot P^{*}}{P}$$</div>
<p>Jika PPP absolut berlaku persis, $q = 1$ selamanya. Pada kenyataannya $q$ bergerak, karena:</p>
<ul>
<li><span class="key">Barang non-tradable</span> — jasa dan sewa tak pernah diarbitrasekan lintas batas.</li>
<li><span class="key">Hambatan perdagangan & biaya transportasi</span> — tarif dan pengiriman mematahkan hukum satu harga.</li>
<li><span class="key">Guncangan riil</span> — mis. ledakan nikel Indonesia 2022 menyebabkan apresiasi rupiah <em>riil</em> yang menenggelamkan faktor moneter.</li>
<li><span class="key">Balassa–Samuelson</span> — negara lebih kaya punya harga non-tradable lebih tinggi, sehingga Big Mac tampak "undervalued 50%" di Indonesia. Selisih itu mencerminkan perbedaan produktivitas yang nyata, bukan ketidakseimbangan.</li>
</ul>
<div class="tip">Dekomposisi: $\\;\\%\\Delta q = \\%\\Delta E + \\pi^{*} - \\pi$. Apresiasi riil ($q\\downarrow$) berarti barang domestik jadi relatif lebih mahal di luar negeri.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The monetary approach to the exchange rate', id: 'Pendekatan moneter terhadap nilai tukar' },
        num: '5',
        cards: [
          {
            title: { en: 'Money market + PPP ⇒ E from money supplies', id: 'Pasar uang + PPP ⇒ E dari jumlah uang' },
            html: {
              en: `<p>Combine the two building blocks. In the long run each price level is set by its own money market (quantity theory): $P = M^s / L(R,Y)$ and $P^{*} = M^{s*} / L^{*}(R^{*},Y^{*})$. Plug into absolute PPP $E = P/P^{*}$:</p>
<div class="formula">$$E = \\frac{M^s}{M^{s*}} \\times \\frac{L^{*}(R^{*}, Y^{*})}{L(R, Y)}$$</div>
<p>This is the <span class="key">monetary approach</span>: the long-run exchange rate is driven by relative money supplies and relative money demands. The headline result is a clean chain:</p>
<div class="formula">$$M^s \\uparrow \\;\\Rightarrow\\; P \\uparrow \\;\\Rightarrow\\; E \\uparrow \\;(\\text{home currency depreciates})$$</div>
<ul>
<li><span class="key">Home money supply $\\uparrow$</span> ⇒ $P\\uparrow$ ⇒ $E\\uparrow$ (depreciation), proportionally.</li>
<li><span class="key">Home real income $Y \\uparrow$</span> ⇒ money demand $L\\uparrow$ ⇒ $P\\downarrow$ ⇒ $E\\downarrow$ (appreciation).</li>
</ul>
<div class="note">Permanent money growth raises <em>expected inflation</em>, which (via the Fisher effect below) raises $R$ rather than lowering it. So the long-run story is the opposite of the short-run "money up ⇒ R down."</div>`,
              id: `<p>Gabungkan kedua blok dasar. Dalam jangka panjang setiap tingkat harga ditentukan pasar uangnya sendiri (teori kuantitas): $P = M^s / L(R,Y)$ dan $P^{*} = M^{s*} / L^{*}(R^{*},Y^{*})$. Masukkan ke PPP absolut $E = P/P^{*}$:</p>
<div class="formula">$$E = \\frac{M^s}{M^{s*}} \\times \\frac{L^{*}(R^{*}, Y^{*})}{L(R, Y)}$$</div>
<p>Inilah <span class="key">pendekatan moneter</span>: nilai tukar jangka panjang digerakkan oleh jumlah uang relatif dan permintaan uang relatif. Hasil utamanya adalah rantai yang rapi:</p>
<div class="formula">$$M^s \\uparrow \\;\\Rightarrow\\; P \\uparrow \\;\\Rightarrow\\; E \\uparrow \\;(\\text{mata uang domestik terdepresiasi})$$</div>
<ul>
<li><span class="key">Jumlah uang domestik $\\uparrow$</span> ⇒ $P\\uparrow$ ⇒ $E\\uparrow$ (depresiasi), secara proporsional.</li>
<li><span class="key">Pendapatan riil domestik $Y \\uparrow$</span> ⇒ permintaan uang $L\\uparrow$ ⇒ $P\\downarrow$ ⇒ $E\\downarrow$ (apresiasi).</li>
</ul>
<div class="note">Pertumbuhan uang permanen menaikkan <em>inflasi yang diharapkan</em>, yang (lewat efek Fisher di bawah) menaikkan $R$ alih-alih menurunkannya. Jadi cerita jangka panjang berlawanan dengan jangka pendek "uang naik ⇒ R turun."</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The Fisher effect & real interest parity', id: 'Efek Fisher & paritas suku bunga riil' },
        num: '6',
        cards: [
          {
            title: { en: 'Fisher effect: R = r + πᵉ', id: 'Efek Fisher: R = r + πᵉ' },
            html: {
              en: `<p>The <span class="key">Fisher effect</span> splits the nominal interest rate $R$ into a real rate $r$ plus expected inflation $\\pi^{e}$:</p>
<div class="formula">$$R = r + \\pi^{e}$$</div>
<p>Lenders demand compensation for expected loss of purchasing power, so a rise in expected inflation feeds <span class="key">one-for-one</span> into the nominal rate (with the real rate $r$ pinned down by real factors in the long run).</p>
<div class="note"><strong>Indonesia 2025:</strong> if the policy rate $R \\approx 5.75\\%$ and expected inflation $\\pi^{e} \\approx 2.5\\%$, the implied real rate is $r = R - \\pi^{e} \\approx 3.25\\%$.</div>
<div class="tip">This is why permanent money growth RAISES nominal rates in the monetary approach: faster $M$ growth ⇒ higher $\\pi^{e}$ ⇒ higher $R$. Don't confuse it with the short-run liquidity effect (money up ⇒ R down).</div>`,
              id: `<p><span class="key">Efek Fisher</span> memecah suku bunga nominal $R$ menjadi suku bunga riil $r$ ditambah inflasi yang diharapkan $\\pi^{e}$:</p>
<div class="formula">$$R = r + \\pi^{e}$$</div>
<p>Pemberi pinjaman menuntut kompensasi atas perkiraan hilangnya daya beli, sehingga kenaikan inflasi yang diharapkan diteruskan <span class="key">satu-untuk-satu</span> ke suku bunga nominal (dengan suku bunga riil $r$ ditetapkan faktor riil dalam jangka panjang).</p>
<div class="note"><strong>Indonesia 2025:</strong> jika suku bunga acuan $R \\approx 5,75\\%$ dan inflasi yang diharapkan $\\pi^{e} \\approx 2,5\\%$, maka suku bunga riil tersirat $r = R - \\pi^{e} \\approx 3,25\\%$.</div>
<div class="tip">Inilah sebabnya pertumbuhan uang permanen MENAIKKAN suku bunga nominal dalam pendekatan moneter: pertumbuhan $M$ lebih cepat ⇒ $\\pi^{e}$ lebih tinggi ⇒ $R$ lebih tinggi. Jangan campur dengan efek likuiditas jangka pendek (uang naik ⇒ R turun).</div>`
            }
          },
          {
            title: { en: 'Real interest parity', id: 'Paritas suku bunga riil' },
            html: {
              en: `<p>Combine the Fisher effect with relative PPP and uncovered interest parity (UIP). UIP says $R - R^{*} = \\%\\Delta E^{e}$; relative PPP says $\\%\\Delta E^{e} = \\pi^{e} - \\pi^{e*}$. Substituting and using Fisher gives <span class="key">real interest parity</span> — real rates differ only by the expected change in the real exchange rate:</p>
<div class="formula">$$r - r^{*} = \\frac{q^{e} - q}{q}$$</div>
<p>If PPP is expected to hold ($q$ constant), then $r = r^{*}$: real rates equalize across countries. A higher domestic real rate must therefore signal an expected <span class="key">real depreciation</span> of the home currency, compensating investors.</p>
<div class="tip">Chain of logic for the exam: Fisher ($R = r + \\pi^{e}$) + UIP + relative PPP ⇒ real interest parity. Memorize the chain, not just the endpoint.</div>`,
              id: `<p>Gabungkan efek Fisher dengan PPP relatif dan paritas suku bunga tak tertutup (UIP). UIP menyatakan $R - R^{*} = \\%\\Delta E^{e}$; PPP relatif menyatakan $\\%\\Delta E^{e} = \\pi^{e} - \\pi^{e*}$. Substitusi dan memakai Fisher menghasilkan <span class="key">paritas suku bunga riil</span> — suku bunga riil hanya berbeda sebesar perubahan yang diharapkan dari nilai tukar riil:</p>
<div class="formula">$$r - r^{*} = \\frac{q^{e} - q}{q}$$</div>
<p>Jika PPP diharapkan berlaku ($q$ konstan), maka $r = r^{*}$: suku bunga riil setara antarnegara. Suku bunga riil domestik yang lebih tinggi karenanya harus menandakan perkiraan <span class="key">depresiasi riil</span> mata uang domestik, sebagai kompensasi bagi investor.</p>
<div class="tip">Rantai logika untuk ujian: Fisher ($R = r + \\pi^{e}$) + UIP + PPP relatif ⇒ paritas suku bunga riil. Hafalkan rantainya, bukan hanya titik akhirnya.</div>`
            }
          }
        ]
      }
    ],

    /* =========================================================================
       FORMULAS
       ========================================================================= */
    formulas: [
      {
        cards: [
          {
            title: { en: 'Money demand', id: 'Permintaan uang' },
            html: {
              en: `<div class="formula">$$M^d = P \\cdot L(R, Y)$$</div>
<p>Nominal money demand equals the price level $P$ times real money demand $L(R,Y)$. $L$ <span class="key">falls with $R$</span> (opportunity cost of cash) and <span class="key">rises with $Y$</span> (transactions).</p>
<p><strong>Use it</strong> to draw the downward-sloping money-demand curve and to set up the equilibrium $M^s/P = L(R,Y)$.</p>`,
              id: `<div class="formula">$$M^d = P \\cdot L(R, Y)$$</div>
<p>Permintaan uang nominal sama dengan tingkat harga $P$ dikali permintaan uang riil $L(R,Y)$. $L$ <span class="key">turun terhadap $R$</span> (biaya peluang uang tunai) dan <span class="key">naik terhadap $Y$</span> (transaksi).</p>
<p><strong>Gunakan</strong> untuk menggambar kurva permintaan uang yang melandai ke bawah dan menyusun keseimbangan $M^s/P = L(R,Y)$.</p>`
            }
          },
          {
            title: { en: 'Quantity equation', id: 'Persamaan kuantitas' },
            html: {
              en: `<div class="formula">$$M \\cdot V = P \\cdot Y$$</div>
<p>Money $\\times$ velocity $=$ price level $\\times$ real output. With $V$ constant and $Y$ fixed, $P$ is proportional to $M$ — the quantity theory of money.</p>
<p><strong>Use it</strong> to find the long-run price level $P = MV/Y$, and in growth form $\\pi \\approx \\%\\Delta M - \\%\\Delta Y$.</p>`,
              id: `<div class="formula">$$M \\cdot V = P \\cdot Y$$</div>
<p>Uang $\\times$ velositas $=$ tingkat harga $\\times$ output riil. Dengan $V$ konstan dan $Y$ tetap, $P$ proporsional terhadap $M$ — teori kuantitas uang.</p>
<p><strong>Gunakan</strong> untuk mencari tingkat harga jangka panjang $P = MV/Y$, dan dalam bentuk pertumbuhan $\\pi \\approx \\%\\Delta M - \\%\\Delta Y$.</p>`
            }
          },
          {
            title: { en: 'Absolute PPP', id: 'PPP absolut' },
            html: {
              en: `<div class="formula">$$E = \\frac{P}{P^{*}}$$</div>
<p>The exchange rate (home currency per unit foreign) equals the ratio of price levels. Higher home prices ⇒ depreciation ($E\\uparrow$); higher foreign prices ⇒ appreciation ($E\\downarrow$).</p>
<p><strong>Use it</strong> for "given $P$ and $P^{*}$, find $E$" problems and as the bridge inside the monetary approach.</p>`,
              id: `<div class="formula">$$E = \\frac{P}{P^{*}}$$</div>
<p>Nilai tukar (mata uang domestik per unit asing) sama dengan rasio tingkat harga. Harga domestik lebih tinggi ⇒ depresiasi ($E\\uparrow$); harga asing lebih tinggi ⇒ apresiasi ($E\\downarrow$).</p>
<p><strong>Gunakan</strong> untuk soal "diketahui $P$ dan $P^{*}$, cari $E$" dan sebagai jembatan dalam pendekatan moneter.</p>`
            }
          },
          {
            title: { en: 'Relative PPP', id: 'PPP relatif' },
            html: {
              en: `<div class="formula">$$\\%\\Delta E = \\pi - \\pi^{*}$$</div>
<p>The exchange rate changes by the inflation differential. The higher-inflation currency depreciates by exactly the gap.</p>
<p><strong>Use it</strong> for "given inflation rates, find the % change in $E$" problems — the more empirically reliable long-run version of PPP.</p>`,
              id: `<div class="formula">$$\\%\\Delta E = \\pi - \\pi^{*}$$</div>
<p>Nilai tukar berubah sebesar selisih inflasi. Mata uang berinflasi lebih tinggi terdepresiasi persis sebesar selisihnya.</p>
<p><strong>Gunakan</strong> untuk soal "diketahui laju inflasi, cari % perubahan $E$" — versi PPP jangka panjang yang lebih andal secara empiris.</p>`
            }
          },
          {
            title: { en: 'Fisher effect', id: 'Efek Fisher' },
            html: {
              en: `<div class="formula">$$R = r + \\pi^{e}$$</div>
<p>The nominal interest rate equals the real rate plus expected inflation. With $r$ fixed in the long run, a rise in $\\pi^{e}$ feeds one-for-one into $R$.</p>
<p><strong>Use it</strong> to back out the real rate $r = R - \\pi^{e}$ and to explain why permanent money growth raises (not lowers) nominal rates.</p>`,
              id: `<div class="formula">$$R = r + \\pi^{e}$$</div>
<p>Suku bunga nominal sama dengan suku bunga riil ditambah inflasi yang diharapkan. Dengan $r$ tetap dalam jangka panjang, kenaikan $\\pi^{e}$ diteruskan satu-untuk-satu ke $R$.</p>
<p><strong>Gunakan</strong> untuk menghitung suku bunga riil $r = R - \\pi^{e}$ dan menjelaskan mengapa pertumbuhan uang permanen menaikkan (bukan menurunkan) suku bunga nominal.</p>`
            }
          }
        ]
      }
    ],

    /* =========================================================================
       GRAPHS  (engine-rendered via window.EconChart — equilibria computed)
       ========================================================================= */
    graphs: [
      {
        heading: { en: 'The money market diagram', id: 'Diagram pasar uang' },
        num: 'G1',
        cards: [
          {
            title: { en: 'Real money supply vs liquidity preference', id: 'Penawaran uang riil vs preferensi likuiditas' },
            html: {
              en: `<p><span class="key">Building block.</span> The real money supply $M^s/P$ is a <span class="key">vertical line</span> (fixed by the central bank, independent of $R$). Money demand $L(R,Y)$ <span class="key">slopes down</span> in $R$. Their crossing sets the equilibrium interest rate.</p>
<p>An <span class="key">increase in the money supply</span> shifts $M^s/P$ to the right; reading off the demand curve, the equilibrium $R$ <span class="key">falls</span> (the short-run liquidity effect).</p>`,
              id: `<p><span class="key">Blok dasar.</span> Penawaran uang riil $M^s/P$ adalah <span class="key">garis vertikal</span> (ditetapkan bank sentral, tak bergantung $R$). Permintaan uang $L(R,Y)$ <span class="key">melandai ke bawah</span> terhadap $R$. Perpotongan keduanya menetapkan suku bunga keseimbangan.</p>
<p><span class="key">Kenaikan jumlah uang</span> menggeser $M^s/P$ ke kanan; membaca dari kurva permintaan, $R$ keseimbangan <span class="key">turun</span> (efek likuiditas jangka pendek).</p>`
            },
            chart: MONEY_MKT,
            htmlAfter: {
              en: `<div class="tip">$M^s/P$ right ⇒ $R$ ↓ (short run). Income $Y$ ↑ would instead shift $L(R,Y)$ right ⇒ $R$ ↑.</div>`,
              id: `<div class="tip">$M^s/P$ ke kanan ⇒ $R$ ↓ (jangka pendek). Pendapatan $Y$ ↑ malah menggeser $L(R,Y)$ ke kanan ⇒ $R$ ↑.</div>`
            }
          }
        ]
      },
      {
        heading: { en: 'Monetary approach & relative PPP', id: 'Pendekatan moneter & PPP relatif' },
        num: 'G2',
        cards: [
          {
            title: { en: 'From the money market to the exchange rate', id: 'Dari pasar uang ke nilai tukar' },
            html: {
              en: `<p>Left panel: a permanent money increase. In the long run $P$ rises proportionally, so via absolute PPP $E = P/P^{*}$ the home currency <span class="key">depreciates</span>. Right panel: under <span class="key">relative PPP</span>, the exchange-rate path tracks the price-level ratio over time — its slope is the inflation differential $\\pi - \\pi^{*}$.</p>`,
              id: `<p>Panel kiri: kenaikan uang permanen. Dalam jangka panjang $P$ naik proporsional, sehingga lewat PPP absolut $E = P/P^{*}$ mata uang domestik <span class="key">terdepresiasi</span>. Panel kanan: di bawah <span class="key">PPP relatif</span>, lintasan nilai tukar mengikuti rasio tingkat harga sepanjang waktu — kemiringannya adalah selisih inflasi $\\pi - \\pi^{*}$.</p>`
            },
            chart: MONETARY,
            htmlAfter: {
              en: `<div class="note">Chain: $M^s \\uparrow \\Rightarrow P \\uparrow \\Rightarrow E \\uparrow$ (depreciation). The right panel shows $E$ and $P/P^{*}$ rising together at the inflation-differential rate.</div>`,
              id: `<div class="note">Rantai: $M^s \\uparrow \\Rightarrow P \\uparrow \\Rightarrow E \\uparrow$ (depresiasi). Panel kanan menunjukkan $E$ dan $P/P^{*}$ naik bersama pada laju selisih inflasi.</div>`
            }
          }
        ]
      }
    ],

    /* =========================================================================
       QUIZ
       ========================================================================= */
    quiz: [
      {
        type: 'concept',
        q: {
          en: 'In the SHORT run, the central bank increases the money supply with the price level still sticky. What happens to the equilibrium nominal interest rate, and why?',
          id: 'Dalam jangka PENDEK, bank sentral menaikkan jumlah uang sementara tingkat harga masih kaku. Apa yang terjadi pada suku bunga nominal keseimbangan, dan mengapa?'
        },
        answer: [
          { en: 'With P sticky, the real money supply M/P rises — the vertical M/P line shifts right.',
            id: 'Dengan P kaku, penawaran uang riil M/P naik — garis vertikal M/P bergeser ke kanan.' },
          { en: 'At the old R there is now excess money; people use it to buy bonds, bond prices rise, so yields (R) fall until L(R,Y) again equals M/P.',
            id: 'Pada R lama kini ada kelebihan uang; orang memakainya untuk membeli obligasi, harga obligasi naik, sehingga imbal hasil (R) turun sampai L(R,Y) kembali sama dengan M/P.' },
          { en: 'Answer: R FALLS (the short-run liquidity effect).',
            id: 'Jawaban: R TURUN (efek likuiditas jangka pendek).' }
        ],
        tip: {
          en: 'Short run: money up ⇒ R down. Long run is the opposite (faster money growth ⇒ higher πᵉ ⇒ higher R via Fisher).',
          id: 'Jangka pendek: uang naik ⇒ R turun. Jangka panjang sebaliknya (pertumbuhan uang lebih cepat ⇒ πᵉ lebih tinggi ⇒ R lebih tinggi lewat Fisher).'
        }
      },
      {
        type: 'concept',
        q: {
          en: 'A student claims: "Because absolute PPP fails in the data, the whole PPP idea is useless." Evaluate this.',
          id: 'Seorang mahasiswa mengklaim: "Karena PPP absolut gagal dalam data, seluruh ide PPP tidak berguna." Evaluasilah.'
        },
        answer: [
          { en: 'Absolute PPP (E = P/P*) does fail at short horizons because of nontradables, trade barriers, transport costs, and imperfect competition — the real exchange rate q is not constant at 1.',
            id: 'PPP absolut (E = P/P*) memang gagal dalam horizon pendek karena barang non-tradable, hambatan perdagangan, biaya transportasi, dan persaingan tidak sempurna — nilai tukar riil q tidak konstan di 1.' },
          { en: 'But relative PPP (%ΔE = π − π*) has decent long-run empirical support: over years, the high-inflation currency does depreciate roughly by the inflation gap.',
            id: 'Tetapi PPP relatif (%ΔE = π − π*) punya dukungan empiris jangka panjang yang lumayan: selama bertahun-tahun, mata uang berinflasi tinggi memang terdepresiasi kira-kira sebesar selisih inflasi.' },
          { en: 'Answer: the claim is too strong. PPP is a long-run benchmark, not a daily predictor; relative PPP remains a useful guide.',
            id: 'Jawaban: klaim itu terlalu kuat. PPP adalah patokan jangka panjang, bukan prediktor harian; PPP relatif tetap panduan yang berguna.' }
        ],
        tip: {
          en: 'Distinguish ABSOLUTE PPP (level) from RELATIVE PPP (change). The level fails; the change holds far better over the long run.',
          id: 'Bedakan PPP ABSOLUT (tingkat) dari PPP RELATIF (perubahan). Tingkatnya gagal; perubahannya jauh lebih bertahan dalam jangka panjang.'
        }
      },
      {
        type: 'quant',
        q: {
          en: 'A basket of goods costs Rp 1,500,000 in Indonesia and $100 in the United States. Using ABSOLUTE PPP, what is the implied exchange rate E (rupiah per dollar)?',
          id: 'Satu keranjang barang berharga Rp 1.500.000 di Indonesia dan $100 di Amerika Serikat. Memakai PPP ABSOLUT, berapa nilai tukar tersirat E (rupiah per dolar)?'
        },
        context: {
          en: 'E is quoted as the home (rupiah) price of one unit of foreign currency (the dollar).',
          id: 'E dikutip sebagai harga domestik (rupiah) untuk satu unit mata uang asing (dolar).'
        },
        answer: [
          { en: 'Absolute PPP: E = P / P*, with P the rupiah basket price and P* the dollar basket price.',
            id: 'PPP absolut: E = P / P*, dengan P harga keranjang rupiah dan P* harga keranjang dolar.' },
          { en: 'E = Rp 1,500,000 ÷ $100 = Rp 15,000 per $1.',
            id: 'E = Rp 1.500.000 ÷ $100 = Rp 15.000 per $1.' },
          { en: 'Answer: E = Rp 15,000/$ — at this rate the basket costs the same in both currencies (15,000 × 100 = 1,500,000).',
            id: 'Jawaban: E = Rp 15.000/$ — pada kurs ini keranjang berharga sama di kedua mata uang (15.000 × 100 = 1.500.000).' }
        ],
        tip: {
          en: 'Check: convert one price into the other currency at E and confirm they match. $100 × 15,000 = Rp 1,500,000. ✓',
          id: 'Cek: konversikan satu harga ke mata uang lain pada E dan pastikan cocok. $100 × 15.000 = Rp 1.500.000. ✓'
        }
      },
      {
        type: 'quant',
        q: {
          en: 'Indonesian inflation is expected to be 5% next year while U.S. inflation is 2%. Using RELATIVE PPP, by how much does the rupiah depreciate against the dollar, and in which direction does E move?',
          id: 'Inflasi Indonesia diperkirakan 5% tahun depan sedangkan inflasi AS 2%. Memakai PPP RELATIF, berapa besar rupiah terdepresiasi terhadap dolar, dan ke arah mana E bergerak?'
        },
        answer: [
          { en: 'Relative PPP: %ΔE = π − π*, with π = home (Indonesian) inflation and π* = foreign (U.S.) inflation, and E = rupiah per dollar.',
            id: 'PPP relatif: %ΔE = π − π*, dengan π = inflasi domestik (Indonesia) dan π* = inflasi asing (AS), dan E = rupiah per dolar.' },
          { en: '%ΔE = 5% − 2% = +3%.',
            id: '%ΔE = 5% − 2% = +3%.' },
          { en: 'A positive %ΔE means more rupiah are needed per dollar — the rupiah DEPRECIATES by about 3% over the year.',
            id: '%ΔE positif berarti lebih banyak rupiah dibutuhkan per dolar — rupiah TERDEPRESIASI sekitar 3% selama tahun itu.' },
          { en: 'Answer: E rises ~3%; e.g. from Rp 15,000/$ to roughly Rp 15,450/$.',
            id: 'Jawaban: E naik ~3%; mis. dari Rp 15.000/$ menjadi sekitar Rp 15.450/$.' }
        ],
        tip: {
          en: 'The higher-inflation currency depreciates. Indonesia inflates faster, so the rupiah weakens by the inflation gap.',
          id: 'Mata uang berinflasi lebih tinggi terdepresiasi. Indonesia berinflasi lebih cepat, jadi rupiah melemah sebesar selisih inflasi.'
        }
      },
      {
        type: 'quant',
        q: {
          en: 'Bank Indonesia\'s policy rate is R = 6%. Households expect inflation of πᵉ = 2.5% next year. Using the Fisher effect, what is the implied real interest rate r? If expected inflation jumps to 4% with r unchanged, what is the new R?',
          id: 'Suku bunga acuan Bank Indonesia R = 6%. Rumah tangga memperkirakan inflasi πᵉ = 2,5% tahun depan. Memakai efek Fisher, berapa suku bunga riil tersirat r? Jika inflasi yang diharapkan melonjak ke 4% dengan r tetap, berapa R yang baru?'
        },
        answer: [
          { en: 'Fisher effect: R = r + πᵉ, so r = R − πᵉ = 6% − 2.5% = 3.5%.',
            id: 'Efek Fisher: R = r + πᵉ, jadi r = R − πᵉ = 6% − 2,5% = 3,5%.' },
          { en: 'With r held at 3.5% and πᵉ rising to 4%, the new nominal rate is R = r + πᵉ = 3.5% + 4% = 7.5%.',
            id: 'Dengan r tetap 3,5% dan πᵉ naik ke 4%, suku bunga nominal baru adalah R = r + πᵉ = 3,5% + 4% = 7,5%.' },
          { en: 'Answer: r = 3.5%; the new R = 7.5% (the +1.5% rise in expected inflation passes one-for-one into R).',
            id: 'Jawaban: r = 3,5%; R baru = 7,5% (kenaikan +1,5% inflasi yang diharapkan diteruskan satu-untuk-satu ke R).' }
        ],
        tip: {
          en: 'Fisher is one-for-one: every extra point of expected inflation adds a point to the nominal rate, leaving the real rate unchanged.',
          id: 'Fisher bersifat satu-untuk-satu: setiap tambahan poin inflasi yang diharapkan menambah satu poin pada suku bunga nominal, membiarkan suku bunga riil tetap.'
        }
      },
      {
        type: 'scenario',
        q: {
          en: 'A country permanently raises its money-supply growth rate. Trace the long-run effects on the price level, the nominal interest rate, and the exchange rate (home currency per dollar), using the monetary approach and the Fisher effect.',
          id: 'Sebuah negara secara permanen menaikkan laju pertumbuhan jumlah uangnya. Telusuri efek jangka panjang pada tingkat harga, suku bunga nominal, dan nilai tukar (mata uang domestik per dolar), memakai pendekatan moneter dan efek Fisher.'
        },
        answer: [
          { en: 'Faster permanent money growth raises long-run inflation π (quantity theory: π ≈ %ΔM − %ΔY), so the price level P rises faster.',
            id: 'Pertumbuhan uang permanen yang lebih cepat menaikkan inflasi jangka panjang π (teori kuantitas: π ≈ %ΔM − %ΔY), sehingga tingkat harga P naik lebih cepat.' },
          { en: 'Higher expected inflation πᵉ raises the nominal rate via Fisher: R = r + πᵉ ⇒ R RISES (not falls — this is the long run, not the short-run liquidity effect).',
            id: 'Inflasi yang diharapkan πᵉ lebih tinggi menaikkan suku bunga nominal lewat Fisher: R = r + πᵉ ⇒ R NAIK (bukan turun — ini jangka panjang, bukan efek likuiditas jangka pendek).' },
          { en: 'Via absolute PPP, E = P/P*; with P rising faster than P*, the home currency DEPRECIATES (E rises) — and by relative PPP it depreciates at the inflation differential.',
            id: 'Lewat PPP absolut, E = P/P*; dengan P naik lebih cepat dari P*, mata uang domestik TERDEPRESIASI (E naik) — dan menurut PPP relatif terdepresiasi sebesar selisih inflasi.' },
          { en: 'Answer: P ↑ (faster), R ↑, E ↑ (currency depreciates).',
            id: 'Jawaban: P ↑ (lebih cepat), R ↑, E ↑ (mata uang terdepresiasi).' }
        ],
        tip: {
          en: 'Permanent money GROWTH (a rate) raises R through expected inflation; a one-off money LEVEL increase in the short run lowers R. Identify which the question means.',
          id: 'PERTUMBUHAN uang permanen (laju) menaikkan R lewat inflasi yang diharapkan; kenaikan TINGKAT uang sekali jalan dalam jangka pendek menurunkan R. Kenali yang dimaksud soal.'
        }
      }
    ]
  };
})();
