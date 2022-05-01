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
  GETS_ALL_USERS_DTO,
  GetsAllUsersDtoPort,
} from '../../../application/ports/secondary/gets-all-users.dto-port';
import {
  USER_CONTEXT_DTO_STORAGE,
  UserContextDtoStoragePort,
} from '../../../application/ports/secondary/user-context-dto.storage-port';
import {
  REMOVES_USER_DTO,
  RemovesUserDtoPort,
} from '../../../application/ports/secondary/removes-user.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserContextDTO } from '../../../application/ports/secondary/user-context.dto';
import {
  SETS_USER_DTO,
  SetsUserDtoPort,
} from '../../../application/ports/secondary/sets-user.dto-port';
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
  userContext$: Observable<UserContextDTO> = this._userContext.asObservable();
  users$: Observable<UserDTO[]> = this._searchUserDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllUserDto.getAllUsers(
          data && data.name && data.name.length
            ? { name: data.name }
            : undefined
        )
      )
    );
  constructor(
    @Inject(GETS_ALL_USERS_DTO) private _getsAllUserDto: GetsAllUsersDtoPort,
    @Inject(REMOVES_USER_DTO) private _removesUserDto: RemovesUserDtoPort,
    @Inject(USER_CONTEXT_DTO_STORAGE)
    private _userContext: UserContextDtoStoragePort,
    private modalService: BsModalService,
    @Inject(SETS_USER_DTO) private _setsUserDto: SetsUserDtoPort,
    @Inject(SEARCH_USER_DTO_STORAGE)
    private _searchUserDtoStoragePort: SearchUserDtoStoragePort
  ) {}

  readonly userEdit: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(),
    id: new FormControl(),
  });

  onUserRemoveed(user: UserDTO): void {
    this._removesUserDto.remove(user.id);
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>, user: UserDTO) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this._userContext.next({
      selectedUserId: user.id,
    });
  }

  onUserEdited(userEdit: FormGroup): void {
    this._setsUserDto.set({
      name: this.userEdit.get('name')?.value,
      lastName: this.userEdit.get('lastName')?.value,
      id: this.userEdit.get('id')?.value,
    });
    this.modalRef?.hide();
  }
}
