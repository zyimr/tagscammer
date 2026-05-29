import { supabase } from './supabase.js';

// Cek nomor dari database
export async function checkNumber(phoneNumber) {
  const clean = phoneNumber.replace(/[^0-9]/g, '');
  if (!clean || clean.length < 8) return null;

  const { data, error } = await supabase
    .from('scammers')
    .select('*')
    .eq('number', clean)
    .single();

  if (error || !data) return false; // tidak ditemukan = aman
  return data; // ditemukan = penipu
}

// Submit laporan langsung ke database
export async function submitReport(form) {
  const clean = form.number.replace(/[^0-9]/g, '');

  // Cek apakah nomor sudah ada
  const { data: existing } = await supabase
    .from('scammers')
    .select('id, report_count')
    .eq('number', clean)
    .single();

  if (existing) {
    // Tambah counter laporan
    await supabase
      .from('scammers')
      .update({ report_count: existing.report_count + 1 })
      .eq('id', existing.id);
  } else {
    // Insert nomor baru
    await supabase.from('scammers').insert({
      number: clean,
      category: form.category,
      description: form.description,
      reporter_name: form.name || null,
      reporter_email: form.email || null,
    });
  }

  return { success: true };
}