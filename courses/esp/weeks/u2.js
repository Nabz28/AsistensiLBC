/* ESP Unit 2 — State revenue & the economics of taxation. Source: Kuliah 9. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u2 = {
    id: 'u2',
    label: { en: 'Unit 2', id: 'Unit 2' },
    title: { en: 'State Revenue & the Economics of Taxation', id: 'Pendapatan Negara & Ekonomi Perpajakan' },
    subtitle: { en: 'Principles of taxation · PPh · PPN · excise · tax expenditure · tax ratio & buoyancy · BEPS', id: 'Prinsip perpajakan · PPh · PPN · cukai · belanja perpajakan · tax ratio & buoyancy · BEPS' },

    notes: [
      {
        heading: { en: 'What tax is, and the principles', id: 'Apa itu pajak, dan prinsipnya' }, num: '1',
        cards: [
          { title: { en: 'Definition (UUD 1945 Pasal 23A)', id: 'Definisi (UUD 1945 Pasal 23A)' },
            html: '<p><span class="key">Pajak</span> is a <b>compulsory</b> payment by individuals or firms to the state, <b>with no direct counter-service</b> (tanpa balas jasa langsung), used to finance public services, infrastructure and social protection. "Segala pajak untuk keperluan negara berdasarkan undang-undang."</p>' +
              '<p>Indonesian revenue (<i>Pendapatan Negara</i>) = <b>Perpajakan</b> (Pajak + Kepabeanan & Cukai) + <b>PNBP</b> (natural resources, K/L services, BLU) + <b>Hibah</b>. Perpajakan is ~85% of the APBN target.</p>' },
          { title: { en: 'Five principles of a good tax system', id: 'Lima prinsip sistem pajak yang baik' },
            html: '<table><thead><tr><th>Principle</th><th>Meaning</th></tr></thead><tbody>' +
              '<tr><td><b>Economic efficiency</b></td><td>Minimise distortion of allocation (behavioural, financial, organizational, announcement, general-equilibrium effects).</td></tr>' +
              '<tr><td><b>Fairness</b></td><td><span class="key">Horizontal equity</span> (equal circumstances → equal tax) and <span class="key">vertical equity</span> (greater ability to pay → more tax).</td></tr>' +
              '<tr><td><b>Administrative simplicity</b></td><td>Low cost of administration and compliance.</td></tr>' +
              '<tr><td><b>Flexibility</b></td><td>Easy to adapt to changed circumstances.</td></tr>' +
              '<tr><td><b>Political responsibility</b></td><td>Transparency — taxpayers can see what they pay.</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Policy vs administration: <b>tax policy</b> sets subject, object, rate; <b>tax administration</b> sets procedure & mechanism.</div>' }
        ]
      },
      {
        heading: { en: 'The big three: PPh, PPN, Cukai', id: 'Tiga utama: PPh, PPN, Cukai' }, num: '2',
        cards: [
          { title: { en: 'PPh — income tax (progressive, direct)', id: 'PPh — pajak penghasilan' },
            html: '<p>Object = <span class="key">penghasilan</span> (any addition to economic capacity, from Indonesia or abroad). Subject = individuals (OP) or entities (Badan).</p>' +
              '<ul><li><b>PPh Orang Pribadi</b>: progressive <b>brackets</b> on taxable income (PKP), top rate <b>35%</b> above Rp 5 bn. Deduct <span class="key">PTKP</span> (Rp 54 jt self; +4.5 jt married; +4.5 jt per dependant, max 3) and biaya jabatan (5%, max Rp 6 jt/yr).</li>' +
              '<li><b>PPh Badan</b>: normal <b>22%</b> of business profit; or <b>final 0.5% of turnover</b> for UMKM (omzet < Rp 4.8 bn/yr).</li></ul>' +
              '<div class="tip">📝 Pro/con of final vs normal: final is simple (0.5% × omzet) but ignores actual profit/loss — a loss-making firm still pays.</div>' },
          { title: { en: 'PPN — value-added tax (indirect, objective)', id: 'PPN — pajak pertambahan nilai' },
            html: '<p>A tax on <b>domestic consumption</b> levied at every production/distribution stage, <b>non-cumulative</b> via the credit method: each seller remits <span class="key">Output VAT (PK) − Input VAT (PM)</span>. Standard effective rate <b>11%</b> (12% on luxury). It is <b>regressive</b> against income.</p>' +
              '<div class="formula">$$ \\text{VAT remitted} = PK - PM = 11\\% \\times (\\text{sales} - \\text{inputs}) $$</div>' +
              '<p>Negative-list principle: <b>everything</b> is taxable (BKP/JKP) <i>except</i> what the law exempts (basic staples, health, education, financial & insurance services, public transport). Only a <span class="key">PKP</span> can credit input VAT; a non-PKP (small business, omzet ≤ Rp 4.8 bn) cannot.</p>' },
          { title: { en: 'Cukai — excise on tobacco (a corrective tax)', id: 'Cukai — cukai hasil tembakau' },
            html: '<p><span class="key">Cukai</span> targets goods whose consumption must be controlled and whose use harms society/environment. Four pillars: <b>consumption control, industry/labour, state revenue, illegal-goods enforcement</b>.</p>' +
              '<p>Tobacco is the 2nd-largest spend for poor households (above protein); a +1% cigarette spend raises the chance of falling into poverty ~6%. Indonesia’s adult male smoking prevalence (71.3%) is the world’s highest and cigarettes are cheap (~$2.1 vs world avg $4).</p>' +
              '<div class="note">💡 Tariff design has a downside: a <b>wide gap</b> between tier rates lets producers shift output to lower-taxed tiers; the number of layers fell from 19 (2009) to 8 (2022) to reduce this. Big tariff hikes also raise the <b>illegal cigarette</b> share (~0.8pp per 10% hike).</div>' }
        ]
      },
      {
        heading: { en: 'Tax expenditure & tax–economy links', id: 'Belanja perpajakan & pajak–ekonomi' }, num: '3',
        cards: [
          { title: { en: 'Belanja perpajakan (tax expenditure)', id: 'Belanja perpajakan' },
            html: '<p>Tax has two roles: <b>raise revenue</b> (budgetair) <i>and</i> <b>give incentives</b> (regulerend) by exempting or not-collecting tax for priority activities — this <span class="key">forgone revenue</span> is <b>tax expenditure</b>.</p>' +
              '<p>Indonesia 2025 estimate: <b>Rp 530.3 T (2.23% GDP)</b>, mostly PPN (57%) and PPh (35%). Largest beneficiary group: households (Rp 292.7 T), then UMKM (Rp 96.4 T) and the investment climate (Rp 84.3 T). Reported by BKF/DJSEF since 2018.</p>' },
          { title: { en: 'Tax ratio & tax buoyancy', id: 'Tax ratio & tax buoyancy' },
            html: '<p><span class="key">Tax ratio</span> = tax revenue ÷ GDP (OECD: compulsory unrequited payments to general government). Indonesia ~10% — low vs OECD avg 34.1% → much room to optimise.</p>' +
              '<p><span class="key">Tax buoyancy</span> = % growth of tax ÷ % growth of GDP — how responsive tax is to the economy.</p>' +
              '<div class="formula">$$ \\text{Buoyancy} = \\frac{\\%\\,\\Delta\\,\\text{Tax}}{\\%\\,\\Delta\\,\\text{GDP}} $$</div>' +
              '<table><thead><tr><th>Buoyancy</th><th>Meaning</th></tr></thead><tbody>' +
              '<tr><td>&gt; 1</td><td>Tax grows faster than GDP — responsive/strong.</td></tr>' +
              '<tr><td>= 1</td><td>Tax grows in step with GDP.</td></tr>' +
              '<tr><td>&lt; 1</td><td>Tax lags GDP — potential not yet optimal.</td></tr>' +
              '<tr><td>&lt; 0</td><td>Tax falls while GDP grows — incentives, shocks, weak administration.</td></tr>' +
              '</tbody></table>' }
        ]
      },
      {
        heading: { en: 'International tax: avoiding the race to the bottom', id: 'Pajak internasional' }, num: '4',
        cards: [
          { title: { en: 'Globalization erodes the corporate tax base', id: 'Globalisasi mengikis basis pajak' },
            html: '<p>Digital trade, intangible value and mobile capital let multinationals <b>shift profits</b> to low-tax jurisdictions — <span class="key">BEPS</span> (Base Erosion & Profit Shifting). Tax competition pushes rates down (a "race to the bottom") and squeezes corporate income tax.</p>' +
              '<p>Tools: <b>P3B / tax treaties</b> (eliminate double taxation, allocate taxing rights — Indonesia has 71), the <b>MLI</b> (since 2017, harmonises treaties), exchange of information (EOI), and Advance Pricing Agreements (APA) for transfer pricing.</p>' },
          { title: { en: 'The global Two-Pillar Solution (2021)', id: 'Solusi 2 Pilar (2021)' },
            html: '<p>October 2021: 135 BEPS countries agreed a two-pillar deal for the digital economy.</p>' +
              '<ul><li><b>Pillar One</b> — gives market jurisdictions taxing rights <i>without</i> physical presence (Amount A); simplifies arm’s-length for distribution (Amount B).</li>' +
              '<li><b>Pillar Two</b> — a <b>global minimum tax of 15%</b> on MNEs (GloBE rules + Subject-to-Tax Rule), so shifting profit to tax havens no longer escapes tax.</li></ul>' +
              '<div class="tip">📝 The point of Pillar Two is to stop the race to the bottom by setting a floor under corporate tax.</div>' }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'PPN credit (input–output) method', id: 'Metode kredit PPN' },
          html: '<div class="formula">$$ \\text{PPN setor} = PK - PM = 11\\% \\times (\\text{harga jual} - \\text{harga beli}) $$</div>' +
            '<p>Summed across the chain, total PPN = 11% × total value added. Only a PKP can credit PM.</p>' },
        { title: { en: 'PPh OP taxable income', id: 'Penghasilan kena pajak OP' },
          html: '<div class="formula">$$ PKP = \\text{Penghasilan neto} - PTKP, \\quad PPh = \\text{tarif bracket} \\times PKP $$</div>' +
            '<p>PTKP 2016+: Rp 54 jt (self) + 4.5 jt (married) + 4.5 jt per dependant (max 3). Top bracket 35% above Rp 5 bn.</p>' },
        { title: { en: 'Tax ratio & buoyancy', id: 'Tax ratio & buoyancy' },
          html: '<div class="formula">$$ \\text{Tax ratio} = \\frac{\\text{Tax revenue}}{GDP}, \\qquad \\text{Buoyancy} = \\frac{\\%\\,\\Delta\\,\\text{Tax}}{\\%\\,\\Delta\\,GDP} $$</div>' },
        { title: { en: 'Tax incidence & deadweight loss (linear D, S)', id: 'Insidensi pajak & DWL' },
          html: '<div class="formula">$$ \\text{Buyers\' share} = \\frac{b_D}{b_D+b_S}, \\qquad DWL = \\tfrac12\\, t\\,(Q_0 - Q_t) = \\frac{t^2}{2(b_D+b_S)} $$</div>' +
            '<p>The <b>more inelastic (steeper) side bears more</b> of the tax. See the Graphs tab.</p>' }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Tax incidence & deadweight loss', id: 'Insidensi pajak & deadweight loss' },
          html: '<p>A per-unit tax drives a wedge between the price buyers pay (P<sub>b</sub>) and sellers keep (P<sub>s</sub>). Drag the steepness sliders: whichever side is steeper (more inelastic) ends up paying more of the tax. The orange triangle is the deadweight loss — output the tax destroys.</p>',
          chartId: 'tax-dwl' },
        { title: { en: 'The Laffer curve', id: 'Kurva Laffer' },
          html: '<p>Revenue is the rate times the (shrinking) base, so it traces an inverted U. Below <b>t*</b> a higher rate raises revenue; above it, the base falls faster than the rate rises and revenue drops. This is the formal version of "a low tax ratio can mean rates are too high <i>or</i> the base is too narrow."</p>',
          chartId: 'laffer' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'PPN is called a "consumption-type, indirect, objective, non-cumulative" tax. Explain each adjective in one line.', id: 'PPN disebut pajak konsumsi, tidak langsung, objektif, non-kumulatif. Jelaskan tiap istilah.' },
        answer: [
          { en: '<b>Consumption-type</b>: it taxes final domestic consumption, not income or production per se.', id: '<b>Konsumsi</b>: memajaki konsumsi akhir dalam negeri.' },
          { en: '<b>Indirect</b>: the bearer (consumer) differs from the remitter (the PKP seller).', id: '<b>Tidak langsung</b>: pemikul (konsumen) berbeda dari penyetor (PKP).' },
          { en: '<b>Objective</b>: liability arises from the object/transaction, regardless of who the taxpayer is.', id: '<b>Objektif</b>: kewajiban timbul dari objek/transaksi.' },
          { en: '<b>Non-cumulative</b>: the credit method (PK − PM) means tax is paid only on value added at each stage, not tax-on-tax.', id: '<b>Non-kumulatif</b>: metode kredit (PK − PM) memajaki hanya nilai tambah.' }
        ], tip: { en: 'Credit method is what makes it non-cumulative.', id: 'Metode kredit membuatnya non-kumulatif.' } },
      { type: 'quant', q: { en: 'A trader buys inputs for Rp 200,000 and sells for Rp 500,000. PPN is 11%. How much PPN does she remit?', id: 'Pedagang beli input Rp 200.000, jual Rp 500.000. PPN 11%. Berapa yang disetor?' },
        answer: [
          { en: 'Output VAT PK = 11% × 500,000 = Rp 55,000.', id: 'PK = 11% × 500.000 = Rp 55.000.' },
          { en: 'Input VAT PM = 11% × 200,000 = Rp 22,000.', id: 'PM = 11% × 200.000 = Rp 22.000.' },
          { en: 'Remit PK − PM = <b>Rp 33,000</b> = 11% of the Rp 300,000 value added.', id: 'Setor PK − PM = <b>Rp 33.000</b> = 11% dari nilai tambah Rp 300.000.' }
        ], tip: { en: 'Always PK − PM; the result is 11% of value added.', id: 'Selalu PK − PM; hasilnya 11% nilai tambah.' } },
      { type: 'scenario', q: { en: 'Tax buoyancy was 2.04 in 2022 but −0.08 in 2025. What does each number tell you, and name two causes of buoyancy below zero.', id: 'Buoyancy 2,04 (2022) lalu −0,08 (2025). Apa artinya, dan dua penyebab buoyancy < 0?' },
        answer: [
          { en: '2.04 (>1): tax grew about twice as fast as GDP — a very responsive/strong year (commodity boom, recovery).', id: '2,04 (>1): pajak tumbuh ~2× lebih cepat dari PDB — sangat responsif.' },
          { en: '−0.08 (<0): tax <b>fell</b> even though GDP grew — a danger sign.', id: '−0,08 (<0): pajak <b>turun</b> walau PDB tumbuh — tanda bahaya.' },
          { en: 'Causes of negative buoyancy: large new tax incentives (tax expenditure), a commodity-price shock hitting PPh migas, or weakening administration/compliance.', id: 'Penyebab: insentif pajak besar, shock harga komoditas, atau pelemahan administrasi.' }
        ], tip: { en: 'Buoyancy < 0 = base shrank or incentives ballooned, not just slow growth.', id: 'Buoyancy < 0 = basis menyusut atau insentif membengkak.' } },
      { type: 'concept', q: { en: 'Why does the government tax tobacco heavily, and what is the trade-off of a very high excise rate?', id: 'Mengapa rokok dikenai cukai tinggi, dan apa trade-off tarif yang sangat tinggi?' },
        answer: [
          { en: 'Tobacco creates negative externalities and is a corrective (Pigouvian) target: control consumption (esp. child smokers), protect health, raise revenue.', id: 'Rokok menimbulkan eksternalitas negatif: kendalikan konsumsi, lindungi kesehatan, hasilkan penerimaan.' },
          { en: 'Trade-off: very high or widely-spaced tariffs push consumers to cheaper tiers and raise the <b>illegal-cigarette</b> share (~0.8pp per 10% hike), eroding revenue and harming tobacco-sector labour (SKT).', id: 'Trade-off: tarif sangat tinggi mendorong ke tier murah dan menaikkan rokok ilegal serta menekan tenaga kerja SKT.' }
        ], tip: { en: 'Corrective tax vs illegal-market leakage and labour impact.', id: 'Pajak korektif vs kebocoran pasar ilegal dan dampak tenaga kerja.' } }
    ]
  };
})();
