import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule, FirebaseCoreServiceModule } from '@core';
import {
  FirebaseEventServiceModule,
  InMemorySearchEventStorageModule,
} from '@events';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    HomeComponentModule,
    FirebaseCoreServiceModule,
    FirebaseEventServiceModule,
    InMemorySearchEventStorageModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
