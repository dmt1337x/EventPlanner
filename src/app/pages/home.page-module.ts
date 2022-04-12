import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule } from '../../../projects/core/src/lib/adapters/primary/ui/home.component-module';
import { FirebaseCoreServiceModule } from 'projects/core/src/lib/adapters/secondary/infrastructure/firebase-core.service-module';
import { FirebaseEventServiceModule } from '@events';

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
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
