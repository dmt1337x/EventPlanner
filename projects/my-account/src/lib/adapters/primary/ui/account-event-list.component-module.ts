import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEventListComponent } from './account-event-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [AccountEventListComponent],
  providers: [],
  exports: [AccountEventListComponent],
})
export class AccountEventListComponentModule {}
