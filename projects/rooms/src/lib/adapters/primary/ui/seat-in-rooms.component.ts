import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatestWith, Observable } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import { switchMap, map } from 'rxjs/operators';
import {
  SEAT_IN_ROOM_DTO_STORAGE,
  SeatInRoomDtoStoragePort,
} from '../../../application/ports/secondary/seat-in-room-dto.storage-port';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';

@Component({
  selector: 'lib-seat-in-rooms',
  templateUrl: './seat-in-rooms.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatInRoomsComponent {
  participants$: Observable<ParticipantDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((event) =>
        this._getsAllParticipantDto.getAllParticipant({
          eventId: event.selectedEventId,
        })
      ),
      combineLatestWith(this._seatInRoomDtoStoragePort.asObservable()),
      map(([participants, rooms]) =>
        participants.filter((participant) => participant.roomId === rooms.id)
      ),
      combineLatestWith(this._getsAllUserDto.getAllUser()),
      map(([participants, users]) =>
        participants.map((participant) => ({
          name: users.find((user) => user.email === participant.email)
            ?.name as string,
          lastName: users.find((user) => user.email === participant.email)
            ?.lastName as string,
          id: participant.id,
          email: participant.email,
          eventId: participant.eventId,
          roomId: participant.roomId,
        }))
      )
    );

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(SEAT_IN_ROOM_DTO_STORAGE)
    private _seatInRoomDtoStoragePort: SeatInRoomDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort
  ) {}
}
