import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchUserDTO } from './search-user.dto';

export const SEARCH_USER_DTO_STORAGE = new InjectionToken<SearchUserDtoStoragePort>('SEARCH_USER_DTO_STORAGE');

export interface SearchUserDtoStoragePort {
  next(item: Partial<SearchUserDTO | undefined>): void;
  asObservable(): Observable<SearchUserDTO>;
}
