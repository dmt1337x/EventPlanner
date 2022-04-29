import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USERS_DTO,
  GetsAllUsersDtoPort,
} from '../../../application/ports/secondary/gets-all-users.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENTS_DTO,
  GetsAllEventsDtoPort,
} from '../../../application/ports/secondary/gets-all-events.dto-port';
import {
  ADDS_PARTICIPANT_DTO,
  AddsParticipantDtoPort,
} from '../../../application/ports/secondary/adds-participant.dto-port';

@Component({
  selector: 'lib-connect-user',
  templateUrl: './connect-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectUserComponent {
  readonly connectUser: FormGroup = new FormGroup({
    eventId: new FormControl(),
    email: new FormControl(),
    name: new FormControl(),
    lastName: new FormControl(),
  });
  users$: Observable<UserDTO[]> = this._getsAllUsersDto.getAllUsers();
  events$: Observable<EventDTO[]> = this._getsAllEventsDto.getAllEvents();

  constructor(
    @Inject(GETS_ALL_USERS_DTO) private _getsAllUsersDto: GetsAllUsersDtoPort,
    @Inject(GETS_ALL_EVENTS_DTO)
    private _getsAllEventsDto: GetsAllEventsDtoPort,
    @Inject(ADDS_PARTICIPANT_DTO)
    private _addsParticipantDto: AddsParticipantDtoPort
  ) {}

  onConnectUsered(connectUser: FormGroup): void {
    this._addsParticipantDto.addParticipant({
      email: this.connectUser.get('email')?.value,
      eventId: this.connectUser.get('eventId')?.value,
    });
  }
}
