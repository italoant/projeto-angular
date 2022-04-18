import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import {  routingTelasModule } from '../AnimeMangas/routing.animeMangas.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    routingTelasModule
  ]
})
export class HomeModule { }
