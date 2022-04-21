import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'projects/user-auth/src/lib/adapters/secondary/infrastructure/firebase-auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPage {
  constructor(private _user: FirebaseAuthService, private _router: Router) {}
  logout(): void {
    this._user.logout();
    this._router.navigate(['/']);
  }
}
