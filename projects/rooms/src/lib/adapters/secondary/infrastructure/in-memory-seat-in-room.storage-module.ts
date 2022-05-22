import { NgModule } from '@angular/core';
import { InMemorySeatInRoomStorage } from './in-memory-seat-in-room.storage';
import { SEAT_IN_ROOM_DTO_STORAGE } from '../../../application/ports/secondary/seat-in-room-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemorySeatInRoomStorage, { provide: SEAT_IN_ROOM_DTO_STORAGE, useExisting: InMemorySeatInRoomStorage }],
  	exports: [] })
export class InMemorySeatInRoomStorageModule {
}
