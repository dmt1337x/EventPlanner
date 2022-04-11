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
import { switchMap } from 'rxjs/operators';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import {
  GETS_ALL_DIET_DTO,
  GetsAllDietDtoPort,
} from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import {
  GETS_ALL_TRANSPORT_DTO,
  GetsAllTransportDtoPort,
} from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import {
  GETS_ALL_ATTRACTION_DTO,
  GetsAllAttractionDtoPort,
} from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';

@Component({
  selector: 'lib-event-detail',
  templateUrl: './event-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailComponent {
  eventId$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();
  events$: Observable<EventDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDto.getAllEvent({ id: data.selectedEventId })
      )
    );
  diets$: Observable<DietDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllDietDto.getAllDiet({ eventId: data.selectedEventId })
      )
    );
  transport$: Observable<TransportDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllTransportDto.getAllTransport({
          eventId: data.selectedEventId,
        })
      )
    );
  attractions$: Observable<AttractionDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllAttractionDto.getAllAttraction({
          eventId: data.selectedEventId,
        })
      )
    );

  constructor(
    @Inject(GETS_ALL_EVENT_DTO) private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort,
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}
}
