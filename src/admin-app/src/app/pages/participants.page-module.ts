import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParticipantsPage } from './participants.page';
import { ListParticipantsComponentModule } from '../../../../../projects/participants/src/lib/adapters/primary/ui/list-participants.component-module';
import {
  FirebaseParticipantDetailsServiceModule,
  FirebaseParticipantsServiceModule,
  InMemorySearchParticipantStorageModule,
} from '@participants';
import { ConnectUserComponentModule } from '../../../../../projects/management-user/src/lib/adapters/primary/ui/connect-user.component-module';
import { FirebaseManagementUsersServiceModule } from '@management-user';
import { InviteUserComponentModule } from '../../../../../projects/participants/src/lib/adapters/primary/ui/invite-user.component-module';
import { SearchParticipantComponentModule } from '../../../../../projects/participants/src/lib/adapters/primary/ui/search-participant.component-module';
import { SeatInRoomsComponentModule } from '../../../../../projects/rooms/src/lib/adapters/primary/ui/seat-in-rooms.component-module';
import { FirebaseRoomsServiceModule } from '../../../../../projects/rooms/src/lib/adapters/secondary/infrastructure/firebase-rooms.service-module';
import { InMemorySeatInRoomStorageModule } from '@rooms';
import { InMemoryEventContextStorageModule } from '@user-core';

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
    FirebaseParticipantDetailsServiceModule,
    SearchParticipantComponentModule,
    InMemorySearchParticipantStorageModule,
    SeatInRoomsComponentModule,
    FirebaseRoomsServiceModule,
    InMemorySeatInRoomStorageModule,
  ],
  declarations: [ParticipantsPage],
  providers: [],
  exports: [],
})
export class ParticipantsPageModule {}
