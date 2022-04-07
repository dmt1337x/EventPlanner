import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietsPage } from './diets.page';
import { FirebaseDietServiceModule } from '../../../projects/diets/src/lib/adapters/secondary/infrastructure/firebase-diet.service-module';
import { ListDietComponentModule } from '../../../projects/diets/src/lib/adapters/primary/ui/list-diet.component-module';
import { AddDietComponentModule } from '../../../projects/diets/src/lib/adapters/primary/ui/add-diet.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DietsPage,
      },
    ]),
    FirebaseDietServiceModule,
    ListDietComponentModule,
    AddDietComponentModule,
  ],
  declarations: [DietsPage],
  providers: [],
  exports: [],
})
export class DietsPageModule {}
