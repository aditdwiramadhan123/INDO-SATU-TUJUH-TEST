## Penjelasan Perbaikan Kode Express.js

### Masalah pada Kode Asli:
1. **`res.send(404)` salah penempatan:**
   - Harusnya menggunakan `res.status(404)` sebelum `json()`.
   - `res.send()` tidak bisa diikuti oleh `.json()`.

2. **`findById` dianggap sinkron:**
   - Asumsi `db.findById` adalah fungsi asinkron (akses DB), seharusnya pakai `await`.

3. **Tidak ada error handling:**
   - Jika terjadi error dari DB, tidak ada `try-catch` untuk menangani `500 Internal Server Error`.