import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountPage } from './my-account.page';
import { FirebaseEventDataServiceModule } from '@user-setup';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountEventListComponentModule } from '../../../../../projects/my-account/src/lib/adapters/primary/ui/account-event-list.component-module';
import { FirebaseMyAccountServiceModule } from '@my-account';
import { EventIdResolverModule } from '@core';
import { UserContextResolverModule } from '@user-core';
import { EventContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/event-context.resolver';
import { UserContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/user-context.resolver';

@NgModule({
  imports: [
    CommonModule,
    FirebaseEventDataServiceModule,
    ReactiveFormsModule,
    FirebaseMyAccountServiceModule,
    EventIdResolverModule,
    UserContextResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyAccountPage,
      },
    ]),
    AccountEventListComponentModule,
  ],
  declarations: [MyAccountPage],
  providers: [],
  exports: [],
})
export class MyAccountPageModule {}
