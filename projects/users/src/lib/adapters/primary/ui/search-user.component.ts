import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  SearchUserDtoStoragePort,
  SEARCH_USER_DTO_STORAGE,
} from '../../../application/ports/secondary/search-user-dto.storage-port';

@Component({
  selector: 'lib-search-user',
  templateUrl: './search-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserComponent {
  constructor(
    @Inject(SEARCH_USER_DTO_STORAGE)
    private _search: SearchUserDtoStoragePort
  ) {
    this.search.valueChanges.subscribe((form) =>
      this._search.next({ userName: form.userName })
    );
  }
  readonly search: FormGroup = new FormGroup({ userName: new FormControl() });
}
