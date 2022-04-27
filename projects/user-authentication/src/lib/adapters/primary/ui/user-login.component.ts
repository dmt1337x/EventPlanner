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
import { Router } from '@angular/router';
import {
  UserContextDtoStoragePort,
  USER_CONTEXT_DTO_STORAGE,
} from 'projects/user-core/src/lib/application/ports/secondary/user-context-dto.storage-port';

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
    private _addsCredentialsDto: AddsCredentialsDtoPort,
    @Inject(USER_CONTEXT_DTO_STORAGE)
    private _userContextStorage: UserContextDtoStoragePort,
    private _router: Router
  ) {}

  onLogined(loginForm: FormGroup): void {
    this._addsCredentialsDto.addCredentials({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    });
    this._userContextStorage.next({
      userEmail: this.loginForm.get('email')?.value,
    });
    this._router.navigateByUrl('my-account');
  }
}
