import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttractionsPage } from './attractions.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AttractionsPage,
        }
      ])],
  	declarations: [AttractionsPage],
  	providers: [],
  	exports: [] })
export class AttractionsPageModule {
}
