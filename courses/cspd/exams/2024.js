/* ============================================================================
   CSPD · Past Final Exam — Semester II 2023/2024 (Djoni Hartono et al.)
   Worked 1:1 from the official answer key ("Jawaban Soal Uas tahun lalu").
   3 compulsory (Heckman, Pooled-CS/DiD, Panel) + 2 optional (CRE, FE).
   Registers on window.CSPD_EXAMS.final.
   ============================================================================ */
(function () {
  'use strict';
  window.CSPD_EXAMS = window.CSPD_EXAMS || {};

  window.CSPD_EXAMS.final = {
    year: '2024',
    label: 'UAS 2023/2024 — Final (worked)',
    note: String.raw`Final-term exam, 6 June 2024 · open-note, no calculator · 3 compulsory questions + 1 of 2
optional. Tables reproduced from the paper; answers from the official key. This single paper covers
<b>every</b> final-exam topic — work it end to end.`,
    sections: [
      {
        label: 'Q1 (25) — Heckman / Sample Selection',
        kind: 'essay',
        questions: [
          {
            n: '1a',
            q: String.raw`Women’s-wage study: 2,000 women, wage observed for only 67.15% (the rest don’t work). Model
$wage_i=\beta_0+\beta_1 educ_i+\beta_2 age_i+\varepsilon_i$. <b>What conditions must hold for OLS to be unbiased?</b>`,
            answer: String.raw`<p>The selection-relevant conditions the key wants:</p><ul>
<li><b>Random sampling</b> from the population.</li>
<li><b>Zero conditional mean:</b> no correlation between the regressors and the error,
$E(\varepsilon\mid x)=0$.</li>
<li><b>Selection unrelated to the outcome:</b> the rule deciding who is <b>observed</b> (has a wage) must
not be correlated with the outcome (wage). This is crucial here because only 67.15% are observed.</li></ul>
<p class="dimnote"><i>For full marks you may also note the rest of the Gauss–Markov unbiasedness set:
linearity in parameters and no perfect collinearity. Homoskedasticity is <b>not</b> required for
unbiasedness — only for efficient/valid standard errors.</i></p>`
          },
          {
            n: '1b',
            q: String.raw`Using those conditions, will the OLS in Table 1.1 be unbiased? (<code>reg wage education age, ro</code>:
educ 0.897, age 0.147, N=1343.)`,
            answer: String.raw`<p><b>No — OLS is most likely biased.</b> Only working women have a wage, and the decision to work is
<b>not random</b>: it correlates with unobservables (ability, motivation, reservation wage) that also drive
wages. That violates the zero-conditional-mean / random-selection condition ⇒ <b>sample selection bias</b>.</p>`
          },
          {
            n: '1c',
            q: String.raw`Heckman two-step (Table 1.2): wage eq. educ 0.983, age 0.212; select eq. married 0.431, children 0.447,
educ 0.058, age 0.035; <b>/mills lambda = 4.00 (p=0.000)</b>, rho 0.673, sigma 5.95. Is OLS unbiased? If
biased, name the source. (Hint: use λ.)`,
            answer: String.raw`<p><b>OLS is biased.</b> The inverse Mills ratio <b>λ = 4.00 is highly significant (p=0.000)</b>, which
confirms that selection (the decision to work) is correlated with the wage-equation error. The unobservables
that push a woman to participate also push her wage up, so omitting λ throws that term into the slopes ⇒
biased, inconsistent OLS. The significant λ is the smoking gun.</p>`
          },
          {
            n: '1d',
            q: String.raw`Interpret the wage and selection equations (Table 1.2).`,
            answer: String.raw`<p>All ceteris paribus:</p>
<p><b>Wage equation:</b> <b>educ 0.983</b> — +1 year education ⇒ wage higher by ~0.98, sig 1%.
<b>age 0.212</b> — +1 year age ⇒ +0.21 wage, sig 1%. (_cons 0.734 not significant, p=0.557.)</p>
<p><b>Selection (probability of working):</b> <b>married 0.431</b> and <b>children 0.447</b> — in this
<b>synthetic teaching dataset</b> being married and having more children <b>raise</b> the probability of
working (sig 1%). <b>educ 0.058</b>, <b>age 0.035</b> — more education and being older raise participation
(sig 1%). _cons −2.467: low baseline participation when all regressors are 0.</p>
<div class="note">💡 Interpret the SIGN of <code>children</code> with care: this is womenwk, a synthetic dataset,
so don't read economic meaning into it. In real Indonesian data (SAKERNAS) young children usually
<i>reduce</i> maternal labour supply — always read signs against the data-generating context.</div>`
          },
          {
            n: '1e',
            q: String.raw`Define the <b>exclusion restriction</b> and identify it in Table 1.2 (with coefficient & significance).`,
            answer: String.raw`<p><b>Definition:</b> a variable that enters the <b>selection</b> equation (it affects the probability of
being observed) but is <b>excluded</b> from the <b>outcome</b> equation (no direct effect on the wage). It
provides identification beyond the non-linearity of λ.</p>
<p><b>Here:</b> <code>married</code> (0.431, p=0.000) and <code>children</code> (0.447, p=0.000) — both
strongly affect the work decision (relevance ✓) but are excluded from the wage equation, justified by theory
(marriage/kids change the work/reservation-wage decision, not the employer’s wage offer). The exclusion is an
argued theoretical claim, not something tested.</p>`
          }
        ]
      },
      {
        label: 'Q2 (25) — Pooled Cross-Section & DiD',
        kind: 'essay',
        questions: [
          {
            n: '2a',
            q: String.raw`US women past reproductive age, 1972–1984; outcome <code>kids</code>. Table 2a: <code>reg kids y74 y76 y78
y80 y82 y84, r</code> — y74 0.182 (p=0.326), y82 −0.622 (p=0.001), y84 −0.788 (p=0.000); joint F p=0.000.
Interpret y74 and the fertility trend; is it significant?`,
            answer: String.raw`<p><b>y74 = 0.182:</b> vs the 1972 base year, women in 1974 had 0.18 more kids on average — but
<b>not significant</b> (p=0.326). <b>Trend:</b> the year coefficients become increasingly negative ⇒ a
<b>declining fertility trend</b> over time. <b>Significance:</b> yes, jointly — the F-test gives Prob>F=0.0000,
so the year effects are jointly significant.</p>`
          },
          {
            n: '2b',
            q: String.raw`Table 2b adds <code>educ</code> and interactions educ×year. <b>What is the effect of education on
fertility in 1984</b>, and what do the interaction terms represent? (educ −0.0407; y84educ −0.1744.)`,
            answer: String.raw`<p><b>Effect in 1984 = main + interaction = −0.0407 + (−0.1744) = −0.2151.</b> One more year of education
is associated with ~0.215 <b>fewer</b> kids in 1984, cp.</p>
<p>The interaction terms (e.g. y84educ) estimate the <b>change</b> in the education→fertility effect in a
given year <b>relative to the base year (1972)</b>. They answer "did the effect of education change over
time?" — not the effect itself.</p>`
          },
          {
            n: '2c',
            q: String.raw`What can you conclude about the change in the education effect between 1972 and 1984? Significant?`,
            answer: String.raw`<p>The change equals the interaction coefficient <b>y84educ = −0.1744</b>: the education effect became
0.174 <b>more negative</b> by 1984. It is <b>significant at 5%</b> (p=0.027 &lt; 0.05). So education’s
fertility-reducing effect grew substantially stronger between 1972 and 1984.</p>`
          },
          {
            n: '2d',
            q: String.raw`Table 2d adds age, agesq, black. How does y84educ change (−0.1744 → −0.1743), and why?`,
            answer: String.raw`<p>It barely moves (−0.1744 → −0.1743). Adding age and race <b>controls for omitted-variable bias</b>:
because age and race affect both fertility and correlate with education, controlling them purifies the
estimate. Here the interaction is essentially unchanged, showing it was already clean ⇒ the estimate is
robust and now more precisely a partial effect.</p>`
          },
          {
            n: '2e',
            q: String.raw`Table 2e DROPS the main effect <code>educ</code>. Can you still estimate the effect of education on
fertility? Interpret y84educ (now −0.1912).`,
            answer: String.raw`<p><b>No — you cannot.</b> Removing the main effect in an interaction model is a specification error. With
<code>educ</code> gone, <b>y84educ (−0.1912) becomes a biased mix</b> of the <i>level</i> of the education
effect and its <i>change</i> — it no longer isolates the change, so it cannot be interpreted as either the
1984 effect or the change. Always keep the main effect alongside its interactions.</p>`
          }
        ]
      },
      {
        label: 'Q3 (25) — Panel: FE / RE / LSDV / diagnostics',
        kind: 'essay',
        questions: [
          {
            n: '3a',
            q: String.raw`Model $y_{it}=\beta_1 X_{it}+\lambda_i+u_{it}$. What assumption about $\lambda_i$ is required under FE
vs RE?`,
            answer: String.raw`<p><b>FE:</b> $\lambda_i$ is <b>allowed to correlate</b> with $X_{it}$; it is treated as a fixed unknown
and eliminated by transformation (demeaning). <b>RE:</b> the stricter assumption that $\lambda_i$ is
<b>uncorrelated</b> with $X_{it}$ in every period; it is treated as random to gain efficiency.</p>`
          },
          {
            n: '3b',
            q: String.raw`If T=2, and you estimate by FE and First Differencing, what can you say about $\hat\beta_1$?`,
            answer: String.raw`<p>For <b>T=2 the FE (within) and FD estimators are algebraically identical</b> — the same $\hat\beta_1$ and
the same test statistics. Both eliminate $\lambda_i$ and reduce the model to a single time-difference.</p>`
          },
          {
            n: '3c',
            q: String.raw`Table 3.1 (<code>xtreg y x1, fe</code>, i=7, t=10): x1 coef = 2.48e+09, corr(u_i,Xb)=−0.5468, F(6,62)=2.97
(p=0.0131). If you instead ran LSDV (<code>regress y x1 i.country</code>), what coefficient on x1 would you get?`,
            answer: String.raw`<p><b>Exactly the same: 2.48e+09.</b> LSDV (a dummy per country) and the within estimator give an
identical slope because they exploit the same within variation.</p>`
          },
          {
            n: '3d',
            q: String.raw`Compare LSDV (c) with <code>xtreg, fe</code>.`,
            answer: String.raw`<p>The β₁ are <b>numerically identical</b> (same within variation). The difference is reporting: <b>LSDV
explicitly estimates an intercept for every country</b> (6 dummies for 7 groups), eating many degrees of
freedom; <code>xtreg, fe</code> is computationally efficient and hides the individual intercepts but yields the
same slope.</p>`
          },
          {
            n: '3e',
            q: String.raw`Table 3.2 Hausman: chi2(1)=3.67, p=0.0553. What do you conclude?`,
            answer: String.raw`<p><b>H0:</b> no systematic difference (RE consistent). <b>Ha:</b> systematic difference (use FE).
<b>p=0.0553:</b> we <b>fail to reject H0 at 5% but reject at 10%</b> — borderline. Given the indicated
correlation <code>corr(u_i,Xb)=−0.5468</code>, <b>Fixed Effects is recommended</b> to avoid bias.</p>`
          },
          {
            n: '3f',
            q: String.raw`<code>xttest3</code>: chi2(7)=42.77, p=0.0000. <code>xtserial</code>: F(1,6)=0.214, p=0.6603. Conclude.`,
            answer: String.raw`<p><b>Heteroskedasticity:</b> p=0.0000 ⇒ reject H0 ⇒ <b>heteroskedasticity is present</b>.
<b>Autocorrelation:</b> p=0.6603 ⇒ fail to reject H0 ⇒ <b>no first-order serial correlation</b>.</p>`
          },
          {
            n: '3g',
            q: String.raw`Given (f), how do you fix it?`,
            answer: String.raw`<p>Since there is heteroskedasticity but no autocorrelation, use <b>cluster-robust standard errors</b>:
<code>xtreg y x1, fe vce(cluster id)</code>. Alternatively, panel FGLS for heteroskedasticity
(<code>xtgls y x1, panels(heteroskedastic)</code>). This corrects the <b>standard errors</b>, not the
coefficients.</p>`
          }
        ]
      },
      {
        label: 'Q4 (25, optional) — Correlated Random Effects',
        kind: 'essay',
        questions: [
          {
            n: '4a',
            q: String.raw`District panel 1992–98, outcome <code>math4</code>. Table 4.1 columns: RE / FE / correlated-RE. Interpret
y94 using FE (−23.706***, SE 0.765) with statistical inference.`,
            answer: String.raw`<p>Controlling for district fixed effects and other time-varying factors, the math pass rate in <b>1994 was
23.7 percentage points lower than in the 1992 base year</b>, ceteris paribus. It is <b>significant at the 1%
level</b> (SE 0.765 ⇒ |t|≈31).</p>`
          },
          {
            n: '4b',
            q: String.raw`Interpret <code>lunch</code> using the RE results (−0.334***, SE 0.023). Expected sign?`,
            answer: String.raw`<p>A 1-percentage-point rise in the share of students eligible for free lunch (a poverty proxy) is
associated with a <b>0.334pp lower</b> math pass rate, cp, sig 1%. <b>Yes, the sign is expected</b>: higher
poverty lowers achievement through resources, nutrition, and socio-economic barriers.</p>`
          },
          {
            n: '4c',
            q: String.raw`Use the Hausman test (Table 4.2: chi2(9)=74.27, p=0.0000) to choose RE vs FE. Give H0 and Ha.`,
            answer: String.raw`<p><b>H0:</b> no systematic difference ⇒ RE consistent. <b>Ha:</b> systematic difference ⇒ FE preferred.
<b>chi2(9)=74.27, p=0.0000 ⇒ reject H0.</b> The unobserved district effects correlate with the regressors, so
RE is inconsistent ⇒ <b>use Fixed Effects</b>.</p>`
          },
          {
            n: '4d',
            q: String.raw`Alternative test: is the district-average <code>lenrolbar</code> significantly ≠ 0 (CRE column: 0.815,
SE 1.174)? Write H0/Ha and infer.`,
            answer: String.raw`<p><b>H0:</b> $\beta_{lenrolbar}=0$ (the time-mean is uncorrelated with $a_i$ ⇒ RE valid). <b>Ha:</b>
$\beta_{lenrolbar}\ne 0$ (correlation ⇒ FE/CRE). <b>Result:</b> 0.815 with SE 1.174 ⇒ z≈0.69, p&gt;0.10 ⇒
<b>fail to reject H0</b> on this single variable. <b>But</b> the overall Hausman (part c) strongly rejects RE,
so we rely on the overall test and choose <b>Fixed Effects</b>. (Mundlak: the joint test on all time-means is
the proper CRE analogue of Hausman.)</p>`
          }
        ]
      },
      {
        label: 'Q5 (25, optional) — Fixed Effects vs OLS (cross-section)',
        kind: 'essay',
        questions: [
          {
            n: '5a',
            q: String.raw`200 individuals across 5 regions (one year): wage, education, experience, region. Write the FE regression
to study education & experience controlling for region.`,
            answer: String.raw`<div class="formula">$wage_i=\beta_0+\beta_1 educ_i+\beta_2 exp_i+\beta_3 reg2_i+\beta_4 reg3_i+\beta_5 reg4_i+\beta_6 reg5_i+\varepsilon_i$</div>
<p>Region 1 = base category (LSDV form). Stata: <code>reg wage education experience i.region</code>.</p>`
          },
          {
            n: '5b',
            q: String.raw`Why and how would you include regional fixed effects?`,
            answer: String.raw`<p><b>Why:</b> each region has unobserved characteristics (cost of living, infrastructure, industry mix)
that affect wages. If high-wage regions also have more-educated workers, omitting region biases the
education/experience coefficients (omitted-variable bias). <b>How:</b> add region dummies (4 dummies for 5
regions), dropping one as the base group to avoid the dummy-variable trap (perfect collinearity).</p>`
          },
          {
            n: '5c',
            q: String.raw`Write the dummy-variable (LSDV) FE equation and interpret the education and experience coefficients.`,
            answer: String.raw`<div class="formula">$wage_i=\beta_0+\beta_1 educ_i+\beta_2 exp_i+\beta_3 reg2_i+\dots+\beta_6 reg5_i+\varepsilon_i$</div>
<ul><li><b>β₁ (education):</b> the <b>within-region</b> return to education — holding experience and region
constant, +1 year education changes average wage by β₁.</li>
<li><b>β₂ (experience):</b> holding education and region constant, +1 year experience changes wage by β₂.</li>
<li><b>β₃–β₆ (region dummies):</b> the average wage differential of that region vs Region 1, after
controlling for human capital.</li></ul>`
          },
          {
            n: '5d',
            q: String.raw`Write the plain OLS model without region FE and discuss its bias vs the FE model.`,
            answer: String.raw`<div class="formula">$wage_i=\beta_0+\beta_1 educ_i+\beta_2 exp_i+\varepsilon_i$</div>
<p><b>Bias (upward / OVB):</b> plain OLS ignores unobserved regional heterogeneity. If educated workers
migrate to high-wage regions, OLS <b>overstates</b> the return to education — it conflates the true education
effect with the effect of being in a richer region. Region FE holds region constant and isolates the
within-region (closer to causal) effect, neutralising the bias.</p>`
          }
        ]
      }
    ]
  };
})();
