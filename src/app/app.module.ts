import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { InformationComponent } from './information/information.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    SwiperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
