/* ============================================================================
   CSPD · Week 10 — Sample Selection & the Heckman Model (Tobit II)
   Final-exam Topic 2: the sample selection problem.
   Sources: "Sample Selection Corrections" deck, Heckman worksheet (womenwk),
   Salinan Week 10 deck + heckman.do (Mroz data), Wooldridge ch. 17.5.
   Registers on window.CSPD_WEEKS.w10.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w10 = {
    id: 'w10',
    label: 'Week 10',
    title: 'Sample Selection & the Heckman Model',
    subtitle: 'Incidental truncation, the inverse Mills ratio, exclusion restrictions, two-step vs MLE, ρ and the LR test',

    notes: [
      {
        heading: 'Why go beyond Tobit?',
        num: '1',
        cards: [
          {
            title: 'Tobit forces both margins to share one β — often wrong',
            html: String.raw`
<p>Tobit's single-index restriction says the <b>same variable</b> moves participation (extensive) and
amount (intensive) in the <b>same direction</b>. Reality often breaks this:</p>
<ul>
  <li><b>Vacation spending:</b> more children ⇒ <i>less</i> likely to take a holiday, but <i>if</i> taken,
      a family holiday costs <i>more</i>. Opposite signs ⇒ Tobit misspecified.</li>
  <li><b>Wages &amp; age:</b> experience ⇒ higher wage (positive on amount); age discrimination /
      retirement ⇒ lower employment (negative on participation). Tobit forces these to share a sign.</li>
</ul>
<p>The <span class="key">Heckman / Tobit II</span> model relaxes this: <b>two equations with different
coefficients</b> — one for selection (work or not), one for the outcome (wage if working).</p>`
          },
          {
            title: 'Incidental truncation: a missing-data problem',
            html: String.raw`
<p>We want wage determinants, but wages are observed <b>only for workers</b>. This is
<span class="key">incidental truncation</span>: $y$ (wage) is missing not because of $y$ itself, but
because of a <b>separate selection decision</b> (whether to work) that is correlated with unobserved
determinants of $y$ (motivation, ability, reservation wage).</p>
<div class="note">💡 Decision tree — classify the missingness first:</div>
<table>
  <tr><th>Type</th><th>Is OLS OK?</th><th>Fix</th></tr>
  <tr><td><b>Random missingness</b> (MCAR) — e.g. a phone fails to connect.</td><td>Yes, just less efficient.</td><td>Nothing needed.</td></tr>
  <tr><td><b>Selection on observables</b> — missingness depends only on measured $x$.</td><td>Yes, if you control for those $x$.</td><td>Add controls.</td></tr>
  <tr><td><b>Incidental truncation</b> — selection depends on <b>unobservables</b> linked to $y$.</td><td><b>No</b> — biased.</td><td><b>Heckman</b>.</td></tr>
</table>
<p>Panel attrition is the same idea: dropout is harmless if random/on-observables, but biasing if it
depends on unobservables that also drive $y$ (e.g. low-motivation students drop out <b>and</b> score lower).</p>`
          }
        ]
      },
      {
        heading: 'The Heckman model and the inverse Mills ratio',
        num: '2',
        cards: [
          {
            title: 'Two equations: selection + outcome',
            html: String.raw`
<div class="formula">Selection (probit):  $s_i^*=w_i'\gamma+u_i,\qquad s_i=\mathbf{1}[s_i^*>0]$
Outcome (wage):      $y_i=x_i'\beta+\varepsilon_i,\quad\text{observed only if } s_i=1$
with $(u_i,\varepsilon_i)$ bivariate normal, $\mathrm{corr}=\rho,\ \mathrm{Var}(\varepsilon)=\sigma_\varepsilon^2$.</div>
<p>Selection bias is entirely about $\rho$: if $\rho\ne 0$, the unobservables that push someone into the
sample also move $y$, so the selected sample is non-random in the error.</p>`
          },
          {
            title: 'Why OLS on workers is biased — and how λ fixes it',
            html: String.raw`
<p>Condition the outcome on being selected:</p>
<div class="formula">$$ E[y_i\mid x_i,\ s_i=1]=x_i'\beta+\underbrace{\rho\,\sigma_\varepsilon}_{=\,\beta_\lambda}\,\lambda(w_i'\gamma),\qquad \lambda(z)=\frac{\phi(z)}{\Phi(z)} $$</div>
<p>$\lambda(\cdot)$ is the <span class="key">inverse Mills ratio (IMR)</span>. Among selected units the
error mean is <b>not zero</b> — it equals $\rho\sigma_\varepsilon\lambda$. OLS that omits $\lambda$
dumps this term into the other coefficients ⇒ <b>omitted-variable bias</b>. Heckman simply <b>adds
$\hat\lambda$ as a regressor</b>: it absorbs the conditional error mean, and the remaining $\hat\beta$
become consistent.</p>
<div class="note">💡 IMR intuition: $\lambda$ is the "average pull" of selection. As selection becomes
near-universal ($\Phi\to 1$), $\lambda\to 0$ — the correction vanishes and Heckman ≈ OLS. When few are
selected, $\lambda$ is large and the correction matters a lot. (E.g. λ(0)=0.798, λ(1)=0.287.)</div>`
          }
        ]
      },
      {
        heading: 'Identification: the exclusion restriction',
        num: '3',
        cards: [
          {
            title: 'You need a variable in selection that is NOT in the outcome',
            html: String.raw`
<p>Technically Heckman is identified purely by the <b>non-linearity</b> of $\lambda(\cdot)$ — but over
much of its range $\lambda$ is nearly linear, so $\hat\lambda$ becomes <b>collinear</b> with $x$.
"Identification through functional form" is fragile and hangs on the normality assumption.</p>
<p>The fix is an <span class="key">exclusion restriction</span>: at least one variable that enters the
<b>selection</b> equation but is <b>excluded</b> from the <b>outcome</b> equation.</p>
<div class="formula">Wage (outcome):    education, experience, age
Work (selection):  education, experience, age, <b>+ number of young children</b></div>
<p>Argument: children shift the <b>work decision</b> (childcare cost, reservation wage) but should not
directly shift the <b>wage offer</b>. The credibility of a Heckman estimate <b>lives or dies</b> on this
restriction — and it is <b>argued from theory, not tested</b>.</p>
<div class="tip">📝 Good exclusion restriction = (i) clearly affects selection, (ii) defensibly has no
direct effect on the outcome. "Number of young children" / "distance to childcare" are typical; "years of
education" is a bad one (it affects wages directly).</div>`
          }
        ]
      },
      {
        heading: 'Estimation & testing',
        num: '4',
        cards: [
          {
            title: 'Two-step vs MLE',
            html: String.raw`
<table>
  <tr><th></th><th>Heckman two-step (Heckit)</th><th>Heckman MLE</th></tr>
  <tr><td>Step 1</td><td>Probit of $s$ on $w$ ⇒ get $\hat\lambda_i=\phi(w_i'\hat\gamma)/\Phi(w_i'\hat\gamma)$.</td><td>Maximise the joint likelihood of selection + outcome at once.</td></tr>
  <tr><td>Step 2</td><td>OLS of $y$ on $x$ <b>and</b> $\hat\lambda$ (selected sample).</td><td>—</td></tr>
  <tr><td>Efficiency</td><td>Consistent but <b>less efficient</b>; SEs need correction (generated regressor).</td><td><b>Efficient</b>; gives $\rho,\sigma$ directly.</td></tr>
  <tr><td>Speed/robustness</td><td>Simple, fast, more robust in big samples / hard likelihoods.</td><td>Can fail to converge; relies more on normality.</td></tr>
</table>
<p>Coefficients from the two are usually <b>nearly identical</b>; MLE's advantage is smaller standard
errors and clean $\rho,\sigma$ estimates.</p>`
          },
          {
            title: 'Testing for selection bias: ρ, λ, and the LR test',
            html: String.raw`
<p>The null of <b>no selection bias</b> is $H_0:\rho=0$ (equivalently $\beta_\lambda=0$).</p>
<ul>
  <li><b>MLE:</b> Stata reports <code>/athrho</code> $=\mathrm{atanh}(\rho)$; recover
      $\rho=\tanh(\text{athrho})$. The <b>LR test of independent equations</b> tests $\rho=0$.</li>
  <li><b>Two-step:</b> test whether the coefficient on $\hat\lambda$ (Stata's <code>/mills lambda</code>)
      is zero with a $t$/$z$ test.</li>
</ul>
<p>If you <b>reject</b> $H_0$ (small $p$): significant selection bias ⇒ prefer Heckman. If you
<b>fail to reject</b>: RE/OLS-style estimates are fine, and failing to reject can also mean low power —
not proof that selection is absent.</p>
<div class="note">💡 Sign of $\rho$ has meaning. $\rho>0$ ⇒ unobservables that raise the chance of being
selected also raise $y$ ⇒ the selected sample has higher unobserved potential ⇒ naive OLS
<b>overstates</b> the mean for the population (but the bias on a given slope depends on $\rho$ AND how
each $x$ relates to selection — direction is empirical, not a theorem).</div>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'The selection-corrected mean',
            html: String.raw`
<div class="formula">$E[y\mid x,\ \text{selected}] = x'\beta + \rho\,\sigma_\varepsilon\,\lambda(w'\gamma)$
$\lambda(z)=\phi(z)/\Phi(z)\quad(\text{inverse Mills ratio})$
Bias of omitting $\lambda$: proportional to $\rho$. If $\rho=0$, OLS on the selected sample is fine.</div>`
          },
          {
            title: 'Stata commands (two equivalent dialects)',
            html: String.raw`
<div class="formula">Two-step:  heckman y x1 x2, select(s = x1 x2 z) twostep
MLE:       heckman y x1 x2, select(s = x1 x2 z)
Recover ρ: athrho reported  ->  rho = tanh(athrho)
Manual λ:  probit s w ; predict zb, xb ; gen lambda = normalden(zb)/normal(zb)</div>
<p>Here <code>z</code> is the exclusion restriction (in selection, not in the outcome).</p>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Reading Heckman output',
        num: 'R',
        cards: [
          {
            title: 'Set up: see the missingness first',
            html: String.raw`
<span class="rd-tag">Case · womenwk (Stata teaching data)</span>
<p>2,000 women; wage observed for the <b>1,343 (67%)</b> who work. Inspect before estimating:</p>
<div class="stata"><span class="cmd">use https://www.stata-press.com/data/r18/womenwk, clear</span>
<span class="cmd">tabulate work</span>             <span class="dim">* 1343 work, 657 don't</span>
<span class="cmd">misstable summarize wage</span>   <span class="dim">* 657 missing wages — because they don't work</span></div>
<ul class="annot">
  <li>Wages are <b>missing for non-workers</b> — the textbook incidental-truncation setup.</li>
  <li>67% selected ⇒ moderate correction expected (not tiny, not huge).</li>
</ul>`
          },
          {
            title: 'OLS benchmark — and why it under-states the returns',
            html: String.raw`
<span class="rd-tag">OLS on workers only</span>
<div class="stata"><span class="cmd">reg wage education age if work==1</span>
            |  Coef.   Std.Err.
 education  |  <span class="hl">0.90</span>    0.045
       age  |  <span class="hl">0.15</span>    0.011</div>
<ul class="annot">
  <li>OLS uses only working women — typically those with higher unobserved wage potential, so it
      <b>misses the bottom of the distribution</b> and the slope is flattened.</li>
  <li>Compare to Heckman below: education 0.90 → ~0.98; age 0.15 → 0.21. Here OLS <b>under</b>-states
      (because $\rho>0$ pushes the OLS slope down for these regressors — empirical, not guaranteed).</li>
</ul>`
          },
          {
            title: 'heckman MLE — the four numbers to circle',
            html: String.raw`
<span class="rd-tag">Heckman two-step / MLE</span>
<div class="stata"><span class="ttl">heckman selection model — two-step</span><span class="cmd">heckman wage education age, select(work = married children education age)</span>
<span class="dim">Number of obs = 2000 | Selected = 1343 | Nonselected = 657</span>
<b>wage</b>     education  <span class="hl">0.9825</span>  z=18.23
          age        0.2119  z= 9.61
<b>select</b>   married    0.4309  z= 5.81
          children   0.4473  z=15.56
          education  0.0584  z= 5.32
          age        0.0347  z= 8.21
<b>/mills</b>   lambda     <span class="hl">4.0016</span>  z= 6.60   p=0.000
          rho        <span class="hl">0.6728</span>
          sigma      5.9474
LR test of indep. eqns (rho=0): chi2(1) ... Prob &gt; chi2 = <span class="hl">0.000</span></div>
<ul class="annot">
  <li><b>education = 0.98 (wage eq):</b> +1 year education ⇒ wage higher by ~0.98, sig at 1%, cp —
      the selection-corrected return.</li>
  <li><b>lambda = 4.00, p=0.000:</b> the IMR coefficient is large and significant ⇒ <b>selection bias is
      present</b>; OLS on workers is biased. (lambda $=\rho\sigma_\varepsilon$.)</li>
  <li><b>rho = 0.67 &gt; 0:</b> unobservables raising the chance of working also raise wages ⇒ selected
      workers have higher unobserved potential ⇒ naive OLS overstates the population mean wage.</li>
  <li><b>LR test p = 0.000:</b> reject $H_0:\rho=0$ ⇒ equations are not independent ⇒ report Heckman.</li>
  <li><b>Exclusion restriction:</b> <code>married</code>, <code>children</code> are in selection (highly
      significant) but excluded from wage — they affect the work decision, not the wage offer directly.</li>
</ul>
<div class="note">💡 If instead athrho/lambda were <b>insignificant</b> (LR p &gt; 0.10), you would
report OLS — there is no detectable selection bias to correct (or no power to detect it).</div>`
          },
          {
            title: 'The Mroz / IFLS version (heckman.do)',
            html: String.raw`
<span class="rd-tag">heckman.do · Mroz data</span>
<div class="stata"><span class="cmd">probit inlf nwifeinc age kidslt6 kidsge6</span>
<span class="cmd">predict mills, xb</span>
<span class="cmd">gen lambda = normalden(mills)/normal(mills) if inlf==1</span>
<span class="cmd">heckman lwage educ exper exper2, select(inlf = nwifeinc age kidslt6 kidsge6) twostep</span></div>
<ul class="annot">
  <li><code>kidslt6</code>/<code>nwifeinc</code> are the exclusion restrictions in selection.</li>
  <li>Context caveat: in womenwk (synthetic) children <i>raises</i> participation; in real Indonesian
      data (SAKERNAS), young children typically <b>reduce</b> maternal labour supply. Always read the
      sign against the data-generating context, not just the printout.</li>
</ul>`
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'State, in one sentence each, (i) what the inverse Mills ratio is doing in the wage equation, and (ii) why omitting it biases OLS.',
        answer: [
          '(i) The IMR λ(w′γ) measures the non-zero conditional mean of the error among selected (working) individuals; adding it as a regressor absorbs that mean so the other coefficients become consistent.',
          '(ii) Among workers E[ε | selected] = ρσ·λ ≠ 0 and depends on x; omitting λ dumps this into the slopes → omitted-variable bias on β.'
        ],
        tip: 'IMR = the selection correction term; its coefficient is ρσ_ε.'
      },
      {
        type: 'scenario',
        q: 'Output shows: lambda = 0.42 (insignificant), athrho = 0.08 (se 0.21, p=0.70), LR test of ρ=0: p=0.70. Do you report Heckman or OLS? Does p=0.70 prove there is no selection?',
        answer: [
          'Fail to reject ρ=0 ⇒ no detectable selection bias ⇒ report OLS as the main result (it is consistent and more efficient here); Heckman would just add noise.',
          'p=0.70 does NOT prove selection is absent — it means we cannot detect it (could be genuine independence OR low power / weak exclusion restriction).',
          'A referee may still ask for the Heckman "just to show" robustness; report it in an appendix.'
        ],
        tip: 'Insignificant ρ/λ ⇒ OLS; "fail to reject" ≠ "no selection".'
      },
      {
        type: 'concept',
        q: 'In a women’s-wage Heckman, which is the most defensible exclusion restriction and why: (A) years of education, (B) number of young children, (C) work experience?',
        answer: [
          'B — number of young children. It plausibly shifts the WORK decision (childcare cost, reservation wage) but has no direct effect on the WAGE OFFER an employer makes.',
          'A and C are bad: education and experience enter the wage equation directly, so they cannot be excluded from it.',
          'Remember: the exclusion restriction is argued from economic theory, not tested statistically.'
        ]
      },
      {
        type: 'concept',
        q: 'ρ̂ = 0.70 and significant. Translate this into plain economics, and state the consequence for naive OLS on workers.',
        answer: [
          'ρ>0 means the unobservables that make a woman more likely to work also raise her wage — selected workers have higher unobserved wage potential than the average woman.',
          'Therefore naive OLS on workers over-states average wages for the whole population (it samples the upper part of the unobservable distribution).',
          'But the bias on a particular slope (e.g. education) depends on ρ AND how that x relates to selection — here it happens to push the OLS education slope down.'
        ]
      },
      {
        type: 'concept',
        q: 'Two-step and MLE give education coefficients 0.98 and 0.99, but different standard errors. What does that tell you, and which would you publish?',
        answer: [
          'Near-identical coefficients confirm the model is stable and not sensitive to the estimation method — reassuring.',
          'Different SEs reflect efficiency: MLE is efficient and uses the full joint likelihood; the two-step SE must be corrected for the generated regressor λ̂ and is generally larger.',
          'Publish the MLE estimate (efficient, gives ρ and σ), and show the two-step as a robustness check; add a different exclusion restriction as a further check.'
        ]
      }
    ]
  };
})();
