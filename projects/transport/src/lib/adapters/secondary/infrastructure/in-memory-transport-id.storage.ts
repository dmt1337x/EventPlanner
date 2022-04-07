import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TransportIdDTO } from '../../../application/ports/secondary/transport-id.dto';
import { TransportIdDtoStoragePort } from '../../../application/ports/secondary/transport-id-dto.storage-port';

@Injectable()
export class InMemoryTransportIdStorage
  extends ReplaySubject<TransportIdDTO>
  implements TransportIdDtoStoragePort {}
