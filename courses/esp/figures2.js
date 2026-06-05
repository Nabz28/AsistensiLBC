/* ============================================================================
   ESP — Interactive figures, part 2 of 2
   (social security · intertemporal choice · intergovernmental grants · debt)
   Closed-form geometry; tangencies solved analytically (Cobb–Douglas).
   ============================================================================ */
(function () {
  'use strict';
  var F = window.FigLab; if (!F) return;
  var C = F.colors;
  function rp(v, d) { var k = Math.pow(10, d || 2); return Math.round(v * k) / k; }

  /* ---- FIG 7: Social Security benefit formula (PIA), piecewise-linear ------
     Bend points b1=767, b2=4624 (Rosen & Gayer, 2012). PIA = .90·min(AIME,b1) + .32·(mid) + .15·(top).
     The kinks are EXACT; replacement rate falls as AIME rises (progressive). */
  F.register({
    id: 'ss-pia',
    title: { en: 'Social Security benefit (PIA): a progressive kinked formula', id: 'Manfaat pensiun (PIA): rumus berkelok progresif' },
    note: { en: 'Marginal replacement falls at each bend point (90% → 32% → 15%), so low earners get a <i>higher share</i> of their earnings back. The line is exactly kinked at the 2012 bend points $767 and $4 624.',
            id: 'Penggantian marginal turun di tiap titik kelok (90% → 32% → 15%), sehingga pekerja berpendapatan rendah menerima <i>porsi lebih besar</i>. Kelok tepat di titik kelok 2012, $767 dan $4.624.' },
    params: [
      { key: 'aime', label: { en: 'AIME (avg monthly earnings)', id: 'AIME (rerata bulanan)' }, min: 0, max: 6000, step: 50, value: 2500, fmt: function (v) { return '$' + v; } }
    ],
    scenarios: [
      { label: { en: 'Low earner', id: 'Pendapatan rendah' }, set: { aime: 400 },
        why: { en: 'Below the first bend point, every dollar of AIME is replaced at 90% — a low earner gets back almost all of their pre-retirement earnings. This is the heart of Social Security’s progressivity.',
               id: 'Di bawah kelok pertama, tiap dolar AIME diganti 90% — pekerja berpendapatan rendah menerima kembali hampir seluruh penghasilannya. Inilah inti progresivitas jaminan sosial.' } },
      { label: { en: 'Middle earner', id: 'Pendapatan menengah' }, set: { aime: 2500 },
        why: { en: 'Between the two bend points only 32¢ of each extra AIME dollar is replaced, so the replacement RATE has already fallen well below 90% — the benefit rises more slowly than earnings.',
               id: 'Di antara dua kelok, hanya 32¢ tiap dolar tambahan AIME yang diganti, jadi TINGKAT penggantian sudah jatuh jauh di bawah 90%.' } },
      { label: { en: 'High earner', id: 'Pendapatan tinggi' }, set: { aime: 5500 },
        why: { en: 'Above the second bend point only 15¢ of each extra dollar is replaced, so a high earner gets back a small SHARE of their earnings (even though the dollar benefit is the largest). The formula deliberately redistributes toward the bottom.',
               id: 'Di atas kelok kedua hanya 15¢ tiap dolar tambahan yang diganti, jadi pekerja berpendapatan tinggi menerima kembali PORSI kecil dari penghasilannya. Rumus ini sengaja meredistribusi ke bawah.' } }
    ],
    compute: function (p) {
      var b1 = 767, b2 = 4624, r1 = 0.90, r2 = 0.32, r3 = 0.15;
      function PIA(a) {
        var x = 0;
        x += r1 * Math.min(a, b1);
        if (a > b1) x += r2 * (Math.min(a, b2) - b1);
        if (a > b2) x += r3 * (a - b2);
        return x;
      }
      var pia1 = PIA(b1), pia2 = PIA(b2), piaMax = PIA(6000);
      var a = p.aime, pia = PIA(a);
      var rr = a > 0 ? pia / a : r1;
      return {
        axes: {
          x: { min: 0, max: 6000, label: 'AIME ($/mo)', ticks: [{ v: 767, label: '767' }, { v: 4624, label: '4624' }] },
          y: { min: 0, max: piaMax * 1.1, label: 'PIA ($/mo)' }
        },
        items: [
          { t: 'seg', pts: [[0, 0], [b1, pia1], [b2, pia2], [6000, piaMax]], color: C.accent, width: 2.6, label: 'PIA' },
          { t: 'vline', x: b1, color: C.muted, dash: true },
          { t: 'vline', x: b2, color: C.muted, dash: true },
          { t: 'point', x: b1, y: pia1, label: { en: '1st bend', id: 'kelok 1' }, dot: true, dx: 6, dy: -8, color: C.alt },
          { t: 'point', x: b2, y: pia2, label: { en: '2nd bend', id: 'kelok 2' }, dot: true, dx: -2, dy: -10, color: C.alt },
          { t: 'point', x: a, y: pia, label: 'you', guideX: '', guideY: '', dx: 8, dy: 14, color: C.ink }
        ],
        readout: [
          { label: 'AIME', value: '$' + rp(a) },
          { label: 'Benefit PIA', value: '$' + rp(pia), color: C.accent },
          { label: { en: 'Replacement rate', id: 'Tingkat penggantian' }, value: (rr * 100).toFixed(0) + '%', color: C.alt },
          { label: { en: 'Marginal band', id: 'Pita marginal' }, value: a <= b1 ? '90%' : (a <= b2 ? '32%' : '15%') }
        ],
        facts: { bend1: pia1, bend2: pia2, pia: pia, replacement: rr }
      };
    }
  });

  /* ---- FIG 8: Intertemporal budget & consumption smoothing ----------------
     Endowment A=(I0,I1). Budget c1=I1+(1+r)(I0-c0). Prices p0=1, p1=1/(1+r),
     wealth m=I0+I1/(1+r). Cobb–Douglas U=c0^β·c1^(1-β):
       c0*=β·m,  c1*=(1-β)·m·(1+r).  Tangency: MRS=(β/c0)(c1/(1-β))=(1+r). */
  F.register({
    id: 'intertemporal',
    title: { en: 'Consumption smoothing across time', id: 'Pemulusan konsumsi antarwaktu' },
    note: { en: 'The budget line has slope <b>−(1+r)</b> and passes through the endowment <b>A</b>. The optimum <b>E*</b> is where an indifference curve is <i>tangent</i> — there the marginal rate of substitution equals (1+r). Saving = I₀ − c₀*.',
            id: 'Garis anggaran berkemiringan <b>−(1+r)</b> dan melalui endowment <b>A</b>. Optimum <b>E*</b> di titik <i>singgung</i> kurva indiferen — di sana MRS = (1+r). Tabungan = I₀ − c₀*.' },
    params: [
      { key: 'r', label: { en: 'Interest rate r', id: 'Suku bunga r' }, min: 0, max: 1, step: 0.05, value: 0.25, fmt: function (v) { return (v * 100).toFixed(0) + '%'; } },
      { key: 'beta', label: { en: 'Taste for present β', id: 'Selera masa kini β' }, min: 0.2, max: 0.8, step: 0.05, value: 0.5, fmt: function (v) { return v.toFixed(2); } },
      { key: 'I0', label: { en: 'Income now I₀', id: 'Pendapatan kini I₀' }, min: 2, max: 8, step: 0.5, value: 6, fmt: function (v) { return v.toFixed(1); } },
      { key: 'I1', label: { en: 'Income later I₁', id: 'Pendapatan nanti I₁' }, min: 1, max: 8, step: 0.5, value: 3, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'A saver', id: 'Penabung' }, set: { I0: 7, I1: 2, beta: 0.45, r: 0.25 },
        why: { en: 'High income now plus patience (low taste for the present) puts the optimum LEFT of the endowment A: the person consumes less than I₀ today and lends the rest, earning (1+r). Saving = I₀ − c₀* > 0.',
               id: 'Pendapatan kini tinggi + sabar menempatkan optimum di KIRI endowment A: konsumsi kini < I₀ dan sisanya dipinjamkan, memperoleh (1+r). Tabungan > 0.' } },
      { label: { en: 'A borrower', id: 'Peminjam' }, set: { I0: 2.5, I1: 7, beta: 0.6, r: 0.25 },
        why: { en: 'Low income now but high future income (or impatience) puts the optimum RIGHT of A: the person consumes more than I₀ today by borrowing against future income, repaying (1+r) later. Saving < 0.',
               id: 'Pendapatan kini rendah tetapi nanti tinggi (atau tidak sabar) menempatkan optimum di KANAN A: konsumsi kini > I₀ dengan meminjam dari pendapatan masa depan. Tabungan < 0.' } },
      { label: { en: 'Interest rate rises', id: 'Suku bunga naik' }, set: { I0: 6, I1: 3, beta: 0.5, r: 0.8 },
        why: { en: 'A higher r steepens the budget line (slope −(1+r)) and pivots it through the unchanged endowment A. Saving now earns more — the substitution effect rewards saving today, raising future consumption (the income effect can partly offset for a saver).',
               id: 'r lebih tinggi membuat garis anggaran lebih curam (−(1+r)) dan berputar lewat endowment A yang tetap. Menabung kini lebih menguntungkan — efek substitusi mendorong menabung.' } }
    ],
    compute: function (p) {
      var r = p.r, b = p.beta, I0 = p.I0, I1 = p.I1;
      var m = I0 + I1 / (1 + r);            // present-value wealth
      var c0 = b * m, c1 = (1 - b) * m * (1 + r);
      var Mint = m * (1 + r), Nint = m;     // c1-axis & c0-axis intercepts
      var U = Math.pow(c0, b) * Math.pow(c1, 1 - b);
      function ic(x) { return Math.pow(U / Math.pow(x, b), 1 / (1 - b)); } // indiff curve
      var x0 = Math.max(0.6, c0 * 0.45), x1 = Math.min(Nint * 0.99, c0 * 1.9);
      var saving = I0 - c0;
      return {
        axes: { x: { min: 0, max: Math.max(10, Nint * 1.05), label: { en: 'Consumption now c₀', id: 'Konsumsi kini c₀' } },
                y: { min: 0, max: Math.max(11, Mint * 1.05), label: { en: 'Consumption later c₁', id: 'Konsumsi nanti c₁' } } },
        items: [
          { t: 'line', p1: [0, Mint], p2: [Nint, 0], color: C.alt2, width: 2.2, label: { en: 'budget', id: 'anggaran' } },
          { t: 'curve', pts: F.sample(ic, x0, x1, 60), color: C.demand, width: 2.0, smooth: true, label: 'U' },
          { t: 'point', x: I0, y: I1, label: 'A', guideX: 'I₀', guideY: 'I₁', dx: 8, dy: -8, color: C.muted },
          { t: 'point', x: c0, y: c1, label: 'E*', guideX: 'c₀*', guideY: 'c₁*', dx: 8, dy: -8, color: C.ink },
          { t: 'arrow', p1: [I0, I1], p2: [c0, c1], color: '#777' }
        ],
        readout: [
          { label: 'c₀*', value: rp(c0) }, { label: 'c₁*', value: rp(c1) },
          { label: { en: 'Saving (I₀−c₀*)', id: 'Tabungan' }, value: rp(saving), color: saving >= 0 ? C.supply : C.demand },
          { label: { en: 'Status', id: 'Status' }, value: saving > 0.01 ? (window.FigLab && '') + 'saver' : (saving < -0.01 ? 'borrower' : 'neither') }
        ],
        facts: { wealth: m, c0: c0, c1: c1, saving: saving, slope: -(1 + r), mrs: (b / c0) * (c1 / (1 - b)) }
      };
    }
  });

  /* ---- FIG 9: Crowding out of private saving by Social Security -----------
     Actuarially-fair forced contribution T in period 0, repaid (1+r)T later.
     The endowment slides A→A' ALONG the same budget line, so the optimum E* is
     unchanged ⇒ private saving falls one-for-one (S → S−T). */
  F.register({
    id: 'ss-crowdout',
    title: { en: 'Social Security crowds out private saving', id: 'Jaminan sosial menggusur tabungan swasta' },
    note: { en: 'An actuarially-fair payroll tax moves the endowment from <b>A</b> to <b>A′</b> <i>along the same budget line</i>. The optimum doesn’t move, so households cut private saving by exactly the contribution — total saving is unchanged.',
            id: 'Iuran adil-aktuaria menggeser endowment <b>A</b>→<b>A′</b> <i>di garis anggaran yang sama</i>. Optimum tak bergerak, jadi rumah tangga memangkas tabungan swasta tepat sebesar iuran — total tabungan tetap.' },
    params: [
      { key: 'r', label: { en: 'Interest rate r', id: 'Suku bunga r' }, min: 0.05, max: 0.8, step: 0.05, value: 0.25, fmt: function (v) { return (v * 100).toFixed(0) + '%'; } },
      { key: 'T', label: { en: 'Forced contribution T', id: 'Iuran wajib T' }, min: 0, max: 4, step: 0.25, value: 2, fmt: function (v) { return v.toFixed(2); } }
    ],
    scenarios: [
      { label: { en: 'No pension', id: 'Tanpa pensiun' }, set: { r: 0.25, T: 0 },
        why: { en: 'Baseline: the household saves S = I₀ − c₀* on its own to fund retirement.',
               id: 'Dasar: rumah tangga menabung sendiri S = I₀ − c₀* untuk pensiun.' } },
      { label: { en: 'Small pension', id: 'Pensiun kecil' }, set: { r: 0.25, T: 1 },
        why: { en: 'A small actuarially-fair contribution slides the endowment a little along the SAME budget line, so the optimum doesn’t move. Private saving falls by exactly the contribution — total saving (private + state) is unchanged.',
               id: 'Iuran adil kecil menggeser endowment sedikit di garis anggaran yang SAMA, jadi optimum tak bergerak. Tabungan swasta turun tepat sebesar iuran — total tetap.' } },
      { label: { en: 'Large pension', id: 'Pensiun besar' }, set: { r: 0.25, T: 2.5 },
        why: { en: 'A larger contribution crowds out almost ALL private saving — the household barely saves on its own because the state already saves on its behalf. Total saving (private + state) is still unchanged; push T higher and the household would even have to borrow privately.',
               id: 'Iuran lebih besar menggusur hampir SELURUH tabungan swasta — rumah tangga nyaris tak menabung sendiri karena negara sudah menabung untuknya. Total tabungan tetap.' } },
      { label: { en: 'Higher return', id: 'Imbal hasil lebih tinggi' }, set: { r: 0.6, T: 2 },
        why: { en: 'Even at a higher interest rate, because the pension is actuarially fair (pay T now, get (1+r)T later) the endowment still moves ALONG the same budget line. The one-for-one crowding-out result does not depend on r.',
               id: 'Bahkan pada bunga lebih tinggi, karena pensiun adil-aktuaria, endowment tetap bergerak DI garis anggaran yang sama. Hasil crowd-out satu-lawan-satu tak bergantung pada r.' } }
    ],
    compute: function (p) {
      var r = p.r, b = 0.5, I0 = 7, I1 = 2, T = p.T;
      var m = I0 + I1 / (1 + r);
      var c0 = b * m, c1 = (1 - b) * m * (1 + r);
      var Mint = m * (1 + r), Nint = m;
      var U = Math.pow(c0, b) * Math.pow(c1, 1 - b);
      function ic(x) { return Math.pow(U / Math.pow(x, b), 1 / (1 - b)); }
      var savingPriv = (I0 - T) - c0, savingTot = I0 - c0;
      var items = [
        { t: 'line', p1: [0, Mint], p2: [Nint, 0], color: C.alt2, width: 2.2, label: { en: 'budget', id: 'anggaran' } },
        { t: 'curve', pts: F.sample(ic, Math.max(0.6, c0 * 0.5), Math.min(Nint * 0.99, c0 * 1.8), 60), color: C.demand, width: 2.0, smooth: true, label: 'U' },
        { t: 'point', x: I0, y: I1, label: 'A', guideX: 'I₀', guideY: 'I₁', dx: 8, dy: 14, color: C.muted },
        { t: 'point', x: c0, y: c1, label: 'E*', guideX: 'c₀*', guideY: 'c₁*', dx: 8, dy: -8, color: C.ink }
      ];
      if (T > 0) {
        items.push({ t: 'point', x: I0 - T, y: I1 + (1 + r) * T, label: 'A′', dx: -22, dy: -6, color: C.alt });
        items.push({ t: 'arrow', p1: [I0, I1], p2: [I0 - T, I1 + (1 + r) * T], color: C.alt });
      }
      return {
        axes: { x: { min: 0, max: Math.max(10, Nint * 1.05), label: { en: 'Consumption now c₀', id: 'Konsumsi kini c₀' } },
                y: { min: 0, max: Math.max(11, Mint * 1.05), label: { en: 'Consumption later c₁', id: 'Konsumsi nanti c₁' } } },
        items: items,
        readout: [
          { label: { en: 'Optimum (fixed)', id: 'Optimum (tetap)' }, value: rp(c0) + ', ' + rp(c1) },
          { label: { en: 'Private saving', id: 'Tabungan swasta' }, value: rp(savingPriv), color: C.demand },
          { label: { en: 'Forced (govt) saving', id: 'Tabungan paksa' }, value: rp(T), color: C.alt },
          { label: { en: 'Total saving', id: 'Total tabungan' }, value: rp(savingTot), color: C.supply }
        ],
        facts: { c0: c0, c1: c1, privateSaving: savingPriv, totalSaving: savingTot, crowdOut: T }
      };
    }
  });

  /* ---- intergovernmental grants: shared Cobb–Douglas helper ---------------
     Axes: G (local public good) vs c (private composite). Income m=10.
     U=G^α·c^(1-α). With price of G = pG: G*=α·m/pG, c*=(1-α)·m. */
  var GM = 10;
  function gridBase(alpha) {
    var G1 = alpha * GM, c1 = (1 - alpha) * GM; // initial optimum, pG=1
    var U1 = Math.pow(G1, alpha) * Math.pow(c1, 1 - alpha);
    return { G1: G1, c1: c1, U1: U1 };
  }
  function icFn(U, alpha) { return function (G) { return Math.pow(U / Math.pow(G, alpha), 1 / (1 - alpha)); }; }
  function axesGrants() {
    return { x: { min: 0, max: 22, label: { en: 'Public good G', id: 'Barang publik G' } },
             y: { min: 0, max: 22, label: { en: 'Private good c', id: 'Barang privat c' } } };
  }

  /* FIG 10: Open-ended matching grant (price of G falls) */
  F.register({
    id: 'grant-open',
    title: { en: 'Open-ended matching grant', id: 'Hibah padanan tak terbatas' },
    note: { en: 'A matching grant <b>cuts the price</b> of G, pivoting the budget line out from the same c-intercept. G rises a lot, but part leaks into private consumption (c also rises). The donor has <i>no cap</i> on total cost.',
            id: 'Hibah padanan <b>menurunkan harga</b> G, memutar garis anggaran dari titik-potong c yang sama. G naik banyak, tetapi sebagian bocor ke konsumsi privat. Donor <i>tanpa batas</i> biaya.' },
    params: [
      { key: 'alpha', label: { en: 'Taste for G (α)', id: 'Selera G (α)' }, min: 0.2, max: 0.7, step: 0.05, value: 0.4, fmt: function (v) { return v.toFixed(2); } },
      { key: 'match', label: { en: 'Match rate', id: 'Rasio padanan' }, min: 0, max: 2, step: 0.25, value: 1, fmt: function (v) { return v.toFixed(2) + ':1'; } }
    ],
    scenarios: [
      { label: { en: '1-for-1 match', id: 'Padanan 1:1' }, set: { alpha: 0.4, match: 1 },
        why: { en: 'For every $1 the region spends on G the donor adds $1, halving the price of G. The budget pivots out from the same private-good intercept; G jumps a lot, but c also rises — part of the grant becomes tax relief.',
               id: 'Tiap $1 yang dibelanjakan daerah untuk G, donor menambah $1, memangkas harga G separuh. G melonjak, tetapi c juga naik — sebagian hibah menjadi keringanan pajak.' } },
      { label: { en: 'Strong taste for G', id: 'Selera G kuat' }, set: { alpha: 0.6, match: 1 },
        why: { en: 'A community that values G highly spends most of the price cut on G, so the public-good stimulus is large and little leaks to private consumption.',
               id: 'Komunitas yang sangat menghargai G membelanjakan sebagian besar potongan harga untuk G, jadi stimulus besar dan sedikit bocor ke konsumsi privat.' } },
      { label: { en: 'Weak taste for G', id: 'Selera G lemah' }, set: { alpha: 0.25, match: 1 },
        why: { en: 'A community that cares little for G turns much of the price cut into private tax relief — G rises less and more leaks to c. Same grant, very different result depending on local preferences.',
               id: 'Komunitas yang kurang peduli G mengubah sebagian besar potongan harga menjadi keringanan pajak — G naik lebih sedikit. Hibah sama, hasil sangat berbeda tergantung preferensi.' } },
      { label: { en: 'Generous match (2:1)', id: 'Padanan murah hati' }, set: { alpha: 0.4, match: 2 },
        why: { en: 'A higher match rate cuts the price of G further, pivoting the budget out more and stimulating G strongly — but the donor’s UNCAPPED cost balloons, which is the central weakness of open-ended matching.',
               id: 'Rasio padanan lebih tinggi memangkas harga G lebih jauh, menstimulasi G kuat — tetapi biaya donor TANPA BATAS membengkak, kelemahan utama padanan terbuka.' } }
    ],
    compute: function (p) {
      var a = p.alpha, mr = p.match, pG = 1 / (1 + mr);
      var b = gridBase(a);
      var G2 = a * GM / pG, c2 = (1 - a) * GM;
      var U2 = Math.pow(G2, a) * Math.pow(c2, 1 - a);
      var Gint = GM / pG;
      return {
        axes: axesGrants(),
        items: [
          { t: 'line', p1: [0, GM], p2: [GM, 0], color: C.muted, dash: true, width: 1.7, label: 'AB' },
          { t: 'line', p1: [0, GM], p2: [Gint, 0], color: C.alt2, width: 2.2, label: 'AR' },
          { t: 'curve', pts: F.sample(icFn(b.U1, a), Math.max(0.6, b.G1 * 0.5), Math.min(21, b.G1 * 2.1), 50), color: '#b9c2cc', width: 1.5, smooth: true },
          { t: 'curve', pts: F.sample(icFn(U2, a), Math.max(0.6, G2 * 0.55), Math.min(21, G2 * 1.7), 50), color: C.demand, width: 2.0, smooth: true, label: 'U₂' },
          { t: 'point', x: b.G1, y: b.c1, label: 'E₁', guideX: 'G₁', dx: -22, dy: -6, color: C.muted },
          { t: 'point', x: G2, y: c2, label: 'E₂', guideX: 'G₂', guideY: 'c₂', dx: 8, dy: -8, color: C.ink }
        ],
        readout: [
          { label: 'G₁ → G₂', value: rp(b.G1) + ' → ' + rp(G2), color: C.accent },
          { label: { en: 'Δ public good', id: 'Δ barang publik' }, value: '+' + rp(G2 - b.G1) },
          { label: { en: 'private c₁→c₂', id: 'privat c₁→c₂' }, value: rp(b.c1) + ' → ' + rp(c2) },
          { label: { en: 'Donor cost', id: 'Biaya donor' }, value: rp(mr * pG * G2) }
        ],
        facts: { G1: b.G1, G2: G2, c2: c2, priceG: pG, donorCost: mr * pG * G2 }
      };
    }
  });

  /* FIG 11: Closed-ended matching grant (kinked budget) */
  F.register({
    id: 'grant-closed',
    title: { en: 'Closed-ended matching grant', id: 'Hibah padanan terbatas' },
    note: { en: 'A cap on the donor’s contribution <b>kinks</b> the budget line: matched price up to the cap (AD), then full price (DF). G rises less than the open-ended case, but the donor controls its cost.',
            id: 'Plafon kontribusi donor <b>mematahkan</b> garis anggaran: harga padanan sampai plafon (AD), lalu harga penuh (DF). G naik lebih sedikit, tetapi biaya donor terkendali.' },
    params: [
      { key: 'alpha', label: { en: 'Taste for G (α)', id: 'Selera G (α)' }, min: 0.2, max: 0.7, step: 0.05, value: 0.45, fmt: function (v) { return v.toFixed(2); } },
      { key: 'cap', label: { en: 'Donor cap (K)', id: 'Plafon donor (K)' }, min: 1, max: 7, step: 0.5, value: 5, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'Generous cap', id: 'Plafon longgar' }, set: { alpha: 0.45, cap: 5 },
        why: { en: 'With a high cap the optimum stays on the subsidised segment AD (matched price), so G rises almost as much as the open-ended case — the cap doesn’t bind. The donor pays up to the cap.',
               id: 'Dengan plafon tinggi, optimum tetap di segmen bersubsidi AD, jadi G naik hampir sebesar kasus tak terbatas — plafon tak mengikat.' } },
      { label: { en: 'Cap binds (corner at D)', id: 'Plafon mengikat' }, set: { alpha: 0.45, cap: 3 },
        why: { en: 'When the desired G would exceed the cap, the region ends up exactly at the kink D: it uses all the matched money, then stops because beyond the cap G is full price. The donor’s cost is exactly the cap — control achieved, stimulus reduced.',
               id: 'Bila G yang diinginkan melebihi plafon, daerah berhenti tepat di kelok D: memakai seluruh dana padanan lalu berhenti karena di atas plafon G berharga penuh. Biaya donor = plafon.' } },
      { label: { en: 'Tight cap', id: 'Plafon ketat' }, set: { alpha: 0.45, cap: 1.5 },
        why: { en: 'A very tight cap is reached almost immediately; most of the budget line is at full price, so the closed-ended grant barely out-stimulates a plain lump-sum transfer.',
               id: 'Plafon sangat ketat tercapai segera; sebagian besar garis anggaran berharga penuh, jadi hibah ini nyaris tak lebih menstimulasi daripada transfer lump-sum biasa.' } }
    ],
    compute: function (p) {
      var a = p.alpha, K = p.cap, pG = 0.5; // 1:1 match → price 0.5 up to cap
      var b = gridBase(a);
      // matched until donor pays K: local own-spend = K, G reaches 2K, c=m-K
      var Gkink = 2 * K, ckink = GM - K, Gfull = GM + K; // F intercept
      // optimum on AD (price .5): G=2αm, c=(1-α)m if within segment (G≤Gkink)
      var Gopen = a * GM / pG, copen = (1 - a) * GM;
      var G3, c3, seg;
      if (Gopen <= Gkink) { G3 = Gopen; c3 = copen; seg = 'matched'; }
      else {
        // optimum on DF (price 1, income effectively m+K): G=α(m+K)
        var Gfullopt = a * (GM + K);
        if (Gfullopt >= Gkink) { G3 = Gfullopt; c3 = (1 - a) * (GM + K); seg = 'full'; }
        else { G3 = Gkink; c3 = ckink; seg = 'kink'; }
      }
      var U3 = Math.pow(G3, a) * Math.pow(c3, 1 - a);
      return {
        axes: axesGrants(),
        items: [
          { t: 'line', p1: [0, GM], p2: [GM, 0], color: C.muted, dash: true, width: 1.6, label: 'AB' },
          { t: 'seg', pts: [[0, GM], [Gkink, ckink], [Gfull, 0]], color: C.alt2, width: 2.2, label: 'ADF' },
          { t: 'curve', pts: F.sample(icFn(b.U1, a), Math.max(0.6, b.G1 * 0.5), Math.min(21, b.G1 * 2.1), 50), color: '#b9c2cc', width: 1.5, smooth: true },
          { t: 'curve', pts: F.sample(icFn(U3, a), Math.max(0.6, G3 * 0.55), Math.min(21, G3 * 1.7), 50), color: C.demand, width: 2.0, smooth: true, label: 'U₃' },
          { t: 'point', x: Gkink, y: ckink, label: 'D', dot: true, dx: 6, dy: -6, color: C.alt },
          { t: 'point', x: b.G1, y: b.c1, label: 'E₁', dx: -22, dy: -6, color: C.muted },
          { t: 'point', x: G3, y: c3, label: 'E₃', guideX: 'G₃', dx: 8, dy: -8, color: C.ink }
        ],
        readout: [
          { label: 'G₁ → G₃', value: rp(b.G1) + ' → ' + rp(G3), color: C.accent },
          { label: { en: 'On segment', id: 'Di segmen' }, value: seg },
          { label: { en: 'Donor cost (≤K)', id: 'Biaya donor (≤K)' }, value: rp(Math.min(K, G3 / 2)) },
          { label: { en: 'Kink at G', id: 'Kelok di G' }, value: rp(Gkink) }
        ],
        facts: { G1: b.G1, G3: G3, c3: c3, Gkink: Gkink, segment: seg }
      };
    }
  });

  /* FIG 12: Non-matching conditional grant (lump sum earmarked for G) → crowd-out */
  F.register({
    id: 'grant-cond',
    title: { en: 'Conditional non-matching grant (crowd-out)', id: 'Hibah bersyarat non-padanan (crowd-out)' },
    note: { en: 'A fixed grant earmarked for G shifts the budget out by <b>H</b> (segment from G=H). The town takes it, then trims its <i>own</i> G spending — so G rises by only <b>α·H</b>, less than the grant. The rest leaks to private c.',
            id: 'Hibah tetap yang diikat untuk G menggeser anggaran sebesar <b>H</b> (mulai G=H). Daerah menerimanya lalu memangkas belanja G <i>sendiri</i> — G hanya naik <b>α·H</b>, lebih kecil dari hibah.' },
    params: [
      { key: 'alpha', label: { en: 'Taste for G (α)', id: 'Selera G (α)' }, min: 0.2, max: 0.7, step: 0.05, value: 0.4, fmt: function (v) { return v.toFixed(2); } },
      { key: 'H', label: { en: 'Grant size (H)', id: 'Besar hibah (H)' }, min: 1, max: 8, step: 0.5, value: 4, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'Normal crowd-out', id: 'Crowd-out normal' }, set: { alpha: 0.4, H: 4 },
        why: { en: 'The region takes the earmarked grant but then cuts its OWN G spending and shifts the freed money to private c. G rises by only α·H — the rest (1−α)·H is crowd-out. Donors who expect $1 of grant to add $1 of G are disappointed (Payne 2009).',
               id: 'Daerah menerima hibah ikat lalu memangkas belanja G SENDIRI dan mengalihkan dana bebas ke c. G hanya naik α·H — sisanya (1−α)·H crowd-out.' } },
      { label: { en: 'Big grant', id: 'Hibah besar' }, set: { alpha: 0.4, H: 8 },
        why: { en: 'A larger earmarked grant raises G more in absolute terms, but the SHARE that crowds out, (1−α), is unchanged — most of the extra still leaks to private consumption.',
               id: 'Hibah lebih besar menaikkan G lebih banyak secara absolut, tetapi PORSI crowd-out (1−α) tetap — sebagian besar tetap bocor ke konsumsi privat.' } },
      { label: { en: 'Earmark binds (corner)', id: 'Ikatan mengikat' }, set: { alpha: 0.2, H: 8 },
        why: { en: 'If the grant H exceeds what the community would freely choose for G, the earmark BINDS: it’s stuck at the corner G=H, spending exactly the grant on G and nothing of its own. No crowd-out here, because it couldn’t reach this much G alone.',
               id: 'Jika hibah H melebihi G yang akan dipilih bebas, ikatan MENGIKAT: daerah berhenti di sudut G=H, membelanjakan persis hibah untuk G. Tanpa crowd-out di sini.' } }
    ],
    compute: function (p) {
      var a = p.alpha, H = p.H;
      var b = gridBase(a);
      var G4 = a * (GM + H), c4 = (1 - a) * (GM + H);
      if (G4 < H) { G4 = H; c4 = GM; } // corner: earmark binds
      var U4 = Math.pow(G4, a) * Math.pow(c4, 1 - a);
      return {
        axes: axesGrants(),
        items: [
          { t: 'line', p1: [0, GM], p2: [GM, 0], color: C.muted, dash: true, width: 1.6, label: 'AB' },
          { t: 'seg', pts: [[0, GM], [H, GM], [GM + H, 0]], color: C.alt2, width: 2.2, label: 'A·H·M' },
          { t: 'seg', pts: [[H, 0], [H, GM]], color: C.alt2, dash: true, width: 1.2 },
          { t: 'curve', pts: F.sample(icFn(b.U1, a), Math.max(0.6, b.G1 * 0.5), Math.min(21, b.G1 * 2.1), 50), color: '#b9c2cc', width: 1.5, smooth: true },
          { t: 'curve', pts: F.sample(icFn(U4, a), Math.max(0.6, G4 * 0.55), Math.min(21, G4 * 1.7), 50), color: C.demand, width: 2.0, smooth: true, label: 'U₄' },
          { t: 'point', x: H, y: GM, label: 'H', dot: true, dx: 4, dy: -8, color: C.alt },
          { t: 'point', x: b.G1, y: b.c1, label: 'E₁', dx: -22, dy: -6, color: C.muted },
          { t: 'point', x: G4, y: c4, label: 'E₄', guideX: 'G₄', dx: 8, dy: -8, color: C.ink }
        ],
        readout: [
          { label: 'G₁ → G₄', value: rp(b.G1) + ' → ' + rp(G4), color: C.accent },
          { label: { en: 'Grant H', id: 'Hibah H' }, value: rp(H) },
          { label: { en: 'Actual ΔG', id: 'ΔG aktual' }, value: '+' + rp(G4 - b.G1) },
          { label: { en: 'Crowd-out', id: 'Crowd-out' }, value: rp(H - (G4 - b.G1)), color: C.demand }
        ],
        facts: { G1: b.G1, G4: G4, c4: c4, deltaG: G4 - b.G1, crowdOut: H - (G4 - b.G1) }
      };
    }
  });

  /* FIG 13: Unconditional lump-sum grant (flypaper benchmark) */
  F.register({
    id: 'grant-uncond',
    title: { en: 'Unconditional grant = an income increase', id: 'Hibah tanpa syarat = kenaikan pendapatan' },
    note: { en: 'With no strings, the budget line shifts out <b>in parallel</b> by H — identical to giving residents H of extra income. Median-voter theory predicts the same ΔG as the conditional grant; the empirical “<b>flypaper effect</b>” (money sticks to G) is the puzzle.',
            id: 'Tanpa syarat, garis anggaran bergeser <b>sejajar</b> sebesar H — sama dengan memberi warga tambahan pendapatan H. Teori median-voter memprediksi ΔG sama; “<b>flypaper effect</b>” empiris adalah teka-tekinya.' },
    params: [
      { key: 'alpha', label: { en: 'Taste for G (α)', id: 'Selera G (α)' }, min: 0.2, max: 0.7, step: 0.05, value: 0.4, fmt: function (v) { return v.toFixed(2); } },
      { key: 'H', label: { en: 'Grant size (H)', id: 'Besar hibah (H)' }, min: 1, max: 8, step: 0.5, value: 4, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'Equals an income rise', id: 'Setara kenaikan pendapatan' }, set: { alpha: 0.4, H: 4 },
        why: { en: 'No strings → the budget shifts out in parallel, exactly like giving residents H of extra income. The optimum is the interior tangency, with ΔG = α·H — the SAME prediction as the conditional grant. Theoretically, conditional and unconditional are identical.',
               id: 'Tanpa syarat → anggaran bergeser sejajar, persis seperti menambah pendapatan H. ΔG = α·H — prediksi SAMA dengan hibah bersyarat. Secara teori keduanya identik.' } },
      { label: { en: 'Strong taste for G', id: 'Selera G kuat' }, set: { alpha: 0.6, H: 4 },
        why: { en: 'A region that values G highly spends a large share of the extra income on G (ΔG = α·H is bigger). Even so, in the model it would spend the same whether the grant is labelled or not.',
               id: 'Daerah yang menghargai G tinggi membelanjakan porsi besar tambahan untuk G (ΔG = α·H lebih besar). Tetap saja, dalam model, sama saja diberi label atau tidak.' } },
      { label: { en: 'The flypaper puzzle', id: 'Teka-teki flypaper' }, set: { alpha: 0.25, H: 4 },
        why: { en: 'The model says a grant and equal income give the same ΔG. But empirically a $1 grant raises public spending ~40¢ while $1 of income raises it only ~10¢ — "money sticks where it lands". The flypaper effect is a real-world departure the median-voter model can’t explain.',
               id: 'Model bilang hibah dan pendapatan setara memberi ΔG sama. Tetapi empiris, $1 hibah menaikkan belanja publik ~40¢ sedangkan $1 pendapatan hanya ~10¢ — "uang menempel di tempat jatuhnya".' } }
    ],
    compute: function (p) {
      var a = p.alpha, H = p.H;
      var b = gridBase(a);
      var G5 = a * (GM + H), c5 = (1 - a) * (GM + H);
      var U5 = Math.pow(G5, a) * Math.pow(c5, 1 - a);
      return {
        axes: axesGrants(),
        items: [
          { t: 'line', p1: [0, GM], p2: [GM, 0], color: C.muted, dash: true, width: 1.6, label: 'AB' },
          { t: 'line', p1: [0, GM + H], p2: [GM + H, 0], color: C.alt2, width: 2.2, label: 'A′B′' },
          { t: 'curve', pts: F.sample(icFn(b.U1, a), Math.max(0.6, b.G1 * 0.5), Math.min(21, b.G1 * 2.1), 50), color: '#b9c2cc', width: 1.5, smooth: true },
          { t: 'curve', pts: F.sample(icFn(U5, a), Math.max(0.6, G5 * 0.55), Math.min(21, G5 * 1.7), 50), color: C.demand, width: 2.0, smooth: true, label: 'U₅' },
          { t: 'point', x: b.G1, y: b.c1, label: 'E₁', dx: -22, dy: -6, color: C.muted },
          { t: 'point', x: G5, y: c5, label: 'E₅', guideX: 'G₅', dx: 8, dy: -8, color: C.ink }
        ],
        readout: [
          { label: 'G₁ → G₅', value: rp(b.G1) + ' → ' + rp(G5), color: C.accent },
          { label: { en: 'Predicted ΔG', id: 'ΔG prediksi' }, value: '+' + rp(G5 - b.G1) },
          { label: { en: '= same as conditional?', id: '= sama dgn bersyarat?' }, value: 'yes (theory)' },
          { label: { en: 'Flypaper (empirical)', id: 'Flypaper (empiris)' }, value: '40¢ vs 10¢' }
        ],
        facts: { G1: b.G1, G5: G5, c5: c5, deltaG: G5 - b.G1 }
      };
    }
  });

  /* ---- FIG 14: Public debt dynamics  d_{t+1} = d_t·(1+r)/(1+g) − pb --------
     Steady state d* = pb·(1+g)/(g−r) when g>r. r>g ⇒ explosive without surplus. */
  F.register({
    id: 'debt-dynamics',
    title: { en: 'Debt sustainability: the r − g rule', id: 'Keberlanjutan utang: aturan r − g' },
    note: { en: 'Debt/GDP follows d′ = d·(1+r)/(1+g) − pb. If growth beats the interest rate (<b>g &gt; r</b>) debt converges; if <b>r &gt; g</b> it explodes unless you run a primary surplus. Indonesia’s rule caps debt at 60% of GDP.',
            id: 'Rasio utang mengikuti d′ = d·(1+r)/(1+g) − pb. Jika pertumbuhan &gt; bunga (<b>g &gt; r</b>) utang konvergen; jika <b>r &gt; g</b> meledak kecuali ada surplus primer. Aturan Indonesia membatasi utang 60% PDB.' },
    params: [
      { key: 'r', label: { en: 'Real interest rate r', id: 'Bunga riil r' }, min: 0, max: 0.1, step: 0.005, value: 0.06, fmt: function (v) { return (v * 100).toFixed(1) + '%'; } },
      { key: 'g', label: { en: 'Real growth g', id: 'Pertumbuhan riil g' }, min: 0, max: 0.1, step: 0.005, value: 0.04, fmt: function (v) { return (v * 100).toFixed(1) + '%'; } },
      { key: 'pb', label: { en: 'Primary balance (% GDP)', id: 'Keseimbangan primer' }, min: -0.03, max: 0.03, step: 0.005, value: 0, fmt: function (v) { return (v * 100).toFixed(1) + '%'; } },
      { key: 'd0', label: { en: 'Starting debt/GDP', id: 'Utang awal/PDB' }, min: 0.2, max: 0.9, step: 0.05, value: 0.4, fmt: function (v) { return (v * 100).toFixed(0) + '%'; } }
    ],
    scenarios: [
      { label: { en: 'Sustainable (g > r)', id: 'Lestari (g > r)' }, set: { r: 0.04, g: 0.06, pb: 0, d0: 0.4 },
        why: { en: 'When growth beats the interest rate (g > r), the factor (1+r)/(1+g) < 1 pulls the debt ratio DOWN toward a stable level — sustainable even with a balanced primary budget. The economy "grows out of" its debt.',
               id: 'Saat pertumbuhan > bunga (g > r), faktor (1+r)/(1+g) < 1 menarik rasio utang TURUN ke tingkat stabil — lestari bahkan dengan keseimbangan primer nol. Ekonomi "tumbuh keluar" dari utang.' } },
      { label: { en: 'Snowball (r > g)', id: 'Bola salju (r > g)' }, set: { r: 0.07, g: 0.03, pb: 0, d0: 0.4 },
        why: { en: 'When r > g the ratio rises every year — the "snowball": interest compounds faster than the economy grows, so debt drifts up through the 60% rule even with no new primary deficit. A primary surplus is needed to stop it.',
               id: 'Saat r > g rasio naik tiap tahun — "bola salju": bunga berbunga lebih cepat dari pertumbuhan, jadi utang menembus aturan 60% walau tanpa defisit primer baru. Perlu surplus primer.' } },
      { label: { en: 'Surplus rescue', id: 'Penyelamatan surplus' }, set: { r: 0.07, g: 0.03, pb: 0.03, d0: 0.6 },
        why: { en: 'Even with r > g, running a primary SURPLUS offsets the snowball: each year’s surplus pays down enough debt to bend the path back down. This is the textbook consolidation Indonesia did after 2020–21.',
               id: 'Bahkan dengan r > g, menjalankan SURPLUS primer mengimbangi bola salju: surplus tiap tahun melunasi cukup utang untuk membelokkan lintasan turun. Inilah konsolidasi pasca 2020–21.' } },
      { label: { en: 'Deficit + r > g', id: 'Defisit + r > g' }, set: { r: 0.06, g: 0.04, pb: -0.02, d0: 0.5 },
        why: { en: 'A primary DEFICIT on top of r > g is the worst case: the snowball and new borrowing reinforce each other, so debt climbs fastest. This is the danger zone fiscal rules are designed to prevent.',
               id: 'DEFISIT primer di atas r > g adalah kasus terburuk: bola salju dan utang baru saling memperkuat, jadi utang naik tercepat. Inilah zona bahaya yang dicegah aturan fiskal.' } }
    ],
    compute: function (p) {
      var r = p.r, g = p.g, pb = p.pb, d = p.d0, N = 30;
      var pts = [[0, d]];
      for (var i = 1; i <= N; i++) { d = d * (1 + r) / (1 + g) - pb; if (d < 0) d = 0; pts.push([i, d]); }
      var dEnd = pts[pts.length - 1][1];
      var converges = (g > r) || (Math.abs(g - r) < 1e-9 && pb >= 0);
      var dStar = (g > r) ? pb * (1 + g) / (g - r) : null;
      return {
        axes: { x: { min: 0, max: N, label: { en: 'Years', id: 'Tahun' } }, y: { min: 0, max: 1.2, label: { en: 'Debt / GDP', id: 'Utang / PDB' }, ticks: [{ v: 0.6, label: '60%' }] } },
        items: [
          { t: 'hline', y: 0.6, color: C.demand, dash: true, label: { en: '60% rule', id: 'aturan 60%' } },
          { t: 'curve', pts: pts, color: C.accent, smooth: false, width: 2.4, label: 'd_t' },
          { t: 'point', x: N, y: Math.min(dEnd, 1.18), label: '', guideY: '', dot: true, color: C.ink }
        ],
        readout: [
          { label: 'r − g', value: ((r - g) * 100).toFixed(1) + ' pp', color: (r - g) > 0 ? C.demand : C.supply },
          { label: { en: 'Debt in 30y', id: 'Utang 30 thn' }, value: (dEnd * 100).toFixed(0) + '%', color: dEnd > 0.6 ? C.demand : C.supply },
          { label: { en: 'Path', id: 'Lintasan' }, value: converges ? 'sustainable' : 'explosive' },
          { label: 'd*', value: dStar != null && dStar >= 0 ? (dStar * 100).toFixed(0) + '%' : '— (r≥g)' }
        ],
        facts: { dEnd: dEnd, converges: converges, dStar: dStar, rMinusG: r - g }
      };
    }
  });
})();
