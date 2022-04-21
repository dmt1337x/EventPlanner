import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable, take } from 'rxjs';
import { GetsOneUserDtoPort } from '../../../application/ports/secondary/gets-one-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { CredentialsDTO } from '../../../application/ports/secondary/credentials.dto';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/adds-credentials.dto-port';
import { from } from 'rxjs';

@Injectable()
export class FirebaseAuthService
  implements GetsOneUserDtoPort, AddsCredentialsDtoPort
{
  user$ = this._client.user;
  constructor(private _client: AngularFireAuth) {}

  getOne(): Observable<UserDTO | null> {
    return this._client.user;
  }

  add(credentials: CredentialsDTO): Observable<void> {
    return from(
      this._client.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      take(1),
      map((_) => void 0)
    );
  }

  logout() {
    this._client.signOut();
  }
}
