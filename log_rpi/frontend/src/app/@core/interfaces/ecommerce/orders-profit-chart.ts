/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { Observable } from 'rxjs';
import { ChartSummary, ChartData } from '../common/chart';

export abstract class OrdersProfitChartData {
  abstract getOrderProfitChartSummary(): Observable<ChartSummary[]>;
  abstract getOrdersChartData(period: string): Observable<ChartData>;
  abstract getProfitChartData(period: string): Observable<ChartData>;
}
