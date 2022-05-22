import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDTO } from '../room.dto';

export const SETS_ROOM_DTO = new InjectionToken<SetsRoomDtoPort>('SETS_ROOM_DTO');

export interface SetsRoomDtoPort {
  setRoom(room: Partial<RoomDTO>): Observable<void>;
}
