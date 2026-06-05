/* ESP Unit 4 — The health-care market & insurance. Source: Gruber Ch.9 + endterm notes. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u4 = {
    id: 'u4',
    label: { en: 'Unit 4', id: 'Unit 4' },
    title: { en: 'The Health-Care Market & Insurance', id: 'Pasar Kesehatan & Asuransi' },
    subtitle: { en: 'Risk smoothing · adverse selection · moral hazard & DWL · why government intervenes', id: 'Pemulusan risiko · adverse selection · moral hazard & DWL · alasan intervensi negara' },

    notes: [
      {
        heading: { en: 'Why we buy insurance', id: 'Mengapa kita beli asuransi' }, num: '1',
        cards: [
          { title: { en: 'Expected value vs risk smoothing', id: 'Nilai harapan vs pemulusan risiko' },
            html: '<p>An insurance premium buys compensation if a bad event happens. People buy insurance for two reasons:</p>' +
              '<ol><li><b>Expected value</b> of the payout: $EV = \\sum_i p_i \\times \\text{payout}_i$.</li>' +
              '<li><b>Risk smoothing</b>: paying money to <b>guarantee</b> a certain level of consumption if the adverse event occurs.</li></ol>' +
              '<p>Two options with the <i>same</i> expected income are not equally good: a risk-averse person prefers the <b>certain</b> one. That preference is driven by <span class="key">diminishing marginal utility</span> of income — utility is concave.</p>' },
          { title: { en: 'Actuarially fair premium, risk aversion & loading', id: 'Premi adil-aktuaria, risk aversion & loading' },
            html: '<ul><li><span class="key">Actuarially fair</span> premium = expected payout.</li>' +
              '<li><span class="key">Risk aversion</span>: willingness to pay <i>more</i> than fair — a <span class="key">risk premium</span> — to guarantee compensation.</li>' +
              '<li><span class="key">Loading fee</span> = premium charged − actuarially fair premium (ratio ≈ 1.20 for private insurers).</li></ul>' +
              '<p><span class="key">Risk pooling</span>: pooling many independent risks lowers variance (law of large numbers), so premiums fall in a large population.</p>' +
              '<div class="tip">📝 Because utility is concave, $U(E[W]) > E[U(W)]$ — the certainty equivalent is below expected income, and the gap is what a person will pay to insure. See the Graphs tab.</div>' }
        ]
      },
      {
        heading: { en: 'Why the health market fails', id: 'Mengapa pasar kesehatan gagal' }, num: '2',
        cards: [
          { title: { en: 'Adverse selection & the death spiral', id: 'Adverse selection & death spiral' },
            html: '<p><span class="key">Asymmetric information</span>: the individual knows her own risk, the insurer does not. Charging everyone the same premium attracts the <b>high-risk</b> and repels the <b>low-risk</b> → <span class="key">adverse selection</span>.</p>' +
              '<p>The <b>death spiral</b>: high-risk pool → premiums rise → healthier people drop out → pool gets sicker → premiums rise again → market thins or collapses. (Same logic kills the private annuity market — Unit 5.)</p>' +
              '<div class="note">💡 Counterforce: if risk-averse people are also healthier, <b>advantageous selection</b> can partly offset adverse selection. Insurers also use <b>experience rating</b> (price by risk) vs <b>community rating</b> (one price) — an equity/efficiency trade-off.</div>' },
          { title: { en: 'Moral hazard', id: 'Moral hazard' },
            html: '<p><span class="key">Moral hazard</span>: once insured, the out-of-pocket price of care drops toward zero, so people consume <b>more</b> care (and take less care of their health). Every third-party payment system creates it.</p>' +
              '<p>Tools to curb it: <span class="key">deductible</span> (pay first $X yourself), <span class="key">co-payment</span> (fixed fee per service), <span class="key">co-insurance</span> (pay a % of the cost).</p>' +
              '<div class="tip">📝 The extra care induced by low prices is worth <i>less</i> than its cost — that triangle is the deadweight loss of insurance. See the Graphs tab.</div>' }
        ]
      },
      {
        heading: { en: 'Other failures & the case for intervention', id: 'Kegagalan lain & alasan intervensi' }, num: '3',
        cards: [
          { title: { en: 'Externalities, information, merit good', id: 'Eksternalitas, informasi, merit good' },
            html: '<ul><li><b>Externalities</b>: vaccination & treating infectious disease protect others (positive) → private market under-provides prevention; untreated illness drains productivity (negative).</li>' +
              '<li><b>Asymmetric information / supplier-induced demand</b>: doctors are both advisor and seller; patients cannot judge necessity → over-treatment.</li>' +
              '<li><b>Merit good & equity</b>: health is something people <i>ought</i> to access regardless of ability to pay (commodity egalitarianism, paternalism).</li></ul>' +
              '<p>Cost inflation drivers (Gruber): aging population, income growth, quality improvements, commodity egalitarianism. The US spent ~17.9% of GDP on health (2010).</p>' },
          { title: { en: 'Three intervention models', id: 'Tiga model intervensi' },
            html: '<table><thead><tr><th>Model</th><th>Mechanism</th><th>Example</th></tr></thead><tbody>' +
              '<tr><td><b>Beveridge</b> (direct provision)</td><td>State owns hospitals, employs staff, funds from progressive tax; free at point of service.</td><td>UK (NHS), Cuba</td></tr>' +
              '<tr><td><b>Bismarck</b> (social insurance)</td><td>Mandatory payroll-deducted social-insurance funds, jointly managed; state subsidises those who can’t pay.</td><td>Germany, <b>Indonesia (BPJS/JKN)</b></td></tr>' +
              '<tr><td><b>Regulated private + subsidies</b></td><td>Private insurers/providers, heavy regulation + targeted public programs.</td><td>US (Medicare/Medicaid)</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Demand-side tool: <b>Conditional Cash Transfers (CCTs)</b> — cash to poor households conditional on school attendance and clinic visits — fight current poverty <i>and</i> break its intergenerational transmission by forcing human-capital investment.</div>' }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'Expected value of a gamble', id: 'Nilai harapan' },
          html: '<div class="formula">$$ EV = \\sum_i p_i \\cdot \\text{payout}_i $$</div><p>e.g. $\\tfrac14(\\$12)+\\tfrac34(-\\$4)=\\$0$.</p>' },
        { title: { en: 'Risk premium & certainty equivalent', id: 'Premi risiko & ekuivalen kepastian' },
          html: '<div class="formula">$$ E[U] = (1-p)\\,U(W_h) + p\\,U(W_s), \\qquad U(CE) = E[U] $$</div>' +
            '<div class="formula">$$ \\text{Risk premium} = E[W] - CE > 0 \\ \\text{(concave } U) $$</div>' },
        { title: { en: 'Actuarially fair premium & loading', id: 'Premi adil & loading' },
          html: '<div class="formula">$$ \\text{Fair premium} = \\text{expected payout}, \\qquad \\text{Loading} = \\text{premium} - \\text{fair premium} $$</div>' },
        { title: { en: 'Deadweight loss of insurance', id: 'DWL asuransi' },
          html: '<div class="formula">$$ DWL = \\tfrac12\\,(P_0 - c\\,P_0)\\,(M_1 - M_0) $$</div>' +
            '<p>$c$ = coinsurance (patient’s price share). Lower $c$ → bigger over-consumption $M_1-M_0$ → bigger DWL.</p>' }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Why buy insurance: concave utility', id: 'Mengapa beli asuransi: utilitas cekung' },
          html: '<p>Drag the curvature (risk aversion) and the loss. Because utility is concave, the expected utility of the gamble (on the chord) sits below the utility of the same income for certain — the gap between expected income and the certainty equivalent is the <b>risk premium</b> a person will pay to insure.</p>',
          chartId: 'risk-utility' },
        { title: { en: 'Moral hazard & the deadweight loss', id: 'Moral hazard & DWL' },
          html: '<p>Insurance drops the price the patient faces from P₀ to c·P₀, so quantity jumps from M₀ to M₁. The units between M₀ and M₁ are valued (on the demand curve) at less than their P₀ cost — the shaded triangle is the deadweight loss. Set coinsurance to 100% (no insurance) and it vanishes; to 0% (full cover) and it is largest.</p>',
          chartId: 'moral-hazard' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'Two options have the same expected income of $47,000. Why does a risk-averse person strictly prefer the certain one?', id: 'Dua opsi punya pendapatan harapan sama $47.000. Mengapa orang risk-averse memilih yang pasti?' },
        answer: [
          { en: 'Utility is <b>concave</b> (diminishing marginal utility of income), so a dollar lost in the bad state hurts more than a dollar gained in the good state.', id: 'Utilitas <b>cekung</b>, sehingga kehilangan $1 di keadaan buruk lebih menyakitkan daripada untung $1 di keadaan baik.' },
          { en: 'Therefore $U(\\$47k\\ \\text{certain}) > E[U(\\text{gamble})]$ even though both have EV = $47k. The person will even pay a risk premium to lock in the certain outcome.', id: 'Maka $U(\\$47k) > E[U]$ walau EV sama. Ia bahkan mau bayar premi risiko.' }
        ], tip: { en: 'Same EV ≠ same utility once utility is concave.', id: 'EV sama ≠ utilitas sama jika utilitas cekung.' } },
      { type: 'scenario', q: { en: 'Explain the adverse-selection "death spiral" in a voluntary health-insurance market, and one policy that breaks it.', id: 'Jelaskan "death spiral" adverse selection di pasar asuransi sukarela, dan satu kebijakan yang memutusnya.' },
        answer: [
          { en: 'Insurer charges one premium; high-risk buy eagerly, low-risk opt out → pool gets sicker → premium rises → more healthy people leave → spiral up → market thins/collapses.', id: 'Premi tunggal; risiko tinggi membeli, risiko rendah keluar → pool makin sakit → premi naik → makin banyak keluar → spiral.' },
          { en: 'Break it with a <b>mandate</b> (compulsory enrolment, e.g. BPJS/JKN) so low-risk individuals stay in the pool — exactly why social health insurance is mandatory.', id: 'Putuskan dengan <b>mandat</b> (kepesertaan wajib, mis. BPJS/JKN) agar risiko rendah tetap di pool.' }
        ], tip: { en: 'Mandatory pooling is the classic cure for adverse selection.', id: 'Pooling wajib adalah obat klasik adverse selection.' } },
      { type: 'quant', q: { en: 'Marginal cost of care is P₀ = 5. Full insurance drops the patient price to 0. Demand is M = (10 − P)/0.8. Find the over-consumption and the deadweight loss.', id: 'MC = P₀ = 5, asuransi penuh harga pasien 0, permintaan M = (10 − P)/0,8. Hitung over-consumption dan DWL.' },
        answer: [
          { en: 'Without insurance: M₀ = (10 − 5)/0.8 = 6.25. With full cover (price 0): M₁ = (10 − 0)/0.8 = 12.5.', id: 'Tanpa asuransi M₀ = 6,25; dengan tanggungan penuh M₁ = 12,5.' },
          { en: 'Over-consumption = M₁ − M₀ = 6.25.', id: 'Over-consumption = 6,25.' },
          { en: 'DWL = ½ × (P₀ − 0) × (M₁ − M₀) = ½ × 5 × 6.25 = <b>15.6</b>.', id: 'DWL = ½ × 5 × 6,25 = <b>15,6</b>.' }
        ], tip: { en: 'Confirm it on the Graphs tab by setting coinsurance to 0%.', id: 'Cek di tab Grafik dengan koasuransi 0%.' } }
    ]
  };
})();
