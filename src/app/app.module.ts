import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  NbListModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
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
    NbListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
