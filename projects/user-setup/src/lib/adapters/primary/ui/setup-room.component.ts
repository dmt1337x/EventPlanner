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
import { combineLatest, map, Observable, switchMap, take, tap } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-participant.dto-port';
import {
  GETS_ONE_ROOM_DTO,
  GetsOneRoomDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-room.dto-port';
import {
  SETS_ROOM_DTO,
  SetsRoomDtoPort,
} from '../../../application/ports/secondary/dto/sets-room.dto-port';

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
import {
  ROOM_CONTEXT_DTO_STORAGE,
  RoomContextDtoStoragePort,
} from '../../../application/ports/secondary/room-context-dto.storage-port';
import { RoomContextDTO } from '../../../application/ports/secondary/room-context.dto';

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

  roomContext$: Observable<RoomContextDTO> =
    this._roomContextDtoStoragePort.asObservable();

  participant$: Observable<ParticipantDTO[]> = combineLatest([
    this._currentUserDtoStoragePort.asObservable(),
    this._eventContextDtoStoragePort.asObservable(),
  ]).pipe(
    switchMap(([user, event]) =>
      this._getsAllParticipantDto.getAllParticipant({
        eventId: event.eventId,
        email: user.email,
      })
    )
  );
  rooms$: Observable<RoomDTO[]> = combineLatest([
    this._participantContextDtoStoragePort.asObservable(),
    this._eventContextDtoStoragePort.asObservable(),
  ]).pipe(
    switchMap(([participant, event]) =>
      this._getsAllRoomDto
        .getAllRoom({
          capacity: participant.roomType,
          eventId: event.eventId,
        })
        .pipe(map((rooms) => rooms.filter((room) => room.available > 0)))
    )
  );

  constructor(
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    private _router: Router,
    @Inject(PARTICIPANT_CONTEXT_DTO_STORAGE)
    private _participantContextDtoStoragePort: ParticipantContextDtoStoragePort,
    @Inject(ROOM_CONTEXT_DTO_STORAGE)
    private _roomContextDtoStoragePort: RoomContextDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(SETS_ROOM_DTO)
    private _setsRoomDto: SetsRoomDtoPort,
    @Inject(GETS_ONE_ROOM_DTO)
    private _getsOneRoomDto: GetsOneRoomDtoPort
  ) {}

  onRoomTypeSeted(setupRoom: FormGroup): void {
    this._participantContextDtoStoragePort.next({
      roomType: setupRoom.get('capacity')?.value,
    });
  }

  selectRoomId(event: Event) {
    if ((event.target as HTMLInputElement).value != null) {
      return this._roomContextDtoStoragePort.next({
        selectedRoomId: (event.target as HTMLInputElement).value,
      });
    }
  }

  onRoomNumberSeted(
    event: EventContextDTO,
    selectedRoomID: RoomContextDTO,
    participant: ParticipantDTO,
    setupRoom: FormGroup
  ): void {
    this._getsOneParticipantDto
      .getOneParticipant(participant.id)
      .pipe(
        switchMap((participant) => {
          if (participant && participant.roomId && participant.roomId.length) {
            return this._getsOneRoomDto.getOneRoom(participant.roomId).pipe(
              tap((room) =>
                this._setsRoomDto.setRoom({
                  id: room.id,
                  available: room.available + 1,
                })
              )
            );
          } else {
            return participant.eventId;
          }
        }),
        take(1),
        switchMap(() =>
          this._getsOneRoomDto.getOneRoom(selectedRoomID.selectedRoomId).pipe(
            tap((room) =>
              this._setsRoomDto.setRoom({
                id: room.id,
                available: room.available - 1,
              })
            )
          )
        ),
        take(1),
        switchMap(() =>
          this._setsParticipantDto.setParticipant({
            roomId: setupRoom.get('number')?.value,
            roomType: setupRoom.get('capacity')?.value,
            id: setupRoom.get('id')?.value,
            confirmed: true,
          })
        ),
        take(1)
      )
      .subscribe(() =>
        this._router.navigate(['event/' + event.eventId + '/complete'])
      );
  }
}
