import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import {
  ADDS_PARTICIPANT_DTO,
  AddsParticipantDtoPort,
} from '../../../application/ports/secondary/adds-participant.dto-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';

@Component({
  selector: 'lib-invite-user',
  templateUrl: './invite-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InviteUserComponent {
  users$: Observable<UserDTO[]> = this._getsAllUserDto.getAllUser();
  event$: Observable<EventContextDTO> =
    this._eventContextDtoStoragePort.asObservable();

  readonly inviteUser: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    eventId: new FormControl(),
  });

  constructor(
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(ADDS_PARTICIPANT_DTO)
    private _addsParticipantDto: AddsParticipantDtoPort
  ) {}

  onUserInviteed(inviteUser: FormGroup): void {
    this._addsParticipantDto.addParticipant({
      email: inviteUser.get('email')?.value,
      eventId: inviteUser.get('eventId')?.value,
    });
  }
}
