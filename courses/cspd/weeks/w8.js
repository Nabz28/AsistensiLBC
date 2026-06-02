/* ============================================================================
   CSPD · Week 8 — The Tobit (Censored Regression) Model
   Final-exam Topic 1: Tobit, censoring, and comparison with OLS.
   Sources: "Tobit and Truncated Regression" deck (Wk 8), WEEK 7 Tobit deck
   (Christoper Jhonatan), tobit_guided_lab.docx, Lab.do, Wooldridge ch. 17.7.
   Registers on window.CSPD_WEEKS.w8. English-primary, exam-optimised.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w8 = {
    id: 'w8',
    label: 'Week 8',
    title: 'The Tobit Model — Censoring & why OLS fails',
    subtitle: 'Corner solutions, the latent variable, MLE, marginal effects, Tobit vs OLS vs Probit',

    /* ===================== NOTES ===================== */
    notes: [
      {
        heading: 'The problem: a limited dependent variable',
        num: '1',
        cards: [
          {
            title: 'When the outcome piles up at a limit',
            html: String.raw`
<p>A <span class="key">limited dependent variable</span> is a continuous outcome whose range is
<b>constrained</b> — most often, a large share of observations sit exactly at a boundary (usually
$0$). Classic examples:</p>
<ul>
  <li>Household spending on durable goods, tobacco, or charity — many households spend <b>0</b>.</li>
  <li>Hours worked per week — many people work <b>0</b>.</li>
  <li>Hours of <i>bimbel</i> (private tutoring) — many students do <b>0</b>.</li>
  <li>Test scores with a ceiling (e.g. aptitude capped at 800) or top-coded income.</li>
</ul>
<p>The pile-up is not noise — it is the data-generating process. A model must explain
<b>two margins at once</b>:</p>
<div class="formula">extensive margin = <b>whether</b> $y>0$   (participate or not)
intensive margin = <b>how much</b>, given $y>0$   (the amount)</div>
<div class="note">💡 The Tobit model assumes the <b>same</b> latent process — the same $\beta$ and the
same $\sigma$ — drives <i>both</i> margins. That is its power and its key limitation.</div>`
          },
          {
            title: 'Two reasons a zero appears: "can’t" vs "won’t"',
            html: String.raw`
<p>Zeros look identical in a spreadsheet but arise from two very different mechanisms:</p>
<table>
  <tr><th>Mechanism</th><th>Story</th><th>What the 0 means</th></tr>
  <tr><td><b>Corner solution</b> ("won't")</td>
      <td>The zero is the true optimum — utility-maximising choice lands on the boundary.</td>
      <td>$y^*\le 0$ is genuine: the person truly wants 0 (or "negative" desire).</td></tr>
  <tr><td><b>Censoring</b> ("can't")</td>
      <td>A positive latent value exists but is hidden / capped by how we observe it.</td>
      <td>The 0 (or the cap) <b>masks</b> a true $y^*$ we cannot see.</td></tr>
</table>
<p>Example — desired work hours: a student who rationally studies 0 hours (marginal benefit &lt;
marginal cost) is a <b>corner solution</b>; a person who wants to work but cannot find a job
(observed 0, but $y^*>0$) is <b>censored</b>. Standard Tobit handles both with one latent equation.</p>`
          }
        ]
      },
      {
        heading: 'Why not OLS?',
        num: '2',
        cards: [
          {
            title: 'OLS on censored data is biased and inconsistent',
            html: String.raw`
<p>OLS assumes the <b>full range</b> of $y$ is observed and that $E(y\mid x)$ is linear. With a mass
point at the limit, the true conditional mean is <b>non-linear</b> — it mixes "probability of being
above the limit" with "expected amount given above". Forcing a straight line through this produces:</p>
<ul>
  <li><b>Attenuation / biased slopes.</b> The pile-up at the limit pulls the fitted line toward the
      boundary, so the slope is <b>biased toward zero</b> (relationship looks weaker than it is).
      This bias <b>does not vanish</b> as $N\to\infty$ — the model is misspecified.</li>
  <li><b>Heteroskedasticity.</b> Near the limit almost everything is censored (low variance);
      far from it observations spread out (high variance) ⇒ OLS standard errors are wrong.</li>
  <li><b>Impossible predictions.</b> OLS can predict $\hat y<0$, meaningless when $y\ge 0$.</li>
</ul>
<div class="note">💡 "Just drop the zeros and run OLS on positives"? <b>Also inconsistent.</b> That creates a
<b>truncated</b> sample: conditional on $y>0$, the error no longer has mean zero
($E[\varepsilon\mid y>0]\ne 0$) — see Week 9.</div>
<div class="tip">📝 Exam line: <i>"OLS treats the censored value as if it were the true value, injecting
measurement error → attenuation bias → biased & inconsistent estimates of $(\beta,\sigma)$."</i></div>`
          }
        ]
      },
      {
        heading: 'The standard Tobit model',
        num: '3',
        cards: [
          {
            title: 'Latent variable + observation rule',
            html: String.raw`
<p>Start from a latent (desired, unconstrained) outcome $y_i^*$ — e.g. desired tobacco spending —
driven by a normal regression:</p>
<div class="formula">$$ y_i^* = x_i'\beta + \varepsilon_i, \qquad \varepsilon_i \sim NID(0,\sigma^2),\quad E(\varepsilon_i\mid x_i)=0 $$</div>
<p>We only observe the <b>censored</b> outcome (here, left-censored at 0):</p>
<div class="formula">$$ y_i = \begin{cases} y_i^* & \text{if } y_i^* > 0 \;(\text{they spend what they want})\\[4pt] 0 & \text{if } y_i^* \le 0 \;(\text{corner / "negative desire"})\end{cases} $$</div>
<p>This is also called the <span class="key">censored regression model</span>: every negative latent
value is mapped to 0. Censoring from above (a ceiling), at a value other than 0, or at <b>both</b>
ends (interval censoring) is incorporated the same way.</p>`
          },
          {
            title: 'Tobit vs Probit — same skeleton, different mapping',
            html: String.raw`
<p>Tobit and Probit share the latent equation $y^*=x'\beta+\varepsilon$. The difference is the
mapping from $y^*$ to what we see:</p>
<table>
  <tr><th>Aspect</th><th>Tobit</th><th>Probit</th></tr>
  <tr><td>Error</td><td>$\varepsilon\sim N(0,\sigma^2)$ — $\sigma$ <b>estimated</b></td><td>$\varepsilon\sim N(0,1)$ — $\sigma$ <b>normalised</b> to 1</td></tr>
  <tr><td>Observed $y$</td><td>$y=y^*$ if $y^*>0$, else $0$</td><td>$y=1$ if $y^*>0$, else $0$</td></tr>
  <tr><td>Outcome type</td><td>Continuous with a pile-up at 0</td><td>Binary (0/1)</td></tr>
  <tr><td>Identify $\sigma$?</td><td>Yes</td><td>No</td></tr>
  <tr><td>Use it for…</td><td>Cigarette spending (0 or positive amount)</td><td>Does the person smoke? (yes/no)</td></tr>
</table>
<p>Because positive $y$ carries amount information, Tobit can identify the scale $\sigma$, whereas in
Probit we only see signs of $y^*$ so $\sigma$ must be normalised. Hence the ratio $\beta/\sigma$ in
Tobit plays the role of probit-style coefficients:
$P\{y_i=0\}=\Phi(-x_i'\beta/\sigma)=1-\Phi(x_i'\beta/\sigma)$.</p>`
          }
        ]
      },
      {
        heading: 'Estimation by Maximum Likelihood',
        num: '4',
        cards: [
          {
            title: 'The likelihood splits in two: a Probit part + a regression part',
            html: String.raw`
<p>Tobit cannot use OLS, so it is estimated by <span class="key">Maximum Likelihood</span> — find
$(\beta,\sigma)$ most likely to have generated the data. Each observation contributes differently:</p>
<div class="formula">$$ \ln L(\beta,\sigma)=\!\!\sum_{y_i>0}\ln\!\Big[\tfrac{1}{\sigma}\phi\!\Big(\tfrac{y_i-x_i'\beta}{\sigma}\Big)\Big]\; +\!\!\sum_{y_i=0}\ln\!\Big[\Phi\!\Big(\tfrac{-x_i'\beta}{\sigma}\Big)\Big] $$</div>
<ul>
  <li><b>Uncensored</b> $(y_i>0)$: contributes the <b>normal density</b> — like an ordinary regression,
      because here $y_i=y_i^*$.</li>
  <li><b>Censored</b> $(y_i=0)$: contributes the <b>probability</b> $P\{y_i^*\le 0\}=\Phi(-x_i'\beta/\sigma)$
      — exactly a <b>Probit</b> contribution. ($\phi=$ normal pdf, $\Phi=$ normal cdf.)</li>
</ul>
<div class="note">💡 One vector $\beta$ governs both pieces — the single-index restriction. Both
$P(y>0)=\Phi(x'\beta/\sigma)$ and the amount $E[y\mid y>0]=x'\beta+\sigma\lambda$ rise with $x'\beta$,
so a single $\beta_j$ <b>must</b> move both margins the <b>same</b> way. If you believe participation and
amount are driven by different forces, Tobit is misspecified — use the <span class="key">Heckman</span>
selection model (Type-2 Tobit, Week 10), or <span class="key">Cragg's double-hurdle / two-part model</span>
which give the zero/positive decision and the amount their own equations.</div>
<div class="tip">📝 Big exam contrast: OLS only loses <i>efficiency</i> if errors are non-normal or
heteroskedastic, but <b>Tobit MLE becomes inconsistent</b> if $\varepsilon$ is non-normal or
heteroskedastic — the likelihood is built on the normality + homoskedasticity assumptions.</div>`
          }
        ]
      },
      {
        heading: 'Interpreting Tobit: three different marginal effects',
        num: '5',
        cards: [
          {
            title: 'The raw coefficient is NOT the effect on observed y',
            html: String.raw`
<p>This is the single most-tested Tobit idea. The raw $\beta$ is the effect on the <b>latent</b>
$y^*$, not on the observed $y$. There are three quantities:</p>
<table>
  <tr><th>Effect on…</th><th>Meaning</th><th>Value</th></tr>
  <tr><td><b>$E[y^*]$</b> latent</td><td>Effect "as if no limit existed" — the underlying propensity.</td><td>just $\beta$</td></tr>
  <tr><td><b>$P(\text{uncensored})$</b></td><td>Effect on the probability of being above the limit (extensive margin).</td><td>$\propto \beta\cdot\phi(\cdot)/\sigma$</td></tr>
  <tr><td><b>$E[y]$</b> observed</td><td>Effect on the actual average outcome, blending both margins.</td><td>$\beta\cdot\Phi(x'\beta/\sigma)$ (scaled by the share uncensored)</td></tr>
</table>
<p>The <b>unconditional ME</b> on $E[y]$ is the policy-relevant number (it averages over the chance of
being pushed past the limit). The <b>conditional ME</b> on $E[y\mid \text{uncensored}]$ uses only the
interior observations and involves a correction term (the inverse Mills ratio, Week 9–10).</p>
<div class="note">💡 Which is bigger, conditional or unconditional? It depends on the <b>censoring share</b>, not a fixed
rule. The deck's worked (right-censored) intuition: raising $x$ also pushes students <i>into</i> the 800
ceiling, compressing the uncensored group from above, so there <b>uncond ME &gt; cond ME</b>
(2.70 vs 2.50 below). Don't memorise a blanket "left vs right" flip — read it off the formulas
$\beta\Phi(z)$ vs $\beta[1-z\lambda-\lambda^2]$.</div>
<div class="tip">📝 If only a few obs are censored (e.g. 17/200 ≈ 8.5%), all three MEs are <b>numerically close</b>
to $\beta$ — censoring barely bites.</div>`
          }
        ]
      }
    ],

    /* ===================== FORMULAS ===================== */
    formulas: [
      {
        cards: [
          {
            title: 'The model in one box',
            html: String.raw`
<div class="formula">Latent:      $y_i^* = x_i'\beta + \varepsilon_i,\quad \varepsilon_i\sim N(0,\sigma^2)$
Observed (left-cens. at 0):  $y_i=\max(0,\,y_i^*)$

$P\{y_i=0\}=\Phi\!\big(-x_i'\beta/\sigma\big)=1-\Phi\!\big(x_i'\beta/\sigma\big)$</div>`
          },
          {
            title: 'Conditional & unconditional expectations (the Mills ratio appears)',
            html: String.raw`
<p>Let $z=x'\beta/\sigma$ and $\lambda(z)=\phi(z)/\Phi(z)$ be the <b>inverse Mills ratio</b>.</p>
<div class="formula">$E[y\mid x, y>0] = x'\beta + \sigma\,\lambda(z)$
$E[y\mid x]\;\;\;\;\;\; = \Phi(z)\,\big(x'\beta\big) + \sigma\,\phi(z)$</div>
<p>Differentiate to get the three marginal effects (left-censored at 0, $z=x'\beta/\sigma$):</p>
<div class="formula">latent:        $\partial E[y^*]/\partial x_j = \beta_j$
unconditional: $\partial E[y\mid x]/\partial x_j = \beta_j\,\Phi(z)$   (McDonald–Moffitt)
conditional:   $\partial E[y\mid x,y>0]/\partial x_j = \beta_j\big[1-z\,\lambda(z)-\lambda(z)^2\big]$</div>
<p>Both the unconditional ($\beta_j\Phi(z)$) and conditional ($\beta_j[1-z\lambda-\lambda^2]$) effects are
$\beta_j$ <b>shrunk</b> by a factor in $(0,1)$. McDonald–Moffitt decomposition:</p>
<div class="formula">$\underbrace{\partial E[y]/\partial x_j}_{\text{unconditional}} = \Phi(z)\cdot\underbrace{\partial E[y\mid y>0]/\partial x_j}_{\text{conditional}} \;+\; E[y\mid y>0]\cdot\underbrace{\partial \Phi(z)/\partial x_j}_{\text{extensive margin}}$</div>
<p>i.e. the total (unconditional) effect = (effect on the amount, among the uncensored) + (effect of moving
units across the 0 boundary). When few obs are censored ($\Phi(z)\to 1$) all three nearly coincide.</p>`
          },
          {
            title: 'Log-likelihood (left-censored at 0)',
            html: String.raw`
<div class="formula">$\ln L=\displaystyle\sum_{y_i>0}\Big[-\ln\sigma+\ln\phi\!\Big(\tfrac{y_i-x_i'\beta}{\sigma}\Big)\Big]+\sum_{y_i=0}\ln\Phi\!\Big(\tfrac{-x_i'\beta}{\sigma}\Big)$</div>
<p>First sum = density (regression part); second sum = censoring probability (probit part). For
<b>right</b>-censoring at $UL$ (e.g. the UCLA 800 example), the censored term becomes
$\sum_{y_i=UL}\ln\Phi\!\big((x_i'\beta-UL)/\sigma\big)$ — the probability $y^*\ge UL$.</p>`
          }
        ]
      }
    ],

    /* ===================== READ DATA ===================== */
    readdata: [
      {
        heading: 'Reading Tobit output in Stata',
        num: 'R',
        cards: [
          {
            title: 'Diagnose before you model — see the censoring with your eyes',
            html: String.raw`
<span class="rd-tag">Case · UCLA aptitude data</span>
<p>200 students; <code>apt</code> = aptitude score, capped at <b>800</b>; predictors <code>read</code>,
<code>math</code>. <b>Always plot first</b> — Tobit problems are visible to the eye.</p>
<div class="stata"><span class="ttl">diagnose the pile-up</span><span class="cmd">histogram apt, normal bin(10) xline(800)</span>
<span class="cmd">count if apt == 800</span>
  <span class="hl">17</span>            &lt;- 17 of 200 students (8.5%) sit exactly at the ceiling</div>
<ul class="annot">
  <li>A spike at 800 against an otherwise roughly-normal shape ⇒ <b>right-censoring</b> at 800.</li>
  <li><b>17/200</b> censored is the headline number: it tells you how badly OLS will be biased and
      whether conditional ≈ unconditional MEs (here, yes — only 8.5%).</li>
</ul>`
          },
          {
            title: 'tobit: read the coefficient as an effect on the LATENT score',
            html: String.raw`
<span class="rd-tag">Core output</span>
<div class="stata"><span class="ttl">right-censored Tobit at 800</span><span class="cmd">tobit apt read math, ul(800)</span>
            |  Coef.   Std.Err.    t
   read     |  <span class="hl">2.70</span>     ...
   math     |  <span class="hl">5.91</span>     ...
  _cons     |  ...
  /sigma    |  ...
LR chi2(2) = <span class="hl">188.97</span>   Prob &gt; chi2 = 0.000   Pseudo R2 = 0.083</div>
<ul class="annot">
  <li><b>read = 2.70:</b> holding math constant, a 1-point higher reading score is associated with a
      <b>2.70-point increase in <i>latent</i> aptitude</b> $y^*$, ceteris paribus — <u>not</u> the
      observed score.</li>
  <li><b>math = 5.91:</b> stronger than reading — math raises latent aptitude ~2× as much.</li>
  <li><b>/sigma:</b> the estimated SD of the error — Tobit identifies it (unlike Probit).</li>
  <li><b>LR chi2 / Pseudo R²:</b> joint significance and fit for explaining <i>both</i> who is censored
      and the level. (Pseudo R² is not the OLS R².)</li>
</ul>
<div class="note">💡 <code>ll(#)</code> = lower limit, <code>ul(#)</code> = upper limit. Use both for
interval censoring: <code>tobit y x, ll(200) ul(800)</code>.</div>`
          },
          {
            title: 'margins: turning Tobit coefficients into reportable effects',
            html: String.raw`
<span class="rd-tag">Marginal effects</span>
<div class="stata"><span class="ttl">three different questions, three commands</span><span class="cmd">margins, dydx(*) predict(xb)</span>          <span class="dim">* effect on latent y*  (= raw coef)</span>
<span class="cmd">margins, dydx(*) predict(e(0,800))</span>     <span class="dim">* effect on E[y | uncensored]  (conditional)</span>
<span class="cmd">margins, dydx(*) predict(ystar(0,800))</span> <span class="dim">* effect on E[y]  (unconditional)</span></div>
<ul class="annot">
  <li><code>predict(xb)</code> ⇒ effect on $y^*$, equals the raw coefficient (Tobit is linear in $y^*$).</li>
  <li><code>e(LL,UL)</code> ⇒ <b>conditional</b> ME, $E[y\mid LL<y<UL]$ — among the uncensored only.</li>
  <li><code>ystar(LL,UL)</code> ⇒ <b>unconditional</b> ME, $E[y]$ — the policy number.</li>
  <li>Result here: reading uncond. ≈ 2.70 vs cond. ≈ 2.50; math 5.91 vs 5.48. Uncond &gt; cond because
      right-censoring means raising $x$ also pushes students into the 800 ceiling.</li>
</ul>`
          },
          {
            title: 'Compare OLS vs Tobit side by side',
            html: String.raw`
<span class="rd-tag">Lab.do · GRE data (ll 200, ul 800)</span>
<div class="stata"><span class="cmd">reg gre gpa topnotch</span>
<span class="cmd">estimates store ols_model</span>
<span class="cmd">tobit gre gpa topnotch, ll(200) ul(800)</span>
<span class="cmd">estimates store tobit_model</span>
<span class="cmd">esttab ols_model tobit_model</span></div>
<ul class="annot">
  <li>The Tobit slope is typically <b>larger in magnitude</b> than OLS, because OLS is attenuated by the
      censored pile-up.</li>
  <li>Reporting tip: never report the raw Tobit coefficient as "the effect on $y$" — always state it is
      the effect on $y^*$, then add a marginal-effect line for $E[y]$.</li>
</ul>`
          }
        ]
      }
    ],

    /* ===================== QUIZ ===================== */
    quiz: [
      {
        type: 'concept',
        q: 'A principal in Depok regresses weekly bimbel hours (many students report 0, a few report the 20-hour package maximum) on family income with OLS. Your friend says "that’s wrong, you have a censoring problem." Is the friend right, and what breaks?',
        answer: [
          'Friend is essentially right: the outcome is limited — a floor at 0 (corner solutions / non-participants) and a ceiling at 20 (package cap, right-censoring).',
          'OLS forces a straight line through a distribution with mass points at 0 and 20, misspecifying E[y|x]. Result: slopes biased toward 0 (attenuation), heteroskedastic errors, and possible impossible predictions (ŷ<0 or >20).',
          'The bias does NOT disappear with more data — it is a specification problem, not a sampling problem.',
          'Fix: an interval-censored Tobit, tobit hours income, ll(0) ul(20).'
        ],
        tip: 'Name the bias (attenuation/toward zero) AND say it is not cured by N→∞.'
      },
      {
        type: 'concept',
        q: 'In Tobit output, math has coefficient 5.91. A classmate writes: "a 1-point higher math score raises a student’s observed aptitude by 5.91 points." Correct the statement.',
        answer: [
          'Wrong: 5.91 is the effect on the LATENT aptitude y*, not the observed (capped) score.',
          'Correct: holding reading constant, a 1-point higher math score is associated with a 5.91-point increase in latent aptitude y*, ceteris paribus.',
          'To talk about the observed score you need a marginal effect: unconditional ME on E[y] via margins, dydx(math) predict(ystar(.,800)) ≈ 5.48–5.91 depending on censoring share.'
        ],
        tip: 'Raw Tobit coef = effect on y*. Observed-y effect needs margins.'
      },
      {
        type: 'concept',
        q: 'Why can Tobit estimate σ while Probit must normalise σ = 1?',
        answer: [
          'Probit only observes the SIGN of y* (0/1), so the scale of y* is unidentified — multiply β and σ by the same constant and the 0/1 pattern is unchanged. Hence σ is normalised to 1.',
          'Tobit observes the actual MAGNITUDE of y whenever y>0, which pins down the scale of the error. So σ is identified and estimated.',
          'Consequence: in Tobit the ratio β/σ behaves like a probit coefficient for the participation margin, while β itself measures the latent-level effect.'
        ]
      },
      {
        type: 'scenario',
        q: 'Only 8 of 250 firms hit the regulatory cap on reported emissions. Will the conditional and unconditional marginal effects differ much? Which would you report to a regulator and why?',
        answer: [
          'With only ~3% censored, the extensive-margin channel (pushing firms into the cap) is tiny, so conditional ME ≈ unconditional ME.',
          'Report the UNCONDITIONAL ME on E[y]: the regulator cares about the whole population of firms, including the chance of being pushed to the cap.',
          'Use the conditional ME only if the question is explicitly restricted to firms below the cap.'
        ],
        tip: 'Few censored obs ⇒ the two MEs nearly coincide; choose by the policy question.'
      },
      {
        type: 'concept',
        q: 'Explain in one sentence each why (a) OLS on the FULL sample and (b) OLS after DROPPING the zeros are both inconsistent for the latent parameters.',
        answer: [
          '(a) Full-sample OLS treats censored zeros as true values, misspecifying the non-linear E[y|x] and pulling the slope toward zero (attenuation) — inconsistent.',
          '(b) Dropping the zeros creates a truncated, non-random subsample where E[ε | y>0] ≠ 0, so the error correlates with x — also inconsistent (this motivates truncated regression / Heckman).',
          'Only the Tobit MLE, which uses the censoring probability for the zeros and the density for the positives, is consistent for (β, σ).'
        ]
      }
    ]
  };
})();
