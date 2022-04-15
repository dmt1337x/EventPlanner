import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailPage } from './event-detail.page';
import {
  EventSelectListComponentModule,
  FirebaseEventDetailServiceModule,
  EventDetailComponentModule,
} from '@events-detail';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventDetailPage,
      },
    ]),
    EventDetailComponentModule,
    FirebaseEventDetailServiceModule,
    EventSelectListComponentModule,
  ],
  declarations: [EventDetailPage],
  providers: [],
  exports: [],
})
export class EventDetailPageModule {}
