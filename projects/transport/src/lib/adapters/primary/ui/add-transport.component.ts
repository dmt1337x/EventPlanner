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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ADDS_TRANSPORT_DTO } from '../../../application/ports/secondary/adds-transport.dto-port';
import { AddsTransportDtoPort } from '../../../application/ports/secondary/adds-transport.dto-port';

@Component({
  selector: 'lib-add-transport',
  templateUrl: './add-transport.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTransportComponent {
  eventIdContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();

  readonly addTransport: FormGroup = new FormGroup({
    transportName: new FormControl('', Validators.required),
    eventId: new FormControl(),
  });

  constructor(
    @Inject(ADDS_TRANSPORT_DTO) private _addsTransportDto: AddsTransportDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onTransportAdded(transport: FormGroup, eventId: EventContextDTO): void {
    this._addsTransportDto.add({
      transportName: transport.get('transportName')?.value,
      eventId: eventId.selectedEventId,
    });
    transport.reset();
  }
}
