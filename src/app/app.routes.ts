import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
    pathMatch: 'full',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then(m => m.ContactoPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  }
];
