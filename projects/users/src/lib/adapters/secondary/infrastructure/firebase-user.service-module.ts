import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseUserService } from './firebase-user.service';
import { ADDS_USER_DTO } from '../../../application/ports/secondary/adds-user.dto-port';
import { GETS_ALL_USER_DTO } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { REMOVES_USER_DTO } from '../../../application/ports/secondary/removes-user.dto-port';
import { SETS_USER_DTO } from '../../../application/ports/secondary/sets-user.dto-port';
import { ADDS_USER_TO_AUTH_DTO } from '../../../application/ports/secondary/adds-user-to-auth.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseUserService,
    { provide: ADDS_USER_DTO, useExisting: FirebaseUserService },
    { provide: ADDS_USER_TO_AUTH_DTO, useExisting: FirebaseUserService },
    { provide: GETS_ALL_USER_DTO, useExisting: FirebaseUserService },
    { provide: REMOVES_USER_DTO, useExisting: FirebaseUserService },
    { provide: SETS_USER_DTO, useExisting: FirebaseUserService },
  ],
  exports: [],
})
export class FirebaseUserServiceModule {}
