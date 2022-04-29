import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAuthenticationService } from './firebase-authentication.service';
import { ADDS_REGISTRATION_DTO } from '../../../application/ports/secondary/adds-registration.dto-port';
import { ADDS_CREDENTIALS_DTO } from '../../../application/ports/secondary/adds-credentials.dto-port';

@NgModule({
  imports: [AngularFireAuthModule, AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseAuthenticationService,
    {
      provide: ADDS_REGISTRATION_DTO,
      useExisting: FirebaseAuthenticationService,
    },
    {
      provide: ADDS_CREDENTIALS_DTO,
      useExisting: FirebaseAuthenticationService,
    },
  ],
  exports: [],
})
export class FirebaseAuthenticationServiceModule {}
