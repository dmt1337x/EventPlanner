import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionIdDTO } from './attraction-id.dto';

export const ATTRACTION_ID_DTO_STORAGE = new InjectionToken<AttractionIdDtoStoragePort>('ATTRACTION_ID_DTO_STORAGE');

export interface AttractionIdDtoStoragePort {
  next(item: Partial<AttractionIdDTO | undefined>): void;
  asObservable(): Observable<AttractionIdDTO>;
}
