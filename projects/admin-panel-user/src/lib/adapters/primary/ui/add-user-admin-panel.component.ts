import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  AddsUserDtoPort,
  ADDS_USER_DTO,
} from '../../../application/ports/secondary/adds-user.dto-port';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';

@Component({
  selector: 'lib-add-user-admin-panel',
  templateUrl: './add-user-admin-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserAdminPanelComponent {
  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAllEvents();

  addUser: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    eventId: new FormControl(),
    // eventId: new FormArray([new FormControl()]),
  });

  constructor(
    @Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
  ) {}

  onUserAdded(addUser: FormGroup): void {
    // console.log(addUser.getRawValue());
    this._addsUserDto.add({
      userName: this.addUser.get('userName')?.value,
      userLastName: this.addUser.get('userLastName')?.value,
      userEmail: this.addUser.get('userEmail')?.value,
      eventId: this.addUser.get('eventId')?.value,
    });
    addUser.reset();
  }
}
