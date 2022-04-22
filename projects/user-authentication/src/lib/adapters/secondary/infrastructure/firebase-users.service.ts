import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUserDetailDtoPort } from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
import { UserDetailDTO } from '../../../application/ports/secondary/user-detail.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AddsToAuthDtoPort } from '../../../application/ports/secondary/adds-to-auth.dto-port';
import { SetsUserDetailDtoPort } from '../../../application/ports/secondary/sets-user-detail.dto-port';

@Injectable()
export class FirebaseUsersService
  implements GetsAllUserDetailDtoPort, AddsToAuthDtoPort, SetsUserDetailDtoPort
{
  constructor(
    private _client: AngularFirestore,
    private _auth_client: AngularFireAuth
  ) {}

  getAll(criterion: Partial<UserDetailDTO>): Observable<UserDetailDTO[]> {
    return this._client
      .collection<UserDetailDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDetailDTO[]) => filterByCriterion(data, criterion)));
  }

  addToAuth(userDetail: UserDetailDTO): void {
    this._auth_client.createUserWithEmailAndPassword(
      userDetail.userEmail,
      userDetail.userPassword
    );
  }

  set(userDetail: Partial<UserDetailDTO>): void {
    this._client.doc('user-details/' + userDetail.id).update(userDetail);
  }
}
