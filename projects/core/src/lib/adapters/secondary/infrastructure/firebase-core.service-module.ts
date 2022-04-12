import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCoreService } from './firebase-core.service';
import { GETS_ALL_EVENT_DTO } from '../../../application/ports/secondary/gets-all-event.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseCoreService,
    { provide: GETS_ALL_EVENT_DTO, useExisting: FirebaseCoreService },
  ],
  exports: [],
})
export class FirebaseCoreServiceModule {}
