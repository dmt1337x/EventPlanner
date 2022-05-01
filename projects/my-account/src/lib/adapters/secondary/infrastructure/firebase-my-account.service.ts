import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { filterByCriterion } from '@lowgular/shared';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';

@Injectable()
export class FirebaseMyAccountService implements GetsAllParticipantDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAllParticipants(
    criterion: Partial<ParticipantDTO>
  ): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }
}
