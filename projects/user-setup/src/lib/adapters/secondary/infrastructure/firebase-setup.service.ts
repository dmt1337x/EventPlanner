import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllDietDtoPort } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { GetsAllTransportDtoPort } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { GetsAllAttractionDtoPort } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { SetsParticipantDtoPort } from '../../../application/ports/secondary/sets-participant.dto-port';
import { GetsAllRoomDtoPort } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { GetsOneParticipantDtoPort } from '../../../application/ports/secondary/dto/gets-one-participant.dto-port';
import { SetsRoomDtoPort } from '../../../application/ports/secondary/dto/sets-room.dto-port';
import { GetsOneRoomDtoPort } from '../../../application/ports/secondary/dto/gets-one-room.dto-port';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';

@Injectable()
export class FirebaseSetupService
  implements
    GetsAllDietDtoPort,
    GetsAllTransportDtoPort,
    GetsAllAttractionDtoPort,
    GetsAllParticipantDtoPort,
    SetsParticipantDtoPort,
    GetsAllRoomDtoPort, GetsOneParticipantDtoPort, SetsRoomDtoPort, GetsOneRoomDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAllDiet(criterion: Partial<DietDTO>): Observable<DietDTO[]> {
    return this._client
      .collection<DietDTO>('diets')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: DietDTO[]) => filterByCriterion(data, criterion)));
  }

  getAllTransport(
    criterion: Partial<TransportDTO>
  ): Observable<TransportDTO[]> {
    return this._client
      .collection<TransportDTO>('transports')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: TransportDTO[]) => filterByCriterion(data, criterion)));
  }

  getAllAttraction(
    criterion: Partial<AttractionDTO>
  ): Observable<AttractionDTO[]> {
    return this._client
      .collection<AttractionDTO>('attractions')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: AttractionDTO[]) => filterByCriterion(data, criterion)));
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

  setParticipant(participant: Partial<ParticipantDTO>): void {
    this._client.doc('participants/' + participant.id).update(participant);
  }

  getAllRoom(criterion: Partial<RoomDTO>): Observable<RoomDTO[]> {
    return this._client
      .collection<RoomDTO>('rooms')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: RoomDTO[]) => filterByCriterion(data, criterion)));
  }

  getOneParticipant(id: string): Observable<ParticipantDTO> {
    return this._client.doc<ParticipantDTO>('participants/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }

  setRoom(room: Partial<RoomDTO>): Observable<void> {
    return from(this._client.doc('rooms/'+room.id).update(room)).pipe(map(() => void 0));
  }

  getOneRoom(id: string): Observable<RoomDTO> {
    return this._client.doc<RoomDTO>('rooms/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }
}
