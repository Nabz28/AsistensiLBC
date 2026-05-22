/* ============================================================================
   EKINTER — Meeting 9 · Trade Policy II: Quantitative Restrictions & the WTO
   Sources: lecturer's deck (krisna.or.id/intecon/meeting9), KOM ch. 9–12, FT ch. 11.
   Bilingual (EN + ID). Registers itself on window.EKINTER_WEEKS.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   Graphs are ENGINE-RENDERED via window.EconChart — equilibria computed from the
   line equations, so price/quantity directions are correct by construction.

   Standing numerical example used in the quota diagram (small open economy):
     Demand : P = 10 − Q   (line through [1,9] and [9,1])
     Supply : P =  1 + Q   (line through [1,2] and [7,8])
     World price Pw = 3 →  Qd1 = 7, Qs1 = 2,  imports = 5
     Quota fixes imports = 1 → domestic price Pq = 5 → Qd2 = 5, Qs2 = 4
     Quota rent = (Pq − Pw) × quota = (5 − 3) × 1 = 2
   ============================================================================ */
(function () {
  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16';

  // ---- the quota welfare diagram (key chart) --------------------------------
  // D: P=10−Q, S: P=1+Q. Pw=3 hline, Pq=5 hline. Rent rectangle + two DWL tris.
  var QUOTA = { panels: [{
    title: 'Import quota — price ↑ to Pq, imports fixed', w: 440, h: 320,
    x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
    curves: [
      { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'D' },
      { id: 'S', kind: 'line', p1: [1, 2], p2: [7, 8], color: TEAL, label: 'S' },
      { id: 'Pw', kind: 'hline', y: 3, color: LINE, label: 'Pw' },
      { id: 'Pq', kind: 'hline', y: 5, color: AMBER, label: 'Pq' }
    ],
    areas: [
      // quota rent rectangle: Qs2=4..Qd2=5 wide, Pw=3..Pq=5 tall
      { pts: [[4, 3], [5, 3], [5, 5], [4, 5]], fill: 'rgba(217,138,22,.22)', label: 'rent', labelColor: '#9a5e08' },
      // production-distortion DWL triangle (along supply): (2,3)(4,3)(4,5)
      { pts: [[2, 3], [4, 3], [4, 5]], fill: 'rgba(192,57,43,.16)', label: 'a', labelColor: '#7d2018' },
      // consumption-distortion DWL triangle (along demand): (5,3)(7,3)(5,5)
      { pts: [[5, 3], [7, 3], [5, 5]], fill: 'rgba(192,57,43,.16)', label: 'b', labelColor: '#7d2018' }
    ],
    points: [
      { on: ['D', 'Pw'], dot: true, guideX: 'Qd₁' },   // free trade consume = 7
      { on: ['S', 'Pw'], dot: true, guideX: 'Qs₁' },   // free trade produce = 2
      { on: ['D', 'Pq'], dot: true, guideX: 'Qd₂' },   // quota consume = 5
      { on: ['S', 'Pq'], dot: true, guideX: 'Qs₂' }    // quota produce = 4
    ],
    notes: [ { x: 4.5, y: 1.4, text: 'quota = imports', color: '#9a5e08', anchor: 'middle' } ]
  }] };

  // ---- tariff vs quota: same picture, the box changes owner -----------------
  var TARIFF_BOX = { panels: [
    { title: 'Tariff t = Pq − Pw → box is GOVT REVENUE', w: 360, h: 280,
      x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
      curves: [
        { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'D' },
        { id: 'S', kind: 'line', p1: [1, 2], p2: [7, 8], color: TEAL, label: 'S' },
        { id: 'Pw', kind: 'hline', y: 3, color: LINE, label: 'Pw' },
        { id: 'Pt', kind: 'hline', y: 5, color: AMBER, label: 'Pw+t' }
      ],
      areas: [ { pts: [[4, 3], [5, 3], [5, 5], [4, 5]], fill: 'rgba(21,128,61,.20)', label: 'revenue', labelColor: '#15803d' } ],
      points: [ { on: ['S', 'Pt'], dot: true }, { on: ['D', 'Pt'], dot: true } ] },
    { title: 'Quota = imports → box is QUOTA RENT', w: 360, h: 280,
      x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
      curves: [
        { id: 'D', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'D' },
        { id: 'S', kind: 'line', p1: [1, 2], p2: [7, 8], color: TEAL, label: 'S' },
        { id: 'Pw', kind: 'hline', y: 3, color: LINE, label: 'Pw' },
        { id: 'Pq', kind: 'hline', y: 5, color: AMBER, label: 'Pq' }
      ],
      areas: [ { pts: [[4, 3], [5, 3], [5, 5], [4, 5]], fill: 'rgba(217,138,22,.22)', label: 'rent', labelColor: '#9a5e08' } ],
      points: [ { on: ['S', 'Pq'], dot: true }, { on: ['D', 'Pq'], dot: true } ] }
  ] };

  window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};
  window.EKINTER_WEEKS.m9 = {
    id: 'm9',
    label: { en: 'Meeting 9', id: 'Pertemuan 9' },
    title: {
      en: 'Trade Policy II: Quotas, VERs and Non-Tariff Measures',
      id: 'Kebijakan Perdagangan II: Kuota, VER, dan Hambatan Non-Tarif'
    },
    subtitle: {
      en: 'Quantitative restrictions and the rules of the game — how a quota mimics a tariff but hands the box to license holders, why a VER is worse, and what the WTO disciplines.',
      id: 'Pembatasan kuantitatif dan aturan mainnya — bagaimana kuota meniru tarif tetapi menyerahkan kotaknya ke pemegang lisensi, mengapa VER lebih buruk, dan apa yang diatur WTO.'
    },

    /* --------------------------------------------------------------------- */
    notes: [
      {
        num: '1',
        heading: { en: 'Import quota: mechanics and the price effect', id: 'Kuota impor: mekanisme dan efek harga' },
        cards: [
          {
            title: { en: 'What a quota does', id: 'Apa yang dilakukan kuota' },
            html: {
              en: `<p>An <span class="key">import quota</span> is a direct legal limit on the <b>quantity</b> of a good that may be imported in a period. It is a <i>quantitative restriction</i> — it works on <b>volume</b>, not on price.</p>
<p>In a small open economy that freely traded at the world price $P_w$, domestic consumers bought $Q_{d1}$ and domestic firms produced $Q_{s1}$; imports filled the gap $Q_{d1}-Q_{s1}$. Cap imports below that gap and the only way the market clears is for the <b>domestic price to rise</b> to $P_q$, the price at which the remaining shortage exactly equals the quota.</p>
<div class="formula">$$\\text{quota} \\;=\\; Q_{d2}-Q_{s2} \\;<\\; Q_{d1}-Q_{s1}$$</div>
<ul>
  <li>Higher price $\\Rightarrow$ consumers buy <b>less</b> ($Q_{d2}<Q_{d1}$).</li>
  <li>Higher price $\\Rightarrow$ domestic firms supply <b>more</b> ($Q_{s2}>Q_{s1}$).</li>
  <li>The gap between the new demand and supply equals the licensed quantity.</li>
</ul>
<div class="note">A quota is administered through <span class="key">import licenses</span>: the government issues permits totalling the quota, and only license holders may import.</div>`,
              id: `<p><span class="key">Kuota impor</span> adalah batas hukum langsung atas <b>jumlah</b> suatu barang yang boleh diimpor dalam satu periode. Ini adalah <i>pembatasan kuantitatif</i> — bekerja pada <b>volume</b>, bukan pada harga.</p>
<p>Pada perekonomian terbuka kecil yang semula berdagang bebas pada harga dunia $P_w$, konsumen domestik membeli $Q_{d1}$ dan produsen domestik menghasilkan $Q_{s1}$; impor menutup selisih $Q_{d1}-Q_{s1}$. Batasi impor di bawah selisih itu, maka satu-satunya cara pasar seimbang adalah <b>harga domestik naik</b> ke $P_q$, yaitu harga di mana kekurangan yang tersisa persis sama dengan kuota.</p>
<div class="formula">$$\\text{kuota} \\;=\\; Q_{d2}-Q_{s2} \\;<\\; Q_{d1}-Q_{s1}$$</div>
<ul>
  <li>Harga naik $\\Rightarrow$ konsumen membeli <b>lebih sedikit</b> ($Q_{d2}<Q_{d1}$).</li>
  <li>Harga naik $\\Rightarrow$ produsen domestik memasok <b>lebih banyak</b> ($Q_{s2}>Q_{s1}$).</li>
  <li>Selisih antara permintaan dan penawaran baru sama dengan jumlah yang dilisensikan.</li>
</ul>
<div class="note">Kuota dijalankan lewat <span class="key">lisensi impor</span>: pemerintah menerbitkan izin yang totalnya sebesar kuota, dan hanya pemegang lisensi yang boleh mengimpor.</div>`
            }
          },
          {
            title: { en: 'The price wedge', id: 'Selisih harga (wedge)' },
            html: {
              en: `<p>The quota opens a gap between the domestic price and the world price. That gap is the <span class="key">quota price wedge</span>:</p>
<div class="formula">$$\\text{wedge} = P_q - P_w \\;>\\; 0$$</div>
<p>It is exactly the wedge a tariff $t$ would create if $t = P_q - P_w$. This is the heart of <b>quota–tariff equivalence</b>: any quota has an <i>implicit tariff equivalent</i>, and any tariff has an <i>implicit quota equivalent</i> (the import volume it would allow). They look identical on the diagram. They differ in <b>who keeps the wedge</b>.</p>`,
              id: `<p>Kuota membuka jarak antara harga domestik dan harga dunia. Jarak itu adalah <span class="key">selisih harga kuota</span>:</p>
<div class="formula">$$\\text{wedge} = P_q - P_w \\;>\\; 0$$</div>
<p>Ini persis selisih yang akan diciptakan tarif $t$ jika $t = P_q - P_w$. Inilah inti <b>kesetaraan kuota–tarif</b>: setiap kuota punya <i>tarif ekuivalen implisit</i>, dan setiap tarif punya <i>kuota ekuivalen implisit</i> (volume impor yang diizinkannya). Keduanya tampak identik di diagram. Perbedaannya pada <b>siapa yang memegang selisih itu</b>.</p>`
            }
          }
        ]
      },
      {
        num: '2',
        heading: { en: 'Quota vs. tariff: equivalence and quota rents', id: 'Kuota vs. tarif: kesetaraan dan rente kuota' },
        cards: [
          {
            title: { en: 'Same welfare picture, different owner of the box', id: 'Gambar kesejahteraan sama, pemilik kotak berbeda' },
            html: {
              en: `<p>Draw a tariff and a quota that raise the domestic price to the same $P_q$ and the welfare areas are identical:</p>
<table>
  <tr><th>Area</th><th>Who</th><th>Tariff</th><th>Quota</th></tr>
  <tr><td>Consumer surplus</td><td>buyers</td><td colspan="2">falls (price ↑)</td></tr>
  <tr><td>Producer surplus</td><td>domestic firms</td><td colspan="2">rises (price ↑)</td></tr>
  <tr><td><b>The box</b> $(P_q-P_w)\\times$ imports</td><td>—</td><td><span class="key">government revenue</span></td><td><span class="key">quota rent</span></td></tr>
  <tr><td>DWL triangles $a+b$</td><td>nobody</td><td colspan="2">pure deadweight loss</td></tr>
</table>
<p>The two distortion triangles are the same: $a$ is the <b>production distortion</b> (resources pulled into a high-cost domestic industry) and $b$ is the <b>consumption distortion</b> (buyers priced out of consumption they valued above $P_w$).</p>
<div class="tip">Memory hook: a quota is "a tariff whose revenue went missing." Find the box — if it goes to the treasury it is revenue; if it goes to license holders it is rent.</div>`,
              id: `<p>Gambar tarif dan kuota yang menaikkan harga domestik ke $P_q$ yang sama, maka luas kesejahteraannya identik:</p>
<table>
  <tr><th>Luas</th><th>Siapa</th><th>Tarif</th><th>Kuota</th></tr>
  <tr><td>Surplus konsumen</td><td>pembeli</td><td colspan="2">turun (harga ↑)</td></tr>
  <tr><td>Surplus produsen</td><td>produsen domestik</td><td colspan="2">naik (harga ↑)</td></tr>
  <tr><td><b>Kotak</b> $(P_q-P_w)\\times$ impor</td><td>—</td><td><span class="key">penerimaan pemerintah</span></td><td><span class="key">rente kuota</span></td></tr>
  <tr><td>Segitiga DWL $a+b$</td><td>tak ada</td><td colspan="2">kerugian bobot mati murni</td></tr>
</table>
<p>Kedua segitiga distorsi sama: $a$ adalah <b>distorsi produksi</b> (sumber daya tertarik ke industri domestik berbiaya tinggi) dan $b$ adalah <b>distorsi konsumsi</b> (pembeli tersingkir dari konsumsi yang mereka nilai di atas $P_w$).</p>
<div class="tip">Jembatan ingatan: kuota adalah "tarif yang penerimaannya hilang." Cari kotaknya — jika ke kas negara itu penerimaan; jika ke pemegang lisensi itu rente.</div>`
            }
          },
          {
            title: { en: 'Who captures the quota rent?', id: 'Siapa yang menangkap rente kuota?' },
            html: {
              en: `<p>The rent — the box of value $(P_q-P_w)\\times\\text{quota}$ — goes to whoever holds the right to import at $P_w$ and sell at $P_q$. Three destinations (from the deck):</p>
<ol>
  <li><span class="key">Auctioned licenses</span> → the <b>government</b> captures the rent (then it is just like tariff revenue).</li>
  <li><span class="key">Allocated licenses</span> → politically chosen importers capture it; this invites <b>rent-seeking</b> and lobbying.</li>
  <li><span class="key">Foreign exporters</span> → the rent leaks <b>abroad</b> (this is the VER case below).</li>
</ol>
<div class="note">Where the rent lands does not change the deadweight loss $a+b$, but it decides whether the country keeps the transfer or loses it. National welfare is best when the government auctions the licenses.</div>`,
              id: `<p>Rente — kotak senilai $(P_q-P_w)\\times\\text{kuota}$ — jatuh ke siapa pun yang memegang hak mengimpor pada $P_w$ dan menjual pada $P_q$. Tiga tujuan (dari materi):</p>
<ol>
  <li><span class="key">Lisensi dilelang</span> → <b>pemerintah</b> menangkap rente (lalu sama saja seperti penerimaan tarif).</li>
  <li><span class="key">Lisensi dialokasikan</span> → importir pilihan politik yang menangkapnya; ini mengundang <b>perburuan rente</b> dan lobi.</li>
  <li><span class="key">Eksportir asing</span> → rente bocor ke <b>luar negeri</b> (inilah kasus VER di bawah).</li>
</ol>
<div class="note">Ke mana rente jatuh tidak mengubah kerugian bobot mati $a+b$, tetapi menentukan apakah negara menyimpan transfer itu atau kehilangannya. Kesejahteraan nasional paling baik ketika pemerintah melelang lisensi.</div>`
            }
          },
          {
            title: { en: 'When quota and tariff stop being equivalent', id: 'Kapan kuota dan tarif berhenti setara' },
            html: {
              en: `<p>Equivalence holds only in a static, competitive snapshot. The deck lists where they <b>diverge</b>:</p>
<ul>
  <li><b>Demand grows.</b> A tariff lets imports rise with demand; a fixed quota does not, so the implicit protection (the wedge) <b>rises automatically</b> as the economy grows.</li>
  <li><b>A domestic firm has market power.</b> Under a tariff, imports can still discipline a would-be monopolist (contestability). Under a quota, the import ceiling <b>guarantees</b> the protected firm room to raise prices.</li>
  <li><b>Rent allocation is political.</b> Quotas create valuable licenses; that is precisely why interest groups often prefer them to transparent tariffs.</li>
</ul>`,
              id: `<p>Kesetaraan hanya berlaku dalam potret statis dan kompetitif. Materi mencatat di mana keduanya <b>menyimpang</b>:</p>
<ul>
  <li><b>Permintaan tumbuh.</b> Tarif membiarkan impor naik seiring permintaan; kuota tetap tidak, sehingga proteksi implisit (selisih harga) <b>naik otomatis</b> saat ekonomi tumbuh.</li>
  <li><b>Produsen domestik punya kuasa pasar.</b> Di bawah tarif, impor masih bisa mendisiplinkan calon monopolis (kontestabilitas). Di bawah kuota, plafon impor <b>menjamin</b> ruang bagi perusahaan terlindungi untuk menaikkan harga.</li>
  <li><b>Alokasi rente bersifat politis.</b> Kuota menciptakan lisensi yang berharga; justru itulah sebabnya kelompok kepentingan sering lebih menyukainya ketimbang tarif yang transparan.</li>
</ul>`
            }
          }
        ]
      },
      {
        num: '3',
        heading: { en: 'Voluntary export restraints (VER)', id: 'Pembatasan ekspor sukarela (VER)' },
        cards: [
          {
            title: { en: 'A quota administered by the exporter', id: 'Kuota yang dijalankan eksportir' },
            html: {
              en: `<p>A <span class="key">voluntary export restraint (VER)</span> — also a <i>voluntary restraint agreement</i> — is a quota on a good imposed from the <b>exporting side</b>, usually under political pressure from the importing country. The classic case is Japan limiting car exports to the United States in the 1980s.</p>
<p>The price and quantity effects in the importing country are <b>exactly those of an equivalent import quota</b>: the domestic price rises to $P_q$, output rises, consumption falls. The difference is fatal for the importer's welfare:</p>
<div class="formula">$$\\text{rent} = (P_q - P_w)\\times\\text{quota} \\;\\longrightarrow\\; \\textbf{foreign exporters}$$</div>
<p>Because foreign firms hold the right to sell at the high domestic price, the <b>rent rectangle accrues abroad</b>. The importing country bears the two DWL triangles <i>plus</i> the entire transfer of the rent box to foreigners.</p>
<div class="tip">A VER is "a quota whose rent we mailed to the exporter." It is almost always <b>worse than a tariff</b> for the importing country — the deck calls it <i>strictly worse</i> — because the country loses the box on top of the triangles.</div>`,
              id: `<p><span class="key">Pembatasan ekspor sukarela (VER)</span> — disebut juga <i>perjanjian pembatasan sukarela</i> — adalah kuota atas suatu barang yang dikenakan dari <b>sisi ekspor</b>, biasanya di bawah tekanan politik dari negara pengimpor. Kasus klasiknya: Jepang membatasi ekspor mobil ke Amerika Serikat pada 1980-an.</p>
<p>Efek harga dan kuantitas di negara pengimpor <b>persis seperti kuota impor yang setara</b>: harga domestik naik ke $P_q$, output naik, konsumsi turun. Perbedaannya fatal bagi kesejahteraan pengimpor:</p>
<div class="formula">$$\\text{rente} = (P_q - P_w)\\times\\text{kuota} \\;\\longrightarrow\\; \\textbf{eksportir asing}$$</div>
<p>Karena perusahaan asing memegang hak menjual pada harga domestik yang tinggi, <b>kotak rente jatuh ke luar negeri</b>. Negara pengimpor menanggung dua segitiga DWL <i>ditambah</i> seluruh transfer kotak rente ke pihak asing.</p>
<div class="tip">VER adalah "kuota yang rentenya kita kirimkan ke eksportir." Hampir selalu <b>lebih buruk daripada tarif</b> bagi negara pengimpor — materi menyebutnya <i>strictly worse</i> — karena negara kehilangan kotak di atas segitiga.</div>`
            }
          },
          {
            title: { en: 'Why use a VER at all — and why the WTO banned it', id: 'Mengapa memakai VER — dan mengapa WTO melarangnya' },
            html: {
              en: `<p>If a VER is worse than a tariff, why did governments use them? <b>Political economy.</b> A VER looks "voluntary," sidesteps domestic legislatures and the GATT's tariff bindings, and lets the exporter — who pockets the rent — accept it more readily than a tariff.</p>
<p>Because they were a transparent loophole, the WTO's <span class="key">Agreement on Safeguards (Art. 11, 1995)</span> prohibits members from seeking or maintaining VERs and similar "grey-area" measures.</p>`,
              id: `<p>Jika VER lebih buruk daripada tarif, mengapa pemerintah memakainya? <b>Ekonomi politik.</b> VER tampak "sukarela," menghindari parlemen domestik dan pengikatan tarif GATT, serta membuat eksportir — yang mengantongi rente — lebih mudah menerimanya ketimbang tarif.</p>
<p>Karena menjadi celah yang kentara, <span class="key">Perjanjian Safeguards WTO (Pasal 11, 1995)</span> melarang anggota mencari atau mempertahankan VER dan tindakan "wilayah abu-abu" sejenis.</p>`
            }
          }
        ]
      },
      {
        num: '4',
        heading: { en: 'Non-tariff measures: LCR and standards', id: 'Hambatan non-tarif: LCR dan standar' },
        cards: [
          {
            title: { en: 'The landscape of non-tariff measures (NTMs)', id: 'Lanskap hambatan non-tarif (NTM)' },
            html: {
              en: `<p>As average tariffs fell from ~30% (1980s) to ~10% today, protection migrated to <span class="key">non-tariff measures (NTMs)</span> — any policy other than a tariff that affects trade. UNCTAD's MAST scheme groups them into 16 chapters, technical and non-technical:</p>
<table>
  <tr><th>Technical</th><th>Non-technical</th></tr>
  <tr><td>SPS (sanitary &amp; phytosanitary), TBT (technical barriers), pre-shipment inspection</td><td>price controls, contingent measures (anti-dumping, CVD, safeguards), licenses/quotas, subsidies, export measures</td></tr>
</table>
<div class="note">The political appeal of NTMs is <b>opacity</b>: a tariff is a public number in the schedule; an NTM's tariff-equivalent must be estimated product-by-product, and its cost is borne by firms, not by the budget. Concentrated benefits, dispersed costs (Olson, 1965).</div>`,
              id: `<p>Saat tarif rata-rata turun dari ~30% (1980-an) menjadi ~10% kini, proteksi berpindah ke <span class="key">hambatan non-tarif (NTM)</span> — kebijakan apa pun selain tarif yang memengaruhi perdagangan. Skema MAST UNCTAD mengelompokkannya ke 16 bab, teknis dan non-teknis:</p>
<table>
  <tr><th>Teknis</th><th>Non-teknis</th></tr>
  <tr><td>SPS (sanitasi &amp; fitosanitasi), TBT (hambatan teknis), inspeksi pra-pengapalan</td><td>kontrol harga, tindakan kontingen (anti-dumping, CVD, safeguards), lisensi/kuota, subsidi, tindakan ekspor</td></tr>
</table>
<div class="note">Daya tarik politik NTM adalah <b>ketidaktransparanan</b>: tarif adalah angka publik dalam daftar; tarif-ekuivalen sebuah NTM harus diperkirakan per produk, dan biayanya ditanggung perusahaan, bukan anggaran. Manfaat terkonsentrasi, biaya tersebar (Olson, 1965).</div>`
            }
          },
          {
            title: { en: 'Local content requirements (LCR / TKDN)', id: 'Kandungan lokal (LCR / TKDN)' },
            html: {
              en: `<p>A <span class="key">local content requirement (LCR)</span> — in Indonesia, <i>Tingkat Komponen Dalam Negeri</i> (TKDN) — mandates a minimum domestic share of value in a final good. Indonesian examples from the deck:</p>
<ul>
  <li>Handsets: ~35% TKDN for 4G/5G smartphones.</li>
  <li>EVs and EV batteries: a staircase rising toward 80% TKDN.</li>
</ul>
<p><b>Static cost:</b> the rule forces firms to buy more expensive or lower-quality domestic inputs — often a double-digit tariff-equivalent. <b>Claimed dynamic benefit:</b> supplier linkages, learning, and technology transfer (an infant-industry argument).</p>
<div class="tip">WTO status: the <span class="key">TRIMs Agreement</span> prohibits LCRs as a trade-distorting investment measure. Many members nonetheless maintain creative variants.</div>`,
              id: `<p><span class="key">Kandungan lokal (LCR)</span> — di Indonesia, <i>Tingkat Komponen Dalam Negeri</i> (TKDN) — mewajibkan porsi nilai domestik minimum dalam barang jadi. Contoh Indonesia dari materi:</p>
<ul>
  <li>Ponsel: ~35% TKDN untuk smartphone 4G/5G.</li>
  <li>Kendaraan listrik (EV) dan baterainya: tangga naik menuju 80% TKDN.</li>
</ul>
<p><b>Biaya statis:</b> aturan memaksa perusahaan membeli input domestik yang lebih mahal atau bermutu rendah — sering setara tarif dua digit. <b>Manfaat dinamis yang diklaim:</b> keterkaitan pemasok, pembelajaran, dan alih teknologi (argumen industri muda).</p>
<div class="tip">Status WTO: <span class="key">Perjanjian TRIMs</span> melarang LCR sebagai tindakan investasi yang mendistorsi perdagangan. Banyak anggota tetap mempertahankan variannya secara kreatif.</div>`
            }
          },
          {
            title: { en: 'Standards: SPS and TBT', id: 'Standar: SPS dan TBT' },
            html: {
              en: `<p>Product <span class="key">standards</span> have a legitimate side: they correct information asymmetry, address externalities (emissions, pesticide residue), and ensure network compatibility. But a standard that foreign suppliers cannot easily meet keeps competitors out <b>legally</b> — protection dressed as quality.</p>
<p>The trade-off: a tighter standard means fewer entrants → higher average quality but less price competition. Evidence from Indonesia (Elisabeth &amp; Verico, 2022) finds TBT measures dampen manufacturing exports.</p>
<div class="note">Rule of thumb from the deck: for a domestic problem, a <b>domestic policy</b> almost always beats a trade policy. Use a standard to fix a market failure, not to shield an industry.</div>`,
              id: `<p><span class="key">Standar</span> produk punya sisi sah: mengoreksi asimetri informasi, menangani eksternalitas (emisi, residu pestisida), dan memastikan kompatibilitas jaringan. Tetapi standar yang sulit dipenuhi pemasok asing menyingkirkan pesaing secara <b>legal</b> — proteksi berbalut mutu.</p>
<p>Trade-off-nya: standar lebih ketat berarti lebih sedikit pemain → mutu rata-rata lebih tinggi tetapi persaingan harga lebih sedikit. Bukti dari Indonesia (Elisabeth &amp; Verico, 2022) menemukan tindakan TBT menekan ekspor manufaktur.</p>
<div class="note">Pegangan dari materi: untuk masalah domestik, <b>kebijakan domestik</b> hampir selalu mengalahkan kebijakan perdagangan. Pakai standar untuk memperbaiki kegagalan pasar, bukan untuk melindungi industri.</div>`
            }
          }
        ]
      },
      {
        num: '5',
        heading: { en: 'Multilateral rules: the WTO and MFN', id: 'Aturan multilateral: WTO dan MFN' },
        cards: [
          {
            title: { en: 'Why tie hands collectively?', id: 'Mengapa mengikat tangan bersama-sama?' },
            html: {
              en: `<p>The cautionary tale is the 1930s. The U.S. <span class="key">Smoot–Hawley Tariff (1930)</span> pushed average tariffs to ~59%; retaliation by trading partners followed, and world trade collapsed by roughly <b>two-thirds between 1929 and 1933</b>. The lesson taken at Bretton Woods (1944): countries should <b>tie their hands collectively</b> to escape the trade-war prisoners' dilemma.</p>
<p>The result was the <span class="key">GATT (1947)</span> — 23 founding contracting parties, applied "provisionally" from 1948 until 1995 — which became the <span class="key">World Trade Organization (WTO)</span> after the Uruguay Round, in force <b>1 January 1995</b>. The WTO has 164 members covering ~98% of world trade; Indonesia is a founding member.</p>`,
              id: `<p>Kisah peringatannya adalah 1930-an. <span class="key">Tarif Smoot–Hawley AS (1930)</span> mendorong tarif rata-rata ke ~59%; pembalasan oleh mitra dagang menyusul, dan perdagangan dunia anjlok sekitar <b>dua pertiga antara 1929 dan 1933</b>. Pelajaran di Bretton Woods (1944): negara sebaiknya <b>mengikat tangan secara kolektif</b> untuk lepas dari dilema tahanan perang dagang.</p>
<p>Hasilnya adalah <span class="key">GATT (1947)</span> — 23 pihak penanda tangan pendiri, diterapkan "sementara" sejak 1948 hingga 1995 — yang menjadi <span class="key">Organisasi Perdagangan Dunia (WTO)</span> setelah Putaran Uruguay, berlaku <b>1 Januari 1995</b>. WTO beranggotakan 164 negara yang mencakup ~98% perdagangan dunia; Indonesia anggota pendiri.</p>`
            }
          },
          {
            title: { en: 'The core principles: MFN and National Treatment', id: 'Prinsip inti: MFN dan Perlakuan Nasional' },
            html: {
              en: `<p>Two non-discrimination rules anchor the system:</p>
<table>
  <tr><th>Principle</th><th>GATT Art.</th><th>What it requires</th></tr>
  <tr><td><span class="key">Most-Favoured Nation (MFN)</span></td><td>Art. I</td><td>A concession granted to <b>one</b> member must be granted to <b>all</b> members — no playing favourites among trading partners.</td></tr>
  <tr><td><span class="key">National Treatment</span></td><td>Art. III</td><td>Once an import has cleared the border, it must be treated <b>no worse than a like domestic product</b> — no internal discrimination.</td></tr>
</table>
<p>Permitted exceptions to MFN: free-trade agreements / customs unions, the Generalized System of Preferences (GSP) for developing countries, and balance-of-payments measures.</p>
<p>Two more pillars: <span class="key">tariff bindings</span> (each member's schedule of maximum bound rates — applied rates may be lower but not higher) and <span class="key">reciprocity</span> (concessions are exchanged, not given away).</p>`,
              id: `<p>Dua aturan non-diskriminasi menjadi jangkar sistem:</p>
<table>
  <tr><th>Prinsip</th><th>Pasal GATT</th><th>Apa yang diwajibkan</th></tr>
  <tr><td><span class="key">Most-Favoured Nation (MFN)</span></td><td>Pasal I</td><td>Konsesi yang diberikan ke <b>satu</b> anggota harus diberikan ke <b>semua</b> anggota — tak boleh pilih kasih antarmitra dagang.</td></tr>
  <tr><td><span class="key">Perlakuan Nasional</span></td><td>Pasal III</td><td>Begitu impor melewati perbatasan, ia harus diperlakukan <b>tidak lebih buruk daripada produk domestik sejenis</b> — tanpa diskriminasi internal.</td></tr>
</table>
<p>Pengecualian MFN yang diizinkan: perjanjian perdagangan bebas / serikat pabean, Generalized System of Preferences (GSP) bagi negara berkembang, dan tindakan neraca pembayaran.</p>
<p>Dua pilar lain: <span class="key">pengikatan tarif</span> (daftar tarif maksimum tiap anggota — tarif terapkan boleh lebih rendah, tetapi tidak lebih tinggi) dan <span class="key">resiprositas</span> (konsesi dipertukarkan, bukan diberikan cuma-cuma).</p>`
            }
          },
          {
            title: { en: 'The WTO under strain — and Indonesia in it', id: 'WTO yang tertekan — dan Indonesia di dalamnya' },
            html: {
              en: `<p>The system is fraying. The Doha "Development" Round (launched 2001) stalled by 2008 over the single-undertaking design and shifting negotiating arithmetic; members turned to FTAs (CPTPP, USMCA, RCEP, IEU-CEPA) — a "spaghetti bowl" of overlapping rules. Worse, the <span class="key">Appellate Body has been paralysed since December 2019</span>, because the U.S. blocked new appointments; a losing party can now appeal "into the void."</p>
<p><b>Indonesia at the WTO:</b> in <span class="key">DS592</span>, the EU challenged Indonesia's 2020 nickel-ore export ban and domestic-processing requirements. The 2022 panel found the measures inconsistent with GATT Art. XI:1 (a prohibited quantitative restriction) and rejected the Art. XX exceptions. Indonesia appealed into the void — no binding outcome, and the ban remains in force.</p>
<div class="note">Take-away: tariffs are visible, but the real action is everywhere else — quotas, VERs, LCRs, standards, subsidies, export controls. The WTO's <i>rule-book</i> still binds, weakly; its <i>negotiation</i> function stalled in 2008 and its <i>adjudication</i> broke in 2019.</div>`,
              id: `<p>Sistemnya merenggang. Putaran Doha "Pembangunan" (diluncurkan 2001) macet pada 2008 akibat desain <i>single undertaking</i> dan perubahan aritmetika negosiasi; anggota beralih ke FTA (CPTPP, USMCA, RCEP, IEU-CEPA) — "mangkuk spageti" aturan yang tumpang tindih. Lebih buruk lagi, <span class="key">Badan Banding lumpuh sejak Desember 2019</span> karena AS memblokir penunjukan baru; pihak yang kalah kini bisa banding "ke ruang hampa."</p>
<p><b>Indonesia di WTO:</b> dalam <span class="key">DS592</span>, Uni Eropa menggugat larangan ekspor bijih nikel Indonesia 2020 dan persyaratan pengolahan domestik. Panel 2022 menilai tindakan itu melanggar GATT Pasal XI:1 (pembatasan kuantitatif yang dilarang) dan menolak pengecualian Pasal XX. Indonesia banding ke ruang hampa — tanpa hasil mengikat, dan larangan tetap berlaku.</p>
<div class="note">Inti: tarif kasatmata, tetapi aksi sebenarnya ada di tempat lain — kuota, VER, LCR, standar, subsidi, kendali ekspor. <i>Buku aturan</i> WTO masih mengikat, walau lemah; fungsi <i>negosiasi</i>-nya macet 2008 dan <i>adjudikasi</i>-nya patah 2019.</div>`
            }
          }
        ]
      }
    ],

    /* --------------------------------------------------------------------- */
    formulas: [
      {
        num: '1',
        heading: { en: 'The quota price wedge', id: 'Selisih harga kuota' },
        cards: [
          {
            html: {
              en: `<div class="formula">$$\\text{quota} = Q_{d2}-Q_{s2}, \\qquad \\text{wedge} = P_q - P_w > 0$$</div>
<ul>
  <li>$P_w$ — world price (free-trade price). $P_q$ — domestic price under the quota.</li>
  <li>$Q_{d2},\\,Q_{s2}$ — quantities demanded and supplied at $P_q$.</li>
  <li>The quota fixes the import volume; the price adjusts so that the residual shortage equals the quota.</li>
</ul>
<p><b>Use it</b> to find $P_q$: solve $Q_d(P_q)-Q_s(P_q)=\\text{quota}$. The wedge $P_q-P_w$ is the quota's implicit tariff equivalent.</p>`,
              id: `<div class="formula">$$\\text{kuota} = Q_{d2}-Q_{s2}, \\qquad \\text{wedge} = P_q - P_w > 0$$</div>
<ul>
  <li>$P_w$ — harga dunia (harga perdagangan bebas). $P_q$ — harga domestik di bawah kuota.</li>
  <li>$Q_{d2},\\,Q_{s2}$ — jumlah diminta dan ditawarkan pada $P_q$.</li>
  <li>Kuota mematok volume impor; harga menyesuaikan agar kekurangan sisa sama dengan kuota.</li>
</ul>
<p><b>Pakai</b> untuk mencari $P_q$: selesaikan $Q_d(P_q)-Q_s(P_q)=\\text{kuota}$. Selisih $P_q-P_w$ adalah tarif ekuivalen implisit kuota.</p>`
            }
          }
        ]
      },
      {
        num: '2',
        heading: { en: 'Quota rent', id: 'Rente kuota' },
        cards: [
          {
            html: {
              en: `<div class="formula">$$\\text{rent} = (P_q - P_w)\\times\\text{quota}$$</div>
<ul>
  <li>The box bounded by $P_w$, $P_q$ and the import volume — value created by the right to buy at $P_w$ and sell at $P_q$.</li>
  <li><b>Auctioned licenses</b> → rent to government. <b>Allocated licenses</b> → rent to importers (rent-seeking). <b>VER</b> → rent to foreign exporters.</li>
</ul>
<p><b>Use it</b> to size the transfer. Under a tariff with $t=P_q-P_w$, the same box is <i>government revenue</i> $=t\\times\\text{imports}$.</p>
<div class="tip">Worked: $P_w=3$, $P_q=5$, quota $=1 \\Rightarrow$ rent $=(5-3)\\times 1 = 2$.</div>`,
              id: `<div class="formula">$$\\text{rente} = (P_q - P_w)\\times\\text{kuota}$$</div>
<ul>
  <li>Kotak yang dibatasi $P_w$, $P_q$, dan volume impor — nilai yang tercipta dari hak membeli pada $P_w$ dan menjual pada $P_q$.</li>
  <li><b>Lisensi dilelang</b> → rente ke pemerintah. <b>Lisensi dialokasikan</b> → rente ke importir (perburuan rente). <b>VER</b> → rente ke eksportir asing.</li>
</ul>
<p><b>Pakai</b> untuk mengukur transfernya. Di bawah tarif dengan $t=P_q-P_w$, kotak yang sama menjadi <i>penerimaan pemerintah</i> $=t\\times\\text{impor}$.</p>
<div class="tip">Contoh: $P_w=3$, $P_q=5$, kuota $=1 \\Rightarrow$ rente $=(5-3)\\times 1 = 2$.</div>`
            }
          }
        ]
      },
      {
        num: '3',
        heading: { en: 'Welfare pieces (national welfare change)', id: 'Komponen kesejahteraan (perubahan kesejahteraan nasional)' },
        cards: [
          {
            html: {
              en: `<div class="formula">$$\\Delta CS = -(\\,a + b + \\text{box}\\,), \\quad \\Delta PS = +\\,c, \\quad \\text{box} = \\text{rent or revenue}$$</div>
<p>The price rise from $P_w$ to $P_q$ splits the lost consumer surplus into four parts: $c$ to producers, the box (rent/revenue), and the two deadweight triangles $a$ (production distortion) and $b$ (consumption distortion).</p>
<div class="formula">$$\\text{Net national welfare loss} = \\;a + b + (\\text{box if it leaks abroad})$$</div>
<ul>
  <li><b>Tariff / auctioned quota:</b> the country keeps the box, so the net loss is just $a+b$ (the two triangles).</li>
  <li><b>VER (or quota whose rent goes abroad):</b> the country also loses the entire box, so the net loss is $a + b + \\text{rent}$.</li>
</ul>
<div class="tip">This is exactly why a VER is "strictly worse than a tariff": same triangles, but the rectangle leaves the country.</div>`,
              id: `<div class="formula">$$\\Delta CS = -(\\,a + b + \\text{kotak}\\,), \\quad \\Delta PS = +\\,c, \\quad \\text{kotak} = \\text{rente atau penerimaan}$$</div>
<p>Kenaikan harga dari $P_w$ ke $P_q$ memecah surplus konsumen yang hilang menjadi empat bagian: $c$ ke produsen, kotak (rente/penerimaan), dan dua segitiga bobot mati $a$ (distorsi produksi) dan $b$ (distorsi konsumsi).</p>
<div class="formula">$$\\text{Kerugian kesejahteraan nasional neto} = \\;a + b + (\\text{kotak jika bocor ke luar negeri})$$</div>
<ul>
  <li><b>Tarif / kuota yang dilelang:</b> negara menyimpan kotaknya, sehingga kerugian neto hanya $a+b$ (dua segitiga).</li>
  <li><b>VER (atau kuota yang rentenya ke luar negeri):</b> negara juga kehilangan seluruh kotak, sehingga kerugian neto $a + b + \\text{rente}$.</li>
</ul>
<div class="tip">Inilah persisnya mengapa VER "strictly worse than a tariff": segitiganya sama, tetapi persegi panjangnya keluar dari negara.</div>`
            }
          }
        ]
      }
    ],

    /* --------------------------------------------------------------------- */
    graphs: [
      {
        num: 'G',
        heading: { en: 'The quota welfare diagram', id: 'Diagram kesejahteraan kuota' },
        cards: [
          {
            title: { en: 'Rent rectangle and the two deadweight triangles', id: 'Persegi rente dan dua segitiga bobot mati' },
            html: {
              en: `<p>Free trade at $P_w$ would clear with consumption $Q_{d1}$ and production $Q_{s1}$ (imports $= Q_{d1}-Q_{s1}$). The quota caps imports below that gap, so the domestic price rises to <span class="key">$P_q$</span>: consumption falls to $Q_{d2}$, production rises to $Q_{s2}$, and imports shrink to the licensed quota $Q_{d2}-Q_{s2}$.</p>
<ul>
  <li>The shaded <b>amber rectangle</b> is the <span class="key">quota rent</span> $(P_q-P_w)\\times\\text{quota}$ — captured by license holders.</li>
  <li>Triangle <b>$a$</b> is the <b>production distortion</b>; triangle <b>$b$</b> is the <b>consumption distortion</b>. Together $a+b$ is pure deadweight loss.</li>
</ul>`,
              id: `<p>Perdagangan bebas pada $P_w$ akan seimbang dengan konsumsi $Q_{d1}$ dan produksi $Q_{s1}$ (impor $= Q_{d1}-Q_{s1}$). Kuota memangkas impor di bawah selisih itu, sehingga harga domestik naik ke <span class="key">$P_q$</span>: konsumsi turun ke $Q_{d2}$, produksi naik ke $Q_{s2}$, dan impor menyusut menjadi kuota berlisensi $Q_{d2}-Q_{s2}$.</p>
<ul>
  <li><b>Persegi panjang amber</b> yang diarsir adalah <span class="key">rente kuota</span> $(P_q-P_w)\\times\\text{kuota}$ — ditangkap pemegang lisensi.</li>
  <li>Segitiga <b>$a$</b> adalah <b>distorsi produksi</b>; segitiga <b>$b$</b> adalah <b>distorsi konsumsi</b>. Bersama $a+b$ adalah kerugian bobot mati murni.</li>
</ul>`
            },
            chart: QUOTA,
            htmlAfter: {
              en: `<div class="tip">With $P_w=3$, $P_q=5$, quota $=1$: rent $=(5-3)\\times 1=2$; the triangles $a$ and $b$ are the welfare cost no one recovers.</div>`,
              id: `<div class="tip">Dengan $P_w=3$, $P_q=5$, kuota $=1$: rente $=(5-3)\\times 1=2$; segitiga $a$ dan $b$ adalah biaya kesejahteraan yang tak terpulihkan siapa pun.</div>`
            }
          }
        ]
      },
      {
        num: 'G2',
        heading: { en: 'Tariff vs. quota: who owns the box', id: 'Tarif vs. kuota: siapa pemilik kotak' },
        cards: [
          {
            title: { en: 'Identical triangles, different rectangle', id: 'Segitiga identik, persegi berbeda' },
            html: {
              en: `<p>Set a tariff $t=P_q-P_w$ and a quota that raises the price to the same $P_q$. The diagrams are <b>identical</b> except for the owner of the box bounded by $P_w$, $P_q$ and the import volume.</p>
<ul>
  <li><b>Left (tariff):</b> the box is <span class="key">government revenue</span> — the country keeps it.</li>
  <li><b>Right (quota):</b> the box is <span class="key">quota rent</span> — it goes to whoever holds the licenses (and to <i>foreign exporters</i> under a VER, a national welfare loss).</li>
</ul>`,
              id: `<p>Tetapkan tarif $t=P_q-P_w$ dan kuota yang menaikkan harga ke $P_q$ yang sama. Diagramnya <b>identik</b> kecuali pemilik kotak yang dibatasi $P_w$, $P_q$, dan volume impor.</p>
<ul>
  <li><b>Kiri (tarif):</b> kotaknya adalah <span class="key">penerimaan pemerintah</span> — negara menyimpannya.</li>
  <li><b>Kanan (kuota):</b> kotaknya adalah <span class="key">rente kuota</span> — jatuh ke pemegang lisensi (dan ke <i>eksportir asing</i> di bawah VER, sebuah kerugian kesejahteraan nasional).</li>
</ul>`
            },
            chart: TARIFF_BOX,
            htmlAfter: {
              en: `<div class="note">Equivalence ends once demand grows, a domestic firm has market power, or rent allocation turns political — then the fixed quota protects more tightly than the tariff.</div>`,
              id: `<div class="note">Kesetaraan berakhir begitu permintaan tumbuh, produsen domestik berkuasa pasar, atau alokasi rente menjadi politis — saat itu kuota tetap melindungi lebih ketat daripada tarif.</div>`
            }
          }
        ]
      }
    ],

    /* --------------------------------------------------------------------- */
    quiz: [
      {
        type: 'concept',
        q: {
          en: 'A quota and a tariff are set so the domestic price rises to the same level. List which welfare areas are identical and the one way the two policies differ.',
          id: 'Sebuah kuota dan tarif diatur agar harga domestik naik ke tingkat yang sama. Sebutkan luas kesejahteraan mana yang identik dan satu cara kedua kebijakan ini berbeda.'
        },
        answer: [
          { en: 'Identical: the consumer-surplus loss, the producer-surplus gain, and the two deadweight triangles a (production distortion) and b (consumption distortion).',
            id: 'Identik: kerugian surplus konsumen, keuntungan surplus produsen, dan dua segitiga bobot mati a (distorsi produksi) dan b (distorsi konsumsi).' },
          { en: 'The single difference is the box (P_q − P_w) × imports: under a tariff it is government revenue; under a quota it is quota rent captured by license holders.',
            id: 'Satu-satunya perbedaan adalah kotak (P_q − P_w) × impor: di bawah tarif itu penerimaan pemerintah; di bawah kuota itu rente kuota yang ditangkap pemegang lisensi.' }
        ],
        tip: {
          en: 'Find the box: treasury → revenue; license holders → rent. The triangles are always the same.',
          id: 'Cari kotaknya: kas negara → penerimaan; pemegang lisensi → rente. Segitiganya selalu sama.'
        }
      },
      {
        type: 'calc',
        q: {
          en: 'Domestic demand is P = 10 − Q and supply is P = 1 + Q. The world price is Pw = 3. The government imposes an import quota of 1 unit. Find the domestic price Pq and the quota rent.',
          id: 'Permintaan domestik P = 10 − Q dan penawaran P = 1 + Q. Harga dunia Pw = 3. Pemerintah mengenakan kuota impor 1 unit. Cari harga domestik Pq dan rente kuota.'
        },
        context: {
          en: 'A quota fixes the import volume; solve for the price at which (quantity demanded − quantity supplied) equals the quota.',
          id: 'Kuota mematok volume impor; selesaikan untuk harga di mana (jumlah diminta − jumlah ditawarkan) sama dengan kuota.'
        },
        answer: [
          { en: 'At Pq the imports equal the quota: Qd − Qs = 1. From demand, Qd = 10 − Pq; from supply, Qs = Pq − 1.',
            id: 'Pada Pq, impor sama dengan kuota: Qd − Qs = 1. Dari permintaan, Qd = 10 − Pq; dari penawaran, Qs = Pq − 1.' },
          { en: 'So (10 − Pq) − (Pq − 1) = 1 → 11 − 2Pq = 1 → 2Pq = 10 → Pq = 5.',
            id: 'Maka (10 − Pq) − (Pq − 1) = 1 → 11 − 2Pq = 1 → 2Pq = 10 → Pq = 5.' },
          { en: 'Quota rent = (Pq − Pw) × quota = (5 − 3) × 1 = 2.',
            id: 'Rente kuota = (Pq − Pw) × kuota = (5 − 3) × 1 = 2.' },
          { en: 'Check: at Pq = 5, Qd = 5 and Qs = 4, so imports = 1 ✓ (was 7 − 2 = 5 under free trade).',
            id: 'Cek: pada Pq = 5, Qd = 5 dan Qs = 4, sehingga impor = 1 ✓ (semula 7 − 2 = 5 di bawah perdagangan bebas).' }
        ],
        tip: {
          en: 'The implicit tariff equivalent of this quota is t = Pq − Pw = 2 per unit.',
          id: 'Tarif ekuivalen implisit kuota ini adalah t = Pq − Pw = 2 per unit.'
        }
      },
      {
        type: 'concept',
        q: {
          en: 'Why is a voluntary export restraint (VER) usually worse for the importing country than an import tariff that raises the price by the same amount?',
          id: 'Mengapa pembatasan ekspor sukarela (VER) biasanya lebih buruk bagi negara pengimpor daripada tarif impor yang menaikkan harga sebesar yang sama?'
        },
        answer: [
          { en: 'The price and quantity effects (and the two DWL triangles) are identical to a tariff/quota.',
            id: 'Efek harga dan kuantitas (serta dua segitiga DWL) identik dengan tarif/kuota.' },
          { en: 'But a VER is administered by foreign exporters, so the rent rectangle (Pq − Pw) × quota accrues abroad instead of to the home government.',
            id: 'Namun VER dijalankan eksportir asing, sehingga persegi rente (Pq − Pw) × kuota jatuh ke luar negeri, bukan ke pemerintah dalam negeri.' },
          { en: 'The importing country therefore loses the triangles a + b PLUS the entire rent box — net national loss = a + b + rent — making it strictly worse than a tariff (where the box stays home as revenue).',
            id: 'Negara pengimpor karenanya kehilangan segitiga a + b DITAMBAH seluruh kotak rente — kerugian nasional neto = a + b + rente — sehingga lebih buruk daripada tarif (yang kotaknya tetap di dalam negeri sebagai penerimaan).' }
        ],
        tip: {
          en: 'Same triangles, but the rectangle is mailed abroad. The WTO Safeguards Agreement (Art. 11, 1995) banned VERs for this reason.',
          id: 'Segitiga sama, tetapi persegi panjangnya dikirim ke luar negeri. Perjanjian Safeguards WTO (Pasal 11, 1995) melarang VER karena alasan ini.'
        }
      },
      {
        type: 'calc',
        q: {
          en: 'Using the same market (demand P = 10 − Q, supply P = 1 + Q, Pw = 3, Pq = 5), compute the production-distortion triangle (a) and the consumption-distortion triangle (b), and state the total deadweight loss under (i) an auctioned quota and (ii) a VER.',
          id: 'Dengan pasar yang sama (permintaan P = 10 − Q, penawaran P = 1 + Q, Pw = 3, Pq = 5), hitung segitiga distorsi produksi (a) dan segitiga distorsi konsumsi (b), lalu nyatakan total kerugian bobot mati untuk (i) kuota yang dilelang dan (ii) VER.'
        },
        context: {
          en: 'At Pw = 3: Qs1 = 2, Qd1 = 7. At Pq = 5: Qs2 = 4, Qd2 = 5. Each triangle has base = the change in quantity and height = the price wedge (Pq − Pw = 2).',
          id: 'Pada Pw = 3: Qs1 = 2, Qd1 = 7. Pada Pq = 5: Qs2 = 4, Qd2 = 5. Tiap segitiga punya alas = perubahan kuantitas dan tinggi = selisih harga (Pq − Pw = 2).'
        },
        answer: [
          { en: 'Production triangle a: base = Qs2 − Qs1 = 4 − 2 = 2, height = 2 → a = ½ × 2 × 2 = 2.',
            id: 'Segitiga produksi a: alas = Qs2 − Qs1 = 4 − 2 = 2, tinggi = 2 → a = ½ × 2 × 2 = 2.' },
          { en: 'Consumption triangle b: base = Qd1 − Qd2 = 7 − 5 = 2, height = 2 → b = ½ × 2 × 2 = 2.',
            id: 'Segitiga konsumsi b: alas = Qd1 − Qd2 = 7 − 5 = 2, tinggi = 2 → b = ½ × 2 × 2 = 2.' },
          { en: '(i) Auctioned quota: the rent (= 2) stays home, so net deadweight loss = a + b = 2 + 2 = 4.',
            id: '(i) Kuota dilelang: rente (= 2) tetap di dalam negeri, sehingga kerugian bobot mati neto = a + b = 2 + 2 = 4.' },
          { en: '(ii) VER: the rent leaks abroad, so net national loss = a + b + rent = 2 + 2 + 2 = 6.',
            id: '(ii) VER: rente bocor ke luar negeri, sehingga kerugian nasional neto = a + b + rente = 2 + 2 + 2 = 6.' }
        ],
        tip: {
          en: 'The VER costs the nation 50% more here (6 vs. 4) purely because the rent left the country.',
          id: 'VER di sini merugikan negara 50% lebih besar (6 vs. 4) semata-mata karena rente keluar dari negara.'
        }
      },
      {
        type: 'concept',
        q: {
          en: 'Match each measure to what it restricts and its WTO status: (1) import quota, (2) local content requirement (TKDN), (3) VER.',
          id: 'Cocokkan tiap tindakan dengan apa yang dibatasinya dan status WTO-nya: (1) kuota impor, (2) kandungan lokal (TKDN), (3) VER.'
        },
        answer: [
          { en: '(1) Import quota — caps the quantity of imports; a quantitative restriction generally prohibited under GATT Art. XI (with limited exceptions).',
            id: '(1) Kuota impor — membatasi jumlah impor; pembatasan kuantitatif yang umumnya dilarang GATT Pasal XI (dengan pengecualian terbatas).' },
          { en: '(2) Local content requirement — mandates a minimum domestic share of value; prohibited as a trade-distorting investment measure under the TRIMs Agreement.',
            id: '(2) Kandungan lokal — mewajibkan porsi nilai domestik minimum; dilarang sebagai tindakan investasi yang mendistorsi perdagangan di bawah Perjanjian TRIMs.' },
          { en: '(3) VER — an export-side quota whose rent goes to foreign exporters; banned by the Agreement on Safeguards (Art. 11, 1995).',
            id: '(3) VER — kuota sisi ekspor yang rentenya jatuh ke eksportir asing; dilarang Perjanjian Safeguards (Pasal 11, 1995).' }
        ],
        tip: {
          en: 'All three are non-tariff measures — the protection that grew as tariffs fell.',
          id: 'Ketiganya hambatan non-tarif — proteksi yang tumbuh saat tarif turun.'
        }
      },
      {
        type: 'concept',
        q: {
          en: 'State the WTO most-favoured-nation (MFN) and national-treatment principles, and give one permitted exception to MFN.',
          id: 'Nyatakan prinsip most-favoured-nation (MFN) dan perlakuan nasional WTO, serta beri satu pengecualian MFN yang diizinkan.'
        },
        answer: [
          { en: 'MFN (GATT Art. I): a trade concession granted to one member must be extended to all members — no discrimination among trading partners.',
            id: 'MFN (GATT Pasal I): konsesi perdagangan yang diberikan ke satu anggota harus diperluas ke semua anggota — tanpa diskriminasi antarmitra dagang.' },
          { en: 'National treatment (GATT Art. III): once an import has cleared customs, it must be treated no less favourably than a like domestic product.',
            id: 'Perlakuan nasional (GATT Pasal III): begitu impor lolos bea cukai, ia harus diperlakukan tidak kurang baik daripada produk domestik sejenis.' },
          { en: 'A permitted MFN exception: free-trade agreements / customs unions (also the GSP for developing countries, and balance-of-payments measures).',
            id: 'Pengecualian MFN yang diizinkan: perjanjian perdagangan bebas / serikat pabean (juga GSP bagi negara berkembang, dan tindakan neraca pembayaran).' }
        ],
        tip: {
          en: 'MFN = no favourites at the border; national treatment = no discrimination inside the border.',
          id: 'MFN = tak pilih kasih di perbatasan; perlakuan nasional = tanpa diskriminasi di dalam perbatasan.'
        }
      }
    ]
  };
})();
