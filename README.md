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

---

## 📂 Struktur Project & Deskripsi Berkas

```
volunteer/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Koneksi Sequelize ORM ke PostgreSQL & konfigurasi database pooling
│   │   ├── models/                  # Representasi skema database (Entity) & asosiasi relasi
│   │   │   ├── index.js             # Pusat deklarasi relasi asosiasi data (Category, Event, Registration, User)
│   │   │   ├── User.js              # Model pengguna (nama, email, password_hash, role: volunteer/admin)
│   │   │   ├── Event.js             # Model kegiatan sosial (judul, deskripsi, lokasi, kuota, tanggal, dll)
│   │   │   ├── Category.js          # Model kategori kegiatan (Lingkungan, Pendidikan, Bencana Alam, Kesehatan)
│   │   │   └── Registration.js      # Model tabel perantara pendaftaran relawan (many-to-many relasi)
│   │   ├── controllers/             # Lapisan pengendali logika bisnis tiap domain/resource
│   │   │   ├── authController.js    # Mengelola registrasi user baru, login JWT, & profil
│   │   │   ├── eventController.js   # CRUD kegiatan, pencarian dinamis, & raw SQL query statistik
│   │   │   ├── categoryController.js# Mengelola pembuatan dan daftar kategori kegiatan
│   │   │   └── registrationController.js # Logika pendaftaran kegiatan & persetujuan relawan oleh admin
│   │   ├── routes/                  # Definisi rute/endpoint REST API
│   │   ├── middleware/              # Middleware otentikasi JWT & global error handler
│   │   │   ├── authMiddleware.js    # Verifikasi token JWT & filter otorisasi Role (RBAC)
│   │   │   └── errorHandler.js      # Penangan error global terpusat (response format JSON)
│   │   ├── utils/                   # Class error kustom (OOP) & helper async handler
│   │   ├── sql/
│   │   │   ├── schema.sql           # Skema DDL PostgreSQL murni + CONSTRAINT + ENUM
│   │   │   └── migration.sql        # Skema migrasi menyederhanakan tabel & menghapus role lama
│   │   └── seed/
│   │       └── seed.js              # Pengisian data dummy awal untuk demo
│   ├── package.json
│   └── vercel.json                  # Konfigurasi deploy serverless Vercel backend
└── frontend/
    ├── src/
    │   ├── api/                     # Modul client Axios
    │   │   ├── axiosClient.jsx      # Konfigurasi Axios Client dengan JWT injector & penanganan error
    │   │   └── resources.jsx        # Kumpulan fungsi pemanggil REST API terkelompok
    │   ├── context/
    │   │   └── AuthContext.jsx      # State manajemen otorisasi global (Session persistent via LocalStorage)
    │   ├── components/              # Komponen pembantu (Navbar responsif, kartu kegiatan, & Route Guard)
    │   │   ├── EventCard.jsx        # Komponen kartu untuk merender ringkasan info event
    │   │   ├── Navbar.jsx           # Bilah navigasi dengan menu mobile responsif
    │   │   └── ProtectedRoute.jsx   # Pengaman rute halaman berdasarkan Role
    │   ├── pages/                   # Beranda, Detail Event, login/register, & Dashboard
    │   │   ├── Home.jsx             # Halaman utama dengan hero section, filter kategori, & statistik
    │   │   ├── Events.jsx           # Halaman eksplorasi dengan fitur pencarian kegiatan
    │   │   ├── EventDetail.jsx      # Deskripsi lengkap event, info kuota, & tombol daftar relawan
    │   │   ├── Login.jsx            # Formulir masuk akun relawan / admin
    │   │   ├── Register.jsx         # Formulir pendaftaran akun relawan baru
    │   │   ├── Dashboard.jsx        # Panel dasbor relawan (volunteer)
    │   │   ├── AdminDashboard.jsx   # Panel dasbor pengelola/admin untuk mengelola event & pendaftaran
    │   │   └── Komunitas.jsx        # Halaman informasi komunitas sosial
    │   └── styles/
    │       └── index.css            # Token desain, glassmorphic UI, dan kustomisasi gaya global
    ├── package.json
    └── vercel.json                  # Konfigurasi deploy SPA routing Vercel frontend
```

---

## 🔄 Alur Sistem & Data Flow

Berikut adalah visualisasi alur operasi utama (Autentikasi, Pendaftaran Kegiatan, dan Persetujuan) di dalam platform VolunTree:

