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
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AddsUserToAuthDtoPort } from '../../../application/ports/secondary/adds-user-to-auth.dto-port';

@Injectable()
export class FirebaseUserService
  implements
    AddsUserDtoPort,
    GetsAllUserDtoPort,
    RemovesUserDtoPort,
    SetsUserDtoPort,
    AddsUserToAuthDtoPort
{
  constructor(
    private _client: AngularFirestore,
    private _auth: AngularFireAuth
  ) {}

  add(user: Partial<UserDTO>): void {
    this._client.collection('users').add(user);
  }

  addToAuth(user: UserDTO): void {
    this._auth.createUserWithEmailAndPassword(
      user.userEmail,
      user.userPassword
    );
  }

  getAll(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }

  remove(id: string): void {
    this._client.doc('users/' + id).delete();
  }

  set(user: Partial<UserDTO>): void {
    this._client.doc('users/' + user.id).update(user);
  }
}
