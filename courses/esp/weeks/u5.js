/* ESP Unit 5 — Social security & public pensions. Source: Gruber Ch.11 + endterm notes. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u5 = {
    id: 'u5',
    label: { en: 'Unit 5', id: 'Unit 5' },
    title: { en: 'Social Security & Public Pensions', id: 'Jaminan Sosial & Pensiun Publik' },
    subtitle: { en: 'Annuities & consumption smoothing · PAYG vs funded · the PIA formula · crowding out · reform', id: 'Anuitas & pemulusan konsumsi · PAYG vs funded · rumus PIA · crowding out · reformasi' },

    notes: [
      {
        heading: { en: 'Why have social security?', id: 'Mengapa ada jaminan sosial?' }, num: '1',
        cards: [
          { title: { en: 'Consumption smoothing & the annuity-market failure', id: 'Pemulusan konsumsi & kegagalan pasar anuitas' },
            html: '<p>A private <span class="key">annuity</span> insures against <span class="key">longevity risk</span> — outliving your savings — by paying a monthly income for life in exchange for a lump sum. In theory it lets you <b>smooth consumption</b> into retirement.</p>' +
              '<p>But annuity markets suffer <span class="key">adverse selection</span>: buyers know their own health better than the insurer. Short-lived people opt out → the pool is disproportionately long-lived → the insurer raises prices/cuts payouts → even moderately healthy people drop out → the market becomes expensive, thin, or collapses (same death-spiral logic as Unit 4).</p>' +
              '<div class="note">💡 Mandatory public social security solves the annuity-market failure by pooling <b>everyone</b>, plus other justifications: lack of foresight/paternalism, lower decision & admin costs, income redistribution, improving the status of the aged.</div>' },
          { title: { en: 'PAYG vs fully funded', id: 'PAYG vs fully funded' },
            html: '<table><thead><tr><th> </th><th>Fully funded</th><th>Pay-As-You-Go (PAYG)</th></tr></thead><tbody>' +
              '<tr><td>Benefit source</td><td>Your own deposits + accumulated interest.</td><td>Taxes paid by <b>current workers</b>.</td></tr>' +
              '<tr><td>Demographic risk</td><td>Lower — tied to own savings.</td><td><b>High</b> — rising dependency ratio strains it.</td></tr>' +
              '<tr><td>Fiscal trajectory</td><td>Limits long-run exposure; market-return risk.</td><td>Needs reform (raise age/tax, cut benefit) to avoid deficits.</td></tr>' +
              '</tbody></table>' +
              '<p>Most public systems are <b>partially funded</b> today. Indonesia’s civil-service pension is PAYG, generating a ~Rp 3,200 T unfunded liability (Unit 3) — the case for reform.</p>' }
        ]
      },
      {
        heading: { en: 'Benefits & redistribution', id: 'Manfaat & redistribusi' }, num: '2',
        cards: [
          { title: { en: 'The benefit (PIA) formula is progressive', id: 'Rumus manfaat (PIA) progresif' },
            html: '<p>Benefits build on <span class="key">AIME</span> (Average Indexed Monthly Earnings — average of the 35 highest-paid years, inflation-indexed). The <span class="key">PIA</span> (Primary Insurance Amount) applies <b>falling</b> marginal replacement rates at two bend points:</p>' +
              '<div class="formula">$$ PIA = 0.90\\,\\min(AIME, b_1) + 0.32\\,(\\text{mid band}) + 0.15\\,(\\text{top band}) $$</div>' +
              '<p>with bend points $b_1=\\$711$, $b_2=\\$4288$. Because the rate falls 90% → 32% → 15%, low earners get back a <b>higher share</b> of their earnings — the formula is <b>progressive</b>. See the Graphs tab.</p>' },
          { title: { en: 'Intergenerational redistribution', id: 'Redistribusi antargenerasi' },
            html: '<p>In a PAYG system, if total benefits = total taxes each period:</p>' +
              '<div class="formula">$$ N_b\\,B = t\\,N_w\\,w \\;\\Rightarrow\\; B = t\\,\\frac{N_w}{N_b}\\,w $$</div>' +
              '<p>The benefit per retiree depends on the <span class="key">worker-to-retiree ratio</span> $N_w/N_b$. Rearranged, the required tax rate is:</p>' +
              '<div class="formula">$$ t = \\underbrace{\\frac{N_b}{N_w}}_{\\text{dependency ratio}} \\times \\underbrace{\\frac{B}{w}}_{\\text{replacement ratio}} $$</div>' +
              '<div class="tip">📝 As the population ages, the dependency ratio $N_b/N_w$ rises → the tax needed to pay the same benefit rises. This is the long-run stress on every PAYG system.</div>' }
        ]
      },
      {
        heading: { en: 'Saving, retirement & reform', id: 'Tabungan, pensiun & reformasi' }, num: '3',
        cards: [
          { title: { en: 'Does social security crowd out private saving?', id: 'Apakah jaminan sosial menggusur tabungan swasta?' },
            html: '<p>Life-cycle theory: people save while working to fund retirement. Social security adds three effects:</p>' +
              '<ul><li><b>Wealth-substitution effect</b>: social-security wealth substitutes for private saving → saving falls.</li>' +
              '<li><b>Retirement effect</b>: it encourages earlier retirement → need to save <i>more</i> → offsets.</li>' +
              '<li><b>Bequest effect</b>: people save to offset the burden on their children → offsets.</li></ul>' +
              '<p>An <b>actuarially fair</b> forced contribution moves the endowment <i>along</i> the same budget line, so optimal consumption is unchanged and <b>private saving falls one-for-one</b> — total saving is unchanged. Feldstein (1974) vs Leimer–Lesnoy (1982) debate the empirical size. See the Graphs tab.</p>' },
          { title: { en: 'Reform options & the policy frame', id: 'Opsi reformasi & kerangka kebijakan' },
            html: '<p><b>Maintain the system</b>: raise the payroll tax, raise the taxable-earnings ceiling, raise the retirement age, reduce the COLA, change the benefit formula. <b>Privatize</b>: personal accounts (carve-out or add-on) — trade solvency & ownership against market risk and admin cost.</p>' +
              '<div class="note">💡 Endterm policy frame — <b>Program A</b> (universal non-contributory floor) vs <b>Program B</b> (matching grant on private savings). Evaluate on: <b>allocative efficiency</b> (income vs substitution effects on labour/saving), <b>target efficiency</b> (A = no under-coverage but high leakage to the rich; B = low leakage but high under-coverage of the poorest who cannot save), and <b>deadweight loss / fiscal cost</b>. Add real-world frictions: formal-labour disincentives, informal-sector compliance gaps, and long-run solvency under aging.</div>' }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'PAYG balance & intergenerational transfer', id: 'Keseimbangan PAYG' },
          html: '<div class="formula">$$ N_b B = t\\,N_w w \\;\\Rightarrow\\; B = t\\,\\frac{N_w}{N_b}\\,w, \\qquad t = \\frac{N_b}{N_w}\\cdot\\frac{B}{w} $$</div>' +
            '<p>t = dependency ratio × replacement ratio.</p>' },
        { title: { en: 'Benefit (PIA) formula', id: 'Rumus manfaat (PIA)' },
          html: '<div class="formula">$$ PIA = .90\\,\\min(AIME, 711) + .32\\,[\\min(AIME,4288)-711]^+ + .15\\,[AIME-4288]^+ $$</div>' +
            '<p>$[x]^+ = \\max(x,0)$. Replacement rate falls as AIME rises → progressive.</p>' },
        { title: { en: 'Intertemporal budget constraint', id: 'Kendala anggaran antarwaktu' },
          html: '<div class="formula">$$ c_1 = I_1 + (1+r)(I_0 - c_0), \\qquad \\text{slope} = -(1+r) $$</div>' +
            '<p>Optimum where the indifference curve is tangent: MRS = (1+r). Saving = $I_0 - c_0^{*}$.</p>' },
        { title: { en: 'Actuarially fair contribution', id: 'Iuran adil-aktuaria' },
          html: '<div class="formula">$$ \\text{Pay } T \\text{ now, receive } (1+r)T \\text{ later} \\Rightarrow \\text{endowment slides along the same budget line} $$</div>' +
            '<p>⇒ optimum unchanged ⇒ private saving falls by exactly T.</p>' }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Consumption smoothing across time', id: 'Pemulusan konsumsi antarwaktu' },
          html: '<p>The budget line has slope −(1+r) through the endowment A; the optimum is where an indifference curve is tangent. Make income now large and impatience low → the person saves (moves left of A); reverse it → they borrow. This is the engine of the life-cycle saving story.</p>',
          chartId: 'intertemporal' },
        { title: { en: 'Social Security benefit (PIA): a progressive kink', id: 'Manfaat PIA: kelok progresif' },
          html: '<p>Slide AIME along the kinked benefit line. The marginal replacement drops at each bend point (90% → 32% → 15%), so the replacement rate (benefit ÷ AIME) falls as earnings rise — the formula redistributes toward low earners.</p>',
          chartId: 'ss-pia' },
        { title: { en: 'Social Security crowds out private saving', id: 'Jaminan sosial menggusur tabungan' },
          html: '<p>An actuarially-fair payroll tax moves the endowment from A to A′ <i>along the same budget line</i>, so the optimum doesn’t move. Households simply cut their own saving by the contribution — private saving falls one-for-one while total (private + forced) saving stays put.</p>',
          chartId: 'ss-crowdout' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'Why does the private annuity market fail, and how does mandatory public social security fix it?', id: 'Mengapa pasar anuitas swasta gagal, dan bagaimana jaminan sosial wajib memperbaikinya?' },
        answer: [
          { en: 'Adverse selection: only people expecting to live long buy annuities; the insurer must raise prices for the long-lived pool, pushing out the moderately healthy — the market thins or collapses.', id: 'Adverse selection: hanya yang berumur panjang membeli; harga naik, pasar menyusut.' },
          { en: 'A mandatory public program pools <b>everyone</b> (long- and short-lived), eliminating the selection problem and providing a guaranteed lifetime income.', id: 'Program wajib menyatukan <b>semua</b>, menghapus selection dan menjamin pendapatan seumur hidup.' }
        ], tip: { en: 'Compulsory pooling cures annuity adverse selection, just like health insurance.', id: 'Pooling wajib menyembuhkan adverse selection anuitas.' } },
      { type: 'quant', q: { en: 'A PAYG system has 3 workers per retiree, wage w = 1000, and pays benefit B = 600 per retiree. What payroll tax rate balances the system?', id: 'Sistem PAYG: 3 pekerja per pensiunan, upah w = 1000, manfaat B = 600. Berapa tarif pajak penyeimbang?' },
        answer: [
          { en: 'Balance: $B = t (N_w/N_b) w$ ⇒ 600 = t × 3 × 1000.', id: 'Keseimbangan: 600 = t × 3 × 1000.' },
          { en: 't = 600 / 3000 = <b>0.20 (20%)</b>.', id: 't = 600 / 3000 = <b>0,20 (20%)</b>.' },
          { en: 'If aging cuts the ratio to 2 workers per retiree, the same B needs t = 600/2000 = 30% — the demographic squeeze.', id: 'Jika rasio turun ke 2, t harus 30% — tekanan demografi.' }
        ], tip: { en: 't = dependency ratio × replacement ratio.', id: 't = rasio ketergantungan × rasio penggantian.' } },
      { type: 'scenario', q: { en: 'A government introduces an actuarially fair mandatory pension. Using the intertemporal model, predict the effect on private and total saving.', id: 'Pemerintah memperkenalkan pensiun wajib adil-aktuaria. Pakai model antarwaktu: prediksi efek pada tabungan swasta dan total.' },
        answer: [
          { en: 'The contribution T now / (1+r)T later moves the endowment <b>along the same budget line</b>, so the optimal consumption bundle is unchanged.', id: 'Iuran T sekarang / (1+r)T nanti menggeser endowment di garis anggaran yang sama; konsumsi optimal tak berubah.' },
          { en: 'Private saving falls by exactly T (the state now does that saving for you); <b>total</b> saving is unchanged — pure crowd-out in the pure model.', id: 'Tabungan swasta turun tepat T; total tetap — crowd-out penuh dalam model murni.' },
          { en: 'In practice, retirement and bequest effects can offset, so empirical crowd-out is less than one-for-one.', id: 'Dalam praktik, efek pensiun & warisan mengimbangi, jadi crowd-out empiris < satu-lawan-satu.' }
        ], tip: { en: 'Same budget line ⇒ same optimum ⇒ private saving absorbs the whole contribution.', id: 'Garis anggaran sama ⇒ optimum sama ⇒ tabungan swasta menyerap seluruh iuran.' } }
    ]
  };
})();
