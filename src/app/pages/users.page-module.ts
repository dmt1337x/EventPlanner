import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { AddUserComponentModule } from '../../../projects/users/src/lib/adapters/primary/ui/add-user.component-module';
import { FirebaseUserServiceModule } from '../../../projects/users/src/lib/adapters/secondary/infrastructure/firebase-user.service-module';
import { ListUsersComponentModule } from '../../../projects/users/src/lib/adapters/primary/ui/list-users.component-module';
import { SearchUserComponentModule } from '../../../projects/users/src/lib/adapters/primary/ui/search-user.component-module';

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
    ListUsersComponentModule,
    SearchUserComponentModule
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
