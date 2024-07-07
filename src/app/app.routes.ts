import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/authentication/login/login.component').then(m => m.LoginComponent)
  }
];
