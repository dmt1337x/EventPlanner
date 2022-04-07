import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDietComponent } from './add-diet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseDietServiceModule } from '../../secondary/infrastructure/firebase-diet.service-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FirebaseDietServiceModule],
  declarations: [AddDietComponent],
  providers: [],
  exports: [AddDietComponent],
})
export class AddDietComponentModule {}
