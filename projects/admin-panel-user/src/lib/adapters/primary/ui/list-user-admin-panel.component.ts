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
import {
  USER_ID_DTO_STORAGE,
  UserIdDtoStoragePort,
} from '../../../application/ports/secondary/user-id-dto.storage-port';
import { UserIdDTO } from '../../../application/ports/secondary/user-id.dto';
import {
  SETS_USER_DTO,
  SetsUserDtoPort,
} from '../../../application/ports/secondary/sets-user.dto-port';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  REMOVES_USER_DTO,
  RemovesUserDtoPort,
} from '../../../application/ports/secondary/removes-user.dto-port';

@Component({
  selector: 'lib-list-user-admin-panel',
  templateUrl: './list-user-admin-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserAdminPanelComponent {
  users$: Observable<UserDTO[]> = this._getsAllUserDto.getAllUsers();

  userIdContext$: Observable<UserIdDTO> = this._userIdDtoStorage.asObservable();

  readonly editUser: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    id: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(USER_ID_DTO_STORAGE)
    private _userIdDtoStorage: UserIdDtoStoragePort,
    @Inject(SETS_USER_DTO) private _setsUserDto: SetsUserDtoPort,
    private modalService: BsModalService,
    @Inject(REMOVES_USER_DTO) private _removesUserDto: RemovesUserDtoPort
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

  onUserRemoveed(user: UserDTO): void {
    this._removesUserDto.remove(user.id);
  }
}
