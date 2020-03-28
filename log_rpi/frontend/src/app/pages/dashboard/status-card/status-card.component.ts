/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="onClick()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.on = !this.on;
    this.statusChanged.emit(this.on);
  }
}