```mermaid
sequenceDiagram
    autonumber
    actor U as Relawan / Admin
    participant F as React Frontend
    participant B as Express Backend
    participant DB as PostgreSQL Database

    rect rgb(30, 40, 50)
    Note over U, DB: Alur Autentikasi & Login
    U->>F: Masukkan email & password di halaman Login
    F->>B: POST /api/auth/login
    B->>DB: Cari User berdasarkan email (users table)
    DB-->>B: Mengembalikan password_hash & detail user
    B->>B: Validasi password (bcrypt.compare) & Generate JWT Token
    B-->>F: Mengembalikan Token JWT & Detail User (id, nama, role)
    F->>F: Simpan Token di LocalStorage ('volunteer_token') & simpan state user
    end

    rect rgb(40, 50, 60)
    Note over U, DB: Alur Pendaftaran Kegiatan (Volunteer)
    U->>F: Klik "Daftar Jadi Relawan" di Halaman Detail Event
    F->>B: POST /api/registrations (Membawa Header Authorization: Bearer <token>)
    B->>B: Validasi JWT & cek role ('volunteer') via authMiddleware
    B->>B: Validasi bisnis (Cek apakah kuota masih ada & belum pernah mendaftar)
    B->>DB: INSERT INTO registrations (event_id, user_id, status='pending')
    DB-->>B: Berhasil disimpan
    B-->>F: Mengembalikan response sukses
    F->>U: Tampilkan notifikasi "Pendaftaran berhasil, menunggu persetujuan admin"
    end

    rect rgb(50, 60, 70)
    Note over U, DB: Alur Persetujuan Pendaftaran (Admin)
    U->>F: Admin masuk ke AdminDashboard -> Kelola Pendaftar
    F->>B: GET /api/registrations/event/:eventId (Membawa JWT Admin)
    B->>DB: SELECT * FROM registrations WHERE event_id = :eventId
    DB-->>B: Mengembalikan daftar data pendaftar & relawan
    B-->>F: Kirim daftar pendaftar dalam bentuk JSON
    U->>F: Klik tombol "Setujui" (Approve) atau "Tolak" (Reject)
    F->>B: PATCH /api/registrations/:id/status { status: 'approved' }
    B->>B: Cek otorisasi role 'admin'
    B->>DB: UPDATE registrations SET status = 'approved' WHERE id = :id
    DB-->>B: Berhasil memperbarui data pendaftaran
    B-->>F: Mengembalikan status updated
    F->>U: Perbarui antarmuka dashboard admin & kurangi kuota event secara real-time
    end
```

---

## 🔐 Hak Akses & Peran Pengguna (Role-Based Access Control)

| Peran (Role) | Hak Akses Utama (Otorisasi) | Endpoint Backend Terkait | Komponen / Halaman Frontend |
| :--- | :--- | :--- | :--- |
| **Publik / Guest** *(Belum Login)* | • Mengeksplorasi kegiatan sosial<br>• Mencari event berdasarkan keyword & kategori<br>• Registrasi akun baru & Login | • `GET /api/events`<br>• `GET /api/categories`<br>• `GET /api/events/:id`<br>• `POST /api/auth/login`<br>• `POST /api/auth/register` | • `Home.jsx`<br>• `Events.jsx`<br>• `EventDetail.jsx`<br>• `Login.jsx`<br>• `Register.jsx`<br>• `Komunitas.jsx` |
| **Volunteer** *(Relawan Terdaftar)* | • Melihat & memperbarui profil diri<br>• Mendaftar ke kegiatan sosial aktif<br>• Melihat dasbor riwayat pendaftaran event | • `GET /api/auth/me`<br>• `PUT /api/auth/profile`<br>• `POST /api/registrations`<br>• `GET /api/registrations/me` | • `Dashboard.jsx`<br>• Tombol daftar di `EventDetail.jsx`<br>• `ProtectedRoute` (role: volunteer) |
| **Admin** *(Pengelola & Penyelenggara)* | • Membuat kegiatan baru<br>• Mengubah & menghapus kegiatan sosial<br>• Menyetujui/menolak/mencatat kehadiran relawan<br>• Menambahkan kategori sosial baru | • `POST/PUT/DELETE /api/events`<br>• `GET /api/registrations/event/:eventId`<br>• `PATCH /api/registrations/:id/status`<br>• `POST /api/categories` | • `AdminDashboard.jsx`<br>• Tautan dasbor admin di `Navbar.jsx`<br>• `ProtectedRoute` (role: admin) |

---

## 🛠️ Cara Menjalankan secara Lokal

