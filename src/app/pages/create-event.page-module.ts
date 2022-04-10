import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateEventPage } from './create-event.page';
import { CreateEventComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/create-event.component-module';
import { FirebaseEventServiceModule } from '../../../projects/events/src/lib/adapters/secondary/infrastructure/firebase-event.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateEventPage,
      },
    ]),
    CreateEventComponentModule,
    FirebaseEventServiceModule
  ],
  declarations: [CreateEventPage],
  providers: [],
  exports: [],
})
export class CreateEventPageModule {}
