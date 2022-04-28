import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseParticipantsService implements GetsAllParticipantDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<ParticipantDTO>): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }
}
