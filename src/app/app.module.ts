import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { NavBarComponentModule } from '@home';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InMemoryEventIdStorageModule } from '@core';
import { InMemoryDietIdStorageModule } from '@diets';
import { InMemoryTransportIdStorageModule } from '@transport';
import { InMemoryAttractionsStorageModule } from '@attractions';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NavBarComponentModule,
    ModalModule.forRoot(),
    InMemoryEventIdStorageModule,
    InMemoryDietIdStorageModule,
    InMemoryTransportIdStorageModule,
    InMemoryAttractionsStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
