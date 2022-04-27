import { getAuth } from 'firebase/auth';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';
import {
  USER_CONTEXT_DTO_STORAGE,
  UserContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/user-context-dto.storage-port';
import { UserContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/user-context.dto';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/event-context.dto';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-account-event-list',
  templateUrl: './account-event-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountEventListComponent {
  currentParticipant$: Observable<ParticipantDTO[]> = this._userContextStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllParticipantDto.getParticipant({
          userEmail: data.userEmail,
        })
      )
    );

  eventListDownloaded(currentParticipant: ParticipantDTO) {
    this._eventContextStorage.next({ eventId: currentParticipant.eventId });
    this._userContextStorage.next({ participantId: currentParticipant.id });
  }

  events$: Observable<EventDTO[]> = this._eventContextStorage
    .asObservable()
    .pipe(
      switchMap((data) => this._getsAllEventDto.getEvents({ id: data.eventId }))
    );

  eventId$: Observable<EventContextDTO> =
    this._eventContextStorage.asObservable();
  participantId$: Observable<UserContextDTO> =
    this._userContextStorage.asObservable();

  logout() {
    return getAuth().signOut(), this._router.navigate(['/login']);
  }

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(USER_CONTEXT_DTO_STORAGE)
    private _userContextStorage: UserContextDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextStorage: EventContextDtoStoragePort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    private _router: Router
  ) {}

  // emailAuth = getAuth().currentUser?.email;

  // currentParticipant2$: Observable<ParticipantDTO[]> =
  //   this._getsAllParticipantDto.getParticipant(
  //     this.emailAuth !== null ? { userEmail: this.emailAuth } : {}
  //   );

  // goToSetup(participant: UserContextDTO, event: EventContextDTO) {
  //   // console.log(participant.participantId, event.eventId);
  //   this._router.navigate([
  //     'my-account/' +
  //       participant.participantId +
  //       '/' +
  //       event.eventId +
  //       '/setup',
  //   ]);
  // }
}
