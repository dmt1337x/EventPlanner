import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_EVENT_DTO,
  AddsEventDtoPort,
} from '../../../application/ports/secondary/adds-event.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-create-event',
  templateUrl: './create-event.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent {
  readonly addEvent: FormGroup = new FormGroup({
    eventImage: new FormControl('', Validators.required),
    eventDescription: new FormControl('', Validators.required),
    eventTitle: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(ADDS_EVENT_DTO) private _addsAddEventDto: AddsEventDtoPort,
    private router: Router
  ) {}

  onAddEventSubmited(addEvent: FormGroup): void {
    this._addsAddEventDto.add({
      eventImage: addEvent.get('eventImage')?.value,
      eventDescription: addEvent.get('eventDescription')?.value,
      eventTitle: addEvent.get('eventTitle')?.value,
      eventDate: addEvent.get('eventDate')?.value,
    });
    this.addEvent.reset();
    this.router.navigate(['/']);
  }
}
