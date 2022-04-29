import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseParticipantsService } from './firebase-participants.service';
import { GETS_ALL_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { GETS_ALL_USER_DTO } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { ADDS_PARTICIPANT_DTO } from '../../../application/ports/secondary/adds-participant.dto-port';
import { REMOVES_PARTICIPANT_DTO } from '../../../application/ports/secondary/removes-participant.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseParticipantsService,
    {
      provide: GETS_ALL_PARTICIPANT_DTO,
      useExisting: FirebaseParticipantsService,
    },
    { provide: GETS_ALL_USER_DTO, useExisting: FirebaseParticipantsService },
    { provide: ADDS_PARTICIPANT_DTO, useExisting: FirebaseParticipantsService },
    {
      provide: REMOVES_PARTICIPANT_DTO,
      useExisting: FirebaseParticipantsService,
    },
  ],
  exports: [],
})
export class FirebaseParticipantsServiceModule {}
