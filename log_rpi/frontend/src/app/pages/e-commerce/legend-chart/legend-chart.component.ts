/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, Input } from '@angular/core';

import { NgxLegendItemColor } from './enum.legend-item-color';

@Component({
  selector: 'ngx-legend-chart',
  styleUrls: ['./legend-chart.component.scss'],
  templateUrl: './legend-chart.component.html',
})
export class ECommerceLegendChartComponent {

  /**
   * Take an array of legend items
   * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
   * @type {{iconColor: string; title: string}[]}
   */
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}
