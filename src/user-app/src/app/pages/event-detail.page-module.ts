import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailPage } from './event-detail.page';
import { AccountEventDetailComponentModule } from '../../../../../projects/my-account/src/lib/adapters/primary/ui/account-event-detail.component-module';
import { FirebaseMyAccountServiceModule } from '../../../../../projects/my-account/src/lib/adapters/secondary/infrastructure/firebase-my-account.service-module';
import { ConfirmAttendanceComponentModule } from '../../../../../projects/my-account/src/lib/adapters/primary/ui/confirm-attendance.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EventDetailPage,
        }
      ]),
  AccountEventDetailComponentModule,
  FirebaseMyAccountServiceModule,
  ConfirmAttendanceComponentModule
],
  	declarations: [EventDetailPage],
  	providers: [],
  	exports: [] })
export class EventDetailPageModule {
}
