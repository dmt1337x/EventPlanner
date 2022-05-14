import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ParticipantContextDTO } from '../../../application/ports/secondary/participant-context.dto';
import { ParticipantContextDtoStoragePort } from '../../../application/ports/secondary/participant-context-dto.storage-port';

@Injectable()
export class InMemoryParticipantContextStorage
  extends ReplaySubject<ParticipantContextDTO>
  implements ParticipantContextDtoStoragePort {}
