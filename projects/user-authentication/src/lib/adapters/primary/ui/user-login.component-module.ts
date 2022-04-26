import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component';

@NgModule({ imports: [CommonModule],
  	declarations: [UserLoginComponent],
  	providers: [],
  	exports: [UserLoginComponent] })
export class UserLoginComponentModule {
}
