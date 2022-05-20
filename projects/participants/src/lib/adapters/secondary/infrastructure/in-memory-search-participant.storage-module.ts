import { NgModule } from '@angular/core';
import { InMemorySearchParticipantStorage } from './in-memory-search-participant.storage';
import { SEARCH_PARTICIPANT_DTO_STORAGE } from '../../../application/ports/secondary/search-participant-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemorySearchParticipantStorage, { provide: SEARCH_PARTICIPANT_DTO_STORAGE, useExisting: InMemorySearchParticipantStorage }],
  	exports: [] })
export class InMemorySearchParticipantStorageModule {
}
