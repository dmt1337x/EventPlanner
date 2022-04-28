import { NgModule } from '@angular/core';
import { InMemoryUserContextStorage } from './in-memory-user-context.storage';
import { USER_CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/user-context-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryUserContextStorage, { provide: USER_CONTEXT_DTO_STORAGE, useExisting: InMemoryUserContextStorage }],
  	exports: [] })
export class InMemoryUserContextStorageModule {
}
