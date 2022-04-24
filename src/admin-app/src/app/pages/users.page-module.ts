import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { AddUserComponentModule } from '../../../../../projects/users/src/lib/adapters/primary/ui/add-user.component-module';
import { FirebaseUserServiceModule } from '../../../../../projects/users/src/lib/adapters/secondary/infrastructure/firebase-user.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPage,
      },
    ]),
    AddUserComponentModule,
    FirebaseUserServiceModule,
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
