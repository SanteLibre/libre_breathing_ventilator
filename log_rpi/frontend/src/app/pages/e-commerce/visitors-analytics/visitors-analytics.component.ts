/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { OutlineData, VisitorsAnalyticsData } from '../../../@core/interfaces/ecommerce/visitors-analytics';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  pieChartValue: number;
  chartLegend: {iconColor: string; title: string}[];
  visitorsAnalyticsData: { innerLine: number[]; outerLine: OutlineData[]; };

  constructor(private themeService: NbThemeService,
              private visitorsAnalyticsChartService: VisitorsAnalyticsData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    forkJoin(
      this.visitorsAnalyticsChartService.getInnerLineChartData(),
      this.visitorsAnalyticsChartService.getOutlineLineChartData(),
      this.visitorsAnalyticsChartService.getPieChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([innerLine, outerLine, pieChartValue]: [number[], OutlineData[], number]) => {
        this.visitorsAnalyticsData = {
          innerLine: innerLine,
          outerLine: outerLine,
        };

        this.pieChartValue = pieChartValue;
      });
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: 'Unique Visitors',
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'Page Views',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
