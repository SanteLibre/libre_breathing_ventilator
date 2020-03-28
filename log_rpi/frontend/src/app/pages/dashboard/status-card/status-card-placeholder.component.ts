/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'ngx-status-card-placeholder',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card [ngClass]="{'off': true}">
      <div class="icon-container">
        <div class="icon primary">
        </div>
      </div>
      <div class="details">
        <div class="title"></div>
        <div class="status">OFF</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardPlaceholderComponent {
}
