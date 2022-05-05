import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEventDetailComponent } from './account-event-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AccountEventDetailComponent],
  providers: [],
  exports: [AccountEventDetailComponent],
})
export class AccountEventDetailComponentModule {}
