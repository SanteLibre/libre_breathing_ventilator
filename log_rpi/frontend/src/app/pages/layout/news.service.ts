/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const TOTAL_PAGES = 7;

export class NewsPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<NewsPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<NewsPost[]>('assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }
}
