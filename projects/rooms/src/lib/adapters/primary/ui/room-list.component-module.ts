import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SeatInRoomsComponentModule } from './seat-in-rooms.component-module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    SeatInRoomsComponentModule,
  ],
  declarations: [RoomListComponent],
  providers: [],
  exports: [RoomListComponent],
})
export class RoomListComponentModule {}
