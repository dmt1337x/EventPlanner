import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsRegistrationDtoPort } from '../../../application/ports/secondary/adds-registration.dto-port';
import { AuthDTO } from '../../../application/ports/secondary/auth.dto';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/adds-credentials.dto-port';
import { from, map, Observable, take } from 'rxjs';

@Injectable()
export class FirebaseAuthenticationService
  implements AddsRegistrationDtoPort, AddsCredentialsDtoPort
{
  constructor(
    private _auth: AngularFireAuth,
    private _client: AngularFirestore
  ) {}

  addUserToAuth(registration: AuthDTO): void {
    this._auth.createUserWithEmailAndPassword(
      registration.email,
      registration.password
    );
  }

  addCredentials(auth: AuthDTO): Observable<void> {
    return from(
      this._auth.signInWithEmailAndPassword(auth.email, auth.password)
    ).pipe(
      take(1),
      map((_) => void 0)
    );
  }
}
