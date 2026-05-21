/* ============================================================================
   PE2 — Week 10 · The Influence of Monetary and Fiscal Policy on Aggregate Demand
   Source: Mankiw, Principles of Economics, Ch. 35. Bilingual (EN + ID).
   Registers itself on window.PE2_WEEKS.w10; assembled by ../course.js.
   Prose leaves are { en, id }; math/LaTeX/numbers are shared plain strings.
   ============================================================================ */
window.PE2_WEEKS = window.PE2_WEEKS || {};
window.PE2_WEEKS.w10 = {
  id: 'w10',
  label: { en: 'Week 10', id: 'Minggu 10' },
  title: {
    en: 'Monetary & Fiscal Policy and Aggregate Demand',
    id: 'Kebijakan Moneter & Fiskal dan Permintaan Agregat'
  },
  subtitle: {
    en: 'Liquidity preference, the interest-rate effect, the multiplier, and crowding out.',
    id: 'Preferensi likuiditas, efek suku bunga, efek pengganda, dan crowding-out.'
  },

  /* ===================================================================== */
  /* NOTES                                                                  */
  /* ===================================================================== */
  notes: [
    {
      heading: { en: 'The big picture', id: 'Gambaran besar' },
      num: '1',
      cards: [
        {
          title: { en: 'Two policy levers, one target: AD', id: 'Dua tuas kebijakan, satu sasaran: AD' },
          html: {
            en: `<p>This chapter explains <span class="key">how policy moves aggregate demand (AD)</span> in the short run.</p>
<ul>
<li><span class="key">Monetary policy</span> — the central bank's open-market operations and the interest rate it pays on reserves; in short, control over the <span class="key">money supply (MS)</span> / interest rate.</li>
<li><span class="key">Fiscal policy</span> — the levels of government purchases (<em>G</em>) and taxes (<em>T</em>) set by the president and Congress.</li>
</ul>
<p>Recall the AD curve slopes downward for three reasons: the <span class="key">wealth effect</span>, the <span class="key">interest-rate effect</span>, and the <span class="key">exchange-rate effect</span>. This week zooms in on the <span class="key">interest-rate effect</span>, using a money-market model to show <em>why</em> AD slopes down and <em>how</em> policy shifts it.</p>
<div class="tip">📝 On the UAS, "which policy and which direction?" questions reduce to one rule: anything that boosts spending shifts AD right; anything that dampens spending shifts AD left.</div>`,
            id: `<p>Bab ini menjelaskan <span class="key">bagaimana kebijakan menggerakkan permintaan agregat (AD)</span> dalam jangka pendek.</p>
<ul>
<li><span class="key">Kebijakan moneter</span> — operasi pasar terbuka bank sentral dan suku bunga yang dibayarkan atas cadangan; singkatnya, kendali atas <span class="key">jumlah uang beredar (MS)</span> / suku bunga.</li>
<li><span class="key">Kebijakan fiskal</span> — besaran belanja pemerintah (<em>G</em>) dan pajak (<em>T</em>) yang ditetapkan oleh pemerintah dan parlemen.</li>
</ul>
<p>Ingat, kurva AD melandai ke bawah karena tiga alasan: <span class="key">efek kekayaan</span>, <span class="key">efek suku bunga</span>, dan <span class="key">efek nilai tukar</span>. Minggu ini berfokus pada <span class="key">efek suku bunga</span>, memakai model pasar uang untuk menunjukkan <em>mengapa</em> AD melandai dan <em>bagaimana</em> kebijakan menggesernya.</p>
<div class="tip">📝 Di UAS, pertanyaan "kebijakan apa dan ke arah mana?" selalu kembali ke satu aturan: apa pun yang menaikkan pengeluaran menggeser AD ke kanan; apa pun yang menurunkan pengeluaran menggeser AD ke kiri.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Theory of liquidity preference', id: 'Teori preferensi likuiditas' },
      num: '2',
      cards: [
        {
          title: { en: 'How the interest rate is set in the money market', id: 'Bagaimana suku bunga ditentukan di pasar uang' },
          html: {
            en: `<p>The <span class="key">theory of liquidity preference</span> is Keynes's theory that the interest rate <em>r</em> adjusts to balance the supply and demand for money. (Assumption: the expected inflation rate is constant, so the nominal and real interest rates move together — when there is no inflation, $r_{nominal} = r_{real}$.)</p>
<ul>
<li><span class="key">Money supply (MS)</span> is fixed by the central bank and does <strong>not</strong> depend on <em>r</em> → the MS curve is <span class="key">vertical</span>. Tools to change MS: open-market operations, the rate paid on reserves, reserve requirements, the discount rate.</li>
<li><span class="key">Money demand (MD)</span> reflects how much wealth people want to hold in liquid form. Assume wealth is held as either <span class="key">money</span> (liquid, no interest) or <span class="key">bonds</span> (interest, less liquid). MD slopes <span class="key">downward</span>: a fall in <em>r</em> raises the quantity of money demanded, because <em>r</em> is the <span class="key">opportunity cost of holding money</span>.</li>
</ul>
<div class="formula">$$ r \\;\\text{adjusts so that}\\; MD(r,\\,Y,\\,P) \\;=\\; MS $$</div>
<p><strong>What shifts money demand?</strong> The variables <em>Y</em>, <em>r</em>, and <em>P</em>:</p>
<ul>
<li>↑ real income <em>Y</em> → people want to buy more g&amp;s → need more money → MD shifts <span class="key">right</span>.</li>
<li>↑ price level <em>P</em> → same goods cost more money → MD shifts <span class="key">right</span>.</li>
<li>↑ <em>r</em> → movement <em>along</em> MD (quantity demanded falls); it does not shift the curve.</li>
</ul>
<div class="note">⚠️ A change in <em>r</em> moves you <em>along</em> MD. A change in <em>Y</em> or <em>P</em> <em>shifts</em> MD. Mixing these up is the most common money-market error.</div>`,
            id: `<p><span class="key">Teori preferensi likuiditas</span> adalah teori Keynes bahwa suku bunga <em>r</em> menyesuaikan diri untuk menyeimbangkan penawaran dan permintaan uang. (Asumsi: ekspektasi inflasi tetap, sehingga suku bunga nominal dan riil bergerak bersama — bila tidak ada inflasi, $r_{nominal} = r_{real}$.)</p>
<ul>
<li><span class="key">Jumlah uang beredar (MS)</span> ditetapkan oleh bank sentral dan <strong>tidak</strong> bergantung pada <em>r</em> → kurva MS <span class="key">tegak (vertikal)</span>. Alat untuk mengubah MS: operasi pasar terbuka, suku bunga atas cadangan, rasio cadangan wajib, suku bunga diskonto.</li>
<li><span class="key">Permintaan uang (MD)</span> mencerminkan seberapa besar kekayaan yang ingin dipegang dalam bentuk likuid. Asumsikan kekayaan dipegang sebagai <span class="key">uang</span> (likuid, tanpa bunga) atau <span class="key">obligasi</span> (berbunga, kurang likuid). MD melandai ke <span class="key">bawah</span>: turunnya <em>r</em> menaikkan jumlah uang yang diminta, karena <em>r</em> adalah <span class="key">biaya peluang memegang uang</span>.</li>
</ul>
<div class="formula">$$ r \\;\\text{menyesuaikan agar}\\; MD(r,\\,Y,\\,P) \\;=\\; MS $$</div>
<p><strong>Apa yang menggeser permintaan uang?</strong> Variabel <em>Y</em>, <em>r</em>, dan <em>P</em>:</p>
<ul>
<li>↑ pendapatan riil <em>Y</em> → orang ingin membeli lebih banyak barang &amp; jasa → butuh lebih banyak uang → MD bergeser ke <span class="key">kanan</span>.</li>
<li>↑ tingkat harga <em>P</em> → barang yang sama membutuhkan lebih banyak uang → MD bergeser ke <span class="key">kanan</span>.</li>
<li>↑ <em>r</em> → pergerakan <em>sepanjang</em> MD (jumlah yang diminta turun); kurva tidak bergeser.</li>
</ul>
<div class="note">⚠️ Perubahan <em>r</em> menggerakkan Anda <em>sepanjang</em> MD. Perubahan <em>Y</em> atau <em>P</em> <em>menggeser</em> MD. Mencampuradukkan keduanya adalah kesalahan pasar-uang yang paling sering.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The interest-rate effect → why AD slopes down', id: 'Efek suku bunga → mengapa AD melandai' },
      num: '3',
      cards: [
        {
          title: { en: 'The chain from the price level to output', id: 'Rantai dari tingkat harga ke output' },
          html: {
            en: `<p>The money market explains the <span class="key">interest-rate effect</span> behind the downward-sloping AD curve. Trace a <strong>fall in the price level</strong>:</p>
<div class="formula">$$ P\\downarrow \\;\\Rightarrow\\; MD\\downarrow \\;\\Rightarrow\\; r\\downarrow \\;\\Rightarrow\\; I\\uparrow \\;\\Rightarrow\\; Y\\uparrow $$</div>
<ul>
<li>A lower <em>P</em> means households need less money for transactions → MD shifts left.</li>
<li>With MS fixed, the equilibrium <em>r</em> falls.</li>
<li>A lower <em>r</em> makes borrowing cheaper → investment <em>I</em> (and interest-sensitive consumption) rises.</li>
<li>More spending → a larger quantity of goods &amp; services demanded, <em>Y</em>.</li>
</ul>
<p>So a lower <em>P</em> raises <em>Y</em> — exactly the <span class="key">negative slope of AD</span>. Run the chain in reverse for a higher <em>P</em>.</p>
<div class="tip">📝 The AD curve already "contains" the money market. When a question asks you to <em>derive</em> AD's slope, walk the $P \\to MD \\to r \\to I \\to Y$ chain explicitly.</div>`,
            id: `<p>Pasar uang menjelaskan <span class="key">efek suku bunga</span> di balik kurva AD yang melandai ke bawah. Telusuri sebuah <strong>penurunan tingkat harga</strong>:</p>
<div class="formula">$$ P\\downarrow \\;\\Rightarrow\\; MD\\downarrow \\;\\Rightarrow\\; r\\downarrow \\;\\Rightarrow\\; I\\uparrow \\;\\Rightarrow\\; Y\\uparrow $$</div>
<ul>
<li><em>P</em> yang lebih rendah berarti rumah tangga butuh lebih sedikit uang untuk transaksi → MD bergeser ke kiri.</li>
<li>Dengan MS tetap, keseimbangan <em>r</em> turun.</li>
<li><em>r</em> yang lebih rendah membuat pinjaman lebih murah → investasi <em>I</em> (dan konsumsi yang peka bunga) naik.</li>
<li>Pengeluaran lebih banyak → jumlah barang &amp; jasa yang diminta, <em>Y</em>, lebih besar.</li>
</ul>
<p>Jadi <em>P</em> yang lebih rendah menaikkan <em>Y</em> — persis itulah <span class="key">kemiringan negatif AD</span>. Balik rantai ini untuk <em>P</em> yang lebih tinggi.</p>
<div class="tip">📝 Kurva AD sudah "memuat" pasar uang. Bila soal meminta Anda <em>menurunkan</em> kemiringan AD, jabarkan rantai $P \\to MD \\to r \\to I \\to Y$ secara eksplisit.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Monetary policy shifts AD', id: 'Kebijakan moneter menggeser AD' },
      num: '4',
      cards: [
        {
          title: { en: 'Open-market operations and the interest-rate target', id: 'Operasi pasar terbuka dan target suku bunga' },
          html: {
            en: `<p>The central bank shifts AD by changing the money supply. Hold <em>P</em> fixed and trace an <strong>expansion</strong>:</p>
<div class="formula">$$ MS\\uparrow \\;\\Rightarrow\\; r\\downarrow \\;\\Rightarrow\\; I\\uparrow \\;\\Rightarrow\\; \\text{AD shifts right} $$</div>
<ul>
<li><span class="key">Expansionary</span>: the bank <em>buys</em> government bonds → MS↑ → for any given <em>P</em>, equilibrium <em>r</em> falls → spending rises → <span class="key">AD right</span>.</li>
<li><span class="key">Contractionary</span>: the bank <em>sells</em> bonds → MS↓ → <em>r</em>↑ → spending falls → <span class="key">AD left</span>.</li>
</ul>
<p><strong>Interest-rate targets.</strong> Because MS is hard to measure precisely and MD fluctuates, central banks usually state policy as a <span class="key">target for the policy interest rate</span> (e.g. the federal funds rate), then adjust MS day-to-day to hit it. Monetary policy can be described <em>either</em> as a money-supply choice <em>or</em> as an interest-rate choice — they are two sides of the same coin.</p>
<div class="note">⚠️ <span class="key">Zero lower bound / liquidity trap.</span> If <em>r</em> has already fallen near zero, conventional easing stalls (nominal rates can't go much lower). Tools that remain: <span class="key">forward guidance</span> (promise to keep rates low to raise inflation expectations) and <span class="key">quantitative easing</span> (buy a wider range of assets — mortgages, corporate debt, long-term bonds). Both were used in the Great Recession and the COVID recession.</div>`,
            id: `<p>Bank sentral menggeser AD dengan mengubah jumlah uang beredar. Tahan <em>P</em> tetap dan telusuri sebuah <strong>ekspansi</strong>:</p>
<div class="formula">$$ MS\\uparrow \\;\\Rightarrow\\; r\\downarrow \\;\\Rightarrow\\; I\\uparrow \\;\\Rightarrow\\; \\text{AD bergeser ke kanan} $$</div>
<ul>
<li><span class="key">Ekspansif</span>: bank <em>membeli</em> obligasi pemerintah → MS↑ → untuk <em>P</em> tertentu, keseimbangan <em>r</em> turun → pengeluaran naik → <span class="key">AD ke kanan</span>.</li>
<li><span class="key">Kontraktif</span>: bank <em>menjual</em> obligasi → MS↓ → <em>r</em>↑ → pengeluaran turun → <span class="key">AD ke kiri</span>.</li>
</ul>
<p><strong>Target suku bunga.</strong> Karena MS sulit diukur secara presisi dan MD berfluktuasi, bank sentral biasanya menyatakan kebijakan sebagai <span class="key">target suku bunga kebijakan</span> (mis. federal funds rate), lalu menyesuaikan MS dari hari ke hari untuk mencapainya. Kebijakan moneter bisa dijelaskan <em>baik</em> sebagai pilihan jumlah uang beredar <em>maupun</em> sebagai pilihan suku bunga — dua sisi dari mata uang yang sama.</p>
<div class="note">⚠️ <span class="key">Batas bawah nol / jebakan likuiditas (liquidity trap).</span> Bila <em>r</em> sudah turun mendekati nol, pelonggaran konvensional macet (suku bunga nominal tak bisa turun lebih jauh). Alat yang tersisa: <span class="key">forward guidance</span> (janji menjaga suku bunga rendah untuk menaikkan ekspektasi inflasi) dan <span class="key">quantitative easing</span> (membeli aset yang lebih beragam — KPR, utang korporasi, obligasi jangka panjang). Keduanya dipakai saat Resesi Besar dan resesi COVID.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Fiscal policy, the multiplier, and crowding out', id: 'Kebijakan fiskal, efek pengganda, dan crowding-out' },
      num: '5',
      cards: [
        {
          title: { en: 'How G and T shift AD', id: 'Bagaimana G dan T menggeser AD' },
          html: {
            en: `<p><span class="key">Fiscal policy</span> sets government purchases <em>G</em> and taxes <em>T</em>.</p>
<ul>
<li>↑ <em>G</em> and/or ↓ <em>T</em> → AD shifts <span class="key">right</span> (expansionary).</li>
<li>↓ <em>G</em> and/or ↑ <em>T</em> → AD shifts <span class="key">left</span> (contractionary).</li>
</ul>
<p>But the size of the AD shift is usually <em>not</em> equal to the initial change in <em>G</em> or <em>T</em>. Two opposing forces are at work: the <span class="key">multiplier effect</span> (amplifies) and the <span class="key">crowding-out effect</span> (dampens).</p>`,
            id: `<p><span class="key">Kebijakan fiskal</span> menetapkan belanja pemerintah <em>G</em> dan pajak <em>T</em>.</p>
<ul>
<li>↑ <em>G</em> dan/atau ↓ <em>T</em> → AD bergeser ke <span class="key">kanan</span> (ekspansif).</li>
<li>↓ <em>G</em> dan/atau ↑ <em>T</em> → AD bergeser ke <span class="key">kiri</span> (kontraktif).</li>
</ul>
<p>Namun besarnya pergeseran AD biasanya <em>tidak</em> sama dengan perubahan awal <em>G</em> atau <em>T</em>. Ada dua gaya yang berlawanan: <span class="key">efek pengganda (multiplier)</span> (memperbesar) dan <span class="key">efek crowding-out / desakan keluar</span> (memperkecil).</p>`
          }
        },
        {
          title: { en: 'The multiplier effect', id: 'Efek pengganda (multiplier)' },
          html: {
            en: `<p>The <span class="key">multiplier effect</span> is the additional rounds of AD shift that occur when expansionary fiscal policy raises income, which raises consumer spending, which raises income again, and so on.</p>
<p><em>Story (Mankiw's example):</em> the government buys \\$2 billion of trucks from Oshkosh. AD shifts right by \\$2b immediately. But Oshkosh's \\$2b revenue becomes wages and profits; those households spend a fraction of it, so <em>C</em> rises and AD shifts <em>further</em> right (AD₁→AD₂→AD₃…).</p>
<p>How much each round adds depends on the <span class="key">marginal propensity to consume (MPC)</span> — the fraction of extra income households consume rather than save:</p>
<div class="formula">$$ MPC = \\frac{\\Delta C}{\\Delta Y}, \\qquad \\text{spending multiplier} = \\frac{1}{1-MPC} $$</div>
<p>e.g. MPC = 0.5 → multiplier 2; MPC = 0.75 → 4; MPC = 0.9 → 10. <strong>The bigger the MPC, the bigger the multiplier.</strong> The same logic applies to any spending component (C, I, G, NX): a \\$1 fall in net exports can shrink AD by more than \\$1.</p>
<div class="tip">📝 The multiplier multiplies <em>autonomous spending changes</em> (Δ<em>G</em>, Δ<em>I</em>, Δ<em>NX</em>). The <span class="key">tax multiplier</span> is smaller in size, $\\dfrac{-MPC}{1-MPC}$, because a tax cut only raises spending <em>after</em> households decide to consume part of it.</div>`,
            id: `<p><span class="key">Efek pengganda (multiplier)</span> adalah putaran tambahan pergeseran AD yang terjadi ketika kebijakan fiskal ekspansif menaikkan pendapatan, yang menaikkan konsumsi, yang menaikkan pendapatan lagi, dan seterusnya.</p>
<p><em>Ilustrasi (contoh Mankiw):</em> pemerintah membeli truk senilai \\$2 miliar dari Oshkosh. AD langsung bergeser ke kanan \\$2b. Tetapi pendapatan Oshkosh \\$2b menjadi upah dan laba; rumah tangga itu membelanjakan sebagian, sehingga <em>C</em> naik dan AD bergeser <em>lebih jauh</em> ke kanan (AD₁→AD₂→AD₃…).</p>
<p>Besar tambahan tiap putaran bergantung pada <span class="key">kecenderungan mengonsumsi marginal (MPC)</span> — bagian dari tambahan pendapatan yang dikonsumsi rumah tangga, bukan ditabung:</p>
<div class="formula">$$ MPC = \\frac{\\Delta C}{\\Delta Y}, \\qquad \\text{pengganda belanja} = \\frac{1}{1-MPC} $$</div>
<p>mis. MPC = 0,5 → pengganda 2; MPC = 0,75 → 4; MPC = 0,9 → 10. <strong>Semakin besar MPC, semakin besar penggandanya.</strong> Logika yang sama berlaku untuk tiap komponen pengeluaran (C, I, G, NX): turunnya ekspor neto \\$1 dapat memperkecil AD lebih dari \\$1.</p>
<div class="tip">📝 Pengganda mengalikan <em>perubahan pengeluaran otonom</em> (Δ<em>G</em>, Δ<em>I</em>, Δ<em>NX</em>). <span class="key">Pengganda pajak</span> nilainya lebih kecil, $\\dfrac{-MPC}{1-MPC}$, karena pemotongan pajak baru menaikkan pengeluaran <em>setelah</em> rumah tangga memutuskan mengonsumsi sebagiannya.</div>`
          }
        },
        {
          title: { en: 'The crowding-out effect', id: 'Efek crowding-out (desakan keluar)' },
          html: {
            en: `<p>The <span class="key">crowding-out effect</span> works in the <em>opposite</em> direction to the multiplier. When expansionary fiscal policy raises income, money demand rises, pushing up the interest rate, which discourages investment:</p>
<div class="formula">$$ G\\uparrow \\;\\Rightarrow\\; Y\\uparrow \\;\\Rightarrow\\; MD\\uparrow \\;\\Rightarrow\\; r\\uparrow \\;\\Rightarrow\\; I\\downarrow \\;\\Rightarrow\\; \\text{AD partly offset} $$</div>
<p>So the net AD shift can be <span class="key">smaller</span> than the initial fiscal expansion. To shift AD by a target amount in the presence of crowding out, the government must increase <em>G</em> by <em>more</em> than the no-crowding-out calculation suggests.</p>
<p><strong>Tax-cut nuance.</strong> A tax cut raises take-home pay; households spend part of it (multiplier) and crowding out can shrink the shift. The effect also depends on perception: a <span class="key">permanent</span> tax cut moves AD a lot; a <span class="key">temporary</span> one moves it a little.</p>
<div class="note">⚠️ Crowding out is exactly why a central bank can <em>amplify</em> fiscal policy: if the bank holds <em>r</em> fixed by raising MS to meet the higher MD, there is <strong>no</strong> crowding out — the full multiplier flows through.</div>`,
            id: `<p><span class="key">Efek crowding-out (desakan keluar)</span> bekerja <em>berlawanan</em> arah dengan pengganda. Ketika kebijakan fiskal ekspansif menaikkan pendapatan, permintaan uang naik, mendorong suku bunga naik, yang menekan investasi:</p>
<div class="formula">$$ G\\uparrow \\;\\Rightarrow\\; Y\\uparrow \\;\\Rightarrow\\; MD\\uparrow \\;\\Rightarrow\\; r\\uparrow \\;\\Rightarrow\\; I\\downarrow \\;\\Rightarrow\\; \\text{AD sebagian terimbangi} $$</div>
<p>Sehingga pergeseran AD neto bisa <span class="key">lebih kecil</span> daripada ekspansi fiskal awal. Untuk menggeser AD sebesar target ketika ada crowding out, pemerintah harus menaikkan <em>G</em> <em>lebih banyak</em> daripada perhitungan tanpa crowding out.</p>
<p><strong>Catatan pemotongan pajak.</strong> Pemotongan pajak menaikkan pendapatan bersih; rumah tangga membelanjakan sebagiannya (pengganda) dan crowding out dapat memperkecil pergeseran. Efeknya juga bergantung pada persepsi: pemotongan pajak <span class="key">permanen</span> menggeser AD banyak; yang <span class="key">sementara</span> menggeser sedikit.</p>
<div class="note">⚠️ Justru karena crowding out, bank sentral dapat <em>memperkuat</em> kebijakan fiskal: bila bank menahan <em>r</em> tetap dengan menaikkan MS untuk memenuhi MD yang lebih tinggi, <strong>tidak ada</strong> crowding out — pengganda penuh mengalir sepenuhnya.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'Should policy actively stabilize the economy?', id: 'Haruskah kebijakan aktif menstabilkan ekonomi?' },
      num: '6',
      cards: [
        {
          title: { en: 'For, against, and automatic stabilizers', id: 'Pro, kontra, dan stabilisator otomatis' },
          html: {
            en: `<p><strong>The case <em>for</em> active stabilization.</strong> Keynes argued that <span class="key">"animal spirits"</span> — waves of optimism and pessimism among households and firms — shift AD and cause swings in output and employment. Other shocks (booms/recessions abroad, stock-market crashes) do the same. Proponents say government should lean against these swings: use <span class="key">expansionary</span> policy when GDP is below its natural rate, and <span class="key">contractionary</span> policy when it is above.</p>
<p><strong>The case <em>against</em>.</strong> Policy works with <span class="key">long lags</span>:</p>
<ul>
<li>Monetary policy: investment plans are made in advance, so it takes most economists' estimate of <em>at least 6 months</em> for a rate change to affect output and employment.</li>
<li>Fiscal policy: changing <em>G</em> or <em>T</em> requires legislation, which can take months or years.</li>
</ul>
<p>By the time the policy bites, the economy may have already changed — so active policy can <em>destabilize</em> rather than help. Critics urge focusing on long-run goals (growth, low inflation).</p>
<p><strong>Automatic stabilizers.</strong> These are fiscal features that cushion the economy <span class="key">without any deliberate action</span>:</p>
<ul>
<li>The tax system — in a recession, incomes fall so taxes fall automatically, supporting AD.</li>
<li>Transfer spending — in a recession, more people claim unemployment insurance and welfare, so spending rises automatically, supporting AD.</li>
</ul>
<div class="tip">📝 Note fiscal policy can also touch <span class="key">aggregate supply</span>: a lower tax rate may boost work incentives (the "supply-side" view), and productive G (e.g. roads) can raise productivity — but those AS effects mostly show up in the long run.</div>`,
            id: `<p><strong>Argumen <em>pro</em> stabilisasi aktif.</strong> Keynes menilai <span class="key">"animal spirits"</span> — gelombang optimisme dan pesimisme rumah tangga dan perusahaan — menggeser AD dan menimbulkan ayunan output serta kesempatan kerja. Guncangan lain (boom/resesi luar negeri, jatuhnya pasar saham) berdampak serupa. Pendukung berpendapat pemerintah harus melawan ayunan ini: pakai kebijakan <span class="key">ekspansif</span> saat PDB di bawah tingkat alaminya, dan <span class="key">kontraktif</span> saat di atasnya.</p>
<p><strong>Argumen <em>kontra</em>.</strong> Kebijakan bekerja dengan <span class="key">jeda waktu (lag) yang panjang</span>:</p>
<ul>
<li>Kebijakan moneter: rencana investasi dibuat jauh hari, sehingga menurut taksiran kebanyakan ekonom dibutuhkan <em>setidaknya 6 bulan</em> agar perubahan suku bunga memengaruhi output dan kesempatan kerja.</li>
<li>Kebijakan fiskal: mengubah <em>G</em> atau <em>T</em> memerlukan undang-undang, yang bisa makan waktu berbulan-bulan hingga bertahun-tahun.</li>
</ul>
<p>Saat kebijakan mulai bekerja, kondisi ekonomi mungkin sudah berubah — sehingga kebijakan aktif justru bisa <em>mendestabilkan</em> alih-alih membantu. Pengkritik mendorong fokus pada tujuan jangka panjang (pertumbuhan, inflasi rendah).</p>
<p><strong>Stabilisator otomatis.</strong> Ini adalah fitur fiskal yang meredam ekonomi <span class="key">tanpa tindakan sengaja</span>:</p>
<ul>
<li>Sistem pajak — saat resesi, pendapatan turun sehingga pajak otomatis turun, menopang AD.</li>
<li>Belanja transfer — saat resesi, lebih banyak orang mengeklaim asuransi pengangguran dan bantuan sosial, sehingga belanja otomatis naik, menopang AD.</li>
</ul>
<div class="tip">📝 Perlu dicatat kebijakan fiskal juga bisa menyentuh <span class="key">penawaran agregat</span>: tarif pajak yang lebih rendah dapat meningkatkan insentif bekerja (pandangan "supply-side"), dan G yang produktif (mis. jalan) dapat menaikkan produktivitas — tetapi efek AS itu umumnya baru tampak dalam jangka panjang.</div>`
          }
        }
      ]
    }
  ],

  /* ===================================================================== */
  /* FORMULAS                                                               */
  /* ===================================================================== */
  formulas: [
    {
      heading: { en: 'Core relationships', id: 'Hubungan inti' },
      num: 'F',
      cards: [
        {
          title: { en: 'Money-market equilibrium', id: 'Keseimbangan pasar uang' },
          html: {
            en: `<div class="formula">$$ MS = MD(r,\\,Y,\\,P) $$</div>
<p><strong>Symbols:</strong> <em>MS</em> = money supply (vertical, set by the central bank); <em>MD</em> = money demand (falls in <em>r</em>, rises in <em>Y</em> and <em>P</em>); <em>r</em> = interest rate.</p>
<p><strong>Use it</strong> to find the equilibrium interest rate and to predict what an MS or MD shift does to <em>r</em> — then feed <em>r</em> into investment and AD.</p>`,
            id: `<div class="formula">$$ MS = MD(r,\\,Y,\\,P) $$</div>
<p><strong>Simbol:</strong> <em>MS</em> = jumlah uang beredar (vertikal, ditetapkan bank sentral); <em>MD</em> = permintaan uang (turun terhadap <em>r</em>, naik terhadap <em>Y</em> dan <em>P</em>); <em>r</em> = suku bunga.</p>
<p><strong>Pakai</strong> untuk menemukan suku bunga keseimbangan dan memprediksi dampak pergeseran MS atau MD terhadap <em>r</em> — lalu masukkan <em>r</em> ke investasi dan AD.</p>`
          }
        },
        {
          title: { en: 'Marginal propensity to consume (MPC)', id: 'Kecenderungan mengonsumsi marginal (MPC)' },
          html: {
            en: `<div class="formula">$$ MPC = \\frac{\\Delta C}{\\Delta Y}, \\qquad 0 < MPC < 1 $$</div>
<p>The fraction of an extra dollar of income that households <em>consume</em> (the rest is saved: $MPS = 1 - MPC$). With MPC = 0.8, an extra \\$100 of income raises consumption by \\$80.</p>`,
            id: `<div class="formula">$$ MPC = \\frac{\\Delta C}{\\Delta Y}, \\qquad 0 < MPC < 1 $$</div>
<p>Bagian dari tambahan satu satuan pendapatan yang <em>dikonsumsi</em> rumah tangga (sisanya ditabung: $MPS = 1 - MPC$). Dengan MPC = 0,8, tambahan pendapatan \\$100 menaikkan konsumsi \\$80.</p>`
          }
        },
        {
          title: { en: 'The spending multiplier', id: 'Pengganda belanja' },
          html: {
            en: `<div class="formula">$$ \\text{multiplier} = \\frac{1}{1-MPC} = \\frac{1}{MPS} $$</div>
<p><strong>Derivation</strong> (from $Y = C + I + G + NX$, holding <em>I</em> and <em>NX</em> fixed and $\\Delta C = MPC\\,\\Delta Y$):</p>
<div class="formula">$$ \\Delta Y = MPC\\,\\Delta Y + \\Delta G \\;\\Rightarrow\\; \\Delta Y = \\frac{1}{1-MPC}\\,\\Delta G $$</div>
<p><strong>Use it</strong> to convert an autonomous spending change (Δ<em>G</em>, Δ<em>I</em>, Δ<em>NX</em>) into the total AD/output change, <em>before</em> crowding out.</p>
<div class="tip">📝 Quick table: MPC 0.5 → ×2 · 0.75 → ×4 · 0.8 → ×5 · 0.9 → ×10.</div>`,
            id: `<div class="formula">$$ \\text{pengganda} = \\frac{1}{1-MPC} = \\frac{1}{MPS} $$</div>
<p><strong>Penurunan</strong> (dari $Y = C + I + G + NX$, dengan <em>I</em> dan <em>NX</em> tetap dan $\\Delta C = MPC\\,\\Delta Y$):</p>
<div class="formula">$$ \\Delta Y = MPC\\,\\Delta Y + \\Delta G \\;\\Rightarrow\\; \\Delta Y = \\frac{1}{1-MPC}\\,\\Delta G $$</div>
<p><strong>Pakai</strong> untuk mengubah perubahan pengeluaran otonom (Δ<em>G</em>, Δ<em>I</em>, Δ<em>NX</em>) menjadi total perubahan AD/output, <em>sebelum</em> crowding out.</p>
<div class="tip">📝 Tabel cepat: MPC 0,5 → ×2 · 0,75 → ×4 · 0,8 → ×5 · 0,9 → ×10.</div>`
          }
        },
        {
          title: { en: 'The tax multiplier & total AD change', id: 'Pengganda pajak & total perubahan AD' },
          html: {
            en: `<div class="formula">$$ \\text{tax multiplier} = \\frac{-MPC}{1-MPC} $$</div>
<p>A tax cut works only through the consumption it induces, so its multiplier is smaller in magnitude than the spending multiplier (and negative — a tax <em>increase</em> lowers AD).</p>
<div class="formula">$$ \\Delta AD = \\Big(\\tfrac{1}{1-MPC}\\Big)\\Delta G \\;-\\; \\Big(\\tfrac{MPC}{1-MPC}\\Big)\\Delta T $$</div>
<p><strong>Use it</strong> for combined-policy questions. A <span class="key">balanced-budget</span> change ($\\Delta G = \\Delta T$) still raises AD by exactly $\\Delta G$, because the spending and tax multipliers do not fully cancel.</p>`,
            id: `<div class="formula">$$ \\text{pengganda pajak} = \\frac{-MPC}{1-MPC} $$</div>
<p>Pemotongan pajak bekerja hanya melalui konsumsi yang dipicunya, sehingga penggandanya lebih kecil nilainya daripada pengganda belanja (dan negatif — <em>kenaikan</em> pajak menurunkan AD).</p>
<div class="formula">$$ \\Delta AD = \\Big(\\tfrac{1}{1-MPC}\\Big)\\Delta G \\;-\\; \\Big(\\tfrac{MPC}{1-MPC}\\Big)\\Delta T $$</div>
<p><strong>Pakai</strong> untuk soal kebijakan gabungan. Perubahan <span class="key">anggaran berimbang</span> ($\\Delta G = \\Delta T$) tetap menaikkan AD persis sebesar $\\Delta G$, karena pengganda belanja dan pajak tidak saling meniadakan sepenuhnya.</p>`
          }
        }
      ]
    }
  ],

  /* ===================================================================== */
  /* GRAPHS  (inline SVG — no charting library)                             */
  /* ===================================================================== */
  graphs: [
    {
      heading: { en: 'The money market & monetary policy', id: 'Pasar uang & kebijakan moneter' },
      num: 'G',
      cards: [
        {
          title: { en: 'An MS increase lowers r and shifts AD right', id: 'Kenaikan MS menurunkan r dan menggeser AD ke kanan' },
          html: {
            en: `<p>Two panels read left-to-right. <strong>Left:</strong> the money market — supply <span class="key">MS</span> is vertical (set by the bank), demand <span class="key">MD</span> slopes down. Buying bonds shifts MS₁→MS₂, so the equilibrium rate falls $r_1 \\to r_2$. <strong>Right:</strong> the lower rate boosts investment, shifting <span class="key">AD₁→AD₂</span> at every price level.</p>
<svg viewBox="0 0 560 240" width="100%" role="img" aria-label="Money market and AD shift from a money-supply increase">
  <!-- ===== left panel: money market ===== -->
  <line x1="55" y1="20" x2="55" y2="200" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="200" x2="245" y2="200" stroke="#555" stroke-width="1.5"/>
  <text x="20" y="20" font-size="11" fill="#333">r</text>
  <text x="200" y="216" font-size="11" fill="#333">Quantity of money</text>
  <!-- MS1 vertical -->
  <line x1="150" y1="30" x2="150" y2="200" stroke="#0e8fb8" stroke-width="2"/>
  <text x="120" y="42" font-size="11" fill="#0e8fb8">MS₁</text>
  <!-- MS2 vertical (right) -->
  <line x1="195" y1="30" x2="195" y2="200" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="198" y="42" font-size="11" fill="#0e8fb8">MS₂</text>
  <!-- MD downward -->
  <line x1="70" y1="55" x2="240" y2="190" stroke="#d97706" stroke-width="2"/>
  <text x="222" y="180" font-size="11" fill="#d97706">MD</text>
  <!-- eq points -->
  <line x1="55" y1="100" x2="150" y2="100" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="55" y1="135" x2="195" y2="135" stroke="#999" stroke-dasharray="3 3"/>
  <circle cx="150" cy="100" r="3" fill="#111"/>
  <circle cx="195" cy="135" r="3" fill="#111"/>
  <text x="38" y="104" font-size="11" fill="#111">r₁</text>
  <text x="38" y="139" font-size="11" fill="#111">r₂</text>
  <!-- ===== right panel: AD ===== -->
  <line x1="330" y1="20" x2="330" y2="200" stroke="#555" stroke-width="1.5"/>
  <line x1="330" y1="200" x2="540" y2="200" stroke="#555" stroke-width="1.5"/>
  <text x="312" y="20" font-size="11" fill="#333">P</text>
  <text x="515" y="216" font-size="11" fill="#333">Y</text>
  <!-- AD1 -->
  <line x1="345" y1="40" x2="470" y2="195" stroke="#0e8fb8" stroke-width="2"/>
  <text x="450" y="190" font-size="11" fill="#0e8fb8">AD₁</text>
  <!-- AD2 (right) -->
  <line x1="395" y1="40" x2="520" y2="195" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="500" y="60" font-size="11" fill="#0e8fb8">AD₂</text>
  <!-- arrow -->
  <line x1="430" y1="120" x2="470" y2="120" stroke="#111" stroke-width="1.5" marker-end="url(#ah1)"/>
  <defs><marker id="ah1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker></defs>
</svg>
<div class="note">⚠️ Reverse every arrow for <em>contractionary</em> policy: selling bonds shifts MS left, raises <em>r</em>, and shifts AD left.</div>`,
            id: `<p>Dua panel dibaca dari kiri ke kanan. <strong>Kiri:</strong> pasar uang — penawaran <span class="key">MS</span> tegak (ditetapkan bank), permintaan <span class="key">MD</span> melandai ke bawah. Membeli obligasi menggeser MS₁→MS₂, sehingga suku bunga keseimbangan turun $r_1 \\to r_2$. <strong>Kanan:</strong> suku bunga yang lebih rendah mendorong investasi, menggeser <span class="key">AD₁→AD₂</span> pada setiap tingkat harga.</p>
<svg viewBox="0 0 560 240" width="100%" role="img" aria-label="Pasar uang dan pergeseran AD akibat kenaikan jumlah uang beredar">
  <line x1="55" y1="20" x2="55" y2="200" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="200" x2="245" y2="200" stroke="#555" stroke-width="1.5"/>
  <text x="20" y="20" font-size="11" fill="#333">r</text>
  <text x="180" y="216" font-size="11" fill="#333">Jumlah uang</text>
  <line x1="150" y1="30" x2="150" y2="200" stroke="#0e8fb8" stroke-width="2"/>
  <text x="120" y="42" font-size="11" fill="#0e8fb8">MS₁</text>
  <line x1="195" y1="30" x2="195" y2="200" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="198" y="42" font-size="11" fill="#0e8fb8">MS₂</text>
  <line x1="70" y1="55" x2="240" y2="190" stroke="#d97706" stroke-width="2"/>
  <text x="222" y="180" font-size="11" fill="#d97706">MD</text>
  <line x1="55" y1="100" x2="150" y2="100" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="55" y1="135" x2="195" y2="135" stroke="#999" stroke-dasharray="3 3"/>
  <circle cx="150" cy="100" r="3" fill="#111"/>
  <circle cx="195" cy="135" r="3" fill="#111"/>
  <text x="38" y="104" font-size="11" fill="#111">r₁</text>
  <text x="38" y="139" font-size="11" fill="#111">r₂</text>
  <line x1="330" y1="20" x2="330" y2="200" stroke="#555" stroke-width="1.5"/>
  <line x1="330" y1="200" x2="540" y2="200" stroke="#555" stroke-width="1.5"/>
  <text x="312" y="20" font-size="11" fill="#333">P</text>
  <text x="515" y="216" font-size="11" fill="#333">Y</text>
  <line x1="345" y1="40" x2="470" y2="195" stroke="#0e8fb8" stroke-width="2"/>
  <text x="450" y="190" font-size="11" fill="#0e8fb8">AD₁</text>
  <line x1="395" y1="40" x2="520" y2="195" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="500" y="60" font-size="11" fill="#0e8fb8">AD₂</text>
  <line x1="430" y1="120" x2="470" y2="120" stroke="#111" stroke-width="1.5" marker-end="url(#ah1id)"/>
  <defs><marker id="ah1id" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker></defs>
</svg>
<div class="note">⚠️ Balik setiap panah untuk kebijakan <em>kontraktif</em>: menjual obligasi menggeser MS ke kiri, menaikkan <em>r</em>, dan menggeser AD ke kiri.</div>`
          }
        }
      ]
    },
    {
      heading: { en: 'Fiscal policy: multiplier vs crowding out', id: 'Kebijakan fiskal: pengganda vs crowding-out' },
      num: 'G',
      cards: [
        {
          title: { en: 'Net AD shift when G rises', id: 'Pergeseran AD neto saat G naik' },
          html: {
            en: `<p>A \\$2 billion rise in <em>G</em> first shifts <span class="key">AD₁→AD₂</span> by exactly \\$2b. The <span class="key">multiplier</span> then pushes AD further right toward <span class="key">AD₃</span> as induced consumption rises. But <span class="key">crowding out</span> pulls back the other way (higher <em>Y</em> → higher <em>r</em> → less <em>I</em>), so the <strong>final</strong> curve <span class="key">AD<sub>final</sub></span> lands between AD₂ and AD₃.</p>
<svg viewBox="0 0 520 250" width="100%" role="img" aria-label="AD shift decomposed into multiplier and crowding-out">
  <line x1="50" y1="15" x2="50" y2="210" stroke="#555" stroke-width="1.5"/>
  <line x1="50" y1="210" x2="500" y2="210" stroke="#555" stroke-width="1.5"/>
  <text x="30" y="16" font-size="11" fill="#333">P</text>
  <text x="478" y="226" font-size="11" fill="#333">Y</text>
  <!-- AD1 -->
  <line x1="70" y1="35" x2="250" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="60" y="48" font-size="11" fill="#0e8fb8">AD₁</text>
  <!-- AD2: initial +$2b -->
  <line x1="135" y1="35" x2="315" y2="205" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="2 2"/>
  <text x="305" y="60" font-size="10" fill="#0e8fb8">AD₂</text>
  <!-- AD final (after multiplier net of crowding out) -->
  <line x1="175" y1="35" x2="355" y2="205" stroke="#16a34a" stroke-width="2.4"/>
  <text x="345" y="78" font-size="10" fill="#16a34a">AD₍fin₎</text>
  <!-- AD3: full multiplier (no crowding out) -->
  <line x1="215" y1="35" x2="395" y2="205" stroke="#0e8fb8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="385" y="96" font-size="10" fill="#0e8fb8">AD₃</text>
  <!-- bracket: initial $2b shift along a horizontal -->
  <line x1="160" y1="160" x2="225" y2="160" stroke="#111" stroke-width="1.2" marker-end="url(#ah2)"/>
  <text x="120" y="150" font-size="10" fill="#111">+$2b (G)</text>
  <!-- multiplier arrow -->
  <line x1="225" y1="120" x2="305" y2="120" stroke="#0e8fb8" stroke-width="1.2" marker-end="url(#ah2)"/>
  <text x="232" y="112" font-size="9" fill="#0e8fb8">multiplier →</text>
  <!-- crowding-out arrow (pulls left) -->
  <line x1="305" y1="92" x2="262" y2="92" stroke="#dc2626" stroke-width="1.2" marker-end="url(#ah2r)"/>
  <text x="262" y="84" font-size="9" fill="#dc2626">← crowd-out</text>
  <defs>
    <marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker>
    <marker id="ah2r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
  </defs>
</svg>
<div class="tip">📝 Reading order: AD₁ → +Δ<em>G</em> → AD₂ → multiplier stretches it toward AD₃ → crowding out drags it back to AD₍fin₎. If the bank holds <em>r</em> fixed, there is no crowd-out and AD₍fin₎ = AD₃.</div>`,
            id: `<p>Kenaikan <em>G</em> sebesar \\$2 miliar mula-mula menggeser <span class="key">AD₁→AD₂</span> persis \\$2b. <span class="key">Pengganda</span> lalu mendorong AD lebih jauh ke kanan menuju <span class="key">AD₃</span> seiring naiknya konsumsi terinduksi. Namun <span class="key">crowding-out</span> menariknya kembali (<em>Y</em> naik → <em>r</em> naik → <em>I</em> turun), sehingga kurva <strong>akhir</strong> <span class="key">AD<sub>akhir</sub></span> mendarat di antara AD₂ dan AD₃.</p>
<svg viewBox="0 0 520 250" width="100%" role="img" aria-label="Pergeseran AD diuraikan menjadi pengganda dan crowding-out">
  <line x1="50" y1="15" x2="50" y2="210" stroke="#555" stroke-width="1.5"/>
  <line x1="50" y1="210" x2="500" y2="210" stroke="#555" stroke-width="1.5"/>
  <text x="30" y="16" font-size="11" fill="#333">P</text>
  <text x="478" y="226" font-size="11" fill="#333">Y</text>
  <line x1="70" y1="35" x2="250" y2="205" stroke="#0e8fb8" stroke-width="2"/>
  <text x="60" y="48" font-size="11" fill="#0e8fb8">AD₁</text>
  <line x1="135" y1="35" x2="315" y2="205" stroke="#0e8fb8" stroke-width="2" stroke-dasharray="2 2"/>
  <text x="305" y="60" font-size="10" fill="#0e8fb8">AD₂</text>
  <line x1="175" y1="35" x2="355" y2="205" stroke="#16a34a" stroke-width="2.4"/>
  <text x="345" y="78" font-size="10" fill="#16a34a">AD₍akh₎</text>
  <line x1="215" y1="35" x2="395" y2="205" stroke="#0e8fb8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="385" y="96" font-size="10" fill="#0e8fb8">AD₃</text>
  <line x1="160" y1="160" x2="225" y2="160" stroke="#111" stroke-width="1.2" marker-end="url(#ah2i)"/>
  <text x="120" y="150" font-size="10" fill="#111">+$2b (G)</text>
  <line x1="225" y1="120" x2="305" y2="120" stroke="#0e8fb8" stroke-width="1.2" marker-end="url(#ah2i)"/>
  <text x="232" y="112" font-size="9" fill="#0e8fb8">pengganda →</text>
  <line x1="305" y1="92" x2="262" y2="92" stroke="#dc2626" stroke-width="1.2" marker-end="url(#ah2ri)"/>
  <text x="258" y="84" font-size="9" fill="#dc2626">← crowd-out</text>
  <defs>
    <marker id="ah2i" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#111"/></marker>
    <marker id="ah2ri" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
  </defs>
</svg>
<div class="tip">📝 Urutan membaca: AD₁ → +Δ<em>G</em> → AD₂ → pengganda merentangkannya menuju AD₃ → crowding-out menyeretnya kembali ke AD₍akh₎. Bila bank menahan <em>r</em> tetap, tidak ada crowd-out dan AD₍akh₎ = AD₃.</div>`
          }
        }
      ]
    }
  ],

  /* ===================================================================== */
  /* QUIZ                                                                   */
  /* ===================================================================== */
  quiz: [
    {
      type: 'concept',
      q: {
        en: 'Using the theory of liquidity preference, explain why the AD curve slopes downward (the interest-rate effect).',
        id: 'Dengan teori preferensi likuiditas, jelaskan mengapa kurva AD melandai ke bawah (efek suku bunga).'
      },
      answer: [
        { en: 'A higher price level P means households need more money to make their transactions, so money demand MD shifts right.',
          id: 'Tingkat harga P yang lebih tinggi berarti rumah tangga butuh lebih banyak uang untuk bertransaksi, sehingga permintaan uang MD bergeser ke kanan.' },
        { en: 'With the money supply MS fixed by the central bank, the equilibrium interest rate r rises to clear the money market.',
          id: 'Dengan MS yang ditetapkan tetap oleh bank sentral, suku bunga keseimbangan r naik untuk menyeimbangkan pasar uang.' },
        { en: 'A higher r raises the cost of borrowing, so investment I (and interest-sensitive consumption) falls, reducing the quantity of goods and services demanded Y.',
          id: 'r yang lebih tinggi menaikkan biaya pinjaman, sehingga investasi I (dan konsumsi yang peka bunga) turun, menurunkan jumlah barang dan jasa yang diminta Y.' },
        { en: 'So a higher P leads to a lower Y — a negative relationship, which is exactly the downward slope of AD.',
          id: 'Jadi P yang lebih tinggi menyebabkan Y lebih rendah — hubungan negatif, yang persis merupakan kemiringan AD ke bawah.' }
      ],
      tip: { en: 'Memorize the chain: P↑ → MD↑ → r↑ → I↓ → Y↓.',
             id: 'Hafalkan rantainya: P↑ → MD↑ → r↑ → I↓ → Y↓.' }
    },
    {
      type: 'quant',
      q: {
        en: 'A recession overseas cuts demand for U.S. net exports by $8 billion. If MPC = 0.8 and there is no crowding out, what is the total change in output?',
        id: 'Resesi di luar negeri memangkas permintaan ekspor neto AS sebesar $8 miliar. Jika MPC = 0,8 dan tidak ada crowding out, berapa total perubahan output?'
      },
      context: {
        en: 'A drop in net exports is an autonomous spending change, so the spending multiplier applies.',
        id: 'Penurunan ekspor neto adalah perubahan pengeluaran otonom, sehingga pengganda belanja berlaku.'
      },
      answer: [
        { en: 'Initial change in AD = the fall in NX = −$8 billion.',
          id: 'Perubahan awal AD = penurunan NX = −$8 miliar.' },
        { en: 'Spending multiplier = 1 / (1 − MPC) = 1 / (1 − 0.8) = 1 / 0.2 = 5.',
          id: 'Pengganda belanja = 1 / (1 − MPC) = 1 / (1 − 0,8) = 1 / 0,2 = 5.' },
        { en: 'Total change in Y = multiplier × ΔNX = 5 × (−$8 billion) = −$40 billion.',
          id: 'Total perubahan Y = pengganda × ΔNX = 5 × (−$8 miliar) = −$40 miliar.' },
        { en: 'Output falls by $40 billion — five times the initial shock, because each round of lost income reduces consumption further.',
          id: 'Output turun $40 miliar — lima kali guncangan awal, karena setiap putaran pendapatan yang hilang menurunkan konsumsi lebih lanjut.' }
      ],
      tip: { en: 'MPC = 0.8 ⇒ multiplier = 5. Always compute 1/(1−MPC) first, then multiply.',
             id: 'MPC = 0,8 ⇒ pengganda = 5. Hitung 1/(1−MPC) dulu, baru kalikan.' }
    },
    {
      type: 'quant',
      q: {
        en: 'Policymakers want to shift AD right by $200 billion to end a recession. If MPC = 0.8 and there is NO crowding out, by how much should G increase? And with crowding out, would the required increase be larger or smaller?',
        id: 'Pembuat kebijakan ingin menggeser AD ke kanan sebesar $200 miliar untuk mengakhiri resesi. Jika MPC = 0,8 dan TIDAK ada crowding out, berapa G harus naik? Lalu dengan crowding out, apakah kenaikan yang diperlukan lebih besar atau lebih kecil?'
      },
      answer: [
        { en: 'Multiplier = 1 / (1 − MPC) = 1 / (1 − 0.8) = 5.',
          id: 'Pengganda = 1 / (1 − MPC) = 1 / (1 − 0,8) = 5.' },
        { en: 'We need ΔY = 5 × ΔG = $200 billion, so ΔG = $200b / 5 = $40 billion.',
          id: 'Kita butuh ΔY = 5 × ΔG = $200 miliar, sehingga ΔG = $200b / 5 = $40 miliar.' },
        { en: 'With crowding out: the higher income raises money demand → r rises → investment falls → part of the AD shift is offset.',
          id: 'Dengan crowding out: pendapatan yang naik menaikkan permintaan uang → r naik → investasi turun → sebagian pergeseran AD terimbangi.' },
        { en: 'To still hit the +$200b target, Congress must increase G by MORE than $40 billion to compensate for the lost investment.',
          id: 'Untuk tetap mencapai target +$200b, parlemen harus menaikkan G LEBIH dari $40 miliar guna mengompensasi investasi yang hilang.' }
      ],
      tip: { en: 'Crowding out shrinks the net effect of G, so you need a bigger G to reach the same target.',
             id: 'Crowding out memperkecil efek neto G, jadi Anda butuh G yang lebih besar untuk mencapai target yang sama.' }
    },
    {
      type: 'quant',
      q: {
        en: 'A country wants to shift AD right by Rp3,600 trillion. The central bank holds the interest rate fixed (no crowding out) and MPC = 2/3. By how much must taxes be CUT to end the recession?',
        id: 'Sebuah negara ingin menggeser AD ke kanan sebesar Rp3.600 triliun. Bank sentral menahan suku bunga tetap (tanpa crowding out) dan MPC = 2/3. Berapa pajak harus DITURUNKAN untuk mengakhiri resesi?'
      },
      context: {
        en: 'A tax change works through the tax multiplier, which is smaller in magnitude than the spending multiplier.',
        id: 'Perubahan pajak bekerja lewat pengganda pajak, yang nilainya lebih kecil daripada pengganda belanja.'
      },
      answer: [
        { en: 'Tax multiplier (in magnitude) = MPC / (1 − MPC) = (2/3) / (1 − 2/3) = (2/3) / (1/3) = 2.',
          id: 'Pengganda pajak (besarnya) = MPC / (1 − MPC) = (2/3) / (1 − 2/3) = (2/3) / (1/3) = 2.' },
        { en: 'A tax cut raises AD: ΔAD = (MPC/(1−MPC)) × (tax cut) = 2 × (tax cut).',
          id: 'Pemotongan pajak menaikkan AD: ΔAD = (MPC/(1−MPC)) × (besar pemotongan) = 2 × (besar pemotongan).' },
        { en: 'Set 2 × (tax cut) = Rp3,600 trillion ⇒ tax cut = Rp1,800 trillion.',
          id: 'Tetapkan 2 × (pemotongan) = Rp3.600 triliun ⇒ pemotongan pajak = Rp1.800 triliun.' },
        { en: 'Answer: cut taxes by Rp1,800 trillion. (If instead the bank kept MS fixed and let r move, crowding out would make the resulting AD shift SMALLER.)',
          id: 'Jawaban: turunkan pajak Rp1.800 triliun. (Jika sebaliknya bank menahan MS tetap dan membiarkan r bergerak, crowding out membuat pergeseran AD yang dihasilkan LEBIH KECIL.)' }
      ],
      tip: { en: 'Tax multiplier = MPC/(1−MPC); the spending multiplier 1/(1−MPC) is always one unit larger.',
             id: 'Pengganda pajak = MPC/(1−MPC); pengganda belanja 1/(1−MPC) selalu lebih besar satu satuan.' }
    },
    {
      type: 'scenario',
      q: {
        en: 'A stock-market boom raises household wealth and pushes output above its natural rate. The economy is overheating. What should the central bank do, and trace the effect through the money market to AD?',
        id: 'Lonjakan pasar saham menaikkan kekayaan rumah tangga dan mendorong output di atas tingkat alaminya. Ekonomi memanas (overheating). Apa yang harus dilakukan bank sentral, dan telusuri efeknya lewat pasar uang ke AD?'
      },
      answer: [
        { en: 'The boom shifts AD right, so output rises above its natural rate — an inflationary boom the bank should lean against.',
          id: 'Lonjakan itu menggeser AD ke kanan, sehingga output naik di atas tingkat alaminya — boom inflasioner yang harus dilawan bank.' },
        { en: 'Use contractionary monetary policy: sell government bonds in open-market operations to reduce the money supply (MS↓).',
          id: 'Pakai kebijakan moneter kontraktif: jual obligasi pemerintah lewat operasi pasar terbuka untuk mengurangi jumlah uang beredar (MS↓).' },
        { en: 'With MS lower and MD unchanged, the equilibrium interest rate rises (r↑).',
          id: 'Dengan MS lebih rendah dan MD tetap, suku bunga keseimbangan naik (r↑).' },
        { en: 'Higher r reduces investment and interest-sensitive consumption, so AD shifts left, returning output toward its natural rate.',
          id: 'r yang lebih tinggi menurunkan investasi dan konsumsi peka bunga, sehingga AD bergeser ke kiri, mengembalikan output menuju tingkat alaminya.' }
      ],
      tip: { en: 'Overheating ⇒ contractionary policy: sell bonds, MS↓, r↑, AD left. (Equivalently, raise the policy-rate target.)',
             id: 'Overheating ⇒ kebijakan kontraktif: jual obligasi, MS↓, r↑, AD ke kiri. (Setara dengan menaikkan target suku bunga kebijakan.)' }
    },
    {
      type: 'concept',
      q: {
        en: 'Give one strong argument FOR active stabilization policy and one strong argument AGAINST it. What are automatic stabilizers?',
        id: 'Berikan satu argumen kuat YANG MENDUKUNG kebijakan stabilisasi aktif dan satu argumen kuat YANG MENENTANGNYA. Apa itu stabilisator otomatis?'
      },
      answer: [
        { en: 'FOR: shifts in "animal spirits" (and shocks like foreign recessions or market crashes) move AD and cause unnecessary swings in output and employment; policy can lean against them.',
          id: 'PRO: pergeseran "animal spirits" (dan guncangan seperti resesi luar negeri atau jatuhnya pasar) menggerakkan AD dan menimbulkan ayunan output serta kesempatan kerja yang tak perlu; kebijakan bisa melawannya.' },
        { en: 'AGAINST: policy works with long lags (monetary ≈ at least 6 months; fiscal needs legislation taking months/years), so by the time it bites, conditions may have changed and the policy can be destabilizing.',
          id: 'KONTRA: kebijakan bekerja dengan jeda panjang (moneter ≈ minimal 6 bulan; fiskal butuh undang-undang yang makan waktu bulan/tahun), sehingga saat mulai bekerja kondisi mungkin sudah berubah dan kebijakan justru bisa mendestabilkan.' },
        { en: 'Automatic stabilizers are fiscal features that cushion AD without deliberate action: taxes fall automatically in a recession, and transfer spending (unemployment insurance, welfare) rises automatically.',
          id: 'Stabilisator otomatis adalah fitur fiskal yang meredam AD tanpa tindakan sengaja: pajak otomatis turun saat resesi, dan belanja transfer (asuransi pengangguran, bantuan sosial) otomatis naik.' }
      ],
      tip: { en: 'Automatic stabilizers act instantly and need no lag-prone legislation — a key reply to the "long lags" critique.',
             id: 'Stabilisator otomatis bekerja seketika dan tak butuh undang-undang yang rawan jeda — jawaban kunci atas kritik "jeda panjang".' }
    }
  ]
};
