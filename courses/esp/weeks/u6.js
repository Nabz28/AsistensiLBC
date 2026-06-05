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
        heading: { en: 'Why communities exist: club & Tiebout', id: 'Mengapa komunitas ada: klub & Tiebout' }, num: '1',
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
        heading: { en: 'Optimal federalism: who should do what', id: 'Federalisme optimal: siapa melakukan apa' }, num: '2',
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
              '<div class="tip">📝 Keunikan Indonesia: <b>desentralisasi asimetris</b> (status khusus untuk Aceh, Papua, Yogyakarta, DKJ) melakukan penyesuaian tingkat konstitusi yang tak bisa dilakukan federalisme gaya AS. Indonesia menetapkan <i>fungsi</i> lebih dulu (UU 23/2014) tetapi menyerahkannya lebih cepat daripada penerimaan — gap fiskal vertikal.</div>' } }
        ]
      },
      {
        heading: { en: 'Property tax: incidence & views', id: 'PBB: insidensi & pandangan' }, num: '3',
        cards: [
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
              '<p><b>Perjalanan PBB Indonesia</b>: terpusat (UU 12/1985) → UU 28/2009 menyerahkan <b>PBB-P2</b> (tanah perkotaan/perdesaan) dan <b>BPHTB</b> ke kab/kota (2014); PBB sektor <b>P3</b> (perkebunan, kehutanan, pertambangan) tetap di pusat. <b>UU 1/2022 (HKPD)</b>: PBB-P2 dibatasi 0,5%, DBH PBB dinaikkan 90%→100% ke daerah penghasil, plus sistem surtax <b>Opsen</b>. PBB banyak dibenci (penilaian, visibilitas, persepsi regresivitas, aksesibilitas politis — Prop 13, 1978) dan berkinerja rendah sebagai PAD di Indonesia (pemungutan sering < 50%).</p>' } }
        ]
      },
      {
        heading: { en: 'Intergovernmental grants & the flypaper effect', id: 'Hibah antarpemerintah & efek flypaper' }, num: '4',
        cards: [
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
              '<p><b>UU 1/2022 (HKPD)</b> mereformasi keseluruhannya. DAU baru = Fiscal Need (KbF) − Potential Revenue (PPD); aturan lama "DAU ≥ 26% penerimaan dalam negeri neto" dihapus. TKD 2025 ≈ Rp 848,5 T (pasca-Inpres 1/2025); RAPBN 2026 memangkasnya ~20% menjadi Rp 693 T — pemangkasan terdalam dalam 25 tahun, dibaca sebagian sebagai <b>resentralisasi</b> (298 daerah bergantung pada TKD untuk >80% APBD).</p>' } }
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
        ], tip: { en: 'Flypaper = grants raise spending more than equivalent income — a departure from median-voter theory.', id: 'Flypaper = hibah menaikkan belanja melebihi pendapatan setara.' } }
    ]
  };
})();
