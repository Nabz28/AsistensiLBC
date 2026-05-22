/* ============================================================================
   EKINTER · Meeting 8 — Trade Policy I: Tariffs & Export Subsidies
   Bilingual (EN + ID). Registers itself on window.EKINTER_WEEKS.m8.
   Sources: lecturer deck (krisna.or.id/intecon/meeting8) + KOM ch.9–12, FT ch.8,10.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   Charts use window.EconChart — equilibria are COMPUTED from the line equations,
   so the welfare regions a/b/c/d are correct by construction.

   TARIFF WELFARE GEOMETRY (shared across charts), axes Q∈[0,10], P∈[0,10]:
     Demand   D : P = 10 − Q   (p1=[1,9], p2=[9,1])
     Supply   S : P = Q        (p1=[1,1], p2=[9,9])
     World price  Pw = 3  →  S∩Pw at Q=3 (S₁), D∩Pw at Q=7 (D₁); imports = 4
     Tariff price Pt = 4  →  S∩Pt at Q=4 (S₂), D∩Pt at Q=6 (D₂); imports = 2
   Regions:
     a (producer-surplus gain)  [[0,3],[0,4],[4,4],[3,3]]            area 3.5
     b (DWL — production)       [[3,3],[4,4],[4,3]]                  area 0.5
     c (government revenue)     [[4,3],[4,4],[6,4],[6,3]]            area 2.0
     d (DWL — consumption)      [[6,4],[7,3],[6,3]]                  area 0.5
   ⇒ CS loss = a+b+c+d = 6.5 ; PS gain = a = 3.5 ; revenue = c = 2.0 ;
     small-country net loss = b+d = 1.0.
   ============================================================================ */
