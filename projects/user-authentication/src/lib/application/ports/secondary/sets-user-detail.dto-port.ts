import { InjectionToken } from '@angular/core';
import { UserDetailDTO } from './user-detail.dto';

export const SETS_USER_DETAIL_DTO = new InjectionToken<SetsUserDetailDtoPort>('SETS_USER_DETAIL_DTO');

export interface SetsUserDetailDtoPort {
  set(userDetail: Partial<UserDetailDTO>): void;
}
