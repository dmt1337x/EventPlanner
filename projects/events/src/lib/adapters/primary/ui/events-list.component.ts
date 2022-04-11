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
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'lib-events-list',
  templateUrl: './events-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  readonly search: FormGroup = new FormGroup({ eventTitle: new FormControl() });

  events$: Observable<EventDTO[]> = this._getsAllEventDto.getAll();

  constructor(
    @Inject(GETS_ALL_EVENT_DTO)
    private _getsAllEventDto: GetsAllEventDtoPort,
    @Inject(REMOVES_EVENT_DTO) private _removesEventDto: RemovesEventDtoPort
  ) {}

  onEventDeleteed(events$: EventDTO): void {
    this._removesEventDto.remove(events$.id);
  }

  // // ****************** INNY KOMPONENT ******************
  onSearchSubmited(search: FormGroup) {
    this.events$ = this._getsAllEventDto.getAll(
      search.get('eventTitle')?.value
        ? { eventTitle: search.get('eventTitle')?.value }
        : {}
    );
  }
  // // ****************** INNY KOMPONENT ******************
}
