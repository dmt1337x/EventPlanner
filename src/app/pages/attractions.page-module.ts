import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttractionsPage } from './attractions.page';
import {
  InMemoryAttractionsStorageModule,
  FirebaseAttractionsServiceModule,
  ListAttractionsComponentModule,
  AddAttractionsComponentModule,
} from '@attractions';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AttractionsPage,
      },
    ]),
    AddAttractionsComponentModule,
    FirebaseAttractionsServiceModule,
    InMemoryAttractionsStorageModule,
    ListAttractionsComponentModule,
  ],
  declarations: [AttractionsPage],
  providers: [],
  exports: [],
})
export class AttractionsPageModule {}
