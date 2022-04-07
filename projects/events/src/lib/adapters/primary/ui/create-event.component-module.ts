import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseEventServiceModule } from '../../secondary/infrastructure/firebase-event.service-module';
import { RouterModule } from '@angular/router';
import { EventsListComponentModule } from './events-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FirebaseEventServiceModule,
    EventsListComponentModule,
  ],
  declarations: [CreateEventComponent],
  providers: [],
  exports: [CreateEventComponent],
})
export class CreateEventComponentModule {}
