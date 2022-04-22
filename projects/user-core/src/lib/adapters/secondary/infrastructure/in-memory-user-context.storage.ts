import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserContextDTO } from '../../../application/ports/secondary/user-context.dto';
import { UserContextDtoStoragePort } from '../../../application/ports/secondary/user-context-dto.storage-port';

@Injectable()
export class InMemoryUserContextStorage
  extends ReplaySubject<UserContextDTO>
  implements UserContextDtoStoragePort {}
