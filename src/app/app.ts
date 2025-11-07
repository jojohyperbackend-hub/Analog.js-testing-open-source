import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav style="display:flex; gap:1rem;">
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
    </nav>
    <hr />
    <router-outlet />
  `
})
export class AppComponent {}

export const appConfig = {
  providers: []
};
