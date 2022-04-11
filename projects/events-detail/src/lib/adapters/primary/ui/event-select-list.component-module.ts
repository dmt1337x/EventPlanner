import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSelectListComponent } from './event-select-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), RouterModule],
  declarations: [EventSelectListComponent],
  providers: [],
  exports: [EventSelectListComponent],
})
export class EventSelectListComponentModule {}
