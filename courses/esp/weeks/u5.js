/* ESP Unit 5 — Social security & public pensions. Source: Gruber Ch.11 + endterm notes. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u5 = {
    id: 'u5',
    label: { en: 'Unit 5', id: 'Unit 5' },
    title: { en: 'Social Security & Public Pensions', id: 'Jaminan Sosial & Pensiun Publik' },
    subtitle: { en: 'Annuities & consumption smoothing · PAYG vs funded · benefits, FICA & the trust fund · distribution · crowding out · retirement · reform', id: 'Anuitas & pemulusan konsumsi · PAYG vs funded · manfaat, FICA & dana perwalian · distribusi · crowding out · pensiun · reformasi' },

    notes: [
      {
        heading: { en: 'Why have social security?', id: 'Mengapa ada jaminan sosial?' }, num: '1',
        cards: [
          { title: { en: 'Scale: OASDI is the largest US domestic program', id: 'Skala: OASDI program domestik AS terbesar' },
            html: { en: '<p>US Social Security is formally <span class="key">OASDI</span> — Old-Age, Survivors, and Disability Insurance — the <b>largest domestic program</b> in the federal budget. In 2011 it cost ≈ <b>$736.1 billion</b>, about <b>4.9% of GDP</b> (Figure 11.1), dwarfing most other transfers.</p>' +
              '<p>Public finance asks the welfare-economics question: <i>is there a market failure that justifies a compulsory public pension?</i> If competitive private markets could deliver retirement security efficiently, the case for a giant state program would be weak. The chapter argues the case rests mainly on a <b>failure in the annuity market</b>, reinforced by several second-order justifications.</p>' +
              '<div class="note">💡 Frame every reform argument as efficiency (does it fix/avoid a market failure?) vs equity (who gains and loses?). Both run through this whole chapter.</div>', id: '<p>Jaminan sosial AS secara formal adalah <span class="key">OASDI</span> — Old-Age, Survivors, and Disability Insurance — <b>program domestik terbesar</b> dalam anggaran federal. Pada 2011 biayanya ≈ <b>$736.1 billion</b>, sekitar <b>4.9% dari GDP</b> (Figure 11.1), jauh melampaui transfer lainnya.</p>' +
              '<p>Keuangan publik mengajukan pertanyaan ekonomi kesejahteraan: <i>adakah kegagalan pasar yang membenarkan pensiun publik yang wajib?</i> Jika pasar swasta yang kompetitif dapat menyediakan keamanan pensiun secara efisien, dasar untuk program negara raksasa menjadi lemah. Bab ini berargumen bahwa dasarnya terutama bertumpu pada <b>kegagalan pasar anuitas</b>, diperkuat oleh beberapa pembenaran tingkat kedua.</p>' +
              '<div class="note">💡 Bingkai setiap argumen reformasi sebagai efisiensi (apakah ia memperbaiki/menghindari kegagalan pasar?) vs ekuitas (siapa untung dan rugi?). Keduanya mengalir di sepanjang bab ini.</div>' } },
          { title: { en: 'Consumption smoothing & the annuity-market failure', id: 'Pemulusan konsumsi & kegagalan pasar anuitas' },
            html: { en: '<p>A private <span class="key">annuity</span> charges a premium then pays a sum at regular intervals for <b>as long as the policyholder lives</b>, insuring against <span class="key">longevity risk</span> — the risk of outliving your savings. <span class="key">Consumption smoothing</span> means reducing consumption in high-earning years to raise it in low-earning (retirement) years; an annuity is the instrument that delivers that smoothed lifetime income.</p>' +
              '<p>But the private annuity market may fail through <span class="key">adverse selection</span>, an asymmetric-information problem: <b>buyers know their own life expectancy</b> better than the insurer. Long-lived people disproportionately buy → the insurer must raise prices to cover the long-lived pool → average-life people find it a bad deal and drop out → prices rise again → a <b>spiral</b> that thins or collapses the market (same death-spiral logic as Unit 4 health insurance).</p>' +
              '<div class="note">💡 The book stresses this is an <b>empirical, contested</b> question — annuity markets do exist, so how badly they fail is debated. But if they fail, a mandatory program that pools <b>everyone</b> (long- and short-lived) eliminates the selection problem.</div>', id: '<p>Sebuah <span class="key">annuity</span> swasta memungut premi lalu membayar sejumlah uang secara berkala <b>selama pemegang polis masih hidup</b>, mengasuransikan terhadap <span class="key">longevity risk</span> — risiko hidup lebih lama dari tabungan Anda. <span class="key">Consumption smoothing</span> berarti mengurangi konsumsi di tahun berpenghasilan tinggi untuk menaikkannya di tahun berpenghasilan rendah (pensiun); anuitas adalah instrumen yang memberikan pendapatan seumur hidup yang termuluskan itu.</p>' +
              '<p>Namun pasar anuitas swasta dapat gagal melalui <span class="key">adverse selection</span>, masalah informasi asimetris: <b>pembeli lebih tahu usia harapan hidupnya sendiri</b> daripada penanggung. Orang berumur panjang membeli secara tidak proporsional → penanggung harus menaikkan harga untuk menutup kumpulan berumur panjang → orang berumur rata-rata merasa rugi dan keluar → harga naik lagi → <b>spiral</b> yang menipiskan atau mengkolapskan pasar (logika death-spiral yang sama seperti asuransi kesehatan Unit 4).</p>' +
              '<div class="note">💡 Buku menekankan ini pertanyaan <b>empiris yang masih diperdebatkan</b> — pasar anuitas memang ada, sehingga seberapa parah kegagalannya diperdebatkan. Namun jika gagal, program wajib yang menyatukan <b>semua orang</b> (berumur panjang & pendek) menghapus masalah selection.</div>' } },
          { title: { en: 'Five other justifications', id: 'Lima pembenaran lain' },
            html: { en: '<p>Beyond the annuity failure, five further rationales are offered:</p>' +
              '<ol><li><b>Lack of foresight / paternalism</b> — <span class="key">myopia</span>: people undersave for old age, so the government forces saving for their own good.</li>' +
              '<li><b>Moral hazard</b> — if society will bail out the destitute elderly, individuals rationally save less and <i>free-ride</i> on that safety net; compulsion blocks the free-riding.</li>' +
              '<li><b>Economize on decision-making & administrative costs</b> — one centralized scheme is cheaper than millions of individual annuity searches.</li>' +
              '<li><b>Income redistribution</b> — the progressive benefit formula returns proportionally more to low lifetime earners.</li>' +
              '<li><b>Improve the economic status of the aged</b>.</li></ol>' +
              '<p>On the last point: elderly poverty fell from ≈<b>25% (1 in 4) in 1970</b> to <b>8.7% of the over-65s in 2011</b>, versus <b>15.0%</b> population-wide and <b>21.9%</b> for children — the aged went from the poorest to one of the least-poor groups.</p>', id: '<p>Selain kegagalan anuitas, lima alasan tambahan diajukan:</p>' +
              '<ol><li><b>Kurangnya pandangan ke depan / paternalisme</b> — <span class="key">myopia</span>: orang menabung terlalu sedikit untuk hari tua, sehingga pemerintah memaksa menabung demi kebaikan mereka sendiri.</li>' +
              '<li><b>Moral hazard</b> — jika masyarakat akan menolong lansia yang melarat, individu secara rasional menabung lebih sedikit dan <i>menumpang gratis (free-ride)</i> pada jaring pengaman itu; pemaksaan menghalangi free-riding.</li>' +
              '<li><b>Menghemat biaya pengambilan keputusan & administrasi</b> — satu skema terpusat lebih murah daripada jutaan pencarian anuitas individual.</li>' +
              '<li><b>Redistribusi pendapatan</b> — rumus manfaat progresif mengembalikan proporsi lebih besar kepada pekerja berpenghasilan rendah seumur hidup.</li>' +
              '<li><b>Meningkatkan status ekonomi lansia</b>.</li></ol>' +
              '<p>Soal poin terakhir: kemiskinan lansia turun dari ≈<b>25% (1 dari 4) pada 1970</b> menjadi <b>8.7% dari kelompok usia 65+ pada 2011</b>, dibandingkan <b>15.0%</b> populasi keseluruhan dan <b>21.9%</b> untuk anak-anak — lansia berubah dari kelompok termiskin menjadi salah satu yang paling tidak miskin.</p>' } },
          { title: { en: 'PAYG vs fully funded', id: 'PAYG vs fully funded' },
            html: { en: '<table><thead><tr><th> </th><th>Fully funded</th><th>Pay-As-You-Go (PAYG)</th></tr></thead><tbody>' +
              '<tr><td>Benefit source</td><td>Your own deposits + accumulated interest.</td><td>Taxes paid by <b>current workers</b>.</td></tr>' +
              '<tr><td>Demographic risk</td><td>Lower — tied to own savings.</td><td><b>High</b> — rising dependency ratio strains it.</td></tr>' +
              '<tr><td>Fiscal trajectory</td><td>Limits long-run exposure; market-return risk.</td><td>Needs reform (raise age/tax, cut benefit) to avoid deficits.</td></tr>' +
              '</tbody></table>' +
              '<p>Most public systems are <b>partially funded</b> today. Indonesia’s civil-service pension is PAYG, generating a ~Rp 3,200 T unfunded liability (Unit 3) — the case for reform.</p>', id: '<table><thead><tr><th> </th><th>Fully funded</th><th>Pay-As-You-Go (PAYG)</th></tr></thead><tbody>' +
              '<tr><td>Sumber manfaat</td><td>Setoran Anda sendiri + bunga yang terakumulasi.</td><td>Pajak yang dibayar oleh <b>pekerja saat ini</b>.</td></tr>' +
              '<tr><td>Risiko demografi</td><td>Lebih rendah — terkait tabungan sendiri.</td><td><b>Tinggi</b> — rasio ketergantungan yang naik membebaninya.</td></tr>' +
              '<tr><td>Lintasan fiskal</td><td>Membatasi eksposur jangka panjang; risiko imbal hasil pasar.</td><td>Perlu reformasi (naikkan usia/pajak, pangkas manfaat) untuk hindari defisit.</td></tr>' +
              '</tbody></table>' +
              '<p>Sebagian besar sistem publik saat ini bersifat <b>partially funded</b>. Pensiun PNS Indonesia bersifat PAYG, menghasilkan kewajiban tak terdanai ~Rp 3.200 T (Unit 3) — alasan untuk reformasi.</p>' } }
        ]
      },
      {
        heading: { en: 'Structure: basic components', id: 'Struktur: komponen dasar' }, num: '2',
        cards: [
          { title: { en: 'From fully funded (1935) to PAYG (1939) + explicit transfers', id: 'Dari fully funded (1935) ke PAYG (1939) + transfer eksplisit' },
            html: { en: '<p>Social Security <b>began in 1935 as a FULLY FUNDED system</b>: a retiree\'s benefits would come from <i>their own deposits plus accumulated interest</i>. It was <b>converted in 1939 to PAY-AS-YOU-GO (PAYG / unfunded)</b>: the taxes of <b>current workers</b> pay the benefits of <b>current retirees</b>.</p>' +
              '<p>Two explicit transfer add-ons broadened it from a pure annuity into a redistributive program:</p>' +
              '<ul><li><b>1939</b> — added <b>dependents\' and survivors\' benefits</b> (a worker\'s spouse/children get benefits).</li>' +
              '<li><b>1972</b> — added <span class="key">Supplemental Security Income (SSI)</span>, a welfare <b>minimum-income guarantee</b> for the aged and disabled, financed from general revenue (not FICA).</li></ul>' +
              '<div class="note">💡 The 1939 switch to PAYG is the original sin behind today\'s demographic stress: with no real fund, benefits depend entirely on the ratio of current workers to retirees.</div>', id: '<p>Social Security <b>dimulai pada 1935 sebagai sistem FULLY FUNDED</b>: manfaat pensiunan akan berasal dari <i>setorannya sendiri ditambah bunga yang terakumulasi</i>. Sistem ini <b>diubah pada 1939 menjadi PAY-AS-YOU-GO (PAYG / unfunded)</b>: pajak <b>pekerja saat ini</b> membayar manfaat <b>pensiunan saat ini</b>.</p>' +
              '<p>Dua tambahan transfer eksplisit memperluasnya dari anuitas murni menjadi program redistributif:</p>' +
              '<ul><li><b>1939</b> — menambahkan <b>manfaat tanggungan dan ahli waris</b> (pasangan/anak pekerja menerima manfaat).</li>' +
              '<li><b>1972</b> — menambahkan <span class="key">Supplemental Security Income (SSI)</span>, sebuah <b>jaminan pendapatan minimum</b> bertipe welfare untuk lansia dan penyandang disabilitas, didanai dari penerimaan umum (bukan FICA).</li></ul>' +
              '<div class="note">💡 Peralihan 1939 ke PAYG adalah dosa asal di balik tekanan demografi saat ini: tanpa dana riil, manfaat sepenuhnya bergantung pada rasio pekerja terhadap pensiunan saat ini.</div>' } },
          { title: { en: 'Benefit calculation step 1: AIME', id: 'Perhitungan manfaat langkah 1: AIME' },
            html: { en: '<p>Benefits are computed in <b>two steps</b>. Step 1 is <span class="key">AIME</span> (Average Indexed Monthly Earnings):</p>' +
              '<ul><li>Take the worker\'s <b>top 35 years of earnings</b>.</li>' +
              '<li>Each year is <b>indexed for average wage growth</b> (so old low-nominal wages are scaled up to current-wage terms).</li>' +
              '<li>Earnings <b>above the tax ceiling are excluded</b> (you never paid tax on them, so they never count toward benefits).</li>' +
              '<li>Average and express as a monthly figure.</li></ul>' +
              '<p>AIME is the earnings base; the progressive <span class="key">PIA</span> formula (next card) converts it into the actual benefit.</p>', id: '<p>Manfaat dihitung dalam <b>dua langkah</b>. Langkah 1 adalah <span class="key">AIME</span> (Average Indexed Monthly Earnings):</p>' +
              '<ul><li>Ambil <b>35 tahun penghasilan tertinggi</b> pekerja.</li>' +
              '<li>Tiap tahun <b>diindeks terhadap pertumbuhan upah rata-rata</b> (sehingga upah nominal lama yang rendah diskalakan ke nilai upah kini).</li>' +
              '<li>Penghasilan <b>di atas plafon pajak dikecualikan</b> (Anda tak pernah membayar pajak atasnya, jadi tak pernah dihitung untuk manfaat).</li>' +
              '<li>Rata-ratakan dan nyatakan sebagai angka bulanan.</li></ul>' +
              '<p>AIME adalah basis penghasilan; rumus <span class="key">PIA</span> yang progresif (kartu berikut) mengubahnya menjadi manfaat aktual.</p>' } },
          { title: { en: 'Benefit calculation step 2: the progressive PIA (2012 example)', id: 'Langkah 2: PIA progresif (contoh 2012)' },
            html: { en: '<p>Step 2 is the <span class="key">PIA</span> (Primary Insurance Amount), a <b>progressive bend-point formula</b>. For a worker retiring at 66 in <b>2012</b>:</p>' +
              '<div class="formula">$$ PIA = 0.90\\,\\min(AIME, 767) + 0.32\\,[\\min(AIME,4624)-767]^+ + 0.15\\,[AIME-4624]^+ $$</div>' +
              '<p>i.e. 90% of the first <b>$767</b> of AIME, 32% of AIME between <b>$767 and $4,624</b>, 15% of AIME above <b>$4,624</b> (bend points $767 and $4,624). Because the marginal rate falls 90% → 32% → 15%, the <span class="key">replacement rate</span> (benefit ÷ earnings) falls as earnings rise:</p>' +
              '<table><thead><tr><th>Worker</th><th>Replacement rate</th></tr></thead><tbody>' +
              '<tr><td>Lowest earner</td><td>up to <b>90%</b></td></tr>' +
              '<tr><td>Average earner</td><td>≈ <b>40.8%</b></td></tr>' +
              '<tr><td>Maximum earner</td><td>≈ <b>30%</b></td></tr>' +
              '</tbody></table>' +
              '<p>So the formula is unambiguously <b>progressive</b> — see the <i>ss-pia</i> chart in the Graphs tab.</p>', id: '<p>Langkah 2 adalah <span class="key">PIA</span> (Primary Insurance Amount), sebuah <b>rumus bend-point progresif</b>. Untuk pekerja yang pensiun pada usia 66 di <b>2012</b>:</p>' +
              '<div class="formula">$$ PIA = 0.90\\,\\min(AIME, 767) + 0.32\\,[\\min(AIME,4624)-767]^+ + 0.15\\,[AIME-4624]^+ $$</div>' +
              '<p>yakni 90% dari <b>$767</b> pertama AIME, 32% dari AIME antara <b>$767 dan $4,624</b>, 15% dari AIME di atas <b>$4,624</b> (bend point $767 dan $4,624). Karena tarif marjinal turun 90% → 32% → 15%, <span class="key">replacement rate</span> (manfaat ÷ penghasilan) turun seiring naiknya penghasilan:</p>' +
              '<table><thead><tr><th>Pekerja</th><th>Replacement rate</th></tr></thead><tbody>' +
              '<tr><td>Berpenghasilan terendah</td><td>hingga <b>90%</b></td></tr>' +
              '<tr><td>Berpenghasilan rata-rata</td><td>≈ <b>40.8%</b></td></tr>' +
              '<tr><td>Berpenghasilan maksimum</td><td>≈ <b>30%</b></td></tr>' +
              '</tbody></table>' +
              '<p>Maka rumusnya jelas <b>progresif</b> — lihat grafik <i>ss-pia</i> di tab Graphs.</p>' } },
          { title: { en: 'Retirement age, claiming, family & earnings test', id: 'Usia pensiun, klaim, keluarga & earnings test' },
            html: { en: '<ul><li><b>Normal Retirement Age (NRA)</b> — historically <b>65</b>; the <b>1983 reform</b> legislated a gradual rise to <b>67</b>.</li>' +
              '<li><b>Early claiming</b> — earliest at <b>62</b>, but with a <b>permanent reduction</b> (≈ 5/9 of 1% per month for the first 36 months, then 5/12 of 1% beyond) → about a <b>25% cut at 62</b> vs an NRA of 66. A <b>delayed-retirement credit</b> raises benefits for claiming up to <b>70</b>.</li>' +
              '<li><b>Family status</b> — <b>+50% of PIA</b> for a dependent spouse/child; a surviving spouse gets the <i>larger</i> of the survivor benefit or her own.</li>' +
              '<li><b>Earnings test</b> — for recipients <b>below NRA</b> who keep working, benefits are cut <b>$1 for every $2</b> earned above ≈<b>$14,640</b> (2012); <b>no test</b> once you reach NRA.</li>' +
              '<li><b>Taxation of benefits</b> — up to <b>50%</b> taxable above one income threshold, up to <b>85%</b> above a higher one.</li></ul>' +
              '<div class="tip">📝 The reduction/credit schedule is roughly <i>actuarially neutral</i> on average, but the earnings test and benefit taxation create real implicit taxes on working — the retirement-incentive story of Section 7.</div>', id: '<ul><li><b>Normal Retirement Age (NRA)</b> — secara historis <b>65</b>; <b>reformasi 1983</b> mengundangkan kenaikan bertahap ke <b>67</b>.</li>' +
              '<li><b>Klaim dini</b> — paling awal di <b>62</b>, tetapi dengan <b>pengurangan permanen</b> (≈ 5/9 dari 1% per bulan untuk 36 bulan pertama, lalu 5/12 dari 1% setelahnya) → sekitar <b>potongan 25% di usia 62</b> vs NRA 66. <b>Delayed-retirement credit</b> menaikkan manfaat untuk klaim hingga <b>70</b>.</li>' +
              '<li><b>Status keluarga</b> — <b>+50% dari PIA</b> untuk pasangan/anak tanggungan; pasangan yang ditinggalkan menerima yang <i>lebih besar</i> antara manfaat survivor atau manfaatnya sendiri.</li>' +
              '<li><b>Earnings test</b> — bagi penerima <b>di bawah NRA</b> yang tetap bekerja, manfaat dipotong <b>$1 untuk setiap $2</b> yang diperoleh di atas ≈<b>$14,640</b> (2012); <b>tanpa tes</b> begitu mencapai NRA.</li>' +
              '<li><b>Pengenaan pajak atas manfaat</b> — hingga <b>50%</b> kena pajak di atas satu ambang pendapatan, hingga <b>85%</b> di atas ambang yang lebih tinggi.</li></ul>' +
              '<div class="tip">📝 Jadwal pengurangan/kredit kira-kira <i>netral secara aktuaria</i> rata-rata, tetapi earnings test dan pengenaan pajak atas manfaat menciptakan pajak implisit nyata atas bekerja — cerita insentif pensiun di Bagian 7.</div>' } }
        ]
      },
      {
        heading: { en: 'Structure: financing', id: 'Struktur: pendanaan' }, num: '3',
        cards: [
          { title: { en: 'The FICA payroll tax', id: 'Pajak gaji FICA' },
            html: { en: '<p>Social Security is funded by the <span class="key">FICA</span> payroll tax, <b>split between employer and employee</b>, levied on earnings up to a ceiling — <b>not</b> general revenue.</p>' +
              '<table><thead><tr><th>Tax</th><th>Rate (2012)</th><th>Base</th></tr></thead><tbody>' +
              '<tr><td>OASDI (Social Security)</td><td><b>12.4%</b> = 6.2% + 6.2%</td><td>first <b>$110,100</b></td></tr>' +
              '<tr><td>— 2011 temporary cut</td><td>employee share lowered to <b>4.2%</b></td><td>same ceiling</td></tr>' +
              '<tr><td>Medicare (HI)</td><td><b>2.9%</b> = 1.45% + 1.45%</td><td><b>NO ceiling</b> (all earnings since 1993)</td></tr>' +
              '<tr><td>Medicare high-earner surtax</td><td>extra above $200k single / $250k married</td><td>—</td></tr>' +
              '<tr><td>Self-employed</td><td>pay the <b>full</b> rate (both halves)</td><td>—</td></tr>' +
              '</tbody></table>' +
              '<p>The Medicare (HI) tax has applied to <b>all earnings with no ceiling since 1993</b>; only OASDI is capped.</p>', id: '<p>Social Security didanai oleh pajak gaji <span class="key">FICA</span>, <b>dibagi antara pemberi kerja dan pekerja</b>, dipungut atas penghasilan hingga plafon — <b>bukan</b> dari penerimaan umum.</p>' +
              '<table><thead><tr><th>Pajak</th><th>Tarif (2012)</th><th>Basis</th></tr></thead><tbody>' +
              '<tr><td>OASDI (Social Security)</td><td><b>12.4%</b> = 6.2% + 6.2%</td><td><b>$110,100</b> pertama</td></tr>' +
              '<tr><td>— potongan sementara 2011</td><td>bagian pekerja diturunkan ke <b>4.2%</b></td><td>plafon sama</td></tr>' +
              '<tr><td>Medicare (HI)</td><td><b>2.9%</b> = 1.45% + 1.45%</td><td><b>TANPA plafon</b> (semua penghasilan sejak 1993)</td></tr>' +
              '<tr><td>Surtax Medicare berpenghasilan tinggi</td><td>tambahan di atas $200k lajang / $250k menikah</td><td>—</td></tr>' +
              '<tr><td>Wiraswasta</td><td>membayar tarif <b>penuh</b> (kedua bagian)</td><td>—</td></tr>' +
              '</tbody></table>' +
              '<p>Pajak Medicare (HI) berlaku atas <b>semua penghasilan tanpa plafon sejak 1993</b>; hanya OASDI yang diberi plafon.</p>' } },
          { title: { en: 'Tax-rate history (Table 11.1) & FDR\'s rationale', id: 'Sejarah tarif pajak (Table 11.1) & rasionalisasi FDR' },
            html: { en: '<p>The combined (employer + employee) OASDI rate and the maximum taxable earnings have both climbed steeply (Table 11.1):</p>' +
              '<table><thead><tr><th>Year</th><th>Combined rate</th><th>Max taxable earnings</th></tr></thead><tbody>' +
              '<tr><td>1937</td><td>2.0%</td><td>$3,000</td></tr>' +
              '<tr><td>1960</td><td>6.0%</td><td>$4,800</td></tr>' +
              '<tr><td>1970</td><td>8.4%</td><td>$7,800</td></tr>' +
              '<tr><td>1980</td><td>10.16%</td><td>$25,700</td></tr>' +
              '<tr><td>1990</td><td>12.4%</td><td>$51,300</td></tr>' +
              '<tr><td>2000</td><td>12.4%</td><td>$76,200</td></tr>' +
              '<tr><td>2010</td><td>12.4%</td><td>$106,800</td></tr>' +
              '<tr><td>2012</td><td>12.4%</td><td>$110,100</td></tr>' +
              '</tbody></table>' +
              '<p><b>FDR\'s rationale</b>: earmarked contributions give workers a <i>"legal, moral, and political right"</i> to benefits — it should feel like an <b>earned annuity</b>, not welfare, making the program politically untouchable.</p>' +
              '<div class="note">💡 Economists note this is <b>partly rhetorical</b>: the 2011 employee-tax cut and general-revenue top-ups show the link between your contributions and your benefits is looser than the "earned right" story implies.</div>', id: '<p>Tarif gabungan OASDI (pemberi kerja + pekerja) dan penghasilan kena pajak maksimum sama-sama naik tajam (Table 11.1):</p>' +
              '<table><thead><tr><th>Tahun</th><th>Tarif gabungan</th><th>Penghasilan kena pajak maks</th></tr></thead><tbody>' +
              '<tr><td>1937</td><td>2.0%</td><td>$3,000</td></tr>' +
              '<tr><td>1960</td><td>6.0%</td><td>$4,800</td></tr>' +
              '<tr><td>1970</td><td>8.4%</td><td>$7,800</td></tr>' +
              '<tr><td>1980</td><td>10.16%</td><td>$25,700</td></tr>' +
              '<tr><td>1990</td><td>12.4%</td><td>$51,300</td></tr>' +
              '<tr><td>2000</td><td>12.4%</td><td>$76,200</td></tr>' +
              '<tr><td>2010</td><td>12.4%</td><td>$106,800</td></tr>' +
              '<tr><td>2012</td><td>12.4%</td><td>$110,100</td></tr>' +
              '</tbody></table>' +
              '<p><b>Rasionalisasi FDR</b>: iuran yang di-earmark memberi pekerja <i>"hak legal, moral, dan politik"</i> atas manfaat — seharusnya terasa seperti <b>anuitas yang diperoleh</b>, bukan welfare, sehingga program tak tersentuh secara politik.</p>' +
              '<div class="note">💡 Para ekonom mencatat ini <b>sebagian retoris</b>: pemotongan pajak pekerja 2011 dan top-up dari penerimaan umum menunjukkan kaitan antara iuran Anda dan manfaat Anda lebih longgar daripada yang disiratkan cerita "hak yang diperoleh".</div>' } }
        ]
      },
      {
        heading: { en: 'Distributional issues', id: 'Isu distribusi' }, num: '4',
        cards: [
          { title: { en: 'Not actuarially fair: intergenerational redistribution', id: 'Tidak adil-aktuaria: redistribusi antargenerasi' },
            html: { en: '<p>A private plan gives an <span class="key">actuarially fair</span> return — expected lifetime benefits = contributions. Social Security <b>does NOT</b>. In a PAYG system total taxes = total benefits, so:</p>' +
              '<div class="formula">$$ N_b\\,B = t\\,w\\,N_w \\quad(11.1) \\;\\Rightarrow\\; B = t\\,\\frac{N_w}{N_b}\\,w \\quad(11.2) $$</div>' +
              '<p>Early generations got <b>windfalls</b>: a high workers-per-retiree ratio plus rising wages meant they collected far more than they paid.</p>' +
              '<p><span class="key">Ida Mae Fuller</span>, the <b>first beneficiary</b>, paid ≈<b>$24.75</b> in taxes, retired in 1940 at 65, lived to 100, and collected ≈<b>$22,889</b>.</p>' +
              '<p><span class="key">Social Security wealth</span> = present value of expected future benefits − expected future payroll taxes.</p>', id: '<p>Rencana swasta memberi imbal hasil <span class="key">actuarially fair</span> — ekspektasi manfaat seumur hidup = iuran. Social Security <b>TIDAK</b>. Dalam sistem PAYG total pajak = total manfaat, sehingga:</p>' +
              '<div class="formula">$$ N_b\\,B = t\\,w\\,N_w \\quad(11.1) \\;\\Rightarrow\\; B = t\\,\\frac{N_w}{N_b}\\,w \\quad(11.2) $$</div>' +
              '<p>Generasi awal memperoleh <b>windfall</b>: rasio pekerja-per-pensiunan yang tinggi ditambah upah yang naik berarti mereka menerima jauh lebih banyak daripada yang dibayar.</p>' +
              '<p><span class="key">Ida Mae Fuller</span>, <b>penerima pertama</b>, membayar ≈<b>$24.75</b> pajak, pensiun pada 1940 di usia 65, hidup hingga 100, dan menerima ≈<b>$22,889</b>.</p>' +
              '<p><span class="key">Social Security wealth</span> = nilai sekarang dari ekspektasi manfaat masa depan − ekspektasi pajak gaji masa depan.</p>' } },
          { title: { en: 'Who wins across cohorts (Figure 11.2)', id: 'Siapa menang antarkohort (Figure 11.2)' },
            html: { en: '<p>Figure 11.2 plots <b>net Social Security transfers</b> (thousands of 2006 dollars, −1,000 to +400) against the year a cohort turns 65 (1940–2060), in four panels — <b>single male, single female, one-earner couple, two-earner couple</b> — each with Low/Average/High/Max earnings lines. The patterns:</p>' +
              '<ul><li>Net transfers are <b>higher for low earners</b> (progressive PIA).</li>' +
              '<li><b>Higher for one-earner couples</b> (the free +50% spousal + survivor benefit).</li>' +
              '<li><b>Higher for females</b> (they live longer, so the lifetime annuity is worth more).</li>' +
              '<li>They <b>decline over time</b> and turn <b>negative</b> for later and high earners — the windfall era is over.</li></ul>' +
              '<div class="tip">📝 Reading: the early-cohort, low-earner, one-earner-couple female is the biggest winner; the late-cohort, high-earning two-earner male can be a net loser.</div>', id: '<p>Figure 11.2 memetakan <b>transfer neto Social Security</b> (ribuan dolar 2006, −1,000 hingga +400) terhadap tahun saat kohort berusia 65 (1940–2060), dalam empat panel — <b>pria lajang, wanita lajang, pasangan satu pencari nafkah, pasangan dua pencari nafkah</b> — masing-masing dengan garis penghasilan Low/Average/High/Max. Polanya:</p>' +
              '<ul><li>Transfer neto <b>lebih tinggi untuk pekerja berpenghasilan rendah</b> (PIA progresif).</li>' +
              '<li><b>Lebih tinggi untuk pasangan satu pencari nafkah</b> (manfaat pasangan +50% + survivor yang gratis).</li>' +
              '<li><b>Lebih tinggi untuk perempuan</b> (mereka hidup lebih lama, jadi anuitas seumur hidup bernilai lebih).</li>' +
              '<li>Transfer <b>menurun seiring waktu</b> dan menjadi <b>negatif</b> untuk kohort belakangan dan berpenghasilan tinggi — era windfall berakhir.</li></ul>' +
              '<div class="tip">📝 Membaca: perempuan kohort awal, berpenghasilan rendah, pasangan satu pencari nafkah adalah pemenang terbesar; pria kohort akhir, dua pencari nafkah berpenghasilan tinggi bisa rugi neto.</div>' } },
          { title: { en: 'Intragenerational redistribution: three margins', id: 'Redistribusi intragenerasi: tiga sisi' },
            html: { en: '<p>Within a single generation, Social Security redistributes along three margins:</p>' +
              '<ul><li><b>By earnings</b> — the progressive PIA favours low earners.</li>' +
              '<li><b>By lifespan</b> — shorter-lived people get a <i>worse</i> deal. <b>Liebman (2001)</b>: African-Americans retiring in the 1990s averaged ≈ <b>−$2,514</b>, versus <b>+$8,605</b> for a low-wage white male, because shorter life expectancy means fewer years collecting.</li>' +
              '<li><b>By living arrangements / number of earners</b> — one-earner couples gain from the <b>free 50% spousal + survivor benefit</b>; a two-earner couple paying the <i>same total tax</i> can receive ~<b>$114,000 less</b> over a lifetime.</li></ul>' +
              '<div class="note">💡 The lifespan margin can <i>offset</i> the earnings progressivity: low earners are also shorter-lived on average, clawing back part of the progressive transfer.</div>', id: '<p>Dalam satu generasi, Social Security meredistribusi di tiga sisi:</p>' +
              '<ul><li><b>Berdasarkan penghasilan</b> — PIA progresif menguntungkan pekerja berpenghasilan rendah.</li>' +
              '<li><b>Berdasarkan usia harapan hidup</b> — orang berumur lebih pendek mendapat kesepakatan <i>lebih buruk</i>. <b>Liebman (2001)</b>: warga Afrika-Amerika yang pensiun pada 1990-an rata-rata ≈ <b>−$2,514</b>, versus <b>+$8,605</b> untuk pria kulit putih berupah rendah, karena harapan hidup lebih pendek berarti lebih sedikit tahun menerima manfaat.</li>' +
              '<li><b>Berdasarkan pengaturan hidup / jumlah pencari nafkah</b> — pasangan satu pencari nafkah diuntungkan oleh <b>manfaat pasangan 50% + survivor yang gratis</b>; pasangan dua pencari nafkah yang membayar <i>total pajak sama</i> dapat menerima ~<b>$114,000 lebih sedikit</b> seumur hidup.</li></ul>' +
              '<div class="note">💡 Sisi usia harapan hidup dapat <i>mengimbangi</i> progresivitas penghasilan: pekerja berpenghasilan rendah juga berumur lebih pendek rata-rata, menarik kembali sebagian transfer progresif.</div>' } }
        ]
      },
      {
        heading: { en: 'The Trust Fund', id: 'Dana Perwalian' }, num: '5',
        cards: [
          { title: { en: 'The Trust Fund only helps if it raises NATIONAL saving', id: 'Dana Perwalian hanya membantu jika menaikkan tabungan NASIONAL' },
            html: { en: '<p>From the <b>mid-1980s to 2010</b> payroll taxes <b>exceeded</b> benefits, building a <span class="key">Trust Fund</span> ahead of the baby-boom retirement. The KEY POINT: the trust fund only helps future retirees if it raises <b>NATIONAL SAVING</b> (and hence future output and wages).</p>' +
              '<p><b>The $10B example.</b> Suppose Social Security runs a $10B surplus:</p>' +
              '<ul><li>If that $10B is <b>genuinely saved</b>, the capital stock rises → future productivity and wages rise → there is real output to pay future benefits.</li>' +
              '<li>If it merely lets Congress <b>spend $10B more elsewhere</b>, the trust-fund entry is just a <i>claim on the Treasury</i> (a bond the government owes itself), financed later by taxes or borrowing — and national saving is <b>unchanged</b>.</li></ul>' +
              '<div class="tip">📝 An IOU the government writes to itself is not new wealth. Only a real increase in saving creates the future resources to honour the promises.</div>', id: '<p>Dari <b>pertengahan 1980-an hingga 2010</b> pajak gaji <b>melebihi</b> manfaat, membangun <span class="key">Trust Fund</span> menjelang pensiunnya generasi baby-boom. POIN KUNCI: dana perwalian hanya membantu pensiunan masa depan jika ia menaikkan <b>TABUNGAN NASIONAL</b> (dan karenanya output serta upah masa depan).</p>' +
              '<p><b>Contoh $10B.</b> Misalkan Social Security mencatat surplus $10B:</p>' +
              '<ul><li>Jika $10B itu <b>benar-benar ditabung</b>, stok modal naik → produktivitas dan upah masa depan naik → ada output riil untuk membayar manfaat masa depan.</li>' +
              '<li>Jika ia sekadar membuat Kongres <b>membelanjakan $10B lebih banyak di tempat lain</b>, entri dana perwalian hanyalah <i>klaim atas Treasury</i> (obligasi yang pemerintah utang ke dirinya sendiri), didanai kelak oleh pajak atau utang — dan tabungan nasional <b>tak berubah</b>.</li></ul>' +
              '<div class="tip">📝 IOU yang ditulis pemerintah kepada dirinya sendiri bukanlah kekayaan baru. Hanya kenaikan tabungan riil yang menciptakan sumber daya masa depan untuk menepati janji.</div>' } },
          { title: { en: 'Off-budget vs unified budget; the empirical verdict', id: 'Off-budget vs unified budget; vonis empiris' },
            html: { en: '<p><b>Budget treatment.</b> The trust-fund surplus can be counted <span class="key">off-budget</span> (on its own) or rolled into the <span class="key">unified budget</span> (lumped with the rest of federal spending). The unified figure <b>masks the rest of the deficit</b>: a big Social Security surplus makes the overall budget look healthier than the government\'s ongoing operations actually are.</p>' +
              '<p><b>Empirical verdict.</b> <span class="key">Nataraj & Shoven (2004)</span> find the Social Security surpluses were <b>mostly offset by larger deficits elsewhere</b> in the budget — i.e. the surplus largely financed extra spending rather than adding to national saving. The result is <b>controversial</b>, but it is exactly the failure the $10B example warns about.</p>' +
              '<div class="note">💡 Bottom line: building a trust fund is necessary but not sufficient. Whether it helps depends entirely on the behaviour of the rest of the budget.</div>', id: '<p><b>Perlakuan anggaran.</b> Surplus dana perwalian dapat dihitung <span class="key">off-budget</span> (tersendiri) atau digabung ke <span class="key">unified budget</span> (disatukan dengan sisa belanja federal). Angka unified <b>menutupi sisa defisit</b>: surplus Social Security yang besar membuat anggaran keseluruhan tampak lebih sehat daripada operasi pemerintah yang sebenarnya berjalan.</p>' +
              '<p><b>Vonis empiris.</b> <span class="key">Nataraj & Shoven (2004)</span> menemukan surplus Social Security <b>sebagian besar diimbangi oleh defisit yang lebih besar di tempat lain</b> dalam anggaran — yakni surplus itu sebagian besar mendanai belanja ekstra alih-alih menambah tabungan nasional. Hasil ini <b>kontroversial</b>, tetapi persis kegagalan yang diperingatkan contoh $10B.</p>' +
              '<div class="note">💡 Intinya: membangun dana perwalian itu perlu tetapi tidak cukup. Apakah ia membantu sepenuhnya bergantung pada perilaku sisa anggaran.</div>' } }
        ]
      },
      {
        heading: { en: 'Effects on behaviour: saving', id: 'Efek pada perilaku: tabungan' }, num: '6',
        cards: [
          { title: { en: 'Three effects on saving (sign ambiguous → empirical)', id: 'Tiga efek pada tabungan (tanda ambigu → empiris)' },
            html: { en: '<p>Use the <span class="key">life-cycle model</span>: people save while working to fund retirement. Social Security adds three effects whose <b>net sign is theoretically ambiguous</b>:</p>' +
              '<ul><li><b>Wealth-substitution effect</b> — Social Security wealth substitutes for private saving → saving <b>↓</b>.</li>' +
              '<li><b>Retirement effect</b> — it induces <i>earlier</i> retirement → a longer retirement to finance → saving <b>↑</b>.</li>' +
              '<li><b>Bequest effect</b> — parents save more to offset the intergenerational transfer (to still leave bequests to their children) → saving <b>↑</b>.</li></ul>' +
              '<p>Because the wealth-substitution effect pushes down while the retirement and bequest effects push up, the <b>net effect is an empirical question</b>.</p>' +
              '<div class="tip">📝 Distinguish <b>bequeathable wealth</b> (you can leave it to heirs) from <b>annuitized wealth</b> (dies with you). Social Security converts bequeathable into annuitized wealth — relevant to the bequest effect and to wealth mobility.</div>', id: '<p>Gunakan <span class="key">life-cycle model</span>: orang menabung saat bekerja untuk mendanai pensiun. Social Security menambah tiga efek yang <b>tanda netonya secara teoretis ambigu</b>:</p>' +
              '<ul><li><b>Wealth-substitution effect</b> — kekayaan Social Security menggantikan tabungan swasta → tabungan <b>↓</b>.</li>' +
              '<li><b>Retirement effect</b> — mendorong pensiun <i>lebih dini</i> → masa pensiun lebih panjang yang harus didanai → tabungan <b>↑</b>.</li>' +
              '<li><b>Bequest effect</b> — orang tua menabung lebih untuk mengimbangi transfer antargenerasi (agar tetap dapat mewariskan kepada anak) → tabungan <b>↑</b>.</li></ul>' +
              '<p>Karena wealth-substitution effect menekan ke bawah sementara retirement dan bequest effect mendorong ke atas, <b>efek neto adalah pertanyaan empiris</b>.</p>' +
              '<div class="tip">📝 Bedakan <b>bequeathable wealth</b> (dapat diwariskan ke ahli waris) dari <b>annuitized wealth</b> (lenyap bersama Anda). Social Security mengubah kekayaan yang dapat diwariskan menjadi teranuitisasi — relevan untuk bequest effect dan mobilitas kekayaan.</div>' } },
          { title: { en: 'The crowd-out diagram (Figures 11.3–11.5)', id: 'Diagram crowd-out (Figure 11.3–11.5)' },
            html: { en: '<p><b>Figure 11.3 (intertemporal budget constraint).</b> Axes: present consumption $c_0$ (x), future consumption $c_1$ (y); the budget line is $MN$. The endowment $A=(I_0,I_1)$, slope $-(1+r)$. Save $S$ → move to $D=(I_0-S,\\;I_1+(1+r)S)$; borrow $B$ → move to $F$.</p>' +
              '<p><b>Figure 11.4 (optimum).</b> The optimum $E_1$ is the tangency of $MN$ with the highest indifference curve; <b>saving = $I_0-c_0^{*}$</b>.</p>' +
              '<p><b>Figure 11.5 (crowd-out).</b> An <b>actuarially-fair</b> tax $T$ shifts the endowment from $A$ to $R$ — <b>left by $T$ and up by $(1+r)T$</b> — so the budget line still coincides with $MN$ and the optimum $E_1$ is <b>UNCHANGED</b>. The government now does part of the saving, so <b>private saving falls one-for-one</b>: "saving before SS" &gt; "saving after SS". Under <b>PAYG there is no offsetting public saving</b>, so <b>national saving falls</b>.</p>', id: '<p><b>Figure 11.3 (kendala anggaran antarwaktu).</b> Sumbu: konsumsi sekarang $c_0$ (x), konsumsi masa depan $c_1$ (y); garis anggaran adalah $MN$. Endowment $A=(I_0,I_1)$, lereng $-(1+r)$. Menabung $S$ → pindah ke $D=(I_0-S,\\;I_1+(1+r)S)$; meminjam $B$ → pindah ke $F$.</p>' +
              '<p><b>Figure 11.4 (optimum).</b> Optimum $E_1$ adalah titik singgung $MN$ dengan kurva indiferen tertinggi; <b>tabungan = $I_0-c_0^{*}$</b>.</p>' +
              '<p><b>Figure 11.5 (crowd-out).</b> Pajak <b>actuarially-fair</b> $T$ menggeser endowment dari $A$ ke $R$ — <b>ke kiri sebesar $T$ dan ke atas sebesar $(1+r)T$</b> — sehingga garis anggaran tetap berimpit dengan $MN$ dan optimum $E_1$ <b>TIDAK BERUBAH</b>. Pemerintah kini menabung sebagian, jadi <b>tabungan swasta turun satu-lawan-satu</b>: "tabungan sebelum SS" &gt; "tabungan setelah SS". Di bawah <b>PAYG tidak ada tabungan publik penyeimbang</b>, sehingga <b>tabungan nasional turun</b>.</p>' } },
          { title: { en: 'Empirical evidence on saving crowd-out', id: 'Bukti empiris crowd-out tabungan' },
            html: { en: '<ul><li><span class="key">Feldstein (1974)</span> found Social Security <b>greatly depressed</b> private saving.</li>' +
              '<li><span class="key">Leimer & Lesnoy (1982)</span> found a <b>programming error</b> in Feldstein\'s work; correcting it gave a <b>much weaker</b> effect.</li>' +
              '<li><span class="key">Attanasio & Brugiavini (2003)</span>, Italy: ≈ <b>$0.40</b> of private saving crowded out per <b>$1</b> of Social Security wealth — and <b>smaller</b> for groups with a strong bequest motive (consistent with the bequest effect offsetting).</li></ul>' +
              '<div class="note">💡 Verdict: on balance the evidence points to <b>partial</b> crowd-out (well below one-for-one in the data), not the full crowd-out of the pure actuarially-fair model — because the retirement and bequest effects partly offset.</div>', id: '<ul><li><span class="key">Feldstein (1974)</span> menemukan Social Security <b>sangat menekan</b> tabungan swasta.</li>' +
              '<li><span class="key">Leimer & Lesnoy (1982)</span> menemukan <b>kesalahan pemrograman</b> dalam karya Feldstein; setelah dikoreksi efeknya jadi <b>jauh lebih lemah</b>.</li>' +
              '<li><span class="key">Attanasio & Brugiavini (2003)</span>, Italia: ≈ <b>$0.40</b> tabungan swasta tergusur per <b>$1</b> kekayaan Social Security — dan <b>lebih kecil</b> untuk kelompok dengan motif warisan kuat (konsisten dengan bequest effect yang mengimbangi).</li></ul>' +
              '<div class="note">💡 Vonis: secara keseluruhan bukti menunjuk crowd-out <b>parsial</b> (jauh di bawah satu-lawan-satu dalam data), bukan crowd-out penuh dari model actuarially-fair murni — karena retirement dan bequest effect sebagian mengimbangi.</div>' } }
        ]
      },
      {
        heading: { en: 'Effects on behaviour: retirement', id: 'Efek pada perilaku: pensiun' }, num: '7',
        cards: [
          { title: { en: 'The implicit tax on continued work', id: 'Pajak implisit atas terus bekerja' },
            html: { en: '<p>Labour-force participation of <b>men 65+</b> fell from <b>45.8% (1950)</b> to ≈ <b>22.8% (2011)</b> — a dramatic shift toward early retirement.</p>' +
              '<p>Social Security wealth plus the benefit rules create an <span class="key">implicit tax on continued work</span>: working another year means you <b>lose benefits and pay more payroll tax</b>, often <b>not fully offset</b> by higher future benefits. The net wedge pushes people to retire earlier.</p>' +
              '<ul><li><span class="key">Diamond & Gruber (1999)</span> — a real disincentive to work past 65 in the US.</li>' +
              '<li><span class="key">Gruber & Wise (2004)</span> — across <b>12 industrialised countries</b>, Social Security rules <b>strongly induce retirement</b>: the more the system implicitly taxes work, the earlier people leave.</li></ul>', id: '<p>Partisipasi angkatan kerja <b>pria 65+</b> turun dari <b>45.8% (1950)</b> menjadi ≈ <b>22.8% (2011)</b> — pergeseran dramatis ke arah pensiun dini.</p>' +
              '<p>Kekayaan Social Security ditambah aturan manfaat menciptakan <span class="key">pajak implisit atas terus bekerja</span>: bekerja satu tahun lagi berarti Anda <b>kehilangan manfaat dan membayar pajak gaji lebih</b>, sering kali <b>tidak diimbangi penuh</b> oleh manfaat masa depan yang lebih tinggi. Selisih neto ini mendorong orang pensiun lebih dini.</p>' +
              '<ul><li><span class="key">Diamond & Gruber (1999)</span> — disinsentif nyata untuk bekerja melewati usia 65 di AS.</li>' +
              '<li><span class="key">Gruber & Wise (2004)</span> — di <b>12 negara industri</b>, aturan Social Security <b>kuat mendorong pensiun</b>: makin tinggi pajak implisit atas kerja, makin dini orang berhenti.</li></ul>' } },
          { title: { en: 'Implications: security vs efficiency', id: 'Implikasi: keamanan vs efisiensi' },
            html: { en: '<p>On balance, the evidence suggests Social Security <b>depresses both saving and work effort</b>. But it also delivers income security that private markets <b>cannot</b> (the annuity-market failure of Section 1).</p>' +
              '<p>So the policy question is <b>not</b> "abolish vs keep" — it is: <i>can the same income security be achieved with fewer efficiency costs?</i> That framing drives the whole reform debate.</p>' +
              '<div class="note">💡 Indonesia link (Unit 3): a universal pension floor (Program A) can also act as an implicit tax on working past 65 if benefits are clawed back against labour income — a real allocative-efficiency cost to weigh against its coverage benefit.</div>', id: '<p>Secara keseluruhan, bukti menunjukkan Social Security <b>menekan baik tabungan maupun upaya kerja</b>. Namun ia juga memberikan keamanan pendapatan yang <b>tak dapat</b> diberikan pasar swasta (kegagalan pasar anuitas di Bagian 1).</p>' +
              '<p>Maka pertanyaan kebijakannya <b>bukan</b> "hapus vs pertahankan" — melainkan: <i>dapatkah keamanan pendapatan yang sama dicapai dengan biaya efisiensi lebih rendah?</i> Bingkai inilah yang menggerakkan seluruh perdebatan reformasi.</p>' +
              '<div class="note">💡 Kaitan Indonesia (Unit 3): pensiun universal sebagai lantai (Program A) juga dapat bertindak sebagai pajak implisit atas bekerja melewati usia 65 jika manfaat ditarik kembali terhadap pendapatan kerja — biaya efisiensi alokatif nyata yang harus ditimbang terhadap manfaat cakupannya.</div>' } }
        ]
      },
      {
        heading: { en: 'Long-term stress & reform', id: 'Tekanan jangka panjang & reformasi' }, num: '8',
        cards: [
          { title: { en: 'The long-term shortfall & the dependency-ratio algebra', id: 'Defisit jangka panjang & aljabar rasio ketergantungan' },
            html: { en: '<p>Since <b>2010</b> benefits exceed payroll taxes, and the trust fund is projected to be <b>exhausted ≈2033</b>. The driver is demographic. From Eq 11.2, the required tax rate is:</p>' +
              '<div class="formula">$$ t = \\underbrace{\\frac{N_b}{N_w}}_{\\text{dependency ratio}} \\times \\underbrace{\\frac{B}{w}}_{\\text{replacement ratio}} \\quad(11.3) $$</div>' +
              '<p>The US <span class="key">dependency ratio</span> $N_b/N_w$ ≈ <b>0.35</b> now (≈ <b>2.9 workers per retiree</b>) and is projected to reach ≈ <b>0.48 by 2030</b> (≈ <b>2.1 workers per retiree</b>) as the boomers retire. Holding the replacement ratio fixed, $t$ must rise nearly in proportion.</p>' +
              '<p><b>Figure 11.6</b> plots projected <b>payments</b> vs <b>tax revenue</b> as a % of GDP: the payment line crosses above tax revenue from ≈2010 and the <b>shortfall widens</b> thereafter.</p>', id: '<p>Sejak <b>2010</b> manfaat melebihi pajak gaji, dan dana perwalian diproyeksikan <b>habis ≈2033</b>. Pemicunya demografis. Dari Eq 11.2, tarif pajak yang dibutuhkan adalah:</p>' +
              '<div class="formula">$$ t = \\underbrace{\\frac{N_b}{N_w}}_{\\text{dependency ratio}} \\times \\underbrace{\\frac{B}{w}}_{\\text{replacement ratio}} \\quad(11.3) $$</div>' +
              '<p><span class="key">Dependency ratio</span> AS $N_b/N_w$ ≈ <b>0.35</b> sekarang (≈ <b>2.9 pekerja per pensiunan</b>) dan diproyeksikan mencapai ≈ <b>0.48 pada 2030</b> (≈ <b>2.1 pekerja per pensiunan</b>) saat generasi boomer pensiun. Dengan replacement ratio tetap, $t$ harus naik nyaris proporsional.</p>' +
              '<p><b>Figure 11.6</b> memetakan <b>pembayaran</b> vs <b>penerimaan pajak</b> proyeksi sebagai % GDP: garis pembayaran melewati penerimaan pajak sejak ≈2010 dan <b>defisitnya melebar</b> sesudahnya.</p>' } },
          { title: { en: 'Reform A — maintain the system', id: 'Reformasi A — pertahankan sistem' },
            html: { en: '<p>The reform goal is <span class="key">sustainable solvency</span>: PV of revenues = PV of expenditures into the indefinite future (the chosen horizon matters, e.g. a <b>75-year window</b>). Options to maintain PAYG:</p>' +
              '<ul><li><b>Raise the 12.4% payroll tax</b> — ≈ <b>+3.9 pp</b> restores 75-year solvency.</li>' +
              '<li><b>Raise / remove the $110,100 ceiling</b> — ≈ a <b>+2.34 pp</b> tax rise equivalent, but it also <b>raises future benefits</b> (those new earnings enter AIME).</li>' +
              '<li><b>Raise the NRA</b> — to 68 at 1 month per 2 years ≈ the full fix.</li>' +
              '<li><b>Reduce the COLA</b> — indexing to a CPI <b>1 pp lower</b> ≈ <b>+1.64 pp</b>; justified because the <span class="key">CPI overstates inflation</span> (<b>Boskin Commission 1996</b>).</li>' +
              '<li><b>Change the benefit formula</b> — switching AIME indexing from <b>wage-indexing → price-indexing</b> cuts benefits a lot; <span class="key">"progressive price indexing"</span> (<b>Pozen 2004</b>) shields low earners while price-indexing high earners.</li></ul>', id: '<p>Tujuan reformasi adalah <span class="key">sustainable solvency</span>: PV penerimaan = PV pengeluaran hingga masa depan tak terbatas (horizon yang dipilih penting, mis. <b>jendela 75 tahun</b>). Opsi mempertahankan PAYG:</p>' +
              '<ul><li><b>Naikkan pajak gaji 12.4%</b> — ≈ <b>+3.9 pp</b> memulihkan solvabilitas 75 tahun.</li>' +
              '<li><b>Naikkan / hapus plafon $110,100</b> — setara kenaikan pajak ≈ <b>+2.34 pp</b>, tetapi juga <b>menaikkan manfaat masa depan</b> (penghasilan baru itu masuk AIME).</li>' +
              '<li><b>Naikkan NRA</b> — ke 68 dengan laju 1 bulan per 2 tahun ≈ perbaikan penuh.</li>' +
              '<li><b>Kurangi COLA</b> — indeksasi ke CPI <b>1 pp lebih rendah</b> ≈ <b>+1.64 pp</b>; dibenarkan karena <span class="key">CPI melebih-lebihkan inflasi</span> (<b>Boskin Commission 1996</b>).</li>' +
              '<li><b>Ubah rumus manfaat</b> — mengalihkan indeksasi AIME dari <b>wage-indexing → price-indexing</b> memangkas manfaat banyak; <span class="key">"progressive price indexing"</span> (<b>Pozen 2004</b>) melindungi pekerja berpenghasilan rendah sembari mem-price-index yang berpenghasilan tinggi.</li></ul>' } },
          { title: { en: 'Reform B — privatize via personal accounts', id: 'Reformasi B — privatisasi via akun pribadi' },
            html: { en: '<p><b>Privatize</b> by creating <span class="key">personal (individual savings) accounts</span> holding stocks/bonds, which are <b>bequeathable</b>. Two ways to fund them:</p>' +
              '<ul><li><span class="key">Carve-out</span> — divert <b>existing</b> payroll taxes into the accounts. This creates a <b>transition financing hole</b>: current retirees still need paying, but the taxes that funded them now go into private accounts.</li>' +
              '<li><span class="key">Add-on</span> — <b>extra</b> contributions on top of the existing tax → <b>no diversion</b>, no transition hole.</li></ul>' +
              '<p><b>Trade-offs:</b></p>' +
              '<ul><li><b>Solvency / saving</b> — only raises national saving if it is <b>truly out-of-pocket</b>, not debt-financed.</li>' +
              '<li><b>Risk</b> — shifts <b>market risk to individuals</b> (cf. the 2008–09 crashes).</li>' +
              '<li><b>Administration</b> — higher <b>per-account cost</b> vs the cheap centralised system.</li>' +
              '<li><b>Distribution</b> — personal accounts handle the saving/annuity goal but <b>NOT the redistribution goal</b>, so you need a separate matching/transfer (<b>Feldstein & Samwick 2002</b>).</li></ul>' +
              '<div class="note">💡 Countries that have moved toward personal accounts: <b>UK, Chile, Australia, Mexico, Argentina</b>. Endterm frame: <b>Program A</b> (universal non-contributory floor) vs <b>Program B</b> (matching grant on private savings) — evaluate on allocative efficiency, target efficiency (A: no under-coverage, high leakage to the rich; B: low leakage, high under-coverage of the poorest who cannot save), and deadweight loss / fiscal cost.</div>', id: '<p><b>Privatisasi</b> dengan menciptakan <span class="key">akun pribadi (individual savings accounts)</span> berisi saham/obligasi, yang <b>dapat diwariskan (bequeathable)</b>. Dua cara mendanainya:</p>' +
              '<ul><li><span class="key">Carve-out</span> — mengalihkan pajak gaji <b>yang ada</b> ke akun. Ini menciptakan <b>lubang pendanaan transisi</b>: pensiunan saat ini tetap harus dibayar, tetapi pajak yang mendanainya kini masuk ke akun pribadi.</li>' +
              '<li><span class="key">Add-on</span> — iuran <b>tambahan</b> di atas pajak yang ada → <b>tanpa pengalihan</b>, tanpa lubang transisi.</li></ul>' +
              '<p><b>Trade-off:</b></p>' +
              '<ul><li><b>Solvabilitas / tabungan</b> — hanya menaikkan tabungan nasional jika benar-benar <b>dari kantong sendiri</b>, bukan dibiayai utang.</li>' +
              '<li><b>Risiko</b> — mengalihkan <b>risiko pasar ke individu</b> (bdk. krisis 2008–09).</li>' +
              '<li><b>Administrasi</b> — <b>biaya per akun</b> lebih tinggi vs sistem terpusat yang murah.</li>' +
              '<li><b>Distribusi</b> — akun pribadi menangani tujuan tabungan/anuitas tetapi <b>BUKAN tujuan redistribusi</b>, sehingga perlu matching/transfer terpisah (<b>Feldstein & Samwick 2002</b>).</li></ul>' +
              '<div class="note">💡 Negara yang bergerak ke akun pribadi: <b>UK, Chile, Australia, Meksiko, Argentina</b>. Bingkai endterm: <b>Program A</b> (lantai universal non-kontributif) vs <b>Program B</b> (matching grant atas tabungan swasta) — evaluasi pada efisiensi alokatif, efisiensi sasaran (A: tanpa under-coverage, bocor tinggi ke yang kaya; B: bocor rendah, under-coverage tinggi bagi termiskin yang tak mampu menabung), dan deadweight loss / biaya fiskal.</div>' } }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'PAYG balance & intergenerational transfer', id: 'Keseimbangan PAYG' },
          html: { en: '<div class="formula">$$ N_b B = t\\,N_w w \\;\\Rightarrow\\; B = t\\,\\frac{N_w}{N_b}\\,w, \\qquad t = \\frac{N_b}{N_w}\\cdot\\frac{B}{w} $$</div>' +
            '<p>t = dependency ratio × replacement ratio.</p>', id: '<div class="formula">$$ N_b B = t\\,N_w w \\;\\Rightarrow\\; B = t\\,\\frac{N_w}{N_b}\\,w, \\qquad t = \\frac{N_b}{N_w}\\cdot\\frac{B}{w} $$</div>' +
            '<p>t = rasio ketergantungan × rasio penggantian.</p>' } },
        { title: { en: 'Benefit (PIA) formula', id: 'Rumus manfaat (PIA)' },
          html: { en: '<div class="formula">$$ PIA = .90\\,\\min(AIME, 767) + .32\\,[\\min(AIME,4624)-767]^+ + .15\\,[AIME-4624]^+ $$</div>' +
            '<p>$[x]^+ = \\max(x,0)$. Bend points \\$767 / \\$4{,}624 (Rosen & Gayer, 2012). Replacement rate falls as AIME rises → progressive.</p>', id: '<div class="formula">$$ PIA = .90\\,\\min(AIME, 767) + .32\\,[\\min(AIME,4624)-767]^+ + .15\\,[AIME-4624]^+ $$</div>' +
            '<p>$[x]^+ = \\max(x,0)$. Titik kelok \\$767 / \\$4{,}624 (Rosen & Gayer, 2012). Rasio penggantian turun seiring naiknya AIME → progresif.</p>' } },
        { title: { en: 'Intertemporal budget constraint', id: 'Kendala anggaran antarwaktu' },
          html: { en: '<div class="formula">$$ c_1 = I_1 + (1+r)(I_0 - c_0), \\qquad \\text{slope} = -(1+r) $$</div>' +
            '<p>Optimum where the indifference curve is tangent: MRS = (1+r). Saving = $I_0 - c_0^{*}$.</p>', id: '<div class="formula">$$ c_1 = I_1 + (1+r)(I_0 - c_0), \\qquad \\text{slope} = -(1+r) $$</div>' +
            '<p>Optimum di mana kurva indiferen bersinggungan: MRS = (1+r). Tabungan = $I_0 - c_0^{*}$.</p>' } },
        { title: { en: 'Actuarially fair contribution', id: 'Iuran adil-aktuaria' },
          html: { en: '<div class="formula">$$ \\text{Pay } T \\text{ now, receive } (1+r)T \\text{ later} \\Rightarrow \\text{endowment slides along the same budget line} $$</div>' +
            '<p>⇒ optimum unchanged ⇒ private saving falls by exactly T.</p>', id: '<div class="formula">$$ \\text{Pay } T \\text{ now, receive } (1+r)T \\text{ later} \\Rightarrow \\text{endowment slides along the same budget line} $$</div>' +
            '<p>⇒ optimum tak berubah ⇒ tabungan swasta turun tepat sebesar T.</p>' } }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Consumption smoothing across time', id: 'Pemulusan konsumsi antarwaktu' },
          html: { en: '<p>The budget line has slope −(1+r) through the endowment A; the optimum is where an indifference curve is tangent. Make income now large and impatience low → the person saves (moves left of A); reverse it → they borrow. This is the engine of the life-cycle saving story.</p>', id: '<p>Garis anggaran berlereng −(1+r) melalui endowment A; optimum berada di titik singgung kurva indiferen. Buat pendapatan sekarang besar dan ketidaksabaran rendah → orang menabung (bergerak ke kiri A); sebaliknya → mereka meminjam. Inilah mesin dari cerita tabungan siklus hidup.</p>' },
          chartId: 'intertemporal' },
        { title: { en: 'Social Security benefit (PIA): a progressive kink', id: 'Manfaat PIA: kelok progresif' },
          html: { en: '<p>Slide AIME along the kinked benefit line. The marginal replacement drops at each bend point (90% → 32% → 15%), so the replacement rate (benefit ÷ AIME) falls as earnings rise — the formula redistributes toward low earners.</p>', id: '<p>Geser AIME di sepanjang garis manfaat yang berkelok. Penggantian marjinal turun di tiap bend point (90% → 32% → 15%), sehingga rasio penggantian (manfaat ÷ AIME) turun seiring naiknya penghasilan — rumus meredistribusi ke arah pekerja berpenghasilan rendah.</p>' },
          chartId: 'ss-pia' },
        { title: { en: 'Social Security crowds out private saving', id: 'Jaminan sosial menggusur tabungan' },
          html: { en: '<p>An actuarially-fair payroll tax moves the endowment from A to A′ <i>along the same budget line</i>, so the optimum doesn’t move. Households simply cut their own saving by the contribution — private saving falls one-for-one while total (private + forced) saving stays put.</p>', id: '<p>Pajak gaji yang actuarially-fair menggeser endowment dari A ke A′ <i>di sepanjang garis anggaran yang sama</i>, sehingga optimum tidak bergeser. Rumah tangga sekadar memangkas tabungannya sendiri sebesar iuran tersebut — tabungan swasta turun satu-lawan-satu sementara tabungan total (swasta + wajib) tetap.</p>' },
          chartId: 'ss-crowdout' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'Why does the private annuity market fail, and how does mandatory public social security fix it?', id: 'Mengapa pasar anuitas swasta gagal, dan bagaimana jaminan sosial wajib memperbaikinya?' },
        answer: [
          { en: 'Adverse selection: only people expecting to live long buy annuities; the insurer must raise prices for the long-lived pool, pushing out the moderately healthy — the market thins or collapses.', id: 'Adverse selection: hanya yang berumur panjang membeli; harga naik, pasar menyusut.' },
          { en: 'A mandatory public program pools <b>everyone</b> (long- and short-lived), eliminating the selection problem and providing a guaranteed lifetime income.', id: 'Program wajib menyatukan <b>semua</b>, menghapus selection dan menjamin pendapatan seumur hidup.' }
        ], tip: { en: 'Compulsory pooling cures annuity adverse selection, just like health insurance.', id: 'Pooling wajib menyembuhkan adverse selection anuitas.' } },
      { type: 'quant', q: { en: 'A PAYG system has 3 workers per retiree, wage w = 1000, and pays benefit B = 600 per retiree. What payroll tax rate balances the system?', id: 'Sistem PAYG: 3 pekerja per pensiunan, upah w = 1000, manfaat B = 600. Berapa tarif pajak penyeimbang?' },
        answer: [
          { en: 'Balance: $B = t (N_w/N_b) w$ ⇒ 600 = t × 3 × 1000.', id: 'Keseimbangan: 600 = t × 3 × 1000.' },
          { en: 't = 600 / 3000 = <b>0.20 (20%)</b>.', id: 't = 600 / 3000 = <b>0,20 (20%)</b>.' },
          { en: 'If aging cuts the ratio to 2 workers per retiree, the same B needs t = 600/2000 = 30% — the demographic squeeze.', id: 'Jika rasio turun ke 2, t harus 30% — tekanan demografi.' }
        ], tip: { en: 't = dependency ratio × replacement ratio.', id: 't = rasio ketergantungan × rasio penggantian.' } },
      { type: 'scenario', q: { en: 'A government introduces an actuarially fair mandatory pension. Using the intertemporal model, predict the effect on private and total saving.', id: 'Pemerintah memperkenalkan pensiun wajib adil-aktuaria. Pakai model antarwaktu: prediksi efek pada tabungan swasta dan total.' },
        answer: [
          { en: 'The contribution T now / (1+r)T later moves the endowment <b>along the same budget line</b>, so the optimal consumption bundle is unchanged.', id: 'Iuran T sekarang / (1+r)T nanti menggeser endowment di garis anggaran yang sama; konsumsi optimal tak berubah.' },
          { en: 'Private saving falls by exactly T (the state now does that saving for you); <b>total</b> saving is unchanged — pure crowd-out in the pure model.', id: 'Tabungan swasta turun tepat T; total tetap — crowd-out penuh dalam model murni.' },
          { en: 'In practice, retirement and bequest effects can offset, so empirical crowd-out is less than one-for-one.', id: 'Dalam praktik, efek pensiun & warisan mengimbangi, jadi crowd-out empiris < satu-lawan-satu.' }
        ], tip: { en: 'Same budget line ⇒ same optimum ⇒ private saving absorbs the whole contribution.', id: 'Garis anggaran sama ⇒ optimum sama ⇒ tabungan swasta menyerap seluruh iuran.' } },
      { type: 'quant', q: { en: 'Two-period model: income $20,000 in period 1 and $5,000 in period 2, r = 10%, you may save but not borrow. The government imposes an actuarially-fair tax of $3,000 in period 1, repaid as (1+r)·$3,000 = $3,300 in period 2. What happens to PRIVATE saving and to the optimal consumption bundle?', id: 'Model dua-periode: pendapatan $20,000 di periode 1 dan $5,000 di periode 2, r = 10%, boleh menabung tetapi tidak meminjam. Pemerintah mengenakan pajak adil-aktuaria $3,000 di periode 1, dikembalikan sebagai (1+r)·$3,000 = $3,300 di periode 2. Apa yang terjadi pada tabungan SWASTA dan bundel konsumsi optimal?' },
        answer: [
          { en: 'The tax moves the endowment from ($20,000, $5,000) to ($17,000, $8,300) — left by $3,000, up by (1+r)·$3,000 = $3,300 — which lies on the <b>same budget line</b> (slope −1.1).', id: 'Pajak menggeser endowment dari ($20,000, $5,000) ke ($17,000, $8,300) — kiri $3,000, atas (1+r)·$3,000 = $3,300 — yang berada di <b>garis anggaran yang sama</b> (lereng −1,1).' },
          { en: 'Because the budget line is unchanged, the <b>optimal consumption bundle is unchanged</b>.', id: 'Karena garis anggaran tak berubah, <b>bundel konsumsi optimal tak berubah</b>.' },
          { en: 'The government now saves $3,000 on the household\'s behalf, so <b>private saving falls by ~$3,000</b>; total saving is unchanged (pure crowd-out). As long as the household was already saving ≥ $3,000, the no-borrowing constraint does not bind.', id: 'Pemerintah kini menabung $3,000 atas nama rumah tangga, jadi <b>tabungan swasta turun ~$3,000</b>; tabungan total tak berubah (crowd-out penuh). Selama rumah tangga sudah menabung ≥ $3,000, kendala tanpa-pinjaman tidak mengikat.' }
        ], tip: { en: 'Actuarially-fair tax = endowment slides along the same line ⇒ private saving absorbs it one-for-one.', id: 'Pajak adil-aktuaria = endowment meluncur di garis yang sama ⇒ tabungan swasta menyerapnya satu-lawan-satu.' } },
      { type: 'scenario', q: { en: 'In a PAYG system the dependency ratio rises as the population ages. Compare two policies: (i) hold the BENEFIT LEVEL B fixed, vs (ii) hold the tax rate t fixed. What must give in each case?', id: 'Dalam sistem PAYG rasio ketergantungan naik saat populasi menua. Bandingkan dua kebijakan: (i) tahan TINGKAT MANFAAT B tetap, vs (ii) tahan tarif pajak t tetap. Apa yang harus mengalah di tiap kasus?' },
        answer: [
          { en: 'From t = (N_b/N_w)(B/w): if you hold B (and w) fixed while N_b/N_w rises, the <b>tax rate t must rise</b> nearly in proportion — workers bear the demographic cost.', id: 'Dari t = (N_b/N_w)(B/w): jika B (dan w) ditahan tetap sementara N_b/N_w naik, <b>tarif pajak t harus naik</b> nyaris proporsional — pekerja menanggung biaya demografi.' },
          { en: 'If instead you hold t fixed, then B = t(N_w/N_b)w: as N_w/N_b falls, the <b>benefit B (and the replacement ratio B/w) must fall</b> — retirees bear the cost.', id: 'Jika sebaliknya t ditahan tetap, maka B = t(N_w/N_b)w: saat N_w/N_b turun, <b>manfaat B (dan replacement ratio B/w) harus turun</b> — pensiunan menanggung biaya.' },
          { en: 'A PAYG system cannot escape the arithmetic: an ageing population forces either higher taxes, lower benefits, a higher retirement age, or some mix.', id: 'Sistem PAYG tak dapat lepas dari aritmetikanya: populasi menua memaksa pajak lebih tinggi, manfaat lebih rendah, usia pensiun lebih tinggi, atau campuran.' }
        ], tip: { en: 'One identity, two levers: fix B → t rises; fix t → B falls.', id: 'Satu identitas, dua tuas: tahan B → t naik; tahan t → B turun.' } },
      { type: 'concept', q: { en: 'Why does raising (or removing) the $110,100 taxable-earnings ceiling raise revenue but also raise future benefit obligations?', id: 'Mengapa menaikkan (atau menghapus) plafon penghasilan kena pajak $110,100 menaikkan penerimaan tetapi juga menaikkan kewajiban manfaat masa depan?' },
        answer: [
          { en: 'Revenue rises immediately because high earners now pay the 12.4% OASDI tax on earnings above the old ceiling.', id: 'Penerimaan naik segera karena pekerja berpenghasilan tinggi kini membayar pajak OASDI 12.4% atas penghasilan di atas plafon lama.' },
          { en: 'But AIME excludes earnings above the ceiling; once those earnings are taxed, they also <b>count toward AIME</b>, so the same high earners earn <b>higher PIA benefits</b> later — the fix is not pure revenue.', id: 'Namun AIME mengecualikan penghasilan di atas plafon; begitu penghasilan itu dipajaki, ia juga <b>dihitung ke AIME</b>, sehingga pekerja berpenghasilan tinggi yang sama memperoleh <b>manfaat PIA lebih tinggi</b> kelak — perbaikannya bukan penerimaan murni.' },
          { en: 'Net solvency gain ≈ +2.34 pp tax-rate-equivalent — smaller than the gross revenue, because the progressive 15% top band still credits some benefit on the new earnings.', id: 'Perolehan solvabilitas neto ≈ setara +2.34 pp tarif pajak — lebih kecil dari penerimaan kotor, karena pita atas 15% yang progresif tetap mengkreditkan sebagian manfaat atas penghasilan baru.' }
        ], tip: { en: 'Taxing earnings above the cap also makes them benefit-eligible (they enter AIME).', id: 'Memajaki penghasilan di atas plafon juga membuatnya layak-manfaat (masuk AIME).' } },
      { type: 'concept', q: { en: 'Compare a CARVE-OUT vs an ADD-ON personal-account reform: which can raise national saving, and what is the transition problem?', id: 'Bandingkan reformasi akun pribadi CARVE-OUT vs ADD-ON: mana yang dapat menaikkan tabungan nasional, dan apa masalah transisinya?' },
        answer: [
          { en: 'A <b>carve-out</b> diverts existing payroll taxes into private accounts. It does NOT add new saving by itself, and it creates a <b>transition hole</b>: current retirees still must be paid, but the taxes that funded them now go into the accounts → the gap is usually filled by borrowing.', id: 'Sebuah <b>carve-out</b> mengalihkan pajak gaji yang ada ke akun pribadi. Ia TIDAK menambah tabungan baru dengan sendirinya, dan menciptakan <b>lubang transisi</b>: pensiunan saat ini tetap harus dibayar, tetapi pajak yang mendanainya kini masuk ke akun → celahnya biasanya ditutup dengan utang.' },
          { en: 'An <b>add-on</b> is extra contributions on top of the existing tax. There is no diversion and no transition hole, and because it is truly out-of-pocket it <b>can raise national saving</b>.', id: 'Sebuah <b>add-on</b> adalah iuran tambahan di atas pajak yang ada. Tak ada pengalihan dan tak ada lubang transisi, dan karena benar-benar dari kantong sendiri ia <b>dapat menaikkan tabungan nasional</b>.' },
          { en: 'Either way, national saving only rises if the contribution is genuinely new and not debt-financed — debt-financing the transition just offsets the account saving.', id: 'Bagaimanapun, tabungan nasional hanya naik jika iuran benar-benar baru dan tidak dibiayai utang — membiayai transisi dengan utang sekadar mengimbangi tabungan akun.' }
        ], tip: { en: 'Add-on can lift national saving; carve-out mostly reshuffles and opens a transition gap.', id: 'Add-on dapat menaikkan tabungan nasional; carve-out kebanyakan menyusun ulang dan membuka celah transisi.' } },
      { type: 'concept', q: { en: 'Explain why the Social Security Trust Fund only helps future retirees if it raises NATIONAL saving (use the $10B example).', id: 'Jelaskan mengapa Social Security Trust Fund hanya membantu pensiunan masa depan jika ia menaikkan tabungan NASIONAL (pakai contoh $10B).' },
        answer: [
          { en: 'Future benefits must be paid out of future OUTPUT. Output rises only if the capital stock rises, which requires real national saving today.', id: 'Manfaat masa depan harus dibayar dari OUTPUT masa depan. Output naik hanya jika stok modal naik, yang menuntut tabungan nasional riil hari ini.' },
          { en: 'If a $10B surplus is genuinely saved, future productivity and wages rise → real resources exist to pay benefits. If Congress instead spends $10B more elsewhere, the trust-fund bond is just an IOU the government owes itself, financed later by taxes/borrowing → national saving unchanged.', id: 'Jika surplus $10B benar-benar ditabung, produktivitas dan upah masa depan naik → ada sumber daya riil untuk membayar manfaat. Jika Kongres malah membelanjakan $10B lebih di tempat lain, obligasi dana perwalian hanyalah IOU yang pemerintah utang ke dirinya sendiri, didanai kelak oleh pajak/utang → tabungan nasional tak berubah.' },
          { en: 'Nataraj & Shoven (2004) find the surpluses were mostly offset by larger deficits elsewhere — so in practice the fund added little national saving.', id: 'Nataraj & Shoven (2004) menemukan surplus sebagian besar diimbangi defisit lebih besar di tempat lain — jadi dalam praktik dana itu menambah sedikit tabungan nasional.' }
        ], tip: { en: 'A bond the government owes itself is not new wealth; only real saving creates future output.', id: 'Obligasi yang pemerintah utang ke dirinya sendiri bukan kekayaan baru; hanya tabungan riil yang menciptakan output masa depan.' } }
    ]
  };
})();
