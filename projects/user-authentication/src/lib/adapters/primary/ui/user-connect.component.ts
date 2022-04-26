import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  USER_DETAIL_DTO_STORAGE,
  UserDetailDtoStoragePort,
} from '../../../application/ports/secondary/user-detail-dto.storage-port';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-connect',
  templateUrl: './user-connect.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserConnectComponent {
  constructor(
    @Inject(USER_DETAIL_DTO_STORAGE)
    private _userDetailStorage: UserDetailDtoStoragePort,
    private _router: Router
  ) {}

  readonly userConnectForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userLastName: new FormControl(),
    userEmail: new FormControl(),
  });

  onUserConnected(userConnectForm: FormGroup) {
    this._userDetailStorage.next({
      userEmail: this.userConnectForm.get('userEmail')?.value,
    });
    this._router.navigateByUrl('/registration');
  }
}
