import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountPage } from './my-account.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseMyAccountServiceModule } from '../../../../../projects/my-account/src/lib/adapters/secondary/infrastructure/firebase-my-account.service-module';
import { CurrentUserResolverModule } from 'projects/user-core/src/lib/adapters/primary/ui/current-user.resolver-module';
import { CurrentUserResolver } from 'projects/user-core/src/lib/adapters/primary/ui/current-user.resolver';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrentUserResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyAccountPage,
        resolve: {
          email: CurrentUserResolver,
        },
      },
    ]),
    FirebaseMyAccountServiceModule,
  ],
  declarations: [MyAccountPage],
  providers: [],
  exports: [],
})
export class MyAccountPageModule {}
