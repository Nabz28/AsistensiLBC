/* ============================================================================
   CSPD · Read Data Lab — the master drill room of interactive output cases.
   Every table is hoverable/tappable: read the number, get its meaning. No code
   to type — the exam is about READING output. Registers on window.CSPD_READLAB.
   ============================================================================ */
(function () {
  'use strict';
  var S = window.STATA;

  window.CSPD_READLAB = {
    label: { en: 'Read Data', id: 'Baca Data' },
    title: { en: 'Read Data — the output-reading drill room',
             id: 'Baca Data — ruang latihan membaca output' },
    blurb: String.raw`Every model ends in a results window, and the exam asks you to <b>read</b> it — not to write
code. This lab is your case library. Hover (or tap on a phone) any
<span style="color:var(--accent);font-weight:700;border-bottom:1px dashed">highlighted</span> number to see
exactly what it means. Start with the universal primer, then drill the marquee cases. (Each week also has its
own Read Data tab with more cases.)`,

    sections: [
      /* --------------------------------------------------------- primer */
      {
        heading: 'Primer — read ANY regression table in 6 steps',
        num: '0',
        cards: [
          {
            title: 'The universal layout',
            html: String.raw`
<p>Every table you'll read shares the same five columns plus a header block. Learn them once here:</p>
<ol>
  <li><b>What model is it?</b> (the command / the tell-tale line) — decides whether the coefficient is an
      effect on $y$, on $y^*$, or on a probability.</li>
  <li><b>Coefficient</b> — sign &amp; size, with units.</li>
  <li><b>Std. err.</b> — precision (smaller = better); it builds the t/z.</li>
  <li><b>t or z</b> — = Coef ÷ SE; <b>|t|&gt;1.96 ⇒ significant at 5%.</b></li>
  <li><b>P&gt;|t|</b> — the p-value; <b>p&lt;0.05 ⇒ significant.</b> (Stars: * 10%, ** 5%, *** 1%.)</li>
  <li><b>Header block</b> — N, F/Wald/LR, R², and any test line (the model-specific giveaway).</li>
</ol>` + S({
              cmd: 'reg income education experience',
              title: 'Linear regression (OLS)',
              info: [
                ['Number of obs', '500'],
                ['Prob > F', '0.0000', '<b>Overall model p-value.</b> Tests "are the regressors jointly useless?" p&lt;0.05 ⇒ jointly significant.'],
                ['R-squared', '0.341', '34.1% of the variation in income is explained by education + experience together.']
              ],
              dep: 'income',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'education', c: ['320.5', '28.1', '11.40', '0.000', '265   376'],
                  tips: { 0: '<b>Coefficient.</b> +1 year of education ⇒ Rp 320,500 higher income, ceteris paribus.', 1: '<b>Std. err.</b> precision of the estimate; t = Coef ÷ SE.', 2: '<b>t = 11.40</b> = 320.5/28.1. |t|&gt;1.96 ⇒ significant at 5%.', 3: '<b>p = 0.000.</b> p&lt;0.05 ⇒ reject "no effect" ⇒ significant.', 4: '<b>95% CI [265, 376].</b> Excludes 0 ⇒ significant (same verdict as the t-test).' } },
                { v: 'experience', c: ['180.2', '22.0', '8.19', '0.000', '137   223'],
                  tips: { 0: '+1 year experience ⇒ ~Rp 180,200 more, ceteris paribus.' } },
                { v: '_cons', c: ['1500', '410', '3.65', '0.000', '693   2307'],
                  tips: { v: 'Intercept — predicted income at 0 education & 0 experience.' } }
              ]
            })
          }
        ]
      },

      /* --------------------------------------------------------- Tobit */
      {
        heading: 'Topic 1 — Tobit (effect on the LATENT y*)',
        num: '1',
        cards: [
          {
            title: 'The giveaway: /sigma + a censored count',
            html: String.raw`
<p>A Tobit looks like OLS but adds a <code>/sigma</code> line and a censored-obs count, and the coefficient
is the effect on the <b>latent</b> $y^*$. Hover the trap.</p>` + S({
              cmd: 'tobit apt read math, ul(800)',
              title: 'Tobit regression',
              info: [
                ['Number of obs', '200'],
                ['LR chi2(2)', '188.97', 'The Tobit analogue of the F-test (joint significance).'],
                ['Pseudo R2', '0.0832', 'NOT the OLS R² — a rough MLE fit measure; don\'t over-read it.']
              ],
              dep: 'apt',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'read', c: ['2.6979', '.6132', '4.40', '0.000', '1.49   3.91'],
                  tips: { 0: '<b>Effect on the LATENT score $y^*$, not the observed capped score.</b> +1 reading point ⇒ +2.70 latent aptitude, cp. The #1 Tobit trap.' } },
                { v: 'math', c: ['5.9145', '.7012', '8.43', '0.000', '4.53   7.30'],
                  tips: { 0: '5.91 on latent $y^*$ — about twice reading\'s effect.' } },
                '-',
                { v: '/sigma', c: ['65.68', '3.48', '', '', ''],
                  tips: { v: '<b>σ̂ — Tobit ESTIMATES the error SD (Probit fixes it to 1).</b> A classic giveaway line.' } }
              ],
              notes: [
                { t: '17 right-censored at apt = 800',
                  tip: '8.5% censored ⇒ OLS would be biased, but the three marginal effects are numerically close.' }
              ]
            })
          }
        ]
      },

      /* --------------------------------------------------------- Heckman */
      {
        heading: 'Topic 2 — Heckman (the four numbers to circle)',
        num: '2',
        cards: [
          {
            title: 'The giveaway: /mills lambda + rho + Selected/Nonselected',
            html: String.raw`
<p>Two equation blocks (wage + select), plus lambda/rho/sigma. Hover the four exam numbers.</p>` + S({
              cmd: 'heckman wage education age, select(work = married children education age)',
              title: 'Heckman selection model — two-step',
              info: [
                ['Number of obs', '2,000', 'All 2,000 — Heckman uses the non-workers via the selection equation.'],
                ['Selected', '1,343'],
                ['Nonselected', '657']
              ],
              dep: '',
              cols: ['Coefficient', 'Std. err.', 'z', 'P>|z|', '[95% conf. interval]'],
              rows: [
                { group: 'wage' },
                { v: 'education', c: ['.9825', '.0539', '18.23', '0.000', '.877  1.088'],
                  tips: { 0: '<b>0.98 — the selection-corrected return to education</b> (bigger than the OLS 0.90).' } },
                { v: 'age', c: ['.2119', '.0221', '9.61', '0.000', '.169  .255'] },
                { group: 'select' },
                { v: 'children', c: ['.4473', '.0287', '15.56', '0.000', '.391  .504'],
                  tips: { 0: '<b>Trap:</b> effect on the PROBABILITY OF WORKING, not on wages. Also the exclusion restriction.' } },
                { group: '/mills' },
                { v: 'lambda', c: ['4.0016', '.6065', '6.60', '0.000', '2.81  5.19'],
                  tips: { 0: '<b>λ coefficient significant ⇒ selection bias is present ⇒ report Heckman.</b> (=ρ·σ, not the per-person IMR.)' } },
                '-',
                { v: 'rho', c: ['0.6728', '', '', '', ''],
                  tips: { v: '<b>ρ&gt;0:</b> workers have higher unseen wage potential ⇒ naive OLS overstates the mean.' } }
              ],
              notes: [
                { t: 'LR test of independent eqns (rho = 0): Prob > chi2 = 0.000',
                  tip: 'Reject ρ=0 ⇒ equations not independent ⇒ significant selection ⇒ Heckman over OLS.' }
              ]
            })
          }
        ]
      },

      /* --------------------------------------------------------- Pooled/DiD */
      {
        heading: 'Topic 3 — year dummies & interactions',
        num: '3',
        cards: [
          {
            title: 'Time dummy = level shift; interaction = change in a slope',
            html: String.raw`
<p>Hover to see the difference between "the average shifted" and "the effect changed".</p>` + S({
              cmd: 'reg kids ... educ y74educ ... y84educ, robust',
              title: 'Fertility: education interacted with year',
              dep: 'kids',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', ''],
              rows: [
                { v: 'educ', c: ['-.0407', '.0670', '-0.61', '0.544', ''],
                  tips: { v: '<b>The education effect in the BASE year 1972.</b> Add a year\'s interaction to get that year\'s effect.' } },
                { v: 'y84educ', c: ['-.1744', '.0788', '-2.21', '0.027', ''],
                  tips: { 0: '<b>The CHANGE in the education effect by 1984</b> (not the level). 1984 effect = −0.0407 + (−0.1744) = −0.2151.', 3: 'p = 0.027 &lt; 0.05 ⇒ the change is significant at 5%.' } }
              ]
            })
          }
        ]
      },

      /* --------------------------------------------------------- Panel */
      {
        heading: 'Topics 4–5 — FE, Hausman & CRE',
        num: '4',
        cards: [
          {
            title: 'Reading xtreg, fe — the F-test that beats Pooled OLS',
            html: String.raw`
<p>Beyond the slope, the bottom F-test and corr(u_i,Xb) carry the verdict. Hover them.</p>` + S({
              cmd: 'xtreg y x1, fe',
              title: 'Fixed-effects (within) regression',
              info: [
                ['Number of obs', '70'],
                ['Number of groups', '7'],
                ['corr(u_i, Xb)', '-0.5468', 'The fixed effect is correlated with x1 ⇒ Pooled OLS & RE would be biased ⇒ FE is right.'],
                ['Prob > F', '0.0289', 'x1 is significant.']
              ],
              dep: 'y',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', ''],
              rows: [
                { v: 'x1', c: ['2.48e+09', '1.11e+09', '2.24', '0.029', ''],
                  tips: { 0: '<b>The WITHIN effect of x1</b> (LSDV would give the identical number).' } },
                '-',
                { v: 'rho', c: ['0.2973', '', '', '', ''],
                  tips: { v: '~30% of the unexplained variance is permanent between-unit differences (the fixed effects).' } }
              ],
              notes: [
                { t: 'F test that all u_i = 0:  F(6,62) = 2.97,  Prob > F = 0.0131',
                  tip: '<b>FE vs Pooled OLS.</b> Reject H0 (p&lt;0.05) ⇒ fixed effects are jointly significant ⇒ FE beats Pooled OLS.' }
              ]
            })
          },
          {
            title: 'Reading the Hausman block — FE vs RE',
            html: String.raw`
<p>(b) is FE, (B) is RE; a big gap ⇒ RE biased ⇒ FE. Hover the verdict line.</p>` + S({
              cmd: 'hausman fixed random',
              title: 'Hausman test (H0: difference not systematic)',
              dep: '',
              cols: ['(b) fixed', '(B) random', '(b−B) Diff', 'Std. err.'],
              rows: [
                { v: 'x1', c: ['2.48e+09', '1.25e+09', '1.23e+09', '6.41e+08'],
                  tips: { 0: '<b>(b) FE — consistent under H0 and H1</b> (the benchmark).', 1: '<b>(B) RE — efficient, but only consistent if H0 holds.</b> Far from FE here.' } }
              ],
              notes: [
                { t: 'chi2(1) = 3.67    Prob > chi2 = 0.0553',
                  tip: '<b>Borderline:</b> fail to reject at 5%, reject at 10%. With corr(u_i,Xb)=−0.55, lean to FE. (Reject Hausman ⇒ FE.)' }
              ]
            })
          },
          {
            title: 'Reading a CRE comparison — RE vs FE vs CRE',
            html: String.raw`
<p>CRE = RE + the time-average. Its slopes match FE; the time-average\'s coefficient is the Mundlak test.
Hover.</p>` + S({
              title: 'math4 pass rate: RE vs FE vs CRE',
              dep: '',
              cols: ['RE', 'FE', 'CRE'],
              rows: [
                { v: 'lunch', c: ['-0.334***', '0.062', '-0.334***'],
                  tips: { 0: '<b>RE: −0.334*** </b> +1pp poverty proxy ⇒ −0.334pp pass rate, sig 1% (expected sign).' } },
                { v: 'lrexpp_1', c: ['7.806***', '7.003***', '7.123***'],
                  tips: { 2: '<b>CRE time-varying slopes line up with FE</b> — the point of CRE.' } },
                '-',
                { v: 'lenrolbar', c: ['', '', '0.815'],
                  tips: { 2: '<b>The Mundlak test:</b> H0 that this time-average = 0 means "RE is enough". Insignificant here on this variable, but the overall Hausman rejects ⇒ FE.' } }
              ],
              notes: [
                { t: 'Hausman (Table 4.2): chi2(9) = 74.27, Prob > chi2 = 0.0000 ⇒ use FE.',
                  tip: 'Strong rejection ⇒ a_i correlates with regressors ⇒ RE inconsistent ⇒ Fixed Effects.' }
              ]
            })
          }
        ]
      }
    ]
  };
})();
