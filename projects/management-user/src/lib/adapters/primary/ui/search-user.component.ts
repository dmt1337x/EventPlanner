import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  SEARCH_USER_DTO_STORAGE,
  SearchUserDtoStoragePort,
} from 'projects/management-user/src/lib/application/ports/secondary/search-user-dto.storage-port';

@Component({
  selector: 'lib-search-user',
  templateUrl: './search-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserComponent {
  constructor(
    @Inject(SEARCH_USER_DTO_STORAGE) private _search: SearchUserDtoStoragePort
  ) {
    this.searchUser.valueChanges.subscribe((form) =>
      this._search.next({ name: form.temp })
    );
  }
  readonly searchUser: FormGroup = new FormGroup({ temp: new FormControl() });
}
