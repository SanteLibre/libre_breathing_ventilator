/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesApi } from '../api/countries.api';
import { CountryData, Country } from '../../../interfaces/common/countries';

@Injectable()
export class CountriesService extends CountryData {

  constructor(private api: CountriesApi) {
    super();
  }

  list(): Observable<Country[]> {
    return this.api.list();
  }
}
