import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { EventPagePageModule } from './pages/event-page.page-module';
import { CreateEventPageModule } from './pages/create-event.page-module';
import { UsersPageModule } from './pages/users.page-module';
import { RoomsPageModule } from './pages/rooms.page-module';

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
    path: 'create-event',
    loadChildren: () => CreateEventPageModule,
  },
  {
    path: 'users',
    loadChildren: () => UsersPageModule,
  },
  {
    path: 'rooms',
    loadChildren: () => RoomsPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
