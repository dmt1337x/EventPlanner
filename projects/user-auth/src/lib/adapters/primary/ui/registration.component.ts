import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { FirebaseAuthService } from '../../secondary/infrastructure/firebase-auth.service';

@Component({
  selector: 'lib-registration',
  templateUrl: './registration.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  constructor(private _client: FirebaseAuthService, private _router: Router) {}

  logout(): void {
    this._client.logout();
    this._router.navigateByUrl('/');
  }
  displayEmail(): String | null | undefined {
    const user = getAuth().currentUser;
    return user?.email;
  }
}
