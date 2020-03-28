/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Observable } from 'rxjs';
import { User, UserData } from '../../@core/interfaces/common/users';
import { tap } from 'rxjs/operators';
import { UserStore } from '../../@core/stores/user.store';
import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable()
export class InitUserService {
    constructor(protected userStore: UserStore,
        protected usersService: UserData,
        protected themeService: NbThemeService) { }

    initCurrentUser(): Observable<User> {
      return this.usersService.getCurrentUser()
            .pipe(tap((user: User) => {
                if (user) {
                    this.userStore.setUser(user);
                    if (user.settings && user.settings.themeName) {
                      this.themeService.changeTheme(user.settings.themeName);
                    }
                }
            }));
    }
}
