import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUserDetailDtoPort } from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
import { UserDetailDTO } from '../../../application/ports/secondary/user-detail.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AddsToAuthDtoPort } from '../../../application/ports/secondary/adds-to-auth.dto-port';
import { AddsParticipantDtoPort } from '../../../application/ports/secondary/adds-participant.dto-port';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/credentials.dto';

@Injectable()
export class FirebaseUsersService
  implements
    GetsAllUserDetailDtoPort,
    AddsToAuthDtoPort,
    AddsParticipantDtoPort,
    AddsCredentialsDtoPort
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

  addParticipant(userDetail: Partial<UserDetailDTO>): void {
    this._client.collection('participants').add(userDetail);
  }

  addCredentials(credentials: CredentialsDTO): void {
    this._auth_client.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }
}
