import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupRoomPage } from './setup-room.page';
import { SetupRoomComponentModule } from '../../../../../projects/user-setup/src/lib/adapters/primary/ui/setup-room.component-module';
import { FirebaseSetupServiceModule, InMemoryRoomContextStorageModule } from '@user-setup';
import { InMemoryParticipantContextStorageModule } from 'projects/user-setup/src/lib/adapters/secondary/infrastructure/in-memory-participant-context.storage-module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseSetupServiceModule,
    InMemoryParticipantContextStorageModule, InMemoryRoomContextStorageModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupRoomPage,
      },
    ]),
    SetupRoomComponentModule,
  ],
  declarations: [SetupRoomPage],
  providers: [],
  exports: [],
})
export class SetupRoomPageModule {}
