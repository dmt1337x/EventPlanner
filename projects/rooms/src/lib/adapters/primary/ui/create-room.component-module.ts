import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomComponent } from './create-room.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateRoomComponent],
  providers: [],
  exports: [CreateRoomComponent],
})
export class CreateRoomComponentModule {}
