import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';
import { FormControl, FormGroup } from '@angular/forms';
import {
  AddsAttractionDtoPort,
  ADDS_ATTRACTION_DTO,
} from '../../../application/ports/secondary/adds-attraction.dto-port';

@Component({
  selector: 'lib-add-attractions',
  templateUrl: './add-attractions.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAttractionsComponent {
  eventIdContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();

  readonly addAttraction: FormGroup = new FormGroup({
    attractionName: new FormControl(),
    eventId: new FormControl(),
  });

  constructor(
    @Inject(ADDS_ATTRACTION_DTO)
    private _addsAttractionDto: AddsAttractionDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onAttractionAdded(attraction: FormGroup, eventId: EventContextDTO): void {
    this._addsAttractionDto.add({
      attractionName: this.addAttraction.get('attractionName')?.value,
      eventId: eventId.selectedEventId,
    });
    attraction.reset();
  }
}
