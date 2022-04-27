import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupPage } from './setup.page';
import { UserSetupComponentModule } from '../../../../../projects/user-setup/src/lib/adapters/primary/ui/user-setup.component-module';
import { FirebaseEventDataServiceModule } from '@user-setup';
import {
  EventContextResolverModule,
  UserContextResolverModule,
} from '@user-core';
import { EventContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/event-context.resolver';
import { UserContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/user-context.resolver';

@NgModule({
  imports: [
    CommonModule,
    FirebaseEventDataServiceModule,
    UserContextResolverModule,
    EventContextResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupPage,
        resolve: {
          eventId: EventContextResolver,
          participantId: UserContextResolver,
        },
      },
    ]),
    UserSetupComponentModule,
  ],
  declarations: [SetupPage],
  providers: [],
  exports: [],
})
export class SetupPageModule {}
