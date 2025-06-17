Optimasi frontend dapat dilakukan dengan pendekatan yang diterapkan mencakup hal-hal berikut:

---

### 1. **Fetching Data dengan TanStack Query (React Query)**

* Gunakan `@tanstack/react-query` untuk manajemen data server secara efisien.
* Agar:

  * **Caching**: data yang sudah diambil tidak perlu diambil ulang.
  * **Background Refetching**: memastikan data selalu up-to-date tanpa membuat loading terasa lambat.
  * **Automatic Retry & Error Handling**: tangani kegagalan jaringan secara otomatis.

---

### 2. **Pemisahan Komponen**

* Setiap bagian utama (Users, Transactions, Notifications) dibuat sebagai komponen terpisah.
* Komponen hanya menerima data melalui props atau context yang sangat spesifik.
* Agar :

  * Mengurangi kompleksitas file.
  * Memudahkan code-splitting dan lazy loading.
  * Lebih mudah untuk dites dan dipelihara.

---

### 3. **Minimalisasi State**

* Hindari global state yang tidak perlu. Gunakan state lokal (`useState`) hanya jika benar-benar dibutuhkan oleh UI lokal.
* Untuk data dari server, cukup bergantung pada TanStack Query agar tidak redundan dengan state tambahan.
* Hindari lifting state terlalu tinggi kecuali diperlukan lintas komponen besar.

---
