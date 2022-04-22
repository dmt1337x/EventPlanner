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
import { UserPageModule } from './pages/user.page-module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'registration',
    loadChildren: () => RegistrationPageModule,
  },

  {
    path: 'user/:userId/:eventId',
    loadChildren: () => UserPageModule,
  },
  {
    path: '404',
    loadChildren: () => NotFoundPageModule,
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
