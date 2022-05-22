import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsRoomDtoPort } from '../../../application/ports/secondary/adds-room.dto-port';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllRoomDtoPort } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { SetsRoomDtoPort } from '../../../application/ports/secondary/sets-room.dto-port';
import { RemovesRoomDtoPort } from '../../../application/ports/secondary/removes-room.dto-port';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { UserDTO } from '../../../application/ports/secondary/user.dto';

@Injectable()
export class FirebaseRoomsService
  implements
    AddsRoomDtoPort,
    GetsAllRoomDtoPort,
    SetsRoomDtoPort,
    RemovesRoomDtoPort,
    GetsAllParticipantDtoPort,
    GetsAllUserDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(room: Partial<RoomDTO>): void {
    this._client.collection('rooms').add(room);
  }

  getAllRoom(criterion: Partial<RoomDTO>): Observable<RoomDTO[]> {
    return this._client
      .collection<RoomDTO>('rooms')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: RoomDTO[]) => filterByCriterion(data, criterion)));
  }

  set(room: Partial<RoomDTO>): void {
    this._client.doc('rooms/' + room.id).update(room);
  }

  remove(id: string): void {
    this._client.doc('rooms/' + id).delete();
  }

  getAllParticipant(
    criterion: Partial<ParticipantDTO>
  ): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }

  getAllUser(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }
}
