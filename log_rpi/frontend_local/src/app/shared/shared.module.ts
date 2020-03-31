import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart.component';
import { EchartsDirective } from './directives/echarts.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [LineChartComponent, EchartsDirective],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NbCardModule
  ],
  exports: [LineChartComponent, EchartsDirective, NgxEchartsModule, NbCardModule]
})
export class SharedModule { }
