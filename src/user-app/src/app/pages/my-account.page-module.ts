import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountPage } from './my-account.page';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  declarations: [MyAccountPage],
  providers: [],
  exports: [],
})
export class MyAccountPageModule {}
