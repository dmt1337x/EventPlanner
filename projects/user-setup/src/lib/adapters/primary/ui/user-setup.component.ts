import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/user-core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/user-core/src/lib/application/ports/secondary/event-context.dto';
import { EventDataDTO } from '../../../application/ports/secondary/event-data.dto';
import {
  GETS_ALL_EVENT_DATA_DTO,
  GetsAllEventDataDtoPort,
} from '../../../application/ports/secondary/gets-all-event-data.dto-port';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-user-setup',
  templateUrl: './user-setup.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSetupComponent {
  diets$: Observable<EventDataDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDataDto.getAllDiet({ eventId: data.eventId })
      )
    );
  transports$: Observable<EventDataDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDataDto.getAllTransport({
          eventId: data.eventId,
        })
      )
    );
  attractions$: Observable<EventDataDTO[]> = this._eventContextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllEventDataDto.getAllAttraction({
          eventId: data.eventId,
        })
      )
    );
  readonly setupParticipant: FormGroup = new FormGroup({
    dietId: new FormControl(),
    transportId: new FormControl(),
    attractionId: new FormControl(),
    id: new FormControl(),
  });

  constructor(
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStoragePort: EventContextDtoStoragePort,
    @Inject(GETS_ALL_EVENT_DATA_DTO)
    private _getsAllEventDataDto: GetsAllEventDataDtoPort
  ) {}
}
