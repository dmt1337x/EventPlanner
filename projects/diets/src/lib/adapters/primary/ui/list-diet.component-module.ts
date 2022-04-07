import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDietComponent } from './list-diet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseDietServiceModule } from '../../secondary/infrastructure/firebase-diet.service-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FirebaseDietServiceModule],
  declarations: [ListDietComponent],
  providers: [],
  exports: [ListDietComponent],
})
export class ListDietComponentModule {}
