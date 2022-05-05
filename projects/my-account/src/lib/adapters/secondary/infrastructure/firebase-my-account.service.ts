import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { filterByCriterion } from '@lowgular/shared';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import { GetsOneParticipantDtoPort } from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { SetsParticipantDtoPort } from '../../../application/ports/secondary/sets-participant.dto-port';

@Injectable()
export class FirebaseMyAccountService
  implements
    GetsOneParticipantDtoPort,
    GetsAllEventDtoPort,
    SetsParticipantDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getOneParticipant(
    criterion: Partial<ParticipantDTO>
  ): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }

  getAllEvent(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }

  setParticipant(participant: Partial<ParticipantDTO>): void {
    this._client.doc('participants/' + participant.id).update(participant);
  }
}
