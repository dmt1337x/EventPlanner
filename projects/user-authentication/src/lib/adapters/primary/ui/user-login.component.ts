import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  LoginDtoPort,
  LOGIN_DTO,
} from '../../../application/ports/secondary/login-dto-port';

@Component({
  selector: 'lib-user-login',
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
  readonly userLogin: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(@Inject(LOGIN_DTO) private _loginEmailPwd: LoginDtoPort) {}

  onLogined(userLogin: FormGroup): void {
    this._loginEmailPwd.login({
      userEmail: this.userLogin.get('email')?.value,
      userPassword: this.userLogin.get('password')?.value,
    });
  }
}
