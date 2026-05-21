/* ============================================================================
   PE2 · Week 9 — EXTRA exam-likely AD–AS graph scenarios (deeper SR→LR A→B→C)
   Appends to window.PE2_WEEKS.w9.graphs (base defined in weeks/w9.js).
   Bilingual (EN + ID). Prose leaves are { en, id }; LaTeX $…$ shared.
   Pure inline SVG — no chartId / charting library.
   Drawn from past UAS exams: 2019, 2022, 2023, 2024, 2025.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w9;
  if (!u) return;

  u.graphs = (u.graphs || []).concat([

    /* ===================================================================== */
    /* EX1 — ADVERSE AD LEFT-SHIFT (recession) → SR P↓Y↓ → LR self-correction */
    /* ===================================================================== */
    {
      heading: {
        en: 'Exam deep-dive: adverse AD shock (A → B → C)',
        id: 'Pendalaman ujian: guncangan AD buruk (A → B → C)'
      },
      num: 'EX1',
      cards: [
        {
          title: {
            en: 'Stock-market crash / lost confidence → recession, then recovery',
            id: 'Crash pasar saham / hilang kepercayaan → resesi, lalu pemulihan'
          },
          html: {
            en: `<p><b>Exam scenario:</b> the economy starts at long-run equilibrium <b>A</b>. A stock-market crash (or a slump in consumer confidence, or a fall in net exports $NX$) cuts spending. Trace the short run <i>and</i> the long run with no policy response. <span class="key">(UAS 2019, 2022, 2023, 2024, 2025 — the single most-tested AD scenario.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <!-- LRAS vertical at Yn -->
  <line x1="250" y1="35" x2="250" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="225" y="48" fill="#c0392b" font-weight="700">LRAS</text>
  <!-- SRAS1 (solid) and SRAS2 (dashed, shifted right) -->
  <line x1="120" y1="225" x2="390" y2="80" stroke="#e67e22" stroke-width="2"/>
  <text x="392" y="80" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="90" y1="225" x2="360" y2="80" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="62" y="86" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <!-- AD1 (solid) and AD2 (dashed, shifted left) -->
  <line x1="150" y1="70" x2="400" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="384" y="236" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="95" y1="80" x2="320" y2="240" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="68" y="92" fill="#0e8fb8" font-weight="700">AD₂</text>
  <!-- Equilibria A (start, on Yn) , B (SR, left of Yn) , C (LR, on Yn lower P) -->
  <circle cx="250" cy="135" r="3.6" fill="#222"/><text x="256" y="130" font-weight="700">A</text>
  <circle cx="200" cy="166" r="3.6" fill="#222"/><text x="178" y="166" font-weight="700">B</text>
  <circle cx="250" cy="190" r="3.6" fill="#222"/><text x="256" y="196" font-weight="700">C</text>
  <!-- price-level guides -->
  <line x1="55" y1="135" x2="250" y2="135" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="139">P₁</text>
  <line x1="55" y1="166" x2="200" y2="166" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="170">P₂</text>
  <line x1="55" y1="190" x2="250" y2="190" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="194">P₃</text>
  <line x1="200" y1="166" x2="200" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="186" y="266">Y₂</text>
  <text x="236" y="266">Yₙ</text>
  <!-- arrows: AD shift left, SRAS shift right -->
  <line x1="190" y1="120" x2="150" y2="120" stroke="#0e8fb8" stroke-width="1.5" marker-end="url(#aL9)"/>
  <line x1="160" y1="205" x2="125" y2="205" stroke="#cf8a4a" stroke-width="1.5" marker-end="url(#aL9)"/>
  <defs><marker id="aL9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B (short run):</b> AD shifts left to AD₂. The economy slides <i>down along</i> SRAS₁ to <b>B</b>: the price level falls ($P_1\\to P_2$) and output falls below natural ($Y_2 < Y_N$) — a <b>recession</b> with rising unemployment.</p>
<p><b>B → C (long run):</b> with $Y < Y_N$, unemployment is high, so wages and the expected price level $P^E$ fall. SRAS shifts right to SRAS₂ until output returns to $Y_N$ at <b>C</b> — same output, but a <b>permanently lower price level</b> $P_3$.</p>
<div class="formula">$$\\text{AD}\\downarrow:\\quad \\text{SR } P\\downarrow,\\,Y\\downarrow \\;\\longrightarrow\\; \\text{LR } Y=Y_N,\\,P\\downarrow$$</div>
<div class="tip"><b>Answer in one line:</b> SR — $P\\downarrow$, $Y\\downarrow$ (recession); LR — output back to $Y_N$ at a lower price level. A demand shock changes output only <i>temporarily</i>; in the long run it changes only $P$.</div>
<div class="note"><b>Common mistake:</b> drawing a movement <i>along</i> AD instead of a <i>shift</i> of AD. A crash lowers $C$ at <b>every</b> price level, so the whole AD curve moves left — it is not a slide caused by a change in $P$. Also remember to draw all three points A, B and C; graders look for B and C.</div>
<p style="margin-top:.5rem"><b>Appeared:</b> UAS 2019 (S2a export collapse), 2022 (Essay 6 demand recession; Essay 3 animal-spirits), 2023 (Essay 3b precautionary saving), 2024 (Essay 3a COVID pessimism), 2025 (MCQ10 self-correction).</p>`,
            id: `<p><b>Skenario ujian:</b> perekonomian mulai pada keseimbangan jangka panjang <b>A</b>. Sebuah crash pasar saham (atau anjloknya kepercayaan konsumen, atau turunnya ekspor neto $NX$) memangkas pengeluaran. Telusuri jangka pendek <i>dan</i> jangka panjang tanpa respons kebijakan. <span class="key">(UAS 2019, 2022, 2023, 2024, 2025 — skenario AD yang paling sering diuji.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <line x1="250" y1="35" x2="250" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="225" y="48" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="120" y1="225" x2="390" y2="80" stroke="#e67e22" stroke-width="2"/>
  <text x="392" y="80" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="90" y1="225" x2="360" y2="80" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="62" y="86" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="150" y1="70" x2="400" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="384" y="236" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="95" y1="80" x2="320" y2="240" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="68" y="92" fill="#0e8fb8" font-weight="700">AD₂</text>
  <circle cx="250" cy="135" r="3.6" fill="#222"/><text x="256" y="130" font-weight="700">A</text>
  <circle cx="200" cy="166" r="3.6" fill="#222"/><text x="178" y="166" font-weight="700">B</text>
  <circle cx="250" cy="190" r="3.6" fill="#222"/><text x="256" y="196" font-weight="700">C</text>
  <line x1="55" y1="135" x2="250" y2="135" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="139">P₁</text>
  <line x1="55" y1="166" x2="200" y2="166" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="170">P₂</text>
  <line x1="55" y1="190" x2="250" y2="190" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="194">P₃</text>
  <line x1="200" y1="166" x2="200" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="186" y="266">Y₂</text>
  <text x="236" y="266">Yₙ</text>
  <line x1="190" y1="120" x2="150" y2="120" stroke="#0e8fb8" stroke-width="1.5" marker-end="url(#aL9b)"/>
  <line x1="160" y1="205" x2="125" y2="205" stroke="#cf8a4a" stroke-width="1.5" marker-end="url(#aL9b)"/>
  <defs><marker id="aL9b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B (jangka pendek):</b> AD bergeser ke kiri menjadi AD₂. Perekonomian meluncur <i>turun sepanjang</i> SRAS₁ ke <b>B</b>: tingkat harga turun ($P_1\\to P_2$) dan output turun di bawah alamiah ($Y_2 < Y_N$) — <b>resesi</b> dengan pengangguran naik.</p>
<p><b>B → C (jangka panjang):</b> dengan $Y < Y_N$, pengangguran tinggi, sehingga upah dan tingkat harga yang diharapkan $P^E$ turun. SRAS bergeser ke kanan menjadi SRAS₂ sampai output kembali ke $Y_N$ di <b>C</b> — output sama, tetapi <b>tingkat harga permanen lebih rendah</b> $P_3$.</p>
<div class="formula">$$\\text{AD}\\downarrow:\\quad \\text{JP } P\\downarrow,\\,Y\\downarrow \\;\\longrightarrow\\; \\text{JPj } Y=Y_N,\\,P\\downarrow$$</div>
<div class="tip"><b>Jawaban satu baris:</b> JP — $P\\downarrow$, $Y\\downarrow$ (resesi); JPj — output kembali ke $Y_N$ pada tingkat harga lebih rendah. Guncangan permintaan mengubah output hanya <i>sementara</i>; dalam jangka panjang hanya mengubah $P$.</div>
<div class="note"><b>Kesalahan umum:</b> menggambar pergerakan <i>sepanjang</i> AD alih-alih <i>pergeseran</i> AD. Sebuah crash menurunkan $C$ pada <b>setiap</b> tingkat harga, jadi seluruh kurva AD bergeser ke kiri — bukan pergeseran akibat perubahan $P$. Ingat juga gambar ketiga titik A, B, dan C; penilai mencari B dan C.</div>
<p style="margin-top:.5rem"><b>Muncul:</b> UAS 2019 (S2a anjlok ekspor), 2022 (Esai 6 resesi permintaan; Esai 3 animal-spirits), 2023 (Esai 3b tabungan berjaga-jaga), 2024 (Esai 3a pesimisme COVID), 2025 (MCQ10 koreksi-diri).</p>`
          }
        }
      ]
    },

    /* ===================================================================== */
    /* EX2 — FAVORABLE AD RIGHT-SHIFT (boom) → SR P↑Y↑ → LR SRAS left           */
    /* ===================================================================== */
    {
      heading: {
        en: 'Companion: favorable AD shock (boom → A → B → C)',
        id: 'Pendamping: guncangan AD menguntungkan (boom → A → B → C)'
      },
      num: 'EX2',
      cards: [
        {
          title: {
            en: 'Tax cut / optimism → short-run boom, then higher prices',
            id: 'Pemotongan pajak / optimisme → boom jangka pendek, lalu harga lebih tinggi'
          },
          html: {
            en: `<p><b>Exam scenario:</b> starting at long-run equilibrium <b>A</b>, the government cuts income taxes (or firms turn optimistic, or exports surge), raising $C$, $I$ or $NX$. Trace short run and long run. This is the mirror image of EX1. <span class="key">(UAS 2022 Essay 3 animal-spirits; 2025 Essay 2a Solvaria tax cut.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <line x1="250" y1="35" x2="250" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="225" y="48" fill="#c0392b" font-weight="700">LRAS</text>
  <!-- SRAS1 solid, SRAS2 dashed shifted LEFT -->
  <line x1="110" y1="225" x2="380" y2="80" stroke="#e67e22" stroke-width="2"/>
  <text x="382" y="80" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="150" y1="225" x2="420" y2="80" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="402" y="74" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <!-- AD1 solid, AD2 dashed shifted RIGHT -->
  <line x1="120" y1="70" x2="370" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="120" y="64" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="175" y1="70" x2="425" y2="240" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="408" y="240" fill="#0e8fb8" font-weight="700">AD₂</text>
  <!-- A start on Yn; B SR boom right of Yn; C LR back on Yn higher P -->
  <circle cx="250" cy="155" r="3.6" fill="#222"/><text x="226" y="151" font-weight="700">A</text>
  <circle cx="300" cy="123" r="3.6" fill="#222"/><text x="306" y="120" font-weight="700">B</text>
  <circle cx="250" cy="100" r="3.6" fill="#222"/><text x="226" y="98" font-weight="700">C</text>
  <line x1="55" y1="155" x2="250" y2="155" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="159">P₁</text>
  <line x1="55" y1="123" x2="300" y2="123" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="127">P₂</text>
  <line x1="55" y1="100" x2="250" y2="100" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="104">P₃</text>
  <line x1="300" y1="123" x2="300" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="290" y="266">Y₂</text>
  <text x="236" y="266">Yₙ</text>
  <line x1="270" y1="200" x2="310" y2="200" stroke="#0e8fb8" stroke-width="1.5" marker-end="url(#aR9)"/>
  <line x1="300" y1="208" x2="335" y2="208" stroke="#cf8a4a" stroke-width="1.5" marker-end="url(#aR9)"/>
  <defs><marker id="aR9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B (short run):</b> AD shifts right to AD₂. Moving <i>up along</i> SRAS₁ to <b>B</b>: the price level rises ($P_1\\to P_2$) and output rises above natural ($Y_2 > Y_N$) — an <b>overheating boom</b> with unemployment below its natural rate.</p>
<p><b>B → C (long run):</b> with $Y > Y_N$, labour is scarce, so wages and $P^E$ rise. SRAS shifts <i>left</i> to SRAS₂ until output returns to $Y_N$ at <b>C</b> — same output, but a <b>permanently higher price level</b> $P_3$.</p>
<div class="formula">$$\\text{AD}\\uparrow:\\quad \\text{SR } P\\uparrow,\\,Y\\uparrow \\;\\longrightarrow\\; \\text{LR } Y=Y_N,\\,P\\uparrow$$</div>
<div class="tip"><b>Answer in one line:</b> SR — $P\\uparrow$, $Y\\uparrow$ (boom); LR — output back to $Y_N$ at a higher price level. The favorable AD shock leaves only inflation behind in the long run.</div>
<div class="note"><b>Common mistake:</b> letting output stay above $Y_N$ in the long run. Output above potential is not sustainable — the self-correcting mechanism (rising $P^E$ shifting SRAS <b>left</b>) pulls $Y$ back to $Y_N$. The long-run effect is purely on $P$, never on $Y$.</div>
<p style="margin-top:.5rem"><b>Appeared:</b> UAS 2022 (Essay 3 animal-spirits, AD-right case), 2025 (Essay 2a Solvaria income-tax cut → AD right, SR $P\\uparrow Y\\uparrow$).</p>`,
            id: `<p><b>Skenario ujian:</b> mulai dari keseimbangan jangka panjang <b>A</b>, pemerintah memotong pajak pendapatan (atau perusahaan optimis, atau ekspor melonjak), menaikkan $C$, $I$ atau $NX$. Telusuri jangka pendek dan jangka panjang. Ini cerminan dari EX1. <span class="key">(UAS 2022 Esai 3 animal-spirits; 2025 Esai 2a pemotongan pajak Solvaria.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <line x1="250" y1="35" x2="250" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="225" y="48" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="110" y1="225" x2="380" y2="80" stroke="#e67e22" stroke-width="2"/>
  <text x="382" y="80" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="150" y1="225" x2="420" y2="80" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="402" y="74" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="120" y1="70" x2="370" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="120" y="64" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="175" y1="70" x2="425" y2="240" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="408" y="240" fill="#0e8fb8" font-weight="700">AD₂</text>
  <circle cx="250" cy="155" r="3.6" fill="#222"/><text x="226" y="151" font-weight="700">A</text>
  <circle cx="300" cy="123" r="3.6" fill="#222"/><text x="306" y="120" font-weight="700">B</text>
  <circle cx="250" cy="100" r="3.6" fill="#222"/><text x="226" y="98" font-weight="700">C</text>
  <line x1="55" y1="155" x2="250" y2="155" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="159">P₁</text>
  <line x1="55" y1="123" x2="300" y2="123" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="127">P₂</text>
  <line x1="55" y1="100" x2="250" y2="100" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="104">P₃</text>
  <line x1="300" y1="123" x2="300" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="290" y="266">Y₂</text>
  <text x="236" y="266">Yₙ</text>
  <line x1="270" y1="200" x2="310" y2="200" stroke="#0e8fb8" stroke-width="1.5" marker-end="url(#aR9b)"/>
  <line x1="300" y1="208" x2="335" y2="208" stroke="#cf8a4a" stroke-width="1.5" marker-end="url(#aR9b)"/>
  <defs><marker id="aR9b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B (jangka pendek):</b> AD bergeser ke kanan menjadi AD₂. Bergerak <i>naik sepanjang</i> SRAS₁ ke <b>B</b>: tingkat harga naik ($P_1\\to P_2$) dan output naik di atas alamiah ($Y_2 > Y_N$) — <b>boom yang memanas</b> dengan pengangguran di bawah tingkat alamiahnya.</p>
<p><b>B → C (jangka panjang):</b> dengan $Y > Y_N$, tenaga kerja langka, sehingga upah dan $P^E$ naik. SRAS bergeser <i>ke kiri</i> menjadi SRAS₂ sampai output kembali ke $Y_N$ di <b>C</b> — output sama, tetapi <b>tingkat harga permanen lebih tinggi</b> $P_3$.</p>
<div class="formula">$$\\text{AD}\\uparrow:\\quad \\text{JP } P\\uparrow,\\,Y\\uparrow \\;\\longrightarrow\\; \\text{JPj } Y=Y_N,\\,P\\uparrow$$</div>
<div class="tip"><b>Jawaban satu baris:</b> JP — $P\\uparrow$, $Y\\uparrow$ (boom); JPj — output kembali ke $Y_N$ pada tingkat harga lebih tinggi. Guncangan AD menguntungkan hanya menyisakan inflasi dalam jangka panjang.</div>
<div class="note"><b>Kesalahan umum:</b> membiarkan output tetap di atas $Y_N$ dalam jangka panjang. Output di atas potensial tidak berkelanjutan — mekanisme koreksi-diri ($P^E$ naik menggeser SRAS <b>ke kiri</b>) menarik $Y$ kembali ke $Y_N$. Dampak jangka panjang murni pada $P$, tidak pernah pada $Y$.</div>
<p style="margin-top:.5rem"><b>Muncul:</b> UAS 2022 (Esai 3 animal-spirits, kasus AD-kanan), 2025 (Esai 2a pemotongan pajak pendapatan Solvaria → AD kanan, JP $P\\uparrow Y\\uparrow$).</p>`
          }
        }
      ]
    },

    /* ===================================================================== */
    /* EX3 — ADVERSE SUPPLY SHOCK (SRAS left) → STAGFLATION → wait or accommodate */
    /* ===================================================================== */
    {
      heading: {
        en: 'Exam deep-dive: adverse supply shock → stagflation',
        id: 'Pendalaman ujian: guncangan penawaran buruk → stagflasi'
      },
      num: 'EX3',
      cards: [
        {
          title: {
            en: 'Oil-price spike / drought: stagflation, then wait vs accommodate',
            id: 'Lonjakan harga minyak / kekeringan: stagflasi, lalu menunggu vs akomodasi'
          },
          html: {
            en: `<p><b>Exam scenario:</b> from long-run equilibrium <b>A</b>, a spike in world oil prices (or a drought / war damage to inputs) raises production costs across the economy. LRAS is unchanged. Trace the short run, then contrast <i>do nothing</i> with <i>accommodate AD</i>. <span class="key">(UAS 2019, 2023, 2024, 2025.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <!-- LRAS at Yn unchanged -->
  <line x1="250" y1="35" x2="250" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="225" y="48" fill="#c0392b" font-weight="700">LRAS</text>
  <!-- SRAS1 solid; SRAS2 dashed shifted LEFT/UP -->
  <line x1="120" y1="225" x2="390" y2="80" stroke="#e67e22" stroke-width="2"/>
  <text x="392" y="82" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="160" y1="225" x2="380" y2="45" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="382" y="46" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <!-- AD1 solid; AD2 dashed shifted RIGHT (accommodation) -->
  <line x1="120" y1="70" x2="370" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="116" y="64" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="175" y1="70" x2="425" y2="240" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="410" y="240" fill="#0e8fb8" font-weight="700">AD₂</text>
  <!-- A start on Yn; B SR stagflation (left of Yn, higher P); C accommodate (on Yn, even higher P) -->
  <circle cx="250" cy="155" r="3.6" fill="#222"/><text x="226" y="151" font-weight="700">A</text>
  <circle cx="205" cy="120" r="3.6" fill="#222"/><text x="183" y="118" font-weight="700">B</text>
  <circle cx="250" cy="88" r="3.6" fill="#222"/><text x="256" y="86" font-weight="700">C</text>
  <line x1="55" y1="155" x2="250" y2="155" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="159">P₁</text>
  <line x1="55" y1="120" x2="205" y2="120" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="124">P₂</text>
  <line x1="55" y1="88" x2="250" y2="88" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="92">P₃</text>
  <line x1="205" y1="120" x2="205" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="192" y="266">Y₂</text>
  <text x="236" y="266">Yₙ</text>
  <line x1="225" y1="200" x2="195" y2="200" stroke="#cf8a4a" stroke-width="1.5" marker-end="url(#aS9)"/>
  <defs><marker id="aS9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B (short run):</b> higher costs shift SRAS <i>left</i> to SRAS₂. At <b>B</b> the price level rises ($P_1\\to P_2$) while output falls ($Y_2 < Y_N$) and unemployment rises — the painful combination of <span class="key">stagflation</span> (stagnation + inflation), with actual $P >$ expected $P^E$.</p>
<p><b>B → A (long run, do nothing):</b> with $Y < Y_N$, high unemployment pushes wages and costs back down, SRAS shifts back right to SRAS₁, and the economy returns to <b>A</b> at the original $P_1$ and $Y_N$ — the self-correcting mechanism (slow but free).</p>
<p><b>B → C (long run, accommodate AD):</b> policymakers boost AD to AD₂ to restore output fast. Output returns to $Y_N$ sooner, but the price level ends up <b>permanently higher</b> at $P_3$.</p>
<div class="formula">$$\\text{SRAS}\\downarrow:\\quad \\text{SR } P\\uparrow,\\,Y\\downarrow,\\,u\\uparrow \\;(\\text{stagflation})$$</div>
<div class="tip"><b>Answer in one line:</b> SR — $P\\uparrow$, $Y\\downarrow$ (stagflation). LR — either wait (SRAS returns right, back to $A$) or accommodate (AD right, back to $Y_N$ at a higher price). You cannot escape both the recession and the inflation.</div>
<div class="note"><b>Common mistake:</b> shifting AD (or LRAS) for a cost shock. A pure input-cost shock moves <b>SRAS only</b> — LRAS stays put because natural output (labour, capital, technology) is unchanged. Do not confuse stagflation with a leftward-AD recession, where $P$ <i>falls</i> rather than rises.</div>
<p style="margin-top:.5rem"><b>Appeared:</b> UAS 2019 (S2b cost rise), 2023 (MCQ11 oil; MCQ12 COVID; MCQ13 SRAS shift), 2024 (MCQ7 sticky-price energy), 2025 (Essay 2b Niveria crop failure / drought).</p>`,
            id: `<p><b>Skenario ujian:</b> dari keseimbangan jangka panjang <b>A</b>, lonjakan harga minyak dunia (atau kekeringan / kerusakan input akibat perang) menaikkan biaya produksi di seluruh perekonomian. LRAS tidak berubah. Telusuri jangka pendek, lalu bandingkan <i>tidak berbuat apa-apa</i> dengan <i>akomodasi AD</i>. <span class="key">(UAS 2019, 2023, 2024, 2025.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <line x1="250" y1="35" x2="250" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="225" y="48" fill="#c0392b" font-weight="700">LRAS</text>
  <line x1="120" y1="225" x2="390" y2="80" stroke="#e67e22" stroke-width="2"/>
  <text x="392" y="82" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="160" y1="225" x2="380" y2="45" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="382" y="46" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="120" y1="70" x2="370" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="116" y="64" fill="#0e8fb8" font-weight="700">AD₁</text>
  <line x1="175" y1="70" x2="425" y2="240" stroke="#7ec8de" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="410" y="240" fill="#0e8fb8" font-weight="700">AD₂</text>
  <circle cx="250" cy="155" r="3.6" fill="#222"/><text x="226" y="151" font-weight="700">A</text>
  <circle cx="205" cy="120" r="3.6" fill="#222"/><text x="183" y="118" font-weight="700">B</text>
  <circle cx="250" cy="88" r="3.6" fill="#222"/><text x="256" y="86" font-weight="700">C</text>
  <line x1="55" y1="155" x2="250" y2="155" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="159">P₁</text>
  <line x1="55" y1="120" x2="205" y2="120" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="124">P₂</text>
  <line x1="55" y1="88" x2="250" y2="88" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="92">P₃</text>
  <line x1="205" y1="120" x2="205" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="192" y="266">Y₂</text>
  <text x="236" y="266">Yₙ</text>
  <line x1="225" y1="200" x2="195" y2="200" stroke="#cf8a4a" stroke-width="1.5" marker-end="url(#aS9b)"/>
  <defs><marker id="aS9b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B (jangka pendek):</b> biaya naik menggeser SRAS <i>ke kiri</i> menjadi SRAS₂. Di <b>B</b> tingkat harga naik ($P_1\\to P_2$) sementara output turun ($Y_2 < Y_N$) dan pengangguran naik — kombinasi pahit <span class="key">stagflasi</span> (stagnasi + inflasi), dengan $P$ aktual $>$ $P^E$ yang diharapkan.</p>
<p><b>B → A (jangka panjang, tidak berbuat apa-apa):</b> dengan $Y < Y_N$, pengangguran tinggi menekan upah dan biaya turun kembali, SRAS bergeser kembali ke kanan menjadi SRAS₁, dan perekonomian kembali ke <b>A</b> pada $P_1$ awal dan $Y_N$ — mekanisme koreksi-diri (lambat tetapi gratis).</p>
<p><b>B → C (jangka panjang, akomodasi AD):</b> pembuat kebijakan menaikkan AD menjadi AD₂ untuk memulihkan output dengan cepat. Output kembali ke $Y_N$ lebih cepat, tetapi tingkat harga berakhir <b>permanen lebih tinggi</b> di $P_3$.</p>
<div class="formula">$$\\text{SRAS}\\downarrow:\\quad \\text{JP } P\\uparrow,\\,Y\\downarrow,\\,u\\uparrow \\;(\\text{stagflasi})$$</div>
<div class="tip"><b>Jawaban satu baris:</b> JP — $P\\uparrow$, $Y\\downarrow$ (stagflasi). JPj — entah menunggu (SRAS kembali ke kanan, balik ke $A$) atau akomodasi (AD ke kanan, balik ke $Y_N$ pada harga lebih tinggi). Anda tidak bisa lolos dari resesi sekaligus inflasi.</div>
<div class="note"><b>Kesalahan umum:</b> menggeser AD (atau LRAS) untuk guncangan biaya. Guncangan biaya input murni hanya menggerakkan <b>SRAS saja</b> — LRAS tetap karena output alamiah (tenaga kerja, modal, teknologi) tidak berubah. Jangan rancukan stagflasi dengan resesi AD-kiri, di mana $P$ justru <i>turun</i>, bukan naik.</div>
<p style="margin-top:.5rem"><b>Muncul:</b> UAS 2019 (S2b kenaikan biaya), 2023 (MCQ11 minyak; MCQ12 COVID; MCQ13 pergeseran SRAS), 2024 (MCQ7 energi harga-kaku), 2025 (Esai 2b gagal panen / kekeringan Niveria).</p>`
          }
        }
      ]
    },

    /* ===================================================================== */
    /* EX4 — BOTH SRAS & LRAS LEFT (war / negative pop growth) → lower Yn       */
    /* ===================================================================== */
    {
      heading: {
        en: 'Exam deep-dive: SRAS & LRAS both shift left',
        id: 'Pendalaman ujian: SRAS & LRAS sama-sama bergeser ke kiri'
      },
      num: 'EX4',
      cards: [
        {
          title: {
            en: 'War / negative population growth: natural output falls',
            id: 'Perang / pertumbuhan populasi negatif: output alamiah turun'
          },
          html: {
            en: `<p><b>Exam scenario:</b> a war destroys factories and infrastructure (or negative population growth permanently shrinks the labour force). Productive capacity is <b>permanently</b> lost. This is distinct from a pure SRAS shock — here <b>both</b> SRAS <i>and</i> LRAS shift left, so natural output itself falls. <span class="key">(UAS 2023 Essay 4b Japan; 2024 Essay 2a war damage.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <!-- LRAS1 solid at Yn1; LRAS2 dashed at lower Yn2 -->
  <line x1="290" y1="35" x2="290" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="266" y="48" fill="#c0392b" font-weight="700">LRAS₁</text>
  <line x1="215" y1="35" x2="215" y2="250" stroke="#e08a80" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="150" y="46" fill="#c0392b" font-weight="700">LRAS₂</text>
  <!-- SRAS1 solid; SRAS2 dashed shifted LEFT -->
  <line x1="150" y1="225" x2="400" y2="85" stroke="#e67e22" stroke-width="2"/>
  <text x="402" y="86" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="100" y1="225" x2="350" y2="85" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="74" y="92" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <!-- AD unchanged -->
  <line x1="130" y1="70" x2="400" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="384" y="236" fill="#0e8fb8" font-weight="700">AD</text>
  <!-- A on LRAS1; B' new SR/LR on LRAS2 (left, higher P) -->
  <circle cx="290" cy="158" r="3.6" fill="#222"/><text x="296" y="154" font-weight="700">A</text>
  <circle cx="215" cy="111" r="3.6" fill="#222"/><text x="221" y="108" font-weight="700">B</text>
  <line x1="55" y1="158" x2="290" y2="158" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="162">P₁</text>
  <line x1="55" y1="111" x2="215" y2="111" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="115">P₂</text>
  <line x1="215" y1="111" x2="215" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="190" y="266">Yₙ′</text>
  <text x="278" y="266">Yₙ</text>
  <!-- arrow: Yn shifts left -->
  <line x1="280" y1="225" x2="225" y2="225" stroke="#c0392b" stroke-width="1.5" marker-end="url(#aD9)"/>
  <defs><marker id="aD9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B:</b> losing factors of production shifts <b>both</b> curves left — SRAS to SRAS₂ and LRAS from $Y_N$ to a lower $Y_N'$. At the new equilibrium <b>B</b> the price level rises ($P_1\\to P_2$) and output falls to the <b>new, lower natural level</b> $Y_N'$.</p>
<p><b>Why no self-correction back to $Y_N$:</b> the economy is <i>not</i> below its potential — potential itself has fallen. There is no recessionary gap to close, so SRAS does not drift back to the old position. Output stays <b>permanently lower</b> at $Y_N'$.</p>
<div class="formula">$$\\text{SRAS}\\downarrow \\;\\&\\; \\text{LRAS}\\downarrow:\\quad P\\uparrow,\\;Y_N \\to Y_N' \\;(\\text{lower potential})$$</div>
<div class="tip"><b>Answer in one line:</b> both SRAS and LRAS shift left ⇒ higher price level and a <b>permanently lower natural output</b> $Y_N'$ — no return to the old $Y_N$.</div>
<div class="note"><b>Common mistake:</b> treating this like the oil shock (EX3) where only SRAS moves and the economy self-corrects back to the original $Y_N$. The key difference: a war/population loss destroys <b>real productive capacity</b>, so LRAS moves too and natural output is permanently lower. If you forget to shift LRAS, you lose the central point of the question.</div>
<p style="margin-top:.5rem"><b>Appeared:</b> UAS 2023 (Essay 4b Japan negative population growth), 2024 (Essay 2a war destroys production capacity; MCQ9/10 war A's infrastructure destroyed).</p>`,
            id: `<p><b>Skenario ujian:</b> sebuah perang menghancurkan pabrik dan infrastruktur (atau pertumbuhan populasi negatif menyusutkan angkatan kerja secara permanen). Kapasitas produktif <b>hilang permanen</b>. Ini berbeda dari guncangan SRAS murni — di sini <b>keduanya</b>, SRAS <i>dan</i> LRAS, bergeser ke kiri, sehingga output alamiah itu sendiri turun. <span class="key">(UAS 2023 Esai 4b Jepang; 2024 Esai 2a kerusakan perang.)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;display:block;margin:0 auto" font-family="Inter,sans-serif" font-size="11">
  <line x1="55" y1="20" x2="55" y2="250" stroke="#666" stroke-width="1.5"/>
  <line x1="55" y1="250" x2="440" y2="250" stroke="#666" stroke-width="1.5"/>
  <text x="38" y="20">P</text><text x="430" y="268">Y</text>
  <line x1="290" y1="35" x2="290" y2="250" stroke="#c0392b" stroke-width="2"/>
  <text x="266" y="48" fill="#c0392b" font-weight="700">LRAS₁</text>
  <line x1="215" y1="35" x2="215" y2="250" stroke="#e08a80" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="150" y="46" fill="#c0392b" font-weight="700">LRAS₂</text>
  <line x1="150" y1="225" x2="400" y2="85" stroke="#e67e22" stroke-width="2"/>
  <text x="402" y="86" fill="#e67e22" font-weight="700">SRAS₁</text>
  <line x1="100" y1="225" x2="350" y2="85" stroke="#e8b07a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="74" y="92" fill="#cf8a4a" font-weight="700">SRAS₂</text>
  <line x1="130" y1="70" x2="400" y2="240" stroke="#0e8fb8" stroke-width="2"/>
  <text x="384" y="236" fill="#0e8fb8" font-weight="700">AD</text>
  <circle cx="290" cy="158" r="3.6" fill="#222"/><text x="296" y="154" font-weight="700">A</text>
  <circle cx="215" cy="111" r="3.6" fill="#222"/><text x="221" y="108" font-weight="700">B</text>
  <line x1="55" y1="158" x2="290" y2="158" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="162">P₁</text>
  <line x1="55" y1="111" x2="215" y2="111" stroke="#bbb" stroke-dasharray="2,2"/><text x="36" y="115">P₂</text>
  <line x1="215" y1="111" x2="215" y2="250" stroke="#bbb" stroke-dasharray="2,2"/><text x="190" y="266">Yₙ′</text>
  <text x="278" y="266">Yₙ</text>
  <line x1="280" y1="225" x2="225" y2="225" stroke="#c0392b" stroke-width="1.5" marker-end="url(#aD9b)"/>
  <defs><marker id="aD9b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
<p><b>A → B:</b> hilangnya faktor produksi menggeser <b>kedua</b> kurva ke kiri — SRAS menjadi SRAS₂ dan LRAS dari $Y_N$ ke $Y_N'$ yang lebih rendah. Pada keseimbangan baru <b>B</b> tingkat harga naik ($P_1\\to P_2$) dan output turun ke <b>tingkat alamiah baru yang lebih rendah</b> $Y_N'$.</p>
<p><b>Mengapa tidak ada koreksi-diri kembali ke $Y_N$:</b> perekonomian <i>tidak</i> berada di bawah potensialnya — potensialnya sendiri yang turun. Tidak ada kesenjangan resesi yang perlu ditutup, jadi SRAS tidak kembali ke posisi lama. Output tetap <b>permanen lebih rendah</b> di $Y_N'$.</p>
<div class="formula">$$\\text{SRAS}\\downarrow \\;\\&\\; \\text{LRAS}\\downarrow:\\quad P\\uparrow,\\;Y_N \\to Y_N' \\;(\\text{potensial lebih rendah})$$</div>
<div class="tip"><b>Jawaban satu baris:</b> SRAS dan LRAS sama-sama bergeser ke kiri ⇒ tingkat harga naik dan <b>output alamiah permanen lebih rendah</b> $Y_N'$ — tidak kembali ke $Y_N$ lama.</div>
<div class="note"><b>Kesalahan umum:</b> memperlakukan ini seperti guncangan minyak (EX3) yang hanya menggerakkan SRAS dan perekonomian terkoreksi-sendiri kembali ke $Y_N$ awal. Perbedaan kunci: perang/kehilangan populasi menghancurkan <b>kapasitas produktif riil</b>, sehingga LRAS ikut bergeser dan output alamiah permanen lebih rendah. Jika lupa menggeser LRAS, Anda kehilangan inti pertanyaan.</div>
<p style="margin-top:.5rem"><b>Muncul:</b> UAS 2023 (Esai 4b pertumbuhan populasi negatif Jepang), 2024 (Esai 2a perang menghancurkan kapasitas produksi; MCQ9/10 perang infrastruktur negara A hancur).</p>`
          }
        }
      ]
    }

  ]);
})();
