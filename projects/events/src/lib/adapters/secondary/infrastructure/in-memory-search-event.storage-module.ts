import { NgModule } from '@angular/core';
import { InMemorySearchEventStorage } from './in-memory-search-event.storage';
import { SEARCH_EVENT_DTO_STORAGE } from '../../../application/ports/secondary/search-event-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemorySearchEventStorage, { provide: SEARCH_EVENT_DTO_STORAGE, useExisting: InMemorySearchEventStorage }],
  	exports: [] })
export class InMemorySearchEventStorageModule {
}
