import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseEventDetailService } from './firebase-event-detail.service';
import { GETS_ALL_DIET_DTO } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { GETS_ALL_TRANSPORT_DTO } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { GETS_ALL_ATTRACTION_DTO } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { GETS_ALL_EVENT_DTO } from '../../../application/ports/secondary/gets-all-event.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEventDetailService,
    { provide: GETS_ALL_DIET_DTO, useExisting: FirebaseEventDetailService },
    {
      provide: GETS_ALL_TRANSPORT_DTO,
      useExisting: FirebaseEventDetailService,
    },
    {
      provide: GETS_ALL_ATTRACTION_DTO,
      useExisting: FirebaseEventDetailService,
    },
    { provide: GETS_ALL_EVENT_DTO, useExisting: FirebaseEventDetailService },
  ],
  exports: [],
})
export class FirebaseEventDetailServiceModule {}
