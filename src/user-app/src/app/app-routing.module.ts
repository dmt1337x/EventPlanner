import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/user-auth/src/lib/adapters/secondary/infrastructure/auth.guard';
import { HomePageModule } from './pages/home.page-module';
import { RegistrationPageModule } from './pages/registration.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'registration',
    loadChildren: () => RegistrationPageModule,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
