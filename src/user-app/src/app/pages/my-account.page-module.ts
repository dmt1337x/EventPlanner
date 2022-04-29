import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountPage } from './my-account.page';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataComponentModule } from '../../../../../projects/my-account/src/lib/adapters/primary/ui/user-data.component-module';
import { FirebaseMyAccountServiceModule } from '../../../../../projects/my-account/src/lib/adapters/secondary/infrastructure/firebase-my-account.service-module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyAccountPage,
      },
    ]),
    UserDataComponentModule,
    FirebaseMyAccountServiceModule
  ],
  declarations: [MyAccountPage],
  providers: [],
  exports: [],
})
export class MyAccountPageModule {}
