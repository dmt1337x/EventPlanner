import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserDTO } from './current-user.dto';
import { UserDetailDTO } from './user-detail.dto';

export const GET_CURRENT_USER_DTO = new InjectionToken<GetCurrentUserDtoPort>(
  'GET_CURRENT_USER_DTO'
);

export interface GetCurrentUserDtoPort {
  getCurrentUser(): Observable<CurrentUserDTO | null>;
}
