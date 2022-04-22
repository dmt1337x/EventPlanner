import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [UserRegistrationComponent],
  	providers: [],
  	exports: [UserRegistrationComponent] })
export class UserRegistrationComponentModule {
}
