import { NgModule } from '@angular/core';
import { FirebaseAppModule } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCurrentUserStorageModule } from '@user-core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    InMemoryCurrentUserStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
