import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDTO } from './event.dto';

export const GETS_ALL_EVENTS_DTO = new InjectionToken<GetsAllEventsDtoPort>(
  'GETS_ALL_EVENTS_DTO'
);

export interface GetsAllEventsDtoPort {
  getAllEvents(criterion?: Partial<EventDTO>): Observable<EventDTO[]>;
}
