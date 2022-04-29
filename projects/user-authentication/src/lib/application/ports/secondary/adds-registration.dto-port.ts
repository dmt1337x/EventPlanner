import { InjectionToken } from '@angular/core';
import { RegistrationDTO } from './registration.dto';

export const ADDS_REGISTRATION_DTO = new InjectionToken<AddsRegistrationDtoPort>('ADDS_REGISTRATION_DTO');

export interface AddsRegistrationDtoPort {
  add(registration: Partial<RegistrationDTO>): void;
}
