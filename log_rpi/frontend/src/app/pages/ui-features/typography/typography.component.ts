/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
