import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttractionsPage } from './attractions.page';
import { AddAttractionsComponentModule } from '../../../projects/attractions/src/lib/adapters/primary/ui/add-attractions.component-module';
import { FirebaseAttractionsServiceModule } from '../../../projects/attractions/src/lib/adapters/secondary/infrastructure/firebase-attractions.service-module';
import { ListAttractionsComponentModule } from '../../../projects/attractions/src/lib/adapters/primary/ui/list-attractions.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AttractionsPage,
        }
      ]),
  AddAttractionsComponentModule,
  FirebaseAttractionsServiceModule,
  ListAttractionsComponentModule
],
  	declarations: [AttractionsPage],
  	providers: [],
  	exports: [] })
export class AttractionsPageModule {
}
