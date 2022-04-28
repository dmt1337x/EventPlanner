import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './user.dto';

export const GETS_ALL_USERS_DTO = new InjectionToken<GetsAllUsersDtoPort>(
  'GETS_ALL_USERS_DTO'
);

export interface GetsAllUsersDtoPort {
  getAllUsers(criterion?: Partial<UserDTO>): Observable<UserDTO[]>;
}
