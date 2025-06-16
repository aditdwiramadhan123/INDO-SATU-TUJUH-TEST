### Efficient Server Hit Handling

---

1. **Caching dengan Redis**
   Simpan hasil query produk populer ke Redis dan atur TTL (misalnya 60 detik).
   Jadi, ribuan request hanya ambil dari cache, bukan langsung ke database.

2. **Pagination**
   Tampilkan hanya beberapa produk populer (misalnya 10 teratas).
   Ini membatasi jumlah data yang harus diproses dan dikirim ke frontend.

---