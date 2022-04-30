import { InjectionToken } from '@angular/core';
import { AuthDTO } from './auth.dto';

export const ADDS_REGISTRATION_DTO =
  new InjectionToken<AddsRegistrationDtoPort>('ADDS_REGISTRATION_DTO');

export interface AddsRegistrationDtoPort {
  addUserToAuth(registration: Partial<AuthDTO>): void;
}
