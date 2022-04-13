import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SearchUserDTO } from '../../../application/ports/secondary/search-user.dto';
import { SearchUserDtoStoragePort } from '../../../application/ports/secondary/search-user-dto.storage-port';

@Injectable()
export class InMemorySearchStorage
  extends ReplaySubject<SearchUserDTO>
  implements SearchUserDtoStoragePort {}
