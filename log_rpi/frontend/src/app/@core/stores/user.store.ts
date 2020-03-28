/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';
import { User } from '../interfaces/common/users';
import { Settings, SettingsData } from '../interfaces/common/settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
    private user: User;

    constructor(private settingsService: SettingsData) {}

    getUser(): User {
        return this.user;
    }

    setUser(paramUser: User) {
        this.user = paramUser;
    }

    setSetting(themeName: string): Observable<Settings> {
      if (this.user) {
        if (this.user.settings) {
          this.user.settings.themeName = themeName;
        } else {
          this.user.settings = { themeName: themeName };
        }
        return this.settingsService.updateCurrent(this.user.settings);
      } else {
        return of({ themeName: themeName });
      }
    }
}
