/* ============================================================================
   CSPD · Week 9 — Truncated Regression
   Final-exam Topic 1 (cont.): truncation vs censoring, the truncated model,
   marginal effects, Tobit vs truncreg. Bridges to Topic 2 (sample selection).
   Sources: "Tobit and Truncated Regression" deck, WEEK 7 deck, Lab.do.
   Registers on window.CSPD_WEEKS.w9.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w9 = {
    id: 'w9',
    label: 'Week 9',
    title: 'Truncated Regression',
    subtitle: 'Truncation vs censoring, the truncated model, why the error mean shifts, truncreg in Stata',

    notes: [
      {
        heading: 'Censoring vs truncation — the fundamental difference',
        num: '1',
        cards: [
          {
            title: 'Do you still SEE the limited observations, or are they gone?',
            html: String.raw`
<p>Both deal with a boundary, but they differ in <b>whether the affected observations are in your
dataset at all</b>:</p>
<table>
  <tr><th></th><th>Censoring</th><th>Truncation</th></tr>
  <tr><td>The observation…</td><td>is <b>kept</b>; its value is capped to the limit.</td><td>is <b>deleted</b> entirely — you never see it.</td></tr>
  <tr><td>Sample size</td><td><b>unchanged</b> (partial info survives).</td><td><b>reduced</b> (information lost completely).</td></tr>
  <tr><td>You know it exists?</td><td>Yes — e.g. <code>apt=800</code> appears.</td><td>No — the unit is absent; you don't even know it existed.</td></tr>
  <tr><td>Stata model</td><td><code>tobit</code></td><td><code>truncreg</code></td></tr>
</table>
<p>Speed-limit analogy (lower limit 40 km/h): a car at 34 is <b>recorded as 40</b> under censoring
(row kept, value changed) but <b>dropped from the data</b> under truncation (row gone).</p>
<div class="note">💡 One-line test: <i>"Do the boundary cases appear in my data?"</i> Yes → censoring (Tobit).
No → truncation (truncreg).</div>`
          },
          {
            title: 'The four flavours: left/right × censoring/truncation',
            html: String.raw`
<table>
  <tr><th>Type</th><th>Rule</th><th>Example</th></tr>
  <tr><td><b>Left censoring</b></td><td>$y=y^*$ if $y^*>LL$, else $y=LL$</td><td>Restaurant spend: non-diners recorded as 0; all surveyed.</td></tr>
  <tr><td><b>Right censoring</b></td><td>$y=y^*$ if $y^*<UL$, else $y=UL$</td><td>Gym scale maxes at 150 kg: a 170 kg person reads "150".</td></tr>
  <tr><td><b>Left truncation</b></td><td>only $y^*>LL$ enter the data</td><td>Study of students who <b>passed</b> entry (score ≥ 500); others absent.</td></tr>
  <tr><td><b>Right truncation</b></td><td>only $y^*<UL$ enter the data</td><td>Clinic that only admits stage III–IV cancer patients.</td></tr>
</table>`
          }
        ]
      },
      {
        heading: 'The truncated regression model',
        num: '2',
        cards: [
          {
            title: 'Model & assumptions',
            html: String.raw`
<div class="formula">$$ y_i^* = x_i'\beta+\varepsilon_i,\quad \varepsilon_i\sim NID(0,\sigma^2)$$
$$ y_i=y_i^*\ \text{observed only if } y_i^*>0;\qquad (y_i,x_i)\ \text{not observed if } y_i^*\le 0 $$</div>
<p>We see only the part of the population above the threshold, so the sample is <b>not representative</b>
of the population. MLE for truncreg <b>adjusts the likelihood for the missing tail</b>: it divides the
normal density by the probability of being observed.</p>
<div class="formula">density used:  $\dfrac{(1/\sigma)\,\phi\!\big((y_i-x_i'\beta)/\sigma\big)}{\Phi\!\big(x_i'\beta/\sigma\big)}$</div>`
          },
          {
            title: 'Why OLS on a truncated sample is biased — the error mean shifts',
            html: String.raw`
<p>Keep only $y^*>0$ and the conditional error is no longer mean-zero. Chopping off the lower tail of
$\varepsilon$ shifts its conditional mean <b>above</b> zero:</p>
<div class="formula">$$ E[\varepsilon_i\mid x_i,\ y_i^*>0]=\sigma\,\lambda\!\Big(\tfrac{x_i'\beta}{\sigma}\Big)>0,\qquad \lambda(z)=\frac{\phi(z)}{\Phi(z)} $$</div>
<p>OLS attributes this positive, $x$-dependent shift to the regressors, so the error correlates with $x$
(Gauss–Markov violated) ⇒ <b>biased and inconsistent</b>. The estimated slope is typically <b>flatter</b>
than the population slope because the truncated sample compresses the variation in $y$.</p>
<div class="note">💡 This is exactly the <b>sample-selection</b> mechanism (Week 10). The inverse Mills ratio
$\lambda(\cdot)$ is the "average pull" of the truncation — remember the name, it returns in Heckman.</div>`
          }
        ]
      },
      {
        heading: 'Truncated vs Tobit — same data shape, different estimand',
        num: '3',
        cards: [
          {
            title: 'They answer different questions',
            html: String.raw`
<table>
  <tr><th></th><th>Tobit (censored)</th><th>Truncated regression</th></tr>
  <tr><td>Data used</td><td>censored <b>and</b> uncensored obs (boundary cases kept).</td><td>only the observed subsample (boundary cases gone).</td></tr>
  <tr><td>Estimates β for…</td><td>the <b>entire latent population</b> (incl. those at the limit).</td><td>the <b>observable subpopulation</b> only.</td></tr>
  <tr><td>Coefficient is effect on…</td><td>latent $y^*$.</td><td>$y$ directly (model works only with passing data).</td></tr>
  <tr><td>When to use</td><td>you observe that a unit is at the boundary (e.g. 800 appears).</td><td>units beyond the boundary are entirely absent.</td></tr>
</table>
<div class="tip">📝 Same picture, different question. Tobit: "what is the relationship in the whole
population?" Truncated: "what is the relationship among those we actually observe?"</div>`
          },
          {
            title: 'Marginal effects for truncreg — one is misleading',
            html: String.raw`
<table>
  <tr><th>Effect on</th><th>Interpretation</th><th>Stata</th></tr>
  <tr><td>latent $y$</td><td>$x{\uparrow}1 \Rightarrow y{\uparrow}\beta$, cp.</td><td><code>margins, dydx(*) predict(xb)</code></td></tr>
  <tr><td>"prob. in interval"</td><td><b>Not meaningful</b> — non-sample units are excluded by construction.</td><td><code>predict(e(LL,UL))</code> ⚠️</td></tr>
  <tr><td>$E[y\mid$ truncation$]$</td><td>$x{\uparrow}1 \Rightarrow$ expected $y$ (given truncation) $\uparrow\beta$, cp.</td><td><code>predict(ystar(LL,UL))</code></td></tr>
</table>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'Truncated model & the truncated mean',
            html: String.raw`
<div class="formula">Model:  $y^*=x'\beta+\varepsilon,\ \varepsilon\sim N(0,\sigma^2)$; observe only $y^*>c$.
Truncated mean (lower truncation at $c$, $z=(c-x'\beta)/\sigma$):
  $E[y\mid x,\ y>c]=x'\beta+\sigma\,\dfrac{\phi(z)}{1-\Phi(z)}$</div>
<p>The extra term $\sigma\,\phi(z)/(1-\Phi(z))$ is the upward pull on the mean from chopping the tail.
OLS ignores it ⇒ omitted-variable-style bias correlated with $x$.</p>`
          },
          {
            title: 'Stata command map',
            html: String.raw`
<div class="formula">Censored (Tobit):  tobit y x, ll(#)        ul(#)        ll(#) ul(#)
Truncated:         truncreg y x, ll(#)    ul(#)        ll(#) ul(#)</div>
<p>Interpretation differs: a Tobit coefficient is "$x{\uparrow}1 \Rightarrow y^*{\uparrow}\beta$";
a truncreg coefficient is "$x{\uparrow}1 \Rightarrow y{\uparrow}\beta$" (effect on observed $y$,
because out-of-range units never enter).</p>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Reading truncated-regression output',
        num: 'R',
        cards: [
          {
            title: 'truncreg vs OLS on a truncated achievement sample',
            html: String.raw`
<span class="rd-tag">Lab.do · achievement data, truncated at 40</span>
<p>Only students with <code>achiv ≥ 40</code> are in the data (lower truncation). Run OLS (wrong) and
<code>truncreg</code> (right) on the same RHS:</p>
<div class="stata"><span class="cmd">reg achiv female langscore mathscore</span>           <span class="dim">* ignores truncation -&gt; biased</span>
<span class="cmd">truncreg achiv female langscore mathscore, ll(40)</span>  <span class="dim">* corrects for missing tail</span></div>
<ul class="annot">
  <li>OLS slopes are <b>flatter</b> (attenuated) because the truncated sample lost its lower tail.</li>
  <li><code>truncreg</code> slopes are larger in magnitude and consistent for the population relationship,
      provided normality holds.</li>
  <li><code>ll(40)</code> tells Stata the lower truncation point so the likelihood can rescale by
      $\Phi(\cdot)$.</li>
</ul>`
          },
          {
            title: 'Marginal effects after truncreg',
            html: String.raw`
<span class="rd-tag">margins</span>
<div class="stata"><span class="cmd">margins, dydx(*) predict(xb)</span>          <span class="dim">* effect on y (= coef, since truncreg is linear in y)</span>
<span class="cmd">margins, dydx(*) predict(ystar(40,.))</span> <span class="dim">* effect on E[y | truncation]</span></div>
<ul class="annot">
  <li><code>predict(xb)</code> equals the raw coefficient — fine to report.</li>
  <li><b>Reading the bounds:</b> for <b>lower</b> truncation at 40 use <code>ystar(40,.)</code> — the
      "<code>.</code>" means $+\infty$ (no upper limit). For an upper truncation at $UL$ you'd write
      <code>ystar(.,UL)</code>; for two-sided, <code>ystar(LL,UL)</code>.</li>
  <li>Do <b>not</b> report a "probability in interval" effect for truncreg: out-of-range units are not
      in the population you are modelling, so that quantity is meaningless.</li>
</ul>`
          },
          {
            title: 'Censored vs truncated — the 9-observation toy',
            html: String.raw`
<span class="rd-tag">Intuition table (lower limit 40)</span>
<div class="stata"><span class="ttl">original  /  censored  /  truncated</span>43   43       43
34   <span class="hl">40</span>(changed) <span class="neg">DROPPED</span>
90   90       90
30   <span class="hl">40</span>(changed) <span class="neg">DROPPED</span></div>
<ul class="annot">
  <li><b>Censored:</b> N unchanged; sub-limit values pushed to 40; partial info survives ⇒ <code>tobit</code>.</li>
  <li><b>Truncated:</b> sub-limit rows deleted; N falls; info lost ⇒ <code>truncreg</code>.</li>
</ul>`
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'A scholarship dataset contains only students who scored ≥ 85 (others were never recorded). You regress later GPA on entrance score. Censoring or truncation? Which Stata command, and why is OLS biased?',
        answer: [
          'Truncation (left): sub-85 students are entirely absent — you do not even know they exist.',
          'Use truncreg gpa score ..., ll(85). Not tobit, because the boundary cases are gone, not capped.',
          'OLS is biased because, conditional on score ≥ 85, E[ε | selected] > 0 (the lower tail of ε is chopped), so the error correlates with the regressors → biased, inconsistent, and the slope is flattened.'
        ],
        tip: 'Absent observations ⇒ truncation ⇒ truncreg; present-but-capped ⇒ censoring ⇒ tobit.'
      },
      {
        type: 'concept',
        q: 'Both Tobit and truncated regression can be run on a dataset where many y are at 0. How do their ESTIMANDS differ?',
        answer: [
          'Tobit uses both the zeros (as censoring probabilities) and the positives, and estimates β for the ENTIRE latent population.',
          'Truncated regression uses only the positive (observed) subsample and estimates β for the OBSERVABLE subpopulation — a different question.',
          'So even on the same data the coefficients answer different questions; pick the one matching whether the boundary units belong to your target population.'
        ]
      },
      {
        type: 'scenario',
        q: 'A wage survey only interviews workers earning above Rp5 million; lower earners are not contacted. You model wages. What goes wrong with OLS, and what is the term σ·φ/(1−Φ) doing?',
        answer: [
          'The sample is truncated from below at Rp5m, so it is non-representative. OLS on it is biased because E[ε | wage>5m] = σ·φ(z)/(1−Φ(z)) > 0 and depends on x.',
          'That term is the upward shift in the conditional error mean caused by removing the lower tail — the "average pull" of truncation (an inverse-Mills-ratio term).',
          'truncreg, ll(5) adds this correction into the likelihood and recovers consistent slopes; note this is the same machinery that becomes the Heckman correction next week.'
        ],
        tip: 'σ·φ/(1−Φ) = inverse Mills ratio = the bridge to sample selection.'
      },
      {
        type: 'concept',
        q: 'Why is margins, predict(e(LL,UL)) sensible after tobit but misleading after truncreg?',
        answer: [
          'After tobit the censored units are in the sample, so "probability of being in the interval (LL,UL)" is a real population quantity.',
          'After truncreg the out-of-range units are excluded by construction, so a probability-in-interval effect refers to units that are not part of the modelled population — it is not meaningful.',
          'For truncreg, report dydx with predict(xb) or predict(ystar(LL,.)).'
        ]
      }
    ]
  };
})();
