import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterRoutingModule } from '../footer-routing.module';

import { EquipeComponent } from './equipe.component';



@NgModule({
  declarations: [
    EquipeComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class EquipeModule { }
