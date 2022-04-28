import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationPage } from './registration.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistrationPage,
      },
    ]),
  ],
  declarations: [RegistrationPage],
  providers: [],
  exports: [],
})
export class RegistrationPageModule {}
