<script>
  import { stats } from '$lib/scammer.js';
  import { formatNumber } from '$lib/scammer.js';
</script>

<div class="stats-bar">
  <div class="stat">
    <span class="num">{formatNumber($stats.totalNumbers)}</span>
    <span class="label">Nomor Terlapor</span>
  </div>
  <div class="stat">
    <span class="num">{formatNumber($stats.totalReports)}</span>
    <span class="label">Laporan Masuk</span>
  </div>
  <div class="stat">
    <span class="num">{formatNumber($stats.usersProtected)}</span>
    <span class="label">Pengguna Terlindungi</span>
  </div>
  <div class="stat">
    <span class="num">#1</span>
    <span class="label">Database Terpercaya</span>
  </div>
</div>

<style>
  .stats-bar {
    background: var(--black);
    color: var(--white);
    padding: 1.5rem 2rem;
    display: flex;
  }

  .stat {
    flex: 1;
    text-align: center;
    padding: 0 1rem;
    border-right: 1px solid rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stat:last-child { border-right: none; }

  .num {
    font-family: var(--mono);
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--white);
  }

  .label {
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  @media(max-width:640px) {
    .stats-bar { flex-direction: column; gap: 1.5rem; }
    .stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem; }
    .stat:last-child { border-bottom: none; }
  }
</style>
