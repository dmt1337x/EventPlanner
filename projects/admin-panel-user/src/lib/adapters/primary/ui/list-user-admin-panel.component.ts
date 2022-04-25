import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';

@Component({
  selector: 'lib-list-user-admin-panel',
  templateUrl: './list-user-admin-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserAdminPanelComponent {
  users$: Observable<UserDTO[]> = this._getsAllUserDto.getAllUsers();

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort
  ) {}
}
