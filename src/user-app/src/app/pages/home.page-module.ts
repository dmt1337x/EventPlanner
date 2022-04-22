import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { UserConnectComponentModule } from '../../../../../projects/user-authentication/src/lib/adapters/primary/ui/user-connect.component-module';
import { FirebaseUsersServiceModule } from '../../../../../projects/user-authentication/src/lib/adapters/secondary/infrastructure/firebase-users.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    UserConnectComponentModule,
    FirebaseUsersServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
