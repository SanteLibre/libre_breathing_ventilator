/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Observable } from 'rxjs';
import { Country } from '../common/countries';
import { GridData } from '../common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

export interface Order {
  id: number;
  name: string;
  date: Date;
  sum: Sum;
  type: string;
  status: string;
  country: Country;
}

export interface Sum {
  value: number;
  currency: string;
}

export abstract class OrderData {
  abstract get gridDataSource(): DataSource;
  abstract list(pageNumber: number, pageSize: number): Observable<GridData<Order>>;
  abstract get(id: number): Observable<Order>;
  abstract update(order: Order): Observable<Order>;
  abstract create(order: Order): Observable<Order>;
  abstract delete(id: number): Observable<boolean>;
}
