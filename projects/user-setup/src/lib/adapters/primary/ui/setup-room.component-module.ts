import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoomComponent } from './setup-room.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [SetupRoomComponent],
  providers: [],
  exports: [SetupRoomComponent],
})
export class SetupRoomComponentModule {}
