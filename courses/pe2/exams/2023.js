/* UAS PE2 — Genap 2022/2023 (Senin, 5 Juni 2023). Bilingual EN+ID.
   Faithful transcription of exam + answer key (with worked essay solutions & graphs). */
window.PE2_EXAMS = window.PE2_EXAMS || {};
window.PE2_EXAMS['2023'] = {
  year: '2023',
  label: { en: 'UAS 2023', id: 'UAS 2023' },
  note: {
    en: 'Final Exam, Even Semester 2022/2023. Pengantar Ekonomi 2 (ECEU 600203). 20 multiple-choice (1.5 pts each) + 7 essay (max 10 pts each). Closed book; scientific calculator allowed.',
    id: 'Ujian Akhir Semester, Semester Genap 2022/2023. Pengantar Ekonomi 2 (ECEU 600203). 20 pilihan ganda (1,5 poin/soal) + 7 esai (maks 10 poin/soal). Closed book; boleh pakai kalkulator saintifik.'
  },
  sections: [
    { kind: 'mcq', label: { en: 'Multiple choice', id: 'Pilihan ganda' }, questions: [

      { n: 1,
        q: { en: 'In an open-economy model, the demand for loanable funds comes from ….',
             id: 'Dalam model ekonomi terbuka, permintaan dana pinjaman (demand for loanable funds) berasal dari ….' },
        options: {
          en: ['a. national saving', 'b. foreign saving', 'c. net exports', 'd. the sum of domestic investment and net foreign investment (NCO)'],
          id: ['a. tabungan nasional', 'b. simpanan luar negeri', 'c. ekspor neto (net export)', 'd. jumlah investasi domestik dan investasi asing netto (net foreign investment)']
        },
        answer: { en: '<b>d.</b> domestic investment + net foreign investment (NCO).',
                  id: '<b>d.</b> investasi domestik + investasi asing netto (NCO).' },
        working: {
          en: '<p>In the open-economy loanable-funds market, <span class="key">S = I + NCO</span>: saving is the supply side, while the <i>demand</i> for funds is the sum of domestic investment $I$ and net capital outflow $NCO$ (funds used to buy foreign assets).</p>',
          id: '<p>Pada pasar dana pinjaman ekonomi terbuka, <span class="key">S = I + NCO</span>: tabungan adalah sisi penawaran, sedangkan <i>permintaan</i> dana adalah jumlah investasi domestik $I$ dan arus modal keluar neto $NCO$ (dana untuk membeli aset asing).</p>'
        } },

      { n: 2,
        q: { en: 'A real appreciation of an economy’s currency causes ….',
             id: 'Apresiasi nilai tukar mata uang riil pada sebuah perekonomian menyebabkan ….' },
        options: {
          en: ['a. imported goods relatively more expensive than domestic goods, and lowers the quantity of domestic currency supplied',
               'b. imported goods relatively more expensive than domestic goods, and lowers the quantity of domestic currency demanded',
               'c. domestic goods relatively more expensive than imported goods, and lowers the quantity of domestic currency demanded',
               'd. domestic goods relatively more expensive than imported goods, and lowers the quantity of domestic currency supplied'],
          id: ['a. harga barang impor relatif lebih mahal daripada barang dalam negeri dan menurunkan kuantitas penawaran mata uang domestik',
               'b. harga barang impor relatif lebih mahal daripada barang dalam negeri dan menurunkan kuantitas permintaan mata uang domestik',
               'c. harga barang dalam negeri relatif lebih mahal daripada barang impor dan menurunkan kuantitas permintaan mata uang domestik',
               'd. harga barang dalam negeri relatif lebih mahal daripada barang impor dan menurunkan kuantitas penawaran mata uang domestik']
        },
        answer: { en: '<b>c.</b> domestic goods become relatively dearer, lowering the quantity of domestic currency demanded.',
                  id: '<b>c.</b> barang dalam negeri jadi relatif lebih mahal, menurunkan kuantitas permintaan mata uang domestik.' },
        working: {
          en: '<p>A real appreciation makes home goods relatively more expensive than foreign goods, so foreigners (and locals) want fewer home goods → fewer rupiah demanded. The demand for domestic currency falls.</p>',
          id: '<p>Apresiasi riil membuat barang domestik relatif lebih mahal dari barang asing, sehingga permintaan barang domestik turun → permintaan rupiah berkurang.</p>'
        } },

      { n: 3,
        q: { en: 'The theory of purchasing-power parity (PPP) states that ….',
             id: 'Teori paritas daya beli (purchasing-power parity) menyatakan bahwa ….' },
        options: {
          en: ['a. a unit of any given currency should be able to buy the same quantity of goods in all countries',
               'b. the poor’s ability to buy differs from the rich’s',
               'c. prices of goods and services are the same in all countries',
               'd. an appreciation of the exchange rate lowers exports'],
          id: ['a. satu unit mata uang tertentu harus dapat membeli jumlah barang yang sama di semua negara',
               'b. kemampuan orang miskin untuk membeli tidak sama dengan orang kaya',
               'c. harga barang dan jasa sama di semua negara',
               'd. apresiasi nilai tukar akan menurunkan ekspor']
        },
        answer: { en: '<b>a.</b> one unit of a currency should buy the same quantity of goods in every country.',
                  id: '<b>a.</b> satu unit mata uang harus dapat membeli jumlah barang yang sama di semua negara.' },
        working: {
          en: '<p>PPP is the law of one price applied across countries: a currency must have the same real <i>purchasing power</i> everywhere. (c) is too strong — PPP equalizes the basket’s purchasing power, not every individual price.</p>',
          id: '<p>PPP adalah hukum satu harga antarnegara: daya beli riil mata uang harus sama di mana saja. (c) terlalu kuat — PPP menyamakan daya beli keranjang barang, bukan setiap harga.</p>'
        } },

      { n: 4,
        q: { en: 'A condition that causes a real depreciation of the exchange rate is ….',
             id: 'Kondisi yang menyebabkan terjadinya depresiasi nilai tukar riil adalah ….' },
        options: {
          en: ['a. a rise in the budget deficit', 'b. capital flight abroad', 'c. an import-restriction policy', 'd. monetary contraction'],
          id: ['a. kenaikan defisit anggaran', 'b. pelarian modal ke luar negeri', 'c. kebijakan pembatasan impor', 'd. kebijakan kontraksi moneter']
        },
        answer: { en: '<b>b.</b> capital flight abroad.',
                  id: '<b>b.</b> pelarian modal ke luar negeri.' },
        working: {
          en: '<p>Capital flight raises <span class="key">$NCO$</span> → more domestic currency supplied on the FX market → the currency <span class="key">depreciates</span>. A budget deficit (a) or import restriction (c) tends to <i>appreciate</i> the RER.</p>',
          id: '<p>Pelarian modal menaikkan <span class="key">$NCO$</span> → penawaran mata uang domestik naik di pasar valas → mata uang <span class="key">terdepresiasi</span>. Defisit (a) atau pembatasan impor (c) cenderung <i>mengapresiasi</i> RER.</p>'
        } },

      { n: 5,
        q: { en: 'The real exchange rate (in the long run) is NOT affected by ….',
             id: 'Nilai tukar riil (dalam jangka panjang) tidak dipengaruhi oleh ….' },
        options: {
          en: ['a. net exports', 'b. the money supply', 'c. national saving and/or investment', 'd. net capital outflow'],
          id: ['a. ekspor neto', 'b. jumlah uang beredar', 'c. nilai tabungan dan/atau investasi nasional', 'd. arus modal keluar neto']
        },
        answer: { en: '<b>b.</b> the money supply.',
                  id: '<b>b.</b> jumlah uang beredar.' },
        working: {
          en: '<p>The <i>real</i> exchange rate is a relative price set by real factors (saving, investment, NCO, net exports). Money is neutral in the long run — it affects the <i>nominal</i> exchange rate and price level, not the RER.</p>',
          id: '<p>Nilai tukar <i>riil</i> adalah harga relatif yang ditentukan faktor riil (tabungan, investasi, NCO, ekspor neto). Uang bersifat netral jangka panjang — memengaruhi nilai tukar <i>nominal</i> dan tingkat harga, bukan RER.</p>'
        } },

      { n: 6,
        q: { en: 'Which statement is correct?',
             id: 'Manakah pernyataan berikut yang tepat?' },
        options: {
          en: ['a. A real appreciation of the rupiah vs USD increases the demand for rupiah.',
               'b. A real appreciation of the rupiah vs USD increases the supply of rupiah.',
               'c. A domestic real interest rate relatively higher than the foreign rate lowers domestic investment and net capital outflow.',
               'd. The long-run equilibrium real interest rate is set by the central bank’s monetary policy (expansion/contraction).'],
          id: ['a. Apresiasi nilai tukar riil rupiah terhadap dolar AS meningkatkan permintaan rupiah.',
               'b. Apresiasi nilai tukar riil rupiah terhadap dolar AS meningkatkan penawaran rupiah.',
               'c. Suku bunga riil domestik yang relatif lebih tinggi daripada suku bunga riil asing menyebabkan turunnya investasi domestik dan arus modal keluar neto.',
               'd. Ekuilibrium suku bunga riil dalam jangka panjang ditetapkan oleh kebijakan moneter (ekspansi/kontraksi) bank sentral.']
        },
        answer: { en: '<b>c.</b> a higher domestic real rate lowers both domestic investment and NCO.',
                  id: '<b>c.</b> suku bunga riil domestik yang lebih tinggi menurunkan investasi domestik dan NCO.' },
        working: {
          en: '<p>A higher domestic real interest rate discourages investment $I$ and makes domestic assets more attractive than foreign ones, so $NCO$ falls. (a)/(b) reverse appreciation logic; (d) is wrong — the long-run real rate is set by real saving/investment, not monetary policy.</p>',
          id: '<p>Suku bunga riil domestik yang lebih tinggi menekan investasi $I$ dan membuat aset domestik lebih menarik dari aset asing, sehingga $NCO$ turun. (a)/(b) salah logika apresiasi; (d) salah — suku bunga riil jangka panjang ditentukan tabungan/investasi riil, bukan kebijakan moneter.</p>'
        } },

      { n: 7,
        q: { en: 'Germany has officially entered recession, shown by economic contraction in Q4 2022 and Q1 2023. During a recession, taxes tend to ….',
             id: 'Jerman telah resmi memasuki resesi. Hal ini ditunjukkan dengan kontraksi ekonomi pada kuartal terakhir 2022 dan kuartal pertama 2023. Selama resesi, pajak cenderung ….' },
        options: {
          en: ['a. fall, thus increasing aggregate demand', 'b. fall, thus decreasing aggregate demand', 'c. rise, thus increasing aggregate demand', 'd. rise, thus decreasing aggregate demand'],
          id: ['a. turun, sehingga meningkatkan permintaan agregat', 'b. turun, sehingga menurunkan permintaan agregat', 'c. naik, sehingga meningkatkan permintaan agregat', 'd. naik, sehingga menurunkan permintaan agregat']
        },
        answer: { en: '<b>a.</b> fall, increasing aggregate demand.',
                  id: '<b>a.</b> turun, sehingga meningkatkan permintaan agregat.' },
        working: {
          en: '<p>Taxes are <span class="key">automatic stabilizers</span>: as incomes fall in a recession, tax collections fall, leaving households more disposable income → consumption and $AD$ are propped up.</p>',
          id: '<p>Pajak adalah <span class="key">stabilisator otomatis</span>: saat pendapatan turun dalam resesi, penerimaan pajak turun, menyisakan lebih banyak pendapatan disposable → konsumsi dan $AD$ tertopang.</p>'
        } },

      { n: 8,
        q: { en: 'See the figure below. If prices rise, the aggregate-demand curve (AD) ….',
             id: 'Perhatikan gambar di bawah ini. Jika harga-harga naik, kurva permintaan agregat (AD) ….' },
        options: {
          en: ['a. shifts from AD1 to AD3', 'b. shifts from AD1 to AD2', 'c. shifts from AD1 to AD3 then back to AD2', 'd. does not shift'],
          id: ['a. bergeser dari AD1 ke AD3', 'b. bergeser dari AD1 ke AD2', 'c. bergeser dari AD1 ke AD3 kemudian kembali ke AD2', 'd. tidak bergeser']
        },
        qChart: { panels: [{ title: 'AD1 / AD2 / AD3', w: 420, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
          curves: [
            { id: 'AD1', kind: 'line', p1: [1, 6], p2: [7, 0.5], color: '#c0392b', label: 'AD1' },
            { id: 'AD2', kind: 'line', p1: [3, 8], p2: [9, 2.5], color: '#c0392b', label: 'AD2', dash: true },
            { id: 'AD3', kind: 'line', p1: [0.5, 4], p2: [5.5, 0], color: '#c0392b', label: 'AD3', dash: true } ] }] },
        answer: { en: '<b>d.</b> it does not shift.',
                  id: '<b>d.</b> tidak bergeser.' },
        working: {
          en: '<p>A change in the price level is a <span class="key">movement along</span> a fixed $AD$ curve, not a shift. Shifting $AD$ requires a change in spending at a given price (consumption, investment, government, net exports).</p>',
          id: '<p>Perubahan tingkat harga adalah <span class="key">pergerakan sepanjang</span> kurva $AD$ yang tetap, bukan pergeseran. Pergeseran $AD$ butuh perubahan pengeluaran pada harga tertentu (konsumsi, investasi, pemerintah, ekspor neto).</p>'
        } },

      { n: 9,
        q: { en: 'One reason the short-run aggregate-supply curve has a positive slope is ….',
             id: 'Salah satu alasan kurva penawaran jangka pendek memiliki kemiringan (slope) positif adalah ….' },
        options: {
          en: ['a. when the price level falls, real wages adjust slowly, so output produced falls',
               'b. when the price level falls, real wages adjust slowly, so output produced rises',
               'c. when the price level falls, nominal wages adjust slowly, so output produced falls',
               'd. when the price level falls, nominal wages adjust slowly, so output produced rises'],
          id: ['a. pada saat tingkat harga turun, upah riil lambat menyesuaikan, sehingga output yang diproduksi akan turun',
               'b. pada saat tingkat harga turun, upah riil lambat menyesuaikan, sehingga output yang diproduksi akan naik',
               'c. pada saat tingkat harga turun, upah nominal lambat menyesuaikan, sehingga output yang diproduksi akan turun',
               'd. pada saat tingkat harga turun, upah nominal lambat menyesuaikan, sehingga output yang diproduksi akan naik']
        },
        answer: { en: '<b>c.</b> sticky nominal wages: when $P$ falls, output falls.',
                  id: '<b>c.</b> upah nominal kaku: saat $P$ turun, output turun.' },
        working: {
          en: '<p>The <span class="key">sticky-wage theory</span>: nominal wages adjust slowly. When $P$ falls but the nominal wage is fixed, the <i>real</i> wage rises, labor becomes costly, firms hire less and cut output → SRAS slopes up.</p>',
          id: '<p><span class="key">Teori upah kaku</span>: upah nominal lambat menyesuaikan. Saat $P$ turun namun upah nominal tetap, upah <i>riil</i> naik, tenaga kerja jadi mahal, perusahaan mengurangi produksi → SRAS miring positif.</p>'
        } },

      { n: 10,
        q: { en: 'In the long run, the aggregate-supply curve is vertical and the price level does not affect real GDP, because ….',
             id: 'Dalam jangka panjang, kurva penawaran agregat berbentuk vertikal dan tingkat harga tidak memengaruhi PDB riil. Hal ini disebabkan karena ….' },
        options: {
          en: ['a. the actual price level equals the expected price level',
               'b. the actual price level does not affect price expectations',
               'c. the actual price level is higher than the expected price level',
               'd. the price level is at the natural rate of output'],
          id: ['a. tingkat harga aktual sama dengan ekspektasi harga',
               'b. tingkat harga aktual tidak mempengaruhi ekspektasi harga',
               'c. tingkat harga aktual lebih tinggi daripada ekspektasi harga',
               'd. tingkat harga berada pada tingkat output natural (natural rate of output)']
        },
        answer: { en: '<b>a.</b> actual price level equals the expected price level.',
                  id: '<b>a.</b> tingkat harga aktual sama dengan ekspektasi harga.' },
        working: {
          en: '<p>In the long run, expectations have fully adjusted so $P = P^e$. Misperceptions disappear and output equals its natural level regardless of $P$ → <span class="key">LRAS is vertical</span>.</p>',
          id: '<p>Dalam jangka panjang, ekspektasi telah menyesuaikan penuh sehingga $P = P^e$. Misperseksi hilang dan output sama dengan tingkat naturalnya berapa pun $P$ → <span class="key">LRAS vertikal</span>.</p>'
        } },

      { n: 11,
        q: { en: 'A rise in world oil prices raises firms’ production costs in many countries. This oil-price increase will ….',
             id: 'Kenaikan harga minyak dunia meningkatkan biaya produksi perusahaan di banyak negara. Peningkatan harga minyak ini akan ….' },
        options: {
          en: ['a. shift the short-run supply curve right and reduce the quantity of goods produced',
               'b. shift the short-run supply curve left and reduce the quantity of goods produced',
               'c. shift the short-run supply curve right and raise the quantity of goods produced',
               'd. shift the short-run supply curve left and raise the quantity of goods produced'],
          id: ['a. menggeser kurva penawaran jangka pendek ke kanan dan mengurangi jumlah barang dan jasa yang diproduksi',
               'b. menggeser kurva penawaran jangka pendek ke kiri dan mengurangi jumlah barang dan jasa yang diproduksi',
               'c. menggeser kurva penawaran jangka pendek ke kanan dan meningkatkan jumlah barang dan jasa yang diproduksi',
               'd. menggeser kurva penawaran jangka pendek ke kiri dan meningkatkan jumlah barang dan jasa yang diproduksi']
        },
        answer: { en: '<b>b.</b> shift SRAS left and reduce output produced.',
                  id: '<b>b.</b> menggeser SRAS ke kiri dan mengurangi output.' },
        working: {
          en: '<p>Higher input costs are an <span class="key">adverse supply shock</span>: SRAS shifts left, raising $P$ and lowering $Y$ (stagflation).</p>',
          id: '<p>Kenaikan biaya input adalah <span class="key">guncangan penawaran negatif</span>: SRAS bergeser ke kiri, menaikkan $P$ dan menurunkan $Y$ (stagflasi).</p>'
        } },

      { n: 12,
        q: { en: 'The early impact of the COVID-19 pandemic in Indonesia from 2020 caused a shift of … and ….',
             id: 'Dampak awal pandemi covid-19 yang terjadi di Indonesia sejak tahun 2020 menyebabkan pergeseran … dan ….' },
        options: {
          en: ['a. the AD curve left; output expansion', 'b. the AD curve right; output contraction', 'c. the AS curve right; output expansion', 'd. the AS curve left; output contraction'],
          id: ['a. kurva AD ke kiri; ekspansi output', 'b. kurva AD ke kanan; kontraksi output', 'c. kurva AS ke kanan; ekspansi output', 'd. kurva AS ke kiri; kontraksi output']
        },
        answer: { en: '<b>d.</b> the AS curve left; output contraction.',
                  id: '<b>d.</b> kurva AS ke kiri; kontraksi output.' },
        working: {
          en: '<p>Mobility restrictions and disrupted production were a negative supply shock → <span class="key">SRAS shifts left</span>, contracting output. (Per the key, the dominant initial shock was on the supply side.)</p>',
          id: '<p>Pembatasan mobilitas dan terganggunya produksi adalah guncangan penawaran negatif → <span class="key">SRAS bergeser ke kiri</span>, output berkontraksi. (Sesuai kunci, guncangan awal yang dominan ada di sisi penawaran.)</p>'
        } },

      { n: 13,
        q: { en: 'Based on the figure, a shift of the short-run aggregate-supply curve from SRAS1 to SRAS2 ….',
             id: 'Berdasarkan grafik, pergeseran kurva penawaran agregat jangka pendek dari SRAS1 ke SRAS2 ….' },
        options: {
          en: ['a. could be caused by the outbreak of war in the Middle East',
               'b. could be caused by a fall in price expectations',
               'c. causes an increase in the unemployment rate',
               'd. causes stagflation'],
          id: ['a. dapat diakibatkan oleh pecahnya perang di Timur Tengah',
               'b. dapat diakibatkan oleh penurunan ekspektasi harga',
               'c. menyebabkan peningkatan tingkat pengangguran',
               'd. menyebabkan stagflasi']
        },
        qChart: { panels: [{ title: 'SRAS1 → SRAS2 (rightward)', w: 420, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
          curves: [
            { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD' },
            { id: 'S1', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS1' },
            { id: 'S2', kind: 'line', p1: [2.5, 1], p2: [10, 6.6], color: '#0e8fb8', label: 'SRAS2', dash: true } ],
          points: [ { on: ['AD', 'S1'], label: 'A', dot: true }, { on: ['AD', 'S2'], label: 'B', dot: true } ],
          shifts: [ { from: 'S1', to: 'S2' } ] }] },
        answer: { en: '<b>b.</b> a fall in price expectations (a rightward SRAS shift).',
                  id: '<b>b.</b> penurunan ekspektasi harga (pergeseran SRAS ke kanan).' },
        working: {
          en: '<p>SRAS1→SRAS2 here is a <span class="key">rightward</span> shift (more output at any $P$). A drop in expected prices does exactly this. War in the Middle East (a) would shift SRAS <i>left</i>; a rightward shift raises output and <i>lowers</i> unemployment, and produces <i>disinflation</i>, not stagflation.</p>',
          id: '<p>SRAS1→SRAS2 di sini adalah pergeseran ke <span class="key">kanan</span> (output lebih banyak pada $P$ mana pun). Penurunan ekspektasi harga melakukan persis ini. Perang di Timur Tengah (a) menggeser SRAS ke <i>kiri</i>; pergeseran ke kanan menaikkan output dan <i>menurunkan</i> pengangguran, serta menghasilkan <i>disinflasi</i>, bukan stagflasi.</p>'
        } },

      { n: 14,
        q: { en: 'The Kingdom of Askard has MPC = 0.75 and a crowding-out effect of Rp6 trillion. A rise in government spending of Rp10 trillion will make the aggregate-demand curve ….',
             id: 'Diketahui MPC Kerajaan Askard adalah 0,75 dan efek crowding-out adalah Rp6 triliun. Peningkatan pengeluaran pemerintah sebesar Rp10 triliun akan menyebabkan kurva permintaan agregat ….' },
        options: {
          en: ['a. shift left and reduce output by Rp34 trillion', 'b. shift left and reduce output by Rp40 trillion', 'c. shift right and raise output by Rp34 trillion', 'd. shift right and raise output by Rp40 trillion'],
          id: ['a. bergeser ke kiri dan mengurangi output sebesar Rp34 triliun', 'b. bergeser ke kiri dan mengurangi output sebesar Rp40 triliun', 'c. bergeser ke kanan dan meningkatkan output sebesar Rp34 triliun', 'd. bergeser ke kanan dan meningkatkan output sebesar Rp40 triliun']
        },
        answer: { en: '<b>c.</b> shift right and raise output by Rp34 trillion.',
                  id: '<b>c.</b> bergeser ke kanan dan meningkatkan output sebesar Rp34 triliun.' },
        working: {
          en: '<div class="formula">$\\text{multiplier}=\\dfrac{1}{1-MPC}=\\dfrac{1}{1-0.75}=4$</div><p>Gross effect $=4\\times \\text{Rp}10\\text{T}=\\text{Rp}40\\text{T}$ rightward. Subtract crowding out: $40-6=\\textbf{Rp}34\\textbf{T}$ net increase in output.</p>',
          id: '<div class="formula">$\\text{pengganda}=\\dfrac{1}{1-MPC}=\\dfrac{1}{1-0.75}=4$</div><p>Efek kotor $=4\\times \\text{Rp}10\\text{T}=\\text{Rp}40\\text{T}$ ke kanan. Kurangi crowding out: $40-6=\\textbf{Rp}34\\textbf{T}$ kenaikan output neto.</p>'
        } },

      { n: 15,
        q: { en: 'Suppose businesses and consumers turn pessimistic about the economy. To keep output stable and limit the impact on the price level and real GDP, the central bank can ….',
             id: 'Misalkan pebisnis dan konsumen menjadi pesimistis terhadap perekonomian. Untuk menjaga output tetap stabil dan mengurangi dampak pada tingkat harga dan PDB riil, bank sentral dapat ….' },
        options: {
          en: ['a. increase the money supply, which will lower interest rates',
               'b. increase the money supply, which will raise interest rates',
               'c. increase the money supply or cut government spending',
               'd. increase the money supply or raise government spending'],
          id: ['a. menambah jumlah uang beredar, yang akan menurunkan suku bunga',
               'b. menambah jumlah uang beredar, yang akan meningkatkan suku bunga',
               'c. menambah jumlah uang beredar atau mengurangi pengeluaran pemerintah',
               'd. menambah jumlah uang beredar atau meningkatkan pengeluaran pemerintah']
        },
        answer: { en: '<b>a.</b> increase the money supply, which lowers interest rates.',
                  id: '<b>a.</b> menambah jumlah uang beredar, yang menurunkan suku bunga.' },
        working: {
          en: '<p>Pessimism shifts $AD$ left. To offset it, the <i>central bank</i> uses <span class="key">expansionary monetary policy</span> — increasing the money supply lowers the interest rate, boosting investment and pushing $AD$ back right. (c)/(d) are fiscal tools, not the central bank’s.</p>',
          id: '<p>Pesimisme menggeser $AD$ ke kiri. Untuk mengimbanginya, <i>bank sentral</i> memakai <span class="key">kebijakan moneter ekspansif</span> — menambah uang beredar menurunkan suku bunga, mendorong investasi dan menggeser $AD$ kembali ke kanan. (c)/(d) adalah alat fiskal, bukan ranah bank sentral.</p>'
        } },

      { n: 16,
        q: { en: 'Per BPS data, the biggest labor-market pressure in Indonesia occurred in August 2020 when unemployment reached 9.77%. A policy that can reduce unemployment in the long run is ….',
             id: 'Berdasarkan data BPS, dari sisi ketenagakerjaan, tekanan terbesar di Indonesia terjadi pada Agustus 2020 ketika angka pengangguran mencapai 9,77%. Kebijakan yang bisa mengurangi tingkat pengangguran dalam jangka panjang adalah ….' },
        options: {
          en: ['a. a cash-for-work programme', 'b. fiscal expansion via the pre-employment card programme', 'c. monetary expansion by increasing the money supply', 'd. labor reform that raises the quality of human resources'],
          id: ['a. program cash for work', 'b. ekspansi fiskal dengan program kartu pra-kerja', 'c. ekspansi moneter dengan menambah jumlah uang beredar', 'd. reformasi ketenagakerjaan dengan peningkatan kualitas sumber daya manusia']
        },
        answer: { en: '<b>d.</b> labor reform raising human-capital quality.',
                  id: '<b>d.</b> reformasi ketenagakerjaan dengan peningkatan kualitas SDM.' },
        working: {
          en: '<p>Demand-side stimulus (a, b, c) only lowers <i>cyclical</i> unemployment temporarily. To cut the <span class="key">natural rate</span> in the long run you must improve the labor market itself — better skills/human capital shift the LRAS/LRPC.</p>',
          id: '<p>Stimulus sisi permintaan (a, b, c) hanya menurunkan pengangguran <i>siklikal</i> sementara. Untuk menurunkan <span class="key">tingkat natural</span> jangka panjang, perbaiki pasar tenaga kerjanya — peningkatan keterampilan/SDM menggeser LRAS/LRPC.</p>'
        } },

      { n: 17,
        q: { en: 'In early 2023, Bank Indonesia’s consumer-confidence survey found expected year-end inflation of 5%. In June 2023 the same survey showed expected inflation rising to 7%. A rise in inflation expectations will cause ….',
             id: 'Pada awal 2023 Bank Indonesia mensurvei tingkat kepercayaan konsumen dan menemukan ekspektasi inflasi akhir tahun 5%. Pada Juni 2023, survei yang sama menunjukkan ekspektasi inflasi meningkat menjadi 7%. Peningkatan ekspektasi inflasi akan menyebabkan ….' },
        options: {
          en: ['a. a movement along the Phillips curve to the right', 'b. a movement along the Phillips curve to the left', 'c. the Phillips curve to shift to the right', 'd. the Phillips curve to shift to the left'],
          id: ['a. kurva Phillips bergerak sepanjang kurva ke kanan', 'b. kurva Phillips bergerak sepanjang kurva ke kiri', 'c. kurva Phillips bergeser ke kanan', 'd. kurva Phillips bergeser ke kiri']
        },
        answer: { en: '<b>c.</b> the (short-run) Phillips curve shifts to the right.',
                  id: '<b>c.</b> kurva Phillips (jangka pendek) bergeser ke kanan.' },
        working: {
          en: '<p>Expected inflation is a <span class="key">shift parameter</span> of the short-run Phillips curve. Higher $\\pi^e$ shifts SRPC <span class="key">up/right</span> — at any unemployment rate, inflation is now higher.</p>',
          id: '<p>Ekspektasi inflasi adalah <span class="key">parameter penggeser</span> kurva Phillips jangka pendek. $\\pi^e$ yang lebih tinggi menggeser SRPC ke <span class="key">atas/kanan</span> — pada tingkat pengangguran berapa pun, inflasi kini lebih tinggi.</p>'
        } },

      { n: 18,
        q: { en: 'The scatter plot below shows the relationship between inflation and unemployment in Indonesia (World Development Indicators, 1999–2021). Which statement is correct?',
             id: 'Scatter plot berikut menunjukkan hubungan inflasi dan pengangguran di Indonesia (World Development Indicator, 1999–2021). Manakah pernyataan yang benar?' },
        options: {
          en: ['a. The Phillips-curve phenomenon holds in Indonesia.',
               'b. Economic policy has succeeded in pushing inflation to a low level.',
               'c. Economic policy has pushed unemployment to a low level.',
               'd. Price changes in Indonesia are more likely driven by supply-side pressures than demand-side.'],
          id: ['a. Fenomena kurva Phillips terjadi di Indonesia.',
               'b. Kebijakan ekonomi telah berhasil menekan inflasi pada angka yang rendah.',
               'c. Kebijakan ekonomi telah menekan tingkat pengangguran pada angka yang rendah.',
               'd. Fenomena perubahan harga di Indonesia lebih cenderung dipengaruhi oleh tekanan pada sisi penawaran daripada permintaan.']
        },
        answer: { en: '<b>d.</b> price changes are more supply-driven than demand-driven.',
                  id: '<b>d.</b> perubahan harga lebih dipengaruhi sisi penawaran daripada permintaan.' },
        working: {
          en: '<p>If the data showed a clean negative inflation–unemployment trade-off, the classic Phillips curve (demand-driven) would hold. The absence of that pattern suggests Indonesian price changes are driven largely by <span class="key">supply-side shocks</span> (e.g., food/fuel), not demand.</p>',
          id: '<p>Jika data menunjukkan trade-off negatif yang rapi antara inflasi dan pengangguran, kurva Phillips klasik (didorong permintaan) berlaku. Ketiadaan pola itu menandakan perubahan harga di Indonesia lebih digerakkan <span class="key">guncangan sisi penawaran</span> (mis. pangan/BBM), bukan permintaan.</p>'
        } },

      { n: 19,
        q: { en: 'When aggregate demand is high, with a higher risk of inflation, those who favor using monetary and fiscal policy to stabilize the economy would likely recommend ….',
             id: 'Pada saat permintaan agregat tinggi, dengan risiko inflasi yang lebih tinggi, mereka yang mendukung penggunaan kebijakan moneter dan fiskal untuk menstabilkan perekonomian mungkin akan merekomendasikan ….' },
        options: {
          en: ['a. increasing government spending', 'b. the central bank selling government bonds', 'c. increasing the money supply', 'd. cutting taxes'],
          id: ['a. meningkatkan pengeluaran pemerintah', 'b. bank sentral menjual obligasi pemerintah', 'c. meningkatkan jumlah uang beredar', 'd. menurunkan pajak']
        },
        answer: { en: '<b>b.</b> the central bank sells government bonds.',
                  id: '<b>b.</b> bank sentral menjual obligasi pemerintah.' },
        working: {
          en: '<p>To cool an overheating economy you need <span class="key">contractionary</span> policy. Open-market <i>sales</i> of bonds drain the money supply, raise rates, and shift $AD$ left. (a), (c), (d) are all <i>expansionary</i> — the wrong direction.</p>',
          id: '<p>Untuk mendinginkan ekonomi yang memanas dibutuhkan kebijakan <span class="key">kontraktif</span>. <i>Penjualan</i> obligasi di pasar terbuka menyerap uang beredar, menaikkan suku bunga, dan menggeser $AD$ ke kiri. (a), (c), (d) semuanya <i>ekspansif</i> — arah yang salah.</p>'
        } },

      { n: 20,
        q: { en: 'Supporters of zero inflation argue that a successful disinflation programme will ….',
             id: 'Para pendukung zero inflation berargumen bahwa keberhasilan program penurunan inflasi ….' },
        options: {
          en: ['a. eventually also lower inflation expectations', 'b. eventually raise the real interest rate', 'c. permanently lower output', 'd. permanently raise unemployment'],
          id: ['a. pada akhirnya akan menurunkan pula ekspektasi terhadap inflasi', 'b. pada akhirnya akan menaikkan tingkat bunga riil', 'c. akan menurunkan output secara permanen', 'd. akan menaikkan pengangguran secara permanen']
        },
        answer: { en: '<b>a.</b> eventually lower inflation expectations.',
                  id: '<b>a.</b> pada akhirnya menurunkan ekspektasi inflasi.' },
        working: {
          en: '<p>Zero-inflation advocates argue that once a credible disinflation succeeds, <span class="key">inflation expectations fall</span>, the short-run Phillips curve shifts down, and the sacrifice ratio shrinks. The costs (lost output, higher unemployment) are <i>temporary</i>, not permanent — ruling out (c)/(d).</p>',
          id: '<p>Pendukung zero inflation berargumen begitu disinflasi yang kredibel berhasil, <span class="key">ekspektasi inflasi turun</span>, kurva Phillips jangka pendek bergeser ke bawah, dan sacrifice ratio mengecil. Biayanya (output hilang, pengangguran naik) bersifat <i>sementara</i>, bukan permanen — menggugurkan (c)/(d).</p>'
        } }
    ]},

    { kind: 'essay', label: { en: 'Essay', id: 'Esai' }, questions: [

      { n: 1,
        q: { en: 'Astina is an open economy and the world’s largest pencil producer. Its main pencil importer is Keraton, which is now experiencing political turmoil so its growth fluctuates. <b>(a)</b> Explain two factors that can affect Astina’s net exports. [3 pts] <b>(b)</b> Explain what net capital outflow (NCO) means and two factors that can affect NCO. [4 pts] <b>(c)</b> Suppose a firm in Astina buys goods from Keraton worth 10 billion. Explain the effect on Astina’s net exports and NCO if Keraton then buys 10 billion of Astina’s government bonds. [3 pts]',
             id: 'Astina adalah negara ekonomi terbuka (open economy) dan produsen pensil terbesar di dunia. Importir utama pensil dari Astina adalah negara Keraton. Keraton kini mengalami gejolak politik sehingga pertumbuhannya berfluktuasi. <b>(a)</b> Jelaskan dua faktor yang dapat memengaruhi ekspor neto Astina. [3 poin] <b>(b)</b> Jelaskan apa yang dimaksud dengan net capital outflow (NCO) dan dua faktor yang dapat memengaruhi NCO. [4 poin] <b>(c)</b> Misalkan sebuah perusahaan di Astina membeli barang dari Keraton senilai 10 miliar. Jelaskan pengaruhnya terhadap ekspor neto dan NCO Astina apabila Keraton kemudian membeli obligasi pemerintah Astina senilai 10 miliar. [3 poin]' },
        answer: {
          en: '<p><b>(a)</b> Factors that influence a country’s exports, imports, and net exports (any two):</p><ul><li>Consumers’ tastes for foreign vs domestic goods</li><li>Prices of goods at home and abroad</li><li>The exchange rate at which foreign currency trades for domestic currency</li><li>Incomes of consumers at home and abroad</li><li>Transportation costs</li><li>Government policies (trade policy)</li></ul><p><b>(b)</b> <span class="key">Net capital outflow (NCO)</span>, also called net foreign investment, $=$ (purchase of foreign assets by domestic residents) $-$ (purchase of domestic assets by foreigners). Factors that affect NCO (any two):</p><ul><li>Real interest rates paid on foreign assets</li><li>Real interest rates paid on domestic assets</li><li>Perceived economic and political risks of holding foreign assets</li><li>Government policies affecting foreign ownership of domestic assets</li></ul><p><b>(c)</b> Astina imports 10 billion of goods from Keraton → Astina’s imports rise → <span class="key">$NX$ falls</span>. Keraton then buys 10 billion of Astina’s government bonds → foreign purchase of domestic assets rises → <span class="key">Astina’s $NCO$ falls</span>. (Consistent with the identity $NX = NCO$.)</p>',
          id: '<p><b>(a)</b> Faktor yang memengaruhi ekspor, impor, dan ekspor neto suatu negara (cukup dua):</p><ul><li>Selera konsumen atas barang asing vs domestik</li><li>Harga barang di dalam dan luar negeri</li><li>Nilai tukar yang mempertukarkan mata uang asing dan domestik</li><li>Pendapatan konsumen di dalam dan luar negeri</li><li>Biaya transportasi</li><li>Kebijakan pemerintah (kebijakan perdagangan)</li></ul><p><b>(b)</b> <span class="key">Net capital outflow (NCO)</span>, atau investasi asing neto, $=$ (pembelian aset asing oleh penduduk domestik) $-$ (pembelian aset domestik oleh pihak asing). Faktor yang memengaruhi NCO (cukup dua):</p><ul><li>Suku bunga riil aset asing</li><li>Suku bunga riil aset domestik</li><li>Persepsi risiko ekonomi dan politik atas kepemilikan aset asing</li><li>Kebijakan pemerintah atas kepemilikan asing pada aset domestik</li></ul><p><b>(c)</b> Astina mengimpor barang 10 miliar dari Keraton → impor Astina naik → <span class="key">$NX$ turun</span>. Keraton lalu membeli obligasi pemerintah Astina 10 miliar → pembelian aset domestik oleh asing naik → <span class="key">$NCO$ Astina turun</span>. (Konsisten dengan identitas $NX = NCO$.)</p>'
        } },

      { n: 2,
        q: { en: 'In early May 2023 the U.S. Fed raised the Fed rate for the tenth time in a year, reaching 5.25% — the highest since August 2007. <b>(a)</b> If neither the government nor the monetary authority in Indonesia takes any action, what happens to the real exchange rate of the rupiah against the U.S. dollar? Explain with an appropriate diagram. [5 pts] <b>(b)</b> What happens to Indonesia’s exports and imports given the rupiah appreciation/depreciation in part (a)? Explain. [5 pts]',
             id: 'Pada awal Mei 2023 the Fed AS menaikkan Fed rate untuk kesepuluh kalinya dalam setahun, mencapai 5,25% — tertinggi sejak Agustus 2007. <b>(a)</b> Seandainya tidak ada kebijakan yang diambil pemerintah maupun otoritas moneter Indonesia, apa yang akan terjadi pada nilai tukar riil rupiah terhadap dolar AS? Jelaskan dengan diagram yang tepat. [5 poin] <b>(b)</b> Apa yang akan terjadi pada nilai ekspor-impor Indonesia jika terjadi apresiasi/depresiasi nilai tukar riil rupiah pada soal (a)? Jelaskan. [5 poin]' },
        answer: {
          en: '<p><b>(a)</b> The situation resembles <span class="key">capital flight</span>. Without intervention, high U.S. rates make U.S. assets more attractive, so Indonesia’s <span class="key">$NCO$ rises</span>. In the loanable-funds market this raises demand for funds (DLF↑) and the domestic real rate, lowering domestic investment. In the FX market, higher $NCO$ means a larger <span class="key">supply of rupiah</span>, so the real exchange rate of the rupiah <span class="key">depreciates</span> against the USD.</p>',
          id: '<p><b>(a)</b> Kondisinya mirip <span class="key">capital flight</span>. Tanpa intervensi, bunga AS yang tinggi membuat aset AS lebih menarik, sehingga <span class="key">$NCO$ Indonesia naik</span>. Di pasar dana pinjaman ini menaikkan permintaan dana (DLF↑) dan suku bunga riil domestik, menurunkan investasi domestik. Di pasar valas, $NCO$ yang lebih tinggi berarti <span class="key">penawaran rupiah</span> bertambah, sehingga nilai tukar riil rupiah <span class="key">terdepresiasi</span> terhadap USD.</p>',
        },
        aChart: { panels: [{ title: 'FX market for rupiah: S rises → RER depreciates', w: 440, h: 300, x: { min: 0, max: 10, label: 'Q (Rp)' }, y: { min: 0, max: 10, label: 'RER' },
          curves: [
            { id: 'D', kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: '#c0392b', label: 'Demand Rp' },
            { id: 'S1', kind: 'vline', x: 4, color: '#0e8fb8', label: 'S₁' },
            { id: 'S2', kind: 'vline', x: 6.5, color: '#0e8fb8', label: 'S₂', dash: true } ],
          points: [
            { on: ['D', 'S1'], label: 'A', dot: true, guideY: 'E₁', guideX: 'Q₁' },
            { on: ['D', 'S2'], label: 'B', dot: true, guideY: 'E₂', guideX: 'Q₂' } ],
          shifts: [ { from: 'S1', to: 'S2' } ] }] }
      },

      { n: 3,
        q: { en: 'Economists use the aggregate-demand and aggregate-supply model to analyze short-run fluctuations. <b>(a)</b> Explain why the aggregate-demand (AD) curve is downward sloping. [5 pts] <b>(b)</b> Recession and economic uncertainty make people save more and spend more cautiously. Explain the effect on the economy using the AD curve. [5 pts]',
             id: 'Para ekonom menggunakan model permintaan agregat dan penawaran agregat untuk menganalisis fluktuasi jangka pendek. <b>(a)</b> Jelaskan mengapa kurva permintaan agregat (AD) miring ke kiri bawah (downward sloping). [5 poin] <b>(b)</b> Isu resesi dan ketidakpastian membuat masyarakat lebih banyak menabung dan lebih hati-hati membelanjakan uangnya. Jelaskan dampaknya pada perekonomian dengan kurva AD. [5 poin]' },
        answer: {
          en: '<p><b>(a)</b> Three reasons the AD curve slopes downward:</p><ul><li><span class="key">Wealth effect</span>: a lower price level raises real wealth, stimulating consumption.</li><li><span class="key">Interest-rate effect</span>: a lower price level reduces the interest rate, stimulating investment.</li><li><span class="key">Exchange-rate effect</span>: a lower price level causes the real exchange rate to depreciate, stimulating net exports.</li></ul><p><b>(b)</b> When people suddenly worry more and save more (e.g. for retirement), they cut current consumption. Because the quantity of goods and services demanded at any price level is now lower, the <span class="key">aggregate-demand curve shifts to the left</span> → in the short run output and the price level fall.</p>',
          id: '<p><b>(a)</b> Tiga alasan kurva AD miring ke bawah:</p><ul><li><span class="key">Efek kekayaan</span>: tingkat harga lebih rendah menaikkan kekayaan riil, mendorong konsumsi.</li><li><span class="key">Efek suku bunga</span>: tingkat harga lebih rendah menurunkan suku bunga, mendorong investasi.</li><li><span class="key">Efek nilai tukar</span>: tingkat harga lebih rendah membuat nilai tukar riil terdepresiasi, mendorong ekspor neto.</li></ul><p><b>(b)</b> Saat masyarakat tiba-tiba lebih khawatir dan lebih banyak menabung (mis. untuk pensiun), mereka memangkas konsumsi saat ini. Karena jumlah barang dan jasa yang diminta pada tingkat harga berapa pun kini lebih rendah, <span class="key">kurva permintaan agregat bergeser ke kiri</span> → dalam jangka pendek output dan tingkat harga turun.</p>'
        },
        aChart: { panels: [{ title: 'Higher saving → AD shifts left', w: 420, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
          curves: [
            { id: 'AD1', kind: 'line', p1: [2, 8.5], p2: [9, 2], color: '#c0392b', label: 'AD₁' },
            { id: 'AD2', kind: 'line', p1: [0.5, 6.5], p2: [7, 0.5], color: '#c0392b', label: 'AD₂', dash: true },
            { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' } ],
          points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true }, { on: ['AD2', 'SRAS'], label: 'B', dot: true } ],
          shifts: [ { from: 'AD1', to: 'AD2' } ] }] }
      },

      { n: 4,
        q: { en: '<b>(a)</b> Indonesia’s inflation fell from 5.51% (Dec 2022) to 4.33% (Apr 2023). People expect inflation to fall further by mid-2023. How will the fall in price expectations affect the short-run and long-run aggregate-supply curves? Explain with a graph. [5 pts] <b>(b)</b> Japan had negative population growth (-0.5%) in 2021, raising concern that its productive labor force will shrink. How will this affect the short-run and long-run aggregate-supply curves? Explain with a graph. [5 pts]',
             id: '<b>(a)</b> Inflasi Indonesia turun dari 5,51% (Des 2022) menjadi 4,33% (Apr 2023). Masyarakat memperkirakan inflasi akan makin rendah pada pertengahan 2023. Bagaimana turunnya ekspektasi harga memengaruhi kurva penawaran jangka pendek dan jangka panjang? Jelaskan dengan grafik. [5 poin] <b>(b)</b> Jepang mengalami pertumbuhan penduduk negatif (-0,5%) pada 2021, menimbulkan kekhawatiran jumlah tenaga kerja produktif menurun. Bagaimana hal ini memengaruhi kurva penawaran jangka pendek dan jangka panjang? Jelaskan dengan grafik. [5 poin]' },
        answer: {
          en: '<p><b>(a)</b> A decrease in the expected price level raises the quantity of goods and services supplied and shifts the <span class="key">SRAS curve to the right</span> (at any level of output, the aggregate price is lower). The expectation could later reverse and shift SRAS back to the left. The <span class="key">LRAS curve is unaffected</span> — there is no change in technology or the quantity of factors of production.</p><p><b>(b)</b> Negative population growth reduces the number of productive workers. The <span class="key">SRAS curve shifts left</span> (output is lower at any price level). In the long run the <span class="key">LRAS curve also shifts left</span>, because the quantity of factors of production gradually declines.</p>',
          id: '<p><b>(a)</b> Penurunan ekspektasi harga menaikkan jumlah barang dan jasa yang ditawarkan dan menggeser <span class="key">kurva SRAS ke kanan</span> (pada tingkat output berapa pun, harga agregatnya lebih rendah). Ekspektasi bisa berbalik kemudian dan menggeser SRAS kembali ke kiri. <span class="key">Kurva LRAS tidak terpengaruh</span> — tidak ada perubahan teknologi atau jumlah faktor produksi.</p><p><b>(b)</b> Pertumbuhan penduduk negatif menurunkan jumlah pekerja produktif. <span class="key">Kurva SRAS bergeser ke kiri</span> (output lebih rendah pada tingkat harga berapa pun). Dalam jangka panjang <span class="key">kurva LRAS juga bergeser ke kiri</span>, karena jumlah faktor produksi berangsur menurun.</p>'
        },
        aChart: { panels: [
          { title: '(a) lower P^e → SRAS right (LRAS fixed)', w: 420, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [
              { id: 'S1', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'S2', kind: 'line', p1: [2.5, 1], p2: [10, 6.6], color: '#0e8fb8', label: "SRAS'", dash: true },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' } ],
            shifts: [ { from: 'S1', to: 'S2' } ] },
          { title: '(b) fewer workers → SRAS & LRAS left', w: 420, h: 290, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [
              { id: 'S1', kind: 'line', p1: [2.5, 1], p2: [10, 7], color: '#0e8fb8', label: 'SRAS' },
              { id: 'S2', kind: 'line', p1: [1, 2], p2: [8, 8], color: '#0e8fb8', label: "SRAS'", dash: true },
              { id: 'L1', kind: 'vline', x: 6, color: '#444', label: 'LRAS' },
              { id: 'L2', kind: 'vline', x: 4, color: '#444', label: "LRAS'", dash: true } ],
            shifts: [ { from: 'S1', to: 'S2' }, { from: 'L1', to: 'L2' } ] }
        ] }
      },

      { n: 5,
        q: { en: 'Using Indonesia’s growth data, answer questions on short-run fluctuations. <b>(a)</b> Why did Indonesia’s growth contract sharply from 2019 to 2020? What was the main shock? [2 pts] <b>(b)</b> Growth quickly rebounded from -2.07% (2020) to 3.7% (2021) and 5.31% (2022). What was the main driver of this recovery? [2 pts] <b>(c)</b> How did the short-run and long-run equilibrium of output and prices change in Indonesia? Hint: use the AD–AS model with 2019 as the starting point. [4 pts] <b>(d)</b> What main policy did the Indonesian government use to recover and even boost post-pandemic growth? [2 pts]',
             id: 'Dengan data pertumbuhan ekonomi Indonesia, jawablah pertanyaan tentang fluktuasi jangka pendek. <b>(a)</b> Mengapa pertumbuhan Indonesia kontraksi tajam dari 2019 ke 2020? Guncangan utama apa yang terjadi? [2 poin] <b>(b)</b> Pertumbuhan cepat pulih dari -2,07% (2020) menjadi 3,7% (2021) dan 5,31% (2022). Apa faktor utama pendorong pemulihan ini? [2 poin] <b>(c)</b> Bagaimana perubahan ekuilibrium output dan harga jangka pendek dan jangka panjang di Indonesia? Petunjuk: gunakan model AD–AS dengan 2019 sebagai titik awal. [4 poin] <b>(d)</b> Apa kebijakan utama pemerintah Indonesia sehingga berhasil memulihkan dan bahkan meningkatkan pertumbuhan pasca pandemi? [2 poin]' },
        answer: {
          en: '<p><b>(a)</b> The sharp contraction was caused by the <span class="key">COVID-19 pandemic</span> in early 2020. The main cause was a <span class="key">contraction of SRAS</span> due to policies cutting mobility and economic activity to curb the virus.</p><p><b>(b)</b> Recovery was relatively fast, propped up by <span class="key">rising consumption and purchasing power</span> after the pandemic, as activity and mobility normalized — lifting consumption and aggregate demand.</p><p><b>(c)</b> The pandemic disrupted mobility and production, so <span class="key">SRAS shifts left</span> (SRAS₁ → SRAS₂). Equilibrium moves from <b>A → B</b>: output falls and the price level rises. After the pandemic, consumption and purchasing power recover, so <span class="key">AD shifts right</span> (AD₁ → AD₂). Equilibrium moves from <b>B → C</b>: output rises (even above pre-pandemic 2019) and the price level rises further.</p><p><b>(d)</b> The government ran the <span class="key">National Economic Recovery programme (PEN / Pemulihan Ekonomi Nasional)</span> — increasing spending on health, social protection, MSME and corporate support, business and tax incentives, and priority programmes.</p>',
          id: '<p><b>(a)</b> Kontraksi tajam disebabkan <span class="key">pandemi COVID-19</span> di awal 2020. Penyebab utamanya <span class="key">kontraksi SRAS</span> akibat kebijakan mengurangi mobilitas dan aktivitas ekonomi untuk mencegah penyebaran virus.</p><p><b>(b)</b> Pemulihan cukup cepat, ditopang <span class="key">peningkatan konsumsi dan daya beli</span> masyarakat setelah pandemi, karena aktivitas dan mobilitas kembali normal — menaikkan konsumsi dan permintaan agregat.</p><p><b>(c)</b> Pandemi mengganggu mobilitas dan produksi, sehingga <span class="key">SRAS bergeser ke kiri</span> (SRAS₁ → SRAS₂). Ekuilibrium berpindah dari <b>A → B</b>: output turun dan harga naik. Setelah pandemi, konsumsi dan daya beli pulih, sehingga <span class="key">AD bergeser ke kanan</span> (AD₁ → AD₂). Ekuilibrium berpindah dari <b>B → C</b>: output naik (bahkan lebih tinggi dari sebelum pandemi 2019) dan harga naik lagi.</p><p><b>(d)</b> Pemerintah menjalankan <span class="key">Pemulihan Ekonomi Nasional (PEN)</span> — menaikkan pengeluaran untuk kesehatan, perlindungan sosial, dukungan UMKM dan korporasi, insentif usaha dan pajak, serta program prioritas.</p>'
        },
        aChart: { panels: [{ title: 'A → B (SRAS left) → C (AD right)', w: 460, h: 320, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
          curves: [
            { id: 'AD1', kind: 'line', p1: [1, 8], p2: [8.5, 1], color: '#c0392b', label: 'AD₁' },
            { id: 'AD2', kind: 'line', p1: [2.5, 9], p2: [10, 2], color: '#c0392b', label: 'AD₂', dash: true },
            { id: 'S1', kind: 'line', p1: [2, 1], p2: [9.5, 7.5], color: '#0e8fb8', label: 'SRAS₁' },
            { id: 'S2', kind: 'line', p1: [0.5, 2.5], p2: [8, 9], color: '#0e8fb8', label: 'SRAS₂', dash: true } ],
          points: [
            { on: ['AD1', 'S1'], label: 'A', dot: true },
            { on: ['AD1', 'S2'], label: 'B', dot: true },
            { on: ['AD2', 'S2'], label: 'C', dot: true } ],
          shifts: [ { from: 'S1', to: 'S2' }, { from: 'AD1', to: 'AD2' } ] }] }
      },

      { n: 6,
        q: { en: 'Suppose Pariangan raises government spending by Rp200 billion and raises taxes by Rp200 billion. MPC = 0.80, with no crowding-out or accelerator effect. <b>(a)</b> Compute and explain the combined effect of both policies on aggregate demand. [6 pts] <b>(b)</b> Graph the combined policy’s impact on Pariangan’s economy. [4 pts]',
             id: 'Misalkan Negeri Pariangan menaikkan pengeluaran pemerintah sebesar Rp200 miliar serta menaikkan pajak sebesar Rp200 miliar. MPC = 0,80, tanpa efek crowding out maupun akselerator. <b>(a)</b> Hitung dan jelaskan efek gabungan kedua kebijakan terhadap permintaan agregat. [6 poin] <b>(b)</b> Gambarkan dampak kebijakan gabungan tersebut secara grafis terhadap ekonomi Pariangan. [4 poin]' },
        answer: {
          en: '<div class="formula">$\\text{Government-spending multiplier}=\\dfrac{1}{1-MPC}=\\dfrac{1}{1-0.8}=\\dfrac{1}{0.2}=5$</div><p>The Rp200B rise in $G$ shifts $AD$ right by $200\\times 5 = \\textbf{Rp}1000\\textbf{B}$ and raises income by Rp1000B (AD₁ → AD₃ via the multiplier).</p><div class="formula">$\\text{Tax multiplier}=\\dfrac{-MPC}{1-MPC}=\\dfrac{-0.8}{0.2}=-4$</div><p>The Rp200B tax rise shifts $AD$ left by $200\\times(-4)=\\textbf{-Rp}800\\textbf{B}$ and lowers income by Rp800B (AD₃ back toward AD₂).</p><p>The two effects do <span class="key">not</span> cancel. Net change $=1000-800=\\textbf{+Rp}200\\textbf{B}$ — equal to the original spending change. This is the <span class="key">balanced-budget multiplier = 1</span>.</p>',
          id: '<div class="formula">$\\text{Pengganda pengeluaran pemerintah}=\\dfrac{1}{1-MPC}=\\dfrac{1}{1-0.8}=\\dfrac{1}{0.2}=5$</div><p>Kenaikan $G$ Rp200M menggeser $AD$ ke kanan sebesar $200\\times 5 = \\textbf{Rp}1000\\textbf{M}$ dan menaikkan pendapatan Rp1000M (AD₁ → AD₃ lewat pengganda).</p><div class="formula">$\\text{Pengganda pajak}=\\dfrac{-MPC}{1-MPC}=\\dfrac{-0.8}{0.2}=-4$</div><p>Kenaikan pajak Rp200M menggeser $AD$ ke kiri sebesar $200\\times(-4)=\\textbf{-Rp}800\\textbf{M}$ dan menurunkan pendapatan Rp800M (AD₃ kembali ke arah AD₂).</p><p>Kedua efek <span class="key">tidak</span> saling meniadakan. Perubahan neto $=1000-800=\\textbf{+Rp}200\\textbf{M}$ — sama dengan perubahan pengeluaran awal. Inilah <span class="key">pengganda anggaran berimbang = 1</span>.</p>'
        },
        aChart: { panels: [{ title: 'AD₁ →(G)→ AD₃ →(T)→ AD₂; net +Rp200B', w: 440, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
          curves: [
            { id: 'AD1', kind: 'line', p1: [1, 8], p2: [6, 1], color: '#c0392b', label: 'AD₁' },
            { id: 'AD2', kind: 'line', p1: [2, 8], p2: [7, 1], color: '#c0392b', label: 'AD₂', dash: true },
            { id: 'AD3', kind: 'line', p1: [4, 8], p2: [9, 1], color: '#c0392b', label: 'AD₃', dash: true },
            { id: 'SRAS', kind: 'line', p1: [1, 1.5], p2: [9, 8.5], color: '#0e8fb8', label: 'SRAS' } ],
          points: [
            { on: ['AD1', 'SRAS'], label: '1', dot: true },
            { on: ['AD3', 'SRAS'], label: '3', dot: true },
            { on: ['AD2', 'SRAS'], label: '2', dot: true } ],
          shifts: [ { from: 'AD1', to: 'AD3' }, { from: 'AD3', to: 'AD2' } ] }] }
      },

      { n: 7,
        q: { en: 'The Prime Minister of Brogentina is designing a policy to balance inflation and unemployment. From Brogentina’s BPS data: the natural unemployment rate over 20 years is 6%, surveyed expected inflation in early 2023 is 5%, and the Phillips-curve coefficient $\\alpha = 0.2$. <b>(a)</b> Draw the short-run and long-run Phillips curves at inflation of 3% and 10%. [4 pts] <b>(b)</b> Show the adjustment of inflation and unemployment if, by end-2023, expected inflation rises to 6%. [3 pts] <b>(c)</b> If in the long run the natural unemployment rate is projected to fall to 4%, what policies could shift unemployment lower in the long run? [3 pts]',
             id: 'Perdana Menteri Brogentina merancang kebijakan untuk menyeimbangkan inflasi dan pengangguran. Dari data BPS Brogentina: tingkat pengangguran natural 20 tahun terakhir 6%, ekspektasi inflasi masyarakat yang disurvei awal 2023 adalah 5%, dan koefisien $\\alpha$ pada persamaan kurva Phillips adalah 0,2. <b>(a)</b> Gambarkan kurva Phillips jangka pendek dan jangka panjang pada tingkat inflasi 3% dan 10%. [4 poin] <b>(b)</b> Gambarkan proses penyesuaian inflasi dan pengangguran jika pada akhir 2023 ekspektasi inflasi naik menjadi 6%. [3 poin] <b>(c)</b> Jika dalam jangka panjang pengangguran natural diproyeksikan turun menjadi 4%, kebijakan apa saja yang bisa menggeser tingkat pengangguran lebih kecil dalam jangka panjang? [3 poin]' },
        answer: {
          en: '<div class="formula">$\\pi = \\pi^{e} - \\dfrac{1}{\\alpha}\\,(u - u_n)\\;\\Rightarrow\\; u = u_n - \\alpha(\\pi - \\pi^{e})$ form rearranged; with the key’s slope $1/\\alpha$.</div><p><b>(a)</b> The <span class="key">LRPC is vertical</span> at the natural rate $u_n = 6\\%$. The SRPC is found by plugging values into the Phillips equation with $\\pi^e=5\\%$, $u_n=6\\%$, $\\alpha=0.2$:</p><ul><li>At $\\pi = 3\\%$ → $u = 6.4\\%$</li><li>At $\\pi = 10\\%$ → $u = 5\\%$</li></ul><p>(Higher inflation ↔ lower unemployment along SRPC₁.)</p><p><b>(b)</b> If expected inflation rises to $\\pi^e = 6\\%$, re-solving gives the new SRPC₂:</p><ul><li>At $\\pi = 3\\%$ → $u = 6.6\\%$</li><li>At $\\pi = 10\\%$ → $u = 5.2\\%$</li></ul><p>So higher inflation expectations <span class="key">shift SRPC₁ → SRPC₂ to the right</span>: at any given inflation rate, unemployment is now higher.</p><p><b>(c)</b> In the long run, the variables that can shift the Phillips curve / lower the natural rate include:</p><ul><li>minimum-wage policy</li><li>the market power of unions</li><li>efficiency wages</li><li>the job-search process</li><li>quality of human capital</li><li>other factors that shift LRAS</li></ul><p>To push the <span class="key">LRPC left</span> (toward $u_n=4\\%$), use policies that improve labor absorption via the strategies above.</p>',
          id: '<div class="formula">$\\pi = \\pi^{e} - \\dfrac{1}{\\alpha}\\,(u - u_n)$; bentuk yang konsisten dengan kemiringan $1/\\alpha$ pada kunci.</div><p><b>(a)</b> <span class="key">LRPC vertikal</span> pada tingkat natural $u_n = 6\\%$. SRPC didapat dengan memasukkan nilai ke persamaan Phillips dengan $\\pi^e=5\\%$, $u_n=6\\%$, $\\alpha=0,2$:</p><ul><li>Saat $\\pi = 3\\%$ → $u = 6,4\\%$</li><li>Saat $\\pi = 10\\%$ → $u = 5\\%$</li></ul><p>(Inflasi lebih tinggi ↔ pengangguran lebih rendah sepanjang SRPC₁.)</p><p><b>(b)</b> Jika ekspektasi inflasi naik menjadi $\\pi^e = 6\\%$, hitung ulang memberi SRPC₂ baru:</p><ul><li>Saat $\\pi = 3\\%$ → $u = 6,6\\%$</li><li>Saat $\\pi = 10\\%$ → $u = 5,2\\%$</li></ul><p>Jadi kenaikan ekspektasi inflasi <span class="key">menggeser SRPC₁ → SRPC₂ ke kanan</span>: pada tingkat inflasi yang sama, pengangguran kini lebih tinggi.</p><p><b>(c)</b> Dalam jangka panjang, variabel yang dapat menggeser kurva Phillips / menurunkan tingkat natural antara lain:</p><ul><li>kebijakan upah minimum</li><li>kekuatan pasar serikat pekerja</li><li>upah efisiensi (efficiency wages)</li><li>proses pencarian kerja (job search)</li><li>kualitas modal manusia (SDM)</li><li>faktor lain yang menggeser LRAS</li></ul><p>Untuk mendorong <span class="key">LRPC ke kiri</span> (menuju $u_n=4\\%$), gunakan kebijakan yang meningkatkan penyerapan tenaga kerja lewat strategi di atas.</p>'
        },
        aChart: { panels: [{ title: 'LRPC at uₙ=6%; SRPC₁ (πᵉ=5%) → SRPC₂ (πᵉ=6%)', w: 460, h: 320, x: { min: 4, max: 7.5, label: 'u (%)' }, y: { min: 2, max: 11, label: 'π (%)' },
          curves: [
            { id: 'LRPC', kind: 'vline', x: 6, color: '#444', label: 'LRPC' },
            { id: 'SRPC1', kind: 'line', p1: [5, 10], p2: [6.4, 3], color: '#c0392b', label: 'SRPC₁' },
            { id: 'SRPC2', kind: 'line', p1: [5.2, 10], p2: [6.6, 3], color: '#c0392b', label: 'SRPC₂', dash: true } ],
          points: [
            { onCurve: 'SRPC1', atY: 5, label: 'A', dot: true, guideX: 'uₙ=6' },
            { onCurve: 'SRPC2', atY: 5, label: 'B', dot: true } ],
          shifts: [ { from: 'SRPC1', to: 'SRPC2' } ] }] }
      }
    ]}
  ]
};
