import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantContextDTO } from './participant-context.dto';

export const PARTICIPANT_CONTEXT_DTO_STORAGE = new InjectionToken<ParticipantContextDtoStoragePort>('PARTICIPANT_CONTEXT_DTO_STORAGE');

export interface ParticipantContextDtoStoragePort {
  next(item: Partial<ParticipantContextDTO | undefined>): void;
  asObservable(): Observable<ParticipantContextDTO>;
}
