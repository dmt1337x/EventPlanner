import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-account-event-list',
  templateUrl: './account-event-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountEventListComponent {
  participants$: Observable<ParticipantDTO[]> = this._currentUserDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsOneParticipantDto.getOneParticipant({ email: data.email })
      )
    );
  readonly selectedEventForm: FormGroup = new FormGroup({
    eventId: new FormControl(),
    eventName: new FormControl(),
  });

  constructor(
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    private _router: Router
  ) {}

  selectEvent(selectedEventForm: FormGroup) {
    this._router.navigate([
      '/event/' + this.selectedEventForm.get('eventId')?.value + '/detail',
    ]);
  }
}
