# 🚀 Analog.js testing-open source

## 🧩 Deskripsi Proyek
Project ini dibuat untuk **eksperimen dan pembelajaran fullstack modern** menggunakan **Analog.js** — framework meta untuk Angular yang mendukung SSR, API routes, dan build system seperti Next.js.

Tujuan utama proyek ini adalah memahami bagaimana **frontend Angular** dan **backend H3 API** bisa bekerja bersama dalam satu ekosistem yang modern, cepat, dan terstruktur.

---

## 📚 Fitur dan Konsep yang Dipelajari
### 🔹 1. Frontend (Angular + TailwindCSS)
- Menggunakan **Angular Standalone Components** (tanpa NgModule)
- Menerapkan **Signal() dan Effect()** untuk state reactivity modern
- Styling dengan **TailwindCSS** agar tampilan cepat dan responsive
- Membangun layout dashboard sederhana dan clean

### 🔹 2. Backend (H3 API Routes)
- Membuat route dinamis di folder `src/server/routes/`
- Contoh endpoint:
  ```ts
  import { defineEventHandler } from 'h3';

  export default defineEventHandler(() => {
    return {
      message: 'hello brow 🚀',
      route: '/api/hello',
      time: new Date().toISOString(),
    };
  });
  ```
- Implementasi **caching dan revalidate otomatis selama 30 detik**
- Belajar invalidasi cache manual dengan respon status custom

### 🔹 3. Environment & Konfigurasi
- Menambahkan file `.env.local` untuk menyimpan variable seperti:
  ```env
  VITE_APP_BASE=/myapp/
  ```
- Mengkonfigurasi `vite.config.ts` untuk path base dan environment berbeda (dev/production)

### 🔹 4. SSR & Routing
- Mempelajari **SSR (Server-Side Rendering)** dengan `main.server.ts`
- Memahami **file-based routing** di Analog.js seperti Next.js
- Mengetes **revalidate** behavior mirip Next.js `revalidate: 30`

### 🔹 5. Mindset & Eksperimen
- Membandingkan konsep dengan **Next.js, Laravel, dan Preact**
- Mempelajari bagaimana caching, API, dan SSR saling berhubungan
- Eksperimen dengan environment, base path, dan reactivity

---

## ⚙️ Cara Menjalankan Proyek

### 1️⃣ Clone repository
```bash
git clone https://github.com/<username>/<repository-name>.git
cd <repository-name>
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Jalankan mode development
```bash
npm run dev
```
Akses di browser: `http://localhost:5173`

### 4️⃣ Build untuk produksi
```bash
npm run build
```
Output akan tersimpan di folder `/dist`.

---

## 🧠 Insight Pembelajaran
Selama membuat project ini, beberapa hal yang berhasil dipahami dan diuji:

| Area | Insight |
|------|----------|
| 🧱 Arsitektur | Menggabungkan frontend Angular dan backend API dalam satu framework |
| ⚡ SSR | Cara kerja server-side rendering di Analog.js mirip Next.js |
| 🔄 Caching | Implementasi revalidate 30 detik dan invalidation otomatis |
| ⚙️ Build System | Memahami perbedaan mode dev vs production di Vite |
| 💬 Mindset | Berpikir modular dan sistematis, bukan sekadar menulis syntax |

---

## 🧩 Teknologi yang Digunakan
- [Analog.js](https://analogjs.org/)
- [Angular 17+](https://angular.dev/)
- [H3](https://github.com/unjs/h3)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

## 💬 Kesimpulan
> Proyek ini bukan sekadar latihan framework baru, tapi latihan **memahami arsitektur fullstack modern**.  
> Dari caching, SSR, hingga backend API — semuanya terintegrasi secara rapi di Analog.js.

---

## 🧑‍💻 Next Step
-bisa luh tambahin fitur sendiri brok
---

**Made with J**

