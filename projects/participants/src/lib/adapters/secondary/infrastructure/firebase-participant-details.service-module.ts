import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseParticipantDetailsService } from './firebase-participant-details.service';
import { GETS_ALL_ATTRACTION_DTO } from '../../../application/ports/secondary/participant-detail-ports/gets-all-attraction.dto-port';
import { GETS_ALL_DIET_DTO } from '../../../application/ports/secondary/participant-detail-ports/gets-all-diet.dto-port';
import { GETS_ALL_ROOM_DTO } from '../../../application/ports/secondary/participant-detail-ports/gets-all-room.dto-port';
import { GETS_ALL_TRANSPORT_DTO } from '../../../application/ports/secondary/participant-detail-ports/gets-all-transport.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseParticipantDetailsService,
    {
      provide: GETS_ALL_TRANSPORT_DTO,
      useExisting: FirebaseParticipantDetailsService,
    },
    {
      provide: GETS_ALL_ATTRACTION_DTO,
      useExisting: FirebaseParticipantDetailsService,
    },
    {
      provide: GETS_ALL_DIET_DTO,
      useExisting: FirebaseParticipantDetailsService,
    },
    {
      provide: GETS_ALL_ROOM_DTO,
      useExisting: FirebaseParticipantDetailsService,
    },
  ],
  exports: [],
})
export class FirebaseParticipantDetailsServiceModule {}
