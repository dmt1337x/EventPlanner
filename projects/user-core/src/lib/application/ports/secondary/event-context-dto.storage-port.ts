import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EventContextDTO } from './event-context.dto';

export const EVENT_CONTEXT_DTO_STORAGE = new InjectionToken<EventContextDtoStoragePort>('EVENT_CONTEXT_DTO_STORAGE');

export interface EventContextDtoStoragePort {
  next(item: Partial<EventContextDTO | undefined>): void;
  asObservable(): Observable<EventContextDTO>;
}
