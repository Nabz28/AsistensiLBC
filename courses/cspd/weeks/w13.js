/* ============================================================================
   CSPD · Week 13 — Random Effects, Hausman & Correlated Random Effects
   Final-exam Topic 5 (bonus/optional): RE and CRE.
   Sources: "Random Effect / Fixed Effect" deck (Ayu P.), Panel_RE_CRE,
   Meet 13 FERE deck, Mus08 + airfare do-files, Wooldridge ch. 14.
   Registers on window.CSPD_WEEKS.w13.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w13 = {
    id: 'w13',
    label: 'Week 13',
    title: 'Random Effects, Hausman & CRE',
    subtitle: 'GLS / quasi-demeaning (θ), RE vs POLS (BP-LM), RE vs FE (Hausman), and the Mundlak / CRE fix',

    notes: [
      {
        heading: 'Random Effects: the middle road',
        num: '1',
        cards: [
          {
            title: 'Treat aᵢ as random noise, then GLS',
            html: String.raw`
<p><span class="key">Random Effects (RE)</span> keeps $a_i$ in the error but assumes it is a <b>random
draw uncorrelated with the regressors</b>. The composite error $v_{it}=a_i+u_{it}$ is serially
correlated (the $a_i$ part is common across $t$), so OLS is inefficient. RE fixes this with
<b>GLS / quasi-demeaning</b>:</p>
<div class="formula">$$ (y_{it}-\theta\bar y_i)=\beta_0(1-\theta)+\beta_1(x_{it}-\theta\bar x_i)+(v_{it}-\theta\bar v_i) $$
$$ \theta=1-\sqrt{\dfrac{\sigma_u^2}{\sigma_u^2+T\sigma_a^2}},\qquad 0\le\theta\le 1 $$
$$ \text{intraclass corr: } \mathrm{Corr}(v_{it},v_{is})=\dfrac{\sigma_a^2}{\sigma_a^2+\sigma_u^2}\ \ (t\ne s) $$</div>
<p>That positive serial correlation in the composite error $v_{it}=a_i+u_{it}$ is exactly why pooled-OLS
default SEs are wrong and why GLS (RE) is more efficient.</p>
<table>
  <tr><th>θ value</th><th>RE collapses to</th></tr>
  <tr><td>$\theta=0$</td><td>Pooled OLS (no quasi-demeaning).</td></tr>
  <tr><td>$\theta=1$</td><td>Fixed Effects (full demeaning).</td></tr>
  <tr><td>$0<\theta<1$</td><td>partial demeaning — RE is literally between POLS and FE.</td></tr>
</table>
<div class="formula">Stata:  xtreg y x, re        (add theta to print θ)</div>
<div class="note">💡 Because RE only removes a <b>fraction</b> $\theta$ of $a_i$ (not 100% like FE/FD), it
<b>keeps time-invariant regressors</b> (gender, race) — that is RE's main advantage over FE/FD. Example:
$\hat\theta=0.643$ ⇒ RE sits closer to FE than to POLS.</div>`
          },
          {
            title: 'The key RE assumption (and why it’s strong)',
            html: String.raw`
<div class="formula">$$ \mathrm{Cov}(a_i,\ x_{itj})=0\quad\text{for all } t,j $$</div>
<p>RE assumes the unobserved effect is <b>uncorrelated with every regressor in every period</b>. Then
POLS is consistent but inefficient, and RE is consistent <b>and</b> more efficient (GLS). If this fails
($a_i$ correlated with $x$), <b>RE is biased &amp; inconsistent</b> — and you should use FE.</p>
<div class="tip">📝 This is usually a strong/unrealistic assumption: regressors are typically the result of
choices correlated with individual ability/preferences captured in $a_i$. So FE is the default; RE is
the exception, justified mainly when the key regressor is time-invariant.</div>`
          }
        ]
      },
      {
        heading: 'Choosing the model: two tests',
        num: '2',
        cards: [
          {
            title: 'RE vs POLS — Breusch–Pagan LM test',
            html: String.raw`
<p>Is there any panel-level variance ($\sigma_a^2>0$) at all?</p>
<div class="formula">$H_0:\ \sigma_a^2=0$ (POLS fine)   vs   $H_1:\ \sigma_a^2>0$ (use RE)
Stata:  xttest0   (after xtreg, re)</div>
<p>Reject $H_0$ ⇒ significant individual effects ⇒ RE preferred over POLS. (Even when the LM test is
borderline, Wooldridge notes RE is generally preferable to POLS: it removes a fraction $\theta$ of
$a_i$ — less bias — and mops up serial correlation, so it is more efficient.)</p>`
          },
          {
            title: 'RE vs FE — the Hausman test',
            html: String.raw`
<p>The decisive test. It asks whether $a_i$ is correlated with the regressors by comparing the FE
estimator (consistent either way) with the RE estimator (efficient only if $H_0$ holds):</p>
<div class="formula">$H_0$: $a_i$ uncorrelated with regressors ⇒ RE consistent &amp; efficient (use RE)
$H_1$: $a_i$ correlated with regressors ⇒ RE biased ⇒ use FE
$\chi^2=(\hat\beta_{FE}-\hat\beta_{RE})'[\mathrm{Var}(\hat\beta_{FE})-\mathrm{Var}(\hat\beta_{RE})]^{-1}(\hat\beta_{FE}-\hat\beta_{RE})$
Stata:  hausman fe re</div>
<p>Small $p$ (e.g. $<0.05$) ⇒ <b>reject $H_0$ ⇒ use Fixed Effects</b> (RE is inconsistent). Failing to
reject means either RE and FE are close enough that it doesn't matter, or FE sampling variation is large.</p>
<div class="note">💡 If the main regressor is <b>time-invariant</b> (e.g. gender), you <b>must</b> use RE —
FE can't estimate it. Then justify RE with many time-constant controls, or use CRE (next).</div>
<div class="tip">📝 Why is FE often <b>less precise</b> (bigger SEs) than RE? FE uses only <b>within</b>-unit
variation and throws away all the <b>between</b>-unit variation; RE uses both. When a regressor barely
moves within units, FE has little signal left and its SEs blow up. The trade-off: FE buys consistency
(robust to $a_i$–$x$ correlation) at the cost of efficiency.</div>`
          }
        ]
      },
      {
        heading: 'Correlated Random Effects (CRE) / Mundlak',
        num: '3',
        cards: [
          {
            title: 'Have FE’s consistency AND keep time-invariant variables',
            html: String.raw`
<p>The dilemma: FE is consistent but kills time-invariant regressors; RE keeps them but assumes
$\mathrm{Cov}(a_i,x)=0$. <span class="key">Mundlak (1978) / CRE</span> bridges them. Model the
correlation explicitly by letting $a_i$ depend on the unit's <b>time-averages</b> $\bar x_i$:</p>
<div class="formula">$$ a_i=\alpha+\xi\,\bar x_i+r_i,\qquad r_i\perp x_{it} $$</div>
<p>Substitute into the model and estimate by <b>RE with the time-averaged regressors $\bar x_i$ added</b>:</p>
<div class="formula">$$ y_{it}=\alpha+\beta\,x_{it}+\xi\,\bar x_i+\gamma\,z_i+(r_i+u_{it}) $$</div>
<ul>
  <li>The slope $\hat\beta$ on $x_{it}$ comes out <b>equal to FE</b> — consistent even if $a_i$ correlates
      with $x$.</li>
  <li>But you can <b>also</b> estimate effects of time-invariant $z_i$ (gender, race) — impossible in FE.</li>
  <li>The added $\bar x_i$ <b>controls for</b> the correlation between $a_i$ and the regressors.</li>
</ul>`
          },
          {
            title: 'CRE doubles as a Hausman test',
            html: String.raw`
<p>The coefficient $\xi$ on the time-averages <b>is</b> the test:</p>
<div class="formula">$H_0:\ \xi=0$ ⇒ no correlation ⇒ RE is sufficient (and valid)
$H_1:\ \xi\ne 0$ ⇒ correlation ⇒ need CRE / equivalently FE
Stata:  test mean_x1 mean_x2 ...   (a Wald test; H0: RE sufficient)</div>
<p>Reject $H_0$ ⇒ use CRE/FE. This is an "artificial regression" version of Hausman that is robust to
heteroskedasticity/clustering (just cluster the SEs), and it tells you <b>which</b> variables drive the
$a_i$–$x$ correlation.</p>
<div class="formula">CRE recipe:  egen mean_x = mean(x), by(id)   ->   xtreg y x mean_x z, re   ->   test mean_x</div>`
          }
        ]
      },
      {
        heading: 'Practical issues: unbalanced panels & attrition',
        num: '4',
        cards: [
          {
            title: 'Unbalanced panels and attrition bias',
            html: String.raw`
<p><b>Unbalanced panel:</b> some units have missing periods (attrition, or natural entry/exit like IPOs
and bankruptcies). Stata's FE/RE handle this automatically (it divides by each unit's available $T_i$).</p>
<p>The hidden danger is <b>non-random attrition</b>:</p>
<table>
  <tr><th>Attrition is…</th><th>Effect on FE/RE</th></tr>
  <tr><td><b>Random / on observables</b> (coffee spilled the form, accidental death)</td><td>Safe — estimates stay unbiased.</td></tr>
  <tr><td><b>Non-random</b> — dropout correlates with the idiosyncratic error/outcome</td><td><b>Selection bias</b> — biased estimates (e.g. workers whose wages fell refuse the follow-up ⇒ over-optimistic results).</td></tr>
</table>
<div class="note">💡 A useful property of FE: it <b>allows</b> attrition to be correlated with $a_i$ (the
time-invariant effect) — if a unit is more likely to drop out because of its permanent type, FE still
works. It only breaks if dropout correlates with the <b>idiosyncratic</b> shock $u_{it}$.</div>`
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
<div class="formula">$\theta=1-\sqrt{\dfrac{\sigma_u^2}{\sigma_u^2+T\sigma_a^2}}$
$(y_{it}-\theta\bar y_i)=(1-\theta)\beta_0+\beta_1(x_{it}-\theta\bar x_i)+(v_{it}-\theta\bar v_i)$
θ=0 -> POLS;  θ=1 -> FE;  0&lt;θ&lt;1 -> RE (partial demeaning).</div>`
          },
          {
            title: 'Test map: which model?',
            html: String.raw`
<div class="formula">POLS vs RE:  xttest0  (Breusch-Pagan LM)  H0: σ²_a=0  -> reject => RE
RE vs FE:    hausman fe re            H0: Cov(a,x)=0 -> reject => FE
CRE/Mundlak: xtreg y x mean_x z, re ; test mean_x   H0: ξ=0 -> reject => FE/CRE</div>
<p>Decision chain (common result): xttest0 rejects ⇒ RE beats POLS; Hausman rejects ⇒ FE beats RE.
Overall ranking often: <b>FE &gt; RE &gt; POLS</b>.</p>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Reading RE / Hausman / CRE output',
        num: 'R',
        cards: [
          {
            title: 'RE vs FE side by side, then Hausman',
            html: String.raw`
<span class="rd-tag">Case · airfare (Do_Airfare.do)</span>
<div class="stata"><span class="cmd">xtset id year</span>
<span class="cmd">xtreg lfare y98 y99 y00 concen ldist ldistsq, fe</span>
   concen  <span class="hl">0.169</span>   <span class="dim">FE: +1 unit concentration -> +16.9% fare</span>
<span class="cmd">xtreg lfare y98 y99 y00 concen ldist ldistsq, re</span>
   concen  <span class="hl">0.209</span>   <span class="dim">RE: +20.9% fare</span>
<span class="cmd">hausman fe re</span>          ->  chi2 significant, <span class="hl">reject H0</span>
<span class="cmd">xttest0</span>             ->  reject H0 (RE &gt; POLS)</div>
<ul class="annot">
  <li>Both say higher market concentration ⇒ higher fares; the FE effect (16.9%) is <b>smaller</b> than
      RE (20.9%) — RE is contaminated by the $a_i$–$x$ correlation.</li>
  <li><b>Hausman rejects H0</b> ⇒ $a_i$ correlates with regressors ⇒ <b>use FE</b> (consistent).</li>
  <li><b>xttest0 rejects</b> ⇒ panel effects exist ⇒ RE beats POLS. Chain: FE &gt; RE &gt; POLS.</li>
</ul>`
          },
          {
            title: 'Reading the Hausman block',
            html: String.raw`
<span class="rd-tag">hausman fe re</span>
<div class="stata"><span class="ttl">test of H0: difference in coefs not systematic</span>            (b)      (B)     (b-B)
          fixed    random   Difference
   x1     2.48e9   1.25e9   1.23e9
chi2(1) = (b-B)'[(V_b-V_B)^-1](b-B) = <span class="hl">3.67</span>
Prob &gt; chi2 = <span class="hl">0.0553</span></div>
<ul class="annot">
  <li><b>b = FE</b> (consistent under H0 and H1); <b>B = RE</b> (efficient only under H0).</li>
  <li><b>p = 0.0553:</b> fail to reject at 5% but reject at 10%. Borderline — combine with
      <code>corr(u_i, Xb) = −0.5468</code> (clear correlation) ⇒ lean to <b>FE</b> to avoid bias.</li>
  <li>Failing to reject can also mean RE≈FE (doesn't matter) or large FE sampling variance.</li>
</ul>`
          },
          {
            title: 'CRE / Mundlak in Stata (Mus08.do)',
            html: String.raw`
<span class="rd-tag">Correlated Random Effects</span>
<div class="stata"><span class="cmd">* Step 1: build time-averages of the time-varying regressors (one egen per var)</span>
<span class="cmd">egen mean_exp = mean(exp), by(id)</span>
<span class="cmd">egen mean_wks = mean(wks), by(id)</span>   <span class="dim">* ...and so on for exp2, union, ind, occ</span>
<span class="dim">* ed and fem are time-invariant -> no time-mean needed</span>
<span class="cmd">* Step 2: RE with the means added</span>
<span class="cmd">xtreg lwage exp exp2 wks ed union ind occ fem mean_exp mean_exp2 mean_wks mean_union mean_ind mean_occ, re</span>
<span class="cmd">* Wald test:  H0 RE sufficient  vs  Ha need CRE/FE</span>
<span class="cmd">test mean_exp mean_exp2 mean_wks mean_union mean_ind mean_occ</span></div>
<ul class="annot">
  <li>The slopes on <code>exp, wks,…</code> match FE, <b>but</b> you can also estimate <code>ed</code> and
      <code>fem</code> (time-invariant) — FE could not.</li>
  <li><b>Reject the Wald test</b> ⇒ the time-means matter ⇒ $a_i$ correlates with $x$ ⇒ need CRE/FE
      (RE alone is invalid). This is a heteroskedasticity-robust alternative to <code>hausman</code>.</li>
</ul>`
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'Explain the θ parameter in Random Effects and what θ=0 and θ=1 correspond to. Why can RE estimate the effect of gender but FE cannot?',
        answer: [
          'θ = 1 − sqrt(σ²_u /(σ²_u + Tσ²_a)) is the fraction of the unit mean that RE subtracts (quasi-demeaning).',
          'θ=0 ⇒ RE = Pooled OLS (no demeaning); θ=1 ⇒ RE = Fixed Effects (full demeaning); 0<θ<1 ⇒ RE is partway between.',
          'Because RE only removes a FRACTION θ of aᵢ (not 100%), time-invariant variables like gender retain variation in the quasi-demeaned data, so RE can estimate them. FE/FD remove 100% of anything time-invariant, so gender is wiped out.'
        ],
        tip: 'RE keeps time-invariant regressors; that is its main edge over FE.'
      },
      {
        type: 'concept',
        q: 'State the Hausman test’s H0 and H1, the decision rule, and what rejecting it implies about RE.',
        answer: [
          'H0: aᵢ is uncorrelated with the regressors ⇒ RE is consistent AND efficient (use RE).',
          'H1: aᵢ is correlated with the regressors ⇒ RE is biased/inconsistent ⇒ use FE.',
          'Rule: small p (e.g. <0.05) ⇒ reject H0 ⇒ use Fixed Effects. The FE estimator (b) is consistent under both hypotheses; RE (B) is efficient only under H0, so a large gap between them signals correlation.'
        ],
        tip: 'Reject Hausman ⇒ FE. Fail to reject ⇒ RE acceptable (or doesn’t matter).'
      },
      {
        type: 'scenario',
        q: 'Hausman gives p=0.0553 and corr(u_i, Xb)=−0.547. Your key regressor is time-varying. Which model do you choose and why?',
        answer: [
          'p=0.0553 fails to reject H0 at 5% but rejects at 10% — borderline, weak evidence for RE consistency.',
          'corr(u_i, Xb)=−0.547 shows clear correlation between the unobserved effect and the regressors, which is exactly what biases RE.',
          'Choose FIXED EFFECTS to be safe: FE is consistent whether or not the correlation exists, so it avoids the bias; the small efficiency loss is worth the insurance.'
        ]
      },
      {
        type: 'concept',
        q: 'What problem does Correlated Random Effects (Mundlak) solve, how is it implemented in Stata, and how does it serve as a Hausman test?',
        answer: [
          'It lets you keep FE’s consistency (the x_it slope equals FE) WHILE still estimating effects of time-invariant variables (z), which FE cannot — by modelling aᵢ = α + ξ·x̄_i + r_i.',
          'Stata: create time-averages egen mean_x = mean(x), by(id); then xtreg y x mean_x z, re.',
          'Test H0: ξ=0 (coefficients on the time-means are zero). Fail to reject ⇒ RE sufficient. Reject (test mean_x …) ⇒ aᵢ correlates with x ⇒ need CRE/FE. It is a cluster-robust alternative to hausman and shows which variables drive the correlation.'
        ]
      },
      {
        type: 'concept',
        q: 'When is attrition in an unbalanced panel harmless for FE, and when does it bias the estimates?',
        answer: [
          'Harmless if dropout is random or depends only on observables / on the time-invariant effect aᵢ — FE even allows attrition correlated with aᵢ, so units leaving because of their permanent type is fine.',
          'Biasing if dropout correlates with the idiosyncratic error u_it / the outcome (non-random attrition) — e.g. workers whose wages fell refuse the next wave, leaving only "successes" ⇒ selection bias, over-optimistic estimates.',
          'Stata handles the mechanics of unbalanced panels automatically (divides by each unit’s available Tᵢ); the statistical danger is the SELECTION, not the imbalance itself.'
        ]
      }
    ]
  };
})();
