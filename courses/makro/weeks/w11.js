/* ============================================================================
   MAKRO · Week 11 — Exchange Rate, Capital Flows & Balance-Sheet Effects
   Bilingual (EN + ID). Registers itself on window.MAKRO_WEEKS.w11.
   Source: Prof. Iwan Azis lecture deck "Week 11 — Exchange Rate, Capital Flows
   & Balance Sheet Effect" (Spring 2026), 20 slides. Covers ER regimes
   (hard peg / intermediate / floating), de jure vs de facto classification,
   fixed-vs-flexible trade-offs, sustainability of a peg, empirical evidence,
   nominal vs real vs effective exchange rates (NER/RER/NEER/REER), the
   balance-sheet effect (currency & maturity mismatch), the sovereign–bank
   nexus and circular causality, and the backward-bending aggregate-demand
   curve that delivers contractionary depreciation in emerging markets.
   Maps to MAKRO UAS.

   Diagram geometry used in the charts:
     • AD with money market: upward Y=f(Y,i,r) in (Y, r) space + vertical Ms.
     • Backward-bending curve: S-shaped path in (Y, real ER) space, vertical Ms;
       low r ⇒ NX (net-export) channel dominates ⇒ dy/de>0; high r ⇒ balance-
       sheet channel dominates ⇒ ∂Df/∂e<0 ⇒ a region where dy/de<0.
     • Circular-causality loop: EXR collapse → balance sheet → outflows /
       recession / stagnant investment → confidence → back to EXR collapse.
   ============================================================================ */
