/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { SolarData, SolarEnergyStatistics } from '../../interfaces/iot/solar';

@Injectable()
export class SolarService extends SolarData {

  private value: SolarEnergyStatistics = {
    totalValue: 8421,
    solarValue: 6421,
    percent: 42,
    unitOfMeasure: 'kWh',
  };

  getSolarData(): Observable<SolarEnergyStatistics> {
    return observableOf(this.value);
  }
}
