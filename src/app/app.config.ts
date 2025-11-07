import { provideRouter, Route } from '@angular/router';
import { HomePage } from './pages/index.page';

export const routes: Route[] = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.page').then(m => m.AboutPage), 
  },
];

export const appConfig = {
  providers: [provideRouter(routes)],
};
