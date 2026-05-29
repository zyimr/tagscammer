<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import StatsBar from '$lib/components/StatsBar.svelte';
  import ReportForm from '$lib/components/ReportForm.svelte';

  const steps = [
    { num: '01', title: 'Masukkan Nomor', desc: 'Ketik nomor telepon yang ingin dicek. Bisa nomor lokal maupun internasional.' },
    { num: '02', title: 'Cek Database',   desc: 'Sistem kami memeriksa nomor dalam database yang diisi ribuan laporan masyarakat.' },
    { num: '03', title: 'Lihat Hasil',    desc: 'Dapatkan hasil instan — aman atau sudah dilaporkan sebagai penipu.' }
  ];

  const services = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
      title: 'Pencarian Nomor',
      desc: 'Cek nomor secara instan sebelum transaksi, transfer, atau membalas pesan mencurigakan.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Lapor Nomor Penipu',
      desc: 'Sudah kena tipu? Laporkan nomor pelaku agar orang lain bisa terhindar dari penipuan serupa.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Database Komunitas',
      desc: 'Database dibangun bersama oleh masyarakat Indonesia. Semakin banyak laporan, semakin kuat perlindungan kita.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
      title: 'Riwayat & Kategori',
      desc: 'Setiap nomor dilengkapi kategori modus: investasi, pinjol ilegal, phishing, jual-beli, dan lainnya.'
    }
  ];

  const contacts = [
    { title: 'Email Umum',          value: 'tagscammers@gmail.com',     href: 'mailto:tagscammers@gmail.com' },
    { title: 'Laporan & Kerjasama', value: 'partnertagscammers@gmail.com',  href: 'mailto:partnertagscammers@gmail.com' },
    { title: 'Instagram',           value: '@tagscammers',         href: 'https://www.instagram.com/tagscammers/' },
    { title: 'Telegram',            value: 't.me/tagscammerss',        href: 'https://t.me/tagscammerss' }
  ];
</script>

<Navbar />

<section class="hero">
  <div class="hero-inner">
    <div class="badge fade-up">🛡 Database Nomor Penipu #1 Indonesia</div>
    <h1 class="fade-up d1">Cek Sebelum<br><em>Kena Tipu.</em></h1>
    <p class="sub fade-up d2">TagScammers adalah database terbuka nomor-nomor penipu yang dilaporkan masyarakat. Cek nomor sebelum transaksi, lindungi diri dari penipuan online.</p>
    <div class="fade-up d3"><SearchBar /></div>
  </div>
</section>

<StatsBar />

<section class="section" id="cara-kerja">
  <p class="sec-label">// cara kerja</p>
  <h2 class="sec-title">Mudah, Cepat,<br>Terpercaya</h2>
  <div class="steps-grid">
    {#each steps as step}
      <div class="step">
        <div class="step-num">{step.num}</div>
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    {/each}
  </div>
</section>

<section class="section" id="layanan">
  <p class="sec-label">// layanan</p>
  <h2 class="sec-title">Apa yang Kami<br>Sediakan</h2>
  <div class="services-grid">
    {#each services as svc}
      <div class="service-card">
        <div class="svc-icon">{@html svc.icon}</div>
        <h3>{svc.title}</h3>
        <p>{svc.desc}</p>
      </div>
    {/each}
  </div>
</section>

<ReportForm />

<section class="section" id="kontak">
  <p class="sec-label">// kontak</p>
  <h2 class="sec-title">Hubungi Kami</h2>
  <div class="contact-grid">
    {#each contacts as c}
      <div class="contact-card">
        <h3>{c.title}</h3>
        <a href={c.href}>{c.value}</a>
      </div>
    {/each}
  </div>
</section>

<footer>
  <div class="footer-logo"><span class="acc">Tag</span>Scammers</div>
  <p class="footer-tag">Bersama Lawan Penipuan · Indonesia</p>
</footer>

<style>
  .hero { min-height: 100vh; padding: 120px 2rem 80px; display: flex; align-items: center; }
  .hero-inner { max-width: 900px; margin: 0 auto; width: 100%; }
  .badge { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; color: var(--accent); background: #fdecea; border: 1px solid #f5c0bb; padding: 5px 14px; display: inline-block; text-transform: uppercase; margin-bottom: 2rem; }
  h1 { font-size: clamp(3rem,7vw,5.5rem); font-weight: 600; line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 1.5rem; }
  h1 em { font-style: normal; color: var(--accent); }
  .sub { font-size: 1.1rem; color: var(--gray3); max-width: 520px; margin-bottom: 3rem; font-weight: 300; line-height: 1.7; }
  .fade-up { animation: fadeUp 0.6s ease both; }
  .d1 { animation-delay: 0.1s; } .d2 { animation-delay: 0.2s; } .d3 { animation-delay: 0.35s; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
  .section { padding: 80px 2rem; max-width: 900px; margin: 0 auto; }
  .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: var(--gray2); }
  .step { background: var(--white); padding: 2rem; }
  .step-num { font-family: var(--mono); font-size: 3rem; font-weight: 500; color: var(--gray2); line-height: 1; margin-bottom: 1rem; }
  .step h3 { font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem; }
  .step p { font-size: 13px; color: var(--gray3); line-height: 1.6; }
  .services-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; background: var(--gray2); }
  .service-card { background: var(--white); padding: 2rem; transition: background 0.2s; }
  .service-card:hover { background: var(--gray); }
  .svc-icon { width: 40px; height: 40px; background: var(--black); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
  .svc-icon :global(svg) { width: 20px; height: 20px; }
  .service-card h3 { font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem; }
  .service-card p { font-size: 13px; color: var(--gray3); line-height: 1.6; }
  .contact-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; background: var(--gray2); }
  .contact-card { background: var(--white); padding: 2rem; }
  .contact-card h3 { font-size: 13px; font-weight: 500; margin-bottom: 0.5rem; }
  .contact-card a { font-family: var(--mono); font-size: 12px; color: var(--gray3); transition: color 0.2s; }
  .contact-card a:hover { color: var(--black); }
  footer { background: var(--black); color: var(--white); padding: 3rem 2rem; text-align: center; }
  .footer-logo { font-family: var(--mono); font-size: 1rem; font-weight: 500; margin-bottom: 0.75rem; letter-spacing: 0.05em; }
  .acc { color: var(--accent); }
  .footer-tag { font-size: 12px; color: rgba(255,255,255,0.35); letter-spacing: 0.06em; text-transform: uppercase; }
  @media(max-width:640px) { .steps-grid, .services-grid, .contact-grid { grid-template-columns: 1fr; } }
</style>