(function () {
  window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16';
  var LOSS = 'rgba(192,57,43,.16)';   // deadweight loss (red)
  var GAIN = 'rgba(14,143,184,.16)';  // producer surplus gain (teal)
  var REV  = 'rgba(217,138,22,.20)';  // government revenue (amber)
  var TOT  = 'rgba(21,128,61,.18)';   // terms-of-trade gain (green)

  // ---- Chart 1: small-country tariff welfare diagram (the key chart) --------
  var SMALL = { panels: [{
    title: 'Small country — a (PS), b·d (DWL), c (revenue)',
    w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'D' },
      { id: 'S', kind: 'line', p1: [1, 1], p2: [9, 9], color: TEAL, label: 'S' },
      { id: 'Pw', kind: 'hline', y: 3, color: LINE, label: 'P_w' },
      { id: 'Pt', kind: 'hline', y: 4, color: AMBER, label: 'P_t = P_w + t' }
    ],
    areas: [
      { pts: [[0, 3], [0, 4], [4, 4], [3, 3]], fill: GAIN, label: 'a' },
      { pts: [[3, 3], [4, 4], [4, 3]],          fill: LOSS, label: 'b' },
      { pts: [[4, 3], [4, 4], [6, 4], [6, 3]],  fill: REV,  label: 'c' },
      { pts: [[6, 4], [7, 3], [6, 3]],          fill: LOSS, label: 'd' }
    ],
    points: [
      { on: ['S', 'Pw'], guideX: 'S₁', dot: true },
      { on: ['D', 'Pw'], guideX: 'D₁', dot: true },
      { on: ['S', 'Pt'], guideX: 'S₂', dot: true },
      { on: ['D', 'Pt'], guideX: 'D₂', dot: true }
    ],
    notes: [
      { x: 5.0, y: 2.5, text: 'imports after tariff = S₂→D₂', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  // ---- Chart 2: large-country tariff (terms-of-trade fall in P_w) -----------
  // World price falls Pw=3 → Pw'=2.5; tariff price Pt=4 stays the consumer price.
  // Domestic S∩Pt at Q=4, D∩Pt at Q=6 (imports=2). Revenue rectangle now spans
  // the FULL wedge Pt(4) down to Pw'(2.5): c (paid by home buyers, 3→4) + e
  // (terms-of-trade gain extracted from foreigners, 2.5→3) over imports 4→6.
  var LARGE = { panels: [{
    title: 'Large country — e = terms-of-trade gain (vs DWL b+d)',
    w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'D' },
      { id: 'S', kind: 'line', p1: [1, 1], p2: [9, 9], color: TEAL, label: 'S' },
      { id: 'Pw', kind: 'hline', y: 3, color: '#999', label: 'P_w (pre)' },
      { id: 'Pw2', kind: 'hline', y: 2.5, color: LINE, label: "P_w' (post)" },
      { id: 'Pt', kind: 'hline', y: 4, color: AMBER, label: 'P_t' }
    ],
    areas: [
      { pts: [[3, 3], [4, 4], [4, 3]],          fill: LOSS, label: 'b' },
      { pts: [[6, 4], [7, 3], [6, 3]],          fill: LOSS, label: 'd' },
      { pts: [[4, 2.5], [4, 3], [6, 3], [6, 2.5]], fill: TOT, label: 'e' }
    ],
    points: [
      { on: ['S', 'Pt'], guideX: 'S₂', dot: true },
      { on: ['D', 'Pt'], guideX: 'D₂', dot: true }
    ],
    notes: [
      { x: 8.4, y: 3.5, text: 'tariff t = Pt − Pw′', color: AMBER, anchor: 'middle', size: 10 },
      { x: 5.0, y: 1.6, text: "world price falls Pw → Pw′", color: '#15803d', anchor: 'middle', size: 10 }
    ]
  }] };

  // ---- Chart 3: export-subsidy welfare diagram ------------------------------
  // Subsidy s on exports raises the HOME price above the world price: Pdom = Pw + s.
  // Home D = 10−Q, S = Q. World price Pw=4 (exporter, so Pw above autarky? — here
  // home is a low-cost exporter: at Pw=4, Qs=4 > Qd=6? No: exporter has Qs>Qd.)
  // Use exporter geometry: S below D crossing low. World price Pw=6 → Qs=6, Qd=4,
  // exports = 2. Subsidy lifts home price to Ps=7 → Qs=7, Qd=3, exports = 4.
  // CS loss a+b (3→4 on D); PS gain a+b+c (4→3.. up to S); gov cost b+c+d+e.
  var SUBSIDY = { panels: [{
    title: 'Export subsidy — CS loss (a+b), PS gain (a+b+c), gov cost',
    w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'D' },
      { id: 'S', kind: 'line', p1: [1, 1], p2: [9, 9], color: TEAL, label: 'S' },
      { id: 'Pw', kind: 'hline', y: 6, color: LINE, label: 'P_w' },
      { id: 'Ps', kind: 'hline', y: 7, color: AMBER, label: 'P_w + s' }
    ],
    areas: [
      // consumer-surplus loss a+b : between Pw and Ps, left of demand (Qd 3→4)
      { pts: [[0, 6], [0, 7], [3, 7], [4, 6]], fill: LOSS, label: 'a+b' },
      // producer-surplus gain a+b+c : between Pw and Ps, left of supply (Qs 6→7)
      { pts: [[0, 6], [0, 7], [7, 7], [6, 6]], fill: GAIN, label: 'a+b+c' }
    ],
    points: [
      { on: ['D', 'Pw'], guideX: 'Dᵂ', dot: true },
      { on: ['S', 'Pw'], guideX: 'Sᵂ', dot: true },
      { on: ['D', 'Ps'], guideX: 'Dˢ', dot: true },
      { on: ['S', 'Ps'], guideX: 'Sˢ', dot: true }
    ],
    notes: [
      { x: 5.0, y: 8.6, text: 'gov cost = s × exports (Sˢ − Dˢ)', color: AMBER, anchor: 'middle', size: 10 }
    ]
  }] };

  window.EKINTER_WEEKS.m8 = {
    id: 'm8',
    label: { en: 'Meeting 8', id: 'Pertemuan 8' },
    title: {
      en: 'Trade Policy I: Tariffs & Export Subsidies',
      id: 'Kebijakan Perdagangan I: Tarif & Subsidi Ekspor'
    },
    subtitle: {
      en: 'How an import tariff moves price, quantity and imports — and the welfare arithmetic of consumer loss, producer gain, government revenue and deadweight loss, for a small country and for a large one (terms of trade, optimal tariff), plus the export subsidy and the US–China trade war.',
      id: 'Bagaimana tarif impor menggerakkan harga, kuantitas, dan impor — serta aritmetika kesejahteraan dari kerugian konsumen, keuntungan produsen, penerimaan pemerintah, dan kerugian bobot mati, untuk negara kecil dan negara besar (nilai tukar perdagangan, tarif optimal), ditambah subsidi ekspor dan perang dagang AS–Tiongkok.'
    },

    /* =====================================================================
       NOTES
       ===================================================================== */
    notes: [
      {
        heading: { en: 'Setting the scene: what trade policy is', id: 'Latar: apa itu kebijakan perdagangan' },
        num: '1',
        cards: [
          {
            title: { en: 'Tariffs, the most basic instrument', id: 'Tarif, instrumen paling mendasar' },
            html: {
              en: `<p>A <span class="key">tariff</span> is a tax a government charges on imports. It is the oldest and most basic way to restrict trade — originally a way to raise <span class="key">revenue</span>, today mostly used to <span class="key">protect</span> domestic producers from foreign competition.</p>
<p>Two forms appear on the exam:</p>
<ul>
<li><span class="key">Specific tariff</span> — a fixed charge per unit (e.g. \\$3 per barrel of oil).</li>
<li><span class="key">Ad valorem tariff</span> — a percentage of the import's value (e.g. 25% of the car price).</li>
</ul>
<p>We analyse a tariff in <span class="key">partial equilibrium</span>: one market, domestic demand $D$ and supply $S$, and a given <span class="key">world price $P_w$</span>. Everything turns on one question — <em>does this country's policy move the world price?</em></p>
<div class="note">A country is <span class="key">"small"</span> when its trade is too small to move $P_w$; it is <span class="key">"large"</span> when its imports are big enough that buying less abroad pushes $P_w$ down. Size is about <em>market impact</em>, not geography: Indonesia is small in most goods but large in palm oil and some minerals.</div>`,
              id: `<p><span class="key">Tarif</span> adalah pajak yang dikenakan pemerintah atas impor. Ia cara tertua dan paling mendasar untuk membatasi perdagangan — semula untuk menghimpun <span class="key">penerimaan</span>, kini umumnya untuk <span class="key">melindungi</span> produsen domestik dari persaingan asing.</p>
<p>Dua bentuk yang muncul di ujian:</p>
<ul>
<li><span class="key">Tarif spesifik</span> — pungutan tetap per unit (mis. \\$3 per barel minyak).</li>
<li><span class="key">Tarif ad valorem</span> — persentase dari nilai impor (mis. 25% dari harga mobil).</li>
</ul>
<p>Kita menganalisis tarif dalam <span class="key">keseimbangan parsial</span>: satu pasar, permintaan $D$ dan penawaran $S$ domestik, serta <span class="key">harga dunia $P_w$</span> tertentu. Semuanya bergantung pada satu pertanyaan — <em>apakah kebijakan negara ini menggerakkan harga dunia?</em></p>
<div class="note">Sebuah negara <span class="key">"kecil"</span> bila perdagangannya terlalu kecil untuk menggerakkan $P_w$; ia <span class="key">"besar"</span> bila impornya cukup besar sehingga mengurangi pembelian dari luar negeri menekan $P_w$ turun. Ukuran soal <em>dampak pasar</em>, bukan geografi: Indonesia kecil di sebagian besar barang tetapi besar di minyak sawit dan beberapa mineral.</div>`
            }
          },
          {
            title: { en: 'Free-trade starting point', id: 'Titik awal perdagangan bebas' },
            html: {
              en: `<p>Before any tariff, a small importing country faces a flat world price $P_w$ below its no-trade price. At $P_w$:</p>
<ul>
<li>domestic <span class="key">supply</span> is $S_1$ (where $S$ meets $P_w$),</li>
<li>domestic <span class="key">demand</span> is $D_1$ (where $D$ meets $P_w$),</li>
<li><span class="key">imports</span> fill the gap: $M_1 = D_1 - S_1$.</li>
</ul>
<p>Consumers enjoy the low world price; the rest is imported. A tariff changes this by driving a <span class="key">wedge</span> between the world price and the price domestic buyers and sellers face.</p>`,
              id: `<p>Sebelum ada tarif, negara pengimpor kecil menghadapi harga dunia $P_w$ yang datar dan di bawah harga tanpa-perdagangannya. Pada $P_w$:</p>
<ul>
<li><span class="key">penawaran</span> domestik adalah $S_1$ (titik $S$ memotong $P_w$),</li>
<li><span class="key">permintaan</span> domestik adalah $D_1$ (titik $D$ memotong $P_w$),</li>
<li><span class="key">impor</span> mengisi selisihnya: $M_1 = D_1 - S_1$.</li>
</ul>
<p>Konsumen menikmati harga dunia yang rendah; sisanya diimpor. Tarif mengubahnya dengan menyisipkan <span class="key">baji (wedge)</span> antara harga dunia dan harga yang dihadapi pembeli serta penjual domestik.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'The small-country tariff', id: 'Tarif untuk negara kecil' },
        num: '2',
        cards: [
          {
            title: { en: 'Price up, supply up, demand down, imports down', id: 'Harga naik, penawaran naik, permintaan turun, impor turun' },
            html: {
              en: `<p>A small country cannot move $P_w$, so a specific tariff $t$ raises the <span class="key">domestic</span> price by the full amount of the tariff:</p>
<div class="formula">$$P_t = P_w + t$$</div>
<p>At the higher price $P_t$ four things happen, all reading off the same diagram:</p>
<ol>
<li>Domestic <span class="key">supply rises</span> $S_1 \\to S_2$ (producers move up their supply curve).</li>
<li>Domestic <span class="key">demand falls</span> $D_1 \\to D_2$ (consumers move up their demand curve).</li>
<li><span class="key">Imports shrink</span> from both sides: $M_2 = D_2 - S_2 < M_1$.</li>
<li>The government collects <span class="key">tariff revenue</span> $t \\times M_2$ on the remaining imports.</li>
</ol>
<div class="tip">Exam habit: write the chain "$P_t = P_w + t \\Rightarrow S\\!\\uparrow,\\ D\\!\\downarrow \\Rightarrow M\\!\\downarrow$" before you shade a single area. The four quantities $S_1,D_1,S_2,D_2$ are the corners of every welfare region.</div>`,
              id: `<p>Negara kecil tak bisa menggerakkan $P_w$, sehingga tarif spesifik $t$ menaikkan harga <span class="key">domestik</span> sebesar penuh tarif itu:</p>
<div class="formula">$$P_t = P_w + t$$</div>
<p>Pada harga lebih tinggi $P_t$ ada empat hal yang terjadi, semuanya terbaca dari diagram yang sama:</p>
<ol>
<li><span class="key">Penawaran</span> domestik <span class="key">naik</span> $S_1 \\to S_2$ (produsen bergerak naik di kurva penawaran).</li>
<li><span class="key">Permintaan</span> domestik <span class="key">turun</span> $D_1 \\to D_2$ (konsumen bergerak naik di kurva permintaan).</li>
<li><span class="key">Impor menyusut</span> dari dua sisi: $M_2 = D_2 - S_2 < M_1$.</li>
<li>Pemerintah memungut <span class="key">penerimaan tarif</span> $t \\times M_2$ atas impor yang tersisa.</li>
</ol>
<div class="tip">Kebiasaan ujian: tulis rantai "$P_t = P_w + t \\Rightarrow S\\!\\uparrow,\\ D\\!\\downarrow \\Rightarrow M\\!\\downarrow$" sebelum mengarsir satu area pun. Empat kuantitas $S_1,D_1,S_2,D_2$ adalah sudut-sudut tiap region kesejahteraan.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Welfare areas: a, b, c, d', id: 'Area kesejahteraan: a, b, c, d' },
        num: '3',
        cards: [
          {
            title: { en: 'Who wins, who loses, and the leakage', id: 'Siapa untung, siapa rugi, dan kebocorannya' },
            html: {
              en: `<p>The price rise $P_w \\to P_t$ carves the diagram into four labelled regions. Read them straight off the chart below.</p>
<table>
<thead><tr><th>Region</th><th>Who</th><th>Sign</th><th>What it is</th></tr></thead>
<tbody>
<tr><td><span class="key">a</span></td><td>Producers</td><td>+ gain</td><td>Producer-surplus gain (higher price on home output)</td></tr>
<tr><td><span class="key">b</span></td><td>Society</td><td>− loss</td><td>Deadweight loss — <em>production</em> distortion (high-cost home output replaces cheap imports)</td></tr>
<tr><td><span class="key">c</span></td><td>Government</td><td>+ transfer</td><td>Tariff revenue $= t \\times M_2$</td></tr>
<tr><td><span class="key">d</span></td><td>Society</td><td>− loss</td><td>Deadweight loss — <em>consumption</em> distortion (buyers priced out of valued units)</td></tr>
</tbody>
</table>
<p>Consumers lose the whole block $a+b+c+d$. Of that loss, $a$ is <span class="key">transferred</span> to producers and $c$ is <span class="key">transferred</span> to the government — these are redistributions, not waste. Only $b+d$ leaves the economy entirely:</p>
<div class="formula">$$\\Delta CS = -(a+b+c+d), \\quad \\Delta PS = +a, \\quad \\Delta Gov = +c$$</div>
<div class="formula">$$\\text{Net welfare} = a + c - (a+b+c+d) = -(b+d)$$</div>
<div class="note">For a <span class="key">small</span> country the net effect of a tariff is <em>always</em> a loss equal to the two deadweight-loss triangles $b+d$. There is no offsetting gain because the world price never moved.</div>`,
              id: `<p>Kenaikan harga $P_w \\to P_t$ membagi diagram menjadi empat region berlabel. Baca langsung dari grafik di bawah.</p>
<table>
<thead><tr><th>Region</th><th>Siapa</th><th>Tanda</th><th>Apa itu</th></tr></thead>
<tbody>
<tr><td><span class="key">a</span></td><td>Produsen</td><td>+ untung</td><td>Tambahan surplus produsen (harga lebih tinggi untuk produksi domestik)</td></tr>
<tr><td><span class="key">b</span></td><td>Masyarakat</td><td>− rugi</td><td>Kerugian bobot mati — distorsi <em>produksi</em> (produksi domestik mahal menggantikan impor murah)</td></tr>
<tr><td><span class="key">c</span></td><td>Pemerintah</td><td>+ transfer</td><td>Penerimaan tarif $= t \\times M_2$</td></tr>
<tr><td><span class="key">d</span></td><td>Masyarakat</td><td>− rugi</td><td>Kerugian bobot mati — distorsi <em>konsumsi</em> (pembeli tersingkir dari unit yang bernilai)</td></tr>
</tbody>
</table>
<p>Konsumen kehilangan seluruh blok $a+b+c+d$. Dari kerugian itu, $a$ <span class="key">ditransfer</span> ke produsen dan $c$ <span class="key">ditransfer</span> ke pemerintah — ini redistribusi, bukan pemborosan. Hanya $b+d$ yang benar-benar hilang dari perekonomian:</p>
<div class="formula">$$\\Delta CS = -(a+b+c+d), \\quad \\Delta PS = +a, \\quad \\Delta Gov = +c$$</div>
<div class="formula">$$\\text{Kesejahteraan neto} = a + c - (a+b+c+d) = -(b+d)$$</div>
<div class="note">Untuk negara <span class="key">kecil</span>, efek neto tarif <em>selalu</em> kerugian sebesar dua segitiga kerugian bobot mati $b+d$. Tidak ada keuntungan penyeimbang karena harga dunia tak pernah bergerak.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The large-country tariff & the optimal tariff', id: 'Tarif negara besar & tarif optimal' },
        num: '4',
        cards: [
          {
            title: { en: 'Terms-of-trade gain: pushing P_w down on foreigners', id: 'Keuntungan nilai tukar perdagangan: menekan P_w ke pihak asing' },
            html: {
              en: `<p>A <span class="key">large</span> country imports enough that, when its tariff cuts the quantity it buys, the <span class="key">world price falls</span> $P_w \\to P_w'$. Now part of the tariff is paid by <em>foreign exporters</em> through the lower price they receive — a <span class="key">terms-of-trade gain</span>.</p>
<p>The domestic price still rises (consumers face $P_t$), so the home losses $b$ and $d$ are still there. But the government's revenue rectangle now stretches all the way down to the new, lower world price. Split that rectangle in two:</p>
<ul>
<li><span class="key">c</span> — the part of revenue paid by <em>domestic</em> buyers (price $P_w' \\to P_t$). Still just a transfer within the country.</li>
<li><span class="key">e</span> — the part extracted from <em>foreigners</em> via the lower world price ($P_w' \\to P_w$ on imports). This is a <span class="key">genuine gain</span> to the home country.</li>
</ul>
<div class="formula">$$\\text{Net welfare (large)} = e - (b + d)$$</div>
<div class="note">If the terms-of-trade gain $e$ exceeds the deadweight losses $b+d$, the tariff makes the large country <span class="key">better off</span> — at the rest of the world's expense. The lecturer's rule: <em>"jika $b+d < e$, maka tarif bisa memberi net positive welfare."</em></div>`,
              id: `<p>Negara <span class="key">besar</span> mengimpor cukup banyak sehingga, saat tarifnya memangkas jumlah yang dibeli, <span class="key">harga dunia turun</span> $P_w \\to P_w'$. Kini sebagian tarif dibayar oleh <em>eksportir asing</em> melalui harga lebih rendah yang mereka terima — sebuah <span class="key">keuntungan nilai tukar perdagangan (terms of trade)</span>.</p>
<p>Harga domestik tetap naik (konsumen menghadapi $P_t$), jadi kerugian domestik $b$ dan $d$ tetap ada. Tetapi persegi penerimaan pemerintah kini membentang turun hingga harga dunia baru yang lebih rendah. Bagi persegi itu menjadi dua:</p>
<ul>
<li><span class="key">c</span> — bagian penerimaan yang dibayar pembeli <em>domestik</em> (harga $P_w' \\to P_t$). Tetap sekadar transfer di dalam negeri.</li>
<li><span class="key">e</span> — bagian yang ditarik dari <em>pihak asing</em> lewat harga dunia lebih rendah ($P_w' \\to P_w$ atas impor). Inilah <span class="key">keuntungan sejati</span> bagi negara domestik.</li>
</ul>
<div class="formula">$$\\text{Kesejahteraan neto (besar)} = e - (b + d)$$</div>
<div class="note">Bila keuntungan nilai tukar perdagangan $e$ melebihi kerugian bobot mati $b+d$, tarif membuat negara besar <span class="key">lebih sejahtera</span> — dengan mengorbankan negara lain. Aturan dosen: <em>"jika $b+d < e$, maka tarif bisa memberi net positive welfare."</em></div>`
            }
          },
          {
            title: { en: 'The optimal tariff and its limits', id: 'Tarif optimal dan batasnya' },
            html: {
              en: `<p>As the tariff rises from zero, the terms-of-trade gain $e$ grows quickly at first while the deadweight loss $b+d$ grows only slowly. So a <em>small</em> tariff is welfare-improving for a large country. There is therefore an <span class="key">optimal tariff $t^{*}$</span> that maximises national welfare — strictly positive but finite.</p>
<div class="formula">$$t^{*} \\propto \\frac{1}{\\varepsilon^{*}} \\qquad (\\varepsilon^{*} = \\text{foreign export-supply elasticity})$$</div>
<ul>
<li>The <span class="key">less elastic</span> the foreign supply ($\\varepsilon^{*}$ small), the more the world price falls when you cut purchases, so the <span class="key">higher</span> the optimal tariff.</li>
<li>For a <span class="key">small</span> country $\\varepsilon^{*} \\to \\infty$, so $t^{*} \\to 0$: free trade is optimal.</li>
</ul>
<div class="tip">Two big caveats: (1) the gain comes <em>at the expense of trading partners</em>, so it is "beggar-thy-neighbour"; (2) partners can <span class="key">retaliate</span>. If both large countries set tariffs, the terms-of-trade gains cancel and only the deadweight losses remain — a <span class="key">trade war</span> leaves everyone worse off. This is exactly the prisoner's-dilemma logic of the US–China case below.</div>`,
              id: `<p>Saat tarif naik dari nol, keuntungan nilai tukar perdagangan $e$ mula-mula tumbuh cepat sementara kerugian bobot mati $b+d$ tumbuh lambat. Maka tarif <em>kecil</em> meningkatkan kesejahteraan bagi negara besar. Karena itu ada <span class="key">tarif optimal $t^{*}$</span> yang memaksimalkan kesejahteraan nasional — positif tetapi terbatas (tidak tak hingga).</p>
<div class="formula">$$t^{*} \\propto \\frac{1}{\\varepsilon^{*}} \\qquad (\\varepsilon^{*} = \\text{elastisitas penawaran ekspor asing})$$</div>
<ul>
<li>Makin <span class="key">tidak elastis</span> penawaran asing ($\\varepsilon^{*}$ kecil), makin besar harga dunia turun saat pembelian dipangkas, jadi tarif optimal makin <span class="key">tinggi</span>.</li>
<li>Untuk negara <span class="key">kecil</span> $\\varepsilon^{*} \\to \\infty$, sehingga $t^{*} \\to 0$: perdagangan bebas optimal.</li>
</ul>
<div class="tip">Dua catatan besar: (1) keuntungan diperoleh <em>dengan mengorbankan mitra dagang</em>, jadi bersifat "memiskinkan tetangga" (beggar-thy-neighbour); (2) mitra bisa <span class="key">membalas</span>. Bila dua negara besar sama-sama memasang tarif, keuntungan nilai tukar perdagangan saling meniadakan dan hanya kerugian bobot mati yang tersisa — <span class="key">perang dagang</span> membuat semua pihak lebih buruk. Inilah persis logika dilema tahanan pada kasus AS–Tiongkok di bawah.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The export subsidy', id: 'Subsidi ekspor' },
        num: '5',
        cards: [
          {
            title: { en: 'A negative tariff — and it always loses', id: 'Tarif negatif — dan selalu merugi' },
            html: {
              en: `<p>An <span class="key">export subsidy</span> pays domestic firms $s$ per unit they ship abroad. Firms will only sell at home if the home price matches what they could earn exporting, so the <span class="key">domestic price rises</span> to $P_w + s$. It is the mirror image — a <span class="key">"negative tariff"</span> — yet, unlike a large-country tariff, it <em>never</em> helps.</p>
<p>For a small exporting country at world price $P_w$, raising the home price to $P_w+s$:</p>
<ul>
<li>Home <span class="key">consumers lose</span> (higher price): $\\Delta CS = -(a+b)$.</li>
<li>Home <span class="key">producers gain</span> (higher price, more output): $\\Delta PS = +(a+b+c)$.</li>
<li>The <span class="key">government pays</span> the subsidy on every exported unit: $\\Delta Gov = -(b+c+d+e+f+g)$ in the textbook labelling, i.e. $-s \\times \\text{exports}$.</li>
</ul>
<div class="formula">$$\\text{Net welfare} = (a+b+c) - (a+b) - (b+c+d+e+f+g) = -(b+d) - (\\text{ToT loss})$$</div>
<div class="note">An export subsidy creates the usual deadweight triangles <em>and</em>, for a large country, <span class="key">worsens the terms of trade</span> (you flood the world market, pushing $P_w$ down against yourself). So the loss is <em>bigger</em> than a tariff's — the subsidy is unambiguously welfare-reducing.</div>`,
              id: `<p><span class="key">Subsidi ekspor</span> membayar perusahaan domestik $s$ per unit yang dikirim ke luar negeri. Perusahaan hanya mau menjual di dalam negeri bila harga domestik menyamai yang bisa mereka peroleh dengan mengekspor, sehingga <span class="key">harga domestik naik</span> menjadi $P_w + s$. Ia bayangan cermin — <span class="key">"tarif negatif"</span> — namun, tidak seperti tarif negara besar, ia <em>tak pernah</em> menguntungkan.</p>
<p>Untuk negara pengekspor kecil pada harga dunia $P_w$, menaikkan harga domestik ke $P_w+s$:</p>
<ul>
<li><span class="key">Konsumen</span> domestik <span class="key">rugi</span> (harga lebih tinggi): $\\Delta CS = -(a+b)$.</li>
<li><span class="key">Produsen</span> domestik <span class="key">untung</span> (harga lebih tinggi, output lebih banyak): $\\Delta PS = +(a+b+c)$.</li>
<li><span class="key">Pemerintah membayar</span> subsidi atas tiap unit yang diekspor: $\\Delta Gov = -(b+c+d+e+f+g)$ dalam pelabelan buku teks, yaitu $-s \\times \\text{ekspor}$.</li>
</ul>
<div class="formula">$$\\text{Kesejahteraan neto} = (a+b+c) - (a+b) - (b+c+d+e+f+g) = -(b+d) - (\\text{rugi ToT})$$</div>
<div class="note">Subsidi ekspor menciptakan segitiga kerugian bobot mati seperti biasa <em>dan</em>, untuk negara besar, <span class="key">memperburuk nilai tukar perdagangan</span> (Anda membanjiri pasar dunia, menekan $P_w$ turun melawan diri sendiri). Jadi kerugiannya <em>lebih besar</em> daripada tarif — subsidi jelas-jelas menurunkan kesejahteraan.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Application: the US–China trade war', id: 'Penerapan: perang dagang AS–Tiongkok' },
        num: '6',
        cards: [
          {
            title: { en: 'Two large countries, retaliation, and who pays', id: 'Dua negara besar, pembalasan, dan siapa yang membayar' },
            html: {
              en: `<p>From 2018 the US imposed tariffs of up to 25% on hundreds of billions of dollars of Chinese goods; China <span class="key">retaliated</span> on US exports (notably soybeans). Both are large countries, so the model predicts each <em>might</em> capture a terms-of-trade gain $e$ acting alone.</p>
<ol>
<li>Acting unilaterally, a large US tariff could in principle win $e > b+d$ — a net gain extracted from Chinese exporters.</li>
<li>But China <span class="key">retaliates</span>. Retaliation erases the US terms-of-trade gain on the goods China taxes, and vice-versa.</li>
<li>With both tariffs in place, the terms-of-trade transfers roughly <span class="key">cancel</span>, leaving both economies with their deadweight-loss triangles $b+d$ — the classic <span class="key">trade-war (prisoner's-dilemma) outcome</span>.</li>
</ol>
<p>Empirical studies of the 2018–19 war found the <span class="key">tariff was passed through almost fully to US import prices</span> — i.e. US consumers and firms, not Chinese exporters, bore most of the burden, closer to the <em>small-country</em> result than the optimal-tariff dream.</p>
<div class="tip">Exam framing: "Is a tariff ever good?" → <em>Maybe</em>, for a large country acting alone (optimal tariff), but it is beggar-thy-neighbour and invites retaliation; once both sides tax, everyone loses $b+d$. Use the US–China war as the worked example.</div>`,
              id: `<p>Sejak 2018 AS mengenakan tarif hingga 25% atas barang Tiongkok senilai ratusan miliar dolar; Tiongkok <span class="key">membalas</span> atas ekspor AS (terutama kedelai). Keduanya negara besar, jadi model memperkirakan masing-masing <em>mungkin</em> meraih keuntungan nilai tukar perdagangan $e$ bila bertindak sendiri.</p>
<ol>
<li>Bertindak sepihak, tarif besar AS secara prinsip bisa memenangkan $e > b+d$ — keuntungan neto yang ditarik dari eksportir Tiongkok.</li>
<li>Tetapi Tiongkok <span class="key">membalas</span>. Pembalasan menghapus keuntungan nilai tukar perdagangan AS atas barang yang ditarifkan Tiongkok, demikian pula sebaliknya.</li>
<li>Dengan kedua tarif berlaku, transfer nilai tukar perdagangan kira-kira <span class="key">saling meniadakan</span>, menyisakan kedua perekonomian dengan segitiga kerugian bobot mati $b+d$ — <span class="key">hasil perang dagang (dilema tahanan)</span> yang klasik.</li>
</ol>
<p>Studi empiris perang 2018–19 menemukan <span class="key">tarif hampir sepenuhnya diteruskan ke harga impor AS</span> — yaitu konsumen dan perusahaan AS, bukan eksportir Tiongkok, yang menanggung sebagian besar beban, lebih dekat ke hasil <em>negara kecil</em> ketimbang impian tarif optimal.</p>
<div class="tip">Bingkai ujian: "Apakah tarif pernah baik?" → <em>Mungkin</em>, bagi negara besar yang bertindak sendiri (tarif optimal), tetapi ia memiskinkan tetangga dan mengundang pembalasan; begitu kedua pihak menarifkan, semua rugi $b+d$. Pakai perang AS–Tiongkok sebagai contoh terapan.</div>`
            }
          }
        ]
      }
    ],

    /* =====================================================================
       FORMULAS
       ===================================================================== */
    formulas: [
      {
        cards: [
          {
            title: { en: 'The tariff price wedge', id: 'Baji harga tarif' },
            html: {
              en: `<div class="formula">$$P_t = P_w + t \\qquad (\\text{small country})$$</div>
<p>A specific tariff $t$ raises the domestic price by the full tariff for a <span class="key">small</span> country (the world price $P_w$ does not move). For a <span class="key">large</span> country the world price falls to $P_w'$, so the domestic price rises by less than $t$:</p>
<div class="formula">$$P_t = P_w' + t, \\qquad P_w' < P_w$$</div>
<p><strong>Use it</strong> to locate the two price lines on the diagram, then read $S_2$, $D_2$ and imports $M_2 = D_2 - S_2$.</p>`,
              id: `<div class="formula">$$P_t = P_w + t \\qquad (\\text{negara kecil})$$</div>
<p>Tarif spesifik $t$ menaikkan harga domestik sebesar penuh tarif untuk negara <span class="key">kecil</span> (harga dunia $P_w$ tak bergerak). Untuk negara <span class="key">besar</span>, harga dunia turun ke $P_w'$, sehingga harga domestik naik kurang dari $t$:</p>
<div class="formula">$$P_t = P_w' + t, \\qquad P_w' < P_w$$</div>
<p><strong>Gunakan</strong> untuk menempatkan dua garis harga pada diagram, lalu baca $S_2$, $D_2$, dan impor $M_2 = D_2 - S_2$.</p>`
            }
          },
          {
            title: { en: 'Welfare-change pieces', id: 'Komponen perubahan kesejahteraan' },
            html: {
              en: `<div class="formula">$$\\Delta CS = -(a+b+c+d), \\quad \\Delta PS = +a, \\quad \\Delta Gov = +c$$</div>
<p>The price rise transfers $a$ to producers and $c$ to the government; the two triangles $b$ and $d$ are pure waste. Each is a simple area:</p>
<div class="formula">$$c = t \\times M_2, \\qquad b = \\tfrac{1}{2}\\,t\\,(S_2 - S_1), \\qquad d = \\tfrac{1}{2}\\,t\\,(D_1 - D_2)$$</div>
<p><strong>Use it</strong> for the quantitative welfare problems: compute the four quantities, then plug into these area formulas.</p>`,
              id: `<div class="formula">$$\\Delta CS = -(a+b+c+d), \\quad \\Delta PS = +a, \\quad \\Delta Gov = +c$$</div>
<p>Kenaikan harga mentransfer $a$ ke produsen dan $c$ ke pemerintah; dua segitiga $b$ dan $d$ adalah pemborosan murni. Masing-masing area sederhana:</p>
<div class="formula">$$c = t \\times M_2, \\qquad b = \\tfrac{1}{2}\\,t\\,(S_2 - S_1), \\qquad d = \\tfrac{1}{2}\\,t\\,(D_1 - D_2)$$</div>
<p><strong>Gunakan</strong> untuk soal kesejahteraan kuantitatif: hitung empat kuantitas, lalu masukkan ke rumus area ini.</p>`
            }
          },
          {
            title: { en: 'Net welfare: small vs large country', id: 'Kesejahteraan neto: negara kecil vs besar' },
            html: {
              en: `<div class="formula">$$\\text{Small: } \\Delta W = -(b+d) < 0$$</div>
<div class="formula">$$\\text{Large: } \\Delta W = \\underbrace{e}_{\\text{ToT gain}} - \\underbrace{(b+d)}_{\\text{DWL}}$$</div>
<p>The terms-of-trade gain $e$ is the part of revenue paid by foreigners through the lower world price. A small country has $e = 0$, so it always loses. A large country gains iff $e > b+d$.</p>
<p><strong>Use it</strong> to answer "can a tariff raise welfare?": only for a large country, and only up to the optimal tariff.</p>`,
              id: `<div class="formula">$$\\text{Kecil: } \\Delta W = -(b+d) < 0$$</div>
<div class="formula">$$\\text{Besar: } \\Delta W = \\underbrace{e}_{\\text{untung ToT}} - \\underbrace{(b+d)}_{\\text{DWL}}$$</div>
<p>Keuntungan nilai tukar perdagangan $e$ adalah bagian penerimaan yang dibayar pihak asing melalui harga dunia lebih rendah. Negara kecil punya $e = 0$, jadi selalu rugi. Negara besar untung jika dan hanya jika $e > b+d$.</p>
<p><strong>Gunakan</strong> untuk menjawab "bisakah tarif menaikkan kesejahteraan?": hanya untuk negara besar, dan hanya hingga tarif optimal.</p>`
            }
          },
          {
            title: { en: 'Optimal tariff & export subsidy', id: 'Tarif optimal & subsidi ekspor' },
            html: {
              en: `<div class="formula">$$t^{*} \\propto \\frac{1}{\\varepsilon^{*}}, \\qquad \\text{export subsidy: } \\Delta W = -(b+d) - (\\text{ToT loss}) < 0$$</div>
<p>The optimal tariff is inversely related to the foreign export-supply elasticity $\\varepsilon^{*}$: inelastic foreign supply ⇒ big world-price drop ⇒ high $t^{*}$. As $\\varepsilon^{*}\\to\\infty$ (small country) $t^{*}\\to 0$.</p>
<p>An export subsidy raises the home price to $P_w + s$, generates deadweight triangles, and for a large country <em>worsens</em> the terms of trade — so it is always a net loss.</p>
<div class="note">Tariff: domestic price up, terms of trade may improve. Export subsidy: domestic price up, terms of trade <em>worsen</em>. That asymmetry is why subsidies never pay.</div>`,
              id: `<div class="formula">$$t^{*} \\propto \\frac{1}{\\varepsilon^{*}}, \\qquad \\text{subsidi ekspor: } \\Delta W = -(b+d) - (\\text{rugi ToT}) < 0$$</div>
<p>Tarif optimal berbanding terbalik dengan elastisitas penawaran ekspor asing $\\varepsilon^{*}$: penawaran asing inelastis ⇒ harga dunia turun besar ⇒ $t^{*}$ tinggi. Saat $\\varepsilon^{*}\\to\\infty$ (negara kecil) $t^{*}\\to 0$.</p>
<p>Subsidi ekspor menaikkan harga domestik ke $P_w + s$, menimbulkan segitiga bobot mati, dan untuk negara besar <em>memperburuk</em> nilai tukar perdagangan — jadi selalu rugi neto.</p>
<div class="note">Tarif: harga domestik naik, nilai tukar perdagangan bisa membaik. Subsidi ekspor: harga domestik naik, nilai tukar perdagangan <em>memburuk</em>. Asimetri itulah sebabnya subsidi tak pernah menguntungkan.</div>`
            }
          }
        ]
      }
    ],

    /* =====================================================================
       GRAPHS  (EconChart — computed equilibria, shaded welfare regions)
       ===================================================================== */
    graphs: [
      {
        heading: { en: 'Exam graphs — tariffs & the export subsidy', id: 'Grafik ujian — tarif & subsidi ekspor' },
        num: 'G',
        cards: [
          {
            title: { en: 'Small-country tariff — the welfare diagram', id: 'Tarif negara kecil — diagram kesejahteraan' },
            html: {
              en: `<p><span class="key">The key chart.</span> The tariff lifts the domestic price from $P_w$ to $P_t = P_w + t$. Domestic supply rises $S_1\\to S_2$, demand falls $D_1\\to D_2$, imports shrink. Read the four regions:</p>
<ul>
<li><span class="key">a</span> (teal) — producer-surplus gain, transferred from consumers.</li>
<li><span class="key">b</span>, <span class="key">d</span> (red) — the two deadweight-loss triangles (production + consumption).</li>
<li><span class="key">c</span> (amber) — government tariff revenue $= t \\times M_2$.</li>
</ul>
<p>Consumers lose $a+b+c+d$; $a$ and $c$ are transfers; the <span class="key">net loss is $b+d$</span>.</p>`,
              id: `<p><span class="key">Grafik kunci.</span> Tarif menaikkan harga domestik dari $P_w$ ke $P_t = P_w + t$. Penawaran domestik naik $S_1\\to S_2$, permintaan turun $D_1\\to D_2$, impor menyusut. Baca empat region:</p>
<ul>
<li><span class="key">a</span> (teal) — tambahan surplus produsen, transfer dari konsumen.</li>
<li><span class="key">b</span>, <span class="key">d</span> (merah) — dua segitiga kerugian bobot mati (produksi + konsumsi).</li>
<li><span class="key">c</span> (amber) — penerimaan tarif pemerintah $= t \\times M_2$.</li>
</ul>
<p>Konsumen kehilangan $a+b+c+d$; $a$ dan $c$ adalah transfer; <span class="key">kerugian neto $b+d$</span>.</p>`
            },
            chart: SMALL
          },
          {
            title: { en: 'Large-country tariff — terms-of-trade gain', id: 'Tarif negara besar — keuntungan nilai tukar perdagangan' },
            html: {
              en: `<p>Same diagram, but the country is large, so cutting imports pushes the <span class="key">world price down</span> $P_w \\to P_w'$. Consumers still pay $P_t$ (triangles $b$, $d$ remain), but the government's revenue now reaches down to $P_w'$. The extra strip <span class="key">e</span> (green) is paid by <em>foreigners</em> — a true terms-of-trade gain.</p>
<div class="formula">$$\\Delta W = e - (b + d)$$</div>
<p>If $e > b+d$ the large country is <span class="key">better off</span>; the optimal tariff $t^{*}$ maximises $e - (b+d)$.</p>`,
              id: `<p>Diagram sama, tetapi negaranya besar, jadi memangkas impor menekan <span class="key">harga dunia turun</span> $P_w \\to P_w'$. Konsumen tetap membayar $P_t$ (segitiga $b$, $d$ tetap), tetapi penerimaan pemerintah kini menjangkau hingga $P_w'$. Strip tambahan <span class="key">e</span> (hijau) dibayar oleh <em>pihak asing</em> — keuntungan nilai tukar perdagangan sejati.</p>
<div class="formula">$$\\Delta W = e - (b + d)$$</div>
<p>Bila $e > b+d$ negara besar <span class="key">lebih sejahtera</span>; tarif optimal $t^{*}$ memaksimalkan $e - (b+d)$.</p>`
            },
            chart: LARGE
          },
          {
            title: { en: 'Export subsidy — domestic price up, net loss', id: 'Subsidi ekspor — harga domestik naik, rugi neto' },
            html: {
              en: `<p>The home country is a small exporter at world price $P_w$. A subsidy $s$ lifts the home price to $P_w + s$ (firms would otherwise just export). Output rises $S^W\\to S^s$, home consumption falls $D^W\\to D^s$, and exports widen.</p>
<ul>
<li>Consumers lose the area $a+b$ (red, between the price lines under demand).</li>
<li>Producers gain the larger area $a+b+c$ (teal, between the price lines under supply).</li>
<li>The government pays $s \\times$ exports on the whole export volume — a cost that exceeds the producer gain.</li>
</ul>
<p>Net welfare falls: the subsidy is <span class="key">unambiguously loss-making</span> (worse than a tariff, because for a large exporter it also worsens the terms of trade).</p>`,
              id: `<p>Negara domestik adalah pengekspor kecil pada harga dunia $P_w$. Subsidi $s$ menaikkan harga domestik ke $P_w + s$ (kalau tidak, perusahaan tinggal mengekspor). Output naik $S^W\\to S^s$, konsumsi domestik turun $D^W\\to D^s$, dan ekspor melebar.</p>
<ul>
<li>Konsumen kehilangan area $a+b$ (merah, di antara garis harga di bawah permintaan).</li>
<li>Produsen memperoleh area lebih besar $a+b+c$ (teal, di antara garis harga di bawah penawaran).</li>
<li>Pemerintah membayar $s \\times$ ekspor atas seluruh volume ekspor — biaya yang melebihi keuntungan produsen.</li>
</ul>
<p>Kesejahteraan neto turun: subsidi <span class="key">jelas merugi</span> (lebih buruk dari tarif, karena untuk pengekspor besar ia juga memperburuk nilai tukar perdagangan).</p>`
            },
            chart: SUBSIDY
          }
        ]
      }
    ],

    /* =====================================================================
       QUIZ
       ===================================================================== */
    quiz: [
      {
        type: 'concept',
        q: {
          en: 'For a SMALL importing country, a specific import tariff has which net effect on national welfare, and why?',
          id: 'Untuk negara pengimpor KECIL, tarif impor spesifik memberi efek neto apa pada kesejahteraan nasional, dan mengapa?'
        },
        context: {
          en: 'Use the four-region welfare diagram (a = producer gain, b & d = deadweight loss, c = revenue).',
          id: 'Gunakan diagram kesejahteraan empat region (a = untung produsen, b & d = bobot mati, c = penerimaan).'
        },
        answer: [
          { en: 'A small country cannot move the world price, so the domestic price rises by the full tariff: $P_t = P_w + t$.',
            id: 'Negara kecil tak bisa menggerakkan harga dunia, jadi harga domestik naik penuh sebesar tarif: $P_t = P_w + t$.' },
          { en: 'Consumers lose a + b + c + d. Of that, a is transferred to producers and c to the government — pure redistribution.',
            id: 'Konsumen kehilangan a + b + c + d. Dari itu, a ditransfer ke produsen dan c ke pemerintah — redistribusi murni.' },
          { en: 'The triangles b (production distortion) and d (consumption distortion) are NOT recovered by anyone.',
            id: 'Segitiga b (distorsi produksi) dan d (distorsi konsumsi) TIDAK dipulihkan oleh siapa pun.' },
          { en: 'Net welfare = a + c − (a+b+c+d) = −(b+d). Answer: a net LOSS equal to the two deadweight triangles b + d.',
            id: 'Kesejahteraan neto = a + c − (a+b+c+d) = −(b+d). Jawaban: RUGI neto sebesar dua segitiga bobot mati b + d.' }
        ],
        tip: {
          en: 'For a small country there is no terms-of-trade gain, so a tariff is always welfare-reducing.',
          id: 'Untuk negara kecil tak ada keuntungan nilai tukar perdagangan, jadi tarif selalu menurunkan kesejahteraan.'
        }
      },
      {
        type: 'concept',
        q: {
          en: 'Why can a LARGE country gain from a tariff while a small one cannot? What limits the gain?',
          id: 'Mengapa negara BESAR bisa untung dari tarif sementara negara kecil tidak? Apa yang membatasi keuntungan itu?'
        },
        answer: [
          { en: 'A large country buys enough that cutting imports lowers the world price ($P_w \\to P_w\'$). Part of the tariff is then paid by FOREIGN exporters — the terms-of-trade gain e.',
            id: 'Negara besar membeli cukup banyak sehingga memangkas impor menurunkan harga dunia ($P_w \\to P_w\'$). Sebagian tarif lalu dibayar eksportir ASING — keuntungan nilai tukar perdagangan e.' },
          { en: 'Net welfare = e − (b + d). If e > b+d the tariff RAISES welfare; the optimal tariff t* maximises this difference.',
            id: 'Kesejahteraan neto = e − (b + d). Bila e > b+d tarif MENAIKKAN kesejahteraan; tarif optimal t* memaksimalkan selisih ini.' },
          { en: 'Limits: (1) it is beggar-thy-neighbour — the gain comes at partners\' expense; (2) partners can RETALIATE, cancelling e and leaving only b+d (a trade war).',
            id: 'Batasnya: (1) bersifat memiskinkan tetangga — keuntungan diperoleh dengan mengorbankan mitra; (2) mitra bisa MEMBALAS, meniadakan e dan menyisakan hanya b+d (perang dagang).' }
        ],
        tip: {
          en: 't* ∝ 1/ε* — the less elastic foreign supply, the bigger the price drop and the higher the optimal tariff. A small country has ε* → ∞, so t* → 0.',
          id: 't* ∝ 1/ε* — makin tidak elastis penawaran asing, makin besar penurunan harga dan makin tinggi tarif optimal. Negara kecil punya ε* → ∞, jadi t* → 0.'
        }
      },
      {
        type: 'concept',
        q: {
          en: 'Compare an import tariff and an export subsidy on the domestic price and the terms of trade. Why does the subsidy always lose?',
          id: 'Bandingkan tarif impor dan subsidi ekspor terhadap harga domestik dan nilai tukar perdagangan. Mengapa subsidi selalu merugi?'
        },
        answer: [
          { en: 'Both RAISE the domestic price: a tariff to $P_w + t$, a subsidy to $P_w + s$ (firms only sell at home if they get the export-equivalent price).',
            id: 'Keduanya MENAIKKAN harga domestik: tarif ke $P_w + t$, subsidi ke $P_w + s$ (perusahaan hanya jual di dalam negeri bila dapat harga setara ekspor).' },
          { en: 'Terms of trade DIFFER: a large-country tariff IMPROVES the terms of trade (world price falls in your favour); an export subsidy WORSENS them (you flood the market, world price falls against you).',
            id: 'Nilai tukar perdagangan BERBEDA: tarif negara besar MEMPERBAIKI nilai tukar perdagangan (harga dunia turun untuk keuntungan Anda); subsidi ekspor MEMPERBURUKNYA (Anda membanjiri pasar, harga dunia turun melawan Anda).' },
          { en: 'So the subsidy has the usual deadweight loss b+d AND a terms-of-trade loss, with the government paying out the whole subsidy. Net effect is always negative.',
            id: 'Jadi subsidi punya kerugian bobot mati b+d biasa DAN kerugian nilai tukar perdagangan, dengan pemerintah membayar seluruh subsidi. Efek neto selalu negatif.' }
        ],
        tip: {
          en: 'Tariff: domestic price ↑, ToT can improve. Export subsidy: domestic price ↑, ToT worsens — that asymmetry is the whole answer.',
          id: 'Tarif: harga domestik ↑, ToT bisa membaik. Subsidi ekspor: harga domestik ↑, ToT memburuk — asimetri itu seluruh jawabannya.'
        }
      },
      {
        type: 'scenario',
        q: {
          en: 'The US and China are both large economies. The US imposes a tariff on Chinese goods and China retaliates on US soybeans. Use the optimal-tariff logic to predict the outcome.',
          id: 'AS dan Tiongkok sama-sama perekonomian besar. AS mengenakan tarif atas barang Tiongkok dan Tiongkok membalas atas kedelai AS. Gunakan logika tarif optimal untuk memperkirakan hasilnya.'
        },
        answer: [
          { en: 'Acting alone, the US (large) could capture a terms-of-trade gain e from Chinese exporters; in principle e could exceed b+d → a unilateral net gain.',
            id: 'Bertindak sendiri, AS (besar) bisa meraih keuntungan nilai tukar perdagangan e dari eksportir Tiongkok; secara prinsip e bisa melebihi b+d → keuntungan neto sepihak.' },
          { en: 'But China retaliates. Chinese tariffs erase the US ToT gain on the goods China taxes (and vice-versa).',
            id: 'Tetapi Tiongkok membalas. Tarif Tiongkok menghapus keuntungan ToT AS atas barang yang ditarifkan Tiongkok (dan sebaliknya).' },
          { en: 'With both tariffs in place the terms-of-trade transfers roughly cancel, leaving each country with its deadweight triangles b+d — the prisoner\'s-dilemma trade-war outcome: both worse off.',
            id: 'Dengan kedua tarif berlaku, transfer nilai tukar perdagangan kira-kira saling meniadakan, menyisakan tiap negara dengan segitiga bobot mati b+d — hasil perang dagang dilema tahanan: keduanya lebih buruk.' },
          { en: 'Empirically, the 2018–19 tariffs were passed through almost fully to US prices, so US buyers — not Chinese exporters — bore most of the cost.',
            id: 'Secara empiris, tarif 2018–19 hampir seluruhnya diteruskan ke harga AS, jadi pembeli AS — bukan eksportir Tiongkok — menanggung sebagian besar biaya.' }
        ],
        tip: {
          en: 'A tariff can pay for a large country acting ALONE, but retaliation turns it into a mutual loss. That is why the WTO discourages unilateral tariffs.',
          id: 'Tarif bisa menguntungkan negara besar yang bertindak SENDIRI, tetapi pembalasan mengubahnya menjadi kerugian bersama. Itu sebabnya WTO menentang tarif sepihak.'
        }
      },
      {
        type: 'quant',
        q: {
          en: 'Small country. Demand P = 10 − Q, Supply P = Q, world price P_w = 3. A specific tariff t = 1 raises the home price to P_t = 4. Find the four quantities, then compute the producer-surplus gain (a), government revenue (c), deadweight loss (b + d), and the net welfare change.',
          id: 'Negara kecil. Permintaan P = 10 − Q, Penawaran P = Q, harga dunia P_w = 3. Tarif spesifik t = 1 menaikkan harga domestik ke P_t = 4. Cari empat kuantitas, lalu hitung tambahan surplus produsen (a), penerimaan pemerintah (c), kerugian bobot mati (b + d), dan perubahan kesejahteraan neto.'
        },
        context: {
          en: 'This matches the welfare diagram above exactly. Tariff revenue c = t × imports-under-tariff; each DWL triangle = ½ × t × (quantity change).',
          id: 'Ini persis cocok dengan diagram kesejahteraan di atas. Penerimaan tarif c = t × impor-saat-tarif; tiap segitiga DWL = ½ × t × (perubahan kuantitas).'
        },
        answer: [
          { en: 'At P_w = 3: supply Q_S = P = 3 (S₁); demand Q_D = 10 − P = 7 (D₁). Imports M₁ = 7 − 3 = 4.',
            id: 'Pada P_w = 3: penawaran Q_S = P = 3 (S₁); permintaan Q_D = 10 − P = 7 (D₁). Impor M₁ = 7 − 3 = 4.' },
          { en: 'At P_t = 4: supply Q_S = 4 (S₂); demand Q_D = 6 (D₂). Imports M₂ = 6 − 4 = 2.',
            id: 'Pada P_t = 4: penawaran Q_S = 4 (S₂); permintaan Q_D = 6 (D₂). Impor M₂ = 6 − 4 = 2.' },
          { en: 'Producer gain a = trapezoid between the price lines, left of supply = ½ (S₁ + S₂) × t = ½ (3 + 4) × 1 = 3.5.',
            id: 'Untung produsen a = trapesium antara garis harga, kiri penawaran = ½ (S₁ + S₂) × t = ½ (3 + 4) × 1 = 3,5.' },
          { en: 'Government revenue c = t × M₂ = 1 × 2 = 2.0.',
            id: 'Penerimaan pemerintah c = t × M₂ = 1 × 2 = 2,0.' },
          { en: 'DWL: b = ½ × t × (S₂ − S₁) = ½ × 1 × (4 − 3) = 0.5; d = ½ × t × (D₁ − D₂) = ½ × 1 × (7 − 6) = 0.5. So b + d = 1.0.',
            id: 'DWL: b = ½ × t × (S₂ − S₁) = ½ × 1 × (4 − 3) = 0,5; d = ½ × t × (D₁ − D₂) = ½ × 1 × (7 − 6) = 0,5. Jadi b + d = 1,0.' },
          { en: 'Check: CS loss = a+b+c+d = 3.5+0.5+2+0.5 = 6.5 = ½(D₂+D₁)×t = ½(6+7)×1. Net welfare = a + c − (CS loss) = 3.5 + 2 − 6.5 = −1.0 = −(b+d). Answer: a = 3.5, c = 2.0, DWL = 1.0, net loss = 1.0.',
            id: 'Cek: rugi CS = a+b+c+d = 3,5+0,5+2+0,5 = 6,5 = ½(D₂+D₁)×t = ½(6+7)×1. Kesejahteraan neto = a + c − (rugi CS) = 3,5 + 2 − 6,5 = −1,0 = −(b+d). Jawaban: a = 3,5, c = 2,0, DWL = 1,0, rugi neto = 1,0.' }
        ],
        tip: {
          en: 'The net loss equals the two DWL triangles b + d every time for a small country — a fast sanity check on any tariff calculation.',
          id: 'Kerugian neto selalu sama dengan dua segitiga DWL b + d untuk negara kecil — cek cepat untuk tiap perhitungan tarif.'
        }
      },
      {
        type: 'quant',
        q: {
          en: 'Now suppose the SAME country is large: the tariff t = 1 lowers the world price from P_w = 3 to P_w′ = 2.5, while the home price is still P_t = 4. The terms-of-trade gain e is the revenue collected on imports over the world-price fall (P_w′ → P_w). Is the tariff welfare-improving?',
          id: 'Kini misalkan negara yang SAMA besar: tarif t = 1 menurunkan harga dunia dari P_w = 3 ke P_w′ = 2,5, sementara harga domestik tetap P_t = 4. Keuntungan nilai tukar perdagangan e adalah penerimaan atas impor sepanjang penurunan harga dunia (P_w′ → P_w). Apakah tarif meningkatkan kesejahteraan?'
        },
        answer: [
          { en: 'At P_t = 4 the home quantities are unchanged: S₂ = 4, D₂ = 6, imports M₂ = 2.',
            id: 'Pada P_t = 4 kuantitas domestik tak berubah: S₂ = 4, D₂ = 6, impor M₂ = 2.' },
          { en: 'Terms-of-trade gain e = (fall in world price) × imports = (P_w − P_w′) × M₂ = (3 − 2.5) × 2 = 0.5 × 2 = 1.0.',
            id: 'Keuntungan nilai tukar perdagangan e = (penurunan harga dunia) × impor = (P_w − P_w′) × M₂ = (3 − 2,5) × 2 = 0,5 × 2 = 1,0.' },
          { en: 'Deadweight loss b + d = 1.0 as before (the home price and quantities are the same as the small-country case).',
            id: 'Kerugian bobot mati b + d = 1,0 seperti sebelumnya (harga dan kuantitas domestik sama dengan kasus negara kecil).' },
          { en: 'Net welfare = e − (b + d) = 1.0 − 1.0 = 0. The gain exactly offsets the loss here — the tariff is borderline.',
            id: 'Kesejahteraan neto = e − (b + d) = 1,0 − 1,0 = 0. Keuntungan persis mengimbangi kerugian di sini — tarif berada di ambang.' },
          { en: 'Interpretation: with a slightly bigger world-price fall (e > 1.0) the large-country tariff would raise welfare. That is the optimal-tariff territory a small country never reaches.',
            id: 'Tafsir: dengan penurunan harga dunia sedikit lebih besar (e > 1,0) tarif negara besar akan menaikkan kesejahteraan. Itulah wilayah tarif optimal yang tak pernah dicapai negara kecil.' }
        ],
        tip: {
          en: 'Same home triangles as the small case, but now a positive e is subtracted from the loss. e > b+d ⇒ net gain; e < b+d ⇒ net loss; e = b+d ⇒ break-even.',
          id: 'Segitiga domestik sama seperti kasus kecil, tetapi kini e positif dikurangkan dari kerugian. e > b+d ⇒ untung neto; e < b+d ⇒ rugi neto; e = b+d ⇒ impas.'
        }
      }
    ]
  };
})();
