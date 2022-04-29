import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventPage } from './event.page';
import { SetupPageModule } from './setup.page-module';
import { CompletePageModule } from './complete.page-module';

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
        ],
      },
    ]),
  ],
  declarations: [EventPage],
  providers: [],
  exports: [],
})
export class EventPageModule {}
