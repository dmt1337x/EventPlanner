import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseParticipantsService } from './firebase-participants.service';
import { GETS_ALL_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-all-participant.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseParticipantsService,
    {
      provide: GETS_ALL_PARTICIPANT_DTO,
      useExisting: FirebaseParticipantsService,
    },
  ],
  exports: [],
})
export class FirebaseParticipantsServiceModule {}
