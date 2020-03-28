/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Location } from '../entity/Location';


@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @Output() positionChanged = new EventEmitter<Location>();

  @ViewChild('search', { static: true })
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address'],
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.positionChanged.emit(
            new Location(place.geometry.location.lat(),
              place.geometry.location.lng()));
        });
      });
    });
  }
}
