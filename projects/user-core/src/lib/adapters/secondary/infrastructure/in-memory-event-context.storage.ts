import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { EventContextDTO } from '../../../application/ports/secondary/event-context.dto';
import { EventContextDtoStoragePort } from '../../../application/ports/secondary/event-context-dto.storage-port';

@Injectable()
export class InMemoryEventContextStorage
  extends ReplaySubject<EventContextDTO>
  implements EventContextDtoStoragePort {}
