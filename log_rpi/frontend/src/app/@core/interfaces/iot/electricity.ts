/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Observable } from 'rxjs';
import { ChartData, ChartSummary } from '../common/chart';

export interface Month {
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface Electricity {
  title: string;
  active?: boolean;
  months: Month[];
}

export interface ElectricityChart {
  chart: ChartData;
  consumed: ChartSummary;
  spent: ChartSummary;
}

export abstract class ElectricityData {
  abstract getListData(yearsCount: number): Observable<Electricity[]>;
  abstract getChartData(period: string): Observable<ElectricityChart>;
}
