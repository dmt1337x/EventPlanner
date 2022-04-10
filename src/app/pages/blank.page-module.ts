import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlankPage } from './blank.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: BlankPage,
        }
      ])],
  	declarations: [BlankPage],
  	providers: [],
  	exports: [] })
export class BlankPageModule {
}
