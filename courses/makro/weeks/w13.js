/* ============================================================================
   MAKRO · Week 13 — Emerging Issues in Macroeconomics:
   Climate Change · Crypto & CBDC · Welfare / Inequality
   Bilingual (EN + ID). Registers on window.MAKRO_WEEKS.w13.
   Source: Prof. Iwan Azis lecture deck "Week 13 — Emerging Issues in
   Macroeconomics" (Spring 2026), 21 handout pages ≈ 41 slides. Covers:
   climate & the macroeconomy (ENSO/El Niño, warming feedback, Asia/Indonesia
   damage), modelling climate through productivity and the Solow residual,
   the proxy "damage-function + supply-side shock" approach, Jorgenson et al.
   (2005) and Azis (2005) CGE scenarios to 2050, carbon pricing & the EU ETS;
   crypto vs CBDC and money creation (RM, M2, two-tier vs retail, synthetic
   CBDC, incorporating digital currency into the macro model); and welfare —
   the 4-quadrant poverty/inequality diagram (elasticities α<β), AD- vs
   PC-shock recovery for welfare, the formal/non-formal IS–LM, and the
   centripetal-vs-centrifugal (Piketty r>g) view of inequality.
   ============================================================================ */
(function () {
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';
  var GAIN = 'rgba(14,143,184,.14)';
  var LOSS = 'rgba(192,57,43,.14)';

  /* ---- Chart 1: Labour productivity F(K/N,1) + technical progress shift ----- */
  var PROD_CHART = { panels: [{
    title: 'Output per worker rises with capital per worker — and shifts up with A',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Capital per worker  K/N' },
    y: { min: 0, max: 10, label: 'Output per worker  Y/N' },
    curves: [
      { kind: 'path', pts: [[0,0],[1,2.4],[2,3.7],[3,4.7],[4,5.4],[6,6.4],[8,7.1],[10,7.6]],
        smooth: true, color: TEAL, label: 'Y/N = F(K/N, 1)' },
      { kind: 'path', pts: [[0,0],[1,3.1],[2,4.7],[3,5.9],[4,6.7],[6,7.9],[8,8.7],[10,9.3]],
        smooth: true, color: RED, label: "F(K/N, 1)·A↑" }
    ],
    notes: [
      { x: 5.5, y: 2.6, text: 'concave: diminishing returns to K/N', color: '#777', anchor: 'middle', size: 10 },
      { x: 3.0, y: 8.8, text: 'TFP (A) ↑ shifts the whole curve up', color: RED, anchor: 'start', size: 10 }
    ]
  }] };

  /* ---- Chart 2: Solow capital dynamics — saving vs depreciation -> steady state */
  var SOLOW_CHART = { panels: [{
    title: 'Steady state: investment s·f(K/N) meets depreciation δ·(K/N)',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Capital per worker  K/N' },
    y: { min: 0, max: 10, label: 'per worker' },
    curves: [
      { kind: 'path', pts: [[0,0],[1,2.4],[2,3.7],[3,4.7],[4,5.4],[6,6.4],[8,7.1],[10,7.6]],
        smooth: true, color: TEAL, label: 'output f(K/N)' },
      { kind: 'path', pts: [[0,0],[1,0.96],[2,1.48],[3,1.88],[4,2.16],[6,2.56],[8,2.84],[10,3.04]],
        smooth: true, color: GREEN, label: 'investment s·f(K/N)' },
      { id: 'dep', kind: 'line', p1: [0,0], p2: [10,3.8], color: AMBER, label: 'depreciation δ·(K/N)' }
    ],
    points: [ { at: [8,2.84], dot: true, guideX: '(K/N)*', label: 'steady state' } ],
    notes: [
      { x: 3.2, y: 1.0, text: 'K low: s·f > δK ⇒ K rises', color: '#777', anchor: 'middle', size: 9 },
      { x: 9.0, y: 3.5, text: 'higher s ⇒ higher (K/N)*', color: GREEN, anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 3: Climate damage as a supply-side (AS) shock ------------------ */
  var DAMAGE_CHART = { panels: [{
    title: 'Climate damage D(T): AS shifts left/up, output falls, prices rise',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Output  Y' },
    y: { min: 0, max: 10, label: 'Price level  P' },
    curves: [
      { id: 'AD', kind: 'line', p1: [1,9], p2: [9,1], color: BLUE, label: 'AD' },
      { id: 'AS0', kind: 'line', p1: [1,1], p2: [9,9], color: TEAL, label: 'AS₀' },
      { id: 'AS1', kind: 'line', p1: [2.6,1], p2: [9,11.4], color: RED, label: 'AS₁ (with D(T))', dash: true }
    ],
    points: [
      { on: ['AD','AS0'], dot: true, guideX: 'Y₀', guideY: 'P₀' },
      { on: ['AD','AS1'], dot: true, guideX: 'Y₁', guideY: 'P₁' }
    ],
    shifts: [ { from: 'AS0', to: 'AS1' } ],
    notes: [ { x: 5, y: 9.2, text: 'Y = f(K,L,A·(1−D(T))),  D = αT²', color: '#777', anchor: 'middle', size: 10 } ]
  }] };

  /* ---- Chart 4: Azis (2005) CGE scenarios — GDP growth to 2050 (bars) -------- */
  var CGE_CHART = { panels: [{
    kind: 'bars',
    title: 'Average GDP growth 2005–2050 by scenario (Azis & Salim 2005)',
    w: 470, h: 300,
    bars: [
      { label: '6.00', value: 6.00, color: GREEN, caption: 'Baseline' },
      { label: '5.32', value: 5.32, color: TEAL,  caption: 'BAU' },
      { label: '4.99', value: 4.99, color: AMBER, caption: 'SC1' },
      { label: '6.20', value: 6.20, color: BLUE,  caption: 'SC2' }
    ],
    yMax: 7.2
  }] };

  /* ---- Chart 5: Global emissions covered by carbon pricing (bars, rising) ---- */
  var ETS_CHART = { panels: [{
    kind: 'bars',
    title: 'Share of global GHG emissions covered by carbon pricing (rising)',
    w: 470, h: 290,
    bars: [
      { label: '~7%',  value: 7,  color: TEAL,  caption: '2010' },
      { label: '~13%', value: 13, color: BLUE,  caption: '2016' },
      { label: '~23%', value: 23, color: GREEN, caption: '2024' }
    ],
    yMax: 28
  }] };

  /* ---- Chart 6: Welfare 4-quadrant — α<β worsens poverty (single-panel proxy) */
  var WELFARE_CHART = { panels: [{
    title: 'Poverty mechanics: elasticity of poverty-line (α) vs income of poor (β)',
    w: 470, h: 330,
    x: { min: 0, max: 10, label: 'aggregate price P  →  / income Y →' },
    y: { min: 0, max: 10, label: 'poverty line PL / income of poor Yᵖ' },
    curves: [
      { id: 'PL', kind: 'line', p1: [0,1], p2: [10,8.5], color: RED, label: 'PL(P): slope = α' },
      { id: 'YP', kind: 'line', p1: [0,1], p2: [10,5.5], color: GREEN, label: 'Yᵖ(Y): slope = β' }
    ],
    notes: [
      { x: 5, y: 9.2, text: 'α < β  ⇒  poverty line outruns poor incomes ⇒ poverty worsens', color: RED, anchor: 'middle', size: 10 },
      { x: 7.2, y: 3.4, text: 'better income distribution lifts Yᵖ (β↑)', color: GREEN, anchor: 'middle', size: 9 }
    ]
  }] };

  /* ---- Chart 7: Recovery — AD shock when PC is steeper (costly) ------------- */
  var ADSHOCK_CHART = { panels: [{
    title: 'AD shock with a STEEP Phillips curve: Δπ large, ΔY small (costly)',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Output  Y' },
    y: { min: 0, max: 10, label: 'Inflation  π' },
    curves: [
      { id: 'PC', kind: 'line', p1: [3,1], p2: [7,9], color: RED, label: 'PC (steep)' },
      { id: 'AD0', kind: 'line', p1: [1,7], p2: [7,1], color: BLUE, label: 'AD₀' },
      { id: 'AD1', kind: 'line', p1: [3,9], p2: [9,3], color: VIOLET, label: 'AD₁', dash: true }
    ],
    points: [
      { on: ['PC','AD0'], dot: true, guideX: 'Y₀', guideY: 'π₀' },
      { on: ['PC','AD1'], dot: true, guideX: 'Y₁', guideY: 'π₁' }
    ],
    shifts: [ { from: 'AD0', to: 'AD1' } ],
    notes: [ { x: 5, y: 9.3, text: 'steep PC ⇒ raising Y by AD shock is costly (inflation jumps)', color: '#777', anchor: 'middle', size: 9.5 } ]
  }] };

  /* ---- Chart 8: Recovery — PC shock under flat AD (win-win) ----------------- */
  var PCSHOCK_CHART = { panels: [{
    title: 'PC shock with a FLAT AD: Y rises a lot, p falls (win-win)',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Output  Y' },
    y: { min: 0, max: 10, label: 'price  p' },
    curves: [
      { id: 'AD', kind: 'line', p1: [1,5.2], p2: [9,2.6], color: BLUE, label: 'AD (flat)' },
      { id: 'PC0', kind: 'line', p1: [3,1], p2: [6,9], color: RED, label: 'PC₀' },
      { id: 'PC1', kind: 'line', p1: [5,1], p2: [8,9], color: GREEN, label: 'PC₁ (favourable shock)', dash: true }
    ],
    points: [
      { on: ['AD','PC0'], dot: true, guideX: 'Y₀', guideY: 'p₀' },
      { on: ['AD','PC1'], dot: true, guideX: 'Y₁', guideY: 'p₁' }
    ],
    shifts: [ { from: 'PC0', to: 'PC1' } ],
    notes: [ { x: 5, y: 9.3, text: 'flat AD ⇒ favourable PC shock raises Y a lot, p falls only mildly', color: '#777', anchor: 'middle', size: 9.5 } ]
  }] };

  /* ---- Chart 9: Formal vs non-formal — fall in G shifts IS left ------------- */
  var NONFORMAL_CHART = { panels: [{
    title: 'Formal sector: ↓G shifts ISᶠ left ⇒ r↓, Y↓ (LM given)',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Output  Y' },
    y: { min: 0, max: 10, label: 'interest rate  r' },
    curves: [
      { id: 'IS0', kind: 'line', p1: [1,8], p2: [9,2], color: TEAL, label: 'ISᶠ₀' },
      { id: 'IS1', kind: 'line', p1: [1,6], p2: [7,2], color: RED, label: 'ISᶠ₁ (↓G)', dash: true },
      { id: 'LM', kind: 'line', p1: [1,2], p2: [9,8], color: BLUE, label: 'LM' }
    ],
    points: [
      { on: ['IS0','LM'], dot: true, guideX: 'Y₀', guideY: 'r₀' },
      { on: ['IS1','LM'], dot: true, guideX: 'Y₁', guideY: 'r₁' }
    ],
    shifts: [ { from: 'IS0', to: 'IS1' } ],
    notes: [ { x: 5, y: 9.2, text: 'output reshuffled toward the non-formal sector', color: '#777', anchor: 'middle', size: 9.5 } ]
  }] };

  window.MAKRO_WEEKS.w13 = {
    id: 'w13',
    label: { en: 'Week 13', id: 'Minggu 13' },
    title: { en: 'Emerging Issues: Climate, Crypto/CBDC & Welfare',
             id: 'Isu Baru: Iklim, Kripto/CBDC & Kesejahteraan' },
    subtitle: {
      en: 'The frontier of macro: climate as a supply-side/productivity shock and the Solow-residual lens; CGE scenarios for Indonesia to 2050; carbon pricing & the EU ETS; crypto vs CBDC and bank money creation; and a welfare macro — the 4-quadrant poverty diagram (α<β), AD- vs PC-shock recovery, the formal/non-formal IS–LM, and centripetal-vs-centrifugal (Piketty r>g) inequality.',
      id: 'Perbatasan makro: iklim sebagai guncangan sisi-penawaran/produktivitas lewat lensa residu Solow; skenario CGE Indonesia hingga 2050; penetapan harga karbon & EU ETS; kripto vs CBDC dan penciptaan uang bank; serta makro kesejahteraan — diagram kemiskinan 4-kuadran (α<β), pemulihan lewat guncangan AD vs PC, IS–LM formal/non-formal, dan ketimpangan sentripetal-vs-sentrifugal (Piketty r>g).'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Climate change & the macroeconomy', id: 'Perubahan iklim & makroekonomi' },
        num: '1',
        cards: [
          {
            title: { en: 'El Niño, La Niña and why climate is a macro variable', id: 'El Niño, La Niña, dan mengapa iklim adalah variabel makro' },
            html: {
              en: `<p>Prof. Azis frames climate not as an "environmental footnote" but as a genuine <span class="key">macro shock</span>. The <span class="key">El Niño–Southern Oscillation (ENSO)</span> is the engine: <span class="key">El Niño</span> warms the central/eastern Pacific, <span class="key">La Niña</span> cools it, and global warming raises the baseline so each swing lands on a hotter starting point.</p>
<ul>
<li><span class="key">Warm phase (El Niño)</span>: drought in South and Southeast Asia, failed monsoons, lower rice and palm-oil yields. Indonesia's catastrophic <span class="key">1997–98 forest fires</span> coincided with a strong El Niño.</li>
<li><span class="key">Cool phase (La Niña)</span>: heavy rain, flooding, landslides — a high-rainfall year can damage as much as a drought year.</li>
<li><span class="key">Feedback loop</span>: warming → more greenhouse gases (GHGs) released (e.g. from peat fires) → more warming. The deck stresses this is self-reinforcing, not one-off.</li>
</ul>
<div class="note">Macro channels: a bad ENSO year is simultaneously a <span class="key">negative supply shock</span> (lower agricultural output, higher food prices), a <span class="key">fiscal shock</span> (disaster relief, lost revenue), and a <span class="key">welfare shock</span> (the poor spend the largest budget share on food). One climate event hits output, inflation, the budget and poverty at once.</div>`,
              id: `<p>Prof. Azis membingkai iklim bukan sebagai "catatan kaki lingkungan" melainkan <span class="key">guncangan makro</span> sungguhan. <span class="key">El Niño–Southern Oscillation (ENSO)</span> adalah mesinnya: <span class="key">El Niño</span> menghangatkan Pasifik tengah/timur, <span class="key">La Niña</span> mendinginkannya, dan pemanasan global menaikkan garis dasar sehingga tiap ayunan bertumpu pada titik awal yang lebih panas.</p>
<ul>
<li><span class="key">Fase panas (El Niño)</span>: kekeringan di Asia Selatan & Tenggara, musim hujan gagal, hasil padi dan sawit turun. <span class="key">Kebakaran hutan 1997–98</span> Indonesia yang katastrofik bertepatan dengan El Niño kuat.</li>
<li><span class="key">Fase dingin (La Niña)</span>: hujan deras, banjir, longsor — tahun berhujan tinggi bisa merusak sebesar tahun kering.</li>
<li><span class="key">Lingkar umpan balik</span>: pemanasan → lebih banyak gas rumah kaca (GRK) dilepas (mis. dari kebakaran gambut) → makin panas. Slide menekankan ini memperkuat diri, bukan sekali jalan.</li>
</ul>
<div class="note">Kanal makro: tahun ENSO buruk sekaligus merupakan <span class="key">guncangan penawaran negatif</span> (output tani turun, harga pangan naik), <span class="key">guncangan fiskal</span> (bantuan bencana, kehilangan penerimaan), dan <span class="key">guncangan kesejahteraan</span> (kaum miskin membelanjakan porsi anggaran terbesar untuk pangan). Satu peristiwa iklim memukul output, inflasi, anggaran, dan kemiskinan sekaligus.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Modelling climate through productivity & the Solow residual', id: 'Memodelkan iklim lewat produktivitas & residu Solow' },
        num: '2',
        cards: [
          {
            title: { en: 'The short/medium/long-run split and the two engines of growth', id: 'Pembagian jangka pendek/menengah/panjang & dua mesin pertumbuhan' },
            html: {
              en: `<p>To put climate <em>inside</em> the workhorse model, Azis routes it through the <span class="key">supply side</span>. The standard horizon split:</p>
<ul>
<li><span class="key">Short run</span> → aggregate <span class="key">demand</span> (AD);</li>
<li><span class="key">Medium run</span> → <span class="key">price</span> adjustment (AD ↔ AS);</li>
<li><span class="key">Long run</span> → aggregate <span class="key">supply</span> growth — the production frontier itself.</li>
</ul>
<p>Long-run supply has two engines: <span class="key">"perspiration vs inspiration"</span>. <em>Perspiration</em> = accumulating inputs (labour $L$, capital $K$). <em>Inspiration</em> = total factor productivity ($TFP=A$). The <span class="key">environment</span> enters as <span class="key">pollution</span> and <span class="key">resource depletion</span> that erode both the input base and $A$.</p>
<div class="tip">Exam framing: climate is a <span class="key">long-run, supply-side</span> problem that shows up in the production function and in $A$. That is why a purely demand-side (Keynesian) stabilisation toolkit is "incomplete" for it.</div>`,
              id: `<p>Untuk memasukkan iklim <em>ke dalam</em> model workhorse, Azis menyalurkannya lewat <span class="key">sisi penawaran</span>. Pembagian horizon standar:</p>
<ul>
<li><span class="key">Jangka pendek</span> → <span class="key">permintaan</span> agregat (AD);</li>
<li><span class="key">Jangka menengah</span> → penyesuaian <span class="key">harga</span> (AD ↔ AS);</li>
<li><span class="key">Jangka panjang</span> → pertumbuhan <span class="key">penawaran</span> agregat — frontier produksi itu sendiri.</li>
</ul>
<p>Penawaran jangka panjang punya dua mesin: <span class="key">"perspiration vs inspiration"</span>. <em>Perspiration</em> = akumulasi input (tenaga kerja $L$, kapital $K$). <em>Inspiration</em> = produktivitas faktor total ($TFP=A$). <span class="key">Lingkungan</span> masuk sebagai <span class="key">polusi</span> dan <span class="key">deplesi sumber daya</span> yang menggerus basis input dan $A$.</p>
<div class="tip">Bingkai ujian: iklim adalah persoalan <span class="key">jangka panjang sisi penawaran</span> yang muncul di fungsi produksi dan di $A$. Itu sebabnya perangkat stabilisasi murni sisi-permintaan (Keynesian) "tidak lengkap" untuknya.</div>`
            }
          },
          {
            title: { en: 'Labour productivity, saving rates & skill', id: 'Produktivitas tenaga kerja, tingkat tabungan & keterampilan' },
            html: {
              en: `<p>With constant returns to scale, $F(xK, xN) = xY$, so dividing by $N$ gives output per worker as a function of capital per worker only:</p>
<div class="formula">$$\\frac{Y}{N} = F\\!\\left(\\frac{K}{N}, 1\\right).$$</div>
<p>The curve is <span class="key">concave</span> — diminishing returns to $K/N$. Two ways to raise $Y/N$:</p>
<ul>
<li><span class="key">Capital deepening</span>: if capital grows faster than labour ($g_K > g_N$), $K/N$ rises and we move up the curve.</li>
<li><span class="key">Skill</span>: if human capital / skill grows faster than raw labour ($g_H > g_N$), more skilled workers handle complex tasks and unexpected problems, raising $Y/N$ — a shift of the curve.</li>
</ul>
<p>A higher <span class="key">saving rate</span> $s$ delivers a higher steady-state $K/N$ and output per worker (but not a permanently higher growth rate). When $g(K/N)$ and $g(Y/N)$ are constant the economy is in its <span class="key">long-run steady state</span>.</p>`,
              id: `<p>Dengan skala hasil konstan, $F(xK, xN) = xY$, sehingga membagi dengan $N$ memberi output per pekerja sebagai fungsi kapital per pekerja saja:</p>
<div class="formula">$$\\frac{Y}{N} = F\\!\\left(\\frac{K}{N}, 1\\right).$$</div>
<p>Kurvanya <span class="key">cekung</span> — hasil menurun terhadap $K/N$. Dua cara menaikkan $Y/N$:</p>
<ul>
<li><span class="key">Pendalaman kapital</span>: bila kapital tumbuh lebih cepat dari tenaga kerja ($g_K > g_N$), $K/N$ naik dan kita bergerak ke atas kurva.</li>
<li><span class="key">Keterampilan</span>: bila modal manusia/keterampilan tumbuh lebih cepat dari tenaga kerja mentah ($g_H > g_N$), pekerja lebih terampil menangani tugas kompleks dan masalah tak terduga, menaikkan $Y/N$ — pergeseran kurva.</li>
</ul>
<p><span class="key">Tingkat tabungan</span> $s$ lebih tinggi memberi $K/N$ dan output per pekerja steady-state lebih tinggi (tetapi bukan laju pertumbuhan permanen lebih tinggi). Ketika $g(K/N)$ dan $g(Y/N)$ konstan, ekonomi berada di <span class="key">steady state jangka panjang</span>.</p>`
            },
            chart: PROD_CHART
          },
          {
            title: { en: 'TFP & the Solow residual; climate as a residual drag', id: 'TFP & residu Solow; iklim sebagai hambatan residu' },
            html: {
              en: `<p>Combine labour and capital with technology in a Cobb–Douglas form:</p>
<div class="formula">$$Y = K^{\\alpha}(N A)^{1-\\alpha}.$$</div>
<p>Growth-account it. The part of output growth <em>not</em> explained by measured input growth is the <span class="key">Solow residual</span>, our proxy for technical progress:</p>
<div class="formula">$$\\underbrace{g_Y - \\alpha\\,g_K - (1-\\alpha)\\,g_N}_{\\text{Solow residual}} = (1-\\alpha)\\,g_A.$$</div>
<p>Climate's long-run productivity effect is precisely a <span class="key">drag on this residual</span>: resource depletion, heat stress and disaster damage lower $g_A$, so even with the same $K$ and $N$ the economy produces less. How much output declines, and the <em>pattern</em> of decline, depends on the extent of the resource loss and how it is transmitted into lower incomes, higher prices and higher poverty.</p>`,
              id: `<p>Gabungkan tenaga kerja dan kapital dengan teknologi dalam bentuk Cobb–Douglas:</p>
<div class="formula">$$Y = K^{\\alpha}(N A)^{1-\\alpha}.$$</div>
<p>Lakukan growth-accounting. Bagian pertumbuhan output yang <em>tidak</em> dijelaskan pertumbuhan input terukur adalah <span class="key">residu Solow</span>, proksi kemajuan teknis:</p>
<div class="formula">$$\\underbrace{g_Y - \\alpha\\,g_K - (1-\\alpha)\\,g_N}_{\\text{residu Solow}} = (1-\\alpha)\\,g_A.$$</div>
<p>Efek produktivitas jangka panjang iklim justru <span class="key">menghambat residu ini</span>: deplesi sumber daya, tekanan panas, dan kerusakan bencana menurunkan $g_A$, sehingga dengan $K$ dan $N$ sama pun ekonomi memproduksi lebih sedikit. Seberapa besar output turun, dan <em>pola</em> penurunannya, bergantung pada besarnya kehilangan sumber daya dan bagaimana ia ditransmisikan ke pendapatan lebih rendah, harga lebih tinggi, dan kemiskinan lebih tinggi.</p>`
            },
            chart: SOLOW_CHART
          }
        ]
      },

      {
        heading: { en: 'Putting climate in the model + CGE evidence for Indonesia', id: 'Memasukkan iklim ke model + bukti CGE untuk Indonesia' },
        num: '3',
        cards: [
          {
            title: { en: 'The proxy approach: damage function + supply-side shock', id: 'Pendekatan proksi: fungsi kerusakan + guncangan sisi-penawaran' },
            html: {
              en: `<p>Azis's practical recipe — treat climate as an <span class="key">exogenous productivity/cost shifter</span> and bolt it onto the existing macro model in three places:</p>
<ol>
<li><span class="key">Production/investment block — damage variable.</span> Modify output:
<div class="formula">$$Y = f(K, L, A) \\;\\longrightarrow\\; Y = f\\big(K, L, A\\cdot(1 - D(T))\\big),$$</div>
where $D(T)$ is a <span class="key">damage function</span> of the temperature anomaly $T$ — Nordhaus-style $D = \\alpha T^{2}$. In practice, proxy $T$ with observable indices (NOAA Global Temperature Anomaly, an El Niño index).</li>
<li><span class="key">Satellite green-investment equation.</span> $I^{green} = \\alpha + \\beta\\,\\text{Carbon\\_price} + \\gamma\\,\\text{Policy\\_dummy} + \\varepsilon$, feeding total investment $I = I + I^{green}$.</li>
<li><span class="key">Consumption channel.</span> $C = \\alpha + \\beta Y_d - \\gamma P^{energy} + \\varepsilon$, where $P^{energy}$ proxies climate-driven energy-price volatility.</li>
</ol>
<div class="note">Data proxies you can actually use: a <span class="key">carbon price</span> (EU ETS or a shadow price), <span class="key">catastrophic-loss data</span> (Munich Re, Swiss Re indices), an <span class="key">energy-price index</span> as a climate-stress proxy, and <span class="key">physical-risk scores</span> from central-bank stress tests (ECB, BoE publish these).</div>`,
              id: `<p>Resep praktis Azis — perlakukan iklim sebagai <span class="key">penggeser produktivitas/biaya eksogen</span> dan tempelkan ke model makro yang ada di tiga tempat:</p>
<ol>
<li><span class="key">Blok produksi/investasi — variabel kerusakan.</span> Modifikasi output:
<div class="formula">$$Y = f(K, L, A) \\;\\longrightarrow\\; Y = f\\big(K, L, A\\cdot(1 - D(T))\\big),$$</div>
dengan $D(T)$ <span class="key">fungsi kerusakan</span> dari anomali suhu $T$ — gaya Nordhaus $D = \\alpha T^{2}$. Dalam praktik, proksi $T$ dengan indeks teramati (Anomali Suhu Global NOAA, indeks El Niño).</li>
<li><span class="key">Persamaan satelit investasi hijau.</span> $I^{green} = \\alpha + \\beta\\,\\text{Harga\\_karbon} + \\gamma\\,\\text{Dummy\\_kebijakan} + \\varepsilon$, masuk ke investasi total $I = I + I^{green}$.</li>
<li><span class="key">Kanal konsumsi.</span> $C = \\alpha + \\beta Y_d - \\gamma P^{energy} + \\varepsilon$, dengan $P^{energy}$ memproksi volatilitas harga energi akibat iklim.</li>
</ol>
<div class="note">Proksi data yang bisa dipakai: <span class="key">harga karbon</span> (EU ETS atau shadow price), <span class="key">data kerugian katastrofik</span> (indeks Munich Re, Swiss Re), <span class="key">indeks harga energi</span> sebagai proksi tekanan iklim, dan <span class="key">skor risiko fisik</span> dari stress test bank sentral (ECB, BoE menerbitkannya).</div>`
            },
            chart: DAMAGE_CHART
          },
          {
            title: { en: 'CGE scenarios: Jorgenson et al. (2005) & Azis–Salim (2005)', id: 'Skenario CGE: Jorgenson dkk. (2005) & Azis–Salim (2005)' },
            html: {
              en: `<p><span class="key">Jorgenson et al. (2005)</span> use a CGE model to estimate the impact on investment, the capital stock, output and consumption: in the US, an <span class="key">"optimistic"</span> scenario shows negligible/positive effect, while a <span class="key">"pessimistic"</span> scenario shows real damage. The lesson: as funds-through-capital markets begin to recognise climate as an investment risk, the spread between optimistic and pessimistic paths widens.</p>
<p><span class="key">Azis & Salim (2005)</span>, "Development Performance and Future Scenarios in the Context of Sustainable Utilization of Natural Resources" (ISEAS), run CGE scenarios for Indonesia to <span class="key">2050</span>. Four scenarios — <span class="key">Baseline</span>, <span class="key">Business-as-usual (BAU)</span>, <span class="key">SC1</span>, <span class="key">SC2</span>:</p>
<table>
<thead><tr><th>Scenario</th><th>GDP growth (%)</th><th>Inflation (%)</th><th>ER index</th></tr></thead>
<tbody>
<tr><td>Baseline</td><td>6.00</td><td>7.00</td><td>1.00</td></tr>
<tr><td>BAU</td><td>5.32</td><td>7.30</td><td>1.25</td></tr>
<tr><td>SC1</td><td>4.99</td><td>7.20</td><td>1.17</td></tr>
<tr><td>SC2</td><td>6.20</td><td>6.90</td><td>0.60</td></tr>
</tbody>
</table>
<p>The scenarios trace <span class="key">demand for food, exports, agriculture share in GDP</span> and the <span class="key">GINI index</span>. Notably, the sustainability scenario SC2 delivers the <em>highest</em> growth (6.20%) with the <em>lowest</em> inflation and a stronger currency — sustainable resource use need not cost growth.</p>`,
              id: `<p><span class="key">Jorgenson dkk. (2005)</span> memakai model CGE untuk mengestimasi dampak pada investasi, stok kapital, output, dan konsumsi: di AS, skenario <span class="key">"optimis"</span> menunjukkan efek dapat diabaikan/positif, sedangkan skenario <span class="key">"pesimis"</span> menunjukkan kerusakan nyata. Pelajarannya: saat dana lewat pasar modal mulai mengakui iklim sebagai risiko investasi, selisih jalur optimis vs pesimis melebar.</p>
<p><span class="key">Azis & Salim (2005)</span>, "Development Performance and Future Scenarios in the Context of Sustainable Utilization of Natural Resources" (ISEAS), menjalankan skenario CGE untuk Indonesia hingga <span class="key">2050</span>. Empat skenario — <span class="key">Baseline</span>, <span class="key">Business-as-usual (BAU)</span>, <span class="key">SC1</span>, <span class="key">SC2</span>:</p>
<table>
<thead><tr><th>Skenario</th><th>Pertumbuhan PDB (%)</th><th>Inflasi (%)</th><th>Indeks NT</th></tr></thead>
<tbody>
<tr><td>Baseline</td><td>6,00</td><td>7,00</td><td>1,00</td></tr>
<tr><td>BAU</td><td>5,32</td><td>7,30</td><td>1,25</td></tr>
<tr><td>SC1</td><td>4,99</td><td>7,20</td><td>1,17</td></tr>
<tr><td>SC2</td><td>6,20</td><td>6,90</td><td>0,60</td></tr>
</tbody>
</table>
<p>Skenario menelusuri <span class="key">permintaan pangan, ekspor, pangsa pertanian dalam PDB</span> dan <span class="key">indeks GINI</span>. Menariknya, skenario keberlanjutan SC2 memberi pertumbuhan <em>tertinggi</em> (6,20%) dengan inflasi <em>terendah</em> dan mata uang lebih kuat — pemanfaatan sumber daya berkelanjutan tak harus mengorbankan pertumbuhan.</p>`
            },
            chart: CGE_CHART
          },
          {
            title: { en: 'Food & poverty; why macroeconomists must "adjust" the paradigm', id: 'Pangan & kemiskinan; mengapa makroekonom harus "menyesuaikan" paradigma' },
            html: {
              en: `<p>The scenario runs track four poverty-relevant series: <span class="key">income of the poor</span>, the <span class="key">price of the poverty line</span>, <span class="key">food output</span> and the <span class="key">price of food</span>. The danger pattern: if the poverty-line price rises faster than poor incomes, measured poverty worsens even when aggregate GDP grows (formalised in Section 7 below).</p>
<p>Azis lists the <span class="key">summary of the macroeconomics of climate change</span>:</p>
<ul>
<li><span class="key">Indirect effects</span> matter: systemic linkages and indirect effects can turn a local shock into an economy-wide commodity/affordability shock.</li>
<li>It is <span class="key">costly</span>: ignoring it raises the expense of neglecting climate damage and adaptation can be substituted but not avoided.</li>
<li><span class="key">Policies</span>: mitigate climate damage and reduce resource exploitation by investing in resources to raise long-run productivity, while breaking the low-income trap.</li>
</ul>
<div class="tip">Why "adjust" the paradigm: turn today's divisive, degenerative weaknesses into <span class="key">regenerative</span> design by building <span class="key">agnostic, robust growth</span> with sustainability at the core — so the system enables people to thrive whether or not they are growing fast.</div>`,
              id: `<p>Jalannya skenario menelusuri empat seri terkait kemiskinan: <span class="key">pendapatan kaum miskin</span>, <span class="key">harga garis kemiskinan</span>, <span class="key">output pangan</span>, dan <span class="key">harga pangan</span>. Pola bahaya: bila harga garis kemiskinan naik lebih cepat dari pendapatan miskin, kemiskinan terukur memburuk bahkan saat PDB agregat tumbuh (diformalkan di Bagian 7).</p>
<p>Azis merangkum <span class="key">makroekonomi perubahan iklim</span>:</p>
<ul>
<li><span class="key">Efek tidak langsung</span> penting: keterkaitan sistemik dapat mengubah guncangan lokal menjadi guncangan komoditas/keterjangkauan seluruh ekonomi.</li>
<li>Ia <span class="key">mahal</span>: mengabaikannya menaikkan biaya kelalaian; adaptasi bisa disubstitusi tetapi tak bisa dihindari.</li>
<li><span class="key">Kebijakan</span>: mitigasi kerusakan iklim dan kurangi eksploitasi sumber daya dengan berinvestasi pada sumber daya untuk menaikkan produktivitas jangka panjang, sambil memutus perangkap pendapatan rendah.</li>
</ul>
<div class="tip">Mengapa "menyesuaikan" paradigma: ubah kelemahan yang memecah dan degeneratif hari ini menjadi desain <span class="key">regeneratif</span> dengan membangun <span class="key">pertumbuhan agnostik yang tangguh</span> berinti keberlanjutan — agar sistem memungkinkan orang berkembang baik mereka tumbuh cepat atau tidak.</div>`
            }
          },
          {
            title: { en: 'Carbon pricing & the Emissions Trading System (ETS)', id: 'Harga karbon & Sistem Perdagangan Emisi (ETS)' },
            html: {
              en: `<p><span class="key">Carbon pricing</span> works through two macro channels: <span class="key">inflation & prices</span> (higher carbon prices translate into higher energy costs, raising consumer-price inflation and offsetting overall economic output) and <span class="key">economic activity</span> (initially leads to lower output/consumption, but investment redirects to lower-carbon technologies, creating new opportunities).</p>
<p>The <span class="key">Emissions Trading System (ETS)</span> — "cap-and-trade":</p>
<ul>
<li><span class="key">Voluntary carbon prices (nature-based credits)</span>: in 2023, $4–13/tCO₂e depending on credit quality; <span class="key">compliance prices</span> (e.g. EU ETS) are much higher but not usually paid for avoided-deforestation credits.</li>
<li><span class="key">Trade</span>: companies receive or buy allowances (permits) for their emissions; if they emit less, they can sell unused allowances; if they emit more, they must buy.</li>
<li>The cap falls over time, ratcheting down total emissions, while trade lets cuts happen where they are cheapest. Effective for energy and industry; harder for diffuse sources (land transport).</li>
</ul>
<p>The share of global GHG emissions <span class="key">covered</span> by carbon pricing has risen over time (roughly 7% → 13% → 23% across recent years), per the World Bank Carbon Pricing Dashboard.</p>`,
              id: `<p><span class="key">Penetapan harga karbon</span> bekerja lewat dua kanal makro: <span class="key">inflasi & harga</span> (harga karbon lebih tinggi diterjemahkan ke biaya energi lebih tinggi, menaikkan inflasi harga konsumen dan menekan output) dan <span class="key">aktivitas ekonomi</span> (awalnya menurunkan output/konsumsi, tetapi investasi diarahkan ke teknologi rendah-karbon, menciptakan peluang baru).</p>
<p><span class="key">Sistem Perdagangan Emisi (ETS)</span> — "cap-and-trade":</p>
<ul>
<li><span class="key">Harga karbon sukarela (kredit berbasis alam)</span>: pada 2023, $4–13/tCO₂e bergantung kualitas kredit; <span class="key">harga kepatuhan</span> (mis. EU ETS) jauh lebih tinggi tetapi biasanya tidak dibayar untuk kredit anti-deforestasi.</li>
<li><span class="key">Perdagangan</span>: perusahaan menerima atau membeli jatah (izin) emisi; bila emisi lebih sedikit, jatah sisa dijual; bila lebih banyak, harus membeli.</li>
<li>Cap turun seiring waktu, menurunkan emisi total, sementara perdagangan membuat pemotongan terjadi di tempat termurah. Efektif untuk energi & industri; lebih sulit untuk sumber tersebar (transportasi darat).</li>
</ul>
<p>Pangsa emisi GRK global yang <span class="key">tercakup</span> harga karbon naik seiring waktu (kira-kira 7% → 13% → 23% pada tahun-tahun terakhir), menurut World Bank Carbon Pricing Dashboard.</p>`
            },
            chart: ETS_CHART
          }
        ]
      },

      {
        heading: { en: 'Crypto, money creation & the macroeconomy', id: 'Kripto, penciptaan uang & makroekonomi' },
        num: '4',
        cards: [
          {
            title: { en: 'What crypto is, and its upsides vs downsides', id: 'Apa itu kripto, dan untung vs ruginya' },
            html: {
              en: `<p><span class="key">Cryptocurrency</span> is digital money that does not require a bank or financial institution to verify transactions; it is <span class="key">secured by cryptography</span> (to verify transfers and an algorithm to control the creation of monetary units) and runs on a <span class="key">distributed public ledger called a blockchain</span>.</p>
<table>
<thead><tr><th>Upsides</th><th>Downsides</th></tr></thead>
<tbody>
<tr><td>Efficiency</td><td>"Community" (decentralised ledger) can back up the system but is hard to govern</td></tr>
<tr><td>Transparency</td><td>Spillovers to the payment system</td></tr>
<tr><td>Safety (cryptographic)</td><td>Loss of monetary-policy control</td></tr>
<tr><td>Institution-free</td><td>Complex regulation</td></tr>
</tbody>
</table>
<div class="note">Macro–crypto relation: in the short run the volatility of crypto matters little (a thin slice of wealth) but it is <em>not</em> macro-irrelevant — deflation/inflation or even monetary-policy announcements move it, and the increasing scope of crypto, especially during periods of stretched valuations and "bubbles", can spill into the real economy. The deck flags the US 2026 <span class="key">"Genius Act"</span> regulating stablecoins, and warns of fragile <span class="key">"Cloud States"</span> — global financial-system cyber defences.</div>`,
              id: `<p><span class="key">Cryptocurrency</span> adalah uang digital yang tidak memerlukan bank atau lembaga keuangan untuk memverifikasi transaksi; ia <span class="key">diamankan dengan kriptografi</span> (memverifikasi transfer dan algoritma mengontrol penciptaan unit moneter) dan berjalan di <span class="key">buku besar publik terdistribusi bernama blockchain</span>.</p>
<table>
<thead><tr><th>Untung</th><th>Rugi</th></tr></thead>
<tbody>
<tr><td>Efisiensi</td><td>"Komunitas" (buku besar terdesentralisasi) bisa menopang sistem tapi sulit ditata-kelola</td></tr>
<tr><td>Transparansi</td><td>Limpahan ke sistem pembayaran</td></tr>
<tr><td>Keamanan (kriptografis)</td><td>Kehilangan kontrol kebijakan moneter</td></tr>
<tr><td>Bebas-institusi</td><td>Regulasi kompleks</td></tr>
</tbody>
</table>
<div class="note">Relasi makro–kripto: jangka pendek volatilitas kripto kurang berarti (irisan kecil kekayaan) tetapi <em>bukan</em> tak-relevan-makro — deflasi/inflasi atau bahkan pengumuman kebijakan moneter menggerakkannya, dan cakupan kripto yang membesar, terutama saat valuasi meregang dan "gelembung", bisa melimpah ke ekonomi riil. Slide menyorot <span class="key">"Genius Act"</span> AS 2026 yang meregulasi stablecoin, dan memperingatkan <span class="key">"Cloud States"</span> yang rapuh — pertahanan siber sistem keuangan global.</div>`
            }
          },
          {
            title: { en: 'Money creation: RM, M2 and "loans create deposits"', id: 'Penciptaan uang: RM, M2, dan "pinjaman menciptakan deposito"' },
            html: {
              en: `<p>To judge crypto's threat to monetary policy you must first be clear on how money is actually created. The deck attacks two misconceptions and lands on the modern view:</p>
<ul>
<li><span class="key">M2 vs RM.</span> Reserve money (RM/M0) is what the central bank issues; broad money $M2 = M1 + \\text{savings/time deposits/funds}$ is mostly created by <em>commercial banks</em>.</li>
<li><span class="key">Loans create deposits.</span> When a bank lends, it simultaneously credits the borrower's deposit account — the act of lending <em>creates</em> new deposit money, expanding M2. Banks are not just intermediaries passing on pre-existing savings.</li>
<li><span class="key">Money is destroyed</span> when loans are repaid. Hence $M0 \\subset M1 \\subset M2$, and M2 is the best predictor of output.</li>
</ul>
<p>Crypto's role in monetary policy splits into a <span class="key">micro</span> effect (changing the composition / dimension of transactions in the exchange mechanism) and a <span class="key">macro</span> effect (potential loss of control over the money supply). The macro worry is small <em>today</em> but grows with adoption: if private crypto/stablecoins displace bank deposits and central-bank money, the link from the policy rate to broad money and credit weakens.</p>`,
              id: `<p>Untuk menilai ancaman kripto terhadap kebijakan moneter, pertama harus jelas bagaimana uang sebenarnya diciptakan. Slide menyerang dua miskonsepsi dan tiba pada pandangan modern:</p>
<ul>
<li><span class="key">M2 vs RM.</span> Uang cadangan (RM/M0) adalah yang diterbitkan bank sentral; uang luas $M2 = M1 + \\text{tabungan/deposito/dana}$ sebagian besar diciptakan <em>bank komersial</em>.</li>
<li><span class="key">Pinjaman menciptakan deposito.</span> Ketika bank memberi pinjaman, ia sekaligus mengkredit rekening deposito peminjam — tindakan meminjamkan <em>menciptakan</em> uang deposito baru, memperluas M2. Bank bukan sekadar perantara yang menyalurkan tabungan yang sudah ada.</li>
<li><span class="key">Uang dihancurkan</span> saat pinjaman dilunasi. Maka $M0 \\subset M1 \\subset M2$, dan M2 adalah prediktor output terbaik.</li>
</ul>
<p>Peran kripto dalam kebijakan moneter terbagi efek <span class="key">mikro</span> (mengubah komposisi/dimensi transaksi dalam mekanisme pertukaran) dan efek <span class="key">makro</span> (potensi kehilangan kontrol atas jumlah uang beredar). Kekhawatiran makro kecil <em>hari ini</em> tetapi tumbuh dengan adopsi: bila kripto/stablecoin privat menggeser deposito bank dan uang bank sentral, kaitan dari suku bunga kebijakan ke uang luas dan kredit melemah.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'CBDC: design, trade-offs & putting it in the model', id: 'CBDC: desain, trade-off & memasukkannya ke model' },
        num: '5',
        cards: [
          {
            title: { en: 'CBDC vs crypto; two-tier vs retail; synthetic CBDC', id: 'CBDC vs kripto; dua-tingkat vs ritel; CBDC sintetis' },
            html: {
              en: `<p>A <span class="key">CBDC</span> is the digital form of central-bank money — a digital liability of (and claim on) the central bank, unlike private crypto. The deck distinguishes <span class="key">cryptocurrency-CBDC</span> from a plain <span class="key">central-bank digital currency</span>, and contrasts two delivery models:</p>
<ul>
<li><span class="key">Two-tier (wholesale-style)</span>: the CBDC is a claim on the central bank but distributed <em>through</em> commercial banks. This deliberately <span class="key">prevents disintermediation</span> — deposits stay in the banking system, so credit creation continues.</li>
<li><span class="key">Retail (direct)</span>: households hold the CBDC directly at the central bank. Better for inclusion and targeting, but risks <span class="key">disintermediation</span> — money migrates out of bank deposits, cutting the deposit base that funds lending.</li>
</ul>
<p><span class="key">Synthetic CBDC (sCBDC)</span> is a hybrid: private intermediaries issue tokens fully backed by central-bank reserves. It keeps central-bank settlement safety while outsourcing the consumer interface — more private innovation, but it affects deposit-taking institutions and adds counterparty layers.</p>
<div class="tip">Benefits of CBDC: a new monetary-policy tool, greater financial inclusion, no account-maintenance fees, faster/cheaper payments, minimal-to-no expense for end users. Costs: implementing it can <span class="key">disintermediate banks</span>, raise privacy and cyber concerns, and (for direct/retail) require the central bank to run a vast retail operation.</div>`,
              id: `<p><span class="key">CBDC</span> adalah bentuk digital uang bank sentral — kewajiban (dan klaim atas) bank sentral, berbeda dari kripto privat. Slide membedakan <span class="key">cryptocurrency-CBDC</span> dari <span class="key">central-bank digital currency</span> biasa, dan membandingkan dua model penyaluran:</p>
<ul>
<li><span class="key">Dua-tingkat (gaya wholesale)</span>: CBDC adalah klaim atas bank sentral tetapi disalurkan <em>melalui</em> bank komersial. Ini sengaja <span class="key">mencegah disintermediasi</span> — deposito tetap di sistem perbankan, sehingga penciptaan kredit berlanjut.</li>
<li><span class="key">Ritel (langsung)</span>: rumah tangga memegang CBDC langsung di bank sentral. Lebih baik untuk inklusi dan penargetan, tetapi berisiko <span class="key">disintermediasi</span> — uang bermigrasi keluar dari deposito bank, memangkas basis deposito yang mendanai pinjaman.</li>
</ul>
<p><span class="key">CBDC sintetis (sCBDC)</span> adalah hibrida: perantara privat menerbitkan token yang sepenuhnya dijamin cadangan bank sentral. Ia menjaga keamanan setelmen bank sentral sambil mengalihdayakan antarmuka konsumen — lebih banyak inovasi privat, tetapi memengaruhi lembaga penerima deposito dan menambah lapisan counterparty.</p>
<div class="tip">Manfaat CBDC: alat kebijakan moneter baru, inklusi keuangan lebih besar, tanpa biaya pemeliharaan rekening, pembayaran lebih cepat/murah, biaya minimal bagi pengguna akhir. Biaya: implementasinya bisa <span class="key">mendisintermediasi bank</span>, menimbulkan kekhawatiran privasi & siber, dan (untuk langsung/ritel) menuntut bank sentral menjalankan operasi ritel yang masif.</div>`
            }
          },
          {
            title: { en: 'Incorporating digital currency & CBDC into the macro model', id: 'Memasukkan mata uang digital & CBDC ke model makro' },
            html: {
              en: `<p>Same proxy philosophy as climate — bolt the new instrument onto existing equations:</p>
<ol>
<li><span class="key">Money-demand / velocity adjustment.</span> Let digital money shift money demand:
<div class="formula">$$M^{d} = f\\big(Y,\\; i,\\; \\phi\\cdot \\text{CBDCshare} + \\kappa\\cdot \\text{cryptovol}\\big),$$</div>
where a larger CBDC share and higher crypto volatility change how much money people want to hold and how fast it circulates.</li>
<li><span class="key">Disintermediation (financial block).</span> Bank deposits fall with CBDC adoption:
<div class="formula">$$\\text{Bankdep} = a - \\beta\\cdot \\text{CBDCadopt} + \\gamma Y_d + \\varepsilon.$$</div>
Fewer deposits ⇒ less credit ⇒ weaker investment — a quantity channel that bypasses the interest rate.</li>
<li><span class="key">Consumption / programmability.</span> Programmable CBDC (and a higher marginal propensity to consume from targeted digital transfers) can tighten the transmission from fiscal transfers to spending.</li>
</ol>
<div class="note">The unifying message of Sections 4–5: both crypto and CBDC are best handled as <span class="key">shifters inside the workhorse model</span> — they move money demand, the deposit base, and consumption — rather than as a brand-new model. The key risk they share is <span class="key">disintermediation</span> weakening the bank-credit channel of monetary policy.</div>`,
              id: `<p>Filosofi proksi yang sama seperti iklim — tempelkan instrumen baru ke persamaan yang ada:</p>
<ol>
<li><span class="key">Permintaan uang / penyesuaian velositas.</span> Biarkan uang digital menggeser permintaan uang:
<div class="formula">$$M^{d} = f\\big(Y,\\; i,\\; \\phi\\cdot \\text{CBDCshare} + \\kappa\\cdot \\text{cryptovol}\\big),$$</div>
di mana pangsa CBDC lebih besar dan volatilitas kripto lebih tinggi mengubah berapa banyak uang yang ingin dipegang orang dan seberapa cepat ia beredar.</li>
<li><span class="key">Disintermediasi (blok keuangan).</span> Deposito bank turun seiring adopsi CBDC:
<div class="formula">$$\\text{Bankdep} = a - \\beta\\cdot \\text{CBDCadopt} + \\gamma Y_d + \\varepsilon.$$</div>
Deposito lebih sedikit ⇒ kredit lebih sedikit ⇒ investasi lebih lemah — kanal kuantitas yang melewati suku bunga.</li>
<li><span class="key">Konsumsi / programabilitas.</span> CBDC yang dapat diprogram (dan MPC lebih tinggi dari transfer digital tertarget) bisa mengetatkan transmisi dari transfer fiskal ke belanja.</li>
</ol>
<div class="note">Pesan pemersatu Bagian 4–5: baik kripto maupun CBDC paling baik ditangani sebagai <span class="key">penggeser di dalam model workhorse</span> — keduanya menggerakkan permintaan uang, basis deposito, dan konsumsi — bukan sebagai model baru. Risiko kunci yang mereka bagi adalah <span class="key">disintermediasi</span> yang melemahkan kanal kredit bank dari kebijakan moneter.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Macroeconomics & welfare — poverty, inequality, the informal sector', id: 'Makroekonomi & kesejahteraan — kemiskinan, ketimpangan, sektor informal' },
        num: '6',
        cards: [
          {
            title: { en: 'A welfare macro: the 4-quadrant poverty diagram (α<β)', id: 'Makro kesejahteraan: diagram kemiskinan 4-kuadran (α<β)' },
            html: {
              en: `<p>Azis asks whether AS–AD and IS–LM can be re-read for <span class="key">income inequality and poverty</span>. The central construction is a four-quadrant diagram linking the price level $P$ and output $Y$ to two poverty objects:</p>
<ul>
<li>the <span class="key">poverty line</span> $PL$, whose elasticity with respect to the price level is <span class="key">$\\alpha$</span> (food/essentials drive $PL$);</li>
<li>the <span class="key">income of the poor</span> $Y^{poor}$, whose elasticity with respect to aggregate income $Y$ is <span class="key">$\\beta$</span>.</li>
</ul>
<p>The decisive condition:</p>
<div class="formula">$$\\alpha < \\beta \\;\\Longrightarrow\\; \\text{poverty tends to WORSEN}.$$</div>
<p>Wait — read the geometry carefully: when the poverty line responds to inflation <em>more</em> strongly than poor incomes respond to growth (i.e. the cost of being non-poor rises faster than the poor's income), poverty worsens. A <span class="key">"better income distribution"</span> curve lifts $Y^{poor}$ for any $Y$ (raises the effective $\\beta$), a <span class="key">"worse"</span> curve flattens it. In the <span class="key">flat-AS</span> case the same nominal shock has a larger real-output effect, changing how growth maps into poverty relief.</p>
<div class="note">The point: <em>growth alone is not welfare</em>. Whether macro stabilisation helps the poor depends on the relative elasticities ($\\alpha$ vs $\\beta$) and on the shape of the distribution curve — two economies with identical GDP growth can move poverty in opposite directions.</div>`,
              id: `<p>Azis bertanya apakah AS–AD dan IS–LM dapat dibaca ulang untuk <span class="key">ketimpangan pendapatan dan kemiskinan</span>. Konstruksi intinya adalah diagram empat-kuadran yang menghubungkan tingkat harga $P$ dan output $Y$ ke dua objek kemiskinan:</p>
<ul>
<li><span class="key">garis kemiskinan</span> $PL$, yang elastisitasnya terhadap tingkat harga adalah <span class="key">$\\alpha$</span> (pangan/kebutuhan pokok menggerakkan $PL$);</li>
<li><span class="key">pendapatan kaum miskin</span> $Y^{poor}$, yang elastisitasnya terhadap pendapatan agregat $Y$ adalah <span class="key">$\\beta$</span>.</li>
</ul>
<p>Kondisi penentu:</p>
<div class="formula">$$\\alpha < \\beta \\;\\Longrightarrow\\; \\text{kemiskinan cenderung MEMBURUK}.$$</div>
<p>Baca geometri dengan cermat: ketika garis kemiskinan merespons inflasi <em>lebih</em> kuat daripada respons pendapatan miskin terhadap pertumbuhan (yakni biaya menjadi tidak-miskin naik lebih cepat dari pendapatan kaum miskin), kemiskinan memburuk. Kurva <span class="key">"distribusi pendapatan lebih baik"</span> mengangkat $Y^{poor}$ untuk setiap $Y$ (menaikkan $\\beta$ efektif), kurva <span class="key">"lebih buruk"</span> melandaikannya. Dalam kasus <span class="key">AS-datar</span>, guncangan nominal yang sama berdampak output riil lebih besar, mengubah bagaimana pertumbuhan dipetakan ke pengentasan kemiskinan.</p>
<div class="note">Intinya: <em>pertumbuhan saja bukan kesejahteraan</em>. Apakah stabilisasi makro menolong kaum miskin bergantung pada elastisitas relatif ($\\alpha$ vs $\\beta$) dan bentuk kurva distribusi — dua ekonomi dengan pertumbuhan PDB identik bisa menggerakkan kemiskinan ke arah berlawanan.</div>`
            },
            chart: WELFARE_CHART
          },
          {
            title: { en: 'Recovery policy & welfare: AD shock vs PC shock', id: 'Kebijakan pemulihan & kesejahteraan: guncangan AD vs PC' },
            html: {
              en: `<p>How you engineer a recovery has welfare consequences, because the <span class="key">Y–π trade-off</span> depends on the slopes:</p>
<ul>
<li><span class="key">AD shock when the Phillips curve is steep</span> (Chart left): pushing AD right raises output only a little ($Y_0\\to Y_1$ is small) but inflation jumps a lot ($\\Delta\\pi$ large). Raising $Y$ by an AD shock is <span class="key">costly</span>.</li>
<li><span class="key">PC shock under a flat AD</span> (Chart right): a favourable supply/Phillips shift raises output a lot and lets the price level fall — a <span class="key">win-win</span>. "Given a PC shock, $p$ falls a little but the increase in $Y$ is larger."</li>
</ul>
<div class="tip">Azis's recovery rule: <span class="key">"better use a PC (supply-side) shock"</span> than an AD shock to raise welfare — supply-side measures (productivity, logistics, food supply) raise $Y$ without the inflation penalty that hurts the poor most.</div>`,
              id: `<p>Cara merekayasa pemulihan punya konsekuensi kesejahteraan, karena <span class="key">trade-off Y–π</span> bergantung pada kemiringan:</p>
<ul>
<li><span class="key">Guncangan AD saat kurva Phillips curam</span> (grafik kiri): mendorong AD ke kanan menaikkan output hanya sedikit ($Y_0\\to Y_1$ kecil) tetapi inflasi melonjak besar ($\\Delta\\pi$ besar). Menaikkan $Y$ lewat guncangan AD itu <span class="key">mahal</span>.</li>
<li><span class="key">Guncangan PC di bawah AD datar</span> (grafik kanan): pergeseran penawaran/Phillips yang menguntungkan menaikkan output banyak dan membiarkan tingkat harga turun — <span class="key">menang-menang</span>. "Diberi guncangan PC, $p$ turun sedikit tetapi kenaikan $Y$ lebih besar."</li>
</ul>
<div class="tip">Aturan pemulihan Azis: <span class="key">"lebih baik pakai guncangan PC (sisi penawaran)"</span> daripada guncangan AD untuk menaikkan kesejahteraan — langkah sisi penawaran (produktivitas, logistik, pasokan pangan) menaikkan $Y$ tanpa penalti inflasi yang paling menyakiti kaum miskin.</div>`
            },
            chart: ADSHOCK_CHART
          },
          {
            title: { en: 'The win-win PC shock (flat AD)', id: 'Guncangan PC menang-menang (AD datar)' },
            html: {
              en: `<p>The companion diagram makes the win-win explicit. Under a relatively <span class="key">flat AD</span>, a favourable Phillips-curve shift ($PC_0\\to PC_1$) moves equilibrium from $A_0$ to a point with <em>higher output</em> ($Y_1>Y_0$) and a <em>lower price</em> ($p_1<p_0$). Because AD is flat, almost all of the shock shows up as extra output rather than price change.</p>
<p>This is the macro case for <span class="key">supply-side recovery</span> in an emerging economy: investing in productivity, infrastructure and food supply shifts the Phillips/AS relation favourably, delivering growth <em>and</em> disinflation — exactly the combination that improves poor households' real incomes.</p>`,
              id: `<p>Diagram pendamping memperjelas menang-menang. Di bawah <span class="key">AD yang relatif datar</span>, pergeseran kurva Phillips yang menguntungkan ($PC_0\\to PC_1$) memindahkan keseimbangan dari $A_0$ ke titik dengan <em>output lebih tinggi</em> ($Y_1>Y_0$) dan <em>harga lebih rendah</em> ($p_1<p_0$). Karena AD datar, hampir seluruh guncangan muncul sebagai output ekstra ketimbang perubahan harga.</p>
<p>Inilah argumen makro untuk <span class="key">pemulihan sisi penawaran</span> di ekonomi berkembang: berinvestasi pada produktivitas, infrastruktur, dan pasokan pangan menggeser relasi Phillips/AS secara menguntungkan, memberi pertumbuhan <em>dan</em> disinflasi — persis kombinasi yang memperbaiki pendapatan riil rumah tangga miskin.</p>`
            },
            chart: PCSHOCK_CHART
          },
          {
            title: { en: 'The formal vs non-formal IS–LM: where contractionary policy really lands', id: 'IS–LM formal vs non-formal: ke mana kebijakan kontraktif benar-benar jatuh' },
            html: {
              en: `<p>Indonesia's labour market is dominated by the <span class="key">informal/non-formal sector</span> — informal employment is roughly <span class="key">56–60%</span> (ILO/BPS), high even by regional standards (Philippines 60–65%, Vietnam 55–58%, Thailand 50–52%, vs Malaysia and Singapore ~8–10%). A model that ignores it mis-predicts policy.</p>
<p>Azis runs a paired <span class="key">IS–LM + Phillips</span> for the Formal (F) and Non-Formal (NF) sectors and considers two contractions:</p>
<ul>
<li><span class="key">Reduce government spending (↓G)</span>: the formal $IS^{F}$ shifts left, formal interest rate and output fall; demand for the non-formal good rises (the medium-term equilibrium moves), so output is <span class="key">reshuffled into the informal sector</span> — informality acts as a shock absorber.</li>
<li><span class="key">Raise household tax (↑$T^{H}$)</span>: same mechanism — formal disposable income and demand fall, the non-formal sector swells. The medium-run result is "a new equilibrium" with a smaller formal economy.</li>
</ul>
<div class="note">Exam-relevant: in a dual economy, contractionary fiscal policy does not simply shrink output — it <em>changes its composition</em>, pushing workers into low-productivity informal work. Standard one-sector IS–LM misses this distributional/structural cost.</div>`,
              id: `<p>Pasar kerja Indonesia didominasi <span class="key">sektor informal/non-formal</span> — pekerjaan informal sekitar <span class="key">56–60%</span> (ILO/BPS), tinggi bahkan menurut standar regional (Filipina 60–65%, Vietnam 55–58%, Thailand 50–52%, vs Malaysia dan Singapura ~8–10%). Model yang mengabaikannya salah memprediksi kebijakan.</p>
<p>Azis menjalankan pasangan <span class="key">IS–LM + Phillips</span> untuk sektor Formal (F) dan Non-Formal (NF) dan mempertimbangkan dua kontraksi:</p>
<ul>
<li><span class="key">Kurangi belanja pemerintah (↓G)</span>: $IS^{F}$ formal bergeser kiri, suku bunga dan output formal turun; permintaan barang non-formal naik (keseimbangan jangka menengah bergerak), sehingga output <span class="key">dialihkan ke sektor informal</span> — informalitas berperan sebagai peredam guncangan.</li>
<li><span class="key">Naikkan pajak rumah tangga (↑$T^{H}$)</span>: mekanisme sama — pendapatan disposabel dan permintaan formal turun, sektor non-formal membengkak. Hasil jangka menengah "keseimbangan baru" dengan ekonomi formal lebih kecil.</li>
</ul>
<div class="note">Relevan-ujian: di ekonomi dualistik, kebijakan fiskal kontraktif tidak sekadar mengecilkan output — ia <em>mengubah komposisinya</em>, mendorong pekerja ke kerja informal berproduktivitas rendah. IS–LM satu-sektor standar melewatkan biaya distribusional/struktural ini.</div>`
            },
            chart: NONFORMAL_CHART
          },
          {
            title: { en: 'Centripetal vs centrifugal forces & inequality (Piketty r>g)', id: 'Gaya sentripetal vs sentrifugal & ketimpangan (Piketty r>g)' },
            html: {
              en: `<p>Azis closes with a structural view of why "good intentions in policy often get overwhelmed by structural financial logic". Define <span class="key">centripetal (CP)</span> forces that concentrate wealth and <span class="key">centrifugal (CF)</span> forces that spread it (the "rising tide that lifts all boats").</p>
<p><span class="key">Core mechanism (Piketty):</span> when the return on capital exceeds the growth rate, $r > g$, wealth compounds faster than the economy grows — CP beats CF and capital concentrates. The deck lists five channels where the financial system acts as a CP machine:</p>
<ol>
<li><span class="key">Asset-price inflation</span>: cheap money meant to stimulate the real economy (CF — jobs, wages, investment) instead inflated asset prices (stocks, bonds, real estate, private equity) owned by the rich → the stimulus is "captured" by CP.</li>
<li><span class="key">Carry trade & financial vs wage returns</span>: capital seeks the highest return globally; labour cannot. CP > CF in its purest form.</li>
<li><span class="key">Financialization of housing</span>: housing shifts from shelter (a CF social good) to an investment asset (CP-return-seeking).</li>
<li><span class="key">Credit-access asymmetry</span>: the wealthy borrow cheaply to invest (generate $r$); the poor borrow expensively to consume (credit cards 20–30%, payday loans 300%+). Microfinance/financial inclusion (CF) barely dents the structural asymmetry.</li>
<li><span class="key">Tax-system erosion by capital mobility</span>: mobile corporate and capital income escapes tax while labour income is taxed at source → CP logic of capital flight dismantles the CF taxation-redistribution channel, shrinking fiscal capacity to fund CF programmes.</li>
</ol>
<div class="tip">The synthesis of the whole week: climate, crypto/CBDC and inequality are all cases where <span class="key">market/financial logic (CP) overwhelms well-meaning policy (CF)</span> unless the model — and the policy — is explicitly redesigned (regenerative growth, supply-side recovery, CBDC that preserves intermediation, redistribution robust to capital mobility).</div>`,
              id: `<p>Azis menutup dengan pandangan struktural mengapa "niat baik kebijakan sering kalah oleh logika finansial struktural". Definisikan gaya <span class="key">sentripetal (CP)</span> yang memusatkan kekayaan dan gaya <span class="key">sentrifugal (CF)</span> yang menyebarkannya ("air pasang yang mengangkat semua perahu").</p>
<p><span class="key">Mekanisme inti (Piketty):</span> ketika imbal hasil kapital melebihi laju pertumbuhan, $r > g$, kekayaan berbunga lebih cepat dari pertumbuhan ekonomi — CP mengalahkan CF dan kapital memusat. Slide mencantumkan lima kanal di mana sistem keuangan menjadi mesin CP:</p>
<ol>
<li><span class="key">Inflasi harga aset</span>: uang murah yang dimaksudkan menstimulasi ekonomi riil (CF — lapangan kerja, upah, investasi) malah menggelembungkan harga aset (saham, obligasi, properti, ekuitas privat) milik orang kaya → stimulus "ditangkap" CP.</li>
<li><span class="key">Carry trade & imbal finansial vs upah</span>: kapital mencari imbal tertinggi secara global; tenaga kerja tidak bisa. CP > CF dalam bentuk termurni.</li>
<li><span class="key">Finansialisasi perumahan</span>: rumah bergeser dari tempat tinggal (barang sosial CF) ke aset investasi (pencari-imbal CP).</li>
<li><span class="key">Asimetri akses kredit</span>: orang kaya meminjam murah untuk berinvestasi (menghasilkan $r$); orang miskin meminjam mahal untuk konsumsi (kartu kredit 20–30%, pinjaman harian 300%+). Mikrofinans/inklusi keuangan (CF) nyaris tak menggores asimetri struktural.</li>
<li><span class="key">Erosi sistem pajak oleh mobilitas kapital</span>: pendapatan korporasi dan kapital yang mobile lolos pajak sementara pendapatan tenaga kerja dipajaki di sumber → logika CP pelarian kapital membongkar kanal pajak-redistribusi CF, mengecilkan kapasitas fiskal mendanai program CF.</li>
</ol>
<div class="tip">Sintesis seluruh minggu: iklim, kripto/CBDC, dan ketimpangan semuanya kasus di mana <span class="key">logika pasar/finansial (CP) mengalahkan kebijakan berniat baik (CF)</span> kecuali model — dan kebijakannya — secara eksplisit didesain ulang (pertumbuhan regeneratif, pemulihan sisi penawaran, CBDC yang menjaga intermediasi, redistribusi yang tahan mobilitas kapital).</div>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Emerging-issues toolkit', id: 'Kit alat isu baru' },
        num: 'F',
        cards: [
          {
            title: { en: 'Climate & productivity', id: 'Iklim & produktivitas' },
            html: {
              en: `<div class="formula">Constant returns ⇒ per-worker form: $\\;\\dfrac{Y}{N} = F\\!\\left(\\dfrac{K}{N}, 1\\right)$</div>
<div class="formula">Cobb–Douglas with technology: $\\;Y = K^{\\alpha}(NA)^{1-\\alpha}$</div>
<div class="formula">Solow residual: $\\;g_Y - \\alpha g_K - (1-\\alpha) g_N = (1-\\alpha) g_A$</div>
<div class="formula">Damage function: $\\;Y = f\\big(K, L, A\\,(1-D(T))\\big), \\quad D(T) = \\alpha T^{2}$</div>
<div class="formula">Green investment: $\\;I^{green} = \\alpha + \\beta\\,\\text{Carbon\\_price} + \\gamma\\,\\text{Policy\\_dummy} + \\varepsilon,\\quad I = I + I^{green}$</div>
<div class="formula">Climate consumption: $\\;C = \\alpha + \\beta Y_d - \\gamma P^{energy} + \\varepsilon$</div>`,
              id: `<div class="formula">Skala hasil konstan ⇒ bentuk per-pekerja: $\\;\\dfrac{Y}{N} = F\\!\\left(\\dfrac{K}{N}, 1\\right)$</div>
<div class="formula">Cobb–Douglas dengan teknologi: $\\;Y = K^{\\alpha}(NA)^{1-\\alpha}$</div>
<div class="formula">Residu Solow: $\\;g_Y - \\alpha g_K - (1-\\alpha) g_N = (1-\\alpha) g_A$</div>
<div class="formula">Fungsi kerusakan: $\\;Y = f\\big(K, L, A\\,(1-D(T))\\big), \\quad D(T) = \\alpha T^{2}$</div>
<div class="formula">Investasi hijau: $\\;I^{green} = \\alpha + \\beta\\,\\text{Harga\\_karbon} + \\gamma\\,\\text{Dummy} + \\varepsilon,\\quad I = I + I^{green}$</div>
<div class="formula">Konsumsi iklim: $\\;C = \\alpha + \\beta Y_d - \\gamma P^{energy} + \\varepsilon$</div>`
            }
          },
          {
            title: { en: 'Crypto, CBDC & money', id: 'Kripto, CBDC & uang' },
            html: {
              en: `<div class="formula">Broad money: $\\;M0 \\subset M1 \\subset M2$, banks create deposits when they lend</div>
<div class="formula">Digital money demand: $\\;M^{d} = f\\big(Y, i, \\phi\\cdot\\text{CBDCshare} + \\kappa\\cdot\\text{cryptovol}\\big)$</div>
<div class="formula">Disintermediation: $\\;\\text{Bankdep} = a - \\beta\\cdot\\text{CBDCadopt} + \\gamma Y_d + \\varepsilon$</div>
<p>CBDC = digital liability of the central bank. Two-tier preserves bank intermediation; retail/direct risks disintermediation; synthetic CBDC = privately issued, fully reserve-backed.</p>`,
              id: `<div class="formula">Uang luas: $\\;M0 \\subset M1 \\subset M2$, bank menciptakan deposito saat meminjamkan</div>
<div class="formula">Permintaan uang digital: $\\;M^{d} = f\\big(Y, i, \\phi\\cdot\\text{CBDCshare} + \\kappa\\cdot\\text{cryptovol}\\big)$</div>
<div class="formula">Disintermediasi: $\\;\\text{Bankdep} = a - \\beta\\cdot\\text{CBDCadopt} + \\gamma Y_d + \\varepsilon$</div>
<p>CBDC = kewajiban digital bank sentral. Dua-tingkat menjaga intermediasi bank; ritel/langsung berisiko disintermediasi; CBDC sintetis = diterbitkan privat, dijamin penuh cadangan.</p>`
            }
          },
          {
            title: { en: 'Welfare & inequality', id: 'Kesejahteraan & ketimpangan' },
            html: {
              en: `<div class="formula">Poverty condition: $\\;\\alpha = \\varepsilon_{PL,P}, \\;\\; \\beta = \\varepsilon_{Y^{poor},Y}; \\quad \\alpha < \\beta \\Rightarrow \\text{poverty worsens}$</div>
<div class="formula">Piketty: $\\;r > g \\Rightarrow$ wealth concentrates (centripetal beats centrifugal)</div>
<p>Recovery rule: prefer a PC (supply-side) shock to an AD shock — raises $Y$ without the inflation that hurts the poor; effect is largest when AD is flat / PC is not too steep.</p>`,
              id: `<div class="formula">Kondisi kemiskinan: $\\;\\alpha = \\varepsilon_{PL,P}, \\;\\; \\beta = \\varepsilon_{Y^{poor},Y}; \\quad \\alpha < \\beta \\Rightarrow \\text{kemiskinan memburuk}$</div>
<div class="formula">Piketty: $\\;r > g \\Rightarrow$ kekayaan memusat (sentripetal mengalahkan sentrifugal)</div>
<p>Aturan pemulihan: utamakan guncangan PC (sisi penawaran) ketimbang AD — menaikkan $Y$ tanpa inflasi yang menyakiti miskin; efek terbesar saat AD datar / PC tidak terlalu curam.</p>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Diagrams to be able to draw', id: 'Diagram yang harus bisa digambar' },
        num: 'G',
        cards: [
          { title: { en: '1. Labour productivity & TFP', id: '1. Produktivitas tenaga kerja & TFP' },
            html: { en: '<p>Concave $Y/N=F(K/N,1)$; a rise in $A$ (or skill) shifts the whole curve up. Draw when asked how growth or climate acts on the supply side.</p>',
                    id: '<p>$Y/N=F(K/N,1)$ cekung; kenaikan $A$ (atau keterampilan) menggeser kurva ke atas. Gambar bila ditanya bagaimana pertumbuhan atau iklim bekerja di sisi penawaran.</p>' }, chart: PROD_CHART },
          { title: { en: '2. Solow steady state', id: '2. Steady state Solow' },
            html: { en: '<p>Saving $s f(K/N)$ vs depreciation $\\delta(K/N)$; intersection = $(K/N)^*$. Higher $s$ ⇒ higher steady-state capital per worker.</p>',
                    id: '<p>Tabungan $s f(K/N)$ vs depresiasi $\\delta(K/N)$; perpotongan = $(K/N)^*$. $s$ lebih tinggi ⇒ kapital per pekerja steady-state lebih tinggi.</p>' }, chart: SOLOW_CHART },
          { title: { en: '3. Climate damage as an AS shock', id: '3. Kerusakan iklim sebagai guncangan AS' },
            html: { en: '<p>$D(T)$ shifts AS left/up: output falls, prices rise. The supply-side face of climate in AD–AS.</p>',
                    id: '<p>$D(T)$ menggeser AS kiri/atas: output turun, harga naik. Wajah sisi-penawaran iklim dalam AD–AS.</p>' }, chart: DAMAGE_CHART },
          { title: { en: '4. CGE scenarios to 2050', id: '4. Skenario CGE hingga 2050' },
            html: { en: '<p>Azis–Salim (2005) GDP-growth bars: Baseline 6.00, BAU 5.32, SC1 4.99, SC2 6.20 — sustainability (SC2) need not cost growth.</p>',
                    id: '<p>Batang pertumbuhan PDB Azis–Salim (2005): Baseline 6,00, BAU 5,32, SC1 4,99, SC2 6,20 — keberlanjutan (SC2) tak harus mengorbankan pertumbuhan.</p>' }, chart: CGE_CHART },
          { title: { en: '5. Carbon-pricing coverage', id: '5. Cakupan harga karbon' },
            html: { en: '<p>Share of global emissions covered by carbon pricing rising over time (~7→13→23%).</p>',
                    id: '<p>Pangsa emisi global yang tercakup harga karbon naik seiring waktu (~7→13→23%).</p>' }, chart: ETS_CHART },
          { title: { en: '6. Poverty elasticities (α<β)', id: '6. Elastisitas kemiskinan (α<β)' },
            html: { en: '<p>Poverty line $PL(P)$ vs income of the poor $Y^{poor}(Y)$; if $\\alpha<\\beta$ poverty worsens. Better distribution lifts the $Y^{poor}$ line.</p>',
                    id: '<p>Garis kemiskinan $PL(P)$ vs pendapatan miskin $Y^{poor}(Y)$; bila $\\alpha<\\beta$ kemiskinan memburuk. Distribusi lebih baik mengangkat garis $Y^{poor}$.</p>' }, chart: WELFARE_CHART },
          { title: { en: '7. AD shock (steep PC) — costly', id: '7. Guncangan AD (PC curam) — mahal' },
            html: { en: '<p>Steep PC: an AD-driven recovery yields small $\\Delta Y$ but large $\\Delta\\pi$.</p>',
                    id: '<p>PC curam: pemulihan via AD memberi $\\Delta Y$ kecil tapi $\\Delta\\pi$ besar.</p>' }, chart: ADSHOCK_CHART },
          { title: { en: '8. PC shock (flat AD) — win-win', id: '8. Guncangan PC (AD datar) — menang-menang' },
            html: { en: '<p>Flat AD: a favourable PC/supply shock raises $Y$ a lot and lowers $p$ — growth with disinflation.</p>',
                    id: '<p>AD datar: guncangan PC/penawaran menguntungkan menaikkan $Y$ banyak dan menurunkan $p$ — pertumbuhan dengan disinflasi.</p>' }, chart: PCSHOCK_CHART },
          { title: { en: '9. Formal vs non-formal IS–LM', id: '9. IS–LM formal vs non-formal' },
            html: { en: '<p>↓G shifts $IS^F$ left ⇒ $r$ and $Y$ fall in the formal sector; activity is reshuffled into the informal sector.</p>',
                    id: '<p>↓G menggeser $IS^F$ kiri ⇒ $r$ dan $Y$ turun di sektor formal; aktivitas dialihkan ke sektor informal.</p>' }, chart: NONFORMAL_CHART }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Why does Prof. Azis insert climate into the model through the production function and TFP rather than through aggregate demand?',
             id: 'Mengapa Prof. Azis memasukkan iklim ke model lewat fungsi produksi dan TFP, bukan lewat permintaan agregat?' },
        answer: [
          { en: 'Climate is fundamentally a long-run, supply-side phenomenon: drought, heat and disaster lower potential output and erode the Solow residual ($g_A$), not just current spending.',
            id: 'Iklim pada dasarnya fenomena jangka panjang sisi penawaran: kekeringan, panas, dan bencana menurunkan output potensial dan menggerus residu Solow ($g_A$), bukan sekadar belanja kini.' },
          { en: 'Operationally he uses the damage function $Y=f(K,L,A(1-D(T)))$ with $D=\\alpha T^2$, so a hotter $T$ scales down effective productivity $A$ — an AS shift, which a demand-only model cannot represent.',
            id: 'Secara operasional ia memakai fungsi kerusakan $Y=f(K,L,A(1-D(T)))$ dengan $D=\\alpha T^2$, sehingga $T$ lebih panas menurunkan produktivitas efektif $A$ — pergeseran AS, yang tak bisa diwakili model murni-permintaan.' }
        ],
        tip: { en: 'A bad ENSO year is a negative supply shock: output↓, prices↑, budget hit, poverty up — all at once.',
               id: 'Tahun ENSO buruk adalah guncangan penawaran negatif: output↓, harga↑, anggaran tertekan, kemiskinan naik — sekaligus.' }
      },
      {
        type: 'quant',
        q: { en: 'In the Azis–Salim (2005) CGE table, which scenario is most attractive on growth, inflation and the exchange rate, and what does that imply?',
             id: 'Dalam tabel CGE Azis–Salim (2005), skenario mana paling menarik pada pertumbuhan, inflasi, dan nilai tukar, dan apa implikasinya?' },
        answer: [
          { en: 'SC2: GDP growth 6.20% (highest), inflation 6.90% (lowest of the four) and ER index 0.60 (strongest currency). Baseline is 6.00/7.00/1.00; BAU 5.32/7.30/1.25; SC1 4.99/7.20/1.17.',
            id: 'SC2: pertumbuhan PDB 6,20% (tertinggi), inflasi 6,90% (terendah dari empat) dan indeks NT 0,60 (mata uang terkuat). Baseline 6,00/7,00/1,00; BAU 5,32/7,30/1,25; SC1 4,99/7,20/1,17.' },
          { en: 'Implication: the sustainable-resource scenario dominates business-as-usual — sustainability is not a growth sacrifice but can deliver higher growth with lower inflation. It reframes climate policy as pro-growth.',
            id: 'Implikasi: skenario sumber daya berkelanjutan mengungguli business-as-usual — keberlanjutan bukan pengorbanan pertumbuhan melainkan bisa memberi pertumbuhan lebih tinggi dengan inflasi lebih rendah. Ini membingkai ulang kebijakan iklim sebagai pro-pertumbuhan.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Distinguish a two-tier CBDC from a direct/retail CBDC. Which one risks bank disintermediation and why does that matter for monetary policy?',
             id: 'Bedakan CBDC dua-tingkat dari CBDC langsung/ritel. Mana yang berisiko disintermediasi bank, dan mengapa itu penting bagi kebijakan moneter?' },
        answer: [
          { en: 'Two-tier: the CBDC is a claim on the central bank but is distributed through commercial banks, so deposits stay in banks — intermediation (and bank credit creation) is preserved.',
            id: 'Dua-tingkat: CBDC adalah klaim atas bank sentral tetapi disalurkan lewat bank komersial, sehingga deposito tetap di bank — intermediasi (dan penciptaan kredit bank) terjaga.' },
          { en: 'Direct/retail: households hold CBDC at the central bank. This risks disintermediation — money leaves bank deposits, shrinking the deposit base that funds loans.',
            id: 'Langsung/ritel: rumah tangga memegang CBDC di bank sentral. Ini berisiko disintermediasi — uang keluar dari deposito bank, mengecilkan basis deposito yang mendanai pinjaman.' },
          { en: 'It matters because banks create money when they lend ($M2$); a thinner deposit base weakens the bank-credit channel, so the policy rate transmits less powerfully to credit and output.',
            id: 'Penting karena bank menciptakan uang saat meminjamkan ($M2$); basis deposito yang menipis melemahkan kanal kredit bank, sehingga suku bunga kebijakan mentransmisikan lebih lemah ke kredit dan output.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'A government facing a budget squeeze cuts G and raises household tax. Using the formal/non-formal model, what happens to the structure of the economy?',
             id: 'Pemerintah yang terdesak anggaran memangkas G dan menaikkan pajak rumah tangga. Dengan model formal/non-formal, apa yang terjadi pada struktur ekonomi?' },
        answer: [
          { en: 'Both contractions shift the formal $IS^F$ left: formal interest rate and output fall. Disposable income drops, so formal demand falls.',
            id: 'Kedua kontraksi menggeser $IS^F$ formal ke kiri: suku bunga dan output formal turun. Pendapatan disposabel turun, sehingga permintaan formal turun.' },
          { en: 'Displaced workers and demand spill into the non-formal sector, which swells. Output is not just smaller — its composition shifts toward low-productivity informal work (informality as a shock absorber).',
            id: 'Pekerja dan permintaan yang tergeser melimpah ke sektor non-formal, yang membengkak. Output bukan hanya mengecil — komposisinya bergeser ke kerja informal berproduktivitas rendah (informalitas sebagai peredam guncangan).' },
          { en: 'Policy lesson: in a dual economy like Indonesia (informal ≈56–60%), fiscal contraction carries a hidden structural/distributional cost a one-sector IS–LM misses.',
            id: 'Pelajaran kebijakan: di ekonomi dualistik seperti Indonesia (informal ≈56–60%), kontraksi fiskal membawa biaya struktural/distribusional tersembunyi yang dilewatkan IS–LM satu-sektor.' }
        ]
      },
      {
        type: 'scenario',
        q: { en: 'Two emerging economies have identical GDP growth, but poverty rises in one and falls in the other. Explain with the α<β condition.',
             id: 'Dua ekonomi berkembang punya pertumbuhan PDB identik, tetapi kemiskinan naik di satu dan turun di yang lain. Jelaskan dengan kondisi α<β.' },
        answer: [
          { en: 'Let α = elasticity of the poverty line w.r.t. the price level and β = elasticity of poor incomes w.r.t. aggregate income. Growth raises Y (and usually P).',
            id: 'Misalkan α = elastisitas garis kemiskinan terhadap tingkat harga dan β = elastisitas pendapatan miskin terhadap pendapatan agregat. Pertumbuhan menaikkan Y (dan biasanya P).' },
          { en: 'If α<β — the poverty line outruns the poor’s incomes (essentials inflate faster than poor incomes grow) — measured poverty worsens despite growth. If α>β (or distribution improves, lifting the Y^poor line), poverty falls.',
            id: 'Bila α<β — garis kemiskinan melampaui pendapatan miskin (kebutuhan pokok berinflasi lebih cepat dari pertumbuhan pendapatan miskin) — kemiskinan terukur memburuk meski ada pertumbuhan. Bila α>β (atau distribusi membaik, mengangkat garis Y^poor), kemiskinan turun.' },
          { en: 'Hence the recovery design matters: a PC/supply-side shock (lower food/energy prices) helps the poor more than an AD shock that raises inflation.',
            id: 'Maka desain pemulihan penting: guncangan PC/sisi-penawaran (harga pangan/energi lebih rendah) menolong kaum miskin lebih dari guncangan AD yang menaikkan inflasi.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Explain Piketty’s r>g as a "centripetal vs centrifugal" force and give two channels through which loose monetary policy can be centripetal.',
             id: 'Jelaskan r>g Piketty sebagai gaya "sentripetal vs sentrifugal" dan beri dua kanal yang membuat kebijakan moneter longgar bisa bersifat sentripetal.' },
        answer: [
          { en: 'Centrifugal (CF) forces spread income (jobs, wages); centripetal (CP) forces concentrate wealth. When r>g, capital compounds faster than the economy grows, so CP dominates and wealth concentrates.',
            id: 'Gaya sentrifugal (CF) menyebarkan pendapatan (kerja, upah); gaya sentripetal (CP) memusatkan kekayaan. Ketika r>g, kapital berbunga lebih cepat dari pertumbuhan ekonomi, sehingga CP mendominasi dan kekayaan memusat.' },
          { en: 'Channel 1 — asset-price inflation: cheap money meant to stimulate jobs/investment (CF) instead inflates stocks, bonds and real estate owned by the rich (CP capture). Channel 2 — credit-access asymmetry: the rich borrow cheaply to invest (earn r), the poor borrow expensively to consume (20–300%), widening the gap.',
            id: 'Kanal 1 — inflasi harga aset: uang murah yang dimaksudkan menstimulasi kerja/investasi (CF) malah menggelembungkan saham, obligasi, dan properti milik orang kaya (tangkapan CP). Kanal 2 — asimetri akses kredit: orang kaya meminjam murah untuk berinvestasi (memperoleh r), orang miskin meminjam mahal untuk konsumsi (20–300%), melebarkan kesenjangan.' }
        ],
        tip: { en: 'Week-13 synthesis: climate, crypto/CBDC and inequality are all cases of market/financial logic (CP) overwhelming well-meaning policy (CF) unless the model is redesigned.',
               id: 'Sintesis Minggu 13: iklim, kripto/CBDC, dan ketimpangan semuanya kasus logika pasar/finansial (CP) mengalahkan kebijakan berniat baik (CF) kecuali model didesain ulang.' }
      }
    ]
  };
})();
