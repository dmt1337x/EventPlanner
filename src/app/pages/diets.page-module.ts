import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietsPage } from './diets.page';
import {
  InMemoryDietIdStorageModule,
  FirebaseDietServiceModule,
  ListDietComponentModule,
  AddDietComponentModule,
} from '@diets';

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
    InMemoryDietIdStorageModule,
  ],
  declarations: [DietsPage],
  providers: [],
  exports: [],
})
export class DietsPageModule {}
