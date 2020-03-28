/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'ngxAuthToken' })
export class AuthPipe implements PipeTransform {
  constructor(private authService: NbAuthService) {}

  transform(url: string): Observable<string> {
    if (!url) {
      return observableOf(url);
    }
    return this.authService.getToken()
      .pipe(map((token: NbAuthToken) => {
        const separator = url.indexOf('?') > 0 ? '&' : '?';
        return `${url}${separator}token=${token.getValue()}`;
      }));

  }
}
