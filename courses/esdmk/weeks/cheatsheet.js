/* ============================================================================
   ESDMK · Cheatsheet Builder — A4 two-sided
   Designed as a SPECIAL unit on window.ESDMK_WEEKS.cheatsheet.
   The course is open-note ("hand-written note on an A4 page, two-sided,
   officially stamped"), so this unit is a transcription source: copy each
   block onto your cheatsheet exactly as laid out below.

   Layout: Side A covers Topic 1 (Schooling) + Topic 2 (CWD).
           Side B covers Topic 3 (Discrimination) + Topic 4 (Migration).
   Each "side" is one section so you can keep visual parity.

   Diagrams are reproduced small here as memory aids; redraw them by hand —
   labelled axes, intersections, shaded areas are what graders score.
   ============================================================================ */
(function () {
  window.ESDMK_WEEKS = window.ESDMK_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16', GREEN = '#15803d';

  /* ----- Mini-diagrams (tiny, so they fit on a half-A4) -------------------- */
  var MINI_MRR = { panels: [{
    title: 'MRR–MCC: s* falls when r↑',
    w: 320, h: 220,
    x: { min: 0, max: 20, label: 's' }, y: { min: 0, max: 16, label: '%' },
    curves: [
      { id: 'MRR',  kind: 'line', p1: [0,14], p2: [20,4], color: RED, label: 'MRR(s)' },
      { id: 'r1',   kind: 'hline', y: 6,  color: TEAL,  label: 'r₁=6%' },
      { id: 'r2',   kind: 'hline', y: 10, color: AMBER, label: 'r₂=10%' }
    ],
    points: [
      { on: ['MRR','r1'], guideX: 's₁*', dot: true },
      { on: ['MRR','r2'], guideX: 's₂*', dot: true }
    ]
  }] };

  var MINI_HEDONIC = { panels: [{
    title: 'CWD: hedonic locus w = h(x)',
    w: 320, h: 220,
    x: { min: 0, max: 1.0, label: 'x' }, y: { min: 10, max: 40, label: 'w' },
    curves: [
      { kind: 'path',
        pts: [[0,16],[0.2,19.36],[0.4,23.04],[0.6,27.04],[0.8,31.36],[1.0,36]],
        smooth: true, color: RED, label: 'w(x)' }
    ],
    points: [
      { at: [0,16], dot: true, label: 'clean' },
      { at: [1,36], dot: true, label: 'dirty' }
    ]
  }] };

  var MINI_DISCRIM = { panels: [{
    title: 'Discrimination: w_F/w_M < 1',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'E_F' }, y: { min: 0, max: 1.5, label: 'w_F/w_M' },
    curves: [
      { id: 'S',  kind: 'vline', x: 6, color: LINE,  label: 'S' },
      { id: 'D',  kind: 'line', p1: [0,1.4], p2: [10,0.2], color: RED, label: 'D' },
      { id: 'one', kind: 'hline', y: 1.0, color: '#999', label: 'parity' }
    ],
    points: [ { on: ['D','S'], guideY: '(wF/wM)*', dot: true } ]
  }] };

  var MINI_LEWIS = { panels: [{
    title: 'Lewis: hire to MRP=OW',
    w: 320, h: 220,
    x: { min: 0, max: 10, label: 'L' }, y: { min: 0, max: 8, label: 'w' },
    curves: [
      { id: 'S', kind: 'hline', y: 2, color: '#999', label: 'OS' },
      { id: 'W', kind: 'hline', y: 4, color: LINE,   label: 'OW' },
      { id: 'M', kind: 'line', p1: [0,7], p2: [5,4], color: RED, label: 'MRP' }
    ],
    points: [ { on: ['M','W'], guideX: 'Q', dot: true } ]
  }] };

  window.ESDMK_WEEKS.cheatsheet = {
    id: 'cheatsheet',
    label: { en: 'Cheatsheet', id: 'Cheatsheet' },
    title: { en: 'A4 Two-Sided Cheatsheet Builder', id: 'Pembangun Cheatsheet A4 Dua Sisi' },
    subtitle: {
      en: 'The UAS is open-note with one A4 two-sided sheet "officially stamped by the program". Transcribe Side A and Side B below. Every formula, decision rule and mini-diagram on this page is exam-ready — nothing extra.',
      id: 'UAS open-note dengan satu lembar A4 dua sisi "yang resmi distempel program". Salin Sisi A dan Sisi B di bawah. Tiap rumus, aturan keputusan, dan mini-diagram di halaman ini siap ujian — tak ada yang berlebih.'
    },

    /* ==================== NOTES = the actual cheatsheet ==================== */
    notes: [
      /* ------------------------- SIDE A ------------------------- */
      {
        heading: { en: 'SIDE A · Topic 1 (Schooling) + Topic 2 (CWD)', id: 'SISI A · Topik 1 (Sekolah) + Topik 2 (CWD)' },
        num: 'A',
        cards: [
          {
            title: { en: 'A1 · Schooling as investment — NPV & IRR', id: 'A1 · Sekolah sebagai investasi — NPV & IRR' },
            html: {
              en: `<div class="formula"><strong>ENPV.</strong> $\\text{ENPV} = \\displaystyle\\sum_{t=0}^{T} \\dfrac{w_t - C_t}{(1+r)^t}$</div>
<div class="formula"><strong>School iff.</strong> ENPV(school) > ENPV(no-school) $\\;\\Leftrightarrow\\;$ IRR $R > r$</div>
<div class="formula"><strong>Optimal s.</strong> $\\dfrac{w'(s^{*})}{w(s^{*})} = r$ &nbsp;⇒&nbsp; MRR(s*) = MCC</div>
<p><strong>Costs:</strong> direct (tuition, books) · opportunity (forgone wage) · psychic.<br>
<strong>Benefits:</strong> higher wage · lower unemployment · pleasant job · consumption value.</p>
<p><strong>Shifts.</strong> $r\\uparrow$ (credit constraint, present-orientation) ⇒ MCC↑ ⇒ <span class="key">s*↓</span>. Opportunity cost↑ (gig pays now) ⇒ MCC↑ ⇒ <span class="key">s*↓</span>. Higher ability ⇒ MRR↑ ⇒ <span class="key">s*↑</span>.</p>
<p><strong>Indonesia.</strong> Private return ≥ 8% per BPS, yet low-income youth skip uni: binding credit constraint pushes effective $r$ high.</p>`,
              id: `<div class="formula"><strong>ENPV.</strong> $\\text{ENPV} = \\displaystyle\\sum_{t=0}^{T} \\dfrac{w_t - C_t}{(1+r)^t}$</div>
<div class="formula"><strong>Sekolah iff.</strong> ENPV(sekolah) > ENPV(tdk) $\\;\\Leftrightarrow\\;$ IRR $R > r$</div>
<div class="formula"><strong>s optimal.</strong> $\\dfrac{w'(s^{*})}{w(s^{*})} = r$ ⇒ MRR(s*) = MCC</div>
<p><strong>Biaya:</strong> langsung · opportunity · psikis. <strong>Manfaat:</strong> upah · pengangguran · pekerjaan menyenangkan · konsumsi.</p>
<p><strong>Pergeseran.</strong> $r\\uparrow$ ⇒ <span class="key">s*↓</span>; opportunity cost↑ ⇒ <span class="key">s*↓</span>; kemampuan↑ ⇒ <span class="key">s*↑</span>.</p>`
            },
            chart: MINI_MRR
          },
          {
            title: { en: 'A2 · Mincer + signalling', id: 'A2 · Mincer + sinyal' },
            html: {
              en: `<div class="formula">$\\ln w = \\alpha_1 + \\alpha_2 \\text{YOS} + \\alpha_3 \\text{EXP} + \\alpha_4 \\text{EXP}^2 + \\varepsilon$</div>
<p>$\\alpha_2$ = % return per year (Indonesia ≥ 8%); $\\alpha_3>0$ exp; $\\alpha_4<0$ concavity / depreciation.</p>
<p><strong>Biases:</strong> ability↑ (upward), consumption benefit (downward), selectivity.</p>
<p><strong>Signalling (Spence).</strong> Education does not raise productivity; it <em>reveals</em> ability because high-ability types find school cheaper. Pure signalling cannot explain year-by-year returns — real story is HC + signal.</p>`,
              id: `<div class="formula">$\\ln w = \\alpha_1 + \\alpha_2 \\text{YOS} + \\alpha_3 \\text{EXP} + \\alpha_4 \\text{EXP}^2 + \\varepsilon$</div>
<p>$\\alpha_2$ = % return per tahun (ID ≥ 8%); $\\alpha_3>0$; $\\alpha_4<0$.</p>
<p><strong>Bias:</strong> kemampuan (↑), manfaat konsumsi (↓), selektivitas.</p>
<p><strong>Sinyal (Spence).</strong> Pendidikan mengungkapkan, tidak menaikkan; tipe-H sekolah lebih murah. Empiris keduanya HC + sinyal.</p>`
            }
          },
          {
            title: { en: 'A3 · Compensating wage differential (CWD)', id: 'A3 · Kesenjangan upah kompensatif (CWD)' },
            html: {
              en: `<div class="formula"><strong>Indifference.</strong> $U(w_0, x_0) = U(w_0 + \\text{CWD}, x_1) \\Rightarrow \\text{CWD} = w_1 - w_0$</div>
<div class="formula"><strong>Hedonic locus.</strong> $w = h(x), \\; h'(x) > 0$. FOC: $h'(x^{*}) = \\text{MRS}^i_{xw}$.</div>
<div class="formula"><strong>Total comp.</strong> $\\text{TC} = w + \\text{PV(benefits)} - \\text{MWTP}(x)$</div>
<p><strong>Tutorial 1.</strong> $U=\\sqrt{w}-2x$, clean (16,0) gives $U=4$; dirty $\\sqrt{w_1}-2=4 \\Rightarrow w_1=36$, CWD = <span class="key">20</span>.</p>
<p><strong>Sorting.</strong> Risk-averse → low $x$ tangency; risk-tolerant → high $x$. Gap = equilibrium CWD.</p>
<p><strong>Gig drivers.</strong> Wage ≈ UMR but no pension/health/leave + high accident risk ⇒ true TC < formal benchmark. Explanations: monopsony, no formal outside option, under-perception of risk, selection on low risk-aversion.</p>`,
              id: `<div class="formula"><strong>Indiferen.</strong> $U(w_0, x_0) = U(w_1, x_1) \\Rightarrow \\text{CWD} = w_1 - w_0$</div>
<div class="formula"><strong>Lokus hedonik.</strong> $w = h(x), \\; h'(x) > 0$. FOC: $h'(x^{*}) = \\text{MRS}^i_{xw}$.</div>
<div class="formula"><strong>TC total.</strong> $\\text{TC} = w + \\text{PV(tunjangan)} - \\text{MWTP}(x)$</div>
<p><strong>Tut. 1.</strong> $U=\\sqrt{w}-2x$: bersih (16,0)⇒$U=4$; kotor ⇒$w_1=36$, CWD = <span class="key">20</span>.</p>
<p><strong>Pengemudi gig.</strong> Upah ≈ UMR tapi tanpa pensiun/kesehatan/cuti + risiko tinggi ⇒ TC sejati < formal. Penjelasan: monopsoni, tanpa opsi formal, salah-persepsi risiko, seleksi.</p>`
            },
            chart: MINI_HEDONIC
          },
          {
            title: { en: 'A4 · Decision rules for the exam', id: 'A4 · Aturan keputusan untuk ujian' },
            html: {
              en: `<p><strong>Topic 1 essay scaffold:</strong></p>
<ol>
<li><em>Thesis:</em> schooling is an investment; positive return justifies enrolment, but credit/opportunity-cost constraints distort the private decision in Indonesia.</li>
<li><em>Benchmark:</em> PV framework — ENPV(uni) vs ENPV(HS); equivalently MRR(s*) = $r$.</li>
<li><em>Mincer:</em> $\\ln w = \\alpha + \\alpha_2 s$; $\\alpha_2 \\approx 0.08$ matches BPS fact.</li>
<li><em>Friction:</em> higher $r$ (poor) or higher opportunity cost (gig) shifts MCC up ⇒ $s^{*}\\downarrow$. Draw the MRR–MCC graph with both shifts.</li>
<li><em>Signalling debate:</em> degrees may signal not produce; empirics suggest both.</li>
<li><em>Policy:</em> KIP-Kuliah subsidies, student-loan schemes (lower effective $r$); income-contingent repayment reduces individual risk.</li>
</ol>
<p><strong>Topic 2 essay scaffold:</strong></p>
<ol>
<li><em>Thesis:</em> equal wages ≠ equal total compensation because gig jobs lack non-wage benefits and add risk.</li>
<li><em>Theory:</em> Smith's compensating differences; Rosen hedonic; CWD definition.</li>
<li><em>Predict:</em> gig wage should be above formal wage by PV(missing benefits) + risk premium.</li>
<li><em>Empirics:</em> gig wage ≈ minimum wage — gap unmet ⇒ TC below formal floor.</li>
<li><em>Why?</em> Monopsony power, no formal outside option, under-perception, sorting.</li>
<li><em>Reclassification:</em> benefits for stayers, exit for marginal, prices↑. Trade-off — favour where monopsony rent dominates.</li>
</ol>`,
              id: `<p><strong>Kerangka esai Topik 1:</strong></p>
<ol>
<li><em>Tesis:</em> sekolah investasi; return positif membenarkan, tapi kendala kredit/opportunity-cost mendistorsi keputusan privat di ID.</li>
<li><em>Patokan:</em> kerangka PV — ENPV(uni) vs ENPV(SMA); ekivalen MRR(s*) = $r$.</li>
<li><em>Mincer:</em> $\\ln w = \\alpha + \\alpha_2 s$; $\\alpha_2 \\approx 0{,}08$.</li>
<li><em>Friksi:</em> $r$↑ atau opportunity↑ menggeser MCC naik ⇒ $s^{*}\\downarrow$. Gambar grafik MRR–MCC dengan kedua pergeseran.</li>
<li><em>Debat sinyal:</em> gelar mungkin mensinyal bukan memproduksi; empiris keduanya.</li>
<li><em>Kebijakan:</em> KIP-Kuliah, pinjaman mahasiswa, pembayaran kontingen pendapatan.</li>
</ol>
<p><strong>Kerangka esai Topik 2:</strong></p>
<ol>
<li><em>Tesis:</em> upah sama ≠ kompensasi total sama.</li>
<li><em>Teori:</em> Smith; hedonik Rosen; definisi CWD.</li>
<li><em>Prediksi:</em> upah gig seharusnya di atas formal sebesar PV(tunjangan hilang) + premium risiko.</li>
<li><em>Empiris:</em> gig ≈ UMR — kesenjangan tidak terpenuhi.</li>
<li><em>Mengapa?</em> Monopsoni, tanpa opsi formal, salah-persepsi, penyortiran.</li>
<li><em>Reklasifikasi:</em> trade-off — utamakan jika sewa monopsoni dominan.</li>
</ol>`
            }
          }
        ]
      },

      /* ------------------------- SIDE B ------------------------- */
      {
        heading: { en: 'SIDE B · Topic 3 (Discrimination) + Topic 4 (Migration)', id: 'SISI B · Topik 3 (Diskriminasi) + Topik 4 (Migrasi)' },
        num: 'B',
        cards: [
          {
            title: { en: 'B1 · Becker taste-based discrimination', id: 'B1 · Diskriminasi berbasis selera Becker' },
            html: {
              en: `<div class="formula"><strong>Employer.</strong> $w_F^{\\text{eff}} = w_F(1+d), \\; d\\ge 0$. Hire only F if $w_F(1+d)<w_M$, only M otherwise.</div>
<div class="formula"><strong>Employee.</strong> $w_M^{\\text{eff}} = w_M(1-d)$ — produces segregation (no wage gap).</div>
<div class="formula"><strong>Customer.</strong> $p^{\\text{eff}} = p(1+d)$ — only customer case produces a wage gap without hiding F.</div>
<div class="formula"><strong>Nepotism.</strong> $w_g^{\\text{eff}} = w_g(1-n), \\; n\\ge 0$.</div>
<p><strong>Prediction.</strong> Competition erodes taste-based discrimination — non-discriminators have lower costs. If discrimination persists (Indonesia 30+ years), need another mechanism.</p>`,
              id: `<div class="formula"><strong>Pengusaha.</strong> $w_F^{\\text{eff}} = w_F(1+d)$. Rekrut F saja jika $w_F(1+d)<w_M$, M saja sebaliknya.</div>
<div class="formula"><strong>Rekan.</strong> $w_M^{\\text{eff}} = w_M(1-d)$ — segregasi tanpa kesenjangan upah.</div>
<div class="formula"><strong>Konsumen.</strong> $p^{\\text{eff}} = p(1+d)$ — satu-satunya kasus dengan kesenjangan upah tanpa menyembunyikan F.</div>
<div class="formula"><strong>Nepotisme.</strong> $w_g^{\\text{eff}} = w_g(1-n)$.</div>
<p><strong>Prediksi.</strong> Persaingan mengikis selera. Bila bertahan di ID, perlu mekanisme lain.</p>`
            },
            chart: MINI_DISCRIM
          },
          {
            title: { en: 'B2 · Statistical discrimination + Oaxaca', id: 'B2 · Diskriminasi statistik + Oaxaca' },
            html: {
              en: `<div class="formula"><strong>Statistical (Arrow/Phelps).</strong> $\\hat y_i = (1-\\alpha)\\bar y_g + \\alpha T_i$. Two routes to a gap: lower $\\bar y_g$ (parallel shift) or lower $\\alpha$ (flatter slope).</div>
<div class="formula"><strong>Self-reinforcing.</strong> Belief that F quits → less specific training → confirms belief.</div>
<div class="formula"><strong>Oaxaca.</strong> $\\Delta\\bar w = \\underbrace{(\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\bar s_F}_{\\text{discrimination}} + \\underbrace{\\beta_M (\\bar s_M - \\bar s_F)}_{\\text{skills}}$</div>
<p><strong>Indonesia (Cameron et al. 2015):</strong> formal 34.4% (62% unexplained); informal 50.2% (75% unexplained).</p>`,
              id: `<div class="formula"><strong>Statistik.</strong> $\\hat y_i = (1-\\alpha)\\bar y_g + \\alpha T_i$. Dua jalur kesenjangan.</div>
<div class="formula"><strong>Memperkuat diri.</strong> Keyakinan F keluar → kurang pelatihan khusus → mengonfirmasi keyakinan.</div>
<div class="formula"><strong>Oaxaca.</strong> $\\Delta\\bar w = \\underbrace{(\\alpha_M - \\alpha_F) + (\\beta_M - \\beta_F)\\bar s_F}_{\\text{diskriminasi}} + \\underbrace{\\beta_M (\\bar s_M - \\bar s_F)}_{\\text{skill}}$</div>
<p><strong>ID (Cameron dkk. 2015):</strong> formal 34,4% (62% tak terjelaskan); informal 50,2% (75% tak terjelaskan).</p>`
            }
          },
          {
            title: { en: 'B3 · Migration toolkit', id: 'B3 · Kit alat migrasi' },
            html: {
              en: `<div class="formula"><strong>Lewis (1954).</strong> Capitalist wage OW > subsistence OS. Hire to MRP = OW; surplus reinvested ⇒ MRP shifts right ⇒ absorb more at OW.</div>
<div class="formula"><strong>Sjaastad (1962).</strong> $\\;PV_{ij} = \\displaystyle\\sum_{t=1}^{T} \\dfrac{U_j^t - U_i^t - C_{ij}^t}{(1+r)^t} > 0$</div>
<div class="formula"><strong>Todaro / HT.</strong> $E[W_u] = W_u \\cdot E_u/L_u;\\;$ equilibrium $u^{*} = 1 - W_r/W_u$.</div>
<div class="formula"><strong>Mincer family.</strong> $G_f = G_1 + G_2 > 0$. Tied mover: $G_2<0$ but $G_1>|G_2|$.</div>
<div class="formula"><strong>Stark new-economics.</strong> Household sends one earner; family PV > 0 even if individual PV ≈ 0.</div>
<div class="formula"><strong>Gravity.</strong> $\\ln \\hat M_{ij} = a_0 + a_1\\ln P_i + a_2\\ln P_j - b\\ln d_{ij}$ (+ GDP, education, agri share, common border).</div>`,
              id: `<div class="formula"><strong>Lewis.</strong> Upah kapitalis OW > subsisten OS. Rekrut ke MRP = OW.</div>
<div class="formula"><strong>Sjaastad.</strong> $\\;PV_{ij} = \\displaystyle\\sum_{t=1}^{T} \\dfrac{U_j^t - U_i^t - C_{ij}^t}{(1+r)^t} > 0$</div>
<div class="formula"><strong>Todaro / HT.</strong> $E[W_u] = W_u \\cdot E_u/L_u;\\;$ keseimbangan $u^{*} = 1 - W_r/W_u$.</div>
<div class="formula"><strong>Keluarga Mincer.</strong> $G_f = G_1 + G_2 > 0$. Tied mover.</div>
<div class="formula"><strong>New-economics Stark.</strong> RT kirim satu pencari nafkah; PV keluarga > 0 walau individu ≈ 0.</div>
<div class="formula"><strong>Gravitasi.</strong> $\\ln \\hat M_{ij} = a_0 + a_1\\ln P_i + a_2\\ln P_j - b\\ln d_{ij}$</div>`
            },
            chart: MINI_LEWIS
          },
          {
            title: { en: 'B4 · Decision rules for the exam', id: 'B4 · Aturan keputusan untuk ujian' },
            html: {
              en: `<p><strong>Topic 3 essay scaffold:</strong></p>
<ol>
<li><em>Thesis:</em> Indonesian gender wage gap reflects both pre-market skill differences AND in-market discrimination — Oaxaca decomposition is the bridge.</li>
<li><em>Becker employer:</em> $w_F(1+d)$; predict segregation + wage gap; competition <em>should</em> erode but does not in Indonesia.</li>
<li><em>Statistical:</em> rational use of group averages; persists under competition; self-reinforcing investment trap.</li>
<li><em>Empirics:</em> Cameron et al. — 62%/75% unexplained ⇒ Becker alone cannot explain in competitive informal sector.</li>
<li><em>Policy:</em> anti-discrimination law (Becker), better individual signals (statistical), parental leave + childcare (break self-reinforcing trap).</li>
</ol>
<p><strong>Topic 4 essay scaffold:</strong></p>
<ol>
<li><em>Thesis:</em> rational PV calculation explains continued flow despite abuse — wage gap dominates psychic cost.</li>
<li><em>Lewis (macro):</em> persistent rural ID surplus vs HK/SG/MY wage = unbounded supply pressure.</li>
<li><em>Sjaastad (micro):</em> reframe abuse as $C_{ij}^t$; PV > 0 because $U_j - U_i$ over $T$ dominates.</li>
<li><em>Extensions:</em> Stark new-economics (household sends earner); information asymmetry (perceived $C$ < true $C$); networks lower $C$ for next cohort.</li>
<li><em>Heterogeneity:</em> age (PV horizon), gender (destination demand), education (set of destinations), marital status (Mincer ties vs Stark sender).</li>
<li><em>Policy:</em> reduce $C_{ij}$ — pre-departure training (BP2MI), bilateral worker-protection, IOM intervention — not flow restriction.</li>
</ol>`,
              id: `<p><strong>Kerangka esai Topik 3:</strong></p>
<ol>
<li><em>Tesis:</em> kesenjangan gender ID mencerminkan perbedaan skill pra-pasar DAN diskriminasi pasar — Oaxaca jembatannya.</li>
<li><em>Pengusaha Becker:</em> $w_F(1+d)$; prediksi segregasi + kesenjangan; persaingan <em>seharusnya</em> mengikis tapi tidak di ID.</li>
<li><em>Statistik:</em> pemakaian rasional rata-rata kelompok; bertahan; perangkap investasi yang memenuhi-diri.</li>
<li><em>Empiris:</em> Cameron dkk. — 62%/75% tak terjelaskan.</li>
<li><em>Kebijakan:</em> hukum anti-diskriminasi, sinyal individu, cuti orang tua + pengasuhan.</li>
</ol>
<p><strong>Kerangka esai Topik 4:</strong></p>
<ol>
<li><em>Tesis:</em> perhitungan PV rasional menjelaskan arus berlanjut walau ada abuse.</li>
<li><em>Lewis (makro):</em> surplus pedesaan ID vs upah HK/SG/MY.</li>
<li><em>Sjaastad (mikro):</em> bingkai abuse sebagai $C_{ij}^t$; PV > 0.</li>
<li><em>Ekstensi:</em> Stark (RT kirim); asimetri informasi; jaringan.</li>
<li><em>Heterogenitas:</em> usia, gender, pendidikan, status nikah.</li>
<li><em>Kebijakan:</em> turunkan $C_{ij}$, bukan batasi arus.</li>
</ol>`
            }
          },
          {
            title: { en: 'B5 · 90-second sanity check before you write', id: 'B5 · Periksa kewajaran 90 detik sebelum menulis' },
            html: {
              en: `<p>Whatever the question, every essay needs the same five moves (from "How to answer an analytical essay exam question"):</p>
<ol>
<li><strong>1 paragraph intro</strong> — direct answer + explicit thesis.</li>
<li><strong>1–2 paragraphs theoretical benchmark</strong> — name the model, write its formula, draw its diagram.</li>
<li><strong>1–2 paragraphs alternative / nuanced theory</strong> — friction, market power, competing model.</li>
<li><strong>1 paragraph empirics</strong> — cite the BPS / BP2MI / Cameron / Pardede number from the question.</li>
<li><strong>1 paragraph conclusion + policy implication.</strong></li>
</ol>
<p><strong>Time budget for 2.5h, 4 essays @ 25%:</strong> ≈37 min each. Plan: 5 min outline → 25 min write → 5 min diagrams → 2 min proof. Don't skip the diagrams: every UAS topic has a canonical graph that earns marks just for being drawn correctly.</p>
<p><strong>Universal language to use:</strong> "use your own words" (red bullet in the lecturer's guide). Don't paraphrase the question — restate the mechanism in your own terms, name the model, then apply.</p>`,
              id: `<p>Apa pun pertanyaannya, tiap esai butuh lima gerakan yang sama (dari "How to answer an analytical essay exam question"):</p>
<ol>
<li><strong>1 paragraf intro</strong> — jawaban langsung + tesis eksplisit.</li>
<li><strong>1–2 paragraf patokan teoritis</strong> — sebut model, tulis rumus, gambar diagram.</li>
<li><strong>1–2 paragraf teori alternatif / nuansa</strong> — friksi, kekuatan pasar, model bersaing.</li>
<li><strong>1 paragraf empirik</strong> — kutip angka BPS / BP2MI / Cameron / Pardede dari pertanyaan.</li>
<li><strong>1 paragraf kesimpulan + implikasi kebijakan.</strong></li>
</ol>
<p><strong>Anggaran waktu 2,5j, 4 esai @ 25%:</strong> ≈37 menit tiap esai. Rencana: 5 min outline → 25 min menulis → 5 min diagram → 2 min proof. Jangan lewati diagram.</p>
<p><strong>Bahasa universal:</strong> "use your own words" — jangan paraphrase pertanyaan; restate mekanisme dengan istilah Anda, sebut model, lalu terapkan.</p>`
            }
          }
        ]
      }
    ],

    /* No formulas/graphs/quiz tabs for cheatsheet — everything is in notes. */
    formulas: [],
    graphs: [],
    quiz: []
  };
})();
