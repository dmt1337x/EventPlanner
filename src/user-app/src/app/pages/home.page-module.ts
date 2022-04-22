import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FirebaseAuthServiceModule, HomeComponentModule } from '@user-auth';
import { UserConnectComponentModule } from '../../../../../projects/user-authentication/src/lib/adapters/primary/ui/user-connect.component-module';
import { FirebaseUsersServiceModule } from '../../../../../projects/user-authentication/src/lib/adapters/secondary/infrastructure/firebase-users.service-module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseAuthServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    HomeComponentModule,
    UserConnectComponentModule,
    FirebaseUsersServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
