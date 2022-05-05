import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import { switchMap, map } from 'rxjs/operators';

import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';

@Component({
  selector: 'lib-account-event-list',
  templateUrl: './account-event-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountEventListComponent {
  readonly selectedEventForm: FormGroup = new FormGroup({
    eventId: new FormControl('', Validators.required),
    eventName: new FormControl(),
  });

  events$: Observable<EventDTO[]> = combineLatest([
    this._currentUserDtoStoragePort
      .asObservable()
      .pipe(
        switchMap((data) =>
          this._getsOneParticipantDto.getOneParticipant({ email: data.email })
        )
      ),
    this._getsAllEventDto.getAllEvent(),
  ]).pipe(
    map(([participants, events]) =>
      events.filter((event) =>
        participants.some((participant) => event.id === participant.eventId)
      )
    )
  );

  constructor(
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    private _router: Router,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}

  selectEvent(selectedEventForm: FormGroup) {
    this._router.navigate([
      '/event/' + this.selectedEventForm.get('eventId')?.value + '/detail',
    ]);
  }
}
