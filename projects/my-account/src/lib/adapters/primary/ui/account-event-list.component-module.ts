import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEventListComponent } from './account-event-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AccountEventListComponent],
  providers: [],
  exports: [AccountEventListComponent],
})
export class AccountEventListComponentModule {}
