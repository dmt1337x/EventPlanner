import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectUserComponent } from './connect-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ConnectUserComponent],
  providers: [],
  exports: [ConnectUserComponent],
})
export class ConnectUserComponentModule {}
