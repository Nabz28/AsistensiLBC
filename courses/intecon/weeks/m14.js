/* ============================================================================
   EKINTER — Meeting 14 · Global Imbalances (KOM/FT international finance)
   Persistent current-account surpluses & deficits, the global savings glut,
   financing via capital flows (CA = −financial account), sustainability and
   adjustment, the reserve-currency role, and the link back to CA = S − I.
   Bilingual (EN + ID). Registers itself on window.EKINTER_WEEKS.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   ============================================================================ */
window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};
window.EKINTER_WEEKS.m14 = {
  id: 'm14',
  label: { en: 'Meeting 14', id: 'Pertemuan 14' },
  title: {
    en: 'Global Imbalances',
    id: 'Ketidakseimbangan Global'
  },
  subtitle: {
    en: 'Why some countries run persistent current-account surpluses and others persistent deficits — and how CA = S − I ties it all together.',
    id: 'Mengapa sebagian negara terus-menerus surplus transaksi berjalan dan lainnya terus-menerus defisit — dan bagaimana CA = S − I mengikat semuanya.'
  },

  /* ----------------------------------------------------------------------- */
  notes: [
    {
      num: '1',
      heading: { en: 'What "global imbalances" means', id: 'Apa itu "ketidakseimbangan global"' },
      cards: [
        {
          title: { en: 'Persistent surpluses and deficits', id: 'Surplus dan defisit yang menetap' },
          html: {
            en: `<p><span class="key">Global imbalances</span> are the large, <b>persistent</b> current-account (CA) surpluses in some countries matched by large, persistent CA deficits in others. A single year of imbalance is normal; the concern is when the same countries run the same-sign CA balance for <i>a decade or more</i>.</p>
<ul>
  <li><b>Chronic surplus economies:</b> China, Germany, Japan, the oil exporters, and several East-Asian economies.</li>
  <li><b>Chronic deficit economy:</b> above all the <b>United States</b>, which has run a CA deficit nearly every year since the early 1980s.</li>
</ul>
<p>Because every transaction has two sides, the world's current-account balances must <b>sum to (roughly) zero</b>: one country's surplus is another's deficit. A deficit is <b>not</b> automatically "bad" and a surplus is <b>not</b> automatically "good" — what matters is <i>why</i> the balance exists and whether it is <i>sustainable</i>.</p>
<div class="note">Keep the current account (CA) at the centre. For most purposes CA ≈ the trade balance NX plus net income from abroad. In the KOM/FT identity that is what <i>S − I</i> equals.</div>`,
            id: `<p><span class="key">Ketidakseimbangan global</span> adalah surplus transaksi berjalan (CA) yang besar dan <b>menetap</b> di sebagian negara, yang diimbangi defisit CA yang besar dan menetap di negara lain. Ketidakseimbangan satu tahun itu wajar; yang menjadi perhatian adalah ketika negara yang sama mempertahankan tanda CA yang sama selama <i>satu dekade atau lebih</i>.</p>
<ul>
  <li><b>Negara surplus kronis:</b> Tiongkok, Jerman, Jepang, para eksportir minyak, dan beberapa negara Asia Timur.</li>
  <li><b>Negara defisit kronis:</b> terutama <b>Amerika Serikat</b>, yang hampir selalu defisit CA setiap tahun sejak awal 1980-an.</li>
</ul>
<p>Karena setiap transaksi punya dua sisi, jumlah seluruh saldo transaksi berjalan dunia harus <b>(kira-kira) nol</b>: surplus satu negara adalah defisit negara lain. Defisit <b>tidak</b> otomatis "buruk" dan surplus <b>tidak</b> otomatis "baik" — yang penting adalah <i>mengapa</i> saldo itu ada dan apakah ia <i>berkelanjutan</i>.</p>
<div class="note">Letakkan transaksi berjalan (CA) di pusat. Untuk sebagian besar keperluan, CA ≈ neraca perdagangan NX ditambah pendapatan neto dari luar negeri. Dalam identitas KOM/FT, itulah yang sama dengan <i>S − I</i>.</div>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'CA = S − I: what drives surpluses and deficits', id: 'CA = S − I: apa penggerak surplus dan defisit' },
      cards: [
        {
          title: { en: 'The savings–investment identity', id: 'Identitas tabungan–investasi' },
          html: {
            en: `<p>Start from the open-economy national-income identity and rearrange. With national saving $S = Y - C - G$:</p>
<div class="formula">$$Y = C + I + G + CA \\;\\Longrightarrow\\; CA = (Y - C - G) - I \\;\\Longrightarrow\\; \\boxed{CA = S - I}$$</div>
<p>So a country's current-account balance is <b>just the gap between what it saves and what it invests at home</b>:</p>
<ul>
  <li><b>Surplus</b> ($CA > 0$): the country <b>saves more than it invests</b> domestically. The surplus saving is lent abroad — it buys foreign assets.</li>
  <li><b>Deficit</b> ($CA < 0$): the country <b>invests more than it saves</b>. The shortfall is financed by borrowing from abroad — foreigners buy its assets.</li>
</ul>
<p>This is the single most important sentence of the topic: <b>a CA balance is a saving-minus-investment balance.</b> Any story about imbalances must work through $S$ or $I$.</p>
<div class="tip">A deficit can come from <i>low saving</i> (e.g. a big budget deficit cutting public saving) <b>or</b> <i>high investment</i> (a booming economy). The two have very different implications — see sustainability below.</div>`,
            id: `<p>Mulai dari identitas pendapatan nasional perekonomian terbuka lalu susun ulang. Dengan tabungan nasional $S = Y - C - G$:</p>
<div class="formula">$$Y = C + I + G + CA \\;\\Longrightarrow\\; CA = (Y - C - G) - I \\;\\Longrightarrow\\; \\boxed{CA = S - I}$$</div>
<p>Jadi saldo transaksi berjalan suatu negara <b>hanyalah selisih antara berapa yang ia tabung dan berapa yang ia investasikan di dalam negeri</b>:</p>
<ul>
  <li><b>Surplus</b> ($CA > 0$): negara <b>menabung lebih banyak daripada yang diinvestasikan</b> di dalam negeri. Kelebihan tabungan dipinjamkan ke luar negeri — membeli aset asing.</li>
  <li><b>Defisit</b> ($CA < 0$): negara <b>berinvestasi lebih banyak daripada yang ditabung</b>. Kekurangannya dibiayai dengan meminjam dari luar negeri — pihak asing membeli asetnya.</li>
</ul>
<p>Inilah kalimat terpenting dari topik ini: <b>saldo CA adalah saldo tabungan-dikurangi-investasi.</b> Cerita apa pun tentang ketidakseimbangan harus melewati $S$ atau $I$.</p>
<div class="tip">Defisit bisa berasal dari <i>tabungan rendah</i> (mis. defisit anggaran besar memangkas tabungan publik) <b>atau</b> <i>investasi tinggi</i> (ekonomi sedang booming). Keduanya berimplikasi sangat berbeda — lihat keberlanjutan di bawah.</div>`
          }
        },
        {
          title: { en: 'CA = −financial account: the mirror image', id: 'CA = −akun finansial: bayangan cerminnya' },
          html: {
            en: `<p>The balance of payments always nets to zero, so (ignoring the small capital account and errors) the current account is the <b>exact negative</b> of the financial account:</p>
<div class="formula">$$CA = -\\,\\text{(financial account)}$$</div>
<p>Read it as an accounting truth: <b>a current-account deficit must be financed by a net inflow of capital.</b></p>
<ul>
  <li><b>Surplus country</b> ($CA > 0$): it is a <b>net lender</b> to the world. Its financial account is negative — net capital flows <i>out</i> as it accumulates claims on foreigners.</li>
  <li><b>Deficit country</b> ($CA < 0$): it is a <b>net borrower</b>. Its financial account is positive — net capital flows <i>in</i> as foreigners accumulate claims on it.</li>
</ul>
<div class="note">"Financing the deficit" simply means selling assets (bonds, equities, real estate, deposits) to foreigners. A persistent deficit therefore steadily raises the country's net foreign liabilities — its net international investment position turns more negative.</div>`,
            id: `<p>Neraca pembayaran selalu berjumlah nol, sehingga (mengabaikan akun modal kecil dan selisih perhitungan) transaksi berjalan adalah <b>negatif persis</b> dari akun finansial:</p>
<div class="formula">$$CA = -\\,\\text{(akun finansial)}$$</div>
<p>Bacalah sebagai kebenaran akuntansi: <b>defisit transaksi berjalan harus dibiayai oleh arus modal masuk neto.</b></p>
<ul>
  <li><b>Negara surplus</b> ($CA > 0$): ia <b>pemberi pinjaman neto</b> kepada dunia. Akun finansialnya negatif — modal neto mengalir <i>keluar</i> seiring ia mengakumulasi klaim atas pihak asing.</li>
  <li><b>Negara defisit</b> ($CA < 0$): ia <b>peminjam neto</b>. Akun finansialnya positif — modal neto mengalir <i>masuk</i> seiring pihak asing mengakumulasi klaim atasnya.</li>
</ul>
<div class="note">"Membiayai defisit" berarti menjual aset (obligasi, saham, properti, deposito) kepada pihak asing. Maka defisit yang menetap perlahan menaikkan kewajiban luar negeri neto negara — posisi investasi internasional netonya menjadi makin negatif.</div>`
          }
        }
      ]
    },
    {
      num: '3',
      heading: { en: 'The global savings glut and capital flows', id: 'Kelebihan tabungan global dan arus modal' },
      cards: [
        {
          title: { en: 'Bernanke’s "global savings glut"', id: '"Kelebihan tabungan global" ala Bernanke' },
          html: {
            en: `<p>Why has the U.S. been able to run a huge deficit for decades while interest rates stayed <i>low</i>? The <span class="key">global savings glut</span> hypothesis (Bernanke, 2005) argues the imbalances were driven as much by the <b>surplus side</b> as by the deficit side.</p>
<ul>
  <li>High-saving economies — China and other emerging Asia (precautionary saving after the 1997–98 crisis, weak social safety nets, demographics), Germany and Japan (ageing, export models), and oil exporters (windfall revenues) — generated <b>more saving than they could profitably invest at home</b>.</li>
  <li>That excess saving searched the world for safe, liquid assets and flowed disproportionately into the <b>United States</b>, especially U.S. Treasuries.</li>
  <li>The capital inflow <b>pushed U.S. interest rates down</b>, supported consumption and the housing boom, and financed the U.S. current-account deficit.</li>
</ul>
<div class="note">The key insight: in a $CA = S - I$ world, a deficit can be "made abroad." Foreign saving looking for a home is the flip side of the U.S. deficit — capital flows and the CA are two views of the same thing.</div>`,
            id: `<p>Mengapa AS bisa terus defisit besar selama puluhan tahun sementara suku bunga tetap <i>rendah</i>? Hipotesis <span class="key">kelebihan tabungan global</span> (Bernanke, 2005) berargumen bahwa ketidakseimbangan didorong sebanyak oleh <b>sisi surplus</b> seperti halnya oleh sisi defisit.</p>
<ul>
  <li>Negara bertabungan tinggi — Tiongkok dan Asia berkembang lainnya (tabungan berjaga-jaga setelah krisis 1997–98, jaring pengaman sosial lemah, demografi), Jerman dan Jepang (penuaan, model ekspor), serta eksportir minyak (rejeki nomplok pendapatan) — menghasilkan <b>tabungan lebih banyak daripada yang bisa diinvestasikan secara menguntungkan di dalam negeri</b>.</li>
  <li>Kelebihan tabungan itu mencari aset yang aman dan likuid ke seluruh dunia dan mengalir secara tidak proporsional ke <b>Amerika Serikat</b>, terutama surat utang pemerintah AS (Treasuries).</li>
  <li>Arus modal masuk itu <b>menekan suku bunga AS turun</b>, menopang konsumsi dan booming perumahan, serta membiayai defisit transaksi berjalan AS.</li>
</ul>
<div class="note">Wawasan kuncinya: dalam dunia $CA = S - I$, sebuah defisit bisa "dibuat dari luar negeri". Tabungan asing yang mencari tempat berlabuh adalah sisi sebaliknya dari defisit AS — arus modal dan CA adalah dua sudut pandang atas hal yang sama.</div>`
          }
        }
      ]
    },
    {
      num: '4',
      heading: { en: 'Is a deficit sustainable? Adjustment', id: 'Apakah defisit berkelanjutan? Penyesuaian' },
      cards: [
        {
          title: { en: 'When does a deficit become a problem?', id: 'Kapan defisit menjadi masalah?' },
          html: {
            en: `<p>A current-account deficit means the country is consuming/investing more than it produces and borrowing the difference. This is sustainable only as long as foreigners are <b>willing to keep lending</b>. The deficit is <b>more likely benign</b> when it:</p>
<ul>
  <li>finances <b>productive investment</b> (high $I$) rather than a consumption or government-spending binge (low $S$);</li>
  <li>is financed by <b>stable, long-term inflows</b> (FDI, long-dated bonds) rather than <b>hot, short-term flows</b> that can reverse overnight;</li>
  <li>keeps the <b>debt-to-GDP ratio stable</b> — i.e. nominal GDP grows at least as fast as the external debt.</li>
</ul>
<p>The deficit is <b>dangerous</b> when foreign claims grow faster than GDP, when borrowing is short-term and in foreign currency, and when lenders' confidence can flip. The classic failure mode is a <span class="key">sudden stop</span>: capital inflows abruptly halt or reverse, forcing a sharp, painful adjustment — currency depreciation, recession, and a forced swing of the CA back toward balance.</p>
<div class="tip">Sustainability is about <b>solvency over time</b>, not the size of any single year's deficit. Ask: is this borrowing buying future income, and can the country keep rolling it over?</div>`,
            id: `<p>Defisit transaksi berjalan berarti negara mengonsumsi/berinvestasi lebih banyak daripada yang diproduksi dan meminjam selisihnya. Ini berkelanjutan hanya selama pihak asing <b>bersedia terus memberi pinjaman</b>. Defisit <b>lebih mungkin tidak berbahaya</b> bila ia:</p>
<ul>
  <li>membiayai <b>investasi produktif</b> ($I$ tinggi), bukan pesta konsumsi atau belanja pemerintah ($S$ rendah);</li>
  <li>dibiayai oleh <b>arus masuk yang stabil dan jangka panjang</b> (FDI, obligasi jangka panjang), bukan <b>arus panas jangka pendek</b> yang bisa berbalik dalam semalam;</li>
  <li>menjaga <b>rasio utang terhadap PDB tetap stabil</b> — yakni PDB nominal tumbuh setidaknya secepat utang luar negeri.</li>
</ul>
<p>Defisit menjadi <b>berbahaya</b> ketika klaim asing tumbuh lebih cepat daripada PDB, ketika pinjaman bersifat jangka pendek dan dalam mata uang asing, dan ketika kepercayaan pemberi pinjaman bisa berbalik. Mode kegagalan klasiknya adalah <span class="key">penghentian mendadak (sudden stop)</span>: arus modal masuk tiba-tiba berhenti atau berbalik, memaksa penyesuaian yang tajam dan menyakitkan — depresiasi mata uang, resesi, dan ayunan paksa CA kembali menuju seimbang.</p>
<div class="tip">Keberlanjutan adalah soal <b>solvabilitas lintas waktu</b>, bukan besarnya defisit satu tahun tertentu. Tanyakan: apakah pinjaman ini membeli pendapatan masa depan, dan bisakah negara terus menggulirkannya (roll over)?</div>`
          }
        },
        {
          title: { en: 'What must adjust to close the deficit?', id: 'Apa yang harus menyesuaikan untuk menutup defisit?' },
          html: {
            en: `<p>Because $CA = S - I$, narrowing a deficit ($CA \\uparrow$ toward 0) requires <b>saving to rise relative to investment</b>. Two broad channels do this:</p>
<ul>
  <li><b>Expenditure reduction:</b> lower spending raises $S$ (e.g. shrinking the budget deficit raises public saving). Often via recession or austerity — costly.</li>
  <li><b>Expenditure switching:</b> a <b>real depreciation</b> of the currency makes domestic goods cheaper, raising NX and the CA — provided the Marshall–Lerner condition holds (recall the J-curve: the CA may worsen before it improves).</li>
</ul>
<p>Crucially, the adjustment is <b>symmetric</b>: for every deficit that closes, a surplus must shrink. So orderly rebalancing also requires surplus countries to <b>save less / spend more</b> (e.g. Germany or China boosting domestic demand). If only deficit countries adjust, world demand contracts.</p>
<div class="note">Exam reflex: to "fix" a CA deficit you must change $S$ or $I$, or the relative price of goods (the real exchange rate). A protectionist tariff alone does <b>not</b> change $S - I$, so it does not durably fix the trade balance — it mostly appreciates the currency and reshuffles trade.</div>`,
            id: `<p>Karena $CA = S - I$, mempersempit defisit ($CA \\uparrow$ menuju 0) menuntut <b>tabungan naik relatif terhadap investasi</b>. Dua saluran besar melakukannya:</p>
<ul>
  <li><b>Pengurangan pengeluaran:</b> belanja yang lebih rendah menaikkan $S$ (mis. mengecilkan defisit anggaran menaikkan tabungan publik). Sering lewat resesi atau pengetatan — mahal.</li>
  <li><b>Pengalihan pengeluaran:</b> <b>depresiasi riil</b> mata uang membuat barang domestik lebih murah, menaikkan NX dan CA — asalkan kondisi Marshall–Lerner terpenuhi (ingat kurva-J: CA bisa memburuk dulu sebelum membaik).</li>
</ul>
<p>Yang penting, penyesuaian ini <b>simetris</b>: untuk setiap defisit yang menutup, suatu surplus harus mengecil. Maka penyeimbangan kembali yang tertib juga menuntut negara surplus <b>menabung lebih sedikit / membelanjakan lebih banyak</b> (mis. Jerman atau Tiongkok mendorong permintaan domestik). Jika hanya negara defisit yang menyesuaikan, permintaan dunia menyusut.</p>
<div class="note">Refleks ujian: untuk "memperbaiki" defisit CA kamu harus mengubah $S$ atau $I$, atau harga relatif barang (nilai tukar riil). Tarif proteksionis sendirian <b>tidak</b> mengubah $S - I$, sehingga tidak memperbaiki neraca perdagangan secara tahan lama — ia kebanyakan mengapresiasi mata uang dan mengocok ulang perdagangan.</div>`
          }
        }
      ]
    },
    {
      num: '5',
      heading: { en: 'Reserve currency & the twin-deficits link', id: 'Mata uang cadangan & kaitan defisit kembar' },
      cards: [
        {
          title: { en: 'The U.S. dollar’s "exorbitant privilege"', id: '"Hak istimewa luar biasa" dolar AS' },
          html: {
            en: `<p>The U.S. dollar is the world's dominant <span class="key">reserve currency</span>: central banks hold most of their reserves in dollars, commodities are priced in dollars, and U.S. Treasuries are the world's benchmark safe asset. This shapes global imbalances:</p>
<ul>
  <li><b>Structural demand for U.S. assets.</b> The world <i>wants</i> to hold dollar reserves and safe dollar assets, so capital flows persistently <b>into</b> the U.S. — the financial-account counterpart of its CA deficit. This lets the U.S. borrow cheaply in its own currency ("exorbitant privilege").</li>
  <li><b>Reserve accumulation by surplus countries.</b> When China or oil exporters run surpluses and park the proceeds in U.S. Treasuries, they are <b>financing the U.S. deficit</b> directly — a key mechanism behind the savings glut.</li>
  <li><b>Triffin-style tension.</b> Supplying the world with safe dollar assets tends to push the reserve issuer toward running deficits, which can sit uneasily with long-run sustainability.</li>
</ul>`,
            id: `<p>Dolar AS adalah <span class="key">mata uang cadangan</span> dominan dunia: bank sentral menyimpan sebagian besar cadangannya dalam dolar, komoditas dihargai dalam dolar, dan surat utang AS adalah aset aman acuan dunia. Ini membentuk ketidakseimbangan global:</p>
<ul>
  <li><b>Permintaan struktural atas aset AS.</b> Dunia <i>ingin</i> memegang cadangan dolar dan aset dolar yang aman, sehingga modal terus mengalir <b>masuk</b> ke AS — pasangan akun-finansial dari defisit CA-nya. Ini membuat AS bisa meminjam murah dalam mata uangnya sendiri ("hak istimewa luar biasa").</li>
  <li><b>Akumulasi cadangan oleh negara surplus.</b> Ketika Tiongkok atau eksportir minyak surplus dan memarkir hasilnya di surat utang AS, mereka secara langsung <b>membiayai defisit AS</b> — mekanisme kunci di balik kelebihan tabungan.</li>
  <li><b>Ketegangan ala Triffin.</b> Memasok dunia dengan aset dolar yang aman cenderung mendorong penerbit mata uang cadangan untuk terus defisit, yang bisa berbenturan dengan keberlanjutan jangka panjang.</li>
</ul>`
          }
        },
        {
          title: { en: 'Twin deficits: budget deficit → CA deficit', id: 'Defisit kembar: defisit anggaran → defisit CA' },
          html: {
            en: `<p>The <span class="key">twin-deficits</span> idea links the <b>government budget</b> to the <b>current account</b> through the saving identity. Split national saving into private and public parts, with $T - G$ the government's budget balance:</p>
<div class="formula">$$CA = S - I = \\underbrace{(S_{priv} - I)}_{\\text{private}} + \\underbrace{(T - G)}_{\\text{public}}$$</div>
<p>Holding private saving and investment roughly fixed, a larger <b>budget deficit</b> ($G > T$, so $T - G < 0$) lowers national saving and pushes the <b>current account toward deficit</b>. The fiscal deficit is "twinned" with the external deficit.</p>
<ul>
  <li>This is the channel behind the U.S. "twin deficits" of the 1980s and again in the 2000s: government dissaving widened the CA gap.</li>
  <li>It is <b>not</b> a rigid one-for-one law — private saving and investment also move (Ricardian offsets, investment booms). But the <b>direction</b> is the standard exam result: <b>budget deficit ↑ ⇒ national saving ↓ ⇒ CA deficit ↑.</b></li>
</ul>
<div class="tip">This is the same chain as the loanable-funds "twin deficits" graph from earlier finance meetings: a budget deficit lowers $S$, raises $r$, lowers NCO, appreciates the real exchange rate, and worsens NX/CA.</div>`,
            id: `<p>Gagasan <span class="key">defisit kembar</span> menghubungkan <b>anggaran pemerintah</b> dengan <b>transaksi berjalan</b> melalui identitas tabungan. Pecah tabungan nasional menjadi bagian swasta dan publik, dengan $T - G$ sebagai saldo anggaran pemerintah:</p>
<div class="formula">$$CA = S - I = \\underbrace{(S_{swasta} - I)}_{\\text{swasta}} + \\underbrace{(T - G)}_{\\text{publik}}$$</div>
<p>Dengan tabungan dan investasi swasta kira-kira tetap, <b>defisit anggaran</b> yang lebih besar ($G > T$, sehingga $T - G < 0$) menurunkan tabungan nasional dan mendorong <b>transaksi berjalan menuju defisit</b>. Defisit fiskal "berkembar" dengan defisit eksternal.</p>
<ul>
  <li>Inilah saluran di balik "defisit kembar" AS pada 1980-an dan kembali pada 2000-an: pengurangan tabungan oleh pemerintah memperlebar selisih CA.</li>
  <li>Ini <b>bukan</b> hukum kaku satu-lawan-satu — tabungan dan investasi swasta juga bergerak (penyeimbangan Ricardian, booming investasi). Tetapi <b>arah</b>-nya adalah hasil ujian baku: <b>defisit anggaran ↑ ⇒ tabungan nasional ↓ ⇒ defisit CA ↑.</b></li>
</ul>
<div class="tip">Ini rantai yang sama dengan grafik "defisit kembar" pasar dana pinjaman dari pertemuan keuangan sebelumnya: defisit anggaran menurunkan $S$, menaikkan $r$, menurunkan NCO, mengapresiasi nilai tukar riil, dan memperburuk NX/CA.</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  formulas: [
    {
      num: '1',
      heading: { en: 'Current account = saving − investment', id: 'Transaksi berjalan = tabungan − investasi' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$CA = S - I$$</div>
<ul>
  <li>$CA$ — current-account balance (≈ trade balance NX + net foreign income).</li>
  <li>$S = Y - C - G$ — national saving. $I$ — domestic investment.</li>
  <li>$CA > 0$ surplus ⇒ saves more than it invests ⇒ <b>net lender</b> abroad.</li>
  <li>$CA < 0$ deficit ⇒ invests more than it saves ⇒ <b>net borrower</b> from abroad.</li>
</ul>
<p><b>Use it</b> as the master tool for global imbalances. To explain or fix any CA balance, work through $S$ or $I$ — never through trade flows alone.</p>`,
            id: `<div class="formula">$$CA = S - I$$</div>
<ul>
  <li>$CA$ — saldo transaksi berjalan (≈ neraca perdagangan NX + pendapatan asing neto).</li>
  <li>$S = Y - C - G$ — tabungan nasional. $I$ — investasi domestik.</li>
  <li>$CA > 0$ surplus ⇒ menabung lebih banyak daripada berinvestasi ⇒ <b>pemberi pinjaman neto</b> ke luar negeri.</li>
  <li>$CA < 0$ defisit ⇒ berinvestasi lebih banyak daripada menabung ⇒ <b>peminjam neto</b> dari luar negeri.</li>
</ul>
<p><b>Pakai</b> sebagai alat induk untuk ketidakseimbangan global. Untuk menjelaskan atau memperbaiki saldo CA mana pun, lewati $S$ atau $I$ — jangan lewat arus perdagangan saja.</p>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'Current account = − financial account', id: 'Transaksi berjalan = − akun finansial' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$CA = -\\,\\text{(financial account)}$$</div>
<p>The balance of payments nets to zero (ignoring the small capital account and statistical errors), so the current account and the financial account are equal and opposite.</p>
<ul>
  <li>$CA < 0$ ⇒ financial account $> 0$ ⇒ <b>net capital inflow</b> finances the deficit (foreigners buy domestic assets).</li>
  <li>$CA > 0$ ⇒ financial account $< 0$ ⇒ <b>net capital outflow</b> (the surplus buys foreign assets).</li>
</ul>
<p><b>Use it</b> to see that "financing a deficit" = selling assets to foreigners, and a chronic deficit steadily raises net foreign liabilities.</p>`,
            id: `<div class="formula">$$CA = -\\,\\text{(akun finansial)}$$</div>
<p>Neraca pembayaran berjumlah nol (mengabaikan akun modal kecil dan selisih statistik), sehingga transaksi berjalan dan akun finansial sama besar tetapi berlawanan tanda.</p>
<ul>
  <li>$CA < 0$ ⇒ akun finansial $> 0$ ⇒ <b>arus modal masuk neto</b> membiayai defisit (pihak asing membeli aset domestik).</li>
  <li>$CA > 0$ ⇒ akun finansial $< 0$ ⇒ <b>arus modal keluar neto</b> (surplus membeli aset asing).</li>
</ul>
<p><b>Pakai</b> untuk melihat bahwa "membiayai defisit" = menjual aset ke pihak asing, dan defisit kronis perlahan menaikkan kewajiban luar negeri neto.</p>`
          }
        }
      ]
    },
    {
      num: '3',
      heading: { en: 'Twin deficits decomposition', id: 'Dekomposisi defisit kembar' },
      cards: [
        {
          html: {
            en: `<div class="formula">$$CA = (S_{priv} - I) + (T - G)$$</div>
<ul>
  <li>$S_{priv}$ — private saving · $I$ — investment · $(T - G)$ — government budget balance.</li>
  <li>A budget <b>deficit</b> means $T - G < 0$, which (holding the private balance fixed) pushes $CA$ toward deficit.</li>
</ul>
<p><b>Use it</b> for the twin-deficits question: link a rising fiscal deficit to a widening current-account deficit through lower national saving.</p>
<div class="tip">Direction is reliable for the UAS: budget deficit ↑ ⇒ $S$ ↓ ⇒ $CA$ ↓. The magnitude depends on how private saving/investment respond.</div>`,
            id: `<div class="formula">$$CA = (S_{swasta} - I) + (T - G)$$</div>
<ul>
  <li>$S_{swasta}$ — tabungan swasta · $I$ — investasi · $(T - G)$ — saldo anggaran pemerintah.</li>
  <li><b>Defisit</b> anggaran berarti $T - G < 0$, yang (dengan saldo swasta tetap) mendorong $CA$ menuju defisit.</li>
</ul>
<p><b>Pakai</b> untuk soal defisit kembar: kaitkan defisit fiskal yang naik dengan defisit transaksi berjalan yang melebar melalui tabungan nasional yang turun.</p>
<div class="tip">Arahnya andal untuk UAS: defisit anggaran ↑ ⇒ $S$ ↓ ⇒ $CA$ ↓. Besarannya bergantung pada respons tabungan/investasi swasta.</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  graphs: [
    {
      num: '1',
      heading: { en: 'Surplus vs. deficit economies', id: 'Negara surplus vs. defisit' },
      cards: [
        {
          title: { en: 'The world’s balances must sum to zero', id: 'Saldo dunia harus berjumlah nol' },
          html: {
            en: `<p>Stylised current-account balances (% of GDP). Surplus economies (China, Germany, Japan) are <b>net lenders</b>; the U.S. deficit is the matching <b>net borrower</b>. Across the whole world these must net out — one country's surplus is another's deficit.</p>`,
            id: `<p>Saldo transaksi berjalan ilustratif (% dari PDB). Negara surplus (Tiongkok, Jerman, Jepang) adalah <b>pemberi pinjaman neto</b>; defisit AS adalah <b>peminjam neto</b> yang mengimbangi. Di seluruh dunia, semua ini harus saling meniadakan — surplus satu negara adalah defisit negara lain.</p>`
          },
          chart: {
            kind: 'bars',
            w: 460, h: 280, yMax: 9,
            bars: [
              { label: '+7', value: 7, color: '#0e8fb8', caption: 'China (surplus)' },
              { label: '+6', value: 6, color: '#0e8fb8', caption: 'Germany (surplus)' },
              { label: '+3.5', value: 3.5, color: '#0e8fb8', caption: 'Japan (surplus)' },
              { label: '−6', value: 6, color: '#c0392b', caption: 'U.S. (deficit)' }
            ]
          },
          htmlAfter: {
            en: `<div class="tip">Heights show the <b>size</b> of each balance (|CA| as % of GDP); the captions and signs show direction. The teal surpluses on the left fund the red U.S. deficit on the right — that is the global imbalance.</div>`,
            id: `<div class="tip">Tinggi batang menunjukkan <b>besar</b> tiap saldo (|CA| sebagai % PDB); keterangan dan tanda menunjukkan arah. Surplus warna teal di kiri membiayai defisit AS merah di kanan — itulah ketidakseimbangan global.</div>`
          }
        },
        {
          title: { en: 'CA = S − I for a deficit country', id: 'CA = S − I untuk negara defisit' },
          html: {
            en: `<p>For a single deficit economy, investment exceeds national saving. The <b>gap</b> $I - S$ is exactly the current-account deficit, financed by borrowing from abroad.</p>`,
            id: `<p>Untuk satu negara defisit, investasi melebihi tabungan nasional. <b>Selisih</b> $I - S$ persis sama dengan defisit transaksi berjalan, yang dibiayai dengan meminjam dari luar negeri.</p>`
          },
          chart: {
            kind: 'bars',
            w: 380, h: 270, yMax: 26,
            bars: [
              { label: 'S', value: 18, color: '#0e8fb8', caption: 'national saving' },
              { label: 'I', value: 22, color: '#444', caption: 'investment' }
            ],
            gap: { from: 1, to: 0, label: 'CA = S − I < 0', color: '#c0392b' }
          },
          htmlAfter: {
            en: `<div class="tip">$I > S$ ⇒ $CA = S - I < 0$. The bracket is the deficit that net capital inflows must finance. A surplus country would simply flip the bars: $S > I$.</div>`,
            id: `<div class="tip">$I > S$ ⇒ $CA = S - I < 0$. Tanda kurung adalah defisit yang harus dibiayai arus modal masuk neto. Negara surplus tinggal membalik batangnya: $S > I$.</div>`
          }
        }
      ]
    },
    {
      num: '2',
      heading: { en: 'Current account over time', id: 'Transaksi berjalan sepanjang waktu' },
      cards: [
        {
          title: { en: 'Persistent surplus vs. persistent deficit', id: 'Surplus menetap vs. defisit menetap' },
          html: {
            en: `<p>The defining feature of global imbalances is <b>persistence</b>. The surplus economy (teal) stays above the $CA = 0$ line for years; the deficit economy (red) stays below it. Imbalances do not self-correct quickly.</p>`,
            id: `<p>Ciri khas ketidakseimbangan global adalah <b>kemenetapan</b>. Negara surplus (teal) tetap di atas garis $CA = 0$ selama bertahun-tahun; negara defisit (merah) tetap di bawahnya. Ketidakseimbangan tidak terkoreksi sendiri dengan cepat.</p>`
          },
          chart: {
            w: 460, h: 290,
            x: { min: 0, max: 10, label: 'time' }, y: { min: -8, max: 8, label: 'CA (% GDP)' },
            curves: [
              { id: 'zero', kind: 'hline', y: 0, color: '#999', label: 'CA = 0' },
              { id: 'surplus', kind: 'path', smooth: true, color: '#0e8fb8', label: 'surplus',
                pts: [[0.5, 3], [2.5, 5], [4.5, 6.5], [6.5, 6], [8.5, 5.5]] },
              { id: 'deficit', kind: 'path', smooth: true, color: '#c0392b', label: 'deficit',
                pts: [[0.5, -2.5], [2.5, -4], [4.5, -6], [6.5, -5.5], [8.5, -5]] }
            ]
          },
          htmlAfter: {
            en: `<div class="tip">Above the line = net lender (surplus); below = net borrower (deficit). The two paths roughly mirror each other because world balances sum to zero. "Adjustment" is the deficit path climbing back toward the $CA = 0$ line.</div>`,
            id: `<div class="tip">Di atas garis = pemberi pinjaman neto (surplus); di bawah = peminjam neto (defisit). Kedua jalur kira-kira saling mencerminkan karena saldo dunia berjumlah nol. "Penyesuaian" adalah jalur defisit yang naik kembali menuju garis $CA = 0$.</div>`
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
        en: 'State the identity CA = S − I and use it to explain what makes a country run a current-account surplus versus a deficit.',
        id: 'Nyatakan identitas CA = S − I dan gunakan untuk menjelaskan apa yang membuat sebuah negara surplus versus defisit transaksi berjalan.'
      },
      answer: [
        { en: 'From Y = C + I + G + CA with national saving S = Y − C − G, rearranging gives CA = S − I.',
          id: 'Dari Y = C + I + G + CA dengan tabungan nasional S = Y − C − G, penyusunan ulang memberi CA = S − I.' },
        { en: 'Surplus (CA > 0): the country saves more than it invests at home, so it lends the excess abroad and accumulates foreign assets (net lender).',
          id: 'Surplus (CA > 0): negara menabung lebih banyak daripada yang diinvestasikan di dalam negeri, sehingga meminjamkan kelebihannya ke luar negeri dan mengakumulasi aset asing (pemberi pinjaman neto).' },
        { en: 'Deficit (CA < 0): the country invests more than it saves, so it borrows the difference from abroad — foreigners accumulate claims on it (net borrower).',
          id: 'Defisit (CA < 0): negara berinvestasi lebih banyak daripada yang ditabung, sehingga meminjam selisihnya dari luar negeri — pihak asing mengakumulasi klaim atasnya (peminjam neto).' }
      ],
      tip: {
        en: 'Always answer imbalance questions through S and I, never through trade flows alone.',
        id: 'Selalu jawab soal ketidakseimbangan lewat S dan I, jangan lewat arus perdagangan saja.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'What is the "global savings glut" hypothesis, and how does it explain a large U.S. deficit coexisting with low U.S. interest rates?',
        id: 'Apa itu hipotesis "kelebihan tabungan global", dan bagaimana ia menjelaskan defisit AS yang besar berdampingan dengan suku bunga AS yang rendah?'
      },
      answer: [
        { en: 'High-saving economies (China and emerging Asia, Germany, Japan, oil exporters) generated more saving than they could profitably invest at home.',
          id: 'Negara bertabungan tinggi (Tiongkok dan Asia berkembang, Jerman, Jepang, eksportir minyak) menghasilkan tabungan lebih banyak daripada yang bisa diinvestasikan secara menguntungkan di dalam negeri.' },
        { en: 'That excess saving flowed into safe U.S. assets (especially Treasuries), i.e. a large net capital inflow into the U.S.',
          id: 'Kelebihan tabungan itu mengalir ke aset AS yang aman (terutama Treasuries), yakni arus modal masuk neto yang besar ke AS.' },
        { en: 'The inflow pushed U.S. interest rates down and financed the U.S. current-account deficit — so the deficit was driven as much by the foreign surplus side as by the U.S. side (CA = −financial account).',
          id: 'Arus masuk itu menekan suku bunga AS turun dan membiayai defisit transaksi berjalan AS — jadi defisit didorong sebanyak oleh sisi surplus asing seperti halnya oleh sisi AS (CA = −akun finansial).' }
      ],
      tip: {
        en: 'The glut reframes the deficit as partly "made abroad": foreign saving seeking a home is the flip side of the U.S. deficit.',
        id: 'Kelebihan tabungan membingkai ulang defisit sebagai sebagian "dibuat dari luar negeri": tabungan asing yang mencari tempat adalah sisi sebaliknya dari defisit AS.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'Country A runs a current-account deficit of 6% of GDP. It is financed almost entirely by short-term portfolio inflows in foreign currency, the borrowing funds a consumption boom (not investment), and external debt is rising faster than GDP. Is this deficit sustainable? What would have to adjust?',
        id: 'Negara A mengalami defisit transaksi berjalan sebesar 6% dari PDB. Defisit itu hampir seluruhnya dibiayai arus portofolio jangka pendek dalam mata uang asing, pinjamannya membiayai booming konsumsi (bukan investasi), dan utang luar negeri naik lebih cepat daripada PDB. Apakah defisit ini berkelanjutan? Apa yang harus menyesuaikan?'
      },
      context: {
        en: 'Judge sustainability on three things: what the borrowing funds (S vs I), the quality of the financing, and the debt-to-GDP trajectory.',
        id: 'Nilai keberlanjutan dari tiga hal: untuk apa pinjaman dipakai (S vs I), kualitas pembiayaan, dan lintasan utang terhadap PDB.'
      },
      answer: [
        { en: 'Likely UNSUSTAINABLE. The deficit reflects low saving (a consumption boom), not productive investment, so it is not buying future income to repay the debt.',
          id: 'Kemungkinan TIDAK BERKELANJUTAN. Defisit mencerminkan tabungan rendah (booming konsumsi), bukan investasi produktif, sehingga tidak membeli pendapatan masa depan untuk melunasi utang.' },
        { en: 'The financing is hot, short-term, foreign-currency portfolio money — exactly the kind that can reverse abruptly (a sudden stop), and debt-to-GDP is rising, so it is on an unstable path.',
          id: 'Pembiayaannya adalah uang portofolio panas, jangka pendek, mata uang asing — persis jenis yang bisa berbalik mendadak (sudden stop), dan rasio utang terhadap PDB naik, jadi berada di lintasan tidak stabil.' },
        { en: 'To close the deficit (raise CA toward 0) saving must rise relative to investment: expenditure reduction (cut consumption / shrink any budget deficit) and/or expenditure switching via a real depreciation that lifts NX (subject to Marshall–Lerner / the J-curve).',
          id: 'Untuk menutup defisit (menaikkan CA menuju 0) tabungan harus naik relatif terhadap investasi: pengurangan pengeluaran (memangkas konsumsi / mengecilkan defisit anggaran) dan/atau pengalihan pengeluaran lewat depresiasi riil yang menaikkan NX (tunduk pada Marshall–Lerner / kurva-J).' }
      ],
      tip: {
        en: 'A deficit financing high investment, funded by stable long-term inflows, with stable debt/GDP, would be far more benign.',
        id: 'Defisit yang membiayai investasi tinggi, didanai arus masuk jangka panjang yang stabil, dengan utang/PDB stabil, akan jauh lebih tidak berbahaya.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'A government doubles its budget deficit while private saving and investment stay roughly unchanged. Trace the effect on national saving and the current account, and name the result.',
        id: 'Pemerintah menggandakan defisit anggarannya sementara tabungan dan investasi swasta kira-kira tidak berubah. Telusuri dampaknya pada tabungan nasional dan transaksi berjalan, dan sebutkan namanya.'
      },
      context: {
        en: 'Use the decomposition CA = (S_priv − I) + (T − G).',
        id: 'Gunakan dekomposisi CA = (S_swasta − I) + (T − G).'
      },
      answer: [
        { en: 'A bigger budget deficit means T − G falls (more negative), so public saving falls and national saving S drops.',
          id: 'Defisit anggaran yang lebih besar berarti T − G turun (makin negatif), sehingga tabungan publik turun dan tabungan nasional S menurun.' },
        { en: 'With the private balance (S_priv − I) unchanged, CA = (S_priv − I) + (T − G) falls — the current account moves toward (or deeper into) deficit.',
          id: 'Dengan saldo swasta (S_swasta − I) tidak berubah, CA = (S_swasta − I) + (T − G) turun — transaksi berjalan bergerak menuju (atau makin dalam ke) defisit.' },
        { en: 'This budget-deficit → current-account-deficit linkage is the "twin deficits." Equivalently, in loanable funds S falls, r rises, NCO falls, the real exchange rate appreciates, and NX/CA worsens.',
          id: 'Kaitan defisit-anggaran → defisit-transaksi-berjalan ini adalah "defisit kembar." Setara dengan itu, dalam dana pinjaman S turun, r naik, NCO turun, nilai tukar riil terapresiasi, dan NX/CA memburuk.' }
      ],
      tip: {
        en: 'Direction is the exam answer: budget deficit ↑ ⇒ S ↓ ⇒ CA ↓. Magnitude can be offset if private saving rises (Ricardian) or investment falls.',
        id: 'Arah adalah jawaban ujian: defisit anggaran ↑ ⇒ S ↓ ⇒ CA ↓. Besarannya bisa terimbangi jika tabungan swasta naik (Ricardian) atau investasi turun.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'Which statement about a country running a persistent current-account surplus is NOT true? (a) S > I; (b) it is a net lender to the rest of the world; (c) its financial account is positive (net capital inflow); (d) it accumulates net foreign assets.',
        id: 'Pernyataan mana tentang negara yang terus-menerus surplus transaksi berjalan yang TIDAK benar? (a) S > I; (b) ia pemberi pinjaman neto kepada dunia; (c) akun finansialnya positif (arus modal masuk neto); (d) ia mengakumulasi aset asing neto.'
      },
      answer: [
        { en: 'A surplus means CA > 0, and CA = S − I, so S > I (a is true).',
          id: 'Surplus berarti CA > 0, dan CA = S − I, sehingga S > I (a benar).' },
        { en: 'CA > 0 means the country lends abroad — a net lender (b is true) — and accumulates net foreign assets (d is true).',
          id: 'CA > 0 berarti negara meminjamkan ke luar negeri — pemberi pinjaman neto (b benar) — dan mengakumulasi aset asing neto (d benar).' },
        { en: 'But CA = −(financial account), so CA > 0 implies the financial account is NEGATIVE — a net capital OUTFLOW, not an inflow. So (c) is the statement that is NOT true.',
          id: 'Tetapi CA = −(akun finansial), sehingga CA > 0 berarti akun finansial NEGATIF — arus modal KELUAR neto, bukan masuk. Jadi (c) adalah pernyataan yang TIDAK benar.' },
        { en: 'Answer: (c).', id: 'Jawaban: (c).' }
      ],
      tip: {
        en: 'Surplus ⇒ S > I ⇒ net lender ⇒ capital flows OUT (financial account < 0). A deficit flips every sign.',
        id: 'Surplus ⇒ S > I ⇒ pemberi pinjaman neto ⇒ modal mengalir KELUAR (akun finansial < 0). Defisit membalik semua tanda.'
      }
    }
  ]
};
