/* ============================================================
   MAKRO · Week 9 — Monetary Policy & Financial Markets
   How the central bank moves the money supply (CB balance-sheet
   operations, the money multiplier), how monetary policy is
   transmitted through bond, stock and capital markets, the
   COVID BI–MoF burden-sharing episode (M0/M1/M2), credibility,
   time-inconsistency under uncertainty, inflation targeting and
   the (revised) Taylor rule, and macro-policy in crisis —
   financial frictions, UIP-in-crisis, the 1997-98 speculative
   attack and the short-term-debt / reserves trap.
   Built directly from Prof. Iwan Azis' Week-9 deck (Spring 2026).
   Bilingual EN/ID. Gold-standard format (matches esdmk/m9).
   ============================================================ */
(function () {
  'use strict';
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  /* ---------- palette ---------- */
  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';

  /* =====================================================================
     CHART SPECS (declarative EconChart)
     ===================================================================== */

  /* --- 1. Great Depression: deflation raised the REAL rate (Fisher) ----
     Nominal i falls slowly while inflation goes deeply negative, so the
     real rate r = i − π actually RISES — contractionary in a slump. */
  var DEFLATION_CHART = {
    title: { en: 'Great Depression: deflation pushed the REAL rate UP', id: 'Depresi Besar: deflasi mendorong suku bunga RIIL NAIK' },
    w: 470, h: 320,
    x: { min: 1929, max: 1933, label: 'Year' },
    y: { min: -12, max: 16, label: '% per year' },
    curves: [
      { id: 'i',   kind: 'line', p1: [1929, 5.3], p2: [1933, 2.6], color: BLUE,  label: 'nominal i (falls slowly)' },
      { id: 'pi',  kind: 'line', p1: [1929, -0.0], p2: [1933, -5.2], color: AMBER, label: 'inflation π (deflation)' },
      { id: 'r',   kind: 'line', p1: [1929, 5.3], p2: [1933, 7.8], color: RED,   label: 'real r = i − π (rises)' },
      { id: 'zero', kind: 'hline', y: 0, color: '#999' }
    ],
    notes: [
      { x: 1931, y: 14.0, text: '1932: π=−10.8 ⇒ r=14.8%', color: RED, anchor: 'middle', size: 10 },
      { x: 1931, y: -9.5, text: 'prices collapse', color: AMBER, anchor: 'middle', size: 10 }
    ]
  };

  /* --- 2. Money multiplier collapse 1929→1933 -------------------------
     M1 = mm × RM. Monetary base RM rose, but mm collapsed (currency &
     reserve ratios rose during bank runs), so M1 fell anyway. Bars. */
  var MULTIPLIER_CHART = {
    title: { en: 'Money multiplier collapse: RM rose but M1 fell (1929→1933)', id: 'Keruntuhan pengganda uang: RM naik tetapi M1 turun (1929→1933)' },
    kind: 'bars', w: 470, h: 300,
    yMax: 28,
    bars: [
      { label: '26.4', value: 26.4, color: TEAL,  caption: 'M1 1929' },
      { label: '19.4', value: 19.4, color: RED,   caption: 'M1 1933' },
      { label: '7.1',  value: 7.1,  color: GREEN, caption: 'RM 1929' },
      { label: '8.2',  value: 8.2,  color: VIOLET,caption: 'RM 1933' }
    ]
  };

  /* --- 3. Money multiplier (mm vs the two leakage ratios) -------------
     mm = 1 / [c + rr(1−c)] falls as c (currency ratio) or rr (reserve
     ratio) rise. Illustrative downward path. */
  var MM_PATH = {
    title: { en: 'Multiplier mm falls as currency-/reserve-ratios rise', id: 'Pengganda mm turun saat rasio kas / cadangan naik' },
    w: 420, h: 300,
    x: { min: 0, max: 10, label: 'leakage (c, rr) →' },
    y: { min: 0, max: 6, label: 'money multiplier mm' },
    curves: [
      { id: 'mm', kind: 'path', color: TEAL, smooth: true, label: 'mm = 1/[c+rr(1−c)]',
        pts: [[0.5, 5.4], [2, 4.1], [4, 2.9], [6, 2.0], [8, 1.4], [9.5, 1.05]] }
    ],
    notes: [ { x: 6.5, y: 4.4, text: 'bank runs ⇒ c↑, rr↑ ⇒ mm↓', color: '#777', anchor: 'middle', size: 10 } ]
  };

  /* --- 4. UIP in normal times vs in crisis ---------------------------
     Domestic return i is flat; foreign-return schedule slopes down in E.
     A crisis ADDS a risk premium, shifting the domestic-return line up,
     so the equilibrium E depreciates (Rp/$ up). */
  var UIP_CRISIS_CHART = {
    title: { en: 'UIP: a crisis adds a risk premium ⇒ depreciation', id: 'UIP: krisis menambah premi risiko ⇒ depresiasi' },
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Exchange rate E (Rp/$)' },
    y: { min: 0, max: 10, label: 'Return (% in Rp)' },
    curves: [
      { id: 'iN',  kind: 'hline', y: 4, color: TEAL, label: 'i = i*+(E^e−E)/E  (normal)', labelAt: 'start' },
      { id: 'iC',  kind: 'hline', y: 6, color: RED,  label: 'i = i*+(E^e−E)/E + Risk  (crisis)', labelAt: 'start' },
      { id: 'FR',  kind: 'line', p1: [1, 9], p2: [9, 1], color: LINE, label: 'foreign return schedule' }
    ],
    points: [
      { on: ['FR', 'iN'], dot: true, guideX: 'E*₀', label: 'normal' },
      { on: ['FR', 'iC'], dot: true, guideX: 'E*₁', label: 'crisis' }
    ],
    notes: [ { x: 7.0, y: 8.2, text: 'Risk↑ ⇒ Rupiah depreciates', color: RED, anchor: 'middle', size: 10 } ]
  };

  /* --- 5. Bonds AND stocks fell together (the "double whammy") -------
     Normally bond prices rise when stocks fall (safe-haven). In a crisis
     both fall together — default risk dominates the safe-haven motive. */
  var DOUBLE_WHAMMY_CHART = {
    title: { en: 'Crisis: bonds and stocks fall together (default-risk dominates)', id: 'Krisis: obligasi dan saham jatuh bersama (risiko gagal bayar dominan)' },
    w: 460, h: 300,
    x: { min: 0, max: 10, label: 'time →' },
    y: { min: 0, max: 10, label: 'price index' },
    curves: [
      { id: 'stock', kind: 'path', color: TEAL, smooth: true, label: 'stocks',
        pts: [[0, 8], [2, 8.4], [4, 7.2], [6, 4.6], [8, 3.0], [10, 2.4]] },
      { id: 'bond',  kind: 'path', color: RED, smooth: true, label: 'bonds',
        pts: [[0, 7.6], [2, 7.8], [4, 6.6], [6, 4.2], [8, 3.2], [10, 2.6]] }
    ],
    notes: [ { x: 7.5, y: 6.0, text: 'both ↓ together = future default risk ↑', color: '#777', anchor: 'middle', size: 10 } ]
  };

  /* --- 6. Macro fundamentals → vulnerability → crisis (causal chain) -
     A schematic "story": weak fundamentals + balance-sheet effect +
     liquidity trap raise vulnerability; a speculative attack tips it
     into crisis. Rendered as labelled path-arrows. */
  var CRISIS_CHAIN_CHART = {
    title: { en: 'When the macro-equilibrium "story" fails ⇒ crisis', id: 'Ketika "cerita" keseimbangan makro gagal ⇒ krisis' },
    w: 470, h: 300,
    x: { min: 0, max: 10, label: 'measured risk → hidden risk' },
    y: { min: 0, max: 10, label: 'vulnerability' },
    curves: [
      { id: 'V', kind: 'path', color: RED, smooth: true, label: 'vulnerability → CRISIS',
        pts: [[0.5, 1.5], [3, 2.2], [5, 3.5], [7, 6.0], [8.5, 8.3], [9.5, 9.2]] }
    ],
    notes: [
      { x: 2.2, y: 2.8, text: 'credit boom, RER↑, low reserves', color: '#777', anchor: 'middle', size: 9.5 },
      { x: 5.5, y: 5.0, text: 'balance-sheet effect', color: AMBER, anchor: 'middle', size: 9.5 },
      { x: 8.0, y: 9.4, text: 'speculative attack', color: RED, anchor: 'middle', size: 10 }
    ]
  };

  /* --- 7. Short-term debt vs foreign reserves (Asian crisis trap) ----
     The single best leading indicator: short-term external debt as a
     multiple of FX reserves. SD/Forex > 1 ⇒ reserves cannot cover a
     run ⇒ vulnerable. Indonesia 1996 ≈ 1.77. */
  var SD_FOREX_CHART = {
    title: { en: 'Short-term debt ÷ FX reserves (1996, > 1 = vulnerable)', id: 'Utang jangka pendek ÷ cadangan devisa (1996, > 1 = rentan)' },
    kind: 'bars', w: 470, h: 300,
    yMax: 2.2,
    bars: [
      { label: '1.77', value: 1.77, color: RED,   caption: 'Indonesia' },
      { label: '2.06', value: 2.06, color: RED,   caption: 'Korea' },
      { label: '0.61', value: 0.61, color: GREEN, caption: 'Malaysia' },
      { label: '0.85', value: 0.85, color: GREEN, caption: 'Philippines' },
      { label: '1.45', value: 1.45, color: AMBER, caption: 'Thailand' }
    ]
  };

  /* =====================================================================
     WEEK OBJECT
     ===================================================================== */
  window.MAKRO_WEEKS.w9 = {
    id: 'w9',
    label: { en: 'Week 9', id: 'Minggu 9' },
    title: { en: 'Monetary Policy & Financial Markets', id: 'Kebijakan Moneter & Pasar Keuangan' },
    subtitle: {
      en: 'How the central bank changes the money supply (balance-sheet operations, the money multiplier) and transmits policy through bond, stock and capital markets; the COVID BI–MoF burden-sharing episode; credibility, time-inconsistency under uncertainty, inflation targeting and the Taylor rule; and macro-policy in crisis — financial frictions, UIP-in-crisis and the 1997-98 speculative attack.',
      id: 'Bagaimana bank sentral mengubah jumlah uang beredar (operasi neraca, pengganda uang) dan mentransmisikan kebijakan lewat pasar obligasi, saham, dan modal; episode burden-sharing BI–Kemenkeu saat COVID; kredibilitas, inkonsistensi waktu dalam ketidakpastian, penargetan inflasi dan aturan Taylor; serta kebijakan makro dalam krisis — friksi keuangan, UIP saat krisis, dan serangan spekulatif 1997-98.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      /* ---------------- Section 1: money supply & the real rate ------- */
      {
        heading: { en: 'Money, interest rates & the Fisher trap', id: 'Uang, suku bunga & jebakan Fisher' },
        num: '1',
        cards: [
          {
            title: { en: 'Nominal vs real rate — why deflation deepened the Depression', id: 'Nominal vs riil — mengapa deflasi memperdalam Depresi' },
            html: {
              en: `<p>Monetary policy works on the <span class="key">real</span> interest rate, not the nominal one. The Fisher identity is</p>
<div class="formula">$$r = i - \\pi^{e},$$</div>
<p>where $i$ is the nominal (policy) rate and $\\pi^{e}$ expected inflation. The Great Depression is the textbook warning. The US stock market crashed on <span class="key">28 Oct 1929</span>, <em>after</em> the recession had already begun — so the crash was a <em>symptom</em> (a speculative bubble bursting and a change in investors' expectations), not the root cause.</p>
<p>The deadly part came next. Nominal rates $i$ fell only slowly, but prices collapsed: inflation ran at $-2.5\\%$ (1930), $-9.2\\%$ (1931), $-10.8\\%$ (1932). With $\\pi<0$, the <span class="key">real rate rose</span>: the one-year real rate was $6.9\\%$ (1930), $12.3\\%$ (1931), <span class="key">$14.8\\%$ (1932)</span>, still $7.8\\%$ in 1933. A 14.8% real rate in the depth of a slump strangled borrowing and investment.</p>
<div class="note">Exam cue: a falling <em>nominal</em> rate can hide a <em>rising real</em> rate when there is deflation. This is the mechanism behind a <span class="key">liquidity trap</span> — once $i$ hits zero it cannot fall further, but if $\\pi$ keeps falling, $r$ keeps rising. Policy looks "loose" yet is actually tight.</div>`,
              id: `<p>Kebijakan moneter bekerja pada suku bunga <span class="key">riil</span>, bukan nominal. Identitas Fisher:</p>
<div class="formula">$$r = i - \\pi^{e},$$</div>
<p>dengan $i$ suku bunga nominal (kebijakan) dan $\\pi^{e}$ inflasi ekspektasi. Depresi Besar adalah peringatan klasiknya. Bursa AS jatuh pada <span class="key">28 Okt 1929</span>, <em>setelah</em> resesi mulai — jadi keruntuhan itu <em>gejala</em> (gelembung spekulatif pecah dan ekspektasi investor berubah), bukan akar penyebab.</p>
<p>Bagian mematikannya datang kemudian. Suku bunga nominal $i$ turun lambat, tetapi harga ambruk: inflasi $-2{,}5\\%$ (1930), $-9{,}2\\%$ (1931), $-10{,}8\\%$ (1932). Dengan $\\pi<0$, <span class="key">suku bunga riil naik</span>: riil satu tahun $6{,}9\\%$ (1930), $12{,}3\\%$ (1931), <span class="key">$14{,}8\\%$ (1932)</span>, dan masih $7{,}8\\%$ pada 1933. Suku bunga riil 14,8% di tengah resesi mencekik pinjaman dan investasi.</p>
<div class="note">Petunjuk ujian: suku bunga <em>nominal</em> yang turun bisa menyembunyikan suku bunga <em>riil</em> yang naik saat deflasi. Inilah mekanisme di balik <span class="key">jebakan likuiditas</span> — begitu $i$ menyentuh nol ia tak bisa turun lagi, tetapi bila $\\pi$ terus turun, $r$ terus naik. Kebijakan tampak "longgar" padahal sebenarnya ketat.</div>`
            },
            chart: DEFLATION_CHART
          },
          {
            title: { en: 'The money multiplier and how policy mistakes compound a crash', id: 'Pengganda uang dan bagaimana kesalahan kebijakan memperparah keruntuhan' },
            html: {
              en: `<p>The money stock is a multiple of the monetary base the central bank controls:</p>
<div class="formula">$$M_1 = mm \\times RM, \\qquad mm = \\dfrac{1}{\\,c + rr\\,(1-c)\\,},$$</div>
<p>where $RM$ is <span class="key">reserve money / the monetary base</span> (currency + bank reserves the CB issues), $c$ the public's <span class="key">currency-to-deposit ratio</span> and $rr$ the banks' <span class="key">reserve ratio</span>. The multiplier $mm$ <em>falls</em> when either $c$ or $rr$ rises.</p>
<p>In 1929–1933 the Fed actually <em>raised</em> the base ($RM$: $7.1 \\to 8.2$), but it was nowhere near enough: $M_1$ <span class="key">collapsed from 26.4 to 19.4</span> because the multiplier fell from $3.7$ to $2.4$. Why did $mm$ fall? <span class="key">Bank runs.</span> Depositors fled to cash ($c\\uparrow$) and surviving banks hoarded reserves ($rr\\uparrow$). Recession made borrowers <span class="key">insolvent</span>, banks failed, and each failure shrank the multiplier further.</p>
<div class="tip">Friedman &amp; Schwartz's verdict: the Fed caused the Depression's severity by <em>not raising $RM$ enough to offset the multiplier collapse</em>. Compare this with the modern IMF/central-bank playbook — in COVID-2020 central banks expanded the base aggressively precisely to keep $M_1$ from falling. This is the bridge to the next section.</div>`,
              id: `<p>Stok uang adalah kelipatan dari basis moneter yang dikendalikan bank sentral:</p>
<div class="formula">$$M_1 = mm \\times RM, \\qquad mm = \\dfrac{1}{\\,c + rr\\,(1-c)\\,},$$</div>
<p>dengan $RM$ <span class="key">uang primer / basis moneter</span> (uang kartal + cadangan bank yang diterbitkan BI), $c$ <span class="key">rasio kas terhadap deposito</span> masyarakat, dan $rr$ <span class="key">rasio cadangan</span> bank. Pengganda $mm$ <em>turun</em> saat $c$ atau $rr$ naik.</p>
<p>Pada 1929–1933 The Fed memang <em>menaikkan</em> basis ($RM$: $7{,}1 \\to 8{,}2$), tetapi jauh dari cukup: $M_1$ <span class="key">ambruk dari 26,4 ke 19,4</span> karena pengganda turun dari $3{,}7$ ke $2{,}4$. Mengapa $mm$ turun? <span class="key">Rush bank.</span> Penyimpan lari ke uang tunai ($c\\uparrow$) dan bank yang bertahan menimbun cadangan ($rr\\uparrow$). Resesi membuat peminjam <span class="key">insolven</span>, bank gagal, dan tiap kegagalan memperkecil pengganda.</p>
<div class="tip">Vonis Friedman &amp; Schwartz: The Fed memperparah Depresi karena <em>tidak menaikkan $RM$ cukup untuk mengimbangi keruntuhan pengganda</em>. Bandingkan dengan playbook IMF/bank sentral modern — saat COVID-2020 bank sentral memperbesar basis secara agresif justru agar $M_1$ tak jatuh. Inilah jembatan ke bagian berikutnya.</div>`
            },
            chart: MULTIPLIER_CHART
          },
          {
            title: { en: 'Reading the multiplier formula', id: 'Membaca rumus pengganda' },
            html: {
              en: `<p>The multiplier collapses fast as the two leakages rise. Set $c=0.2,\\,rr=0.1$: $mm = 1/[0.2+0.1(0.8)] = 1/0.28 \\approx 3.6$. Now a run lifts $c$ to $0.4$ and $rr$ to $0.25$: $mm = 1/[0.4+0.25(0.6)] = 1/0.55 \\approx 1.8$ — halved with no change in CB policy at all.</p>
<p>This is why a CB watching only the base can be fooled: the same $RM$ supports far less broad money once confidence cracks. The cure is to flood the base, lend freely against good collateral (lender of last resort), and stop the runs.</p>`,
              id: `<p>Pengganda runtuh cepat saat dua kebocoran naik. Misal $c=0{,}2,\\,rr=0{,}1$: $mm = 1/[0{,}2+0{,}1(0{,}8)] = 1/0{,}28 \\approx 3{,}6$. Lalu rush menaikkan $c$ ke $0{,}4$ dan $rr$ ke $0{,}25$: $mm = 1/[0{,}4+0{,}25(0{,}6)] = 1/0{,}55 \\approx 1{,}8$ — separuhnya tanpa perubahan kebijakan BI sama sekali.</p>
<p>Inilah mengapa BI yang hanya mengawasi basis bisa tertipu: $RM$ yang sama menopang uang luas jauh lebih sedikit begitu kepercayaan retak. Obatnya: membanjiri basis, memberi pinjaman bebas dengan agunan baik (lender of last resort), dan menghentikan rush.</p>`
            },
            chart: MM_PATH
          }
        ]
      },

      /* ---------------- Section 2: CB balance-sheet operations -------- */
      {
        heading: { en: 'How the central bank increases the money supply', id: 'Bagaimana bank sentral menambah jumlah uang beredar' },
        num: '2',
        cards: [
          {
            title: { en: 'Three balance-sheet operations (each +100)', id: 'Tiga operasi neraca (masing-masing +100)' },
            html: {
              en: `<p>Every increase in base money is an entry on the central bank's balance sheet. Start from this initial balance sheet (Rp, illustrative):</p>
<table>
<thead><tr><th>Assets</th><th></th><th>Liabilities &amp; Equity</th><th></th></tr></thead>
<tbody>
<tr><td>Government securities</td><td>500</td><td>Currency in circulation</td><td>300</td></tr>
<tr><td>Loans to banks</td><td>50</td><td>Bank reserves</td><td>400</td></tr>
<tr><td>Foreign reserves</td><td>200</td><td>Government deposits</td><td>50</td></tr>
<tr><td>Other assets</td><td>25</td><td>Capital / Equity</td><td>25</td></tr>
<tr><td><b>Total</b></td><td><b>775</b></td><td><b>Total</b></td><td><b>775</b></td></tr>
</tbody>
</table>
<p>There are three ways to inject $+100$ of base money. In <em>every</em> case the CB credits <span class="key">bank reserves</span> ($400 \\to 500$) — that is the new base money. Only the <em>asset</em> that rises differs:</p>
<ul>
<li><span class="key">Case 1 — Open-Market Purchase</span> of government securities ($500 \\to 600$). The classic OMO: the CB buys bonds and pays with newly created reserves.</li>
<li><span class="key">Case 2 — Lending to banks</span> ($50 \\to 150$). The CB lends through its facility (repo / discount window); banks' reserves rise.</li>
<li><span class="key">Case 3 — Foreign-exchange intervention</span> ($200 \\to 300$). The CB buys foreign currency (e.g. dollars) and pays in rupiah reserves — this is how reserve accumulation expands the base.</li>
</ul>
<p>All three end at a balance-sheet total of $875$. The crucial macro point: a <em>sterilised</em> FX intervention later <em>reverses</em> the reserve injection by selling securities back, so the base is unchanged — exactly the COVID mechanism below.</p>`,
              id: `<p>Setiap penambahan uang primer adalah entri di neraca bank sentral. Mulai dari neraca awal ini (Rp, ilustratif):</p>
<table>
<thead><tr><th>Aset</th><th></th><th>Kewajiban &amp; Ekuitas</th><th></th></tr></thead>
<tbody>
<tr><td>Surat berharga pemerintah</td><td>500</td><td>Uang kartal beredar</td><td>300</td></tr>
<tr><td>Pinjaman ke bank</td><td>50</td><td>Cadangan bank</td><td>400</td></tr>
<tr><td>Cadangan devisa</td><td>200</td><td>Simpanan pemerintah</td><td>50</td></tr>
<tr><td>Aset lain</td><td>25</td><td>Modal / Ekuitas</td><td>25</td></tr>
<tr><td><b>Total</b></td><td><b>775</b></td><td><b>Total</b></td><td><b>775</b></td></tr>
</tbody>
</table>
<p>Ada tiga cara menyuntik $+100$ uang primer. Dalam <em>setiap</em> kasus BI mengkredit <span class="key">cadangan bank</span> ($400 \\to 500$) — itulah uang primer baru. Hanya <em>aset</em> yang naik yang berbeda:</p>
<ul>
<li><span class="key">Kasus 1 — Pembelian Pasar Terbuka</span> surat berharga pemerintah ($500 \\to 600$). OMO klasik: BI membeli obligasi dan membayar dengan cadangan yang baru diciptakan.</li>
<li><span class="key">Kasus 2 — Pinjaman ke bank</span> ($50 \\to 150$). BI memberi pinjaman lewat fasilitasnya (repo / discount window); cadangan bank naik.</li>
<li><span class="key">Kasus 3 — Intervensi valuta asing</span> ($200 \\to 300$). BI membeli valas (mis. dolar) dan membayar dengan cadangan rupiah — beginilah akumulasi cadangan memperbesar basis.</li>
</ul>
<p>Ketiganya berakhir pada total neraca $875$. Poin makro penting: intervensi valas yang <em>disterilkan</em> kemudian <em>membalik</em> suntikan cadangan dengan menjual surat berharga kembali, sehingga basis tak berubah — persis mekanisme COVID di bawah.</p>`
            }
          }
        ]
      },

      /* ---------------- Section 3: BI policy & Indonesia markets ------ */
      {
        heading: { en: "Bank Indonesia's framework & Indonesia's financial markets", id: 'Kerangka Bank Indonesia & pasar keuangan Indonesia' },
        num: '3',
        cards: [
          {
            title: { en: 'BI\'s "smart intervention" stabilisation approach', id: 'Pendekatan stabilisasi "smart intervention" BI' },
            html: {
              en: `<p>BI's published approach to stabilising the macroeconomy has three pillars, all working together:</p>
<ul>
<li><span class="key">1. Stabilise the exchange rate via "smart intervention".</span> Intervene in the <em>spot</em>, <em>DNDF</em> (domestic non-deliverable forward) and <em>SBN secondary</em> markets; coordinate with and communicate to market players and stakeholders; and monitor offshore IDR movement around the clock.</li>
<li><span class="key">2. Strengthen the attractiveness of domestic assets.</span> Keep <span class="key">SRBI</span> (BI Rupiah Securities) and <span class="key">SBN</span> (government securities) attractive enough to <em>pull foreign capital inflows back in</em>.</li>
<li><span class="key">3. Strengthen monetary-operations strategy.</span> An <em>expansionary</em> leg (open-market expansion via repo and FX-swap instruments; liquidity expansion to support growth) <em>plus</em> SBN purchases in the secondary market.</li>
</ul>
<div class="note">Notice the tension built into the design: leg 1 (defend the rupiah) is contractionary for liquidity, while leg 3 (support growth) is expansionary. "Smart intervention" is the attempt to do both at once by separating the <em>FX</em> objective from the <em>liquidity</em> objective — the same logic as sterilised intervention.</div>`,
              id: `<p>Pendekatan BI yang dipublikasikan untuk menstabilkan makroekonomi punya tiga pilar yang bekerja bersama:</p>
<ul>
<li><span class="key">1. Stabilkan nilai tukar lewat "smart intervention".</span> Intervensi di pasar <em>spot</em>, <em>DNDF</em>, dan <em>SBN sekunder</em>; koordinasi dan komunikasi dengan pelaku pasar serta stakeholders; dan monitoring pergerakan IDR <em>offshore</em> sepanjang waktu.</li>
<li><span class="key">2. Perkuat daya tarik aset domestik.</span> Jaga <span class="key">SRBI</span> (Sekuritas Rupiah BI) dan <span class="key">SBN</span> (surat berharga negara) cukup menarik untuk <em>menarik kembali aliran modal asing</em>.</li>
<li><span class="key">3. Perkuat strategi operasi moneter.</span> Kaki <em>ekspansif</em> (operasi pasar terbuka via instrumen repo dan FX-swap; ekspansi likuiditas untuk menopang pertumbuhan) <em>plus</em> pembelian SBN di pasar sekunder.</li>
</ul>
<div class="note">Perhatikan ketegangan dalam desain ini: kaki 1 (mempertahankan rupiah) bersifat kontraktif bagi likuiditas, sedangkan kaki 3 (menopang pertumbuhan) ekspansif. "Smart intervention" adalah upaya melakukan keduanya sekaligus dengan memisahkan tujuan <em>valas</em> dari tujuan <em>likuiditas</em> — logika yang sama dengan intervensi tersterilisasi.</div>`
            }
          },
          {
            title: { en: 'BI policy stance, March 2026', id: 'Sikap kebijakan BI, Maret 2026' },
            html: {
              en: `<p>The current loosening cycle, from the Mar 2026 policy meeting:</p>
<ul>
<li><span class="key">Policy (BI) rate</span> held steady at <span class="key">4.75%</span> to bolster rupiah stability while keeping inflation inside the <span class="key">2026–2027 target of 2.5% ± 1%</span>.</li>
<li><span class="key">Inflation</span> rose to 4.76% in Feb 2026 (highest since Mar 2023) — up from 3.55% in Jan.</li>
<li><span class="key">GDP growth</span> forecast 4.9–5.7% for 2026; actual 5.39% YoY in Q4 2025, accelerating from 5.04% the previous quarter — strongest since Q3 2022.</li>
<li><span class="key">Standing facilities</span>: overnight deposit facility 3.75%; lending facility 5.50%. (The interbank rate 5.46%; cash reserve ratio 9.00%.)</li>
</ul>
<div class="tip">Read this as the "loosening monetary policy trend" the lecturer flags: the corridor (deposit 3.75% — policy 4.75% — lending 5.50%) is the operational frame. With inflation drifting <em>up</em> toward the top of the band, the rate is being held rather than cut — credibility is doing the work the rate cut would otherwise undermine.</div>`,
              id: `<p>Siklus pelonggaran saat ini, dari rapat kebijakan Mar 2026:</p>
<ul>
<li><span class="key">Suku bunga (BI) acuan</span> dipertahankan di <span class="key">4,75%</span> untuk memperkuat stabilitas rupiah sambil menjaga inflasi dalam <span class="key">target 2026–2027 sebesar 2,5% ± 1%</span>.</li>
<li><span class="key">Inflasi</span> naik ke 4,76% pada Feb 2026 (tertinggi sejak Mar 2023) — dari 3,55% pada Jan.</li>
<li><span class="key">Pertumbuhan PDB</span> diproyeksi 4,9–5,7% untuk 2026; aktual 5,39% YoY pada Q4 2025, naik dari 5,04% kuartal sebelumnya — tertinggi sejak Q3 2022.</li>
<li><span class="key">Fasilitas standing</span>: deposit facility overnight 3,75%; lending facility 5,50%. (Suku bunga antarbank 5,46%; rasio cadangan kas 9,00%.)</li>
</ul>
<div class="tip">Baca ini sebagai "tren pelonggaran kebijakan moneter" yang ditandai dosen: koridor (deposit 3,75% — acuan 4,75% — lending 5,50%) adalah kerangka operasional. Dengan inflasi merangkak <em>naik</em> ke batas atas pita, suku bunga ditahan bukan dipangkas — kredibilitas menjalankan tugas yang akan dirusak oleh pemangkasan.</div>`
            }
          },
          {
            title: { en: "Indonesia's bond market: who holds the debt now", id: 'Pasar obligasi Indonesia: siapa pemegang utang sekarang' },
            html: {
              en: `<p>The <span class="key">market structure has changed</span>: domestic institutions are now the primary anchors, and <em>foreign ownership has fallen to about 13%</em> (from far higher pre-2013). That reduces vulnerability to sudden capital flight but concentrates risk at home.</p>
<ul>
<li><span class="key">Yields</span> are under upward pressure — a weakening rupiah and rising global risk premia push them up (≈6.6% on the 10-year government bond).</li>
<li><span class="key">Moody's downgraded the sovereign credit-rating outlook</span> from stable to negative, citing fiscal-policy concerns (the deficit can run above 3%).</li>
<li><span class="key">Private issuance</span>: Rp 154–200 trillion, driven primarily by refinancing needs for maturing debt.</li>
<li><span class="key">Green &amp; sustainable bonds</span> reached a stock of <span class="key">$17.5 billion</span>.</li>
</ul>
<div class="note">Bond yields are the transmission belt of monetary policy: when BI signals tightening, short rates rise and the whole yield curve repositions; when global risk premia rise, long yields rise even if BI holds — which is exactly why "hold at 4.75%" still left 10-year yields elevated.</div>`,
              id: `<p><span class="key">Struktur pasar telah berubah</span>: institusi domestik kini jadi jangkar utama, dan <em>kepemilikan asing turun ke sekitar 13%</em> (dari jauh lebih tinggi sebelum 2013). Itu mengurangi kerentanan terhadap pelarian modal mendadak tetapi memusatkan risiko di dalam negeri.</p>
<ul>
<li><span class="key">Imbal hasil</span> menghadapi tekanan naik — rupiah melemah dan premi risiko global naik mendorongnya (≈6,6% pada obligasi pemerintah 10 tahun).</li>
<li><span class="key">Moody's menurunkan outlook peringkat kredit</span> dari stabil ke negatif, dengan alasan kekhawatiran kebijakan fiskal (defisit bisa di atas 3%).</li>
<li><span class="key">Penerbitan swasta</span>: Rp 154–200 triliun, terutama didorong kebutuhan refinancing utang jatuh tempo.</li>
<li><span class="key">Obligasi hijau &amp; berkelanjutan</span> mencapai stok <span class="key">$17,5 miliar</span>.</li>
</ul>
<div class="note">Imbal hasil obligasi adalah sabuk transmisi kebijakan moneter: ketika BI memberi sinyal pengetatan, suku bunga pendek naik dan seluruh kurva imbal hasil bergeser; ketika premi risiko global naik, imbal hasil panjang naik meski BI menahan — itulah mengapa "menahan di 4,75%" tetap menyisakan imbal hasil 10-tahun yang tinggi.</div>`
            }
          },
          {
            title: { en: "Indonesia's stock market: concentrated and thinly floated", id: 'Pasar saham Indonesia: terkonsentrasi dan free-float tipis' },
            html: {
              en: `<p>The Jakarta market is <span class="key">highly concentrated and thinly floated</span>, which makes it volatile and prone to abrupt swings sensitive to global shocks (e.g. MSCI scrutiny):</p>
<ul>
<li>Market capitalisation ≈ <span class="key">72% of GDP</span> (2023).</li>
<li>The <span class="key">top-9 stocks</span> are ≈40–50% of total cap; the <span class="key">top-50</span> ≈71.86% — extreme concentration.</li>
<li><span class="key">Corporate ownership</span> is exceptionally high (≈91.83%): the float is in the hands of a few families/founders.</li>
<li>Up to <span class="key">92.5%</span> of a company's shares can be held by a handful of shareholders.</li>
<li><span class="key">Domestic institutional investors</span> (pension funds) are small (≈5.2% of GDP).</li>
<li>The <span class="key">low free-float</span> (10% or 83 firms) creates "thinly traded" markets where the majority of shares are not available for public exchange — limiting price discovery. "Mysterious" gains of &gt;1,000% ("deep fried" shares) appear.</li>
</ul>
<div class="tip">Why this matters for monetary policy: asset-price transmission (the wealth and Tobin's-q channels) is <em>weak and unreliable</em> when the float is tiny and prices are manipulable. The credit and exchange-rate channels carry more of BI's policy than the stock-market channel does.</div>`,
              id: `<p>Bursa Jakarta <span class="key">sangat terkonsentrasi dan free-float tipis</span>, sehingga volatil dan rentan ayunan mendadak yang sensitif terhadap guncangan global (mis. scrutiny MSCI):</p>
<ul>
<li>Kapitalisasi pasar ≈ <span class="key">72% PDB</span> (2023).</li>
<li><span class="key">9 saham teratas</span> ≈40–50% total kapitalisasi; <span class="key">50 teratas</span> ≈71,86% — konsentrasi ekstrem.</li>
<li><span class="key">Kepemilikan korporasi</span> luar biasa tinggi (≈91,83%): float berada di tangan sedikit keluarga/pendiri.</li>
<li>Hingga <span class="key">92,5%</span> saham sebuah perusahaan bisa dipegang segelintir pemegang saham.</li>
<li><span class="key">Investor institusi domestik</span> (dana pensiun) kecil (≈5,2% PDB).</li>
<li><span class="key">Free-float rendah</span> (10% atau 83 perusahaan) menciptakan pasar "tipis" di mana mayoritas saham tak tersedia untuk publik — membatasi price discovery. Muncul kenaikan "misterius" &gt;1.000% (saham "deep fried").</li>
</ul>
<div class="tip">Mengapa ini penting bagi kebijakan moneter: transmisi harga aset (kanal kekayaan dan Tobin's-q) <em>lemah dan tak andal</em> saat float kecil dan harga bisa dimanipulasi. Kanal kredit dan nilai tukar membawa lebih banyak kebijakan BI dibanding kanal pasar saham.</div>`
            }
          }
        ]
      },

      /* ---------------- Section 4: COVID burden sharing --------------- */
      {
        heading: { en: 'COVID: BI–MoF burden sharing & the M0/M1/M2 story', id: 'COVID: burden sharing BI–Kemenkeu & kisah M0/M1/M2' },
        num: '4',
        cards: [
          {
            title: { en: 'Sterilised intervention: why M2 rose but M0 did not', id: 'Intervensi tersterilisasi: mengapa M2 naik tetapi M0 tidak' },
            html: {
              en: `<p>During COVID, BI bought <span class="key">massive amounts of government bonds</span> in the primary market to fund the National Economic Recovery (PEN) programme — "burden sharing" with the Ministry of Finance (MoF).</p>
<ul>
<li><span class="key">Buying bonds injects "new" cash (M0).</span> Left alone this would be raw monetary financing.</li>
<li>To prevent inflationary pressure and currency pressure, BI conducted <span class="key">"monetary operations"</span> to pull the excess cash back out of the system, selling <span class="key">short-term instruments</span> (BI Certificates / SBI) to banks. This "mopped up" the new M0, moving the money from "reserves" (which count as M0) into CB securities (which do not).</li>
<li><span class="key">Deposits (M2) stay in the public's hands</span> via the government's social assistance.</li>
</ul>
<p><span class="key">Result of the "burden sharing" loop:</span> <span class="key">M0 remained flat</span> (BI essentially recycled the money as fast as it was creating it), and <span class="key">M2 (broad money) spiked</span>. Government spends the recycled financing on social assistance (BLT), subsidies and healthcare; citizens receive cash and deposit it into their commercial bank accounts → <span class="key">M2 increased but not M0</span>.</p>
<div class="note">This is the cleanest real example of a <em>sterilised</em> intervention you will see: the central bank creates base money and simultaneously sells securities to neutralise the base effect, so the policy stimulates the <em>economy</em> (through M2 in the public's hands) without inflating the <em>base</em> (M0).</div>`,
              id: `<p>Saat COVID, BI membeli <span class="key">obligasi pemerintah dalam jumlah besar</span> di pasar primer untuk membiayai program Pemulihan Ekonomi Nasional (PEN) — "burden sharing" dengan Kementerian Keuangan (Kemenkeu).</p>
<ul>
<li><span class="key">Membeli obligasi menyuntik kas "baru" (M0).</span> Bila dibiarkan ini pembiayaan moneter murni.</li>
<li>Untuk mencegah tekanan inflasi dan tekanan mata uang, BI melakukan <span class="key">"operasi moneter"</span> menarik kembali kelebihan kas, menjual <span class="key">instrumen jangka pendek</span> (Sertifikat BI / SBI) ke bank. Ini "menyedot" M0 baru, memindahkan uang dari "cadangan" (masuk M0) ke surat berharga BI (tidak masuk M0).</li>
<li><span class="key">Deposito (M2) tetap di tangan publik</span> lewat bantuan sosial pemerintah.</li>
</ul>
<p><span class="key">Hasil loop "burden sharing":</span> <span class="key">M0 tetap datar</span> (BI mendaur ulang uang secepat ia menciptakannya), dan <span class="key">M2 (uang luas) melonjak</span>. Pemerintah membelanjakan pembiayaan terdaur untuk bansos (BLT), subsidi, dan kesehatan; warga menerima tunai dan menyetornya ke rekening bank → <span class="key">M2 naik tetapi M0 tidak</span>.</p>
<div class="note">Inilah contoh nyata intervensi <em>tersterilisasi</em> paling bersih: bank sentral menciptakan uang primer dan sekaligus menjual surat berharga untuk menetralkan efek basis, sehingga kebijakan menstimulus <em>ekonomi</em> (lewat M2 di tangan publik) tanpa menggelembungkan <em>basis</em> (M0).</div>`
            }
          },
          {
            title: { en: 'Trend of M0, M1, M2 — and the 2026 divergence', id: 'Tren M0, M1, M2 — dan divergensi 2026' },
            html: {
              en: `<p>The aggregates layer up: <span class="key">M0</span> = base money (currency + reserves); <span class="key">M1</span> = M0 + narrow money (demand deposits); <span class="key">M2</span> = M1 + broad money (savings + time deposits). The COVID episode showed M2 surging while M0 stayed flat.</p>
<p>The lecturer flags a <span class="key">significant divergence between M0, M1 and M2</span> over Rp 200 trillion was transferred from the MoF to State-Owned Banks (SOBs):</p>
<ul>
<li><span class="key">M0 grew 18.3% YoY</span> by February — a sharp move of "idle" government cash from BI into demand deposits at SOBs (it does), needed to buy bonds.</li>
<li><span class="key">M2 grew only 8.7% YoY</span>, down from 10% in Jan. Despite massive liquidity injection, quasi-money (savings and time deposits) grew slowly as <span class="key">banks lowered interest rates</span> to discourage passive saving and encourage spending → M0 increased but not M2.</li>
<li><span class="key">Mixed results</span>: lending rates fell to 8.80% (from 9.2%); loan growth hit a near one-year high of 9.96%, driven largely by investment credit in productive sectors. Late Jan, MoF actually pulled back Rp 7.5 trillion because the credit "multiplier effect" was slower than expected, since weak corporate demand → M2 depends on the public's willingness to take out new loans.</li>
<li><span class="key">Bad news</span>: SME credit didn't increase → who got the credit, then?</li>
</ul>
<div class="tip">Exam framing: the M0/M1/M2 wedge <em>is</em> the transmission mechanism made visible. Base money (M0) is what BI controls directly; broad money (M2) is what the <em>public and banks</em> decide to create on top of it. Loosening only works if banks lend and the public borrows — otherwise you get "pushing on a string".</div>`,
              id: `<p>Agregat bertumpuk: <span class="key">M0</span> = uang primer (kartal + cadangan); <span class="key">M1</span> = M0 + uang sempit (giro); <span class="key">M2</span> = M1 + uang luas (tabungan + deposito). Episode COVID menunjukkan M2 melonjak sementara M0 datar.</p>
<p>Dosen menandai <span class="key">divergensi signifikan antara M0, M1, dan M2</span> — lebih dari Rp 200 triliun ditransfer dari Kemenkeu ke Bank BUMN (SOB):</p>
<ul>
<li><span class="key">M0 tumbuh 18,3% YoY</span> pada Februari — perpindahan tajam kas "menganggur" pemerintah dari BI ke giro di SOB, untuk membeli obligasi.</li>
<li><span class="key">M2 tumbuh hanya 8,7% YoY</span>, turun dari 10% pada Jan. Meski injeksi likuiditas besar, kuasi-uang (tabungan dan deposito) tumbuh lambat karena <span class="key">bank menurunkan suku bunga</span> untuk menghambat tabungan pasif dan mendorong belanja → M0 naik tetapi M2 tidak.</li>
<li><span class="key">Hasil campuran</span>: suku bunga kredit turun ke 8,80% (dari 9,2%); pertumbuhan kredit mencapai hampir tertinggi setahun 9,96%, banyak didorong kredit investasi di sektor produktif. Akhir Jan, Kemenkeu menarik kembali Rp 7,5 triliun karena "efek pengganda" kredit lebih lambat dari harapan, sebab permintaan korporasi lemah → M2 bergantung pada kesediaan publik mengambil pinjaman baru.</li>
<li><span class="key">Kabar buruk</span>: kredit UMKM tak naik → lalu siapa yang menerima kredit?</li>
</ul>
<div class="tip">Bingkai ujian: baji M0/M1/M2 <em>adalah</em> mekanisme transmisi yang terlihat. Uang primer (M0) yang langsung dikendalikan BI; uang luas (M2) yang diputuskan <em>publik dan bank</em> untuk diciptakan di atasnya. Pelonggaran hanya bekerja bila bank meminjamkan dan publik meminjam — kalau tidak, jadi "mendorong tali" (pushing on a string).</div>`
            }
          }
        ]
      },

      /* ---------------- Section 5: credibility, uncertainty, TI ------- */
      {
        heading: { en: 'Credibility, uncertainty & time-inconsistency', id: 'Kredibilitas, ketidakpastian & inkonsistensi waktu' },
        num: '5',
        cards: [
          {
            title: { en: 'Bonds and stocks moving the same direction', id: 'Obligasi dan saham bergerak searah' },
            html: {
              en: `<p>Normally <span class="key">bond prices and equity prices move in opposite directions</span>: when stocks plunge, money flees to the safety of bonds, pushing bond prices up (yields down). But in stress episodes both have <span class="key">plunged in the same direction</span> — a "double whammy" — signalling an unusual change in the <span class="key">putative future default risk</span>. This happened around the 2008, 2001, 1997, 1987 crashes and most recently in the COVID-19 panic.</p>
<p>When fund flows are being forced to <span class="key">unwind trades</span>, what makes this worse is the rising default risk. Three explanations the lecturer offers:</p>
<ol>
<li>The obvious one: macroeconomic — investors are worried about <span class="key">rising inflation</span>, because of tariffs.</li>
<li>Another is that some investment funds are probably shutting down their <span class="key">liquid assets</span> to meet <span class="key">margin calls</span>.</li>
<li>A third explanation is that volatility is so high that so-called <span class="key">"basis trades"</span> — highly leveraged (sometimes up to 100×) bets aiming to profit from the convergence between the futures price and the bond price — are being forced to unwind.</li>
</ol>
<div class="note">For policy: if bonds and stocks fall together, the central bank cannot rely on the usual safe-haven dynamic. It may have to intervene directly to restore liquidity (as the Fed did in March 2020) because markets have stopped doing price discovery.</div>`,
              id: `<p>Biasanya <span class="key">harga obligasi dan harga saham bergerak berlawanan arah</span>: ketika saham jatuh, dana lari ke keamanan obligasi, mendorong harga obligasi naik (imbal hasil turun). Namun dalam episode tekanan keduanya <span class="key">jatuh searah</span> — "double whammy" — menandakan perubahan tak biasa pada <span class="key">risiko gagal bayar masa depan</span>. Ini terjadi sekitar krisis 2008, 2001, 1997, 1987 dan terbaru dalam panik COVID-19.</p>
<p>Ketika aliran dana dipaksa <span class="key">membongkar posisi</span> (unwind), yang memperburuk adalah naiknya risiko gagal bayar. Tiga penjelasan dosen:</p>
<ol>
<li>Yang jelas: makroekonomi — investor cemas <span class="key">inflasi naik</span>, akibat tarif.</li>
<li>Lainnya, sebagian dana investasi kemungkinan melepas <span class="key">aset likuid</span> untuk memenuhi <span class="key">margin call</span>.</li>
<li>Ketiga, volatilitas begitu tinggi sehingga <span class="key">"basis trade"</span> — taruhan ber-leverage tinggi (kadang hingga 100×) untuk meraup laba dari konvergensi harga futures dan harga obligasi — dipaksa dibongkar.</li>
</ol>
<div class="note">Untuk kebijakan: bila obligasi dan saham jatuh bersama, bank sentral tak bisa mengandalkan dinamika safe-haven biasa. Ia mungkin harus intervensi langsung untuk memulihkan likuiditas (seperti The Fed Maret 2020) karena pasar berhenti melakukan price discovery.</div>`
            },
            chart: DOUBLE_WHAMMY_CHART
          },
          {
            title: { en: 'Time inconsistency (TI) under uncertainty', id: 'Inkonsistensi waktu (TI) dalam ketidakpastian' },
            html: {
              en: `<p><span class="key">TI once again.</span> Recall that <span class="key">time inconsistency</span> happens when policymakers think the trade-off between macro objectives can be <span class="key">compromised</span> — e.g., reduce $u$ by 2% in exchange for inflation rate 1% despite a 0% target. Seeing policymakers <em>allowed for higher inflation</em>, wage-setters smarten up and begin to expect positive inflation of 1% → resulting in a worse condition than originally expected. This is the classic Kydland–Prescott / Barro–Gordon <span class="key">inflation bias</span>.</p>
<p><span class="key">TI &amp; sub-optimal policy.</span> TI also happens when a policy becomes sub-optimal or ineffective <span class="key">when faced with unforeseen changes in the economic environment (uncertainty)</span>. Essentially, the "best" policy decision based on current information and expectations might <em>not be the best</em> when faced with the future. The future economic environment can be unpredictable (uncertain), and initial decisions / policy may need to be adjusted to accommodate these changes.</p>
<p><span class="key">TI in uncertain conditions</span> refers to a situation where economic decision-makers' preferences transform a long time in a way that what they preferred at a certain time point is <span class="key">not consistent</span> with their preferences at other time points.</p>
<div class="tip">Two flavours to separate in the exam: (1) <em>deliberate</em> TI — the temptation to exploit the Phillips-curve trade-off, cured by <span class="key">commitment / rules / an independent inflation-targeting central bank</span>; (2) <em>forced</em> TI — the optimal plan stops being optimal because the world changed (a shock), which argues for <span class="key">flexibility / discretion</span>. Good policy design balances commitment against the need to respond to genuine surprises.</div>`,
              id: `<p><span class="key">TI sekali lagi.</span> Ingat <span class="key">inkonsistensi waktu</span> terjadi ketika pembuat kebijakan mengira trade-off antartujuan makro bisa <span class="key">dikompromikan</span> — mis. menurunkan $u$ 2% sebagai ganti inflasi 1% meski target 0%. Melihat pembuat kebijakan <em>membolehkan inflasi lebih tinggi</em>, penetap upah jadi pintar dan mulai mengharap inflasi positif 1% → menghasilkan kondisi lebih buruk dari yang awalnya diharapkan. Inilah <span class="key">bias inflasi</span> klasik Kydland–Prescott / Barro–Gordon.</p>
<p><span class="key">TI &amp; kebijakan sub-optimal.</span> TI juga terjadi ketika kebijakan menjadi sub-optimal atau tidak efektif <span class="key">saat menghadapi perubahan tak terduga di lingkungan ekonomi (ketidakpastian)</span>. Pada dasarnya, keputusan kebijakan "terbaik" berdasar informasi dan ekspektasi saat ini bisa <em>bukan yang terbaik</em> ketika menghadapi masa depan. Lingkungan ekonomi masa depan bisa tak terduga (tak pasti), dan keputusan/kebijakan awal mungkin perlu disesuaikan.</p>
<p><span class="key">TI dalam kondisi tak pasti</span> merujuk pada situasi di mana preferensi pengambil keputusan ekonomi berubah seiring waktu sehingga apa yang dipilih pada satu titik waktu <span class="key">tidak konsisten</span> dengan preferensi pada titik waktu lain.</p>
<div class="tip">Dua jenis yang harus dipisahkan di ujian: (1) TI <em>disengaja</em> — godaan mengeksploitasi trade-off kurva Phillips, disembuhkan dengan <span class="key">komitmen / aturan / bank sentral penargetan inflasi yang independen</span>; (2) TI <em>terpaksa</em> — rencana optimal berhenti optimal karena dunia berubah (guncangan), yang menuntut <span class="key">fleksibilitas / diskresi</span>. Desain kebijakan baik menyeimbangkan komitmen dengan kebutuhan merespons kejutan sejati.</div>`
            }
          }
        ]
      },

      /* ---------------- Section 6: inflation targeting & Taylor ------- */
      {
        heading: { en: 'Inflation targeting, credibility & the Taylor rule', id: 'Penargetan inflasi, kredibilitas & aturan Taylor' },
        num: '6',
        cards: [
          {
            title: { en: 'The standard and revised Taylor rules', id: 'Aturan Taylor standar dan revisi' },
            html: {
              en: `<p>An inflation-targeting (IT) central bank's reaction function can be summarised by a <span class="key">Taylor rule</span>. The <span class="key">standard</span> form sets the policy rate from the inflation gap and the output (or unemployment) gap:</p>
<div class="formula">$$i_t = \\bar{i} + a\\,(\\pi_t - \\bar{\\pi}) - b\\,(u_t - u_n).$$</div>
<p>Here $\\bar{i}$ is the neutral rate, $\\bar{\\pi}$ the inflation target, $u_n$ the natural rate; $a>0$ means the CB raises the real rate when inflation exceeds target (the <span class="key">Taylor principle</span>), and $b>0$ leans against unemployment above its natural rate.</p>
<p>IMF WP/25/79 (Ghosh, Ostry &amp; Chamon 2016, and this paper) augments it for <span class="key">small open economies</span> by adding the <em>nominal exchange rate</em> and a <em>lagged interest rate</em> (policy persistence / interest-rate smoothing), giving a <span class="key">revised Taylor rule</span>:</p>
<div class="formula">$$i_{c,t} = a_c + \\rho\\, i_{c,t-1} + \\beta\\, inf.gap_{c,t} + \\gamma\\, Ygap_{c,t} + \\theta\\, \\Delta NEER_{c,t} + \\mu\\, \\Delta NEER_{c,t-1} + \\phi\\, i_{US,t-1} + \\varepsilon_{c,t}.$$</div>
<ul>
<li>$inf.gap$ — deviation of inflation from the HP-filter target;</li>
<li>$Ygap$ — deviation of output from potential;</li>
<li>$\\Delta NEER$ — change in the nominal effective exchange rate (the open-economy term);</li>
<li>$i_{US,t-1}$ — the lagged US rate (global financial spillovers);</li>
<li>$\\rho$ — interest-rate persistence (smoothing).</li>
</ul>`,
              id: `<p>Fungsi reaksi bank sentral penargetan inflasi (IT) bisa diringkas dengan <span class="key">aturan Taylor</span>. Bentuk <span class="key">standar</span> menetapkan suku bunga kebijakan dari gap inflasi dan gap output (atau pengangguran):</p>
<div class="formula">$$i_t = \\bar{i} + a\\,(\\pi_t - \\bar{\\pi}) - b\\,(u_t - u_n).$$</div>
<p>$\\bar{i}$ suku bunga netral, $\\bar{\\pi}$ target inflasi, $u_n$ tingkat alamiah; $a>0$ berarti BI menaikkan suku bunga riil saat inflasi melebihi target (<span class="key">prinsip Taylor</span>), dan $b>0$ melawan pengangguran di atas tingkat alamiahnya.</p>
<p>IMF WP/25/79 (Ghosh, Ostry &amp; Chamon 2016, dan paper ini) memperluasnya untuk <span class="key">ekonomi terbuka kecil</span> dengan menambah <em>nilai tukar nominal</em> dan <em>suku bunga tertinggal</em> (persistensi kebijakan / interest-rate smoothing), menghasilkan <span class="key">aturan Taylor revisi</span>:</p>
<div class="formula">$$i_{c,t} = a_c + \\rho\\, i_{c,t-1} + \\beta\\, inf.gap_{c,t} + \\gamma\\, Ygap_{c,t} + \\theta\\, \\Delta NEER_{c,t} + \\mu\\, \\Delta NEER_{c,t-1} + \\phi\\, i_{US,t-1} + \\varepsilon_{c,t}.$$</div>
<ul>
<li>$inf.gap$ — deviasi inflasi dari target filter HP;</li>
<li>$Ygap$ — deviasi output dari potensial;</li>
<li>$\\Delta NEER$ — perubahan nilai tukar efektif nominal (suku ekonomi-terbuka);</li>
<li>$i_{US,t-1}$ — suku bunga AS tertinggal (limpahan finansial global);</li>
<li>$\\rho$ — persistensi suku bunga (smoothing).</li>
</ul>`
            }
          },
          {
            title: { en: 'Results for 29 IT countries (incl. Indonesia): credibility matters', id: 'Hasil 29 negara IT (termasuk Indonesia): kredibilitas penting' },
            html: {
              en: `<p>The IMF study estimates the revised rule for <span class="key">29 IT central banks</span> (Indonesia included) and lets the coefficients on inflation and the output gap vary with country-specific variables $z$: <span class="key">financial development, trade openness, capital-account openness, central-bank independence,</span> and <span class="key">past inflation</span>. The key result is about <span class="key">credibility</span>:</p>
<ul>
<li>Central banks in countries with a history of <span class="key">high inflation adjust their policy rate in a more aggressive way</span> — a larger coefficient on the inflation gap. Such response potentially explains why the coefficient on expected inflation in the Taylor rule does not appear to fall over time, nor to be lower in central banks with greater inflation-expectations anchoring.</li>
<li>This is the <span class="key">"credibility puzzle"</span>: despite the persistent construction of credibility, central banks — especially those with a high-inflation past — continue to react as strongly as in the past to inflation-expectation shocks, probably due to fears of the <span class="key">return of unanchored inflation</span>.</li>
</ul>
<div class="tip">The narrative arc of the section: <em>time inconsistency</em> creates inflation bias → an <em>independent IT central bank with a Taylor rule</em> is the institutional cure → but <em>credibility is hard-won and never fully trusted</em>, so even credible banks keep reacting aggressively. Credibility is an asset that must be continuously re-earned.</div>`,
              id: `<p>Studi IMF mengestimasi aturan revisi untuk <span class="key">29 bank sentral IT</span> (termasuk Indonesia) dan membiarkan koefisien inflasi serta gap output bervariasi menurut variabel spesifik-negara $z$: <span class="key">pembangunan finansial, keterbukaan perdagangan, keterbukaan akun modal, independensi bank sentral,</span> dan <span class="key">inflasi masa lalu</span>. Hasil utamanya tentang <span class="key">kredibilitas</span>:</p>
<ul>
<li>Bank sentral di negara dengan riwayat <span class="key">inflasi tinggi menyesuaikan suku bunga secara lebih agresif</span> — koefisien gap inflasi lebih besar. Respons ini mungkin menjelaskan mengapa koefisien inflasi ekspektasi dalam aturan Taylor tampak tak turun seiring waktu, maupun tak lebih rendah di bank sentral dengan jangkar ekspektasi inflasi lebih kuat.</li>
<li>Inilah <span class="key">"teka-teki kredibilitas"</span>: meski kredibilitas dibangun terus-menerus, bank sentral — terutama yang berlatar inflasi tinggi — tetap bereaksi sekuat dulu terhadap guncangan ekspektasi inflasi, mungkin karena takut <span class="key">kembalinya inflasi tak terjangkar</span>.</li>
</ul>
<div class="tip">Alur narasi bagian ini: <em>inkonsistensi waktu</em> menciptakan bias inflasi → <em>bank sentral IT independen dengan aturan Taylor</em> adalah obat institusional → tetapi <em>kredibilitas sulit diraih dan tak pernah sepenuhnya dipercaya</em>, sehingga bank yang kredibel pun tetap bereaksi agresif. Kredibilitas adalah aset yang harus terus diraih ulang.</div>`
            }
          }
        ]
      },

      /* ---------------- Section 7: macro-policy in crisis ------------- */
      {
        heading: { en: 'Macro-policy in crisis: financial frictions & speculative attack', id: 'Kebijakan makro dalam krisis: friksi keuangan & serangan spekulatif' },
        num: '7',
        cards: [
          {
            title: { en: 'Why macro must talk to finance: financial frictions (FF)', id: 'Mengapa makro harus bicara dengan keuangan: friksi keuangan (FF)' },
            html: {
              en: `<p>Standard macro models and finance are linked by a <span class="key">two-way influence</span> that can cause a <span class="key">financial accelerator</span>:</p>
<ol>
<li>The flows of <span class="key">bank credit</span> are highly <span class="key">pro-cyclical</span> (e.g., credit grows in booms &amp; drops significantly during recessions) and similarly for <span class="key">debt growth</span>.</li>
<li>During a crisis, an alternative financing route (e.g., <span class="key">bonds</span>) may be affected, impacting the overall economy. The business cycle and the financial cycle reinforce each other.</li>
</ol>
<p><span class="key">Financial frictions (FF)</span> are financial constraints that prevent borrowers from funding their desirable investments from external resources (typically negatively related to internal resources / cash flow), <span class="key">irrespective of the interest rate</span> — disrupting the workhorse model.</p>
<ul>
<li>Applied to both assets and liabilities (the balance sheet) of all institutions.</li>
<li>Adding FF into standard models shows the importance of the financial sector for business-cycle fluctuations.</li>
</ul>
<div class="note">Key contrast with the textbook: in the frictionless model the interest rate alone clears credit markets. With FF, a borrower's <span class="key">net worth</span> (collateral) determines access to credit — so a fall in asset prices tightens credit <em>even if the policy rate is unchanged</em>, amplifying the downturn. This is the <span class="key">Bernanke–Gertler financial accelerator</span>.</div>`,
              id: `<p>Model makro standar dan keuangan terhubung lewat <span class="key">pengaruh dua arah</span> yang dapat memicu <span class="key">akselerator finansial</span>:</p>
<ol>
<li>Aliran <span class="key">kredit bank</span> sangat <span class="key">pro-siklis</span> (mis., kredit tumbuh saat boom &amp; turun tajam saat resesi) dan demikian pula <span class="key">pertumbuhan utang</span>.</li>
<li>Saat krisis, jalur pembiayaan alternatif (mis., <span class="key">obligasi</span>) bisa terdampak, memengaruhi ekonomi keseluruhan. Siklus bisnis dan siklus finansial saling memperkuat.</li>
</ol>
<p><span class="key">Friksi keuangan (FF)</span> adalah kendala finansial yang mencegah peminjam mendanai investasi yang diinginkan dari sumber eksternal (umumnya berhubungan negatif dengan sumber internal / arus kas), <span class="key">terlepas dari suku bunga</span> — mengganggu model baku.</p>
<ul>
<li>Berlaku pada aset maupun kewajiban (neraca) semua institusi.</li>
<li>Menambah FF ke model standar menunjukkan pentingnya sektor keuangan bagi fluktuasi siklus bisnis.</li>
</ul>
<div class="note">Kontras utama dengan buku teks: dalam model tanpa-friksi suku bunga sendiri mengkliring pasar kredit. Dengan FF, <span class="key">kekayaan bersih</span> (agunan) peminjam menentukan akses kredit — sehingga jatuhnya harga aset mengetatkan kredit <em>meski suku bunga kebijakan tetap</em>, memperbesar penurunan. Inilah <span class="key">akselerator finansial Bernanke–Gertler</span>.</div>`
            }
          },
          {
            title: { en: 'UIP in normal times vs UIP in crisis', id: 'UIP saat normal vs UIP saat krisis' },
            html: {
              en: `<p>Krugman (2008) warned that emerging-market crises look like a "U.S. financial crisis" only when the dollar can fall — for an emerging country the dynamic is reversed: a falling currency <em>tightens</em> conditions. The mechanism is the <span class="key">uncovered interest parity (UIP)</span> condition with a crisis risk premium.</p>
<div class="formula">UIP, normal case: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right)$</div>
<div class="formula">UIP, crisis: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right) + \\text{Risk}$</div>
<p>In normal times the domestic rate equals the foreign rate plus expected depreciation. In a crisis investors demand a <span class="key">risk premium</span>: to hold rupiah assets they require a higher return, so either the domestic rate $i$ must jump <em>or</em> the rupiah must depreciate today ($E$ up). Equivalently, the required loan return is $RLOAN = RFLOAN + (E^{e}/E - 1) + POLRISK$.</p>
<p>In 2024 the dollar staged a strong comeback in the autumn as US yields surged — the chart of the 10-year Treasury yield and the dollar index shows them rising together, tightening conditions for emerging markets exactly as UIP-in-crisis predicts.</p>
<div class="tip">This is the heart of the open-economy policy bind: to defend the currency you must raise $i$, but a higher $i$ deepens the recession and worsens balance sheets — and if the market still demands a risk premium, the defence fails. That is the bridge from monetary policy to the speculative-attack model.</div>`,
              id: `<p>Krugman (2008) memperingatkan bahwa krisis pasar berkembang tampak seperti "krisis finansial AS" hanya bila dolar bisa jatuh — untuk negara berkembang dinamikanya terbalik: mata uang yang jatuh justru <em>mengetatkan</em> kondisi. Mekanismenya adalah kondisi <span class="key">paritas suku bunga tak tertutup (UIP)</span> dengan premi risiko krisis.</p>
<div class="formula">UIP, normal: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right)$</div>
<div class="formula">UIP, krisis: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right) + \\text{Risk}$</div>
<p>Saat normal suku bunga domestik sama dengan suku bunga asing plus depresiasi ekspektasi. Saat krisis investor menuntut <span class="key">premi risiko</span>: untuk memegang aset rupiah mereka minta imbal hasil lebih tinggi, sehingga $i$ domestik harus melonjak <em>atau</em> rupiah harus terdepresiasi hari ini ($E$ naik). Setara dengan: imbal hasil pinjaman $RLOAN = RFLOAN + (E^{e}/E - 1) + POLRISK$.</p>
<p>Pada 2024 dolar menguat kuat di musim gugur saat imbal hasil AS melonjak — grafik imbal hasil Treasury 10-tahun dan indeks dolar menunjukkan keduanya naik bersama, mengetatkan kondisi pasar berkembang persis seperti prediksi UIP-saat-krisis.</p>
<div class="tip">Inilah inti dilema kebijakan ekonomi terbuka: untuk mempertahankan mata uang kau harus menaikkan $i$, tetapi $i$ lebih tinggi memperdalam resesi dan memperburuk neraca — dan bila pasar tetap menuntut premi risiko, pertahanan gagal. Itulah jembatan dari kebijakan moneter ke model serangan spekulatif.</div>`
            },
            chart: UIP_CRISIS_CHART
          },
          {
            title: { en: 'Macro fundamentals & the 1997-98 crisis', id: 'Fundamental makro & krisis 1997-98' },
            html: {
              en: `<p>Indonesia 1997: a violent twin movement — the <span class="key">exchange rate</span> collapsed (Rp/$ soared) while <span class="key">interest rates</span> spiked to defend it. The crisis links bad <span class="key">macro fundamentals</span> to vulnerability and, finally, to a speculative attack:</p>
<ol>
<li><span class="key">Credit boom</span> → leads to defaults, bankruptcies and possibly a banking crisis.</li>
<li><span class="key">RER appreciation</span> → a worsening external balance (widening current-account deficit): either the exchange rate needs to depreciate or foreign reserves are run down.</li>
<li><span class="key">Limited foreign reserves</span> → small reserves, or small reserves relative to short-term foreign debt → problems repaying foreign debt.</li>
</ol>
<p><span class="key">Crisis:</span> if the above is severe, it raises vulnerability and may lead to a crisis. <span class="key">Expectation &amp; speculative attack:</span> even with sound macro fundamentals, a speculative attack driven by <em>expectation</em> can still occur — the self-fulfilling <span class="key">"second-generation"</span> crisis. <span class="key">Balance-sheet effect:</span> firms with high short-term foreign-currency debt (<span class="key">"double mismatch"</span> — currency mismatch + maturity mismatch) are hit hard (unable to repay debt) when the currency falls.</p>`,
              id: `<p>Indonesia 1997: gerakan kembar yang dahsyat — <span class="key">nilai tukar</span> ambruk (Rp/$ melonjak) sementara <span class="key">suku bunga</span> melonjak untuk mempertahankannya. Krisis menghubungkan <span class="key">fundamental makro</span> buruk ke kerentanan dan, akhirnya, ke serangan spekulatif:</p>
<ol>
<li><span class="key">Credit boom</span> → memicu gagal bayar, kebangkrutan, dan mungkin krisis perbankan.</li>
<li><span class="key">Apresiasi RER</span> → neraca eksternal memburuk (defisit transaksi berjalan melebar): nilai tukar harus terdepresiasi atau cadangan devisa terkuras.</li>
<li><span class="key">Cadangan devisa terbatas</span> → cadangan kecil, atau kecil relatif terhadap utang luar negeri jangka pendek → masalah membayar utang luar negeri.</li>
</ol>
<p><span class="key">Krisis:</span> bila hal di atas parah, kerentanan naik dan bisa memicu krisis. <span class="key">Ekspektasi &amp; serangan spekulatif:</span> bahkan dengan fundamental makro sehat, serangan spekulatif yang didorong <em>ekspektasi</em> tetap bisa terjadi — krisis <span class="key">"generasi kedua"</span> yang memenuhi-diri. <span class="key">Efek neraca:</span> perusahaan dengan utang valas jangka pendek tinggi (<span class="key">"double mismatch"</span> — mismatch mata uang + mismatch jatuh tempo) terpukul keras (tak mampu bayar utang) saat mata uang jatuh.</p>`
            },
            chart: CRISIS_CHAIN_CHART
          },
          {
            title: { en: 'The leading indicator: short-term debt vs reserves (Azis 2005)', id: 'Indikator utama: utang jangka pendek vs cadangan (Azis 2005)' },
            html: {
              en: `<p>Azis (2005) compares the five crisis countries. The single most telling ratio is <span class="key">short-term external debt as a multiple of foreign reserves</span> (end-1996): if it exceeds 1, reserves cannot cover a roll-over run, so a speculative attack is self-validating.</p>
<table>
<thead><tr><th>Country (end-1996)</th><th>Short-term debt ÷ FX reserves</th><th>Outcome</th></tr></thead>
<tbody>
<tr><td>Indonesia</td><td><span class="key">1.77</span></td><td>severe crisis</td></tr>
<tr><td>Korea</td><td><span class="key">2.06</span></td><td>severe crisis</td></tr>
<tr><td>Thailand</td><td>1.45</td><td>crisis (trigger)</td></tr>
<tr><td>Philippines</td><td>0.85</td><td>milder</td></tr>
<tr><td>Malaysia</td><td>0.61</td><td>milder (capital controls)</td></tr>
</tbody>
</table>
<p>Indonesia and Korea, with ratios well above 1, suffered the deepest crises; Malaysia and the Philippines, below 1, were hit less hard. The borrower composition mattered too: in Indonesia the <span class="key">private non-bank corporate sector</span> held most of the short-term foreign debt, so the balance-sheet effect fell on firms the government had not guaranteed.</p>
<div class="tip">"When the macro-equilibrium <em>story</em> fails, crisis may occur." The indicators (credit boom, appreciated RER, low reserves) are the <em>measured</em> risks; the balance-sheet effect and liquidity trap are the <em>hidden</em> risks; vulnerability turns to crisis once a speculative attack arrives. Policy lesson: the job of macroprudential policy (Week 12) is to find the <span class="key">hidden risks</span> before the attack.</div>`,
              id: `<p>Azis (2005) membandingkan lima negara krisis. Rasio paling menentukan adalah <span class="key">utang luar negeri jangka pendek sebagai kelipatan cadangan devisa</span> (akhir-1996): bila melebihi 1, cadangan tak bisa menutup rush roll-over, sehingga serangan spekulatif memvalidasi dirinya.</p>
<table>
<thead><tr><th>Negara (akhir-1996)</th><th>Utang jangka pendek ÷ cadangan devisa</th><th>Hasil</th></tr></thead>
<tbody>
<tr><td>Indonesia</td><td><span class="key">1,77</span></td><td>krisis parah</td></tr>
<tr><td>Korea</td><td><span class="key">2,06</span></td><td>krisis parah</td></tr>
<tr><td>Thailand</td><td>1,45</td><td>krisis (pemicu)</td></tr>
<tr><td>Filipina</td><td>0,85</td><td>lebih ringan</td></tr>
<tr><td>Malaysia</td><td>0,61</td><td>lebih ringan (kontrol modal)</td></tr>
</tbody>
</table>
<p>Indonesia dan Korea, dengan rasio jauh di atas 1, mengalami krisis terdalam; Malaysia dan Filipina, di bawah 1, terpukul lebih ringan. Komposisi peminjam juga penting: di Indonesia <span class="key">sektor korporasi swasta non-bank</span> memegang sebagian besar utang valas jangka pendek, sehingga efek neraca jatuh pada perusahaan yang tak dijamin pemerintah.</p>
<div class="tip">"Ketika <em>cerita</em> keseimbangan makro gagal, krisis bisa terjadi." Indikator (credit boom, RER terapresiasi, cadangan rendah) adalah risiko <em>terukur</em>; efek neraca dan jebakan likuiditas adalah risiko <em>tersembunyi</em>; kerentanan berubah jadi krisis begitu serangan spekulatif datang. Pelajaran kebijakan: tugas kebijakan makroprudensial (Minggu 12) adalah menemukan <span class="key">risiko tersembunyi</span> sebelum serangan.</div>`
            },
            chart: SD_FOREX_CHART
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Money, multiplier & the Fisher rate', id: 'Uang, pengganda & suku bunga Fisher' },
        num: 'F1',
        cards: [
          {
            title: { en: 'Money supply & the multiplier', id: 'Jumlah uang & pengganda' },
            html: {
              en: `<div class="formula">Money stock: $\\;M_1 = mm \\times RM$</div>
<div class="formula">Multiplier: $\\;mm = \\dfrac{1}{c + rr\\,(1-c)}$</div>
<ul>
<li>$RM$ — reserve money / monetary base (currency + bank reserves)</li>
<li>$c$ — currency-to-deposit ratio (public)</li>
<li>$rr$ — reserve ratio (banks)</li>
</ul>
<p>$mm$ falls when $c$ or $rr$ rises (bank runs). The CB must raise $RM$ enough to offset a falling $mm$, or $M_1$ contracts (1929–33 lesson).</p>`,
              id: `<div class="formula">Stok uang: $\\;M_1 = mm \\times RM$</div>
<div class="formula">Pengganda: $\\;mm = \\dfrac{1}{c + rr\\,(1-c)}$</div>
<ul>
<li>$RM$ — uang primer / basis moneter (kartal + cadangan bank)</li>
<li>$c$ — rasio kas terhadap deposito (publik)</li>
<li>$rr$ — rasio cadangan (bank)</li>
</ul>
<p>$mm$ turun saat $c$ atau $rr$ naik (rush bank). BI harus menaikkan $RM$ cukup untuk mengimbangi $mm$ yang turun, atau $M_1$ menyusut (pelajaran 1929–33).</p>`
            }
          },
          {
            title: { en: 'Fisher & the monetary aggregates', id: 'Fisher & agregat moneter' },
            html: {
              en: `<div class="formula">Fisher: $\\;r = i - \\pi^{e}\\;$ (deflation $\\pi<0 \\Rightarrow r$ rises)</div>
<div class="formula">Aggregates: $\\;M_0 \\subset M_1 \\subset M_2$</div>
<ul>
<li>$M_0$ — base money: currency + bank reserves (what the CB controls)</li>
<li>$M_1$ — $M_0$ + demand deposits (narrow money)</li>
<li>$M_2$ — $M_1$ + savings + time deposits (broad / quasi-money)</li>
</ul>
<p>Sterilised intervention can raise $M_2$ (public's hands) while keeping $M_0$ flat (COVID burden sharing).</p>`,
              id: `<div class="formula">Fisher: $\\;r = i - \\pi^{e}\\;$ (deflasi $\\pi<0 \\Rightarrow r$ naik)</div>
<div class="formula">Agregat: $\\;M_0 \\subset M_1 \\subset M_2$</div>
<ul>
<li>$M_0$ — uang primer: kartal + cadangan bank (dikendalikan BI)</li>
<li>$M_1$ — $M_0$ + giro (uang sempit)</li>
<li>$M_2$ — $M_1$ + tabungan + deposito (uang luas / kuasi-uang)</li>
</ul>
<p>Intervensi tersterilisasi bisa menaikkan $M_2$ (tangan publik) sambil menahan $M_0$ datar (burden sharing COVID).</p>`
            }
          }
        ]
      },
      {
        heading: { en: 'Taylor rule & open-economy parity', id: 'Aturan Taylor & paritas ekonomi terbuka' },
        num: 'F2',
        cards: [
          {
            title: { en: 'Standard & revised Taylor rule', id: 'Aturan Taylor standar & revisi' },
            html: {
              en: `<div class="formula">Standard: $\\;i_t = \\bar{i} + a(\\pi_t - \\bar{\\pi}) - b(u_t - u_n)$</div>
<div class="formula">Revised (open economy): $$i_{c,t} = a_c + \\rho\\,i_{c,t-1} + \\beta\\,inf.gap_{c,t} + \\gamma\\,Ygap_{c,t} + \\theta\\,\\Delta NEER_{c,t} + \\mu\\,\\Delta NEER_{c,t-1} + \\phi\\,i_{US,t-1} + \\varepsilon_{c,t}$$</div>
<p>Taylor principle: $a>1$ (in real terms $a>0$) so a rise in $\\pi$ raises the <em>real</em> rate. Open-economy terms add the exchange rate, persistence ($\\rho$), and the lagged US rate.</p>`,
              id: `<div class="formula">Standar: $\\;i_t = \\bar{i} + a(\\pi_t - \\bar{\\pi}) - b(u_t - u_n)$</div>
<div class="formula">Revisi (ekonomi terbuka): $$i_{c,t} = a_c + \\rho\\,i_{c,t-1} + \\beta\\,inf.gap_{c,t} + \\gamma\\,Ygap_{c,t} + \\theta\\,\\Delta NEER_{c,t} + \\mu\\,\\Delta NEER_{c,t-1} + \\phi\\,i_{US,t-1} + \\varepsilon_{c,t}$$</div>
<p>Prinsip Taylor: $a>1$ (dalam riil $a>0$) agar kenaikan $\\pi$ menaikkan suku bunga <em>riil</em>. Suku ekonomi-terbuka menambah nilai tukar, persistensi ($\\rho$), dan suku bunga AS tertinggal.</p>`
            }
          },
          {
            title: { en: 'UIP normal vs crisis & required loan return', id: 'UIP normal vs krisis & imbal hasil pinjaman' },
            html: {
              en: `<div class="formula">UIP normal: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right)$</div>
<div class="formula">UIP crisis: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right) + \\text{Risk}$</div>
<div class="formula">Loan return: $\\;RLOAN = RFLOAN + \\left(\\dfrac{E^{e}}{E} - 1\\right) + POLRISK$</div>
<p>Crisis adds a risk premium ⇒ either $i$ jumps or $E$ depreciates today. Defending the peg requires raising $i$, which deepens the recession.</p>`,
              id: `<div class="formula">UIP normal: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right)$</div>
<div class="formula">UIP krisis: $\\;i = i^{*} + \\left(\\dfrac{E^{e}}{E} - 1\\right) + \\text{Risk}$</div>
<div class="formula">Imbal hasil pinjaman: $\\;RLOAN = RFLOAN + \\left(\\dfrac{E^{e}}{E} - 1\\right) + POLRISK$</div>
<p>Krisis menambah premi risiko ⇒ $i$ melonjak atau $E$ terdepresiasi hari ini. Mempertahankan patokan menuntut menaikkan $i$, yang memperdalam resesi.</p>`
            }
          },
          {
            title: { en: 'Crisis vulnerability ratio', id: 'Rasio kerentanan krisis' },
            html: {
              en: `<div class="formula">Vulnerability: $\\;\\dfrac{\\text{short-term external debt}}{\\text{foreign reserves}} > 1 \\;\\Rightarrow\\; \\text{exposed to a run}$</div>
<p>The "double mismatch": currency mismatch (foreign-currency debt, local-currency revenue) + maturity mismatch (short-term debt, long-term assets). Both worsen the balance-sheet effect of a depreciation.</p>`,
              id: `<div class="formula">Kerentanan: $\\;\\dfrac{\\text{utang luar negeri jangka pendek}}{\\text{cadangan devisa}} > 1 \\;\\Rightarrow\\; \\text{rentan rush}$</div>
<p>"Double mismatch": mismatch mata uang (utang valas, pendapatan rupiah) + mismatch jatuh tempo (utang pendek, aset panjang). Keduanya memperburuk efek neraca dari depresiasi.</p>`
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
            title: { en: '1. Deflation raises the real rate', id: '1. Deflasi menaikkan suku bunga riil' },
            html: {
              en: '<p>Plot nominal $i$, inflation $\\pi$ and real $r = i-\\pi$ over 1929–33. The nominal rate falls slowly; deflation drives $\\pi$ sharply negative; the real rate <em>rises</em> to ~14.8% (1932). Draw this if asked why monetary policy was "tight" in the Depression despite falling nominal rates.</p>',
              id: '<p>Plot $i$ nominal, inflasi $\\pi$, dan $r = i-\\pi$ riil sepanjang 1929–33. Suku bunga nominal turun lambat; deflasi mendorong $\\pi$ sangat negatif; suku bunga riil <em>naik</em> ke ~14,8% (1932). Gambar ini bila ditanya mengapa kebijakan moneter "ketat" di Depresi meski suku bunga nominal turun.</p>'
            },
            chart: DEFLATION_CHART
          },
          {
            title: { en: '2. Multiplier collapse: RM up, M1 down', id: '2. Keruntuhan pengganda: RM naik, M1 turun' },
            html: {
              en: '<p>Bars compare M1 and RM in 1929 vs 1933. RM rose ($7.1\\to8.2$) but M1 fell ($26.4\\to19.4$) because $mm$ collapsed ($3.7\\to2.4$). Use to argue the CB must offset a falling multiplier, not just watch the base.</p>',
              id: '<p>Batang membandingkan M1 dan RM 1929 vs 1933. RM naik ($7{,}1\\to8{,}2$) tetapi M1 turun ($26{,}4\\to19{,}4$) karena $mm$ runtuh ($3{,}7\\to2{,}4$). Pakai untuk menegaskan BI harus mengimbangi pengganda yang turun, bukan hanya mengawasi basis.</p>'
            },
            chart: MULTIPLIER_CHART
          },
          {
            title: { en: '3. Multiplier vs leakages', id: '3. Pengganda vs kebocoran' },
            html: {
              en: '<p>The multiplier $mm = 1/[c+rr(1-c)]$ falls as the currency ratio $c$ or reserve ratio $rr$ rises — the curve drops steeply. Bank runs raise both, collapsing broad money.</p>',
              id: '<p>Pengganda $mm = 1/[c+rr(1-c)]$ turun saat rasio kas $c$ atau rasio cadangan $rr$ naik — kurvanya turun curam. Rush bank menaikkan keduanya, meruntuhkan uang luas.</p>'
            },
            chart: MM_PATH
          },
          {
            title: { en: '4. UIP: crisis risk premium → depreciation', id: '4. UIP: premi risiko krisis → depresiasi' },
            html: {
              en: '<p>Foreign-return schedule slopes down in $E$. The domestic-return line shifts up when a crisis adds Risk, so the equilibrium $E$ moves right (rupiah depreciates). Draw to show the open-economy bind: defend the currency by raising $i$, or let it fall.</p>',
              id: '<p>Skedul imbal hasil asing miring turun terhadap $E$. Garis imbal hasil domestik bergeser naik saat krisis menambah Risk, sehingga $E$ keseimbangan bergeser ke kanan (rupiah depresiasi). Gambar untuk menunjukkan dilema ekonomi terbuka: pertahankan mata uang dengan menaikkan $i$, atau biarkan jatuh.</p>'
            },
            chart: UIP_CRISIS_CHART
          },
          {
            title: { en: '5. Double whammy: bonds & stocks fall together', id: '5. Double whammy: obligasi & saham jatuh bersama' },
            html: {
              en: '<p>Normally bonds rise when stocks fall (safe-haven). In a crisis both fall together — the signal of rising future default risk and forced unwinding of leveraged basis trades. Draw to motivate direct CB liquidity intervention.</p>',
              id: '<p>Normalnya obligasi naik saat saham turun (safe-haven). Saat krisis keduanya jatuh bersama — sinyal naiknya risiko gagal bayar masa depan dan pembongkaran paksa basis trade ber-leverage. Gambar untuk memotivasi intervensi likuiditas langsung BI.</p>'
            },
            chart: DOUBLE_WHAMMY_CHART
          },
          {
            title: { en: '6. Vulnerability → crisis chain', id: '6. Rantai kerentanan → krisis' },
            html: {
              en: '<p>A rising vulnerability path: weak fundamentals (credit boom, appreciated RER, low reserves) + balance-sheet effect tip into crisis once a speculative attack arrives. The measured risks are visible; the hidden risks are not.</p>',
              id: '<p>Jalur kerentanan yang naik: fundamental lemah (credit boom, RER terapresiasi, cadangan rendah) + efek neraca berbalik jadi krisis begitu serangan spekulatif datang. Risiko terukur terlihat; risiko tersembunyi tidak.</p>'
            },
            chart: CRISIS_CHAIN_CHART
          },
          {
            title: { en: '7. Short-term debt ÷ reserves (1996)', id: '7. Utang jangka pendek ÷ cadangan (1996)' },
            html: {
              en: '<p>Bars of short-term external debt as a multiple of FX reserves at end-1996. Indonesia (1.77) and Korea (2.06) are above 1 — exposed to a run and hit hardest; Malaysia (0.61) and Philippines (0.85) below 1 fared better. The single best leading indicator of the Asian crisis.</p>',
              id: '<p>Batang utang luar negeri jangka pendek sebagai kelipatan cadangan devisa akhir-1996. Indonesia (1,77) dan Korea (2,06) di atas 1 — rentan rush dan terpukul terparah; Malaysia (0,61) dan Filipina (0,85) di bawah 1 lebih baik. Indikator utama terbaik krisis Asia.</p>'
            },
            chart: SD_FOREX_CHART
          }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'quant',
        q: { en: 'In 1932 the nominal one-year rate was about 4.0% and inflation was −10.8%. What was the real rate, and why did it deepen the Depression?',
             id: 'Pada 1932 suku bunga nominal satu tahun sekitar 4,0% dan inflasi −10,8%. Berapa suku bunga riil, dan mengapa itu memperdalam Depresi?' },
        answer: [
          { en: 'Fisher: $r = i - \\pi = 4.0 - (-10.8) = 14.8\\%$. (The deck reports ~14.8% real for 1932.)',
            id: 'Fisher: $r = i - \\pi = 4{,}0 - (-10{,}8) = 14{,}8\\%$. (Slide melaporkan riil ~14,8% untuk 1932.)' },
          { en: 'A 14.8% real rate in a deep slump crushes investment and consumer durables: borrowing is punitively expensive in real terms even though the nominal rate looks low. The CB appeared to be "easing" (nominal $i$ falling) while policy was in fact extremely tight.',
            id: 'Suku bunga riil 14,8% di tengah resesi mematikan investasi dan barang tahan lama: pinjaman sangat mahal secara riil meski suku bunga nominal terlihat rendah. BI tampak "melonggarkan" ($i$ nominal turun) padahal kebijakan sebenarnya sangat ketat.' },
          { en: 'Lesson: with deflation, target the real rate (or inflation), not the nominal rate. This is why modern central banks fight deflation aggressively.',
            id: 'Pelajaran: saat deflasi, targetkan suku bunga riil (atau inflasi), bukan nominal. Itu sebabnya bank sentral modern melawan deflasi secara agresif.' }
        ],
        tip: { en: 'Always compute $r=i-\\pi$ before judging whether policy is loose or tight.', id: 'Selalu hitung $r=i-\\pi$ sebelum menilai kebijakan longgar atau ketat.' }
      },
      {
        type: 'quant',
        q: { en: 'Reserve money $RM$ rose from 7.1 to 8.2 (1929→1933) yet $M_1$ fell from 26.4 to 19.4. Show what happened to the money multiplier and explain the mechanism.',
             id: 'Uang primer $RM$ naik dari 7,1 ke 8,2 (1929→1933) tetapi $M_1$ turun dari 26,4 ke 19,4. Tunjukkan apa yang terjadi pada pengganda uang dan jelaskan mekanismenya.' },
        answer: [
          { en: 'Multiplier $mm = M_1 / RM$. In 1929: $26.4/7.1 = 3.7$. In 1933: $19.4/8.2 = 2.4$. So $mm$ fell from 3.7 to 2.4 — a ~35% collapse.',
            id: 'Pengganda $mm = M_1 / RM$. 1929: $26{,}4/7{,}1 = 3{,}7$. 1933: $19{,}4/8{,}2 = 2{,}4$. Jadi $mm$ turun dari 3,7 ke 2,4 — runtuh ~35%.' },
          { en: 'Mechanism: $mm = 1/[c+rr(1-c)]$. Bank runs made the public hold more cash ($c\\uparrow$) and banks hoard reserves ($rr\\uparrow$); both raise the denominator and shrink $mm$. Insolvent borrowers and bank failures fed the spiral.',
            id: 'Mekanisme: $mm = 1/[c+rr(1-c)]$. Rush bank membuat publik memegang lebih banyak tunai ($c\\uparrow$) dan bank menimbun cadangan ($rr\\uparrow$); keduanya menaikkan penyebut dan memperkecil $mm$. Peminjam insolven dan kegagalan bank memperparah spiral.' },
          { en: 'Friedman & Schwartz blamed the Fed for not raising $RM$ enough to offset the falling $mm$. The base rose only 15% while the multiplier fell 35%, so $M_1$ contracted ~26%.',
            id: 'Friedman & Schwartz menyalahkan The Fed karena tak menaikkan $RM$ cukup untuk mengimbangi $mm$ yang turun. Basis hanya naik 15% sementara pengganda turun 35%, sehingga $M_1$ menyusut ~26%.' }
        ]
      },
      {
        type: 'scenario',
        q: { en: 'During COVID, BI bought government bonds in the primary market yet M0 stayed roughly flat while M2 surged. Explain the "burden sharing" sterilisation mechanism.',
             id: 'Saat COVID, BI membeli obligasi pemerintah di pasar primer tetapi M0 relatif datar sementara M2 melonjak. Jelaskan mekanisme sterilisasi "burden sharing".' },
        answer: [
          { en: 'Step 1: BI buys bonds from the government → injects new base money (M0) as bank reserves. Left alone this is monetary financing.',
            id: 'Langkah 1: BI membeli obligasi dari pemerintah → menyuntik uang primer baru (M0) sebagai cadangan bank. Bila dibiarkan ini pembiayaan moneter.' },
          { en: 'Step 2: BI conducts monetary operations — it sells short-term instruments (SBI / BI Certificates) to banks, draining the new reserves back out. This "sterilises" the injection: reserves (M0) convert into CB securities (not M0), so M0 stays flat.',
            id: 'Langkah 2: BI melakukan operasi moneter — menjual instrumen jangka pendek (SBI / Sertifikat BI) ke bank, menarik kembali cadangan baru. Ini "mensterilkan" injeksi: cadangan (M0) berubah jadi surat berharga BI (bukan M0), sehingga M0 tetap datar.' },
          { en: 'Step 3: The government spends the financing on social assistance (BLT), subsidies, healthcare. Citizens receive cash and deposit it into commercial-bank accounts → broad money (M2) rises. Net effect: M2 ↑ but M0 flat — stimulating the economy without inflating the base or pressuring the rupiah.',
            id: 'Langkah 3: Pemerintah membelanjakan pembiayaan untuk bansos (BLT), subsidi, kesehatan. Warga menerima tunai dan menyetornya ke rekening bank → uang luas (M2) naik. Efek neto: M2 ↑ tetapi M0 datar — menstimulus ekonomi tanpa menggelembungkan basis atau menekan rupiah.' }
        ],
        tip: { en: 'Sterilised intervention = create base money AND sell securities to neutralise it. Same logic underlies BI\'s "smart intervention".', id: 'Intervensi tersterilisasi = ciptakan uang primer DAN jual surat berharga untuk menetralkannya. Logika sama mendasari "smart intervention" BI.' }
      },
      {
        type: 'concept',
        q: { en: 'Distinguish "deliberate" time inconsistency from "forced" time inconsistency under uncertainty, and give the policy cure for each.',
             id: 'Bedakan inkonsistensi waktu "disengaja" dari yang "terpaksa" dalam ketidakpastian, dan beri obat kebijakan untuk masing-masing.' },
        answer: [
          { en: 'Deliberate TI: the policymaker is tempted to exploit the Phillips-curve trade-off — promise low inflation, then create a 1% surprise to cut unemployment by 2%. Rational wage-setters anticipate this and expect 1% inflation, so the economy ends with higher inflation and no output gain (inflation bias).',
            id: 'TI disengaja: pembuat kebijakan tergoda mengeksploitasi trade-off kurva Phillips — janjikan inflasi rendah, lalu ciptakan kejutan 1% untuk memangkas pengangguran 2%. Penetap upah rasional mengantisipasinya dan mengharap inflasi 1%, sehingga ekonomi berakhir dengan inflasi lebih tinggi tanpa keuntungan output (bias inflasi).' },
          { en: 'Cure for deliberate TI: commitment — rules over discretion, an independent inflation-targeting central bank, a credible target. Removes the temptation.',
            id: 'Obat TI disengaja: komitmen — aturan di atas diskresi, bank sentral penargetan inflasi yang independen, target kredibel. Menghapus godaan.' },
          { en: 'Forced TI: the optimal plan stops being optimal because the environment changed (an unforeseen shock); the "best" decision today is no longer best tomorrow. Cure: flexibility / state-contingent discretion — adjust the plan to genuine surprises. Good design balances the two: commit to the target, retain flexibility on the path.',
            id: 'TI terpaksa: rencana optimal berhenti optimal karena lingkungan berubah (guncangan tak terduga); keputusan "terbaik" hari ini bukan lagi terbaik besok. Obat: fleksibilitas / diskresi bersyarat-keadaan — sesuaikan rencana ke kejutan sejati. Desain baik menyeimbangkan keduanya: komit pada target, pertahankan fleksibilitas pada jalurnya.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'Why does an emerging-market currency depreciation tighten financial conditions (the opposite of the US), using the UIP-in-crisis equation?',
             id: 'Mengapa depresiasi mata uang pasar berkembang justru mengetatkan kondisi keuangan (kebalikan AS), memakai persamaan UIP-saat-krisis?' },
        answer: [
          { en: 'UIP in crisis: $i = i^* + (E^e/E - 1) + \\text{Risk}$. When a crisis hits, investors demand a Risk premium to hold local assets. To keep capital, the domestic rate $i$ must rise — or the currency $E$ must depreciate now to create expected future appreciation.',
            id: 'UIP saat krisis: $i = i^* + (E^e/E - 1) + \\text{Risk}$. Saat krisis, investor menuntut premi Risk untuk memegang aset lokal. Untuk menahan modal, suku bunga domestik $i$ harus naik — atau mata uang $E$ harus terdepresiasi sekarang untuk menciptakan apresiasi ekspektasi.' },
          { en: 'The balance-sheet effect makes depreciation contractionary: firms with foreign-currency (dollar) debt see the rupiah value of their debt explode (double mismatch). Net worth falls, financial frictions tighten credit, investment collapses — so the weaker currency tightens conditions rather than loosening them.',
            id: 'Efek neraca membuat depresiasi kontraktif: perusahaan dengan utang valas (dolar) melihat nilai rupiah utangnya meledak (double mismatch). Kekayaan bersih turun, friksi keuangan mengetatkan kredit, investasi runtuh — sehingga mata uang lemah mengetatkan kondisi, bukan melonggarkan.' },
          { en: 'For the US, a falling dollar loosens conditions (debt is in its own currency, exports cheapen). For Indonesia 1997, a falling rupiah did the reverse — the Krugman point.',
            id: 'Untuk AS, dolar yang jatuh melonggarkan kondisi (utang dalam mata uangnya sendiri, ekspor jadi murah). Untuk Indonesia 1997, rupiah yang jatuh melakukan sebaliknya — poin Krugman.' }
        ]
      },
      {
        type: 'tutorial',
        q: { en: 'Two countries enter 1997 with sound-looking fundamentals. Country A has short-term external debt = 1.8× reserves; Country B has 0.6×. Who is more crisis-prone, and can good fundamentals alone save them?',
             id: 'Dua negara masuk 1997 dengan fundamental yang tampak sehat. Negara A punya utang luar negeri jangka pendek = 1,8× cadangan; Negara B = 0,6×. Siapa lebih rawan krisis, dan bisakah fundamental baik saja menyelamatkan mereka?' },
        answer: [
          { en: 'Country A (1.8×, like Indonesia at 1.77 or Korea at 2.06) is far more crisis-prone: reserves cannot cover the short-term debt if creditors refuse to roll over. A coordinated refusal to roll over is self-validating — a run succeeds because everyone expects it to.',
            id: 'Negara A (1,8×, seperti Indonesia 1,77 atau Korea 2,06) jauh lebih rawan: cadangan tak bisa menutup utang jangka pendek bila kreditor menolak roll over. Penolakan roll over yang terkoordinasi memvalidasi diri — rush berhasil karena semua mengharapkannya.' },
          { en: 'Country B (0.6×, like Malaysia) can cover the short-term debt from reserves, breaking the self-fulfilling run. It is far less exposed.',
            id: 'Negara B (0,6×, seperti Malaysia) bisa menutup utang jangka pendek dari cadangan, memutus rush yang memenuhi-diri. Ia jauh lebih kebal.' },
          { en: 'Good fundamentals alone are NOT enough: the second-generation (expectations-driven) crisis model shows a speculative attack can succeed even with sound fundamentals if the debt/reserves structure is fragile and investors coordinate on the "bad" equilibrium. The double mismatch (currency + maturity) is what turns a manageable shock into a crisis. Policy must address the hidden balance-sheet risk, not just the headline macro numbers.',
            id: 'Fundamental baik saja TIDAK cukup: model krisis generasi kedua (didorong ekspektasi) menunjukkan serangan spekulatif bisa berhasil bahkan dengan fundamental sehat bila struktur utang/cadangan rapuh dan investor berkoordinasi pada keseimbangan "buruk". Double mismatch (mata uang + jatuh tempo) yang mengubah guncangan terkelola jadi krisis. Kebijakan harus menangani risiko neraca tersembunyi, bukan hanya angka makro utama.' }
        ]
      }
    ]
  };
})();
