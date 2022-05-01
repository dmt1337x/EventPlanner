import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDTO } from './auth.dto';

export const ADDS_CREDENTIALS_DTO = new InjectionToken<AddsCredentialsDtoPort>(
  'ADDS_CREDENTIALS_DTO'
);

export interface AddsCredentialsDtoPort {
  addCredentials(auth: Partial<AuthDTO>): Observable<void>;
}
