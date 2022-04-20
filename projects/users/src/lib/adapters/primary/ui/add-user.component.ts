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
    userPassword: new FormControl('', Validators.required),
    userEventId: new FormControl(),
  });

  constructor(
    @Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  eventId$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();

  onUserAdded(addUser: FormGroup): void {
    this._addsUserDto.add({
      userName: this.addUser.get('userName')?.value,
      userLastName: this.addUser.get('userLastName')?.value,
      userEmail: this.addUser.get('userEmail')?.value,
      userEventId: this.addUser.get('userEventId')?.value,
    });
    this._addsUserDto.addToAuth({
      userEmail: this.addUser.get('userEmail')?.value,
      userPassword: this.addUser.get('userPassword')?.value,
    });
    addUser.reset();
  }
}
