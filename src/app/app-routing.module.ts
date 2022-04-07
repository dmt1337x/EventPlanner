import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePageModule } from './pages/home-page.page-module';
import { EventPagePageModule } from './pages/event-page.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePagePageModule,
  },
  {
    path: 'events/:selectedEventId',
    loadChildren: () => EventPagePageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
