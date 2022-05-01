import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseMyAccountService } from './firebase-my-account.service';
import { GETS_ONE_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { GETS_ONE_EVENT_DTO } from '../../../application/ports/secondary/gets-one-event.dto-port';
import { SETS_PARTICIPANT_DTO } from '../../../application/ports/secondary/sets-participant.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseMyAccountService,
    {
      provide: GETS_ONE_PARTICIPANT_DTO,
      useExisting: FirebaseMyAccountService,
    },
    { provide: GETS_ONE_EVENT_DTO, useExisting: FirebaseMyAccountService },
    { provide: SETS_PARTICIPANT_DTO, useExisting: FirebaseMyAccountService },
  ],
  exports: [],
})
export class FirebaseMyAccountServiceModule {}
