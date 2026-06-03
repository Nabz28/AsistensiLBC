/* ============================================================================
   CSPD · Week 12 — Panel Data: Pooled OLS, Fixed Effects, First Differencing
   Final-exam Topic 4. Rewritten flowing/plain; Read Data cases use the ACTUAL
   2024 exam panel table (Table 3.1) + growth/rent labs. Sources: Panel Data
   Methods deck, Meet 11-12 deck, past final Q3, Wooldridge ch. 13-14.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w12 = {
    id: 'w12',
    label: 'Week 12',
    title: 'Panel Data — Fixed Effects & First Differencing',
    subtitle: 'The unobserved effect aᵢ, the within transformation, LSDV, FD, and when FE = FD',

    notes: [
      {
        heading: 'The same units, watched over time',
        num: '1',
        cards: [
          {
            title: 'Panel data and the hidden term aᵢ',
            html: String.raw`
<p>Now we get the film, not the photo album. <span class="key">Panel data</span> follows the <b>same</b>
units (people, firms, countries) across several periods. That repetition is powerful, because it lets us
deal with the thing that quietly ruins cross-sectional studies: stuff we can't measure. Write the model as:</p>
<div class="formula">$$ y_{it}=\beta_1 x_{it}+a_i+u_{it} $$</div>
<ul>
  <li>$x_{it}$ — the thing we measured, whose effect $\beta_1$ we want.</li>
  <li>$a_i$ — the <span class="key">unobserved effect</span> (also "fixed effect" / "unobserved
      heterogeneity"): everything <b>permanent</b> about unit $i$ that we can't measure — a person's innate
      ability, a country's culture or geography. It has no $t$ subscript because it <b>doesn't change over
      time</b>.</li>
  <li>$u_{it}$ — the ordinary idiosyncratic shock that varies each period.</li>
</ul>`
          },
          {
            title: 'Why aᵢ is poison in a cross-section — and the panel cure',
            html: String.raw`
<p>In a single year, $a_i$ is just an <b>omitted variable</b>. If it's correlated with $x_{it}$, OLS blames
$x$ for what's really $a_i$, and the estimate is biased. The famous example: across 46 US cities, higher
unemployment appears to come with <b>less</b> crime (wrong sign!) — because high- and low-unemployment cities
differ in a hundred unmeasured ways ($a_i$) that also drive crime. You can't control for $a_i$ because you
don't know what's in it.</p>
<p>Here's the magic of panels. Since $a_i$ is the <b>same</b> for a unit in every period, if you compare a
unit <b>to itself over time</b>, $a_i$ <b>cancels out</b> — and you never had to measure it. The only thing
you need is for $a_i$ to be <b>constant</b> over your window. (If the confounder changes over time, panels
won't save you.)</p>
<div class="tip">📝 The mindset shift: a cross-section asks "do units with higher $x$ have higher $y$?"
(comparing <b>different</b> units). A fixed-effects panel asks "when the <b>same</b> unit's $x$ changes, does
its $y$ change?" (comparing each unit <b>to itself</b>). These can even give <b>opposite</b> answers — that's
Simpson's paradox, and the panel is the honest one.</div>`
          }
        ]
      },
      {
        heading: 'Pooled OLS — the naive baseline',
        num: '2',
        cards: [
          {
            title: 'Just stacking the data and ignoring the panel',
            html: String.raw`
<p>The laziest thing you can do is <span class="key">Pooled OLS</span>: dump all $N\times T$ rows together
and run one big regression, as if there were no panel structure. It's useful as a baseline, but it has two
problems:</p>
<ul>
  <li><b>Bias:</b> if $a_i$ is correlated with $x_{it}$ (the usual case), the omitted $a_i$ makes Pooled OLS
      <b>biased and inconsistent</b> — same OVB as a cross-section. <i>The fix is Fixed Effects.</i></li>
  <li><b>Wrong standard errors:</b> a unit's errors are correlated across its own years (because $a_i$ sits
      inside the error every period), so the default SEs are too small. <i>Fix: cluster-robust SEs,</i>
      <code>vce(cluster id)</code>.</li>
</ul>
<p>Technically, Pooled OLS only needs $a_i$ uncorrelated with $x$ to be <b>consistent</b>; homoskedasticity
and no-serial-correlation aren't needed for consistency, only for the default SEs to be valid (and they're
not). Use Pooled OLS mainly when you genuinely can't follow units — e.g. pooling Susenas across years at the
household level (different households each round), where it simply buys you sample size.</p>`
          }
        ]
      },
      {
        heading: 'Fixed Effects — three roads to the same answer',
        num: '3',
        cards: [
          {
            title: '(a) The within transformation — subtract each unit\'s own average',
            html: String.raw`
<p>The cleanest way to kill $a_i$: for each unit, subtract that unit's <b>own time-average</b> from every
variable. Anything constant within the unit (including $a_i$) becomes zero and disappears:</p>
<div class="formula">$$ (y_{it}-\bar y_i)=\beta_1(x_{it}-\bar x_i)+(u_{it}-\bar u_i) $$</div>
<p>Because $\bar a_i - a_i = 0$, the unobserved effect is gone. Run OLS on this "demeaned" data and you have
the <b>within estimator</b> — it uses only <b>within-unit</b> variation (how each year deviates from that
unit's own normal). In Stata: <code>xtset id year</code> then <code>xtreg y x, fe</code>.</p>
<div class="note">💡 The price: any <b>time-invariant</b> regressor (gender, race, a fixed region) has zero
within-variation, so it gets <b>wiped out too</b> — FE literally can't see it. That doesn't mean its effect
is zero; it means FE can't estimate it. ("Absorbed, not absent.") You can sneak it back by interacting it
with year dummies (e.g. $educ\times d1987$), which DO vary within a unit and so estimate how its effect
changed.</p>`
          },
          {
            title: '(b) LSDV and (c) First Differencing — same idea, different mechanics',
            html: String.raw`
<p><b>(b) LSDV</b> — Least Squares Dummy Variables. Instead of demeaning, give every unit its <b>own
intercept</b> via a dummy (drop one to avoid the dummy trap): <code>reg y x i.id</code>. It produces the
<b>exact same slope</b> $\hat\beta_1$ as the within estimator — it just also prints each unit's intercept,
which eats degrees of freedom. Great for small $N$, impractical for thousands of units.</p>
<p><b>(c) First Differencing (FD)</b> — subtract the <b>previous period</b> instead of the average. Since
$a_i$ is constant, it differences away:</p>
<div class="formula">$$ \Delta y_{it}=\beta_1\,\Delta x_{it}+\Delta u_{it},\qquad \Delta y_{it}=y_{it}-y_{i,t-1} $$</div>
<p>Then run OLS on the changes (<code>reg D.y D.x</code>) — just like a cross-section of differences. FD
loses the first period (you need a "previous" to subtract), so with $T$ periods you get $T-1$ rows per unit.</p>
<p><b>For FD to be unbiased &amp; consistent</b> you need (1)–(4): the model holds with time-invariant $a_i$,
random sampling, $x$ varies over time / no perfect collinearity, and <b>strict exogeneity</b>
$E[\Delta u\mid\Delta x]=0$. Adding (5) homoskedastic and (6) non-autocorrelated differenced errors makes it
<b>efficient (BLUE)</b>. Violating (5)/(6) doesn't bias the coefficient — it only breaks the SEs ⇒ use
cluster-robust SEs.</p>`
          }
        ]
      },
      {
        heading: 'FE vs FD: which one, and what FE can\'t do',
        num: '4',
        cards: [
          {
            title: 'They agree at T = 2, diverge at T ≥ 3',
            html: String.raw`
<table>
  <tr><th>Periods</th><th>FE vs FD</th></tr>
  <tr><td><b>T = 2</b></td><td>FE and FD are <b>algebraically identical</b> — same coefficient, same test stats. (For FE to match FD exactly, include a second-period time dummy.) FD is simpler and makes robust SEs trivial.</td></tr>
  <tr><td><b>T ≥ 3</b></td><td>they differ numerically but <b>both are unbiased &amp; consistent</b>. Choose on <b>efficiency</b>, which depends on the errors.</td></tr>
</table>
<p>Rule of thumb for $T\ge 3$: if the idiosyncratic error $u_{it}$ has <b>no</b> serial correlation, <b>FE is
more efficient</b>; if $u_{it}$ behaves like a <b>random walk</b> (strong positive serial correlation),
<b>FD is more efficient</b> (differencing removes the problem). In practice: report FE, show FD as a
robustness check; if they diverge a lot, suspect serial correlation.</p>`
          },
          {
            title: 'FE is powerful but not magic',
            html: String.raw`
<p>FE removes <b>all</b> time-invariant confounders, measured or not — that's its superpower for causal work.
But be honest about its limits:</p>
<table>
  <tr><th>FE controls for (time-invariant)</th><th>FE does NOT control for (time-varying)</th></tr>
  <tr><td>ability, race, family background, birth cohort, fixed geography</td><td>this year's motivation, health shocks, local labour conditions, manager quality</td></tr>
</table>
<ul>
  <li>FE does <b>not</b> fix <b>time-varying</b> omitted variables correlated with $x_{it}$.</li>
  <li>FE does <b>not</b> fix <b>reverse causality</b> (if $y$ also affects $x$).</li>
</ul>
<p>So FE makes a causal claim much more credible, but for time-varying confounders or simultaneity you still
need extra tools (IV, DiD, dynamic panels).</p>`
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
<p>Within and LSDV give the SAME $\hat\beta_1$. FD differs from FE for T ≥ 3.</p>`
          },
          {
            title: 'Strict exogeneity — the crucial assumption',
            html: String.raw`
<div class="formula">$E[u_{it}\mid x_{i1},x_{i2},\dots,x_{iT},a_i]=0$  (strict exogeneity)</div>
<p>After removing $a_i$, the idiosyncratic error is uncorrelated with the regressors in <b>every</b> period
(past, present, future). This rules out feedback from $y$ to future $x$, and is what makes the within / FD
estimators unbiased and consistent (with $T$ fixed, $N\to\infty$).</p>`
          },
          {
            title: 'The within estimator in closed form & the variance split',
            html: String.raw`
<p>Writing $\ddot x_{it}=x_{it}-\bar x_i$ (the demeaned regressor) and $\ddot y_{it}=y_{it}-\bar y_i$, the
FE / within estimator is just OLS on demeaned data:</p>
<div class="formula">$\hat\beta_{FE}=\dfrac{\sum_{i}\sum_{t}\ddot x_{it}\,\ddot y_{it}}{\sum_{i}\sum_{t}\ddot x_{it}^{\,2}}$
$\widehat{\mathrm{Var}}(\hat\beta_{FE})=\dfrac{\hat\sigma_u^2}{\sum_i\sum_t \ddot x_{it}^{\,2}}$,  with df $=NT-N-k$ (LSDV loses $N$ intercepts)</div>
<p>Total variation splits into <b>within</b> (over time, within a unit) and <b>between</b> (across units):</p>
<div class="formula">Total SS = Within SS + Between SS  ⇒  Stata reports $R^2_{within},\ R^2_{between},\ R^2_{overall}$.
FE uses only WITHIN variation (it discards between) ⇒ time-invariant $x$ has $\ddot x_{it}=0$ ⇒ dropped.</div>`
          },
          {
            title: 'F test that all uᵢ = 0  (FE vs Pooled OLS)',
            html: String.raw`
<div class="formula">$H_0:\ a_1=a_2=\dots=a_N$ (no fixed effects ⇒ Pooled OLS ok)
$F=\dfrac{(R^2_{LSDV}-R^2_{pooled})/(N-1)}{(1-R^2_{LSDV})/(NT-N-k)}\ \sim\ F_{\,N-1,\ NT-N-k}$</div>
<p><b>Reject</b> ($p<0.05$) ⇒ the unit effects are jointly significant ⇒ <b>FE beats Pooled OLS</b> (each unit
needs its own intercept). This is the line "F test that all u_i = 0" at the bottom of <code>xtreg, fe</code>.</p>`
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
            title: 'Case 1 — Pooled OLS vs Fixed Effects: the slope moves',
            html: String.raw`
<span class="rd-tag">Case 1 · cross-country growth</span>
<p><b>The scenario:</b> a panel of countries; outcome = GDP growth, regressors = remittances (% of GDP) and
unemployment. Run Pooled OLS (ignores country differences) and FE (controls them). Watch the remittance
coefficient <b>change</b> once we control for fixed country traits — proof that $a_i$ mattered. Hover the
numbers.</p>` + S({
              title: 'GDP growth on remittances & unemployment',
              dep: 'gdp_growth',
              cols: ['Pooled OLS', 'Fixed Effects'],
              rows: [
                { v: 'remit_gdp', c: ['0.019', '0.037'],
                  tips: { 0: '<b>Pooled OLS = 0.019.</b> +1pp remittances ⇒ +0.019pp growth — but this ignores unobserved country heterogeneity, so it\'s likely biased.', 1: '<b>FE = 0.037.</b> AFTER controlling for time-invariant country traits, the effect is bigger: +1pp remittances ⇒ +0.037pp growth, ceteris paribus. The change from 0.019 ⇒ 0.037 shows heterogeneity was biasing Pooled OLS.' } },
                { v: 'unemp', c: ['-0.091', '-0.175'],
                  tips: { 0: 'Pooled OLS: +1pp unemployment ⇒ −0.091pp growth.', 1: '<b>FE: −0.175pp</b> — controlling country effects strengthens it.' } }
              ],
              notes: [
                { t: 'FE reads "when a COUNTRY\'s remittances rise, its growth rises" — within-country variation.',
                  tip: 'Pooled OLS compares different countries (between variation, confounded by a_i). FE compares each country to itself over time (within variation), so it removes the permanent country traits.' }
              ]
            })
          },
          {
            title: 'Case 2 — Reading a full xtreg, fe output (the exam table)',
            html: String.raw`
<span class="rd-tag">Case 2 · exam Table 3.1 · i=7, t=10</span>
<p><b>The scenario:</b> the actual panel table from last year's final. 7 countries × 10 years. Beyond the
slope on <code>x1</code>, three other numbers tell you a lot: <code>corr(u_i,Xb)</code> (hints FE vs RE), the
<b>F test that all u_i = 0</b> (FE vs Pooled OLS), and <code>rho</code> (how much variance comes from the
fixed effects). Hover each.</p>` + S({
              cmd: 'xtreg y x1, fe',
              title: 'Fixed-effects (within) regression  ·  Group: country',
              info: [
                ['Number of obs', '70'],
                ['Number of groups', '7'],
                ['R-sq: within', '0.0747', '<b>Within R²</b> — how much of the WITHIN-unit (over-time) variation x1 explains. This is the relevant fit for FE.'],
                ['corr(u_i, Xb)', '-0.5468', '<b>The unobserved effect is correlated with x1 (−0.55).</b> This is exactly the situation that biases Pooled OLS and Random Effects — a strong hint that FE (which allows this correlation) is the right model.'],
                ['F(1, 62)', '5.00', 'Tests x1 = 0.'],
                ['Prob > F', '0.0289', 'p &lt; 0.05 ⇒ x1 is significant.']
              ],
              dep: 'y',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'x1', c: ['2.48e+09', '1.11e+09', '2.24', '0.029', '2.6e8   4.7e9'],
                  tips: { 0: '<b>2.48e+09 = the WITHIN effect of x1 on y</b>, after removing each country\'s fixed effect. Interpret as "when a country\'s x1 rises by 1 unit, its y rises by ~2.48 billion, ceteris paribus." (LSDV would give the identical number.)', 2: 't = 2.24 ⇒ just significant at 5%.' } },
                { v: '_cons', c: ['2.41e+08', '7.91e+08', '0.30', '0.762', '', ''] },
                '-',
                { v: 'sigma_u', c: ['1.818e+09', '', '', '', ''],
                  tips: { v: '<b>sigma_u = SD of the fixed effects $a_i$</b> (the permanent between-country differences).' } },
                { v: 'sigma_e', c: ['2.796e+09', '', '', '', ''],
                  tips: { v: '<b>sigma_e = SD of the idiosyncratic error $u_{it}$</b> (the over-time shocks).' } },
                { v: 'rho', c: ['0.2973', '', '', '', ''],
                  tips: { v: '<b>rho = 0.297 = the fraction of the total error variance that comes from the fixed effects $a_i$.</b> ≈ 30% of the unexplained variation is permanent between-country differences.' } }
              ],
              notes: [
                { t: 'F test that all u_i = 0:  F(6, 62) = 2.97,  Prob > F = 0.0131',
                  tip: '<b>This is the FE-vs-Pooled-OLS test.</b> H0: all country fixed effects are zero (Pooled OLS would do). p = 0.0131 &lt; 0.05 ⇒ reject ⇒ the fixed effects ARE jointly significant ⇒ FE beats Pooled OLS; each country needs its own intercept.' }
              ]
            })
          },
          {
            title: 'Case 3 — Three methods, one slope (and watch the N)',
            html: String.raw`
<span class="rd-tag">Case 3 · rent · 2-period panel</span>
<p><b>The scenario:</b> the same 2-period rent panel run three ways — within (demeaning), LSDV (dummies), and
First Differencing. The coefficients are <b>identical</b> (all three kill the same $a_i$), but the number of
observations differs because FD loses the first period. Hover to confirm.</p>` + S({
              title: 'Coefficient on lavginc: three estimators',
              dep: 'lrent',
              cols: ['Within (fe)', 'LSDV (i.city)', 'First Diff'],
              rows: [
                { v: 'lavginc', c: ['0.310', '0.310', '0.310'],
                  tips: { 0: '<b>Demeaning (xtreg, fe): 0.310.</b>', 1: '<b>LSDV (reg ... i.city): 0.310 — identical.</b> LSDV just adds a dummy per city; the slope is exactly the within estimate.', 2: '<b>First Diff (reg D.lrent D...): 0.310 too.</b> For a 2-period panel, FE = FD algebraically.' } },
                '-',
                { v: 'N (obs)', c: ['128', '128', '64'],
                  tips: { 0: 'Within keeps all 128 rows.', 1: 'LSDV keeps 128 rows too.', 2: '<b>FD keeps only 64 = N·(T−1).</b> Differencing a 2-period panel loses the first period, halving the rows. Same slope, fewer observations.' } }
              ],
              notes: [
                { t: 'All three eliminate the same a_i ⇒ identical slope. FD just loses the first period.',
                  tip: 'Crime data (46 cities, 1982 & 1987) behaves the same way — and the unemployment→crime sign flips vs the cross-section, because the panel removed the invisible city confounders.' }
              ]
            })
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'Write the within (demeaning) transformation and explain in one line why it removes aᵢ but also drops a person\'s gender.',
        answer: [
          'Demeaning: (y_it − ȳ_i) = β1(x_it − x̄_i) + (u_it − ū_i).',
          'aᵢ is constant within i, so ā_i − a_i = 0 — it differences away without ever being measured.',
          'Gender is also constant within i, so (gender − gender) = 0: zero within-variation ⇒ collinear with the fixed effect ⇒ FE drops it (can\'t estimate its effect).'
        ],
        tip: 'FE removes EVERYTHING time-invariant — the confounder aᵢ and any constant regressor.'
      },
      {
        type: 'concept',
        q: 'For T=2 how do FE and FD compare? For T≥3 how do you choose between them?',
        answer: [
          'T=2: FE and FD are algebraically identical (same coefficient and tests). FD is simpler and makes robust SEs easy; for FE to match exactly, add a second-period time dummy.',
          'T≥3: they differ numerically but both are unbiased and consistent; choose by efficiency.',
          'No serial correlation in u → FE more efficient. Random-walk u (strong positive serial correlation) → FD more efficient. Practically: report FE, show FD as a robustness check.'
        ]
      },
      {
        type: 'scenario',
        q: 'Pooled OLS of crime on unemployment across 46 cities gives a negative coefficient; the same data as a panel (1982, 1987) gives positive. Explain the sign flip.',
        answer: [
          'Pooled OLS compares DIFFERENT cities, which differ in unmeasured ways (a_i: culture, poverty, geography) correlated with both crime and unemployment → omitted-variable bias, wrong sign.',
          'The FE panel compares each city TO ITSELF over time, differencing out a_i: when this city\'s unemployment rose, did its crime rise? Yes.',
          'This is Simpson\'s paradox — between-unit variation was confounded; within-unit variation reveals the truth.'
        ]
      },
      {
        type: 'concept',
        q: 'A researcher runs FE on wages, gets no coefficient on education, and concludes "education has no effect on wages." What\'s the error, and how could she still learn about education?',
        answer: [
          'Education is constant within each person across the panel, so it has zero within-variation and is absorbed by the fixed effect — dropped, not shown to be zero. "Absorbed, not absent."',
          'FE simply cannot estimate the level effect of a time-invariant variable.',
          'She can interact education with year dummies (educ×year): this varies within person and identifies how the RETURN to education CHANGED over time, even though the base level stays inside a_i.'
        ],
        tip: 'No FE coefficient on a constant variable ≠ no effect; it is unidentified within FE.'
      },
      {
        type: 'concept',
        q: 'Name two things FE does NOT fix, and state the strict-exogeneity assumption it relies on.',
        answer: [
          'FE does not remove TIME-VARYING omitted variables correlated with x (e.g. this year\'s motivation, local shocks), and does not fix reverse causality / simultaneity.',
          'Strict exogeneity: E[u_it | x_i1,…,x_iT, a_i] = 0 — after removing a_i, the idiosyncratic error is uncorrelated with the regressors in every period (no feedback from y to future x).',
          'Beating these needs richer designs: IV, DiD, or dynamic panel methods.'
        ]
      }
    ]
  };
})();
