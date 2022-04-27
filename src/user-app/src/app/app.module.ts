import { NgModule } from '@angular/core';
import { FirebaseAppModule } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryUserLoginContextStorageModule } from 'projects/user-authentication/src/lib/adapters/secondary/infrastructure/in-memory-user-login-context.storage-module';
import { InMemoryUserContextStorageModule } from 'projects/user-core/src/lib/adapters/secondary/infrastructure/in-memory-user-context.storage-module';
import { InMemoryEventContextStorageModule } from 'projects/user-core/src/lib/adapters/secondary/infrastructure/in-memory-event-context.storage-module';
import {
  EventContextResolverModule,
  UserContextResolverModule,
} from '@user-core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    InMemoryUserLoginContextStorageModule,
    InMemoryUserContextStorageModule,
    InMemoryEventContextStorageModule,
    UserContextResolverModule,
    EventContextResolverModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
