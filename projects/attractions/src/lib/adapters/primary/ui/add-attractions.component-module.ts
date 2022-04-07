import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAttractionsComponent } from './add-attractions.component';
import { FirebaseAttractionsServiceModule } from '../../secondary/infrastructure/firebase-attractions.service-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FirebaseAttractionsServiceModule,
    ReactiveFormsModule,
  ],
  declarations: [AddAttractionsComponent],
  providers: [],
  exports: [AddAttractionsComponent],
})
export class AddAttractionsComponentModule {}
