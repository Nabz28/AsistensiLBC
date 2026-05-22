/* ============================================================================
   EKINTER — Meeting 10 · Balance of Payments (BoP) & data
   Bilingual (EN + ID). Registers itself on window.EKINTER_WEEKS.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   Source: lecturer deck (krisna.or.id/intecon/meeting10) + KOM/FT BoP theory.
   ============================================================================ */
window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};
window.EKINTER_WEEKS.m10 = {
  id: 'm10',
  label: { en: 'Meeting 10', id: 'Pertemuan 10' },
  title: {
    en: 'Balance of Payments & Data',
    id: 'Neraca Pembayaran & Data'
  },
  subtitle: {
    en: 'How a country records every transaction with the rest of the world — and why the books always balance.',
    id: 'Bagaimana sebuah negara mencatat setiap transaksi dengan dunia luar — dan mengapa bukunya selalu seimbang.'
  },

  /* ----------------------------------------------------------------------- */
  notes: [
    {
      num: '1',
      heading: { en: 'What the BoP records & double-entry', id: 'Apa yang dicatat NP & pembukuan ganda' },
      cards: [
        {
          title: { en: 'The balance of payments, in one sentence', id: 'Neraca pembayaran dalam satu kalimat' },
          html: {
            en: `<p>The <span class="key">balance of payments (BoP)</span> is a systematic record of <b>all economic transactions</b> between residents of a country and the rest of the world over a period (usually a quarter or a year).</p>
<p>It is built from <b>four blocks</b>:</p>
<ul>
  <li><span class="key">Current account (CA)</span> — trade in goods and services, plus primary and secondary income.</li>
  <li><span class="key">Capital account</span> — a small block: non-produced, non-financial assets (e.g. copyrights, trademarks) and debt forgiveness.</li>
  <li><span class="key">Financial account</span> — trade in assets: FDI, portfolio investment, loans and bonds.</li>
  <li><span class="key">Official reserves</span> — the central bank's foreign-exchange reserves, the balancing item.</li>
</ul>
<div class="note">The move from the earlier "real" trade models to the BoP is the move from <i>barter</i> to <i>money</i>: now we track not just goods crossing the border but the payments and asset claims that cross back.</div>`,
            id: `<p><span class="key">Neraca pembayaran (NP)</span> adalah catatan sistematis atas <b>seluruh transaksi ekonomi</b> antara penduduk suatu negara dan dunia luar selama satu periode (biasanya satu kuartal atau satu tahun).</p>
<p>Ia disusun dari <b>empat blok</b>:</p>
<ul>
  <li><span class="key">Transaksi berjalan (CA)</span> — perdagangan barang dan jasa, ditambah pendapatan primer dan sekunder.</li>
  <li><span class="key">Neraca modal (capital account)</span> — blok kecil: aset non-produksi & non-finansial (mis. hak cipta, merek dagang) dan penghapusan utang.</li>
  <li><span class="key">Neraca finansial</span> — perdagangan aset: FDI, investasi portofolio, pinjaman, dan obligasi.</li>
  <li><span class="key">Cadangan resmi</span> — cadangan devisa bank sentral, pos penyeimbang.</li>
</ul>
<div class="note">Peralihan dari model perdagangan "riil" sebelumnya ke NP adalah peralihan dari <i>barter</i> ke <i>uang</i>: kini kita melacak bukan hanya barang yang melintasi batas tetapi juga pembayaran dan klaim aset yang melintas balik.</div>`
          }
        },
        {
          title: { en: 'Double-entry: every transaction is recorded twice', id: 'Pembukuan ganda: setiap transaksi dicatat dua kali' },
          html: {
            en: `<p>The BoP uses <span class="key">double-entry bookkeeping</span>. Every transaction creates one <b>credit (+)</b> and one matching <b>debit (−)</b> of equal size, so by construction the full BoP sums to zero.</p>
<table>
  <tr><th></th><th>Credit (+)</th><th>Debit (−)</th></tr>
  <tr><td><b>Goods / services</b></td><td>Exports (we sell abroad)</td><td>Imports (we buy abroad)</td></tr>
  <tr><td><b>Income</b></td><td>Income received from abroad</td><td>Income paid to foreigners</td></tr>
  <tr><td><b>Assets (financial acct.)</b></td><td>Foreigners buy our assets / we sell foreign assets (inflow)</td><td>We buy foreign assets (outflow)</td></tr>
</table>
<div class="tip">Memory hook: a <b>credit</b> is anything that brings <b>money in</b> (exports, income received, capital inflows). A <b>debit</b> is anything that sends <b>money out</b> (imports, income paid, capital outflows).</div>`,
            id: `<p>NP memakai <span class="key">pembukuan berpasangan (double-entry)</span>. Setiap transaksi menciptakan satu <b>kredit (+)</b> dan satu <b>debit (−)</b> yang besarnya sama, sehingga secara konstruksi seluruh NP berjumlah nol.</p>
<table>
  <tr><th></th><th>Kredit (+)</th><th>Debit (−)</th></tr>
  <tr><td><b>Barang / jasa</b></td><td>Ekspor (kita menjual ke luar)</td><td>Impor (kita membeli dari luar)</td></tr>
  <tr><td><b>Pendapatan</b></td><td>Pendapatan diterima dari luar negeri</td><td>Pendapatan dibayar ke pihak asing</td></tr>
  <tr><td><b>Aset (neraca finansial)</b></td><td>Asing membeli aset kita / kita menjual aset asing (arus masuk)</td><td>Kita membeli aset asing (arus keluar)</td></tr>
</table>
<div class="tip">Jembatan ingatan: <b>kredit</b> adalah apa pun yang memasukkan <b>uang masuk</b> (ekspor, pendapatan diterima, arus modal masuk). <b>Debit</b> adalah apa pun yang mengeluarkan <b>uang keluar</b> (impor, pendapatan dibayar, arus modal keluar).</div>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'The current account & its components', id: 'Transaksi berjalan & komponennya' },
      cards: [
        {
          title: { en: 'Four components of the CA', id: 'Empat komponen CA' },
          html: {
            en: `<p>The <span class="key">current account (CA)</span> records flows of goods, services and income — things that do <b>not</b> create a future financial claim. It is the broad cousin of net exports.</p>
<table>
  <tr><th>Component</th><th>What it is</th></tr>
  <tr><td><b>Goods</b> (the trade balance)</td><td>Exports − imports of merchandise (the largest, most-watched part).</td></tr>
  <tr><td><b>Services</b></td><td>Tourism, transport, insurance, IT, royalties for use of services.</td></tr>
  <tr><td><b>Primary income</b></td><td>Interest, dividends, profits and wages earned across borders.</td></tr>
  <tr><td><b>Secondary income</b></td><td>Transfers with nothing given back: remittances, foreign aid, gifts.</td></tr>
</table>
<div class="formula">$$CA = (X - M)_{\\text{goods}} + (X - M)_{\\text{services}} + \\text{net income} + \\text{net transfers}$$</div>`,
            id: `<p><span class="key">Transaksi berjalan (CA)</span> mencatat arus barang, jasa, dan pendapatan — hal-hal yang <b>tidak</b> menciptakan klaim finansial di masa depan. Ia adalah sepupu luas dari ekspor neto.</p>
<table>
  <tr><th>Komponen</th><th>Isinya</th></tr>
  <tr><td><b>Barang</b> (neraca perdagangan)</td><td>Ekspor − impor barang dagangan (bagian terbesar dan paling diawasi).</td></tr>
  <tr><td><b>Jasa</b></td><td>Pariwisata, transportasi, asuransi, TI, royalti atas penggunaan jasa.</td></tr>
  <tr><td><b>Pendapatan primer</b></td><td>Bunga, dividen, laba, dan upah yang diperoleh lintas batas.</td></tr>
  <tr><td><b>Pendapatan sekunder</b></td><td>Transfer tanpa imbalan: remitansi, bantuan luar negeri, hibah.</td></tr>
</table>
<div class="formula">$$CA = (X - M)_{\\text{barang}} + (X - M)_{\\text{jasa}} + \\text{pendapatan neto} + \\text{transfer neto}$$</div>`
          }
        },
        {
          title: { en: 'Surplus, deficit, and signs', id: 'Surplus, defisit, dan tanda' },
          html: {
            en: `<table>
  <tr><th>Condition</th><th>Name</th><th>Meaning</th></tr>
  <tr><td>$CA > 0$</td><td><span class="key">CA surplus</span></td><td>Credits exceed debits — the country is a net <b>lender</b> to the world.</td></tr>
  <tr><td>$CA < 0$</td><td><span class="key">CA deficit</span></td><td>Debits exceed credits — the country is a net <b>borrower</b> from the world.</td></tr>
</table>
<p>Recording convention inside the CA: <b>exports = credit (+)</b>, <b>imports = debit (−)</b>; income <b>received</b> is a credit, income <b>paid</b> is a debit.</p>
<div class="note">Globally, all current accounts must sum to (about) zero: one country's surplus is another country's deficit. There can be net lenders and net borrowers, but not everyone can run a surplus at once.</div>`,
            id: `<table>
  <tr><th>Kondisi</th><th>Nama</th><th>Arti</th></tr>
  <tr><td>$CA > 0$</td><td><span class="key">Surplus CA</span></td><td>Kredit melebihi debit — negara menjadi <b>kreditur</b> neto bagi dunia.</td></tr>
  <tr><td>$CA < 0$</td><td><span class="key">Defisit CA</span></td><td>Debit melebihi kredit — negara menjadi <b>peminjam</b> neto dari dunia.</td></tr>
</table>
<p>Konvensi pencatatan dalam CA: <b>ekspor = kredit (+)</b>, <b>impor = debit (−)</b>; pendapatan yang <b>diterima</b> adalah kredit, pendapatan yang <b>dibayar</b> adalah debit.</p>
<div class="note">Secara global, seluruh transaksi berjalan harus berjumlah (kira-kira) nol: surplus satu negara adalah defisit negara lain. Boleh ada kreditur neto dan peminjam neto, tetapi tidak semua negara bisa surplus sekaligus.</div>`
          }
        }
      ]
    },
    {
      num: '3',
      heading: { en: 'Financial account & official reserves', id: 'Neraca finansial & cadangan resmi' },
      cards: [
        {
          title: { en: 'The financial account: trade in assets', id: 'Neraca finansial: perdagangan aset' },
          html: {
            en: `<p>The <span class="key">financial account</span> records cross-border purchases and sales of <b>assets</b>: foreign direct investment (FDI), portfolio investment (stocks and bonds), and loans.</p>
<table>
  <tr><th>Flow</th><th>Recorded as</th></tr>
  <tr><td>Domestic residents buy foreign assets (capital <b>outflow</b>)</td><td>Debit (−)</td></tr>
  <tr><td>Foreigners buy domestic assets (capital <b>inflow</b>)</td><td>Credit (+)</td></tr>
</table>
<p>A small fourth block, the <span class="key">capital account</span>, sits beside it for non-produced/non-financial items (patents, debt forgiveness). Its magnitudes are usually negligible, so in practice the action is in the CA, the financial account, and reserves.</p>
<div class="tip">Watch the sign convention. In the standard presentation, the CA and the financial account are <b>mirror images</b>: a CA deficit is financed by a financial-account surplus (capital flowing in).</div>`,
            id: `<p><span class="key">Neraca finansial</span> mencatat pembelian dan penjualan <b>aset</b> lintas batas: investasi asing langsung (FDI), investasi portofolio (saham dan obligasi), dan pinjaman.</p>
<table>
  <tr><th>Arus</th><th>Dicatat sebagai</th></tr>
  <tr><td>Penduduk domestik membeli aset asing (arus modal <b>keluar</b>)</td><td>Debit (−)</td></tr>
  <tr><td>Pihak asing membeli aset domestik (arus modal <b>masuk</b>)</td><td>Kredit (+)</td></tr>
</table>
<p>Blok keempat yang kecil, <span class="key">neraca modal (capital account)</span>, berada di sampingnya untuk pos non-produksi/non-finansial (paten, penghapusan utang). Besarannya biasanya dapat diabaikan, sehingga dalam praktik aksinya ada di CA, neraca finansial, dan cadangan.</p>
<div class="tip">Perhatikan konvensi tanda. Dalam penyajian standar, CA dan neraca finansial adalah <b>cerminan</b> satu sama lain: defisit CA dibiayai oleh surplus neraca finansial (modal mengalir masuk).</div>`
          }
        },
        {
          title: { en: 'Official reserves: the balancing item', id: 'Cadangan resmi: pos penyeimbang' },
          html: {
            en: `<p><span class="key">Official foreign-exchange reserves</span> are the central bank's holdings of foreign assets (dollars, gold, foreign bonds). The central bank buys and sells them to <b>intervene</b> in the FX market — adjusting the money supply and the value of the domestic currency.</p>
<ul>
  <li>If the rest of the BoP would leave an <b>excess of credits</b> (a "surplus"), the central bank can <b>accumulate reserves</b> (a debit-side use of funds) to balance the books.</li>
  <li>If the rest of the BoP leaves an <b>excess of debits</b> (a "deficit"), the central bank <b>runs down reserves</b> to fill the gap.</li>
</ul>
<div class="note">Reserves are exactly why the <i>overall</i> BoP always balances: any imbalance in the CA and the (non-reserve) financial account is offset by a change in official reserves.</div>`,
            id: `<p><span class="key">Cadangan devisa resmi</span> adalah kepemilikan aset asing oleh bank sentral (dolar, emas, obligasi asing). Bank sentral membeli dan menjualnya untuk <b>mengintervensi</b> pasar valas — menyesuaikan jumlah uang beredar dan nilai mata uang domestik.</p>
<ul>
  <li>Jika sisa NP menyisakan <b>kelebihan kredit</b> ("surplus"), bank sentral dapat <b>menambah cadangan</b> (penggunaan dana sisi debit) untuk menyeimbangkan buku.</li>
  <li>Jika sisa NP menyisakan <b>kelebihan debit</b> ("defisit"), bank sentral <b>mengurangi cadangan</b> untuk menutup celah.</li>
</ul>
<div class="note">Cadangan inilah alasan NP <i>keseluruhan</i> selalu seimbang: setiap ketidakseimbangan di CA dan neraca finansial (non-cadangan) diimbangi oleh perubahan cadangan resmi.</div>`
          }
        }
      ]
    },
    {
      num: '4',
      heading: { en: 'The identities: CA + KA + FA = 0 and CA = S − I', id: 'Identitas: CA + KA + FA = 0 dan CA = S − I' },
      cards: [
        {
          title: { en: 'The BoP identity', id: 'Identitas NP' },
          html: {
            en: `<p>Because of double-entry recording, the full BoP sums to zero:</p>
<div class="formula">$$\\underbrace{CA}_{\\text{current}} + \\underbrace{KA}_{\\text{capital}} + \\underbrace{FA}_{\\text{financial}} = 0$$</div>
<p>where the financial account $FA$ <b>includes the change in official reserves</b>. Ignoring the tiny capital account and statistical errors, this collapses to the headline mirror image:</p>
<div class="formula">$$CA \\approx -\\,FA \\quad\\Longrightarrow\\quad \\text{CA surplus} \\equiv \\text{net capital outflow}$$</div>
<ul>
  <li><b>CA surplus</b> $\\Rightarrow$ the country lends abroad / accumulates foreign assets (financial-account/reserves outflow).</li>
  <li><b>CA deficit</b> $\\Rightarrow$ the country borrows from abroad / sells assets (financial-account inflow).</li>
</ul>`,
            id: `<p>Karena pencatatan berpasangan, seluruh NP berjumlah nol:</p>
<div class="formula">$$\\underbrace{CA}_{\\text{berjalan}} + \\underbrace{KA}_{\\text{modal}} + \\underbrace{FA}_{\\text{finansial}} = 0$$</div>
<p>di mana neraca finansial $FA$ <b>mencakup perubahan cadangan resmi</b>. Mengabaikan neraca modal yang kecil dan selisih statistik, ini menyusut menjadi cerminan utama:</p>
<div class="formula">$$CA \\approx -\\,FA \\quad\\Longrightarrow\\quad \\text{surplus CA} \\equiv \\text{arus modal keluar neto}$$</div>
<ul>
  <li><b>Surplus CA</b> $\\Rightarrow$ negara meminjamkan ke luar negeri / mengakumulasi aset asing (arus keluar neraca finansial/cadangan).</li>
  <li><b>Defisit CA</b> $\\Rightarrow$ negara meminjam dari luar negeri / menjual aset (arus masuk neraca finansial).</li>
</ul>`
          }
        },
        {
          title: { en: 'CA = S − I = NX = NCO', id: 'CA = S − I = NX = NCO' },
          html: {
            en: `<p>Start from the open-economy national-income identity and rearrange. With national saving $S = Y - C - G$:</p>
<div class="formula">$$Y = C + I + G + NX \\;\\Longrightarrow\\; S - I = NX = CA$$</div>
<p>The current account equals the gap between what a country <b>saves</b> and what it <b>invests at home</b>, and it also equals net capital outflow:</p>
<div class="formula">$$CA = S - I = NX = NCO$$</div>
<p><b>What a deficit means.</b> $CA < 0$ means $S < I$: the country invests more than it saves, so it must import the difference in saving from abroad — i.e. borrow / sell assets. A deficit is <i>not</i> "money disappearing"; it is financed by capital inflows.</p>
<div class="note">This is the bridge from the accounting (BoP) to the macro story: a current-account deficit is a saving–investment gap, and it is exactly mirrored by the financial account.</div>`,
            id: `<p>Mulai dari identitas pendapatan-nasional perekonomian terbuka lalu susun ulang. Dengan tabungan nasional $S = Y - C - G$:</p>
<div class="formula">$$Y = C + I + G + NX \\;\\Longrightarrow\\; S - I = NX = CA$$</div>
<p>Transaksi berjalan sama dengan selisih antara yang <b>ditabung</b> negara dan yang <b>diinvestasikan di dalam negeri</b>, dan juga sama dengan arus modal keluar neto:</p>
<div class="formula">$$CA = S - I = NX = NCO$$</div>
<p><b>Arti sebuah defisit.</b> $CA < 0$ berarti $S < I$: negara berinvestasi lebih banyak daripada yang ditabung, sehingga harus mengimpor selisih tabungan dari luar negeri — yaitu meminjam / menjual aset. Defisit <i>bukan</i> "uang yang lenyap"; ia dibiayai arus modal masuk.</p>
<div class="note">Inilah jembatan dari akuntansi (NP) ke cerita makro: defisit transaksi berjalan adalah celah tabungan–investasi, dan persis dicerminkan oleh neraca finansial.</div>`
          }
        }
      ]
    },
    {
      num: '5',
      heading: { en: "Reading Indonesia's BoP", id: 'Membaca NP Indonesia' },
      cards: [
        {
          title: { en: 'A stylised Indonesian BoP', id: 'NP Indonesia yang disederhanakan' },
          html: {
            en: `<p>Read a real BoP top-to-bottom: the CA blocks first, then the financial account, then the change in reserves that makes it balance. Illustrative figures (USD bn):</p>
<table>
  <tr><th>Item</th><th>Balance</th><th>Reading</th></tr>
  <tr><td>Goods (trade balance)</td><td>+30</td><td>Strong commodity exports → credit.</td></tr>
  <tr><td>Services</td><td>−18</td><td>Net importer of freight, travel, IT → debit.</td></tr>
  <tr><td>Primary income</td><td>−35</td><td>Profits/dividends paid to foreign investors (FDI repatriation) → big debit.</td></tr>
  <tr><td>Secondary income</td><td>+8</td><td>Worker remittances → credit.</td></tr>
  <tr><td><b>Current account (CA)</b></td><td><b>−15</b></td><td><b>Deficit</b> — must be financed.</td></tr>
  <tr><td>Financial account</td><td>+17</td><td>FDI + portfolio inflows → capital in.</td></tr>
  <tr><td>Change in reserves</td><td>−2</td><td>Reserves rise by 2 (a debit use of funds) to balance.</td></tr>
  <tr><td><b>Overall BoP</b></td><td><b>0</b></td><td>By construction.</td></tr>
</table>`,
            id: `<p>Baca NP nyata dari atas ke bawah: blok CA dahulu, lalu neraca finansial, lalu perubahan cadangan yang membuatnya seimbang. Angka ilustratif (miliar USD):</p>
<table>
  <tr><th>Pos</th><th>Saldo</th><th>Cara baca</th></tr>
  <tr><td>Barang (neraca perdagangan)</td><td>+30</td><td>Ekspor komoditas kuat → kredit.</td></tr>
  <tr><td>Jasa</td><td>−18</td><td>Importir neto angkutan, perjalanan, TI → debit.</td></tr>
  <tr><td>Pendapatan primer</td><td>−35</td><td>Laba/dividen dibayar ke investor asing (repatriasi FDI) → debit besar.</td></tr>
  <tr><td>Pendapatan sekunder</td><td>+8</td><td>Remitansi pekerja → kredit.</td></tr>
  <tr><td><b>Transaksi berjalan (CA)</b></td><td><b>−15</b></td><td><b>Defisit</b> — harus dibiayai.</td></tr>
  <tr><td>Neraca finansial</td><td>+17</td><td>Arus masuk FDI + portofolio → modal masuk.</td></tr>
  <tr><td>Perubahan cadangan</td><td>−2</td><td>Cadangan naik 2 (penggunaan dana sisi debit) untuk menyeimbangkan.</td></tr>
  <tr><td><b>NP keseluruhan</b></td><td><b>0</b></td><td>Secara konstruksi.</td></tr>
</table>`
          }
        },
        {
          title: { en: "Indonesia's structural story", id: 'Cerita struktural Indonesia' },
          html: {
            en: `<p>Two patterns recur in Indonesia's BoP, both visible in the deck:</p>
<ul>
  <li><b>Primary-income drag.</b> Indonesia's CA deficit is increasingly driven by the <span class="key">primary-income deficit</span>: foreign investors repatriate profits and dividends from FDI in Indonesia, a persistent debit even when the trade balance is positive.</li>
  <li><b>Commodity dependence.</b> The goods balance swings with commodity prices (coal, palm oil, nickel), so the CA is structurally <b>vulnerable</b> to terms-of-trade shocks.</li>
</ul>
<div class="tip">When you read a country's CA deficit, always ask <i>which block</i> drives it. For Indonesia, "trade is fine but income is a drag" is the headline — a different policy problem than a goods-import boom.</div>`,
            id: `<p>Dua pola berulang dalam NP Indonesia, keduanya terlihat di materi:</p>
<ul>
  <li><b>Beban pendapatan primer.</b> Defisit CA Indonesia makin digerakkan oleh <span class="key">defisit pendapatan primer</span>: investor asing merepatriasi laba dan dividen dari FDI di Indonesia, sebuah debit yang persisten bahkan ketika neraca perdagangan positif.</li>
  <li><b>Ketergantungan komoditas.</b> Neraca barang berayun mengikuti harga komoditas (batu bara, minyak sawit, nikel), sehingga CA secara struktural <b>rentan</b> terhadap guncangan nilai tukar perdagangan.</li>
</ul>
<div class="tip">Saat membaca defisit CA suatu negara, selalu tanyakan <i>blok mana</i> penggeraknya. Untuk Indonesia, "perdagangan baik-baik saja tetapi pendapatan jadi beban" adalah judulnya — masalah kebijakan yang berbeda dari lonjakan impor barang.</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  formulas: [
    {
      num: '1',
      heading: { en: 'The BoP identity', id: 'Identitas NP' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$CA + KA + FA = 0$$</div>
<ul>
  <li>$CA$ — current account (goods, services, primary & secondary income).</li>
  <li>$KA$ — capital account (small: non-produced/non-financial assets, debt forgiveness).</li>
  <li>$FA$ — financial account, <b>including the change in official reserves</b>.</li>
</ul>
<p><b>Use it</b> as the master rule: double-entry forces the full BoP to zero. Dropping the tiny $KA$ gives the working mirror image $CA \\approx -FA$.</p>`,
            id: `<div class="formula">$$CA + KA + FA = 0$$</div>
<ul>
  <li>$CA$ — transaksi berjalan (barang, jasa, pendapatan primer & sekunder).</li>
  <li>$KA$ — neraca modal (kecil: aset non-produksi/non-finansial, penghapusan utang).</li>
  <li>$FA$ — neraca finansial, <b>termasuk perubahan cadangan resmi</b>.</li>
</ul>
<p><b>Pakai</b> sebagai aturan induk: pembukuan ganda memaksa seluruh NP menjadi nol. Mengabaikan $KA$ yang kecil menghasilkan cerminan kerja $CA \\approx -FA$.</p>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'Current account = saving − investment', id: 'Transaksi berjalan = tabungan − investasi' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$CA = S - I = NX = NCO$$</div>
<ul>
  <li>$S = Y - C - G$ — national saving · $I$ — domestic investment.</li>
  <li>$NX$ — net exports (the trade balance) · $NCO$ — net capital outflow.</li>
</ul>
<p><b>Use it</b> as the bridge from accounting to macro: a CA deficit ($CA<0$) means $S<I$ — the country invests more than it saves and borrows the difference from abroad.</p>
<div class="tip">If a question gives you any two of $S$, $I$, $CA$, you can get the third. $CA = S - I$ is the workhorse.</div>`,
            id: `<div class="formula">$$CA = S - I = NX = NCO$$</div>
<ul>
  <li>$S = Y - C - G$ — tabungan nasional · $I$ — investasi domestik.</li>
  <li>$NX$ — ekspor neto (neraca perdagangan) · $NCO$ — arus modal keluar neto.</li>
</ul>
<p><b>Pakai</b> sebagai jembatan dari akuntansi ke makro: defisit CA ($CA<0$) berarti $S<I$ — negara berinvestasi lebih banyak daripada yang ditabung dan meminjam selisihnya dari luar negeri.</p>
<div class="tip">Jika soal memberi dua di antara $S$, $I$, $CA$, kamu bisa mendapatkan yang ketiga. $CA = S - I$ adalah andalannya.</div>`
          }
        }
      ]
    },
    {
      num: '3',
      heading: { en: 'Current account = net exports + net income', id: 'Transaksi berjalan = ekspor neto + pendapatan neto' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$CA = NX + \\text{net income} + \\text{net transfers}$$</div>
<ul>
  <li>$NX$ — net exports of goods <i>and</i> services.</li>
  <li><b>Net income</b> — primary income: interest, dividends, profits, wages received minus paid.</li>
  <li><b>Net transfers</b> — secondary income: remittances and aid received minus paid.</li>
</ul>
<p><b>Use it</b> to remember the CA is broader than the trade balance. For Indonesia the <b>net-income</b> term is the swing factor — FDI profit repatriation makes it negative.</p>`,
            id: `<div class="formula">$$CA = NX + \\text{pendapatan neto} + \\text{transfer neto}$$</div>
<ul>
  <li>$NX$ — ekspor neto barang <i>dan</i> jasa.</li>
  <li><b>Pendapatan neto</b> — pendapatan primer: bunga, dividen, laba, upah diterima dikurangi dibayar.</li>
  <li><b>Transfer neto</b> — pendapatan sekunder: remitansi dan bantuan diterima dikurangi dibayar.</li>
</ul>
<p><b>Pakai</b> untuk mengingat CA lebih luas daripada neraca perdagangan. Bagi Indonesia, suku <b>pendapatan neto</b> adalah faktor ayun — repatriasi laba FDI membuatnya negatif.</p>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  graphs: [
    {
      num: 'G',
      heading: { en: 'Reading the identities off a chart', id: 'Membaca identitas dari grafik' },
      cards: [
        {
          title: { en: 'CA = S − I (the saving–investment gap)', id: 'CA = S − I (celah tabungan–investasi)' },
          html: {
            en: `<p><span class="key">Read it:</span> compare national saving $S$ with domestic investment $I$. The gap <b>is</b> the current account: $CA = S - I = NX = NCO$.</p>`,
            id: `<p><span class="key">Cara baca:</span> bandingkan tabungan nasional $S$ dengan investasi domestik $I$. Celahnya <b>adalah</b> transaksi berjalan: $CA = S - I = NX = NCO$.</p>`
          },
          chart: {
            kind: 'bars', w: 440, h: 290, yMax: 10,
            bars: [
              { label: 'S', value: 7, color: '#0e8fb8', caption: 'national saving' },
              { label: 'I', value: 5, color: '#d98a16', caption: 'domestic investment' }
            ],
            gap: { from: 0, to: 1, label: 'CA = S − I > 0', color: '#15803d' }
          },
          htmlAfter: {
            en: `<div class="tip">$S > I \\Rightarrow CA > 0$: a current-account <b>surplus</b> and net capital outflow — the country lends abroad. If $S < I$ the bars flip and $CA < 0$: a deficit financed by capital inflows.</div>`,
            id: `<div class="tip">$S > I \\Rightarrow CA > 0$: <b>surplus</b> transaksi berjalan dan arus modal keluar neto — negara meminjamkan ke luar negeri. Jika $S < I$ batangnya terbalik dan $CA < 0$: defisit yang dibiayai arus modal masuk.</div>`
          }
        },
        {
          title: { en: 'CA and the financial account are mirror images', id: 'CA dan neraca finansial saling mencerminkan' },
          html: {
            en: `<p><span class="key">Read it:</span> the BoP identity $CA + FA = 0$ means a current-account <b>deficit</b> is matched, dollar-for-dollar, by a financial-account <b>surplus</b> (capital flowing in to finance it).</p>`,
            id: `<p><span class="key">Cara baca:</span> identitas NP $CA + FA = 0$ berarti <b>defisit</b> transaksi berjalan diimbangi, dolar demi dolar, oleh <b>surplus</b> neraca finansial (modal mengalir masuk untuk membiayainya).</p>`
          },
          chart: {
            kind: 'bars', w: 440, h: 290, yMax: 24,
            bars: [
              { label: 'CA', value: 15, color: '#d98a16', caption: 'deficit (−15)' },
              { label: 'FA', value: 15, color: '#0e8fb8', caption: 'surplus (+15)' }
            ],
            gap: { from: 0, to: 1, label: 'CA + FA = 0', color: '#15803d' }
          },
          htmlAfter: {
            en: `<div class="tip">Equal heights, opposite signs: $-15 + 15 = 0$. The financial-account surplus is exactly the foreign borrowing that pays for the current-account deficit. (For Indonesia, FDI + portfolio inflows.)</div>`,
            id: `<div class="tip">Tinggi sama, tanda berlawanan: $-15 + 15 = 0$. Surplus neraca finansial persis sama dengan pinjaman luar negeri yang membiayai defisit transaksi berjalan. (Untuk Indonesia, arus masuk FDI + portofolio.)</div>`
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
        en: 'Name the four blocks of the balance of payments and state the identity that links them.',
        id: 'Sebutkan empat blok neraca pembayaran dan nyatakan identitas yang menghubungkannya.'
      },
      answer: [
        { en: 'Current account (goods, services, primary & secondary income); capital account (small — non-produced/non-financial assets, debt forgiveness); financial account (FDI, portfolio, loans); and official reserves.',
          id: 'Transaksi berjalan (barang, jasa, pendapatan primer & sekunder); neraca modal (kecil — aset non-produksi/non-finansial, penghapusan utang); neraca finansial (FDI, portofolio, pinjaman); dan cadangan resmi.' },
        { en: 'They sum to zero by double-entry: CA + KA + FA = 0, where FA includes the change in reserves.',
          id: 'Keduanya berjumlah nol secara pembukuan ganda: CA + KA + FA = 0, di mana FA mencakup perubahan cadangan.' }
      ],
      tip: {
        en: 'Ignoring the tiny capital account, the working rule is the mirror image CA ≈ −FA.',
        id: 'Mengabaikan neraca modal yang kecil, aturan kerjanya adalah cerminan CA ≈ −FA.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'Classify each transaction in the BoP and give its sign (credit + or debit −): (A) an Indonesian firm exports coal; (B) an Indonesian family takes a holiday in Singapore; (C) a foreigner buys shares in an Indonesian company.',
        id: 'Klasifikasikan tiap transaksi dalam NP dan beri tandanya (kredit + atau debit −): (A) perusahaan Indonesia mengekspor batu bara; (B) keluarga Indonesia berlibur di Singapura; (C) orang asing membeli saham perusahaan Indonesia.'
      },
      context: {
        en: 'This is the deck\'s Eva–Desy–Gita example. Each line is one credit and is matched by a debit elsewhere, so the BoP balances at zero.',
        id: 'Ini contoh Eva–Desy–Gita dari materi. Tiap baris adalah satu kredit dan diimbangi debit di tempat lain, sehingga NP seimbang di nol.'
      },
      answer: [
        { en: '(A) Coal export = current account, goods. It is a credit (+) — money comes in.',
          id: '(A) Ekspor batu bara = transaksi berjalan, barang. Ini kredit (+) — uang masuk.' },
        { en: '(B) Holiday in Singapore = current account, services (travel import). It is a debit (−) — money goes out.',
          id: '(B) Liburan di Singapura = transaksi berjalan, jasa (impor perjalanan). Ini debit (−) — uang keluar.' },
        { en: '(C) Foreigner buys Indonesian shares = financial account, portfolio inflow. It is a credit (+) on the financial account — capital flows in.',
          id: '(C) Asing membeli saham Indonesia = neraca finansial, arus masuk portofolio. Ini kredit (+) pada neraca finansial — modal masuk.' }
      ],
      tip: {
        en: 'Goods/services/income → current account; assets → financial account. Credit = money in, debit = money out.',
        id: 'Barang/jasa/pendapatan → transaksi berjalan; aset → neraca finansial. Kredit = uang masuk, debit = uang keluar.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'A country has goods balance +40, services −10, primary income −25, secondary income +5 (all USD bn). (A) Compute the current account. (B) Is it a surplus or deficit? (C) What must the financial account (incl. reserves) be?',
        id: 'Sebuah negara memiliki neraca barang +40, jasa −10, pendapatan primer −25, pendapatan sekunder +5 (semua miliar USD). (A) Hitung transaksi berjalan. (B) Surplus atau defisit? (C) Berapa neraca finansial (termasuk cadangan)?'
      },
      answer: [
        { en: '(A) CA = 40 + (−10) + (−25) + 5 = +10. The current account is +10 bn.',
          id: '(A) CA = 40 + (−10) + (−25) + 5 = +10. Transaksi berjalan adalah +10 miliar.' },
        { en: '(B) CA > 0, so it is a surplus — the country is a net lender to the world.',
          id: '(B) CA > 0, jadi surplus — negara menjadi kreditur neto bagi dunia.' },
        { en: '(C) By CA + FA = 0, the financial account (incl. reserves) must be −10: a net capital outflow of 10 bn balances the books.',
          id: '(C) Berdasarkan CA + FA = 0, neraca finansial (termasuk cadangan) harus −10: arus modal keluar neto 10 miliar menyeimbangkan buku.' }
      ],
      tip: {
        en: 'Add the four CA blocks, then flip the sign for the financial account: FA = −CA.',
        id: 'Jumlahkan empat blok CA, lalu balik tandanya untuk neraca finansial: FA = −CA.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'An economy has national saving S = 180 and domestic investment I = 210 (USD bn). (A) Compute the current account. (B) Is the country borrowing or lending abroad, and what is the sign of NCO? (C) Interpret what the deficit means in saving–investment terms.',
        id: 'Sebuah perekonomian memiliki tabungan nasional S = 180 dan investasi domestik I = 210 (miliar USD). (A) Hitung transaksi berjalan. (B) Negara meminjam atau meminjamkan ke luar negeri, dan berapa tanda NCO? (C) Tafsirkan arti defisit itu dalam istilah tabungan–investasi.'
      },
      answer: [
        { en: '(A) CA = S − I = 180 − 210 = −30. A current-account deficit of 30 bn.',
          id: '(A) CA = S − I = 180 − 210 = −30. Defisit transaksi berjalan 30 miliar.' },
        { en: '(B) CA = NCO = −30 < 0, so net capital flows IN: the country is borrowing from abroad (foreigners buy its assets).',
          id: '(B) CA = NCO = −30 < 0, jadi modal neto mengalir MASUK: negara meminjam dari luar negeri (asing membeli asetnya).' },
        { en: '(C) S < I: the country invests 30 bn more than it saves, and imports that extra saving from abroad. The deficit is the saving–investment gap, financed by capital inflows — not money "lost."',
          id: '(C) S < I: negara berinvestasi 30 miliar lebih banyak daripada yang ditabung, dan mengimpor kelebihan tabungan itu dari luar negeri. Defisit adalah celah tabungan–investasi, dibiayai arus modal masuk — bukan uang yang "hilang."' }
      ],
      tip: {
        en: 'CA = S − I = NX = NCO is the whole chain. A negative number flips every sign together: deficit, S < I, capital inflow.',
        id: 'CA = S − I = NX = NCO adalah seluruh rantainya. Angka negatif membalik semua tanda bersamaan: defisit, S < I, arus modal masuk.'
      }
    },
    {
      type: 'concept',
      q: {
        en: "Indonesia often runs a positive goods (trade) balance yet a current-account deficit. Which block usually explains the gap, and why?",
        id: 'Indonesia sering mencatat neraca barang (perdagangan) positif namun defisit transaksi berjalan. Blok mana yang biasanya menjelaskan celah itu, dan mengapa?'
      },
      answer: [
        { en: 'The primary-income block. Foreign investors repatriate profits and dividends earned on FDI in Indonesia, a large, persistent debit.',
          id: 'Blok pendapatan primer. Investor asing merepatriasi laba dan dividen dari FDI di Indonesia, sebuah debit yang besar dan persisten.' },
        { en: 'Even when goods exports exceed imports, the net-income outflow can be big enough to push the whole CA negative.',
          id: 'Bahkan ketika ekspor barang melebihi impor, arus keluar pendapatan neto bisa cukup besar untuk menjadikan CA secara keseluruhan negatif.' },
        { en: 'It also makes the CA structurally vulnerable, since commodity-driven trade surpluses swing with commodity prices.',
          id: 'Ini juga membuat CA rentan secara struktural, karena surplus perdagangan yang digerakkan komoditas berayun mengikuti harga komoditas.' }
      ],
      tip: {
        en: 'Always ask which block drives a deficit. CA = NX + net income + net transfers — for Indonesia the net-income term is the culprit.',
        id: 'Selalu tanyakan blok mana penggerak defisit. CA = NX + pendapatan neto + transfer neto — untuk Indonesia suku pendapatan neto adalah biangnya.'
      }
    }
  ]
};
