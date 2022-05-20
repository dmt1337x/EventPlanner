import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { SearchParticipantDTO } from '../../../application/ports/secondary/search-participant.dto';
import { SearchParticipantDtoStoragePort } from '../../../application/ports/secondary/search-participant-dto.storage-port';

@Injectable()
export class InMemorySearchParticipantStorage
  extends BehaviorSubject<SearchParticipantDTO>
  implements SearchParticipantDtoStoragePort {}
