/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxValidationMessageComponent } from './validation-message/validation-message.component';

const COMPONENTS = [
  NgxValidationMessageComponent,
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {
}
