### 5 Langkah Keamanan endpoint public POST /api/users 

1. **Authentication (JWT)**
   Verifikasi token JWT agar hanya user sah yang dapat mengakses endpoint.

2. **Authorization (Permission Check)**
   Cek hak akses berdasarkan permission yang dimiliki user.

3. **Rate Limiting**
   Batasi jumlah request per IP menggunakan `express-rate-limit` untuk mencegah spam dan brute force.

4. **Input Validation & Sanitization**
   Validasi dan bersihkan input menggunakan `express-validator`, `joi`, atau `zod`.

5. **CORS Configuration**
   Atur CORS agar hanya origin tertentu yang boleh mengakses endpoint.

---
