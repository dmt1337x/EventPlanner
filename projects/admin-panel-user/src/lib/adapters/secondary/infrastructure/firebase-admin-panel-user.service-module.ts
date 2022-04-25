import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAdminPanelUserService } from './firebase-admin-panel-user.service';
import { GETS_ALL_EVENT_DTO } from '../../../application/ports/secondary/gets-all-event.dto-port';
import { ADDS_USER_DTO } from '../../../application/ports/secondary/adds-user.dto-port';
import { GETS_ALL_USER_DTO } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { SETS_USER_DTO } from '../../../application/ports/secondary/sets-user.dto-port';
import { REMOVES_USER_DTO } from '../../../application/ports/secondary/removes-user.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseAdminPanelUserService,
    { provide: GETS_ALL_EVENT_DTO, useExisting: FirebaseAdminPanelUserService },
    { provide: ADDS_USER_DTO, useExisting: FirebaseAdminPanelUserService },
    { provide: GETS_ALL_USER_DTO, useExisting: FirebaseAdminPanelUserService },
    { provide: SETS_USER_DTO, useExisting: FirebaseAdminPanelUserService },
    { provide: REMOVES_USER_DTO, useExisting: FirebaseAdminPanelUserService },
  ],
  exports: [],
})
export class FirebaseAdminPanelUserServiceModule {}
