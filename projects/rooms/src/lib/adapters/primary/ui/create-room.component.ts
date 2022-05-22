import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_ROOM_DTO,
  AddsRoomDtoPort,
} from '../../../application/ports/secondary/adds-room.dto-port';
import {
  FormGroup,
  FormControl,
  Validators,
  MaxValidator,
} from '@angular/forms';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-create-room',
  templateUrl: './create-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRoomComponent {
  eventIdContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();

  readonly addRoomsForm: FormGroup = new FormGroup({
    capacity: new FormControl('', [
      Validators.min(1),
      Validators.max(4),
      Validators.required,
    ]),
    number: new FormControl('', [Validators.min(1), Validators.required]),
  });

  constructor(
    @Inject(ADDS_ROOM_DTO) private _addsRoomDto: AddsRoomDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onRoomsAdded(addRoomsForm: FormGroup, eventId: EventContextDTO): void {
    this._addsRoomDto.add({
      number: addRoomsForm.get('number')?.value,
      capacity: addRoomsForm.get('capacity')?.value,
      available: addRoomsForm.get('capacity')?.value,
      eventId: eventId.selectedEventId,
    });
    addRoomsForm.reset();
  }
}
