/* ESP Unit 6 — Fiscal decentralization & intergovernmental grants. Source: Dean Bambang. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u6 = {
    id: 'u6',
    label: { en: 'Unit 6', id: 'Unit 6' },
    title: { en: 'Fiscal Decentralization & Intergovernmental Grants', id: 'Desentralisasi Fiskal & Hibah Antarpemerintah' },
    subtitle: { en: 'Club & Tiebout · optimal federalism · property-tax incidence · grants & flypaper · Indonesia TKD/DAU/HKPD', id: 'Klub & Tiebout · federalisme optimal · insidensi PBB · hibah & flypaper · TKD/DAU/HKPD' },

    notes: [
      {
        heading: { en: 'The multigovernment puzzle & foundation terms', id: 'Teka-teki multipemerintah & istilah fondasi' }, num: '1',
        cards: [
          { title: { en: 'NCLB: the entry point', id: 'NCLB: titik masuk' },
            html: { en: '<p>The <span class="key">No Child Left Behind Act</span> (NCLB) pulled education oversight <b>toward the federal level</b>. It required: <b>state testing in grades 3–8</b>, <b>school report cards</b>, <b>student transfer rights</b>, and <b>teacher-qualification rules</b>.</p>' +
              '<table><thead><tr><th>Opponents said</th><th>Supporters said</th></tr></thead><tbody>' +
              '<tr><td>Washington does not know local conditions.</td><td>Education is a <b>national</b> issue.</td></tr>' +
              '<tr><td>Enforcing transfer rules in rural Alaska meant flying kids <b>164 miles</b> across the Bering Sea (Dillon 2003).</td><td>Weak schools <i>anywhere</i> hurt the whole country through <b>labour mobility</b>.</td></tr>' +
              '<tr><td>It forces state &amp; local tax increases.</td><td></td></tr></tbody></table>' +
              '<div class="note">💡 The NCLB controversy exposes the tensions of <i>any</i> federal system without requiring any theory — it is the "multigovernment puzzle": which level should do what, and who pays?</div>',
              id: '<p><span class="key">No Child Left Behind Act</span> (NCLB) menarik pengawasan pendidikan <b>ke tingkat federal</b>. Ia mewajibkan: <b>tes negara bagian kelas 3–8</b>, <b>rapor sekolah</b>, <b>hak transfer siswa</b>, dan <b>aturan kualifikasi guru</b>.</p>' +
              '<table><thead><tr><th>Penentang berkata</th><th>Pendukung berkata</th></tr></thead><tbody>' +
              '<tr><td>Washington tidak mengenal kondisi lokal.</td><td>Pendidikan adalah isu <b>nasional</b>.</td></tr>' +
              '<tr><td>Menegakkan aturan transfer di pedesaan Alaska berarti menerbangkan anak <b>164 mil</b> melintasi Laut Bering (Dillon 2003).</td><td>Sekolah lemah di <i>mana pun</i> merugikan seluruh negara lewat <b>mobilitas tenaga kerja</b>.</td></tr>' +
              '<tr><td>Memaksa kenaikan pajak negara bagian &amp; lokal.</td><td></td></tr></tbody></table>' +
              '<div class="note">💡 Kontroversi NCLB menyingkap ketegangan <i>setiap</i> sistem federal tanpa perlu teori apa pun — inilah "teka-teki multipemerintah": tingkat mana yang harus melakukan apa, dan siapa membayar?</div>' } },
          { title: { en: 'Foundation terms & the centralization ratio', id: 'Istilah fondasi & rasio sentralisasi' },
            html: { en: '<p>Three core terms anchor the field:</p>' +
              '<ul><li><span class="key">Federal system</span> — different levels of government each provide public goods & services, each with some scope for decision-making (used <i>analytically</i>, not only for constitutional federations).</li>' +
              '<li><span class="key">Fiscal federalism</span> — the field studying <b>(a)</b> what each level does, <b>(b)</b> how the levels interact, and <b>(c)</b> how revenue is assigned.</li>' +
              '<li><span class="key">Centralization ratio</span> = central direct expenditure ÷ total direct government expenditure. "Direct" <b>excludes transfers</b> to other governmental units, which avoids double-counting grant spending.</li></ul>' +
              '<table><thead><tr><th>Country</th><th>Centralization ratio</th></tr></thead><tbody>' +
              '<tr><td>France</td><td><b>81%</b> → highly centralized</td></tr>' +
              '<tr><td>United States</td><td><b>48%</b></td></tr>' +
              '<tr><td>Canada</td><td><b>43%</b> → strongly provincial</td></tr></tbody></table>' +
              '<div class="note">💡 <b>Caveat:</b> the ratio <i>understates</i> central control because of <b>unfunded mandates</b>. Example: the <i>Child Online Protection Act</i> — libraries lose federal grants if they refuse obscenity filters; most comply. The spending is recorded as "local" but the decision sits in Washington.</div>',
              id: '<p>Tiga istilah inti menjadi jangkar bidang ini:</p>' +
              '<ul><li><span class="key">Federal system</span> — berbagai tingkat pemerintahan masing-masing menyediakan barang & jasa publik, masing-masing dengan sebagian kewenangan keputusan (dipakai secara <i>analitis</i>, bukan hanya untuk federasi konstitusional).</li>' +
              '<li><span class="key">Fiscal federalism</span> — bidang yang mengkaji <b>(a)</b> apa yang dilakukan tiap tingkat, <b>(b)</b> bagaimana tingkat-tingkat berinteraksi, dan <b>(c)</b> bagaimana penerimaan ditugaskan.</li>' +
              '<li><span class="key">Centralization ratio</span> = belanja langsung pusat ÷ total belanja langsung pemerintah. "Langsung" <b>tidak termasuk transfer</b> ke unit pemerintahan lain, sehingga menghindari penghitungan ganda belanja hibah.</li></ul>' +
              '<table><thead><tr><th>Negara</th><th>Rasio sentralisasi</th></tr></thead><tbody>' +
              '<tr><td>Prancis</td><td><b>81%</b> → sangat terpusat</td></tr>' +
              '<tr><td>Amerika Serikat</td><td><b>48%</b></td></tr>' +
              '<tr><td>Kanada</td><td><b>43%</b> → sangat provinsial</td></tr></tbody></table>' +
              '<div class="note">💡 <b>Peringatan:</b> rasio ini <i>meremehkan</i> kendali pusat karena <b>mandat tanpa pendanaan (unfunded mandates)</b>. Contoh: <i>Child Online Protection Act</i> — perpustakaan kehilangan hibah federal jika menolak filter konten cabul; sebagian besar mematuhi. Belanjanya tercatat "lokal" tetapi keputusannya ada di Washington.</div>' } },
          { title: { en: 'US vs Indonesia foundation: a unitary state that decentralizes', id: 'Fondasi AS vs Indonesia: negara kesatuan yang berdesentralisasi' },
            html: { en: '<table><thead><tr><th>Dimension</th><th>US</th><th>Indonesia</th></tr></thead><tbody>' +
              '<tr><td>Primary tool</td><td>Strong local taxing power</td><td>Central transfers (<b>TKD</b>)</td></tr>' +
              '<tr><td>Local tax staple</td><td>Property tax ≈ <b>72%</b> of local revenue</td><td>PKB, PBJT, PBB-P2</td></tr>' +
              '<tr><td>Grants from center</td><td>Supplementary</td><td>Dominant (≈ <b>60–70%</b> of APBD)</td></tr></tbody></table>' +
              '<p>Indonesia is a <span class="key">unitary state</span>, not federal — constitutionally the "<b>Negara Kesatuan Republik Indonesia</b>." Yet the three fiscal-federalism questions apply identically; the difference is entirely in the <b>Q3 revenue-assignment</b> answer. Indonesia has run one of the developing world\'s <b>largest decentralization programs since 1999</b>.</p>' +
              '<div class="tip">📝 This one structural difference — revenue stays central, function is devolved — shapes the entire topic: it forces a transfer-based architecture (DAU/DBH/DAK) instead of US-style local taxing.</div>',
              id: '<table><thead><tr><th>Dimensi</th><th>AS</th><th>Indonesia</th></tr></thead><tbody>' +
              '<tr><td>Alat utama</td><td>Kewenangan pajak lokal kuat</td><td>Transfer pusat (<b>TKD</b>)</td></tr>' +
              '<tr><td>Pajak lokal andalan</td><td>PBB ≈ <b>72%</b> penerimaan lokal</td><td>PKB, PBJT, PBB-P2</td></tr>' +
              '<tr><td>Hibah dari pusat</td><td>Pelengkap</td><td>Dominan (≈ <b>60–70%</b> APBD)</td></tr></tbody></table>' +
              '<p>Indonesia adalah <span class="key">negara kesatuan</span>, bukan federal — secara konstitusi "<b>Negara Kesatuan Republik Indonesia</b>." Namun ketiga pertanyaan fiscal federalism berlaku identik; perbedaannya sepenuhnya pada jawaban <b>Q3 penugasan penerimaan</b>. Indonesia menjalankan salah satu <b>program desentralisasi terbesar di dunia berkembang sejak 1999</b>.</p>' +
              '<div class="tip">📝 Satu perbedaan struktural ini — penerimaan tetap di pusat, fungsi diserahkan — membentuk keseluruhan topik: ia memaksa arsitektur berbasis transfer (DAU/DBH/DAK) alih-alih pajak lokal gaya AS.</div>' } }
        ]
      },
      {
        heading: { en: 'Background: the Big Bang & division of functions', id: 'Latar: Big Bang & pembagian fungsi' }, num: '2',
        cards: [
          { title: { en: 'Indonesia\'s "Big Bang" decentralization (data)', id: 'Desentralisasi "Big Bang" Indonesia (data)' },
            html: { en: '<table><thead><tr><th>Indicator</th><th>Pre-1999</th><th>2020</th><th>2025</th></tr></thead><tbody>' +
              '<tr><td>Provinces</td><td>27</td><td>34</td><td><b>38</b></td></tr>' +
              '<tr><td>Kab/Kota</td><td>292</td><td>514</td><td>514 (416+98)</td></tr>' +
              '<tr><td>Regional civil servants</td><td>0.7 M</td><td>3.3 M</td><td>≈ 3.5 M</td></tr>' +
              '<tr><td>Transfer share of APBN</td><td>14.9% (2000)</td><td>32% avg</td><td>25% (2025)</td></tr>' +
              '<tr><td>TKD (Rp trillion)</td><td>33.1 (2000)</td><td>762.5 (COVID)</td><td>848.5</td></tr></tbody></table>' +
              '<p>Trigger: <span class="key">UU 22/1999</span> (regional government) and <span class="key">UU 25/1999</span> (fiscal balance), <b>effective 2001</b>. In <b>2022</b> Papua split into new provinces (now 6 Papua provinces). In <b>February 2025</b>, <b>Inpres 1/2025</b> cut TKD from Rp 919.9 T to Rp 848.5 T as an efficiency measure.</p>',
              id: '<table><thead><tr><th>Indikator</th><th>Pra-1999</th><th>2020</th><th>2025</th></tr></thead><tbody>' +
              '<tr><td>Provinsi</td><td>27</td><td>34</td><td><b>38</b></td></tr>' +
              '<tr><td>Kab/Kota</td><td>292</td><td>514</td><td>514 (416+98)</td></tr>' +
              '<tr><td>PNS daerah</td><td>0,7 jt</td><td>3,3 jt</td><td>≈ 3,5 jt</td></tr>' +
              '<tr><td>Pangsa transfer dari APBN</td><td>14,9% (2000)</td><td>rata-rata 32%</td><td>25% (2025)</td></tr>' +
              '<tr><td>TKD (Rp triliun)</td><td>33,1 (2000)</td><td>762,5 (COVID)</td><td>848,5</td></tr></tbody></table>' +
              '<p>Pemicu: <span class="key">UU 22/1999</span> (pemerintahan daerah) dan <span class="key">UU 25/1999</span> (perimbangan keuangan), <b>berlaku 2001</b>. Pada <b>2022</b> Papua dimekarkan (kini 6 provinsi Papua). Pada <b>Februari 2025</b>, <b>Inpres 1/2025</b> memangkas TKD dari Rp 919,9 T menjadi Rp 848,5 T sebagai langkah efisiensi.</p>' } },
          { title: { en: 'Division of functions: US vs Indonesia', id: 'Pembagian fungsi: AS vs Indonesia' },
            html: { en: '<p><b>US</b> (evolved over two centuries, not designed):</p>' +
              '<ul><li><b>Federal only:</b> national defence, Social Security.</li>' +
              '<li><b>State & local mostly:</b> K-12 education (local districts), public safety (police, fire).</li>' +
              '<li><b>Shared across all three:</b> public welfare (Medicaid the largest).</li></ul>' +
              '<p><b>Indonesia</b> (UUD 1945 Art 18, UU 23/2014). <span class="key">Absolute central affairs</span> that <b>cannot be delegated</b>: foreign relations, defence, security, judiciary, national monetary & fiscal policy, religion. Six <b>concurrent services</b> shared Province + Kab/Kota:</p>' +
              '<table><thead><tr><th>#</th><th>Service</th></tr></thead><tbody>' +
              '<tr><td>1</td><td>Education</td></tr><tr><td>2</td><td>Health</td></tr>' +
              '<tr><td>3</td><td>Public works & spatial planning</td></tr><tr><td>4</td><td>Housing & settlement</td></tr>' +
              '<tr><td>5</td><td>Public order & community protection</td></tr><tr><td>6</td><td>Social affairs</td></tr></tbody></table>' +
              '<div class="note">💡 Principle: <span class="key">money follows function</span> — decide <i>who does what</i> first, then assign revenue. Indonesia\'s structural problem: <b>function was devolved faster than revenue authority</b>, producing a chronic <b>vertical fiscal gap</b> that central transfers must fill.</div>',
              id: '<p><b>AS</b> (berevolusi selama dua abad, tidak dirancang):</p>' +
              '<ul><li><b>Federal saja:</b> pertahanan nasional, Social Security.</li>' +
              '<li><b>Mayoritas negara bagian & lokal:</b> pendidikan K-12 (distrik lokal), keamanan publik (polisi, pemadam).</li>' +
              '<li><b>Dibagi ketiganya:</b> kesejahteraan publik (Medicaid terbesar).</li></ul>' +
              '<p><b>Indonesia</b> (UUD 1945 Pasal 18, UU 23/2014). <span class="key">Urusan absolut pusat</span> yang <b>tak dapat didelegasikan</b>: hubungan luar negeri, pertahanan, keamanan, yudikatif, moneter & fiskal nasional, agama. Enam <b>urusan konkuren</b> dibagi Provinsi + Kab/Kota:</p>' +
              '<table><thead><tr><th>#</th><th>Urusan</th></tr></thead><tbody>' +
              '<tr><td>1</td><td>Pendidikan</td></tr><tr><td>2</td><td>Kesehatan</td></tr>' +
              '<tr><td>3</td><td>Pekerjaan umum & penataan ruang</td></tr><tr><td>4</td><td>Perumahan & permukiman</td></tr>' +
              '<tr><td>5</td><td>Ketenteraman & perlindungan masyarakat</td></tr><tr><td>6</td><td>Sosial</td></tr></tbody></table>' +
              '<div class="note">💡 Prinsip: <span class="key">money follows function</span> — tentukan <i>siapa melakukan apa</i> dulu, lalu tugaskan penerimaan. Masalah struktural Indonesia: <b>fungsi diserahkan lebih cepat daripada kewenangan penerimaan</b>, menghasilkan <b>gap fiskal vertikal</b> kronis yang harus ditutup transfer pusat.</div>' } }
        ]
      },
      {
        heading: { en: 'Why communities exist: club & Tiebout', id: 'Mengapa komunitas ada: klub & Tiebout' }, num: '3',
        cards: [
          { title: { en: 'Foundations & the club model', id: 'Fondasi & model klub' },
            html: { en: '<p>A <span class="key">federal system</span> = different levels of government each provide public goods with some decision scope; <span class="key">fiscal federalism</span> studies what each level does and how they interact. The <span class="key">centralization ratio</span> = central direct spending ÷ total direct spending (France 81%, US 48%, Canada 43%).</p>' +
              '<p>The <span class="key">club model</span> (Buchanan 1965) explains jurisdiction size. A club shares a benefit and excludes non-members; two margins set the optimum jointly:</p>' +
              '<ul><li><b>Membership margin</b>: stop admitting when marginal fee reduction = marginal congestion cost.</li>' +
              '<li><b>Facility margin</b>: stop expanding when marginal benefit = per-member marginal cost.</li></ul>' +
              '<div class="note">💡 Different goods → different optimal community sizes → justifies overlapping jurisdictions. Indonesia’s <span class="key">pemekaran</span> (splitting regions) is a live club experiment — but DAU "basic allocation" created a perverse incentive to split, so a 2014 moratorium was imposed.</div>',
              id: '<p>Sebuah <span class="key">federal system</span> = berbagai tingkat pemerintahan masing-masing menyediakan barang publik dengan sebagian kewenangan keputusan; <span class="key">fiscal federalism</span> mengkaji apa yang dilakukan tiap tingkat dan bagaimana mereka berinteraksi. <span class="key">centralization ratio</span> = belanja langsung pusat ÷ total belanja langsung (Prancis 81%, AS 48%, Kanada 43%).</p>' +
              '<p><span class="key">club model</span> (Buchanan 1965) menjelaskan ukuran yurisdiksi. Sebuah klub berbagi manfaat dan mengecualikan non-anggota; dua margin menetapkan titik optimum secara bersama:</p>' +
              '<ul><li><b>Margin keanggotaan</b>: berhenti menerima anggota ketika pengurangan iuran marginal = biaya kemacetan marginal.</li>' +
              '<li><b>Margin fasilitas</b>: berhenti memperluas ketika manfaat marginal = biaya marginal per anggota.</li></ul>' +
              '<div class="note">💡 Barang berbeda → ukuran komunitas optimal berbeda → membenarkan yurisdiksi yang tumpang tindih. <span class="key">pemekaran</span> di Indonesia adalah eksperimen klub yang nyata — tetapi "alokasi dasar" DAU menciptakan insentif keliru untuk memekarkan, sehingga moratorium diberlakukan pada 2014.</div>' } },
          { title: { en: 'Club assumptions & the pemekaran experiment', id: 'Asumsi klub & eksperimen pemekaran' },
            html: { en: '<p>The club model rests on four simplifying <b>assumptions</b>: (1) <b>identical tastes</b> across members; (2) <b>equal cost & benefit sharing</b>; (3) <b>costless exclusion</b> of non-members; (4) <b>no transaction costs</b>. Optimal community size then depends on the type of public good, the degree of crowding, and the cost of provision.</p>' +
              '<p>Indonesia\'s <span class="key">pemekaran</span> (splitting autonomous regions) is a live club experiment:</p>' +
              '<table><thead><tr><th>Year</th><th>State</th></tr></thead><tbody>' +
              '<tr><td>1998</td><td>26 provinces (after Timor Leste referendum), 256 districts</td></tr>' +
              '<tr><td>1999–2014</td><td>rapid proliferation under <i>otonomi daerah</i></td></tr>' +
              '<tr><td>2014</td><td><b>moratorium</b> imposed (too much rent-seeking)</td></tr>' +
              '<tr><td>2022</td><td>Papua split into new provinces</td></tr>' +
              '<tr><td>2025</td><td>38 provinces, 514 kab/kota</td></tr></tbody></table>' +
              '<p><b>Why pemekaran happens</b> (matches club theory): ethnic/religious heterogeneity → tailoring to tastes; preference for closer, smaller government. <b>Why it fails</b>: rent-seeking (new offices, capital-city spending, civil-service posts) and the DAU "<b>basic allocation</b>" perverse incentive to split.</p>' +
              '<div class="tip">📝 Lesson: club formation works only with <b>institutional guardrails</b> — without them, the gains from tailoring are swamped by duplicated overhead.</div>',
              id: '<p>Model klub bertumpu pada empat <b>asumsi</b> penyederhana: (1) <b>selera identik</b> antaranggota; (2) <b>berbagi biaya & manfaat secara setara</b>; (3) <b>pengecualian tanpa biaya</b> bagi non-anggota; (4) <b>tanpa biaya transaksi</b>. Ukuran komunitas optimal lalu bergantung pada jenis barang publik, derajat kemacetan, dan biaya penyediaan.</p>' +
              '<p><span class="key">Pemekaran</span> di Indonesia adalah eksperimen klub yang nyata:</p>' +
              '<table><thead><tr><th>Tahun</th><th>Kondisi</th></tr></thead><tbody>' +
              '<tr><td>1998</td><td>26 provinsi (setelah referendum Timor Leste), 256 kabupaten</td></tr>' +
              '<tr><td>1999–2014</td><td>proliferasi cepat di bawah <i>otonomi daerah</i></td></tr>' +
              '<tr><td>2014</td><td><b>moratorium</b> diberlakukan (terlalu banyak rent-seeking)</td></tr>' +
              '<tr><td>2022</td><td>Papua dimekarkan menjadi provinsi baru</td></tr>' +
              '<tr><td>2025</td><td>38 provinsi, 514 kab/kota</td></tr></tbody></table>' +
              '<p><b>Mengapa pemekaran terjadi</b> (sesuai teori klub): heterogenitas etnis/agama → penyesuaian selera; preferensi pemerintah yang lebih dekat dan kecil. <b>Mengapa gagal</b>: rent-seeking (kantor baru, belanja ibu kota, jabatan PNS) dan insentif keliru "<b>alokasi dasar</b>" DAU untuk memekarkan.</p>' +
              '<div class="tip">📝 Pelajaran: pembentukan klub hanya berhasil dengan <b>pagar institusional</b> — tanpanya, keuntungan penyesuaian tenggelam oleh biaya overhead yang berlipat.</div>' } },
          { title: { en: 'Tiebout: voting with the feet', id: 'Tiebout: memilih dengan kaki' },
            html: { en: '<p><span class="key">Tiebout (1956)</span>: with many jurisdictions offering different tax-service bundles and <b>costless mobility</b>, people sort into the town that matches their tastes. In equilibrium everyone is optimally placed → <b>Pareto efficiency without central intervention</b>; the free-rider problem dissolves.</p>' +
              '<p>The assumptions are demanding: no spillovers, costless mobility, perfect information, enough communities for every taste, constant cost, property-tax finance (Hamilton), and exclusionary zoning.</p>' +
              '<div class="tip">📝 Indonesia: weak Tiebout (low mobility, kin networks, thin housing markets, undifferentiated bundles). Weaker sorting → weaker efficiency case → <b>stronger case for transfer-based equalization</b>.</div>',
              id: '<p><span class="key">Tiebout (1956)</span>: dengan banyak yurisdiksi yang menawarkan paket pajak-layanan berbeda dan <b>mobilitas tanpa biaya</b>, orang menyortir diri ke kota yang sesuai selera. Dalam ekuilibrium semua orang berada di posisi optimal → <b>efisiensi Pareto tanpa intervensi pusat</b>; masalah free-rider lenyap.</p>' +
              '<p>Asumsinya berat: tanpa spillover, mobilitas tanpa biaya, informasi sempurna, cukup komunitas untuk setiap selera, biaya konstan, pembiayaan lewat PBB (Hamilton), dan zonasi eksklusif.</p>' +
              '<div class="tip">📝 Indonesia: Tiebout lemah (mobilitas rendah, jaringan kekerabatan, pasar perumahan tipis, paket layanan tak terdiferensiasi). Penyortiran lebih lemah → argumen efisiensi lebih lemah → <b>argumen lebih kuat untuk pemerataan berbasis transfer</b>.</div>' } }
        ]
      },
      {
        heading: { en: 'Optimal federalism: who should do what', id: 'Federalisme optimal: siapa melakukan apa' }, num: '4',
        cards: [
          { title: { en: 'Disadvantages of decentralization', id: 'Kerugian desentralisasi' },
            html: { en: '<p><b>Efficiency problems:</b></p><ol>' +
              '<li><b>Externalities across jurisdictions</b> — each town ignores spillovers (pollution, educated emigrants).</li>' +
              '<li><b>Lost scale economies</b> — every town builds its own library; total cost too high.</li>' +
              '<li><b>Inefficient taxes (race to the bottom)</b> — mobile capital is under-taxed as towns compete.</li>' +
              '<li><b>Tax exporting</b> — shifting tax to non-residents makes local public goods feel cheap → over-provision.</li></ol>' +
              '<p><b>Equity problem:</b> local redistribution fails — the poor migrate in, the rich move out → fiscally unsustainable. ⇒ <b>redistribution must be largely central</b>.</p>' +
              '<div class="note">💡 For Indonesia the <b>inefficient-taxation</b> argument was decisive: tax bases are geographically uneven (oil/gas in Aceh, Riau, Kaltim, Papua; industry in Java), so pure local taxing would explode horizontal inequality. Hence taxing power stayed central (DJP) and a <b>vertical fiscal gap</b> opened that transfers must fill.</div>',
              id: '<p><b>Masalah efisiensi:</b></p><ol>' +
              '<li><b>Eksternalitas antaryurisdiksi</b> — tiap kota mengabaikan spillover (polusi, emigran terdidik).</li>' +
              '<li><b>Hilangnya skala ekonomi</b> — tiap kota membangun perpustakaannya sendiri; total biaya terlalu tinggi.</li>' +
              '<li><b>Pajak tidak efisien (race to the bottom)</b> — modal yang mobil terlalu rendah dipajaki saat kota saling bersaing.</li>' +
              '<li><b>Ekspor pajak</b> — mengalihkan pajak ke non-penduduk membuat barang publik lokal terasa murah → over-provisi.</li></ol>' +
              '<p><b>Masalah keadilan:</b> redistribusi lokal gagal — yang miskin bermigrasi masuk, yang kaya pindah keluar → tidak berkelanjutan secara fiskal. ⇒ <b>redistribusi harus sebagian besar di pusat</b>.</p>' +
              '<div class="note">💡 Bagi Indonesia argumen <b>pajak tidak efisien</b> bersifat menentukan: basis pajak timpang secara geografis (migas di Aceh, Riau, Kaltim, Papua; industri di Jawa), sehingga pajak lokal murni akan meledakkan ketimpangan horizontal. Karena itu kewenangan pajak tetap di pusat (DJP) dan terbuka <b>gap fiskal vertikal</b> yang harus ditutup transfer.</div>' } },
          { title: { en: 'Advantages of decentralization & "money follows function"', id: 'Keunggulan desentralisasi' },
            html: { en: '<p><b>Three wins:</b> (A) <b>tailoring to local tastes</b> (de Tocqueville; Strumpf–Oberholzer-Gee), (B) <b>competition disciplines governments</b> (Fisman–Gatti: less corruption), (C) <b>laboratories of democracy</b> (Brandeis).</p>' +
              '<p>Assignment principle — <span class="key">money follows function</span>:</p>' +
              '<table><thead><tr><th>Good</th><th>Assign to</th></tr></thead><tbody>' +
              '<tr><td>National public goods (defence, social security)</td><td>Central</td></tr>' +
              '<tr><td>Local public goods (garbage, parks)</td><td>Local</td></tr>' +
              '<tr><td>Spillover goods (primary education)</td><td>Local provision + central Pigouvian grants</td></tr>' +
              '<tr><td>Redistribution</td><td>Largely central</td></tr></tbody></table>' +
              '<div class="tip">📝 Indonesia’s twist: <b>asymmetric decentralization</b> (special status for Aceh, Papua, Yogyakarta, DKJ) does constitutional-level tailoring that US-style federalism cannot. Indonesia decided <i>function</i> first (UU 23/2014) but devolved it faster than revenue — the vertical fiscal gap.</div>',
              id: '<p><b>Tiga keunggulan:</b> (A) <b>penyesuaian dengan selera lokal</b> (de Tocqueville; Strumpf–Oberholzer-Gee), (B) <b>kompetisi mendisiplinkan pemerintah</b> (Fisman–Gatti: korupsi lebih rendah), (C) <b>laboratorium demokrasi</b> (Brandeis).</p>' +
              '<p>Prinsip penugasan — <span class="key">money follows function</span>:</p>' +
              '<table><thead><tr><th>Barang</th><th>Ditugaskan ke</th></tr></thead><tbody>' +
              '<tr><td>Barang publik nasional (pertahanan, jaminan sosial)</td><td>Pusat</td></tr>' +
              '<tr><td>Barang publik lokal (sampah, taman)</td><td>Daerah</td></tr>' +
              '<tr><td>Barang ber-spillover (pendidikan dasar)</td><td>Penyediaan daerah + hibah Pigouvian pusat</td></tr>' +
              '<tr><td>Redistribusi</td><td>Sebagian besar pusat</td></tr></tbody></table>' +
              '<div class="tip">📝 Keunikan Indonesia: <b>desentralisasi asimetris</b> (status khusus untuk Aceh, Papua, Yogyakarta, DKJ) melakukan penyesuaian tingkat konstitusi yang tak bisa dilakukan federalisme gaya AS. Indonesia menetapkan <i>fungsi</i> lebih dulu (UU 23/2014) tetapi menyerahkannya lebih cepat daripada penerimaan — gap fiskal vertikal.</div>' } },
          { title: { en: 'Asymmetric decentralization: a unitary-state tool', id: 'Desentralisasi asimetris: alat negara kesatuan' },
            html: { en: '<p><span class="key">Asymmetric decentralization</span> = special authority granted to <b>specific</b> jurisdictions — a tool that does <b>not exist in US-style federalism</b>. Indonesia uses it to manage diversity while keeping the unitary state intact (constitutional-level tailoring).</p>' +
              '<table><thead><tr><th>Region</th><th>Legal basis</th><th>Special arrangement</th></tr></thead><tbody>' +
              '<tr><td><b>Aceh</b></td><td>UU 11/2006</td><td>Syariah law, extra DBH Migas, Dana Otsus Aceh (since 2008, post-GAM peace)</td></tr>' +
              '<tr><td><b>Papua</b> (6 provinces)</td><td>UU 21/2001 + UU 2/2021</td><td>Dana Otsus + Dana Tambahan Infrastruktur (DTI), extended to 2041</td></tr>' +
              '<tr><td><b>Yogyakarta</b></td><td>UU 13/2012</td><td>Sultan = Governor, Dana Keistimewaan since 2013</td></tr>' +
              '<tr><td><b>DKJ (Jakarta)</b></td><td>UU 2/2024</td><td>Post-IKN relocation, special capital status</td></tr></tbody></table>' +
              '<div class="tip">📝 This is how Indonesia does <b>tailoring at the constitutional level</b> — a unitary-state innovation that US-style federalism, with its symmetric states, simply cannot replicate.</div>',
              id: '<p><span class="key">Desentralisasi asimetris</span> = kewenangan khusus diberikan ke yurisdiksi <b>tertentu</b> — alat yang <b>tidak ada dalam federalisme gaya AS</b>. Indonesia memakainya untuk mengelola keberagaman sambil menjaga negara kesatuan tetap utuh (penyesuaian tingkat konstitusi).</p>' +
              '<table><thead><tr><th>Daerah</th><th>Dasar hukum</th><th>Pengaturan khusus</th></tr></thead><tbody>' +
              '<tr><td><b>Aceh</b></td><td>UU 11/2006</td><td>Hukum Syariah, tambahan DBH Migas, Dana Otsus Aceh (sejak 2008, pasca-damai GAM)</td></tr>' +
              '<tr><td><b>Papua</b> (6 provinsi)</td><td>UU 21/2001 + UU 2/2021</td><td>Dana Otsus + Dana Tambahan Infrastruktur (DTI), diperpanjang hingga 2041</td></tr>' +
              '<tr><td><b>Yogyakarta</b></td><td>UU 13/2012</td><td>Sultan = Gubernur, Dana Keistimewaan sejak 2013</td></tr>' +
              '<tr><td><b>DKJ (Jakarta)</b></td><td>UU 2/2024</td><td>Pasca-relokasi IKN, status ibu kota khusus</td></tr></tbody></table>' +
              '<div class="tip">📝 Inilah cara Indonesia melakukan <b>penyesuaian di tingkat konstitusi</b> — inovasi negara kesatuan yang tak bisa ditiru federalisme gaya AS dengan negara bagiannya yang simetris.</div>' } },
          { title: { en: 'US education: the running example', id: 'Pendidikan AS: contoh berjalan' },
            html: { en: '<p>Total US education spending 2008: <b>$985 billion</b>. By level: <b>federal 16%</b>, <b>state 23%</b>, <b>local & other 61%</b>. Education is ≈ <b>18%</b> of state direct expenditure and ≈ <b>38%</b> of local direct expenditure; <b>9 of 10</b> American children attend public schools.</p>' +
              '<p>Does the pattern fit theory? <b>Tailoring: yes</b> — parents vary in preferences. <b>Inequity: severe</b> — in California (2008) the richest district spent <b>11×</b> more per pupil than the poorest (US Census 2010). The federal role concentrates on equity & public-good components:</p>' +
              '<ul><li><b>Title I</b> (disadvantaged): $22.1 B (2010)</li>' +
              '<li><b>Special Education</b>: $16.5 B (2010)</li>' +
              '<li>Higher-ed research (a public good — avoids the free-rider problem)</li></ul>' +
              '<div class="note">💡 Education is the canonical <b>spillover good</b>: local provision for tailoring + central grants for equity. The 11× gap is exactly why redistribution/equalization cannot be left purely local.</div>',
              id: '<p>Total belanja pendidikan AS 2008: <b>$985 miliar</b>. Per tingkat: <b>federal 16%</b>, <b>negara bagian 23%</b>, <b>lokal & lainnya 61%</b>. Pendidikan ≈ <b>18%</b> belanja langsung negara bagian dan ≈ <b>38%</b> belanja langsung lokal; <b>9 dari 10</b> anak AS bersekolah di sekolah publik.</p>' +
              '<p>Apakah pola ini cocok dengan teori? <b>Penyesuaian: ya</b> — selera orang tua bervariasi. <b>Ketimpangan: parah</b> — di California (2008) distrik terkaya membelanjakan <b>11×</b> lebih banyak per murid daripada termiskin (US Census 2010). Peran federal terpusat pada komponen keadilan & barang publik:</p>' +
              '<ul><li><b>Title I</b> (kurang beruntung): $22,1 M (2010)</li>' +
              '<li><b>Pendidikan Khusus</b>: $16,5 M (2010)</li>' +
              '<li>Riset pendidikan tinggi (barang publik — menghindari free-rider)</li></ul>' +
              '<div class="note">💡 Pendidikan adalah <b>barang ber-spillover</b> kanonik: penyediaan lokal untuk penyesuaian + hibah pusat untuk keadilan. Kesenjangan 11× persis alasan redistribusi/pemerataan tak boleh sepenuhnya lokal.</div>' } },
          { title: { en: 'Mandatory spending: what actually binds (2026)', id: 'Belanja wajib: apa yang benar-benar mengikat (2026)' },
            html: { en: '<table><thead><tr><th>Mandate</th><th>Status</th><th>Legal basis</th></tr></thead><tbody>' +
              '<tr><td>Education ≥ 20% APBN & APBD</td><td><b>BINDING</b></td><td>UUD 1945 Art 31(4), UU 20/2003</td></tr>' +
              '<tr><td>Health ≥ 5% APBN, ≥ 10% APBD</td><td><b>REPEALED 2023</b></td><td>UU 36/2009 Art 171, cancelled by UU 17/2023</td></tr>' +
              '<tr><td>Infrastructure ≥ 40% APBD</td><td><b>NEW 2022</b></td><td>UU 1/2022 HKPD Art 143 (5-yr transition)</td></tr>' +
              '<tr><td>Personnel ≤ 30% APBD</td><td><b>NEW 2022</b></td><td>UU 1/2022 HKPD (excl. teacher allowances)</td></tr>' +
              '<tr><td>Dana Desa ≥ 10% dana perimbangan</td><td><b>BINDING</b></td><td>UU 6/2014</td></tr>' +
              '<tr><td>DAU ≥ 26% PDN Neto</td><td><b>REPEALED</b></td><td>UU 33/2004, cancelled by UU 1/2022</td></tr></tbody></table>' +
              '<p>APBN 2025: education Rp 724.3 T (<b>exactly 20%</b> of Rp 3,621.3 T); health Rp 217.3 T (≈ 6%, <i>above</i> the old 5% floor despite repeal). RAPBN 2026 education: Rp 757.8 T (20%).</p>' +
              '<div class="note">💡 Why was health\'s mandate removed (Menkes 2023)? Shift to "money follows program"; the old 5% rule pushed wasteful spending (a stunting budget once renovated Puskesmas fences). Critics (CELIOS, BPJS Watch, CISDI): before 2022 only <b>11.8%</b> of regions met the 10% mandate — removal risks worse. <b>Open question</b>: is performance-based budgeting mature enough to replace hard mandates?</div>',
              id: '<table><thead><tr><th>Mandat</th><th>Status</th><th>Dasar hukum</th></tr></thead><tbody>' +
              '<tr><td>Pendidikan ≥ 20% APBN & APBD</td><td><b>MENGIKAT</b></td><td>UUD 1945 Pasal 31(4), UU 20/2003</td></tr>' +
              '<tr><td>Kesehatan ≥ 5% APBN, ≥ 10% APBD</td><td><b>DICABUT 2023</b></td><td>UU 36/2009 Pasal 171, dibatalkan UU 17/2023</td></tr>' +
              '<tr><td>Infrastruktur ≥ 40% APBD</td><td><b>BARU 2022</b></td><td>UU 1/2022 HKPD Pasal 143 (transisi 5 thn)</td></tr>' +
              '<tr><td>Pegawai ≤ 30% APBD</td><td><b>BARU 2022</b></td><td>UU 1/2022 HKPD (di luar tunjangan guru)</td></tr>' +
              '<tr><td>Dana Desa ≥ 10% dana perimbangan</td><td><b>MENGIKAT</b></td><td>UU 6/2014</td></tr>' +
              '<tr><td>DAU ≥ 26% PDN Neto</td><td><b>DICABUT</b></td><td>UU 33/2004, dibatalkan UU 1/2022</td></tr></tbody></table>' +
              '<p>APBN 2025: pendidikan Rp 724,3 T (<b>tepat 20%</b> dari Rp 3.621,3 T); kesehatan Rp 217,3 T (≈ 6%, <i>di atas</i> lantai lama 5% meski dicabut). RAPBN 2026 pendidikan: Rp 757,8 T (20%).</p>' +
              '<div class="note">💡 Mengapa mandat kesehatan dicabut (Menkes 2023)? Peralihan ke "money follows program"; aturan lama 5% mendorong belanja boros (anggaran stunting pernah dipakai merenovasi pagar Puskesmas). Kritikus (CELIOS, BPJS Watch, CISDI): sebelum 2022 hanya <b>11,8%</b> daerah memenuhi mandat 10% — pencabutan berisiko memperburuk. <b>Pertanyaan terbuka</b>: apakah penganggaran berbasis kinerja cukup matang menggantikan mandat keras?</div>' } }
        ]
      },
      {
        heading: { en: 'Property tax: incidence & views', id: 'PBB: insidensi & pandangan' }, num: '5',
        cards: [
          { title: { en: 'Property-tax basics & the numbers', id: 'Dasar PBB & angkanya' },
            html: { en: '<p><b>US numbers (2008):</b> total property tax <b>$410 B</b> — local $397 B · state $13 B · federal $0. Property tax is <b>72%</b> of local tax revenue. "There is no single property tax, only thousands of more-or-less independent systems."</p>' +
              '<p>The formula is Tax = Rate × Assessed Value, with <span class="key">assessment ratio</span> = assessed ÷ market value. Equal <i>statutory</i> rates can give different <i>effective</i> rates:</p>' +
              '<table><thead><tr><th></th><th>Market</th><th>Assessed</th><th>Ratio</th><th>Rate</th><th>Tax</th><th>Effective</th></tr></thead><tbody>' +
              '<tr><td><b>Ophelia</b></td><td>100,000</td><td>100,000</td><td>1.00</td><td>2%</td><td>2,000</td><td><b>2.00%</b></td></tr>' +
              '<tr><td><b>Hamlet</b></td><td>100,000</td><td>80,000</td><td>0.80</td><td>2%</td><td>1,600</td><td><b>1.60%</b></td></tr></tbody></table>' +
              '<p>Effective rates across US cities (Rosen & Gayer Table 22.1, 2009): Indianapolis <b>2.75%</b> · Detroit <b>2.11%</b> · Boston <b>1.06%</b> · Seattle <b>0.79%</b> · NYC <b>0.62%</b>.</p>' +
              '<div class="tip">📝 Same 2% statutory rate, different effective rates — purely because of assessment. To compare burdens you must use <b>effective</b>, not statutory, rates.</div>',
              id: '<p><b>Angka AS (2008):</b> total PBB <b>$410 M</b> — lokal $397 M · negara bagian $13 M · federal $0. PBB adalah <b>72%</b> penerimaan pajak lokal. "Tidak ada satu PBB tunggal, hanya ribuan sistem yang kurang-lebih independen."</p>' +
              '<p>Rumusnya Pajak = Tarif × Nilai Taksiran, dengan <span class="key">assessment ratio</span> = nilai taksiran ÷ nilai pasar. Tarif <i>statuter</i> sama bisa memberi tarif <i>efektif</i> berbeda:</p>' +
              '<table><thead><tr><th></th><th>Pasar</th><th>Taksiran</th><th>Rasio</th><th>Tarif</th><th>Pajak</th><th>Efektif</th></tr></thead><tbody>' +
              '<tr><td><b>Ophelia</b></td><td>100.000</td><td>100.000</td><td>1,00</td><td>2%</td><td>2.000</td><td><b>2,00%</b></td></tr>' +
              '<tr><td><b>Hamlet</b></td><td>100.000</td><td>80.000</td><td>0,80</td><td>2%</td><td>1.600</td><td><b>1,60%</b></td></tr></tbody></table>' +
              '<p>Tarif efektif lintas kota AS (Rosen & Gayer Tabel 22.1, 2009): Indianapolis <b>2,75%</b> · Detroit <b>2,11%</b> · Boston <b>1,06%</b> · Seattle <b>0,79%</b> · NYC <b>0,62%</b>.</p>' +
              '<div class="tip">📝 Tarif statuter 2% sama, tarif efektif berbeda — murni karena penilaian. Untuk membandingkan beban Anda harus pakai tarif <b>efektif</b>, bukan statuter.</div>' } },
          { title: { en: 'Land vs structures — who really pays', id: 'Tanah vs bangunan — siapa membayar' },
            html: { en: '<p>Tax Liability = Rate × Assessed Value; the <span class="key">assessment ratio</span> (assessed ÷ market value) means equal statutory rates can give different <i>effective</i> rates.</p>' +
              '<p><b>Traditional view splits the tax:</b></p>' +
              '<ul><li><b>Tax on LAND</b> — supply is <b>vertical</b> (fixed). The tax cannot change quantity, so the user price is unchanged and <b>landowners bear 100%</b>. No deadweight loss. Via <span class="key">capitalization</span>, the owner at the moment the tax is imposed bears it forever.</li>' +
              '<li><b>Tax on STRUCTURES</b> — capital is mobile, so long-run supply is <b>horizontal</b>. The tax raises the price tenants pay by the full amount and cuts quantity → <b>tenants bear 100%</b>, with a deadweight loss.</li></ul>' +
              '<div class="tip">📝 See both in the Graphs tab — the vertical vs horizontal supply curve is the whole story of who bears a property tax.</div>',
              id: '<p>Kewajiban Pajak = Tarif × Nilai Taksiran; <span class="key">assessment ratio</span> (nilai taksiran ÷ nilai pasar) berarti tarif statuter yang sama dapat menghasilkan tarif <i>efektif</i> berbeda.</p>' +
              '<p><b>Pandangan tradisional membagi pajak:</b></p>' +
              '<ul><li><b>Pajak atas TANAH</b> — penawaran bersifat <b>vertikal</b> (tetap). Pajak tak bisa mengubah kuantitas, sehingga harga pengguna tak berubah dan <b>pemilik tanah menanggung 100%</b>. Tanpa deadweight loss. Lewat <span class="key">capitalization</span>, pemilik pada saat pajak dikenakan menanggungnya selamanya.</li>' +
              '<li><b>Pajak atas BANGUNAN</b> — modal bersifat mobil, sehingga penawaran jangka panjang bersifat <b>horizontal</b>. Pajak menaikkan harga yang dibayar penyewa sebesar penuh dan memangkas kuantitas → <b>penyewa menanggung 100%</b>, disertai deadweight loss.</li></ul>' +
              '<div class="tip">📝 Lihat keduanya di tab Grafik — kurva penawaran vertikal vs horizontal adalah keseluruhan cerita siapa menanggung PBB.</div>' } },
          { title: { en: 'New view, user-fee view & Indonesia’s PBB', id: 'Pandangan baru, user-fee & PBB Indonesia' },
            html: { en: '<p><b>New view</b> (Mieszkowski–Zodrow): treat it as a tax on <i>all</i> capital — national capital is fixed, so capital owners bear it → <b>progressive</b>, plus excise effects (capital flees high-tax areas). <b>User-fee view</b> (Tiebout): the tax is the <i>price</i> for the local service bundle you chose → incidence is meaningless, no excess burden. The three views fit different contexts.</p>' +
              '<p><b>Indonesia’s PBB journey</b>: central (UU 12/1985) → UU 28/2009 devolved <b>PBB-P2</b> (urban/rural land) and <b>BPHTB</b> to kab/kota (2014); PBB sektor <b>P3</b> (plantation, forestry, mining) stays central. <b>UU 1/2022 (HKPD)</b>: PBB-P2 cap 0.5%, DBH PBB raised 90%→100% to host regions, plus the <b>Opsen</b> surtax system. PBB is widely hated (valuation, visibility, perceived regressivity, political accessibility — Prop 13, 1978) and under-performs as PAD in Indonesia (collection often < 50%).</p>',
              id: '<p><b>New view</b> (Mieszkowski–Zodrow): perlakukan sebagai pajak atas <i>seluruh</i> modal — modal nasional bersifat tetap, sehingga pemilik modal menanggungnya → <b>progresif</b>, ditambah efek cukai (modal kabur dari wilayah berpajak tinggi). <b>User-fee view</b> (Tiebout): pajak adalah <i>harga</i> untuk paket layanan lokal yang Anda pilih → insidensi tak bermakna, tanpa beban berlebih. Ketiga pandangan ini cocok untuk konteks berbeda.</p>' +
              '<p><b>Perjalanan PBB Indonesia</b>: terpusat (UU 12/1985) → UU 28/2009 menyerahkan <b>PBB-P2</b> (tanah perkotaan/perdesaan) dan <b>BPHTB</b> ke kab/kota (2014); PBB sektor <b>P3</b> (perkebunan, kehutanan, pertambangan) tetap di pusat. <b>UU 1/2022 (HKPD)</b>: PBB-P2 dibatasi 0,5%, DBH PBB dinaikkan 90%→100% ke daerah penghasil, plus sistem surtax <b>Opsen</b>. PBB banyak dibenci (penilaian, visibilitas, persepsi regresivitas, aksesibilitas politis — Prop 13, 1978) dan berkinerja rendah sebagai PAD di Indonesia (pemungutan sering < 50%).</p>' } },
          { title: { en: 'The three views in depth', id: 'Tiga pandangan secara mendalam' },
            html: { en: '<p><b>Traditional view (partial equilibrium)</b> splits the tax: on <b>land</b> (vertical supply) owners bear 100% via capitalization — to find who bears it, you must know <i>who owned the land when the tax began</i>; on <b>structures</b> (horizontal long-run supply) tenants bear 100% with deadweight loss. Progressivity: land is progressive (the rich own more land); structures look <b>regressive on annual income</b> (housing share falls with income) but roughly <b>proportional on permanent income</b> — public debate uses annual income, making PBB look more regressive than it is.</p>' +
              '<p><b>New view (general equilibrium, Mieszkowski–Zodrow):</b> treat PBB as an average tax on <b>all capital</b>. (A) <b>General effect</b> — national capital is fixed → capital owners bear it → <b>progressive</b> (opposite of traditional). (B) <b>Excise effects</b> — capital flees high-tax jurisdictions and bids down returns elsewhere (Harberger); the least-mobile capital bears most. (C) <b>Long-run effects</b> — if the tax depresses the capital stock, labour productivity and wages fall.</p>' +
              '<p><b>User-fee view (Tiebout):</b> PBB is the <b>price</b> for the local service bundle you chose by moving there. Three implications: (1) incidence is meaningless — it\'s a price, not a transfer; (2) <b>no excess burden</b>; (3) federal <b>deductibility subsidises over-consumption</b> of local services (Metcalf 2008). Weimer & Wolkoff (2001): both taxes <i>and</i> services capitalize into home values.</p>' +
              '<table><thead><tr><th>Context</th><th>Appropriate view</th></tr></thead><tbody>' +
              '<tr><td>Replace PBB with a national sales tax</td><td>New view (general equilibrium)</td></tr>' +
              '<tr><td>A single community changes its rate</td><td>Traditional view (partial equilibrium)</td></tr>' +
              '<tr><td>Mobile residents + joint tax/service choice</td><td>User-fee view</td></tr></tbody></table>' +
              '<div class="note">💡 The three views are <b>not mutually exclusive</b> — each fits a context. Practical implication: fiscal burden across communities cannot be read off tax rates alone; you need <b>tax, services, and house prices jointly</b>.</div>',
              id: '<p><b>Pandangan tradisional (ekuilibrium parsial)</b> membagi pajak: pada <b>tanah</b> (penawaran vertikal) pemilik menanggung 100% lewat kapitalisasi — untuk tahu siapa menanggung, Anda harus tahu <i>siapa memiliki tanah saat pajak mulai</i>; pada <b>bangunan</b> (penawaran jangka panjang horizontal) penyewa menanggung 100% dengan deadweight loss. Progresivitas: tanah progresif (orang kaya memiliki lebih banyak tanah); bangunan tampak <b>regresif pada pendapatan tahunan</b> (pangsa perumahan turun seiring pendapatan) tetapi kira-kira <b>proporsional pada pendapatan permanen</b> — debat publik memakai pendapatan tahunan, membuat PBB tampak lebih regresif dari kenyataan.</p>' +
              '<p><b>Pandangan baru (ekuilibrium umum, Mieszkowski–Zodrow):</b> perlakukan PBB sebagai pajak rata-rata atas <b>seluruh modal</b>. (A) <b>Efek umum</b> — modal nasional tetap → pemilik modal menanggung → <b>progresif</b> (kebalikan tradisional). (B) <b>Efek cukai</b> — modal kabur dari yurisdiksi berpajak tinggi dan menekan imbal hasil di tempat lain (Harberger); modal paling tak-mobil menanggung terbanyak. (C) <b>Efek jangka panjang</b> — jika pajak menekan stok modal, produktivitas dan upah tenaga kerja turun.</p>' +
              '<p><b>Pandangan user-fee (Tiebout):</b> PBB adalah <b>harga</b> untuk paket layanan lokal yang Anda pilih dengan pindah ke sana. Tiga implikasi: (1) insidensi tak bermakna — ini harga, bukan transfer; (2) <b>tanpa beban berlebih</b>; (3) <b>deductibility</b> federal <b>mensubsidi konsumsi berlebih</b> layanan lokal (Metcalf 2008). Weimer & Wolkoff (2001): pajak <i>maupun</i> layanan terkapitalisasi ke nilai rumah.</p>' +
              '<table><thead><tr><th>Konteks</th><th>Pandangan yang sesuai</th></tr></thead><tbody>' +
              '<tr><td>Mengganti PBB dengan pajak penjualan nasional</td><td>Pandangan baru (ekuilibrium umum)</td></tr>' +
              '<tr><td>Satu komunitas mengubah tarifnya</td><td>Pandangan tradisional (ekuilibrium parsial)</td></tr>' +
              '<tr><td>Penduduk mobil + pilihan pajak/layanan bersama</td><td>Pandangan user-fee</td></tr></tbody></table>' +
              '<div class="note">💡 Ketiga pandangan <b>tidak saling meniadakan</b> — masing-masing cocok untuk konteks. Implikasi praktis: beban fiskal lintas komunitas tak bisa dibaca dari tarif pajak saja; Anda butuh <b>pajak, layanan, dan harga rumah secara bersamaan</b>.</div>' } },
          { title: { en: 'PBB devolution phases & HKPD regional taxes', id: 'Fase devolusi PBB & pajak daerah HKPD' },
            html: { en: '<p><b>PBB journey in three phases:</b></p>' +
              '<ol><li><b>Phase 1 — all central</b> (before UU 28/2009): PBB = central tax (UU 12/1985), administered by DJP, shared via DBH.</li>' +
              '<li><b>Phase 2 — partial devolution</b> (UU 28/2009, effective 2014): <b>PBB-P2</b> (urban/rural land) and <b>BPHTB</b> devolved to kab/kota; <b>PBB-P3</b> (plantation, forestry, mining/oil-gas/geothermal) <b>stays central</b> (bases span jurisdictions, specialized national valuation, tied to resource policy) — revenue still shared via DBH.</li>' +
              '<li><b>Phase 3 — strengthened</b> (UU 1/2022 HKPD): PBB-P2 cap <b>0.5%</b> (each region sets via Perda); DBH PBB raised <b>90%→100%</b> to producing regions; <b>Opsen</b> surtax introduced.</li></ol>' +
              '<p>Under HKPD: <b>16 regional taxes</b> (7 provincial + 9 kab/kota), retribusi simplified <b>32→18</b>. Three structural innovations:</p>' +
              '<ul><li><b>Opsen system</b> — kab/kota get an automatic <b>66%</b> surtax on provincial PKB & BBNKB (effective Jan 2025); strengthens local revenue without a new citizen burden.</li>' +
              '<li><b>PBJT consolidation</b> — merges Hotel + Restoran + Hiburan + Parkir + Penerangan Jalan into one umbrella tax (standard cap 10%, entertainment up to 75%).</li>' +
              '<li><b>Closed-list principle (daftar tertutup)</b> — regions may levy <i>only</i> taxes/retribusi explicitly listed in the law, blocking creative "pungli-style" fees that scared off investment.</li></ul>',
              id: '<p><b>Perjalanan PBB dalam tiga fase:</b></p>' +
              '<ol><li><b>Fase 1 — seluruhnya pusat</b> (sebelum UU 28/2009): PBB = pajak pusat (UU 12/1985), dikelola DJP, dibagi via DBH.</li>' +
              '<li><b>Fase 2 — devolusi sebagian</b> (UU 28/2009, berlaku 2014): <b>PBB-P2</b> (tanah perkotaan/perdesaan) dan <b>BPHTB</b> diserahkan ke kab/kota; <b>PBB-P3</b> (perkebunan, kehutanan, pertambangan/migas/panas bumi) <b>tetap pusat</b> (basis lintas yurisdiksi, penilaian nasional khusus, terkait kebijakan sumber daya) — penerimaan tetap dibagi via DBH.</li>' +
              '<li><b>Fase 3 — diperkuat</b> (UU 1/2022 HKPD): PBB-P2 dibatasi <b>0,5%</b> (tiap daerah atur via Perda); DBH PBB dinaikkan <b>90%→100%</b> ke daerah penghasil; surtax <b>Opsen</b> diperkenalkan.</li></ol>' +
              '<p>Di bawah HKPD: <b>16 pajak daerah</b> (7 provinsi + 9 kab/kota), retribusi disederhanakan <b>32→18</b>. Tiga inovasi struktural:</p>' +
              '<ul><li><b>Sistem Opsen</b> — kab/kota mendapat surtax otomatis <b>66%</b> atas PKB & BBNKB provinsi (berlaku Jan 2025); memperkuat penerimaan lokal tanpa beban baru bagi warga.</li>' +
              '<li><b>Konsolidasi PBJT</b> — menggabungkan Hotel + Restoran + Hiburan + Parkir + Penerangan Jalan menjadi satu pajak payung (tarif standar 10%, hiburan hingga 75%).</li>' +
              '<li><b>Prinsip daftar tertutup</b> — daerah hanya boleh memungut pajak/retribusi yang <i>secara eksplisit</i> tercantum dalam UU, memblokir pungutan "ala pungli" yang menakuti investasi.</li></ul>' } },
          { title: { en: 'Why property tax is universally hated', id: 'Mengapa PBB dibenci di mana-mana' },
            html: { en: '<p><span class="key">Proposition 13</span> (California, 7 June 1978): rate capped at <b>1%</b>, assessments rolled back to <b>1975</b> values, a <b>2/3 supermajority</b> required for any increase — launching a nationwide property-tax-limitation movement.</p>' +
              '<p>Four reasons it is more hated than the federal income tax:</p>' +
              '<ol><li><b>Valuation problems</b> — most properties don\'t sell, so assessments are estimated and feel arbitrary.</li>' +
              '<li><b>High visibility</b> — not withheld from paychecks; paid in lump sums, each bill a shock (Cabral & Hoxby 2012: visibility explains both unpopularity and limitation initiatives).</li>' +
              '<li><b>Perceived regressivity</b> — the elderly on fixed incomes face rising assessments; states respond with "circuit breakers."</li>' +
              '<li><b>Political accessibility</b> — local and easy to organise against; a federal tax would need a national campaign.</li></ol>' +
              '<div class="tip">📝 Indonesia — same four <b>plus amplifiers</b>: NJOP often outdated (politically costly to update); annual SPPT is a single lump-sum bill; long-time owners in Jakarta & Bali squeezed by rising NJOP; <b>collection often below 50%</b>. PBB underperforms as PAD, reinforcing transfer dependence.</div>',
              id: '<p><span class="key">Proposition 13</span> (California, 7 Juni 1978): tarif dibatasi <b>1%</b>, penilaian dikembalikan ke nilai <b>1975</b>, butuh <b>supermayoritas 2/3</b> untuk kenaikan apa pun — memicu gerakan pembatasan PBB se-AS.</p>' +
              '<p>Empat alasan ia lebih dibenci daripada pajak penghasilan federal:</p>' +
              '<ol><li><b>Masalah penilaian</b> — sebagian besar properti tak terjual, sehingga penilaian diestimasi dan terasa sewenang-wenang.</li>' +
              '<li><b>Visibilitas tinggi</b> — tidak dipotong dari gaji; dibayar lump sum, tiap tagihan mengejutkan (Cabral & Hoxby 2012: visibilitas menjelaskan ketidakpopuleran dan inisiatif pembatasan).</li>' +
              '<li><b>Persepsi regresivitas</b> — lansia berpendapatan tetap menghadapi penilaian yang naik; negara bagian menjawab dengan "circuit breaker."</li>' +
              '<li><b>Aksesibilitas politis</b> — lokal dan mudah diorganisir untuk menentang; pajak federal butuh kampanye nasional.</li></ol>' +
              '<div class="tip">📝 Indonesia — keempatnya sama <b>plus penguat</b>: NJOP sering usang (mahal secara politis untuk diperbarui); SPPT tahunan adalah tagihan lump-sum tunggal; pemilik lama di Jakarta & Bali tertekan kenaikan NJOP; <b>pemungutan sering di bawah 50%</b>. PBB berkinerja rendah sebagai PAD, memperkuat ketergantungan transfer.</div>' } }
        ]
      },
      {
        heading: { en: 'Intergovernmental grants & the flypaper effect', id: 'Hibah antarpemerintah & efek flypaper' }, num: '6',
        cards: [
          { title: { en: 'Growth of US federal grants', id: 'Pertumbuhan hibah federal AS' },
            html: { en: '<table><thead><tr><th>Year</th><th>Grants (2010 $)</th><th>% federal outlays</th><th>% state & local exp</th></tr></thead><tbody>' +
              '<tr><td>1970</td><td>$88 B</td><td>9.6%</td><td>17.1%</td></tr>' +
              '<tr><td>2010</td><td>$532 B</td><td>14.4%</td><td>25.4%</td></tr></tbody></table>' +
              '<p>That is ≈ <b>6× real growth</b> over 40 years; grants + state aid now finance ≈ <b>34%</b> of local general revenue.</p>' +
              '<p><b>Mismatch theory:</b> demand for state/local services grew faster than the state/local tax base, while the federal income tax is more <b>elastic</b> (revenue rises automatically as incomes rise) — grants redistribute the mismatch from centre to regions. <b>But the theory is incomplete</b>: it doesn\'t explain why states couldn\'t just raise their own rates.</p>' +
              '<div class="note">💡 <b>Borck & Owings (2003):</b> states with representatives on key congressional committees receive <i>more</i> grant money — politics matters more than efficiency.</div>',
              id: '<table><thead><tr><th>Tahun</th><th>Hibah ($ 2010)</th><th>% belanja federal</th><th>% belanja negara bagian & lokal</th></tr></thead><tbody>' +
              '<tr><td>1970</td><td>$88 M</td><td>9,6%</td><td>17,1%</td></tr>' +
              '<tr><td>2010</td><td>$532 M</td><td>14,4%</td><td>25,4%</td></tr></tbody></table>' +
              '<p>Itu ≈ <b>6× pertumbuhan riil</b> selama 40 tahun; hibah + bantuan negara bagian kini membiayai ≈ <b>34%</b> penerimaan umum lokal.</p>' +
              '<p><b>Teori mismatch:</b> permintaan layanan negara bagian/lokal tumbuh lebih cepat daripada basis pajaknya, sementara pajak penghasilan federal lebih <b>elastis</b> (penerimaan naik otomatis seiring pendapatan) — hibah meratakan ketidakcocokan dari pusat ke daerah. <b>Tetapi teori ini tidak lengkap</b>: tak menjelaskan mengapa negara bagian tak menaikkan tarifnya sendiri.</p>' +
              '<div class="note">💡 <b>Borck & Owings (2003):</b> negara bagian dengan wakil di komite kongres kunci menerima <i>lebih banyak</i> hibah — politik lebih menentukan daripada efisiensi.</div>' } },
          { title: { en: 'Four grant types', id: 'Empat jenis hibah' },
            html: { en: '<table><thead><tr><th>Grant</th><th>Effect</th></tr></thead><tbody>' +
              '<tr><td><b>Open-ended matching</b></td><td>Cuts the price of G → biggest stimulus to G, but donor cost is uncapped; part leaks to private c.</td></tr>' +
              '<tr><td><b>Closed-ended matching</b></td><td>Matched price up to a cap, then full price → kinked budget; less stimulus, donor controls cost.</td></tr>' +
              '<tr><td><b>Conditional non-matching</b></td><td>Lump sum earmarked for G → <b>crowd-out</b>: G rises by less than the grant (town trims own G spend).</td></tr>' +
              '<tr><td><b>Unconditional</b></td><td>Lump sum, no strings → same as raising local income; median-voter predicts identical ΔG to conditional.</td></tr>' +
              '</tbody></table>' +
              '<p>Pigouvian logic: matching rate should equal the externality share (e.g. 25%); in reality rates are 80–90% — politics over efficiency (Oates 1999).</p>',
              id: '<table><thead><tr><th>Hibah</th><th>Efek</th></tr></thead><tbody>' +
              '<tr><td><b>Open-ended matching</b></td><td>Menurunkan harga G → stimulus terbesar bagi G, tetapi biaya donor tak dibatasi; sebagian bocor ke konsumsi privat c.</td></tr>' +
              '<tr><td><b>Closed-ended matching</b></td><td>Harga dipadankan hingga batas, lalu harga penuh → anggaran menekuk; stimulus lebih kecil, donor mengendalikan biaya.</td></tr>' +
              '<tr><td><b>Conditional non-matching</b></td><td>Lump sum diikat untuk G → <b>crowd-out</b>: G naik lebih kecil daripada hibah (daerah memangkas belanja G sendiri).</td></tr>' +
              '<tr><td><b>Unconditional</b></td><td>Lump sum, tanpa ikatan → sama dengan menaikkan pendapatan lokal; median-voter memprediksi ΔG identik dengan conditional.</td></tr>' +
              '</tbody></table>' +
              '<p>Logika Pigouvian: tarif padanan seharusnya sama dengan pangsa eksternalitas (mis. 25%); pada kenyataannya tarif 80–90% — politik di atas efisiensi (Oates 1999).</p>' } },
          { title: { en: 'The flypaper effect', id: 'Efek flypaper' },
            html: { en: '<p>Median-voter theory says $1 of grant and $1 of private income should raise public spending equally. Empirically (Inman 2008): $1 grant → <b>40¢</b> extra public spending, $1 income → only <b>10¢</b>. "Money sticks where it lands" — the <span class="key">flypaper effect</span> (leading explanation: bureaucrats conceal grant receipts).</p>' +
              '<div class="note">💡 Indonesia’s flypaper edition: DAU↔belanja-pegawai correlation rose 0.741→0.882 (2001→2020) — most DAU funds payroll, not service delivery; capital spending stays low. UU HKPD responds with a personnel cap ≤30% and infrastructure floor ≥40% of APBD, and uses <b>potential</b> (not actual) PAD in the formula to remove the disincentive to raise own revenue.</div>',
              id: '<p>Teori median-voter mengatakan $1 hibah dan $1 pendapatan privat seharusnya menaikkan belanja publik secara setara. Secara empiris (Inman 2008): $1 hibah → <b>40¢</b> belanja publik tambahan, $1 pendapatan → hanya <b>10¢</b>. "Uang menempel di tempat ia mendarat" — <span class="key">flypaper effect</span> (penjelasan utama: birokrat menyembunyikan penerimaan hibah).</p>' +
              '<div class="note">💡 Versi flypaper Indonesia: korelasi DAU↔belanja-pegawai naik 0,741→0,882 (2001→2020) — sebagian besar DAU membiayai gaji, bukan penyampaian layanan; belanja modal tetap rendah. UU HKPD menjawab dengan batas belanja pegawai ≤30% dan lantai infrastruktur ≥40% dari APBD, serta memakai PAD <b>potensial</b> (bukan aktual) dalam formula untuk menghapus disinsentif menaikkan penerimaan sendiri.</div>' } },
          { title: { en: 'Indonesia’s transfer architecture (TKD)', id: 'Arsitektur transfer Indonesia (TKD)' },
            html: { en: '<p>Map Rosen & Gayer’s types onto Indonesia:</p>' +
              '<table><thead><tr><th>Type</th><th>Indonesian instrument</th></tr></thead><tbody>' +
              '<tr><td>Unconditional / revenue sharing</td><td><b>DAU</b> (block-grant portion) — the equalization workhorse, ~51% of TKD.</td></tr>' +
              '<tr><td>Conditional non-matching</td><td><b>DAK</b> Fisik + Non-Fisik; earmarked DAU.</td></tr>' +
              '<tr><td>Tax/resource revenue sharing</td><td><b>DBH</b> Pajak + DBH SDA (derivation principle — host region gets most).</td></tr>' +
              '<tr><td>Specific national priority</td><td>Dana Otsus (Aceh, Papua), Dana Keistimewaan (DIY).</td></tr>' +
              '<tr><td>Performance-based</td><td>Insentif Fiskal / Dana Insentif Daerah.</td></tr></tbody></table>' +
              '<p><b>UU 1/2022 (HKPD)</b> reformed the lot. New DAU = Fiscal Need (KbF) − Potential Revenue (PPD); the old "DAU ≥ 26% of net domestic revenue" rule was removed. 2025 TKD ≈ Rp 848.5 T (post-Inpres 1/2025); 2026 RAPBN cuts it ~20% to Rp 693 T — the deepest cut in 25 years, read by some as <b>recentralization</b> (298 regions depend on TKD for >80% of APBD).</p>',
              id: '<p>Memetakan tipe Rosen & Gayer ke Indonesia:</p>' +
              '<table><thead><tr><th>Tipe</th><th>Instrumen Indonesia</th></tr></thead><tbody>' +
              '<tr><td>Unconditional / bagi hasil penerimaan</td><td><b>DAU</b> (porsi block-grant) — tulang punggung pemerataan, ~51% dari TKD.</td></tr>' +
              '<tr><td>Conditional non-matching</td><td><b>DAK</b> Fisik + Non-Fisik; DAU yang diikat.</td></tr>' +
              '<tr><td>Bagi hasil pajak/sumber daya</td><td><b>DBH</b> Pajak + DBH SDA (prinsip derivasi — daerah penghasil mendapat terbanyak).</td></tr>' +
              '<tr><td>Prioritas nasional khusus</td><td>Dana Otsus (Aceh, Papua), Dana Keistimewaan (DIY).</td></tr>' +
              '<tr><td>Berbasis kinerja</td><td>Insentif Fiskal / Dana Insentif Daerah.</td></tr></tbody></table>' +
              '<p><b>UU 1/2022 (HKPD)</b> mereformasi keseluruhannya. DAU baru = Fiscal Need (KbF) − Potential Revenue (PPD); aturan lama "DAU ≥ 26% penerimaan dalam negeri neto" dihapus. TKD 2025 ≈ Rp 848,5 T (pasca-Inpres 1/2025); RAPBN 2026 memangkasnya ~20% menjadi Rp 693 T — pemangkasan terdalam dalam 25 tahun, dibaca sebagian sebagai <b>resentralisasi</b> (298 daerah bergantung pada TKD untuk >80% APBD).</p>' } },
          { title: { en: 'TKD trajectory: 25 years of decentralization', id: 'Lintasan TKD: 25 tahun desentralisasi' },
            html: { en: '<table><thead><tr><th>Year</th><th>TKD (Rp tn)</th><th>Note</th></tr></thead><tbody>' +
              '<tr><td>1996–2000 avg</td><td>24.77</td><td>Pre-Big Bang</td></tr>' +
              '<tr><td>2001</td><td>81.05</td><td>Big Bang begins</td></tr>' +
              '<tr><td>2010</td><td>344</td><td>Steady growth</td></tr>' +
              '<tr><td>2019</td><td>813</td><td>Pre-COVID peak</td></tr>' +
              '<tr><td>2020</td><td>763</td><td>COVID dip</td></tr>' +
              '<tr><td>2023</td><td>815</td><td>Recovery</td></tr>' +
              '<tr><td>2025 initial</td><td>919.9</td><td>Highest ever</td></tr>' +
              '<tr><td>2025 post-Inpres</td><td>848.5</td><td>Cut ~Rp 71 T</td></tr>' +
              '<tr><td>2026 RAPBN</td><td><b>693</b></td><td>Down 20% — deepest cut in 25 yrs</td></tr></tbody></table>' +
              '<p><b>2026 TKD breakdown (Rp tn):</b> DAU 373.8 · DAK 155.1 · DBH 45.1 · Dana Desa 60.6 · Otsus 13.1 · Insentif 1.8.</p>' +
              '<div class="note">💡 The reversal signals <b>recentralization</b> (Min. Purbaya: "belanja daerah tidak efisien"). KPPOD: <b>298 regions</b> depend on TKD for >80% of APBD, so the cut undermines regional autonomy.</div>',
              id: '<table><thead><tr><th>Tahun</th><th>TKD (Rp T)</th><th>Catatan</th></tr></thead><tbody>' +
              '<tr><td>Rata-rata 1996–2000</td><td>24,77</td><td>Pra-Big Bang</td></tr>' +
              '<tr><td>2001</td><td>81,05</td><td>Big Bang dimulai</td></tr>' +
              '<tr><td>2010</td><td>344</td><td>Pertumbuhan stabil</td></tr>' +
              '<tr><td>2019</td><td>813</td><td>Puncak pra-COVID</td></tr>' +
              '<tr><td>2020</td><td>763</td><td>Penurunan COVID</td></tr>' +
              '<tr><td>2023</td><td>815</td><td>Pemulihan</td></tr>' +
              '<tr><td>2025 awal</td><td>919,9</td><td>Tertinggi sepanjang masa</td></tr>' +
              '<tr><td>2025 pasca-Inpres</td><td>848,5</td><td>Dipangkas ~Rp 71 T</td></tr>' +
              '<tr><td>2026 RAPBN</td><td><b>693</b></td><td>Turun 20% — terdalam dalam 25 thn</td></tr></tbody></table>' +
              '<p><b>Rincian TKD 2026 (Rp T):</b> DAU 373,8 · DAK 155,1 · DBH 45,1 · Dana Desa 60,6 · Otsus 13,1 · Insentif 1,8.</p>' +
              '<div class="note">💡 Pembalikan ini menandakan <b>resentralisasi</b> (Menteri Purbaya: "belanja daerah tidak efisien"). KPPOD: <b>298 daerah</b> bergantung pada TKD untuk >80% APBD, sehingga pemangkasan menggerus otonomi daerah.</div>' } },
          { title: { en: 'DAU formula: old vs new', id: 'Rumus DAU: lama vs baru' },
            html: { en: '<p><b>Old (UU 33/2004):</b> DAU = <b>Basic Allocation + Fiscal Gap</b>; pool <b>≥ 26%</b> of net domestic revenue (now removed); basic allocation = civil-servant salaries; fiscal gap = fiscal need − fiscal capacity.</p>' +
              '<p><b>New (UU 1/2022):</b> DAU = <b>KbF − PPD</b>, where KbF (Fiscal Need) = unit cost × service target × <b>adjustment factor</b>, and PPD (Potential Revenue) = potential PAD + DBH + DAK Non-Fisik. The adjustment factor weighs population/density, archipelagic status, topography, sector dependence (tourism/agriculture/fishery), and basic governance costs.</p>' +
              '<ul><li><b>Split:</b> Province 14.1% / Kab-Kota 85.9%.</li>' +
              '<li><b>Partial earmarking ("Specific Grant"):</b> 2023 DAU Rp 396 T = Rp 287 T block + Rp 109 T specific (PPPK salaries, kelurahan, education, health, public-works targets) — the DAU/DAK line is blurring.</li>' +
              '<li><b>Hold-harmless:</b> no region\'s DAU falls in nominal terms during the 5-year transition.</li></ul>' +
              '<div class="note">💡 Key fix: the new formula uses <b>potential</b> (not actual) PAD. Under the old rule, more PAD shrank the fiscal gap and <i>cut</i> DAU — a perverse disincentive to raise own revenue. Using potential PAD removes it.</div>',
              id: '<p><b>Lama (UU 33/2004):</b> DAU = <b>Alokasi Dasar + Celah Fiskal</b>; pool <b>≥ 26%</b> penerimaan dalam negeri neto (kini dihapus); alokasi dasar = gaji PNS; celah fiskal = kebutuhan fiskal − kapasitas fiskal.</p>' +
              '<p><b>Baru (UU 1/2022):</b> DAU = <b>KbF − PPD</b>, di mana KbF (Kebutuhan Fiskal) = biaya satuan × target layanan × <b>faktor penyesuaian</b>, dan PPD (Potensi Penerimaan) = PAD potensial + DBH + DAK Non-Fisik. Faktor penyesuaian menimbang populasi/kepadatan, status kepulauan, topografi, ketergantungan sektor (pariwisata/pertanian/perikanan), dan biaya dasar penyelenggaraan pemerintahan.</p>' +
              '<ul><li><b>Pembagian:</b> Provinsi 14,1% / Kab-Kota 85,9%.</li>' +
              '<li><b>Pengikatan parsial ("Specific Grant"):</b> DAU 2023 Rp 396 T = Rp 287 T block + Rp 109 T spesifik (gaji PPPK, kelurahan, pendidikan, kesehatan, target pekerjaan umum) — batas DAU/DAK mengabur.</li>' +
              '<li><b>Hold-harmless:</b> tidak ada DAU daerah yang turun secara nominal selama transisi 5 tahun.</li></ul>' +
              '<div class="note">💡 Perbaikan kunci: formula baru memakai PAD <b>potensial</b> (bukan aktual). Di bawah aturan lama, PAD lebih tinggi memperkecil celah fiskal dan <i>memotong</i> DAU — disinsentif keliru untuk menaikkan penerimaan sendiri. Memakai PAD potensial menghapusnya.</div>' } },
          { title: { en: 'DBH: revenue sharing from taxes & resources', id: 'DBH: bagi hasil pajak & sumber daya' },
            html: { en: '<p><b>DBH Pajak (tax revenue sharing):</b> PPh Pasal 21 (wages) & PPh 25/29 Orang Pribadi (self-employed); PBB-P3 now <b>100%</b> to regions under HKPD (was 90%); Cukai Hasil Tembakau raised from <b>2% → 3%</b>.</p>' +
              '<p><b>DBH SDA (natural-resource revenue sharing):</b></p>' +
              '<table><thead><tr><th>Resource</th><th>Notes</th></tr></thead><tbody>' +
              '<tr><td>Minyak Bumi & Gas Bumi</td><td>Enhanced shares for Aceh & Papua under special autonomy</td></tr>' +
              '<tr><td>Minerba (mineral & coal)</td><td>Royalties + land rent</td></tr>' +
              '<tr><td>Kehutanan</td><td>IHPH, PSDH, Dana Reboisasi</td></tr>' +
              '<tr><td>Panas Bumi</td><td>Geothermal royalties</td></tr>' +
              '<tr><td>Perikanan</td><td>Fisheries levies</td></tr>' +
              '<tr><td>Perkebunan (palm oil)</td><td>Added under UU HKPD</td></tr></tbody></table>' +
              '<div class="tip">📝 <b>Derivation principle:</b> the host region gets the largest share; neighbouring & processing regions get smaller shares. <b>Trade-off:</b> DBH exposes regions to <b>commodity-price volatility</b> (Riau, Kaltim, Papua swing year to year), making fiscal planning harder.</div>',
              id: '<p><b>DBH Pajak (bagi hasil pajak):</b> PPh Pasal 21 (upah) & PPh 25/29 Orang Pribadi (wiraswasta); PBB-P3 kini <b>100%</b> ke daerah di bawah HKPD (dulu 90%); Cukai Hasil Tembakau dinaikkan <b>2% → 3%</b>.</p>' +
              '<p><b>DBH SDA (bagi hasil sumber daya alam):</b></p>' +
              '<table><thead><tr><th>Sumber daya</th><th>Catatan</th></tr></thead><tbody>' +
              '<tr><td>Minyak Bumi & Gas Bumi</td><td>Pangsa lebih besar untuk Aceh & Papua di bawah otsus</td></tr>' +
              '<tr><td>Minerba (mineral & batubara)</td><td>Royalti + land rent</td></tr>' +
              '<tr><td>Kehutanan</td><td>IHPH, PSDH, Dana Reboisasi</td></tr>' +
              '<tr><td>Panas Bumi</td><td>Royalti panas bumi</td></tr>' +
              '<tr><td>Perikanan</td><td>Pungutan perikanan</td></tr>' +
              '<tr><td>Perkebunan (kelapa sawit)</td><td>Ditambahkan di bawah UU HKPD</td></tr></tbody></table>' +
              '<div class="tip">📝 <b>Prinsip derivasi:</b> daerah penghasil mendapat pangsa terbesar; daerah tetangga & pengolah mendapat pangsa lebih kecil. <b>Trade-off:</b> DBH mengekspos daerah pada <b>volatilitas harga komoditas</b> (Riau, Kaltim, Papua berfluktuasi tahun ke tahun), menyulitkan perencanaan fiskal.</div>' } },
          { title: { en: 'UU HKPD: four pillars', id: 'UU HKPD: empat pilar' },
            html: { en: '<p><span class="key">UU 1/2022 (HKPD)</span> — Financial Relations between Central & Regional Governments, effective <b>5 Jan 2022</b>, replacing UU 33/2004 after 18 years. Four pillars:</p>' +
              '<ol><li><b>Reduce vertical & horizontal imbalance</b> — reformulated DBH, DAU, DAK, Dana Otsus, Dana Keistimewaan, Dana Desa.</li>' +
              '<li><b>Strengthen local taxing power</b> — Opsen (66% surtax on PKB & BBNKB by kab/kota); DBH PBB raised 90%→100%.</li>' +
              '<li><b>Improve spending quality</b> — infrastructure floor <b>≥ 40%</b> of APBD, personnel cap <b>≤ 30%</b> of APBD.</li>' +
              '<li><b>Harmonize central & regional spending</b> — integrated fiscal information system.</li></ol>' +
              '<div class="note">💡 Key legal change: the old "<b>DAU ≥ 26% of PDN Neto</b>" rule is <b>removed</b>; DAU is now computed on a fiscal-need basis. The law also fixes 16 regional taxes, simplifies retribusi 32→18, and imposes the closed-list principle.</div>',
              id: '<p><span class="key">UU 1/2022 (HKPD)</span> — Hubungan Keuangan antara Pemerintah Pusat & Daerah, berlaku <b>5 Jan 2022</b>, menggantikan UU 33/2004 setelah 18 tahun. Empat pilar:</p>' +
              '<ol><li><b>Mengurangi ketimpangan vertikal & horizontal</b> — memformulasi ulang DBH, DAU, DAK, Dana Otsus, Dana Keistimewaan, Dana Desa.</li>' +
              '<li><b>Memperkuat kewenangan pajak lokal</b> — Opsen (surtax 66% atas PKB & BBNKB oleh kab/kota); DBH PBB dinaikkan 90%→100%.</li>' +
              '<li><b>Meningkatkan kualitas belanja</b> — lantai infrastruktur <b>≥ 40%</b> APBD, batas pegawai <b>≤ 30%</b> APBD.</li>' +
              '<li><b>Menyelaraskan belanja pusat & daerah</b> — sistem informasi fiskal terintegrasi.</li></ol>' +
              '<div class="note">💡 Perubahan hukum kunci: aturan lama "<b>DAU ≥ 26% PDN Neto</b>" <b>dihapus</b>; DAU kini dihitung berbasis kebutuhan fiskal. UU ini juga menetapkan 16 pajak daerah, menyederhanakan retribusi 32→18, dan memberlakukan prinsip daftar tertutup.</div>' } },
          { title: { en: 'US vs Indonesia: synthesis', id: 'AS vs Indonesia: sintesis' },
            html: { en: '<table><thead><tr><th>Dimension</th><th>United States</th><th>Indonesia</th></tr></thead><tbody>' +
              '<tr><td>Constitutional form</td><td>Federal</td><td>Unitary with otonomi daerah</td></tr>' +
              '<tr><td>Primary tool</td><td>Local taxing power</td><td>Transfers (TKD)</td></tr>' +
              '<tr><td>Local tax staple</td><td>Property tax (≈72% local rev)</td><td>PKB, PBJT, PBB-P2 (PAD ≈29% APBD)</td></tr>' +
              '<tr><td>Property-tax scope</td><td>All real estate, locally administered</td><td>PBB-P2 devolved; P3 stays central, 100% DBH to host</td></tr>' +
              '<tr><td>Equalization</td><td>Federal grants (matching + block)</td><td>DAU + DAK + DBH + Otsus + Dana Desa</td></tr>' +
              '<tr><td>Residential mobility</td><td>High (≈15% move/yr)</td><td>Low (kin, language, thin markets)</td></tr>' +
              '<tr><td>Jurisdictional evolution</td><td>Stable</td><td>Rapid pemekaran (38 prov, 514 kab/kota)</td></tr>' +
              '<tr><td>Sectoral mandates</td><td>Mostly via conditional grants</td><td>20% education; 40% infra + 30% personnel; health repealed 2023</td></tr>' +
              '<tr><td>Asymmetric arrangements</td><td>Minimal</td><td>Extensive: Aceh, Papua (6), DIY, DKJ</td></tr>' +
              '<tr><td>Current direction</td><td>Stable decentralized</td><td>Recentralization signals (2026 TKD −20%)</td></tr></tbody></table>' +
              '<div class="tip">📝 Same framework, different instruments: the US relies on local taxing power, Indonesia on central transfers — but both face the same four disadvantages and three advantages.</div>',
              id: '<table><thead><tr><th>Dimensi</th><th>Amerika Serikat</th><th>Indonesia</th></tr></thead><tbody>' +
              '<tr><td>Bentuk konstitusi</td><td>Federal</td><td>Kesatuan dengan otonomi daerah</td></tr>' +
              '<tr><td>Alat utama</td><td>Kewenangan pajak lokal</td><td>Transfer (TKD)</td></tr>' +
              '<tr><td>Pajak lokal andalan</td><td>PBB (≈72% penerimaan lokal)</td><td>PKB, PBJT, PBB-P2 (PAD ≈29% APBD)</td></tr>' +
              '<tr><td>Cakupan PBB</td><td>Semua properti, dikelola lokal</td><td>PBB-P2 diserahkan; P3 tetap pusat, 100% DBH ke penghasil</td></tr>' +
              '<tr><td>Pemerataan</td><td>Hibah federal (padanan + block)</td><td>DAU + DAK + DBH + Otsus + Dana Desa</td></tr>' +
              '<tr><td>Mobilitas penduduk</td><td>Tinggi (≈15% pindah/thn)</td><td>Rendah (kekerabatan, bahasa, pasar tipis)</td></tr>' +
              '<tr><td>Evolusi yurisdiksi</td><td>Stabil</td><td>Pemekaran cepat (38 prov, 514 kab/kota)</td></tr>' +
              '<tr><td>Mandat sektoral</td><td>Umumnya via hibah bersyarat</td><td>20% pendidikan; 40% infra + 30% pegawai; kesehatan dicabut 2023</td></tr>' +
              '<tr><td>Pengaturan asimetris</td><td>Minimal</td><td>Luas: Aceh, Papua (6), DIY, DKJ</td></tr>' +
              '<tr><td>Arah saat ini</td><td>Desentralisasi stabil</td><td>Sinyal resentralisasi (TKD 2026 −20%)</td></tr></tbody></table>' +
              '<div class="tip">📝 Kerangka sama, instrumen berbeda: AS bergantung pada pajak lokal, Indonesia pada transfer pusat — tetapi keduanya menghadapi empat kerugian dan tiga keunggulan yang sama.</div>' } },
          { title: { en: 'Six open questions for Indonesia', id: 'Enam pertanyaan terbuka untuk Indonesia' },
            html: { en: '<ol>' +
              '<li><b>Expand local taxing power further?</b> Opsen is a first step; full devolution would cut transfer dependence but worsen horizontal inequality.</li>' +
              '<li><b>What does the 2025→2026 TKD reversal mean?</b> Rp 919.9 T → Rp 693 T is the deepest cut in 25 years — temporary efficiency or genuine recentralization?</li>' +
              '<li><b>Will the 30%/40% caps actually bind?</b> Five-year transitions require most regions to restructure budgets substantially; early signs are tough.</li>' +
              '<li><b>Is performance-based budgeting mature enough?</b> With health\'s mandate repealed (2023), can "money follows program" replace hard mandates? Low-capacity regions suggest: not yet.</li>' +
              '<li><b>Can pemekaran be disciplined?</b> 2014 moratorium + 2022 Papua exception — still seeking balance between genuine tailoring and rent-seeking.</li>' +
              '<li><b>Fiscal relations with IKN / DKJ?</b> DKJ has new status under UU 2/2024; the long-term architecture of a two-capital Indonesia is still to be built.</li></ol>' +
              '<div class="note">💡 The pendulum between centralization and decentralization is perennial. Rosen & Gayer\'s framework applies the same in federal and unitary states — only the instruments differ.</div>',
              id: '<ol>' +
              '<li><b>Memperluas kewenangan pajak lokal lebih jauh?</b> Opsen langkah pertama; devolusi penuh memangkas ketergantungan transfer tetapi memperburuk ketimpangan horizontal.</li>' +
              '<li><b>Apa arti pembalikan TKD 2025→2026?</b> Rp 919,9 T → Rp 693 T adalah pemangkasan terdalam dalam 25 tahun — efisiensi sementara atau resentralisasi sejati?</li>' +
              '<li><b>Apakah batas 30%/40% benar-benar mengikat?</b> Transisi lima tahun menuntut sebagian besar daerah merestrukturisasi anggaran secara substansial; tanda awal: sulit.</li>' +
              '<li><b>Apakah penganggaran berbasis kinerja cukup matang?</b> Dengan mandat kesehatan dicabut (2023), bisakah "money follows program" menggantikan mandat keras? Daerah berkapasitas rendah menunjukkan: belum.</li>' +
              '<li><b>Bisakah pemekaran didisiplinkan?</b> Moratorium 2014 + pengecualian Papua 2022 — masih mencari keseimbangan antara penyesuaian sejati dan rent-seeking.</li>' +
              '<li><b>Hubungan fiskal dengan IKN / DKJ?</b> DKJ punya status baru di bawah UU 2/2024; arsitektur jangka panjang Indonesia dua-ibu-kota masih harus dibangun.</li></ol>' +
              '<div class="note">💡 Pendulum antara sentralisasi dan desentralisasi bersifat abadi. Kerangka Rosen & Gayer berlaku sama di negara federal dan kesatuan — hanya instrumennya berbeda.</div>' } }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'Centralization ratio', id: 'Rasio sentralisasi' },
          html: { en: '<div class="formula">$$ \\text{Centralization ratio} = \\frac{\\text{central direct expenditure}}{\\text{total direct government expenditure}} $$</div>',
            id: '<div class="formula">$$ \\text{Centralization ratio} = \\frac{\\text{central direct expenditure}}{\\text{total direct government expenditure}} $$</div>' } },
        { title: { en: 'Property tax & assessment', id: 'PBB & penilaian' },
          html: { en: '<div class="formula">$$ \\text{Tax} = \\text{Rate}\\times\\text{Assessed value}, \\qquad \\text{Assessment ratio} = \\frac{\\text{assessed}}{\\text{market value}} $$</div>' +
            '<p>Vertical land supply ⇒ owner bears 100%; horizontal structure supply ⇒ tenant bears 100%.</p>',
            id: '<div class="formula">$$ \\text{Tax} = \\text{Rate}\\times\\text{Assessed value}, \\qquad \\text{Assessment ratio} = \\frac{\\text{assessed}}{\\text{market value}} $$</div>' +
            '<p>Penawaran tanah vertikal ⇒ pemilik menanggung 100%; penawaran bangunan horizontal ⇒ penyewa menanggung 100%.</p>' } },
        { title: { en: 'New DAU formula (UU 1/2022)', id: 'Rumus DAU baru' },
          html: { en: '<div class="formula">$$ DAU = KbF - PPD = \\text{Fiscal Need} - \\text{Potential Revenue} $$</div>' +
            '<p>$KbF$ = unit cost × service target × adjustment factor; $PPD$ = potential PAD + DBH + DAK Non-Fisik. Uses <b>potential</b> PAD to remove the disincentive to raise own revenue.</p>',
            id: '<div class="formula">$$ DAU = KbF - PPD = \\text{Fiscal Need} - \\text{Potential Revenue} $$</div>' +
            '<p>$KbF$ = biaya satuan × target layanan × faktor penyesuaian; $PPD$ = PAD potensial + DBH + DAK Non-Fisik. Memakai PAD <b>potensial</b> untuk menghapus disinsentif menaikkan penerimaan sendiri.</p>' } },
        { title: { en: 'Conditional-grant crowd-out', id: 'Crowd-out hibah bersyarat' },
          html: { en: '<div class="formula">$$ \\Delta G = \\alpha\\,H < H \\quad(\\text{Cobb–Douglas, } \\alpha = \\text{taste for } G) $$</div>' +
            '<p>An earmarked grant H raises G by only αH; the rest (1−α)H leaks to private consumption. The flypaper effect is the empirical excess over this prediction.</p>',
            id: '<div class="formula">$$ \\Delta G = \\alpha\\,H < H \\quad(\\text{Cobb–Douglas, } \\alpha = \\text{taste for } G) $$</div>' +
            '<p>Hibah yang diikat H menaikkan G hanya sebesar αH; sisanya (1−α)H bocor ke konsumsi privat. Efek flypaper adalah kelebihan empiris di atas prediksi ini.</p>' } }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Property tax on LAND — owners bear 100%', id: 'PBB atas TANAH — pemilik 100%' },
          html: { en: '<p>Land supply is vertical (fixed). Impose a tax: the quantity cannot change, the user price stays put, and the landowner absorbs the whole tax — with zero deadweight loss. Capitalization means whoever owned the land when the tax began bears it forever.</p>',
            id: '<p>Penawaran tanah vertikal (tetap). Kenakan pajak: kuantitas tak bisa berubah, harga pengguna tetap, dan pemilik tanah menyerap seluruh pajak — dengan deadweight loss nol. Kapitalisasi berarti siapa pun yang memiliki tanah saat pajak mulai berlaku menanggungnya selamanya.</p>' },
          chartId: 'ptax-land' },
        { title: { en: 'Property tax on STRUCTURES — tenants bear 100%', id: 'PBB atas BANGUNAN — penyewa 100%' },
          html: { en: '<p>Capital is mobile, so the long-run supply of structures is horizontal. The tax raises the price tenants pay by the full amount and shrinks quantity, leaving a deadweight loss. Compare the two figures: vertical vs horizontal supply is the entire incidence story.</p>',
            id: '<p>Modal bersifat mobil, sehingga penawaran bangunan jangka panjang bersifat horizontal. Pajak menaikkan harga yang dibayar penyewa sebesar penuh dan menyusutkan kuantitas, menyisakan deadweight loss. Bandingkan kedua gambar: penawaran vertikal vs horizontal adalah keseluruhan cerita insidensi.</p>' },
          chartId: 'ptax-struct' },
        { title: { en: 'Open-ended matching grant', id: 'Hibah padanan tak terbatas' },
          html: { en: '<p>A matching grant cuts the price of G, pivoting the budget line out from the same private-good intercept. G rises a lot — but part leaks into private consumption, and the donor has no cap on total cost.</p>',
            id: '<p>Hibah padanan menurunkan harga G, memutar garis anggaran keluar dari titik potong barang privat yang sama. G naik banyak — tetapi sebagian bocor ke konsumsi privat, dan donor tak memiliki batas atas biaya total.</p>' },
          chartId: 'grant-open' },
        { title: { en: 'Closed-ended matching grant', id: 'Hibah padanan terbatas' },
          html: { en: '<p>Cap the donor’s contribution and the budget line kinks: subsidised price up to the cap, then full price. G rises less than the open-ended case, but the donor controls its spending.</p>',
            id: '<p>Batasi kontribusi donor dan garis anggaran menekuk: harga bersubsidi hingga batas, lalu harga penuh. G naik lebih kecil daripada kasus tak terbatas, tetapi donor mengendalikan belanjanya.</p>' },
          chartId: 'grant-closed' },
        { title: { en: 'Conditional non-matching grant (crowd-out)', id: 'Hibah bersyarat (crowd-out)' },
          html: { en: '<p>A fixed grant earmarked for G shifts the budget out (the A·H·M kink). The town takes it but trims its own G spending, so G rises by only α·H — less than the grant. The rest becomes tax relief that leaks to private consumption.</p>',
            id: '<p>Hibah tetap yang diikat untuk G menggeser anggaran keluar (tekukan A·H·M). Daerah menerimanya tetapi memangkas belanja G sendiri, sehingga G naik hanya sebesar α·H — lebih kecil daripada hibah. Sisanya menjadi keringanan pajak yang bocor ke konsumsi privat.</p>' },
          chartId: 'grant-cond' },
        { title: { en: 'Unconditional grant = an income rise', id: 'Hibah tanpa syarat = naik pendapatan' },
          html: { en: '<p>With no strings the budget shifts out in parallel — identical to giving residents extra income. Theory predicts the same ΔG as the conditional grant; the empirical "flypaper effect" (money sticks to G: 40¢ vs 10¢) is the puzzle the model can’t explain.</p>',
            id: '<p>Tanpa ikatan, anggaran bergeser keluar secara paralel — identik dengan memberi penduduk pendapatan tambahan. Teori memprediksi ΔG yang sama dengan hibah bersyarat; "flypaper effect" empiris (uang menempel pada G: 40¢ vs 10¢) adalah teka-teki yang tak bisa dijelaskan model.</p>' },
          chartId: 'grant-uncond' }
      ] }
    ],

    quiz: [
      { type: 'scenario', q: { en: 'Indonesia is a unitary state, yet runs one of the world’s biggest decentralization programs through transfers, not local taxes. Which of Rosen & Gayer’s four disadvantages best explains keeping taxing power central?', id: 'Indonesia negara kesatuan tetapi desentralisasi lewat transfer, bukan pajak lokal. Kerugian mana yang menjelaskan kewenangan pajak tetap pusat?' },
        answer: [
          { en: 'The <b>inefficient-taxation / horizontal-inequality</b> disadvantage. Tax bases are geographically very uneven (oil & gas in Aceh/Riau/Kaltim/Papua, industry & finance in Java).', id: '<b>Pajak tidak efisien / ketimpangan horizontal</b>. Basis pajak sangat timpang secara geografis.' },
          { en: 'Pure local taxing would explode horizontal inequality and trigger a race to the bottom; central administration (DJP) also has scale economies.', id: 'Pajak lokal murni akan meledakkan ketimpangan horizontal dan memicu race to the bottom.' },
          { en: 'So function was devolved but taxing power stayed central → a vertical fiscal gap filled by TKD (DAU/DBH/DAK).', id: 'Maka fungsi diserahkan tetapi pajak tetap pusat → gap fiskal vertikal ditutup TKD.' }
        ], tip: { en: 'Uneven tax bases + scale economies ⇒ central taxing + equalizing transfers.', id: 'Basis pajak timpang + skala ⇒ pajak pusat + transfer pemerataan.' } },
      { type: 'quant', q: { en: 'A town has income m = 10 and Cobb-Douglas taste α = 0.4 for public good G. It receives a conditional non-matching grant H = 5 earmarked for G. How much does G actually rise, and how big is the crowd-out?', id: 'Daerah: m = 10, α = 0,4 untuk G. Menerima hibah bersyarat H = 5. Berapa kenaikan G dan crowd-out?' },
        answer: [
          { en: 'New optimum G = α(m+H) = 0.4 × 15 = 6; original G₁ = αm = 0.4 × 10 = 4.', id: 'G baru = 0,4 × 15 = 6; G₁ = 0,4 × 10 = 4.' },
          { en: 'ΔG = 6 − 4 = <b>2 = αH</b>, even though the grant is 5.', id: 'ΔG = 2 = αH, walau hibah 5.' },
          { en: 'Crowd-out = H − ΔG = 5 − 2 = <b>3 = (1−α)H</b> leaks into private consumption.', id: 'Crowd-out = 3 = (1−α)H bocor ke konsumsi privat.' }
        ], tip: { en: 'Earmarked grant raises G by only αH — verify on the Graphs tab.', id: 'Hibah ikat menaikkan G hanya αH — cek di tab Grafik.' } },
      { type: 'concept', q: { en: 'What is the flypaper effect, and why is it a puzzle for the median-voter model?', id: 'Apa itu efek flypaper, dan mengapa jadi teka-teki bagi model median-voter?' },
        answer: [
          { en: 'Empirically $1 of grant raises local public spending ~40¢ but $1 of private income raises it only ~10¢ — "money sticks where it lands".', id: 'Empiris: $1 hibah menaikkan belanja publik ~40¢, tetapi $1 pendapatan hanya ~10¢.' },
          { en: 'The median-voter model says a lump-sum grant and an equal income rise shift the budget line identically, so they should produce the <b>same</b> public spending — but they don’t.', id: 'Model median-voter memprediksi keduanya menggeser anggaran sama, jadi seharusnya hasil sama — nyatanya tidak.' },
          { en: 'Leading explanation: bureaucrats (budget-maximisers) conceal grant receipts from voters, who then support more spending than if fully informed.', id: 'Penjelasan utama: birokrat menyembunyikan penerimaan hibah dari pemilih.' }
        ], tip: { en: 'Flypaper = grants raise spending more than equivalent income — a departure from median-voter theory.', id: 'Flypaper = hibah menaikkan belanja melebihi pendapatan setara.' } },
      { type: 'quant', q: { en: 'A country\'s total direct government expenditure is 1,000. The central government spends 480 directly and transfers 200 to lower levels (which lower levels then spend directly). Compute the centralization ratio and explain why "direct" excludes transfers.', id: 'Total belanja langsung pemerintah suatu negara = 1.000. Pusat membelanjakan 480 secara langsung dan mentransfer 200 ke daerah (yang lalu dibelanjakan daerah). Hitung rasio sentralisasi dan jelaskan mengapa "langsung" tidak termasuk transfer.' },
        answer: [
          { en: 'Centralization ratio = central direct ÷ total direct = 480 ÷ 1,000 = <b>48%</b> (the US figure).', id: 'Rasio sentralisasi = belanja langsung pusat ÷ total langsung = 480 ÷ 1.000 = <b>48%</b> (angka AS).' },
          { en: 'The 200 transfer is NOT counted as central direct spending — the lower levels actually spend it, and it already appears in <i>their</i> direct expenditure. Counting it twice would overstate central control.', id: 'Transfer 200 TIDAK dihitung sebagai belanja langsung pusat — daerah yang membelanjakannya, dan itu sudah muncul di belanja langsung <i>mereka</i>. Menghitungnya dua kali akan melebih-lebihkan kendali pusat.' },
          { en: 'Caveat: the ratio still <b>understates</b> real central control via unfunded mandates (e.g. the Child Online Protection Act).', id: 'Peringatan: rasio tetap <b>meremehkan</b> kendali pusat sebenarnya lewat unfunded mandates (mis. Child Online Protection Act).' }
        ], tip: { en: 'Centralization ratio = central direct ÷ total direct; transfers are excluded to avoid double-counting.', id: 'Rasio = langsung pusat ÷ total langsung; transfer dikecualikan agar tak dihitung ganda.' } },
      { type: 'concept', q: { en: 'Trace the three phases of PBB devolution in Indonesia, naming the law for each and what stayed central.', id: 'Telusuri tiga fase devolusi PBB di Indonesia, sebutkan UU tiap fase dan apa yang tetap di pusat.' },
        answer: [
          { en: '<b>Phase 1 (UU 12/1985):</b> PBB is a central tax administered by DJP, shared with regions via DBH.', id: '<b>Fase 1 (UU 12/1985):</b> PBB pajak pusat dikelola DJP, dibagi ke daerah via DBH.' },
          { en: '<b>Phase 2 (UU 28/2009, effective 2014):</b> PBB-P2 (urban/rural) and BPHTB devolved to kab/kota; PBB-P3 (plantation, forestry, mining) stays central because bases span jurisdictions and need national valuation.', id: '<b>Fase 2 (UU 28/2009, berlaku 2014):</b> PBB-P2 (perkotaan/perdesaan) dan BPHTB diserahkan ke kab/kota; PBB-P3 (perkebunan, kehutanan, pertambangan) tetap pusat karena basis lintas yurisdiksi dan butuh penilaian nasional.' },
          { en: '<b>Phase 3 (UU 1/2022 HKPD):</b> PBB-P2 cap 0.5%, DBH PBB raised 90%→100% to producing regions, plus the Opsen surtax.', id: '<b>Fase 3 (UU 1/2022 HKPD):</b> PBB-P2 dibatasi 0,5%, DBH PBB dinaikkan 90%→100% ke daerah penghasil, plus surtax Opsen.' }
        ], tip: { en: '1985 all central → 2009 P2/BPHTB local → 2022 HKPD strengthens local + 100% DBH.', id: '1985 semua pusat → 2009 P2/BPHTB lokal → 2022 HKPD perkuat lokal + DBH 100%.' } },
      { type: 'scenario', q: { en: 'UU HKPD sets an infrastructure floor of ≥40% of APBD and a personnel cap of ≤30%. Why might the 40% infrastructure floor fail to bind in many regions during the transition?', id: 'UU HKPD menetapkan lantai infrastruktur ≥40% APBD dan batas pegawai ≤30%. Mengapa lantai 40% mungkin gagal mengikat di banyak daerah selama transisi?' },
        answer: [
          { en: 'Many regions have huge <b>pre-existing personnel commitments</b> — APBD belanja pegawai averaged ~32–33% while belanja modal was only ~11–17%, so there is little room to reallocate quickly.', id: 'Banyak daerah punya <b>komitmen pegawai yang sudah besar</b> — belanja pegawai APBD rata-rata ~32–33% sementara belanja modal hanya ~11–17%, sehingga sedikit ruang untuk realokasi cepat.' },
          { en: 'This is the Indonesian flypaper effect: DAU↔belanja-pegawai correlation rose 0.741→0.882 (2001→2020); most transfer money funds payroll, not infrastructure.', id: 'Ini efek flypaper Indonesia: korelasi DAU↔belanja-pegawai naik 0,741→0,882 (2001→2020); sebagian besar transfer membiayai gaji, bukan infrastruktur.' },
          { en: 'The 5-year transition + hold-harmless soften the squeeze, but reports suggest hitting 40% within the window will be very difficult for low-capacity regions.', id: 'Transisi 5 tahun + hold-harmless melonggarkan tekanan, tetapi laporan menunjukkan mencapai 40% dalam jendela itu sangat sulit bagi daerah berkapasitas rendah.' }
        ], tip: { en: 'Sticky personnel costs (the flypaper effect) make the 40% infra floor hard to reach fast.', id: 'Biaya pegawai yang lengket (efek flypaper) membuat lantai infra 40% sulit dicapai cepat.' } }
    ]
  };
})();
