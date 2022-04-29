import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventPage } from './event.page';
import { SetupPageModule } from './setup.page-module';
import { CompletePageModule } from './complete.page-module';
import { EventDetailPageModule } from './event-detail.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventPage,
        children: [
          {
            path: 'setup',
            loadChildren: () => SetupPageModule,
          },
          {
            path: 'complete',
            loadChildren: () => CompletePageModule,
          },
          {
            path: 'detail',
            loadChildren: () => EventDetailPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [EventPage],
  providers: [],
  exports: [],
})
export class EventPageModule {}
