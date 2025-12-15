# Dokumentasi Teknis

### Diupdate pada: 15 Desember 2025

## 1. Gambaran Umum Proyek

OmniSource Landing Page adalah Web Landing Page yang dibangun dengan **Next.js
15+** (App Router), menggunakan **Tailwind CSS v4** untuk styling dan
**Three.js** (via React Three Fiber) untuk visualisasi 3D. Website ini dibuat
untuk menjadikan platform pemasaran sekaligus entry point Web App dan Mobile App
OmniSource bagi pengguna baru.

---

## 2. Pola Layout

### Struktur Inti

Aplikasi ini mengikuti arsitektur **Next.js App Router**.

- **Root Layout (`src/app/layout.tsx`)**:
  - Mendefinisikan struktur HTML global.
  - Menerapkan font lokal (`Rubik`).
  - Membungkus konten dengan global providers (contoh: `Toaster`).
  - Mengatur global metadata (SEO, OpenGraph, Twitter Cards).

### Arsitektur Komponen

Landing page (`src/app/page.tsx`) menggunakan **Section-based architecture**.
Setiap segmen visual utama dari halaman dienkapsulasi sebagai komponen mandiri
(standalone component):

- `SectionHero`
- `SectionProduct`
- `SectionSolutions`
- `SectionInfo`, dll.

Hal ini meningkatkan modularity dan mempermudah untuk melakukan reorder atau
update pada section tertentu tanpa mempengaruhi sisa halaman.

### Responsive Design

- **Container Strategy**: Utility global `.container` didefinisikan dalam
  `globals.css` untuk memusatkan konten dengan maximum width `1400px`.
- **Breakpoints**: Menggunakan standard Tailwind breakpoints (`sm`, `md`, `lg`,
  `xl`).
- **Logic-based Responsiveness**: Beberapa komponen (seperti 3D model)
  menggunakan JavaScript hooks untuk mendeteksi screen width dan menyesuaikan
  rendering logic secara dinamis (contoh: mengubah scale 3D model pada mobile vs
  desktop).

---

## 3. Routing

### App Router

- **File System Routing**: Routes didefinisikan oleh struktur folder di dalam
  `src/app`.
- **Route Groups**: Folder yang dibungkus dalam tanda kurung (contoh: `(legal)`)
  digunakan untuk mengorganisir routes tanpa mempengaruhi struktur URL.
- **Aliases**: Proyek ini menggunakan alias `~` untuk mereferensikan direktori
  `src` (contoh: `~/components/ui/sonner`), memastikan import paths yang bersih.

### Key Routes

- `/`: Main Landing Page
- `/data-security`: Halaman Data Security
- `/(legal)`: Kemungkinan berisi halaman Policy/Terms.

---

## 4. Styling

### Tailwind CSS v4

Proyek ini menggunakan konfigurasi Tailwind CSS v4 terbaru.

- **Global Styles**: Berlokasi di `src/styles/globals.css`.
- **CSS Variables**: Theming ditangani sepenuhnya melalui CSS variables,
  memungkinkan update yang mudah dan dukungan Dark Mode.
  - Colors: `--primary`, `--secondary`, `--background`, `--foreground`, dll.
  - Radius: `--radius`.
- **Custom Tokens**:
  - Gradients: `--gradient-primary`, `--gradient-soft`.
  - Shadows: `--shadow-card`, `--shadow-elevated`.

### Animations

- **Library**: Plugin `tw-animate-css` digunakan.
- **Custom Keyframes**: Didefinisikan dalam layer `@theme` (contoh: `fade-in`).

### Theming System

Palet warna diturunkan dari identitas brand OmniSource:

- **Primary Green**: `hsl(122 44% 49%)`
- **Dark Mode**: Didukung melalui class `.dark`, yang meng-override CSS
  variables.

---

## 5. Implementasi Aset 3D

Visualisasi 3D dibangun menggunakan **React Three Fiber (R3F)** dan **Drei**.

### Arsitektur

- **Component**: `src/components/home/overview/laptop-model.tsx`
- **Loading**: Hook `useGLTF` digunakan untuk memuat file binary glTF yang telah
  dioptimasi (`.glb`).
- **Optimization**:
  - Model dikompresi (`.compressed.glb`).
  - Preloading diimplementasikan via `useGLTF.preload()`.

### Scene Setup

- **Canvas**: Komponen `<Canvas>` dari R3F merender konteks WebGL.
- **Lighting**: Kombinasi dari `ambientLight`, `pointLight`, dan `Environment`
  (city preset).
- **Interactivity**: `OrbitControls` menangani interaksi user (rotation, zoom
  constraints).
- **Motion**: Komponen `Float` menambahkan animasi mengambang, dan `useFrame`
  digunakan untuk efek rotasi berkelanjutan.

### Adaptive Rendering

Scene 3D beradaptasi dengan kemampuan perangkat:

```typescript
const isMobile = size.width < 640;
const scale = isMobile ? 7 : 9;
```

Ini memastikan model tetap terlihat dan memiliki ukuran yang proporsional di
berbagai perangkat.

---

## 6. Saran untuk Pengembangan Masa Depan

### Performance

- **Lazy Loading**: Implementasikan `next/dynamic` atau `React.lazy` untuk
  komponen 3D yang berat guna meningkatkan Initial Load Time (LCP).
- **Draco Compression**: Pastikan model `.glb` menggunakan kompresi Draco untuk
  ukuran file yang lebih kecil.

### Testing

- **Unit Tests**: Gunakan Jest + React Testing Library untuk komponen inti.
- **E2E Tests**: Setup Playwright atau Cypress untuk mengetes user flows yang
  krusial (contoh: Form submissions).

### Type Safety

- **Strict Mode**: Pastikan `tsconfig.json` mengaktifkan strict mode dan
  selesaikan tipe `any` yang ada.
- **Zod Schemas**: Perluas penggunaan Zod untuk validasi form dan parsing
  respons API.

### Accessibility (a11y)

- **3D Fallbacks**: Sediakan fallback static image untuk perangkat yang tidak
  bisa merender WebGL atau untuk user dengan preferensi reduced motion.
- **ARIA Labels**: Pastikan semua elemen interaktif, termasuk kontrol 3D,
  memiliki ARIA labels yang tepat.

### Integrasi Lebih Lanjut

- Semua formulir masih menggunakan metode dasar seperti (mail:to), sehingga
  perlu diintegrasikan dengan API agar data dapat diolah lebih lanjut.
- Pengembangan kedepan perlu mengintegrasikan dengan platform advertisment
  seperti Google Ads atau Meta Ads, untuk memantau traffic dan performa iklan.
