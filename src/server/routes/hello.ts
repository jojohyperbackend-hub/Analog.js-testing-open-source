import { defineEventHandler } from 'h3';

// Simpan cache di memory server
let cachedData: any = null;
let lastUpdated = 0;
const CACHE_TTL = 30 * 1000; // 30 detik (ms)

export default defineEventHandler(() => {
  const now = Date.now();

  // Cek apakah cache masih valid
  const isValid = cachedData && now - lastUpdated < CACHE_TTL;

  // Jika masih valid, return data cached
  if (isValid) {
    return {
      ...cachedData,
      cacheStatus: '✅ masih valid (cached)',
    };
  }

  // Kalau udah expired → ada status invalid cache nya
  const newData = {
    message: 'hello brow 🚀',
    route: '/api/hello',
    time: new Date().toISOString(),
    cacheStatus: '⚠️ udah invalid brok (revalidated)',
  };

  // Simpan ke cache
  cachedData = newData;
  lastUpdated = now;

  return newData;
});
