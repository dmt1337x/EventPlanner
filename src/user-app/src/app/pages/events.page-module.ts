import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsPage } from './events.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsPage,
      },
    ]),
  ],
  declarations: [EventsPage],
  providers: [],
  exports: [],
})
export class EventsPageModule {}
