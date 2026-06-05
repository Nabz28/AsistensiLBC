/* ESP Unit 2 — State revenue & the economics of taxation. Source: Kuliah 9. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u2 = {
    id: 'u2',
    label: { en: 'Unit 2', id: 'Unit 2' },
    title: { en: 'State Revenue & the Economics of Taxation', id: 'Pendapatan Negara & Ekonomi Perpajakan' },
    subtitle: { en: 'Principles of taxation · PPh · PPN · excise · tax expenditure · tax ratio & buoyancy · BEPS', id: 'Prinsip perpajakan · PPh · PPN · cukai · belanja perpajakan · tax ratio & buoyancy · BEPS' },

    notes: [
      {
        heading: { en: 'What tax is, and the principles', id: 'Apa itu pajak, dan prinsipnya' }, num: '1',
        cards: [
          { title: { en: 'Definition (UUD 1945 Pasal 23A)', id: 'Definisi (UUD 1945 Pasal 23A)' },
            html: { en: '<p><span class="key">Pajak</span> is a <b>compulsory</b> payment by individuals or firms to the state, <b>with no direct counter-service</b> (tanpa balas jasa langsung), used to finance public services, infrastructure and social protection. "Segala pajak untuk keperluan negara berdasarkan undang-undang."</p>' +
              '<p>Indonesian revenue (<i>Pendapatan Negara</i>) = <b>Perpajakan</b> (Pajak + Kepabeanan & Cukai) + <b>PNBP</b> (natural resources, K/L services, BLU) + <b>Hibah</b>. Perpajakan is ~85% of the APBN target.</p>', id: '<p><span class="key">Pajak</span> adalah pembayaran <b>wajib</b> oleh individu atau perusahaan kepada negara, <b>tanpa balas jasa langsung</b> (tanpa balas jasa langsung), untuk membiayai layanan publik, infrastruktur, dan perlindungan sosial. "Segala pajak untuk keperluan negara berdasarkan undang-undang."</p>' +
              '<p>Pendapatan Negara (<i>Pendapatan Negara</i>) = <b>Perpajakan</b> (Pajak + Kepabeanan & Cukai) + <b>PNBP</b> (sumber daya alam, layanan K/L, BLU) + <b>Hibah</b>. Perpajakan mencakup ~85% target APBN.</p>' } },
          { title: { en: 'Five principles of a good tax system', id: 'Lima prinsip sistem pajak yang baik' },
            html: { en: '<table><thead><tr><th>Principle</th><th>Meaning</th></tr></thead><tbody>' +
              '<tr><td><b>Economic efficiency</b></td><td>Minimise distortion of allocation (behavioural, financial, organizational, announcement, general-equilibrium effects).</td></tr>' +
              '<tr><td><b>Fairness</b></td><td><span class="key">Horizontal equity</span> (equal circumstances → equal tax) and <span class="key">vertical equity</span> (greater ability to pay → more tax).</td></tr>' +
              '<tr><td><b>Administrative simplicity</b></td><td>Low cost of administration and compliance.</td></tr>' +
              '<tr><td><b>Flexibility</b></td><td>Easy to adapt to changed circumstances.</td></tr>' +
              '<tr><td><b>Political responsibility</b></td><td>Transparency — taxpayers can see what they pay.</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Policy vs administration: <b>tax policy</b> sets subject, object, rate; <b>tax administration</b> sets procedure & mechanism.</div>', id: '<table><thead><tr><th>Prinsip</th><th>Makna</th></tr></thead><tbody>' +
              '<tr><td><b>Efisiensi ekonomi</b></td><td>Meminimalkan distorsi alokasi (efek behavioural, finansial, organizational, announcement, general-equilibrium).</td></tr>' +
              '<tr><td><b>Keadilan</b></td><td><span class="key">Horizontal equity</span> (keadaan sama → pajak sama) dan <span class="key">vertical equity</span> (kemampuan bayar lebih besar → pajak lebih besar).</td></tr>' +
              '<tr><td><b>Kesederhanaan administrasi</b></td><td>Biaya administrasi dan kepatuhan rendah.</td></tr>' +
              '<tr><td><b>Fleksibilitas</b></td><td>Mudah disesuaikan dengan perubahan keadaan.</td></tr>' +
              '<tr><td><b>Tanggung jawab politik</b></td><td>Transparansi — wajib pajak dapat melihat apa yang mereka bayar.</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Kebijakan vs administrasi: <b>kebijakan pajak (tax policy)</b> menetapkan subjek, objek, tarif; <b>administrasi pajak (tax administration)</b> menetapkan prosedur & mekanisme.</div>' } },
          { title: { en: 'Economic efficiency — the five distortion effects', id: 'Efisiensi ekonomi — lima efek distorsi' },
            html: { en: '<p>An ideal tax does <b>not distort</b> allocative efficiency. In practice every tax changes behaviour. The deck identifies five channels:</p>' +
              '<ul>' +
              '<li><b>Behavioural effect</b> — tax alters choices on the labour market, education, saving, consumption, pensions, risk-taking (investment), R&D and ultimately long-run growth.</li>' +
              '<li><b>Financial effect</b> — the design of the tax can make economically similar resources be treated differently depending on the funding channel (e.g. insuring a worker directly vs through the employer; financing a firm by debt vs by issuing stock).</li>' +
              '<li><b>Organizational effect</b> — tax shapes how the economy organises itself: different schemes for PT (limited company), cooperatives and yayasan (NGO); whether to form one big firm or several small ones (tax applies to "external" but not "internal" consumption).</li>' +
              '<li><b>Announcement effect</b> — the mere <i>announcement</i> of a future tax change shifts behaviour and asset prices today (capitalization), before it even takes effect.</li>' +
              '<li><b>General-equilibrium effect</b> — a tax on one market spills over into prices, wages and quantities in other markets through the whole price system.</li>' +
              '</ul>', id: '<p>Pajak ideal <b>tidak mendistorsi</b> efisiensi alokasi. Pada praktiknya setiap pajak mengubah perilaku. Deck mengidentifikasi lima saluran:</p>' +
              '<ul>' +
              '<li><b>Behavioural effect</b> — pajak mengubah pilihan di pasar tenaga kerja, pendidikan, tabungan, konsumsi, pensiun, pengambilan risiko (investasi), R&D, dan akhirnya pertumbuhan jangka panjang.</li>' +
              '<li><b>Financial effect</b> — desain pajak dapat membuat sumber daya yang secara ekonomi serupa diperlakukan berbeda tergantung saluran pendanaan (mis. mengasuransikan pekerja langsung vs lewat pemberi kerja; membiayai perusahaan lewat utang vs penerbitan saham).</li>' +
              '<li><b>Organizational effect</b> — pajak membentuk cara ekonomi diorganisasi: skema berbeda untuk PT, koperasi, dan yayasan; membentuk satu perusahaan besar atau beberapa kecil (pajak berlaku atas konsumsi "eksternal" bukan "internal").</li>' +
              '<li><b>Announcement effect</b> — sekadar <i>pengumuman</i> perubahan pajak ke depan sudah menggeser perilaku dan harga aset hari ini (capitalization), sebelum berlaku efektif.</li>' +
              '<li><b>General-equilibrium effect</b> — pajak pada satu pasar merembet ke harga, upah, dan kuantitas di pasar lain melalui keseluruhan sistem harga.</li>' +
              '</ul>' } },
          { title: { en: 'Fairness: horizontal vs vertical equity', id: 'Keadilan: horizontal vs vertical equity' },
            html: { en: '<p>Fairness means a tax system <b>is</b>, and is <b>seen to be</b>, fair.</p>' +
              '<ul>' +
              '<li><span class="key">Horizontal equity</span> — individuals who are identical or share essentially similar economic circumstances should be treated the same and pay the <b>same</b> tax.</li>' +
              '<li><span class="key">Vertical equity</span> — those with greater ability to pay, who are better off, or who receive greater benefit from government services should pay <b>more</b> tax. This is the justification for the progressive PPh brackets.</li>' +
              '</ul>', id: '<p>Keadilan berarti sistem pajak <b>adil</b> dan <b>terlihat adil</b>.</p>' +
              '<ul>' +
              '<li><span class="key">Horizontal equity</span> — individu yang identik atau berbagi keadaan ekonomi yang pada dasarnya serupa harus diperlakukan sama dan membayar pajak yang <b>sama</b>.</li>' +
              '<li><span class="key">Vertical equity</span> — yang kemampuan bayarnya lebih besar, lebih mampu, atau menerima manfaat lebih besar dari layanan pemerintah harus membayar pajak <b>lebih banyak</b>. Inilah dasar bracket PPh yang progresif.</li>' +
              '</ul>' } }
        ]
      },
      {
        heading: { en: 'Taxonomy of Indonesian taxes', id: 'Taksonomi pajak Indonesia' }, num: '2',
        cards: [
          { title: { en: 'Scope of "Perpajakan" in the APBN', id: 'Cakupan "Perpajakan" dalam APBN' },
            html: { en: '<p><i>Pendapatan Negara</i> = <b>Perpajakan</b> + <b>PNBP</b> + <b>Hibah</b>. <span class="key">Perpajakan</span> itself has three buckets:</p>' +
              '<ul><li><b>Penerimaan Pajak</b> — PPh, PPN, PBB.</li>' +
              '<li><b>Penerimaan Kepabeanan & Cukai</b> — bea masuk, bea keluar, cukai.</li>' +
              '<li>(PNBP sits beside Perpajakan: <b>SDA</b> natural resources, <b>layanan K/L</b>, <b>BLU</b>.)</li></ul>' +
              '<p>Perpajakan is <b>85.4%</b> of the APBN revenue target — the dominant funding source for state spending.</p>' +
              '<div class="note">💡 Two institutional units: a <b>Tax Policy Unit</b> (sets subject/object/tariff) and a <b>Tax Administration Unit</b> (procedure & mechanism). A standing exam debate: should they be merged or kept separate?</div>', id: '<p><i>Pendapatan Negara</i> = <b>Perpajakan</b> + <b>PNBP</b> + <b>Hibah</b>. <span class="key">Perpajakan</span> sendiri terdiri atas tiga kelompok:</p>' +
              '<ul><li><b>Penerimaan Pajak</b> — PPh, PPN, PBB.</li>' +
              '<li><b>Penerimaan Kepabeanan & Cukai</b> — bea masuk, bea keluar, cukai.</li>' +
              '<li>(PNBP berada di samping Perpajakan: <b>SDA</b> sumber daya alam, <b>layanan K/L</b>, <b>BLU</b>.)</li></ul>' +
              '<p>Perpajakan mencakup <b>85,4%</b> target pendapatan APBN — sumber pendanaan dominan untuk belanja negara.</p>' +
              '<div class="note">💡 Dua unit institusional: <b>Tax Policy Unit</b> (menetapkan subjek/objek/tarif) dan <b>Tax Administration Unit</b> (prosedur & mekanisme). Perdebatan ujian klasik: digabung atau dipisah?</div>' } },
          { title: { en: 'Central government taxes (Realisasi 2025 ≈ Rp 2,217.9 T = 9.31% GDP)', id: 'Pajak pemerintah pusat (Realisasi 2025 ≈ Rp 2.217,9 T = 9,31% PDB)' },
            html: { en: '<table><thead><tr><th>Group</th><th>Types</th></tr></thead><tbody>' +
              '<tr><td><b>Pajak</b></td><td><b>PPh</b> (Migas / Non-Migas); <b>PPN</b>; <b>PPnBM</b> (sales tax on luxury goods); <b>PBB P3</b> (Perkebunan, Perhutanan, Pertambangan); <b>Pajak Karbon</b>.</td></tr>' +
              '<tr><td><b>Bea & Cukai</b></td><td><b>Bea Masuk</b> (import duty); <b>Bea Keluar</b> (export duty); <b>Cukai</b> — Hasil Tembakau (rokok, cerutu, tembakau iris), MMEA (bir, wine, spirit), Etil Alkohol murni, MBDK (minuman berpemanis dalam kemasan).</td></tr>' +
              '</tbody></table>', id: '<table><thead><tr><th>Kelompok</th><th>Jenis</th></tr></thead><tbody>' +
              '<tr><td><b>Pajak</b></td><td><b>PPh</b> (Migas / Non-Migas); <b>PPN</b>; <b>PPnBM</b> (pajak penjualan atas barang mewah); <b>PBB P3</b> (Perkebunan, Perhutanan, Pertambangan); <b>Pajak Karbon</b>.</td></tr>' +
              '<tr><td><b>Bea & Cukai</b></td><td><b>Bea Masuk</b>; <b>Bea Keluar</b>; <b>Cukai</b> — Hasil Tembakau (rokok, cerutu, tembakau iris), MMEA (bir, wine, spirit), Etil Alkohol murni, MBDK (minuman berpemanis dalam kemasan).</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'Regional government taxes (Realisasi 2025 ≈ Rp 262.64 T = 1.1% GDP)', id: 'Pajak pemerintah daerah (Realisasi 2025 ≈ Rp 262,64 T = 1,1% PDB)' },
            html: { en: '<table><thead><tr><th>Level</th><th>Types</th></tr></thead><tbody>' +
              '<tr><td><b>Provinsi</b></td><td><b>PKB</b> (kendaraan bermotor), <b>BBNKB</b> (bea balik nama), <b>PBBKB</b> (bahan bakar kendaraan), <b>Pajak Air Permukaan</b>, <b>Pajak Rokok</b>.</td></tr>' +
              '<tr><td><b>Kab/Kota</b></td><td><b>Hotel, Restoran, Hiburan, Reklame, Penerangan Jalan, Mineral Bukan Logam & Batuan, Parkir, Air Tanah, Sarang Burung Walet</b>, <b>PBB-P2</b> (Perdesaan & Perkotaan), <b>BPHTB</b> (perolehan hak atas tanah & bangunan).</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Classify quickly: anything on motor vehicles, surface water, or the provincial cigarette surcharge = provincial; anything on local services (hotel/restoran/parkir), local property (PBB-P2/BPHTB) = kab/kota; PPh/PPN/cukai/bea = central.</div>', id: '<table><thead><tr><th>Tingkat</th><th>Jenis</th></tr></thead><tbody>' +
              '<tr><td><b>Provinsi</b></td><td><b>PKB</b> (kendaraan bermotor), <b>BBNKB</b> (bea balik nama), <b>PBBKB</b> (bahan bakar kendaraan), <b>Pajak Air Permukaan</b>, <b>Pajak Rokok</b>.</td></tr>' +
              '<tr><td><b>Kab/Kota</b></td><td><b>Hotel, Restoran, Hiburan, Reklame, Penerangan Jalan, Mineral Bukan Logam & Batuan, Parkir, Air Tanah, Sarang Burung Walet</b>, <b>PBB-P2</b> (Perdesaan & Perkotaan), <b>BPHTB</b> (perolehan hak atas tanah & bangunan).</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Klasifikasi cepat: apa pun atas kendaraan bermotor, air permukaan, atau pajak rokok = provinsi; apa pun atas layanan lokal (hotel/restoran/parkir), properti lokal (PBB-P2/BPHTB) = kab/kota; PPh/PPN/cukai/bea = pusat.</div>' } }
        ]
      },
      {
        heading: { en: 'PPh — income tax (deep dive)', id: 'PPh — pajak penghasilan (mendalam)' }, num: '3',
        cards: [
          { title: { en: 'Object: penghasilan (UU PPh Pasal 4(1))', id: 'Objek: penghasilan (UU PPh Pasal 4(1))' },
            html: { en: '<p><span class="key">Penghasilan</span> = <b>every addition to economic capacity</b> received or accrued by the taxpayer, from Indonesia or abroad, usable for consumption or to add to wealth — <i>in any name and any form</i>.</p>' +
              '<p>Examples that <b>are</b> income: gaji/upah/honorarium/bonus/gratifikasi/uang pensiun; laba usaha (dagang, industri, jasa); keuntungan penjualan/pengalihan harta; dividen, bunga (incl. premium/diskonto), royalti, sewa; hadiah undian & penghargaan; komisi perantara; keuntungan selisih kurs; selisih revaluasi aktiva; premi asuransi; keuntungan pembebasan utang; penghasilan usaha syariah; surplus Bank Indonesia.</p>' +
              '<div class="tip">📝 The carve-outs (warisan, hibah, bantuan/zakat, natura in some cases) are <b>not</b> objects — see the non-object card. So a wedding gift or inheritance is excluded, but a lottery prize or a company car (fasilitas/natura) generally is income.</div>', id: '<p><span class="key">Penghasilan</span> = <b>setiap tambahan kemampuan ekonomis</b> yang diterima/diperoleh Wajib Pajak, dari Indonesia maupun luar negeri, yang dapat dipakai untuk konsumsi atau menambah kekayaan — <i>dengan nama dan dalam bentuk apa pun</i>.</p>' +
              '<p>Contoh yang <b>merupakan</b> penghasilan: gaji/upah/honorarium/bonus/gratifikasi/uang pensiun; laba usaha (dagang, industri, jasa); keuntungan penjualan/pengalihan harta; dividen, bunga (termasuk premium/diskonto), royalti, sewa; hadiah undian & penghargaan; komisi perantara; keuntungan selisih kurs; selisih revaluasi aktiva; premi asuransi; keuntungan pembebasan utang; penghasilan usaha syariah; surplus Bank Indonesia.</p>' +
              '<div class="tip">📝 Pengecualian (warisan, hibah, bantuan/zakat, natura dalam hal tertentu) <b>bukan</b> objek — lihat kartu non-objek. Jadi hadiah pernikahan atau warisan dikecualikan, tetapi hadiah undian atau mobil kantor (fasilitas/natura) umumnya penghasilan.</div>' } },
          { title: { en: 'Subject: OP & Badan; who is NOT a subject', id: 'Subjek: OP & Badan; siapa BUKAN subjek' },
            html: { en: '<p>Subject = <b>Orang Pribadi (OP)</b> or <b>Badan</b>. An OP is a <span class="key">Subjek Pajak Dalam Negeri</span> if they (a) reside in Indonesia, (b) are present <b>&gt; 183 days</b> in any 12-month window, or (c) intend to reside in Indonesia.</p>' +
              '<p><b>NOT subjects</b> of PPh:</p>' +
              '<ul><li>Foreign-state representative offices; <b>diplomatic/consular officials</b> who are non-WNI, earn no income outside that office, <i>and</i> whose state grants reciprocal treatment;</li>' +
              '<li><b>International organisations</b> Indonesia is a member of, that do not run other income-earning activity in Indonesia (officials non-WNI, no other business).</li></ul>', id: '<p>Subjek = <b>Orang Pribadi (OP)</b> atau <b>Badan</b>. OP adalah <span class="key">Subjek Pajak Dalam Negeri</span> bila (a) bertempat tinggal di Indonesia, (b) berada di Indonesia <b>&gt; 183 hari</b> dalam 12 bulan, atau (c) berniat bertempat tinggal di Indonesia.</p>' +
              '<p><b>BUKAN subjek</b> PPh:</p>' +
              '<ul><li>Kantor perwakilan negara asing; <b>pejabat diplomatik/konsulat</b> negara asing yang bukan WNI, tidak memperoleh penghasilan di luar jabatan itu, <i>dan</i> negaranya memberi perlakuan timbal balik;</li>' +
              '<li><b>Organisasi Internasional</b> yang Indonesia menjadi anggotanya, yang tidak menjalankan kegiatan lain untuk memperoleh penghasilan di Indonesia (pejabatnya bukan WNI, tidak berusaha lain).</li></ul>' } },
          { title: { en: 'PPh OP: progressive brackets & deductions', id: 'PPh OP: bracket progresif & pengurang' },
            html: { en: '<p><b>PPh OP = tarif (bracket) × Penghasilan Kena Pajak (PKP)</b>, progressive, top rate <b>35% above Rp 5 bn</b>. From taxable income you may deduct:</p>' +
              '<ol>' +
              '<li><b>Biaya jabatan</b> (employees): 5% of gross, capped at <b>Rp 500,000/month or Rp 6,000,000/year</b>.</li>' +
              '<li><span class="key">PTKP</span> (since 2016): <b>Rp 54 jt</b> self; <b>+Rp 4.5 jt</b> if married; <b>+Rp 4.5 jt</b> per dependant (blood/marriage line, adopted), <b>max 3</b>; <b>+Rp 54 jt</b> if a wife’s income is combined with the husband’s.</li>' +
              '<li><b>Kompensasi kerugian fiskal</b>: a fiscal loss can be carried forward against fiscal profit for up to <b>5</b> consecutive years.</li>' +
              '<li><b>Zakat</b> / compulsory religious donation.</li>' +
              '<li>Biaya fiskal — fiscal reconciliation (taxpayers keeping books).</li>' +
              '</ol>' +
              '<div class="note">💡 PTKP is benchmarked against GDP/capita and the poverty line — it keeps low earners out of the tax net entirely.</div>', id: '<p><b>PPh OP = tarif (bracket) × Penghasilan Kena Pajak (PKP)</b>, progresif, tarif tertinggi <b>35% di atas Rp 5 miliar</b>. Dari penghasilan kena pajak dapat dikurangkan:</p>' +
              '<ol>' +
              '<li><b>Biaya jabatan</b> (karyawan): 5% dari bruto, maksimal <b>Rp 500.000/bulan atau Rp 6.000.000/tahun</b>.</li>' +
              '<li><span class="key">PTKP</span> (sejak 2016): <b>Rp 54 jt</b> diri sendiri; <b>+Rp 4,5 jt</b> jika kawin; <b>+Rp 4,5 jt</b> per tanggungan (sedarah/semenda garis lurus, anak angkat), <b>maks 3</b>; <b>+Rp 54 jt</b> bila penghasilan istri digabung dengan suami.</li>' +
              '<li><b>Kompensasi kerugian fiskal</b>: kerugian fiskal dapat dikompensasikan dengan laba fiskal hingga <b>5</b> tahun berturut-turut.</li>' +
              '<li><b>Zakat</b> / sumbangan keagamaan yang wajib.</li>' +
              '<li>Biaya fiskal — rekonsiliasi fiskal (WP pembukuan).</li>' +
              '</ol>' +
              '<div class="note">💡 PTKP dipatok terhadap PDB/kapita dan garis kemiskinan — menjaga penghasilan rendah benar-benar di luar jaring pajak.</div>' } },
          { title: { en: 'PPh Badan: normal 22% vs final 0.5%', id: 'PPh Badan: normal 22% vs final 0,5%' },
            html: { en: '<table><thead><tr><th></th><th>Normal</th><th>Final (UMKM)</th></tr></thead><tbody>' +
              '<tr><td>Base</td><td>LABA USAHA (profit)</td><td>OMZET (turnover)</td></tr>' +
              '<tr><td>Rate</td><td><b>22%</b></td><td><b>0.5%</b></td></tr>' +
              '<tr><td>Eligibility</td><td>all entities</td><td>UMKM, omzet &lt; <b>Rp 4.8 bn</b>/yr</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Pro/con: final 0.5%×omzet is <b>simple</b> and predictable but <b>ignores actual profit/loss</b> — a loss-making firm still pays, and a high-margin firm may pay less than 22% of profit. Normal scheme is fairer to a struggling firm but heavier on compliance.</div>', id: '<table><thead><tr><th></th><th>Normal</th><th>Final (UMKM)</th></tr></thead><tbody>' +
              '<tr><td>Dasar</td><td>LABA USAHA</td><td>OMZET (peredaran bruto)</td></tr>' +
              '<tr><td>Tarif</td><td><b>22%</b></td><td><b>0,5%</b></td></tr>' +
              '<tr><td>Syarat</td><td>semua badan</td><td>UMKM, omzet &lt; <b>Rp 4,8 miliar</b>/thn</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Plus/minus: final 0,5%×omzet <b>sederhana</b> dan dapat diprediksi tetapi <b>mengabaikan laba/rugi sebenarnya</b> — perusahaan rugi tetap membayar, dan perusahaan margin tinggi mungkin bayar < 22% dari laba. Skema normal lebih adil bagi perusahaan sulit tetapi lebih berat administrasinya.</div>' } },
          { title: { en: 'PPh-Final income & non-objects', id: 'Penghasilan PPh-Final & non-objek' },
            html: { en: '<p>Some income is taxed <b>final</b> (a fixed cut, settled at source, not re-added to the bracket calculation):</p>' +
              '<ul><li>Bunga deposito/tabungan; penjualan saham di bursa efek; hadiah undian; sewa tanah dan/atau bangunan; pengalihan (penjualan) tanah/bangunan; selisih revaluasi aktiva tetap; income of a WP with omzet ≤ Rp 4.8 bn.</li></ul>' +
              '<p><b>NON-objects</b> (excluded from PPh entirely): warisan; harta hibah; bantuan/sumbangan incl. <b>zakat</b>; setoran tunai pengganti saham; natura/kenikmatan in defined cases; asuransi payouts to an OP; <b>dividen dalam negeri</b> received by a resident PT/koperasi/BUMN/BUMD (new under <b>UU Cipta Kerja</b>); iuran & certain investment income of dana pensiun.</p>', id: '<p>Sebagian penghasilan dikenai <b>final</b> (potongan tetap, selesai di sumber, tidak ditambahkan lagi ke perhitungan bracket):</p>' +
              '<ul><li>Bunga deposito/tabungan; penjualan saham di bursa efek; hadiah undian; sewa tanah dan/atau bangunan; pengalihan (penjualan) tanah/bangunan; selisih revaluasi aktiva tetap; penghasilan WP dengan omzet ≤ Rp 4,8 miliar.</li></ul>' +
              '<p><b>NON-objek</b> (sepenuhnya dikecualikan dari PPh): warisan; harta hibah; bantuan/sumbangan termasuk <b>zakat</b>; setoran tunai pengganti saham; natura/kenikmatan dalam hal tertentu; pembayaran asuransi ke OP; <b>dividen dalam negeri</b> yang diterima PT/koperasi/BUMN/BUMD WPDN (baru di <b>UU Cipta Kerja</b>); iuran & sebagian penghasilan investasi dana pensiun.</p>' } }
        ]
      },
      {
        heading: { en: 'PPN — value-added tax (deep dive)', id: 'PPN — pajak pertambahan nilai (mendalam)' }, num: '4',
        cards: [
          { title: { en: 'PPN — overview (UU 8/1983, 5 amendments)', id: 'PPN — gambaran (UU 8/1983, 5 perubahan)' },
            html: { en: '<p>PPN is a tax on the <b>consumption (transaction) of goods & services in the Daerah Pabean</b> (customs area), levied <b>at every production/distribution stage</b>. Base law <b>UU 8/1983</b>, amended five times: UU 11/1994 (1995), UU 18/2000 (2001), UU 42/2009 (2010), UU 11/2020 (Cipta Kerja, 2020), UU 7/2021 (HPP, eff. 1 Apr 2022 — rate to 11%).</p>' +
              '<p>It is <b>non-cumulative</b> via the credit method: each seller remits <span class="key">Output VAT (PK) − Input VAT (PM)</span>. Standard effective rate <b>11%</b> (12% on luxury). It is <b>regressive</b> against income.</p>' +
              '<div class="formula">$$ \\text{VAT remitted} = PK - PM = 11\\% \\times (\\text{sales} - \\text{inputs}) $$</div>' +
              '<p>Negative-list principle: <b>everything</b> is taxable (BKP/JKP) <i>except</i> what the law exempts (basic staples, health, education, financial & insurance services, public transport). Only a <span class="key">PKP</span> can credit input VAT; a non-PKP (small business, omzet ≤ Rp 4.8 bn) cannot.</p>', id: '<p>PPN adalah pajak atas <b>konsumsi (transaksi) barang & jasa di Daerah Pabean</b>, dipungut <b>di setiap tahap produksi/distribusi</b>. UU dasar <b>UU 8/1983</b>, lima kali diubah: UU 11/1994 (1995), UU 18/2000 (2001), UU 42/2009 (2010), UU 11/2020 (Cipta Kerja, 2020), UU 7/2021 (HPP, berlaku 1 Apr 2022 — tarif jadi 11%).</p>' +
              '<p><b>Non-kumulatif</b> melalui metode kredit: tiap penjual menyetor <span class="key">PPN Keluaran (PK) − PPN Masukan (PM)</span>. Tarif efektif standar <b>11%</b> (12% untuk barang mewah). Bersifat <b>regresif</b> terhadap pendapatan.</p>' +
              '<div class="formula">$$ \\text{VAT remitted} = PK - PM = 11\\% \\times (\\text{sales} - \\text{inputs}) $$</div>' +
              '<p>Prinsip negative list: <b>semua</b> dikenai pajak (BKP/JKP) <i>kecuali</i> yang dikecualikan undang-undang (kebutuhan pokok, kesehatan, pendidikan, jasa keuangan & asuransi, angkutan umum). Hanya <span class="key">PKP</span> yang dapat mengkreditkan PPN masukan; non-PKP (usaha kecil, omzet ≤ Rp 4,8 miliar) tidak bisa.</p>' } },
          { title: { en: 'The input–output mechanism — worked example', id: 'Mekanisme PM–PK — contoh terhitung' },
            html: { en: '<p>Follow one good down a 3-stage chain, PPN 11%, each seller remits <b>PK − PM</b>:</p>' +
              '<table><thead><tr><th>Stage</th><th>Buy</th><th>Sell</th><th>PM</th><th>PK</th><th>Remit</th></tr></thead><tbody>' +
              '<tr><td>1</td><td>100,000</td><td>200,000</td><td>11,000</td><td>22,000</td><td><b>11,000</b></td></tr>' +
              '<tr><td>2</td><td>200,000</td><td>500,000</td><td>22,000</td><td>55,000</td><td><b>33,000</b></td></tr>' +
              '<tr><td>3</td><td>500,000</td><td>900,000</td><td>55,000</td><td>99,000</td><td><b>44,000</b></td></tr>' +
              '</tbody></table>' +
              '<p>Total value added = <b>Rp 800,000</b>; total PPN collected = 11,000 + 33,000 + 44,000 = <b>Rp 88,000</b> = 11% × 800,000. The credit method makes it <b>non-cumulative</b> — no tax-on-tax.</p>', id: '<p>Ikuti satu barang menuruni rantai 3 tahap, PPN 11%, tiap penjual menyetor <b>PK − PM</b>:</p>' +
              '<table><thead><tr><th>Tahap</th><th>Beli</th><th>Jual</th><th>PM</th><th>PK</th><th>Setor</th></tr></thead><tbody>' +
              '<tr><td>1</td><td>100.000</td><td>200.000</td><td>11.000</td><td>22.000</td><td><b>11.000</b></td></tr>' +
              '<tr><td>2</td><td>200.000</td><td>500.000</td><td>22.000</td><td>55.000</td><td><b>33.000</b></td></tr>' +
              '<tr><td>3</td><td>500.000</td><td>900.000</td><td>55.000</td><td>99.000</td><td><b>44.000</b></td></tr>' +
              '</tbody></table>' +
              '<p>Total nilai tambah = <b>Rp 800.000</b>; total PPN terkumpul = 11.000 + 33.000 + 44.000 = <b>Rp 88.000</b> = 11% × 800.000. Metode kredit membuatnya <b>non-kumulatif</b> — tidak ada pajak atas pajak.</p>' } },
          { title: { en: 'Five characteristics of PPN', id: 'Lima karakteristik PPN' },
            html: { en: '<table><thead><tr><th>Characteristic</th><th>Meaning</th></tr></thead><tbody>' +
              '<tr><td><b>Indirect tax</b></td><td>The party bearing the burden (consumer) ≠ the party responsible for remitting it (the PKP).</td></tr>' +
              '<tr><td><b>Objective tax</b></td><td>Liability arises from the object/transaction, not from who the taxpayer is.</td></tr>' +
              '<tr><td><b>Consumption-type VAT</b></td><td>A tax on domestic consumption, computed on value added.</td></tr>' +
              '<tr><td><b>Multi-stage, non-cumulative</b></td><td>Levied at every production/distribution stage but only on value added (credit method).</td></tr>' +
              '<tr><td><b>Indirect-subtraction method, single effective rate 11%</b></td><td>Remit = PK − PM; one effective rate 11% (12% for luxury).</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Because the same 11% applies regardless of income, PPN is <b>regressive</b> against income — the poor spend a larger share of income on consumption.</div>', id: '<table><thead><tr><th>Karakteristik</th><th>Makna</th></tr></thead><tbody>' +
              '<tr><td><b>Pajak tidak langsung</b></td><td>Pihak pemikul beban (konsumen) ≠ pihak penanggung jawab penyetoran (PKP).</td></tr>' +
              '<tr><td><b>Pajak objektif</b></td><td>Kewajiban timbul dari objek/transaksi, bukan dari siapa wajib pajaknya.</td></tr>' +
              '<tr><td><b>Consumption-type VAT</b></td><td>Pajak atas konsumsi dalam negeri, dihitung atas nilai tambah.</td></tr>' +
              '<tr><td><b>Multi-stage, non-kumulatif</b></td><td>Dipungut di setiap tahap produksi/distribusi tetapi hanya atas nilai tambah (metode kredit).</td></tr>' +
              '<tr><td><b>Indirect-subtraction method, tarif tunggal efektif 11%</b></td><td>Setor = PK − PM; satu tarif efektif 11% (12% barang mewah).</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Karena 11% yang sama berlaku tanpa memandang pendapatan, PPN bersifat <b>regresif</b> terhadap pendapatan — orang miskin membelanjakan porsi pendapatan lebih besar untuk konsumsi.</div>' } },
          { title: { en: 'PKP, obligations & Pengusaha Kecil', id: 'PKP, kewajiban & Pengusaha Kecil' },
            html: { en: '<p>A <span class="key">Pengusaha Kena Pajak (PKP)</span> is a business that supplies BKP/JKP in the customs area, <b>excluding Pengusaha Kecil</b>. A PKP must:</p>' +
              '<ol><li><b>Pungut</b> (collect) the PPN due by issuing a <b>faktur pajak</b>;</li>' +
              '<li><b>Setor</b> (remit) when <b>PK &gt; creditable PM</b> (plus any PPnBM due);</li>' +
              '<li><b>Lapor</b> (report) via the <b>SPT Masa PPN</b>.</li></ol>' +
              '<p><b>Pengusaha Kecil</b> = a business with gross supply ≤ <b>Rp 4.8 bn</b> per book year; it need not become a PKP. <b>A non-PKP cannot credit input VAT (PM)</b> — its PM becomes a pure cost, so it cannot pass on a clean VAT chain.</p>', id: '<p><span class="key">Pengusaha Kena Pajak (PKP)</span> adalah pengusaha yang menyerahkan BKP/JKP di daerah pabean, <b>tidak termasuk Pengusaha Kecil</b>. PKP wajib:</p>' +
              '<ol><li><b>Memungut</b> PPN terutang dengan membuat <b>faktur pajak</b>;</li>' +
              '<li><b>Menyetor</b> saat <b>PK &gt; PM yang dapat dikreditkan</b> (serta PPnBM terutang);</li>' +
              '<li><b>Melaporkan</b> lewat <b>SPT Masa PPN</b>.</li></ol>' +
              '<p><b>Pengusaha Kecil</b> = pengusaha dengan peredaran bruto ≤ <b>Rp 4,8 miliar</b> per tahun buku; tidak wajib menjadi PKP. <b>Non-PKP tidak bisa mengkreditkan PM</b> — PM-nya menjadi biaya murni, sehingga tak bisa meneruskan rantai PPN yang bersih.</p>' } },
          { title: { en: 'Object of PPN & the negative list', id: 'Objek PPN & negative list' },
            html: { en: '<p>PPN is due on (Pasal 4(1), 16C, 16D): supply of BKP/JKP in the customs area in the course of business; <b>import</b> of BKP; use of intangible BKP/JKP from abroad inside the customs area; <b>export</b> of BKP/JKP by a PKP; self-build not in the course of business; supply of fixed assets not originally for sale.</p>' +
              '<p>The law uses a <span class="key">negative list</span>: <b>all</b> goods/services are BKP/JKP <i>unless</i> the law says otherwise. Key items <b>NOT</b> taxed:</p>' +
              '<ul><li><b>Goods</b>: mining/drilling output taken directly from source (excl. coal); essential staples; food & drink served at hotels/restaurants/warung; money, gold bars (for forex reserves), securities.</li>' +
              '<li><b>Services</b>: medical health, social, religious, education, financial, insurance, public land/water/feeder-air transport, labour services; postage-stamp mail, coin-phone, wesel-pos remittance.</li></ul>', id: '<p>PPN terutang atas (Pasal 4(1), 16C, 16D): penyerahan BKP/JKP di daerah pabean dalam rangka usaha; <b>impor</b> BKP; pemanfaatan BKP tak berwujud/JKP dari luar di dalam daerah pabean; <b>ekspor</b> BKP/JKP oleh PKP; membangun sendiri di luar kegiatan usaha; penyerahan aktiva yang semula tidak untuk diperjualbelikan.</p>' +
              '<p>UU menganut <span class="key">negative list</span>: <b>semua</b> barang/jasa adalah BKP/JKP <i>kecuali</i> ditentukan lain. Item utama yang <b>TIDAK</b> dikenai:</p>' +
              '<ul><li><b>Barang</b>: hasil tambang/pengeboran yang diambil langsung dari sumbernya (kecuali batu bara); barang kebutuhan pokok; makanan & minuman di hotel/restoran/warung; uang, emas batangan (untuk devisa), surat berharga.</li>' +
              '<li><b>Jasa</b>: pelayanan kesehatan medis, sosial, keagamaan, pendidikan, keuangan, asuransi, angkutan umum darat/air/udara dalam negeri terkait, tenaga kerja; pengiriman surat berperangko, telepon umum koin, pengiriman uang wesel pos.</li></ul>' } }
        ]
      },
      {
        heading: { en: 'Cukai Hasil Tembakau (deep dive)', id: 'Cukai Hasil Tembakau (mendalam)' }, num: '5',
        cards: [
          { title: { en: 'Cukai definition & the four policy pillars', id: 'Definisi cukai & empat pilar kebijakan' },
            html: { en: '<p><span class="key">Cukai</span> is a state levy on specific goods whose: <i>consumption needs to be controlled</i>, <i>circulation needs supervision</i>, <i>use is negative for society/environment</i>, and <i>use warrants a levy for fairness</i>.</p>' +
              '<p>Four pillars of CHT policy:</p>' +
              '<ol><li><b>Consumption control</b> — per the Cukai Law; target: cut child (10–21) smoking prevalence from 12.4% (2025) to 8.4% (2029).</li>' +
              '<li><b>Industry/labour sustainability</b> — weigh impact on tobacco farmers, workers, and the whole IHT.</li>' +
              '<li><b>State revenue</b> — support national development.</li>' +
              '<li><b>Illegal-goods enforcement (BKC ilegal)</b> — mitigate policy that could push illegal cigarettes.</li></ol>', id: '<p><span class="key">Cukai</span> adalah pungutan negara atas barang tertentu yang: <i>konsumsinya perlu dikendalikan</i>, <i>peredarannya perlu diawasi</i>, <i>pemakaiannya berdampak negatif bagi masyarakat/lingkungan</i>, dan <i>pemakaiannya perlu pembebanan pungutan demi keadilan</i>.</p>' +
              '<p>Empat pilar kebijakan CHT:</p>' +
              '<ol><li><b>Pengendalian konsumsi</b> — sesuai UU Cukai; target: turunkan prevalensi perokok anak (10–21) dari 12,4% (2025) ke 8,4% (2029).</li>' +
              '<li><b>Keberlangsungan industri/tenaga kerja</b> — pertimbangkan dampak ke petani tembakau, pekerja, dan keseluruhan IHT.</li>' +
              '<li><b>Penerimaan negara</b> — mendukung pembangunan nasional.</li>' +
              '<li><b>Pengawasan BKC ilegal</b> — mitigasi kebijakan yang berpotensi mendorong rokok ilegal.</li></ol>' } },
          { title: { en: 'Tobacco in poor-household consumption & prevalence', id: 'Rokok dalam konsumsi RT miskin & prevalensi' },
            html: { en: '<p>For poor households, cigarettes are the <b>2nd-largest spend</b> (above protein), yet contain no calories. A poor household spends ~<b>Rp 246,382/month</b> on cigarettes (Susenas Maret 2022). A <b>+1% cigarette spend raises the chance of falling into poverty by ~6%</b> (PKJS-UI 2018).</p>' +
              '<p>Prevalence: adult male <b>71.3%</b> (world’s highest); total adult <b>37.6%</b> (5th highest); child (10–18) rose from <b>7.2% (2013) → 9.1% (2018)</b> (Riskesdas, 5-yearly). Cigarettes are cheap: <b>~$2.1</b> vs world avg <b>$4</b>, vs Australia <b>$21</b> (WHO 2021) — price plus advertising, low education, and easy single-stick (ketengan) access drive uptake.</p>', id: '<p>Bagi rumah tangga miskin, rokok adalah <b>pengeluaran terbesar ke-2</b> (di atas protein), padahal tanpa kalori. RT miskin menghabiskan ~<b>Rp 246.382/bulan</b> untuk rokok (Susenas Maret 2022). <b>Kenaikan belanja rokok +1% menaikkan peluang jatuh miskin ~6%</b> (PKJS-UI 2018).</p>' +
              '<p>Prevalensi: pria dewasa <b>71,3%</b> (tertinggi dunia); dewasa total <b>37,6%</b> (tertinggi ke-5); anak (10–18) naik dari <b>7,2% (2013) → 9,1% (2018)</b> (Riskesdas, 5-tahunan). Rokok murah: <b>~$2,1</b> vs rata-rata dunia <b>$4</b>, vs Australia <b>$21</b> (WHO 2021) — harga plus iklan, pendidikan rendah, dan akses ketengan mudah mendorong konsumsi.</p>' } },
          { title: { en: 'Tariff layers, tiers & the producer response', id: 'Layer tarif, tier & respons produsen' },
            html: { en: '<p>To curb the gap-shifting problem, the number of tariff <b>layers fell from 19 (2009) to 8 (2022)</b>. Tiers (with HJE per stick, 2025): SKM I (>3 bn sticks, HJE Rp 2,375) / SKM II (Rp 1,485); SPM I (Rp 2,500) / SPM II (Rp 1,575); SKT IA (>2 bn, Rp 2,180) / IB (Rp 1,515) / II (500 jt–2 bn, Rp 1,020) / III (<500 jt, Rp 855). Total ~1,418 factories (2025).</p>' +
              '<div class="note">💡 A widening <b>nominal-tariff gap</b> between tiers lets producers shift output to lower-taxed tiers. E.g. SKM I vs SKM II gap was Rp 220 (2019) but Rp 485 (2024) — and SKM/SPM output grew +100–120% vs 2018 while top-tier share fell.</div>', id: '<p>Untuk meredam gap-shifting, jumlah <b>layer tarif turun dari 19 (2009) ke 8 (2022)</b>. Tier (dengan HJE per batang, 2025): SKM I (>3 miliar batang, HJE Rp 2.375) / SKM II (Rp 1.485); SPM I (Rp 2.500) / SPM II (Rp 1.575); SKT IA (>2 miliar, Rp 2.180) / IB (Rp 1.515) / II (500 jt–2 miliar, Rp 1.020) / III (<500 jt, Rp 855). Total ~1.418 pabrik (2025).</p>' +
              '<div class="note">💡 <b>Gap nominal tarif</b> antar tier yang melebar memungkinkan produsen mengalihkan output ke tier yang dipajaki lebih rendah. Mis. gap SKM I vs SKM II Rp 220 (2019) menjadi Rp 485 (2024) — dan output SKM/SPM tumbuh +100–120% vs 2018 sementara pangsa tier teratas turun.</div>' } },
          { title: { en: 'Illegal cigarettes, receipts & DBH CHT', id: 'Rokok ilegal, penerimaan & DBH CHT' },
            html: { en: '<p>Illegal cigarettes were ~<b>6.9%</b> (UGM 2023; 3.6% from saltuk/salson). Rule of thumb: a <b>+10% tariff hike → +0.8pp illegal share</b>. In 2025 ~<b>7%</b> illegal of ~250 bn sticks = <b>17.5 bn illegal sticks ≈ Rp 14 T</b> lost. CHT receipts ran <b>Rp 180.6 T (2020) → 218.9 T (2022) → 215.4 T (2024)</b>, rising ~13%/yr in 2016–2022 then roughly flat.</p>' +
              '<p><span class="key">DBH CHT</span> (revenue-sharing) is directed to affected tobacco farmers and cigarette-factory workers via <b>BLT, skills training, and business capital</b>; for farmers it funds better raw-material quality, production-protection insurance, and seed/fertiliser support.</p>', id: '<p>Rokok ilegal ~<b>6,9%</b> (UGM 2023; 3,6% dari saltuk/salson). Rumus praktis: <b>kenaikan tarif +10% → +0,8pp pangsa ilegal</b>. Pada 2025 ~<b>7%</b> ilegal dari ~250 miliar batang = <b>17,5 miliar batang ilegal ≈ Rp 14 T</b> hilang. Penerimaan CHT <b>Rp 180,6 T (2020) → 218,9 T (2022) → 215,4 T (2024)</b>, naik ~13%/thn pada 2016–2022 lalu relatif datar.</p>' +
              '<p><span class="key">DBH CHT</span> (dana bagi hasil) diarahkan ke buruh tani tembakau dan buruh pabrik rokok terdampak lewat <b>BLT, pelatihan keterampilan, dan bantuan modal usaha</b>; untuk petani membiayai peningkatan kualitas bahan baku, iuran jaminan perlindungan produksi, dan bantuan bibit/pupuk.</p>' } }
        ]
      },
      {
        heading: { en: 'Belanja perpajakan (tax expenditure)', id: 'Belanja perpajakan' }, num: '6',
        cards: [
          { title: { en: 'What tax expenditure is', id: 'Apa itu belanja perpajakan' },
            html: { en: '<p>Tax has two roles: <b>raise revenue</b> (budgetair) <i>and</i> <b>give incentives</b> (regulerend) by exempting or not-collecting tax for priority activities — this <span class="key">forgone revenue</span> is <b>tax expenditure (belanja perpajakan)</b>. It exists because the incentive <b>departs from the standard norm</b> of the tax rules.</p>' +
              '<p>Indonesia 2025 estimate: <b>Rp 530.3 T (2.23% GDP)</b>, mostly <b>PPN (57%)</b> and <b>PPh (35%)</b>. Reported by <b>DJSEF (formerly BKF)</b> since 2018.</p>', id: '<p>Pajak memiliki dua peran: <b>menghimpun penerimaan</b> (budgetair) <i>dan</i> <b>memberi insentif</b> (regulerend) dengan mengecualikan atau tidak memungut pajak untuk kegiatan prioritas — <span class="key">penerimaan yang dikorbankan</span> ini disebut <b>belanja perpajakan (tax expenditure)</b>. Ada karena insentifnya <b>berbeda dari norma standar</b> ketentuan pajak.</p>' +
              '<p>Estimasi Indonesia 2025: <b>Rp 530,3 T (2,23% PDB)</b>, terutama <b>PPN (57%)</b> dan <b>PPh (35%)</b>. Dilaporkan oleh <b>DJSEF (d/h BKF)</b> sejak 2018.</p>' } },
          { title: { en: 'Beneficiaries (2025, Rp T)', id: 'Penerima manfaat (2025, Rp T)' },
            html: { en: '<table><thead><tr><th>Beneficiary</th><th>Rp T</th><th>Share</th></tr></thead><tbody>' +
              '<tr><td>Rumah tangga (households)</td><td><b>292.7</b></td><td>55.2%</td></tr>' +
              '<tr><td>UMKM</td><td><b>96.4</b></td><td>18.2%</td></tr>' +
              '<tr><td>Iklim investasi (investment climate)</td><td><b>84.3</b></td><td>15.9%</td></tr>' +
              '<tr><td>Dunia bisnis (business)</td><td><b>56.9</b></td><td>10.7%</td></tr>' +
              '</tbody></table>' +
              '<p>Examples: PPN-dibebaskan on food Rp 77.3 T; education Rp 25.3 T; transport Rp 39.7 T; health Rp 15.1 T; UMKM support Rp 96.4 T; tax holiday/allowance Rp 7.1 T. Separate <b>customs incentives 2025 ≈ Rp 40.4 T</b> (e.g. BM deferral in Kawasan Berikat Rp 27.5 T).</p>', id: '<table><thead><tr><th>Penerima</th><th>Rp T</th><th>Porsi</th></tr></thead><tbody>' +
              '<tr><td>Rumah tangga</td><td><b>292,7</b></td><td>55,2%</td></tr>' +
              '<tr><td>UMKM</td><td><b>96,4</b></td><td>18,2%</td></tr>' +
              '<tr><td>Iklim investasi</td><td><b>84,3</b></td><td>15,9%</td></tr>' +
              '<tr><td>Dunia bisnis</td><td><b>56,9</b></td><td>10,7%</td></tr>' +
              '</tbody></table>' +
              '<p>Contoh: PPN-dibebaskan bahan makanan Rp 77,3 T; pendidikan Rp 25,3 T; transportasi Rp 39,7 T; kesehatan Rp 15,1 T; dukungan UMKM Rp 96,4 T; tax holiday/allowance Rp 7,1 T. Terpisah, <b>insentif kepabeanan 2025 ≈ Rp 40,4 T</b> (mis. penangguhan BM di Kawasan Berikat Rp 27,5 T).</p>' } },
          { title: { en: 'PPh & PPN facility menus', id: 'Menu fasilitas PPh & PPN' },
            html: { en: '<ul>' +
              '<li><b>PPh facilities</b>: <b>Kawasan-based</b> (16) — KEK, Kawasan Industri, IKN (tax holiday, tax allowance, superdeduction vokasi/litbang, PPh-final UMKM IKN). <b>Non-kawasan</b> (46) — tax holiday pionir, tax allowance, investment allowance for labour-intensive industry, superdeduction vokasi/R&D, lower-rate for Tbk, object exemptions.</li>' +
              '<li><b>PPN facilities</b>: <b>dibebaskan</b> (exempted — staples, social/education/religion, capital goods/energy, public housing, defence) <i>vs</i> <b>tidak dipungut</b> (not-collected — hulu migas, foreign grants/loans, FTZ/TPB/KEK/IKN, foreign-flag fuel/avtur).</li>' +
              '</ul>' +
              '<div class="tip">📝 Key distinction: a <b>"dibebaskan"</b> supply cannot credit its input PM; a <b>"tidak dipungut"</b> supply generally can — so the two facilities differ in their PM treatment, not just the label.</div>', id: '<ul>' +
              '<li><b>Fasilitas PPh</b>: <b>berbasis kawasan</b> (16) — KEK, Kawasan Industri, IKN (tax holiday, tax allowance, superdeduction vokasi/litbang, PPh-final UMKM IKN). <b>Non-kawasan</b> (46) — tax holiday pionir, tax allowance, investment allowance industri padat karya, superdeduction vokasi/R&D, tarif lebih rendah untuk Tbk, pengecualian objek.</li>' +
              '<li><b>Fasilitas PPN</b>: <b>dibebaskan</b> (kebutuhan pokok, sosial/pendidikan/agama, barang modal industri/energi, perumahan rakyat, pertahanan) <i>vs</i> <b>tidak dipungut</b> (hulu migas, hibah/pinjaman luar negeri, FTZ/TPB/KEK/IKN, BBM/avtur angkutan luar negeri).</li>' +
              '</ul>' +
              '<div class="tip">📝 Bedaan penting: penyerahan <b>"dibebaskan"</b> tidak dapat mengkreditkan PM-nya; penyerahan <b>"tidak dipungut"</b> umumnya bisa — jadi keduanya beda di perlakuan PM, bukan sekadar label.</div>' } }
        ]
      },
      {
        heading: { en: 'Pajak & perekonomian: tax ratio & buoyancy', id: 'Pajak & perekonomian: tax ratio & buoyancy' }, num: '7',
        cards: [
          { title: { en: 'Tax ratio & tax buoyancy', id: 'Tax ratio & tax buoyancy' },
            html: { en: '<p><span class="key">Tax ratio</span> = tax revenue ÷ GDP (OECD: compulsory unrequited payments to general government). Indonesia ~10% — low vs OECD avg 34.1% → much room to optimise.</p>' +
              '<p><span class="key">Tax buoyancy</span> = % growth of tax ÷ % growth of GDP — how responsive tax is to the economy.</p>' +
              '<div class="formula">$$ \\text{Buoyancy} = \\frac{\\%\\,\\Delta\\,\\text{Tax}}{\\%\\,\\Delta\\,\\text{GDP}} $$</div>' +
              '<table><thead><tr><th>Buoyancy</th><th>Meaning</th></tr></thead><tbody>' +
              '<tr><td>&gt; 1</td><td>Tax grows faster than GDP — responsive/strong.</td></tr>' +
              '<tr><td>= 1</td><td>Tax grows in step with GDP.</td></tr>' +
              '<tr><td>&lt; 1</td><td>Tax lags GDP — potential not yet optimal.</td></tr>' +
              '<tr><td>&lt; 0</td><td>Tax falls while GDP grows — incentives, shocks, weak administration.</td></tr>' +
              '</tbody></table>', id: '<p><span class="key">Tax ratio</span> = penerimaan pajak ÷ PDB (OECD: pembayaran wajib tanpa imbalan langsung kepada pemerintah umum). Indonesia ~10% — rendah dibanding rata-rata OECD 34,1% → banyak ruang untuk dioptimalkan.</p>' +
              '<p><span class="key">Tax buoyancy</span> = % pertumbuhan pajak ÷ % pertumbuhan PDB — seberapa responsif pajak terhadap ekonomi.</p>' +
              '<div class="formula">$$ \\text{Buoyancy} = \\frac{\\%\\,\\Delta\\,\\text{Tax}}{\\%\\,\\Delta\\,\\text{GDP}} $$</div>' +
              '<table><thead><tr><th>Buoyancy</th><th>Makna</th></tr></thead><tbody>' +
              '<tr><td>&gt; 1</td><td>Pajak tumbuh lebih cepat dari PDB — responsif/kuat.</td></tr>' +
              '<tr><td>= 1</td><td>Pajak tumbuh seiring PDB.</td></tr>' +
              '<tr><td>&lt; 1</td><td>Pajak tertinggal dari PDB — potensi belum optimal.</td></tr>' +
              '<tr><td>&lt; 0</td><td>Pajak turun saat PDB tumbuh — insentif, shock, administrasi lemah.</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'Indonesia’s tax ratio & buoyancy (2022–2026)', id: 'Tax ratio & buoyancy Indonesia (2022–2026)' },
            html: { en: '<p>Tax ratio (OECD def.) excludes belanja perpajakan. The 2024 OECD average was <b>34.1%</b> — Indonesia sits around 10%, well below peers.</p>' +
              '<table><thead><tr><th>Year</th><th>Tax ratio (% GDP)</th><th>Buoyancy</th></tr></thead><tbody>' +
              '<tr><td>2022</td><td>10.39%</td><td><b>2.04</b></td></tr>' +
              '<tr><td>2023</td><td>10.31%</td><td><b>0.88</b></td></tr>' +
              '<tr><td>2024</td><td>10.08%</td><td><b>0.60</b></td></tr>' +
              '<tr><td>2025 (real. sementara)</td><td>9.32%</td><td><b>−0.08</b></td></tr>' +
              '<tr><td>2026 (APBN)</td><td>10.48%</td><td><b>2.65</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Read the trend: buoyancy fell from a strong 2.04 (2022 commodity boom) to <b>negative in 2025</b> — tax revenue actually fell while GDP grew (commodity-price shock on PPh migas + large incentives), then is projected to rebound to 2.65 in 2026.</div>', id: '<p>Tax ratio (def. OECD) tidak termasuk belanja perpajakan. Rata-rata OECD 2024 <b>34,1%</b> — Indonesia sekitar 10%, jauh di bawah peers.</p>' +
              '<table><thead><tr><th>Tahun</th><th>Rasio pajak (% PDB)</th><th>Buoyancy</th></tr></thead><tbody>' +
              '<tr><td>2022</td><td>10,39%</td><td><b>2,04</b></td></tr>' +
              '<tr><td>2023</td><td>10,31%</td><td><b>0,88</b></td></tr>' +
              '<tr><td>2024</td><td>10,08%</td><td><b>0,60</b></td></tr>' +
              '<tr><td>2025 (real. sementara)</td><td>9,32%</td><td><b>−0,08</b></td></tr>' +
              '<tr><td>2026 (APBN)</td><td>10,48%</td><td><b>2,65</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Baca trennya: buoyancy turun dari 2,04 yang kuat (boom komoditas 2022) ke <b>negatif pada 2025</b> — penerimaan pajak benar-benar turun saat PDB tumbuh (shock harga komoditas pada PPh migas + insentif besar), lalu diproyeksikan rebound ke 2,65 pada 2026.</div>' } }
        ]
      },
      {
        heading: { en: 'Tax reform: policy + administration', id: 'Reformasi pajak: kebijakan + administrasi' }, num: '8',
        cards: [
          { title: { en: 'Two arms of system reform', id: 'Dua sisi reformasi sistem' },
            html: { en: '<p>A <span class="key">tax system reform</span> has two arms:</p>' +
              '<ul>' +
              '<li><b>Policy reform</b> — set policy changes to generate revenue; <b>align tax policy to international trends</b> and mitigate future developments; enhance tax analysis & forecasting.</li>' +
              '<li><b>Administration reform</b> — set the <b>collection strategy</b>; improve <b>tax compliance</b>; carry out institutional reforms.</li>' +
              '</ul>' +
              '<p>This mirrors the two units: a Tax <b>Policy</b> Unit and a Tax <b>Administration</b> Unit — again the merge-or-separate question.</p>', id: '<p><span class="key">Reformasi sistem pajak</span> punya dua sisi:</p>' +
              '<ul>' +
              '<li><b>Reformasi kebijakan</b> — menetapkan perubahan kebijakan untuk menghasilkan penerimaan; <b>menyelaraskan kebijakan ke tren internasional</b> dan memitigasi perkembangan ke depan; memperkuat analisis & proyeksi pajak.</li>' +
              '<li><b>Reformasi administrasi</b> — menetapkan <b>strategi pemungutan</b>; meningkatkan <b>kepatuhan pajak</b>; melakukan reformasi institusional.</li>' +
              '</ul>' +
              '<p>Ini mencerminkan dua unit: Tax <b>Policy</b> Unit dan Tax <b>Administration</b> Unit — lagi-lagi pertanyaan digabung-atau-dipisah.</p>' } },
          { title: { en: 'Why reform is needed — five challenges', id: 'Mengapa perlu — lima tantangan' },
            html: { en: '<ol>' +
              '<li><b>Globalization volatility</b> — fast-changing dynamics (strengthening, weakening).</li>' +
              '<li><b>Fast-changing business models</b> — e-commerce, digital, contract manufacturing.</li>' +
              '<li><b>Commodity dependence</b> — fast-moving commodity prices hit migas revenue (can no longer rely on migas).</li>' +
              '<li><b>Aggressive tax planning / compliance</b> — complex rules still leave room to manoeuvre; transfer pricing → need anti-BEPS rules.</li>' +
              '<li><b>Public trust</b> — collection depends on confidence in the system.</li>' +
              '</ol>' +
              '<p>Implications: counter BEPS, <b>broaden the tax base</b>, improve design & enforcement for individuals and SMEs, and upgrade administration & IT.</p>', id: '<ol>' +
              '<li><b>Dinamika globalisasi</b> — cepat berubah (menguat, melemah).</li>' +
              '<li><b>Model bisnis berubah cepat</b> — e-commerce, digital, contract manufacturing.</li>' +
              '<li><b>Ketergantungan komoditas</b> — harga komoditas cepat berubah menekan penerimaan migas (tak bisa lagi mengandalkan migas).</li>' +
              '<li><b>Perencanaan pajak agresif / kepatuhan</b> — aturan rumit tetap menyisakan ruang manuver; transfer pricing → perlu aturan anti-BEPS.</li>' +
              '<li><b>Kepercayaan publik</b> — pemungutan bergantung pada kepercayaan terhadap sistem.</li>' +
              '</ol>' +
              '<p>Implikasi: melawan BEPS, <b>memperluas basis pajak</b>, memperbaiki desain & penegakan bagi orang pribadi dan UKM, serta meningkatkan administrasi & TI.</p>' } }
        ]
      },
      {
        heading: { en: 'International tax: avoiding the race to the bottom', id: 'Pajak internasional' }, num: '9',
        cards: [
          { title: { en: 'Globalization erodes the corporate tax base', id: 'Globalisasi mengikis basis pajak' },
            html: { en: '<p>Digital trade, intangible value and mobile capital let multinationals <b>shift profits</b> to low-tax jurisdictions — <span class="key">BEPS</span> (Base Erosion & Profit Shifting). Tax competition pushes rates down (a "race to the bottom") and squeezes corporate income tax.</p>' +
              '<p>Tools: <b>P3B / tax treaties</b> (eliminate double taxation, allocate taxing rights — Indonesia has 71), the <b>MLI</b> (since 2017, harmonises treaties), exchange of information (EOI), and Advance Pricing Agreements (APA) for transfer pricing.</p>' +
              '<p>The <span class="key">BEPS</span> response is a <b>15-action project</b>. Globalization drives it: more FDI & cross-border transactions, tax-rate competition, contract manufacturing/commissionaire sales, intra-firm fragmentation (transfer pricing), high-intangible trade, cross-border digital e-commerce (iTunes/Google/Netflix/Agoda), and no need for a <b>Permanent Establishment</b> to do business — so approaches must be <b>multilateral, not bilateral</b>.</p>', id: '<p>Perdagangan digital, nilai intangible, dan modal yang mobile memungkinkan multinasional <b>mengalihkan laba</b> ke yurisdiksi pajak rendah — <span class="key">BEPS</span> (Base Erosion & Profit Shifting). Kompetisi pajak menekan tarif turun ("race to the bottom") dan menggerus pajak penghasilan badan.</p>' +
              '<p>Instrumen: <b>P3B / tax treaty</b> (menghapus pajak berganda, mengalokasikan hak pemajakan — Indonesia punya 71), <b>MLI</b> (sejak 2017, mengharmoniskan treaty), pertukaran informasi (EOI), dan Advance Pricing Agreements (APA) untuk transfer pricing.</p>' +
              '<p>Respons <span class="key">BEPS</span> adalah <b>proyek 15 aksi</b>. Globalisasi mendorongnya: FDI & transaksi lintas batas meningkat, kompetisi tarif pajak, contract manufacturing/commissionaire sales, fragmentasi intra-perusahaan (transfer pricing), perdagangan nilai intangible tinggi, e-commerce digital lintas negara (iTunes/Google/Netflix/Agoda), dan tak perlunya <b>Permanent Establishment</b> untuk berusaha — sehingga pendekatan harus <b>multilateral, bukan bilateral</b>.</p>' } },
          { title: { en: 'P3B tax treaties & the MLI', id: 'Tax treaty P3B & MLI' },
            html: { en: '<p>A <span class="key">P3B (tax treaty)</span> is a bilateral agreement to: eliminate double taxation, allocate taxing rights, reduce withholding rates, exchange information, resolve disputes, and give legal certainty. There are <b>&gt;2,500 treaties worldwide</b>; Indonesia has <b>71 in force</b>, mostly a <b>10%</b> rate on dividends, interest, and royalties (newest: Singapore & UAE, eff. 1 Jan 2022).</p>' +
              '<p>With thousands of mismatched treaties, MNEs could "treaty-shop." The <span class="key">MLI</span> (Multilateral Instrument, since 2017; Indonesia signed 7 Jun 2017, ratified via Perpres 77/2019, in force 1 Aug 2020) <b>harmonises</b> treaties at once to shut down that abuse.</p>', id: '<p><span class="key">P3B (tax treaty)</span> adalah perjanjian bilateral untuk: menghapus pajak berganda, mengalokasikan hak pemajakan, mengurangi tarif pemotongan, bertukar informasi, menyelesaikan sengketa, dan memberi kepastian hukum. Terdapat <b>&gt;2.500 treaty di dunia</b>; Indonesia punya <b>71 berlaku</b>, mayoritas tarif <b>10%</b> atas dividen, bunga, dan royalti (terbaru: Singapura & UEA, berlaku 1 Jan 2022).</p>' +
              '<p>Dengan ribuan treaty yang tak seragam, MNE bisa "treaty-shopping". <span class="key">MLI</span> (Multilateral Instrument, sejak 2017; Indonesia tanda tangan 7 Jun 2017, ratifikasi via Perpres 77/2019, berlaku 1 Agu 2020) <b>menyeragamkan</b> treaty sekaligus untuk menutup penyalahgunaan itu.</p>' } },
          { title: { en: 'EOI, MAP & APA cooperation', id: 'Kerja sama EOI, MAP & APA' },
            html: { en: '<ul>' +
              '<li><span class="key">EOI</span> (Exchange of Information) — three modes: <b>spontaneous, by-request, automatic</b>; within MAC/MCAA frameworks to prevent avoidance/evasion (PMK 39/2017).</li>' +
              '<li><span class="key">MAP</span> (Mutual Agreement Procedure) — resolves tax disputes by consultation between tax authorities, based on the P3B.</li>' +
              '<li><span class="key">APA</span> (Advance Pricing Agreement) — fixes a transfer-pricing method in advance to give certainty and prevent TP disputes. Forms: <b>unilateral</b> (taxpayer–authority), <b>bilateral</b> (authority–authority), <b>multilateral</b> (authority–several authorities); basis PMK 22/2020 & PP 55/2022.</li>' +
              '</ul>', id: '<ul>' +
              '<li><span class="key">EOI</span> (Pertukaran Informasi) — tiga mode: <b>spontaneous, by-request, automatic</b>; dalam kerangka MAC/MCAA untuk mencegah penghindaran/pengelakan (PMK 39/2017).</li>' +
              '<li><span class="key">MAP</span> (Mutual Agreement Procedure) — menyelesaikan sengketa pajak lewat konsultasi antarotoritas, berdasarkan P3B.</li>' +
              '<li><span class="key">APA</span> (Advance Pricing Agreement) — menetapkan metode transfer pricing di muka untuk kepastian dan mencegah sengketa TP. Bentuk: <b>unilateral</b> (WP–otoritas), <b>bilateral</b> (otoritas–otoritas), <b>multilateral</b> (otoritas–beberapa otoritas); dasar PMK 22/2020 & PP 55/2022.</li>' +
              '</ul>' } },
          { title: { en: 'The global Two-Pillar Solution (2021)', id: 'Solusi 2 Pilar (2021)' },
            html: { en: '<p>October 2021: 135 BEPS countries agreed a two-pillar deal for the digital economy.</p>' +
              '<ul><li><b>Pillar One</b> — gives market jurisdictions taxing rights <i>without</i> physical presence (Amount A); simplifies arm’s-length for distribution (Amount B).</li>' +
              '<li><b>Pillar Two</b> — a <b>global minimum tax of 15%</b> on MNEs via the <b>GloBE rules</b> (Global Anti-Base Erosion) + the <b>Subject-to-Tax Rule (STTR)</b>, implemented through a Multilateral Convention (MLC) — domestic GloBE rules plus the MLI for STTR. So shifting profit to tax havens no longer escapes tax.</li></ul>' +
              '<div class="tip">📝 The point of Pillar Two is to stop the race to the bottom by setting a 15% floor under corporate tax: if a haven taxes below 15%, the MNE’s home (or another) jurisdiction tops it up to 15%, so undercutting buys nothing.</div>', id: '<p>Oktober 2021: 135 negara BEPS menyepakati kesepakatan dua pilar untuk ekonomi digital.</p>' +
              '<ul><li><b>Pillar One</b> — memberi yurisdiksi pasar hak pemajakan <i>tanpa</i> kehadiran fisik (Amount A); menyederhanakan arm’s-length untuk distribusi (Amount B).</li>' +
              '<li><b>Pillar Two</b> — <b>pajak minimum global 15%</b> atas MNE via <b>aturan GloBE</b> (Global Anti-Base Erosion) + <b>Subject-to-Tax Rule (STTR)</b>, diimplementasikan lewat Multilateral Convention (MLC) — aturan GloBE domestik plus MLI untuk STTR. Sehingga pengalihan laba ke tax haven tak lagi lolos dari pajak.</li></ul>' +
              '<div class="tip">📝 Inti Pillar Two adalah menghentikan race to the bottom dengan menetapkan batas bawah 15%: bila tax haven memajaki di bawah 15%, yurisdiksi asal (atau lainnya) MNE menambal (top-up) sampai 15%, sehingga membanting tarif tak lagi menguntungkan.</div>' } }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'PPN credit (input–output) method', id: 'Metode kredit PPN' },
          html: { en: '<div class="formula">$$ \\text{PPN setor} = PK - PM = 11\\% \\times (\\text{harga jual} - \\text{harga beli}) $$</div>' +
            '<p>Summed across the chain, total PPN = 11% × total value added. Only a PKP can credit PM.</p>', id: '<div class="formula">$$ \\text{PPN setor} = PK - PM = 11\\% \\times (\\text{harga jual} - \\text{harga beli}) $$</div>' +
            '<p>Dijumlahkan sepanjang rantai, total PPN = 11% × total nilai tambah. Hanya PKP yang dapat mengkreditkan PM.</p>' } },
        { title: { en: 'PPh OP taxable income', id: 'Penghasilan kena pajak OP' },
          html: { en: '<div class="formula">$$ PKP = \\text{Penghasilan neto} - PTKP, \\quad PPh = \\text{tarif bracket} \\times PKP $$</div>' +
            '<p>PTKP 2016+: Rp 54 jt (self) + 4.5 jt (married) + 4.5 jt per dependant (max 3). Top bracket 35% above Rp 5 bn.</p>', id: '<div class="formula">$$ PKP = \\text{Penghasilan neto} - PTKP, \\quad PPh = \\text{tarif bracket} \\times PKP $$</div>' +
            '<p>PTKP 2016+: Rp 54 jt (diri sendiri) + 4,5 jt (kawin) + 4,5 jt per tanggungan (maks 3). Bracket tertinggi 35% di atas Rp 5 miliar.</p>' } },
        { title: { en: 'Tax ratio & buoyancy', id: 'Tax ratio & buoyancy' },
          html: { en: '<div class="formula">$$ \\text{Tax ratio} = \\frac{\\text{Tax revenue}}{GDP}, \\qquad \\text{Buoyancy} = \\frac{\\%\\,\\Delta\\,\\text{Tax}}{\\%\\,\\Delta\\,GDP} $$</div>', id: '<div class="formula">$$ \\text{Tax ratio} = \\frac{\\text{Tax revenue}}{GDP}, \\qquad \\text{Buoyancy} = \\frac{\\%\\,\\Delta\\,\\text{Tax}}{\\%\\,\\Delta\\,GDP} $$</div>' } },
        { title: { en: 'Tax incidence & deadweight loss (linear D, S)', id: 'Insidensi pajak & DWL' },
          html: { en: '<div class="formula">$$ \\text{Buyers\' share} = \\frac{b_D}{b_D+b_S}, \\qquad DWL = \\tfrac12\\, t\\,(Q_0 - Q_t) = \\frac{t^2}{2(b_D+b_S)} $$</div>' +
            '<p>The <b>more inelastic (steeper) side bears more</b> of the tax. See the Graphs tab.</p>', id: '<div class="formula">$$ \\text{Buyers\' share} = \\frac{b_D}{b_D+b_S}, \\qquad DWL = \\tfrac12\\, t\\,(Q_0 - Q_t) = \\frac{t^2}{2(b_D+b_S)} $$</div>' +
            '<p>Sisi yang <b>lebih inelastis (lebih curam) menanggung lebih banyak</b> pajak. Lihat tab Graphs.</p>' } }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Tax incidence & deadweight loss', id: 'Insidensi pajak & deadweight loss' },
          html: { en: '<p>A per-unit tax drives a wedge between the price buyers pay (P<sub>b</sub>) and sellers keep (P<sub>s</sub>). Drag the steepness sliders: whichever side is steeper (more inelastic) ends up paying more of the tax. The orange triangle is the deadweight loss — output the tax destroys.</p>', id: '<p>Pajak per unit menciptakan wedge antara harga yang dibayar pembeli (P<sub>b</sub>) dan yang diterima penjual (P<sub>s</sub>). Geser slider kecuraman: sisi yang lebih curam (lebih inelastis) menanggung lebih banyak pajak. Segitiga oranye adalah deadweight loss — output yang dimusnahkan pajak.</p>' },
          chartId: 'tax-dwl' },
        { title: { en: 'The Laffer curve', id: 'Kurva Laffer' },
          html: { en: '<p>Revenue is the rate times the (shrinking) base, so it traces an inverted U. Below <b>t*</b> a higher rate raises revenue; above it, the base falls faster than the rate rises and revenue drops. This is the formal version of "a low tax ratio can mean rates are too high <i>or</i> the base is too narrow."</p>', id: '<p>Penerimaan adalah tarif dikali basis (yang menyusut), sehingga membentuk kurva U terbalik. Di bawah <b>t*</b> tarif lebih tinggi menaikkan penerimaan; di atasnya, basis turun lebih cepat daripada kenaikan tarif dan penerimaan jatuh. Ini versi formal dari "tax ratio rendah bisa berarti tarif terlalu tinggi <i>atau</i> basis terlalu sempit."</p>' },
          chartId: 'laffer' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'PPN is called a "consumption-type, indirect, objective, non-cumulative" tax. Explain each adjective in one line.', id: 'PPN disebut pajak konsumsi, tidak langsung, objektif, non-kumulatif. Jelaskan tiap istilah.' },
        answer: [
          { en: '<b>Consumption-type</b>: it taxes final domestic consumption, not income or production per se.', id: '<b>Konsumsi</b>: memajaki konsumsi akhir dalam negeri.' },
          { en: '<b>Indirect</b>: the bearer (consumer) differs from the remitter (the PKP seller).', id: '<b>Tidak langsung</b>: pemikul (konsumen) berbeda dari penyetor (PKP).' },
          { en: '<b>Objective</b>: liability arises from the object/transaction, regardless of who the taxpayer is.', id: '<b>Objektif</b>: kewajiban timbul dari objek/transaksi.' },
          { en: '<b>Non-cumulative</b>: the credit method (PK − PM) means tax is paid only on value added at each stage, not tax-on-tax.', id: '<b>Non-kumulatif</b>: metode kredit (PK − PM) memajaki hanya nilai tambah.' }
        ], tip: { en: 'Credit method is what makes it non-cumulative.', id: 'Metode kredit membuatnya non-kumulatif.' } },
      { type: 'quant', q: { en: 'A trader buys inputs for Rp 200,000 and sells for Rp 500,000. PPN is 11%. How much PPN does she remit?', id: 'Pedagang beli input Rp 200.000, jual Rp 500.000. PPN 11%. Berapa yang disetor?' },
        answer: [
          { en: 'Output VAT PK = 11% × 500,000 = Rp 55,000.', id: 'PK = 11% × 500.000 = Rp 55.000.' },
          { en: 'Input VAT PM = 11% × 200,000 = Rp 22,000.', id: 'PM = 11% × 200.000 = Rp 22.000.' },
          { en: 'Remit PK − PM = <b>Rp 33,000</b> = 11% of the Rp 300,000 value added.', id: 'Setor PK − PM = <b>Rp 33.000</b> = 11% dari nilai tambah Rp 300.000.' }
        ], tip: { en: 'Always PK − PM; the result is 11% of value added.', id: 'Selalu PK − PM; hasilnya 11% nilai tambah.' } },
      { type: 'scenario', q: { en: 'Tax buoyancy was 2.04 in 2022 but −0.08 in 2025. What does each number tell you, and name two causes of buoyancy below zero.', id: 'Buoyancy 2,04 (2022) lalu −0,08 (2025). Apa artinya, dan dua penyebab buoyancy < 0?' },
        answer: [
          { en: '2.04 (>1): tax grew about twice as fast as GDP — a very responsive/strong year (commodity boom, recovery).', id: '2,04 (>1): pajak tumbuh ~2× lebih cepat dari PDB — sangat responsif.' },
          { en: '−0.08 (<0): tax <b>fell</b> even though GDP grew — a danger sign.', id: '−0,08 (<0): pajak <b>turun</b> walau PDB tumbuh — tanda bahaya.' },
          { en: 'Causes of negative buoyancy: large new tax incentives (tax expenditure), a commodity-price shock hitting PPh migas, or weakening administration/compliance.', id: 'Penyebab: insentif pajak besar, shock harga komoditas, atau pelemahan administrasi.' }
        ], tip: { en: 'Buoyancy < 0 = base shrank or incentives ballooned, not just slow growth.', id: 'Buoyancy < 0 = basis menyusut atau insentif membengkak.' } },
      { type: 'concept', q: { en: 'Why does the government tax tobacco heavily, and what is the trade-off of a very high excise rate?', id: 'Mengapa rokok dikenai cukai tinggi, dan apa trade-off tarif yang sangat tinggi?' },
        answer: [
          { en: 'Tobacco creates negative externalities and is a corrective (Pigouvian) target: control consumption (esp. child smokers), protect health, raise revenue.', id: 'Rokok menimbulkan eksternalitas negatif: kendalikan konsumsi, lindungi kesehatan, hasilkan penerimaan.' },
          { en: 'Trade-off: very high or widely-spaced tariffs push consumers to cheaper tiers and raise the <b>illegal-cigarette</b> share (~0.8pp per 10% hike), eroding revenue and harming tobacco-sector labour (SKT).', id: 'Trade-off: tarif sangat tinggi mendorong ke tier murah dan menaikkan rokok ilegal serta menekan tenaga kerja SKT.' }
        ], tip: { en: 'Corrective tax vs illegal-market leakage and labour impact.', id: 'Pajak korektif vs kebocoran pasar ilegal dan dampak tenaga kerja.' } },
      { type: 'quant', q: { en: 'A good passes three stages: buy 100k→sell 200k, buy 200k→sell 500k, buy 500k→sell 900k. PPN 11%. Find each stage’s setoran and total PPN.', id: 'Suatu barang melalui tiga tahap: beli 100rb→jual 200rb, beli 200rb→jual 500rb, beli 500rb→jual 900rb. PPN 11%. Hitung setoran tiap tahap dan total PPN.' },
        answer: [
          { en: 'Stage 1: PK 22k − PM 11k = <b>11k</b>. Stage 2: PK 55k − PM 22k = <b>33k</b>. Stage 3: PK 99k − PM 55k = <b>44k</b>.', id: 'Tahap 1: PK 22rb − PM 11rb = <b>11rb</b>. Tahap 2: PK 55rb − PM 22rb = <b>33rb</b>. Tahap 3: PK 99rb − PM 55rb = <b>44rb</b>.' },
          { en: 'Total = 11k + 33k + 44k = <b>Rp 88,000</b> = 11% × total value added Rp 800,000.', id: 'Total = 11rb + 33rb + 44rb = <b>Rp 88.000</b> = 11% × total nilai tambah Rp 800.000.' }
        ], tip: { en: 'Each setoran is 11% of that stage’s value added; they sum to 11% of total VA.', id: 'Tiap setoran = 11% nilai tambah tahap itu; jumlahnya = 11% total nilai tambah.' } },
      { type: 'concept', q: { en: 'Classify as central or regional: Pajak Kendaraan Bermotor, PPN, Cukai Hasil Tembakau, BPHTB, Pajak Restoran, PPh.', id: 'Klasifikasikan pusat atau daerah: Pajak Kendaraan Bermotor, PPN, Cukai Hasil Tembakau, BPHTB, Pajak Restoran, PPh.' },
        answer: [
          { en: '<b>Central</b>: PPN, Cukai Hasil Tembakau, PPh (all collected by the central government / DJP & DJBC).', id: '<b>Pusat</b>: PPN, Cukai Hasil Tembakau, PPh (dipungut pemerintah pusat / DJP & DJBC).' },
          { en: '<b>Regional</b>: PKB (provincial), Pajak Restoran (kab/kota), BPHTB (kab/kota).', id: '<b>Daerah</b>: PKB (provinsi), Pajak Restoran (kab/kota), BPHTB (kab/kota).' }
        ], tip: { en: 'Vehicles & surface water = provincial; local services/property = kab/kota; PPh/PPN/cukai/bea = central.', id: 'Kendaraan & air permukaan = provinsi; layanan/properti lokal = kab/kota; PPh/PPN/cukai/bea = pusat.' } },
      { type: 'quant', q: { en: 'A married employee with 2 dependants earns Rp 120 jt/yr gross (employee). Compute biaya jabatan, PTKP, and PKP.', id: 'Karyawan kawin dengan 2 tanggungan bergaji Rp 120 jt/thn bruto. Hitung biaya jabatan, PTKP, dan PKP.' },
        answer: [
          { en: 'Biaya jabatan = 5% × 120 jt = 6 jt (at the Rp 6 jt/yr cap). Net = 120 − 6 = Rp 114 jt.', id: 'Biaya jabatan = 5% × 120 jt = 6 jt (mentok cap Rp 6 jt/thn). Neto = 120 − 6 = Rp 114 jt.' },
          { en: 'PTKP = 54 (self) + 4.5 (married) + 2×4.5 (dependants) = <b>Rp 67.5 jt</b>.', id: 'PTKP = 54 (diri) + 4,5 (kawin) + 2×4,5 (tanggungan) = <b>Rp 67,5 jt</b>.' },
          { en: 'PKP = 114 − 67.5 = <b>Rp 46.5 jt</b> (then apply the progressive brackets).', id: 'PKP = 114 − 67,5 = <b>Rp 46,5 jt</b> (lalu terapkan bracket progresif).' }
        ], tip: { en: 'PKP = (gross − biaya jabatan) − PTKP; cap biaya jabatan at Rp 6 jt/yr.', id: 'PKP = (bruto − biaya jabatan) − PTKP; biaya jabatan maks Rp 6 jt/thn.' } },
      { type: 'scenario', q: { en: 'Why does Pillar Two set a 15% global minimum, and how does it stop the "race to the bottom"?', id: 'Mengapa Pillar Two menetapkan minimum global 15%, dan bagaimana ia menghentikan "race to the bottom"?' },
        answer: [
          { en: 'Tax competition pushed corporate rates ever lower as MNEs shifted profit (BEPS) to havens — eroding everyone’s base.', id: 'Kompetisi pajak menekan tarif badan makin rendah saat MNE mengalihkan laba (BEPS) ke tax haven — menggerus basis semua negara.' },
          { en: 'A 15% floor (GloBE + STTR) means if a haven taxes below 15%, another jurisdiction tops the MNE up to 15%, so cutting your rate below 15% no longer attracts the profit — removing the incentive to undercut.', id: 'Batas bawah 15% (GloBE + STTR) berarti bila tax haven memajaki di bawah 15%, yurisdiksi lain menambal MNE sampai 15%, sehingga memangkas tarif di bawah 15% tak lagi menarik laba — menghilangkan insentif membanting tarif.' }
        ], tip: { en: 'The top-up makes undercutting pointless — that is the floor’s mechanism.', id: 'Top-up membuat membanting tarif sia-sia — itulah mekanisme batas bawahnya.' } },
      { type: 'scenario', q: { en: 'Indonesia’s tax buoyancy fell to −0.08 in 2025 from 2.04 in 2022. Explain what negative buoyancy means and give plausible causes from the deck.', id: 'Tax buoyancy Indonesia turun ke −0,08 (2025) dari 2,04 (2022). Jelaskan arti buoyancy negatif dan penyebab yang mungkin dari deck.' },
        answer: [
          { en: 'Buoyancy = %ΔTax ÷ %ΔGDP. Negative means tax revenue <b>fell</b> while GDP still <b>grew</b> — the worst category.', id: 'Buoyancy = %ΔPajak ÷ %ΔPDB. Negatif berarti penerimaan pajak <b>turun</b> sementara PDB tetap <b>tumbuh</b> — kategori terburuk.' },
          { en: 'Plausible causes: a structural commodity-price drop hitting PPh migas, ballooning tax expenditure/incentives (Rp 530 T in 2025), or weakening administration/compliance.', id: 'Penyebab yang mungkin: penurunan harga komoditas struktural menekan PPh migas, belanja perpajakan/insentif membengkak (Rp 530 T pada 2025), atau pelemahan administrasi/kepatuhan.' }
        ], tip: { en: '2.04 (boom) → −0.08 (shrinking revenue): a base/incentive problem, not just slow growth.', id: '2,04 (boom) → −0,08 (penerimaan menyusut): masalah basis/insentif, bukan sekadar pertumbuhan lambat.' } }
    ]
  };
})();
