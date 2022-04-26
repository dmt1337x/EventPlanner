import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailDTO } from '../../../application/ports/secondary/user-detail.dto';
import {
  GETS_ALL_USER_DETAIL_DTO,
  GetsAllUserDetailDtoPort,
} from '../../../application/ports/secondary/gets-all-user-detail.dto-port';
import {
  USER_DETAIL_DTO_STORAGE,
  UserDetailDtoStoragePort,
} from '../../../application/ports/secondary/user-detail-dto.storage-port';
import { FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import {
  AddsToAuthDtoPort,
  ADDS_TO_AUTH_DTO,
} from '../../../application/ports/secondary/adds-to-auth.dto-port';
import { Router } from '@angular/router';
import {
  ADDS_PARTICIPANT_DTO,
  AddsParticipantDtoPort,
} from '../../../application/ports/secondary/adds-participant.dto-port';

@Component({
  selector: 'lib-user-registration',
  templateUrl: './user-registration.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent {
  currentUser$: Observable<UserDetailDTO[]> = this._userDetailStorage
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllUserDetailDto.getAll({ userEmail: data.userEmail })
      )
    );

  constructor(
    @Inject(GETS_ALL_USER_DETAIL_DTO)
    private _getsAllUserDetailDto: GetsAllUserDetailDtoPort,
    @Inject(USER_DETAIL_DTO_STORAGE)
    private _userDetailStorage: UserDetailDtoStoragePort,
    @Inject(ADDS_TO_AUTH_DTO)
    private _addsToAuthDto: AddsToAuthDtoPort,
    @Inject(ADDS_PARTICIPANT_DTO)
    private _addsParticipantDto: AddsParticipantDtoPort,
    private _router: Router
  ) {}

  readonly userReg: FormGroup = new FormGroup({
    userName: new FormControl(),
    userLastName: new FormControl(),
    userEmail: new FormControl(),
    userPassword: new FormControl(),
    id: new FormControl(),
    eventId: new FormControl(),
  });

  addParticipantAuth(userReg: FormGroup, user: UserDetailDTO): void {
    this._addsParticipantDto.addParticipant({
      userName: this.userReg.get('userName')?.value,
      userLastName: this.userReg.get('userLastName')?.value,
      userEmail: this.userReg.get('userEmail')?.value,
      eventId: this.userReg.get('eventId')?.value,
    });
    this._addsToAuthDto.addToAuth({
      userPassword: this.userReg.get('userPassword')?.value,
      userEmail: this.userReg.get('userEmail')?.value,
    });
    this.userReg.reset();
    this._router.navigateByUrl('login');
  }
}
