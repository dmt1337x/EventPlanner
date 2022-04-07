import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransportComponent } from './add-transport.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseTransportServiceModule } from '../../secondary/infrastructure/firebase-transport.service-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FirebaseTransportServiceModule],
  declarations: [AddTransportComponent],
  providers: [],
  exports: [AddTransportComponent],
})
export class AddTransportComponentModule {}
