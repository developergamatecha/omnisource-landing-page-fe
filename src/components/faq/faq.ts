export const faqDataList = [
  {
    q: 'Saya lupa password. Apa yang harus saya lakukan?',
    a: 'Pada halaman Login, pilih menu Lupa Password. Masukkan email yang terdaftar, lalu tekan Kirim. OmniSource akan mengirimkan instruksi ke email untuk mengatur ulang password. Setelah password baru dibuat, gunakan password tersebut untuk login kembali.',
    context: 'akun',
  },
  {
    q: 'Kenapa klien atau lokasi kerja saya tidak muncul di aplikasi?',
    a: `
        <div>
            Klien dan lokasi kerja yang tampil di aplikasi hanya yang sudah diassign ke akunmu. Jika klien atau lokasi tertentu tidak muncul, kemungkinan:
            <ul class="list">
                <li>Lokasi tersebut belum diassign ke akunmu.</li>
                <li>Ada perubahan data klien/lokasi yang belum tersinkron.</li>
            </ul>
            <a href="">Lihat penugasan klien dan lokasi</a>
            Silakan hubungi Pengawas atau admin untuk memastikan penugasan klien dan lokasi sudah sesuai.
        </div>
        `,
    context: 'akun',
  },
  {
    q: 'Mengapa saya tidak melihat beberapa menu seperti Patroli atau pembuatan Atensi? ',
    a: 'Setiap menu di OmniSource diatur berdasarkan role dan hak akses. Misalnya, fitur Patroli lebih banyak digunakan oleh petugas Keamanan dan Pengawas, sedangkan pembuatan Atensi hanya bisa dilakukan oleh Pengawas. Jika sebuah menu tidak muncul, kemungkinan role-mu memang tidak memiliki akses ke menu tersebut. Untuk perubahan role, koordinasikan dengan admin.',
    context: 'fitur',
  },
  {
    q: 'Apakah laporan Atensi yang sudah saya kirim bisa diubah? ',
    a: 'Umumnya laporan Atensi dianggap final setelah dikirim, karena menjadi bukti bahwa tugas telah dikerjakan. Jika terjadi kesalahan isi laporan, komunikasikan dengan Pengawas atau admin. Mereka dapat menentukan apakah perlu dibuat atensi baru atau penyesuaian melalui proses internal.',
    context: 'tugas',
  },
  {
    q: 'Clock In/Clock Out saya gagal karena kamera atau lokasi tidak aktif. Apa yang harus saya lakukan?',
    a: `Presensi di OmniSource bisa memerlukan selfie dan data lokasi. Jika gagal:
        <ul>
            <li> Pastikan izin kamera dan lokasi sudah diaktifkan untuk aplikasi OmniSource di pengaturan perangkat. </li>
            <li> Pastikan koneksi internet stabil. </li>
            <li> Tutup dan buka kembali aplikasi, lalu ulangi proses presensi. </li>
        </ul>
        Jika tetap gagal, laporkan ke Pengawas atau admin untuk pengecekan lebih lanjut. 
        `,
    context: 'presensi',
  },
  {
    q: 'Kapan saya harus menggunakan fitur SOS?',
    a: 'Gunakan fitur SOS saat terjadi kejadian darurat yang membutuhkan perhatian segera, misalnya insiden keamanan, situasi membahayakan, atau kondisi lain yang butuh penanganan cepat. Sertakan informasi singkat dan jelas dalam rekaman: lokasi, kondisi, dan tindakan awal yang sudah dilakukan. Hindari menggunakan SOS untuk hal rutin atau non-darurat.',
    context: 'sos',
  },
  {
    q: 'Apa perbedaan penggunaan OmniSource untuk Pengawas, Keamanan, Kebersihan, dan Umum?',
    a: `
        <ul>
            <li>Pengawas: memantau beberapa klien dan lokasi, membuat dan mereview Atensi, melihat presensi, patroli, dan SOS.</li>
            <li>Keamanan: fokus pada patroli, presensi, laporan kejadian, dan pelaksanaan Atensi terkait keamanan.</li>
            <li>Kebersihan: menjalankan tugas kebersihan yang dikirim via Atensi, mengirim laporan beserta foto bukti kerja, dan melakukan presensi.</li>
            <li>Umum: menangani tugas operasional lain sesuai kebutuhan klien, dengan pola atensi, presensi, dan pelaporan yang serupa.</li>
        </ul>
    `,
    context: 'fitur',
  },
];

export const contextList = ['akun', 'fitur', 'presensi', 'tugas', 'sos'];
