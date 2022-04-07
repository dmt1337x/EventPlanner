import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DietIdDTO } from '../../../application/ports/secondary/diet-id.dto';
import { DietIdDtoStoragePort } from '../../../application/ports/secondary/diet-id-dto.storage-port';

@Injectable()
export class InMemoryDietIdStorage
  extends ReplaySubject<DietIdDTO>
  implements DietIdDtoStoragePort {}
