/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';
import { PeriodsService } from '../common/periods.service';
import { ChartData } from '../../interfaces/common/chart';

@Injectable()
export class ProfitChartService {

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];

  private data = { };

  constructor(private period: PeriodsService) {
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  private getDataForWeekPeriod(): ChartData {
    const nPoint = this.period.getWeeks().length;

    return {
      chartLabel: '',
      axisXLabels: this.period.getWeeks(),
      legend: ['Payment', 'Cancelled', 'All Orders'],
      linesData: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForMonthPeriod(): ChartData {
    const nPoint = this.period.getMonths().length;

    return {
      chartLabel: '',
      axisXLabels: this.period.getMonths(),
      legend: ['Payment', 'Cancelled', 'All Orders'],
      linesData: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForYearPeriod(): ChartData {
    const nPoint = this.year.length;

    return {
      chartLabel: '',
      axisXLabels: this.year,
      legend: ['Payment', 'Cancelled', 'All Orders'],
      linesData: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 500);
    });
  }

  getProfitChartData(period: string): ChartData {
    return this.data[period];
  }
}
