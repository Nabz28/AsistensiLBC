/* ============================================================================
   CSPD · Glossary — exam-ready definitions, grouped by topic.
   Registers on window.CSPD_GLOSSARY.
   ============================================================================ */
(function () {
  'use strict';

  window.CSPD_GLOSSARY = [
    /* ---- Limited dependent variables ---- */
    { group: 'Limited dependent variables', term: 'Latent variable y*', def: 'The unobserved, unconstrained outcome (e.g. desired spending) driven by x′β + ε. We observe only a censored/truncated function of it.' },
    { group: 'Limited dependent variables', term: 'Censoring', def: 'The boundary observations are KEPT but their value is capped to the limit (e.g. apt=800). Sample size unchanged; partial info survives. Handled by Tobit.' },
    { group: 'Limited dependent variables', term: 'Truncation', def: 'The out-of-range observations are DELETED entirely — you never see them. Sample size falls; info lost. Handled by truncreg.' },
    { group: 'Limited dependent variables', term: 'Corner solution', def: 'A genuine zero: the utility-maximising choice is on the boundary (the person truly wants 0). "Won’t", not "can’t".' },
    { group: 'Limited dependent variables', term: 'Tobit model', def: 'Censored regression: y=max(0,y*) with y*=x′β+ε, ε~N(0,σ²). One β governs both the participation and amount margins (single-index restriction). Estimated by MLE.' },
    { group: 'Limited dependent variables', term: 'Attenuation bias', def: 'Bias of a slope TOWARD zero. OLS on censored data treats capped values as true, injecting measurement error and flattening the slope; does not vanish as N→∞.' },
    { group: 'Limited dependent variables', term: 'Single-index restriction', def: 'Tobit’s assumption that the same β (and σ) drive both whether y>0 and how much. If the two margins differ, Tobit is misspecified (use Heckman).' },
    { group: 'Limited dependent variables', term: 'Unconditional ME', def: 'Marginal effect on E[y] (whole population, incl. censored): β·Φ(x′β/σ). The policy-relevant number. Stata: margins, predict(ystar(LL,UL)).' },
    { group: 'Limited dependent variables', term: 'Conditional ME', def: 'Marginal effect on E[y | uncensored] (interior units only). Stata: margins, predict(e(LL,UL)).' },
    { group: 'Limited dependent variables', term: 'Truncated regression', def: 'MLE that rescales the normal density by Φ(·) to account for the missing tail; estimates β for the observable subpopulation. Stata: truncreg y x, ll(#).' },

    /* ---- Sample selection ---- */
    { group: 'Sample selection', term: 'Incidental truncation', def: 'y is missing not because of y itself but because of a SEPARATE selection decision correlated with unobserved determinants of y (e.g. wages only for workers). Needs Heckman.' },
    { group: 'Sample selection', term: 'Sample selection bias', def: 'Bias from estimating on a non-random selected sample where E[ε | selected] ≠ 0. The selection rule correlates with the outcome’s unobservables.' },
    { group: 'Sample selection', term: 'Heckman model (Tobit II)', def: 'Two equations — a probit selection equation and an outcome equation with different coefficients — linked by error correlation ρ. Corrects selection via the inverse Mills ratio.' },
    { group: 'Sample selection', term: 'Inverse Mills ratio (λ)', def: 'λ(z)=φ(z)/Φ(z): the conditional mean of the error among selected units. Added as a regressor, it absorbs selection bias. Coefficient = ρ·σ_ε.' },
    { group: 'Sample selection', term: 'Exclusion restriction', def: 'A variable in the SELECTION equation but excluded from the OUTCOME equation (affects who is observed, not the outcome directly). Identifies Heckman beyond functional form. Argued, not tested.' },
    { group: 'Sample selection', term: 'rho (ρ)', def: 'Correlation between the selection and outcome errors. ρ=0 ⇒ no selection bias (OLS fine). Stata reports athrho=atanh(ρ); recover ρ=tanh(athrho).' },
    { group: 'Sample selection', term: 'LR test of independent equations', def: 'Heckman test of H0: ρ=0. Reject ⇒ selection bias present ⇒ report Heckman; fail to reject ⇒ report OLS (or low power).' },
    { group: 'Sample selection', term: 'Two-step (Heckit) vs MLE', def: 'Two-step: probit → compute λ̂ → OLS with λ̂ added (consistent, less efficient, needs SE correction). MLE: joint likelihood (efficient, gives ρ, σ). Coefficients nearly identical.' },

    /* ---- Pooled cross-section ---- */
    { group: 'Pooled cross-section', term: 'Pooled cross-section', def: 'Independent random samples stacked across time; DIFFERENT units each round. Boosts N and lets you study how relationships change over time. Cannot remove a_i.' },
    { group: 'Pooled cross-section', term: 'Time (year) dummy', def: 'Shifts the intercept for a given year. Captures economy-wide changes common to all units (a change in the LEVEL), holding x-effects constant.' },
    { group: 'Pooled cross-section', term: 'Interaction term', def: 'x×time: lets a SLOPE change over time. Its coefficient is the CHANGE in the effect vs the base year, not the effect. Always keep the main effect.' },
    { group: 'Pooled cross-section', term: 'Chow test', def: 'F-test that all coefficients are stable across periods (no structural break). Reject ⇒ the relationship changed; a single pooled model is invalid.' },
    { group: 'Pooled cross-section', term: 'Difference-in-Differences', def: 'Causal estimate = (treated after − before) − (control after − before) = the post×treat interaction. Removes fixed group differences and common time shocks.' },
    { group: 'Pooled cross-section', term: 'Parallel trends', def: 'DiD’s key assumption: absent treatment, treated and control groups would have changed by the same amount. They need not start at the same level.' },
    { group: 'Pooled cross-section', term: 'Natural / quasi-experiment', def: 'An exogenous external event (policy, shock) that affects a treatment group but not a control group, enabling DiD.' },

    /* ---- Panel ---- */
    { group: 'Panel data', term: 'Panel (longitudinal) data', def: 'The SAME units observed over multiple periods. Lets you control for time-invariant unobserved heterogeneity. Declare: xtset id year.' },
    { group: 'Panel data', term: 'Unobserved effect a_i', def: 'Time-invariant individual heterogeneity (ability, culture, geography) bundled into one term. Source of OVB in a cross-section if correlated with x.' },
    { group: 'Panel data', term: 'Pooled OLS (POLS)', def: 'OLS ignoring the panel structure. Biased if a_i correlates with x; SEs wrong (serial correlation) — use cluster-robust SEs. A baseline only.' },
    { group: 'Panel data', term: 'Fixed Effects (FE)', def: 'Removes a_i by within transformation (demeaning). Allows Corr(a_i, x)≠0; the most credible estimator for controlling time-invariant confounding (but not time-varying confounders or reverse causality). Drops time-invariant regressors.' },
    { group: 'Panel data', term: 'Within transformation', def: 'Subtract each unit’s own time-mean from every variable; anything constant within the unit (incl. a_i) vanishes. OLS on demeaned data = within (FE) estimator.' },
    { group: 'Panel data', term: 'LSDV', def: 'Least Squares Dummy Variables: a dummy intercept per unit. Gives the IDENTICAL slope to the within estimator; costs many df. reg y x i.id.' },
    { group: 'Panel data', term: 'First Differencing (FD)', def: 'Subtract the previous period: Δy=β₁Δx+Δu. Removes a_i; loses the first period. Identical to FE at T=2; differs at T≥3. reg D.y D.x.' },
    { group: 'Panel data', term: 'Strict exogeneity', def: 'E[u_it | x_i1,…,x_iT, a_i]=0 — after removing a_i, the idiosyncratic error is uncorrelated with regressors in every period. Makes FE/FD unbiased & consistent.' },
    { group: 'Panel data', term: "Simpson's paradox", def: 'Between-unit (cross-section) and within-unit (FE) variation can give opposite signs. FE recovers the within-unit truth by comparing each unit to itself.' },
    { group: 'Panel data', term: 'Random Effects (RE)', def: 'Treats a_i as random and UNCORRELATED with x; GLS / quasi-demeaning by θ. Keeps time-invariant regressors. Consistent only if Cov(a_i,x)=0.' },
    { group: 'Panel data', term: 'theta (θ)', def: 'RE quasi-demeaning weight θ=1−√(σ²_u/(σ²_u+Tσ²_a)). θ=0 ⇒ POLS; θ=1 ⇒ FE; between ⇒ RE removes a fraction of a_i.' },
    { group: 'Panel data', term: 'Breusch–Pagan LM test', def: 'Tests H0: σ²_a=0 (RE vs POLS). Reject ⇒ panel effects exist ⇒ RE beats POLS. Stata: xttest0.' },
    { group: 'Panel data', term: 'Hausman test', def: 'Tests H0: Cov(a_i,x)=0 (RE consistent). Reject ⇒ RE biased ⇒ use FE. Compares FE (consistent) with RE (efficient under H0). Stata: hausman fe re.' },
    { group: 'Panel data', term: 'Correlated Random Effects (CRE) / Mundlak', def: 'Add the time-averages x̄_i to an RE regression. Gives FE-consistent slopes AND estimates time-invariant variables. Wald test on the means = robust Hausman.' },
    { group: 'Panel data', term: 'Balanced vs unbalanced panel', def: 'Balanced: every unit has the same number of periods. Unbalanced: some periods missing (attrition, entry/exit). FE/RE handle imbalance automatically.' },
    { group: 'Panel data', term: 'Attrition bias', def: 'Selection bias from non-random dropout: if leaving correlates with the idiosyncratic error/outcome, estimates are biased. FE tolerates dropout correlated only with a_i.' },
    { group: 'Panel data', term: 'Cluster-robust SE', def: 'Standard errors valid under within-unit correlation and heteroskedasticity (vce(cluster id)). Fixes inference, not the coefficients. Use after xttest3/xtserial flag problems.' },

    /* ---- Cross-cutting ---- */
    { group: 'Cross-cutting', term: 'Omitted variable bias (OVB)', def: 'Bias from leaving out a variable correlated with both y and a regressor. Sign = (effect of omitted on y) × (corr with the included x). FE removes time-invariant OVB.' },
    { group: 'Cross-cutting', term: 'MLE', def: 'Maximum Likelihood: choose parameters most likely to have generated the data. Used for Tobit, truncreg, probit/Heckman. Reports LR tests and Pseudo-R².' },
    { group: 'Cross-cutting', term: 'Ceteris paribus', def: 'Holding all other regressors constant — required in every coefficient interpretation.' }
  ];
})();
