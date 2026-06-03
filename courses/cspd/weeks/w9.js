/* ============================================================================
   CSPD · Week 9 — Truncated Regression
   Final-exam Topic 1 (cont.). Rewritten flowing/plain; Read Data = interactive
   cases. Sources: Tobit & Truncated deck, WEEK 7 deck, Lab.do (truncreg).
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w9 = {
    id: 'w9',
    label: 'Week 9',
    title: 'Truncated Regression — when the missing cases vanish completely',
    subtitle: 'Truncation vs censoring, why the error mean shifts, and reading truncreg output',

    notes: [
      {
        heading: 'Censoring vs truncation: the one distinction that matters',
        num: '1',
        cards: [
          {
            title: 'Do you still SEE the limited cases, or are they gone?',
            html: String.raw`
<p>Last week (Tobit) the boundary cases were still <b>in</b> the dataset — a student who'd score above 800
just shows up as "800". The value was capped, but the person was counted. <b>Truncation is different and
more severe: the boundary cases are deleted from the data entirely.</b> You don't even know they ever
existed.</p>
<p>A speed-camera analogy (lower limit 40 km/h) makes it click:</p>
<table>
  <tr><th></th><th>Censoring (Tobit)</th><th>Truncation (truncreg)</th></tr>
  <tr><td>A car going 34 km/h…</td><td>is <b>recorded as "40"</b> — the row stays, the value is capped.</td><td>is <b>dropped from the file</b> — the row disappears.</td></tr>
  <tr><td>Sample size</td><td><b>unchanged</b> (you keep partial info).</td><td><b>shrinks</b> (information is gone for good).</td></tr>
  <tr><td>Do you know the case exists?</td><td><b>Yes</b> — it appears at the boundary.</td><td><b>No</b> — it's invisible to you.</td></tr>
  <tr><td>Stata command</td><td><code>tobit</code></td><td><code>truncreg</code></td></tr>
</table>
<div class="note">💡 A one-question test you can run in the exam: <i>"Do the boundary cases appear anywhere in
my data?"</i> If yes → it's censoring → Tobit. If no (they were never collected) → truncation → truncreg.</div>`
          },
          {
            title: 'The four flavours (left/right × censoring/truncation)',
            html: String.raw`
<p>Each problem comes in a "from below" (left) and "from above" (right) version. Same logic, just which end
is affected:</p>
<table>
  <tr><th>Type</th><th>What happens</th><th>Everyday example</th></tr>
  <tr><td><b>Left censoring</b></td><td>values below $LL$ are set to $LL$, rows kept</td><td>restaurant spending: non-diners recorded as 0, everyone surveyed.</td></tr>
  <tr><td><b>Right censoring</b></td><td>values above $UL$ are set to $UL$, rows kept</td><td>a gym scale maxing at 150 kg: a 170 kg person reads "150".</td></tr>
  <tr><td><b>Left truncation</b></td><td>only values above $LL$ ever enter the data</td><td>a scholarship study of students who <b>passed</b> the entry exam (score ≥ 500); the rest are absent.</td></tr>
  <tr><td><b>Right truncation</b></td><td>only values below $UL$ ever enter the data</td><td>a clinic that only admits stage III–IV cancer patients; milder cases never recorded.</td></tr>
</table>`
          }
        ]
      },
      {
        heading: 'The truncated regression model — and why OLS is biased here too',
        num: '2',
        cards: [
          {
            title: 'Same latent equation, but we only keep the survivors',
            html: String.raw`
<p>The hidden equation is the same friendly normal regression as always:</p>
<div class="formula">$$ y_i^* = x_i'\beta+\varepsilon_i,\quad \varepsilon_i\sim N(0,\sigma^2) $$</div>
<p>But now we only <b>observe a unit at all</b> if it passes the threshold (say $y^*>0$). Everyone below it
is simply not in the file. Because we threw away one whole tail of the distribution, the sample we keep is
<b>no longer representative of the population</b> — and that's the root of the bias.</p>
<p>Here's the intuitive picture. The error $\varepsilon$ is supposed to average to zero across everyone. But
once you keep only the people who cleared the bar, you've systematically removed the unlucky/low-error ones
at the bottom. What's left has an error that averages <b>above</b> zero:</p>
<div class="formula">$$ E[\varepsilon_i\mid x_i,\ \text{observed}]=\sigma\,\lambda\!\Big(\tfrac{x_i'\beta}{\sigma}\Big)>0,\qquad \lambda(z)=\frac{\phi(z)}{\Phi(z)} $$</div>
<p>OLS doesn't know about this upward shift, so it blames the regressors for it — the error ends up
correlated with $x$, the Gauss–Markov assumption breaks, and OLS becomes <b>biased and inconsistent</b>.
Visually, the OLS line through the surviving points comes out <b>too flat</b>, because chopping the bottom
tail squeezes the variation in $y$.</p>
<div class="note">💡 That $\lambda(\cdot)=\phi/\Phi$ is the <span class="key">inverse Mills ratio</span> — the
"average pull" of cutting off a tail. It is literally the same correction term that runs the Heckman model
next week. Remember the name now and Week 10 will feel easy.</div>`
          },
          {
            title: 'How truncreg fixes it (and what its coefficient means)',
            html: String.raw`
<p><code>truncreg</code> builds the missing tail back into the math. Instead of the plain normal density, it
uses the density <b>rescaled by the probability of being observed</b>, which exactly undoes the bias:</p>
<div class="formula">density used by truncreg:  $\dfrac{(1/\sigma)\,\phi\!\big((y_i-x_i'\beta)/\sigma\big)}{\Phi\!\big(x_i'\beta/\sigma\big)}$</div>
<p>One important contrast with Tobit. A Tobit coefficient was the effect on the <b>latent</b> $y^*$. But a
<code>truncreg</code> coefficient is the effect on the <b>observed</b> $y$ <i>directly</i> — because the
model only ever works with the data that survived the cut, there is no separate "hidden" outcome to talk
about. So you interpret it like an ordinary slope, but remember it describes only the
<b>observed subpopulation</b>, not the whole population.</p>`
          }
        ]
      },
      {
        heading: 'Truncated vs Tobit — same-looking data, different question',
        num: '3',
        cards: [
          {
            title: 'They estimate β for different populations',
            html: String.raw`
<p>Both deal with a boundary, and on paper they can even look similar, but they answer genuinely different
questions — and the exam loves to test whether you can pick the right one:</p>
<table>
  <tr><th></th><th>Tobit (censored)</th><th>Truncated regression</th></tr>
  <tr><td>Data it uses</td><td>the censored <b>and</b> uncensored cases (boundary cases kept)</td><td>only the surviving subsample (boundary cases gone)</td></tr>
  <tr><td>Estimates β for…</td><td>the <b>whole latent population</b>, including those at the limit</td><td>only the <b>observable subpopulation</b></td></tr>
  <tr><td>Coefficient = effect on…</td><td>latent $y^*$</td><td>observed $y$ (among survivors)</td></tr>
  <tr><td>Choose it when…</td><td>you can see that a unit is at the boundary (e.g. "800" appears)</td><td>units past the boundary were never recorded</td></tr>
</table>
<div class="tip">📝 Same picture, two questions. Tobit asks "what's the relationship for <b>everyone</b>?"
Truncated asks "what's the relationship among the people we <b>actually observe</b>?" Decide which
population the question is about, then pick.</div>`
          },
          {
            title: 'One marginal-effect option is a trap',
            html: String.raw`
<p>After <code>truncreg</code> you can ask for marginal effects, but one of them is meaningless and a sharp
exam will check if you know which:</p>
<table>
  <tr><th>Effect on</th><th>Sensible?</th><th>Why</th></tr>
  <tr><td>latent $y$ (the coefficient itself)</td><td>✓ yes</td><td>fine to report — $x{\uparrow}1\Rightarrow y\uparrow\beta$.</td></tr>
  <tr><td>"probability of being in the interval"</td><td>✗ no</td><td>the out-of-range units aren't in the population you're modelling, so a "probability" over them is nonsense.</td></tr>
  <tr><td>$E[y\mid\text{truncation}]$</td><td>✓ yes</td><td>the expected $y$ given that you cleared the cut.</td></tr>
</table>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'Model, the truncated mean & its marginal effect',
            html: String.raw`
<div class="formula">Model:  $y^*=x'\beta+\varepsilon,\ \varepsilon\sim N(0,\sigma^2)$; observe only $y^*>c$.
Let $\alpha=(c-x'\beta)/\sigma$ and the <b>(truncation) inverse Mills ratio</b>
  $\lambda(\alpha)=\dfrac{\phi(\alpha)}{1-\Phi(\alpha)}$  (lower cut);  $\dfrac{-\phi(\alpha)}{\Phi(\alpha)}$ (upper cut)
Truncated mean:  $E[y\mid x,\ y>c]=x'\beta+\sigma\,\lambda(\alpha)$</div>
<p>The extra term $\sigma\lambda(\alpha)>0$ is the upward pull from chopping the tail. OLS ignores it ⇒ the
error correlates with $x$ ⇒ bias. <code>truncreg</code> puts it back. The <b>marginal effect</b> on the
observed (truncated) mean is a <b>shrunken</b> $\beta$:</p>
<div class="formula">$\dfrac{\partial E[y\mid x,\,y>c]}{\partial x_j}=\beta_j\big[1-\lambda(\alpha)\,(\lambda(\alpha)-\alpha)\big]=\beta_j(1-\delta),\quad 0<\delta<1$</div>
<p>So, like Tobit, the effect on what you observe is gentler than $\beta_j$. (Note: the variance also
shrinks, $\mathrm{Var}(y\mid y>c)=\sigma^2(1-\delta)<\sigma^2$ — truncation compresses the spread.)</p>`
          },
          {
            title: 'Command map & how to read the coefficient',
            html: String.raw`
<div class="formula">Censored (Tobit):  tobit y x, ll(#)      ul(#)      ll(#) ul(#)
Truncated:         truncreg y x, ll(#)  ul(#)      ll(#) ul(#)</div>
<p>Tobit coefficient: "$x{\uparrow}1\Rightarrow y^*{\uparrow}\beta$" (latent). truncreg coefficient:
"$x{\uparrow}1\Rightarrow y\uparrow\beta$" (observed $y$, among survivors). Same number on screen, different
sentence in the exam.</p>`
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
            title: 'Case 1 — See the mechanism: what censoring vs truncation does to data',
            html: String.raw`
<span class="rd-tag">Case 1 · car speeds, lower limit 40</span>
<p><b>The scenario:</b> we record car speeds, but a rule kicks in below 40 km/h. The left column is the real
data; the middle shows what <b>censoring</b> does; the right shows what <b>truncation</b> does. Hover the two
boundary values to see the difference between "changed" and "deleted".</p>` + S({
              title: 'Same data, two treatments (lower limit = 40)',
              dep: 'obs',
              cols: ['Original', 'Censored(40)', 'Truncated(40)'],
              rows: [
                { v: '1', c: ['43', '43', '43'] },
                { v: '2', c: ['57', '57', '57'] },
                { v: '3', c: ['34', '40', '— dropped'],
                  tips: { 1: '<b>Censoring: 34 → 40.</b> The row STAYS, but the value is pushed up to the limit. You keep the observation (partial info survives) ⇒ this is what Tobit handles.', 2: '<b>Truncation: the whole row is DELETED.</b> The 34 km/h car vanishes from the file — you no longer know it existed. N falls ⇒ this is what truncreg handles.' } },
                { v: '4', c: ['90', '90', '90'] },
                { v: '5', c: ['30', '40', '— dropped'],
                  tips: { 1: '<b>30 → 40</b> again (censored: capped, kept).', 2: '<b>Deleted</b> (truncated: gone).' } },
                '-',
                { v: 'N', c: ['5', '5', '3'],
                  tips: { 1: '<b>Censoring keeps N = 5</b> — no observations lost.', 2: '<b>Truncation drops N to 3</b> — the two sub-40 cars are gone. Smaller, non-representative sample ⇒ OLS biased.' } }
              ]
            })
          },
          {
            title: 'Case 2 — OLS vs truncreg: the slope that OLS flattens',
            html: String.raw`
<span class="rd-tag">Case 2 · selective-school data, achiv ≥ 40 only</span>
<p><b>The scenario:</b> a teaching dataset where only students with achievement (<code>achiv</code>) ≥ 40
were ever recorded (lower truncation). We regress <code>achiv</code> on math and language scores. Run plain
OLS (wrong) and <code>truncreg</code> (right) and compare. Because OLS lost the bottom tail, its slopes come
out <b>too flat</b>; truncreg recovers the steeper, correct relationship. Hover to compare.</p>` + S({
              title: 'Coefficients: OLS vs truncreg (achiv on mathscore, langscore)',
              dep: 'achiv',
              cols: ['OLS (biased)', 'truncreg, ll(40)'],
              rows: [
                { v: 'mathscore', c: ['0.42', '0.71'],
                  tips: { 0: '<b>OLS = 0.42.</b> Flattened — truncation chopped the low-achievement tail, squeezing the variation and pulling the slope toward 0.', 1: '<b>truncreg = 0.71.</b> Steeper and consistent: it rebuilds the missing tail in the likelihood. This is the effect on observed achiv among the surviving (≥40) students.' } },
                { v: 'langscore', c: ['0.38', '0.65'],
                  tips: { 0: 'OLS 0.38 — again attenuated.', 1: 'truncreg 0.65 — the corrected effect.' } }
              ],
              notes: [
                { t: 'OLS on a truncated sample is biased toward 0; truncreg corrects it.',
                  tip: '<b>Why is OLS biased?</b> Among survivors, E[ε | achiv≥40] > 0 and depends on the scores, so the error correlates with x — Gauss–Markov fails. (Illustrative teaching numbers.)' }
              ]
            })
          },
          {
            title: 'Case 3 — Reading a truncreg output line by line',
            html: String.raw`
<span class="rd-tag">Case 3 · the truncreg results window</span>
<p><b>The scenario:</b> the same <code>truncreg achiv mathscore langscore, ll(40)</code>, now shown as a full
results table. Read it like an OLS table — coefficient, SE, t/z, p — but remember the coefficient is the
effect on <b>observed</b> achiv among the survivors, and watch the <code>/sigma</code> line. Hover each
number.</p>` + S({
              cmd: 'truncreg achiv mathscore langscore, ll(40)',
              title: 'Truncated regression  (lower limit = 40)',
              info: [
                ['Number of obs', '180'],
                ['Wald chi2(2)', '96.4', 'Joint test that the regressors matter (the MLE analogue of the F-test).'],
                ['Prob > chi2', '0.0000', 'p &lt; 0.05 ⇒ model jointly significant.']
              ],
              dep: 'achiv',
              cols: ['Coef.', 'Std. err.', 'z', 'P>|z|', '[95% conf. interval]'],
              rows: [
                { v: 'mathscore', c: ['0.71', '0.09', '7.89', '0.000', '0.53   0.89'],
                  tips: { 0: '<b>0.71 = effect on OBSERVED achiv</b> (not a latent variable). Among students who scored ≥40, +1 math point ⇒ +0.71 achiv, ceteris paribus. truncreg talks about the survivors directly.', 2: '<b>z = 7.89</b> = Coef ÷ SE. MLE prints z (not t); same rule, |z|&gt;1.96 ⇒ significant at 5%.', 3: 'p = 0.000 ⇒ significant.' } },
                { v: 'langscore', c: ['0.65', '0.10', '6.50', '0.000', '0.45   0.85'],
                  tips: { 0: '+1 language point ⇒ +0.65 observed achiv, ceteris paribus.' } },
                { v: '_cons', c: ['18.4', '4.1', '4.49', '0.000', '10.4   26.4'] },
                '-',
                { v: '/sigma', c: ['9.8', '0.7', '', '', ''],
                  tips: { v: '<b>σ̂ = 9.8 = SD of the error,</b> estimated by MLE (just like Tobit). It is corrected for the chopped tail, unlike the residual SD an OLS-on-survivors would report.' } }
              ],
              notes: [
                { t: 'Do NOT report a "probability in interval" marginal effect here.',
                  tip: 'Out-of-range students aren\'t in the modelled population, so a probability over them is meaningless. Report dydx with predict(xb) (the coefficient) or predict(ystar(40,.)).' }
              ]
            })
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'A scholarship dataset contains ONLY students who scored ≥ 85 (the rest were never recorded). You regress later GPA on entrance score. Censoring or truncation? Which command, and why is OLS biased?',
        answer: [
          'Truncation (left): the sub-85 students are entirely absent — you don\'t even know they exist.',
          'Use truncreg gpa score ..., ll(85). Not tobit, because the boundary cases are gone, not capped.',
          'OLS is biased because, conditional on score ≥ 85, the surviving students have an error that averages above zero (E[ε|selected]>0) and depends on the scores, so the error correlates with x → biased, inconsistent, and the slope comes out too flat.'
        ],
        tip: 'Absent cases ⇒ truncation ⇒ truncreg. Present-but-capped ⇒ censoring ⇒ tobit.'
      },
      {
        type: 'concept',
        q: 'Both Tobit and truncated regression can be run on data with many zeros. How do their ESTIMANDS (what they estimate) differ?',
        answer: [
          'Tobit uses both the zeros (as censoring probabilities) and the positives, and estimates β for the ENTIRE latent population.',
          'Truncated regression uses only the positive (observed) cases and estimates β for the OBSERVABLE subpopulation — a different question.',
          'So even on the same data they answer different questions; choose the one matching whether the boundary cases belong to your target population.'
        ]
      },
      {
        type: 'scenario',
        q: 'A wage survey only interviews workers earning above Rp5 million; lower earners aren\'t contacted. What goes wrong with OLS, and what is the term σ·φ/(1−Φ) doing?',
        answer: [
          'The sample is truncated from below at Rp5m, so it is non-representative. OLS on it is biased because among the survivors E[ε | wage>5m] = σ·φ(z)/(1−Φ(z)) > 0 and depends on x.',
          'That term is the upward shift in the conditional error mean caused by deleting the lower tail — the "average pull" of truncation (an inverse-Mills-ratio term).',
          'truncreg, ll(5) builds this correction into the likelihood and recovers consistent slopes. Note this is exactly the machinery that becomes the Heckman correction next week.'
        ],
        tip: 'σ·φ/(1−Φ) = inverse Mills ratio = the bridge to sample selection.'
      },
      {
        type: 'concept',
        q: 'Why is margins, predict(e(LL,UL)) sensible after tobit but misleading after truncreg?',
        answer: [
          'After tobit the boundary units are still in the sample, so "probability of being in the interval (LL,UL)" is a real population quantity.',
          'After truncreg the out-of-range units are excluded by construction, so a probability-in-interval effect refers to units that are not part of the modelled population — it is meaningless.',
          'For truncreg report dydx with predict(xb) (the coefficient) or predict(ystar(40,.)).'
        ]
      }
    ]
  };
})();
