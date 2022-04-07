import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAttractionsComponent } from './list-attractions.component';
import { FirebaseAttractionsServiceModule } from '../../secondary/infrastructure/firebase-attractions.service-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FirebaseAttractionsServiceModule,
    ReactiveFormsModule,
  ],
  declarations: [ListAttractionsComponent],
  providers: [],
  exports: [ListAttractionsComponent],
})
export class ListAttractionsComponentModule {}
