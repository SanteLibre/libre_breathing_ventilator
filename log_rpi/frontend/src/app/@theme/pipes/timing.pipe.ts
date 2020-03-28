/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timing' })
export class TimingPipe implements PipeTransform {
  transform(time: number): string {
    if (time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
    }

    return '00:00';
  }

  private initZero(time: number): string {
    return time < 10 ? '0' : '';
  }
}
