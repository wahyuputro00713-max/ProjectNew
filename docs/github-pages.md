# Deploy `apps/web` ke GitHub Pages

Jika masih 404 setelah merge, biasanya penyebabnya adalah konfigurasi GitHub repository (bukan kode UI).

## Checklist wajib

1. **Settings → Pages → Source** harus `GitHub Actions`.
2. Branch yang dipush harus salah satu: `main`, `master`, atau `work`.
3. Workflow `Deploy Web to GitHub Pages` harus status **success**.
4. URL akses harus: `https://<username>.github.io/ProjectNew/` (pakai trailing slash).

## Build output

Workflow akan upload artifact dari `apps/web/out`.
