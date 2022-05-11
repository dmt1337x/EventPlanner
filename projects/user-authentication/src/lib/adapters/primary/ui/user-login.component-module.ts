import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [UserLoginComponent],
  providers: [],
  exports: [UserLoginComponent],
})
export class UserLoginComponentModule {}
