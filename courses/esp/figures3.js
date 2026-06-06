/* ============================================================================
   ESP — Interactive figures, part 3 of 3 (welfare / labour supply · transfers)
   Exam-driven diagrams (UAS 2023/2024). Closed-form geometry, registered on
   window.FigLab. Used in the units, the Graph Lab, and the worked Past-Exam
   answers (embedded as static SVG).
   ============================================================================ */
(function () {
  'use strict';
  var F = window.FigLab; if (!F) return;
  var C = F.colors;
  function rp(v, d) { var k = Math.pow(10, d || 2); return Math.round(v * k) / k; }

  /* ---- FIG 15: Welfare & the labour-supply budget constraint --------------
     Guaranteed transfer G, clawed back at marginal rate t per $ earned; wage w.
     Net income y(h) = w·h + max(0, G − t·w·h).
     Break-even hours h* = G/(t·w): the transfer hits zero (income = G/t).
       • h ≤ h*: y = G + w·h·(1−t)   (slope w(1−t))
       • h ≥ h*: y = w·h             (slope w, rejoins the no-programme line)
     t = 1 ⇒ slope 0 in the phase-out range = the "welfare trap" / 100% notch. */
  F.register({
    id: 'welfare-bc',
    title: { en: 'Welfare & the labour-supply budget line', id: 'Bansos & garis anggaran tenaga kerja' },
    note: { en: 'A guaranteed transfer <b>G</b> clawed back at rate <b>t</b> per $ earned makes the budget line <b>kink</b>. In the phase-out range each hour adds only <b>w(1−t)</b>; at <b>t = 100%</b> the line is flat — extra work brings no extra income (the welfare trap).',
            id: 'Bantuan dijamin <b>G</b> yang dipotong sebesar <b>t</b> tiap $ penghasilan membuat garis anggaran <b>menekuk</b>. Di rentang phase-out tiap jam hanya menambah <b>w(1−t)</b>; pada <b>t = 100%</b> garis datar — kerja tambahan tak menambah pendapatan (jebakan bansos).' },
    params: [
      { key: 'w', label: { en: 'Wage per hour (w)', id: 'Upah per jam (w)' }, min: 5, max: 20, step: 1, value: 10, fmt: function (v) { return '$' + v; } },
      { key: 'G', label: { en: 'Guaranteed transfer (G)', id: 'Bantuan dijamin (G)' }, min: 0, max: 300, step: 20, value: 200, fmt: function (v) { return '$' + v; } },
      { key: 't', label: { en: 'Clawback rate (t)', id: 'Tingkat potongan (t)' }, min: 0, max: 1, step: 0.05, value: 1, fmt: function (v) { return (v * 100).toFixed(0) + '%'; } },
      { key: 'D', label: { en: 'Earnings disregard (D)', id: 'Pengecualian penghasilan (D)' }, min: 0, max: 200, step: 20, value: 100, fmt: function (v) { return '$' + v; } }
    ],
    scenarios: [
      { label: { en: '100% clawback (trap)', id: 'Potongan 100% (jebakan)' }, set: { w: 10, G: 200, t: 1, D: 100 },
        why: { en: 'With a 100% clawback (the UAS-2023 Pierre case: $10/h, $200 transfer), every $1 earned removes $1 of transfer, so net income is FLAT at $300 from 10 to 30 hours. Working those hours brings nothing — a strong work disincentive (welfare trap). The transfer hits zero at 30 hours.',
               id: 'Dengan potongan 100% (kasus Pierre UAS-2023: $10/jam, transfer $200), tiap $1 penghasilan menghapus $1 bantuan, sehingga pendapatan bersih DATAR di $300 dari 10 ke 30 jam. Bekerja di rentang itu sia-sia — jebakan bansos. Bantuan nol pada 30 jam.' } },
      { label: { en: '66.7% clawback', id: 'Potongan 66,7%' }, set: { w: 10, G: 200, t: 0.6667, D: 100 },
        why: { en: 'Lowering the clawback to 66.7% gives the phase-out range a positive slope w(1−t)=$3.33/h, so work now PAYS something — the disincentive weakens and Pierre works more. But the transfer now extends further (to 40 hours), reaching more people at higher cost.',
               id: 'Menurunkan potongan ke 66,7% memberi rentang phase-out kemiringan positif w(1−t)=$3,33/jam, jadi bekerja MEMBAYAR sesuatu — disinsentif melemah dan Pierre bekerja lebih banyak. Tetapi bantuan kini menjangkau lebih jauh (hingga 40 jam), biaya lebih besar.' } },
      { label: { en: '30% clawback', id: 'Potongan 30%' }, set: { w: 10, G: 100, t: 0.3, D: 0 },
        why: { en: 'The UAS-2024 case ($100 transfer, 30% taper): the phase-out slope is 0.7w, so work clearly pays; only a mild substitution-effect disincentive plus the income effect of the $100. The trade-off: a gentler taper means the benefit reaches further up the income scale (more recipients, higher cost).',
               id: 'Kasus UAS-2024 (transfer $100, taper 30%): kemiringan phase-out 0,7w, jadi kerja jelas membayar; hanya disinsentif efek-substitusi ringan plus efek pendapatan $100. Trade-off: taper lebih landai menjangkau lebih tinggi (lebih banyak penerima, biaya lebih besar).' } },
      { label: { en: 'No programme', id: 'Tanpa program' }, set: { w: 10, G: 0, t: 1, D: 0 },
        why: { en: 'Baseline: income is just w·h, a straight line from the origin — no transfer, no kink, no distortion.',
               id: 'Dasar: pendapatan hanya w·h, garis lurus dari titik asal — tanpa transfer, tanpa tekuk, tanpa distorsi.' } }
    ],
    compute: function (p) {
      var w = p.w, G = p.G, t = p.t, D = p.D || 0, Hmax = 50;
      var h1 = D / w;                                     // hours where earnings reach the disregard D
      var hstar = t > 0 ? (D + G / t) / w : Hmax + 1;     // break-even hours (transfer = 0)
      // net income y(h) = w·h + max(0, G − t·max(0, w·h − D))
      var pts, kx = null, ky = null;
      if (t <= 0 || hstar >= Hmax) {                       // never fully claws back within range
        if (h1 >= Hmax) pts = [[0, G], [Hmax, G + w * Hmax]];
        else pts = [[0, G], [h1, G + w * h1], [Hmax, G + t * D + w * Hmax * (1 - t)]];
      } else {
        kx = hstar; ky = w * hstar;                        // kink where the line rejoins w·h
        pts = h1 > 0 ? [[0, G], [h1, G + w * h1], [hstar, w * hstar], [Hmax, w * Hmax]]
                     : [[0, G], [hstar, w * hstar], [Hmax, w * Hmax]];
      }
      var ymax = Math.max(w * Hmax, (G + D) * 1.15 + 1) * 1.04;
      var items = [
        { t: 'line', p1: [0, 0], p2: [Hmax, w * Hmax], color: C.muted, dash: true, width: 1.7, label: { en: 'no programme', id: 'tanpa program' } },
        { t: 'seg', pts: pts, color: C.accent, width: 2.4, label: { en: 'with programme', id: 'dgn program' } },
        { t: 'point', x: 0, y: G, label: 'G', dot: true, dx: 8, dy: -6, color: C.alt }
      ];
      if (D > 0 && h1 < Hmax) items.push({ t: 'point', x: h1, y: G + w * h1, label: { en: 'clawback starts', id: 'potongan mulai' }, dot: true, dx: 6, dy: -8, color: C.alt2 });
      if (kx != null) items.push({ t: 'point', x: kx, y: ky, label: { en: 'transfer = 0', id: 'bantuan = 0' }, guideX: '', dx: 6, dy: 16, color: C.ink });
      return {
        axes: { x: { min: 0, max: Hmax, label: { en: 'Hours worked / month', id: 'Jam kerja / bulan' } }, y: { min: 0, max: ymax, label: { en: 'Net income', id: 'Pendapatan bersih' } } },
        items: items,
        readout: [
          { label: { en: 'Guarantee G', id: 'Jaminan G' }, value: '$' + rp(G), color: C.alt },
          { label: { en: 'Phase-out slope', id: 'Kemiringan phase-out' }, value: '$' + rp(w * (1 - t)) + '/h' },
          { label: { en: 'Transfer = 0 at', id: 'Bantuan = 0 di' }, value: kx != null ? rp(kx) + ' h' : '> ' + Hmax + ' h' },
          { label: { en: 'Income there', id: 'Pendapatan di sana' }, value: kx != null ? '$' + rp(ky) : '—' }
        ],
        facts: { hstar: hstar, kinkIncome: ky, slopeLow: w * (1 - t), guarantee: G, disregard: D, w: w }
      };
    }
  });

  /* ---- FIG 16: In-kind transfer vs cash transfer -------------------------
     Axes: x = subsidised good (e.g. food/meals), y = all other goods; price 1.
     Income m. CASH transfer F → budget x+y = m+F (parallel shift out).
     IN-KIND transfer of F units → kinked budget A·H·M: (0,m)→(F,m)→(m+F,0),
     because the F units can't be converted into other goods.
     Cobb–Douglas U=x^a·y^(1−a): cash optimum x=a(m+F). If a(m+F) ≥ F the in-kind
     constraint doesn't bind (same as cash); else a corner at x=F (lower utility). */
  F.register({
    id: 'inkind-cash',
    title: { en: 'In-kind transfer vs cash transfer', id: 'Transfer in-kind vs tunai' },
    note: { en: 'A <b>cash</b> grant shifts the budget out in parallel — spend it on anything. An <b>in-kind</b> grant (free meals worth F) only adds F of the subsidised good, giving a <b>kinked</b> budget. If the family wanted at least F anyway, the two are equivalent; if in-kind forces MORE of the good than desired, the recipient is at a corner with <i>lower</i> utility than cash.',
            id: 'Hibah <b>tunai</b> menggeser anggaran sejajar — bebas dibelanjakan. Hibah <b>in-kind</b> (makan gratis senilai F) hanya menambah F barang bersubsidi, memberi anggaran <b>menekuk</b>. Jika keluarga toh ingin ≥ F, keduanya setara; jika in-kind memaksa LEBIH dari yang diinginkan, penerima di sudut dengan utilitas <i>lebih rendah</i> dari tunai.' },
    params: [
      { key: 'm', label: { en: 'Income (m)', id: 'Pendapatan (m)' }, min: 4, max: 14, step: 1, value: 10, fmt: function (v) { return '$' + v; } },
      { key: 'F', label: { en: 'Transfer size (F)', id: 'Besar transfer (F)' }, min: 1, max: 10, step: 1, value: 6, fmt: function (v) { return '$' + v; } },
      { key: 'a', label: { en: 'Taste for the good (α)', id: 'Selera barang (α)' }, min: 0.1, max: 0.6, step: 0.05, value: 0.25, fmt: function (v) { return v.toFixed(2); } }
    ],
    scenarios: [
      { label: { en: 'In-kind binds (corner)', id: 'In-kind mengikat' }, set: { m: 10, F: 6, a: 0.2 },
        why: { en: 'The family would freely choose only α(m+F)=$3.2 of the good, but the in-kind grant forces them to "consume" F=$6 of it. They are stuck at the corner H (x=F), on a lower indifference curve than the cash optimum — cash would have let them buy more of other goods. In-kind < cash for the recipient here.',
               id: 'Keluarga hanya akan memilih α(m+F)=$3,2 barang, tetapi in-kind memaksa "mengonsumsi" F=$6. Mereka terjebak di sudut H (x=F), pada kurva indiferen lebih rendah dari optimum tunai — tunai akan membiarkan mereka membeli lebih banyak barang lain.' } },
      { label: { en: 'In-kind = cash', id: 'In-kind = tunai' }, set: { m: 10, F: 4, a: 0.45 },
        why: { en: 'Here the family wants α(m+F)=$6.3 of the good — MORE than the in-kind amount F=$4 — so the in-kind constraint doesn’t bind. They top up with their own money and reach the SAME interior optimum as cash. When the transfer is below desired consumption, in-kind and cash are equivalent.',
               id: 'Di sini keluarga ingin α(m+F)=$6,3 barang — LEBIH dari in-kind F=$4 — sehingga batasan tak mengikat. Mereka menambah dgn uang sendiri dan mencapai optimum interior yang SAMA dgn tunai. Bila transfer di bawah konsumsi yang diinginkan, in-kind dan tunai setara.' } }
    ],
    compute: function (p) {
      var m = p.m, F = p.F, a = p.a;
      var desired = a * (m + F);
      var cashX = desired, cashY = (1 - a) * (m + F);
      var binds = desired < F;
      var inkX = binds ? F : desired, inkY = binds ? m : (1 - a) * (m + F);
      var U = function (x, y) { return Math.pow(x, a) * Math.pow(y, 1 - a); };
      var Uc = U(cashX, cashY), Ui = U(inkX, inkY);
      var axMax = m + F + 2;
      var items = [
        { t: 'line', p1: [0, m], p2: [m, 0], color: C.muted, dash: true, width: 1.6, label: { en: 'original', id: 'awal' } },
        { t: 'line', p1: [0, m + F], p2: [m + F, 0], color: C.alt2, width: 2.0, label: { en: 'cash', id: 'tunai' } },
        { t: 'seg', pts: [[0, m], [F, m], [m + F, 0]], color: C.accent, width: 2.2, label: { en: 'in-kind', id: 'in-kind' } },
        { t: 'seg', pts: [[F, 0], [F, m]], color: C.accent, dash: true, width: 1.1 },
        { t: 'point', x: cashX, y: cashY, label: { en: 'cash opt', id: 'opt tunai' }, dx: 7, dy: -7, color: C.alt2 },
        { t: 'point', x: inkX, y: inkY, label: { en: 'in-kind opt', id: 'opt in-kind' }, dx: 7, dy: 15, color: C.accent },
        { t: 'point', x: F, y: m, label: 'H', dot: true, dx: -4, dy: -8, color: C.ink }
      ];
      return {
        axes: { x: { min: 0, max: axMax, label: { en: 'Subsidised good (food)', id: 'Barang bersubsidi (pangan)' } }, y: { min: 0, max: axMax, label: { en: 'All other goods', id: 'Barang lain' } } },
        items: items,
        readout: [
          { label: { en: 'Cash optimum', id: 'Optimum tunai' }, value: rp(cashX) + ', ' + rp(cashY), color: C.alt2 },
          { label: { en: 'In-kind optimum', id: 'Optimum in-kind' }, value: rp(inkX) + ', ' + rp(inkY), color: C.accent },
          { label: { en: 'In-kind binds?', id: 'In-kind mengikat?' }, value: binds ? 'yes (corner)' : 'no (= cash)' },
          { label: { en: 'Utility cash vs in-kind', id: 'Utilitas tunai vs in-kind' }, value: rp(Uc) + ' vs ' + rp(Ui) }
        ],
        facts: { cashX: cashX, cashY: cashY, inkX: inkX, inkY: inkY, binds: binds, Ucash: Uc, Uinkind: Ui }
      };
    }
  });
})();
