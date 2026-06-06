/* ESP Unit 3 — State expenditure (Belanja Negara) & budget health. Source: Kuliah 10. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u3 = {
    id: 'u3',
    label: { en: 'Unit 3', id: 'Unit 3' },
    title: { en: 'State Expenditure (Belanja Negara) & Budget Health', id: 'Belanja Negara & Kesehatan APBN' },
    subtitle: { en: 'Classification · mandatory spending · budget-health diagnostics · absorption pattern · efficiency', id: 'Klasifikasi · belanja wajib · diagnostik kesehatan APBN · pola penyerapan · efisiensi' },

    notes: [
      {
        heading: { en: 'What state expenditure is and how it is classified', id: 'Apa itu belanja negara & klasifikasinya' }, num: '1',
        cards: [
          { title: { en: 'Belanja Negara = the spending instrument of the three functions', id: 'Belanja Negara = instrumen tiga fungsi' },
            html: { en: '<p><span class="key">Belanja Negara</span> is all government spending to run the <b>allocation, distribution and stabilization</b> functions, financing both <b>central</b> spending and <b>transfers to regions</b>. It is the main instrument for <span class="key">public goods</span> (non-rival, non-excludable) the market under-provides: infrastructure, defence, education, health.</p>' +
              '<table><thead><tr><th>Belanja Negara</th></tr></thead><tbody>' +
              '<tr><td><b>Belanja Pemerintah Pusat</b> = Belanja K/L + Belanja non-K/L (subsidies, interest, etc.)</td></tr>' +
              '<tr><td><b>Transfer ke Daerah (TKD)</b></td></tr></tbody></table>',
              id: '<p><span class="key">Belanja Negara</span> adalah seluruh belanja pemerintah untuk menjalankan fungsi <b>alokasi, distribusi, dan stabilisasi</b>, membiayai baik belanja <b>pusat</b> maupun <b>transfer ke daerah</b>. Ini adalah instrumen utama untuk <span class="key">barang publik</span> (non-rival, non-excludable) yang kurang disediakan pasar: infrastruktur, pertahanan, pendidikan, kesehatan.</p>' +
              '<table><thead><tr><th>Belanja Negara</th></tr></thead><tbody>' +
              '<tr><td><b>Belanja Pemerintah Pusat</b> = Belanja K/L + Belanja non-K/L (subsidi, bunga, dll.)</td></tr>' +
              '<tr><td><b>Transfer ke Daerah (TKD)</b></td></tr></tbody></table>' } },
          { title: { en: 'Three classifications of expenditure', id: 'Tiga klasifikasi belanja' },
            html: { en: '<p>The same spending is sliced three ways:</p>' +
              '<ul><li><b>By FUNCTION</b> (COFOG, GFS standard): general public services, defence, public order, economic affairs, environment, housing, <b>health</b>, recreation/culture/religion, <b>education</b>, social protection. Not by ministry — a K/L can serve several functions.</li>' +
              '<li><b>By TYPE</b>: personnel (gaji), goods/services, capital, social assistance (bansos), interest payments, subsidies, grants, other.</li>' +
              '<li><b>By APBN PRESENTATION</b>: Belanja Pemerintah Pusat (K/L + non-K/L) and Transfer ke Daerah.</li></ul>' +
              '<div class="note">💡 COFOG (Classification of the Functions of Government) lets you compare spending priorities across countries.</div>',
              id: '<p>Belanja yang sama dipotong dengan tiga cara:</p>' +
              '<ul><li><b>Menurut FUNGSI</b> (standar COFOG, GFS): pelayanan umum, pertahanan, ketertiban, ekonomi, lingkungan, perumahan, <b>kesehatan</b>, rekreasi/budaya/agama, <b>pendidikan</b>, perlindungan sosial. Bukan per kementerian — satu K/L bisa melayani beberapa fungsi.</li>' +
              '<li><b>Menurut JENIS</b>: belanja pegawai (gaji), barang/jasa, modal, bantuan sosial (bansos), pembayaran bunga, subsidi, hibah, lainnya.</li>' +
              '<li><b>Menurut PENYAJIAN APBN</b>: Belanja Pemerintah Pusat (K/L + non-K/L) dan Transfer ke Daerah.</li></ul>' +
              '<div class="note">💡 COFOG (Classification of the Functions of Government) memungkinkan Anda membandingkan prioritas belanja antarnegara.</div>' } },
          { title: { en: 'The APBN I-account: revenue, spending, deficit, financing', id: 'I-account APBN: pendapatan, belanja, defisit, pembiayaan' },
            html: { en: '<p>The <span class="key">I-account</span> is how the APBN is read top to bottom. Memorise the skeleton: <b>A. Revenue − B. Spending = D. Surplus/(Deficit)</b>, and <b>E. Financing</b> exactly fills the deficit. The <b>primary balance (C)</b> is the deficit excluding interest. Realisation s/d 31 Mar (triliun Rupiah):</p>' +
              '<table><thead><tr><th>Uraian</th><th>2025 APBN</th><th>2026 APBN</th></tr></thead><tbody>' +
              '<tr><td><b>A. Pendapatan Negara</b></td><td><b>3.005,1</b></td><td><b>3.153,6</b></td></tr>' +
              '<tr><td>&nbsp;&nbsp;I. Penerimaan Perpajakan</td><td>2.490,9</td><td>2.693,7</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;1. Penerimaan Pajak</td><td>2.189,3</td><td>2.357,7</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;2. Kepabeanan & Cukai</td><td>301,6</td><td>336,0</td></tr>' +
              '<tr><td>&nbsp;&nbsp;II. PNBP</td><td>513,6</td><td>459,2</td></tr>' +
              '<tr><td>&nbsp;&nbsp;III. Penerimaan Hibah</td><td>0,6</td><td>0,7</td></tr>' +
              '<tr><td><b>B. Belanja Negara</b></td><td><b>3.621,3</b></td><td><b>3.842,7</b></td></tr>' +
              '<tr><td>&nbsp;&nbsp;I. Belanja Pemerintah Pusat</td><td>2.701,4</td><td>3.149,7</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;1. Belanja K/L</td><td>1.160,1</td><td>1.510,5</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;2. Belanja non-K/L</td><td>1.541,4</td><td>1.639,2</td></tr>' +
              '<tr><td>&nbsp;&nbsp;II. Transfer ke Daerah</td><td>919,9</td><td>693,0</td></tr>' +
              '<tr><td><b>C. Keseimbangan Primer</b></td><td>(63,3)</td><td>(89,7)</td></tr>' +
              '<tr><td><b>D. Surplus/(Defisit)</b></td><td><b>(616,2)</b></td><td><b>(689,1)</b></td></tr>' +
              '<tr><td>&nbsp;&nbsp;% thd PDB</td><td>(2,53)</td><td>(2,68)</td></tr>' +
              '<tr><td><b>E. Pembiayaan Anggaran</b></td><td><b>616,2</b></td><td><b>689,1</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Check: 3.005,1 − 3.621,3 = −616,2 = D, and E = +616,2 plugs the hole. Deficit stays under the 3%-of-GDP fiscal rule (−2,53%).</div>',
              id: '<p><span class="key">I-account</span> adalah cara membaca APBN dari atas ke bawah. Hafalkan kerangkanya: <b>A. Pendapatan − B. Belanja = D. Surplus/(Defisit)</b>, dan <b>E. Pembiayaan</b> persis menutup defisit. <b>Keseimbangan primer (C)</b> adalah defisit tanpa bunga utang. Realisasi s/d 31 Mar (triliun Rupiah):</p>' +
              '<table><thead><tr><th>Uraian</th><th>2025 APBN</th><th>2026 APBN</th></tr></thead><tbody>' +
              '<tr><td><b>A. Pendapatan Negara</b></td><td><b>3.005,1</b></td><td><b>3.153,6</b></td></tr>' +
              '<tr><td>&nbsp;&nbsp;I. Penerimaan Perpajakan</td><td>2.490,9</td><td>2.693,7</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;1. Penerimaan Pajak</td><td>2.189,3</td><td>2.357,7</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;2. Kepabeanan & Cukai</td><td>301,6</td><td>336,0</td></tr>' +
              '<tr><td>&nbsp;&nbsp;II. PNBP</td><td>513,6</td><td>459,2</td></tr>' +
              '<tr><td>&nbsp;&nbsp;III. Penerimaan Hibah</td><td>0,6</td><td>0,7</td></tr>' +
              '<tr><td><b>B. Belanja Negara</b></td><td><b>3.621,3</b></td><td><b>3.842,7</b></td></tr>' +
              '<tr><td>&nbsp;&nbsp;I. Belanja Pemerintah Pusat</td><td>2.701,4</td><td>3.149,7</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;1. Belanja K/L</td><td>1.160,1</td><td>1.510,5</td></tr>' +
              '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;2. Belanja non-K/L</td><td>1.541,4</td><td>1.639,2</td></tr>' +
              '<tr><td>&nbsp;&nbsp;II. Transfer ke Daerah</td><td>919,9</td><td>693,0</td></tr>' +
              '<tr><td><b>C. Keseimbangan Primer</b></td><td>(63,3)</td><td>(89,7)</td></tr>' +
              '<tr><td><b>D. Surplus/(Defisit)</b></td><td><b>(616,2)</b></td><td><b>(689,1)</b></td></tr>' +
              '<tr><td>&nbsp;&nbsp;% thd PDB</td><td>(2,53)</td><td>(2,68)</td></tr>' +
              '<tr><td><b>E. Pembiayaan Anggaran</b></td><td><b>616,2</b></td><td><b>689,1</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Periksa: 3.005,1 − 3.621,3 = −616,2 = D, dan E = +616,2 menambal lubang itu. Defisit tetap di bawah fiscal rule 3% PDB (−2,53%).</div>' } },
          { title: { en: 'The three classifications in full', id: 'Tiga klasifikasi secara lengkap' },
            html: { en: '<p>The deck lists each classification exhaustively:</p>' +
              '<table><thead><tr><th>By FUNCTION (11, COFOG)</th><th>By TYPE (8 jenis)</th><th>By PRESENTATION</th></tr></thead><tbody>' +
              '<tr><td>1. Pelayanan Umum<br>2. Pertahanan<br>3. Ketertiban & Keamanan<br>4. Ekonomi<br>5. Lingkungan Hidup<br>6. Perumahan & Komunitas<br>7. Kesehatan<br>8. Pariwisata & Kebudayaan<br>9. Agama<br>10. Pendidikan<br>11. Perlindungan Sosial</td>' +
              '<td>1. Belanja Pegawai (gaji/upah)<br>2. Belanja Barang/Jasa<br>3. Belanja Modal<br>4. Bantuan Sosial<br>5. Pembayaran Bunga Utang<br>6. Subsidi<br>7. Hibah<br>8. Belanja Lainnya</td>' +
              '<td><b>1. Belanja Pemerintah Pusat</b><br>&nbsp;&nbsp;a. Belanja K/L<br>&nbsp;&nbsp;b. Belanja non-K/L<br><b>2. Transfer ke Daerah</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 FUNCTION is by <i>purpose</i> (tupoksi), not by ministry — one K/L can serve several functions. TYPE is the economic nature. PRESENTATION is the APBN document structure.</div>',
              id: '<p>Slide kuliah merinci tiap klasifikasi secara lengkap:</p>' +
              '<table><thead><tr><th>Menurut FUNGSI (11, COFOG)</th><th>Menurut JENIS (8)</th><th>Menurut PENYAJIAN</th></tr></thead><tbody>' +
              '<tr><td>1. Pelayanan Umum<br>2. Pertahanan<br>3. Ketertiban & Keamanan<br>4. Ekonomi<br>5. Lingkungan Hidup<br>6. Perumahan & Komunitas<br>7. Kesehatan<br>8. Pariwisata & Kebudayaan<br>9. Agama<br>10. Pendidikan<br>11. Perlindungan Sosial</td>' +
              '<td>1. Belanja Pegawai (gaji/upah)<br>2. Belanja Barang/Jasa<br>3. Belanja Modal<br>4. Bantuan Sosial<br>5. Pembayaran Bunga Utang<br>6. Subsidi<br>7. Hibah<br>8. Belanja Lainnya</td>' +
              '<td><b>1. Belanja Pemerintah Pusat</b><br>&nbsp;&nbsp;a. Belanja K/L<br>&nbsp;&nbsp;b. Belanja non-K/L<br><b>2. Transfer ke Daerah</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 FUNGSI menurut <i>tujuan</i> (tupoksi), bukan kementerian — satu K/L bisa menjalankan beberapa fungsi. JENIS = sifat ekonomi. PENYAJIAN = struktur dokumen APBN.</div>' } },
          { title: { en: 'Expenditure by FUNCTION 2020–2024 (IMF GFS/COFOG)', id: 'Belanja menurut FUNGSI 2020–2024 (IMF GFS/COFOG)' },
            html: { en: '<p>Central + regional spending grouped by purpose (Rp triliun). General Public Services dominates; spikes in Health (2021, Covid) show stabilisation in action.</p>' +
              '<table><thead><tr><th>Fungsi</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th></tr></thead><tbody>' +
              '<tr><td>General Public Services</td><td>1.299,5</td><td>1.334,0</td><td>1.723,4</td><td>1.689,5</td><td>1.757,7</td></tr>' +
              '<tr><td>Defense</td><td>136,9</td><td>125,8</td><td>150,3</td><td>171,5</td><td>190,3</td></tr>' +
              '<tr><td>Public Order & Safety</td><td>154,1</td><td>157,4</td><td>171,8</td><td>193,3</td><td>230,1</td></tr>' +
              '<tr><td>Economic Affairs</td><td>399,9</td><td>461,4</td><td>443,7</td><td>485,4</td><td>546,2</td></tr>' +
              '<tr><td>Environmental Protection</td><td>13,0</td><td>14,0</td><td>12,8</td><td>13,5</td><td>14,5</td></tr>' +
              '<tr><td>Housing & Community</td><td>22,8</td><td>30,6</td><td>25,1</td><td>38,1</td><td>48,1</td></tr>' +
              '<tr><td>Health</td><td>105,1</td><td>211,3</td><td>124,5</td><td>98,4</td><td>99,4</td></tr>' +
              '<tr><td>Recreation/Culture/Religion</td><td>12,6</td><td>14,2</td><td>14,5</td><td>15,6</td><td>16,6</td></tr>' +
              '<tr><td>Education</td><td>155,1</td><td>162,4</td><td>160,1</td><td>172,0</td><td>197,2</td></tr>' +
              '<tr><td>Social Protection</td><td>295,5</td><td>272,7</td><td>267,7</td><td>242,4</td><td>258,3</td></tr>' +
              '<tr><td><b>Total Outlays</b></td><td><b>2.594,7</b></td><td><b>2.783,8</b></td><td><b>3.093,8</b></td><td><b>3.119,6</b></td><td><b>3.358,4</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Classified by tupoksi (purpose), NOT by ministry — source: IMF GFS Government Expenditures by Function.</div>',
              id: '<p>Belanja pusat + daerah dikelompokkan menurut tujuan (Rp triliun). Pelayanan Umum mendominasi; lonjakan Kesehatan (2021, Covid) menunjukkan fungsi stabilisasi bekerja.</p>' +
              '<table><thead><tr><th>Fungsi</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th></tr></thead><tbody>' +
              '<tr><td>Pelayanan Umum</td><td>1.299,5</td><td>1.334,0</td><td>1.723,4</td><td>1.689,5</td><td>1.757,7</td></tr>' +
              '<tr><td>Pertahanan</td><td>136,9</td><td>125,8</td><td>150,3</td><td>171,5</td><td>190,3</td></tr>' +
              '<tr><td>Ketertiban & Keamanan</td><td>154,1</td><td>157,4</td><td>171,8</td><td>193,3</td><td>230,1</td></tr>' +
              '<tr><td>Ekonomi</td><td>399,9</td><td>461,4</td><td>443,7</td><td>485,4</td><td>546,2</td></tr>' +
              '<tr><td>Lingkungan Hidup</td><td>13,0</td><td>14,0</td><td>12,8</td><td>13,5</td><td>14,5</td></tr>' +
              '<tr><td>Perumahan & Komunitas</td><td>22,8</td><td>30,6</td><td>25,1</td><td>38,1</td><td>48,1</td></tr>' +
              '<tr><td>Kesehatan</td><td>105,1</td><td>211,3</td><td>124,5</td><td>98,4</td><td>99,4</td></tr>' +
              '<tr><td>Rekreasi/Budaya/Agama</td><td>12,6</td><td>14,2</td><td>14,5</td><td>15,6</td><td>16,6</td></tr>' +
              '<tr><td>Pendidikan</td><td>155,1</td><td>162,4</td><td>160,1</td><td>172,0</td><td>197,2</td></tr>' +
              '<tr><td>Perlindungan Sosial</td><td>295,5</td><td>272,7</td><td>267,7</td><td>242,4</td><td>258,3</td></tr>' +
              '<tr><td><b>Total Belanja</b></td><td><b>2.594,7</b></td><td><b>2.783,8</b></td><td><b>3.093,8</b></td><td><b>3.119,6</b></td><td><b>3.358,4</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Diklasifikasikan menurut tupoksi (tujuan), BUKAN per kementerian — sumber: IMF GFS Government Expenditures by Function.</div>' } },
          { title: { en: 'Expenditure by TYPE 2020–2024 (Belanja Pemerintah Pusat)', id: 'Belanja menurut JENIS 2020–2024 (Belanja Pemerintah Pusat)' },
            html: { en: '<p>Same central spending sliced by economic nature (Rp miliar). Notice interest payments climbing every year — the cost of accumulated deficits.</p>' +
              '<table><thead><tr><th>Jenis</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th></tr></thead><tbody>' +
              '<tr><td>Belanja Pegawai</td><td>380.530</td><td>387.750</td><td>402.040</td><td>412.710</td><td>464.860</td></tr>' +
              '<tr><td>Belanja Barang</td><td>422.340</td><td>530.060</td><td>410.220</td><td>432.720</td><td>523.370</td></tr>' +
              '<tr><td>Belanja Modal</td><td>190.920</td><td>239.630</td><td>221.400</td><td>303.040</td><td>355.510</td></tr>' +
              '<tr><td>Bantuan Sosial</td><td>202.530</td><td>173.650</td><td>160.130</td><td>156.600</td><td>154.950</td></tr>' +
              '<tr><td>Pembayaran Bunga Utang</td><td>314.090</td><td>343.500</td><td>386.340</td><td>439.880</td><td>488.430</td></tr>' +
              '<tr><td>Subsidi</td><td>196.230</td><td>242.090</td><td>250.140</td><td>269.590</td><td>292.690</td></tr>' +
              '<tr><td>Belanja Hibah</td><td>6.280</td><td>4.320</td><td>5.770</td><td>220</td><td>280</td></tr>' +
              '<tr><td>Belanja Lainnya</td><td>120.040</td><td>79.700</td><td>404.250</td><td>225.020</td><td>216.140</td></tr>' +
              '<tr><td><b>Belanja Pemerintah Pusat</b></td><td><b>1.832.950</b></td><td><b>2.000.700</b></td><td><b>2.240.300</b></td><td><b>2.239.790</b></td><td><b>2.496.220</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Bunga utang naik dari Rp 314 T (2020) ke Rp 488 T (2024): a structurally rising line that crowds out productive spending.</div>',
              id: '<p>Belanja pusat yang sama dipotong menurut sifat ekonomi (Rp miliar). Perhatikan pembayaran bunga utang naik tiap tahun — biaya akumulasi defisit.</p>' +
              '<table><thead><tr><th>Jenis</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th></tr></thead><tbody>' +
              '<tr><td>Belanja Pegawai</td><td>380.530</td><td>387.750</td><td>402.040</td><td>412.710</td><td>464.860</td></tr>' +
              '<tr><td>Belanja Barang</td><td>422.340</td><td>530.060</td><td>410.220</td><td>432.720</td><td>523.370</td></tr>' +
              '<tr><td>Belanja Modal</td><td>190.920</td><td>239.630</td><td>221.400</td><td>303.040</td><td>355.510</td></tr>' +
              '<tr><td>Bantuan Sosial</td><td>202.530</td><td>173.650</td><td>160.130</td><td>156.600</td><td>154.950</td></tr>' +
              '<tr><td>Pembayaran Bunga Utang</td><td>314.090</td><td>343.500</td><td>386.340</td><td>439.880</td><td>488.430</td></tr>' +
              '<tr><td>Subsidi</td><td>196.230</td><td>242.090</td><td>250.140</td><td>269.590</td><td>292.690</td></tr>' +
              '<tr><td>Belanja Hibah</td><td>6.280</td><td>4.320</td><td>5.770</td><td>220</td><td>280</td></tr>' +
              '<tr><td>Belanja Lainnya</td><td>120.040</td><td>79.700</td><td>404.250</td><td>225.020</td><td>216.140</td></tr>' +
              '<tr><td><b>Belanja Pemerintah Pusat</b></td><td><b>1.832.950</b></td><td><b>2.000.700</b></td><td><b>2.240.300</b></td><td><b>2.239.790</b></td><td><b>2.496.220</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Bunga utang naik dari Rp 314 T (2020) ke Rp 488 T (2024): pos yang naik secara struktural dan menggusur belanja produktif.</div>' } }
        ]
      },
      {
        heading: { en: 'Belanja K/L and non-K/L in detail', id: 'Belanja K/L dan non-K/L secara rinci' }, num: '2',
        cards: [
          { title: { en: 'The four components of Belanja K/L', id: 'Empat komponen Belanja K/L' },
            html: { en: '<p>Belanja Kementerian/Lembaga breaks into four types, each with concrete deliverables:</p>' +
              '<table><thead><tr><th>Component</th><th>What it buys</th></tr></thead><tbody>' +
              '<tr><td><b>Belanja Pegawai</b></td><td>Gaji + tunjangan kinerja of civil servants.</td></tr>' +
              '<tr><td><b>Belanja Barang</b></td><td>Services to society: BOS school grants, education operations, biodiesel subsidy, telecom/IT, public health, LPDP scholarships; goods handed to society/regions: <b>MBG</b> free meals, BSU wage subsidy, food aid; maintenance of facilities.</td></tr>' +
              '<tr><td><b>Belanja Modal</b></td><td>Land, machinery/equipment, roads/irrigation/networks, buildings, BLU capital.</td></tr>' +
              '<tr><td><b>Belanja Bansos</b></td><td><b>PBI JKN</b> for 96,8M people; <b>PKH & Kartu Sembako</b> for 18,3M KPM; <b>PIP/KIP</b> for 20,3M students + 1,2M college students; stimulus bansos.</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 MBG and food aid sit under <i>Belanja Barang</i> (goods delivered to society), not bansos — a classic exam trap.</div>',
              id: '<p>Belanja Kementerian/Lembaga terbagi empat jenis, masing-masing dengan keluaran konkret:</p>' +
              '<table><thead><tr><th>Komponen</th><th>Apa yang dibeli</th></tr></thead><tbody>' +
              '<tr><td><b>Belanja Pegawai</b></td><td>Gaji + tunjangan kinerja aparatur.</td></tr>' +
              '<tr><td><b>Belanja Barang</b></td><td>Layanan ke masyarakat: penyaluran BOS, operasional pendidikan, subsidi biodiesel, telekomunikasi/informasi, kesehatan masyarakat, beasiswa LPDP; barang diserahkan ke masyarakat/pemda: <b>MBG</b>, BSU, bantuan pangan; pemeliharaan sarana & prasarana.</td></tr>' +
              '<tr><td><b>Belanja Modal</b></td><td>Tanah, peralatan/mesin, jalan/irigasi/jaringan, gedung & bangunan, modal BLU.</td></tr>' +
              '<tr><td><b>Belanja Bansos</b></td><td><b>PBI JKN</b> untuk 96,8 juta jiwa; <b>PKH & Kartu Sembako</b> untuk 18,3 juta KPM; <b>PIP/KIP</b> untuk 20,3 juta siswa + 1,2 juta mahasiswa; bansos stimulus.</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 MBG dan bantuan pangan ada di <i>Belanja Barang</i> (barang diserahkan ke masyarakat), bukan bansos — jebakan ujian klasik.</div>' } },
          { title: { en: 'Belanja non-K/L: subsidies in detail', id: 'Belanja non-K/L: subsidi secara rinci' },
            html: { en: '<p>The biggest non-K/L item is subsidies. 2025 subsidy realisation ≈ <b>Rp 281,6 T (91,4% of APBN)</b> — society enjoys subsidised goods:</p>' +
              '<table><thead><tr><th>Subsidised good</th><th>Realisasi 2024</th><th>Realisasi 2025</th><th>Growth</th></tr></thead><tbody>' +
              '<tr><td>BBM (ribu KL)</td><td>18.121,9</td><td>18.979,3</td><td>▲4,7%</td></tr>' +
              '<tr><td>LPG 3 kg (juta kg)</td><td>8.226,5</td><td>8.544,9</td><td>▲3,9%</td></tr>' +
              '<tr><td>Listrik bersubsidi (juta pelanggan)</td><td>41,7</td><td>42,8</td><td>▲2,6%</td></tr>' +
              '<tr><td>Pupuk (juta ton)</td><td>7,2</td><td>8,1</td><td>▲12,1%</td></tr>' +
              '<tr><td>Subsidi Perumahan (ribu rumah)</td><td>200,0</td><td>278,9</td><td>▲39,5%</td></tr>' +
              '</tbody></table>' +
              '<p>Subsidy realisation is driven by <b>ICP (oil price), kurs (exchange rate), and volume</b>. Two 2025 reforms: cutting <b>145 regulations</b> on fertiliser distribution (faster delivery) and lowering the fertiliser <b>HET</b> (Urea, NPK, ZA, Organik) so prices are more affordable for farmers.</p>',
              id: '<p>Pos non-K/L terbesar adalah subsidi. Realisasi subsidi 2025 ≈ <b>Rp 281,6 T (91,4% thd APBN)</b> — masyarakat menikmati barang bersubsidi:</p>' +
              '<table><thead><tr><th>Barang subsidi</th><th>Realisasi 2024</th><th>Realisasi 2025</th><th>Growth</th></tr></thead><tbody>' +
              '<tr><td>BBM (ribu KL)</td><td>18.121,9</td><td>18.979,3</td><td>▲4,7%</td></tr>' +
              '<tr><td>LPG 3 kg (juta kg)</td><td>8.226,5</td><td>8.544,9</td><td>▲3,9%</td></tr>' +
              '<tr><td>Listrik bersubsidi (juta pelanggan)</td><td>41,7</td><td>42,8</td><td>▲2,6%</td></tr>' +
              '<tr><td>Pupuk (juta ton)</td><td>7,2</td><td>8,1</td><td>▲12,1%</td></tr>' +
              '<tr><td>Subsidi Perumahan (ribu rumah)</td><td>200,0</td><td>278,9</td><td>▲39,5%</td></tr>' +
              '</tbody></table>' +
              '<p>Realisasi subsidi dipengaruhi <b>ICP (harga minyak), kurs, dan volume</b>. Dua reformasi 2025: pemangkasan <b>145 regulasi</b> penyaluran pupuk (distribusi lebih cepat) dan penurunan <b>HET</b> pupuk (Urea, NPK, ZA, Organik) agar lebih terjangkau bagi petani.</p>' } },
          { title: { en: 'APBN feeds GDP: Y = C + I + G − ...', id: 'APBN menyuplai PDB: Y = C + I + G − ...' },
            html: { en: '<p>From the expenditure side, <span class="key">Y = C + I + G + X − M</span>. APBN lines map onto GDP components:</p>' +
              '<ul><li><b>G — Konsumsi Pemerintah (PKP)</b>: Belanja Pegawai, Belanja Barang, and the operational part of spending form government consumption (some lines are subtractors in the PKP calculation).</li>' +
              '<li><b>C — household consumption</b>: bansos, subsidies, and social spending raise household purchasing power (channelled via APBD too).</li>' +
              '<li><b>I — investment / PMTB</b>: Belanja Modal, construction-related investment financing, and capital goods build fixed capital formation.</li></ul>' +
              '<div class="note">💡 The same Rupiah of Belanja Modal shows up as G operationally but mainly as I (PMTB) in the national accounts — the budget is a macro lever, not just an accounting record.</div>',
              id: '<p>Dari sisi pengeluaran, <span class="key">Y = C + I + G + X − M</span>. Pos APBN memetakan ke komponen PDB:</p>' +
              '<ul><li><b>G — Konsumsi Pemerintah (PKP)</b>: Belanja Pegawai, Belanja Barang, dan bagian operasional membentuk konsumsi pemerintah (sebagian pos menjadi faktor pengurang dalam perhitungan PKP).</li>' +
              '<li><b>C — konsumsi rumah tangga</b>: bansos, subsidi, dan belanja sosial menaikkan daya beli rumah tangga (juga lewat APBD).</li>' +
              '<li><b>I — investasi / PMTB</b>: Belanja Modal, pembiayaan investasi konstruksi, dan barang modal membentuk pembentukan modal tetap.</li></ul>' +
              '<div class="note">💡 Rupiah Belanja Modal yang sama muncul sebagai G secara operasional tetapi terutama sebagai I (PMTB) dalam neraca nasional — APBN adalah tuas makro, bukan sekadar catatan akuntansi.</div>' } }
        ]
      },
      {
        heading: { en: 'Mandatory spending', id: 'Belanja wajib' }, num: '3',
        cards: [
          { title: { en: 'What is locked in', id: 'Apa yang dikunci' },
            html: { en: '<p>Some lines are <span class="key">wajib (mandatory)</span> by law or by nature:</p>' +
              '<ul><li><b>Salaries</b> — cannot fall; should track cost-of-living (COLA).</li>' +
              '<li><b>Education ≥ 20% of Belanja Negara</b> (UUD 1945 Pasal 31(4), UU Sisdiknas). Most of it is <i>Transfer</i> (≈60%) for basic/secondary education run by regions.</li>' +
              '<li><b>Health ≥ 5%</b> of APBN — was mandatory (UU 36/2009), <b>removed by UU 17/2023</b>, but kept ≥5% as a commitment (≈6% in 2024–26).</li></ul>' +
              '<div class="tip">📝 Mandatory spending <b>reduces flexibility</b> in a crisis. A subtle effect: because the 20% education rule is computed on <i>Belanja</i> (which includes the deficit), a bigger deficit automatically raises the education floor.</div>',
              id: '<p>Beberapa pos bersifat <span class="key">wajib (mandatory)</span> menurut undang-undang atau sifatnya:</p>' +
              '<ul><li><b>Gaji</b> — tidak boleh turun; seharusnya mengikuti biaya hidup (COLA).</li>' +
              '<li><b>Pendidikan ≥ 20% dari Belanja Negara</b> (UUD 1945 Pasal 31(4), UU Sisdiknas). Sebagian besar berupa <i>Transfer</i> (≈60%) untuk pendidikan dasar/menengah yang dikelola daerah.</li>' +
              '<li><b>Kesehatan ≥ 5%</b> dari APBN — dulu wajib (UU 36/2009), <b>dihapus oleh UU 17/2023</b>, tetapi tetap dijaga ≥5% sebagai komitmen (≈6% pada 2024–26).</li></ul>' +
              '<div class="tip">📝 Belanja wajib <b>mengurangi fleksibilitas</b> saat krisis. Efek halus: karena aturan pendidikan 20% dihitung atas <i>Belanja</i> (yang mencakup defisit), defisit yang lebih besar otomatis menaikkan batas bawah pendidikan.</div>' } },
          { title: { en: 'Pension liability: a contingent risk', id: 'Liabilitas pensiun: risiko kontinjen' },
            html: { en: '<p>Civil-service pensions are paid <span class="key">pay-as-you-go</span> from the current APBN, creating a <b>contingent liability</b>. The LKPP records ~<b>Rp 3,200 T unfunded past-service liability (UPSL)</b>. This is why pension reform is on the agenda — and it links straight to Unit 5 (PAYG vs funded).</p>',
              id: '<p>Pensiun PNS dibayar secara <span class="key">pay-as-you-go</span> dari APBN berjalan, menciptakan <b>liabilitas kontinjen</b>. LKPP mencatat ~<b>Rp 3.200 T unfunded past-service liability (UPSL)</b>. Inilah sebabnya reformasi pensiun masuk agenda — dan langsung terkait Unit 5 (PAYG vs funded).</p>' } },
          { title: { en: 'The 20%-of-Belanja education quirk (hypothetical)', id: 'Keanehan pendidikan 20%-dari-Belanja (hipotetis)' },
            html: { en: '<p>UUD 1945 Pasal 31(4): the state prioritises education spending <b>at least 20%</b> of APBN/APBD. Since 2009 education ≈ 20% APBN, averaging <b>3,1% of GDP</b>; the largest share (≈60%) flows via <b>Transfer</b> for basic/secondary education run by regions.</p>' +
              '<p>The quirk: 20% is computed on <b>Belanja Negara</b>, which <i>includes the deficit</i>. So a bigger deficit automatically raises the education floor. Hypothetical (revenue fixed at 3.000):</p>' +
              '<table><thead><tr><th>Item</th><th>Case A</th><th>Case B</th></tr></thead><tbody>' +
              '<tr><td>Pendapatan</td><td>3.000</td><td>3.000</td></tr>' +
              '<tr><td>Belanja Pendidikan (20% Belanja)</td><td>740</td><td><b>800</b></td></tr>' +
              '<tr><td>Belanja Lainnya</td><td>2.960</td><td>3.200</td></tr>' +
              '<tr><td><b>Total Belanja</b></td><td><b>3.700</b></td><td><b>4.000</b></td></tr>' +
              '<tr><td>Defisit</td><td>700</td><td><b>1.000</b></td></tr>' +
              '</tbody></table>' +
              '<p>Raise Total Belanja 3.700→4.000 and education is <i>secured first</i> at 20%×4.000 = 800 (up from 740). If instead the rule read 20% of <b>Pendapatan</b>, the floor would not move with the deficit.</p>',
              id: '<p>UUD 1945 Pasal 31(4): negara memprioritaskan anggaran pendidikan <b>sekurang-kurangnya 20%</b> dari APBN/APBD. Sejak 2009 pendidikan ≈ 20% APBN, rerata <b>3,1% PDB</b>; porsi terbesar (≈60%) lewat <b>Transfer</b> untuk pendidikan dasar/menengah yang dikelola daerah.</p>' +
              '<p>Keanehannya: 20% dihitung atas <b>Belanja Negara</b>, yang <i>termasuk defisit</i>. Jadi defisit lebih besar otomatis menaikkan batas bawah pendidikan. Hipotetis (pendapatan tetap 3.000):</p>' +
              '<table><thead><tr><th>Item</th><th>Kasus A</th><th>Kasus B</th></tr></thead><tbody>' +
              '<tr><td>Pendapatan</td><td>3.000</td><td>3.000</td></tr>' +
              '<tr><td>Belanja Pendidikan (20% Belanja)</td><td>740</td><td><b>800</b></td></tr>' +
              '<tr><td>Belanja Lainnya</td><td>2.960</td><td>3.200</td></tr>' +
              '<tr><td><b>Total Belanja</b></td><td><b>3.700</b></td><td><b>4.000</b></td></tr>' +
              '<tr><td>Defisit</td><td>700</td><td><b>1.000</b></td></tr>' +
              '</tbody></table>' +
              '<p>Naikkan Total Belanja 3.700→4.000, pendidikan <i>diamankan lebih dulu</i> sebesar 20%×4.000 = 800 (dari 740). Jika aturannya 20% dari <b>Pendapatan</b>, batasnya tak ikut naik mengikuti defisit.</p>' } },
          { title: { en: 'Health ≥ 5% APBN: mandate repealed but kept', id: 'Kesehatan ≥ 5% APBN: mandat dicabut tapi dijaga' },
            html: { en: '<p>UU 36/2009 set health spending at <b>≥ 5% of APBN</b> (and ≥ 10% of APBD). The revision <b>UU 17/2023 removed</b> that minimum — yet 2024–2026 allocations stayed <b>above 5% (≈6%)</b>, even higher than before the 2023 law. Health is run by both Belanja K/L and Transfer ke Daerah.</p>' +
              '<div class="tip">📝 "Ego sektoral" — each ministry pushing its own mandatory floor — drives mandatory allocations and <b>reduces APBN flexibility in a crisis</b>.</div>',
              id: '<p>UU 36/2009 menetapkan anggaran kesehatan <b>≥ 5% APBN</b> (dan ≥ 10% APBD). Revisi <b>UU 17/2023 menghapus</b> minimum itu — namun alokasi 2024–2026 tetap <b>di atas 5% (≈6%)</b>, bahkan lebih tinggi dari sebelum UU 2023. Kesehatan dijalankan oleh Belanja K/L maupun Transfer ke Daerah.</p>' +
              '<div class="tip">📝 "Ego sektoral" — tiap kementerian mendorong batas wajibnya sendiri — mendorong alokasi wajib dan <b>mengurangi fleksibilitas APBN saat krisis</b>.</div>' } },
          { title: { en: 'Belanja Pegawai & pensions: the numbers', id: 'Belanja Pegawai & pensiun: angkanya' },
            html: { en: '<p><b>Belanja Pegawai K/L 2025 ≈ Rp 321,3 T</b> (real growth 10,1%) — 9,3% of total Belanja Negara, 21,4% of total Belanja K/L. Composition:</p>' +
              '<ul><li>ASN Pusat 1,3M (PNS + PPPK); TNI/Polri 1,0M; Guru 4,2M (Kemdikdasmen 3,4M, Kemenag 0,8M).</li>' +
              '<li>Gaji + tunjangan Rp 211,0 T; tunjangan kinerja dll Rp 110,3 T. 2025 rose partly from non-PNS teacher allowances (Rp 18,8→23,1 T) and 355rb new ASN.</li></ul>' +
              '<p><b>Belanja Pensiun 2025 ≈ Rp 166,5 T</b> (growth 3,7%): Taspen Rp 146,1 T + Asabri Rp 20,4 T; <b>3,73M pensioners</b> (+100rb vs 2024). PAYG financing → contingent liability; LKPP records ~<b>Rp 3.200 T UPSL</b>.</p>',
              id: '<p><b>Belanja Pegawai K/L 2025 ≈ Rp 321,3 T</b> (real growth 10,1%) — 9,3% dari total Belanja Negara, 21,4% dari total Belanja K/L. Komposisi:</p>' +
              '<ul><li>ASN Pusat 1,3 jt (PNS + PPPK); TNI/Polri 1,0 jt; Guru 4,2 jt (Kemdikdasmen 3,4 jt, Kemenag 0,8 jt).</li>' +
              '<li>Gaji + tunjangan Rp 211,0 T; tunjangan kinerja dll Rp 110,3 T. 2025 naik antara lain karena tunjangan pendidik non-PNS (Rp 18,8→23,1 T) dan 355rb ASN baru.</li></ul>' +
              '<p><b>Belanja Pensiun 2025 ≈ Rp 166,5 T</b> (growth 3,7%): Taspen Rp 146,1 T + Asabri Rp 20,4 T; <b>3,73 jt pensiunan</b> (+100rb vs 2024). Pembiayaan PAYG → liabilitas kontinjen; LKPP mencatat ~<b>Rp 3.200 T UPSL</b>.</p>' } },
          { title: { en: 'Program Prioritas APBN 2025 ≈ Rp 805,4 T', id: 'Program Prioritas APBN 2025 ≈ Rp 805,4 T' },
            html: { en: '<p>Priority programmes whose benefits reach society directly (realisasi s.d. 31 Des 2025), grouped by theme:</p>' +
              '<table><thead><tr><th>Theme / Programme</th><th>Rp T</th></tr></thead><tbody>' +
              '<tr><td colspan="2"><b>Penguatan & proteksi daya beli</b></td></tr>' +
              '<tr><td>PKH</td><td>28,7</td></tr>' +
              '<tr><td>Kartu Sembako / BPNT</td><td>43,3</td></tr>' +
              '<tr><td>BLTS Kesra</td><td>29,9</td></tr>' +
              '<tr><td colspan="2"><b>Pelayanan publik</b></td></tr>' +
              '<tr><td>PIP / KIP-Kuliah / beasiswa</td><td>27,7</td></tr>' +
              '<tr><td>Bantuan Iuran PBI JKN</td><td>46,3</td></tr>' +
              '<tr><td>Cek Kesehatan Gratis (CKG) & TB, revitalisasi RS</td><td>6,5</td></tr>' +
              '<tr><td>Makan Bergizi Gratis (MBG)</td><td>51,5</td></tr>' +
              '<tr><td>Sekolah Rakyat & Sekolah Unggul Garuda</td><td>6,7</td></tr>' +
              '<tr><td>Renovasi/Revitalisasi Sekolah</td><td>18,9</td></tr>' +
              '<tr><td>Gaji/TPG/TPD Non-PNS</td><td>22,2</td></tr>' +
              '<tr><td colspan="2"><b>Infrastruktur publik & produktivitas</b></td></tr>' +
              '<tr><td>Preservasi Jalan & Jembatan</td><td>19,1</td></tr>' +
              '<tr><td>Perumahan</td><td>45,4</td></tr>' +
              '<tr><td>Bendungan, Irigasi & O&P Sarpras SDA</td><td>20,1</td></tr>' +
              '<tr><td colspan="2"><b>Stabilisasi harga & produksi</b></td></tr>' +
              '<tr><td>Subsidi/Kompensasi Energi</td><td>305,2</td></tr>' +
              '<tr><td>Subsidi Non-Energi (KUR, Pupuk)</td><td>96,4</td></tr>' +
              '<tr><td>Bulog & cadangan pangan</td><td>22,1</td></tr>' +
              '<tr><td><b>Total Program Prioritas</b></td><td><b>≈ 805,4</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Energy subsidy/compensation (Rp 305,2 T) alone is the single biggest item — daya-beli protection dwarfs every other programme.</div>',
              id: '<p>Program prioritas yang manfaatnya diterima masyarakat langsung (realisasi s.d. 31 Des 2025), dikelompokkan per tema:</p>' +
              '<table><thead><tr><th>Tema / Program</th><th>Rp T</th></tr></thead><tbody>' +
              '<tr><td colspan="2"><b>Penguatan & proteksi daya beli</b></td></tr>' +
              '<tr><td>PKH</td><td>28,7</td></tr>' +
              '<tr><td>Kartu Sembako / BPNT</td><td>43,3</td></tr>' +
              '<tr><td>BLTS Kesra</td><td>29,9</td></tr>' +
              '<tr><td colspan="2"><b>Pelayanan publik</b></td></tr>' +
              '<tr><td>PIP / KIP-Kuliah / beasiswa</td><td>27,7</td></tr>' +
              '<tr><td>Bantuan Iuran PBI JKN</td><td>46,3</td></tr>' +
              '<tr><td>Cek Kesehatan Gratis (CKG) & TB, revitalisasi RS</td><td>6,5</td></tr>' +
              '<tr><td>Makan Bergizi Gratis (MBG)</td><td>51,5</td></tr>' +
              '<tr><td>Sekolah Rakyat & Sekolah Unggul Garuda</td><td>6,7</td></tr>' +
              '<tr><td>Renovasi/Revitalisasi Sekolah</td><td>18,9</td></tr>' +
              '<tr><td>Gaji/TPG/TPD Non-PNS</td><td>22,2</td></tr>' +
              '<tr><td colspan="2"><b>Infrastruktur publik & produktivitas</b></td></tr>' +
              '<tr><td>Preservasi Jalan & Jembatan</td><td>19,1</td></tr>' +
              '<tr><td>Perumahan</td><td>45,4</td></tr>' +
              '<tr><td>Bendungan, Irigasi & O&P Sarpras SDA</td><td>20,1</td></tr>' +
              '<tr><td colspan="2"><b>Stabilisasi harga & produksi</b></td></tr>' +
              '<tr><td>Subsidi/Kompensasi Energi</td><td>305,2</td></tr>' +
              '<tr><td>Subsidi Non-Energi (KUR, Pupuk)</td><td>96,4</td></tr>' +
              '<tr><td>Bulog & cadangan pangan</td><td>22,1</td></tr>' +
              '<tr><td><b>Total Program Prioritas</b></td><td><b>≈ 805,4</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Subsidi/kompensasi energi (Rp 305,2 T) sendiri adalah item terbesar — proteksi daya beli jauh melampaui program lain.</div>' } }
        ]
      },
      {
        heading: { en: 'Diagnosing budget health', id: 'Mendiagnosis kesehatan APBN' }, num: '4',
        cards: [
          { title: { en: 'Liquidity · vulnerability · sustainability', id: 'Likuiditas · vulnerabilitas · sustainabilitas' },
            html: { en: '<p>Three families of indicators judge whether the APBN is healthy:</p>' +
              '<table><thead><tr><th>Family</th><th>Key indicators</th></tr></thead><tbody>' +
              '<tr><td><b>Liquidity</b> (pay short-term obligations)</td><td>Current Budget Balance (CBB), SDA-to-short-term-external-debt, SiLPA.</td></tr>' +
              '<tr><td><b>Vulnerability</b> (debt-payment pressure)</td><td>Debt Service Ratio (DSR), Interest Ratio (IR), Debt-to-Income.</td></tr>' +
              '<tr><td><b>Sustainability</b> (long-run)</td><td>Primary balance, Debt-to-GDP, debt dynamics (r − g).</td></tr>' +
              '</tbody></table>',
              id: '<p>Tiga kelompok indikator menilai apakah APBN sehat:</p>' +
              '<table><thead><tr><th>Kelompok</th><th>Indikator utama</th></tr></thead><tbody>' +
              '<tr><td><b>Likuiditas</b> (membayar kewajiban jangka pendek)</td><td>Current Budget Balance (CBB), SDA terhadap utang luar negeri jangka pendek, SiLPA.</td></tr>' +
              '<tr><td><b>Vulnerabilitas</b> (tekanan bayar utang)</td><td>Debt Service Ratio (DSR), Interest Ratio (IR), Debt-to-Income.</td></tr>' +
              '<tr><td><b>Sustainabilitas</b> (jangka panjang)</td><td>Primary balance, Debt-to-GDP, dinamika utang (r − g).</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'The formulas', id: 'Rumusnya' },
            html: { en: '<div class="formula">$$ CBB = \\text{routine revenue} - \\text{routine spending} = (\\text{Pendapatan} - \\text{Hibah}) - (\\text{Belanja} - \\text{Belanja Modal}) $$</div>' +
              '<div class="formula">$$ DSR = \\frac{\\text{interest} + \\text{principal}}{\\text{Revenue}}, \\quad IR = \\frac{\\text{interest}}{\\text{Revenue}} $$</div>' +
              '<div class="formula">$$ \\text{Debt dynamics} = r - g \\quad(\\text{real interest} - \\text{real growth}) $$</div>' +
              '<p>Rules of thumb: primary balance and CBB — <b>higher/positive is better</b>; DSR, IR, debt ratios — <b>lower is better</b>.</p>',
              id: '<div class="formula">$$ CBB = \\text{routine revenue} - \\text{routine spending} = (\\text{Pendapatan} - \\text{Hibah}) - (\\text{Belanja} - \\text{Belanja Modal}) $$</div>' +
              '<div class="formula">$$ DSR = \\frac{\\text{interest} + \\text{principal}}{\\text{Revenue}}, \\quad IR = \\frac{\\text{interest}}{\\text{Revenue}} $$</div>' +
              '<div class="formula">$$ \\text{Debt dynamics} = r - g \\quad(\\text{real interest} - \\text{real growth}) $$</div>' +
              '<p>Aturan praktis: primary balance dan CBB — <b>makin tinggi/positif makin baik</b>; DSR, IR, rasio utang — <b>makin rendah makin baik</b>.</p>' } },
          { title: { en: 'Full indicator list with "good direction"', id: 'Daftar indikator lengkap & "arah baik"' },
            html: { en: '<p>The deck specifies every indicator, its formula, and which way is healthy:</p>' +
              '<table><thead><tr><th>Family / Indicator</th><th>Formula</th><th>Good direction</th></tr></thead><tbody>' +
              '<tr><td colspan="3"><b>LIQUIDITY</b> — meet short-term obligations on time</td></tr>' +
              '<tr><td>Current Budget Balance (CBB)</td><td>(Pendapatan − Hibah) − (Belanja − Belanja Modal)</td><td>Balance / positive better</td></tr>' +
              '<tr><td>Rasio Penerimaan SDA thd ULN Jk Pendek</td><td>(PNBP SDA + PPh Migas) ÷ ULN jatuh tempo &lt;1 thn</td><td>Higher = better</td></tr>' +
              '<tr><td>SiLPA</td><td>Defisit anggaran − Pembiayaan netto</td><td>Buffer (balance)</td></tr>' +
              '<tr><td colspan="3"><b>VULNERABILITY</b> — debt-payment pressure</td></tr>' +
              '<tr><td>Debt Service Ratio (DSR)</td><td>(Bunga + cicilan pokok) ÷ Pendapatan</td><td>Lower = better</td></tr>' +
              '<tr><td>Interest Ratio (IR)</td><td>Bunga ÷ Pendapatan</td><td>Lower = better</td></tr>' +
              '<tr><td>Debt-to-Income</td><td>Stok utang ÷ Pendapatan</td><td>Lower = better</td></tr>' +
              '<tr><td colspan="3"><b>SUSTAINABILITY</b> — long-run health</td></tr>' +
              '<tr><td>Keseimbangan Primer</td><td>(Pendapatan − (Belanja − bunga)) ÷ PDB</td><td>Higher/positive = better</td></tr>' +
              '<tr><td>Debt-to-GDP</td><td>Stok utang ÷ PDB</td><td>Lower = better</td></tr>' +
              '<tr><td>Debt Dynamics</td><td>r − g (real interest − real growth)</td><td>Lower = better</td></tr>' +
              '</tbody></table>',
              id: '<p>Slide kuliah merinci tiap indikator, rumusnya, dan arah sehatnya:</p>' +
              '<table><thead><tr><th>Kelompok / Indikator</th><th>Rumus</th><th>Arah baik</th></tr></thead><tbody>' +
              '<tr><td colspan="3"><b>LIKUIDITAS</b> — penuhi kewajiban jangka pendek tepat waktu</td></tr>' +
              '<tr><td>Current Budget Balance (CBB)</td><td>(Pendapatan − Hibah) − (Belanja − Belanja Modal)</td><td>Seimbang / positif lebih baik</td></tr>' +
              '<tr><td>Rasio Penerimaan SDA thd ULN Jk Pendek</td><td>(PNBP SDA + PPh Migas) ÷ ULN jatuh tempo &lt;1 thn</td><td>Makin tinggi makin baik</td></tr>' +
              '<tr><td>SiLPA</td><td>Defisit anggaran − Pembiayaan netto</td><td>Penyangga (seimbang)</td></tr>' +
              '<tr><td colspan="3"><b>VULNERABILITAS</b> — tekanan bayar utang</td></tr>' +
              '<tr><td>Debt Service Ratio (DSR)</td><td>(Bunga + cicilan pokok) ÷ Pendapatan</td><td>Makin rendah makin baik</td></tr>' +
              '<tr><td>Interest Ratio (IR)</td><td>Bunga ÷ Pendapatan</td><td>Makin rendah makin baik</td></tr>' +
              '<tr><td>Debt-to-Income</td><td>Stok utang ÷ Pendapatan</td><td>Makin rendah makin baik</td></tr>' +
              '<tr><td colspan="3"><b>SUSTAINABILITAS</b> — kesehatan jangka panjang</td></tr>' +
              '<tr><td>Keseimbangan Primer</td><td>(Pendapatan − (Belanja − bunga)) ÷ PDB</td><td>Makin tinggi/positif makin baik</td></tr>' +
              '<tr><td>Debt-to-GDP</td><td>Stok utang ÷ PDB</td><td>Makin rendah makin baik</td></tr>' +
              '<tr><td>Debt Dynamics</td><td>r − g (bunga riil − pertumbuhan riil)</td><td>Makin rendah makin baik</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'The Fiscal Rule: deficit ≤ 3% PDB, debt ≤ 60% PDB', id: 'Fiscal Rule: defisit ≤ 3% PDB, utang ≤ 60% PDB' },
            html: { en: '<p><b>UU 17/2003</b> on State Finances caps the deficit at <b>3% of GDP</b> and total borrowing at <b>60% of GDP</b>. Indonesia has been disciplined: deficit always &lt;3% except the Covid years 2020–2021, then a fast return to consolidation.</p>' +
              '<p>Debt-to-GDP history: ~88% after the 1997–98 AFC → down to ~25% by 2012 (commodity boom) → up again from 2015 (infrastructure) → ~39–40% post-Covid.</p>',
              id: '<p><b>UU 17/2003</b> tentang Keuangan Negara membatasi defisit maksimal <b>3% PDB</b> dan total pinjaman maksimal <b>60% PDB</b>. Indonesia disiplin: defisit selalu &lt;3% kecuali tahun Covid 2020–2021, lalu cepat kembali konsolidasi.</p>' +
              '<p>Sejarah rasio utang: ~88% pasca-AFC 1997–98 → turun ~25% pada 2012 (boom komoditas) → naik lagi sejak 2015 (infrastruktur) → ~39–40% pasca-Covid.</p>' } }
        ]
      },
      {
        heading: { en: 'Absorption pattern & efficiency', id: 'Pola penyerapan & efisiensi' }, num: '5',
        cards: [
          { title: { en: 'The Q4-heavy absorption problem', id: 'Penyerapan menumpuk di Q4' },
            html: { en: '<p>5-year average absorption: ~16% in Q1, ~39% by Q2, ~62% by Q3 — so ~<b>38% lands in Q4</b>. The fiscal stimulus to growth is therefore uneven across the year (G/GDP ~6% early, ~10% late). Quality, not just speed, is tracked via the <span class="key">IKPA</span> (Indikator Kinerja Pelaksanaan Anggaran) under a <b>value-for-money</b> lens.</p>',
              id: '<p>Rata-rata penyerapan 5 tahun: ~16% di Q1, ~39% hingga Q2, ~62% hingga Q3 — jadi ~<b>38% jatuh di Q4</b>. Stimulus fiskal terhadap pertumbuhan karenanya tidak merata sepanjang tahun (G/GDP ~6% di awal, ~10% di akhir). Kualitas, bukan hanya kecepatan, dipantau lewat <span class="key">IKPA</span> (Indikator Kinerja Pelaksanaan Anggaran) dengan lensa <b>value-for-money</b>.</p>' } },
          { title: { en: 'Cumulative absorption by quarter (5 years)', id: 'Penyerapan kumulatif per triwulan (5 tahun)' },
            html: { en: '<p>Cumulative realisation of Belanja Pemerintah Pusat (%) — the cliff is always Q4:</p>' +
              '<table><thead><tr><th>Cumulative %</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th></tr></thead><tbody>' +
              '<tr><td>Q1</td><td>17,9</td><td>13,7</td><td>15,1</td><td>17,2</td><td>15,3</td></tr>' +
              '<tr><td>Q2</td><td>40,7</td><td>38,1</td><td>38,5</td><td>40,2</td><td>37,3</td></tr>' +
              '<tr><td>Q3</td><td>64,7</td><td>59,1</td><td>60,7</td><td>65,0</td><td>58,9</td></tr>' +
              '<tr><td>Q4 (full year)</td><td>102,4</td><td>99,1</td><td>97,3</td><td>100,0</td><td>96,3</td></tr>' +
              '</tbody></table>' +
              '<p>The G-component contribution to GDP mirrors this: ~6% early-year, ~10% late-year — so fiscal stimulus is strongest in Q4 and weakest in Q1.</p>',
              id: '<p>Realisasi kumulatif Belanja Pemerintah Pusat (%) — tebingnya selalu di Q4:</p>' +
              '<table><thead><tr><th>Kumulatif %</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th></tr></thead><tbody>' +
              '<tr><td>Q1</td><td>17,9</td><td>13,7</td><td>15,1</td><td>17,2</td><td>15,3</td></tr>' +
              '<tr><td>Q2</td><td>40,7</td><td>38,1</td><td>38,5</td><td>40,2</td><td>37,3</td></tr>' +
              '<tr><td>Q3</td><td>64,7</td><td>59,1</td><td>60,7</td><td>65,0</td><td>58,9</td></tr>' +
              '<tr><td>Q4 (setahun)</td><td>102,4</td><td>99,1</td><td>97,3</td><td>100,0</td><td>96,3</td></tr>' +
              '</tbody></table>' +
              '<p>Kontribusi komponen G terhadap PDB mengikuti pola ini: ~6% awal tahun, ~10% akhir tahun — stimulus fiskal terkuat di Q4, terlemah di Q1.</p>' } },
          { title: { en: 'IKPA: absorption is not success', id: 'IKPA: penyerapan bukan keberhasilan' },
            html: { en: '<p>Spending fast is not the same as spending well. The <span class="key">IKPA</span> measures the quality of K/L budget execution across three dimensions: <b>quality of planning</b>, <b>quality of execution</b>, and <b>quality of results</b> — all under a <b>value-for-money</b> concept (spending better, not just spending more).</p>' +
              '<p>IKPA flags problems such as: activities off the plan, realisation not matching the RPD (disbursement plan), Q4-heavy absorption, output targets missed, non-compliant financial management, and technical/policy obstacles.</p>',
              id: '<p>Membelanjakan cepat tidak sama dengan membelanjakan baik. <span class="key">IKPA</span> mengukur kualitas pelaksanaan anggaran K/L pada tiga dimensi: <b>kualitas perencanaan</b>, <b>kualitas pelaksanaan</b>, dan <b>kualitas hasil</b> — semuanya dengan konsep <b>value-for-money</b> (spending better, bukan sekadar lebih banyak).</p>' +
              '<p>IKPA menandai masalah seperti: kegiatan menyimpang dari rencana, realisasi tak sesuai RPD (rencana penarikan dana), penyerapan menumpuk di Q4, target output tak tercapai, pengelolaan keuangan tak patuh, dan kendala teknis/kebijakan.</p>' } },
          { title: { en: 'Spending efficiency (Inpres 1/2025)', id: 'Efisiensi belanja (Inpres 1/2025)' },
            html: { en: '<p>"Let the managers manage": Menkeu = CFO, line ministers = COO/managers responsible for value-for-money. Efficiency drives recur when revenue is at risk (2016 cut of Rp 65T K/L + 68.8T TKD; <b>Automatic Adjustment</b> blocks ~5% of K/L budget as a buffer).</p>' +
              '<p><b>Inpres 1/2025</b>: President Prabowo ordered <b>Rp 306.1 T</b> efficiency (Rp 256.1T K/L + Rp 50T TKD). Crucially, it spared <b>personnel and bansos</b>, hitting mainly <b>goods and capital</b> (travel, ceremonies, seminars, studies, consultants). Freed funds redirected to priority programmes (MBG free meals, free health checks, school revitalisation).</p>' +
              '<div class="note">💡 Belanja Negara plays three roles at once: <b>development agent</b>, <b>shock absorber</b>, and <b>fiscal-sustainability</b> guardian.</div>',
              id: '<p>"Biarkan manajer mengelola": Menkeu = CFO, menteri teknis = COO/manajer yang bertanggung jawab atas value-for-money. Gelombang efisiensi berulang saat pendapatan terancam (pemotongan 2016 sebesar Rp 65T K/L + 68,8T TKD; <b>Automatic Adjustment</b> memblokir ~5% anggaran K/L sebagai penyangga).</p>' +
              '<p><b>Inpres 1/2025</b>: Presiden Prabowo memerintahkan efisiensi <b>Rp 306,1 T</b> (Rp 256,1T K/L + Rp 50T TKD). Penting, ini mengecualikan <b>belanja pegawai dan bansos</b>, terutama menyasar <b>belanja barang dan modal</b> (perjalanan, seremoni, seminar, kajian, konsultan). Dana yang dibebaskan dialihkan ke program prioritas (makan gratis MBG, cek kesehatan gratis, revitalisasi sekolah).</p>' +
              '<div class="note">💡 Belanja Negara memainkan tiga peran sekaligus: <b>agen pembangunan</b>, <b>peredam guncangan</b>, dan penjaga <b>keberlanjutan fiskal</b>.</div>' } },
          { title: { en: 'What gets cut, and the 2025 K/L journey', id: 'Apa yang dipotong, & perjalanan K/L 2025' },
            html: { en: '<p>Inpres 1/2025 rules: (1) <b>no cut</b> to Belanja Pegawai & Bansos; (2) cuts fall mainly on <b>Belanja Barang & Belanja Modal</b>; (3) targeted items include: ATK, ceremonies, meetings/seminars, studies & analysis, diklat/bimtek, honor & jasa profesi, printing/souvenirs, building/vehicle/equipment rental, app licences, consultants, government grants, maintenance, official travel, machinery, infrastructure. On pegawai: avoid negative ceilings, compute from the start; new K/L estimate efficient staffing (some prep CASN 2025).</p>' +
              '<p>The 2025 Belanja K/L journey shows efficiency then re-expansion for priorities:</p>' +
              '<table><thead><tr><th>Stage</th><th>Rp T</th></tr></thead><tbody>' +
              '<tr><td>APBN 2025</td><td>2.701,4</td></tr>' +
              '<tr><td>Inpres 1/2025 efficiency</td><td>−306,7</td></tr>' +
              '<tr><td>March relaxation of blocking (excl. pegawai & bansos)</td><td>+206,4</td></tr>' +
              '<tr><td>Lapsem (semester report)</td><td>2.663,4</td></tr>' +
              '<tr><td>Realisasi (sementara)</td><td><b>≈ 2.602,3</b></td></tr>' +
              '</tbody></table>' +
              '<p>The design stayed flexible to fund priorities (MBG, Sekolah Unggulan, free health checks, food security) and stimulus (electricity discount, extra Kartu Sembako, food aid, THR/Gaji-13, defence).</p>',
              id: '<p>Aturan Inpres 1/2025: (1) <b>tidak memotong</b> Belanja Pegawai & Bansos; (2) pemotongan terutama pada <b>Belanja Barang & Belanja Modal</b>; (3) item yang disisir antara lain: ATK, seremonial, rapat/seminar, kajian & analisis, diklat/bimtek, honor & jasa profesi, percetakan/souvenir, sewa gedung/kendaraan/peralatan, lisensi aplikasi, konsultan, bantuan pemerintah, pemeliharaan, perjalanan dinas, peralatan/mesin, infrastruktur. Soal pegawai: hindari pagu negatif, hitung sejak awal; K/L baru estimasi staf efisien (sebagian siapkan CASN 2025).</p>' +
              '<p>Perjalanan Belanja K/L 2025 menunjukkan efisiensi lalu ekspansi ulang untuk prioritas:</p>' +
              '<table><thead><tr><th>Tahap</th><th>Rp T</th></tr></thead><tbody>' +
              '<tr><td>APBN 2025</td><td>2.701,4</td></tr>' +
              '<tr><td>Efisiensi Inpres 1/2025</td><td>−306,7</td></tr>' +
              '<tr><td>Relaksasi blokir Maret (kecuali pegawai & bansos)</td><td>+206,4</td></tr>' +
              '<tr><td>Lapsem (laporan semester)</td><td>2.663,4</td></tr>' +
              '<tr><td>Realisasi (sementara)</td><td><b>≈ 2.602,3</b></td></tr>' +
              '</tbody></table>' +
              '<p>Desainnya tetap fleksibel untuk membiayai prioritas (MBG, Sekolah Unggulan, cek kesehatan gratis, ketahanan pangan) dan stimulus (diskon listrik, tambahan Kartu Sembako, bantuan pangan, THR/Gaji-13, pertahanan).</p>' } }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'Current Budget Balance (fiscal-space gauge)', id: 'Current Budget Balance' },
          html: { en: '<div class="formula">$$ CBB = (\\text{Pendapatan} - \\text{Hibah}) - (\\text{Belanja Negara} - \\text{Belanja Modal}) $$</div>' +
            '<p>Can routine revenue cover routine spending without borrowing? Positive = healthier.</p>',
            id: '<div class="formula">$$ CBB = (\\text{Pendapatan} - \\text{Hibah}) - (\\text{Belanja Negara} - \\text{Belanja Modal}) $$</div>' +
            '<p>Apakah pendapatan rutin bisa menutup belanja rutin tanpa berutang? Positif = lebih sehat.</p>' } },
        { title: { en: 'Debt-payment pressure', id: 'Tekanan bayar utang' },
          html: { en: '<div class="formula">$$ DSR = \\frac{\\text{bunga} + \\text{cicilan pokok}}{\\text{Pendapatan}}, \\qquad IR = \\frac{\\text{bunga}}{\\text{Pendapatan}} $$</div>' +
            '<p>Lower is better — measures how much revenue is eaten by debt service.</p>',
            id: '<div class="formula">$$ DSR = \\frac{\\text{bunga} + \\text{cicilan pokok}}{\\text{Pendapatan}}, \\qquad IR = \\frac{\\text{bunga}}{\\text{Pendapatan}} $$</div>' +
            '<p>Makin rendah makin baik — mengukur seberapa besar pendapatan tersedot untuk bayar utang.</p>' } },
        { title: { en: 'Sustainability', id: 'Sustainabilitas' },
          html: { en: '<div class="formula">$$ \\text{Primary balance} = \\frac{\\text{Pendapatan} - (\\text{Belanja} - \\text{bunga})}{GDP}, \\qquad \\text{Debt dynamics} = r - g $$</div>',
            id: '<div class="formula">$$ \\text{Primary balance} = \\frac{\\text{Pendapatan} - (\\text{Belanja} - \\text{bunga})}{GDP}, \\qquad \\text{Debt dynamics} = r - g $$</div>' } },
        { title: { en: 'Mandatory floors', id: 'Batas wajib' },
          html: { en: '<div class="formula">$$ \\text{Education} \\ge 20\\%\\ \\text{Belanja Negara}, \\qquad \\text{Health} \\approx 5\\%\\ (\\text{commitment, mandate repealed 2023}) $$</div>',
            id: '<div class="formula">$$ \\text{Pendidikan} \\ge 20\\%\\ \\text{Belanja Negara}, \\qquad \\text{Kesehatan} \\approx 5\\%\\ (\\text{komitmen, mandat dicabut 2023}) $$</div>' } }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Budget health: the debt-dynamics test', id: 'Kesehatan APBN: uji dinamika utang' },
          html: { en: '<p>Sustainability lives or dies on the primary balance and the gap between the real interest rate and growth. Set a primary deficit and push r above g: the debt ratio climbs through the 60% rule. Run a primary surplus or get g > r and it settles. This is the quantitative side of the diagnostics table.</p>',
            id: '<p>Sustainabilitas hidup atau mati di primary balance dan selisih antara suku bunga riil dan pertumbuhan. Tetapkan primary deficit dan dorong r di atas g: rasio utang menanjak melewati aturan 60%. Jalankan primary surplus atau buat g > r dan rasio itu mereda. Inilah sisi kuantitatif dari tabel diagnostik.</p>' },
          chartId: 'debt-dynamics' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'The same Rp of spending can be classified three ways. A teacher’s salary paid by the Ministry of Education — give its classification by function, type and presentation.', id: 'Gaji guru di Kemendikbud — klasifikasikan menurut fungsi, jenis, dan penyajian.' },
        answer: [
          { en: '<b>By function</b>: Education (function 10), regardless of which ministry pays it.', id: '<b>Fungsi</b>: Pendidikan.' },
          { en: '<b>By type</b>: Belanja Pegawai (personnel).', id: '<b>Jenis</b>: Belanja Pegawai.' },
          { en: '<b>By presentation</b>: Belanja Pemerintah Pusat → Belanja K/L (or via Transfer ke Daerah if the teacher is a regional employee).', id: '<b>Penyajian</b>: Belanja Pemerintah Pusat → Belanja K/L (atau TKD jika guru daerah).' }
        ], tip: { en: 'Function = purpose; Type = economic nature; Presentation = who spends it.', id: 'Fungsi = tujuan; Jenis = sifat ekonomi; Penyajian = siapa membelanjakan.' } },
      { type: 'scenario', q: { en: 'Inpres 1/2025 cut Rp 306 T but explicitly spared personnel and social assistance. Why target goods and capital instead, and what is the risk?', id: 'Inpres 1/2025 memangkas Rp 306 T tetapi tidak menyentuh gaji & bansos. Mengapa menyasar belanja barang & modal, dan apa risikonya?' },
        answer: [
          { en: 'Personnel cannot legally fall and bansos protects vulnerable households (shock-absorber role), so cutting them is politically and socially costly.', id: 'Gaji tak boleh turun dan bansos melindungi rumah tangga rentan, jadi memangkasnya mahal secara sosial.' },
          { en: 'Goods/capital (travel, seminars, consultants, ceremonies) are more discretionary and quicker to trim without blocking core services.', id: 'Belanja barang/modal lebih diskresioner dan cepat dipangkas.' },
          { en: 'Risk: cutting <b>capital</b> spending lowers the investment multiplier and future productive capacity — short-run saving at a long-run growth cost.', id: 'Risiko: memangkas belanja modal menurunkan multiplier investasi dan kapasitas produktif masa depan.' }
        ], tip: { en: 'Capital spending has the highest growth multiplier — cutting it is the costliest in the long run.', id: 'Belanja modal multiplier tertinggi — paling mahal jangka panjang.' } },
      { type: 'quant', q: { en: 'Routine revenue Rp 3,000 T, routine spending Rp 3,100 T. Is the Current Budget Balance positive, and what does it imply?', id: 'Pendapatan rutin Rp 3.000 T, belanja rutin Rp 3.100 T. Apakah CBB positif?' },
        answer: [
          { en: 'CBB = 3,000 − 3,100 = <b>−100 T (negative)</b>.', id: 'CBB = 3.000 − 3.100 = <b>−100 T (negatif)</b>.' },
          { en: 'Routine revenue cannot even cover routine spending — the country must borrow just to fund day-to-day operations, not only investment. A clear liquidity/fiscal-space warning.', id: 'Pendapatan rutin tak menutup belanja rutin — harus berutang untuk operasional, bukan hanya investasi. Sinyal ruang fiskal sempit.' }
        ], tip: { en: 'Negative CBB = borrowing for routine, not just capital — a red flag.', id: 'CBB negatif = berutang untuk rutin — bendera merah.' } },
      { type: 'quant', q: { en: 'From the 2025 APBN I-account: Pendapatan 3.005,1; Belanja 3.621,3. Compute the surplus/(deficit) and verify the % of PDB given the deficit is −2,53% of GDP. What plugs it?', id: 'Dari I-account APBN 2025: Pendapatan 3.005,1; Belanja 3.621,3. Hitung surplus/(defisit) dan apa yang menutupnya.' },
        answer: [
          { en: 'Deficit = 3.005,1 − 3.621,3 = <b>−616,2 T</b> (line D).', id: 'Defisit = 3.005,1 − 3.621,3 = <b>−616,2 T</b> (baris D).' },
          { en: 'At −2,53% of PDB, implied GDP ≈ 616,2 ÷ 0,0253 ≈ Rp 24.355 T. Still inside the 3%-of-GDP fiscal rule (UU 17/2003).', id: 'Pada −2,53% PDB, PDB ≈ 616,2 ÷ 0,0253 ≈ Rp 24.355 T. Masih dalam fiscal rule 3% PDB (UU 17/2003).' },
          { en: '<b>E. Pembiayaan Anggaran = +616,2 T</b> exactly fills the gap.', id: '<b>E. Pembiayaan Anggaran = +616,2 T</b> persis menutup celah.' }
        ], tip: { en: 'A − B = D, and E = −D. The I-account always balances.', id: 'A − B = D, dan E = −D. I-account selalu seimbang.' } },
      { type: 'concept', q: { en: 'Why does the 20%-of-Belanja education floor rise automatically when the deficit grows?', id: 'Mengapa batas pendidikan 20%-dari-Belanja otomatis naik saat defisit membesar?' },
        answer: [
          { en: 'The 20% is computed on <b>Belanja Negara</b>, and Belanja = Pendapatan + Deficit. A bigger deficit means bigger Belanja, so 20% of a larger base is larger.', id: '20% dihitung atas <b>Belanja Negara</b>, dan Belanja = Pendapatan + Defisit. Defisit lebih besar berarti Belanja lebih besar, jadi 20% dari basis lebih besar pun lebih besar.' },
          { en: 'Example: Belanja 3.700→4.000 raises the education floor 740→800, even with revenue fixed at 3.000. If it were 20% of Pendapatan, it would not move.', id: 'Contoh: Belanja 3.700→4.000 menaikkan batas pendidikan 740→800, walau pendapatan tetap 3.000. Jika 20% dari Pendapatan, batas itu tak bergerak.' }
        ], tip: { en: 'Belanja includes the deficit; revenue does not. Base choice matters.', id: 'Belanja mencakup defisit; pendapatan tidak. Pilihan basis menentukan.' } },
      { type: 'concept', q: { en: 'Classify a Makan Bergizi Gratis (MBG) allocation three ways. Which TYPE is it — and why is that a trap?', id: 'Klasifikasikan alokasi Makan Bergizi Gratis (MBG) dengan tiga cara. Termasuk JENIS apa — dan mengapa menjebak?' },
        answer: [
          { en: '<b>By function</b>: Social Protection / Health-Education area. <b>By presentation</b>: Belanja Pemerintah Pusat → Belanja K/L.', id: '<b>Fungsi</b>: Perlindungan Sosial / area Kesehatan-Pendidikan. <b>Penyajian</b>: Belanja Pemerintah Pusat → Belanja K/L.' },
          { en: '<b>By type</b>: <b>Belanja Barang</b> — goods delivered to society — <i>not</i> Bansos. That is the trap: MBG, BSU and food aid sit under Belanja Barang, while PBI JKN/PKH/PIP are Bansos.', id: '<b>Jenis</b>: <b>Belanja Barang</b> — barang diserahkan ke masyarakat — <i>bukan</i> Bansos. Itu jebakannya: MBG, BSU, bantuan pangan ada di Belanja Barang, sedangkan PBI JKN/PKH/PIP adalah Bansos.' }
        ], tip: { en: 'Goods handed to society = Belanja Barang; cash/benefit transfers to households = Bansos.', id: 'Barang diserahkan ke masyarakat = Belanja Barang; transfer tunai/manfaat ke rumah tangga = Bansos.' } },
      { type: 'scenario', q: { en: 'A primary deficit of Rp 63,3 T sits alongside a total deficit of Rp 616,2 T (2025). What does the gap tell you, and which sustainability indicator does the primary balance feed?', id: 'Keseimbangan primer −63,3 T berdampingan dengan defisit total −616,2 T (2025). Apa makna selisihnya, dan indikator sustainabilitas mana yang dipasok primary balance?' },
        answer: [
          { en: 'The gap (616,2 − 63,3 ≈ 553 T) is roughly the interest bill: the primary balance strips out interest, so most of the headline deficit is debt service, not new programmes.', id: 'Selisih (616,2 − 63,3 ≈ 553 T) kira-kira adalah beban bunga: keseimbangan primer mengeluarkan bunga, jadi sebagian besar defisit utama adalah cicilan bunga, bukan program baru.' },
          { en: 'A near-zero/positive primary balance is needed for sustainability: it feeds the <b>debt dynamics</b> condition — debt/GDP stabilises if the primary surplus offsets (r − g).', id: 'Keseimbangan primer ~nol/positif diperlukan untuk sustainabilitas: ini memasok kondisi <b>dinamika utang</b> — rasio utang/PDB stabil bila surplus primer mengimbangi (r − g).' }
        ], tip: { en: 'Total deficit ≈ primary deficit + interest. Watching the primary balance isolates policy from legacy debt cost.', id: 'Defisit total ≈ defisit primer + bunga. Memantau keseimbangan primer memisahkan kebijakan dari biaya utang warisan.' } }
    ]
  };
})();
