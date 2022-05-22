import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseSetupService } from './firebase-setup.service';
import { GETS_ALL_DIET_DTO } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { GETS_ALL_TRANSPORT_DTO } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { GETS_ALL_ATTRACTION_DTO } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { GETS_ALL_PARTICIPANT_DTO } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { SETS_PARTICIPANT_DTO } from '../../../application/ports/secondary/sets-participant.dto-port';
import { GETS_ALL_ROOM_DTO } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { GETS_ONE_PARTICIPANT_DTO } from '../../../application/ports/secondary/dto/gets-one-participant.dto-port';
import { SETS_ROOM_DTO } from '../../../application/ports/secondary/dto/sets-room.dto-port';
import { GETS_ONE_ROOM_DTO } from '../../../application/ports/secondary/dto/gets-one-room.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseSetupService,
    { provide: GETS_ALL_DIET_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ALL_TRANSPORT_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ALL_ATTRACTION_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ALL_PARTICIPANT_DTO, useExisting: FirebaseSetupService },
    { provide: SETS_PARTICIPANT_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ALL_ROOM_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ONE_PARTICIPANT_DTO, useExisting: FirebaseSetupService },
    { provide: SETS_ROOM_DTO, useExisting: FirebaseSetupService },
    { provide: GETS_ONE_ROOM_DTO, useExisting: FirebaseSetupService }
  ],
  exports: [],
})
export class FirebaseSetupServiceModule {}
