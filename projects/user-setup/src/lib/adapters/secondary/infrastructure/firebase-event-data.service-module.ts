import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseEventDataService } from './firebase-event-data.service';
import { GETS_ALL_EVENT_DATA_DTO } from '../../../application/ports/secondary/gets-all-event-data.dto-port';
import { SETS_PARTICIPANT_DTO } from '../../../application/ports/secondary/sets-participant.dto-port';
import { GETS_ALL_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-all-participant.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEventDataService,
    { provide: GETS_ALL_EVENT_DATA_DTO, useExisting: FirebaseEventDataService },
    { provide: SETS_PARTICIPANT_DTO, useExisting: FirebaseEventDataService },
    {
      provide: GETS_ALL_PARTICIPANT_DTO,
      useExisting: FirebaseEventDataService,
    },
  ],
  exports: [],
})
export class FirebaseEventDataServiceModule {}
