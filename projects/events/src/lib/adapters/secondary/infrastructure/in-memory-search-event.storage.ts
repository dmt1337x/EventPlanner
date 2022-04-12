import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SearchEventDTO } from '../../../application/ports/secondary/search-event.dto';
import { SearchEventDtoStoragePort } from '../../../application/ports/secondary/search-event-dto.storage-port';

@Injectable()
export class InMemorySearchEventStorage
  extends ReplaySubject<SearchEventDTO>
  implements SearchEventDtoStoragePort {}
