/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ToastrComponent } from './toastr/toastr.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [{
  path: '',
  component: ModalOverlaysComponent,
  children: [
    {
      path: 'dialog',
      component: DialogComponent,
    },
    {
      path: 'window',
      component: WindowComponent,
    },
    {
      path: 'popover',
      component: PopoversComponent,
    },
    {
      path: 'tooltip',
      component: TooltipComponent,
    },
    {
      path: 'toastr',
      component: ToastrComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOverlaysRoutingModule {
}


