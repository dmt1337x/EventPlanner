import { InjectionToken } from '@angular/core';
import { ParticipantDTO } from './participant.dto';

export const ADDS_PARTICIPANT_DTO = new InjectionToken<AddsParticipantDtoPort>(
  'ADDS_PARTICIPANT_DTO'
);

export interface AddsParticipantDtoPort {
  addParticipant(participant: Partial<ParticipantDTO>): void;
}
