<script>
  let scrolled = false;

  function handleScroll() {
    scrolled = window.scrollY > 20;
  }

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav class:scrolled>
  <a class="logo" href="/">
    <span class="accent">Tag</span>Scammers
  </a>

  <ul class="nav-links">
    <li><button on:click={() => scrollTo('cara-kerja')}>Cara Kerja</button></li>
    <li><button on:click={() => scrollTo('layanan')}>Layanan</button></li>
    <li><button on:click={() => scrollTo('lapor')}>Lapor</button></li>
    <li><button on:click={() => scrollTo('kontak')}>Kontak</button></li>
  </ul>

  <button class="cta" on:click={() => scrollTo('lapor')}>Lapor Sekarang</button>
</nav>

<style>
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(250,250,248,0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    padding: 0 2rem;
    display: flex; align-items: center; justify-content: space-between;
    height: 60px; transition: border-color 0.3s;
  }
  nav.scrolled { border-bottom-color: var(--gray2); }
  .logo { font-family: var(--mono); font-size: 15px; font-weight: 500; letter-spacing: 0.05em; color: var(--black); }
  .accent { color: var(--accent); }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links button { background: none; border: none; font-family: var(--sans); font-size: 13px; color: var(--gray3); cursor: pointer; transition: color 0.2s; padding: 0; }
  .nav-links button:hover { color: var(--black); }
  .cta { font-family: var(--mono); font-size: 12px; background: var(--black); color: var(--white); padding: 8px 20px; border: none; letter-spacing: 0.05em; transition: background 0.2s; }
  .cta:hover { background: var(--accent); }
  @media(max-width:640px) { .nav-links { display: none; } }
</style>
