#### Tujuan

Alur CI/CD dari Git commit hingga deployment, menggunakan Jenkins dan Docker untuk containerized.

---

### Struktur Branch

* `dev`: pengembangan harian.
* `staging`: untuk pengujian internal.
* `main`: untuk produksi.

---

### Jenkins Setup

* Menggunakan **Jenkins multibranch pipeline** untuk memantau semua branch.
* Pipeline aktif otomatis jika terdapat `Jenkinsfile` di branch.

---

### CI/CD Pipeline (Semua Tahap Menggunakan Docker)

1. **Clone**

   * Jenkins clone branch dari Git.

2. **Check**

   * Jalankan test, linting, dan validasi konfigurasi (opsional).
   * Semua berjalan dalam container Docker agar konsisten.

3. **Build**

   * Build image Docker untuk masing-masing layanan.
   * Image ditag berdasarkan branch dan commit.

4. **Deploy**

   * `dev`: build & simpan image (belum dideploy).
   * `staging`: deploy otomatis ke staging server.
   * `main`: deploy otomatis ke production server.

---

