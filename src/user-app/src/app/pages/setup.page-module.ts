import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupPage } from './setup.page';
import { UserSetupComponentModule } from '../../../../../projects/user-setup/src/lib/adapters/primary/ui/user-setup.component-module';
import { FirebaseEventDataServiceModule } from '@user-setup';

@NgModule({
  imports: [
    CommonModule,
    FirebaseEventDataServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupPage,
      },
    ]),
    UserSetupComponentModule,
  ],
  declarations: [SetupPage],
  providers: [],
  exports: [],
})
export class SetupPageModule {}
