/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NgxAuthComponent,
  NgxLoginComponent,
  NgxRegisterComponent,
  NgxLogoutComponent,
  NgxRequestPasswordComponent,
  NgxResetPasswordComponent,
} from './components';

const routes: Routes = [{
  path: '',
  component: NgxAuthComponent,
  children: [
    {
      path: '',
      component: NgxLoginComponent,
    },
    {
      path: 'login',
      component: NgxLoginComponent,
    },
    {
      path: 'register',
      component: NgxRegisterComponent,
    },
    {
      path: 'logout',
      component: NgxLogoutComponent,
    },
    {
      path: 'request-password',
      component: NgxRequestPasswordComponent,
    },
    {
      path: 'reset-password',
      component: NgxResetPasswordComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
