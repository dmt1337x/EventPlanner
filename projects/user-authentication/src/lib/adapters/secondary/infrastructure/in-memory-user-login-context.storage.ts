import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserDetailDTO } from '../../../application/ports/secondary/user-detail.dto';
import { UserDetailDtoStoragePort } from '../../../application/ports/secondary/user-detail-dto.storage-port';

@Injectable()
export class InMemoryUserLoginContextStorage
  extends ReplaySubject<UserDetailDTO>
  implements UserDetailDtoStoragePort {}
