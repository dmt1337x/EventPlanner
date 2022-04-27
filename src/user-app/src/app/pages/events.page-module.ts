import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsPage } from './events.page';
import { SetupPageModule } from './setup.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsPage,
        children: [
          {
            path: 'setup',
            loadChildren: () => SetupPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [EventsPage],
  providers: [],
  exports: [],
})
export class EventsPageModule {}
