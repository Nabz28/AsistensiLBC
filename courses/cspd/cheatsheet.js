/* ============================================================================
   CSPD · One-Page Cheatsheet — everything to memorise for the final.
   Dense, formula-first reference. Registers on window.CSPD_CHEAT and is
   assembled into COURSE.cheatsheet (a printable course-level tab).
   ============================================================================ */
(function () {
  'use strict';

  window.CSPD_CHEAT = {
    label: { en: 'Cheatsheet', id: 'Cheatsheet' },
    title: { en: 'CSPD Cheatsheet — one page to memorise',
             id: 'Cheatsheet CSPD — satu halaman untuk dihafal' },
    blurb: String.raw`Everything that wins marks: model boxes, assumptions, the test→conclusion map, interpretation
templates, and the traps. Hit “Print / save as PDF” → it lays out two columns on one sheet for your allowed
A4. (Screen view is single column.)`,
    printLabel: { en: 'Print / save as PDF', id: 'Cetak / simpan PDF' },

    sections: [
      /* ----------------------------------------------------- limited dep var */
      {
        heading: '1 · Tobit & Truncated (Topic 1)',
        num: '1',
        cards: [
          {
            title: 'Tobit (censored) — boundary units KEPT',
            html: String.raw`
<div class="formula">$y_i^*=x_i'\beta+\varepsilon_i,\ \varepsilon\sim N(0,\sigma^2)$;  $y_i=\max(0,y_i^*)$
$P(y_i=0)=\Phi(-x'\beta/\sigma)$.  Estimate by MLE.</div>
<ul>
<li><b>Raw coef = effect on latent $y^*$</b>, not observed $y$.</li>
<li>OLS on censored data → <b>attenuation</b> (slope toward 0); doesn't vanish as N→∞.</li>
<li>vs Probit: Tobit identifies $\sigma$ (sees magnitudes); Probit normalises $\sigma=1$ (sees only 0/1).</li>
<li>3 MEs ($z{=}x'\beta/\sigma$): latent $=\beta_j$; uncond $E[y]=\beta_j\Phi(z)$; cond $E[y{\mid}y{>}0]=\beta_j[1{-}z\lambda{-}\lambda^2]$. Few censored ⇒ all ≈ $\beta_j$.</li>
<li>Tobit MLE <b>inconsistent</b> if errors non-normal / heteroskedastic (OLS only loses efficiency).</li>
</ul>
<div class="formula">tobit y x, ll(#) ul(#)
margins, dydx(*) predict(ystar(LL,UL))  // E[y]
margins, dydx(*) predict(e(LL,UL))      // E[y|uncens]</div>`
          },
          {
            title: 'Truncated — boundary units DELETED',
            html: String.raw`
<div class="formula">$E[y\mid y>c]=x'\beta+\sigma\,\dfrac{\phi(z)}{1-\Phi(z)}$  (the omitted term biases OLS)
truncreg y x, ll(#) ul(#)   // coef = effect on observed y</div>
<table>
<tr><th></th><th>Tobit</th><th>Truncated</th></tr>
<tr><td>Boundary obs</td><td>kept (capped)</td><td>deleted</td></tr>
<tr><td>β is effect on</td><td>latent $y^*$</td><td>observed $y$ (subpop.)</td></tr>
<tr><td>Estimand</td><td>whole population</td><td>observed subpopulation</td></tr>
</table>
<div class="note">Test: "do boundary cases appear in my data?" Yes→Tobit; No→truncreg.</div>`
          }
        ]
      },

      /* --------------------------------------------------------- selection */
      {
        heading: '2 · Heckman / Sample Selection (Topic 2)',
        num: '2',
        cards: [
          {
            title: 'Two equations + the inverse Mills ratio',
            html: String.raw`
<div class="formula">Selection: $s^*=w'\gamma+u,\ s=\mathbf 1[s^*>0]$ (probit)
Outcome:   $y=x'\beta+\varepsilon$ (seen if $s=1$), $\mathrm{corr}(u,\varepsilon)=\rho$
$E[y\mid x,s{=}1]=x'\beta+\rho\sigma_\varepsilon\,\lambda(w'\gamma),\ \ \lambda(z)=\phi(z)/\Phi(z)$</div>
<ul>
<li>OLS on selected sample biased because $E[\varepsilon\mid s{=}1]=\rho\sigma_\varepsilon\lambda\ne 0$. Add $\hat\lambda$ ⇒ consistent.</li>
<li><b>Exclusion restriction:</b> ≥1 var in selection, excluded from outcome (e.g. children/marriage on wages). Argued, not tested.</li>
<li><b>ρ&gt;0:</b> selected have higher unobserved $y$ ⇒ naive OLS overstates mean.</li>
<li>Test $H_0:\rho=0$ via LR / λ-significance. Reject ⇒ Heckman; else ⇒ OLS. athrho ⇒ $\rho=\tanh$.</li>
</ul>
<div class="formula">heckman y x, select(s = x z) [twostep]</div>`
          }
        ]
      },

      /* ---------------------------------------------------- pooled / DiD */
      {
        heading: '3 · Pooled Cross-Section & DiD (Topic 3)',
        num: '3',
        cards: [
          {
            title: 'Time dummies, interactions, DiD',
            html: String.raw`
<ul>
<li><b>Pooled CS:</b> different units each year (≠ panel; can't remove $a_i$).</li>
<li><b>Year dummy $\delta_t$:</b> shift in the <b>intercept</b> (economy-wide level change).</li>
<li><b>Interaction $x{\times}d$:</b> the <b>change</b> in a slope vs base year — NOT the effect. Effect in yr $t=\beta+\delta_t$. <u>Keep the main effect</u> or it's biased.</li>
<li><b>Chow test:</b> F-test all interactions $=0$; reject ⇒ structural break.</li>
</ul>
<div class="formula">DiD:  $y=\beta_0+\delta_0 post+\beta_1 treat+\delta_1(post{\cdot}treat)+u$
$\hat\delta_1=(\bar y_{T,post}-\bar y_{T,pre})-(\bar y_{C,post}-\bar y_{C,pre})$</div>
<div class="note">DiD effect = the interaction only. Assumption: <b>parallel trends</b> (equal trends, not equal levels). DiD = FD on two groups.</div>`
          }
        ]
      },

      /* -------------------------------------------------------------- panel */
      {
        heading: '4 · Panel: POLS / FE / FD (Topic 4)',
        num: '4',
        cards: [
          {
            title: 'Model & the three FE estimators',
            html: String.raw`
<div class="formula">$y_{it}=\beta_1 x_{it}+a_i+u_{it}$   ($a_i$ = time-invariant unobserved heterogeneity)
Within:  $(y_{it}-\bar y_i)=\beta_1(x_{it}-\bar x_i)+\dots$   xtreg y x, fe
LSDV:    dummy per unit                              reg y x i.id
FD:      $\Delta y=\beta_1\Delta x+\Delta u$         reg D.y D.x</div>
<ul>
<li>Within = LSDV = <b>identical slope</b>. FD loses the 1st period (N·(T−1) obs).</li>
<li>POLS biased if $\mathrm{Cov}(a_i,x)\ne 0$; SEs wrong ⇒ <code>vce(cluster id)</code>.</li>
<li>FE drops <b>time-invariant</b> regressors (gender) — "absorbed, not absent". Recover via $x{\times}$year.</li>
<li>Key assumption: <b>strict exogeneity</b> $E[u_{it}\mid x_{i1..iT},a_i]=0$.</li>
<li>FE does NOT fix time-varying OVB or reverse causality.</li>
</ul>`
          },
          {
            title: 'FE vs FD',
            html: String.raw`
<table>
<tr><th>T</th><th>FE vs FD</th></tr>
<tr><td>T=2</td><td><b>identical</b> (algebraically). FD simpler; FE needs a period dummy to match.</td></tr>
<tr><td>T≥3</td><td>differ; both unbiased. $u$ serially uncorrelated ⇒ FE efficient; random-walk $u$ ⇒ FD better.</td></tr>
</table>
<div class="tip">Report FE, show FD as robustness. Big divergence ⇒ suspect serial correlation.</div>`
          }
        ]
      },

      /* -------------------------------------------------------- RE / CRE */
      {
        heading: '5 · RE, Hausman & CRE (Topic 5, bonus)',
        num: '5',
        cards: [
          {
            title: 'Random Effects (GLS / quasi-demeaning)',
            html: String.raw`
<div class="formula">$(y_{it}-\theta\bar y_i)=\dots+\beta_1(x_{it}-\theta\bar x_i)+\dots$
$\theta=1-\sqrt{\sigma_u^2/(\sigma_u^2+T\sigma_a^2)}$  (0≤θ≤1)
$\mathrm{Corr}(v_{it},v_{is})=\sigma_a^2/(\sigma_a^2+\sigma_u^2)$  (intraclass corr)</div>
<ul>
<li>θ=0 ⇒ POLS; θ=1 ⇒ FE; between ⇒ partial demeaning. RE <b>keeps time-invariant</b> regressors.</li>
<li>RE assumption: $\mathrm{Cov}(a_i,x_{itj})=0$ ∀t,j (strong). If violated ⇒ RE biased ⇒ FE.</li>
<li>RE removes only $(1{-}\theta)$ of $a_i$ from error ⇒ less bias than POLS, more efficient (GLS).</li>
<li>FE often <b>less precise</b> than RE ($x_{it}$ &amp; $\bar x_i$ highly correlated).</li>
</ul>`
          },
          {
            title: 'CRE / Mundlak',
            html: String.raw`
<div class="formula">$a_i=\alpha+\xi\bar x_i+r_i$  ⇒  $y_{it}=\alpha+\beta x_{it}+\xi\bar x_i+\delta z_i+r_i+u_{it}$
$\hat\beta_{CRE}=\hat\beta_{FE}$ (slope on $x_{it}$); but can also estimate time-invariant $z_i$.</div>
<ul>
<li>Recipe: <code>egen mean_x=mean(x),by(id)</code> → <code>xtreg y x mean_x z, re</code> → <code>test mean_x</code>.</li>
<li>$H_0:\xi=0$ ⇒ RE sufficient; reject ⇒ need CRE/FE. = robust Hausman; shows which var drives correlation.</li>
</ul>`
          }
        ]
      },

      /* --------------------------------------------------- decision + tests */
      {
        heading: '6 · Decision tree & test → conclusion',
        num: '6',
        cards: [
          {
            title: 'Which model?',
            html: String.raw`
<table>
<tr><th>Data clue</th><th>Model</th></tr>
<tr><td>$y$ piles at a limit, units kept</td><td>Tobit</td></tr>
<tr><td>out-of-range units deleted</td><td>Truncated</td></tr>
<tr><td>$y$ missing via a separate selection</td><td>Heckman</td></tr>
<tr><td>different units each round</td><td>Pooled CS / DiD</td></tr>
<tr><td>same units; remove $a_i$</td><td>FE / FD</td></tr>
<tr><td>key var time-invariant / efficiency</td><td>RE / CRE</td></tr>
</table>
<div class="formula">Panel chain:  xttest0 → RE&gt;POLS ;  hausman → FE&gt;RE ;  CRE test → FE/CRE
Usually:  FE &gt; RE &gt; POLS</div>`
          },
          {
            title: 'Tests',
            html: String.raw`
<table>
<tr><th>Test</th><th>$H_0$</th><th>Reject ⇒</th></tr>
<tr><td>LR / λ (Heckman)</td><td>$\rho=0$</td><td>selection ⇒ Heckman</td></tr>
<tr><td>F on year dummies</td><td>all $\delta_t=0$</td><td>time trend</td></tr>
<tr><td>Chow</td><td>coefs stable</td><td>structural break</td></tr>
<tr><td>F all $u_i=0$</td><td>no FE</td><td>FE&gt;POLS</td></tr>
<tr><td>xttest0 (BP-LM)</td><td>$\sigma_a^2=0$</td><td>RE&gt;POLS</td></tr>
<tr><td>hausman</td><td>$\mathrm{Cov}(a,x)=0$</td><td>use FE (p&lt;.05)</td></tr>
<tr><td>xttest3</td><td>homoskedastic</td><td>cluster-robust SE</td></tr>
<tr><td>xtserial</td><td>no AR(1)</td><td>cluster-robust SE / FD</td></tr>
</table>`
          }
        ]
      },

      /* ----------------------------------------------- interpret & traps */
      {
        heading: '7 · Interpretation templates & traps',
        num: '7',
        cards: [
          {
            title: 'Say the right sentence',
            html: String.raw`
<table>
<tr><th>Model</th><th>"+1 x ⇒ …"</th></tr>
<tr><td>OLS/FE/FD/RE</td><td>β change in $y$ (within-unit for FE/FD), cp.</td></tr>
<tr><td>Tobit (raw)</td><td>β change in <b>latent</b> $y^*$, cp.</td></tr>
<tr><td>Selection eq.</td><td>raises the <b>probability</b> of (working), cp.</td></tr>
<tr><td>Year dummy</td><td>intercept differs by δ vs base year.</td></tr>
<tr><td>$x{\times}$year</td><td>the effect <b>changed</b> by δ vs base year.</td></tr>
<tr><td>DiD interaction</td><td>the causal treatment effect.</td></tr>
</table>
<div class="note">Every interpretation: <b>number+units + ceteris paribus + significance</b>.</div>`
          },
          {
            title: 'Traps the UAS punishes',
            html: String.raw`
<ul>
<li>Tobit raw coef ≠ effect on $y$ (it's $y^*$).</li>
<li>Heckman: significant <code>children</code> in selection ≠ "kids raise wages" (it's participation).</li>
<li>ρ&gt;0 ≠ "discrimination"; it's about unobservables.</li>
<li>Dropping the main effect with interactions present ⇒ biased mix.</li>
<li>"FE found no educ effect" ⇒ absorbed (time-invariant), not zero.</li>
<li>"Fail to reject Hausman" ⇒ could be low power, not proof.</li>
<li>Heterosk./autocorr. change <b>SEs only</b>, not coefficients ⇒ cluster-robust SE.</li>
<li>OVB sign = (effect of omitted on $y$) × (corr with included $x$).</li>
</ul>`
          },
          {
            title: 'Stata command map',
            html: String.raw`
<div class="formula">tobit y x, ll(#) ul(#)        truncreg y x, ll(#)
heckman y x, select(s=x z) [twostep]   rho=tanh(athrho)
reg y i.year x                reg y post##treat        (DiD)
xtset id year ; xtdescribe
reg y x, vce(cluster id)      (POLS)
xtreg y x, fe  |  reg y x i.id (LSDV)  |  reg D.y D.x (FD)
xtreg y x, re [theta]
xttest0 | hausman fe re | xttest3 | xtserial y x
egen mx=mean(x),by(id) ; xtreg y x mx z, re ; test mx   (CRE)</div>`
          }
        ]
      }
    ]
  };
})();
