/* ============================================================================
   EKINTER · UAS 2024 (English) — International Economics Final Exam.
   ECEU603200 · 5 June 2024 · 3 hours. Faithful 1:1 transcription. Bilingual EN+ID.
   Format: ESSAY/analysis exam — 3 COMPULSORY + 3 OPTIONAL (pick 2); 20 pts each;
   answer 5 questions total (max 100). NO official answer key was provided, so each
   answer below is a WORKED MODEL ANSWER from standard Krugman–Obstfeld–Melitz (KOM)
   and Feenstra–Taylor (FT) theory; flagged unofficial in the exam note.

   Charts are declarative EconChart specs — equilibria are COMPUTED from the line
   equations, so welfare regions are correct by construction.

   Q1 TARIFF GEOMETRY (Abuba ceramics), axes Q∈[0,80], P∈[0,200]:
     Supply  S : P = 50 + Q     (p1=[0,50],  p2=[80,130])
     Demand  D : P = 200 − 2Q    (p1=[0,200], p2=[75,50])
     Free-trade price  Pw = 60 → S at Q=10, D at Q=70, imports = 60
     Tariff price       Pt = 100 → S at Q=50, D at Q=50, imports = 0 (PROHIBITIVE!)
       (Autarky: 50+Q = 200−2Q ⇒ Q=50, P=100 — Pt equals the autarky price.)
     ⇒ CS loss = (70+50)/2 × 40 = 2400 ; PS gain = (10+50)/2 × 40 = 1200 ;
       gov't revenue = t × imports = 0 ; net welfare = 1200 − 2400 = −1200 (DWL).
       The net loss is the triangle E·(10,60)·(70,60): ½·60·40 = 1200.
   ============================================================================ */
