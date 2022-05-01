import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupFormComponent } from './setup-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [SetupFormComponent],
  	providers: [],
  	exports: [SetupFormComponent] })
export class SetupFormComponentModule {
}
