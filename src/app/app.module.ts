import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MomentModule } from 'ngx-moment';

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
  NbButtonModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent
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
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
