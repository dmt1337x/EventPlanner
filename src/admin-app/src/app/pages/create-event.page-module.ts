import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateEventPage } from './create-event.page';
import {
  FirebaseEventServiceModule,
  CreateEventComponentModule,
} from '@events';

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
    FirebaseEventServiceModule,
  ],
  declarations: [CreateEventPage],
  providers: [],
  exports: [],
})
export class CreateEventPageModule {}
