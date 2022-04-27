import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllEventDataDtoPort } from '../../../application/ports/secondary/gets-all-event-data.dto-port';
import { EventDataDTO } from '../../../application/ports/secondary/event-data.dto';
import { map } from 'rxjs/operators';
import { filterByCriterion } from '@lowgular/shared';
import { SetsParticipantDtoPort } from '../../../application/ports/secondary/sets-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';

@Injectable()
export class FirebaseEventDataService
  implements
    GetsAllEventDataDtoPort,
    SetsParticipantDtoPort,
    GetsAllParticipantDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAllAttraction(
    criterion: Partial<EventDataDTO>
  ): Observable<EventDataDTO[]> {
    return this._client
      .collection<EventDataDTO>('attractions')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDataDTO[]) => filterByCriterion(data, criterion)));
  }
  getAllDiet(criterion: Partial<EventDataDTO>): Observable<EventDataDTO[]> {
    return this._client
      .collection<EventDataDTO>('diets')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDataDTO[]) => filterByCriterion(data, criterion)));
  }
  getAllTransport(
    criterion: Partial<EventDataDTO>
  ): Observable<EventDataDTO[]> {
    return this._client
      .collection<EventDataDTO>('transports')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDataDTO[]) => filterByCriterion(data, criterion)));
  }

  set(participant: Partial<ParticipantDTO>): void {
    this._client.doc('participants/' + participant.id).update(participant);
  }

  getAll(criterion: Partial<ParticipantDTO>): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }
}
