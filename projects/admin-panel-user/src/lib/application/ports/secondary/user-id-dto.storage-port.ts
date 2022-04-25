import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserIdDTO } from './user-id.dto';

export const USER_ID_DTO_STORAGE = new InjectionToken<UserIdDtoStoragePort>(
  'USER_ID_DTO_STORAGE'
);

export interface UserIdDtoStoragePort {
  next(item: Partial<UserIdDTO | undefined>): void;
  asObservable(): Observable<UserIdDTO>;
}
