/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'ngx-spinner-in-tabs',
  templateUrl: 'spinner-in-tabs.component.html',
  styleUrls: ['spinner-in-tabs.component.scss'],
})

export class SpinnerInTabsComponent {

  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
  }
}
