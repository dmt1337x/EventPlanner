import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USERS_DTO,
  GetsAllUsersDtoPort,
} from '../../../application/ports/secondary/gets-all-users.dto-port';

@Component({
  selector: 'lib-list-users',
  templateUrl: './list-users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent {
  users$: Observable<UserDTO[]> = this._getsAllUserDto.getAllUsers();

  constructor(
    @Inject(GETS_ALL_USERS_DTO) private _getsAllUserDto: GetsAllUsersDtoPort
  ) {}
}
