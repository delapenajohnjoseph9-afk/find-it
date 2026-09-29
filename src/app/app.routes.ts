import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'splash',
    loadComponent: () =>
      import('./splash/splash.page').then(m => m.SplashPage)
  },

  {
    path: 'signin',
    loadComponent: () =>
      import('./signin/signin.page').then(m => m.SigninPage)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },

  {
    path: 'categories',
    loadComponent: () =>
      import('./categories/categories.page').then(m => m.CategoriesPage)
  },

  {
    path: 'scan',
    loadComponent: () =>
      import('./scan/scan.page').then(m => m.ScanPage)
  },

  {
    path: 'message',
    loadComponent: () =>
      import('./message/message.page').then(m => m.MessagePage)
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then(m => m.ProfilePage)
  },

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  }

];