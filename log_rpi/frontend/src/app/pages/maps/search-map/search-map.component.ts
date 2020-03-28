/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component } from '@angular/core';
import { Location } from './entity/Location';

@Component({
  selector: 'ngx-search-map',
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {

  searchedLocation: Location = new Location();

  updateLocation(event: Location) {
    this.searchedLocation = new Location(event.latitude, event.longitude);
  }
}
