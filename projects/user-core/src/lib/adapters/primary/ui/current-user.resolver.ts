import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from '../../../application/ports/secondary/current-user-dto.storage-port';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class CurrentUserResolver implements Resolve<boolean> {
  constructor(
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStorage: CurrentUserDtoStoragePort,
    private _auth: AngularFireAuth
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._auth.user.pipe(take(1)).subscribe((currentUser) =>
      this._currentUserDtoStorage.next({
        email: currentUser?.email as string,
      })
    );
    return of(true);
  }
}
