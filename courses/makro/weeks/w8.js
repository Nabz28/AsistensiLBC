/* ============================================================
   MAKRO · Week 8 — Capital Flows, Policy & the Exchange Rate
   Mundell-Fleming (open-economy IS-LM-BP), UIP, the policy
   trilemma, exchange-rate regimes, capital-flow risks, and the
   1997-98 Asian crisis. Bilingual EN/ID. Gold-standard format.
   ============================================================ */
(function () {
  'use strict';
  window.MAKRO_WEEKS = window.MAKRO_WEEKS || {};

  /* ---------- palette ---------- */
  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16',
      GREEN = '#15803d', BLUE = '#2f5fd0', VIOLET = '#7c4dff';

  /* ---------- chart specs (declarative EconChart) ---------- */

  /* Uncovered Interest Parity — domestic vs foreign return schedule in (E, return) space */
  var UIP_CHART = {
    title: { en: 'Uncovered Interest Parity (FX market)', id: 'Paritas Suku Bunga Tak Tertutup (pasar valas)' },
    w: 360, h: 260,
    x: { min: 0, max: 10, label: 'Exchange rate E (Rp/$)' },
    y: { min: 0, max: 10, label: 'Expected rupiah return' },
    curves: [
      { id: 'DR', kind: 'hline', y: 6, color: RED, label: 'Domestic return i', labelAt: 'start' },
      { id: 'FR', kind: 'line', p1: [1, 9], p2: [9, 2], color: TEAL, label: 'Foreign return i*+(E^e-E)/E' }
    ],
    points: [
      { on: ['DR', 'FR'], dot: true, guideX: 'E*', label: 'E^{eq}' }
    ],
    notes: [ { at: [2.2, 8.2], text: 'depreciation raises\nexpected return' } ]
  };

  /* The BP curve in (Y, i) space — three mobility cases */
  var BP_SLOPE = {
    title: { en: 'The BP curve & capital mobility', id: 'Kurva BP & mobilitas modal' },
    w: 360, h: 260,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Interest rate i' },
    curves: [
      { id: 'BPperf', kind: 'hline', y: 5, color: GREEN, label: 'BP: perfect mobility (i=i*)', labelAt: 'start' },
      { id: 'BPimp', kind: 'line', p1: [1, 2], p2: [9, 9], color: BLUE, label: 'BP: imperfect mobility' },
      { id: 'BPzero', kind: 'vline', x: 5, color: AMBER, label: 'BP: zero mobility' }
    ]
  };

  /* Mundell-Fleming base equilibrium: IS, LM, BP(=i*) */
  var MF_BASE = {
    title: { en: 'Mundell-Fleming equilibrium', id: 'Keseimbangan Mundell-Fleming' },
    w: 380, h: 280,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Interest rate i' },
    curves: [
      { id: 'IS', kind: 'line', p1: [1, 9], p2: [9, 1], color: RED, label: 'IS' },
      { id: 'LM', kind: 'line', p1: [2, 1], p2: [9, 9], color: TEAL, label: 'LM' },
      { id: 'BP', kind: 'hline', y: 5, color: GREEN, label: 'BP (i=i*)', labelAt: 'start' }
    ],
    points: [
      { on: ['IS', 'LM'], dot: true, guideX: 'Y*', guideY: 'i*', label: 'E' }
    ]
  };

  /* Floating + monetary expansion: LM right, depreciation pushes IS right */
  var MF_FLOAT_MONEY = {
    title: { en: 'Floating + monetary expansion (effective)', id: 'Mengambang + ekspansi moneter (efektif)' },
    w: 380, h: 280,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Interest rate i' },
    curves: [
      { id: 'IS1', kind: 'line', p1: [1, 8.5], p2: [7, 1], color: RED, label: 'IS1' },
      { id: 'IS2', kind: 'line', p1: [3, 9], p2: [9, 1.5], color: RED, label: 'IS2', dash: true },
      { id: 'LM1', kind: 'line', p1: [1.5, 1], p2: [7, 8.5], color: TEAL, label: 'LM1' },
      { id: 'LM2', kind: 'line', p1: [3.5, 1], p2: [9, 8.5], color: TEAL, label: 'LM2', dash: true },
      { id: 'BP', kind: 'hline', y: 5, color: GREEN, label: 'BP (i=i*)', labelAt: 'start' }
    ],
    points: [
      { on: ['IS1', 'LM1'], dot: true, label: 'E0' },
      { on: ['IS2', 'LM2'], dot: true, guideX: 'Y1', label: 'E1' }
    ],
    shifts: [ { from: 'LM1', to: 'LM2' }, { from: 'IS1', to: 'IS2' } ]
  };

  /* Floating + fiscal expansion: IS right, appreciation pushes IS back (ineffective) */
  var MF_FLOAT_FISCAL = {
    title: { en: 'Floating + fiscal expansion (ineffective)', id: 'Mengambang + ekspansi fiskal (tidak efektif)' },
    w: 380, h: 280,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Interest rate i' },
    curves: [
      { id: 'IS1', kind: 'line', p1: [1, 8.5], p2: [7, 1], color: RED, label: 'IS1' },
      { id: 'IS2', kind: 'line', p1: [3, 9], p2: [9, 1.5], color: AMBER, label: 'IS2 (G up)', dash: true },
      { id: 'LM', kind: 'line', p1: [1.5, 1], p2: [7, 8.5], color: TEAL, label: 'LM' },
      { id: 'BP', kind: 'hline', y: 5, color: GREEN, label: 'BP (i=i*)', labelAt: 'start' }
    ],
    points: [
      { on: ['IS1', 'LM'], dot: true, guideX: 'Y*', label: 'E0=E2' }
    ],
    shifts: [ { from: 'IS2', to: 'IS1' } ],
    notes: [ { at: [6.5, 8], text: 'appreciation\ncrowds out NX' } ]
  };

  /* Fixed + monetary expansion: LM right then forced back (ineffective) */
  var MF_FIXED_MONEY = {
    title: { en: 'Fixed + monetary expansion (ineffective)', id: 'Tetap + ekspansi moneter (tidak efektif)' },
    w: 380, h: 280,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Interest rate i' },
    curves: [
      { id: 'IS', kind: 'line', p1: [1, 8.5], p2: [8, 1], color: RED, label: 'IS' },
      { id: 'LM1', kind: 'line', p1: [1.5, 1], p2: [7, 8.5], color: TEAL, label: 'LM1' },
      { id: 'LM2', kind: 'line', p1: [3.5, 1], p2: [9, 8.5], color: AMBER, label: 'LM2', dash: true },
      { id: 'BP', kind: 'hline', y: 5, color: GREEN, label: 'BP (i=i*)', labelAt: 'start' }
    ],
    points: [
      { on: ['IS', 'LM1'], dot: true, guideX: 'Y*', label: 'E0=E2' }
    ],
    shifts: [ { from: 'LM2', to: 'LM1' } ],
    notes: [ { at: [6.2, 2], text: 'reserves sold\nLM back' } ]
  };

  /* Fixed + fiscal expansion: IS right, LM follows right (very effective) */
  var MF_FIXED_FISCAL = {
    title: { en: 'Fixed + fiscal expansion (very effective)', id: 'Tetap + ekspansi fiskal (sangat efektif)' },
    w: 380, h: 280,
    x: { min: 0, max: 10, label: 'Output Y' },
    y: { min: 0, max: 10, label: 'Interest rate i' },
    curves: [
      { id: 'IS1', kind: 'line', p1: [1, 8.5], p2: [6.5, 1], color: RED, label: 'IS1' },
      { id: 'IS2', kind: 'line', p1: [3, 9], p2: [9, 1.5], color: AMBER, label: 'IS2 (G up)', dash: true },
      { id: 'LM1', kind: 'line', p1: [1.5, 1], p2: [6.5, 8.5], color: TEAL, label: 'LM1' },
      { id: 'LM2', kind: 'line', p1: [3.5, 1], p2: [9, 8.5], color: TEAL, label: 'LM2', dash: true },
      { id: 'BP', kind: 'hline', y: 5, color: GREEN, label: 'BP (i=i*)', labelAt: 'start' }
    ],
    points: [
      { on: ['IS1', 'LM1'], dot: true, label: 'E0' },
      { on: ['IS2', 'LM2'], dot: true, guideX: 'Y2', label: 'E2' }
    ],
    shifts: [ { from: 'IS1', to: 'IS2' }, { from: 'LM1', to: 'LM2' } ]
  };

  /* The trilemma triangle */
  var TRILEMMA = {
    title: { en: 'The Impossible Trinity', id: 'Trinitas Mustahil' },
    w: 360, h: 280,
    x: { min: 0, max: 10, label: '' },
    y: { min: 0, max: 10, label: '' },
    curves: [
      { id: 'L', kind: 'line', p1: [5, 9], p2: [1, 1.5], color: LINE, label: '' },
      { id: 'R', kind: 'line', p1: [5, 9], p2: [9, 1.5], color: LINE, label: '' },
      { id: 'B', kind: 'line', p1: [1, 1.5], p2: [9, 1.5], color: LINE, label: '' }
    ],
    notes: [
      { at: [5, 9.5], text: 'Capital mobility' },
      { at: [0.6, 0.7], text: 'Fixed ER' },
      { at: [9, 0.7], text: 'Monetary indep.' },
      { at: [2.2, 5.5], text: 'lose monetary\n(HK, Euro)' },
      { at: [7.6, 5.5], text: 'must float\n(US, ID)' },
      { at: [5, 0.9], text: 'capital controls (China, BW)' }
    ]
  };

  /* Exchange-rate regime spectrum (bars: rigidity) */
  var ER_REGIMES = {
    title: { en: 'Exchange-rate regime spectrum', id: 'Spektrum rezim nilai tukar' },
    w: 380, h: 250,
    kind: 'bars',
    y: { min: 0, max: 10, label: 'Rigidity / commitment' },
    bars: [
      { label: 'Dollarize', value: 10, color: RED },
      { label: 'Curr. board', value: 9, color: RED },
      { label: 'Hard peg', value: 7.5, color: AMBER },
      { label: 'Crawling peg', value: 6, color: AMBER },
      { label: 'Managed float', value: 4, color: TEAL },
      { label: 'Free float', value: 1.5, color: GREEN }
    ]
  };

  /* Rupiah collapse 1997-98 */
  var RUPIAH_CRISIS = {
    title: { en: 'Rupiah vs USD, 1997-98', id: 'Rupiah vs USD, 1997-98' },
    w: 380, h: 250,
    x: { min: 0, max: 10, label: 'Time (mid-97 → 98)' },
    y: { min: 0, max: 18, label: 'Rp per USD (000)' },
    curves: [
      { id: 'Rp', kind: 'path', pts: [[0.5, 2.4], [2, 2.6], [3.5, 4], [5, 6], [6.5, 10], [8, 14], [9.5, 16]], color: RED, label: 'Rp/$', smooth: true }
    ],
    notes: [ { at: [2, 1.5], text: 'peg breaks\nJul 1997' }, { at: [8, 12], text: '~16,000' } ]
  };

  /* Hot money vs FDI volatility (bars) */
  var FLOW_TYPES = {
    title: { en: 'Flow volatility: FDI vs hot money', id: 'Volatilitas arus: FDI vs uang panas' },
    w: 360, h: 240,
    kind: 'bars',
    y: { min: 0, max: 10, label: 'Volatility / reversal risk' },
    bars: [
      { label: 'FDI', value: 2, color: GREEN },
      { label: 'Long-term loans', value: 4, color: TEAL },
      { label: 'Portfolio equity', value: 7, color: AMBER },
      { label: 'Hot money', value: 9.5, color: RED }
    ]
  };

  /* ---------- the week object ---------- */
  window.MAKRO_WEEKS.w8 = {
    id: 'w8',
    label: { en: 'Week 8', id: 'Minggu 8' },
    title: {
      en: 'Capital Flows, Policy & the Exchange Rate',
      id: 'Arus Modal, Kebijakan & Nilai Tukar'
    },
    subtitle: {
      en: 'The open-economy IS-LM-BP (Mundell-Fleming) model, interest parity, the policy trilemma, exchange-rate regimes, and the lessons of the 1997-98 Asian crisis.',
      id: 'Model IS-LM-BP ekonomi terbuka (Mundell-Fleming), paritas suku bunga, trilema kebijakan, rezim nilai tukar, dan pelajaran dari krisis Asia 1997-98.'
    },

    notes: [
      /* ---- Section 1: open economy recap ---- */
      {
        heading: { en: 'The open economy & the balance of payments', id: 'Ekonomi terbuka & neraca pembayaran' },
        num: '1',
        cards: [
          {
            title: { en: 'The balance-of-payments identity', id: 'Identitas neraca pembayaran' },
            html: {
              en: '<p>The <span class="key">balance of payments</span> (BOP) records every transaction between residents and the rest of the world. Its master identity is:</p><div class="formula">CA + KA + \\Delta Reserves = 0</div><p>The <span class="key">current account</span> (CA) = net exports of goods &amp; services + net income from abroad + net transfers. The <span class="key">capital/financial account</span> (KA) = net capital inflows (foreigners buying domestic assets minus residents buying foreign assets).</p><div class="note">A <span class="key">current-account deficit must be financed</span>: either by a capital-account surplus (borrowing from / selling assets to foreigners) or by drawing down official reserves. There is no third option — the BOP always balances.</div>',
              id: '<p><span class="key">Neraca pembayaran</span> (BOP) mencatat setiap transaksi antara penduduk dan dunia luar. Identitas pokoknya:</p><div class="formula">CA + KA + \\Delta Cadangan = 0</div><p><span class="key">Transaksi berjalan</span> (CA) = ekspor neto barang &amp; jasa + pendapatan neto dari luar negeri + transfer neto. <span class="key">Akun modal/finansial</span> (KA) = arus modal masuk neto (asing membeli aset domestik dikurangi penduduk membeli aset asing).</p><div class="note"><span class="key">Defisit transaksi berjalan harus dibiayai</span>: lewat surplus akun modal (meminjam dari / menjual aset ke asing) atau dengan menguras cadangan resmi. Tidak ada opsi ketiga — BOP selalu seimbang.</div>'
            }
          },
          {
            title: { en: 'Why capital flows matter', id: 'Mengapa arus modal penting' },
            html: {
              en: '<p>Under a clean float, <span class="key">ΔReserves = 0</span> and the exchange rate adjusts so CA = −KA automatically. Under a managed or fixed rate, the central bank uses reserves to bridge any gap. So the exchange-rate regime determines <em>how</em> the BOP closes — through the price (the exchange rate) or through quantities (reserves and money supply).</p>',
              id: '<p>Pada mengambang murni, <span class="key">ΔCadangan = 0</span> dan nilai tukar menyesuaikan sehingga CA = −KA secara otomatis. Pada rezim terkelola atau tetap, bank sentral memakai cadangan untuk menutup selisih. Jadi rezim nilai tukar menentukan <em>bagaimana</em> BOP tertutup — lewat harga (nilai tukar) atau lewat kuantitas (cadangan dan jumlah uang beredar).</p>'
            }
          }
        ]
      },

      /* ---- Section 2: capital mobility & UIP ---- */
      {
        heading: { en: 'Capital mobility & interest parity', id: 'Mobilitas modal & paritas suku bunga' },
        num: '2',
        cards: [
          {
            title: { en: 'Uncovered Interest Parity (UIP)', id: 'Paritas Suku Bunga Tak Tertutup (UIP)' },
            html: {
              en: '<p>With mobile capital, investors arbitrage returns across borders. <span class="key">UIP</span> says the domestic interest rate must equal the foreign rate plus the expected depreciation of the home currency:</p><div class="formula">i = i^* + (E^e - E)/E</div><p>Here $E$ is the spot exchange rate (home per foreign), $E^e$ the expected future rate, $i^*$ the foreign interest rate. If the rupiah is expected to depreciate, domestic assets must pay a higher $i$ to compensate.</p>',
              id: '<p>Dengan modal yang mobile, investor mengarbitrase imbal hasil lintas negara. <span class="key">UIP</span> menyatakan suku bunga domestik harus sama dengan suku bunga asing ditambah ekspektasi depresiasi mata uang domestik:</p><div class="formula">i = i^* + (E^e - E)/E</div><p>Di sini $E$ nilai tukar spot (domestik per asing), $E^e$ ekspektasi nilai tukar mendatang, $i^*$ suku bunga asing. Bila rupiah diperkirakan terdepresiasi, aset domestik harus membayar $i$ lebih tinggi sebagai kompensasi.</p>'
            },
            chart: UIP_CHART
          },
          {
            title: { en: 'Perfect capital mobility', id: 'Mobilitas modal sempurna' },
            html: {
              en: '<p>For a <span class="key">small open economy</span> with perfect capital mobility and no expected change in $E$, UIP collapses to:</p><div class="formula">i = i^*</div><p>The home rate is pinned to the world rate. Any attempt to push $i$ away from $i^*$ triggers massive capital flows that restore equality. This single condition drives every Mundell-Fleming result that follows.</p><div class="tip">Exam cue: “small open economy, perfect capital mobility” ⇒ BP curve is <strong>horizontal at $i=i^*$</strong>.</div>',
              id: '<p>Untuk <span class="key">ekonomi terbuka kecil</span> dengan mobilitas modal sempurna dan tanpa ekspektasi perubahan $E$, UIP menyederhana menjadi:</p><div class="formula">i = i^*</div><p>Suku bunga domestik terpaku ke suku bunga dunia. Setiap upaya menggeser $i$ dari $i^*$ memicu arus modal besar yang memulihkan kesetaraan. Kondisi tunggal inilah yang menggerakkan seluruh hasil Mundell-Fleming berikutnya.</p><div class="tip">Sinyal ujian: “ekonomi terbuka kecil, mobilitas modal sempurna” ⇒ kurva BP <strong>horizontal di $i=i^*$</strong>.</div>'
            }
          }
        ]
      },

      /* ---- Section 3: Mundell-Fleming structure ---- */
      {
        heading: { en: 'The Mundell-Fleming model', id: 'Model Mundell-Fleming' },
        num: '3',
        cards: [
          {
            title: { en: 'Three markets, three curves', id: 'Tiga pasar, tiga kurva' },
            html: {
              en: '<p>Mundell-Fleming is open-economy IS-LM plus a third schedule, all in $(Y, i)$ space:</p><table><tr><th>Curve</th><th>Market</th><th>Slope</th></tr><tr><td><span class="key">IS</span></td><td>Goods, now incl. $NX(e,Y)$</td><td>downward</td></tr><tr><td><span class="key">LM</span></td><td>Money</td><td>upward</td></tr><tr><td><span class="key">BP</span></td><td>Balance of payments</td><td>depends on mobility</td></tr></table><p>The open-economy IS adds net exports: a real depreciation raises $NX$ and shifts IS right.</p>',
              id: '<p>Mundell-Fleming adalah IS-LM ekonomi terbuka ditambah satu kurva ketiga, semuanya di ruang $(Y, i)$:</p><table><tr><th>Kurva</th><th>Pasar</th><th>Kemiringan</th></tr><tr><td><span class="key">IS</span></td><td>Barang, kini incl. $NX(e,Y)$</td><td>menurun</td></tr><tr><td><span class="key">LM</span></td><td>Uang</td><td>menaik</td></tr><tr><td><span class="key">BP</span></td><td>Neraca pembayaran</td><td>tergantung mobilitas</td></tr></table><p>IS ekonomi terbuka menambahkan ekspor neto: depresiasi riil menaikkan $NX$ dan menggeser IS ke kanan.</p>'
            },
            chart: MF_BASE
          },
          {
            title: { en: 'The BP curve and capital mobility', id: 'Kurva BP dan mobilitas modal' },
            html: {
              en: '<p>The <span class="key">BP curve</span> traces $(Y,i)$ pairs where the BOP is balanced. Higher $Y$ raises imports (CA worsens); a higher $i$ attracts capital inflows (KA improves) to offset it — so BP slopes <em>upward</em>. Its steepness depends on how responsive capital is:</p><ul><li><span class="key">Perfect mobility</span>: BP horizontal at $i=i^*$.</li><li><span class="key">Imperfect mobility</span>: BP upward-sloping.</li><li><span class="key">Zero mobility</span>: BP vertical (only $Y$ that balances CA).</li></ul>',
              id: '<p><span class="key">Kurva BP</span> melacak pasangan $(Y,i)$ di mana BOP seimbang. $Y$ lebih tinggi menaikkan impor (CA memburuk); $i$ lebih tinggi menarik arus masuk modal (KA membaik) untuk mengimbanginya — jadi BP <em>menaik</em>. Kecuramannya tergantung seberapa responsif modal:</p><ul><li><span class="key">Mobilitas sempurna</span>: BP horizontal di $i=i^*$.</li><li><span class="key">Mobilitas tidak sempurna</span>: BP menaik.</li><li><span class="key">Mobilitas nol</span>: BP vertikal (hanya $Y$ yang menyeimbangkan CA).</li></ul>'
            },
            chart: BP_SLOPE
          }
        ]
      },

      /* ---- Section 4: policy under floating ---- */
      {
        heading: { en: 'Policy under floating exchange rates', id: 'Kebijakan pada nilai tukar mengambang' },
        num: '4',
        cards: [
          {
            title: { en: 'Monetary expansion — effective', id: 'Ekspansi moneter — efektif' },
            html: {
              en: '<p>Assume perfect mobility, floating rate. Monetary expansion shifts <span class="key">LM right</span> ⇒ $i$ falls below $i^*$ ⇒ capital outflow ⇒ the currency <span class="key">depreciates</span> ⇒ $NX$ rises ⇒ <span class="key">IS shifts right</span> until $i$ returns to $i^*$ at a higher $Y$.</p><div class="tip">Under floating, <strong>monetary policy is powerful</strong> — it works through the exchange-rate (export) channel, reinforced rather than offset.</div>',
              id: '<p>Asumsikan mobilitas sempurna, nilai tukar mengambang. Ekspansi moneter menggeser <span class="key">LM ke kanan</span> ⇒ $i$ turun di bawah $i^*$ ⇒ arus keluar modal ⇒ mata uang <span class="key">terdepresiasi</span> ⇒ $NX$ naik ⇒ <span class="key">IS bergeser ke kanan</span> hingga $i$ kembali ke $i^*$ pada $Y$ lebih tinggi.</p><div class="tip">Pada mengambang, <strong>kebijakan moneter ampuh</strong> — bekerja lewat jalur nilai tukar (ekspor), diperkuat bukan diredam.</div>'
            },
            chart: MF_FLOAT_MONEY
          },
          {
            title: { en: 'Fiscal expansion — ineffective', id: 'Ekspansi fiskal — tidak efektif' },
            html: {
              en: '<p>Fiscal expansion shifts <span class="key">IS right</span> ⇒ $i$ rises above $i^*$ ⇒ capital inflow ⇒ the currency <span class="key">appreciates</span> ⇒ $NX$ falls ⇒ <span class="key">IS shifts back</span> to its start. $Y$ is unchanged.</p><div class="note">Fiscal policy is <strong>crowded out by the exchange rate</strong> under floating: higher $G$ simply replaces net exports one-for-one.</div>',
              id: '<p>Ekspansi fiskal menggeser <span class="key">IS ke kanan</span> ⇒ $i$ naik di atas $i^*$ ⇒ arus masuk modal ⇒ mata uang <span class="key">terapresiasi</span> ⇒ $NX$ turun ⇒ <span class="key">IS kembali</span> ke posisi awal. $Y$ tidak berubah.</p><div class="note">Kebijakan fiskal <strong>tergusur oleh nilai tukar</strong> pada mengambang: $G$ lebih tinggi sekadar menggantikan ekspor neto satu lawan satu.</div>'
            },
            chart: MF_FLOAT_FISCAL
          }
        ]
      },

      /* ---- Section 5: policy under fixed ---- */
      {
        heading: { en: 'Policy under fixed exchange rates', id: 'Kebijakan pada nilai tukar tetap' },
        num: '5',
        cards: [
          {
            title: { en: 'Monetary expansion — ineffective', id: 'Ekspansi moneter — tidak efektif' },
            html: {
              en: '<p>To defend the peg the central bank must keep $i=i^*$. Monetary expansion shifts <span class="key">LM right</span> ⇒ $i$ falls ⇒ capital outflow ⇒ to defend the peg the bank <span class="key">sells reserves</span>, which contracts the money supply ⇒ <span class="key">LM shifts back</span>. $Y$ unchanged.</p><div class="note">Under a fixed rate the central bank <strong>loses control of the money supply</strong> — monetary policy is impotent.</div>',
              id: '<p>Untuk mempertahankan patokan, bank sentral harus menjaga $i=i^*$. Ekspansi moneter menggeser <span class="key">LM ke kanan</span> ⇒ $i$ turun ⇒ arus keluar modal ⇒ untuk membela patokan bank <span class="key">menjual cadangan</span>, yang mengontraksi jumlah uang ⇒ <span class="key">LM kembali</span>. $Y$ tidak berubah.</p><div class="note">Pada nilai tukar tetap bank sentral <strong>kehilangan kendali atas jumlah uang</strong> — kebijakan moneter tak berdaya.</div>'
            },
            chart: MF_FIXED_MONEY
          },
          {
            title: { en: 'Fiscal expansion — very effective', id: 'Ekspansi fiskal — sangat efektif' },
            html: {
              en: '<p>Fiscal expansion shifts <span class="key">IS right</span> ⇒ $i$ rises above $i^*$ ⇒ capital inflow ⇒ to hold the peg the bank <span class="key">buys foreign exchange</span>, expanding the money supply ⇒ <span class="key">LM shifts right</span> too ⇒ $Y$ rises strongly with no crowding out.</p><div class="tip">Mirror image of the floating case: under a fixed rate <strong>fiscal policy is maximally effective</strong>, monetary policy is dead.</div>',
              id: '<p>Ekspansi fiskal menggeser <span class="key">IS ke kanan</span> ⇒ $i$ naik di atas $i^*$ ⇒ arus masuk modal ⇒ untuk menjaga patokan bank <span class="key">membeli valuta asing</span>, memperbesar jumlah uang ⇒ <span class="key">LM juga bergeser ke kanan</span> ⇒ $Y$ naik kuat tanpa penggusuran.</p><div class="tip">Cermin dari kasus mengambang: pada nilai tukar tetap <strong>kebijakan fiskal maksimal efektif</strong>, kebijakan moneter mati.</div>'
            },
            chart: MF_FIXED_FISCAL
          },
          {
            title: { en: 'The policy-effectiveness table', id: 'Tabel efektivitas kebijakan' },
            html: {
              en: '<p>The single most testable result of the week:</p><table><tr><th>Regime</th><th>Monetary</th><th>Fiscal</th></tr><tr><td><span class="key">Floating</span></td><td>Effective</td><td>Ineffective</td></tr><tr><td><span class="key">Fixed</span></td><td>Ineffective</td><td>Effective</td></tr></table><div class="tip">Memorise the diagonal: floating ⇒ money works; fixed ⇒ fiscal works. (All under perfect capital mobility.)</div>',
              id: '<p>Hasil paling sering diuji minggu ini:</p><table><tr><th>Rezim</th><th>Moneter</th><th>Fiskal</th></tr><tr><td><span class="key">Mengambang</span></td><td>Efektif</td><td>Tidak efektif</td></tr><tr><td><span class="key">Tetap</span></td><td>Tidak efektif</td><td>Efektif</td></tr></table><div class="tip">Hafalkan diagonalnya: mengambang ⇒ moneter bekerja; tetap ⇒ fiskal bekerja. (Semua pada mobilitas modal sempurna.)</div>'
            }
          }
        ]
      },

      /* ---- Section 6: trilemma & regimes ---- */
      {
        heading: { en: 'The trilemma & exchange-rate regimes', id: 'Trilema & rezim nilai tukar' },
        num: '6',
        cards: [
          {
            title: { en: 'The impossible trinity', id: 'Trinitas mustahil' },
            html: {
              en: '<p>The <span class="key">policy trilemma</span> says a country can have at most <strong>two</strong> of these three:</p><ol><li>Free capital mobility</li><li>A fixed exchange rate</li><li>Independent monetary policy</li></ol><table><tr><th>Choose</th><th>Give up</th><th>Example</th></tr><tr><td>Fixed + mobility</td><td>Monetary independence</td><td>Hong Kong board, Eurozone</td></tr><tr><td>Mobility + independence</td><td>Fixed rate (must float)</td><td>US, UK, Indonesia (managed float)</td></tr><tr><td>Fixed + independence</td><td>Mobility (capital controls)</td><td>China (historic), Bretton Woods</td></tr></table>',
              id: '<p><span class="key">Trilema kebijakan</span> menyatakan sebuah negara paling banyak bisa memiliki <strong>dua</strong> dari tiga ini:</p><ol><li>Mobilitas modal bebas</li><li>Nilai tukar tetap</li><li>Kebijakan moneter independen</li></ol><table><tr><th>Pilih</th><th>Korbankan</th><th>Contoh</th></tr><tr><td>Tetap + mobilitas</td><td>Independensi moneter</td><td>Currency board Hong Kong, Zona Euro</td></tr><tr><td>Mobilitas + independensi</td><td>Nilai tukar tetap (harus mengambang)</td><td>AS, Inggris, Indonesia (mengambang terkelola)</td></tr><tr><td>Tetap + independensi</td><td>Mobilitas (kontrol modal)</td><td>Tiongkok (historis), Bretton Woods</td></tr></table>'
            },
            chart: TRILEMMA
          },
          {
            title: { en: 'The regime spectrum', id: 'Spektrum rezim' },
            html: {
              en: '<p>Exchange-rate regimes run from <span class="key">hard pegs</span> (dollarization, currency board) through conventional and crawling pegs to a <span class="key">managed float</span> and finally a <span class="key">free float</span>. The trade-off is <em>credibility/stability</em> versus <em>flexibility/shock absorption</em>.</p><div class="note">Indonesia ran a managed/crawling peg before 1997 and moved to a <span class="key">managed float</span> after the Asian crisis — a direct response to the trilemma with an open capital account.</div>',
              id: '<p>Rezim nilai tukar berentang dari <span class="key">patokan keras</span> (dolarisasi, currency board) melalui patokan konvensional dan merangkak hingga <span class="key">mengambang terkelola</span> dan akhirnya <span class="key">mengambang bebas</span>. Trade-off-nya adalah <em>kredibilitas/stabilitas</em> versus <em>fleksibilitas/penyerapan guncangan</em>.</p><div class="note">Indonesia menjalankan patokan terkelola/merangkak sebelum 1997 dan beralih ke <span class="key">mengambang terkelola</span> setelah krisis Asia — respons langsung terhadap trilema dengan akun modal terbuka.</div>'
            },
            chart: ER_REGIMES
          }
        ]
      },

      /* ---- Section 7: capital flows, crisis, controls ---- */
      {
        heading: { en: 'Capital flows: benefits, risks & crises', id: 'Arus modal: manfaat, risiko & krisis' },
        num: '7',
        cards: [
          {
            title: { en: 'Benefits vs risks of open capital accounts', id: 'Manfaat vs risiko akun modal terbuka' },
            html: {
              en: '<p><span class="key">Benefits</span>: access to foreign savings, finance for investment, consumption smoothing, international risk-sharing, and market discipline on policy.</p><p><span class="key">Risks</span>: <span class="key">sudden stops</span> and reversals, currency crises, contagion, and asset bubbles. <span class="key">“Hot money”</span> — short-term portfolio flows — is volatile and reverses fast, whereas <span class="key">FDI</span> is stable and sticky.</p>',
              id: '<p><span class="key">Manfaat</span>: akses ke tabungan asing, pembiayaan investasi, pemerataan konsumsi, pembagian risiko internasional, dan disiplin pasar terhadap kebijakan.</p><p><span class="key">Risiko</span>: <span class="key">penghentian mendadak</span> (sudden stop) dan pembalikan, krisis mata uang, penularan, dan gelembung aset. <span class="key">“Uang panas”</span> — arus portofolio jangka pendek — volatil dan cepat berbalik, sedangkan <span class="key">FDI</span> stabil dan lengket.</p>'
            },
            chart: FLOW_TYPES
          },
          {
            title: { en: 'Case: the 1997-98 Asian financial crisis', id: 'Kasus: krisis keuangan Asia 1997-98' },
            html: {
              en: '<p>Thailand’s baht peg was attacked in <span class="key">July 1997</span>; the peg broke and capital fled. Contagion hit Indonesia, Korea and Malaysia. The <span class="key">rupiah collapsed from roughly Rp 2,400 to about Rp 16,000 per USD</span>, forcing IMF programs.</p><div class="note">Lesson — the trilemma in action: a <span class="key">fixed peg + open capital account + large short-term foreign debt</span> is a recipe for a currency crisis. After the crisis Indonesia floated.</div>',
              id: '<p>Patokan baht Thailand diserang pada <span class="key">Juli 1997</span>; patokan jebol dan modal kabur. Penularan melanda Indonesia, Korea, dan Malaysia. <span class="key">Rupiah ambruk dari sekitar Rp 2.400 menjadi sekitar Rp 16.000 per USD</span>, memaksa program IMF.</p><div class="note">Pelajaran — trilema dalam praktik: <span class="key">patokan tetap + akun modal terbuka + utang luar negeri jangka pendek besar</span> adalah resep krisis mata uang. Setelah krisis Indonesia mengambangkan rupiah.</div>'
            },
            chart: RUPIAH_CRISIS
          },
          {
            title: { en: 'Capital controls & macroprudential policy', id: 'Kontrol modal & kebijakan makroprudensial' },
            html: {
              en: '<p>Tools to tame volatile flows include <span class="key">taxes on inflows</span> (Chile’s <em>encaje</em> — an unremunerated reserve requirement in the 1990s), <span class="key">minimum holding periods</span>, and broader <span class="key">macroprudential measures</span>. Bank Indonesia has used holding-period rules on SBI and reserve requirements.</p><div class="tip">The IMF’s revised <span class="key">“institutional view”</span> now accepts <span class="key">capital-flow management measures (CFMs)</span> in certain circumstances — a shift from earlier orthodoxy.</div>',
              id: '<p>Alat untuk menjinakkan arus volatil mencakup <span class="key">pajak atas arus masuk</span> (<em>encaje</em> Chile — syarat cadangan tanpa bunga pada 1990-an), <span class="key">periode penahanan minimum</span>, dan <span class="key">langkah makroprudensial</span> yang lebih luas. Bank Indonesia pernah memakai aturan holding-period SBI dan giro wajib minimum.</p><div class="tip"><span class="key">“Pandangan institusional”</span> IMF yang direvisi kini menerima <span class="key">langkah pengelolaan arus modal (CFM)</span> dalam keadaan tertentu — pergeseran dari ortodoksi sebelumnya.</div>'
            }
          }
        ]
      }
    ],

    /* ---------- formulas ---------- */
    formulas: [
      {
        heading: { en: 'Core formulas', id: 'Rumus inti' },
        num: 'F',
        cards: [
          {
            title: { en: 'Balance-of-payments identity', id: 'Identitas neraca pembayaran' },
            html: {
              en: '<div class="formula">CA + KA + \\Delta Reserves = 0</div><p>$CA$ = net exports + net income + transfers; $KA$ = net capital inflows. Under a clean float $\\Delta Reserves=0$ so $CA=-KA$.</p>',
              id: '<div class="formula">CA + KA + \\Delta Cadangan = 0</div><p>$CA$ = ekspor neto + pendapatan neto + transfer; $KA$ = arus masuk modal neto. Pada mengambang murni $\\Delta Cadangan=0$ sehingga $CA=-KA$.</p>'
            }
          },
          {
            title: { en: 'Uncovered interest parity', id: 'Paritas suku bunga tak tertutup' },
            html: {
              en: '<div class="formula">i = i^* + \\frac{E^e - E}{E}</div><p>Domestic return = foreign return + expected depreciation. With perfect mobility and static expectations it reduces to $i=i^*$.</p>',
              id: '<div class="formula">i = i^* + \\frac{E^e - E}{E}</div><p>Imbal hasil domestik = imbal hasil asing + ekspektasi depresiasi. Dengan mobilitas sempurna dan ekspektasi statis menjadi $i=i^*$.</p>'
            }
          },
          {
            title: { en: 'Open-economy IS (net exports)', id: 'IS ekonomi terbuka (ekspor neto)' },
            html: {
              en: '<div class="formula">Y = C(Y-T) + I(i) + G + NX(e, Y)</div><p>A real depreciation (higher $e$) raises $NX$ and shifts IS right; this is the channel that makes monetary policy work under floating.</p>',
              id: '<div class="formula">Y = C(Y-T) + I(i) + G + NX(e, Y)</div><p>Depresiasi riil ($e$ naik) menaikkan $NX$ dan menggeser IS ke kanan; inilah jalur yang membuat kebijakan moneter ampuh pada mengambang.</p>'
            }
          },
          {
            title: { en: 'BP-equilibrium condition', id: 'Kondisi keseimbangan BP' },
            html: {
              en: '<div class="formula">NX(e,Y) + KA(i - i^*) = 0</div><p>Defines the BP curve. Perfect mobility makes $KA$ infinitely elastic ⇒ BP horizontal at $i=i^*$.</p>',
              id: '<div class="formula">NX(e,Y) + KA(i - i^*) = 0</div><p>Mendefinisikan kurva BP. Mobilitas sempurna membuat $KA$ elastis tak hingga ⇒ BP horizontal di $i=i^*$.</p>'
            }
          }
        ]
      }
    ],

    /* ---------- graphs ---------- */
    graphs: [
      {
        heading: { en: 'Key diagrams', id: 'Diagram utama' },
        num: 'G',
        cards: [
          {
            title: { en: 'UIP in the FX market', id: 'UIP di pasar valas' },
            html: {
              en: '<p>Domestic return is flat at $i$; the foreign-return curve slopes down in $E$ because a stronger home currency today implies more expected depreciation. Their intersection sets the equilibrium $E$.</p>',
              id: '<p>Imbal hasil domestik datar di $i$; kurva imbal hasil asing menurun terhadap $E$ karena mata uang domestik yang lebih kuat hari ini menyiratkan ekspektasi depresiasi lebih besar. Perpotongannya menetapkan $E$ keseimbangan.</p>'
            },
            chart: UIP_CHART
          },
          {
            title: { en: 'BP curve & capital mobility', id: 'Kurva BP & mobilitas modal' },
            html: {
              en: '<p>Draw three BP cases: horizontal (perfect mobility, $i=i^*$), upward (imperfect), vertical (zero). The flatter BP is, the more mobile capital is.</p>',
              id: '<p>Gambar tiga kasus BP: horizontal (mobilitas sempurna, $i=i^*$), menaik (tidak sempurna), vertikal (nol). Makin datar BP, makin mobile modal.</p>'
            },
            chart: BP_SLOPE
          },
          {
            title: { en: 'Mundell-Fleming equilibrium', id: 'Keseimbangan Mundell-Fleming' },
            html: {
              en: '<p>IS, LM and BP intersect at a single $(Y^*, i^*)$. All policy experiments are shifts of IS and/or LM relative to a fixed horizontal BP.</p>',
              id: '<p>IS, LM, dan BP berpotongan di satu $(Y^*, i^*)$. Semua eksperimen kebijakan adalah pergeseran IS dan/atau LM relatif terhadap BP horizontal yang tetap.</p>'
            },
            chart: MF_BASE
          },
          {
            title: { en: 'Floating + monetary expansion', id: 'Mengambang + ekspansi moneter' },
            html: {
              en: '<p>LM right → $i$ falls → depreciation → IS right → higher $Y$ at $i=i^*$. Monetary policy effective.</p>',
              id: '<p>LM ke kanan → $i$ turun → depresiasi → IS ke kanan → $Y$ lebih tinggi di $i=i^*$. Kebijakan moneter efektif.</p>'
            },
            chart: MF_FLOAT_MONEY
          },
          {
            title: { en: 'Floating + fiscal expansion', id: 'Mengambang + ekspansi fiskal' },
            html: {
              en: '<p>IS right → $i$ rises → appreciation → IS back. $Y$ unchanged — fiscal policy ineffective.</p>',
              id: '<p>IS ke kanan → $i$ naik → apresiasi → IS kembali. $Y$ tetap — kebijakan fiskal tidak efektif.</p>'
            },
            chart: MF_FLOAT_FISCAL
          },
          {
            title: { en: 'Fixed + monetary expansion', id: 'Tetap + ekspansi moneter' },
            html: {
              en: '<p>LM right → $i$ falls → outflow → reserves sold → LM back. $Y$ unchanged — monetary policy ineffective.</p>',
              id: '<p>LM ke kanan → $i$ turun → arus keluar → cadangan dijual → LM kembali. $Y$ tetap — kebijakan moneter tidak efektif.</p>'
            },
            chart: MF_FIXED_MONEY
          },
          {
            title: { en: 'Fixed + fiscal expansion', id: 'Tetap + ekspansi fiskal' },
            html: {
              en: '<p>IS right → $i$ rises → inflow → FX bought → LM right. $Y$ rises strongly — fiscal policy very effective.</p>',
              id: '<p>IS ke kanan → $i$ naik → arus masuk → valas dibeli → LM ke kanan. $Y$ naik kuat — kebijakan fiskal sangat efektif.</p>'
            },
            chart: MF_FIXED_FISCAL
          },
          {
            title: { en: 'The impossible trinity', id: 'Trinitas mustahil' },
            html: {
              en: '<p>Each side of the triangle is a feasible pair; the opposite corner is what you sacrifice. Place real countries on the sides.</p>',
              id: '<p>Tiap sisi segitiga adalah pasangan yang layak; sudut seberang adalah yang dikorbankan. Tempatkan negara nyata pada sisi-sisinya.</p>'
            },
            chart: TRILEMMA
          },
          {
            title: { en: 'Exchange-rate regime spectrum', id: 'Spektrum rezim nilai tukar' },
            html: {
              en: '<p>From dollarization (most rigid) to free float (most flexible). Rigidity buys credibility but sacrifices shock absorption.</p>',
              id: '<p>Dari dolarisasi (paling kaku) ke mengambang bebas (paling fleksibel). Kekakuan membeli kredibilitas tapi mengorbankan penyerapan guncangan.</p>'
            },
            chart: ER_REGIMES
          },
          {
            title: { en: 'Flow volatility: FDI vs hot money', id: 'Volatilitas arus: FDI vs uang panas' },
            html: {
              en: '<p>FDI is stable; portfolio equity and especially “hot money” reverse quickly — the source of sudden-stop risk.</p>',
              id: '<p>FDI stabil; ekuitas portofolio dan terutama “uang panas” cepat berbalik — sumber risiko sudden stop.</p>'
            },
            chart: FLOW_TYPES
          },
          {
            title: { en: 'Rupiah collapse, 1997-98', id: 'Keruntuhan rupiah, 1997-98' },
            html: {
              en: '<p>After the peg broke, the rupiah fell from ~Rp 2,400 to ~Rp 16,000 per USD — the trilemma’s cost made concrete.</p>',
              id: '<p>Setelah patokan jebol, rupiah jatuh dari ~Rp 2.400 ke ~Rp 16.000 per USD — ongkos trilema yang nyata.</p>'
            },
            chart: RUPIAH_CRISIS
          }
        ]
      }
    ],

    /* ---------- quiz ---------- */
    quiz: [
      {
        type: 'concept',
        q: {
          en: 'State the policy trilemma and name the three feasible pairs with a real-world example of each.',
          id: 'Nyatakan trilema kebijakan dan sebutkan tiga pasangan yang layak beserta contoh nyata masing-masing.'
        },
        context: {
          en: 'The trilemma constrains every open-economy policymaker.',
          id: 'Trilema membatasi setiap pembuat kebijakan ekonomi terbuka.'
        },
        answer: [
          { en: 'A country can have at most TWO of: (1) free capital mobility, (2) fixed exchange rate, (3) independent monetary policy.', id: 'Sebuah negara paling banyak memiliki DUA dari: (1) mobilitas modal bebas, (2) nilai tukar tetap, (3) kebijakan moneter independen.' },
          { en: 'Fixed + mobility (give up monetary independence): Hong Kong currency board, the Eurozone.', id: 'Tetap + mobilitas (korbankan independensi moneter): currency board Hong Kong, Zona Euro.' },
          { en: 'Mobility + monetary independence (must float): US, UK, Indonesia’s managed float.', id: 'Mobilitas + independensi moneter (harus mengambang): AS, Inggris, mengambang terkelola Indonesia.' },
          { en: 'Fixed + monetary independence (impose capital controls): China historically, the Bretton Woods system.', id: 'Tetap + independensi moneter (terapkan kontrol modal): Tiongkok historis, sistem Bretton Woods.' }
        ],
        tip: { en: 'Pick a corner to SACRIFICE — you keep the two sides next to it.', id: 'Pilih satu sudut untuk DIKORBANKAN — Anda menyimpan dua sisi di sebelahnya.' }
      },
      {
        type: 'scenario',
        q: {
          en: 'Indonesia floats with perfect capital mobility. Trace, step by step, the effect of a monetary expansion on i, the exchange rate, NX, and Y.',
          id: 'Indonesia mengambang dengan mobilitas modal sempurna. Telusuri langkah demi langkah efek ekspansi moneter terhadap i, nilai tukar, NX, dan Y.'
        },
        answer: [
          { en: '1) LM shifts right, pushing i below i*.', id: '1) LM bergeser ke kanan, mendorong i di bawah i*.' },
          { en: '2) i < i* triggers capital outflow; the rupiah depreciates.', id: '2) i < i* memicu arus keluar modal; rupiah terdepresiasi.' },
          { en: '3) Depreciation raises net exports NX, shifting IS right.', id: '3) Depresiasi menaikkan ekspor neto NX, menggeser IS ke kanan.' },
          { en: '4) IS shifts right until i returns to i*; equilibrium settles at a HIGHER Y. Monetary policy is effective under floating.', id: '4) IS bergeser ke kanan hingga i kembali ke i*; keseimbangan berhenti pada Y LEBIH TINGGI. Kebijakan moneter efektif pada mengambang.' }
        ],
        tip: { en: 'Under floating the FX channel reinforces monetary policy instead of offsetting it.', id: 'Pada mengambang, jalur valas memperkuat kebijakan moneter, bukan mengimbanginya.' }
      },
      {
        type: 'scenario',
        q: {
          en: 'A country pegs its currency with perfect capital mobility and runs a fiscal expansion. What happens to the money supply and to Y, and why is monetary policy powerless here?',
          id: 'Sebuah negara mematok mata uangnya dengan mobilitas modal sempurna dan menjalankan ekspansi fiskal. Apa yang terjadi pada jumlah uang dan Y, dan mengapa kebijakan moneter tak berdaya di sini?'
        },
        answer: [
          { en: 'Fiscal expansion shifts IS right, pushing i above i*.', id: 'Ekspansi fiskal menggeser IS ke kanan, mendorong i di atas i*.' },
          { en: 'i > i* attracts capital inflows; to hold the peg the central bank BUYS foreign exchange, which expands the money supply.', id: 'i > i* menarik arus masuk modal; untuk menjaga patokan bank sentral MEMBELI valas, yang memperbesar jumlah uang.' },
          { en: 'The rising money supply shifts LM right too, so Y rises strongly with no exchange-rate crowding out — fiscal policy is very effective.', id: 'Jumlah uang yang naik turut menggeser LM ke kanan, sehingga Y naik kuat tanpa penggusuran nilai tukar — kebijakan fiskal sangat efektif.' },
          { en: 'Monetary policy is powerless because defending the peg forces the money supply to whatever level keeps i = i*; the bank cannot set it independently.', id: 'Kebijakan moneter tak berdaya karena membela patokan memaksa jumlah uang ke tingkat berapa pun yang menjaga i = i*; bank tidak dapat menetapkannya secara independen.' }
        ],
        tip: { en: 'Fixed rate = money supply is endogenous (it follows reserves).', id: 'Nilai tukar tetap = jumlah uang endogen (mengikuti cadangan).' }
      },
      {
        type: 'quant',
        q: {
          en: 'The foreign rate is i* = 4%. Investors expect the rupiah to depreciate by 6% over the year. By UIP, what domestic rate i clears the FX market, and what happens to capital flows if BI sets i = 8%?',
          id: 'Suku bunga asing i* = 4%. Investor memperkirakan rupiah terdepresiasi 6% setahun. Menurut UIP, suku bunga domestik i berapa yang menyeimbangkan pasar valas, dan apa yang terjadi pada arus modal jika BI menetapkan i = 8%?'
        },
        answer: [
          { en: 'UIP: i = i* + expected depreciation = 4% + 6% = 10%. At i = 10% domestic and foreign returns are equal, so flows are balanced.', id: 'UIP: i = i* + ekspektasi depresiasi = 4% + 6% = 10%. Pada i = 10% imbal hasil domestik dan asing setara, sehingga arus seimbang.' },
          { en: 'If BI sets i = 8% < 10%, the domestic return is too LOW relative to UIP, so investors prefer foreign assets — capital flows OUT and the rupiah faces depreciation pressure.', id: 'Jika BI menetapkan i = 8% < 10%, imbal hasil domestik terlalu RENDAH relatif terhadap UIP, jadi investor memilih aset asing — modal mengalir KELUAR dan rupiah menghadapi tekanan depresiasi.' }
        ],
        tip: { en: 'Compare i with i* + expected depreciation; whichever side pays more attracts the capital.', id: 'Bandingkan i dengan i* + ekspektasi depresiasi; sisi yang membayar lebih menarik modalnya.' }
      },
      {
        type: 'application',
        q: {
          en: 'Why did the 1997-98 Asian crisis hit pegged economies with open capital accounts so hard, and how does it illustrate the trilemma?',
          id: 'Mengapa krisis Asia 1997-98 memukul ekonomi berpatokan dengan akun modal terbuka begitu keras, dan bagaimana ia mengilustrasikan trilema?'
        },
        answer: [
          { en: 'These economies tried to keep BOTH a fixed peg AND open capital flows while also wanting monetary autonomy — an infeasible combination under the trilemma.', id: 'Ekonomi ini berusaha mempertahankan KEDUANYA patokan tetap DAN arus modal terbuka sambil juga menginginkan otonomi moneter — kombinasi yang tidak layak menurut trilema.' },
          { en: 'Large short-term foreign (hot-money) debt made them fragile; when confidence broke, capital suddenly stopped and reversed.', id: 'Utang luar negeri jangka pendek (uang panas) yang besar membuat mereka rapuh; saat kepercayaan runtuh, modal mendadak berhenti dan berbalik.' },
          { en: 'Defending the peg drained reserves until it broke (Thailand, July 1997); contagion spread to Indonesia, Korea, Malaysia. The rupiah fell from ~2,400 to ~16,000 per USD.', id: 'Membela patokan menguras cadangan hingga jebol (Thailand, Juli 1997); penularan menyebar ke Indonesia, Korea, Malaysia. Rupiah jatuh dari ~2.400 ke ~16.000 per USD.' },
          { en: 'Lesson: with open capital, you cannot durably hold a peg AND run independent policy — most of the region moved to managed floats afterward.', id: 'Pelajaran: dengan modal terbuka, Anda tak bisa menahan patokan secara langgeng SEKALIGUS menjalankan kebijakan independen — sebagian besar kawasan beralih ke mengambang terkelola setelahnya.' }
        ],
        tip: { en: 'Fixed peg + open capital + short-term FX debt = crisis kindling.', id: 'Patokan tetap + modal terbuka + utang valas jangka pendek = bahan bakar krisis.' }
      },
      {
        type: 'tutorial',
        q: {
          en: 'Fill in the Mundell-Fleming policy-effectiveness table and explain the single mechanism that drives the whole diagonal.',
          id: 'Lengkapi tabel efektivitas kebijakan Mundell-Fleming dan jelaskan satu mekanisme yang menggerakkan seluruh diagonalnya.'
        },
        answer: [
          { en: 'Floating: monetary EFFECTIVE, fiscal INEFFECTIVE. Fixed: monetary INEFFECTIVE, fiscal EFFECTIVE.', id: 'Mengambang: moneter EFEKTIF, fiskal TIDAK EFEKTIF. Tetap: moneter TIDAK EFEKTIF, fiskal EFEKTIF.' },
          { en: 'Mechanism: with perfect mobility i is pinned to i*. Under floating the exchange rate adjusts — it amplifies monetary policy (depreciation boosts NX) but crowds out fiscal policy (appreciation cuts NX).', id: 'Mekanisme: dengan mobilitas sempurna i terpaku ke i*. Pada mengambang nilai tukar menyesuaikan — memperkuat kebijakan moneter (depresiasi mendorong NX) tetapi menggusur kebijakan fiskal (apresiasi memotong NX).' },
          { en: 'Under a fixed rate the money supply adjusts instead — reserve flows make monetary policy self-reversing but let fiscal policy drag LM along with it.', id: 'Pada nilai tukar tetap jumlah uang yang menyesuaikan — arus cadangan membuat kebijakan moneter membatalkan dirinya tetapi membiarkan kebijakan fiskal menarik LM bersamanya.' }
        ],
        tip: { en: 'Ask: what is free to adjust — the exchange rate (floating) or the money supply (fixed)? That tells you which policy survives.', id: 'Tanyakan: apa yang bebas menyesuaikan — nilai tukar (mengambang) atau jumlah uang (tetap)? Itu menentukan kebijakan mana yang bertahan.' }
      }
    ]
  };
})();
