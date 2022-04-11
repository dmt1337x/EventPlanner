import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail.component';
import { FirebaseEventDetailServiceModule } from '../../secondary/infrastructure/firebase-event-detail.service-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FirebaseEventDetailServiceModule, RouterModule],
  declarations: [EventDetailComponent],
  providers: [],
  exports: [EventDetailComponent],
})
export class EventDetailComponentModule {}
