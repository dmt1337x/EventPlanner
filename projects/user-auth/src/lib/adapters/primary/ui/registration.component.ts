import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../secondary/infrastructure/firebase-auth.service';

@Component({
  selector: 'lib-registration',
  templateUrl: './registration.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  constructor(private _user: FirebaseAuthService, private router: Router) {}

  logout(): void {
    this._user.logout();
    this.router.navigateByUrl('/');
  }
}
