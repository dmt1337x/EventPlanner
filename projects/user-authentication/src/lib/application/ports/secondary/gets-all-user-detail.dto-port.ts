import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailDTO } from './user-detail.dto';

export const GETS_ALL_USER_DETAIL_DTO = new InjectionToken<GetsAllUserDetailDtoPort>('GETS_ALL_USER_DETAIL_DTO');

export interface GetsAllUserDetailDtoPort {
  getAll(criterion?: Partial<UserDetailDTO>): Observable<UserDetailDTO[]>;
}
