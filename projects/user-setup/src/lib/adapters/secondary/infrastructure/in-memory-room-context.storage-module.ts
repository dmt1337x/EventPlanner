import { NgModule } from '@angular/core';
import { InMemoryRoomContextStorage } from './in-memory-room-context.storage';
import { ROOM_CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/room-context-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryRoomContextStorage, { provide: ROOM_CONTEXT_DTO_STORAGE, useExisting: InMemoryRoomContextStorage }],
  	exports: [] })
export class InMemoryRoomContextStorageModule {
}
