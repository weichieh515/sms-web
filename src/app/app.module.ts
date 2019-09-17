import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import local from '@angular/common/locales/zh-Hant';
registerLocaleData(local);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MomentModule } from 'ngx-moment';
import { BarChartModule, PieChartModule } from '@swimlane/ngx-charts';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
  NbTabsetModule,
  NbPopoverModule,
  NbCalendarModule,
  NbCalendarRangeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StatusComponent } from './status/status.component';
import { StatusChartComponent } from './status-chart/status-chart.component';
import { MessageListComponent } from './message-list/message-list.component';
import { FilterComponent } from './filter/filter.component';
import { ReplyListComponent } from './reply-list/reply-list.component';
import { ListEndComponent } from './list-end/list-end.component';
import { ListLoadingComponent } from './list-loading/list-loading.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    StatusChartComponent,
    MessageListComponent,
    FilterComponent,
    ReplyListComponent,
    ListEndComponent,
    ListLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MomentModule,
    InfiniteScrollModule,
    NgSelectModule,
    // nb
    NbThemeModule.forRoot({ name: 'default' }),
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
    NbPopoverModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    // chart
    BarChartModule,
    PieChartModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hant' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
