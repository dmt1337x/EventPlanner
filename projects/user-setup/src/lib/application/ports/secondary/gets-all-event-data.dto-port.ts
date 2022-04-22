import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDataDTO } from './event-data.dto';

export const GETS_ALL_EVENT_DATA_DTO =
  new InjectionToken<GetsAllEventDataDtoPort>('GETS_ALL_EVENT_DATA_DTO');

export interface GetsAllEventDataDtoPort {
  getAllDiet(criterion?: Partial<EventDataDTO>): Observable<EventDataDTO[]>;

  getAllTransport(
    criterion?: Partial<EventDataDTO>
  ): Observable<EventDataDTO[]>;

  getAllAttraction(
    criterion?: Partial<EventDataDTO>
  ): Observable<EventDataDTO[]>;
}
