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
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import { Router } from '@angular/router';
import { EventContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/event-context.dto';

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

  event$: Observable<EventContextDTO> =
    this._eventContextDtoStoragePort.asObservable();

  constructor(
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    private _router: Router
  ) {}

  confirmAttendance(event: EventContextDTO): void {
    this._router.navigate(['event/' + event.eventId + '/setup']);
  }
  cantAttend(participant: ParticipantDTO, event: EventContextDTO): void {
    this._setsParticipantDto.setParticipant({
      id: participant.id,
      confirmed: false,
    });
    this._router.navigate(['event/' + event.eventId + '/complete']);
  }
}
