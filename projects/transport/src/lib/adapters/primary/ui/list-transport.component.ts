import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { EventContextDTO } from 'projects/core/src/lib/application/ports/secondary/event-context.dto';
import { Observable } from 'rxjs';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import {
  EVENT_CONTEXT_DTO_STORAGE,
  EventContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/event-context-dto.storage-port';
import {
  GetsAllTransportDtoPort,
  GETS_ALL_TRANSPORT_DTO,
} from '../../../application/ports/secondary/gets-all-transport.dto-port';
import {
  RemovesTransportDtoPort,
  REMOVES_TRANSPORT_DTO,
} from '../../../application/ports/secondary/removes-transport.dto-port';
import {
  SetsTransportDtoPort,
  SETS_TRANSPORT_DTO,
} from '../../../application/ports/secondary/sets-transport.dto-port';
import {
  TransportIdDtoStoragePort,
  TRANSPORT_ID_DTO_STORAGE,
} from '../../../application/ports/secondary/transport-id-dto.storage-port';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransportIdDTO } from '../../../application/ports/secondary/transport-id.dto';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'lib-list-transport',
  templateUrl: './list-transport.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTransportComponent {
  transportIdContext$: Observable<TransportIdDTO> =
    this._transportIdDtoStorage.asObservable();

  eventContext$: Observable<EventContextDTO> =
    this._eventContextDtoStorage.asObservable();
  readonly editTransportName: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl(),
  });
  transports$: Observable<TransportDTO[]> = this._eventContextDtoStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllTransportDto.getAll({ eventId: data.selectedEventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort,
    @Inject(REMOVES_TRANSPORT_DTO)
    private _removesTransportDto: RemovesTransportDtoPort,
    private modalService: BsModalService,
    @Inject(SETS_TRANSPORT_DTO) private _setsTransportDto: SetsTransportDtoPort,
    @Inject(TRANSPORT_ID_DTO_STORAGE)
    private _transportIdDtoStorage: TransportIdDtoStoragePort,
    @Inject(EVENT_CONTEXT_DTO_STORAGE)
    private _eventContextDtoStorage: EventContextDtoStoragePort
  ) {}

  onTransportRemoveed(transport: TransportDTO): void {
    this._removesTransportDto.remove(transport.id);
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>, transport: TransportDTO) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this._transportIdDtoStorage.next({
      selectedTransportId: transport.id,
    });
  }

  onTransportEdited(editTransportName: FormGroup): void {
    this._setsTransportDto.set({
      transportName: editTransportName.get('name')?.value,
      id: editTransportName.get('id')?.value,
    });
    this.modalRef?.hide();
  }
}
