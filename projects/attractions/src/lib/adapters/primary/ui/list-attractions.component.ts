import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';
import { Observable } from 'rxjs';
import {
  AttractionIdDtoStoragePort,
  ATTRACTION_ID_DTO_STORAGE,
} from '../../../application/ports/secondary/attraction-id-dto.storage-port';
import { AttractionIdDTO } from '../../../application/ports/secondary/attraction-id.dto';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import {
  GetsAllAttractionDtoPort,
  GETS_ALL_ATTRACTION_DTO,
} from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import {
  RemovesAttractionDtoPort,
  REMOVES_ATTRACTION_DTO,
} from '../../../application/ports/secondary/removes-attraction.dto-port';
import {
  SetsAttractionDtoPort,
  SETS_ATTRACTION_DTO,
} from '../../../application/ports/secondary/sets-attraction.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'lib-list-attractions',
  templateUrl: './list-attractions.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAttractionsComponent {
  attractionIdContext$: Observable<AttractionIdDTO> =
    this._attractionIdDtoStorage.asObservable();

  eventContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();
  readonly editAttractionName: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl(),
  });
  attractions$: Observable<AttractionDTO[]> = this._eventContextDtoStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllAttractionDto.getAll({ eventId: data.selectedEventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort,
    @Inject(REMOVES_ATTRACTION_DTO)
    private _removesAttractionDto: RemovesAttractionDtoPort,
    private modalService: BsModalService,
    @Inject(SETS_ATTRACTION_DTO)
    private _setsAttractionDto: SetsAttractionDtoPort,
    @Inject(ATTRACTION_ID_DTO_STORAGE)
    private _attractionIdDtoStorage: AttractionIdDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onAttractionRemoveed(attractions$: AttractionDTO): void {
    this._removesAttractionDto.remove(attractions$.id);
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>, attraction: AttractionDTO) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this._attractionIdDtoStorage.next({
      selectedAttractionId: attraction.id,
    });
  }

  onAttractionEdited(editAttractionName: FormGroup): void {
    this._setsAttractionDto.set({
      attractionName: editAttractionName.get('name')?.value,
      id: editAttractionName.get('id')?.value,
    });
    this.modalRef?.hide();
  }
}
