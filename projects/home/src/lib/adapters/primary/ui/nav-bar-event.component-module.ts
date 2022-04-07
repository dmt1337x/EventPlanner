import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarEventComponent } from './nav-bar-event.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavBarEventComponent],
  providers: [],
  exports: [NavBarEventComponent],
})
export class NavBarEventComponentModule {}
