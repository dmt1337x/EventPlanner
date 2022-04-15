import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransportPage } from './transport.page';
import {
  InMemoryTransportIdStorageModule,
  AddTransportComponentModule,
  ListTransportComponentModule,
  FirebaseTransportServiceModule,
} from '@transport';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransportPage,
      },
    ]),
    AddTransportComponentModule,
    FirebaseTransportServiceModule,
    ListTransportComponentModule,
    InMemoryTransportIdStorageModule,
  ],
  declarations: [TransportPage],
  providers: [],
  exports: [],
})
export class TransportPageModule {}
