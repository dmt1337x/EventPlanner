import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListParticipantsComponent } from './list-participants.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ListParticipantsComponent],
  	providers: [],
  	exports: [ListParticipantsComponent] })
export class ListParticipantsComponentModule {
}
