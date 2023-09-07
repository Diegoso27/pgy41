import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./scan-qr/scan-qr.module').then( m => m.ScanQRPageModule)
  },
  {
    path: 'asist-register',
    loadChildren: () => import('./asist-register/asist-register.module').then( m => m.AsistRegisterPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'register-assit',
    loadChildren: () => import('./register-assit/register-assit.module').then( m => m.RegisterAssitPageModule)
  },
  {
    path: 'recup-contra',
    loadChildren: () => import('./recup-contra/recup-contra.module').then( m => m.RecupContraPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
