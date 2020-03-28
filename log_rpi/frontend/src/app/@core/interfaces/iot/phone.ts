/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  picture: string;
  type: string;
}

export interface RecentUser extends Contact {
  time: number;
}

export abstract class PhoneData {
  abstract getContacts(): Observable<Contact[]>;
  abstract getRecentUsers(): Observable<RecentUser[]>;
}
