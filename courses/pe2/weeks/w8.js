/* ============================================================================
   PE2 · Week 8 — A Macroeconomic Theory of the Open Economy (Mankiw Ch 33)
   Bilingual (EN + ID). Registers itself on window.PE2_WEEKS.w8.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   ============================================================================ */
window.PE2_WEEKS = window.PE2_WEEKS || {};
window.PE2_WEEKS.w8 = {
  id: 'w8',
  label: { en: 'Week 8', id: 'Minggu 8' },
  title: {
    en: 'Open-Economy Macroeconomics: Theory',
    id: 'Makroekonomi Perekonomian Terbuka: Teori'
  },
  subtitle: {
    en: 'Two markets — loanable funds and foreign-currency exchange — linked by NCO, and what budget deficits, trade policy, and capital flight do to them.',
    id: 'Dua pasar — dana pinjaman dan pertukaran mata uang asing — yang dihubungkan oleh NCO, serta dampak defisit anggaran, kebijakan perdagangan, dan pelarian modal.'
  },

  /* =========================================================================
     NOTES
     ========================================================================= */
  notes: [
    {
      heading: { en: 'The big picture: two markets, one link', id: 'Gambaran besar: dua pasar, satu penghubung' },
      num: '1',
      cards: [
        {
          title: { en: 'The model in one breath', id: 'Model dalam satu tarikan napas' },
          html: {
            en: `<p>An open economy is described by <span class="key">two markets</span> that talk to each other:</p>
<ul>
<li><span class="key">Market for loanable funds (LF)</span> — sets the <span class="key">real interest rate</span> $r$.</li>
<li><span class="key">Market for foreign-currency exchange (FX)</span> — sets the <span class="key">real exchange rate</span> $E$.</li>
</ul>
<p>The bridge between them is <span class="key">net capital outflow (NCO)</span>. The chain of causation always runs in one direction:</p>
<div class="formula">$$\\text{LF market} \\;\\Rightarrow\\; r \\;\\Rightarrow\\; NCO \\;\\Rightarrow\\; \\text{supply of \\$ in FX market} \\;\\Rightarrow\\; E$$</div>
<div class="note">Read this chain left-to-right every time. The LF market determines $r$; that $r$ pins down $NCO$; that $NCO$ is the supply of dollars in the FX market; the FX market then determines $E$.</div>`,
            id: `<p>Perekonomian terbuka dijelaskan oleh <span class="key">dua pasar</span> yang saling berbicara:</p>
<ul>
<li><span class="key">Pasar dana pinjaman (LF)</span> — menentukan <span class="key">tingkat bunga riil</span> $r$.</li>
<li><span class="key">Pasar pertukaran mata uang asing (FX)</span> — menentukan <span class="key">nilai tukar riil</span> $E$.</li>
</ul>
<p>Jembatan di antara keduanya adalah <span class="key">arus modal keluar neto (NCO)</span>. Rantai sebab-akibat selalu berjalan satu arah:</p>
<div class="formula">$$\\text{Pasar LF} \\;\\Rightarrow\\; r \\;\\Rightarrow\\; NCO \\;\\Rightarrow\\; \\text{penawaran \\$ di pasar FX} \\;\\Rightarrow\\; E$$</div>
<div class="note">Baca rantai ini dari kiri ke kanan setiap kali. Pasar LF menentukan $r$; $r$ tersebut menetapkan $NCO$; $NCO$ tersebut adalah penawaran dolar di pasar FX; pasar FX kemudian menentukan $E$.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The market for loanable funds', id: 'Pasar dana pinjaman' },
      num: '2',
      cards: [
        {
          title: { en: 'Supply and demand', id: 'Penawaran dan permintaan' },
          html: {
            en: `<p>In an open economy national saving is split two ways:</p>
<div class="formula">$$S = I + NCO$$</div>
<ul>
<li><span class="key">Supply of loanable funds</span> comes from <span class="key">national saving $S$</span> — vertical-ish / upward, here drawn as a fixed quantity that $r$ does not move much in the short run.</li>
<li><span class="key">Demand for loanable funds</span> comes from <span class="key">domestic investment $I$</span> <em>plus</em> <span class="key">net capital outflow $NCO$</span>:</li>
</ul>
<div class="formula">$$D = I + NCO$$</div>
<p>Both $I$ and $NCO$ depend <span class="key">negatively</span> on $r$, so the demand curve is <span class="key">downward-sloping</span>. The interest rate $r$ adjusts to balance supply and demand.</p>
<div class="note">$NCO$ is part of <em>demand</em> here: when residents buy foreign assets ($NCO &gt; 0$) they draw on domestically generated loanable funds, adding to demand. A net inflow ($NCO &lt; 0$) does the opposite.</div>`,
            id: `<p>Dalam perekonomian terbuka, tabungan nasional terbagi dua arah:</p>
<div class="formula">$$S = I + NCO$$</div>
<ul>
<li><span class="key">Penawaran dana pinjaman</span> berasal dari <span class="key">tabungan nasional $S$</span> — di sini digambarkan sebagai jumlah yang relatif tetap dan tidak banyak digerakkan $r$ dalam jangka pendek.</li>
<li><span class="key">Permintaan dana pinjaman</span> berasal dari <span class="key">investasi domestik $I$</span> <em>ditambah</em> <span class="key">arus modal keluar neto $NCO$</span>:</li>
</ul>
<div class="formula">$$D = I + NCO$$</div>
<p>Baik $I$ maupun $NCO$ bergantung <span class="key">negatif</span> pada $r$, sehingga kurva permintaan <span class="key">melandai ke bawah</span>. Tingkat bunga $r$ menyesuaikan untuk menyeimbangkan penawaran dan permintaan.</p>
<div class="note">Di sini $NCO$ adalah bagian dari <em>permintaan</em>: ketika penduduk membeli aset asing ($NCO &gt; 0$) mereka menarik dana pinjaman domestik sehingga menambah permintaan. Arus masuk neto ($NCO &lt; 0$) menghasilkan kebalikannya.</div>`
          }
        },
        {
          title: { en: 'How NCO depends on the real interest rate', id: 'Bagaimana NCO bergantung pada tingkat bunga riil' },
          html: {
            en: `<p>$r$ is the real return on <span class="key">domestic</span> assets. A <span class="key">fall in $r$</span> makes domestic assets less attractive relative to foreign assets:</p>
<ul>
<li>Residents buy <span class="key">more foreign</span> assets.</li>
<li>Foreigners buy <span class="key">fewer domestic</span> assets.</li>
<li>Therefore <span class="key">$NCO$ rises</span>.</li>
</ul>
<p>So the $NCO$ curve (plotted against $r$) is <span class="key">downward-sloping</span>: high $r$ → low $NCO$, low $r$ → high $NCO$.</p>
<div class="tip">Exam: if a question tells you "$r$ rises," your very next sentence should be "so $NCO$ falls." That single link drives every policy result this week.</div>`,
            id: `<p>$r$ adalah imbal hasil riil aset <span class="key">domestik</span>. <span class="key">Penurunan $r$</span> membuat aset domestik kurang menarik dibanding aset asing:</p>
<ul>
<li>Penduduk membeli <span class="key">lebih banyak aset asing</span>.</li>
<li>Pihak asing membeli <span class="key">lebih sedikit aset domestik</span>.</li>
<li>Karena itu <span class="key">$NCO$ naik</span>.</li>
</ul>
<p>Jadi kurva $NCO$ (terhadap $r$) <span class="key">melandai ke bawah</span>: $r$ tinggi → $NCO$ rendah, $r$ rendah → $NCO$ tinggi.</p>
<div class="tip">Ujian: jika soal menyebut "$r$ naik", kalimat berikutnya harus "maka $NCO$ turun". Satu kaitan ini menggerakkan semua hasil kebijakan minggu ini.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The market for foreign-currency exchange', id: 'Pasar pertukaran mata uang asing' },
      num: '3',
      cards: [
        {
          title: { en: 'Supply, demand, and the NCO = NX identity', id: 'Penawaran, permintaan, dan identitas NCO = NX' },
          html: {
            en: `<p>In this market dollars are traded for foreign currency. The key accounting identity holds at all times:</p>
<div class="formula">$$NCO = NX$$</div>
<ul>
<li><span class="key">Demand for dollars</span> comes from <span class="key">net exports $NX$</span>: foreigners need dollars to pay for U.S. net exports.</li>
<li><span class="key">Supply of dollars</span> comes from <span class="key">net capital outflow $NCO$</span>: residents sell dollars to obtain the foreign currency they need to buy foreign assets.</li>
</ul>
<p>Because $NCO$ was already fixed by the LF market, the <span class="key">supply of dollars is vertical</span> (it does not depend on $E$). The real exchange rate $E$ adjusts so that $NX$ (demand) equals $NCO$ (supply).</p>
<div class="note">Supply of dollars is vertical: a change in $E$ has <em>no</em> effect on $S$ or $I$, so it does not affect $NCO$. This is why so many policies end up moving $E$ but not the trade balance.</div>`,
            id: `<p>Di pasar ini dolar dipertukarkan dengan mata uang asing. Identitas akuntansi kunci selalu berlaku:</p>
<div class="formula">$$NCO = NX$$</div>
<ul>
<li><span class="key">Permintaan dolar</span> berasal dari <span class="key">ekspor neto $NX$</span>: pihak asing butuh dolar untuk membayar ekspor neto AS.</li>
<li><span class="key">Penawaran dolar</span> berasal dari <span class="key">arus modal keluar neto $NCO$</span>: penduduk menjual dolar untuk memperoleh mata uang asing guna membeli aset asing.</li>
</ul>
<p>Karena $NCO$ sudah ditetapkan oleh pasar LF, <span class="key">penawaran dolar bersifat vertikal</span> (tidak bergantung pada $E$). Nilai tukar riil $E$ menyesuaikan agar $NX$ (permintaan) sama dengan $NCO$ (penawaran).</p>
<div class="note">Penawaran dolar vertikal: perubahan $E$ <em>tidak</em> memengaruhi $S$ maupun $I$, sehingga tidak memengaruhi $NCO$. Inilah sebabnya banyak kebijakan akhirnya menggerakkan $E$ tetapi tidak neraca perdagangan.</div>`
          }
        },
        {
          title: { en: 'The real exchange rate E', id: 'Nilai tukar riil E' },
          html: {
            en: `<p>The <span class="key">real exchange rate $E$</span> measures the quantity of foreign goods &amp; services that trade for one unit of domestic goods &amp; services — the real value of a dollar:</p>
<div class="formula">$$E = \\frac{e \\times P}{P^{*}}$$</div>
<p>where $e$ = nominal exchange rate (foreign currency per dollar), $P$ = domestic price level, $P^{*}$ = foreign price level.</p>
<ul>
<li>A <span class="key">higher $E$ (appreciation)</span> makes domestic goods more expensive to foreigners → quantity of dollars demanded falls → $NX$ falls.</li>
<li>A <span class="key">lower $E$ (depreciation)</span> makes domestic goods cheaper → $NX$ rises.</li>
</ul>
<p>So the demand-for-dollars curve ($NX$) is <span class="key">downward-sloping in $E$</span>.</p>
<div class="tip">"Appreciate" = $E$ up = currency stronger = exports look pricier abroad → $NX$ down. "Depreciate" = $E$ down = $NX$ up. Memorize this direction.</div>`,
            id: `<p><span class="key">Nilai tukar riil $E$</span> mengukur jumlah barang &amp; jasa asing yang dipertukarkan untuk satu unit barang &amp; jasa domestik — nilai riil sebuah dolar:</p>
<div class="formula">$$E = \\frac{e \\times P}{P^{*}}$$</div>
<p>dengan $e$ = nilai tukar nominal (mata uang asing per dolar), $P$ = tingkat harga domestik, $P^{*}$ = tingkat harga asing.</p>
<ul>
<li><span class="key">$E$ lebih tinggi (apresiasi)</span> membuat barang domestik lebih mahal bagi pihak asing → jumlah dolar yang diminta turun → $NX$ turun.</li>
<li><span class="key">$E$ lebih rendah (depresiasi)</span> membuat barang domestik lebih murah → $NX$ naik.</li>
</ul>
<p>Jadi kurva permintaan dolar ($NX$) <span class="key">melandai ke bawah terhadap $E$</span>.</p>
<div class="tip">"Apresiasi" = $E$ naik = mata uang menguat = ekspor terlihat lebih mahal di luar negeri → $NX$ turun. "Depresiasi" = $E$ turun = $NX$ naik. Hafalkan arah ini.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Policy application 1 — budget deficit', id: 'Penerapan kebijakan 1 — defisit anggaran' },
      num: '4',
      cards: [
        {
          title: { en: 'Crowding out + appreciation + falling NX', id: 'Crowding out + apresiasi + NX turun' },
          html: {
            en: `<p>Start from a balanced budget and balanced trade ($NX = 0$). The government now runs a <span class="key">budget deficit</span>.</p>
<ol>
<li>A deficit reduces <span class="key">national saving $S$</span> → supply of loanable funds shifts <span class="key">left</span> → <span class="key">$r$ rises</span> (crowding out).</li>
<li>Higher $r$ → <span class="key">$NCO$ falls</span> → supply of dollars in the FX market shifts <span class="key">left</span>.</li>
<li>With supply of dollars lower, the dollar <span class="key">appreciates ($E$ rises)</span>.</li>
<li>Appreciation makes exports pricier → <span class="key">$NX$ falls</span>. Since $NX$ started at 0, the deficit produces a <span class="key">trade deficit ($NX &lt; 0$)</span>.</li>
</ol>
<div class="note">A budget deficit and a trade deficit appear together here — the famous <span class="key">"twin deficits."</span></div>`,
            id: `<p>Mulai dari anggaran seimbang dan perdagangan seimbang ($NX = 0$). Pemerintah kini menjalankan <span class="key">defisit anggaran</span>.</p>
<ol>
<li>Defisit menurunkan <span class="key">tabungan nasional $S$</span> → penawaran dana pinjaman bergeser ke <span class="key">kiri</span> → <span class="key">$r$ naik</span> (crowding out).</li>
<li>$r$ lebih tinggi → <span class="key">$NCO$ turun</span> → penawaran dolar di pasar FX bergeser ke <span class="key">kiri</span>.</li>
<li>Dengan penawaran dolar lebih rendah, dolar <span class="key">terapresiasi ($E$ naik)</span>.</li>
<li>Apresiasi membuat ekspor lebih mahal → <span class="key">$NX$ turun</span>. Karena $NX$ semula 0, defisit menghasilkan <span class="key">defisit perdagangan ($NX &lt; 0$)</span>.</li>
</ol>
<div class="note">Defisit anggaran dan defisit perdagangan muncul bersamaan di sini — <span class="key">"defisit kembar" (twin deficits)</span> yang terkenal.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Policy application 2 — trade policy', id: 'Penerapan kebijakan 2 — kebijakan perdagangan' },
      num: '5',
      cards: [
        {
          title: { en: 'Tariffs and quotas do not change the trade balance', id: 'Tarif dan kuota tidak mengubah neraca perdagangan' },
          html: {
            en: `<p><span class="key">Trade policy</span> directly limits imports or exports. A <span class="key">tariff</span> taxes imports; an <span class="key">import quota</span> caps their quantity. Both are sometimes sold as ways to "save jobs" or "cut the trade deficit." Trace an import quota on cars:</p>
<ol>
<li>A quota <span class="key">does not touch $S$ or $I$</span>, so $NCO$ is unchanged → the <span class="key">supply of dollars stays fixed</span>.</li>
<li>At each $E$, imports fall so $NX$ rises → demand for dollars shifts <span class="key">right</span>.</li>
<li>Excess demand for dollars pushes $E$ up → the dollar <span class="key">appreciates</span>.</li>
<li>Because $NX = NCO$ and $NCO$ is fixed, $E$ must rise <span class="key">just enough to return $NX$ to its original level</span>.</li>
</ol>
<div class="note">Net result: <span class="key">$NX$ is unchanged.</span> The quota does not reduce the trade deficit. It saves jobs in the protected industry but destroys jobs in export industries, because the appreciation hurts exporters.</div>`,
            id: `<p><span class="key">Kebijakan perdagangan</span> langsung membatasi impor atau ekspor. <span class="key">Tarif</span> mengenakan pajak atas impor; <span class="key">kuota impor</span> membatasi jumlahnya. Keduanya kadang dijual sebagai cara "menyelamatkan lapangan kerja" atau "memangkas defisit perdagangan." Telusuri kuota impor mobil:</p>
<ol>
<li>Kuota <span class="key">tidak menyentuh $S$ maupun $I$</span>, jadi $NCO$ tak berubah → <span class="key">penawaran dolar tetap</span>.</li>
<li>Pada tiap $E$, impor turun sehingga $NX$ naik → permintaan dolar bergeser ke <span class="key">kanan</span>.</li>
<li>Kelebihan permintaan dolar mendorong $E$ naik → dolar <span class="key">terapresiasi</span>.</li>
<li>Karena $NX = NCO$ dan $NCO$ tetap, $E$ harus naik <span class="key">tepat secukupnya untuk mengembalikan $NX$ ke tingkat semula</span>.</li>
</ol>
<div class="note">Hasil neto: <span class="key">$NX$ tidak berubah.</span> Kuota tidak memangkas defisit perdagangan. Ia menyelamatkan lapangan kerja di industri yang dilindungi tetapi menghancurkan lapangan kerja di industri ekspor, karena apresiasi merugikan eksportir.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Policy application 3 — capital flight', id: 'Penerapan kebijakan 3 — pelarian modal' },
      num: '6',
      cards: [
        {
          title: { en: 'Political instability: higher r, depreciating currency', id: 'Ketidakstabilan politik: r naik, mata uang terdepresiasi' },
          html: {
            en: `<p><span class="key">Capital flight</span> is a large, sudden fall in demand for a country's assets — e.g. investors fleeing political instability in Mexico (or Venezuela in the essay prompt).</p>
<ol>
<li>Foreigners dump their assets and pull capital out → <span class="key">$NCO$ rises at every $r$</span> (the $NCO$ curve shifts right).</li>
<li>Demand for loanable funds is $D = I + NCO$, so higher $NCO$ shifts LF demand <span class="key">right</span> → <span class="key">$r$ rises</span> and <span class="key">$NCO$ rises</span>.</li>
<li>Higher $NCO$ raises the <span class="key">supply of pesos</span> in the FX market → supply shifts right.</li>
<li>The real exchange rate of the peso <span class="key">falls — the currency depreciates ($E$ down)</span>.</li>
</ol>
<div class="note">Capital flight is the one big case where the currency <span class="key">depreciates</span>. Compare with the budget deficit and trade restriction, which both <span class="key">appreciate</span> the currency.</div>`,
            id: `<p><span class="key">Pelarian modal (capital flight)</span> adalah penurunan permintaan aset suatu negara yang besar dan tiba-tiba — misalnya investor melarikan diri dari ketidakstabilan politik di Meksiko (atau Venezuela pada soal esai).</p>
<ol>
<li>Pihak asing melepas asetnya dan menarik modal keluar → <span class="key">$NCO$ naik pada tiap $r$</span> (kurva $NCO$ bergeser ke kanan).</li>
<li>Permintaan dana pinjaman adalah $D = I + NCO$, jadi $NCO$ yang lebih tinggi menggeser permintaan LF ke <span class="key">kanan</span> → <span class="key">$r$ naik</span> dan <span class="key">$NCO$ naik</span>.</li>
<li>$NCO$ yang lebih tinggi menaikkan <span class="key">penawaran peso</span> di pasar FX → penawaran bergeser ke kanan.</li>
<li>Nilai tukar riil peso <span class="key">turun — mata uang terdepresiasi ($E$ turun)</span>.</li>
</ol>
<div class="note">Pelarian modal adalah satu-satunya kasus besar di mana mata uang <span class="key">terdepresiasi</span>. Bandingkan dengan defisit anggaran dan pembatasan impor, yang keduanya membuat mata uang <span class="key">terapresiasi</span>.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Chapter in a nutshell', id: 'Ringkasan bab' },
      num: '7',
      cards: [
        {
          title: { en: 'The three results to memorize', id: 'Tiga hasil yang perlu dihafal' },
          html: {
            en: `<table>
<thead><tr><th>Shock</th><th>$r$</th><th>$NCO$</th><th>$E$</th><th>$NX$</th></tr></thead>
<tbody>
<tr><td>Budget deficit</td><td>↑</td><td>↓</td><td>↑ appreciate</td><td>↓</td></tr>
<tr><td>Import tariff / quota</td><td>—</td><td>—</td><td>↑ appreciate</td><td>— (no change)</td></tr>
<tr><td>Capital flight</td><td>↑</td><td>↑</td><td>↓ depreciate</td><td>↑</td></tr>
</tbody>
</table>
<div class="tip">Notice the symmetry: a deficit lowers $NCO$ and appreciates; capital flight raises $NCO$ and depreciates. Trade policy moves $E$ but leaves $NX$ alone because $NCO$ is untouched.</div>`,
            id: `<table>
<thead><tr><th>Guncangan</th><th>$r$</th><th>$NCO$</th><th>$E$</th><th>$NX$</th></tr></thead>
<tbody>
<tr><td>Defisit anggaran</td><td>↑</td><td>↓</td><td>↑ apresiasi</td><td>↓</td></tr>
<tr><td>Tarif / kuota impor</td><td>—</td><td>—</td><td>↑ apresiasi</td><td>— (tetap)</td></tr>
<tr><td>Pelarian modal</td><td>↑</td><td>↑</td><td>↓ depresiasi</td><td>↑</td></tr>
</tbody>
</table>
<div class="tip">Perhatikan simetrinya: defisit menurunkan $NCO$ dan menyebabkan apresiasi; pelarian modal menaikkan $NCO$ dan menyebabkan depresiasi. Kebijakan perdagangan menggerakkan $E$ tetapi membiarkan $NX$ tetap karena $NCO$ tidak tersentuh.</div>`
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
          title: { en: 'Saving splits two ways', id: 'Tabungan terbagi dua arah' },
          html: {
            en: `<div class="formula">$$S = I + NCO$$</div>
<p>National saving $S$ funds domestic investment $I$ <em>and</em> net capital outflow $NCO$. This is the <span class="key">supply = demand</span> condition in the loanable-funds market: supply is $S$, demand is $I + NCO$.</p>
<p><strong>Use it</strong> to find $NCO$ once you know $S$ and $I$, and to see why $NCO$ sits on the demand side of the LF market.</p>`,
            id: `<div class="formula">$$S = I + NCO$$</div>
<p>Tabungan nasional $S$ membiayai investasi domestik $I$ <em>dan</em> arus modal keluar neto $NCO$. Inilah kondisi <span class="key">penawaran = permintaan</span> di pasar dana pinjaman: penawaran adalah $S$, permintaan adalah $I + NCO$.</p>
<p><strong>Gunakan</strong> untuk mencari $NCO$ setelah $S$ dan $I$ diketahui, dan untuk melihat mengapa $NCO$ berada di sisi permintaan pasar LF.</p>`
          }
        },
        {
          title: { en: 'The FX market identity', id: 'Identitas pasar FX' },
          html: {
            en: `<div class="formula">$$NCO = NX$$</div>
<p>Net capital outflow equals net exports at all times. $NCO$ is the <span class="key">supply of dollars</span> (vertical, fixed by the LF market); $NX$ is the <span class="key">demand for dollars</span> (downward-sloping in $E$). $E$ adjusts to make them equal.</p>
<p><strong>Use it</strong> as the punchline of every policy trace: whatever happens, $NX$ must end up equal to whatever $NCO$ is.</p>`,
            id: `<div class="formula">$$NCO = NX$$</div>
<p>Arus modal keluar neto selalu sama dengan ekspor neto. $NCO$ adalah <span class="key">penawaran dolar</span> (vertikal, ditetapkan pasar LF); $NX$ adalah <span class="key">permintaan dolar</span> (melandai ke bawah terhadap $E$). $E$ menyesuaikan agar keduanya sama.</p>
<p><strong>Gunakan</strong> sebagai kesimpulan tiap penelusuran kebijakan: apa pun yang terjadi, $NX$ harus berakhir sama dengan berapa pun $NCO$.</p>`
          }
        },
        {
          title: { en: 'National saving from the accounting identity', id: 'Tabungan nasional dari identitas akuntansi' },
          html: {
            en: `<div class="formula">$$S = Y - C - G \\qquad NX = Y - C - I - G$$</div>
<p>Closed-form bookkeeping: national saving is GDP $Y$ minus consumption $C$ and government purchases $G$. Rearranging the expenditure identity $Y = C + I + G + NX$ gives investment and $NX$.</p>
<p><strong>Use it</strong> for the Micronesia-style quant problems: plug $Y$, $C$, $G$, $NX$ to get $S$, then $I = S - NX = S - NCO$.</p>`,
            id: `<div class="formula">$$S = Y - C - G \\qquad NX = Y - C - I - G$$</div>
<p>Pembukuan bentuk tertutup: tabungan nasional adalah PDB $Y$ dikurangi konsumsi $C$ dan belanja pemerintah $G$. Menyusun ulang identitas pengeluaran $Y = C + I + G + NX$ memberikan investasi dan $NX$.</p>
<p><strong>Gunakan</strong> untuk soal kuantitatif gaya Micronesia: masukkan $Y$, $C$, $G$, $NX$ untuk mendapat $S$, lalu $I = S - NX = S - NCO$.</p>`
          }
        },
        {
          title: { en: 'The real exchange rate', id: 'Nilai tukar riil' },
          html: {
            en: `<div class="formula">$$E = \\frac{e \\times P}{P^{*}}$$</div>
<p>$E$ = real exchange rate, $e$ = nominal rate (foreign currency per unit of domestic), $P$ = domestic price level, $P^{*}$ = foreign price level. $E$ tells you how many units of foreign goods one unit of domestic goods buys.</p>
<p><strong>Use it</strong> to compare prices across countries: convert one price into the other currency at $e$, then compare.</p>
<div class="note">Appreciation = $E$ rises; depreciation = $E$ falls.</div>`,
            id: `<div class="formula">$$E = \\frac{e \\times P}{P^{*}}$$</div>
<p>$E$ = nilai tukar riil, $e$ = nilai tukar nominal (mata uang asing per unit domestik), $P$ = tingkat harga domestik, $P^{*}$ = tingkat harga asing. $E$ menunjukkan berapa unit barang asing yang dibeli oleh satu unit barang domestik.</p>
<p><strong>Gunakan</strong> untuk membandingkan harga antarnegara: konversikan satu harga ke mata uang lain memakai $e$, lalu bandingkan.</p>
<div class="note">Apresiasi = $E$ naik; depresiasi = $E$ turun.</div>`
          }
        }
      ]
    }
  ],

  /* =========================================================================
     GRAPHS  (inline SVG, no charting library)
     ========================================================================= */
  graphs: [
    {
      heading: { en: 'The three-panel model', id: 'Model tiga panel' },
      num: '1',
      cards: [
        {
          title: { en: 'How the three panels connect', id: 'Bagaimana ketiga panel terhubung' },
          html: {
            en: `<p>The open economy is read across <span class="key">three panels, left to right</span>. Panel (1) fixes $r$; panel (2) turns $r$ into $NCO$; panel (3) turns $NCO$ into $E$.</p>
<svg viewBox="0 0 760 230" width="100%" style="max-width:760px;font-family:Inter,sans-serif;font-size:12px">
  <!-- Panel 1: LF -->
  <line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="22" y="16">r</text><text x="200" y="198">LF</text>
  <line x1="120" y1="20" x2="120" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="124" y="32" fill="#0e8fb8">S</text>
  <line x1="55" y1="40" x2="210" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="186" y="166" fill="#c0392b">D=I+NCO</text>
  <circle cx="120" cy="105" r="3.5" fill="#111"/>
  <line x1="40" y1="105" x2="120" y2="105" stroke="#888" stroke-dasharray="3 3"/>
  <text x="24" y="109">r₁</text>
  <text x="90" y="218" font-weight="600">(1) Loanable funds → r</text>

  <!-- Panel 2: NCO -->
  <line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="272" y="16">r</text><text x="446" y="198">NCO</text>
  <line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="436" y="58" fill="#c0392b">NCO(r)</text>
  <line x1="290" y1="105" x2="385" y2="105" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="385" y1="105" x2="385" y2="180" stroke="#888" stroke-dasharray="3 3"/>
  <circle cx="385" cy="105" r="3.5" fill="#111"/>
  <text x="274" y="109">r₁</text>
  <text x="330" y="218" font-weight="600">(2) r → NCO</text>

  <!-- Panel 3: FX -->
  <line x1="540" y1="20" x2="540" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="540" y1="180" x2="720" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="522" y="16">E</text><text x="690" y="198">$ (FX)</text>
  <line x1="630" y1="20" x2="630" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="600" y="32" fill="#0e8fb8">S=NCO</text>
  <line x1="555" y1="40" x2="710" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="686" y="166" fill="#c0392b">D=NX</text>
  <circle cx="630" cy="105" r="3.5" fill="#111"/>
  <line x1="540" y1="105" x2="630" y2="105" stroke="#888" stroke-dasharray="3 3"/>
  <text x="524" y="109">E₁</text>
  <text x="560" y="218" font-weight="600">(3) NCO → E</text>
</svg>
<div class="note">The supply of dollars in panel (3) is <span class="key">vertical</span> because it is just $NCO$, already fixed in panel (2). That verticality is the engine behind the trade-policy result.</div>`,
            id: `<p>Perekonomian terbuka dibaca melintasi <span class="key">tiga panel, dari kiri ke kanan</span>. Panel (1) menetapkan $r$; panel (2) mengubah $r$ menjadi $NCO$; panel (3) mengubah $NCO$ menjadi $E$.</p>
<svg viewBox="0 0 760 230" width="100%" style="max-width:760px;font-family:Inter,sans-serif;font-size:12px">
  <line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="22" y="16">r</text><text x="200" y="198">LF</text>
  <line x1="120" y1="20" x2="120" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="124" y="32" fill="#0e8fb8">S</text>
  <line x1="55" y1="40" x2="210" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="186" y="166" fill="#c0392b">D=I+NCO</text>
  <circle cx="120" cy="105" r="3.5" fill="#111"/>
  <line x1="40" y1="105" x2="120" y2="105" stroke="#888" stroke-dasharray="3 3"/>
  <text x="24" y="109">r₁</text>
  <text x="78" y="218" font-weight="600">(1) Dana pinjaman → r</text>

  <line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="272" y="16">r</text><text x="446" y="198">NCO</text>
  <line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="436" y="58" fill="#c0392b">NCO(r)</text>
  <line x1="290" y1="105" x2="385" y2="105" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="385" y1="105" x2="385" y2="180" stroke="#888" stroke-dasharray="3 3"/>
  <circle cx="385" cy="105" r="3.5" fill="#111"/>
  <text x="274" y="109">r₁</text>
  <text x="330" y="218" font-weight="600">(2) r → NCO</text>

  <line x1="540" y1="20" x2="540" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="540" y1="180" x2="720" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="522" y="16">E</text><text x="690" y="198">$ (FX)</text>
  <line x1="630" y1="20" x2="630" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="600" y="32" fill="#0e8fb8">S=NCO</text>
  <line x1="555" y1="40" x2="710" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="686" y="166" fill="#c0392b">D=NX</text>
  <circle cx="630" cy="105" r="3.5" fill="#111"/>
  <line x1="540" y1="105" x2="630" y2="105" stroke="#888" stroke-dasharray="3 3"/>
  <text x="524" y="109">E₁</text>
  <text x="560" y="218" font-weight="600">(3) NCO → E</text>
</svg>
<div class="note">Penawaran dolar di panel (3) bersifat <span class="key">vertikal</span> karena ia hanyalah $NCO$, yang sudah ditetapkan di panel (2). Sifat vertikal itulah mesin di balik hasil kebijakan perdagangan.</div>`
          }
        }
      ]
    },
    {
      heading: { en: 'Policy shift cases', id: 'Kasus pergeseran kebijakan' },
      num: '2',
      cards: [
        {
          title: { en: 'Case A — Budget deficit', id: 'Kasus A — Defisit anggaran' },
          html: {
            en: `<p>The deficit shifts the LF <span class="key">supply left</span> ($S_1\\!\\to\\!S_2$): $r$ rises, $NCO$ falls, the supply of dollars shifts left, and the currency <span class="key">appreciates</span> ($E_1\\!\\to\\!E_2$), cutting $NX$.</p>
<svg viewBox="0 0 500 220" width="100%" style="max-width:500px;font-family:Inter,sans-serif;font-size:12px">
  <!-- LF panel -->
  <line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="22" y="16">r</text><text x="200" y="198">LF</text>
  <line x1="110" y1="20" x2="110" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="92" y="32" fill="#0e8fb8">S₁</text>
  <line x1="150" y1="20" x2="150" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="152" y="32" fill="#0e8fb8">S₂</text>
  <line x1="55" y1="40" x2="210" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="184" y="166" fill="#c0392b">D</text>
  <circle cx="110" cy="118" r="3.5" fill="#111"/><text x="22" y="122">r₁</text>
  <circle cx="150" cy="85" r="3.5" fill="#111"/><text x="22" y="89">r₂</text>
  <line x1="40" y1="85" x2="150" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="40" y1="118" x2="110" y2="118" stroke="#888" stroke-dasharray="3 3"/>
  <path d="M118 70 q14 -12 28 0" fill="none" stroke="#777" marker-end="url(#aL)"/>
  <text x="120" y="215" font-weight="600">r ↑</text>
  <!-- FX panel -->
  <line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="272" y="16">E</text><text x="446" y="198">$</text>
  <line x1="400" y1="20" x2="400" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="372" y="32" fill="#0e8fb8">S₁=NCO₁</text>
  <line x1="360" y1="20" x2="360" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="330" y="46" fill="#0e8fb8">S₂=NCO₂</text>
  <line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="440" y="166" fill="#c0392b">D=NX</text>
  <circle cx="400" cy="118" r="3.5" fill="#111"/><text x="272" y="122">E₁</text>
  <circle cx="360" cy="85" r="3.5" fill="#111"/><text x="272" y="89">E₂</text>
  <line x1="290" y1="85" x2="360" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="290" y1="118" x2="400" y2="118" stroke="#888" stroke-dasharray="3 3"/>
  <text x="350" y="215" font-weight="600">E ↑ (appreciate)</text>
  <defs><marker id="aL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#777"/></marker></defs>
</svg>`,
            id: `<p>Defisit menggeser <span class="key">penawaran LF ke kiri</span> ($S_1\\!\\to\\!S_2$): $r$ naik, $NCO$ turun, penawaran dolar bergeser ke kiri, dan mata uang <span class="key">terapresiasi</span> ($E_1\\!\\to\\!E_2$), memangkas $NX$.</p>
<svg viewBox="0 0 500 220" width="100%" style="max-width:500px;font-family:Inter,sans-serif;font-size:12px">
  <line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="22" y="16">r</text><text x="200" y="198">LF</text>
  <line x1="110" y1="20" x2="110" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="92" y="32" fill="#0e8fb8">S₁</text>
  <line x1="150" y1="20" x2="150" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="152" y="32" fill="#0e8fb8">S₂</text>
  <line x1="55" y1="40" x2="210" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="184" y="166" fill="#c0392b">D</text>
  <circle cx="110" cy="118" r="3.5" fill="#111"/><text x="22" y="122">r₁</text>
  <circle cx="150" cy="85" r="3.5" fill="#111"/><text x="22" y="89">r₂</text>
  <line x1="40" y1="85" x2="150" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="40" y1="118" x2="110" y2="118" stroke="#888" stroke-dasharray="3 3"/>
  <text x="118" y="215" font-weight="600">r ↑</text>
  <line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="272" y="16">E</text><text x="446" y="198">$</text>
  <line x1="400" y1="20" x2="400" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="372" y="32" fill="#0e8fb8">S₁=NCO₁</text>
  <line x1="360" y1="20" x2="360" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="330" y="46" fill="#0e8fb8">S₂=NCO₂</text>
  <line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="440" y="166" fill="#c0392b">D=NX</text>
  <circle cx="400" cy="118" r="3.5" fill="#111"/><text x="272" y="122">E₁</text>
  <circle cx="360" cy="85" r="3.5" fill="#111"/><text x="272" y="89">E₂</text>
  <line x1="290" y1="85" x2="360" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="290" y1="118" x2="400" y2="118" stroke="#888" stroke-dasharray="3 3"/>
  <text x="338" y="215" font-weight="600">E ↑ (apresiasi)</text>
</svg>`
          }
        },
        {
          title: { en: 'Case B — Import quota', id: 'Kasus B — Kuota impor' },
          html: {
            en: `<p>The quota leaves $NCO$ (the vertical supply of dollars) <span class="key">unchanged</span> but shifts the demand for dollars <span class="key">right</span> ($D_1\\!\\to\\!D_2$) because $NX$ rises at each $E$. $E$ rises until $NX$ is pushed back to its original level — so <span class="key">$NX$ does not change</span>.</p>
<svg viewBox="0 0 320 220" width="100%" style="max-width:320px;font-family:Inter,sans-serif;font-size:12px">
  <line x1="50" y1="20" x2="50" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="300" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="32" y="16">E</text><text x="278" y="198">$ (FX)</text>
  <line x1="170" y1="20" x2="170" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="120" y="32" fill="#0e8fb8">S = NCO (fixed)</text>
  <line x1="70" y1="60" x2="250" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="232" y="166" fill="#c0392b">D₁=NX</text>
  <line x1="110" y1="40" x2="290" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="266" y="146" fill="#c0392b">D₂</text>
  <circle cx="170" cy="115" r="3.5" fill="#111"/><text x="32" y="119">E₁</text>
  <circle cx="170" cy="85" r="3.5" fill="#111"/><text x="32" y="89">E₂</text>
  <line x1="50" y1="115" x2="170" y2="115" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="50" y1="85" x2="170" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <path d="M120 50 q18 -8 36 2" fill="none" stroke="#777" marker-end="url(#aQ)"/>
  <text x="92" y="215" font-weight="600">E ↑, NX unchanged</text>
  <defs><marker id="aQ" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#777"/></marker></defs>
</svg>
<div class="tip">The quantity of dollars never moves off the fixed $NCO$ line — that is the visual proof that $NX = NCO$ is unchanged.</div>`,
            id: `<p>Kuota membiarkan $NCO$ (penawaran dolar vertikal) <span class="key">tidak berubah</span> tetapi menggeser permintaan dolar ke <span class="key">kanan</span> ($D_1\\!\\to\\!D_2$) karena $NX$ naik pada tiap $E$. $E$ naik hingga $NX$ terdorong kembali ke tingkat semula — jadi <span class="key">$NX$ tidak berubah</span>.</p>
<svg viewBox="0 0 320 220" width="100%" style="max-width:320px;font-family:Inter,sans-serif;font-size:12px">
  <line x1="50" y1="20" x2="50" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="300" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="32" y="16">E</text><text x="278" y="198">$ (FX)</text>
  <line x1="170" y1="20" x2="170" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="116" y="32" fill="#0e8fb8">S = NCO (tetap)</text>
  <line x1="70" y1="60" x2="250" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="232" y="166" fill="#c0392b">D₁=NX</text>
  <line x1="110" y1="40" x2="290" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="266" y="146" fill="#c0392b">D₂</text>
  <circle cx="170" cy="115" r="3.5" fill="#111"/><text x="32" y="119">E₁</text>
  <circle cx="170" cy="85" r="3.5" fill="#111"/><text x="32" y="89">E₂</text>
  <line x1="50" y1="115" x2="170" y2="115" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="50" y1="85" x2="170" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <path d="M120 50 q18 -8 36 2" fill="none" stroke="#777" marker-end="url(#aQ2)"/>
  <text x="88" y="215" font-weight="600">E ↑, NX tetap</text>
  <defs><marker id="aQ2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#777"/></marker></defs>
</svg>
<div class="tip">Jumlah dolar tak pernah bergeser dari garis $NCO$ yang tetap — itulah bukti visual bahwa $NX = NCO$ tidak berubah.</div>`
          }
        },
        {
          title: { en: 'Case C — Capital flight', id: 'Kasus C — Pelarian modal' },
          html: {
            en: `<p>Capital flight shifts the $NCO$ curve <span class="key">right</span>, which shifts LF <span class="key">demand right</span> ($D_1\\!\\to\\!D_2$): $r$ rises and $NCO$ rises. The bigger $NCO$ shifts the supply of pesos <span class="key">right</span>, so the peso <span class="key">depreciates</span> ($E_1\\!\\to\\!E_2$, $E$ falls).</p>
<svg viewBox="0 0 500 220" width="100%" style="max-width:500px;font-family:Inter,sans-serif;font-size:12px">
  <!-- LF panel -->
  <line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="22" y="16">r</text><text x="200" y="198">LF</text>
  <line x1="130" y1="20" x2="130" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="112" y="32" fill="#0e8fb8">S</text>
  <line x1="55" y1="55" x2="200" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="176" y="166" fill="#c0392b">D₁</text>
  <line x1="80" y1="40" x2="215" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="196" y="146" fill="#c0392b">D₂</text>
  <circle cx="130" cy="113" r="3.5" fill="#111"/><text x="22" y="117">r₁</text>
  <circle cx="130" cy="85" r="3.5" fill="#111"/><text x="22" y="89">r₂</text>
  <line x1="40" y1="113" x2="130" y2="113" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="40" y1="85" x2="130" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <text x="118" y="215" font-weight="600">r ↑, NCO ↑</text>
  <!-- FX panel -->
  <line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="272" y="16">E</text><text x="446" y="198">peso</text>
  <line x1="350" y1="20" x2="350" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="320" y="32" fill="#0e8fb8">S₁=NCO₁</text>
  <line x1="400" y1="20" x2="400" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="402" y="46" fill="#0e8fb8">S₂=NCO₂</text>
  <line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="440" y="166" fill="#c0392b">D=NX</text>
  <circle cx="350" cy="92" r="3.5" fill="#111"/><text x="272" y="96">E₁</text>
  <circle cx="400" cy="125" r="3.5" fill="#111"/><text x="272" y="129">E₂</text>
  <line x1="290" y1="92" x2="350" y2="92" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="290" y1="125" x2="400" y2="125" stroke="#888" stroke-dasharray="3 3"/>
  <text x="330" y="215" font-weight="600">E ↓ (depreciate)</text>
</svg>`,
            id: `<p>Pelarian modal menggeser kurva $NCO$ ke <span class="key">kanan</span>, yang menggeser <span class="key">permintaan LF ke kanan</span> ($D_1\\!\\to\\!D_2$): $r$ naik dan $NCO$ naik. $NCO$ yang lebih besar menggeser penawaran peso ke <span class="key">kanan</span>, sehingga peso <span class="key">terdepresiasi</span> ($E_1\\!\\to\\!E_2$, $E$ turun).</p>
<svg viewBox="0 0 500 220" width="100%" style="max-width:500px;font-family:Inter,sans-serif;font-size:12px">
  <line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="22" y="16">r</text><text x="200" y="198">LF</text>
  <line x1="130" y1="20" x2="130" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="112" y="32" fill="#0e8fb8">S</text>
  <line x1="55" y1="55" x2="200" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="176" y="166" fill="#c0392b">D₁</text>
  <line x1="80" y1="40" x2="215" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="196" y="146" fill="#c0392b">D₂</text>
  <circle cx="130" cy="113" r="3.5" fill="#111"/><text x="22" y="117">r₁</text>
  <circle cx="130" cy="85" r="3.5" fill="#111"/><text x="22" y="89">r₂</text>
  <line x1="40" y1="113" x2="130" y2="113" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="40" y1="85" x2="130" y2="85" stroke="#888" stroke-dasharray="3 3"/>
  <text x="116" y="215" font-weight="600">r ↑, NCO ↑</text>
  <line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>
  <line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>
  <text x="272" y="16">E</text><text x="446" y="198">peso</text>
  <line x1="350" y1="20" x2="350" y2="180" stroke="#0e8fb8" stroke-width="2"/>
  <text x="320" y="32" fill="#0e8fb8">S₁=NCO₁</text>
  <line x1="400" y1="20" x2="400" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="402" y="46" fill="#0e8fb8">S₂=NCO₂</text>
  <line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="440" y="166" fill="#c0392b">D=NX</text>
  <circle cx="350" cy="92" r="3.5" fill="#111"/><text x="272" y="96">E₁</text>
  <circle cx="400" cy="125" r="3.5" fill="#111"/><text x="272" y="129">E₂</text>
  <line x1="290" y1="92" x2="350" y2="92" stroke="#888" stroke-dasharray="3 3"/>
  <line x1="290" y1="125" x2="400" y2="125" stroke="#888" stroke-dasharray="3 3"/>
  <text x="324" y="215" font-weight="600">E ↓ (depresiasi)</text>
</svg>`
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
        en: 'Which of these causes the real exchange rate to DEPRECIATE: (a) a bigger budget deficit, (b) capital flight abroad, (c) an import restriction, (d) monetary contraction?',
        id: 'Manakah yang menyebabkan nilai tukar riil TERDEPRESIASI: (a) defisit anggaran yang lebih besar, (b) pelarian modal ke luar negeri, (c) kebijakan pembatasan impor, (d) kontraksi moneter?'
      },
      answer: [
        { en: 'Work through what each does to NCO and the supply of currency in the FX market.',
          id: 'Telusuri apa yang dilakukan masing-masing terhadap NCO dan penawaran mata uang di pasar FX.' },
        { en: 'A budget deficit (a) raises r, lowers NCO, cuts the supply of dollars → APPRECIATION. An import restriction (c) shifts demand for dollars right → APPRECIATION.',
          id: 'Defisit anggaran (a) menaikkan r, menurunkan NCO, memangkas penawaran dolar → APRESIASI. Pembatasan impor (c) menggeser permintaan dolar ke kanan → APRESIASI.' },
        { en: 'Capital flight (b) shifts NCO right, raising the supply of the currency in the FX market → the currency DEPRECIATES.',
          id: 'Pelarian modal (b) menggeser NCO ke kanan, menaikkan penawaran mata uang di pasar FX → mata uang TERDEPRESIASI.' },
        { en: 'Answer: (b) capital flight.',
          id: 'Jawaban: (b) pelarian modal.' }
      ],
      tip: {
        en: 'Capital flight is the lone "depreciation" case in this chapter; deficits and trade restrictions both appreciate.',
        id: 'Pelarian modal adalah satu-satunya kasus "depresiasi" di bab ini; defisit dan pembatasan perdagangan keduanya menyebabkan apresiasi.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'Ceteris paribus, if the equilibrium real interest rate in the U.S. rises, what happens to U.S. net capital outflow (NCO), and to other countries\' NCO?',
        id: 'Ceteris paribus, jika tingkat bunga riil keseimbangan di AS naik, apa yang terjadi pada arus modal keluar neto (NCO) AS, dan pada NCO negara lain?'
      },
      answer: [
        { en: 'A higher U.S. r makes U.S. assets more attractive: residents send less capital abroad and foreigners send more in → U.S. NCO falls.',
          id: 'r AS yang lebih tinggi membuat aset AS lebih menarik: penduduk mengirim lebih sedikit modal ke luar dan pihak asing mengirim lebih banyak masuk → NCO AS turun.' },
        { en: 'Capital flowing toward the U.S. is capital flowing OUT of other countries, so foreign NCO rises (mirror image).',
          id: 'Modal yang mengalir ke AS adalah modal yang KELUAR dari negara lain, sehingga NCO negara lain naik (bayangan cermin).' },
        { en: 'Answer: U.S. NCO falls while other countries\' NCO rises.',
          id: 'Jawaban: NCO AS turun sementara NCO negara lain naik.' }
      ],
      tip: {
        en: 'World NCO sums to zero — one country\'s inflow is another\'s outflow.',
        id: 'NCO dunia berjumlah nol — arus masuk satu negara adalah arus keluar negara lain.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'In 2025 Qatar switches from a budget DEFICIT to a budget SURPLUS. Using the three-panel model, which curves shift and in which direction?',
        id: 'Pada 2025 Qatar beralih dari DEFISIT anggaran ke SURPLUS anggaran. Memakai model tiga panel, kurva mana yang bergeser dan ke arah mana?'
      },
      context: {
        en: 'Panel (a) = loanable funds, panel (b) = NCO, panel (c) = foreign-currency exchange.',
        id: 'Panel (a) = dana pinjaman, panel (b) = NCO, panel (c) = pertukaran mata uang asing.'
      },
      answer: [
        { en: 'A move to surplus RAISES national saving, so the SUPPLY of loanable funds in panel (a) shifts RIGHT.',
          id: 'Beralih ke surplus MENAIKKAN tabungan nasional, jadi PENAWARAN dana pinjaman di panel (a) bergeser ke KANAN.' },
        { en: 'r falls → NCO rises → the supply of currency in panel (c) shifts RIGHT.',
          id: 'r turun → NCO naik → penawaran mata uang di panel (c) bergeser ke KANAN.' },
        { en: 'So: supply curve in panel (a) right, AND supply curve in panel (c) right. Answer: (c).',
          id: 'Jadi: kurva penawaran di panel (a) ke kanan, DAN kurva penawaran di panel (c) ke kanan. Jawaban: (c).' }
      ],
      tip: {
        en: 'A surplus is the mirror image of the deficit case: more saving, lower r, higher NCO, depreciation, higher NX.',
        id: 'Surplus adalah bayangan cermin kasus defisit: tabungan naik, r turun, NCO naik, depresiasi, NX naik.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'The U.S. raises an import tariff on cars. What happens in the foreign-currency exchange market, and to the real exchange rate?',
        id: 'AS menaikkan bea masuk impor mobil. Apa yang terjadi di pasar pertukaran mata uang asing, dan pada nilai tukar riil?'
      },
      answer: [
        { en: 'A tariff does not change S or I, so NCO and the (vertical) supply of dollars are unchanged.',
          id: 'Tarif tidak mengubah S atau I, sehingga NCO dan penawaran dolar (vertikal) tidak berubah.' },
        { en: 'At the current E, imports fall and NX rises → demand for dollars shifts right → there is EXCESS DEMAND for dollars at E₁.',
          id: 'Pada E saat ini, impor turun dan NX naik → permintaan dolar bergeser ke kanan → ada KELEBIHAN PERMINTAAN dolar pada E₁.' },
        { en: 'Excess demand pushes E up → the real exchange rate APPRECIATES. Answer: excess demand → appreciation (option c).',
          id: 'Kelebihan permintaan mendorong E naik → nilai tukar riil TERAPRESIASI. Jawaban: kelebihan permintaan → apresiasi (opsi c).' },
        { en: 'And NX returns to its original level, so the tariff does NOT shrink the trade deficit.',
          id: 'Dan NX kembali ke tingkat semula, sehingga tarif TIDAK memangkas defisit perdagangan.' }
      ],
      tip: {
        en: 'Trade restriction → excess demand for the currency → appreciation, but NX unchanged.',
        id: 'Pembatasan perdagangan → kelebihan permintaan mata uang → apresiasi, tetapi NX tetap.'
      }
    },
    {
      type: 'quant',
      q: {
        en: 'Micronesia (small open economy, $ billions): GDP = 7,400; Consumption = 4,550; Government purchases = 1,200; Net exports = −750. Find investment I, national saving S, and NCO.',
        id: 'Micronesia (perekonomian terbuka kecil, miliar $): PDB = 7.400; Konsumsi = 4.550; Belanja pemerintah = 1.200; Ekspor neto = −750. Hitung investasi I, tabungan nasional S, dan NCO.'
      },
      answer: [
        { en: 'Expenditure identity: Y = C + I + G + NX → I = Y − C − G − NX.',
          id: 'Identitas pengeluaran: Y = C + I + G + NX → I = Y − C − G − NX.' },
        { en: 'I = 7,400 − 4,550 − 1,200 − (−750) = 7,400 − 4,550 − 1,200 + 750 = 2,400.',
          id: 'I = 7.400 − 4.550 − 1.200 − (−750) = 7.400 − 4.550 − 1.200 + 750 = 2.400.' },
        { en: 'National saving: S = Y − C − G = 7,400 − 4,550 − 1,200 = 1,650.',
          id: 'Tabungan nasional: S = Y − C − G = 7.400 − 4.550 − 1.200 = 1.650.' },
        { en: 'NCO: from S = I + NCO → NCO = S − I = 1,650 − 2,400 = −750 (equals NX, as it must).',
          id: 'NCO: dari S = I + NCO → NCO = S − I = 1.650 − 2.400 = −750 (sama dengan NX, sebagaimana seharusnya).' },
        { en: 'Answer: I = $2,400 B, S = $1,650 B, NCO = −$750 B (a net capital inflow).',
          id: 'Jawaban: I = $2.400 M, S = $1.650 M, NCO = −$750 M (arus modal masuk neto).' }
      ],
      tip: {
        en: 'Check: NCO must equal NX. Both are −750 here, so the books balance.',
        id: 'Cek: NCO harus sama dengan NX. Keduanya −750 di sini, jadi pembukuannya seimbang.'
      }
    },
    {
      type: 'quant',
      q: {
        en: 'Cali (from Micronesia) sees a vintage hat in Macronesia priced at 45 Ma$. The same hat costs 39.99 Mi$ at home. The nominal rate is Mi$1 = Ma$1.12. Where is the hat cheaper?',
        id: 'Cali (dari Micronesia) melihat topi vintage di Macronesia seharga 45 Ma$. Topi yang sama berharga 39,99 Mi$ di negaranya. Nilai tukar nominal Mi$1 = Ma$1,12. Di negara mana topi itu lebih murah?'
      },
      answer: [
        { en: 'Put both prices in the same currency. Convert the Macronesian price into Mi$ at Mi$1 = Ma$1.12, i.e. divide the Ma$ price by 1.12.',
          id: 'Samakan kedua harga dalam satu mata uang. Konversikan harga Macronesia ke Mi$ dengan Mi$1 = Ma$1,12, yaitu bagi harga Ma$ dengan 1,12.' },
        { en: 'Macronesia hat in Mi$ = 45 ÷ 1.12 ≈ 40.18 Mi$.',
          id: 'Topi Macronesia dalam Mi$ = 45 ÷ 1,12 ≈ 40,18 Mi$.' },
        { en: 'Compare: home price 39.99 Mi$ vs imported-equivalent 40.18 Mi$.',
          id: 'Bandingkan: harga di negara sendiri 39,99 Mi$ vs setara impor 40,18 Mi$.' },
        { en: 'Answer: the hat is (slightly) CHEAPER in Micronesia (39.99 < 40.18 Mi$).',
          id: 'Jawaban: topi itu (sedikit) lebih MURAH di Micronesia (39,99 < 40,18 Mi$).' }
      ],
      tip: {
        en: 'Always express both prices in one currency before comparing — that is the real exchange rate idea in action.',
        id: 'Selalu nyatakan kedua harga dalam satu mata uang sebelum membandingkan — itulah ide nilai tukar riil dalam praktik.'
      }
    }
  ]
};
