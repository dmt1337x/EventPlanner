import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { AddUserAdminPanelComponentModule } from '../../../../../projects/admin-panel-user/src/lib/adapters/primary/ui/add-user-admin-panel.component-module';
import { FirebaseAdminPanelUserServiceModule } from '../../../../../projects/admin-panel-user/src/lib/adapters/secondary/infrastructure/firebase-admin-panel-user.service-module';
import { ListUserAdminPanelComponentModule } from '../../../../../projects/admin-panel-user/src/lib/adapters/primary/ui/list-user-admin-panel.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPage,
      },
    ]),
    AddUserAdminPanelComponentModule,
    FirebaseAdminPanelUserServiceModule,
    ListUserAdminPanelComponentModule
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
