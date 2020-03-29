/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserData } from '../../interfaces/common/users';
import { SmartTableData } from '../../interfaces/common/smart-table';

import { UsersService } from './users.service';
import { SmartTableService } from './smart-table.service';
import { PeriodsService } from './periods.service';
import { SettingsData } from '../../interfaces/common/settings';
import { SettingsService } from './settings.service';

const SERVICES = [
  { provide: UserData, useClass: UsersService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: PeriodsService, useClass: PeriodsService },
  { provide: SettingsData, useClass: SettingsService },
];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CommonMockModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
