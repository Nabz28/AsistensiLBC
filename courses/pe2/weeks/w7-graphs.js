/* ============================================================================
   PE2 — Week 7 · Graph add-on: deeper, exam-likely worked scenarios
   Appends to window.PE2_WEEKS.w7.graphs (base file w7.js loads first).
   Sources: UAS 2024 (MCQ1), UAS 2025 (Essay 1b). Prose leaves { en, id };
   math/LaTeX shared. Pure inline SVG, symbol-only labels so one SVG serves
   both languages.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w7;
  if (!u) return;
  u.graphs = (u.graphs || []).concat([
    {
      heading: {
        en: 'Exam walkthroughs: signing NX & NCO',
        id: 'Pembahasan ujian: menentukan tanda NX & NCO'
      },
      num: 'EX1',
      cards: [
        {
          title: {
            en: 'Read Y vs. C+I+G to sign NX and NCO',
            id: 'Baca Y vs. C+I+G untuk menentukan tanda NX dan NCO'
          },
          html: {
            en: `<p><b>Exam scenario:</b> a country produces $Y$ but its residents spend $C+I+G$ at home. The exam asks you to compare the two and state the sign of net exports (NX) and net capital outflow (NCO). This is exactly UAS 2024 MCQ1.</p>
<p>Rearrange the open-economy identity: $NX = Y - (C+I+G)$. So the comparison alone fixes the sign — and since $NX = NCO$, it fixes NCO too.</p>
<svg viewBox="0 0 440 270" width="100%" role="img" aria-label="Bar comparison of Y against C plus I plus G with the gap labelled NX equals NCO">
  <!-- baseline -->
  <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1"/>
  <text x="60" y="232" font-size="11" fill="#6b7280">0</text>
  <!-- dashed reference line at top of Y bar -->
  <line x1="120" y1="60" x2="360" y2="60" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- Y bar -->
  <rect x="90" y="60" width="70" height="150" rx="4" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="125" y="135" text-anchor="middle" font-size="15" font-weight="700" fill="#0a6f90">Y</text>
  <text x="125" y="226" text-anchor="middle" font-size="11" fill="#0a6f90">output</text>
  <!-- C+I+G bar (shorter => Y > C+I+G) -->
  <rect x="250" y="100" width="70" height="110" rx="4" fill="#fff7ed" stroke="#d97706"/>
  <text x="285" y="158" text-anchor="middle" font-size="13" font-weight="700" fill="#b45309">C+I+G</text>
  <text x="285" y="226" text-anchor="middle" font-size="11" fill="#b45309">spending</text>
  <!-- gap bracket on the right -->
  <line x1="370" y1="60" x2="370" y2="100" stroke="#15803d" stroke-width="2"/>
  <line x1="365" y1="60" x2="375" y2="60" stroke="#15803d" stroke-width="2"/>
  <line x1="365" y1="100" x2="375" y2="100" stroke="#15803d" stroke-width="2"/>
  <text x="382" y="76" font-size="12" font-weight="700" fill="#15803d">NX</text>
  <text x="382" y="92" font-size="12" font-weight="700" fill="#15803d">= NCO</text>
  <text x="382" y="84" font-size="12" fill="#15803d"> </text>
</svg>
<div class="formula">$$Y > C+I+G \\;\\Rightarrow\\; NX = Y-(C+I+G) > 0 \\;\\Rightarrow\\; NCO > 0$$</div>
<p><b>Numeric panel.</b> Suppose $Y = 1200$, $C = 700$, $I = 250$, $G = 200$. Then $C+I+G = 1150$ and:</p>
<div class="formula">$$NX = 1200 - 1150 = +50 \\qquad NCO = +50$$</div>
<p>Production exceeds domestic spending by $50$, so the extra $50$ of goods is sold abroad (trade <b>surplus</b>), and the matching $50$ of foreign assets is acquired — capital flows <b>out</b>.</p>
<div class="tip"><b>Takeaway:</b> $Y > C+I+G$ &rArr; trade surplus ($NX>0$) <b>and</b> net capital outflow ($NCO>0$). Flip the inequality for a deficit: $Y < C+I+G$ &rArr; $NX<0$, $NCO<0$ (capital flows in). This is the UAS 2024 MCQ1 answer.</div>
<div class="note"><b>Common mistake:</b> reading "$Y$ greater than spending" as capital <i>inflow</i>. It is the opposite — a surplus means the country is <i>lending</i> to the world, so capital goes <b>out</b> ($NCO>0$). Money is not "leaving uselessly"; the country is buying foreign assets.</div>
<p style="font-size:.85em;color:#6b7280;margin-top:.4rem"><b>Appeared:</b> UAS 2024 (MCQ1).</p>`,
            id: `<p><b>Skenario ujian:</b> sebuah negara memproduksi $Y$ tetapi penduduknya membelanjakan $C+I+G$ di dalam negeri. Soal meminta kamu membandingkan keduanya lalu menyatakan tanda ekspor neto (NX) dan arus modal keluar neto (NCO). Inilah persis UAS 2024 MCQ1.</p>
<p>Susun ulang identitas perekonomian terbuka: $NX = Y - (C+I+G)$. Jadi perbandingan saja sudah menentukan tandanya — dan karena $NX = NCO$, tanda NCO ikut tertentu.</p>
<svg viewBox="0 0 440 270" width="100%" role="img" aria-label="Perbandingan batang Y terhadap C plus I plus G dengan selisih berlabel NX sama dengan NCO">
  <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1"/>
  <text x="60" y="232" font-size="11" fill="#6b7280">0</text>
  <line x1="120" y1="60" x2="360" y2="60" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="90" y="60" width="70" height="150" rx="4" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="125" y="135" text-anchor="middle" font-size="15" font-weight="700" fill="#0a6f90">Y</text>
  <text x="125" y="226" text-anchor="middle" font-size="11" fill="#0a6f90">output</text>
  <rect x="250" y="100" width="70" height="110" rx="4" fill="#fff7ed" stroke="#d97706"/>
  <text x="285" y="158" text-anchor="middle" font-size="13" font-weight="700" fill="#b45309">C+I+G</text>
  <text x="285" y="226" text-anchor="middle" font-size="11" fill="#b45309">belanja</text>
  <line x1="370" y1="60" x2="370" y2="100" stroke="#15803d" stroke-width="2"/>
  <line x1="365" y1="60" x2="375" y2="60" stroke="#15803d" stroke-width="2"/>
  <line x1="365" y1="100" x2="375" y2="100" stroke="#15803d" stroke-width="2"/>
  <text x="382" y="76" font-size="12" font-weight="700" fill="#15803d">NX</text>
  <text x="382" y="92" font-size="12" font-weight="700" fill="#15803d">= NCO</text>
  <text x="382" y="84" font-size="12" fill="#15803d"> </text>
</svg>
<div class="formula">$$Y > C+I+G \\;\\Rightarrow\\; NX = Y-(C+I+G) > 0 \\;\\Rightarrow\\; NCO > 0$$</div>
<p><b>Panel angka.</b> Misalkan $Y = 1200$, $C = 700$, $I = 250$, $G = 200$. Maka $C+I+G = 1150$ dan:</p>
<div class="formula">$$NX = 1200 - 1150 = +50 \\qquad NCO = +50$$</div>
<p>Produksi melebihi belanja domestik sebesar $50$, sehingga kelebihan $50$ barang dijual ke luar negeri (<b>surplus</b> perdagangan), dan $50$ aset asing yang cocok diperoleh — modal mengalir <b>keluar</b>.</p>
<div class="tip"><b>Inti:</b> $Y > C+I+G$ &rArr; surplus perdagangan ($NX>0$) <b>dan</b> arus modal keluar neto ($NCO>0$). Balik pertidaksamaannya untuk defisit: $Y < C+I+G$ &rArr; $NX<0$, $NCO<0$ (modal masuk). Inilah jawaban UAS 2024 MCQ1.</div>
<div class="note"><b>Kesalahan umum:</b> membaca "$Y$ lebih besar dari belanja" sebagai arus modal <i>masuk</i>. Justru sebaliknya — surplus berarti negara sedang <i>meminjamkan</i> ke dunia, jadi modal pergi <b>keluar</b> ($NCO>0$). Uang tidak "pergi sia-sia"; negara sedang membeli aset asing.</div>
<p style="font-size:.85em;color:#6b7280;margin-top:.4rem"><b>Muncul:</b> UAS 2024 (MCQ1).</p>`
          }
        }
      ]
    },
    {
      heading: {
        en: 'Exam walkthroughs: a surplus is saving lent abroad',
        id: 'Pembahasan ujian: surplus adalah tabungan yang dipinjamkan ke luar'
      },
      num: 'EX2',
      cards: [
        {
          title: {
            en: 'NX = NCO = S − I: where a trade surplus comes from',
            id: 'NX = NCO = S − I: dari mana surplus perdagangan berasal'
          },
          html: {
            en: `<p><b>Exam scenario:</b> a country runs a trade surplus and you must explain its source using the identity $NX = NCO = S - I$ — the country saves more than it invests at home, so it lends the difference abroad. This is the reasoning UAS 2025 Essay 1b wants.</p>
<p>Compare national saving $S$ against domestic investment $I$. The vertical gap between the two bars <b>is</b> the surplus, and it is the same number as NX and NCO.</p>
<svg viewBox="0 0 440 270" width="100%" role="img" aria-label="Saving bar taller than investment bar, the gap labelled S minus I equals NX equals NCO flowing abroad">
  <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1"/>
  <text x="60" y="232" font-size="11" fill="#6b7280">0</text>
  <line x1="120" y1="70" x2="330" y2="70" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- S bar -->
  <rect x="95" y="70" width="70" height="140" rx="4" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="130" y="135" text-anchor="middle" font-size="15" font-weight="700" fill="#0a6f90">S</text>
  <text x="130" y="226" text-anchor="middle" font-size="11" fill="#0a6f90">saving</text>
  <!-- I bar (shorter => S > I) -->
  <rect x="225" y="120" width="70" height="90" rx="4" fill="#fff7ed" stroke="#d97706"/>
  <text x="260" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="#b45309">I</text>
  <text x="260" y="226" text-anchor="middle" font-size="11" fill="#b45309">investment</text>
  <!-- gap bracket -->
  <line x1="345" y1="70" x2="345" y2="120" stroke="#15803d" stroke-width="2"/>
  <line x1="340" y1="70" x2="350" y2="70" stroke="#15803d" stroke-width="2"/>
  <line x1="340" y1="120" x2="350" y2="120" stroke="#15803d" stroke-width="2"/>
  <text x="357" y="90" font-size="12" font-weight="700" fill="#15803d">S - I</text>
  <text x="357" y="106" font-size="11" font-weight="700" fill="#15803d">= NX = NCO</text>
  <!-- arrow: the gap flows abroad -->
  <line x1="378" y1="95" x2="420" y2="95" stroke="#15803d" stroke-width="2" marker-end="url(#abroad7)"/>
  <text x="399" y="128" text-anchor="middle" font-size="10" fill="#15803d">abroad</text>
  <defs>
    <marker id="abroad7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#15803d"/></marker>
  </defs>
</svg>
<div class="formula">$$S > I \\;\\Rightarrow\\; S - I = NX = NCO > 0$$</div>
<p><b>Numeric panel.</b> Suppose national saving $S = 300$ and domestic investment $I = 220$. Then:</p>
<div class="formula">$$S - I = 300 - 220 = +80 = NX = NCO$$</div>
<p>The $80$ of saving not used for home investment does not vanish — it buys foreign assets ($NCO = +80$), and the matching goods leave as net exports ($NX = +80$). Saving lent abroad <i>is</i> the trade surplus.</p>
<div class="tip"><b>Takeaway:</b> a trade surplus is a country whose <b>saving exceeds its domestic investment</b>; the surplus saving is sent abroad as net capital outflow. One sentence answers UAS 2025 Essay 1b: "$S > I$, so $S - I = NX = NCO > 0$ — the country lends the excess saving to the rest of the world."</div>
<div class="note"><b>Common mistake:</b> claiming a surplus needs $I > S$. It is the reverse. And a <i>deficit</i> ($I > S$) is not "bad saving discipline" by itself — it just means the country invests more than it saves and finances the gap by borrowing abroad ($NCO<0$).</div>
<p style="font-size:.85em;color:#6b7280;margin-top:.4rem"><b>Appeared:</b> UAS 2025 (Essay 1b).</p>`,
            id: `<p><b>Skenario ujian:</b> sebuah negara mengalami surplus perdagangan dan kamu harus menjelaskan sumbernya memakai identitas $NX = NCO = S - I$ — negara menabung lebih banyak daripada yang diinvestasikan di dalam negeri, sehingga meminjamkan selisihnya ke luar negeri. Inilah penalaran yang diminta UAS 2025 Essay 1b.</p>
<p>Bandingkan tabungan nasional $S$ dengan investasi domestik $I$. Selisih vertikal antara kedua batang <b>adalah</b> surplusnya, dan angkanya sama dengan NX dan NCO.</p>
<svg viewBox="0 0 440 270" width="100%" role="img" aria-label="Batang tabungan lebih tinggi dari batang investasi, selisihnya berlabel S minus I sama dengan NX sama dengan NCO mengalir ke luar negeri">
  <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1"/>
  <text x="60" y="232" font-size="11" fill="#6b7280">0</text>
  <line x1="120" y1="70" x2="330" y2="70" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="95" y="70" width="70" height="140" rx="4" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="130" y="135" text-anchor="middle" font-size="15" font-weight="700" fill="#0a6f90">S</text>
  <text x="130" y="226" text-anchor="middle" font-size="11" fill="#0a6f90">tabungan</text>
  <rect x="225" y="120" width="70" height="90" rx="4" fill="#fff7ed" stroke="#d97706"/>
  <text x="260" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="#b45309">I</text>
  <text x="260" y="226" text-anchor="middle" font-size="11" fill="#b45309">investasi</text>
  <line x1="345" y1="70" x2="345" y2="120" stroke="#15803d" stroke-width="2"/>
  <line x1="340" y1="70" x2="350" y2="70" stroke="#15803d" stroke-width="2"/>
  <line x1="340" y1="120" x2="350" y2="120" stroke="#15803d" stroke-width="2"/>
  <text x="357" y="90" font-size="12" font-weight="700" fill="#15803d">S - I</text>
  <text x="357" y="106" font-size="11" font-weight="700" fill="#15803d">= NX = NCO</text>
  <line x1="378" y1="95" x2="420" y2="95" stroke="#15803d" stroke-width="2" marker-end="url(#abroad7id)"/>
  <text x="399" y="128" text-anchor="middle" font-size="10" fill="#15803d">ke luar</text>
  <defs>
    <marker id="abroad7id" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#15803d"/></marker>
  </defs>
</svg>
<div class="formula">$$S > I \\;\\Rightarrow\\; S - I = NX = NCO > 0$$</div>
<p><b>Panel angka.</b> Misalkan tabungan nasional $S = 300$ dan investasi domestik $I = 220$. Maka:</p>
<div class="formula">$$S - I = 300 - 220 = +80 = NX = NCO$$</div>
<p>Tabungan sebesar $80$ yang tidak terpakai untuk investasi dalam negeri tidak lenyap — ia membeli aset asing ($NCO = +80$), dan barang yang cocok keluar sebagai ekspor neto ($NX = +80$). Tabungan yang dipinjamkan ke luar negeri <i>adalah</i> surplus perdagangan.</p>
<div class="tip"><b>Inti:</b> surplus perdagangan adalah negara yang <b>tabungannya melebihi investasi domestiknya</b>; kelebihan tabungan dikirim ke luar negeri sebagai arus modal keluar neto. Satu kalimat menjawab UAS 2025 Essay 1b: "$S > I$, sehingga $S - I = NX = NCO > 0$ — negara meminjamkan kelebihan tabungan ke seluruh dunia."</div>
<div class="note"><b>Kesalahan umum:</b> mengklaim surplus butuh $I > S$. Justru kebalikannya. Dan <i>defisit</i> ($I > S$) bukan dengan sendirinya "disiplin menabung yang buruk" — itu hanya berarti negara berinvestasi lebih banyak daripada menabung dan membiayai selisihnya dengan meminjam dari luar negeri ($NCO<0$).</div>
<p style="font-size:.85em;color:#6b7280;margin-top:.4rem"><b>Muncul:</b> UAS 2025 (Essay 1b).</p>`
          }
        },
        {
          title: {
            en: 'Circular flow tying both identities together',
            id: 'Aliran melingkar yang menyatukan kedua identitas'
          },
          html: {
            en: `<p><b>Exam scenario:</b> the "draw/annotate the open-economy circular flow" prompt. Show how the goods identity $Y = C+I+G+NX$ and the financial identity $S = I + NCO$ describe the <i>same</i> circle, just measured at the goods side and the capital side.</p>
<svg viewBox="0 0 440 290" width="100%" role="img" aria-label="Domestic economy and rest of world with a goods loop labelled NX on top and a capital loop labelled NCO on the bottom">
  <!-- two actors -->
  <rect x="20" y="105" width="130" height="80" rx="8" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="85" y="138" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">Domestic</text>
  <text x="85" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">economy</text>
  <text x="85" y="178" text-anchor="middle" font-size="10" fill="#0a6f90">Y = C+I+G+NX</text>
  <rect x="290" y="105" width="130" height="80" rx="8" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="355" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">Rest of</text>
  <text x="355" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">the world</text>
  <!-- goods loop (top) -->
  <line x1="150" y1="55" x2="290" y2="55" stroke="#0e8fb8" stroke-width="2" marker-end="url(#g7top)"/>
  <text x="220" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#0a6f90">goods: NX</text>
  <text x="220" y="74" text-anchor="middle" font-size="10" fill="#0a6f90">net exports leave</text>
  <!-- capital loop (bottom) -->
  <line x1="150" y1="235" x2="290" y2="235" stroke="#d97706" stroke-width="2" marker-end="url(#c7bot)"/>
  <text x="220" y="222" text-anchor="middle" font-size="10" fill="#b45309">net foreign assets bought</text>
  <text x="220" y="258" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">capital: NCO</text>
  <!-- center identity -->
  <text x="220" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="#111827">NX = NCO</text>
  <text x="220" y="155" text-anchor="middle" font-size="11" fill="#111827">S = I + NCO</text>
  <defs>
    <marker id="g7top" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="c7bot" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d97706"/></marker>
  </defs>
</svg>
<p>Top arrow = the <b>goods market</b>: net exports $NX$ leave for the rest of the world. Bottom arrow = the <b>financial market</b>: the matching net capital outflow $NCO$ buys foreign assets. The two identities sit in the middle because they describe the one circle from two sides.</p>
<div class="tip"><b>Takeaway:</b> annotate any open-economy circular flow with both labels at once — $Y=C+I+G+NX$ on the goods loop and $S=I+NCO$ on the capital loop — and note $NX=NCO$ links them. That single annotated picture answers the whole "tie the identities together" prompt.</div>
<div class="note"><b>Common mistake:</b> drawing only the goods loop and forgetting the capital loop (or vice versa). The exam wants <i>both</i> flows shown and the equality $NX=NCO$ stated explicitly — a one-sided diagram loses the point of the open-economy model.</div>
<p style="font-size:.85em;color:#6b7280;margin-top:.4rem"><b>Appeared:</b> concept-level (no standalone draw question, but supports UAS 2024 MCQ1 &amp; 2025 Essay 1b).</p>`,
            id: `<p><b>Skenario ujian:</b> perintah "gambar/anotasi aliran melingkar perekonomian terbuka". Tunjukkan bagaimana identitas barang $Y = C+I+G+NX$ dan identitas keuangan $S = I + NCO$ menggambarkan lingkaran yang <i>sama</i>, hanya diukur dari sisi barang dan sisi modal.</p>
<svg viewBox="0 0 440 290" width="100%" role="img" aria-label="Perekonomian domestik dan dunia dengan lingkaran barang berlabel NX di atas dan lingkaran modal berlabel NCO di bawah">
  <rect x="20" y="105" width="130" height="80" rx="8" fill="#e7f6fb" stroke="#0e8fb8"/>
  <text x="85" y="138" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">Perekonomian</text>
  <text x="85" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="#0a6f90">domestik</text>
  <text x="85" y="178" text-anchor="middle" font-size="10" fill="#0a6f90">Y = C+I+G+NX</text>
  <rect x="290" y="105" width="130" height="80" rx="8" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="355" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">Dunia</text>
  <text x="355" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">luar negeri</text>
  <line x1="150" y1="55" x2="290" y2="55" stroke="#0e8fb8" stroke-width="2" marker-end="url(#g7topid)"/>
  <text x="220" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#0a6f90">barang: NX</text>
  <text x="220" y="74" text-anchor="middle" font-size="10" fill="#0a6f90">ekspor neto keluar</text>
  <line x1="150" y1="235" x2="290" y2="235" stroke="#d97706" stroke-width="2" marker-end="url(#c7botid)"/>
  <text x="220" y="222" text-anchor="middle" font-size="10" fill="#b45309">aset asing neto dibeli</text>
  <text x="220" y="258" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">modal: NCO</text>
  <text x="220" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="#111827">NX = NCO</text>
  <text x="220" y="155" text-anchor="middle" font-size="11" fill="#111827">S = I + NCO</text>
  <defs>
    <marker id="g7topid" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0e8fb8"/></marker>
    <marker id="c7botid" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d97706"/></marker>
  </defs>
</svg>
<p>Anak panah atas = <b>pasar barang</b>: ekspor neto $NX$ keluar menuju dunia. Anak panah bawah = <b>pasar keuangan</b>: arus modal keluar neto $NCO$ yang cocok membeli aset asing. Kedua identitas berada di tengah karena keduanya menggambarkan satu lingkaran dari dua sisi.</p>
<div class="tip"><b>Inti:</b> anotasikan aliran melingkar perekonomian terbuka mana pun dengan kedua label sekaligus — $Y=C+I+G+NX$ pada lingkaran barang dan $S=I+NCO$ pada lingkaran modal — serta catat $NX=NCO$ yang menghubungkannya. Gambar beranotasi tunggal itu menjawab seluruh perintah "satukan identitas-identitas tersebut".</div>
<div class="note"><b>Kesalahan umum:</b> menggambar hanya lingkaran barang dan lupa lingkaran modal (atau sebaliknya). Soal ingin <i>kedua</i> arus ditampilkan dan kesamaan $NX=NCO$ dinyatakan eksplisit — diagram sepihak kehilangan inti model perekonomian terbuka.</div>
<p style="font-size:.85em;color:#6b7280;margin-top:.4rem"><b>Muncul:</b> tingkat konsep (tanpa soal gambar tersendiri, tetapi mendukung UAS 2024 MCQ1 &amp; 2025 Essay 1b).</p>`
          }
        }
      ]
    }
  ]);
})();
