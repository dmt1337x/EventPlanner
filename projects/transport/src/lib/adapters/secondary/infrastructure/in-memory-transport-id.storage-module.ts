import { NgModule } from '@angular/core';
import { InMemoryTransportIdStorage } from './in-memory-transport-id.storage';
import { TRANSPORT_ID_DTO_STORAGE } from '../../../application/ports/secondary/transport-id-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [InMemoryTransportIdStorage, { provide: TRANSPORT_ID_DTO_STORAGE, useExisting: InMemoryTransportIdStorage }],
  exports: [],
})
export class InMemoryTransportIdStorageModule {}
