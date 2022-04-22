import { InjectionToken } from '@angular/core';
import { UserDetailDTO } from './user-detail.dto';

export const ADDS_TO_AUTH_DTO = new InjectionToken<AddsToAuthDtoPort>(
  'ADDS_TO_AUTH_DTO'
);

export interface AddsToAuthDtoPort {
  addToAuth(userDetail: Partial<UserDetailDTO>): void;
}
