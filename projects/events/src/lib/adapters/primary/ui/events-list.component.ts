import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';
import { Router } from '@angular/router';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';

@Component({
  selector: 'lib-events-list',
  templateUrl: './events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAll();

  constructor(
    @Inject(GETS_ALL_EVENT_DTO)
    private _getsAllEventDto: GetsAllEventDtoPort,
    private router: Router,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  // onEventIdToStorageAdded(event: EventDTO): void {
  //   this._eventContextDtoStorage.next({
  //     selectedEventId: event.id,
  //   });
  //   this.router.navigate(['/events/' + event.id]);
  // }
}
