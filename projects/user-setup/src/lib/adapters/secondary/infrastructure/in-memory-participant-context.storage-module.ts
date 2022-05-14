import { NgModule } from '@angular/core';
import { InMemoryParticipantContextStorage } from './in-memory-participant-context.storage';
import { PARTICIPANT_CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/participant-context-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryParticipantContextStorage, { provide: PARTICIPANT_CONTEXT_DTO_STORAGE, useExisting: InMemoryParticipantContextStorage }],
  	exports: [] })
export class InMemoryParticipantContextStorageModule {
}
