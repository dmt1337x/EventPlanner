import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CreateEventComponentModule } from 'projects/events/src/lib/adapters/primary/ui/create-event.component-module';
import { FirebaseCoreServiceModule } from 'projects/core/src/lib/adapters/secondary/infrastructure/firebase-core.service-module';
import { EventsListComponentModule } from 'projects/events/src/lib/adapters/primary/ui/events-list.component-module';
import { SearchEventComponentModule } from 'projects/events/src/lib/adapters/primary/ui/search-event.component-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CreateEventComponentModule,
    FirebaseCoreServiceModule,
    EventsListComponentModule,
    SearchEventComponentModule,
    RouterModule,
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent],
})
export class HomeComponentModule {}
