import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from '../../../application/ports/secondary/event-context-dto.storage-port';

@Injectable()
export class EventContextResolver implements Resolve<boolean> {
  constructor(
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._eventContextDtoStorage.next({ eventId: route.params['eventId'] });
    return of(true);
  }
}
