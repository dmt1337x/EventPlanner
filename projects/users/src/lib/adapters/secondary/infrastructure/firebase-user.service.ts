import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsUserDtoPort } from '../../../application/ports/secondary/adds-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { RemovesUserDtoPort } from '../../../application/ports/secondary/removes-user.dto-port';
import { SetsUserDtoPort } from '../../../application/ports/secondary/sets-user.dto-port';
import { GetsAllEventDtoPort } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseUserService
  implements
    AddsUserDtoPort,
    GetsAllUserDtoPort,
    RemovesUserDtoPort,
    SetsUserDtoPort,
    GetsAllEventDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }

  getAll(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }

  remove(id: string): void {
    this._client.doc('participants/' + id).delete();
  }

  set(user: Partial<UserDTO>): void {
    this._client.doc('participants/' + user.id).update(user);
  }

  getAllEvent(criterion: Partial<EventDTO>): Observable<EventDTO[]> {
    return this._client
      .collection<EventDTO>('events')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EventDTO[]) => filterByCriterion(data, criterion)));
  }
}
