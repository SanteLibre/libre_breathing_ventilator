/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy {
  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
