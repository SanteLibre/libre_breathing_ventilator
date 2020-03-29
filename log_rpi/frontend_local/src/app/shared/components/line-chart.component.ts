import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SeriesLine = echarts.EChartOption.SeriesLine;


@Component({
  selector: 'app-line-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart' },
  template: `
      <div echarts [options]="options"></div>
  `,
})
export class LineChartComponent implements OnInit, OnDestroy {

  @Input() set data(data: SeriesLine[]) {
    if (data) {
      this._data = this.chartDataMapper(data);
      this.updateOptions();
    }
  }

  options: any = {};

  private _data: SeriesLine[];
  private colorConfig: any = {};
  private destroyed$: Subject<void> = new Subject();

  constructor(
    private theme: NbThemeService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.theme.getJsTheme()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((config: NbJSThemeOptions) => {
        this.colorConfig = config.variables.charts;
        this.updateOptions();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  private updateOptions() {

    if (!this._data) {
      return;
    }

    this.options = {
      backgroundColor: this.colorConfig.bg,
      color: [
        this.colorConfig.danger,
        this.colorConfig.primary,
        this.colorConfig.info,
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}',
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: this.colorConfig.axisLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.colorConfig.textColor,
            },
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            lineStyle: {
              color: this.colorConfig.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: this.colorConfig.splitLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.colorConfig.textColor,
            },
          },
        },
      ],
      grid: {
        top: '8%',
        left: 10,
        right: 10,
        bottom: '4%',
        containLabel: true,
      },
      series: this._data,
    };

    this.cd.markForCheck();
  }

  private chartDataMapper(data: SeriesLine[]): SeriesLine[] {

    return data.map(item => {
      item.type = 'line';
      return item;
    });
  }
}
