import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditEventPage } from './edit-event.page';
import { EditEventComponentModule } from '../../../projects/events/src/lib/adapters/primary/ui/edit-event.component-module';
import { FirebaseEventServiceModule } from '@events';

@NgModule({
  imports: [
    CommonModule,
    FirebaseEventServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditEventPage,
      },
    ]),
    EditEventComponentModule,
  ],
  declarations: [EditEventPage],
  providers: [],
  exports: [],
})
export class EditEventPageModule {}
