import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import { filterByCriterion } from '@lowgular/shared';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { EventDTO } from '../../../application/ports/secondary/event.dto';

@Injectable()
export class FirebaseMyAccountService {
  constructor() {}
}
