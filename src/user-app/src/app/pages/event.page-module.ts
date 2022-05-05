import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventPage } from './event.page';
import { SetupPageModule } from './setup.page-module';
import { CompletePageModule } from './complete.page-module';
import { EventDetailPageModule } from './event-detail.page-module';
import { CurrentUserResolverModule } from '@user-core';
import { EventContextResolverModule } from 'projects/user-core/src/lib/adapters/primary/ui/event-context.resolver-module';
import { EventContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/event-context.resolver';
import { CurrentUserResolver } from 'projects/user-core/src/lib/adapters/primary/ui/current-user.resolver';
import { HeaderComponentModule } from '../../../../../projects/my-account/src/lib/adapters/primary/ui/header.component-module';

@NgModule({
  imports: [
    CommonModule,
    CurrentUserResolverModule,
    EventContextResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventPage,
        resolve: {
          email: CurrentUserResolver,
          eventId: EventContextResolver,
        },
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
    HeaderComponentModule
  ],
  declarations: [EventPage],
  providers: [],
  exports: [],
})
export class EventPageModule {}
