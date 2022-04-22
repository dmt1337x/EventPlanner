import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseUsersService } from './firebase-users.service';
import { GETS_ALL_USER_DETAIL_DTO } from '../../../application/ports/secondary/gets-all-user-detail.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseUsersService,
    { provide: GETS_ALL_USER_DETAIL_DTO, useExisting: FirebaseUsersService },
  ],
  exports: [],
})
export class FirebaseUsersServiceModule {}
