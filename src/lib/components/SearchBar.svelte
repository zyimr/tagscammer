<script>
  import { checkNumber } from '$lib/scammer.js';

  let phone = '';
  let result = null; // null=idle, false=safe, object=scammer
  let checked = false;

  function handleCheck() {
    if (!phone.trim()) return;
    result = checkNumber(phone);
    checked = true;
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') handleCheck();
  }
</script>

<div class="search-container">
  <div class="search-wrap">
    <input
      type="text"
      bind:value={phone}
      on:keydown={handleKeydown}
      placeholder="+62 812 xxxx xxxx"
      maxlength="20"
    />
    <button on:click={handleCheck}>Cek Nomor →</button>
  </div>

  {#if checked}
    {#if result === null}
      <div class="result warning">⚠ Masukkan nomor yang valid (min. 8 digit).</div>
    {:else if result === false}
      <div class="result safe">
        ✓ <strong>Aman</strong> — Nomor ini belum ada dalam database kami. Tetap waspada ya.
      </div>
    {:else}
      <div class="result danger">
        🚨 <strong>TERLAPOR</strong> — Nomor ini dilaporkan sebagai <em>{result.category}</em>.
        Sudah {result.reports} laporan masuk.
      </div>
    {/if}
  {/if}

  <p class="hint">* Data bersumber dari laporan masyarakat terverifikasi</p>
</div>

<style>
  .search-container { width: 100%; max-width: 560px; }

  .search-wrap {
    display: flex;
    border: 1.5px solid var(--black);
    background: var(--white);
  }

  .search-wrap input {
    flex: 1;
    font-family: var(--mono);
    font-size: 14px;
    padding: 14px 18px;
    border: none;
    outline: none;
    background: transparent;
    color: var(--black);
  }

  .search-wrap input::placeholder { color: var(--gray3); }

  .search-wrap button {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    background: var(--black);
    color: var(--white);
    border: none;
    padding: 14px 24px;
    white-space: nowrap;
    transition: background 0.2s;
  }

  .search-wrap button:hover { background: var(--accent); }

  .result {
    margin-top: 1rem;
    padding: 12px 16px;
    font-family: var(--mono);
    font-size: 13px;
    border: 1.5px solid;
    animation: fadeUp 0.3s ease both;
  }

  .result.safe    { border-color: #2d6a2d; background: #edf7ed; color: #1e4d1e; }
  .result.danger  { border-color: var(--accent); background: #fdecea; color: #7a1a14; }
  .result.warning { border-color: #b07800; background: #fef9ec; color: #5a3c00; }

  .hint {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--gray3);
    margin-top: 10px;
    letter-spacing: 0.03em;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
