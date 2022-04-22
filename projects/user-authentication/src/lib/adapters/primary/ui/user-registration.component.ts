import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { UserDetailDTO } from '../../../application/ports/secondary/user-detail.dto';
import {
  GETS_ALL_USER_DETAIL_DTO,
  GetsAllUserDetailDtoPort,
} from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
import {
  USER_DETAIL_DTO_STORAGE,
  UserDetailDtoStoragePort,
} from '../../../application/ports/secondary/user-detail-dto.storage-port';
import { FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'lib-user-registration',
  templateUrl: './user-registration.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
  readonly userEmailForm: FormGroup = new FormGroup({
    userEmail: new FormControl(),
  });
  currentUser$: Observable<UserDetailDTO[]> = this._userDetailStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllUserDetailDto.getAll({ userEmail: data.userEmail })
      )
    );

  constructor(
    @Inject(GETS_ALL_USER_DETAIL_DTO)
    private _getsAllUserDetailDto: GetsAllUserDetailDtoPort,
    @Inject(USER_DETAIL_DTO_STORAGE)
    private _userDetailStorage: UserDetailDtoStoragePort
  ) {}

  context$: Observable<UserDetailDTO> = this._userDetailStorage.asObservable();
  readonly userReg: FormGroup = new FormGroup({
    userName: new FormControl(),
    userLastName: new FormControl(),
    userEmail: new FormControl(),
    id: new FormControl(),
    eventId: new FormControl(),
  });
}
