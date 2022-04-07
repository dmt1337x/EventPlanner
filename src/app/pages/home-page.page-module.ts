import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePagePage } from './home-page.page';
import { HomePageComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/home-page.component-module';
import { NavBarComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/nav-bar.component-module';
import { CreateEventComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/create-event.component-module';
import { FirebaseEventServiceModule } from '../../../projects/events/src/lib/adapters/secondary/infrastructure/firebase-event.service-module';
import { EventsListComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/events-list.component-module';
import { NavBarEventComponentModule } from 'projects/home/src/lib/adapters/primary/ui/nav-bar-event.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePagePage,
      },
    ]),
    HomePageComponentModule,
    NavBarComponentModule,
    CreateEventComponentModule,
    FirebaseEventServiceModule,
    EventsListComponentModule,
    NavBarComponentModule,
    NavBarEventComponentModule,
  ],
  declarations: [HomePagePage],
  providers: [],
  exports: [],
})
export class HomePagePageModule {}
