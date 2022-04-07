import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DietIdDTO } from './diet-id.dto';

export const DIET_ID_DTO_STORAGE = new InjectionToken<DietIdDtoStoragePort>(
  'DIET_ID_DTO_STORAGE'
);

export interface DietIdDtoStoragePort {
  next(item: Partial<DietIdDTO | undefined>): void;
  asObservable(): Observable<DietIdDTO>;
}
