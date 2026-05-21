/* ============================================================================
   PE2 · Week 7 — graphs (Open-economy basics, Mankiw Ch 32). ENGINE-RENDERED.
   Replaces u.graphs. Week 7 is identity-driven (not curve-shifting), so it uses
   the EconChart 'bars' primitive: a gap bracket shows NX = NCO = Y−(C+I+G).
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w7;
  if (!u) return;
  var BLUE = '#0e8fb8', ORANGE = '#d2691e', GREEN = '#15803d';

  // trade surplus: Y > C+I+G → NX>0 and NCO>0
  var IDENTITY = { kind: 'bars', w: 440, h: 290, yMax: 10,
    bars: [ { label: 'Y', value: 8, color: BLUE, caption: 'output' },
            { label: 'C+I+G', value: 6, color: ORANGE, caption: 'domestic spending' } ],
    gap: { from: 0, to: 1, label: 'NX = NCO', color: GREEN } };

  // S vs I → the gap is net capital outflow (NX = NCO = S − I)
  var SI = { kind: 'bars', w: 440, h: 290, yMax: 10,
    bars: [ { label: 'S', value: 7.5, color: BLUE, caption: 'national saving' },
            { label: 'I', value: 5, color: ORANGE, caption: 'domestic investment' } ],
    gap: { from: 0, to: 1, label: 'NCO = NX', color: GREEN } };

  function card(te, ti, he, hi, spec, te2, ti2) {
    return { title: { en: te, id: ti }, html: { en: he, id: hi }, chart: spec,
      htmlAfter: { en: '<div class="tip">' + te2 + '</div>', id: '<div class="tip">' + ti2 + '</div>' } };
  }

  u.graphs = [{
    heading: { en: 'Exam graphs — the open-economy identities', id: 'Grafik ujian — identitas perekonomian terbuka' },
    num: 'G',
    cards: [
      card('Reading NX and NCO off output vs spending', 'Membaca NX dan NCO dari output vs pengeluaran',
        '<p><span class="key">Exam:</span> compare output $Y$ with domestic spending $C+I+G$. The gap is net exports, and it equals net capital outflow: $NX=Y-(C+I+G)=NCO$.</p>',
        '<p><span class="key">Ujian:</span> bandingkan output $Y$ dengan pengeluaran domestik $C+I+G$. Selisihnya adalah ekspor neto, dan ia sama dengan arus modal keluar neto: $NX=Y-(C+I+G)=NCO$.</p>',
        IDENTITY,
        'Y > C+I+G ⇒ trade surplus (NX>0) and net capital OUTFLOW (NCO>0): the country lends abroad. If Y < C+I+G it is the reverse — a deficit and net capital inflow. (UAS 2024.)',
        'Y > C+I+G ⇒ surplus perdagangan (NX>0) dan arus modal KELUAR neto (NCO>0): negara meminjamkan ke luar negeri. Jika Y < C+I+G sebaliknya — defisit dan arus modal masuk neto. (UAS 2024.)'),
      card('Why NX = NCO (saving vs investment)', 'Mengapa NX = NCO (tabungan vs investasi)',
        '<p><span class="key">Exam:</span> rearranging $Y=C+I+G+NX$ with $S=Y-C-G$ gives $S-I=NX$. And $S-I=NCO$. So the saving a country does not invest at home flows abroad.</p>',
        '<p><span class="key">Ujian:</span> menyusun ulang $Y=C+I+G+NX$ dengan $S=Y-C-G$ menghasilkan $S-I=NX$. Dan $S-I=NCO$. Jadi tabungan yang tidak diinvestasikan di dalam negeri mengalir ke luar negeri.</p>',
        SI,
        'S > I ⇒ NCO > 0 ⇒ NX > 0: the excess saving buys foreign assets (lending abroad). This identity, NX = NCO = S − I, is the backbone of all of Week 8. (UAS 2025.)',
        'S > I ⇒ NCO > 0 ⇒ NX > 0: kelebihan tabungan membeli aset asing (meminjamkan ke luar negeri). Identitas ini, NX = NCO = S − I, adalah tulang punggung seluruh Minggu 8. (UAS 2025.)')
    ]
  }];
})();
