/* ============================================================================
   LBC LEARNING — Interactive Stata output table  (window.STATA)
   Renders an authentic, light "Stata results window" the way it appears on an
   exam paper: monospace, rule lines, right-aligned numbers. Any value can be
   made hoverable/tappable — a popup explains what that number means.

   Usage in course content (loaded BEFORE the week scripts):
     html: SCENARIO_HTML + window.STATA({
       cmd: '. reg wage education age, robust',     // command echo Stata prints
       dep: 'wage',                                  // top-left label (dep. var)
       info: [                                       // right-hand summary block
         ['Number of obs', '1,343'],
         ['Prob > F', '0.000', 'Overall model p-value … <0.05 ⇒ jointly significant'],
         ['R-squared', '0.2535', '25.4% of the variation in wage is explained …']
       ],
       cols: ['Coef.', 'Std. err.', 't', 'P>|t|', '[95% conf. interval]'],
       colTips: { 't': '= Coef ÷ SE. |t|>1.96 ⇒ significant at 5%.' },
       rows: [
         { v:'education', c:['.8966','.0494','18.15','0.000','.7997   .9935'],
           tips:{ v:'the coefficient on education', 0:'+1 yr educ ⇒ wage +0.90 …', 2:'t = 18.15 …', 3:'p<0.001 …' } },
         { v:'age',   c:['.1466','.0189','7.76','0.000','.1095   .1836'] },
         '-',                                         // a rule line
         { group:'select' },                          // a sub-block label (e.g. Heckman)
         ...
       ],
       notes: [ { t:'LR test of indep. eqns (rho=0): Prob > chi2 = 0.000', tip:'Reject ⇒ selection bias ⇒ Heckman.' } ]
     })

   The engine (study.js) calls wireStata() after injecting, which powers the
   hover/tap popups. Styles live in study.css (.stata2 / .st-cell / #st-pop).
   ============================================================================ */
(function () {
  'use strict';

  function esc(s) { return String(s == null ? '' : s); }

  // a value that may carry a popup. `tip` may be HTML.
  function cell(value, tip, cls) {
    var v = esc(value);
    if (tip == null || tip === '') return '<span class="' + (cls || '') + '">' + v + '</span>';
    return '<span class="st-cell ' + (cls || '') + '" tabindex="0">' + v +
      '<span class="st-tip">' + tip + '</span></span>';
  }

  window.STATA = function (spec) {
    spec = spec || {};
    var cols = spec.cols || [];
    var colTips = spec.colTips || {};
    var h = '';
    // optional mathematical model shown ABOVE the output table
    if (spec.model) {
      h += '<div class="st-modelbox"><span class="st-modelcap">' +
        (spec.modelLabel || 'Model') + '</span><div class="st-modeleq">' + spec.model + '</div></div>';
    }
    h += '<div class="stata2-wrap"><div class="stata2">';

    // command echo (Stata prints the command you ran at the top)
    if (spec.cmd) h += '<div class="st-cmd">' + esc(spec.cmd) + '</div>';

    // title + right-hand info block
    if (spec.title || (spec.info && spec.info.length)) {
      h += '<div class="st-head">';
      h += '<div class="st-title">' + esc(spec.title || '') + '</div>';
      if (spec.info && spec.info.length) {
        h += '<div class="st-info">';
        spec.info.forEach(function (r) {
          h += '<div class="st-info-row"><span class="st-info-l">' + esc(r[0]) + '</span>' +
            '<span class="st-info-eq">=</span>' + cell(r[1], r[2], 'st-info-v') + '</div>';
        });
        h += '</div>';
      }
      h += '</div>';
    }

    // the results table
    h += '<table class="st-tbl"><thead><tr>';
    h += '<th class="st-dep">' + esc(spec.dep || '') + '</th>';
    cols.forEach(function (c) {
      h += '<th class="st-colh">' + cell(c, colTips[c], '') + '</th>';
    });
    h += '</tr></thead><tbody>';

    (spec.rows || []).forEach(function (r) {
      if (r === '-' || r === '--') { h += '<tr class="st-rule"><td colspan="' + (cols.length + 1) + '"></td></tr>'; return; }
      if (r.group != null) {
        h += '<tr class="st-grp"><td class="st-var st-grp-l" colspan="' + (cols.length + 1) + '">' + esc(r.group) + '</td></tr>';
        return;
      }
      var tips = r.tips || {};
      h += '<tr>';
      h += '<td class="st-var">' + cell(r.v, tips.v, '') + '</td>';
      (r.c || []).forEach(function (val, i) {
        h += '<td class="st-num">' + cell(val, tips[i], '') + '</td>';
      });
      // pad missing cells
      for (var k = (r.c || []).length; k < cols.length; k++) h += '<td class="st-num"></td>';
      h += '</tr>';
    });
    h += '</tbody></table>';

    // footer note lines (LR test, F test all u_i=0, hausman line, etc.)
    if (spec.notes && spec.notes.length) {
      h += '<div class="st-foot">';
      spec.notes.forEach(function (n) {
        h += '<div class="st-foot-row">' + cell(n.t, n.tip, '') + '</div>';
      });
      h += '</div>';
    }

    h += '</div></div>';
    return h;
  };
})();
