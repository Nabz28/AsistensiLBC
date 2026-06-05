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
            html: { en: '<p>Before the Great Depression, neoclassical economics assumed the market is <b>self-correcting</b> (Marshall). The 1929–39 Depression showed prolonged mass unemployment and disequilibrium — the market did <i>not</i> self-correct.</p>' +
              '<p><span class="key">Keynes</span> (<i>General Theory</i>, 1936): the government must manage economic fluctuations. The budget becomes a <b>countercyclical</b> tool — cool an overheating economy, boost a contracting one.</p>',
              id: '<p>Sebelum Depresi Besar, ekonomi neoklasik mengasumsikan pasar bersifat <b>self-correcting</b> (Marshall). Depresi 1929–39 menunjukkan pengangguran massal yang berkepanjangan dan disekuilibrium — pasar <i>tidak</i> mengoreksi diri sendiri.</p>' +
              '<p><span class="key">Keynes</span> (<i>General Theory</i>, 1936): pemerintah harus mengelola fluktuasi ekonomi. Anggaran menjadi instrumen <b>countercyclical</b> — mendinginkan ekonomi yang overheating, mendorong ekonomi yang sedang kontraksi.</p>' } }
        ]
      },
      {
        heading: { en: 'The three functions of fiscal policy', id: 'Tiga fungsi kebijakan fiskal' }, num: '2',
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
              '<p>Jadi APBN berkontribusi pada PDB melalui beberapa jalur, bukan hanya lewat jalur G.</p>' } }
        ]
      },
      {
        heading: { en: 'A credible, healthy budget', id: 'Anggaran yang kredibel & sehat' }, num: '3',
        cards: [
          { title: { en: 'The APBN cycle: year T starts in year T−1', id: 'Siklus APBN' },
            html: { en: '<p>APBN is a <b>political product</b>: proposed by the Government, approved by Parliament (DPR). The cycle for year T begins in T−1:</p>' +
              '<ol><li><b>Jan–Feb</b> policy directions; concepts of <span class="key">RKP</span> and <span class="key">KEM-PPKF</span>.</li>' +
              '<li><b>Feb–May</b> resource envelope & indicative budget.</li>' +
              '<li><b>Mid-May</b> submit RKP & KEM-PPKF; <b>end-June</b> conclude the <i>Pembicaraan Pendahuluan</i> (macro assumptions ADEM + indicative budget).</li>' +
              '<li><b>August</b> RAPBN to Parliament; <b>end-October</b> UU APBN approved; <b>Nov–Dec</b> Perpres details + DIPA.</li>' +
              '<li><b>1 January</b> implementation.</li></ol>' +
              '<div class="note">💡 If DPR rejects the proposed budget, the government runs <b>last year’s budget</b> (Pasal 23(1)).</div>',
              id: '<p>APBN adalah <b>produk politik</b>: diusulkan oleh Pemerintah, disetujui oleh Parlemen (DPR). Siklus untuk tahun T dimulai pada T−1:</p>' +
              '<ol><li><b>Jan–Feb</b> arah kebijakan; konsep <span class="key">RKP</span> dan <span class="key">KEM-PPKF</span>.</li>' +
              '<li><b>Feb–Mei</b> resource envelope & anggaran indikatif.</li>' +
              '<li><b>Pertengahan Mei</b> penyampaian RKP & KEM-PPKF; <b>akhir Juni</b> menyelesaikan <i>Pembicaraan Pendahuluan</i> (asumsi makro ADEM + anggaran indikatif).</li>' +
              '<li><b>Agustus</b> RAPBN ke Parlemen; <b>akhir Oktober</b> UU APBN disetujui; <b>Nov–Des</b> rincian Perpres + DIPA.</li>' +
              '<li><b>1 Januari</b> pelaksanaan.</li></ol>' +
              '<div class="note">💡 Jika DPR menolak anggaran yang diusulkan, pemerintah menjalankan <b>anggaran tahun lalu</b> (Pasal 23(1)).</div>' } },
          { title: { en: 'I-account, GFS and the audit opinion', id: 'I-account, GFS & opini audit' },
            html: { en: '<p>Since 2001 the APBN uses an <b>I-account</b> (unified budget; FY = Jan 1–Dec 31), after the 2003–04 state-finance reforms (UU 17/2003, 1/2004, 15/2004) and adoption of IMF <span class="key">GFS</span>. Year-end reporting = <span class="key">LKPP</span>, audited by <b>BPK</b>.</p>' +
              '<p>Audit opinion trajectory: Disclaimer (2004–08) → Qualified/WDP (2009–15) → <b>Unqualified/WTP (2016–24)</b>.</p>',
              id: '<p>Sejak 2001 APBN menggunakan <b>I-account</b> (anggaran terpadu; TA = 1 Jan–31 Des), setelah reformasi keuangan negara 2003–04 (UU 17/2003, 1/2004, 15/2004) dan adopsi <span class="key">GFS</span> IMF. Pelaporan akhir tahun = <span class="key">LKPP</span>, diaudit oleh <b>BPK</b>.</p>' +
              '<p>Tren opini audit: Disclaimer (2004–08) → Wajar Dengan Pengecualian/WDP (2009–15) → <b>Wajar Tanpa Pengecualian/WTP (2016–24)</b>.</p>' } }
        ]
      },
      {
        heading: { en: 'Fiscal rules & challenges', id: 'Aturan & tantangan fiskal' }, num: '4',
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
              '<div class="tip">📝 Bingkai ujian: semakin banyak belanja wajib = semakin sedikit ruang untuk merespons guncangan. Aturan pendidikan "20% dari <i>Belanja</i> Negara" bahkan naik otomatis ketika defisit (utang) naik, karena Belanja mencakup defisit.</div>' } }
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
        ], tip: { en: 'r − g is the heart of debt sustainability. Try it on the Graphs tab.', id: 'r − g adalah inti keberlanjutan utang.' } }
    ]
  };
})();
