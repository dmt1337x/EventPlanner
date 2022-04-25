import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsUserDtoPort } from '../../../application/ports/secondary/adds-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/gets-all-user.dto-port';

@Injectable()
export class FirebaseAdminPanelUserService
  implements GetsAllEventDtoPort, AddsUserDtoPort, GetsAllUserDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAllEvents(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }

  add(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }

  getAllUsers(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }
}
