# 🤝 Volunteer — Volunteer Platform (Web Relawan)

Volunteer Platform adalah platform berbasis web premium dan responsif yang menghubungkan **relawan (volunteer)** dengan **organisasi/yayasan** penyelenggara kegiatan sosial (lingkungan, pendidikan, bencana, kesehatan, dll) secara terstruktur.

Aplikasi ini dibangun menggunakan arsitektur **MERN/PERN modern (React, Node.js, Express, PostgreSQL, dan Sequelize ORM)** dengan menerapkan standar penulisan kode terstruktur, modular, dan bersih (clean code).

---

## 🚀 Fitur Utama & Keunggulan Aplikasi

1. **Antarmuka Premium & Responsif (Responsive Glassmorphism UI)**:
   - Desain modern berorientasi perangkat mobile (*mobile-first design*) dengan *Glassmorphic components* (panel transparan blur yang elegan).
   - Bilah navigasi ([Navbar.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/components/Navbar.jsx)) responsif dengan menu hamburger lipat otomatis untuk ponsel/tablet.
   - Bilah progres kuota relawan dinamis (*real-time progress bar*) di setiap kartu kegiatan.
2. **Otorisasi Berbasis Peran Terproteksi (Role-Based Access Control - RBAC)**:
   - Pembatasan hak akses rute halaman (*route guards*) di frontend menggunakan [ProtectedRoute.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/components/ProtectedRoute.jsx).
   - Proteksi rute API terenkripsi JWT token di backend melalui middleware [authMiddleware.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/middleware/authMiddleware.js).
3. **Penyaringan & Pencarian Dinamis**:
   - Filter cepat kategori kegiatan dan pencarian berbasis kata kunci (judul/lokasi) langsung dari antarmuka beranda dan eksplorasi.
4. **Dasbor Terintegrasi**:
   - **Dasbor Relawan**: Tempat volunteer melihat riwayat pendaftaran event, melacak status persetujuan secara real-time (`pending`, `approved`, `rejected`, `attended`), serta memperbarui profil kontak pribadi.
   - **Dasbor Admin**: Panel lengkap bagi Administrator/Penyelenggara untuk melakukan operasi CRUD event (membuat, mengubah, menghapus kegiatan sosial), menyetujui atau menolak pendaftaran volunteer, dan mengelola kehadiran.
