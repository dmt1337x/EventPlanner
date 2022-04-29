import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { AddsParticipantDtoPort } from '../../../application/ports/secondary/adds-participant.dto-port';
import { RemovesParticipantDtoPort } from '../../../application/ports/secondary/removes-participant.dto-port';

@Injectable()
export class FirebaseParticipantsService
  implements
    GetsAllParticipantDtoPort,
    GetsAllUserDtoPort,
    AddsParticipantDtoPort,
    RemovesParticipantDtoPort
{
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

  getAllUsers(criterion: Partial<UserDTO>): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: UserDTO[]) => filterByCriterion(data, criterion)));
  }

  addParticipant(participant: Partial<ParticipantDTO>): void {
    this._client.collection('participants').add(participant);
  }

  remove(id: string): void {
    this._client.doc('participants/' + id).delete();
  }
}
