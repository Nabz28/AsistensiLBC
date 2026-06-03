/* ============================================================================
   CSPD · Read Data Lab — the big interactive drill room.
   Every model has AT LEAST 2 worked scenarios; every table is hoverable/tappable
   (read a number, get its meaning); plus a dedicated section for reading TEST
   outputs (Hausman, BP-LM, F-test, LR, Chow, heteroskedasticity, serial corr).
   Real 2024-exam numbers where available; clearly-flagged teaching figures else.
   Registers on window.CSPD_READLAB.
   ============================================================================ */
(function () {
  'use strict';
  var S = window.STATA;

  window.CSPD_READLAB = {
    label: { en: 'Read Data', id: 'Baca Data' },
    title: { en: 'Read Data — the output-reading drill room',
             id: 'Baca Data — ruang latihan membaca output' },
    blurb: String.raw`Every model below comes with <b>two or more worked scenarios</b> and the <b>test results</b>
you'll be asked to read. Hover (or tap on a phone) any
<span style="color:var(--accent);font-weight:700;border-bottom:1px dashed">highlighted</span> number to see
what it means and how to phrase the interpretation. Start with the primer, then drill each topic; finish on
the <b>Reading the tests</b> section. (Each week also has its own Read Data tab.)`,

    sections: [
      /* ====================================================== PRIMER */
      {
        heading: 'Primer — read ANY regression table in 6 steps',
        num: '0',
        cards: [
          {
            title: 'The universal layout',
            html: String.raw`
<ol>
<li><b>What model is it?</b> (command / tell-tale line) — decides if the coef is an effect on $y$, $y^*$, or a probability.</li>
<li><b>Coefficient</b> — sign &amp; size, with units.</li>
<li><b>Std. err.</b> — precision; builds the t/z.</li>
<li><b>t or z</b> $=$ Coef ÷ SE; <b>|t|&gt;1.96 ⇒ sig at 5%.</b></li>
<li><b>P&gt;|t|</b> — p-value; <b>p&lt;0.05 ⇒ significant.</b> (Stars: * 10%, ** 5%, *** 1%.)</li>
<li><b>Header / footer</b> — N, F/Wald/LR, R², and the test lines (the model giveaway).</li>
</ol>` + S({
              model: String.raw`$income_i=\beta_0+\beta_1\,educ_i+\beta_2\,exper_i+u_i$`,
              cmd: 'reg income education experience',
              title: 'Linear regression (OLS)',
              info: [
                ['Number of obs', '500'],
                ['Prob > F', '0.0000', '<b>Overall model p-value.</b> Tests "are the regressors jointly useless?" p&lt;0.05 ⇒ jointly significant.'],
                ['R-squared', '0.341', '34.1% of the variation in income is explained by education + experience.']
              ],
              dep: 'income',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'education', c: ['320.5', '28.1', '11.40', '0.000', '265   376'],
                  tips: { 0: '<b>Coefficient.</b> +1 year of education ⇒ Rp 320,500 higher income, ceteris paribus.', 1: '<b>Std. err.</b> precision; t = Coef ÷ SE.', 2: '<b>t = 11.40</b> = 320.5/28.1; |t|&gt;1.96 ⇒ sig at 5%.', 3: '<b>p = 0.000</b> ⇒ reject "no effect" ⇒ significant.', 4: '<b>95% CI [265,376]</b> excludes 0 ⇒ significant.' } },
                { v: 'experience', c: ['180.2', '22.0', '8.19', '0.000', '137   223'],
                  tips: { 0: '+1 year experience ⇒ ~Rp 180,200 more, ceteris paribus.' } },
                { v: '_cons', c: ['1500', '410', '3.65', '0.000', '693   2307'],
                  tips: { v: 'Intercept — predicted income at 0 education &amp; 0 experience.' } }
              ]
            })
          }
        ]
      },

      /* ====================================================== TOBIT ×2 */
      {
        heading: 'Topic 1 · Tobit — coef = effect on LATENT y* (2 scenarios)',
        num: '1',
        cards: [
          {
            title: 'Scenario 1 — aptitude with a ceiling at 800',
            html: String.raw`
<span class="rd-tag">tobit · UCLA apt · right-censored at 800</span>
<p>200 students; <code>apt</code> capped at <b>800</b> (17 hit it). Every coef is an effect on the
<b>latent</b> score, and watch the <code>/sigma</code> + censored count.</p>` + S({
              model: String.raw`Latent: $apt_i^*=\beta_0+\beta_1\,read_i+\beta_2\,math_i+\varepsilon_i,\ \varepsilon\sim N(0,\sigma^2)$
Observed: $apt_i=\min(apt_i^*,\ 800)$  (right-censored)`,
              cmd: 'tobit apt read math, ul(800)',
              title: 'Tobit regression',
              info: [
                ['Number of obs', '200'],
                ['LR chi2(2)', '188.97', 'Tobit version of the F-test (joint significance of read+math).'],
                ['Pseudo R2', '0.0832', 'NOT the OLS R² — a rough MLE fit measure; don\'t read as "% explained".']
              ],
              dep: 'apt',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'read', c: ['2.6979', '.6132', '4.40', '0.000', '1.49   3.91'],
                  tips: { 0: '<b>+1 reading point ⇒ +2.70 on the LATENT aptitude $y^*$</b>, cp — NOT the observed capped score. The #1 Tobit trap.', 2: 't = 4.40 = 2.698/0.613 ⇒ significant.' } },
                { v: 'math', c: ['5.9145', '.7012', '8.43', '0.000', '4.53   7.30'],
                  tips: { 0: '<b>+5.91 on latent $y^*$</b> — about twice reading\'s effect.' } },
                { v: '_cons', c: ['209.56', '32.55', '6.44', '0.000', '145   274'] },
                '-',
                { v: '/sigma', c: ['65.68', '3.48', '', '', ''],
                  tips: { v: '<b>σ̂ = the error SD — Tobit ESTIMATES it</b> (Probit fixes σ=1). A giveaway line.' } }
              ],
              notes: [
                { t: '0 left-censored · 17 right-censored at apt = 800 · 183 uncensored',
                  tip: '<b>17/200 = 8.5% censored:</b> OLS would be biased, but since it\'s small the 3 marginal effects are numerically close.' }
              ]
            })
          },
          {
            title: 'Scenario 2 — charitable donations (floor at 0) + marginal effects',
            html: String.raw`
<span class="rd-tag">tobit · donations · left-censored at 0 · teaching figures</span>
<p>600 households; many donate <b>0</b> (corner solution). We need the <b>three marginal effects</b> to talk
about observed donations, because the raw coef is only the latent effect. (Illustrative figures.)</p>` + S({
              model: String.raw`Latent: $don_i^*=\beta_0+\beta_1\,income_i+\beta_2\,age_i+\varepsilon_i$
Observed: $don_i=\max(0,\ don_i^*)$  (left-censored at 0)`,
              title: 'Tobit + marginal effects of income on donations',
              dep: 'donation',
              cols: ['effect', 'income coef', 'read as'],
              rows: [
                { v: 'Raw coef (latent y*)', c: ['xb', '0.190', 'on the latent "desire to give"'],
                  tips: { 1: '<b>0.190 = effect on LATENT $y^*$</b> — the unconstrained desired donation. Don\'t report this as the effect on observed giving.' } },
                { v: 'Unconditional ME', c: ['ystar(0,.)', '0.142', 'E[y], ALL households'],
                  tips: { 1: '<b>0.142 = effect on expected OBSERVED donation across everyone</b> (incl. the zeros). This is the policy-relevant number. = $\\beta\\cdot\\Phi(z)$, shrunk below 0.190.' } },
                { v: 'Conditional ME', c: ['e(0,.)', '0.108', 'E[y | y>0], DONORS only'],
                  tips: { 1: '<b>0.108 = effect among households that already donate</b> ($y>0$). Smaller still — excludes the extensive (in/out) margin.' } },
                '-',
                { v: 'OLS (for contrast)', c: ['—', '0.120', 'biased — attenuated'],
                  tips: { 1: 'Plain OLS (0.120) is attenuated by the pile-up of zeros; it isn\'t any of the three Tobit quantities.' } }
              ],
              notes: [
                { t: '~210 of 600 left-censored at 0 (35%).',
                  tip: 'With a LARGE censored share, the three MEs differ noticeably (unlike Scenario 1). Pick by the question: whole population ⇒ unconditional; donors only ⇒ conditional.' }
              ]
            })
          }
        ]
      },

      /* ====================================================== TRUNCATED ×2 */
      {
        heading: 'Topic 1 · Truncated regression (2 scenarios)',
        num: '2',
        cards: [
          {
            title: 'Scenario 1 — OLS vs truncreg (the slope OLS flattens)',
            html: String.raw`
<span class="rd-tag">truncreg · achiv ≥ 40 only · teaching figures</span>
<p>Only students scoring <b>≥ 40</b> were ever recorded (lower truncation). OLS lost the bottom tail ⇒ its
slopes are <b>too flat</b>; <code>truncreg</code> rebuilds the tail and recovers the steeper truth.</p>` + S({
              model: String.raw`$achiv_i=\beta_0+\beta_1\,math_i+\beta_2\,lang_i+\varepsilon_i$,  observed ONLY if $achiv_i>40$`,
              title: 'Coefficients: OLS vs truncreg (achiv on math, language)',
              dep: 'achiv',
              cols: ['OLS (biased)', 'truncreg, ll(40)'],
              rows: [
                { v: 'mathscore', c: ['0.42', '0.71'],
                  tips: { 0: '<b>OLS 0.42</b> — flattened (truncation chopped the low tail, squeezing variation).', 1: '<b>truncreg 0.71</b> — consistent; the effect on observed achiv among the ≥40 survivors.' } },
                { v: 'langscore', c: ['0.38', '0.65'],
                  tips: { 0: 'OLS 0.38 — attenuated.', 1: 'truncreg 0.65 — corrected.' } }
              ],
              notes: [
                { t: 'Why OLS biased: among survivors E[ε | achiv≥40] > 0 and depends on the scores.',
                  tip: 'The error correlates with x ⇒ Gauss–Markov fails ⇒ OLS biased &amp; inconsistent; truncreg puts the missing-tail correction back into the likelihood.' }
              ]
            })
          },
          {
            title: 'Scenario 2 — reading a full truncreg output',
            html: String.raw`
<span class="rd-tag">truncreg · wages, only earners &gt; Rp5m surveyed · teaching figures</span>
<p>A wage survey only interviewed workers earning <b>above Rp5m</b> (lower truncation). Read it like an OLS
table, but the coef is the effect on <b>observed</b> log-wage among the surveyed, and note <code>/sigma</code>.</p>` + S({
              model: String.raw`$lwage_i=\beta_0+\beta_1\,educ_i+\beta_2\,exper_i+\varepsilon_i$,  observed ONLY if $wage_i>\text{Rp5m}$`,
              cmd: 'truncreg lwage educ exper, ll(1.609)',
              title: 'Truncated regression  (lower limit, log scale)',
              info: [
                ['Number of obs', '742'],
                ['Wald chi2(2)', '188.5', 'Joint significance (MLE analogue of the F-test).'],
                ['Prob > chi2', '0.0000']
              ],
              dep: 'lwage',
              cols: ['Coef.', 'Std. err.', 'z', 'P>|z|', '[95% conf. interval]'],
              rows: [
                { v: 'educ', c: ['0.074', '0.009', '8.22', '0.000', '0.056   0.092'],
                  tips: { 0: '<b>+1 year education ⇒ ~7.4% higher wage</b> (log model) among the surveyed earners, cp. Effect on OBSERVED $y$ (no latent variable here).', 2: '<b>z = 8.22</b> — MLE prints z, same rule |z|&gt;1.96 ⇒ sig.' } },
                { v: 'exper', c: ['0.021', '0.004', '5.41', '0.000', '0.013   0.029'],
                  tips: { 0: '+1 year experience ⇒ ~2.1% higher wage, cp.' } },
                { v: '_cons', c: ['1.92', '0.14', '13.7', '0.000', '1.65   2.19'] },
                '-',
                { v: '/sigma', c: ['0.38', '0.02', '', '', ''],
                  tips: { v: '<b>σ̂ = 0.38</b>, estimated by MLE and corrected for the chopped tail (unlike an OLS-on-survivors residual SD).' } }
              ],
              notes: [
                { t: 'Do NOT report a "probability in interval" marginal effect here.',
                  tip: 'Out-of-range workers (≤Rp5m) aren\'t in the modelled population, so a probability over them is meaningless. Report predict(xb) or ystar.' }
              ]
            })
          }
        ]
      },

      /* ====================================================== HECKMAN ×2 */
      {
        heading: 'Topic 2 · Heckman / selection (2 scenarios)',
        num: '3',
        cards: [
          {
            title: 'Scenario 1 — selection IS present ⇒ report Heckman',
            html: String.raw`
<span class="rd-tag">heckman · womenwk · exam Table 1.2</span>
<p>Wage seen for only the 1,343 working women. Two blocks (<b>wage</b>, <b>select</b>) + <b>lambda/rho</b>.
The four exam numbers are highlighted.</p>` + S({
              model: String.raw`Selection: $work_i^*=\gamma_0+\gamma_1 married_i+\gamma_2 children_i+\gamma_3 educ_i+\gamma_4 age_i+u_i$
Outcome:  $wage_i=\beta_0+\beta_1 educ_i+\beta_2 age_i+\varepsilon_i$  (seen only if $work_i{=}1$)`,
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
                  tips: { 0: '<b>0.98 — the selection-corrected return to education</b> (vs OLS 0.90 → OLS understated it).' } },
                { v: 'age', c: ['.2119', '.0221', '9.61', '0.000', '.169  .255'] },
                { group: 'select' },
                { v: 'married', c: ['.4309', '.0742', '5.81', '0.000', '.285  .576'],
                  tips: { 0: '<b>Effect on the PROBABILITY of working</b> (not on wages). Exclusion restriction: in selection, out of wage.' } },
                { v: 'children', c: ['.4473', '.0287', '15.56', '0.000', '.391  .504'],
                  tips: { 0: '<b>Trap:</b> effect on P(working), not wages. Also the exclusion restriction.' } },
                { group: '/mills' },
                { v: 'lambda', c: ['4.0016', '.6065', '6.60', '0.000', '2.81  5.19'],
                  tips: { 0: '<b>λ coef significant (p=0.000) ⇒ selection bias is real ⇒ report Heckman.</b> (= ρ·σ.)' } },
                '-',
                { v: 'rho', c: ['0.6728', '', '', '', ''],
                  tips: { v: '<b>ρ&gt;0:</b> unobservables raising the chance of working also raise wages ⇒ workers have higher unseen potential ⇒ naive OLS overstates the mean.' } },
                { v: 'sigma', c: ['5.9474', '', '', '', ''],
                  tips: { v: 'σ; note λ-coef = ρ·σ = 0.6728×5.947 ≈ 4.00.' } }
              ],
              notes: [
                { t: 'LR test of independent eqns (rho=0): Prob > chi2 = 0.000',
                  tip: '<b>Reject ρ=0</b> ⇒ equations linked ⇒ significant selection ⇒ Heckman over OLS.' }
              ]
            })
          },
          {
            title: 'Scenario 2 — selection NOT detected ⇒ revert to OLS',
            html: String.raw`
<span class="rd-tag">heckman · returns to training · teaching figures</span>
<p>Same machinery, opposite verdict. Here the correction term is <b>insignificant</b>, so there's no
detectable selection bias — you'd report the simpler OLS. This is the decision the exam loves.</p>` + S({
              model: String.raw`Selection: $insample_i^*=\gamma_0+\gamma_1 training_i+\gamma_2 educ_i+\gamma_3 distance_i+u_i$
Outcome:  $lwage_i=\beta_0+\beta_1 training_i+\beta_2 educ_i+\varepsilon_i$  (seen only if selected)`,
              cmd: 'heckman lwage training educ, select(insample = training educ distance)',
              title: 'Heckman selection model',
              info: [
                ['Number of obs', '1,500'],
                ['Selected', '1,120'],
                ['Nonselected', '380']
              ],
              dep: '',
              cols: ['Coefficient', 'Std. err.', 'z', 'P>|z|', ''],
              rows: [
                { group: 'lwage' },
                { v: 'training', c: ['0.85', '0.061', '13.9', '0.000', ''],
                  tips: { 0: 'Training raises log-wage ~85% (strong, significant) — but is selection biasing it? Check λ/ρ below.' } },
                { group: '/mills' },
                { v: 'lambda', c: ['0.42', '1.10', '0.38', '0.704', ''],
                  tips: { 0: '<b>λ = 0.42 but p = 0.70 ⇒ NOT significant</b> ⇒ no detectable selection bias.', 3: '<b>p = 0.70</b> — fail to reject; the correction term adds nothing.' } },
                '-',
                { v: 'rho', c: ['0.08', '', '', '', ''],
                  tips: { v: 'ρ ≈ 0 ⇒ the two equations are essentially independent.' } }
              ],
              notes: [
                { t: 'LR test of independent eqns (rho=0): chi2(1) = 0.15,  Prob > chi2 = 0.704',
                  tip: '<b>Fail to reject ρ=0 ⇒ report OLS</b> (consistent &amp; more efficient here). Caveat: "fail to reject" ≠ "no selection" — could be low power / a weak exclusion restriction.' }
              ]
            })
          }
        ]
      },

      /* ====================================================== POOLED CS ×2 */
      {
        heading: 'Topic 3 · Pooled cross-section & time (2 scenarios)',
        num: '4',
        cards: [
          {
            title: 'Scenario 1 — year dummies: reading a time trend',
            html: String.raw`
<span class="rd-tag">reg · fertility on year dummies · exam Table 2a</span>
<p>Each year dummy compares that year to the <b>base year 1972</b>. The single years drift negative; the
joint <b>F-test</b> confirms a real downward trend.</p>` + S({
              model: String.raw`$kids_i=\beta_0+\delta_{74}\,y74_i+\delta_{76}\,y76_i+\dots+\delta_{84}\,y84_i+u_i$  (base year = 1972)`,
              cmd: 'reg kids y74 y76 y78 y80 y82 y84, robust',
              title: 'Linear regression',
              info: [
                ['Number of obs', '1,129'],
                ['F(6, 1122)', '8.04', 'Joint test: are the year dummies TOGETHER significant (any trend)?'],
                ['Prob > F', '0.0000', '<b>p&lt;0.05 ⇒ a real time trend exists</b> (even though some single years are insignificant).']
              ],
              dep: 'kids',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', ''],
              rows: [
                { v: 'y74', c: ['.1825', '.1857', '0.98', '0.326', ''],
                  tips: { 0: '<b>+0.18 vs 1972</b> — but p=0.326 ⇒ NOT significant; can\'t say 1974 truly differed.' } },
                { v: 'y82', c: ['-.6224', '.1924', '-3.23', '0.001', ''],
                  tips: { 0: '<b>−0.62: by 1982, 0.62 fewer kids than 1972</b>, cp — now significant.' } },
                { v: 'y84', c: ['-.7884', '.1853', '-4.26', '0.000', ''],
                  tips: { 0: '<b>−0.79: the trend keeps falling</b> (y74→y84: +0.18 → −0.79).' } },
                { v: '_cons', c: ['3.0256', '.1463', '20.68', '0.000', ''],
                  tips: { v: 'The base-year (1972) mean ≈ 3.03 kids.' } }
              ]
            })
          },
          {
            title: 'Scenario 2 — interaction: a CHANGING return to education',
            html: String.raw`
<span class="rd-tag">reg · educ × year · exam Table 2b</span>
<p>Interacting education with year lets the <b>slope</b> change. <code>educ</code> alone is the 1972 effect;
each interaction is how that effect <b>changed</b>. Combine them for a specific year.</p>` + S({
              model: String.raw`$kids_i=\beta_0+\sum_t\delta_t\,year_{t}+\beta_1\,educ_i+\sum_t\gamma_t\,(year_{t}\!\cdot\!educ_i)+u_i$`,
              cmd: 'reg kids y74 ... y84 educ y74educ ... y84educ, robust',
              title: 'Linear regression (interaction model)',
              info: [['Number of obs', '1,129'], ['Prob > F', '0.0000'], ['R-squared', '0.0854']],
              dep: 'kids',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', ''],
              rows: [
                { v: 'educ', c: ['-.0407', '.0670', '-0.61', '0.544', ''],
                  tips: { v: '<b>The education effect in the BASE year 1972</b> (≈ −0.04). Add a year\'s interaction to get that year\'s effect.' } },
                { v: 'y84educ', c: ['-.1744', '.0788', '-2.21', '0.027', ''],
                  tips: { 0: '<b>−0.17 = how much MORE NEGATIVE the educ effect became by 1984.</b> So 1984 effect = −0.0407 + (−0.1744) = <b>−0.2151</b>. It\'s the CHANGE, not the level.', 3: '<b>p = 0.027 &lt; 0.05</b> ⇒ the change is significant at 5%.' } }
              ],
              notes: [
                { t: 'Effect of education in 1984 = educ + y84educ = −0.0407 + (−0.1744) = −0.2151.',
                  tip: 'Trap: y84educ alone is the CHANGE since 1972, not the 1984 effect. Drop the main effect "educ" and y84educ becomes a biased mix.' }
              ]
            })
          }
        ]
      },

      /* ====================================================== DiD ×2 */
      {
        heading: 'Topic 3 · Difference-in-Differences (2 scenarios, full model)',
        num: '5',
        cards: [
          {
            title: 'Scenario 1 — incinerator: the FULL DiD regression',
            html: String.raw`
<span class="rd-tag">reg · house prices · full DiD model</span>
<p>The model is
$\;price=\beta_0+\delta_0\,y81+\beta_1\,nearinc+\delta_1\,(y81{\cdot}nearinc)+u$. Read <b>only the
interaction</b> as the incinerator's effect. Hover every coefficient to see its role.</p>` + S({
              model: String.raw`$price=\beta_0+\delta_0\,y81+\beta_1\,nearinc+\boxed{\delta_1}\,(y81\!\cdot\!nearinc)+u$  ($\delta_1$ = the DiD)`,
              cmd: 'reg rprice y81 nearinc y81_nearinc',
              title: 'Difference-in-Differences (North Andover)',
              info: [['Number of obs', '321'], ['Prob > F', '0.0000']],
              dep: 'rprice',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', 'role'],
              rows: [
                { v: '_cons (β0)', c: ['82,517', '2,727', '30.3', '0.000', 'baseline'],
                  tips: { v: '<b>β₀ = baseline:</b> average price of a FAR house, BEFORE (1978).' } },
                { v: 'y81 (δ0)', c: ['18,790', '4,050', '4.64', '0.000', 'time shock'],
                  tips: { 0: '<b>δ₀ = the common time shock:</b> all houses rose ~$18,790 from 1978→1981 (general market growth).' } },
                { v: 'nearinc (β1)', c: ['-18,824', '4,875', '-3.86', '0.000', 'fixed gap'],
                  tips: { 0: '<b>β₁ = the pre-existing near-vs-far gap</b> (near houses were already cheaper) — NOT the incinerator effect.' } },
                { v: 'y81×nearinc (δ1)', c: ['-11,864', '7,457', '-1.59', '0.113', '★ THE DiD'],
                  tips: { 0: '<b>δ₁ = THE DiD estimate = the incinerator\'s causal effect:</b> near houses fell ~$11,864 behind, relative to far houses. (Insignificant here without controls; with the full control set / logs it sharpens to ≈ −13%.)', 3: 'p = 0.113 ⇒ not significant raw; controls shrink the SE and it becomes significant.' } }
              ],
              notes: [
                { t: 'DiD = (near change) − (far change) = β1-type double difference = the interaction δ1.',
                  tip: 'Read ONLY δ₁ as the effect. β₁ removes the fixed near/far gap; δ₀ removes the common time shock; the double difference removes both. Assumes parallel trends.' }
              ]
            })
          },
          {
            title: 'Scenario 2 — a cash-transfer policy (treated vs control districts)',
            html: String.raw`
<span class="rd-tag">reg · PKH cash transfer on school enrollment · teaching figures</span>
<p>Districts that received a cash-transfer program (<b>treat</b>) vs those that didn't, <b>before/after</b>.
Same DiD skeleton; the interaction is the policy's causal effect on enrollment (pp). Hover each term.</p>` + S({
              model: String.raw`$enroll=\beta_0+\delta_0\,post+\beta_1\,treat+\boxed{\delta_1}\,(post\!\cdot\!treat)+u$  ($\delta_1$ = the DiD)`,
              cmd: 'reg enroll post treat post_treat',
              title: 'Difference-in-Differences (cash transfer)',
              info: [['Number of obs', '480'], ['Prob > F', '0.0000']],
              dep: 'enroll (%)',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', 'role'],
              rows: [
                { v: '_cons (β0)', c: ['78.5', '1.2', '65.4', '0.000', 'baseline'],
                  tips: { v: '<b>β₀:</b> enrollment in control districts, before the program (≈78.5%).' } },
                { v: 'post (δ0)', c: ['2.0', '1.0', '2.00', '0.046', 'time shock'],
                  tips: { 0: '<b>δ₀:</b> the common rise over time (~2pp) that BOTH groups got.' } },
                { v: 'treat (β1)', c: ['-1.1', '1.3', '-0.85', '0.398', 'fixed gap'],
                  tips: { 0: '<b>β₁:</b> treated districts were ~1.1pp lower to begin with (pre-existing gap, not the effect).' } },
                { v: 'post×treat (δ1)', c: ['4.2', '1.4', '3.00', '0.003', '★ THE DiD'],
                  tips: { 0: '<b>δ₁ = the causal effect of the program:</b> enrollment in treated districts rose <b>4.2pp more</b> than in control districts, sig at 1%. Assuming parallel trends, this is the policy\'s impact.', 3: 'p = 0.003 ⇒ significant.' } }
              ],
              notes: [
                { t: 'Key assumption: parallel trends — without the program, treated &amp; control would have moved together.',
                  tip: 'Support it with pre-program trends or a placebo DiD on a fake earlier date (should be insignificant).' }
              ]
            })
          }
        ]
      },

      /* ====================================================== FE ×2 */
      {
        heading: 'Topic 4 · Fixed Effects (2 scenarios)',
        num: '6',
        cards: [
          {
            title: 'Scenario 1 — Pooled OLS vs FE: the slope moves',
            html: String.raw`
<span class="rd-tag">xtreg · cross-country growth</span>
<p>Run Pooled OLS (ignores country differences) and FE (controls them). The coefficient <b>changes</b> once
$a_i$ is removed — proof heterogeneity mattered.</p>` + S({
              model: String.raw`$gdp\_growth_{it}=\beta_1\,remit_{it}+\beta_2\,unemp_{it}+a_i+u_{it}$  ($a_i$ = country fixed effect)`,
              title: 'GDP growth on remittances &amp; unemployment',
              dep: 'gdp_growth',
              cols: ['Pooled OLS', 'Fixed Effects'],
              rows: [
                { v: 'remit_gdp', c: ['0.019', '0.037'],
                  tips: { 0: '<b>POLS 0.019</b> — ignores unobserved country traits ⇒ likely biased.', 1: '<b>FE 0.037</b> — after controlling time-invariant country traits: when a COUNTRY\'s remittances rise 1pp, its growth rises 0.037pp, cp.' } },
                { v: 'unemp', c: ['-0.091', '-0.175'],
                  tips: { 1: '<b>FE −0.175</b> — controlling country effects strengthens it.' } }
              ],
              notes: [
                { t: 'F test that all u_i = 0:  Prob > F = 0.000  ⇒  FE beats Pooled OLS.',
                  tip: 'Reject H0 ⇒ the country fixed effects are jointly significant ⇒ each country needs its own intercept ⇒ use FE.' }
              ]
            })
          },
          {
            title: 'Scenario 2 — reading a full xtreg, fe output',
            html: String.raw`
<span class="rd-tag">xtreg, fe · exam Table 3.1 · i=7, t=10</span>
<p>The real exam panel table. Beyond the slope, three numbers matter: <code>corr(u_i,Xb)</code> (FE vs RE
hint), the <b>F test all u_i=0</b> (FE vs POLS), and <code>rho</code> (variance share from the effects).</p>` + S({
              model: String.raw`$y_{it}=\beta_1\,x1_{it}+a_i+u_{it}$   (within: subtract each unit's mean ⇒ $a_i$ cancels)`,
              cmd: 'xtreg y x1, fe',
              title: 'Fixed-effects (within) regression · Group: country',
              info: [
                ['Number of obs', '70'],
                ['Number of groups', '7'],
                ['R-sq within', '0.0747', 'Share of the WITHIN (over-time) variation explained — the relevant fit for FE.'],
                ['corr(u_i, Xb)', '-0.5468', '<b>The fixed effect is correlated with x1.</b> Exactly what biases POLS &amp; RE ⇒ a strong hint to use FE.'],
                ['Prob > F', '0.0289', 'x1 is significant.']
              ],
              dep: 'y',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', ''],
              rows: [
                { v: 'x1', c: ['2.48e+09', '1.11e+09', '2.24', '0.029', ''],
                  tips: { 0: '<b>The WITHIN effect of x1</b> (LSDV gives the identical number). "When a country\'s x1 rises 1 unit, its y rises ~2.48 billion, cp."' } },
                '-',
                { v: 'rho', c: ['0.2973', '', '', '', ''],
                  tips: { v: '<b>~30% of the unexplained variance is permanent between-country differences</b> (the fixed effects).' } }
              ],
              notes: [
                { t: 'F test that all u_i = 0:  F(6, 62) = 2.97,  Prob > F = 0.0131',
                  tip: '<b>FE vs Pooled OLS.</b> p=0.0131&lt;0.05 ⇒ reject ⇒ fixed effects jointly significant ⇒ FE beats POLS.' }
              ]
            })
          },
          {
            title: 'Scenario 3 (bonus) — FE = LSDV = FD, watch the N',
            html: String.raw`
<span class="rd-tag">rent · 2-period panel</span>
<p>Same panel three ways — identical slopes (all kill $a_i$), but FD loses the first period.</p>` + S({
              model: String.raw`$lrent_{it}=\beta_1\,lavginc_{it}+\dots+a_i+u_{it}$  — solved 3 ways (within / LSDV / FD)`,
              title: 'Coefficient on lavginc: three estimators',
              dep: 'lrent',
              cols: ['Within (fe)', 'LSDV (i.city)', 'First Diff'],
              rows: [
                { v: 'lavginc', c: ['0.310', '0.310', '0.310'],
                  tips: { 1: '<b>LSDV = within</b>, exactly.', 2: '<b>FD = same at T=2</b> (FE and FD are algebraically identical for two periods).' } },
                '-',
                { v: 'N (obs)', c: ['128', '128', '64'],
                  tips: { 2: '<b>FD keeps only 64 = N·(T−1)</b> — differencing a 2-period panel loses the first period.' } }
              ]
            })
          }
        ]
      },

      /* ====================================================== RE / HAUSMAN ×2 */
      {
        heading: 'Topic 5 · Random Effects & Hausman (2 scenarios)',
        num: '7',
        cards: [
          {
            title: 'Scenario 1 — Hausman REJECTS ⇒ use FE',
            html: String.raw`
<span class="rd-tag">airfare · RE vs FE, then Hausman</span>
<p>Both say higher concentration ⇒ higher fares, but they disagree on size. Hausman judges the gap.</p>` + S({
              model: String.raw`$lfare_{it}=\beta_1\,concen_{it}+\dots+a_i+u_{it}$   (RE assumes $\mathrm{Cov}(a_i,x)=0$; FE doesn't)`,
              title: 'concentration on log fare: RE vs FE (+ Hausman)',
              dep: 'lfare',
              cols: ['Random Effects', 'Fixed Effects'],
              rows: [
                { v: 'concen', c: ['0.209', '0.169'],
                  tips: { 0: '<b>RE 0.209</b> (+20.9% fare) — but assumes $a_i\\perp x$, maybe false.', 1: '<b>FE 0.169</b> (+16.9%) — consistent; removes route fixed effects.' } }
              ],
              notes: [
                { t: 'hausman fe re:  chi2 significant ⇒ REJECT ⇒ use FE.   xttest0: reject ⇒ RE > POLS.',
                  tip: 'Reject Hausman ⇒ $a_i$ correlates with regressors ⇒ RE inconsistent ⇒ Fixed Effects. Chain: FE > RE > POLS.' }
              ]
            })
          },
          {
            title: 'Scenario 2 — Hausman FAILS to reject ⇒ use RE',
            html: String.raw`
<span class="rd-tag">firm panel · Hausman p&gt;0.05 · teaching figures</span>
<p>The opposite verdict. RE and FE are close, Hausman can't reject, and you also need a <b>time-invariant</b>
variable (sector) — so RE wins (more efficient, and it can estimate the constant variable).</p>` + S({
              model: String.raw`$lprod_{it}=\beta_1\,rnd_{it}+\beta_2\,sector_i+a_i+u_{it}$  ($sector_i$ time-invariant ⇒ needs RE)`,
              title: 'RE vs FE (+ Hausman + BP-LM)',
              dep: 'lprod',
              cols: ['Random Effects', 'Fixed Effects'],
              rows: [
                { v: 'rnd_intensity', c: ['0.142', '0.150'],
                  tips: { 0: '<b>RE 0.142</b> — close to FE.', 1: '<b>FE 0.150</b> — barely different ⇒ Hausman won\'t reject.' } },
                { v: 'sector (time-invariant)', c: ['0.31', '(dropped)'],
                  tips: { 0: '<b>RE estimates sector (0.31)</b>; FE DROPS it (no within variation). A reason to want RE.' } }
              ],
              notes: [
                { t: 'hausman fe re:  chi2(3) = 2.10,  Prob > chi2 = 0.553  ⇒  FAIL to reject  ⇒  use RE.',
                  tip: '<b>Fail to reject H0 ⇒ RE is consistent AND efficient ⇒ use RE</b> (FE would just be noisier and can\'t estimate sector). xttest0 still rejects ⇒ RE beats POLS.' }
              ]
            })
          }
        ]
      },

      /* ====================================================== CRE ×2 */
      {
        heading: 'Topic 5 · Correlated Random Effects (2 scenarios)',
        num: '8',
        cards: [
          {
            title: 'Scenario 1 — RE vs FE vs CRE (the exam table)',
            html: String.raw`
<span class="rd-tag">district math pass-rate · exam Table 4.1/4.2</span>
<p>CRE = RE + the time-average <code>lenrolbar</code>. The time-varying slopes match FE; the time-average's
coefficient is the Mundlak test.</p>` + S({
              model: String.raw`CRE: $math_{it}=\beta\,x_{it}+\xi\,\bar x_i+a_i+u_{it}$  (RE + the time-average $\bar x_i$)`,
              title: 'math4 pass rate: RE vs FE vs CRE',
              dep: '',
              cols: ['RE', 'FE', 'CRE'],
              rows: [
                { v: 'lunch', c: ['-0.334***', '0.062', '-0.334***'],
                  tips: { 0: '<b>RE −0.334*** :</b> +1pp poverty proxy ⇒ −0.334pp pass rate, sig 1% (expected sign).' } },
                { v: 'lrexpp_1', c: ['7.806***', '7.003***', '7.123***'],
                  tips: { 2: '<b>CRE time-varying slopes line up with FE</b> — the whole point of CRE.' } },
                '-',
                { v: 'lenrolbar', c: ['', '', '0.815'],
                  tips: { 2: '<b>Mundlak term:</b> H0 that it = 0 means "RE is enough". Insignificant here on this one variable, but the overall Hausman rejects ⇒ FE.' } }
              ],
              notes: [
                { t: 'Hausman (Table 4.2): chi2(9) = 74.27, Prob > chi2 = 0.0000 ⇒ use FE.',
                  tip: 'Strong rejection ⇒ a_i correlates with regressors ⇒ RE inconsistent ⇒ FE (CRE slopes already match FE).' }
              ]
            })
          },
          {
            title: 'Scenario 2 — CRE to recover a time-invariant effect',
            html: String.raw`
<span class="rd-tag">wage panel · CRE recovers "female" · teaching figures</span>
<p>FE can't estimate <b>female</b> (time-invariant). CRE (RE + the time-averages $\bar x_i$) gives
FE-consistent slopes on the time-varying vars <b>and</b> recovers the female coefficient. The joint test on
the time-means is the Mundlak/Hausman.</p>` + S({
              model: String.raw`$lwage_{it}=\beta\,exper_{it}+\delta\,female_i+\xi\,\overline{exper}_i+r_i+u_{it}$  ($\overline{exper}_i$ = Mundlak term)`,
              cmd: 'xtreg lwage exper female mean_exper, re   (+ test mean_exper)',
              title: 'Correlated Random Effects (wage)',
              dep: 'lwage',
              cols: ['Coef.', 'Std. err.', 'z', 'P>|z|', 'note'],
              rows: [
                { v: 'exper', c: ['0.041', '0.005', '8.2', '0.000', '= FE'],
                  tips: { 0: '<b>0.041 — equals the FE estimate</b> (consistent), because the time-average absorbs the $a_i$–$x$ correlation.' } },
                { v: 'female', c: ['-0.18', '0.03', '-6.0', '0.000', 'FE can\'t do this'],
                  tips: { 0: '<b>female = −0.18 (≈18% lower wage):</b> CRE CAN estimate this time-invariant effect; FE drops it entirely.' } },
                { v: 'mean_exper (x̄)', c: ['0.022', '0.008', '2.75', '0.006', 'the Mundlak term'],
                  tips: { 0: '<b>The time-average.</b> Significant ⇒ $a_i$ correlates with experience ⇒ plain RE would be biased ⇒ CRE/FE needed.' } }
              ],
              notes: [
                { t: 'Wald test on the time-means (H0: ξ = 0):  chi2 = 7.6,  Prob > chi2 = 0.006  ⇒  reject ⇒ need CRE/FE.',
                  tip: 'This Mundlak test is a heteroskedasticity-robust Hausman. Reject ⇒ RE insufficient ⇒ use CRE (which still gives you the female effect).' }
              ]
            })
          }
        ]
      },

      /* ====================================================== READING TESTS */
      {
        heading: 'Reading the TESTS — statistic, p-value, decision',
        num: '9',
        cards: [
          {
            title: 'Hausman test block (FE vs RE) — reject & borderline',
            html: String.raw`
<span class="rd-tag">hausman fe re · exam Table 3.2</span>
<p>(b) is FE, (B) is RE; a big gap ⇒ RE biased ⇒ FE. Read the chi² and p at the bottom.</p>` + S({
              modelLabel: 'Hypothesis',
              model: String.raw`$H_0:\ \mathrm{Cov}(a_i,x)=0$ (RE consistent) vs $H_1:\ \ne 0$ (use FE).  Reject ⇒ FE.`,
              cmd: 'hausman fixed random',
              title: 'H0: difference in coefficients not systematic',
              dep: '',
              cols: ['(b) fixed', '(B) random', '(b−B) Diff', 'Std. err.'],
              rows: [
                { v: 'x1', c: ['2.48e+09', '1.25e+09', '1.23e+09', '6.41e+08'],
                  tips: { 0: '<b>(b)=FE</b> — consistent under H0 &amp; H1 (the benchmark).', 1: '<b>(B)=RE</b> — efficient, consistent only if H0 holds. Far from FE here.', 2: '<b>Big difference (1.23e9)</b> ⇒ suggests $a_i$ correlates with x1 ⇒ RE biased.' } }
              ],
              notes: [
                { t: 'chi2(1) = 3.67    Prob > chi2 = 0.0553',
                  tip: '<b>Borderline:</b> fail to reject at 5%, reject at 10%. With corr(u_i,Xb)=−0.55, lean to FE. (Strong version, Table 4.2: chi2(9)=74.27, p=0.000 ⇒ clearly FE.) Rule: reject ⇒ FE; fail to reject ⇒ RE.' }
              ]
            })
          },
          {
            title: 'Breusch–Pagan LM (xttest0) — POLS vs RE',
            html: String.raw`
<span class="rd-tag">xttest0 · is there any panel effect?</span>` + S({
              modelLabel: 'Hypothesis',
              model: String.raw`$H_0:\ \sigma_a^2=0$ (no panel effect, POLS ok) vs $H_1:\ \sigma_a^2>0$ (RE).  Reject ⇒ RE.`,
              cmd: 'xttest0',
              title: 'Breusch and Pagan LM test for random effects',
              dep: '',
              cols: ['Var', 'sd = sqrt(Var)'],
              rows: [
                { v: 'e (u_it)', c: ['7.82', '2.80'] },
                { v: 'u (a_i)', c: ['3.30', '1.82'],
                  tips: { v: 'A non-trivial variance of the unit effect $a_i$ — the LM test asks if it\'s really zero.' } }
              ],
              notes: [
                { t: 'chibar2(01) = 215.40    Prob > chibar2 = 0.0000',
                  tip: '<b>H0: σ²_a = 0</b> (no panel effect, POLS fine). p=0.000 ⇒ <b>reject ⇒ panel effects exist ⇒ RE beats Pooled OLS.</b>' }
              ]
            })
          },
          {
            title: 'F test that all uᵢ = 0 — POLS vs FE',
            html: String.raw`
<span class="rd-tag">bottom line of xtreg, fe</span>` + S({
              modelLabel: 'Hypothesis',
              model: String.raw`$H_0:\ a_1=a_2=\dots=a_N$ (no fixed effects, POLS ok) vs $H_1:$ they differ.  Reject ⇒ FE.`,
              cmd: '(reported automatically after xtreg, fe)',
              title: 'F test that all u_i = 0',
              dep: '',
              cols: ['statistic', 'value'],
              rows: [
                { v: 'F(6, 62)', c: ['2.97'],
                  tips: { 0: 'The F statistic for "are the 7 countries\' intercepts all equal?" (6 = N−1 restrictions).' } },
                { v: 'Prob > F', c: ['0.0131'],
                  tips: { 0: '<b>p = 0.0131 &lt; 0.05 ⇒ reject H0</b> (all $a_i$ equal) ⇒ fixed effects are jointly significant ⇒ <b>FE beats Pooled OLS.</b>' } }
              ],
              notes: [
                { t: 'H0: a_1 = a_2 = … = a_N (no fixed effects). Reject ⇒ each unit needs its own intercept.',
                  tip: 'This is the FE-vs-POLS test, printed for free after xtreg, fe.' }
              ]
            })
          },
          {
            title: 'LR test of independent equations — Heckman selection',
            html: String.raw`
<span class="rd-tag">bottom of heckman (MLE)</span>` + S({
              modelLabel: 'Hypothesis',
              model: String.raw`$H_0:\ \rho=0$ (no selection bias, OLS ok) vs $H_1:\ \rho\ne 0$.  Reject ⇒ Heckman.`,
              cmd: '(reported after heckman)',
              title: 'LR test of indep. eqns (rho = 0)',
              dep: '',
              cols: ['case', 'chi2(1)', 'Prob > chi2', 'verdict'],
              rows: [
                { v: 'womenwk', c: ['61.2', '0.0000', 'Heckman'],
                  tips: { 1: '<b>p = 0.000 ⇒ reject ρ=0</b> ⇒ selection bias present ⇒ report Heckman.' } },
                { v: 'training study', c: ['0.15', '0.704', 'OLS'],
                  tips: { 1: '<b>p = 0.70 ⇒ fail to reject ρ=0</b> ⇒ no detectable selection ⇒ report OLS (more efficient).' } }
              ],
              notes: [
                { t: 'H0: ρ = 0 (selection &amp; outcome errors independent ⇒ OLS unbiased).',
                  tip: 'Reject ⇒ Heckman. Fail to reject ⇒ OLS (but could be low power). Same logic as testing the /mills lambda coefficient.' }
              ]
            })
          },
          {
            title: 'Chow test — structural break across periods',
            html: String.raw`
<span class="rd-tag">F-test that all coefficients are stable</span>` + S({
              modelLabel: 'Hypothesis',
              model: String.raw`$H_0:$ coefficients stable across periods vs $H_1:$ a structural break.  Reject ⇒ don't pool.`,
              cmd: '(F-test all time-interactions = 0)',
              title: 'Chow test for a structural break',
              dep: '',
              cols: ['statistic', 'value'],
              rows: [
                { v: 'F(k, n−2k)', c: ['6.41'],
                  tips: { 0: 'Tests whether the whole coefficient vector differs between the two periods.' } },
                { v: 'Prob > F', c: ['0.0009'],
                  tips: { 0: '<b>p &lt; 0.05 ⇒ reject ⇒ structural break</b> ⇒ a single pooled set of coefficients is invalid (split the sample or interact with the period).' } }
              ],
              notes: [
                { t: 'H0: coefficients stable across periods. Reject ⇒ the relationship CHANGED over time.',
                  tip: 'Equivalent to running the fully-interacted model and F-testing all the time-interactions = 0.' }
              ]
            })
          },
          {
            title: 'Heteroskedasticity & serial correlation — fix the SEs',
            html: String.raw`
<span class="rd-tag">xttest3 + xtserial · exam Q3(f)</span>
<p>The exam pair. These change the <b>standard errors</b>, not the coefficients.</p>` + S({
              modelLabel: 'Hypotheses',
              model: String.raw`xttest3 — $H_0:\ \sigma_i^2=\sigma^2\ \forall i$ (homoskedastic).   xtserial — $H_0:$ no AR(1).`,
              title: 'Two diagnostic tests on the FE model',
              dep: '',
              cols: ['test', 'H0', 'statistic', 'p-value', 'conclusion'],
              rows: [
                { v: 'Modified Wald (xttest3)', c: ['σ²ᵢ = σ²', 'chi2(7) = 42.77', '0.0000', 'heteroskedastic'],
                  tips: { 1: 'H0: all units share the same error variance (homoskedastic).', 3: '<b>p = 0.000 ⇒ reject ⇒ groupwise heteroskedasticity is present.</b>' } },
                { v: 'Wooldridge (xtserial)', c: ['no AR(1)', 'F(1,6) = 0.214', '0.6603', 'no autocorrelation'],
                  tips: { 1: 'H0: no first-order serial correlation in the errors.', 3: '<b>p = 0.66 ⇒ fail to reject ⇒ NO serial correlation.</b>' } }
              ],
              notes: [
                { t: 'Remedy: heteroskedasticity (but no autocorrelation) ⇒ cluster-robust SEs, vce(cluster id).',
                  tip: 'Coefficients are unchanged — only inference is fixed. If there WERE serial correlation, cluster-robust SEs still work (or FD if a random walk).' }
              ]
            })
          }
        ]
      }
    ]
  };
})();
