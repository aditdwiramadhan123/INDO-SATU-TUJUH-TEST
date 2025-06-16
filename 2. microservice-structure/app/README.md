## NestJS Microservice Monorepo

Proyek ini menggunakan arsitektur microservice dengan NestJS dalam struktur monorepo. Terdiri dari tiga layanan utama:

* Booking Service (port 3003)
* User Service (port 3001)
* Payment Service (port 3002)

Setiap layanan berjalan secara independen dan saling berkomunikasi menggunakan protokol TCP.

---

## Struktur Proyek

```
apps/
├── booking/
│   └── src/
│       ├── booking.controller.ts
│       ├── booking.module.ts
│       ├── booking.service.ts
│       └── main.ts
├── user/
│   └── src/
│       ├── user.controller.ts
│       ├── user.module.ts
│       ├── user.service.ts
│       └── main.ts
├── payment/
│   └── src/
│       ├── payment.controller.ts
│       ├── payment.module.ts
│       ├── payment.service.ts
│       └── main.ts

nest-cli.json
```

---

## Cara Kerja

Setiap layanan memiliki:

* `main.ts` untuk inisialisasi dan menjalankan layanan menggunakan TCP
* `*.module.ts` untuk mendaftarkan controller, service, dan client (jika perlu)
* `*.controller.ts` untuk menerima message pattern
* `*.service.ts` untuk menjalankan logika bisnis

Layanan Booking dapat mengakses User dan Payment melalui `ClientProxy`, yang didaftarkan di modul Booking menggunakan `ClientsModule.register`.

---

## Menjalankan Layanan

```bash
pnpm install

# Jalankan masing-masing service
pnpm start --filter user
pnpm start --filter payment
pnpm start --filter booking
```

Atau dengan script gabungan:

```bash
pnpm start:all
```

---

## Teknologi

* NestJS
* TCP Microservices
* PNPM Workspace
* Monorepo configuration via `nest-cli.json`

---
