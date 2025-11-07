import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div
        class="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200 transition hover:shadow-2xl"
      >
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-gray-800">About</h1>
          <p class="text-gray-500 mt-2 text-sm">hello brow</p>
        </div>

        <p class="text-gray-700 leading-relaxed text-center">
          Aplikasi ini dibuat menggunakan <span class="font-semibold">Analog.js</span> — untuk testing
          <br /><br />
          nyoba doang brok
        </p>
      </div>

      <p class="mt-8 text-xs text-gray-400 text-center">
        © {{ year }} • zee
      </p>
    </div>
  `,
})
export class AboutPage {
  year = new Date().getFullYear();
}
