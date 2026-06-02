/* ============================================================================
   CSPD · Week 12 — Panel Data: Pooled OLS, Fixed Effects, First Differencing
   Final-exam Topic 4: panel data models FE and FD.
   Sources: "Panel Data Methods" deck, Meet 11-12 PoolOLS FE deck, Wooldridge
   ch. 13-14, Lab do-files. Registers on window.CSPD_WEEKS.w12.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w12 = {
    id: 'w12',
    label: 'Week 12',
    title: 'Panel Data — Pooled OLS, Fixed Effects & First Differencing',
    subtitle: 'Unobserved heterogeneity aᵢ, within transformation, LSDV, FD, and FE vs FD',

    notes: [
      {
        heading: 'Panel data and the unobserved effect aᵢ',
        num: '1',
        cards: [
          {
            title: 'The same units, followed over time',
            html: String.raw`
<p><span class="key">Panel (longitudinal) data</span> follows the <b>same</b> units $i$ over several
periods $t$ — a combination of cross-section and time series (e.g. IFLS, <code>wagepan</code>). The
unobserved-effects model:</p>
<div class="formula">$$ y_{it}=\beta_1 x_{it}+a_i+u_{it} $$</div>
<ul>
  <li>$x_{it}$ — observed regressor (effect $\beta_1$ we want).</li>
  <li>$a_i$ — <span class="key">time-invariant unobserved heterogeneity</span> (the "fixed effect"):
      everything permanent about unit $i$ we can't measure — ability, culture, geography, institutions.</li>
  <li>$u_{it}$ — idiosyncratic shock, varies over $i$ and $t$.</li>
</ul>
<p><b>Advantages of panels:</b> control for unobserved $a_i$; more variation &amp; degrees of freedom
(more efficient); capture dynamics. <b>Balanced</b> = every unit has the same number of periods
(<code>xtset id year; xtdescribe</code>); <b>unbalanced</b> = some periods missing for some units.</p>`
          },
          {
            title: 'The core problem: OVB when Corr(x, aᵢ) ≠ 0',
            html: String.raw`
<p>In a single cross-section $a_i$ is an <b>omitted variable</b>. If it correlates with $x_{it}$, the
OLS estimate of $\beta_1$ is <b>biased</b> — and we can't control for $a_i$ because we don't know what
it contains. The crime puzzle: a cross-section of 46 cities says higher unemployment ⇒ <i>less</i>
crime (wrong sign), because high- and low-unemployment cities differ in hundreds of unmeasured ways.</p>
<p><b>The panel solution:</b> $a_i$ is the <b>same</b> for unit $i$ in every period, so comparing a unit
<b>to itself over time</b> cancels $a_i$ — without ever measuring it. The only requirement: $a_i$ is
<b>fixed</b> over the window. (If the confounder changes over time, panel methods won't save you.)</p>
<div class="tip">📝 Cross-section asks "do units with higher x have higher y?" (between-unit). FE asks
"when the SAME unit's x changes, does its y change?" (within-unit). They can give opposite answers —
Simpson's paradox.</div>`
          }
        ]
      },
      {
        heading: 'Pooled OLS — the naive baseline',
        num: '2',
        cards: [
          {
            title: 'Stack everything and ignore the panel structure',
            html: String.raw`
<p><span class="key">Pooled OLS</span> (<code>reg y x</code>) treats all $N\times T$ rows as one big
cross-section. Assumptions: linearity, no perfect collinearity, <b>zero conditional mean</b>
$E(u_{it}\mid x)=0$ for all $i,t$, homoskedasticity, no serial correlation.</p>
<p><b>Limitations:</b></p>
<ul>
  <li><b>Ignores $a_i$:</b> if $a_i$ correlates with $x_{it}$, POLS is <b>biased &amp; inconsistent</b>
      (the OVB above) ⇒ use Fixed Effects.</li>
  <li><b>Wrong standard errors:</b> errors of the same unit are correlated over time, so default SEs are
      understated ⇒ use <b>cluster-robust</b> SEs <code>vce(cluster id)</code>.</li>
  <li>Can't model dynamics (no lagged dependent variable).</li>
</ul>
<p>POLS is useful only as a baseline, or when you literally cannot follow units (e.g. pooling Susenas
across years at the individual level — different people each round, so FE/RE impossible; then POLS
buys you sample size).</p>`
          }
        ]
      },
      {
        heading: 'Fixed Effects — three equivalent estimators',
        num: '3',
        cards: [
          {
            title: '(a) Within transformation (demeaning)',
            html: String.raw`
<p>Subtract each unit's <b>own time-average</b> from every variable. Anything constant within the unit
(including $a_i$) is wiped out:</p>
<div class="formula">$$ (y_{it}-\bar y_i)=\beta_1(x_{it}-\bar x_i)+(u_{it}-\bar u_i) $$</div>
<p>$\bar a_i - a_i = 0$, so $a_i$ vanishes. OLS on the demeaned data = the <b>within estimator</b>.
It uses only <b>within-unit</b> variation — how each year deviates from that unit's norm.</p>
<div class="formula">Stata:  xtset id year ; xtreg y x, fe</div>
<div class="note">💡 Cost: any <b>time-invariant</b> regressor (gender, race, region if fixed) has zero
within-variation and is <b>dropped</b> — FE literally cannot see it. That doesn't mean its effect is
zero; it means FE can't estimate it.</div>`
          },
          {
            title: '(b) LSDV — a dummy for every unit',
            html: String.raw`
<p>Equivalent: give each unit its <b>own intercept</b> via a dummy (drop one to avoid the dummy trap):</p>
<div class="formula">Stata:  reg y x i.id     (Least Squares Dummy Variables)</div>
<p>LSDV produces the <b>identical slope</b> $\hat\beta_1$ as the within estimator — exactly. It just
reports each unit's intercept explicitly, which costs many degrees of freedom (N−1 dummies). Great for
small N; impractical for thousands of units.</p>`
          },
          {
            title: '(c) First Differencing (FD)',
            html: String.raw`
<p>Subtract the <b>previous period</b> from the current one. $a_i$ (constant) differences out:</p>
<div class="formula">$$ \Delta y_{it}=\beta_1\,\Delta x_{it}+\Delta u_{it},\qquad \Delta y_{it}=y_{it}-y_{i,t-1} $$</div>
<p>Run OLS on the changes — like an ordinary cross-section of differences. The intercept disappears
(re-introduce it / add period dummies for ≥3 periods). With $T$ periods you get $T-1$ differenced obs
per unit, so FD <b>loses the first period</b> (e.g. T=2 → N differenced rows).</p>
<div class="formula">Stata:  reg D.y D.x        (or with time dummies for T≥3)</div>
<p><b>FD assumptions for unbiased &amp; consistent (BLUE):</b> (1) the model holds with time-invariant
$a_i$; (2) random sampling; (3) each $x$ varies over time and no perfect collinearity; (4)
<b>strict exogeneity</b> $E[\Delta u\mid \Delta x]=0$; (5) homoskedastic differenced errors;
(6) no autocorrelation in $\Delta u$. Violations of (5)/(6) ⇒ robust / cluster-robust SEs.</p>`
          }
        ]
      },
      {
        heading: 'FE vs FD — when to use which',
        num: '4',
        cards: [
          {
            title: 'They agree at T=2; diverge at T≥3',
            html: String.raw`
<table>
  <tr><th>Case</th><th>Relationship</th></tr>
  <tr><td><b>T = 2</b></td><td>FE and FD give <b>algebraically identical</b> coefficients &amp; tests. (For FE to match FD, include a second-period time dummy.) FD is simpler &amp; makes robust SEs easy.</td></tr>
  <tr><td><b>T ≥ 3</b></td><td>FE ≠ FD numerically, but <b>both unbiased &amp; consistent</b>. Choose on <b>efficiency</b>, which depends on the error structure.</td></tr>
</table>
<p>Serial correlation rule of thumb:</p>
<ul>
  <li>If $u_{it}$ is <b>serially uncorrelated</b> ⇒ <b>FE more efficient</b>.</li>
  <li>If $u_{it}$ follows a <b>random walk</b> (strong positive serial correlation) ⇒ <b>FD more
      efficient</b> (differencing removes it).</li>
  <li>When T is large relative to N, FD is often more robust (closer to stationary). In practice: report
      FE, show FD as a robustness check; if they differ a lot, suspect serial correlation.</li>
</ul>`
          },
          {
            title: 'What FE can and cannot do (causal inference)',
            html: String.raw`
<p>FE removes <b>all time-invariant</b> confounders, measured or not — its big strength for causal
identification. But:</p>
<table>
  <tr><th>FE controls for (time-invariant)</th><th>FE does NOT control for (time-varying)</th></tr>
  <tr><td>ability/IQ, race, family background, birth cohort, fixed geography</td><td>motivation this year, health shocks, local labour conditions, manager quality</td></tr>
</table>
<ul>
  <li>FE does <b>not</b> fix <b>time-varying</b> omitted variables correlated with $x_{it}$.</li>
  <li>FE does <b>not</b> fix <b>reverse causality / simultaneity</b>.</li>
</ul>
<div class="note">💡 Bringing back a dropped time-invariant variable: you can't include <code>educ</code>
alone (collinear with the fixed effect), but you CAN interact it with year dummies —
<code>educ×d1987</code> varies within person, so FE estimates the <b>change</b> in the return to
education (not the level). Likewise experience and a linear time trend are perfectly collinear
(everyone ages 1 yr/yr), so you must drop one.</div>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'The three FE estimators (identical slope)',
            html: String.raw`
<div class="formula">Within:  $(y_{it}-\bar y_i)=\beta_1(x_{it}-\bar x_i)+(u_{it}-\bar u_i)$   -> xtreg y x, fe
LSDV:    $y_{it}=\alpha_i + \beta_1 x_{it}+u_{it}$ (dummy per unit)     -> reg y x i.id
FD:      $\Delta y_{it}=\beta_1\Delta x_{it}+\Delta u_{it}$              -> reg D.y D.x</div>
<p>All three eliminate $a_i$ and (within / LSDV) give the same $\hat\beta_1$. FD differs from FE for T≥3.</p>`
          },
          {
            title: 'Strict exogeneity — the crucial FE/FD assumption',
            html: String.raw`
<div class="formula">$E[u_{it}\mid x_{i1},x_{i2},\dots,x_{iT},a_i]=0$  (strict exogeneity)</div>
<p>After removing $a_i$, the idiosyncratic error is uncorrelated with the regressors in <b>every</b>
period (past, present, future). This rules out feedback (e.g. $y$ affecting future $x$). It is what
makes the within / FD estimators unbiased and consistent (T fixed, N→∞).</p>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Reading panel (FE/FD) output',
        num: 'R',
        cards: [
          {
            title: 'Declare the panel, then POLS as baseline',
            html: String.raw`
<span class="rd-tag">Case · cross-country growth (Pooled OLS.do)</span>
<div class="stata"><span class="cmd">encode country, gen(id)</span>
<span class="cmd">xtset id year</span>
<span class="cmd">xtdescribe</span>              <span class="dim">* 266 countries, 1960-2022, strongly balanced</span>
<span class="cmd">reg gdp_growth remit_gdp unemp</span>   <span class="dim">* POLS baseline</span>
   remit_gdp  0.019   unemp  -0.091</div>
<ul class="annot">
  <li>POLS: +1pp remittances ⇒ +0.019pp growth; +1pp unemployment ⇒ −0.091pp growth, cp.</li>
  <li>But POLS ignores unobserved country heterogeneity ⇒ likely biased; compare to FE next.</li>
</ul>`
          },
          {
            title: 'Fixed effects — the within estimator',
            html: String.raw`
<span class="rd-tag">xtreg, fe</span>
<div class="stata"><span class="cmd">xtreg gdp_growth remit_gdp unemp, fe</span>
   remit_gdp  <span class="hl">0.037</span>   unemp  <span class="neg">-0.175</span>
   F test that all u_i=0:  F(...) Prob&gt;F = <span class="hl">0.000</span></div>
<ul class="annot">
  <li><b>remit_gdp = 0.037:</b> <u>after controlling for time-invariant country characteristics</u>,
      +1pp remittances ⇒ +0.037pp growth, cp. (Note it moved vs POLS — heterogeneity mattered.)</li>
  <li><b>F test all u_i=0, p=0.000:</b> the fixed effects are jointly significant ⇒ FE beats POLS; each
      country needs its own intercept.</li>
  <li>Interpretation always uses <b>within</b> variation: "when a country's remittances rise…".</li>
</ul>`
          },
          {
            title: 'FE = LSDV = FD (the T=2 identity) and the obs count',
            html: String.raw`
<span class="rd-tag">three methods, one slope</span>
<div class="stata"><span class="cmd">xtreg lrent y90 lpop lavginc pctstu, fe</span>   <span class="dim">* within: N=128</span>
<span class="cmd">reg lrent y90 lpop lavginc pctstu i.city</span>   <span class="dim">* LSDV: same slopes, N=128</span>
<span class="cmd">reg D.lrent D.lpop D.lavginc D.pctstu</span>      <span class="dim">* FD: N=64 (loses first period)</span></div>
<ul class="annot">
  <li>Demeaning, LSDV, and FD give <b>identical coefficients</b> (e.g. lavginc 0.310, pctstu 0.0112) —
      all eliminate the same unobserved fixed effect.</li>
  <li><b>Obs differ:</b> within/LSDV keep 128; FD keeps 64 = N·(T−1) on a 2-period panel.</li>
  <li>Crime data (46 cities, 1982 &amp; 1987): all three give "+1pp unemployment ⇒ +2.22 crime/1000" —
      and the sign FLIPS vs the cross-section, because the panel removed the invisible city confounders.</li>
</ul>`
          },
          {
            title: 'Bringing education back via interactions',
            html: String.raw`
<span class="rd-tag">time-invariant var inside FE</span>
<div class="stata"><span class="cmd">xtreg lwage married union c.educ#i.year, fe cluster(id)</span>
   educ#1987   <span class="hl">0.030</span></div>
<ul class="annot">
  <li><code>educ</code> alone is dropped (constant within person). <code>educ×year</code> varies within
      person, so FE can estimate it.</li>
  <li><b>0.030:</b> in 1987 each year of education earned <b>3.0pp more</b> than in the 1980 base —
      it is the <b>change</b> in the return, NOT the 1987 return level (which FE cannot recover).</li>
</ul>`
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'Write the within (demeaning) transformation and explain in one line why it eliminates aᵢ but also drops a person’s gender.',
        answer: [
          'Demeaning: (y_it − ȳ_i) = β1(x_it − x̄_i) + (u_it − ū_i).',
          'aᵢ is constant within i, so ā_i − a_i = 0 — it is differenced away without being measured.',
          'Gender is also constant within i, so (gender − gender) = 0: it has zero within-unit variation and is collinear with the fixed effect ⇒ FE drops it (cannot estimate its effect).'
        ],
        tip: 'FE removes EVERYTHING time-invariant — the confounder aᵢ and any constant regressor.'
      },
      {
        type: 'concept',
        q: 'For T=2, how do FE and FD compare? For T≥3, how do you choose between them?',
        answer: [
          'T=2: FE and FD are algebraically identical (same coefficient and test statistics). FD is simpler and makes robust SEs trivial; for FE to match, include a second-period time dummy.',
          'T≥3: they differ numerically but both are unbiased and consistent; choose by efficiency.',
          'If the idiosyncratic error is serially uncorrelated → FE is more efficient. If it follows a random walk (strong positive serial correlation) → FD is more efficient because differencing removes it.',
          'Practical rule: report FE, show FD as a robustness check; large divergence hints at serial correlation.'
        ]
      },
      {
        type: 'scenario',
        q: 'A pooled OLS of crime on unemployment across 46 cities gives a negative coefficient; the same data as a panel (1982, 1987) gives a positive coefficient. Explain the sign flip.',
        answer: [
          'Cross-section/POLS compares DIFFERENT cities, which differ in unmeasured ways (aᵢ: culture, poverty, geography) correlated with both crime and unemployment → omitted-variable bias, wrong sign.',
          'The panel/FE compares each city TO ITSELF over time, differencing out aᵢ. It asks: when this city’s unemployment rose, did its crime rise? Answer: yes (+2.22 per 1,000).',
          'This is Simpson’s paradox: between-unit variation was confounded; within-unit variation reveals the true relationship.'
        ]
      },
      {
        type: 'concept',
        q: 'A researcher runs FE on wage data, finds no coefficient on education, and concludes "education has no effect on wages." What is the error, and how could she still learn something about education?',
        answer: [
          'Error: education is constant within each person across the panel, so it has zero within-variation and is absorbed by the fixed effect — it is dropped, not shown to be zero. "Absorbed, not absent."',
          'FE simply cannot estimate the level effect of a time-invariant variable.',
          'She can interact education with year dummies (educ×year): this varies within person and identifies how the RETURN to education changed over time, even though the base-year level stays inside aᵢ.'
        ],
        tip: 'No FE coefficient on a constant variable ≠ no effect; it is unidentified within FE.'
      },
      {
        type: 'concept',
        q: 'Name two things FE does NOT fix, and give the strict-exogeneity assumption that FE/FD rely on.',
        answer: [
          'FE does not remove TIME-VARYING omitted variables correlated with x (e.g. this year’s motivation, local shocks), and does not fix reverse causality / simultaneity.',
          'Strict exogeneity: E[u_it | x_i1,…,x_iT, a_i] = 0 — after removing a_i, the idiosyncratic error is uncorrelated with the regressors in every period (no feedback from y to future x).',
          'Violations need richer designs: IV, DiD, or dynamic panel methods.'
        ]
      }
    ]
  };
})();
