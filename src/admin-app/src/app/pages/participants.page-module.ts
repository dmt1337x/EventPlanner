import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParticipantsPage } from './participants.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ParticipantsPage,
        }
      ])],
  	declarations: [ParticipantsPage],
  	providers: [],
  	exports: [] })
export class ParticipantsPageModule {
}
