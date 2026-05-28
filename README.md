# TagScammers

Database terbuka nomor penipu untuk masyarakat Indonesia.

## Tech Stack
- **Svelte 4** — UI framework
- **Vite 5** — bundler & dev server
- **JavaScript (ES Modules)**

## Struktur Project
```
tagscammers/
├── index.html                    # Entry HTML
├── src/
│   ├── main.js                   # App entry point
│   ├── App.svelte                # Root component
│   ├── lib/
│   │   ├── scammer.js            # Logic & Svelte stores (database, cek nomor, submit)
│   │   ├── styles/
│   │   │   └── global.css        # CSS variables & global styles
│   │   └── components/
│   │       ├── Navbar.svelte     # Navigasi dengan scroll detection
│   │       ├── SearchBar.svelte  # Form cek nomor + hasil
│   │       ├── StatsBar.svelte   # Statistik realtime (reactive store)
│   │       └── ReportForm.svelte # Form lapor nomor penipu
├── dist/                         # Output build (siap deploy)
└── package.json
```

## Cara Jalankan

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run preview  # preview build hasil
```

## Fitur
- Cek nomor penipu secara instan
- Form lapor nomor penipu dengan kategori modus
- Statistik realtime via Svelte stores
- Responsive untuk mobile & desktop
- Animasi smooth dengan CSS keyframes
