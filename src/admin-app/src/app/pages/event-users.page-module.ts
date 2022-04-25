import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventUsersPage } from './event-users.page';
import {
  InMemorySearchStorageModule,
  InMemoryUserIdStorageModule,
  AddUserComponentModule,
  FirebaseUserServiceModule,
  ListEventUsersComponentModule,
  SearchUserComponentModule,
} from '@event-users';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventUsersPage,
      },
    ]),
    AddUserComponentModule,
    FirebaseUserServiceModule,
    ListEventUsersComponentModule,
    SearchUserComponentModule,
    InMemoryUserIdStorageModule,
    InMemorySearchStorageModule,
  ],
  declarations: [EventUsersPage],
  providers: [],
  exports: [],
})
export class EventUsersPageModule {}
