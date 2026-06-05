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
            html: '<p><span class="key">Belanja Negara</span> is all government spending to run the <b>allocation, distribution and stabilization</b> functions, financing both <b>central</b> spending and <b>transfers to regions</b>. It is the main instrument for <span class="key">public goods</span> (non-rival, non-excludable) the market under-provides: infrastructure, defence, education, health.</p>' +
              '<table><thead><tr><th>Belanja Negara</th></tr></thead><tbody>' +
              '<tr><td><b>Belanja Pemerintah Pusat</b> = Belanja K/L + Belanja non-K/L (subsidies, interest, etc.)</td></tr>' +
              '<tr><td><b>Transfer ke Daerah (TKD)</b></td></tr></tbody></table>' },
          { title: { en: 'Three classifications of expenditure', id: 'Tiga klasifikasi belanja' },
            html: '<p>The same spending is sliced three ways:</p>' +
              '<ul><li><b>By FUNCTION</b> (COFOG, GFS standard): general public services, defence, public order, economic affairs, environment, housing, <b>health</b>, recreation/culture/religion, <b>education</b>, social protection. Not by ministry — a K/L can serve several functions.</li>' +
              '<li><b>By TYPE</b>: personnel (gaji), goods/services, capital, social assistance (bansos), interest payments, subsidies, grants, other.</li>' +
              '<li><b>By APBN PRESENTATION</b>: Belanja Pemerintah Pusat (K/L + non-K/L) and Transfer ke Daerah.</li></ul>' +
              '<div class="note">💡 COFOG (Classification of the Functions of Government) lets you compare spending priorities across countries.</div>' }
        ]
      },
      {
        heading: { en: 'Mandatory spending', id: 'Belanja wajib' }, num: '2',
        cards: [
          { title: { en: 'What is locked in', id: 'Apa yang dikunci' },
            html: '<p>Some lines are <span class="key">wajib (mandatory)</span> by law or by nature:</p>' +
              '<ul><li><b>Salaries</b> — cannot fall; should track cost-of-living (COLA).</li>' +
              '<li><b>Education ≥ 20% of Belanja Negara</b> (UUD 1945 Pasal 31(4), UU Sisdiknas). Most of it is <i>Transfer</i> (≈60%) for basic/secondary education run by regions.</li>' +
              '<li><b>Health ≥ 5%</b> of APBN — was mandatory (UU 36/2009), <b>removed by UU 17/2023</b>, but kept ≥5% as a commitment (≈6% in 2024–26).</li></ul>' +
              '<div class="tip">📝 Mandatory spending <b>reduces flexibility</b> in a crisis. A subtle effect: because the 20% education rule is computed on <i>Belanja</i> (which includes the deficit), a bigger deficit automatically raises the education floor.</div>' },
          { title: { en: 'Pension liability: a contingent risk', id: 'Liabilitas pensiun: risiko kontinjen' },
            html: '<p>Civil-service pensions are paid <span class="key">pay-as-you-go</span> from the current APBN, creating a <b>contingent liability</b>. The LKPP records ~<b>Rp 3,200 T unfunded past-service liability (UPSL)</b>. This is why pension reform is on the agenda — and it links straight to Unit 5 (PAYG vs funded).</p>' }
        ]
      },
      {
        heading: { en: 'Diagnosing budget health', id: 'Mendiagnosis kesehatan APBN' }, num: '3',
        cards: [
          { title: { en: 'Liquidity · vulnerability · sustainability', id: 'Likuiditas · vulnerabilitas · sustainabilitas' },
            html: '<p>Three families of indicators judge whether the APBN is healthy:</p>' +
              '<table><thead><tr><th>Family</th><th>Key indicators</th></tr></thead><tbody>' +
              '<tr><td><b>Liquidity</b> (pay short-term obligations)</td><td>Current Budget Balance (CBB), SDA-to-short-term-external-debt, SiLPA.</td></tr>' +
              '<tr><td><b>Vulnerability</b> (debt-payment pressure)</td><td>Debt Service Ratio (DSR), Interest Ratio (IR), Debt-to-Income.</td></tr>' +
              '<tr><td><b>Sustainability</b> (long-run)</td><td>Primary balance, Debt-to-GDP, debt dynamics (r − g).</td></tr>' +
              '</tbody></table>' },
          { title: { en: 'The formulas', id: 'Rumusnya' },
            html: '<div class="formula">$$ CBB = \\text{routine revenue} - \\text{routine spending} = (\\text{Pendapatan} - \\text{Hibah}) - (\\text{Belanja} - \\text{Belanja Modal}) $$</div>' +
              '<div class="formula">$$ DSR = \\frac{\\text{interest} + \\text{principal}}{\\text{Revenue}}, \\quad IR = \\frac{\\text{interest}}{\\text{Revenue}} $$</div>' +
              '<div class="formula">$$ \\text{Debt dynamics} = r - g \\quad(\\text{real interest} - \\text{real growth}) $$</div>' +
              '<p>Rules of thumb: primary balance and CBB — <b>higher/positive is better</b>; DSR, IR, debt ratios — <b>lower is better</b>.</p>' }
        ]
      },
      {
        heading: { en: 'Absorption pattern & efficiency', id: 'Pola penyerapan & efisiensi' }, num: '4',
        cards: [
          { title: { en: 'The Q4-heavy absorption problem', id: 'Penyerapan menumpuk di Q4' },
            html: '<p>5-year average absorption: ~16% in Q1, ~39% by Q2, ~62% by Q3 — so ~<b>38% lands in Q4</b>. The fiscal stimulus to growth is therefore uneven across the year (G/GDP ~6% early, ~10% late). Quality, not just speed, is tracked via the <span class="key">IKPA</span> (Indikator Kinerja Pelaksanaan Anggaran) under a <b>value-for-money</b> lens.</p>' },
          { title: { en: 'Spending efficiency (Inpres 1/2025)', id: 'Efisiensi belanja (Inpres 1/2025)' },
            html: '<p>"Let the managers manage": Menkeu = CFO, line ministers = COO/managers responsible for value-for-money. Efficiency drives recur when revenue is at risk (2016 cut of Rp 65T K/L + 68.8T TKD; <b>Automatic Adjustment</b> blocks ~5% of K/L budget as a buffer).</p>' +
              '<p><b>Inpres 1/2025</b>: President Prabowo ordered <b>Rp 306.1 T</b> efficiency (Rp 256.1T K/L + Rp 50T TKD). Crucially, it spared <b>personnel and bansos</b>, hitting mainly <b>goods and capital</b> (travel, ceremonies, seminars, studies, consultants). Freed funds redirected to priority programmes (MBG free meals, free health checks, school revitalisation).</p>' +
              '<div class="note">💡 Belanja Negara plays three roles at once: <b>development agent</b>, <b>shock absorber</b>, and <b>fiscal-sustainability</b> guardian.</div>' }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'Current Budget Balance (fiscal-space gauge)', id: 'Current Budget Balance' },
          html: '<div class="formula">$$ CBB = (\\text{Pendapatan} - \\text{Hibah}) - (\\text{Belanja Negara} - \\text{Belanja Modal}) $$</div>' +
            '<p>Can routine revenue cover routine spending without borrowing? Positive = healthier.</p>' },
        { title: { en: 'Debt-payment pressure', id: 'Tekanan bayar utang' },
          html: '<div class="formula">$$ DSR = \\frac{\\text{bunga} + \\text{cicilan pokok}}{\\text{Pendapatan}}, \\qquad IR = \\frac{\\text{bunga}}{\\text{Pendapatan}} $$</div>' +
            '<p>Lower is better — measures how much revenue is eaten by debt service.</p>' },
        { title: { en: 'Sustainability', id: 'Sustainabilitas' },
          html: '<div class="formula">$$ \\text{Primary balance} = \\frac{\\text{Pendapatan} - (\\text{Belanja} - \\text{bunga})}{GDP}, \\qquad \\text{Debt dynamics} = r - g $$</div>' },
        { title: { en: 'Mandatory floors', id: 'Batas wajib' },
          html: '<div class="formula">$$ \\text{Education} \\ge 20\\%\\ \\text{Belanja Negara}, \\qquad \\text{Health} \\approx 5\\%\\ (\\text{commitment, mandate repealed 2023}) $$</div>' }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Budget health: the debt-dynamics test', id: 'Kesehatan APBN: uji dinamika utang' },
          html: '<p>Sustainability lives or dies on the primary balance and the gap between the real interest rate and growth. Set a primary deficit and push r above g: the debt ratio climbs through the 60% rule. Run a primary surplus or get g > r and it settles. This is the quantitative side of the diagnostics table.</p>',
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
        ], tip: { en: 'Negative CBB = borrowing for routine, not just capital — a red flag.', id: 'CBB negatif = berutang untuk rutin — bendera merah.' } }
    ]
  };
})();
