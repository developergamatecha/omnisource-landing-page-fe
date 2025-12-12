import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-white ">
        {/* Header */}
        <div className="flex items-center justify-center flex-col mb-12 -bg-linear-210 from-primary to-primary/50 h-[300px]! px-8">
          <h1 className="text-6xl text-center font-bold text-green-100 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-gray-600">
            <strong>Terakhir Diperbarui: November 2025</strong>
          </p>
        </div>

        <div className="max-w-4xl px-8 mx-auto">
          {/* Agreement Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Persetujuan terhadap Ketentuan
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Syarat dan Ketentuan ini ('Ketentuan', 'Perjanjian
                '
                ) merupakan perjanjian yang mengikat secara hukum antara
                Anda (&quot;Pengguna&quot;, &quot;Anda&quot;) dan{' '}
                <strong>PT. Gamatecha Solusi Nusantara</strong>{' '}
                (&quot;Perusahaan&quot;, &quot;kami&quot;) yang mengatur akses
                dan penggunaan Anda terhadap Platform{' '}
                <strong>Omnisource</strong> (&quot;Platform&quot;,
                &quot;Layanan&quot;).
              </p>
              <p>
                Dengan mengakses atau menggunakan Platform kami, Anda setuju
                untuk terikat oleh Ketentuan ini. Jika Anda tidak setuju dengan
                bagian mana pun dari Ketentuan ini, Anda tidak diperkenankan
                mengakses Platform.
              </p>
            </div>
          </section>

          {/* Definitions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Definisi
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">
                      Istilah
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">
                      Definisi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Platform
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Aplikasi web dan seluler Omnisource
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Pelanggan
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Organisasi yang berlangganan dan membayar Layanan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Administrator
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Pengguna dengan hak administratif dalam akun Pelanggan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Pengguna Karyawan
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Karyawan individu yang dikelola melalui Platform
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Klien
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Perusahaan pihak ketiga tempat karyawan Pelanggan
                      ditugaskan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Konten
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Semua data, teks, gambar, dan materi yang diunggah ke atau
                      dihasilkan oleh Platform
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Langganan
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Paket berbayar yang memberikan akses ke fitur Platform
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Account Registration */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Pendaftaran Akun dan Persyaratan
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  2.1 Kelayakan
                </h3>
                <p className="text-gray-700">
                  Untuk menggunakan Platform kami, Anda harus:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Berusia minimal 18 tahun</li>
                  <li>
                    Memiliki wewenang hukum untuk masuk ke dalam Perjanjian ini
                  </li>
                  <li>
                    Diberi wewenang oleh organisasi Anda (jika menggunakan
                    sebagai karyawan)
                  </li>
                  <li>
                    Memberikan informasi pendaftaran yang akurat dan lengkap
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  2.2 Pembuatan Akun
                </h3>
                <p className="text-gray-700">Saat membuat akun:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Anda harus memberikan informasi yang akurat, terkini, dan
                    lengkap
                  </li>
                  <li>
                    Anda bertanggung jawab untuk menjaga kerahasiaan kredensial
                    Anda
                  </li>
                  <li>
                    Anda harus segera memberi tahu kami tentang akses tidak sah
                    apa pun
                  </li>
                  <li>Satu orang tidak boleh memiliki beberapa akun</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  2.3 Akun Organisasi
                </h3>
                <p className="text-gray-700">Untuk organisasi Pelanggan:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Pelanggan bertanggung jawab atas semua pengguna dalam
                    organisasi mereka
                  </li>
                  <li>
                    Administrator bertanggung jawab untuk mengelola akses
                    pengguna dengan tepat
                  </li>
                  <li>
                    Pelanggan harus memastikan semua pengguna mematuhi Ketentuan
                    ini
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  2.4 Keamanan Akun
                </h3>
                <p className="text-gray-700">Anda bertanggung jawab untuk:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Menjaga kata sandi yang kuat</li>
                  <li>Melindungi kredensial masuk (login)</li>
                  <li>Semua aktivitas di bawah akun Anda</li>
                  <li>Melaporkan pelanggaran keamanan segera</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Subscription Plans */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Paket Langganan dan Penagihan
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  3.1 Tingkatan Langganan
                </h3>
                <p className="text-gray-700">
                  Kami menawarkan berbagai paket berlangganan dengan perbedaan
                  dalam:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Kuota karyawan</li>
                  <li>Kuota klien</li>
                  <li>Akses fitur</li>
                  <li>Tingkat dukungan</li>
                  <li>Batas penyimpanan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  3.2 Ketentuan Penagihan
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Langganan ditagih di muka secara bulanan atau tahunan</li>
                  <li>
                    Biaya tidak dapat dikembalikan kecuali diharuskan oleh hukum
                  </li>
                  <li>
                    Harga dapat berubah dengan pemberitahuan 30 hari sebelumnya
                  </li>
                  <li>Gagal bayar dapat mengakibatkan penangguhan layanan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  3.3 Uji Coba Gratis
                </h3>
                <p className="text-gray-700">Jika ditawarkan:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Periode uji coba memberikan akses terbatas ke fitur Platform
                  </li>
                  <li>
                    Akun uji coba akan dikonversi menjadi langganan berbayar
                    atau berakhir
                  </li>
                  <li>Batasan uji coba ditentukan saat pendaftaran</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Permitted Use */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Penggunaan yang Diizinkan
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  4.1 Penggunaan yang Sah
                </h3>
                <p className="text-gray-700">
                  Anda dapat menggunakan Platform untuk:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Mengelola catatan karyawan dan data tenaga kerja</li>
                  <li>Melacak kehadiran karyawan dan jam kerja</li>
                  <li>Mengelola hubungan dan penugasan klien</li>
                  <li>Menjadwalkan shift dan rotasi karyawan</li>
                  <li>Memproses penggajian dan menghasilkan slip gaji</li>
                  <li>Memantau aktivitas patroli dan keamanan</li>
                  <li>Menghasilkan laporan untuk operasi bisnis</li>
                  <li>Berkomunikasi dengan karyawan melalui notifikasi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  4.2 Batasan Penggunaan
                </h3>
                <p className="text-gray-700 font-medium">
                  Anda setuju untuk TIDAK:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Menggunakan Platform untuk tujuan ilegal apa pun</li>
                  <li>Melanggar hukum atau peraturan yang berlaku</li>
                  <li>
                    Menjual kembali atau mendistribusikan ulang Platform tanpa
                    izin
                  </li>
                  <li>
                    Menggunakan Platform untuk melecehkan, menyalahgunakan, atau
                    membahayakan orang lain
                  </li>
                  <li>Mencoba mendapatkan akses tidak sah ke sistem</li>
                  <li>Mengganggu atau merusak Platform</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data and Content */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Data dan Konten
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  5.1 Data Anda
                </h3>
                <p className="text-gray-700">
                  Anda memegang kepemilikan atas semua data yang Anda unggah ke
                  Platform, termasuk:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Informasi karyawan</li>
                  <li>Catatan klien</li>
                  <li>Data kehadiran</li>
                  <li>Catatan penggajian</li>
                  <li>Foto dan media</li>
                  <li>Laporan dan dokumen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  5.2 Konten yang Dilarang
                </h3>
                <p className="text-gray-700">
                  Anda tidak boleh mengunggah konten yang:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Ilegal, berbahaya, atau menyinggung</li>
                  <li>Melanggar hak privasi</li>
                  <li>Berisi malware atau virus</li>
                  <li>Melanggar kekayaan intelektual</li>
                  <li>Berisi informasi palsu atau menyesatkan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Privasi dan Perlindungan Data
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Pengumpulan dan penggunaan data pribadi kami diatur oleh
                Kebijakan Privasi kami, yang dimasukkan ke dalam Ketentuan ini
                sebagai referensi.
              </p>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  9.1 Pemrosesan Data
                </h3>
                <p className="text-gray-700">Untuk Pelanggan:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Kami memproses data atas nama Anda sebagai pemroses data
                  </li>
                  <li>
                    Anda tetap menjadi pengontrol data untuk data karyawan
                  </li>
                  <li>
                    Perjanjian Pemrosesan Data tersedia berdasarkan permintaan
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Keamanan
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Kami menerapkan langkah-langkah keamanan termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enkripsi data saat transit dan saat disimpan</li>
                <li>Kontrol akses dan otentikasi</li>
                <li>Penilaian keamanan rutin</li>
                <li>Prosedur respons insiden</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Nama Perusahaan:</strong> PT. Gamatecha Solusi
                  Nusantara
                </p>
                <p>
                  <strong>Email:</strong> ping@gamatecha.com
                </p>
                <p>
                  <strong>Alamat:</strong> Jl Simpang Sulfat Selatan No 4B, Kel.
                  Pandanwangi, Kec. Blimbing, Kota Malang, Jawa Timur, Indonesia
                </p>
                <p>
                  <strong>Dukungan:</strong> support@omnisource.id
                </p>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="mb-8">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-900 font-medium">
                DENGAN MENGGUNAKAN PLATFORM, ANDA MENGAKUI BAHWA ANDA TELAH
                MEMBACA, MEMAHAMI, DAN SETUJU UNTUK TERIKAT OLEH SYARAT LAYANAN
                INI.
              </p>
              <p className="text-blue-900 mt-2">
                Jika Anda menerima Ketentuan ini atas nama organisasi, Anda
                menyatakan bahwa Anda memiliki wewenang untuk mengikat
                organisasi tersebut pada Ketentuan ini.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t">
            <p>Versi 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
