/* ============================================================================
   PE2 — Week 10 · DEEPER, exam-likely graph scenarios (appended)
   Monetary & fiscal policy on AD: liquidity preference (two-panel money market
   + AD), the crowding-out toggle (accommodate vs MS-fixed, AD1→AD2→AD3), and a
   numeric multiplier 1/(1−MPC) visual. Bilingual (EN + ID).
   IIFE appends to window.PE2_WEEKS.w10.graphs defined in ./w10.js.
   Source: past UAS exams (2019, 2022, 2023, 2024, 2025) — see
   PE-2/_uas_graph_scenarios.md (Week 10 inventory).
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w10;
  if (!u) return;

  u.graphs = (u.graphs || []).concat([

    /* ===================================================================== */
    /* EX1 — Expansionary monetary policy, full two-panel chain               */
    /* ===================================================================== */
    {
      heading: {
        en: 'Deeper exam graphs — expansionary monetary policy (two-panel)',
        id: 'Grafik ujian lebih dalam — kebijakan moneter ekspansif (dua panel)'
      },
      num: 'EX1',
      cards: [
        {
          title: {
            en: 'Open-market purchase: MS↑ → r↓ → I↑ → AD→right',
            id: 'Operasi pasar terbuka beli: MS↑ → r↓ → I↑ → AD→kanan'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> the central bank conducts an <span class="key">open-market purchase</span> (buys government bonds). Trace it through both panels. <strong>Left (money market):</strong> the purchase injects money, so the vertical supply shifts <span class="key">MS₁→MS₂</span> and the equilibrium rate falls $r_1 \\to r_2$ <em>along</em> the fixed <span class="key">MD</span>. <strong>Right (AD):</strong> a lower <em>r</em> makes credit cheaper, investment <em>I</em> rises, and at every price level output demanded is higher, so <span class="key">AD₁→AD₂</span> (P↑, Y↑).</p>
<svg viewBox="0 0 560 250" width="100%" role="img" aria-label="Expansionary monetary policy: money market and AD two-panel">
  <!-- ===== left panel: money market (r vs M) ===== -->
  <line x1="55" y1="18" x2="55" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="205" x2="250" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="40" y="16" font-size="12" fill="#333">r</text>
  <text x="232" y="222" font-size="12" fill="#333">M</text>
  <text x="120" y="234" font-size="10" fill="#777">Quantity of money</text>
  <!-- MS1 vertical -->
  <line x1="150" y1="28" x2="150" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="124" y="40" font-size="11" fill="#0e8fb8">MS₁</text>
  <!-- MS2 vertical (right, dashed = new) -->
  <line x1="200" y1="28" x2="200" y2="205" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="203" y="40" font-size="11" fill="#0e8fb8">MS₂</text>
  <!-- MS shift arrow -->
  <line x1="156" y1="60" x2="194" y2="60" stroke="#111" stroke-width="1.2" marker-end="url(#ex1a)"/>
  <!-- MD downward -->
  <line x1="68" y1="48" x2="244" y2="195" stroke="#d97706" stroke-width="2"/>
  <text x="226" y="185" font-size="11" fill="#d97706">MD</text>
  <!-- equilibria -->
  <line x1="55" y1="98" x2="150" y2="98" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="55" y1="140" x2="200" y2="140" stroke="#999" stroke-dasharray="3 3"/>
  <circle cx="150" cy="98" r="3.2" fill="#111"/>
  <circle cx="200" cy="140" r="3.2" fill="#111"/>
  <text x="38" y="102" font-size="11" fill="#111">r₁</text>
  <text x="38" y="144" font-size="11" fill="#111">r₂</text>
  <!-- ===== right panel: AD (P vs Y) ===== -->
  <line x1="335" y1="18" x2="335" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="335" y1="205" x2="545" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="318" y="16" font-size="12" fill="#333">P</text>
  <text x="528" y="222" font-size="12" fill="#333">Y</text>
  <!-- AD1 -->
  <line x1="350" y1="38" x2="475" y2="198" stroke="#0e8fb8" stroke-width="2"/>
  <text x="352" y="52" font-size="11" fill="#0e8fb8">AD₁</text>
  <!-- AD2 (right, dashed) -->
  <line x1="405" y1="38" x2="530" y2="198" stroke="#16a34a" stroke-width="2.2" stroke-dasharray="4 3"/>
  <text x="512" y="58" font-size="11" fill="#16a34a">AD₂</text>
  <!-- AD shift arrow -->
  <line x1="430" y1="118" x2="478" y2="118" stroke="#111" stroke-width="1.4" marker-end="url(#ex1a)"/>
  <defs><marker id="ex1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker></defs>
</svg>
<div class="formula">$$ \\text{buy bonds} \\Rightarrow MS\\uparrow \\Rightarrow r\\downarrow \\Rightarrow I\\uparrow \\Rightarrow AD\\rightarrow \\Rightarrow P\\uparrow,\\; Y\\uparrow $$</div>
<div class="tip">📝 MS↑ → r↓ → I↑ → AD→right → P↑, Y↑. The link <em>between</em> the panels is investment: the money market sets <em>r</em>, and <em>r</em> drives the AD shift.</div>
<div class="note">⚠️ Common mistake: drawing MD shifting. An open-market operation moves <strong>MS</strong>; <em>r</em> then changes <em>along</em> a fixed MD. MD only shifts when <em>Y</em> or <em>P</em> changes. Also: for <em>contractionary</em> policy (sell bonds) reverse every arrow — MS left, r↑, AD left.</div>
<p><em>Appeared: UAS 2019 (S3a), 2024 (MCQ14), 2025 (MCQ13, MCQ15).</em></p>`,
            id: `<p><span class="key">Skenario ujian:</span> bank sentral melakukan <span class="key">operasi pasar terbuka beli</span> (membeli obligasi pemerintah). Telusuri lewat kedua panel. <strong>Kiri (pasar uang):</strong> pembelian menyuntik uang, sehingga penawaran tegak bergeser <span class="key">MS₁→MS₂</span> dan suku bunga keseimbangan turun $r_1 \\to r_2$ <em>sepanjang</em> <span class="key">MD</span> yang tetap. <strong>Kanan (AD):</strong> <em>r</em> yang lebih rendah membuat kredit lebih murah, investasi <em>I</em> naik, dan pada setiap tingkat harga output yang diminta lebih tinggi, sehingga <span class="key">AD₁→AD₂</span> (P↑, Y↑).</p>
<svg viewBox="0 0 560 250" width="100%" role="img" aria-label="Kebijakan moneter ekspansif: pasar uang dan AD dua panel">
  <line x1="55" y1="18" x2="55" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="205" x2="250" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="40" y="16" font-size="12" fill="#333">r</text>
  <text x="232" y="222" font-size="12" fill="#333">M</text>
  <text x="125" y="234" font-size="10" fill="#777">Jumlah uang</text>
  <line x1="150" y1="28" x2="150" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="124" y="40" font-size="11" fill="#0e8fb8">MS₁</text>
  <line x1="200" y1="28" x2="200" y2="205" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="203" y="40" font-size="11" fill="#0e8fb8">MS₂</text>
  <line x1="156" y1="60" x2="194" y2="60" stroke="#111" stroke-width="1.2" marker-end="url(#ex1aid)"/>
  <line x1="68" y1="48" x2="244" y2="195" stroke="#d97706" stroke-width="2"/>
  <text x="226" y="185" font-size="11" fill="#d97706">MD</text>
  <line x1="55" y1="98" x2="150" y2="98" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="55" y1="140" x2="200" y2="140" stroke="#999" stroke-dasharray="3 3"/>
  <circle cx="150" cy="98" r="3.2" fill="#111"/>
  <circle cx="200" cy="140" r="3.2" fill="#111"/>
  <text x="38" y="102" font-size="11" fill="#111">r₁</text>
  <text x="38" y="144" font-size="11" fill="#111">r₂</text>
  <line x1="335" y1="18" x2="335" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="335" y1="205" x2="545" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="318" y="16" font-size="12" fill="#333">P</text>
  <text x="528" y="222" font-size="12" fill="#333">Y</text>
  <line x1="350" y1="38" x2="475" y2="198" stroke="#0e8fb8" stroke-width="2"/>
  <text x="352" y="52" font-size="11" fill="#0e8fb8">AD₁</text>
  <line x1="405" y1="38" x2="530" y2="198" stroke="#16a34a" stroke-width="2.2" stroke-dasharray="4 3"/>
  <text x="512" y="58" font-size="11" fill="#16a34a">AD₂</text>
  <line x1="430" y1="118" x2="478" y2="118" stroke="#111" stroke-width="1.4" marker-end="url(#ex1aid)"/>
  <defs><marker id="ex1aid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker></defs>
</svg>
<div class="formula">$$ \\text{beli obligasi} \\Rightarrow MS\\uparrow \\Rightarrow r\\downarrow \\Rightarrow I\\uparrow \\Rightarrow AD\\rightarrow \\Rightarrow P\\uparrow,\\; Y\\uparrow $$</div>
<div class="tip">📝 MS↑ → r↓ → I↑ → AD→kanan → P↑, Y↑. Penghubung <em>antar</em> panel adalah investasi: pasar uang menetapkan <em>r</em>, lalu <em>r</em> menggerakkan pergeseran AD.</div>
<div class="note">⚠️ Kesalahan umum: menggambar MD yang bergeser. Operasi pasar terbuka menggerakkan <strong>MS</strong>; <em>r</em> lalu berubah <em>sepanjang</em> MD yang tetap. MD hanya bergeser bila <em>Y</em> atau <em>P</em> berubah. Juga: untuk kebijakan <em>kontraktif</em> (jual obligasi) balik semua panah — MS ke kiri, r↑, AD ke kiri.</div>
<p><em>Muncul: UAS 2019 (S3a), 2024 (MCQ14), 2025 (MCQ13, MCQ15).</em></p>`
          }
        }
      ]
    },

    /* ===================================================================== */
    /* EX2 — The crowding-out TOGGLE: accommodate vs MS-fixed (AD1→AD2→AD3)    */
    /* ===================================================================== */
    {
      heading: {
        en: 'Deeper exam graphs — the crowding-out toggle (key exam item)',
        id: 'Grafik ujian lebih dalam — toggle crowding-out (item ujian kunci)'
      },
      num: 'EX2',
      cards: [
        {
          title: {
            en: 'Fiscal expansion: MS-fixed → partial crowding-out (AD1→AD2→AD3)',
            id: 'Ekspansi fiskal: MS-tetap → crowding-out parsial (AD1→AD2→AD3)'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> government spending rises by Δ<em>G</em>. <strong>Right panel:</strong> the spending multiplier first shifts <span class="key">AD₁→AD₂</span> (by Δ<em>G</em> × the multiplier). <strong>Left panel:</strong> the higher income raises money demand <span class="key">MD₁→MD₂</span>; with MS <em>fixed</em>, the rate is bid up $r_1 \\to r_2$. That higher <em>r</em> cuts investment, so AD is pulled partly back <span class="key">AD₂→AD₃</span>. The net shift AD₁→AD₃ is the multiplier <em>minus</em> the <span class="key">crowding-out effect</span>.</p>
<svg viewBox="0 0 560 250" width="100%" role="img" aria-label="Crowding out with money supply fixed: money market and AD two-panel, AD1 to AD2 to AD3">
  <!-- ===== left panel: money market, MS fixed, MD shifts right ===== -->
  <line x1="55" y1="18" x2="55" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="205" x2="250" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="40" y="16" font-size="12" fill="#333">r</text>
  <text x="232" y="222" font-size="12" fill="#333">M</text>
  <text x="120" y="234" font-size="10" fill="#777">Quantity of money</text>
  <!-- MS fixed (vertical) -->
  <line x1="175" y1="28" x2="175" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="148" y="40" font-size="11" fill="#0e8fb8">MS (fixed)</text>
  <!-- MD1 -->
  <line x1="68" y1="55" x2="220" y2="195" stroke="#d97706" stroke-width="2"/>
  <text x="100" y="190" font-size="11" fill="#d97706">MD₁</text>
  <!-- MD2 (right, dashed) -->
  <line x1="110" y1="40" x2="244" y2="170" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="222" y="158" font-size="11" fill="#d97706">MD₂</text>
  <!-- MD shift arrow -->
  <line x1="150" y1="100" x2="184" y2="92" stroke="#111" stroke-width="1.1" marker-end="url(#ex2a)"/>
  <!-- equilibria: r rises -->
  <line x1="55" y1="118" x2="175" y2="118" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="55" y1="80" x2="175" y2="80" stroke="#999" stroke-dasharray="3 3"/>
  <circle cx="175" cy="118" r="3.2" fill="#111"/>
  <circle cx="175" cy="80" r="3.2" fill="#dc2626"/>
  <text x="38" y="122" font-size="11" fill="#111">r₁</text>
  <text x="38" y="84" font-size="11" fill="#dc2626">r₂</text>
  <!-- ===== right panel: AD1 -> AD2 (multiplier) -> AD3 (crowd-out pull-back) ===== -->
  <line x1="335" y1="18" x2="335" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="335" y1="205" x2="545" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="318" y="16" font-size="12" fill="#333">P</text>
  <text x="528" y="222" font-size="12" fill="#333">Y</text>
  <!-- AD1 -->
  <line x1="348" y1="38" x2="455" y2="198" stroke="#0e8fb8" stroke-width="2"/>
  <text x="343" y="52" font-size="11" fill="#0e8fb8">AD₁</text>
  <!-- AD2 (full multiplier, dotted blue) -->
  <line x1="423" y1="38" x2="530" y2="198" stroke="#0e8fb8" stroke-width="1.7" stroke-dasharray="2 2"/>
  <text x="512" y="52" font-size="11" fill="#0e8fb8">AD₂</text>
  <!-- AD3 (net after crowding out, solid green between AD1 and AD2) -->
  <line x1="388" y1="38" x2="495" y2="198" stroke="#16a34a" stroke-width="2.4"/>
  <text x="470" y="70" font-size="11" fill="#16a34a">AD₃</text>
  <!-- multiplier arrow AD1->AD2 -->
  <line x1="404" y1="118" x2="478" y2="118" stroke="#0e8fb8" stroke-width="1.3" marker-end="url(#ex2b)"/>
  <text x="406" y="110" font-size="9" fill="#0e8fb8">multiplier →</text>
  <!-- crowd-out arrow AD2->AD3 (pulls left) -->
  <line x1="478" y1="92" x2="436" y2="92" stroke="#dc2626" stroke-width="1.3" marker-end="url(#ex2c)"/>
  <text x="432" y="84" font-size="9" fill="#dc2626">← crowd-out</text>
  <defs>
    <marker id="ex2a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker>
    <marker id="ex2b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="ex2c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
  </defs>
</svg>
<div class="formula">$$ G\\uparrow \\Rightarrow AD_1\\!\\to\\!AD_2\\;(\\times\\tfrac{1}{1-MPC}) \\;;\\quad Y\\uparrow \\Rightarrow MD\\rightarrow \\Rightarrow r\\uparrow \\Rightarrow I\\downarrow \\Rightarrow AD_2\\!\\to\\!AD_3 $$</div>
<div class="tip">📝 <strong>The toggle.</strong> <em>MS fixed</em> (drawn here): r↑ → I↓ → <span class="key">PARTIAL crowding-out</span>, so AD₃ lands between AD₁ and AD₂. <em>Central bank ACCOMMODATES</em>: it shifts MS right by just enough to hold $r_1$, so investment never falls → <span class="key">NO crowding-out</span> and the economy stays at AD₂.</div>
<div class="note">⚠️ Common mistake: claiming crowding-out cancels the <em>whole</em> fiscal effect. It only partly offsets it — AD₃ is still to the right of AD₁. Full offset would need r to rise so much that I falls by the entire Δspending, which the model does not give. Definition (UAS 2022 MCQ13): G↑ → r↑ → I↓.</div>
<p><em>Appeared verbatim: UAS 2022 (MCQ13), 2024 (MCQ11, MCQ12), 2025 (MCQ11, Essay 3b accommodation).</em></p>`,
            id: `<p><span class="key">Skenario ujian:</span> belanja pemerintah naik sebesar Δ<em>G</em>. <strong>Panel kanan:</strong> efek pengganda mula-mula menggeser <span class="key">AD₁→AD₂</span> (sebesar Δ<em>G</em> × pengganda). <strong>Panel kiri:</strong> pendapatan yang lebih tinggi menaikkan permintaan uang <span class="key">MD₁→MD₂</span>; dengan MS <em>tetap</em>, suku bunga terdorong naik $r_1 \\to r_2$. <em>r</em> yang lebih tinggi itu memangkas investasi, sehingga AD tertarik sebagian kembali <span class="key">AD₂→AD₃</span>. Pergeseran neto AD₁→AD₃ adalah pengganda <em>dikurangi</em> <span class="key">efek crowding-out (desakan keluar)</span>.</p>
<svg viewBox="0 0 560 250" width="100%" role="img" aria-label="Crowding-out dengan jumlah uang tetap: pasar uang dan AD dua panel, AD1 ke AD2 ke AD3">
  <line x1="55" y1="18" x2="55" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="205" x2="250" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="40" y="16" font-size="12" fill="#333">r</text>
  <text x="232" y="222" font-size="12" fill="#333">M</text>
  <text x="125" y="234" font-size="10" fill="#777">Jumlah uang</text>
  <line x1="175" y1="28" x2="175" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="146" y="40" font-size="11" fill="#0e8fb8">MS (tetap)</text>
  <line x1="68" y1="55" x2="220" y2="195" stroke="#d97706" stroke-width="2"/>
  <text x="100" y="190" font-size="11" fill="#d97706">MD₁</text>
  <line x1="110" y1="40" x2="244" y2="170" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="222" y="158" font-size="11" fill="#d97706">MD₂</text>
  <line x1="150" y1="100" x2="184" y2="92" stroke="#111" stroke-width="1.1" marker-end="url(#ex2aid)"/>
  <line x1="55" y1="118" x2="175" y2="118" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="55" y1="80" x2="175" y2="80" stroke="#999" stroke-dasharray="3 3"/>
  <circle cx="175" cy="118" r="3.2" fill="#111"/>
  <circle cx="175" cy="80" r="3.2" fill="#dc2626"/>
  <text x="38" y="122" font-size="11" fill="#111">r₁</text>
  <text x="38" y="84" font-size="11" fill="#dc2626">r₂</text>
  <line x1="335" y1="18" x2="335" y2="205" stroke="#555" stroke-width="1.5"/>
  <line x1="335" y1="205" x2="545" y2="205" stroke="#555" stroke-width="1.5"/>
  <text x="318" y="16" font-size="12" fill="#333">P</text>
  <text x="528" y="222" font-size="12" fill="#333">Y</text>
  <line x1="348" y1="38" x2="455" y2="198" stroke="#0e8fb8" stroke-width="2"/>
  <text x="343" y="52" font-size="11" fill="#0e8fb8">AD₁</text>
  <line x1="423" y1="38" x2="530" y2="198" stroke="#0e8fb8" stroke-width="1.7" stroke-dasharray="2 2"/>
  <text x="512" y="52" font-size="11" fill="#0e8fb8">AD₂</text>
  <line x1="388" y1="38" x2="495" y2="198" stroke="#16a34a" stroke-width="2.4"/>
  <text x="470" y="70" font-size="11" fill="#16a34a">AD₃</text>
  <line x1="404" y1="118" x2="478" y2="118" stroke="#0e8fb8" stroke-width="1.3" marker-end="url(#ex2bid)"/>
  <text x="404" y="110" font-size="9" fill="#0e8fb8">pengganda →</text>
  <line x1="478" y1="92" x2="436" y2="92" stroke="#dc2626" stroke-width="1.3" marker-end="url(#ex2cid)"/>
  <text x="428" y="84" font-size="9" fill="#dc2626">← crowd-out</text>
  <defs>
    <marker id="ex2aid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker>
    <marker id="ex2bid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="ex2cid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
  </defs>
</svg>
<div class="formula">$$ G\\uparrow \\Rightarrow AD_1\\!\\to\\!AD_2\\;(\\times\\tfrac{1}{1-MPC}) \\;;\\quad Y\\uparrow \\Rightarrow MD\\rightarrow \\Rightarrow r\\uparrow \\Rightarrow I\\downarrow \\Rightarrow AD_2\\!\\to\\!AD_3 $$</div>
<div class="tip">📝 <strong>Toggle-nya.</strong> <em>MS tetap</em> (digambar di sini): r↑ → I↓ → <span class="key">crowding-out PARSIAL</span>, sehingga AD₃ mendarat di antara AD₁ dan AD₂. <em>Bank sentral MENGAKOMODASI</em>: ia menggeser MS ke kanan tepat secukupnya untuk menahan $r_1$, sehingga investasi tidak pernah turun → <span class="key">TANPA crowding-out</span> dan ekonomi tetap di AD₂.</div>
<div class="note">⚠️ Kesalahan umum: mengira crowding-out membatalkan <em>seluruh</em> efek fiskal. Ia hanya mengimbangi sebagian — AD₃ tetap di sebelah kanan AD₁. Pembatalan penuh perlu r naik sangat tinggi sehingga I turun sebesar seluruh Δbelanja, yang tidak diberikan model. Definisi (UAS 2022 MCQ13): G↑ → r↑ → I↓.</div>
<p><em>Muncul persis: UAS 2022 (MCQ13), 2024 (MCQ11, MCQ12), 2025 (MCQ11, Essay 3b akomodasi).</em></p>`
          }
        }
      ]
    },

    /* ===================================================================== */
    /* EX3 — Numeric multiplier visual: 1/(1−MPC) and the tax multiplier       */
    /* ===================================================================== */
    {
      heading: {
        en: 'Deeper exam graphs — the multiplier, numerically',
        id: 'Grafik ujian lebih dalam — pengganda, secara numerik'
      },
      num: 'EX3',
      cards: [
        {
          title: {
            en: 'Spending multiplier 1/(1−MPC): one ΔG, a magnified AD shift',
            id: 'Pengganda belanja 1/(1−MPC): satu ΔG, pergeseran AD yang diperbesar'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> with <em>MPC</em> = 0.75 the government raises spending by Δ<em>G</em> = Rp10 trillion. The first-round shift <span class="key">AD₁→AD₂</span> equals Δ<em>G</em>; induced consumption then magnifies it to the <span class="key">full multiplied shift AD₁→AD₃</span>. Each segment below is the same Δ<em>G</em> width; the multiplier stacks them.</p>
<div class="formula">$$ \\text{multiplier} = \\frac{1}{1-MPC} = \\frac{1}{1-0.75} = 4 \\quad\\Rightarrow\\quad \\Delta Y = 4 \\times \\text{Rp}10\\text{T} = \\text{Rp}40\\text{T} $$</div>
<svg viewBox="0 0 520 250" width="100%" role="img" aria-label="Spending multiplier magnifies the AD shift from one delta G">
  <line x1="50" y1="15" x2="50" y2="210" stroke="#555" stroke-width="1.5"/>
  <line x1="50" y1="210" x2="500" y2="210" stroke="#555" stroke-width="1.5"/>
  <text x="32" y="16" font-size="12" fill="#333">P</text>
  <text x="480" y="226" font-size="12" fill="#333">Y</text>
  <!-- AD1 -->
  <line x1="68" y1="32" x2="238" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="58" y="46" font-size="11" fill="#0e8fb8">AD₁</text>
  <!-- AD2: first-round +deltaG -->
  <line x1="108" y1="32" x2="278" y2="205" stroke="#0e8fb8" stroke-width="1.8" stroke-dasharray="3 3"/>
  <text x="270" y="58" font-size="10" fill="#0e8fb8">AD₂</text>
  <!-- AD3: full multiplier shift (4x) -->
  <line x1="228" y1="32" x2="398" y2="205" stroke="#16a34a" stroke-width="2.4"/>
  <text x="388" y="76" font-size="11" fill="#16a34a">AD₃</text>
  <!-- step brackets along a horizontal line at y=170, each width 40px = one deltaG -->
  <line x1="153" y1="170" x2="193" y2="170" stroke="#111" stroke-width="1.1" marker-end="url(#ex3a)"/>
  <text x="120" y="164" font-size="9" fill="#111">+ΔG</text>
  <line x1="193" y1="170" x2="233" y2="170" stroke="#888" stroke-width="1.1" marker-end="url(#ex3b)"/>
  <line x1="233" y1="170" x2="273" y2="170" stroke="#888" stroke-width="1.1" marker-end="url(#ex3b)"/>
  <line x1="273" y1="170" x2="313" y2="170" stroke="#888" stroke-width="1.1" marker-end="url(#ex3b)"/>
  <text x="208" y="190" font-size="9" fill="#16a34a">+ MPC·ΔG + MPC²·ΔG + … (induced)</text>
  <!-- total span arrow at top -->
  <line x1="153" y1="120" x2="313" y2="120" stroke="#16a34a" stroke-width="1.3" marker-end="url(#ex3c)"/>
  <text x="180" y="113" font-size="9" fill="#16a34a">ΔY = 4 × ΔG →</text>
  <defs>
    <marker id="ex3a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker>
    <marker id="ex3b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#888"/></marker>
    <marker id="ex3c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker>
  </defs>
</svg>
<div class="formula">$$ \\text{tax multiplier} = \\frac{-MPC}{1-MPC} = \\frac{-0.75}{0.25} = -3 \\quad(\\text{always one unit smaller in magnitude than } \\tfrac{1}{1-MPC}) $$</div>
<div class="tip">📝 ΔG → AD₁→AD₂ (= ΔG) → induced rounds stretch it to AD₃ (= 4×ΔG). Compute $\\frac{1}{1-MPC}$ first, then multiply. A tax cut works through $\\frac{-MPC}{1-MPC}$, so a given Rp of tax cut moves AD <em>less</em> than the same Rp of spending (people save part of the tax cut).</div>
<div class="note">⚠️ Common mistake: using the spending multiplier for a tax change. They differ: $\\frac{1}{1-MPC}$ vs $\\frac{-MPC}{1-MPC}$. Also, this picture assumes <strong>no crowding-out</strong> (r held fixed); add crowding-out (see EX2) and the net shift is smaller than AD₃.</div>
<p><em>Appeared: UAS 2019 (S3b), 2023 (MCQ14, Essay 6 balanced budget), 2024 (MCQ11/12, Essay 3b), 2025 (MCQ12).</em></p>`,
            id: `<p><span class="key">Skenario ujian:</span> dengan <em>MPC</em> = 0,75 pemerintah menaikkan belanja sebesar Δ<em>G</em> = Rp10 triliun. Pergeseran putaran pertama <span class="key">AD₁→AD₂</span> sama dengan Δ<em>G</em>; konsumsi terinduksi lalu memperbesarnya menjadi <span class="key">pergeseran berpengganda penuh AD₁→AD₃</span>. Tiap segmen di bawah berlebar Δ<em>G</em> yang sama; pengganda menumpuknya.</p>
<div class="formula">$$ \\text{pengganda} = \\frac{1}{1-MPC} = \\frac{1}{1-0.75} = 4 \\quad\\Rightarrow\\quad \\Delta Y = 4 \\times \\text{Rp}10\\text{T} = \\text{Rp}40\\text{T} $$</div>
<svg viewBox="0 0 520 250" width="100%" role="img" aria-label="Pengganda belanja memperbesar pergeseran AD dari satu delta G">
  <line x1="50" y1="15" x2="50" y2="210" stroke="#555" stroke-width="1.5"/>
  <line x1="50" y1="210" x2="500" y2="210" stroke="#555" stroke-width="1.5"/>
  <text x="32" y="16" font-size="12" fill="#333">P</text>
  <text x="480" y="226" font-size="12" fill="#333">Y</text>
  <line x1="68" y1="32" x2="238" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="58" y="46" font-size="11" fill="#0e8fb8">AD₁</text>
  <line x1="108" y1="32" x2="278" y2="205" stroke="#0e8fb8" stroke-width="1.8" stroke-dasharray="3 3"/>
  <text x="270" y="58" font-size="10" fill="#0e8fb8">AD₂</text>
  <line x1="228" y1="32" x2="398" y2="205" stroke="#16a34a" stroke-width="2.4"/>
  <text x="388" y="76" font-size="11" fill="#16a34a">AD₃</text>
  <line x1="153" y1="170" x2="193" y2="170" stroke="#111" stroke-width="1.1" marker-end="url(#ex3aid)"/>
  <text x="120" y="164" font-size="9" fill="#111">+ΔG</text>
  <line x1="193" y1="170" x2="233" y2="170" stroke="#888" stroke-width="1.1" marker-end="url(#ex3bid)"/>
  <line x1="233" y1="170" x2="273" y2="170" stroke="#888" stroke-width="1.1" marker-end="url(#ex3bid)"/>
  <line x1="273" y1="170" x2="313" y2="170" stroke="#888" stroke-width="1.1" marker-end="url(#ex3bid)"/>
  <text x="205" y="190" font-size="9" fill="#16a34a">+ MPC·ΔG + MPC²·ΔG + … (terinduksi)</text>
  <line x1="153" y1="120" x2="313" y2="120" stroke="#16a34a" stroke-width="1.3" marker-end="url(#ex3cid)"/>
  <text x="180" y="113" font-size="9" fill="#16a34a">ΔY = 4 × ΔG →</text>
  <defs>
    <marker id="ex3aid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker>
    <marker id="ex3bid" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#888"/></marker>
    <marker id="ex3cid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker>
  </defs>
</svg>
<div class="formula">$$ \\text{pengganda pajak} = \\frac{-MPC}{1-MPC} = \\frac{-0.75}{0.25} = -3 \\quad(\\text{selalu satu satuan lebih kecil besarnya daripada } \\tfrac{1}{1-MPC}) $$</div>
<div class="tip">📝 ΔG → AD₁→AD₂ (= ΔG) → putaran terinduksi merentangkannya ke AD₃ (= 4×ΔG). Hitung $\\frac{1}{1-MPC}$ dulu, baru kalikan. Pemotongan pajak bekerja lewat $\\frac{-MPC}{1-MPC}$, sehingga sejumlah Rp pemotongan pajak menggerakkan AD <em>lebih sedikit</em> daripada jumlah Rp belanja yang sama (orang menabung sebagian dari potongan pajak).</div>
<div class="note">⚠️ Kesalahan umum: memakai pengganda belanja untuk perubahan pajak. Keduanya berbeda: $\\frac{1}{1-MPC}$ vs $\\frac{-MPC}{1-MPC}$. Juga, gambar ini mengasumsikan <strong>tanpa crowding-out</strong> (r ditahan tetap); tambahkan crowding-out (lihat EX2) dan pergeseran neto lebih kecil dari AD₃.</div>
<p><em>Muncul: UAS 2019 (S3b), 2023 (MCQ14, Essay 6 anggaran berimbang), 2024 (MCQ11/12, Essay 3b), 2025 (MCQ12).</em></p>`
          }
        }
      ]
    }

  ]);
})();
