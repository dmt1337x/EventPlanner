import { InjectionToken } from '@angular/core';
import { UserDTO } from './user.dto';

export const ADDS_USER_TO_AUTH_DTO = new InjectionToken<AddsUserToAuthDtoPort>(
  'ADDS_USER_TO_AUTH_DTO'
);

export interface AddsUserToAuthDtoPort {
  // addToAuth(user: Partial<UserDTO>): void;
}
