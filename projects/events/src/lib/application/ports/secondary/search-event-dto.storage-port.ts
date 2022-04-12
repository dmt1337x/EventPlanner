import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchEventDTO } from './search-event.dto';

export const SEARCH_EVENT_DTO_STORAGE =
  new InjectionToken<SearchEventDtoStoragePort>('SEARCH_EVENT_DTO_STORAGE');

export interface SearchEventDtoStoragePort {
  next(item: Partial<SearchEventDTO | undefined>): void;
  asObservable(): Observable<SearchEventDTO>;
}
