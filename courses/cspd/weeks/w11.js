/* ============================================================================
   CSPD · Week 11 — Pooled Cross-Sections & Changes Over Time
   Final-exam Topic 3: pooled cross-section, changes in relationships over time,
   time dummies, interactions, Chow test, and Difference-in-Differences.
   Sources: "Pooling Cross Section Across Time" deck (Prita K.), Meet 11-12
   PoolOLS deck, Wooldridge ch. 13. Registers on window.CSPD_WEEKS.w11.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_WEEKS = window.CSPD_WEEKS || {};

  window.CSPD_WEEKS.w11 = {
    id: 'w11',
    label: 'Week 11',
    title: 'Pooled Cross-Sections & Changes Over Time',
    subtitle: 'Time dummies, slope interactions, Chow test, and Difference-in-Differences',

    notes: [
      {
        heading: 'What a pooled cross-section is (and is not)',
        num: '1',
        cards: [
          {
            title: 'Independent snapshots stacked, not the same units followed',
            html: String.raw`
<p>A <span class="key">pooled cross-section</span> stacks several independent random samples taken at
different times (e.g. Susenas 2010, 2015, 2020). A <b>different</b> set of units appears each round.</p>
<table>
  <tr><th></th><th>Pooled cross-section</th><th>Panel (longitudinal)</th></tr>
  <tr><td>Who appears</td><td>different households each year.</td><td>the <b>same</b> units every year.</td></tr>
  <tr><td>Can follow a unit over time?</td><td><b>No</b> — a photograph each year.</td><td><b>Yes</b> — a film.</td></tr>
  <tr><td>Removes time-invariant $a_i$?</td><td>No (can't difference a unit with itself).</td><td>Yes (Week 12).</td></tr>
</table>
<p>Two reasons to pool: (i) bigger sample ⇒ more precision; (ii) study <b>how a relationship changes
over time</b>. But the populations may differ across years, so we must model time explicitly.</p>
<div class="note">💡 "Identically distributed" means each year is drawn from the same population $Y\mid X$.
If the population shifts (e.g. average schooling rises), pooling without time controls is dangerous.</div>`
          }
        ]
      },
      {
        heading: 'Time dummies: shifting the intercept',
        num: '2',
        cards: [
          {
            title: 'A year dummy isolates economy-wide shifts',
            html: String.raw`
<p>Add year dummies so the intercept can move across time while holding $x$-effects common:</p>
<div class="formula">$$ y_{it}=\beta_0+\delta_1 d2_t+\dots+x_{it}'\beta+u_{it} $$</div>
<p>Each $\delta$ answers "did the <b>average</b> shift in that year, for units with the same
characteristics?" In Wooldridge's fertility example, $y82,y84$ are significantly negative ⇒ fertility
fell in the early 1980s for everyone with the same education/age/race — capturing an economy-wide
change (contraception access, norms) that is <b>not</b> in the regressors.</p>
<div class="formula">interpret $y74=0.182$: vs base year 1972, women in 1974 had 0.18 more kids on average — but
$p=0.33$, not significant. A jointly-significant F on all year dummies ⇒ a real time trend.</div>
<div class="tip">📝 Time dummy = "the average shifted." It captures a change in the <b>intercept</b>, common to
everyone. It cannot capture a change in a <b>slope</b> — that needs interactions.</div>`
          }
        ]
      },
      {
        heading: 'Interaction terms: letting the SLOPE change over time',
        num: '3',
        cards: [
          {
            title: 'δ on an interaction = the CHANGE in a relationship',
            html: String.raw`
<p>Did the return to education or the gender gap change between 1978 and 1985? Interact the variable
with a time dummy:</p>
<div class="formula">$$ \log(wage)=\beta_0+\delta_0\,y85+\beta_1 educ+\delta_1\,(y85\!\cdot\!educ)+\beta_5 female+\delta_5\,(y85\!\cdot\!female)+\dots $$</div>
<table>
  <tr><th>Year</th><th>Intercept</th><th>Return to educ</th><th>Gender gap</th></tr>
  <tr><td>1978 (base)</td><td>$\beta_0$</td><td>$\beta_1$</td><td>$\beta_5$</td></tr>
  <tr><td>1985</td><td>$\beta_0+\delta_0$</td><td>$\beta_1+\delta_1$</td><td>$\beta_5+\delta_5$</td></tr>
</table>
<p>So $\delta_1$ is <b>not</b> the return to education — it is the <b>change</b> in that return.
$\delta_0$: did the average wage shift? $\delta_1$: did the education return change? $\delta_5$: did the
gender gap change? Every $\delta$ answers a "did it change?" question.</p>
<div class="note">💡 Common error: including interactions but <b>dropping the main time dummy</b> $y85$ — this
forces the intercept shift into the interaction terms and gives seriously misleading results. <b>Always
keep the main effect.</b></div>`
          },
          {
            title: 'The Chow test: did the whole model change?',
            html: String.raw`
<p>To test whether <b>all</b> coefficients differ across two periods (a structural break), use the
<span class="key">Chow test</span> — an F-test that all the time-interaction terms are jointly zero:</p>
<div class="formula">$$ F=\frac{(SSR_{pooled}-SSR_{unrestricted})/k}{SSR_{unrestricted}/(n-2k)} $$</div>
<p>Equivalently, run the fully-interacted model and F-test all interactions $=0$. Rejecting ⇒ structural
change ⇒ the pooled (constant-coefficient) model is invalid and would bias your conclusions.</p>`
          }
        ]
      },
      {
        heading: 'Difference-in-Differences (DiD)',
        num: '4',
        cards: [
          {
            title: 'Two differences cancel two problems',
            html: String.raw`
<p>A natural/quasi-experiment: an external event (policy, incinerator, road) hits a <b>treatment</b>
group but not a <b>control</b> group, with <b>before</b> and <b>after</b> data. DiD compares the
<i>change</i> in the treated group to the <i>change</i> in the control group:</p>
<div class="formula">$$ \widehat{\delta}_{DiD}=\big(\bar y_{T,post}-\bar y_{T,pre}\big)-\big(\bar y_{C,post}-\bar y_{C,pre}\big) $$</div>
<ul>
  <li>1st difference (over time, within a group) removes anything fixed about the group.</li>
  <li>2nd difference (across groups) removes the common time shock.</li>
</ul>
<p>Incinerator example (Kiel &amp; McClain): both near and far houses rose 1978→1981, but far rose
\$18,790 vs near \$6,926; the <b>extra fall</b> for near houses is the incinerator effect.</p>`
          },
          {
            title: 'DiD as a regression — the interaction is the estimate',
            html: String.raw`
<div class="formula">$$ y=\beta_0+\delta_0\,post+\beta_1\,treat+\underbrace{\delta_1}_{\text{DiD}}\,(post\!\cdot\!treat)+u $$</div>
<table>
  <tr><th>Coef.</th><th>Meaning (incinerator case)</th></tr>
  <tr><td>$\beta_0$</td><td>avg price of far houses, 1978 (baseline).</td></tr>
  <tr><td>$\delta_0$</td><td>general price change 1978→1981 (common time shock).</td></tr>
  <tr><td>$\beta_1$ (treat)</td><td>location effect NOT due to the incinerator (pre-existing near/far gap).</td></tr>
  <tr><td>$\delta_1$ (interaction)</td><td><b>the DiD estimate</b> — the causal effect of the incinerator.</td></tr>
</table>
<p>Adding controls (age, rooms, land, distance) sharpens the estimate and shrinks SEs. In logs the
incinerator effect was about −13.2% with controls.</p>
<div class="note">💡 Key identifying assumption: <b>parallel trends</b> — absent treatment, the two groups
would have changed by the same amount. Groups need not <b>start</b> equal, only <b>trend</b> equally.</div>
<div class="tip">📝 DiD is just first-differencing applied to two groups. It is the bridge from pooled
cross-sections (this week) to panel methods (next week).</div>`
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
With slope change:  $y=\beta_0+\delta_0 d + \beta_1 x_1 + \delta_1 (d\!\cdot\!x_1)+\dots+u$
  effect of $x_1$ in base period $=\beta_1$; in period $d$: $\beta_1+\delta_1$
  $\delta_1=$ CHANGE in the effect (not the effect itself)</div>`
          },
          {
            title: 'DiD estimator',
            html: String.raw`
<div class="formula">$y=\beta_0+\delta_0\,post+\beta_1\,treat+\delta_1(post\cdot treat)+u$
$\widehat\delta_1 = (\bar y_{T,post}-\bar y_{T,pre})-(\bar y_{C,post}-\bar y_{C,pre})$
Assumption: parallel trends. Add controls to reduce SE and absorb composition changes.</div>`
          }
        ]
      }
    ],

    readdata: [
      {
        heading: 'Reading pooled-cross-section & DiD output',
        num: 'R',
        cards: [
          {
            title: 'Year dummies — reading the time trend',
            html: String.raw`
<span class="rd-tag">Case · fertility (kids on year dummies)</span>
<div class="stata"><span class="cmd">reg kids y74 y76 y78 y80 y82 y84, r</span>
       y74   0.182   (t=0.98, p=0.326)   <span class="dim">ns vs base 1972</span>
       y82  <span class="neg">-0.622</span>   (t=-3.23, p=0.001)
       y84  <span class="neg">-0.788</span>   (t=-4.26, p=0.000)
<span class="cmd">test y74 y76 y78 y80 y82 y84</span>   ->  F(6,1122)=8.04, Prob&gt;F=<span class="hl">0.000</span></div>
<ul class="annot">
  <li><b>y74 = 0.182, p=0.326:</b> vs base year 1972, 0.18 more kids on average, but not significant.</li>
  <li>The dummies turn increasingly negative ⇒ a <b>downward fertility trend</b> over time.</li>
  <li><b>Joint F p=0.000:</b> the time effects are jointly significant ⇒ a real trend exists.</li>
</ul>`
          },
          {
            title: 'Interaction — reading a CHANGING return',
            html: String.raw`
<span class="rd-tag">educ × year</span>
<div class="stata"><span class="cmd">reg kids y74 ... y84 educ y74educ ... y84educ, r</span>
       educ      -0.0407
       y84educ   <span class="hl">-0.1744</span>   (t=-2.21, p=<span class="hl">0.027</span>)</div>
<ul class="annot">
  <li>Effect of education on fertility <b>in 1984</b> = main + interaction = $-0.0407+(-0.1744)=\mathbf{-0.2151}$.</li>
  <li><b>y84educ = −0.1744:</b> the education effect became 0.174 <b>more negative</b> in 1984 than in
      1972 (the base year) — and it is significant at 5% (p=0.027).</li>
  <li>It is the <b>change</b> in the effect, not the effect itself.</li>
</ul>
<div class="note">💡 If you DROP main-effect <code>educ</code>, y84educ becomes −0.1912 and is now a biased
mix of the level and the change — a specification error. Keep the main effect.</div>`
          },
          {
            title: 'DiD regression — the interaction is the policy effect',
            html: String.raw`
<span class="rd-tag">incinerator (Kiel–McClain)</span>
<div class="stata"><span class="cmd">reg lprice y81 nearinc y81_nearinc age rooms ..., r</span>
       y81                 <span class="dim">general price growth 1978-&gt;1981</span>
       nearinc             <span class="dim">pre-existing near/far gap (not the incinerator)</span>
       <b>y81_nearinc</b>  <span class="hl">-0.132</span>   <span class="dim">DiD: near houses lost ~13.2% from the incinerator</span></div>
<ul class="annot">
  <li>Read <b>only the interaction</b> as the treatment effect.</li>
  <li>Without controls the effect was −6.3% and insignificant; with the full control set it sharpens to
      −13.2% (t≈22) — controlling for house characteristics matters.</li>
</ul>`
          }
        ]
      }
    ],

    quiz: [
      {
        type: 'concept',
        q: 'A pooled regression includes y85 and the interaction y85·educ. Interpret each, and explain what goes wrong if you keep the interaction but drop y85.',
        answer: [
          'y85: the change in the AVERAGE (intercept) wage between the base year and 1985 — an economy-wide level shift.',
          'y85·educ: the CHANGE in the return to education between the base year and 1985 (δ1), not the return itself; the 1985 return is β1+δ1.',
          'Dropping y85 forces the intercept shift into the interaction terms, contaminating them — they no longer isolate the slope change, giving misleading results. Always keep the main time dummy.'
        ],
        tip: 'Time dummy = intercept shift; interaction = slope change; keep both.'
      },
      {
        type: 'scenario',
        q: 'A toll road opens in District A (not B) in 2015. You have output for both districts in 2013 and 2017. Write the DiD regression, name the coefficient of interest, and state the key assumption.',
        answer: [
          'y = β0 + δ0·post + β1·treatA + δ1·(post·treatA) + u, where post=1 in 2017, treatA=1 for District A.',
          'δ1 (the interaction) is the DiD estimate = the road’s causal effect on output.',
          'Identifying assumption: parallel trends — without the road, A and B would have changed by the same amount. They need not start at the same level.',
          'δ0 removes the common time shock; β1 removes the fixed A-vs-B difference; the double difference removes both.'
        ]
      },
      {
        type: 'concept',
        q: 'Why might pooling cross-sections from 2005 and 2020 without ANY time controls bias your estimate of the education–spending relationship?',
        answer: [
          'The population itself shifts between years (prices, average schooling, norms), so the two samples are not identically distributed.',
          'Without time dummies the regression conflates the within-year education effect with economy-wide changes across years — an omitted time effect correlated with education.',
          'Adding year dummies isolates "within any given year, do more-educated households spend more?", which is the clean question.'
        ]
      },
      {
        type: 'concept',
        q: 'What does a significant Chow test tell you about a pooled model, and how can you run it via interactions?',
        answer: [
          'A significant Chow test rejects coefficient stability across periods — there is a structural break, so a single pooled set of coefficients is invalid and biases conclusions.',
          'Operationally: fully interact every regressor with the period dummy and F-test that ALL interaction terms are jointly zero; rejecting = the relationship changed over time.',
          'Remedy: allow the coefficients to differ by period (keep the interactions) or model the break explicitly.'
        ]
      }
    ]
  };
})();
