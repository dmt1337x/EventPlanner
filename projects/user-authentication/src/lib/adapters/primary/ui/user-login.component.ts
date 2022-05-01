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
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';

@Component({
  selector: 'lib-user-login',
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
  readonly userLoginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(ADDS_CREDENTIALS_DTO)
    private _addsCredentialsDto: AddsCredentialsDtoPort,
    private _router: Router,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort
  ) {}

  onUserLogined(userLoginForm: FormGroup): void {
    this._addsCredentialsDto
      .addCredentials({
        email: this.userLoginForm.get('email')?.value,
        password: this.userLoginForm.get('password')?.value,
      })
      .subscribe((_) => this._router.navigate(['/my-account']));
  }
}
