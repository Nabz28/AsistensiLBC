/* ============================================================================
   ESP — Interactive figures, part 1 of 2  (taxation · property tax · health)
   Every line is defined by its equation; intersections / tangencies / areas are
   solved in closed form so the picture is correct by construction. Registered on
   window.FigLab (engine/figlab.js). Part 2 lives in figures2.js.

   Each scenario chip carries a `why` (bilingual) explanation shown below the
   figure — the exam-relevant "what happens if X, and why" cases.
   ============================================================================ */
(function () {
  'use strict';
  var F = window.FigLab; if (!F) return;
  var C = F.colors;
  function rp(v, d) { var k = Math.pow(10, d || 2); return Math.round(v * k) / k; }

  /* ---- FIG 1: Commodity tax — incidence & deadweight loss -----------------
     Demand  P = aD - bD·Q     Supply  P = aS + bS·Q
     No tax:  Q0=(aD-aS)/(bD+bS),  P0=aD-bD·Q0
     Per-unit tax t on sellers: Qt=(aD-aS-t)/(bD+bS); Pb=aD-bD·Qt; Ps=Pb-t.
     Pass-through to buyers = bD/(bD+bS).  DWL = ½·t·(Q0-Qt). */
  F.register({
    id: 'tax-dwl',
    title: { en: 'Commodity tax: incidence & deadweight loss', id: 'Pajak komoditas: insidensi & deadweight loss' },
    note: { en: 'Buyers pay <b>P<sub>b</sub></b>, sellers keep <b>P<sub>s</sub></b>; the wedge is the tax <b>t</b>. The flatter (more elastic) side bears <i>less</i> of the tax.',
            id: 'Pembeli bayar <b>P<sub>b</sub></b>, penjual terima <b>P<sub>s</sub></b>; selisihnya pajak <b>t</b>. Sisi yang lebih landai (elastis) menanggung <i>lebih sedikit</i>.' },
    params: [
      { key: 'bD', label: { en: 'Demand steepness', id: 'Kecuraman permintaan' }, min: 0.3, max: 2.0, step: 0.1, value: 0.9, fmt: function (v) { return v.toFixed(1); } },
      { key: 'bS', label: { en: 'Supply steepness', id: 'Kecuraman penawaran' }, min: 0.3, max: 2.0, step: 0.1, value: 0.9, fmt: function (v) { return v.toFixed(1); } },
      { key: 't', label: { en: 'Tax per unit (t)', id: 'Pajak per unit (t)' }, min: 0, max: 4, step: 0.1, value: 2.0, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'No tax', id: 'Tanpa pajak' }, set: { bD: 0.9, bS: 0.9, t: 0 },
        why: { en: 'With t = 0 there is no wedge: buyers and sellers meet at E₀, with no revenue and no deadweight loss. This is the efficient benchmark every tax is judged against.',
               id: 'Dengan t = 0 tak ada baji: pembeli & penjual bertemu di E₀, tanpa penerimaan dan tanpa DWL. Inilah tolok ukur efisien.' } },
      { label: { en: 'Inelastic demand', id: 'Permintaan inelastis' }, set: { bD: 2.0, bS: 0.6, t: 2.0 },
        why: { en: 'Steep (inelastic) demand — think cigarettes or fuel. Buyers can’t easily avoid the good, so they bear MOST of the tax and quantity barely falls → small DWL, high revenue. The more inelastic side always bears more.',
               id: 'Permintaan curam (inelastis) — mis. rokok/BBM. Pembeli sulit menghindar, jadi menanggung SEBAGIAN BESAR pajak dan kuantitas hampir tak turun → DWL kecil, penerimaan tinggi.' } },
      { label: { en: 'Elastic demand', id: 'Permintaan elastis' }, set: { bD: 0.4, bS: 1.4, t: 2.0 },
        why: { en: 'Flat (elastic) demand — a luxury with substitutes. Buyers walk away, so SELLERS must absorb most of the tax and quantity falls a lot → large DWL, low revenue.',
               id: 'Permintaan landai (elastis) — barang mewah bersubstitusi. Pembeli pergi, jadi PENJUAL menyerap sebagian besar pajak dan kuantitas turun banyak → DWL besar, penerimaan rendah.' } },
      { label: { en: 'Double the tax', id: 'Gandakan pajak' }, set: { bD: 0.9, bS: 0.9, t: 4.0 },
        why: { en: 'DWL = t²⁄[2(b_D+b_S)] grows with the SQUARE of the rate, so doubling t roughly quadruples the deadweight loss. This is why one high rate hurts efficiency far more than several low ones.',
               id: 'DWL = t²⁄[2(b_D+b_S)] tumbuh dengan KUADRAT tarif, jadi menggandakan t kira-kira melipatempatkan DWL. Karena itu satu tarif tinggi jauh lebih merusak daripada beberapa tarif rendah.' } }
    ],
    compute: function (p) {
      var aD = 10, aS = 1, bD = p.bD, bS = p.bS, t = p.t;
      var Q0 = (aD - aS) / (bD + bS), P0 = aD - bD * Q0;
      var Qt = (aD - aS - t) / (bD + bS); if (Qt < 0) Qt = 0;
      var Pb = aD - bD * Qt, Ps = Pb - t;
      var dwl = 0.5 * t * (Q0 - Qt), rev = t * Qt;
      var passB = bD / (bD + bS);
      var items = [
        { t: 'line', p1: [0, aD], p2: [(aD - aS) / bD > 9.6 ? 9.6 : (aD) / bD, aD - bD * ((aD) / bD > 9.6 ? 9.6 : (aD) / bD)], color: C.demand, label: 'D' },
        { t: 'line', p1: [0, aS], p2: [9.6, aS + bS * 9.6], color: C.supply, label: 'S' }
      ];
      if (t > 0) {
        items.push({ t: 'line', p1: [0, aS + t], p2: [9.6, aS + t + bS * 9.6], color: C.supply, dash: true, width: 1.8, label: 'S+t' });
        items.push({ t: 'area', pts: [[0, Ps], [Qt, Ps], [Qt, Pb], [0, Pb]], fill: 'rgba(63,111,181,.15)', label: { en: 'tax revenue', id: 'penerimaan' }, labelColor: '#2c4a78' });
        items.push({ t: 'area', pts: [[Qt, Ps], [Q0, P0], [Qt, Pb]], fill: C.dwl, label: 'DWL', labelColor: '#8a5414' });
        items.push({ t: 'point', x: Qt, y: Pb, label: { en: 'buyers', id: 'pembeli' }, color: C.demand, guideY: 'P_b', guideX: 'Q_t', dx: 7, dy: -6 });
        items.push({ t: 'point', x: Qt, y: Ps, label: { en: 'sellers', id: 'penjual' }, color: C.supply, guideY: 'P_s', dx: 7, dy: 14 });
      }
      items.push({ t: 'point', x: Q0, y: P0, label: 'E₀', guideY: t > 0 ? '' : 'P_0', guideX: t > 0 ? '' : 'Q_0', dx: 8, dy: -7 });
      return {
        axes: { x: { min: 0, max: 10, label: { en: 'Quantity', id: 'Kuantitas' } }, y: { min: 0, max: 11, label: { en: 'Price', id: 'Harga' } } },
        items: items,
        readout: [
          { label: { en: 'Buyer price P_b', id: 'Harga pembeli P_b' }, value: rp(Pb), color: C.demand },
          { label: { en: 'Seller price P_s', id: 'Harga penjual P_s' }, value: rp(Ps), color: C.supply },
          { label: { en: 'Quantity Q_t', id: 'Kuantitas Q_t' }, value: rp(Qt) },
          { label: { en: 'Buyers’ share', id: 'Bagian pembeli' }, value: (passB * 100).toFixed(0) + '%' },
          { label: 'Revenue = t·Q', value: rp(rev), color: '#2c4a78' },
          { label: 'Deadweight loss', value: rp(dwl), color: '#8a5414' }
        ],
        facts: { Q0: Q0, P0: P0, Qt: Qt, Pb: Pb, Ps: Ps, wedge: Pb - Ps, passThroughBuyers: passB, dwl: dwl, rev: rev }
      };
    }
  });

  /* ---- FIG 2: Laffer curve (revenue vs tax) -------------------------------
     With linear D/S, R(t)=t·Qt=t·(Q0 - t/(bD+bS)). Quadratic; max at
     t*=Q0·(bD+bS)/2, R*=Q0²(bD+bS)/4. */
  F.register({
    id: 'laffer',
    title: { en: 'Laffer curve: tax revenue vs tax rate', id: 'Kurva Laffer: penerimaan vs tarif' },
    note: { en: 'Revenue R(t)=t·Q(t) is an inverted U. Past <b>t*</b> a higher rate <i>shrinks</i> revenue because the base falls faster than the rate rises.',
            id: 'Penerimaan R(t)=t·Q(t) berbentuk U-terbalik. Setelah <b>t*</b>, tarif lebih tinggi <i>menurunkan</i> penerimaan.' },
    params: [
      { key: 'bsum', label: { en: 'Slope sum (bD+bS)', id: 'Jumlah kemiringan' }, min: 0.6, max: 3.0, step: 0.1, value: 1.8, fmt: function (v) { return v.toFixed(1); } },
      { key: 't', label: { en: 'Tax per unit (t)', id: 'Pajak per unit (t)' }, min: 0, max: 9, step: 0.1, value: 3.0, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'Below t* (raise rate)', id: 'Di bawah t*' }, set: { bsum: 1.8, t: 1.5 },
        why: { en: 'On the rising side (t < t*) the base shrinks only slowly, so a higher rate still RAISES revenue. Most real-world taxes sit here — Indonesia’s low tax ratio means rate hikes can still raise revenue.',
               id: 'Di sisi naik (t < t*), basis menyusut pelan, jadi tarif lebih tinggi tetap MENAIKKAN penerimaan. Mayoritas pajak nyata ada di sini.' } },
      { label: { en: 'At the peak t*', id: 'Di puncak t*' }, set: { bsum: 1.8, t: 4.5 },
        why: { en: 'At t* marginal revenue is zero: the extra rate exactly offsets the smaller base. Revenue is maximised — pushing the rate either way now loses money.',
               id: 'Di t* penerimaan marginal nol: tambahan tarif persis mengimbangi basis yang menyusut. Penerimaan maksimum.' } },
      { label: { en: 'Beyond t* (cut rate!)', id: 'Melewati t*' }, set: { bsum: 1.8, t: 7.0 },
        why: { en: 'Past t* the base collapses faster than the rate rises, so revenue FALLS. A government here would raise MORE by cutting the rate — the counter-intuitive Laffer result.',
               id: 'Setelah t*, basis runtuh lebih cepat dari kenaikan tarif, jadi penerimaan TURUN. Pemerintah di sini justru menaikkan penerimaan dengan MEMOTONG tarif.' } }
    ],
    compute: function (p) {
      var Q0 = 9 / p.bsum;
      var tmax = Math.min(9, Q0 * p.bsum);
      var tstar = Q0 * p.bsum / 2, Rstar = Q0 * Q0 * p.bsum / 4;
      function R(t) { var q = Q0 - t / p.bsum; return t * (q > 0 ? q : 0); }
      var pts = F.sample(R, 0, tmax, 80);
      var t = F.clamp(p.t, 0, tmax), Rt = R(t);
      return {
        axes: { x: { min: 0, max: 9, label: { en: 'Tax rate t', id: 'Tarif t' } }, y: { min: 0, max: Rstar * 1.18 + 0.5, label: { en: 'Revenue', id: 'Penerimaan' } } },
        items: [
          { t: 'curve', pts: pts, color: C.accent, smooth: true, width: 2.4 },
          { t: 'vline', x: tstar, color: C.muted, dash: true },
          { t: 'point', x: tstar, y: Rstar, label: 'R*  (t*)', guideY: '', dx: 8, dy: -8, color: C.alt },
          { t: 'point', x: t, y: Rt, label: { en: 'you', id: 'kamu' }, guideX: '', guideY: '', dx: 8, dy: 16, color: C.ink }
        ],
        readout: [
          { label: 'Revenue R(t)', value: rp(Rt), color: C.accent },
          { label: 'Revenue-max t*', value: rp(tstar), color: C.alt },
          { label: 'Max revenue R*', value: rp(Rstar), color: C.alt },
          { label: { en: 'On which side?', id: 'Sisi mana?' }, value: t < tstar ? '↑ rising' : (t > tstar ? '↓ falling' : 'peak') }
        ],
        facts: { Q0: Q0, tstar: tstar, Rstar: Rstar, Rt: Rt }
      };
    }
  });

  /* ---- FIG 3: Property tax — land (vertical supply) -----------------------
     Land supply vertical at Q=Qbar. Demand P=a-bQ. P0=a-b·Qbar.
     Tax t: users still pay P0 (Q fixed), landowner receives P0-t → 100% on owner. */
  F.register({
    id: 'ptax-land',
    title: { en: 'Property tax on LAND — owners bear 100%', id: 'PBB atas TANAH — pemilik tanggung 100%' },
    note: { en: 'Supply of land is <b>vertical</b> (fixed). A tax cannot change quantity, so the user price is unchanged and the <b>landowner</b> absorbs the whole tax. No deadweight loss.',
            id: 'Penawaran tanah <b>vertikal</b> (tetap). Pajak tak mengubah kuantitas; harga pemakai tetap dan <b>pemilik tanah</b> menanggung seluruh pajak. Tanpa DWL.' },
    params: [
      { key: 'Qbar', label: { en: 'Land quantity', id: 'Kuantitas tanah' }, min: 3, max: 8, step: 0.5, value: 6, fmt: function (v) { return v.toFixed(1); } },
      { key: 't', label: { en: 'Tax per unit (t)', id: 'Pajak per unit (t)' }, min: 0, max: 4, step: 0.2, value: 2, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'No tax', id: 'Tanpa pajak' }, set: { Qbar: 6, t: 0 },
        why: { en: 'Baseline: the market clears at P₀ where demand meets the fixed land supply.',
               id: 'Dasar: pasar seimbang di P₀ tempat permintaan bertemu penawaran tanah yang tetap.' } },
      { label: { en: 'Impose the tax', id: 'Kenakan pajak' }, set: { Qbar: 6, t: 2 },
        why: { en: 'Quantity can’t change (vertical supply), so the user price stays at P₀ and the landowner’s net falls by the full tax to P₀−t. Owners bear 100%, with ZERO deadweight loss.',
               id: 'Kuantitas tak bisa berubah (penawaran vertikal), jadi harga pemakai tetap P₀ dan penerimaan bersih pemilik turun penuh ke P₀−t. Pemilik tanggung 100%, DWL NOL.' } },
      { label: { en: 'Double the tax', id: 'Gandakan pajak' }, set: { Qbar: 6, t: 4 },
        why: { en: 'Even doubling the tax changes nothing for users — the whole burden still falls on landowners and there is still no deadweight loss. Because land cannot flee, a land/PBB tax is uniquely efficient (Henry George’s point).',
               id: 'Menggandakan pajak pun tak mengubah apa pun bagi pemakai — seluruh beban tetap pada pemilik tanah dan tetap tanpa DWL. Karena tanah tak bisa lari, pajak tanah/PBB sangat efisien.' } }
    ],
    compute: function (p) {
      var a = 11, b = 1, Qbar = p.Qbar, t = p.t;
      var P0 = a - b * Qbar, Pown = P0 - t;
      var items = [
        { t: 'line', p1: [0, a], p2: [a / b > 10.6 ? 10.6 : a / b, a - b * (a / b > 10.6 ? 10.6 : a / b)], color: C.demand, label: 'D' },
        { t: 'vline', x: Qbar, color: C.supply, label: 'S (land)' },
        { t: 'point', x: Qbar, y: P0, label: { en: 'user price', id: 'harga pemakai' }, guideY: 'P_0', dx: 8, dy: -8, color: C.ink }
      ];
      if (t > 0) {
        items.push({ t: 'line', p1: [0, a - t], p2: [9.5, a - t - b * 9.5], color: C.demand, dash: true, width: 1.7, label: 'D−t' });
        items.push({ t: 'point', x: Qbar, y: Pown, label: { en: 'owner gets', id: 'pemilik terima' }, guideY: 'P_0−t', dx: 8, dy: 15, color: C.supply });
        items.push({ t: 'area', pts: [[0, Pown], [Qbar, Pown], [Qbar, P0], [0, P0]], fill: 'rgba(63,111,181,.15)', label: { en: 'tax = t·Q̄ (all on owner)', id: 'pajak = t·Q̄ (pemilik)' }, labelColor: '#2c4a78' });
      }
      return {
        axes: { x: { min: 0, max: 10, label: { en: 'Land', id: 'Tanah' } }, y: { min: 0, max: 12, label: { en: 'Price / rent', id: 'Harga / sewa' } } },
        items: items,
        readout: [
          { label: { en: 'User price', id: 'Harga pemakai' }, value: rp(P0), color: C.ink },
          { label: { en: 'Owner receives', id: 'Pemilik terima' }, value: rp(Pown), color: C.supply },
          { label: { en: 'Owner’s share', id: 'Bagian pemilik' }, value: t > 0 ? '100%' : '—' },
          { label: 'Deadweight loss', value: '0' }
        ],
        facts: { P0: P0, ownerPrice: Pown, userPrice: P0, ownerShare: t > 0 ? 1 : 0, dwl: 0 }
      };
    }
  });

  /* ---- FIG 4: Property tax — structures (horizontal supply) ---------------
     Capital mobile → long-run supply horizontal at P=c. Demand P=a-bQ.
     Tax t on suppliers → supply at c+t; tenants pay c+t (100%), Q falls; DWL. */
  F.register({
    id: 'ptax-struct',
    title: { en: 'Property tax on STRUCTURES — tenants bear 100%', id: 'PBB atas BANGUNAN — penyewa tanggung 100%' },
    note: { en: 'Capital is mobile, so the long-run supply of structures is <b>horizontal</b>. A tax raises the price tenants pay by the full amount and shrinks quantity, creating a <b>deadweight loss</b>.',
            id: 'Modal mobil, sehingga penawaran bangunan jangka panjang <b>horizontal</b>. Pajak menaikkan harga penyewa sebesar penuh dan menurunkan kuantitas → ada <b>DWL</b>.' },
    params: [
      { key: 'b', label: { en: 'Demand steepness', id: 'Kecuraman permintaan' }, min: 0.4, max: 2.0, step: 0.1, value: 1.0, fmt: function (v) { return v.toFixed(1); } },
      { key: 't', label: { en: 'Tax per unit (t)', id: 'Pajak per unit (t)' }, min: 0, max: 4, step: 0.2, value: 2, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'No tax', id: 'Tanpa pajak' }, set: { b: 1.0, t: 0 },
        why: { en: 'Baseline: with mobile capital the long-run rent equals the supply price; quantity is Q₀.',
               id: 'Dasar: dengan modal mobil, sewa jangka panjang = harga penawaran; kuantitas Q₀.' } },
      { label: { en: 'Tax on structures', id: 'Pajak bangunan' }, set: { b: 1.0, t: 2 },
        why: { en: 'Long-run supply is horizontal (capital exits if returns fall), so the tax raises the rent tenants pay by the FULL amount and the housing stock shrinks. Tenants bear 100% and there is a deadweight loss — unlike the land case.',
               id: 'Penawaran jangka panjang horizontal (modal keluar bila imbal hasil turun), jadi pajak menaikkan sewa penyewa PENUH dan stok hunian menyusut. Penyewa tanggung 100% dan ada DWL — beda dari kasus tanah.' } },
      { label: { en: 'Inelastic demand', id: 'Permintaan inelastis' }, set: { b: 2.0, t: 2 },
        why: { en: 'If tenants have few alternatives (steep demand), quantity falls less, so the deadweight loss is SMALLER — but tenants still pay the whole tax because supply is horizontal. Incidence depends on supply elasticity; the size of the DWL depends on demand elasticity.',
               id: 'Jika penyewa minim alternatif (permintaan curam), kuantitas turun lebih sedikit, jadi DWL LEBIH KECIL — tetapi penyewa tetap bayar seluruh pajak karena penawaran horizontal.' } }
    ],
    compute: function (p) {
      var a = 11, b = p.b, c = 3, t = p.t;
      var Q0 = (a - c) / b, Qt = (a - c - t) / b; if (Qt < 0) Qt = 0;
      var items = [
        { t: 'line', p1: [0, a], p2: [a / b > 10.5 ? 10.5 : a / b, a - b * (a / b > 10.5 ? 10.5 : a / b)], color: C.demand, label: 'D' },
        { t: 'hline', y: c, color: C.supply, label: 'S (long run)' },
        { t: 'point', x: Q0, y: c, label: 'E₀', guideX: t > 0 ? '' : 'Q_0', guideY: t > 0 ? '' : 'P_0', dx: 8, dy: 15 }
      ];
      if (t > 0) {
        items.push({ t: 'hline', y: c + t, color: C.supply, dash: true, label: 'S+t' });
        items.push({ t: 'point', x: Qt, y: c + t, label: { en: 'tenants pay', id: 'penyewa bayar' }, guideY: 'P_0+t', guideX: 'Q_t', dx: 8, dy: -7, color: C.demand });
        items.push({ t: 'area', pts: [[0, c], [Qt, c], [Qt, c + t], [0, c + t]], fill: 'rgba(63,111,181,.15)', label: { en: 'tax', id: 'pajak' }, labelColor: '#2c4a78' });
        items.push({ t: 'area', pts: [[Qt, c], [Q0, c], [Qt, c + t]], fill: C.dwl, label: 'DWL', labelColor: '#8a5414' });
      }
      return {
        axes: { x: { min: 0, max: 10, label: { en: 'Structures', id: 'Bangunan' } }, y: { min: 0, max: 12, label: { en: 'Price / rent', id: 'Harga / sewa' } } },
        items: items,
        readout: [
          { label: { en: 'Tenant price', id: 'Harga penyewa' }, value: rp(c + (t > 0 ? t : 0)), color: C.demand },
          { label: { en: 'Supplier keeps', id: 'Pemilik terima' }, value: rp(c), color: C.supply },
          { label: { en: 'Tenants’ share', id: 'Bagian penyewa' }, value: t > 0 ? '100%' : '—' },
          { label: 'Deadweight loss', value: rp(0.5 * t * (Q0 - Qt)), color: '#8a5414' }
        ],
        facts: { Q0: Q0, Qt: Qt, tenantPrice: c + t, supplierPrice: c, tenantShare: t > 0 ? 1 : 0, dwl: 0.5 * t * (Q0 - Qt) }
      };
    }
  });

  /* ---- FIG 5: Moral hazard / DWL in health insurance (Gruber 9-14/15) -----
     Demand Dm: P=A-B·M. Marginal cost (supply) horizontal at P0.
     No insurance: M0=(A-P0)/B at price P0. With coinsurance c, patient pays
     c·P0 → M1=(A-c·P0)/B. DWL = ½·(P0-c·P0)·(M1-M0). */
  F.register({
    id: 'moral-hazard',
    title: { en: 'Moral hazard & deadweight loss (health insurance)', id: 'Moral hazard & deadweight loss (asuransi kesehatan)' },
    note: { en: 'Insurance drops the price the patient faces from <b>P₀</b> to <b>c·P₀</b>, so quantity jumps from M₀ to M₁. Units between M₀ and M₁ are worth <i>less</i> than they cost — the shaded triangle is the <b>deadweight loss</b>.',
            id: 'Asuransi menurunkan harga yang dihadapi pasien dari <b>P₀</b> ke <b>c·P₀</b>, sehingga kuantitas naik M₀→M₁. Unit antara M₀ dan M₁ bernilai <i>kurang</i> dari biayanya — segitiga arsir = <b>DWL</b>.' },
    params: [
      { key: 'coins', label: { en: 'Coinsurance (patient share)', id: 'Koasuransi (porsi pasien)' }, min: 0, max: 1, step: 0.05, value: 0.2, fmt: function (v) { return (v * 100).toFixed(0) + '%'; } },
      { key: 'B', label: { en: 'Demand steepness', id: 'Kecuraman permintaan' }, min: 0.4, max: 1.6, step: 0.1, value: 0.8, fmt: function (v) { return v.toFixed(1); } }
    ],
    scenarios: [
      { label: { en: 'No insurance', id: 'Tanpa asuransi' }, set: { coins: 1, B: 0.8 },
        why: { en: 'Paying full price, the patient consumes M₀ where marginal benefit = marginal cost — efficient, with NO deadweight loss. This is the benchmark insurance is compared to.',
               id: 'Membayar harga penuh, pasien konsumsi M₀ tempat manfaat marginal = biaya marginal — efisien, TANPA DWL.' } },
      { label: { en: 'Full coverage', id: 'Tanggungan penuh' }, set: { coins: 0, B: 0.8 },
        why: { en: 'With a zero out-of-pocket price the patient consumes up to M₁ where marginal benefit is zero ("flat-of-the-curve" medicine). All care between M₀ and M₁ costs more than it’s worth → the LARGEST deadweight loss — the moral-hazard cost of full insurance.',
               id: 'Dengan harga saku nol, pasien konsumsi hingga M₁ tempat manfaat marginal nol. Semua layanan antara M₀ dan M₁ lebih mahal dari nilainya → DWL TERBESAR.' } },
      { label: { en: '20% co-pay', id: 'Koasuransi 20%' }, set: { coins: 0.2, B: 0.8 },
        why: { en: 'A co-payment puts some price back on the patient, so use sits between M₀ and M₁ and the deadweight loss shrinks. This is exactly why insurers use deductibles, co-pays and co-insurance.',
               id: 'Koasuransi mengembalikan sebagian harga ke pasien, jadi pemakaian di antara M₀ dan M₁ dan DWL mengecil. Inilah alasan adanya deductible, co-pay, koasuransi.' } },
      { label: { en: 'Elastic (discretionary) care', id: 'Layanan elastis' }, set: { coins: 0.2, B: 0.4 },
        why: { en: 'When demand is elastic (flat) — discretionary care like elective visits — the low insured price triggers a BIG jump in use, so moral hazard and the DWL are large. The size of moral hazard depends on the elasticity of demand for care.',
               id: 'Saat permintaan elastis (landai) — layanan diskresioner — harga rendah memicu lonjakan pemakaian BESAR, jadi moral hazard & DWL besar.' } },
      { label: { en: 'Inelastic (necessary) care', id: 'Layanan inelastis' }, set: { coins: 0.2, B: 1.5 },
        why: { en: 'Necessary care (steep, inelastic demand — emergencies, chronic treatment) barely responds to the lower price, so moral hazard and the DWL are small. Cost-sharing matters most for elastic, discretionary care.',
               id: 'Layanan wajib (permintaan curam/inelastis) hampir tak merespons harga, jadi moral hazard & DWL kecil. Pembagian biaya paling penting untuk layanan elastis.' } }
    ],
    compute: function (p) {
      var A = 10, B = p.B, P0 = 5, c = p.coins;
      var M0 = (A - P0) / B, Mp = c * P0, M1 = (A - Mp) / B;
      var dwl = 0.5 * (P0 - Mp) * (M1 - M0);
      var spend0 = P0 * M0, spend1 = P0 * M1;
      var items = [
        { t: 'line', p1: [0, A], p2: [A / B > 11.5 ? 11.5 : A / B, A - B * (A / B > 11.5 ? 11.5 : A / B)], color: C.demand, label: 'D_m' },
        { t: 'hline', y: P0, color: C.supply, label: 'S_m = MC' },
        { t: 'point', x: M0, y: P0, label: 'a', guideX: 'M_0', dx: -4, dy: -8 }
      ];
      if (c < 1) {
        items.push({ t: 'hline', y: Mp, color: C.muted, dash: true, label: 'c·P_0' });
        items.push({ t: 'point', x: M1, y: Mp, label: 'b', guideX: 'M_1', dx: 6, dy: 14 });
        items.push({ t: 'point', x: M0, y: Mp, label: 'h', dot: true, dx: -10, dy: 14, color: C.muted });
        items.push({ t: 'area', pts: [[M0, P0], [M1, Mp], [M0, Mp]], fill: C.dwl, label: 'DWL', labelColor: '#8a5414' });
      }
      return {
        axes: { x: { min: 0, max: 12, label: { en: 'Medical services / year', id: 'Layanan medis / tahun' } }, y: { min: 0, max: 11, label: { en: 'Price per unit', id: 'Harga per unit' } } },
        items: items,
        readout: [
          { label: { en: 'Patient pays', id: 'Pasien bayar' }, value: rp(Mp), color: C.muted },
          { label: 'M₀ → M₁', value: rp(M0) + ' → ' + rp(M1) },
          { label: { en: 'Total spending', id: 'Total belanja' }, value: rp(spend1) },
          { label: 'Deadweight loss', value: rp(dwl), color: '#8a5414' }
        ],
        facts: { M0: M0, M1: M1, patientPrice: Mp, dwl: dwl, spend0: spend0, spend1: spend1 }
      };
    }
  });

  /* ---- FIG 6: Expected utility & risk smoothing ---------------------------
     U(W)=W^rho (0<rho<1 → risk averse). Healthy income Wh, loss L → sick Ws=Wh-L.
     prob sick p. EV income = (1-p)Wh+p·Ws. EU=(1-p)U(Wh)+p·U(Ws) (point on chord).
     Certainty equivalent CE: U(CE)=EU → CE=EU^(1/rho). Risk premium = EV-CE. */
  F.register({
    id: 'risk-utility',
    title: { en: 'Why buy insurance: diminishing marginal utility', id: 'Mengapa beli asuransi: utilitas marginal menurun' },
    note: { en: 'Utility is <b>concave</b>, so the expected utility of the gamble (on the chord) is below the utility of the same income for certain. The gap is why a risk-averse person pays a <b>risk premium</b> to insure.',
            id: 'Utilitas <b>cekung</b>, sehingga utilitas harapan dari gambling (pada tali busur) di bawah utilitas pendapatan pasti yang sama. Selisihnya = alasan membayar <b>premi risiko</b>.' },
    params: [
      { key: 'rho', label: { en: 'Curvature ρ (risk aversion)', id: 'Kelengkungan ρ' }, min: 0.2, max: 0.95, step: 0.05, value: 0.5, fmt: function (v) { return v.toFixed(2); } },
      { key: 'p', label: { en: 'Prob. of getting sick', id: 'Peluang sakit' }, min: 0.05, max: 0.95, step: 0.05, value: 0.5, fmt: function (v) { return (v * 100).toFixed(0) + '%'; } },
      { key: 'L', label: { en: 'Loss if sick', id: 'Kerugian jika sakit' }, min: 10, max: 45, step: 5, value: 30, fmt: function (v) { return v + 'k'; } }
    ],
    scenarios: [
      { label: { en: 'Very risk averse', id: 'Sangat menghindar risiko' }, set: { rho: 0.3, p: 0.5, L: 30 },
        why: { en: 'Strong curvature means a big utility drop in the bad state, so the certainty equivalent is far below expected income — this person pays a LARGE risk premium and insures eagerly. The more concave the utility, the more valuable insurance is.',
               id: 'Kelengkungan kuat berarti utilitas jatuh besar di keadaan buruk, jadi ekuivalen kepastian jauh di bawah pendapatan harapan — orang ini bayar premi risiko BESAR.' } },
      { label: { en: 'Nearly risk neutral', id: 'Hampir netral risiko' }, set: { rho: 0.95, p: 0.5, L: 30 },
        why: { en: 'With little curvature, expected utility ≈ utility of expected income, so the risk premium is tiny. This person barely values insurance and won’t pay much above the actuarially fair premium.',
               id: 'Dengan kelengkungan kecil, utilitas harapan ≈ utilitas pendapatan harapan, jadi premi risiko sangat kecil. Orang ini nyaris tak menghargai asuransi.' } },
      { label: { en: 'Bigger potential loss', id: 'Kerugian lebih besar' }, set: { rho: 0.5, p: 0.5, L: 45 },
        why: { en: 'A larger loss widens the gap between the healthy and sick states, pushing the gamble deep into the concave region → the risk premium rises. Catastrophic risks (big L) are worth the most to insure.',
               id: 'Kerugian lebih besar melebarkan jarak keadaan sehat–sakit, mendorong gambling ke wilayah cekung → premi risiko naik. Risiko katastrofik paling layak diasuransikan.' } }
    ],
    compute: function (p) {
      var Wh = 50, L = p.L, Ws = Wh - L, rho = p.rho, pr = p.p;
      function U(w) { return Math.pow(w, rho); }
      var Uh = U(Wh), Us = U(Ws);
      var EVi = (1 - pr) * Wh + pr * Ws;
      var EU = (1 - pr) * Uh + pr * Us;
      var CE = Math.pow(EU, 1 / rho);
      var riskPrem = EVi - CE;
      var Umax = U(60);
      var pts = F.sample(U, 0, 60, 70);
      return {
        axes: { x: { min: 0, max: 62, label: { en: 'Income (k)', id: 'Pendapatan (k)' } }, y: { min: 0, max: Umax * 1.05, label: 'Utility' } },
        items: [
          { t: 'curve', pts: pts, color: C.accent, smooth: true, width: 2.4, label: 'U' },
          { t: 'seg', pts: [[Ws, Us], [Wh, Uh]], color: C.muted, dash: true, width: 1.6 },
          { t: 'point', x: Ws, y: Us, label: { en: 'sick', id: 'sakit' }, guideX: '', dx: 6, dy: 16, color: C.demand },
          { t: 'point', x: Wh, y: Uh, label: { en: 'healthy', id: 'sehat' }, dx: -2, dy: -10, color: C.supply },
          { t: 'point', x: EVi, y: EU, label: 'E[U]', guideX: 'E[W]', dx: 7, dy: 16, color: C.ink },
          { t: 'point', x: CE, y: EU, label: 'CE', guideX: '', dx: -6, dy: -10, color: C.alt },
          { t: 'point', x: EVi, y: U(EVi), label: 'U(E[W])', dot: true, dx: 6, dy: -8, color: C.accent },
          { t: 'arrow', p1: [CE, EU * 0.5], p2: [EVi, EU * 0.5], color: C.alt }
        ],
        readout: [
          { label: 'E[income]', value: rp(EVi) + 'k' },
          { label: { en: 'Certainty equiv.', id: 'Ekuivalen kepastian' }, value: rp(CE) + 'k', color: C.alt },
          { label: { en: 'Risk premium', id: 'Premi risiko' }, value: rp(riskPrem) + 'k', color: C.alt },
          { label: 'E[U] < U(E[W])', value: rp(EU) + ' < ' + rp(U(EVi)) }
        ],
        facts: { EVincome: EVi, EU: EU, UofEV: U(EVi), CE: CE, riskPremium: riskPrem, concave: U(EVi) > EU }
      };
    }
  });
})();
