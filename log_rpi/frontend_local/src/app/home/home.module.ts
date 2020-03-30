import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Card3Component } from './card3/card3.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card6Component } from './card6/card6.component';
import { Card11Component } from './card11/card11.component';
import { Card21Component } from './card21/card21.component';
import { Card22Component } from './card22/card22.component';
import { Card12Component } from './card12/card12.component';
import { Card23Component } from './card23/card23.component';
import { Card24Component } from './card24/card24.component';
import { Card13Component } from './card13/card13.component';
import { Card25Component } from './card25/card25.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, Card3Component, Card1Component, Card2Component, Card6Component, Card11Component, Card21Component, Card22Component, Card12Component, Card23Component, Card24Component, Card13Component, Card25Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
