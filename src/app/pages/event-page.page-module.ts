import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventPagePage } from './event-page.page';
import { DietsPageModule } from './diets.page-module';
import { NavBarEventComponentModule } from 'projects/home/src/lib/adapters/primary/ui/nav-bar-event.component-module';
import { EventIdResolverModule } from 'projects/core/src/lib/adapters/primary/ui/event-id.resolver-module';
import { EventIdResolver } from 'projects/core/src/lib/adapters/primary/ui/event-id.resolver';

@NgModule({
  imports: [
    CommonModule,
    EventIdResolverModule,
    NavBarEventComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventPagePage,
        resolve: {
          id: EventIdResolver,
        },
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
