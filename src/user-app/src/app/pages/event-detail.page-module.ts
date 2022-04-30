import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailPage } from './event-detail.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EventDetailPage,
        }
      ])],
  	declarations: [EventDetailPage],
  	providers: [],
  	exports: [] })
export class EventDetailPageModule {
}
