import { InjectionToken } from '@angular/core';
import { UserDetailDTO } from './user-detail.dto';

export const LOGIN_DTO = new InjectionToken<LoginDtoPort>('LOGIN_DTO');

export interface LoginDtoPort {
  login(userDetail: Partial<UserDetailDTO>): void;
}
