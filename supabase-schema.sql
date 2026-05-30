-- ============================================================
-- TagScammers — Supabase Schema
-- Jalankan file ini di Supabase SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS scammers (
  id            uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  number        TEXT        NOT NULL UNIQUE,
  category      TEXT        NOT NULL,
  description   TEXT,
  reporter_name  TEXT,
  reporter_email TEXT,
  report_count  INTEGER     DEFAULT 1,
  verified      BOOLEAN     DEFAULT false,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- Index untuk pencarian cepat by nomor
CREATE INDEX IF NOT EXISTS idx_scammers_number ON scammers(number);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_scammers_updated_at
  BEFORE UPDATE ON scammers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security
ALTER TABLE scammers ENABLE ROW LEVEL SECURITY;

-- Semua orang bisa baca (cek nomor)
CREATE POLICY "public_read" ON scammers
  FOR SELECT USING (true);

-- Semua orang bisa insert (lapor nomor baru)
CREATE POLICY "public_insert" ON scammers
  FOR INSERT WITH CHECK (true);

-- Hanya service_role yang bisa update (admin)
CREATE POLICY "service_update" ON scammers
  FOR UPDATE USING (auth.role() = 'service_role');

-- Hanya service_role yang bisa delete (admin)
CREATE POLICY "service_delete" ON scammers
  FOR DELETE USING (auth.role() = 'service_role');

-- ============================================================
-- Data contoh (opsional, hapus jika tidak perlu)
-- ============================================================
INSERT INTO scammers (number, category, description, report_count) VALUES
  ('08123456789',  'Penipuan Investasi / Trading', 'Menawarkan investasi bodong dengan iming-iming keuntungan besar dalam waktu singkat.', 42),
  ('082234567890', 'Pinjol Ilegal',                'Menawarkan pinjaman online tanpa izin OJK, bunga mencekik dan melakukan penagihan kasar.', 17),
  ('081199887766', 'Phishing / OTP',               'Berpura-pura menjadi petugas bank dan meminta kode OTP untuk menguras rekening korban.', 89),
  ('085566778899', 'Penipuan Jual-Beli',           'Penjual fiktif di marketplace, meminta transfer terlebih dahulu namun barang tidak pernah dikirim.', 31)
ON CONFLICT (number) DO NOTHING;
