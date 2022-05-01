import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseMyAccountService } from './firebase-my-account.service';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [FirebaseMyAccountService],
  exports: [],
})
export class FirebaseMyAccountServiceModule {}
