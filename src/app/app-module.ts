import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { App } from './app';

import { Header } from './header/header';
import { Works } from './works/works';
import { MonthList } from './works/month-list/month-list';
import { MonthItem } from './works/month-list/month-item/month-item';
import { MonthDetails } from './works/month-details/month-details';
import { WorkList } from './works/month-details/work-list/work-list';

import { MonthEdit } from './works/month-details/month-edit/month-edit';
import { Dropdown } from './header/dropdown';
import { MonthListService } from './works/month-list/month-list.service';
import { MonthService } from './works/month-details/month.service';

import { AppRoutingModule } from './app-routing.module';
import { WorksStart } from './works/works-start/works-start';
import { PricePipe } from './price-pipe';
import { CarNamePipe } from './car-name-pipe';
import { RegNumberPipe } from './reg-number-pipe';

@NgModule({
  declarations: [
    App,
    Header,
    Works,
    MonthList,
    MonthItem,
    MonthDetails,
    WorkList,
    MonthEdit,
    Dropdown,
    WorksStart,
    PricePipe,
    CarNamePipe,
    RegNumberPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [provideHttpClient(), MonthListService, MonthService],
  bootstrap: [App],
})
export class AppModule {}
