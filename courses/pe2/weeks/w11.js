/* ============================================================================
   PE2 · Week 11 — The Short-Run Trade-off between Inflation and Unemployment
   Source: Mankiw, Ch. 36 · Sesi 11 (Nanda Alfarina)
   Bilingual (EN + ID). Prose leaves are { en, id }; math/LaTeX is shared plain
   text. Registers itself on window.PE2_WEEKS so course.js can assemble it.
   ============================================================================ */
window.PE2_WEEKS = window.PE2_WEEKS || {};
window.PE2_WEEKS.w11 = {
  id: 'w11',
  label: { en: 'Week 11', id: 'Minggu 11' },
  title: {
    en: 'The Short-Run Trade-off between Inflation and Unemployment',
    id: 'Trade-off Jangka Pendek antara Inflasi dan Pengangguran'
  },
  subtitle: {
    en: 'The Phillips curve, expectations, supply shocks, and the cost of disinflation',
    id: 'Kurva Phillips, ekspektasi, guncangan penawaran, dan biaya disinflasi'
  },

  /* ====================================================================== */
  /* NOTES                                                                  */
  /* ====================================================================== */
  notes: [
    {
      heading: { en: 'The big picture', id: 'Gambaran besar' },
      num: '1',
      cards: [
        {
          title: { en: 'Long run vs. short run', id: 'Jangka panjang vs. jangka pendek' },
          html: {
            en: `<p>The chapter answers one question: <span class="key">are inflation and unemployment related?</span> The answer depends on the horizon.</p>
<ul>
<li><b>Long run:</b> they are <span class="key">unrelated</span>. Inflation is set mainly by the growth of the money supply, while the <span class="key">natural rate of unemployment</span> depends on labour-market features — job search, minimum-wage laws, union power, efficiency wages.</li>
<li><b>Short run:</b> society faces a genuine <span class="key">trade-off</span> — to push unemployment down you usually have to accept higher inflation, and vice-versa.</li>
</ul>
<div class="note">💡 The whole week is built on a tension: the data of the 1960s showed a clean downward-sloping trade-off, but theory (and the 1970s) said it could not last. Expectations are what reconcile the two.</div>`,
            id: `<p>Bab ini menjawab satu pertanyaan: <span class="key">apakah inflasi dan pengangguran saling berkaitan?</span> Jawabannya tergantung pada horizon waktu.</p>
<ul>
<li><b>Jangka panjang:</b> keduanya <span class="key">tidak berkaitan</span>. Inflasi ditentukan terutama oleh pertumbuhan jumlah uang beredar, sedangkan <span class="key">tingkat pengangguran alamiah</span> bergantung pada karakteristik pasar tenaga kerja — pencarian kerja, upah minimum, kekuatan serikat pekerja, upah efisiensi.</li>
<li><b>Jangka pendek:</b> masyarakat menghadapi <span class="key">trade-off</span> yang nyata — untuk menurunkan pengangguran biasanya harus menerima inflasi yang lebih tinggi, dan sebaliknya.</li>
</ul>
<div class="note">💡 Seluruh minggu ini dibangun di atas satu ketegangan: data 1960-an menunjukkan trade-off menurun yang rapi, tetapi teori (dan tahun 1970-an) mengatakan itu tidak bisa bertahan. Ekspektasi-lah yang mendamaikan keduanya.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The Phillips curve as the flip side of AD–AS', id: 'Kurva Phillips sebagai sisi lain AD–AS' },
      num: '2',
      cards: [
        {
          title: { en: 'Deriving the Phillips curve', id: 'Menurunkan kurva Phillips' },
          html: {
            en: `<p>The <span class="key">Phillips curve (PC)</span> shows the short-run negative relationship between the inflation rate and the unemployment rate. It is simply the AD–AS model re-drawn.</p>
<p>Start with the same SRAS curve and let aggregate demand land in two places next year (with $P=100$ this year):</p>
<ul>
<li><b>Point A — low AD:</b> small rise in $P$ (low inflation, say 3%), low output, <span class="key">high unemployment</span>.</li>
<li><b>Point B — high AD:</b> big rise in $P$ (high inflation, say 5%), high output, <span class="key">low unemployment</span>.</li>
</ul>
<p>Plot inflation against unemployment and you trace a downward-sloping curve: higher inflation comes paired with lower unemployment.</p>
<div class="tip">📝 Whenever the exam asks for the Phillips-curve effect of a shock, first ask "what does this do to AD or SRAS?" — then read off inflation and unemployment.</div>`,
            id: `<p><span class="key">Kurva Phillips (PC)</span> menunjukkan hubungan negatif jangka pendek antara laju inflasi dan tingkat pengangguran. Ia sebenarnya hanyalah model AD–AS yang digambar ulang.</p>
<p>Mulai dari kurva SRAS yang sama dan biarkan permintaan agregat mendarat di dua titik tahun depan (dengan $P=100$ tahun ini):</p>
<ul>
<li><b>Titik A — AD rendah:</b> kenaikan $P$ kecil (inflasi rendah, misal 3%), output rendah, <span class="key">pengangguran tinggi</span>.</li>
<li><b>Titik B — AD tinggi:</b> kenaikan $P$ besar (inflasi tinggi, misal 5%), output tinggi, <span class="key">pengangguran rendah</span>.</li>
</ul>
<p>Plot inflasi terhadap pengangguran, maka terbentuklah kurva yang menurun: inflasi lebih tinggi berpasangan dengan pengangguran lebih rendah.</p>
<div class="tip">📝 Setiap kali ujian menanyakan dampak suatu guncangan pada kurva Phillips, tanyakan dulu "apa pengaruhnya pada AD atau SRAS?" — lalu baca inflasi dan pengangguran.</div>`
          }
        },
        {
          title: { en: 'A "policy menu"?', id: 'Sebuah "menu kebijakan"?' },
          html: {
            en: `<p>Because fiscal and monetary policy can shift the AD curve, they can <span class="key">move the economy along the PC</span>. In the 1960s the curve looked like a stable menu of choices:</p>
<ul>
<li>Low unemployment with high inflation (expand AD), or</li>
<li>Low inflation with high unemployment (contract AD), or anything in between.</li>
</ul>
<p>U.S. data from 1961–1968 fit this beautifully, and many believed the PC was a permanent, reliable policy tool. That belief turned out to be wrong.</p>`,
            id: `<p>Karena kebijakan fiskal dan moneter dapat menggeser kurva AD, keduanya dapat <span class="key">menggerakkan ekonomi di sepanjang PC</span>. Pada 1960-an, kurva ini tampak seperti menu pilihan yang stabil:</p>
<ul>
<li>Pengangguran rendah dengan inflasi tinggi (perluas AD), atau</li>
<li>Inflasi rendah dengan pengangguran tinggi (kontraksikan AD), atau apa pun di antaranya.</li>
</ul>
<p>Data AS tahun 1961–1968 sangat cocok dengan ini, dan banyak yang percaya PC adalah alat kebijakan yang permanen dan andal. Keyakinan itu ternyata keliru.</p>`
          }
        }
      ]
    },

    {
      heading: { en: 'The long-run (vertical) Phillips curve', id: 'Kurva Phillips jangka panjang (vertikal)' },
      num: '3',
      cards: [
        {
          title: { en: 'Friedman, Phelps, and the natural-rate hypothesis', id: 'Friedman, Phelps, dan hipotesis tingkat alamiah' },
          html: {
            en: `<p>In 1968, <span class="key">Milton Friedman</span> and <span class="key">Edmund Phelps</span> argued the trade-off was only <b>temporary</b>. Their reasoning rested on the classical dichotomy and the vertical LRAS curve.</p>
<p>The <span class="key">natural-rate hypothesis</span>: unemployment eventually returns to its normal, "natural" rate <i>regardless of the inflation rate</i>. Since LRAS is vertical at the natural rate of output, the long-run Phillips curve (<span class="key">LRPC</span>) is <b>vertical</b> at the natural rate of unemployment.</p>
<p>In the long run, faster money growth produces only faster inflation — output and unemployment are unchanged. The economy can sit at the natural rate with low inflation or high inflation; the choice of inflation does nothing for jobs.</p>`,
            id: `<p>Pada 1968, <span class="key">Milton Friedman</span> dan <span class="key">Edmund Phelps</span> berpendapat bahwa trade-off itu hanya <b>sementara</b>. Argumen mereka bertumpu pada dikotomi klasik dan kurva LRAS yang vertikal.</p>
<p><span class="key">Hipotesis tingkat alamiah</span>: pengangguran pada akhirnya kembali ke tingkat normal atau "alamiah"-nya <i>terlepas dari laju inflasi</i>. Karena LRAS vertikal pada tingkat output alamiah, kurva Phillips jangka panjang (<span class="key">LRPC</span>) bersifat <b>vertikal</b> pada tingkat pengangguran alamiah.</p>
<p>Dalam jangka panjang, pertumbuhan uang yang lebih cepat hanya menghasilkan inflasi yang lebih cepat — output dan pengangguran tidak berubah. Ekonomi bisa berada di tingkat alamiah dengan inflasi rendah maupun tinggi; pilihan tingkat inflasi tidak menambah lapangan kerja.</p>`
          }
        },
        {
          title: { en: 'What "natural" means', id: 'Arti kata "alamiah"' },
          html: {
            en: `<p>The <span class="key">natural rate of unemployment</span> is the rate the economy gravitates toward in the long run. Read the qualifiers carefully — they are exam favourites:</p>
<ul>
<li>It is <b>not</b> necessarily the socially desirable rate.</li>
<li>It is <b>not</b> constant over time (policy reforms can change it).</li>
<li>It is "natural" because it is <b>beyond the influence of monetary policy</b> — printing money cannot move it.</li>
</ul>
<div class="note">💡 To <i>lower</i> the natural rate you need real labour-market changes (e.g. better job matching, lower minimum wage friction), not faster money growth.</div>`,
            id: `<p><span class="key">Tingkat pengangguran alamiah</span> adalah tingkat yang dituju ekonomi dalam jangka panjang. Baca kualifikasinya dengan teliti — ini sering keluar di ujian:</p>
<ul>
<li><b>Bukan</b> berarti tingkat yang diinginkan secara sosial.</li>
<li><b>Tidak</b> tetap sepanjang waktu (reformasi kebijakan dapat mengubahnya).</li>
<li>Disebut "alamiah" karena <b>berada di luar pengaruh kebijakan moneter</b> — mencetak uang tidak dapat menggesernya.</li>
</ul>
<div class="note">💡 Untuk <i>menurunkan</i> tingkat alamiah, dibutuhkan perubahan riil di pasar tenaga kerja (mis. penyaluran kerja yang lebih baik, friksi upah minimum yang lebih kecil), bukan pertumbuhan uang yang lebih cepat.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The role of expectations', id: 'Peran ekspektasi' },
      num: '4',
      cards: [
        {
          title: { en: 'The expectations-augmented Phillips curve', id: 'Kurva Phillips yang diperluas ekspektasi' },
          html: {
            en: `<p>Evidence (1960s) said the PC slopes down; theory (Friedman–Phelps) said it is vertical in the long run. They bridged the gap by adding a new variable: <span class="key">expected inflation</span> ($\\pi^e$) — how much inflation people expect.</p>
<div class="formula">$$ u = u_n - a\\,(\\pi - \\pi^e) $$</div>
<ul>
<li><b>Short run:</b> the central bank can push unemployment <i>below</i> the natural rate by making actual inflation <span class="key">greater than expected</span> ($\\pi > \\pi^e$).</li>
<li><b>Long run:</b> expectations catch up ($\\pi^e \\to \\pi$), so the surprise term vanishes and $u$ returns to $u_n$ whether inflation ends up high or low.</li>
</ul>
<p>The short-run PC is drawn for a <i>given</i> $\\pi^e$. A change in $\\pi^e$ <span class="key">shifts the whole curve</span>.</p>`,
            id: `<p>Bukti (1960-an) mengatakan PC menurun; teori (Friedman–Phelps) mengatakan PC vertikal dalam jangka panjang. Mereka menjembatani jurang itu dengan menambahkan variabel baru: <span class="key">ekspektasi inflasi</span> ($\\pi^e$) — seberapa besar inflasi yang diperkirakan masyarakat.</p>
<div class="formula">$$ u = u_n - a\\,(\\pi - \\pi^e) $$</div>
<ul>
<li><b>Jangka pendek:</b> bank sentral dapat menekan pengangguran <i>di bawah</i> tingkat alamiah dengan membuat inflasi aktual <span class="key">lebih besar daripada yang diperkirakan</span> ($\\pi > \\pi^e$).</li>
<li><b>Jangka panjang:</b> ekspektasi menyusul ($\\pi^e \\to \\pi$), sehingga suku kejutan hilang dan $u$ kembali ke $u_n$ baik inflasi berakhir tinggi maupun rendah.</li>
</ul>
<p>PC jangka pendek digambar untuk $\\pi^e$ <i>tertentu</i>. Perubahan $\\pi^e$ <span class="key">menggeser seluruh kurva</span>.</p>`
          }
        },
        {
          title: { en: 'How a rise in expected inflation shifts the PC', id: 'Bagaimana kenaikan ekspektasi inflasi menggeser PC' },
          html: {
            en: `<p>Walk through the classic three-point story (natural rate 6%, $a=1$):</p>
<ol>
<li><b>A:</b> expected = actual inflation = 3%, so $u = u_n = 6\\%$.</li>
<li><b>B:</b> the Fed surprises everyone, making inflation 2 points higher than expected (5% vs 3%). Unemployment falls to 4% — a move <i>along</i> $PC_1$.</li>
<li><b>C:</b> over time expectations rise to 5%. The short-run curve shifts <b>up</b> to $PC_2$ and unemployment returns to 6% — but now at higher inflation.</li>
</ol>
<div class="note">💡 The trade-off only worked while inflation was a surprise. Once people expect 5%, you're back at the natural rate with nothing to show but higher prices.</div>`,
            id: `<p>Telusuri kisah klasik tiga titik (tingkat alamiah 6%, $a=1$):</p>
<ol>
<li><b>A:</b> ekspektasi = inflasi aktual = 3%, jadi $u = u_n = 6\\%$.</li>
<li><b>B:</b> bank sentral mengejutkan semua orang, membuat inflasi 2 poin lebih tinggi dari yang diperkirakan (5% vs 3%). Pengangguran turun ke 4% — pergerakan <i>di sepanjang</i> $PC_1$.</li>
<li><b>C:</b> seiring waktu ekspektasi naik ke 5%. Kurva jangka pendek bergeser <b>ke atas</b> ke $PC_2$ dan pengangguran kembali ke 6% — tetapi kini pada inflasi yang lebih tinggi.</li>
</ol>
<div class="note">💡 Trade-off hanya bekerja selama inflasi merupakan kejutan. Begitu masyarakat mengharapkan 5%, ekonomi kembali ke tingkat alamiah tanpa hasil apa pun selain harga yang lebih tinggi.</div>`
          }
        },
        {
          title: { en: 'The natural experiment of the early 1970s', id: 'Eksperimen alamiah awal 1970-an' },
          html: {
            en: `<p>Policymakers in the late 1960s unintentionally tested Friedman and Phelps. They kept stimulating demand expecting the old trade-off to hold.</p>
<p>Instead, in the early 1970s <span class="key">unemployment rose despite higher inflation</span> — the stable 1960s relationship broke down. The Friedman–Phelps explanation: <span class="key">expectations were catching up with reality</span>, shifting the short-run PC upward. Prediction confirmed.</p>`,
            id: `<p>Para pembuat kebijakan di akhir 1960-an tanpa sengaja menguji Friedman dan Phelps. Mereka terus menstimulus permintaan dengan harapan trade-off lama tetap berlaku.</p>
<p>Sebaliknya, pada awal 1970-an <span class="key">pengangguran naik meskipun inflasi lebih tinggi</span> — hubungan stabil 1960-an runtuh. Penjelasan Friedman–Phelps: <span class="key">ekspektasi sedang menyusul kenyataan</span>, menggeser PC jangka pendek ke atas. Prediksi terbukti.</p>`
          }
        }
      ]
    },

    {
      heading: { en: 'Supply shocks shift the Phillips curve', id: 'Guncangan penawaran menggeser kurva Phillips' },
      num: '5',
      cards: [
        {
          title: { en: 'Adverse supply shocks (the 1970s oil shocks)', id: 'Guncangan penawaran merugikan (guncangan minyak 1970-an)' },
          html: {
            en: `<p>A <span class="key">supply shock</span> is an event that directly alters firms' costs and prices, shifting both the AS curve and the PC. The textbook case: the OPEC oil-price spikes of <b>1974 and 1979</b>.</p>
<p>An <span class="key">adverse</span> shock (higher oil prices) does this:</p>
<ul>
<li>SRAS shifts <b>left</b> → the price level rises while output and employment fall.</li>
<li>So <span class="key">inflation and unemployment rise together</span> — the dreaded "stagflation".</li>
<li>On the diagram the short-run PC shifts <b>up/outward</b> ($PC_1 \\to PC_2$).</li>
</ul>
<div class="tip">📝 An adverse supply shock gives policymakers a <b>worse</b> menu: for any unemployment rate they must accept higher inflation, or for any inflation rate they must accept higher unemployment. Demand policy cannot fix both at once.</div>`,
            id: `<p><span class="key">Guncangan penawaran</span> adalah peristiwa yang langsung mengubah biaya dan harga perusahaan, menggeser baik kurva AS maupun PC. Kasus buku teks: lonjakan harga minyak OPEC pada <b>1974 dan 1979</b>.</p>
<p>Guncangan yang <span class="key">merugikan</span> (harga minyak naik) menimbulkan:</p>
<ul>
<li>SRAS bergeser <b>ke kiri</b> → tingkat harga naik sementara output dan kesempatan kerja turun.</li>
<li>Maka <span class="key">inflasi dan pengangguran naik bersamaan</span> — "stagflasi" yang ditakuti.</li>
<li>Pada diagram, PC jangka pendek bergeser <b>ke atas/ke luar</b> ($PC_1 \\to PC_2$).</li>
</ul>
<div class="tip">📝 Guncangan penawaran merugikan memberi pembuat kebijakan menu yang <b>lebih buruk</b>: untuk setiap tingkat pengangguran harus menerima inflasi yang lebih tinggi, atau untuk setiap tingkat inflasi harus menerima pengangguran yang lebih tinggi. Kebijakan permintaan tidak bisa memperbaiki keduanya sekaligus.</div>`
          }
        }
      ]
    },

    {
      heading: { en: 'The cost of disinflation', id: 'Biaya disinflasi' },
      num: '6',
      cards: [
        {
          title: { en: 'Disinflation and the sacrifice ratio', id: 'Disinflasi dan rasio pengorbanan' },
          html: {
            en: `<p><span class="key">Disinflation</span> is a reduction in the inflation rate. To achieve it, the central bank runs <span class="key">contractionary monetary policy</span>, which reduces AD.</p>
<ul>
<li><b>Short run:</b> the economy slides along the short-run PC (point A → B): output falls and <span class="key">unemployment rises</span>.</li>
<li><b>Long run:</b> as expected inflation falls, the short-run PC shifts <b>down</b>; the economy reaches point C — the natural rate of unemployment again, but with permanently lower inflation.</li>
</ul>
<p>The <span class="key">sacrifice ratio</span> measures the pain: the percentage points of a year's output lost per 1 percentage-point reduction in inflation. A typical estimate is <b>5</b>.</p>
<div class="formula">$$ \\text{Sacrifice ratio} = \\frac{\\%\\ \\text{of annual output lost}}{\\text{percentage-point fall in inflation}} $$</div>
<p>The cost can be spread over time. To cut inflation by 6 points (ratio 5 → 30% of GDP), you can sacrifice 30% of GDP in one year <i>or</i> 10% of GDP for three years.</p>`,
            id: `<p><span class="key">Disinflasi</span> adalah penurunan laju inflasi. Untuk mencapainya, bank sentral menjalankan <span class="key">kebijakan moneter kontraktif</span>, yang menurunkan AD.</p>
<ul>
<li><b>Jangka pendek:</b> ekonomi meluncur di sepanjang PC jangka pendek (titik A → B): output turun dan <span class="key">pengangguran naik</span>.</li>
<li><b>Jangka panjang:</b> seiring ekspektasi inflasi turun, PC jangka pendek bergeser <b>ke bawah</b>; ekonomi mencapai titik C — kembali ke tingkat pengangguran alamiah, tetapi dengan inflasi yang permanen lebih rendah.</li>
</ul>
<p><span class="key">Rasio pengorbanan (sacrifice ratio)</span> mengukur "rasa sakit"-nya: berapa poin persen output setahun yang hilang per penurunan inflasi 1 poin persen. Estimasi umum adalah <b>5</b>.</p>
<div class="formula">$$ \\text{Rasio pengorbanan} = \\frac{\\%\\ \\text{output tahunan yang hilang}}{\\text{penurunan inflasi (poin persen)}} $$</div>
<p>Biayanya dapat disebar sepanjang waktu. Untuk memangkas inflasi 6 poin (rasio 5 → 30% PDB), bisa mengorbankan 30% PDB dalam satu tahun <i>atau</i> 10% PDB selama tiga tahun.</p>`
          }
        },
        {
          title: { en: 'Rational expectations: costless disinflation?', id: 'Ekspektasi rasional: disinflasi tanpa biaya?' },
          html: {
            en: `<p><span class="key">Rational expectations</span> (Robert Lucas, Thomas Sargent, Robert Barro) is the theory that people optimally use <i>all</i> available information — including announced government policy — when forecasting the future.</p>
<p>The implication: if the central bank <span class="key">credibly commits</span> to lower inflation and people believe it, expected inflation falls <i>immediately</i>, the short-run PC shifts down <i>right away</i>, and disinflation can occur with much less unemployment than the traditional sacrifice ratio predicts.</p>
<p><b>The debate / evidence:</b> The <span class="key">Volcker disinflation</span> (Fed chair Paul Volcker, appointed 1979) cut U.S. inflation from about 10% to 4%, but at the cost of unemployment near 10% in 1982–83. So it was <b>not</b> costless — partly because fiscal policy in 1981–84 was expansionary, forcing very tight money. Credibility helps, but in practice disinflation still hurt.</p>
<div class="note">💡 Exam framing: the cost of disinflation depends on <b>how quickly inflation expectations fall</b>. Credibility speeds the adjustment and shrinks the sacrifice — it does not always make it zero.</div>`,
            id: `<p><span class="key">Ekspektasi rasional</span> (Robert Lucas, Thomas Sargent, Robert Barro) adalah teori bahwa orang secara optimal menggunakan <i>seluruh</i> informasi yang tersedia — termasuk kebijakan pemerintah yang diumumkan — ketika meramalkan masa depan.</p>
<p>Implikasinya: jika bank sentral <span class="key">berkomitmen secara kredibel</span> untuk menurunkan inflasi dan masyarakat percaya, ekspektasi inflasi turun <i>seketika</i>, PC jangka pendek bergeser ke bawah <i>segera</i>, dan disinflasi dapat terjadi dengan pengangguran yang jauh lebih kecil dari yang diprediksi rasio pengorbanan tradisional.</p>
<p><b>Perdebatan / bukti:</b> <span class="key">Disinflasi Volcker</span> (gubernur The Fed Paul Volcker, ditunjuk 1979) memangkas inflasi AS dari sekitar 10% ke 4%, tetapi dengan biaya pengangguran mendekati 10% pada 1982–83. Jadi <b>tidak</b> tanpa biaya — sebagian karena kebijakan fiskal 1981–84 bersifat ekspansif, memaksa kebijakan moneter sangat ketat. Kredibilitas membantu, tetapi dalam praktik disinflasi tetap menyakitkan.</p>
<div class="note">💡 Untuk ujian: biaya disinflasi tergantung pada <b>seberapa cepat ekspektasi inflasi turun</b>. Kredibilitas mempercepat penyesuaian dan memperkecil pengorbanan — tetapi tidak selalu membuatnya nol.</div>`
          }
        }
      ]
    }
  ],

  /* ====================================================================== */
  /* FORMULAS                                                               */
  /* ====================================================================== */
  formulas: [
    {
      cards: [
        {
          title: { en: 'Expectations-augmented Phillips curve', id: 'Kurva Phillips yang diperluas ekspektasi' },
          html: {
            en: `<div class="formula">$$ u = u_n - a\\,(\\pi - \\pi^e) $$</div>
<ul>
<li>$u$ — actual unemployment rate</li>
<li>$u_n$ — natural rate of unemployment</li>
<li>$a$ — responsiveness of unemployment to surprise inflation ($a>0$)</li>
<li>$\\pi$ — actual inflation rate</li>
<li>$\\pi^e$ — expected inflation rate</li>
</ul>
<p><b>Read it as:</b> unemployment dips below the natural rate only when actual inflation exceeds expected inflation. The surprise term $(\\pi - \\pi^e)$ is the engine of the short-run trade-off.</p>
<p><b>When to use:</b> any question about how a policy or shock moves unemployment relative to the natural rate, or how a change in $\\pi^e$ shifts the short-run curve.</p>
<div class="tip">📝 Long run: $\\pi = \\pi^e$, so $u = u_n$. The trade-off disappears — this is the vertical LRPC.</div>`,
            id: `<div class="formula">$$ u = u_n - a\\,(\\pi - \\pi^e) $$</div>
<ul>
<li>$u$ — tingkat pengangguran aktual</li>
<li>$u_n$ — tingkat pengangguran alamiah</li>
<li>$a$ — kepekaan pengangguran terhadap kejutan inflasi ($a>0$)</li>
<li>$\\pi$ — laju inflasi aktual</li>
<li>$\\pi^e$ — laju inflasi yang diperkirakan (ekspektasi inflasi)</li>
</ul>
<p><b>Cara membacanya:</b> pengangguran turun di bawah tingkat alamiah hanya ketika inflasi aktual melampaui ekspektasi inflasi. Suku kejutan $(\\pi - \\pi^e)$ adalah mesin penggerak trade-off jangka pendek.</p>
<p><b>Kapan dipakai:</b> setiap soal tentang bagaimana kebijakan atau guncangan menggerakkan pengangguran relatif terhadap tingkat alamiah, atau bagaimana perubahan $\\pi^e$ menggeser kurva jangka pendek.</p>
<div class="tip">📝 Jangka panjang: $\\pi = \\pi^e$, jadi $u = u_n$. Trade-off lenyap — inilah LRPC yang vertikal.</div>`
          }
        },
        {
          title: { en: 'Solving for unemployment (worked form)', id: 'Menyelesaikan untuk pengangguran (bentuk terapan)' },
          html: {
            en: `<p>To find the unemployment rate for a given actual inflation, plug numbers straight in. With $u_n = 5\\%$, $\\pi^e = 2\\%$, $a = 0.5$:</p>
<div class="formula">$$ u = 5 - 0.5\\,(\\pi - 2) $$</div>
<ul>
<li>If $\\pi = 0\\%$: $u = 5 - 0.5(0-2) = 5 + 1 = 6\\%$</li>
<li>If $\\pi = 6\\%$: $u = 5 - 0.5(6-2) = 5 - 2 = 3\\%$</li>
</ul>
<p>If expectations rise to $\\pi^e = 4\\%$, recompute with the new $\\pi^e$ — the whole short-run curve shifts right/up. If the <i>natural rate</i> falls to 4%, replace $u_n$ — both curves shift left.</p>`,
            id: `<p>Untuk mencari tingkat pengangguran pada inflasi aktual tertentu, masukkan angka langsung. Dengan $u_n = 5\\%$, $\\pi^e = 2\\%$, $a = 0.5$:</p>
<div class="formula">$$ u = 5 - 0.5\\,(\\pi - 2) $$</div>
<ul>
<li>Jika $\\pi = 0\\%$: $u = 5 - 0.5(0-2) = 5 + 1 = 6\\%$</li>
<li>Jika $\\pi = 6\\%$: $u = 5 - 0.5(6-2) = 5 - 2 = 3\\%$</li>
</ul>
<p>Jika ekspektasi naik ke $\\pi^e = 4\\%$, hitung ulang dengan $\\pi^e$ yang baru — seluruh kurva jangka pendek bergeser ke kanan/atas. Jika <i>tingkat alamiah</i> turun ke 4%, ganti $u_n$ — kedua kurva bergeser ke kiri.</p>`
          }
        },
        {
          title: { en: 'Sacrifice ratio', id: 'Rasio pengorbanan' },
          html: {
            en: `<div class="formula">$$ \\text{Sacrifice ratio} = \\frac{\\text{percentage points of annual output lost}}{\\text{percentage-point reduction in inflation}} $$</div>
<p><b>Total output cost:</b></p>
<div class="formula">$$ \\text{Output lost (\\% of GDP)} = \\text{sacrifice ratio} \\times \\Delta\\pi $$</div>
<ul>
<li>Typical estimate of the ratio ≈ <b>5</b>.</li>
<li>Reducing inflation by $\\Delta\\pi = 1$ point costs about 5% of one year's output.</li>
<li>The cost can be spread: e.g. a 6-point disinflation (cost $5\\times6 = 30\\%$ of GDP) = 30% in one year, or 10% per year for three years.</li>
</ul>
<p><b>When to use:</b> any disinflation cost question. A <i>higher</i> sacrifice ratio means a more painful (more output/jobs lost) disinflation. Rational expectations + credibility lower the effective ratio.</p>`,
            id: `<div class="formula">$$ \\text{Rasio pengorbanan} = \\frac{\\text{poin persen output tahunan yang hilang}}{\\text{penurunan inflasi (poin persen)}} $$</div>
<p><b>Total biaya output:</b></p>
<div class="formula">$$ \\text{Output yang hilang (\\% PDB)} = \\text{rasio pengorbanan} \\times \\Delta\\pi $$</div>
<ul>
<li>Estimasi umum rasio ≈ <b>5</b>.</li>
<li>Menurunkan inflasi sebesar $\\Delta\\pi = 1$ poin menelan biaya sekitar 5% output satu tahun.</li>
<li>Biaya bisa disebar: mis. disinflasi 6 poin (biaya $5\\times6 = 30\\%$ PDB) = 30% dalam satu tahun, atau 10% per tahun selama tiga tahun.</li>
</ul>
<p><b>Kapan dipakai:</b> setiap soal biaya disinflasi. Rasio pengorbanan yang <i>lebih tinggi</i> berarti disinflasi lebih menyakitkan (lebih banyak output/lapangan kerja hilang). Ekspektasi rasional + kredibilitas menurunkan rasio efektifnya.</p>`
          }
        }
      ]
    }
  ],

  /* ====================================================================== */
  /* GRAPHS — self-contained inline SVG (no charting library)               */
  /* ====================================================================== */
  graphs: [
    {
      cards: [
        {
          title: { en: 'The short-run Phillips curve', id: 'Kurva Phillips jangka pendek' },
          html: {
            en: `<p>Unemployment on the x-axis, inflation on the y-axis. The short-run PC slopes <b>downward</b>: expand AD to move down-right to lower inflation/higher unemployment, or up-left to higher inflation/lower unemployment.</p>
<svg viewBox="0 0 360 260" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="220" x2="340" y2="220" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="250" font-size="11" text-anchor="middle" fill="#334155">Unemployment rate (u)</text>
  <text x="16" y="120" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 120)">Inflation (&#960;)</text>
  <path d="M70 50 C150 95, 200 150, 320 205" fill="none" stroke="#0e8fb8" stroke-width="2.5"/>
  <text x="300" y="195" font-size="11" fill="#0e8fb8" font-weight="bold">PC</text>
  <circle cx="120" cy="80" r="3.5" fill="#b91c1c"/>
  <text x="126" y="76" font-size="10" fill="#b91c1c">B: high &#960;, low u</text>
  <circle cx="270" cy="180" r="3.5" fill="#b91c1c"/>
  <text x="160" y="200" font-size="10" fill="#b91c1c">A: low &#960;, high u</text>
</svg>
<p>Points A and B are the two AD outcomes from the derivation: high AD (B) buys low unemployment at the price of high inflation.</p>`,
            id: `<p>Pengangguran pada sumbu-x, inflasi pada sumbu-y. PC jangka pendek <b>menurun</b>: perluas AD untuk bergerak ke kanan-bawah menuju inflasi lebih rendah/pengangguran lebih tinggi, atau ke kiri-atas menuju inflasi lebih tinggi/pengangguran lebih rendah.</p>
<svg viewBox="0 0 360 260" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="220" x2="340" y2="220" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="250" font-size="11" text-anchor="middle" fill="#334155">Tingkat pengangguran (u)</text>
  <text x="16" y="120" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 120)">Inflasi (&#960;)</text>
  <path d="M70 50 C150 95, 200 150, 320 205" fill="none" stroke="#0e8fb8" stroke-width="2.5"/>
  <text x="300" y="195" font-size="11" fill="#0e8fb8" font-weight="bold">PC</text>
  <circle cx="120" cy="80" r="3.5" fill="#b91c1c"/>
  <text x="126" y="76" font-size="10" fill="#b91c1c">B: &#960; tinggi, u rendah</text>
  <circle cx="270" cy="180" r="3.5" fill="#b91c1c"/>
  <text x="150" y="200" font-size="10" fill="#b91c1c">A: &#960; rendah, u tinggi</text>
</svg>
<p>Titik A dan B adalah dua hasil AD dari penurunan kurva: AD tinggi (B) membeli pengangguran rendah dengan harga inflasi tinggi.</p>`
          }
        },
        {
          title: { en: 'The long-run (vertical) Phillips curve', id: 'Kurva Phillips jangka panjang (vertikal)' },
          html: {
            en: `<p>In the long run the curve is <b>vertical</b> at the natural rate of unemployment ($u_n$). Faster money growth only raises inflation; it cannot move unemployment off $u_n$.</p>
<svg viewBox="0 0 360 260" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="220" x2="340" y2="220" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="250" font-size="11" text-anchor="middle" fill="#334155">Unemployment rate (u)</text>
  <text x="16" y="120" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 120)">Inflation (&#960;)</text>
  <line x1="190" y1="220" x2="190" y2="35" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="196" y="45" font-size="11" fill="#7c3aed" font-weight="bold">LRPC</text>
  <line x1="50" y1="160" x2="190" y2="160" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="50" y1="70" x2="190" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="55" y="156" font-size="9" fill="#64748b">low &#960;</text>
  <text x="55" y="66" font-size="9" fill="#64748b">high &#960;</text>
  <text x="172" y="234" font-size="10" fill="#7c3aed">u&#8345;</text>
</svg>
<p>Both a low-inflation and a high-inflation equilibrium sit on the same vertical line — same unemployment, different inflation.</p>`,
            id: `<p>Dalam jangka panjang, kurva bersifat <b>vertikal</b> pada tingkat pengangguran alamiah ($u_n$). Pertumbuhan uang yang lebih cepat hanya menaikkan inflasi; ia tidak bisa menggeser pengangguran dari $u_n$.</p>
<svg viewBox="0 0 360 260" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="220" x2="340" y2="220" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="250" font-size="11" text-anchor="middle" fill="#334155">Tingkat pengangguran (u)</text>
  <text x="16" y="120" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 120)">Inflasi (&#960;)</text>
  <line x1="190" y1="220" x2="190" y2="35" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="196" y="45" font-size="11" fill="#7c3aed" font-weight="bold">LRPC</text>
  <line x1="50" y1="160" x2="190" y2="160" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="50" y1="70" x2="190" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="55" y="156" font-size="9" fill="#64748b">&#960; rendah</text>
  <text x="55" y="66" font-size="9" fill="#64748b">&#960; tinggi</text>
  <text x="172" y="234" font-size="10" fill="#7c3aed">u&#8345;</text>
</svg>
<p>Baik keseimbangan inflasi-rendah maupun inflasi-tinggi berada di garis vertikal yang sama — pengangguran sama, inflasi berbeda.</p>`
          }
        },
        {
          title: { en: 'A rise in expected inflation shifts the PC up', id: 'Kenaikan ekspektasi inflasi menggeser PC ke atas' },
          html: {
            en: `<p>Starting at A ($u_n$, $\\pi=\\pi^e=3\\%$): a surprise pushes the economy to B (lower u, higher $\\pi$) <i>along</i> $PC_1$. As expectations rise to 5%, the curve shifts up to $PC_2$ and the economy lands at C — back on the LRPC at $u_n$, but with higher inflation.</p>
<svg viewBox="0 0 360 270" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="230" x2="340" y2="230" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="230" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="258" font-size="11" text-anchor="middle" fill="#334155">Unemployment rate (u)</text>
  <text x="16" y="125" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 125)">Inflation (&#960;)</text>
  <line x1="230" y1="230" x2="230" y2="30" stroke="#7c3aed" stroke-width="2"/>
  <text x="236" y="40" font-size="10" fill="#7c3aed" font-weight="bold">LRPC</text>
  <path d="M120 70 C190 110, 230 140, 300 185" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="276" y="180" font-size="10" fill="#0e8fb8" font-weight="bold">PC&#8321;</text>
  <path d="M120 35 C190 70, 230 100, 300 150" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <text x="118" y="30" font-size="10" fill="#1d4ed8" font-weight="bold">PC&#8322;</text>
  <circle cx="230" cy="140" r="3.5" fill="#b91c1c"/><text x="236" y="138" font-size="10" fill="#b91c1c">A (&#960;&#7497;=3%)</text>
  <circle cx="175" cy="118" r="3.5" fill="#b91c1c"/><text x="120" y="112" font-size="10" fill="#b91c1c">B</text>
  <circle cx="230" cy="100" r="3.5" fill="#b91c1c"/><text x="236" y="98" font-size="10" fill="#b91c1c">C (&#960;&#7497;=5%)</text>
</svg>
<p>The short-run gain (A→B) is temporary; the long-run result (A→C) is the same unemployment at higher inflation. This is the curve shifting, not a move along it.</p>`,
            id: `<p>Mulai di A ($u_n$, $\\pi=\\pi^e=3\\%$): sebuah kejutan mendorong ekonomi ke B (u lebih rendah, $\\pi$ lebih tinggi) <i>di sepanjang</i> $PC_1$. Saat ekspektasi naik ke 5%, kurva bergeser ke atas menjadi $PC_2$ dan ekonomi mendarat di C — kembali ke LRPC pada $u_n$, tetapi dengan inflasi lebih tinggi.</p>
<svg viewBox="0 0 360 270" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="230" x2="340" y2="230" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="230" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="258" font-size="11" text-anchor="middle" fill="#334155">Tingkat pengangguran (u)</text>
  <text x="16" y="125" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 125)">Inflasi (&#960;)</text>
  <line x1="230" y1="230" x2="230" y2="30" stroke="#7c3aed" stroke-width="2"/>
  <text x="236" y="40" font-size="10" fill="#7c3aed" font-weight="bold">LRPC</text>
  <path d="M120 70 C190 110, 230 140, 300 185" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="276" y="180" font-size="10" fill="#0e8fb8" font-weight="bold">PC&#8321;</text>
  <path d="M120 35 C190 70, 230 100, 300 150" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <text x="118" y="30" font-size="10" fill="#1d4ed8" font-weight="bold">PC&#8322;</text>
  <circle cx="230" cy="140" r="3.5" fill="#b91c1c"/><text x="236" y="138" font-size="10" fill="#b91c1c">A (&#960;&#7497;=3%)</text>
  <circle cx="175" cy="118" r="3.5" fill="#b91c1c"/><text x="120" y="112" font-size="10" fill="#b91c1c">B</text>
  <circle cx="230" cy="100" r="3.5" fill="#b91c1c"/><text x="236" y="98" font-size="10" fill="#b91c1c">C (&#960;&#7497;=5%)</text>
</svg>
<p>Keuntungan jangka pendek (A→B) bersifat sementara; hasil jangka panjang (A→C) adalah pengangguran yang sama pada inflasi lebih tinggi. Ini adalah pergeseran kurva, bukan pergerakan di sepanjang kurva.</p>`
          }
        },
        {
          title: { en: 'An adverse supply shock shifts the PC up', id: 'Guncangan penawaran merugikan menggeser PC ke atas' },
          html: {
            en: `<p>An adverse supply shock (e.g. an oil-price spike) shifts SRAS left. On the Phillips diagram the short-run curve shifts <b>up/outward</b> from $PC_1$ to $PC_2$: at point B both inflation <i>and</i> unemployment are higher than at A — stagflation.</p>
<svg viewBox="0 0 360 270" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="230" x2="340" y2="230" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="230" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="258" font-size="11" text-anchor="middle" fill="#334155">Unemployment rate (u)</text>
  <text x="16" y="125" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 125)">Inflation (&#960;)</text>
  <path d="M90 100 C160 140, 210 170, 300 210" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="276" y="205" font-size="10" fill="#0e8fb8" font-weight="bold">PC&#8321;</text>
  <path d="M90 55 C160 95, 210 125, 300 165" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="92" y="50" font-size="10" fill="#dc2626" font-weight="bold">PC&#8322;</text>
  <path d="M150 180 L150 130" stroke="#475569" stroke-width="1.2" marker-end="url(#ar)"/>
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#475569"/></marker></defs>
  <circle cx="150" cy="158" r="3.5" fill="#b91c1c"/><text x="100" y="178" font-size="10" fill="#b91c1c">A</text>
  <circle cx="190" cy="120" r="3.5" fill="#b91c1c"/><text x="196" y="116" font-size="10" fill="#b91c1c">B (higher &#960; &amp; u)</text>
</svg>
<p>Policymakers now face a <b>worse</b> trade-off: for any unemployment rate they must accept higher inflation. Demand policy alone cannot undo both.</p>`,
            id: `<p>Guncangan penawaran merugikan (mis. lonjakan harga minyak) menggeser SRAS ke kiri. Pada diagram Phillips, kurva jangka pendek bergeser <b>ke atas/ke luar</b> dari $PC_1$ ke $PC_2$: di titik B baik inflasi <i>maupun</i> pengangguran lebih tinggi daripada di A — stagflasi.</p>
<svg viewBox="0 0 360 270" width="100%" style="max-width:380px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <line x1="50" y1="230" x2="340" y2="230" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="230" x2="50" y2="20" stroke="#475569" stroke-width="1.5"/>
  <text x="200" y="258" font-size="11" text-anchor="middle" fill="#334155">Tingkat pengangguran (u)</text>
  <text x="16" y="125" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 16 125)">Inflasi (&#960;)</text>
  <path d="M90 100 C160 140, 210 170, 300 210" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="276" y="205" font-size="10" fill="#0e8fb8" font-weight="bold">PC&#8321;</text>
  <path d="M90 55 C160 95, 210 125, 300 165" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="92" y="50" font-size="10" fill="#dc2626" font-weight="bold">PC&#8322;</text>
  <path d="M150 180 L150 130" stroke="#475569" stroke-width="1.2" marker-end="url(#ar2)"/>
  <defs><marker id="ar2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#475569"/></marker></defs>
  <circle cx="150" cy="158" r="3.5" fill="#b91c1c"/><text x="100" y="178" font-size="10" fill="#b91c1c">A</text>
  <circle cx="190" cy="120" r="3.5" fill="#b91c1c"/><text x="196" y="116" font-size="10" fill="#b91c1c">B (&#960; &amp; u lebih tinggi)</text>
</svg>
<p>Pembuat kebijakan kini menghadapi trade-off yang <b>lebih buruk</b>: untuk setiap tingkat pengangguran harus menerima inflasi lebih tinggi. Kebijakan permintaan saja tidak bisa membatalkan keduanya.</p>`
          }
        }
      ]
    }
  ],

  /* ====================================================================== */
  /* QUIZ                                                                   */
  /* ====================================================================== */
  quiz: [
    {
      type: 'concept',
      q: {
        en: 'When the central bank increases the money supply, what happens along/to the short-run Phillips curve?',
        id: 'Ketika bank sentral menambah jumlah uang beredar, apa yang terjadi di sepanjang/pada kurva Phillips jangka pendek?'
      },
      answer: [
        { en: 'More money raises aggregate demand (AD shifts right), so the price level rises → higher inflation.',
          id: 'Uang lebih banyak menaikkan permintaan agregat (AD bergeser ke kanan), sehingga tingkat harga naik → inflasi lebih tinggi.' },
        { en: 'Higher output means firms hire more, so unemployment falls.',
          id: 'Output lebih tinggi berarti perusahaan merekrut lebih banyak, sehingga pengangguran turun.' },
        { en: 'The economy moves UP-LEFT ALONG the existing short-run PC to a point of higher inflation and lower unemployment (this is a movement along the curve, not a shift).',
          id: 'Ekonomi bergerak ke KIRI-ATAS DI SEPANJANG PC jangka pendek yang ada menuju titik inflasi lebih tinggi dan pengangguran lebih rendah (ini pergerakan di sepanjang kurva, bukan pergeseran).' }
      ],
      tip: {
        en: 'Demand shocks = movement ALONG the PC. Expectations/supply shocks = the curve SHIFTS.',
        id: 'Guncangan permintaan = pergerakan DI SEPANJANG PC. Ekspektasi/guncangan penawaran = kurva BERGESER.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'When the growth rate of the money supply slows, what happens to expected inflation and to the short-run Phillips curve?',
        id: 'Ketika laju pertumbuhan uang beredar melambat, apa yang terjadi pada ekspektasi inflasi dan pada kurva Phillips jangka pendek?'
      },
      answer: [
        { en: 'Slower money growth eventually means lower actual inflation.',
          id: 'Pertumbuhan uang lebih lambat pada akhirnya berarti inflasi aktual lebih rendah.' },
        { en: 'People observe this and revise their expectations DOWNWARD (expected inflation falls).',
          id: 'Masyarakat mengamati ini dan merevisi ekspektasi mereka KE BAWAH (ekspektasi inflasi turun).' },
        { en: 'Because the short-run PC is drawn for a given expected inflation, a fall in πᵉ shifts the short-run PC DOWNWARD. → Answer: expected inflation falls; SRPC shifts downward.',
          id: 'Karena PC jangka pendek digambar untuk ekspektasi inflasi tertentu, turunnya πᵉ menggeser PC jangka pendek KE BAWAH. → Jawaban: ekspektasi inflasi turun; SRPC bergeser ke bawah.' }
      ],
      tip: {
        en: 'This downward shift is exactly the long-run adjustment that makes disinflation possible at the natural rate.',
        id: 'Pergeseran ke bawah inilah penyesuaian jangka panjang yang membuat disinflasi dapat dicapai pada tingkat alamiah.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'A drought sharply raises food prices. What happens to inflation and unemployment in the short run, and to the short-run Phillips curve?',
        id: 'Kekeringan menaikkan tajam harga pangan. Apa yang terjadi pada inflasi dan pengangguran dalam jangka pendek, dan pada kurva Phillips jangka pendek?'
      },
      context: {
        en: 'This is an adverse supply shock — it raises firms’ costs directly.',
        id: 'Ini adalah guncangan penawaran merugikan — ia menaikkan biaya perusahaan secara langsung.'
      },
      answer: [
        { en: 'Higher input costs shift the SRAS curve to the LEFT.',
          id: 'Biaya input lebih tinggi menggeser kurva SRAS ke KIRI.' },
        { en: 'With SRAS left: the price level rises (higher inflation) AND output/employment fall (higher unemployment) — both worsen together (stagflation).',
          id: 'Dengan SRAS ke kiri: tingkat harga naik (inflasi lebih tinggi) DAN output/kesempatan kerja turun (pengangguran lebih tinggi) — keduanya memburuk bersamaan (stagflasi).' },
        { en: 'On the Phillips diagram the short-run PC shifts UP/outward (to the right) — for any given unemployment rate, inflation is now higher.',
          id: 'Pada diagram Phillips, PC jangka pendek bergeser KE ATAS/ke luar (ke kanan) — untuk tingkat pengangguran tertentu, inflasi kini lebih tinggi.' },
        { en: 'Correct choice: SRAS shifts LEFT and the short-run PC shifts to the RIGHT (a higher PC = higher inflation at any unemployment rate).',
          id: 'Pilihan yang benar: SRAS bergeser ke KIRI dan PC jangka pendek bergeser ke KANAN (PC yang lebih tinggi = inflasi lebih tinggi pada tingkat pengangguran berapa pun).' }
      ],
      tip: {
        en: 'Watch the trap answers that say SRAS shifts right — an adverse cost shock always shifts SRAS left.',
        id: 'Waspadai jawaban jebakan yang mengatakan SRAS bergeser ke kanan — guncangan biaya merugikan selalu menggeser SRAS ke kiri.'
      }
    },
    {
      type: 'scenario',
      q: {
        en: 'Country A has a sacrifice ratio of 5; Country B has a sacrifice ratio of 1. To reduce inflation by the same amount, what is true?',
        id: 'Negara A memiliki sacrifice ratio 5; Negara B memiliki sacrifice ratio 1. Untuk menurunkan inflasi sebesar yang sama, manakah yang benar?'
      },
      answer: [
        { en: 'The sacrifice ratio = % of annual output lost per 1 point of inflation reduction. A higher ratio = a more costly disinflation.',
          id: 'Sacrifice ratio = % output tahunan yang hilang per 1 poin penurunan inflasi. Rasio lebih tinggi = disinflasi lebih mahal.' },
        { en: 'For the same Δπ, Country A loses 5× more output than Country B, and therefore sheds more jobs (unemployment rises more).',
          id: 'Untuk Δπ yang sama, Negara A kehilangan output 5× lebih banyak daripada Negara B, sehingga lebih banyak lapangan kerja hilang (pengangguran naik lebih besar).' },
        { en: 'So the correct statement: the fall in employment in Country A is LARGER to reduce inflation by the same amount.',
          id: 'Jadi pernyataan yang benar: penurunan lapangan kerja di Negara A LEBIH BESAR untuk menurunkan inflasi sebesar yang sama.' }
      ],
      tip: {
        en: 'A country with quicker-adjusting expectations (more central-bank credibility) has a lower sacrifice ratio.',
        id: 'Negara dengan ekspektasi yang lebih cepat menyesuaikan (kredibilitas bank sentral lebih tinggi) memiliki sacrifice ratio lebih rendah.'
      }
    },
    {
      type: 'quant',
      q: {
        en: 'Use u = uₙ − a(π − πᵉ) with uₙ = 6%, πᵉ = 5%, a = 0.2. (a) Find u at π = 3% and π = 10%. (b) If late-2023 expected inflation rises to 6%, redo at π = 6%.',
        id: 'Gunakan u = uₙ − a(π − πᵉ) dengan uₙ = 6%, πᵉ = 5%, a = 0.2. (a) Cari u pada π = 3% dan π = 10%. (b) Jika di akhir 2023 ekspektasi inflasi naik ke 6%, hitung ulang pada π = 6%.'
      },
      context: {
        en: 'Based on the Brogentina essay data on the slides.',
        id: 'Berdasarkan data esai Brogentina pada slide.'
      },
      answer: [
        { en: '(a) At π = 3%: u = 6 − 0.2(3 − 5) = 6 − 0.2(−2) = 6 + 0.4 = 6.4%.',
          id: '(a) Pada π = 3%: u = 6 − 0.2(3 − 5) = 6 − 0.2(−2) = 6 + 0.4 = 6.4%.' },
        { en: '(a) At π = 10%: u = 6 − 0.2(10 − 5) = 6 − 0.2(5) = 6 − 1 = 5.0%. So lower inflation ⇒ higher unemployment, higher inflation ⇒ lower unemployment (downward-sloping SRPC).',
          id: '(a) Pada π = 10%: u = 6 − 0.2(10 − 5) = 6 − 0.2(5) = 6 − 1 = 5.0%. Jadi inflasi lebih rendah ⇒ pengangguran lebih tinggi, inflasi lebih tinggi ⇒ pengangguran lebih rendah (SRPC menurun).' },
        { en: '(b) With πᵉ = 6% the SRPC shifts up. At π = 6%: u = 6 − 0.2(6 − 6) = 6 − 0 = 6.0% — exactly the natural rate, because actual = expected inflation.',
          id: '(b) Dengan πᵉ = 6% SRPC bergeser ke atas. Pada π = 6%: u = 6 − 0.2(6 − 6) = 6 − 0 = 6.0% — tepat tingkat alamiah, karena inflasi aktual = ekspektasi.' },
        { en: 'Long-run check: once πᵉ catches up to whatever π actually is, the surprise term is zero and u always returns to uₙ = 6% — the vertical LRPC.',
          id: 'Cek jangka panjang: begitu πᵉ menyusul berapa pun π yang sesungguhnya, suku kejutan menjadi nol dan u selalu kembali ke uₙ = 6% — LRPC yang vertikal.' }
      ],
      tip: {
        en: 'Whenever π = πᵉ in the equation, u = uₙ. That single fact answers most Phillips-curve numerics.',
        id: 'Setiap kali π = πᵉ dalam persamaan, u = uₙ. Satu fakta itu menjawab sebagian besar soal numerik kurva Phillips.'
      }
    },
    {
      type: 'concept',
      q: {
        en: 'According to rational-expectations theory, why might a credible disinflation cost less unemployment than the traditional sacrifice ratio predicts?',
        id: 'Menurut teori ekspektasi rasional, mengapa disinflasi yang kredibel bisa menelan pengangguran lebih sedikit daripada yang diprediksi sacrifice ratio tradisional?'
      },
      answer: [
        { en: 'Rational expectations: people use ALL available information, including announced central-bank policy, to forecast inflation.',
          id: 'Ekspektasi rasional: masyarakat menggunakan SELURUH informasi yang tersedia, termasuk kebijakan bank sentral yang diumumkan, untuk meramalkan inflasi.' },
        { en: 'If the central bank credibly commits to lower inflation and the public believes it, expected inflation falls IMMEDIATELY rather than slowly.',
          id: 'Jika bank sentral berkomitmen secara kredibel untuk inflasi lebih rendah dan publik percaya, ekspektasi inflasi turun SEKETIKA, bukan perlahan.' },
        { en: 'A fall in πᵉ shifts the short-run PC down right away, so inflation can drop with a smaller rise in unemployment.',
          id: 'Turunnya πᵉ menggeser PC jangka pendek ke bawah dengan segera, sehingga inflasi bisa turun dengan kenaikan pengangguran yang lebih kecil.' },
        { en: 'Caveat: the Volcker disinflation (1979–84) still produced ~10% unemployment, so in practice credibility reduces but does not eliminate the cost.',
          id: 'Catatan: disinflasi Volcker (1979–84) tetap menghasilkan pengangguran ~10%, jadi dalam praktik kredibilitas mengurangi tetapi tidak menghilangkan biaya.' }
      ],
      tip: {
        en: 'Key line for essays: the cost of disinflation depends on how QUICKLY inflation expectations adjust.',
        id: 'Kalimat kunci untuk esai: biaya disinflasi tergantung seberapa CEPAT ekspektasi inflasi menyesuaikan.'
      }
    }
  ]
};
