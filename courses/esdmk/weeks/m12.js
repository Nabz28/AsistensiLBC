/* ============================================================================
   ESDMK · Week 12 — Demographic Transition & Bonus Demografi
   Bilingual (EN + ID). Registers on window.ESDMK_WEEKS.m12.
   Sources: Lecturer deck Pardede 2024, Todaro & Smith Ch.6, Adioetomo (2014).
   NOT directly tested in UAS 2025/2026 — included as macro background.

   Stylised demographic-transition geometry:
     Stage 1: high BR ≈ 35, high DR ≈ 30, small natural increase
     Stage 2: BR stays high, DR falls 30 → 10 (population explosion)
     Stage 3: BR falls 35 → 12, DR low ⇒ growth slows
     Stage 4: both ≈ 10–12, low/zero growth
   ============================================================================ */
(function () {
  window.ESDMK_WEEKS = window.ESDMK_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16';
  var FILL = 'rgba(217,138,22,.16)';

  /* ---- Chart 1: Demographic transition ------------------------------------ */
  var TRANSITION = { panels: [{
    title: 'Demographic transition: BR & DR over time',
    w: 460, h: 320,
    x: { min: 1780, max: 2050, label: 'Year' },
    y: { min: 0, max: 45, label: 'Rate per 1,000' },
    curves: [
      { kind: 'path',
        pts: [[1780,35],[1840,35],[1870,33],[1900,28],[1950,18],[2000,12],[2050,11]],
        smooth: true, color: TEAL, label: 'Birth rate' },
      { kind: 'path',
        pts: [[1780,30],[1840,28],[1870,22],[1900,15],[1950,10],[2000,9],[2050,11]],
        smooth: true, color: RED, label: 'Death rate' }
    ],
    notes: [
      { x: 1810, y: 32, text: 'Stage 1', color: '#777', anchor: 'middle', size: 10 },
      { x: 1885, y: 25, text: 'Stage 2 (boom)', color: '#777', anchor: 'middle', size: 10 },
      { x: 1955, y: 14, text: 'Stage 3', color: '#777', anchor: 'middle', size: 10 },
      { x: 2025, y: 11.5, text: 'Stage 4', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 2: Dependency ratio U-shape over time ------------------------- */
  var DEP = { panels: [{
    title: 'Indonesia dependency ratio — window of opportunity ≈ 2025–2035',
    w: 460, h: 320,
    x: { min: 1950, max: 2050, label: 'Year' },
    y: { min: 30, max: 90, label: 'Dependency ratio (%)' },
    curves: [
      { kind: 'path',
        pts: [[1950,80],[1970,85],[1980,80],[1990,68],[2000,55],[2010,50],[2020,45],[2030,43],[2040,50],[2050,57]],
        smooth: true, color: AMBER, label: 'DR = (0–14 + 65+) / 15–64' }
    ],
    notes: [
      { x: 2030, y: 38, text: 'window of opportunity', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  window.ESDMK_WEEKS.m12 = {
    id: 'm12',
    label: { en: 'Week 12', id: 'Pertemuan 12' },
    title: { en: 'Demographic Transition & Bonus Demografi', id: 'Transisi Demografi & Bonus Demografi' },
    subtitle: {
      en: 'Background week: fertility & mortality measures, the four-stage demographic transition, and Indonesia\'s window-of-opportunity dependency ratio — the macro backdrop to schooling, training, discrimination and migration.',
      id: 'Pertemuan latar: ukuran fertilitas & mortalitas, empat tahap transisi demografi, dan rasio ketergantungan jendela peluang Indonesia — latar makro untuk sekolah, pelatihan, diskriminasi, dan migrasi.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Basic demographic measures', id: 'Ukuran demografi dasar' },
        num: '1',
        cards: [
          {
            title: { en: 'Fertility', id: 'Fertilitas' },
            html: {
              en: `<p>Three workhorse fertility rates, all per <em>person-years lived</em> (PYL ≈ mid-year population):</p>
<div class="formula">$\\text{CBR}_{[0,T]} = \\dfrac{\\text{births in }[0,T]}{\\text{PYL}_{[0,T]}}$ — crude birth rate</div>
<div class="formula">$\\text{GFR}_{[0,T]} = \\dfrac{\\text{births in }[0,T]}{\\text{PYL of women 15–49}}$ — general fertility rate</div>
<div class="formula">$\\text{ASFR}_i = \\dfrac{\\text{births to women in age group }i}{\\text{PYL of women in age group }i}$, &nbsp; $\\text{TFR} = n \\sum_i \\text{ASFR}_i$</div>
<p>TFR is the synthetic-cohort average number of children a woman would have if she lived through her reproductive years at the current ASFR pattern. Indonesia's TFR fell from ≈5.5 (1970) to ≈2.4 (2009) and ≈2.2 today — a textbook fertility decline. The replacement-level threshold is ≈2.1.</p>`,
              id: `<p>Tiga tingkat fertilitas tulang punggung, semuanya per <em>person-years lived</em> (PYL ≈ penduduk tengah tahun):</p>
<div class="formula">$\\text{CBR} = \\dfrac{\\text{kelahiran}}{\\text{PYL}}$, $\\text{GFR} = \\dfrac{\\text{kelahiran}}{\\text{PYL perempuan 15–49}}$</div>
<div class="formula">$\\text{ASFR}_i$ per kelompok usia; $\\text{TFR} = n \\sum_i \\text{ASFR}_i$</div>
<p>TFR adalah rata-rata anak kohor sintetis yang dimiliki perempuan bila hidup melalui tahun reproduksi pada pola ASFR sekarang. TFR Indonesia turun ≈5,5 (1970) → ≈2,4 (2009) → ≈2,2 kini. Ambang penggantian ≈2,1.</p>`
            }
          },
          {
            title: { en: 'Mortality', id: 'Mortalitas' },
            html: {
              en: `<div class="formula">$\\text{CDR} = \\dfrac{\\text{deaths}}{\\text{PYL}}$, $\\text{ASDR}_i = \\dfrac{\\text{deaths age }i}{\\text{PYL age }i}$</div>
<div class="formula">$\\text{IMR} = \\dfrac{\\text{infant deaths (under 1)}}{\\text{live births}}$, $\\text{U5MR} = \\dfrac{\\text{deaths under 5}}{\\text{children under 5}}$</div>
<p>IMR is the headline indicator of child survival. Note "live births" in the denominator — stillbirths and miscarriages are excluded.</p>`,
              id: `<div class="formula">$\\text{CDR}, \\text{ASDR}_i, \\text{IMR}, \\text{U5MR}$ — definisi paralel ke fertilitas.</div>
<p>IMR adalah indikator utama kelangsungan hidup anak. Pembagi "kelahiran hidup" — bayi lahir mati & keguguran tidak masuk.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'The demographic transition', id: 'Transisi demografi' },
        num: '2',
        cards: [
          {
            title: { en: 'Four stages', id: 'Empat tahap' },
            html: {
              en: `<p>Every industrialising society passes through the same broad sequence of vital-rate movements:</p>
<ol>
<li><span class="key">Stage 1.</span> Pre-industrial. Both birth and death rates high (≈35/1000). Small natural increase; population grows slowly with periodic crises (famine, war, plague).</li>
<li><span class="key">Stage 2.</span> Death rate falls sharply — better sanitation, vaccines, food supply — while births stay high. <span class="key">Population explodes</span>. Western Europe lived this in 1850–1910; developing countries in 1950–1990.</li>
<li><span class="key">Stage 3.</span> Births fall as urbanisation, female education, contraception spread. Both rates converge to low levels; growth slows.</li>
<li><span class="key">Stage 4.</span> Both rates low (≈10/1000). Population stabilises; in late Stage 4 (Japan, much of Europe) deaths exceed births and the population shrinks.</li>
</ol>
<div class="note">Developing countries differ from Europe in two ways. (i) Their Stage 2 decline in deaths was faster (modern medicine arrived complete, not in slow steps). (ii) Their Stage 3 fertility decline is more variable: some converged fast (Thailand 5.5→1.8 in 40 years), others remain stuck (Zimbabwe 7.7→3.9). Indonesia is mid-transition: nearly at replacement TFR but with a large young cohort still in the pipeline.</div>`,
              id: `<p>Setiap masyarakat yang industrialisasi melewati urutan luas yang sama:</p>
<ol>
<li><span class="key">Tahap 1.</span> Pra-industri. Tingkat kelahiran & kematian tinggi (≈35/1000). Pertumbuhan alami kecil dengan krisis berkala.</li>
<li><span class="key">Tahap 2.</span> Tingkat kematian turun tajam — sanitasi, vaksin, pangan — sementara kelahiran tetap tinggi. <span class="key">Penduduk meledak</span>. Eropa Barat 1850–1910; negara berkembang 1950–1990.</li>
<li><span class="key">Tahap 3.</span> Kelahiran turun karena urbanisasi, pendidikan perempuan, kontrasepsi. Kedua tingkat menyatu rendah; pertumbuhan melambat.</li>
<li><span class="key">Tahap 4.</span> Keduanya rendah (≈10/1000). Penduduk stabil; di akhir Tahap 4 (Jepang, sebagian Eropa) kematian melebihi kelahiran dan penduduk menyusut.</li>
</ol>`
            },
            chart: TRANSITION
          }
        ]
      },

      {
        heading: { en: 'Bonus demografi: the window of opportunity', id: 'Bonus demografi: jendela peluang' },
        num: '3',
        cards: [
          {
            title: { en: 'Dependency ratio and the demographic dividend', id: 'Rasio ketergantungan & dividen demografi' },
            html: {
              en: `<div class="formula">$\\text{DR} = \\dfrac{\\text{pop. 0–14} + \\text{pop. 65+}}{\\text{pop. 15–64}} \\times 100$</div>
<p>During the fertility-decline phase of Stage 3 the working-age share (15–64) <em>grows faster</em> than dependants. DR <span class="key">falls</span> to a U-shaped minimum and then rises again as the elderly share takes over. The trough is the <span class="key">window of opportunity</span> — Indonesia's is roughly 2025–2035.</p>
<p>Lee & Mason (2006): the dividend has two phases.</p>
<ul>
<li><span class="key">First dividend.</span> A mechanical accounting gain — more workers per dependant → higher per-capita output, more savings, more investment. Bloom et al. (2003) attribute ≈30% of the East Asian growth miracle to this single effect.</li>
<li><span class="key">Second dividend.</span> Anticipating a longer retirement, workers save more during their peak years; the accumulated capital deepens long-run growth even after the window closes.</li>
</ul>`,
              id: `<div class="formula">$\\text{DR} = \\dfrac{\\text{0–14} + \\text{65+}}{\\text{15–64}} \\times 100$</div>
<p>Selama fase penurunan fertilitas Tahap 3, pangsa usia kerja (15–64) tumbuh lebih cepat daripada tanggungan. DR <span class="key">turun</span> ke minimum berbentuk-U lalu naik lagi saat pangsa lansia mengambil alih. Lembah itulah <span class="key">jendela peluang</span> — Indonesia kira-kira 2025–2035.</p>
<p>Lee & Mason (2006): dividen dua fase: <em>dividen pertama</em> (akuntansi: lebih banyak pekerja per tanggungan); <em>dividen kedua</em> (tabungan pra-pensiun mendorong investasi). Bloom dkk. (2003) mengaitkan ≈30% keajaiban Asia Timur pada efek ini.</p>`
            },
            chart: DEP
          },
          {
            title: { en: 'Berkah atau beban — when the dividend goes uncollected', id: 'Berkah atau beban — saat dividen tak terkumpul' },
            html: {
              en: `<p>The dividend is <em>not automatic</em>. A small working-age share is dependable only if it is <span class="key">employed and productive</span>. Indonesia faces three risks:</p>
<ol>
<li><span class="key">Health.</span> 10% low-birth-weight infants, 37% stunting prevalence, high adolescent smoking rates — productivity ceiling.</li>
<li><span class="key">Education.</span> Mean schooling ≈ 7.7 years (well below SMA completion); PISA scores rank 60+/69 in maths, reading and science; soft-skill gaps.</li>
<li><span class="key">Labour-market participation.</span> Female TPAK ≈ 51% vs male 82%. Informal sector ≈ 50% of all workers (≈60% for women). Youth unemployment ≈ 29% for 15–19, 17% for 20–24.</li>
</ol>
<p>If these are not addressed, the window closes with the working-age cohort stuck in low-productivity informal work and the demographic bonus turns into a <span class="key">demographic burden</span>: a large cohort that cannot fund its own retirement, much less the elderly cohort that follows.</p>
<div class="tip">The four UAS topics all link to this background. Schooling (Topic 1) raises the productivity that turns the bonus into income. Compensating wage differentials (Topic 2) and discrimination (Topic 3) shape who gets the productive jobs. Migration (Topic 4) is how Indonesia is currently exporting the dividend abroad — remittances are large but skill drain is real.</div>`,
              id: `<p>Dividen <em>tidak otomatis</em>. Pangsa usia kerja kecil hanya bermanfaat bila <span class="key">bekerja dan produktif</span>. Tiga risiko Indonesia:</p>
<ol>
<li><span class="key">Kesehatan.</span> 10% bayi BBLR, 37% stunting, prevalensi merokok remaja tinggi — plafon produktivitas.</li>
<li><span class="key">Pendidikan.</span> Rata-rata sekolah ≈ 7,7 tahun; skor PISA peringkat 60+/69; kesenjangan soft skill.</li>
<li><span class="key">Partisipasi pasar kerja.</span> TPAK perempuan ≈ 51% vs laki-laki 82%. Sektor informal ≈ 50% (≈60% bagi perempuan). Pengangguran muda ≈ 29% (15–19), 17% (20–24).</li>
</ol>
<p>Bila tidak ditangani, jendela tertutup dengan kohor usia kerja terkunci dalam pekerjaan informal produktivitas rendah dan bonus berubah menjadi <span class="key">beban demografi</span>.</p>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Demographic toolkit', id: 'Kit alat demografi' },
        num: 'F',
        cards: [
          {
            title: { en: 'Fertility, mortality, dependency', id: 'Fertilitas, mortalitas, ketergantungan' },
            html: {
              en: `<div class="formula">CBR = births / PYL &nbsp;·&nbsp; GFR = births / PYL(women 15–49)</div>
<div class="formula">$\\text{TFR} = n \\sum_i \\text{ASFR}_i$ &nbsp;(replacement ≈ 2.1)</div>
<div class="formula">CDR = deaths / PYL &nbsp;·&nbsp; ASDR$_i$ = deaths$_i$ / PYL$_i$</div>
<div class="formula">IMR = deaths&lt;1 / live births &nbsp;·&nbsp; U5MR = deaths&lt;5 / pop&lt;5</div>
<div class="formula">DR = (pop. 0–14 + 65+) / pop. 15–64 × 100</div>`,
              id: `<div class="formula">CBR, GFR, TFR, CDR, ASDR, IMR, U5MR, DR — definisi pada catatan.</div>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Two diagrams', id: 'Dua diagram' },
        num: 'G',
        cards: [
          { title: { en: 'Demographic transition', id: 'Transisi demografi' },
            html: {
              en: '<p>BR and DR over time; DR falls first (Stage 2), BR follows later (Stage 3), both converge in Stage 4. The gap between the two curves is the natural rate of increase, which produces the bulge of working-age cohort that becomes the demographic bonus.</p>',
              id: '<p>BR dan DR seiring waktu; DR turun dulu (Tahap 2), BR menyusul (Tahap 3), keduanya konvergen di Tahap 4. Celah antara kedua kurva adalah laju pertumbuhan alami yang menghasilkan benjolan kohor usia kerja yang menjadi bonus demografi.</p>'
            },
            chart: TRANSITION },
          { title: { en: 'Dependency ratio U', id: 'Rasio ketergantungan U' },
            html: {
              en: '<p>U-shaped DR over time. Indonesia\'s trough ≈ 2025–2035 — the window of opportunity. After 2035 the elderly share grows fast enough that DR rises again.</p>',
              id: '<p>DR berbentuk U seiring waktu. Lembah Indonesia ≈ 2025–2035 — jendela peluang. Setelah 2035 pangsa lansia tumbuh cukup cepat untuk membuat DR naik lagi.</p>'
            },
            chart: DEP }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'computation',
        q: { en: 'Argentina 1985–90: total pop 31,436k, women 15–49 = 7,469k, births/year = 686k. Compute CBR and GFR.',
             id: 'Argentina 1985–90: total 31.436k, perempuan 15–49 = 7.469k, kelahiran/tahun = 686k. Hitung CBR dan GFR.' },
        answer: [
          { en: 'CBR = 686/31,436 = 0.0218 ⇒ 21.8 per 1000. GFR = 686/7,469 = 0.0918 ⇒ 91.8 per 1000 women of childbearing age.',
            id: 'CBR = 686/31.436 = 21,8 per 1000. GFR = 686/7.469 = 91,8 per 1000 perempuan usia subur.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'Why doesn\'t a falling dependency ratio automatically deliver higher GDP per capita?',
             id: 'Mengapa rasio ketergantungan turun tidak otomatis menaikkan PDB per kapita?' },
        answer: [
          { en: 'The dividend is purely mechanical — more workers per dependant — but only translates to higher output if the workers are employed and productive. Without investment in health (stunting, smoking), education (PISA, soft skills) and labour-market access (female TPAK, formal-sector jobs), the bonus is wasted.',
            id: 'Dividen murni mekanis — lebih banyak pekerja per tanggungan — tetapi hanya berubah jadi output bila pekerja bekerja dan produktif. Tanpa investasi kesehatan, pendidikan, dan akses pasar kerja, bonus terbuang.' }
        ]
      }
    ]
  };
})();
