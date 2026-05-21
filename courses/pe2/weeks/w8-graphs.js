/* ============================================================================
   PE2 · Week 8 — DEEPER exam-likely graph scenarios (Mankiw Ch 33)
   Appends worked, exam-framed 3-panel / loanable-funds diagrams to w8.graphs.
   Source: past UAS papers (2019, 2022, 2023, 2024, 2025) + answer keys.
   Bilingual prose { en, id }; symbol labels live INSIDE the SVG so one drawing
   serves both languages. Math/LaTeX shared. Pure inline SVG — no libraries.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w8;
  if (!u) return;

  u.graphs = (u.graphs || []).concat([
    /* =======================================================================
       SECTION EX1 — Full three-panel exam scenarios
       ======================================================================= */
    {
      heading: {
        en: 'Exam scenarios — the full three-panel model',
        id: 'Skenario ujian — model tiga panel lengkap'
      },
      num: 'EX1',
      cards: [
        /* ----------------------------------------------------------------
           SCENARIO 1 — Government budget deficit ("twin deficits")
           ---------------------------------------------------------------- */
        {
          title: {
            en: 'Scenario 1 — Budget deficit ("twin deficits")',
            id: 'Skenario 1 — Defisit anggaran ("defisit kembar")'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> the government runs a large <span class="key">budget deficit</span>. Trace it through all three panels and find what happens to $r$, $NCO$, the real exchange rate $RER$, and net exports $NX$.</p>
<p>A deficit <span class="key">lowers national saving</span>, so the <span class="key">supply</span> of loanable funds shifts <span class="key">left</span> ($S_1\\!\\to\\!S_2$). That raises $r$; the higher $r$ slides $NCO$ <span class="key">down</span> its curve; the smaller $NCO$ is a smaller (left-shifted) <span class="key">supply</span> of currency in the FX market, so the $RER$ <span class="key">appreciates</span> and $NX$ falls.</p>
${threePanel({
  lf: { sLabel: 'S₂', s2Label: 'S₁', shift: 'left-supply', note: 'r ↑' },
  fx: { kind: 'supply-left', curLabel: 'RER', note: 'RER ↑ (apprec.)' },
  uid: 'd1'
})}
<div class="formula">$$\\text{deficit} \\Rightarrow S_{LF}\\downarrow \\Rightarrow r\\uparrow \\Rightarrow NCO\\downarrow \\Rightarrow S_{\\$}\\downarrow \\Rightarrow RER\\uparrow \\Rightarrow NX\\downarrow$$</div>
<div class="tip">Takeaway: <span class="key">Deficit → r↑, NCO↓, RER appreciates, NX↓.</span> The fiscal deficit and the trade deficit move together — that is why it is called the "twin deficits."</div>
<div class="note">Common mistake: shifting the loanable-funds <em>demand</em> instead of the <em>supply</em>. A deficit is a fall in <em>national saving</em>, so it moves the <em>supply</em> curve left. (Also: do not confuse the appreciation here with capital flight, which depreciates.)</div>
<p style="font-size:11px;color:#777">Appeared: UAS 2019 (S1c), 2024 (MCQ4), 2025 (MCQ4).</p>`,
            id: `<p><span class="key">Skenario ujian:</span> pemerintah menjalankan <span class="key">defisit anggaran</span> yang besar. Telusuri melalui ketiga panel dan tentukan apa yang terjadi pada $r$, $NCO$, nilai tukar riil $RER$, dan ekspor neto $NX$.</p>
<p>Defisit <span class="key">menurunkan tabungan nasional</span>, sehingga <span class="key">penawaran</span> dana pinjaman bergeser ke <span class="key">kiri</span> ($S_1\\!\\to\\!S_2$). Itu menaikkan $r$; $r$ yang lebih tinggi menggeser $NCO$ <span class="key">turun</span> di sepanjang kurvanya; $NCO$ yang lebih kecil adalah <span class="key">penawaran</span> mata uang yang lebih kecil (bergeser ke kiri) di pasar FX, sehingga $RER$ <span class="key">terapresiasi</span> dan $NX$ turun.</p>
${threePanel({
  lf: { sLabel: 'S₂', s2Label: 'S₁', shift: 'left-supply', note: 'r ↑' },
  fx: { kind: 'supply-left', curLabel: 'RER', note: 'RER ↑ (apresiasi)' },
  uid: 'd1'
})}
<div class="formula">$$\\text{defisit} \\Rightarrow S_{LF}\\downarrow \\Rightarrow r\\uparrow \\Rightarrow NCO\\downarrow \\Rightarrow S_{\\$}\\downarrow \\Rightarrow RER\\uparrow \\Rightarrow NX\\downarrow$$</div>
<div class="tip">Inti: <span class="key">Defisit → r↑, NCO↓, RER terapresiasi, NX↓.</span> Defisit fiskal dan defisit perdagangan bergerak bersama — itulah sebabnya disebut "defisit kembar."</div>
<div class="note">Kesalahan umum: menggeser <em>permintaan</em> dana pinjaman, bukan <em>penawaran</em>. Defisit adalah penurunan <em>tabungan nasional</em>, jadi menggeser kurva <em>penawaran</em> ke kiri. (Juga: jangan rancukan apresiasi di sini dengan pelarian modal, yang justru mendepresiasi.)</div>
<p style="font-size:11px;color:#777">Muncul: UAS 2019 (S1c), 2024 (MCQ4), 2025 (MCQ4).</p>`
          }
        },

        /* ----------------------------------------------------------------
           SCENARIO 2 — Capital flight (political risk / Fed-hike analog)
           ---------------------------------------------------------------- */
        {
          title: {
            en: 'Scenario 2 — Capital flight (political risk)',
            id: 'Skenario 2 — Pelarian modal (risiko politik)'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> political risk triggers <span class="key">capital flight</span> — at every $r$, residents want to hold <em>more</em> foreign assets, so the $NCO$ curve shifts <span class="key">right</span>. (A foreign interest-rate hike, e.g. the Fed, works the same way.)</p>
<p>The right-shifted $NCO$ adds to loanable-funds <span class="key">demand</span> ($D_1\\!\\to\\!D_2$), raising $r$. At the same time the larger $NCO$ is a larger (right-shifted) <span class="key">supply</span> of the home currency in the FX market, so the $RER$ <span class="key">depreciates</span>.</p>
${threePanel({
  lf: { dLabel: 'D₁', d2Label: 'D₂', shift: 'right-demand', note: 'r ↑' },
  fx: { kind: 'supply-right', curLabel: 'RER', note: 'RER ↓ (deprec.)' },
  uid: 'cf1'
})}
<div class="formula">$$\\text{flight} \\Rightarrow NCO\\uparrow \\Rightarrow D_{LF}\\uparrow \\Rightarrow r\\uparrow,\\ I\\downarrow \\quad\\text{and}\\quad S_{\\$}\\uparrow \\Rightarrow RER\\downarrow$$</div>
<div class="tip">Takeaway: <span class="key">Capital flight → NCO↑, r↑, I↓, RER depreciates.</span> It is the <em>only</em> shock in this chapter that <span class="key">depreciates</span> the currency.</div>
<div class="note">Common mistake: forgetting that <em>two</em> curves move. Capital flight shifts BOTH the $NCO$ curve right (which drags loanable-funds demand right) AND the FX supply right. Shift only one and your $RER$ direction comes out wrong.</div>
<p style="font-size:11px;color:#777">Appeared: UAS 2019 (S1d, Asian crisis), 2022 (MCQ7), 2023 (Essay 2a, Fed-hike), 2024 (Essay 1b, Venezuela).</p>`,
            id: `<p><span class="key">Skenario ujian:</span> risiko politik memicu <span class="key">pelarian modal</span> — pada setiap $r$, penduduk ingin memegang <em>lebih banyak</em> aset asing, sehingga kurva $NCO$ bergeser ke <span class="key">kanan</span>. (Kenaikan suku bunga luar negeri, mis. The Fed, bekerja serupa.)</p>
<p>$NCO$ yang bergeser ke kanan menambah <span class="key">permintaan</span> dana pinjaman ($D_1\\!\\to\\!D_2$), menaikkan $r$. Bersamaan, $NCO$ yang lebih besar adalah <span class="key">penawaran</span> mata uang domestik yang lebih besar (bergeser ke kanan) di pasar FX, sehingga $RER$ <span class="key">terdepresiasi</span>.</p>
${threePanel({
  lf: { dLabel: 'D₁', d2Label: 'D₂', shift: 'right-demand', note: 'r ↑' },
  fx: { kind: 'supply-right', curLabel: 'RER', note: 'RER ↓ (depresiasi)' },
  uid: 'cf1'
})}
<div class="formula">$$\\text{pelarian} \\Rightarrow NCO\\uparrow \\Rightarrow D_{LF}\\uparrow \\Rightarrow r\\uparrow,\\ I\\downarrow \\quad\\text{dan}\\quad S_{\\$}\\uparrow \\Rightarrow RER\\downarrow$$</div>
<div class="tip">Inti: <span class="key">Pelarian modal → NCO↑, r↑, I↓, RER terdepresiasi.</span> Ini <em>satu-satunya</em> guncangan di bab ini yang <span class="key">mendepresiasi</span> mata uang.</div>
<div class="note">Kesalahan umum: lupa bahwa <em>dua</em> kurva bergerak. Pelarian modal menggeser kurva $NCO$ ke kanan (yang menarik permintaan dana pinjaman ke kanan) DAN penawaran FX ke kanan. Jika hanya satu yang digeser, arah $RER$ Anda akan keliru.</div>
<p style="font-size:11px;color:#777">Muncul: UAS 2019 (S1d, krisis Asia), 2022 (MCQ7), 2023 (Essay 2a, kenaikan Fed), 2024 (Essay 1b, Venezuela).</p>`
          }
        },

        /* ----------------------------------------------------------------
           SCENARIO 3 — Trade policy: tariff/quota (NX unchanged)
           ---------------------------------------------------------------- */
        {
          title: {
            en: 'Scenario 3 — Tariff / quota: why it fails to fix the trade balance',
            id: 'Skenario 3 — Tarif / kuota: mengapa gagal memperbaiki neraca dagang'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> the government imposes a <span class="key">tariff or import quota</span> to "fix the trade deficit." Show why $NX$ ends up <span class="key">unchanged</span>.</p>
<p>A tariff does <span class="key">nothing</span> to $S$ or $I$, so $NCO$ — and therefore the <span class="key">vertical supply</span> of currency — is unchanged in panels (1) and (2). It only raises $NX$ <span class="key">at the current $RER$</span>, shifting FX <span class="key">demand right</span> ($D_1\\!\\to\\!D_2$). The $RER$ <span class="key">appreciates</span> until $NX$ is pushed right back to its starting level.</p>
${threePanel({
  lf: { shift: 'none', note: 'no change' },
  fx: { kind: 'demand-right', curLabel: 'RER', note: 'RER ↑, NX unch.' },
  uid: 'tp1'
})}
<div class="formula">$$\\text{tariff} \\Rightarrow S,I,NCO\\ \\text{unchanged} \\Rightarrow NX\\uparrow\\ \\text{at }RER_1 \\Rightarrow D_{\\$}\\uparrow \\Rightarrow RER\\uparrow \\Rightarrow NX\\ \\text{back to } NX_1$$</div>
<div class="tip">Takeaway: <span class="key">Tariff → RER appreciates, NX UNCHANGED.</span> Because $NX = NCO$ and $NCO$ never moved, the trade balance cannot change — the appreciation exactly offsets the policy.</div>
<div class="note">Common mistake: concluding "imports fall, so the trade deficit shrinks." It does not. The currency appreciation makes exports dearer and imports cheaper again, restoring the original $NX$. The quantity of currency traded stays on the same vertical $S = NCO$ line — visual proof $NX$ is unchanged.</div>
<p style="font-size:11px;color:#777">Appeared: UAS 2024 (MCQ5, car tariff), 2025 (Essay 1a, Trump tariff).</p>`,
            id: `<p><span class="key">Skenario ujian:</span> pemerintah menerapkan <span class="key">tarif atau kuota impor</span> untuk "memperbaiki defisit perdagangan." Tunjukkan mengapa $NX$ akhirnya <span class="key">tidak berubah</span>.</p>
<p>Tarif <span class="key">tidak mengubah</span> $S$ atau $I$, sehingga $NCO$ — dan karenanya <span class="key">penawaran vertikal</span> mata uang — tidak berubah di panel (1) dan (2). Ia hanya menaikkan $NX$ <span class="key">pada $RER$ saat ini</span>, menggeser <span class="key">permintaan</span> FX ke <span class="key">kanan</span> ($D_1\\!\\to\\!D_2$). $RER$ <span class="key">terapresiasi</span> hingga $NX$ terdorong kembali ke tingkat awalnya.</p>
${threePanel({
  lf: { shift: 'none', note: 'tidak berubah' },
  fx: { kind: 'demand-right', curLabel: 'RER', note: 'RER ↑, NX tetap' },
  uid: 'tp1'
})}
<div class="formula">$$\\text{tarif} \\Rightarrow S,I,NCO\\ \\text{tetap} \\Rightarrow NX\\uparrow\\ \\text{pada }RER_1 \\Rightarrow D_{\\$}\\uparrow \\Rightarrow RER\\uparrow \\Rightarrow NX\\ \\text{kembali ke } NX_1$$</div>
<div class="tip">Inti: <span class="key">Tarif → RER terapresiasi, NX TIDAK BERUBAH.</span> Karena $NX = NCO$ dan $NCO$ tak pernah bergerak, neraca dagang tak bisa berubah — apresiasi persis mengimbangi kebijakan tersebut.</div>
<div class="note">Kesalahan umum: menyimpulkan "impor turun, jadi defisit dagang mengecil." Tidak demikian. Apresiasi mata uang membuat ekspor lebih mahal dan impor lebih murah lagi, memulihkan $NX$ semula. Jumlah mata uang yang diperdagangkan tetap di garis $S = NCO$ vertikal yang sama — bukti visual $NX$ tidak berubah.</div>
<p style="font-size:11px;color:#777">Muncul: UAS 2024 (MCQ5, tarif mobil), 2025 (Essay 1a, tarif Trump).</p>`
          }
        }
      ]
    },

    /* =======================================================================
       SECTION EX2 — Building-block panel (loanable funds alone)
       ======================================================================= */
    {
      heading: {
        en: 'Building block — the loanable-funds panel alone',
        id: 'Blok dasar — panel dana pinjaman saja'
      },
      num: 'EX2',
      cards: [
        /* ----------------------------------------------------------------
           SCENARIO 4 — Standalone loanable-funds shift (saving / investment)
           ---------------------------------------------------------------- */
        {
          title: {
            en: 'Scenario 4 — A shift in saving or investment demand',
            id: 'Skenario 4 — Pergeseran tabungan atau permintaan investasi'
          },
          html: {
            en: `<p><span class="key">Exam scenario:</span> read the loanable-funds market on its own — the building block inside every three-panel question. The vertical axis is $r$, the horizontal axis is the quantity of loanable funds; supply $S$ comes from national saving, demand $D = I + NCO$.</p>
<p><span class="key">Case (i) — saving falls</span> (e.g. a deficit, or a consumption boom): supply shifts <span class="key">left</span> ($S_1\\!\\to\\!S_2$) → $r$ <span class="key">rises</span>, equilibrium quantity <span class="key">falls</span>. <span class="key">Case (ii) — investment demand falls</span> (pessimism): demand shifts <span class="key">left</span> ($D_1\\!\\to\\!D_2$) → $r$ and quantity <span class="key">both fall</span> (the 2022 MCQ-5 result).</p>
${lfPair('lf2')}
<div class="formula">$$S_{LF}\\downarrow \\Rightarrow r\\uparrow,\\ Q\\downarrow \\qquad\\qquad D_{LF}\\downarrow \\Rightarrow r\\downarrow,\\ Q\\downarrow$$</div>
<div class="tip">Takeaway: a <span class="key">left-shift of supply</span> raises $r$ but cuts $Q$; a <span class="key">left-shift of demand</span> cuts BOTH $r$ and $Q$. Quantity falls in both — only $r$ tells the two apart.</div>
<div class="note">Common mistake: reasoning from price instead of from the curve. Ask first "did saving (supply) or investment-demand move, and which way?" — then read off $r$ and $Q$. Never slide both curves at once unless the scenario truly shifts both.</div>
<p style="font-size:11px;color:#777">Appeared: UAS 2022 (MCQ5) and embedded in every three-panel essay.</p>`,
            id: `<p><span class="key">Skenario ujian:</span> baca pasar dana pinjaman tersendiri — blok dasar di dalam setiap soal tiga panel. Sumbu vertikal adalah $r$, sumbu horizontal adalah jumlah dana pinjaman; penawaran $S$ berasal dari tabungan nasional, permintaan $D = I + NCO$.</p>
<p><span class="key">Kasus (i) — tabungan turun</span> (mis. defisit, atau lonjakan konsumsi): penawaran bergeser ke <span class="key">kiri</span> ($S_1\\!\\to\\!S_2$) → $r$ <span class="key">naik</span>, jumlah keseimbangan <span class="key">turun</span>. <span class="key">Kasus (ii) — permintaan investasi turun</span> (pesimisme): permintaan bergeser ke <span class="key">kiri</span> ($D_1\\!\\to\\!D_2$) → $r$ dan jumlah <span class="key">sama-sama turun</span> (hasil MCQ-5 2022).</p>
${lfPair('lf2')}
<div class="formula">$$S_{LF}\\downarrow \\Rightarrow r\\uparrow,\\ Q\\downarrow \\qquad\\qquad D_{LF}\\downarrow \\Rightarrow r\\downarrow,\\ Q\\downarrow$$</div>
<div class="tip">Inti: <span class="key">pergeseran penawaran ke kiri</span> menaikkan $r$ tapi memangkas $Q$; <span class="key">pergeseran permintaan ke kiri</span> memangkas KEDUANYA, $r$ dan $Q$. Jumlah turun pada kedua kasus — hanya $r$ yang membedakannya.</div>
<div class="note">Kesalahan umum: menalar dari harga, bukan dari kurva. Tanyakan dulu "apakah tabungan (penawaran) atau permintaan-investasi yang bergerak, dan ke arah mana?" — baru baca $r$ dan $Q$. Jangan menggeser kedua kurva sekaligus kecuali skenario memang menggeser keduanya.</div>
<p style="font-size:11px;color:#777">Muncul: UAS 2022 (MCQ5) dan tertanam di setiap esai tiga panel.</p>`
          }
        }
      ]
    }
  ]);

  /* =========================================================================
     SVG BUILDERS — language-neutral (symbol labels only) so one drawing
     serves EN and ID. Colors match w8.js: supply #0e8fb8, demand #c0392b,
     equilibrium dots #111, guides #888, shift arrows #777.
     ========================================================================= */

  // Three-panel diagram: (1) loanable funds, (2) NCO(r), (3) FX market.
  function threePanel(o) {
    var uid = o.uid;
    var lf = o.lf || {};
    var fx = o.fx || {};
    return '' +
'<svg viewBox="0 0 760 240" width="100%" style="max-width:760px;font-family:Inter,sans-serif;font-size:12px">' +
  '<defs><marker id="ar' + uid + '" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#777"/></marker></defs>' +
  panelLF(lf, uid) +
  panelNCO() +
  panelFX(fx, uid) +
'</svg>';
  }

  // Panel 1: loanable-funds market (x: 40..220).
  function panelLF(lf, uid) {
    var s = '' +
'<line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>' +
'<line x1="40" y1="180" x2="220" y2="180" stroke="#333" stroke-width="1.5"/>' +
'<text x="22" y="16">r</text><text x="178" y="198">Quantity (LF)</text>';
    if (lf.shift === 'left-supply') {
      // supply moves left S1(x=140) -> S2(x=105); demand fixed; r up, Q down
      s += '<line x1="55" y1="45" x2="210" y2="170" stroke="#c0392b" stroke-width="2"/><text x="186" y="166" fill="#c0392b">D</text>';
      s += '<line x1="140" y1="20" x2="140" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="143" y="32" fill="#0e8fb8">' + (lf.s2Label || 'S₁') + '</text>';
      s += '<line x1="105" y1="20" x2="105" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/><text x="78" y="32" fill="#0e8fb8">' + (lf.sLabel || 'S₂') + '</text>';
      s += '<circle cx="140" cy="123" r="3.5" fill="#111"/><text x="22" y="127">r₁</text>';
      s += '<circle cx="105" cy="95" r="3.5" fill="#111"/><text x="22" y="99">r₂</text>';
      s += '<line x1="40" y1="123" x2="140" y2="123" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<line x1="40" y1="95" x2="105" y2="95" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<path d="M134 60 q-16 -6 -34 4" fill="none" stroke="#777" marker-end="url(#ar' + uid + ')"/>';
    } else if (lf.shift === 'right-demand') {
      // demand moves right D1 -> D2; supply fixed; r up, Q up
      s += '<line x1="130" y1="20" x2="130" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="112" y="32" fill="#0e8fb8">S</text>';
      s += '<line x1="55" y1="58" x2="195" y2="170" stroke="#c0392b" stroke-width="2"/><text x="172" y="166" fill="#c0392b">' + (lf.dLabel || 'D₁') + '</text>';
      s += '<line x1="80" y1="42" x2="212" y2="148" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/><text x="192" y="144" fill="#c0392b">' + (lf.d2Label || 'D₂') + '</text>';
      s += '<circle cx="130" cy="114" r="3.5" fill="#111"/><text x="22" y="118">r₁</text>';
      s += '<circle cx="130" cy="86" r="3.5" fill="#111"/><text x="22" y="90">r₂</text>';
      s += '<line x1="40" y1="114" x2="130" y2="114" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<line x1="40" y1="86" x2="130" y2="86" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<path d="M150 60 q18 -4 34 6" fill="none" stroke="#777" marker-end="url(#ar' + uid + ')"/>';
    } else {
      // no shift (tariff): supply + demand fixed, single equilibrium
      s += '<line x1="130" y1="20" x2="130" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="112" y="32" fill="#0e8fb8">S</text>';
      s += '<line x1="55" y1="50" x2="205" y2="170" stroke="#c0392b" stroke-width="2"/><text x="178" y="166" fill="#c0392b">D=I+NCO</text>';
      s += '<circle cx="130" cy="110" r="3.5" fill="#111"/><text x="22" y="114">r₁</text>';
      s += '<line x1="40" y1="110" x2="130" y2="110" stroke="#888" stroke-dasharray="3 3"/>';
    }
    s += '<text x="60" y="218" font-weight="600">(1) LF: ' + (lf.note || '') + '</text>';
    return s;
  }

  // Panel 2: NCO(r), downward-sloping (x: 290..470). Static reference.
  function panelNCO() {
    return '' +
'<line x1="290" y1="20" x2="290" y2="180" stroke="#333" stroke-width="1.5"/>' +
'<line x1="290" y1="180" x2="470" y2="180" stroke="#333" stroke-width="1.5"/>' +
'<text x="272" y="16">r</text><text x="446" y="198">NCO</text>' +
'<line x1="305" y1="40" x2="460" y2="170" stroke="#c0392b" stroke-width="2"/>' +
'<text x="436" y="58" fill="#c0392b">NCO(r)</text>' +
'<line x1="290" y1="105" x2="385" y2="105" stroke="#888" stroke-dasharray="3 3"/>' +
'<line x1="385" y1="105" x2="385" y2="180" stroke="#888" stroke-dasharray="3 3"/>' +
'<circle cx="385" cy="105" r="3.5" fill="#111"/>' +
'<text x="274" y="109">r₁</text>' +
'<text x="318" y="218" font-weight="600">(2) r → NCO</text>';
  }

  // Panel 3: FX market (x: 540..720). kind drives which curve shifts.
  function panelFX(fx, uid) {
    var cur = fx.curLabel || 'RER';
    var s = '' +
'<line x1="540" y1="20" x2="540" y2="180" stroke="#333" stroke-width="1.5"/>' +
'<line x1="540" y1="180" x2="720" y2="180" stroke="#333" stroke-width="1.5"/>' +
'<text x="518" y="16">' + cur + '</text><text x="690" y="198">$ (FX)</text>';
    if (fx.kind === 'supply-left') {
      // supply (NCO) shifts left -> RER up
      s += '<line x1="630" y1="20" x2="630" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="598" y="32" fill="#0e8fb8">S₁=NCO₁</text>';
      s += '<line x1="595" y1="20" x2="595" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/><text x="552" y="46" fill="#0e8fb8">S₂=NCO₂</text>';
      s += '<line x1="555" y1="42" x2="710" y2="170" stroke="#c0392b" stroke-width="2"/><text x="686" y="166" fill="#c0392b">D=NX</text>';
      s += '<circle cx="630" cy="118" r="3.5" fill="#111"/><text x="518" y="122">' + cur + '₁</text>';
      s += '<circle cx="595" cy="89" r="3.5" fill="#111"/><text x="518" y="93">' + cur + '₂</text>';
      s += '<line x1="540" y1="118" x2="630" y2="118" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<line x1="540" y1="89" x2="595" y2="89" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<path d="M624 60 q-16 -6 -34 4" fill="none" stroke="#777" marker-end="url(#ar' + uid + ')"/>';
    } else if (fx.kind === 'supply-right') {
      // supply (NCO) shifts right -> RER down (depreciate)
      s += '<line x1="600" y1="20" x2="600" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="568" y="32" fill="#0e8fb8">S₁=NCO₁</text>';
      s += '<line x1="640" y1="20" x2="640" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/><text x="643" y="46" fill="#0e8fb8">S₂=NCO₂</text>';
      s += '<line x1="555" y1="42" x2="710" y2="170" stroke="#c0392b" stroke-width="2"/><text x="686" y="166" fill="#c0392b">D=NX</text>';
      s += '<circle cx="600" cy="94" r="3.5" fill="#111"/><text x="518" y="98">' + cur + '₁</text>';
      s += '<circle cx="640" cy="127" r="3.5" fill="#111"/><text x="518" y="131">' + cur + '₂</text>';
      s += '<line x1="540" y1="94" x2="600" y2="94" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<line x1="540" y1="127" x2="640" y2="127" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<path d="M606 60 q18 -4 34 6" fill="none" stroke="#777" marker-end="url(#ar' + uid + ')"/>';
    } else {
      // demand-right (tariff): supply (NCO) fixed vertical, demand shifts right -> RER up, Q unchanged
      s += '<line x1="630" y1="20" x2="630" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="588" y="32" fill="#0e8fb8">S=NCO (fixed)</text>';
      s += '<line x1="555" y1="58" x2="700" y2="170" stroke="#c0392b" stroke-width="2"/><text x="678" y="166" fill="#c0392b">D₁=NX</text>';
      s += '<line x1="575" y1="40" x2="718" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/><text x="700" y="146" fill="#c0392b">D₂</text>';
      s += '<circle cx="630" cy="116" r="3.5" fill="#111"/><text x="518" y="120">' + cur + '₁</text>';
      s += '<circle cx="630" cy="88" r="3.5" fill="#111"/><text x="518" y="92">' + cur + '₂</text>';
      s += '<line x1="540" y1="116" x2="630" y2="116" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<line x1="540" y1="88" x2="630" y2="88" stroke="#888" stroke-dasharray="3 3"/>';
      s += '<path d="M600 52 q18 -8 36 2" fill="none" stroke="#777" marker-end="url(#ar' + uid + ')"/>';
    }
    s += '<text x="560" y="218" font-weight="600">(3) ' + (fx.note || '') + '</text>';
    return s;
  }

  // Two side-by-side loanable-funds panels: supply-left and demand-left.
  function lfPair(uid) {
    return '' +
'<svg viewBox="0 0 520 230" width="100%" style="max-width:520px;font-family:Inter,sans-serif;font-size:12px">' +
  '<defs><marker id="lp' + uid + '" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#777"/></marker></defs>' +
  // Panel (i): supply shifts left
  '<line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/>' +
  '<line x1="40" y1="180" x2="230" y2="180" stroke="#333" stroke-width="1.5"/>' +
  '<text x="22" y="16">r</text><text x="150" y="198">Quantity (LF)</text>' +
  '<line x1="55" y1="45" x2="220" y2="170" stroke="#c0392b" stroke-width="2"/><text x="196" y="166" fill="#c0392b">D</text>' +
  '<line x1="150" y1="20" x2="150" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="153" y="32" fill="#0e8fb8">S₁</text>' +
  '<line x1="110" y1="20" x2="110" y2="180" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="5 3"/><text x="82" y="32" fill="#0e8fb8">S₂</text>' +
  '<circle cx="150" cy="128" r="3.5" fill="#111"/><text x="22" y="132">r₁</text>' +
  '<circle cx="110" cy="98" r="3.5" fill="#111"/><text x="22" y="102">r₂</text>' +
  '<line x1="40" y1="128" x2="150" y2="128" stroke="#888" stroke-dasharray="3 3"/>' +
  '<line x1="40" y1="98" x2="110" y2="98" stroke="#888" stroke-dasharray="3 3"/>' +
  '<path d="M144 60 q-16 -6 -34 4" fill="none" stroke="#777" marker-end="url(#lp' + uid + ')"/>' +
  '<text x="48" y="218" font-weight="600">(i) S↓: r↑, Q↓</text>' +
  // Panel (ii): demand shifts left
  '<line x1="300" y1="20" x2="300" y2="180" stroke="#333" stroke-width="1.5"/>' +
  '<line x1="300" y1="180" x2="490" y2="180" stroke="#333" stroke-width="1.5"/>' +
  '<text x="282" y="16">r</text><text x="410" y="198">Quantity (LF)</text>' +
  '<line x1="390" y1="20" x2="390" y2="180" stroke="#0e8fb8" stroke-width="2"/><text x="393" y="32" fill="#0e8fb8">S</text>' +
  '<line x1="330" y1="55" x2="470" y2="168" stroke="#c0392b" stroke-width="2"/><text x="446" y="164" fill="#c0392b">D₁</text>' +
  '<line x1="315" y1="72" x2="448" y2="172" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 3"/><text x="316" y="68" fill="#c0392b">D₂</text>' +
  '<circle cx="390" cy="116" r="3.5" fill="#111"/><text x="282" y="120">r₁</text>' +
  '<circle cx="390" cy="144" r="3.5" fill="#111"/><text x="282" y="148">r₂</text>' +
  '<line x1="300" y1="116" x2="390" y2="116" stroke="#888" stroke-dasharray="3 3"/>' +
  '<line x1="300" y1="144" x2="390" y2="144" stroke="#888" stroke-dasharray="3 3"/>' +
  '<path d="M360 70 q-16 6 -30 -2" fill="none" stroke="#777" marker-end="url(#lp' + uid + ')"/>' +
  '<text x="305" y="218" font-weight="600">(ii) D↓: r↓, Q↓</text>' +
'</svg>';
  }
})();
