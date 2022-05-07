import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_USER_DTO,
  AddsUserDtoPort,
} from '../../../application/ports/secondary/adds-user.dto-port';
import {
  ADDS_PARTICIPANT_DTO,
  AddsParticipantDtoPort,
} from '../../../application/ports/secondary/adds-participant.dto-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENTS_DTO,
  GetsAllEventsDtoPort,
} from '../../../application/ports/secondary/gets-all-events.dto-port';

@Component({
  selector: 'lib-add-users',
  templateUrl: './add-users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUsersComponent {
  readonly addUser: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    eventId: new FormControl(),
  });
  events$: Observable<EventDTO[]> = this._getsAllEventsDto.getAllEvents();

  constructor(
    @Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort,
    @Inject(ADDS_PARTICIPANT_DTO)
    private _addParticipantDto: AddsParticipantDtoPort,
    @Inject(GETS_ALL_EVENTS_DTO) private _getsAllEventsDto: GetsAllEventsDtoPort
  ) {}

  onUserAdded(addUser: FormGroup): void {
    this._addsUserDto.addUser({
      name: this.addUser.get('name')?.value,
      lastName: this.addUser.get('lastName')?.value,
      email: this.addUser.get('email')?.value,
    });
    if (this.addUser.get('eventId')?.value !== null) {
      this._addParticipantDto.addParticipant({
        eventId: this.addUser.get('eventId')?.value,
        email: this.addUser.get('email')?.value,
      });
    }
    addUser.reset();
  }
}
