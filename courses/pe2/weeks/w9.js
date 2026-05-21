/* ============================================================================
   PE2 · Week 9 — Aggregate Demand and Aggregate Supply (AD–AS)
   Source: Mankiw Ch. 34 · Sesi 9 (Nanda Alfarina)
   Bilingual (EN + ID). Registers itself on window.PE2_WEEKS.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   ============================================================================ */
window.PE2_WEEKS = window.PE2_WEEKS || {};
window.PE2_WEEKS.w9 = {
  id: 'w9',
  label: { en: 'Week 9', id: 'Minggu 9' },
  title: {
    en: 'Aggregate Demand & Aggregate Supply',
    id: 'Permintaan Agregat & Penawaran Agregat'
  },
  subtitle: {
    en: 'Why AD slopes down, why SRAS slopes up while LRAS is vertical, demand and supply shocks, and the self-correcting mechanism.',
    id: 'Mengapa AD melandai turun, mengapa SRAS melandai naik sementara LRAS tegak lurus, guncangan permintaan dan penawaran, serta mekanisme koreksi-diri.'
  },

  /* ----------------------------------------------------------------------- */
  /* NOTES                                                                   */
  /* ----------------------------------------------------------------------- */
  notes: [
    {
      heading: { en: 'The big picture: why a new model?', id: 'Gambaran besar: mengapa model baru?' },
      num: '1',
      cards: [
        {
          title: { en: 'Short-run fluctuations', id: 'Fluktuasi jangka pendek' },
          html: {
            en: `<p>Economic activity does not grow smoothly. <span class="key">Economic fluctuations</span> (the business cycle) are <b>irregular and unpredictable</b>, most macro quantities move <b>together</b>, and as output falls, <b>unemployment rises</b>.</p>
<ul>
<li><span class="key">Recession</span> — a period of <b>mild</b> falling incomes and rising unemployment.</li>
<li><span class="key">Depression</span> — a period of <b>severe</b> falling incomes and rising unemployment.</li>
</ul>
<div class="note"><b>Classical dichotomy &amp; monetary neutrality.</b> Classical theory splits variables into <i>real</i> (quantities, relative prices) and <i>nominal</i> (measured in money). It says money affects only nominal variables. This describes the <b>long run</b> well, but <b>not the short run</b> — over a year-to-year horizon real and nominal variables are tightly intertwined, so we need a model that lets the price level affect output.</p></div>`,
            id: `<p>Aktivitas ekonomi tidak tumbuh mulus. <span class="key">Fluktuasi ekonomi</span> (siklus bisnis) bersifat <b>tidak teratur dan sulit diprediksi</b>, sebagian besar besaran makro bergerak <b>bersama-sama</b>, dan ketika output turun, <b>pengangguran naik</b>.</p>
<ul>
<li><span class="key">Resesi</span> — periode penurunan pendapatan dan kenaikan pengangguran yang <b>ringan</b>.</li>
<li><span class="key">Depresi</span> — periode penurunan pendapatan dan kenaikan pengangguran yang <b>parah</b>.</li>
</ul>
<div class="note"><b>Dikotomi klasik &amp; netralitas uang.</b> Teori klasik memisahkan variabel menjadi <i>riil</i> (kuantitas, harga relatif) dan <i>nominal</i> (diukur dalam uang). Ia menyatakan uang hanya memengaruhi variabel nominal. Pandangan ini cocok untuk <b>jangka panjang</b>, tetapi <b>tidak untuk jangka pendek</b> — pada horizon tahun-ke-tahun variabel riil dan nominal sangat terjalin, sehingga kita butuh model yang membolehkan tingkat harga memengaruhi output.</div>`
          }
        },
        {
          title: { en: 'The two axes of the model', id: 'Dua sumbu model' },
          html: {
            en: `<p>The <span class="key">AD–AS model</span> plots two variables and lets them adjust until aggregate demand equals aggregate supply:</p>
<ul>
<li><b>$Y$</b> — real GDP: the total output of goods and services (horizontal axis).</li>
<li><b>$P$</b> — the overall price level, e.g. the CPI or GDP deflator (vertical axis).</li>
</ul>
<p><span class="key">Aggregate demand (AD)</span> = the quantity of goods and services that households, firms, the government, and customers abroad want to buy at each price level. It is built on the spending identity:</p>
<div class="formula">$$Y = C + I + G + NX$$</div>
<p><span class="key">Aggregate supply (AS)</span> = the quantity of goods and services that firms want to produce and sell at each price level.</p>
<div class="tip"><b>Do not confuse this with micro supply &amp; demand.</b> Here the axes are the price <i>level</i> and total output, not the price and quantity of one good. The reasons AD slopes down and AS behaves as it does are entirely different from the microeconomic story.</div>`,
            id: `<p><span class="key">Model AD–AS</span> memetakan dua variabel dan membiarkannya menyesuaikan sampai permintaan agregat sama dengan penawaran agregat:</p>
<ul>
<li><b>$Y$</b> — PDB riil: total output barang dan jasa (sumbu horizontal).</li>
<li><b>$P$</b> — tingkat harga keseluruhan, mis. IHK atau deflator PDB (sumbu vertikal).</li>
</ul>
<p><span class="key">Permintaan agregat (AD)</span> = jumlah barang dan jasa yang ingin dibeli rumah tangga, perusahaan, pemerintah, dan pembeli luar negeri pada setiap tingkat harga. Dibangun di atas identitas pengeluaran:</p>
<div class="formula">$$Y = C + I + G + NX$$</div>
<p><span class="key">Penawaran agregat (AS)</span> = jumlah barang dan jasa yang ingin diproduksi dan dijual perusahaan pada setiap tingkat harga.</p>
<div class="tip"><b>Jangan rancu dengan permintaan &amp; penawaran mikro.</b> Di sini sumbunya adalah <i>tingkat</i> harga dan total output, bukan harga dan kuantitas satu barang. Alasan AD melandai turun dan perilaku AS sama sekali berbeda dari kisah mikroekonomi.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Why the AD curve slopes downward', id: 'Mengapa kurva AD melandai turun' },
      num: '2',
      cards: [
        {
          html: {
            en: `<p>A lower price level $P$ raises the quantity of goods and services demanded ($Y$) through <b>three distinct effects</b>. (Holding the money supply fixed.)</p>
<ul>
<li><span class="key">Wealth effect</span> ($C$) — a lower $P$ raises the real value of the money people hold. They feel richer and can buy more, so <b>consumption rises</b>.</li>
<li><span class="key">Interest-rate effect</span> ($I$) — a lower $P$ means households need less money for transactions; they lend the surplus out, the <b>interest rate falls</b>, and lower rates stimulate <b>investment</b>.</li>
<li><span class="key">Exchange-rate effect</span> ($NX$) — the lower interest rate (from the effect above) sends capital abroad, the real value of the currency <b>depreciates</b>, domestic goods become cheaper to foreigners, and <b>net exports rise</b>.</li>
</ul>
<p>All three say the same thing: <b>$P\\downarrow \\Rightarrow Y\\uparrow$</b> (and vice versa), so AD slopes downward.</p>
<div class="tip"><b>Memory hook:</b> three effects, three letters of spending — Wealth&nbsp;→&nbsp;$C$, Interest-rate&nbsp;→&nbsp;$I$, Exchange-rate&nbsp;→&nbsp;$NX$.</div>`,
            id: `<p>Tingkat harga $P$ yang lebih rendah meningkatkan jumlah barang dan jasa yang diminta ($Y$) melalui <b>tiga efek yang berbeda</b>. (Jumlah uang beredar dianggap tetap.)</p>
<ul>
<li><span class="key">Efek kekayaan</span> ($C$) — $P$ yang lebih rendah menaikkan nilai riil uang yang dipegang masyarakat. Mereka merasa lebih kaya dan bisa membeli lebih banyak, sehingga <b>konsumsi naik</b>.</li>
<li><span class="key">Efek tingkat bunga</span> ($I$) — $P$ yang lebih rendah membuat rumah tangga butuh lebih sedikit uang untuk transaksi; kelebihannya dipinjamkan, <b>tingkat bunga turun</b>, dan bunga rendah mendorong <b>investasi</b>.</li>
<li><span class="key">Efek nilai tukar</span> ($NX$) — tingkat bunga yang lebih rendah (dari efek di atas) mengalirkan modal ke luar negeri, nilai riil mata uang <b>terdepresiasi</b>, barang domestik menjadi lebih murah bagi asing, dan <b>ekspor neto naik</b>.</li>
</ul>
<p>Ketiganya mengatakan hal yang sama: <b>$P\\downarrow \\Rightarrow Y\\uparrow$</b> (dan sebaliknya), sehingga AD melandai turun.</p>
<div class="tip"><b>Jembatan ingatan:</b> tiga efek, tiga komponen pengeluaran — Kekayaan&nbsp;→&nbsp;$C$, Tingkat bunga&nbsp;→&nbsp;$I$, Nilai tukar&nbsp;→&nbsp;$NX$.</div>`
          }
        },
        {
          title: { en: 'What shifts the AD curve', id: 'Apa yang menggeser kurva AD' },
          html: {
            en: `<p><b>Any event that changes $C$, $I$, $G$, or $NX$ at a given price level shifts AD.</b> A move <i>along</i> AD is caused only by a change in $P$; everything else <i>shifts</i> the curve.</p>
<table>
<tr><th>Component</th><th>Examples that shift AD</th></tr>
<tr><td>$C$ (consumption)</td><td>Stock-market boom/crash; consumption–saving preferences; tax hikes/cuts.</td></tr>
<tr><td>$I$ (investment)</td><td>Firms buying equipment/factories; optimism vs. pessimism; interest rates; monetary policy; investment tax incentives.</td></tr>
<tr><td>$G$ (government)</td><td>Federal spending (e.g. defense); state &amp; local spending (roads, schools).</td></tr>
<tr><td>$NX$ (net exports)</td><td>Booms/recessions abroad; appreciation/depreciation from currency speculation.</td></tr>
</table>
<div class="note"><b>Direction:</b> anything that <b>raises</b> $C$, $I$, $G$, or $NX$ shifts AD <b>right</b> (more demand at every $P$); anything that <b>lowers</b> them shifts AD <b>left</b>.</div>`,
            id: `<p><b>Setiap peristiwa yang mengubah $C$, $I$, $G$, atau $NX$ pada tingkat harga tertentu menggeser AD.</b> Pergerakan <i>sepanjang</i> AD hanya disebabkan perubahan $P$; selain itu kurva <i>bergeser</i>.</p>
<table>
<tr><th>Komponen</th><th>Contoh yang menggeser AD</th></tr>
<tr><td>$C$ (konsumsi)</td><td>Boom/crash pasar saham; preferensi konsumsi–tabungan; kenaikan/penurunan pajak.</td></tr>
<tr><td>$I$ (investasi)</td><td>Perusahaan membeli peralatan/pabrik; optimisme vs. pesimisme; tingkat bunga; kebijakan moneter; insentif pajak investasi.</td></tr>
<tr><td>$G$ (pemerintah)</td><td>Belanja pusat (mis. pertahanan); belanja daerah (jalan, sekolah).</td></tr>
<tr><td>$NX$ (ekspor neto)</td><td>Boom/resesi di luar negeri; apresiasi/depresiasi akibat spekulasi mata uang.</td></tr>
</table>
<div class="note"><b>Arah:</b> apa pun yang <b>menaikkan</b> $C$, $I$, $G$, atau $NX$ menggeser AD <b>ke kanan</b> (permintaan lebih besar pada tiap $P$); apa pun yang <b>menurunkannya</b> menggeser AD <b>ke kiri</b>.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Aggregate supply: long run vs. short run', id: 'Penawaran agregat: jangka panjang vs. jangka pendek' },
      num: '3',
      cards: [
        {
          title: { en: 'LRAS is vertical at natural output', id: 'LRAS tegak lurus di output alamiah' },
          html: {
            en: `<p>In the <b>long run</b>, output is determined by the economy's supplies of <b>labor, capital, natural resources</b>, and the available <b>technology</b> — not by the price level. So the <span class="key">long-run aggregate-supply (LRAS)</span> curve is <b>vertical</b> at the <span class="key">natural rate of output</span> $Y_N$ (also called potential output or full-employment output).</p>
<p>This is the classical dichotomy on a graph: an increase in $P$ changes no real factor, so it does not change $Y_N$.</p>
<p><b>What shifts LRAS</b> (anything that changes potential output):</p>
<ul>
<li><b>Labor</b> — more workers ⇒ more output supplied (right shift).</li>
<li><b>Capital</b> — a larger capital stock raises productivity (right shift).</li>
<li><b>Natural resources</b> — changes in availability shift LRAS.</li>
<li><b>Technological knowledge</b> — better technology shifts LRAS right.</li>
</ul>
<div class="tip"><b>Long-run growth + inflation together:</b> technology pushes LRAS right over time (more output), while growth in the money supply pushes AD right (higher prices). The economy ends up with <b>more output and a higher price level</b> — long-run growth with inflation.</div>`,
            id: `<p>Dalam <b>jangka panjang</b>, output ditentukan oleh persediaan <b>tenaga kerja, modal, sumber daya alam</b>, dan <b>teknologi</b> yang tersedia — bukan oleh tingkat harga. Maka kurva <span class="key">penawaran agregat jangka panjang (LRAS)</span> bersifat <b>tegak lurus</b> pada <span class="key">output alamiah</span> $Y_N$ (disebut juga output potensial atau output kesempatan-kerja-penuh).</p>
<p>Inilah dikotomi klasik dalam bentuk grafik: kenaikan $P$ tidak mengubah faktor riil mana pun, sehingga tidak mengubah $Y_N$.</p>
<p><b>Apa yang menggeser LRAS</b> (apa pun yang mengubah output potensial):</p>
<ul>
<li><b>Tenaga kerja</b> — lebih banyak pekerja ⇒ output yang ditawarkan lebih besar (geser kanan).</li>
<li><b>Modal</b> — stok modal lebih besar menaikkan produktivitas (geser kanan).</li>
<li><b>Sumber daya alam</b> — perubahan ketersediaan menggeser LRAS.</li>
<li><b>Pengetahuan teknologi</b> — teknologi lebih baik menggeser LRAS ke kanan.</li>
</ul>
<div class="tip"><b>Pertumbuhan jangka panjang + inflasi bersamaan:</b> teknologi mendorong LRAS ke kanan dari waktu ke waktu (output naik), sementara pertumbuhan jumlah uang beredar mendorong AD ke kanan (harga naik). Hasil akhirnya <b>output lebih banyak dan tingkat harga lebih tinggi</b> — pertumbuhan jangka panjang dengan inflasi.</div>`
          }
        },
        {
          title: { en: 'SRAS slopes upward — three theories', id: 'SRAS melandai naik — tiga teori' },
          html: {
            en: `<p>In the <b>short run</b>, a higher price level raises the quantity supplied, so the <span class="key">short-run aggregate-supply (SRAS)</span> curve slopes <b>upward</b>. Three theories explain why, and they share one conclusion: <b>$Y$ deviates from $Y_N$ only when actual $P$ deviates from the expected price level $P^E$.</b></p>
<ul>
<li><span class="key">Sticky-wage theory</span> — nominal wages are slow to adjust (long-term contracts). If $P > P^E$, revenue rises but the wage bill is fixed, so production is more profitable; firms raise output and hiring. Higher $P$ ⇒ higher $Y$.</li>
<li><span class="key">Sticky-price theory</span> — firms are slow to readjust prices (menu costs). When $P$ rises unexpectedly, firms with stuck-low prices see strong demand and produce more.</li>
<li><span class="key">Misperceptions theory</span> — a firm sees its own price rise before realizing all prices are rising, mistakes it for a higher <i>relative</i> price, and raises output.</li>
</ul>
<p>The common algebra:</p>
<div class="formula">$$Y = Y_N + a\\,(P - P^E),\\qquad a > 0$$</div>
<ul>
<li>When $P > P^E$: $Y > Y_N$ (boom).</li>
<li>When $P < P^E$: $Y < Y_N$ (slump).</li>
<li>When $P = P^E$: $Y = Y_N$ (the long-run, vertical case).</li>
</ul>
<div class="note"><b>What shifts SRAS:</b> the same real factors that shift LRAS (labor, capital, resources, technology) <b>plus</b> the <b>expected price level $P^E$</b>. A rise in $P^E$ shifts SRAS <b>left</b>; a fall in $P^E$ shifts it <b>right</b>. Input-cost shocks (e.g. oil) also shift SRAS.</div>`,
            id: `<p>Dalam <b>jangka pendek</b>, tingkat harga yang lebih tinggi menaikkan jumlah yang ditawarkan, sehingga kurva <span class="key">penawaran agregat jangka pendek (SRAS)</span> melandai <b>naik</b>. Tiga teori menjelaskan alasannya, dan semuanya berbagi satu kesimpulan: <b>$Y$ menyimpang dari $Y_N$ hanya ketika $P$ aktual menyimpang dari tingkat harga yang diharapkan $P^E$.</b></p>
<ul>
<li><span class="key">Teori upah kaku</span> — upah nominal lambat menyesuaikan (kontrak jangka panjang). Jika $P > P^E$, penerimaan naik tetapi beban upah tetap, sehingga produksi lebih menguntungkan; perusahaan menambah output dan tenaga kerja. $P$ naik ⇒ $Y$ naik.</li>
<li><span class="key">Teori harga kaku</span> — perusahaan lambat menyesuaikan harga (biaya menu). Saat $P$ naik tak terduga, perusahaan dengan harga yang terlanjur rendah melihat permintaan kuat dan berproduksi lebih banyak.</li>
<li><span class="key">Teori salah persepsi</span> — perusahaan melihat harganya sendiri naik sebelum sadar semua harga naik, salah mengira itu kenaikan harga <i>relatif</i>, lalu menaikkan output.</li>
</ul>
<p>Aljabar bersamanya:</p>
<div class="formula">$$Y = Y_N + a\\,(P - P^E),\\qquad a > 0$$</div>
<ul>
<li>Ketika $P > P^E$: $Y > Y_N$ (boom).</li>
<li>Ketika $P < P^E$: $Y < Y_N$ (lesu).</li>
<li>Ketika $P = P^E$: $Y = Y_N$ (kasus jangka panjang, tegak lurus).</li>
</ul>
<div class="note"><b>Apa yang menggeser SRAS:</b> faktor riil yang sama dengan penggeser LRAS (tenaga kerja, modal, sumber daya, teknologi) <b>ditambah</b> <b>tingkat harga yang diharapkan $P^E$</b>. Kenaikan $P^E$ menggeser SRAS <b>ke kiri</b>; penurunan $P^E$ menggesernya <b>ke kanan</b>. Guncangan biaya input (mis. minyak) juga menggeser SRAS.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Analyzing fluctuations: a 4-step method', id: 'Menganalisis fluktuasi: metode 4 langkah' },
      num: '4',
      cards: [
        {
          html: {
            en: `<p>Mankiw's recipe for any shock. <b>Memorize this — it is exactly how the UAS essays are graded.</b></p>
<ol>
<li><b>Which curve?</b> Decide whether the event shifts <b>AD</b> or <b>AS</b> (does it change $C/I/G/NX$, or the cost/ability to produce?).</li>
<li><b>Which direction?</b> Left or right.</li>
<li><b>Short run.</b> Read the new SR equilibrium off the diagram — what happens to $P$, $Y$, and unemployment.</li>
<li><b>Long run.</b> Show how the economy moves from the new SR equilibrium to the new LR equilibrium (where $P = P^E$ and $Y = Y_N$ again).</li>
</ol>
<div class="tip">Always label the three points: <b>A</b> = original long-run equilibrium, <b>B</b> = short-run equilibrium after the shock, <b>C</b> = new long-run equilibrium. Graders look for B and C.</div>`,
            id: `<p>Resep Mankiw untuk setiap guncangan. <b>Hafalkan ini — persis seperti cara esai UAS dinilai.</b></p>
<ol>
<li><b>Kurva mana?</b> Tentukan apakah peristiwa menggeser <b>AD</b> atau <b>AS</b> (apakah ia mengubah $C/I/G/NX$, atau biaya/kemampuan berproduksi?).</li>
<li><b>Arah mana?</b> Ke kiri atau ke kanan.</li>
<li><b>Jangka pendek.</b> Baca keseimbangan JP baru dari diagram — apa yang terjadi pada $P$, $Y$, dan pengangguran.</li>
<li><b>Jangka panjang.</b> Tunjukkan bagaimana perekonomian bergerak dari keseimbangan JP baru ke keseimbangan jangka panjang baru (di mana $P = P^E$ dan $Y = Y_N$ lagi).</li>
</ol>
<div class="tip">Selalu beri label tiga titik: <b>A</b> = keseimbangan jangka panjang awal, <b>B</b> = keseimbangan jangka pendek setelah guncangan, <b>C</b> = keseimbangan jangka panjang baru. Penilai mencari B dan C.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Demand shocks, supply shocks & self-correction', id: 'Guncangan permintaan, penawaran & koreksi-diri' },
      num: '5',
      cards: [
        {
          title: { en: 'A shift in aggregate demand', id: 'Pergeseran permintaan agregat' },
          html: {
            en: `<p>Example: a <b>stock-market crash</b> makes households feel poorer, $C$ falls, <b>AD shifts left</b>.</p>
<ul>
<li><b>Short run (A → B):</b> $P$ and $Y$ both fall, unemployment rises. The economy is in recession below $Y_N$.</li>
<li><b>Long run (B → C):</b> with $Y < Y_N$, the expected price level $P^E$ falls; wages, prices and perceptions adjust, so <b>SRAS shifts right</b> until output returns to $Y_N$. The result is the <b>same output</b> at a <b>permanently lower price level</b>.</li>
</ul>
<p>A demand shock changes $Y$ only in the short run; in the long run only $P$ is permanently different.</p>`,
            id: `<p>Contoh: <b>crash pasar saham</b> membuat rumah tangga merasa lebih miskin, $C$ turun, <b>AD bergeser ke kiri</b>.</p>
<ul>
<li><b>Jangka pendek (A → B):</b> $P$ dan $Y$ sama-sama turun, pengangguran naik. Perekonomian resesi di bawah $Y_N$.</li>
<li><b>Jangka panjang (B → C):</b> dengan $Y < Y_N$, tingkat harga yang diharapkan $P^E$ turun; upah, harga, dan persepsi menyesuaikan, sehingga <b>SRAS bergeser ke kanan</b> sampai output kembali ke $Y_N$. Hasilnya <b>output sama</b> pada <b>tingkat harga yang permanen lebih rendah</b>.</li>
</ul>
<p>Guncangan permintaan mengubah $Y$ hanya dalam jangka pendek; dalam jangka panjang hanya $P$ yang berubah permanen.</p>`
          }
        },
        {
          title: { en: 'A shift in aggregate supply (stagflation)', id: 'Pergeseran penawaran agregat (stagflasi)' },
          html: {
            en: `<p>Example: an <b>oil-price spike</b> raises production costs, <b>SRAS shifts left</b> (LRAS unchanged).</p>
<ul>
<li><b>Short run (A → B):</b> $P$ rises while $Y$ falls and unemployment rises — the painful combination called <span class="key">stagflation</span> (stagnation + inflation).</li>
<li><b>Long run — option 1 (do nothing):</b> with $Y < Y_N$, high unemployment pushes wages down, costs fall, <b>SRAS shifts back right</b> to the original point A. $P$ and $Y$ return to their initial levels (self-correction).</li>
<li><b>Long run — option 2 (accommodate):</b> policymakers raise AD with fiscal/monetary policy. $Y$ returns to $Y_N$ faster, but $P$ is <b>permanently higher</b>.</li>
</ul>
<div class="note"><b>The policymaker's dilemma:</b> after an adverse supply shock you can fight the recession (accommodate AD, accept permanently higher prices) or fight inflation (do nothing, endure a longer slump). You cannot avoid both.</div>`,
            id: `<p>Contoh: <b>lonjakan harga minyak</b> menaikkan biaya produksi, <b>SRAS bergeser ke kiri</b> (LRAS tetap).</p>
<ul>
<li><b>Jangka pendek (A → B):</b> $P$ naik sementara $Y$ turun dan pengangguran naik — kombinasi pahit yang disebut <span class="key">stagflasi</span> (stagnasi + inflasi).</li>
<li><b>Jangka panjang — opsi 1 (tidak berbuat apa-apa):</b> dengan $Y < Y_N$, pengangguran tinggi menekan upah turun, biaya turun, <b>SRAS bergeser kembali ke kanan</b> ke titik awal A. $P$ dan $Y$ kembali ke tingkat awal (koreksi-diri).</li>
<li><b>Jangka panjang — opsi 2 (akomodasi):</b> pembuat kebijakan menaikkan AD dengan kebijakan fiskal/moneter. $Y$ kembali ke $Y_N$ lebih cepat, tetapi $P$ <b>permanen lebih tinggi</b>.</li>
</ul>
<div class="note"><b>Dilema pembuat kebijakan:</b> setelah guncangan penawaran buruk, Anda bisa melawan resesi (akomodasi AD, terima harga permanen lebih tinggi) atau melawan inflasi (diam, tanggung kelesuan lebih lama). Anda tidak bisa menghindari keduanya.</div>`
          }
        },
        {
          title: { en: 'The self-correcting mechanism', id: 'Mekanisme koreksi-diri' },
          html: {
            en: `<p>The imperfections behind SRAS — sticky wages, sticky prices, misperceptions — are <b>temporary</b>. Over time wages and prices become flexible and misperceptions are corrected, so $P^E$ adjusts toward actual $P$.</p>
<p>This is the <span class="key">self-correcting mechanism</span>: whenever $Y \\ne Y_N$, the gap changes $P^E$, which shifts SRAS until $Y = Y_N$ again. In the long run <b>$P^E = P$, the AS curve is vertical, and unemployment returns to its natural rate</b> — exactly the classical result.</p>
<div class="tip"><b>Bottom line for the UAS:</b> demand and supply shocks both move output away from $Y_N$ in the short run, but the self-correcting mechanism always returns the economy to $Y_N$ in the long run. Policy can speed up the return — at the cost of a permanently different price level.</div>`,
            id: `<p>Ketidaksempurnaan di balik SRAS — upah kaku, harga kaku, salah persepsi — bersifat <b>sementara</b>. Seiring waktu upah dan harga menjadi fleksibel dan salah persepsi terkoreksi, sehingga $P^E$ menyesuaikan menuju $P$ aktual.</p>
<p>Inilah <span class="key">mekanisme koreksi-diri</span>: setiap kali $Y \\ne Y_N$, kesenjangan itu mengubah $P^E$, yang menggeser SRAS sampai $Y = Y_N$ lagi. Dalam jangka panjang <b>$P^E = P$, kurva AS tegak lurus, dan pengangguran kembali ke tingkat alamiahnya</b> — persis hasil klasik.</p>
<div class="tip"><b>Inti untuk UAS:</b> guncangan permintaan maupun penawaran sama-sama menjauhkan output dari $Y_N$ dalam jangka pendek, tetapi mekanisme koreksi-diri selalu mengembalikan perekonomian ke $Y_N$ dalam jangka panjang. Kebijakan dapat mempercepat pemulihan — dengan biaya tingkat harga yang berubah permanen.</div>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  /* FORMULAS                                                                */
  /* ----------------------------------------------------------------------- */
  formulas: [
    {
      heading: { en: 'Core relationships', id: 'Hubungan inti' },
      num: '1',
      cards: [
        {
          title: { en: 'Aggregate-demand identity', id: 'Identitas permintaan agregat' },
          html: {
            en: `<div class="formula">$$Y = C + I + G + NX$$</div>
<p>AD is built on the spending identity. A change in any component (other than one caused by $P$ itself) <b>shifts</b> the whole AD curve.</p>`,
            id: `<div class="formula">$$Y = C + I + G + NX$$</div>
<p>AD dibangun di atas identitas pengeluaran. Perubahan pada komponen mana pun (selain yang disebabkan oleh $P$ sendiri) <b>menggeser</b> seluruh kurva AD.</p>`
          }
        },
        {
          title: { en: 'Short-run aggregate supply', id: 'Penawaran agregat jangka pendek' },
          html: {
            en: `<div class="formula">$$Y = Y_N + a\\,(P - P^E),\\qquad a > 0$$</div>
<ul>
<li>$Y$ — quantity of output supplied · $Y_N$ — natural rate of output</li>
<li>$P$ — actual price level · $P^E$ — expected price level</li>
<li>$a$ — how much $Y$ responds to an unexpected change in $P$</li>
</ul>
<p>$P > P^E \\Rightarrow Y > Y_N$; $\\;P < P^E \\Rightarrow Y < Y_N$; $\\;P = P^E \\Rightarrow Y = Y_N$.</p>`,
            id: `<div class="formula">$$Y = Y_N + a\\,(P - P^E),\\qquad a > 0$$</div>
<ul>
<li>$Y$ — jumlah output yang ditawarkan · $Y_N$ — output alamiah</li>
<li>$P$ — tingkat harga aktual · $P^E$ — tingkat harga yang diharapkan</li>
<li>$a$ — seberapa besar $Y$ merespons perubahan $P$ yang tak terduga</li>
</ul>
<p>$P > P^E \\Rightarrow Y > Y_N$; $\\;P < P^E \\Rightarrow Y < Y_N$; $\\;P = P^E \\Rightarrow Y = Y_N$.</p>`
          }
        },
        {
          title: { en: 'Long-run condition', id: 'Kondisi jangka panjang' },
          html: {
            en: `<div class="formula">$$P^E = P \\;\\Longrightarrow\\; Y = Y_N$$</div>
<p>In the long run expectations are correct, the AS curve is vertical at $Y_N$, and unemployment sits at its natural rate. $Y_N$ depends only on labor, capital, natural resources and technology — never on $P$.</p>`,
            id: `<div class="formula">$$P^E = P \\;\\Longrightarrow\\; Y = Y_N$$</div>
<p>Dalam jangka panjang ekspektasi tepat, kurva AS tegak lurus di $Y_N$, dan pengangguran berada pada tingkat alamiahnya. $Y_N$ hanya bergantung pada tenaga kerja, modal, sumber daya alam, dan teknologi — tidak pernah pada $P$.</p>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  /* GRAPHS — self-contained inline SVG (no charting library)                */
  /* ----------------------------------------------------------------------- */
  graphs: [
    {
      heading: { en: 'The aggregate-demand curve', id: 'Kurva permintaan agregat' },
      num: '1',
      cards: [
        {
          title: { en: 'AD slopes downward', id: 'AD melandai turun' },
          html: {
            en: `<svg viewBox="0 0 360 260" width="100%" style="max-width:420px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text>
  <text x="330" y="238">Y</text>
  <line x1="70" y1="50" x2="320" y2="200" stroke="#0e8fb8" stroke-width="2.5"/>
  <text x="300" y="195" fill="#0e8fb8" font-weight="700">AD</text>
  <line x1="50" y1="80" x2="120" y2="80" stroke="#999" stroke-dasharray="3,3"/>
  <line x1="120" y1="80" x2="120" y2="220" stroke="#999" stroke-dasharray="3,3"/>
  <line x1="50" y1="170" x2="270" y2="170" stroke="#999" stroke-dasharray="3,3"/>
  <line x1="270" y1="170" x2="270" y2="220" stroke="#999" stroke-dasharray="3,3"/>
  <text x="34" y="84">P₁</text><text x="113" y="234">Y₁</text>
  <text x="34" y="174">P₂</text><text x="263" y="234">Y₂</text>
  <circle cx="120" cy="80" r="3" fill="#0e8fb8"/>
  <circle cx="270" cy="170" r="3" fill="#0e8fb8"/>
</svg>
<p>When the price level falls from $P_1$ to $P_2$, the quantity of output demanded rises from $Y_1$ to $Y_2$ — a movement <i>along</i> AD driven by the wealth, interest-rate and exchange-rate effects.</p>`,
            id: `<svg viewBox="0 0 360 260" width="100%" style="max-width:420px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text>
  <text x="330" y="238">Y</text>
  <line x1="70" y1="50" x2="320" y2="200" stroke="#0e8fb8" stroke-width="2.5"/>
  <text x="300" y="195" fill="#0e8fb8" font-weight="700">AD</text>
  <line x1="50" y1="80" x2="120" y2="80" stroke="#999" stroke-dasharray="3,3"/>
  <line x1="120" y1="80" x2="120" y2="220" stroke="#999" stroke-dasharray="3,3"/>
  <line x1="50" y1="170" x2="270" y2="170" stroke="#999" stroke-dasharray="3,3"/>
  <line x1="270" y1="170" x2="270" y2="220" stroke="#999" stroke-dasharray="3,3"/>
  <text x="34" y="84">P₁</text><text x="113" y="234">Y₁</text>
  <text x="34" y="174">P₂</text><text x="263" y="234">Y₂</text>
  <circle cx="120" cy="80" r="3" fill="#0e8fb8"/>
  <circle cx="270" cy="170" r="3" fill="#0e8fb8"/>
</svg>
<p>Ketika tingkat harga turun dari $P_1$ ke $P_2$, jumlah output yang diminta naik dari $Y_1$ ke $Y_2$ — pergerakan <i>sepanjang</i> AD yang didorong efek kekayaan, tingkat bunga, dan nilai tukar.</p>`
          }
        }
      ]
    },

    {
      heading: { en: 'Long-run equilibrium', id: 'Keseimbangan jangka panjang' },
      num: '2',
      cards: [
        {
          title: { en: 'AD, SRAS and vertical LRAS', id: 'AD, SRAS dan LRAS tegak lurus' },
          html: {
            en: `<svg viewBox="0 0 360 260" width="100%" style="max-width:420px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text><text x="330" y="238">Y</text>
  <line x1="195" y1="30" x2="195" y2="220" stroke="#c0392b" stroke-width="2.5"/>
  <text x="170" y="44" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="80" y1="200" x2="310" y2="60" stroke="#e67e22" stroke-width="2.5"/>
  <text x="290" y="62" fill="#e67e22" font-weight="700">SRAS</text>
  <line x1="80" y1="60" x2="310" y2="200" stroke="#0e8fb8" stroke-width="2.5"/>
  <text x="290" y="195" fill="#0e8fb8" font-weight="700">AD</text>
  <line x1="50" y1="130" x2="195" y2="130" stroke="#999" stroke-dasharray="3,3"/>
  <text x="32" y="134">P*</text>
  <text x="180" y="234">Yₙ</text>
  <circle cx="195" cy="130" r="3.5" fill="#222"/>
  <text x="201" y="124" font-weight="700">A</text>
</svg>
<p>The long-run equilibrium <b>A</b> is where all three curves cross. Output equals natural output $Y_N$, the actual and expected price levels are equal ($P^* = P^E$), and unemployment is at its natural rate.</p>`,
            id: `<svg viewBox="0 0 360 260" width="100%" style="max-width:420px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text><text x="330" y="238">Y</text>
  <line x1="195" y1="30" x2="195" y2="220" stroke="#c0392b" stroke-width="2.5"/>
  <text x="170" y="44" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="80" y1="200" x2="310" y2="60" stroke="#e67e22" stroke-width="2.5"/>
  <text x="290" y="62" fill="#e67e22" font-weight="700">SRAS</text>
  <line x1="80" y1="60" x2="310" y2="200" stroke="#0e8fb8" stroke-width="2.5"/>
  <text x="290" y="195" fill="#0e8fb8" font-weight="700">AD</text>
  <line x1="50" y1="130" x2="195" y2="130" stroke="#999" stroke-dasharray="3,3"/>
  <text x="32" y="134">P*</text>
  <text x="180" y="234">Yₙ</text>
  <circle cx="195" cy="130" r="3.5" fill="#222"/>
  <text x="201" y="124" font-weight="700">A</text>
</svg>
<p>Keseimbangan jangka panjang <b>A</b> adalah titik perpotongan ketiga kurva. Output sama dengan output alamiah $Y_N$, tingkat harga aktual dan yang diharapkan sama ($P^* = P^E$), dan pengangguran berada pada tingkat alamiahnya.</p>`
          }
        }
      ]
    },

    {
      heading: { en: 'A demand shock (AD shifts left)', id: 'Guncangan permintaan (AD bergeser ke kiri)' },
      num: '3',
      cards: [
        {
          title: { en: 'Stock-market crash: short run vs. long run', id: 'Crash pasar saham: jangka pendek vs. jangka panjang' },
          html: {
            en: `<svg viewBox="0 0 360 270" width="100%" style="max-width:440px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text><text x="330" y="238">Y</text>
  <line x1="200" y1="30" x2="200" y2="220" stroke="#c0392b" stroke-width="2"/>
  <text x="178" y="44" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="95" y1="200" x2="305" y2="70" stroke="#e67e22" stroke-width="2"/>
  <text x="300" y="76" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="70" y1="200" x2="280" y2="70" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="64" y="64" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="110" y1="60" x2="300" y2="190" stroke="#0e8fb8" stroke-width="2"/>
  <text x="284" y="186" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="70" y1="70" x2="240" y2="190" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="60" y="80" fill="#0e8fb8" font-weight="700">AD₂</text>
  <circle cx="200" cy="118" r="3.5" fill="#222"/><text x="206" y="113" font-weight="700">A</text>
  <circle cx="158" cy="150" r="3.5" fill="#222"/><text x="138" y="150" font-weight="700">B</text>
  <circle cx="200" cy="172" r="3.5" fill="#222"/><text x="206" y="178" font-weight="700">C</text>
  <line x1="50" y1="118" x2="200" y2="118" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="121">P₁</text>
  <line x1="50" y1="172" x2="200" y2="172" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="175">P₃</text>
  <text x="186" y="234">Yₙ</text>
</svg>
<p><b>A → B (short run):</b> AD shifts left to AD₂; the economy slides down SRAS₁ to <b>B</b>, where $P$ and $Y$ both fall and unemployment rises (recession, $Y < Y_N$).</p>
<p><b>B → C (long run):</b> the low output pulls $P^E$ down, SRAS shifts right to SRAS₂, and output returns to $Y_N$ at <b>C</b> — same output, permanently lower price level $P_3$.</p>`,
            id: `<svg viewBox="0 0 360 270" width="100%" style="max-width:440px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text><text x="330" y="238">Y</text>
  <line x1="200" y1="30" x2="200" y2="220" stroke="#c0392b" stroke-width="2"/>
  <text x="178" y="44" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="95" y1="200" x2="305" y2="70" stroke="#e67e22" stroke-width="2"/>
  <text x="300" y="76" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="70" y1="200" x2="280" y2="70" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="64" y="64" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="110" y1="60" x2="300" y2="190" stroke="#0e8fb8" stroke-width="2"/>
  <text x="284" y="186" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="70" y1="70" x2="240" y2="190" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="60" y="80" fill="#0e8fb8" font-weight="700">AD₂</text>
  <circle cx="200" cy="118" r="3.5" fill="#222"/><text x="206" y="113" font-weight="700">A</text>
  <circle cx="158" cy="150" r="3.5" fill="#222"/><text x="138" y="150" font-weight="700">B</text>
  <circle cx="200" cy="172" r="3.5" fill="#222"/><text x="206" y="178" font-weight="700">C</text>
  <line x1="50" y1="118" x2="200" y2="118" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="121">P₁</text>
  <line x1="50" y1="172" x2="200" y2="172" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="175">P₃</text>
  <text x="186" y="234">Yₙ</text>
</svg>
<p><b>A → B (jangka pendek):</b> AD bergeser ke kiri menjadi AD₂; perekonomian meluncur turun sepanjang SRAS₁ ke <b>B</b>, di mana $P$ dan $Y$ sama-sama turun dan pengangguran naik (resesi, $Y < Y_N$).</p>
<p><b>B → C (jangka panjang):</b> output rendah menarik $P^E$ turun, SRAS bergeser ke kanan menjadi SRAS₂, dan output kembali ke $Y_N$ di <b>C</b> — output sama, tingkat harga permanen lebih rendah $P_3$.</p>`
          }
        }
      ]
    },

    {
      heading: { en: 'A supply shock (SRAS shifts left)', id: 'Guncangan penawaran (SRAS bergeser ke kiri)' },
      num: '4',
      cards: [
        {
          title: { en: 'Oil-price spike: stagflation then recovery', id: 'Lonjakan harga minyak: stagflasi lalu pemulihan' },
          html: {
            en: `<svg viewBox="0 0 360 270" width="100%" style="max-width:440px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text><text x="330" y="238">Y</text>
  <line x1="200" y1="30" x2="200" y2="220" stroke="#c0392b" stroke-width="2"/>
  <text x="178" y="44" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="95" y1="200" x2="305" y2="70" stroke="#e67e22" stroke-width="2"/>
  <text x="300" y="76" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="125" y1="200" x2="305" y2="40" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="306" y="44" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="95" y1="60" x2="300" y2="195" stroke="#0e8fb8" stroke-width="2"/>
  <text x="284" y="190" fill="#0e8fb8" font-weight="700">AD</text>
  <circle cx="200" cy="123" r="3.5" fill="#222"/><text x="206" y="118" font-weight="700">A</text>
  <circle cx="163" cy="100" r="3.5" fill="#222"/><text x="143" y="98" font-weight="700">B</text>
  <line x1="50" y1="123" x2="200" y2="123" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="126">P₁</text>
  <line x1="50" y1="100" x2="163" y2="100" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="98">P₂</text>
  <line x1="163" y1="100" x2="163" y2="220" stroke="#bbb" stroke-dasharray="2,2"/><text x="150" y="234">Y₂</text>
  <text x="186" y="234">Yₙ</text>
</svg>
<p><b>A → B (short run):</b> rising costs shift SRAS left to SRAS₂. At <b>B</b> the price level rises to $P_2$ while output falls to $Y_2$ and unemployment rises — <span class="key">stagflation</span>.</p>
<p><b>B → A (long run, no policy):</b> with $Y < Y_N$, high unemployment pushes wages and costs down, SRAS shifts back right to SRAS₁, and the economy returns to <b>A</b> at the original $P_1$ and $Y_N$ (self-correction).</p>`,
            id: `<svg viewBox="0 0 360 270" width="100%" style="max-width:440px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="50" y1="20" x2="50" y2="220" stroke="#666" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="340" y2="220" stroke="#666" stroke-width="1.5"/>
  <text x="34" y="18">P</text><text x="330" y="238">Y</text>
  <line x1="200" y1="30" x2="200" y2="220" stroke="#c0392b" stroke-width="2"/>
  <text x="178" y="44" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="95" y1="200" x2="305" y2="70" stroke="#e67e22" stroke-width="2"/>
  <text x="300" y="76" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="125" y1="200" x2="305" y2="40" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="306" y="44" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="95" y1="60" x2="300" y2="195" stroke="#0e8fb8" stroke-width="2"/>
  <text x="284" y="190" fill="#0e8fb8" font-weight="700">AD</text>
  <circle cx="200" cy="123" r="3.5" fill="#222"/><text x="206" y="118" font-weight="700">A</text>
  <circle cx="163" cy="100" r="3.5" fill="#222"/><text x="143" y="98" font-weight="700">B</text>
  <line x1="50" y1="123" x2="200" y2="123" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="126">P₁</text>
  <line x1="50" y1="100" x2="163" y2="100" stroke="#bbb" stroke-dasharray="2,2"/><text x="32" y="98">P₂</text>
  <line x1="163" y1="100" x2="163" y2="220" stroke="#bbb" stroke-dasharray="2,2"/><text x="150" y="234">Y₂</text>
  <text x="186" y="234">Yₙ</text>
</svg>
<p><b>A → B (jangka pendek):</b> biaya naik menggeser SRAS ke kiri menjadi SRAS₂. Di <b>B</b> tingkat harga naik ke $P_2$ sementara output turun ke $Y_2$ dan pengangguran naik — <span class="key">stagflasi</span>.</p>
<p><b>B → A (jangka panjang, tanpa kebijakan):</b> dengan $Y < Y_N$, pengangguran tinggi menekan upah dan biaya turun, SRAS bergeser kembali ke kanan menjadi SRAS₁, dan perekonomian kembali ke <b>A</b> pada $P_1$ awal dan $Y_N$ (koreksi-diri).</p>`
          }
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------- */
  /* QUIZ                                                                    */
  /* ----------------------------------------------------------------------- */
  quiz: [
    {
      type: 'concept',
      q: {
        en: 'Name the three effects that make the AD curve slope downward, and which component of spending each works through.',
        id: 'Sebutkan tiga efek yang membuat kurva AD melandai turun, dan melalui komponen pengeluaran apa masing-masing bekerja.'
      },
      answer: [
        { en: 'Wealth effect → consumption ($C$): a lower $P$ raises the real value of money holdings, so people feel richer and spend more.',
          id: 'Efek kekayaan → konsumsi ($C$): $P$ yang lebih rendah menaikkan nilai riil uang yang dipegang, sehingga orang merasa lebih kaya dan belanja lebih banyak.' },
        { en: 'Interest-rate effect → investment ($I$): a lower $P$ reduces money demand, the interest rate falls, and lower rates boost investment.',
          id: 'Efek tingkat bunga → investasi ($I$): $P$ yang lebih rendah menurunkan permintaan uang, tingkat bunga turun, dan bunga rendah mendorong investasi.' },
        { en: 'Exchange-rate effect → net exports ($NX$): the lower interest rate depreciates the currency, making domestic goods cheaper abroad and raising net exports.',
          id: 'Efek nilai tukar → ekspor neto ($NX$): tingkat bunga lebih rendah mendepresiasi mata uang, membuat barang domestik lebih murah di luar negeri dan menaikkan ekspor neto.' }
      ],
      tip: {
        en: 'These cause movements ALONG AD (a change in $P$). A change in $C/I/G/NX$ for any other reason SHIFTS AD instead.',
        id: 'Ini menyebabkan pergerakan SEPANJANG AD (perubahan $P$). Perubahan $C/I/G/NX$ karena sebab lain justru MENGGESER AD.'
      }
    },

    {
      type: 'scenario',
      q: {
        en: 'A stock-market crash hits the economy. Which curve shifts and which way, and what happens to $P$ and $Y$ in the short run versus the long run (assume no policy response)?',
        id: 'Sebuah crash pasar saham menerpa perekonomian. Kurva mana yang bergeser dan ke arah mana, dan apa yang terjadi pada $P$ dan $Y$ dalam jangka pendek versus jangka panjang (anggap tanpa respons kebijakan)?'
      },
      context: {
        en: 'Use the 4-step method. Start from a long-run equilibrium at point A.',
        id: 'Gunakan metode 4 langkah. Mulai dari keseimbangan jangka panjang di titik A.'
      },
      answer: [
        { en: 'Step 1 — which curve: a crash makes households feel poorer, so it works through $C$ → the AD curve.',
          id: 'Langkah 1 — kurva mana: crash membuat rumah tangga merasa lebih miskin, jadi bekerja lewat $C$ → kurva AD.' },
        { en: 'Step 2 — direction: $C$ falls, so AD shifts LEFT.',
          id: 'Langkah 2 — arah: $C$ turun, jadi AD bergeser ke KIRI.' },
        { en: 'Step 3 — short run (A → B): along SRAS, both $P$ and $Y$ fall and unemployment rises. The economy is in recession below $Y_N$.',
          id: 'Langkah 3 — jangka pendek (A → B): sepanjang SRAS, $P$ dan $Y$ sama-sama turun dan pengangguran naik. Perekonomian resesi di bawah $Y_N$.' },
        { en: 'Step 4 — long run (B → C): with $Y < Y_N$, $P^E$ falls, SRAS shifts right until $Y$ returns to $Y_N$. Output and unemployment are back to their initial levels, but the price level is permanently LOWER.',
          id: 'Langkah 4 — jangka panjang (B → C): dengan $Y < Y_N$, $P^E$ turun, SRAS bergeser ke kanan sampai $Y$ kembali ke $Y_N$. Output dan pengangguran kembali ke tingkat awal, tetapi tingkat harga permanen lebih RENDAH.' }
      ],
      tip: {
        en: 'A demand shock changes output only temporarily; in the long run it changes only the price level.',
        id: 'Guncangan permintaan mengubah output hanya sementara; dalam jangka panjang hanya mengubah tingkat harga.'
      }
    },

    {
      type: 'scenario',
      q: {
        en: 'A sharp rise in oil prices raises production costs across the economy (LRAS unchanged). Trace the short-run and long-run effects, and contrast "do nothing" with "accommodate AD".',
        id: 'Kenaikan tajam harga minyak menaikkan biaya produksi di seluruh perekonomian (LRAS tetap). Telusuri dampak jangka pendek dan jangka panjang, serta bandingkan "tidak berbuat apa-apa" dengan "akomodasi AD".'
      },
      answer: [
        { en: 'Step 1–2: higher input costs reduce the ability to produce → the SRAS curve shifts LEFT.',
          id: 'Langkah 1–2: biaya input lebih tinggi mengurangi kemampuan berproduksi → kurva SRAS bergeser ke KIRI.' },
        { en: 'Step 3 — short run (A → B): $P$ rises while $Y$ falls and unemployment rises. This combination of falling output and rising prices is STAGFLATION.',
          id: 'Langkah 3 — jangka pendek (A → B): $P$ naik sementara $Y$ turun dan pengangguran naik. Kombinasi output turun dan harga naik ini adalah STAGFLASI.' },
        { en: 'Long run, do nothing (B → A): high unemployment pushes wages down, costs fall, SRAS shifts back right to the original A. $P$ and $Y$ return to their initial levels.',
          id: 'Jangka panjang, tidak berbuat apa-apa (B → A): pengangguran tinggi menekan upah turun, biaya turun, SRAS bergeser kembali ke kanan ke A awal. $P$ dan $Y$ kembali ke tingkat awal.' },
        { en: 'Long run, accommodate (B → C): policymakers raise AD with fiscal/monetary policy. $Y$ returns to $Y_N$ faster, but the price level ends up PERMANENTLY HIGHER.',
          id: 'Jangka panjang, akomodasi (B → C): pembuat kebijakan menaikkan AD dengan kebijakan fiskal/moneter. $Y$ kembali ke $Y_N$ lebih cepat, tetapi tingkat harga berakhir PERMANEN LEBIH TINGGI.' }
      ],
      tip: {
        en: 'After an adverse supply shock you choose your poison: a longer recession (do nothing) or permanently higher prices (accommodate).',
        id: 'Setelah guncangan penawaran buruk Anda memilih racun: resesi lebih lama (diam) atau harga permanen lebih tinggi (akomodasi).'
      }
    },

    {
      type: 'quant',
      q: {
        en: 'The SRAS relation is $Y = Y_N + a(P - P^E)$ with $Y_N = 1000$ and $a = 50$ (units of output per point of price surprise). If the expected price level is $P^E = 100$ but the actual price level turns out to be $P = 104$, what is short-run output? What if instead $P = 97$? And what is output once expectations fully adjust?',
        id: 'Hubungan SRAS adalah $Y = Y_N + a(P - P^E)$ dengan $Y_N = 1000$ dan $a = 50$ (unit output per poin kejutan harga). Jika tingkat harga yang diharapkan $P^E = 100$ tetapi tingkat harga aktual ternyata $P = 104$, berapa output jangka pendek? Bagaimana jika $P = 97$? Dan berapa output setelah ekspektasi menyesuaikan penuh?'
      },
      answer: [
        { en: 'Case $P = 104$: price surprise $= P - P^E = 104 - 100 = 4$. So $Y = 1000 + 50\\times 4 = 1200$. Because $P > P^E$, output is ABOVE natural ($Y > Y_N$) — a boom.',
          id: 'Kasus $P = 104$: kejutan harga $= P - P^E = 104 - 100 = 4$. Maka $Y = 1000 + 50\\times 4 = 1200$. Karena $P > P^E$, output DI ATAS alamiah ($Y > Y_N$) — boom.' },
        { en: 'Case $P = 97$: surprise $= 97 - 100 = -3$. So $Y = 1000 + 50\\times(-3) = 850$. Because $P < P^E$, output is BELOW natural ($Y < Y_N$) — a slump.',
          id: 'Kasus $P = 97$: kejutan $= 97 - 100 = -3$. Maka $Y = 1000 + 50\\times(-3) = 850$. Karena $P < P^E$, output DI BAWAH alamiah ($Y < Y_N$) — lesu.' },
        { en: 'Long run: expectations adjust until $P^E = P$, so the surprise is $0$ and $Y = Y_N + 50\\times 0 = 1000$. Output always returns to $Y_N = 1000$.',
          id: 'Jangka panjang: ekspektasi menyesuaikan sampai $P^E = P$, jadi kejutan $= 0$ dan $Y = Y_N + 50\\times 0 = 1000$. Output selalu kembali ke $Y_N = 1000$.' }
      ],
      tip: {
        en: 'Output deviates from $Y_N$ only as long as $P \\ne P^E$. The self-correcting mechanism erases the gap by moving $P^E$.',
        id: 'Output menyimpang dari $Y_N$ hanya selama $P \\ne P^E$. Mekanisme koreksi-diri menghapus kesenjangan dengan menggerakkan $P^E$.'
      }
    },

    {
      type: 'concept',
      q: {
        en: 'An aging population sends many workers into retirement. Which aggregate-supply curve moves, in which direction, and what happens to the price level and output in the long run?',
        id: 'Populasi yang menua mengirim banyak pekerja ke masa pensiun. Kurva penawaran agregat mana yang bergerak, ke arah mana, dan apa yang terjadi pada tingkat harga dan output dalam jangka panjang?'
      },
      answer: [
        { en: 'Labor is a real factor of production, so a smaller labor force lowers potential output — the LONG-RUN aggregate-supply (LRAS) curve shifts LEFT (and SRAS with it).',
          id: 'Tenaga kerja adalah faktor produksi riil, jadi angkatan kerja yang lebih kecil menurunkan output potensial — kurva penawaran agregat JANGKA PANJANG (LRAS) bergeser ke KIRI (dan SRAS ikut).' },
        { en: 'With AD unchanged, the leftward AS shift means equilibrium output FALLS and the price level RISES.',
          id: 'Dengan AD tetap, pergeseran AS ke kiri berarti output keseimbangan TURUN dan tingkat harga NAIK.' },
        { en: 'So the correct outcome is: AS shifts left ⇒ higher price level, lower output. (This matches the option "kurva penawaran agregat bergeser ke kiri, tingkat harga meningkat, output menurun".)',
          id: 'Maka hasil yang benar: AS bergeser ke kiri ⇒ tingkat harga naik, output turun. (Sesuai opsi "kurva penawaran agregat bergeser ke kiri, tingkat harga meningkat, output menurun".)' }
      ],
      tip: {
        en: 'Anything that permanently changes labor, capital, resources, or technology shifts LRAS — not just SRAS.',
        id: 'Apa pun yang secara permanen mengubah tenaga kerja, modal, sumber daya, atau teknologi menggeser LRAS — bukan hanya SRAS.'
      }
    },

    {
      type: 'scenario',
      q: {
        en: 'To fight a recession, a government cuts income taxes. Using the AD–AS model, what is the short-run effect on output, the price level, and unemployment?',
        id: 'Untuk melawan resesi, pemerintah menurunkan pajak pendapatan. Dengan model AD–AS, apa dampak jangka pendek terhadap output, tingkat harga, dan pengangguran?'
      },
      context: {
        en: 'Based on the essay prompt: country "Solvaria" cuts income taxes during a 2025 recession.',
        id: 'Berdasarkan soal esai: negara "Solvaria" menurunkan pajak pendapatan saat resesi 2025.'
      },
      answer: [
        { en: 'Step 1 — which curve: lower income taxes leave households with more disposable income, raising consumption $C$ → the AD curve.',
          id: 'Langkah 1 — kurva mana: pajak pendapatan lebih rendah memberi rumah tangga lebih banyak pendapatan siap pakai, menaikkan konsumsi $C$ → kurva AD.' },
        { en: 'Step 2 — direction: $C$ rises, so AD shifts RIGHT.',
          id: 'Langkah 2 — arah: $C$ naik, jadi AD bergeser ke KANAN.' },
        { en: 'Step 3 — short run: along the upward-sloping SRAS, both the price level $P$ and output $Y$ RISE, and unemployment FALLS as firms hire to meet the extra demand.',
          id: 'Langkah 3 — jangka pendek: sepanjang SRAS yang melandai naik, tingkat harga $P$ dan output $Y$ sama-sama NAIK, dan pengangguran TURUN karena perusahaan merekrut untuk memenuhi permintaan tambahan.' },
        { en: 'This is exactly the intended policy effect: the rightward AD shift pulls the economy back up toward $Y_N$ in the short run.',
          id: 'Inilah efek kebijakan yang diinginkan: pergeseran AD ke kanan menarik perekonomian kembali menuju $Y_N$ dalam jangka pendek.' }
      ],
      tip: {
        en: 'A tax cut and higher government spending both shift AD right — the standard expansionary fiscal response to a recession.',
        id: 'Penurunan pajak dan kenaikan belanja pemerintah sama-sama menggeser AD ke kanan — respons fiskal ekspansif standar terhadap resesi.'
      }
    }
  ]
};
