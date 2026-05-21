/* PE2 — UAS 2022 (paper header reads 2019/2020; exam in English). 1:1 bilingual transcription. */
window.PE2_EXAMS = window.PE2_EXAMS || {};
window.PE2_EXAMS['2022'] = {
  year: '2022',
  label: { en: 'UAS 2022', id: 'UAS 2022' },
  note: {
    en: 'Final exam (UAS). The original paper header reads <span class="key">2019/2020</span>; it is filed here under the 2022 label. The paper is in English: 20 multiple-choice questions (1.5 points each) and 7 short essays (10 points each).',
    id: 'Ujian Akhir Semester (UAS). Judul asli di berkas tertulis <span class="key">2019/2020</span>; di sini diarsipkan dengan label 2022. Soal berbahasa Inggris: 20 pilihan ganda (masing-masing 1,5 poin) dan 7 esai singkat (masing-masing 10 poin).'
  },
  sections: [
    {
      kind: 'mcq',
      label: { en: 'Multiple choice', id: 'Pilihan ganda' },
      questions: [
        {
          n: 1,
          q: {
            en: "Henry, a German citizen, pays a German architect to design a country house. Which country's exports increase?",
            id: "Henry, seorang warga negara Jerman, membayar arsitek Jerman untuk merancang sebuah rumah pedesaan. Ekspor negara mana yang meningkat?"
          },
          options: {
            en: ["a. Germany's", "b. Gernamy's", "c. Germany's and Gernamy's", "d. Neither Germany's nor Gernamy's"],
            id: ["a. Jerman (Germany)", "b. Gernamy", "c. Germany dan Gernamy", "d. Bukan Germany maupun Gernamy"]
          },
          answer: { en: "d. Neither Germany's nor Gernamy's", id: "d. Bukan Germany maupun Gernamy" },
          working: {
            en: "<p>Both parties are German, so the transaction is between two residents of the same country. Exports are sales to <span class=\"key\">foreigners</span>; a domestic-to-domestic service is not an export for any country.</p>",
            id: "<p>Kedua pihak adalah warga Jerman, sehingga transaksinya antara dua penduduk negara yang sama. Ekspor adalah penjualan kepada <span class=\"key\">pihak asing</span>; jasa antar-penduduk domestik bukan ekspor bagi negara mana pun.</p>"
          }
        },
        {
          n: 2,
          q: {
            en: "If the real exchange rate for coal is 1.5, the price of coal in the United States is \\$50 per ton, and the price of coal in Britain is 20 British pounds per ton, what is the nominal exchange rate?",
            id: "Jika nilai tukar riil untuk batu bara adalah 1,5, harga batu bara di Amerika Serikat \\$50 per ton, dan harga batu bara di Inggris 20 poundsterling per ton, berapa nilai tukar nominalnya?"
          },
          options: {
            en: ["a. 15/4 or 3.75 pounds per dollar", "b. 5/3 or 1.67 pounds per dollar", "c. 3/5 or 0.6 pounds per dollar", "d. 4/15 or 2.67 pounds per dollar"],
            id: ["a. 15/4 atau 3,75 pound per dolar", "b. 5/3 atau 1,67 pound per dolar", "c. 3/5 atau 0,6 pound per dolar", "d. 4/15 atau 2,67 pound per dolar"]
          },
          answer: { en: "c. 3/5 or 0.6 pounds per dollar", id: "c. 3/5 atau 0,6 pound per dolar" },
          working: {
            en: "<div class=\"formula\">$\\text{RER} = \\dfrac{e \\times P_{\\text{domestic}}}{P_{\\text{foreign}}}$</div><p>With RER $=1.5$, $P_{US}=\\$50$, $P_{UK}=£20$: $1.5 = \\dfrac{e \\times 50}{20}$, so $e = \\dfrac{1.5 \\times 20}{50} = \\dfrac{30}{50} = 0.6$ pounds per dollar.</p>",
            id: "<div class=\"formula\">$\\text{RER} = \\dfrac{e \\times P_{\\text{domestik}}}{P_{\\text{asing}}}$</div><p>Dengan RER $=1{,}5$, $P_{US}=\\$50$, $P_{UK}=£20$: $1{,}5 = \\dfrac{e \\times 50}{20}$, sehingga $e = \\dfrac{1{,}5 \\times 20}{50} = \\dfrac{30}{50} = 0{,}6$ pound per dolar.</p>"
          }
        },
        {
          n: 3,
          q: {
            en: "Which of the following equations is correct?",
            id: "Persamaan berikut manakah yang benar?"
          },
          options: {
            en: ["a. $S = I + C$", "b. $S = I - NX$", "c. $S = I + NCO$", "d. $S = NX - NCO$"],
            id: ["a. $S = I + C$", "b. $S = I - NX$", "c. $S = I + NCO$", "d. $S = NX - NCO$"]
          },
          answer: { en: "c. $S = I + NCO$", id: "c. $S = I + NCO$" },
          working: {
            en: "<p>In an open economy, national saving funds both domestic investment and lending abroad: <span class=\"key\">$S = I + NCO$</span>, where net capital outflow $NCO = NX$. Saving either buys domestic capital ($I$) or foreign assets ($NCO$).</p>",
            id: "<p>Dalam perekonomian terbuka, tabungan nasional membiayai investasi domestik sekaligus pinjaman ke luar negeri: <span class=\"key\">$S = I + NCO$</span>, dengan arus modal keluar neto $NCO = NX$. Tabungan dipakai untuk membeli modal domestik ($I$) atau aset asing ($NCO$).</p>"
          }
        },
        {
          n: 4,
          q: {
            en: "Suppose a Starbucks tall latte costs \\$4.00 in the United States and 2.50 euros in the Euro area. Also, suppose a McDonald's Big Mac costs \\$4.50 in the United States and 3.60 euros in the Euro area. If the nominal exchange rate is 0.80 euros per dollar, which goods have prices that are consistent with purchasing-power parity?",
            id: "Misalkan tall latte Starbucks berharga \\$4,00 di Amerika Serikat dan 2,50 euro di kawasan Euro. Misalkan pula Big Mac McDonald's berharga \\$4,50 di Amerika Serikat dan 3,60 euro di kawasan Euro. Jika nilai tukar nominal 0,80 euro per dolar, barang mana yang harganya konsisten dengan paritas daya beli (PPP)?"
          },
          options: {
            en: ["a. Both the tall latte and the Big Mac", "b. The tall latte but not the Big Mac", "c. The Big Mac but not the tall latte", "d. Neither the Big Mac nor the tall latte"],
            id: ["a. Keduanya, tall latte dan Big Mac", "b. Tall latte tetapi bukan Big Mac", "c. Big Mac tetapi bukan tall latte", "d. Bukan Big Mac maupun tall latte"]
          },
          answer: { en: "c. The Big Mac but not the tall latte", id: "c. Big Mac tetapi bukan tall latte" },
          working: {
            en: "<p>PPP holds if the dollar price converted at $0.80$ €/\\$ equals the euro price.</p><p><b>Latte:</b> $\\$4.00 \\times 0.80 = 2.00$ € ≠ $2.50$ € → not PPP.</p><p><b>Big Mac:</b> $\\$4.50 \\times 0.80 = 3.60$ € $= 3.60$ € → PPP holds.</p><p>So only the Big Mac is consistent with PPP.</p>",
            id: "<p>PPP berlaku jika harga dalam dolar yang dikonversi pada $0{,}80$ €/\\$ sama dengan harga euro.</p><p><b>Latte:</b> $\\$4{,}00 \\times 0{,}80 = 2{,}00$ € ≠ $2{,}50$ € → tidak PPP.</p><p><b>Big Mac:</b> $\\$4{,}50 \\times 0{,}80 = 3{,}60$ € $= 3{,}60$ € → PPP berlaku.</p><p>Jadi hanya Big Mac yang konsisten dengan PPP.</p>"
          }
        },
        {
          n: 5,
          q: {
            en: "If the demand for loanable funds shifts left, then the real interest rate",
            id: "Jika permintaan dana pinjaman (loanable funds) bergeser ke kiri, maka suku bunga riil"
          },
          options: {
            en: ["a. falls and the equilibrium quantity of loanable funds rises.", "b. and the equilibrium quantity of loanable funds both rise.", "c. and the equilibrium quantity of loanable funds both fall.", "d. rises and the equilibrium quantity of loanable funds falls."],
            id: ["a. turun dan jumlah keseimbangan dana pinjaman naik.", "b. dan jumlah keseimbangan dana pinjaman keduanya naik.", "c. dan jumlah keseimbangan dana pinjaman keduanya turun.", "d. naik dan jumlah keseimbangan dana pinjaman turun."]
          },
          answer: { en: "c. and the equilibrium quantity of loanable funds both fall.", id: "c. dan jumlah keseimbangan dana pinjaman keduanya turun." },
          working: {
            en: "<p>A leftward shift of demand along the upward-sloping supply curve lowers both the price (the <span class=\"key\">real interest rate $r$</span>) and the equilibrium quantity of loanable funds.</p>",
            id: "<p>Pergeseran permintaan ke kiri sepanjang kurva penawaran yang naik menurunkan baik harga (<span class=\"key\">suku bunga riil $r$</span>) maupun jumlah keseimbangan dana pinjaman.</p>"
          },
          qChart: { panels: [{ title: 'Loanable funds: demand shifts left', w: 420, h: 300, x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'r' },
            curves: [ { id: 'D1', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'D₁' },
              { id: 'D2', kind: 'line', p1: [1, 5.5], p2: [7, 0.5], color: '#c0392b', label: 'D₂', dash: true },
              { id: 'S', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'S' } ],
            points: [ { on: ['D1', 'S'], label: 'A', dot: true }, { on: ['D2', 'S'], label: 'B', dot: true } ],
            shifts: [ { from: 'D1', to: 'D2' } ] }] }
        },
        {
          n: 6,
          q: {
            en: "If real interest rates rose more in Canada than in the United States, then other things the same",
            id: "Jika suku bunga riil naik lebih besar di Kanada daripada di Amerika Serikat, maka dengan hal lain tetap"
          },
          options: {
            en: ["a. U.S. citizens would buy more Canadian bonds and Canadians would buy more U.S. bonds.", "b. U.S. citizens would buy more Canadian bonds and Canadians would buy fewer U.S. bonds.", "c. U.S. citizens would buy fewer Canadian bonds and Canadians would buy fewer U.S. bonds.", "d. U.S. citizens would buy fewer Canadian bonds and Canadians would buy more U.S. bonds."],
            id: ["a. Warga AS membeli lebih banyak obligasi Kanada dan warga Kanada membeli lebih banyak obligasi AS.", "b. Warga AS membeli lebih banyak obligasi Kanada dan warga Kanada membeli lebih sedikit obligasi AS.", "c. Warga AS membeli lebih sedikit obligasi Kanada dan warga Kanada membeli lebih sedikit obligasi AS.", "d. Warga AS membeli lebih sedikit obligasi Kanada dan warga Kanada membeli lebih banyak obligasi AS."]
          },
          answer: { en: "b. U.S. citizens would buy more Canadian bonds and Canadians would buy fewer U.S. bonds.", id: "b. Warga AS membeli lebih banyak obligasi Kanada dan warga Kanada membeli lebih sedikit obligasi AS." },
          working: {
            en: "<p>Higher Canadian rates make Canadian bonds more attractive to <span class=\"key\">everyone</span>. Americans shift toward Canadian bonds, and Canadians keep more of their funds at home rather than buying U.S. bonds.</p>",
            id: "<p>Suku bunga Kanada yang lebih tinggi membuat obligasi Kanada lebih menarik bagi <span class=\"key\">semua orang</span>. Warga AS beralih ke obligasi Kanada, dan warga Kanada lebih banyak menyimpan dananya di dalam negeri ketimbang membeli obligasi AS.</p>"
          }
        },
        {
          n: 7,
          q: {
            en: "If a country experiences capital flight, which of the following curves shift right?",
            id: "Jika sebuah negara mengalami pelarian modal (capital flight), kurva berikut manakah yang bergeser ke kanan?"
          },
          options: {
            en: ["a. Only the demand for loanable funds.", "b. Only the supply of dollars in the market for foreign-currency exchange.", "c. Only the net capital outflow curve and the supply of dollars in the market for foreign currency exchange.", "d. The demand for loanable funds, the net capital outflow curve, and the supply of dollars in the market for foreign currency exchange."],
            id: ["a. Hanya permintaan dana pinjaman.", "b. Hanya penawaran dolar di pasar valuta asing.", "c. Hanya kurva arus modal keluar neto dan penawaran dolar di pasar valuta asing.", "d. Permintaan dana pinjaman, kurva arus modal keluar neto, dan penawaran dolar di pasar valuta asing."]
          },
          answer: { en: "d. The demand for loanable funds, the net capital outflow curve, and the supply of dollars in the market for foreign currency exchange.", id: "d. Permintaan dana pinjaman, kurva arus modal keluar neto, dan penawaran dolar di pasar valuta asing." },
          working: {
            en: "<p>Capital flight is a sudden rise in $NCO$. It shifts the <span class=\"key\">NCO curve right</span>, which adds to the <span class=\"key\">demand for loanable funds</span> (more funds go abroad) and increases the <span class=\"key\">supply of dollars</span> in the foreign-currency market. All three shift right.</p>",
            id: "<p>Pelarian modal adalah lonjakan $NCO$. Ini menggeser <span class=\"key\">kurva NCO ke kanan</span>, menambah <span class=\"key\">permintaan dana pinjaman</span> (lebih banyak dana ke luar negeri) dan meningkatkan <span class=\"key\">penawaran dolar</span> di pasar valuta asing. Ketiganya bergeser ke kanan.</p>"
          }
        },
        {
          n: 8,
          q: {
            en: "Other things the same, a higher real interest rate",
            id: "Dengan hal lain tetap, suku bunga riil yang lebih tinggi"
          },
          options: {
            en: ["a. decreases the quantity of loanable funds supplied.", "b. raises domestic investment.", "c. raises loanable funds demanded.", "d. raises the quantity of loanable funds supplied."],
            id: ["a. menurunkan jumlah dana pinjaman yang ditawarkan.", "b. menaikkan investasi domestik.", "c. menaikkan dana pinjaman yang diminta.", "d. menaikkan jumlah dana pinjaman yang ditawarkan."]
          },
          answer: { en: "d. raises the quantity of loanable funds supplied.", id: "d. menaikkan jumlah dana pinjaman yang ditawarkan." },
          working: {
            en: "<p>The supply of loanable funds (saving) slopes <span class=\"key\">upward</span>: a higher $r$ rewards saving, so the quantity supplied rises. (Higher $r$ lowers the quantity demanded / investment, ruling out b and c.)</p>",
            id: "<p>Kurva penawaran dana pinjaman (tabungan) memiliki kemiringan <span class=\"key\">positif</span>: $r$ yang lebih tinggi memberi imbalan menabung, sehingga jumlah yang ditawarkan naik. ($r$ lebih tinggi menurunkan jumlah yang diminta / investasi, menyingkirkan b dan c.)</p>"
          }
        },
        {
          n: 9,
          q: {
            en: "When looking at a graph of aggregate demand, which of the following is correct?",
            id: "Saat melihat grafik permintaan agregat, pernyataan berikut manakah yang benar?"
          },
          options: {
            en: ["a. There are nominal variables on both the vertical and the horizontal axes.", "b. There are real variables on both the vertical and horizontal axes.", "c. The variable on the vertical axis is nominal; the variable on the horizontal axis is real.", "d. The variable on the vertical axis is real; the variable on the horizontal axis is nominal."],
            id: ["a. Terdapat variabel nominal pada sumbu vertikal maupun horizontal.", "b. Terdapat variabel riil pada sumbu vertikal maupun horizontal.", "c. Variabel pada sumbu vertikal nominal; variabel pada sumbu horizontal riil.", "d. Variabel pada sumbu vertikal riil; variabel pada sumbu horizontal nominal."]
          },
          answer: { en: "c. The variable on the vertical axis is nominal; the variable on the horizontal axis is real.", id: "c. Variabel pada sumbu vertikal nominal; variabel pada sumbu horizontal riil." },
          working: {
            en: "<p>On the AD diagram the vertical axis is the <span class=\"key\">price level $P$ (nominal)</span> and the horizontal axis is <span class=\"key\">real GDP, $Y$ (real)</span>.</p>",
            id: "<p>Pada diagram AD, sumbu vertikal adalah <span class=\"key\">tingkat harga $P$ (nominal)</span> dan sumbu horizontal adalah <span class=\"key\">PDB riil, $Y$ (riil)</span>.</p>"
          }
        },
        {
          n: 10,
          q: {
            en: "Refer to Figure 1 above. Suppose the economy starts at R. If changes occur that move the economy to a new short-run equilibrium of $P_1$ and $Y_1$, then it must be the case that",
            id: "Merujuk pada Gambar 1 di atas. Misalkan perekonomian mulai di titik R. Jika terjadi perubahan yang menggerakkan perekonomian ke keseimbangan jangka pendek baru $P_1$ dan $Y_1$, maka pastilah terjadi bahwa"
          },
          options: {
            en: ["a. short-run aggregate supply has decreased.", "b. short-run aggregate supply has increased.", "c. aggregate demand has increased.", "d. aggregate demand has decreased."],
            id: ["a. penawaran agregat jangka pendek telah menurun.", "b. penawaran agregat jangka pendek telah meningkat.", "c. permintaan agregat telah meningkat.", "d. permintaan agregat telah menurun."]
          },
          qChart: { panels: [{ title: 'Figure 1', w: 440, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD' },
              { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' } ],
            points: [ { on: ['AD', 'SRAS'], label: 'R', dot: true } ] }] },
          answer: { en: "d. aggregate demand has decreased.", id: "d. permintaan agregat telah menurun." },
          working: {
            en: "<p>Moving to a <span class=\"key\">lower</span> price level $P_1$ and a <span class=\"key\">lower</span> output $Y_1$ traces a movement down-left along the SRAS curve. Both falling together is the signature of a <span class=\"key\">leftward shift in AD</span>. (A SRAS shift would move $P$ and $Y$ in opposite directions.)</p>",
            id: "<p>Bergerak ke tingkat harga $P_1$ yang <span class=\"key\">lebih rendah</span> dan output $Y_1$ yang <span class=\"key\">lebih rendah</span> menelusuri pergerakan turun-ke-kiri sepanjang kurva SRAS. Keduanya turun bersamaan adalah ciri <span class=\"key\">pergeseran AD ke kiri</span>. (Pergeseran SRAS akan menggerakkan $P$ dan $Y$ ke arah berlawanan.)</p>"
          },
          aChart: { panels: [{ title: 'AD decreases: R→new SR eqm', w: 440, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD1', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [0.5, 6], p2: [7, 0.5], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' } ],
            points: [ { on: ['AD1', 'SRAS'], label: 'R', dot: true }, { on: ['AD2', 'SRAS'], label: 'new', dot: true, guideY: 'P₁', guideX: 'Y₁' } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] }] }
        },
        {
          n: 11,
          q: {
            en: "Which of the following would shift the long-run aggregate supply curve right?",
            id: "Manakah yang akan menggeser kurva penawaran agregat jangka panjang ke kanan?"
          },
          options: {
            en: ["a. Both an increase in the capital stock and an increase in the price level", "b. An increase in the capital stock, but not an increase in the price level", "c. An increase in the money supply, but not an increase in the capital stock", "d. Neither an increase in the money supply nor an increase in the capital stock"],
            id: ["a. Kenaikan stok modal sekaligus kenaikan tingkat harga", "b. Kenaikan stok modal, tetapi bukan kenaikan tingkat harga", "c. Kenaikan jumlah uang beredar, tetapi bukan kenaikan stok modal", "d. Bukan kenaikan jumlah uang beredar maupun kenaikan stok modal"]
          },
          answer: { en: "b. An increase in the capital stock, but not an increase in the price level", id: "b. Kenaikan stok modal, tetapi bukan kenaikan tingkat harga" },
          working: {
            en: "<p>LRAS depends on <span class=\"key\">real</span> factors (labor, capital, resources, technology). More capital raises potential output → LRAS shifts right. The price level and money supply are nominal — they do not move LRAS.</p>",
            id: "<p>LRAS bergantung pada faktor <span class=\"key\">riil</span> (tenaga kerja, modal, sumber daya, teknologi). Lebih banyak modal menaikkan output potensial → LRAS bergeser ke kanan. Tingkat harga dan jumlah uang beredar bersifat nominal — keduanya tidak menggeser LRAS.</p>"
          }
        },
        {
          n: 12,
          q: {
            en: "Which of the following would not be directly included in aggregate demand?",
            id: "Manakah yang tidak secara langsung termasuk dalam permintaan agregat?"
          },
          options: {
            en: ["a. An increase in firms' inventories", "b. Purchases of goods by households", "c. Firms' purchases of newly produced machinery", "d. Government's tax collections"],
            id: ["a. Kenaikan persediaan (inventori) perusahaan", "b. Pembelian barang oleh rumah tangga", "c. Pembelian mesin baru oleh perusahaan", "d. Penerimaan pajak pemerintah"]
          },
          answer: { en: "d. Government's tax collections", id: "d. Penerimaan pajak pemerintah" },
          working: {
            en: "<p>$AD = C + I + G + NX$. Inventory build-up is investment ($I$), household purchases are $C$, new machinery is $I$. <span class=\"key\">Tax collections</span> are a transfer to government, not spending on goods and services, so they are not directly part of AD.</p>",
            id: "<p>$AD = C + I + G + NX$. Penumpukan persediaan termasuk investasi ($I$), pembelian rumah tangga adalah $C$, mesin baru adalah $I$. <span class=\"key\">Penerimaan pajak</span> adalah pengalihan dana ke pemerintah, bukan belanja atas barang dan jasa, sehingga tidak langsung menjadi bagian AD.</p>"
          }
        },
        {
          n: 13,
          q: {
            en: "Which of the following is an example of crowding out?",
            id: "Manakah yang merupakan contoh crowding out (efek desak keluar)?"
          },
          options: {
            en: ["a. An increase in government spending increases interest rates, causing investment to fall.", "b. A decrease in private savings increases interest rates, causing investment to fall.", "c. A decrease in the money supply increases interest rates, causing investment to fall.", "d. An increase in taxes increases interest rates, causing investment to fall."],
            id: ["a. Kenaikan belanja pemerintah menaikkan suku bunga, menyebabkan investasi turun.", "b. Penurunan tabungan swasta menaikkan suku bunga, menyebabkan investasi turun.", "c. Penurunan jumlah uang beredar menaikkan suku bunga, menyebabkan investasi turun.", "d. Kenaikan pajak menaikkan suku bunga, menyebabkan investasi turun."]
          },
          answer: { en: "a. An increase in government spending increases interest rates, causing investment to fall.", id: "a. Kenaikan belanja pemerintah menaikkan suku bunga, menyebabkan investasi turun." },
          working: {
            en: "<p><span class=\"key\">Crowding out</span> is when expansionary fiscal policy (more $G$) raises interest rates and thereby reduces private investment, offsetting part of the fiscal stimulus.</p>",
            id: "<p><span class=\"key\">Crowding out</span> terjadi ketika kebijakan fiskal ekspansif (kenaikan $G$) menaikkan suku bunga sehingga menurunkan investasi swasta, mengimbangi sebagian stimulus fiskal.</p>"
          }
        },
        {
          n: 14,
          q: {
            en: "Monetary policy",
            id: "Kebijakan moneter"
          },
          options: {
            en: ["a. must be described in terms of interest-rate targets.", "b. must be described in terms of money-supply targets.", "c. can be described either in terms of the money supply or in terms of the interest rate.", "d. cannot be accurately described in terms of the interest rate or in terms of the money supply."],
            id: ["a. harus dijelaskan dalam bentuk target suku bunga.", "b. harus dijelaskan dalam bentuk target jumlah uang beredar.", "c. dapat dijelaskan baik dalam bentuk jumlah uang beredar maupun suku bunga.", "d. tidak dapat dijelaskan secara akurat dalam bentuk suku bunga maupun jumlah uang beredar."]
          },
          answer: { en: "c. can be described either in terms of the money supply or in terms of the interest rate.", id: "c. dapat dijelaskan baik dalam bentuk jumlah uang beredar maupun suku bunga." },
          working: {
            en: "<p>Because money supply and the interest rate are linked through money-market equilibrium, setting one determines the other. The central bank can frame policy <span class=\"key\">either way</span>.</p>",
            id: "<p>Karena jumlah uang beredar dan suku bunga terkait melalui keseimbangan pasar uang, menetapkan salah satu menentukan yang lain. Bank sentral dapat merumuskan kebijakan <span class=\"key\">dengan kedua cara</span>.</p>"
          }
        },
        {
          n: 15,
          q: {
            en: "Fiscal policy affects the economy",
            id: "Kebijakan fiskal memengaruhi perekonomian"
          },
          options: {
            en: ["a. only in the short run.", "b. only in the long run.", "c. in both the short and long run.", "d. in neither the short nor the long run."],
            id: ["a. hanya dalam jangka pendek.", "b. hanya dalam jangka panjang.", "c. dalam jangka pendek maupun jangka panjang.", "d. tidak dalam jangka pendek maupun jangka panjang."]
          },
          answer: { en: "c. in both the short and long run.", id: "c. dalam jangka pendek maupun jangka panjang." },
          working: {
            en: "<p>In the <span class=\"key\">short run</span> fiscal policy shifts AD (affecting output and prices); in the <span class=\"key\">long run</span> it affects saving, investment, and growth (e.g. crowding out, capital accumulation). So it matters in both horizons.</p>",
            id: "<p>Dalam <span class=\"key\">jangka pendek</span> kebijakan fiskal menggeser AD (memengaruhi output dan harga); dalam <span class=\"key\">jangka panjang</span> memengaruhi tabungan, investasi, dan pertumbuhan (mis. crowding out, akumulasi modal). Jadi berpengaruh pada kedua horizon.</p>"
          }
        },
        {
          n: 16,
          q: {
            en: "Suppose there is a tax decrease. To stabilize output, the Federal Reserve could",
            id: "Misalkan terjadi penurunan pajak. Untuk menstabilkan output, The Fed (bank sentral) dapat"
          },
          options: {
            en: ["a. decrease government spending.", "b. decrease the money supply.", "c. increase government spending.", "d. increase the money supply."],
            id: ["a. menurunkan belanja pemerintah.", "b. menurunkan jumlah uang beredar.", "c. menaikkan belanja pemerintah.", "d. menaikkan jumlah uang beredar."]
          },
          answer: { en: "b. decrease the money supply.", id: "b. menurunkan jumlah uang beredar." },
          working: {
            en: "<p>A tax cut is expansionary, shifting AD right. To offset it, the Fed runs <span class=\"key\">contractionary monetary policy</span> — reduce the money supply (raising $r$ and shifting AD back). Note government spending is fiscal, not a Fed tool.</p>",
            id: "<p>Penurunan pajak bersifat ekspansif, menggeser AD ke kanan. Untuk mengimbanginya, The Fed menjalankan <span class=\"key\">kebijakan moneter kontraktif</span> — menurunkan jumlah uang beredar (menaikkan $r$ dan menggeser AD kembali). Perhatikan belanja pemerintah adalah alat fiskal, bukan alat The Fed.</p>"
          }
        },
        {
          n: 17,
          q: {
            en: "From 2008-2009 the Federal Reserve created a very large increase in the money supply. According to the short-run Phillips curve this policy should have",
            id: "Pada 2008-2009 The Fed menciptakan kenaikan jumlah uang beredar yang sangat besar. Menurut kurva Phillips jangka pendek, kebijakan ini seharusnya"
          },
          options: {
            en: ["a. raised inflation and unemployment.", "b. raised inflation and reduced unemployment.", "c. reduced inflation and raised unemployment.", "d. reduced inflation and unemployment."],
            id: ["a. menaikkan inflasi dan pengangguran.", "b. menaikkan inflasi dan menurunkan pengangguran.", "c. menurunkan inflasi dan menaikkan pengangguran.", "d. menurunkan inflasi dan pengangguran."]
          },
          answer: { en: "b. raised inflation and reduced unemployment.", id: "b. menaikkan inflasi dan menurunkan pengangguran." },
          working: {
            en: "<p>Expansionary monetary policy shifts AD right → higher inflation and, along the <span class=\"key\">downward-sloping short-run Phillips curve</span>, lower unemployment.</p>",
            id: "<p>Kebijakan moneter ekspansif menggeser AD ke kanan → inflasi lebih tinggi dan, sepanjang <span class=\"key\">kurva Phillips jangka pendek yang melandai turun</span>, pengangguran lebih rendah.</p>"
          }
        },
        {
          n: 18,
          q: {
            en: "The short-run Phillips curve shows the combinations of",
            id: "Kurva Phillips jangka pendek menunjukkan kombinasi"
          },
          options: {
            en: ["a. unemployment and inflation that arise in the short run as aggregate demand shifts the economy along the short-run aggregate supply curve.", "b. unemployment and inflation that arise in the short run as short-run aggregate supply shifts the economy along the aggregate demand curve.", "c. real GDP and the price level that arise in the short run as short-run aggregate supply shifts the economy along the aggregate demand curve.", "d. real GDP and the price level that arise in the short run as aggregate demand shifts the economy along the short-run aggregate supply curve."],
            id: ["a. pengangguran dan inflasi yang muncul dalam jangka pendek saat permintaan agregat menggerakkan perekonomian sepanjang kurva penawaran agregat jangka pendek.", "b. pengangguran dan inflasi yang muncul dalam jangka pendek saat penawaran agregat jangka pendek menggerakkan perekonomian sepanjang kurva permintaan agregat.", "c. PDB riil dan tingkat harga yang muncul dalam jangka pendek saat penawaran agregat jangka pendek menggerakkan perekonomian sepanjang kurva permintaan agregat.", "d. PDB riil dan tingkat harga yang muncul dalam jangka pendek saat permintaan agregat menggerakkan perekonomian sepanjang kurva penawaran agregat jangka pendek."]
          },
          answer: { en: "a. unemployment and inflation that arise in the short run as aggregate demand shifts the economy along the short-run aggregate supply curve.", id: "a. pengangguran dan inflasi yang muncul dalam jangka pendek saat permintaan agregat menggerakkan perekonomian sepanjang kurva penawaran agregat jangka pendek." },
          working: {
            en: "<p>The short-run Phillips curve plots <span class=\"key\">unemployment vs inflation</span>. It is the mirror image of AD shifts moving the economy along the upward-sloping SRAS curve.</p>",
            id: "<p>Kurva Phillips jangka pendek memetakan <span class=\"key\">pengangguran vs inflasi</span>. Ia merupakan cerminan dari pergeseran AD yang menggerakkan perekonomian sepanjang kurva SRAS yang naik.</p>"
          }
        },
        {
          n: 19,
          q: {
            en: "Suppose Indonesians become optimistic about the future of the economy and, as a result, increase their current consumption expenditures. Which of the following would you expect to occur as a result of this change?",
            id: "Misalkan masyarakat Indonesia menjadi optimistis terhadap masa depan perekonomian dan, akibatnya, meningkatkan pengeluaran konsumsi mereka saat ini. Manakah yang Anda perkirakan terjadi akibat perubahan ini?"
          },
          options: {
            en: ["a. In the short run, unemployment will decrease and inflation will rise.", "b. In the short run, unemployment will decrease and inflation will fall.", "c. In the short run, unemployment will increase and inflation will fall.", "d. In the short run, unemployment will increase and inflation will rise."],
            id: ["a. Dalam jangka pendek, pengangguran turun dan inflasi naik.", "b. Dalam jangka pendek, pengangguran turun dan inflasi turun.", "c. Dalam jangka pendek, pengangguran naik dan inflasi turun.", "d. Dalam jangka pendek, pengangguran naik dan inflasi naik."]
          },
          answer: { en: "a. In the short run, unemployment will decrease and inflation will rise.", id: "a. Dalam jangka pendek, pengangguran turun dan inflasi naik." },
          working: {
            en: "<p>Higher consumption shifts AD right → output and prices rise (higher inflation) and unemployment falls. This is a movement up the <span class=\"key\">short-run Phillips curve</span>.</p>",
            id: "<p>Konsumsi yang lebih tinggi menggeser AD ke kanan → output dan harga naik (inflasi lebih tinggi) dan pengangguran turun. Ini adalah pergerakan ke atas sepanjang <span class=\"key\">kurva Phillips jangka pendek</span>.</p>"
          }
        },
        {
          n: 20,
          q: {
            en: "Milton Friedman and Edmund Phelps argued in the late 1960s that in the long run the Phillips curve is",
            id: "Milton Friedman dan Edmund Phelps berpendapat pada akhir 1960-an bahwa dalam jangka panjang kurva Phillips adalah"
          },
          options: {
            en: ["a. downward-sloping, which implies that monetary and fiscal policies can influence the level of unemployment in the long run.", "b. downward-sloping, which implies that monetary and fiscal policies cannot influence the rate of inflation in the long run.", "c. vertical, which implies that monetary and fiscal policies cannot influence the level of unemployment in the long run.", "d. vertical, which implies that monetary and fiscal policies cannot influence the rate of inflation in the long run."],
            id: ["a. melandai turun, menyiratkan kebijakan moneter dan fiskal dapat memengaruhi tingkat pengangguran dalam jangka panjang.", "b. melandai turun, menyiratkan kebijakan moneter dan fiskal tidak dapat memengaruhi laju inflasi dalam jangka panjang.", "c. vertikal, menyiratkan kebijakan moneter dan fiskal tidak dapat memengaruhi tingkat pengangguran dalam jangka panjang.", "d. vertikal, menyiratkan kebijakan moneter dan fiskal tidak dapat memengaruhi laju inflasi dalam jangka panjang."]
          },
          answer: { en: "c. vertical, which implies that monetary and fiscal policies cannot influence the level of unemployment in the long run.", id: "c. vertikal, menyiratkan kebijakan moneter dan fiskal tidak dapat memengaruhi tingkat pengangguran dalam jangka panjang." },
          working: {
            en: "<p>Friedman and Phelps argued the long-run Phillips curve is <span class=\"key\">vertical at the natural rate of unemployment</span>. Policy can change inflation but not the long-run unemployment rate (no permanent inflation–unemployment trade-off).</p>",
            id: "<p>Friedman dan Phelps berpendapat kurva Phillips jangka panjang <span class=\"key\">vertikal pada tingkat pengangguran alamiah</span>. Kebijakan dapat mengubah inflasi tetapi bukan tingkat pengangguran jangka panjang (tidak ada trade-off inflasi–pengangguran permanen).</p>"
          },
          aChart: { panels: [{ title: 'Long-run Phillips curve (vertical)', w: 420, h: 300, x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
            curves: [ { id: 'LRPC', kind: 'vline', x: 5, color: '#444', label: 'LRPC' },
              { id: 'SRPC', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'SRPC' } ],
            points: [ { on: ['LRPC', 'SRPC'], label: 'natural rate', dot: true, guideX: 'uₙ' } ] }] }
        }
      ]
    },
    {
      kind: 'essay',
      label: { en: 'Essay', id: 'Esai' },
      questions: [
        {
          n: 1,
          q: {
            en: "What is the logic behind the theory of purchasing-power parity?",
            id: "Apa logika di balik teori paritas daya beli (purchasing-power parity)?"
          },
          answer: {
            en: "<p>The logic behind purchasing-power parity is the <span class=\"key\">law of one price</span>, which asserts that a good must sell for the same price in all locations. If the price for a good is higher in one market than in another, someone can make a profit by purchasing the good where it is relatively cheap and selling it where it is relatively expensive. This process of <span class=\"key\">arbitrage</span> leads to an equalization of prices for the good in all locations.</p><div class=\"note\">If PPP holds, the amount of Indonesian rupiahs it takes to buy a good in Indonesia should buy enough foreign currency to buy the same good in a foreign country.</div>",
            id: "<p>Logika di balik paritas daya beli adalah <span class=\"key\">hukum satu harga (law of one price)</span>, yang menyatakan bahwa sebuah barang harus terjual dengan harga yang sama di semua lokasi. Jika harga suatu barang lebih tinggi di satu pasar dibanding pasar lain, seseorang dapat memperoleh keuntungan dengan membeli barang itu di tempat yang relatif murah dan menjualnya di tempat yang relatif mahal. Proses <span class=\"key\">arbitrase</span> ini menyamakan harga barang di semua lokasi.</p><div class=\"note\">Jika PPP berlaku, jumlah rupiah yang diperlukan untuk membeli suatu barang di Indonesia seharusnya cukup untuk membeli valuta asing yang dapat membeli barang yang sama di luar negeri.</div>"
          }
        },
        {
          n: 2,
          q: {
            en: "Suppose a presidential candidate promises to increase the government budget surplus and claims that doing so will stop U.S. citizens from investing in foreign companies and increase the value of the dollar. Evaluate this candidate's promise.",
            id: "Misalkan seorang calon presiden berjanji menaikkan surplus anggaran pemerintah dan mengklaim bahwa hal itu akan menghentikan warga AS berinvestasi di perusahaan asing serta menaikkan nilai dolar. Evaluasilah janji calon ini."
          },
          answer: {
            en: "<p>The promise is <span class=\"key\">backwards</span>. An increase in the government budget surplus raises national saving, which increases the supply of loanable funds and causes U.S. interest rates to <span class=\"key\">fall</span>.</p><p>The decline in interest rates raises domestic investment, but it also causes Americans to look for higher returns abroad, so <span class=\"key\">net capital outflow rises rather than falls</span> as promised. To take advantage of those higher foreign returns, Americans supply more dollars in the foreign-currency exchange market, so the dollar <span class=\"key\">depreciates rather than appreciates</span> as promised.</p><div class=\"formula\">Surplus↑ → $S$↑ → $r$↓ → $NCO$↑ → supply of \\$ ↑ → \\$ depreciates</div>",
            id: "<p>Janji itu <span class=\"key\">terbalik</span>. Kenaikan surplus anggaran pemerintah menaikkan tabungan nasional, yang menambah penawaran dana pinjaman dan menyebabkan suku bunga AS <span class=\"key\">turun</span>.</p><p>Penurunan suku bunga menaikkan investasi domestik, tetapi juga membuat warga AS mencari imbal hasil lebih tinggi di luar negeri, sehingga <span class=\"key\">arus modal keluar neto naik, bukan turun</span> seperti yang dijanjikan. Untuk memanfaatkan imbal hasil asing yang lebih tinggi itu, warga AS menawarkan lebih banyak dolar di pasar valuta asing, sehingga dolar <span class=\"key\">terdepresiasi, bukan terapresiasi</span> seperti yang dijanjikan.</p><div class=\"formula\">Surplus↑ → $S$↑ → $r$↓ → $NCO$↑ → penawaran \\$ ↑ → \\$ terdepresiasi</div>"
          }
        },
        {
          n: 3,
          q: {
            en: "Keynes thought that the behavior of the economy in the short run was influenced by what he called \"animal spirits.\" By this he meant that business people sometimes felt good about the economy, and carried out lots of investment, and at other times felt bad about the economy, and so cut back on their investment spending. Explain how such fluctuations in investment would lead to fluctuations in real GDP and prices.",
            id: "Keynes berpendapat bahwa perilaku perekonomian dalam jangka pendek dipengaruhi oleh apa yang ia sebut \"animal spirits.\" Maksudnya, pelaku usaha kadang merasa optimistis terhadap perekonomian dan melakukan banyak investasi, dan di lain waktu merasa pesimistis sehingga memangkas belanja investasi mereka. Jelaskan bagaimana fluktuasi investasi semacam itu menimbulkan fluktuasi PDB riil dan harga."
          },
          answer: {
            en: "<p>Fluctuations in investment cause the <span class=\"key\">aggregate demand curve to shift</span>. If the aggregate demand curve shifts to the <span class=\"key\">right</span> (optimism, more investment), real GDP and the price level <span class=\"key\">rise</span>. If the aggregate demand curve shifts to the <span class=\"key\">left</span> (pessimism, less investment), real GDP and the price level <span class=\"key\">fall</span>. So erratic movements in investment can cause fluctuations in output and prices.</p>",
            id: "<p>Fluktuasi investasi menyebabkan <span class=\"key\">kurva permintaan agregat bergeser</span>. Jika kurva AD bergeser ke <span class=\"key\">kanan</span> (optimisme, investasi naik), PDB riil dan tingkat harga <span class=\"key\">naik</span>. Jika kurva AD bergeser ke <span class=\"key\">kiri</span> (pesimisme, investasi turun), PDB riil dan tingkat harga <span class=\"key\">turun</span>. Jadi pergerakan investasi yang tak menentu dapat menyebabkan fluktuasi output dan harga.</p>"
          },
          aChart: { panels: [{ title: 'Investment swings shift AD', w: 440, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD1', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'AD₁' },
              { id: 'AD2', kind: 'line', p1: [3, 9], p2: [10.5, 3], color: '#c0392b', label: 'AD₂', dash: true },
              { id: 'SRAS', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS' },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' } ],
            points: [ { on: ['AD1', 'SRAS'], label: 'A', dot: true }, { on: ['AD2', 'SRAS'], label: 'B', dot: true } ],
            shifts: [ { from: 'AD1', to: 'AD2' } ] }] }
        },
        {
          n: 4,
          q: {
            en: "Explain why the interest rate is the opportunity cost of holding currency. What is the benefit of holding currency?",
            id: "Jelaskan mengapa suku bunga merupakan biaya peluang (opportunity cost) memegang uang tunai. Apa manfaat memegang uang tunai?"
          },
          answer: {
            en: "<p>The nominal interest rate on currency is <span class=\"key\">zero</span>. The next-best alternative is to buy a bond and earn interest. By holding currency instead of a bond, you forgo that interest — so the <span class=\"key\">interest rate is the opportunity cost</span> of holding currency.</p><p><b>Benefit:</b> currency is used as a <span class=\"key\">medium of exchange</span>. Bonds are illiquid and so are costly to convert to a medium of exchange; currency lets you transact immediately.</p>",
            id: "<p>Suku bunga nominal atas uang tunai adalah <span class=\"key\">nol</span>. Alternatif terbaik berikutnya adalah membeli obligasi dan memperoleh bunga. Dengan memegang uang tunai alih-alih obligasi, Anda kehilangan bunga tersebut — sehingga <span class=\"key\">suku bunga adalah biaya peluang</span> memegang uang tunai.</p><p><b>Manfaat:</b> uang tunai dipakai sebagai <span class=\"key\">alat tukar</span>. Obligasi tidak likuid sehingga mahal untuk dikonversi menjadi alat tukar; uang tunai memungkinkan Anda bertransaksi seketika.</p>"
          }
        },
        {
          n: 5,
          q: {
            en: "If asset prices fall and inflation expectations remain unchanged, what happens to inflation and unemployment? Defend your answer.",
            id: "Jika harga aset turun dan ekspektasi inflasi tetap, apa yang terjadi pada inflasi dan pengangguran? Pertahankan jawaban Anda."
          },
          answer: {
            en: "<p><span class=\"key\">Inflation falls and unemployment rises.</span> The decrease in asset prices makes households poorer, so consumption falls. Lower consumption shifts <span class=\"key\">aggregate demand left</span>, making prices and output fall. This decrease in demand can be shown as a <span class=\"key\">downward movement along a short-run Phillips curve</span>: lower inflation paired with higher unemployment.</p>",
            id: "<p><span class=\"key\">Inflasi turun dan pengangguran naik.</span> Penurunan harga aset membuat rumah tangga lebih miskin, sehingga konsumsi turun. Konsumsi yang lebih rendah menggeser <span class=\"key\">permintaan agregat ke kiri</span>, sehingga harga dan output turun. Penurunan permintaan ini dapat ditunjukkan sebagai <span class=\"key\">pergerakan turun sepanjang kurva Phillips jangka pendek</span>: inflasi lebih rendah berpasangan dengan pengangguran lebih tinggi.</p>"
          },
          aChart: { panels: [{ title: 'Lower demand: down the SRPC', w: 420, h: 300, x: { min: 0, max: 10, label: 'u' }, y: { min: 0, max: 10, label: 'π' },
            curves: [ { id: 'SRPC', kind: 'line', p1: [1, 8], p2: [9, 2], color: '#c0392b', label: 'SRPC' } ],
            points: [ { onCurve: 'SRPC', atX: 3, label: 'A', dot: true }, { onCurve: 'SRPC', atX: 7, label: 'B', dot: true } ] }] }
        },
        {
          n: 6,
          q: {
            en: "Suppose that a decrease in the demand for goods and services pushes the economy into recession. What happens to the price level? If the government does nothing, what ensures that the economy still eventually gets back to the natural rate of output?",
            id: "Misalkan penurunan permintaan barang dan jasa mendorong perekonomian ke resesi. Apa yang terjadi pada tingkat harga? Jika pemerintah tidak melakukan apa pun, apa yang memastikan perekonomian tetap akhirnya kembali ke tingkat output alamiah?"
          },
          answer: {
            en: "<p>A decrease in aggregate demand causes the <span class=\"key\">price level to fall</span>. If the government takes no action to counter this, the actual price level will be below the level people expected.</p><p>Individuals will eventually correct their expectations of the price level. As they do so, prices and wages adjust, shifting the <span class=\"key\">short-run aggregate supply curve right</span>. For example, with sticky wages, in light of the lower price level firms and workers eventually bargain for lower nominal wages. The reduction in wages lowers production costs, so firms are willing to produce more at any given price level. Consequently SRAS shifts right, and this <span class=\"key\">self-correcting mechanism</span> eventually returns output to the <span class=\"key\">natural rate</span>.</p>",
            id: "<p>Penurunan permintaan agregat menyebabkan <span class=\"key\">tingkat harga turun</span>. Jika pemerintah tidak mengambil tindakan untuk melawannya, tingkat harga aktual akan berada di bawah tingkat yang diharapkan orang.</p><p>Individu pada akhirnya akan mengoreksi ekspektasi tingkat harga mereka. Saat itu terjadi, harga dan upah menyesuaikan, menggeser <span class=\"key\">kurva penawaran agregat jangka pendek ke kanan</span>. Misalnya, dengan upah yang kaku (sticky), mengingat tingkat harga yang lebih rendah, perusahaan dan pekerja akhirnya menyepakati upah nominal yang lebih rendah. Penurunan upah menurunkan biaya produksi, sehingga perusahaan bersedia memproduksi lebih banyak pada tingkat harga berapa pun. Akibatnya SRAS bergeser ke kanan, dan <span class=\"key\">mekanisme koreksi-mandiri</span> ini akhirnya mengembalikan output ke <span class=\"key\">tingkat alamiah</span>.</p>"
          },
          aChart: { panels: [{ title: 'Self-correction: SRAS shifts right', w: 440, h: 300, x: { min: 0, max: 10, label: 'Y' }, y: { min: 0, max: 10, label: 'P' },
            curves: [ { id: 'AD', kind: 'line', p1: [0.5, 6], p2: [7, 0.5], color: '#c0392b', label: 'AD₂' },
              { id: 'S1', kind: 'line', p1: [1, 2], p2: [9, 8], color: '#0e8fb8', label: 'SRAS₁' },
              { id: 'S2', kind: 'line', p1: [-1.5, 2], p2: [6.5, 8], color: '#0e8fb8', label: 'SRAS₂', dash: true },
              { id: 'LRAS', kind: 'vline', x: 5, color: '#444', label: 'LRAS' } ],
            points: [ { on: ['AD', 'S1'], label: 'recession', dot: true }, { on: ['AD', 'S2'], label: 'back to Yₙ', dot: true } ],
            shifts: [ { from: 'S1', to: 'S2' } ] }] }
        },
        {
          n: 7,
          q: {
            en: "Why do many economists advocate a consumption tax rather than an income tax?",
            id: "Mengapa banyak ekonom menganjurkan pajak konsumsi ketimbang pajak penghasilan?"
          },
          answer: {
            en: "<p>The current income tax means that income is taxed at the same rate whether it is used for current consumption or is saved. A <span class=\"key\">consumption tax</span> would tax individuals only when they spend, so income that is saved would be exempt from tax until it is ultimately used for consumption.</p><p>Because saving is no longer penalized, a consumption tax <span class=\"key\">encourages saving</span>. Higher saving raises the supply of loanable funds, lowers interest rates, and boosts investment and long-run growth.</p>",
            id: "<p>Pajak penghasilan saat ini berarti penghasilan dikenai pajak dengan tarif yang sama, baik digunakan untuk konsumsi saat ini maupun ditabung. <span class=\"key\">Pajak konsumsi</span> hanya mengenakan pajak pada individu saat mereka membelanjakan, sehingga penghasilan yang ditabung dibebaskan dari pajak hingga akhirnya dipakai untuk konsumsi.</p><p>Karena menabung tidak lagi dihukum, pajak konsumsi <span class=\"key\">mendorong tabungan</span>. Tabungan yang lebih tinggi menambah penawaran dana pinjaman, menurunkan suku bunga, serta meningkatkan investasi dan pertumbuhan jangka panjang.</p>"
          }
        }
      ]
    }
  ]
};
