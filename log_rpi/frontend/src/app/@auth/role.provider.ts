/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { NbAuthService, NbAuthJWTToken, decodeJwtPayload } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleProvider extends NbRoleProvider {

  constructor(private authService: NbAuthService) {
    super();
  }

  getLowerCaseRoles(roles: any): string | string[] {
    if (Array.isArray(roles)) {
      roles = roles.map(element => {
        return element.toLowerCase();
      });
    } else {
      roles = roles.toLowerCase();
    }
    return roles;
  }

  getRole(): Observable<string | string[]> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          const payload = decodeJwtPayload(token.toString());
          return !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'guest';
        }),
      );
  }
}
