/* ============================================================================
   CSPD · Week 8 — The Tobit (Censored Regression) Model
   Final-exam Topic 1. Rewritten for flow + plain language; Read Data = numbered
   interactive cases (hover/tap any number). Sources: Tobit & Truncated deck,
   WEEK 7 Tobit deck, tobit_guided_lab.docx, UCLA apt example, Wooldridge 17.7.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w8 = {
    id: 'w8',
    label: 'Week 8',
    title: 'The Tobit Model — when the outcome piles up at a limit',
    subtitle: 'Why OLS breaks on censored data, the latent variable, MLE, and reading Tobit output',

    /* ============================ NOTES ============================ */
    notes: [
      {
        heading: 'Start here: a number that gets stuck',
        num: '1',
        cards: [
          {
            title: 'The bimbel story',
            html: String.raw`
<p>A principal in Depok asks 200 Grade-6 students one question: <i>"How many hours of <b>bimbel</b>
(private tutoring) do you do each week?"</i> Many write <b>0</b>. Some write 2, 4, or 10. A few write 20 —
the biggest package any local bimbel sells. She wants to know: <b>does family income predict tutoring
hours?</b> She runs an ordinary regression (OLS) and gets a clean-looking number. Her friend says:
<i>"That's wrong — you have a censoring problem."</i> Is the friend right? This week is the answer.</p>
<p>The thing that makes this data special is the outcome <code>hours</code>. It is a number, but its range
is <b>squeezed</b>: it can't go below 0, and in this sample it can't go above 20. A big clump of students
sit exactly on those edges. We call any outcome like this a
<span class="key">limited dependent variable</span> — a continuous variable whose range is constrained, so
many observations land exactly on a boundary (most often <b>0</b>).</p>
<p>You meet this everywhere once you look:</p>
<ul>
  <li><b>Spending</b> on tobacco, durable goods, or charity — lots of households spend exactly 0.</li>
  <li><b>Hours worked</b> per week — lots of people work 0.</li>
  <li><b>Test scores with a ceiling</b> (aptitude capped at 800) or <b>top-coded income</b> ("Rp50jt+").</li>
</ul>`
          },
          {
            title: 'A zero hides two completely different stories',
            html: String.raw`
<p>Here is the key idea that everything else builds on. When you see a <b>0</b>, you actually can't tell
which of two things happened — and they are very different:</p>
<table>
  <tr><th></th><th>"Won't" — a corner solution</th><th>"Can't" — censoring</th></tr>
  <tr><td>What the 0 means</td><td>The person <b>genuinely wants 0</b>. Zero is their best choice.</td><td>The person <b>would have a positive value</b>, but we can't see it.</td></tr>
  <tr><td>Bimbel example</td><td>A student who rationally does 0 hours — for them the benefit isn't worth the cost.</td><td>A student who'd love tutoring but the family can't afford it, so we record 0.</td></tr>
</table>
<p>So a single outcome is really driven by <b>two decisions at once</b>, and a good model has to respect
both:</p>
<div class="formula">extensive margin  =  <b>WHETHER</b> hours &gt; 0   (do you participate at all?)
intensive margin  =  <b>HOW MUCH</b>, once hours &gt; 0   (if you do, how many hours?)</div>
<p>Hold on to those two words — <b>extensive</b> (in or out) and <b>intensive</b> (how much) — because the
whole Tobit story, and next week's Heckman story, is about how these two margins relate.</p>
<div class="note">💡 The Tobit model's big assumption is that <b>one single process</b> — the same $\beta$ and
the same $\sigma$ — drives <b>both</b> margins. That makes it simple and powerful, but as you'll see, it's
also its main weakness.</div>`
          }
        ]
      },
      {
        heading: 'Why can\'t we just run OLS?',
        num: '2',
        cards: [
          {
            title: 'OLS quietly treats a fake number as if it were real',
            html: String.raw`
<p>OLS assumes it can see the <b>full range</b> of the outcome and that the average of $y$ moves in a
straight line with $x$. But our outcome is squashed at the edges, so a big pile of points sits exactly on
0 (or on 20). When OLS draws its straight line through that pile-up, three things go wrong:</p>
<ul>
  <li><b>The slope gets flattened (attenuation bias).</b> The clump of zeros acts like an anchor that drags
      the line down. So OLS reports a relationship that looks <b>weaker than it truly is</b> — the slope is
      biased <b>toward zero</b>. Crucially, this does <b>not</b> go away with more data: the model itself is
      wrong, so collecting 10,000 students won't fix it.</li>
  <li><b>The error spread changes across the line (heteroskedasticity).</b> Near the boundary almost
      everything is stuck at 0 (little spread); far from it the points fan out (lots of spread). So the
      standard errors OLS prints are wrong, and your t-stats can't be trusted.</li>
  <li><b>It predicts impossible values.</b> OLS can happily predict $\hat y = -3$ hours, which is meaningless
      when hours can't be negative.</li>
</ul>
<div class="note">💡 "Fine — I'll just delete the zeros and run OLS on the students who actually do bimbel."
That's <b>also</b> broken, and in a sneakier way. By keeping only $y>0$ you've created a <b>truncated</b>
sample, and in that sample the error no longer averages to zero. That's exactly Week 9's topic — and it's
the bridge to sample selection in Week 10.</div>
<div class="tip">📝 Exam one-liner: <i>"OLS treats each censored value as if it were the true value, which
injects measurement error and pulls the slope toward zero — biased and inconsistent for $(\beta,\sigma)$,
and not fixed by a bigger sample."</i></div>`
          }
        ]
      },
      {
        heading: 'The fix: model the number you WISH you could see',
        num: '3',
        cards: [
          {
            title: 'The latent variable y* — the "true desire"',
            html: String.raw`
<p>Tobit's trick is to imagine the number behind the number. Picture each student's <b>true desired</b>
tutoring hours if nothing stopped them — call it $y^*$ (read "y-star"). It's the
<span class="key">latent variable</span>: latent just means <b>hidden / not directly observed</b>. We let
$y^*$ follow a perfectly ordinary regression with a normal error:</p>
<div class="formula">$$ y_i^* = x_i'\beta + \varepsilon_i, \qquad \varepsilon_i \sim N(0,\sigma^2) $$</div>
<p>The catch is the world won't let us see $y^*$ directly. We only see what the student actually does, and
that is <b>chopped off at the boundary</b>. For a floor at 0:</p>
<div class="formula">$$ y_i = \begin{cases} y_i^* & \text{if } y_i^* > 0 \quad(\text{they do what they want})\\[3pt] 0 & \text{if } y_i^* \le 0 \quad(\text{the corner: we just record 0})\end{cases} $$</div>
<p>In words: <b>if the true desire is positive, we see it; if it's zero or "negative", we see a flat 0.</b>
A "negative desire" sounds odd, but it just means someone who would actively avoid the activity (hates
tobacco, has no use for tutoring). Mapping all those negatives to 0 is what we mean by
<span class="key">censoring</span> — the value is capped, not missing.</p>
<p>This is why Tobit is also called the <b>censored regression model</b>. Censoring at the <b>top</b>
(a ceiling like 800), at some value other than 0, or at <b>both</b> ends at once (interval censoring) all
work the same way — you just tell Stata where the limits are.</p>`
          },
          {
            title: 'Tobit and Probit are twins — same skeleton, different eyes',
            html: String.raw`
<p>If "latent variable" rings a bell, it should — <b>Probit</b> uses the exact same idea. Both start from
$y^* = x'\beta + \varepsilon$. The only difference is <b>what part of $y^*$ we get to observe</b>:</p>
<table>
  <tr><th>Question</th><th>Tobit</th><th>Probit</th></tr>
  <tr><td>What do we see?</td><td>the <b>amount</b> $y$ whenever $y^*>0$ (else 0)</td><td>only a <b>0/1</b>: did $y^*>0$ or not?</td></tr>
  <tr><td>Outcome type</td><td>continuous, with a clump at 0</td><td>binary (yes/no)</td></tr>
  <tr><td>The error</td><td>$\varepsilon\sim N(0,\sigma^2)$ — $\sigma$ is <b>estimated</b></td><td>$\varepsilon\sim N(0,1)$ — $\sigma$ is <b>fixed to 1</b></td></tr>
  <tr><td>Real example</td><td>How much do you spend on cigarettes?</td><td>Do you smoke, yes or no?</td></tr>
</table>
<p>Why can Tobit estimate $\sigma$ but Probit can't? Because Tobit gets to <b>see actual magnitudes</b>
(35 hours vs 2 hours), which reveals the scale of the spread. Probit only sees a yes/no, so the scale is
invisible and has to be pinned to 1 by convention. That's a small but very examinable difference.</p>`
          }
        ]
      },
      {
        heading: 'How Tobit is actually estimated (MLE)',
        num: '4',
        cards: [
          {
            title: 'The likelihood splits into a "regression part" and a "probit part"',
            html: String.raw`
<p>We can't use OLS, so Tobit is fit by <span class="key">Maximum Likelihood Estimation (MLE)</span>. The
idea of MLE is simple: <b>pick the $(\beta,\sigma)$ that make the data we actually saw most likely.</b> The
clever bit is that the two kinds of observations contribute in two different ways:</p>
<div class="formula">$$ \ln L(\beta,\sigma)=\underbrace{\sum_{y_i>0}\ln\Big[\tfrac{1}{\sigma}\phi\!\Big(\tfrac{y_i-x_i'\beta}{\sigma}\Big)\Big]}_{\textbf{positives: a normal density}}\; +\;\underbrace{\sum_{y_i=0}\ln\Phi\!\Big(\tfrac{-x_i'\beta}{\sigma}\Big)}_{\textbf{zeros: a probit-style probability}} $$</div>
<ul>
  <li>For a student with <b>positive</b> hours, we know the exact value, so they contribute the usual
      bell-curve density $\phi$ — exactly like an ordinary regression.</li>
  <li>For a student with <b>0</b> hours, we only know their desire was $\le 0$, so they contribute the
      <b>probability</b> of that, $\Phi(-x'\beta/\sigma)$ — which is precisely a Probit's contribution.
      ($\phi$ = the bell curve; $\Phi$ = the area under it up to a point.)</li>
</ul>
<p>So Tobit literally is "a regression glued to a probit," held together by <b>one</b> shared $\beta$.</p>
<div class="note">💡 That single shared $\beta$ is the <b>single-index restriction</b> again. Both the chance of
participating, $P(y>0)=\Phi(x'\beta/\sigma)$, and the amount once you participate, $E[y\mid y>0]$, rise
together with $x'\beta$ — so one coefficient is forced to push <b>both</b> margins the <b>same</b> way. If
you think participation and amount are driven by different forces, Tobit is the wrong tool: switch to the
<b>Heckman</b> model (Week 10) or <b>Cragg's double-hurdle / two-part model</b>, which give the two
decisions their own equations.</p>
<div class="tip">📝 Big exam contrast: if the errors are non-normal or heteroskedastic, OLS only loses
<i>efficiency</i> — but <b>Tobit MLE becomes inconsistent</b>, because the whole likelihood is built on
normality + constant variance. Tobit buys you a lot, but it asks for stronger assumptions in return.</div>`
          }
        ]
      },
      {
        heading: 'Reading a Tobit coefficient (the #1 exam trap)',
        num: '5',
        cards: [
          {
            title: 'The raw coefficient is NOT the effect on what you observe',
            html: String.raw`
<p>This single point earns more marks than anything else this week, so go slowly. A Tobit coefficient
$\beta_j$ is the effect of $x_j$ on the <b>latent</b> $y^*$ — the hidden "true desire" — <b>not</b> on the
observed, capped $y$. If you write "a 1-point higher math score raises the observed aptitude by 5.91," you
lose marks. The correct sentence is "...raises the <b>latent</b> aptitude $y^*$ by 5.91."</p>
<p>To say something about the number you actually observe, you need a <b>marginal effect</b>, and there are
<b>three</b> of them — three different questions:</p>
<table>
  <tr><th>Effect on…</th><th>The question it answers</th><th>Value (left-censored at 0)</th></tr>
  <tr><td><b>$E[y^*]$</b> — the latent</td><td>"If there were no limit at all, what's the effect?"</td><td>just $\beta_j$</td></tr>
  <tr><td><b>$E[y\mid x]$</b> — the observed (everyone)</td><td>"Across all students, including the zeros, what's the average effect?" <i>(the policy number)</i></td><td>$\beta_j\,\Phi(z)$</td></tr>
  <tr><td><b>$E[y\mid x,\,y>0]$</b> — the doers only</td><td>"Among students who already do bimbel, what's the effect?"</td><td>$\beta_j[1-z\lambda(z)-\lambda(z)^2]$</td></tr>
</table>
<p>where $z=x'\beta/\sigma$ and $\lambda(z)=\phi(z)/\Phi(z)$. Don't panic at the formulas — the point is
that both observed-effects are the latent $\beta_j$ <b>shrunk</b> by a factor between 0 and 1. Intuitively:
the effect on what you <i>see</i> is gentler than the effect on the hidden desire, because some of the push
gets "absorbed" by people stuck at the boundary.</p>
<div class="note">💡 Good news: when only a <b>few</b> observations are censored (e.g. 17 out of 200, about
8.5%), $\Phi(z)$ is close to 1, so all three numbers are <b>nearly the same</b>. Censoring barely bites, and
you can read the coefficient almost like an OLS slope. The trap only bites hard when lots of obs sit at the
limit.</div>
<div class="tip">📝 In Stata you'd get these three after <code>tobit</code> with <code>margins</code> and the
<code>xb</code> / <code>ystar()</code> / <code>e()</code> options — but for the exam you mostly need to
<b>read</b> them and <b>say the right sentence</b>, which is exactly what the Read Data cases drill.</div>`
          }
        ]
      }
    ],

    /* ============================ FORMULAS ============================ */
    formulas: [
      {
        cards: [
          {
            title: 'The whole model in one box',
            html: String.raw`
<div class="formula">Hidden desire:    $y_i^* = x_i'\beta + \varepsilon_i,\quad \varepsilon\sim N(0,\sigma^2)$
What we observe (floor at 0):  $y_i=\max(0,\,y_i^*)$
Chance of a zero:  $P\{y_i=0\}=\Phi(-x_i'\beta/\sigma)=1-\Phi(x_i'\beta/\sigma)$</div>
<p>Read $\Phi(\cdot)$ as "the probability the bell curve is below this point." The ratio $\beta/\sigma$
behaves like a probit coefficient for the <i>participation</i> decision.</p>`
          },
          {
            title: 'The inverse Mills ratio & the two observed means',
            html: String.raw`
<p>The key object is the <span class="key">inverse Mills ratio (IMR)</span>. Let $z=x'\beta/\sigma$:</p>
<div class="formula">$$\boxed{\ \lambda(z)=\dfrac{\phi(z)}{\Phi(z)}\ }\qquad(\text{inverse Mills ratio})$$</div>
<p>$\phi$ = the bell-curve height (pdf), $\Phi$ = the area under it (cdf). The same $\lambda$ runs the Tobit
means below, the truncated mean (Week 9) and the Heckman correction (Week 10) — learn it here once.</p>
<div class="formula">Among the doers:   $E[y\mid x,\,y>0]=x'\beta+\sigma\,\lambda(z)$
Across everyone:    $E[y\mid x]=\Phi(z)\,x'\beta+\sigma\,\phi(z)$</div>
<p>Differentiating gives the <b>three marginal effects</b>:</p>
<div class="formula">latent:         $\partial E[y^*]/\partial x_j=\beta_j$
unconditional ($E[y]$):  $\partial E[y\mid x]/\partial x_j=\beta_j\,\Phi(z)$   (McDonald–Moffitt)
conditional ($E[y\mid y>0]$): $\partial E[y\mid x,y>0]/\partial x_j=\beta_j\big[1-z\,\lambda(z)-\lambda(z)^2\big]$</div>
<p>Both observed effects are $\beta_j$ scaled by a number in $(0,1)$; with little censoring they ≈ $\beta_j$.
($\sigma$ is identified because Tobit sees magnitudes — Probit normalises $\sigma=1$.)</p>`
          },
          {
            title: 'The log-likelihood',
            html: String.raw`
<div class="formula">$\ln L=\displaystyle\sum_{y_i>0}\Big[-\ln\sigma+\ln\phi\!\big(\tfrac{y_i-x_i'\beta}{\sigma}\big)\Big]+\sum_{y_i=0}\ln\Phi\!\big(\tfrac{-x_i'\beta}{\sigma}\big)$</div>
<p>First sum = the regression (density) part for the values we see; second sum = the probit (probability)
part for the zeros. For a <b>ceiling</b> at $UL$, the censored term becomes
$\sum_{y_i=UL}\ln\Phi\!\big((x_i'\beta-UL)/\sigma\big)$.</p>`
          }
        ]
      }
    ],

    /* ============================ READ DATA ============================ */
    readdata: [
      {
        heading: 'Read the output — hover or tap any highlighted number',
        num: 'R',
        cards: [
          {
            title: 'Case 1 — Warm-up: how to read ANY regression table',
            html: String.raw`
<span class="rd-tag">Case 1 · learn the layout</span>
<p>Before Tobit, let's make sure you can read a plain regression. <b>The scenario:</b> we have 500 workers
and we regress monthly income (in Rp '000) on years of <code>education</code> and years of
<code>experience</code>. This is ordinary OLS. Hover (or tap on a phone) each
<span style="color:var(--accent);font-weight:700;border-bottom:1px dashed">highlighted</span> number to see
what it means — these five things (Coef, Std. err., t, P&gt;|t|, R²) appear in <b>every</b> table you'll
read this semester.</p>` + S({
              cmd: 'reg income education experience',
              title: 'Linear regression (OLS)',
              info: [
                ['Number of obs', '500'],
                ['F(2, 497)', '128.4'],
                ['Prob > F', '0.0000', '<b>Overall model p-value.</b> Tests "are the regressors <i>jointly</i> useless?" Here p&lt;0.05 ⇒ at least one matters ⇒ the model is jointly significant.'],
                ['R-squared', '0.341', '<b>R² = 0.341.</b> 34.1% of the variation in income is explained by education + experience together. The other ~66% is everything else (luck, ability, sector…).']
              ],
              dep: 'income',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'education', c: ['320.5', '28.1', '11.40', '0.000', '265.3   375.7'],
                  tips: { v: '<b>education</b> — a predictor (years of schooling).', 0: '<b>Coefficient = 320.5.</b> Each extra year of education is associated with Rp 320,500 higher monthly income, <i>holding experience constant</i> (ceteris paribus).', 1: '<b>Std. err. = 28.1.</b> How precise the estimate is — smaller means more precise. It is the building block of the t-stat: t = Coef ÷ SE.', 2: '<b>t-stat = 11.40</b> = 320.5 ÷ 28.1. Rule of thumb: <b>|t| &gt; 1.96 ⇒ significant at 5%.</b> 11.4 is huge ⇒ very strong.', 3: '<b>p-value = 0.000</b> (i.e. &lt;0.001). The chance of seeing a t this big if the true effect were zero. p &lt; 0.05 ⇒ statistically significant ⇒ reject "education has no effect".', 4: '<b>95% confidence interval [265, 376].</b> We\'re 95% confident the true coefficient lies in here. It excludes 0 ⇒ significant (same conclusion as the t-test).' } },
                { v: 'experience', c: ['180.2', '22.0', '8.19', '0.000', '137.0   223.4'],
                  tips: { 0: '<b>180.2:</b> each extra year of experience ⇒ ~Rp 180,200 more income, ceteris paribus. Smaller than the education effect (320.5).' } },
                { v: '_cons', c: ['1500.0', '410.5', '3.65', '0.000', '693   2307'],
                  tips: { v: '<b>_cons</b> = the intercept: predicted income for someone with 0 education and 0 experience. Often not economically meaningful, but it anchors the line.' } }
              ]
            })
          },
          {
            title: 'Case 2 — A real Tobit: the aptitude ceiling',
            html: String.raw`
<span class="rd-tag">Case 2 · UCLA apt data, ceiling = 800</span>
<p><b>The scenario:</b> 200 students; <code>apt</code> is an aptitude score that <b>cannot exceed 800</b>
(the test maxes out there), and 17 students hit exactly 800. We regress <code>apt</code> on reading
(<code>read</code>) and math (<code>math</code>) using right-censored Tobit. Now the trap matters: every
coefficient is an effect on the <b>latent</b> score $y^*$, not the capped score. Hover each number.</p>` + S({
              cmd: 'tobit apt read math, ul(800)',
              title: 'Tobit regression',
              info: [
                ['Number of obs', '200'],
                ['LR chi2(2)', '188.97', '<b>The Tobit version of the F-test.</b> Tests whether read + math are <i>jointly</i> useful. It compares the full model to one with no regressors. Big value ⇒ they matter.'],
                ['Prob > chi2', '0.0000', 'p &lt; 0.05 ⇒ the model as a whole is highly significant.'],
                ['Pseudo R2', '0.0832', '<b>NOT</b> the OLS R². A rough MLE fit measure — don\'t interpret it as "% explained". Low pseudo-R² is normal for Tobit; ignore the temptation to over-read it.']
              ],
              dep: 'apt',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'read', c: ['2.6979', '.6132', '4.40', '0.000', '1.489   3.907'],
                  tips: { v: '<b>read</b> — reading score.', 0: '<b>2.70 = effect on the LATENT aptitude $y^*$</b>, NOT the observed capped score. Holding math fixed, +1 reading point ⇒ +2.70 in underlying aptitude, ceteris paribus. <b>This is the #1 Tobit exam trap</b> — never call it the effect on the observed score.', 2: '<b>t = 4.40</b> = 2.698 ÷ 0.613. |t| &gt; 1.96 ⇒ significant at 5%.', 3: '<b>p = 0.000:</b> reject "reading doesn\'t matter".' } },
                { v: 'math', c: ['5.9145', '.7012', '8.43', '0.000', '4.532   7.297'],
                  tips: { 0: '<b>5.91 on the latent $y^*$.</b> Compare to read\'s 2.70 — math matters about <b>twice</b> as much as reading for latent aptitude.', 2: 't = 8.43, even stronger than reading.' } },
                { v: '_cons', c: ['209.56', '32.55', '6.44', '0.000', '145.4   273.8'],
                  tips: { v: 'The intercept of the latent equation.' } },
                '-',
                { v: '/sigma', c: ['65.68', '3.48', '', '', ''],
                  tips: { v: '<b>σ̂ = 65.68 = the estimated standard deviation of the error.</b> The fact that Tobit can <b>estimate</b> σ (whereas Probit fixes it to 1) is a classic exam point — Tobit sees magnitudes, Probit only sees 0/1.' } }
              ],
              notes: [
                { t: '0 left-censored · 17 right-censored at apt = 800 · 183 uncensored',
                  tip: '<b>17 of 200 (8.5%) hit the 800 ceiling.</b> This single number tells you two things: (1) OLS would be biased (it ignores the ceiling), and (2) since 8.5% is small, the three marginal effects (latent / observed / among-doers) will be <b>numerically close</b> here.' }
              ]
            })
          },
          {
            title: 'Case 3 — OLS vs Tobit: watch the slope shrink',
            html: String.raw`
<span class="rd-tag">Case 3 · same data, two estimators</span>
<p><b>The scenario:</b> same aptitude data, run <b>both</b> ways and line up the coefficients. This is the
picture of <b>attenuation bias</b>: because OLS ignores the 800 ceiling, its slopes are pulled
<b>toward zero</b> — smaller than Tobit's. Hover the numbers to compare.</p>` + S({
              title: 'Coefficients: OLS vs Tobit (apt on read, math)',
              dep: 'apt',
              cols: ['OLS', 'Tobit (ul 800)'],
              rows: [
                { v: 'read', c: ['2.557', '2.698'],
                  tips: { 0: '<b>OLS read = 2.56.</b> Smaller than Tobit\'s 2.70 — the ceiling pile-up drags the OLS slope down (attenuation).', 1: '<b>Tobit read = 2.70</b> (effect on latent $y^*$). Bigger because Tobit corrects for the censoring.' } },
                { v: 'math', c: ['5.383', '5.914'],
                  tips: { 0: '<b>OLS math = 5.38</b> — again attenuated.', 1: '<b>Tobit math = 5.91</b> — the corrected, larger effect on latent aptitude.' } }
              ],
              notes: [
                { t: 'OLS slopes are biased toward 0; Tobit recovers the latent-model effect.',
                  tip: 'Report rule: never present the Tobit coefficient as "the effect on observed apt" — it\'s the effect on latent $y^*$. Add a marginal-effect line if you need the effect on the observed score.' }
              ]
            })
          }
        ]
      }
    ],

    /* ============================ QUIZ ============================ */
    quiz: [
      {
        type: 'concept',
        q: 'Back to the principal in Depok: many students report 0 bimbel hours, a few report the 20-hour maximum, and she ran OLS of hours on family income. Is her friend right that OLS is "wrong", and what exactly breaks?',
        answer: [
          'Friend is right. The outcome is limited — a floor at 0 (non-participants / corner solutions) and a ceiling at 20 (the package cap, i.e. right-censoring).',
          'OLS draws a straight line through a distribution with big clumps at 0 and 20, so it misreads the relationship: the slope is biased TOWARD zero (attenuation), the standard errors are wrong (heteroskedasticity), and it can predict impossible values (<0 or >20).',
          'This bias does NOT shrink with more data — it is a wrong-model problem, not a small-sample problem.',
          'Fix: an interval-censored Tobit, tobit hours income, ll(0) ul(20).'
        ],
        tip: 'Name the bias (toward zero) AND say more data won\'t cure it.'
      },
      {
        type: 'concept',
        q: 'A classmate reads a Tobit and writes: "a 1-point higher math score raises a student\'s observed aptitude by 5.91 points." Fix the sentence.',
        answer: [
          'Wrong because 5.91 is the effect on the LATENT aptitude y*, not the observed (capped) score.',
          'Correct: holding reading constant, a 1-point higher math score is associated with a 5.91-point increase in latent aptitude y*, ceteris paribus.',
          'To talk about the observed score you need a marginal effect on E[y] (the unconditional ME, β·Φ(z)), which is a bit smaller than 5.91.'
        ],
        tip: 'Raw Tobit coefficient = effect on y*; observed-y effect needs a marginal effect.'
      },
      {
        type: 'concept',
        q: 'Why can Tobit estimate σ while Probit has to fix σ = 1?',
        answer: [
          'Probit only sees a 0/1 outcome, so the scale of y* is invisible — you could blow up β and σ together and the 0/1 pattern wouldn\'t change. So σ is normalised to 1.',
          'Tobit sees the actual amount whenever y>0, which reveals the scale of the spread, so σ is identified and estimated.',
          'That is why /sigma appears in Tobit output but never in Probit output.'
        ]
      },
      {
        type: 'scenario',
        q: 'Only 8 of 250 firms hit a regulatory emissions cap. Will the three Tobit marginal effects differ much, and which one would you quote to a regulator?',
        answer: [
          'With only ~3% censored, Φ(z) is close to 1, so the latent, unconditional (E[y]) and conditional (E[y|uncensored]) effects are all nearly equal.',
          'Quote the UNCONDITIONAL marginal effect on E[y]: the regulator cares about all firms, including the chance of being pushed to the cap.',
          'Use the conditional effect only if the question is explicitly restricted to firms below the cap.'
        ],
        tip: 'Few censored ⇒ the three MEs nearly coincide; pick by the policy question.'
      },
      {
        type: 'concept',
        q: 'In one sentence each, why are BOTH (a) OLS on the full sample and (b) OLS after dropping the zeros inconsistent for the latent parameters?',
        answer: [
          '(a) Full-sample OLS treats censored zeros as if they were true values, misspecifying the curved relationship and flattening the slope toward zero — inconsistent.',
          '(b) Dropping the zeros makes a truncated, non-random sample where the error no longer averages zero among the survivors (E[ε|y>0]≠0), so the error correlates with x — also inconsistent (this is the door to truncated regression and Heckman).',
          'Only the Tobit MLE, which uses the censoring probability for the zeros and the density for the positives, is consistent for (β, σ).'
        ]
      }
    ]
  };
})();
