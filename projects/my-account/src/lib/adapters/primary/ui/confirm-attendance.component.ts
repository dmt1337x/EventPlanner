import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable, switchMap } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';

@Component({
  selector: 'lib-confirm-attendance',
  templateUrl: './confirm-attendance.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmAttendanceComponent {
  participant$: Observable<ParticipantDTO[]> = combineLatest([
    this._currentUserDtoStoragePort.asObservable(),
    this._eventContextDtoStoragePort.asObservable(),
  ]).pipe(
    switchMap(([user, event]) =>
      this._getsOneParticipantDto.getOneParticipant({
        eventId: event.eventId,
        email: user.email,
      })
    )
  );

  constructor(
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort
  ) {}
}
