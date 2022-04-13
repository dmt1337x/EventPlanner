import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import { UserIdDTO } from '../../../application/ports/secondary/user-id.dto';
import {
  UserIdDtoStoragePort,
  USER_ID_DTO_STORAGE,
} from '../../../application/ports/secondary/user-id-dto.storage-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SetsUserDtoPort,
  SETS_USER_DTO,
} from '../../../application/ports/secondary/sets-user.dto-port';
import {
  RemovesUserDtoPort,
  REMOVES_USER_DTO,
} from '../../../application/ports/secondary/removes-user.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  SEARCH_USER_DTO_STORAGE,
  SearchUserDtoStoragePort,
} from '../../../application/ports/secondary/search-user-dto.storage-port';

@Component({
  selector: 'lib-list-users',
  templateUrl: './list-users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent {
  userIdContext$: Observable<UserIdDTO> = this._userIdDtoStorage.asObservable();

  readonly editUser: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    id: new FormControl(),
  });
  users$: Observable<UserDTO[]> = this._searchUserDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllUserDto.getAll(
          data && data.userName && data.userName.length
            ? { userName: data.userName }
            : undefined
        )
      )
    );

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(SETS_USER_DTO) private _setsUserDto: SetsUserDtoPort,
    @Inject(REMOVES_USER_DTO) private _removeUserDto: RemovesUserDtoPort,
    @Inject(USER_ID_DTO_STORAGE)
    private _userIdDtoStorage: UserIdDtoStoragePort,
    private modalService: BsModalService,
    @Inject(SEARCH_USER_DTO_STORAGE)
    private _searchUserDtoStoragePort: SearchUserDtoStoragePort
  ) {}

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>, user: UserDTO) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this._userIdDtoStorage.next({
      selectedUserId: user.id,
    });
  }
  onUserEdited(editUser: FormGroup): void {
    this._setsUserDto.set({
      userName: editUser.get('userName')?.value,
      userLastName: editUser.get('userLastName')?.value,
      userEmail: editUser.get('userEmail')?.value,
      id: editUser.get('id')?.value,
    });
    this.modalRef?.hide();
  }
  onUserRemoveed(users$: UserDTO) {
    this._removeUserDto.remove(users$.id);
  }
}
