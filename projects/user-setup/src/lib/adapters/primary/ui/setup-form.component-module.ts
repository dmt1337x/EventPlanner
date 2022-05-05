import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupFormComponent } from './setup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [SetupFormComponent],
  providers: [],
  exports: [SetupFormComponent],
})
export class SetupFormComponentModule {}
