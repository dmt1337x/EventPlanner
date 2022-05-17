import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, reload } from 'firebase/auth';
import { Router } from '@angular/router';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  logout() {
    return (
      this._auth.signOut(),
      this._router.navigate(['/login']).then(() => window.location.reload())
    );
  }

  currentAccount() {
    return getAuth().currentUser?.email;
  }
}