(function () {
  window.EKINTER_EXAMS = window.EKINTER_EXAMS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16';
  var LOSS = 'rgba(192,57,43,.16)';   // deadweight loss (red)
  var GAIN = 'rgba(14,143,184,.16)';  // producer-surplus gain (teal)
  var REV  = 'rgba(217,138,22,.20)';  // government revenue (amber)

  /* ---- Q1 chart: Abuba ceramics — prohibitive 40% tariff welfare ---------- */
  var Q1CHART = { panels: [{
    title: 'Abuba ceramics: Pw=60 ⇒ Pt=100 (autarky) ⇒ imports → 0',
    w: 440, h: 320,
    x: { min: 0, max: 80, label: 'Q (m²)' }, y: { min: 0, max: 200, label: 'P (Rp000/m²)' },
    curves: [
      { id: 'D',  kind: 'line', p1: [0, 200], p2: [75, 50],  color: RED,  label: 'D' },
      { id: 'S',  kind: 'line', p1: [0, 50],  p2: [80, 130], color: TEAL, label: 'S' },
      { id: 'Pw', kind: 'hline', y: 60,  color: LINE,  label: 'P_w = 60' },
      { id: 'Pt', kind: 'hline', y: 100, color: AMBER, label: 'P_t = 100' }
    ],
    areas: [
      // producer-surplus gain (between S and the two prices, Q from 0→10 then up to 50)
      { pts: [[0, 60], [0, 100], [50, 100], [10, 60]], fill: GAIN, label: 'PS gain' },
      // net deadweight-loss triangle E·(10,60)·(70,60)  = ½·60·40 = 1200
      { pts: [[10, 60], [70, 60], [50, 100]], fill: LOSS, label: 'net DWL' }
    ],
    points: [
      { on: ['S', 'Pw'], guideX: 'Q_s¹=10', dot: true },
      { on: ['D', 'Pw'], guideX: 'Q_d¹=70', dot: true },
      { on: ['S', 'D'],  label: 'E (50,100)', dot: true }
    ],
    notes: [
      { x: 40, y: 50, text: 'free-trade imports = 60', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Q3(b) chart: J-curve after a depreciation -------------------------- */
  var JCURVE = { panels: [{
    title: 'J-curve: trade balance dips before it rises',
    w: 440, h: 300,
    x: { min: 0, max: 10, label: 't (time)' }, y: { min: -4, max: 6, label: 'Trade balance' },
    curves: [
      { id: 'TB0', kind: 'hline', y: 0, color: '#999' },
      { kind: 'path', pts: [[0, 1], [1, 1], [2, -2.5], [4, -1.5], [6, 1.5], [9, 4.5]], smooth: true, color: TEAL, label: 'TB(t)' }
    ],
    points: [ { at: [1, 1], label: 'depreciation' } ],
    notes: [
      { x: 2.4, y: -3.4, text: 'short run: prices sticky, value of imports ↑', color: '#777', anchor: 'middle', size: 10 },
      { x: 6.8, y: 3.4, text: 'long run: volumes adjust, NX ↑ (M-L holds)', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Q4 chart: CA vs REER co-movement (intervene vs float) -------------- */
  var Q4CHART = { panels: [
    { title: 'Floating: REER absorbs the shock; CA mean-reverts',
      w: 360, h: 270, x: { min: 0, max: 10, label: 't' }, y: { min: -4, max: 6, label: 'index' },
      curves: [
        { id: 'z', kind: 'hline', y: 0, color: '#999' },
        { kind: 'path', pts: [[0, 4], [2, 1], [4, -1.5], [6, -1], [8, 0.5], [10, 1.5]], smooth: true, color: LINE, label: 'REER' },
        { kind: 'path', pts: [[0, -2.5], [2, -1], [4, 1.5], [6, 1], [8, -0.5], [10, -1]], smooth: true, color: TEAL, label: 'CA' }
      ] },
    { title: 'Managed: REER held flat; CA persists (surplus)',
      w: 360, h: 270, x: { min: 0, max: 10, label: 't' }, y: { min: -4, max: 6, label: 'index' },
      curves: [
        { id: 'z2', kind: 'hline', y: 0, color: '#999' },
        { id: 'flat', kind: 'hline', y: 0.4, color: LINE, label: 'REER (pegged)' },
        { kind: 'path', pts: [[0, 2.5], [2, 3], [4, 3.2], [6, 3.4], [8, 3.3], [10, 3.5]], smooth: true, color: TEAL, label: 'CA surplus' }
      ] }
  ] };

  /* ---- Q5 chart: monetary expansion ⇒ depreciation (money mkt + FX) ------- */
  var Q5CHART = { panels: [
    { title: '(1) Money market: M↑ ⇒ i↓', w: 360, h: 270,
      x: { min: 0, max: 10, label: 'M/P' }, y: { min: 0, max: 10, label: 'i (Rp rate)' },
      curves: [
        { id: 'L',  kind: 'line', p1: [1, 8.5], p2: [9, 1.5], color: RED, label: 'L(i,Y)' },
        { id: 'M1', kind: 'vline', x: 4, color: TEAL, label: 'Mˢ₁' },
        { id: 'M2', kind: 'vline', x: 7, color: TEAL, label: 'Mˢ₂', dash: true }
      ],
      points: [ { on: ['L', 'M1'], guideY: 'i₁', dot: true }, { on: ['L', 'M2'], guideY: 'i₂', dot: true } ],
      shifts: [ { from: 'M1', to: 'M2' } ] },
    { title: '(2) FX (UIP): i↓ ⇒ E↑ (rupiah depreciates)', w: 360, h: 270,
      x: { min: 0, max: 10, label: 'Rp return' }, y: { min: 0, max: 10, label: 'E (Rp/US$)' },
      curves: [
        { id: 'R',  kind: 'vline', x: 6, color: TEAL, label: 'Rp return' },
        { id: 'R2', kind: 'vline', x: 4, color: TEAL, label: "Rp return'", dash: true },
        { id: 'FX', kind: 'line', p1: [1, 1], p2: [9, 9], color: RED, label: 'expected $ return' }
      ],
      points: [ { on: ['FX', 'R'], guideY: 'E₁', dot: true }, { on: ['FX', 'R2'], guideY: 'E₂', dot: true } ],
      shifts: [ { from: 'R', to: 'R2' } ] }
  ] };

  /* ---- Q6 chart: tariff vs quota vs state-trading (rice imports) ---------- */
  // Domestic D : P = 10 − Q ; S : P = Q ; Pw = 3 ; tariff/quota price = 4.
  var Q6CHART = { panels: [
    { title: '(a) Free trade at P_w = world price', w: 300, h: 250,
      x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
      curves: [
        { id: 'D',  kind: 'line', p1: [1, 9], p2: [9, 1], color: RED,  label: 'D' },
        { id: 'S',  kind: 'line', p1: [1, 1], p2: [9, 9], color: TEAL, label: 'S' },
        { id: 'Pw', kind: 'hline', y: 3, color: LINE, label: 'P_w' }
      ],
      points: [ { on: ['S', 'Pw'], guideX: 'Q_s', dot: true }, { on: ['D', 'Pw'], guideX: 'Q_d', dot: true } ] },
    { title: '(b) Tariff/quota: P↑ to 4, DWL = b + d', w: 300, h: 250,
      x: { min: 0, max: 10, label: 'Q' }, y: { min: 0, max: 10, label: 'P' },
      curves: [
        { id: 'D',  kind: 'line', p1: [1, 9], p2: [9, 1], color: RED,  label: 'D' },
        { id: 'S',  kind: 'line', p1: [1, 1], p2: [9, 9], color: TEAL, label: 'S' },
        { id: 'Pw', kind: 'hline', y: 3, color: LINE,  label: 'P_w' },
        { id: 'Pt', kind: 'hline', y: 4, color: AMBER, label: 'P_t' }
      ],
      areas: [
        { pts: [[3, 3], [4, 4], [4, 3]],         fill: LOSS, label: 'b' },
        { pts: [[4, 3], [4, 4], [6, 4], [6, 3]], fill: REV,  label: 'c' },
        { pts: [[6, 4], [7, 3], [6, 3]],         fill: LOSS, label: 'd' }
      ],
      points: [ { on: ['S', 'Pt'], guideX: 'Q_s′', dot: true }, { on: ['D', 'Pt'], guideX: 'Q_d′', dot: true } ] }
  ] };

  window.EKINTER_EXAMS['2024'] = {
    year: '2024',
    label: { en: 'UAS 2024', id: 'UAS 2024' },
    note: {
      en: 'Final Exam (UAS), International Economics ECEU603200 · 5 June 2024 · 3 hours · in English. Essay/analysis exam: 3 compulsory questions + 3 optional (choose 2); each worth 20 points; answer 5 questions for a maximum of 100. No official answer key was provided — the worked answers below are unofficial model answers based on standard Krugman–Obstfeld–Melitz and Feenstra–Taylor theory.',
      id: 'Ujian Akhir Semester (UAS), Ekonomi Internasional ECEU603200 · 5 Juni 2024 · 3 jam · berbahasa Inggris. Ujian esai/analisis: 3 soal wajib + 3 soal pilihan (pilih 2); masing-masing bernilai 20 poin; jawab 5 soal untuk maksimum 100. Tidak ada kunci jawaban resmi — jawaban terurai di bawah adalah jawaban model tidak resmi berdasarkan teori Krugman–Obstfeld–Melitz dan Feenstra–Taylor standar.'
    },
    sections: [

      /* ===================== COMPULSORY QUESTIONS ===================== */
      { kind: 'essay', label: { en: 'Compulsory questions', id: 'Soal wajib' }, questions: [

        /* ---------------------------- Q1 ---------------------------- */
        { n: 1,
          q: {
            en: '<p>The Abuba government is considering implementing a <strong>40% tariff</strong> on ceramic products to encourage the development of the domestic ceramic industry. This plan received protests from consumers and the property sector, which uses a lot of ceramic products. Studies conducted by consumer associations and the property sector found that the impact of implementing this tariff on welfare is shown in the graph below.</p>'
              + '<p>The graph assumes that the demand and supply functions for ceramics in Abuba country are: Supply (S): $P = 50 + Q$ and Demand $P = 200 - 2Q$. The average price of ceramic products is <strong>60 thousand per m²</strong> and the price after applying the tariff is <strong>100 thousand per m²</strong>.</p>'
              + '<p><strong>(a)</strong> [10 points] By looking at the graph above, calculate the impact of implementing this tariff on a) Consumers, b) Domestic Producers and c) Total Surplus (welfare). From this calculation, who benefits and suffers from the application of this tariff? Does the government gain acceptance of this policy? <em>(hint: whether there is an import or not)</em></p>'
              + '<p><strong>(b)</strong> [5 points] Why do you think a number of developing countries continue to apply high tariffs to a number of their strategic sectors using infant industry and import substitution arguments? Explain the pros and cons of this policy!</p>'
              + '<p><strong>(c)</strong> [5 points] Indonesia is currently implementing quite a lot of local content requirement policies such as TKDN (Domestic Component Level). A number of countries have raised objections to this policy, especially regarding TKDN on telecommunications products. In this regard, explain how the TKDN policy can influence (i) import flows (ii) decisions to use imported and domestic inputs, (iii) production costs and (iv) prices at the consumer level?</p>',
            id: '<p>Pemerintah Abuba sedang mempertimbangkan menerapkan <strong>tarif 40%</strong> atas produk keramik untuk mendorong perkembangan industri keramik domestik. Rencana ini mendapat protes dari konsumen dan sektor properti, yang banyak menggunakan produk keramik. Studi oleh asosiasi konsumen dan sektor properti menemukan dampak penerapan tarif ini terhadap kesejahteraan seperti pada grafik di bawah.</p>'
              + '<p>Grafik mengasumsikan fungsi permintaan dan penawaran keramik di negara Abuba: Penawaran (S): $P = 50 + Q$ dan Permintaan $P = 200 - 2Q$. Harga rata-rata produk keramik adalah <strong>60 ribu per m²</strong> dan harga setelah penerapan tarif adalah <strong>100 ribu per m²</strong>.</p>'
              + '<p><strong>(a)</strong> [10 poin] Dengan melihat grafik di atas, hitunglah dampak penerapan tarif ini terhadap a) Konsumen, b) Produsen Domestik, dan c) Total Surplus (kesejahteraan). Dari perhitungan ini, siapa yang diuntungkan dan dirugikan oleh penerapan tarif ini? Apakah pemerintah memperoleh penerimaan dari kebijakan ini? <em>(petunjuk: apakah ada impor atau tidak)</em></p>'
              + '<p><strong>(b)</strong> [5 poin] Mengapa menurut Anda sejumlah negara berkembang terus menerapkan tarif tinggi pada beberapa sektor strategis mereka dengan argumen industri bayi (infant industry) dan substitusi impor? Jelaskan pro dan kontra kebijakan ini!</p>'
              + '<p><strong>(c)</strong> [5 poin] Indonesia saat ini menerapkan cukup banyak kebijakan kandungan lokal seperti TKDN (Tingkat Komponen Dalam Negeri). Sejumlah negara mengajukan keberatan atas kebijakan ini, terutama mengenai TKDN pada produk telekomunikasi. Terkait hal ini, jelaskan bagaimana kebijakan TKDN dapat memengaruhi (i) arus impor (ii) keputusan menggunakan input impor dan domestik, (iii) biaya produksi, dan (iv) harga di tingkat konsumen?</p>'
          },
          qChart: Q1CHART,
          answer: {
            en: '<div class="note">(no official answer key — model answer using standard KOM/FT trade-policy welfare analysis)</div>'
              + '<p><strong>(a) Welfare arithmetic.</strong> First locate quantities at each price. Supply $Q_s = P - 50$; demand $Q_d = (200-P)/2 = 100 - P/2$.</p>'
              + '<table><tr><th>Price</th><th>$Q_s$</th><th>$Q_d$</th><th>Imports</th></tr>'
              + '<tr><td>$P_w = 60$ (free trade)</td><td>$10$</td><td>$70$</td><td>$60$</td></tr>'
              + '<tr><td>$P_t = 100$ (after tariff)</td><td>$50$</td><td>$50$</td><td>$0$</td></tr></table>'
              + '<div class="tip">The autarky equilibrium solves $50+Q = 200-2Q \\Rightarrow Q=50,\\ P=100$. So $P_t=100$ <span class="key">equals the autarky price</span> — the tariff is <span class="key">prohibitive</span> and imports collapse to zero. This is the point of the hint.</div>'
              + '<p><strong>a) Consumers (CS loss).</strong> Price rises $60\\to100$, quantity falls $70\\to50$. The lost consumer surplus is the trapezoid under $D$:</p>'
              + '<div class="formula">$\\Delta CS = -\\tfrac{(70+50)}{2}\\times(100-60) = -\\tfrac{120}{2}\\times 40 = $ <span class="key">$-2{,}400$</span> (thousand-Rp units)</div>'
              + '<p><strong>b) Domestic producers (PS gain).</strong> Price rises $60\\to100$, output rises $10\\to50$. The gain is the trapezoid above $S$:</p>'
              + '<div class="formula">$\\Delta PS = +\\tfrac{(10+50)}{2}\\times(100-60) = +\\tfrac{60}{2}\\times 40 = $ <span class="key">$+1{,}200$</span></div>'
              + '<p><strong>c) Government & total surplus.</strong> Because imports are <span class="key">zero</span> at $P_t=100$, tariff revenue $= t \\times \\text{imports} = 0$. Net welfare:</p>'
              + '<div class="formula">$\\Delta W = \\Delta PS + \\Delta CS + \\text{Rev} = 1{,}200 - 2{,}400 + 0 = $ <span class="key">$-1{,}200$</span> (deadweight loss)</div>'
              + '<p>This net loss is exactly the triangle bounded by $D$, $S$ and $P_w$: $\\tfrac12 \\times \\text{base }60 \\times \\text{height }40 = 1{,}200$ — the production-distortion plus consumption-distortion triangles, with no terms-of-trade offset (Abuba is a small country).</p>'
              + '<p><span class="key">Who wins / loses:</span> domestic ceramic producers gain (+1,200); consumers and the property sector lose (−2,400). The government collects <span class="key">no revenue</span> because the prohibitive tariff kills imports. Net, society is worse off by 1,200. So the government should <span class="key">not</span> expect broad acceptance: the losers (large consumer/property base) lose more than the producers gain, and the treasury gets nothing.</p>'
              + '<p><strong>(b) Infant-industry & import-substitution: pros and cons.</strong></p>'
              + '<ul><li><span class="key">Pros.</span> A young industry with a learning curve or economies of scale may be unprofitable at first but competitive later; temporary protection lets it grow (dynamic comparative advantage). It can support strategic/national-security sectors, build domestic capability, create jobs, and reduce dependence on imports/foreign exchange.</li>'
              + '<li><span class="key">Cons.</span> Protection is hard to remove — firms lobby to keep it (rent-seeking) and never become efficient; consumers pay higher prices indefinitely; resources are mis-allocated away from true comparative advantage; protected firms lack the competitive pressure to innovate. The argument only holds if the future efficiency gain exceeds the present-value of the protection cost <em>and</em> the market failure (credit constraints / spillovers) genuinely prevents private firms from financing the learning themselves.</li></ul>'
              + '<p><strong>(c) TKDN (local content requirement) effects.</strong></p>'
              + '<ul><li><span class="key">(i) Import flows:</span> requiring a minimum share of domestic content <span class="key">reduces imports</span> of the components/inputs that must now be sourced locally.</li>'
              + '<li><span class="key">(ii) Input choice:</span> firms are forced to substitute <span class="key">domestic inputs for imported ones</span> even when imports are cheaper or better, distorting the input mix away from least-cost sourcing.</li>'
              + '<li><span class="key">(iii) Production costs:</span> if local inputs are more expensive or lower quality, <span class="key">production costs rise</span> (a hidden tax on the producer).</li>'
              + '<li><span class="key">(iv) Consumer prices:</span> higher costs are passed through, so <span class="key">consumer prices rise</span> and/or product variety/quality falls — much like a tariff on intermediate inputs, which is why trading partners object to TKDN on telecom products.</li></ul>',
            id: '<div class="note">(tidak ada kunci jawaban resmi — jawaban model memakai analisis kesejahteraan kebijakan perdagangan KOM/FT standar)</div>'
              + '<p><strong>(a) Aritmetika kesejahteraan.</strong> Pertama tentukan kuantitas di tiap harga. Penawaran $Q_s = P - 50$; permintaan $Q_d = (200-P)/2 = 100 - P/2$.</p>'
              + '<table><tr><th>Harga</th><th>$Q_s$</th><th>$Q_d$</th><th>Impor</th></tr>'
              + '<tr><td>$P_w = 60$ (perdagangan bebas)</td><td>$10$</td><td>$70$</td><td>$60$</td></tr>'
              + '<tr><td>$P_t = 100$ (setelah tarif)</td><td>$50$</td><td>$50$</td><td>$0$</td></tr></table>'
              + '<div class="tip">Keseimbangan autarki: $50+Q = 200-2Q \\Rightarrow Q=50,\\ P=100$. Jadi $P_t=100$ <span class="key">sama dengan harga autarki</span> — tarifnya <span class="key">bersifat melarang (prohibitive)</span> dan impor anjlok ke nol. Inilah inti petunjuk soal.</div>'
              + '<p><strong>a) Konsumen (kehilangan CS).</strong> Harga naik $60\\to100$, kuantitas turun $70\\to50$. Surplus konsumen yang hilang adalah trapesium di bawah $D$:</p>'
              + '<div class="formula">$\\Delta CS = -\\tfrac{(70+50)}{2}\\times(100-60) = -\\tfrac{120}{2}\\times 40 = $ <span class="key">$-2.400$</span> (satuan ribu Rp)</div>'
              + '<p><strong>b) Produsen domestik (perolehan PS).</strong> Harga naik $60\\to100$, output naik $10\\to50$. Perolehannya adalah trapesium di atas $S$:</p>'
              + '<div class="formula">$\\Delta PS = +\\tfrac{(10+50)}{2}\\times(100-60) = +\\tfrac{60}{2}\\times 40 = $ <span class="key">$+1.200$</span></div>'
              + '<p><strong>c) Pemerintah & total surplus.</strong> Karena impor <span class="key">nol</span> pada $P_t=100$, penerimaan tarif $= t \\times \\text{impor} = 0$. Kesejahteraan neto:</p>'
              + '<div class="formula">$\\Delta W = \\Delta PS + \\Delta CS + \\text{Penerimaan} = 1.200 - 2.400 + 0 = $ <span class="key">$-1.200$</span> (kerugian baku/DWL)</div>'
              + '<p>Kerugian neto ini persis segitiga yang dibatasi $D$, $S$, dan $P_w$: $\\tfrac12 \\times \\text{alas }60 \\times \\text{tinggi }40 = 1.200$ — segitiga distorsi produksi plus distorsi konsumsi, tanpa kompensasi nilai tukar perdagangan (Abuba negara kecil).</p>'
              + '<p><span class="key">Siapa untung / rugi:</span> produsen keramik domestik untung (+1.200); konsumen dan sektor properti rugi (−2.400). Pemerintah <span class="key">tidak memperoleh penerimaan</span> karena tarif prohibitif mematikan impor. Secara neto, masyarakat lebih buruk sebesar 1.200. Maka pemerintah <span class="key">tidak</span> sebaiknya mengharapkan penerimaan luas: pihak yang rugi (basis konsumen/properti yang besar) rugi lebih banyak daripada perolehan produsen, dan kas negara tidak mendapat apa-apa.</p>'
              + '<p><strong>(b) Industri bayi & substitusi impor: pro dan kontra.</strong></p>'
              + '<ul><li><span class="key">Pro.</span> Industri muda dengan kurva pembelajaran atau skala ekonomi mungkin tidak menguntungkan di awal tetapi kompetitif kelak; proteksi sementara membiarkannya tumbuh (keunggulan komparatif dinamis). Dapat menopang sektor strategis/keamanan nasional, membangun kapabilitas domestik, menciptakan lapangan kerja, dan mengurangi ketergantungan impor/devisa.</li>'
              + '<li><span class="key">Kontra.</span> Proteksi sulit dicabut — perusahaan melobi mempertahankannya (perburuan rente) dan tak pernah menjadi efisien; konsumen membayar harga lebih tinggi tanpa batas waktu; sumber daya salah alokasi menjauh dari keunggulan komparatif sejati; perusahaan terlindungi kehilangan tekanan kompetitif untuk berinovasi. Argumen ini hanya valid bila perolehan efisiensi masa depan melebihi nilai sekarang biaya proteksi <em>dan</em> kegagalan pasar (kendala kredit / limpahan) benar-benar menghalangi swasta membiayai pembelajaran sendiri.</li></ul>'
              + '<p><strong>(c) Dampak TKDN (kandungan lokal).</strong></p>'
              + '<ul><li><span class="key">(i) Arus impor:</span> mensyaratkan minimum kandungan dalam negeri <span class="key">menurunkan impor</span> komponen/input yang kini wajib disuplai lokal.</li>'
              + '<li><span class="key">(ii) Pilihan input:</span> perusahaan dipaksa mengganti <span class="key">input domestik untuk input impor</span> walau impor lebih murah atau lebih baik, mendistorsi bauran input menjauh dari sumber berbiaya terendah.</li>'
              + '<li><span class="key">(iii) Biaya produksi:</span> jika input lokal lebih mahal atau berkualitas lebih rendah, <span class="key">biaya produksi naik</span> (pajak tersembunyi bagi produsen).</li>'
              + '<li><span class="key">(iv) Harga konsumen:</span> biaya lebih tinggi diteruskan, sehingga <span class="key">harga konsumen naik</span> dan/atau variasi/kualitas produk turun — mirip tarif atas input antara, itulah sebabnya mitra dagang berkeberatan atas TKDN produk telekomunikasi.</li></ul>'
          } },

        /* ---------------------------- Q2 ---------------------------- */
        { n: 2,
          q: {
            en: '<p><strong>(a)</strong> [4 points] Use the concept of Uncovered Interest Parity (UIP) and Purchasing Power Parity (PPP) to derive the Fisher Effect.</p>'
              + '<p><strong>(b)</strong> [3 points] Show that you can derive real interest rate parity from the Fisher Effect.</p>'
              + '<p><strong>(c)</strong> Consider the long-run policies in Denmark and Eurozone. Assume Denmark\'s money growth rate is currently <strong>6%</strong> and Denmark\'s output growth is <strong>4%</strong>. Meanwhile, Eurozone\'s money growth rate is <strong>5%</strong> and its output growth is <strong>3%</strong>. In addition, the world real interest rate is <strong>1.5%</strong>. Treat Denmark as home country and Eurozone as foreign country. Define the exchange rate as Denmark krone per euro, $E_{\\text{Kr}/\\text{€}}$.</p>'
              + '<p>(i) [2 points] Compute the inflation rate in Denmark.<br>'
              + '(ii) [2 points] Compute the inflation rate in Eurozone.<br>'
              + '(iii) [2 points] Compute the nominal interest rate in Denmark.<br>'
              + '(iv) [2 points] Compute the nominal interest rate in Eurozone.<br>'
              + '(v) [2 points] Compute the rate of depreciation of Denmark krone relative to Euro.<br>'
              + '(vi) [3 points] Suppose the European Central Bank (ECB) decreases its money growth rate from 5% to 4%. If Denmark does not change its money growth and there is no change in Denmark\'s output growth, what happens to Denmark\'s inflation rate, nominal interest rate, and the rate of depreciation of the Danish krone to the euro?</p>',
            id: '<p><strong>(a)</strong> [4 poin] Gunakan konsep Uncovered Interest Parity (UIP) dan Purchasing Power Parity (PPP) untuk menurunkan Efek Fisher (Fisher Effect).</p>'
              + '<p><strong>(b)</strong> [3 poin] Tunjukkan bahwa Anda dapat menurunkan paritas suku bunga riil dari Efek Fisher.</p>'
              + '<p><strong>(c)</strong> Tinjau kebijakan jangka panjang di Denmark dan Zona Euro. Asumsikan tingkat pertumbuhan uang Denmark saat ini <strong>6%</strong> dan pertumbuhan output Denmark <strong>4%</strong>. Sementara itu, pertumbuhan uang Zona Euro <strong>5%</strong> dan pertumbuhan outputnya <strong>3%</strong>. Selain itu, suku bunga riil dunia adalah <strong>1,5%</strong>. Perlakukan Denmark sebagai negara domestik dan Zona Euro sebagai negara asing. Definisikan nilai tukar sebagai krone Denmark per euro, $E_{\\text{Kr}/\\text{€}}$.</p>'
              + '<p>(i) [2 poin] Hitung tingkat inflasi di Denmark.<br>'
              + '(ii) [2 poin] Hitung tingkat inflasi di Zona Euro.<br>'
              + '(iii) [2 poin] Hitung suku bunga nominal di Denmark.<br>'
              + '(iv) [2 poin] Hitung suku bunga nominal di Zona Euro.<br>'
              + '(v) [2 poin] Hitung laju depresiasi krone Denmark relatif terhadap Euro.<br>'
              + '(vi) [3 poin] Misalkan Bank Sentral Eropa (ECB) menurunkan pertumbuhan uangnya dari 5% menjadi 4%. Jika Denmark tidak mengubah pertumbuhan uang dan tidak ada perubahan pertumbuhan output Denmark, apa yang terjadi pada tingkat inflasi Denmark, suku bunga nominal, dan laju depresiasi krone Denmark terhadap euro?</p>'
          },
          answer: {
            en: '<div class="note">(no official answer key — model answer using KOM long-run monetary approach: PPP + UIP + quantity theory)</div>'
              + '<p><strong>(a) Deriving the Fisher Effect.</strong> Start from the two parity conditions (home $=$ no subscript, foreign $= *$):</p>'
              + '<div class="formula">UIP: $\\;i - i^{*} = \\dfrac{E^{e}_{t+1}-E_t}{E_t}$ &nbsp;(expected depreciation)</div>'
              + '<div class="formula">Relative PPP: $\\;\\dfrac{E^{e}_{t+1}-E_t}{E_t} = \\pi^{e} - \\pi^{*e}$ &nbsp;(inflation differential)</div>'
              + '<p>Equate the right-hand sides (both equal expected depreciation):</p>'
              + '<div class="formula">$i - i^{*} = \\pi^{e} - \\pi^{*e}\\;\\Longrightarrow\\; \\boxed{i - \\pi^{e} = i^{*} - \\pi^{*e}}$</div>'
              + '<p>Rearranged for one country, $i = r + \\pi^{e}$ — the <span class="key">Fisher Effect</span>: a 1-point rise in expected inflation raises the nominal interest rate one-for-one (real rate unchanged).</p>'
              + '<p><strong>(b) Real interest parity from Fisher.</strong> Apply $i = r + \\pi^{e}$ to each country: $r = i - \\pi^{e}$ and $r^{*} = i^{*} - \\pi^{*e}$. From part (a), $i - \\pi^{e} = i^{*} - \\pi^{*e}$, therefore</p>'
              + '<div class="formula">$\\boxed{r = r^{*}}$ &nbsp;— expected real interest rates are equalised across countries (real interest parity).</div>'
              + '<p><strong>(c) Numbers.</strong> Long-run inflation = money growth − output growth ($\\pi = g_M - g_Y$); Fisher: $i = r + \\pi$ with world $r = 1.5\\%$; depreciation of Kr/€ = $\\pi_{DK} - \\pi_{EZ}$.</p>'
              + '<table><tr><th>Item</th><th>Value</th></tr>'
              + '<tr><td>(i) Denmark inflation $\\pi_{DK}=6\\%-4\\%$</td><td><span class="key">$2\\%$</span></td></tr>'
              + '<tr><td>(ii) Eurozone inflation $\\pi_{EZ}=5\\%-3\\%$</td><td><span class="key">$2\\%$</span></td></tr>'
              + '<tr><td>(iii) Denmark nominal rate $i_{DK}=1.5\\%+2\\%$</td><td><span class="key">$3.5\\%$</span></td></tr>'
              + '<tr><td>(iv) Eurozone nominal rate $i_{EZ}=1.5\\%+2\\%$</td><td><span class="key">$3.5\\%$</span></td></tr>'
              + '<tr><td>(v) Depreciation of Kr/€ $=\\pi_{DK}-\\pi_{EZ}=2\\%-2\\%$</td><td><span class="key">$0\\%$</span></td></tr></table>'
              + '<p>The krone neither appreciates nor depreciates: equal inflation differentials ⇒ a stable nominal exchange rate (relative PPP).</p>'
              + '<p><strong>(vi) ECB cuts Eurozone money growth $5\\%\\to4\\%$.</strong> This is a <span class="key">foreign</span> change; Denmark\'s own $g_M=6\\%$ and $g_Y=4\\%$ are unchanged, so:</p>'
              + '<ul><li>Denmark inflation: <span class="key">unchanged at $2\\%$</span> (depends only on Danish $g_M-g_Y$).</li>'
              + '<li>Denmark nominal interest rate: <span class="key">unchanged at $3.5\\%$</span> ($r+\\pi_{DK}$ both unchanged).</li>'
              + '<li>Eurozone inflation falls to $4\\%-3\\%=1\\%$, so depreciation of Kr/€ $=\\pi_{DK}-\\pi_{EZ}=2\\%-1\\%=$ <span class="key">$+1\\%$</span>. The krone now <span class="key">depreciates 1% per year</span> against the euro (the euro becomes a harder currency).</li></ul>',
            id: '<div class="note">(tidak ada kunci jawaban resmi — jawaban model memakai pendekatan moneter jangka panjang KOM: PPP + UIP + teori kuantitas)</div>'
              + '<p><strong>(a) Menurunkan Efek Fisher.</strong> Mulai dari dua kondisi paritas (domestik $=$ tanpa subskrip, asing $= *$):</p>'
              + '<div class="formula">UIP: $\\;i - i^{*} = \\dfrac{E^{e}_{t+1}-E_t}{E_t}$ &nbsp;(depresiasi yang diharapkan)</div>'
              + '<div class="formula">PPP relatif: $\\;\\dfrac{E^{e}_{t+1}-E_t}{E_t} = \\pi^{e} - \\pi^{*e}$ &nbsp;(selisih inflasi)</div>'
              + '<p>Samakan ruas kanan (keduanya sama dengan depresiasi yang diharapkan):</p>'
              + '<div class="formula">$i - i^{*} = \\pi^{e} - \\pi^{*e}\\;\\Longrightarrow\\; \\boxed{i - \\pi^{e} = i^{*} - \\pi^{*e}}$</div>'
              + '<p>Disusun ulang untuk satu negara, $i = r + \\pi^{e}$ — <span class="key">Efek Fisher</span>: kenaikan 1 poin inflasi yang diharapkan menaikkan suku bunga nominal satu lawan satu (suku bunga riil tetap).</p>'
              + '<p><strong>(b) Paritas suku bunga riil dari Fisher.</strong> Terapkan $i = r + \\pi^{e}$ untuk tiap negara: $r = i - \\pi^{e}$ dan $r^{*} = i^{*} - \\pi^{*e}$. Dari bagian (a), $i - \\pi^{e} = i^{*} - \\pi^{*e}$, sehingga</p>'
              + '<div class="formula">$\\boxed{r = r^{*}}$ &nbsp;— suku bunga riil yang diharapkan sama antarnegara (paritas suku bunga riil).</div>'
              + '<p><strong>(c) Angka.</strong> Inflasi jangka panjang = pertumbuhan uang − pertumbuhan output ($\\pi = g_M - g_Y$); Fisher: $i = r + \\pi$ dengan $r$ dunia $= 1,5\\%$; depresiasi Kr/€ = $\\pi_{DK} - \\pi_{EZ}$.</p>'
              + '<table><tr><th>Item</th><th>Nilai</th></tr>'
              + '<tr><td>(i) Inflasi Denmark $\\pi_{DK}=6\\%-4\\%$</td><td><span class="key">$2\\%$</span></td></tr>'
              + '<tr><td>(ii) Inflasi Zona Euro $\\pi_{EZ}=5\\%-3\\%$</td><td><span class="key">$2\\%$</span></td></tr>'
              + '<tr><td>(iii) Suku bunga nominal Denmark $i_{DK}=1,5\\%+2\\%$</td><td><span class="key">$3,5\\%$</span></td></tr>'
              + '<tr><td>(iv) Suku bunga nominal Zona Euro $i_{EZ}=1,5\\%+2\\%$</td><td><span class="key">$3,5\\%$</span></td></tr>'
              + '<tr><td>(v) Depresiasi Kr/€ $=\\pi_{DK}-\\pi_{EZ}=2\\%-2\\%$</td><td><span class="key">$0\\%$</span></td></tr></table>'
              + '<p>Krone tidak terapresiasi maupun terdepresiasi: selisih inflasi yang sama ⇒ nilai tukar nominal stabil (PPP relatif).</p>'
              + '<p><strong>(vi) ECB memangkas pertumbuhan uang Zona Euro $5\\%\\to4\\%$.</strong> Ini perubahan <span class="key">asing</span>; $g_M=6\\%$ dan $g_Y=4\\%$ Denmark sendiri tidak berubah, sehingga:</p>'
              + '<ul><li>Inflasi Denmark: <span class="key">tetap $2\\%$</span> (hanya bergantung pada $g_M-g_Y$ Denmark).</li>'
              + '<li>Suku bunga nominal Denmark: <span class="key">tetap $3,5\\%$</span> ($r+\\pi_{DK}$ keduanya tetap).</li>'
              + '<li>Inflasi Zona Euro turun ke $4\\%-3\\%=1\\%$, sehingga depresiasi Kr/€ $=\\pi_{DK}-\\pi_{EZ}=2\\%-1\\%=$ <span class="key">$+1\\%$</span>. Krone kini <span class="key">terdepresiasi 1% per tahun</span> terhadap euro (euro menjadi mata uang yang lebih kuat).</li></ul>'
          } },

        /* ---------------------------- Q3 ---------------------------- */
        { n: 3,
          q: {
            en: '<p>Local Currency Pressure: Asian Financial Crisis/AFC (1998), Global Financial Crisis/GFC (2008), Taper Tantrum (2013).</p>'
              + '<p><strong>(a)</strong> Due to the AFC, the Government of Indonesia must change its exchange rate policy regime from "devaluation" to "depreciation". What made them different? [5 points]</p>'
              + '<p><strong>(b)</strong> Due to the massive IDR (Indonesia Rupiah) per USD depreciation amidst the AFC, Indonesia was supposed to receive a high trade surplus, yet it did not. Why? Use the J-Curve concept to answer it. [5 points]</p>'
              + '<p><strong>(c)</strong> During the Global Financial Crisis (GFC) in 2008, the Real Exchange Rate (RER) of IDR per USD was more stable than that during the AFC in 1998. What factor makes RER stable? Apply the Law of One Price or Purchasing Power Parity (PPP) concept! [5 points]</p>'
              + '<p><strong>(d)</strong> From 2009 to 2012, IDR per USD was overvalued and ended with the Taper Tantrum in 2013. What is Taper Tantrum? Why did it happen to Indonesia? [5 points]</p>',
            id: '<p>Tekanan Mata Uang Lokal: Krisis Keuangan Asia/AFC (1998), Krisis Keuangan Global/GFC (2008), Taper Tantrum (2013).</p>'
              + '<p><strong>(a)</strong> Akibat AFC, Pemerintah Indonesia harus mengubah rezim kebijakan nilai tukar dari "devaluasi" menjadi "depresiasi". Apa yang membuat keduanya berbeda? [5 poin]</p>'
              + '<p><strong>(b)</strong> Akibat depresiasi besar IDR (Rupiah Indonesia) per USD saat AFC, Indonesia seharusnya menerima surplus perdagangan tinggi, tetapi tidak. Mengapa? Gunakan konsep Kurva-J untuk menjawabnya. [5 poin]</p>'
              + '<p><strong>(c)</strong> Selama Krisis Keuangan Global (GFC) 2008, Nilai Tukar Riil (RER) IDR per USD lebih stabil daripada saat AFC 1998. Faktor apa yang membuat RER stabil? Terapkan konsep Hukum Satu Harga (Law of One Price) atau Purchasing Power Parity (PPP)! [5 poin]</p>'
              + '<p><strong>(d)</strong> Dari 2009 hingga 2012, IDR per USD mengalami overvalued dan berakhir dengan Taper Tantrum 2013. Apa itu Taper Tantrum? Mengapa terjadi pada Indonesia? [5 poin]</p>'
          },
          answer: {
            en: '<div class="note">(no official answer key — model answer using KOM/FT exchange-rate theory + Marshall–Lerner / J-curve)</div>'
              + '<p><strong>(a) Devaluation vs depreciation.</strong> Both mean the home currency loses value, but the <span class="key">cause and regime differ</span>:</p>'
              + '<ul><li><span class="key">Devaluation</span> is a deliberate, official downward reset of the currency\'s value <em>under a fixed/pegged exchange-rate regime</em> — the government announces a new, lower peg.</li>'
              + '<li><span class="key">Depreciation</span> is a market-driven fall in the currency\'s value <em>under a floating regime</em> — supply and demand in the FX market move the rate, not a policy announcement.</li></ul>'
              + '<p>During the AFC, Indonesia abandoned its managed peg (it could no longer defend it as reserves drained), letting the rupiah <span class="key">float</span>. So the regime changed from a peg that could be "devalued" to a float where the currency "depreciates".</p>'
              + '<p><strong>(b) Why no immediate surplus — the J-curve.</strong> A depreciation only improves the trade balance if the <span class="key">Marshall–Lerner condition</span> holds (sum of import + export demand elasticities > 1). In the <span class="key">short run</span>, trade volumes are sticky (contracts pre-signed, habits, time to switch suppliers), so quantities barely move. Meanwhile the <span class="key">price</span> of imports (in rupiah) jumps immediately, so the rupiah value of imports rises faster than exports — the trade balance <span class="key">worsens first</span>. Only later, as volumes adjust (exports grow, imports shrink), does the balance improve, tracing a <span class="key">J shape</span>. For Indonesia, heavy dollar-priced import dependence and dollar debt made the initial dip deep and the recovery slow.</p>'
              + '<p><strong>(c) Why RER was more stable in 2008 — PPP / Law of One Price.</strong> The real exchange rate is $RER = \\dfrac{E \\cdot P^{*}}{P}$. Under (relative) PPP, if domestic prices rise in step with the nominal depreciation, $RER$ stays roughly constant. In 1998 the nominal collapse <span class="key">far outran</span> the price adjustment (overshooting), so $RER$ swung wildly. In 2008 Indonesia had <span class="key">lower and more stable inflation, stronger reserves, and sounder banks</span>, so the nominal move was smaller and prices/exchange rate moved more in line — keeping $RER$ near its PPP level (the Law of One Price held more closely for tradables).</p>'
              + '<p><strong>(d) Taper Tantrum.</strong> The "Taper Tantrum" was the 2013 surge in global bond yields and capital outflows from emerging markets after the US Federal Reserve signalled it would <span class="key">taper (slow) its quantitative-easing bond purchases</span>. Higher expected US returns pulled "hot money" out of EMs. Indonesia was hit because, from 2009–2012, large QE-driven capital <em>inflows</em> had pushed the rupiah to an <span class="key">overvalued</span> level and Indonesia ran a <span class="key">current-account deficit</span> financed by those flows (one of the "Fragile Five"). When the flows reversed, the rupiah <span class="key">depreciated sharply</span>, yields rose, and reserves fell — the correction of a previously overvalued currency.</p>',
            id: '<div class="note">(tidak ada kunci jawaban resmi — jawaban model memakai teori nilai tukar KOM/FT + Marshall–Lerner / kurva-J)</div>'
              + '<p><strong>(a) Devaluasi vs depresiasi.</strong> Keduanya berarti mata uang domestik kehilangan nilai, tetapi <span class="key">penyebab dan rezimnya berbeda</span>:</p>'
              + '<ul><li><span class="key">Devaluasi</span> adalah penurunan nilai mata uang secara resmi dan sengaja <em>di bawah rezim nilai tukar tetap/dipatok</em> — pemerintah mengumumkan patokan baru yang lebih rendah.</li>'
              + '<li><span class="key">Depresiasi</span> adalah penurunan nilai mata uang yang digerakkan pasar <em>di bawah rezim mengambang</em> — penawaran dan permintaan di pasar valas yang menggerakkan kurs, bukan pengumuman kebijakan.</li></ul>'
              + '<p>Saat AFC, Indonesia meninggalkan patokan terkelolanya (tak lagi sanggup mempertahankannya karena cadangan terkuras), membiarkan rupiah <span class="key">mengambang</span>. Maka rezim berubah dari patokan yang bisa "didevaluasi" menjadi mengambang di mana mata uang "terdepresiasi".</p>'
              + '<p><strong>(b) Mengapa tak langsung surplus — kurva-J.</strong> Depresiasi hanya memperbaiki neraca dagang bila <span class="key">kondisi Marshall–Lerner</span> berlaku (jumlah elastisitas permintaan impor + ekspor > 1). Dalam <span class="key">jangka pendek</span>, volume dagang lengket (kontrak telah ditandatangani, kebiasaan, butuh waktu ganti pemasok), sehingga kuantitas nyaris tak bergerak. Sementara <span class="key">harga</span> impor (dalam rupiah) langsung melonjak, sehingga nilai rupiah impor naik lebih cepat daripada ekspor — neraca dagang <span class="key">memburuk dulu</span>. Baru kemudian, ketika volume menyesuaikan (ekspor tumbuh, impor menyusut), neraca membaik, membentuk <span class="key">kurva J</span>. Bagi Indonesia, ketergantungan impor berdenominasi dolar dan utang dolar yang besar membuat lekukan awal dalam dan pemulihan lambat.</p>'
              + '<p><strong>(c) Mengapa RER lebih stabil pada 2008 — PPP / Hukum Satu Harga.</strong> Nilai tukar riil adalah $RER = \\dfrac{E \\cdot P^{*}}{P}$. Di bawah PPP (relatif), bila harga domestik naik seiring depresiasi nominal, $RER$ tetap kurang lebih konstan. Pada 1998 keruntuhan nominal <span class="key">jauh melampaui</span> penyesuaian harga (overshooting), sehingga $RER$ berayun liar. Pada 2008 Indonesia memiliki <span class="key">inflasi lebih rendah dan stabil, cadangan lebih kuat, dan perbankan lebih sehat</span>, sehingga gerak nominal lebih kecil dan harga/kurs bergerak lebih selaras — menjaga $RER$ dekat tingkat PPP-nya (Hukum Satu Harga lebih berlaku untuk barang yang diperdagangkan).</p>'
              + '<p><strong>(d) Taper Tantrum.</strong> "Taper Tantrum" adalah lonjakan imbal hasil obligasi global dan arus modal keluar dari pasar berkembang pada 2013 setelah The Fed AS memberi sinyal akan <span class="key">mengurangi (taper) pembelian obligasi pelonggaran kuantitatif (QE)</span>. Ekspektasi imbal hasil AS lebih tinggi menarik "uang panas" keluar dari pasar berkembang. Indonesia terpukul karena, pada 2009–2012, arus modal masuk besar berkat QE telah mendorong rupiah ke tingkat <span class="key">overvalued</span> dan Indonesia mengalami <span class="key">defisit transaksi berjalan</span> yang dibiayai arus tersebut (salah satu "Fragile Five"). Ketika arus berbalik, rupiah <span class="key">terdepresiasi tajam</span>, imbal hasil naik, dan cadangan turun — koreksi mata uang yang sebelumnya overvalued.</p>'
          },
          aChart: JCURVE },

      ] },

      /* ===================== OPTIONAL QUESTIONS ===================== */
      { kind: 'essay', label: { en: 'Optional questions (choose 2)', id: 'Soal pilihan (pilih 2)' }, questions: [

        /* ---------------------------- Q4 ---------------------------- */
        { n: 4,
          q: {
            en: '<p>[20 points] These four figures (below) are taken from real data from particular countries\' Central Banks. Their sources are Balance of Payment and Bank for International Settlements.</p>'
              + '<p>As we understand, the Current Account (CA) position indicates global demand for the country\'s product, while the Real Effective Exchange Rate (REER/RBEER) indicates local currency strength toward international currency.</p>'
              + '<p><strong>(a)</strong> Which country does not intervene in its currency level? Why? [10 points]</p>'
              + '<p><strong>(b)</strong> Why does the other country intervene with its currency level? Connect your answer to the impacts of undervalue or overvalue on the surplus or deficit of net exports (CA)! [10 points]</p>'
              + '<div class="note">The four central-bank charts (CA vs REER per country) are images in the original paper and are not reproduced in this transcription; the schematic below illustrates the two regimes the question contrasts.</div>',
            id: '<p>[20 poin] Keempat gambar (di bawah) diambil dari data riil Bank Sentral negara-negara tertentu. Sumbernya adalah Neraca Pembayaran dan Bank for International Settlements.</p>'
              + '<p>Seperti kita pahami, posisi Transaksi Berjalan (CA) menunjukkan permintaan global atas produk negara tersebut, sedangkan Nilai Tukar Efektif Riil (REER/RBEER) menunjukkan kekuatan mata uang lokal terhadap mata uang internasional.</p>'
              + '<p><strong>(a)</strong> Negara mana yang tidak melakukan intervensi pada tingkat mata uangnya? Mengapa? [10 poin]</p>'
              + '<p><strong>(b)</strong> Mengapa negara lain melakukan intervensi pada tingkat mata uangnya? Hubungkan jawaban Anda dengan dampak undervalue atau overvalue terhadap surplus atau defisit ekspor neto (CA)! [10 poin]</p>'
              + '<div class="note">Keempat grafik bank sentral (CA vs REER per negara) berupa gambar pada naskah asli dan tidak direproduksi dalam transkripsi ini; skema di bawah mengilustrasikan dua rezim yang dikontraskan soal.</div>'
          },
          qChart: Q4CHART,
          answer: {
            en: '<div class="note">(no official answer key — model answer reading the figures by the standard pattern of CA–REER co-movement)</div>'
              + '<p><strong>How to read the figures.</strong> Compare the time paths of CA and REER for each country:</p>'
              + '<ul><li>A <span class="key">non-intervening (floating)</span> country shows a REER that moves <em>freely</em> with market forces — it appreciates when the CA is in surplus and depreciates when in deficit. The exchange rate is the <span class="key">automatic adjustment mechanism</span>, so the CA tends to <span class="key">mean-revert toward balance</span>: surpluses and deficits do not persist for long because the REER offsets them.</li>'
              + '<li>An <span class="key">intervening (managed)</span> country shows a REER that stays <span class="key">flat / range-bound</span> even while the CA runs a large, <em>persistent</em> surplus (or deficit). A REER that does not move when fundamentals do is the fingerprint of intervention — the central bank is buying/selling foreign currency (accumulating reserves) to hold the rate.</li></ul>'
              + '<p><strong>(a) The non-intervening country</strong> is the one whose REER is <span class="key">volatile and tracks the CA</span> (appreciates with surplus, depreciates with deficit) and whose CA returns toward zero over time. Reason: with a true float, the central bank lets the market clear the FX market; the exchange rate, not reserves, absorbs external shocks, so it does not need to intervene.</p>'
              + '<p><strong>(b) The intervening country</strong> holds its REER deliberately <span class="key">undervalued</span> (kept below its market-clearing level) to support exports. Mechanism linking the currency to the CA:</p>'
              + '<div class="formula">$RER\\downarrow \\;(\\text{undervalued}) \\Rightarrow \\text{exports cheaper, imports dearer} \\Rightarrow NX\\uparrow \\Rightarrow \\text{CA surplus}$</div>'
              + '<div class="formula">$RER\\uparrow \\;(\\text{overvalued}) \\Rightarrow \\text{exports dearer, imports cheaper} \\Rightarrow NX\\downarrow \\Rightarrow \\text{CA deficit}$</div>'
              + '<p>By keeping the currency undervalued, the country sustains a <span class="key">persistent CA surplus</span> (export-led growth, reserve accumulation) instead of letting natural appreciation erode it. Conversely a country defending an <span class="key">overvalued</span> peg runs persistent deficits and burns reserves. The tell-tale sign in the figures is the <span class="key">flat REER alongside a non-zero, persistent CA</span> — only intervention can break the normal CA↔REER feedback.</p>',
            id: '<div class="note">(tidak ada kunci jawaban resmi — jawaban model membaca gambar dengan pola standar pergerakan bersama CA–REER)</div>'
              + '<p><strong>Cara membaca gambar.</strong> Bandingkan lintasan waktu CA dan REER tiap negara:</p>'
              + '<ul><li>Negara <span class="key">tanpa intervensi (mengambang)</span> menunjukkan REER yang bergerak <em>bebas</em> mengikuti kekuatan pasar — terapresiasi saat CA surplus dan terdepresiasi saat defisit. Nilai tukar adalah <span class="key">mekanisme penyesuaian otomatis</span>, sehingga CA cenderung <span class="key">kembali ke keseimbangan (mean-revert)</span>: surplus dan defisit tak bertahan lama karena REER mengimbanginya.</li>'
              + '<li>Negara <span class="key">berintervensi (terkelola)</span> menunjukkan REER yang tetap <span class="key">datar / berkisar sempit</span> meski CA menjalankan surplus (atau defisit) besar yang <em>persisten</em>. REER yang tak bergerak ketika fundamental bergerak adalah sidik jari intervensi — bank sentral membeli/menjual valuta asing (menumpuk cadangan) untuk menahan kurs.</li></ul>'
              + '<p><strong>(a) Negara tanpa intervensi</strong> adalah yang REER-nya <span class="key">bergejolak dan mengikuti CA</span> (terapresiasi saat surplus, terdepresiasi saat defisit) dan CA-nya kembali ke nol seiring waktu. Alasan: dengan mengambang murni, bank sentral membiarkan pasar valas seimbang; nilai tukar, bukan cadangan, yang menyerap guncangan eksternal, sehingga tak perlu intervensi.</p>'
              + '<p><strong>(b) Negara berintervensi</strong> sengaja menahan REER-nya <span class="key">undervalued</span> (di bawah tingkat keseimbangan pasar) untuk menopang ekspor. Mekanisme yang menghubungkan mata uang ke CA:</p>'
              + '<div class="formula">$RER\\downarrow \\;(\\text{undervalued}) \\Rightarrow \\text{ekspor lebih murah, impor lebih mahal} \\Rightarrow NX\\uparrow \\Rightarrow \\text{surplus CA}$</div>'
              + '<div class="formula">$RER\\uparrow \\;(\\text{overvalued}) \\Rightarrow \\text{ekspor lebih mahal, impor lebih murah} \\Rightarrow NX\\downarrow \\Rightarrow \\text{defisit CA}$</div>'
              + '<p>Dengan menjaga mata uang undervalued, negara mempertahankan <span class="key">surplus CA persisten</span> (pertumbuhan berbasis ekspor, penumpukan cadangan) alih-alih membiarkan apresiasi alami menggerusnya. Sebaliknya negara yang mempertahankan patokan <span class="key">overvalued</span> mengalami defisit persisten dan menguras cadangan. Tanda khas pada gambar adalah <span class="key">REER datar bersama CA non-nol yang persisten</span> — hanya intervensi yang dapat memutus umpan balik normal CA↔REER.</p>'
          } },

        /* ---------------------------- Q5 ---------------------------- */
        { n: 5,
          q: {
            en: '<p>The US trade representative in Indonesia is complaining: <em>"Due to the expansionary monetary policy in your country, your exchange rate has been steadily devaluing for a long time. This makes it impossible for the US to export in your country."</em></p>'
              + '<p><strong>(a)</strong> [10 points] Analyze this statement using the theoretical framework we have studied in the class. You can also use equations and graphs to support your analysis.</p>'
              + '<p><strong>(b)</strong> [10 points] What would be the objective of Indonesia in such a case to do such monetary expansion? Do you have other suggestions that Indonesia could do to achieve the same objective?</p>',
            id: '<p>Perwakilan dagang AS di Indonesia mengeluh: <em>"Akibat kebijakan moneter ekspansif di negara Anda, nilai tukar Anda terus terdepresiasi dalam waktu lama. Hal ini membuat AS mustahil mengekspor ke negara Anda."</em></p>'
              + '<p><strong>(a)</strong> [10 poin] Analisis pernyataan ini menggunakan kerangka teori yang telah kita pelajari di kelas. Anda juga dapat menggunakan persamaan dan grafik untuk mendukung analisis Anda.</p>'
              + '<p><strong>(b)</strong> [10 poin] Apa tujuan Indonesia dalam kasus seperti itu melakukan ekspansi moneter tersebut? Apakah Anda punya saran lain yang dapat dilakukan Indonesia untuk mencapai tujuan yang sama?</p>'
          },
          qChart: Q5CHART,
          answer: {
            en: '<div class="note">(no official answer key — model answer using the KOM asset-market / monetary approach to exchange rates)</div>'
              + '<p><strong>(a) Is the complaint sound? Partly.</strong> The mechanism the US representative describes is real:</p>'
              + '<div class="formula">$M^{s}\\uparrow \\Rightarrow i_{\\text{Rp}}\\downarrow \\;\\xrightarrow{\\;\\text{UIP}\\;}\\; E_{\\text{Rp/\\$}}\\uparrow \\;(\\text{rupiah depreciates})$</div>'
              + '<p>In the <span class="key">money market</span> (Panel 1), a higher money supply lowers the domestic interest rate $i_{\\text{Rp}}$. By <span class="key">uncovered interest parity</span>, a lower rupiah return makes dollar assets relatively more attractive, so the rupiah depreciates (Panel 2: $E$ rises). A weaker rupiah makes US goods <span class="key">more expensive</span> in rupiah, so US exports to Indonesia <span class="key">fall</span> — this part is correct.</p>'
              + '<p><strong>But the complaint is overstated.</strong> (1) "Devaluing" is the wrong word under a float — the rupiah is <span class="key">depreciating</span>, market-driven, not officially devalued. (2) "Steadily for a long time / impossible to export" is too strong: in the <span class="key">long run</span>, the monetary approach says money is neutral — a one-off $M$ increase causes a proportional rise in $P$ and a proportional depreciation, leaving the <span class="key">real</span> exchange rate (and thus competitiveness) unchanged. Persistent <em>real</em> depreciation requires persistent money-growth differences (inflation), not a single expansion. (3) US exports depend on Indonesian income too: monetary expansion <span class="key">raises Indonesian output and demand</span> in the short run, which partly offsets the price effect on US exports.</p>'
              + '<p><strong>(b) Indonesia\'s likely objective and alternatives.</strong> The objective of monetary expansion is typically <span class="key">domestic</span>: to stimulate aggregate demand, lower borrowing costs, raise output and employment in a slowdown — and, as a side effect, gain export competitiveness from the weaker rupiah (expenditure-switching toward Indonesian goods). It is <em>not</em> primarily aimed at the US.</p>'
              + '<p><span class="key">Other ways to reach the same goal (boost growth/competitiveness):</span></p>'
              + '<ul><li><span class="key">Expansionary fiscal policy</span> — government spending or tax cuts to raise AD without relying on the exchange-rate channel.</li>'
              + '<li><span class="key">Supply-side / productivity reforms</span> — infrastructure, education, deregulation to lower production costs and improve real competitiveness durably.</li>'
              + '<li><span class="key">Export-promotion & trade facilitation</span> — easing customs, FTAs, export credit, rather than relying on a weak currency.</li>'
              + '<li><span class="key">Targeted industrial upgrading</span> to move up the value chain, so competitiveness comes from quality, not just a cheap rupiah.</li></ul>'
              + '<p>These avoid the inflation and trade-friction costs of using monetary expansion mainly to weaken the currency.</p>',
            id: '<div class="note">(tidak ada kunci jawaban resmi — jawaban model memakai pendekatan pasar aset / moneter KOM terhadap nilai tukar)</div>'
              + '<p><strong>(a) Apakah keluhannya tepat? Sebagian.</strong> Mekanisme yang digambarkan perwakilan AS itu nyata:</p>'
              + '<div class="formula">$M^{s}\\uparrow \\Rightarrow i_{\\text{Rp}}\\downarrow \\;\\xrightarrow{\\;\\text{UIP}\\;}\\; E_{\\text{Rp/\\$}}\\uparrow \\;(\\text{rupiah terdepresiasi})$</div>'
              + '<p>Di <span class="key">pasar uang</span> (Panel 1), penawaran uang yang lebih tinggi menurunkan suku bunga domestik $i_{\\text{Rp}}$. Berdasarkan <span class="key">uncovered interest parity</span>, imbal hasil rupiah yang lebih rendah membuat aset dolar relatif lebih menarik, sehingga rupiah terdepresiasi (Panel 2: $E$ naik). Rupiah yang lebih lemah membuat barang AS <span class="key">lebih mahal</span> dalam rupiah, sehingga ekspor AS ke Indonesia <span class="key">turun</span> — bagian ini benar.</p>'
              + '<p><strong>Tetapi keluhannya berlebihan.</strong> (1) "Devaluasi" kata yang keliru di bawah rezim mengambang — rupiah <span class="key">terdepresiasi</span>, digerakkan pasar, bukan didevaluasi secara resmi. (2) "Terus-menerus dalam waktu lama / mustahil mengekspor" terlalu kuat: dalam <span class="key">jangka panjang</span>, pendekatan moneter menyatakan uang bersifat netral — kenaikan $M$ sekali saja menyebabkan kenaikan $P$ proporsional dan depresiasi proporsional, sehingga nilai tukar <span class="key">riil</span> (dan daya saing) tidak berubah. Depresiasi <em>riil</em> yang persisten butuh perbedaan pertumbuhan uang (inflasi) yang persisten, bukan satu kali ekspansi. (3) Ekspor AS juga bergantung pada pendapatan Indonesia: ekspansi moneter <span class="key">menaikkan output dan permintaan Indonesia</span> dalam jangka pendek, yang sebagian mengimbangi efek harga terhadap ekspor AS.</p>'
              + '<p><strong>(b) Tujuan Indonesia yang mungkin dan alternatifnya.</strong> Tujuan ekspansi moneter umumnya bersifat <span class="key">domestik</span>: menstimulus permintaan agregat, menurunkan biaya pinjaman, menaikkan output dan lapangan kerja saat perlambatan — dan sebagai efek samping, memperoleh daya saing ekspor dari rupiah yang lebih lemah (pengalihan pengeluaran ke barang Indonesia). Tujuannya <em>bukan</em> terutama menyasar AS.</p>'
              + '<p><span class="key">Cara lain mencapai tujuan yang sama (mendorong pertumbuhan/daya saing):</span></p>'
              + '<ul><li><span class="key">Kebijakan fiskal ekspansif</span> — belanja pemerintah atau pemotongan pajak untuk menaikkan AD tanpa bergantung pada jalur nilai tukar.</li>'
              + '<li><span class="key">Reformasi sisi penawaran / produktivitas</span> — infrastruktur, pendidikan, deregulasi untuk menurunkan biaya produksi dan memperbaiki daya saing riil secara tahan lama.</li>'
              + '<li><span class="key">Promosi ekspor & fasilitasi perdagangan</span> — mempermudah kepabeanan, FTA, kredit ekspor, alih-alih mengandalkan mata uang lemah.</li>'
              + '<li><span class="key">Peningkatan industri yang ditargetkan</span> untuk naik di rantai nilai, sehingga daya saing datang dari kualitas, bukan sekadar rupiah murah.</li></ul>'
              + '<p>Ini menghindari biaya inflasi dan friksi dagang akibat memakai ekspansi moneter terutama untuk melemahkan mata uang.</p>'
          } },

        /* ---------------------------- Q6 ---------------------------- */
        { n: 6,
          q: {
            en: '<p>The issue of rice imports has been a sensitive issue subject to much debate and political pressures because rice is the staple food for Indonesians. The issue is that we do not produce enough rice for our consumers, especially with a growing population and this is especially true during the period when there is no production of rice (usually around December–March). Indonesia has had to import rice to ensure sufficient supply for domestic consumption and stabilize rice prices for over 100 years.</p>'
              + '<p><strong>The different import regimes in summary:</strong></p>'
              + '<ul><li><span class="key">Soeharto Regime, 1974–1996:</span> BULOG (Badan Urusan Logistik), the Logistics Agency, as state trading company has buffer stock of rice, buys from farmers when price is low and intervenes in market when prices are high, ensures sufficient stock by importing needs (sole importer) especially during non-harvest season.</li>'
              + '<li><span class="key">Financial crisis and IMF Letter of Intent (LOI) (1998–2004):</span> liberalization of quantitative import restrictions — 22 Sept 1998 – 2 Sept 1999: imports can be done by any general importer, zero tariff; and 2 Sept 1999 – 31 Dec 2002: imports by general importer for higher-quality rice and by BULOG for lower-quality rice with a specific tariff of Rp 430/kg.</li>'
              + '<li><span class="key">2004 to now (with variations):</span> imports of rice only by BULOG and determined quantity. Rice imports not to come in one month before main harvest (March/April) and two months after main harvest (decision to import Sept/Oct, to come in Dec–Feb).</li></ul>'
              + '<p>These are different applications of import policy and with different impacts. Recall the summary of trade policies in Krugman Chapter 9.</p>'
              + '<p><strong>(a)</strong> [5 points] Which type of policy would you describe as the policies in the three different regimes of Indonesia over the last four decades?</p>'
              + '<p><strong>(b)</strong> [10 points] Given the types of policies, can you compare the impact of the different types of policies and what are the net welfare effects in each case? Please use diagrams to illustrate your points.</p>'
              + '<p><strong>(c)</strong> [5 points] Given your answers in (a) and (b), which import policy do you think is best for Indonesia to achieve the objective of stabilizing the price of rice for consumers\' basic food?</p>',
            id: '<p>Isu impor beras telah menjadi isu sensitif yang banyak diperdebatkan dan ditekan secara politik karena beras adalah makanan pokok orang Indonesia. Masalahnya, kita tidak memproduksi cukup beras untuk konsumen, terutama dengan populasi yang terus tumbuh, dan ini terutama benar pada periode tanpa produksi beras (biasanya sekitar Desember–Maret). Indonesia harus mengimpor beras untuk menjamin pasokan cukup bagi konsumsi domestik dan menstabilkan harga beras selama lebih dari 100 tahun.</p>'
              + '<p><strong>Ringkasan rezim impor yang berbeda:</strong></p>'
              + '<ul><li><span class="key">Rezim Soeharto, 1974–1996:</span> BULOG (Badan Urusan Logistik), sebagai perusahaan dagang negara, memiliki stok penyangga beras, membeli dari petani saat harga rendah dan mengintervensi pasar saat harga tinggi, menjamin stok cukup dengan mengimpor kebutuhan (importir tunggal) terutama saat musim paceklik.</li>'
              + '<li><span class="key">Krisis keuangan dan IMF Letter of Intent (LOI) (1998–2004):</span> liberalisasi pembatasan impor kuantitatif — 22 Sept 1998 – 2 Sept 1999: impor dapat dilakukan importir umum mana pun, tarif nol; dan 2 Sept 1999 – 31 Des 2002: impor oleh importir umum untuk beras kualitas lebih tinggi dan oleh BULOG untuk beras kualitas lebih rendah dengan tarif spesifik Rp 430/kg.</li>'
              + '<li><span class="key">2004 hingga kini (dengan variasi):</span> impor beras hanya oleh BULOG dan kuantitas yang ditentukan. Impor beras tidak boleh masuk satu bulan sebelum panen raya (Maret/April) dan dua bulan setelah panen raya (keputusan impor Sept/Okt, masuk Des–Feb).</li></ul>'
              + '<p>Ini adalah penerapan kebijakan impor yang berbeda dengan dampak berbeda. Ingat ringkasan kebijakan perdagangan di Krugman Bab 9.</p>'
              + '<p><strong>(a)</strong> [5 poin] Jenis kebijakan apa yang akan Anda gunakan untuk menggambarkan kebijakan pada tiga rezim berbeda di Indonesia selama empat dekade terakhir?</p>'
              + '<p><strong>(b)</strong> [10 poin] Mengingat jenis-jenis kebijakan tersebut, dapatkah Anda membandingkan dampak berbagai jenis kebijakan dan apa efek kesejahteraan neto di tiap kasus? Gunakan diagram untuk mengilustrasikan poin Anda.</p>'
              + '<p><strong>(c)</strong> [5 poin] Berdasarkan jawaban Anda di (a) dan (b), kebijakan impor mana yang menurut Anda terbaik bagi Indonesia untuk mencapai tujuan menstabilkan harga beras sebagai makanan pokok konsumen?</p>'
          },
          qChart: Q6CHART,
          answer: {
            en: '<div class="note">(no official answer key — model answer using the KOM Chapter 9 taxonomy of trade-policy instruments)</div>'
              + '<p><strong>(a) Classifying each regime (KOM Ch. 9 instruments).</strong></p>'
              + '<table><tr><th>Regime</th><th>Policy type</th></tr>'
              + '<tr><td>1974–1996 (BULOG sole importer + buffer stock)</td><td><span class="key">State trading / import monopoly with a price-stabilization buffer stock</span> — a quantitative control where a state enterprise sets quantities and floor/ceiling prices.</td></tr>'
              + '<tr><td>1998–2004 (IMF LOI liberalization)</td><td>First a <span class="key">zero-tariff free-import</span> phase (any importer), then a <span class="key">specific tariff</span> (Rp 430/kg) on lower-quality rice — i.e. liberalization plus a tariff.</td></tr>'
              + '<tr><td>2004–now (BULOG-only, determined quantity, timed)</td><td>An <span class="key">import quota / quantitative restriction</span> administered by a single state importer with seasonal timing.</td></tr></table>'
              + '<p><strong>(b) Comparing welfare effects.</strong> Take domestic $D: P=10-Q$, $S: P=Q$, world price $P_w=3$. Each restrictive instrument raises the domestic price to $P_t=4$, cutting imports.</p>'
              + '<ul><li><span class="key">Free trade (LOI 1998–99):</span> consumers pay the world price $P_w$, imports are largest, consumer surplus is highest, <span class="key">no deadweight loss</span>. But the domestic price tracks volatile world prices and farmers get the least protection.</li>'
              + '<li><span class="key">Tariff (Rp 430/kg):</span> price rises to $P_t$. CS falls by $a+b+c+d$; producers gain $a$; <span class="key">government collects revenue $c$</span>; net loss $= b+d$ (the two DWL triangles).</li>'
              + '<li><span class="key">Quota / state-trading (1974–96 and 2004–now):</span> the same price rise and the same CS loss and PS gain, and the same DWL $b+d$. The difference is area $c$: instead of going to the government as tariff revenue, it becomes <span class="key">quota rents</span>. Under BULOG those rents accrue to the <span class="key">state trading agency</span> (and can fund the buffer-stock operation); under a private licensing quota they accrue to importers (rent-seeking risk).</li></ul>'
              + '<div class="formula">Net welfare loss (tariff or quota) $= b + d$ &nbsp;; difference is only <em>who keeps</em> $c$ (gov\'t revenue vs quota rent).</div>'
              + '<p>So tariff and quota are <span class="key">equivalent</span> in price, quantity and DWL; they differ in revenue distribution and in how they handle <span class="key">price volatility</span> — a quota fixes quantity (price moves), a tariff fixes the price wedge (quantity moves), and a <span class="key">buffer stock</span> directly stabilises price by releasing/absorbing stock.</p>'
              + '<p><strong>(c) Best policy for price stability.</strong> If the explicit objective is <span class="key">stabilizing the consumer price</span> of a staple, the <span class="key">BULOG buffer-stock + state-trading</span> approach is best suited: BULOG can buy when prices are low (supporting farmers) and release stock or import when prices spike (protecting consumers), directly damping the December–March lean-season volatility that a pure tariff or fixed quota cannot. A pure free-import regime gives the lowest DWL but exposes consumers to <span class="key">world-price swings</span>; a fixed quota fixes quantity but lets price jump in a bad harvest. The trade-off is a small efficiency loss ($b+d$) and the risk of mismanagement/rent capture in exchange for the <span class="key">price stability</span> the policy explicitly targets. A pragmatic recommendation: a state buffer-stock for stabilization, combined with a transparent, rules-based (and ideally tariff-rate-quota) import mechanism to limit rent-seeking.</p>',
            id: '<div class="note">(tidak ada kunci jawaban resmi — jawaban model memakai taksonomi instrumen kebijakan perdagangan KOM Bab 9)</div>'
              + '<p><strong>(a) Mengklasifikasikan tiap rezim (instrumen KOM Bab 9).</strong></p>'
              + '<table><tr><th>Rezim</th><th>Jenis kebijakan</th></tr>'
              + '<tr><td>1974–1996 (BULOG importir tunggal + stok penyangga)</td><td><span class="key">Perdagangan negara / monopoli impor dengan stok penyangga penstabil harga</span> — kontrol kuantitatif di mana BUMN menetapkan kuantitas dan harga dasar/atap.</td></tr>'
              + '<tr><td>1998–2004 (liberalisasi IMF LOI)</td><td>Mula-mula fase <span class="key">impor bebas tarif nol</span> (importir mana pun), lalu <span class="key">tarif spesifik</span> (Rp 430/kg) atas beras kualitas lebih rendah — yakni liberalisasi plus tarif.</td></tr>'
              + '<tr><td>2004–kini (hanya BULOG, kuantitas ditentukan, terjadwal)</td><td><span class="key">Kuota impor / pembatasan kuantitatif</span> yang dikelola satu importir negara dengan penjadwalan musiman.</td></tr></table>'
              + '<p><strong>(b) Membandingkan efek kesejahteraan.</strong> Ambil $D: P=10-Q$, $S: P=Q$, harga dunia $P_w=3$. Tiap instrumen restriktif menaikkan harga domestik ke $P_t=4$, memangkas impor.</p>'
              + '<ul><li><span class="key">Perdagangan bebas (LOI 1998–99):</span> konsumen membayar harga dunia $P_w$, impor terbesar, surplus konsumen tertinggi, <span class="key">tanpa kerugian baku</span>. Namun harga domestik mengikuti harga dunia yang bergejolak dan petani paling sedikit terlindungi.</li>'
              + '<li><span class="key">Tarif (Rp 430/kg):</span> harga naik ke $P_t$. CS turun sebesar $a+b+c+d$; produsen untung $a$; <span class="key">pemerintah memperoleh penerimaan $c$</span>; kerugian neto $= b+d$ (dua segitiga DWL).</li>'
              + '<li><span class="key">Kuota / perdagangan negara (1974–96 dan 2004–kini):</span> kenaikan harga sama, kehilangan CS dan perolehan PS sama, serta DWL $b+d$ sama. Bedanya area $c$: alih-alih ke pemerintah sebagai penerimaan tarif, ia menjadi <span class="key">rente kuota</span>. Di bawah BULOG rente itu menjadi milik <span class="key">badan perdagangan negara</span> (dan dapat membiayai operasi stok penyangga); di bawah kuota lisensi swasta ia menjadi milik importir (risiko perburuan rente).</li></ul>'
              + '<div class="formula">Kerugian kesejahteraan neto (tarif atau kuota) $= b + d$ &nbsp;; bedanya hanya <em>siapa yang menyimpan</em> $c$ (penerimaan pemerintah vs rente kuota).</div>'
              + '<p>Jadi tarif dan kuota <span class="key">setara</span> dalam harga, kuantitas, dan DWL; keduanya berbeda dalam distribusi penerimaan dan cara menangani <span class="key">gejolak harga</span> — kuota mematok kuantitas (harga bergerak), tarif mematok selisih harga (kuantitas bergerak), dan <span class="key">stok penyangga</span> langsung menstabilkan harga dengan melepas/menyerap stok.</p>'
              + '<p><strong>(c) Kebijakan terbaik untuk stabilitas harga.</strong> Bila tujuan eksplisitnya <span class="key">menstabilkan harga konsumen</span> bahan pokok, pendekatan <span class="key">stok penyangga BULOG + perdagangan negara</span> paling cocok: BULOG dapat membeli saat harga rendah (menopang petani) dan melepas stok atau mengimpor saat harga melonjak (melindungi konsumen), langsung meredam gejolak musim paceklik Desember–Maret yang tak bisa diatasi tarif murni atau kuota tetap. Rezim impor bebas murni memberi DWL terendah tetapi membuat konsumen terpapar <span class="key">ayunan harga dunia</span>; kuota tetap mematok kuantitas tetapi membiarkan harga melonjak saat panen buruk. Trade-off-nya adalah kerugian efisiensi kecil ($b+d$) dan risiko salah kelola/perburuan rente, demi <span class="key">stabilitas harga</span> yang menjadi target eksplisit kebijakan. Rekomendasi pragmatis: stok penyangga negara untuk stabilisasi, dipadukan mekanisme impor berbasis aturan yang transparan (idealnya tariff-rate-quota) untuk membatasi perburuan rente.</p>'
          } }

      ] }

    ]
  };
})();
