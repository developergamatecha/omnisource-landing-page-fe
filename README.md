# OmniSource Landing Page

OmniSource Landing Page adalah Web Landing Page modern yang dibangun dengan
**Next.js 15+** (App Router). Menggunakan **Tailwind CSS v4** untuk styling yang
responsif dan **Three.js** (via React Three Fiber) untuk visualisasi 3D yang
interaktif.

Website ini berfungsi sebagai platform pemasaran serta entry point utama untuk
Web App dan Mobile App OmniSource.

## 🚀 Stack Teknologi

Berikut adalah teknologi utama yang digunakan dalam proyek ini:

| Teknologi             | Versi    | Deskripsi                          |
| :-------------------- | :------- | :--------------------------------- |
| **Next.js**           | 16.0.7   | Framework React utama (App Router) |
| **React**             | 19.2.0   | Library UI core                    |
| **Tailwind CSS**      | v4       | Utility-first CSS framework        |
| **Three.js**          | ^0.181.2 | Library 3D JavaScript              |
| **React Three Fiber** | ^9.4.2   | React renderer untuk Three.js      |
| **pnpm**              | 10.24.0  | Package manager yang digunakan     |

## 🛠️ Cara Penginstallan

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal Anda.

### Prasyarat

Pastikan Anda telah menginstall:

- [Node.js](https://nodejs.org/) (v20.9.0 atau lebih baru)
- [pnpm](https://pnpm.io/) (Package manager yang direkomendasikan)

### Langkah-langkah

1. **Clone repository:**

   ```bash
   git clone https://github.com/developergamatecha/omnisource-landing-page-fe.git
   cd omnisource-landing-page-fe
   ```

2. **Setup Environment Variables:**

   Salin file `.env.example` ke `.env`:

   ```bash
   cp .env.example .env
   ```

   Sesuaikan nilai variabel di dalam `.env` jika diperlukan (misalnya port host
   atau URL environment).

3. **Install Dependencies:**

   ```bash
   pnpm install
   ```

4. **Jalankan Development Server:**

   ```bash
   pnpm dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk
   melihat hasilnya.

### Build untuk Produksi

Untuk membuat build produksi yang teroptimasi:

```bash
pnpm build
pnpm start
```

## � Deployment Docker

Proyek ini telah dikonfigurasi untuk dapat dijalankan menggunakan Docker.

### Menggunakan Docker Compose (Direkomendasikan)

Pastikan Docker Desktop atau Docker Engine telah terinstall.

1. **Build dan Jalankan Container:**

   ```bash
   docker compose up -d --build
   ```

   Aplikasi akan berjalan di port yang didefinisikan di `.env` (variabel
   `HOST_PORT`) atau default ke `4032` jika tidak diset.

   Akses aplikasi di: [http://localhost:4032](http://localhost:4032) (atau port
   custom Anda).

2. **Menghentikan Container:**

   ```bash
   docker compose down
   ```

### Manual Build Docker Image

Jika Anda ingin membangun image secara manual tanpa Docker Compose:

1. **Build Image:**

   ```bash
   docker build -t omnisource-landing-page-fe .
   ```

2. **Jalankan Container:**

   ```bash
   docker run -p 3000:3000 omnisource-landing-page-fe
   ```

   Akses di [http://localhost:3000](http://localhost:3000).

## �📂 Struktur Folder

- `src/app`: Halaman aplikasi (Routes).
- `src/components`: Komponen UI yang dapat digunakan kembali.
- `src/styles`: Styling global dan CSS variables.
- `public`: Aset statis (gambar, model 3D).
