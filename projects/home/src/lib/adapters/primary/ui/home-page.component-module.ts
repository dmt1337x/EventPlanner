import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({ imports: [CommonModule],
  	declarations: [HomePageComponent],
  	providers: [],
  	exports: [HomePageComponent] })
export class HomePageComponentModule {
}
