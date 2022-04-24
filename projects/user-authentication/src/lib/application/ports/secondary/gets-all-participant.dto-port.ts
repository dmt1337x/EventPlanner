import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailDTO } from './user-detail.dto';

export const GETS_ALL_USER_DETAIL_DTO =
  new InjectionToken<GetsAllParticipantDtoPort>('GETS_ALL_PARTICIPANT_DTO');

export interface GetsAllParticipantDtoPort {
  getAllParticipant(
    criterion?: Partial<UserDetailDTO>
  ): Observable<UserDetailDTO[]>;
}
