import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { SetupPageModule } from './setup.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserPage,
        children: [
          {
            path: 'setup',
            loadChildren: () => SetupPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [UserPage],
  providers: [],
  exports: [],
})
export class UserPageModule {}
