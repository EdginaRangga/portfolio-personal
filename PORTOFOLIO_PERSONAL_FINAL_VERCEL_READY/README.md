# Edgina Rangga Arkananta — Personal Portfolio

Website portofolio multi-halaman berbasis HTML, CSS, dan JavaScript. Proyek ini dipertahankan sebagai static site agar ringan, mudah dipelihara, dan dapat di-deploy langsung ke Vercel tanpa server PHP/Node.js.

## Struktur proyek

```text
.
├── index.html
├── Tnetangsaya.html
├── Pendidikan.html
├── Pengalaman.html
├── Proyek.html
├── kontak.html
├── assets/
│   ├── css/
│   │   └── site-enhancements.css
│   └── js/
│       └── site.js
├── vercel.json
└── README.md
```

## Menjalankan secara lokal

Tidak memerlukan instalasi dependency atau proses build.

1. Ekstrak ZIP.
2. Buka folder proyek.
3. Jalankan server statis lokal, misalnya:

   ```bash
   python -m http.server 8000
   ```

4. Buka `http://localhost:8000`.

Alternatif: buka `index.html` langsung di browser. Server lokal lebih disarankan agar perilaku routing dan aset menyerupai deployment.

## Deployment ke Vercel

### Melalui Dashboard
1. Masukkan folder hasil ekstrak ke repository GitHub.
2. Buka https://vercel.com/new dan impor repository.
3. Framework Preset: **Other**.
4. Build Command: kosongkan / None.
5. Output Directory: `.` (root proyek).
6. Install Command: kosongkan karena tidak ada dependency.
7. Klik **Deploy**.

### Melalui CLI

```bash
npm i -g vercel
vercel
```

Ikuti instruksi CLI. Untuk deployment produksi:

```bash
vercel --prod
```

Vercel akan memberikan domain `.vercel.app`. Nama domain aktual ditentukan oleh ketersediaan nama proyek di akun Vercel; `nama-portofolio.vercel.app` adalah contoh target, bukan klaim domain yang sudah aktif.

## Formulir kontak

Formulir pada halaman beranda menggunakan layanan pihak ketiga FormSubmit dan mengirim ke alamat email yang sudah tertulis di source asli. Redirect setelah pengiriman diarahkan ke `https://nama-portofolio.vercel.app/kontak.html`. Setelah deployment, ganti URL tersebut dengan domain Vercel aktual jika nama proyek berbeda. Pengiriman pertama FormSubmit dapat meminta verifikasi email.

## Catatan teknis

- Seluruh enam halaman dan konten HTML sumber dipertahankan.
- Lapisan CSS tambahan memperhalus palet biru/navy, kartu, interaksi hover, fokus keyboard, dan layout responsif tanpa membangun ulang konten.
- JavaScript tambahan hanya menangani menu mobile, status navigasi aktif, serta lazy loading gambar. Script halaman asli tetap disertakan.
- Gambar yang ada di source masih menggunakan URL eksternal; pastikan host gambar tersebut tetap tersedia. Ketersediaan gambar eksternal tidak dapat dijamin oleh deployment.
- Tidak ditemukan backend server-side dalam paket yang diberikan. Karena itu, migrasi ke PHP/Next.js tidak diperlukan untuk target static portfolio.
- Tidak ada credential/API key baru yang ditambahkan.
- `vercel.json` hanya menyatakan konfigurasi Vercel v2; tidak ada build pipeline yang tidak diperlukan.

## Pengujian yang dilakukan

- Memeriksa keenam file HTML dan metadata halaman.
- Memastikan stylesheet dan JavaScript enhancement tersedia pada setiap halaman.
- Memeriksa sintaks JavaScript enhancement.
- Memeriksa struktur HTML dasar dan tautan lokal.
- Memastikan konfigurasi deployment statis tersedia.

Pengujian visual lintas perangkat dan verifikasi langsung pada domain Vercel tetap perlu dilakukan setelah deployment karena tidak ada akses ke akun Vercel pengguna pada sesi ini.
