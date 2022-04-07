import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AddsEventDtoPort } from '../../../application/ports/secondary/adds-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseEventService
  implements AddsEventDtoPort, GetsAllEventDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(addEvent: Partial<EventDTO>): void {
    this._client.collection('events').add(addEvent);
  }

  getAll(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }
}
