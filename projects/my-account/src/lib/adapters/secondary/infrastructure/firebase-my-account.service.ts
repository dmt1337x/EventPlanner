import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseMyAccountService
  implements GetsAllParticipantDtoPort, GetsAllEventDtoPort
{
  constructor(
    private _client: AngularFirestore,
    private _auth_client: AngularFireAuth
  ) {}

  getParticipant(
    criterion: Partial<ParticipantDTO>
  ): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }
  getEvents(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }
}
