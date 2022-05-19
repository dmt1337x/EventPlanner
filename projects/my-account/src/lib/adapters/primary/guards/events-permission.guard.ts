import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {
  CurrentUserDtoStoragePort,
  CURRENT_USER_DTO_STORAGE,
} from 'projects/user-core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { map, Observable, switchMap } from 'rxjs';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';

@Injectable({ providedIn: 'root' })
export class EventsPermissionGuard implements CanActivate {
  constructor(
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipant: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUser: CurrentUserDtoStoragePort,
    private _router: Router
  ) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._currentUser.asObservable().pipe(
      switchMap((currentUser) =>
        this._getsOneParticipant.getOneParticipant({
          eventId: activatedRoute.params['eventId'],
          email: currentUser.email,
        })
      ),
      map((data) => {
        if (data.length > 0) {
          return true;
        }
        this._router.navigate(['/not-permission']);
        return false;
      })
    );
  }
}
