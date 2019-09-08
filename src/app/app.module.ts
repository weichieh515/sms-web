import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MomentModule } from 'ngx-moment';
import { BarChartModule, PieChartModule } from '@swimlane/ngx-charts';

import 'moment/locale/zh-tw';

// nb
import {
  NbThemeModule,
  NbLayoutModule,
  NbCheckboxModule,
  NbActionsModule,
  NbDatepickerModule,
  NbInputModule,
  NbSearchModule,
  NbMenuModule,
  NbContextMenuModule,
  NbSidebarModule,
  NbWindowModule,
  NbListModule,
  NbCardModule,
  NbUserModule,
  NbAccordionModule,
  NbButtonModule,
  NbBadgeModule,
  NbTooltipModule,
  NbTabsetModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StatusComponent } from './status/status.component';
import { StatusChartComponent } from './status-chart/status-chart.component';
import { MessageListComponent } from './message-list/message-list.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    StatusChartComponent,
    MessageListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MomentModule,
    // nb
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    NbActionsModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbSearchModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbSidebarModule.forRoot(),
    NbWindowModule.forRoot(),
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbAccordionModule,
    NbButtonModule,
    NbBadgeModule,
    NbTooltipModule,
    NbTabsetModule,
    // chart
    BarChartModule,
    PieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
