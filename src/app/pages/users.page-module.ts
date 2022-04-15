import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import {
  InMemorySearchStorageModule,
  InMemoryUserIdStorageModule,
  AddUserComponentModule,
  FirebaseUserServiceModule,
  ListUsersComponentModule,
  SearchUserComponentModule,
} from '@users';

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
    SearchUserComponentModule,
    InMemoryUserIdStorageModule,
    InMemorySearchStorageModule,
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
