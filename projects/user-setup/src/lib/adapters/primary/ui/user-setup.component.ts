import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  USER_CONTEXT_DTO_STORAGE,
  UserContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/user-context-dto.storage-port';
import { UserContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/user-context.dto';

@Component({
  selector: 'lib-user-setup',
  templateUrl: './user-setup.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSetupComponent {
  constructor(
    @Inject(USER_CONTEXT_DTO_STORAGE)
    private _userContextDtoStoragePort: UserContextDtoStoragePort
  ) {}

  axx$: Observable<UserContextDTO> =
    this._userContextDtoStoragePort.asObservable();
}
