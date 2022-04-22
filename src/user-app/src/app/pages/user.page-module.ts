import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { SetupPageModule } from './setup.page-module';
import { UserContextResolverModule } from 'projects/user-core/src/lib/adapters/primary/ui/user-context.resolver-module';
import { UserContextResolver } from 'projects/user-core/src/lib/adapters/primary/ui/user-context.resolver';

@NgModule({
  imports: [
    CommonModule,
    UserContextResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserPage,
        resolve: {
          id: UserContextResolver,
        },
        children: [
          {
            path: 'setup',
            loadChildren: () => SetupPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [UserPage],
  providers: [],
  exports: [],
})
export class UserPageModule {}
