import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserAdminPanelComponent } from './add-user-admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddUserAdminPanelComponent],
  providers: [],
  exports: [AddUserAdminPanelComponent],
})
export class AddUserAdminPanelComponentModule {}
