import { NgModule } from '@angular/core';
import { InMemoryDietIdStorage } from './in-memory-diet-id.storage';
import { DIET_ID_DTO_STORAGE } from '../../../application/ports/secondary/diet-id-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryDietIdStorage,
    { provide: DIET_ID_DTO_STORAGE, useExisting: InMemoryDietIdStorage },
  ],
  exports: [],
})
export class InMemoryDietIdStorageModule {}
