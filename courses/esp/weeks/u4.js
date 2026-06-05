/* ESP Unit 4 — The health-care market & insurance. Source: Gruber Ch.9 + endterm notes. */
(function () {
  'use strict';
  (window.ESP_WEEKS = window.ESP_WEEKS || {}).u4 = {
    id: 'u4',
    label: { en: 'Unit 4', id: 'Unit 4' },
    title: { en: 'The Health-Care Market & Insurance', id: 'Pasar Kesehatan & Asuransi' },
    subtitle: { en: 'Risk smoothing · adverse selection · moral hazard & DWL · why government intervenes', id: 'Pemulusan risiko · adverse selection · moral hazard & DWL · alasan intervensi negara' },

    notes: [
      {
        heading: { en: 'What is special about health care', id: 'Apa yang khusus dari layanan kesehatan' }, num: '1',
        cards: [
          { title: { en: 'Why health care dominates policy debate', id: 'Mengapa kesehatan mendominasi debat kebijakan' },
            html: { en: '<p>Health care gets disproportionate policy attention for three reasons:</p>' +
              '<ol><li>Many people view it as <b>different in kind</b> from ordinary goods — a basic need, not a discretionary purchase.</li>' +
              '<li>Unaided markets may <b>not deliver the right quantity</b> (the failures in §4–§6: adverse selection, moral hazard, externalities, asymmetric information).</li>' +
              '<li>Spending has grown into a <b>large and rising share of output</b>.</li></ol>' +
              '<p><b>Figure 9.1</b> tracks US expenditure as a share of GDP, 1960–2010, for four categories. Health rises steeply while the others stay flat or fall:</p>' +
              '<table><thead><tr><th>Category</th><th>1960 (% GDP)</th><th>2010 (% GDP)</th><th>Trend</th></tr></thead><tbody>' +
              '<tr><td><b>Health care</b></td><td>≈ 5%</td><td>≈ 18%</td><td>steeply rising</td></tr>' +
              '<tr><td>Food</td><td>high</td><td>lower</td><td>falling</td></tr>' +
              '<tr><td>Clothing & shoes</td><td>—</td><td>—</td><td>flat / falling</td></tr>' +
              '<tr><td>Housing</td><td>—</td><td>—</td><td>roughly flat</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 US health spending rose from ≈5% of GDP (1960) to ≈18% (2010) [Fogel 2004]. No other consumption category shows anything like this climb — which is exactly why "why do costs keep rising?" is the central question (§8).</div>',
              id: '<p>Layanan kesehatan mendapat perhatian kebijakan yang tidak proporsional karena tiga alasan:</p>' +
              '<ol><li>Banyak orang memandangnya <b>berbeda jenis</b> dari barang biasa — kebutuhan dasar, bukan pembelian diskresioner.</li>' +
              '<li>Pasar tanpa bantuan mungkin <b>tidak menghasilkan kuantitas yang tepat</b> (kegagalan di §4–§6: adverse selection, moral hazard, eksternalitas, informasi asimetris).</li>' +
              '<li>Belanja telah tumbuh menjadi <b>pangsa output yang besar dan terus naik</b>.</li></ol>' +
              '<p><b>Figure 9.1</b> melacak belanja AS sebagai pangsa PDB, 1960–2010, untuk empat kategori. Kesehatan naik tajam sementara yang lain datar atau turun:</p>' +
              '<table><thead><tr><th>Kategori</th><th>1960 (% PDB)</th><th>2010 (% PDB)</th><th>Tren</th></tr></thead><tbody>' +
              '<tr><td><b>Layanan kesehatan</b></td><td>≈ 5%</td><td>≈ 18%</td><td>naik tajam</td></tr>' +
              '<tr><td>Makanan</td><td>tinggi</td><td>lebih rendah</td><td>turun</td></tr>' +
              '<tr><td>Pakaian & sepatu</td><td>—</td><td>—</td><td>datar / turun</td></tr>' +
              '<tr><td>Perumahan</td><td>—</td><td>—</td><td>relatif datar</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Belanja kesehatan AS naik dari ≈5% PDB (1960) ke ≈18% PDB (2010) [Fogel 2004]. Tak ada kategori konsumsi lain yang menunjukkan kenaikan seperti ini — persis mengapa "mengapa biaya terus naik?" menjadi pertanyaan sentral (§8).</div>' } }
        ]
      },
      {
        heading: { en: 'The role of insurance', id: 'Peran asuransi' }, num: '2',
        cards: [
          { title: { en: 'Expected value vs risk smoothing', id: 'Nilai harapan vs pemulusan risiko' },
            html: { en: '<p>An insurance premium buys compensation if a bad event happens. <span class="key">Social insurance</span> = government programs that insure people against adverse events; an <span class="key">insurance premium</span> = money paid in exchange for compensation if that event occurs. People buy insurance for two reasons:</p>' +
              '<ol><li><b>Expected value</b> of the payout: $EV = \\sum_i p_i \\times \\text{payout}_i$.</li>' +
              '<li><b>Risk smoothing</b>: paying money to <b>guarantee</b> a certain level of consumption if the adverse event occurs.</li></ol>' +
              '<p>Two options with the <i>same</i> expected income are not equally good: a risk-averse person prefers the <b>certain</b> one. That preference is driven by <span class="key">diminishing marginal utility</span> of income — utility is concave.</p>',
              id: '<p>Premi asuransi membeli kompensasi jika peristiwa buruk terjadi. <span class="key">Asuransi sosial</span> = program pemerintah yang mengasuransikan orang terhadap peristiwa buruk; <span class="key">premi asuransi</span> = uang yang dibayar sebagai ganti kompensasi jika peristiwa itu terjadi. Orang membeli asuransi karena dua alasan:</p>' +
              '<ol><li><b>Nilai harapan</b> dari pembayaran: $EV = \\sum_i p_i \\times \\text{payout}_i$.</li>' +
              '<li><b>Pemulusan risiko</b>: membayar uang untuk <b>menjamin</b> tingkat konsumsi tertentu jika peristiwa merugikan terjadi.</li></ol>' +
              '<p>Dua opsi dengan pendapatan harapan yang <i>sama</i> tidak sama baiknya: orang yang risk-averse memilih yang <b>pasti</b>. Preferensi itu didorong oleh <span class="key">utilitas marginal yang menurun</span> dari pendapatan — utilitas bersifat cekung.</p>' } },
          { title: { en: 'Worked example: Emily (EV & fair premium)', id: 'Contoh: Emily (EV & premi adil)' },
            html: { en: '<p>Emily earns <b>$50,000</b> if healthy (prob 9/10) and <b>$20,000</b> if sick (prob 1/10 — a $30,000 loss). Her expected income is:</p>' +
              '<div class="formula">$$ EV = 0.9 \\times 50{,}000 + 0.1 \\times 20{,}000 = \\$47{,}000 $$</div>' +
              '<table><thead><tr><th>State</th><th>Prob</th><th>Income</th></tr></thead><tbody>' +
              '<tr><td>Healthy</td><td>9/10</td><td>$50,000</td></tr>' +
              '<tr><td>Sick</td><td>1/10</td><td>$20,000</td></tr>' +
              '<tr><td><b>Expected value</b></td><td>—</td><td><b>$47,000</b></td></tr>' +
              '</tbody></table>' +
              '<p>The <span class="key">actuarially fair premium</span> = expected payout = $0.1 \\times \\$30{,}000 = \\mathbf{\\$3{,}000}$. With full insurance at that price, income is a <b>certain</b> $47,000 in <i>both</i> states, and EV is still $47,000.</p>' +
              '<div class="note">💡 A pure EV-maximiser is therefore <b>indifferent</b> between insuring and not. The whole motive to insure comes from <b>risk smoothing</b> + the <b>diminishing marginal utility of income</b> (concave utility) — the topic of the next card and Figure 9.2.</div>',
              id: '<p>Emily memperoleh <b>$50.000</b> jika sehat (prob 9/10) dan <b>$20.000</b> jika sakit (prob 1/10 — kerugian $30.000). Pendapatan harapannya:</p>' +
              '<div class="formula">$$ EV = 0.9 \\times 50{,}000 + 0.1 \\times 20{,}000 = \\$47{,}000 $$</div>' +
              '<table><thead><tr><th>Keadaan</th><th>Prob</th><th>Pendapatan</th></tr></thead><tbody>' +
              '<tr><td>Sehat</td><td>9/10</td><td>$50.000</td></tr>' +
              '<tr><td>Sakit</td><td>1/10</td><td>$20.000</td></tr>' +
              '<tr><td><b>Nilai harapan</b></td><td>—</td><td><b>$47.000</b></td></tr>' +
              '</tbody></table>' +
              '<p><span class="key">Premi adil-aktuaria</span> = pembayaran yang diharapkan = $0.1 \\times \\$30{,}000 = \\mathbf{\\$3{,}000}$. Dengan asuransi penuh pada harga itu, pendapatan menjadi <b>pasti</b> $47.000 di <i>kedua</i> keadaan, dan EV tetap $47.000.</p>' +
              '<div class="note">💡 Maka pemaksimal EV murni <b>indiferen</b> antara berasuransi atau tidak. Seluruh motif berasuransi datang dari <b>pemulusan risiko</b> + <b>utilitas marginal pendapatan yang menurun</b> (utilitas cekung) — topik kartu berikutnya dan Figure 9.2.</div>' } },
          { title: { en: 'Expected utility: why people insure (Fig 9.2)', id: 'Utilitas harapan: mengapa orang berasuransi (Fig 9.2)' },
            html: { en: '<p><span class="key">Expected utility</span> $EU = \\sum_i p_i \\times U(\\text{income}_i)$. <b>Figure 9.2</b> plots Utility (y) against Income (x) as a single <b>concave</b> curve $U$, with income marks at $20,000 (sick, point <b>A</b>), $50,000 (healthy, point <b>B</b>) and $47,000:</p>' +
              '<ul><li>Point <b>C</b> sits on the straight <b>chord</b> joining A and B, above income $47,000 = the <b>expected utility of the gamble</b>.</li>' +
              '<li>Point <b>D</b> sits on the <b>curve</b> itself, above $47,000 = the <b>utility of a certain $47,000</b>.</li></ul>' +
              '<p>Because $U$ is concave, the curve lies above its chord, so:</p>' +
              '<div class="formula">$$ U(D) > U(C) \\quad\\Longleftrightarrow\\quad U(\\$47{,}000\\text{ certain}) > E[U(\\text{gamble})] $$</div>' +
              '<p>The certain income gives <b>higher</b> utility than the equal-EV gamble, so a risk-averse person buys full insurance. (Interactive version: Graphs tab, chart <i>risk-utility</i>.)</p>',
              id: '<p><span class="key">Utilitas harapan</span> $EU = \\sum_i p_i \\times U(\\text{income}_i)$. <b>Figure 9.2</b> memplot Utilitas (y) terhadap Pendapatan (x) sebagai satu kurva <b>cekung</b> $U$, dengan tanda pendapatan di $20.000 (sakit, titik <b>A</b>), $50.000 (sehat, titik <b>B</b>) dan $47.000:</p>' +
              '<ul><li>Titik <b>C</b> berada pada <b>tali busur</b> lurus yang menghubungkan A dan B, di atas pendapatan $47.000 = <b>utilitas harapan dari judi</b>.</li>' +
              '<li>Titik <b>D</b> berada pada <b>kurva</b> itu sendiri, di atas $47.000 = <b>utilitas dari $47.000 yang pasti</b>.</li></ul>' +
              '<p>Karena $U$ cekung, kurva berada di atas tali busurnya, sehingga:</p>' +
              '<div class="formula">$$ U(D) > U(C) \\quad\\Longleftrightarrow\\quad U(\\$47{,}000\\text{ pasti}) > E[U(\\text{judi})] $$</div>' +
              '<p>Pendapatan pasti memberi utilitas <b>lebih tinggi</b> daripada judi ber-EV sama, sehingga orang risk-averse membeli asuransi penuh. (Versi interaktif: tab Grafik, chart <i>risk-utility</i>.)</p>' } }
        ]
      },
      {
        heading: { en: 'Loading fees & risk pooling', id: 'Biaya loading & risk pooling' }, num: '3',
        cards: [
          { title: { en: 'Risk aversion, risk premium & loading (Fig 9.3)', id: 'Risk aversion, premi risiko & loading (Fig 9.3)' },
            html: { en: '<ul><li><span class="key">Risk aversion</span> = preferring a certain outcome to a risky one of equal EV. More curvature in $U$ ⇒ more risk averse ⇒ willing to pay a bigger <span class="key">risk premium</span> (the amount above the fair premium one will pay for certainty).</li>' +
              '<li><span class="key">Loading fee</span> = premium charged − actuarially fair premium (covers admin + profit). The <span class="key">loading ratio</span> ≈ <b>1.20</b> for private insurers [Phelps 2010].</li></ul>' +
              '<p><b>Figure 9.3</b> shows two panels. The <b>more</b> risk-averse person accepts a lower certainty-equivalent income — and so will pay more to insure:</p>' +
              '<table><thead><tr><th>Person</th><th>Max premium paid</th><th>Certain income kept</th></tr></thead><tbody>' +
              '<tr><td>Less risk averse</td><td>≈ $3,500</td><td>$46,500</td></tr>' +
              '<tr><td>More risk averse</td><td>≈ $4,000</td><td>$46,000</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Because utility is concave, $U(E[W]) > E[U(W)]$ — the certainty equivalent is below expected income, and the gap is the risk premium. Drag curvature on the Graphs tab to see it grow.</div>',
              id: '<ul><li><span class="key">Risk aversion</span> = lebih menyukai hasil pasti daripada hasil berisiko ber-EV sama. Lebih banyak kelengkungan pada $U$ ⇒ makin risk averse ⇒ bersedia membayar <span class="key">premi risiko</span> yang lebih besar (jumlah di atas premi adil yang akan dibayar demi kepastian).</li>' +
              '<li><span class="key">Biaya loading</span> = premi yang dikenakan − premi adil-aktuaria (menutup admin + laba). <span class="key">Rasio loading</span> ≈ <b>1,20</b> untuk asuransi swasta [Phelps 2010].</li></ul>' +
              '<p><b>Figure 9.3</b> menampilkan dua panel. Orang yang <b>lebih</b> risk-averse menerima ekuivalen kepastian yang lebih rendah — sehingga mau membayar lebih untuk berasuransi:</p>' +
              '<table><thead><tr><th>Orang</th><th>Premi maks dibayar</th><th>Pendapatan pasti tersisa</th></tr></thead><tbody>' +
              '<tr><td>Kurang risk averse</td><td>≈ $3.500</td><td>$46.500</td></tr>' +
              '<tr><td>Lebih risk averse</td><td>≈ $4.000</td><td>$46.000</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Karena utilitas cekung, $U(E[W]) > E[U(W)]$ — ekuivalen kepastian di bawah pendapatan harapan, dan selisihnya adalah premi risiko. Geser kelengkungan di tab Grafik untuk melihatnya membesar.</div>' } },
          { title: { en: 'Risk pooling & the law of large numbers', id: 'Risk pooling & hukum bilangan besar' },
            html: { en: '<p><span class="key">Risk pooling</span>: combining many independent risks lets the <span class="key">law of large numbers</span> make average payouts predictable.</p>' +
              '<table><thead><tr><th>Pool size</th><th>Realised sick fraction</th><th>Does $3,000 each cover it?</th></tr></thead><tbody>' +
              '<tr><td>10 customers</td><td>volatile (could be 0, or 3+)</td><td>unreliable — payouts swing wildly</td></tr>' +
              '<tr><td>≈ 100,000 insured</td><td>converges to 1/10</td><td><b>yes</b> — predictable, premium reliably covers losses</td></tr>' +
              '</tbody></table>' +
              '<p>With only 10 customers (each 1-in-10 chance of a $30,000 loss), payouts are volatile and $3,000 each may not cover them. Scaling toward ~100,000 makes the realised sick fraction converge to 1/10, so the $3,000 premium reliably covers losses.</p>' +
              '<div class="note">💡 Pooling works only if risks are <b>independent</b>. An earthquake is <i>not</i> independent across nearby homes; <b>contagious disease is the health-sector exception</b>. (An endnote notes illness can also change the marginal utility of income [Viscusi 1992].)</div>',
              id: '<p><span class="key">Risk pooling</span>: menggabungkan banyak risiko independen membuat <span class="key">hukum bilangan besar</span> menjadikan pembayaran rata-rata dapat diprediksi.</p>' +
              '<table><thead><tr><th>Ukuran pool</th><th>Fraksi sakit terealisasi</th><th>Apakah $3.000/orang menutupi?</th></tr></thead><tbody>' +
              '<tr><td>10 pelanggan</td><td>fluktuatif (bisa 0, atau 3+)</td><td>tak andal — pembayaran berayun liar</td></tr>' +
              '<tr><td>≈ 100.000 peserta</td><td>konvergen ke 1/10</td><td><b>ya</b> — dapat diprediksi, premi andal menutupi kerugian</td></tr>' +
              '</tbody></table>' +
              '<p>Dengan hanya 10 pelanggan (masing-masing peluang 1-dari-10 untuk kerugian $30.000), pembayaran fluktuatif dan $3.000/orang mungkin tak menutupi. Penskalaan menuju ~100.000 membuat fraksi sakit terealisasi konvergen ke 1/10, sehingga premi $3.000 andal menutupi kerugian.</p>' +
              '<div class="note">💡 Pooling hanya bekerja jika risiko <b>independen</b>. Gempa <i>tidak</i> independen antar rumah berdekatan; <b>penyakit menular adalah pengecualian di sektor kesehatan</b>. (Catatan akhir menyebut penyakit juga dapat mengubah utilitas marginal pendapatan [Viscusi 1992].)</div>' } }
        ]
      },
      {
        heading: { en: 'Adverse selection', id: 'Adverse selection' }, num: '4',
        cards: [
          { title: { en: 'The adverse-selection table (Table 9.2)', id: 'Tabel adverse selection (Table 9.2)' },
            html: { en: '<p><span class="key">Asymmetric information</span>: the buyer knows her own risk better than the insurer. Suppose a pool of 10 = 5 high-risk + 5 low-risk:</p>' +
              '<table><thead><tr><th>Type</th><th>Count</th><th>Prob of $30k loss</th><th>Expected loss</th></tr></thead><tbody>' +
              '<tr><td>High-risk</td><td>5</td><td>1/5</td><td>$6,000</td></tr>' +
              '<tr><td>Low-risk</td><td>5</td><td>1/10</td><td>$3,000</td></tr>' +
              '<tr><td><b>Pool average</b></td><td>10</td><td>—</td><td><b>$4,500</b></td></tr>' +
              '</tbody></table>' +
              '<p>Now watch what happens at two candidate premiums:</p>' +
              '<table><thead><tr><th>Premium</th><th>Who buys</th><th>Collected</th><th>Expected payout</th><th>Insurer result</th></tr></thead><tbody>' +
              '<tr><td><b>$3,000</b> (community)</td><td>only 5 high-risk</td><td>$15,000</td><td>$30,000</td><td><b>−$15,000 loss</b></td></tr>' +
              '<tr><td><b>$4,500</b> (pooled)</td><td>low-risk net −$1,500 → exit</td><td>—</td><td>—</td><td>underfunded, high-risk only</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 At $3,000 the low-risk would gladly buy but the price is below their fair value, so the insurer expects to pay 5×$6,000 = $30,000 against $15,000 collected. At $4,500 the low-risk get a bad deal (−$1,500) and leave — leaving only high-risk and an underfunded pool.</div>',
              id: '<p><span class="key">Informasi asimetris</span>: pembeli tahu risikonya sendiri lebih baik daripada perusahaan asuransi. Misalkan pool 10 = 5 risiko-tinggi + 5 risiko-rendah:</p>' +
              '<table><thead><tr><th>Tipe</th><th>Jumlah</th><th>Prob rugi $30rb</th><th>Kerugian harapan</th></tr></thead><tbody>' +
              '<tr><td>Risiko tinggi</td><td>5</td><td>1/5</td><td>$6.000</td></tr>' +
              '<tr><td>Risiko rendah</td><td>5</td><td>1/10</td><td>$3.000</td></tr>' +
              '<tr><td><b>Rata-rata pool</b></td><td>10</td><td>—</td><td><b>$4.500</b></td></tr>' +
              '</tbody></table>' +
              '<p>Sekarang perhatikan apa yang terjadi pada dua kandidat premi:</p>' +
              '<table><thead><tr><th>Premi</th><th>Siapa membeli</th><th>Terkumpul</th><th>Pembayaran harapan</th><th>Hasil asuransi</th></tr></thead><tbody>' +
              '<tr><td><b>$3.000</b> (community)</td><td>hanya 5 risiko-tinggi</td><td>$15.000</td><td>$30.000</td><td><b>rugi −$15.000</b></td></tr>' +
              '<tr><td><b>$4.500</b> (pooled)</td><td>risiko-rendah net −$1.500 → keluar</td><td>—</td><td>—</td><td>kekurangan dana, hanya risiko-tinggi</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Pada $3.000 risiko-rendah senang membeli tapi harga di bawah nilai adil mereka, sehingga asuransi mengharapkan membayar 5×$6.000 = $30.000 terhadap $15.000 terkumpul. Pada $4.500 risiko-rendah dapat kesepakatan buruk (−$1.500) dan keluar — menyisakan hanya risiko-tinggi dan pool kekurangan dana.</div>' } },
          { title: { en: 'Death spiral, advantageous selection & fixes', id: 'Death spiral, advantageous selection & solusi' },
            html: { en: '<p>The <b>death spiral</b>: the uninformed side attracts the "wrong" (high-risk) people; low-risk exit → premiums rise → more exit → the market can <b>unravel</b>.</p>' +
              '<p>But adverse selection isn\'t always severe. Risk-averse people are sometimes <i>also</i> more careful → <span class="key">advantageous selection</span> (the opposite force):</p>' +
              '<ul><li>A Swiss low-premium telemedicine plan attracted <b>healthier</b> (lower-cost) members — advantageous selection [Grandchamp & Gardiol 2011].</li>' +
              '<li>Little adverse selection found in French auto/life/health insurance [Chiappori & Salanié 2000; Cawley & Philipson 1999; Cardon & Hendel 2002]. Survey: [Einav & Finkelstein 2011].</li></ul>' +
              '<p><b>Private fixes</b> — pricing rules:</p>' +
              '<table><thead><tr><th>Rule</th><th>How</th><th>Trade-off</th></tr></thead><tbody>' +
              '<tr><td><b>Experience rating</b></td><td>price by each buyer\'s known risk</td><td><b>Efficient</b> — avoids the subsidy that drives adverse selection</td></tr>' +
              '<tr><td><b>Community rating</b></td><td>one premium for all</td><td><b>Equitable</b> — but invites adverse selection</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Competition undermines mandated community rating: a rival can skim off low-risk buyers with a cheaper experience-rated plan [Pauly & Herring 1999]. This is a core equity-vs-efficiency tension.</div>',
              id: '<p><b>Death spiral</b>: pihak yang tak terinformasi menarik orang yang "salah" (risiko tinggi); risiko-rendah keluar → premi naik → makin banyak keluar → pasar bisa <b>terurai (unravel)</b>.</p>' +
              '<p>Namun adverse selection tak selalu parah. Orang risk-averse kadang <i>juga</i> lebih berhati-hati → <span class="key">advantageous selection</span> (gaya kebalikan):</p>' +
              '<ul><li>Paket telemedicine premi-rendah di Swiss menarik anggota yang <b>lebih sehat</b> (biaya lebih rendah) — advantageous selection [Grandchamp & Gardiol 2011].</li>' +
              '<li>Sedikit adverse selection ditemukan pada asuransi mobil/jiwa/kesehatan Prancis [Chiappori & Salanié 2000; Cawley & Philipson 1999; Cardon & Hendel 2002]. Survei: [Einav & Finkelstein 2011].</li></ul>' +
              '<p><b>Solusi swasta</b> — aturan penetapan harga:</p>' +
              '<table><thead><tr><th>Aturan</th><th>Cara</th><th>Trade-off</th></tr></thead><tbody>' +
              '<tr><td><b>Experience rating</b></td><td>harga menurut risiko diketahui tiap pembeli</td><td><b>Efisien</b> — menghindari subsidi yang memicu adverse selection</td></tr>' +
              '<tr><td><b>Community rating</b></td><td>satu premi untuk semua</td><td><b>Adil</b> — tapi mengundang adverse selection</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Persaingan menggerus community rating yang diwajibkan: pesaing dapat menyaring pembeli risiko-rendah dengan paket experience-rated yang lebih murah [Pauly & Herring 1999]. Ini ketegangan inti ekuitas-vs-efisiensi.</div>' } }
        ]
      },
      {
        heading: { en: 'Moral hazard & deadweight loss', id: 'Moral hazard & deadweight loss' }, num: '5',
        cards: [
          { title: { en: 'Moral hazard & the cost-sharing tools', id: 'Moral hazard & alat cost-sharing' },
            html: { en: '<p><span class="key">Moral hazard</span>: insurance lowers the price the patient faces → they consume <b>more</b> care (and take less care of their health). Every third-party payment system creates it.</p>' +
              '<p>Tools to curb it:</p>' +
              '<table><thead><tr><th>Tool</th><th>What the patient pays</th></tr></thead><tbody>' +
              '<tr><td><span class="key">Deductible</span></td><td>the first $X of cost, in full</td></tr>' +
              '<tr><td><span class="key">Copayment</span></td><td>a fixed $ amount per service</td></tr>' +
              '<tr><td><span class="key">Coinsurance</span></td><td>a fixed % of the cost (e.g. 20%)</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 The extra care induced by low prices is worth <i>less</i> than its cost — that triangle is the deadweight loss of insurance (next card + Graphs tab).</div>',
              id: '<p><span class="key">Moral hazard</span>: asuransi menurunkan harga yang dihadapi pasien → ia mengonsumsi layanan <b>lebih banyak</b> (dan kurang menjaga kesehatannya). Setiap sistem pembayaran pihak ketiga menciptakannya.</p>' +
              '<p>Alat untuk menekannya:</p>' +
              '<table><thead><tr><th>Alat</th><th>Yang dibayar pasien</th></tr></thead><tbody>' +
              '<tr><td><span class="key">Deductible</span></td><td>biaya $X pertama, penuh</td></tr>' +
              '<tr><td><span class="key">Copayment</span></td><td>jumlah $ tetap per layanan</td></tr>' +
              '<tr><td><span class="key">Coinsurance</span></td><td>% tetap dari biaya (mis. 20%)</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Layanan ekstra yang dipicu harga rendah bernilai <i>kurang</i> dari biayanya — segitiga itu adalah deadweight loss asuransi (kartu berikutnya + tab Grafik).</div>' } },
          { title: { en: 'The deadweight-loss triangle (a-b-h)', id: 'Segitiga deadweight loss (a-b-h)' },
            html: { en: '<p>Put "Medical services per year" on the x-axis and "Price per unit" on the y-axis. Demand <b>Dm</b> slopes down; the horizontal supply / marginal cost <b>Sm</b> sits at price <b>P₀</b>.</p>' +
              '<ul><li><b>No insurance</b>: equilibrium at point <b>a</b> = (M₀, P₀) — price equals marginal cost.</li>' +
              '<li><b>20% coinsurance</b>: the patient price falls to 0.2·P₀, so quantity rises to <b>M₁</b> — point <b>b</b> on Dm at 0.2·P₀. Point <b>h</b> = (M₀, 0.2·P₀).</li></ul>' +
              '<p>The extra units M₀→M₁ each cost P₀ to produce but are valued (read off Dm) at <i>less</i> than P₀. The wasted value is the <b>deadweight loss = triangle a-b-h</b>.</p>' +
              '<div class="formula">$$ DWL = \\tfrac12\\,(P_0 - c\\,P_0)\\,(M_1 - M_0) $$</div>' +
              '<div class="note">💡 The DWL size depends on the <span class="key">elasticity of demand for care</span>: inelastic (steep Dm) → small triangle; elastic (flat Dm) → large. <span class="key">Flat-of-the-curve medicine</span> = the region where extra care yields ≈0 marginal health benefit — exactly where full insurance pushes patients. (Interactive: Graphs tab, chart <i>moral-hazard</i>.)</div>',
              id: '<p>Letakkan "Layanan medis per tahun" pada sumbu-x dan "Harga per unit" pada sumbu-y. Permintaan <b>Dm</b> melandai turun; penawaran / biaya marginal horizontal <b>Sm</b> berada pada harga <b>P₀</b>.</p>' +
              '<ul><li><b>Tanpa asuransi</b>: ekuilibrium di titik <b>a</b> = (M₀, P₀) — harga sama dengan biaya marginal.</li>' +
              '<li><b>Coinsurance 20%</b>: harga pasien turun ke 0,2·P₀, sehingga kuantitas naik ke <b>M₁</b> — titik <b>b</b> pada Dm di 0,2·P₀. Titik <b>h</b> = (M₀, 0,2·P₀).</li></ul>' +
              '<p>Unit ekstra M₀→M₁ masing-masing berbiaya P₀ untuk diproduksi tapi dinilai (dibaca pada Dm) <i>kurang</i> dari P₀. Nilai yang terbuang adalah <b>deadweight loss = segitiga a-b-h</b>.</p>' +
              '<div class="formula">$$ DWL = \\tfrac12\\,(P_0 - c\\,P_0)\\,(M_1 - M_0) $$</div>' +
              '<div class="note">💡 Besar DWL bergantung pada <span class="key">elastisitas permintaan layanan</span>: inelastis (Dm curam) → segitiga kecil; elastis (Dm datar) → besar. <span class="key">Flat-of-the-curve medicine</span> = wilayah di mana layanan ekstra menghasilkan manfaat kesehatan marginal ≈0 — persis ke sana asuransi penuh mendorong pasien. (Interaktif: tab Grafik, chart <i>moral-hazard</i>.)</div>' } },
          { title: { en: 'Elasticity evidence: the RAND experiment', id: 'Bukti elastisitas: eksperimen RAND' },
            html: { en: '<p>The <span class="key">RAND Health Insurance Experiment</span> [Newhouse et al. 1993] randomised families to coinsurance rates of <b>0 / 25 / 50 / 95%</b> (out-of-pocket capped ≈$1,000). Findings:</p>' +
              '<ul><li>Estimated price elasticity of medical demand ≈ <b>−0.2</b>: a 10% price rise → ≈2% less spending → demand is <b>inelastic</b>.</li>' +
              '<li>More cost-sharing cut utilisation with <b>little average health effect</b> — direct support for flat-of-the-curve medicine.</li>' +
              '<li>Gaining coverage at age 19 raised hospital admissions ≈<b>40%</b> [Anderson, Dobkin & Gross 2010].</li></ul>' +
              '<p><b>Table 9.3</b> — US out-of-pocket payments as a % of total health spending — shows the rise of third-party payment:</p>' +
              '<table><thead><tr><th>Year</th><th>Out-of-pocket (% of total)</th></tr></thead><tbody>' +
              '<tr><td>1960</td><td>≈ 47.6%</td></tr>' +
              '<tr><td>1970</td><td>≈ 33.4%</td></tr>' +
              '<tr><td>1980</td><td>≈ 22.6%</td></tr>' +
              '<tr><td>1990</td><td>≈ 19.1%</td></tr>' +
              '<tr><td>2000</td><td>≈ 14.7%</td></tr>' +
              '<tr><td>2010</td><td>≈ 11.6%</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 As the patient\'s out-of-pocket share collapsed from ≈48% to ≈12%, third parties paid more and more — feeding moral hazard and the cost growth in §8.</div>',
              id: '<p><span class="key">RAND Health Insurance Experiment</span> [Newhouse et al. 1993] mengacak keluarga ke tingkat coinsurance <b>0 / 25 / 50 / 95%</b> (out-of-pocket dibatasi ≈$1.000). Temuan:</p>' +
              '<ul><li>Estimasi elastisitas harga permintaan medis ≈ <b>−0,2</b>: kenaikan harga 10% → ≈2% belanja lebih sedikit → permintaan <b>inelastis</b>.</li>' +
              '<li>Cost-sharing lebih besar memangkas utilisasi dengan <b>sedikit efek kesehatan rata-rata</b> — dukungan langsung untuk flat-of-the-curve medicine.</li>' +
              '<li>Memperoleh cakupan pada usia 19 menaikkan rawat inap ≈<b>40%</b> [Anderson, Dobkin & Gross 2010].</li></ul>' +
              '<p><b>Table 9.3</b> — pembayaran out-of-pocket AS sebagai % total belanja kesehatan — menunjukkan naiknya pembayaran pihak ketiga:</p>' +
              '<table><thead><tr><th>Tahun</th><th>Out-of-pocket (% total)</th></tr></thead><tbody>' +
              '<tr><td>1960</td><td>≈ 47,6%</td></tr>' +
              '<tr><td>1970</td><td>≈ 33,4%</td></tr>' +
              '<tr><td>1980</td><td>≈ 22,6%</td></tr>' +
              '<tr><td>1990</td><td>≈ 19,1%</td></tr>' +
              '<tr><td>2000</td><td>≈ 14,7%</td></tr>' +
              '<tr><td>2010</td><td>≈ 11,6%</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 Saat pangsa out-of-pocket pasien anjlok dari ≈48% ke ≈12%, pihak ketiga membayar makin banyak — memberi makan moral hazard dan pertumbuhan biaya di §8.</div>' } }
        ]
      },
      {
        heading: { en: 'Other information problems & externalities', id: 'Masalah informasi lain & eksternalitas' }, num: '6',
        cards: [
          { title: { en: 'Quality, agency & externalities', id: 'Kualitas, keagenan & eksternalitas' },
            html: { en: '<p>Patients usually <b>cannot judge the quality</b> of care, so they rely on the physician — who is both advisor and seller. This is the <span class="key">principal–agent</span> problem, and it can produce <span class="key">supplier-induced demand</span> (the seller advises more care than needed).</p>' +
              '<ul><li><b>Occupational licensing</b> protects quality but can also raise prices [Kleiner & Kudrle 2000].</li>' +
              '<li><b>Positive externalities</b>: vaccination and treating contagious disease protect others → a free market <b>under-provides</b> them.</li>' +
              '<li><b>Negative externalities</b>: antibiotic overuse breeds resistance → over-use imposes costs on others.</li></ul>' +
              '<table><thead><tr><th>Problem</th><th>Direction</th><th>Market result</th></tr></thead><tbody>' +
              '<tr><td>Vaccination / contagious-disease care</td><td>positive externality</td><td>under-provided</td></tr>' +
              '<tr><td>Antibiotic overuse</td><td>negative externality</td><td>over-provided</td></tr>' +
              '<tr><td>Supplier-induced demand</td><td>asymmetric info</td><td>over-treatment</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 The externality argument for intervention is real but <b>limited</b>: most care delivers a <i>private</i> benefit to the patient, so it does not by itself justify subsidising all health spending.</div>',
              id: '<p>Pasien umumnya <b>tak dapat menilai kualitas</b> layanan, sehingga bergantung pada dokter — yang sekaligus penasihat dan penjual. Ini masalah <span class="key">principal–agent</span>, dan dapat menghasilkan <span class="key">supplier-induced demand</span> (penjual menyarankan layanan lebih banyak dari yang dibutuhkan).</p>' +
              '<ul><li><b>Lisensi profesi</b> melindungi kualitas tapi juga dapat menaikkan harga [Kleiner & Kudrle 2000].</li>' +
              '<li><b>Eksternalitas positif</b>: vaksinasi dan pengobatan penyakit menular melindungi orang lain → pasar bebas <b>kurang menyediakannya</b>.</li>' +
              '<li><b>Eksternalitas negatif</b>: penggunaan antibiotik berlebih memicu resistansi → over-use membebani orang lain.</li></ul>' +
              '<table><thead><tr><th>Masalah</th><th>Arah</th><th>Hasil pasar</th></tr></thead><tbody>' +
              '<tr><td>Vaksinasi / pengobatan penyakit menular</td><td>eksternalitas positif</td><td>kurang disediakan</td></tr>' +
              '<tr><td>Penggunaan antibiotik berlebih</td><td>eksternalitas negatif</td><td>terlalu banyak disediakan</td></tr>' +
              '<tr><td>Supplier-induced demand</td><td>informasi asimetris</td><td>pengobatan berlebihan</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Argumen eksternalitas untuk intervensi nyata tapi <b>terbatas</b>: kebanyakan layanan memberi manfaat <i>privat</i> bagi pasien, sehingga tidak dengan sendirinya membenarkan subsidi seluruh belanja kesehatan.</div>' } }
        ]
      },
      {
        heading: { en: 'Efficient provision, equity & the uninsured', id: 'Penyediaan efisien, ekuitas & yang tak berasuransi' }, num: '7',
        cards: [
          { title: { en: 'Do we even want “efficient” provision?', id: 'Apakah kita memang mau penyediaan “efisien”?' },
            html: { en: '<p>Efficient provision may <b>not</b> be what society wants. Two ideas push back on the "just be efficient" answer:</p>' +
              '<ul><li><span class="key">Paternalism</span>: people may insure or consume the "wrong" amount of care, so leaving it to private choice can fall short.</li>' +
              '<li><span class="key">Commodity egalitarianism</span>: some goods — like health — should be available to <b>all</b>, regardless of ability to pay.</li></ul>' +
              '<p>Also recall <b>flat-of-the-curve medicine</b> (extra care → ≈0 marginal health benefit) and the fact that the <b>elasticity of demand for care</b> sets the SIZE of moral hazard — large for discretionary care, small for emergencies — so cost-sharing is targeted at elastic services.</p>' +
              '<div class="tip">📝 <b>Risk pooling</b>: with a small pool, one big claim swamps premiums; with a large pool the <span class="key">law of large numbers</span> makes average cost predictable, so premiums fall — a core reason for broad, even universal, coverage.</div>',
              id: '<p>Penyediaan efisien mungkin <b>bukan</b> yang diinginkan masyarakat. Dua gagasan menantang jawaban "cukup jadi efisien":</p>' +
              '<ul><li><span class="key">Paternalisme</span>: orang mungkin berasuransi atau mengonsumsi jumlah layanan yang "salah", sehingga menyerahkan ke pilihan privat bisa kurang memadai.</li>' +
              '<li><span class="key">Commodity egalitarianism</span>: sebagian barang — seperti kesehatan — seharusnya tersedia bagi <b>semua</b>, tanpa memandang kemampuan membayar.</li></ul>' +
              '<p>Ingat juga <b>flat-of-the-curve medicine</b> (layanan ekstra → manfaat kesehatan marginal ≈0) dan fakta bahwa <b>elastisitas permintaan layanan</b> menentukan BESARNYA moral hazard — besar untuk layanan diskresioner, kecil untuk darurat — sehingga cost-sharing diarahkan ke layanan elastis.</p>' +
              '<div class="tip">📝 <b>Risk pooling</b>: dengan pool kecil, satu klaim besar menenggelamkan premi; dengan pool besar, <span class="key">hukum bilangan besar</span> membuat biaya rata-rata dapat diprediksi, sehingga premi turun — alasan inti untuk cakupan yang luas, bahkan universal.</div>' } },
          { title: { en: 'Who are the uninsured? Does insurance help?', id: 'Siapa yang tak berasuransi? Apakah asuransi membantu?' },
            html: { en: '<p>The <b>uninsured</b> are mostly young and low-income, though some are higher-income and some uninsured by choice:</p>' +
              '<ul><li>Many are aged <b>18–34</b> and low-income.</li>' +
              '<li>They pay ≈<b>35%</b> of their care out of pocket; the rest is <b>cost-shifted</b> — ≈<b>$56B</b> in uncompensated care, ≈<b>6%</b> of the population [Hadley et al. 2008].</li></ul>' +
              '<p><b>Does insurance improve health?</b> Hard to isolate causally:</p>' +
              '<ul><li>RAND found <b>little average effect</b> of more generous coverage on health.</li>' +
              '<li>Japan\'s 1961 universal coverage <b>raised utilisation</b> but changed mortality little [Kondo & Shigeoka 2013].</li></ul>' +
              '<div class="note">💡 Bottom line: insurance reliably raises <b>USE</b> of care; health gains are <b>modest and case-specific</b> — a key caution for "more coverage = better health" arguments.</div>',
              id: '<p>Yang <b>tak berasuransi</b> sebagian besar muda dan berpendapatan rendah, meski sebagian berpendapatan lebih tinggi dan sebagian tak berasuransi atas pilihan sendiri:</p>' +
              '<ul><li>Banyak berusia <b>18–34</b> dan berpendapatan rendah.</li>' +
              '<li>Mereka membayar ≈<b>35%</b> layanannya secara out-of-pocket; sisanya <b>digeser-biayakan (cost-shifted)</b> — ≈<b>$56B</b> layanan tak terkompensasi, ≈<b>6%</b> populasi [Hadley et al. 2008].</li></ul>' +
              '<p><b>Apakah asuransi meningkatkan kesehatan?</b> Sulit diisolasi secara kausal:</p>' +
              '<ul><li>RAND menemukan <b>sedikit efek rata-rata</b> dari cakupan yang lebih murah hati terhadap kesehatan.</li>' +
              '<li>Cakupan universal Jepang 1961 <b>menaikkan utilisasi</b> tapi sedikit mengubah mortalitas [Kondo & Shigeoka 2013].</li></ul>' +
              '<div class="note">💡 Intinya: asuransi andal menaikkan <b>PENGGUNAAN</b> layanan; perolehan kesehatan <b>moderat dan kasuistik</b> — peringatan penting untuk argumen "cakupan lebih banyak = kesehatan lebih baik".</div>' } }
        ]
      },
      {
        heading: { en: 'Why health-care costs rise', id: 'Mengapa biaya kesehatan naik' }, num: '8',
        cards: [
          { title: { en: 'The four causes of cost inflation', id: 'Empat penyebab inflasi biaya' },
            html: { en: '<p>Health spending\'s steep climb (Figure 9.1) has four candidate causes. Evidence points to <b>technology</b> as the primary driver:</p>' +
              '<table><thead><tr><th>Cause</th><th>Mechanism</th><th>How much of the growth?</th></tr></thead><tbody>' +
              '<tr><td><b>Third-party payment / moral hazard</b></td><td>low out-of-pocket share (Table 9.3) → more demand</td><td>contributes</td></tr>' +
              '<tr><td><b>Aging ("graying of America")</b></td><td>elderly spend ~3–5× more</td><td>only ~10% of growth</td></tr>' +
              '<tr><td><b>Income growth</b></td><td>care is income-elastic (≈0.7–1.0) [Acemoglu, Finkelstein & Notowidigdo 2009]</td><td>part only</td></tr>' +
              '<tr><td><b>Technology / quality</b></td><td>new, costly, valuable treatments [Arrow; Newhouse]</td><td><b>PRIMARY driver</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 New technology is expensive <i>but valuable</i>: cardiovascular mortality fell, much of it attributable to treatment [Cutler 2004], and the value of 1970–1990 longevity gains ≈ <b>$2.8 trillion/yr</b> [Murphy & Topel 2000]. Rising cost is not automatically "waste."</div>',
              id: '<p>Pendakian tajam belanja kesehatan (Figure 9.1) punya empat kandidat penyebab. Bukti menunjuk <b>teknologi</b> sebagai pendorong utama:</p>' +
              '<table><thead><tr><th>Penyebab</th><th>Mekanisme</th><th>Berapa banyak pertumbuhan?</th></tr></thead><tbody>' +
              '<tr><td><b>Pembayaran pihak ketiga / moral hazard</b></td><td>pangsa out-of-pocket rendah (Table 9.3) → permintaan naik</td><td>berkontribusi</td></tr>' +
              '<tr><td><b>Penuaan ("graying of America")</b></td><td>lansia membelanjakan ~3–5× lebih banyak</td><td>hanya ~10% pertumbuhan</td></tr>' +
              '<tr><td><b>Pertumbuhan pendapatan</b></td><td>layanan elastis-pendapatan (≈0,7–1,0) [Acemoglu, Finkelstein & Notowidigdo 2009]</td><td>hanya sebagian</td></tr>' +
              '<tr><td><b>Teknologi / kualitas</b></td><td>pengobatan baru, mahal, bernilai [Arrow; Newhouse]</td><td><b>PENDORONG UTAMA</b></td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Teknologi baru mahal <i>tapi bernilai</i>: mortalitas kardiovaskular turun, banyak di antaranya disebabkan oleh pengobatan [Cutler 2004], dan nilai perolehan umur panjang 1970–1990 ≈ <b>$2,8 triliun/tahun</b> [Murphy & Topel 2000]. Biaya yang naik bukan otomatis "pemborosan."</div>' } },
          { title: { en: 'Cross-country spending (Figure 9.5)', id: 'Belanja antarnegara (Figure 9.5)' },
            html: { en: '<p><b>Figure 9.5</b> plots health expenditure as a % of GDP by country. The <b>US is highest and rising fastest</b>, well above peer economies:</p>' +
              '<table><thead><tr><th>Country</th><th>Health spending (% GDP)</th></tr></thead><tbody>' +
              '<tr><td><b>United States</b></td><td>highest, rising fastest</td></tr>' +
              '<tr><td>Germany</td><td>high but flatter</td></tr>' +
              '<tr><td>France</td><td>high but flatter</td></tr>' +
              '<tr><td>United Kingdom</td><td>lower</td></tr>' +
              '<tr><td>Japan</td><td>lower</td></tr>' +
              '<tr><td>Australia</td><td>lower</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 The US spends a larger and faster-growing GDP share than the UK, Germany, Japan, France or Australia — yet without proportionally better average health outcomes, which is why the cost-growth debate centres on the US system.</div>',
              id: '<p><b>Figure 9.5</b> memplot belanja kesehatan sebagai % PDB per negara. <b>AS tertinggi dan naik tercepat</b>, jauh di atas negara sebaya:</p>' +
              '<table><thead><tr><th>Negara</th><th>Belanja kesehatan (% PDB)</th></tr></thead><tbody>' +
              '<tr><td><b>Amerika Serikat</b></td><td>tertinggi, naik tercepat</td></tr>' +
              '<tr><td>Jerman</td><td>tinggi tapi lebih datar</td></tr>' +
              '<tr><td>Prancis</td><td>tinggi tapi lebih datar</td></tr>' +
              '<tr><td>Inggris</td><td>lebih rendah</td></tr>' +
              '<tr><td>Jepang</td><td>lebih rendah</td></tr>' +
              '<tr><td>Australia</td><td>lebih rendah</td></tr>' +
              '</tbody></table>' +
              '<div class="tip">📝 AS membelanjakan pangsa PDB yang lebih besar dan tumbuh lebih cepat daripada Inggris, Jerman, Jepang, Prancis, atau Australia — namun tanpa hasil kesehatan rata-rata yang proporsional lebih baik, itulah mengapa debat pertumbuhan biaya berpusat pada sistem AS.</div>' } }
        ]
      },
      {
        heading: { en: 'Intervention models for Indonesia', id: 'Model intervensi untuk Indonesia' }, num: '9',
        cards: [
          { title: { en: 'Three intervention models', id: 'Tiga model intervensi' },
            html: { en: '<table><thead><tr><th>Model</th><th>Mechanism</th><th>Example</th></tr></thead><tbody>' +
              '<tr><td><b>Beveridge</b> (direct provision)</td><td>State owns hospitals, employs staff, funds from progressive tax; free at point of service.</td><td>UK (NHS), Cuba</td></tr>' +
              '<tr><td><b>Bismarck</b> (social insurance)</td><td>Mandatory payroll-deducted social-insurance funds, jointly managed; state subsidises those who can’t pay.</td><td>Germany, <b>Indonesia (BPJS/JKN)</b></td></tr>' +
              '<tr><td><b>Regulated private + subsidies</b></td><td>Private insurers/providers, heavy regulation + targeted public programs.</td><td>US (Medicare/Medicaid)</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Demand-side tool: <b>Conditional Cash Transfers (CCTs)</b> — cash to poor households conditional on school attendance and clinic visits — fight current poverty <i>and</i> break its intergenerational transmission by forcing human-capital investment.</div>',
              id: '<table><thead><tr><th>Model</th><th>Mekanisme</th><th>Contoh</th></tr></thead><tbody>' +
              '<tr><td><b>Beveridge</b> (penyediaan langsung)</td><td>Negara memiliki rumah sakit, mempekerjakan staf, dibiayai dari pajak progresif; gratis di titik layanan.</td><td>UK (NHS), Kuba</td></tr>' +
              '<tr><td><b>Bismarck</b> (asuransi sosial)</td><td>Dana asuransi sosial wajib yang dipotong dari gaji, dikelola bersama; negara mensubsidi yang tak mampu membayar.</td><td>Jerman, <b>Indonesia (BPJS/JKN)</b></td></tr>' +
              '<tr><td><b>Swasta teregulasi + subsidi</b></td><td>Asuransi/penyedia swasta, regulasi ketat + program publik tertarget.</td><td>US (Medicare/Medicaid)</td></tr>' +
              '</tbody></table>' +
              '<div class="note">💡 Alat sisi permintaan: <b>Conditional Cash Transfers (CCT)</b> — uang tunai untuk rumah tangga miskin dengan syarat kehadiran sekolah dan kunjungan klinik — melawan kemiskinan saat ini <i>dan</i> memutus transmisi antargenerasinya dengan memaksa investasi modal manusia.</div>' } }
        ]
      }
    ],

    formulas: [
      { cards: [
        { title: { en: 'Expected value of a gamble', id: 'Nilai harapan' },
          html: { en: '<div class="formula">$$ EV = \\sum_i p_i \\cdot \\text{payout}_i $$</div><p>e.g. $\\tfrac14(\\$12)+\\tfrac34(-\\$4)=\\$0$.</p>',
            id: '<div class="formula">$$ EV = \\sum_i p_i \\cdot \\text{payout}_i $$</div><p>mis. $\\tfrac14(\\$12)+\\tfrac34(-\\$4)=\\$0$.</p>' } },
        { title: { en: 'Risk premium & certainty equivalent', id: 'Premi risiko & ekuivalen kepastian' },
          html: { en: '<div class="formula">$$ E[U] = (1-p)\\,U(W_h) + p\\,U(W_s), \\qquad U(CE) = E[U] $$</div>' +
            '<div class="formula">$$ \\text{Risk premium} = E[W] - CE > 0 \\ \\text{(concave } U) $$</div>',
            id: '<div class="formula">$$ E[U] = (1-p)\\,U(W_h) + p\\,U(W_s), \\qquad U(CE) = E[U] $$</div>' +
            '<div class="formula">$$ \\text{Risk premium} = E[W] - CE > 0 \\ \\text{(concave } U) $$</div>' } },
        { title: { en: 'Actuarially fair premium & loading', id: 'Premi adil & loading' },
          html: { en: '<div class="formula">$$ \\text{Fair premium} = \\text{expected payout}, \\qquad \\text{Loading} = \\text{premium} - \\text{fair premium} $$</div>',
            id: '<div class="formula">$$ \\text{Fair premium} = \\text{expected payout}, \\qquad \\text{Loading} = \\text{premium} - \\text{fair premium} $$</div>' } },
        { title: { en: 'Deadweight loss of insurance', id: 'DWL asuransi' },
          html: { en: '<div class="formula">$$ DWL = \\tfrac12\\,(P_0 - c\\,P_0)\\,(M_1 - M_0) $$</div>' +
            '<p>$c$ = coinsurance (patient’s price share). Lower $c$ → bigger over-consumption $M_1-M_0$ → bigger DWL.</p>',
            id: '<div class="formula">$$ DWL = \\tfrac12\\,(P_0 - c\\,P_0)\\,(M_1 - M_0) $$</div>' +
            '<p>$c$ = koasuransi (bagian harga yang ditanggung pasien). $c$ lebih rendah → over-consumption $M_1-M_0$ lebih besar → DWL lebih besar.</p>' } }
      ] }
    ],

    graphs: [
      { cards: [
        { title: { en: 'Why buy insurance: concave utility', id: 'Mengapa beli asuransi: utilitas cekung' },
          html: { en: '<p>Drag the curvature (risk aversion) and the loss. Because utility is concave, the expected utility of the gamble (on the chord) sits below the utility of the same income for certain — the gap between expected income and the certainty equivalent is the <b>risk premium</b> a person will pay to insure.</p>',
            id: '<p>Geser kelengkungan (risk aversion) dan kerugiannya. Karena utilitas cekung, utilitas harapan dari judi (pada tali busur) berada di bawah utilitas dari pendapatan yang sama secara pasti — selisih antara pendapatan harapan dan ekuivalen kepastian adalah <b>premi risiko</b> yang akan dibayar seseorang untuk berasuransi.</p>' },
          chartId: 'risk-utility' },
        { title: { en: 'Moral hazard & the deadweight loss', id: 'Moral hazard & DWL' },
          html: { en: '<p>Insurance drops the price the patient faces from P₀ to c·P₀, so quantity jumps from M₀ to M₁. The units between M₀ and M₁ are valued (on the demand curve) at less than their P₀ cost — the shaded triangle is the deadweight loss. Set coinsurance to 100% (no insurance) and it vanishes; to 0% (full cover) and it is largest.</p>',
            id: '<p>Asuransi menurunkan harga yang dihadapi pasien dari P₀ ke c·P₀, sehingga kuantitas melonjak dari M₀ ke M₁. Unit antara M₀ dan M₁ dinilai (pada kurva permintaan) lebih rendah daripada biaya P₀-nya — segitiga yang diarsir adalah deadweight loss. Setel koasuransi ke 100% (tanpa asuransi) dan ia lenyap; ke 0% (tanggungan penuh) dan ia terbesar.</p>' },
          chartId: 'moral-hazard' }
      ] }
    ],

    quiz: [
      { type: 'concept', q: { en: 'Two options have the same expected income of $47,000. Why does a risk-averse person strictly prefer the certain one?', id: 'Dua opsi punya pendapatan harapan sama $47.000. Mengapa orang risk-averse memilih yang pasti?' },
        answer: [
          { en: 'Utility is <b>concave</b> (diminishing marginal utility of income), so a dollar lost in the bad state hurts more than a dollar gained in the good state.', id: 'Utilitas <b>cekung</b>, sehingga kehilangan $1 di keadaan buruk lebih menyakitkan daripada untung $1 di keadaan baik.' },
          { en: 'Therefore $U(\\$47k\\ \\text{certain}) > E[U(\\text{gamble})]$ even though both have EV = $47k. The person will even pay a risk premium to lock in the certain outcome.', id: 'Maka $U(\\$47k) > E[U]$ walau EV sama. Ia bahkan mau bayar premi risiko.' }
        ], tip: { en: 'Same EV ≠ same utility once utility is concave.', id: 'EV sama ≠ utilitas sama jika utilitas cekung.' } },
      { type: 'scenario', q: { en: 'Explain the adverse-selection "death spiral" in a voluntary health-insurance market, and one policy that breaks it.', id: 'Jelaskan "death spiral" adverse selection di pasar asuransi sukarela, dan satu kebijakan yang memutusnya.' },
        answer: [
          { en: 'Insurer charges one premium; high-risk buy eagerly, low-risk opt out → pool gets sicker → premium rises → more healthy people leave → spiral up → market thins/collapses.', id: 'Premi tunggal; risiko tinggi membeli, risiko rendah keluar → pool makin sakit → premi naik → makin banyak keluar → spiral.' },
          { en: 'Break it with a <b>mandate</b> (compulsory enrolment, e.g. BPJS/JKN) so low-risk individuals stay in the pool — exactly why social health insurance is mandatory.', id: 'Putuskan dengan <b>mandat</b> (kepesertaan wajib, mis. BPJS/JKN) agar risiko rendah tetap di pool.' }
        ], tip: { en: 'Mandatory pooling is the classic cure for adverse selection.', id: 'Pooling wajib adalah obat klasik adverse selection.' } },
      { type: 'quant', q: { en: 'Marginal cost of care is P₀ = 5. Full insurance drops the patient price to 0. Demand is M = (10 − P)/0.8. Find the over-consumption and the deadweight loss.', id: 'MC = P₀ = 5, asuransi penuh harga pasien 0, permintaan M = (10 − P)/0,8. Hitung over-consumption dan DWL.' },
        answer: [
          { en: 'Without insurance: M₀ = (10 − 5)/0.8 = 6.25. With full cover (price 0): M₁ = (10 − 0)/0.8 = 12.5.', id: 'Tanpa asuransi M₀ = 6,25; dengan tanggungan penuh M₁ = 12,5.' },
          { en: 'Over-consumption = M₁ − M₀ = 6.25.', id: 'Over-consumption = 6,25.' },
          { en: 'DWL = ½ × (P₀ − 0) × (M₁ − M₀) = ½ × 5 × 6.25 = <b>15.6</b>.', id: 'DWL = ½ × 5 × 6,25 = <b>15,6</b>.' }
        ], tip: { en: 'Confirm it on the Graphs tab by setting coinsurance to 0%.', id: 'Cek di tab Grafik dengan koasuransi 0%.' } },
      { type: 'quant', q: { en: 'Emily earns $50,000 if healthy (prob 9/10) and $20,000 if sick (prob 1/10). Compute her expected income and the actuarially fair premium, then explain why a risk-averse Emily still insures even though full insurance leaves the same EV.', id: 'Emily memperoleh $50.000 jika sehat (prob 9/10) dan $20.000 jika sakit (prob 1/10). Hitung pendapatan harapan dan premi adil-aktuaria, lalu jelaskan mengapa Emily yang risk-averse tetap berasuransi padahal asuransi penuh menyisakan EV sama.' },
        answer: [
          { en: '$EV = 0.9\\times50{,}000 + 0.1\\times20{,}000 = \\$47{,}000$. Actuarially fair premium = expected payout = $0.1\\times\\$30{,}000 = \\$3{,}000$.', id: '$EV = 0.9\\times50{,}000 + 0.1\\times20{,}000 = \\$47{,}000$. Premi adil = pembayaran harapan = $0.1\\times\\$30{,}000 = \\$3{,}000$.' },
          { en: 'With full insurance income is a <b>certain</b> $47,000 in both states — same EV, but no risk.', id: 'Dengan asuransi penuh pendapatan menjadi <b>pasti</b> $47.000 di kedua keadaan — EV sama, tapi tanpa risiko.' },
          { en: 'Because utility is <b>concave</b>, $U(\\$47k\\ \\text{certain}) > E[U(\\text{gamble})]$. The certain outcome gives higher utility, so a risk-averse Emily insures (and would even pay a risk premium above $3,000).', id: 'Karena utilitas <b>cekung</b>, $U(\\$47k) > E[U]$. Hasil pasti memberi utilitas lebih tinggi, sehingga Emily yang risk-averse berasuransi (bahkan mau bayar premi risiko di atas $3.000).' }
        ], tip: { en: 'EV-maximiser is indifferent; risk-aversion + concavity is what makes her insure.', id: 'Pemaksimal EV indiferen; risk-aversion + kecekungan yang membuatnya berasuransi.' } },
      { type: 'scenario', q: { en: 'A pool has 5 high-risk (expected loss $6,000) and 5 low-risk (expected loss $3,000). At a flat $3,000 community premium, only the high-risk buy. Show the insurer loses $15,000 and name the phenomenon.', id: 'Pool berisi 5 risiko-tinggi (kerugian harapan $6.000) dan 5 risiko-rendah (kerugian harapan $3.000). Pada premi community $3.000 datar, hanya risiko-tinggi yang membeli. Tunjukkan asuransi rugi $15.000 dan sebut fenomenanya.' },
        answer: [
          { en: 'At $3,000 the low-risk pay exactly their fair value, while the high-risk get a bargain → only the 5 high-risk buy.', id: 'Pada $3.000 risiko-rendah membayar persis nilai adilnya, sedangkan risiko-tinggi dapat murah → hanya 5 risiko-tinggi membeli.' },
          { en: 'Collected = 5×$3,000 = $15,000; expected payout = 5×$6,000 = $30,000 → result = $15,000 − $30,000 = <b>−$15,000</b>.', id: 'Terkumpul = 5×$3.000 = $15.000; pembayaran harapan = 5×$6.000 = $30.000 → hasil = $15.000 − $30.000 = <b>−$15.000</b>.' },
          { en: 'This is <b>adverse selection</b>: the flat premium attracts the high-risk and repels the low-risk, so premiums must rise → the death spiral.', id: 'Ini <b>adverse selection</b>: premi datar menarik risiko-tinggi dan menolak risiko-rendah, sehingga premi harus naik → death spiral.' }
        ], tip: { en: 'A single premium across mixed risks always over-attracts the high-risk.', id: 'Premi tunggal lintas risiko campuran selalu menarik berlebih risiko-tinggi.' } },
      { type: 'concept', q: { en: 'The RAND experiment estimated a price elasticity of medical demand of about −0.2. Is the welfare cost (DWL) of moving coinsurance from 20% to 0% large or small, and why?', id: 'Eksperimen RAND menaksir elastisitas harga permintaan medis sekitar −0,2. Apakah biaya kesejahteraan (DWL) dari memindahkan coinsurance dari 20% ke 0% besar atau kecil, dan mengapa?' },
        answer: [
          { en: 'Relatively <b>small</b>. With elasticity ≈ −0.2 demand is <b>inelastic</b>, so cutting the patient price further induces only a modest rise in quantity (M₁ − M₀ is small).', id: 'Relatif <b>kecil</b>. Dengan elastisitas ≈ −0,2 permintaan <b>inelastis</b>, sehingga memotong harga pasien lebih lanjut hanya memicu kenaikan kuantitas yang moderat (M₁ − M₀ kecil).' },
          { en: 'Since $DWL=\\tfrac12(P_0-cP_0)(M_1-M_0)$, a small over-consumption means a small triangle. Inelastic demand → steep Dm → little wasted value.', id: 'Karena $DWL=\\tfrac12(P_0-cP_0)(M_1-M_0)$, over-consumption kecil berarti segitiga kecil. Permintaan inelastis → Dm curam → sedikit nilai terbuang.' }
        ], tip: { en: 'Elastic services (discretionary care) are where cost-sharing matters most.', id: 'Layanan elastis (perawatan diskresioner) adalah tempat cost-sharing paling penting.' } },
      { type: 'quant', q: { en: 'Demand for doctor visits is P = 100 − 25Q and marginal cost is $50. Find the efficient number of visits; then show how full insurance (patient price 0) causes overconsumption and a deadweight loss.', id: 'Permintaan kunjungan dokter P = 100 − 25Q dan biaya marginal $50. Cari jumlah kunjungan yang efisien; lalu tunjukkan bagaimana asuransi penuh (harga pasien 0) menyebabkan overkonsumsi dan deadweight loss.' },
        answer: [
          { en: 'Efficient: price = MC → $100 − 25Q = 50 → Q* = <b>2</b> visits.', id: 'Efisien: harga = MC → $100 − 25Q = 50 → Q* = <b>2</b> kunjungan.' },
          { en: 'Full insurance sets patient price 0 → $100 − 25Q = 0 → Q = <b>4</b> visits. Overconsumption = 4 − 2 = 2 visits.', id: 'Asuransi penuh menetapkan harga pasien 0 → $100 − 25Q = 0 → Q = <b>4</b> kunjungan. Overkonsumsi = 4 − 2 = 2 kunjungan.' },
          { en: 'Those extra visits cost $50 each but are valued below $50 on the demand curve. $DWL=\\tfrac12\\times(50-0)\\times(4-2)=\\tfrac12\\times50\\times2=\\mathbf{\\$50}$.', id: 'Kunjungan ekstra itu berbiaya $50 masing-masing tapi dinilai di bawah $50 pada kurva permintaan. $DWL=\\tfrac12\\times(50-0)\\times(4-2)=\\tfrac12\\times50\\times2=\\mathbf{\\$50}$.' }
        ], tip: { en: 'The triangle has base = overconsumption, height = the price wedge P₀ − 0.', id: 'Segitiga punya alas = overkonsumsi, tinggi = wedge harga P₀ − 0.' } },
      { type: 'concept', q: { en: 'Among aging, income growth, third-party payment and technology, which cause does the evidence point to as the PRIMARY driver of health-cost growth, and why are the others insufficient?', id: 'Di antara penuaan, pertumbuhan pendapatan, pembayaran pihak ketiga, dan teknologi, penyebab mana yang ditunjuk bukti sebagai pendorong UTAMA pertumbuhan biaya kesehatan, dan mengapa yang lain tak memadai?' },
        answer: [
          { en: '<b>Technology / quality improvement</b> is the primary driver [Arrow; Newhouse]: costly new treatments expand what medicine can do.', id: '<b>Teknologi / peningkatan kualitas</b> adalah pendorong utama [Arrow; Newhouse]: pengobatan baru yang mahal memperluas kemampuan kedokteran.' },
          { en: 'Aging explains only ~10% of growth; income growth (elasticity ≈0.7–1.0) and third-party payment each explain only part. Technology absorbs the large residual.', id: 'Penuaan hanya menjelaskan ~10% pertumbuhan; pertumbuhan pendapatan (elastisitas ≈0,7–1,0) dan pembayaran pihak ketiga masing-masing hanya menjelaskan sebagian. Teknologi menyerap residu besar.' },
          { en: 'Crucially, much of this spending is <b>valuable</b> (cardiovascular mortality fell [Cutler 2004]; 1970–1990 longevity gains worth ≈$2.8T/yr [Murphy & Topel 2000]), so rising cost is not simply waste.', id: 'Yang penting, banyak belanja ini <b>bernilai</b> (mortalitas kardiovaskular turun [Cutler 2004]; perolehan umur panjang 1970–1990 bernilai ≈$2,8T/tahun [Murphy & Topel 2000]), sehingga biaya yang naik bukan sekadar pemborosan.' }
        ], tip: { en: 'Cost growth ≠ inefficiency when the new technology delivers large health value.', id: 'Pertumbuhan biaya ≠ inefisiensi ketika teknologi baru memberi nilai kesehatan besar.' } }
    ]
  };
})();
