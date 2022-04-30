import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationPage } from './registration.page';
import { UserRegistrationComponentModule } from '../../../../../projects/user-authentication/src/lib/adapters/primary/ui/user-registration.component-module';
import { FirebaseAuthenticationServiceModule } from '../../../../../projects/user-authentication/src/lib/adapters/secondary/infrastructure/firebase-authentication.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistrationPage,
      },
    ]),
    UserRegistrationComponentModule,
    FirebaseAuthenticationServiceModule
  ],
  declarations: [RegistrationPage],
  providers: [],
  exports: [],
})
export class RegistrationPageModule {}
