import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ONE_USER_DTO,
  GetsOneUserDtoPort,
} from '../../../application/ports/secondary/gets-one-user.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ADDS_CREDENTIALS_DTO,
  AddsCredentialsDtoPort,
} from '../../../application/ports/secondary/adds-credentials.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  user$: Observable<UserDTO | null> = this._getsOneUserDto.getOne();
  readonly login: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(GETS_ONE_USER_DTO) private _getsOneUserDto: GetsOneUserDtoPort,
    @Inject(ADDS_CREDENTIALS_DTO)
    private _addsCredentialsDto: AddsCredentialsDtoPort,
    private router: Router
  ) {}

  onLoginSubmited(login: FormGroup): void {
    this._addsCredentialsDto.add({
      email: this.login.get('email')?.value,
      password: this.login.get('password')?.value,
    });
    this.router.navigateByUrl('/registration');
  }
}
