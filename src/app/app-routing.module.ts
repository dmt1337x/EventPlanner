import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { EventPagePageModule } from './pages/event-page.page-module';
import { BlankPageModule } from './pages/blank.page-module';
import { CreateEventPageModule } from './pages/create-event.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'events/:selectedEventId',
    loadChildren: () => EventPagePageModule,
  },
  { 
        path: 'blank', 
        loadChildren: () => BlankPageModule
      },
  { 
        path: 'create-event', 
        loadChildren: () => CreateEventPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
