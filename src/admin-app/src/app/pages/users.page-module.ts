import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { AddUsersComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/add-users.component-module';
import { FirebaseManagementUsersServiceModule } from '../../../../../projects/management-user/src/lib/adapters/secondary/infrastructure/firebase-management-users.service-module';
import { ListUsersComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/list-users.component-module';
import { ConnectUserComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/connect-user.component-module';
import { SearchEventComponentModule } from '../../../../../projects/events/src/lib/adapters/primary/ui/search-event.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPage,
      },
    ]),
    AddUsersComponentModule,
    FirebaseManagementUsersServiceModule,
    ListUsersComponentModule,
    ConnectUserComponentModule,
    SearchEventComponentModule
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
