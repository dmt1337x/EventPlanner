import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  GETS_ALL_USER_DETAIL_DTO,
  GetsAllUserDetailDtoPort,
} from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
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

  readonly userConnect: FormGroup = new FormGroup({
    userName: new FormControl(),
    userLastName: new FormControl(),
    userEmail: new FormControl(),
  });

  userLogin(userConnect: FormGroup) {
    this._userDetailStorage.next({
      userEmail: this.userConnect.get('userEmail')?.value,
    });
    this._router.navigateByUrl('/registration');
  }
}
