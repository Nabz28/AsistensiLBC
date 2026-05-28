/* ============================================================================
   ESDMK · Week 14 — Economics of Migration
   Bilingual (EN + ID). Registers on window.ESDMK_WEEKS.m14.
   Sources: Lecturer deck Pardede 2024; Lewis (1954), Sjaastad (1962), Todaro
   (1969), Harris–Todaro (1970), Mincer (1978), Ravenstein (1885–89), Lee (1966),
   Stark & Yitzhaki (1988), Wajdi–Adioetomo–Mulder (2017), Pardede–McCann–
   Venhorst (2020). Maps to UAS Topic 4.

   Diagram geometries:
     Lewis: OS=2 (subsistence), OW=4 (capitalist), labour demand N₁Q₁ shifts out
     Rogers-Castro vs PV: PV monotonically declining; RC has young-adult bump
   ============================================================================ */
(function () {
  window.ESDMK_WEEKS = window.ESDMK_WEEKS || {};

  var RED = '#c0392b', TEAL = '#0e8fb8', LINE = '#444', AMBER = '#d98a16', GREEN = '#15803d';

  /* ---- Chart 1: Lewis dual-sector model ----------------------------------- */
  var LEWIS = { panels: [{
    title: 'Lewis (1954): labour absorbed at fixed wage OW until surplus exhausted',
    w: 460, h: 320,
    x: { min: 0, max: 10, label: 'Labour in capitalist sector' },
    y: { min: 0, max: 8, label: 'Real wage' },
    curves: [
      { id: 'S',  kind: 'hline', y: 2, color: '#999', label: 'OS: subsistence' },
      { id: 'W',  kind: 'hline', y: 4, color: LINE,   label: 'OW: capitalist wage' },
      { id: 'N1', kind: 'line', p1: [0, 7], p2: [4, 4], color: RED,  label: 'N₁Q₁ (MRP₁)' },
      { id: 'N2', kind: 'line', p1: [0, 8], p2: [6, 4], color: TEAL, label: "N₂Q₂ (MRP₂ after reinvest)" }
    ],
    points: [
      { on: ['N1', 'W'], guideX: 'Q₁', dot: true },
      { on: ['N2', 'W'], guideX: 'Q₂', dot: true }
    ],
    notes: [
      { x: 7.5, y: 5.5, text: 'capitalist surplus reinvested ⇒ shift right', color: GREEN, anchor: 'middle', size: 10 },
      { x: 2.0, y: 1.0, text: 'unlimited supply at OW (gap to OS = surplus)', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 2: Migration probability — RC vs PV ------------------------- */
  var RC_PV = { panels: [{
    title: 'Migration by age: Rogers–Castro (data) vs human-capital PV (theory)',
    w: 460, h: 320,
    x: { min: 0, max: 70, label: 'Age' },
    y: { min: 0, max: 1.0, label: 'Migration index' },
    curves: [
      { kind: 'path',
        pts: [[0,1.0],[10,0.95],[20,0.85],[30,0.70],[40,0.50],[50,0.30],[60,0.10],[70,0.02]],
        smooth: true, color: TEAL, label: 'PV (declining)' },
      { kind: 'path',
        pts: [[0,0.10],[10,0.08],[15,0.10],[18,0.30],[22,0.60],[25,0.55],[30,0.40],[40,0.20],[55,0.10],[70,0.05]],
        smooth: true, color: RED, label: 'Rogers–Castro (humped)' }
    ],
    notes: [
      { x: 22, y: 0.72, text: 'observed migration peaks in 20s', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  /* ---- Chart 3: Push-pull schematic --------------------------------------- */
  var PUSH_PULL = { panels: [{
    title: 'Lee (1966) push-pull with intervening obstacles',
    w: 460, h: 280,
    x: { min: 0, max: 10, label: '' },
    y: { min: 0, max: 5, label: '' },
    curves: [
      { id: 'axis', kind: 'hline', y: 0.5, color: '#bbb' }
    ],
    points: [
      { at: [1.5, 3.0], label: 'origin', dot: true },
      { at: [8.5, 3.0], label: 'destination', dot: true }
    ],
    notes: [
      { x: 1.5, y: 4.3, text: '+ schools, + safety',  color: GREEN, anchor: 'middle', size: 10 },
      { x: 1.5, y: 1.6, text: '− low wage, − no jobs', color: RED,   anchor: 'middle', size: 10 },
      { x: 8.5, y: 4.3, text: '+ high wage, + jobs',   color: GREEN, anchor: 'middle', size: 10 },
      { x: 8.5, y: 1.6, text: '− abuse risk, − cost',  color: RED,   anchor: 'middle', size: 10 },
      { x: 5.0, y: 2.8, text: 'intervening obstacles: distance, visa, debt, language', color: AMBER, anchor: 'middle', size: 10 },
      { x: 5.0, y: 1.0, text: '+ personal factors (selection): age, gender, education, family ties', color: '#777', anchor: 'middle', size: 10 }
    ]
  }] };

  window.ESDMK_WEEKS.m14 = {
    id: 'm14',
    label: { en: 'Week 14', id: 'Pertemuan 14' },
    title: { en: 'Economics of Migration', id: 'Ekonomi Migrasi' },
    subtitle: {
      en: 'Lewis dual sector, Sjaastad human-capital migration, Todaro / Harris–Todaro expected-wage migration, Mincer family decisions, Ravenstein / Lee push-pull, the gravity model — and what they say about Indonesian migrant workers.',
      id: 'Sektor ganda Lewis, migrasi modal manusia Sjaastad, migrasi upah ekspektasi Todaro / Harris–Todaro, keputusan keluarga Mincer, push-pull Ravenstein / Lee, model gravitasi — dan apa kata mereka tentang pekerja migran Indonesia.'
    },

    /* ==================== NOTES ==================== */
    notes: [
      {
        heading: { en: 'Definitions: who is a migrant?', id: 'Definisi: siapa migran?' },
        num: '1',
        cards: [
          {
            title: { en: 'Space + time', id: 'Ruang + waktu' },
            html: {
              en: `<p>Boyle et al. (1998): migration is a movement across an administrative boundary with a degree of permanence (typically ≥ 6 months). The two axes — <span class="key">spatial</span> (boundary crossed) and <span class="key">temporal</span> (long enough to count) — distinguish migration from short trips.</p>
<ul>
<li><span class="key">Internal</span> migration: within a country. Indonesia: inter-kecamatan, inter-kabupaten, inter-provinsi.</li>
<li><span class="key">International</span> migration: across a national border. Indonesia → MY/HK/TW/SG/JP for low-skill labour; Indonesia → US/AU/UK for high-skill.</li>
<li><span class="key">Circulation</span>: repeated movement between the same origin and destination (e.g. weekly commuting).</li>
<li><span class="key">Cyclical</span>: seasonal (harvest, religious holidays).</li>
</ul>
<p>Richmond (1998) maps migrants on a 2×2 of <em>economic / political</em> motive and <em>voluntary / forced</em>. Labour migrants (Gojek-Grab drivers from Cianjur to Jakarta; PMI to HK) sit firmly in the voluntary-economic quadrant.</p>`,
              id: `<p>Boyle dkk. (1998): migrasi adalah gerakan melintasi batas administratif dengan derajat permanensi (umumnya ≥ 6 bulan). Dua sumbu — <span class="key">ruang</span> (batas dilewati) dan <span class="key">waktu</span> (cukup lama untuk dihitung) — membedakan migrasi dari perjalanan singkat.</p>
<ul>
<li><span class="key">Internal</span>: dalam negeri. Indonesia: antar-kecamatan, antar-kabupaten, antar-provinsi.</li>
<li><span class="key">Internasional</span>: lintas negara. ID → MY/HK/TW/SG/JP keterampilan rendah; ID → US/AU/UK keterampilan tinggi.</li>
<li><span class="key">Sirkulasi</span>: gerakan berulang asal-tujuan yang sama.</li>
<li><span class="key">Siklikal</span>: musiman.</li>
</ul>`
            }
          }
        ]
      },

      {
        heading: { en: 'Lewis (1954): unlimited supplies of labour', id: 'Lewis (1954): pasokan tenaga kerja tak terbatas' },
        num: '2',
        cards: [
          {
            title: { en: 'Two sectors, one wage gap', id: 'Dua sektor, satu kesenjangan upah' },
            html: {
              en: `<p>An economy has two sectors. The <span class="key">subsistence sector</span> (rural agriculture) absorbs everyone left over at an average earnings OS. The <span class="key">capitalist sector</span> pays a fixed wage OW > OS — high enough to attract workers but constant because workers can be drawn from the surplus rural labour pool at will.</p>
<p>The capitalist sector hires up to the point where its MRP curve meets the wage line OW. The rectangle <em>between</em> MRP and OW (above OW up to MRP) is the <span class="key">capitalist surplus</span> — profits. The surplus is reinvested, MRP shifts right (more capital → more demand for labour), and the sector absorbs more workers — still at OW. This continues until the rural surplus is exhausted; only then does the wage start rising (the "Lewis turning point").</p>
<p><span class="key">Application.</span> For Indonesian labour migration abroad, Lewis is the macro-level engine: vast rural surplus at very low OS (rural Indonesia) faces a capitalist abroad at OW (Hong Kong, Singapore, Malaysia) several multiples higher. Workers will keep flowing until either the wage gap closes or the surplus is gone — neither is in sight.</p>
<div class="note">Lewis assumes a closed economy in the original. For international labour migration we re-interpret "capitalist" as "foreign capitalist sector", and the labour supply curve to it is the rural Indonesian reserve at OS. The wage gap is enormous (e.g. domestic worker in HK ≈ HKD 4,870/month ≈ Rp 10m vs Rp 1m in rural ID), which is exactly why flows persist despite the risks.</div>`,
              id: `<p>Ekonomi punya dua sektor. <span class="key">Sektor subsisten</span> (pertanian pedesaan) menyerap sisanya pada pendapatan rata-rata OS. <span class="key">Sektor kapitalis</span> membayar upah tetap OW > OS — cukup tinggi menarik tetapi konstan karena pekerja bisa ditarik dari kolam tenaga kerja surplus pedesaan sesuka hati.</p>
<p>Sektor kapitalis merekrut sampai MRP-nya bertemu garis upah OW. Persegi <em>antara</em> MRP dan OW adalah <span class="key">surplus kapitalis</span> — laba. Surplus diinvestasikan kembali, MRP bergeser ke kanan, dan sektor menyerap lebih banyak pekerja — tetap di OW. Berlanjut sampai surplus pedesaan habis; baru lalu upah mulai naik ("titik balik Lewis").</p>
<p><span class="key">Aplikasi.</span> Untuk migrasi tenaga kerja Indonesia ke luar negeri, Lewis adalah mesin tingkat makro: surplus pedesaan luas pada OS rendah (ID rural) menghadapi kapitalis di luar negeri pada OW (HK, SG, MY) berkali lipat lebih tinggi. Pekerja terus mengalir sampai kesenjangan upah menutup atau surplus habis.</p>`
            },
            chart: LEWIS
          }
        ]
      },

      {
        heading: { en: 'Sjaastad (1962): migration as human-capital investment', id: 'Sjaastad (1962): migrasi sebagai investasi modal manusia' },
        num: '3',
        cards: [
          {
            title: { en: 'The PV decision rule', id: 'Aturan keputusan PV' },
            html: {
              en: `<p>Sjaastad noticed that big income differences persisted across US regions <em>despite</em> massive internal migration — incompatible with Lewis-style instant equalisation. The resolution: migration is an <em>investment</em> that has costs (monetary and psychic) and so does not happen until the present value of net gains exceeds zero.</p>
<p>An individual in origin $i$ moves to destination $j$ if</p>
<div class="formula">$$PV_{ij} = \\sum_{t=1}^{T} \\frac{U_j^t - U_i^t - C_{ij}^t}{(1+r)^t} > 0,$$</div>
<p>and chooses the $j$ with the largest $PV_{ij}$. Symbols:</p>
<ul>
<li>$U_k^t$ — expected utility or real income at $k$ in period $t$.</li>
<li>$C_{ij}^t$ — moving and resettlement costs in period $t$, monetary <em>and</em> psychic.</li>
<li>$T$ — expected remaining working life. Younger people have larger $T$ ⇒ higher $PV$ ⇒ migrate more.</li>
<li>$r$ — personal discount rate.</li>
</ul>
<div class="tip">The exam hint reframes <span class="key">abuse risk as a psychic / non-monetary cost</span> — it raises $C_{ij}^t$ but does not necessarily drive $PV$ below zero. If $U_j - U_i$ is large enough (the wage gap dominates), the migration is still rational even with high $C$. This is exactly the framework needed for the UAS Topic 4 essay.</div>`,
              id: `<p>Sjaastad memerhatikan kesenjangan pendapatan besar bertahan antar wilayah AS <em>meskipun</em> migrasi internal masif — tak cocok dengan penyamaan instan ala Lewis. Resolusinya: migrasi adalah <em>investasi</em> berbiaya (moneter dan psikis), tidak terjadi sampai nilai sekarang gain neto melebihi nol.</p>
<p>Individu di asal $i$ pindah ke tujuan $j$ bila</p>
<div class="formula">$$PV_{ij} = \\sum_{t=1}^{T} \\frac{U_j^t - U_i^t - C_{ij}^t}{(1+r)^t} > 0,$$</div>
<p>dan memilih $j$ dengan $PV_{ij}$ terbesar.</p>
<div class="tip">Petunjuk ujian membingkai ulang <span class="key">risiko abuse sebagai biaya psikis / non-moneter</span> — ia menaikkan $C_{ij}^t$ tetapi tidak otomatis menjadikan $PV$ negatif. Bila $U_j - U_i$ cukup besar (kesenjangan upah dominan), migrasi tetap rasional bahkan dengan $C$ tinggi.</div>`
            }
          },
          {
            title: { en: 'Why theory says it\'s a young-adult activity', id: 'Mengapa teori berkata kegiatan dewasa-muda' },
            html: {
              en: `<p>Two implications follow directly from the PV formula. (i) Long expected horizon $T$ → larger PV. Young adults have the most working years left to amortise the fixed cost, so the rate of migration <em>should</em> fall monotonically with age.</p>
<p>(ii) Lower opportunity cost at origin → larger gap $U_j - U_i$. The young typically earn less at origin (they have not accumulated experience), so the relative gain is bigger.</p>
<p>Lucas (1997) and the Rogers–Castro (1981) curve, however, show that empirically migration is <em>humped</em>, peaking in the early-to-mid 20s — not monotonically declining. The gap reveals what the PV model misses: education-then-job transitions (people don't move until they finish school), family formation, network effects in the 20s, and credit constraints on the very young.</p>`,
              id: `<p>Dua implikasi langsung dari rumus PV. (i) Horizon harapan $T$ panjang → PV lebih besar. Dewasa muda punya paling banyak tahun kerja tersisa untuk mengamortisasi biaya tetap. (ii) Opportunity cost asal rendah → kesenjangan $U_j - U_i$ besar.</p>
<p>Lucas (1997) dan kurva Rogers–Castro (1981) menunjukkan empirisnya migrasi <em>berbenjol</em>, puncak di awal–pertengahan 20-an — bukan turun monoton. Celah mengungkap apa yang PV lewatkan: transisi sekolah-ke-kerja, pembentukan keluarga, efek jaringan di usia 20-an, kendala kredit pada anak.</p>`
            },
            chart: RC_PV
          }
        ]
      },

      {
        heading: { en: 'Todaro & Harris–Todaro: expected-wage migration', id: 'Todaro & Harris–Todaro: migrasi upah ekspektasi' },
        num: '4',
        cards: [
          {
            title: { en: 'Why migrants flood urban areas with high unemployment', id: 'Mengapa migran membanjiri kota dengan pengangguran tinggi' },
            html: {
              en: `<p>1960s urban unemployment was rising in developing countries — yet rural-to-urban migration kept accelerating. Lewis cannot explain this. Todaro (1969) proposed that what matters is the <span class="key">expected</span> urban wage, not the actual urban wage:</p>
<div class="formula">$$E[W_u] = W_u \\cdot \\frac{E_u}{L_u},$$</div>
<p>where $E_u/L_u$ is the probability of getting one of the urban jobs (employment over labour force). Migration is positive whenever the expected urban wage exceeds the rural wage:</p>
<div class="formula">$$M = \\dot L_u = f\\big(E[W_u] - W_r\\big).$$</div>
<p>Equilibrium requires $E[W_u] = W_r$, i.e.</p>
<div class="formula">$$W_u \\cdot \\frac{E_u}{L_u} = W_r \\;\\Leftrightarrow\\; 1 - \\frac{E_u}{L_u} = 1 - \\frac{W_r}{W_u},$$</div>
<p>so a higher minimum-wage-supported urban wage $W_u$ <em>requires</em> a higher equilibrium urban unemployment rate $u = 1 - E_u/L_u$. Workers keep coming until the expected wage is dragged back down to the rural floor.</p>
<div class="note">Striking policy implication: creating <em>more</em> urban jobs (e.g. by industrial policy) raises the expected urban wage and <span class="key">attracts more migrants</span> — sometimes by more than the new jobs absorb. Net urban unemployment can rise after pro-employment programmes. This is the Harris–Todaro paradox.</div>`,
              id: `<p>1960-an pengangguran urban naik di negara berkembang — tetap saja migrasi pedesaan-ke-urban menggila. Lewis tidak bisa menjelaskan. Todaro (1969): yang penting upah <span class="key">ekspektasi</span> urban, bukan upah aktual:</p>
<div class="formula">$$E[W_u] = W_u \\cdot \\frac{E_u}{L_u},$$</div>
<p>dengan $E_u/L_u$ probabilitas dapat pekerjaan urban. Migrasi positif kapan pun upah ekspektasi urban melebihi upah pedesaan. Keseimbangan: $E[W_u] = W_r$, sehingga upah urban tinggi <em>membutuhkan</em> tingkat pengangguran urban yang tinggi.</p>
<div class="note">Implikasi: menciptakan <em>lebih banyak</em> pekerjaan urban menaikkan upah ekspektasi dan <span class="key">menarik lebih banyak migran</span>. Pengangguran urban neto bisa naik setelah program pro-kerja. Inilah paradoks Harris–Todaro.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Mincer (1978): the family migration decision', id: 'Mincer (1978): keputusan migrasi keluarga' },
        num: '5',
        cards: [
          {
            title: { en: 'Tied movers and tied stayers', id: 'Tied movers & tied stayers' },
            html: {
              en: `<p>Households move when the <em>family</em>, not individual, net gain is positive. Let $G_1$ be the husband's net gain and $G_2$ the wife's:</p>
<div class="formula">$G_f = G_1 + G_2,\\; \\text{move if}\\; G_f > 0.$</div>
<ul>
<li>Both positive ($G_1, G_2 > 0$) — move (unconflicted gain).</li>
<li>Both negative — stay.</li>
<li><span class="key">Tied mover.</span> $G_1 > 0$, $G_2 < 0$, but $G_1 > |G_2|$ → family moves and the wife loses out individually.</li>
<li><span class="key">Tied stayer.</span> $G_1 < 0$, $G_2 > 0$, but $|G_1| > G_2$ → family stays and the wife loses an attractive opportunity.</li>
</ul>
<p>Because wives historically had lower wages and more career interruptions, $|G_2|$ tends to be small compared to $G_1$ — so families behave as if they were following the husband's career. Empirically this is exactly the pattern: a one-child increase reduces inter-province migration probability sharply, and married women migrate less than single women but as part of family moves.</p>
<p>For Indonesian female PMI to HK/SG (overwhelmingly young, often-married women migrating <em>alone</em>), the model needs to be inverted: the family migration is <em>not</em> happening, but one member is <span class="key">sent</span> by the household to remit. This is the Stark (1988) "new economics of migration" — households diversify income by allocating one member to a distant labour market.</p>`,
              id: `<p>Rumah tangga pindah bila gain neto <em>keluarga</em>, bukan individu, positif. Misalkan $G_1$ gain suami, $G_2$ istri: pindah bila $G_f = G_1 + G_2 > 0$.</p>
<ul>
<li>Keduanya positif — pindah.</li>
<li>Keduanya negatif — tetap.</li>
<li><span class="key">Tied mover.</span> $G_1 > 0$, $G_2 < 0$, $G_1 > |G_2|$ → keluarga pindah, istri rugi individu.</li>
<li><span class="key">Tied stayer.</span> $G_1 < 0$, $G_2 > 0$, $|G_1| > G_2$ → keluarga tetap, istri kehilangan peluang.</li>
</ul>
<p>Untuk PMI perempuan ke HK/SG (umumnya perempuan muda, sering menikah, migrasi <em>sendiri</em>), modelnya perlu dibalik: migrasi keluarga <em>tidak</em> terjadi, tetapi satu anggota <span class="key">dikirim</span> rumah tangga untuk mengirim remitansi. Inilah "new economics of migration" Stark (1988) — rumah tangga mendiversifikasi pendapatan dengan mengalokasikan satu anggota ke pasar tenaga kerja jauh.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Other frameworks: Ravenstein, Lee, gravity', id: 'Kerangka lain: Ravenstein, Lee, gravitasi' },
        num: '6',
        cards: [
          {
            title: { en: 'Ravenstein\'s laws (1885–89)', id: 'Hukum Ravenstein (1885–89)' },
            html: {
              en: `<p>Eleven empirical "laws" still useful as a sanity check:</p>
<ol>
<li>Most migrants move a short distance.</li>
<li>Migration proceeds in stages — small towns to medium, then to capital.</li>
<li>Long-distance moves go to the largest centres.</li>
<li>Every migration current produces a counter-current.</li>
<li>Urban dwellers migrate less than rural dwellers (the rural pool feeds the urban one).</li>
<li>Women migrate more within their country of birth; men more internationally.</li>
<li>Most migrants are adult; whole families rarely move.</li>
<li>Big towns grow more by migration than by natural increase.</li>
<li>Migration increases with technology (transport) and industry growth.</li>
<li>The main direction is agriculture → industry-and-commerce.</li>
<li>Economic motives dominate.</li>
</ol>`,
              id: `<p>Sebelas "hukum" empiris masih berguna sebagai pemeriksaan kewajaran:</p>
<ol>
<li>Mayoritas migran pindah jarak pendek.</li>
<li>Bertahap — kota kecil ke menengah, lalu ke ibukota.</li>
<li>Jarak jauh ke pusat-pusat terbesar.</li>
<li>Tiap arus menghasilkan arus balik.</li>
<li>Penduduk urban migrasi lebih sedikit.</li>
<li>Perempuan migrasi lebih dalam negeri; laki-laki lebih internasional.</li>
<li>Mayoritas dewasa; keluarga utuh jarang pindah.</li>
<li>Kota besar tumbuh lebih oleh migrasi.</li>
<li>Migrasi naik dengan teknologi dan industri.</li>
<li>Arah utama pertanian → industri-perdagangan.</li>
<li>Motif ekonomi dominan.</li>
</ol>`
            }
          },
          {
            title: { en: 'Lee (1966) push-pull and the gravity model', id: 'Lee (1966) push-pull dan model gravitasi' },
            html: {
              en: `<p>Lee organised the determinants of migration into four categories: <span class="key">origin factors</span> (push and pull), <span class="key">destination factors</span> (push and pull), <span class="key">intervening obstacles</span> (distance, cost, language, visa), <span class="key">personal factors</span> (age, education, life cycle). A move happens only if the destination pulls outweigh the origin pulls plus the obstacles.</p>
<p>The <span class="key">gravity model</span> implements this empirically:</p>
<div class="formula">$\\hat M_{ij} = k\\, \\dfrac{P_i\\, P_j}{d_{ij}^{b}}$ &nbsp;or in logs &nbsp; $\\ln \\hat M_{ij} = a_0 + a_1 \\ln P_i + a_2 \\ln P_j - b \\ln d_{ij}$.</div>
<p>Wajdi et al. (2017) expand it for Indonesian inter-provincial migration with $\\ln(\\text{GDP}_i), \\ln(\\text{GDP}_j), \\ln(\\text{AGRI}_i), \\ln(\\text{AGRI}_j), \\ln(E_i), \\ln(E_j), \\ln(U_i), \\ln(U_j)$, common-border and migrant-stock dummies. The findings confirm Ravenstein's first law (distance decays sharply) and add that <em>destination GDP and education</em> matter more than origin push factors — pull beats push.</p>`,
              id: `<p>Lee mengorganisir determinan migrasi ke empat kategori: <span class="key">faktor asal</span> (push/pull), <span class="key">faktor tujuan</span> (push/pull), <span class="key">hambatan intervening</span> (jarak, biaya, bahasa, visa), <span class="key">faktor personal</span>. Pindah hanya bila pull tujuan melebihi pull asal plus hambatan.</p>
<p>Model <span class="key">gravitasi</span> mengimplementasikannya: $\\ln \\hat M_{ij} = a_0 + a_1 \\ln P_i + a_2 \\ln P_j - b \\ln d_{ij}$. Wajdi dkk. (2017) memperluas untuk migrasi antar-provinsi Indonesia dengan PDB, sektor agri, pendidikan, pengangguran — temuannya pull tujuan mengalahkan push asal.</p>`
            },
            chart: PUSH_PULL
          }
        ]
      },

      {
        heading: { en: 'Indonesian migrant workers: applying the toolkit', id: 'Pekerja migran Indonesia: menerapkan kit alat' },
        num: '7',
        cards: [
          {
            title: { en: 'Why workers keep going abroad despite abuse risk', id: 'Mengapa pekerja terus pergi walau berisiko abuse' },
            html: {
              en: `<p>BP2MI: 25,643 placements in January 2025 alone, ≈90% to MY/HK/TW/SG/JP. Concurrently, IOM and SBMI report hundreds of cases of physical, psychological and sexual abuse 2019–22. The flow continues. The combined Lewis + Sjaastad reading:</p>
<ol>
<li><span class="key">Lewis-style wage gap (macro).</span> The rural Indonesian subsistence wage is a small fraction of the HK domestic-worker wage. The gap is enormous and persistent. Migration absorbs surplus rural labour until the wage gap closes — and it is nowhere close to closing.</li>
<li><span class="key">Sjaastad-style PV (micro).</span> The individual's PV calculation has $U_j - U_i$ in the numerator (large gain) and $C_{ij}$ that includes (i) monetary cost of recruitment, agent fees, debt; (ii) <span class="key">psychic cost of abuse risk</span>, separation from family, cultural unfamiliarity. The PV is positive because the wage gap, multiplied by the expected duration $T$, dominates the cost — even when the cost is honestly accounted.</li>
<li><span class="key">Information asymmetry.</span> Ex ante many migrants underestimate the probability of abuse (recruiters under-report). Their <em>perceived</em> $C$ is below the true $C$, so observed flows exceed what fully-informed flows would be.</li>
<li><span class="key">Limited domestic alternatives.</span> The opportunity cost $U_i$ is desperately low — subsistence wage that does not cover children's school fees. For many migrants the relevant comparison is not "stay safely in Indonesia and earn $W_r$" but "stay unsafely in Indonesia with no income at all". This raises the effective $U_j - U_i$.</li>
<li><span class="key">Family-driven (Stark).</span> One adult is sent by the household to remit. Even when the migrant's individual net gain is small or negative once psychic costs are honestly priced, the <em>household's</em> gain through remittances is large — children's schooling, parents' health, sibling's wedding. The decision is collective.</li>
<li><span class="key">Network effects.</span> Existing communities at destination (HK Indonesian community, SG Pondok Indah) lower the psychic cost of newcomers and reduce information asymmetry over time. Each cohort of migrants makes the next one cheaper.</li>
</ol>`,
              id: `<p>BP2MI: 25.643 penempatan Januari 2025 saja, ≈90% ke MY/HK/TW/SG/JP. Bersamaan, IOM dan SBMI laporkan ratusan kasus abuse fisik, psikis, seksual 2019–22. Arus berlanjut. Bacaan Lewis + Sjaastad gabungan:</p>
<ol>
<li><span class="key">Kesenjangan upah Lewis (makro).</span> Upah subsisten pedesaan ID fraksi kecil dari upah PRT HK. Sangat besar dan persisten.</li>
<li><span class="key">PV Sjaastad (mikro).</span> $U_j - U_i$ besar, $C_{ij}$ mencakup biaya moneter (rekrutmen, agen, utang) dan <span class="key">biaya psikis abuse</span>, perpisahan, budaya asing. PV positif karena kesenjangan upah dikali $T$ mendominasi biaya.</li>
<li><span class="key">Asimetri informasi.</span> Banyak migran ex ante meremehkan probabilitas abuse. $C$ yang dipersepsi di bawah $C$ sejati — arus teramati melebihi arus informasi-penuh.</li>
<li><span class="key">Alternatif domestik terbatas.</span> Opportunity cost $U_i$ sangat rendah. Perbandingan relevan bukan "tetap aman di ID dan dapat $W_r$" tetapi "tetap tak aman di ID tanpa pendapatan sama sekali".</li>
<li><span class="key">Didorong keluarga (Stark).</span> Satu dewasa dikirim rumah tangga untuk mengirim remitansi. Gain rumah tangga besar.</li>
<li><span class="key">Efek jaringan.</span> Komunitas yang ada di tujuan menurunkan biaya psikis newcomer dan asimetri informasi.</li>
</ol>`
            }
          },
          {
            title: { en: 'Heterogeneity: who actually migrates', id: 'Heterogenitas: siapa sebenarnya yang migrasi' },
            html: {
              en: `<p>The UAS asks for the individual-characteristics analysis. Use Pardede–McCann–Venhorst (2020) findings on the Indonesian Family Life Survey:</p>
<table>
<thead><tr><th>Characteristic</th><th>Effect on $P(\\text{migrate})$</th><th>Why (PV / Lewis / family)</th></tr></thead>
<tbody>
<tr><td><span class="key">Age</span></td><td>Inverted-U, peak in 20s; the older, the less</td><td>Long horizon $T$ + low origin opportunity cost ⇒ higher PV at young age. Rogers–Castro hump confirmed.</td></tr>
<tr><td><span class="key">Gender</span></td><td>Female head of household most mobile; otherwise mixed</td><td>Indonesian destination demand for domestic workers absorbs women specifically. Female headship + need to remit dominates.</td></tr>
<tr><td><span class="key">Education</span></td><td>Higher education ⇒ higher migration (all distances)</td><td>Wider destination set, lower discrimination at destination, easier search. Highly educated also have higher $U_j - U_i$ in destination labour markets.</td></tr>
<tr><td><span class="key">Marital status</span></td><td>Never married highest; married lower; divorced/widowed female heads with dependants high</td><td>Family ties = psychic cost (Mincer). Never-married have low ties. Divorced/widowed with dependants need to remit — Stark mechanism.</td></tr>
<tr><td>Household size</td><td>Negative — larger household ⇒ less migration</td><td>Larger family = more dependants attached, harder to coordinate moves; family-gain calculation tilts to stay.</td></tr>
<tr><td>Income</td><td>J-shaped — very low income migrates short-distance only; middle and upper income migrate further</td><td>Liquidity constraint: migration is an investment requiring savings. The very poor can only afford short moves; the middle class can afford international moves.</td></tr>
</tbody>
</table>
<div class="tip">UAS structure: introduce flow + Lewis macro gap; develop Sjaastad PV with abuse-as-psychic-cost; analyse heterogeneity via age (PV horizon), gender (destination demand + Stark sending), education (wider destination set), marital status (tied stayer vs Stark-sender). Close with policy: focus on reducing $C_{ij}$ (BP2MI pre-departure training, IOM protection, bilateral worker-protection agreements) rather than restricting the flow itself.</div>`,
              id: `<p>UAS minta analisis karakteristik individu. Pakai temuan Pardede–McCann–Venhorst (2020) atas IFLS:</p>
<table>
<thead><tr><th>Karakteristik</th><th>Efek pada $P(\\text{migrate})$</th><th>Mengapa</th></tr></thead>
<tbody>
<tr><td><span class="key">Usia</span></td><td>U-terbalik, puncak 20-an</td><td>Horizon $T$ panjang + opportunity cost asal rendah ⇒ PV lebih tinggi saat muda. Rogers–Castro.</td></tr>
<tr><td><span class="key">Gender</span></td><td>Perempuan kepala RT paling mobile</td><td>Permintaan tujuan ID untuk PRT menyerap perempuan khusus + butuh remitansi.</td></tr>
<tr><td><span class="key">Pendidikan</span></td><td>Lebih tinggi → lebih migrasi</td><td>Set tujuan lebih luas, diskriminasi tujuan lebih rendah, pencarian lebih mudah.</td></tr>
<tr><td><span class="key">Status nikah</span></td><td>Belum nikah tertinggi; janda kepala RT dengan tanggungan tinggi</td><td>Ikatan keluarga = biaya psikis (Mincer). Janda dgn tanggungan butuh remitansi — mekanisme Stark.</td></tr>
<tr><td>Ukuran RT</td><td>Negatif</td><td>RT besar = lebih banyak tanggungan terikat.</td></tr>
<tr><td>Pendapatan</td><td>J-shape</td><td>Kendala likuiditas: migrasi investasi butuh tabungan.</td></tr>
</tbody>
</table>
<div class="tip">Struktur UAS: arus + kesenjangan makro Lewis; kembangkan PV Sjaastad dengan abuse-sebagai-biaya-psikis; analisis heterogenitas via usia, gender, pendidikan, status nikah. Tutup dengan kebijakan: fokus menurunkan $C_{ij}$ daripada membatasi arus.</div>`
            }
          }
        ]
      }
    ],

    /* ==================== FORMULAS ==================== */
    formulas: [
      {
        heading: { en: 'Migration toolkit', id: 'Kit alat migrasi' },
        num: 'F',
        cards: [
          {
            title: { en: 'Lewis, Sjaastad, Todaro, Mincer, gravity', id: 'Lewis, Sjaastad, Todaro, Mincer, gravitasi' },
            html: {
              en: `<div class="formula"><strong>Lewis (1954).</strong> Capitalist wage $OW$ constant while rural surplus exists. Hire to MRP = OW; reinvest surplus shifts MRP outward.</div>
<div class="formula"><strong>Sjaastad (1962).</strong> $\\;PV_{ij} = \\displaystyle\\sum_{t=1}^{T} \\frac{U_j^t - U_i^t - C_{ij}^t}{(1+r)^t} > 0;\\;\\;$ move to $j$ with max PV.</div>
<div class="formula"><strong>Todaro / Harris–Todaro.</strong> $E[W_u] = W_u \\cdot E_u/L_u$. Equilibrium: $E[W_u] = W_r$ ⇒ $u^{*} = 1 - W_r/W_u$.</div>
<div class="formula"><strong>Mincer (1978).</strong> $G_f = G_1 + G_2$; tied mover if $G_2 < 0, G_1 > |G_2|$.</div>
<div class="formula"><strong>Gravity.</strong> $\\hat M_{ij} = k \\cdot P_i P_j / d_{ij}^{b};\\;\\;\\ln \\hat M_{ij} = a_0 + a_1 \\ln P_i + a_2 \\ln P_j - b \\ln d_{ij}$.</div>`,
              id: `<div class="formula"><strong>Lewis.</strong> Upah kapitalis $OW$ konstan selama surplus pedesaan ada.</div>
<div class="formula"><strong>Sjaastad.</strong> $\\;PV_{ij} = \\displaystyle\\sum_{t=1}^{T} \\frac{U_j^t - U_i^t - C_{ij}^t}{(1+r)^t} > 0$</div>
<div class="formula"><strong>Todaro / HT.</strong> $E[W_u] = W_u \\cdot E_u/L_u$; keseimbangan $u^{*} = 1 - W_r/W_u$.</div>
<div class="formula"><strong>Mincer.</strong> $G_f = G_1 + G_2$</div>
<div class="formula"><strong>Gravitasi.</strong> $\\ln \\hat M_{ij} = a_0 + a_1 \\ln P_i + a_2 \\ln P_j - b \\ln d_{ij}$</div>`
            }
          }
        ]
      }
    ],

    /* ==================== GRAPHS ==================== */
    graphs: [
      {
        heading: { en: 'Three diagrams', id: 'Tiga diagram' },
        num: 'G',
        cards: [
          { title: { en: '1. Lewis dual sector', id: '1. Sektor ganda Lewis' },
            html: { en: '<p>OS subsistence floor; OW capitalist wage line; MRP curves shifting right as profits are reinvested. Workers absorbed at OW until the rural surplus exhausts (Lewis turning point).</p>',
                    id: '<p>OS lantai subsisten; OW garis upah kapitalis; kurva MRP bergeser ke kanan saat laba direinvest. Pekerja terserap pada OW sampai surplus pedesaan habis (titik balik Lewis).</p>' },
            chart: LEWIS },
          { title: { en: '2. Migration by age (RC vs PV)', id: '2. Migrasi menurut usia (RC vs PV)' },
            html: { en: '<p>The PV model predicts a monotonically declining curve; Rogers–Castro data show a hump in the 20s. The discrepancy is what life-cycle factors (school completion, family formation, network seeding) explain.</p>',
                    id: '<p>Model PV memprediksi kurva turun monoton; data Rogers–Castro berbenjol di usia 20-an. Diskrepansi dijelaskan faktor siklus hidup.</p>' },
            chart: RC_PV },
          { title: { en: '3. Lee push-pull', id: '3. Push-pull Lee' },
            html: { en: '<p>Origin and destination with + and − characteristics; intervening obstacles in the middle; personal factors (age, gender, education, marital status) determine who actually moves.</p>',
                    id: '<p>Asal dan tujuan dengan + dan − karakteristik; hambatan intervening di tengah; faktor personal menentukan siapa yang sebenarnya pindah.</p>' },
            chart: PUSH_PULL }
        ]
      }
    ],

    /* ==================== QUIZ ==================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Why does abuse risk not stop Indonesian PMI flows?',
             id: 'Mengapa risiko abuse tidak menghentikan arus PMI Indonesia?' },
        answer: [
          { en: 'Frame abuse as part of the psychic cost $C_{ij}^t$ in Sjaastad\'s PV inequality. Migration still occurs because $U_j - U_i$ (the wage gap between rural Indonesia and HK/SG/MY/TW/JP) is so large that the discounted gains over the working horizon $T$ exceed the discounted costs.',
            id: 'Bingkai abuse sebagai bagian biaya psikis $C_{ij}^t$ dalam ketidaksamaan PV Sjaastad. Migrasi tetap terjadi karena $U_j - U_i$ (kesenjangan upah ID pedesaan vs HK/SG/MY/TW/JP) sangat besar sehingga gain yang didiskon melebihi biaya.' },
          { en: 'Add: (i) information asymmetry — migrants under-perceive $C$; (ii) Stark — the household sends the migrant for remittances, so the family\'s PV is positive even when the individual\'s is borderline; (iii) limited domestic alternatives — origin opportunity cost is desperately low; (iv) network effects lower $C$ for successive cohorts.',
            id: 'Tambahkan: (i) asimetri informasi; (ii) Stark — RT mengirim migran untuk remitansi; (iii) alternatif domestik terbatas; (iv) efek jaringan menurunkan $C$.' }
        ]
      },
      {
        type: 'application',
        q: { en: 'Pardede et al. (2020) find female household heads are the most mobile group. Why does this contradict simple Mincer family-decision predictions?',
             id: 'Pardede dkk. (2020) menemukan kepala RT perempuan paling mobile. Mengapa ini bertentangan dengan prediksi keputusan keluarga Mincer sederhana?' },
        answer: [
          { en: 'Mincer (1978) predicted families maximise joint net gain, with wives typically tied movers because of lower earnings. That predicts <em>less</em> mobility among married women and family-coordinated moves.',
            id: 'Mincer (1978) memprediksi keluarga memaksimalkan gain bersama, dengan istri umumnya tied mover karena pendapatan lebih rendah. Memprediksi mobilitas <em>kurang</em> di antara perempuan menikah.' },
          { en: 'Female heads with dependants face the Stark/Yitzhaki "new economics of migration" instead: the household sends one earner abroad to remit. Destination demand for female domestic workers (HK, SG, Saudi, Taiwan) matches this perfectly. Female heads have no husband to pin them in place and the strongest financial incentive to leave.',
            id: 'Kepala RT perempuan dengan tanggungan menghadapi "new economics of migration" Stark/Yitzhaki: RT kirim satu pencari nafkah ke luar negeri. Permintaan tujuan untuk PRT perempuan (HK, SG, Saudi, Taiwan) cocok persis. Kepala RT perempuan tak punya suami yang menahan dan punya insentif finansial terkuat untuk pergi.' }
        ]
      },
      {
        type: 'concept',
        q: { en: 'A new urban-employment programme creates 100,000 jobs in Jakarta. The Harris–Todaro model predicts net Jakarta unemployment may rise. Why?',
             id: 'Program pekerjaan urban baru menciptakan 100.000 pekerjaan di Jakarta. Model Harris–Todaro memprediksi pengangguran neto Jakarta mungkin naik. Mengapa?' },
        answer: [
          { en: 'Equilibrium has expected urban wage = rural wage, so $E_u/L_u = W_r/W_u$. Holding $W_u$ and $W_r$ fixed, equilibrium $E_u/L_u$ is fixed too. If $E_u$ rises by 100k, $L_u$ must rise by the same ratio to restore equilibrium — i.e. labour force rises by $100k / (E_u/L_u)$. For e.g. $W_r/W_u = 0.5$, the labour force must grow by 200k while employment grows by only 100k. Unemployment rises by 100k.',
            id: 'Keseimbangan: upah ekspektasi urban = upah pedesaan, $E_u/L_u = W_r/W_u$. Bila $E_u$ naik 100k, $L_u$ harus naik dalam rasio sama untuk mengembalikan keseimbangan. Untuk $W_r/W_u = 0{,}5$, $L_u$ tumbuh 200k sementara $E_u$ hanya 100k. Pengangguran naik 100k.' }
        ]
      }
    ]
  };
})();
