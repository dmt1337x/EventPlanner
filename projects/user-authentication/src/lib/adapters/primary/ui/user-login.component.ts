import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_CREDENTIALS_DTO,
  AddsCredentialsDtoPort,
} from '../../../application/ports/secondary/adds-credentials.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'lib-user-login',
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(ADDS_CREDENTIALS_DTO)
    private _addsCredentialsDto: AddsCredentialsDtoPort
  ) {}

  onLogined(loginForm: FormGroup): void {
    this._addsCredentialsDto.addCredentials({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    });
  }
  test(): any {
    return getAuth().currentUser?.email;
  }
  logoutTest() {
    const x = getAuth().signOut();
  }
}
