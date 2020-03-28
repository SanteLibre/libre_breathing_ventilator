/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Observable } from 'rxjs';

export interface LiveUpdateChart {
  liveChart: { value: [string, number] }[];
  delta: {
    up: boolean;
    value: number;
  };
  dailyIncome: number;
}

export interface PieChart {
  value: number;
  name: string;
}

export abstract class EarningData {
  abstract getEarningLiveUpdateCardData(currency: string): Observable<any[]>;
  abstract getEarningCardData(currency: string): Observable<LiveUpdateChart>;
  abstract getEarningPieChartData(): Observable<PieChart[]>;
}
