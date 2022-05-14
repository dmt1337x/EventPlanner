import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import {
  GETS_ALL_DIET_DTO,
  GetsAllDietDtoPort,
} from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import {
  GETS_ALL_TRANSPORT_DTO,
  GetsAllTransportDtoPort,
} from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import {
  GETS_ALL_ATTRACTION_DTO,
  GetsAllAttractionDtoPort,
} from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import { Router } from '@angular/router';
import { EventContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/event-context.dto';

@Component({
  selector: 'lib-setup-form',
  templateUrl: './setup-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupFormComponent {
  diets$: Observable<DietDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllDietDto.getAllDiet({ eventId: data.eventId })
      )
    );

  transports$: Observable<TransportDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllTransportDto.getAllTransport({ eventId: data.eventId })
      )
    );

  attractions$: Observable<AttractionDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllAttractionDto.getAllAttraction({ eventId: data.eventId })
      )
    );

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

  readonly setupParticipant: FormGroup = new FormGroup({
    dietId: new FormControl('', Validators.required),
    transportId: new FormControl('', Validators.required),
    attractionId: new FormControl('', Validators.required),
    confirmed: new FormControl(),
    id: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort,
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    private _router: Router
  ) {}

  attend(setupParticipant: FormGroup, event: EventContextDTO): void {
    this._setsParticipantDto.set({
      dietId: setupParticipant.get('dietId')?.value,
      transportId: setupParticipant.get('transportId')?.value,
      attractionId: setupParticipant.get('attractionId')?.value,
      id: setupParticipant.get('id')?.value,
    });
    this._router.navigate(['event/' + event.eventId + '/setup-room']);
  }
}
