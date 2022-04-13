import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_USER_DTO,
  AddsUserDtoPort,
} from '../../../application/ports/secondary/adds-user.dto-port';

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  readonly addUser: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
  });

  constructor(@Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort) {}

  onUserAdded(addUser: FormGroup): void {
    this._addsUserDto.add({
      userName: this.addUser.get('userName')?.value,
      userLastName: this.addUser.get('userLastName')?.value,
      userEmail: this.addUser.get('userEmail')?.value,
    });
    addUser.reset();
  }
}
