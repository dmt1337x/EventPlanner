import { FormGroup, FormControl, Validators } from '@angular/forms';
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
import { Router } from '@angular/router';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'lib-edit-event',
  templateUrl: './edit-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEventComponent {
  eventId$: Observable<EventContextDTO> = this._eventId.asObservable();

  readonly editEvent: FormGroup = new FormGroup({
    eventImage: new FormControl('', Validators.required),
    eventDescription: new FormControl('', Validators.required),
    eventTitle: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
    eventId: new FormControl(),
  });
  event$: Observable<EventDTO[]> = this._eventId
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDto.getAll({ id: data.selectedEventId })
      )
    );

  constructor(
    @Inject(SETS_EVENT_DTO) private _setsEventDto: SetsEventDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventId: EventContextDtoStoragePort,
    private router: Router,
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort
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
    this.router.navigate(['/']);
  }
}
