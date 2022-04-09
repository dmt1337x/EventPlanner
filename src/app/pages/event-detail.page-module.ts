import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailPage } from './event-detail.page';
import { EventDetailComponentModule } from '../../../projects/events-detail/src/lib/adapters/primary/ui/event-detail.component-module';
import { FirebaseEventDetailServiceModule } from '../../../projects/events-detail/src/lib/adapters/secondary/infrastructure/firebase-event-detail.service-module';

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
    FirebaseEventDetailServiceModule
  ],
  declarations: [EventDetailPage],
  providers: [],
  exports: [],
})
export class EventDetailPageModule {}
