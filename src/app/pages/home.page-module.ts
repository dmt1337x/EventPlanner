import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CreateEventComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/create-event.component-module';
import { FirebaseEventServiceModule } from '../../../projects/events/src/lib/adapters/secondary/infrastructure/firebase-event.service-module';
import { EventsListComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/events-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    CreateEventComponentModule,
    FirebaseEventServiceModule,
    EventsListComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
