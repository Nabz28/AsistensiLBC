/* ============================================================================
   CSPD · Master Cheatsheet — the exhaustive memorise-everything reference.
   No Stata code. Every model, assumption, test (H0/H1/decision), comparison,
   when-to-use, interpretation, trap, and bias direction. Registers on
   window.CSPD_CHEAT and is assembled into COURSE.cheatsheet (printable tab).
   ============================================================================ */
(function () {
  'use strict';

  window.CSPD_CHEAT = {
    label: { en: 'Cheatsheet', id: 'Cheatsheet' },
    title: { en: 'CSPD Master Cheatsheet — memorise everything',
             id: 'Cheatsheet CSPD — hafal semuanya' },
    blurb: String.raw`The complete brain-dump: every model, <b>every assumption</b>, <b>every test</b> (H₀, H₁,
distribution, decision rule), why each method beats the others, when to use it, how to interpret it, and the
traps. Dense on purpose — “Print / save as PDF” reflows it to two columns. Pull the bits you need onto your
allowed A4.`,
    printLabel: { en: 'Print / save as PDF', id: 'Cetak / simpan PDF' },

    sections: [
      /* ============================================================ 0. CORE */
      {
        heading: 'Core toolkit — read any output, know the vocabulary',
        num: '0',
        cards: [
          {
            title: 'Significance & the universal output columns',
            html: String.raw`
<ul>
<li><b>Coef.</b> = estimated $\beta$ (effect of $x$ on the relevant outcome, ceteris paribus).</li>
<li><b>Std. err.</b> = precision; smaller = better. Builds the test stat.</li>
<li><b>t (OLS) / z (MLE)</b> $=$ Coef ÷ SE. Rule: $|t|>1.96\Rightarrow$ sig at 5% ($>1.645$ at 10%, $>2.58$ at 1%).</li>
<li><b>P&gt;|t|</b> = p-value = prob. of a stat this big if true $\beta=0$. $p<0.05\Rightarrow$ significant.</li>
<li><b>95% CI</b>: if it <b>excludes 0</b> ⇒ significant (same verdict as the t-test).</li>
<li><b>Stars:</b> * $p<0.10$, ** $p<0.05$, *** $p<0.01$. <b>SEs in parentheses</b> below coefs.</li>
<li><b>R²</b> = % of variation explained (OLS). <b>Pseudo-R²</b> (MLE/Tobit) ≠ R² — don't read as "% explained".</li>
<li><b>F / Wald / LR (overall)</b>: joint test that all slopes $=0$; $p<0.05\Rightarrow$ model jointly significant.</li>
</ul>`
          },
          {
            title: 'Estimator properties — the words examiners use',
            html: String.raw`
<ul>
<li><b>Unbiased:</b> $E[\hat\beta]=\beta$ (right on average, any $N$).</li>
<li><b>Consistent:</b> $\hat\beta\to\beta$ as $N\to\infty$ (gets it right with enough data). Bias that
<b>doesn't</b> vanish with $N$ (attenuation, selection, OVB) = <b>inconsistent</b>.</li>
<li><b>Efficient:</b> smallest variance among a class (most precise). <b>BLUE</b> = Best Linear Unbiased
Estimator (OLS under Gauss–Markov; FE/FD under their assumptions 1–6).</li>
<li><b>Trade-off:</b> FE is consistent but <b>less efficient</b>; RE is efficient but consistent <b>only</b>
if its assumption holds. Hausman is exactly this consistency-vs-efficiency choice.</li>
</ul>
<div class="note"><b>OVB sign rule:</b> bias of $\hat\beta_1\approx\beta_2\cdot\dfrac{\mathrm{Cov}(x_1,x_2)}{\mathrm{Var}(x_1)}$
⇒ sign $=$ (effect of omitted on $y$) $\times$ (corr of omitted with included $x$).</div>`
          },
          {
            title: 'MLE & three equivalent tests',
            html: String.raw`
<p><b>MLE</b> = pick parameters that make the observed data most likely; used for Tobit, truncreg,
probit/Heckman. Reports z (not t), LR/Wald, Pseudo-R². Three asymptotically-equivalent ways to test the same
restriction (all $\sim\chi^2$):</p>
<ul>
<li><b>LR (Likelihood Ratio):</b> compare $\ln L$ restricted vs unrestricted.</li>
<li><b>Wald:</b> uses the unrestricted estimate &amp; its variance (most output uses this).</li>
<li><b>LM / Score:</b> uses the restricted estimate (e.g. Breusch–Pagan LM).</li>
</ul>`
          }
        ]
      },

      /* =============================================== 1. TOBIT (Topic 1) */
      {
        heading: 'Tobit — censored regression (boundary units KEPT)',
        num: '1',
        cards: [
          {
            title: 'Model & types of limit',
            html: String.raw`
<div class="formula">Latent:  $y_i^*=x_i'\beta+\varepsilon_i$,  observed $y_i=\max(0,y_i^*)$ (floor)
$P(y_i=0)=\Phi(-x'\beta/\sigma)=1-\Phi(x'\beta/\sigma)$. Estimated by <b>MLE</b>.</div>
<p>Used when $y$ is continuous but <b>piles up at a limit</b> (corner solution / ceiling). The zero hides two
stories: <b>"won't"</b> (corner, true 0) vs <b>"can't"</b> (censored, hidden positive).</p>
<ul>
<li><b>Left</b> cens.: $y=LL$ if $y^*\le LL$. <b>Right</b>: $y=UL$ if $y^*\ge UL$. <b>Interval</b>: both ends.</li>
<li>Two margins, one process: extensive (whether $y>0$) &amp; intensive (how much) — same $\beta,\sigma$
(the <b>single-index restriction</b>).</li>
</ul>`
          },
          {
            title: 'ASSUMPTIONS (stronger than OLS)',
            html: String.raw`
<ol>
<li>Latent model <b>linear</b> in parameters: $y^*=x'\beta+\varepsilon$.</li>
<li>$\varepsilon\mid x\sim N(0,\sigma^2)$ — <b>normality</b> (required, not optional).</li>
<li><b>Homoskedasticity</b>: $\mathrm{Var}(\varepsilon\mid x)=\sigma^2$ constant.</li>
<li>Censoring/threshold point <b>known and correctly specified</b>.</li>
<li>No perfect collinearity; $E(\varepsilon\mid x)=0$.</li>
</ol>
<div class="note"><b>Violations bite hard:</b> if $\varepsilon$ is non-normal or heteroskedastic, the Tobit
<b>MLE is inconsistent</b> (OLS would only lose efficiency). The likelihood is built on normality, so it's
fragile.</div>`
          },
          {
            title: 'Why NOT OLS · estimation · interpretation',
            html: String.raw`
<ul>
<li><b>OLS on full sample</b> (incl. zeros): treats capped values as real ⇒ <b>attenuation</b> (slope toward
0) + heteroskedastic + impossible predictions. Bias <b>does not vanish</b> as $N\to\infty$.</li>
<li><b>OLS dropping zeros</b>: creates a truncated sample, $E[\varepsilon\mid y>0]\ne 0$ ⇒ also inconsistent.</li>
<li><b>MLE</b> log-likelihood = density (positives, like OLS) + probit probability (zeros).</li>
<li><b>Raw coef = effect on LATENT $y^*$</b>, NOT observed $y$. (The #1 trap.)</li>
</ul>
<div class="formula"><b>Inverse Mills ratio (IMR):</b> $\lambda(z)=\phi(z)/\Phi(z)$,  $z=x'\beta/\sigma$
Conditional mean: $E[y\mid x,y>0]=x'\beta+\sigma\lambda(z)$;  $E[y\mid x]=\Phi(z)x'\beta+\sigma\phi(z)$
3 marginal effects:
 latent: $\partial E[y^*]/\partial x_j=\beta_j$
 uncond (E[y], whole pop, POLICY): $\beta_j\,\Phi(z)$
 cond (E[y|y&gt;0], doers only): $\beta_j[1-z\lambda-\lambda^2]$</div>
<p>Both observed effects $=\beta_j\times$(factor in 0–1). <b>Few censored ⇒ all three ≈ $\beta_j$.</b>
Right-cens: uncond &gt; cond; left-cens at 0: reversed.</p>`
          },
          {
            title: 'Tobit vs Probit vs OLS · when (not) to use',
            html: String.raw`
<table>
<tr><th></th><th>Tobit</th><th>Probit</th></tr>
<tr><td>See</td><td>amount $y$ when $y^*>0$</td><td>only 0/1</td></tr>
<tr><td>$\sigma$</td><td><b>estimated</b> (sees magnitudes)</td><td><b>fixed to 1</b> (only signs)</td></tr>
<tr><td>$y$</td><td>continuous w/ clump</td><td>binary</td></tr>
</table>
<ul>
<li><b>Use Tobit</b> when: $y\ge 0$ with a mass at the limit, units kept, and <b>one</b> process drives both
margins.</li>
<li><b>Don't</b> use when the two margins are driven by <b>different</b> forces / opposite signs ⇒ Tobit
misspecified ⇒ <b>Heckman</b> (Type-2) or <b>Cragg double-hurdle / two-part</b> model.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 2. TRUNCATED */
      {
        heading: 'Truncated regression (boundary units DELETED)',
        num: '2',
        cards: [
          {
            title: 'Model, assumptions & vs Tobit',
            html: String.raw`
<div class="formula">$y^*=x'\beta+\varepsilon$, observed only if $y^*>c$ (rest absent).  $\alpha=(c-x'\beta)/\sigma$
truncation IMR $\lambda(\alpha)=\phi(\alpha)/(1-\Phi(\alpha))$
Truncated mean: $E[y\mid y>c]=x'\beta+\sigma\,\lambda(\alpha)$;  ME $=\beta_j[1-\lambda(\lambda-\alpha)]=\beta_j(1-\delta)$, $0{<}\delta{<}1$</div>
<p><b>Assumptions:</b> normality + homoskedasticity of $\varepsilon$, correct truncation point, linear latent
(same as Tobit). Estimated by MLE (density rescaled by $\Phi$).</p>
<table>
<tr><th></th><th>Tobit (censor)</th><th>Truncreg</th></tr>
<tr><td>Boundary obs</td><td>KEPT (capped)</td><td>DELETED</td></tr>
<tr><td>$N$</td><td>unchanged</td><td>shrinks</td></tr>
<tr><td>coef = effect on</td><td>latent $y^*$</td><td><b>observed $y$</b> (survivors)</td></tr>
<tr><td>Estimand</td><td>whole population</td><td>observed subpopulation</td></tr>
</table>
<div class="note"><b>Decision test:</b> "do the boundary cases appear in my data?" Yes ⇒ Tobit. No (never
recorded) ⇒ truncreg.</div>`
          },
          {
            title: 'Why OLS biased · ME caveat · when',
            html: String.raw`
<ul>
<li>Keeping only survivors chops a tail ⇒ $E[\varepsilon\mid y>c]=\sigma\phi/(1-\Phi)>0$ and depends on $x$
⇒ error correlates with $x$ ⇒ Gauss–Markov fails ⇒ OLS <b>biased &amp; inconsistent</b>; slope comes out
<b>too flat</b>.</li>
<li>That $\sigma\phi/(1-\Phi)$ term = inverse-Mills "pull" = the seed of <b>Heckman</b>.</li>
<li><b>ME caveat:</b> a "probability in interval" effect is <b>meaningless</b> after truncreg (out-of-range
units aren't in the population). Report the coefficient / $E[y\mid$ trunc$]$.</li>
<li><b>Use</b> when the out-of-range units were <b>never sampled</b> (selective intake), not merely capped.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 3. HECKMAN */
      {
        heading: 'Heckman / sample selection (Tobit II)',
        num: '3',
        cards: [
          {
            title: 'Classify the missingness FIRST',
            html: String.raw`
<table>
<tr><th>Why missing?</th><th>OLS ok?</th><th>Fix</th></tr>
<tr><td><b>Random</b> (MCAR) — pure chance</td><td>Yes (less data)</td><td>nothing</td></tr>
<tr><td><b>On observables</b> — depends only on measured $x$</td><td>Yes, control them</td><td>add controls</td></tr>
<tr><td><b>Incidental truncation</b> — depends on <b>unobservables</b> tied to $y$</td><td><b>No, biased</b></td><td><b>Heckman</b></td></tr>
</table>
<p>Same logic for panel <b>attrition</b>: harmless if random/observable, biasing if dropout tied to $u_{it}$.</p>`
          },
          {
            title: 'The two-equation model + IMR fix',
            html: String.raw`
<div class="formula">Selection (probit): $s^*=w'\gamma+u$,  $s=1$ if $s^*>0$
Outcome:  $y=x'\beta+\varepsilon$ (seen iff $s=1$);  $\mathrm{corr}(u,\varepsilon)=\rho$
$E[y\mid x,s{=}1]=x'\beta+\rho\sigma_\varepsilon\,\lambda(w'\gamma)$,  $\lambda(z)=\phi(z)/\Phi(z)$</div>
<ul>
<li>Among the selected, error mean $=\rho\sigma_\varepsilon\lambda\ne 0$ ⇒ OLS omits it ⇒ <b>OVB</b>.</li>
<li><b>Fix:</b> add $\hat\lambda$ (the inverse Mills ratio) as a regressor ⇒ remaining $\hat\beta$ consistent.</li>
<li>$\lambda$ large when few selected; $\to 0$ when nearly all selected (then Heckman ≈ OLS).</li>
<li><b>Two "lambda"s:</b> the IMR <b>value</b> $\lambda_i$ (~0.3–0.8) vs the printed <b>coefficient</b>
$=\rho\sigma_\varepsilon$ (can be large, e.g. 4.0). The coefficient's significance flags selection.</li>
</ul>`
          },
          {
            title: 'ASSUMPTIONS · why over Tobit · estimation',
            html: String.raw`
<ol>
<li>$(u,\varepsilon)$ <b>jointly normal</b>, mean 0.</li>
<li>Selection equation correctly specified (a probit).</li>
<li><b>Exclusion restriction</b> for credible identification (below).</li>
<li>$E(\varepsilon\mid x,w)=0$ in the population (before selection).</li>
</ol>
<p><b>Why Heckman over Tobit:</b> Tobit forces one $\beta$ to drive participation &amp; amount in the
<b>same direction</b>; Heckman gives the two equations <b>separate coefficients</b> (e.g. age ↑ wage but ↓
employment). <b>Two-step</b> (probit→$\hat\lambda$→OLS): consistent, less efficient, SE needs correction.
<b>MLE</b>: efficient, gives $\rho,\sigma$; coefficients ≈ two-step.</p>`
          },
          {
            title: 'Exclusion restriction (make-or-break)',
            html: String.raw`
<ul>
<li><b>Def:</b> a variable <b>in selection but excluded from outcome</b> (affects who's observed, not the
outcome directly).</li>
<li><b>Why needed:</b> without it, $\lambda$ is identified only by its <b>non-linearity</b>, but $\lambda$ is
nearly linear over its range ⇒ near-<b>collinear</b> with $x$ ⇒ fragile. A true exclusion gives $\lambda$
independent variation.</li>
<li><b>Good:</b> #children, distance to childcare (move the work decision, not the wage). <b>Bad:</b>
education, experience (belong in the wage equation).</li>
<li><b>Argued from theory, never tested</b> by a regression.</li>
</ul>`
          },
          {
            title: 'Tests, ρ, and interpretation',
            html: String.raw`
<ul>
<li><b>Test for selection bias:</b> $H_0:\rho=0$. MLE: <b>LR test of independent equations</b> ($\chi^2(1)$),
recover $\rho=\tanh(\text{athrho})$. Two-step: test the $\hat\lambda$ coefficient $=0$.</li>
<li><b>Reject</b> ⇒ selection present ⇒ report Heckman. <b>Fail to reject</b> ⇒ OLS (more efficient) — but
could be low power, not proof of none.</li>
<li><b>Sign of $\rho$:</b> $\rho>0$ ⇒ unobservables raising selection also raise $y$ ⇒ selected have higher
hidden potential ⇒ naive OLS <b>overstates</b> the population mean.</li>
<li><b>Interpret:</b> wage eq = effect on $y$; <b>selection eq = effect on the PROBABILITY</b> of being
selected (NOT on $y$). Direction of OLS bias is <b>not</b> a general rule — depends on $\rho$ &amp; how each
$x$ links to selection.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 4. POOLED CS */
      {
        heading: 'Pooled cross-section & changes over time',
        num: '4',
        cards: [
          {
            title: 'What it is · time dummies · interactions',
            html: String.raw`
<ul>
<li><b>Pooled CS</b> = independent samples stacked across years, <b>different units each round</b> (≠ panel;
<b>cannot</b> remove $a_i$). Pool for (i) precision, (ii) studying change over time. Populations shift ⇒ must
model time.</li>
<li><b>Year dummy $\delta_t$:</b> shifts the <b>intercept</b> — an economy-wide LEVEL change common to all,
vs the base year.</li>
<li><b>Interaction $x\times d_t$:</b> lets a <b>slope change</b>. Its coef is the <b>CHANGE</b> in the effect
vs base year, NOT the effect. Effect in year $t=\beta_1+\delta_t$.</li>
</ul>
<div class="note"><b>Trap:</b> keeping $x\times d_t$ but dropping the main effect $x$ ⇒ the interaction
becomes a biased mix of level + change. <b>Always keep the main effect.</b></div>`
          },
          {
            title: 'Chow test (structural break)',
            html: String.raw`
<div class="formula">$F=\dfrac{(SSR_{pooled}-SSR_{unrest})/k}{SSR_{unrest}/(n-2k)}\sim F_{k,\,n-2k}$
$SSR_{unrest}=SSR_1+SSR_2$ (two separate per-period regressions)</div>
<ul>
<li><b>H₀:</b> all coefficients stable across periods (no break). <b>H₁:</b> some differ.</li>
<li><b>Reject</b> ⇒ structural change ⇒ a single pooled model is invalid. Equivalent: F-test all
time-interactions $=0$.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 5. DiD */
      {
        heading: 'Difference-in-Differences (DiD)',
        num: '5',
        cards: [
          {
            title: 'Setup, formula, coefficients',
            html: String.raw`
<div class="formula">$y=\beta_0+\delta_0\,post+\beta_1\,treat+\delta_1(post\!\cdot\!treat)+u$
$\hat\delta_1=(\bar y_{T,post}-\bar y_{T,pre})-(\bar y_{C,post}-\bar y_{C,pre})$</div>
<table>
<tr><th>Coef</th><th>Captures</th></tr>
<tr><td>$\beta_0$</td><td>baseline (control, before)</td></tr>
<tr><td>$\delta_0$ (post)</td><td>common time shock (both groups)</td></tr>
<tr><td>$\beta_1$ (treat)</td><td>fixed pre-existing group gap (NOT the treatment)</td></tr>
<tr><td>$\delta_1$ (interaction)</td><td><b>the DiD = causal treatment effect</b></td></tr>
</table>`
          },
          {
            title: 'Assumption & logic',
            html: String.raw`
<ul>
<li><b>Parallel trends</b> (the key assumption): absent treatment, both groups would have changed by the
<b>same amount</b>. Need equal <b>trends</b>, NOT equal levels.</li>
<li><b>Support it:</b> check pre-trends with extra pre-periods, or a <b>placebo</b> DiD on a fake date
(should be insignificant).</li>
<li><b>Natural / quasi-experiment:</b> an exogenous event hits treatment not control. 1st diff (over time)
removes $a_i$; 2nd diff (across groups) removes the common shock. <b>DiD = FD applied to two groups.</b></li>
</ul>`
          }
        ]
      },

      /* =============================================== 6. PANEL MODEL */
      {
        heading: 'Panel: the unobserved effect aᵢ',
        num: '6',
        cards: [
          {
            title: 'Model, aᵢ, between vs within',
            html: String.raw`
<div class="formula">$y_{it}=\beta_1 x_{it}+a_i+u_{it}$
$a_i$ = time-invariant unobserved heterogeneity (ability, culture, geography)
$u_{it}$ = idiosyncratic shock</div>
<ul>
<li><b>Panel</b> = same units over time ⇒ can cancel $a_i$ by comparing a unit to <b>itself</b>.</li>
<li><b>Cross-section</b> asks "do units with higher $x$ have higher $y$?" (<b>between</b> variation, confounded
by $a_i$). <b>FE</b> asks "when the SAME unit's $x$ changes, does $y$?" (<b>within</b> variation).</li>
<li>They can give <b>opposite signs</b> = <b>Simpson's paradox</b>; within is the honest one.</li>
<li><b>Balanced</b> = every unit all periods; <b>unbalanced</b> = gaps (attrition / entry-exit).</li>
</ul>`
          }
        ]
      },

      /* =============================================== 7. POOLED OLS */
      {
        heading: 'Pooled OLS (panel) — the baseline',
        num: '7',
        cards: [
          {
            title: 'Assumptions, problems, when to use',
            html: String.raw`
<p>Stacks all $NT$ rows, ignores panel structure.</p>
<ul>
<li><b>Consistent iff</b> $\mathrm{Cov}(a_i,x_{it})=0$ AND $\mathrm{Cov}(u_{it},x_{it})=0$ (+ no perfect
collinearity).</li>
<li><b>Problem 1 — bias:</b> if $a_i$ correlates with $x$ ⇒ OVB ⇒ biased &amp; inconsistent ⇒ use FE.</li>
<li><b>Problem 2 — wrong SEs:</b> $a_i$ sits in the error every period ⇒ positive serial correlation ⇒
default SEs too small ⇒ <b>cluster-robust SEs</b>.</li>
<li><b>Use POLS</b> when you genuinely can't follow units (e.g. repeated cross-sections / different
households each wave) — buys sample size.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 8. FIXED EFFECTS */
      {
        heading: 'Fixed Effects — three estimators, one slope',
        num: '8',
        cards: [
          {
            title: 'Within · LSDV · (FD) and what they share',
            html: String.raw`
<div class="formula">Within (demean): $(y_{it}-\bar y_i)=\beta_1(x_{it}-\bar x_i)+(u_{it}-\bar u_i)$
Closed form: $\hat\beta_{FE}=\dfrac{\sum_i\sum_t \ddot x_{it}\ddot y_{it}}{\sum_i\sum_t \ddot x_{it}^2}$ ($\ddot x{=}x{-}\bar x$); df $=NT{-}N{-}k$
LSDV: dummy intercept per unit (drop one — dummy trap)
FD:   $\Delta y_{it}=\beta_1\Delta x_{it}+\Delta u_{it}$ (loses 1st period)</div>
<ul>
<li><b>Within = LSDV</b> give the <b>identical slope</b>. FD = same at $T=2$, differs at $T\ge 3$.</li>
<li>Uses only <b>within-unit</b> variation. <b>Time-invariant regressors are DROPPED</b> (gender, race) —
"absorbed, not absent". Recover their changing effect via $x\times$year interactions.</li>
<li>Perfect collinearity warning: linear experience &amp; year dummies move in lockstep ⇒ drop one.</li>
</ul>`
          },
          {
            title: 'FE ASSUMPTIONS (Wooldridge FE.1–FE.6)',
            html: String.raw`
<ol>
<li><b>FE.1</b> linear, additive $a_i$: $y_{it}=x_{it}\beta+a_i+u_{it}$.</li>
<li><b>FE.2</b> random sample in the cross-section ($N$ units).</li>
<li><b>FE.3</b> rank: each $x$ varies over time for some $i$; no perfect collinearity in demeaned $x$.</li>
<li><b>FE.4 strict exogeneity (the key):</b> $E(u_{it}\mid x_{i1},\dots,x_{iT},a_i)=0$ — error uncorrelated
with regressors in <b>every</b> period (no feedback). $a_i$ may be <b>arbitrarily correlated</b> with $x$.</li>
</ol>
<p><b>FE.1–4 ⇒ FE unbiased &amp; consistent</b> ($T$ fixed, $N\to\infty$).</p>
<ol start="5">
<li><b>FE.5</b> homoskedasticity: $\mathrm{Var}(u_{it}\mid X,a_i)=\sigma_u^2$.</li>
<li><b>FE.6</b> no serial correlation: $\mathrm{Cov}(u_{it},u_{is}\mid X,a_i)=0$, $t\ne s$.</li>
</ol>
<p><b>FE.1–6 ⇒ FE is BLUE</b> &amp; usual SEs valid. Violate 5/6 ⇒ coefficients fine, SEs wrong ⇒
<b>cluster-robust SEs</b>.</p>`
          },
          {
            title: 'What FE can / cannot do · when to use',
            html: String.raw`
<table>
<tr><th>FE removes (time-invariant)</th><th>FE does NOT remove</th></tr>
<tr><td>ability, race, family bg, fixed geography, cohort</td><td>time-varying confounders, reverse causality</td></tr>
</table>
<ul>
<li><b>Use FE</b> when you suspect $\mathrm{Cov}(a_i,x)\ne 0$ (usual) and your key $x$ is time-varying. Most
credible for ceteris-paribus / causal claims.</li>
<li><b>Strength:</b> kills ALL time-invariant confounders, measured or not. <b>Limit:</b> can't estimate
time-invariant effects; doesn't fix time-varying OVB or simultaneity (need IV/DiD).</li>
</ul>`
          }
        ]
      },

      /* =============================================== 9. FIRST DIFF */
      {
        heading: 'First Differencing & FE vs FD',
        num: '9',
        cards: [
          {
            title: 'FD assumptions (FD.1–FD.6)',
            html: String.raw`
<div class="formula">$\Delta y_{it}=\beta_1\Delta x_{it}+\Delta u_{it}$ — OLS on changes; $a_i$ differenced out.</div>
<ol>
<li>FD.1 linear w/ $a_i$; FD.2 random sample; FD.3 rank ($\Delta x$ varies, no perfect collinearity);
<b>FD.4 strict exogeneity</b> $E(u_{it}\mid X,a_i)=0$. ⇒ <b>unbiased &amp; consistent</b>.</li>
<li>FD.5 $\mathrm{Var}(\Delta u_{it})$ constant; FD.6 $\mathrm{Cov}(\Delta u_{it},\Delta u_{is})=0$. ⇒
<b>BLUE</b> (efficient). Violations ⇒ cluster-robust SEs.</li>
</ol>
<p>$T-1$ differenced obs per unit ⇒ FD loses the first period ($N(T-1)$ rows).</p>`
          },
          {
            title: 'FE vs FD — pick which',
            html: String.raw`
<table>
<tr><th>$T$</th><th>FE vs FD</th></tr>
<tr><td>$T=2$</td><td><b>algebraically identical</b> (coef &amp; tests). FE needs a 2nd-period time dummy to match. FD simpler, easy robust SEs.</td></tr>
<tr><td>$T\ge 3$</td><td>differ; both <b>unbiased</b>. Choose on <b>efficiency</b>:</td></tr>
</table>
<ul>
<li>$u_{it}$ <b>serially uncorrelated</b> ⇒ <b>FE</b> efficient.</li>
<li>$u_{it}$ <b>random walk</b> (strong + serial corr) ⇒ <b>FD</b> efficient (differencing removes it).</li>
<li>Practice: report FE, show FD as robustness; big divergence ⇒ suspect serial correlation / failed strict
exogeneity.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 10. RE */
      {
        heading: 'Random Effects (GLS)',
        num: '10',
        cards: [
          {
            title: 'Model, θ, quasi-demeaning',
            html: String.raw`
<div class="formula">Composite error $v_{it}=a_i+u_{it}$ ⇒ serial corr $\mathrm{Corr}(v_{it},v_{is})=\dfrac{\sigma_a^2}{\sigma_a^2+\sigma_u^2}$
GLS quasi-demean: $(y_{it}-\theta\bar y_i)=(1-\theta)\beta_0+\beta_1(x_{it}-\theta\bar x_i)+(v_{it}-\theta\bar v_i)$
$\theta=1-\sqrt{\sigma_u^2/(\sigma_u^2+T\sigma_a^2)}\in[0,1]$</div>
<ul>
<li>$\theta=0$ ⇒ POLS; $\theta=1$ ⇒ FE; $0<\theta<1$ ⇒ partial demeaning (RE between the two).</li>
<li>RE removes only fraction $(1-\theta)$ of $a_i$ from the error ⇒ <b>keeps time-invariant regressors</b>
(its big advantage over FE/FD).</li>
<li>FGLS uses estimated $\hat\theta$ (from POLS/FE residuals) = the RE estimator.</li>
</ul>`
          },
          {
            title: 'RE ASSUMPTIONS & comparisons',
            html: String.raw`
<ol>
<li><b>RE.1</b> strict exogeneity of $u$: $E(u_{it}\mid X,a_i)=0$, <b>AND the key RE assumption</b>
$E(a_i\mid X)=0$ i.e. $\mathrm{Cov}(a_i,x_{itj})=0$ ∀$t,j$ (strong!).</li>
<li><b>RE.2</b> rank. <b>RE.3</b> variance structure: $\mathrm{Var}(u_{it}\mid X,a_i)=\sigma_u^2$, no serial
corr in $u$; $\mathrm{Var}(a_i\mid X)=\sigma_a^2$.</li>
</ol>
<ul>
<li><b>RE vs POLS:</b> both consistent (if RE.1 holds), but RE is <b>more efficient</b> (GLS handles the
serial correlation) and removes some bias ⇒ prefer RE.</li>
<li><b>RE vs FE:</b> FE consistent <b>always</b>; RE efficient but consistent <b>only if</b>
$\mathrm{Cov}(a_i,x)=0$. If violated ⇒ RE biased ⇒ FE.</li>
<li><b>Use RE</b> when key $x$ is <b>time-invariant</b> (FE can't estimate it) and you can defend
$\mathrm{Cov}(a_i,x)=0$ (rare outside an RCT) — else CRE/FE.</li>
<li>FE often <b>less precise</b> than RE ($x_{it}$ &amp; $\bar x_i$ highly correlated; uses only within
variation).</li>
</ul>`
          }
        ]
      },

      /* =============================================== 11. CRE */
      {
        heading: 'Correlated Random Effects (Mundlak)',
        num: '11',
        cards: [
          {
            title: 'The synthesis of FE and RE',
            html: String.raw`
<div class="formula">Model the correlation: $a_i=\alpha+\xi\bar x_i+r_i$ ($r_i\perp x_{it}$)
⇒ $y_{it}=\alpha+\beta x_{it}+\xi\bar x_i+\gamma z_i+(r_i+u_{it})$ — RE with time-averages added</div>
<ul>
<li>Slope $\hat\beta_{CRE}=\hat\beta_{FE}$ (consistent even if $a_i$ correlates with $x$) — the $\bar x_i$
absorb that correlation.</li>
<li><b>But also estimates time-invariant $z_i$</b> (gender, race) which FE drops.</li>
<li>If $\xi=0$ ⇒ $\hat\beta_{RE}$ (no correlation).</li>
<li><b>Use</b> to get FE-consistency AND time-invariant effects, with a robust (cluster-able) Hausman.</li>
</ul>`
          }
        ]
      },

      /* =============================================== 12. TEST TABLE */
      {
        heading: 'Tests — grouped by the model they belong to',
        num: '12',
        cards: [
          {
            title: 'A · Heckman / sample selection (Topic 2)',
            html: String.raw`
<table>
<tr><th>Test (what you read)</th><th>H₀ (null) → H₁ (alt)</th><th>If you REJECT (p&lt;0.05)</th></tr>
<tr><td><b>LR test of independent equations</b><br><span class="rd-hint">the line at the bottom of <b>heckman</b>; dist. $\chi^2(1)$</span></td>
    <td><b>$\rho=0$</b> (no selection bias, OLS fine) → $\rho\ne 0$ (the two equations are linked)</td>
    <td>selection bias is real ⇒ <b>report Heckman</b> (not OLS)</td></tr>
<tr><td><b>Is /mills lambda significant?</b><br><span class="rd-hint">two-step Heckman; a $z$-test on the $\lambda$ coefficient</span></td>
    <td><b>$\beta_\lambda=0$</b> (i.e. $\rho=0$) → $\ne 0$</td>
    <td>same verdict ⇒ keep Heckman; if NOT significant ⇒ revert to OLS</td></tr>
</table>
<div class="tip">Fail to reject ⇒ no detectable selection ⇒ OLS (more efficient). "Fail to reject" ≠ "no
selection" — could be low power.</div>`
          },
          {
            title: 'B · Pooled cross-section & changes over time (Topic 3)',
            html: String.raw`
<table>
<tr><th>Test (what you read)</th><th>H₀ (null) → H₁ (alt)</th><th>If you REJECT (p&lt;0.05)</th></tr>
<tr><td><b>F-test on the year dummies</b><br><span class="rd-hint">jointly test all $\delta_t$; dist. $F$</span></td>
    <td><b>all $\delta_t=0$</b> (no time trend) → some $\delta_t\ne 0$</td>
    <td>a real <b>time trend</b> exists (even if single years look insignificant)</td></tr>
<tr><td><b>Chow test</b><br><span class="rd-hint">= F-test that all time-interactions $=0$; dist. $F_{k,\,n-2k}$</span></td>
    <td><b>coefficients stable</b> across periods → some change</td>
    <td><b>structural break</b> ⇒ don't pool with one set of coefs (split / interact)</td></tr>
</table>`
          },
          {
            title: 'C · Panel — choose the estimator (the decision chain)',
            html: String.raw`
<table>
<tr><th>Test (what you read)</th><th>H₀ (null) → H₁ (alt)</th><th>If you REJECT (p&lt;0.05)</th></tr>
<tr><td><b>F test that all $u_i=0$</b><br><span class="rd-hint">bottom line of <b>xtreg, fe</b>; dist. $F_{N-1,\,NT-N-k}$</span></td>
    <td><b>all $a_i$ equal</b> (no fixed effects, POLS ok) → they differ</td>
    <td><b>FE beats Pooled OLS</b> (each unit needs its own intercept)</td></tr>
<tr><td><b>Breusch–Pagan LM</b><br><span class="rd-hint">"xttest0"; dist. $\chi^2(1)$</span></td>
    <td><b>$\sigma_a^2=0$</b> (no panel-level variance, POLS ok) → $\sigma_a^2>0$</td>
    <td><b>RE beats Pooled OLS</b></td></tr>
<tr><td><b>Hausman</b> ⭐ <i>the decisive one</i><br><span class="rd-hint">"hausman fe re"; dist. $\chi^2(k)$, $k$=# time-varying $x$</span></td>
    <td><b>$\mathrm{Cov}(a_i,x)=0$</b> (RE consistent &amp; efficient) → $\ne 0$ (RE biased)</td>
    <td><b>use Fixed Effects</b> (RE is inconsistent)</td></tr>
<tr><td><b>Mundlak / Wald on the time-means</b><br><span class="rd-hint">CRE: test the $\bar x_i$ coefs; robust alt. to Hausman</span></td>
    <td><b>$\xi=0$</b> (RE is enough) → $\xi\ne 0$</td>
    <td><b>use CRE / FE</b> (and CRE keeps the time-invariant variables)</td></tr>
</table>
<div class="tip"><b>Run them in order:</b> F-test $u_i{=}0$ <i>or</i> BP-LM (effects exist?) → Hausman (FE or RE?)
→ need a time-invariant $z$? use CRE. <b>Usual verdict: FE &gt; RE &gt; POLS.</b></div>`
          },
          {
            title: 'D · Used across ALL panel models — diagnostics (fix the SEs)',
            html: String.raw`
<p>These don't pick a model — they apply to FE and RE alike and only affect <b>inference</b> (the
coefficients are unchanged):</p>
<table>
<tr><th>Test (what you read)</th><th>H₀ (null) → H₁ (alt)</th><th>If you REJECT (p&lt;0.05)</th></tr>
<tr><td><b>Modified Wald</b><br><span class="rd-hint">"xttest3"; groupwise heteroskedasticity; $\chi^2(N)$</span></td>
    <td><b>$\sigma_i^2=\sigma^2$ for all $i$</b> (homoskedastic) → they differ</td>
    <td>heteroskedasticity ⇒ use <b>cluster-robust SEs</b></td></tr>
<tr><td><b>Wooldridge test</b><br><span class="rd-hint">"xtserial"; serial correlation in panels; $F$</span></td>
    <td><b>no first-order autocorrelation</b> (no AR(1)) → AR(1) present</td>
    <td>serial correlation ⇒ <b>cluster-robust SEs</b> (or FD if it's a random walk)</td></tr>
</table>
<div class="note">Golden rule: heteroskedasticity &amp; serial correlation break the <b>standard errors</b>, NOT
the point estimates. The fix is the SEs (cluster-robust), never the coefficients.</div>`
          },
          {
            title: 'The test statistics (formulas)',
            html: String.raw`
<div class="formula">Hausman: $(\hat\beta_{FE}-\hat\beta_{RE})'\big[\widehat{\mathrm{Var}}(\hat\beta_{FE})-\widehat{\mathrm{Var}}(\hat\beta_{RE})\big]^{-1}(\hat\beta_{FE}-\hat\beta_{RE})\sim\chi^2(k)$
  $b{=}$FE (consistent under H₀ &amp; H₁); $B{=}$RE (efficient only under H₀).
Breusch–Pagan LM: $\dfrac{NT}{2(T-1)}\Big[\dfrac{\sum_i(\sum_t \hat v_{it})^2}{\sum_i\sum_t \hat v_{it}^2}-1\Big]^2\sim\chi^2(1)$
F (all $u_i{=}0$): $\dfrac{(R^2_{LSDV}-R^2_{pool})/(N-1)}{(1-R^2_{LSDV})/(NT-N-k)}\sim F_{N-1,\,NT-N-k}$
Chow: $\dfrac{(SSR_{pool}-SSR_1-SSR_2)/k}{(SSR_1+SSR_2)/(n-2k)}\sim F_{k,\,n-2k}$</div>`
          }
        ]
      },

      /* =============================================== 13. DECISION TREE */
      {
        heading: 'Which model? Decision tree',
        num: '13',
        cards: [
          {
            title: 'Diagnose from the outcome & sample',
            html: String.raw`
<table>
<tr><th>Clue in the question</th><th>Model</th><th>Tell-tale on the output</th></tr>
<tr><td>$y$ continuous, piles at a limit, units <b>kept</b></td><td><b>Tobit</b></td><td>a <code>/sigma</code> line + a censored-obs count</td></tr>
<tr><td>out-of-range units <b>deleted</b> (never sampled)</td><td><b>Truncated</b></td><td><code>truncreg</code>; a lower/upper limit</td></tr>
<tr><td>$y$ missing via a <b>separate selection</b> tied to unobservables</td><td><b>Heckman</b></td><td><code>/mills lambda</code>, <code>rho</code>, Selected/Nonselected</td></tr>
<tr><td>different units each round (independent samples over time)</td><td><b>Pooled CS / DiD</b></td><td>year dummies; a $post\times treat$ interaction</td></tr>
<tr><td>same units over time; remove $a_i$</td><td><b>FE / FD</b></td><td><code>corr(u_i,Xb)</code>; "F test all u_i=0"</td></tr>
<tr><td>same units; key $x$ time-invariant / want efficiency</td><td><b>RE / CRE</b></td><td><code>theta</code>; time-invariant vars have coefs</td></tr>
</table>
<div class="formula">Panel chain:  F-test $u_i{=}0$ (or BP-LM) → effects exist
→ Hausman: reject ⇒ FE, else RE → need time-invariant $z$? ⇒ CRE
Usual verdict:  FE &gt; RE &gt; POLS</div>`
          }
        ]
      },

      /* =============================================== 14. DIAGNOSTICS */
      {
        heading: 'Diagnostics & remedies',
        num: '14',
        cards: [
          {
            title: 'What breaks coefficients vs standard errors',
            html: String.raw`
<table>
<tr><th>Problem</th><th>Breaks</th><th>Fix</th></tr>
<tr><td>Heteroskedasticity</td><td>SEs only (coef ok)</td><td>robust / cluster-robust SE</td></tr>
<tr><td>Serial correlation (panel)</td><td>SEs only (coef ok)</td><td>cluster-robust SE; or FD if random-walk</td></tr>
<tr><td>$\mathrm{Cov}(a_i,x)\ne 0$</td><td><b>coefficients</b> (bias)</td><td>FE / FD / CRE</td></tr>
<tr><td>Sample selection ($\rho\ne 0$)</td><td><b>coefficients</b></td><td>Heckman</td></tr>
<tr><td>Censoring / truncation</td><td><b>coefficients</b> (attenuation)</td><td>Tobit / truncreg</td></tr>
<tr><td>Non-random attrition</td><td><b>coefficients</b> (selection)</td><td>model the dropout; FE tolerates attrition tied to $a_i$ only</td></tr>
</table>
<div class="tip">Golden rule: <b>heterosk. &amp; serial corr fix the SEs, not the estimates.</b> Endogeneity /
selection / censoring fix the <b>estimates</b>.</div>`
          }
        ]
      },

      /* =============================================== 15. INTERPRET */
      {
        heading: 'Interpretation templates',
        num: '15',
        cards: [
          {
            title: 'Say the right sentence for the right model',
            html: String.raw`
<table>
<tr><th>Model</th><th>Coef = effect on…</th><th>Template ("+1 $x$ ⇒")</th></tr>
<tr><td>OLS / FE / FD / RE</td><td>observed $y$ (within-unit for FE/FD)</td><td>$\beta$ change in $y$, cp.</td></tr>
<tr><td>Tobit (raw)</td><td><b>latent $y^*$</b></td><td>$\beta$ change in latent $y^*$, cp.</td></tr>
<tr><td>Truncated</td><td>observed $y$ (survivors)</td><td>$\beta$ change in $y$ among observed, cp.</td></tr>
<tr><td>Probit / selection eq.</td><td>a <b>probability</b></td><td>raises $P$(selected), cp.</td></tr>
<tr><td>Year dummy</td><td>intercept shift</td><td>avg $y$ is $\delta$ higher/lower vs base year.</td></tr>
<tr><td>$x\times$year</td><td><b>change</b> in slope</td><td>the effect of $x$ changed by $\delta$ vs base.</td></tr>
<tr><td>DiD interaction</td><td>causal treatment effect</td><td>treatment caused $\delta$ change (parallel trends).</td></tr>
</table>
<div class="tip">Every interpretation: <b>number + units + ceteris paribus + significance</b>. Logs: coef ≈ %
change (×100). Drop any piece ⇒ drop marks.</div>`
          }
        ]
      },

      /* =============================================== 16. TRAPS + BIAS */
      {
        heading: 'Traps & bias direction',
        num: '16',
        cards: [
          {
            title: 'The mistakes the UAS punishes',
            html: String.raw`
<ul>
<li><b>Tobit raw coef ≠ effect on $y$</b> (it's $y^*$).</li>
<li><b>Heckman selection-eq coef</b> = effect on a <b>probability</b>, not the outcome (e.g. children ↑ work,
not wages).</li>
<li>$\rho>0$ ≠ "discrimination" — it's about unobservables.</li>
<li>Dropping a <b>main effect</b> when interactions are present ⇒ biased mix.</li>
<li>"FE found no education effect" ⇒ <b>absorbed</b> (time-invariant), not zero.</li>
<li>"Fail to reject Hausman/LR" ≠ proof H₀ is true (could be low power).</li>
<li>Heterosk./serial corr change <b>SEs</b>, not coefficients.</li>
<li>Pseudo-R² ≠ R² (don't read as "% explained").</li>
</ul>`
          },
          {
            title: 'Direction-of-bias quick cases',
            html: String.raw`
<ul>
<li><b>Censoring (Tobit):</b> OLS attenuated — toward 0.</li>
<li><b>Truncation:</b> OLS slope too flat (lost a tail).</li>
<li><b>Selection ($\rho>0$):</b> OLS overstates the mean; slope direction depends on $\rho$ &amp; $x$–selection
link (not general).</li>
<li><b>Omitted $a_i$ (panel):</b> sign $=$ (effect of $a_i$ on $y$) $\times$ corr$(a_i,x)$; e.g. able workers
sort into high-wage regions ⇒ omitting region biases the education return <b>upward</b>; FE fixes it.</li>
<li><b>POLS vs FE example:</b> marriage premium $0.108\to0.047$ as you go OLS→FE — able men marry more ⇒
OLS overstated it.</li>
</ul>`
          }
        ]
      }
    ]
  };
})();
