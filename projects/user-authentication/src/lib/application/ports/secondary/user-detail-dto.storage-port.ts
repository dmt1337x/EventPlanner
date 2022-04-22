import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailDTO } from './user-detail.dto';

export const USER_DETAIL_DTO_STORAGE = new InjectionToken<UserDetailDtoStoragePort>('USER_DETAIL_DTO_STORAGE');

export interface UserDetailDtoStoragePort {
  next(item: Partial<UserDetailDTO | undefined>): void;
  asObservable(): Observable<UserDetailDTO>;
}
