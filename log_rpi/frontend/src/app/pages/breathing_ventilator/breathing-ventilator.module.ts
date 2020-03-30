import {NgModule} from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbSpinnerModule,
} from '@nebular/theme';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ThemeModule} from '../../@theme/theme.module';
import {BreathingVentilatorComponent} from './breathing-ventilator.component';
import {ChartModule} from 'angular2-chartjs';
import {EarningCardComponent} from './earning-card/earning-card.component';
import {EarningCardBackComponent} from './earning-card/back-side/earning-card-back.component';
import {EarningPieChartComponent} from './earning-card/back-side/earning-pie-chart.component';
import {EarningCardFrontComponent} from './earning-card/front-side/earning-card-front.component';
import {EarningLiveUpdateChartComponent} from './earning-card/front-side/earning-live-update-chart.component';

import {Card3Component} from './card3/card3.component';
import {Card1Component} from './card1/card1.component';
import {Card2Component} from './card2/card2.component';
import {Card6Component} from './card6/card6.component';
import {Card11Component} from './card11/card11.component';
import {Card21Component} from './card21/card21.component';
import {Card22Component} from './card22/card22.component';
import {Card12Component} from './card12/card12.component';
import {Card23Component} from './card23/card23.component';
import {Card24Component} from './card24/card24.component';
import {Card13Component} from './card13/card13.component';
import {Card25Component} from './card25/card25.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbSpinnerModule,
  ],
  declarations: [
    BreathingVentilatorComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
    Card3Component,
    Card1Component,
    Card2Component,
    Card6Component,
    Card11Component,
    Card21Component,
    Card22Component,
    Card12Component,
    Card23Component,
    Card24Component,
    Card13Component,
    Card25Component,
  ],
  providers: [
  ],
})
export class BreathingVentilatorModule {
}
