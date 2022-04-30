import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseManagementUsersService } from './firebase-management-users.service';
import { ADDS_USER_DTO } from '../../../application/ports/secondary/adds-user.dto-port';
import { GETS_ALL_USERS_DTO } from '../../../application/ports/secondary/gets-all-users.dto-port';
import { ADDS_PARTICIPANT_DTO } from '../../../application/ports/secondary/adds-participant.dto-port';
import { GETS_ALL_EVENTS_DTO } from '../../../application/ports/secondary/gets-all-events.dto-port';
import { REMOVES_USER_DTO } from '../../../application/ports/secondary/removes-user.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseManagementUsersService,
    { provide: ADDS_USER_DTO, useExisting: FirebaseManagementUsersService },
    {
      provide: GETS_ALL_USERS_DTO,
      useExisting: FirebaseManagementUsersService,
    },
    {
      provide: ADDS_PARTICIPANT_DTO,
      useExisting: FirebaseManagementUsersService,
    },
    {
      provide: GETS_ALL_EVENTS_DTO,
      useExisting: FirebaseManagementUsersService,
    },
    { provide: REMOVES_USER_DTO, useExisting: FirebaseManagementUsersService },
  ],
  exports: [],
})
export class FirebaseManagementUsersServiceModule {}