(function () {
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';
  var LOSS = 'rgba(192,57,43,.14)';
  var GAIN = 'rgba(14,143,184,.14)';

  /* ---- Chart 1: ER regime spectrum (bars: degree of flexibility) ----------- */
  var REGIME_CHART = { panels: [{
    kind: 'bars',
    title: 'The ER-regime spectrum — from hard peg to free float',
    w: 470, h: 300,
    bars: [
      { label: 'Hard peg', value: 1, color: RED,   caption: 'union · board · $-ize' },
      { label: 'Soft peg', value: 2, color: AMBER, caption: 'band · crawl' },
      { label: 'Managed', value: 3, color: TEAL,   caption: 'dirty float' },
      { label: 'Free float', value: 4, color: GREEN, caption: 'market-set' }
    ],
    yMax: 4.7
  }] };

  /* ---- Chart 2: Aggregate demand + money market (slide 17) ----------------- */
  var AD_CHART = { panels: [{
    title: 'Aggregate demand: Y = f(Y, i, r), with money supply Mˢ',
    w: 470, h: 320,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'r = eP*/P (real ER)' },
    curves: [
      { id: 'YD', kind: 'line', p1: [1, 2], p2: [9, 8], color: TEAL, label: 'Y = f(Y, i, r)' },
      { id: 'Ms', kind: 'vline', x: 5, color: LINE, label: 'Mˢ' }
    ],
    points: [
      { on: ['YD', 'Ms'], dot: true, guideX: 'Y*', guideY: 'r*' }
    ],
    notes: [
      { x: 6.6, y: 3.0, text: 'depreciation (r↑) ⇒ E↑, M↓ ⇒ NX↑ ⇒ Y↑', color: '#777', anchor: 'middle', size: 9.5 }
    ]
  }] };

  /* ---- Chart 3: Backward-bending curve (slides 18-20) ---------------------- */
  var BBC_CHART = { panels: [{
    title: 'Backward-bending Y curve — contractionary depreciation region',
    w: 470, h: 340,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'r = eP*/P (real ER)' },
    curves: [
      { id: 'BB', kind: 'path', smooth: true, color: TEAL, label: 'Y = F(Y, i, r)',
        pts: [[2, 1], [4.2, 2.4], [5.6, 3.6], [4.0, 5.0], [2.6, 6.2], [4.6, 7.4], [6.8, 8.6]] },
      { id: 'Ms', kind: 'vline', x: 5, color: LINE, label: 'Mˢ' }
    ],
    points: [
      { at: [5.6, 3.6], dot: true, guideY: 'low r: NX dominates → dy/de > 0' },
      { at: [2.6, 6.2], dot: true, guideY: 'high r: balance-sheet → dy/de < 0' }
    ],
    notes: [
      { x: 5.0, y: 4.9, text: '∂Df(eP*/P)/∂e < 0 here', color: RED, anchor: 'middle', size: 9.5 },
      { x: 7.2, y: 2.0, text: 'multiple equilibria', color: '#777', anchor: 'middle', size: 9.5 }
    ]
  }] };

  /* ---- Chart 4: Circular causality loop (slide 16) ------------------------- */
  /* Drawn with path arrows around a ring of labelled nodes. */
  var LOOP_CHART = { panels: [{
    title: 'Circular causality: depreciation → balance sheet → deeper crisis',
    w: 480, h: 340,
    x: { min: 0, max: 10, label: '' },
    y: { min: 0, max: 10, label: '' },
    curves: [
      { id: 'r1', kind: 'path', color: RED,
        pts: [[5, 9], [7.5, 8], [8.5, 6]] },
      { id: 'r2', kind: 'path', color: AMBER,
        pts: [[8.5, 5.5], [8, 3.5], [6.5, 2]] },
      { id: 'r3', kind: 'path', color: TEAL,
        pts: [[5.5, 1.8], [3.5, 1.8], [2, 3]] },
      { id: 'r4', kind: 'path', color: GREEN,
        pts: [[1.7, 3.6], [1.7, 6], [3.5, 8.5]] }
    ],
    notes: [
      { x: 5,   y: 9.3, text: 'EXR collapse',          color: RED,   anchor: 'middle', size: 10 },
      { x: 8.6, y: 6.0, text: 'capital outflows',       color: AMBER, anchor: 'middle', size: 10 },
      { x: 6.2, y: 1.5, text: 'confidence ↓ · recession', color: TEAL,  anchor: 'middle', size: 9.5 },
      { x: 2.0, y: 2.4, text: 'stagnant investment',     color: GREEN, anchor: 'middle', size: 9.5 },
      { x: 1.9, y: 6.6, text: 'deteriorated balance sheet', color: BLUE, anchor: 'middle', size: 9.5 },
      { x: 5.0, y: 5.0, text: '↻ self-reinforcing', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  window.MAKRO_WEEKS.w11 = {
    id: 'w11',
    label: { en: 'Week 11', id: 'Minggu 11' },
    title: { en: 'Exchange Rate & Balance-Sheet Effects', id: 'Nilai Tukar & Efek Neraca' },
    subtitle: {
      en: 'ER regimes (peg → float) and de jure vs de facto, nominal/real/effective rates, and the balance-sheet effect: how currency & maturity mismatch turn a depreciation contractionary, producing a backward-bending demand curve in emerging markets.',
      id: 'Rezim nilai tukar (peg → mengambang) dan de jure vs de facto, kurs nominal/riil/efektif, serta efek neraca: bagaimana currency & maturity mismatch membuat depresiasi bersifat kontraktif, menghasilkan kurva permintaan melengkung balik di negara berkembang.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Exchange-rate regimes: the spectrum', id: 'Rezim nilai tukar: spektrumnya' },
        num: '1',
        cards: [
          {
            title: { en: 'Classifying ER regimes', id: 'Mengklasifikasikan rezim nilai tukar' },
            html: {
              en: `<p>Exchange-rate arrangements run along a spectrum from <span class="key">hard pegs</span> (no domestic monetary autonomy) through <span class="key">intermediate / soft pegs</span> to a <span class="key">free float</span> (market-determined). The lecturer's three columns:</p>
<table>
<thead><tr><th>Hard pegs</th><th>Intermediate</th><th>Floating</th></tr></thead>
<tbody>
<tr><td>Currency union</td><td>Basket peg</td><td>Managed float</td></tr>
<tr><td>Dollarization</td><td>Crawling peg</td><td>Free float</td></tr>
<tr><td>Currency board</td><td>Band</td><td>—</td></tr>
</tbody>
</table>
<ul>
<li><span class="key">Dollarization</span> — use another country's currency as sole legal tender (Ecuador, El Salvador, Panama).</li>
<li><span class="key">Currency union</span> — a "parent" central bank for several member economies; share one currency with the others (Euro area, ECCU, CFA franc zone).</li>
<li><span class="key">Currency board</span> — domestic currency fully backed by, and convertible into, a foreign currency at a fixed rate, with the central bank giving up discretionary monetary policy (Hong Kong 1983, Estonia 1992, Lithuania 1994, Bulgaria 1997, Bosnia & Herzegovina, Argentina until 2001).</li>
</ul>`,
              id: `<p>Pengaturan nilai tukar membentang pada spektrum dari <span class="key">hard peg</span> (tanpa otonomi moneter domestik), melewati <span class="key">peg menengah / lunak</span>, hingga <span class="key">mengambang bebas</span> (ditentukan pasar). Tiga kolom dari dosen:</p>
<table>
<thead><tr><th>Hard peg</th><th>Menengah</th><th>Mengambang</th></tr></thead>
<tbody>
<tr><td>Currency union</td><td>Basket peg</td><td>Managed float</td></tr>
<tr><td>Dolarisasi</td><td>Crawling peg</td><td>Free float</td></tr>
<tr><td>Currency board</td><td>Band</td><td>—</td></tr>
</tbody>
</table>
<ul>
<li><span class="key">Dolarisasi</span> — memakai mata uang negara lain sebagai satu-satunya alat pembayaran sah (Ekuador, El Salvador, Panama).</li>
<li><span class="key">Currency union</span> — satu bank sentral "induk" untuk beberapa negara anggota; berbagi satu mata uang (kawasan Euro, ECCU, zona franc CFA).</li>
<li><span class="key">Currency board</span> — mata uang domestik sepenuhnya didukung oleh dan dapat dikonversi ke mata uang asing pada kurs tetap, dengan bank sentral melepaskan kebijakan moneter diskresioner (Hong Kong 1983, Estonia 1992, Lituania 1994, Bulgaria 1997, Bosnia & Herzegovina, Argentina hingga 2001).</li>
</ul>`
            },
            chart: REGIME_CHART
          },
          {
            title: { en: 'The most common case: intermediate (soft) pegs', id: 'Kasus paling umum: peg menengah (lunak)' },
            html: {
              en: `<p>Most countries in practice sit in the <span class="key">intermediate</span> middle. The lecturer's taxonomy with country examples:</p>
<ul>
<li><span class="key">Conventional (soft) peg</span> — single currency (Malaysia, Nepal, Namibia) or a basket (Malta, Fiji, Latvia).</li>
<li><span class="key">Band</span> — pegged exchange rate within horizontal bands ($\\ge \\pm1\\%$): Denmark ($\\pm2.25\\%$), Tonga ($\\pm5\\%$), Hungary ($\\pm15\\%$).</li>
<li><span class="key">Crawling peg</span> — backward- or forward-looking; e.g. Bolivia.</li>
<li><span class="key">Managed (dirty) float</span> — no pre-announced path; managed by sterilized intervention or interest-rate moves; e.g. Thailand, <span class="key">Indonesia</span>, Mongolia, Singapore, Brazil.</li>
<li><span class="key">Crawling band</span> — symmetric or asymmetric; e.g. Belarus ($\\pm5\\%$), Israel ($\\pm22\\%$).</li>
<li><span class="key">Independently floating</span> — e.g. US, Japan, EMU.</li>
</ul>
<div class="note"><span class="key">Indonesia is a managed float.</span> Bank Indonesia smooths rupiah volatility through FX intervention and the policy rate but does not target a fixed level — keep this fact ready for any UAS question that asks for Indonesia's regime.</div>`,
              id: `<p>Sebagian besar negara dalam praktik berada di tengah, yaitu <span class="key">menengah</span>. Taksonomi dosen dengan contoh negara:</p>
<ul>
<li><span class="key">Peg konvensional (lunak)</span> — mata uang tunggal (Malaysia, Nepal, Namibia) atau keranjang (Malta, Fiji, Latvia).</li>
<li><span class="key">Band</span> — kurs dipatok dalam rentang horizontal ($\\ge \\pm1\\%$): Denmark ($\\pm2.25\\%$), Tonga ($\\pm5\\%$), Hungaria ($\\pm15\\%$).</li>
<li><span class="key">Crawling peg</span> — berorientasi mundur atau maju; mis. Bolivia.</li>
<li><span class="key">Managed (dirty) float</span> — tanpa jalur yang diumumkan; dikelola lewat intervensi tersterilisasi atau suku bunga; mis. Thailand, <span class="key">Indonesia</span>, Mongolia, Singapura, Brasil.</li>
<li><span class="key">Crawling band</span> — simetris atau asimetris; mis. Belarus ($\\pm5\\%$), Israel ($\\pm22\\%$).</li>
<li><span class="key">Mengambang independen</span> — mis. AS, Jepang, EMU.</li>
</ul>
<div class="note"><span class="key">Indonesia adalah managed float.</span> Bank Indonesia meredam volatilitas rupiah lewat intervensi valas dan suku bunga kebijakan tetapi tidak menargetkan level tetap — ingat fakta ini untuk soal UAS apa pun yang menanyakan rezim Indonesia.</div>`
            }
          },
          {
            title: { en: 'De jure vs de facto regimes', id: 'Rezim de jure vs de facto' },
            html: {
              en: `<p>A regime can be classified two ways:</p>
<ul>
<li><span class="key">De jure</span> — by the <em>declared</em> policy / institutional commitment the country announces to the IMF.</li>
<li><span class="key">De facto</span> — by what the country <em>actually does</em>: does the rate in fact float, crawl, or sit in narrow bands?</li>
</ul>
<p>Two screening questions sort the cases:</p>
<ol>
<li>Is the fixed-ER policy an institutional commitment (a declared policy)? <span class="key">Yes</span> ⇒ hard peg; <span class="key">No</span> ⇒ intermediate.</li>
<li>Is there an explicit target around which the central bank intervenes? <span class="key">Yes</span> ⇒ intermediate; <span class="key">No</span> ⇒ floating.</li>
</ol>
<div class="tip"><span class="key">Reinhart & Rogoff (2004)</span> argued <em>de jure</em> is what the countries <em>say</em> they do, but <em>de facto</em> is what they <em>actually</em> do — e.g. many "floats" are in fact crawls or narrow bands. The IMF classification has shifted toward de facto labels (compare the IMF 2005 vs IMF 2013 tables, where the same countries appear under different headings as their behaviour, not their words, is scored).</div>`,
              id: `<p>Sebuah rezim dapat diklasifikasikan dua cara:</p>
<ul>
<li><span class="key">De jure</span> — menurut kebijakan / komitmen institusional yang <em>dideklarasikan</em> negara kepada IMF.</li>
<li><span class="key">De facto</span> — menurut yang <em>benar-benar dilakukan</em> negara: apakah kursnya nyatanya mengambang, merangkak, atau berada dalam band sempit?</li>
</ul>
<p>Dua pertanyaan penyaring memilah kasusnya:</p>
<ol>
<li>Apakah kebijakan ER tetap merupakan komitmen institusional (kebijakan yang dideklarasikan)? <span class="key">Ya</span> ⇒ hard peg; <span class="key">Tidak</span> ⇒ menengah.</li>
<li>Apakah ada target eksplisit yang menjadi pusat intervensi bank sentral? <span class="key">Ya</span> ⇒ menengah; <span class="key">Tidak</span> ⇒ mengambang.</li>
</ol>
<div class="tip"><span class="key">Reinhart & Rogoff (2004)</span> berpendapat <em>de jure</em> adalah yang negara <em>katakan</em>, tetapi <em>de facto</em> adalah yang mereka <em>benar-benar</em> lakukan — mis. banyak "float" nyatanya adalah crawl atau band sempit. Klasifikasi IMF bergeser ke label de facto (bandingkan tabel IMF 2005 vs IMF 2013, di mana negara yang sama muncul di kategori berbeda karena perilaku, bukan ucapan, yang dinilai).</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Fixed vs flexible: trade-offs & sustainability', id: 'Tetap vs fleksibel: trade-off & keberlanjutan' },
        num: '2',
        cards: [
          {
            title: { en: 'Fixed ER — advantages & disadvantages', id: 'ER tetap — keuntungan & kerugian' },
            html: {
              en: `<p><span class="key">Advantages</span></p>
<ul>
<li>Provides a nominal anchor for monetary policy (pins inflation expectations).</li>
<li>Reduces transactions costs and exchange-rate risk ⇒ encourages international trade and investment.</li>
</ul>
<p><span class="key">Disadvantages</span></p>
<ul>
<li>Loss of monetary-policy autonomy.</li>
<li>Loss of the exchange rate as a shock absorber ⇒ the adjustment burden falls on output and employment.</li>
<li>Loss of the lender of last resort (in dollarization).</li>
<li>Danger of speculative attacks and crashes.</li>
<li>Loss of <span class="key">seigniorage</span> revenue (in the dollarization case).</li>
</ul>
<div class="note">A peg trades flexibility for credibility. It works while reserves and political will hold; it fails violently when a shock makes defending the rate too costly (the Asian crisis archetype).</div>`,
              id: `<p><span class="key">Keuntungan</span></p>
<ul>
<li>Menyediakan jangkar nominal bagi kebijakan moneter (mengunci ekspektasi inflasi).</li>
<li>Menurunkan biaya transaksi dan risiko nilai tukar ⇒ mendorong perdagangan dan investasi internasional.</li>
</ul>
<p><span class="key">Kerugian</span></p>
<ul>
<li>Kehilangan otonomi kebijakan moneter.</li>
<li>Kehilangan nilai tukar sebagai peredam guncangan ⇒ beban penyesuaian jatuh pada output dan lapangan kerja.</li>
<li>Kehilangan lender of last resort (dalam dolarisasi).</li>
<li>Bahaya serangan spekulatif dan krisis.</li>
<li>Kehilangan pendapatan <span class="key">seigniorage</span> (dalam kasus dolarisasi).</li>
</ul>
<div class="note">Peg menukar fleksibilitas dengan kredibilitas. Ia berfungsi selama cadangan dan kemauan politik bertahan; ia gagal keras ketika guncangan membuat mempertahankan kurs terlalu mahal (arketipe krisis Asia).</div>`
            }
          },
          {
            title: { en: 'Flexible ER — advantages & disadvantages', id: 'ER fleksibel — keuntungan & kerugian' },
            html: {
              en: `<p><span class="key">Advantages</span></p>
<ul>
<li>Monetary-policy independence (discretionary policy).</li>
<li>Automatic adjustment to trade shocks (the rate moves so output need not).</li>
</ul>
<p><span class="key">Disadvantages</span></p>
<ul>
<li>Exchange-rate uncertainty.</li>
<li>Need to find a less obvious anchor ⇒ consequences for inflation.</li>
<li>Danger of speculative (irrational) bubbles.</li>
</ul>
<div class="tip">Notice the symmetry: a float buys monetary autonomy and shock absorption but loses the automatic inflation anchor; a peg does the reverse. This is the <span class="key">policy-trilemma</span> trade-off you met in Week 8 — you cannot have a fixed rate, free capital mobility, and independent monetary policy all at once.</div>`,
              id: `<p><span class="key">Keuntungan</span></p>
<ul>
<li>Independensi kebijakan moneter (kebijakan diskresioner).</li>
<li>Penyesuaian otomatis terhadap guncangan perdagangan (kurs yang bergerak sehingga output tak perlu).</li>
</ul>
<p><span class="key">Kerugian</span></p>
<ul>
<li>Ketidakpastian nilai tukar.</li>
<li>Perlu mencari jangkar yang kurang jelas ⇒ konsekuensi bagi inflasi.</li>
<li>Bahaya gelembung spekulatif (tidak rasional).</li>
</ul>
<div class="tip">Perhatikan simetrinya: float membeli otonomi moneter dan peredaman guncangan tetapi kehilangan jangkar inflasi otomatis; peg melakukan sebaliknya. Inilah trade-off <span class="key">trilema kebijakan</span> dari Minggu 8 — Anda tak bisa memiliki kurs tetap, mobilitas modal bebas, dan kebijakan moneter independen sekaligus.</div>`
            }
          },
          {
            title: { en: 'Sustainability of a fixed ER system', id: 'Keberlanjutan sistem ER tetap' },
            html: {
              en: `<p>Recall <span class="key">UIP</span>: $i = i^* + (\\theta_{\\text{prem}} - \\dot{E}_t/E_t)$. Suppose markets expect a 50% chance the parity will be maintained, and 50% the rate $E_t$ will be devalued by 10%. Then $\\theta_{\\text{prem}} - \\dot{E}_t/E_t$ becomes $1.5 \\times 0\\% + 0.5 \\times 10\\% = 5\\%$. Two scenarios of interest-rate policy:</p>
<ol>
<li><span class="key">If $i$ is not raised</span>: model will not hold domestic bond or currency. This may lead to capital outflows and overvalued ER, which eventually worsen the economy. Choices: (1) Convince markets that their expectation is wrong; but if "attacks" come, then (2) intervene forex market (combined with $i\\uparrow$); (3) give up the fixed ER system (most often).</li>
<li><span class="key">If $i$ is raised</span>: there is a risk of recession, since I must increase high (e.g. $5\\%$/month or $60\\%$/year, to maintain the parity). The choices are: (1) tax morale on the cost of the high interest rate; or (2), since maintaining the parity is so costly, give up the fixed ER system.</li>
</ol>
<div class="note">The core dilemma: defending a peg under attack forces interest rates so high that they crush investment and output — yet not defending it invites the devaluation everyone fears. Either branch ends in pain; this is why pegs so often collapse.</div>`,
              id: `<p>Ingat <span class="key">UIP</span>: $i = i^* + (\\theta_{\\text{prem}} - \\dot{E}_t/E_t)$. Misalkan pasar memperkirakan peluang 50% paritas dipertahankan, dan 50% kurs $E_t$ didevaluasi 10%. Maka $\\theta_{\\text{prem}} - \\dot{E}_t/E_t$ menjadi $1.5 \\times 0\\% + 0.5 \\times 10\\% = 5\\%$. Dua skenario kebijakan suku bunga:</p>
<ol>
<li><span class="key">Bila $i$ tidak dinaikkan</span>: pelaku tak mau memegang obligasi atau mata uang domestik. Ini dapat memicu arus modal keluar dan ER yang overvalued, yang akhirnya memperburuk ekonomi. Pilihan: (1) meyakinkan pasar bahwa ekspektasi mereka salah; tetapi bila "serangan" datang, maka (2) intervensi pasar valas (dikombinasikan dengan $i\\uparrow$); (3) melepaskan sistem ER tetap (paling sering).</li>
<li><span class="key">Bila $i$ dinaikkan</span>: ada risiko resesi, karena $i$ harus naik tinggi (mis. $5\\%$/bulan atau $60\\%$/tahun untuk mempertahankan paritas). Pilihannya: (1) menanggung beban biaya suku bunga tinggi; atau (2) karena mempertahankan paritas terlalu mahal, melepaskan sistem ER tetap.</li>
</ol>
<div class="note">Dilema inti: mempertahankan peg yang diserang memaksa suku bunga begitu tinggi hingga menghancurkan investasi dan output — namun tidak mempertahankannya mengundang devaluasi yang ditakuti semua orang. Kedua cabang berakhir menyakitkan; inilah mengapa peg begitu sering runtuh.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Empirical evidence & regimes vs growth', id: 'Bukti empiris & rezim vs pertumbuhan' },
        num: '3',
        cards: [
          {
            title: { en: 'What the data actually show', id: 'Apa yang sebenarnya ditunjukkan data' },
            html: {
              en: `<p>The empirical record on ER regimes is mixed, but with a few firm findings:</p>
<ul>
<li>Some evidence that <span class="key">hard pegs are associated with lower inflation</span>.</li>
<li><em>Mixed</em> evidence on hard pegs and fiscal discipline.</li>
<li>Some evidence that a <span class="key">common currency increases trade and integration</span>, and that exchange-rate volatility discourages trade and investment.</li>
<li><span class="key">Strong</span> evidence that the extent of monetary-policy autonomy under floating ER is <em>limited in practice</em> — "fear of floating": even declared floaters intervene heavily.</li>
<li><em>Mixed</em> evidence on exchange-rate regimes and growth.</li>
</ul>
<div class="tip">"Fear of floating" is the empirical punchline: in practice most emerging-market central banks do not let their currency move freely, because depreciation is so costly through the balance-sheet channel covered later in this week.</div>`,
              id: `<p>Catatan empiris tentang rezim ER beragam, tetapi dengan beberapa temuan kokoh:</p>
<ul>
<li>Ada bukti bahwa <span class="key">hard peg dikaitkan dengan inflasi lebih rendah</span>.</li>
<li>Bukti <em>beragam</em> tentang hard peg dan disiplin fiskal.</li>
<li>Ada bukti bahwa <span class="key">mata uang bersama meningkatkan perdagangan dan integrasi</span>, dan bahwa volatilitas nilai tukar menghambat perdagangan dan investasi.</li>
<li>Bukti <span class="key">kuat</span> bahwa derajat otonomi kebijakan moneter di bawah ER mengambang <em>terbatas dalam praktik</em> — "fear of floating": bahkan negara yang mendeklarasikan float pun banyak berintervensi.</li>
<li>Bukti <em>beragam</em> tentang rezim nilai tukar dan pertumbuhan.</li>
</ul>
<div class="tip">"Fear of floating" adalah inti empiris: dalam praktik sebagian besar bank sentral negara berkembang tidak membiarkan mata uangnya bergerak bebas, karena depresiasi begitu mahal lewat kanal neraca yang dibahas nanti di minggu ini.</div>`
            }
          },
          {
            title: { en: 'ER regimes and growth (Levy-Yeyati & Sturzenegger 2003)', id: 'Rezim ER dan pertumbuhan (Levy-Yeyati & Sturzenegger 2003)' },
            html: {
              en: `<p>On the growth question, using a <em>de facto</em> classification, <span class="key">Levy-Yeyati & Sturzenegger (2003)</span> find:</p>
<ul>
<li><span class="key">Developing countries</span> — <span class="key">less flexible exchange-rate regimes are associated with slower growth</span> and greater output volatility.</li>
<li><span class="key">Developed countries</span> — regimes do not appear to have any significant impact on growth.</li>
</ul>
<p>Whatever the ER regime is, it must be consistent with broader macroeconomic-policy objectives:</p>
<ul>
<li>The role of <span class="key">fiscal and monetary discipline</span>.</li>
<li>The <span class="key">capital-account regime</span> — the role of capital controls.</li>
<li>The choice of ER regime is of <span class="key">second-order importance</span> relative to building good fiscal–financial–monetary <em>institutions</em>, which are what really produce macroeconomic success.</li>
</ul>
<div class="note">Headline for the UAS: the regime label matters less than the institutions behind it. A peg with weak institutions still collapses; a float with strong institutions still anchors expectations.</div>`,
              id: `<p>Untuk soal pertumbuhan, dengan klasifikasi <em>de facto</em>, <span class="key">Levy-Yeyati & Sturzenegger (2003)</span> menemukan:</p>
<ul>
<li><span class="key">Negara berkembang</span> — <span class="key">rezim nilai tukar yang kurang fleksibel dikaitkan dengan pertumbuhan lebih lambat</span> dan volatilitas output lebih besar.</li>
<li><span class="key">Negara maju</span> — rezim tampaknya tidak berdampak signifikan terhadap pertumbuhan.</li>
</ul>
<p>Apa pun rezim ER-nya, ia harus konsisten dengan tujuan kebijakan makroekonomi yang lebih luas:</p>
<ul>
<li>Peran <span class="key">disiplin fiskal dan moneter</span>.</li>
<li><span class="key">Rezim akun modal</span> — peran kontrol modal.</li>
<li>Pemilihan rezim ER bersifat <span class="key">penting urutan-kedua</span> dibanding membangun <em>institusi</em> fiskal–finansial–moneter yang baik, yang sebenarnya menghasilkan keberhasilan makroekonomi.</li>
</ul>
<div class="note">Inti untuk UAS: label rezim kurang penting dibanding institusi di baliknya. Peg dengan institusi lemah tetap runtuh; float dengan institusi kuat tetap menjangkar ekspektasi.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Nominal, real & effective exchange rates', id: 'Kurs nominal, riil & efektif' },
        num: '4',
        cards: [
          {
            title: { en: 'Nominal vs real exchange rate', id: 'Kurs nominal vs riil' },
            html: {
              en: `<p><span class="key">Nominal exchange rate (NER / E)</span> — the standard exchange rate you see in markets, representing the price of one currency in terms of another. It does <em>not</em> account for differences in inflation or price levels between countries.</p>
<p><span class="key">Real exchange rate (RER)</span> — adjusts the nominal rate to reflect differences in price levels. It measures the relative price of goods between two countries, helping to assess <span class="key">purchasing power</span>:</p>
<div class="formula">$$\\text{Real Exchange Rate} = \\frac{\\text{Nominal Rate} \\times \\text{Foreign Price Level}}{\\text{Domestic Price Level}} = \\frac{e\\,P^*}{P}.$$</div>
<p>So $r = eP^*/P$ is the relative price of foreign goods in terms of domestic goods. A rise in $r$ (real depreciation) makes home goods cheaper abroad ⇒ tends to raise net exports — this is the channel the demand curve later in the week is built on.</p>`,
              id: `<p><span class="key">Kurs nominal (NER / E)</span> — kurs standar yang Anda lihat di pasar, merepresentasikan harga satu mata uang dalam mata uang lain. Ia <em>tidak</em> memperhitungkan perbedaan inflasi atau tingkat harga antarnegara.</p>
<p><span class="key">Kurs riil (RER)</span> — menyesuaikan kurs nominal untuk mencerminkan perbedaan tingkat harga. Ia mengukur harga relatif barang antardua negara, membantu menilai <span class="key">daya beli</span>:</p>
<div class="formula">$$\\text{Kurs Riil} = \\frac{\\text{Kurs Nominal} \\times \\text{Tingkat Harga Asing}}{\\text{Tingkat Harga Domestik}} = \\frac{e\\,P^*}{P}.$$</div>
<p>Jadi $r = eP^*/P$ adalah harga relatif barang asing dalam barang domestik. Kenaikan $r$ (depresiasi riil) membuat barang dalam negeri lebih murah di luar negeri ⇒ cenderung menaikkan ekspor neto — inilah kanal yang menjadi dasar kurva permintaan nanti di minggu ini.</p>`
            }
          },
          {
            title: { en: 'Effective exchange rate (NEER & REER)', id: 'Kurs efektif (NEER & REER)' },
            html: {
              en: `<p>An <span class="key">effective exchange rate</span> can be measured as nominal (<span class="key">NER</span>) or as the class model we simply use $E_t$, i.e. $r = eP^*/P$ (RER), and (REER, and effective (REER)).</p>
<ul>
<li><span class="key">RER</span> = E that takes into account the domestic price level (increased domestic price leads to appreciated RER).</li>
<li><span class="key">REER</span> = an index of a currency's value <em>relative to a group (or basket)</em> of other currencies, where the currencies in the basket are given weights based on the amount of trade between the countries that use the currencies. It is a trade-weighted exchange rate ⇒ it can be nominal (NEER) or real (REER).</li>
</ul>
<p>Why bother with the effective rate? A bilateral rate (rupiah/dollar) can hide what is happening to the currency overall. If the rupiah falls against the dollar but rises against the yen, euro and yuan, the <span class="key">trade-weighted</span> (effective) rate tells you whether the country has actually become more or less competitive on average.</p>
<div class="tip">Four labels to keep straight: <span class="key">NER</span> (one bilateral, nominal) · <span class="key">RER</span> (one bilateral, price-adjusted) · <span class="key">NEER</span> (basket, nominal) · <span class="key">REER</span> (basket, price-adjusted). The REER is the cleanest single measure of overall competitiveness.</div>`,
              id: `<p><span class="key">Kurs efektif</span> dapat diukur sebagai nominal (<span class="key">NER</span>) atau, dalam model kelas kita pakai $E_t$, yaitu $r = eP^*/P$ (RER), serta efektif (REER).</p>
<ul>
<li><span class="key">RER</span> = E yang memperhitungkan tingkat harga domestik (kenaikan harga domestik menyebabkan RER terapresiasi).</li>
<li><span class="key">REER</span> = indeks nilai mata uang <em>relatif terhadap kelompok (atau keranjang)</em> mata uang lain, di mana mata uang dalam keranjang diberi bobot berdasarkan jumlah perdagangan antarnegara yang memakai mata uang tersebut. Ia kurs tertimbang-perdagangan ⇒ bisa nominal (NEER) atau riil (REER).</li>
</ul>
<p>Mengapa repot dengan kurs efektif? Kurs bilateral (rupiah/dolar) bisa menyembunyikan apa yang terjadi pada mata uang secara keseluruhan. Bila rupiah jatuh terhadap dolar tetapi naik terhadap yen, euro, dan yuan, kurs <span class="key">tertimbang-perdagangan</span> (efektif) memberi tahu apakah negara benar-benar menjadi lebih atau kurang kompetitif rata-rata.</p>
<div class="tip">Empat label untuk dibedakan: <span class="key">NER</span> (satu bilateral, nominal) · <span class="key">RER</span> (satu bilateral, disesuaikan-harga) · <span class="key">NEER</span> (keranjang, nominal) · <span class="key">REER</span> (keranjang, disesuaikan-harga). REER adalah ukuran tunggal paling bersih untuk daya saing keseluruhan.</div>`
            }
          },
          {
            title: { en: 'Indonesia: NER vs REER (FRED data)', id: 'Indonesia: NER vs REER (data FRED)' },
            html: {
              en: `<p>The lecturer shows two FRED series for Indonesia:</p>
<ul>
<li><span class="key">NER</span> (rupiah per US dollar) — a long upward drift: roughly stable until the 1997–98 Asian crisis, when it spikes from ~2,000 toward ~15,000, then resumes a slow climb to ~16,929 by Mar 2026. A rising rupiah-per-dollar number means a <em>depreciating</em> rupiah.</li>
<li><span class="key">REER</span> (real broad effective rate, index 2020 = 100) — far more <em>mean-reverting</em>: it crashes during 1997–98 (toward ~45), recovers, and oscillates around 90–100, sitting at ~93.59 in Mar 2026.</li>
</ul>
<p>The contrast is the lesson. The <em>nominal</em> rate trends endlessly upward because Indonesian inflation has long exceeded US inflation — that secular drift is mostly a price-level story, not a competitiveness story. The <em>real effective</em> rate strips out the inflation differential and the basket weights, so it stays near its long-run mean: Indonesia's underlying competitiveness has been broadly stable, punctuated by the crisis collapse.</p>
<div class="note">Never read the headline rupiah/dollar number as "the rupiah keeps getting weaker in real terms." Most of that climb is just relative inflation. Use the REER to judge real competitiveness.</div>`,
              id: `<p>Dosen menampilkan dua seri FRED untuk Indonesia:</p>
<ul>
<li><span class="key">NER</span> (rupiah per dolar AS) — tren naik panjang: relatif stabil hingga krisis Asia 1997–98, ketika melonjak dari ~2.000 menuju ~15.000, lalu kembali naik perlahan ke ~16.929 pada Mar 2026. Angka rupiah-per-dolar yang naik berarti rupiah <em>terdepresiasi</em>.</li>
<li><span class="key">REER</span> (kurs efektif riil luas, indeks 2020 = 100) — jauh lebih <em>kembali-ke-rata-rata</em>: anjlok saat 1997–98 (menuju ~45), pulih, dan berosilasi di sekitar 90–100, berada di ~93,59 pada Mar 2026.</li>
</ul>
<p>Kontrasnya adalah pelajarannya. Kurs <em>nominal</em> tren naik tanpa henti karena inflasi Indonesia lama melampaui inflasi AS — tren sekuler itu sebagian besar cerita tingkat harga, bukan cerita daya saing. Kurs <em>efektif riil</em> membuang selisih inflasi dan bobot keranjang, sehingga tetap dekat rata-rata jangka panjangnya: daya saing dasar Indonesia secara luas stabil, diselingi keruntuhan krisis.</p>
<div class="note">Jangan pernah membaca angka utama rupiah/dolar sebagai "rupiah terus melemah secara riil." Sebagian besar kenaikan itu hanyalah inflasi relatif. Gunakan REER untuk menilai daya saing riil.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The balance-sheet effect', id: 'Efek neraca' },
        num: '5',
        cards: [
          {
            title: { en: 'Currency mismatch, maturity mismatch & the bad-debt spiral', id: 'Currency mismatch, maturity mismatch & spiral kredit macet' },
            html: {
              en: `<p>Now the core of the week. Look at a stylised balance sheet of commercial banks & non-banks. On the <span class="key">asset</span> side: USD assets, long-term local-currency (L/C) lending, and a bottom slice of <span class="key">bad debt</span>. On the <span class="key">liability</span> side: USD short-term borrowing on top, L/C deposits below. Three distinct vulnerabilities sit in this picture:</p>
<ol>
<li><span class="key">(1) Currency mismatch.</span> Liabilities are in USD ("short" foreign-currency position) while many assets and revenues are in local currency. When the rupiah <em>depreciates</em>, the local-currency value of USD debt jumps — the debt rises with the depreciation even though nothing real changed.</li>
<li><span class="key">(2) Maturity mismatch.</span> Short-term USD borrowing funds long-term local lending. If lenders refuse to roll over the short debt once a crisis hits, the firm/bank cannot liquidate its long assets fast enough ⇒ <span class="key">illiquidity</span>.</li>
<li><span class="key">(3) Collapsing demand & credit crunch.</span> The combined shock drives up <span class="key">non-performing loans (NPLs)</span>; the bad-debt slice grows, capital is eaten, lending contracts ⇒ a credit crunch that feeds back into the real economy.</li>
</ol>
<div class="tip">This is exactly why depreciation can be <span class="key">contractionary</span> in an emerging market: instead of boosting net exports, a weaker currency blows a hole in private-sector balance sheets through the USD-debt revaluation. Hold this three-part diagram — it is the visual heart of the week.</div>`,
              id: `<p>Sekarang inti minggu ini. Lihat neraca terstilisasi bank komersial & non-bank. Sisi <span class="key">aset</span>: aset USD, pinjaman jangka panjang mata uang lokal (L/C), dan irisan dasar <span class="key">kredit macet</span>. Sisi <span class="key">kewajiban</span>: pinjaman jangka pendek USD di atas, simpanan L/C di bawah. Tiga kerentanan berbeda ada dalam gambar ini:</p>
<ol>
<li><span class="key">(1) Currency mismatch.</span> Kewajiban dalam USD (posisi "short" mata uang asing) sementara banyak aset dan pendapatan dalam mata uang lokal. Ketika rupiah <em>terdepresiasi</em>, nilai utang USD dalam mata uang lokal melonjak — utang naik seiring depresiasi meski tak ada yang riil berubah.</li>
<li><span class="key">(2) Maturity mismatch.</span> Pinjaman jangka pendek USD mendanai pinjaman jangka panjang lokal. Bila pemberi pinjaman menolak menggulirkan utang pendek begitu krisis melanda, perusahaan/bank tak bisa melikuidasi aset panjangnya cukup cepat ⇒ <span class="key">illikuiditas</span>.</li>
<li><span class="key">(3) Permintaan ambruk & credit crunch.</span> Guncangan gabungan menaikkan <span class="key">kredit macet (NPL)</span>; irisan kredit macet membesar, modal tergerus, kredit menyusut ⇒ credit crunch yang berbalik memukul ekonomi riil.</li>
</ol>
<div class="tip">Inilah persis mengapa depresiasi bisa bersifat <span class="key">kontraktif</span> di negara berkembang: alih-alih mendorong ekspor neto, mata uang lebih lemah melubangi neraca sektor swasta lewat revaluasi utang USD. Pegang diagram tiga-bagian ini — ia adalah jantung visual minggu ini.</div>`
            }
          },
          {
            title: { en: 'Circular causality & the sovereign–bank nexus', id: 'Kausalitas melingkar & nexus sovereign–bank' },
            html: {
              en: `<p>The balance-sheet effect does not stay still — it feeds a <span class="key">self-reinforcing loop</span>. The lecturer's circular-causality diagram:</p>
<div class="formula">EXR collapse → deteriorated balance sheet → { capital outflows · stagnant investment } → severe recession → confidence deteriorates → (back to) EXR collapse</div>
<p>Each node makes the next worse, and the loop closes back on the exchange rate, so a single depreciation can spiral into a full-blown crisis. The <span class="key">sovereign–bank nexus</span> amplifies it: banks hold government bonds, the government backstops banks, so weakness in one infects the other — a sovereign downgrade hits bank balance sheets, and bank bailouts strain public finances. This is the <span class="key">vulnerability</span> that makes emerging-market crises so violent and so hard to stop once started.</p>
<div class="note">Why "fear of floating" is rational: a central bank that knows this loop exists will fight even a modest depreciation, because letting the currency go can tip the economy onto the vicious circle.</div>`,
              id: `<p>Efek neraca tidak diam — ia memberi makan <span class="key">lingkaran yang memperkuat diri</span>. Diagram kausalitas melingkar dosen:</p>
<div class="formula">Keruntuhan EXR → neraca memburuk → { arus modal keluar · investasi stagnan } → resesi parah → kepercayaan memburuk → (kembali ke) keruntuhan EXR</div>
<p>Setiap simpul memperburuk simpul berikutnya, dan lingkaran menutup kembali ke nilai tukar, sehingga satu depresiasi bisa berputar menjadi krisis penuh. <span class="key">Nexus sovereign–bank</span> memperkuatnya: bank memegang obligasi pemerintah, pemerintah menjamin bank, sehingga kelemahan di satu menulari yang lain — penurunan peringkat sovereign memukul neraca bank, dan dana talangan bank menekan keuangan publik. Inilah <span class="key">kerentanan</span> yang membuat krisis negara berkembang begitu keras dan sulit dihentikan begitu dimulai.</p>
<div class="note">Mengapa "fear of floating" rasional: bank sentral yang tahu lingkaran ini ada akan melawan bahkan depresiasi moderat, karena membiarkan mata uang jatuh bisa menjerumuskan ekonomi ke lingkaran setan.</div>`
            },
            chart: LOOP_CHART
          }
        ]
      },

      {
        heading: { en: 'Aggregate demand & the backward-bending curve', id: 'Permintaan agregat & kurva melengkung balik' },
        num: '6',
        cards: [
          {
            title: { en: 'Aggregate demand with the real exchange rate', id: 'Permintaan agregat dengan kurs riil' },
            html: {
              en: `<p>Start from the open-economy aggregate-demand identity and sign each term:</p>
<div class="formula">$Y = C + I + G + E - M$</div>
<div class="formula">$Y = C(\\underset{(+)}{Y-T}) + I(\\underset{(+)}{Y}, \\underset{(-)}{i}) + G + E(\\underset{(+)}{Y^*}, \\underset{(+)}{r}) - M(\\underset{(+)}{Y}, \\underset{(-)}{r})$</div>
<ul>
<li>Consumption rises with disposable income $Y-T$.</li>
<li>Investment rises with $Y$ but falls with the interest rate $i$.</li>
<li>Exports $E$ rise with foreign income $Y^*$ and with the real ER $r$ (a depreciation, $r\\uparrow$, makes home goods cheaper abroad).</li>
<li>Imports $M$ rise with $Y$ but fall with $r$ (a depreciation makes foreign goods dearer).</li>
</ul>
<p>Plotting $Y = f(Y, i, r)$ against $r$ with a vertical money supply $M^s$, the "standard" relationship is <span class="key">upward-sloping</span>: a real depreciation ($r\\uparrow$) raises net exports $E-M$ and so raises output. This is the textbook expansionary-depreciation result.</p>`,
              id: `<p>Mulai dari identitas permintaan agregat ekonomi terbuka dan beri tanda tiap suku:</p>
<div class="formula">$Y = C + I + G + E - M$</div>
<div class="formula">$Y = C(\\underset{(+)}{Y-T}) + I(\\underset{(+)}{Y}, \\underset{(-)}{i}) + G + E(\\underset{(+)}{Y^*}, \\underset{(+)}{r}) - M(\\underset{(+)}{Y}, \\underset{(-)}{r})$</div>
<ul>
<li>Konsumsi naik dengan pendapatan disposabel $Y-T$.</li>
<li>Investasi naik dengan $Y$ tetapi turun dengan suku bunga $i$.</li>
<li>Ekspor $E$ naik dengan pendapatan asing $Y^*$ dan dengan kurs riil $r$ (depresiasi, $r\\uparrow$, membuat barang lokal lebih murah di luar negeri).</li>
<li>Impor $M$ naik dengan $Y$ tetapi turun dengan $r$ (depresiasi membuat barang asing lebih mahal).</li>
</ul>
<p>Memplot $Y = f(Y, i, r)$ terhadap $r$ dengan penawaran uang $M^s$ vertikal, hubungan "standar"-nya <span class="key">miring ke atas</span>: depresiasi riil ($r\\uparrow$) menaikkan ekspor neto $E-M$ sehingga menaikkan output. Inilah hasil depresiasi-ekspansif buku teks.</p>`
            },
            chart: AD_CHART
          },
          {
            title: { en: 'The backward-bending curve (Df derivation)', id: 'Kurva melengkung balik (penurunan Df)' },
            html: {
              en: `<p>Now split domestic demand by who is doing the demanding. Total demand is domestic plus foreign:</p>
<div class="formula">$y = \\underbrace{D(y, i, eP^*/P)}_{\\text{domestic demand}} + \\underbrace{NX(eP^*/P, y)}_{\\text{foreign demand}}$</div>
<p>where domestic demand itself separates <span class="key">low-leverage firms</span> from <span class="key">high-leverage firms</span> (those with foreign-currency debt, constrained by their <span class="key">balance-sheet position</span>):</p>
<div class="formula">$D(y, i, eP^*/P) = Dd(y, i) + Df(\\cdot), \\qquad Df(\\cdot) = df(eP^*/P)\\cdot k(eP^*/P)$</div>
<p>where $k = \\#\\,\\text{of leverage firms}$. Substituting:</p>
<div class="formula">$y = Dd(y, i) + df(eP^*/P)\\cdot k(eP^*/P) + NX(eP^*/P, y)$</div>
<p>Differentiate the leveraged-firm demand with respect to $e$:</p>
<div class="formula">$\\dfrac{\\partial Df(eP^*/P)}{\\partial e} = \\Big[(P^*/P)\\,\\dfrac{\\partial df}{\\partial(eP^*/P)}\\,k\\Big] + \\Big[(P^*/P)\\,\\dfrac{\\partial k}{\\partial(eP^*/P)}\\,df\\Big]$</div>
<p>The <span class="key">second component is always $<0$</span> (depreciation kills off leveraged firms, $\\partial k/\\partial e < 0$). For the first component: when $e$ is <em>low</em>, $k$ is big and $\\partial df/\\partial(\\cdot)$ is positive; when $e$ is <em>high</em>, whether $k$ is big or small, $\\partial df/\\partial(\\cdot)$ is either $<0$ or only weakly positive because of the <span class="key">balance-sheet effect</span>. Somewhere in between there is a <span class="key">critical value of $e$</span> such that $\\partial Df(eP^*/P)/\\partial e$ turns $<0$, causing $dy/de < 0$ ⇒ a <span class="key">backward-bending curve (multiple equilibria)</span>.</p>`,
              id: `<p>Sekarang pisahkan permintaan domestik menurut siapa yang meminta. Permintaan total adalah domestik plus asing:</p>
<div class="formula">$y = \\underbrace{D(y, i, eP^*/P)}_{\\text{permintaan domestik}} + \\underbrace{NX(eP^*/P, y)}_{\\text{permintaan asing}}$</div>
<p>di mana permintaan domestik sendiri memisahkan <span class="key">perusahaan leverage-rendah</span> dari <span class="key">perusahaan leverage-tinggi</span> (yang berutang mata uang asing, dibatasi oleh <span class="key">posisi neraca</span> mereka):</p>
<div class="formula">$D(y, i, eP^*/P) = Dd(y, i) + Df(\\cdot), \\qquad Df(\\cdot) = df(eP^*/P)\\cdot k(eP^*/P)$</div>
<p>di mana $k = \\text{jumlah perusahaan leverage}$. Substitusi:</p>
<div class="formula">$y = Dd(y, i) + df(eP^*/P)\\cdot k(eP^*/P) + NX(eP^*/P, y)$</div>
<p>Diferensialkan permintaan perusahaan leverage terhadap $e$:</p>
<div class="formula">$\\dfrac{\\partial Df(eP^*/P)}{\\partial e} = \\Big[(P^*/P)\\,\\dfrac{\\partial df}{\\partial(eP^*/P)}\\,k\\Big] + \\Big[(P^*/P)\\,\\dfrac{\\partial k}{\\partial(eP^*/P)}\\,df\\Big]$</div>
<p><span class="key">Komponen kedua selalu $<0$</span> (depresiasi mematikan perusahaan leverage, $\\partial k/\\partial e < 0$). Untuk komponen pertama: saat $e$ <em>rendah</em>, $k$ besar dan $\\partial df/\\partial(\\cdot)$ positif; saat $e$ <em>tinggi</em>, apakah $k$ besar atau kecil, $\\partial df/\\partial(\\cdot)$ entah $<0$ atau hanya sedikit positif karena <span class="key">efek neraca</span>. Di antara keduanya ada <span class="key">nilai kritis $e$</span> sedemikian sehingga $\\partial Df(eP^*/P)/\\partial e$ menjadi $<0$, menyebabkan $dy/de < 0$ ⇒ <span class="key">kurva melengkung balik (multiple equilibria)</span>.</p>`
            },
            chart: BBC_CHART
          },
          {
            title: { en: 'Two cases: when depreciation expands vs contracts', id: 'Dua kasus: kapan depresiasi memperluas vs menyusutkan' },
            html: {
              en: `<p>The whole result reduces to a horse-race between the <span class="key">net-export channel</span> (always pulling output up when $r\\uparrow$) and the <span class="key">balance-sheet channel</span> (pulling investment down when leveraged firms are crushed by USD-debt revaluation). Which wins depends on the level of $r$:</p>
<ul>
<li><span class="key">Case 1 — Low $r$.</span> Only a few firms are balance-sheet constrained ⇒ the total <em>direct</em> effect of the real exchange rate on domestic demand is minor. The positive effect of $r$ on net exports <span class="key">dominates</span> ⇒ depreciation is expansionary ($dy/de > 0$).</li>
<li><span class="key">Case 2 — High $r$.</span> Firms with foreign debt are unable to invest ⇒ the total direct effect of $r$ on domestic demand is trivial at the margin, and the positive effect of $r$ on net exports may still dominate <em>or</em> be overwhelmed — in the bending region the balance-sheet collapse wins and $dy/de < 0$ (contractionary depreciation).</li>
</ul>
<div class="tip">UAS punchline: in a country with little foreign-currency debt, a depreciation is good news (more exports). In a country whose firms are loaded with USD debt, the same depreciation is bad news (balance sheets implode). The backward-bending curve is the formal way of saying "it depends on how leveraged the economy is" — and it explains why emerging markets fear depreciation that textbooks say should help them.</div>`,
              id: `<p>Seluruh hasil mengerucut menjadi adu-cepat antara <span class="key">kanal ekspor neto</span> (selalu menarik output naik saat $r\\uparrow$) dan <span class="key">kanal neraca</span> (menarik investasi turun saat perusahaan leverage dihancurkan revaluasi utang USD). Mana yang menang bergantung pada level $r$:</p>
<ul>
<li><span class="key">Kasus 1 — $r$ rendah.</span> Hanya sedikit perusahaan terkendala neraca ⇒ total efek <em>langsung</em> kurs riil pada permintaan domestik kecil. Efek positif $r$ pada ekspor neto <span class="key">mendominasi</span> ⇒ depresiasi bersifat ekspansif ($dy/de > 0$).</li>
<li><span class="key">Kasus 2 — $r$ tinggi.</span> Perusahaan berutang asing tak mampu berinvestasi ⇒ total efek langsung $r$ pada permintaan domestik sepele di marjin, dan efek positif $r$ pada ekspor neto mungkin masih mendominasi <em>atau</em> kewalahan — di wilayah lengkung, keruntuhan neraca menang dan $dy/de < 0$ (depresiasi kontraktif).</li>
</ul>
<div class="tip">Inti UAS: di negara dengan sedikit utang mata uang asing, depresiasi kabar baik (ekspor naik). Di negara yang perusahaannya sarat utang USD, depresiasi yang sama kabar buruk (neraca meledak). Kurva melengkung balik adalah cara formal untuk mengatakan "tergantung seberapa leverage ekonominya" — dan ia menjelaskan mengapa negara berkembang takut depresiasi yang menurut buku teks seharusnya menolong mereka.</div>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Exchange-rate & balance-sheet toolkit', id: 'Kit alat nilai tukar & neraca' },
        num: 'F',
        cards: [
          {
            title: { en: 'Exchange-rate definitions', id: 'Definisi nilai tukar' },
            html: {
              en: `<div class="formula">Real exchange rate: $\\;r = \\dfrac{e\\,P^*}{P}$ &nbsp;(relative price of foreign goods)</div>
<div class="formula">REER: trade-weighted basket of bilateral RERs, weights = trade shares</div>
<ul>
<li>$e$ — nominal exchange rate (home currency per unit of foreign)</li>
<li>$P^*$ — foreign price level · $P$ — domestic price level</li>
<li>$r\\uparrow$ = real depreciation ⇒ home goods cheaper abroad ⇒ $NX\\uparrow$</li>
</ul>
<p>NER (one bilateral, nominal) · RER (one bilateral, real) · NEER (basket, nominal) · REER (basket, real).</p>`,
              id: `<div class="formula">Kurs riil: $\\;r = \\dfrac{e\\,P^*}{P}$ &nbsp;(harga relatif barang asing)</div>
<div class="formula">REER: keranjang tertimbang-perdagangan dari RER bilateral, bobot = pangsa dagang</div>
<ul>
<li>$e$ — kurs nominal (mata uang domestik per unit asing)</li>
<li>$P^*$ — tingkat harga asing · $P$ — tingkat harga domestik</li>
<li>$r\\uparrow$ = depresiasi riil ⇒ barang lokal lebih murah di luar ⇒ $NX\\uparrow$</li>
</ul>
<p>NER (satu bilateral, nominal) · RER (satu bilateral, riil) · NEER (keranjang, nominal) · REER (keranjang, riil).</p>`
            }
          },
          {
            title: { en: 'UIP & peg sustainability', id: 'UIP & keberlanjutan peg' },
            html: {
              en: `<div class="formula">UIP: $\\;i = i^* + \\big(\\theta_{\\text{prem}} - \\dot{E}_t/E_t\\big)$</div>
<p>With a 50/50 belief in a 10% devaluation: $1.5(0\\%) + 0.5(10\\%) = 5\\%$ expected depreciation ⇒ domestic rate must rise ~5pp to hold the currency.</p>
<ul>
<li>Don't raise $i$ ⇒ capital outflows, overvalued ER, eventual collapse.</li>
<li>Raise $i$ (e.g. to 60%/yr) ⇒ recession risk; often the peg is abandoned anyway.</li>
</ul>`,
              id: `<div class="formula">UIP: $\\;i = i^* + \\big(\\theta_{\\text{prem}} - \\dot{E}_t/E_t\\big)$</div>
<p>Dengan keyakinan 50/50 atas devaluasi 10%: $1.5(0\\%) + 0.5(10\\%) = 5\\%$ depresiasi ekspektasi ⇒ suku bunga domestik harus naik ~5pp untuk menahan mata uang.</p>
<ul>
<li>Tak menaikkan $i$ ⇒ arus modal keluar, ER overvalued, keruntuhan akhirnya.</li>
<li>Menaikkan $i$ (mis. ke 60%/thn) ⇒ risiko resesi; sering peg tetap ditinggalkan.</li>
</ul>`
            }
          },
          {
            title: { en: 'Aggregate demand & backward-bending curve', id: 'Permintaan agregat & kurva melengkung balik' },
            html: {
              en: `<div class="formula">$Y = C(Y\\!-\\!T) + I(Y, i) + G + E(Y^*, r) - M(Y, r)$</div>
<div class="formula">$y = Dd(y,i) + df(eP^*/P)\\,k(eP^*/P) + NX(eP^*/P, y)$</div>
<div class="formula">$\\dfrac{\\partial Df}{\\partial e} = \\big[(P^*/P)\\tfrac{\\partial df}{\\partial(eP^*/P)}k\\big] + \\underbrace{\\big[(P^*/P)\\tfrac{\\partial k}{\\partial(eP^*/P)}df\\big]}_{<0\\ \\text{always}}$</div>
<ul>
<li>$Dd$ — low-leverage domestic demand · $Df = df\\cdot k$ — high-leverage demand</li>
<li>$k$ — number of leveraged (foreign-debt) firms; $\\partial k/\\partial e < 0$</li>
<li>Critical $e$: $\\partial Df/\\partial e < 0 \\Rightarrow dy/de < 0$ ⇒ backward-bending, multiple equilibria</li>
</ul>`,
              id: `<div class="formula">$Y = C(Y\\!-\\!T) + I(Y, i) + G + E(Y^*, r) - M(Y, r)$</div>
<div class="formula">$y = Dd(y,i) + df(eP^*/P)\\,k(eP^*/P) + NX(eP^*/P, y)$</div>
<div class="formula">$\\dfrac{\\partial Df}{\\partial e} = \\big[(P^*/P)\\tfrac{\\partial df}{\\partial(eP^*/P)}k\\big] + \\underbrace{\\big[(P^*/P)\\tfrac{\\partial k}{\\partial(eP^*/P)}df\\big]}_{<0\\ \\text{selalu}}$</div>
<ul>
<li>$Dd$ — permintaan domestik leverage-rendah · $Df = df\\cdot k$ — permintaan leverage-tinggi</li>
<li>$k$ — jumlah perusahaan leverage (utang asing); $\\partial k/\\partial e < 0$</li>
<li>$e$ kritis: $\\partial Df/\\partial e < 0 \\Rightarrow dy/de < 0$ ⇒ melengkung balik, multiple equilibria</li>
</ul>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Diagrams to memorise', id: 'Diagram untuk dihafal' },
        num: 'G',
        cards: [
          {
            title: { en: '1. The ER-regime spectrum', id: '1. Spektrum rezim ER' },
            html: {
              en: '<p>Four steps of increasing flexibility: hard peg → soft peg → managed float → free float. Use it to place any country (Indonesia = managed float) and to frame the de jure vs de facto debate.</p>',
              id: '<p>Empat langkah fleksibilitas menaik: hard peg → soft peg → managed float → free float. Pakai untuk menempatkan negara mana pun (Indonesia = managed float) dan membingkai debat de jure vs de facto.</p>'
            },
            chart: REGIME_CHART
          },
          {
            title: { en: '2. Aggregate demand with the real ER', id: '2. Permintaan agregat dengan ER riil' },
            html: {
              en: '<p>Upward $Y=f(Y,i,r)$ against a vertical $M^s$. The "standard" case: real depreciation ($r\\uparrow$) raises net exports and output. Draw this for the textbook expansionary-depreciation result before introducing the balance-sheet twist.</p>',
              id: '<p>$Y=f(Y,i,r)$ menaik terhadap $M^s$ vertikal. Kasus "standar": depresiasi riil ($r\\uparrow$) menaikkan ekspor neto dan output. Gambar ini untuk hasil depresiasi-ekspansif buku teks sebelum memperkenalkan belokan neraca.</p>'
            },
            chart: AD_CHART
          },
          {
            title: { en: '3. Backward-bending curve', id: '3. Kurva melengkung balik' },
            html: {
              en: '<p>The S-shaped $Y=F(Y,i,r)$ in $(Y, r)$ space. Low $r$: net-export channel dominates, $dy/de>0$. High $r$: balance-sheet channel ($\\partial Df/\\partial e<0$) dominates, $dy/de<0$ — the bend. The vertical $M^s$ can cross the curve in more than one place ⇒ multiple equilibria. This is the diagram for contractionary depreciation.</p>',
              id: '<p>$Y=F(Y,i,r)$ berbentuk S di ruang $(Y, r)$. $r$ rendah: kanal ekspor neto mendominasi, $dy/de>0$. $r$ tinggi: kanal neraca ($\\partial Df/\\partial e<0$) mendominasi, $dy/de<0$ — belokannya. $M^s$ vertikal bisa memotong kurva di lebih dari satu titik ⇒ multiple equilibria. Inilah diagram depresiasi kontraktif.</p>'
            },
            chart: BBC_CHART
          },
          {
            title: { en: '4. Circular causality loop', id: '4. Lingkaran kausalitas melingkar' },
            html: {
              en: '<p>EXR collapse → deteriorated balance sheet → capital outflows / stagnant investment → severe recession → confidence deteriorates → back to EXR collapse. The self-reinforcing loop behind crisis dynamics and the sovereign–bank nexus; draw it to explain why a depreciation can snowball into a full crisis.</p>',
              id: '<p>Keruntuhan EXR → neraca memburuk → arus modal keluar / investasi stagnan → resesi parah → kepercayaan memburuk → kembali ke keruntuhan EXR. Lingkaran yang memperkuat diri di balik dinamika krisis dan nexus sovereign–bank; gambar untuk menjelaskan mengapa depresiasi bisa membesar menjadi krisis penuh.</p>'
            },
            chart: LOOP_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Distinguish the de jure from the de facto classification of an exchange-rate regime, and explain why Reinhart & Rogoff (2004) thought it mattered.',
             id: 'Bedakan klasifikasi de jure dari de facto sebuah rezim nilai tukar, dan jelaskan mengapa Reinhart & Rogoff (2004) menganggapnya penting.' },
        answer: [
          { en: 'De jure = the regime the country declares to the IMF (its announced, institutional commitment). De facto = the regime the country actually operates, judged by how the rate behaves in practice.',
            id: 'De jure = rezim yang dideklarasikan negara kepada IMF (komitmen institusional yang diumumkan). De facto = rezim yang benar-benar dijalankan negara, dinilai dari perilaku kurs dalam praktik.' },
          { en: 'Reinhart & Rogoff showed the two often diverge: many countries that say they "float" actually crawl or hold the rate in narrow bands ("fear of floating"). So a classification based on words misstates the real monetary constraints a country faces; the IMF moved toward de facto labels (note how the same countries shift category between the IMF 2005 and 2013 tables).',
            id: 'Reinhart & Rogoff menunjukkan keduanya sering berbeda: banyak negara yang mengaku "mengambang" nyatanya merangkak atau menahan kurs dalam band sempit ("fear of floating"). Jadi klasifikasi berbasis ucapan salah menggambarkan kendala moneter riil; IMF bergeser ke label de facto (perhatikan negara yang sama berpindah kategori antara tabel IMF 2005 dan 2013).' }
        ],
        tip: { en: 'Two screening questions: institutional commitment? (yes ⇒ hard peg). Explicit intervention target? (yes ⇒ intermediate; no ⇒ float).',
               id: 'Dua pertanyaan penyaring: komitmen institusional? (ya ⇒ hard peg). Target intervensi eksplisit? (ya ⇒ menengah; tidak ⇒ float).' }
      },
      {
        type: 'quant',
        q: { en: 'A country pegs its currency. Markets put a 50% chance on holding the peg and 50% on a 10% devaluation. Using UIP with $i^*$ and no risk premium, by how much must the domestic rate rise to keep capital in, and what are the policymaker\'s two branches?',
             id: 'Sebuah negara mematok mata uangnya. Pasar memberi peluang 50% peg bertahan dan 50% devaluasi 10%. Dengan UIP dengan $i^*$ tanpa premi risiko, berapa kenaikan suku bunga domestik untuk menahan modal, dan apa dua cabang pilihan pembuat kebijakan?' },
        answer: [
          { en: 'Expected depreciation = $0.5\\times 0\\% + 0.5\\times 10\\% = 5\\%$. By UIP, $i$ must exceed $i^*$ by about 5 percentage points to compensate holders for the expected currency loss.',
            id: 'Depresiasi ekspektasi = $0.5\\times 0\\% + 0.5\\times 10\\% = 5\\%$. Menurut UIP, $i$ harus melebihi $i^*$ sekitar 5 poin persentase untuk mengompensasi ekspektasi kerugian mata uang.' },
          { en: 'Branch 1 — do not raise $i$: investors dump domestic bonds/currency ⇒ capital outflows, an overvalued ER, eventual collapse (then intervene + raise $i$, or abandon the peg — most common). Branch 2 — raise $i$ sharply (the premium can imply 5%/month ≈ 60%/year): this defends the peg but risks a severe recession, so the peg is often abandoned anyway. Either branch is painful — the core peg dilemma.',
            id: 'Cabang 1 — tidak menaikkan $i$: investor melepas obligasi/mata uang domestik ⇒ arus modal keluar, ER overvalued, keruntuhan akhirnya (lalu intervensi + naikkan $i$, atau lepas peg — paling umum). Cabang 2 — naikkan $i$ tajam (premi bisa berarti 5%/bulan ≈ 60%/tahun): ini mempertahankan peg tetapi berisiko resesi parah, sehingga peg sering tetap ditinggalkan. Kedua cabang menyakitkan — inilah dilema inti peg.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'Indonesia\'s nominal rupiah/dollar rate climbs for decades (to ~16,929 by 2026) while its REER stays near 90–100. Reconcile these two facts and say which one measures competitiveness.',
             id: 'Kurs nominal rupiah/dolar Indonesia naik selama puluhan tahun (ke ~16.929 pada 2026) sementara REER-nya tetap dekat 90–100. Damaikan kedua fakta ini dan sebutkan mana yang mengukur daya saing.' },
        answer: [
          { en: 'The nominal rate drifts up because Indonesian inflation has persistently exceeded US inflation; PPP forces the nominal rate to depreciate roughly by the inflation differential. That long climb is mostly a price-level phenomenon, not a loss of competitiveness.',
            id: 'Kurs nominal naik karena inflasi Indonesia terus melampaui inflasi AS; PPP memaksa kurs nominal terdepresiasi kira-kira sebesar selisih inflasi. Kenaikan panjang itu sebagian besar fenomena tingkat harga, bukan kehilangan daya saing.' },
          { en: 'The REER divides out the inflation differential and uses trade weights, so it is mean-reverting around its long-run level (~90–100), apart from the 1997–98 crash. Therefore the REER, not the headline NER, is the right gauge of real competitiveness — and it says Indonesia has been broadly competitive throughout, with the crisis as the one big real shock.',
            id: 'REER membagi-keluar selisih inflasi dan memakai bobot perdagangan, sehingga kembali-ke-rata-rata di sekitar level jangka panjangnya (~90–100), terlepas dari anjlok 1997–98. Karena itu REER, bukan NER utama, yang merupakan ukuran tepat daya saing riil — dan ia menyatakan Indonesia secara luas kompetitif sepanjang waktu, dengan krisis sebagai satu guncangan riil besar.' }
        ]
      },
      {
        type: 'scenario',
        q: { en: 'An emerging-market corporate sector funds long-term local-currency projects with short-term USD borrowing. A sudden 30% depreciation hits. Walk through the three balance-sheet vulnerabilities and explain why the depreciation is contractionary.',
             id: 'Sektor korporasi negara berkembang mendanai proyek jangka panjang mata uang lokal dengan pinjaman jangka pendek USD. Depresiasi mendadak 30% terjadi. Telusuri tiga kerentanan neraca dan jelaskan mengapa depresiasi bersifat kontraktif.' },
        answer: [
          { en: '(1) Currency mismatch: liabilities are USD but assets/revenues are local — the depreciation revalues the USD debt 30% higher in rupiah terms, so net worth falls even though nothing real changed ("short" FX position). (2) Maturity mismatch: short USD funding cannot be rolled over in the panic, but the local assets are long-term and illiquid ⇒ illiquidity/insolvency. (3) Collapsing demand & credit crunch: NPLs rise, the bad-debt slice grows, bank capital is eaten, lending contracts.',
            id: '(1) Currency mismatch: kewajiban USD tetapi aset/pendapatan lokal — depresiasi merevaluasi utang USD 30% lebih tinggi dalam rupiah, sehingga kekayaan bersih turun meski tak ada yang riil berubah (posisi valas "short"). (2) Maturity mismatch: pendanaan USD pendek tak bisa digulirkan saat panik, tetapi aset lokal jangka panjang dan tak likuid ⇒ illikuiditas/insolvensi. (3) Permintaan ambruk & credit crunch: NPL naik, irisan kredit macet membesar, modal bank tergerus, kredit menyusut.' },
          { en: 'Instead of the textbook export boost, the depreciation destroys leveraged firms\' balance sheets, cuts investment, and triggers the circular-causality loop (EXR collapse → balance sheet → outflows/recession → confidence → EXR collapse), amplified by the sovereign–bank nexus. The net-export gain is overwhelmed by the balance-sheet loss ⇒ output falls ⇒ contractionary depreciation.',
            id: 'Alih-alih dorongan ekspor buku teks, depresiasi menghancurkan neraca perusahaan leverage, memotong investasi, dan memicu lingkaran kausalitas melingkar (keruntuhan EXR → neraca → outflow/resesi → kepercayaan → keruntuhan EXR), diperkuat nexus sovereign–bank. Keuntungan ekspor neto dikalahkan kerugian neraca ⇒ output turun ⇒ depresiasi kontraktif.' }
        ]
      },
      {
        type: 'quant',
        q: { en: 'Using $\\partial Df/\\partial e = [(P^*/P)\\,\\partial df/\\partial(eP^*/P)\\,k] + [(P^*/P)\\,\\partial k/\\partial(eP^*/P)\\,df]$, explain why the curve bends backward and identify the two cases (low vs high $r$).',
             id: 'Dengan $\\partial Df/\\partial e = [(P^*/P)\\,\\partial df/\\partial(eP^*/P)\\,k] + [(P^*/P)\\,\\partial k/\\partial(eP^*/P)\\,df]$, jelaskan mengapa kurva melengkung balik dan identifikasi dua kasus ($r$ rendah vs tinggi).' },
        answer: [
          { en: 'The second component is always negative because depreciation kills off leveraged firms ($\\partial k/\\partial e<0$). The first component is positive when $e$ is low (many firms, $\\partial df/\\partial(\\cdot)>0$) but turns weak or negative when $e$ is high because the balance-sheet effect chokes leveraged-firm spending.',
            id: 'Komponen kedua selalu negatif karena depresiasi mematikan perusahaan leverage ($\\partial k/\\partial e<0$). Komponen pertama positif saat $e$ rendah (banyak perusahaan, $\\partial df/\\partial(\\cdot)>0$) tetapi menjadi lemah atau negatif saat $e$ tinggi karena efek neraca mencekik belanja perusahaan leverage.' },
          { en: 'Case 1 (low $r$): few firms constrained ⇒ direct ER effect on domestic demand minor ⇒ the net-export channel dominates ⇒ $dy/de>0$ (expansionary). Case 2 (high $r$): foreign-debt firms cannot invest ⇒ at some critical $e$, $\\partial Df/\\partial e<0$ ⇒ $dy/de<0$ (contractionary). Between the two there is a bend, so a vertical $M^s$ can intersect the curve at multiple points ⇒ multiple equilibria.',
            id: 'Kasus 1 ($r$ rendah): sedikit perusahaan terkendala ⇒ efek ER langsung pada permintaan domestik kecil ⇒ kanal ekspor neto mendominasi ⇒ $dy/de>0$ (ekspansif). Kasus 2 ($r$ tinggi): perusahaan utang asing tak bisa berinvestasi ⇒ pada $e$ kritis tertentu, $\\partial Df/\\partial e<0$ ⇒ $dy/de<0$ (kontraktif). Di antara keduanya ada belokan, sehingga $M^s$ vertikal bisa memotong kurva di banyak titik ⇒ multiple equilibria.' }
        ],
        tip: { en: 'Backward-bending = the balance-sheet channel beating the net-export channel at high depreciation. It is the formal model of contractionary depreciation.',
               id: 'Melengkung balik = kanal neraca mengalahkan kanal ekspor neto saat depresiasi tinggi. Inilah model formal depresiasi kontraktif.' }
      },
      {
        type: 'concept',
        q: { en: 'List the advantages and disadvantages of fixed vs flexible exchange rates, and connect them to the policy trilemma.',
             id: 'Sebutkan keuntungan dan kerugian kurs tetap vs fleksibel, dan hubungkan dengan trilema kebijakan.' },
        answer: [
          { en: 'Fixed: + nominal anchor for monetary policy, + lower transaction costs and FX risk (more trade/investment); − loss of monetary autonomy, − loss of the ER as a shock absorber (output/employment bear adjustment), − loss of lender of last resort and seigniorage (dollarization), − speculative-attack risk.',
            id: 'Tetap: + jangkar nominal kebijakan moneter, + biaya transaksi dan risiko valas lebih rendah (lebih banyak dagang/investasi); − kehilangan otonomi moneter, − kehilangan ER sebagai peredam guncangan (output/lapangan kerja menanggung penyesuaian), − kehilangan lender of last resort dan seigniorage (dolarisasi), − risiko serangan spekulatif.' },
          { en: 'Flexible: + monetary-policy independence, + automatic adjustment to trade shocks; − exchange-rate uncertainty, − need for a less obvious nominal anchor (inflation consequences), − speculative-bubble risk. The symmetry is the trilemma: with free capital mobility you must choose between a fixed rate and monetary autonomy — a peg buys the anchor but surrenders autonomy and shock absorption; a float does the reverse.',
            id: 'Fleksibel: + independensi kebijakan moneter, + penyesuaian otomatis terhadap guncangan dagang; − ketidakpastian nilai tukar, − perlu jangkar nominal yang kurang jelas (konsekuensi inflasi), − risiko gelembung spekulatif. Simetrinya adalah trilema: dengan mobilitas modal bebas Anda harus memilih antara kurs tetap dan otonomi moneter — peg membeli jangkar tetapi menyerahkan otonomi dan peredaman guncangan; float sebaliknya.' }
        ]
      }
    ]
  };
})();
