import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { RegistrationPageModule } from './pages/registration.page-module';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { NotFoundPageModule } from './pages/not-found.page-module';
import { LoginPageModule } from './pages/login.page-module';
import { MyAccountPageModule } from './pages/my-account.page-module';
import { EventPageModule } from './pages/event.page-module';
import { EventsPermissionGuard } from '@my-account';
import { NotPermissionPageModule } from './pages/not-permission.page-module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectIsLogin = () => redirectLoggedInTo(['/my-account']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectIsLogin },
  },

  {
    path: '404',
    loadChildren: () => NotFoundPageModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectIsLogin },
  },
  {
    path: 'registration',
    loadChildren: () => RegistrationPageModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectIsLogin },
  },
  {
    path: 'my-account',
    loadChildren: () => MyAccountPageModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'not-permission',
    loadChildren: () => NotPermissionPageModule,
  },

  {
    path: 'event/:eventId',
    loadChildren: () => EventPageModule,
    canActivate: [AngularFireAuthGuard, EventsPermissionGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
