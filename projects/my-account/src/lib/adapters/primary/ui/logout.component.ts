import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-logout',
  templateUrl: './logout.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent {
  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  logout() {
    return this._auth.signOut(), this._router.navigate(['/']);
  }
}
