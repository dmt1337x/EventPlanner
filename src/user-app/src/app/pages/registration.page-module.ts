import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationPage } from './registration.page';
import { UserRegistrationComponentModule } from '../../../../../projects/user-authentication/src/lib/adapters/primary/ui/user-registration.component-module';
import { FirebaseUsersServiceModule } from '../../../../../projects/user-authentication/src/lib/adapters/secondary/infrastructure/firebase-users.service-module';

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
    FirebaseUsersServiceModule,
  ],
  declarations: [RegistrationPage],
  providers: [],
  exports: [],
})
export class RegistrationPageModule {}
