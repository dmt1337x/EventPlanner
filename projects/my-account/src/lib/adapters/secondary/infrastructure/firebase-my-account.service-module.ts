import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseMyAccountService } from './firebase-my-account.service';
import { GETS_ALL_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { GETS_ALL_EVENT_DTO } from '../../../application/ports/secondary/gets-all-event.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseMyAccountService,
    {
      provide: GETS_ALL_PARTICIPANT_DTO,
      useExisting: FirebaseMyAccountService,
    },
    { provide: GETS_ALL_EVENT_DTO, useExisting: FirebaseMyAccountService },
  ],
  exports: [],
})
export class FirebaseMyAccountServiceModule {}
