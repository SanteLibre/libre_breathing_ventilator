/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SettingsData, Settings } from '../../interfaces/common/settings';

@Injectable()
export class SettingsService extends SettingsData {

  getCurrentSetting(): Observable<Settings> {
    return of({
      themeName: 'cosmic',
    });
  }

  updateCurrent(setting: any): Observable<Settings> {
    return of({
      themeName: 'corporate',
    });
  }
}
