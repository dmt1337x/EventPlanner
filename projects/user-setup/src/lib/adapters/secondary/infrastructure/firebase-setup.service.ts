import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllDietDtoPort } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllTransportDtoPort } from '../../../application/ports/secondary/gets-all-transport.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import { GetsAllAttractionDtoPort } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import { GetsOneParticipantDtoPort } from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { SetsParticipantDtoPort } from '../../../application/ports/secondary/sets-participant.dto-port';

@Injectable()
export class FirebaseSetupService
  implements
    GetsAllDietDtoPort,
    GetsAllTransportDtoPort,
    GetsAllAttractionDtoPort,
    GetsOneParticipantDtoPort,
    SetsParticipantDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAllDiet(criterion: Partial<DietDTO>): Observable<DietDTO[]> {
    return this._client
      .collection<DietDTO>('diets')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: DietDTO[]) => filterByCriterion(data, criterion)));
  }

  getAllTransport(
    criterion: Partial<TransportDTO>
  ): Observable<TransportDTO[]> {
    return this._client
      .collection<TransportDTO>('transports')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: TransportDTO[]) => filterByCriterion(data, criterion)));
  }

  getAllAttraction(
    criterion: Partial<AttractionDTO>
  ): Observable<AttractionDTO[]> {
    return this._client
      .collection<AttractionDTO>('attractions')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: AttractionDTO[]) => filterByCriterion(data, criterion)));
  }
  getOneParticipant(
    criterion: Partial<ParticipantDTO>
  ): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) => filterByCriterion(data, criterion))
      );
  }

  set(participant: Partial<ParticipantDTO>): void {
    this._client.doc('participants/' + participant.id).update(participant);
  }
}
