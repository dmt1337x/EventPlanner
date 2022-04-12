import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ALL_EVENT_DTO,
  GetsAllEventDtoPort,
} from '../../../application/ports/secondary/gets-all-event.dto-port';
import {
  REMOVES_EVENT_DTO,
  RemovesEventDtoPort,
} from '../../../application/ports/secondary/removes-event.dto-port';
import {
  SearchEventDtoStoragePort,
  SEARCH_EVENT_DTO_STORAGE,
} from '../../../application/ports/secondary/search-event-dto.storage-port';
import { SearchEventDTO } from '../../../application/ports/secondary/search-event.dto';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'lib-events-list',
  templateUrl: './events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  // events$: Observable<EventDTO[]> = this._getsAllEventDto.getAll();

  events$: Observable<EventDTO[]> = this._search.asObservable().pipe(
    tap(console.log),
    switchMap((data) =>
      this._getsAllEventDto.getAll(
        data && data.eventTitle && data.eventTitle.length
          ? { eventTitle: data.eventTitle }
          : undefined
      )
    )
  );

  constructor(
    @Inject(GETS_ALL_EVENT_DTO)
    private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(REMOVES_EVENT_DTO) private _removesEventDto: RemovesEventDtoPort,
    @Inject(SEARCH_EVENT_DTO_STORAGE)
    private _search: SearchEventDtoStoragePort
  ) {}

  onEventDeleteed(events$: EventDTO): void {
    this._removesEventDto.remove(events$.id);
  }
}
