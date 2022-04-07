import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportIdDTO } from './transport-id.dto';

export const TRANSPORT_ID_DTO_STORAGE = new InjectionToken<TransportIdDtoStoragePort>('TRANSPORT_ID_DTO_STORAGE');

export interface TransportIdDtoStoragePort {
  next(item: Partial<TransportIdDTO | undefined>): void;
  asObservable(): Observable<TransportIdDTO>;
}
