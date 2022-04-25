import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserAdminPanelComponent } from './list-user-admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ListUserAdminPanelComponent],
  providers: [],
  exports: [ListUserAdminPanelComponent],
})
export class ListUserAdminPanelComponentModule {}
