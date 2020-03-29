/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { AdminGuard } from '../../@auth/admin.guard';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
      path: 'edit/:id',
      canActivate: [AdminGuard],
      component: UserComponent,
    },
    {
      path: 'current',
      component: UserComponent,
    },
    {
      path: 'add',
      canActivate: [AdminGuard],
      component: UserComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {

}
