import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchParticipantDTO } from './search-participant.dto';

export const SEARCH_PARTICIPANT_DTO_STORAGE = new InjectionToken<SearchParticipantDtoStoragePort>('SEARCH_PARTICIPANT_DTO_STORAGE');

export interface SearchParticipantDtoStoragePort {
  next(item: Partial<SearchParticipantDTO | undefined>): void;
  asObservable(): Observable<SearchParticipantDTO>;
}