### 1. Persiapan Database (PostgreSQL)
Aplikasi ini menggunakan database PostgreSQL.
1. Masuk ke terminal PostgreSQL Anda (`psql`) atau program GUI (seperti pgAdmin, DBeaver).
2. Buat database baru dengan nama `voluntree_db`:
   ```sql
   CREATE DATABASE voluntree_db;
   ```
3. Impor struktur skema database awal (DDL):
   ```bash
   psql -U postgres -d voluntree_db -f backend/src/sql/schema.sql
   ```

### 2. Jalankan Server Backend
1. Masuk ke folder backend:
   ```bash
   cd backend
   ```
2. Buat file konfigurasi `.env` dengan menyalin file `.env.example`, lalu sesuaikan kredensial database Anda:
   ```bash
   PORT=5000
   DATABASE_URL=postgresql://postgres:password_kamu@localhost:5432/voluntree_db
   JWT_SECRET=voluntree_jwt_secret_key_987654321
   NODE_ENV=development
   ```
3. Install semua pustaka dependensi dan jalankan database seeder untuk mengisi data uji coba awal:
   ```bash
   npm install
   npm run seed
   ```
4. Jalankan backend server dalam mode development:
   ```bash
   npm run dev
   ```
   *(Server REST API akan berjalan secara aktif di http://localhost:5000)*

### 3. Jalankan Client Frontend (di Terminal Baru)
1. Buka terminal baru dan masuk ke folder frontend:
   ```bash
   cd frontend
   ```
2. Install dependensi frontend:
   ```bash
   npm install
   ```
3. Jalankan server frontend Vite:
   ```bash
   npm run dev
   ```
   *(Aplikasi web client akan berjalan dan dapat diakses di http://localhost:5173)*

### Kredensial Akun Demo (Hasil `npm run seed`):
*   **Admin (Penyelenggara)**: `admin@volunteer.id` / password: `admin123`
*   **Volunteer (Relawan)**: `volunteer@volunteer.id` / password: `vol12345`

---

## 🎯 Panduan Bukti Uji Kompetensi (11 Unit Kompetensi Lengkap)

Gunakan panduan detail di bawah ini sebagai **contekan utama** saat mempresentasikan hasil pengerjaan proyek dan memperlihatkan baris kode kepada **Asesor**:

### 1. Mengimplementasikan User Interface
*   **Letak Bukti di Kode:**
    *   [index.css](file:///c:/Users/HP/Downloads/voluntree/frontend/src/styles/index.css) (Baris 20-45): Implementasi token styling glassmorphism kustom.
    *   [Navbar.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/components/Navbar.jsx): Navigasi responsif dengan menu mobile hamburger.
    *   [Home.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/pages/Home.jsx): Desain layout grid dinamis, panel statistik, dan filter kategori.
    *   [AdminDashboard.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/pages/AdminDashboard.jsx): Layout dashboard admin yang rapi dengan manajemen tabel.
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya merancang dan membangun antarmuka web interaktif menggunakan React dengan gaya desain modern 'Glassmorphism' (panel transparan dengan blur). CSS ditulis secara terstruktur menggunakan utilitas TailwindCSS dan class kustom seperti `.glass-panel` dan `.glass-card` di file index.css. Saya juga memastikan responsivitas UI dengan menu hamburger di Navbar dan grid yang otomatis melipat vertikal ketika diakses melalui perangkat ponsel pintar (mobile-friendly)."*

### 2. Mengimplementasikan Rancangan Entitas & Keterkaitan Antar Entitas
*   **Letak Bukti di Kode:**
    *   [schema.sql](file:///c:/Users/HP/Downloads/voluntree/backend/src/sql/schema.sql) (Baris 22-64): Definisi tabel relasional PostgreSQL lengkap dengan foreign key constraints.
    *   [index.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/models/index.js) (Baris 7-25): Definisi asosiasi relasi antar entitas menggunakan Sequelize ORM.
*   **Cara Menjelaskan ke Asesor:**
    > *"Database aplikasi ini menggunakan 4 entitas utama: Users, Categories, Events, dan Registrations. Relasi antar entitas diimplementasikan secara eksplisit di backend/src/models/index.js. Hubungannya meliputi relasi One-to-Many antara Category ↔ Event (satu kategori memiliki banyak kegiatan) dan relasi Many-to-Many antara User ↔ Event yang dihubungkan melalui tabel pendaftaran Registrations (relawan mendaftar ke banyak event, dan satu event menampung banyak relawan) lengkap dengan aturan CASCADE saat data dihapus."*

### 3. Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Teks, Grafik, dan Multimedia
*   **Letak Bukti di Kode:**
    *   [EventCard.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/components/EventCard.jsx) (Baris 30-45): Kalkulasi matematika kuota sisa, visual progress bar kuota relawan terkumpul, dan pemformatan tanggal Indonesia.
    *   [Home.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/pages/Home.jsx) (Baris 6-18): Objek pemetaan dinamis untuk emoji grafik kategori kegiatan dan warna latar belakang dinamis.
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya mengimplementasikan pemrosesan teks, visual grafik (progress bar), dan multimedia pada antarmuka. Di komponen EventCard.jsx, saya memproses tanggal ke dalam bahasa Indonesia menggunakan `.toLocaleDateString('id-ID')`. Saya juga mengalkulasi persentase relawan yang disetujui secara matematis untuk merender komponen grafik progress bar yang berubah warna dan panjangnya secara dinamis sesuai sisa kuota yang tersedia."*

### 4. Menyusun Fungsi, File, atau Sumber Daya Pemrograman Lain dalam Organisasi yang Rapi
*   **Letak Bukti di Kode:**
    *   Struktur direktori [backend/src](file:///c:/Users/HP/Downloads/voluntree/backend/src/) dan [frontend/src](file:///c:/Users/HP/Downloads/voluntree/frontend/src/).
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya mengorganisasi file proyek secara rapi dan modular agar mudah dipelihara. Backend menggunakan pola MVC yang memisahkan database models, Express routes, controllers, middleware, dan SQL scripts. Sisi frontend menggunakan React yang membagi sumber daya ke dalam folder api (untuk HTTP client), components (elemen UI yang reusable), context (penyimpanan state otorisasi global), pages (halaman web utama), dan styles (berkas stylesheet)."*

### 5. Menulis Kode dengan Prinsip Sesuai Guidelines dan Best Practices
*   **Letak Bukti di Kode:**
    *   [ApiError.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/utils/ApiError.js): Class error terstandar untuk memformat error HTTP secara konsisten.
    *   [errorHandler.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/middleware/errorHandler.js): Middleware penangan error global di Express.
    *   [axiosClient.jsx](file:///c:/Users/HP/Downloads/voluntree/frontend/src/api/axiosClient.jsx) (Baris 8-25): Menggunakan interceptors untuk menyuntikkan token JWT secara DRY (Don't Repeat Yourself).
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya menulis kode dengan mengikuti best practices industri. Konfigurasi rahasia seperti DB_PASSWORD dan JWT_SECRET diamankan di file `.env`. Untuk penanganan kesalahan di backend, saya mengimplementasikan middleware error handling terpusat (errorHandler.js) dikombinasikan dengan class ApiError kustom. Di frontend, saya mengonfigurasi interceptor Axios agar JWT token disisipkan secara otomatis pada setiap request HTTP ke backend tanpa perlu menulis kode berulang."*

### 6. Mengimplementasikan Pemrograman Terstruktur
*   **Letak Bukti di Kode:**
    *   [registrationController.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/controllers/registrationController.js) (Baris 11-45): Blok percabangan bersarang (*nested if-else*) untuk validasi bisnis.
    *   [eventController.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/controllers/eventController.js) (Baris 10-20): Pembangunan kondisi query SQL WHERE dinamis berdasarkan input parameter pencarian.
*   **Cara Menjelaskan ke Asesor:**
    > *"Aplikasi ini ditulis dengan kaidah pemrograman terstruktur. Saya memanfaatkan alur kendali logika percabangan (if-else) dan penanganan blok try-catch untuk mengendalikan alur program. Contoh nyata ada di registrationController.js saat volunteer mendaftar event, di mana sistem melakukan filter bertahap untuk memvalidasi apakah event sudah lewat tanggalnya, apakah kuota penuh, atau apakah user sudah pernah mendaftar."*

### 7. Mengimplementasikan Pemrograman Berorientasi Objek (OOP)
*   **Letak Bukti di Kode:**
    *   [User.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/models/User.js) (Baris 7-16): Class `User` mewarisi `Model` Sequelize dengan instance method `comparePassword` (enkapsulasi).
    *   [Event.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/models/Event.js) (Baris 4-13): Class `Event` dengan enkapsulasi fungsi kuota `remainingQuota`.
    *   [ApiError.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/utils/ApiError.js) (Baris 4-10): Pewarisan (*inheritance*) class `ApiError` yang meng-extend class bawaan JavaScript `Error`.
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya menerapkan pilar-pilar OOP di JavaScript/Node.js. Contohnya, model database didefinisikan sebagai class yang meng-extend base class Model dari Sequelize (Inheritance). Di dalam class Event, saya mengimplementasikan metode enkapsulasi logika data seperti remainingQuota() dan isFull(). Selain itu, class penanganan error ApiError dibuat dengan mewarisi sifat class bawaan JavaScript Error melalui sintaks `extends Error`."*

### 8. Menggunakan Library atau Komponen Pre-existing
*   **Letak Bukti di Kode:**
    *   [package.json (backend)](file:///c:/Users/HP/Downloads/voluntree/backend/package.json): Penggunaan Express, Sequelize, pg (PostgreSQL driver), jsonwebtoken, bcryptjs.
    *   [package.json (frontend)](file:///c:/Users/HP/Downloads/voluntree/frontend/package.json): Penggunaan Axios, React Router DOM, dan TailwindCSS.
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya menggunakan library open-source populer untuk mempercepat pengembangan dan menjaga standar keamanan. Untuk backend, saya menggunakan Express sebagai server, Sequelize sebagai ORM, bcryptjs untuk hashing password, dan jsonwebtoken untuk otorisasi token. Di sisi frontend, saya menggunakan Axios untuk penanganan HTTP requests, React Router DOM untuk sistem navigasi SPA tanpa reload halaman, dan TailwindCSS untuk styling antarmuka."*

### 9. Menggunakan SQL
*   **Letak Bukti di Kode:**
    *   [schema.sql](file:///c:/Users/HP/Downloads/voluntree/backend/src/sql/schema.sql): DDL database relasional murni dengan pendefinisian Primary Key, Foreign Key, dan constraint UNIQUE.
    *   [migration.sql](file:///c:/Users/HP/Downloads/voluntree/backend/src/sql/migration.sql): Query transaksional SQL (`BEGIN`, `COMMIT`, `ALTER TABLE`, `DROP TABLE`) untuk merestrukturisasi database.
    *   [eventController.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/controllers/eventController.js) (Baris 108-120): Logika pengambilan data terpopuler menggunakan kueri raw SQL murni dengan perintah `LEFT JOIN`, `GROUP BY`, agregasi `COUNT`, dan sorting `ORDER BY LIMIT`.
*   **Cara Menjelaskan ke Asesor:**
    > *"Selain menggunakan ORM Sequelize untuk query CRUD sederhana, saya menulis skrip SQL murni. Di backend/src/sql/schema.sql, saya menyusun DDL database relasional murni. Kemudian, di eventController.js pada fungsi popularEvents, saya mengeksekusi raw query SQL kompleks menggunakan klausa SELECT, LEFT JOIN untuk menggabungkan 3 tabel, GROUP BY untuk pengelompokan data, fungsi agregat COUNT untuk menghitung pendaftar secara real-time, serta ORDER BY LIMIT untuk menyaring 5 event terpopuler."*

### 10. Menerapkan Akses Basis Data
*   **Letak Bukti di Kode:**
    *   [database.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/config/database.js) (Baris 20-25): Konfigurasi database pooling (`max`, `min`, `acquire`, `idle`) untuk optimasi koneksi PostgreSQL.
    *   [registrationController.js](file:///c:/Users/HP/Downloads/voluntree/backend/src/controllers/registrationController.js): Penerapan query database terstruktur seperti `Registration.create()`, `Registration.findByPk()`, dan `registration.update()`.
*   **Cara Menjelaskan ke Asesor:**
    > *"Koneksi database PostgreSQL diatur di database.js menggunakan Sequelize ORM. Saya menerapkan 'Connection Pooling' (maksimal 5 koneksi aktif) untuk mencegah kelebihan beban pada database saat trafik tinggi. Melalui model Sequelize tersebut, saya melakukan operasi manipulasi database lengkap untuk pendaftaran relawan, mulai dari pencarian data relawan terdaftar, pembuatan pendaftaran baru, hingga pembaruan status pendaftaran."*

### 11. Menggunakan Source Code Versioning
*   **Letak Bukti di Kode:**
    *   Folder tersembunyi `.git/` di direktori utama proyek.
    *   Berkas [.gitignore](file:///c:/Users/HP/Downloads/voluntree/.gitignore) di root proyek.
*   **Cara Menjelaskan ke Asesor:**
    > *"Saya menggunakan Git untuk mengelola riwayat perubahan source code proyek ini. Saya membuat file .gitignore untuk menyaring folder node_modules, file konfigurasi rahasia (.env), dan build artifacts (dist/) agar tidak masuk ke repositori Git. Saya membuat commit secara berkala untuk mencatat perkembangan setiap fitur secara terstruktur sehingga mempermudah kolaborasi pengembangan."*
