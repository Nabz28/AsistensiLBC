/* ============================================================================
   PE2 · UAS 2025 (Semester Genap 2024/2025 — Senin, 2 Juni 2025)
   1:1 bilingual transcription of the Indonesian final exam + official answer
   key (which includes worked essay solutions with diagrams). Indonesian is the
   faithful source; English is an accurate translation. Charts are declarative
   ECONCHART specs — equilibria are COMPUTED; only curve directions are set, to
   match the diagrams drawn in the key. Symbol axis labels so one chart serves
   both languages.
   MCQ key: 1D 2A 3D 4C 5D · 6B 7A 8C 9D 10B · 11D 12B 13A 14B 15A · 16B 17A 18C 19A 20D
   ============================================================================ */
window.PE2_EXAMS = window.PE2_EXAMS || {};
window.PE2_EXAMS['2025'] = {
  year: '2025',
  label: { en: 'UAS 2025', id: 'UAS 2025' },
  note: {
    en: 'Final exam, Introduction to Economics 2 (macro). Part I: 20 multiple-choice (2 pts each). Part II: 4 essays (15 pts each). Closed book; scientific calculator allowed.',
    id: 'Ujian Akhir Semester, Pengantar Ekonomi 2 (makro). Bagian I: 20 pilihan ganda (2 poin/soal). Bagian II: 4 esai (15 poin/soal). Closed book; boleh kalkulator sains.'
  },
  sections: [

    /* ===================== PART I — MULTIPLE CHOICE ===================== */
    { kind: 'mcq', label: { en: 'Multiple choice', id: 'Pilihan ganda' }, questions: [

      { n: 1,
        q: {
          en: 'Ibrahim, an Indonesian citizen, sells several hundred cans of coffee to a restaurant chain in Singapore. This sale …',
          id: 'Ibrahim, seorang warga negara Indonesia, menjual beberapa ratus kaleng kopi kepada jaringan restoran di Singapura. Penjualan tersebut …'
        },
        options: {
          en: [
            'a. raises Singapore’s net exports and has no effect on Indonesia’s net exports',
            'b. raises Singapore’s net exports and lowers Indonesia’s net exports',
            'c. lowers Singapore’s net exports and has no effect on Indonesia’s net exports',
            'd. lowers Singapore’s net exports and raises Indonesia’s net exports'
          ],
          id: [
            'a. meningkatkan ekspor neto Singapura dan tidak berdampak pada ekspor neto Indonesia',
            'b. meningkatkan ekspor neto Singapura dan menurunkan ekspor neto Indonesia',
            'c. menurunkan ekspor neto Singapura dan tidak berdampak pada ekspor neto Indonesia',
            'd. menurunkan ekspor neto Singapura dan meningkatkan ekspor neto Indonesia'
          ]
        },
        answer: { en: 'd. lowers Singapore’s net exports and raises Indonesia’s net exports', id: 'd. menurunkan ekspor neto Singapura dan meningkatkan ekspor neto Indonesia' },
        working: {
          en: '<p>The sale is an <span class="key">export for Indonesia</span> (goods leave Indonesia) and an <span class="key">import for Singapore</span> (goods enter Singapore). So $NX_{ID}\\uparrow$ and $NX_{SG}\\downarrow$.</p>',
          id: '<p>Penjualan ini adalah <span class="key">ekspor bagi Indonesia</span> (barang keluar dari Indonesia) dan <span class="key">impor bagi Singapura</span> (barang masuk ke Singapura). Jadi $NX_{ID}\\uparrow$ dan $NX_{SG}\\downarrow$.</p>'
        } },

      { n: 2,
        q: {
          en: 'Which condition shows an increase in national saving in the loanable-funds market equilibrium of an open economy?',
          id: 'Kondisi manakah yang menunjukkan peningkatan tabungan nasional pada keseimbangan pasar dana pinjaman dalam perekonomian terbuka?'
        },
        options: {
          en: [
            'a. A rise in domestic investment and net capital outflow (NCO).',
            'b. A fall in net capital outflow (NCO) while domestic investment is unchanged.',
            'c. A fall in domestic investment while net capital outflow (NCO) is unchanged.',
            'd. A fall in domestic investment and net capital outflow (NCO).'
          ],
          id: [
            'a. Kenaikan investasi domestik dan arus keluar modal neto (NCO).',
            'b. Penurunan arus keluar modal neto (NCO), sedangkan investasi domestik tetap.',
            'c. Penurunan investasi domestik, sedangkan arus keluar modal neto (NCO) tetap.',
            'd. Penurunan investasi domestik dan arus keluar modal neto (NCO).'
          ]
        },
        answer: { en: 'a. A rise in domestic investment and net capital outflow (NCO).', id: 'a. Kenaikan investasi domestik dan arus keluar modal neto (NCO).' },
        working: {
          en: '<p>In an open economy $S = I + NCO$ (saving supplies funds for domestic investment <em>and</em> for buying foreign assets). If <span class="key">both $I$ and $NCO$ rise</span>, the demand for loanable funds rises and the equilibrium quantity of saving must rise to match it.</p>',
          id: '<p>Pada perekonomian terbuka $S = I + NCO$ (tabungan menyediakan dana untuk investasi domestik <em>dan</em> untuk membeli aset asing). Jika <span class="key">$I$ dan $NCO$ sama-sama naik</span>, permintaan dana pinjaman naik dan kuantitas tabungan keseimbangan harus naik mengimbanginya.</p>'
        } },

      { n: 3,
        q: {
          en: 'A classic cup of hot chocolate in Paris costs €7.50, while in New York the same hot chocolate costs US$6. If the exchange rate is US$1.25 per €1, what is the real exchange rate?',
          id: 'Harga satu cangkir cokelat panas klasik di Paris adalah €7,50, sedangkan di New York, minuman cokelat panas yang sama seharga US$6. Jika nilai tukar adalah US$1,25 per €1, berapakah nilai tukar riilnya?'
        },
        options: {
          en: ['a. 0.75', 'b. 1.00', 'c. 1.25', 'd. 1.56'],
          id: ['a. 0,75', 'b. 1,00', 'c. 1,25', 'd. 1,56']
        },
        answer: { en: 'd. 1.56', id: 'd. 1,56' },
        working: {
          en: '<div class="formula">$$RER=\\frac{e\\times P^{*}}{P}=\\frac{1.25\\,\\tfrac{\\$}{\\euro}\\times 7.50\\,\\euro}{6\\,\\$}=\\frac{9.375}{6}=1.5625\\approx 1.56$$</div><p>One NY hot chocolate buys about <span class="key">1.56</span> Paris hot chocolates — the foreign cup is the cheaper good once converted.</p>',
          id: '<div class="formula">$$RER=\\frac{e\\times P^{*}}{P}=\\frac{1{,}25\\,\\tfrac{\\$}{\\euro}\\times 7{,}50\\,\\euro}{6\\,\\$}=\\frac{9{,}375}{6}=1{,}5625\\approx 1{,}56$$</div><p>Satu cokelat panas NY setara sekitar <span class="key">1,56</span> cokelat panas Paris — cangkir asing lebih murah setelah dikonversi.</p>'
        } },

      { n: 4,
        q: {
          en: 'Use the 3-panel open-economy macro model below. Suppose in 2025 the Qatari government changes its budget policy from a budget deficit to a budget surplus. The effect of this change can be shown by …',
          id: 'Gunakan diagram 3 (tiga) panel model makroekonomi perekonomian terbuka di bawah ini untuk menjawab pertanyaan berikut. Misalkan pada Tahun 2025 Pemerintah Qatar mengubah kebijakan anggarannya dari defisit anggaran menjadi surplus anggaran. Dampak dari perubahan ini dapat digambarkan oleh …'
        },
        options: {
          en: [
            'a. a leftward shift of the demand curve in panel (a) and a leftward shift of the supply curve in panel (c)',
            'b. a rightward shift of the demand curve in panel (a) and a leftward shift of the demand curve in panel (c)',
            'c. a rightward shift of the supply curve in panel (a) and a rightward shift of the supply curve in panel (c)',
            'd. a rightward shift of the supply curve in panel (a) and a rightward shift of the demand curve in panel (c)'
          ],
          id: [
            'a. pergeseran kurva permintaan pada panel (a) ke kiri dan kurva penawaran pada panel (c) ke kiri',
            'b. pergeseran kurva permintaan pada panel (a) ke kanan dan kurva permintaan pada panel (c) ke kiri',
            'c. pergeseran kurva penawaran pada panel (a) ke kanan dan kurva penawaran pada panel (c) ke kanan',
            'd. pergeseran kurva penawaran pada panel (a) ke kanan dan kurva permintaan pada panel (c) ke kanan'
          ]
        },
        answer: { en: 'c. a rightward shift of the supply curve in panel (a) and a rightward shift of the supply curve in panel (c)', id: 'c. pergeseran kurva penawaran pada panel (a) ke kanan dan kurva penawaran pada panel (c) ke kanan' },
        working: {
          en: '<p>A move from deficit to <span class="key">surplus raises national saving</span>. Panel (a) loanable funds: <span class="key">supply shifts right</span> → $r\\downarrow$. Lower $r$ raises $NCO$, so the <span class="key">supply of the currency (= $NCO$) shifts right</span> in panel (c) → the real exchange rate depreciates and net exports rise. (Both the LF supply and the FX supply shift right.)</p>',
          id: '<p>Beralih dari defisit ke <span class="key">surplus menaikkan tabungan nasional</span>. Panel (a) dana pinjaman: <span class="key">penawaran bergeser ke kanan</span> → $r\\downarrow$. $r$ yang lebih rendah menaikkan $NCO$, sehingga <span class="key">penawaran mata uang (= $NCO$) bergeser ke kanan</span> di panel (c) → nilai tukar riil terdepresiasi dan ekspor neto naik. (Penawaran LF dan penawaran FX sama-sama bergeser ke kanan.)</p>'
        },
        qChart: { panels: [
          { title: '(a) LF: S → right, r ↓', w: 280, h: 240, x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'D' },
              { id: 'S1', kind: 'vline', x: 4, color: '#0e8fb8', label: 'S₁' },
              { id: 'S2', kind: 'vline', x: 6, color: '#0e8fb8', label: 'S₂', dash: true } ],
            points: [ { on: ['D', 'S1'], guideY: 'r₁', dot: true }, { on: ['D', 'S2'], guideY: 'r₂', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] },
          { title: '(b) r ↓ ⇒ NCO ↑', w: 280, h: 240, x: { min: 0, max: 10, label: 'NCO' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'NCO', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#b7791f', label: 'NCO(r)' } ],
            points: [ { onCurve: 'NCO', atY: 5.875, guideY: 'r₁', guideX: 'NCO₁', dot: true }, { onCurve: 'NCO', atY: 4.125, guideY: 'r₂', guideX: 'NCO₂', dot: true } ] },
          { title: '(c) FX: S → right, RER ↓', w: 280, h: 240, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
            curves: [ { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'D=NX' },
              { id: 'S1', kind: 'vline', x: 4, color: '#0e8fb8', label: 'S₁=NCO₁' },
              { id: 'S2', kind: 'vline', x: 6, color: '#0e8fb8', label: 'S₂=NCO₂', dash: true } ],
            points: [ { on: ['D', 'S1'], guideY: 'RER₁', dot: true }, { on: ['D', 'S2'], guideY: 'RER₂', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] }
        ] } },

      { n: 5,
        q: {
          en: 'Ceteris paribus, if the equilibrium real interest rate in the United States (US) rises, then net capital outflow (NCO) in the US will …',
          id: 'Dengan asumsi hal-hal lain tak berubah (ceteris paribus), jika keseimbangan tingkat bunga riil di Amerika Serikat (AS) meningkat, maka arus keluar modal neto (NCO) di AS akan ….'
        },
        options: {
          en: [
            'a. rise, and other countries’ NCO will also rise',
            'b. rise, while other countries’ NCO will fall',
            'c. fall, and other countries’ NCO will also fall',
            'd. fall, while other countries’ NCO will rise'
          ],
          id: [
            'a. meningkat, dan arus keluar modal neto (NCO) negara lain juga akan meningkat',
            'b. meningkat, sementara arus keluar modal neto (NCO) negara lain akan menurun',
            'c. menurun, dan arus keluar modal neto (NCO) negara lain akan menurun',
            'd. menurun, sementara arus keluar modal neto (NCO) negara lain akan meningkat'
          ]
        },
        answer: { en: 'd. fall, while other countries’ NCO will rise', id: 'd. menurun, sementara arus keluar modal neto (NCO) negara lain akan meningkat' },
        working: {
          en: '<p>A higher US real rate makes US assets more attractive, so US residents send <span class="key">less</span> capital abroad → <span class="key">US $NCO\\downarrow$</span>. The mirror image: foreigners now want US assets more, so <span class="key">other countries’ $NCO\\uparrow$</span>.</p>',
          id: '<p>Bunga riil AS yang lebih tinggi membuat aset AS lebih menarik, sehingga penduduk AS mengirim <span class="key">lebih sedikit</span> modal ke luar → <span class="key">$NCO$ AS$\\downarrow$</span>. Cerminannya: pihak asing kini lebih ingin aset AS, sehingga <span class="key">$NCO$ negara lain$\\uparrow$</span>.</p>'
        } },

      { n: 6,
        q: {
          en: 'The negative relationship between the price level and output along the aggregate-demand curve is explained partly by the interest-rate effect, namely …',
          id: 'Hubungan negatif antara tingkat harga dan output pada kurva permintaan agregat salah satunya dijelaskan melalui interest rate effect, yaitu ….'
        },
        options: {
          en: [
            'a. a fall in the price level raises the interest rate, so investment credit rises and pushes GDP up',
            'b. a fall in the price level lowers the interest rate, so investment credit rises and pushes GDP up',
            'c. a fall in the price level raises the interest rate, causing the domestic currency to depreciate, raising net exports, and finally raising GDP',
            'd. a fall in the price level lowers the interest rate, causing the domestic currency to depreciate, raising net exports, and finally raising GDP'
          ],
          id: [
            'a. penurunan tingkat harga akan meningkatkan tingkat bunga, sehingga kredit investasi meningkat dan mendorong kenaikan PDB',
            'b. penurunan tingkat harga akan menurunkan tingkat bunga, sehingga kredit investasi meningkat dan mendorong kenaikan PDB',
            'c. penurunan tingkat harga akan menaikkan tingkat bunga, menyebabkan depresiasi mata uang domestik, meningkatkan ekspor neto, dan akhirnya meningkatkan PDB',
            'd. penurunan tingkat harga akan menurunkan tingkat bunga, menyebabkan depresiasi mata uang domestik, meningkatkan ekspor neto, dan akhirnya meningkatkan PDB'
          ]
        },
        answer: { en: 'b. a fall in the price level lowers the interest rate, so investment credit rises and pushes GDP up', id: 'b. penurunan tingkat harga akan menurunkan tingkat bunga, sehingga kredit investasi meningkat dan mendorong kenaikan PDB' },
        working: {
          en: '<p><span class="key">Interest-rate effect:</span> a lower $P$ means households need less money for transactions, so they lend more → the interest rate <span class="key">falls</span> → investment ($I$) rises → quantity of output demanded rises. (Option d describes the <em>exchange-rate</em> effect, and c reverses the direction.)</p>',
          id: '<p><span class="key">Efek tingkat bunga:</span> $P$ yang lebih rendah berarti rumah tangga butuh lebih sedikit uang untuk transaksi, sehingga mereka meminjamkan lebih banyak → tingkat bunga <span class="key">turun</span> → investasi ($I$) naik → kuantitas output yang diminta naik. (Pilihan d menjelaskan efek <em>nilai tukar</em>, dan c salah arah.)</p>'
        } },

      { n: 7,
        q: {
          en: 'America imposing a high tariff on Indonesian export goods causes …',
          id: 'Penerapan tarif barang impor yang tinggi oleh Amerika terhadap barang ekspor dari Indonesia menyebabkan ….'
        },
        options: {
          en: [
            'a. Indonesia’s exports to America fall, reducing aggregate demand, so Indonesia’s output and price level tend to fall',
            'b. Indonesia’s import demand from America rises, raising aggregate demand, so Indonesia’s output and price level tend to rise',
            'c. the competitiveness of Indonesian products in the American market rises, so Indonesia’s exports and output rise while its price level tends to fall',
            'd. Indonesia’s exports to America rise sharply, pushing up aggregate demand and lowering Indonesia’s price level'
          ],
          id: [
            'a. ekspor Indonesia ke Amerika menurun, mengurangi permintaan agregat, sehingga tingkat output dan harga di Indonesia cenderung turun',
            'b. permintaan impor Indonesia dari Amerika meningkat, meningkatkan permintaan agregat, sehingga tingkat output dan harga di Indonesia cenderung naik',
            'c. daya saing produk Indonesia di pasar Amerika meningkat, sehingga ekspor dan tingkat output Indonesia naik, sedangkan tingkat harganya cenderung turun',
            'd. ekspor Indonesia ke Amerika meningkat drastis, mendorong peningkatan permintaan agregat dan menurunkan tingkat harga di Indonesia'
          ]
        },
        answer: { en: 'a. Indonesia’s exports to America fall, reducing aggregate demand, so Indonesia’s output and price level tend to fall', id: 'a. ekspor Indonesia ke Amerika menurun, mengurangi permintaan agregat, sehingga tingkat output dan harga di Indonesia cenderung turun' },
        working: {
          en: '<p>A US tariff makes Indonesian goods dearer in America → $X\\downarrow$ → $NX\\downarrow$ → Indonesia’s <span class="key">$AD$ shifts left</span> → in the short run both <span class="key">output and the price level fall</span>.</p>',
          id: '<p>Tarif AS membuat barang Indonesia lebih mahal di Amerika → $X\\downarrow$ → $NX\\downarrow$ → <span class="key">$AD$ Indonesia bergeser ke kiri</span> → dalam jangka pendek <span class="key">output dan tingkat harga sama-sama turun</span>.</p>'
        } },

      { n: 8,
        q: {
          en: 'One explanation of the aggregate-supply curve in macroeconomics states that a rise in the price level will …',
          id: 'Salah satu penjelasan terkait kurva penawaran agregat dalam Makroekonomi menyebutkan bahwa kenaikan tingkat harga akan ….'
        },
        options: {
          en: [
            'a. raise the real wage if the nominal wage is sticky',
            'b. reduce the nominal wage if the real wage is sticky',
            'c. reduce the real wage if the nominal wage is sticky',
            'd. raise the nominal wage if the real wage is sticky'
          ],
          id: [
            'a. menaikkan upah riil jika upah nominal bersifat kaku',
            'b. mengurangi upah nominal jika upah riil bersifat kaku',
            'c. mengurangi upah riil jika upah nominal bersifat kaku',
            'd. menaikkan upah nominal jika upah riil bersifat kaku'
          ]
        },
        answer: { en: 'c. reduce the real wage if the nominal wage is sticky', id: 'c. mengurangi upah riil jika upah nominal bersifat kaku' },
        working: {
          en: '<p><span class="key">Sticky-wage theory:</span> if the nominal wage $W$ is fixed by contract, a higher $P$ lowers the <span class="key">real wage</span> $W/P$. Labour becomes cheaper, firms hire and produce more → the SRAS is upward-sloping.</p>',
          id: '<p><span class="key">Teori upah kaku:</span> jika upah nominal $W$ terkunci kontrak, $P$ yang lebih tinggi menurunkan <span class="key">upah riil</span> $W/P$. Tenaga kerja jadi lebih murah, perusahaan merekrut dan memproduksi lebih banyak → SRAS miring ke atas.</p>'
        } },

      { n: 9,
        q: {
          en: 'A large number of people entering retirement age (an aging population) has a significant economic effect. As a result of an aging population, …',
          id: 'Banyaknya penduduk yang memasuki usia pensiun (aging population) memberikan dampak signifikan terhadap perekonomian. Akibat dari aging population, maka ….'
        },
        options: {
          en: [
            'a. the aggregate-supply curve shifts right, so the price level falls while output in the economy rises',
            'b. the aggregate-supply curve stays put, but aggregate demand falls so price and output in the economy fall',
            'c. the aggregate-supply curve shifts left, so the price level falls while output in the economy rises',
            'd. the aggregate-supply curve shifts left, so the price level rises while output in the economy falls'
          ],
          id: [
            'a. kurva penawaran agregat bergeser ke kanan, sehingga tingkat harga menurun, sedangkan tingkat output dalam perekonomian meningkat',
            'b. kurva penawaran agregat tetap, namun permintaan agregat turun sehingga harga dan output dalam perekonomian menurun',
            'c. kurva penawaran agregat bergeser ke kiri, sehingga tingkat harga menurun, sedangkan tingkat output dalam perekonomian meningkat',
            'd. kurva penawaran agregat bergeser ke kiri, sehingga tingkat harga meningkat, sedangkan tingkat output dalam perekonomian menurun'
          ]
        },
        answer: { en: 'd. the aggregate-supply curve shifts left, so the price level rises while output in the economy falls', id: 'd. kurva penawaran agregat bergeser ke kiri, sehingga tingkat harga meningkat, sedangkan tingkat output dalam perekonomian menurun' },
        working: {
          en: '<p>An aging population shrinks the labour force → productive capacity falls → <span class="key">AS shifts left</span>. Along an unchanged $AD$ that means <span class="key">$P\\uparrow$ and $Y\\downarrow$</span>.</p>',
          id: '<p>Populasi menua menyusutkan angkatan kerja → kapasitas produksi turun → <span class="key">AS bergeser ke kiri</span>. Di sepanjang $AD$ yang tetap, artinya <span class="key">$P\\uparrow$ dan $Y\\downarrow$</span>.</p>'
        } },

      { n: 10,
        q: {
          en: 'As shown in the diagram below, a leftward shift of aggregate demand from $AD_1$ to $AD_2$ will not affect the economy’s output in the long run, because the aggregate-supply curve then shifts right from $SRAS_1$ to $SRAS_2$. The equilibrium moves from point A to point C. This happens because …',
          id: 'Seperti terlihat pada diagram di bawah ini, pergeseran kurva permintaan agregat ke kiri dari $AD_1$ ke $AD_2$ tidak akan memengaruhi output perekonomian dalam jangka panjang karena kurva penawaran agregat kemudian akan bergeser ke kanan dari $SRAS_1$ ke $SRAS_2$. Keseimbangan perekonomian bergerak dari titik A ke titik C. Hal ini terjadi karena ….'
        },
        options: {
          en: [
            'a. the fall in aggregate demand pushes the government to raise spending, which raises productive capacity',
            'b. the fall in aggregate demand causes prices to fall, which ultimately lowers expected prices, so aggregate supply rises',
            'c. the fall in aggregate demand causes prices to fall, which encourages higher consumption and investment, so aggregate supply rises',
            'd. the fall in aggregate demand causes prices to fall, so firms’ production and households’ consumption both rise'
          ],
          id: [
            'a. penurunan permintaan agregat mendorong pemerintah meningkatkan pengeluaran, yang menyebabkan peningkatan kapasitas produksi',
            'b. penurunan permintaan agregat menyebabkan penurunan harga, yang pada akhirnya menurunkan ekspektasi harga, sehingga penawaran agregat meningkat',
            'c. penurunan permintaan agregat menyebabkan penurunan harga, yang mendorong peningkatan konsumsi dan investasi, sehingga penawaran agregat meningkat',
            'd. penurunan permintaan agregat menyebabkan penurunan harga, sehingga produksi perusahaan dan konsumsi masyarakat meningkat'
          ]
        },
        answer: { en: 'b. the fall in aggregate demand causes prices to fall, which ultimately lowers expected prices, so aggregate supply rises', id: 'b. penurunan permintaan agregat menyebabkan penurunan harga, yang pada akhirnya menurunkan ekspektasi harga, sehingga penawaran agregat meningkat' },
        working: {
          en: '<p>Long-run self-correction: $AD$-left → $P\\downarrow$ → <span class="key">expected prices fall</span> → nominal wages fall → <span class="key">$SRAS$ shifts right</span> until output returns to its natural level at C (lower $P$, same $Y$).</p>',
          id: '<p>Koreksi-diri jangka panjang: $AD$-kiri → $P\\downarrow$ → <span class="key">ekspektasi harga turun</span> → upah nominal turun → <span class="key">$SRAS$ bergeser ke kanan</span> sampai output kembali ke tingkat alaminya di C ($P$ lebih rendah, $Y$ sama).</p>'
        },
        qChart: { panels: [{
          title: 'AD-left then SRAS-right: A → C', w: 420, h: 300,
          x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
          curves: [
            { id: 'AD1', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₁' },
            { id: 'AD2', kind: 'line', p1: [1, 6], p2: [9, 0], color: '#c0392b', label: 'AD₂', dash: true },
            { id: 'S1', kind: 'line', p1: [1, 1], p2: [9, 7], color: '#0e8fb8', label: 'SRAS₁' },
            { id: 'S2', kind: 'line', p1: [1, -1], p2: [9, 5], color: '#0e8fb8', label: 'SRAS₂', dash: true },
            { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' }
          ],
          points: [ { on: ['AD1', 'S1'], label: 'A', dot: true }, { on: ['AD2', 'S1'], label: 'B', dot: true, labelDx: -14 }, { on: ['AD2', 'S2'], label: 'C', dot: true } ],
          shifts: [ { from: 'AD1', to: 'AD2' }, { from: 'S1', to: 'S2' } ]
        }] } },

      { n: 11,
        q: {
          en: 'When government spending rises, …',
          id: 'Ketika pengeluaran pemerintah meningkat maka ….'
        },
        options: {
          en: [
            'a. aggregate demand rises by the amount of the increase in government spending',
            'b. aggregate demand rises by the amount of the increase in government spending, but is then followed by a fall in aggregate demand due to the crowding-out effect',
            'c. aggregate demand rises by an amount smaller than the increase in government spending',
            'd. aggregate demand rises by an amount larger than the increase in government spending, but is then followed by a fall in aggregate demand due to the crowding-out effect'
          ],
          id: [
            'a. permintaan agregat naik sebesar peningkatan pengeluaran pemerintah',
            'b. permintaan agregat naik sebesar peningkatan pengeluaran pemerintah, namun diikuti penurunan permintaan agregat akibat adanya crowding-out effect',
            'c. permintaan agregat naik dengan besaran yang lebih kecil daripada peningkatan pengeluaran pemerintah',
            'd. permintaan agregat naik dengan jumlah yang lebih besar daripada peningkatan pengeluaran pemerintah, namun diikuti penurunan permintaan agregat akibat adanya crowding-out effect'
          ]
        },
        answer: { en: 'd. aggregate demand rises by an amount larger than the increase in government spending, but is then followed by a fall in aggregate demand due to the crowding-out effect', id: 'd. permintaan agregat naik dengan jumlah yang lebih besar daripada peningkatan pengeluaran pemerintah, namun diikuti penurunan permintaan agregat akibat adanya crowding-out effect' },
        working: {
          en: '<p>Two opposing forces. The <span class="key">multiplier effect</span> makes $AD$ rise by <em>more</em> than $\\Delta G$ (induced consumption). Then the <span class="key">crowding-out effect</span> (higher money demand → $r\\uparrow$ → $I\\downarrow$) pulls $AD$ partly back. Option d captures both.</p>',
          id: '<p>Dua gaya berlawanan. <span class="key">Efek multiplier</span> membuat $AD$ naik <em>lebih</em> dari $\\Delta G$ (konsumsi terimbas). Lalu <span class="key">efek crowding-out</span> (permintaan uang naik → $r\\uparrow$ → $I\\downarrow$) menarik $AD$ sebagian kembali. Pilihan d mencakup keduanya.</p>'
        } },

      { n: 12,
        q: {
          en: 'Suppose the marginal propensity to consume (MPC) is 0.75. A rise in government spending of Rp120 billion will raise aggregate demand by …',
          id: 'Misalkan diketahui marginal propensity to consume (MPC) adalah 0,75, maka peningkatan belanja pemerintah sebesar Rp120 miliar akan meningkatkan permintaan agregat sebesar ….'
        },
        options: {
          en: [
            'a. Rp480 billion, and the effect would be larger if there is a crowding-out effect',
            'b. Rp480 billion, and the effect would be smaller if there is a crowding-out effect',
            'c. Rp160 billion, and the effect would be larger if there is a crowding-out effect',
            'd. Rp160 billion, and the effect would be smaller if there is a crowding-out effect'
          ],
          id: [
            'a. Rp480 milyar, dan efeknya akan lebih besar jika terdapat crowding-out effect',
            'b. Rp480 miliar, dan efeknya akan lebih kecil jika terdapat crowding-out effect',
            'c. Rp160 miliar, dan efeknya akan lebih besar jika terdapat crowding-out effect',
            'd. Rp160 miliar, dan efeknya akan lebih kecil jika terdapat crowding-out effect'
          ]
        },
        answer: { en: 'b. Rp480 billion, and the effect would be smaller if there is a crowding-out effect', id: 'b. Rp480 miliar, dan efeknya akan lebih kecil jika terdapat crowding-out effect' },
        working: {
          en: '<div class="formula">$$\\text{multiplier}=\\frac{1}{1-MPC}=\\frac{1}{1-0.75}=4 \\;\\Rightarrow\\; \\Delta AD = 4\\times 120 = \\textbf{Rp480 billion}$$</div><p>Crowding-out ($r\\uparrow\\Rightarrow I\\downarrow$) offsets part of this, so the realised effect is <span class="key">smaller</span> than Rp480 billion.</p>',
          id: '<div class="formula">$$\\text{multiplier}=\\frac{1}{1-MPC}=\\frac{1}{1-0{,}75}=4 \\;\\Rightarrow\\; \\Delta AD = 4\\times 120 = \\textbf{Rp480 miliar}$$</div><p>Crowding-out ($r\\uparrow\\Rightarrow I\\downarrow$) mengimbangi sebagian, sehingga efek riilnya <span class="key">lebih kecil</span> dari Rp480 miliar.</p>'
        } },

      { n: 13,
        q: {
          en: 'The liquidity-preference model states that when the central bank reduces the money supply, …',
          id: 'Model preferensi likuiditas (the liquidity-preference model) menyatakan bahwa ketika Bank Sentral menurunkan jumlah uang beredar, maka ….'
        },
        options: {
          en: [
            'a. the equilibrium interest rate rises',
            'b. the aggregate-demand curve shifts right',
            'c. the short-run aggregate-supply curve shifts left',
            'd. the quantity of goods and services demanded does not change at a given price level'
          ],
          id: [
            'a. keseimbangan tingkat bunga akan meningkat',
            'b. kurva permintaan agregat bergeser ke kanan',
            'c. kurva penawaran agregat jangka pendek bergeser ke kiri',
            'd. permintaan barang dan jasa yang diminta tidak berubah pada tingkat harga tertentu'
          ]
        },
        answer: { en: 'a. the equilibrium interest rate rises', id: 'a. keseimbangan tingkat bunga akan meningkat' },
        working: {
          en: '<p>With money demand fixed, cutting $MS$ shifts the vertical money-supply line <span class="key">left</span> → the equilibrium <span class="key">interest rate rises</span>. (Higher $r$ then lowers $I$ and shifts $AD$ left — so b and d are wrong.)</p>',
          id: '<p>Dengan permintaan uang tetap, memangkas $MS$ menggeser garis penawaran uang vertikal ke <span class="key">kiri</span> → <span class="key">tingkat bunga keseimbangan naik</span>. ($r$ lebih tinggi lalu menurunkan $I$ dan menggeser $AD$ ke kiri — jadi b dan d salah.)</p>'
        } },

      { n: 14,
        q: {
          en: 'The goal of monetary and fiscal policy is to …',
          id: 'Tujuan dari kebijakan moneter dan kebijakan fiskal adalah untuk ….'
        },
        options: {
          en: [
            'a. offset changes in aggregate demand so that inflation can be eliminated',
            'b. offset changes in aggregate demand for the sake of economic stabilization',
            'c. amplify changes in aggregate demand so that output and employment fluctuate',
            'd. amplify changes in aggregate demand so that economic growth rises'
          ],
          id: [
            'a. mengimbangi perubahan permintaan agregat sehingga inflasi bisa dihilangkan',
            'b. mengimbangi perubahan permintaan agregat demi stabilisasi ekonomi',
            'c. memperkuat perubahan permintaan agregat sehingga tercipta fluktuasi output dan kesempatan kerja',
            'd. memperkuat perubahan permintaan agregat sehingga pertumbuhan ekonomi meningkat'
          ]
        },
        answer: { en: 'b. offset changes in aggregate demand for the sake of economic stabilization', id: 'b. mengimbangi perubahan permintaan agregat demi stabilisasi ekonomi' },
        working: {
          en: '<p>Stabilization policy <span class="key">leans against</span> AD shocks — it offsets them to smooth the business cycle, not to eliminate inflation entirely (a) nor to amplify swings (c, d).</p>',
          id: '<p>Kebijakan stabilisasi <span class="key">melawan arus</span> guncangan AD — mengimbanginya untuk meratakan siklus bisnis, bukan menghapus inflasi sepenuhnya (a) maupun memperkuat ayunan (c, d).</p>'
        } },

      { n: 15,
        q: {
          en: 'Use the diagram below — (a) The Money Market and (b) The Aggregate-Demand Curve. The fall in aggregate output demanded along $AD$ from $Y_1$ to $Y_2$ can be explained as follows.',
          id: 'Gunakan diagram di bawah ini — (a) The Money Market dan (b) The Aggregate Demand Curve. Penurunan permintaan output agregat pada kurva $AD$ dari $Y_1$ ke $Y_2$ dapat dijelaskan sebagai berikut.'
        },
        options: {
          en: [
            'a. A rise in the price level shifts the money-demand curve right; this shift in $MD$ raises $r$ so $Y$ falls.',
            'b. A fall in the price level shifts the money-demand curve right; this shift in $MD$ raises $r$ so $Y$ falls.',
            'c. A rise in the price level shifts the money-demand curve left; this shift in $MD$ lowers $r$ so $Y$ falls.',
            'd. The central bank reduces the money supply, shifting the money-supply curve left; this shift in $MS$ raises $r$ so $Y$ falls.'
          ],
          id: [
            'a. Kenaikan tingkat harga menyebabkan kurva permintaan uang bergeser ke kanan; pergeseran $MD$ ini menyebabkan r naik sehingga Y turun.',
            'b. Penurunan tingkat harga menyebabkan kurva permintaan uang bergeser kanan; pergeseran $MD$ ini menyebabkan r naik sehingga Y turun.',
            'c. Kenaikan tingkat harga menyebabkan kurva permintaan uang bergeser ke kiri; pergeseran $MD$ ini menyebabkan r turun sehingga Y turun.',
            'd. Bank Sentral mengurangi jumlah uang beredar, yang menyebabkan kurva penawaran uang bergeser ke kiri; pergeseran $MS$ ini menyebabkan r naik sehingga Y turun.'
          ]
        },
        answer: { en: 'a. A rise in the price level shifts the money-demand curve right; this shift in $MD$ raises $r$ so $Y$ falls.', id: 'a. Kenaikan tingkat harga menyebabkan kurva permintaan uang bergeser ke kanan; pergeseran $MD$ ini menyebabkan r naik sehingga Y turun.' },
        working: {
          en: '<p>This is a <span class="key">movement along $AD$</span>, not a shift of it. A higher $P$ raises the money needed for transactions → <span class="key">$MD$ shifts right</span> → with $MS$ fixed, $r$ <span class="key">rises</span> → $I$ falls → $Y$ falls. (d would shift the whole $AD$ curve, not move along it.)</p>',
          id: '<p>Ini <span class="key">pergerakan di sepanjang $AD$</span>, bukan pergeseran kurvanya. $P$ yang lebih tinggi menaikkan uang untuk transaksi → <span class="key">$MD$ bergeser ke kanan</span> → dengan $MS$ tetap, $r$ <span class="key">naik</span> → $I$ turun → $Y$ turun. (d akan menggeser seluruh kurva $AD$, bukan bergerak di sepanjangnya.)</p>'
        },
        qChart: { panels: [
          { title: '(a) Money market: P↑ ⇒ MD right ⇒ r↑', w: 340, h: 270, x: { min: 0, max: 10, label: 'M' }, y: { min: 0, max: 10, label: 'r' },
            curves: [
              { id: 'MD1', kind: 'line', p1: [1, 7], p2: [8, 0.5], color: '#c0392b', label: 'MD₁' },
              { id: 'MD2', kind: 'line', p1: [2.5, 9], p2: [9.5, 2.5], color: '#c0392b', label: 'MD₂', dash: true },
              { id: 'MS', kind: 'vline', x: 5, color: '#0e8fb8', label: 'MS' }
            ],
            points: [ { on: ['MD1', 'MS'], guideY: 'r₁', dot: true }, { on: ['MD2', 'MS'], guideY: 'r₂', dot: true } ],
            shifts: [ { from: 'MD1', to: 'MD2' } ] },
          { title: '(b) AD: r↑ ⇒ I↓ ⇒ Y₁→Y₂', w: 340, h: 270, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD' } ],
            points: [ { onCurve: 'AD', atX: 7, label: 'A', dot: true, guideX: 'Y₁', guideY: 'P₁' }, { onCurve: 'AD', atX: 3, label: 'B', dot: true, guideX: 'Y₂', guideY: 'P₂' } ] }
        ] } },

      { n: 16,
        q: {
          en: 'What happens to the short-run Phillips curve (SRPC) when the central bank increases the money supply?',
          id: 'Apa yang terjadi pada kurva Phillips jangka pendek (SRPC) ketika bank sentral meningkatkan jumlah uang beredar?'
        },
        options: {
          en: [
            'a. The rise in money supply raises aggregate demand, prices fall, and the economy moves along the Phillips curve to a point of higher inflation and lower unemployment.',
            'b. The rise in money supply raises aggregate demand, prices rise, and the economy moves along the Phillips curve to a point of higher inflation and lower unemployment.',
            'c. The rise in money supply raises aggregate supply, prices rise, and the economy moves along the Phillips curve to a point of lower inflation and higher unemployment.',
            'd. The rise in money supply raises aggregate supply, prices rise, and the economy moves along the Phillips curve to a point of higher inflation and lower unemployment.'
          ],
          id: [
            'a. Kenaikan jumlah uang beredar meningkatkan permintaan agregat, harga turun, dan ekonomi bergerak sepanjang kurva Phillips ke titik inflasi yang lebih tinggi dan tingkat pengangguran yang lebih rendah.',
            'b. Kenaikan jumlah uang beredar meningkatkan permintaan agregat, harga meningkat, dan ekonomi bergerak sepanjang kurva Phillips ke titik inflasi yang lebih tinggi dan tingkat pengangguran yang lebih rendah.',
            'c. Kenaikan jumlah uang beredar meningkatkan penawaran agregat, harga naik, dan ekonomi bergerak sepanjang kurva Phillips ke titik inflasi yang lebih rendah dan tingkat pengangguran yang lebih tinggi.',
            'd. Kenaikan jumlah uang beredar meningkatkan penawaran agregat, harga naik, ekonomi bergerak sepanjang kurva Phillips ke titik inflasi yang lebih tinggi dan tingkat pengangguran yang lebih rendah.'
          ]
        },
        answer: { en: 'b. The rise in money supply raises aggregate demand, prices rise, and the economy moves along the Phillips curve to a point of higher inflation and lower unemployment.', id: 'b. Kenaikan jumlah uang beredar meningkatkan permintaan agregat, harga meningkat, dan ekonomi bergerak sepanjang kurva Phillips ke titik inflasi yang lebih tinggi dan tingkat pengangguran yang lebih rendah.' },
        working: {
          en: '<p>$MS\\uparrow$ → $r\\downarrow$ → $AD\\uparrow$ → $P\\uparrow$ (inflation). In the short run this is a <span class="key">movement up-left along the SRPC</span>: higher inflation, lower unemployment. (Options c, d wrongly call it an AS effect.)</p>',
          id: '<p>$MS\\uparrow$ → $r\\downarrow$ → $AD\\uparrow$ → $P\\uparrow$ (inflasi). Dalam jangka pendek ini <span class="key">pergerakan naik-ke-kiri di sepanjang SRPC</span>: inflasi lebih tinggi, pengangguran lebih rendah. (Pilihan c, d keliru menyebutnya efek AS.)</p>'
        } },

      { n: 17,
        q: {
          en: 'When the growth rate of the money supply falls, expected inflation will … and the short-run Phillips curve (SRPC) will shift ….',
          id: 'Ketika laju pertumbuhan uang beredar menurun, maka ekspektasi inflasi akan … dan kurva Phillips jangka pendek (SRPC) akan bergeser ….'
        },
        options: {
          en: ['a. fall; downward', 'b. fall; upward', 'c. rise; downward', 'd. rise; upward'],
          id: ['a. menurun; ke bawah', 'b. menurun; ke atas', 'c. meningkat; ke bawah', 'd. meningkat; ke atas']
        },
        answer: { en: 'a. fall; downward', id: 'a. menurun; ke bawah' },
        working: {
          en: '<p>Slower money growth → lower actual inflation → <span class="key">expected inflation falls</span>. Since the SRPC sits at the level of expected inflation, it shifts <span class="key">downward</span>.</p>',
          id: '<p>Pertumbuhan uang lebih lambat → inflasi aktual lebih rendah → <span class="key">ekspektasi inflasi turun</span>. Karena SRPC berada pada tingkat ekspektasi inflasi, kurvanya bergeser <span class="key">ke bawah</span>.</p>'
        } },

      { n: 18,
        q: {
          en: 'A drought raises food prices. What is its short-run effect on inflation and unemployment?',
          id: 'Kekeringan yang terjadi mengakibatkan harga pangan menjadi meningkat. Apa dampaknya terhadap tingkat inflasi dan pengangguran di jangka pendek?'
        },
        options: {
          en: [
            'a. The aggregate-supply curve shifts right, and the short-run Phillips curve shifts right, because production costs rise. A higher Phillips curve means higher inflation at a given unemployment rate.',
            'b. The aggregate-supply curve shifts left, and the short-run Phillips curve shifts left, because production costs rise. A higher Phillips curve means higher inflation at a given unemployment rate.',
            'c. The aggregate-supply curve shifts left and the short-run Phillips curve shifts right, because production costs rise. A higher Phillips curve means higher inflation at a given unemployment rate.',
            'd. The aggregate-supply curve shifts right and the short-run Phillips curve shifts left, because production costs rise. A higher Phillips curve means higher inflation at a given unemployment rate.'
          ],
          id: [
            'a. Kurva penawaran agregat bergeser ke kanan, dan kurva Phillips di jangka pendek akan geser ke kanan, karena biaya produksi meningkat. Kurva Phillips yang semakin tinggi artinya tingkat inflasi semakin tinggi pada tingkat pengangguran tertentu.',
            'b. Kurva penawaran agregat bergeser ke kiri, dan kurva Phillips di jangka pendek akan geser ke kiri, karena biaya produksi yang meningkat. Kurva Phillips yang semakin tinggi artinya tingkat inflasi semakin tinggi pada tingkat pengangguran tertentu.',
            'c. Kurva penawaran agregat bergeser ke kiri dan kurva Phillips di jangka pendek akan geser ke kanan, karena biaya produksi yang meningkat. Kurva Phillips yang semakin tinggi artinya tingkat inflasi semakin tinggi pada tingkat pengangguran tertentu.',
            'd. Kurva penawaran agregat akan bergeser ke kanan dan kurva Phillips jangka pendek akan geser ke kiri, karena biaya produksi yang meningkat. Kurva Phillips yang semakin tinggi artinya tingkat inflasi semakin tinggi pada tingkat pengangguran tertentu.'
          ]
        },
        answer: { en: 'c. The aggregate-supply curve shifts left and the short-run Phillips curve shifts right, because production costs rise. A higher Phillips curve means higher inflation at a given unemployment rate.', id: 'c. Kurva penawaran agregat bergeser ke kiri dan kurva Phillips di jangka pendek akan geser ke kanan, karena biaya produksi yang meningkat. Kurva Phillips yang semakin tinggi artinya tingkat inflasi semakin tinggi pada tingkat pengangguran tertentu.' },
        working: {
          en: '<p>A drought is an adverse supply shock: higher costs shift <span class="key">$SRAS$ left</span>. Its Phillips-curve twin is an <span class="key">$SRPC$ that shifts right/up</span> — inflation <em>and</em> unemployment rise together (stagflation).</p>',
          id: '<p>Kekeringan adalah guncangan penawaran negatif: biaya naik menggeser <span class="key">$SRAS$ ke kiri</span>. Kembarannya di kurva Phillips adalah <span class="key">$SRPC$ yang bergeser ke kanan/atas</span> — inflasi <em>dan</em> pengangguran naik bersama (stagflasi).</p>'
        } },

      { n: 19,
        q: {
          en: 'The government offers tax incentives to raise saving. What is the likely economically harmful effect that makes not all economists agree with this policy?',
          id: 'Pemerintah memberikan insentif pajak untuk meningkatkan tabungan. Apa kemungkinan dampak kebijakan ini yang merugikan secara ekonomi sehingga tak semua ekonom menyepakatinya?'
        },
        options: {
          en: [
            'a. The tax incentive raises private saving but lowers public saving. Therefore national saving may not change even though private saving rises.',
            'b. The tax incentive lowers private saving and public saving. Therefore national saving falls.',
            'c. The tax incentive lowers private saving but raises public saving. Therefore national saving does not change even though private saving rises.',
            'd. The tax incentive raises private saving but does not affect public saving.'
          ],
          id: [
            'a. Insentif pajak akan meningkatkan tabungan privat, namun menurunkan tabungan publik. Oleh karena itu, tabungan nasional mungkin tidak akan berubah meskipun tabungan privat meningkat.',
            'b. Insentif pajak menurunkan tabungan privat dan tabungan publik. Oleh karena itu, tabungan nasional akan menurun.',
            'c. Insentif pajak menurunkan tabungan privat, namun meningkatkan tabungan publik. Oleh karena itu, tabungan nasional tidak akan berubah meskipun tabungan privat meningkat.',
            'd. Insentif pajak meningkatkan tabungan privat, namun tidak memengaruhi tabungan publik.'
          ]
        },
        answer: { en: 'a. The tax incentive raises private saving but lowers public saving. Therefore national saving may not change even though private saving rises.', id: 'a. Insentif pajak akan meningkatkan tabungan privat, namun menurunkan tabungan publik. Oleh karena itu, tabungan nasional mungkin tidak akan berubah meskipun tabungan privat meningkat.' },
        working: {
          en: '<p>National saving = private + public. A tax cut to encourage saving <span class="key">reduces tax revenue</span> → public saving falls. If the fall in public saving offsets the rise in private saving, <span class="key">national saving may be unchanged</span> — the worry skeptics raise.</p>',
          id: '<p>Tabungan nasional = privat + publik. Potongan pajak untuk mendorong menabung <span class="key">mengurangi penerimaan pajak</span> → tabungan publik turun. Jika penurunan tabungan publik mengimbangi kenaikan tabungan privat, <span class="key">tabungan nasional bisa tak berubah</span> — kekhawatiran para skeptis.</p>'
        } },

      { n: 20,
        q: {
          en: 'What is the effect of a large budget deficit on saving, capital formation, and productivity growth, ceteris paribus?',
          id: 'Apa dampak defisit anggaran yang besar terhadap tabungan, pembentukan modal, dan pertumbuhan produktivitas, dengan asumsi ceteris paribus?'
        },
        options: {
          en: [
            'a. A large budget deficit raises national saving and raises capital formation and productivity growth.',
            'b. A large budget deficit raises national saving and lowers capital formation and the rate of productivity growth.',
            'c. A large budget deficit lowers national saving and raises capital formation and the rate of productivity growth.',
            'd. A large budget deficit lowers national saving and lowers capital formation and the rate of productivity growth.'
          ],
          id: [
            'a. Defisit anggaran yang besar meningkatkan tabungan nasional dan meningkatkan pembentukan modal dan pertumbuhan produktivitas.',
            'b. Defisit anggaran yang besar meningkatkan tabungan nasional dan menurunkan pembentukan modal dan Tingkat pertumbuhan produtivitas.',
            'c. Defisit anggaran yang besar menurunkan tabungan nasional dan meningkatkan pembentukan modal dan tingkat pertumbuhan produktivitas.',
            'd. Defisit anggaran yang besar menurunkan tabungan nasional dan menurunkan pembentukan modal dan tingkat pertumbuhan produktivas.'
          ]
        },
        answer: { en: 'd. A large budget deficit lowers national saving and lowers capital formation and the rate of productivity growth.', id: 'd. Defisit anggaran yang besar menurunkan tabungan nasional dan menurunkan pembentukan modal dan tingkat pertumbuhan produktivas.' },
        working: {
          en: '<p>A deficit is negative public saving → <span class="key">national saving falls</span> → less is available to fund investment → <span class="key">capital formation falls</span> → with less capital per worker, <span class="key">productivity growth falls</span>.</p>',
          id: '<p>Defisit adalah tabungan publik negatif → <span class="key">tabungan nasional turun</span> → dana untuk investasi berkurang → <span class="key">pembentukan modal turun</span> → dengan modal per pekerja lebih sedikit, <span class="key">pertumbuhan produktivitas turun</span>.</p>'
        } }
    ]},

    /* ===================== PART II — ESSAY ===================== */
    { kind: 'essay', label: { en: 'Essay', id: 'Esai' }, questions: [

      { n: 1,
        q: {
          en: '<p>The following is an excerpt from the New York Times (translated). On 23 May 2025 President Trump escalated trade tensions by threatening new tariffs on all products from the European Union and on foreign-made smartphones, especially targeting Apple and other makers such as Samsung. He proposed a 50% tariff on EU imports and at least 25% on iPhones made abroad, citing the importance of protecting domestic production. Trump reiterated his demand that Apple move iPhone production to the US, while criticizing the company’s operations in India. The tariffs are planned to take effect by 1 June 2025 unless an agreement is reached first.</p><p><strong>a.</strong> Explain the effect of Trump’s tariff policy on US national saving, domestic investment, net capital outflow (NCO), the interest rate and the real exchange rate, and real net exports. Will Trump succeed in improving the US trade balance with other countries? Use the 3-panel open-economy macro model to show graphically what happens. [9 pts]</p><p><strong>b.</strong> As the world’s second-largest economy, China ran a large trade surplus with the US of $295.4 billion in 2024. Based on your understanding of the relationship between net exports, net capital outflow (NCO), and the saving–investment gap, identify three possible causes of the US trade deficit (China’s surplus). Explain. [6 pts]</p>',
          id: '<p>Berikut adalah cuplikan berita dari New York Times (setelah diterjemahkan). Pada 23 Mei 2025, Presiden Trump memperburuk ketegangan dagang dengan mengancam akan memberlakukan tarif baru terhadap semua produk dari Uni Eropa dan smartphone buatan luar negeri, terutama menargetkan Apple serta produsen lain seperti Samsung. Ia mengusulkan tarif sebesar 50% untuk impor dari Uni Eropa dan setidaknya 25% untuk iPhone yang dibuat di luar negeri, dengan alasan pentingnya melindungi produksi dalam negeri. Trump kembali menegaskan tuntutannya agar Apple memindahkan produksi iPhone ke Amerika Serikat, sambil mengkritik operasi perusahaan tersebut di India. Tarif ini rencananya akan diberlakukan paling lambat 1 Juni 2025, kecuali jika tercapai kesepakatan sebelumnya.</p><p><strong>a.</strong> Jelaskan dampak dari kebijakan tarif Trump tersebut terhadap tabungan nasional, investasi domestik, arus modal keluar neto (NCO), tingkat bunga dan nilai tukar riil, serta ekspor neto riil di AS. Apakah Trump akan berhasil memperbaiki neraca perdagangan AS dengan negara lain? Gunakan diagram 3 (tiga) panel model makroekonomi perekonomian terbuka untuk menunjukkan apa yang terjadi secara grafis. [9 poin]</p><p><strong>b.</strong> Sebagai negara dengan ekonomi terbesar kedua di dunia, Tiongkok mencatat surplus perdagangan yang besar dengan Amerika Serikat, yaitu sebesar $295,4 miliar pada tahun 2024. Berdasarkan pemahaman Anda atas hubungan ekspor neto, arus keluar modal (NCO), dan saving-investment gap, identifikasi tiga kemungkinan penyebab surplus perdagangan AS. Jelaskan. [6 poin]</p>'
        },
        answer: {
          en: '<p><strong>a.</strong> When the US imposes a tariff on imports, <span class="key">nothing happens in the market for loanable funds</span> (panel a) <span class="key">or to net capital outflow</span> (panel b): the tariff does not change national saving $S$, domestic investment $I$, or $NCO$, so $r$ is unchanged. The only effect is that, <em>at any given real exchange rate</em>, net exports rise (imports fall). That raises the <span class="key">demand for dollars</span> in the foreign-currency market — shift $D_1\\!\\to\\!D_2$ in panel (c) — so the dollar <span class="key">appreciates</span> from $E_1$ to $E_2$.</p><div class="formula">$$NX = NCO = S - I$$</div><p>Because $S$, $I$ and $NCO$ are all unchanged, $NX = NCO$ must end up <span class="key">unchanged</span>. The appreciation of the dollar makes US exports dearer and imports cheaper, exactly offsetting the direct effect of the tariff. <span class="key">Trump will NOT improve the US trade balance</span> — the trade deficit is set by the saving–investment gap, not by trade policy.</p><p><strong>b.</strong> Since $NX = NCO = S - I$, a US trade deficit (China surplus) reflects the US <span class="key">saving less than it invests</span>. Three possible causes:</p><ol><li><span class="key">Low US national saving</span> — large budget deficits (negative public saving) and low private saving pull $S$ below $I$, so the US must import capital (negative $NCO$) and run a trade deficit.</li><li><span class="key">High US domestic investment</span> — attractive US investment opportunities raise $I$ above $S$, again requiring capital inflows and a trade deficit.</li><li><span class="key">High Chinese saving relative to its investment</span> — China’s very high saving rate means $S>I$ there, so China exports capital (positive $NCO$) matched by its trade surplus. This is the core open-economy explanation; other factors give only partial answers.</li></ol>',
          id: '<p><strong>a.</strong> Ketika AS mengenakan tarif atas impor, <span class="key">tidak ada yang berubah di pasar dana pinjaman</span> (panel a) <span class="key">maupun pada arus keluar modal neto</span> (panel b): tarif tidak mengubah tabungan nasional $S$, investasi domestik $I$, atau $NCO$, sehingga $r$ tetap. Satu-satunya efek adalah, <em>pada nilai tukar riil berapa pun</em>, ekspor neto naik (impor turun). Itu menaikkan <span class="key">permintaan dolar</span> di pasar valuta asing — pergeseran $D_1\\!\\to\\!D_2$ di panel (c) — sehingga dolar <span class="key">terapresiasi</span> dari $E_1$ ke $E_2$.</p><div class="formula">$$NX = NCO = S - I$$</div><p>Karena $S$, $I$ dan $NCO$ semuanya tetap, $NX = NCO$ pada akhirnya juga <span class="key">tidak berubah</span>. Apresiasi dolar membuat ekspor AS lebih mahal dan impor lebih murah, tepat mengimbangi efek langsung tarif. <span class="key">Trump TIDAK akan memperbaiki neraca perdagangan AS</span> — defisit perdagangan ditentukan oleh saving-investment gap, bukan oleh kebijakan perdagangan.</p><p><strong>b.</strong> Karena $NX = NCO = S - I$, defisit perdagangan AS (surplus Tiongkok) mencerminkan AS <span class="key">menabung kurang dari yang diinvestasikannya</span>. Tiga kemungkinan penyebab:</p><ol><li><span class="key">Tabungan nasional AS rendah</span> — defisit anggaran besar (tabungan publik negatif) dan tabungan privat rendah menarik $S$ di bawah $I$, sehingga AS harus mengimpor modal ($NCO$ negatif) dan mengalami defisit perdagangan.</li><li><span class="key">Investasi domestik AS tinggi</span> — peluang investasi AS yang menarik menaikkan $I$ di atas $S$, lagi-lagi membutuhkan arus masuk modal dan defisit perdagangan.</li><li><span class="key">Tabungan Tiongkok tinggi relatif terhadap investasinya</span> — tingkat tabungan Tiongkok yang sangat tinggi berarti $S>I$ di sana, sehingga Tiongkok mengekspor modal ($NCO$ positif) yang diimbangi surplus perdagangannya. Inilah penjelasan inti perekonomian terbuka; faktor lain hanya jawaban parsial.</li></ol>'
        },
        aChart: { panels: [
          { title: '(a) LF: no change', w: 280, h: 240, x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'D' },
              { id: 'S', kind: 'vline', x: 5, color: '#0e8fb8', label: 'S' } ],
            points: [ { on: ['D', 'S'], guideY: 'r₁', dot: true } ] },
          { title: '(b) NCO: no change', w: 280, h: 240, x: { min: 0, max: 10, label: 'NCO' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'NCO', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#b7791f', label: 'NCO(r)' } ],
            points: [ { onCurve: 'NCO', atY: 5, guideY: 'r₁', guideX: 'NCO₁', dot: true } ] },
          { title: '(c) FX: D → right, RER ↑', w: 280, h: 240, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
            curves: [ { id: 'S', kind: 'vline', x: 5, color: '#0e8fb8', label: 'S = NCO (fixed)' },
              { id: 'D1', kind: 'line', p1: [1, 7.5], p2: [8, 0.5], color: '#c0392b', label: 'D₁=NX' },
              { id: 'D2', kind: 'line', p1: [2.5, 9], p2: [9.5, 2], color: '#c0392b', label: 'D₂', dash: true } ],
            points: [ { on: ['D1', 'S'], guideY: 'E₁', dot: true }, { on: ['D2', 'S'], guideY: 'E₂', dot: true } ],
            shifts: [ { from: 'D1', to: 'D2' } ] }
        ] } },

      { n: 2,
        q: {
          en: '<p><strong>a.</strong> The country of Solvaria faces a recession in 2025. To restore the economy, the government of Solvaria plans to cut the income tax. Using the AD–AS model, explain how this policy affects the economy in the short run. [6 pts]</p><p><strong>b.</strong> The country of Niveria suffers a crop failure due to prolonged extreme weather. Use the AD–AS model to explain the change in the equilibrium price level and output in Niveria’s economy in the short run and the long run. [9 pts]</p>',
          id: '<p><strong>a.</strong> Negara Solvaria menghadapi resesi pada tahun 2025. Untuk memulihkan perekonomian Solvaria, Pemerintah Solvaria berencana menurunkan pajak pendapatan. Dengan menggunakan model AD-AS, jelaskan bagaimana pengaruh kebijakan tersebut dalam jangka pendek. [6 poin]</p><p><strong>b.</strong> Negara Niveria mengalami gagal panen karena cuaca ekstrim yang berkepanjangan. Gunakan model AD-AS untuk menjelaskan perubahan keseimbangan tingkat harga dan output di perekonomian Niveria dalam jangka pendek dan jangka panjang. [9 poin]</p>'
        },
        answer: {
          en: '<p><strong>a. Income-tax cut (Solvaria).</strong> By the consumption function $C = C_0 + b(Y-T)$, a <span class="key">lower tax $T$</span> raises disposable income $(Y-T)$ → consumption rises → <span class="key">$AD$ shifts right</span>. From the initial recession equilibrium, the rightward $AD$ shift raises both the <span class="key">price level $P\\uparrow$</span> and <span class="key">output $Y\\uparrow$</span> in the short run — moving the economy back toward full employment.</p><p><strong>b. Crop failure (Niveria) — an adverse supply shock.</strong> Start at point A where $AD = SRAS_1$ and $AD = LRAS$.</p><p><span class="key">Short run:</span> the crop failure cuts agricultural supply → <span class="key">$SRAS$ shifts left</span> → the price level rises (inflation) and output falls (recession). This is <span class="key">stagflation</span>. The equilibrium moves from A to a new short-run point B, where output is below potential (a recessionary gap) and unemployment is above its natural rate. This is temporary.</p><p><span class="key">Long run:</span> wages adjust. With high unemployment, workers have less bargaining power and accept lower wages → nominal wages fall → <span class="key">$SRAS$ shifts back to the right</span>, gradually returning toward $LRAS$. The economy moves from B back to A: output returns to $Y_{full}$ and unemployment to its natural rate. (This is the <span class="key">sticky-wage / wage-price spiral</span> mechanism, eventually broken when the slack labour market pushes wages down.)</p>',
          id: '<p><strong>a. Penurunan pajak pendapatan (Solvaria).</strong> Berdasarkan fungsi konsumsi $C = C_0 + b(Y-T)$, <span class="key">pajak $T$ yang lebih rendah</span> menaikkan pendapatan disposabel $(Y-T)$ → konsumsi naik → <span class="key">$AD$ bergeser ke kanan</span>. Dari keseimbangan resesi awal, pergeseran $AD$ ke kanan menaikkan <span class="key">tingkat harga $P\\uparrow$</span> dan <span class="key">output $Y\\uparrow$</span> dalam jangka pendek — menggerakkan ekonomi kembali menuju kesempatan kerja penuh.</p><p><strong>b. Gagal panen (Niveria) — guncangan penawaran negatif.</strong> Mulai di titik A dengan $AD = SRAS_1$ dan $AD = LRAS$.</p><p><span class="key">Jangka pendek:</span> gagal panen memangkas penawaran pertanian → <span class="key">$SRAS$ bergeser ke kiri</span> → tingkat harga naik (inflasi) dan output turun (resesi). Inilah <span class="key">stagflasi</span>. Keseimbangan berpindah dari A ke titik jangka pendek baru B, di mana output di bawah potensial (gap resesi) dan pengangguran di atas tingkat alaminya. Ini hanya sementara.</p><p><span class="key">Jangka panjang:</span> upah menyesuaikan. Dengan pengangguran tinggi, pekerja punya daya tawar lebih rendah dan bersedia dibayar lebih rendah → upah nominal turun → <span class="key">$SRAS$ bergeser kembali ke kanan</span>, perlahan kembali menuju $LRAS$. Ekonomi berpindah dari B kembali ke A: output kembali ke $Y_{penuh}$ dan pengangguran ke tingkat alaminya. (Inilah mekanisme <span class="key">upah kaku / wage-price spiral</span>, yang akhirnya patah ketika pasar tenaga kerja lesu menekan upah turun.)</p>'
        },
        aChart: { panels: [
          { title: '(a) Solvaria: tax cut, AD → right', w: 360, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [
              { id: 'AD1', kind: 'line', p1: [1, 6], p2: [9, 0], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 1], p2: [9, 7], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' }
            ],
            points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true }, { on: ['AD2', 'SRAS'], label: 'B', dot: true } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] },
          { title: '(b) Niveria: SRAS-left, A→B→A', w: 360, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [
              { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD' },
              { id: 'S1', kind: 'line', p1: [1, 1], p2: [9, 7], color: '#0e8fb8', label: 'SRAS₁' },
              { id: 'S2', kind: 'line', p1: [1, 3], p2: [9, 9], color: '#0e8fb8', label: 'SRAS₂', dash: true },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' }
            ],
            points: [ { on: ['AD', 'S1'], label: 'A', dot: true }, { on: ['AD', 'S2'], label: 'B', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] }
        ] } },

      { n: 3,
        q: {
          en: '<p>In the first quarter of 2025 the United States (US) experienced an economic slowdown. The US government then provided fiscal stimulus in the form of sectoral subsidies to agriculture and infrastructure.</p><p><strong>a.</strong> Suppose US real GDP is USD24 trillion, the marginal propensity to consume (MPC) is 40%, and the fiscal stimulus is USD1.8 trillion. What is US real GDP after the multiplier effect of the fiscal stimulus? [6 pts]</p><p><strong>b.</strong> If the US monetary authority (the Fed) tries to hold the interest rate constant by raising the money supply to offset the rise in money demand, will the crowding-out effect of the government’s fiscal stimulus occur? Explain your answer using the aggregate-demand (AD) diagram and money-market equilibrium. [9 pts]</p>',
          id: '<p>Pada kuartal pertama 2025 Amerika Serikat (AS) telah mengalami perlambatan ekonomi. Pemerintah AS kemudian memberikan stimulus fiskal dalam bentuk subsidi sektoral ke sektor pertanian dan infrastruktur.</p><p><strong>a.</strong> Misalkan, diketahui bahwa PDB riil AS adalah USD24 triliun, marginal propensity to consume (MPC) adalah 40%, dan stimulus fiskal adalah sebesar USD1,8 triliun. Berapakah PDB riil AS setelah terjadi multiplier effect dari stimulus fiskal? [6 poin]</p><p><strong>b.</strong> Jika otoritas moneter di AS (the Fed) berupaya mempertahankan tingkat bunga dengan menaikkan uang beredar untuk mengimbangi kenaikan permintaan uang, apakah crowding-out effect dari stimulus fiskal pemerintah akan terjadi? Jelaskan jawaban Anda menggunakan diagram permintaan agregat (AD) dan keseimbangan di pasar uang. [9 poin]</p>'
        },
        answer: {
          en: '<p><strong>a.</strong> Use the spending multiplier on the stimulus $\\Delta G = 1.8$ trillion with $MPC = 0.40$:</p><div class="formula">$$\\Delta GDP = \\frac{1}{1-MPC}\\,\\Delta G = \\frac{1}{1-0.40}\\times 1.8 = \\frac{1}{0.60}\\times 1.8 = \\textbf{USD3 trillion}$$</div><p>So new real GDP $= 24 + 3 = \\textbf{USD27 trillion}$.</p><p><strong>b. No crowding-out occurs.</strong> The rise in $G$ shifts $AD$ from $AD_0$ to $AD_1$ (initial effect), then to $AD_2$ (multiplier effect), raising national income $Y$. Higher $Y$ raises money demand → $MD$ shifts right from $MD_0$ to $MD_1$. Normally the excess money demand would push the interest rate up, crowding out private investment.</p><p>But the Fed <span class="key">accommodates</span>: it raises the money supply, shifting $MS$ right from $MS_0$ to $MS_1$, so the interest rate <span class="key">stays at $i_0$</span>. With $r$ unchanged, <span class="key">private investment is unchanged</span> — there is <span class="key">no crowding-out</span>. The full multiplier-driven rise in $Y$ is therefore <span class="key">final</span> (not partly offset).</p>',
          id: '<p><strong>a.</strong> Gunakan pengganda pengeluaran atas stimulus $\\Delta G = 1{,}8$ triliun dengan $MPC = 0{,}40$:</p><div class="formula">$$\\Delta PDB = \\frac{1}{1-MPC}\\,\\Delta G = \\frac{1}{1-0{,}40}\\times 1{,}8 = \\frac{1}{0{,}60}\\times 1{,}8 = \\textbf{USD3 triliun}$$</div><p>Maka PDB riil baru $= 24 + 3 = \\textbf{USD27 triliun}$.</p><p><strong>b. Crowding-out TIDAK terjadi.</strong> Kenaikan $G$ menggeser $AD$ dari $AD_0$ ke $AD_1$ (efek awal), lalu ke $AD_2$ (efek multiplier), menaikkan pendapatan nasional $Y$. $Y$ yang lebih tinggi menaikkan permintaan uang → $MD$ bergeser ke kanan dari $MD_0$ ke $MD_1$. Normalnya kelebihan permintaan uang akan mendorong suku bunga naik, menggusur (crowd out) investasi swasta.</p><p>Tetapi Fed <span class="key">mengakomodasi</span>: ia menaikkan jumlah uang beredar, menggeser $MS$ ke kanan dari $MS_0$ ke $MS_1$, sehingga suku bunga <span class="key">tetap di $i_0$</span>. Dengan $r$ tak berubah, <span class="key">investasi swasta tak berubah</span> — <span class="key">tidak ada crowding-out</span>. Kenaikan $Y$ penuh karena multiplier dengan demikian bersifat <span class="key">final</span> (tidak terimbangi sebagian).</p>'
        },
        aChart: { panels: [
          { title: '(a) Money market: MS → right, r at i₀', w: 360, h: 290, x: { min: 0, max: 10, label: 'M' }, y: { min: 0, max: 10, label: 'r' },
            curves: [
              { id: 'MD0', kind: 'line', p1: [1, 6.5], p2: [8, 0.5], color: '#c0392b', label: 'MD₀' },
              { id: 'MD1', kind: 'line', p1: [2.5, 8], p2: [9.5, 2], color: '#c0392b', label: 'MD₁', dash: true },
              { id: 'MS0', kind: 'vline', x: 4, color: '#0e8fb8', label: 'MS₀' },
              { id: 'MS1', kind: 'vline', x: 6, color: '#0e8fb8', label: 'MS₁', dash: true }
            ],
            points: [ { on: ['MD0', 'MS0'], guideY: 'i₀', dot: true }, { on: ['MD1', 'MS1'], dot: true } ],
            shifts: [ { from: 'MD0', to: 'MD1' }, { from: 'MS0', to: 'MS1' } ] },
          { title: '(b) AD: AD₀→AD₁→AD₂ (full, no crowd-out)', w: 360, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [
              { id: 'AD0', kind: 'line', p1: [1, 6], p2: [9, 0], color: '#c0392b', label: 'AD₀' },
              { id: 'AD1', kind: 'line', p1: [1, 7.5], p2: [9, 1.5], color: '#e8a13a', label: 'AD₁', dash: true },
              { id: 'AD2', kind: 'line', p1: [1, 9], p2: [9, 3], color: '#c0392b', label: 'AD₂' },
              { id: 'SRAS', kind: 'line', p1: [1, 1], p2: [9, 7], color: '#0e8fb8', label: 'SRAS' }
            ],
            points: [ { on: ['AD0', 'SRAS'], label: 'A', dot: true }, { on: ['AD2', 'SRAS'], label: 'C', dot: true } ],
            shifts: [ { from: 'AD0', to: 'AD1' }, { from: 'AD1', to: 'AD2' } ] }
        ] } },

      { n: 4,
        q: {
          en: '<p>Answer the questions below using verbal analysis together with the relevant diagrams.</p><p><strong>a.</strong> To anticipate a weakening global economy, the government implements an expansionary fiscal policy. Explain the effect of the government’s expansionary fiscal policy on the economy in the short run using the AD–SRAS model and the short-run Phillips curve. Identify what happens to output, the price level, the inflation rate, and the unemployment rate. [9 pts]</p><p><strong>b.</strong> When a monetary authority is relatively credible in controlling inflation, the cost of disinflation can be relatively low, so that contractionary monetary policy to lower inflation does not cause a long-lasting rise in unemployment. Explain fully using the AD–AS and Phillips-curve tools in the short run and the long run. [6 pts]</p>',
          id: '<p>Jawablah pertanyaan-pertanyaan di bawah ini dengan menggunakan analisis verbal dengan menggunakan diagram yang relevan.</p><p><strong>a.</strong> Untuk mengantisipasi pelemahan perekonomian global, pemerintah mengimplementasikan kebijakan fiskal ekspansif. Jelaskan dampak kebijakan fiskal ekspansif pemerintah terhadap perekonomian dalam jangka pendek menggunakan model AD-SRAS dan Short Run Phillips Curve. Identifikasi apa yang terjadi pada tingkat output, tingkat harga, laju inflasi, dan tingkat pengangguran. [9 poin]</p><p><strong>b.</strong> Saat otoritas moneter dalam sebuah perekonomian relatif kredibel dalam mengendalikan inflasi, cost of disinflation dalam perekonomian bisa relatif rendah sehingga kebijakan moneter kontraktif untuk menurunkan inflasi tidak menyebabkan kenaikan pengangguran berlangsung lama. Jelaskan secara lengkap menggunakan perangkat kurva AD-AS dan Phillips Curve dalam jangka pendek dan jangka panjang. [6 poin]</p>'
        },
        answer: {
          en: '<p><strong>a. Expansionary fiscal policy (short run).</strong> Higher government spending shifts <span class="key">$AD$ to the right</span> along the upward-sloping $SRAS$ (panel a) → <span class="key">output rises</span> ($Y\\uparrow$) and the <span class="key">price level rises</span> ($P\\uparrow$, i.e. higher inflation). The Phillips curve is the mirror of this: the short-run trade-off between inflation and unemployment means the economy moves <span class="key">up-left along the $SRPC$</span> (panel b) — <span class="key">lower unemployment</span> at the cost of <span class="key">higher inflation</span>. Summary: $Y\\uparrow$, $P\\uparrow$, inflation $\\uparrow$, unemployment $\\downarrow$ — but only in the short run.</p><p><strong>b. Credible disinflation (short and long run).</strong> Contractionary monetary policy reduces the money supply to slow activity and bring inflation down. This is effective but carries a <span class="key">cost of disinflation</span>. The size of that cost — the <span class="key">sacrifice ratio</span> (output lost per point of disinflation) — depends on how <span class="key">credible</span> the central bank is.</p><p><span class="key">Short run:</span> tight policy lowers $AD$; the economy slides <span class="key">down-right along $SRPC_1$</span> from A to B — unemployment rises and inflation falls (a temporary recession).</p><p><span class="key">Long run:</span> as workers and firms <span class="key">adjust their inflation expectations</span> (adaptive expectations), the $SRPC$ shifts <span class="key">down</span> and the economy returns to the natural rate of unemployment, now at a lower inflation rate (B → C on the LRPC). If the central bank is <span class="key">credible</span>, expectations adjust quickly, so B is small/short and the move B→C is fast: inflation falls with <span class="key">little lasting rise in unemployment</span> (a low sacrifice ratio).</p>',
          id: '<p><strong>a. Kebijakan fiskal ekspansif (jangka pendek).</strong> Belanja pemerintah yang lebih tinggi menggeser <span class="key">$AD$ ke kanan</span> di sepanjang $SRAS$ yang miring ke atas (panel a) → <span class="key">output naik</span> ($Y\\uparrow$) dan <span class="key">tingkat harga naik</span> ($P\\uparrow$, yaitu inflasi lebih tinggi). Kurva Phillips adalah cerminannya: trade-off jangka pendek antara inflasi dan pengangguran berarti ekonomi bergerak <span class="key">naik-ke-kiri di sepanjang $SRPC$</span> (panel b) — <span class="key">pengangguran lebih rendah</span> dengan ongkos <span class="key">inflasi lebih tinggi</span>. Ringkasan: $Y\\uparrow$, $P\\uparrow$, inflasi $\\uparrow$, pengangguran $\\downarrow$ — tetapi hanya dalam jangka pendek.</p><p><strong>b. Disinflasi kredibel (jangka pendek dan panjang).</strong> Kebijakan moneter kontraktif mengurangi jumlah uang beredar untuk memperlambat aktivitas dan menurunkan inflasi. Efektif tetapi menimbulkan <span class="key">cost of disinflation</span>. Besaran ongkos itu — <span class="key">sacrifice ratio</span> (output yang hilang per poin disinflasi) — bergantung pada seberapa <span class="key">kredibel</span> bank sentral.</p><p><span class="key">Jangka pendek:</span> kebijakan ketat menurunkan $AD$; ekonomi bergeser <span class="key">turun-ke-kanan di sepanjang $SRPC_1$</span> dari A ke B — pengangguran naik dan inflasi turun (resesi sementara).</p><p><span class="key">Jangka panjang:</span> ketika pekerja dan perusahaan <span class="key">menyesuaikan ekspektasi inflasi</span> (ekspektasi adaptif), $SRPC$ bergeser <span class="key">ke bawah</span> dan ekonomi kembali ke tingkat pengangguran alami, kini pada inflasi yang lebih rendah (B → C di LRPC). Jika bank sentral <span class="key">kredibel</span>, ekspektasi menyesuaikan dengan cepat, sehingga B kecil/singkat dan perpindahan B→C cepat: inflasi turun dengan <span class="key">sedikit kenaikan pengangguran yang bertahan lama</span> (sacrifice ratio rendah).</p>'
        },
        aChart: { panels: [
          { title: '(a) AD–SRAS: AD → right, Y↑ P↑', w: 360, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [
              { id: 'AD1', kind: 'line', p1: [1, 6], p2: [9, 0], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 1], p2: [9, 7], color: '#0e8fb8', label: 'SRAS' }
            ],
            points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true }, { on: ['AD2', 'SRAS'], label: 'B', dot: true } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] },
          { title: '(b) SRPC: A → B (u↓, π↑)', w: 360, h: 290, x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
            curves: [
              { id: 'SRPC', kind: 'line', p1: [1, 5.4], p2: [9, 0.6], color: '#c0392b', label: 'SRPC' },
              { id: 'LRPC', kind: 'vline', x: 5, color: '#444', label: 'LRPC' }
            ],
            points: [ { on: ['SRPC', 'LRPC'], label: 'A', dot: true, guideX: 'uₙ' }, { onCurve: 'SRPC', atX: 2.5, label: 'B', dot: true } ] }
        ] } }
    ]}
  ]
};
