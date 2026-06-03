/* ============================================================================
   CSPD · Week 13 — Random Effects, Hausman & Correlated Random Effects
   Final-exam Topic 5 (bonus). Rewritten flowing/plain; Read Data cases use the
   ACTUAL 2024 exam Hausman (Table 3.2) + CRE (Table 4.1/4.2) tables. Sources:
   RE/FE deck, Panel_RE_CRE, airfare/mus08 labs, past final Q3/Q4, Wooldridge 14.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w13 = {
    id: 'w13',
    label: 'Week 13',
    title: 'Random Effects, Hausman & CRE',
    subtitle: 'GLS quasi-demeaning (θ), choosing FE vs RE, and the Mundlak/CRE trick',

    notes: [
      {
        heading: 'Random Effects: the middle road',
        num: '1',
        cards: [
          {
            title: 'Keep aᵢ in the error, but assume it\'s well-behaved',
            html: String.raw`
<p>Fixed Effects throws away $a_i$ completely. That's safe, but if $a_i$ happens to be <b>uncorrelated</b>
with your regressors, throwing it away is wasteful — you lose efficiency for no reason.
<span class="key">Random Effects (RE)</span> takes the gentler route: it keeps $a_i$ inside the error and
treats it as a <b>random draw that's uncorrelated with the $x$'s</b>.</p>
<p>The snag is that the combined error $v_{it}=a_i+u_{it}$ is now <b>serially correlated</b> — the same
$a_i$ shows up every period for a unit. So plain OLS is inefficient and its SEs are wrong. RE fixes this with
<b>GLS</b>, which does a <b>partial</b> demeaning controlled by a number $\theta$:</p>
<div class="formula">$$ (y_{it}-\theta\bar y_i)=\beta_0(1-\theta)+\beta_1(x_{it}-\theta\bar x_i)+(v_{it}-\theta\bar v_i) $$
$$ \theta=1-\sqrt{\dfrac{\sigma_u^2}{\sigma_u^2+T\sigma_a^2}},\qquad 0\le\theta\le 1 $$
$$ \text{intraclass corr: } \mathrm{Corr}(v_{it},v_{is})=\dfrac{\sigma_a^2}{\sigma_a^2+\sigma_u^2} $$</div>
<table>
  <tr><th>θ</th><th>RE becomes</th></tr>
  <tr><td>$\theta=0$</td><td>Pooled OLS (no demeaning)</td></tr>
  <tr><td>$\theta=1$</td><td>Fixed Effects (full demeaning)</td></tr>
  <tr><td>$0<\theta<1$</td><td>partial demeaning — RE sits literally between POLS and FE</td></tr>
</table>
<div class="note">💡 The big upside of RE: because it only removes a <b>fraction</b> $\theta$ of $a_i$ (not
100% like FE/FD), <b>time-invariant variables survive</b> — RE can estimate the effect of gender, race, etc.
FE never can. That single fact is the main reason anyone uses RE.</div>`
          },
          {
            title: 'The catch — RE\'s assumption is strong',
            html: String.raw`
<div class="formula">$$ \mathrm{Cov}(a_i,\ x_{itj})=0\quad\text{for all } t,j $$</div>
<p>RE assumes the unobserved effect is uncorrelated with <b>every</b> regressor in <b>every</b> period. If
that holds, RE is consistent <b>and</b> more efficient than both OLS and FE — best of all worlds. But if it
<b>fails</b> (i.e. $a_i$ is correlated with $x$, which is usually the case), <b>RE is biased and
inconsistent</b>, and you should fall back to FE.</p>
<div class="tip">📝 Why FE is the usual default: regressors are normally the result of choices that correlate
with the person's hidden ability/preferences (which live in $a_i$). So $\mathrm{Cov}(a_i,x)=0$ is usually
unrealistic outside a randomised experiment. Reach for RE mainly when your key variable is time-invariant
(FE can't touch it), or use CRE to get the best of both.</div>`
          }
        ]
      },
      {
        heading: 'Choosing the model: two tests',
        num: '2',
        cards: [
          {
            title: 'RE vs Pooled OLS — Breusch–Pagan LM test',
            html: String.raw`
<p>First question: is there <b>any</b> meaningful individual effect at all ($\sigma_a^2>0$)? That's the
<b>Breusch–Pagan LM test</b>:</p>
<div class="formula">$H_0:\ \sigma_a^2=0$ (Pooled OLS is fine)   vs   $H_1:\ \sigma_a^2>0$ (use RE)
Stata:  xttest0</div>
<p><b>Reject</b> ⇒ real panel-level variance ⇒ RE beats Pooled OLS. (Even when this test is borderline,
Wooldridge notes RE is generally preferable to POLS — it removes a fraction of $a_i$ and mops up the serial
correlation, so it's more efficient.)</p>`
          },
          {
            title: 'RE vs FE — the Hausman test (the decisive one)',
            html: String.raw`
<p>The big decision. Hausman asks: <b>is $a_i$ correlated with the regressors?</b> It does this by comparing
the two estimators — FE (always consistent) and RE (efficient, but only consistent if its assumption holds).
If they're far apart, the assumption is broken:</p>
<div class="formula">$H_0$: $a_i$ uncorrelated with the regressors ⇒ RE is consistent &amp; efficient (use RE)
$H_1$: $a_i$ correlated with the regressors ⇒ RE is biased ⇒ use FE
Stata:  hausman fe re</div>
<p><b>Small $p$</b> (e.g. $<0.05$) ⇒ <b>reject $H_0$ ⇒ use Fixed Effects</b> (RE is inconsistent). Failing to
reject means either RE and FE are close enough that it doesn't matter, or the test just lacks power.</p>
<div class="note">💡 If your key regressor is <b>time-invariant</b> (e.g. gender), you <b>have</b> to use RE —
FE can't estimate it — so justify RE with lots of time-constant controls, or use CRE (next) to keep FE's
consistency while still estimating the time-invariant variable.</div>`
          }
        ]
      },
      {
        heading: 'Correlated Random Effects (CRE / Mundlak)',
        num: '3',
        cards: [
          {
            title: 'Have FE\'s honesty AND keep your time-invariant variables',
            html: String.raw`
<p>You're stuck between two imperfect options: FE is consistent but kills time-invariant variables; RE keeps
them but assumes $\mathrm{Cov}(a_i,x)=0$. <span class="key">Mundlak's trick (CRE)</span> gives you both. The
idea: stop pretending $a_i$ is uncorrelated with $x$ — instead, <b>model that correlation</b> by letting
$a_i$ depend on the unit's <b>time-averages</b> $\bar x_i$:</p>
<div class="formula">$$ a_i=\alpha+\xi\,\bar x_i+r_i,\qquad r_i\perp x_{it} $$</div>
<p>Plug that in and you get an ordinary RE regression, just with the time-averages $\bar x_i$ added as extra
controls:</p>
<div class="formula">$$ y_{it}=\alpha+\beta\,x_{it}+\xi\,\bar x_i+\gamma\,z_i+(r_i+u_{it}) $$</div>
<ul>
  <li>The slope $\hat\beta$ on $x_{it}$ comes out <b>exactly equal to FE</b> — consistent even if $a_i$ and
      $x$ are correlated. (The $\bar x_i$ terms absorb that correlation.)</li>
  <li>But you can <b>also</b> estimate effects of time-invariant $z_i$ (gender, race) — which FE simply
      can't.</li>
</ul>`
          },
          {
            title: 'CRE doubles as a robust Hausman test',
            html: String.raw`
<p>Bonus: the coefficient $\xi$ on the time-averages <b>is</b> the test for whether you needed FE at all:</p>
<div class="formula">$H_0:\ \xi=0$ ⇒ no correlation ⇒ RE is sufficient (and valid)
$H_1:\ \xi\ne 0$ ⇒ correlation ⇒ you need CRE (equivalently FE)
Stata:  test mean_x1 mean_x2 ...   (a Wald test)</div>
<p><b>Reject</b> ⇒ use CRE/FE. This is an "artificial regression" version of Hausman that's robust to
heteroskedasticity/clustering (just cluster the SEs), and it even tells you <b>which</b> variables drive the
$a_i$–$x$ correlation.</p>
<div class="formula">Recipe:  egen mean_x = mean(x), by(id)  ->  xtreg y x mean_x z, re  ->  test mean_x</div>
<div class="tip">📝 One more nuance you can quote: FE is often <b>less precise</b> than RE because it uses only
<b>within</b>-unit variation and discards the <b>between</b>-unit variation; when within-variation is small,
FE's standard errors blow up. So FE buys consistency at the cost of efficiency.</div>`
          }
        ]
      },
      {
        heading: 'Two practical issues: unbalanced panels & attrition',
        num: '4',
        cards: [
          {
            title: 'Missing periods are fine — unless people leave for the wrong reasons',
            html: String.raw`
<p>A <b>balanced</b> panel has every unit in every period; an <b>unbalanced</b> one has gaps (people move
away, firms go bankrupt or IPO mid-sample). Stata handles the mechanics automatically — it just divides by
each unit's available number of periods. The real danger isn't the imbalance, it's <b>why</b> people left:</p>
<table>
  <tr><th>Attrition is…</th><th>Effect on FE/RE</th></tr>
  <tr><td><b>Random / on observables</b> (coffee spilled the form; accidental death)</td><td>Safe — estimates stay unbiased.</td></tr>
  <tr><td><b>Non-random</b> — leaving is tied to the idiosyncratic error/outcome</td><td><b>Selection bias</b> (e.g. workers whose wages fell refuse the next wave ⇒ only "successes" remain ⇒ over-optimistic results).</td></tr>
</table>
<div class="note">💡 A nice property of FE: it even <b>tolerates</b> attrition that's correlated with the
permanent effect $a_i$ — if a unit drops out because of its fixed type, FE still works. It only breaks if
dropout is tied to the <b>idiosyncratic</b> shock $u_{it}$.</div>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'RE quasi-demeaning & θ',
            html: String.raw`
<div class="formula">Composite error: $v_{it}=a_i+u_{it}$;  intraclass corr $\mathrm{Corr}(v_{it},v_{is})=\dfrac{\sigma_a^2}{\sigma_a^2+\sigma_u^2}$
$\theta=1-\sqrt{\dfrac{\sigma_u^2}{\sigma_u^2+T\sigma_a^2}}\in[0,1]$
GLS / quasi-demeaned: $(y_{it}-\theta\bar y_i)=(1-\theta)\beta_0+\beta_1(x_{it}-\theta\bar x_i)+(v_{it}-\theta\bar v_i)$</div>
<p>θ=0 → POLS; θ=1 → FE; $0<\theta<1$ → RE (partial demeaning). FGLS plugs in $\hat\theta$ from POLS/FE
residuals to estimate $\sigma_a^2,\sigma_u^2$.</p>`
          },
          {
            title: 'Hausman, BP-LM & CRE — the test statistics',
            html: String.raw`
<div class="formula">Hausman (FE vs RE):  $H=(\hat\beta_{FE}-\hat\beta_{RE})'\big[\widehat{\mathrm{Var}}(\hat\beta_{FE})-\widehat{\mathrm{Var}}(\hat\beta_{RE})\big]^{-1}(\hat\beta_{FE}-\hat\beta_{RE})\ \sim\ \chi^2(k)$
  $k=$ # time-varying regressors. $H_0:\mathrm{Cov}(a_i,x)=0$. Reject ⇒ FE.</div>
<div class="formula">Breusch–Pagan LM (POLS vs RE), balanced panel:
  $LM=\dfrac{NT}{2(T-1)}\!\left[\dfrac{\sum_i\big(\sum_t \hat v_{it}\big)^2}{\sum_i\sum_t \hat v_{it}^2}-1\right]^2\ \sim\ \chi^2(1)$
  $H_0:\sigma_a^2=0$. Reject ⇒ RE beats POLS.</div>`
          },
          {
            title: 'Correlated Random Effects (Mundlak) equations',
            html: String.raw`
<div class="formula">Model the correlation:  $a_i=\alpha+\xi\,\bar x_i+r_i$,  $\mathrm{Cov}(\bar x_i,r_i)=0$
Substitute:  $y_{it}=\alpha+\beta\,x_{it}+\xi\,\bar x_i+\gamma\,z_i+(r_i+u_{it})$  — estimate by RE
Result:  $\hat\beta_{CRE}=\hat\beta_{FE}$ (and you also recover $\gamma$ on time-invariant $z_i$).</div>
<p><b>Mundlak test</b> $H_0:\xi=0$ (Wald, $\sim\chi^2(q)$, $q$ = # time-averages). Reject ⇒ $a_i$ correlates
with $x$ ⇒ need CRE/FE. This is a heteroskedasticity-robust alternative to Hausman ($\xi=0\Rightarrow\hat\beta_{RE}$).</p>`
          },
          {
            title: 'Which model? The test map',
            html: String.raw`
<div class="formula">POLS vs RE:  xttest0 (Breusch-Pagan LM)   H0: σ²_a=0  -> reject => RE
RE vs FE:    hausman fe re               H0: Cov(a,x)=0 -> reject => FE
CRE/Mundlak: xtreg y x mean_x z, re ; test mean_x   H0: ξ=0 -> reject => FE/CRE</div>
<p>Common result: xttest0 rejects (RE &gt; POLS); Hausman rejects (FE &gt; RE). Ranking: <b>FE &gt; RE &gt; POLS</b>.</p>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Read the output — hover or tap any highlighted number',
        num: 'R',
        cards: [
          {
            title: 'Case 1 — RE vs FE: same story, different size',
            html: String.raw`
<span class="rd-tag">Case 1 · airfare panel</span>
<p><b>The scenario:</b> airline routes over time; outcome = log fare, key regressor = market concentration.
Run RE and FE. Both say higher concentration ⇒ higher fares, but the FE effect is <b>smaller</b> — because
RE is partly contaminated by the $a_i$–$x$ correlation. The gap is what the Hausman test will judge. Hover
to compare.</p>` + S({
              title: 'Effect of market concentration on log fare',
              dep: 'lfare',
              cols: ['Random Effects', 'Fixed Effects'],
              rows: [
                { v: 'concen', c: ['0.209', '0.169'],
                  tips: { 0: '<b>RE = 0.209 (≈ +20.9% fare).</b> Bigger — but RE assumes $a_i$ is uncorrelated with concentration, which may be false here.', 1: '<b>FE = 0.169 (≈ +16.9%).</b> Smaller and consistent: FE removes the route fixed effects. If they disagree this much, Hausman usually picks FE.' } }
              ],
              notes: [
                { t: 'xttest0 rejects (RE beats POLS) · hausman rejects (FE beats RE) ⇒ chain FE > RE > POLS.',
                  tip: 'When RE and FE disagree noticeably, that disagreement is exactly what the Hausman test formalises — and it points to FE.' }
              ]
            })
          },
          {
            title: 'Case 2 — Reading the Hausman block (the exam table)',
            html: String.raw`
<span class="rd-tag">Case 2 · exam Table 3.2</span>
<p><b>The scenario:</b> the actual <code>hausman fe re</code> output from last year's final. Column (b) is FE,
(B) is RE, and the test compares them. The decision rule is simple — but this case is <b>borderline</b>
(p just above 0.05), so you combine it with the correlation evidence. Hover each number.</p>` + S({
              cmd: 'hausman fixed random',
              title: 'Hausman test:  H0 = difference in coefficients not systematic',
              dep: '',
              cols: ['(b) fixed', '(B) random', '(b−B) Difference', 'sqrt(diag) Std.err.'],
              rows: [
                { v: 'x1', c: ['2.48e+09', '1.25e+09', '1.23e+09', '6.41e+08'],
                  tips: { 0: '<b>(b) = FE estimate.</b> FE is consistent under BOTH H0 and H1 — the trustworthy benchmark.', 1: '<b>(B) = RE estimate.</b> RE is efficient, but only consistent if H0 holds. It\'s far from FE here (1.25e9 vs 2.48e9).', 2: '<b>The difference (1.23e9) is large</b> — that gap is what the test weighs. A big gap suggests $a_i$ correlates with x1 ⇒ RE is biased.' } }
              ],
              notes: [
                { t: 'chi2(1) = 3.67    Prob > chi2 = 0.0553',
                  tip: '<b>Decision: p = 0.0553.</b> We FAIL to reject H0 at 5% but REJECT at 10% — borderline. Combined with corr(u_i,Xb) = −0.5468 (clear correlation, from the FE output), we LEAN to Fixed Effects to avoid bias. (Reject Hausman ⇒ FE; here it\'s a judgement call that tips to FE.)' }
              ]
            })
          },
          {
            title: 'Case 3 — CRE comparison: RE vs FE vs Correlated-RE',
            html: String.raw`
<span class="rd-tag">Case 3 · district math pass-rate · exam Table 4.1/4.2</span>
<p><b>The scenario:</b> the optional Q4. Three columns — RE, FE, and CRE (RE with the time-average
<code>lenrolbar</code> added). Notice: in CRE the time-varying slopes match FE, you can still read
time-invariant-style effects, and the time-average's coefficient is the Mundlak test. Hover each.</p>` + S({
              title: 'math4 pass rate: RE vs FE vs CRE',
              dep: '',
              cols: ['(1) RE', '(2) FE', '(3) CRE'],
              rows: [
                { v: 'y94', c: ['-24.19***', '-23.71***', '-24.21***'],
                  tips: { 1: '<b>FE y94 = −23.71*** :</b> controlling district fixed effects, 1994 pass rates were 23.7 percentage points below the 1992 base year, significant at 1%.' } },
                { v: 'lunch', c: ['-0.334***', '0.062', '-0.334***'],
                  tips: { 0: '<b>RE lunch = −0.334*** :</b> +1pp poverty proxy ⇒ −0.334pp pass rate, sig 1% — the expected sign (poverty hurts attainment).', 2: 'CRE recovers −0.334*** too.' } },
                { v: 'lrexpp_1', c: ['7.806***', '7.003***', '7.123***'],
                  tips: { 2: '<b>In CRE the time-varying slopes line up with FE</b> — that\'s the whole point: CRE gives you FE-consistent coefficients.' } },
                '-',
                { v: 'lenrolbar', c: ['', '', '0.815'],
                  tips: { 2: '<b>lenrolbar = the time-average added in CRE.</b> Its coefficient (0.815, SE 1.174) IS the Mundlak test: H0 that it\'s 0 means "RE is enough". Here it\'s insignificant ⇒ on this single variable we fail to reject RE — but the overall Hausman strongly rejects, so trust the overall test ⇒ FE.' } }
              ],
              notes: [
                { t: 'Hausman (Table 4.2): chi2(9) = 74.27,  Prob > chi2 = 0.0000  ⇒  reject H0 ⇒ use FE.',
                  tip: 'p = 0.000 strongly rejects RE ⇒ unobserved district effects correlate with the regressors ⇒ RE is inconsistent ⇒ choose Fixed Effects (the CRE slopes already match FE).' }
              ]
            })
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'Explain θ in Random Effects and what θ=0 and θ=1 mean. Why can RE estimate the effect of gender but FE cannot?',
        answer: [
          'θ = 1 − √(σ²_u /(σ²_u + Tσ²_a)) is the fraction of the unit mean RE subtracts (quasi-demeaning).',
          'θ=0 ⇒ RE = Pooled OLS (no demeaning); θ=1 ⇒ RE = Fixed Effects (full demeaning); 0<θ<1 ⇒ RE is between them.',
          'Because RE removes only a FRACTION θ of aᵢ (not 100%), time-invariant variables like gender keep variation in the quasi-demeaned data, so RE can estimate them. FE/FD remove 100% of anything time-invariant, wiping gender out.'
        ],
        tip: 'RE keeps time-invariant regressors; that is its main edge over FE.'
      },
      {
        type: 'concept',
        q: 'State the Hausman test\'s H0 and H1, the decision rule, and what rejecting it implies about RE.',
        answer: [
          'H0: aᵢ is uncorrelated with the regressors ⇒ RE is consistent AND efficient (use RE).',
          'H1: aᵢ is correlated with the regressors ⇒ RE is biased/inconsistent ⇒ use FE.',
          'Rule: small p (e.g. <0.05) ⇒ reject H0 ⇒ use Fixed Effects. FE (b) is consistent either way; RE (B) is efficient only under H0, so a big gap between them signals correlation.'
        ],
        tip: 'Reject Hausman ⇒ FE. Fail to reject ⇒ RE acceptable (or it doesn\'t matter).'
      },
      {
        type: 'scenario',
        q: 'Hausman gives p=0.0553 and corr(u_i, Xb)=−0.547, and your key regressor is time-varying. Which model, and why?',
        answer: [
          'p=0.0553 fails to reject at 5% but rejects at 10% — borderline, weak evidence for RE consistency.',
          'corr(u_i, Xb)=−0.547 shows clear correlation between the unobserved effect and the regressors — exactly what biases RE.',
          'Choose FIXED EFFECTS to be safe: FE is consistent whether or not the correlation exists, so it avoids the bias; the small efficiency loss is worth the insurance.'
        ]
      },
      {
        type: 'concept',
        q: 'What problem does Correlated Random Effects (Mundlak) solve, how do you run it in Stata, and how is it a Hausman test?',
        answer: [
          'It keeps FE\'s consistency (the x_it slope equals FE) WHILE still estimating effects of time-invariant variables (z), which FE cannot — by modelling aᵢ = α + ξ·x̄_i + r_i.',
          'Stata: egen mean_x = mean(x), by(id); then xtreg y x mean_x z, re.',
          'Test H0: ξ=0 (coefficients on the time-means are zero). Fail to reject ⇒ RE sufficient. Reject (test mean_x …) ⇒ aᵢ correlates with x ⇒ need CRE/FE. It is a cluster-robust alternative to hausman and shows which variables drive the correlation.'
        ]
      },
      {
        type: 'concept',
        q: 'When is attrition in an unbalanced panel harmless for FE, and when does it bias the estimates?',
        answer: [
          'Harmless if dropout is random or depends only on observables / on the time-invariant effect aᵢ — FE even tolerates attrition correlated with aᵢ.',
          'Biasing if dropout correlates with the idiosyncratic error u_it / the outcome (non-random attrition) — e.g. workers whose wages fell refuse the next wave, leaving only "successes" ⇒ selection bias, over-optimistic estimates.',
          'Stata handles unbalanced panels automatically (divides by each unit\'s available Tᵢ); the danger is the SELECTION, not the imbalance itself.'
        ]
      }
    ]
  };
})();
