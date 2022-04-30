import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { UserLoginComponentModule } from '../../../../../projects/user-authentication/src/lib/adapters/primary/ui/user-login.component-module';
import { FirebaseAuthenticationServiceModule } from 'projects/user-authentication/src/lib/adapters/secondary/infrastructure/firebase-authentication.service-module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseAuthenticationServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      },
    ]),
    UserLoginComponentModule,
  ],
  declarations: [LoginPage],
  providers: [],
  exports: [],
})
export class LoginPageModule {}
