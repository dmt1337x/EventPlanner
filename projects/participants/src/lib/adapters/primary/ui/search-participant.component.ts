import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { startWith } from 'rxjs';
import {
  SEARCH_PARTICIPANT_DTO_STORAGE,
  SearchParticipantDtoStoragePort,
} from '../../../application/ports/secondary/search-participant-dto.storage-port';

@Component({
  selector: 'lib-search-participant',
  templateUrl: './search-participant.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchParticipantComponent {
  constructor(
    @Inject(SEARCH_PARTICIPANT_DTO_STORAGE)
    private _searchParticipant: SearchParticipantDtoStoragePort
  ) {
    this.searchParticipantForm.valueChanges
      .pipe(startWith(''))
      .subscribe((form) => this._searchParticipant.next({ name: form.temp }));
  }

  readonly searchParticipantForm: FormGroup = new FormGroup({
    temp: new FormControl(),
  });
}
