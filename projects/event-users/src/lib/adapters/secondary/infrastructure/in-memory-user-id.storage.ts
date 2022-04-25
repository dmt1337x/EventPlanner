import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserIdDTO } from '../../../application/ports/secondary/user-id.dto';
import { UserIdDtoStoragePort } from '../../../application/ports/secondary/user-id-dto.storage-port';

@Injectable()
export class InMemoryUserIdStorage
  extends ReplaySubject<UserIdDTO>
  implements UserIdDtoStoragePort {}
