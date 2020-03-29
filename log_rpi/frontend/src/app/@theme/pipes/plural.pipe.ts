/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxPlural' })
export class PluralPipe implements PipeTransform {

  transform(input: number, label: string, pluralLabel: string = ''): string {
    input = input || 0;
    return input === 1
      ? `${input} ${label}`
      : pluralLabel
        ? `${input} ${pluralLabel}`
        : `${input} ${label}s`;
  }
}
