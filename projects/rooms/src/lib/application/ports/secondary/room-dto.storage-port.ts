import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDTO } from './room.dto';

export const ROOM_DTO_STORAGE = new InjectionToken<RoomDtoStoragePort>('ROOM_DTO_STORAGE');

export interface RoomDtoStoragePort {
  next(item: Partial<RoomDTO | undefined>): void;
  asObservable(): Observable<RoomDTO>;
}
