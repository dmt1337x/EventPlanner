import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransportComponent } from './list-transport.component';
import { FirebaseTransportServiceModule } from '../../secondary/infrastructure/firebase-transport.service-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FirebaseTransportServiceModule, ReactiveFormsModule],
  declarations: [ListTransportComponent],
  providers: [],
  exports: [ListTransportComponent],
})
export class ListTransportComponentModule {}
