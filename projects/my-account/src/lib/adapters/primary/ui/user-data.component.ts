import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { CurrentUserDTO } from 'projects/user-core/src/lib/application/ports/secondary/current-user.dto';
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
import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-user-data',
  templateUrl: './user-data.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDataComponent {
  user$: Observable<UserDTO[]> = this._currentUserDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllUserDto.getAllUser({ email: data.email })
      )
    );

  test$: Observable<CurrentUserDTO> =
    this._currentUserDtoStoragePort.asObservable();

  participant$: Observable<ParticipantDTO[]> = this._currentUserDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllParticipantDto.getAllParticipant({ email: data.email })
      )
    );
  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAllEvent();

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    private _router: Router
  ) {}

  status() {
    return getAuth().currentUser?.email;
  }

  logout() {
    return getAuth().signOut();
  }
}
