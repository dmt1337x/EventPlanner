import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseMyAccountService
  implements GetsAllUserDtoPort, GetsAllParticipantDtoPort, GetsAllEventDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAllUser(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
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

  getAllEvent(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }
}
