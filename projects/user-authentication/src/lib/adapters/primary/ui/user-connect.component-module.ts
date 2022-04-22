import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConnectComponent } from './user-connect.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UserConnectComponent],
  providers: [],
  exports: [UserConnectComponent],
})
export class UserConnectComponentModule {}
