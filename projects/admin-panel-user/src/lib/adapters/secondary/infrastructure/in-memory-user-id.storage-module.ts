import { NgModule } from '@angular/core';
import { InMemoryUserIdStorage } from './in-memory-user-id.storage';
import { USER_ID_DTO_STORAGE } from '../../../application/ports/secondary/user-id-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryUserIdStorage,
    { provide: USER_ID_DTO_STORAGE, useExisting: InMemoryUserIdStorage },
  ],
  exports: [],
})
export class InMemoryUserIdStorageModule {}
