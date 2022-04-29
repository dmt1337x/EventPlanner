import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { RegistrationPageModule } from './pages/registration.page-module';
import {
  AngularFireAuthGuard,
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';
import { NotFoundPageModule } from './pages/not-found.page-module';
import { CompletePageModule } from './pages/complete.page-module';
import { LoginPageModule } from './pages/login.page-module';
import { MyAccountPageModule } from './pages/my-account.page-module';
import { SetupPageModule } from './pages/setup.page-module';
import { EventPageModule } from './pages/event.page-module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },

  {
    path: '404',
    loadChildren: () => NotFoundPageModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule,
  },
  {
    path: 'registration',
    loadChildren: () => RegistrationPageModule,
  },
  {
    path: 'my-account',
    loadChildren: () => MyAccountPageModule,
  },
  {
    path: 'event/:eventId',
    loadChildren: () => EventPageModule,
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
