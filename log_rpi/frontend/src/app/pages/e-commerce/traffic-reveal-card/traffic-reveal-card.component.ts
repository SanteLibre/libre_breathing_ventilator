/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, OnDestroy } from '@angular/core';
import { TrafficListItem, TrafficListData } from '../../../@core/interfaces/ecommerce/traffic-list';
import { TrafficBar } from '../../../@core/interfaces/ecommerce/traffic-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-traffic-reveal-card',
  styleUrls: ['./traffic-reveal-card.component.scss'],
  templateUrl: './traffic-reveal-card.component.html',
})
export class TrafficRevealCardComponent implements OnDestroy {

  private alive = true;

  trafficBarData: TrafficBar;
  trafficListData: TrafficListItem[];
  revealed = false;
  period: string = 'week';

  constructor(private trafficListService: TrafficListData) {
    this.getTrafficFrontCardData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;
    this.getTrafficFrontCardData(value);
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService.getTrafficListData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(trafficListData => {
        this.trafficListData = trafficListData;
        this.trafficBarData = {
          data: trafficListData.map(item => item.value),
          labels: trafficListData.map(item => item.date),
          formatter: '{c0} GB',
        };
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
