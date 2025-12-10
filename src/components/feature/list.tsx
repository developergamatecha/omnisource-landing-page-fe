import {
  Activity,
  Home,
  ListCheck,
  Timer,
  TriangleAlert,
  UserCheck,
} from 'lucide-react';

const listGuide = [
  {
    icon: <UserCheck className="w-6 h-6 text-green-900" />,
    title: 'Web Owner',
    href: 'Fitur ini membantu pengguna baru memahami OmniSource dan masuk ke dalam sistem dengan aman. Mulai dari penjelasan singkat tentang aplikasi sampai proses login, lupa password, dan ganti password, semuanya dilakukan di sini.',
  },
  {
    icon: <Home className="w-6 h-6 text-green-900" />,
    title: 'Web Admin',
    href: 'Fitur ini menjadi "halaman utama" yang menampilkan konteks kerja pengguna dan ringkasan aktivitas yang relevan. Di sinilah pengguna melihat identitas singkat, lokasi kerja aktif, dan shortcut ke menu-menu penting.',
  },
  {
    icon: <ListCheck className="w-6 h-6 text-green-900" />,
    title: 'Pengawas',
    href: 'Fitur ini digunakan untuk mengelola atensi pekerjaan yang dikirim melalui aplikasi dan memastikan setiap atensi memiliki laporan yang jelas dan terdokumentasi. Atensi tidak lagi hanya disampaikan secara lisan, tetapi tercatat dalam bentuk instruksi digital.',
  },
  {
    icon: <Timer className="w-6 h-6 text-green-900" />,
    title: 'Keamanan',
    href: 'Fitur presensi menggantikan absensi manual, sehingga kehadiran terekam langsung di sistem dengan waktu yang akurat. Presensi dapat dilengkapi dengan verifikasi tambahan seperti foto dan lokasi.',
  },
  {
    icon: <Activity className="w-6 h-6 text-green-900" />,
    title: 'Kebersihan',
    href: 'Fitur ini digunakan untuk mencatat aktivitas yang dilakukan di lapangan, seperti pengecekan area kerja, kunjungan titik tertentu, atau kegiatan rutin lain yang perlu didokumentasikan.',
  },
  {
    icon: <TriangleAlert className="w-6 h-6 text-primary" />,
    title: 'Umum',
    href: 'Fitur ini disiapkan untuk mempermudah pelaporan kejadian di luar rutinitas, terutama yang bersifat penting atau darurat. Tujuannya agar informasi kejadian bisa tersampaikan dengan cepat, jelas, dan terdokumentasi.',
  },
];

export function ListFeature() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-24">
      {listGuide.map((item) => (
        <div
          key={item.title}
          className="h-[220px] flex flex-col gap-2 p-4 lg:p-8 border border-neutral-200 rounded-lg hover:border-primary duration-300 cursor-pointer hover:shadow-lg hover:bg-emerald-50"
        >
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-3 rounded-lg">{item.icon}</div>
            <p className="font-medium tex-lg lg:text-2xl">{item.title}</p>
          </div>
          <p className="text-sm">{item.href}</p>
        </div>
      ))}
    </div>
  );
}
