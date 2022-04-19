import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAuthService } from './firebase-auth.service';
import { GETS_ONE_USER_DTO } from '../../../application/ports/secondary/gets-one-user.dto-port';
import { ADDS_CREDENTIALS_DTO } from '../../../application/ports/secondary/adds-credentials.dto-port';

@NgModule({
  imports: [AngularFirestoreModule, AngularFireAuthModule],
  declarations: [],
  providers: [
    FirebaseAuthService,
    { provide: GETS_ONE_USER_DTO, useExisting: FirebaseAuthService },
    { provide: ADDS_CREDENTIALS_DTO, useExisting: FirebaseAuthService },
  ],
  exports: [],
})
export class FirebaseAuthServiceModule {}
