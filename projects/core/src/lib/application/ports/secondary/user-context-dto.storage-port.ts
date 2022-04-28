import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContextDTO } from './user-context.dto';

export const USER_CONTEXT_DTO_STORAGE =
  new InjectionToken<UserContextDtoStoragePort>('USER_CONTEXT_DTO_STORAGE');

export interface UserContextDtoStoragePort {
  next(item: Partial<UserContextDTO | undefined>): void;
  asObservable(): Observable<UserContextDTO>;
}
