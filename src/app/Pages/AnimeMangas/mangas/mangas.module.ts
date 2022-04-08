import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MangasComponent } from './mangas.component';
import {  routingTelasModule } from '../routing.animeMangas.module';
import { PesquisaService } from 'src/app/shared/pesquisa.service';




@NgModule({
  declarations: [
    MangasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routingTelasModule
  ],
  providers: [
    PesquisaService
  ]
})
export class MangasModule { }
