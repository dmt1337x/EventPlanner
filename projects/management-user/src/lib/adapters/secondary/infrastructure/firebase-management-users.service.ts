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
import { RemovesUserDtoPort } from '../../../application/ports/secondary/removes-user.dto-port';
import { SetsUserDtoPort } from '../../../application/ports/secondary/sets-user.dto-port';

@Injectable()
export class FirebaseManagementUsersService
  implements
    AddsUserDtoPort,
    GetsAllUsersDtoPort,
    AddsParticipantDtoPort,
    GetsAllEventsDtoPort,
    RemovesUserDtoPort,
    SetsUserDtoPort
{
  constructor(private _client: AngularFirestore) {}

  addUser(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }

  getAllUsers(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: UserDTO[]) =>
          criterion && criterion.name
            ? data.filter((user) =>
                user.name
                  .toLowerCase()
                  .includes(criterion?.name?.toLowerCase() as string)
              )
            : data
        ),
        map((user) => user.sort((a, b) => a.name.localeCompare(b.name)))
      );
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

  remove(id: string): void {
    this._client.doc('users/' + id).delete();
  }

  set(user: Partial<UserDTO>): void {
    this._client.doc('users/' + user.id).update(user);
  }
}
