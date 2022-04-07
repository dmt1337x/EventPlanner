import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransportPage } from './transport.page';
import { AddTransportComponentModule } from '../../../projects/transport/src/lib/adapters/primary/ui/add-transport.component-module';
import { FirebaseTransportServiceModule } from '../../../projects/transport/src/lib/adapters/secondary/infrastructure/firebase-transport.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TransportPage,
        }
      ]),
  AddTransportComponentModule,
  FirebaseTransportServiceModule
],
  	declarations: [TransportPage],
  	providers: [],
  	exports: [] })
export class TransportPageModule {
}
