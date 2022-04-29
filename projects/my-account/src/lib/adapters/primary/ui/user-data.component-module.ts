import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserDataComponent],
  providers: [],
  exports: [UserDataComponent],
})
export class UserDataComponentModule {}
