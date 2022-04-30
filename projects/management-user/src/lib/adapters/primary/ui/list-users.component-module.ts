import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ListUsersComponent],
  	providers: [],
  	exports: [ListUsersComponent] })
export class ListUsersComponentModule {
}
