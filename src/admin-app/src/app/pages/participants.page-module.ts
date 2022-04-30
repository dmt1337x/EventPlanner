import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParticipantsPage } from './participants.page';
import { ListParticipantsComponentModule } from '../../../../../projects/participants/src/lib/adapters/primary/ui/list-participants.component-module';
import { FirebaseParticipantsServiceModule } from '@participants';
import { ConnectUserComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/connect-user.component-module';
import { FirebaseManagementUsersServiceModule } from '@management-user';
import { InviteUserComponentModule } from '../../../../../projects/participants/src/lib/adapters/primary/ui/invite-user.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ParticipantsPage,
      },
    ]),
    ListParticipantsComponentModule,
    FirebaseParticipantsServiceModule,
    ConnectUserComponentModule,
    FirebaseParticipantsServiceModule,
    FirebaseManagementUsersServiceModule,
    InviteUserComponentModule,
  ],
  declarations: [ParticipantsPage],
  providers: [],
  exports: [],
})
export class ParticipantsPageModule {}
