import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { AddUsersComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/add-users.component-module';
import { FirebaseManagementUsersServiceModule } from '../../../../../projects/management-user/src/lib/adapters/secondary/infrastructure/firebase-management-users.service-module';
import { ListUsersComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/list-users.component-module';
import { ConnectUserComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/connect-user.component-module';
import { SearchEventComponentModule } from '../../../../../projects/events/src/lib/adapters/primary/ui/search-event.component-module';
import { InMemoryUserContextStorageModule } from 'projects/management-user/src/lib/adapters/secondary/infrastructure/in-memory-user-context.storage-module';
import { SearchUserComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/search-user.component-module';
import { InMemorySearchUserStorageModule } from 'projects/management-user/src/lib/adapters/secondary/infrastructure/in-memory-search-user.storage-module';

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
    SearchEventComponentModule,
    InMemoryUserContextStorageModule,
    SearchUserComponentModule,
    InMemorySearchUserStorageModule,
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
