import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  EventContextDtoStoragePort,
  EVENT_CONTEXT_DTO_STORAGE,
} from 'projects/user-core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/event-context.dto';
import { combineLatest, Observable, switchMap } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';

import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { Router } from '@angular/router';

import {
  PARTICIPANT_CONTEXT_DTO_STORAGE,
  ParticipantContextDtoStoragePort,
} from '../../../application/ports/secondary/participant-context-dto.storage-port';
import { ParticipantContextDTO } from '../../../application/ports/secondary/participant-context.dto';

@Component({
  selector: 'lib-setup-room',
  templateUrl: './setup-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupRoomComponent {
  readonly setupRoom: FormGroup = new FormGroup({
    capacity: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    id: new FormControl(),
  });
  event$: Observable<EventContextDTO> =
    this._eventContextDtoStoragePort.asObservable();

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
  rooms$: Observable<RoomDTO[]> = this._participantContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllRoomDto.getAllRoom({ capacity: data.roomType })
      )
    );

  constructor(
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    private _router: Router,
    @Inject(PARTICIPANT_CONTEXT_DTO_STORAGE)
    private _participantContextDtoStoragePort: ParticipantContextDtoStoragePort
  ) {
    console.log(this.setupRoom.getRawValue);
  }

  onRoomTypeSeted(roomType: FormGroup): void {
    this._participantContextDtoStoragePort.next({
      roomType: roomType.get('capacity')?.value,
    });
  }

  onRoomNumberSeted(event: EventContextDTO, roomType: FormGroup): void {
    this._setsParticipantDto.set({
      roomId: roomType.get('number')?.value,
      roomType: roomType.get('capacity')?.value,
      id: roomType.get('id')?.value,
      confirmed: true,
    });
    this._router.navigate(['event/' + event.eventId + '/complete']);
  }
}
