import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import { RoomDtoStoragePort } from '../../../application/ports/secondary/room-dto.storage-port';

@Injectable()
export class InMemoryRoomContextStorage
  extends ReplaySubject<RoomDTO>
  implements RoomDtoStoragePort {}
