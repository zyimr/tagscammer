<script>
  import { submitReport, CATEGORIES } from '$lib/scammer.js';

  let form = { number: '', category: '', name: '', email: '', description: '' };
  let loading = false;
  let success = false;
  let error = '';

  async function handleSubmit() {
    if (!form.number || !form.category || !form.description) {
      error = 'Harap isi kolom yang wajib diisi (bertanda *).';
      return;
    }
    error = '';
    loading = true;
    await submitReport(form);
    loading = false;
    success = true;
    form = { number: '', category: '', name: '', email: '', description: '' };
  }
</script>

<div class="report-section" id="lapor">
  <div class="inner">
    <p class="sec-label">// lapor nomor penipu</p>
    <h2 class="sec-title">Punya Nomor untuk<br>Dilaporkan?</h2>
    <p class="sub">Bantu komunitas dengan melaporkan nomor penipu. Laporan kamu akan membantu ribuan orang lainnya.</p>

    {#if success}
      <div class="success-msg">
        ✓ Laporan berhasil dikirim! Tim kami akan memverifikasi dalam 1×24 jam. Terima kasih sudah membantu komunitas.
        <button class="reset-btn" on:click={() => success = false}>Lapor lagi</button>
      </div>
    {:else}
      {#if error}
        <div class="error-msg">{error}</div>
      {/if}

      <div class="form-grid">
        <div class="field">
          <label>Nomor Penipu *</label>
          <input type="text" bind:value={form.number} placeholder="+62 812 xxxx xxxx" />
        </div>

        <div class="field">
          <label>Kategori Penipuan *</label>
          <select bind:value={form.category}>
            <option value="">Pilih kategori...</option>
            {#each CATEGORIES as cat}
              <option value={cat}>{cat}</option>
            {/each}
          </select>
        </div>

        <div class="field">
          <label>Nama Pelapor (opsional)</label>
          <input type="text" bind:value={form.name} placeholder="Nama kamu" />
        </div>

        <div class="field">
          <label>Email Pelapor (opsional)</label>
          <input type="email" bind:value={form.email} placeholder="email@kamu.com" />
        </div>

        <div class="field full">
          <label>Kronologi Penipuan *</label>
          <textarea bind:value={form.description} rows="4" placeholder="Tuliskan singkat bagaimana penipuan terjadi..."></textarea>
        </div>

        <div class="submit-row full">
          <button class="submit-btn" on:click={handleSubmit} disabled={loading}>
            {#if loading}Mengirim...{:else}Kirim Laporan →{/if}
          </button>
          <span class="note">Data dikirim aman & diverifikasi tim kami</span>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .report-section {
    background: var(--gray);
    padding: 80px 2rem;
    border-top: 1px solid var(--gray2);
    border-bottom: 1px solid var(--gray2);
  }

  .inner { max-width: 900px; margin: 0 auto; }

  .sub {
    font-size: 14px;
    color: var(--gray3);
    max-width: 500px;
    margin-bottom: 0;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: var(--gray2);
    margin-top: 2rem;
  }

  .field {
    background: var(--white);
    padding: 1.5rem;
  }

  .field.full { grid-column: 1 / -1; }

  label {
    display: block;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--gray3);
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  input, textarea, select {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--gray2);
    padding: 8px 0;
    outline: none;
    color: var(--black);
    transition: border-color 0.2s;
    font-size: 13px;
  }

  input:focus, textarea:focus, select:focus { border-bottom-color: var(--black); }

  textarea { resize: vertical; min-height: 80px; }

  select { -webkit-appearance: none; cursor: pointer; }

  .submit-row {
    background: var(--white);
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .submit-btn {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    background: var(--accent);
    color: var(--white);
    border: none;
    padding: 12px 32px;
    transition: background 0.2s;
    text-transform: uppercase;
  }

  .submit-btn:hover:not(:disabled) { background: #c4312a; }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  .note { font-size: 12px; color: var(--gray3); }

  .success-msg {
    margin-top: 2rem;
    padding: 1.25rem 1.5rem;
    background: #edf7ed;
    border: 1.5px solid #2d6a2d;
    font-family: var(--mono);
    font-size: 13px;
    color: #1e4d1e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .reset-btn {
    font-family: var(--mono);
    font-size: 11px;
    background: none;
    border: 1px solid #2d6a2d;
    color: #1e4d1e;
    padding: 6px 14px;
    cursor: pointer;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  .error-msg {
    margin-top: 1rem;
    padding: 12px 16px;
    background: #fdecea;
    border: 1.5px solid var(--accent);
    font-family: var(--mono);
    font-size: 12px;
    color: #7a1a14;
  }

  @media(max-width:640px) {
    .form-grid { grid-template-columns: 1fr; }
    .field.full { grid-column: 1; }
    .submit-row { flex-direction: column; align-items: flex-start; }
    .success-msg { flex-direction: column; align-items: flex-start; }
  }
</style>
