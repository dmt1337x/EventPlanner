import { InjectionToken } from '@angular/core';
import { UserDTO } from './user.dto';

export const ADDS_USER_DTO = new InjectionToken<AddsUserDtoPort>(
  'ADDS_USER_DTO'
);

export interface AddsUserDtoPort {
  addUser(user: Partial<UserDTO>): void;
}
