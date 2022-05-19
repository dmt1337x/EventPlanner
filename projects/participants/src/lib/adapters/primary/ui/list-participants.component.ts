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
import { switchMap, map } from 'rxjs/operators';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';

import {
  REMOVES_PARTICIPANT_DTO,
  RemovesParticipantDtoPort,
} from '../../../application/ports/secondary/removes-participant.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import { AttractionDTO } from '../../../application/ports/secondary/participant-detail-ports/attraction.dto';
import { DietDTO } from '../../../application/ports/secondary/participant-detail-ports/diet.dto';
import {
  GetsAllAttractionDtoPort,
  GETS_ALL_ATTRACTION_DTO,
} from '../../../application/ports/secondary/participant-detail-ports/gets-all-attraction.dto-port';
import {
  GetsAllDietDtoPort,
  GETS_ALL_DIET_DTO,
} from '../../../application/ports/secondary/participant-detail-ports/gets-all-diet.dto-port';
import {
  GetsAllRoomDtoPort,
  GETS_ALL_ROOM_DTO,
} from '../../../application/ports/secondary/participant-detail-ports/gets-all-room.dto-port';
import {
  GetsAllTransportDtoPort,
  GETS_ALL_TRANSPORT_DTO,
} from '../../../application/ports/secondary/participant-detail-ports/gets-all-transport.dto-port';
import { RoomDTO } from '../../../application/ports/secondary/participant-detail-ports/room.dto';
import { TransportDTO } from '../../../application/ports/secondary/participant-detail-ports/transport.dto';

@Component({
  selector: 'lib-list-participants',
  templateUrl: './list-participants.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListParticipantsComponent {
  participants$: Observable<ParticipantDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllParticipantDto.getAllParticipants({
          eventId: data.selectedEventId,
        })
      ),
      combineLatestWith(
        this._getsAllUserDto.getAllUser(),
        this._getsAllDietDto.getAllDiet(),
        this._getsAllTransportDto.getAllTransport(),
        this._getsAllRoomDto.getAllRoom(),
        this._getsAllAttractionDto.getAllAttraction()
      ),
      map(([participants, users, diets, transports, rooms, attractions]) =>
        participants.map((participant) => ({
          name: users.find((user) => user.email === participant.email)
            ?.name as string,
          lastName: users.find((user) => user.email === participant.email)
            ?.lastName as string,
          email: participant.email,
          eventId: participant.eventId,
          attractionId: attractions.find(
            (attraction) => attraction.id === participant.attractionId
          )?.attractionName as string,
          confirmed: participant.confirmed,
          dietId: diets.find((diet) => diet.id === participant.dietId)
            ?.dietName as string,
          transportId: transports.find(
            (transport) => transport.id === participant.transportId
          )?.transportName as string,
          id: participant.id,
          roomType: participant.roomType,
          roomId: rooms.find((room) => room.id === participant.roomId)
            ?.number as number,
        }))
      )
    );

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(REMOVES_PARTICIPANT_DTO)
    private _removesParticipantDto: RemovesParticipantDtoPort,
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort,
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort
  ) {}

  onParticipantRemoveed(participant: ParticipantDTO): void {
    this._removesParticipantDto.remove(participant.id);
  }
}
