import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FirebaseAuthServiceModule, HomeComponentModule } from '@user-auth';

@NgModule({
  imports: [
    CommonModule,
    FirebaseAuthServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    HomeComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
