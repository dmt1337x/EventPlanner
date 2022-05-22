import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RoomContextDTO } from '../../../application/ports/secondary/room-context.dto';
import { RoomContextDtoStoragePort } from '../../../application/ports/secondary/room-context-dto.storage-port';

@Injectable()
export class InMemoryRoomContextStorage extends ReplaySubject<RoomContextDTO> implements RoomContextDtoStoragePort {
}