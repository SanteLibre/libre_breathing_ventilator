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
import { Device, DevicesData } from '../../interfaces/iot/devices';

@Injectable()
export class DevicesService extends DevicesData {

  private data: Device[] = [
    {
      id: 1,
      name: 'Light',
      isOn: true,
      type: 'Light',
      settings: {
        iconClass: 'nb-lightbulb',
        type: 'primary',
      },
    }, {
      id: 2,
      name: 'Roller Shades',
      isOn: true,
      type: 'RollerShades',
      settings: {
        iconClass: 'nb-roller-shades',
        type: 'success',
      },
    }, {
      id: 3,
      name: 'Wireless Audio',
      isOn: true,
      type: 'WirelessAudio',
      settings: {
        iconClass: 'nb-audio',
        type: 'info',
      },
    }, {
      id: 4,
      name: 'Coffee Maker',
      isOn: true,
      type: 'CoffeeMaker',
      settings: {
        iconClass: 'nb-coffee-maker',
        type: 'warning',
      },
    },
  ];

  list(): Observable<Device[]> {
    return observableOf(this.data);
  }

  edit(device: Device): Observable<Device> {
    return observableOf(device);
  }
}
