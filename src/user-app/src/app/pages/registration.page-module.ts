import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationPage } from './registration.page';
import { RegistrationComponentModule } from '../../../../../projects/user-auth/src/lib/adapters/primary/ui/registration.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: RegistrationPage,
        }
      ]),
  RegistrationComponentModule
],
  	declarations: [RegistrationPage],
  	providers: [],
  	exports: [] })
export class RegistrationPageModule {
}
