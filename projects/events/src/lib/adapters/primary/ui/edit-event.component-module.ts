import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEventComponent } from './edit-event.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseEventServiceModule } from '../../secondary/infrastructure/firebase-event.service-module';

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule,
    ReactiveFormsModule,
    FirebaseEventServiceModule,
  ],
  declarations: [EditEventComponent],
  providers: [],
  exports: [EditEventComponent],
})
export class EditEventComponentModule {}
