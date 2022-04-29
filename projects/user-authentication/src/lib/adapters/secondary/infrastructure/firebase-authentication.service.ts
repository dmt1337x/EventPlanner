import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsRegistrationDtoPort } from '../../../application/ports/secondary/adds-registration.dto-port';
import { RegistrationDTO } from '../../../application/ports/secondary/registration.dto';

@Injectable()
export class FirebaseAuthenticationService implements AddsRegistrationDtoPort {
  constructor(
    private _auth: AngularFireAuth,
    private _client: AngularFirestore
  ) {}

  add(registration: RegistrationDTO): void {
    this._auth.createUserWithEmailAndPassword(
      registration.email,
      registration.password
    );
  }
}
