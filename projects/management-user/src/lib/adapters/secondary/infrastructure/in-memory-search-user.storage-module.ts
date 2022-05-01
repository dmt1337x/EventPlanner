import { NgModule } from '@angular/core';
import { InMemorySearchUserStorage } from './in-memory-search-user.storage';
import { SEARCH_USER_DTO_STORAGE } from '../../../application/ports/secondary/search-user-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemorySearchUserStorage, { provide: SEARCH_USER_DTO_STORAGE, useExisting: InMemorySearchUserStorage }],
  	exports: [] })
export class InMemorySearchUserStorageModule {
}
