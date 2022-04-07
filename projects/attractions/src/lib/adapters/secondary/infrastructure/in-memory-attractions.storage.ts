import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AttractionIdDTO } from '../../../application/ports/secondary/attraction-id.dto';
import { AttractionIdDtoStoragePort } from '../../../application/ports/secondary/attraction-id-dto.storage-port';

@Injectable()
export class InMemoryAttractionsStorage
  extends ReplaySubject<AttractionIdDTO>
  implements AttractionIdDtoStoragePort {}
