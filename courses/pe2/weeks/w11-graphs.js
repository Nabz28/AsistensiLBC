/* ============================================================================
   PE2 · Week 11 — DEEPER exam-likely graph scenarios (Phillips curve)
   Appends to window.PE2_WEEKS.w11.graphs (base defined in weeks/w11.js).
   Loaded AFTER w11.js via index.html. Bilingual leaves { en, id }; LaTeX shared.
   Self-contained inline SVG — no chartId / charting library.
   Sources: UAS 2019, 2022, 2023, 2024, 2025.
   ============================================================================ */
(function () {
  var u = (window.PE2_WEEKS || {}).w11;
  if (!u) return;
  u.graphs = (u.graphs || []).concat([

    /* ====================================================================== */
    /* SECTION EX1 — full A→B→C exam walkthroughs                            */
    /* ====================================================================== */
    {
      heading: {
        en: 'Exam walkthroughs — A→B→C on the Phillips curve',
        id: 'Telaah ujian — A→B→C pada kurva Phillips'
      },
      num: 'EX1',
      cards: [

        /* ---- CARD 1: Expansionary policy + paired AD–AS panel ------------- */
        {
          title: {
            en: 'Expansionary policy: up-left along SRPC, then back to u_n',
            id: 'Kebijakan ekspansif: kiri-atas di SRPC, lalu kembali ke u_n'
          },
          html: {
            en: `<p><b>Exam scenario:</b> the central bank prints money (or the government runs an expansionary budget). Aggregate demand shifts right. Trace the short run <i>and</i> the long run on a paired AD–AS / Phillips diagram. <span class="key">(UAS 2019, 2022, 2024, 2025)</span></p>
<svg viewBox="0 0 470 300" width="100%" style="max-width:470px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex1a" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <!-- LEFT panel: AD-AS -->
  <text x="118" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">AD&#8211;AS</text>
  <line x1="40" y1="250" x2="220" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="40" y1="250" x2="40" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="130" y="276" font-size="10" text-anchor="middle" fill="#334155">Output (Y)</text>
  <text x="20" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 20 145)">Price (P)</text>
  <line x1="150" y1="250" x2="150" y2="50" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="154" y="60" font-size="9" fill="#7c3aed">LRAS</text>
  <line x1="55" y1="235" x2="205" y2="70" stroke="#16a34a" stroke-width="1.6"/>
  <text x="186" y="78" font-size="9" fill="#16a34a">SRAS</text>
  <line x1="55" y1="95" x2="200" y2="240" stroke="#0e8fb8" stroke-width="1.6"/>
  <text x="58" y="92" font-size="9" fill="#0e8fb8">AD&#8321;</text>
  <line x1="95" y1="65" x2="215" y2="200" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="200" y="195" font-size="9" fill="#1d4ed8">AD&#8322;</text>
  <circle cx="150" cy="172" r="3.2" fill="#b91c1c"/><text x="120" y="168" font-size="9" fill="#b91c1c">A</text>
  <circle cx="178" cy="138" r="3.2" fill="#b91c1c"/><text x="182" y="135" font-size="9" fill="#b91c1c">B</text>
  <!-- RIGHT panel: Phillips -->
  <text x="350" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">Phillips</text>
  <line x1="262" y1="250" x2="455" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="262" y1="250" x2="262" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="360" y="276" font-size="10" text-anchor="middle" fill="#334155">Unemployment (u)</text>
  <text x="244" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 244 145)">Inflation (&#960;)</text>
  <line x1="360" y1="250" x2="360" y2="45" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="364" y="55" font-size="9" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="350" y="245" font-size="9" fill="#7c3aed">u&#8345;</text>
  <path d="M300 95 C340 130, 360 150, 430 215" fill="none" stroke="#0e8fb8" stroke-width="1.8"/>
  <text x="408" y="212" font-size="9" fill="#0e8fb8" font-weight="bold">SRPC&#8321;</text>
  <path d="M300 60 C340 95, 360 115, 430 180" fill="none" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="5 3"/>
  <text x="300" y="55" font-size="9" fill="#1d4ed8" font-weight="bold">SRPC&#8322;</text>
  <circle cx="360" cy="150" r="3.2" fill="#b91c1c"/><text x="364" y="148" font-size="9" fill="#b91c1c">A</text>
  <circle cx="322" cy="125" r="3.2" fill="#b91c1c"/><text x="300" y="120" font-size="9" fill="#b91c1c">B</text>
  <circle cx="360" cy="115" r="3.2" fill="#b91c1c"/><text x="364" y="112" font-size="9" fill="#b91c1c">C</text>
  <path d="M353 146 L329 128" stroke="#475569" stroke-width="1.1" marker-end="url(#ex1a)"/>
  <path d="M329 124 L353 117" stroke="#475569" stroke-width="1.1" marker-end="url(#ex1a)"/>
</svg>
<p><b>A&#8594;B (short run):</b> AD&#8321;&#8594;AD&#8322; pushes output above natural and the economy moves <b>up-left along SRPC&#8321;</b> — inflation &#8593;, unemployment &#8595; below $u_n$ ($\\pi > \\pi^e$).</p>
<p><b>B&#8594;C (long run):</b> expectations adjust ($\\pi^e\\uparrow$), SRPC shifts up to SRPC&#8322;, and the economy returns to $u_n$ on the vertical LRPC — only inflation is permanently higher.</p>
<div class="formula">$$ u = u_n - a\\,(\\pi - \\pi^e) $$</div>
<div class="tip">📝 <b>SR:</b> u&#8595; &#960;&#8593; along SRPC&#8321;. <b>LR:</b> back to $u_n$ at higher &#960; (vertical LRPC). The AD-AS panel shows the identical event: AD right &#8594; B (Y up), then SRAS left &#8594; back to LRAS.</div>
<div class="note">⚠️ Common mistake: treating A&#8594;B as permanent. The trade-off only holds while inflation is a <i>surprise</i>; once $\\pi^e$ catches up you are back at $u_n$.</div>`,
            id: `<p><b>Skenario ujian:</b> bank sentral mencetak uang (atau pemerintah menjalankan anggaran ekspansif). Permintaan agregat bergeser ke kanan. Telusuri jangka pendek <i>dan</i> jangka panjang pada diagram berpasangan AD–AS / Phillips. <span class="key">(UAS 2019, 2022, 2024, 2025)</span></p>
<svg viewBox="0 0 470 300" width="100%" style="max-width:470px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex1aid" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <text x="118" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">AD&#8211;AS</text>
  <line x1="40" y1="250" x2="220" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="40" y1="250" x2="40" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="130" y="276" font-size="10" text-anchor="middle" fill="#334155">Output (Y)</text>
  <text x="20" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 20 145)">Harga (P)</text>
  <line x1="150" y1="250" x2="150" y2="50" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="154" y="60" font-size="9" fill="#7c3aed">LRAS</text>
  <line x1="55" y1="235" x2="205" y2="70" stroke="#16a34a" stroke-width="1.6"/>
  <text x="186" y="78" font-size="9" fill="#16a34a">SRAS</text>
  <line x1="55" y1="95" x2="200" y2="240" stroke="#0e8fb8" stroke-width="1.6"/>
  <text x="58" y="92" font-size="9" fill="#0e8fb8">AD&#8321;</text>
  <line x1="95" y1="65" x2="215" y2="200" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="200" y="195" font-size="9" fill="#1d4ed8">AD&#8322;</text>
  <circle cx="150" cy="172" r="3.2" fill="#b91c1c"/><text x="120" y="168" font-size="9" fill="#b91c1c">A</text>
  <circle cx="178" cy="138" r="3.2" fill="#b91c1c"/><text x="182" y="135" font-size="9" fill="#b91c1c">B</text>
  <text x="350" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">Phillips</text>
  <line x1="262" y1="250" x2="455" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="262" y1="250" x2="262" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="360" y="276" font-size="10" text-anchor="middle" fill="#334155">Pengangguran (u)</text>
  <text x="244" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 244 145)">Inflasi (&#960;)</text>
  <line x1="360" y1="250" x2="360" y2="45" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="364" y="55" font-size="9" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="350" y="245" font-size="9" fill="#7c3aed">u&#8345;</text>
  <path d="M300 95 C340 130, 360 150, 430 215" fill="none" stroke="#0e8fb8" stroke-width="1.8"/>
  <text x="408" y="212" font-size="9" fill="#0e8fb8" font-weight="bold">SRPC&#8321;</text>
  <path d="M300 60 C340 95, 360 115, 430 180" fill="none" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="5 3"/>
  <text x="300" y="55" font-size="9" fill="#1d4ed8" font-weight="bold">SRPC&#8322;</text>
  <circle cx="360" cy="150" r="3.2" fill="#b91c1c"/><text x="364" y="148" font-size="9" fill="#b91c1c">A</text>
  <circle cx="322" cy="125" r="3.2" fill="#b91c1c"/><text x="300" y="120" font-size="9" fill="#b91c1c">B</text>
  <circle cx="360" cy="115" r="3.2" fill="#b91c1c"/><text x="364" y="112" font-size="9" fill="#b91c1c">C</text>
  <path d="M353 146 L329 128" stroke="#475569" stroke-width="1.1" marker-end="url(#ex1aid)"/>
  <path d="M329 124 L353 117" stroke="#475569" stroke-width="1.1" marker-end="url(#ex1aid)"/>
</svg>
<p><b>A&#8594;B (jangka pendek):</b> AD&#8321;&#8594;AD&#8322; mendorong output di atas alamiah dan ekonomi bergerak <b>kiri-atas di sepanjang SRPC&#8321;</b> — inflasi &#8593;, pengangguran &#8595; di bawah $u_n$ ($\\pi > \\pi^e$).</p>
<p><b>B&#8594;C (jangka panjang):</b> ekspektasi menyesuaikan ($\\pi^e\\uparrow$), SRPC bergeser ke atas menjadi SRPC&#8322;, dan ekonomi kembali ke $u_n$ pada LRPC vertikal — hanya inflasi yang permanen lebih tinggi.</p>
<div class="formula">$$ u = u_n - a\\,(\\pi - \\pi^e) $$</div>
<div class="tip">📝 <b>JP:</b> u&#8595; &#960;&#8593; di sepanjang SRPC&#8321;. <b>JPj:</b> kembali ke $u_n$ pada &#960; lebih tinggi (LRPC vertikal). Panel AD-AS menunjukkan peristiwa yang sama: AD ke kanan &#8594; B (Y naik), lalu SRAS ke kiri &#8594; kembali ke LRAS.</div>
<div class="note">⚠️ Kesalahan umum: menganggap A&#8594;B permanen. Trade-off hanya berlaku selama inflasi merupakan <i>kejutan</i>; begitu $\\pi^e$ menyusul, ekonomi kembali ke $u_n$.</div>`
          }
        },

        /* ---- CARD 2: Expectations-augmented shift (both directions) ------- */
        {
          title: {
            en: 'Expected inflation shifts the SRPC: up vs. down',
            id: 'Ekspektasi inflasi menggeser SRPC: ke atas vs. ke bawah'
          },
          html: {
            en: `<p><b>Exam scenario:</b> nothing happens to AD — what changes is <i>expected</i> inflation $\\pi^e$. A rise in $E(\\pi)$ (e.g. 5%&#8594;7%) shifts the whole SRPC <b>up/right</b>; a credible disinflation / slower money growth shifts it <b>down/left</b>. The LRPC stays fixed at $u_n$. <span class="key">(UAS 2023, 2025)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex2a" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <line x1="55" y1="255" x2="445" y2="255" stroke="#475569" stroke-width="1.5"/>
  <line x1="55" y1="255" x2="55" y2="25" stroke="#475569" stroke-width="1.5"/>
  <text x="250" y="285" font-size="11" text-anchor="middle" fill="#334155">Unemployment rate (u)</text>
  <text x="22" y="140" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 22 140)">Inflation (&#960;)</text>
  <line x1="250" y1="255" x2="250" y2="40" stroke="#7c3aed" stroke-width="2"/>
  <text x="256" y="50" font-size="10" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="232" y="250" font-size="9" fill="#7c3aed">u&#8345;</text>
  <!-- SRPC up (high E(pi)) -->
  <path d="M150 70 C220 105, 250 125, 360 180" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="150" y="64" font-size="10" fill="#dc2626" font-weight="bold">SRPC&#8594; E(&#960;)&#8593;</text>
  <!-- SRPC base -->
  <path d="M150 120 C220 155, 250 175, 360 230" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="335" y="245" font-size="10" fill="#0e8fb8" font-weight="bold">SRPC&#8320;</text>
  <!-- SRPC down (low E(pi)) -->
  <path d="M150 165 C220 200, 250 218, 348 255" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="118" y="200" font-size="10" fill="#16a34a" font-weight="bold">SRPC&#8595; E(&#960;)&#8595;</text>
  <circle cx="250" cy="175" r="3.4" fill="#b91c1c"/><text x="256" y="172" font-size="9" fill="#b91c1c">at u&#8345;</text>
  <!-- shift arrows -->
  <path d="M270 168 L290 140" stroke="#dc2626" stroke-width="1.2" marker-end="url(#ex2a)"/>
  <path d="M270 182 L288 208" stroke="#16a34a" stroke-width="1.2" marker-end="url(#ex2a)"/>
</svg>
<p>At the natural rate $u_n$, the only thing that moves with $\\pi^e$ is the <b>height</b> of the SRPC: higher expected inflation = higher actual inflation needed just to keep $u = u_n$ (a worse trade-off); lower expectations = a better one.</p>
<div class="formula">$$ \\pi = \\pi^e - a\\,(u - u_n) \\;\\Rightarrow\\; \\text{SRPC intercept rises with } \\pi^e $$</div>
<div class="tip">📝 $E(\\pi)\\uparrow$ &#8594; SRPC shifts <b>up/right</b> (worse menu). Slower money growth / credible disinflation &#8594; $E(\\pi)\\downarrow$ &#8594; SRPC shifts <b>down/left</b>.</div>
<div class="note">⚠️ Common mistake: confusing a <i>shift</i> of SRPC (driven by $\\pi^e$ or supply shocks) with a <i>movement along</i> it (driven by AD). Expectations move the curve, not a point on it.</div>`,
            id: `<p><b>Skenario ujian:</b> AD tidak berubah — yang berubah adalah inflasi yang <i>diperkirakan</i> $\\pi^e$. Kenaikan $E(\\pi)$ (mis. 5%&#8594;7%) menggeser seluruh SRPC <b>ke atas/kanan</b>; disinflasi kredibel / pertumbuhan uang yang lebih lambat menggesernya <b>ke bawah/kiri</b>. LRPC tetap di $u_n$. <span class="key">(UAS 2023, 2025)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex2aid" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <line x1="55" y1="255" x2="445" y2="255" stroke="#475569" stroke-width="1.5"/>
  <line x1="55" y1="255" x2="55" y2="25" stroke="#475569" stroke-width="1.5"/>
  <text x="250" y="285" font-size="11" text-anchor="middle" fill="#334155">Tingkat pengangguran (u)</text>
  <text x="22" y="140" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 22 140)">Inflasi (&#960;)</text>
  <line x1="250" y1="255" x2="250" y2="40" stroke="#7c3aed" stroke-width="2"/>
  <text x="256" y="50" font-size="10" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="232" y="250" font-size="9" fill="#7c3aed">u&#8345;</text>
  <path d="M150 70 C220 105, 250 125, 360 180" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="150" y="64" font-size="10" fill="#dc2626" font-weight="bold">SRPC&#8594; E(&#960;)&#8593;</text>
  <path d="M150 120 C220 155, 250 175, 360 230" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="335" y="245" font-size="10" fill="#0e8fb8" font-weight="bold">SRPC&#8320;</text>
  <path d="M150 165 C220 200, 250 218, 348 255" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="118" y="200" font-size="10" fill="#16a34a" font-weight="bold">SRPC&#8595; E(&#960;)&#8595;</text>
  <circle cx="250" cy="175" r="3.4" fill="#b91c1c"/><text x="256" y="172" font-size="9" fill="#b91c1c">di u&#8345;</text>
  <path d="M270 168 L290 140" stroke="#dc2626" stroke-width="1.2" marker-end="url(#ex2aid)"/>
  <path d="M270 182 L288 208" stroke="#16a34a" stroke-width="1.2" marker-end="url(#ex2aid)"/>
</svg>
<p>Pada tingkat alamiah $u_n$, satu-satunya yang bergerak bersama $\\pi^e$ adalah <b>ketinggian</b> SRPC: ekspektasi inflasi lebih tinggi = inflasi aktual yang lebih tinggi hanya untuk menjaga $u = u_n$ (menu lebih buruk); ekspektasi lebih rendah = menu lebih baik.</p>
<div class="formula">$$ \\pi = \\pi^e - a\\,(u - u_n) \\;\\Rightarrow\\; \\text{intersep SRPC naik bersama } \\pi^e $$</div>
<div class="tip">📝 $E(\\pi)\\uparrow$ &#8594; SRPC bergeser <b>ke atas/kanan</b> (menu lebih buruk). Pertumbuhan uang lebih lambat / disinflasi kredibel &#8594; $E(\\pi)\\downarrow$ &#8594; SRPC bergeser <b>ke bawah/kiri</b>.</div>
<div class="note">⚠️ Kesalahan umum: mengacaukan <i>pergeseran</i> SRPC (dipicu $\\pi^e$ atau guncangan penawaran) dengan <i>pergerakan di sepanjang</i>-nya (dipicu AD). Ekspektasi menggeser kurva, bukan satu titik di atasnya.</div>`
          }
        },

        /* ---- CARD 3: Adverse supply shock (paired AD-AS) → stagflation --- */
        {
          title: {
            en: 'Adverse supply shock: SRPC right → stagflation',
            id: 'Guncangan penawaran merugikan: SRPC ke kanan → stagflasi'
          },
          html: {
            en: `<p><b>Exam scenario:</b> a Red-Sea logistics crisis / OPEC cut / drought spikes input prices. SRAS shifts <b>left</b> and the SRPC shifts <b>right</b>. The economy lands at a stagflation point B — inflation <i>and</i> unemployment rise together. <span class="key">(UAS 2024, 2025)</span></p>
<svg viewBox="0 0 470 300" width="100%" style="max-width:470px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex3a" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <!-- LEFT: AD-AS with SRAS left -->
  <text x="118" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">AD&#8211;AS</text>
  <line x1="40" y1="250" x2="220" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="40" y1="250" x2="40" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="130" y="276" font-size="10" text-anchor="middle" fill="#334155">Output (Y)</text>
  <text x="20" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 20 145)">Price (P)</text>
  <line x1="150" y1="250" x2="150" y2="50" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="154" y="60" font-size="9" fill="#7c3aed">LRAS</text>
  <line x1="55" y1="235" x2="205" y2="70" stroke="#16a34a" stroke-width="1.6"/>
  <text x="186" y="78" font-size="9" fill="#16a34a">SRAS&#8321;</text>
  <line x1="80" y1="235" x2="200" y2="60" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="150" y="56" font-size="9" fill="#dc2626">SRAS&#8322;</text>
  <line x1="55" y1="100" x2="200" y2="240" stroke="#0e8fb8" stroke-width="1.6"/>
  <text x="58" y="98" font-size="9" fill="#0e8fb8">AD</text>
  <circle cx="150" cy="172" r="3.2" fill="#b91c1c"/><text x="120" y="168" font-size="9" fill="#b91c1c">A</text>
  <circle cx="126" cy="148" r="3.2" fill="#b91c1c"/><text x="96" y="143" font-size="9" fill="#b91c1c">B</text>
  <!-- RIGHT: Phillips SRPC right -->
  <text x="350" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">Phillips</text>
  <line x1="262" y1="250" x2="455" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="262" y1="250" x2="262" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="360" y="276" font-size="10" text-anchor="middle" fill="#334155">Unemployment (u)</text>
  <text x="244" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 244 145)">Inflation (&#960;)</text>
  <line x1="345" y1="250" x2="345" y2="45" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="349" y="55" font-size="9" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="335" y="245" font-size="9" fill="#7c3aed">u&#8345;</text>
  <path d="M300 130 C335 160, 360 175, 430 230" fill="none" stroke="#0e8fb8" stroke-width="1.8"/>
  <text x="408" y="228" font-size="9" fill="#0e8fb8" font-weight="bold">SRPC&#8321;</text>
  <path d="M320 90 C355 120, 380 135, 445 190" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3"/>
  <text x="320" y="84" font-size="9" fill="#dc2626" font-weight="bold">SRPC&#8322;</text>
  <circle cx="345" cy="167" r="3.2" fill="#b91c1c"/><text x="318" y="163" font-size="9" fill="#b91c1c">A</text>
  <circle cx="385" cy="138" r="3.2" fill="#b91c1c"/><text x="389" y="135" font-size="9" fill="#b91c1c">B</text>
  <path d="M349 162 L380 142" stroke="#475569" stroke-width="1.1" marker-end="url(#ex3a)"/>
</svg>
<p><b>A&#8594;B:</b> at A the economy sits at $u_n$. The cost shock shifts SRPC right to SRPC&#8322;; reading off the same AD, point B has <b>both higher inflation and higher unemployment</b> (above $u_n$) — stagflation. The AD-AS panel mirrors this: SRAS left &#8594; P&#8593;, Y&#8595;.</p>
<div class="tip">📝 Stagflation = the one case where &#960; and u move the <b>same</b> direction. Demand policy faces a dilemma: fight inflation (AD left &#8594; u even higher) or fight unemployment (AD right &#8594; &#960; even higher), but not both.</div>
<div class="note">⚠️ Common mistake: drawing a <i>movement along</i> SRPC. A supply shock <b>shifts</b> the whole curve right — that is why &#960; and u can rise together, which a single downward-sloping curve can never show.</div>`,
            id: `<p><b>Skenario ujian:</b> krisis logistik Laut Merah / pemangkasan OPEC / kekeringan melonjakkan harga input. SRAS bergeser <b>ke kiri</b> dan SRPC bergeser <b>ke kanan</b>. Ekonomi mendarat di titik stagflasi B — inflasi <i>dan</i> pengangguran naik bersamaan. <span class="key">(UAS 2024, 2025)</span></p>
<svg viewBox="0 0 470 300" width="100%" style="max-width:470px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex3aid" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <text x="118" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">AD&#8211;AS</text>
  <line x1="40" y1="250" x2="220" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="40" y1="250" x2="40" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="130" y="276" font-size="10" text-anchor="middle" fill="#334155">Output (Y)</text>
  <text x="20" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 20 145)">Harga (P)</text>
  <line x1="150" y1="250" x2="150" y2="50" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="154" y="60" font-size="9" fill="#7c3aed">LRAS</text>
  <line x1="55" y1="235" x2="205" y2="70" stroke="#16a34a" stroke-width="1.6"/>
  <text x="186" y="78" font-size="9" fill="#16a34a">SRAS&#8321;</text>
  <line x1="80" y1="235" x2="200" y2="60" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="150" y="56" font-size="9" fill="#dc2626">SRAS&#8322;</text>
  <line x1="55" y1="100" x2="200" y2="240" stroke="#0e8fb8" stroke-width="1.6"/>
  <text x="58" y="98" font-size="9" fill="#0e8fb8">AD</text>
  <circle cx="150" cy="172" r="3.2" fill="#b91c1c"/><text x="120" y="168" font-size="9" fill="#b91c1c">A</text>
  <circle cx="126" cy="148" r="3.2" fill="#b91c1c"/><text x="96" y="143" font-size="9" fill="#b91c1c">B</text>
  <text x="350" y="20" font-size="11" text-anchor="middle" fill="#0f172a" font-weight="bold">Phillips</text>
  <line x1="262" y1="250" x2="455" y2="250" stroke="#475569" stroke-width="1.4"/>
  <line x1="262" y1="250" x2="262" y2="35" stroke="#475569" stroke-width="1.4"/>
  <text x="360" y="276" font-size="10" text-anchor="middle" fill="#334155">Pengangguran (u)</text>
  <text x="244" y="145" font-size="10" text-anchor="middle" fill="#334155" transform="rotate(-90 244 145)">Inflasi (&#960;)</text>
  <line x1="345" y1="250" x2="345" y2="45" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="349" y="55" font-size="9" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="335" y="245" font-size="9" fill="#7c3aed">u&#8345;</text>
  <path d="M300 130 C335 160, 360 175, 430 230" fill="none" stroke="#0e8fb8" stroke-width="1.8"/>
  <text x="408" y="228" font-size="9" fill="#0e8fb8" font-weight="bold">SRPC&#8321;</text>
  <path d="M320 90 C355 120, 380 135, 445 190" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3"/>
  <text x="320" y="84" font-size="9" fill="#dc2626" font-weight="bold">SRPC&#8322;</text>
  <circle cx="345" cy="167" r="3.2" fill="#b91c1c"/><text x="318" y="163" font-size="9" fill="#b91c1c">A</text>
  <circle cx="385" cy="138" r="3.2" fill="#b91c1c"/><text x="389" y="135" font-size="9" fill="#b91c1c">B</text>
  <path d="M349 162 L380 142" stroke="#475569" stroke-width="1.1" marker-end="url(#ex3aid)"/>
</svg>
<p><b>A&#8594;B:</b> di A ekonomi berada di $u_n$. Guncangan biaya menggeser SRPC ke kanan menjadi SRPC&#8322;; dibaca pada AD yang sama, titik B memiliki <b>inflasi maupun pengangguran lebih tinggi</b> (di atas $u_n$) — stagflasi. Panel AD-AS mencerminkan ini: SRAS ke kiri &#8594; P&#8593;, Y&#8595;.</p>
<div class="tip">📝 Stagflasi = satu-satunya kasus di mana &#960; dan u bergerak ke arah yang <b>sama</b>. Kebijakan permintaan menghadapi dilema: melawan inflasi (AD ke kiri &#8594; u makin tinggi) atau melawan pengangguran (AD ke kanan &#8594; &#960; makin tinggi), tetapi tidak keduanya.</div>
<div class="note">⚠️ Kesalahan umum: menggambar <i>pergerakan di sepanjang</i> SRPC. Guncangan penawaran <b>menggeser</b> seluruh kurva ke kanan — itulah sebabnya &#960; dan u bisa naik bersama, yang tidak mungkin ditunjukkan oleh satu kurva menurun.</div>`
          }
        },

        /* ---- CARD 4: Disinflation A→B→C + sacrifice ratio ---------------- */
        {
          title: {
            en: 'Disinflation A→B→C and the sacrifice ratio',
            id: 'Disinflasi A→B→C dan rasio pengorbanan'
          },
          html: {
            en: `<p><b>Exam scenario:</b> the central bank decides to <i>lower</i> inflation with contractionary policy (AD shifts left). Trace the A&#8594;B&#8594;C path and explain why credibility shrinks the sacrifice ratio. <span class="key">(UAS 2024, 2025)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex4a" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <line x1="55" y1="255" x2="445" y2="255" stroke="#475569" stroke-width="1.5"/>
  <line x1="55" y1="255" x2="55" y2="25" stroke="#475569" stroke-width="1.5"/>
  <text x="250" y="285" font-size="11" text-anchor="middle" fill="#334155">Unemployment rate (u)</text>
  <text x="22" y="140" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 22 140)">Inflation (&#960;)</text>
  <line x1="170" y1="255" x2="170" y2="40" stroke="#7c3aed" stroke-width="2"/>
  <text x="174" y="50" font-size="10" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="152" y="250" font-size="9" fill="#7c3aed">u&#8345;</text>
  <!-- SRPC1 (high expected inflation) -->
  <path d="M120 70 C170 105, 210 130, 330 195" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="305" y="192" font-size="9" fill="#0e8fb8" font-weight="bold">SRPC&#8321; (high &#960;&#7497;)</text>
  <!-- SRPC2 (low expected inflation) -->
  <path d="M120 130 C170 165, 210 188, 320 250" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="290" y="245" font-size="9" fill="#16a34a" font-weight="bold">SRPC&#8322; (low &#960;&#7497;)</text>
  <!-- Points A (un, high pi), B (high u, lower pi, on SRPC1), C (un, low pi, on SRPC2) -->
  <circle cx="170" cy="120" r="3.4" fill="#b91c1c"/><text x="150" y="114" font-size="9" fill="#b91c1c">A</text>
  <circle cx="265" cy="168" r="3.4" fill="#b91c1c"/><text x="270" y="165" font-size="9" fill="#b91c1c">B (u&#8593;)</text>
  <circle cx="170" cy="180" r="3.4" fill="#b91c1c"/><text x="150" y="195" font-size="9" fill="#b91c1c">C</text>
  <path d="M178 124 L258 162" stroke="#475569" stroke-width="1.1" marker-end="url(#ex4a)"/>
  <path d="M258 172 L180 180" stroke="#475569" stroke-width="1.1" marker-end="url(#ex4a)"/>
</svg>
<p><b>A&#8594;B (short run):</b> AD left slides the economy <b>down-right along SRPC&#8321;</b> — inflation falls but unemployment rises above $u_n$ (recession). This is the cost.</p>
<p><b>B&#8594;C (long run):</b> as $\\pi^e$ falls, SRPC shifts <b>down</b> to SRPC&#8322;; unemployment returns to $u_n$ at the new, permanently lower inflation.</p>
<div class="formula">$$ \\text{Sacrifice ratio} = \\frac{\\%\\ \\text{annual output lost}}{\\text{percentage-point fall in } \\pi} $$</div>
<div class="tip">📝 <b>SR:</b> u&#8593; &#960;&#8595; (A&#8594;B). <b>LR:</b> back to $u_n$ at lower &#960; (B&#8594;C). Under <span class="key">rational expectations</span>, a <i>credible</i> announcement makes $\\pi^e$ fall fast, so SRPC slides down sooner — point B is shallower and the sacrifice ratio is smaller.</div>
<div class="note">⚠️ Common mistake: assuming disinflation is free. It is only cheap if expectations adjust quickly (credibility). The Volcker disinflation still pushed U.S. unemployment near 10% — credibility lowers the sacrifice ratio, it rarely makes it zero.</div>`,
            id: `<p><b>Skenario ujian:</b> bank sentral memutuskan <i>menurunkan</i> inflasi dengan kebijakan kontraktif (AD bergeser ke kiri). Telusuri jalur A&#8594;B&#8594;C dan jelaskan mengapa kredibilitas memperkecil rasio pengorbanan. <span class="key">(UAS 2024, 2025)</span></p>
<svg viewBox="0 0 460 300" width="100%" style="max-width:460px;background:#fff;border:1px solid #e2e8f0;border-radius:8px">
  <defs><marker id="ex4aid" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8 z" fill="#475569"/></marker></defs>
  <line x1="55" y1="255" x2="445" y2="255" stroke="#475569" stroke-width="1.5"/>
  <line x1="55" y1="255" x2="55" y2="25" stroke="#475569" stroke-width="1.5"/>
  <text x="250" y="285" font-size="11" text-anchor="middle" fill="#334155">Tingkat pengangguran (u)</text>
  <text x="22" y="140" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 22 140)">Inflasi (&#960;)</text>
  <line x1="170" y1="255" x2="170" y2="40" stroke="#7c3aed" stroke-width="2"/>
  <text x="174" y="50" font-size="10" fill="#7c3aed" font-weight="bold">LRPC</text>
  <text x="152" y="250" font-size="9" fill="#7c3aed">u&#8345;</text>
  <path d="M120 70 C170 105, 210 130, 330 195" fill="none" stroke="#0e8fb8" stroke-width="2"/>
  <text x="305" y="192" font-size="9" fill="#0e8fb8" font-weight="bold">SRPC&#8321; (&#960;&#7497; tinggi)</text>
  <path d="M120 130 C170 165, 210 188, 320 250" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="290" y="245" font-size="9" fill="#16a34a" font-weight="bold">SRPC&#8322; (&#960;&#7497; rendah)</text>
  <circle cx="170" cy="120" r="3.4" fill="#b91c1c"/><text x="150" y="114" font-size="9" fill="#b91c1c">A</text>
  <circle cx="265" cy="168" r="3.4" fill="#b91c1c"/><text x="270" y="165" font-size="9" fill="#b91c1c">B (u&#8593;)</text>
  <circle cx="170" cy="180" r="3.4" fill="#b91c1c"/><text x="150" y="195" font-size="9" fill="#b91c1c">C</text>
  <path d="M178 124 L258 162" stroke="#475569" stroke-width="1.1" marker-end="url(#ex4aid)"/>
  <path d="M258 172 L180 180" stroke="#475569" stroke-width="1.1" marker-end="url(#ex4aid)"/>
</svg>
<p><b>A&#8594;B (jangka pendek):</b> AD ke kiri meluncurkan ekonomi <b>turun-kanan di sepanjang SRPC&#8321;</b> — inflasi turun tetapi pengangguran naik di atas $u_n$ (resesi). Inilah biayanya.</p>
<p><b>B&#8594;C (jangka panjang):</b> saat $\\pi^e$ turun, SRPC bergeser <b>ke bawah</b> menjadi SRPC&#8322;; pengangguran kembali ke $u_n$ pada inflasi baru yang permanen lebih rendah.</p>
<div class="formula">$$ \\text{Rasio pengorbanan} = \\frac{\\%\\ \\text{output tahunan yang hilang}}{\\text{penurunan } \\pi \\text{ (poin persen)}} $$</div>
<div class="tip">📝 <b>JP:</b> u&#8593; &#960;&#8595; (A&#8594;B). <b>JPj:</b> kembali ke $u_n$ pada &#960; lebih rendah (B&#8594;C). Di bawah <span class="key">ekspektasi rasional</span>, pengumuman yang <i>kredibel</i> membuat $\\pi^e$ turun cepat, sehingga SRPC meluncur turun lebih awal — titik B lebih dangkal dan rasio pengorbanan lebih kecil.</div>
<div class="note">⚠️ Kesalahan umum: menganggap disinflasi gratis. Ia murah hanya jika ekspektasi menyesuaikan cepat (kredibilitas). Disinflasi Volcker tetap mendorong pengangguran AS mendekati 10% — kredibilitas menurunkan rasio pengorbanan, jarang membuatnya nol.</div>`
          }
        }

      ]
    }

  ]);
})();
