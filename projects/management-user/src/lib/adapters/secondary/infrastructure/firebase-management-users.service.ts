import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsUserDtoPort } from '../../../application/ports/secondary/adds-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUsersDtoPort } from '../../../application/ports/secondary/gets-all-users.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { AddsParticipantDtoPort } from '../../../application/ports/secondary/adds-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { GetsAllEventsDtoPort } from '../../../application/ports/secondary/gets-all-events.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseManagementUsersService
  implements
    AddsUserDtoPort,
    GetsAllUsersDtoPort,
    AddsParticipantDtoPort,
    GetsAllEventsDtoPort
{
  constructor(private _client: AngularFirestore) {}

  addUser(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }

  getAllUsers(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }

  addParticipant(participant: Partial<ParticipantDTO>): void {
    this._client.collection('participants').add(participant);
  }

  getAllEvents(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }
}
