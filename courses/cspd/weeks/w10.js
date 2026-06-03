/* ============================================================================
   CSPD · Week 10 — Sample Selection & the Heckman Model (Tobit II)
   Final-exam Topic 2. Rewritten flowing/plain; Read Data cases use the ACTUAL
   2024 exam Heckman table (womenwk). Sources: Sample Selection deck, Heckman
   worksheet, Salinan Week 10 + heckman.do, past final Q1, Wooldridge 17.5.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w10 = {
    id: 'w10',
    label: 'Week 10',
    title: 'Sample Selection & the Heckman Model',
    subtitle: 'Why selected samples lie, the inverse Mills ratio fix, exclusion restrictions, and ρ',

    notes: [
      {
        heading: 'The problem: we only see the people who said yes',
        num: '1',
        cards: [
          {
            title: 'Wages exist for everyone, but we only observe workers',
            html: String.raw`
<p>We want to know how education and age affect <b>wages</b>. Easy enough — except wages are only recorded
for people who <b>work</b>. Someone who chose not to take a job has no wage in our data. So our sample isn't
a random slice of the population; it's the slice that <b>selected themselves in</b> by deciding to work.</p>
<p>Why is that dangerous? Because the decision to work isn't random — it's tied to things we <b>can't see</b>
(motivation, ability, how much someone values staying home). And those same hidden things also affect the
<b>wage</b>. When the rule for "who appears in my data" is linked to the very outcome I'm studying through
unobservables, we call it <span class="key">incidental truncation</span>: the wage is missing not because of
the wage itself, but because of a <b>separate decision</b> (to work) that's entangled with it.</p>
<div class="note">💡 Not every gap is a selection problem. Before reaching for Heckman, classify the
missingness — this is a favourite exam set-up:</div>
<table>
  <tr><th>Why is the data missing?</th><th>Is OLS OK?</th><th>What to do</th></tr>
  <tr><td><b>Pure chance</b> — e.g. a phone didn't connect on the first call.</td><td>Yes (just less data).</td><td>Nothing special.</td></tr>
  <tr><td><b>Depends only on things you measured</b> (observed $x$).</td><td>Yes, if you control for those $x$.</td><td>Add controls.</td></tr>
  <tr><td><b>Depends on UNOBSERVABLES linked to $y$</b> (incidental truncation).</td><td><b>No — biased.</b></td><td><b>Heckman.</b></td></tr>
</table>
<p>(Panel dropout — <b>attrition</b> — is the same idea: harmless if people leave for random reasons, biasing
if they leave for reasons tied to the outcome. More on that in Week 13.)</p>`
          },
          {
            title: 'Why Tobit isn\'t enough this time',
            html: String.raw`
<p>You might think "limited outcome → use Tobit." But Tobit forced <b>one</b> coefficient to drive both
"do you participate?" and "how much?" — in the <b>same direction</b>. Real life often breaks that:</p>
<ul>
  <li><b>Age and wages:</b> more experience pushes wages <b>up</b>, but age discrimination / retirement push
      the chance of <b>working down</b>. Same variable, opposite signs on the two margins — Tobit can't
      represent that.</li>
  <li><b>Children and vacations:</b> more kids make a family <b>less</b> likely to take a holiday, but
      <b>if</b> they do, it costs <b>more</b>. Again, the two margins disagree.</li>
</ul>
<p>The <span class="key">Heckman model</span> (also called <b>Tobit II</b>) fixes this by using <b>two
separate equations with their own coefficients</b>: one for the <b>selection</b> decision (work or not) and
one for the <b>outcome</b> (the wage, if you work). That freedom is the whole point.</p>`
          }
        ]
      },
      {
        heading: 'The fix: two equations + the inverse Mills ratio',
        num: '2',
        cards: [
          {
            title: 'A selection equation and an outcome equation, linked by ρ',
            html: String.raw`
<div class="formula">Selection (a probit):  $s_i^*=w_i'\gamma+u_i,\qquad s_i=1$ if $s_i^*>0$ (works), else 0
Outcome (the wage):    $y_i=x_i'\beta+\varepsilon_i$,  observed only if $s_i=1$
with $(u_i,\varepsilon_i)$ jointly normal, correlation $\rho$.</div>
<p>The first equation models <b>who shows up</b> (the work decision). The second is the wage equation we
actually care about. The whole selection problem lives in <b>one number</b>, $\rho$ — the correlation
between the two equations' errors. If $\rho=0$, the unobservables driving "who works" have nothing to do
with wages, and ordinary OLS on workers is fine. If $\rho\ne 0$, they're entangled, and OLS is biased.</p>`
          },
          {
            title: 'Why OLS on workers lies — and how λ rescues it',
            html: String.raw`
<p>Here's the heart of it, in slow motion. Look only at workers and ask what their error averages to. It is
<b>not</b> zero — selected workers are a special group:</p>
<div class="formula">$$ E[y_i\mid x_i,\ \text{works}]=x_i'\beta+\underbrace{\rho\,\sigma_\varepsilon}_{\text{a number}}\cdot\,\lambda(w_i'\gamma),\qquad \lambda(z)=\frac{\phi(z)}{\Phi(z)} $$</div>
<p>$\lambda(\cdot)$ is the <span class="key">inverse Mills ratio (IMR)</span> — the same "pull of a chopped
tail" from last week. The message: among workers there's an <b>extra term</b> in the wage that OLS knows
nothing about. So when OLS fits wages on $x$ alone, it shoves that extra term into the coefficients,
contaminating them — classic <b>omitted-variable bias</b>.</p>
<p>The fix is almost embarrassingly neat: <b>just add $\hat\lambda$ as one more regressor.</b> Once $\lambda$
is in the equation, it soaks up that extra term, and the remaining $\hat\beta$ come out clean (consistent).
That's the entire Heckman idea in one move.</p>
<div class="note">💡 Intuition for $\lambda$: it measures how hard selection is "pulling." When almost
everyone is selected (the work index $z$ is large, $\Phi\to 1$), $\lambda\to 0$ — the correction fades and
Heckman ≈ OLS. When only a few are selected, $\lambda$ is large and the correction really matters.</div>
<div class="tip">📝 Two different things are both called "lambda" — don't mix them up. The <b>regressor</b>
$\lambda_i$ (the IMR value) is typically ~0.3–0.8 per person. The <b>coefficient</b> Stata prints as
<code>/mills lambda</code> is $\rho\sigma_\varepsilon$ and can be a big number (you'll see 4.00 in the exam
table). The coefficient being significant is what flags selection bias.</div>`
          }
        ]
      },
      {
        heading: 'The make-or-break ingredient: the exclusion restriction',
        num: '3',
        cards: [
          {
            title: 'You need a variable that moves selection but not the wage',
            html: String.raw`
<p>For Heckman to be trustworthy, you need at least one <b>exclusion restriction</b>: a variable that goes
<b>into the selection equation</b> (it affects whether you work) but is <b>left out of the wage equation</b>
(it has no direct effect on the wage offer). The classic choice in a women's-wage study is
<b>number of young children</b>:</p>
<div class="formula">Wage (outcome):   education, experience, age
Work (selection): education, experience, age, <b>+ number of children</b></div>
<p>The argument: kids strongly shift the <b>decision to work</b> (childcare costs, time at home) but
shouldn't directly change the <b>wage an employer offers</b>. Why do you need this? Technically Heckman is
"identified" just by the curve of $\lambda$ — but over most of its range $\lambda$ is nearly a straight
line, so $\hat\lambda$ becomes <b>almost a copy of the other $x$'s</b> (collinear), and the estimates get
shaky. A real exclusion restriction gives $\lambda$ something independent to latch onto.</p>
<div class="tip">📝 The exclusion restriction is <b>argued from theory, never tested by a regression</b>. The
credibility of a Heckman estimate lives or dies here. Good ones (children, distance to childcare) clearly
affect the decision but plausibly not the wage; bad ones (education, experience) belong in the wage equation
itself, so they can't be excluded.</div>`
          },
          {
            title: 'Two ways to estimate it, and how to test for selection',
            html: String.raw`
<p><b>Two estimators, same idea:</b></p>
<table>
  <tr><th></th><th>Two-step (Heckit)</th><th>MLE</th></tr>
  <tr><td>How</td><td>Step 1: probit of "work" → build $\hat\lambda$. Step 2: OLS of wage on $x$ <b>and</b> $\hat\lambda$.</td><td>Estimate both equations together by maximum likelihood.</td></tr>
  <tr><td>Pros/cons</td><td>Simple, robust, fast — but <b>less efficient</b>; SEs need a correction.</td><td><b>Efficient</b>; gives you $\rho,\sigma$ directly. Can be fussier to converge.</td></tr>
</table>
<p>The two usually give <b>almost identical coefficients</b>; MLE just has smaller standard errors.</p>
<p><b>Testing for selection bias</b> means testing $H_0:\rho=0$ ("no selection problem"):</p>
<ul>
  <li><b>MLE:</b> Stata reports <code>/athrho</code>; recover $\rho=\tanh(\text{athrho})$. The
      <b>LR test of independent equations</b> tests $\rho=0$.</li>
  <li><b>Two-step:</b> just test whether the coefficient on $\hat\lambda$ (<code>/mills lambda</code>) is 0.</li>
</ul>
<p><b>Reject</b> $H_0$ (small $p$) ⇒ real selection bias ⇒ report Heckman. <b>Fail to reject</b> ⇒ OLS is
fine and more efficient (and note: failing to reject could also just mean low power, not proof there's no
selection).</p>
<div class="note">💡 The <b>sign</b> of $\rho$ tells a story. $\rho>0$ means the hidden traits that make
someone more likely to work also push their wage <b>up</b> — so the workers we observe have higher unseen
wage potential than the average person, and naive OLS <b>overstates</b> the population's average wage.</div>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'The selection-corrected mean & the two-step',
            html: String.raw`
<div class="formula">Selection: $s_i^*=w_i'\gamma+u_i,\ s_i=\mathbf 1[s_i^*>0]$;  Outcome: $y_i=x_i'\beta+\varepsilon_i$ (seen iff $s_i{=}1$)
$(u_i,\varepsilon_i)$ bivariate normal, $\mathrm{Var}(u){=}1,\ \mathrm{Var}(\varepsilon){=}\sigma_\varepsilon^2,\ \mathrm{corr}{=}\rho$
$E[y\mid x,\ s{=}1] = x'\beta + \underbrace{\rho\,\sigma_\varepsilon}_{\beta_\lambda}\,\lambda(w'\gamma),\quad \lambda(z)=\dfrac{\phi(z)}{\Phi(z)}\ (\text{inverse Mills ratio})$</div>
<p><b>Heckman two-step</b> turns that identity into a recipe:</p>
<div class="formula">Step 1 (probit): get $\hat\gamma$, then $\hat\lambda_i=\dfrac{\phi(w_i'\hat\gamma)}{\Phi(w_i'\hat\gamma)}$
Step 2 (OLS on selected): $y_i = x_i'\beta + \beta_\lambda\,\hat\lambda_i + \text{error}$   ⇒ consistent $\hat\beta$</div>
<p>The coefficient on $\hat\lambda$ is $\beta_\lambda=\rho\,\sigma_\varepsilon$. Bias of omitting it is
proportional to $\rho\sigma_\varepsilon$; if $\rho=0$ then $\lambda$ drops out and OLS on the selected sample
is fine. (SEs from step 2 must be corrected because $\hat\lambda$ is a <i>generated</i> regressor.)</p>`
          },
          {
            title: 'Stata commands (two dialects)',
            html: String.raw`
<div class="formula">Two-step:  heckman y x1 x2, select(s = x1 x2 z) twostep
MLE:       heckman y x1 x2, select(s = x1 x2 z)
Recover rho:  athrho printed  ->  rho = tanh(athrho)
Manual lambda:  probit s w ; predict zb, xb ; gen lambda = normalden(zb)/normal(zb)</div>
<p>Here <code>z</code> is the exclusion restriction — in selection, NOT in the outcome.</p>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Read the output — these are the actual 2024 exam tables',
        num: 'R',
        cards: [
          {
            title: 'Case 1 — The OLS benchmark (and why it\'s biased)',
            html: String.raw`
<span class="rd-tag">Case 1 · womenwk · exam Table 1.1</span>
<p><b>The scenario:</b> 2,000 women; wage is observed for the <b>1,343 (67%)</b> who work. The researcher
first runs plain OLS of wage on education and age, using only the workers. It looks clean — but it's
<b>biased</b>, because working women aren't a random sample. Hover each number. (This is the exact table
from last year's final, Question 1.)</p>` + S({
              cmd: 'reg wage education age if work==1',
              title: 'Linear regression',
              info: [
                ['Number of obs', '1,343', '<b>Only 1,343, not 2,000.</b> The 657 non-working women have no wage and silently drop out — that\'s the selection problem hiding in plain sight.'],
                ['Prob > F', '0.0000'],
                ['R-squared', '0.2535', '25.4% of wage variation explained — but on a non-random sample, so the coefficients themselves are suspect.']
              ],
              dep: 'wage',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'education', c: ['.8966', '.0494', '18.15', '0.000', '.7997   .9935'],
                  tips: { 0: '<b>OLS education = 0.90.</b> Looks fine and significant — but compare it to the Heckman value (0.98) in Case 2: OLS is <b>too low</b> here, because it only sees working women (who tend to have higher unseen wage potential).', 2: 't = 18.15 — very precise, but precision doesn\'t cure bias.' } },
                { v: 'age', c: ['.1466', '.0189', '7.76', '0.000', '.1095   .1836'],
                  tips: { 0: '<b>OLS age = 0.15.</b> Heckman will push this up to 0.21 — OLS understates it.' } },
                { v: '_cons', c: ['6.0849', '.8793', '6.92', '0.000', '4.360   7.810'] }
              ]
            })
          },
          {
            title: 'Case 2 — The Heckman table: the four numbers to circle',
            html: String.raw`
<span class="rd-tag">Case 2 · womenwk · exam Table 1.2</span>
<p><b>The scenario:</b> the same problem done right — a Heckman two-step. It has <b>two blocks</b>: the
<b>wage</b> equation (what we want) and the <b>select</b> equation (the probit for "does she work?"), plus
the <b>/mills lambda</b>, <b>rho</b> and <b>sigma</b> at the bottom. The four things examiners ask about are
highlighted. Hover each.</p>` + S({
              cmd: 'heckman wage education age, select(work = married children education age)',
              title: 'Heckman selection model — two-step',
              info: [
                ['Number of obs', '2,000', '<b>Now all 2,000</b> — Heckman uses the non-workers (via the selection equation), unlike OLS which only used 1,343.'],
                ['Selected', '1,343'],
                ['Nonselected', '657'],
                ['Wald chi2(2)', '442.54', 'Joint significance of the wage equation.']
              ],
              dep: '',
              cols: ['Coefficient', 'Std. err.', 'z', 'P>|z|', '[95% conf. interval]'],
              rows: [
                { group: 'wage' },
                { v: 'education', c: ['.9825', '.0539', '18.23', '0.000', '.8769   1.088'],
                  tips: { 0: '<b>0.98 = the selection-corrected return to education.</b> +1 year of education ⇒ wage higher by ~0.98, sig at 1%, ceteris paribus. Bigger than OLS\'s 0.90 (Case 1) — OLS understated it.', 2: 'z = 18.23 (MLE prints z, same rule as t).' } },
                { v: 'age', c: ['.2119', '.0221', '9.61', '0.000', '.1687   .2551'],
                  tips: { 0: '<b>0.21</b> — vs OLS\'s 0.15. Again the correction pushes it up.' } },
                { v: '_cons', c: ['.7340', '1.2483', '0.59', '0.557', '-1.71   3.18'],
                  tips: { 3: '<b>p = 0.557 ⇒ the constant is NOT significant</b> — fine, the intercept often isn\'t the interesting part.' } },
                { group: 'select' },
                { v: 'married', c: ['.4309', '.0742', '5.81', '0.000', '.285   .576'],
                  tips: { 0: '<b>In the SELECTION equation:</b> married women are more likely to WORK (this is the probit for participation, NOT a wage effect). It is an <b>exclusion restriction</b> — in selection, excluded from wage.' } },
                { v: 'children', c: ['.4473', '.0287', '15.56', '0.000', '.391   .504'],
                  tips: { 0: '<b>Trap:</b> this is the effect of children on the PROBABILITY OF WORKING, not on wages. (In this synthetic dataset more children ⇒ more likely to work; real Indonesian data usually reverses this.) Also an exclusion restriction.' } },
                { v: 'education', c: ['.0584', '.0110', '5.32', '0.000', '.037   .080'] },
                { v: 'age', c: ['.0347', '.0042', '8.21', '0.000', '.026   .043'] },
                { v: '_cons', c: ['-2.4674', '.1926', '-12.81', '0.000', '-2.84  -2.09'] },
                { group: '/mills' },
                { v: 'lambda', c: ['4.0016', '.6065', '6.60', '0.000', '2.813   5.190'],
                  tips: { 0: '<b>λ coefficient = 4.00, and it\'s SIGNIFICANT (p=0.000).</b> This is the smoking gun: a significant lambda means selection IS biasing OLS ⇒ you should report Heckman, not OLS. (This 4.00 is the coefficient ρ·σ, not the per-person IMR value.)', 3: 'p = 0.000 ⇒ reject "no selection" ⇒ Heckman is needed.' } },
                '-',
                { v: 'rho', c: ['0.6728', '', '', '', ''],
                  tips: { v: '<b>ρ = 0.67 > 0:</b> the hidden traits that raise the chance of working also raise wages. So observed workers have higher unseen wage potential ⇒ naive OLS overstates the population\'s mean wage.' } },
                { v: 'sigma', c: ['5.9474', '', '', '', ''],
                  tips: { v: 'σ = SD of the wage error. Note λ-coefficient = ρ·σ = 0.6728 × 5.9474 ≈ 4.00 — that\'s where the 4.00 comes from.' } }
              ],
              notes: [
                { t: 'LR test of independent eqns (rho = 0): Prob > chi2 = 0.000',
                  tip: '<b>Reject H0: ρ=0</b> ⇒ the two equations are NOT independent ⇒ significant sample selection ⇒ report Heckman over OLS.' }
              ]
            })
          },
          {
            title: 'Case 3 — OLS vs Heckman: how big was the bias?',
            html: String.raw`
<span class="rd-tag">Case 3 · the comparison</span>
<p><b>The scenario:</b> line up the wage-equation coefficients from OLS (workers only) and Heckman. In this
dataset OLS <b>understates</b> the returns, because it only sees working women — who tend to have higher
unseen wage potential — so it misses the bottom of the wage distribution. Hover to compare.</p>` + S({
              title: 'Return to education & age: OLS vs Heckman',
              dep: 'wage',
              cols: ['OLS (workers)', 'Heckman'],
              rows: [
                { v: 'education', c: ['0.90', '0.98'],
                  tips: { 0: 'OLS 0.90 — biased down.', 1: 'Heckman 0.98 — the corrected, larger return.' } },
                { v: 'age', c: ['0.15', '0.21'],
                  tips: { 0: 'OLS 0.15.', 1: 'Heckman 0.21 — corrected up.' } }
              ],
              notes: [
                { t: 'Direction of OLS bias is NOT a general rule.',
                  tip: 'Here ρ>0 happens to push the OLS education and age slopes DOWN. In another dataset the sign could flip — the direction depends on ρ AND how each x relates to selection. Don\'t memorise "OLS always under-states".' }
              ]
            })
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'In one sentence each: (i) what is the inverse Mills ratio doing in the wage equation, and (ii) why does leaving it out bias OLS?',
        answer: [
          '(i) λ(w′γ) captures the non-zero average error among the selected (working) people; adding it as a regressor soaks up that average so the other coefficients come out consistent.',
          '(ii) Among workers, E[ε | works] = ρσ·λ ≠ 0 and depends on x; if you omit λ, OLS dumps that term into the slopes → omitted-variable bias.'
        ],
        tip: 'IMR = the selection-correction regressor; its coefficient is ρ·σ_ε.'
      },
      {
        type: 'scenario',
        q: 'A different output shows: /mills lambda = 0.42 (insignificant), athrho = 0.08 (p=0.70), LR test of ρ=0: p=0.70. Report Heckman or OLS? Does p=0.70 prove there\'s no selection?',
        answer: [
          'Fail to reject ρ=0 ⇒ no detectable selection bias ⇒ report OLS as the main result (it is consistent and more efficient here); Heckman would just add noise.',
          'No — p=0.70 does NOT prove selection is absent. It means we can\'t detect it (could be genuine independence, or low power / a weak exclusion restriction).',
          'A referee may still ask for the Heckman "just to show" as a robustness check.'
        ],
        tip: 'Insignificant ρ/λ ⇒ OLS. "Fail to reject" ≠ "no selection".'
      },
      {
        type: 'concept',
        q: 'Which is the best exclusion restriction in a women\'s-wage Heckman, and why: (A) years of education, (B) number of young children, (C) work experience?',
        answer: [
          'B — number of young children. It plausibly shifts the WORK decision (childcare cost, time at home) but has no direct effect on the WAGE an employer offers.',
          'A and C are bad: education and experience belong in the wage equation directly, so they cannot be excluded from it.',
          'Remember: the exclusion restriction is justified by economic theory, not tested statistically.'
        ]
      },
      {
        type: 'concept',
        q: 'A student looks at the exam table and says: "children has a positive significant coefficient, so having children raises women\'s wages." What\'s wrong?',
        answer: [
          'Wrong block: children\'s coefficient is in the SELECTION equation (the probit for "does she work?"), not the wage equation. It is the effect on the PROBABILITY OF WORKING, not on the wage.',
          'In this synthetic womenwk data, more children ⇒ more likely to work; you cannot read a wage effect from it.',
          'Children is in fact the exclusion restriction — deliberately kept OUT of the wage equation.'
        ],
        tip: 'Selection-equation coefficients move a PROBABILITY, not the outcome.'
      },
      {
        type: 'concept',
        q: 'ρ̂ = 0.67 and the LR test rejects ρ=0. Translate ρ>0 into plain economics, and say what it means for naive OLS on workers.',
        answer: [
          'ρ>0 means the unobserved traits that make a woman more likely to work also raise her wage — observed workers have higher unseen wage potential than the average woman.',
          'So naive OLS on workers over-states average wages for the whole population (it samples the upper part of the unobservable distribution).',
          'Rejecting ρ=0 confirms the two equations are linked ⇒ selection bias is real ⇒ report Heckman.'
        ]
      }
    ]
  };
})();
