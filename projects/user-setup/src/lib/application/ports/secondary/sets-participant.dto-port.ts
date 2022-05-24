import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantDTO } from './participant.dto';

export const SETS_PARTICIPANT_DTO = new InjectionToken<SetsParticipantDtoPort>(
  'SETS_PARTICIPANT_DTO'
);

export interface SetsParticipantDtoPort {
  setParticipant(participant: Partial<ParticipantDTO>): Observable<void>;
}
