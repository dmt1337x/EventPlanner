import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomsPage } from './rooms.page';
import { CreateRoomComponentModule } from '../../../../../projects/rooms/src/lib/adapters/primary/ui/create-room.component-module';
import { FirebaseRoomsServiceModule } from 'projects/rooms/src/lib/adapters/secondary/infrastructure/firebase-rooms.service-module';
import { RoomListComponentModule } from '../../../../../projects/rooms/src/lib/adapters/primary/ui/room-list.component-module';
import { InMemoryRoomContextStorageModule } from 'projects/rooms/src/lib/adapters/secondary/infrastructure/in-memory-room-context.storage-module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseRoomsServiceModule,
    InMemoryRoomContextStorageModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoomsPage,
      },
    ]),
    CreateRoomComponentModule,
    RoomListComponentModule,
  ],
  declarations: [RoomsPage],
  providers: [],
  exports: [],
})
export class RoomsPageModule {}
