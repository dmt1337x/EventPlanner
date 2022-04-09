import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import {
  GETS_ALL_DIET_DTO,
  GetsAllDietDtoPort,
} from '../../../application/ports/secondary/gets-all-diet.dto-port';
import {
  REMOVES_DIET_DTO,
  RemovesDietDtoPort,
} from '../../../application/ports/secondary/removes-diet.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  SETS_DIET_DTO,
  SetsDietDtoPort,
} from '../../../application/ports/secondary/sets-diet.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  DIET_ID_DTO_STORAGE,
  DietIdDtoStoragePort,
} from '../../../application/ports/secondary/diet-id-dto.storage-port';
import { DietIdDTO } from '../../../application/ports/secondary/diet-id.dto';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'lib-list-diet',
  templateUrl: './list-diet.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDietComponent {
  dietIdContext$: Observable<DietIdDTO> = this._dietIdDtoStorage.asObservable();

  eventContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();
  readonly editDietName: FormGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
  });
  diets$: Observable<DietDTO[]> = this._eventContextDtoStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllDietDto.getAll({ eventId: data.selectedEventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(REMOVES_DIET_DTO) private _removesDietDto: RemovesDietDtoPort,
    private modalService: BsModalService,
    @Inject(SETS_DIET_DTO) private _setsDietDto: SetsDietDtoPort,
    @Inject(DIET_ID_DTO_STORAGE)
    private _dietIdDtoStorage: DietIdDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onDietRemoveed(diets$: DietDTO): void {
    this._removesDietDto.remove(diets$.id);
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>, diet: DietDTO) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this._dietIdDtoStorage.next({
      selectedDietId: diet.id,
    });
  }

  onDietEdited(editDietName: FormGroup): void {
    this._setsDietDto.set({
      dietName: editDietName.get('name')?.value,
      id: editDietName.get('id')?.value,
    });
    this.modalRef?.hide();
  }
}
