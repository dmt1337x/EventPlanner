import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventUsersComponent } from './list-event-users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ListEventUsersComponent],
  providers: [],
  exports: [ListEventUsersComponent],
})
export class ListEventUsersComponentModule {}
