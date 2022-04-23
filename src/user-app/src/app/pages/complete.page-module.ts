import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompletePage } from './complete.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CompletePage,
        }
      ])],
  	declarations: [CompletePage],
  	providers: [],
  	exports: [] })
export class CompletePageModule {
}
