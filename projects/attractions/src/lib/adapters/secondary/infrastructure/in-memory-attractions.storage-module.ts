import { NgModule } from '@angular/core';
import { InMemoryAttractionsStorage } from './in-memory-attractions.storage';
import { ATTRACTION_ID_DTO_STORAGE } from '../../../application/ports/secondary/attraction-id-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryAttractionsStorage,
    {
      provide: ATTRACTION_ID_DTO_STORAGE,
      useExisting: InMemoryAttractionsStorage,
    },
  ],
  exports: [],
})
export class InMemoryAttractionsStorageModule {}
