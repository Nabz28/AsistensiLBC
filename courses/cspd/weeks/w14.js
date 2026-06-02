/* ============================================================================
   CSPD · Week 14 — Synthesis & Exam Strategy
   Ties Topics 1-5 together: one decision tree for "which model when", the full
   Stata command map, and the traps the final exam loves. Registers on
   window.CSPD_WEEKS.w14.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w14 = {
    id: 'w14',
    label: 'Week 14',
    title: 'Synthesis & Exam Strategy',
    subtitle: 'One decision tree for every model, the Stata command map, and the traps the UAS loves',

    notes: [
      {
        heading: 'The master decision tree',
        num: '1',
        cards: [
          {
            title: 'Step 1 — look at the dependent variable & the sample',
            html: String.raw`
<p>Almost every CSPD question is "which estimator, and why?" Diagnose in order:</p>
<table>
  <tr><th>What you see</th><th>Model</th><th>Week</th></tr>
  <tr><td>$y$ continuous but piles up at a limit (0 / ceiling); boundary units <b>kept</b></td><td><b>Tobit</b> (censored regression)</td><td>8</td></tr>
  <tr><td>boundary units <b>deleted</b> from the data (out-of-range absent)</td><td><b>Truncated regression</b></td><td>9</td></tr>
  <tr><td>$y$ missing because of a <b>separate selection decision</b> tied to unobservables</td><td><b>Heckman</b> (sample selection)</td><td>10</td></tr>
  <tr><td>independent samples at different times; <b>different</b> units each round</td><td><b>Pooled cross-section</b> (+ time dummies / DiD)</td><td>11</td></tr>
  <tr><td><b>same</b> units over time; want to remove time-invariant $a_i$</td><td><b>Panel: FE / FD</b></td><td>12</td></tr>
  <tr><td>same units, key regressor time-<b>invariant</b>, or want efficiency</td><td><b>RE / CRE</b> (then Hausman)</td><td>13</td></tr>
</table>`
          },
          {
            title: 'Step 2 — the panel sub-tree (POLS → RE → FE → CRE)',
            html: String.raw`
<div class="decide"><span>1 · xttest0 (BP-LM)</span><span>→ reject ⇒ RE beats POLS</span></div>
<div class="decide"><span>2 · hausman fe re</span><span>→ reject ⇒ FE beats RE</span></div>
<div class="decide"><span>3 · need time-invariant z?</span><span>→ CRE (RE + time-means), test the means</span></div>
<p>Typical conclusion: <b>FE &gt; RE &gt; POLS</b>. Use RE only when the key regressor is time-invariant
(FE can't estimate it) and you can defend $\mathrm{Cov}(a_i,x)=0$ — or use CRE to get the best of both.</p>
<div class="note">💡 Diagnostics on the chosen model: <code>xttest3</code> (groupwise heteroskedasticity),
<code>xtserial</code> (Wooldridge serial-correlation test). Problems ⇒ <b>cluster-robust SEs</b>
<code>vce(cluster id)</code> (or FGLS). These fix <b>standard errors</b>, not coefficients.</p>`
          }
        ]
      },
      {
        heading: 'The thing the exam tests most: interpretation',
        num: '2',
        cards: [
          {
            title: 'Say the right sentence for the right model',
            html: String.raw`
<table>
  <tr><th>Model</th><th>The coefficient is the effect on…</th><th>Sentence template</th></tr>
  <tr><td>OLS / FE / FD / RE</td><td>observed $y$ (within-unit for FE/FD)</td><td>"+1 unit $x$ ⇒ $\beta$ change in $y$, ceteris paribus."</td></tr>
  <tr><td>Tobit (raw coef)</td><td><b>latent</b> $y^*$</td><td>"+1 unit $x$ ⇒ $\beta$ change in the <b>latent</b> $y^*$, cp."</td></tr>
  <tr><td>Truncated</td><td>$y$ (observed subpop.)</td><td>"+1 unit $x$ ⇒ $\beta$ change in $y$ among the observed, cp."</td></tr>
  <tr><td>Probit/selection eq.</td><td>latent index ⇒ probability</td><td>"+1 unit $x$ raises the probability of (working), cp."</td></tr>
  <tr><td>year dummy</td><td>intercept shift vs base year</td><td>"vs the base year, the average $y$ is $\delta$ higher/lower."</td></tr>
  <tr><td>$x$×year interaction</td><td><b>change</b> in the slope</td><td>"the effect of $x$ <b>changed</b> by $\delta$ vs the base year."</td></tr>
  <tr><td>DiD interaction</td><td>the causal treatment effect</td><td>"treatment caused a $\delta$ change in $y$ (parallel-trends)."</td></tr>
</table>
<div class="tip">📝 Every interpretation must carry: a <b>number with units</b>, <b>ceteris paribus</b>, and a
<b>significance</b> statement (p-value / stars). Lose marks for any missing piece.</div>`
          },
          {
            title: 'Trap list — the mistakes the UAS punishes',
            html: String.raw`
<ul>
  <li><b>Tobit:</b> calling the raw coefficient "the effect on $y$" — it is the effect on $y^*$.</li>
  <li><b>Heckman:</b> reading a significant <code>children</code> in the selection eq. as "children raise
      wages" — it is the effect on <b>participation</b>, not the wage.</li>
  <li><b>Heckman:</b> reading $\rho>0$ as "proof workers are paid more / discrimination" — it is about
      unobservables, not a causal wage premium.</li>
  <li><b>Interactions:</b> dropping the main effect (e.g. <code>educ</code>) when interactions are present
      ⇒ the interaction becomes a biased mix of level + change (specification error).</li>
  <li><b>FE:</b> "education has no effect" because FE dropped it — it is <b>absorbed</b> (time-invariant),
      not shown to be zero.</li>
  <li><b>Hausman:</b> "fail to reject = no selection / RE is correct, period" — could be low power.</li>
  <li><b>Tests vs fixes:</b> heteroskedasticity/serial-correlation problems change <b>SEs</b>, not the
      point estimates — fix with cluster-robust SEs.</li>
</ul>`
          }
        ]
      },
      {
        heading: 'OVB direction & the bias toolkit',
        num: '3',
        cards: [
          {
            title: 'Predicting the direction of bias',
            html: String.raw`
<p>A recurring 6-pointer: "is OLS biased, and in which direction?"</p>
<div class="formula">$$ \text{bias of }\hat\beta_1 \approx \beta_2\cdot\frac{\mathrm{Cov}(x_1,x_2)}{\mathrm{Var}(x_1)} $$</div>
<p>Sign of OVB = sign of (effect of the omitted variable on $y$) × (correlation of omitted with $x_1$).
Examples to recall:</p>
<ul>
  <li><b>FE/region:</b> if high-education workers migrate to high-wage regions, omitting region biases the
      education coefficient <b>upward</b> (positive×positive). FE removes it.</li>
  <li><b>Heckman:</b> $\rho>0$ ⇒ selected (working) sample has higher unobserved potential ⇒ naive OLS
      <b>over</b>-states the population mean (slope direction depends on each $x$'s link to selection).</li>
  <li><b>Tobit/censoring:</b> attenuation — slope biased <b>toward 0</b>.</li>
</ul>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'The full Stata command map',
            html: String.raw`
<div class="formula">Tobit:        tobit y x, ll(#) ul(#) ; margins, dydx(*) predict(ystar(LL,UL))
Truncated:    truncreg y x, ll(#) ul(#)
Heckman:      heckman y x, select(s = x z) [twostep]   ; rho = tanh(athrho)
Pooled CS:    reg y i.year x  ;  reg y post##treat   (DiD)
Declare panel: xtset id year ; xtdescribe
Pooled OLS:   reg y x, vce(cluster id)
Fixed effects: xtreg y x, fe    | reg y x i.id (LSDV) | reg D.y D.x (FD)
Random effects: xtreg y x, re [theta]
Tests:        xttest0 (RE vs POLS) | hausman fe re (FE vs RE)
              xttest3 (heterosk.) | xtserial (autocorr.)
CRE/Mundlak:  egen mean_x=mean(x),by(id) ; xtreg y x mean_x z, re ; test mean_x</div>`
          },
          {
            title: 'Test → conclusion quick table',
            html: String.raw`
<table>
  <tr><th>Test</th><th>H0</th><th>Reject ⇒</th></tr>
  <tr><td>LR / λ (Heckman)</td><td>$\rho=0$ (no selection)</td><td>selection bias ⇒ report Heckman</td></tr>
  <tr><td>F-test on year dummies</td><td>all $\delta_t=0$</td><td>significant time trend</td></tr>
  <tr><td>Chow</td><td>coefficients stable</td><td>structural break</td></tr>
  <tr><td>F test all $u_i=0$</td><td>no fixed effects</td><td>FE beats POLS</td></tr>
  <tr><td>xttest0 (BP-LM)</td><td>$\sigma_a^2=0$</td><td>RE beats POLS</td></tr>
  <tr><td>hausman</td><td>$\mathrm{Cov}(a,x)=0$</td><td>use FE</td></tr>
  <tr><td>xttest3</td><td>homoskedastic</td><td>use cluster-robust SE</td></tr>
  <tr><td>xtserial</td><td>no AR(1)</td><td>use cluster-robust SE / FD</td></tr>
</table>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Mixed reading drill',
        num: 'R',
        cards: [
          {
            title: 'One screen, three estimators — spot the story',
            html: String.raw`
<span class="rd-tag">RE / FE / Correlated-RE side by side</span>
<div class="stata"><span class="ttl">math4 pass rate, district panel 1992-98</span>            (1) RE     (2) FE     (3) cRE
   y94       -24.19***  -23.71***  -24.21***
   lunch     <span class="hl">-0.334***</span>   0.062      -0.334***
   lenrolbar                        <span class="hl">0.815</span> (1.174)  <span class="dim">ns</span>
hausman: chi2(9)=<span class="hl">74.27</span>, p=0.000  -> reject -> FE</div>
<ul class="annot">
  <li><b>y94 (FE) = −23.71***:</b> controlling district FE, 1994 pass rates were 23.7pp below the 1992
      base year, sig 1%.</li>
  <li><b>lunch (RE) = −0.334***:</b> +1pp poverty proxy ⇒ −0.334pp pass rate, cp — expected sign
      (poverty hurts attainment).</li>
  <li><b>Hausman p=0.000 ⇒ use FE</b>; yet the CRE coefficient on <code>lenrolbar</code> (0.815) is
      <b>insignificant</b> — the partial Mundlak test fails to reject, but the overall Hausman strongly
      rejects, so trust the overall test ⇒ FE.</li>
</ul>`
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'A question gives you a continuous outcome with ~30% zeros, all units present, and asks for the best model. Walk through your diagnosis out loud.',
        answer: [
          'Outcome continuous with a mass at 0, boundary units present (not deleted) ⇒ this is censoring, not truncation.',
          'If the same single process drives whether y>0 and how much ⇒ Tobit (tobit y x, ll(0)).',
          'If participation and amount are driven by DIFFERENT processes (different signs/variables) ⇒ Tobit is misspecified; consider Heckman selection or a double-hurdle model.',
          'Justify by stating the single-index restriction and whether it is plausible here.'
        ],
        tip: 'Zeros + all units present ⇒ Tobit; question whether one β can drive both margins.'
      },
      {
        type: 'concept',
        q: 'Summarise the three panel tests and the model each points to, in order.',
        answer: [
          'xttest0 (Breusch–Pagan LM): H0 σ²_a=0; reject ⇒ RE beats Pooled OLS.',
          'hausman fe re: H0 Cov(a,x)=0; reject ⇒ use Fixed Effects over RE.',
          'CRE/Mundlak Wald test on the time-means: H0 ξ=0 (RE sufficient); reject ⇒ need CRE/FE. Typical chain: FE > RE > POLS.'
        ]
      },
      {
        type: 'scenario',
        q: 'You ran FE and xttest3 rejects (heteroskedasticity) while xtserial fails to reject (no AR1). Do your coefficients change? What do you do?',
        answer: [
          'No — the point estimates are unaffected; only the standard errors are wrong (too small).',
          'Fix the inference with cluster-robust standard errors: xtreg y x, fe vce(cluster id).',
          'Since there is no serial correlation, FE remains efficient; an alternative is FGLS for panel heteroskedasticity, but cluster-robust SEs are the standard, simple fix.'
        ],
        tip: 'Heteroskedasticity/autocorrelation = SE problem, not a coefficient problem.'
      }
    ]
  };
})();
