import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/event-context.dto';
import {
  USER_CONTEXT_DTO_STORAGE,
  UserContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/user-context-dto.storage-port';
import { UserContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/user-context.dto';
import { EventDataDTO } from '../../../application/ports/secondary/event-data.dto';
import {
  GETS_ALL_EVENT_DATA_DTO,
  GetsAllEventDataDtoPort,
} from '../../../application/ports/secondary/gets-all-event-data.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-setup',
  templateUrl: './user-setup.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSetupComponent {
  diets$: Observable<EventDataDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDataDto.getAllDiet({ eventId: data.eventId })
      )
    );

  transports$: Observable<EventDataDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDataDto.getAllTransport({
          eventId: data.eventId,
        })
      )
    );

  attractions$: Observable<EventDataDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDataDto.getAllAttraction({
          eventId: data.eventId,
        })
      )
    );

  currentUser$: Observable<UserContextDTO> =
    this._userContextDtoStoragePort.asObservable();

  constructor(
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(USER_CONTEXT_DTO_STORAGE)
    private _userContextDtoStoragePort: UserContextDtoStoragePort,
    @Inject(GETS_ALL_EVENT_DATA_DTO)
    private _getsAllEventDataDto: GetsAllEventDataDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    private _router: Router
  ) {}

  readonly setupParticipant: FormGroup = new FormGroup({
    dietId: new FormControl(),
    transportId: new FormControl(),
    attractionId: new FormControl(),
    id: new FormControl(),
  });

  onSetupParticipantSubmited(setupParticipant: FormGroup): void {
    this._setsParticipantDto.set({
      dietId: this.setupParticipant.get('dietId')?.value,
      transportId: this.setupParticipant.get('transportId')?.value,
      attractionId: this.setupParticipant.get('attractionId')?.value,
      id: this.setupParticipant.get('id')?.value,
    });
    this._router.navigate(['/complete']);
  }
}
