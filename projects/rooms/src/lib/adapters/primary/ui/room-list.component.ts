import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import {
  REMOVES_ROOM_DTO,
  RemovesRoomDtoPort,
} from '../../../application/ports/secondary/removes-room.dto-port';
import {
  RoomDtoStoragePort,
  ROOM_DTO_STORAGE,
} from '../../../application/ports/secondary/room-dto.storage-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import {
  SETS_ROOM_DTO,
  SetsRoomDtoPort,
} from '../../../application/ports/secondary/sets-room.dto-port';

@Component({
  selector: 'lib-room-list',
  templateUrl: './room-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent {
  rooms$: Observable<RoomDTO[]> = this._getsAllRoomDto.getAll();
  roomsContext$: Observable<RoomDTO> = this._roomContext.asObservable();
  readonly roomEditForm: FormGroup = new FormGroup({
    number: new FormControl(),
    capacity: new FormControl(),
    id: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(REMOVES_ROOM_DTO) private _removesRoomDto: RemovesRoomDtoPort,
    @Inject(ROOM_DTO_STORAGE) private _roomContext: RoomDtoStoragePort,
    private modalService: BsModalService,
    @Inject(SETS_ROOM_DTO) private _setsRoomDto: SetsRoomDtoPort
  ) {}

  onRoomRemoveed(room: RoomDTO): void {
    this._removesRoomDto.remove(room.id);
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>, room: RoomDTO) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this._roomContext.next({
      id: room.id,
    });
  }

  onRoomEdited(roomEditForm: FormGroup): void {
    this._setsRoomDto.set({
      number: roomEditForm.get('number')?.value,
      capacity: roomEditForm.get('capacity')?.value,
      id: roomEditForm.get('id')?.value,
    });
    this.modalRef?.hide();
  }
}
