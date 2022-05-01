import { NgModule } from '@angular/core';
import { InMemoryEventContextStorage } from './in-memory-event-context.storage';
import { EVENT_CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/event-context-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryEventContextStorage, { provide: EVENT_CONTEXT_DTO_STORAGE, useExisting: InMemoryEventContextStorage }],
  	exports: [] })
export class InMemoryEventContextStorageModule {
}
