import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filterByCriterion } from '@lowgular/shared';
import { map, Observable } from 'rxjs';
import { AttractionDTO } from '../../../application/ports/secondary/participant-detail-ports/attraction.dto';
import { DietDTO } from '../../../application/ports/secondary/participant-detail-ports/diet.dto';
import { GetsAllAttractionDtoPort } from '../../../application/ports/secondary/participant-detail-ports/gets-all-attraction.dto-port';
import { GetsAllDietDtoPort } from '../../../application/ports/secondary/participant-detail-ports/gets-all-diet.dto-port';
import { GetsAllRoomDtoPort } from '../../../application/ports/secondary/participant-detail-ports/gets-all-room.dto-port';
import { GetsAllTransportDtoPort } from '../../../application/ports/secondary/participant-detail-ports/gets-all-transport.dto-port';
import { RoomDTO } from '../../../application/ports/secondary/participant-detail-ports/room.dto';
import { TransportDTO } from '../../../application/ports/secondary/participant-detail-ports/transport.dto';

@Injectable()
export class FirebaseParticipantDetailsService
  implements
    GetsAllTransportDtoPort,
    GetsAllAttractionDtoPort,
    GetsAllRoomDtoPort,
    GetsAllDietDtoPort
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
  getAllRoom(criterion: Partial<RoomDTO>): Observable<RoomDTO[]> {
    return this._client
      .collection<RoomDTO>('rooms')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: RoomDTO[]) => filterByCriterion(data, criterion)));
  }
}
