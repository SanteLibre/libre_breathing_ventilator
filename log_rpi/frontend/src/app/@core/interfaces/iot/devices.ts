/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { Observable } from 'rxjs';

export interface DeviceViewSettings {
  iconClass: string;
  type: string;
}

export interface DeviceParameter {
  id: number;
  name: string;
  value: number | string;
  min?: number;
  max?: number;
}

export interface Device {
  id: number;
  isOn: boolean;
  name: string;
  type: string;
  settings?: DeviceViewSettings;
  parameters?: DeviceParameter[];
}

export abstract class DevicesData {
  abstract list(): Observable<Device[]>;
  abstract edit(device: Device): Observable<Device>;
}
