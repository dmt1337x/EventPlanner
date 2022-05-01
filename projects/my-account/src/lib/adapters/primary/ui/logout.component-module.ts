import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';

@NgModule({ imports: [CommonModule],
  	declarations: [LogoutComponent],
  	providers: [],
  	exports: [LogoutComponent] })
export class LogoutComponentModule {
}
