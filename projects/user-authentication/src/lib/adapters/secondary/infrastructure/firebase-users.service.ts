import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllUserDetailDtoPort } from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
import { UserDetailDTO } from '../../../application/ports/secondary/user-detail.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseUsersService implements GetsAllUserDetailDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<UserDetailDTO>): Observable<UserDetailDTO[]> {
    return this._client
      .collection<UserDetailDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDetailDTO[]) => filterByCriterion(data, criterion)));
  }
}
