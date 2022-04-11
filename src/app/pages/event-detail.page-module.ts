import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailPage } from './event-detail.page';
import { EventDetailComponentModule } from '../../../projects/events-detail/src/lib/adapters/primary/ui/event-detail.component-module';
import { FirebaseEventDetailServiceModule } from '../../../projects/events-detail/src/lib/adapters/secondary/infrastructure/firebase-event-detail.service-module';
import { EventSelectListComponentModule } from '../../../projects/events-detail/src/lib/adapters/primary/ui/event-select-list.component-module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
    BsDropdownModule.forRoot(),
  ],
  declarations: [EventDetailPage],
  providers: [],
  exports: [],
})
export class EventDetailPageModule {}
