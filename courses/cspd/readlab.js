/* ============================================================================
   CSPD · Read Data Lab — a standalone library of annotated Stata output cases.
   The per-week "Read Data" tabs teach output reading in context; this lab is the
   master list of worked cases + the universal "how to read any table" primer.
   Registers on window.CSPD_READLAB (assembled into COURSE.readDataLab).
   ============================================================================ */
(function () {
  'use strict';

  window.CSPD_READLAB = {
    label: { en: 'Read Data', id: 'Baca Data' },
    title: { en: 'Read Data — the output-reading drill room',
             id: 'Baca Data — ruang latihan membaca output' },
    blurb: String.raw`Every CSPD model ends in a Stata table. This lab is your case library: read the numbers,
say the right sentence, and dodge the classic interpretation traps. Start with the universal primer, then
drill each model. (Each week also has its own contextual "Read Data" tab.)`,

    sections: [
      /* ---------------------------------------------------------------- primer */
      {
        heading: 'Primer — how to read ANY regression table',
        num: '0',
        cards: [
          {
            title: 'The 6-step reading routine',
            html: String.raw`
<ol>
  <li><b>What model is it?</b> <code>reg</code>/<code>xtreg</code>/<code>tobit</code>/<code>truncreg</code>/
      <code>heckman</code> — this decides whether the coefficient is an effect on $y$, on $y^*$, or on a
      probability.</li>
  <li><b>Sign &amp; size of each coefficient</b> — with units.</li>
  <li><b>Significance</b> — p-value / |t| or |z| (≳1.96 ⇒ 5%), or stars (* 10%, ** 5%, *** 1%).</li>
  <li><b>The headline diagnostics</b> — N, F/Wald/LR, R²/Pseudo-R², and any test block.</li>
  <li><b>The model-specific number</b> — censored count (Tobit), λ/ρ (Heckman), F-test of $u_i$ /
      Hausman / xttest0 (panel).</li>
  <li><b>Write the sentence</b> — number + units + <i>ceteris paribus</i> + significance.</li>
</ol>
<div class="tip">📝 Significance stars convention used across these tables: <code>* p&lt;0.10</code>,
<code>** p&lt;0.05</code>, <code>*** p&lt;0.01</code>. Standard errors are in parentheses unless labelled.</div>`
          },
          {
            title: 'The marginal-effects command cheat (Tobit/Truncated)',
            html: String.raw`
<div class="stata"><span class="ttl">after tobit / truncreg</span><span class="cmd">margins, dydx(*) predict(xb)</span>          <span class="dim">effect on latent y*  (= raw coef)</span>
<span class="cmd">margins, dydx(*) predict(e(LL,UL))</span>     <span class="dim">conditional: E[y | uncensored]</span>
<span class="cmd">margins, dydx(*) predict(ystar(LL,UL))</span> <span class="dim">unconditional: E[y]  (policy number)</span></div>
<ul class="annot">
  <li><code>e(0,.)</code> = probability the outcome is uncensored; <code>ystar(0,.)</code> = expected
      observed $y$ with a floor at 0.</li>
  <li>Right-censored: unconditional &gt; conditional. Left-censored: reversed. Few censored obs ⇒ they
      coincide.</li>
</ul>`
          }
        ]
      },

      /* -------------------------------------------------------- limited dep var */
      {
        heading: 'Tobit & Truncated (Topic 1)',
        num: '1',
        cards: [
          {
            title: 'Tobit — read the coef as an effect on the latent score',
            html: String.raw`
<span class="rd-tag">UCLA aptitude · ceiling 800</span>
<div class="stata"><span class="cmd">tobit apt read math, ul(800)</span>
   read  <span class="hl">2.70</span>     math  <span class="hl">5.91</span>     /sigma ...
   17 right-censored obs   LR chi2(2)=188.97   Pseudo R2=0.083</div>
<ul class="annot">
  <li><b>read 2.70:</b> +1 reading point ⇒ +2.70 in <b>latent</b> aptitude $y^*$, cp — not the observed score.</li>
  <li><b>17/200 censored (8.5%):</b> small ⇒ conditional ≈ unconditional MEs.</li>
  <li>To report an effect on observed $y$: <code>margins, predict(ystar(.,800))</code>.</li>
</ul>`
          },
          {
            title: 'Truncated vs OLS — the slope is flatter under OLS',
            html: String.raw`
<span class="rd-tag">achievement · truncated at 40</span>
<div class="stata"><span class="cmd">reg achiv female langscore mathscore</span>        <span class="dim">biased (flatter)</span>
<span class="cmd">truncreg achiv female langscore mathscore, ll(40)</span>  <span class="dim">consistent</span></div>
<ul class="annot">
  <li>OLS on a truncated sample is attenuated because the lower tail is gone and
      $E[\varepsilon\mid y&gt;40]&gt;0$.</li>
  <li><code>truncreg</code> coefficient is the effect on observed $y$; report <code>predict(xb)</code>,
      not a probability-in-interval ME.</li>
</ul>`
          }
        ]
      },

      /* ------------------------------------------------------------- selection */
      {
        heading: 'Heckman / Selection (Topic 2)',
        num: '2',
        cards: [
          {
            title: 'The four numbers to circle on any heckman output',
            html: String.raw`
<span class="rd-tag">womenwk · 1343 of 2000 selected</span>
<div class="stata"><span class="cmd">heckman wage education age, select(work = married children education age)</span>
<b>wage</b>   education <span class="hl">0.98</span>   age 0.21
<b>select</b> married 0.43   children 0.45   education 0.06   age 0.03
<b>/mills</b> lambda <span class="hl">4.00</span> (p=0.000)   rho <span class="hl">0.67</span>   sigma 5.95
LR test rho=0:  Prob &gt; chi2 = <span class="hl">0.000</span></div>
<ul class="annot">
  <li><b>education 0.98 (wage):</b> selection-corrected return, +0.98 wage per year, sig 1%.</li>
  <li><b>lambda 4.00, p=0.000:</b> selection bias present ⇒ OLS on workers is biased.</li>
  <li><b>rho 0.67&gt;0:</b> workers have higher unobserved wage potential ⇒ naive OLS overstates the mean.</li>
  <li><b>LR p=0.000:</b> reject ρ=0 ⇒ report Heckman. Exclusion restrictions: <code>married, children</code>
      (in selection, excluded from wage).</li>
</ul>`
          },
          {
            title: 'Decide: report Heckman or revert to OLS?',
            html: String.raw`
<div class="decide"><span>λ / ρ significant (LR rejects)</span><span>→ selection bias → report Heckman</span></div>
<div class="decide"><span>λ / ρ insignificant (LR fails to reject)</span><span>→ report OLS (more efficient)</span></div>
<p>"Fail to reject ρ=0" means no <i>detectable</i> selection — not proof there is none (could be low power
or a weak exclusion restriction).</p>`
          }
        ]
      },

      /* --------------------------------------------------------- pooled / DiD */
      {
        heading: 'Pooled Cross-Section & DiD (Topic 3)',
        num: '3',
        cards: [
          {
            title: 'Year dummies, interactions, and the DiD coefficient',
            html: String.raw`
<span class="rd-tag">three readings on one theme</span>
<div class="stata"><span class="cmd">reg kids y74 ... y84, r</span>          y84 <span class="neg">-0.788</span>***  joint F p=0.000  <span class="dim">declining trend</span>
<span class="cmd">reg kids ... educ y74educ ... y84educ, r</span>   y84educ <span class="hl">-0.174</span>** <span class="dim">CHANGE in educ effect vs 1972</span>
<span class="cmd">reg lprice y81##nearinc controls, r</span>   y81#nearinc <span class="hl">-0.132</span> <span class="dim">DiD = incinerator effect</span></div>
<ul class="annot">
  <li><b>Year dummy:</b> intercept shift vs base year (economy-wide).</li>
  <li><b>Interaction:</b> the <b>change</b> in a slope (keep the main effect or it’s biased!).</li>
  <li><b>DiD:</b> read <b>only the interaction</b> as the treatment effect (parallel-trends assumed).</li>
</ul>`
          }
        ]
      },

      /* -------------------------------------------------------------- panel */
      {
        heading: 'Panel: FE / FD / RE / Hausman / CRE (Topics 4–5)',
        num: '4',
        cards: [
          {
            title: 'POLS → FE: the slope moves, fixed effects bite',
            html: String.raw`
<span class="rd-tag">growth · 266 countries</span>
<div class="stata"><span class="cmd">reg gdp_growth remit_gdp unemp</span>          remit 0.019   <span class="dim">POLS (biased)</span>
<span class="cmd">xtreg gdp_growth remit_gdp unemp, fe</span>      remit <span class="hl">0.037</span>   <span class="dim">FE (within)</span>
   F test all u_i=0:  Prob&gt;F = <span class="hl">0.000</span>  <span class="dim">⇒ FE beats POLS</span></div>
<ul class="annot">
  <li>The coefficient changes from POLS to FE ⇒ unobserved heterogeneity mattered.</li>
  <li>FE reads "<b>when a country’s</b> remittances rise…" (within variation), cp.</li>
</ul>`
          },
          {
            title: 'FE = LSDV = FD, but watch the N',
            html: String.raw`
<span class="rd-tag">rent · 2-period panel</span>
<div class="stata"><span class="cmd">xtreg lrent ..., fe</span>          lavginc 0.310   <span class="dim">N=128</span>
<span class="cmd">reg lrent ... i.city</span>          lavginc 0.310   <span class="dim">N=128 (LSDV, same slope)</span>
<span class="cmd">reg D.lrent D....</span>             lavginc 0.310   <span class="dim">N=64 (FD loses 1st period)</span></div>
<ul class="annot">
  <li>Identical slopes — all remove the same $a_i$. FD halves N on a 2-period panel.</li>
  <li>T=2 ⇒ FE and FD are algebraically identical.</li>
</ul>`
          },
          {
            title: 'Hausman — pick FE or RE',
            html: String.raw`
<span class="rd-tag">airfare</span>
<div class="stata"><span class="cmd">xtreg lfare ... concen ..., fe</span>   concen <span class="hl">0.169</span>
<span class="cmd">xtreg lfare ... concen ..., re</span>   concen <span class="hl">0.209</span>
<span class="cmd">hausman fe re</span>   ->  reject H0  ->  <b>use FE</b>
<span class="cmd">xttest0</span>        ->  reject H0  ->  RE &gt; POLS</div>
<ul class="annot">
  <li>FE effect (16.9%) &lt; RE (20.9%): RE is contaminated by $a_i$–$x$ correlation.</li>
  <li><b>Reject Hausman ⇒ FE</b> (consistent). Chain: FE &gt; RE &gt; POLS.</li>
  <li>Borderline Hausman (p≈0.055)? Side with FE if <code>corr(u_i,Xb)</code> is clearly non-zero.</li>
</ul>`
          },
          {
            title: 'CRE / Mundlak — FE consistency + time-invariant effects',
            html: String.raw`
<span class="rd-tag">PSID wages</span>
<div class="stata"><span class="cmd">egen mean_exp = mean(exp), by(id)</span>   <span class="dim">(repeat per time-varying var)</span>
<span class="cmd">xtreg lwage exp ... ed fem mean_exp ..., re</span>   <span class="dim">slopes match FE; ed/fem now estimable</span>
<span class="cmd">test mean_exp ...</span>   ->  reject H0  ->  need CRE/FE</div>
<ul class="annot">
  <li>The time-means $\bar x_i$ absorb the $a_i$–$x$ correlation; the $x_{it}$ slope equals FE.</li>
  <li><b>Wald test on the means</b> = a robust Hausman: reject ⇒ RE insufficient ⇒ CRE/FE.</li>
  <li>Bonus: you also recover effects of time-invariant <code>ed</code>, <code>fem</code> that FE drops.</li>
</ul>`
          },
          {
            title: 'Panel diagnostics → fix the standard errors',
            html: String.raw`
<span class="rd-tag">post-estimation</span>
<div class="stata"><span class="cmd">xttest3</span>    Modified Wald (groupwise heterosk.)   p=<span class="hl">0.000</span> -> heterosk. present
<span class="cmd">xtserial y x</span>  Wooldridge AR(1) test           p=<span class="hl">0.660</span> -> no autocorr.
<span class="dim">fix:</span> <span class="cmd">xtreg y x, fe vce(cluster id)</span></div>
<ul class="annot">
  <li>These tests change <b>standard errors</b>, not coefficients.</li>
  <li>Heterosk. and/or AR ⇒ <b>cluster-robust SEs</b> (or FGLS for pure heteroskedasticity).</li>
</ul>`
          }
        ]
      }
    ]
  };
})();
