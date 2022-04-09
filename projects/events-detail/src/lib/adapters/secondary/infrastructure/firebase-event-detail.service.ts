import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllDietDtoPort } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllTransportDtoPort } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import { GetsAllAttractionDtoPort } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseEventDetailService
  implements
    GetsAllDietDtoPort,
    GetsAllTransportDtoPort,
    GetsAllAttractionDtoPort,
    GetsAllEventDtoPort
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

  getAllEvent(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }
}
