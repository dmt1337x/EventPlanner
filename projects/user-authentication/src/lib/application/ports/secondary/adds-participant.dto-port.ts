import { InjectionToken } from '@angular/core';
import { UserDetailDTO } from './user-detail.dto';

export const ADDS_PARTICIPANT_DTO = new InjectionToken<AddsParticipantDtoPort>(
  'ADDS_PARTICIPANT_DTO'
);

export interface AddsParticipantDtoPort {
  addParticipant(userDetail: Partial<UserDetailDTO>): void;
}
