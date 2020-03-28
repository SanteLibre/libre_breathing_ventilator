/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityChart, ElectricityData } from '../../../@core/interfaces/iot/electricity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ElectricityChartComponent } from './electricity-chart/electricity-chart.component';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  private alive = true;

  listData: Electricity[];
  chartData: ElectricityChart;

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  @ViewChild('chart', { static: true }) chart: ElectricityChartComponent;

  constructor(private electricityService: ElectricityData,
              private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
    this.fetchData();
  }

  fetchData() {
    forkJoin(
      this.electricityService.getListData(3),
      this.electricityService.getChartData(this.type),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([listData, chartData]: [Electricity[], ElectricityChart]) => {
        this.listData = listData;
        this.chartData = chartData;

        this.chart && this.chart.resizeChart();
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
