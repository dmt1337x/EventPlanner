import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseUsersService } from './firebase-users.service';
import { GETS_ALL_USER_DETAIL_DTO } from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
import { ADDS_PARTICIPANT_DTO } from '../../../application/ports/secondary/adds-participant.dto-port';
import { ADDS_TO_AUTH_DTO } from '../../../application/ports/secondary/adds-to-auth.dto-port';
import { LOGIN_DTO } from '../../../application/ports/secondary/login-dto-port';
import { GET_CURRENT_USER_DTO } from '../../../application/ports/secondary/gets-current-user.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseUsersService,
    { provide: GETS_ALL_USER_DETAIL_DTO, useExisting: FirebaseUsersService },
    { provide: ADDS_PARTICIPANT_DTO, useExisting: FirebaseUsersService },
    { provide: ADDS_TO_AUTH_DTO, useExisting: FirebaseUsersService },
    { provide: LOGIN_DTO, useExisting: FirebaseUsersService },
    { provide: GET_CURRENT_USER_DTO, useExisting: FirebaseUsersService },
  ],
  exports: [],
})
export class FirebaseUsersServiceModule {}
