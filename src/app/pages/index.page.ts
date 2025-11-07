import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <div class="w-full max-w-md bg-gray-100 rounded-2xl shadow-xl p-6 text-center transition-all duration-300">
        <h1 class="text-3xl font-bold mb-4 text-emerald-600">🚀 Analog.js Dashboard</h1>
        <p class="text-sm text-gray-600 mb-6">
          Demo caching & revalidate tiap
          <span class="font-semibold text-emerald-600">30 detik</span>
        </p>

        <div class="bg-white border border-gray-200 p-4 rounded-xl text-left mb-6 shadow-sm">
          <p class="text-lg font-semibold text-gray-900 mb-1">
            {{ message() }}
          </p>
          <p class="text-sm text-gray-600">
            Status:
            <span class="text-emerald-600">{{ cacheStatus() }}</span>
          </p>
          <p class="text-xs text-gray-500 mt-1">
            Terakhir diperbarui: {{ lastUpdate() }}
          </p>
        </div>

        <div class="flex gap-3 justify-center">
          <button
            class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-white font-medium shadow-md transition"
            (click)="getMessage()">
            🔄 Ambil Data
          </button>

          <button
            class="px-5 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl text-gray-800 font-medium shadow-md transition"
            (click)="autoRefresh = !autoRefresh">
            {{ autoRefresh ? '⏸️ Stop Auto' : '▶️ Auto Refresh' }}
          </button>
        </div>

        <p class="text-xs text-gray-500 mt-6">
          ⏱️ Auto refresh tiap 5 detik (kalau aktif)
        </p>
      </div>
    </div>
  `,
})
export class HomePage {
  message = signal('Menunggu data dari API...');
  cacheStatus = signal('Belum ada');
  lastUpdate = signal('-');
  autoRefresh = false;
  private intervalId: any;

  constructor() {
    // Efek auto-refresh dinamis
    effect(() => {
      if (this.autoRefresh) {
        this.intervalId = setInterval(() => this.getMessage(), 5000);
      } else if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    });
  }

  async getMessage() {
    try {
      const res = await fetch('/api/hello');
      if (!res.ok) throw new Error('Gagal ambil data');
      const data = await res.json();
      this.message.set(data.message);
      this.cacheStatus.set(data.cacheStatus);
      this.lastUpdate.set(new Date().toLocaleTimeString());
    } catch (err) {
      this.message.set('❌ Gagal ambil data 😢');
      this.cacheStatus.set('Error');
      console.error('Fetch error:', err);
    }
  }
}
