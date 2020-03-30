/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu: NbMenuItem[] = [
      {
        title: 'Breathing ventilator',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
        children: undefined,
      },
    ];

    const menu: NbMenuItem[] = [
    ];

    return of([...dashboardMenu, ...menu]);
  }
}
