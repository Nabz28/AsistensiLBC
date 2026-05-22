/* ============================================================================
   EKINTER · Meeting 11 — Exchange rates & the FX market (International Macro 1)
   Bilingual (EN + ID). Registers on window.EKINTER_WEEKS.m11; assembled by
   ../course.js. Source of truth: lecturer deck krisna.or.id/intecon/meeting11
   + KOM ch. 14–15. Math via $…$ / $$…$$ (KaTeX). Charts are inline EconChart
   specs on a card's `chart` field (engine/econ-chart.js).
   ============================================================================ */
(function () {
  window.EKINTER_WEEKS = window.EKINTER_WEEKS || {};

  /* ---- UIP diagram axes (shared across the panels) -----------------------
     x = expected return measured in rupiah (%, the common currency)
     y = E = the exchange rate (Rp per USD, in thousands)
     Domestic (IDR) deposit return  = a VERTICAL line at R  (no E in it).
     Foreign (USD) deposit return    = a DOWNWARD-sloping line: a higher E today
       means a smaller expected future depreciation, so the Rp return is lower.
     Equilibrium E = where the two lines cross (UIP holds).                   */
  var XR = { min: 3.5, max: 8.5, label: 'Expected return in Rp (%)' };
  var YE = { min: 15.5, max: 17.5, label: 'E (Rp/USD, ’000)' };
  // foreign-return line: passes through equilibrium (5.75, 16.40), sloping down
  function fxLine(shift) {
    var s = shift || 0; // positive = curve shifts RIGHT (more USD return at each E)
    return { id: 'F' + (s ? '2' : '1'), kind: 'line',
             p1: [4.25 + s, 17.4], p2: [7.25 + s, 15.6],
             color: '#c0392b', label: s ? 'R*+(Eᵉ−E)/E ↑' : 'R*+(Eᵉ−E)/E', labelAt: 'end' };
  }

  window.EKINTER_WEEKS.m11 = {
    id: 'm11',
    label: { en: 'Meeting 11', id: 'Pertemuan 11' },
    title: {
      en: 'Exchange rates & the FX market',
      id: 'Nilai tukar & pasar valuta asing'
    },
    subtitle: {
      en: 'The asset approach: E as an asset price, returns on deposits, and uncovered/covered interest parity',
      id: 'Pendekatan aset: E sebagai harga aset, imbal hasil deposito, dan paritas suku bunga tak tertutup/tertutup'
    },

    /* ====================================================================== */
    /* NOTES                                                                   */
    /* ====================================================================== */
    notes: [
      {
        heading: { en: 'Exchange rates: definition & direction', id: 'Nilai tukar: definisi & arah' },
        num: '1',
        cards: [
          {
            title: { en: 'What the exchange rate is', id: 'Apa itu nilai tukar' },
            html: {
              en: `<p>The <span class="key">exchange rate</span> is the price of one currency in
                terms of another. This course uses the <b>direct convention</b>
                $E = \\text{Rp}/\\text{USD}$ — the number of rupiah needed to buy <b>one</b> US dollar.</p>
                <p>So $E = 16{,}400$ means <b>1 USD = Rp 16,400</b>. A bigger $E$ means the dollar costs
                more rupiah.</p>
                <div class="note">Watch the convention. With $E=\\text{Rp}/\\text{USD}$, the dollar is the
                "good" being priced and the rupiah is the "money". A rise in $E$ is bad news for the rupiah.</div>`,
              id: `<p><span class="key">Nilai tukar</span> adalah harga satu mata uang yang dinyatakan dalam
                mata uang lain. Mata kuliah ini memakai <b>konvensi langsung</b>
                $E = \\text{Rp}/\\text{USD}$ — berapa rupiah yang dibutuhkan untuk membeli <b>satu</b> dolar AS.</p>
                <p>Jadi $E = 16{.}400$ berarti <b>1 USD = Rp 16.400</b>. Semakin besar $E$, semakin mahal dolar
                dalam rupiah.</p>
                <div class="note">Perhatikan konvensinya. Dengan $E=\\text{Rp}/\\text{USD}$, dolar adalah "barang"
                yang diberi harga dan rupiah adalah "uangnya". Naiknya $E$ adalah kabar buruk bagi rupiah.</div>`
            }
          },
          {
            title: { en: 'Appreciation vs depreciation', id: 'Apresiasi vs depresiasi' },
            html: {
              en: `<p>Under $E=\\text{Rp}/\\text{USD}$:</p>
                <ul>
                  <li><b>$E$ rises</b> (16,400 → 16,800): it takes more rupiah per dollar →
                  the <span class="key">rupiah depreciates</span>, the dollar appreciates.</li>
                  <li><b>$E$ falls</b> (16,400 → 16,000): fewer rupiah per dollar →
                  the <span class="key">rupiah appreciates</span>, the dollar depreciates.</li>
                </ul>
                <p>Size of the move: $\\dfrac{16{,}800-16{,}400}{16{,}400}\\approx 2.44\\%$ — that is a
                2.44% rupiah depreciation.</p>
                <div class="tip">Memorise the direction: in this convention, <b>up = rupiah weaker</b>.
                Exams love to flip the convention and see if you follow the sign.</div>`,
              id: `<p>Dengan $E=\\text{Rp}/\\text{USD}$:</p>
                <ul>
                  <li><b>$E$ naik</b> (16.400 → 16.800): butuh lebih banyak rupiah per dolar →
                  <span class="key">rupiah terdepresiasi</span>, dolar terapresiasi.</li>
                  <li><b>$E$ turun</b> (16.400 → 16.000): lebih sedikit rupiah per dolar →
                  <span class="key">rupiah terapresiasi</span>, dolar terdepresiasi.</li>
                </ul>
                <p>Besar perubahan: $\\dfrac{16{.}800-16{.}400}{16{.}400}\\approx 2{,}44\\%$ — artinya
                depresiasi rupiah sebesar 2,44%.</p>
                <div class="tip">Hafalkan arahnya: dalam konvensi ini, <b>naik = rupiah melemah</b>.
                Ujian sering membalik konvensi untuk menguji tandanya.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The real exchange rate', id: 'Nilai tukar riil' },
        num: '2',
        cards: [
          {
            title: { en: 'Nominal vs real', id: 'Nominal vs riil' },
            html: {
              en: `<p>The nominal rate $E$ ignores prices. The <span class="key">real exchange rate</span>
                $q$ asks how many baskets of <i>foreign</i> goods one basket of <i>domestic</i> goods buys:</p>
                <div class="formula">$$ q = \\dfrac{E\\cdot P^{*}}{P} $$</div>
                <p>where $P$ = domestic price level, $P^{*}$ = foreign price level, $E=\\text{Rp}/\\text{USD}$.
                A higher $q$ = a <b>real depreciation</b> (home goods are relatively cheaper → more competitive
                exports).</p>
                <div class="note">$q$ moves with <i>both</i> the nominal rate and relative inflation. The rupiah
                can weaken in $E$ yet barely move in $q$ if Indonesian prices rose fast too.</div>`,
              id: `<p>Kurs nominal $E$ mengabaikan harga. <span class="key">Nilai tukar riil</span> $q$
                menanyakan berapa keranjang barang <i>luar negeri</i> yang bisa dibeli oleh satu keranjang
                barang <i>dalam negeri</i>:</p>
                <div class="formula">$$ q = \\dfrac{E\\cdot P^{*}}{P} $$</div>
                <p>dengan $P$ = tingkat harga domestik, $P^{*}$ = tingkat harga luar negeri,
                $E=\\text{Rp}/\\text{USD}$. $q$ yang lebih tinggi = <b>depresiasi riil</b> (barang domestik relatif
                lebih murah → ekspor lebih kompetitif).</p>
                <div class="note">$q$ bergerak mengikuti <i>kurs nominal sekaligus</i> inflasi relatif. Rupiah bisa
                melemah di $E$ tetapi nyaris tak bergerak di $q$ jika harga di Indonesia juga naik cepat.</div>`
            }
          },
          {
            title: { en: 'Effective rates (NEER / REER)', id: 'Kurs efektif (NEER / REER)' },
            html: {
              en: `<p>Against many partners at once, central banks publish a trade-weighted average:
                the <span class="key">nominal effective exchange rate (NEER)</span> and its price-adjusted
                cousin, the <span class="key">real effective exchange rate (REER)</span>. Bank Indonesia
                publishes both monthly.</p>
                <div class="tip">When the question says "the rupiah's competitiveness", reach for $q$ or the
                REER — not the bilateral USD rate alone.</div>`,
              id: `<p>Terhadap banyak mitra dagang sekaligus, bank sentral menerbitkan rata-rata tertimbang
                perdagangan: <span class="key">nilai tukar efektif nominal (NEER)</span> dan turunannya yang
                disesuaikan harga, <span class="key">nilai tukar efektif riil (REER)</span>. Bank Indonesia
                menerbitkan keduanya tiap bulan.</p>
                <div class="tip">Bila soal menyebut "daya saing rupiah", gunakan $q$ atau REER — bukan hanya
                kurs bilateral terhadap USD.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'The FX market & the asset approach', id: 'Pasar valas & pendekatan aset' },
        num: '3',
        cards: [
          {
            title: { en: 'Who trades, and how', id: 'Siapa yang berdagang, dan caranya' },
            html: {
              en: `<p>The FX market is <span class="key">over-the-counter</span> — a global dealer network,
                not a single exchange. Daily turnover is about <b>USD 7.5 trillion</b>, with London the largest hub.
                Participants: commercial banks (market makers), institutional investors, corporates (hedgers),
                central banks, and retail traders.</p>
                <p>Instruments:</p>
                <ul>
                  <li><b>Spot</b> — delivery in two business days (T+2).</li>
                  <li><b>Forward</b> — a rate $F$ locked <i>now</i> for delivery later (1m, 3m, 6m, 12m).</li>
                  <li><b>FX swap</b> — a spot leg plus an offsetting forward leg.</li>
                  <li><b>Futures / options</b> — standardised (exchange-traded) and the right (not obligation) to
                  buy (call) or sell (put).</li>
                </ul>`,
              id: `<p>Pasar valas bersifat <span class="key">over-the-counter</span> — jaringan dealer global,
                bukan satu bursa tunggal. Perputaran harian sekitar <b>USD 7,5 triliun</b>, dengan London sebagai
                pusat terbesar. Peserta: bank komersial (pembentuk pasar), investor institusi, korporasi
                (pelindung nilai), bank sentral, dan trader ritel.</p>
                <p>Instrumen:</p>
                <ul>
                  <li><b>Spot</b> — penyelesaian dua hari kerja (T+2).</li>
                  <li><b>Forward</b> — kurs $F$ dikunci <i>sekarang</i> untuk penyerahan nanti (1b, 3b, 6b, 12b).</li>
                  <li><b>Swap valas</b> — kaki spot ditambah kaki forward yang saling meniadakan.</li>
                  <li><b>Futures / opsi</b> — terstandar (diperdagangkan di bursa) dan hak (bukan kewajiban) untuk
                  membeli (call) atau menjual (put).</li>
                </ul>`
            }
          },
          {
            title: { en: 'E is an asset price', id: 'E adalah harga aset' },
            html: {
              en: `<p>The <span class="key">asset approach</span> treats the exchange rate like a stock price:
                it is set by the demand to hold rupiah-denominated vs dollar-denominated <i>deposits</i>, and
                deposits are held for their <b>expected return</b>. Two rates compete:</p>
                <ul>
                  <li>A 1-year IDR deposit returns $1+R$ rupiah per rupiah.</li>
                  <li>A 1-year USD deposit returns $1+R^{*}$ dollars — but you must convert dollars back to
                  rupiah at the <i>future</i> rate, expected to be $E^{e}$.</li>
                </ul>
                <p>Converting both into rupiah, the USD deposit's expected rupiah return is</p>
                <div class="formula">$$ \\dfrac{E^{e}}{E}\\,(1+R^{*}) \\;\\approx\\; R^{*} + \\dfrac{E^{e}-E}{E}. $$</div>
                <p>The extra term $\\dfrac{E^{e}-E}{E}$ is the <span class="key">expected depreciation</span> of
                the rupiah.</p>`,
              id: `<p><span class="key">Pendekatan aset</span> memperlakukan nilai tukar layaknya harga saham:
                ditentukan oleh permintaan untuk memegang <i>deposito</i> dalam rupiah vs dolar, dan deposito
                dipegang demi <b>imbal hasil yang diharapkan</b>. Dua imbal hasil bersaing:</p>
                <ul>
                  <li>Deposito rupiah 1 tahun memberi $1+R$ rupiah per rupiah.</li>
                  <li>Deposito dolar 1 tahun memberi $1+R^{*}$ dolar — tetapi dolar harus dikonversi kembali ke
                  rupiah pada kurs <i>masa depan</i> yang diperkirakan $E^{e}$.</li>
                </ul>
                <p>Dikonversi ke rupiah, imbal hasil deposito dolar yang diharapkan adalah</p>
                <div class="formula">$$ \\dfrac{E^{e}}{E}\\,(1+R^{*}) \\;\\approx\\; R^{*} + \\dfrac{E^{e}-E}{E}. $$</div>
                <p>Suku tambahan $\\dfrac{E^{e}-E}{E}$ adalah <span class="key">depresiasi rupiah yang diharapkan</span>.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'Uncovered interest parity (UIP)', id: 'Paritas suku bunga tak tertutup (UIP)' },
        num: '4',
        cards: [
          {
            title: { en: 'The equilibrium condition', id: 'Kondisi keseimbangan' },
            html: {
              en: `<p>In equilibrium the two deposits must offer the <b>same expected return in a common
                currency</b> — otherwise everyone would pile into the better one. Setting IDR return = USD
                return in rupiah gives <span class="key">uncovered interest parity</span>:</p>
                <div class="formula">$$ R \\;=\\; R^{*} + \\dfrac{E^{e}-E}{E} $$</div>
                <p>Read it as: <b>local rate = foreign rate + expected depreciation</b>. It is "uncovered"
                because the future conversion at $E^{e}$ is an <i>expectation</i>, not locked in.</p>
                <p>Solving for today's rate (with $E^{e}$ fixed by expectations):</p>
                <div class="formula">$$ E \\;=\\; \\dfrac{E^{e}}{1 + R - R^{*}}. $$</div>
                <div class="tip">A higher domestic rate $R$ → smaller $E$ → <b>stronger rupiah today</b>. This is
                the engine behind every UIP shock below.</div>`,
              id: `<p>Dalam keseimbangan, kedua deposito harus menawarkan <b>imbal hasil harapan yang sama dalam
                mata uang yang sama</b> — kalau tidak, semua orang akan berbondong ke yang lebih baik. Menyamakan
                imbal hasil rupiah = imbal hasil dolar (dalam rupiah) menghasilkan
                <span class="key">paritas suku bunga tak tertutup</span>:</p>
                <div class="formula">$$ R \\;=\\; R^{*} + \\dfrac{E^{e}-E}{E} $$</div>
                <p>Bacanya: <b>suku bunga lokal = suku bunga asing + depresiasi yang diharapkan</b>. Disebut
                "tak tertutup" karena konversi masa depan pada $E^{e}$ masih berupa <i>ekspektasi</i>, belum dikunci.</p>
                <p>Diselesaikan untuk kurs hari ini (dengan $E^{e}$ tetap menurut ekspektasi):</p>
                <div class="formula">$$ E \\;=\\; \\dfrac{E^{e}}{1 + R - R^{*}}. $$</div>
                <div class="tip">Suku bunga domestik $R$ lebih tinggi → $E$ lebih kecil → <b>rupiah lebih kuat
                hari ini</b>. Inilah mesin di balik setiap guncangan UIP di bawah.</div>`
            }
          },
          {
            title: { en: 'Reading the UIP diagram', id: 'Membaca diagram UIP' },
            html: {
              en: `<p>Plot expected return (in rupiah) on the horizontal axis and $E$ on the vertical axis.</p>
                <ul>
                  <li>The <b style="color:#0e8fb8">domestic (IDR) return</b> is a <b>vertical line at $R$</b> —
                  it does not depend on $E$.</li>
                  <li>The <b style="color:#c0392b">foreign (USD) return in rupiah</b> <b>slopes downward</b>: a
                  higher $E$ today leaves less room for the rupiah to fall further toward $E^{e}$, so the expected
                  rupiah return on dollars is lower.</li>
                </ul>
                <p>Equilibrium $E^{*}$ is where they cross — UIP holds exactly there.</p>`,
              id: `<p>Gambarkan imbal hasil harapan (dalam rupiah) di sumbu mendatar dan $E$ di sumbu tegak.</p>
                <ul>
                  <li><b style="color:#0e8fb8">Imbal hasil domestik (IDR)</b> berupa <b>garis tegak di $R$</b> —
                  tidak bergantung pada $E$.</li>
                  <li><b style="color:#c0392b">Imbal hasil asing (USD) dalam rupiah</b> <b>melandai turun</b>: $E$
                  yang lebih tinggi hari ini menyisakan ruang lebih kecil bagi rupiah untuk turun menuju $E^{e}$,
                  sehingga imbal hasil rupiah atas dolar menjadi lebih rendah.</li>
                </ul>
                <p>Keseimbangan $E^{*}$ ada di titik potong keduanya — di situ UIP berlaku persis.</p>`
            }
          }
        ]
      },

      {
        heading: { en: 'The three UIP shocks', id: 'Tiga guncangan UIP' },
        num: '5',
        cards: [
          {
            title: { en: 'How E responds to each shock', id: 'Bagaimana E merespons tiap guncangan' },
            html: {
              en: `<p>With $E^{e}$, $R$ and $R^{*}$ as the moving parts, three shocks shift one line and move
                equilibrium $E$:</p>
                <table>
                  <tr><th>Shock</th><th>Line that moves</th><th>Effect on $E$</th><th>Rupiah</th></tr>
                  <tr><td>① BI raises $R$</td><td>Vertical IDR line shifts <b>right</b></td>
                      <td>$E$ <b>falls</b></td><td>appreciates</td></tr>
                  <tr><td>② Fed raises $R^{*}$</td><td>USD-return line shifts <b>right</b></td>
                      <td>$E$ <b>rises</b></td><td>depreciates</td></tr>
                  <tr><td>③ $E^{e}$ rises</td><td>USD-return line shifts <b>right</b></td>
                      <td>$E$ <b>rises</b></td><td>depreciates</td></tr>
                </table>
                <p>Intuition: ① a higher local rate makes rupiah deposits more attractive → capital flows in →
                rupiah strengthens. ② a higher foreign rate, or ③ a fear of future weakness, makes dollars more
                attractive → rupiah weakens <i>today</i>.</p>
                <div class="note">Shock ③ is self-fulfilling: merely <i>expecting</i> a weaker rupiah moves $E$
                up now. This is why credibility and signalling matter for central banks.</div>`,
              id: `<p>Dengan $E^{e}$, $R$ dan $R^{*}$ sebagai bagian yang bergerak, tiga guncangan menggeser satu
                garis dan memindahkan keseimbangan $E$:</p>
                <table>
                  <tr><th>Guncangan</th><th>Garis yang bergeser</th><th>Efek pada $E$</th><th>Rupiah</th></tr>
                  <tr><td>① BI menaikkan $R$</td><td>Garis tegak IDR bergeser <b>kanan</b></td>
                      <td>$E$ <b>turun</b></td><td>apresiasi</td></tr>
                  <tr><td>② The Fed menaikkan $R^{*}$</td><td>Garis imbal hasil USD bergeser <b>kanan</b></td>
                      <td>$E$ <b>naik</b></td><td>depresiasi</td></tr>
                  <tr><td>③ $E^{e}$ naik</td><td>Garis imbal hasil USD bergeser <b>kanan</b></td>
                      <td>$E$ <b>naik</b></td><td>depresiasi</td></tr>
                </table>
                <p>Intuisi: ① suku bunga lokal lebih tinggi membuat deposito rupiah lebih menarik → modal masuk →
                rupiah menguat. ② suku bunga asing lebih tinggi, atau ③ kekhawatiran pelemahan ke depan, membuat
                dolar lebih menarik → rupiah melemah <i>hari ini</i>.</p>
                <div class="note">Guncangan ③ bersifat memenuhi-diri-sendiri: sekadar <i>mengharapkan</i> rupiah
                melemah sudah menaikkan $E$ sekarang. Itulah mengapa kredibilitas dan sinyal bank sentral penting.</div>`
            }
          },
          {
            title: { en: 'A real episode: the 2013 taper tantrum', id: 'Episode nyata: taper tantrum 2013' },
            html: {
              en: `<p>When the Fed signalled it would slow bond-buying in 2013, US 10-year yields jumped from
                ~1.6% to ~3% (a rise in $R^{*}$). USD/IDR weakened from ~9,700 to ~12,000 — about a 24% rupiah
                depreciation — exactly shock ②. In 2022, Fed hikes pushed USD/IDR from 14,300 (Jan) to 15,700 (Oct).</p>
                <div class="tip">If an exam gives you a Fed-hike or "capital outflow" story, the answer is almost
                always: USD-return line shifts right → $E$ up → rupiah depreciates.</div>`,
              id: `<p>Ketika the Fed memberi sinyal akan memperlambat pembelian obligasi pada 2013, imbal hasil
                UST 10 tahun melonjak dari ~1,6% ke ~3% (kenaikan $R^{*}$). USD/IDR melemah dari ~9.700 ke ~12.000
                — sekitar depresiasi rupiah 24% — persis guncangan ②. Pada 2022, kenaikan suku bunga the Fed
                mendorong USD/IDR dari 14.300 (Jan) ke 15.700 (Okt).</p>
                <div class="tip">Bila ujian memberi cerita "the Fed menaikkan suku bunga" atau "modal keluar",
                jawabannya hampir selalu: garis imbal hasil USD bergeser kanan → $E$ naik → rupiah terdepresiasi.</div>`
            }
          }
        ]
      },

      {
        heading: { en: 'Covered interest parity & the carry trade', id: 'Paritas tertutup & carry trade' },
        num: '6',
        cards: [
          {
            title: { en: 'Covered interest parity (CIP)', id: 'Paritas suku bunga tertutup (CIP)' },
            html: {
              en: `<p>Replace the <i>expected</i> future rate $E^{e}$ with the <i>contracted</i> forward rate $F$
                and the relation becomes an arbitrage-free identity, <span class="key">covered interest
                parity</span>:</p>
                <div class="formula">$$ R \\;=\\; R^{*} + \\dfrac{F-E}{E}
                \\qquad\\Longleftrightarrow\\qquad \\dfrac{F}{E} = \\dfrac{1+R}{1+R^{*}}. $$</div>
                <p>It is "covered" because the forward locks the conversion — there is <b>no exchange-rate
                risk</b>. If $F$ is too high, you borrow USD, convert to Rp, deposit at $R$, and <i>sell forward</i>
                to lock a riskless profit; arbitrage drags $F$ back to its CIP value.</p>
                <div class="note">CIP held tightly until 2008. In the global financial crisis, banks struggling
                for dollar funding paid above-fair forward premiums, opening a persistent "cross-currency basis"
                — CIP holds only when credit markets work.</div>`,
              id: `<p>Ganti kurs masa depan yang <i>diharapkan</i> $E^{e}$ dengan kurs forward yang
                <i>dikontrakkan</i> $F$, maka hubungannya menjadi identitas bebas-arbitrase,
                <span class="key">paritas suku bunga tertutup</span>:</p>
                <div class="formula">$$ R \\;=\\; R^{*} + \\dfrac{F-E}{E}
                \\qquad\\Longleftrightarrow\\qquad \\dfrac{F}{E} = \\dfrac{1+R}{1+R^{*}}. $$</div>
                <p>Disebut "tertutup" karena forward mengunci konversi — <b>tidak ada risiko nilai tukar</b>. Bila
                $F$ terlalu tinggi, kamu pinjam USD, konversi ke Rp, depositokan pada $R$, dan <i>jual forward</i>
                untuk mengunci laba tanpa risiko; arbitrase menarik $F$ kembali ke nilai CIP-nya.</p>
                <div class="note">CIP berlaku ketat hingga 2008. Pada krisis keuangan global, bank yang kesulitan
                pendanaan dolar membayar premi forward di atas wajar, memunculkan "cross-currency basis" yang
                bertahan — CIP hanya berlaku saat pasar kredit berfungsi.</div>`
            }
          },
          {
            title: { en: 'The carry trade', id: 'Carry trade' },
            html: {
              en: `<p>A <span class="key">carry trade</span> borrows a low-yield currency (USD at $R^{*}$) and
                invests in a high-yield one (IDR at $R$), pocketing the rate gap. UIP says the expected profit is
                roughly <i>zero</i> — the rate gap is meant to be eaten by expected depreciation:</p>
                <div class="formula">$$ \\text{expected carry} \\approx R - R^{*} - \\dfrac{E^{e}-E}{E}. $$</div>
                <p>Carry traders bet that the rupiah will depreciate <b>less</b> than UIP implies. It earns small,
                steady gains for long stretches, then loses violently in a sudden depreciation (2013, 2020, 2022).</p>
                <div class="tip">The classic description: "picking up nickels in front of a steamroller" — many
                small wins, then one large loss. High Sharpe in calm times, fat left tail in crises.</div>`,
              id: `<p><span class="key">Carry trade</span> meminjam mata uang berimbal-hasil rendah (USD pada
                $R^{*}$) dan menanamkannya pada yang berimbal-hasil tinggi (IDR pada $R$), mengantongi selisih
                suku bunga. UIP mengatakan laba harapannya kira-kira <i>nol</i> — selisih suku bunga semestinya
                habis dimakan depresiasi yang diharapkan:</p>
                <div class="formula">$$ \\text{carry harapan} \\approx R - R^{*} - \\dfrac{E^{e}-E}{E}. $$</div>
                <p>Pelaku carry bertaruh rupiah akan terdepresiasi <b>lebih kecil</b> daripada implikasi UIP.
                Strategi ini memberi laba kecil yang stabil dalam waktu lama, lalu rugi besar saat depresiasi
                mendadak (2013, 2020, 2022).</p>
                <div class="tip">Gambaran klasiknya: "memungut receh di depan mesin penggilas" — banyak menang
                kecil, lalu satu kekalahan besar. Sharpe tinggi saat tenang, ekor kiri tebal saat krisis.</div>`
            }
          }
        ]
      }
    ],

    /* ====================================================================== */
    /* FORMULAS                                                                */
    /* ====================================================================== */
    formulas: [
      {
        cards: [
          {
            title: { en: 'Real exchange rate', id: 'Nilai tukar riil' },
            html: {
              en: `<div class="formula">$$ q = \\dfrac{E\\cdot P^{*}}{P} $$</div>
                <p>$E=\\text{Rp}/\\text{USD}$, $P$ = domestic prices, $P^{*}$ = foreign prices. Higher $q$ =
                real depreciation = home goods relatively cheaper.</p>`,
              id: `<div class="formula">$$ q = \\dfrac{E\\cdot P^{*}}{P} $$</div>
                <p>$E=\\text{Rp}/\\text{USD}$, $P$ = harga domestik, $P^{*}$ = harga luar negeri. $q$ lebih tinggi =
                depresiasi riil = barang domestik relatif lebih murah.</p>`
            }
          },
          {
            title: { en: 'Expected depreciation', id: 'Depresiasi yang diharapkan' },
            html: {
              en: `<div class="formula">$$ \\dfrac{E^{e}-E}{E} $$</div>
                <p>The expected proportional rise in $E$ (= rupiah weakening) between now and the deposit's
                maturity. It is the bridge between the two deposit returns.</p>`,
              id: `<div class="formula">$$ \\dfrac{E^{e}-E}{E} $$</div>
                <p>Perkiraan kenaikan proporsional $E$ (= pelemahan rupiah) antara sekarang dan jatuh tempo
                deposito. Inilah jembatan antara dua imbal hasil deposito.</p>`
            }
          },
          {
            title: { en: 'Uncovered interest parity (UIP)', id: 'Paritas suku bunga tak tertutup (UIP)' },
            html: {
              en: `<div class="formula">$$ R = R^{*} + \\dfrac{E^{e}-E}{E} $$</div>
                <p>Equilibrium with <b>uncertain</b> future conversion. Local rate = foreign rate + expected
                depreciation. Solve $E = E^{e}/(1+R-R^{*})$.</p>`,
              id: `<div class="formula">$$ R = R^{*} + \\dfrac{E^{e}-E}{E} $$</div>
                <p>Keseimbangan dengan konversi masa depan yang <b>tidak pasti</b>. Suku bunga lokal = suku bunga
                asing + depresiasi yang diharapkan. Selesaikan $E = E^{e}/(1+R-R^{*})$.</p>`
            }
          },
          {
            title: { en: 'Covered interest parity (CIP)', id: 'Paritas suku bunga tertutup (CIP)' },
            html: {
              en: `<div class="formula">$$ R = R^{*} + \\dfrac{F-E}{E} \\quad\\Leftrightarrow\\quad
                \\dfrac{F}{E}=\\dfrac{1+R}{1+R^{*}} $$</div>
                <p>The forward rate $F$ replaces $E^{e}$, so the conversion is <b>locked</b> and the relation is a
                no-arbitrage identity.</p>`,
              id: `<div class="formula">$$ R = R^{*} + \\dfrac{F-E}{E} \\quad\\Leftrightarrow\\quad
                \\dfrac{F}{E}=\\dfrac{1+R}{1+R^{*}} $$</div>
                <p>Kurs forward $F$ menggantikan $E^{e}$, sehingga konversi <b>terkunci</b> dan hubungannya menjadi
                identitas tanpa-arbitrase.</p>`
            }
          }
        ]
      }
    ],

    /* ====================================================================== */
    /* GRAPHS                                                                  */
    /* ====================================================================== */
    graphs: [
      {
        heading: { en: 'The UIP diagram', id: 'Diagram UIP' },
        num: '1',
        cards: [
          {
            title: { en: 'Equilibrium: where the two returns meet', id: 'Keseimbangan: titik temu dua imbal hasil' },
            html: {
              en: `<p>The vertical blue line is the IDR deposit return $R$. The downward-sloping red line is the
                USD deposit's expected return measured in rupiah. They cross at the equilibrium exchange rate
                $E^{*}$ — the level at which UIP holds and no one wants to switch deposits.</p>`,
              id: `<p>Garis biru tegak adalah imbal hasil deposito IDR $R$. Garis merah yang melandai turun adalah
                imbal hasil harapan deposito USD dalam rupiah. Keduanya berpotongan pada nilai tukar keseimbangan
                $E^{*}$ — tingkat di mana UIP berlaku dan tak ada yang ingin berpindah deposito.</p>`
            },
            chart: {
              title: { en: 'UIP equilibrium — E set where IDR & USD returns are equal',
                       id: 'Keseimbangan UIP — E terbentuk saat imbal hasil IDR & USD sama' },
              w: 440, h: 320, x: XR, y: YE,
              curves: [
                { id: 'R', kind: 'vline', x: 5.75, color: '#0e8fb8', label: 'R (IDR return)' },
                fxLine(0)
              ],
              points: [
                { on: ['R', 'F1'], label: 'E*', dot: true, guideY: 'E*', guideX: 'R' }
              ]
            }
          }
        ]
      },
      {
        heading: { en: 'The three shocks', id: 'Tiga guncangan' },
        num: '2',
        cards: [
          {
            title: { en: 'How equilibrium E moves', id: 'Bagaimana keseimbangan E bergerak' },
            html: {
              en: `<p>Three small panels, one per shock. ① BI raises $R$: the vertical IDR line slides right and
                $E$ <b>falls</b> (rupiah appreciates). ② The Fed raises $R^{*}$: the USD-return line slides right
                and $E$ <b>rises</b> (rupiah depreciates). ③ $E^{e}$ rises: the USD-return line again slides right
                and $E$ <b>rises</b> (rupiah depreciates). The arrow shows the shifting curve in each panel.</p>`,
              id: `<p>Tiga panel kecil, satu per guncangan. ① BI menaikkan $R$: garis tegak IDR bergeser ke kanan
                dan $E$ <b>turun</b> (rupiah apresiasi). ② The Fed menaikkan $R^{*}$: garis imbal hasil USD bergeser
                ke kanan dan $E$ <b>naik</b> (rupiah depresiasi). ③ $E^{e}$ naik: garis imbal hasil USD kembali
                bergeser ke kanan dan $E$ <b>naik</b> (rupiah depresiasi). Panah menunjukkan kurva yang bergeser di
                tiap panel.</p>`
            },
            chart: {
              panels: [
                {
                  title: { en: '① BI raises R → E falls (Rp appreciates)',
                           id: '① BI menaikkan R → E turun (Rp apresiasi)' },
                  w: 300, h: 260, x: XR, y: YE,
                  curves: [
                    { id: 'R1', kind: 'vline', x: 5.0, color: '#0e8fb8', label: 'R₁', dash: true },
                    { id: 'R2', kind: 'vline', x: 6.5, color: '#0e8fb8', label: 'R₂' },
                    fxLine(0)
                  ],
                  points: [
                    { on: ['R1', 'F1'], label: 'E₁', dot: true, guideY: 'E₁' },
                    { on: ['R2', 'F1'], label: 'E₂', dot: true, guideY: 'E₂' }
                  ],
                  shifts: [ { from: 'R1', to: 'R2' } ]
                },
                {
                  title: { en: '② Fed raises R* → E rises (Rp depreciates)',
                           id: '② The Fed menaikkan R* → E naik (Rp depresiasi)' },
                  w: 300, h: 260, x: XR, y: YE,
                  curves: [
                    { id: 'R', kind: 'vline', x: 5.75, color: '#0e8fb8', label: 'R' },
                    { id: 'F1', kind: 'line', p1: [4.25, 17.4], p2: [7.25, 15.6], color: '#c0392b', label: 'USD₁', dash: true, labelAt: 'end' },
                    { id: 'F2', kind: 'line', p1: [5.75, 17.4], p2: [8.75, 15.6], color: '#c0392b', label: 'USD₂', labelAt: 'end' }
                  ],
                  points: [
                    { on: ['R', 'F1'], label: 'E₁', dot: true, guideY: 'E₁' },
                    { on: ['R', 'F2'], label: 'E₂', dot: true, guideY: 'E₂' }
                  ],
                  shifts: [ { from: 'F1', to: 'F2' } ]
                },
                {
                  title: { en: '③ Eᵉ rises → E rises (Rp depreciates)',
                           id: '③ Eᵉ naik → E naik (Rp depresiasi)' },
                  w: 300, h: 260, x: XR, y: YE,
                  curves: [
                    { id: 'R', kind: 'vline', x: 5.75, color: '#0e8fb8', label: 'R' },
                    { id: 'F1', kind: 'line', p1: [4.25, 17.4], p2: [7.25, 15.6], color: '#c0392b', label: 'USD₁', dash: true, labelAt: 'end' },
                    { id: 'F2', kind: 'line', p1: [5.75, 17.4], p2: [8.75, 15.6], color: '#c0392b', label: 'USD₂', labelAt: 'end' }
                  ],
                  points: [
                    { on: ['R', 'F1'], label: 'E₁', dot: true, guideY: 'E₁' },
                    { on: ['R', 'F2'], label: 'E₂', dot: true, guideY: 'E₂' }
                  ],
                  shifts: [ { from: 'F1', to: 'F2' } ]
                }
              ]
            }
          }
        ]
      }
    ],

    /* ====================================================================== */
    /* QUIZ                                                                    */
    /* ====================================================================== */
    quiz: [
      {
        type: 'concept',
        q: { en: 'Under the convention $E=\\text{Rp}/\\text{USD}$, the rate moves from 16,400 to 16,800. Did the rupiah appreciate or depreciate, and by how much?',
             id: 'Dengan konvensi $E=\\text{Rp}/\\text{USD}$, kurs bergerak dari 16.400 ke 16.800. Apakah rupiah terapresiasi atau terdepresiasi, dan berapa besarnya?' },
        context: { en: 'Mind the convention and the sign.', id: 'Perhatikan konvensi dan tandanya.' },
        answer: [
          { en: '$E$ <b>rose</b>, so it now takes more rupiah to buy one dollar → the <b>rupiah depreciated</b> (the dollar appreciated).',
            id: '$E$ <b>naik</b>, jadi sekarang butuh lebih banyak rupiah untuk membeli satu dolar → <b>rupiah terdepresiasi</b> (dolar terapresiasi).' },
          { en: 'Size: $\\dfrac{16{,}800-16{,}400}{16{,}400}=\\dfrac{400}{16{,}400}\\approx 0.0244 = 2.44\\%$.',
            id: 'Besarnya: $\\dfrac{16{.}800-16{.}400}{16{.}400}=\\dfrac{400}{16{.}400}\\approx 0{,}0244 = 2{,}44\\%$.' },
          { en: 'Answer: a <b>2.44% depreciation</b> of the rupiah.',
            id: 'Jawaban: <b>depresiasi 2,44%</b> rupiah.' }
        ],
        tip: { en: 'In this convention, E up = rupiah weaker. Always state the percentage relative to the starting E.',
               id: 'Dalam konvensi ini, E naik = rupiah lemah. Selalu nyatakan persentase relatif terhadap E awal.' }
      },

      {
        type: 'quant',
        q: { en: 'UIP problem. $R = 5.75\\%$, $R^{*} = 4.50\\%$, $E = 16{,}400$, $E^{e} = 16{,}800$. Compare the two deposit returns (in rupiah). Which deposit is more attractive, and what happens to $E$?',
             id: 'Soal UIP. $R = 5{,}75\\%$, $R^{*} = 4{,}50\\%$, $E = 16{.}400$, $E^{e} = 16{.}800$. Bandingkan kedua imbal hasil deposito (dalam rupiah). Deposito mana yang lebih menarik, dan apa yang terjadi pada $E$?' },
        context: { en: 'Use $R^{*}+\\dfrac{E^{e}-E}{E}$ for the USD return measured in rupiah.',
                   id: 'Pakai $R^{*}+\\dfrac{E^{e}-E}{E}$ untuk imbal hasil USD yang diukur dalam rupiah.' },
        answer: [
          { en: '<b>IDR deposit return:</b> simply $R = 5.75\\%$.',
            id: '<b>Imbal hasil deposito IDR:</b> cukup $R = 5{,}75\\%$.' },
          { en: '<b>Expected depreciation:</b> $\\dfrac{E^{e}-E}{E}=\\dfrac{16{,}800-16{,}400}{16{,}400}\\approx 2.44\\%$.',
            id: '<b>Depresiasi yang diharapkan:</b> $\\dfrac{E^{e}-E}{E}=\\dfrac{16{.}800-16{.}400}{16{.}400}\\approx 2{,}44\\%$.' },
          { en: '<b>USD deposit return in rupiah:</b> $R^{*}+\\dfrac{E^{e}-E}{E}=4.50\\%+2.44\\%=6.94\\%$.',
            id: '<b>Imbal hasil deposito USD dalam rupiah:</b> $R^{*}+\\dfrac{E^{e}-E}{E}=4{,}50\\%+2{,}44\\%=6{,}94\\%$.' },
          { en: 'Since $6.94\\% > 5.75\\%$, the <b>USD deposit is more attractive</b>. UIP does not hold.',
            id: 'Karena $6{,}94\\% > 5{,}75\\%$, <b>deposito USD lebih menarik</b>. UIP belum berlaku.' },
          { en: 'Investors buy dollars now → demand for USD rises → <b>$E$ rises</b> (rupiah depreciates) until the USD return falls back to 5.75% and UIP is restored.',
            id: 'Investor membeli dolar sekarang → permintaan USD naik → <b>$E$ naik</b> (rupiah depresiasi) sampai imbal hasil USD turun kembali ke 5,75% dan UIP pulih.' }
        ],
        tip: { en: 'A return gap is not equilibrium — it tells you which way E will move to close the gap.',
               id: 'Selisih imbal hasil bukan keseimbangan — ia memberitahu ke arah mana E akan bergerak untuk menutup selisih.' }
      },

      {
        type: 'scenario',
        q: { en: 'Bank Indonesia raises the policy rate while the Fed holds. Using the UIP diagram, which line moves, which way, and what happens to the rupiah today?',
             id: 'Bank Indonesia menaikkan suku bunga acuan sementara the Fed menahan. Memakai diagram UIP, garis mana yang bergeser, ke arah mana, dan apa yang terjadi pada rupiah hari ini?' },
        context: { en: 'Hold $R^{*}$ and $E^{e}$ fixed.', id: 'Tahan $R^{*}$ dan $E^{e}$ tetap.' },
        answer: [
          { en: 'A higher $R$ shifts the <b>vertical IDR-return line to the right</b>.',
            id: 'Kenaikan $R$ menggeser <b>garis tegak imbal hasil IDR ke kanan</b>.' },
          { en: 'It now crosses the downward-sloping USD-return line at a <b>lower $E$</b>.',
            id: 'Kini ia memotong garis imbal hasil USD yang melandai turun pada <b>$E$ yang lebih rendah</b>.' },
          { en: 'So <b>$E$ falls → the rupiah appreciates</b> today: higher local yields pull in capital.',
            id: 'Maka <b>$E$ turun → rupiah terapresiasi</b> hari ini: imbal hasil lokal yang lebih tinggi menarik modal masuk.' },
          { en: 'Check with the formula: $E = E^{e}/(1+R-R^{*})$ — a bigger $R$ enlarges the denominator, shrinking $E$.',
            id: 'Cek dengan rumus: $E = E^{e}/(1+R-R^{*})$ — $R$ yang lebih besar memperbesar penyebut, mengecilkan $E$.' }
        ],
        tip: { en: 'Shock ① is the only one that strengthens the rupiah. Shocks ② (R*↑) and ③ (Eᵉ↑) both weaken it.',
               id: 'Guncangan ① satu-satunya yang menguatkan rupiah. Guncangan ② (R*↑) dan ③ (Eᵉ↑) sama-sama melemahkannya.' }
      },

      {
        type: 'quant',
        q: { en: 'CIP / carry trade. $R = 6.50\\%$ (IDR), $R^{*} = 4.50\\%$ (USD), spot $E = 16{,}400$. (a) What is the no-arbitrage 1-year forward $F$? (b) A trader borrows USD, invests in IDR, and is unhedged; the rupiah ends the year at 16,400. Roughly what is the carry profit, and what would wipe it out?',
             id: 'CIP / carry trade. $R = 6{,}50\\%$ (IDR), $R^{*} = 4{,}50\\%$ (USD), spot $E = 16{.}400$. (a) Berapa kurs forward 1 tahun bebas-arbitrase $F$? (b) Seorang trader meminjam USD, menanamkannya dalam IDR, tanpa lindung nilai; rupiah berakhir tahun di 16.400. Kira-kira berapa laba carry-nya, dan apa yang bisa menghapusnya?' },
        context: { en: 'Use $F = E\\,\\dfrac{1+R}{1+R^{*}}$ for CIP, and $R-R^{*}$ for the unhedged carry.',
                   id: 'Pakai $F = E\\,\\dfrac{1+R}{1+R^{*}}$ untuk CIP, dan $R-R^{*}$ untuk carry tanpa lindung nilai.' },
        answer: [
          { en: '<b>(a)</b> CIP forward: $F = E\\dfrac{1+R}{1+R^{*}} = 16{,}400\\times\\dfrac{1.0650}{1.0450}\\approx 16{,}400\\times 1.01914 \\approx 16{,}714$.',
            id: '<b>(a)</b> Forward CIP: $F = E\\dfrac{1+R}{1+R^{*}} = 16{.}400\\times\\dfrac{1{,}0650}{1{,}0450}\\approx 16{.}400\\times 1{,}01914 \\approx 16{.}714$.' },
          { en: 'So the dollar trades at a forward <b>premium</b> (≈1.9%) because IDR rates exceed USD rates — exactly the CIP rate gap.',
            id: 'Jadi dolar diperdagangkan dengan <b>premi</b> forward (≈1,9%) karena suku bunga IDR melebihi USD — persis selisih CIP.' },
          { en: '<b>(b)</b> If $E$ stays at 16,400 (no depreciation), the unhedged carry earns the full rate gap: $R-R^{*}=6.50\\%-4.50\\%=2.00\\%$ per dollar borrowed.',
            id: '<b>(b)</b> Bila $E$ tetap 16.400 (tanpa depresiasi), carry tanpa lindung nilai meraih seluruh selisih: $R-R^{*}=6{,}50\\%-4{,}50\\%=2{,}00\\%$ per dolar yang dipinjam.' },
          { en: 'What wipes it out: a rupiah depreciation. A move to ~16,728 (≈2.0%) erases the gap; anything beyond is a loss. UIP says the <i>expected</i> carry is about zero — you are paid for bearing depreciation risk.',
            id: 'Yang menghapusnya: depresiasi rupiah. Pergerakan ke ~16.728 (≈2,0%) menghapus selisih; di atasnya menjadi rugi. UIP mengatakan carry yang <i>diharapkan</i> mendekati nol — kamu dibayar untuk menanggung risiko depresiasi.' }
        ],
        tip: { en: 'CIP forward ≈ spot × (1+R)/(1+R*). The higher-rate currency always trades at a forward discount; the carry profit is exactly that discount you are betting against.',
               id: 'Forward CIP ≈ spot × (1+R)/(1+R*). Mata uang bersuku-bunga lebih tinggi selalu diperdagangkan dengan diskon forward; laba carry persis diskon itu yang kamu lawan.' }
      },

      {
        type: 'scenario',
        q: { en: 'Markets suddenly expect a weaker rupiah next year ($E^{e}$ jumps), with $R$ and $R^{*}$ unchanged. Trace the effect on $E$ today and explain why it can be "self-fulfilling".',
             id: 'Pasar tiba-tiba memperkirakan rupiah lebih lemah tahun depan ($E^{e}$ melonjak), dengan $R$ dan $R^{*}$ tetap. Telusuri efeknya pada $E$ hari ini dan jelaskan mengapa bisa "memenuhi diri sendiri".' },
        context: { en: 'Use UIP and the diagram.', id: 'Pakai UIP dan diagramnya.' },
        answer: [
          { en: 'A higher $E^{e}$ raises the expected depreciation $\\dfrac{E^{e}-E}{E}$, so the USD return $R^{*}+\\dfrac{E^{e}-E}{E}$ is higher at every $E$ → the <b>USD-return line shifts right</b>.',
            id: '$E^{e}$ yang lebih tinggi menaikkan depresiasi harapan $\\dfrac{E^{e}-E}{E}$, sehingga imbal hasil USD $R^{*}+\\dfrac{E^{e}-E}{E}$ lebih tinggi pada setiap $E$ → <b>garis imbal hasil USD bergeser kanan</b>.' },
          { en: 'It crosses the fixed vertical $R$ line at a <b>higher $E$</b> → <b>$E$ rises today → rupiah depreciates now</b>, even though nothing has actually happened yet.',
            id: 'Ia memotong garis tegak $R$ yang tetap pada <b>$E$ yang lebih tinggi</b> → <b>$E$ naik hari ini → rupiah terdepresiasi sekarang</b>, padahal belum ada yang benar-benar terjadi.' },
          { en: '<b>Self-fulfilling:</b> the mere expectation of future weakness pushes traders to buy dollars now, which weakens the rupiah immediately — the expectation makes itself partly come true.',
            id: '<b>Memenuhi diri sendiri:</b> ekspektasi pelemahan ke depan saja mendorong trader membeli dolar sekarang, yang langsung melemahkan rupiah — ekspektasi itu sebagian mewujudkan dirinya sendiri.' }
        ],
        tip: { en: 'Shocks ② and ③ both shift the USD line right and push E up; the difference is the trigger (foreign rate vs expectations).',
               id: 'Guncangan ② dan ③ sama-sama menggeser garis USD ke kanan dan menaikkan E; bedanya hanya pemicunya (suku bunga asing vs ekspektasi).' }
      }
    ]
  };
})();
