import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupPage } from './setup.page';
import { SetupFormComponentModule } from '../../../../../projects/user-setup/src/lib/adapters/primary/ui/setup-form.component-module';
import { FirebaseSetupServiceModule } from '../../../../../projects/user-setup/src/lib/adapters/secondary/infrastructure/firebase-setup.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupPage,
      },
    ]),
    SetupFormComponentModule,
    FirebaseSetupServiceModule
  ],
  declarations: [SetupPage],
  providers: [],
  exports: [],
})
export class SetupPageModule {}
