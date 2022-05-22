import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SeatInRoomDTO } from '../../../application/ports/secondary/seat-in-room.dto';
import { SeatInRoomDtoStoragePort } from '../../../application/ports/secondary/seat-in-room-dto.storage-port';

@Injectable()
export class InMemorySeatInRoomStorage
  extends ReplaySubject<SeatInRoomDTO>
  implements SeatInRoomDtoStoragePort {}
