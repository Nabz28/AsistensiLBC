/* ============================================================================
   CSPD · Week 14 — Synthesis & Exam Strategy
   Ties Topics 1-5 together. Rewritten plain/connected; Read Data = interactive
   "make the decision" drills. Registers on window.CSPD_WEEKS.w14.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w14 = {
    id: 'w14',
    label: 'Week 14',
    title: 'Synthesis & Exam Strategy',
    subtitle: 'One decision tree for every model, the right sentence for each output, and the traps',

    notes: [
      {
        heading: 'The master decision tree',
        num: '1',
        cards: [
          {
            title: 'Step 1 — look at the dependent variable and the sample',
            html: String.raw`
<p>Almost every CSPD exam question is really one question: <i>"which estimator, and why?"</i> If you can
diagnose that in 20 seconds, you've won half the marks. Read the outcome and the sample, in this order:</p>
<table>
  <tr><th>What you see</th><th>Model</th><th>Week</th></tr>
  <tr><td>$y$ continuous but piles up at a limit (0 / ceiling); boundary units <b>kept</b></td><td><b>Tobit</b></td><td>8</td></tr>
  <tr><td>boundary units <b>deleted</b> from the data (out-of-range absent)</td><td><b>Truncated regression</b></td><td>9</td></tr>
  <tr><td>$y$ missing because of a <b>separate selection decision</b> tied to unobservables</td><td><b>Heckman</b></td><td>10</td></tr>
  <tr><td>independent samples at different times; <b>different</b> units each round</td><td><b>Pooled cross-section</b> (+ time dummies / DiD)</td><td>11</td></tr>
  <tr><td><b>same</b> units over time; want to remove time-invariant $a_i$</td><td><b>Panel: FE / FD</b></td><td>12</td></tr>
  <tr><td>same units, key regressor time-<b>invariant</b>, or you want efficiency</td><td><b>RE / CRE</b> (then Hausman)</td><td>13</td></tr>
</table>`
          },
          {
            title: 'Step 2 — the panel sub-tree (POLS → RE → FE → CRE)',
            html: String.raw`
<p>Once you know it's a panel, three quick tests pick the estimator:</p>
<div class="decide"><span>1 · xttest0 (BP-LM)</span><span>→ reject ⇒ RE beats POLS</span></div>
<div class="decide"><span>2 · hausman fe re</span><span>→ reject ⇒ FE beats RE</span></div>
<div class="decide"><span>3 · need a time-invariant z?</span><span>→ CRE (RE + time-means), test the means</span></div>
<p>The usual verdict is <b>FE &gt; RE &gt; POLS</b>. Use RE only when your key regressor is time-invariant
(FE can't estimate it) and you can defend $\mathrm{Cov}(a_i,x)=0$ — or use CRE to get FE-consistent slopes
<i>and</i> the time-invariant effects.</p>
<div class="note">💡 After you've chosen the model, two diagnostics check the standard errors:
<code>xttest3</code> (groupwise heteroskedasticity) and <code>xtserial</code> (serial correlation). If
either flags a problem, fix the <b>SEs</b> with <code>vce(cluster id)</code> — the coefficients don't
change, only the inference.</p>`
          }
        ]
      },
      {
        heading: 'The thing the exam tests most: saying the right sentence',
        num: '2',
        cards: [
          {
            title: 'Match the model to its interpretation',
            html: String.raw`
<p>You'll lose easy marks if you describe a coefficient the wrong way. Memorise this table — it's the
difference between "the effect on $y$" and "the effect on $y^*$":</p>
<table>
  <tr><th>Model</th><th>The coefficient is the effect on…</th><th>Sentence template</th></tr>
  <tr><td>OLS / FE / FD / RE</td><td>observed $y$ (within-unit for FE/FD)</td><td>"+1 unit $x$ ⇒ $\beta$ change in $y$, ceteris paribus."</td></tr>
  <tr><td>Tobit (raw coef)</td><td><b>latent</b> $y^*$</td><td>"+1 unit $x$ ⇒ $\beta$ change in the <b>latent</b> $y^*$, cp."</td></tr>
  <tr><td>Truncated</td><td>$y$ (observed subpop.)</td><td>"+1 unit $x$ ⇒ $\beta$ change in $y$ among the observed, cp."</td></tr>
  <tr><td>Probit / selection eq.</td><td>latent index ⇒ probability</td><td>"+1 unit $x$ raises the <b>probability</b> of (working), cp."</td></tr>
  <tr><td>year dummy</td><td>intercept shift vs base year</td><td>"vs the base year, average $y$ is $\delta$ higher/lower."</td></tr>
  <tr><td>$x$×year interaction</td><td><b>change</b> in the slope</td><td>"the effect of $x$ <b>changed</b> by $\delta$ vs the base year."</td></tr>
  <tr><td>DiD interaction</td><td>the causal treatment effect</td><td>"treatment caused a $\delta$ change in $y$ (parallel-trends)."</td></tr>
</table>
<div class="tip">📝 Every interpretation needs three things: a <b>number with units</b>, <b>ceteris paribus</b>,
and a <b>significance</b> statement (p-value / stars). Drop any one and you drop marks.</div>`
          },
          {
            title: 'The trap list — mistakes the UAS punishes',
            html: String.raw`
<ul>
  <li><b>Tobit:</b> calling the raw coefficient "the effect on $y$" — it's the effect on $y^*$.</li>
  <li><b>Heckman:</b> reading a significant <code>children</code> in the selection equation as "children
      raise wages" — it's the effect on <b>participation</b>, not the wage.</li>
  <li><b>Heckman:</b> reading $\rho>0$ as "proof of discrimination" — it's about unobservables, not a causal
      wage premium.</li>
  <li><b>Interactions:</b> dropping the main effect (e.g. <code>educ</code>) when interactions are present ⇒
      the interaction becomes a biased mix of level + change.</li>
  <li><b>FE:</b> "education has no effect" because FE dropped it — it's <b>absorbed</b> (time-invariant), not
      shown to be zero.</li>
  <li><b>Hausman:</b> "fail to reject = there's definitely no selection / RE is correct" — could just be low
      power.</li>
  <li><b>Tests vs fixes:</b> heteroskedasticity / serial correlation change the <b>SEs</b>, not the point
      estimates — fix with cluster-robust SEs.</li>
</ul>`
          }
        ]
      },
      {
        heading: 'Predicting the direction of bias',
        num: '3',
        cards: [
          {
            title: 'The OVB sign rule',
            html: String.raw`
<p>A recurring 6-pointer: <i>"is OLS biased, and in which direction?"</i> The omitted-variable-bias formula
gives you the sign in one line:</p>
<div class="formula">$$ \text{bias of }\hat\beta_1 \approx \beta_2\cdot\frac{\mathrm{Cov}(x_1,x_2)}{\mathrm{Var}(x_1)} $$</div>
<p>In words: <b>sign of the bias = (effect of the omitted variable on $y$) × (its correlation with the
included $x$).</b> Worth memorising a few worked cases:</p>
<ul>
  <li><b>FE / region:</b> if high-education workers move to high-wage regions, omitting region biases the
      education coefficient <b>upward</b> (positive × positive). FE removes it.</li>
  <li><b>Heckman:</b> $\rho>0$ ⇒ the observed (working) sample has higher unseen potential ⇒ naive OLS
      <b>over</b>-states the population mean.</li>
  <li><b>Tobit / censoring:</b> attenuation — the slope is biased <b>toward 0</b>.</li>
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
<div class="formula">Tobit:        tobit y x, ll(#) ul(#)
Truncated:    truncreg y x, ll(#) ul(#)
Heckman:      heckman y x, select(s = x z) [twostep]   ; rho = tanh(athrho)
Pooled CS:    reg y i.year x  ;  reg y post##treat   (DiD)
Declare panel: xtset id year ; xtdescribe
Pooled OLS:   reg y x, vce(cluster id)
Fixed effects: xtreg y x, fe   | reg y x i.id (LSDV) | reg D.y D.x (FD)
Random effects: xtreg y x, re [theta]
Tests:        xttest0 (RE vs POLS) | hausman fe re (FE vs RE)
              xttest3 (heterosk.)  | xtserial (autocorr.)
CRE/Mundlak:  egen mean_x=mean(x),by(id) ; xtreg y x mean_x z, re ; test mean_x</div>`
          },
          {
            title: 'Test → conclusion quick table',
            html: String.raw`
<table>
  <tr><th>Test</th><th>$H_0$</th><th>Reject ⇒</th></tr>
  <tr><td>LR / λ (Heckman)</td><td>$\rho=0$ (no selection)</td><td>selection bias ⇒ Heckman</td></tr>
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
        heading: 'Make the decision — hover or tap any highlighted number',
        num: 'R',
        cards: [
          {
            title: 'Drill 1 — Name the model from the output',
            html: String.raw`
<span class="rd-tag">Drill 1 · spot the giveaway line</span>
<p>Examiners often hand you a results window and ask "which model is this?" The trick is to spot the one
line that only appears for that model. Hover each giveaway.</p>` + S({
              title: 'The line that gives each model away',
              dep: 'see…',
              cols: ['Tell-tale line', 'Model'],
              rows: [
                { v: 'a "/sigma" line + "17 right-censored"', c: ['…', 'Tobit'],
                  tips: { 0: '<b>/sigma (estimated error SD) plus a censored-obs count</b> ⇒ Tobit. Probit never shows /sigma; OLS never shows a censored count. Remember: the coefficient is the effect on latent y*.' } },
                { v: 'a "/mills lambda" + "rho" + "Selected/Nonselected"', c: ['…', 'Heckman'],
                  tips: { 0: '<b>/mills lambda, rho, and a Selected vs Nonselected split</b> ⇒ Heckman selection. If lambda is significant, report Heckman over OLS.' } },
                { v: '"corr(u_i, Xb)" + "F test that all u_i=0"', c: ['…', 'Fixed Effects'],
                  tips: { 0: '<b>corr(u_i, Xb) and the "F test all u_i=0"</b> ⇒ xtreg, fe. The F test is the FE-vs-POLS test; corr(u_i,Xb) hints whether RE would be biased.' } },
                { v: '"theta" + sigma_u/sigma_e/rho, time-invariant vars present', c: ['…', 'Random Effects'],
                  tips: { 0: '<b>theta reported, and time-invariant regressors (gender, race) actually have coefficients</b> ⇒ RE. FE would have dropped those variables.' } }
              ]
            })
          },
          {
            title: 'Drill 2 — Read three panel estimators and decide',
            html: String.raw`
<span class="rd-tag">Drill 2 · POLS / FE / RE side by side</span>
<p>A very common exam layout: three columns, then "which do you use?" Hover the test line at the bottom to
walk the decision.</p>` + S({
              title: 'wage on experience: three estimators',
              dep: 'lwage',
              cols: ['Pooled OLS', 'FE', 'RE'],
              rows: [
                { v: 'married', c: ['0.108', '0.047', '0.064'],
                  tips: { 0: '<b>POLS 0.108</b> — biased upward: it lumps in permanent differences between men (more able men are more likely to be married).', 1: '<b>FE 0.047</b> — the within-man marriage premium, after removing each man\'s fixed traits. The drop from 0.108 → 0.047 is the OVB FE removed.', 2: '<b>RE 0.064</b> — between POLS and FE, as θ predicts.' } },
                { v: 'union', c: ['0.182', '0.080', '0.106'],
                  tips: { 1: 'FE union premium 0.080 — again smaller than POLS once fixed effects are removed.' } }
              ],
              notes: [
                { t: 'xttest0: reject ⇒ RE > POLS.    hausman fe re: reject ⇒ FE > RE.    Verdict: use FE.',
                  tip: '<b>Walk it:</b> xttest0 rejects σ²_a=0 ⇒ panel effects exist ⇒ RE beats POLS. Then hausman rejects ⇒ a_i correlates with the regressors ⇒ RE is inconsistent ⇒ choose FE. Chain: FE > RE > POLS.' }
              ]
            })
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'A question gives you a continuous outcome with ~30% zeros, all units present, and asks for the best model. Walk through your diagnosis out loud.',
        answer: [
          'Outcome continuous with a mass at 0, boundary units present (not deleted) ⇒ censoring, not truncation.',
          'If one single process drives both whether y>0 and how much ⇒ Tobit (tobit y x, ll(0)).',
          'If participation and amount are driven by DIFFERENT forces ⇒ Tobit is misspecified; consider Heckman or a double-hurdle model.',
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
          'With no serial correlation FE stays efficient; an alternative is FGLS for panel heteroskedasticity, but cluster-robust SEs are the standard simple fix.'
        ],
        tip: 'Heteroskedasticity / autocorrelation = an SE problem, not a coefficient problem.'
      }
    ]
  };
})();
