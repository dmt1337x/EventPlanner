import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith } from 'rxjs';
import {
  SearchEventDtoStoragePort,
  SEARCH_EVENT_DTO_STORAGE,
} from '../../../application/ports/secondary/search-event-dto.storage-port';

@Component({
  selector: 'lib-search-event',
  templateUrl: './search-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEventComponent {
  constructor(
    @Inject(SEARCH_EVENT_DTO_STORAGE)
    private _search: SearchEventDtoStoragePort
  ) {
    this.search.valueChanges
      .pipe(startWith(''))
      .subscribe((form) => this._search.next({ eventTitle: form.eventTitle }));
  }
  readonly search: FormGroup = new FormGroup({ eventTitle: new FormControl() });
}
