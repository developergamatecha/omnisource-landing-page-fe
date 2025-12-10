import {
  Activity,
  Book,
  Calendar,
  CardSim,
  CircleCheck,
  ClockIcon,
  History,
  Home,
  Image,
  Info,
  Key,
  ListCheck,
  Lock,
  LogIn,
  LucideListCheck,
  Map,
  Mic,
  Paperclip,
  Ticket,
  Timer,
  TriangleAlert,
  UserCheck,
  Verified,
} from 'lucide-react';

export const listGuide = [
  {
    icon: <UserCheck className="w-6 h-6 text-green-900" />,
    title: 'Web Owner',
    href: 'Fitur ini membantu pengguna baru memahami OmniSource dan masuk ke dalam sistem dengan aman. Mulai dari penjelasan singkat tentang aplikasi sampai proses login, lupa password, dan ganti password, semuanya dilakukan di sini.',
    features: [
      {
        icon: <Ticket className="w-6 h-6 text-green-900" />,
        title: 'Onboarding',
        description:
          'Tampilan onboarding yang menjelaskan fungsi dan manfaat aplikasi.',
      },
      {
        icon: <LogIn />,
        title: 'Login',
        description:
          'Halaman login dengan kredensial yang sudah didaftarkan perusahaan.',
      },
      {
        icon: <Lock />,
        title: 'Lupa Password',
        description: 'Fitur lupa password untuk reset akses akun.',
      },
      {
        icon: <Key />,
        title: 'Ganti Password',
        description: 'Fitur ganti password untuk menjaga keamanan akun.',
      },
    ],
    workflowSteps: [
      {
        step: 1,
        description: 'Pengguna membuka aplikasi OmniSource untuk pertama kali.',
      },
      {
        step: 2,
        description:
          'Sistem menampilkan beberapa layar onboarding yang berisi ringkasan fungsi aplikasi dan alur penggunaan utama.',
      },
      {
        step: 3,
        description:
          'Setelah onboarding selesai, pengguna diarahkan ke halaman Login.',
      },
      {
        step: 4,
        description:
          'Pengguna memasukkan Email/NRP dan password yang sebelumnya dibuat atau diberikan oleh perusahaan.',
      },
      {
        step: 5,
        description:
          'Jika kombinasi benar, pengguna berhasil masuk ke sistem dan diarahkan ke halaman beranda.',
      },
      {
        step: 6,
        description:
          'Jika pengguna lupa password, ia bisa memilih menu Lupa Password, mengisi email terdaftar, lalu sistem akan mengirimkan instruksi reset password melalui email.',
      },
      {
        step: 7,
        description:
          'Setelah login, pengguna dapat mengakses menu Ganti Password untuk mengganti password lama dengan yang baru agar keamanan akun tetap terjaga.',
      },
    ],
  },
  {
    icon: <Home className="w-6 h-6 text-green-900" />,
    title: 'Web Admin',
    href: 'Fitur ini menjadi "halaman utama" yang menampilkan konteks kerja pengguna dan ringkasan aktivitas yang relevan. Di sinilah pengguna melihat identitas singkat, lokasi kerja aktif, dan shortcut ke menu-menu penting.',
    features: [
      {
        icon: <CardSim />,
        title: 'Identitas',
        description: 'Menampilkan nama dan identitas singkat pengguna.',
      },
      {
        icon: <Map />,
        title: 'Klien & Lokasi',
        description: 'Menampilkan klien dan lokasi kerja yang sedang aktif.',
      },
      {
        icon: <Activity />,
        title: 'Menu Pintasan',
        description:
          'Menyediakan pintasan ke menu seperti presensi, tugas/atensi, aktivitas, dan fitur lain.',
      },
    ],
    workflowSteps: [
      {
        step: 1,
        description: 'Setelah login, pengguna otomatis diarahkan ke Beranda.',
      },
      {
        step: 2,
        description:
          'Di beranda, sistem menampilkan nama pengguna dan informasi lokasi kerja yang sedang aktif.',
      },
      {
        step: 3,
        description:
          'Jika diperlukan, pengguna dapat memilih atau mengganti lokasi kerja aktif dari daftar lokasi yang sudah ditetapkan perusahaan.',
      },
      {
        step: 4,
        description:
          'Beranda juga menampilkan beberapa kartu ringkasan, misalnya: status presensi hari ini, jumlah tugas yang belum selesai, atau info aktivitas terbaru.',
      },
      {
        step: 5,
        description:
          'Dari beranda, pengguna dapat mengetuk shortcut (misalnya "Presensi", "Tugas", atau "Aktivitas") untuk langsung masuk ke fitur yang ingin digunakan tanpa perlu mencari di menu lain.',
      },
    ],
  },
  {
    icon: <ListCheck className="w-6 h-6 text-green-900" />,
    title: 'Pengawas',
    href: 'Fitur ini digunakan untuk mengelola atensi pekerjaan yang dikirim melalui aplikasi dan memastikan setiap atensi memiliki laporan yang jelas dan terdokumentasi. Atensi tidak lagi hanya disampaikan secara lisan, tetapi tercatat dalam bentuk instruksi digital.',
    features: [
      {
        icon: <ListCheck />,
        title: 'Atensi',
        description: 'Daftar atensi yang perlu dikerjakan pengguna.',
      },
      {
        icon: <LucideListCheck />,
        title: 'Detail Atensi',
        description:
          'Halaman detail atensi berisi judul, deskripsi, lokasi, dan informasi pendukung.',
      },
      {
        icon: <Paperclip />,
        title: 'Laporan Atensi',
        description: 'Formulir untuk membuat laporan penyelesaian atensi.',
      },
      {
        icon: <Image />,
        title: 'Bukti Laporan',
        description: 'Upload foto sebagai bukti pekerjaan.',
      },
      {
        icon: <CircleCheck />,
        title: 'Status Atensi',
        description:
          'Status atensi (misalnya: belum dikerjakan, dalam progres, selesai).',
      },
    ],
    workflowSteps: [
      {
        step: 1,
        description:
          'Pengguna membuka menu Atensi dari beranda atau menu utama.',
      },
      {
        step: 2,
        description:
          'Sistem menampilkan daftar atensi yang sudah dialokasikan kepada pengguna.',
      },
      {
        step: 3,
        description:
          'Pengguna memilih salah satu atensi untuk melihat detail atensi: judul, deskripsi yang harus dilakukan, lokasi, dan catatan lain jika ada.',
      },
      {
        step: 4,
        description:
          'Setelah atensi dikerjakan di lapangan, pengguna kembali ke aplikasi dan membuka atensi tersebut.',
      },
      {
        step: 5,
        description:
          'Pengguna menekan tombol untuk membuat laporan, mengisi deskripsi hasil pekerjaan, dan mengunggah foto bukti bila diperlukan.',
      },
      {
        step: 6,
        description:
          'Setelah laporan dikirim, status atensi akan berubah (misalnya menjadi "Selesai") sehingga pihak yang memonitor dapat mengetahui bahwa atensi sudah dikerjakan.',
      },
      {
        step: 7,
        description:
          'Laporan ini tersimpan di sistem sebagai rekam jejak aktivitas yang dapat dilihat kembali bila diperlukan.',
      },
    ],
  },
  {
    icon: <Timer className="w-6 h-6 text-green-900" />,
    title: 'Presensi Digital & Kehadiran Karyawan',
    href: 'Fitur presensi menggantikan absensi manual, sehingga kehadiran terekam langsung di sistem dengan waktu yang akurat. Presensi dapat dilengkapi dengan verifikasi tambahan seperti foto dan lokasi.',
    features: [
      {
        icon: <ClockIcon />,
        title: 'Clock In & Clock Out',
        description: 'Tombol Clock In dan Clock Out langsung di aplikasi.',
      },
      {
        icon: <Verified />,
        title: 'Verifikasi Presensi',
        description: 'Dukungan verifikasi selfie (foto) dan lokasi GPS.',
      },
      {
        icon: <Calendar />,
        title: 'Riwayat Presensi',
        description:
          'Riwayat presensi berdasarkan tanggal dan periode tertentu.',
      },
      {
        icon: <CircleCheck />,
        title: 'Status Informasi',
        description:
          'Informasi status seperti hadir, terlambat, atau pulang lebih awal.',
      },
    ],
    workflowSteps: [
      {
        step: 1,
        description:
          'Pengguna membuka menu Presensi dari beranda atau nav utama.',
      },
      {
        step: 2,
        description: 'Pada awal shift, pengguna menekan tombol Clock In.',
      },
      {
        step: 3,
        description:
          'Sistem dapat meminta pengguna mengambil foto (selfie) dan mengizinkan akses lokasi untuk mencatat koordinat saat presensi dilakukan.',
      },
      {
        step: 4,
        description:
          'Data waktu, foto (jika ada), dan lokasi tersimpan di sistem sebagai catatan kehadiran.',
      },
      {
        step: 5,
        description:
          'Di akhir shift, pengguna kembali membuka menu presensi dan menekan tombol Clock Out.',
      },
      {
        step: 6,
        description:
          'Proses yang sama terjadi: sistem mencatat waktu dan, jika diperlukan, foto dan lokasi.',
      },
      {
        step: 7,
        description:
          'Pengguna dapat membuka bagian Riwayat Presensi untuk melihat rekap kehadiran per hari, per bulan, atau periode tertentu.',
      },
      {
        step: 8,
        description:
          'Informasi ini juga bisa digunakan oleh pihak internal perusahaan untuk keperluan penggajian, penilaian kinerja, dan laporan ke klien.',
      },
    ],
  },
  {
    icon: <Activity className="w-6 h-6 text-green-900" />,
    title: 'Pencatatan Aktivitas Lapangan',
    href: 'Fitur ini digunakan untuk mencatat aktivitas yang dilakukan di lapangan, seperti pengecekan area kerja, kunjungan titik tertentu, atau kegiatan rutin lain yang perlu didokumentasikan.',
    features: [
      {
        icon: <Book />,
        title: 'Pencatatan Aktivitas',
        description:
          'Pencatatan aktivitas beserta waktu dan deskripsi singkat.',
      },
      {
        icon: <Info />,
        title: 'Informasi',
        description:
          'Opsi penambahan informasi pendukung (misalnya lokasi atau catatan kondisi).',
      },
      {
        icon: <History />,
        title: 'Riwayat Aktivitas',
        description:
          'Riwayat aktivitas yang bisa dilihat kembali untuk keperluan monitoring dan evaluasi.',
      },
    ],
    workflowSteps: [
      {
        step: 1,
        description:
          'Ketika pengguna melakukan aktivitas tertentu di lapangan (misalnya pengecekan area), ia membuka menu Aktivitas di aplikasi.',
      },
      {
        step: 2,
        description: 'Pengguna memilih untuk menambahkan aktivitas baru.',
      },
      {
        step: 3,
        description:
          'Sistem menampilkan form aktivitas yang dapat diisi dengan: judul aktivitas, deskripsi singkat, dan detail lain jika diperlukan.',
      },
      {
        step: 4,
        description:
          'Setelah diisi, pengguna menyimpan aktivitas tersebut, dan sistem mencatat waktu input serta mengaitkannya dengan akun dan lokasi kerja pengguna.',
      },
      {
        step: 5,
        description:
          'Semua aktivitas yang telah dicatat dapat dilihat pada daftar Riwayat Aktivitas, sehingga pengguna dan pihak internal dapat meninjau kembali apa saja yang sudah dikerjakan dalam periode tertentu.',
      },
    ],
  },
  {
    icon: <TriangleAlert className="w-6 h-6 text-primary" />,
    title: 'Kejadian Khusus & Darurat (SOS)',
    href: 'Fitur ini disiapkan untuk mempermudah pelaporan kejadian di luar rutinitas, terutama yang bersifat penting atau darurat. Tujuannya agar informasi kejadian bisa tersampaikan dengan cepat, jelas, dan terdokumentasi.',
    features: [
      {
        icon: <Mic />,
        title: 'Rekam Suara',
        description:
          'Anda dapat menambahkan rekaman audio untuk melaporkan kejadian.',
      },
      {
        icon: <History />,
        title: 'Laporan Tercatat',
        description: 'Pencatatan waktu kejadian dan identitas pelapor.',
      },
      {
        icon: <CircleCheck />,
        title: 'Status Laporan',
        description:
          'Status penanganan, misalnya sudah ditindaklanjuti atau masih menunggu respons.',
      },
    ],
    workflowSteps: [
      {
        step: 1,
        description:
          'Saat terjadi kejadian khusus atau darurat di lapangan, pengguna membuka menu Kejadian/SOS di aplikasi.',
      },
      {
        step: 2,
        description:
          'Pengguna membuat laporan baru dengan menuliskan ringkasan kejadian dan keterangan penting lain (misalnya lokasi kejadian, kondisi saat ini, dan risiko yang terlihat).',
      },
      {
        step: 3,
        description:
          'Jika fitur mendukung rekaman audio, pengguna dapat merekam penjelasan singkat menggunakan mikrofon di aplikasi.',
      },
      {
        step: 4,
        description:
          'Setelah laporan dikirim, sistem menyimpan waktu pengiriman, identitas pengirim, dan isi laporan.',
      },
      {
        step: 5,
        description:
          'Pihak yang berwenang (misalnya atasan atau pengelola) dapat melihat daftar laporan kejadian ini, meninjau detailnya, dan mencatat tindak lanjut yang dilakukan.',
      },
      {
        step: 6,
        description:
          'Status laporan dapat diperbarui agar semua pihak mengetahui apakah kejadian tersebut sudah ditangani atau masih dalam proses.',
      },
    ],
  },
];
