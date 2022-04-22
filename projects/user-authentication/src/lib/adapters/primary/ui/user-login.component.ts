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
import {
  GetCurrentUserDtoPort,
  GET_CURRENT_USER_DTO,
} from '../../../application/ports/secondary/gets-current-user.dto-port';
import { CurrentUserDTO } from '../../../application/ports/secondary/current-user.dto';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(
    @Inject(LOGIN_DTO) private _loginEmailPwd: LoginDtoPort,
    @Inject(GET_CURRENT_USER_DTO)
    private _getCurrentUser: GetCurrentUserDtoPort,
    private _router: Router
  ) {}

  onLogined(userLogin: FormGroup): void {
    this._loginEmailPwd.login({
      userEmail: this.userLogin.get('email')?.value,
      userPassword: this.userLogin.get('password')?.value,
    });
  }
  axx$: Observable<CurrentUserDTO | null> =
    this._getCurrentUser.getCurrentUser();
}
