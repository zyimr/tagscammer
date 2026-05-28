import { writable, derived } from 'svelte/store';

// Demo database nomor penipu
const SCAMMER_DATABASE = [
  {
    number: '08123456789',
    category: 'Penipuan Investasi',
    reports: 42,
    lastReport: '2024-12-01',
    description: 'Menawarkan investasi bodong dengan iming-iming keuntungan besar.'
  },
  {
    number: '082234567890',
    category: 'Pinjol Ilegal',
    reports: 17,
    lastReport: '2024-11-28',
    description: 'Menawarkan pinjaman online tanpa OJK, bunga mencekik.'
  },
  {
    number: '081199887766',
    category: 'Phishing / OTP',
    reports: 89,
    lastReport: '2024-12-03',
    description: 'Meminta kode OTP dengan berpura-pura jadi petugas bank.'
  },
  {
    number: '085566778899',
    category: 'Penipuan Jual-Beli',
    reports: 31,
    lastReport: '2024-11-15',
    description: 'Penjual fiktif di marketplace, barang tidak dikirim setelah transfer.'
  },
  {
    number: '087812345678',
    category: 'Love Scam',
    reports: 14,
    lastReport: '2024-10-30',
    description: 'Membangun hubungan palsu lalu meminta uang dengan berbagai alasan.'
  }
];

// Store untuk laporan yang dikirim user (session)
export const userReports = writable([]);

// Store statistik
export const stats = writable({
  totalNumbers: 12847,
  totalReports: 38210,
  usersProtected: 94000
});

// Normalize nomor: strip semua non-digit
function normalizeNumber(num) {
  return num.replace(/[^0-9]/g, '');
}

// Cek apakah nomor ada di database
export function checkNumber(phoneNumber) {
  const clean = normalizeNumber(phoneNumber);
  if (!clean || clean.length < 8) return null;

  const found = SCAMMER_DATABASE.find(
    (s) => normalizeNumber(s.number) === clean
  );

  return found || false; // null = invalid, false = aman, object = terlapor
}

// Tambah laporan baru (simulasi)
export function submitReport(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      userReports.update((prev) => [
        ...prev,
        { ...data, id: Date.now(), submittedAt: new Date().toISOString() }
      ]);
      stats.update((s) => ({
        ...s,
        totalReports: s.totalReports + 1,
        totalNumbers: s.totalNumbers + 1
      }));
      resolve({ success: true });
    }, 800);
  });
}

// Format angka jadi readable
export function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K+';
  return n.toLocaleString('id-ID');
}

export const CATEGORIES = [
  'Penipuan Investasi / Trading',
  'Pinjol Ilegal',
  'Phishing / OTP',
  'Penipuan Jual-Beli',
  'Hadiah / Undian Palsu',
  'Romansa / Love Scam',
  'Lainnya'
];
