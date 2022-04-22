import { NgModule } from '@angular/core';
import { InMemoryUserLoginContextStorage } from './in-memory-user-login-context.storage';
import { USER_DETAIL_DTO_STORAGE } from '../../../application/ports/secondary/user-detail-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryUserLoginContextStorage, { provide: USER_DETAIL_DTO_STORAGE, useExisting: InMemoryUserLoginContextStorage }],
  	exports: [] })
export class InMemoryUserLoginContextStorageModule {
}
