import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventPagePage } from './event-page.page';
import { DietsPageModule } from './diets.page-module';
import { NavBarEventComponentModule } from 'projects/home/src/lib/adapters/primary/ui/nav-bar-event.component-module';

@NgModule({
  imports: [
    CommonModule,
    NavBarEventComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventPagePage,
        children: [
          {
            path: 'diets',
            loadChildren: () => DietsPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [EventPagePage],
  providers: [],
  exports: [],
})
export class EventPagePageModule {}
