import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import {  routingTelasModule } from '../AnimeMangas/routing.animeMangas.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    routingTelasModule
  ]
})
export class HomeModule { }
