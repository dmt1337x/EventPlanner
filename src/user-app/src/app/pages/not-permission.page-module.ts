import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotPermissionPage } from './not-permission.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NotPermissionPage,
        }
      ])],
  	declarations: [NotPermissionPage],
  	providers: [],
  	exports: [] })
export class NotPermissionPageModule {
}
