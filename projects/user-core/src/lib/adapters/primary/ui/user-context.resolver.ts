import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import {
  USER_CONTEXT_DTO_STORAGE,
  UserContextDtoStoragePort,
} from '../../../application/ports/secondary/user-context-dto.storage-port';

@Injectable()
export class UserContextResolver implements Resolve<boolean> {
  constructor(
    @Inject(USER_CONTEXT_DTO_STORAGE)
    private _userContextDtoStorage: UserContextDtoStoragePort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._userContextDtoStorage.next({ eventId: route.params['eventId'] });
    return of(true);
  }
}
