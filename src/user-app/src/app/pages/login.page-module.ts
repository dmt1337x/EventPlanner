import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { UserLoginComponentModule } from '../../../../../projects/user-authentication/src/lib/adapters/primary/ui/user-login.component-module';
import { FirebaseUsersServiceModule } from '../../../../../projects/user-authentication/src/lib/adapters/secondary/infrastructure/firebase-users.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: LoginPage,
        }
      ]),
  UserLoginComponentModule,
  FirebaseUsersServiceModule
],
  	declarations: [LoginPage],
  	providers: [],
  	exports: [] })
export class LoginPageModule {
}
