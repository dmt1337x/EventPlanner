import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { SetupPageModule } from './setup.page-module';
import { UserContextResolverModule } from 'projects/user-core/src/lib/adapters/primary/ui/user-context.resolver-module';
import { UserContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/user-context.resolver';
import { EventContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/event-context.resolver';
import { EventContextResolverModule } from '@user-core';
import { CompletePageModule } from './complete.page-module';

@NgModule({
  imports: [
    CommonModule,
    UserContextResolverModule,
    EventContextResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserPage,
        resolve: {
          userId: UserContextResolver,
          eventId: EventContextResolver,
        },

        children: [
          {
            path: 'setup',
            loadChildren: () => SetupPageModule,
          },
          // {
          //   path: 'complete',
          //   loadChildren: () => CompletePageModule,
          // },
        ],
      },
    ]),
  ],
  declarations: [UserPage],
  providers: [],
  exports: [],
})
export class UserPageModule {}
