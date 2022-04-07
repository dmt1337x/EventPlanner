import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import {
  AddsDietDtoPort,
  ADDS_DIET_DTO,
} from '../../../application/ports/secondary/adds-diet.dto-port';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';

@Component({
  selector: 'lib-add-diet',
  templateUrl: './add-diet.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDietComponent {
  eventIdContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();

  readonly addDiet: FormGroup = new FormGroup({
    dietName: new FormControl(),
    eventId: new FormControl(),
  });

  constructor(
    @Inject(ADDS_DIET_DTO) private _addsDietDto: AddsDietDtoPort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onDietAdded(diet: FormGroup): void {
    this._addsDietDto.add({
      dietName: this.addDiet.get('dietName')?.value,
      eventId: this.addDiet.get('eventId')?.value,
    });
    diet.reset();
  }
}
