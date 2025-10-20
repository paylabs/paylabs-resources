# Paylabs Resources — React + Vite + Tailwind + PWA (GitHub Pages)

Landing page modern berisi resource integrasi Paylabs. Siap dijalankan lokal, offline (PWA), dan deploy ke **GitHub Pages**.

## Prasyarat
- Node.js 18+
- npm 10+ (atau pnpm/yarn jika diinginkan)

## Menjalankan
```bash
npm i
npm run dev
```

Build dan preview:
```bash
npm run build
npm run preview
```

## Konfigurasi Konten
Edit file: `src/content/resources.ts`

## PWA
- Plugin: `vite-plugin-pwa` (autoUpdate).
- Ikon berada di `public/icons/`.
- Dapat di-install (Add to Home Screen) dan offline untuk halaman utama.

## GitHub Pages
- Workflow: `.github/workflows/deploy.yml`
- Base path sudah diset `base: '/paylabs-resources/'` di `vite.config.ts`.
  - Jika nama repo berbeda, ganti `repoBase` di `vite.config.ts` dan commit.
- Aktifkan **Pages** di Settings → Pages → *Build and deployment* → *GitHub Actions* (workflow otomatis publish).

## Struktur Direktori
- `src/components/*` — komponen UI (Header, Hero, ResourceCard, ResourceGrid, Footer)
- `src/content/resources.ts` — daftar link & plugin
- `src/styles/globals.css` — Tailwind setup

## Lisensi
MIT
