import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlankPage } from './blank.page';
import { BlankComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/blank.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: BlankPage,
        }
      ]),
  BlankComponentModule
],
  	declarations: [BlankPage],
  	providers: [],
  	exports: [] })
export class BlankPageModule {
}
