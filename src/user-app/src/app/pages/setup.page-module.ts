import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupPage } from './setup.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: SetupPage,
        }
      ])],
  	declarations: [SetupPage],
  	providers: [],
  	exports: [] })
export class SetupPageModule {
}
