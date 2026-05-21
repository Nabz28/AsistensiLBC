/* ============================================================================
   PE2 — Week 7 · Open-Economy Macroeconomics: Basic Concepts (Mankiw Ch 32)
   Bilingual (EN + ID). Registers itself on window.PE2_WEEKS.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   ============================================================================ */
window.PE2_WEEKS = window.PE2_WEEKS || {};
window.PE2_WEEKS.w7 = {
  id: 'w7',
  label: { en: 'Week 7', id: 'Minggu 7' },
  title: {
    en: 'Open-Economy Macroeconomics: Basic Concepts',
    id: 'Makroekonomi Perekonomian Terbuka: Konsep Dasar'
  },
  subtitle: {
    en: 'How a country trades goods and capital with the rest of the world — and why NX = NCO.',
    id: 'Bagaimana sebuah negara memperdagangkan barang dan modal dengan dunia — dan mengapa NX = NCO.'
  },

  /* ----------------------------------------------------------------------- */
  notes: [
    {
      num: '1',
      heading: { en: 'Closed vs. open economy', id: 'Perekonomian tertutup vs. terbuka' },
      cards: [
        {
          title: { en: 'Two ways to interact with the world', id: 'Dua cara berinteraksi dengan dunia' },
          html: {
            en: `<p>A <span class="key">closed economy</span> does not interact with other economies: no trade, no foreign borrowing or lending. It is a useful simplification but not realistic.</p>
<p>An <span class="key">open economy</span> interacts freely with the rest of the world in two markets:</p>
<ul>
  <li>It buys and sells <b>goods and services</b> in world <i>product markets</i>.</li>
  <li>It buys and sells <b>capital assets</b> (stocks, bonds) in world <i>financial markets</i>.</li>
</ul>
<div class="note">These are the two flows you must keep separate all week: the <b>flow of goods</b> (measured by net exports, NX) and the <b>flow of capital/financial resources</b> (measured by net capital outflow, NCO).</div>`,
            id: `<p><span class="key">Perekonomian tertutup</span> tidak berinteraksi dengan perekonomian lain: tanpa perdagangan, tanpa pinjam-meminjam dengan luar negeri. Ini penyederhanaan yang berguna tetapi tidak realistis.</p>
<p><span class="key">Perekonomian terbuka</span> berinteraksi bebas dengan dunia melalui dua pasar:</p>
<ul>
  <li>Membeli dan menjual <b>barang dan jasa</b> di <i>pasar produk</i> dunia.</li>
  <li>Membeli dan menjual <b>aset modal</b> (saham, obligasi) di <i>pasar keuangan</i> dunia.</li>
</ul>
<div class="note">Inilah dua arus yang harus selalu kamu pisahkan minggu ini: <b>arus barang</b> (diukur dengan ekspor neto, NX) dan <b>arus modal/sumber daya keuangan</b> (diukur dengan arus modal keluar neto, NCO).</div>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'The flow of goods: exports, imports, net exports', id: 'Arus barang: ekspor, impor, ekspor neto' },
      cards: [
        {
          title: { en: 'Definitions', id: 'Definisi' },
          html: {
            en: `<ul>
  <li><span class="key">Exports</span> — goods and services produced <b>domestically</b> and sold <b>abroad</b>.</li>
  <li><span class="key">Imports</span> — goods and services produced <b>abroad</b> and sold <b>domestically</b>.</li>
  <li><span class="key">Net exports (NX)</span> — value of exports minus value of imports. Also called the <i>trade balance</i>.</li>
</ul>
<div class="formula">$$NX = \\text{Exports} - \\text{Imports}$$</div>`,
            id: `<ul>
  <li><span class="key">Ekspor</span> — barang dan jasa yang diproduksi <b>di dalam negeri</b> dan dijual <b>ke luar negeri</b>.</li>
  <li><span class="key">Impor</span> — barang dan jasa yang diproduksi <b>di luar negeri</b> dan dijual <b>di dalam negeri</b>.</li>
  <li><span class="key">Ekspor neto (NX)</span> — nilai ekspor dikurangi nilai impor. Disebut juga <i>neraca perdagangan</i>.</li>
</ul>
<div class="formula">$$NX = \\text{Ekspor} - \\text{Impor}$$</div>`
          }
        },
        {
          title: { en: 'Surplus, deficit, balanced trade', id: 'Surplus, defisit, perdagangan seimbang' },
          html: {
            en: `<table>
  <tr><th>Condition</th><th>Name</th><th>Meaning</th></tr>
  <tr><td>$NX > 0$</td><td><span class="key">Trade surplus</span></td><td>Sells <b>more</b> goods abroad than it buys.</td></tr>
  <tr><td>$NX < 0$</td><td><span class="key">Trade deficit</span></td><td>Sells <b>fewer</b> goods abroad than it buys.</td></tr>
  <tr><td>$NX = 0$</td><td>Balanced trade</td><td>Exports $=$ imports.</td></tr>
</table>
<p>Things that move imports, exports and NX: consumer <b>tastes</b>, the <b>prices</b> of goods at home vs. abroad, the <b>exchange rate</b>, <b>incomes</b> at home and abroad, the <b>cost of transport</b>, and <b>government policy</b> (tariffs, quotas).</p>`,
            id: `<table>
  <tr><th>Kondisi</th><th>Nama</th><th>Arti</th></tr>
  <tr><td>$NX > 0$</td><td><span class="key">Surplus perdagangan</span></td><td>Menjual <b>lebih banyak</b> barang ke luar negeri daripada yang dibeli.</td></tr>
  <tr><td>$NX < 0$</td><td><span class="key">Defisit perdagangan</span></td><td>Menjual <b>lebih sedikit</b> barang ke luar negeri daripada yang dibeli.</td></tr>
  <tr><td>$NX = 0$</td><td>Perdagangan seimbang</td><td>Ekspor $=$ impor.</td></tr>
</table>
<p>Hal yang menggerakkan impor, ekspor, dan NX: <b>selera</b> konsumen, <b>harga</b> barang dalam vs. luar negeri, <b>nilai tukar</b>, <b>pendapatan</b> di dalam dan luar negeri, <b>biaya transportasi</b>, dan <b>kebijakan pemerintah</b> (tarif, kuota).</p>`
          }
        }
      ]
    },
    {
      num: '3',
      heading: { en: 'The flow of capital: net capital outflow', id: 'Arus modal: arus modal keluar neto' },
      cards: [
        {
          title: { en: 'What NCO measures', id: 'Apa yang diukur NCO' },
          html: {
            en: `<p><span class="key">Net capital outflow (NCO)</span> — also called <i>net foreign investment</i> — is the purchase of foreign assets by domestic residents minus the purchase of domestic assets by foreigners.</p>
<div class="formula">$$NCO = \\begin{pmatrix}\\text{foreign assets bought}\\\\\\text{by domestic residents}\\end{pmatrix} - \\begin{pmatrix}\\text{domestic assets bought}\\\\\\text{by foreigners}\\end{pmatrix}$$</div>
<table>
  <tr><th>Condition</th><th>Name</th><th>Meaning</th></tr>
  <tr><td>$NCO > 0$</td><td><span class="key">Capital outflow</span></td><td>Domestic purchases of foreign assets <b>exceed</b> foreign purchases of domestic assets — capital flows <b>out</b>.</td></tr>
  <tr><td>$NCO < 0$</td><td><span class="key">Capital inflow</span></td><td>Foreign purchases of domestic assets <b>exceed</b> domestic purchases of foreign assets — capital flows <b>in</b>.</td></tr>
</table>
<p>Things that move NCO: the <b>real interest rate</b> on foreign vs. domestic assets, the <b>economic and political risk</b> of holding assets abroad, and <b>government policy</b> on foreign ownership.</p>`,
            id: `<p><span class="key">Arus modal keluar neto (NCO)</span> — disebut juga <i>investasi asing neto</i> — adalah pembelian aset luar negeri oleh penduduk domestik dikurangi pembelian aset domestik oleh pihak asing.</p>
<div class="formula">$$NCO = \\begin{pmatrix}\\text{aset luar negeri dibeli}\\\\\\text{penduduk domestik}\\end{pmatrix} - \\begin{pmatrix}\\text{aset domestik dibeli}\\\\\\text{pihak asing}\\end{pmatrix}$$</div>
<table>
  <tr><th>Kondisi</th><th>Nama</th><th>Arti</th></tr>
  <tr><td>$NCO > 0$</td><td><span class="key">Arus modal keluar</span></td><td>Pembelian aset asing oleh domestik <b>melebihi</b> pembelian aset domestik oleh asing — modal mengalir <b>keluar</b>.</td></tr>
  <tr><td>$NCO < 0$</td><td><span class="key">Arus modal masuk</span></td><td>Pembelian aset domestik oleh asing <b>melebihi</b> pembelian aset asing oleh domestik — modal mengalir <b>masuk</b>.</td></tr>
</table>
<p>Hal yang menggerakkan NCO: <b>suku bunga riil</b> aset asing vs. domestik, <b>risiko ekonomi dan politik</b> memegang aset di luar negeri, serta <b>kebijakan pemerintah</b> soal kepemilikan asing.</p>`
          }
        },
        {
          title: { en: 'FDI vs. FPI', id: 'FDI vs. FPI' },
          html: {
            en: `<p>NCO is made of two kinds of foreign investment:</p>
<table>
  <tr><th></th><th>Foreign Direct Investment (FDI)</th><th>Foreign Portfolio Investment (FPI)</th></tr>
  <tr><td><b>What</b></td><td>Investor owns and <b>actively manages</b> the asset.</td><td>Investor buys financial assets but does <b>not</b> manage them.</td></tr>
  <tr><td><b>Example</b></td><td>A foreigner <b>opens a factory</b> in Indonesia.</td><td>A foreigner <b>buys shares</b> in an Indonesian company.</td></tr>
</table>
<div class="tip">Exam memory hook: <b>F</b>DI = building/running the <b>F</b>actory; <b>P</b>ortfolio = just holding <b>P</b>aper (stocks/bonds).</div>`,
            id: `<p>NCO terdiri dari dua jenis investasi asing:</p>
<table>
  <tr><th></th><th>Investasi Asing Langsung (FDI)</th><th>Investasi Portofolio Asing (FPI)</th></tr>
  <tr><td><b>Apa</b></td><td>Investor memiliki dan <b>mengelola langsung</b> aset tersebut.</td><td>Investor membeli aset keuangan tetapi <b>tidak</b> mengelolanya.</td></tr>
  <tr><td><b>Contoh</b></td><td>Orang asing <b>membuka pabrik</b> di Indonesia.</td><td>Orang asing <b>membeli saham</b> di perusahaan Indonesia.</td></tr>
</table>
<div class="tip">Jembatan ingatan ujian: FDI = mem<b>b</b>angun/menjalankan pa<b>b</b>rik; <b>P</b>ortofolio = sekadar memegang kertas (<b>p</b>aper: saham/obligasi).</div>`
          }
        }
      ]
    },
    {
      num: '4',
      heading: { en: 'The key identity: NX = NCO', id: 'Identitas kunci: NX = NCO' },
      cards: [
        {
          title: { en: 'Why they are always equal', id: 'Mengapa keduanya selalu sama' },
          html: {
            en: `<p>By accounting, <b>net exports equal net capital outflow</b>:</p>
<div class="formula">$$NX = NCO$$</div>
<p>Every transaction that affects one side affects the other by the same amount. The intuition: when goods cross a border, something of equal value (currency or an asset) crosses back.</p>
<ul>
  <li><b>Foreigner buys an Indonesian good (export):</b> $X \\uparrow \\Rightarrow NX \\uparrow$. They pay with currency/assets, so Indonesia ends up holding more foreign assets $\\Rightarrow NCO \\uparrow$.</li>
  <li><b>Indonesian buys a foreign good (import):</b> $M \\uparrow \\Rightarrow NX \\downarrow$. Payment hands a domestic asset to foreigners $\\Rightarrow NCO \\downarrow$.</li>
</ul>
<div class="note">Same direction, same size — that is why $NX = NCO$ is an identity, not a coincidence.</div>`,
            id: `<p>Secara akuntansi, <b>ekspor neto sama dengan arus modal keluar neto</b>:</p>
<div class="formula">$$NX = NCO$$</div>
<p>Setiap transaksi yang memengaruhi satu sisi memengaruhi sisi lain dengan besaran yang sama. Intuisinya: ketika barang melintasi batas negara, sesuatu yang bernilai sama (mata uang atau aset) melintas balik.</p>
<ul>
  <li><b>Pihak asing membeli barang Indonesia (ekspor):</b> $X \\uparrow \\Rightarrow NX \\uparrow$. Mereka membayar dengan mata uang/aset, sehingga Indonesia memegang lebih banyak aset asing $\\Rightarrow NCO \\uparrow$.</li>
  <li><b>Orang Indonesia membeli barang luar negeri (impor):</b> $M \\uparrow \\Rightarrow NX \\downarrow$. Pembayaran menyerahkan aset domestik ke pihak asing $\\Rightarrow NCO \\downarrow$.</li>
</ul>
<div class="note">Arah sama, besaran sama — itulah sebabnya $NX = NCO$ adalah identitas, bukan kebetulan.</div>`
          }
        },
        {
          title: { en: 'Surplus/deficit and the direction of capital', id: 'Surplus/defisit dan arah modal' },
          html: {
            en: `<table>
  <tr><th>Trade balance</th><th>Then NCO</th><th>Story</th></tr>
  <tr><td>Surplus, $NX>0$</td><td>$NCO>0$</td><td>The country exports more and <b>accumulates foreign assets</b>; capital flows out.</td></tr>
  <tr><td>Deficit, $NX<0$</td><td>$NCO<0$</td><td>The country imports more; the deficit must be <b>financed by capital inflows</b> — foreigners buy domestic assets.</td></tr>
</table>
<div class="tip">A trade deficit is not "money disappearing." It is financed by selling assets to foreigners ($NCO<0$). The accounting always balances.</div>`,
            id: `<table>
  <tr><th>Neraca perdagangan</th><th>Maka NCO</th><th>Cerita</th></tr>
  <tr><td>Surplus, $NX>0$</td><td>$NCO>0$</td><td>Negara mengekspor lebih banyak dan <b>mengakumulasi aset luar negeri</b>; modal mengalir keluar.</td></tr>
  <tr><td>Defisit, $NX<0$</td><td>$NCO<0$</td><td>Negara mengimpor lebih banyak; defisit harus <b>dibiayai arus modal masuk</b> — pihak asing membeli aset domestik.</td></tr>
</table>
<div class="tip">Defisit perdagangan bukan "uang yang lenyap". Ia dibiayai dengan menjual aset ke pihak asing ($NCO<0$). Akuntansinya selalu seimbang.</div>`
          }
        }
      ]
    },
    {
      num: '5',
      heading: { en: 'Saving, investment, and NCO', id: 'Tabungan, investasi, dan NCO' },
      cards: [
        {
          title: { en: 'From the GDP identity to S = I + NCO', id: 'Dari identitas PDB ke S = I + NCO' },
          html: {
            en: `<p>Start from the open-economy GDP identity and rearrange:</p>
<div class="formula">$$Y = C + I + G + NX$$</div>
<p>National saving is $S = Y - C - G$. Substituting:</p>
<div class="formula">$$S = I + NX \\quad\\Longrightarrow\\quad S = I + NCO$$</div>
<p>In words: <b>national saving = domestic investment + net capital outflow</b>. A nation's saving is either invested at home ($I$) or sent abroad to buy foreign assets ($NCO$).</p>
<div class="note">Equivalently, $S - I = NX = NCO$. If a country saves more than it invests at home, the surplus saving flows abroad ($NCO>0$, trade surplus). If it invests more than it saves, it must borrow from abroad ($NCO<0$, trade deficit).</div>`,
            id: `<p>Mulai dari identitas PDB perekonomian terbuka lalu susun ulang:</p>
<div class="formula">$$Y = C + I + G + NX$$</div>
<p>Tabungan nasional adalah $S = Y - C - G$. Substitusikan:</p>
<div class="formula">$$S = I + NX \\quad\\Longrightarrow\\quad S = I + NCO$$</div>
<p>Dengan kata lain: <b>tabungan nasional = investasi domestik + arus modal keluar neto</b>. Tabungan suatu negara entah diinvestasikan di dalam negeri ($I$) atau dikirim ke luar negeri untuk membeli aset asing ($NCO$).</p>
<div class="note">Setara dengan itu, $S - I = NX = NCO$. Jika sebuah negara menabung lebih banyak daripada yang diinvestasikan di dalam negeri, kelebihan tabungan mengalir ke luar ($NCO>0$, surplus perdagangan). Jika investasinya melebihi tabungannya, ia harus meminjam dari luar negeri ($NCO<0$, defisit perdagangan).</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  formulas: [
    {
      num: '1',
      heading: { en: 'Net exports (the trade balance)', id: 'Ekspor neto (neraca perdagangan)' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$NX = \\text{Exports} - \\text{Imports}$$</div>
<ul>
  <li>$NX$ — net exports (the trade balance).</li>
  <li><b>Exports</b> — value of domestically produced goods/services sold abroad.</li>
  <li><b>Imports</b> — value of foreign-produced goods/services sold at home.</li>
</ul>
<p><b>Use it</b> to classify the trade balance: $NX>0$ surplus, $NX<0$ deficit, $NX=0$ balanced.</p>`,
            id: `<div class="formula">$$NX = \\text{Ekspor} - \\text{Impor}$$</div>
<ul>
  <li>$NX$ — ekspor neto (neraca perdagangan).</li>
  <li><b>Ekspor</b> — nilai barang/jasa produksi domestik yang dijual ke luar negeri.</li>
  <li><b>Impor</b> — nilai barang/jasa produksi luar negeri yang dijual di dalam negeri.</li>
</ul>
<p><b>Pakai</b> untuk mengklasifikasi neraca perdagangan: $NX>0$ surplus, $NX<0$ defisit, $NX=0$ seimbang.</p>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'Open-economy GDP identity', id: 'Identitas PDB perekonomian terbuka' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$Y = C + I + G + NX$$</div>
<ul>
  <li>$Y$ — GDP (total output / income).</li>
  <li>$C$ — consumption · $I$ — investment · $G$ — government purchases.</li>
  <li>$NX$ — net exports (foreign spending on domestic output, net of domestic spending on foreign output).</li>
</ul>
<p><b>Use it</b> as the master accounting identity. Rearranged, $NX = Y - (C+I+G)$: a country has a surplus when it produces more than it spends at home.</p>`,
            id: `<div class="formula">$$Y = C + I + G + NX$$</div>
<ul>
  <li>$Y$ — PDB (total output / pendapatan).</li>
  <li>$C$ — konsumsi · $I$ — investasi · $G$ — belanja pemerintah.</li>
  <li>$NX$ — ekspor neto (belanja luar negeri atas output domestik, dikurangi belanja domestik atas output luar negeri).</li>
</ul>
<p><b>Pakai</b> sebagai identitas akuntansi induk. Disusun ulang, $NX = Y - (C+I+G)$: sebuah negara surplus ketika memproduksi lebih banyak daripada yang dibelanjakan di dalam negeri.</p>`
          }
        }
      ]
    },
    {
      num: '3',
      heading: { en: 'Net capital outflow', id: 'Arus modal keluar neto' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$NCO = \\begin{pmatrix}\\text{foreign assets bought}\\\\\\text{by domestic residents}\\end{pmatrix} - \\begin{pmatrix}\\text{domestic assets bought}\\\\\\text{by foreigners}\\end{pmatrix}$$</div>
<ul>
  <li>$NCO>0$ — net <b>outflow</b> of capital (we buy more of their assets than they buy of ours).</li>
  <li>$NCO<0$ — net <b>inflow</b> of capital (they buy more of our assets than we buy of theirs).</li>
</ul>
<p><b>Use it</b> to track the financial side of every cross-border transaction.</p>`,
            id: `<div class="formula">$$NCO = \\begin{pmatrix}\\text{aset luar negeri dibeli}\\\\\\text{penduduk domestik}\\end{pmatrix} - \\begin{pmatrix}\\text{aset domestik dibeli}\\\\\\text{pihak asing}\\end{pmatrix}$$</div>
<ul>
  <li>$NCO>0$ — arus modal <b>keluar</b> neto (kita membeli aset mereka lebih banyak daripada mereka membeli aset kita).</li>
  <li>$NCO<0$ — arus modal <b>masuk</b> neto (mereka membeli aset kita lebih banyak daripada kita membeli aset mereka).</li>
</ul>
<p><b>Pakai</b> untuk melacak sisi keuangan dari setiap transaksi lintas batas.</p>`
          }
        }
      ]
    },
    {
      num: '4',
      heading: { en: 'The twin identities', id: 'Identitas kembar' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$NX = NCO$$</div>
<div class="formula">$$S = I + NCO$$</div>
<ul>
  <li>$S = Y - C - G$ is national saving.</li>
  <li>The first identity links the goods market to the financial market.</li>
  <li>The second says saving is split between home investment ($I$) and net foreign investment ($NCO$).</li>
</ul>
<p><b>Use them</b> together: $S - I = NX = NCO$. This single chain answers almost every "what happens to NX / NCO / the trade balance" question on the UAS.</p>
<div class="tip">If a question gives you any two of $S$, $I$, $NX$, $NCO$, you can get the rest. Memorize $S - I = NX = NCO$.</div>`,
            id: `<div class="formula">$$NX = NCO$$</div>
<div class="formula">$$S = I + NCO$$</div>
<ul>
  <li>$S = Y - C - G$ adalah tabungan nasional.</li>
  <li>Identitas pertama menghubungkan pasar barang dengan pasar keuangan.</li>
  <li>Identitas kedua menyatakan tabungan terbagi antara investasi dalam negeri ($I$) dan investasi asing neto ($NCO$).</li>
</ul>
<p><b>Pakai</b> bersama: $S - I = NX = NCO$. Rantai tunggal ini menjawab hampir semua pertanyaan "apa yang terjadi pada NX / NCO / neraca perdagangan" di UAS.</p>
<div class="tip">Jika soal memberi dua di antara $S$, $I$, $NX$, $NCO$, kamu bisa mendapatkan sisanya. Hafalkan $S - I = NX = NCO$.</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  graphs: [
    {
      num: '1',
      heading: { en: 'The international flow of goods and capital', id: 'Arus barang dan modal internasional' },
      cards: [
        {
          title: { en: 'Two flows, one balance', id: 'Dua arus, satu keseimbangan' },
          html: {
            en: `<p>Picture the economy facing the rest of the world across two channels. The <b>top channel</b> is goods (net exports); the <b>bottom channel</b> is capital (net capital outflow). The deck's central claim is that these two channels must net to the same amount in opposite-but-matching directions: <b>NX = NCO</b>.</p>
<svg viewBox="0 0 460 230" width="100%" role="img" aria-label="Domestic economy and rest of world linked by a goods flow and a capital flow">
  <rect x="20" y="80" width="120" height="70" rx="8" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="80" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">Domestic</text>
  <text x="80" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">economy</text>
  <rect x="320" y="80" width="120" height="70" rx="8" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="380" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">Rest of</text>
  <text x="380" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">the world</text>
  <!-- goods flow (top) -->
  <line x1="140" y1="55" x2="320" y2="55" stroke="#0e8fb8" stroke-width="2" marker-end="url(#ar7)"/>
  <text x="230" y="42" text-anchor="middle" font-size="12" fill="#0a6f90" font-weight="600">Net exports (goods) — NX</text>
  <!-- capital flow (bottom) -->
  <line x1="140" y1="180" x2="320" y2="180" stroke="#d97706" stroke-width="2" marker-end="url(#ar7b)"/>
  <text x="230" y="205" text-anchor="middle" font-size="12" fill="#b45309" font-weight="600">Net capital outflow — NCO</text>
  <text x="230" y="120" text-anchor="middle" font-size="13" fill="#111827" font-weight="700">NX = NCO</text>
  <defs>
    <marker id="ar7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="ar7b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d97706"/></marker>
  </defs>
</svg>
<div class="note">Read it as: when goods of value $NX$ flow out, claims (assets) of value $NCO$ flow back in the matching amount. The two arrows are two sides of the same transaction.</div>`,
            id: `<p>Bayangkan perekonomian menghadapi dunia melalui dua saluran. <b>Saluran atas</b> adalah barang (ekspor neto); <b>saluran bawah</b> adalah modal (arus modal keluar neto). Klaim inti dari materi ini: kedua saluran ini harus berjumlah neto sama besar dengan arah yang berlawanan tetapi cocok: <b>NX = NCO</b>.</p>
<svg viewBox="0 0 460 230" width="100%" role="img" aria-label="Perekonomian domestik dan dunia dihubungkan oleh arus barang dan arus modal">
  <rect x="20" y="80" width="120" height="70" rx="8" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="80" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">Perekonomian</text>
  <text x="80" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">domestik</text>
  <rect x="320" y="80" width="120" height="70" rx="8" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="380" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">Dunia</text>
  <text x="380" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">luar negeri</text>
  <line x1="140" y1="55" x2="320" y2="55" stroke="#0e8fb8" stroke-width="2" marker-end="url(#ar7id)"/>
  <text x="230" y="42" text-anchor="middle" font-size="12" fill="#0a6f90" font-weight="600">Ekspor neto (barang) — NX</text>
  <line x1="140" y1="180" x2="320" y2="180" stroke="#d97706" stroke-width="2" marker-end="url(#ar7bid)"/>
  <text x="230" y="205" text-anchor="middle" font-size="12" fill="#b45309" font-weight="600">Arus modal keluar neto — NCO</text>
  <text x="230" y="120" text-anchor="middle" font-size="13" fill="#111827" font-weight="700">NX = NCO</text>
  <defs>
    <marker id="ar7id" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="ar7bid" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d97706"/></marker>
  </defs>
</svg>
<div class="note">Baca seperti ini: ketika barang senilai $NX$ mengalir keluar, klaim (aset) senilai $NCO$ mengalir balik dalam jumlah yang cocok. Kedua anak panah adalah dua sisi dari transaksi yang sama.</div>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'Surplus vs. deficit at a glance', id: 'Surplus vs. defisit sekilas' },
      cards: [
        {
          title: { en: 'Which way does capital point?', id: 'Ke mana arah modal?' },
          html: {
            en: `<p>The sign of NX fixes the sign of NCO. Use this two-line map to answer surplus/deficit questions instantly.</p>
<svg viewBox="0 0 460 170" width="100%" role="img" aria-label="Trade surplus sends capital out; trade deficit pulls capital in">
  <!-- surplus row -->
  <text x="20" y="45" font-size="12" font-weight="700" fill="#0a6f90">Surplus (NX &gt; 0)</text>
  <rect x="160" y="28" width="90" height="30" rx="6" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="205" y="48" text-anchor="middle" font-size="11" fill="#0a6f90">Home</text>
  <line x1="250" y1="43" x2="360" y2="43" stroke="#0e8fb8" stroke-width="2" marker-end="url(#s7out)"/>
  <text x="305" y="34" text-anchor="middle" font-size="10" fill="#0a6f90">capital out, NCO &gt; 0</text>
  <rect x="360" y="28" width="80" height="30" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="400" y="48" text-anchor="middle" font-size="11" fill="#374151">World</text>
  <!-- deficit row -->
  <text x="20" y="125" font-size="12" font-weight="700" fill="#b45309">Deficit (NX &lt; 0)</text>
  <rect x="160" y="108" width="90" height="30" rx="6" fill="#fff7ed" stroke="#d97706"/>
  <text x="205" y="128" text-anchor="middle" font-size="11" fill="#b45309">Home</text>
  <line x1="360" y1="123" x2="250" y2="123" stroke="#d97706" stroke-width="2" marker-end="url(#d7in)"/>
  <text x="305" y="114" text-anchor="middle" font-size="10" fill="#b45309">capital in, NCO &lt; 0</text>
  <rect x="360" y="108" width="80" height="30" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="400" y="128" text-anchor="middle" font-size="11" fill="#374151">World</text>
  <defs>
    <marker id="s7out" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="d7in" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d97706"/></marker>
  </defs>
</svg>
<div class="tip">Surplus &rarr; we accumulate foreign assets &rarr; capital out &rarr; $NCO>0$. Deficit &rarr; foreigners accumulate our assets &rarr; capital in &rarr; $NCO<0$.</div>`,
            id: `<p>Tanda NX menentukan tanda NCO. Pakai peta dua baris ini untuk menjawab soal surplus/defisit secara instan.</p>
<svg viewBox="0 0 460 170" width="100%" role="img" aria-label="Surplus perdagangan mengirim modal keluar; defisit perdagangan menarik modal masuk">
  <text x="20" y="45" font-size="12" font-weight="700" fill="#0a6f90">Surplus (NX &gt; 0)</text>
  <rect x="160" y="28" width="90" height="30" rx="6" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="205" y="48" text-anchor="middle" font-size="11" fill="#0a6f90">Domestik</text>
  <line x1="250" y1="43" x2="360" y2="43" stroke="#0e8fb8" stroke-width="2" marker-end="url(#s7outid)"/>
  <text x="305" y="34" text-anchor="middle" font-size="10" fill="#0a6f90">modal keluar, NCO &gt; 0</text>
  <rect x="360" y="28" width="80" height="30" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="400" y="48" text-anchor="middle" font-size="11" fill="#374151">Dunia</text>
  <text x="20" y="125" font-size="12" font-weight="700" fill="#b45309">Defisit (NX &lt; 0)</text>
  <rect x="160" y="108" width="90" height="30" rx="6" fill="#fff7ed" stroke="#d97706"/>
  <text x="205" y="128" text-anchor="middle" font-size="11" fill="#b45309">Domestik</text>
  <line x1="360" y1="123" x2="250" y2="123" stroke="#d97706" stroke-width="2" marker-end="url(#d7inid)"/>
  <text x="305" y="114" text-anchor="middle" font-size="10" fill="#b45309">modal masuk, NCO &lt; 0</text>
  <rect x="360" y="108" width="80" height="30" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="400" y="128" text-anchor="middle" font-size="11" fill="#374151">Dunia</text>
  <defs>
    <marker id="s7outid" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="d7inid" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d97706"/></marker>
  </defs>
</svg>
<div class="tip">Surplus &rarr; kita mengakumulasi aset asing &rarr; modal keluar &rarr; $NCO>0$. Defisit &rarr; pihak asing mengakumulasi aset kita &rarr; modal masuk &rarr; $NCO<0$.</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  quiz: [
    {
      type: 'concept',
      q: {
        en: 'Define net exports (NX) and net capital outflow (NCO), and state the identity that links them.',
        id: 'Definisikan ekspor neto (NX) dan arus modal keluar neto (NCO), serta nyatakan identitas yang menghubungkannya.'
      },
      answer: [
        { en: 'NX = value of exports − value of imports (the trade balance).',
          id: 'NX = nilai ekspor − nilai impor (neraca perdagangan).' },
        { en: 'NCO = foreign assets bought by domestic residents − domestic assets bought by foreigners.',
          id: 'NCO = aset luar negeri yang dibeli penduduk domestik − aset domestik yang dibeli pihak asing.' },
        { en: 'They are always equal: NX = NCO, because every cross-border goods transaction is matched by an equal cross-border asset transaction.',
          id: 'Keduanya selalu sama: NX = NCO, karena setiap transaksi barang lintas batas diimbangi transaksi aset lintas batas yang sama besar.' }
      ],
      tip: {
        en: 'Pair this with S = I + NCO and you have the whole chain: S − I = NX = NCO.',
        id: 'Gabungkan dengan S = I + NCO dan kamu punya seluruh rantainya: S − I = NX = NCO.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'A foreigner opens a factory in Indonesia vs. a foreigner buys shares in an Indonesian company. Which is FDI and which is FPI? In both cases, what happens to Indonesia’s NCO?',
        id: 'Orang asing membuka pabrik di Indonesia vs. orang asing membeli saham perusahaan Indonesia. Mana FDI dan mana FPI? Pada kedua kasus, apa yang terjadi pada NCO Indonesia?'
      },
      answer: [
        { en: 'Opening a factory = Foreign Direct Investment (FDI) — the investor owns and actively manages the asset.',
          id: 'Membuka pabrik = Investasi Asing Langsung (FDI) — investor memiliki dan mengelola langsung aset itu.' },
        { en: 'Buying shares = Foreign Portfolio Investment (FPI) — the investor holds the asset but does not manage it.',
          id: 'Membeli saham = Investasi Portofolio Asing (FPI) — investor memegang aset tetapi tidak mengelolanya.' },
        { en: 'Both are foreigners buying domestic assets, so Indonesia’s NCO falls (more capital inflow).',
          id: 'Keduanya adalah pihak asing membeli aset domestik, sehingga NCO Indonesia turun (arus modal masuk bertambah).' }
      ]
    },
    {
      type: 'scenario',
      q: {
        en: 'What happens to U.S. net exports if (A) Canada falls into a recession, (B) U.S. consumers patriotically buy more "Made in the U.S.A." goods, and (C) prices of Mexican goods rise faster than U.S. prices?',
        id: 'Apa yang terjadi pada ekspor neto AS jika (A) Kanada mengalami resesi, (B) konsumen AS membeli lebih banyak barang "Made in the U.S.A." karena patriotik, dan (C) harga barang Meksiko naik lebih cepat daripada harga barang AS?'
      },
      answer: [
        { en: '(A) Falling Canadian incomes mean Canadians buy fewer U.S. exports → U.S. exports fall → U.S. NX falls.',
          id: '(A) Pendapatan Kanada turun, sehingga warga Kanada membeli lebih sedikit ekspor AS → ekspor AS turun → NX AS turun.' },
        { en: '(B) Buying domestic substitutes for imports → U.S. imports fall → U.S. NX rises.',
          id: '(B) Membeli produk domestik menggantikan impor → impor AS turun → NX AS naik.' },
        { en: '(C) U.S. goods become relatively cheaper/more attractive → exports to Mexico rise and imports from Mexico fall → U.S. NX rises.',
          id: '(C) Barang AS menjadi relatif lebih murah/lebih menarik → ekspor ke Meksiko naik dan impor dari Meksiko turun → NX AS naik.' }
      ],
      tip: {
        en: 'Three classic NX drivers: foreign income, tastes, and relative prices.',
        id: 'Tiga penggerak klasik NX: pendapatan luar negeri, selera, dan harga relatif.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'Kiara (U.S.) sells a website to Gabrielle (Germany) for 5,000 euros. For each case, what happens to U.S. NX and NCO? (A) Kiara keeps the 5,000 euros, (B) she buys 5,000 euros of German stocks, (C) she spends the 5,000 euros on German shoes.',
        id: 'Kiara (AS) menjual situs web kepada Gabrielle (Jerman) seharga 5.000 euro. Untuk tiap kasus, apa yang terjadi pada NX dan NCO AS? (A) Kiara menyimpan 5.000 euro, (B) ia membeli saham Jerman senilai 5.000 euro, (C) ia membelanjakan 5.000 euro untuk sepatu Jerman.'
      },
      context: {
        en: 'The website sale is a U.S. export, so U.S. exports rise by 5,000 euros in every case. Then track what Kiara does with the euros.',
        id: 'Penjualan situs web adalah ekspor AS, sehingga ekspor AS naik 5.000 euro di setiap kasus. Lalu telusuri apa yang Kiara lakukan dengan euro tersebut.'
      },
      answer: [
        { en: '(A) Keeping the euros = a domestic resident now holds a foreign asset (euros) → NX rises (+5,000) and NCO rises (+5,000).',
          id: '(A) Menyimpan euro = penduduk domestik kini memegang aset asing (euro) → NX naik (+5.000) dan NCO naik (+5.000).' },
        { en: '(B) Buying German stocks is also acquiring a foreign asset → NX rises (+5,000) and NCO rises (+5,000). (Same as A.)',
          id: '(B) Membeli saham Jerman juga memperoleh aset asing → NX naik (+5.000) dan NCO naik (+5.000). (Sama seperti A.)' },
        { en: '(C) Buying German shoes is a U.S. import (+5,000): exports +5,000 and imports +5,000 cancel → NX unchanged and NCO unchanged.',
          id: '(C) Membeli sepatu Jerman adalah impor AS (+5.000): ekspor +5.000 dan impor +5.000 saling meniadakan → NX tidak berubah dan NCO tidak berubah.' }
      ],
      tip: {
        en: 'Whatever happens, the change in NX always equals the change in NCO.',
        id: 'Apa pun yang terjadi, perubahan NX selalu sama dengan perubahan NCO.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'Amazon U.S. buys $10,000,000 of goods from China. What happens to U.S. NX and NCO if (A) China buys $10m of U.S. government bonds, and (B) China instead buys $10m of goods from the U.S.?',
        id: 'Amazon AS membeli barang senilai $10.000.000 dari Tiongkok. Apa yang terjadi pada NX dan NCO AS jika (A) Tiongkok membeli obligasi pemerintah AS senilai $10 juta, dan (B) Tiongkok justru membeli barang senilai $10 juta dari AS?'
      },
      context: {
        en: 'The purchase from China is a U.S. import, so U.S. imports rise by $10m and NX falls by $10m to start.',
        id: 'Pembelian dari Tiongkok adalah impor AS, sehingga impor AS naik $10 juta dan NX mula-mula turun $10 juta.'
      },
      answer: [
        { en: '(A) China buying U.S. bonds = foreigners buying domestic assets → U.S. NCO falls by $10m. NX is down $10m, NCO is down $10m: identity holds.',
          id: '(A) Tiongkok membeli obligasi AS = pihak asing membeli aset domestik → NCO AS turun $10 juta. NX turun $10 juta, NCO turun $10 juta: identitas terpenuhi.' },
        { en: '(B) China buying U.S. goods is a U.S. export (+$10m): exports +$10m offset imports +$10m → NX unchanged and NCO unchanged.',
          id: '(B) Tiongkok membeli barang AS adalah ekspor AS (+$10 juta): ekspor +$10 juta mengimbangi impor +$10 juta → NX tidak berubah dan NCO tidak berubah.' }
      ]
    },
    {
      type: 'concept',
      q: {
        en: 'Which statement about a country running a trade deficit is NOT true? (a) Exports < imports; (b) NCO < 0; (c) Investment < saving; (d) Y < C + I + G.',
        id: 'Pernyataan mana tentang negara yang mengalami defisit perdagangan yang TIDAK benar? (a) Ekspor < impor; (b) NCO < 0; (c) Investasi < tabungan; (d) Y < C + I + G.'
      },
      answer: [
        { en: 'A trade deficit means NX < 0, so exports < imports (a is true) and Y < C + I + G (d is true, since NX = Y − (C+I+G) < 0).',
          id: 'Defisit perdagangan berarti NX < 0, sehingga ekspor < impor (a benar) dan Y < C + I + G (d benar, karena NX = Y − (C+I+G) < 0).' },
        { en: 'NX = NCO, so NX < 0 implies NCO < 0 (b is true).',
          id: 'NX = NCO, sehingga NX < 0 berarti NCO < 0 (b benar).' },
        { en: 'Since NX = S − I, a deficit (NX < 0) means S < I, i.e. investment > saving — the opposite of (c). So (c) "Investment < saving" is the statement that is NOT true.',
          id: 'Karena NX = S − I, defisit (NX < 0) berarti S < I, yaitu investasi > tabungan — kebalikan dari (c). Jadi (c) "Investasi < tabungan" adalah pernyataan yang TIDAK benar.' },
        { en: 'Answer: (c).', id: 'Jawaban: (c).' }
      ],
      tip: {
        en: 'Lean on S − I = NX = NCO. A deficit flips every sign together: NX < 0, NCO < 0, and S < I.',
        id: 'Andalkan S − I = NX = NCO. Defisit membalik semua tanda bersamaan: NX < 0, NCO < 0, dan S < I.'
      }
    }
  ]
};
