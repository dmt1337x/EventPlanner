import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseRoomsService } from './firebase-rooms.service';
import { ADDS_ROOM_DTO } from '../../../application/ports/secondary/adds-room.dto-port';
import { GETS_ALL_ROOM_DTO } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { SETS_ROOM_DTO } from '../../../application/ports/secondary/sets-room.dto-port';
import { REMOVES_ROOM_DTO } from '../../../application/ports/secondary/removes-room.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseRoomsService,
    { provide: ADDS_ROOM_DTO, useExisting: FirebaseRoomsService },
    { provide: GETS_ALL_ROOM_DTO, useExisting: FirebaseRoomsService },
    { provide: SETS_ROOM_DTO, useExisting: FirebaseRoomsService },
    { provide: REMOVES_ROOM_DTO, useExisting: FirebaseRoomsService },
  ],
  exports: [],
})
export class FirebaseRoomsServiceModule {}
