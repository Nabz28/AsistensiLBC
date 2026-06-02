/* ============================================================================
   CSPD · Week 11 — Pooled Cross-Sections & Changes Over Time
   Final-exam Topic 3. Rewritten flowing/plain; Read Data cases use the ACTUAL
   2024 exam fertility tables + the incinerator DiD. Sources: Pooling deck,
   Meet 11-12 deck, past final Q2, Wooldridge ch. 13.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};
  var S = window.STATA;

  window.CSPD_WEEKS.w11 = {
    id: 'w11',
    label: 'Week 11',
    title: 'Pooled Cross-Sections & Changes Over Time',
    subtitle: 'Time dummies, slope interactions, the Chow test, and Difference-in-Differences',

    notes: [
      {
        heading: 'A photo album, not a film',
        num: '1',
        cards: [
          {
            title: 'What "pooled cross-section" actually means',
            html: String.raw`
<p>Imagine Susenas surveys in 2010, 2015 and 2020. Each year is a <b>fresh random sample</b> — different
households each round. If you stack all three years into one big dataset, you have a
<span class="key">pooled cross-section</span>. The crucial feature: you <b>cannot follow the same household
over time</b>. It's an album of separate photos, not a film of one family growing up.</p>
<table>
  <tr><th></th><th>Pooled cross-section (this week)</th><th>Panel (Weeks 12–13)</th></tr>
  <tr><td>Who appears</td><td>different units each year</td><td>the <b>same</b> units every year</td></tr>
  <tr><td>Follow a unit over time?</td><td><b>No</b> — separate photos</td><td><b>Yes</b> — a film</td></tr>
  <tr><td>Can it remove fixed traits $a_i$?</td><td>No (you can't difference a unit with itself)</td><td>Yes</td></tr>
</table>
<p>So why bother pooling? Two reasons: (1) more data = more precise estimates, and (2) — the interesting one
— you can study <b>how a relationship changes over time</b>. But there's a catch: the population itself
shifts between years (prices rise, schooling rises, norms change). So we must put <b>time</b> into the model
on purpose; otherwise we'd confuse "things changed over the years" with "the effect of $x$".</p>`
          }
        ]
      },
      {
        heading: 'Time dummies: letting the average move',
        num: '2',
        cards: [
          {
            title: 'A year dummy soaks up whatever shifted for everyone',
            html: String.raw`
<p>The simplest fix is a <b>dummy variable for each year</b>. It lets the <b>intercept</b> jump from year to
year while keeping the effect of $x$ common:</p>
<div class="formula">$$ y_{it}=\beta_0+\delta_1 d2_t+\delta_2 d3_t+\dots+x_{it}'\beta+u_{it} $$</div>
<p>Each $\delta$ answers a clean question: <i>"compared with the base year, how much higher or lower is the
average outcome that year — for people with the same characteristics?"</i> It captures economy-wide changes
that hit everyone (a recession, new technology, a cultural shift) and that <b>aren't</b> already in your
regressors.</p>
<p>Wooldridge's fertility example makes this concrete: regressing number of kids on year dummies, the early
years are flat, then $y82$ and $y84$ turn clearly negative — fertility fell in the early 1980s for everyone
with the same education, age and race. The year dummy <b>isolated</b> a real time trend (contraception
access, changing norms) that none of the other variables captured.</p>
<div class="tip">📝 A time dummy says "<b>the average level shifted</b>." It can only move the <b>intercept</b>,
the same way for everyone. It <b>cannot</b> capture a change in a <b>slope</b> — for that you need
interactions, next.</div>`
          }
        ]
      },
      {
        heading: 'Interactions: letting the SLOPE change over time',
        num: '3',
        cards: [
          {
            title: 'The δ on an interaction is a "did it change?" number',
            html: String.raw`
<p>Was the payoff to education the same in 1978 as in 1985? Did the gender pay gap shrink? A time dummy
can't answer that — those are questions about <b>slopes changing</b>, not the average level. To let a slope
change, <b>interact</b> the variable with a time dummy:</p>
<div class="formula">$$ \log(wage)=\beta_0+\delta_0\,y85+\beta_1 educ+\delta_1\,(y85\!\cdot\!educ)+\beta_5 female+\delta_5\,(y85\!\cdot\!female)+\dots $$</div>
<p>Now read off each year:</p>
<table>
  <tr><th>Year</th><th>Intercept</th><th>Return to education</th><th>Gender gap</th></tr>
  <tr><td>1978 (base)</td><td>$\beta_0$</td><td>$\beta_1$</td><td>$\beta_5$</td></tr>
  <tr><td>1985</td><td>$\beta_0+\delta_0$</td><td>$\beta_1+\delta_1$</td><td>$\beta_5+\delta_5$</td></tr>
</table>
<p>The single most important takeaway: <b>$\delta_1$ is NOT the return to education</b>. It is the
<b>change</b> in that return between 1978 and 1985. To get the 1985 return you add: $\beta_1+\delta_1$. Every
$\delta$ on an interaction answers a "did this relationship change?" question.</p>
<div class="note">💡 The classic mistake: keeping the interaction $y85{\cdot}educ$ but <b>dropping the main
effect</b> $educ$. That forces the level and the change to mix together in one coefficient, so it no longer
means either thing cleanly. <b>Always keep the main effect alongside its interaction.</b></div>`
          },
          {
            title: 'The Chow test: did the WHOLE model change?',
            html: String.raw`
<p>Sometimes you want to test whether <b>everything</b> shifted between two periods — a
<span class="key">structural break</span>. That's the <b>Chow test</b>: an F-test that <b>all</b> the
time-interaction terms are jointly zero.</p>
<div class="formula">$$ F=\frac{(SSR_{pooled}-SSR_{unrestricted})/k}{SSR_{unrestricted}/(n-2k)}\ \sim\ F_{k,\,n-2k} $$</div>
<p>where $k$ = number of parameters per period (= the number of restrictions you're testing),
$SSR_{pooled}$ comes from one restricted model, and $SSR_{unrestricted}=SSR_1+SSR_2$ is the two separate
per-period regressions. The easy way: run the fully-interacted model and F-test all $k$ interactions = 0.
<b>Reject</b> ⇒ the relationship really did change ⇒ a single pooled model is invalid and would mislead you.</p>`
          }
        ]
      },
      {
        heading: 'Difference-in-Differences: a natural experiment',
        num: '4',
        cards: [
          {
            title: 'Two differences cancel two problems',
            html: String.raw`
<p>Here's the payoff. Suppose an outside event — a new policy, a garbage incinerator, a new road — hits one
group (the <b>treatment</b> group) but not another similar group (the <b>control</b>), and you have data
<b>before and after</b>. <span class="key">Difference-in-Differences (DiD)</span> compares the
<i>change</i> in the treated group to the <i>change</i> in the control group:</p>
<div class="formula">$$ \widehat{\delta}_{DiD}=\big(\bar y_{T,after}-\bar y_{T,before}\big)-\big(\bar y_{C,after}-\bar y_{C,before}\big) $$</div>
<p>Why two differences? The <b>first</b> difference (after − before, within a group) wipes out everything
permanent about that group. The <b>second</b> difference (treated − control) wipes out the common time shock
that hit both. What survives both subtractions is the treatment's effect.</p>
<p>The incinerator case (Kiel &amp; McClain): between 1978 and 1981 <b>all</b> houses got more expensive, but
houses far from the new incinerator gained \$18,790 while nearby houses gained only \$6,926. Nearby houses
"fell behind" by about \$11,864 — that gap is the incinerator's effect.</p>`
          },
          {
            title: 'DiD is just one interaction term',
            html: String.raw`
<p>Beautifully, you can get the DiD estimate from a single regression — it's the coefficient on a
<b>treat × after</b> interaction:</p>
<div class="formula">$$ y=\beta_0+\delta_0\,after+\beta_1\,treat+\underbrace{\delta_1}_{\text{DiD}}\,(after\!\cdot\!treat)+u $$</div>
<table>
  <tr><th>Coefficient</th><th>What it captures (incinerator)</th></tr>
  <tr><td>$\beta_0$</td><td>baseline: far houses, before</td></tr>
  <tr><td>$\delta_0$ (after)</td><td>the common price growth 1978→1981 (the time shock)</td></tr>
  <tr><td>$\beta_1$ (treat)</td><td>the pre-existing near-vs-far gap (NOT caused by the incinerator)</td></tr>
  <tr><td>$\delta_1$ (interaction)</td><td><b>the DiD estimate = the causal effect of the incinerator</b></td></tr>
</table>
<p>Adding house controls (age, rooms, land, distance) sharpens it; in logs the estimate was about −13%.</p>
<div class="note">💡 The one assumption DiD rests on: <b>parallel trends</b> — without the treatment, the two
groups would have moved by the <b>same amount</b>. They don't have to <b>start</b> equal, only <b>trend</b>
equally. To <i>support</i> it (a common exam ask): with extra pre-periods, check the groups had parallel
<b>pre-trends</b>, or run a <b>placebo</b> DiD on a fake earlier date and show its interaction is
insignificant.</div>
<div class="tip">📝 DiD is really just first-differencing applied to two groups — the perfect bridge into next
week's panel methods.</div>`
          }
        ]
      }
    ],

    formulas: [
      {
        cards: [
          {
            title: 'Pooled model with time effects & interactions',
            html: String.raw`
<div class="formula">Time dummies only:  $y=\beta_0+\sum_t \delta_t d_t + x'\beta + u$
With slope change:  $y=\beta_0+\delta_0 d + \beta_1 x_1 + \delta_1(d\!\cdot\!x_1)+\dots+u$
  effect of $x_1$ in base period $=\beta_1$; in period $d$: $\beta_1+\delta_1$
  $\delta_1=$ the CHANGE in the effect (not the effect itself)</div>`
          },
          {
            title: 'DiD estimator',
            html: String.raw`
<div class="formula">$y=\beta_0+\delta_0\,after+\beta_1\,treat+\delta_1(after\cdot treat)+u$
$\widehat\delta_1 = (\bar y_{T,after}-\bar y_{T,before})-(\bar y_{C,after}-\bar y_{C,before})$
Assumption: parallel trends. Add controls to cut the SE and absorb composition changes.</div>`
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
            title: 'Case 1 — Year dummies: reading a time trend',
            html: String.raw`
<span class="rd-tag">Case 1 · fertility · exam Table 2a</span>
<p><b>The scenario:</b> US women (1972–1984); outcome <code>kids</code> = number of children. Regress kids on
year dummies (base year = 1972). Each coefficient compares that year to 1972. Hover the numbers — note how
they turn increasingly negative, and how the joint F-test confirms a real trend. (Exact exam table.)</p>` + S({
              cmd: 'reg kids y74 y76 y78 y80 y82 y84, robust',
              title: 'Linear regression',
              info: [
                ['Number of obs', '1,129'],
                ['F(6, 1122)', '8.04', '<b>Joint test:</b> are the six year dummies TOGETHER significant? (i.e. is there any time trend at all?)'],
                ['Prob > F', '0.0000', '<b>p &lt; 0.05 ⇒ yes, a real time trend exists.</b> Even though some single years are insignificant, jointly the years matter.'],
                ['R-squared', '0.0384', 'Only ~4% explained — year alone is a weak predictor of fertility, as expected.']
              ],
              dep: 'kids',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'y74', c: ['.1825', '.1857', '0.98', '0.326', '-.182   .547'],
                  tips: { 0: '<b>+0.18 vs the 1972 base year:</b> women in 1974 had on average 0.18 MORE kids than in 1972, ceteris paribus.', 3: '<b>p = 0.326 &gt; 0.05 ⇒ NOT significant.</b> We can\'t say 1974 really differed from 1972 — could be noise.' } },
                { v: 'y76', c: ['-.2230', '.1986', '-1.12', '0.262', '-.613   .167'] },
                { v: 'y78', c: ['-.2214', '.1971', '-1.12', '0.262', '-.608   .165'] },
                { v: 'y80', c: ['-.2087', '.1976', '-1.06', '0.291', '-.596   .179'] },
                { v: 'y82', c: ['-.6224', '.1924', '-3.23', '0.001', '-1.000  -.245'],
                  tips: { 0: '<b>−0.62: by 1982, women had 0.62 FEWER kids than in 1972</b>, ceteris paribus — and now significant.', 3: 'p = 0.001 ⇒ significant: the decline is real.' } },
                { v: 'y84', c: ['-.7884', '.1853', '-4.26', '0.000', '-1.152  -.425'],
                  tips: { 0: '<b>−0.79: the trend keeps falling.</b> Reading y74→y84, the coefficients go from +0.18 to −0.79 — a clear downward fertility trend over time.' } },
                { v: '_cons', c: ['3.0256', '.1463', '20.68', '0.000', '2.739   3.313'],
                  tips: { v: '<b>Average kids in the base year 1972 ≈ 3.03.</b> The intercept IS the base-year mean (all year dummies = 0).' } }
              ]
            })
          },
          {
            title: 'Case 2 — Interactions: a CHANGING return to education',
            html: String.raw`
<span class="rd-tag">Case 2 · fertility · exam Table 2b</span>
<p><b>The scenario:</b> add education and interact it with each year (<code>y74educ … y84educ</code>). Now
<code>educ</code> alone is the education effect in the base year, and each interaction is how that effect
<b>changed</b> in a later year. Hover to see how to combine them — this exact question was on the final.</p>` + S({
              cmd: 'reg kids y74 ... y84 educ y74educ ... y84educ, robust',
              title: 'Linear regression  (interaction model)',
              info: [
                ['Number of obs', '1,129'],
                ['Prob > F', '0.0000'],
                ['R-squared', '0.0854']
              ],
              dep: 'kids',
              cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
              rows: [
                { v: 'educ', c: ['-.0407', '.0670', '-0.61', '0.544', '-.172   .091'],
                  tips: { v: '<b>educ (main effect) = the education effect in the BASE year 1972.</b> About −0.04 (and not significant on its own).', 0: 'This is the 1972 education–fertility slope. To get a LATER year\'s effect, ADD that year\'s interaction.' } },
                { v: 'y74educ', c: ['-.0118', '.0835', '-0.14', '0.887', '-.176   .152'] },
                { v: 'y82educ', c: ['-.1271', '.0807', '-1.57', '0.116', '-.285   .031'] },
                { v: 'y84educ', c: ['-.1744', '.0788', '-2.21', '0.027', '-.329  -.020'],
                  tips: { 0: '<b>−0.17 = how much MORE NEGATIVE the education effect became by 1984</b> vs 1972. So the effect of education on fertility in 1984 = main + interaction = −0.0407 + (−0.1744) = <b>−0.2151</b>. It is the CHANGE, not the level.', 3: '<b>p = 0.027 &lt; 0.05 ⇒ significant at 5%:</b> education\'s fertility-reducing effect genuinely strengthened between 1972 and 1984.' } },
                { v: '_cons', c: ['3.5204', '.8344', '4.22', '0.000', '1.883   5.158'] }
              ],
              notes: [
                { t: 'Effect of education in 1984 = educ + y84educ = −0.0407 + (−0.1744) = −0.2151.',
                  tip: 'Common trap: y84educ (−0.1744) alone is the CHANGE since 1972, not the 1984 effect. Always add the main effect to get a specific year\'s slope.' }
              ]
            })
          },
          {
            title: 'Case 3 — Reading a Difference-in-Differences from a 2×2',
            html: String.raw`
<span class="rd-tag">Case 3 · incinerator · before/after × near/far</span>
<p><b>The scenario:</b> house prices before (1978) and after (1981) a new incinerator, split by near vs far.
The DiD is just: (change for near) − (change for far). Hover the "change" column and the DiD cell to see how
the two differences combine into the causal effect.</p>` + S({
              title: 'Average house-price CHANGE 1978 → 1981 (in $)',
              dep: 'group',
              cols: ['Gain 1978→1981', 'Read as'],
              rows: [
                { v: 'Far houses (control)', c: ['+18,790', 'time shock'],
                  tips: { 0: '<b>Far houses gained $18,790.</b> They\'re the control — the incinerator didn\'t affect them, so this gain is just general housing-price growth (the common time shock).' } },
                { v: 'Near houses (treated)', c: ['+6,926', 'time + treatment'],
                  tips: { 0: '<b>Near houses gained only $6,926.</b> They got the same general growth as far houses, MINUS whatever the incinerator did to them.' } },
                '-',
                { v: 'DiD = near − far', c: ['−11,864', 'the effect'],
                  tips: { 0: '<b>DiD = 6,926 − 18,790 = −$11,864.</b> Near houses fell ~$11,864 behind far houses → that gap is the incinerator\'s causal effect on nearby prices. (With house controls / logs it sharpens to about −13%.) Valid IF parallel trends holds.' } }
              ],
              notes: [
                { t: 'Read only the difference-of-differences as the effect — not the raw before/after change.',
                  tip: 'The far-house gain removes the time shock; subtracting it from the near-house gain leaves the treatment effect. This double subtraction is exactly the y81×nearinc interaction in the regression.' }
              ]
            })
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'A pooled regression includes y85 and the interaction y85·educ. Interpret each, and explain what breaks if you keep the interaction but drop y85.',
        answer: [
          'y85: the change in the AVERAGE (intercept) wage between the base year and 1985 — an economy-wide level shift.',
          'y85·educ: the CHANGE in the return to education between the base year and 1985 (δ1), not the return itself; the 1985 return is β1+δ1.',
          'Dropping y85 forces the intercept shift into the interaction terms, so they no longer isolate the slope change — misleading. Always keep the main time dummy.'
        ],
        tip: 'Time dummy = intercept shift; interaction = slope change; keep both.'
      },
      {
        type: 'scenario',
        q: 'A toll road opens in District A (not B) in 2015. You have output for both districts in 2013 and 2017. Write the DiD regression, name the coefficient of interest, and state the key assumption.',
        answer: [
          'y = β0 + δ0·post + β1·treatA + δ1·(post·treatA) + u, where post=1 in 2017 and treatA=1 for District A.',
          'δ1 (the interaction) is the DiD estimate = the road\'s causal effect on output.',
          'Assumption: parallel trends — without the road, A and B would have changed by the same amount (they needn\'t start equal).',
          'δ0 removes the common time shock; β1 removes the fixed A-vs-B difference; the double difference removes both.'
        ]
      },
      {
        type: 'concept',
        q: 'In the fertility table, y84educ = −0.1744 (p=0.027) and educ = −0.0407. What is the effect of education on fertility in 1984, and is the CHANGE since 1972 significant?',
        answer: [
          'Effect in 1984 = main + interaction = −0.0407 + (−0.1744) = −0.2151: one more year of education is associated with ~0.215 fewer kids in 1984, ceteris paribus.',
          'The CHANGE since 1972 is the interaction itself, −0.1744, and it IS significant at 5% (p=0.027<0.05).',
          'So education\'s fertility-reducing effect got substantially stronger between 1972 and 1984.'
        ],
        tip: 'Year-specific effect = main + that year\'s interaction; the interaction alone = the change.'
      },
      {
        type: 'concept',
        q: 'What does a significant Chow test tell you, and how do you run it via interactions?',
        answer: [
          'It rejects coefficient stability across periods — a structural break — so a single pooled set of coefficients is invalid and would bias conclusions.',
          'Run it by fully interacting every regressor with the period dummy and F-testing that ALL the interaction terms are jointly zero; rejecting = the relationship changed over time.',
          'Remedy: let the coefficients differ by period (keep the interactions) or model the break explicitly.'
        ]
      }
    ]
  };
})();
