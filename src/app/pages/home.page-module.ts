import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {
  FirebaseEventServiceModule,
  InMemorySearchEventStorageModule,
} from '@events';
import { HomeComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/home.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    FirebaseEventServiceModule,
    InMemorySearchEventStorageModule,
    HomeComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
