/* ESP Unit 1 — Fiscal policy & the State Budget (APBN). Source: Kuliah 8. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u1 = {
    id: 'u1',
    label: { en: 'Unit 1', id: 'Unit 1' },
    title: { en: 'Fiscal Policy & the State Budget (APBN)', id: 'Kebijakan Fiskal & APBN' },
    subtitle: { en: 'Why the public sector exists · the three fiscal functions · the budget cycle · fiscal rules', id: 'Mengapa sektor publik ada · tiga fungsi fiskal · siklus anggaran · aturan fiskal' },

    notes: [
      {
        heading: { en: 'Why a public sector?', id: 'Mengapa sektor publik?' }, num: '1',
        cards: [
          { title: { en: 'The state corrects market failure', id: 'Negara mengoreksi kegagalan pasar' },
            html: { en: '<p>The market mechanism does <b>not always</b> deliver an efficient allocation (Stiglitz & Rosengard). Under <span class="key">cateris paribus</span> failures the government steps in to:</p>' +
              '<ul><li><b>Fix market failures</b> — correct <span class="key">externalities</span> (negative → over-production; positive → under-production) and provide <span class="key">public goods</span>.</li>' +
              '<li><b>Fix inequality</b> — the market cannot handle injustice; the state redistributes income and wealth.</li>' +
              '<li><b>Maintain stability</b> — lower the cost of the business cycle and respond to shocks.</li></ul>' +
              '<div class="note">💡 Indonesia’s constitutional basis: <b>UUD 1945 Pembukaan</b> (memajukan kesejahteraan umum), <b>Pasal 23</b> (APBN set by law each year) and <b>Pasal 33</b> (economy as a shared endeavour).</div>',
              id: '<p>Mekanisme pasar <b>tidak selalu</b> menghasilkan alokasi yang efisien (Stiglitz & Rosengard). Pada kondisi kegagalan <span class="key">cateris paribus</span>, pemerintah turun tangan untuk:</p>' +
              '<ul><li><b>Mengatasi kegagalan pasar</b> — mengoreksi <span class="key">eksternalitas</span> (negatif → produksi berlebih; positif → produksi kurang) dan menyediakan <span class="key">barang publik</span>.</li>' +
              '<li><b>Mengatasi ketimpangan</b> — pasar tidak mampu menangani ketidakadilan; negara meredistribusi pendapatan dan kekayaan.</li>' +
              '<li><b>Menjaga stabilitas</b> — menekan biaya siklus bisnis dan merespons guncangan.</li></ul>' +
              '<div class="note">💡 Dasar konstitusional Indonesia: <b>UUD 1945 Pembukaan</b> (memajukan kesejahteraan umum), <b>Pasal 23</b> (APBN ditetapkan dengan undang-undang setiap tahun) dan <b>Pasal 33</b> (perekonomian sebagai usaha bersama).</div>' } },
          { title: { en: 'Keynesian turn: the government must manage cycles', id: 'Pergeseran Keynesian' },
            html: { en: '<p>Before the Great Depression, neoclassical economics dominated (Alfred Marshall): the focus was on <b>individual decisions and individual markets</b> (labour, capital, goods) — supply–demand, marginal utility, cost of production — each with its own optimisation. The market was assumed to be <b>self-correcting</b> (prices move to equilibrium; unemployment is temporary).</p>' +
              '<p>The October 1929 stock-market crash (excessive speculation, including debt to buy stocks) and the 1929–39 Depression showed <b>prolonged mass unemployment</b>, no automatic adjustment, and an economy stuck in disequilibrium for a long time. The market did <i>not</i> self-correct.</p>' +
              '<p><span class="key">Keynes</span> (<i>The General Theory of Employment, Interest and Money</i>, Feb 1936): the government must manage economic fluctuations. The budget becomes a <b>countercyclical</b> tool — cool an overheating economy, boost a contracting one.</p>',
              id: '<p>Sebelum Depresi Besar, ekonomi neoklasik dominan (Alfred Marshall): fokusnya pada <b>keputusan individu dan pasar individu</b> (tenaga kerja, kapital, barang) — penawaran–permintaan, utilitas marjinal, biaya produksi — masing-masing dengan optimisasinya sendiri. Pasar diasumsikan <b>self-correcting</b> (harga bergerak ke ekuilibrium; pengangguran bersifat sementara).</p>' +
              '<p>Keruntuhan bursa Oktober 1929 (spekulasi berlebih, termasuk utang untuk membeli saham) dan Depresi 1929–39 menunjukkan <b>pengangguran massal berkepanjangan</b>, tanpa penyesuaian otomatis, dan ekonomi terjebak dalam disekuilibrium untuk waktu lama. Pasar <i>tidak</i> mengoreksi diri sendiri.</p>' +
              '<p><span class="key">Keynes</span> (<i>The General Theory of Employment, Interest and Money</i>, Feb 1936): pemerintah harus mengelola fluktuasi ekonomi. Anggaran menjadi instrumen <b>countercyclical</b> — mendinginkan ekonomi yang overheating, mendorong ekonomi yang sedang kontraksi.</p>' } },
          { title: { en: 'What is the public sector? (uang rakyat)', id: 'Apa itu sektor publik? (uang rakyat)' },
            html: { en: '<p>The <span class="key">public sector</span> is the part of the economy made up of government entities, responsible for providing services and managing resources for citizens, businesses and other organisations. It is funded by <b>taxes, grants, borrowing and other government-controlled sources</b> — in short, resources collected from the people (<i>uang rakyat</i>).</p>' +
              '<div class="note">💡 Constitutional anchor (Pasal 33 UUD 1945): the economy is a shared endeavour on a family principle; strategic branches of production and natural resources (land, water, mineral wealth) are controlled by the state for the greatest prosperity of the people.</div>',
              id: '<p><span class="key">Sektor publik</span> adalah bagian perekonomian yang terdiri dari entitas pemerintah, bertanggung jawab menyediakan layanan dan mengelola sumber daya untuk warga, dunia usaha, dan organisasi lain. Ia dibiayai oleh <b>pajak, hibah, utang, dan sumber lain yang dikendalikan pemerintah</b> — singkatnya, sumber daya yang dikumpulkan dari rakyat (<i>uang rakyat</i>).</p>' +
              '<div class="note">💡 Dasar konstitusional (Pasal 33 UUD 1945): perekonomian adalah usaha bersama berasas kekeluargaan; cabang produksi strategis dan kekayaan alam (bumi, air, kekayaan alam) dikuasai negara untuk sebesar-besar kemakmuran rakyat.</div>' } }
        ]
      },
      {
        heading: { en: 'Indonesia 2045 & global dynamics', id: 'Indonesia 2045 & dinamika global' }, num: '2',
        cards: [
          { title: { en: 'Vision 2045 and the middle-income trap', id: 'Visi 2045 & jebakan pendapatan menengah' },
            html: { en: '<p>The state’s long-run goal is to escape the <span class="key">middle-income trap</span> and become a top-5 economy by 2045. Indonesia’s GNI per capita must cross the high-income threshold of about <b>US$4,806</b>; this requires sustained <b>6–8% growth p.a.</b></p>' +
              '<table><thead><tr><th>Indicator</th><th>2023</th><th>2045 target</th></tr></thead><tbody>' +
              '<tr><td>Population (million)</td><td>278</td><td>324</td></tr>' +
              '<tr><td>Productive-age (% of pop.)</td><td>69%</td><td>65%</td></tr>' +
              '<tr><td>Middle-income class (% of pop.)</td><td>17%</td><td>70%</td></tr>' +
              '<tr><td>Urban population (% of pop.)</td><td>58%</td><td>73%</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Goals: biggest-5 economy in the world, lower poverty &amp; inequality, towards net-zero emissions.</div>',
              id: '<p>Tujuan jangka panjang negara adalah keluar dari <span class="key">jebakan pendapatan menengah</span> dan menjadi 5 ekonomi terbesar dunia pada 2045. GNI per kapita Indonesia harus melewati ambang berpendapatan tinggi sekitar <b>US$4.806</b>; ini memerlukan pertumbuhan <b>6–8% per tahun</b> secara berkelanjutan.</p>' +
              '<table><thead><tr><th>Indikator</th><th>2023</th><th>Target 2045</th></tr></thead><tbody>' +
              '<tr><td>Populasi (juta)</td><td>278</td><td>324</td></tr>' +
              '<tr><td>Usia produktif (% pop.)</td><td>69%</td><td>65%</td></tr>' +
              '<tr><td>Kelas menengah (% pop.)</td><td>17%</td><td>70%</td></tr>' +
              '<tr><td>Penduduk perkotaan (% pop.)</td><td>58%</td><td>73%</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Sasaran: 5 ekonomi terbesar dunia, kemiskinan &amp; ketimpangan lebih rendah, menuju emisi nol bersih.</div>' } },
          { title: { en: 'The demographic-dividend window', id: 'Jendela bonus demografi' },
            html: { en: '<p>The productive-age share peaks now (~69%) and <b>declines to ~65% by 2045</b> — the <span class="key">demographic-dividend window</span> is closing. The race is to lift the middle-income class from 17% to 70% <i>before</i> the workforce ages. This is exactly why escaping the middle-income trap is time-bound: miss the window and Indonesia could grow old before it grows rich.</p>',
              id: '<p>Pangsa usia produktif memuncak sekarang (~69%) dan <b>menurun ke ~65% pada 2045</b> — <span class="key">jendela bonus demografi</span> sedang menutup. Tantangannya adalah menaikkan kelas menengah dari 17% ke 70% <i>sebelum</i> angkatan kerja menua. Inilah sebabnya keluar dari jebakan pendapatan menengah terikat waktu: jika jendela terlewat, Indonesia bisa menua sebelum menjadi kaya.</p>' } },
          { title: { en: 'Global dynamics: geopolitics erodes multilateralism', id: 'Dinamika global: geopolitik mengikis multilateralisme' },
            html: { en: '<p>The world is shifting from a <b>multilateral, rules-based</b> order toward <b>unilateral, active state intervention</b>. As global multilateral institutions weaken, the role of the State rises.</p>' +
              '<table><thead><tr><th>Multilateral approach</th><th>Unilateral / state intervention</th><th>Institutions weaken</th></tr></thead><tbody>' +
              '<tr><td>Rules-based trading system</td><td>Geo-strategy, protectionism</td><td>WB, IMF, G7 all shaky</td></tr>' +
              '<tr><td>Multilateral cooperation lowers</td><td>Unilateralism; bilateral deal-making</td><td>BRICS increases</td></tr>' +
              '<tr><td>Regional trade blocks</td><td>Friendshoring, nearshoring</td><td>Rising disputes in WTO</td></tr>' +
              '<tr><td>Inward-looking policies spread</td><td>Unilateral action &amp; retaliation</td><td>No consensus on global policy</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Takeaway: protectionism increases, the role of the State increases in economic and social life, and both upside &amp; downside risks pop up.</div>',
              id: '<p>Dunia bergeser dari tatanan <b>multilateral berbasis aturan</b> menuju <b>intervensi negara yang unilateral dan aktif</b>. Saat institusi multilateral global melemah, peran Negara meningkat.</p>' +
              '<table><thead><tr><th>Pendekatan multilateral</th><th>Unilateral / intervensi negara</th><th>Institusi melemah</th></tr></thead><tbody>' +
              '<tr><td>Sistem perdagangan berbasis aturan</td><td>Geo-strategi, proteksionisme</td><td>WB, IMF, G7 semua goyah</td></tr>' +
              '<tr><td>Kerja sama multilateral menurun</td><td>Unilateralisme; deal bilateral</td><td>BRICS meningkat</td></tr>' +
              '<tr><td>Blok perdagangan regional</td><td>Friendshoring, nearshoring</td><td>Sengketa di WTO meningkat</td></tr>' +
              '<tr><td>Kebijakan inward-looking menyebar</td><td>Aksi unilateral &amp; retaliasi</td><td>Tidak ada konsensus kebijakan global</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Inti: proteksionisme meningkat, peran Negara meningkat dalam kehidupan ekonomi dan sosial, dan risiko upside &amp; downside bermunculan.</div>' } },
          { title: { en: 'Stability → Growth → Prosperity', id: 'Stabilitas → Pertumbuhan → Kemakmuran' },
            html: { en: '<p>Toward prosperity while maintaining <b>multidimensional macro stability</b>. The framework has three layers: <span class="key">STABILITY</span> keeps the economy going, <span class="key">GROWTH</span> expands economic capacity, and <span class="key">PROSPERITY</span> ensures development benefits reach all.</p>' +
              '<table><thead><tr><th>Layer</th><th>What it covers</th></tr></thead><tbody>' +
              '<tr><td><b>Stability</b></td><td>Inflation &amp; purchasing power; fluctuations of growth &amp; exchange rate; stability of the financial system.</td></tr>' +
              '<tr><td><b>Growth</b></td><td>Investment &amp; infrastructure development; rising productivity &amp; competitiveness; structural transformation &amp; human capital.</td></tr>' +
              '<tr><td><b>Prosperity</b></td><td>Employment &amp; decent income; reduction in poverty &amp; inequality; access to basic services &amp; social protection.</td></tr>' +
              '</tbody></table>',
              id: '<p>Menuju kemakmuran sambil menjaga <b>stabilitas makro multidimensi</b>. Kerangka ini punya tiga lapis: <span class="key">STABILITAS</span> menjaga ekonomi tetap berjalan, <span class="key">PERTUMBUHAN</span> memperluas kapasitas ekonomi, dan <span class="key">KEMAKMURAN</span> memastikan manfaat pembangunan menjangkau semua.</p>' +
              '<table><thead><tr><th>Lapis</th><th>Cakupan</th></tr></thead><tbody>' +
              '<tr><td><b>Stabilitas</b></td><td>Inflasi &amp; daya beli; fluktuasi pertumbuhan &amp; nilai tukar; stabilitas sistem keuangan.</td></tr>' +
              '<tr><td><b>Pertumbuhan</b></td><td>Investasi &amp; pembangunan infrastruktur; produktivitas &amp; daya saing meningkat; transformasi struktural &amp; SDM.</td></tr>' +
              '<tr><td><b>Kemakmuran</b></td><td>Lapangan kerja &amp; pendapatan layak; pengurangan kemiskinan &amp; ketimpangan; akses layanan dasar &amp; perlindungan sosial.</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'Welfare indicators: unemployment & poverty', id: 'Indikator kesejahteraan: pengangguran & kemiskinan' },
            html: { en: '<p>Growth has held up while the <span class="key">open-unemployment rate (TPT)</span> and the <span class="key">poverty rate</span> kept improving over 2015–2025. Latest: <b>TPT 4.74% (Nov 2025)</b> and <b>poverty 8.25% (Sep 2025)</b>.</p>' +
              '<table><thead><tr><th>Year</th><th>TPT (%)</th><th>Poverty rate (%)</th></tr></thead><tbody>' +
              '<tr><td>2015</td><td>6.18</td><td>11.22</td></tr>' +
              '<tr><td>2016</td><td>5.61</td><td>10.86</td></tr>' +
              '<tr><td>2017</td><td>5.50</td><td>10.64</td></tr>' +
              '<tr><td>2018</td><td>5.30</td><td>9.82</td></tr>' +
              '<tr><td>2019</td><td>5.23</td><td>9.41</td></tr>' +
              '<tr><td>2020</td><td>7.07</td><td>9.78</td></tr>' +
              '<tr><td>2021</td><td>6.49</td><td>10.14</td></tr>' +
              '<tr><td>2022</td><td>5.86</td><td>9.54</td></tr>' +
              '<tr><td>2023</td><td>5.32</td><td>9.36</td></tr>' +
              '<tr><td>2024</td><td>4.91</td><td>9.03</td></tr>' +
              '<tr><td>2025</td><td>4.85 (Aug); 4.74 (Nov)</td><td>8.47 (Mar); 8.25 (Sep)</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Both spiked in 2020–21 (COVID) then resumed their downward trend. Source: BPS.</div>',
              id: '<p>Pertumbuhan tetap terjaga sementara <span class="key">tingkat pengangguran terbuka (TPT)</span> dan <span class="key">tingkat kemiskinan</span> terus membaik sepanjang 2015–2025. Terbaru: <b>TPT 4,74% (Nov 2025)</b> dan <b>kemiskinan 8,25% (Sep 2025)</b>.</p>' +
              '<table><thead><tr><th>Tahun</th><th>TPT (%)</th><th>Tingkat kemiskinan (%)</th></tr></thead><tbody>' +
              '<tr><td>2015</td><td>6,18</td><td>11,22</td></tr>' +
              '<tr><td>2016</td><td>5,61</td><td>10,86</td></tr>' +
              '<tr><td>2017</td><td>5,50</td><td>10,64</td></tr>' +
              '<tr><td>2018</td><td>5,30</td><td>9,82</td></tr>' +
              '<tr><td>2019</td><td>5,23</td><td>9,41</td></tr>' +
              '<tr><td>2020</td><td>7,07</td><td>9,78</td></tr>' +
              '<tr><td>2021</td><td>6,49</td><td>10,14</td></tr>' +
              '<tr><td>2022</td><td>5,86</td><td>9,54</td></tr>' +
              '<tr><td>2023</td><td>5,32</td><td>9,36</td></tr>' +
              '<tr><td>2024</td><td>4,91</td><td>9,03</td></tr>' +
              '<tr><td>2025</td><td>4,85 (Agu); 4,74 (Nov)</td><td>8,47 (Mar); 8,25 (Sep)</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Keduanya melonjak pada 2020–21 (COVID) lalu kembali menurun. Sumber: BPS.</div>' } },
          { title: { en: 'The five development agendas', id: 'Lima agenda pembangunan' },
            html: { en: '<p>Fiscal policy serves five development agendas:</p>' +
              '<ul><li><b>Human Capital</b> — education, health, social protection for productivity enhancement.</li>' +
              '<li><b>Infrastructure</b> — better access to public services, food security, energy security.</li>' +
              '<li><b>Institution</b> — effective bureaucracy giving certainty and improving the trust of businesses and other agents.</li>' +
              '<li><b>Digital Transformation</b> — digitising the economy, improving efficiency and trust.</li>' +
              '<li><b>Energy Transition</b> — towards clean energy in a just and sustainable way.</li></ul>',
              id: '<p>Kebijakan fiskal melayani lima agenda pembangunan:</p>' +
              '<ul><li><b>Sumber Daya Manusia</b> — pendidikan, kesehatan, perlindungan sosial untuk peningkatan produktivitas.</li>' +
              '<li><b>Infrastruktur</b> — akses lebih baik ke layanan publik, ketahanan pangan, ketahanan energi.</li>' +
              '<li><b>Kelembagaan</b> — birokrasi efektif yang memberi kepastian dan meningkatkan kepercayaan dunia usaha dan agen lain.</li>' +
              '<li><b>Transformasi Digital</b> — mendigitalkan ekonomi, meningkatkan efisiensi dan kepercayaan.</li>' +
              '<li><b>Transisi Energi</b> — menuju energi bersih secara adil dan berkelanjutan.</li></ul>' } }
        ]
      },
      {
        heading: { en: 'The three functions of fiscal policy', id: 'Tiga fungsi kebijakan fiskal' }, num: '3',
        cards: [
          { title: { en: 'Allocation · Distribution · Stabilization', id: 'Alokasi · Distribusi · Stabilisasi' },
            html: { en: '<p>Fiscal policy directs the economy through <b>revenue, spending and financing</b>. Musgrave’s three functions:</p>' +
              '<table><thead><tr><th>Function</th><th>What it does</th></tr></thead><tbody>' +
              '<tr><td><b>Allocation</b></td><td>Quality, productive spending — infrastructure, human capital, public services.</td></tr>' +
              '<tr><td><b>Distribution</b></td><td>Fair & efficient taxes; well-targeted social assistance; fiscal decentralization.</td></tr>' +
              '<tr><td><b>Stabilization</b></td><td>Managed deficit & debt, prudent financing, fiscal buffers, disaster-risk mitigation.</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 The budget is the government’s countercyclical tool: keep output near its long-run real-GDP trend.</div>',
              id: '<p>Kebijakan fiskal mengarahkan perekonomian melalui <b>pendapatan, belanja dan pembiayaan</b>. Tiga fungsi Musgrave:</p>' +
              '<table><thead><tr><th>Fungsi</th><th>Yang dilakukan</th></tr></thead><tbody>' +
              '<tr><td><b>Alokasi</b></td><td>Belanja berkualitas dan produktif — infrastruktur, sumber daya manusia, layanan publik.</td></tr>' +
              '<tr><td><b>Distribusi</b></td><td>Pajak yang adil & efisien; bantuan sosial tepat sasaran; desentralisasi fiskal.</td></tr>' +
              '<tr><td><b>Stabilisasi</b></td><td>Pengelolaan defisit & utang, pembiayaan pruden, fiscal buffer, mitigasi risiko bencana.</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Anggaran adalah instrumen countercyclical pemerintah: menjaga output tetap dekat dengan tren PDB riil jangka panjangnya.</div>' } },
          { title: { en: 'APBN and GDP: the G in Y = C + I + G + (X−M)', id: 'APBN dan PDB' },
            html: { en: '<p>Government consumption <b>G</b> is a direct component of GDP. Beyond G, the budget also shapes <b>C</b> (transfers, subsidies → household consumption) and <b>I</b> (capital spending, investment financing → gross fixed capital formation, PMTB).</p>' +
              '<div class="formula">$$ Y = C + I + G + (X - M) $$</div>' +
              '<p>So APBN contributes to GDP through several channels, not just the G line.</p>',
              id: '<p>Konsumsi pemerintah <b>G</b> adalah komponen langsung PDB. Selain G, anggaran juga memengaruhi <b>C</b> (transfer, subsidi → konsumsi rumah tangga) dan <b>I</b> (belanja modal, pembiayaan investasi → pembentukan modal tetap bruto, PMTB).</p>' +
              '<div class="formula">$$ Y = C + I + G + (X - M) $$</div>' +
              '<p>Jadi APBN berkontribusi pada PDB melalui beberapa jalur, bukan hanya lewat jalur G.</p>' } },
          { title: { en: 'Countercyclical: staying near the long-run real-GDP trend', id: 'Countercyclical: dekat tren PDB riil jangka panjang' },
            html: { en: '<p>An economy goes through <b>cycles</b>: boom (expansion) and bust (contraction), often because agents pursue self-interest (utility &amp; profit maximisation). The budget is the government’s countercyclical tool to keep output <b>NOT TOO FAR</b> from the long-run real-GDP trend (which should keep rising):</p>' +
              '<ul><li>When the economy expands too fast → the budget should <b>cool down</b> the expansionary instinct.</li>' +
              '<li>When the economy contracts → the budget should provide a <b>boost</b> with expansionary fiscal policy.</li></ul>' +
              '<div class="note">💡 Indonesia’s growth has run above the global average but stays vulnerable to external pressures (AFC 1998–99, GFC 2008–09, COVID-19 recession). Post-1998 structural reforms let Indonesia recover more strongly in later crises.</div>',
              id: '<p>Ekonomi melalui <b>siklus</b>: boom (ekspansi) dan bust (kontraksi), sering karena agen mengejar kepentingan sendiri (maksimisasi utilitas &amp; laba). Anggaran adalah alat countercyclical pemerintah untuk menjaga output <b>TIDAK TERLALU JAUH</b> dari tren PDB riil jangka panjang (yang seharusnya terus naik):</p>' +
              '<ul><li>Saat ekonomi tumbuh terlalu cepat → anggaran harus <b>mendinginkan</b> dorongan ekspansif.</li>' +
              '<li>Saat ekonomi kontraksi → anggaran harus memberi <b>dorongan</b> dengan kebijakan fiskal ekspansif.</li></ul>' +
              '<div class="note">💡 Pertumbuhan Indonesia di atas rata-rata global tetapi tetap rentan tekanan eksternal (AFC 1998–99, GFC 2008–09, resesi COVID-19). Reformasi struktural pasca-1998 membuat Indonesia pulih lebih kuat pada krisis berikutnya.</div>' } }
        ]
      },
      {
        heading: { en: 'APBN from time to time', id: 'APBN dari masa ke masa' }, num: '4',
        cards: [
          { title: { en: 'From the first budget (1950/51) to the I-account', id: 'Dari APBN pertama (1950/51) ke I-account' },
            html: { en: '<p>Indonesia’s <b>first budget</b> covered two fiscal years <b>1950 and 1951</b>, submitted together to the first Parliament inaugurated on 15 February 1950.</p>' +
              '<table><thead><tr><th>Era</th><th>Format</th><th>Key features</th></tr></thead><tbody>' +
              '<tr><td>FY 1969/70–1999/2000</td><td><b>T-account</b></td><td>Balances Revenues vs Expenditures. Revenues = Domestic + Development. <b>Development Revenue</b> comes from foreign Loans &amp; Grants: <i>Program</i> loans/grants (foods, non-foods, other) and <i>Project</i> loans/grants (physical projects).</td></tr>' +
              '<tr><td>Since 2001</td><td><b>I-account</b></td><td>Unified budget; fiscal year starts 1 January.</td></tr>' +
              '</tbody></table>',
              id: '<p><b>APBN pertama</b> Indonesia mencakup dua tahun anggaran <b>1950 dan 1951</b>, disampaikan bersamaan ke Parlemen pertama yang dilantik 15 Februari 1950.</p>' +
              '<table><thead><tr><th>Era</th><th>Format</th><th>Ciri utama</th></tr></thead><tbody>' +
              '<tr><td>TA 1969/70–1999/2000</td><td><b>T-account</b></td><td>Menyeimbangkan Pendapatan vs Belanja. Pendapatan = Dalam Negeri + Pembangunan. <b>Pendapatan Pembangunan</b> berasal dari Pinjaman &amp; Hibah luar negeri: pinjaman/hibah <i>Program</i> (pangan, non-pangan, lainnya) dan <i>Proyek</i> (proyek fisik).</td></tr>' +
              '<tr><td>Sejak 2001</td><td><b>I-account</b></td><td>Anggaran terpadu; tahun anggaran mulai 1 Januari.</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'The 2003–2004 state-finance reforms', id: 'Reformasi keuangan negara 2003–2004' },
            html: { en: '<p>Three laws reshaped Indonesian state finance:</p>' +
              '<ul><li><b>UU 17/2003</b> — Keuangan Negara (State Finance).</li>' +
              '<li><b>UU 1/2004</b> — Perbendaharaan Negara (State Treasury).</li>' +
              '<li><b>UU 15/2004</b> — Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara (Audit).</li></ul>' +
              '<p>Fundamental changes: the budget is <b>no longer split into routine vs development</b> spending; a <span class="key">unified budget</span> is introduced; and Indonesia adopts the IMF’s <span class="key">Government Finance Statistics (GFS)</span>.</p>',
              id: '<p>Tiga undang-undang membentuk ulang keuangan negara Indonesia:</p>' +
              '<ul><li><b>UU 17/2003</b> — Keuangan Negara.</li>' +
              '<li><b>UU 1/2004</b> — Perbendaharaan Negara.</li>' +
              '<li><b>UU 15/2004</b> — Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara.</li></ul>' +
              '<p>Perubahan mendasar: anggaran <b>tidak lagi dipisah menjadi belanja rutin vs pembangunan</b>; diperkenalkan <span class="key">anggaran terpadu</span> (unified budget); dan Indonesia mengadopsi <span class="key">Government Finance Statistics (GFS)</span> IMF.</p>' } },
          { title: { en: 'Inside the APBN: revenue, expenditure, financing', id: 'Di dalam APBN: pendapatan, belanja, pembiayaan' },
            html: { en: '<p>Built on macro assumptions (global &amp; domestic setting) and aligned with the long- and medium-term development plans (RPJP, RPJMN) plus the President’s vision:</p>' +
              '<table><thead><tr><th>Block</th><th>Components</th></tr></thead><tbody>' +
              '<tr><td><b>Revenue</b></td><td>Tax (PPN, PPh, PPnBM, PBB); Customs (Bea Masuk, Bea Keluar, Cukai); Non-tax (PNBP from K/L &amp; SDA); Grants.</td></tr>' +
              '<tr><td><b>Expenditure</b></td><td>Central Government Spending — ministerial (wages, goods/services, capital, social assistance) and non-ministerial (subsidies, debt service); plus Transfers to Regions.</td></tr>' +
              '<tr><td><b>Financing</b></td><td>Debt: Surat Berharga Negara (SBN), domestic loans (PDN), foreign loans (PLN). Investment financing: capital injections (BUMN, BLU), contributions to international organisations, Education SWF, other reserves.</td></tr>' +
              '</tbody></table>',
              id: '<p>Dibangun atas asumsi makro (global &amp; domestik) dan selaras dengan rencana pembangunan jangka panjang &amp; menengah (RPJP, RPJMN) plus visi Presiden:</p>' +
              '<table><thead><tr><th>Blok</th><th>Komponen</th></tr></thead><tbody>' +
              '<tr><td><b>Pendapatan</b></td><td>Pajak (PPN, PPh, PPnBM, PBB); Kepabeanan (Bea Masuk, Bea Keluar, Cukai); PNBP (K/L &amp; SDA); Hibah.</td></tr>' +
              '<tr><td><b>Belanja</b></td><td>Belanja Pemerintah Pusat — K/L (gaji, barang/jasa, modal, bansos) dan non-K/L (subsidi, bunga utang); plus Transfer ke Daerah.</td></tr>' +
              '<tr><td><b>Pembiayaan</b></td><td>Utang: Surat Berharga Negara (SBN), Pinjaman Dalam Negeri (PDN), Pinjaman Luar Negeri (PLN). Pembiayaan investasi: penyertaan modal (BUMN, BLU), kontribusi ke organisasi internasional, SWF Pendidikan, cadangan lain.</td></tr>' +
              '</tbody></table>' } }
        ]
      },
      {
        heading: { en: 'A credible, healthy budget', id: 'Anggaran yang kredibel & sehat' }, num: '5',
        cards: [
          { title: { en: 'Credibility = good governance + good health', id: 'Kredibilitas = tata kelola + kesehatan' },
            html: { en: '<p>The State influences economic conditions to achieve the people’s objectives. This needs a <b>credible public sector</b> — a good budget is implemented with <b>good governance</b> (planning, budgeting, implementation, accountability) and <b>good health</b> (the fiscal rule). A credible, trustworthy budget gives <b>clear signals to economic agents</b>, improving allocative efficiency.</p>' +
              '<div class="note">💡 The government acts through regulations: Undang-Undang (with DPR), Peraturan Pemerintah, Peraturan/Keputusan Presiden, Peraturan/Keputusan Menteri, and operational rules — to implement a budget that finances operations, public services, social assistance &amp; protection, and infrastructure.</div>',
              id: '<p>Negara memengaruhi kondisi ekonomi untuk mencapai tujuan rakyat. Ini butuh <b>sektor publik yang kredibel</b> — anggaran yang baik dijalankan dengan <b>tata kelola yang baik</b> (perencanaan, penganggaran, pelaksanaan, akuntabilitas) dan <b>kesehatan yang baik</b> (aturan fiskal). Anggaran yang kredibel dan tepercaya memberi <b>sinyal jelas bagi pelaku ekonomi</b>, meningkatkan efisiensi alokatif.</p>' +
              '<div class="note">💡 Pemerintah bertindak melalui regulasi: Undang-Undang (bersama DPR), Peraturan Pemerintah, Peraturan/Keputusan Presiden, Peraturan/Keputusan Menteri, dan aturan operasional — untuk menjalankan anggaran yang membiayai operasi, layanan publik, bansos &amp; perlindungan sosial, dan infrastruktur.</div>' } },
          { title: { en: 'The APBN cycle: year T starts in year T−1', id: 'Siklus APBN' },
            html: { en: '<p>APBN is a <b>political consensus / product</b>: proposed by the Government, approved by Parliament (DPR). The cycle for year T begins in T−1, and in the early months of each year the Government is juggling budgets for <b>three consecutive years</b> at once.</p>' +
              '<ol><li><b>Jan–Feb</b> — policy directions &amp; national priorities; design &amp; strategy of fiscal policy; concepts of <span class="key">RKP</span> and <span class="key">KEM-PPKF</span>.</li>' +
              '<li><b>Feb–May</b> — resource envelope &amp; indicative budget.</li>' +
              '<li><b>Mid-May</b> — submit RKP &amp; KEM-PPKF.</li>' +
              '<li><b>End-June</b> — conclude the <i>Pembicaraan Pendahuluan</i> (discussion with Parliament) → output = macro-assumption ranges (<span class="key">ADEM</span>) + indicative budget by ministry.</li>' +
              '<li><b>June–Aug</b> — preparation of RAPBN budget allocation.</li>' +
              '<li><b>August</b> — RAPBN submitted to Parliament.</li>' +
              '<li><b>End-October</b> — UU APBN approved (Government–Parliament conclusion).</li>' +
              '<li><b>November</b> — Presidential Regulation (Perpres) on budget details; pre-contract activities can begin.</li>' +
              '<li><b>December</b> — DIPA (Daftar Isian Pelaksanaan Anggaran) handed over; <b>1 January</b> implementation.</li></ol>' +
              '<div class="note">💡 If DPR rejects the proposed budget, the government runs <b>last year’s budget</b> (Pasal 23(1)). RKP = Rencana Kerja Pemerintah; KEM-PPKF = Kerangka Ekonomi Makro &amp; Pokok-Pokok Kebijakan Fiskal.</div>',
              id: '<p>APBN adalah <b>konsensus / produk politik</b>: diusulkan oleh Pemerintah, disetujui oleh Parlemen (DPR). Siklus untuk tahun T dimulai pada T−1, dan di bulan-bulan awal tiap tahun Pemerintah mengelola anggaran untuk <b>tiga tahun berturut-turut</b> sekaligus.</p>' +
              '<ol><li><b>Jan–Feb</b> — arah kebijakan &amp; prioritas nasional; desain &amp; strategi kebijakan fiskal; konsep <span class="key">RKP</span> dan <span class="key">KEM-PPKF</span>.</li>' +
              '<li><b>Feb–Mei</b> — resource envelope &amp; anggaran indikatif.</li>' +
              '<li><b>Pertengahan Mei</b> — penyampaian RKP &amp; KEM-PPKF.</li>' +
              '<li><b>Akhir Juni</b> — penyelesaian <i>Pembicaraan Pendahuluan</i> (pembahasan dengan Parlemen) → output = rentang asumsi makro (<span class="key">ADEM</span>) + anggaran indikatif per K/L.</li>' +
              '<li><b>Juni–Agu</b> — penyusunan alokasi anggaran RAPBN.</li>' +
              '<li><b>Agustus</b> — RAPBN disampaikan ke Parlemen.</li>' +
              '<li><b>Akhir Oktober</b> — UU APBN disetujui (kesimpulan Pemerintah–Parlemen).</li>' +
              '<li><b>November</b> — Peraturan Presiden (Perpres) tentang rincian anggaran; kegiatan pra-kontrak dapat dimulai.</li>' +
              '<li><b>Desember</b> — DIPA (Daftar Isian Pelaksanaan Anggaran) diserahkan; <b>1 Januari</b> pelaksanaan.</li></ol>' +
              '<div class="note">💡 Jika DPR menolak anggaran yang diusulkan, pemerintah menjalankan <b>anggaran tahun lalu</b> (Pasal 23(1)). RKP = Rencana Kerja Pemerintah; KEM-PPKF = Kerangka Ekonomi Makro &amp; Pokok-Pokok Kebijakan Fiskal.</div>' } },
          { title: { en: 'Annual fiscal-policy themes (KEM-PPKF) 2018→2026', id: 'Tema kebijakan fiskal tahunan (KEM-PPKF) 2018→2026' },
            html: { en: '<p>The KEM-PPKF sets each year’s fiscal-policy <b>theme</b>, discussed with Parliament in the <i>Pembicaraan Pendahuluan</i>:</p>' +
              '<table><thead><tr><th>Year</th><th>Theme</th></tr></thead><tbody>' +
              '<tr><td>2018</td><td>Pemantapan Pengelolaan Fiskal untuk Mengakselerasi Pertumbuhan Ekonomi yang Berkeadilan</td></tr>' +
              '<tr><td>2019</td><td>APBN untuk Mendorong Investasi dan Daya Saing</td></tr>' +
              '<tr><td>2020</td><td>APBN untuk Akselerasi Daya Saing melalui Inovasi dan Penguatan Kualitas SDM</td></tr>' +
              '<tr><td>2021</td><td>Percepatan Pemulihan Ekonomi dan Penguatan Reformasi</td></tr>' +
              '<tr><td>2022</td><td>Pemulihan Ekonomi dan Reformasi Struktural</td></tr>' +
              '<tr><td>2023</td><td>Peningkatan Produktivitas untuk Transformasi Ekonomi yang Inklusif dan Berkelanjutan</td></tr>' +
              '<tr><td>2024</td><td>Mempercepat Transformasi Ekonomi yang Inklusif dan Berkelanjutan</td></tr>' +
              '<tr><td>2025</td><td>Akselerasi Pertumbuhan Ekonomi yang Inklusif dan Berkelanjutan</td></tr>' +
              '<tr><td><b>2026</b></td><td><b>Kedaulatan Pangan, Energi, dan Ekonomi</b></td></tr>' +
              '</tbody></table>',
              id: '<p>KEM-PPKF menetapkan <b>tema</b> kebijakan fiskal tiap tahun, dibahas dengan Parlemen dalam <i>Pembicaraan Pendahuluan</i>:</p>' +
              '<table><thead><tr><th>Tahun</th><th>Tema</th></tr></thead><tbody>' +
              '<tr><td>2018</td><td>Pemantapan Pengelolaan Fiskal untuk Mengakselerasi Pertumbuhan Ekonomi yang Berkeadilan</td></tr>' +
              '<tr><td>2019</td><td>APBN untuk Mendorong Investasi dan Daya Saing</td></tr>' +
              '<tr><td>2020</td><td>APBN untuk Akselerasi Daya Saing melalui Inovasi dan Penguatan Kualitas SDM</td></tr>' +
              '<tr><td>2021</td><td>Percepatan Pemulihan Ekonomi dan Penguatan Reformasi</td></tr>' +
              '<tr><td>2022</td><td>Pemulihan Ekonomi dan Reformasi Struktural</td></tr>' +
              '<tr><td>2023</td><td>Peningkatan Produktivitas untuk Transformasi Ekonomi yang Inklusif dan Berkelanjutan</td></tr>' +
              '<tr><td>2024</td><td>Mempercepat Transformasi Ekonomi yang Inklusif dan Berkelanjutan</td></tr>' +
              '<tr><td>2025</td><td>Akselerasi Pertumbuhan Ekonomi yang Inklusif dan Berkelanjutan</td></tr>' +
              '<tr><td><b>2026</b></td><td><b>Kedaulatan Pangan, Energi, dan Ekonomi</b></td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'Implementation & reporting: APBN KiTa, LKPP, BPK', id: 'Pelaksanaan & pelaporan: APBN KiTa, LKPP, BPK' },
            html: { en: '<p>The budget year runs <b>1 January – 31 December</b>. Reporting happens at two cadences:</p>' +
              '<ul><li><b>Monthly</b> — the APBN press conference <span class="key">APBN KiTa</span> (Kinerja &amp; Fakta).</li>' +
              '<li><b>Year-end</b> — the <span class="key">LKPP</span> (Laporan Keuangan Pemerintah Pusat), the basis for the budget audit by the Supreme Auditor <b>BPK</b>.</li></ul>' +
              '<p>The LKPP comprises <b>seven reports</b>:</p>' +
              '<ol><li>Laporan Realisasi Anggaran</li><li>Laporan Perubahan SAL</li><li>Laporan Arus Kas</li>' +
              '<li>Laporan Operasional</li><li>Laporan Perubahan Ekuitas</li><li>Neraca</li><li>Catatan atas Laporan Keuangan (CaLK)</li></ol>',
              id: '<p>Tahun anggaran berjalan <b>1 Januari – 31 Desember</b>. Pelaporan terjadi pada dua irama:</p>' +
              '<ul><li><b>Bulanan</b> — konferensi pers APBN <span class="key">APBN KiTa</span> (Kinerja &amp; Fakta).</li>' +
              '<li><b>Akhir tahun</b> — <span class="key">LKPP</span> (Laporan Keuangan Pemerintah Pusat), dasar audit anggaran oleh Badan Pemeriksa Keuangan <b>BPK</b>.</li></ul>' +
              '<p>LKPP terdiri dari <b>tujuh laporan</b>:</p>' +
              '<ol><li>Laporan Realisasi Anggaran</li><li>Laporan Perubahan SAL</li><li>Laporan Arus Kas</li>' +
              '<li>Laporan Operasional</li><li>Laporan Perubahan Ekuitas</li><li>Neraca</li><li>Catatan atas Laporan Keuangan (CaLK)</li></ol>' } },
          { title: { en: 'I-account, GFS and the audit opinion', id: 'I-account, GFS & opini audit' },
            html: { en: '<p>Since 2001 the APBN uses an <b>I-account</b> (unified budget; FY = Jan 1–Dec 31), after the 2003–04 state-finance reforms (UU 17/2003, 1/2004, 15/2004) and adoption of IMF <span class="key">GFS</span>. Year-end reporting = <span class="key">LKPP</span>, audited by <b>BPK</b>.</p>' +
              '<table><thead><tr><th>Period</th><th>BPK audit opinion</th></tr></thead><tbody>' +
              '<tr><td>2004–2008</td><td>Disclaimer (TMP — Tidak Memberikan Pendapat)</td></tr>' +
              '<tr><td>2009–2015</td><td>Qualified (WDP — Wajar Dengan Pengecualian)</td></tr>' +
              '<tr><td><b>2016–2024</b></td><td><b>Unqualified (WTP — Wajar Tanpa Pengecualian)</b></td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 The opinion improved because the 2003–04 reforms (unified budget, GFS, accrual accounting via LKPP) built the systems and accountability needed for clean books — a direct payoff of better governance.</div>',
              id: '<p>Sejak 2001 APBN menggunakan <b>I-account</b> (anggaran terpadu; TA = 1 Jan–31 Des), setelah reformasi keuangan negara 2003–04 (UU 17/2003, 1/2004, 15/2004) dan adopsi <span class="key">GFS</span> IMF. Pelaporan akhir tahun = <span class="key">LKPP</span>, diaudit oleh <b>BPK</b>.</p>' +
              '<table><thead><tr><th>Periode</th><th>Opini audit BPK</th></tr></thead><tbody>' +
              '<tr><td>2004–2008</td><td>Disclaimer (TMP — Tidak Memberikan Pendapat)</td></tr>' +
              '<tr><td>2009–2015</td><td>WDP (Wajar Dengan Pengecualian)</td></tr>' +
              '<tr><td><b>2016–2024</b></td><td><b>WTP (Wajar Tanpa Pengecualian)</b></td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Opini membaik karena reformasi 2003–04 (anggaran terpadu, GFS, akuntansi akrual lewat LKPP) membangun sistem dan akuntabilitas untuk pembukuan yang bersih — hasil langsung tata kelola yang lebih baik.</div>' } }
        ]
      },
      {
        heading: { en: 'Fiscal rules & challenges', id: 'Aturan & tantangan fiskal' }, num: '6',
        cards: [
          { title: { en: 'What a fiscal rule is', id: 'Apa itu aturan fiskal' },
            html: { en: '<p>A <span class="key">fiscal rule</span> is a long-lasting constraint on fiscal policy through numerical limits on budget aggregates — it contains the pressure to overspend in good times and protects debt sustainability. Four types:</p>' +
              '<ul><li><b>Budget-balance rules</b> (deficit ceiling)</li><li><b>Debt rules</b> (debt/GDP ceiling)</li>' +
              '<li><b>Expenditure rules</b> (max spending)</li><li><b>Revenue rules</b> (tax ratio target)</li></ul>' +
              '<div class="note">💡 <b>Indonesia (UU 17/2003 Pasal 12):</b> deficit ≤ <b>3% of GDP</b>, total debt ≤ <b>60% of GDP</b>. Indonesia stayed under 3% every year except the COVID years 2020–21, then consolidated quickly.</div>',
              id: '<p><span class="key">Aturan fiskal</span> adalah batasan jangka panjang atas kebijakan fiskal melalui batas numerik pada agregat anggaran — ia menahan tekanan untuk membelanjakan berlebih di masa baik dan menjaga keberlanjutan utang. Empat jenis:</p>' +
              '<ul><li><b>Aturan keseimbangan anggaran</b> (plafon defisit)</li><li><b>Aturan utang</b> (plafon utang/PDB)</li>' +
              '<li><b>Aturan belanja</b> (belanja maksimum)</li><li><b>Aturan pendapatan</b> (target tax ratio)</li></ul>' +
              '<div class="note">💡 <b>Indonesia (UU 17/2003 Pasal 12):</b> defisit ≤ <b>3% PDB</b>, total utang ≤ <b>60% PDB</b>. Indonesia tetap di bawah 3% setiap tahun kecuali pada tahun COVID 2020–21, lalu melakukan konsolidasi dengan cepat.</div>' } },
          { title: { en: 'Limited fiscal space', id: 'Ruang fiskal terbatas' },
            html: { en: '<p>Mandatory/earmarked spending squeezes flexibility: <b>education ≥ 20% APBN</b> (UUD 1945 Pasal 31(4)), health <b>5%</b> (no longer mandated since 2024 but kept as commitment), <b>DAU ≥ 20–26%</b> of net domestic revenue, Dana Desa <b>10%</b> of transfers. Add rising debt service, low tax ratio and Q3–Q4-heavy spending → <b>limited fiscal space</b>.</p>' +
              '<div class="tip">📝 Exam framing: more mandatory spending = less room to respond to shocks. The "20% of <i>Belanja</i> Negara" education rule even rises automatically when the deficit (debt) rises, because Belanja includes the deficit.</div>',
              id: '<p>Belanja wajib/earmarked menekan fleksibilitas: <b>pendidikan ≥ 20% APBN</b> (UUD 1945 Pasal 31(4)), kesehatan <b>5%</b> (tidak lagi diwajibkan sejak 2024 tetapi dipertahankan sebagai komitmen), <b>DAU ≥ 20–26%</b> dari pendapatan dalam negeri neto, Dana Desa <b>10%</b> dari transfer. Tambah beban bunga utang yang meningkat, tax ratio rendah dan belanja yang menumpuk di Q3–Q4 → <b>ruang fiskal terbatas</b>.</p>' +
              '<div class="tip">📝 Bingkai ujian: semakin banyak belanja wajib = semakin sedikit ruang untuk merespons guncangan. Aturan pendidikan "20% dari <i>Belanja</i> Negara" bahkan naik otomatis ketika defisit (utang) naik, karena Belanja mencakup defisit.</div>' } },
          { title: { en: 'Mandatory spending: the earmarks in detail', id: 'Belanja wajib: rincian earmark' },
            html: { en: '<table><thead><tr><th>Earmark</th><th>Floor</th><th>Legal basis</th></tr></thead><tbody>' +
              '<tr><td>Education budget</td><td>≥ 20% of APBN</td><td>UUD 1945 (Pasal 31)</td></tr>' +
              '<tr><td>Health budget</td><td>5% of APBN*</td><td>*No longer mandated since 2024, kept as a fiscal commitment</td></tr>' +
              '<tr><td>DAU (general allocation grant)</td><td>≥ 20% (up to ~26%) of net domestic revenue</td><td>UU 33/2004</td></tr>' +
              '<tr><td>Dana Desa (village fund)</td><td>10% of Transfers to Regions</td><td>UU Desa</td></tr>' +
              '</tbody></table>' +
              '<p>Together with rising debt service, low tax ratio, budget inefficiencies and a Q3–Q4-heavy spending pattern, these earmarks shrink <b>discretionary</b> spending and leave <b>limited fiscal space</b>. Tools to push back: Public Expenditure Reviews and stronger spending quality.</p>',
              id: '<table><thead><tr><th>Earmark</th><th>Batas bawah</th><th>Dasar hukum</th></tr></thead><tbody>' +
              '<tr><td>Anggaran pendidikan</td><td>≥ 20% APBN</td><td>UUD 1945 (Pasal 31)</td></tr>' +
              '<tr><td>Anggaran kesehatan</td><td>5% APBN*</td><td>*Tidak lagi diwajibkan sejak 2024, dipertahankan sebagai komitmen fiskal</td></tr>' +
              '<tr><td>DAU (Dana Alokasi Umum)</td><td>≥ 20% (hingga ~26%) dari pendapatan dalam negeri neto</td><td>UU 33/2004</td></tr>' +
              '<tr><td>Dana Desa</td><td>10% dari Transfer ke Daerah</td><td>UU Desa</td></tr>' +
              '</tbody></table>' +
              '<p>Bersama beban bunga utang yang naik, tax ratio rendah, inefisiensi anggaran, dan pola belanja menumpuk di Q3–Q4, earmark ini menekan belanja <b>diskresioner</b> dan menyisakan <b>ruang fiskal terbatas</b>. Alat untuk melawannya: Public Expenditure Review dan kualitas belanja yang lebih baik.</p>' } },
          { title: { en: 'Debt-to-GDP history & international comparison', id: 'Sejarah utang/PDB & perbandingan internasional' },
            html: { en: '<p>Indonesia’s debt ratio is a story of discipline:</p>' +
              '<ul><li><b>Post-AFC:</b> jumped to ~88% of GDP.</li>' +
              '<li><b>2012:</b> down to the ~25% level (fiscal discipline + commodity booms).</li>' +
              '<li><b>Since 2015:</b> back up with infrastructure spending.</li>' +
              '<li><b>Now:</b> ~39–40% of GDP after the COVID-19 pandemic.</li></ul>' +
              '<p>Internationally Indonesia is <b>low</b> on both debt and deficit. Selected 2024 debt/GDP (%): Indonesia <b>40.46</b>, Vietnam 32, Korea 53.4, Germany 64.4, Thailand 64.9, India 81.4, US 125.1, Japan 229.6. On 2025 deficit/GDP (%): Japan −0.9, Indonesia <b>−2.9</b>, Malaysia −3.6, US −3.8, India −7.1, China −7.3, Brazil −8.4.</p>' +
              '<div class="note">💡 Indonesia stayed under the 3% deficit ceiling every year except COVID 2020–21, then quickly returned to consolidation. Source: Trading Economics, IMF.</div>',
              id: '<p>Rasio utang Indonesia adalah kisah disiplin:</p>' +
              '<ul><li><b>Pasca-AFC:</b> melonjak ke ~88% PDB.</li>' +
              '<li><b>2012:</b> turun ke level ~25% (disiplin fiskal + boom komoditas).</li>' +
              '<li><b>Sejak 2015:</b> naik lagi karena belanja infrastruktur.</li>' +
              '<li><b>Kini:</b> ~39–40% PDB pasca-pandemi COVID-19.</li></ul>' +
              '<p>Secara internasional Indonesia <b>rendah</b> baik utang maupun defisit. Beberapa utang/PDB 2024 (%): Indonesia <b>40,46</b>, Vietnam 32, Korsel 53,4, Jerman 64,4, Thailand 64,9, India 81,4, AS 125,1, Jepang 229,6. Defisit/PDB 2025 (%): Jepang −0,9, Indonesia <b>−2,9</b>, Malaysia −3,6, AS −3,8, India −7,1, Tiongkok −7,3, Brasil −8,4.</p>' +
              '<div class="note">💡 Indonesia tetap di bawah plafon defisit 3% tiap tahun kecuali COVID 2020–21, lalu cepat kembali konsolidasi. Sumber: Trading Economics, IMF.</div>' } }
        ]
      },
      {
        heading: { en: 'The new macroeconomic-management framework', id: 'Kerangka pengelolaan makro baru' }, num: '7',
        cards: [
          { title: { en: 'Three engines: Fiscal Policy + Danantara + Monetary Policy', id: 'Tiga mesin: Fiskal + Danantara + Moneter' },
            html: { en: '<p>The new framework pursues the macro objectives — <b>high growth, welfare &amp; equity, national stability &amp; resilience</b> — through three coordinated engines:</p>' +
              '<table><thead><tr><th>Engine</th><th>Role</th><th>2026 outlays</th></tr></thead><tbody>' +
              '<tr><td><b>Fiscal Policy</b></td><td>Catalyst &amp; countercyclical: growth-oriented flagship programs, targeted social protection, enabling the business sector, optimised revenue, fiscal discipline.</td><td><b>IDR 3,842.7 T</b></td></tr>' +
              '<tr><td><b>Danantara</b></td><td>National growth driver via SOEs &amp; investment management — strategic investment <i>outside</i> the state budget, generating sustainable commercial returns, catalysing the private sector.</td><td><b>IDR 500–700 T</b> (~IDR 448 T from DIM)</td></tr>' +
              '<tr><td><b>Monetary Policy (BI)</b></td><td>Supports growth while maintaining stability; stays independent while working closely with Government.</td><td>—</td></tr>' +
              '</tbody></table>',
              id: '<p>Kerangka baru mengejar tujuan makro — <b>pertumbuhan tinggi, kesejahteraan &amp; pemerataan, stabilitas &amp; ketahanan nasional</b> — lewat tiga mesin yang terkoordinasi:</p>' +
              '<table><thead><tr><th>Mesin</th><th>Peran</th><th>Outlay 2026</th></tr></thead><tbody>' +
              '<tr><td><b>Kebijakan Fiskal</b></td><td>Katalis &amp; countercyclical: program unggulan berorientasi pertumbuhan, perlindungan sosial tepat sasaran, memberdayakan dunia usaha, optimalisasi pendapatan, disiplin fiskal.</td><td><b>IDR 3.842,7 T</b></td></tr>' +
              '<tr><td><b>Danantara</b></td><td>Penggerak pertumbuhan via BUMN &amp; pengelolaan investasi — investasi strategis <i>di luar</i> APBN, menghasilkan imbal hasil komersial berkelanjutan, mengatalisis sektor swasta.</td><td><b>IDR 500–700 T</b> (~IDR 448 T dari DIM)</td></tr>' +
              '<tr><td><b>Kebijakan Moneter (BI)</b></td><td>Mendukung pertumbuhan sambil menjaga stabilitas; tetap independen sambil bekerja erat dengan Pemerintah.</td><td>—</td></tr>' +
              '</tbody></table>' } },
          { title: { en: 'Danantara: strategic investment institution', id: 'Danantara: lembaga investasi strategis' },
            html: { en: '<p><span class="key">Danantara</span> is an <b>independent, profit-oriented</b> institution: it optimises investments, strengthens state-asset governance, and leverages private-sector participation. Its defining traits:</p>' +
              '<ul><li><b>Independent "separate" entity</b> — own budget, profit-loss responsibility, risk management.</li>' +
              '<li><b>Profitable projects only</b> — bankable, competitive IRR, with tangible economic impact.</li>' +
              '<li><b>Private-sector synergy</b> — commercial partnerships to scale high-impact projects.</li>' +
              '<li><b>Synergy with Government</b> — supports national priority programs.</li></ul>' +
              '<p>Project examples: <b>waste-to-energy</b>, <b>Red-White Cooperatives</b>, ACWA Power, Hajj Village, aluminium smelter, alumina/bio-aviation-fuel refinery, natural-resource downstreaming. Government support can include capital injection, bank loans, transfers to villages (zero credit risk), and price subsidies for viable tariffs.</p>' +
              '<div class="tip">📝 Why "outside the budget"? Danantara takes commercial, bankable risk that the APBN should not — keeping the fiscal rule intact while still pushing national priorities.</div>',
              id: '<p><span class="key">Danantara</span> adalah lembaga <b>independen dan berorientasi laba</b>: mengoptimalkan investasi, memperkuat tata kelola aset negara, dan memanfaatkan partisipasi swasta. Ciri khasnya:</p>' +
              '<ul><li><b>Entitas "terpisah" yang independen</b> — anggaran sendiri, tanggung jawab laba-rugi, manajemen risiko.</li>' +
              '<li><b>Hanya proyek yang menguntungkan</b> — bankable, IRR kompetitif, dengan dampak ekonomi nyata.</li>' +
              '<li><b>Sinergi sektor swasta</b> — kemitraan komersial untuk memperbesar proyek berdampak tinggi.</li>' +
              '<li><b>Sinergi dengan Pemerintah</b> — mendukung program prioritas nasional.</li></ul>' +
              '<p>Contoh proyek: <b>waste-to-energy</b>, <b>Koperasi Merah-Putih</b>, ACWA Power, Kampung Haji, smelter aluminium, kilang alumina/bio-avtur, hilirisasi SDA. Dukungan Pemerintah bisa berupa penyertaan modal, pinjaman bank, transfer ke desa (risiko kredit nol), dan subsidi harga untuk tarif yang layak.</p>' +
              '<div class="tip">📝 Mengapa "di luar APBN"? Danantara mengambil risiko komersial bankable yang tidak semestinya ditanggung APBN — menjaga aturan fiskal tetap utuh sambil tetap mendorong prioritas nasional.</div>' } },
          { title: { en: 'The eight National Priority Programs', id: 'Delapan Program Prioritas Nasional' },
            html: { en: '<p>Fiscal policy is a strategic tool for eight national priority programs:</p>' +
              '<ol><li><b>Food security</b></li><li><b>Energy security</b></li><li><b>Free nutritious meals (MBG)</b></li>' +
              '<li><b>Education program</b></li><li><b>Health program</b></li><li><b>Village development, cooperatives &amp; MSMEs</b></li>' +
              '<li><b>Universal defence</b></li><li><b>Accelerating global trade &amp; investment</b></li></ol>' +
              '<p>Key 2025 achievements:</p>' +
              '<table><thead><tr><th>Program</th><th>Result</th></tr></thead><tbody>' +
              '<tr><td>Free nutritious meals (MBG)</td><td>60.24M beneficiaries &amp; 23,678 public kitchens</td></tr>' +
              '<tr><td>Free health check (CKG)</td><td>70.8M participants</td></tr>' +
              '<tr><td>Rice production (Jan–Dec ’25)</td><td>34.71M tons; national rice stock 3.4M tons (Feb ’26)</td></tr>' +
              '<tr><td>School revitalisation</td><td>12.5 thousand schools; 21 new Garuda Superior Schools</td></tr>' +
              '<tr><td>Education endowment fund</td><td>US$10 Billion</td></tr>' +
              '</tbody></table>',
              id: '<p>Kebijakan fiskal adalah alat strategis bagi delapan program prioritas nasional:</p>' +
              '<ol><li><b>Ketahanan pangan</b></li><li><b>Ketahanan energi</b></li><li><b>Makan Bergizi Gratis (MBG)</b></li>' +
              '<li><b>Program pendidikan</b></li><li><b>Program kesehatan</b></li><li><b>Pembangunan desa, koperasi &amp; UMKM</b></li>' +
              '<li><b>Pertahanan semesta</b></li><li><b>Percepatan perdagangan &amp; investasi global</b></li></ol>' +
              '<p>Capaian utama 2025:</p>' +
              '<table><thead><tr><th>Program</th><th>Hasil</th></tr></thead><tbody>' +
              '<tr><td>Makan Bergizi Gratis (MBG)</td><td>60,24 juta penerima &amp; 23.678 dapur umum</td></tr>' +
              '<tr><td>Cek Kesehatan Gratis (CKG)</td><td>70,8 juta peserta</td></tr>' +
              '<tr><td>Produksi beras (Jan–Des ’25)</td><td>34,71 juta ton; stok beras nasional 3,4 juta ton (Feb ’26)</td></tr>' +
              '<tr><td>Revitalisasi sekolah</td><td>12,5 ribu sekolah; 21 Sekolah Garuda Unggul baru</td></tr>' +
              '<tr><td>Dana abadi pendidikan</td><td>US$10 Miliar</td></tr>' +
              '</tbody></table>' } }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'GDP expenditure identity', id: 'Identitas pengeluaran PDB' },
          html: { en: '<div class="formula">$$ Y = C + I + G + (X - M) $$</div><p>Fiscal policy moves <b>G</b> directly and <b>C, I</b> indirectly (transfers, subsidies, capital spending).</p>',
            id: '<div class="formula">$$ Y = C + I + G + (X - M) $$</div><p>Kebijakan fiskal menggerakkan <b>G</b> secara langsung dan <b>C, I</b> secara tidak langsung (transfer, subsidi, belanja modal).</p>' } },
        { title: { en: 'Primary balance', id: 'Keseimbangan primer' },
          html: { en: '<div class="formula">$$ \\text{Primary balance} = \\text{Revenue} - (\\text{Expenditure} - \\text{interest}) $$</div>' +
            '<p>Strips out interest to judge underlying fiscal sustainability. The overall <b>deficit</b> adds interest back; financing (E) must cover it.</p>',
            id: '<div class="formula">$$ \\text{Primary balance} = \\text{Revenue} - (\\text{Expenditure} - \\text{interest}) $$</div>' +
            '<p>Mengeluarkan komponen bunga untuk menilai keberlanjutan fiskal yang mendasar. <b>Defisit</b> keseluruhan menambahkan bunga kembali; pembiayaan (E) harus menutupnya.</p>' } },
        { title: { en: 'Fiscal-rule ceilings (UU 17/2003)', id: 'Plafon aturan fiskal' },
          html: { en: '<div class="formula">$$ \\frac{\\text{Deficit}}{\\text{GDP}} \\le 3\\%, \\qquad \\frac{\\text{Debt}}{\\text{GDP}} \\le 60\\% $$</div>',
            id: '<div class="formula">$$ \\frac{\\text{Deficit}}{\\text{GDP}} \\le 3\\%, \\qquad \\frac{\\text{Debt}}{\\text{GDP}} \\le 60\\% $$</div>' } },
        { title: { en: 'Debt dynamics (r − g rule)', id: 'Dinamika utang (aturan r − g)' },
          html: { en: '<div class="formula">$$ d_{t+1} = d_t\\,\\frac{1+r}{1+g} - pb $$</div>' +
            '<p>$d$ = debt/GDP, $r$ = real interest rate, $g$ = real growth, $pb$ = primary balance/GDP. If <b>$g>r$</b> debt converges; if <b>$r>g$</b> it explodes without a primary surplus. See the Graphs tab.</p>',
            id: '<div class="formula">$$ d_{t+1} = d_t\\,\\frac{1+r}{1+g} - pb $$</div>' +
            '<p>$d$ = utang/PDB, $r$ = suku bunga riil, $g$ = pertumbuhan riil, $pb$ = keseimbangan primer/PDB. Jika <b>$g>r$</b> utang konvergen; jika <b>$r>g$</b> utang meledak tanpa surplus primer. Lihat tab Graphs.</p>' } }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Debt sustainability: the r − g rule', id: 'Keberlanjutan utang: aturan r − g' },
          html: { en: '<p>Move the interest rate, growth, primary balance and starting debt. When growth beats the interest rate the debt ratio settles down; when <b>r > g</b> it drifts up through the 60% rule unless you run a surplus. This is the engine behind every "is the debt sustainable?" exam question.</p>',
            id: '<p>Geser suku bunga, pertumbuhan, keseimbangan primer dan utang awal. Ketika pertumbuhan mengalahkan suku bunga, rasio utang menetap; ketika <b>r > g</b> rasio merangkak naik melewati aturan 60% kecuali Anda menjalankan surplus. Inilah mesin di balik setiap pertanyaan ujian "apakah utang berkelanjutan?".</p>' },
          chartId: 'debt-dynamics' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'State the three functions of fiscal policy and give one APBN instrument for each.', id: 'Sebutkan tiga fungsi kebijakan fiskal dan satu instrumen APBN untuk masing-masing.' },
        answer: [
          { en: '<b>Allocation</b> — productive/quality spending: infrastructure and human-capital capital expenditure, public-service delivery.', id: '<b>Alokasi</b> — belanja produktif: belanja modal infrastruktur & SDM, layanan publik.' },
          { en: '<b>Distribution</b> — a fair tax system (progressive PPh) + targeted social assistance (PKH, Kartu Sembako) + fiscal decentralization.', id: '<b>Distribusi</b> — sistem pajak adil (PPh progresif) + bansos tepat sasaran + desentralisasi fiskal.' },
          { en: '<b>Stabilization</b> — countercyclical deficit, prudent financing, fiscal buffers (SiLPA), disaster-risk mitigation.', id: '<b>Stabilisasi</b> — defisit kontracyclical, pembiayaan pruden, fiscal buffer, mitigasi risiko bencana.' }
        ], tip: { en: 'Musgrave: Allocation · Distribution · Stabilization.', id: 'Musgrave: Alokasi · Distribusi · Stabilisasi.' } },
      { type: 'quant', q: { en: 'Indonesia caps the deficit at 3% of GDP and debt at 60% of GDP. If GDP is Rp 20,000 T and the deficit is Rp 632 T, is the deficit rule satisfied?', id: 'Defisit dibatasi 3% PDB. Jika PDB Rp 20.000 T dan defisit Rp 632 T, apakah aturan terpenuhi?' },
        answer: [
          { en: 'Deficit/GDP = 632 / 20,000 = <b>3.16%</b>.', id: 'Defisit/PDB = 632 / 20.000 = <b>3,16%</b>.' },
          { en: 'That is <b>above</b> the 3% ceiling, so the rule is breached and would require special legal cover (as in 2020–21 COVID).', id: 'Itu <b>di atas</b> plafon 3%, jadi aturan dilanggar dan perlu dasar hukum khusus (seperti COVID 2020–21).' }
        ], tip: { en: 'Always divide by GDP, not by total spending.', id: 'Selalu bagi dengan PDB, bukan total belanja.' } },
      { type: 'scenario', q: { en: 'A country has real interest rate r = 6% and real growth g = 4% with a balanced primary budget. What happens to its debt ratio, and what would stop the drift?', id: 'r = 6%, g = 4%, keseimbangan primer nol. Apa yang terjadi pada rasio utang?' },
        answer: [
          { en: 'Since <b>r > g</b>, the factor (1+r)/(1+g) > 1, so $d_{t+1} > d_t$ — the debt ratio <b>rises every year</b> (snowball effect) even with no new primary deficit.', id: 'Karena <b>r > g</b>, faktor (1+r)/(1+g) > 1, sehingga rasio utang <b>naik tiap tahun</b> walau tanpa defisit primer baru.' },
          { en: 'To stabilise it you must run a <b>primary surplus</b> of at least $pb = d\\,(r-g)/(1+g)$, or raise growth above the interest rate.', id: 'Untuk menstabilkan perlu <b>surplus primer</b> minimal $pb = d\\,(r-g)/(1+g)$, atau menaikkan pertumbuhan di atas bunga.' }
        ], tip: { en: 'r − g is the heart of debt sustainability. Try it on the Graphs tab.', id: 'r − g adalah inti keberlanjutan utang.' } },
      { type: 'concept', q: { en: 'Walk through the APBN cycle for year T: name the key months and what is produced at the end of the Pembicaraan Pendahuluan.', id: 'Telusuri siklus APBN tahun T: sebutkan bulan kunci dan apa yang dihasilkan di akhir Pembicaraan Pendahuluan.' },
        answer: [
          { en: 'It starts in <b>T−1</b>: Jan–Feb policy directions &amp; RKP/KEM-PPKF concepts → Feb–May resource envelope &amp; indicative budget → mid-May submit RKP &amp; KEM-PPKF.', id: 'Dimulai di <b>T−1</b>: Jan–Feb arah kebijakan &amp; konsep RKP/KEM-PPKF → Feb–Mei resource envelope &amp; anggaran indikatif → pertengahan Mei penyampaian RKP &amp; KEM-PPKF.' },
          { en: '<b>End-June</b> the Pembicaraan Pendahuluan concludes, producing the macro-assumption ranges (<b>ADEM</b>) + the <b>indicative budget</b> by ministry.', id: '<b>Akhir Juni</b> Pembicaraan Pendahuluan selesai, menghasilkan rentang asumsi makro (<b>ADEM</b>) + <b>anggaran indikatif</b> per K/L.' },
          { en: 'Then August RAPBN to Parliament → end-October UU APBN approved → November Perpres details → December DIPA → <b>1 January</b> implementation.', id: 'Lalu Agustus RAPBN ke Parlemen → akhir Oktober UU APBN disetujui → November rincian Perpres → Desember DIPA → <b>1 Januari</b> pelaksanaan.' }
        ], tip: { en: 'Mnemonic: concepts (Q1) → envelope (Q2) → ADEM end-June → Parliament Aug–Oct → execute 1 Jan.', id: 'Mnemonik: konsep (Q1) → envelope (Q2) → ADEM akhir Juni → Parlemen Agu–Okt → eksekusi 1 Jan.' } },
      { type: 'concept', q: { en: 'List the seven LKPP reports and explain why the BPK audit opinion improved from Disclaimer (2004–08) to WTP (2016–24).', id: 'Sebutkan tujuh laporan LKPP dan jelaskan mengapa opini BPK membaik dari Disclaimer (2004–08) menjadi WTP (2016–24).' },
        answer: [
          { en: 'Seven reports: <b>Laporan Realisasi Anggaran, Laporan Perubahan SAL, Laporan Arus Kas, Laporan Operasional, Laporan Perubahan Ekuitas, Neraca, CaLK</b>.', id: 'Tujuh laporan: <b>Laporan Realisasi Anggaran, Laporan Perubahan SAL, Laporan Arus Kas, Laporan Operasional, Laporan Perubahan Ekuitas, Neraca, CaLK</b>.' },
          { en: 'The opinion improved (Disclaimer/TMP → WDP → WTP) because the <b>2003–04 reforms</b> — unified budget, IMF GFS, accrual-based LKPP — created the accounting systems, internal controls and accountability needed for clean, auditable books.', id: 'Opini membaik (TMP → WDP → WTP) karena <b>reformasi 2003–04</b> — anggaran terpadu, GFS IMF, LKPP berbasis akrual — membangun sistem akuntansi, kontrol internal, dan akuntabilitas untuk pembukuan bersih yang dapat diaudit.' }
        ], tip: { en: 'Disclaimer 2004–08 · WDP 2009–15 · WTP 2016–24. Governance → clean opinion.', id: 'Disclaimer 2004–08 · WDP 2009–15 · WTP 2016–24. Tata kelola → opini bersih.' } },
      { type: 'scenario', q: { en: 'Indonesia’s productive-age share falls from 69% (2023) to 65% (2045) while it targets the middle class rising from 17% to 70%. Explain the demographic-dividend window and why the middle-income trap is time-bound.', id: 'Pangsa usia produktif turun dari 69% (2023) ke 65% (2045) sementara kelas menengah ditargetkan naik dari 17% ke 70%. Jelaskan jendela bonus demografi dan mengapa jebakan pendapatan menengah terikat waktu.' },
        answer: [
          { en: 'The <b>demographic dividend</b> is the growth boost from a large working-age share relative to dependants. With productive-age peaking near 69% now and declining to 65% by 2045, the <b>window is closing</b>.', id: '<b>Bonus demografi</b> adalah dorongan pertumbuhan dari besarnya pangsa usia kerja relatif terhadap tanggungan. Dengan usia produktif memuncak ~69% kini dan turun ke 65% pada 2045, <b>jendela sedang menutup</b>.' },
          { en: 'Indonesia must lift productivity and incomes (middle class 17%→70%, GNI/capita past ~US$4,806) <b>before</b> the workforce ages — needing 6–8% growth p.a. Miss it and the country could "grow old before it grows rich" — stuck in the <b>middle-income trap</b>.', id: 'Indonesia harus menaikkan produktivitas dan pendapatan (kelas menengah 17%→70%, GNI/kapita melewati ~US$4.806) <b>sebelum</b> angkatan kerja menua — butuh pertumbuhan 6–8% per tahun. Jika terlewat, negara bisa "menua sebelum kaya" — terjebak dalam <b>jebakan pendapatan menengah</b>.' }
        ], tip: { en: 'Window closes ~2045; high-income threshold ≈ US$4,806 GNI/capita; need 6–8% growth.', id: 'Jendela menutup ~2045; ambang berpendapatan tinggi ≈ GNI/kapita US$4.806; butuh pertumbuhan 6–8%.' } },
      { type: 'quant', q: { en: 'GDP is Rp 24,000 T and outstanding debt is Rp 9,600 T. Compute the debt/GDP ratio, compare it to the 60% ceiling and to Indonesia’s ~39–40% recent level.', id: 'PDB Rp 24.000 T dan utang Rp 9.600 T. Hitung rasio utang/PDB, bandingkan dengan plafon 60% dan level terkini ~39–40%.' },
        answer: [
          { en: 'Debt/GDP = 9,600 / 24,000 = <b>40%</b>.', id: 'Utang/PDB = 9.600 / 24.000 = <b>40%</b>.' },
          { en: 'That is well <b>below the 60% ceiling</b> (UU 17/2003) and matches Indonesia’s ~39–40% post-COVID level — far below peers like the US (~125%) or Japan (~230%).', id: 'Itu jauh <b>di bawah plafon 60%</b> (UU 17/2003) dan sesuai level pasca-COVID Indonesia ~39–40% — jauh di bawah negara lain seperti AS (~125%) atau Jepang (~230%).' }
        ], tip: { en: 'Divide debt by GDP. Indonesia is low on both debt and deficit internationally.', id: 'Bagi utang dengan PDB. Indonesia rendah baik utang maupun defisit secara internasional.' } }
    ]
  };
})();
