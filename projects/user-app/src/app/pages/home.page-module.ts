import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { UserComponentModule } from '../../../../user-auth/src/lib/adapters/primary/ui/user.component-module';
import { FirebaseAuthServiceModule } from '@user-auth';

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
    UserComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
