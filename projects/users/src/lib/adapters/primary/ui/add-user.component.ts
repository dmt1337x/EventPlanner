import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from '../../../../../../core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';
import { Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  readonly addUser: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    eventId: new FormControl('', Validators.required),
    confirmed: new FormControl(),
  });
  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAllEvent();

  constructor(
    @Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}

  onUserAdded(addUser: FormGroup): void {
    this._addsUserDto.add({
      userName: this.addUser.get('userName')?.value,
      userLastName: this.addUser.get('userLastName')?.value,
      userEmail: this.addUser.get('userEmail')?.value,
      eventId: this.addUser.get('eventId')?.value,
      confirmed: false,
    });
    addUser.reset();
  }
}
