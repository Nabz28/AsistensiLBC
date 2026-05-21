/* ============================================================================
   PE2 · UAS 2024 (Bahasa Indonesia) — Final Exam, Even Semester 2023/2024.
   Faithful 1:1 transcription: 20 MCQ + 4 multi-part essays. Bilingual EN+ID.
   MCQ answers from the official key (1-A 2-B 3-B 4-B 5-C 6-B 7-C 8-D 9-A 10-D
   11-B 12-C 13-A 14-A 15-C 16-D 17-D 18-C 19-D 20-A). The official essay key was
   left blank ("Segera disusulkan...") — essay answers below are modelled on
   standard Mankiw macro and flagged "(official essay key not provided)".
   Charts are declarative EconChart specs; equilibria are COMPUTED.
   ============================================================================ */
window.PE2_EXAMS = window.PE2_EXAMS || {};
window.PE2_EXAMS['2024'] = {
  year: '2024',
  label: { en: 'UAS 2024', id: 'UAS 2024' },
  note: {
    en: 'Final Exam, Even Semester 2023/2024 · Mon 3 June 2024 · 3 hours. Part I: 20 MCQ (2 pts each). Part II: 4 essays (15 pts each). MCQ answers are from the official key; essay answers are modelled on Mankiw because the official essay key was left blank.',
    id: 'Ujian Akhir Semester, Semester Genap 2023/2024 · Senin 3 Juni 2024 · 3 jam. Bagian I: 20 pilihan ganda (2 poin/soal). Bagian II: 4 esai (15 poin/soal). Jawaban PG dari kunci resmi; jawaban esai dimodelkan dari Mankiw karena kunci esai resmi dikosongkan.'
  },
  sections: [
    /* ===================================================================== */
    { kind: 'mcq', label: { en: 'Multiple choice', id: 'Pilihan ganda' }, questions: [

      { n: 1,
        q: { en: 'If a country has the condition $Y > C + I + G$, then that country has ....',
             id: 'Jika suatu negara memiliki kondisi $Y > C + I + G$, maka negara tersebut memiliki ....' },
        options: {
          en: ['A. positive net capital outflow and positive net exports',
               'B. positive net capital outflow and negative net exports',
               'C. negative net capital outflow and positive net exports',
               'D. negative net capital outflow and negative net exports'],
          id: ['A. net capital outflow positif dan net export positif',
               'B. net capital outflow positif dan net export negatif',
               'C. net capital outflow negatif dan net export positif',
               'D. net capital outflow negatif dan net export negatif']
        },
        answer: { en: 'A. positive NCO and positive net exports', id: 'A. NCO positif dan net export positif' },
        working: {
          en: '<p>The identity is $Y = C + I + G + NX$, so $NX = Y-(C+I+G)$. If $Y > C+I+G$ then <span class="key">$NX > 0$</span>. In an open economy $NCO = NX$, so <span class="key">$NCO > 0$</span> too. Equivalently, $Y>C+I+G$ means national saving exceeds domestic investment ($S>I$), and the excess saving is lent abroad.</p>',
          id: '<p>Identitasnya $Y = C + I + G + NX$, sehingga $NX = Y-(C+I+G)$. Jika $Y > C+I+G$ maka <span class="key">$NX > 0$</span>. Dalam perekonomian terbuka $NCO = NX$, jadi <span class="key">$NCO > 0$</span> juga. Setara dengan: $Y>C+I+G$ berarti tabungan nasional melebihi investasi domestik ($S>I$), dan kelebihan tabungan dipinjamkan ke luar negeri.</p>'
        } },

      { n: 2,
        q: { en: 'The theory of Purchasing-Power Parity does not always hold because ....',
             id: 'Teori Purchasing-Power Parity tidak selalu berlaku karena ....' },
        options: {
          en: ['A. similar goods produced in different countries are perfect substitutes',
               'B. many goods are not traded across countries and many goods in the two countries are not perfect substitutes',
               'C. consumer preferences differ in every country',
               'D. there are price differences for goods across countries'],
          id: ['A. barang sejenis yang diproduksi di negara berbeda merupakan barang yang bersifat perfect substitute',
               'B. banyak barang yang tidak diperjualbelikan antar negara dan banyak barang di kedua negara yang tidak bersifat perfect substitute',
               'C. preferensi konsumen berbeda di setiap negara',
               'D. adanya perbedaan harga barang antar negara']
        },
        answer: { en: 'B. many goods are non-traded and many are not perfect substitutes', id: 'B. banyak barang tidak diperdagangkan dan banyak yang bukan substitut sempurna' },
        working: {
          en: '<p>PPP rests on arbitrage: identical, freely-traded goods must sell for the same price everywhere. It breaks down for the two reasons in (B): many goods are <span class="key">non-traded</span> (haircuts, housing) so no arbitrage equalises their prices, and many traded goods are <span class="key">not perfect substitutes</span> (a German car ≠ a Japanese car). (A) is the false assumption that <em>would</em> make PPP hold, not a reason it fails.</p>',
          id: '<p>PPP bertumpu pada arbitrase: barang identik yang diperdagangkan bebas harus berharga sama di mana pun. Ia gagal karena dua alasan di (B): banyak barang <span class="key">tidak diperdagangkan</span> (potong rambut, perumahan) sehingga tak ada arbitrase yang menyamakan harganya, dan banyak barang yang diperdagangkan <span class="key">bukan substitut sempurna</span> (mobil Jerman ≠ mobil Jepang). (A) justru asumsi keliru yang <em>membuat</em> PPP berlaku, bukan alasan kegagalannya.</p>'
        } },

      { n: 3,
        q: { en: 'If the exchange rate is stated in euro/dollar, then the dollar is said to depreciate against the euro if its exchange rate ....',
             id: 'Jika nilai tukar dinyatakan dalam euro/dolar, maka dolar dikatakan terdepresiasi terhadap euro jika nilai tukarnya ....' },
        options: {
          en: ['A. falls, ceteris paribus, so that more euros are needed to buy goods from the United States (US)',
               'B. falls, ceteris paribus, so that fewer euros are needed to buy goods from the US',
               'C. rises, ceteris paribus, so that fewer euros are needed to buy goods from the US',
               'D. rises, ceteris paribus, so that more euros are needed to buy goods from the US'],
          id: ['A. turun, ceteris paribus, sehingga diperlukan euro lebih banyak untuk membeli barang dari Amerika Serikat (AS)',
               'B. turun, ceteris paribus, sehingga diperlukan euro lebih sedikit untuk membeli barang dari AS',
               'C. naik, ceteris paribus, sehingga diperlukan euro lebih sedikit untuk memberli barang dari AS',
               'D. naik, ceteris paribus, sehingga diperlukan euro lebih banyak untuk memberli barang dari AS']
        },
        answer: { en: 'B. falls, so fewer euros are needed to buy US goods', id: 'B. turun, sehingga diperlukan euro lebih sedikit untuk membeli barang dari AS' },
        working: {
          en: '<p>The quote is <span class="key">euros per dollar</span> (€/$). The dollar depreciating means each dollar buys fewer euros — the €/$ number <span class="key">falls</span>. Since US goods are priced in dollars, a cheaper dollar means a euro buyer needs <span class="key">fewer euros</span> to buy the same US good.</p>',
          id: '<p>Kuotasinya adalah <span class="key">euro per dolar</span> (€/$). Dolar terdepresiasi berarti tiap dolar membeli lebih sedikit euro — angka €/$ <span class="key">turun</span>. Karena barang AS dihargai dalam dolar, dolar yang lebih murah berarti pembeli berbasis euro butuh <span class="key">lebih sedikit euro</span> untuk membeli barang AS yang sama.</p>'
        } },

      { n: 4,
        q: { en: 'Use the open-economy macro diagrams below to answer the following. If the government changes its policy from a budget surplus to a budget deficit, the effect is shown by a shift of ....<br><span class="note">Diagram (a) = loanable-funds market (r vs Q); Diagram (c) = market for foreign-currency exchange (RER vs $).</span>',
             id: 'Gunakan diagram model makroekonomi perekonomian terbuka di bawah ini untuk menjawab pertanyaan berikut. Apabila pemerintah mengubah kebijakannya dari budget surplus menjadi budget deficit, dampak perubahan tersebut digambarkan oleh pergeseran ....<br><span class="note">Diagram (a) = pasar dana pinjaman (r vs Q); Diagram (c) = pasar valuta asing (RER vs $).</span>' },
        options: {
          en: ['A. the demand curve in diagram (a) to the right and the demand curve in diagram (c) to the left',
               'B. the supply curve in diagram (a) to the left and the supply curve in diagram (c) to the left',
               'C. the supply curve in diagram (a) to the right and the demand curve in diagram (c) to the right',
               'D. the demand curve in diagram (a) to the left and the supply curve in diagram (c) to the right'],
          id: ['A. kurva permintaan pada diagram (a) ke kanan dan kurva permintaan pada diagram (c) ke kiri',
               'B. kurva penawaran pada diagram (a) ke kiri dan kurva penawaran pada diagram (c) ke kiri',
               'C. kurva penawaran pada diagram (a) ke kanan dan kurva permintaan pada diagram (c) ke kanan',
               'D. kurva permintaan pada diagram (a) ke kiri dan kurva penawaran pada diagram (c) ke kanan']
        },
        answer: { en: 'B. supply in (a) shifts left and supply in (c) shifts left', id: 'B. penawaran di (a) bergeser ke kiri dan penawaran di (c) bergeser ke kiri' },
        working: {
          en: '<p>A move from surplus to deficit <span class="key">lowers public (national) saving</span>. In the loanable-funds market the <span class="key">supply</span> of funds shifts <span class="key">left</span>, raising $r$. Higher $r$ lowers $NCO$, and since the supply of dollars in the FX market equals $NCO$, the <span class="key">supply</span> curve in (c) also shifts <span class="key">left</span> — the dollar appreciates ("twin deficits").</p>',
          id: '<p>Beralih dari surplus ke defisit <span class="key">menurunkan tabungan publik (nasional)</span>. Di pasar dana pinjaman, <span class="key">penawaran</span> dana bergeser ke <span class="key">kiri</span>, menaikkan $r$. $r$ naik menurunkan $NCO$, dan karena penawaran dolar di pasar valas sama dengan $NCO$, kurva <span class="key">penawaran</span> di (c) juga bergeser ke <span class="key">kiri</span> — dolar terapresiasi ("defisit kembar").</p>'
        },
        aChart: { panels: [
          { title: '(a) LF: S left ⇒ r ↑', w: 360, h: 270, x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'D' },
              { id: 'S1', kind: 'vline', x: 6, color: '#0e8fb8', label: 'S₁' },
              { id: 'S2', kind: 'vline', x: 4, color: '#0e8fb8', label: 'S₂', dash: true } ],
            points: [ { on: ['D', 'S1'], guideY: 'r₁', dot: true }, { on: ['D', 'S2'], guideY: 'r₂', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] },
          { title: '(c) FX: S left ⇒ RER ↑', w: 360, h: 270, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
            curves: [ { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'D = NX' },
              { id: 'S1', kind: 'vline', x: 6, color: '#0e8fb8', label: 'S₁=NCO₁' },
              { id: 'S2', kind: 'vline', x: 4, color: '#0e8fb8', label: 'S₂=NCO₂', dash: true } ],
            points: [ { on: ['D', 'S1'], guideY: 'RER₁', dot: true }, { on: ['D', 'S2'], guideY: 'RER₂', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] }
        ] } },

      { n: 5,
        q: { en: 'If the United States raises its import tariff on cars, then in the exchange-rate market there will be ....',
             id: 'Apabila Amerika Serikat menaikkan bea masuk impor mobil, maka pada pasar nilai tukar terjadi ....' },
        options: {
          en: ['A. an excess supply in the foreign-currency exchange market, so the real exchange rate appreciates',
               'B. an excess supply in the foreign-currency exchange market, so the real exchange rate depreciates',
               'C. an excess demand in the foreign-currency exchange market, so the real exchange rate appreciates',
               'D. an excess demand in the foreign-currency exchange market, so the real exchange rate depreciates'],
          id: ['A. kelebihan penawaran di pasar pertukaran mata uang asing, sehingga nilai tukar riil akan terapresiasi',
               'B. kelebihan penawaran di pasar pertukaran mata uang asing, sehingga nilai tukar riil akan terdepresiasi',
               'C. kelebihan permintaan di pasar pertukaran mata uang asing, sehingga nilai tukar riil akan terapresiasi',
               'D. kelebihan permintaan di pasar pertukaran mata uang asing, sehingga nilai tukar riil akan terdepresiasi']
        },
        answer: { en: 'C. excess demand for dollars ⇒ real exchange rate appreciates', id: 'C. kelebihan permintaan dolar ⇒ nilai tukar riil terapresiasi' },
        working: {
          en: '<p>A tariff reduces imports, so Americans demand <span class="key">less foreign currency</span> — equivalently there is an <span class="key">excess demand for dollars</span> at the old rate. This bids the dollar up: the <span class="key">real exchange rate appreciates</span>. Crucially, the tariff does NOT change $S$, $I$ or $NCO$, so the supply of dollars ($=NCO$) is fixed and net exports are ultimately <span class="key">unchanged</span> — the appreciation crowds out exports.</p>',
          id: '<p>Tarif menurunkan impor, sehingga warga AS meminta <span class="key">lebih sedikit mata uang asing</span> — setara dengan adanya <span class="key">kelebihan permintaan dolar</span> pada nilai tukar lama. Ini menaikkan dolar: <span class="key">nilai tukar riil terapresiasi</span>. Penting: tarif TIDAK mengubah $S$, $I$, atau $NCO$, jadi penawaran dolar ($=NCO$) tetap dan ekspor neto akhirnya <span class="key">tidak berubah</span> — apresiasi menggerus ekspor.</p>'
        } },

      { n: 6,
        q: { en: 'In which case can we be certain that aggregate demand as a whole will shift to the left?',
             id: 'Dalam kasus mana kita dapat memastikan bahwa permintaan agregat secara keseluruhan akan bergeser ke kiri?' },
        options: {
          en: ['A. People are more interested in imported goods and the government imposes an import-quota policy.',
               'B. People want to save more for retirement and the central bank reduces the money supply.',
               'C. People prefer to invest abroad more, causing the exchange rate to depreciate.',
               'D. The government adopts a balanced-budget policy.'],
          id: ['A. Masyarakat lebih banyak tertarik pada barang impor dan pemerintah menerapkan kebijakan kuota impor.',
               'B. Masyarakat ingin menabung lebih banyak untuk pensiun dan Bank Sentral mengurangi jumlah uang beredar.',
               'C. Masyarakat jadi lebih suka berinvestasi di luar negeri sehingga terjadi depresiasi nilai tukar.',
               'D. Pemerintah menerapkan kebijakan anggaran berimbang.']
        },
        answer: { en: 'B. saving more (C↓) and a smaller money supply both shift AD left', id: 'B. menabung lebih banyak (C↓) dan uang beredar berkurang sama-sama menggeser AD ke kiri' },
        working: {
          en: '<p>We need both forces pushing AD the <em>same</em> direction. In (B), saving more means consuming less now ($C$↓, AD left) <em>and</em> a smaller money supply raises $r$ and cuts investment ($I$↓, AD left) — <span class="key">both shift AD left</span>, so the result is certain. The other options mix offsetting effects (e.g. in (C) depreciation raises $NX$, pushing AD right).</p>',
          id: '<p>Kita butuh kedua gaya mendorong AD ke arah yang <em>sama</em>. Pada (B), menabung lebih banyak berarti konsumsi kini turun ($C$↓, AD kiri) <em>dan</em> uang beredar berkurang menaikkan $r$ serta memangkas investasi ($I$↓, AD kiri) — <span class="key">keduanya menggeser AD ke kiri</span>, sehingga hasilnya pasti. Pilihan lain mencampur efek yang saling menetralkan (mis. di (C) depresiasi menaikkan $NX$, mendorong AD ke kanan).</p>'
        } },

      { n: 7,
        q: { en: 'Geopolitical pressure has driven up energy prices, raising the overall price of goods and services. Using the Sticky-Price theory of the short-run aggregate-supply (SRAS) curve, if the price level rises by 5% while firms expected only a 3% rise at the start of the year, then some firms with high menu costs will have ....',
             id: 'Tekanan geopolitik telah mendorong kenaikan harga energi. Kenaikan harga energi ini menyebabkan kenaikan harga barang dan jasa secara keseluruhan. Dengan menggunakan teori Sticky-Price pada kurva penawaran agregat jangka pendek (SRAS), jika tingkat harga naik sebesar 5% sementara ekspektasi kenaikan harga perusahaan di awal tahun hanya sebesar 3%, maka beberapa perusahaan dengan biaya menu tinggi akan memiliki ....' },
        options: {
          en: ['A. a relatively higher price, raising the aggregate quantity of goods and services supplied',
               'B. a relatively higher price, lowering the aggregate quantity of goods and services supplied',
               'C. a relatively lower price, raising the aggregate quantity of goods and services supplied',
               'D. a relatively lower price, lowering the aggregate quantity of goods and services supplied'],
          id: ['A. harga relatif lebih tinggi, yang menyebabkan peningkatan jumlah agregat barang dan jasa yang ditawarkan',
               'B. harga relatif lebih tinggi, yang menyebabkan penurunan jumlah agregat barang dan jasa yang ditawarkan',
               'C. harga relatif lebih rendah, yang menyebabkan peningkatan jumlah agregat barang dan jasa yang ditawarkan',
               'D. harga relatif lebih rendah, yang menyebabkan penurunan jumlah agregat barang dan jasa yang ditawarkan']
        },
        answer: { en: 'C. a relatively lower price ⇒ higher quantity supplied', id: 'C. harga relatif lebih rendah ⇒ jumlah ditawarkan naik' },
        working: {
          en: '<p>High-menu-cost firms set prices in advance based on expected inflation (3%) and do NOT re-price when actual inflation comes in higher (5%). With the overall price level 5% higher but their own price stuck at the 3% plan, their price is <span class="key">relatively lower</span> than competitors. Cheaper goods are bought more, so they sell and produce more — the <span class="key">aggregate quantity supplied rises</span>. This positive $P$–$Y$ relationship is exactly the upward-sloping SRAS.</p>',
          id: '<p>Perusahaan ber–menu cost tinggi menetapkan harga di muka berdasar ekspektasi inflasi (3%) dan TIDAK menetapkan ulang saat inflasi aktual lebih tinggi (5%). Dengan tingkat harga umum 5% lebih tinggi tetapi harga mereka tertahan di rencana 3%, harganya <span class="key">relatif lebih rendah</span> dari pesaing. Barang lebih murah lebih banyak dibeli, sehingga mereka menjual dan memproduksi lebih banyak — <span class="key">jumlah agregat yang ditawarkan naik</span>. Hubungan $P$–$Y$ positif inilah yang membentuk SRAS yang miring ke atas.</p>'
        } },

      { n: 8,
        q: { en: 'Which of the following events or policies in a given country would NOT cause the long-run aggregate-supply (LRAS) curve to shift?',
             id: 'Manakah dari kejadian atau kebijakan berikut di suatu negara tertentu yang tidak akan menyebabkan pergeseran kurva long-run aggregate-supply (LRAS)?' },
        options: {
          en: ['A. Forests in many regions burn down completely.',
               'B. Artificial intelligence (AI) advances in the digital era.',
               'C. The government invests heavily in education and health.',
               'D. People anticipate a fall in expected prices in the economy.'],
          id: ['A. Hutan di banyak wilayah terbakar habis.',
               'B. Kecerdasan buatan (AI) makin berkembang dalam era digital.',
               'C. Pemerintah melakukan investasi besar di bidang pendidikan dan kesehatan.',
               'D. Masyarakat mengantisipasi turunnya ekspektasi harga dalam perekonomian.']
        },
        answer: { en: 'D. a change in price expectations does not shift LRAS', id: 'D. perubahan ekspektasi harga tidak menggeser LRAS' },
        working: {
          en: '<p>LRAS is set by <span class="key">real factors</span>: capital, labour, natural resources and technology. (A) destroys natural resources, (B) raises technology, (C) raises human capital — all shift LRAS. A change in <span class="key">price expectations</span> (D) is purely nominal: it shifts <em>SRAS</em>, not LRAS, because the natural rate of output is independent of the price level.</p>',
          id: '<p>LRAS ditentukan oleh <span class="key">faktor riil</span>: modal, tenaga kerja, sumber daya alam, dan teknologi. (A) menghancurkan SDA, (B) menaikkan teknologi, (C) menaikkan modal manusia — semuanya menggeser LRAS. Perubahan <span class="key">ekspektasi harga</span> (D) murni nominal: ia menggeser <em>SRAS</em>, bukan LRAS, karena output alami tidak bergantung pada tingkat harga.</p>'
        } },

      { n: 9,
        q: { en: 'Severe damage occurs to Country A\'s infrastructure as a result of a military attack by Country B on Country A. Meanwhile, Country B\'s economy overheats due to a massive increase in military spending to attack Country A. In the short run, which of the following statements is correct?',
             id: 'Terjadi kerusakan parah pada infrastruktur di Negara A sebagai dampak dari serangan militer negara B ke negara A. Di sisi lain, perekonomian negara B mengalami overheating karena peningkatan besar-besaran belanja militer untuk menyerang negara A. Dalam kondisi jangka pendek, manakah pernyataan yang tepat di bawah ini?' },
        options: {
          en: ['A. Both Country A and Country B experience a rise in domestic prices.',
               'B. Country A\'s short-run aggregate-supply (SRAS) curve shifts left, while its long-run aggregate-supply (LRAS) curve stays put.',
               'C. Country A\'s aggregate-demand (AD) curve shifts left and Country B\'s AD curve shifts right.',
               'D. Country A\'s SRAS curve shifts left and Country B\'s SRAS curve shifts right.'],
          id: ['A. Negara A dan B mengalami kenaikan harga dalam negeri.',
               'B. Kurva short-run aggregate-supply (SRAS) negara A bergeser ke kiri, sementara kurva long-run aggregate-supply (LRAS) tetap.',
               'C. Kurva aggregate-demand (AD) negara A bergeser ke kiri dan kurva AD negara B bergeser ke kanan.',
               'D. Kurva SRAS negara A bergeser ke kiri dan kurva SRAS negara B bergeser ke kanan.']
        },
        answer: { en: 'A. both A and B see domestic prices rise', id: 'A. baik A maupun B mengalami kenaikan harga domestik' },
        working: {
          en: '<p>Country A suffers a destruction of productive capacity — an <span class="key">adverse supply shock</span>: SRAS (and LRAS) shift <span class="key">left</span> → $P$↑. Country B has a surge in government (military) spending — a <span class="key">positive demand shock</span>: AD shifts <span class="key">right</span> → $P$↑. So <span class="key">both countries see domestic prices rise</span>. (B) is wrong because the capacity damage shifts LRAS too; the price increases in both make (A) the complete correct statement.</p>',
          id: '<p>Negara A mengalami penghancuran kapasitas produksi — <span class="key">guncangan penawaran negatif</span>: SRAS (dan LRAS) bergeser ke <span class="key">kiri</span> → $P$↑. Negara B mengalami lonjakan belanja pemerintah (militer) — <span class="key">guncangan permintaan positif</span>: AD bergeser ke <span class="key">kanan</span> → $P$↑. Jadi <span class="key">kedua negara mengalami kenaikan harga domestik</span>. (B) salah karena kerusakan kapasitas juga menggeser LRAS; kenaikan harga di keduanya membuat (A) pernyataan lengkap yang benar.</p>'
        } },

      { n: 10,
        q: { en: 'Referring to the same events in the previous question, theoretically what is predicted to happen to Country A and/or Country B in the long run if neither country undertakes any policy intervention?',
             id: 'Mengacu pada peristiwa yang sama pada soal sebelumnya, secara teori, apakah yang diprediksikan akan terjadi pada negara A dan/atau negara B dalam jangka panjang jika kedua negara tidak melakukan intervensi kebijakan apa pun?' },
        options: {
          en: ['A. A change in price expectations shifts Country A\'s short-run aggregate-supply (SRAS) curve right and Country B\'s left.',
               'B. Country A\'s long-run aggregate-supply (LRAS) curve returns to the right, and Country B\'s aggregate-demand (AD) curve returns to the left.',
               'C. The price-wage spiral eventually stops and price expectations fall in Country A, because the rise in production cost is accompanied by a fall in production capacity.',
               'D. A permanent rise in prices occurs in both countries.'],
          id: ['A. Perubahan ekspektasi harga akan menggeser kurva short-run aggregate-supply (SRAS) negara A ke kanan dan negara B ke kiri.',
               'B. Kurva long-run aggregate-supply (LRAS) negara A akan kembali ke kanan, kurva aggregate-demand (AD) negara B akan kembali ke kiri.',
               'C. Proses price-wage spiral akhirnya berhenti dan ekspektasi harga akan menurun di negara A, karena kenaikan biaya produksi dibarengi dengan penurunan kapasitas produksi.',
               'D. Terjadi peningkatan harga secara permanen di kedua negara.']
        },
        answer: { en: 'D. a permanent rise in prices in both countries', id: 'D. kenaikan harga permanen di kedua negara' },
        working: {
          en: '<p>For Country A the shock was real (lost capacity), so LRAS is permanently lower and the price level settles <span class="key">permanently higher</span> at a lower natural output. For Country B the demand boom raises expected prices; SRAS shifts left over time until output returns to its (unchanged) natural level but at a <span class="key">permanently higher price level</span>. With no intervention, <span class="key">both end up with a permanent price increase</span>.</p>',
          id: '<p>Bagi Negara A guncangannya riil (kehilangan kapasitas), sehingga LRAS permanen lebih rendah dan tingkat harga menetap <span class="key">permanen lebih tinggi</span> pada output alami yang lebih rendah. Bagi Negara B ledakan permintaan menaikkan ekspektasi harga; SRAS bergeser ke kiri seiring waktu hingga output kembali ke level alaminya (yang tak berubah) tetapi pada <span class="key">tingkat harga permanen lebih tinggi</span>. Tanpa intervensi, <span class="key">keduanya berakhir dengan kenaikan harga permanen</span>.</p>'
        } },

      { n: 11,
        q: { en: 'A country experiences a recession due to inadequate aggregate demand (AD). The government believes that shifting the AD curve right by 3,600 trillion will end the recession. If the central bank adjusts the money supply to keep the interest rate constant, investment stays unchanged, and the marginal propensity to consume (MPC) is $2/3$, how large a tax cut by the government is needed to end the recession?',
             id: 'Suatu negara mengalami resesi akibat permintaan agregat (AD) yang tidak memadai. Pemerintah percaya bahwa menggeser kurva AD ke kanan sebesar 3.600 triliun akan mengakhiri resesi. Jika bank sentral menyesuaikan jumlah uang beredar untuk menjaga tingkat suku bunga tetap, investasi tetap tidak berubah, dan marginal propensity to consume (MPC) adalah $2/3$, berapa banyak penurunan pajak pemerintah yang diperlukan untuk mengakhiri resesi?' },
        options: {
          en: ['A. 1,200 trillion.', 'B. 1,800 trillion.', 'C. 2,400 trillion.', 'D. 3,600 trillion.'],
          id: ['A. 1.200 triliun.', 'B. 1.800 triliun.', 'C. 2.400 triliun.', 'D. 3.600 triliun.']
        },
        answer: { en: 'B. 1,800 trillion.', id: 'B. 1.800 triliun.' },
        working: {
          en: '<div class="formula">Tax multiplier $= \\dfrac{MPC}{1-MPC} = \\dfrac{2/3}{1/3} = 2$</div><p>Because the central bank holds $r$ constant there is <span class="key">no crowding out</span>. The needed AD shift is 3,600, so:</p><div class="formula">$\\Delta AD = (\\text{tax multiplier}) \\times \\Delta T_{\\text{cut}} \\;\\Rightarrow\\; 3{,}600 = 2 \\times \\Delta T_{\\text{cut}}$</div><p>$\\Delta T_{\\text{cut}} = 3{,}600 / 2 = $ <span class="key">1,800 trillion</span>.</p>',
          id: '<div class="formula">Pengganda pajak $= \\dfrac{MPC}{1-MPC} = \\dfrac{2/3}{1/3} = 2$</div><p>Karena bank sentral menjaga $r$ tetap, <span class="key">tidak ada crowding out</span>. Pergeseran AD yang dibutuhkan 3.600, sehingga:</p><div class="formula">$\\Delta AD = (\\text{pengganda pajak}) \\times \\Delta T_{\\text{potong}} \\;\\Rightarrow\\; 3.600 = 2 \\times \\Delta T_{\\text{potong}}$</div><p>$\\Delta T_{\\text{potong}} = 3.600 / 2 = $ <span class="key">1.800 triliun</span>.</p>'
        } },

      { n: 12,
        q: { en: 'If the central bank in the previous question instead holds the money supply fixed and lets the interest rate change, then the resulting change in aggregate demand from the cut in government tax revenue will be ....',
             id: 'Jika bank sentral dalam pertanyaan sebelumnya justru mempertahankan jumlah uang beredar dan membiarkan tingkat suku bunga berubah, maka perubahan permintaan agregat yang dihasilkan dari penurunan pendapatan pajak pemerintah tersebut akan menjadi ....' },
        options: {
          en: ['A. larger', 'B. the same', 'C. smaller but still positive', 'D. negative'],
          id: ['A. lebih besar', 'B. sama', 'C. lebih kecil tapi masih positif', 'D. negatif']
        },
        answer: { en: 'C. smaller but still positive', id: 'C. lebih kecil tapi masih positif' },
        working: {
          en: '<p>With the money supply fixed, the fiscal stimulus raises income and money demand, pushing $r$ <span class="key">up</span>. Higher $r$ reduces investment — the <span class="key">crowding-out effect</span> — which partly offsets the fiscal expansion. The AD shift is therefore <span class="key">smaller</span> than the no-crowding-out case in Q11, but the multiplier effect still dominates the offset, so it remains <span class="key">positive</span>.</p>',
          id: '<p>Dengan uang beredar tetap, stimulus fiskal menaikkan pendapatan dan permintaan uang, mendorong $r$ <span class="key">naik</span>. $r$ naik menurunkan investasi — <span class="key">efek crowding-out</span> — yang sebagian menetralkan ekspansi fiskal. Pergeseran AD karenanya <span class="key">lebih kecil</span> dibanding kasus tanpa crowding-out di Soal 11, tetapi efek pengganda masih mengalahkan penyeimbangnya, sehingga tetap <span class="key">positif</span>.</p>'
        } },

      { n: 13,
        q: { en: 'Suppose a fall in the interest rate reduces unemployment and raises the level of output in the country of Peninvilla. A policy that Peninvilla\'s monetary authority can take to address the possible overheating in the economy is ....',
             id: 'Misalkan penurunan suku bunga menyebabkan pengangguran berkurang dan tingkat output meningkat di negara Peninvilla. Kebijakan yang dapat diambil oleh otoritas moneter Peninvilla untuk mengatasi persoalan overheating yang mungkin terjadi dalam ekonomi adalah ....' },
        options: {
          en: ['A. reducing purchases of government bonds',
               'B. cutting spending on public infrastructure projects',
               'C. lowering banks\' required reserve ratio',
               'D. raising the tax rate'],
          id: ['A. mengurangi pembelian obligasi pemerintah',
               'B. mengurangi pengeluaran untuk proyek infrastruktur publik',
               'C. menurunkan rasio cadangan wajib bank',
               'D. menaikkan tingkat pajak']
        },
        answer: { en: 'A. reduce purchases of government bonds (contractionary OMO)', id: 'A. mengurangi pembelian obligasi pemerintah (OPT kontraktif)' },
        working: {
          en: '<p>The question asks specifically for a <span class="key">monetary</span> tool to cool an overheating economy. Reducing bond purchases (or selling bonds) is contractionary open-market operations: it shrinks the money supply, raises $r$ and lowers AD. (B) and (D) are <span class="key">fiscal</span> tools, not monetary; (C) lowering required reserves is <span class="key">expansionary</span> — the wrong direction.</p>',
          id: '<p>Soal meminta khusus alat <span class="key">moneter</span> untuk mendinginkan ekonomi yang overheating. Mengurangi pembelian obligasi (atau menjual obligasi) adalah operasi pasar terbuka kontraktif: ia memperkecil uang beredar, menaikkan $r$, dan menurunkan AD. (B) dan (D) adalah alat <span class="key">fiskal</span>, bukan moneter; (C) menurunkan cadangan wajib bersifat <span class="key">ekspansif</span> — arah yang salah.</p>'
        } },

      { n: 14,
        q: { en: 'Use the money-market diagram below to answer the following. If the current interest rate is 3.25 percent, then ....<br><span class="note">Money market: vertical money supply $M^s$, downward-sloping money demand $M^d$; 3.25% lies below the equilibrium rate.</span>',
             id: 'Gunakan diagram di bawah ini untuk menjawab pertanyaan berikut. Jika tingkat suku bunga saat ini adalah 3,25 persen, maka ....<br><span class="note">Pasar uang: penawaran uang $M^s$ vertikal, permintaan uang $M^d$ miring ke bawah; 3,25% berada di bawah suku bunga keseimbangan.</span>' },
        options: {
          en: ['A. people will sell more bonds, which will raise the interest rate',
               'B. the central bank will buy more bonds, which will raise the interest rate',
               'C. as the money market moves toward equilibrium, people will buy more goods',
               'D. as the money market moves toward equilibrium, people will sell more goods'],
          id: ['A. masyarakat akan menjual lebih banyak obligasi, yang akan menaikkan tingkat suku bunga',
               'B. bank sentral akan membeli lebih banyak obligasi yang akan menaikkan tingkat suku bunga',
               'C. saat pasar uang bergerak menuju keseimbangan, orang-orang akan membeli lebih banyak barang',
               'D. saat pasar uang bergerak menuju keseimbangan, orang-orang akan menjual lebih banyak barang']
        },
        answer: { en: 'A. people sell bonds, which raises the interest rate', id: 'A. masyarakat menjual obligasi, yang menaikkan suku bunga' },
        working: {
          en: '<p>At 3.25% (below equilibrium) the quantity of money demanded exceeds the fixed supply — an <span class="key">excess demand for money</span>. To get more money, people <span class="key">sell bonds</span>. Selling bonds pushes bond prices down, and a lower bond price means a <span class="key">higher interest rate</span>, moving the market back up to equilibrium.</p>',
          id: '<p>Pada 3,25% (di bawah keseimbangan) jumlah uang yang diminta melebihi penawaran tetap — <span class="key">kelebihan permintaan uang</span>. Untuk mendapat lebih banyak uang, masyarakat <span class="key">menjual obligasi</span>. Penjualan obligasi menurunkan harga obligasi, dan harga obligasi yang lebih rendah berarti <span class="key">suku bunga lebih tinggi</span>, menggerakkan pasar kembali naik ke keseimbangan.</p>'
        } },

      { n: 15,
        q: { en: 'If the stock market is booming, then ...',
             id: 'Jika pasar saham sedang booming, maka ...' },
        options: {
          en: ['A. aggregate demand falls, which the central bank can offset by buying bonds',
               'B. aggregate supply falls, which the central bank can offset by buying bonds',
               'C. aggregate demand rises, which the central bank can offset by selling bonds',
               'D. aggregate supply falls, which the central bank can offset by selling bonds'],
          id: ['A. permintaan agregat menurun, yang bisa diimbangi oleh bank sentral dengan membeli obligasi',
               'B. penawaran agregat menurun, yang bisa diimbangi oleh bank sentral dengan membeli obligasi',
               'C. permintaan agregat meningkat, yang bisa diimbangi oleh bank sentral dengan menjual obligasi',
               'D. penawaran agregat menurun, yang bisa diimbangi oleh bank sentral dengan menjual obligasi']
        },
        answer: { en: 'C. AD rises ⇒ central bank sells bonds to offset', id: 'C. AD naik ⇒ bank sentral menjual obligasi untuk mengimbangi' },
        working: {
          en: '<p>A booming stock market raises household <span class="key">wealth</span>, so consumption and AD <span class="key">rise</span> (AD shifts right). To offset the inflationary pressure the central bank tightens: it <span class="key">sells bonds</span>, shrinking the money supply, raising $r$ and pulling AD back.</p>',
          id: '<p>Pasar saham yang booming menaikkan <span class="key">kekayaan</span> rumah tangga, sehingga konsumsi dan AD <span class="key">naik</span> (AD bergeser ke kanan). Untuk mengimbangi tekanan inflasi, bank sentral mengetat: <span class="key">menjual obligasi</span>, memperkecil uang beredar, menaikkan $r$, dan menarik AD kembali.</p>'
        } },

      { n: 16,
        q: { en: 'The central bank is currently in discussion with relevant authorities, including the Ministry of Finance, to formulate policy to manage inflation and unemployment. Currently the natural rate of unemployment is measured at 6%, the Phillips-curve coefficient ($\\alpha$) is 0.2, and businesses\' expected inflation is 5%. If the government aims to raise output to absorb more labour and reduce unemployment to 5%, which monetary policy should be chosen among the following?',
             id: 'Bank sentral saat ini sedang berdiskusi dengan otoritas terkait, termasuk Kementerian Keuangan, untuk merumuskan kebijakan yang tepat guna mengatur tingkat inflasi dan tingkat pengangguran. Saat ini, tingkat pengangguran alami diukur sebesar 6%, koefisien dalam kurva Phillips ($\\alpha$) adalah 0,2, dan tingkat expected inflation dari dunia usaha adalah 5%. Jika pemerintah bertujuan untuk meningkatkan output guna menyerap lebih banyak tenaga kerja dan mengurangi tingkat pengangguran menjadi 5%, kebijakan moneter mana yang harus dipilih di antara kebijakan berikut?' },
        options: {
          en: ['A. Reduce required reserves so inflation becomes 8%.',
               'B. Carry out quantitative easing so inflation becomes 6%.',
               'C. Increase the money supply so inflation becomes 4%.',
               'D. Lower the discount rate so inflation becomes 10%.'],
          id: ['A. Mengurangi cadangan wajib sehingga tingkat inflasi menjadi 8%.',
               'B. Melaksanakan pelonggaran kuantitatif sehingga tingkat inflasi menjadi 6%.',
               'C. Meningkatkan jumlah uang beredar sehingga tingkat inflasi menjadi 4%.',
               'D. Menurunkan tingkat diskonto sehingga tingkat inflasi menjadi 10%.']
        },
        answer: { en: 'D. lower the discount rate so inflation becomes 10%', id: 'D. menurunkan tingkat diskonto sehingga inflasi menjadi 10%' },
        working: {
          en: '<div class="formula">Phillips curve: $u = u_n - \\alpha\\,(\\pi - E\\pi) \\;\\Rightarrow\\; \\pi = E\\pi + \\dfrac{u_n - u}{\\alpha}$</div><p>Plug in $u_n=6\\%$, $u=5\\%$, $\\alpha=0.2$, $E\\pi=5\\%$:</p><div class="formula">$\\pi = 5\\% + \\dfrac{6\\% - 5\\%}{0.2} = 5\\% + \\dfrac{1\\%}{0.2} = 5\\% + 5\\% = 10\\%$</div><p>To push $u$ below the natural rate the bank must run <span class="key">expansionary</span> policy that drives inflation up to <span class="key">10%</span>. Lowering the discount rate is expansionary and matches the required 10%, so the answer is (D).</p>',
          id: '<div class="formula">Kurva Phillips: $u = u_n - \\alpha\\,(\\pi - E\\pi) \\;\\Rightarrow\\; \\pi = E\\pi + \\dfrac{u_n - u}{\\alpha}$</div><p>Masukkan $u_n=6\\%$, $u=5\\%$, $\\alpha=0{,}2$, $E\\pi=5\\%$:</p><div class="formula">$\\pi = 5\\% + \\dfrac{6\\% - 5\\%}{0{,}2} = 5\\% + \\dfrac{1\\%}{0{,}2} = 5\\% + 5\\% = 10\\%$</div><p>Untuk menekan $u$ di bawah tingkat alami, bank harus menjalankan kebijakan <span class="key">ekspansif</span> yang mendorong inflasi naik menjadi <span class="key">10%</span>. Menurunkan tingkat diskonto bersifat ekspansif dan cocok dengan 10% yang dibutuhkan, jadi jawabannya (D).</p>'
        } },

      { n: 17,
        q: { en: 'Suppose a new government has been elected and the market has positive sentiment about macroeconomic conditions, leading to a fall in expected inflation. Ceteris paribus, which policy should the central bank adopt to keep unemployment low?',
             id: 'Misalkan sebuah pemerintahan baru telah terpilih dan pasar memiliki sentimen positif terhadap kondisi makroekonomi yang mengarah pada penurunan inflasi yang diharapkan (expected inflation). Ceteris paribus, kebijakan mana yang harus diadopsi oleh bank sentral untuk menjaga tingkat pengangguran tetap rendah?' },
        options: {
          en: ['A. A reduction in required reserves.',
               'B. Buy more bonds.',
               'C. A reduction in the money supply.',
               'D. Cancel planned quantitative easing.'],
          id: ['A. Pengurangan cadangan wajib.',
               'B. Membeli lebih banyak obligasi.',
               'C. Pengurangan jumlah uang beredar.',
               'D. Membatalkan rencana pelonggaran kuantitatif (quantitative easing).']
        },
        answer: { en: 'D. cancel the planned quantitative easing', id: 'D. membatalkan rencana pelonggaran kuantitatif' },
        working: {
          en: '<p>When expected inflation falls, the short-run Phillips curve shifts <span class="key">down/inward</span>: at any given inflation rate, unemployment is already lower, and the economy can keep unemployment low <span class="key">without extra stimulus</span>. Adding more stimulus (A, B) would overheat the economy and raise inflation; cutting the money supply (C) would raise unemployment. The right move is to <span class="key">cancel the planned QE</span> — neither tighten nor add stimulus.</p>',
          id: '<p>Saat ekspektasi inflasi turun, kurva Phillips jangka pendek bergeser <span class="key">turun/ke dalam</span>: pada tingkat inflasi berapa pun, pengangguran sudah lebih rendah, dan ekonomi dapat menjaga pengangguran rendah <span class="key">tanpa stimulus tambahan</span>. Menambah stimulus (A, B) akan membuat ekonomi overheating dan menaikkan inflasi; memangkas uang beredar (C) akan menaikkan pengangguran. Langkah tepatnya adalah <span class="key">membatalkan rencana QE</span> — tidak mengetat maupun menambah stimulus.</p>'
        } },

      { n: 18,
        q: { en: 'The recent Middle East crisis has created pressure on logistics, affecting trade activity in the region. A study by the German economic institute IfW Kiel found that the number of containers passing through the Red Sea region fell by 60% due to the crisis in early 2024. This, together with the OPEC oil-production-cut announcement in March 2024, pushed oil prices up. Which of the following is a direct short-run impact of the crisis?',
             id: 'Krisis Timur Tengah baru-baru ini telah menciptakan tekanan pada logistik. Krisis ini telah berdampak pada aktivitas perdagangan di wilayah tersebut. Sebuah studi dari lembaga ekonomi Jerman IfW Kiel menemukan bahwa jumlah kontainer yang melewati wilayah Laut Merah menurun sebesar 60% akibat krisis pada awal tahun 2024. Hal ini, ditambah dengan pengumuman pemotongan produksi minyak OPEC pada Maret 2024, telah mendorong harga minyak naik. Manakah dari berikut ini yang merupakan dampak langsung jangka pendek dari krisis tersebut?' },
        options: {
          en: ['A. Aggregate demand shifts left, shifting the short-run Phillips curve right, raising inflation and unemployment.',
               'B. Aggregate demand shifts left, shifting the short-run Phillips curve right, raising unemployment but reducing inflation.',
               'C. Aggregate supply shifts left, shifting the short-run Phillips curve right, raising inflation and unemployment.',
               'D. Aggregate supply shifts left, shifting the short-run Phillips curve left, raising unemployment but reducing inflation.'],
          id: ['A. Permintaan agregat bergeser ke kiri, menggeser kurva Phillips jangka pendek ke kanan, meningkatkan inflasi dan pengangguran.',
               'B. Permintaan agregat bergeser ke kiri, menggeser kurva Phillips jangka pendek ke kanan, meningkatkan pengangguran tetapi mengurangi inflasi.',
               'C. Penawaran agregat bergeser ke kiri, menggeser kurva Phillips jangka pendek ke kanan, meningkatkan inflasi dan pengangguran.',
               'D. Penawaran agregat bergeser ke kiri, menggeser kurva Phillips jangka pendek ke kiri, meningkatkan pengangguran tetapi mengurangi inflasi.']
        },
        answer: { en: 'C. AS shifts left ⇒ SRPC shifts right ⇒ inflation and unemployment both rise', id: 'C. AS bergeser kiri ⇒ SRPC bergeser kanan ⇒ inflasi dan pengangguran sama-sama naik' },
        working: {
          en: '<p>Higher oil and shipping costs are an <span class="key">adverse supply shock</span>: aggregate supply (SRAS) shifts <span class="key">left</span>, raising $P$ and lowering $Y$. Stagflation means inflation AND unemployment rise together — equivalently the short-run Phillips curve shifts <span class="key">right/outward</span>, worsening the inflation–unemployment trade-off. That is exactly option (C).</p>',
          id: '<p>Kenaikan biaya minyak dan pengiriman adalah <span class="key">guncangan penawaran negatif</span>: penawaran agregat (SRAS) bergeser ke <span class="key">kiri</span>, menaikkan $P$ dan menurunkan $Y$. Stagflasi berarti inflasi DAN pengangguran naik bersamaan — setara dengan kurva Phillips jangka pendek bergeser ke <span class="key">kanan/keluar</span>, memperburuk trade-off inflasi–pengangguran. Itulah persis pilihan (C).</p>'
        } },

      { n: 19,
        q: { en: 'Country A has a sacrifice ratio of 5, while Country B has a sacrifice ratio of 1. Which of the following statements is correct?',
             id: 'Negara A memiliki sacrifice ratio sebesar 5, sedangkan Negara B memiliki sacrifice ratio sebesar 1. Manakah pernyataan di bawah ini yang benar?' },
        options: {
          en: ['A. Country A must increase its money supply 5 times more to reduce inflation than Country B.',
               'B. Country A must invest 5 times more to reach the same growth rate as Country B.',
               'C. To reduce inflation by the same amount, the output forgone in Country A is lower than in Country B.',
               'D. The loss of employment in Country A is larger to reduce inflation by the same amount.'],
          id: ['A. Negara A harus meningkatkan jumlah uang beredar 5 kali lebih banyak untuk mengurangi inflasi dibandingkan Negara B.',
               'B. Negara A harus berinvestasi 5 kali lebih banyak untuk mencapai tingkat pertumbuhan yang sama dengan Negara B.',
               'C. Untuk mengurangi tingkat inflasi yang sama, jumlah output yang berkurang di Negara A lebih rendah daripada di Negara B.',
               'D. Turunnya lapangan pekerjaan di Negara A lebih besar untuk mengurangi tingkat inflasi yang sama.']
        },
        answer: { en: 'D. Country A loses more jobs to disinflate by the same amount', id: 'D. Negara A kehilangan lebih banyak pekerjaan untuk disinflasi yang sama' },
        working: {
          en: '<div class="formula">Sacrifice ratio $= \\dfrac{\\%\\,\\text{output lost (per year)}}{1\\text{ point of disinflation}}$</div><p>A ratio of 5 versus 1 means that to cut inflation by the same amount, Country A must give up <span class="key">five times as much output</span> as Country B. By Okun\'s law, lost output means lost jobs, so Country A suffers a <span class="key">larger rise in unemployment</span>. That makes (D) correct. (C) is the reverse of the truth, and (A)/(B) confuse the sacrifice ratio with money growth and investment.</p>',
          id: '<div class="formula">Sacrifice ratio $= \\dfrac{\\%\\,\\text{output yang hilang (per tahun)}}{1\\text{ poin disinflasi}}$</div><p>Rasio 5 berbanding 1 berarti untuk memangkas inflasi sebesar yang sama, Negara A harus mengorbankan <span class="key">lima kali lipat output</span> dibanding Negara B. Menurut hukum Okun, output yang hilang berarti pekerjaan yang hilang, jadi Negara A mengalami <span class="key">kenaikan pengangguran lebih besar</span>. Maka (D) benar. (C) adalah kebalikan dari kebenaran, dan (A)/(B) mengacaukan sacrifice ratio dengan pertumbuhan uang dan investasi.</p>'
        } },

      { n: 20,
        q: { en: 'During the Covid pandemic, the Indonesian Government issued Minister of Finance Regulation No. 86/PMK.03/2020 on tax incentives worth Rp123 trillion. Expansionary fiscal policy can also be done through higher government spending. According to the aggregate supply–demand model, which policy is more effective at influencing BOTH aggregate demand (AD) and aggregate supply (AS)?',
             id: 'Selama pandemi Covid, Pemerintah Indonesia mengeluarkan Peraturan Menteri Keuangan Nomor 86/PMK.03/2020 tentang insentif perpajakan sebesar Rp123 triliun. Kebijakan ekspansi fiskal bisa dilakukan juga melalui peningkatan pengeluaran pemerintah. Menurut model penawaran dan permintaan agregat, kebijakan mana yang lebih efektif memengaruhi baik aggregate demand (AD) maupun aggregate supply (AS)?' },
        options: {
          en: ['A. The tax-incentive policy.',
               'B. The increased-government-spending policy.',
               'C. Both increased government spending and tax incentives.',
               'D. Neither tax incentives nor increased government spending can affect AD and AS.'],
          id: ['A. Kebijakan insentif pajak.',
               'B. Kebijakan peningkatan pengeluaran pemerintah.',
               'C. Kebijakan peningkatan pengeluaran pemerintah dan insentif pajak.',
               'D. Kebijakan insentif pajak maupun peningkatan pengeluaran pemerintah tidak dapat memengaruhi AD dan AS.']
        },
        answer: { en: 'A. the tax-incentive policy', id: 'A. kebijakan insentif pajak' },
        working: {
          en: '<p>Higher government spending works only on the <span class="key">demand</span> side — it shifts AD right but leaves AS unchanged. A <span class="key">tax incentive</span> works on both: it raises households\' disposable income and firms\' after-tax returns (AD right), AND, by lowering production/input costs and improving incentives to produce, it also shifts <span class="key">AS right</span>. Because it can move both curves, the tax-incentive policy (A) is the more effective tool for influencing AD and AS together.</p>',
          id: '<p>Peningkatan pengeluaran pemerintah hanya bekerja di sisi <span class="key">permintaan</span> — menggeser AD ke kanan tetapi membiarkan AS tetap. <span class="key">Insentif pajak</span> bekerja di keduanya: menaikkan pendapatan disposabel rumah tangga dan imbal hasil setelah pajak perusahaan (AD ke kanan), DAN, dengan menurunkan biaya produksi/input serta memperbaiki insentif berproduksi, juga menggeser <span class="key">AS ke kanan</span>. Karena dapat menggerakkan kedua kurva, kebijakan insentif pajak (A) lebih efektif memengaruhi AD dan AS sekaligus.</p>'
        } }
    ]},

    /* ===================================================================== */
    { kind: 'essay', label: { en: 'Essay', id: 'Esai' }, questions: [

      { n: 1,
        q: {
          en: '<p><strong>(a-i)</strong> Micronesia is a small open economy with the following data (in billions): GDP = $7,400; Consumption = $4,550; Government spending = $1,200; Net exports = −$750. Compute investment, national saving and net capital outflow (NCO). <span class="note">[4 pts]</span></p>'
            + '<p><strong>(a-ii)</strong> Cali, a tourist from Micronesia, buys a vintage hat in Macronesia for 45 Ma$ (Macro Dollar). The same hat costs 39.99 Mi$ (Micro Dollar) at home. The prevailing exchange rate is Mi$1 = Ma$1.12. In which country is the hat cheaper? Explain. <span class="note">[4 pts]</span></p>'
            + '<p><strong>(b)</strong> Venezuela has suffered one of the worst economic crises in recent years; a prolonged crisis worsened by political instability and falling energy prices has weakened the currency and the banking system. Many Venezuelans move their money to other Latin American or safer countries, causing significant capital flight (Source: BBC, 2024). As an economist, analyse how the crisis affects Venezuela\'s exchange rate, net capital outflow (NCO) and loanable funds. Use relevant diagrams. <span class="note">[7 pts]</span></p>',
          id: '<p><strong>(a-i)</strong> Micronesia adalah perekonomian terbuka kecil dengan data berikut (dalam miliar): PDB = $7.400; Konsumsi = $4.550; Pengeluaran pemerintah = $1.200; Ekspor neto = −$750. Hitung investasi, tabungan nasional, dan net capital outflow (NCO). <span class="note">[4 poin]</span></p>'
            + '<p><strong>(a-ii)</strong> Cali, turis dari Micronesia, membeli topi vintage di Macronesia seharga 45 Ma$ (Macro Dollar). Topi yang sama berharga 39,99 Mi$ (Micro Dollar) di negaranya. Nilai tukar yang berlaku Mi$1 = Ma$1,12. Di negara mana topi tersebut lebih murah? Jelaskan. <span class="note">[4 poin]</span></p>'
            + '<p><strong>(b)</strong> Venezuela mengalami salah satu krisis ekonomi terparah beberapa tahun terakhir; krisis berkepanjangan yang diperparah ketidakstabilan politik dan jatuhnya harga energi telah melemahkan mata uang dan sistem perbankan. Banyak warga memindahkan uang ke negara Amerika Latin lain atau negara yang lebih aman, menimbulkan pelarian modal (capital flight) signifikan (Sumber: BBC, 2024). Sebagai ekonom, analisis bagaimana krisis tersebut memengaruhi nilai tukar, net capital outflow (NCO), dan loanable funds di Venezuela. Gunakan diagram yang relevan. <span class="note">[7 poin]</span></p>'
        },
        answer: {
          en: '<div class="note">(official essay key not provided — model answer using standard Mankiw open-economy macro)</div>'
            + '<p><strong>(a-i) Investment, saving, NCO.</strong> Use $Y = C + I + G + NX$:</p>'
            + '<div class="formula">$I = Y - C - G - NX = 7{,}400 - 4{,}550 - 1{,}200 - (-750) = $ <span class="key">$2,400$ billion</span></div>'
            + '<div class="formula">$S = Y - C - G = 7{,}400 - 4{,}550 - 1{,}200 = $ <span class="key">$1,650$ billion</span></div>'
            + '<div class="formula">$NCO = NX = $ <span class="key">$-750$ billion</span> (a net capital inflow). Check: $S = I + NCO = 2{,}400 + (-750) = 1{,}650$ ✓</div>'
            + '<p><strong>(a-ii) Where is the hat cheaper?</strong> Convert the Macronesia price into Micro Dollars. Mi$1 = Ma$1.12, so Ma$1 = 1/1.12 Mi$:</p>'
            + '<div class="formula">$45\\text{ Ma\\$} \\times \\dfrac{1\\text{ Mi\\$}}{1.12\\text{ Ma\\$}} = 40.18\\text{ Mi\\$}$</div>'
            + '<p>At home the hat is 39.99 Mi$. Since $39.99 < 40.18$, the hat is <span class="key">cheaper at home in Micronesia</span> (by about 0.19 Mi$). (Equivalently the home price 39.99 Mi$ = 44.79 Ma$ &lt; 45 Ma$.)</p>'
            + '<p><strong>(b) Capital flight in Venezuela.</strong> Political risk makes residents want to hold more foreign assets, so <span class="key">NCO rises</span> at every interest rate. Two markets adjust:</p>'
            + '<ul><li><span class="key">Loanable funds:</span> higher $NCO$ raises the demand for loanable funds ($D = I + NCO$ shifts <span class="key">right</span>), so the real interest rate $r$ <span class="key">rises</span>.</li>'
            + '<li><span class="key">Foreign-currency exchange:</span> the supply of the home currency ($S = NCO$) shifts <span class="key">right</span>, so the real exchange rate <span class="key">depreciates</span> (the bolívar weakens). The cheaper currency raises net exports $NX$ to match the higher $NCO$.</li></ul>'
            + '<p>Net result: $r$↑, $NCO$↑, the currency <span class="key">depreciates</span>, and $NX$↑. This matches the real-world weakening of the Venezuelan currency.</p>',
          id: '<div class="note">(kunci esai resmi tidak disediakan — jawaban model memakai makro perekonomian terbuka Mankiw standar)</div>'
            + '<p><strong>(a-i) Investasi, tabungan, NCO.</strong> Gunakan $Y = C + I + G + NX$:</p>'
            + '<div class="formula">$I = Y - C - G - NX = 7.400 - 4.550 - 1.200 - (-750) = $ <span class="key">$2.400$ miliar</span></div>'
            + '<div class="formula">$S = Y - C - G = 7.400 - 4.550 - 1.200 = $ <span class="key">$1.650$ miliar</span></div>'
            + '<div class="formula">$NCO = NX = $ <span class="key">$-750$ miliar</span> (aliran modal masuk neto). Cek: $S = I + NCO = 2.400 + (-750) = 1.650$ ✓</div>'
            + '<p><strong>(a-ii) Di mana topi lebih murah?</strong> Konversikan harga di Macronesia ke Micro Dollar. Mi$1 = Ma$1,12, sehingga Ma$1 = 1/1,12 Mi$:</p>'
            + '<div class="formula">$45\\text{ Ma\\$} \\times \\dfrac{1\\text{ Mi\\$}}{1{,}12\\text{ Ma\\$}} = 40{,}18\\text{ Mi\\$}$</div>'
            + '<p>Di negaranya topi seharga 39,99 Mi$. Karena $39{,}99 < 40{,}18$, topi <span class="key">lebih murah di negaranya, Micronesia</span> (sekitar 0,19 Mi$). (Setara: harga domestik 39,99 Mi$ = 44,79 Ma$ &lt; 45 Ma$.)</p>'
            + '<p><strong>(b) Pelarian modal di Venezuela.</strong> Risiko politik membuat penduduk ingin memegang lebih banyak aset asing, sehingga <span class="key">NCO naik</span> pada setiap tingkat bunga. Dua pasar menyesuaikan:</p>'
            + '<ul><li><span class="key">Dana pinjaman:</span> $NCO$ naik menaikkan permintaan dana pinjaman ($D = I + NCO$ bergeser ke <span class="key">kanan</span>), sehingga suku bunga riil $r$ <span class="key">naik</span>.</li>'
            + '<li><span class="key">Valuta asing:</span> penawaran mata uang domestik ($S = NCO$) bergeser ke <span class="key">kanan</span>, sehingga nilai tukar riil <span class="key">terdepresiasi</span> (bolívar melemah). Mata uang yang lebih murah menaikkan ekspor neto $NX$ agar sepadan dengan $NCO$ yang lebih tinggi.</li></ul>'
            + '<p>Hasil neto: $r$↑, $NCO$↑, mata uang <span class="key">terdepresiasi</span>, dan $NX$↑. Ini sesuai pelemahan mata uang Venezuela di dunia nyata.</p>'
        },
        aChart: { panels: [
          { title: '(1) LF: D right ⇒ r ↑', w: 360, h: 270, x: { min: 0, max: 10, label: 'Q (LF)' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'S', kind: 'vline', x: 5, color: '#0e8fb8', label: 'S' },
              { id: 'D1', kind: 'line', p1: [1, 7], p2: [8, 0.5], color: '#c0392b', label: 'D₁=I+NCO₁' },
              { id: 'D2', kind: 'line', p1: [2.5, 9], p2: [9.5, 2.5], color: '#c0392b', label: 'D₂', dash: true } ],
            points: [ { on: ['D1', 'S'], guideY: 'r₁', dot: true }, { on: ['D2', 'S'], guideY: 'r₂', dot: true } ],
            shifts: [ { from: 'D1', to: 'D2' } ] },
          { title: '(2) FX: S right ⇒ RER ↓ (depreciate)', w: 360, h: 270, x: { min: 0, max: 10, label: '$ (FX)' }, y: { min: 0, max: 10, label: 'RER' },
            curves: [ { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'D = NX' },
              { id: 'S1', kind: 'vline', x: 4, color: '#0e8fb8', label: 'S₁=NCO₁' },
              { id: 'S2', kind: 'vline', x: 7, color: '#0e8fb8', label: 'S₂=NCO₂', dash: true } ],
            points: [ { on: ['D', 'S1'], guideY: 'RER₁', dot: true }, { on: ['D', 'S2'], guideY: 'RER₂', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] }
        ] } },

      { n: 2,
        q: {
          en: '<p>In Indonesian history, the war for independence caused both short- and long-run effects on the economy. After independence in 1945 Indonesia found its production facilities and infrastructure heavily damaged. As a consequence of the Round Table Conference (KMB) agreement, Indonesia had to pay the Dutch Colonial Government\'s debt of 4.3 billion guilders. In the 1950s the government pursued various policies to repair the national economy — easing business for indigenous entrepreneurs and taking over Dutch firms. By 1955, economic growth reached 5%, above the pre-independence level (Boediono, 2016). Use AD–AS analysis to answer (a) and (b).</p>'
            + '<p><strong>(a)</strong> One effect of the war was heavy damage to Indonesia\'s production facilities and infrastructure. How did this affect the short-run and long-run economic equilibrium of Indonesia at that time? <span class="note">[6 pts]</span></p>'
            + '<p><strong>(b)</strong> The government issued a policy that eased imports for indigenous entrepreneurs so they could compete with Dutch firms. How did this policy affect Indonesia\'s short-run and long-run equilibrium (assume ceteris paribus, where exports and production facilities do not change)? <span class="note">[6 pts]</span></p>'
            + '<p><strong>(c)</strong> Based on the whole analysis above, briefly explain your view on the relationship between economic and political factors in the Indonesian economy. What lesson can you draw from this historical experience? <span class="note">[3 pts]</span></p>',
          id: '<p>Dalam sejarah Indonesia, perang kemerdekaan menimbulkan dampak jangka pendek dan panjang bagi perekonomian. Pasca kemerdekaan 1945, Indonesia mendapati sarana dan prasarana produksi rusak berat. Sebagai konsekuensi kesepakatan Konferensi Meja Bundar (KMB), Indonesia harus membayar utang Pemerintah Kolonial Belanda sebesar 4,3 miliar gulden. Pada 1950-an pemerintah menjalankan berbagai kebijakan untuk memperbaiki perekonomian — memberi kemudahan usaha bagi pengusaha pribumi dan mengambil alih perusahaan Belanda. Pada 1955, pertumbuhan ekonomi mencapai 5%, di atas tingkat sebelum kemerdekaan (Boediono, 2016). Gunakan analisis AD–AS untuk menjawab (a) dan (b).</p>'
            + '<p><strong>(a)</strong> Salah satu dampak perang adalah kerusakan berat sarana dan prasarana produksi. Bagaimana dampaknya terhadap keseimbangan ekonomi jangka pendek dan jangka panjang Indonesia saat itu? <span class="note">[6 poin]</span></p>'
            + '<p><strong>(b)</strong> Pemerintah mengeluarkan kebijakan yang mempermudah impor bagi pengusaha pribumi agar bisa bersaing dengan pengusaha Belanda. Bagaimana pengaruh kebijakan tersebut terhadap keseimbangan ekonomi jangka pendek dan jangka panjang Indonesia (asumsikan ceteris paribus, ekspor dan sarana prasarana produksi tidak berubah)? <span class="note">[6 poin]</span></p>'
            + '<p><strong>(c)</strong> Berdasarkan keseluruhan analisis di atas, jelaskan secara singkat pendapat Anda mengenai hubungan antara faktor ekonomi dan politik dalam perekonomian Indonesia. Apa pelajaran yang bisa Anda ambil dari pengalaman sejarah tersebut? <span class="note">[3 poin]</span></p>'
        },
        answer: {
          en: '<div class="note">(official essay key not provided — model answer using standard Mankiw AD–AS)</div>'
            + '<p><strong>(a) Destruction of capacity — an adverse supply shock.</strong> Heavy damage to production facilities reduces the economy\'s real capacity to produce. Both <span class="key">SRAS and LRAS shift left</span>. In the <span class="key">short run</span> the economy moves up the AD curve: real GDP <span class="key">falls</span>, the price level <span class="key">rises</span>, and unemployment <span class="key">rises</span> (stagflation). In the <span class="key">long run</span>, because the loss of capacity is real, the natural level of output is permanently lower; the economy settles at a <span class="key">lower potential GDP and a higher price level</span>.</p>'
            + '<p><strong>(b) Easing imports — a demand-side leakage.</strong> Easier imports raise $M$, so net exports $NX = X - M$ <span class="key">fall</span>. Lower $NX$ shifts <span class="key">AD left</span>. In the <span class="key">short run</span>, real GDP <span class="key">falls</span>, the price level <span class="key">falls</span>, and unemployment <span class="key">rises</span>. In the <span class="key">long run</span>, with capacity unchanged (ceteris paribus), expected prices and wages adjust downward, SRAS shifts right, and output returns to the same natural level but at a <span class="key">lower price level</span>. So the import-easing policy is contractionary for domestic demand even though it helps indigenous firms access inputs.</p>'
            + '<p><strong>(c) Economics and politics are intertwined.</strong> Political events (the war, the KMB debt, the takeover of Dutch firms) directly shifted both AD and AS, and political stability was a precondition for the recovery to 5% growth by 1955. <span class="key">Lesson:</span> macroeconomic outcomes cannot be separated from political stability and credible policy; sound institutions and peace are foundations for sustained growth.</p>',
          id: '<div class="note">(kunci esai resmi tidak disediakan — jawaban model memakai AD–AS Mankiw standar)</div>'
            + '<p><strong>(a) Penghancuran kapasitas — guncangan penawaran negatif.</strong> Kerusakan berat sarana produksi menurunkan kapasitas riil ekonomi. <span class="key">SRAS dan LRAS sama-sama bergeser ke kiri</span>. Dalam <span class="key">jangka pendek</span> ekonomi bergerak naik di kurva AD: PDB riil <span class="key">turun</span>, tingkat harga <span class="key">naik</span>, dan pengangguran <span class="key">naik</span> (stagflasi). Dalam <span class="key">jangka panjang</span>, karena kehilangan kapasitas bersifat riil, output alami permanen lebih rendah; ekonomi menetap pada <span class="key">PDB potensial lebih rendah dan tingkat harga lebih tinggi</span>.</p>'
            + '<p><strong>(b) Mempermudah impor — kebocoran sisi permintaan.</strong> Impor lebih mudah menaikkan $M$, sehingga ekspor neto $NX = X - M$ <span class="key">turun</span>. $NX$ turun menggeser <span class="key">AD ke kiri</span>. Dalam <span class="key">jangka pendek</span>, PDB riil <span class="key">turun</span>, tingkat harga <span class="key">turun</span>, dan pengangguran <span class="key">naik</span>. Dalam <span class="key">jangka panjang</span>, dengan kapasitas tetap (ceteris paribus), ekspektasi harga dan upah menyesuaikan turun, SRAS bergeser ke kanan, dan output kembali ke level alami yang sama tetapi pada <span class="key">tingkat harga lebih rendah</span>. Jadi kebijakan kemudahan impor bersifat kontraktif bagi permintaan domestik meski membantu pengusaha pribumi mengakses input.</p>'
            + '<p><strong>(c) Ekonomi dan politik saling terjalin.</strong> Peristiwa politik (perang, utang KMB, pengambilalihan perusahaan Belanda) langsung menggeser AD dan AS, dan stabilitas politik menjadi prasyarat pemulihan ke pertumbuhan 5% pada 1955. <span class="key">Pelajaran:</span> hasil makroekonomi tak bisa dipisahkan dari stabilitas politik dan kebijakan yang kredibel; institusi yang sehat dan perdamaian adalah fondasi pertumbuhan berkelanjutan.</p>'
        },
        aChart: { panels: [
          { title: '(a) War damage: SRAS+LRAS left ⇒ P↑, Y↓', w: 380, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD' },
              { id: 'S1', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS₁' },
              { id: 'S2', kind: 'line', p1: [1, 3.5], p2: [7, 9.5], color: '#0e8fb8', label: 'SRAS₂', dash: true },
              { id: 'L1', kind: 'vline', x: 6, color: '#444', label: 'LRAS₁' },
              { id: 'L2', kind: 'vline', x: 4, color: '#444', label: 'LRAS₂', dash: true } ],
            points: [ { on: ['AD', 'S1'], label: 'A', dot: true, guideY: 'P₁', guideX: 'Y₁' },
              { on: ['AD', 'S2'], label: 'B', dot: true, guideY: 'P₂' } ],
            shifts: [ { from: 'S1', to: 'S2' }, { from: 'L1', to: 'L2' } ] },
          { title: '(b) Easier imports: AD left ⇒ P↓, Y↓ (SR)', w: 380, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD1', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [1, 6], p2: [7, 1], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 6, color: '#444', label: 'LRAS' } ],
            points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true, guideY: 'P₁', guideX: 'Y₁' },
              { on: ['AD2', 'SRAS'], label: 'B', dot: true, guideY: 'P₂', guideX: 'Y₂' } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] }
        ] } },

      { n: 3,
        q: {
          en: '<p>Suppose in 2019 the economy of Wonderland was in long-run equilibrium. Then, due to the Covid-19 pandemic, businesses and consumers became pessimistic and Wonderland could only produce output $400 billion below its natural output in 2020.</p>'
            + '<p><strong>(a)</strong> Using the AD–AS model, draw Wonderland\'s short-run equilibrium after the pandemic. Explain what happens to real GDP, the price level and unemployment. <span class="note">[6 pts]</span></p>'
            + '<p><strong>(b)</strong> The newly elected Prime Minister is designing fiscal policy to close the gap. The marginal propensity to consume (MPC) in Wonderland is 0.9. How large an increase in government spending is needed to offset the fall in real GDP if: <strong>(i)</strong> there is no crowding-out effect? <span class="note">[3 pts]</span> <strong>(ii)</strong> there is a crowding-out effect equal to half the change in Y in (i)? <span class="note">[3 pts]</span></p>'
            + '<p><strong>(c)</strong> What can Wonderland\'s central bank do to support the government\'s output-stabilisation effort? Explain. <span class="note">[3 pts]</span></p>',
          id: '<p>Misalkan pada 2019 perekonomian Wonderland berada dalam keseimbangan jangka panjang. Kemudian, akibat pandemi Covid-19, bisnis dan konsumen menjadi pesimis dan Wonderland hanya mampu menghasilkan output $400 miliar lebih sedikit dibanding output naturalnya pada 2020.</p>'
            + '<p><strong>(a)</strong> Dengan model AD–AS, gambarkan keseimbangan jangka pendek Wonderland setelah pandemi. Jelaskan apa yang terjadi pada PDB riil, tingkat harga, dan pengangguran. <span class="note">[6 poin]</span></p>'
            + '<p><strong>(b)</strong> Perdana Menteri yang baru terpilih merancang kebijakan fiskal untuk menutup gap. MPC di Wonderland adalah 0,9. Berapa peningkatan pengeluaran pemerintah yang dibutuhkan untuk mengimbangi penurunan PDB riil, jika: <strong>(i)</strong> tidak ada efek crowding out? <span class="note">[3 poin]</span> <strong>(ii)</strong> ada efek crowding-out sebesar setengah dari perubahan Y pada (i)? <span class="note">[3 poin]</span></p>'
            + '<p><strong>(c)</strong> Apa yang bisa dilakukan bank sentral Wonderland untuk mendukung upaya stabilisasi output oleh pemerintah? Jelaskan. <span class="note">[3 poin]</span></p>'
        },
        answer: {
          en: '<div class="note">(official essay key not provided — model answer using standard Mankiw AD–AS + multipliers)</div>'
            + '<p><strong>(a) Pessimism — a negative demand shock.</strong> Pessimistic firms and households cut investment and consumption, so <span class="key">AD shifts left</span>. The economy moves down the SRAS curve to a short-run equilibrium below potential: real GDP <span class="key">falls</span> ($400B below natural), the price level <span class="key">falls</span>, and unemployment <span class="key">rises</span> above the natural rate (a recessionary gap).</p>'
            + '<p><strong>(b-i) No crowding out.</strong> The government-spending multiplier is</p>'
            + '<div class="formula">$\\text{multiplier} = \\dfrac{1}{1-MPC} = \\dfrac{1}{1-0.9} = \\dfrac{1}{0.1} = 10$</div>'
            + '<div class="formula">$\\Delta G = \\dfrac{\\Delta Y}{\\text{multiplier}} = \\dfrac{400}{10} = $ <span class="key">$\\$40$ billion</span></div>'
            + '<p><strong>(b-ii) Crowding out = half the change in Y in (i).</strong> The crowding-out effect cancels $\\tfrac12 \\times 400 = 200$ of the spending\'s impact. To still net the full $400B, the spending must generate $400 + 200 = 600$ of gross AD effect:</p>'
            + '<div class="formula">$\\Delta G = \\dfrac{400 + 200}{10} = \\dfrac{600}{10} = $ <span class="key">$\\$60$ billion</span></div>'
            + '<p>So with crowding out the required spending rises from $40B to <span class="key">$60B</span>.</p>'
            + '<p><strong>(c) Supporting monetary policy.</strong> The central bank can run <span class="key">expansionary monetary policy</span> — buy government bonds (open-market purchase), cut the discount rate, or lower required reserves. This raises the money supply, lowers the interest rate and stimulates investment — and, by holding $r$ down, it <span class="key">prevents the crowding-out</span> in (b-ii), making the fiscal expansion more effective.</p>',
          id: '<div class="note">(kunci esai resmi tidak disediakan — jawaban model memakai AD–AS + pengganda Mankiw standar)</div>'
            + '<p><strong>(a) Pesimisme — guncangan permintaan negatif.</strong> Perusahaan dan rumah tangga yang pesimis memangkas investasi dan konsumsi, sehingga <span class="key">AD bergeser ke kiri</span>. Ekonomi bergerak turun di kurva SRAS ke keseimbangan jangka pendek di bawah potensial: PDB riil <span class="key">turun</span> ($400 miliar di bawah natural), tingkat harga <span class="key">turun</span>, dan pengangguran <span class="key">naik</span> di atas tingkat alami (kesenjangan resesi).</p>'
            + '<p><strong>(b-i) Tanpa crowding out.</strong> Pengganda pengeluaran pemerintah adalah</p>'
            + '<div class="formula">$\\text{pengganda} = \\dfrac{1}{1-MPC} = \\dfrac{1}{1-0{,}9} = \\dfrac{1}{0{,}1} = 10$</div>'
            + '<div class="formula">$\\Delta G = \\dfrac{\\Delta Y}{\\text{pengganda}} = \\dfrac{400}{10} = $ <span class="key">$\\$40$ miliar</span></div>'
            + '<p><strong>(b-ii) Crowding out = setengah perubahan Y di (i).</strong> Efek crowding-out membatalkan $\\tfrac12 \\times 400 = 200$ dari dampak belanja. Agar tetap menghasilkan $400 miliar neto, belanja harus menciptakan efek AD bruto $400 + 200 = 600$:</p>'
            + '<div class="formula">$\\Delta G = \\dfrac{400 + 200}{10} = \\dfrac{600}{10} = $ <span class="key">$\\$60$ miliar</span></div>'
            + '<p>Jadi dengan crowding out, belanja yang dibutuhkan naik dari $40 miliar menjadi <span class="key">$60 miliar</span>.</p>'
            + '<p><strong>(c) Kebijakan moneter pendukung.</strong> Bank sentral dapat menjalankan <span class="key">kebijakan moneter ekspansif</span> — membeli obligasi pemerintah (operasi pasar terbuka), menurunkan tingkat diskonto, atau menurunkan cadangan wajib. Ini menaikkan uang beredar, menurunkan suku bunga, dan menstimulasi investasi — serta, dengan menahan $r$ tetap rendah, <span class="key">mencegah crowding-out</span> di (b-ii) sehingga ekspansi fiskal lebih efektif.</p>'
        },
        aChart: { panels: [
          { title: '(a) Pessimism: AD left ⇒ recessionary gap', w: 420, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD1', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [1, 6], p2: [7, 1], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 6, color: '#444', label: 'LRAS = Yₙ' } ],
            points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true, guideY: 'P₁', guideX: 'Yₙ' },
              { on: ['AD2', 'SRAS'], label: 'B', dot: true, guideY: 'P₂', guideX: 'Y₂' } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] }
        ] } },

      { n: 4,
        q: {
          en: '<p><strong>(a)</strong> An economy has low aggregate demand (AD) of USD 2,000 trillion, achieved with an unemployment rate of 6% and an aggregate price level of 104. A prominent economist estimates that the government could actually push the economy to USD 2,200 trillion of output and lower unemployment to 4%, but warns that the aggregate price level would also rise to 106. Use this information to explain the interaction between the AD and aggregate-supply (AS) curves and the short-run Phillips curve (SRPC). Support your answer with relevant diagrams. <span class="note">[5 pts]</span></p>'
            + '<p><strong>(b)</strong> Milton Friedman and Edmund Phelps concluded that "policymakers face a trade-off between inflation and unemployment that is only temporary," because there is no relationship between inflation and unemployment in the long run. Explain what they meant, using the AD–AS model and the short-run (SRPC) and long-run (LRPC) Phillips curves. Also explain what happens in the long run if policymakers pursue an expansionary monetary policy. <span class="note">[5 pts]</span></p>'
            + '<p><strong>(c)</strong> The central bank decides to reduce inflation. Using the AD–AS and Phillips curves, explain the effect of this decision on output, employment and the price level, in both the short run and the long run. <span class="note">[5 pts]</span></p>',
          id: '<p><strong>(a)</strong> Suatu perekonomian mengalami permintaan agregat (AD) rendah sebesar USD 2.000 triliun, yang dicapai dengan tingkat pengangguran 6% dan tingkat harga agregat 104. Seorang ekonom ternama memperkirakan pemerintah sebenarnya dapat mendorong perekonomian mencapai output USD 2.200 triliun dan menurunkan pengangguran menjadi 4%. Namun, ekonom tersebut mengingatkan tingkat harga agregat diperkirakan juga akan meningkat menjadi 106. Gunakan informasi di atas untuk menjelaskan interaksi antara kurva AD dan penawaran agregat (AS) dengan kurva Phillips jangka pendek (SRPC). Lengkapi jawaban dengan diagram yang relevan. <span class="note">[5 poin]</span></p>'
            + '<p><strong>(b)</strong> Milton Friedman dan Edmund Phelps menyimpulkan bahwa "para pengambil kebijakan akan menghadapi trade-off antara inflasi dan pengangguran yang hanya bersifat sementara", karena tidak ada hubungan antara inflasi dan pengangguran dalam jangka panjang. Jelaskan maksud pernyataan tersebut dengan model AD–AS serta kurva Phillips jangka pendek (SRPC) dan jangka panjang (LRPC). Jelaskan pula apa yang terjadi dalam jangka panjang apabila para pengambil kebijakan menempuh kebijakan moneter ekspansif. <span class="note">[5 poin]</span></p>'
            + '<p><strong>(c)</strong> Bank Sentral memutuskan untuk menurunkan inflasi. Dengan kurva AD–AS dan kurva Phillips, jelaskan dampak keputusan tersebut terhadap output, employment, dan tingkat harga, baik pada jangka pendek maupun jangka panjang. <span class="note">[5 poin]</span></p>'
        },
        answer: {
          en: '<div class="note">(official essay key not provided — model answer using standard Mankiw AD–AS + Phillips curve)</div>'
            + '<p><strong>(a) AD–AS and SRPC are two views of the same event.</strong> Expansionary policy shifts <span class="key">AD right</span> (from USD 2,000T to 2,200T). The economy moves up the upward-sloping SRAS: output <span class="key">rises</span> ($Y$: 2,000→2,200) and the price level <span class="key">rises</span> ($P$: 104→106), so inflation is positive. The very same move appears on the <span class="key">short-run Phillips curve</span> as a slide down it: higher inflation pairs with <span class="key">lower unemployment</span> ($u$: 6%→4%). AD–AS (in $P$–$Y$ space) and the SRPC (in $\\pi$–$u$ space) are mirror images — more demand buys lower unemployment only at the cost of higher inflation.</p>'
            + '<p><strong>(b) The trade-off is only temporary.</strong> Friedman and Phelps argued the SRPC trade-off holds only while inflation is <span class="key">unexpected</span>. Push unemployment below its natural rate with expansionary money and inflation rises; but workers and firms eventually <span class="key">revise their inflation expectations upward</span>, the SRPC shifts <span class="key">up</span>, and unemployment returns to the <span class="key">natural rate</span>. In $P$–$Y$ space, SRAS shifts left until $Y$ is back at potential. The <span class="key">long-run Phillips curve (LRPC) is vertical</span> at the natural rate of unemployment: in the long run there is <span class="key">no trade-off</span> — expansionary money buys only <span class="key">higher inflation with unchanged unemployment and output</span>.</p>'
            + '<p><strong>(c) Disinflation.</strong> To cut inflation the central bank runs <span class="key">contractionary</span> policy: <span class="key">AD shifts left</span>. <em>Short run:</em> the economy slides down the SRPC — inflation <span class="key">falls</span>, but output <span class="key">falls</span>, employment <span class="key">falls</span> and unemployment <span class="key">rises</span> above natural (the price level / inflation eases). This output loss is the <span class="key">sacrifice ratio</span> in action. <em>Long run:</em> as expected inflation adjusts downward, the SRPC shifts <span class="key">down</span> and SRAS shifts <span class="key">right</span>; output and employment return to their <span class="key">natural levels</span>, with <span class="key">lower inflation</span> and a lower price level than the disinflation path. Money is neutral in the long run.</p>',
          id: '<div class="note">(kunci esai resmi tidak disediakan — jawaban model memakai AD–AS + kurva Phillips Mankiw standar)</div>'
            + '<p><strong>(a) AD–AS dan SRPC adalah dua sisi peristiwa yang sama.</strong> Kebijakan ekspansif menggeser <span class="key">AD ke kanan</span> (dari USD 2.000T ke 2.200T). Ekonomi bergerak naik di SRAS yang miring ke atas: output <span class="key">naik</span> ($Y$: 2.000→2.200) dan tingkat harga <span class="key">naik</span> ($P$: 104→106), jadi inflasi positif. Gerakan yang sama persis muncul di <span class="key">kurva Phillips jangka pendek</span> sebagai pergeseran menuruninya: inflasi lebih tinggi berpasangan dengan <span class="key">pengangguran lebih rendah</span> ($u$: 6%→4%). AD–AS (di ruang $P$–$Y$) dan SRPC (di ruang $\\pi$–$u$) adalah cermin satu sama lain — permintaan lebih tinggi menurunkan pengangguran hanya dengan ongkos inflasi lebih tinggi.</p>'
            + '<p><strong>(b) Trade-off hanya bersifat sementara.</strong> Friedman dan Phelps berpendapat trade-off SRPC berlaku hanya selama inflasi <span class="key">tak terduga</span>. Tekan pengangguran di bawah tingkat alami dengan uang ekspansif maka inflasi naik; tetapi pekerja dan perusahaan akhirnya <span class="key">merevisi ekspektasi inflasi ke atas</span>, SRPC bergeser <span class="key">naik</span>, dan pengangguran kembali ke <span class="key">tingkat alami</span>. Di ruang $P$–$Y$, SRAS bergeser kiri hingga $Y$ kembali ke potensial. <span class="key">Kurva Phillips jangka panjang (LRPC) vertikal</span> pada tingkat pengangguran alami: dalam jangka panjang <span class="key">tidak ada trade-off</span> — uang ekspansif hanya menghasilkan <span class="key">inflasi lebih tinggi dengan pengangguran dan output yang tak berubah</span>.</p>'
            + '<p><strong>(c) Disinflasi.</strong> Untuk memangkas inflasi, bank sentral menjalankan kebijakan <span class="key">kontraktif</span>: <span class="key">AD bergeser ke kiri</span>. <em>Jangka pendek:</em> ekonomi menuruni SRPC — inflasi <span class="key">turun</span>, tetapi output <span class="key">turun</span>, employment <span class="key">turun</span>, dan pengangguran <span class="key">naik</span> di atas alami (tingkat harga / inflasi mereda). Kehilangan output inilah <span class="key">sacrifice ratio</span> dalam praktik. <em>Jangka panjang:</em> saat ekspektasi inflasi menyesuaikan turun, SRPC bergeser <span class="key">turun</span> dan SRAS bergeser <span class="key">kanan</span>; output dan employment kembali ke <span class="key">level alaminya</span>, dengan <span class="key">inflasi lebih rendah</span> dan tingkat harga lebih rendah daripada jalur disinflasi. Uang netral dalam jangka panjang.</p>'
        },
        aChart: { panels: [
          { title: '(a) AD right ⇒ P↑, Y↑', w: 360, h: 280, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD1', kind: 'line', p1: [1, 7], p2: [8, 1.5], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [2.5, 8.5], p2: [9.5, 3], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 6, color: '#444', label: 'LRAS' } ],
            points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true, guideY: 'P=104', guideX: 'Y=2000' },
              { on: ['AD2', 'SRAS'], label: 'B', dot: true, guideY: 'P=106', guideX: 'Y=2200' } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] },
          { title: '(a) ... = slide down the SRPC', w: 360, h: 280, x: { min: 0, max: 10, label: 'u (%)' }, y: { min: 0, max: 10, label: 'π' },
            curves: [ { id: 'SRPC', kind: 'line', p1: [1, 8], p2: [9, 1.5], color: '#c0392b', label: 'SRPC' },
              { id: 'LRPC', kind: 'vline', x: 5, color: '#444', label: 'LRPC (uₙ)' } ],
            points: [ { onCurve: 'SRPC', atX: 6.5, label: 'A', dot: true, guideY: 'π(low)', guideX: 'u=6%' },
              { onCurve: 'SRPC', atX: 3.5, label: 'B', dot: true, guideY: 'π(high)', guideX: 'u=4%' } ] }
        ] } }
    ]}
  ]
};
