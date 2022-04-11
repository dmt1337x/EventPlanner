import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  SETS_EVENT_DTO,
  SetsEventDtoPort,
} from '../../../application/ports/secondary/sets-event.dto-port';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { Observable } from 'rxjs';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';

@Component({
  selector: 'lib-edit-event',
  templateUrl: './edit-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEventComponent {
  eventId$: Observable<EventContextDTO> = this._eventId.asObservable();

  readonly editEvent: FormGroup = new FormGroup({
    eventImage: new FormControl(),
    eventDescription: new FormControl(),
    eventTitle: new FormControl(),
    eventDate: new FormControl(),
    eventId: new FormControl(),
  });

  constructor(
    @Inject(SETS_EVENT_DTO) private _setsEventDto: SetsEventDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventId: EventContextDtoStoragePort
  ) {}

  onEventEdited(editEvent: FormGroup): void {
    this._setsEventDto.set({
      eventImage: editEvent.get('eventImage')?.value,
      eventDescription: editEvent.get('eventDescription')?.value,
      eventTitle: editEvent.get('eventTitle')?.value,
      eventDate: editEvent.get('eventDate')?.value,
      id: editEvent.get('eventId')?.value,
    });
    this.editEvent.reset();
  }
}
