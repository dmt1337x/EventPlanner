import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteUserComponent } from './invite-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [InviteUserComponent],
  	providers: [],
  	exports: [InviteUserComponent] })
export class InviteUserComponentModule {
}
