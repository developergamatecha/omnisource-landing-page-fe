export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white">
        {/* Header */}
        <div className="flex items-center justify-center flex-col mb-12 -bg-linear-210 from-primary to-primary/50 h-[300px]! px-8">
          <h1 className="text-6xl text-center font-bold text-green-100 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-gray-600">
            <strong>Terakhir Diperbarui: November 2025</strong>
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-8">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Pendahuluan
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Selamat datang di Platform <strong>Omnisource</strong>{' '}
                (&ldquo;Platform&rdquo;, &ldquo;Layanan&rdquo;,
                &ldquo;kami&rdquo;, atau &ldquo;kita&rdquo;).
              </p>
              <p>
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
                menggunakan, mengungkapkan, dan menjaga informasi Anda ketika
                Anda menggunakan platform manajemen tenaga kerja kami yang
                dirancang untuk perusahaan alih daya (outsourcing).
              </p>
              <p>
                Dengan mengakses atau menggunakan Platform kami, Anda menyetujui
                Kebijakan Privasi ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan ketentuan Kebijakan Privasi ini,
                mohon untuk tidak mengakses Platform.
              </p>
            </div>
          </section>

          {/* 1. Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              1. Informasi yang Kami Kumpulkan
            </h2>

            <div className="space-y-8">
              {/* 1.1 Personal Information */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  1.1 Informasi Pribadi
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami mengumpulkan informasi pribadi yang Anda berikan secara
                  sukarela saat mendaftar, menggunakan layanan kami, atau
                  menghubungi kami.
                </p>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Informasi Akun
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Kata sandi (dienkripsi)</li>
                      <li>Foto profil</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Informasi Karyawan (untuk manajemen tenaga kerja)
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Tanggal lahir dan tempat lahir</li>
                      <li>Jenis kelamin</li>
                      <li>Alamat rumah</li>
                      <li>Nomor telepon dan email</li>
                      <li>Kode identifikasi karyawan</li>
                      <li>Posisi dan peran pekerjaan</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Dokumen Identitas
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nomor Induk Kependudukan (KTP/NIK)</li>
                      <li>Nomor Pokok Wajib Pajak (NPWP)</li>
                      <li>
                        Nomor jaminan sosial (BPJS Kesehatan, BPJS
                        Ketenagakerjaan)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Data Ketenagakerjaan
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Kontrak kerja</li>
                      <li>Riwayat pendidikan</li>
                      <li>Jadwal kerja</li>
                      <li>Penugasan shift</li>
                      <li>Penugasan klien</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Informasi Keuangan
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Detail rekening bank (untuk penggajian)</li>
                      <li>Informasi gaji</li>
                      <li>Potongan pajak</li>
                      <li>Riwayat penggajian</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1.2 Automatic Information */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  1.2 Informasi yang Dikumpulkan Secara Otomatis
                </h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Informasi Perangkat
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Jenis dan model perangkat</li>
                      <li>Sistem operasi</li>
                      <li>Jenis dan versi browser</li>
                      <li>Alamat IP</li>
                      <li>Pengenal perangkat (Device identifiers)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Informasi Penggunaan
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Halaman yang dikunjungi</li>
                      <li>Fitur yang digunakan</li>
                      <li>Waktu yang dihabiskan di Platform</li>
                      <li>Pola klik</li>
                      <li>Log kesalahan (Error logs)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Data Lokasi
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>
                        Koordinat GPS (untuk pelacakan kehadiran dan patroli)
                      </li>
                      <li>Data validasi Geofence (batas wilayah virtual)</li>
                      <li>Stempel waktu lokasi</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1.3 Biometric and Media */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  1.3 Data Biometrik dan Media
                </h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Foto dan Gambar
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Foto profil</li>
                      <li>Swafoto kehadiran (clock-in/clock-out)</li>
                      <li>Foto titik pemeriksaan patroli</li>
                      <li>Foto laporan insiden</li>
                      <li>Logo perusahaan</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Rekaman Audio
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Rekaman audio SOS darurat</li>
                      <li>Catatan suara (jika berlaku)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1.4 Third Party */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  1.4 Informasi Pihak Ketiga
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami dapat menerima informasi dari:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Klien bisnis yang menyediakan data karyawan</li>
                  <li>Pemroses pembayaran untuk penagihan</li>
                  <li>Layanan verifikasi identitas</li>
                  <li>Layanan peta dan geolokasi (OpenStreetMap/Nominatim)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              2. Bagaimana Kami Menggunakan Informasi Anda
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  2.1 Penyediaan Layanan
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi Anda untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    <strong>Manajemen Akun</strong>: Membuat dan mengelola akun
                    pengguna, mengautentikasi pengguna, dan menjaga keamanan.
                  </li>
                  <li>
                    <strong>Manajemen Tenaga Kerja</strong>: Mengelola catatan
                    karyawan, penugasan, shift, dan jadwal.
                  </li>
                  <li>
                    <strong>Pelacakan Kehadiran</strong>: Mencatat waktu
                    masuk/keluar, memvalidasi lokasi melalui GPS, dan menyimpan
                    foto kehadiran.
                  </li>
                  <li>
                    <strong>Pemantauan Patroli</strong>: Melacak aktivitas
                    patroli keamanan melalui pemindaian kode QR dan verifikasi
                    titik pemeriksaan.
                  </li>
                  <li>
                    <strong>Pemrosesan Penggajian</strong>: Menghitung gaji,
                    menghasilkan slip gaji, dan memproses penggajian.
                  </li>
                  <li>
                    <strong>Pelaporan</strong>: Menghasilkan laporan aktivitas,
                    laporan kehadiran, laporan patroli, dan laporan penggajian.
                  </li>
                  <li>
                    <strong>Manajemen Klien</strong>: Mengelola hubungan klien,
                    lokasi, dan penugasan karyawan.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  2.2 Komunikasi
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi Anda untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Mengirim notifikasi dan peringatan layanan.</li>
                  <li>Mengirimkan notifikasi SOS darurat ke administrator.</li>
                  <li>Mengirim notifikasi penggajian.</li>
                  <li>Menyediakan dukungan pelanggan.</li>
                  <li>
                    Mengirim pembaruan sistem dan pemberitahuan pemeliharaan.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  2.3 Keamanan dan Keselamatan
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi Anda untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    Memverifikasi identitas pengguna dan mencegah akses tidak
                    sah.
                  </li>
                  <li>Mendeteksi dan mencegah penipuan.</li>
                  <li>Memantau ancaman keamanan.</li>
                  <li>Merpons situasi darurat (peringatan SOS).</li>
                  <li>Memelihara log audit untuk kepatuhan.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  2.4 Operasi Bisnis
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi Anda untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Memproses pembayaran langganan.</li>
                  <li>Menganalisis penggunaan layanan untuk perbaikan.</li>
                  <li>Menghasilkan analitik bisnis.</li>
                  <li>Mematuhi kewajiban hukum.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Sharing and Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              3. Berbagi dan Pengungkapan Informasi
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  3.1 Dalam Organisasi Anda
                </h3>
                <p className="text-gray-700 mb-4">
                  Informasi Anda dapat dibagikan dengan:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    <strong>Administrator</strong>: Akses penuh ke data karyawan
                    dalam organisasi mereka.
                  </li>
                  <li>
                    <strong>Supervisor</strong>: Akses terbatas ke informasi
                    anggota tim.
                  </li>
                  <li>
                    <strong>Personalia HR</strong>: Akses ke catatan karyawan
                    dan data penggajian.
                  </li>
                  <li>
                    <strong>Petugas Penggajian</strong>: Akses ke informasi gaji
                    dan pembayaran.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  3.2 Dengan Perusahaan Klien
                </h3>
                <p className="text-gray-700 mb-4">
                  Untuk karyawan alih daya (outsourcing):
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Informasi penugasan.</li>
                  <li>Catatan kehadiran di lokasi klien.</li>
                  <li>Laporan patroli dan aktivitas.</li>
                  <li>Jadwal kerja.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  3.3 Penyedia Layanan
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami berbagi informasi dengan pihak ketiga terpercaya yang
                  membantu kami:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis Penyedia
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tujuan
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Data yang Dibagikan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Cloud Hosting
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Penyimpanan dan pemrosesan data
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Semua data platform (dienkripsi)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Pemroses Pembayaran
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Penagihan langganan
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Informasi penagihan
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Layanan Peta
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Fitur lokasi
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Koordinat GPS
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Notifikasi Push
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Pengiriman peringatan
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Token perangkat, konten notifikasi
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Layanan Email
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Komunikasi
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Alamat email, konten pesan
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  3.4 Persyaratan Hukum
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami dapat mengungkapkan informasi jika diharuskan oleh:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Perintah pengadilan atau proses hukum.</li>
                  <li>Otoritas pemerintah.</li>
                  <li>Lembaga penegak hukum.</li>
                  <li>Kepatuhan terhadap peraturan.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  3.5 Transfer Bisnis
                </h3>
                <p className="text-gray-700">
                  Dalam hal merger, akuisisi, atau penjualan, informasi pengguna
                  dapat dialihkan ke entitas baru.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              4. Keamanan Data
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  4.1 Perlindungan Teknis
                </h3>
                <p className="text-gray-700 mb-4">Kami menerapkan:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    <strong>Enkripsi</strong>: Semua data dikirimkan melalui
                    HTTPS/TLS.
                  </li>
                  <li>
                    <strong>Keamanan Kata Sandi</strong>: Kata sandi di-hash dan
                    tidak pernah disimpan dalam teks biasa.
                  </li>
                  <li>
                    <strong>Kontrol Akses</strong>: Kontrol akses berbasis peran
                    (Role-Based Access Control/RBAC) yang membatasi akses data.
                  </li>
                  <li>
                    <strong>Manajemen Sesi</strong>: Token sesi aman dengan
                    kedaluwarsa otomatis.
                  </li>
                  <li>
                    <strong>Keamanan Token</strong>: Token JWT disimpan dalam
                    cookie HttpOnly.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  4.2 Perlindungan Organisasional
                </h3>
                <p className="text-gray-700 mb-4">Kami memelihara:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Pencatatan akses dan jejak audit.</li>
                  <li>Pelatihan keamanan karyawan.</li>
                  <li>Prosedur respons insiden.</li>
                  <li>Penilaian keamanan rutin.</li>
                  <li>Prosedur pencadangan dan pemulihan data.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  4.3 Retensi Data
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis Data
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Periode Retensi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Data Akun
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Durasi akun + 2 tahun
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Catatan Karyawan
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Durasi kerja + 5 tahun
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Catatan Kehadiran
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          5 tahun
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Catatan Penggajian
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          10 tahun (kepatuhan pajak)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Log Audit
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          3 tahun
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Data Lokasi
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          1 tahun
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Foto/Media
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          2 tahun
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              5. Hak dan Pilihan Anda
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  5.1 Akses dan Portabilitas
                </h3>
                <p className="text-gray-700 mb-4">Anda berhak untuk:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Mengakses informasi pribadi Anda.</li>
                  <li>Meminta salinan data Anda.</li>
                  <li>Mengekspor data Anda dalam format portabel.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  5.2 Koreksi dan Pembaruan
                </h3>
                <p className="text-gray-700 mb-4">Anda berhak untuk:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Memperbarui informasi yang tidak akurat.</li>
                  <li>Melengkapi data yang tidak lengkap.</li>
                  <li>Meminta perbaikan melalui administrator Anda.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  5.3 Penghapusan
                </h3>
                <p className="text-gray-700 mb-4">
                  Anda dapat meminta penghapusan data Anda, dengan tunduk pada:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Persyaratan retensi hukum.</li>
                  <li>Kewajiban kontrak.</li>
                  <li>Kebutuhan bisnis yang sah.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  5.4 Pembatasan dan Keberatan
                </h3>
                <p className="text-gray-700 mb-4">Anda berhak untuk:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Membatasi pemrosesan data Anda.</li>
                  <li>Menolak aktivitas pemrosesan tertentu.</li>
                  <li>Memilih keluar dari komunikasi pemasaran.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  5.5 Penarikan Persetujuan
                </h3>
                <p className="text-gray-700">
                  Jika pemrosesan didasarkan pada persetujuan, Anda dapat
                  menarik persetujuan kapan saja.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  5.6 Menjalankan Hak Anda
                </h3>
                <p className="text-gray-700 mb-4">
                  Untuk menjalankan hak Anda:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                  <li>Hubungi administrator organisasi Anda.</li>
                  <li>Kirim permintaan melalui pengaturan Platform.</li>
                  <li>
                    Hubungi kami langsung di <strong>ping@gamatecha.com</strong>
                    .
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Additional sections summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              6. Data Lokasi dan Pelacakan
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Kami mengumpulkan data lokasi untuk verifikasi kehadiran,
                geofencing, pelacakan patroli, dan respons darurat. Lokasi
                ditangkap hanya pada peristiwa tertentu (jam masuk, pemindaian
                patroli, SOS) bukan pelacakan terus-menerus.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              7. Data Biometrik
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Kami mengumpulkan foto untuk identifikasi profil, verifikasi
                kehadiran, dokumentasi patroli, dan pelaporan insiden. Foto
                disimpan dengan aman dan digunakan hanya untuk tujuan bisnis
                yang dimaksudkan.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              13. Hubungi Kami
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Untuk pertanyaan atau masalah mengenai Kebijakan Privasi ini:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>
                  <strong>Email</strong>: ping@gamatecha.com
                </p>
                <p>
                  <strong>Alamat</strong>: Jl Simpang Sulfat Selatan No 4B, Kel.
                  Pandanwangi, Kec. Blimbing, Kota Malang, Jawa Timur, Indonesia
                </p>
                <p>
                  <strong>Dukungan</strong>: support@omnisource.id
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t mb-20 border-gray-200">
            <p className="text-center text-gray-600">
              <strong>
                Dengan menggunakan Platform kami, Anda mengakui bahwa Anda telah
                membaca dan memahami Kebijakan Privasi ini.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
