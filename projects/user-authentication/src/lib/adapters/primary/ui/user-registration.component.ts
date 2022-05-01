import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_REGISTRATION_DTO,
  AddsRegistrationDtoPort,
} from '../../../application/ports/secondary/adds-registration.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-registration',
  templateUrl: './user-registration.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
  readonly registrationForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(ADDS_REGISTRATION_DTO)
    private _addsRegistrationDto: AddsRegistrationDtoPort,
    private _router: Router
  ) {}

  onUserRegistrationed(registrationForm: FormGroup): void {
    this._addsRegistrationDto.addUserToAuth({
      email: this.registrationForm.get('email')?.value,
      password: this.registrationForm.get('password')?.value,
    });
    this.registrationForm.reset();
    this._router.navigate(['/']);
  }
}
