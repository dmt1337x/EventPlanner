import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseSetupService } from './firebase-setup.service';
import { GETS_ALL_DIET_DTO } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { GETS_ALL_TRANSPORT_DTO } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { GETS_ALL_ATTRACTION_DTO } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { GETS_ONE_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { SETS_PARTICIPANT_DTO } from '../../../application/ports/secondary/sets-participant.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseSetupService,
    { provide: GETS_ALL_DIET_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ALL_TRANSPORT_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ALL_ATTRACTION_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ONE_PARTICIPANT_DTO, useExisting: FirebaseSetupService },
    { provide: SETS_PARTICIPANT_DTO, useExisting: FirebaseSetupService },
  ],
  exports: [],
})
export class FirebaseSetupServiceModule {}
