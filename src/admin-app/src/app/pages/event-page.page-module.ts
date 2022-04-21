import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventPagePage } from './event-page.page';
import { DietsPageModule } from './diets.page-module';
import { EventIdResolverModule } from 'projects/core/src/lib/adapters/primary/ui/event-id.resolver-module';
import { EventIdResolver } from 'projects/core/src/lib/adapters/primary/ui/event-id.resolver';
import { EventDetailPageModule } from './event-detail.page-module';
import { TransportPageModule } from './transport.page-module';
import { AttractionsPageModule } from './attractions.page-module';
import { EditEventPageModule } from './edit-event.page-module';
import { UsersPageModule } from './users.page-module';
import { NavigationComponentModule } from '@core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EventIdResolverModule,
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
          {
            path: 'event-detail',
            loadChildren: () => EventDetailPageModule,
          },
          {
            path: 'transport',
            loadChildren: () => TransportPageModule,
          },
          {
            path: 'attractions',
            loadChildren: () => AttractionsPageModule,
          },
          {
            path: 'edit-event',
            loadChildren: () => EditEventPageModule,
          },
          {
            path: 'users',
            loadChildren: () => UsersPageModule,
          },
        ],
      },
    ]),
    NavigationComponentModule,
  ],
  declarations: [EventPagePage],
  providers: [],
  exports: [],
})
export class EventPagePageModule {}
