import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { switchMap } from 'rxjs/operators';
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
      )
    );

  // users$: Observable<UserDTO[]> = this._getsAllUserDto.getAllUsers();
  // participants$: Observable<ParticipantDTO[]> =
  //   this._getsAllParticipantDto.getAllParticipants();

  // test$: Observable<ParticipantDTO[]> = combineLatest([
  //   this._eventContextDtoStoragePort.asObservable(),
  //   this._getsAllUserDto.getAllUser(),
  // ]).pipe(
  //   switchMap(([context, users]) =>
  //     this._getsAllParticipantDto.getAllParticipants({
  //       eventId: context.selectedEventId,
  //       email: users[1].email,
  //     })
  //   )
  // );

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(REMOVES_PARTICIPANT_DTO)
    private _removesParticipantDto: RemovesParticipantDtoPort,
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort
  ) {}

  onParticipantRemoveed(participant: ParticipantDTO): void {
    this._removesParticipantDto.remove(participant.id);
  }
}
