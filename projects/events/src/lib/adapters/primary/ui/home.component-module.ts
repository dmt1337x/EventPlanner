import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SearchEventComponentModule } from './search-event.component-module';
import { EventsListComponentModule } from './events-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchEventComponentModule,
    EventsListComponentModule,
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent],
})
export class HomeComponentModule {}
