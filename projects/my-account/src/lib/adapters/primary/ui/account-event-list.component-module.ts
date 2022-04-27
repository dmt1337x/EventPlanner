import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEventListComponent } from './account-event-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AccountEventListComponent],
  providers: [],
  exports: [AccountEventListComponent],
})
export class AccountEventListComponentModule {}
