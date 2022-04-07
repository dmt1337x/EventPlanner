import { NgModule } from '@angular/core';
import { InMemoryEventIdStorage } from './in-memory-event-id.storage';
import { EVENT_CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/event-context-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryEventIdStorage,
    { provide: EVENT_CONTEXT_DTO_STORAGE, useExisting: InMemoryEventIdStorage },
  ],
  exports: [],
})
export class InMemoryEventIdStorageModule {}
