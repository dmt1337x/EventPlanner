import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_ROOM_DTO,
  AddsRoomDtoPort,
} from '../../../application/ports/secondary/adds-room.dto-port';
import {
  FormGroup,
  FormControl,
  Validators,
  MaxValidator,
} from '@angular/forms';

@Component({
  selector: 'lib-create-room',
  templateUrl: './create-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRoomComponent {
  readonly addRoomsForm: FormGroup = new FormGroup({
    capacity: new FormControl('', [
      Validators.min(1),
      Validators.max(4),
      Validators.required,
    ]),
    number: new FormControl('', [Validators.min(1), Validators.required]),
  });

  constructor(@Inject(ADDS_ROOM_DTO) private _addsRoomDto: AddsRoomDtoPort) {}

  onRoomsAdded(addRoomsForm: FormGroup): void {
    this._addsRoomDto.add({
      number: addRoomsForm.get('number')?.value,
      capacity: addRoomsForm.get('capacity')?.value,
    });
    addRoomsForm.reset();
  }
}
