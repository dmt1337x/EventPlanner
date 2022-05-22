import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomContextDTO } from './room-context.dto';

export const ROOM_CONTEXT_DTO_STORAGE = new InjectionToken<RoomContextDtoStoragePort>('ROOM_CONTEXT_DTO_STORAGE');

export interface RoomContextDtoStoragePort {
  next(item: Partial<RoomContextDTO | undefined>): void;
  asObservable(): Observable<RoomContextDTO>;
}
