import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SeatInRoomDTO } from './seat-in-room.dto';

export const SEAT_IN_ROOM_DTO_STORAGE = new InjectionToken<SeatInRoomDtoStoragePort>('SEAT_IN_ROOM_DTO_STORAGE');

export interface SeatInRoomDtoStoragePort {
  next(item: Partial<SeatInRoomDTO | undefined>): void;
  asObservable(): Observable<SeatInRoomDTO>;
}
